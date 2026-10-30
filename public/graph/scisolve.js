// Znanstveni kalkulator razume več kot račun: enačbe, neenačbe, sisteme, funkcije f(x), odvode in
// kompleksna števila. Vse brez DOM in brez API (preizkusi v test/tools.test.js).
// Koraki rešitve niso tukaj: »Po korakih« odpre zaslon Skeniraj (public/scan/), ki ima svoj reševalnik.
import { simplify, diff, toTex, MathError } from "./math.js";
import { evaluate, compileLine, unknownsOf, functionDef, lineTex, splitTop, prepare, exactTex, toFraction, formatNumber } from "./scicore.js";
import { evalComplex, polyRoots } from "./toolscore.js";

const RANGE = 100; // numerično iščemo rešitve na [−RANGE, RANGE]
const SAMPLES = 20000;
const TRIG = /(sin|cos|tan|cot|sec|csc)\(/;

const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
};
const near = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));
const clean = (x) => (Math.abs(x - Math.round(x)) < 1e-9 * Math.max(1, Math.abs(x)) ? Math.round(x) : Math.abs(x) < 1e-12 ? 0 : x);

/** Decimalni zapis: v samodejni obliki na 8 mest (rešitve so dolge), sicer po izbrani obliki. */
const decTex = (v, comma, mode = "auto") => formatNumber(mode === "auto" ? Number(clean(v).toPrecision(8)) : clean(v), { mode, comma }).tex;
/** Število v TeX: točna oblika (ulomek, koren, π) ≈ decimalno, sicer decimalni zapis. */
export function numberTex(v, comma = true, mode = "auto") {
  const ex = exactTex(clean(v));
  return ex ? `${ex} \\approx ${decTex(v, comma, mode)}` : decTex(v, comma, mode);
}
const plainTex = (v, comma, mode = "auto") => exactTex(clean(v)) || decTex(v, comma, mode);

// ---------- polinomi ----------

/**
 * Če je f polinom stopnje ≤ 8, vrne koeficiente od najvišje potence, sicer null.
 * Deljene razlike v točkah −4 … 4, nato preverimo v točkah med njimi.
 */
export function polyCoeffs(f, maxDeg = 8) {
  const xs = [];
  const ys = [];
  for (let k = 0; k <= maxDeg; k++) {
    const x = k - Math.floor(maxDeg / 2);
    const y = f(x);
    if (typeof y !== "number" || !Number.isFinite(y)) return null;
    xs.push(x);
    ys.push(y);
  }
  // Newtonove deljene razlike
  const c = ys.slice();
  for (let j = 1; j < c.length; j++) for (let i = c.length - 1; i >= j; i--) c[i] = (c[i] - c[i - 1]) / (xs[i] - xs[i - j]);
  // v potence: p(x) = c0 + (x−x0)(c1 + (x−x1)(c2 + …))
  let p = [c[c.length - 1]]; // od najnižje potence
  for (let i = c.length - 2; i >= 0; i--) {
    const q = new Array(p.length + 1).fill(0);
    for (let k = 0; k < p.length; k++) {
      q[k + 1] += p[k];
      q[k] -= xs[i] * p[k];
    }
    q[0] += c[i];
    p = q;
  }
  const scale = Math.max(1, ...p.map(Math.abs));
  p = p.map((a) => (Math.abs(a) < 1e-9 * scale ? 0 : clean(a)));
  const ev = (x) => p.reduceRight((s, a) => s * x + a, 0);
  for (const x of [0.37, -1.73, 2.51, -3.29, 6.7, -9.4]) {
    const y = f(x);
    if (typeof y !== "number" || !Number.isFinite(y) || !near(ev(x), y, 1e-7)) return null;
  }
  while (p.length > 1 && p[p.length - 1] === 0) p.pop();
  return p.reverse();
}

