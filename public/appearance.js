// Nastavitve → Videz: svetli/temni način, poudarki, barve oken, menijev in pisave, naključne barve.
// Vse se zgodi takoj in velja za to napravo (theme.js).
import { icon } from "./icons.js";
import { t } from "./i18n.js";

const T = window.STEMTheme;
const ACCENTS = [
  ["#2563eb", t("ap.blue")], ["#4f46e5", t("ap.indigo")], ["#7c3aed", t("ap.violet")], ["#db2777", t("ap.pink")],
  ["#dc2626", t("ap.red")], ["#ea580c", t("ap.orange")], ["#16a34a", t("ap.green")], ["#0d9488", t("ap.teal")],
];
const PARTS = [
  ["bg", t("ap.bg")],
  ["surface", t("ap.surface")],
  ["menu", t("ap.menu")],
  ["text", t("ap.text")],
];
const MODES = [["light", "sun", t("ap.light")], ["dark", "moon", t("ap.dark")], ["system", "sun-moon", t("ap.system")]];

export function mountAppearance(box) {
  if (!box || !T) return;
  const render = () => {
    const s = T.load();
    const key = T.isDarkMode(s) ? "dark" : "light";
    const c = T.compute(s);
    const base = T.BASE[key];
    const pal = s[key] || {};
    const current = (k) => (c ? (k === "menu" ? c.menu : c.vars[`--${k}`] || c[k]) : base[k]);
    const accentNow = (s.accent || ACCENTS[0][0]).toLowerCase(); // brez izbire = privzeta modra
    const textFixed = pal.text && c && c.vars["--text"].toLowerCase() !== pal.text.toLowerCase();
    box.innerHTML = `
      <h2 class="h-icon">${icon("palette")}${t("ap.title")}</h2>
      <p class="muted">${t("ap.note")}</p>

      <div class="ap-row">
        <span class="field-label">${t("ap.mode")}</span>
        <div class="seg" role="radiogroup" aria-label="${t("ap.mode")}">${MODES.map(([v, ic, label]) =>
          `<button type="button" role="radio" data-mode="${v}" class="${s.mode === v ? "active" : ""}" aria-checked="${s.mode === v}">${icon(ic)}${label}</button>`).join("")}</div>
      </div>

      <div class="ap-row">
        <span class="field-label">${t("ap.accent")}</span>
        <div class="swatches" role="radiogroup" aria-label="${t("ap.accent")}">
          ${ACCENTS.map(([hex, name]) => `<button type="button" class="swatch${accentNow === hex ? " on" : ""}" role="radio" aria-checked="${accentNow === hex}" data-accent="${hex}" style="--sw:${hex}" title="${name}" aria-label="${name}"></button>`).join("")}
          <label class="swatch custom${ACCENTS.some(([h]) => h === accentNow) ? "" : " on"}" title="${t("ap.customColor")}" style="--sw:${current("accent")}">
            <input type="color" data-accent-pick value="${current("accent")}" aria-label="${t("ap.customAccent")}">${icon("plus")}
          </label>
        </div>
        <div class="actions"><button type="button" class="secondary" data-random="accent">${icon("dices")}${t("ap.randomAccent")}</button></div>
      </div>

      <div class="ap-row">
        <span class="field-label">${t(key === "dark" ? "ap.colorsDark" : "ap.colorsLight")}</span>
        <div class="color-rows">${PARTS.map(([k, label]) => `
          <label class="color-row">
            <span class="color-dot" style="--sw:${current(k)}"><input type="color" data-part="${k}" value="${current(k)}"></span>
            <span class="color-name">${label}</span>
            ${pal[k] ? `<button type="button" class="ghost small" data-reset-part="${k}" aria-label="${t("ap.resetPart", { part: label })}">${icon("rotate-ccw")}</button>` : ""}
          </label>`).join("")}
        </div>
        ${textFixed ? `<p class="small-note muted">${t(T.contrast(pal.text, "#000") > T.contrast(pal.text, "#fff") ? "ap.textDarker" : "ap.textLighter")}</p>` : ""}
        <div class="actions">
          <button type="button" class="primary" data-random="all">${icon("dices")}${t("ap.random")}</button>
          <button type="button" class="secondary" data-reset>${icon("rotate-ccw")}${t("ap.reset")}</button>
        </div>
      </div>`;
  };

  const update = (fn) => {
    const s = T.load();
    fn(s);
    T.save(s);
    render();
  };
  const key = (s) => (T.isDarkMode(s) ? "dark" : "light");

  box.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.mode) update((s) => (s.mode = b.dataset.mode));
    else if (b.dataset.accent) update((s) => (s.accent = b.dataset.accent === "#2563eb" ? null : b.dataset.accent));
    else if (b.dataset.random === "accent") update((s) => (s.accent = T.randomAccent(s)));
    else if (b.dataset.random === "all") update((s) => {
      const r = T.randomPalette(s);
      if (r.pal) { s[key(s)] = r.pal; s.accent = r.accent; }
    });
    else if (b.dataset.resetPart) update((s) => {
      const p = { ...(s[key(s)] || {}) };
      delete p[b.dataset.resetPart];
      s[key(s)] = Object.keys(p).length ? p : null;
    });
    else if ("reset" in b.dataset) update((s) => { s.accent = null; s.light = null; s.dark = null; });
  });
  // Barvni izbirnik: med vlečenjem le predogled, ob potrditvi shranimo.
  box.addEventListener("input", (e) => {
    const el = e.target;
    if (el.dataset.part || "accentPick" in el.dataset) {
      el.closest(".color-dot, .swatch")?.style.setProperty("--sw", el.value);
      const s = T.load();
      if (el.dataset.part) s[key(s)] = { ...(s[key(s)] || {}), [el.dataset.part]: el.value };
      else s.accent = el.value;
      T.apply(s);
    }
  });
  box.addEventListener("change", (e) => {
    const el = e.target;
    if (el.dataset.part) update((s) => (s[key(s)] = { ...(s[key(s)] || {}), [el.dataset.part]: el.value }));
    else if ("accentPick" in el.dataset) update((s) => (s.accent = el.value));
  });
  // Če se način naprave spremeni (Kot naprava), prikaži barve za novi način.
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", render);
  render();
}

mountAppearance(document.getElementById("appearance"));
