// Učbenik: lekcije za teme učnih poti.
//
// Lekcije so Markdown datoteke v content/lessons/<pot>/<slug-teme>.md, da jih
// učitelj lahko pregleda in popravi kar v repozitoriju. Branje ne stane nič.
// Oblika je opisana v content/lessons/README.md.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getTopic, getPath, listPaths, topicOrder, getProgram, listProgramPaths } from "./curriculum.js";
import { getExplanation } from "./explanations.js";
import { hasGenerator } from "./practice/index.js";

const here = path.dirname(fileURLToPath(import.meta.url));
export const LESSONS_DIR = process.env.STEMMIND_LESSONS || path.join(here, "..", "content", "lessons");

// Lastne interaktivne demonstracije (public/demos.js) in teme, kjer se pokažejo.
export const DEMOS = {
  linearna: {
    title: "Graf funkcije y = kx + n",
    topics: ["MAT-OS-9/linearna-funkcija", "MAT-OS-9/graf-linearne-funkcije", "MAT-SS-1/linearna-funkcija", "MAT-OS-7/premo-sorazmerje"],
  },
  pitagora: {
    title: "Pitagorov izrek s kvadrati",
    topics: ["MAT-OS-8/pitagorov-izrek", "MAT-OS-8/uporaba-pitagorovega-izreka"],
  },
  ulomki: {
    title: "Ulomek kot del celote",
    topics: ["MAT-OS-6/ulomek-kot-del-celote", "MAT-OS-7/razsirjanje-in-krajsanje-ulomkov", "MAT-OS-7/primerjanje-in-urejanje-ulomkov"],
  },
  ohm: {
    title: "Ohmov zakon v električnem krogu",
    topics: ["FIZ-OS-9/upor-in-ohmov-zakon", "FIZ-OS-9/elektricni-tok-in-napetost", "FIZ-SS-2/elektricni-tok"],
  },
  "prosti-pad": {
    title: "Prosti pad na Zemlji, Luni in Marsu",
    topics: ["FIZ-OS-9/prosti-pad", "FIZ-SS-1/prosti-pad-in-navpicni-met", "FIZ-OS-8/pospeseno-gibanje"],
  },
  nihalo: {
    title: "Matematično nihalo",
    topics: ["FIZ-SS-3/nihanje"],
  },
  plini: {
    title: "Plin v posodi: tlak, prostornina, temperatura",
    topics: ["FIZ-SS-2/plinska-enacba", "KEM-SS-1/plini"],
  },
  enacbe: {
    title: "Urejanje kemijskih enačb",
    topics: ["KEM-OS-8/urejanje-kemijskih-enacb", "KEM-SS-1/urejanje-enacb", "KEM-OS-8/kemijska-reakcija"],
  },
  ph: {
    title: "pH lestvica",
    topics: ["KEM-OS-8/ph-lestvica", "KEM-SS-2/ph", "KEM-OS-8/kisline-in-baze", "KEM-SS-2/kisline-in-baze"],
  },
};