/** Točne rešitve kvadratne enačbe z racionalnimi koeficienti: { tex, roots, complex } ali null. */
function quadraticExact([a, b, c], v, comma) {
  const fr = [a, b, c].map((x) => toFraction(x, 1000));
  if (fr.some((x) => !x)) return null;
  const L = fr.reduce((l, x) => (l * x.q) / gcd(l, x.q), 1);
  let [A, B, C] = fr.map((x) => (x.p * L) / x.q);
  if (A < 0) [A, B, C] = [-A, -B, -C];
  const D = B * B - 4 * A * C;
  if (!Number.isSafeInteger(D)) return null;
  if (D === 0) return null; // ena dvojna rešitev: dovolj je numerična
  const sq = Math.round(Math.sqrt(Math.abs(D)));
  if (D > 0 && sq * sq === D) return null; // racionalni rešitvi: dovolj je exactTex
  // √|D| = m√n
  let n = Math.abs(D);
  let m = 1;
  for (let d = 2; d * d <= n; d++) {
    while (n % (d * d) === 0) {
      n /= d * d;
      m *= d;
    }
  }
  const g = gcd(gcd(B, m), 2 * A);
  const p = -B / g;
  const mm = m / g;
  const q = (2 * A) / g;
  const rad = n === 1 ? `${mm === 1 ? "" : mm}i` : `${mm === 1 ? "" : mm}\\sqrt{${n}}${D < 0 ? "\\,i" : ""}`;
  const num = p === 0 ? `\\pm ${rad}` : `${p} \\pm ${rad}`;
  const tex = q === 1 ? num : `\\frac{${num}}{${q}}`;
  const re = -B / (2 * A);
  const im = Math.sqrt(Math.abs(D)) / (2 * A);
  return D > 0 ? { tex: `${v}_{1,2} = ${tex}`, roots: [re - im, re + im] } : { tex: `${v}_{1,2} = ${tex}`, roots: [], complex: [[re, -im], [re, im]] };
}

// ---------- numerične rešitve ----------

/** Točke na [a, b], kjer f spremeni predznak, ima ničlo ali se začne/konča definicijsko območje. */
function criticalPoints(f, a, b, n = SAMPLES) {
  const pts = [];
  const add = (x) => {
    x = clean(x);
    if (!pts.some((p) => near(p, x, 1e-8))) pts.push(x);
  };
  const h = (b - a) / n;
  const val = (x) => {
    const y = f(x);
    return typeof y === "number" ? y : NaN;
  };
  const cls = (y) => (Number.isNaN(y) ? 2 : Math.sign(y));
  let x0 = a;
  let y0 = val(a);
  let ym = NaN;
  if (Math.abs(y0) < 1e-12) add(a);
  for (let i = 1; i <= n; i++) {
    const x1 = a + i * h;
    const y1 = val(x1);
    if (y1 === 0) add(x1);
    else if (cls(y0) !== cls(y1) && y0 !== 0) {
      // bisekcija na meji (ničla, pol ali rob definicijskega območja)
      let lo = x0;
      let hi = x1;
      const c0 = cls(y0);
      for (let k = 0; k < 80; k++) {
        const m = (lo + hi) / 2;
        const ymid = val(m);
        if (ymid === 0) {
          lo = hi = m;
          break;
        }
        if (cls(ymid) === c0) lo = m;
        else hi = m;
      }
      add((lo + hi) / 2);
    } else if (Number.isFinite(ym) && Number.isFinite(y0) && Number.isFinite(y1) && Math.abs(y0) < Math.abs(ym) && Math.abs(y0) <= Math.abs(y1) && Math.sign(ym) === Math.sign(y0) && Math.sign(y0) === Math.sign(y1)) {
      // morda dotikališče (dvojna ničla)
      let lo = x0 - h;
      let hi = x1;
      const g = (x) => Math.abs(val(x));
      for (let k = 0; k < 120; k++) {
        const m1 = lo + (hi - lo) / 3;
        const m2 = hi - (hi - lo) / 3;
        if (g(m1) < g(m2)) hi = m2;
        else lo = m1;
      }
      const r = (lo + hi) / 2;
      if (g(r) < 1e-10) add(r);
    }
    ym = y0;
    x0 = x1;
    y0 = y1;
    if (pts.length > 400) break;
  }
  return pts.sort((p, q) => p - q);
}

