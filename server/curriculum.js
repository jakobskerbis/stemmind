// Učne poti: dostop do podatkov iz curriculum-data.js.
import { PATHS } from "./curriculum-data.js";
import { UNI_PATHS, PROGRAMS, FACULTIES } from "./university-data.js";

export function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Razširjena oblika: vsaka tema dobi stalen id "<pot>/<slug-teme>".
const BUILT = {};
const TOPICS = {};
for (const [key, p] of Object.entries({ ...PATHS, ...UNI_PATHS })) {
  // OŠ/SŠ: "<predmet>-<OS|SS>-<razred>"; fakultete: podatki so zapisani v poti.
  const [subject, school, grade] = p.school === "UNI" ? [p.subject, "UNI", 0] : key.split("-");
  const units = p.units.map(([title, topics], ui) => ({
    title,
    topics: topics.map((t) => {
      const [name, goals = ""] = t.split("|").map((x) => x.trim());
      const topic = { id: `${key}/${slugify(name)}`, name, goals, unit: title, unitIndex: ui, path: key, subject };
      TOPICS[topic.id] = topic;
      return topic;
    }),
  }));
  BUILT[key] = { key, label: p.label, subject, school, grade: Number(grade), units };
}

// Letnik predmeta v programu (za oznako "moj letnik").
for (const prog of Object.values(PROGRAMS)) {
  prog.courseKeys.forEach((keys, yi) => keys.forEach((k) => (BUILT[k].grade ||= yi + 1)));
}

export function getPath(key) {
  return BUILT[key] || null;
}

export function getTopic(id) {
  return TOPICS[id] || null;
}

const brief = ({ key, label, subject, school, grade }) => ({ key, label, subject, school, grade });

// Poti OŠ in SŠ (fakultetni predmeti gredo prek listProgramPaths).
export function listPaths(subject) {
  return Object.values(BUILT)
    .filter((p) => p.school !== "UNI" && (!subject || p.subject === subject))
    .map(brief);
}

// ---------- fakultete ----------

export function getProgram(id) {
  return PROGRAMS[id] || null;
}

export function listPrograms() {
  return Object.entries(PROGRAMS).map(([id, p]) => ({
    id,
    label: p.label,
    name: p.name,
    faculty: p.faculty,
    facultyName: FACULTIES[p.faculty],
    source: p.source,
    sourceYear: p.sourceYear,
  }));
}

// Predmeti programa po letnikih: [{ ...pot, year }]; izbirni imajo year: null.
export function listProgramPaths(programId) {
  const p = PROGRAMS[programId];
  if (!p) return [];
  return [
    ...p.courseKeys.flatMap((keys, yi) => keys.map((k) => ({ ...brief(BUILT[k]), year: yi + 1 }))),
    ...p.electiveKeys.map((k) => ({ ...brief(BUILT[k]), year: null, elective: true })),
  ];
}

// Id-ji tem z danim naslovom v vseh fakultetnih predmetih (za generatorje nalog).
export function uniTopicIds(...names) {
  const want = new Set(names);
  return Object.values(TOPICS)
    .filter((t) => BUILT[t.path].school === "UNI" && want.has(t.name))
    .map((t) => t.id);
}

// Vsi id-ji tem po vrsti (za "naslednja tema").
export function topicOrder(key) {
  const p = BUILT[key];
  return p ? p.units.flatMap((u) => u.topics) : [];
}

// Iz nastavitev učenca ugane ustrezno pot, npr. "8. razred" -> MAT-OS-8.
export function pathKeyFor(settings) {
  const level = settings.curriculum_level || "";
  if (settings.educational_track === "UNIVERZA") return uniPathKeyFor(settings);
  const school = settings.educational_track === "SREDNJA_SOLA" ? "SS" : "OS";
  const num = Number((level.match(/([1-9])\s*\.?/) || [])[1]);
  const candidates = listPaths(settings.subject).filter((p) => p.school === school);
  if (!candidates.length) return null;
  const exact = candidates.find((p) => p.grade === num);
  if (exact) return exact.key;
  // OŠ 6. in 7. razred pri FIZ/KEM: naravoslovje, ponudimo prvo pot predmeta.
  return candidates[0].key;
}

// Besedilo za sistemski prompt, ko pogovor teče o temi učne poti.
export function learningPathPrompt(topicId) {
  const t = getTopic(topicId);
  if (!t) return "(Prost pogovor: ni izbrane teme učne poti.)";
  const order = topicOrder(t.path);
  const next = order[order.findIndex((x) => x.id === t.id) + 1];
  return [
    `Ta pogovor je del učne poti »${BUILT[t.path].label}«.`,
    `Sklop: ${t.unit}. Tema: ${t.name}.`,
    t.goals ? `Cilji: ${t.goals}.` : "",
    next ? `Naslednja tema na poti: ${next.name}.` : "To je zadnja tema na poti.",
  ]
    .filter(Boolean)
    .join("\n");
}

// Fakulteta: prvi predmet izbranega letnika, ki ustreza predmetu (MAT/FIZ/KEM).
function uniPathKeyFor(settings) {
  const p = PROGRAMS[settings.study_program];
  if (!p) return null;
  const year = Number((String(settings.curriculum_level || "").match(/([1-3])/) || [])[1]) || 1;
  // Letnik brez zajetih predmetov (npr. moduli v 3. letniku): vzamemo zadnjega s predmeti.
  const years = p.courseKeys.slice(0, year).filter((k) => k.length);
  const keys = years[years.length - 1] || [];
  return keys.find((k) => BUILT[k].subject === settings.subject) || keys[0] || null;
}

// Opis programa za sistemski prompt.
export function studyProgramPrompt(settings) {
  if (settings.educational_track !== "UNIVERZA") return "(ni fakultete)";
  const p = PROGRAMS[settings.study_program];
  if (!p) return "(program ni izbran)";
  const year = Number((String(settings.curriculum_level || "").match(/([1-3])/) || [])[1]) || 1;
  const names = (p.courseKeys[year - 1] || []).map((k) => BUILT[k].label.replace(/ \(.*\)$/, ""));
  return `${FACULTIES[p.faculty]}, univerzitetni študijski program 1. stopnje ${p.name}` + (names.length ? `; predmeti ${year}. letnika: ${names.join(", ")}` : "");
}
