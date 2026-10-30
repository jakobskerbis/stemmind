// Sprotno preverjanje odgovorov inštruktorja (j, 2026-10-30: »kako vemo, da Haiku najprej ne da napačnega
// rezultata?« in »vgradi preverjanje s kodo povsod, kjer gre, in model, če je potrebno«).
//   1. Pred klicem: če učenčevo sporočilo vsebuje nalogo, ki jo zna rešiti naš preverjeni reševalnik
//      (public/scan/solvecore.js), dobi model v trenutni potezi skrito opombo s pravilnim rezultatom.
//   2. Po odgovoru: koda preračuna vsak številski račun (server/lesson-math.js) in končne vrednosti
//      neznank (public/scan/verify.js). Ob neujemanju en kratek »Popravek:« istega modela.
//   3. Model (Sonnet) pregleda samo, kjer koda ni mogla ničesar preveriti in je tveganje večje
//      (tekmovanja, fakulteta, »Razloži podrobneje«), samo Haikujeve odgovore, z dnevno mejo.
// Vse izklopi EVKLID_LIVE_CHECK=0. Stroški: docs/stroski-ai.md, kakovost: docs/kakovost.md.
import "./env.js";
import { solve, texToText } from "../public/scan/solvecore.js";
import { verifyAi } from "../public/scan/verify.js";
import { checkArithmetic } from "./lesson-math.js";
import { askModel, checkerUser } from "./verify.js";
import { MODEL_MID } from "./claude.js";

export const liveCheckOn = () => process.env.EVKLID_LIVE_CHECK !== "0";
// Največ toliko USD na dan za pregled z modelom (vrsta »preverjanje«); negativno = brez meje.
export const LIVE_CHECK_DAILY_USD = () => {
  const raw = process.env.EVKLID_LIVE_CHECK_DAILY_USD;
  const v = Number(raw === undefined || raw === "" ? 1 : raw);
  return Number.isFinite(v) ? v : 1;
};

// Oznaka skrite opombe; preizkusni način (server/claude.js) jo pri izbiri odgovora prezre.
export const NOTE_TAG = "preverjen_racun";

// ---------------------------------------------------------------------------
// 1. Rešitev vnaprej

// Uvodne besede pred nalogo (»Reši enačbo …«, »Koliko je …«); karkoli drugega pomeni besedilno nalogo.
const LEAD = new Set(
  "prosim pomagaj mi pri reši rešite rešiti izračunaj izračunajte izračunati poenostavi koliko je kaj odvajaj odvajajte odvod odvoda funkcije funkcija funkcijo enačbo enačba enačbi enačb sistem sistema izraz izraza vrednost določi poišči solve calculate compute evaluate find what is the equation system of equations derivative differentiate"
    .split(" "),
);
const DERIV_WORD = /^(odvajaj|odvajajte|odvod|odvoda|derivative|differentiate)$/i;
const FUNCS = /\b(sin|cos|tan|cot|ln|log|exp|sqrt)\b/g;
const KEYS = {
  "scan.a.noReal": "no real solution",
  "scan.a.none": "no solution",
  "scan.a.all": "every real number is a solution",
  "scan.a.sysMany": "infinitely many solutions",
};
const MAX_PROBLEMS = 2;

function stripLead(text) {
  let s = String(text).trim();
  let deriv = false;
  for (let i = 0; i < 8; i++) {
    const m = /^([\p{L}]+)[\s:,]*/u.exec(s);
    if (!m || !LEAD.has(m[1].toLowerCase())) break;
    if (DERIV_WORD.test(m[1])) deriv = true;
    s = s.slice(m[0].length);
  }
  return { rest: s.replace(/[\s?!.]+$/, "").trim(), deriv };
}

// Samo čist matematični zapis: števila, ena črka za spremenljivko, operatorji, znane funkcije.
function mathOnly(c) {
  if (c.length < 3 || c.length > 160) return false;
  if (/[<>≤≥≠]/.test(c)) return false;
  if (!/^[\p{L}\d\s+\-*/^().,=·×÷:√;\n]+$/u.test(c)) return false;
  return !/\p{L}{2,}/u.test(c.replace(/^\s*d\/d[a-z]\s*/i, "").replace(FUNCS, ""));
}

