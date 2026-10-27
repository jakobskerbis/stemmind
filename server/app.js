// HTTP strežnik STEMMind: API + statični vmesnik.
import express from "express";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { buildSystemPrompt } from "./prompt.js";
import { createStreamFilter, parseMeta, stripMeta } from "./meta.js";
import { streamReply, isMockMode, MODEL, REFUSAL_TEXT, ERROR_TEXT } from "./claude.js";
import { detectWeakTopics, weaknessesForPrompt } from "./weaknesses.js";
import { cleanText, ENUMS, DEFAULT_SETTINGS } from "./settings.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_IMAGE_B64 = 7 * 1024 * 1024; // ~5 MB slike
const MAX_TEXT = 6000;

function basicAuth(password) {
  const expected = Buffer.from(password);
  return (req, res, next) => {
    const header = req.headers.authorization || "";
    const [, b64] = header.split(" ");
    const pass = Buffer.from(Buffer.from(b64 || "", "base64").toString().split(":").slice(1).join(":"));
    if (pass.length === expected.length && crypto.timingSafeEqual(pass, expected)) return next();
    res.set("WWW-Authenticate", 'Basic realm="STEMMind"').status(401).send("Potrebna je prijava.");
  };
}

export function createApp(store, { streamFn = streamReply } = {}) {
  const app = express();
  app.get("/healthz", (_req, res) => res.send("ok")); // za gostovanje, brez gesla
  if (process.env.STEMMIND_PASSWORD) app.use(basicAuth(process.env.STEMMIND_PASSWORD));
  app.use(express.json({ limit: "10mb" }));
  app.use(express.static(path.join(here, "..", "public")));
  // Knjižnice za izris strežemo lokalno (brez odvisnosti od CDN).
  const modules = path.join(here, "..", "node_modules");
  app.use("/vendor/katex", express.static(path.join(modules, "katex", "dist")));
  app.use("/vendor/marked", express.static(path.join(modules, "marked")));
  app.use("/vendor/dompurify", express.static(path.join(modules, "dompurify", "dist")));

  const busy = new Set(); // pogovori, ki trenutno čakajo na odgovor

  const intParam = (v) => (/^\d+$/.test(v) ? Number(v) : NaN);
  const loadStudent = (req, res) => {
    const s = store.getStudent(intParam(req.params.id));
    if (!s) res.status(404).json({ error: "Učenec ne obstaja." });
    return s;
  };
  const loadConversation = (req, res) => {
    const c = store.getConversation(intParam(req.params.id));
    if (!c) res.status(404).json({ error: "Pogovor ne obstaja." });
    return c;
  };

  app.get("/api/config", (_req, res) => {
    res.json({ mock: isMockMode(), model: MODEL, enums: ENUMS, defaults: DEFAULT_SETTINGS });
  });

  // --- učenci in nastavitve ---
  app.get("/api/students", (_req, res) => res.json(store.listStudents()));
  app.post("/api/students", (req, res) => {
    const name = cleanText(req.body?.name, 40);
    if (!name) return res.status(400).json({ error: "Vpiši ime." });
    res.status(201).json(store.createStudent(name, req.body?.settings));
  });
  app.get("/api/students/:id", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json(s);
  });
  app.put("/api/students/:id", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const name = req.body?.name !== undefined ? cleanText(req.body.name, 40) || s.name : undefined;
    res.json(
      store.updateStudent(s.id, {
        name,
        settings: req.body?.settings,
        manual_weaknesses: req.body?.manual_weaknesses,
      }),
    );
  });
  app.delete("/api/students/:id", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json({ ok: store.deleteStudent(s.id) });
  });

  // --- napredek (analitika iz META) ---
  app.get("/api/students/:id/progress", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const topics = store.topicStats(s.id).map((t) => ({ ...t, rate: t.turns ? t.errors / t.turns : 0 }));
    res.json({
      topics,
      weak: detectWeakTopics(store.topicStats(s.id)),
      manual_weaknesses: s.manual_weaknesses,
      flags: store.flagEvents(s.id),
      activity: store.activityByDay(s.id),
    });
  });

  // Ogled sestavljenega prompta, samo za razvoj.
  app.get("/api/students/:id/prompt", (req, res) => {
    if (process.env.STEMMIND_DEBUG !== "1") return res.status(404).end();
    const s = loadStudent(req, res);
    if (!s) return;
    res.type("text/plain").send(
      buildSystemPrompt({ settings: s.settings, weaknesses: weaknessesForPrompt(store, s), studentName: s.name }),
    );
  });

  // --- pogovori ---
  app.get("/api/students/:id/conversations", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json(store.listConversations(s.id));
  });
  app.post("/api/students/:id/conversations", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.status(201).json(store.createConversation(s.id));
  });
  app.get("/api/conversations/:id", (req, res) => {
    const c = loadConversation(req, res);
    if (!c) return;
    const last = store.lastEvent(c.id);
    res.json({
      ...c,
      state: last ? { subject: last.subject, mode: last.mode } : null,
      messages: store.listMessages(c.id).map((m) => ({
        id: m.id,
        role: m.role,
        text: m.display_text,
        has_image: !!m.has_image,
        created_at: m.created_at,
      })),
    });
  });
  app.delete("/api/conversations/:id", (req, res) => {
    const c = loadConversation(req, res);
    if (c) res.json({ ok: store.deleteConversation(c.id) });
  });

  // --- klepet (Server-Sent Events) ---
  app.post("/api/conversations/:id/messages", async (req, res) => {
    const conv = loadConversation(req, res);
    if (!conv) return;
    const student = store.getStudent(conv.student_id);

    const text = typeof req.body?.text === "string" ? req.body.text.trim().slice(0, MAX_TEXT) : "";
    const image = req.body?.image;
    if (image && (!IMAGE_TYPES.includes(image.media_type) || typeof image.data !== "string" || image.data.length > MAX_IMAGE_B64)) {
      return res.status(400).json({ error: "Slika mora biti JPG, PNG, WEBP ali GIF in manjša od 5 MB." });
    }
    if (!text && !image) return res.status(400).json({ error: "Sporočilo je prazno." });
    if (busy.has(conv.id)) return res.status(409).json({ error: "Počakaj, da STEMMind odgovori." });
    busy.add(conv.id);

    const userContent = [];
    if (image) userContent.push({ type: "image", source: { type: "base64", media_type: image.media_type, data: image.data } });
    userContent.push({ type: "text", text: text || "(Pošiljam fotografijo naloge.)" });
    const userMsgId = store.addMessage(conv.id, "user", userContent, text, !!image);
    if (conv.title === "Nov pogovor") {
      store.renameConversation(conv.id, cleanText(text, 50) || "Naloga s fotografije");
    }

    res.writeHead(200, {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    });
    const send = (event, data) => res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);

    const controller = new AbortController();
    let finished = false;
    res.on("close", () => {
      if (!finished) controller.abort();
    });

    const filter = createStreamFilter();
    try {
      const system = buildSystemPrompt({
        settings: student.settings,
        weaknesses: weaknessesForPrompt(store, student),
        studentName: student.name,
      });
      const result = await streamFn({
        system,
        messages: store.apiHistory(conv.id),
        competition: student.settings.track === "COMPETITION",
        signal: controller.signal,
        onText: (chunk) => {
          const out = filter.push(chunk);
          if (out) send("delta", { text: out });
        },
      });
      if (controller.signal.aborted) throw new Error("aborted");

      const { rest } = filter.end();
      if (rest) send("delta", { text: rest });

      let meta = parseMeta(result.text);
      let display = stripMeta(result.text);
      let content = result.content;
      if (result.stopReason === "refusal") {
        display = REFUSAL_TEXT;
        content = [{ type: "text", text: REFUSAL_TEXT }];
        meta = { subject: meta?.subject ?? student.settings.subject, topic: null, error: 0, mode: meta?.mode ?? null, flag: "unsafe" };
      }
      if (!display) display = "…";

      const assistantId = store.addMessage(conv.id, "assistant", content, display);
      if (meta) {
        store.addEvent({ student_id: student.id, conversation_id: conv.id, message_id: assistantId, ...meta });
      } else {
        console.warn(`[stemmind] odgovor brez META (pogovor ${conv.id})`);
      }
      finished = true;
      send("done", {
        id: assistantId,
        text: display,
        state: meta ? { subject: meta.subject, mode: meta.mode } : null,
        title: store.getConversation(conv.id).title,
      });
      res.end();
    } catch (err) {
      finished = true;
      // Neuspelo potezo odstranimo, da zgodovina ostane čista za ponovni poskus.
      store.db.prepare("DELETE FROM messages WHERE id = ?").run(userMsgId);
      if (!controller.signal.aborted) {
        console.error("[stemmind] napaka pri klicu modela:", err?.status ?? "", err?.message ?? err);
        send("error", { error: ERROR_TEXT });
      }
      res.end();
    } finally {
      busy.delete(conv.id);
    }
  });

  return app;
}
