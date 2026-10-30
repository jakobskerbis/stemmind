// HTTP strežnik Evklid: API + statični vmesnik.
import "./env.js";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { buildSystemPrompt } from "./prompt.js";
import { createStreamFilter, parseMeta, parseCards, stripMeta } from "./meta.js";
import { studentResults } from "./results.js";
import { streamReply, readHandwriting, isMockMode, MODEL, MODEL_DEEP, MODEL_MID, REFUSAL_TEXT, ERROR_TEXT } from "./claude.js";
import { Usage, LIMITS, windowHistory, recentHistory } from "./usage.js";
import { pricingAdvice } from "./advice.js";
import { codeHint } from "./hints.js";
import { Progress } from "./progress.js";
import { mountLeagues } from "./leagues.js";
import { getTopic, getPath, listPaths, pathKeyFor, pathLabelFor, learningPathPrompt, listPrograms, listProgramPaths, localTopic } from "./curriculum.js";
import { uiLanguage } from "../public/i18n/languages.js";
import { lessonView, tocView, bookView, listBooks, searchTextbook, lessonSummaryForPrompt, lessonExplanation, explanationFor, formulaSheet } from "./textbook.js";
import { printPage } from "./textbook-print.js";
import { programReferences, referencesFor, themesFor } from "./references.js";
import { SETTINGS_TOOLS, createSettingsTools, cleanDevice, looksLikeSettings } from "./chat-settings.js";
import { detectWeakTopics, weaknessesForPrompt } from "./weaknesses.js";
import { cleanText, ENUMS, DEFAULT_SETTINGS } from "./settings.js";
import { mountAccounts } from "./accounts/index.js";
import { passwordGate, gateNeeded } from "./gate.js";
import { levelUpSuggestion, nextLevel } from "./level-up.js";
import { competitionInfo, competitionKeyFor, isCompetitionPath } from "./competition.js";
import { examInfo, examKeyFor, isExamPath, examOf, examPrompt, taskLanguage, localizeExamView, localizeExamTopic } from "./exams.js";
import { compressedStatic, compressedJson } from "./compress.js";
import { mountFeedback, feedbackAiOn, feedbackPromptOn, isLocalRequest } from "./feedback.js";
import { mountGraphs } from "./graphs.js";
import { mountGames } from "./games.js";
import { Avatars, mountAvatar } from "./avatar.js";
import { Knowledge, mountKnowledge } from "./zbirke.js";
import { mountCorner } from "./corner.js";
import { mountWebApp } from "./webapp.js";
import { Schedules, scheduleView, schedulePrompt, syncTestPlan } from "./schedule.js";
import { mountSchedule } from "./schedule-api.js";
import { appVersion, vendorVersion } from "./razlicica.js";
import { BRAND } from "./brand.js";
import { mobileClient, mountMobile } from "./mobile/index.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_IMAGE_B64 = 7 * 1024 * 1024; // ~5 MB slike
const MAX_TEXT = 6000;
const ANSWER_CACHE = process.env.EVKLID_ANSWER_CACHE !== "0";

// Ključ za ponovno uporabo odgovora: isto prvo vprašanje pri istih nastavitvah.
// mode: način klica (chat/lite/think/deep); pathTopic: tema učne poti (npr. »Začniva s temo …«).
function cacheKey(text, settings, mode, lite = false, pathTopic = null, weak = [], tier = "osnovna") {
  const norm = text.toLowerCase().replace(/\s+/g, " ").replace(/[\s.!?]+$/, "").trim();
  if (norm.length < 8) return null;
  const parts = [norm, settings.subject, settings.track, settings.educational_track, settings.study_program, settings.study_course, settings.curriculum_level, settings.solving_mode, settings.personality_setting, mode === "deep" ? 1 : 0];
  if (mode === "think") parts.push("think");
  if (mode === "mid") parts.push("mid");
  // Pri temi učne poti tudi šibke točke, da se osebni odgovor ne prenese k drugemu učencu.
  if (pathTopic) parts.push(`tema:${pathTopic}`, weak.join(","));
  // Jezik dodamo samo, kadar ni slovenščina, da obstoječi shranjeni odgovori ostanejo veljavni.
  if (settings.language && settings.language !== "sl") parts.push(settings.language);
  if (settings.region && settings.region !== "SI") parts.push(settings.region);
  if (settings.school_system && settings.school_system !== "SI") parts.push(settings.school_system);
  if (settings.dialect) parts.push(`d:${settings.dialect}`);
  if (lite) parts.push("lite");
  // Zahtevnost po rezultatih učenca (osnovna je privzeta, da shranjeni odgovori ostanejo veljavni).
  if (tier && tier !== "osnovna") parts.push(`zahtevnost:${tier}`);
  return crypto.createHash("sha256").update(parts.join("|")).digest("hex");
}

