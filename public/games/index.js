// Razdelek IGRE: mreža pisanih ploščic (kot na portalih z igrami), filtri po področjih in vrstah,
// igra se odpre v istem pogledu. Igra = vrsta igre (engines.js) × matematični pojem (topics.js).
import { t } from "../i18n.js";
import { icon } from "../icons.js";
import { CONCEPTS, AREAS, SUBJECTS, conceptName, areaName, setNumberStyle } from "./topics.js";
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
  // drugi predmeti
  f_prefix: "k·M", f_units: "[m]", f_conv: "km/h", f_speed: "v", f_accel: "a", f_fall: "g", f_uam: "v(t)", f_circ: "ω",
  f_weight: "Fg", f_density: "ρ", f_pressure: "p", f_fluids: "Fvz", f_newton: "F=ma", f_friction: "Ftr", f_lever: "M",
  f_work: "A", f_energy: "Wk", f_power: "P", f_eff: "η", f_mom: "G", f_temp: "°C", f_heat: "Q", f_states: "❄", f_gas: "pV",
  f_ohm: "U=RI", f_resist: "Ω", f_epower: "kWh", f_charge: "e", f_circuit: "⊣⊢", f_magnet: "N S", f_induct: "~",
  f_wave: "λ", f_optics: "α", f_lens: "f", f_halflife: "t½", f_atom: "⚛",
  k_sym: "Fe", k_atom: "p⁺n", k_shell: "e⁻", k_conf: "1s²", k_pse: "PSE", k_ion: "Na⁺", k_poly: "SO₄", k_formula: "H₂O", k_name: "NaCl", k_kisl: "H⁺",
  k_molar: "M", k_mol: "n", k_avog: "Nₐ", k_vm: "Vm", k_w: "w", k_conc: "c", k_stoich: "2:1", k_bal: "⇌", k_rtype: "A+B", k_rate: "v", k_ox: "+II", k_redox: "e⁻→",
  k_acid: "HCl", k_neut: "pH7", k_ph: "pH", k_hom: "CₙH", k_iupac: "C₂H₆", k_fg: "–OH", k_orgrx: "C=C", k_bond: "A–B", k_matter: "⚗",
  b_org: "🔬", b_cell: "◉", b_micro: "∷", b_div: "2n", b_chrom: "46", b_punnett: "Aa", b_blood: "AB0", b_gen: "♂♀", b_pair: "A–T", b_mrna: "AUG", b_codon: "UUU",
  b_organ: "♥", b_sys: "⚕", b_circ: "O₂", b_digest: "🍎", b_hormone: "⚡", b_photo: "☀", b_resp: "ATP", b_chain: "→", b_energy: "10%", b_eco: "🌲",
  b_class: "🐟", b_plant: "❀", b_evo: "🦕", b_immu: "🛡",
  n_units: "cm", n_measure: "📏", n_cell: "◉", n_states: "💧", n_mix: "⚗", n_props: "▣", n_change: "🔥", n_ph: "pH", n_plant: "🌱", n_animals: "🐾", n_body: "🦴", n_chain: "🐛→", n_energy: "☀", n_heat: "°C", n_weather: "☁", n_env: "♻",
  g_layers: "◎", g_plates: "⇄", g_quake: "M", g_mohs: "💎", g_minerals: "◆", g_rocks: "🪨", g_cycle: "↻", g_time: "Ma", g_halflife: "t½", g_strat: "≡", g_karst: "⌒", g_erosion: "≈", g_flow: "Q", g_water: "💧", g_atmos: "☁", g_ghg: "CO₂", g_energy: "⚡",
  r_bin2dec: "101", r_dec2bin: "→₂", r_hex: "0xF", r_units: "KiB", r_twos: "−1₂", r_ascii: "A65", r_gates: "&", r_bool: "¬∧", r_trace: ">_", r_seq: "[ ]", r_bigo: "O(n)", r_search: "⌕", r_ds: "⊏⊐", r_ports: ":80", r_osi: "OSI", r_ip: "IP", r_hw: "CPU",
  e_pct: "%", e_vat: "DDV", e_interest: "€%", e_profit: "€", e_breakeven: "✕", e_margin: "MC", e_elast: "Ed", e_shift: "S↑", e_equil: "S=D", e_market: "🏪", e_oppcost: "⚖", e_gdp: "BDP", e_unemp: "u", e_policy: "🏛", e_bank: "🏦", e_fx: "$€",
};

