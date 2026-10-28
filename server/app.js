// HTTP strežnik STEMMind: API + statični vmesnik.
import express from "express";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { buildSystemPrompt } from "./prompt.js";
import { createStreamFilter, parseMeta, stripMeta } from "./meta.js";
import { streamReply, readHandwriting, isMockMode, MODEL, MODEL_DEEP, REFUSAL_TEXT, ERROR_TEXT } from "./claude.js";
import { Usage, LIMITS, windowHistory } from "./usage.js";
import { Progress } from "./progress.js";
import { mountLeagues } from "./leagues.js";
import { getTopic, getPath, listPaths, pathKeyFor, learningPathPrompt, listPrograms, listProgramPaths } from "./curriculum.js";
import { getExplanation } from "./explanations.js";
import { lessonView, tocView, bookView, listBooks, searchTextbook, lessonSummaryForPrompt, lessonExplanation } from "./textbook.js";
import { printPage } from "./textbook-print.js";
import { detectWeakTopics, weaknessesForPrompt } from "./weaknesses.js";
import { cleanText, ENUMS, DEFAULT_SETTINGS } from "./settings.js";
import { mountAccounts } from "./accounts/index.js";
import { levelUpSuggestion, nextLevel } from "./level-up.js";
import { competitionInfo, competitionKeyFor, isCompetitionPath } from "./competition.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_IMAGE_B64 = 7 * 1024 * 1024; // ~5 MB slike
const MAX_TEXT = 6000;
const ANSWER_CACHE = process.env.STEMMIND_ANSWER_CACHE !== "0";

// Ključ za ponovno uporabo odgovora: isto prvo vprašanje pri istih nastavitvah.
function cacheKey(text, settings, deep) {
  const norm = text.toLowerCase().replace(/\s+/g, " ").replace(/[\s.!?]+$/, "").trim();
  if (norm.length < 8) return null;
  const parts = [norm, settings.subject, settings.track, settings.educational_track, settings.study_program, settings.curriculum_level, settings.solving_mode, settings.personality_setting, deep ? 1 : 0];
  // Jezik dodamo samo, kadar ni slovenščina, da obstoječi shranjeni odgovori ostanejo veljavni.
  if (settings.language && settings.language !== "sl") parts.push(settings.language);
  return crypto.createHash("sha256").update(parts.join("|")).digest("hex");
}

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