// Simulacije PhET (University of Colorado Boulder, CC BY 4.0), za teme brez
// lastne demonstracije ali kot dodatek. Ime = mapa simulacije na phet.colorado.edu.
export const PHET = {
  "MAT-OS-6/ulomek-kot-del-celote": "fractions-intro",
  "MAT-OS-7/razsirjanje-in-krajsanje-ulomkov": "fractions-equality",
  "MAT-OS-7/primerjanje-in-urejanje-ulomkov": "fractions-equality",
  "MAT-OS-6/preproste-enacbe": "equality-explorer",
  "MAT-OS-8/linearne-enacbe": "equality-explorer",
  "MAT-OS-6/obseg-in-ploscina-pravokotnika-in-kvadrata": "area-builder",
  "MAT-OS-7/razmerje": "ratio-and-proportion",
  "MAT-OS-7/premo-sorazmerje": "proportion-playground",
  "MAT-OS-8/cela-stevila": "number-line-integers",
  "MAT-OS-9/linearna-funkcija": "graphing-lines",
  "MAT-OS-9/graf-linearne-funkcije": "graphing-slope-intercept",
  "MAT-SS-1/linearna-funkcija": "graphing-lines",
  "MAT-SS-2/kvadratna-funkcija": "graphing-quadratics",
  "MAT-SS-3/kotne-funkcije-poljubnega-kota": "trig-tour",
  "MAT-SS-3/grafi-kotnih-funkcij": "trig-tour",
  "MAT-OS-9/verjetnost": "plinko-probability",
  "MAT-SS-4/verjetnost": "plinko-probability",
  "FIZ-OS-8/gostota": "density",
  "FIZ-OS-8/tlak": "under-pressure",
  "FIZ-SS-1/tlak-in-vzgon": "under-pressure",
  "FIZ-OS-8/sila-in-merjenje-sile": "hookes-law",
  "FIZ-OS-8/odboj-svetlobe": "bending-light",
  "FIZ-OS-8/lom-svetlobe": "bending-light",
  "FIZ-SS-3/geometrijska-optika": "geometric-optics",
  "FIZ-OS-9/newtonovi-zakoni": "forces-and-motion-basics",
  "FIZ-SS-1/newtonovi-zakoni": "forces-and-motion-basics",
  "FIZ-SS-1/prosti-pad-in-navpicni-met": "projectile-motion",
  "FIZ-OS-9/kineticna-in-potencialna-energija": "energy-skate-park-basics",
  "FIZ-SS-1/energija": "energy-skate-park",
  "FIZ-OS-9/temperatura-in-notranja-energija": "states-of-matter-basics",
  "FIZ-OS-9/prenos-toplote": "energy-forms-and-changes",
  "FIZ-SS-2/notranja-energija-in-toplota": "energy-forms-and-changes",
  "FIZ-OS-9/elektricni-naboj": "balloons-and-static-electricity",
  "FIZ-SS-2/elektricni-naboj-in-coulombov-zakon": "coulombs-law",
  "FIZ-OS-9/elektricni-krog": "circuit-construction-kit-dc",
  "FIZ-OS-9/elektricni-tok-in-napetost": "circuit-construction-kit-dc",
  "FIZ-SS-2/elektricna-vezja": "circuit-construction-kit-dc",
  "FIZ-OS-9/upor-in-ohmov-zakon": "ohms-law",
  "FIZ-OS-9/magneti-in-magnetno-polje": "magnets-and-electromagnets",
  "FIZ-OS-9/elektromagnet": "magnets-and-electromagnets",
  "FIZ-SS-3/magnetno-polje": "magnets-and-electromagnets",
  "FIZ-SS-3/indukcija": "faradays-law",
  "FIZ-SS-2/plinska-enacba": "gas-properties",
  "FIZ-SS-3/nihanje": "pendulum-lab",
  "FIZ-SS-3/valovanje": "wave-on-a-string",
  "FIZ-SS-3/valovna-optika": "wave-interference",
  "KEM-OS-8/zgradba-atoma": "build-an-atom",
  "KEM-SS-1/zgradba-atoma": "build-an-atom",
  "KEM-OS-8/kovalentna-vez": "molecule-shapes-basics",
  "KEM-SS-1/kemijske-vezi": "molecule-polarity",
  "KEM-OS-8/urejanje-kemijskih-enacb": "balancing-chemical-equations",
  "KEM-SS-1/urejanje-enacb": "balancing-chemical-equations",
  "KEM-SS-1/stehiometrija": "reactants-products-and-leftovers",
  "KEM-OS-8/ph-lestvica": "ph-scale",
  "KEM-SS-2/ph": "ph-scale",
  "KEM-OS-8/kisline-in-baze": "acid-base-solutions",
  "KEM-SS-2/kisline-in-baze": "acid-base-solutions",
  "KEM-SS-2/sibke-kisline-in-baze": "acid-base-solutions",
  "KEM-OS-9/raztopine": "concentration",
  "KEM-SS-1/raztopine": "molarity",
  "KEM-SS-1/plini": "gas-properties",
};

const DEMO_BY_TOPIC = {};
for (const [id, d] of Object.entries(DEMOS)) for (const t of d.topics) DEMO_BY_TOPIC[t] ??= id;

export function phetUrl(sim) {
  return `https://phet.colorado.edu/sims/html/${sim}/latest/${sim}_all.html?locale=sl`;
}

// Glave razdelkov, ki imajo v lekciji poseben pomen.
const ALT_PREFIX = /^drugače\s*:\s*/i;
const CHECKS = /^preveri se$/i;

