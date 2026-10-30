// Tedensko poročilo: kaj se je učenec ta teden učil, kaj mu gre, kje se zatika in kaj naj naredi naslednji teden.
// Staršem (ali učencu samemu, če je profil »Zame«). Brez dejavnosti dva tedna zapored se ne pošlje (gl. isQuiet).
import { getTopic, localTopic, pathKeyFor } from "../curriculum.js";
import { detectWeakTopics } from "../weaknesses.js";
import { Progress } from "../progress.js";
import { SUBJECT_NAMES } from "../subjects.js";
import { GOALS, daysUntil, fmtDateSl, validDate } from "../../public/goal-data.js";
import { BRAND } from "../brand.js";
import { esc, layout, button } from "./email.js";

const BLUE = "#4f6bed";
const MUTED = "#6b7385";
const DAYS_SL = ["ne", "po", "to", "sr", "če", "pe", "so"];
const GOAL_NAMES = { test: "Test v šoli", npz: "NPZ", matura: "Matura", tekmovanje: "Tekmovanje", izpit: "Izpit" };

// Slovenske dvojinske in množinske oblike: plural(3, ["naloga", "nalogi", "naloge", "nalog"]) → "3 naloge".
export function plural(n, [one, two, few, many]) {
  const m = Math.abs(n) % 100;
  return `${n} ${m === 1 ? one : m === 2 ? two : m === 3 || m === 4 ? few : many}`;
}
const NALOG = ["naloga", "nalogi", "naloge", "nalog"];
const DNI = ["dan", "dneva", "dnevi", "dni"];

const topicName = (id) => {
  const t = getTopic(id);
  return (t && localTopic(t, "sl").name) || String(id).split("/").pop();
};
const subjectName = (code) => SUBJECT_NAMES[code] || code || "Drugo";

