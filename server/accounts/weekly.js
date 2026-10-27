// Tedensko poročilo staršem: kaj je otrok ta teden delal in kje se mu zatika.
import { getTopic } from "../curriculum.js";
import { detectWeakTopics } from "../weaknesses.js";
import { esc, layout, button } from "./email.js";

const SUBJ = { MAT: "matematika", FIZ: "fizika", KEM: "kemija" };

export function childWeek(db, studentId) {
  const one = (sql) => db.prepare(sql).get(studentId);
  const tasks = one(
    `SELECT COUNT(*) AS solved, COALESCE(SUM(first_try_correct), 0) AS first_try
     FROM tasks WHERE student_id = ? AND solved = 1 AND created_at >= datetime('now','-7 days')`,
  );
  const xp = one(`SELECT COALESCE(SUM(amount), 0) AS xp FROM xp_events WHERE student_id = ? AND created_at >= datetime('now','-7 days')`).xp;
  const questions = one(
    `SELECT COUNT(*) AS n FROM messages m JOIN conversations c ON c.id = m.conversation_id
     WHERE c.student_id = ? AND m.role = 'user' AND m.created_at >= datetime('now','-7 days')`,
  ).n;
  const days = db
    .prepare(
      `SELECT COUNT(DISTINCT d) AS n FROM (
         SELECT date(created_at) AS d FROM tasks WHERE student_id = ?1 AND attempts > 0 AND created_at >= datetime('now','-7 days')
         UNION SELECT date(created_at) FROM events WHERE student_id = ?1 AND created_at >= datetime('now','-7 days'))`,
    )
    .get(studentId).n;
  const mastered = db
    .prepare(`SELECT topic_id FROM topic_state WHERE student_id = ? AND status = 'mastered' AND mastered_at >= datetime('now','-7 days')`)
    .all(studentId)
    .map((r) => getTopic(r.topic_id)?.name || r.topic_id);
  const due = one(
    `SELECT COUNT(*) AS n FROM topic_state WHERE student_id = ? AND status = 'mastered' AND review_due IS NOT NULL AND review_due <= datetime('now')`,
  ).n;
  const stats = db
    .prepare(
      `SELECT subject, topic, COUNT(*) AS turns, SUM(error) AS errors FROM events
       WHERE student_id = ? AND topic IS NOT NULL AND created_at >= datetime('now','-30 days') GROUP BY subject, topic`,
    )
    .all(studentId);
  const weak = detectWeakTopics(stats).slice(0, 3).map((w) => `${w.topic}${w.subject ? ` (${SUBJ[w.subject] || w.subject})` : ""}`);
  return {
    solved: tasks.solved,
    accuracy: tasks.solved ? Math.round((tasks.first_try / tasks.solved) * 100) : null,
    xp,
    questions,
    active_days: days,
    mastered,
    weak,
    due_reviews: due,
  };
}

function tip(w) {
  if (!w.active_days) return "Ta teden ni bilo vaje. Že 15 minut na dan (gumb »Današnji trening«) naredi veliko razliko.";
  if (w.due_reviews >= 3) return `Čaka ${w.due_reviews} tem za ponovitev. Kratka ponovitev zdaj prepreči pozabljanje.`;
  if (w.weak.length) return `Pohvalite trud in predlagajte vajo iz teme »${w.weak[0]}«.`;
  if (w.active_days >= 4) return "Odličen ritem! Redna kratka vaja je najboljši način učenja.";
  return "Poskusite z rednim ritmom: nekaj nalog skoraj vsak dan je bolje kot veliko naenkrat.";
}

export function buildWeeklyReport(db, parent, children, { appUrl, unsubscribeUrl }) {
  const rows = children.map((c) => ({ child: c, week: childWeek(db, c.id) }));
  const block = ({ child, week: w }) => `
<h2 style="font-size:17px;margin:20px 0 8px">${esc(child.name)}</h2>
<table style="width:100%;border-collapse:collapse;font-size:14px">
<tr><td style="padding:4px 0">Aktivni dnevi</td><td style="text-align:right"><b>${w.active_days} / 7</b></td></tr>
<tr><td style="padding:4px 0">Rešene naloge</td><td style="text-align:right"><b>${w.solved}</b>${w.accuracy !== null ? ` (${w.accuracy} % v prvem poskusu)` : ""}</td></tr>
<tr><td style="padding:4px 0">Vprašanja inštruktorju</td><td style="text-align:right"><b>${w.questions}</b></td></tr>
<tr><td style="padding:4px 0">Zbrane točke XP</td><td style="text-align:right"><b>${w.xp}</b></td></tr>
</table>
${w.mastered.length ? `<p style="margin:10px 0 0">🏆 Osvojene teme: ${w.mastered.map(esc).join(", ")}</p>` : ""}
${w.weak.length ? `<p style="margin:10px 0 0">🔎 Še vaditi: ${w.weak.map(esc).join(", ")}</p>` : ""}
<p style="margin:10px 0 0;color:#4f6bed">💡 ${esc(tip(w))}</p>`;
  const html = layout(
    "Tedensko poročilo",
    `<p>Pozdravljeni${parent.name ? `, ${esc(parent.name)}` : ""}! Takole je potekal zadnji teden.</p>${rows.map(block).join("")}${button(appUrl, "Odpri STEMMind")}`,
    `To poročilo prejemate, ker imate račun STEMMind. <a href="${esc(unsubscribeUrl)}">Odjava od tedenskih poročil</a>.`,
  );
  const text = rows
    .map(({ child, week: w }) => `${child.name}: aktivni dnevi ${w.active_days}/7, rešene naloge ${w.solved}, vprašanja ${w.questions}, XP ${w.xp}.${w.weak.length ? ` Še vaditi: ${w.weak.join(", ")}.` : ""} ${tip(w)}`)
    .join("\n") + `\n\nOdjava: ${unsubscribeUrl}`;
  const names = children.map((c) => c.name).join(" in ");
  return { subject: `STEMMind: tedensko poročilo za ${names}`, html, text, children: rows.map((r) => ({ id: r.child.id, name: r.child.name, ...r.week })) };
}

// Oznaka tedna (ISO), da se poročilo pošlje samo enkrat.
export function weekKey(d = new Date()) {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y = t.getUTCFullYear();
  const week = Math.ceil(((t - Date.UTC(y, 0, 1)) / 86400000 + 1) / 7);
  return `${y}-W${String(week).padStart(2, "0")}`;
}

// Ali je v Ljubljani nedelja po 17. uri?
export function isSendTime(d = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Ljubljana", weekday: "short", hour: "numeric", hour12: false })
      .formatToParts(d)
      .map((p) => [p.type, p.value]),
  );
  return parts.weekday === "Sun" && Number(parts.hour) >= 17;
}
