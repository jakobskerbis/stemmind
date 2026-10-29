// Klikljive formule: kartica ob kliku na simbol ali enoto (slovar in označevanje sta v formula-data.js).
import { t, currentLang } from "./i18n.js";
import { lookupSymbol, lookupUnit, SYMBOLS, GREEK, SUBJECT_TABLES } from "./formula-data.js";

export { annotateTex, setFormulaSubject, withFormulaSubject } from "./formula-data.js";

// ---------- kartica ----------
const en = () => currentLang() !== "sl";
const nameOf = (e) => (en() ? e.en : e.n);
const noteOf = (e) => (en() ? e.noteEn : e.note) || "";
const descOf = (u) => (en() ? u.de : u.d) || "";
const symTex = (key) => {
  const [b, s] = key.split("_");
  const base = Object.entries(GREEK).find(([, v]) => v === b)?.[0];
  const bt = base ? `\\${base}` : b;
  return s ? `${bt}_{${s.length > 1 && /[a-z]/.test(s) ? `\\mathrm{${s}}` : s}}` : bt;
};
const unitTex = (key) => `\\mathrm{${key.replace(/Ω/g, "\\Omega ").replace(/μ/g, "\\mu ").replace(/%/g, "\\%").replace(/ /g, "\\,")}}`;

function cardFor(code) {
  const [kind, ...rest] = code.split(":");
  const k = window.katex;
  const tex = (s) => (k ? k.renderToString(s, { throwOnError: false, strict: "ignore" }) : s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  if (kind === "u") {
    const u = lookupUnit(rest.join(":"));
    if (!u) return null;
    return {
      label: `${u.key} — ${nameOf(u)}`,
      html: `<div class="fx-title">${tex(unitTex(u.key))}<b>${esc(nameOf(u))}</b></div>
        ${u.c ? `<div class="fx-line"><span class="fx-k">${t("fx.makeup")}</span>${tex(u.c)}</div>` : ""}
        ${descOf(u) ? `<div class="fx-note">${esc(descOf(u))}</div>` : ""}`,
    };
  }
  const [subject, key] = rest;
  const e = lookupSymbol(key, subject, "") || lookupSymbolAny(key, subject);
  if (!e) return null;
  const delta = kind === "d";
  const name = delta ? t("fx.change", { what: nameOf(e) }) : nameOf(e);
  const u = e.u ? lookupUnit(e.u) : null;
  const symbol = (delta ? "\\Delta " : "") + symTex(key);
  return {
    label: `${delta ? "Δ" : ""}${key.replace("_", " ")} — ${name}`,
    html: `<div class="fx-title">${tex(symbol)}<b>${esc(name)}</b></div>
      ${e.r && !delta ? `<div class="fx-line"><span class="fx-k">${t("fx.formula")}</span>${tex(e.r)}</div>` : ""}
      ${u ? `<div class="fx-line"><span class="fx-k">${t("fx.unit")}</span>${tex(unitTex(u.key))}${nameOf(u) !== u.key ? `<span class="fx-un">(${esc(nameOf(u))})</span>` : ""}</div>
        ${u.c ? `<div class="fx-line fx-sub">${tex(u.c)}${descOf(u) ? ` <span>${esc(descOf(u))}</span>` : ""}</div>` : descOf(u) ? `<div class="fx-line fx-sub"><span>${esc(descOf(u))}</span></div>` : ""}` : !noteOf(e) ? `<div class="fx-line fx-sub"><span>${t("fx.noUnit")}</span></div>` : ""}
      ${noteOf(e) ? `<div class="fx-note">${esc(noteOf(e))}</div>` : ""}`,
  };
}
// Kartica brez celotne formule: vzemi prvo različico (tudi s ctx).
function lookupSymbolAny(key, subject) {
  for (const tb of SUBJECT_TABLES[subject] || ["MAT"]) {
    const v = SYMBOLS[tb][key];
    if (v) return Array.isArray(v) ? v[v.length - 1] : v;
  }
  return null;
}

// Kartice ne pokažemo pri testih (Preizkus znanja, tekmovanje), ker bi zveza izdala rešitev.
const blocked = (el) => !!el.closest(".no-fx, button, .choice, label, input, textarea, .sym-key, [contenteditable]");
const decode = (s) => decodeURIComponent(s.replace(/\./g, "%"));

let pop = null;
let openEl = null;
function close() {
  if (!pop) return;
  pop.hidden = true;
  openEl?.setAttribute("aria-expanded", "false");
  openEl?.classList.remove("fx-open");
  openEl = null;
}
function open(el) {
  const card = cardFor(decode(el.dataset.fx));
  if (!card) return;
  if (!pop) {
    pop = document.createElement("div");
    pop.id = "fx-pop";
    pop.className = "fx-pop";
    pop.setAttribute("role", "dialog");
    pop.hidden = true;
    document.body.appendChild(pop);
  }
  pop.setAttribute("aria-label", card.label);
  pop.innerHTML = `${card.html}<button type="button" class="fx-close" aria-label="${t("fx.close")}">×</button>`;
  pop.hidden = false;
  openEl = el;
  el.setAttribute("aria-expanded", "true");
  el.classList.add("fx-open");
  const r = el.getBoundingClientRect();
  const w = Math.min(340, window.innerWidth - 24);
  pop.style.width = `${w}px`;
  const left = Math.max(12, Math.min(r.left + r.width / 2 - w / 2, window.innerWidth - w - 12));
  const below = r.bottom + 8 + pop.offsetHeight < window.innerHeight || r.top < pop.offsetHeight + 16;
  pop.style.left = `${left + window.scrollX}px`;
  pop.style.top = `${(below ? r.bottom + 8 : r.top - pop.offsetHeight - 8) + window.scrollY}px`;
}

// Simboli postanejo gumbi za tipkovnico in bralnike zaslona.
function enhance(root) {
  const els = root.querySelectorAll ? root.querySelectorAll("[data-fx]:not([tabindex])") : [];
  for (const el of els) {
    if (blocked(el)) { el.setAttribute("tabindex", "-1"); el.classList.add("fx-off"); continue; }
    const card = cardFor(decode(el.dataset.fx));
    if (!card) { el.setAttribute("tabindex", "-1"); el.classList.add("fx-off"); continue; }
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.setAttribute("aria-expanded", "false");
    el.setAttribute("aria-label", card.label);
    const html = el.closest(".katex-html");
    if (html && html.getAttribute("aria-hidden") === "true") {
      html.removeAttribute("aria-hidden");
      html.parentElement?.querySelector(".katex-mathml")?.setAttribute("aria-hidden", "true");
    }
  }
}

export function initFormulaInfo() {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".fx-close")) return close();
    if (pop && pop.contains(e.target)) return;
    const el = e.target.closest("[data-fx]");
    if (!el || blocked(el) || el.classList.contains("fx-off")) return close();
    e.preventDefault();
    if (openEl === el) return close();
    close();
    open(el);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && openEl) { const el = openEl; close(); el.focus(); return; }
    const el = e.target.closest?.("[data-fx][role=button]");
    if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); el.click(); }
  });
  window.addEventListener("resize", close);
  document.addEventListener("scroll", (e) => { if (openEl && !pop.contains(e.target)) close(); }, true);
  enhance(document);
  new MutationObserver((list) => {
    for (const m of list) for (const node of m.addedNodes) if (node.nodeType === 1) {
      if (node.matches?.("[data-fx]")) enhance(node.parentElement || document);
      else if (node.querySelector?.("[data-fx]")) enhance(node);
    }
  }).observe(document.body, { childList: true, subtree: true });
}

