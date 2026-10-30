// Klik na klobuk (logotip zgoraj levo): mreža vseh delov aplikacije (j, 2026-10-29).
// Prej je logotip le odprl Učno pot (isto kot prvi zavihek); zdaj je to hitra pot do vsega,
// tudi do delov, ki so na manjših zaslonih skriti pod »Jaz« ali stisnjeni v ikone.
import { icon } from "./icons.js";
import { t } from "./i18n.js";

const $ = (sel) => document.querySelector(sel);
let D = null; // { getState, showView, currentView }

// [pogled, ikona, ključ napisa]; Tekmovanja in Račun se prilagodita stanju zavihkov.
const TILES = [
  ["path", "map", "nav.path"],
  ["textbook", "book-open", "nav.textbook"],
  ["chat", "message-circle", "nav.chat"],
  ["scan", "scan-line", "scan.nav"],
  ["graph", "calculator", "nav.graph"],
  ["competition", "medal", "nav.competition"],
  ["games", "gamepad-2", "nav.games"],
  ["schedule", "calendar-days", "sch.title"],
  ["corner", "newspaper", "nav.corner"],
  ["progress", "chart-column", "nav.progress"],
  ["league", "trophy", "nav.league"],
  ["zbirke", "award", "apps.zbirke"],
  ["settings", "settings", "nav.settings"],
  ["feedback", "message-square-heart", "nav.feedbackShort"],
  ["account", "user", "nav.account"],
];

export function initAppsMenu(deps) {
  D = deps;
  const btn = $(".topbar .brand");
  const pop = $("#apps-pop");
  if (!btn || !pop) return;
  btn.addEventListener("click", () => {
    // Prijava in prvi profil: brez profila deli aplikacije ne delujejo.
    if (document.body.classList.contains("auth-mode") || !D.getState().student) return;
    isOpen() ? close() : open();
  });
  pop.addEventListener("click", onPick);
  pop.addEventListener("keydown", onKey);
  document.addEventListener("pointerdown", (e) => {
    if (isOpen() && !pop.contains(e.target) && !btn.contains(e.target)) close();
  });
  window.addEventListener("resize", () => close());
}

const isOpen = () => !$("#apps-pop").hidden;

// Tipka Nazaj najprej zapre odprt meni (vrne true, če je bil odprt).
export function closeAppsMenu() {
  if (!isOpen()) return false;
  close();
  return true;
}

function tiles() {
  const comp = $("#competition-tab");
  return TILES.filter(([view]) => {
    if (view === "competition") return comp && !comp.hidden;
    if (view === "account") return !$("#account-tab")?.hidden;
    return true;
  }).map(([view, ic, key]) => {
    if (view !== "competition") return { view, ic, label: t(key) };
    // Tekmovanja ali Izpiti (regije z državnimi izpiti): napis in ikona kot na zavihku.
    const label = comp.querySelector("span")?.textContent || t(key);
    return { view, ic: comp.querySelector("span")?.dataset.i18n === "nav.exams" ? "clipboard-check" : ic, label };
  });
}

function render() {
  const cur = D.currentView();
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  $("#apps-pop").innerHTML = `<div class="am-title" id="apps-title">${esc(t("apps.menu"))}</div>
    <div class="am-grid">${tiles()
      .map(
        ({ view, ic, label }) => `<button type="button" class="am-tile" role="menuitem" data-view="${view}"${view === cur ? ' aria-current="page"' : ""}>
          <span class="am-ic" aria-hidden="true">${icon(ic)}</span><span class="am-label">${esc(label)}</span></button>`,
      )
      .join("")}</div>`;
}

function open() {
  const usage = $("#usage-pop");
  if (usage) usage.hidden = true;
  render();
  const btn = $(".topbar .brand");
  const pop = $("#apps-pop");
  const r = btn.getBoundingClientRect();
  const rtl = document.documentElement.dir === "rtl";
  pop.style.top = `${Math.round(r.bottom + 8)}px`;
  pop.style.left = pop.style.right = "";
  pop.hidden = false;
  // Ob logotipu, a na ozkem telefonu enako daleč od obeh robov.
  const edge = Math.max(8, Math.min(Math.round(rtl ? window.innerWidth - r.right : r.left), window.innerWidth - pop.offsetWidth - 8));
  pop.style[rtl ? "right" : "left"] = `${edge}px`;
  btn.setAttribute("aria-expanded", "true");
  (pop.querySelector(".am-tile[aria-current]") || pop.querySelector(".am-tile"))?.focus({ preventScroll: true });
}

function close(refocus = false) {
  const pop = $("#apps-pop");
  if (pop.hidden) return;
  pop.hidden = true;
  const btn = $(".topbar .brand");
  btn.setAttribute("aria-expanded", "false");
  if (refocus) btn.focus({ preventScroll: true });
}

function onPick(e) {
  const b = e.target.closest(".am-tile");
  if (!b) return;
  close();
  // Račun ima svoj zagon (account.js posluša klik na zavihek).
  if (b.dataset.view === "account") return $("#account-tab")?.click();
  D.showView(b.dataset.view);
}

// Puščice se premikajo po mreži (levo/desno obrnjeno v jezikih od desne proti levi).
function onKey(e) {
  if (e.key === "Escape" || e.key === "Tab") {
    if (e.key === "Escape") e.preventDefault();
    return close(e.key === "Escape");
  }
  const items = [...$("#apps-pop").querySelectorAll(".am-tile")];
  const i = items.indexOf(document.activeElement);
  const cols = getComputedStyle($("#apps-pop .am-grid")).gridTemplateColumns.split(" ").length || 1;
  const side = document.documentElement.dir === "rtl" ? -1 : 1;
  const go = { ArrowRight: i + side, ArrowLeft: i - side, ArrowDown: i + cols, ArrowUp: i - cols, Home: 0, End: items.length - 1 }[e.key];
  if (go === undefined) return;
  e.preventDefault();
  items[Math.min(items.length - 1, Math.max(0, go))]?.focus();
}