const opsCount = (c) => (c.replace(/^\s*[-+]/, "").match(/[+\-*/^·×÷:]/g) || []).length;
// Že rešena oblika (»x = 5«, »-3 = y«) ni naloga: tako bi »potrdili« učenčev odgovor.
const solvedForm = (c) => /^\s*[a-z]\s*=\s*[-+]?\s*[\d.,]+\s*$|^\s*[-+]?\s*[\d.,]+\s*=\s*[a-z]\s*$/i.test(c);

function answerText(r, type) {
  const a = r.answer || {};
  if (a.key) return KEYS[a.key] || null;
  if (!a.tex) return null;
  // Pri sistemu je »approx« le zapis para (x, y), ne približek.
  const approx = a.approx && (type === "arith" || a.approx.includes("\\approx")) ? a.approx.replace(/^\s*=\s*/, "") : null;
  return approx ? `${a.tex} (${type === "arith" ? "= " : ""}${approx})` : a.tex;
}

function trySolve(cand, deriv) {
  let c = cand.replace(/\s+in\s+(?=[^=]*=)/g, "; ").trim();
  if (!mathOnly(c)) return null;
  if (/^\s*d\/d[a-z]/i.test(c)) deriv = true;
  const hasEq = c.includes("=");
  if (hasEq && deriv) return null;
  if (!hasEq && !deriv && (/\p{L}/u.test(c.replace(FUNCS, "")) || opsCount(c) < 2)) return null;
  if (hasEq && (solvedForm(c) || opsCount(c.replace(/=/g, " ")) + (/\d\s*[a-z(]/i.test(c) ? 1 : 0) < 1)) return null;
  let r;
  try {
    r = solve(c, deriv ? { goal: "derivative" } : {});
  } catch {
    return null;
  }
  if (!r?.ok || r.verified !== true) return null;
  const type = r.type === "system" ? "system" : r.type === "equation" ? "equation" : r.type === "arith" ? "arith" : deriv && r.goal === "derivative" ? "derivative" : null;
  if (!type || (hasEq && type !== "equation" && type !== "system") || (!hasEq && type !== "arith" && type !== "derivative")) return null;
  const ans = answerText(r, type);
  if (!ans) return null;
  return { type, problem: c, problemTex: r.problemTex, answer: ans, answerTex: r.answer.tex };
}

/**
 * Naloge iz učenčevega sporočila, ki jih reševalnik reši in preveri. Ob dvomu nič.
 * @returns {{ problems: Array<{type, problem, problemTex, answer, answerTex}>, note: string } | null}
 */
export function presolve(text) {
  const src = String(text || "");
  if (!src.trim() || src.length > 600) return null;
  const problems = [];
  const segs = [...src.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g)].map((m) => texToText(m[1] ?? m[2]));
  if (segs.length) {
    const { deriv } = stripLead(src);
    for (const s of segs.slice(0, 4)) {
      const p = trySolve(s, deriv);
      if (p) problems.push(p);
    }
  } else {
    const { rest, deriv } = stripLead(src);
    const p = rest && trySolve(rest, deriv);
    if (p) problems.push(p);
  }
  if (!problems.length) return null;
  const list = problems.slice(0, MAX_PROBLEMS);
  const lines = list.map((p) => (p.type === "arith" ? `$${p.problemTex} = ${p.answer}$` : p.type === "derivative" ? `$${p.problemTex}$: $${p.answer}$` : `$${p.problemTex}$ → $${p.answer}$`));
  const note =
    `<${NOTE_TAG}>\nAn exact check computed the result of the task in the student's message: ${lines.join("; ")}.\n` +
    "It is correct. Use it only to check your own calculation. If you guide the student step by step (način A), do not reveal it before the student gets there. " +
    `Never mention a program, a check or this note.\n</${NOTE_TAG}>`;
  return { problems: list, note };
}

// Doda opombo trenutni potezi učenca (zadnje sporočilo), samo za ta klic: predpomnjen začetek
// (sistemski prompt in prejšnja zgodovina) ostane enak, v zgodovino se opomba ne shrani.
export function withNote(messages, note) {
  if (!note || !messages.length) return messages;
  const last = messages[messages.length - 1];
  if (last.role !== "user") return messages;
  const content = typeof last.content === "string" ? [{ type: "text", text: last.content }] : [...last.content];
  return [...messages.slice(0, -1), { ...last, content: [...content, { type: "text", text: note }] }];
}