// Pisave slogov (docs/oblikovanje.md): Čist = Instrument Sans, Igriv = Nunito, Temen = IBM Plex Sans.
// Brskalnik prenese le pisavo, ki jo slog res uporablja.
const FONTS = [["nunito", "nunito"], ["instrument-sans", "instrument-sans"], ["ibm-plex-sans", "ibm-plex-sans"]];

// Stara povezava (ngrok ali začasni tunel Cloudflare) vodi na lastno domeno (brand.json), ko ta
// kaže na ta isti strežnik: nameščena aplikacija in shranjene povezave tako ne ostanejo prazne.
const INSTANCE = crypto.randomUUID();
const TUNNEL_HOST = /\.(ngrok(-free)?\.(app|dev|io|pizza)|trycloudflare\.com)$/i;
function mountOldLinkRedirect(app, homeCheck) {
  const domain = BRAND.domain;
  if (!domain || process.env[`${BRAND.env}_PREUSMERI`] === "0") return;
  const check = homeCheck || (async () => {
    const r = await fetch(`https://${domain}/healthz/stanje`, { signal: AbortSignal.timeout(4000) });
    return (await r.json()).id === INSTANCE;
  });
  // Odgovor velja 5 minut; potem ga osvežimo v ozadju (zahteva ne čaka do 4 s, sicer bi service
  // worker po svojem roku 4 s ponudil shranjeno stran namesto preusmeritve). Čaka le prva zahteva.
  let known = { at: 0, ok: false };
  let pending = null;
  const refresh = () => (pending ||= check().catch(() => false).then((ok) => {
    known = { at: Date.now(), ok };
    pending = null;
    return ok;
  }));
  const homeIsUs = () => {
    if (Date.now() - known.at < 5 * 60 * 1000) return known.ok;
    const p = refresh();
    return known.at ? known.ok : p;
  };
  app.use(async (req, res, next) => {
    if (!TUNNEL_HOST.test(req.hostname || "") || !req.originalUrl.startsWith("/") || !(await homeIsUs())) return next();
    res.set("Cache-Control", "no-store");
    res.redirect(302, `https://${domain}${req.originalUrl}`);
  });
}

