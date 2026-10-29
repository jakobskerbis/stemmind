// Izris besedila z Markdownom in formulami (inštruktor, razlage, naloge, lekcije, kartice).
// Knjižnice (marked, KaTeX, DOMPurify) so v brskalniku globalne; testi jih podajo sami.

const lib = (name) => globalThis[name];

// annotate(tex): klikljive formule (formula-info.js) ovijejo znane simbole in enote v \htmlData{fx=…};
// renderMath(tex, display, false) jih izpusti (npr. v gumbih z možnostmi odgovora).
export function createRenderer({ marked = lib("marked"), katex = lib("katex"), sanitize, annotate = null } = {}) {
  const clean = sanitize || ((html) => lib("DOMPurify").sanitize(html));
  const plain = { throwOnError: false, strict: "ignore" };
  const trusted = { ...plain, trust: (c) => c.command === "\\htmlData" };

  function renderMath(tex, display, fx = true) {
    try {
      if (annotate && fx) return katex.renderToString(annotate(tex), { ...trusted, displayMode: display });
      return katex.renderToString(tex, { ...plain, displayMode: display });
    } catch {
      try {
        return katex.renderToString(tex, { ...plain, displayMode: display });
      } catch {
        return tex;
      }
    }
  }

  function renderRich(text) {
    const math = [];
    const stash = (tex, display) => `@@MATH${math.push({ tex, display }) - 1}@@`;
    // Formule najprej skrijemo, da Markdown ne pokvari \frac, _ ali | v njih (| bi razdelil celico tabele).
    const src = String(text ?? "")
      .replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => stash(t, true))
      .replace(/\\\[([\s\S]+?)\\\]/g, (_, t) => stash(t, true))
      .replace(/\\\((.+?)\\\)/g, (_, t) => stash(t, false))
      .replace(/(^|[^\\$])\$([^$\n]+?)\$/g, (_, pre, t) => pre + stash(t, false));
    let html = clean(marked.parse(fixTables(src), { breaks: true, gfm: true }));
    // Tabela dobi svoj razred (oblika v style.css velja povsod, ne glede na okvir okoli nje);
    // ulomki in potence v njej so v polni velikosti (\displaystyle), sicer so premajhni za branje.
    html = html.replace(/<table>([\s\S]*?)<\/table>/g, (_, body) => {
      const inner = centerNumberColumns(body).replace(/@@MATH(\d+)@@/g, (m, i) =>
        math[i] ? renderMath(math[i].display ? math[i].tex : `\\displaystyle ${math[i].tex}`, math[i].display) : m,
      );
      return `<div class="md-table-wrap"><table class="md-table">${inner}</table></div>`;
    });
    return html.replace(/@@MATH(\d+)@@/g, (m, i) => (math[i] ? renderMath(math[i].tex, math[i].display) : m));
  }

  return { renderMath, renderRich };
}

// ---------- tabele ----------

const CELL_RE = /<(td|th)((?:\s[^>]*)?)>([\s\S]*?)<\/\1>/g;
// Celica pred izrisom formul: formule so še oznake @@MATHn@@.
const plainCell = (html) => html.replace(/@@MATH\d+@@/g, "").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
// Stolpec samo s števili ali formulami je sredinsko poravnan (lažje primerjanje vrstic),
// besedilni stolpci ostanejo levo. Poravnava, ki jo zapiše avtor (|:-:|), ima prednost.
// Stolpec z daljšim besedilom (razred »wrap«) se sme prelomiti, da tabela ni preširoka;
// formule se nikoli ne prelomijo.
export function centerNumberColumns(html) {
  const rows = [...html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => [...m[1].matchAll(CELL_RE)]);
  const body = rows.filter((r) => r.length && r[0][1] === "td");
  if (!body.length) return html;
  const width = Math.max(...rows.map((r) => r.length));
  const center = [];
  for (let c = 0; c < width; c++) {
    const vals = body.map((r) => r[c]).filter(Boolean);
    center[c] = vals.some((v) => v[3].trim()) && vals.every((v) => {
      if (/\salign=/.test(v[2])) return false;
      const raw = v[3].trim();
      if (!raw) return true;
      const onlyMath = /@@MATH\d+@@/.test(raw) && !plainCell(raw);
      return onlyMath || /^[−\-+]?[\d\s.,]+(\s?%|°)?$/.test(plainCell(raw));
    });
  }
  const wrap = [];
  for (let c = 0; c < width; c++) wrap[c] = !center[c] && rows.some((r) => r[c] && plainCell(r[c][3]).length > 28);
  if (!center.some(Boolean) && !wrap.some(Boolean)) return html;
  return html.replace(/<tr>([\s\S]*?)<\/tr>/g, (_, row) => {
    let c = -1;
    return `<tr>${row.replace(CELL_RE, (m, tag, attrs, inner) => {
      c += 1;
      let a = attrs;
      if (center[c] && !/\salign=/.test(a)) a += ' align="center"';
      if (wrap[c]) a += ' class="wrap"';
      return a === attrs ? m : `<${tag}${a}>${inner}</${tag}>`;
    })}</tr>`;
  });
}

