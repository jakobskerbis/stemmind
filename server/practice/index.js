// Register generatorjev in ustvarjanje nalog.
import crypto from "node:crypto";
import { makeRng } from "./rng.js";
import { MAT_GENERATORS } from "./generators/mat.js";
import { FIZ_GENERATORS } from "./generators/fiz.js";
import { KEM_GENERATORS } from "./generators/kem.js";
import { UNI_GENERATORS } from "./generators/uni.js";
import { TEK_MAT_OS } from "./generators/tek-mat-os.js";
import { TEK_MAT_SS } from "./generators/tek-mat-ss.js";

export const GENERATORS = [
  ...MAT_GENERATORS,
  ...FIZ_GENERATORS,
  ...KEM_GENERATORS,
  ...UNI_GENERATORS,
  // Tekmovanja (razdelek »Tekmovanja«): samo težje naloge v slogu tekmovanj.
  ...TEK_MAT_OS,
  ...TEK_MAT_SS,
];

const BY_TOPIC = {};
for (const g of GENERATORS) {
  for (const t of g.topics) (BY_TOPIC[t] ||= []).push(g);
}

export function hasGenerator(topicId) {
  return !!BY_TOPIC[topicId];
}

export function topicsWithGenerators() {
  return Object.keys(BY_TOPIC);
}

// Ustvari nalogo za temo. level: 1 (lažje) – 3 (težje).
export function generateTask(topicId, level = 1, seed = crypto.randomInt(2 ** 31)) {
  const gens = BY_TOPIC[topicId];
  if (!gens) return null;
  const r = makeRng(seed);
  const g = r.pick(gens);
  // Nekaj poskusov, če bi generator vrnil neveljavno nalogo.
  for (let i = 0; i < 5; i++) {
    const t = g.gen(level, r, topicId);
    if (t && t.text && t.answer) return { ...t, generator: g.id, topicId, level, seed };
  }
  throw new Error(`Generator ${g.id} ni ustvaril naloge.`);
}

// Kar gre k odjemalcu: brez pravilnega odgovora in rešitve.
export function publicTask(task) {
  const { answer } = task;
  return {
    text: task.text,
    figure: task.figure || null,
    inputHint: task.inputHint || null,
    level: task.level,
    answerType: answer.type,
    unit: answer.unit || null,
    options: answer.type === "choice" ? answer.options : null,
    optionsTex: !!task.options_tex,
    coefficientCount: answer.type === "coefficients" ? answer.values.length : null,
    // Podatki iz besedila (Podatki / Iščemo) in potrebna formula za rešen zgled.
    data: task.data || null,
    formula: task.formula || null,
  };
}