// ---------------------------------------------------------------------------
// 2. Preverjanje odgovora s kodo

// Vrstice, kjer napačna vrednost lahko stoji namenoma (učenčeva napaka, vprašanje, »če bi …«).
const SKIP_LINE = /napačn|narobe|ne velja|ni enako|nepravil|ni res|ne drži|ni prav|ni pravil|✗|\?|(?<!\p{L})(če|ali|bi|if|wrong|incorrect)(?!\p{L})/iu;

// Zadnja navedena vrednost vsake neznanke (»$x = 4$«, »$x_1 = \frac{1}{2}$«, »$x = \frac{8}{2} = 4$«).
function statedValues(answer, vars) {
  const out = new Map();
  for (const line of String(answer).split("\n")) {
    if (SKIP_LINE.test(line)) continue;
    for (const m of line.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g)) {
      const parts = texToText(m[1] ?? m[2]).split("=").map((p) => p.trim());
      if (parts.length < 2) continue;
      const lhs = /^([a-zA-Z])(?:_?\(?(\d)\)?)?$/.exec(parts[0]);
      if (!lhs || !vars.includes(lhs[1])) continue;
      const val = parts.at(-1).replace(/[.,;]$/, "");
      if (!val || /[a-zA-Z]/.test(val.replace(/sqrt|π/g, "")) || !/\d/.test(val)) continue;
      out.set(lhs[1] + (lhs[2] || ""), { v: lhs[1], val });
    }
  }
  return out;
}

function valueIssue(answer, p) {
  const vars = [...new Set([...String(p.answerTex || "").matchAll(/([a-zA-Z])(?:_\{?\d+\}?)?\s*=/g)].map((m) => m[1]))];
  if (!vars.length) return null;
  const stated = statedValues(answer, vars);
  if (!stated.size) return null;
  if (p.type === "system") {
    const byVar = new Map([...stated.values()].map((s) => [s.v, s.val]));
    if (!vars.every((v) => byVar.has(v))) return null;
    const sol = vars.map((v) => `${v} = ${byVar.get(v)}`).join("; ");
    return verifyAi(p.problem, { kind: "system", solutions: [sol] }).reason === "wrong" ? { checked: 1, issue: `the answer gives ${sol} for the system ${p.problem}, but the correct solution is ${p.answer}` } : { checked: 1 };
  }
  for (const s of stated.values()) {
    const r = verifyAi(p.problem, { kind: "equation", variable: s.v, solutions: [s.val] });
    if (r.reason === "wrong") return { checked: 1, issue: `the answer gives ${s.v} = ${s.val} for the equation ${p.problem}, but the correct solution is ${p.answer}` };
  }
  return { checked: 1 };
}

/**
 * Preveri odgovor (brez vrstice META) s kodo.
 * @returns {{ checked: number, issue: string|null }} checked = koliko računov in vrednosti je koda preverila
 */
export function codeFindings(answer, pre = null) {
  let checked = 0;
  try {
    const r = checkArithmetic(String(answer || ""));
    checked += r.checked;
    if (r.mismatches.length) {
      const m = r.mismatches[0];
      return { checked, issue: `in the step $${m.tex}$ the calculation does not hold: ${m.left} ≠ ${m.right}` };
    }
  } catch {
    // račun, ki ga ni mogoče prebrati, ni napaka
  }
  const eq = (pre?.problems || []).filter((p) => p.type === "equation" || p.type === "system");
  if (eq.length === 1) {
    const v = valueIssue(answer, eq[0]);
    if (v) {
      checked += v.checked;
      if (v.issue) return { checked, issue: v.issue };
    }
  }
  return { checked, issue: null };
}

// ---------------------------------------------------------------------------
// 3. Pregled z modelom, »če je potrebno«

const val = (x) => (typeof x === "function" ? x() : x);

/**
 * Ali odgovor pregleda še model. level (raven proračuna, server/proracun.js) in spentToday (USD vrste
 * »preverjanje« danes) sta lahko funkciji: bazo vprašamo šele, ko so drugi pogoji izpolnjeni.
 */