export function createApp(store, opts = {}) {
  const { streamFn = streamReply, readFn = readHandwriting } = opts;
  const app = express();
  mountOldLinkRedirect(app, opts.homeCheck);
  app.get("/healthz", (_req, res) => res.send("ok")); // za gostovanje, brez gesla
  // Različica in zasedenost: odprte strani se po posodobitvi osvežijo, samodejna posodobitev
  // (scripts/nadzor.js) pa strežnik znova zažene, ko nihče ne čaka na odgovor.
  const version = appVersion();
  const activity = { active: 0, lastSend: 0 };
  app.get("/healthz/stanje", (_req, res) => {
    res.set("Cache-Control", "no-store");
    res.json({ id: INSTANCE, razlicica: version, aktivni: activity.active, mirujeMs: activity.lastSend ? Date.now() - activity.lastSend : null });
  });
  app.use(mobileClient); // mobilna aplikacija: seja v glavi namesto piškotka (server/mobile)
  const accounts = mountAccounts(app, store, opts); // starševski računi in plačila (EVKLID_ACCOUNTS=1)
  mountMobile(app, accounts, { scheduler: opts.scheduler, fetchFn: opts.fetchFn, ...opts.mobile }); // prijava z Apple, nakupi v trgovinah, obvestila, /prenesi
  if (gateNeeded()) app.use(passwordGate(process.env.EVKLID_PASSWORD)); // skupno geslo (samo brez računov, glej gate.js)
  mountWebApp(app); // manifest v jeziku vmesnika, povezava za Google Play
  app.use("/api", (req, res, next) => {
    activity.active++;
    if (req.method !== "GET") activity.lastSend = Date.now();
    let done = false;
    const end = () => {
      if (done) return;
      done = true;
      activity.active--;
    };
    res.on("finish", end);
    res.on("close", end);
    next();
  });
  app.use(express.json({ limit: "10mb" }));
  // Neuspele klice API zapišemo v dnevnik, da je napako na telefonu mogoče poiskati.
  app.use("/api", (req, res, next) => {
    res.on("finish", () => {
      if (res.statusCode >= 400) console.warn(`[evklid] ${res.statusCode} ${req.method} ${req.originalUrl}`);
    });
    next();
  });
  // Knjižnice za izris strežemo lokalno (brez odvisnosti od CDN).
  const modules = path.join(here, "..", "node_modules");
  const publicDir = path.join(here, "..", "public");
  // Service worker z različico knjižnic v imenu predpomnilnika (glej server/razlicica.js).
  const swSource = fs.readFileSync(path.join(publicDir, "sw.js"), "utf8").replace('"evklid-v1"', `"evklid-v1-${vendorVersion()}"`);
  app.get("/sw.js", (_req, res) => {
    res.set("Cache-Control", "no-cache");
    res.type("text/javascript").send(swSource);
  });
  // Lahki način: stisnjene datoteke in JSON (brotli/gzip) za počasne in drage mobilne povezave.
  if (process.env.EVKLID_COMPRESS !== "0") {
    app.use(
      compressedStatic([
        ["/vendor/katex/", path.join(modules, "katex", "dist")],
        ["/vendor/marked/", path.join(modules, "marked")],
        ["/vendor/dompurify/", path.join(modules, "dompurify", "dist")],
        ...FONTS.map(([dir, pkg]) => [`/vendor/${dir}/`, path.join(modules, "@fontsource-variable", pkg)]),
        ["/practice/", path.join(here, "practice")],
        ["/", publicDir],
      ]),
    );
    app.use("/api", compressedJson());
  }
  app.use(express.static(publicDir));
  // Preverjanje odgovorov tudi v brskalniku (vaje brez povezave); datoteka nima odvisnosti.
  app.get("/practice/check.js", (_req, res) => res.type("text/javascript").sendFile(path.join(here, "practice", "check.js")));
  app.use("/vendor/katex", express.static(path.join(modules, "katex", "dist")));
  app.use("/vendor/marked", express.static(path.join(modules, "marked")));
  app.use("/vendor/dompurify", express.static(path.join(modules, "dompurify", "dist")));
  for (const [dir, pkg] of FONTS) app.use(`/vendor/${dir}`, express.static(path.join(modules, "@fontsource-variable", pkg)));

  // Učbenik za tiskanje / PDF: brezplačno in brez prijave.
  app.get("/ucbenik/:path{/:topic}", (req, res) => {
    const html = printPage(req.params.path, req.params.topic || null);
    if (!html) return res.status(404).send("Ta del učbenika ne obstaja.");
    res.type("html").send(html);
  });

  const busy = new Set(); // pogovori, ki trenutno čakajo na odgovor
  const pendingSettings = new Map(); // pogovor → predlog spremembe šole/letnika, ki čaka na potrditev
  // »Vprašaj Evklida« iz Vadnice: pogovor -> naloga, da prvi odgovor sestavi koda.
  const helpTasks = new Map();
  const usage = new Usage(store.db);
  const progress = new Progress(store);
  const knowledge = new Knowledge(store.db); // zbirke znanja in učni pass (server/zbirke.js)
  // Urnik učenca (server/schedule.js): ure, testi; gre v prompt in v Pripravo na test.
  const schedules = new Schedules(store.db);
  const scheduleText = (s) => schedulePrompt(scheduleView(schedules.get(s.id), s.settings));

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

  mountFeedback(app, store, { usage, file: opts.feedbackFile ?? null, createFn: opts.feedbackCreateFn });

  app.get("/api/config", (req, res) => {
    res.json({
      mock: isMockMode(),
      model: MODEL,
      model_deep: MODEL_DEEP,
      enums: ENUMS,
      defaults: DEFAULT_SETTINGS,
      daily_questions: LIMITS.dailyQuestions() || null,
      feedback: { prompt: feedbackPromptOn(), ai: feedbackAiOn(), admin: isLocalRequest(req) },
    });
  });

  // --- učenci in nastavitve ---
  app.get("/api/students", (_req, res) => res.json(store.listStudents()));
  app.post("/api/students", (req, res) => {
    const name = cleanText(req.body?.name, 40);
    if (!name) return res.status(400).json({ error: "Vpiši ime." });
    const dup = store.recentDuplicate(name, req.body?.settings);
    if (dup) return res.status(200).json(dup);
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
    if (process.env.EVKLID_DEBUG !== "1") return res.status(404).end();
    const s = loadStudent(req, res);
    if (!s) return;
    res.type("text/plain").send(
      buildSystemPrompt({ settings: s.settings, weaknesses: weaknessesForPrompt(store, s), studentName: s.name, results: studentResults(store, s.id).text, schedule: scheduleText(s) }),
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
    if (busy.has(conv.id)) return res.status(409).json({ error: "Počakaj, da Evklid odgovori." });
    const blocked = usage.blockReason(student.id);
    if (blocked) return res.status(429).json({ error: blocked, limit: true });
    busy.add(conv.id);
    // Lahki način: vedno (lite), nikoli (normal) ali po povezavi naprave, ki jo sporoči odjemalec (auto).
    const lite = student.settings.data_mode === "lite" || (student.settings.data_mode !== "normal" && req.body?.lite === true);
    // »Razloži podrobneje« je vedno na voljo, čim ceneje: prva ponovna razlaga je Haiku z več
    // razmisleka (z novim pristopom), Opus šele, ko učenec zaporedoma prosi še enkrat (z dnevno in
    // mesečno omejitvijo). Števec zaporednih prošenj je conversations.deep; običajno sporočilo ga ponastavi.
    // Tekmovanja: privzeto Haiku z več razmisleka.
    const again = req.body?.deep === true;
    const againStreak = again ? (conv.deep || 0) + 1 : 0;
    if (againStreak !== (conv.deep || 0)) store.db.prepare("UPDATE conversations SET deep = ? WHERE id = ?").run(againStreak, conv.id);
    // Aktivacijska koda: druga zaporedna prošnja gre k Sonnetu, šele tretja (in vsaka naslednja) k Opusu
    // (j 2026-10-30). Tekmovanja in fotografija urnika pri kodi ostanejo pri Sonnetu.
    // Nad skrito omejitvijo Opusa (usage.promoOpusSpent) tudi tretja prošnja tiho dobi Sonnet, brez opombe.
    const capped = !!accounts?.modelCapFor?.(student.id) && (againStreak < 3 || usage.promoOpusSpent(student.id, MODEL_DEEP));
    const { mode, note } = usage.chooseMode(student.id, {
      wantDeep: againStreak >= 2,
      wantThink: againStreak === 1,
      competition: student.settings.track === "COMPETITION",
      lite,
      free: !!accounts && !accounts.premiumFor(student.id),
      deepModel: capped ? MODEL_MID : MODEL_DEEP,
      capped,
    });
    // »mid« (Sonnet pri aktivacijski kodi) se obnaša kot podrobna razlaga, le z drugim modelom.
    const deep = mode === "deep" || mode === "mid";

    const userContent = [];
    if (image) userContent.push({ type: "image", source: { type: "base64", media_type: image.media_type, data: image.data } });
    userContent.push({ type: "text", text: text || "(Pošiljam fotografijo naloge.)" });
    const isFirst = store.listMessages(conv.id).length === 0;
    const userMsgId = store.addMessage(conv.id, "user", userContent, text, !!image);
    const help = isFirst && !image ? helpTasks.get(conv.id) : null;
    if (help) helpTasks.delete(conv.id);
    const weak = weaknessesForPrompt(store, student);
    const results = studentResults(store, student.id, conv.path_topic);
    // Prošnja za spremembo nastavitev mora poklicati orodje, zato ne iz predpomnilnika odgovorov.
    const key = ANSWER_CACHE && isFirst && !image && !help && !looksLikeSettings(text) ? cacheKey(text, student.settings, mode, lite, conv.path_topic, weak, results.tier) : null;
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
    // Nastavitve iz klepeta (server/chat-settings.js): orodji za model, dogodki za odjemalca.
    const settingsTools = createSettingsTools({
      store,
      studentId: student.id,
      conversationId: conv.id,
      device: cleanDevice(req.body?.device),
      pending: pendingSettings,
      send,
      schedules,
      onSchedule: () => {
        const st = store.getStudent(student.id);
        syncTestPlan(progress, st.id, scheduleView(schedules.get(st.id), st.settings));
      },
    });
    const onToolUse = settingsTools.onToolUse;
    onToolUse.hasPending = () => pendingSettings.has(conv.id);
    try {
      // Pogovor o tekmovalni temi: inštruktor namiguje v slogu tekmovanj (model ostane isti).
      const tekTopic = conv.path_topic && isCompetitionPath(getTopic(conv.path_topic)?.path);
      const system = buildSystemPrompt({
        settings: tekTopic ? { ...student.settings, track: "COMPETITION" } : student.settings,
        weaknesses: weak,
        results: results.text,
        schedule: scheduleText(student),
        studentName: student.name,
        learningPath: conv.path_topic
          ? [learningPathPrompt(conv.path_topic), examPrompt(getTopic(conv.path_topic)?.path), lessonSummaryForPrompt(conv.path_topic)].filter(Boolean).join("\n")
          : "",
        lite,
      });
      // Prvi korak pri nalogi iz Vadnice sestavi koda (podatki, iskano, namig), brez klica modela.
      const hinted =
        help && !help.kind && help.text === text && student.settings.solving_mode !== "B" && (student.settings.language || "sl") === "sl"
          ? codeHint(help.task.payload, {
              subject: getTopic(help.task.topic_id)?.subject || student.settings.subject,
              topicName: getTopic(help.task.topic_id)?.name,
              lastAnswer: help.task.last_answer,
            })
          : null;
      const cached = hinted ? { text: hinted, hint: true } : key && store.db.prepare("SELECT text FROM answer_cache WHERE key = ? AND created_at >= datetime('now','-30 days')").get(key);
      if (note) send("delta", { text: note });
      const run = cached
        ? async ({ onText }) => {
            // Ime učenca je v predpomnilniku shranjeno kot {{IME}}.
            const t = cached.text.replaceAll("{{IME}}", student.name);
            for (let i = 0; i < t.length; i += 40) onText(t.slice(i, i + 40));
            if (!cached.hint) store.db.prepare("UPDATE answer_cache SET hits = hits + 1 WHERE key = ?").run(key);
            usage.logSaved(student.id, cached.hint ? "hint" : "reuse");
            return { content: [{ type: "text", text: t }], text: t, stopReason: "end_turn", usage: null, model: "cache" };
          }
        : streamFn;
      const result = await run({
        system,
        // Opus dobi samo zadnje izmenjave; Haiku daljše okno (predpomnjeno).
        messages: deep ? recentHistory(store.apiHistory(conv.id)) : windowHistory(store.apiHistory(conv.id)),
        deep,
        mode,
        tools: SETTINGS_TOOLS,
        onToolUse,
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
      let display = (note || "") + stripMeta(result.text);
      // V zgodovino shranimo samo besedilo (brez blokov razmišljanja): manj žetonov
      // pri naslednjih klicih in nobenih težav ob krajšanju zgodovine.
      let content = [{ type: "text", text: result.text || "…" }];
      const cost = cached ? 0 : usage.log(student.id, result.model || (mode === "mid" ? MODEL_MID : deep ? MODEL_DEEP : MODEL), result.usage);
      if (settingsTools.state.proposal) send("proposal", settingsTools.state.proposal);
      if (key && !cached && !result.toolCalls && !settingsTools.state.used && result.stopReason === "end_turn" && result.text) {
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
      // Kartice za ponavljanje iz odgovora (ne pri zavrnitvi in ne pri opozorilih).
      const cards =
        result.stopReason !== "refusal" && (!meta || meta.flag === "none")
          ? store.cards.add(student.id, parseCards(result.text), {
              conversationId: conv.id,
              topicId: conv.path_topic,
              subject: meta?.subject ?? student.settings.subject,
              topic: meta?.topic ?? (conv.path_topic ? getTopic(conv.path_topic)?.name : null),
            })
          : [];
      if (cards.length) send("cards", { cards: cards.map((c) => ({ id: c.id, front: c.front })), due: store.cards.dueCount(student.id) });
      if (meta) {
        store.addEvent({ student_id: student.id, conversation_id: conv.id, message_id: assistantId, ...meta });
        if (meta.done && conv.path_topic && progress.markMastered(student.id, conv.path_topic, "chat")) {
          send("mastered", { topic: getTopic(conv.path_topic)?.name, unlocked: knowledge.sync(student.id) });
        }
      } else {
        console.warn(`[evklid] odgovor brez META (pogovor ${conv.id})`);
      }
      finished = true;
      send("done", {
        id: assistantId,
        text: display,
        state: meta ? { subject: meta.subject, mode: meta.mode } : null,
        title: store.getConversation(conv.id).title,
        // Brez ponovnega gumba »Razloži podrobneje«, tudi če je odgovor pripravil hitri model.
        deep: deep || req.body?.deep === true,
        settings: settingsTools.state.used || undefined,
        cost_usd: Math.round(cost * 10000) / 10000,
      });
      res.end();
    } catch (err) {
      finished = true;
      // Neuspelo potezo odstranimo, da zgodovina ostane čista za ponovni poskus.
      store.db.prepare("DELETE FROM messages WHERE id = ?").run(userMsgId);
      if (again) store.db.prepare("UPDATE conversations SET deep = ? WHERE id = ?").run(conv.deep || 0, conv.id);
      if (!controller.signal.aborted) {
        console.error("[evklid] napaka pri klicu modela:", err?.status ?? "", err?.message ?? err);
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
    res.json(
      req.query.program
        ? listProgramPaths(String(req.query.program))
        : listPaths(req.query.subject, String(req.query.system || "SI")).filter((p) => p.school !== "TEK"),
    ),
  );
  app.get("/api/programs", (req, res) => res.json(listPrograms()));
  app.get("/api/students/:id/path", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const key = req.query.key || pathKeyFor(s.settings);
    const view = key && progress.pathView(s.id, key);
    if (!view) return res.json({ key: null, message: "Za to raven še ni učne poti." });
    res.json({ ...view, label: pathLabelFor(key, s.settings.school_system), defaultKey: pathKeyFor(s.settings), xp: progress.xpSummary(s.id) });
  });
  app.get("/api/topic", (req, res) => {
    const t = getTopic(req.query.id);
    if (!t) return res.status(404).json({ error: "Tema ne obstaja." });
    // lang: jezik vmesnika (indijski izpiti imajo imena tem tudi v hindijščini).
    const lang = String(req.query.lang || "");
    const topic = localizeExamTopic({ ...localTopic(t, uiLanguage(lang)), pathLabel: getPath(t.path).label }, taskLanguage(lang));
    res.json({ ...topic, explanation: explanationFor(t.id) || lessonExplanation(t.id) });
  });
  // --- učbenik ---
  const systemOf = (req) => String(req.query.system || "SI");
  app.get("/api/textbook/books", (req, res) => res.json(listBooks({ program: req.query.program ? String(req.query.program) : null, system: systemOf(req) })));
  app.get("/api/textbook/toc", (req, res) => {
    if (req.query.book) {
      const book = bookView(String(req.query.book), systemOf(req));
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
    // Nova tema z nalogami: na začetku lekcije povabilo na test predznanja.
    const st = progress.state(s.id, view.id);
    const pretest_due = !!view.practice && st.status === "new" && st.pretest == null;
    if (interactive) return res.json({ ...view, interactive: true, pretest_due });
    res.json({
      ...view,
      pretest_due,
      interactive: false,
      locked: { demo: view.demo?.title || null },
      demos: [],
      demo: null,
    });
  });
  // Referenčni material fakultetnih predmetov (prosto dostopni zunanji viri; za vse, brez stroškov).
  app.get("/api/references", (req, res) => {
    if (req.query.program) {
      const r = programReferences(String(req.query.program));
      return r ? res.json(r) : res.status(404).json({ error: "Študijski program ne obstaja." });
    }
    const key = String(req.query.course || "");
    const p = key.startsWith("UNI-") ? getPath(key) : null;
    if (!p) return res.status(404).json({ error: "Predmet ne obstaja." });
    res.json({ key, label: p.label, themes: themesFor(key), items: referencesFor(key) });
  });
  // Formule in konstante predmeta (za orodja ob kalkulatorju), npr. ?book=KEM-OS
  app.get("/api/formulas", (req, res) => {
    const key = String(req.query.book || "");
    const md = /^[A-Z]{3}-(OS|SS|UNI)$/.test(key) ? formulaSheet(key) : null;
    if (!md) return res.status(404).json({ error: "Zbirke formul ni." });
    res.set("Cache-Control", "public, max-age=3600").json({ key, md });
  });
  app.get("/api/textbook/search", (req, res) => {
    const subject = /^[A-Z]{2,6}$/.test(req.query.subject || "") ? req.query.subject : undefined;
    res.json(searchTextbook(String(req.query.q || "").slice(0, 100), { subject, system: systemOf(req) }));
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
  // Lahki način: paket nalog za vaje brez povezave in kasnejša sinhronizacija odgovorov.
  app.get("/api/students/:id/offline-pack", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const key = getPath(String(req.query.path || "")) ? String(req.query.path) : pathKeyFor(s.settings);
    const pack = key && progress.offlinePack(s.id, key);
    if (!pack) return res.status(404).json({ error: "Za to raven še ni učne poti." });
    res.json({ ...pack, view: { ...pack.view, label: pathLabelFor(key, s.settings.school_system) } });
  });
  app.post("/api/students/:id/offline-sync", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const results = Array.isArray(req.body?.results) ? req.body.results : [];
    res.json({ ...progress.offlineSync(s.id, results), xp: progress.xpSummary(s.id) });
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
    if (!s) return;
    // Priprava na test sledi najbližjemu testu iz urnika (če je učenec ni nastavil sam).
    syncTestPlan(progress, s.id, scheduleView(schedules.get(s.id), s.settings));
    res.json({ ...progress.modes(s.id, getPath(String(req.query.path || "")) ? String(req.query.path) : pathKeyFor(s.settings)), cardsDue: store.cards.dueCount(s.id) });
  });

  // --- kartice za ponavljanje ---
  const cardId = (req) => intParam(req.params.cardId);
  app.get("/api/students/:id/flashcards", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json(store.cards.list(s.id));
  });
  app.post("/api/students/:id/flashcards", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const front = typeof req.body?.front === "string" ? req.body.front : "";
    const back = typeof req.body?.back === "string" ? req.body.back : "";
    if (!front.trim() || !back.trim()) return res.status(400).json({ error: "Kartica potrebuje vprašanje in odgovor." });
    const [card] = store.cards.add(s.id, [{ front, back }], { source: "own", subject: s.settings.subject });
    if (!card) return res.status(409).json({ error: "Kartico s tem vprašanjem že imaš." });
    res.status(201).json(card);
  });
  app.put("/api/students/:id/flashcards/:cardId", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const r = store.cards.update(s.id, cardId(req), { front: req.body?.front, back: req.body?.back });
    if (!r) return res.status(404).json({ error: "Kartica ne obstaja." });
    if (r.error === "empty") return res.status(400).json({ error: "Kartica potrebuje vprašanje in odgovor." });
    if (r.error === "duplicate") return res.status(409).json({ error: "Kartico s tem vprašanjem že imaš." });
    res.json(r);
  });
  app.delete("/api/students/:id/flashcards/:cardId", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    if (!store.cards.remove(s.id, cardId(req))) return res.status(404).json({ error: "Kartica ne obstaja." });
    res.json({ ok: true });
  });
  app.post("/api/students/:id/flashcards/:cardId/review", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const c = store.cards.review(s.id, cardId(req), req.body?.ok === true);
    if (!c) return res.status(404).json({ error: "Kartica ne obstaja." });
    res.json({ card: c, due: store.cards.dueCount(s.id) });
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
  // --- priprave na izpite (SAT, gaokao, JEE, NEET, CBSE): trening in poskusni izpit gresta
  // prek /competition-training in /contest (isti mehanizem kot pri tekmovanjih) ---
  app.get("/api/students/:id/exams", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const defaultKey = examKeyFor(s.settings);
    const key = isExamPath(req.query.key) ? String(req.query.key) : examKeyFor(s.settings, String(req.query.exam || "")) || defaultKey;
    if (!key) return res.json({ key: null });
    const lang = taskLanguage(s.settings.language);
    res.json({
      ...examInfo(key, s.settings.school_system, lang),
      ...localizeExamView(progress.pathView(s.id, key), lang),
      defaultKey,
      defaultExam: examOf(defaultKey),
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
  // Začetni test predznanja teme (ob odprtju nove teme).
  app.post("/api/students/:id/pretest", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    res.json(progress.startPretest(s.id, String(req.body?.topic_id || "")));
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
    // Nova obvladana tema ali stopnja učnega passa odklene predmete v zbirkah.
    if (out.xp?.gained > 0 || out.placement?.passed || out.mastered) {
      const unlocked = knowledge.sync(s.id);
      if (unlocked.length) out.unlocked = unlocked;
    }
    res.json(out);
  });
  // Postopni namigi pred odgovorom (podatki → formula → prvi korak).
  app.post("/api/students/:id/tasks/:taskId/hint", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const out = progress.hint(s.id, intParam(req.params.taskId), req.body?.step);
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
      console.error("[evklid] branje rokopisa:", err?.message || err);
      res.status(502).json({ error: "Branje zapisa trenutno ne deluje. Odgovor vpiši s tipkami." });
    }
  });
  // »Vprašaj Evklida«: odpre pogovor z nalogo in učenčevim odgovorom.
  app.post("/api/students/:id/tasks/:taskId/help", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const t = progress.getTask(intParam(req.params.taskId));
    if (!t || t.student_id !== s.id) return res.status(404).json({ error: "Naloga ne obstaja." });
    const conv = store.createConversation(s.id, { pathTopic: t.topic_id, title: `Naloga: ${getTopic(t.topic_id)?.name ?? "vadnica"}` });
    // kind: brez = pomoč ob napačnem odgovoru; »explain« = razlaga naloge; »review« = pregled rezultata in postopka.
    const kind = ["explain", "review"].includes(req.body?.kind) ? req.body.kind : null;
    const work = typeof req.body?.work === "string" ? req.body.work.trim().slice(0, 2000) : "";
    const workPart = work ? `Moji vmesni koraki:\n${work}\n\n` : "";
    const answerPart = t.last_answer != null ? `Moj odgovor: ${t.last_answer}${t.solved ? " (aplikacija ga je označila kot pravilnega)" : ""}.\n\n` : "Odgovora še nisem oddal.\n\n";
    const text =
      kind === "explain"
        ? `Rešujem nalogo:\n\n${t.payload.text}\n\n${answerPart}${workPart}Razloži mi, kako se reši ta naloga in zakaj, po korakih.`
        : kind === "review"
          ? `Preglej moj rezultat${work ? " in postopek" : ""} pri tej nalogi:\n\n${t.payload.text}\n\n${answerPart}${workPart}Je prav? Če ni, mi pokaži, kje sem se zmotil.`
          : `Rešujem nalogo iz Vadnice:\n\n${t.payload.text}\n\n${workPart}${t.last_answer ? `Moj odgovor je bil: ${t.last_answer}. Ni pravilen.` : "Ne vem, kako začeti."} Mi pomagaš najti, kje se zatakne? Rešitve mi ne povej.`;
    helpTasks.set(conv.id, { text: text.trim().slice(0, MAX_TEXT), task: t, kind });
    if (helpTasks.size > 500) helpTasks.delete(helpTasks.keys().next().value);
    res.json({ conversation: conv, text });
  });

  // --- XP in lestvica ---
  app.get("/api/students/:id/xp", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json({ ...progress.xpSummary(s.id), leaderboard: progress.leaderboard() });
  });

  // --- tedenske lige, razredi in skupine prijateljev ---
  const avatars = new Avatars(store.db);
  mountLeagues(app, store, { loadStudent });
  mountGraphs(app, store, { loadStudent });
  mountGames(app, store, { loadStudent, progress, avatars, knowledge });
  mountAvatar(app, avatars, { loadStudent });
  mountKnowledge(app, knowledge, { loadStudent, avatars });
  mountCorner(app, store, { loadStudent, fetchFn: opts.newsFetch, offline: opts.newsOffline });
  mountSchedule(app, store, { loadStudent, progress, usage, schedules, photoFn: opts.schedulePhotoFn, fetchFn: opts.fetchFn, lookup: opts.lookup, modelCapFor: (id) => accounts?.modelCapFor?.(id) ?? null });

  // --- poraba AI ---
  // Poraba AI za vse profile: brez računov samo na računalniku, kjer teče strežnik
  // (ne prek povezave za telefon); z računi tudi skrbnik (preveri accounts/index.js).
  app.get("/api/usage", (req, res) => {
    if (!accounts && !isLocalRequest(req)) return res.status(403).json({ error: "Samo za skrbnika." });
    const claim = !!accounts && isLocalRequest(req) && !req.parent?.is_admin;
    const sum = usage.summary();
    res.json({ ...sum, can_claim: claim, advice: pricingAdvice(store.db, sum) });
  });
  app.get("/api/students/:id/usage", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json(usage.studentMonth(s.id));
  });

  // Napačno ali preveliko telo zahteve: kratek odgovor v JSON (odjemalec pokaže sporočilo)
  // namesto strani z napako in celotnega sklada v dnevniku.
  app.use((err, _req, res, next) => {
    if (res.headersSent || !["entity.parse.failed", "entity.too.large"].includes(err?.type)) return next(err);
    res.status(err.status || 400).json({ error: err.type === "entity.too.large" ? "Zahteva je prevelika." : "Zahteva ni v pravilni obliki." });
  });

  return app;
}
