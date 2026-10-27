// Učne poti: dostop do podatkov iz curriculum-data.js.
import { PATHS } from "./curriculum-data.js";

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
for (const [key, p] of Object.entries(PATHS)) {
  const [subject, school, grade] = key.split("-");
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

export function getPath(key) {
  return BUILT[key] || null;
}

export function getTopic(id) {
  return TOPICS[id] || null;
}

export function listPaths(subject) {
  return Object.values(BUILT)
    .filter((p) => !subject || p.subject === subject)
    .map(({ key, label, subject, school, grade }) => ({ key, label, subject, school, grade }));
}

// Vsi id-ji tem po vrsti (za "naslednja tema").
export function topicOrder(key) {
  const p = BUILT[key];
  return p ? p.units.flatMap((u) => u.topics) : [];
}

// Iz nastavitev učenca ugane ustrezno pot, npr. "8. razred" -> MAT-OS-8.
export function pathKeyFor(settings) {
  const level = settings.curriculum_level || "";
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