// Zbrani podatki za enega učenca (zadnjih 7 koledarskih dni z današnjim, in 7 dni pred tem).
export function childWeek(db, student) {
  const id = student.id;
  const one = (sql, ...a) => db.prepare(sql).get(id, ...a);
  const W = "date(created_at) >= date('now','-6 days')";
  const PREV = "date(created_at) BETWEEN date('now','-13 days') AND date('now','-7 days')";

  const activeDates = (range) =>
    db
      .prepare(
        `SELECT DISTINCT d FROM (
           SELECT date(created_at) AS d FROM tasks WHERE student_id = ?1 AND attempts > 0 AND ${range}
           UNION SELECT date(created_at) FROM events WHERE student_id = ?1 AND ${range}
           UNION SELECT date(created_at) FROM xp_events WHERE student_id = ?1 AND ${range})`,
      )
      .all(id)
      .map((r) => r.d);
  const dates = new Set(activeDates(W));
  const now = Date.now();
  const strip = [6, 5, 4, 3, 2, 1, 0].map((i) => {
    const d = new Date(now - i * 86400000);
    return { label: DAYS_SL[d.getUTCDay()], active: dates.has(d.toISOString().slice(0, 10)) };
  });

  const tasks = one(`SELECT COUNT(*) AS solved, COALESCE(SUM(first_try_correct), 0) AS first_try FROM tasks WHERE student_id = ? AND solved = 1 AND ${W}`);
  const prevSolved = one(`SELECT COUNT(*) AS n FROM tasks WHERE student_id = ? AND solved = 1 AND ${PREV}`).n;
  const xp = one(`SELECT COALESCE(SUM(amount), 0) AS xp FROM xp_events WHERE student_id = ? AND ${W}`).xp;
  const questions = one(
    `SELECT COUNT(*) AS n FROM messages m JOIN conversations c ON c.id = m.conversation_id
     WHERE c.student_id = ? AND m.role = 'user' AND date(m.created_at) >= date('now','-6 days')`,
  ).n;

  // Naloge po temah: koliko rešenih in koliko pravilnih v prvem poskusu.
  const byTopic = db
    .prepare(
      `SELECT topic_id, COUNT(*) AS tried, SUM(solved) AS solved,
              SUM(CASE WHEN first_try_correct = 1 THEN 1 ELSE 0 END) AS first_ok,
              SUM(CASE WHEN first_try_correct IS NOT NULL THEN 1 ELSE 0 END) AS judged
       FROM tasks WHERE student_id = ? AND attempts > 0 AND ${W} GROUP BY topic_id ORDER BY tried DESC`,
    )
    .all(id)
    .map((r) => ({ ...r, name: topicName(r.topic_id), subject: getTopic(r.topic_id)?.subject || r.topic_id.split("-")[0], rate: r.judged ? r.first_ok / r.judged : null }));

  // Teme iz klepeta z inštruktorjem.
  const chatTopics = db
    .prepare(`SELECT subject, topic, COUNT(*) AS n FROM events WHERE student_id = ? AND topic IS NOT NULL AND conversation_id IS NOT NULL AND ${W} GROUP BY subject, topic ORDER BY n DESC LIMIT 6`)
    .all(id);

  // Kaj se je učil, po predmetih.
  const subjects = new Map();
  const add = (code) => {
    if (!subjects.has(code)) subjects.set(code, { name: subjectName(code), practice: [], chat: [] });
    return subjects.get(code);
  };
  for (const t of byTopic.slice(0, 8)) add(t.subject).practice.push(t);
  for (const c of chatTopics) {
    const s = add(c.subject || "");
    if (!s.practice.some((t) => t.name.toLowerCase() === String(c.topic).toLowerCase())) s.chat.push(c.topic);
  }

  const mastered = db
    .prepare(`SELECT topic_id FROM topic_state WHERE student_id = ? AND status = 'mastered' AND date(mastered_at) >= date('now','-6 days')`)
    .all(id)
    .map((r) => topicName(r.topic_id));
  const strong = byTopic.filter((t) => t.judged >= 3 && t.rate >= 0.8 && !mastered.includes(t.name)).slice(0, 3).map((t) => t.name);
  const hardPractice = byTopic
    .filter((t) => t.judged >= 3 && t.rate < 0.5)
    .sort((a, b) => a.rate - b.rate)
    .map((t) => ({ name: t.name, topic_id: t.topic_id, detail: `${t.first_ok} od ${t.judged} pravilno v prvem poskusu` }));
  const chatStats = db
    .prepare(`SELECT subject, topic, COUNT(*) AS turns, SUM(error) AS errors FROM events WHERE student_id = ? AND topic IS NOT NULL AND created_at >= datetime('now','-30 days') GROUP BY subject, topic`)
    .all(id);
  const hardChat = detectWeakTopics(chatStats)
    .filter((w) => !hardPractice.some((h) => h.name.toLowerCase() === String(w.topic).toLowerCase()))
    .map((w) => ({ name: w.topic, detail: `v klepetu pogosto napake${w.subject ? ` (${subjectName(w.subject).toLowerCase()})` : ""}` }));
  const weak = [...hardPractice, ...hardChat].slice(0, 3);

  const due = one(`SELECT COUNT(*) AS n FROM topic_state WHERE student_id = ? AND status = 'mastered' AND review_due IS NOT NULL AND review_due <= datetime('now')`).n;

  const progress = new Progress({ db, getStudent: () => student });
  let streak = 0;
  let next = null;
  try {
    streak = progress.dayStreak(id);
    const key = pathKeyFor(student.settings || {});
    next = key ? progress.currentTopic(id, key)?.name || null : null;
  } catch {
    // Brez učne poti (npr. star profil): poročilo gre brez predloga naslednje teme.
  }

  const s = student.settings || {};
  const goalDays = GOALS.includes(s.goal) && GOAL_NAMES[s.goal] && validDate(s.goal_date) ? daysUntil(s.goal_date) : null;
  const goal = goalDays !== null && goalDays >= 0 ? { name: GOAL_NAMES[s.goal], date: fmtDateSl(s.goal_date), days: goalDays } : null;

  return {
    active_days: dates.size,
    prev_active_days: activeDates(PREV).length,
    strip,
    solved: tasks.solved,
    prev_solved: prevSolved,
    accuracy: tasks.solved ? Math.round((tasks.first_try / tasks.solved) * 100) : null,
    xp,
    questions,
    subjects: [...subjects.values()],
    mastered,
    strong,
    weak,
    due_reviews: due,
    streak,
    next,
    goal,
  };
}