// Razčleni lekcijo. Glava med --- vrsticama: "ključ: vrednost".
// Razdelki so ## naslovi; "## Drugače: …" so druge razlage, "## Preveri se"
// vsebuje vprašanja (? vprašanje, - napačen, + pravilen odgovor, > pojasnilo).
export function parseLesson(src) {
  const meta = {};
  let body = src.replace(/^﻿/, "").replace(/\r\n/g, "\n");
  const fm = /^---\n([\s\S]*?)\n---\n?/.exec(body);
  if (fm) {
    for (const line of fm[1].split("\n")) {
      const m = /^\s*([\w-]+)\s*:\s*(.*)$/.exec(line);
      if (m) meta[m[1].toLowerCase()] = m[2].trim();
    }
    body = body.slice(fm[0].length);
  }
  const sections = [];
  const alternatives = [];
  let checks = [];
  const parts = body.split(/^## +/m);
  const intro = parts.shift().trim();
  if (intro) sections.push({ title: "", md: intro });
  for (const part of parts) {
    const nl = part.indexOf("\n");
    const title = (nl === -1 ? part : part.slice(0, nl)).trim();
    const md = nl === -1 ? "" : part.slice(nl + 1).trim();
    if (ALT_PREFIX.test(title)) alternatives.push({ title: title.replace(ALT_PREFIX, "").trim(), md });
    else if (CHECKS.test(title)) checks = parseChecks(md);
    else sections.push({ title, md });
  }
  return { meta, sections, alternatives, checks };
}

function parseChecks(md) {
  const out = [];
  let cur = null;
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const kind = line[0];
    const text = line.slice(1).trim();
    if (kind === "?") {
      cur = { q: text, options: [], correct: -1, why: "" };
      out.push(cur);
    } else if (!cur) continue;
    else if (kind === "+" || kind === "-") {
      if (kind === "+") cur.correct = cur.options.length;
      cur.options.push(text);
    } else if (kind === ">") cur.why += (cur.why ? " " : "") + text;
    else if (!cur.options.length) cur.q += " " + line;
  }
  return out.filter((c) => c.options.length >= 2 && c.correct >= 0);
}

// Blok s formulo v rešenem primeru: vrstice med »:::formula« in »:::«.
// V aplikaciji je skrit za gumbom »Pokaži formulo« (učenec najprej poskusi sam),
// v PDF-ju je izpisan kot okvir »Formula«, tutor ga dobi kot navadno besedilo.
const FORMULA_RE = /^[ \t]*:::[ \t]*formula[ \t]*\n([\s\S]*?)\n[ \t]*:::[ \t]*$/gm;
export function expandFormulaBlocks(md, mode = "html") {
  return String(md ?? "").replace(FORMULA_RE, (_, body) => {
    const inner = body.trim();
    if (mode === "plain") return inner;
    if (mode === "print") return `<div class="formula"><p class="formula-label">Formula</p>\n\n${inner}\n\n</div>`;
    return `<details class="tb-formula"><summary>Pokaži formulo</summary>\n\n${inner}\n\n</details>`;
  });
}
const withFormulas = (parts, mode) => parts.map((x) => ({ ...x, md: expandFormulaBlocks(x.md, mode) }));

function lessonFile(topicId) {
  const [pathKey, slug] = topicId.split("/");
  if (!/^[A-Z]+-[A-Z]+-[A-Z0-9]+$/.test(pathKey) || !/^[a-z0-9-]+$/.test(slug || "")) return null;
  return path.join(LESSONS_DIR, pathKey, `${slug}.md`);
}

const cache = new Map(); // topicId -> { mtime, lesson }
export function loadLesson(topicId) {
  const file = lessonFile(topicId);
  if (!file) return null;
  let st;
  try {
    st = fs.statSync(file);
  } catch {
    cache.delete(topicId);
    return null;
  }
  const hit = cache.get(topicId);
  if (hit && hit.mtime === st.mtimeMs) return hit.lesson;
  const lesson = parseLesson(fs.readFileSync(file, "utf8"));
  cache.set(topicId, { mtime: st.mtimeMs, lesson });
  return lesson;
}

