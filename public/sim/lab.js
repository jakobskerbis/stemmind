// Gradniki virtualnega laboratorija: zaslon merilnika, tabela meritev, graf, vprašanje o sklepu, dnevnik dogodkov.
// Modeli so v lab-model.js; tu je samo prikaz. Besedila so slovenska kot v ostalih simulacijah učbenika.
import { h, s, fmt, svgBox, axes, tex } from "./kit.js";

// Ura, ki teče v realnem času in se ustavi, ko simulacije ni več na strani.
// Ne uporablja requestAnimationFrame, ker meritve tečejo tudi pri »manj gibanja« (ni animacije, le odčitki).
export function ticker(el, fn, ms = 100) {
  let last = performance.now();
  const id = setInterval(() => {
    if (el.dataset.mounted && !el.isConnected) return clearInterval(id);
    if (el.isConnected) el.dataset.mounted = "1";
    const now = performance.now();
    fn(Math.min(0.25, (now - last) / 1000));
    last = now;
  }, ms);
  return () => clearInterval(id);
}

// Zaslon digitalnega merilnika (LCD). set(text, unit, note).
export function lcd(name, { cls = "" } = {}) {
  const val = h("span", { class: "lab-lcd-val" }, "–");
  const unit = h("span", { class: "lab-lcd-unit" });
  const note = h("span", { class: "lab-lcd-note" });
  const el = h("div", { class: `lab-lcd ${cls}`, role: "status", "aria-label": name }, h("span", { class: "lab-lcd-name" }, name), h("span", { class: "lab-lcd-screen" }, val, unit), note);
  el.set = (text, u = "", n = "") => {
    const t = String(text).replace(".", ",").replace("-", "−");
    if (val.textContent !== t) val.textContent = t;
    if (unit.textContent !== u) unit.textContent = u;
    if (note.textContent !== n) note.textContent = n;
    el.classList.toggle("off", text === "" || text == null);
  };
  return el;
}

// Tabela meritev. cols: [{ key, label }]. add(row) doda vrstico (vrednosti so že nizi za prikaz).
export function dataTable(cols, { empty = "Še ni meritev. Odčitaj merilnik in pritisni »Zapiši meritev«." } = {}) {
  const tbody = h("tbody");
  const table = h("table", { class: "demo-table lab-table" }, h("thead", {}, h("tr", {}, h("th", { scope: "col" }, "#"), ...cols.map((c) => h("th", { scope: "col", html: c.label })))), tbody);
  const none = h("p", { class: "muted lab-empty" }, empty);
  const el = h("div", { class: "lab-table-wrap" }, table, none);
  const rows = [];
  const draw = () => {
    tbody.replaceChildren(...rows.map((r, i) => h("tr", {}, h("td", {}, String(i + 1)), ...cols.map((c) => h("td", {}, r[c.key] ?? "")))));
    none.hidden = rows.length > 0;
    table.hidden = rows.length === 0;
  };
  el.add = (r) => (rows.push(r), draw(), el.querySelector("tbody tr:last-child")?.scrollIntoView?.({ block: "nearest" }));
  el.clear = () => ((rows.length = 0), draw());
  el.rows = rows;
  draw();
  return el;
}