// Dva tedna brez vaje: poročila ne pošljemo (eno »tiho« poročilo pride, potem počakamo na novo dejavnost).
export const isQuiet = (w) => !w.active_days && !w.prev_active_days;

// En stavek na vrhu: kako je šlo ta teden.
export function headline(w) {
  if (!w.active_days) return "Ta teden ni bilo vaje.";
  const parts = [`${plural(w.active_days, DNI)} vaje`];
  if (w.solved) parts.push(plural(w.solved, ["rešena naloga", "rešeni nalogi", "rešene naloge", "rešenih nalog"]));
  if (w.mastered.length) parts.push(plural(w.mastered.length, ["nova osvojena tema", "novi osvojeni temi", "nove osvojene teme", "novih osvojenih tem"]));
  const mood = w.active_days >= 4 || w.mastered.length ? "Odličen teden" : w.active_days >= 2 ? "Dober teden" : "Začetek je tu";
  return `${mood}: ${parts.join(", ")}.`;
}

// Do trije konkretni koraki za naslednji teden.
export function nextSteps(w, self = false) {
  const steps = [];
  if (!w.active_days) {
    const start = self ? "Začni" : "Začnite";
    steps.push(w.next ? `${start} s 15 minutami: Današnji trening ali tema »${w.next}«.` : `${start} s 15 minutami: gumb »Današnji trening« na Učni poti.`);
    if (w.due_reviews) steps.push(`${plural(w.due_reviews, ["tema čaka", "temi čakata", "teme čakajo", "tem čaka"])} na ponovitev, da se znanje ne pozabi.`);
    return steps;
  }
  if (w.due_reviews) steps.push(`Kratka ponovitev (okoli 5 minut): ${plural(w.due_reviews, ["tema čaka", "temi čakata", "teme čakajo", "tem čaka"])} na osvežitev.`);
  if (w.weak[0]) steps.push(`Vaja iz teme »${w.weak[0].name}«, kjer je bilo največ napak. Pomaga prositi inštruktorja za rešen primer.`);
  if (w.next && !w.weak.some((x) => x.name === w.next)) steps.push(`Nadaljevanje na Učni poti: »${w.next}«.`);
  if (w.active_days < 4) steps.push("Cilj za naslednji teden: 4 dni po 15 minut. Kratko in redno se najbolj obrestuje.");
  return steps.slice(0, 3);
}

// --- HTML (samo vgrajeni slogi in tabele, ker jih e-poštni odjemalci tako najbolje prikažejo) ---

const h3 = (t) => `<p style="margin:18px 0 6px;font-size:13px;font-weight:bold;color:${MUTED};text-transform:uppercase;letter-spacing:.04em">${t}</p>`;

function stripHtml(strip) {
  const cell = (d) =>
    `<td style="padding:0 3px;text-align:center"><div style="width:30px;height:30px;line-height:30px;border-radius:15px;margin:0 auto;font-size:12px;font-weight:bold;${
      d.active ? `background:${BLUE};color:#fff` : "background:#eef0f6;color:#9aa1b2"
    }">${d.active ? "✓" : "·"}</div><div style="font-size:11px;color:${MUTED};margin-top:3px">${d.label}</div></td>`;
  return `<table role="presentation" style="border-collapse:collapse;margin:4px 0 0"><tr>${strip.map(cell).join("")}</tr></table>`;
}