// Vse, kar potrebuje stran lekcije.
export function lessonView(topicId) {
  const t = getTopic(topicId);
  if (!t) return null;
  const lesson = loadLesson(topicId);
  const demo = lesson?.meta.demo && DEMOS[lesson.meta.demo] ? lesson.meta.demo : DEMO_BY_TOPIC[topicId] || null;
  const sim = lesson?.meta.phet || PHET[topicId] || null;
  const order = topicOrder(t.path);
  const i = order.findIndex((x) => x.id === topicId);
  const nav = (x) => (x ? { id: x.id, name: x.name } : null);
  return {
    id: t.id,
    name: t.name,
    goals: t.goals,
    unit: t.unit,
    path: t.path,
    pathLabel: getPath(t.path).label,
    subject: t.subject,
    lesson: lesson
      ? {
          status: lesson.meta.stanje || "osnutek",
          sections: withFormulas(lesson.sections, "html"),
          alternatives: withFormulas(lesson.alternatives, "html"),
          checks: lesson.checks,
        }
      : null,
    // Če lekcije še ni, pokažemo vsaj kratko razlago teme (če obstaja).
    explanation: lesson ? null : getExplanation(topicId)?.text || null,
    demo: demo ? { id: demo, title: DEMOS[demo].title } : null,
    phet: sim ? { sim, url: phetUrl(sim) } : null,
    practice: hasGenerator(topicId),
    prev: nav(order[i - 1]),
    next: nav(order[i + 1]),
  };
}

// Učbeniki: za vsak predmet in vsako raven svoj učbenik (npr. MAT-OS = matematika
// za osnovno šolo, vsi razredi). Nove poti (npr. univerzitetne) se samodejno
// pridružijo; ime predmeta in ravni dopolni v SUBJECT_NAMES / SCHOOL_NAMES.
export const SUBJECT_NAMES = { MAT: "Matematika", FIZ: "Fizika", KEM: "Kemija" };
export const SCHOOL_NAMES = { OS: "osnovna šola", SS: "srednja šola", TEK: "tekmovanja in olimpijade" };
const SCHOOL_ORDER = ["OS", "SS", "TEK"];
const subjectName = (p) => SUBJECT_NAMES[p.subject] || p.label.split(",")[0].trim();
const schoolName = (school) => SCHOOL_NAMES[school] || school;

// Študijski program (fakulteta): en učbenik, deli so predmeti programa po letnikih.
function programBook(programId) {
  const prog = getProgram(programId);
  if (!prog) return null;
  const paths = listProgramPaths(programId).map((p) => ({
    key: p.key,
    label: `${p.elective ? "Izbirni predmet" : `${p.year}. letnik`}: ${p.label}`,
  }));
  const topics = paths.flatMap((p) => topicOrder(p.key));
  return {
    key: `P-${programId}`,
    subject: "PROG",
    school: "UNI",
    subjectName: prog.label || prog.name,
    schoolName: "študijski program",
    paths,
    label: prog.label || prog.name,
    topics: topics.length,
    lessons: topics.filter((t) => loadLesson(t.id)).length,
  };
}

export function listBooks({ program } = {}) {
  const prog = program ? programBook(program) : null;
  return prog ? [prog, ...schoolBooks()] : schoolBooks();
}

function schoolBooks() {
  const books = new Map();
  for (const p of listPaths()) {
    const key = `${p.subject}-${p.school}`;
    if (!books.has(key))
      books.set(key, { key, subject: p.subject, school: p.school, subjectName: subjectName(p), schoolName: schoolName(p.school), paths: [] });
    books.get(key).paths.push({ key: p.key, label: p.label });
  }
  const rank = (s) => (SCHOOL_ORDER.includes(s) ? SCHOOL_ORDER.indexOf(s) : SCHOOL_ORDER.length);
  const subjects = [...new Set(listPaths().map((p) => p.subject))];
  return [...books.values()]
    .sort((a, b) => subjects.indexOf(a.subject) - subjects.indexOf(b.subject) || rank(a.school) - rank(b.school))
    .map((b) => {
      const topics = b.paths.flatMap((p) => topicOrder(p.key));
      return { ...b, label: `${b.subjectName} · ${b.schoolName}`, topics: topics.length, lessons: topics.filter((t) => loadLesson(t.id)).length };
    });
}

export function getBook(bookKey) {
  if (String(bookKey).startsWith("P-")) return programBook(String(bookKey).slice(2));
  return schoolBooks().find((b) => b.key === bookKey) || null;
}

// Kazalo celega učbenika: deli = razredi oziroma letniki.
export function bookView(bookKey) {
  const b = getBook(bookKey);
  if (!b) return null;
  return { ...b, parts: b.paths.map((p) => tocView(p.key)) };
}