const isRoot = (f, x) => {
  const y = f(x);
  if (typeof y !== "number" || !Number.isFinite(y)) return false;
  const s = Math.max(1, Math.abs(f(x + 1e-3)), Math.abs(f(x - 1e-3)));
  return Math.abs(y) < 1e-7 * s;
};

// ---------- enačba z eno neznanko ----------

function solveOne(F, v, { comma, deg, src }) {
  const poly = polyCoeffs(F);
  if (poly) {
    const d = poly.length - 1;
    if (d === 0) return poly[0] === 0 ? { kind: "solve", v, all: true, roots: [] } : { kind: "solve", v, none: true, roots: [] };
    if (d === 2) {
      const ex = quadraticExact(poly, v, comma);
      if (ex) return { kind: "solve", v, roots: ex.roots, complex: ex.complex || [], exact: ex.tex, poly };
    }
    const all = polyRoots(poly);
    const roots = [];
    const complex = [];
    for (const [re, im] of all) {
      if (Math.abs(im) < 1e-7 * Math.max(1, Math.abs(re))) {
        const r = clean(re);
        if (!roots.some((x) => near(x, r, 1e-7))) roots.push(r);
      } else if (!complex.some(([a, b]) => near(a, re, 1e-7) && near(b, im, 1e-7))) complex.push([clean(re), clean(im)]);
    }
    return { kind: "solve", v, roots: roots.sort((a, b) => a - b), complex, poly };
  }
  const P = deg ? 360 : 2 * Math.PI;
  const same = (x) => {
    const a = F(x);
    const b = F(x + P);
    return Number.isNaN(a) ? Number.isNaN(b) : near(a, b, 1e-7);
  };
  if (TRIG.test(src) && [0.31, 1.7, -2.9, 4.4, 11.3].every(same)) {
    // periodična enačba: rešitve na eni periodi kota (v stopinjah [0°, 360°), v radianih [0, 2π))
    const roots = criticalPoints(F, 0, P, 6000).filter((x) => isRoot(F, x) && x >= 0 && x < P - 1e-9);
    return { kind: "solve", v, roots, complex: [], interval: deg ? `[0^{\\circ}${comma ? ";" : ","}\\,360^{\\circ})` : `[0${comma ? ";" : ","}\\,2\\pi)`, periodic: true };
  }
  const R = deg ? 10 * RANGE : RANGE;
  let roots = criticalPoints(F, -R, R).filter((x) => isRoot(F, x));
  if (roots.length > 12) roots = roots.filter((x) => Math.abs(x) <= 20).slice(0, 12);
  return { kind: "solve", v, roots, complex: [] };
}

/** TeX rešitev enačbe. */
export function solutionTex(r, comma = true, mode = "auto") {
  const v = r.v;
  if (r.all) return `${v} \\in \\mathbb{R}`;
  if (r.none || (!r.roots.length && !r.complex?.length)) return `${v} \\in \\varnothing`;
  const parts = [];
  if (r.exact) parts.push(r.exact);
  const many = r.roots.length + (r.complex?.length || 0) > 1;
  const name = (i) => (many ? `${v}_{${i + 1}}` : v);
  if (r.exact)
    r.roots.forEach((x, i) => parts.push(`${name(i)} \\approx ${decTex(x, comma, mode)}`));
  else r.roots.forEach((x, i) => parts.push(`${name(i)} = ${numberTex(x, comma, mode)}`));
  if (!r.exact)
    (r.complex || []).forEach(([re, im], i) => {
      const a = re === 0 ? "" : plainTex(re, comma, mode);
      const b = plainTex(Math.abs(im), comma, mode);
      parts.push(`${name(r.roots.length + i)} = ${a}${im < 0 ? "-" : a ? "+" : ""}${b === "1" ? "" : b}${/^[\d{}]+$/.test(b) ? "" : "\\,"}i`);
    });
  return parts.join(",\\quad ");
}