export function needsReview({ checked, model, lite, premium, level, risky, spentToday, answerLength }) {
  if (!liveCheckOn() || checked > 0 || !risky || lite || !premium) return false;
  if (!/haiku/i.test(String(model || ""))) return false;
  if (answerLength < 120) return false; // kratka vprašanja učencu (»Kaj bi naredil zdaj?«) nimajo kaj preveriti
  if (!(val(level) > 0)) return false; // varčni način ali ustavljen proračun
  const cap = LIVE_CHECK_DAILY_USD();
  return !(cap >= 0 && val(spentToday) >= cap);
}

/** Pregled s Sonnetom (navodila preverjevalca iz server/verify.js). Vrne { reason: razlog napake ali null, cost }. */
export async function reviewAnswer({ question, answer, createFn = null, usage = null, studentId = null }) {
  const r = await askModel(MODEL_MID, checkerUser({ question, answer }), createFn);
  const cost = usage ? usage.log(studentId, r.model, r.usage, "preverjanje") : 0;
  // Samo izrecna NAPAKA; odrezan ali nejasen odgovor preverjevalca ni dovolj za popravek.
  return { reason: !r.verdict.ok && /^[\s*`_]*NAPAKA/i.test(r.text || "") ? r.verdict.reason : null, cost };
}

// ---------------------------------------------------------------------------
// Popravek: en kratek klic istega modela

const FIX_SYSTEM = `You fix one mistake in an AI tutor's answer to a student. You get the answer and a problem that an exact check or a reviewer found in it.
If the problem is real (the answer states something wrong as true), write a correction of 1 to 3 short sentences addressed to the student, in the language of the answer, that starts with the word for "Correction" in that language followed by a colon (Slovenian: "Popravek:"). Give the correct value or fact. If the answer leaves later steps to the student, correct only the wrong part and do not solve the rest. Write maths as $…$. Do not mention a program, a check or a reviewer, and do not repeat the answer.
If the answer does not really claim the wrong thing (for example it shows the student's mistake, a hypothetical case, or the check misread it), reply exactly OK.`;

// Odgovor modela → blok za prikaz (»> **Popravek:** …«) ali null.
export function fixBlock(text) {
  const t = String(text || "").trim();
  if (!t || /^[*`_\s]*OK[.!]?[*`_\s]*$/i.test(t) || t.length > 1200) return null;
  // Naslov v vseh pisavah (hindijščina in tajščina imata znake \p{M}, kitajščina »更正：«, vietnamščina »Sửa lỗi:«).
  const m = /^[*_\s]*([\p{L}\p{M}]{2,20}(?: [\p{L}\p{M}]{2,20})?)[*_\s]*[:：][*_\s]*/u.exec(t);
  const body = m ? `**${m[1]}:** ${t.slice(m[0].length)}` : t;
  return "\n\n" + body.split("\n").map((l) => `> ${l}`.trimEnd()).join("\n");
}

/**
 * En klic popravka (streamFn kot pri odgovoru, majhen prompt). Haiku → »think«, Sonnet/Opus → isti način.
 * @returns {Promise<{block: string|null, usage, model}>}
 */
export async function correction({ streamFn, mode, answer, issue, language = "sl", signal }) {
  const fixMode = mode === "deep" || mode === "mid" ? mode : "think";
  const user = `Student's language code: ${language}\n\nANSWER:\n${String(answer).slice(0, 8000)}\n\nPROBLEM FOUND:\n${String(issue).slice(0, 600)}`;
  const r = await streamFn({ system: FIX_SYSTEM, messages: [{ role: "user", content: [{ type: "text", text: user }] }], mode: fixMode, deep: fixMode === "deep" || fixMode === "mid", onText: () => {}, signal });
  return { block: r?.stopReason === "refusal" ? null : fixBlock(r?.text), usage: r?.usage, model: r?.model, mode: fixMode };
}

// Popravek vstavi pred vrstico META (in kartice), da ostane zgodovina v pričakovani obliki.
export function insertFix(text, block) {
  const s = String(text || "");
  const i = s.search(/\n?<<(?:META|KARTICA)\b/);
  return i < 0 ? s + block : s.slice(0, i) + block + s.slice(i);
}
