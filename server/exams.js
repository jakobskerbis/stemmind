// Priprave na izpite (SAT, gaokao, JEE, NEET, CBSE): poti, poskusni izpit in točkovanje.
// Podatki so v exam-data.js, poti "<predmet>-EX-<izpit>" sestavi curriculum.js.
// Trening uporablja isti mehanizem kot tekmovalni trening, poskusni izpit pa isti kot
// poskusno tekmovanje (na čas, en poskus), le z izpitnim formatom in točkami.
import crypto from "node:crypto";
import { getPath } from "./curriculum.js";
import { hasGenerator } from "./practice/index.js";
import { EXAMS, EXAM_IDS, SUBJECT_NAMES_EN } from "./exam-data.js";

export const isExamPath = (key) => {
  const m = /^(MAT|FIZ|KEM)-EX-([A-Z0-9]+)$/.exec(String(key || ""));
  return !!(m && EXAMS[m[2]]?.subjects[m[1]] && getPath(key));
};
export const examOf = (key) => (isExamPath(key) ? String(key).split("-")[2] : null);

// Izpiti šolskega sistema (najprej domači), nato vsi ostali.
export function examsFor(system) {
  const own = EXAM_IDS.filter((id) => EXAMS[id].systems.includes(system));
  return { own, other: EXAM_IDS.filter((id) => !own.includes(id)) };
}

// Ali ima šolski sistem svoje izpite (takrat je zavihek »Izpiti« namesto »Tekmovanja«).
export const hasExams = (system) => examsFor(system).own.length > 0;

// Privzeta pot: izbrani izpit (ali prvi domači) in predmet učenca, če ga izpit ima.
export function examKeyFor(settings, examId = null) {
  const { own } = examsFor(settings.school_system);
  const id = EXAMS[examId] ? examId : own[0] || "SAT"; // brez domačih izpitov: SAT (mednarodno najbolj razširjen)
  if (!id) return null;
  const subjects = Object.keys(EXAMS[id].subjects);
  const subject = subjects.includes(settings.subject) ? settings.subject : subjects[0];
  return `${subject}-EX-${id}`;
}

const mockOf = (key) => {
  const [subject, , id] = key.split("-");
  return EXAMS[id].subjects[subject].mock;
};

// Opis za zavihek: izpit, predmeti, format poskusnega izpita.
export function examInfo(key, system) {
  if (!isExamPath(key)) return null;
  const [subject, , id] = key.split("-");
  const e = EXAMS[id];
  const mock = mockOf(key);
  const groups = mock.groups;
  const { own, other } = examsFor(system);
  const brief = (x) => ({ id: x, name: EXAMS[x].name, country: EXAMS[x].country });
  return {
    key,
    exam: id,
    name: e.name,
    full: e.full,
    country: e.country,
    about: e.about,
    subject,
    subjectName: SUBJECT_NAMES_EN[subject],
    subjects: Object.keys(e.subjects).map((s) => ({ key: `${s}-EX-${id}`, subject: s, name: SUBJECT_NAMES_EN[s] })),
    exams: { own: own.map(brief), other: other.map(brief) },
    mock: {
      tasks: groups.reduce((n, g) => n + g.n, 0),
      choice: groups.filter((g) => g.format === "choice").reduce((n, g) => n + g.n, 0),
      minutes: mock.minutes,
      maxPoints: groups.reduce((n, g) => n + g.n * g.points, 0),
      negative: groups.some((g) => g.penalty < 0),
      penalty: Math.min(0, ...groups.map((g) => g.penalty)),
      scale: mock.scale || null,
    },
  };
}

const pickWeighted = (items, weight) => {
  const total = items.reduce((s, x) => s + weight(x), 0);
  let x = crypto.randomInt(1_000_000) / 1_000_000 * total;
  for (const it of items) {
    x -= weight(it);
    if (x <= 0) return it;
  }
  return items[items.length - 1];
};

// Načrt poskusnega izpita: vprašanja po skupinah formata, teme po utežeh sklopov,
// ista tema ne pride dvakrat zapored in se ne ponovi, dokler ni prišla vsaka.
export function mockPlan(key) {
  const [subject, , id] = key.split("-");
  const def = EXAMS[id].subjects[subject];
  const units = getPath(key).units
    .map((u, i) => ({ topics: u.topics.filter((t) => hasGenerator(t.id)).map((t) => t.id), weight: def.units[i][2] || 1 }))
    .filter((u) => u.topics.length);
  const used = new Map();
  const plan = [];
  for (const g of def.mock.groups) {
    for (let i = 0; i < g.n; i++) {
      const unit = pickWeighted(units, (u) => u.weight);
      const least = Math.min(...unit.topics.map((t) => used.get(t) || 0));
      const pool = unit.topics.filter((t) => (used.get(t) || 0) === least && t !== plan[plan.length - 1]?.topic);
      const list = pool.length ? pool : unit.topics;
      const topic = list[crypto.randomInt(list.length)];
      used.set(topic, (used.get(topic) || 0) + 1);
      plan.push({ topic, mode: "contest", level: g.level, format: g.format, points: g.points, penalty: g.penalty });
    }
  }
  return { plan, minutes: def.mock.minutes };
}

// Ocena na lestvici izpita (npr. SAT 200–800), zaokrožena na 10.
export function scaledScore(key, points, maxPoints) {
  const scale = isExamPath(key) && mockOf(key).scale;
  if (!scale || !maxPoints) return null;
  const [lo, hi] = scale;
  return { value: Math.round((lo + ((hi - lo) * Math.max(0, points)) / maxPoints) / 10) * 10, min: lo, max: hi };
}

// Besedilo za sistemski prompt, ko pogovor teče o izpitni temi.
export function examPrompt(key) {
  if (!isExamPath(key)) return "";
  const e = EXAMS[examOf(key)];
  return `Učenec se pripravlja na izpit ${e.full} (${e.country}). Format: ${e.about} Razlagaj v slogu tega izpita (pristopi, pasti, časovna razporeditev), a ne izdaj rešitve, dokler je učenec ne poskusi sam.`;
}