function trend(now, prev) {
  if (!prev && !now) return "";
  if (!prev) return `<div style="font-size:12px;color:#1f9d55">nov začetek</div>`;
  const d = now - prev;
  if (d > 0) return `<div style="font-size:12px;color:#1f9d55">▲ ${d} več kot prejšnji teden</div>`;
  if (d < 0) return `<div style="font-size:12px;color:#b45309">▼ ${-d} manj kot prejšnji teden</div>`;
  return `<div style="font-size:12px;color:${MUTED}">enako kot prejšnji teden</div>`;
}

function tiles(w) {
  const tile = (value, label, extra = "") =>
    `<td style="width:33%;padding:4px;vertical-align:top"><div style="background:#f4f6fb;border-radius:10px;padding:12px 8px;text-align:center">
<div style="font-size:24px;font-weight:bold;color:#1d2433">${value}</div><div style="font-size:12px;color:${MUTED};margin-top:2px">${label}</div>${extra}</div></td>`;
  return `<table role="presentation" style="width:100%;border-collapse:collapse;margin:12px 0 0"><tr>
${tile(`<b>${w.solved}</b>`, "rešenih nalog", trend(w.solved, w.prev_solved))}
${tile(w.accuracy === null ? "–" : `${w.accuracy} %`, "prav v prvem poskusu")}
${tile(`${w.questions}`, "vprašanj inštruktorju")}
</tr></table>`;
}

function learnedHtml(subjects) {
  if (!subjects.length) return "";
  const row = (s) => {
    const items = [
      ...s.practice.map((t) => `${esc(t.name)} <span style="color:${MUTED}">(${plural(t.solved || 0, NALOG)}${t.rate !== null && t.judged >= 2 ? `, ${Math.round(t.rate * 100)} %` : ""})</span>`),
      ...s.chat.map((c) => `${esc(c)} <span style="color:${MUTED}">(klepet)</span>`),
    ];
    return `<p style="margin:4px 0"><b>${esc(s.name)}:</b> ${items.join(", ")}</p>`;
  };
  return h3("Snov tega tedna") + subjects.map(row).join("");
}

function listHtml(icon, title, items) {
  if (!items.length) return "";
  return `<p style="margin:10px 0 0">${icon} <b>${title}:</b> ${items.join(", ")}</p>`;
}

function childBlock({ child, week: w, self }) {
  const quiet = !w.active_days;
  const streak = w.streak >= 2 ? `<span style="float:right;font-size:13px;color:#b45309;font-weight:bold">🔥 ${plural(w.streak, DNI)} zapored</span>` : "";
  const goal = w.goal
    ? `<p style="margin:12px 0 0;padding:10px 12px;background:#fff8e6;border-radius:8px">🎯 <b>${esc(w.goal.name)}</b> ${esc(w.goal.date)}: ${
        w.goal.days === 0 ? "danes je dan cilja" : `še ${plural(w.goal.days, DNI)}`
      }</p>`
    : "";
  const steps = nextSteps(w, self);
  const stepsHtml = steps.length
    ? `<div style="margin:16px 0 0;padding:12px 14px;background:#eef1fd;border-radius:10px">
<p style="margin:0 0 6px;font-weight:bold;color:${BLUE}">Naslednji koraki</p>
<ol style="margin:0;padding-left:20px">${steps.map((s) => `<li style="margin:4px 0">${esc(s)}</li>`).join("")}</ol></div>`
    : "";
  // Starš vpraša po temi, ki jo otrok že obvlada: razlaganje utrdi znanje in otrok se pokaže v dobri luči.
  const talkTopic = w.mastered[0] || w.strong[0] || w.subjects[0]?.practice[0]?.name || w.subjects[0]?.chat[0];
  const talk =
    !self && !quiet && talkTopic
      ? `<p style="margin:12px 0 0;font-size:14px">💬 <b>Za pogovor doma:</b> naj vam v dveh stavkih razloži temo »${esc(talkTopic)}«. Kdor razloži, si najbolje zapomni.</p>`
      : "";
  return `
<div style="border-top:1px solid #e6e9f2;margin-top:20px;padding-top:16px">
${streak}<h2 style="font-size:19px;margin:0 0 4px">${esc(child.name)}</h2>
<p style="margin:0 0 10px;font-size:15px">${esc(headline(w))}</p>
${stripHtml(w.strip)}
${quiet ? "" : tiles(w)}
${goal}
${quiet ? "" : learnedHtml(w.subjects)}
${listHtml("🏆", "Osvojeno", w.mastered.map(esc))}
${listHtml("💪", "Gre dobro", w.strong.map(esc))}
${listHtml("🔎", "Še vaditi", w.weak.map((x) => `${esc(x.name)} <span style="color:${MUTED}">(${esc(x.detail)})</span>`))}
${stepsHtml}
${talk}
</div>`;
}

