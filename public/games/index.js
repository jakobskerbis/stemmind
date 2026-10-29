// Razdelek IGRE: mreža pisanih ploščic (kot na portalih z igrami), filtri po področjih in vrstah,
// igra se odpre v istem pogledu. Igra = vrsta igre (engines.js) × matematični pojem (topics.js).
import { t } from "../i18n.js";
import { icon } from "../icons.js";
import { CONCEPTS, AREAS, conceptName, areaName, setNumberStyle } from "./topics.js";
import { ENGINES } from "./engines.js";
import { runGame } from "./core.js";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const FILTER_KEY = "stemmind.gamesFilter";

// Velik znak na ploščici.
const GLYPH = {
  add: "+", sub: "−", mul: "×", div: "÷", rem: "r", order: "( )", round: "≈", place: "10²",
  neg_add: "−3", neg_mul: "−·−", abs: "|x|", prime: "7", gcd: "D", lcm: "v", divrule: "⋮", factor: "2·3",
  frac_simplify: "⁴⁄₈", frac_add: "½", frac_mul: "⅔", frac_mixed: "1½", frac_compare: "¾", dec_add: "0,5", dec_mul: "0,1", frac_dec: "¼", pct_of: "%", pct_change: "+%", pct_find: "?%", ratio: "2:3", prop: "∝",
  square: "x²", cube: "x³", sqrt: "√", pow_rules: "aⁿ", neg_exp: "x⁻¹", sci: "10ⁿ", roots_rules: "2√3",
  like_terms: "3x", expand: "a(b)", binom: "(a+b)²", factor_alg: "( )( )", evaluate: "x=2", rational: "⁄x",
  lin1: "x=", lin2: "ax+b", lin_frac: "x⁄3", ineq: "<", system: "{ }", quad: "x²=", discr: "D", vieta: "x₁x₂", abs_eq: "|x|=", exp_eq: "2ˣ", log_eq: "log",
  fval: "f(x)", slope: "k", intercept: "f(0)", line_eq: "y=kx", quad_vertex: "∪", quad_zero: "x₁,₂", compose: "f∘g", inverse: "f⁻¹", log_val: "log", log_rules: "ln", domain: "D𝑓",
  angles_tri: "△", angles_lines: "∠", polygon_angle: "⬠", perimeter: "o", area: "▭", circle: "○", pyth: "c²", volume: "⬛", surface: "S", similar: "∼", coord_dist: "d", midpoint: "M", units: "cm",
  trig_right: "sin", trig_values: "cos", radians: "π", trig_unit: "◷", trig_eq: "sin x=", trig_id: "sin²",
  seq_next: "1,2,3", arith: "aₙ", geom: "qⁿ", series: "Σ", geom_inf: "∞",
  mean: "x̄", median: "Me", mode: "Mo", prob_basic: "🎲", prob_two: "🎲🎲", factorial: "n!", combin: "C", expected: "E",
  limit_poly: "lim", limit_00: "0⁄0", limit_inf: "→∞", limit_special: "e", der_power: "xⁿ′", der_poly: "f′", der_elem: "sin′", der_chain: "f(g)′", der_prod: "(uv)′", der_value: "f′(a)", extrema: "max", int_indef: "∫", int_def: "∫ₐᵇ", int_area: "∫▭",
  vec_add: "→+", vec_len: "|v|", dot: "a·b", cross: "a×b", det2: "det", mat_mul: "[ ]", cx_add: "a+bi", cx_mul: "i·i", cx_abs: "|z|", cx_pow: "iⁿ",
};

let ctx = null; // { api, getStudent, refreshXp, currentLang }
let data = { year: 8, games: {}, concepts: {} };
let filter = { area: "you", kind: "all", q: "" };
let game = null; // odprta igra
let root = null;

const kindName = (e) => t(`games.e.${e.id}`);
const gameId = (e, c) => `${e.id}:${c.id}`;
const tileColor = (c) => `hsl(${(CONCEPTS.indexOf(c) * 137.5) % 360} 78% 52%)`;
const areaColor = (id) => AREAS.find((a) => a[0] === id)?.[2] || "#2563eb";
// Pojem je »zate«, če je blizu tvojemu letu šolanja (malo za nazaj, eno leto naprej).
const forYou = (c) => (data.year >= 13 ? c.year >= 10 : c.year <= data.year + 1 && c.year >= data.year - 4);
function startTier(c) {
  if (data.concepts[c.id]) return data.concepts[c.id];
  const d = data.year - c.year;
  return d >= 4 ? 3 : d >= 2 ? 2 : 1;
}

export function initGames(c) {
  ctx = c;
  try {
    Object.assign(filter, JSON.parse(localStorage.getItem(FILTER_KEY) || "{}"), { q: "" });
  } catch {}
}
export const allGamesCount = () => CONCEPTS.length * ENGINES.length;

export async function showGames() {
  root = document.querySelector("#games-content");
  if (!root || !ctx) return;
  setNumberStyle(ctx.currentLang());
  if (game) return; // igra ostane odprta
  renderPortal();
  try {
    const s = ctx.getStudent();
    if (s) data = await ctx.api(`/api/students/${s.id}/games`);
    if (!game) renderPortal();
  } catch {}
}

// Tipka nazaj: najprej zapre igro.
export function gamesBack() {
  if (!game) return false;
  closeGame();
  return true;
}

function saveFilter() {
  try {
    localStorage.setItem(FILTER_KEY, JSON.stringify({ area: filter.area, kind: filter.kind }));
  } catch {}
}