const SEP_CELL = /^\s*:?-{1,}:?\s*$/;

function cells(line) {
  let s = line.trim();
  if (s.startsWith("|")) s = s.slice(1);
  if (s.endsWith("|") && !s.endsWith("\\|")) s = s.slice(0, -1);
  return s.split(/(?<!\\)\|/);
}

/** Vrstica, ki je ločilo glave tabele (npr. »|---|:-:|«). */
export function isTableSeparator(line) {
  if (!/\|/.test(line)) return false; // »---« brez črte je vodoravna črta ali podčrtan naslov
  const c = cells(line);
  return c.length > 0 && c.every((x) => SEP_CELL.test(x));
}

/** Vrstica, ki je (verjetno) del tabele: ima navpično črto zunaj formul. */
export function isTableRow(line) {
  return /\|/.test(String(line).replace(/@@MATH\d+@@/g, "").replace(/\$[^$\n]*\$/g, ""));
}

// Model včasih zapiše tabelo malo po svoje; Markdown jo potem pokaže kot navadno besedilo.
// Popravimo: prazno vrstico pred tabelo (sicer jo seznam ali citat »pogoltne«), zamik vrstic,
// ločilo z drugačnim številom stolpcev kot glava in vrstice z manjkajočo zadnjo črto.
export function fixTables(src) {
  const lines = String(src).split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const head = lines[i];
    const sep = lines[i + 1];
    if (sep === undefined || !isTableRow(head) || !isTableSeparator(sep) || isTableSeparator(head)) {
      out.push(lines[i]);
      continue;
    }
    const n = cells(head).length;
    const quote = /^\s*>\s?/.exec(head)?.[0] || "";
    const strip = (l) => (quote && l.startsWith(quote.trimEnd()) ? l.replace(/^\s*>\s?/, "") : l).trim();
    const row = (l) => {
      const c = cells(strip(l)).map((x) => x.trim());
      while (c.length < n) c.push("");
      return `${quote}| ${c.join(" | ")} |`;
    };
    const aligns = cells(strip(sep)).map((x) => x.trim());
    while (aligns.length < n) aligns.push("---");
    if (out.length && out[out.length - 1].trim() !== (quote ? ">" : "") && out[out.length - 1].trim() !== "") out.push(quote ? ">" : "");
    out.push(row(head), `${quote}| ${aligns.slice(0, n).map((a) => (/-/.test(a) ? a : "---")).join(" | ")} |`);
    i += 1;
    while (i + 1 < lines.length && lines[i + 1].trim() !== "" && isTableRow(strip(lines[i + 1]))) {
      out.push(row(lines[i + 1]));
      i += 1;
    }
    if (i + 1 < lines.length && lines[i + 1].trim() !== "") out.push(quote ? ">" : "");
  }
  return out.join("\n");
}

// ---------- med postopnim izpisom ----------

/**
 * Med pretakanjem odgovora skrije, kar bi se izrisalo narobe in nato poskočilo:
 * nedokončano vrstico tabele, glavo tabele brez ločila in nezaprto formulo.
 * Odprte ** in * zapre, da se ne vidijo surove zvezdice.
 */
export function streamSafe(text) {
  let t = String(text ?? "");
  // Nezaprta formula ($ ali $$): pokažemo jo šele, ko je cela.
  const dbl = t.split("$$").length - 1;
  if (dbl % 2) t = t.slice(0, t.lastIndexOf("$$"));
  const singles = [...t.replace(/\$\$[\s\S]*?\$\$/g, (m) => " ".repeat(m.length)).matchAll(/(?<!\\)\$/g)];
  if (singles.length % 2) t = t.slice(0, singles[singles.length - 1].index);

  // Tabela: nedokončana zadnja vrstica in glava, pod katero še ni ločila.
  const lines = t.split("\n");
  const last = lines[lines.length - 1];
  if (last.trim() && isTableRow(last.replace(/^\s*>\s?/, ""))) lines.pop();
  else if (last.trim() && /^\s*(>\s*)?:?-+:?$/.test(last) && lines.length > 1 && isTableRow(lines[lines.length - 2])) lines.pop();
  // Konec je zdaj prazen ali cela vrstica; glava brez ločila še ni tabela.
  let k = lines.length - 1;
  while (k >= 0 && lines[k].trim() === "") k--;
  if (k >= 0 && isTableRow(lines[k]) && !isTableSeparator(lines[k]) && (k === 0 || !isTableRow(lines[k - 1]))) {
    lines.length = k;
  }
  t = lines.join("\n");

  const plain = t.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]*\$/g, "");
  const bold = (plain.match(/\*\*/g) || []).length;
  if (bold % 2) t += "**";
  const single = (plain.replace(/\*\*/g, "").match(/\*/g) || []).length;
  if (single % 2) t += "*";
  return t;
}