export function createApp(store, opts = {}) {
  const { streamFn = streamReply, readFn = readHandwriting } = opts;
  const app = express();
  app.get("/healthz", (_req, res) => res.send("ok")); // za gostovanje, brez gesla
  const accounts = mountAccounts(app, store, opts); // starševski računi in plačila (STEMMIND_ACCOUNTS=1)
  if (process.env.STEMMIND_PASSWORD) app.use(basicAuth(process.env.STEMMIND_PASSWORD));
  app.use(express.json({ limit: "10mb" }));
  // Neuspele klice API zapišemo v dnevnik, da je napako na telefonu mogoče poiskati.
  app.use("/api", (req, res, next) => {
    res.on("finish", () => {
      if (res.statusCode >= 400) console.warn(`[stemmind] ${res.statusCode} ${req.method} ${req.originalUrl}`);
    });
    next();
  });
  app.use(express.static(path.join(here, "..", "public")));
  // Knjižnice za izris strežemo lokalno (brez odvisnosti od CDN).
  const modules = path.join(here, "..", "node_modules");
  app.use("/vendor/katex", express.static(path.join(modules, "katex", "dist")));
  app.use("/vendor/marked", express.static(path.join(modules, "marked")));
  app.use("/vendor/dompurify", express.static(path.join(modules, "dompurify", "dist")));
  app.use("/vendor/nunito", express.static(path.join(modules, "@fontsource-variable", "nunito")));

  // Učbenik za tiskanje / PDF: brezplačno in brez prijave.
  app.get("/ucbenik/:path{/:topic}", (req, res) => {
    const html = printPage(req.params.path, req.params.topic || null);
    if (!html) return res.status(404).send("Ta del učbenika ne obstaja.");
    res.type("html").send(html);
  });

  const busy = new Set(); // pogovori, ki trenutno čakajo na odgovor
  const usage = new Usage(store.db);
  const progress = new Progress(store);

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
    res.json({
      mock: isMockMode(),
      model: MODEL,
      model_deep: MODEL_DEEP,
      enums: ENUMS,
      defaults: DEFAULT_SETTINGS,
      daily_questions: LIMITS.dailyQuestions() || null,
    });
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
  // Prehod v višji razred/letnik: predlog na začetku šolskega leta in ali ima učenec poln paket.
  app.get("/api/students/:id/level-up", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    res.json({ suggestion: levelUpSuggestion(s), next: nextLevel(s.settings), premium: !accounts || accounts.premiumFor(s.id) });
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
    if (!s) return;
    const topic = req.body?.topic_id ? getTopic(req.body.topic_id) : null;
    if (req.body?.topic_id && !topic) return res.status(400).json({ error: "Tema ne obstaja." });
    res.status(201).json(store.createConversation(s.id, topic ? { pathTopic: topic.id, title: `Tema: ${topic.name}` } : {}));
  });
  app.get("/api/conversations/:id", (req, res) => {
    const c = loadConversation(req, res);
    if (!c) return;
    const last = store.lastEvent(c.id);
    res.json({
      ...c,
      state: last ? { subject: last.subject, mode: last.mode } : null,
      topic: c.path_topic ? { id: c.path_topic, name: getTopic(c.path_topic)?.name } : null,
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
    const blocked = usage.blockReason(student.id);
    if (blocked) return res.status(429).json({ error: blocked, limit: true });
    busy.add(conv.id);
    // Zmogljivejši model: gumb »Razloži podrobneje« ali program Tekmovanja.
    const deep = req.body?.deep === true || student.settings.track === "COMPETITION";

    const userContent = [];
    if (image) userContent.push({ type: "image", source: { type: "base64", media_type: image.media_type, data: image.data } });
    userContent.push({ type: "text", text: text || "(Pošiljam fotografijo naloge.)" });
    const isFirst = store.listMessages(conv.id).length === 0;
    const userMsgId = store.addMessage(conv.id, "user", userContent, text, !!image);
    const key = ANSWER_CACHE && isFirst && !image && !conv.path_topic ? cacheKey(text, student.settings, req.body?.deep === true) : null;
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
      // Pogovor o tekmovalni temi: inštruktor namiguje v slogu tekmovanj (model ostane isti).
      const tekTopic = conv.path_topic && isCompetitionPath(getTopic(conv.path_topic)?.path);
      const system = buildSystemPrompt({
        settings: tekTopic ? { ...student.settings, track: "COMPETITION" } : student.settings,
        weaknesses: weaknessesForPrompt(store, student),
        studentName: student.name,
        learningPath: conv.path_topic ? [learningPathPrompt(conv.path_topic), lessonSummaryForPrompt(conv.path_topic)].filter(Boolean).join("\n") : "",
      });
      const cached = key && store.db.prepare("SELECT text FROM answer_cache WHERE key = ? AND created_at >= datetime('now','-30 days')").get(key);
      const run = cached
        ? async ({ onText }) => {
            // Ime učenca je v predpomnilniku shranjeno kot {{IME}}.
            const t = cached.text.replaceAll("{{IME}}", student.name);
            for (let i = 0; i < t.length; i += 40) onText(t.slice(i, i + 40));
            store.db.prepare("UPDATE answer_cache SET hits = hits + 1 WHERE key = ?").run(key);
            return { content: [{ type: "text", text: t }], text: t, stopReason: "end_turn", usage: null, model: "cache" };
          }
        : streamFn;
      const result = await run({
        system,
        messages: windowHistory(store.apiHistory(conv.id)),
        deep,
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
      // V zgodovino shranimo samo besedilo (brez blokov razmišljanja): manj žetonov
      // pri naslednjih klicih in nobenih težav ob krajšanju zgodovine.
      let content = [{ type: "text", text: result.text || "…" }];
      const cost = cached ? 0 : usage.log(student.id, result.model || (deep ? MODEL_DEEP : MODEL), result.usage);
      if (key && !cached && result.stopReason === "end_turn" && result.text) {
        const generic = student.name.length > 1 ? result.text.replaceAll(student.name, "{{IME}}") : result.text;
        store.db.prepare("INSERT OR REPLACE INTO answer_cache (key, text) VALUES (?, ?)").run(key, generic);
      }
      if (result.stopReason === "refusal") {
        display = REFUSAL_TEXT;
        content = [{ type: "text", text: REFUSAL_TEXT }];
        meta = { subject: meta?.subject ?? student.settings.subject, topic: null, error: 0, mode: meta?.mode ?? null, flag: "unsafe" };
      }
      if (!display) display = "…";

      const assistantId = store.addMessage(conv.id, "assistant", content, display);
      if (meta) {
        store.addEvent({ student_id: student.id, conversation_id: conv.id, message_id: assistantId, ...meta });
        if (meta.done && conv.path_topic && progress.markMastered(student.id, conv.path_topic, "chat")) {
          send("mastered", { topic: getTopic(conv.path_topic)?.name });
        }
      } else {
        console.warn(`[stemmind] odgovor brez META (pogovor ${conv.id})`);
      }
      finished = true;
      send("done", {
        id: assistantId,
        text: display,
        state: meta ? { subject: meta.subject, mode: meta.mode } : null,
        title: store.getConversation(conv.id).title,
        deep,
        cost_usd: Math.round(cost * 10000) / 10000,
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

  // --- učne poti ---
  app.get("/api/paths", (req, res) =>
    // Tekmovalne poti so v svojem razdelku (zavihek Tekmovanja), ne na učni poti.
    res.json(req.query.program ? listProgramPaths(String(req.query.program)) : listPaths(req.query.subject).filter((p) => p.school !== "TEK")),
  );
  app.get("/api/programs", (req, res) => res.json(listPrograms()));
  app.get("/api/students/:id/path", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const key = req.query.key || pathKeyFor(s.settings);
    const view = key && progress.pathView(s.id, key);
    if (!view) return res.json({ key: null, message: "Za to raven še ni učne poti." });
    res.json({ ...view, defaultKey: pathKeyFor(s.settings), xp: progress.xpSummary(s.id) });
  });
  app.get("/api/topic", (req, res) => {
    const t = getTopic(req.query.id);
    if (!t) return res.status(404).json({ error: "Tema ne obstaja." });
    res.json({ ...t, pathLabel: getPath(t.path).label, explanation: getExplanation(t.id)?.text || lessonExplanation(t.id) });
  });
  // --- učbenik ---
  app.get("/api/textbook/books", (req, res) => res.json(listBooks({ program: req.query.program ? String(req.query.program) : null })));
  app.get("/api/textbook/toc", (req, res) => {
    if (req.query.book) {
      const book = bookView(String(req.query.book));
      return book ? res.json(book) : res.status(404).json({ error: "Učbenik ne obstaja." });
    }
    const toc = tocView(String(req.query.path || ""));
    if (!toc) return res.status(404).json({ error: "Učna pot ne obstaja." });
    res.json(toc);
  });
  // Lekcija za učenca. Interaktivni del (poskusi, simulacije, sprotno preverjanje)
  // je v plačljivem paketu in preizkusu; besedilo je za vse (tudi kot PDF).
  app.get("/api/students/:id/lesson", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const view = lessonView(String(req.query.id || ""));
    if (!view) return res.status(404).json({ error: "Tema ne obstaja." });
    const interactive = !accounts || accounts.premiumFor(s.id);
    if (interactive) return res.json({ ...view, interactive: true });
    res.json({
      ...view,
      interactive: false,
      locked: { demo: view.demo?.title || null },
      demos: [],
      demo: null,
    });
  });
  app.get("/api/textbook/search", (req, res) => {
    const subject = /^[A-Z]{2,6}$/.test(req.query.subject || "") ? req.query.subject : undefined;
    res.json(searchTextbook(String(req.query.q || "").slice(0, 100), { subject }));
  });
  app.post("/api/students/:id/topic-status", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const { topic_id, status } = req.body || {};
    if (!getTopic(topic_id) || !["new", "learning", "mastered"].includes(status)) return res.status(400).json({ error: "Napačni podatki." });
    progress.setStatus(s.id, topic_id, status);
    res.json({ ok: true });
  });

  // --- vadnica ---
  app.post("/api/students/:id/practice/next", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.nextPractice(s.id, req.body?.topic_id);
    if (!out) return res.status(400).json({ error: "Za to temo še ni vaj." });
    res.json(out);
  });
  app.post("/api/students/:id/review", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.startReview(s.id, { quick: !!req.body?.quick });
    if (!out) return res.json({ finished: true, empty: true });
    res.json(out);
  });
  // Načini učenja: nova snov, ponavljanje, priprava na test, dnevni trening.
  app.get("/api/students/:id/modes", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json(progress.modes(s.id, getPath(String(req.query.path || "")) ? String(req.query.path) : pathKeyFor(s.settings)));
  });
  app.post("/api/students/:id/daily", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const key = getPath(String(req.body?.path || "")) ? String(req.body.path) : pathKeyFor(s.settings);
    const out = progress.startDaily(s.id, key);
    if (!out) return res.json({ finished: true, empty: true });
    res.json(out);
  });
  app.post("/api/students/:id/unit-practice", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.startUnit(s.id, String(req.body?.path || ""), Number(req.body?.unit));
    if (!out) return res.status(400).json({ error: "Ta sklop je še zaklenjen ali nima vaj." });
    res.json(out);
  });
  // --- tekmovanja: samo težje naloge v slogu tekmovanj ---
  app.get("/api/students/:id/competition", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const defaultKey = competitionKeyFor(s.settings);
    const key = isCompetitionPath(req.query.key) ? String(req.query.key) : defaultKey;
    if (!key) return res.json({ key: null, message: "Tekmovanja so na voljo za osnovno in srednjo šolo." });
    res.json({
      ...competitionInfo(key),
      ...progress.pathView(s.id, key),
      defaultKey,
      history: progress.contestHistory(s.id, key),
      openContest: progress.openContest(s.id, key),
    });
  });
  app.post("/api/students/:id/competition-training", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.startCompetition(s.id, String(req.body?.path || ""));
    if (!out) return res.status(400).json({ error: "Za to tekmovanje še ni nalog." });
    res.json(out);
  });
  app.post("/api/students/:id/contest", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.startContest(s.id, String(req.body?.path || ""));
    if (!out) return res.status(400).json({ error: "Za to tekmovanje še ni nalog." });
    res.json(out);
  });
  app.post("/api/students/:id/contest/finish", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const sess = progress.getSession(String(req.body?.sessionId || ""));
    if (!sess || sess.student_id !== s.id || sess.kind !== "contest") return res.status(404).json({ error: "Tekmovanje ne obstaja." });
    res.json({ contest: progress.finishContest(sess) });
  });

  app.get("/api/students/:id/test-plan", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json({ plan: progress.testPlan(s.id) });
  });
  app.post("/api/students/:id/test-plan", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const plan = progress.setTestPlan(s.id, String(req.body?.path || ""), req.body?.units, req.body?.date);
    if (!plan) return res.status(400).json({ error: "Izberi vsaj en sklop in datum testa." });
    res.json({ plan });
  });
  app.delete("/api/students/:id/test-plan", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    progress.clearTestPlan(s.id);
    res.json({ ok: true });
  });
  app.post("/api/students/:id/test-prep", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.startTest(s.id);
    if (!out) return res.status(400).json({ error: "Najprej nastavi pripravo na test (sklopi z vajami in datum)." });
    res.json(out);
  });
  app.post("/api/students/:id/placement", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.startPlacement(s.id, req.body?.path, Number(req.body?.unit));
    if (!out) return res.status(400).json({ error: "Za ta sklop ni preizkusa znanja." });
    res.json(out);
  });
  app.post("/api/students/:id/tasks/:taskId/answer", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.answer(s.id, intParam(req.params.taskId), req.body?.answer);
    if (out.error) return res.status(400).json(out);
    res.json(out);
  });
  // Poskusno tekmovanje: preskoči nalogo (0 točk).
  app.post("/api/students/:id/tasks/:taskId/skip", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.skipContestTask(s.id, intParam(req.params.taskId));
    if (out.error) return res.status(400).json(out);
    res.json(out);
  });
  // Branje odgovora, napisanega s prstom/miško. Vrne prepis, ki ga učenec potrdi.
  app.post("/api/students/:id/tasks/:taskId/read", async (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const t = progress.getTask(intParam(req.params.taskId));
    if (!t || t.student_id !== s.id) return res.status(404).json({ error: "Naloga ne obstaja." });
    const m = /^data:(image\/(?:png|jpeg|webp));base64,(.+)$/.exec(String(req.body?.image || ""));
    if (!m || m[2].length > 2 * 1024 * 1024) return res.status(400).json({ error: "Slika zapisa manjka ali je prevelika." });
    const blocked = usage.blockReason(s.id);
    if (blocked) return res.status(429).json({ error: blocked });
    try {
      const a = t.payload.answer || {};
      const out = await readFn({ imageBase64: m[2], mediaType: m[1], answerType: a.type, unit: a.unit || null });
      if (out.mock) return res.json({ text: null, message: "Branje rokopisa deluje, ko je nastavljen API ključ. Do takrat odgovor vpiši s tipkami." });
      if (out.usage) usage.log(s.id, out.model, out.usage, "ocr");
      res.json({ text: out.text, message: out.text ? null : "Zapisa nisem uspel prebrati. Poskusi pisati večje ali uporabi tipke." });
    } catch (err) {
      console.error("[stemmind] branje rokopisa:", err?.message || err);
      res.status(502).json({ error: "Branje zapisa trenutno ne deluje. Odgovor vpiši s tipkami." });
    }
  });
  // »Vprašaj STEMMind«: odpre pogovor z nalogo in učenčevim odgovorom.
  app.post("/api/students/:id/tasks/:taskId/help", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const t = progress.getTask(intParam(req.params.taskId));
    if (!t || t.student_id !== s.id) return res.status(404).json({ error: "Naloga ne obstaja." });
    const conv = store.createConversation(s.id, { pathTopic: t.topic_id, title: `Naloga: ${getTopic(t.topic_id)?.name ?? "vadnica"}` });
    const text = `Rešujem nalogo iz Vadnice:\n\n${t.payload.text}\n\n${t.last_answer ? `Moj odgovor je bil: ${t.last_answer}. Ni pravilen.` : "Ne vem, kako začeti."} Mi pomagaš najti, kje se zatakne? Rešitve mi ne povej.`;
    res.json({ conversation: conv, text });
  });

  // --- XP in lestvica ---
  app.get("/api/students/:id/xp", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json({ ...progress.xpSummary(s.id), leaderboard: progress.leaderboard() });
  });

  // --- tedenske lige, razredi in skupine prijateljev ---
  mountLeagues(app, store, { loadStudent });

  // --- poraba AI ---
  app.get("/api/usage", (_req, res) => res.json(usage.summary()));

  return app;
}
