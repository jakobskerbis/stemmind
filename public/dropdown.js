// Spustni meniji v slogu aplikacije (zaobljen seznam namesto sistemskega).
// Pravi <select> ostane skrit v strani: drži vrednost, deluje v obrazcih in sproži »change«,
// zato ostala koda ne ve, da je meni zamenjan. Vsak <select>, ki se pojavi v strani, se zamenja sam.
// Izjema: <select data-native> ostane sistemski.

const CHEVRON = '<svg class="dd-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const CHECK = '<svg class="dd-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const proto = HTMLSelectElement.prototype;
const valueProp = Object.getOwnPropertyDescriptor(proto, "value");
const indexProp = Object.getOwnPropertyDescriptor(proto, "selectedIndex");
const done = new WeakSet();
let openMenu = null; // { sel, btn, list, items, active, close }
let uid = 0;

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

export function enhanceSelect(sel) {
  if (done.has(sel) || sel.multiple || sel.size > 1 || sel.hasAttribute("data-native") || !sel.isConnected) return;
  done.add(sel);
  const wrap = document.createElement("span");
  wrap.className = "dd";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "dd-btn";
  btn.setAttribute("aria-haspopup", "listbox");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = `<span class="dd-label"></span>${CHEVRON}`;
  const label = sel.getAttribute("aria-label") || sel.labels?.[0]?.textContent?.trim();
  if (label) btn.setAttribute("aria-label", label);
  sel.before(wrap);
  wrap.append(btn, sel); // gumb pred menijem: klik na <label> odpre gumb
  sel.tabIndex = -1;
  sel.setAttribute("aria-hidden", "true");
  sel.focus = () => btn.focus();
  for (const l of sel.labels || []) {
    if (l.htmlFor) l.addEventListener("click", (e) => { e.preventDefault(); btn.focus(); });
  }

  const sync = () => {
    const opt = sel.options[indexProp.get.call(sel)];
    btn.querySelector(".dd-label").textContent = opt ? opt.textContent : "";
    btn.classList.toggle("placeholder", !opt || opt.value === "");
    btn.disabled = sel.disabled;
    wrap.hidden = sel.hidden;
  };
  // Koda pogosto nastavi vrednost neposredno (sel.value = …), kar ne sproži dogodka.
  Object.defineProperty(sel, "value", { configurable: true, get() { return valueProp.get.call(this); }, set(v) { valueProp.set.call(this, v); sync(); } });
  Object.defineProperty(sel, "selectedIndex", { configurable: true, get() { return indexProp.get.call(this); }, set(v) { indexProp.set.call(this, v); sync(); } });
  new MutationObserver(sync).observe(sel, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["disabled", "hidden", "selected", "label"] });
  sel.addEventListener("change", sync);
  sel.form?.addEventListener("reset", () => setTimeout(sync));
  sync();

  btn.addEventListener("click", () => (openMenu?.sel === sel ? closeMenu() : open(sel, btn)));
  btn.addEventListener("keydown", (e) => {
    if (openMenu?.sel === sel) return;
    if (["ArrowDown", "ArrowUp"].includes(e.key) || (e.altKey && e.key === "ArrowDown")) {
      e.preventDefault();
      open(sel, btn);
    }
  });
}

function open(sel, btn) {
  closeMenu();
  const list = document.createElement("div");
  list.className = "dd-list";
  list.id = `dd-list-${++uid}`;
  list.setAttribute("role", "listbox");
  list.tabIndex = -1;
  const items = [];
  const current = indexProp.get.call(sel);
  let html = "";
  for (const child of sel.children) {
    if (child.tagName === "OPTGROUP") {
      html += `<div class="dd-group" role="presentation">${esc(child.label)}</div>`;
      for (const o of child.children) html += optHtml(o);
    } else if (child.tagName === "OPTION") html += optHtml(child);
  }
  function optHtml(o) {
    if (o.hidden) return "";
    const i = o.index;
    return `<div class="dd-opt" role="option" data-i="${i}" aria-selected="${i === current}"${o.disabled ? ' aria-disabled="true"' : ""}><span>${esc(o.textContent)}</span>${CHECK}</div>`;
  }
  list.innerHTML = html || '<div class="dd-group">Ni možnosti</div>';
  list.querySelectorAll(".dd-opt").forEach((el) => items.push(el));
  document.body.append(list);
  btn.setAttribute("aria-expanded", "true");
  btn.setAttribute("aria-controls", list.id);
  btn.closest(".dd").classList.add("open");
  place(btn, list);

  const state = { sel, btn, list, items, active: -1 };
  openMenu = state;
  setActive(state, Math.max(0, items.findIndex((el) => Number(el.dataset.i) === current)), true);

  list.addEventListener("click", (e) => {
    const el = e.target.closest(".dd-opt");
    if (el && el.getAttribute("aria-disabled") !== "true") choose(state, Number(el.dataset.i));
  });
  list.addEventListener("pointermove", (e) => {
    const el = e.target.closest(".dd-opt");
    if (el) setActive(state, items.indexOf(el));
  });
  list.focus({ preventScroll: true });
  list.addEventListener("keydown", (e) => onKey(state, e));
}