// ---------- neenačbe ----------

function solveIneq(pred, Fs, v, comma) {
  let pts = [];
  for (const F of Fs) {
    const poly = polyCoeffs(F);
    if (poly && poly.length > 1)
      for (const [re, im] of polyRoots(poly)) {
        if (Math.abs(im) < 1e-7 * Math.max(1, Math.abs(re))) pts.push(clean(re));
      }
    pts.push(...criticalPoints(F, -RANGE, RANGE));
  }
  pts = pts.sort((a, b) => a - b).filter((x, i, a) => i === 0 || !near(x, a[i - 1], 1e-7));
  const test = (x) => {
    try {
      return pred(x) === true;
    } catch {
      return false;
    }
  };
  // odseki: (−∞, p0), {p0}, (p0, p1), … , (pk, ∞)
  const segs = [];
  const mid = (i) => (i === 0 ? (pts.length ? pts[0] - Math.max(1, Math.abs(pts[0])) : 0) : i === pts.length ? pts[i - 1] + Math.max(1, Math.abs(pts[i - 1])) : (pts[i - 1] + pts[i]) / 2);
  for (let i = 0; i <= pts.length; i++) {
    segs.push({ lo: i === 0 ? -Infinity : pts[i - 1], hi: i === pts.length ? Infinity : pts[i], ok: test(mid(i)) });
    if (i < pts.length) segs.push({ point: pts[i], ok: test(pts[i]) });
  }
  // združimo v intervale
  const out = [];
  let cur = null;
  for (const s of segs) {
    if (!s.ok) {
      if (cur) out.push(cur);
      cur = null;
      continue;
    }
    if (s.point !== undefined) {
      if (cur) cur.hiIn = true;
      else cur = { lo: s.point, loIn: true, hi: s.point, hiIn: true };
      cur.hi = s.point;
    } else if (cur) {
      cur.hi = s.hi;
      cur.hiIn = false;
    } else cur = { lo: s.lo, loIn: false, hi: s.hi, hiIn: false };
  }
  if (cur) out.push(cur);
  return { kind: "ineq", v, intervals: out };
}

export function intervalsTex(r, comma = true, mode = "auto") {
  const v = r.v;
  const I = r.intervals;
  if (!I.length) return `${v} \\in \\varnothing`;
  if (I.length === 1 && I[0].lo === -Infinity && I[0].hi === Infinity) return `${v} \\in \\mathbb{R}`;
  const end = (x) => (x === -Infinity ? "-\\infty" : x === Infinity ? "\\infty" : plainTex(x, comma, mode));
  const one = (i) => (i.lo === i.hi ? `\\{${end(i.lo)}\\}` : `${i.loIn ? "[" : "("}${end(i.lo)}${comma ? ";\\," : ",\\,"}${end(i.hi)}${i.hiIn ? "]" : ")"}`);
  // en sam interval zapišemo tudi kot neenačbo (−2 < x < 2)
  let ineq = "";
  if (I.length === 1 && I[0].lo !== I[0].hi) {
    const i = I[0];
    const l = i.lo === -Infinity ? "" : `${end(i.lo)} ${i.loIn ? "\\le" : "<"} `;
    const h = i.hi === Infinity ? "" : ` ${i.hiIn ? "\\le" : "<"} ${end(i.hi)}`;
    ineq = l || h ? `${l}${v}${h} \\quad\\Leftrightarrow\\quad ` : "";
  }
  return `${ineq}${v} \\in ${I.map(one).join(" \\cup ")}`;
}

// ---------- sistem linearnih enačb ----------

