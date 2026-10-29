// Register generatorjev in ustvarjanje nalog.
import crypto from "node:crypto";
import { makeRng } from "./rng.js";
import { MAT_GENERATORS } from "./generators/mat.js";
import { FIZ_GENERATORS } from "./generators/fiz.js";
import { KEM_GENERATORS } from "./generators/kem.js";
import { UNI_GENERATORS } from "./generators/uni.js";
import { DODATNE_MAT_OS } from "./generators/dodatne-mat-os.js";
import { DODATNE_MAT_SS12 } from "./generators/dodatne-mat-ss12.js";
import { DODATNE_MAT_SS34 } from "./generators/dodatne-mat-ss34.js";
import { DODATNE_OS_FIZ_KEM } from "./generators/dodatne-os-fiz-kem.js";
import { DODATNE_FIZ_SS } from "./generators/dodatne-fiz-ss.js";
import { DODATNE_KEM_SS } from "./generators/dodatne-kem-ss.js";
import { TEK_MAT_OS } from "./generators/tek-mat-os.js";
import { TEK_MAT_SS } from "./generators/tek-mat-ss.js";
import { TEK_FIZ } from "./generators/tek-fiz.js";
import { TEK_KEM } from "./generators/tek-kem.js";
import { EXAM_MAT } from "./generators/exam-mat.js";
import { EXAM_FIZ } from "./generators/exam-fiz.js";
import { EXAM_KEM } from "./generators/exam-kem.js";
import { baseTopicIds } from "../curriculum.js";

export const GENERATORS = [
  ...MAT_GENERATORS,
  ...FIZ_GENERATORS,
  ...KEM_GENERATORS,
  ...UNI_GENERATORS,
  // teme OŠ/SŠ, ki prej niso imele nalog
  ...DODATNE_MAT_OS,
  ...DODATNE_MAT_SS12,
  ...DODATNE_MAT_SS34,
  ...DODATNE_OS_FIZ_KEM,
  ...DODATNE_FIZ_SS,
  ...DODATNE_KEM_SS,
  // Tekmovanja (razdelek »Tekmovanja«): samo težje naloge v slogu tekmovanj.
  ...TEK_MAT_OS,
  ...TEK_MAT_SS,
  ...TEK_FIZ,
  ...TEK_KEM,
  // Priprave na izpite (SAT, gaokao, JEE, NEET, CBSE): angleške naloge v banki *-EXB.
  ...EXAM_MAT,
  ...EXAM_FIZ,
  ...EXAM_KEM,
];

const BY_TOPIC = {};
for (const g of GENERATORS) {
  for (const t of g.topics) (BY_TOPIC[t] ||= []).push(g);
}

// Regijska tema (npr. MAT-IN-8/…) vzame generatorje svojih osnovnih tem.
function gensFor(topicId) {
  if (BY_TOPIC[topicId]) return BY_TOPIC[topicId].map((g) => [g, topicId]);
  return baseTopicIds(topicId).flatMap((b) => (b === topicId ? [] : (BY_TOPIC[b] || []).map((g) => [g, b])));
}

export function hasGenerator(topicId) {
  return gensFor(topicId).length > 0;
}

export function topicsWithGenerators() {
  return Object.keys(BY_TOPIC);
}

// Ustvari nalogo za temo. level: 1 (lažje) – 3 (težje).
export function generateTask(topicId, level = 1, seed = crypto.randomInt(2 ** 31)) {
  const gens = gensFor(topicId);
  if (!gens.length) return null;
  const r = makeRng(seed);
  const [g, genTopic] = r.pick(gens);
  // Nekaj poskusov, če bi generator vrnil neveljavno nalogo.
  for (let i = 0; i < 5; i++) {
    const t = g.gen(level, r, genTopic);
    if (t && t.text && t.answer) return { ...t, generator: g.id, topicId, level, seed };
  }
  throw new Error(`Generator ${g.id} ni ustvaril naloge.`);
}

// Lestev namigov pred odgovorom: 1) podatki in iskano, 2) formula, 3) prvi korak (namig).
export function hintSteps(task) {
  const steps = [];
  const given = task.data?.given?.filter(Boolean) || [];
  const find = task.data?.find?.filter(Boolean) || [];
  if (given.length) steps.push({ kind: "data", given, find });
  const formula = task.formula ? [].concat(task.formula).filter(Boolean) : [];
  if (formula.length) steps.push({ kind: "formula", formula });
  if (task.hint) steps.push({ kind: "hint", text: task.hint });
  return steps;
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
    topicId: task.topicId || null, // za razlago teme ob seriji nalog
    hintSteps: hintSteps(task).length, // koliko korakov ima lestev namigov
  };
}