function childText({ child, week: w, self }) {
  const lines = [`${child.name}: ${headline(w)}`];
  if (w.active_days) lines.push(`Rešene naloge: ${w.solved} (prejšnji teden ${w.prev_solved}), vprašanja inštruktorju: ${w.questions}.`);
  for (const s of w.subjects) lines.push(`${s.name}: ${[...s.practice.map((t) => t.name), ...s.chat].join(", ")}`);
  if (w.mastered.length) lines.push(`Osvojeno: ${w.mastered.join(", ")}`);
  if (w.weak.length) lines.push(`Še vaditi: ${w.weak.map((x) => x.name).join(", ")}`);
  if (w.goal) lines.push(`${w.goal.name} ${w.goal.date}: še ${plural(w.goal.days, DNI)}`);
  const steps = nextSteps(w, self);
  if (steps.length) lines.push("Naslednji koraki:", ...steps.map((s, i) => `${i + 1}. ${s}`));
  return lines.join("\n");
}

function subjectLine(rows) {
  if (rows.length === 1) {
    const { child, week: w } = rows[0];
    if (!w.active_days) return `${child.name}: ta teden brez vaje · 15 minut za nov začetek?`;
    const bits = [plural(w.active_days, DNI) + " vaje"];
    if (w.mastered.length) bits.push(`🏆 ${plural(w.mastered.length, ["nova tema", "novi temi", "nove teme", "novih tem"])}`);
    else if (w.solved) bits.push(plural(w.solved, NALOG));
    if (w.streak >= 3) bits.push(`🔥 ${w.streak} zapored`);
    return `${child.name} ta teden: ${bits.join(", ")}`;
  }
  return `${BRAND.name}: tedenski pregled za ${rows.map((r) => r.child.name).join(" in ")}`;
}

export function buildWeeklyReport(db, parent, children, { appUrl, unsubscribeUrl, selfIds = [] }) {
  const rows = children.map((c) => ({ child: c, week: childWeek(db, c), self: selfIds.includes(c.id) }));
  const allSelf = rows.length > 0 && rows.every((r) => r.self);
  const hello = allSelf
    ? `<p style="margin:0">Živjo${rows[0] ? `, ${esc(rows[0].child.name)}` : ""}! Tvoj teden na kratko.</p>`
    : `<p style="margin:0">Pozdravljeni${parent.name ? `, ${esc(parent.name)}` : ""}! Takole je minil zadnji teden.</p>`;
  const html = layout("Tedenski pregled", `${hello}${rows.map(childBlock).join("")}${button(appUrl, `Odpri ${BRAND.name}`)}`,
    `To poročilo prihaja vsako nedeljo zvečer. Če dva tedna ni vaje, ga ne pošljemo. <a href="${esc(unsubscribeUrl)}" style="color:${MUTED}">Odjava od tedenskih poročil</a>.`,
  );
  const text = `${rows.map(childText).join("\n\n")}\n\n${appUrl}\n\nOdjava: ${unsubscribeUrl}`;
  return {
    subject: subjectLine(rows),
    html,
    text,
    quiet: rows.every((r) => isQuiet(r.week)),
    children: rows.map((r) => ({ id: r.child.id, name: r.child.name, ...r.week })),
  };
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