// Seznam pod gumbom (ali nad njim, če spodaj ni prostora), nikoli čez rob zaslona.
function place(btn, list) {
  const r = btn.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  const vh = window.visualViewport?.height || window.innerHeight;
  const gap = 6, margin = 12;
  const width = Math.min(Math.max(r.width, 220), vw - 2 * margin);
  const left = Math.min(Math.max(margin, r.left), vw - margin - width);
  list.style.width = `${width}px`;
  list.style.left = `${left}px`;
  const below = vh - r.bottom - gap - margin;
  const above = r.top - gap - margin;
  const natural = Math.min(list.scrollHeight + 2, 360);
  if (below >= Math.min(natural, 220) || below >= above) {
    list.style.top = `${r.bottom + gap}px`;
    list.style.maxHeight = `${Math.max(120, below)}px`;
    list.classList.remove("up");
  } else {
    const h = Math.min(natural, above);
    list.style.top = `${r.top - gap - h}px`;
    list.style.maxHeight = `${h}px`;
    list.classList.add("up");
  }
}

function setActive(state, i, center = false) {
  if (i < 0 || i >= state.items.length) return;
  state.items[state.active]?.classList.remove("active");
  state.active = i;
  const el = state.items[i];
  el.classList.add("active");
  state.list.setAttribute("aria-activedescendant", (el.id ||= `${state.list.id}-${i}`));
  if (center) state.list.scrollTop = el.offsetTop - state.list.clientHeight / 2 + el.offsetHeight / 2;
  else el.scrollIntoView({ block: "nearest" });
}

function step(state, dir) {
  let i = state.active;
  do i += dir; while (i >= 0 && i < state.items.length && state.items[i].getAttribute("aria-disabled") === "true");
  setActive(state, i);
}

let typed = "", typedAt = 0;
function onKey(state, e) {
  if (e.key === "ArrowDown") { e.preventDefault(); step(state, 1); }
  else if (e.key === "ArrowUp") { e.preventDefault(); step(state, -1); }
  else if (e.key === "Home") { e.preventDefault(); setActive(state, 0); }
  else if (e.key === "End") { e.preventDefault(); setActive(state, state.items.length - 1); }
  else if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    const el = state.items[state.active];
    if (el && el.getAttribute("aria-disabled") !== "true") choose(state, Number(el.dataset.i));
  } else if (e.key === "Escape") { e.preventDefault(); closeMenu(true); }
  else if (e.key === "Tab") closeMenu(true);
  else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    typed = Date.now() - typedAt > 700 ? e.key.toLowerCase() : typed + e.key.toLowerCase();
    typedAt = Date.now();
    const i = state.items.findIndex((el) => el.textContent.trim().toLowerCase().startsWith(typed));
    if (i >= 0) setActive(state, i);
  }
}

function choose(state, i) {
  const { sel } = state;
  const changed = indexProp.get.call(sel) !== i;
  sel.selectedIndex = i;
  closeMenu(true);
  if (changed) {
    sel.dispatchEvent(new Event("input", { bubbles: true }));
    sel.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

export function closeMenu(refocus = false) {
  if (!openMenu) return;
  const { btn, list } = openMenu;
  openMenu = null;
  list.remove();
  btn.setAttribute("aria-expanded", "false");
  btn.removeAttribute("aria-controls");
  btn.closest(".dd")?.classList.remove("open");
  if (refocus) btn.focus({ preventScroll: true });
}

document.addEventListener("pointerdown", (e) => {
  if (openMenu && !openMenu.list.contains(e.target) && !openMenu.btn.contains(e.target)) closeMenu();
}, true);
document.addEventListener("scroll", (e) => {
  if (openMenu && !openMenu.list.contains(e.target)) closeMenu();
}, true);
window.addEventListener("resize", () => closeMenu());

export function enhanceAll(root = document) {
  if (root.tagName === "SELECT") enhanceSelect(root);
  else root.querySelectorAll?.("select").forEach(enhanceSelect);
}

enhanceAll();
new MutationObserver((records) => {
  for (const r of records) for (const n of r.addedNodes) if (n.nodeType === 1) enhanceAll(n);
}).observe(document.documentElement, { childList: true, subtree: true });