function tile(e, c) {
  const st = data.games[gameId(e, c)];
  return `<button type="button" class="gm-tile gm-k-${e.id}" data-game="${gameId(e, c)}" style="--a:${tileColor(c)};--b:${e.colors[0]}">
    <span class="gm-kind">${icon(e.icon)}</span>
    ${st?.best ? `<span class="gm-best">${icon("star")}${st.best}</span>` : ""}
    <span class="gm-glyph">${esc(GLYPH[c.id] || "∑")}</span>
    <span class="gm-name"><b>${esc(conceptName(c))}</b><small>${esc(kindName(e))}</small></span>
  </button>`;
}

function renderPortal() {
  const q = filter.q.trim().toLowerCase();
  const kinds = ENGINES.filter((e) => filter.kind === "all" || e.id === filter.kind);
  const match = (c, e) => !q || `${conceptName(c)} ${areaName(c.area)} ${kindName(e)}`.toLowerCase().includes(q);
  const pick = (c) => (filter.area === "you" ? forYou(c) : filter.area === "all" || c.area === filter.area);
  let total = 0;
  const sections = AREAS.map(([id]) => {
    const tiles = [];
    // Sosednji ploščici se razlikujeta po snovi in po vrsti igre (pisana mreža).
    const cs = CONCEPTS.filter((c) => c.area === id && pick(c));
    for (let r = 0; r < kinds.length; r++) cs.forEach((c, i) => {
      const e = kinds[(i + r) % kinds.length];
      if (match(c, e)) tiles.push(tile(e, c));
    });
    total += tiles.length;
    if (!tiles.length) return "";
    return `<section class="gm-sec"><h2><span class="gm-dot" style="background:${areaColor(id)}"></span>${esc(areaName(id))}<span class="gm-count">${tiles.length}</span></h2><div class="gm-grid">${tiles.join("")}</div></section>`;
  }).join("");
  const chip = (val, label, on) => `<button type="button" class="${on ? "active" : ""}" data-val="${val}">${esc(label)}</button>`;
  root.innerHTML = `
    <div class="gm-portal">
      <div class="gm-top">
        <div><h1>${icon("gamepad-2")} ${esc(t("nav.games"))}</h1><p class="muted">${esc(t("games.intro", { n: allGamesCount() }))}</p></div>
        <label class="gm-search">${icon("search")}<input type="search" value="${esc(filter.q)}" placeholder="${esc(t("games.search"))}" aria-label="${esc(t("games.search"))}"></label>
      </div>
      <div class="chip-row gm-areas" role="group" aria-label="${esc(t("games.areas"))}">
        ${chip("you", t("games.forYou"), filter.area === "you")}${chip("all", t("games.all"), filter.area === "all")}
        ${AREAS.map(([id]) => chip(id, areaName(id), filter.area === id)).join("")}
      </div>
      <div class="chip-row gm-kinds" role="group" aria-label="${esc(t("games.kinds"))}">
        ${chip("all", t("games.allKinds"), filter.kind === "all")}${ENGINES.map((e) => chip(e.id, kindName(e), filter.kind === e.id)).join("")}
      </div>
      ${total ? sections : `<p class="muted gm-none">${esc(t("games.none"))}</p>`}
    </div>`;
  root.querySelector(".gm-areas").addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-val]");
    if (!b) return;
    filter.area = b.dataset.val;
    saveFilter();
    renderPortal();
  });
  root.querySelector(".gm-kinds").addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-val]");
    if (!b) return;
    filter.kind = b.dataset.val;
    saveFilter();
    renderPortal();
  });
  const input = root.querySelector(".gm-search input");
  input.addEventListener("input", () => {
    filter.q = input.value;
    const pos = input.selectionStart;
    renderPortal();
    const i2 = root.querySelector(".gm-search input");
    i2.focus();
    i2.setSelectionRange(pos, pos);
  });
  root.querySelectorAll(".gm-tile").forEach((b) => b.addEventListener("click", () => openGame(b.dataset.game)));
}

function openGame(id) {
  const [eid, cid] = id.split(":");
  const engine = ENGINES.find((e) => e.id === eid);
  const concept = CONCEPTS.find((c) => c.id === cid);
  if (!engine || !concept) return;
  root.innerHTML = `<div class="gm-host"></div>`;
  document.body.classList.add("gm-on");
  const title = `${kindName(engine)}: ${conceptName(concept)}`;
  game = runGame(root.querySelector(".gm-host"), {
    engine,
    concept,
    tier: startTier(concept),
    best: data.games[id]?.best || 0,
    title,
    t,
    onExit: closeGame,
    onEnd: async (r) => {
      const s = ctx.getStudent();
      if (!s) return null;
      const info = await ctx.api(`/api/students/${s.id}/games/result`, { method: "POST", body: JSON.stringify({ game: id, ...r }) });
      data.games[id] = { best: info.best, plays: (data.games[id]?.plays || 0) + 1, tier: r.tier };
      data.concepts[cid] = r.tier;
      if (info.xp) ctx.refreshXp?.();
      return info;
    },
  });
  window.scrollTo(0, 0);
}

function closeGame() {
  game?.destroy();
  game = null;
  document.body.classList.remove("gm-on");
  renderPortal();
}

// Ob odhodu iz pogleda igro ustavimo.
export function leaveGames() {
  if (game) {
    game.destroy();
    game = null;
    document.body.classList.remove("gm-on");
  }
}