function solveLinear(Gs, unknowns) {
  const n = unknowns.length;
  const at = (vec) => Gs.map((G) => G(vec));
  const zero = new Array(n).fill(0);
  const c0 = at(zero);
  if (c0.some((x) => !Number.isFinite(x))) return null;
  const A = Gs.map(() => new Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    const e = zero.slice();
    e[j] = 1;
    const cj = at(e);
    for (let i = 0; i < Gs.length; i++) A[i][j] = clean(cj[i] - c0[i]);
  }
  // linearnost: preverimo v naključni točki
  const probe = unknowns.map((_, j) => 0.73 + 1.37 * j);
  const want = at(probe);
  for (let i = 0; i < Gs.length; i++) {
    const lin = c0[i] + A[i].reduce((s, a, j) => s + a * probe[j], 0);
    if (!near(lin, want[i], 1e-8)) return null;
  }
  // Gaussova eliminacija z delnim pivotiranjem
  const M = A.map((row, i) => [...row, -c0[i]]);
  let rank = 0;
  const pivCol = [];
  for (let col = 0; col < n && rank < M.length; col++) {
    let best = rank;
    for (let i = rank + 1; i < M.length; i++) if (Math.abs(M[i][col]) > Math.abs(M[best][col])) best = i;
    if (Math.abs(M[best][col]) < 1e-12) continue;
    [M[rank], M[best]] = [M[best], M[rank]];
    for (let i = 0; i < M.length; i++) {
      if (i === rank) continue;
      const f = M[i][col] / M[rank][col];
      for (let k = col; k <= n; k++) M[i][k] -= f * M[rank][k];
    }
    pivCol.push(col);
    rank++;
  }
  const inconsistent = M.slice(rank).some((row) => Math.abs(row[n]) > 1e-9 * Math.max(1, ...row.map(Math.abs)));
  if (inconsistent) return { kind: "system", unknowns, none: true };
  if (rank < n) return { kind: "system", unknowns, many: true };
  const values = new Array(n);
  pivCol.forEach((col, r) => (values[col] = clean(M[r][n] / M[r][col])));
  return { kind: "system", unknowns, values };
}

// ---------- besedilo za grafični kalkulator ----------

// izraz za graf: decimalna pika, »,« med argumenti, brez Ans in °
function plotText(s, env) {
  return prepare(s, { comma: env.comma !== false })
    .replace(/A_\{ans\}/g, `(${env.ans ?? 0})`)
    .replace(/\*G_\{deg\}/g, env.deg ? "*(π/180)" : "*(π/180)")
    .replace(/\s+/g, " ")
    .trim();
}
const CMP = /<=|>=|≤|≥|<|>|=/;
function splitCmp(text) {
  const s = String(text);
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(") depth++;
    else if (c === ")") depth--;
    else if (depth === 0) {
      const m = CMP.exec(s.slice(i, i + 2));
      if (m && m.index === 0) return [s.slice(0, i), m[0], s.slice(i + m[0].length)];
    }
  }
  return null;
}

/** Samo zapis vrstice v TeX (brez reševanja), za sproten predogled enačb in sistemov. */
export function previewTex(text, env = {}) {
  const comma = env.comma !== false;
  try {
    const parts = splitTop(String(text ?? "").trim(), ";\n").map((x) => x.trim()).filter(Boolean);
    if (!parts.length) return null;
    const texs = parts.map((p) => lineTex(compileLine(p, { ...env, funcs: env.funcs || {} }).ast, comma));
    return texs.length > 1 ? `\\begin{cases} ${texs.join(" \\\\ ")} \\end{cases}` : texs[0];
  } catch {
    return null;
  }
}

// ---------- glavna funkcija ----------

