// Široke formule in tabele v lekciji (j 2026-10-31: na telefonu so se skrivali stolpci in konci formul).
// Kar je preširoko za kartico, najprej malo pomanjšamo (do 80 %). Kar je še vedno preširoko, se pomika
// vstran, desni rob pa zbledi, da se vidi, da se nadaljuje. Formula sredi besedila se nikoli ne prelomi
// v dve vrstici; če je širša od vrstice, se zmanjša ali dobi svoj drsnik, da ne gleda čez rob kartice. Preverja scripts/preveri-videz-lekcij.cjs.

export const MIN = 0.8;
const BOX = ".katex-display, .md-table-wrap";
let sirine = new WeakMap(); // zadnja širina, pri kateri smo element že prilagodili
const opazovani = new Set();
let ro = null;

// Bledi rob na koncu vrstice, dokler je kaj skrito (le v okvirju, ki se res pomika; v RTL je scrollLeft ≤ 0).
function rob(el) {
  const vec = el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflowX !== "visible";
  el.classList.toggle("tb-drsnik", vec);
  el.classList.toggle("tb-konec", !vec || Math.abs(el.scrollLeft) + el.clientWidth >= el.scrollWidth - 2);
}

// Pomanjšaj `cilj`, dokler `meri()` ne pade pod `w` ali do MIN.
export function pomanjsaj(cilj, w, meri) {
  cilj.style.fontSize = "";
  let need = meri();
  if (need <= w + 1) return;
  const base = parseFloat(getComputedStyle(cilj).fontSize);
  let s = 1;
  for (let i = 0; i < 3 && need > w + 1 && s > MIN; i++) {
    s = Math.max(MIN, s * (w / need) * 0.99);
    cilj.style.fontSize = `${(base * s).toFixed(2)}px`;
    need = meri();
  }
}

function okvir(el) {
  const w = el.clientWidth;
  if (!w || sirine.get(el) === w) return;
  sirine.set(el, w);
  const cilj = el.matches(".katex-display") ? el.querySelector(":scope > .katex") : el.querySelector(":scope > table");
  if (cilj) pomanjsaj(cilj, w, () => el.scrollWidth);
  rob(el);
}

// Odstavek ali alineja z dolgo formulo med besedilom.
function vrstica(el) {
  const cw = el.clientWidth;
  if (!cw || sirine.get(el) === cw) return;
  sirine.set(el, cw);
  const w = cw - 8; // prostor za ločilo za formulo (vejica, pika), ki ostane v isti vrstici
  for (const k of el.querySelectorAll(":scope .katex")) {
    if (k.closest(".katex-display, table")) continue;
    k.classList.remove("tb-dolga");
    k.style.fontSize = "";
    // Formula se ne prelomi v novo vrstico (j 2026-10-31, textbook.css), zato šteje njena cela širina.
    const del = () => k.getBoundingClientRect().width;
    if (del() <= w + 1) continue;
    pomanjsaj(k, w, del);
    if (del() > w + 1) k.classList.add("tb-dolga");
  }
}

function prilagodi(el) {
  if (!el.isConnected) {
    ro.unobserve(el);
    opazovani.delete(el);
    return;
  }
  if (el.matches(BOX)) okvir(el);
  else vrstica(el);
}

export function prilagodiSirino(root) {
  if (!root || typeof ResizeObserver === "undefined") return;
  if (!ro) {
    // V naslednji sliki, da sprememba pisave ne sproži opozorila »ResizeObserver loop«.
    ro = new ResizeObserver((vnosi) => requestAnimationFrame(() => vnosi.forEach((v) => prilagodi(v.target))));
    // Ko se naložijo pisave KaTeX, so formule drugače široke: prilagodi znova.
    const znova = () => {
      sirine = new WeakMap();
      opazovani.forEach(prilagodi);
    };
    document.fonts?.ready?.then(znova);
    document.fonts?.addEventListener?.("loadingdone", znova);
  }
  opazovani.forEach((el) => el.isConnected || (ro.unobserve(el), opazovani.delete(el)));
  root.querySelectorAll(BOX).forEach((el) => {
    if (el.parentElement?.closest(".katex-display, .md-table-wrap")) return;
    ro.observe(el);
    opazovani.add(el);
    el.addEventListener("scroll", () => rob(el), { passive: true });
  });
  const vrste = new Set();
  root.querySelectorAll(".katex").forEach((k) => {
    if (k.closest(".katex-display, table")) return;
    const p = k.parentElement?.closest("p, li, h2, h3, dd, blockquote");
    if (p) vrste.add(p);
  });
  vrste.forEach((p) => (ro.observe(p), opazovani.add(p)));
}