// Kazalo poti: sklopi in teme z oznakami, kaj je na voljo.
export function tocView(pathKey) {
  const p = getPath(pathKey);
  if (!p) return null;
  return {
    key: p.key,
    label: p.label,
    subject: p.subject,
    units: p.units.map((u) => ({
      title: u.title,
      topics: u.topics.map((t) => ({
        id: t.id,
        name: t.name,
        lesson: !!loadLesson(t.id),
        demo: !!DEMO_BY_TOPIC[t.id],
        phet: !!PHET[t.id],
        practice: hasGenerator(t.id),
      })),
    })),
  };
}

const fold = (s) =>
  String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

// Iskanje po naslovih, ciljih in besedilu lekcij. Brez stroškov, brez indeksa:
// tem je nekaj sto, zato preprosto preletimo vse.
export function searchTextbook(q, { subject, limit = 30 } = {}) {
  const words = fold(q).split(/[^a-z0-9]+/).filter((w) => w.length >= 2);
  if (!words.length) return [];
  const hits = [];
  for (const p of listPaths(subject)) {
    for (const t of topicOrder(p.key)) {
      const lesson = loadLesson(t.id);
      const title = fold(t.name);
      const meta = fold(`${t.goals} ${t.unit} ${DEMO_BY_TOPIC[t.id] ? DEMOS[DEMO_BY_TOPIC[t.id]].title : ""}`);
      const text = lesson ? fold([...lesson.sections, ...lesson.alternatives].map((s) => `${s.title} ${s.md}`).join(" ")) : "";
      let score = 0;
      for (const w of words) {
        const s = (title.includes(w) ? 10 : 0) + (meta.includes(w) ? 4 : 0) + (text.includes(w) ? 1 : 0);
        if (!s) {
          score = 0;
          break;
        }
        score += s;
      }
      if (!score) continue;
      if (lesson) score += 1;
      hits.push({ id: t.id, name: t.name, unit: t.unit, path: p.key, pathLabel: p.label, subject: p.subject, lesson: !!lesson, snippet: snippet(lesson, words), score });
    }
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, limit).map(({ score, ...h }) => h);
}

function snippet(lesson, words) {
  if (!lesson) return "";
  const plain = lesson.sections
    .map((s) => s.md)
    .join(" ")
    .replace(/\$([^$]*)\$/g, (_, t) => t.replace(/\\(mathrm|text|,)/g, "").replace(/[{}\\]/g, ""))
    .replace(/[#*_>`|]/g, "")
    .replace(/\s+/g, " ");
  const f = fold(plain);
  const at = Math.min(...words.map((w) => f.indexOf(w)).filter((i) => i >= 0));
  if (!Number.isFinite(at)) return "";
  const start = Math.max(0, at - 50);
  return (start ? "…" : "") + plain.slice(start, start + 140).trim() + "…";
}

// Razlaga teme iz lekcije, kadar vnaprej pripravljene razlage (explanations.json) ni:
// »Zakaj se tega učimo« in »Povzetek« ter napotek na celotno lekcijo.
export function lessonExplanation(topicId) {
  const lesson = loadLesson(topicId);
  if (!lesson) return null;
  const pick = (re) => expandFormulaBlocks(lesson.sections.find((s) => re.test(s.title))?.md ?? "", "html").trim();
  const why = pick(/^zakaj/i);
  const sum = pick(/^povzetek/i);
  if (!why && !sum) return null;
  return [why, sum ? `### Bistvo\n${sum}` : "", "*Celotna lekcija z rešenimi primeri in vprašanji je pod gumbom »Lekcija«.*"]
    .filter(Boolean)
    .join("\n\n");
}

// Kratek povzetek lekcije za sistemski prompt tutorja (če lekcija obstaja),
// da tutor razlaga skladno z učbenikom.
export function lessonSummaryForPrompt(topicId) {
  const lesson = loadLesson(topicId);
  if (!lesson) return "";
  const sum = lesson.sections.find((s) => /^povzetek/i.test(s.title));
  if (!sum) return "";
  return `Učenec ima v učbeniku lekcijo o tej temi. Njen povzetek (razlagaj skladno z njim, a z drugimi besedami in primeri):\n${expandFormulaBlocks(sum.md, "plain").slice(0, 1200)}`;
}