// Graf meritev s stalnimi osmi. draw(series): [{ pts: [[x, y]], shape: "o" | "^", cls: "a", label, line?: f(x) }]
export function dataGraph({ W = 340, H = 220, x, y, xLabel, yLabel, xStep, yStep, title }) {
  const svg = svgBox(W, H, "lab-graph");
  svg.setAttribute("aria-label", title || "Graf meritev");
  const wrap = h("figure", { class: "lab-graph-wrap" }, svg);
  const legend = h("figcaption", { class: "lab-legend" });
  wrap.append(legend);
  let A = null;
  wrap.setAxes = (ax) => Object.assign(opts, ax);
  const opts = { x, y };
  wrap.draw = (series = []) => {
    svg.replaceChildren();
    A = axes(svg, { W, H, x: opts.x, y: opts.y, pad: 38, padT: 14, padR: 14, xLabel, yLabel, xStep: opts.xStep ?? xStep, yStep: opts.yStep ?? yStep });
    const inside = ([px, py]) => px >= A.x0 && px <= A.x1 && py >= A.y0 && py <= A.y1;
    legend.replaceChildren();
    for (const S of series) {
      if (S.line) {
        const n = 40, pts = [];
        for (let i = 0; i <= n; i++) {
          const xx = A.x0 + ((A.x1 - A.x0) * i) / n, yy = S.line(xx);
          if (yy >= A.y0 && yy <= A.y1) pts.push(`${A.X(xx).toFixed(1)},${A.Y(yy).toFixed(1)}`);
        }
        if (pts.length > 1) s("polyline", { points: pts.join(" "), class: `lab-fit stroke-${S.cls}` }, svg);
      }
      for (const p of S.pts) {
        if (!inside(p)) continue;
        const cx = A.X(p[0]), cy = A.Y(p[1]);
        if (S.shape === "^") s("path", { d: `M${cx},${cy - 6} L${cx + 5.5},${cy + 4} L${cx - 5.5},${cy + 4} Z`, class: `lab-pt fill-${S.cls}` }, svg);
        else s("circle", { cx, cy, r: 4.5, class: `lab-pt fill-${S.cls}` }, svg);
      }
      const clipped = S.pts.filter((p) => !inside(p)).length;
      if (S.label) legend.append(h("span", { class: "lab-leg" }, h("i", { class: `lab-sym ${S.shape === "^" ? "tri" : "dot"} bg-${S.cls}`, "aria-hidden": "true" }), S.label + (clipped ? ` (${clipped} izven grafa)` : "")));
    }
  };
  wrap.draw();
  return wrap;
}

// Vprašanje o sklepu: ena pravilna možnost, pri vsaki razlaga.
// q = { text, options: [{ t, ok, why }] }
export function conclusion(q) {
  const why = h("p", { class: "lab-why", "aria-live": "polite", hidden: true });
  const opts = q.options.map((o, i) =>
    h("button", { type: "button", class: "lab-opt", "data-i": i, onclick: (ev) => pick(ev.currentTarget, o) }, h("span", { html: o.t })),
  );
  const pick = (b, o) => {
    b.classList.add(o.ok ? "ok" : "bad");
    b.setAttribute("aria-pressed", "true");
    why.hidden = false;
    why.className = `lab-why ${o.ok ? "ok" : "bad"}`;
    why.innerHTML = `<b>${o.ok ? "Pravilno." : "Ne čisto."}</b> ${o.why}`;
  };
  return h("section", { class: "lab-q" }, h("h4", {}, "Sklep"), h("p", { class: "lab-q-text", html: q.text }), h("div", { class: "lab-opts" }, ...opts), why);
}

// Dnevnik dogodkov (kaj se je zgodilo v laboratoriju), najnovejši zgoraj.
export function eventLog() {
  const ul = h("ul", { class: "lab-log", "aria-live": "polite" });
  ul.push = (text, kind = "info") => {
    ul.prepend(h("li", { class: `lab-ev ${kind}`, html: text }));
    while (ul.children.length > 5) ul.lastChild.remove();
  };
  return ul;
}

// Zložljiv seznam poenostavitev in virov.
export function notes(items, sources) {
  return h(
    "details",
    { class: "lab-notes" },
    h("summary", {}, "Kaj je poenostavljeno in od kod so podatki?"),
    h("ul", {}, ...items.map((t) => h("li", {}, t))),
    sources ? h("p", { class: "muted", html: sources }) : null,
  );
}

export const num = (x, d) => fmt(x, d);
// Število z vedno enakim številom decimalk (kot ga pokaže merilnik): 6,00 in ne 6.
export const fixed = (x, d) => {
  const t = (Math.abs(x) < 0.5 * 10 ** -d ? 0 : x).toFixed(d);
  return t.replace(".", ",").replace("-", "−");
};
export { tex };