let ctx = null; // { api, getStudent, refreshXp, currentLang }
let data = { year: 8, games: {}, concepts: {} };
let filter = { subject: "MAT", area: "you", kind: "all", q: "" };
// Znak na ploščici za pojme drugih predmetov, če pojem nima svojega.
const SUBJ_GLYPH = { MAT: "∑", FIZ: "⚛", KEM: "⚗", BIO: "❀", NAR: "☼", GEO: "⛰", RAC: "01", EKO: "€" };
let game = null; // odprta igra
let root = null;

const kindName = (e) => t(`games.e.${e.id}`);
const gameId = (e, c) => `${e.id}:${c.id}`;
const tileColor = (c) => `hsl(${(CONCEPTS.indexOf(c) * 137.5) % 360} 78% 52%)`;
const areaColor = (id) => AREAS.find((a) => a[0] === id)?.[2] || "#2563eb";
// Pojem je »zate«, če je blizu tvojemu letu šolanja (malo za nazaj, eno leto naprej).
const forYou = (c) => (data.year >= 13 ? c.year >= 10 : c.year <= data.year + 1 && c.year >= data.year - 4);
// Vsaka igra se začne lahko; težje gre šele, ko učencu gre (shranjena raven pojma).
const startTier = (c) => data.concepts[c.id] || 1;

export function initGames(c) {
  ctx = c;
  try {
    Object.assign(filter, JSON.parse(localStorage.getItem(FILTER_KEY) || "{}"), { q: "" });
    if (!SUBJECTS.includes(filter.subject)) filter.subject = "MAT";
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
    localStorage.setItem(FILTER_KEY, JSON.stringify({ subject: filter.subject, area: filter.area, kind: filter.kind }));
  } catch {}
}

function tile(e, c) {
  const st = data.games[gameId(e, c)];
  return `<button type="button" class="gm-tile gm-k-${e.id}" data-game="${gameId(e, c)}" style="--a:${tileColor(c)};--b:${e.colors[0]}">
    <span class="gm-kind">${icon(e.icon)}</span>
    ${st?.best ? `<span class="gm-best">${icon("star")}${st.best}</span>` : ""}
    <span class="gm-glyph">${esc(GLYPH[c.id] || c.glyph || SUBJ_GLYPH[c.subject] || "∑")}</span>
    <span class="gm-name"><b>${esc(conceptName(c))}</b><small>${esc(kindName(e))}</small></span>
  </button>`;
}

function renderPortal() {
  const q = filter.q.trim().toLowerCase();
  const kinds = ENGINES.filter((e) => filter.kind === "all" || e.id === filter.kind);
  const match = (c, e) => !q || `${conceptName(c)} ${areaName(c.area)} ${kindName(e)}`.toLowerCase().includes(q);
  // Iskanje gre čez vse predmete, sicer le izbrani predmet.
  // »Zate« brez iger za ta predmet (npr. fakultetni predmet v OŠ) → vsa področja predmeta.
  const anyForYou = CONCEPTS.some((c) => c.subject === filter.subject && forYou(c));
  const area = filter.area === "you" && !anyForYou ? "all" : filter.area;
  const pick = (c) => (q || c.subject === filter.subject) && (area === "you" ? forYou(c) : area === "all" || c.area === area);
  let total = 0;
  const sections = AREAS.filter((a) => q || a[3] === filter.subject).map(([id]) => {
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
      ${SUBJECTS.length > 1 ? `<div class="chip-row gm-subjects" role="group" aria-label="${esc(t("games.subjects"))}">${SUBJECTS.map((x) => chip(x, t(`subj.${x}`), filter.subject === x)).join("")}</div>` : ""}
      <div class="chip-row gm-areas" role="group" aria-label="${esc(t("games.areas"))}">
        ${chip("you", t("games.forYou"), filter.area === "you")}${chip("all", t("games.all"), filter.area === "all")}
        ${AREAS.filter((a) => a[3] === filter.subject).map(([id]) => chip(id, areaName(id), filter.area === id)).join("")}
      </div>
      <div class="chip-row gm-kinds" role="group" aria-label="${esc(t("games.kinds"))}">
        ${chip("all", t("games.allKinds"), filter.kind === "all")}${ENGINES.map((e) => chip(e.id, kindName(e), filter.kind === e.id)).join("")}
      </div>
      ${total ? sections : `<p class="muted gm-none">${esc(t("games.none"))}</p>`}
    </div>`;
  root.querySelector(".gm-subjects")?.addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-val]");
    if (!b) return;
    filter.subject = b.dataset.val;
    if (!["you", "all"].includes(filter.area)) filter.area = "you";
    saveFilter();
    renderPortal();
  });
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
