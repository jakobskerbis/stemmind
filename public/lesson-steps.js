// Lekcija po korakih: razdeli razdelke lekcije na kratke kartice in med njih vstavi
// vprašanja iz »Preveri se«, da branje ni eno dolgo drsenje (j, 29. 10. 2026).
// Čista funkcija nad Markdownom (brez DOM), zato jo preverja tudi test/lesson-steps.test.js.

const LONG = 1400; // znakov: daljši kos razlage razdelimo na meji odstavka
const MIN = 350; // krajšega kosa ne odrežemo (razen pred naslovom ali za »Premisli«)

const opens = (s) => (s.match(/<(div|details)\b/g) || []).length;
const closes = (s) => (s.match(/<\/(div|details)>/g) || []).length;
const dollars = (s) => (s.match(/\$\$/g) || []).length;

// Odstavki, ločeni s prazno vrstico; HTML bloki (Premisli, formula) in $$…$$ ostanejo celi.
export function mdBlocks(md) {
  const out = [];
  let cur = "";
  let depth = 0;
  let math = 0;
  for (const part of String(md ?? "").split(/\n[ \t]*\n/)) {
    cur = cur ? `${cur}\n\n${part}` : part;
    depth += opens(part) - closes(part);
    math += dollars(part);
    if (depth <= 0 && math % 2 === 0) {
      if (cur.trim()) out.push(cur);
      cur = "";
      depth = 0;
    }
  }
  if (cur.trim()) out.push(cur);
  return out;
}

const kindOf = (title) =>
  /zakaj/i.test(title) ? "why"
  : /razlag/i.test(title) ? "explain"
  : /rešen/i.test(title) ? "examples"
  : /napak/i.test(title) ? "mistakes"
  : /povzetek/i.test(title) ? "summary"
  : "other";

// Kosi enega razdelka. Primeri ostanejo celi (en primer = en korak), razlaga se deli
// pri naslovih ###, za vsakim »Premisli« in pri predolgih kosih.
export function splitSection(md, kind) {
  if (kind === "why" || kind === "mistakes" || kind === "summary") return [String(md ?? "")].filter((x) => x.trim());
  const chunks = [];
  let cur = [];
  const len = () => cur.join("\n\n").length;
  const flush = () => {
    if (cur.length) chunks.push(cur.join("\n\n"));
    cur = [];
  };
  for (const b of mdBlocks(md)) {
    const heading = /^###\s/.test(b.trimStart());
    if (heading && cur.length) flush();
    else if (kind !== "examples" && cur.length && len() >= MIN && len() + b.length > LONG && !/^\s*[|>-]/.test(b)) flush();
    cur.push(b);
    if (b.includes('class="tb-think"') && kind !== "examples") flush();
  }
  flush();
  return chunks;
}

// Koraki lekcije: [{ type: "text", section, title, md, last }, { type: "check", checks: [i], final }].
// Prvo vprašanje gre za razlago, drugo za pogoste napake (ali primere), ostala na konec.
export function lessonSteps(sections, nChecks = 0) {
  const steps = [];
  const kinds = sections.map((s) => kindOf(s.title || ""));
  const placeAt = [];
  if (nChecks >= 3) {
    const ex = kinds.indexOf("explain");
    const mi = kinds.indexOf("mistakes") >= 0 ? kinds.indexOf("mistakes") : kinds.indexOf("examples");
    if (ex >= 0) placeAt.push(ex);
    if (mi >= 0 && mi !== ex) placeAt.push(mi);
  }
  let next = 0;
  sections.forEach((s, i) => {
    const parts = splitSection(s.md, kinds[i]);
    if (!parts.length) parts.push("");
    parts.forEach((md, k) => steps.push({ type: "text", section: i, title: s.title || "", md, last: k === parts.length - 1 }));
    if (placeAt.includes(i) && next < nChecks) steps.push({ type: "check", checks: [next++], final: false });
  });
  if (next < nChecks) steps.push({ type: "check", checks: Array.from({ length: nChecks - next }, (_, k) => next + k), final: true });
  return steps;
}
