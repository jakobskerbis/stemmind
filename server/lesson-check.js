// Preverjanje oblike lekcije učbenika (content/lessons/README.md).
// Uporabljata ga scripts/check-lesson.js in testi.
import katex from "katex";
import { parseLesson, expandFormulaBlocks } from "./textbook.js";
import { getTopic } from "./curriculum.js";
import { checkArithmetic } from "./lesson-math.js";

const REQUIRED = [
  [/^zakaj/i, "Zakaj se tega učimo"],
  [/^razlag/i, "Razlaga"],
  [/^rešen/i, "Rešeni primeri"],
  [/^pogoste/i, "Pogoste napake"],
  [/^povzetek/i, "Povzetek"],
];

// Vrne { errors, warnings } za vir lekcije. topicId je neobvezen (preveri obstoj teme).
const STOCK_PHRASES = [/\bV tej lekciji\b/, /\bse bomo naučili\b/, /\bPoglejmo si\b/, /\bKot vemo\b/, /\bKot vidimo\b/];

export function checkLessonSource(src, topicId) {
  const errors = [];
  const warnings = [];
  const err = (m) => errors.push(m);
  const warn = (m) => warnings.push(m);

  if (topicId && !getTopic(topicId)) err(`tema ${topicId} ne obstaja v server/curriculum-data.js`);
  const lesson = parseLesson(src);
  const { meta, sections, alternatives, checks } = lesson;

  if (!meta.stanje) err("v glavi manjka »stanje: osnutek« ali »stanje: pregledano«");
  else if (!/^(osnutek|pregledano)$/.test(meta.stanje)) err(`stanje »${meta.stanje}« ni osnutek ali pregledano`);
  if (/opus|sonnet|haiku|fable|claude|gpt/i.test(meta.avtor || "")) err("v glavi ne navajaj imena modela, piši »avtor: AI«");

  for (const [re, name] of REQUIRED) if (!sections.some((s) => re.test(s.title))) err(`manjka razdelek »## ${name}«`);
  if (alternatives.length < 2) err(`premalo razdelkov »## Drugače: …« (${alternatives.length}, vsaj 2)`);

  // Rešeni primeri: vsak ### Primer ima Podatki, Iščemo in blok :::formula.
  const ex = sections.find((s) => /^rešen/i.test(s.title));
  if (ex) {
    const examples = ex.md.split(/^### +/m).slice(1);
    if (examples.length < 2) err(`v »Rešeni primeri« sta potrebna vsaj 2 primera z naslovom »### Primer …« (${examples.length})`);
    for (const e of examples) {
      const title = e.split("\n")[0].trim();
      if (!/\*\*Podatki:?\*\*/.test(e)) err(`primer »${title}«: manjka vrstica »**Podatki:** …« z vsemi podatki iz besedila`);
      if (!/\*\*Iščemo:?\*\*/.test(e)) err(`primer »${title}«: manjka vrstica »**Iščemo:** …«`);
      if (!/^[ \t]*:::[ \t]*formula[ \t]*$/m.test(e)) err(`primer »${title}«: manjka blok »:::formula … :::« s formulo ali pravilom`);
      if (!/\*\*Rešitev:?\*\*/.test(e)) warn(`primer »${title}«: ni oznake »**Rešitev:**«`);
    }
  }

  // Bloki s formulo morajo biti zaprti.
  const body = src.replace(/^---\n[\s\S]*?\n---\n?/, "");
  const stripped = expandFormulaBlocks(body, "plain");
  if (/^[ \t]*:::/m.test(stripped)) err("nezaprt ali napačno zapisan blok »:::formula … :::« ali »:::premisli … :::« (vsak začetek in konec v svoji vrstici)");
  // Merila docs/kakovost.md §1: vmesna vprašanja v razlagi in razlaga vsakega napačnega odgovora.
  const thinks = body.match(/^[ \t]*:::[ \t]*premisli[ \t]*$/gm) || [];
  if (thinks.length < 2) warn(`v razlagi sta priporočeni 2 vmesni vprašanji »:::premisli« (${thinks.length})`);
  const noWhy = checks.reduce((n, c) => n + c.options.filter((_, i) => i !== c.correct && !c.optionWhy?.[i]).length, 0);
  if (checks.length && noWhy) warn(`${noWhy} napačnih možnosti v »Preveri se« nima razlage »~ …«`);

  // Kviz: vsako vprašanje natanko en »+«, vsaj 3 možnosti, brez ponavljanja.
  const quizMd = body.split(/^## +/m).find((p) => /^preveri se/i.test(p)) || "";
  const qs = [];
  for (const raw of quizMd.split("\n").slice(1)) {
    const line = raw.trim();
    if (!line) continue;
    if (line[0] === "?") qs.push({ q: line.slice(1).trim(), plus: 0, opts: [] });
    else if (!qs.length) continue;
    else if (line[0] === "+" || line[0] === "-") {
      const cur = qs[qs.length - 1];
      if (line[0] === "+") cur.plus++;
      cur.opts.push(line.slice(1).trim().replace(/\s+/g, " ").toLowerCase());
    }
  }
  if (qs.length < 3) err(`v »Preveri se« so potrebna vsaj 3 vprašanja (${qs.length})`);
  qs.forEach((q, i) => {
    const n = i + 1;
    if (q.plus !== 1) err(`vprašanje ${n}: natanko en pravilen odgovor »+« (zdaj ${q.plus})`);
    if (q.opts.length < 3) err(`vprašanje ${n}: vsaj 3 možnosti (zdaj ${q.opts.length})`);
    if (new Set(q.opts).size !== q.opts.length) err(`vprašanje ${n}: možnosti se ponavljajo`);
    if (q.opts.some((o) => !o)) err(`vprašanje ${n}: prazna možnost`);
  });
  if (checks.length !== qs.length) err("nekaterih vprašanj v »Preveri se« ni mogoče prebrati (oblika ? - + >)");

  // LaTeX: vsaka formula se mora izrisati, $ v vrstici v parih.
  const lines = body.split("\n");
  lines.forEach((line, i) => {
    const n = (line.replace(/\\\$/g, "").match(/\$/g) || []).length;
    if (n % 2) err(`vrstica ${i + 1}: liho število znakov $ (${n})`);
  });
  const texs = [];
  body.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => (texs.push([t, true]), ""));
  body.replace(/\$\$[\s\S]+?\$\$/g, "").replace(/(^|[^\\$])\$([^$\n]+?)\$/g, (_, p, t) => (texs.push([t, false]), ""));
  for (const [tex, display] of texs) {
    try {
      katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: "ignore" });
    } catch (e) {
      err(`formula se ne izriše: $${tex.slice(0, 60)}$ (${String(e.message).split("\n")[0].slice(0, 80)})`);
    }
  }
  // Računi: čisto številske korake preračuna sam (docs/kakovost.md §1.1); razlika nad 2 % je napaka, manjša opozorilo.
  const calc = checkArithmetic(body);
  const fmOffset = src.split("\n").length - body.split("\n").length; // vrstice glave
  for (const m of calc.mismatches) {
    (m.rel > 0.02 ? err : warn)(`vrstica ${m.line + fmOffset}: račun se ne ujema: $${m.tex}$ (${m.left} ≠ ${m.right})`);
  }
  if (/\bPhET\b/.test(body)) err("v besedilu ne omenjaj PhET; napiši »interaktivna simulacija spodaj«");
  if (/\.{3}\s*$/m.test(body.replace(/\$[^$]*\$/g, ""))) warn("vrstica se konča s »...« (nedokončano besedilo?)");

  const words = body.replace(/\$[^$]*\$/g, " ").split(/\s+/).filter(Boolean).length;
  // Šablonski stavki naredijo lekcije enolične (j, 29. 10. 2026: lekcije ne smejo biti monotone).
  const stock = STOCK_PHRASES.filter((re) => re.test(body)).map((re) => `»${re.source.replace(/\\b|\\s\+/g, " ").trim()}«`);
  if (stock.length) warn(`šablonski stavek ${stock.join(", ")}: začni s situacijo, vprašanjem ali poskusom`);
  if (words < 800) warn(`lekcija je kratka (${words} besed, cilj 1300–2300)`);
  if (words > 2800) warn(`lekcija je dolga (${words} besed, cilj 1300–2300)`);
  return { errors, warnings, words, examples: ex ? ex.md.split(/^### +/m).length - 1 : 0, questions: qs.length, calcChecked: calc.checked };
}