/**
 * Analizira vrstico znanstvenega kalkulatorja.
 * env: { vars, funcs, ans, deg, comma }
 * Vrne { kind, tex, … } ali { error }:
 * - value: { value, assign? } (navaden račun)
 * - complex: { re, im }
 * - func: { name, param, body } (definicija f(x) = …)
 * - solve: { v, roots, complex, exact?, interval?, all?, none? }
 * - ineq: { v, intervals }
 * - system: { unknowns, values | none | many }
 * - bool: { value } (enačba brez neznank: drži / ne drži)
 * - deriv: { resTex } (simbolni odvod)
 * - expr: izraz z eno spremenljivko (narišemo ga)
 * - plot: enačba z dvema neznankama (narišemo jo)
 * Vsi razen value/complex/bool/func imajo plot: [izrazi za grafični kalkulator].
 */
export function analyze(text, env = {}) {
  const comma = env.comma !== false;
  const vars = env.vars || {};
  const raw = String(text ?? "").trim();
  if (!raw) return null;

  // sistem: več enačb, ločenih s »;« na vrhnji ravni
  const parts = splitTop(raw, ";\n").map((x) => x.trim()).filter(Boolean);
  if (parts.length >= 2 && parts.every((p) => /[=<>≤≥]/.test(p))) return system(parts, env);

  // definicija funkcije
  const def = functionDef(raw);
  if (def) {
    try {
      const funcs = { ...(env.funcs || {}), [def.name]: { param: def.param, body: def.body } };
      const line = compileLine(raw.replace(/^[^=]*=/, `${def.name}(${def.param}) =`), { ...env, funcs });
      const body = compileLine(def.body, { ...env, funcs, vars: { ...vars } });
      const bad = unknownsOf(body.ast, vars).filter((x) => x !== def.param);
      if (bad.length) return { error: { code: "missing", info: { names: bad } } };
      return { kind: "func", name: def.name, param: def.param, body: def.body, tex: lineTex(line.ast, comma), plot: def.param === "x" ? [`y = ${plotText(def.body, env)}`] : [] };
    } catch (e) {
      return { error: { code: e.code || "other", info: e.info || {} } };
    }
  }

  const r = evaluate(raw, env);
  if (r && !r.error) return { kind: "value", ...r };
  if (!r) return null;
  const code = r.error.code;
  if (code !== "missing" && code !== "notCalc") return r;

  // kompleksno število (i je imaginarna enota, če ni spremenljivka)
  if (code === "missing" && r.error.info.names.every((n) => n === "i") && !("i" in vars)) {
    try {
      const s = prepare(raw, { comma })
        .replace(/A_\{ans\}/g, `(${env.ans ?? 0})`)
        .replace(/G_\{deg\}/g, env.deg ? "1" : "(π/180)");
      if (/[A-Za-z]_\{/.test(s)) throw new MathError("other");
      const [re, im] = evalComplex(s, { deg: !!env.deg });
      const line = compileLine(raw, env);
      return { kind: "complex", re: clean(re), im: clean(im), tex: lineTex(line.ast, comma) };
    } catch (e) {
      return { error: { code: e.code || "other", info: e.info || {} } };
    }
  }

  let line;
  try {
    line = compileLine(raw, env);
  } catch (e) {
    return { error: { code: e.code || "other", info: e.info || {} } };
  }
  const { ast, scope, run } = line;
  const tex = lineTex(ast, comma);
  const U = unknownsOf(line.rw(ast), vars).sort((a, b) => (a === "x" ? -1 : b === "x" ? 1 : a.localeCompare(b)));
  const fnOf = (node, v) => {
    const f = run(node);
    return (x) => {
      const s = Object.create(scope);
      s[v] = x;
      const y = f(s);
      return Array.isArray(y) ? (y.length === 1 ? y[0] : NaN) : y;
    };
  };

  try {
    if (ast.k === "cmp") {
      const cmp = splitCmp(raw);
      if (U.length === 0) {
        const ok = run(ast)(scope);
        return { kind: "bool", value: ok === true || ok === 1, tex };
      }
      if (U.length === 1) {
        const v = U[0];
        const plot = v === "x" && cmp && ast.ops.length === 1 ? plotPair(cmp, env) : [];
        if (ast.ops.length === 1 && ast.ops[0] === "=") {
          const L = fnOf(ast.terms[0], v);
          const R = fnOf(ast.terms[1], v);
          const F = (x) => L(x) - R(x);
          const res = solveOne(F, v, { comma, deg: !!env.deg, src: raw });
          return { ...res, tex, plot };
        }
        const pred = fnOf(ast, v);
        const Fs = [];
        for (let i = 0; i + 1 < ast.terms.length; i++) {
          const L = fnOf(ast.terms[i], v);
          const R = fnOf(ast.terms[i + 1], v);
          Fs.push((x) => L(x) - R(x));
        }
        return { ...solveIneq(pred, Fs, v, comma), tex, plot };
      }
      if (U.length === 2 && U.includes("x") && U.includes("y")) return { kind: "plot", tex, plot: [plotText(raw, env)] };
      return { error: { code: "missing", info: { names: U.slice(1) } } };
    }
    if (U.length === 1) {
      const v = U[0];
      if (ast.k === "der" || (ast.k === "grp" && ast.a.k === "der")) {
        const d = ast.k === "der" ? ast : ast.a;
        const res = simplify(diff(d.a, d.v, line.ctx));
        const resTex = toTex(res, { comma, sep: comma ? ";" : "," });
        return { kind: "deriv", tex, resTex, plot: v === "x" ? [`y = ${plotText(raw, env)}`] : [] };
      }
      return { kind: "expr", v, tex, plot: v === "x" ? [`y = ${plotText(raw, env)}`] : [] };
    }
  } catch (e) {
    return { error: { code: e.code || "other", info: e.info || {} } };
  }
  return r;
}

function plotPair([l, , rr], env) {
  const rhs = rr.trim();
  if (/^0([.,]0*)?$/.test(rhs)) return [`y = ${plotText(l, env)}`];
  return [`y = ${plotText(l, env)}`, `y = ${plotText(rhs, env)}`];
}

function system(parts, env) {
  const comma = env.comma !== false;
  const vars = env.vars || {};
  try {
    const lines = parts.map((p) => compileLine(p, env));
    if (lines.some((l) => l.ast.k !== "cmp" || l.ast.ops.length !== 1 || l.ast.ops[0] !== "=")) return { error: { code: "notCalc", info: {} } };
    const U = [...new Set(lines.flatMap((l) => unknownsOf(l.rw(l.ast), vars)))].sort((a, b) => {
      const order = "xyzw";
      const ia = order.indexOf(a);
      const ib = order.indexOf(b);
      return (ia < 0 ? 9 : ia) - (ib < 0 ? 9 : ib) || a.localeCompare(b);
    });
    const tex = `\\begin{cases} ${lines.map((l) => lineTex(l.ast, comma)).join(" \\\\ ")} \\end{cases}`;
    const plot = U.length === 2 && U[0] === "x" && U[1] === "y" ? parts.map((p) => plotText(p, env)) : [];
    if (U.length < 1 || U.length > 6) return { error: { code: "missing", info: { names: U } } };
    const Gs = lines.map((l) => {
      const L = l.run(l.ast.terms[0]);
      const R = l.run(l.ast.terms[1]);
      return (vec) => {
        const s = Object.create(l.scope);
        U.forEach((u, j) => (s[u] = vec[j]));
        return L(s) - R(s);
      };
    });
    const res = solveLinear(Gs, U);
    if (res) return { ...res, tex, plot };
    // nelinearen sistem z x in y: pokažemo grafa (presečišča so rešitve)
    if (plot.length) return { kind: "plot", tex, plot, nonlinear: true };
    return { error: { code: "other", info: {} } };
  } catch (e) {
    return { error: { code: e.code || "other", info: e.info || {} } };
  }
}

/** TeX rezultata sistema. */
export function systemTex(r, comma = true, mode = "auto") {
  return r.unknowns.map((u, j) => `${u} = ${plainTex(r.values[j], comma, mode)}`).join(",\\quad ");
}
