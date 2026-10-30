// Prijave napak v odgovorih inštruktorja (gumb »Prijavi napako« pod vsakim odgovorom).
// Prijava shrani odgovor, vprašanje pred njim in razlog, odgovor pa odstrani iz predpomnilnika
// (answer_cache), da ga ne dobi noben drug učenec. Stikalo EVKLID_CHAT_OFF=1 izklopi klepet za vse.
// Postopek ob neljubem dogodku: docs/krizni-nacrt.md.
import { cleanText } from "./settings.js";

export const REPORT_REASONS = ["wrong", "unsafe", "other"];
// Največ prijav enega učenca na dan (zaščita pred zlorabo).
const MAX_PER_DAY = 30;

export const chatOff = () => process.env.EVKLID_CHAT_OFF === "1";

// Kratka koda sporočila, vidna pod odgovorom (#00YA). Z njo v bazi najdemo sporočilo s posnetka zaslona.
export const messageCode = (id) => `#${Number(id).toString(36).toUpperCase().padStart(4, "0")}`;
export function parseMessageCode(code) {
  const m = /^#?([0-9a-z]{1,10})$/i.exec(String(code ?? "").trim());
  return m ? parseInt(m[1], 36) : null;
}

export function ensureReportsTable(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS message_reports (
      id INTEGER PRIMARY KEY,
      -- Ob izbrisu profila se izbrišejo tudi njegove prijave (vprašanje je lahko osebno).
      student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
      conversation_id INTEGER,
      message_id INTEGER NOT NULL UNIQUE,
      reason TEXT NOT NULL,          -- wrong | unsafe | other
      note TEXT,
      question TEXT,                 -- vprašanje učenca pred odgovorom
      answer TEXT NOT NULL,          -- odgovor, kot ga je videl učenec
      purged INTEGER NOT NULL DEFAULT 0, -- koliko shranjenih odgovorov je bilo izbrisanih
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
}

// Odstrani odgovor iz predpomnilnika. Tam je shranjen z {{IME}} namesto imena učenca.
export function purgeCachedAnswer(db, text, name = "") {
  if (!text) return 0;
  const generic = name.length > 1 ? text.replaceAll(name, "{{IME}}") : text;
  return Number(db.prepare("DELETE FROM answer_cache WHERE text IN (?, ?)").run(text, generic).changes || 0);
}

export function listReports(db, limit = 200) {
  return db
    .prepare("SELECT * FROM message_reports ORDER BY id DESC LIMIT ?")
    .all(limit)
    .map((r) => ({ ...r, code: messageCode(r.message_id) }));
}

export function mountReports(app, store, { loadConversation, localOnly }) {
  ensureReportsTable(store.db);

  app.post("/api/conversations/:id/messages/:mid/report", (req, res) => {
    const conv = loadConversation(req, res);
    if (!conv) return;
    const mid = /^\d+$/.test(req.params.mid) ? Number(req.params.mid) : NaN;
    const msgs = store.listMessages(conv.id);
    const i = msgs.findIndex((m) => m.id === mid);
    if (i < 0 || msgs[i].role !== "assistant") return res.status(404).json({ error: "Sporočilo ne obstaja." });
    const reason = REPORT_REASONS.includes(req.body?.reason) ? req.body.reason : null;
    if (!reason) return res.status(400).json({ error: "Izberi, kaj je narobe." });
    const code = messageCode(mid);
    if (store.db.prepare("SELECT 1 FROM message_reports WHERE message_id = ?").get(mid)) return res.json({ ok: true, code, already: true });
    const today = store.db
      .prepare("SELECT COUNT(*) AS n FROM message_reports WHERE student_id = ? AND created_at >= datetime('now','-1 day')")
      .get(conv.student_id).n;
    if (today >= MAX_PER_DAY) return res.status(429).json({ error: "Danes si poslal že veliko prijav. Hvala!" });

    const msg = msgs[i];
    const question = msgs.slice(0, i).reverse().find((m) => m.role === "user");
    const raw = msg.api_content?.find?.((b) => b.type === "text")?.text || "";
    const name = store.getStudent(conv.student_id)?.name || "";
    const purged = purgeCachedAnswer(store.db, raw, name);
    // Odgovor ostane kot zapis dogodka tudi po izbrisu pogovora, zato brez učenčevega imena.
    const anonymize = (t) => (name.length > 1 ? t.replaceAll(name, "[ime]") : t);
    store.db
      .prepare("INSERT INTO message_reports (student_id, conversation_id, message_id, reason, note, question, answer, purged) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
      .run(conv.student_id, conv.id, mid, reason, cleanText(req.body?.note, 500) || null, question?.display_text?.slice(0, 2000) || null, anonymize(msg.display_text).slice(0, 8000), purged);
    console.warn(`[evklid] prijava napake ${code} (${reason}), pogovor ${conv.id}`);
    res.status(201).json({ ok: true, code });
  });

  // Seznam prijav: samo na računalniku, kjer teče strežnik.
  app.get("/api/reports", localOnly, (_req, res) => res.json({ reports: listReports(store.db) }));
}
