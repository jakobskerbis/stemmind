// Jedro znanstvenega kalkulatorja in pretvornika enot: brez DOM, zato ga lahko preizkusimo v Node.
// Izraze razčleni in izračuna isti razčlenjevalnik kot grafični kalkulator (math.js).
import { parse, compile, toTex, freeVars, MathError } from "./math.js";

const ANS = "A_{ans}"; // »Ans« v izrazu; razčlenjevalnik bi »ans« razbil v a·n·s
const ANS_VAR = "A_ans"; // ime spremenljivke po razčlenitvi

/**
 * Besedilo s tipkovnice → izraz za razčlenjevalnik.
 * - decimalna vejica je vedno vejica med števkami (tudi v oklepaju), argumente loči »;«,
 * - »°« v radianih pomeni ·π/180, v stopinjah ga izpustimo,
 * - 1,2E5 → 1,2·10^(5), manjkajoče zaklepaje dodamo na konec.
 */
export function prepare(text, { comma = true, deg = false } = {}) {
  let s = String(text ?? "").trim();
  s = s.replace(/(?<![A-Za-z])Ans(?![A-Za-z])/g, ANS);
  if (comma) s = s.replace(/(\d),(?=\d)/g, "$1.");
  s = s.replace(/;/g, ",");
  s = s.replace(/(\d|\.)[eE]([+\-−]?\d+)/g, "$1*10^($2)");
  s = s.replace(/°/g, deg ? "" : "*(π/180)");
  let open = 0;
  for (const c of s) {
    if (c === "(") open++;
    else if (c === ")") open = Math.max(0, open - 1);
  }
  return s + ")".repeat(open);
}

/** Je besedilo prirejanje »a = 5«? Vrne ime spremenljivke ali null. */
function assignment(ast) {
  if (ast?.k !== "cmp" || ast.ops.length !== 1 || ast.ops[0] !== "=") return null;
  const l = ast.terms[0];
  return l.k === "var" && l.name !== ANS_VAR ? l.name : null;
}

/**
 * Izračuna vrstico.
 * @returns {{ value:number, tex:string, assign?:string } | { error:{code, info} } | null}
 */
export function evaluate(text, { vars = {}, ans = 0, deg = false, comma = true } = {}) {
  const src = prepare(text, { comma, deg });
  if (!src) return null;
  try {
    let ast = parse(src);
    const name = assignment(ast);
    const expr = name ? ast.terms[1] : ast;
    if (ast.k === "cmp" && !name) return { error: { code: "notCalc", info: {} } };
    const fv = [...freeVars(expr)].filter((v) => v !== ANS_VAR && !(v in vars));
    if (fv.length) return { error: { code: "missing", info: { names: fv } } };
    const scope = Object.assign(Object.create(null), vars, { [ANS_VAR]: ans });
    let value = compile(expr, { deg })(scope);
    if (Array.isArray(value)) value = value.length === 1 ? value[0] : NaN;
    if (typeof value === "boolean") value = value ? 1 : 0;
    const tex = toTex(ast, { comma }).replaceAll(ANS, "\\mathrm{Ans}").replace(/\\cdot\s*10\^/g, "\\cdot 10^");
    return name ? { value, tex, assign: name } : { value, tex };
  } catch (e) {
    if (e instanceof MathError) return { error: { code: e.code, info: e.info || {} } };
    return { error: { code: "other", info: {} } };
  }
}

// ---------- točna oblika: ulomek, koren, večkratnik π ----------

const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
};

/** Približek z verižnim ulomkom: p/q z q ≤ maxQ, ali null, če ni dovolj natančen. */
export function toFraction(v, maxQ = 10000) {
  if (!Number.isFinite(v)) return null;
  const sign = v < 0 ? -1 : 1;
  const x = Math.abs(v);
  let [h0, h1, k0, k1] = [0, 1, 1, 0];
  let r = x;
  for (let i = 0; i < 30; i++) {
    const a = Math.floor(r);
    [h0, h1] = [h1, a * h1 + h0];
    [k0, k1] = [k1, a * k1 + k0];
    if (k1 > maxQ) return null;
    if (Math.abs(h1 / k1 - x) <= 1e-11 * Math.max(1, x)) return { p: sign * h1, q: k1 };
    const f = r - a;
    if (f < 1e-15) break;
    r = 1 / f;
  }
  return Math.abs(h1 / k1 - x) <= 1e-11 * Math.max(1, x) ? { p: sign * h1, q: k1 } : null;
}

const fracTex = (p, q, inner = "") => {
  const s = p < 0 ? "-" : "";
  const a = Math.abs(p);
  if (q === 1) return `${s}${a === 1 && inner ? "" : a}${inner}`;
  return `${s}\\frac{${a === 1 && inner ? "" : a}${inner}}{${q}}`;
};

/**
 * Točna oblika števila v TeX (npr. \frac{1}{3}, \frac{\sqrt{3}}{2}, \frac{3\pi}{4}) ali null,
 * kadar je število celo ali točne oblike ne najdemo.
 */
export function exactTex(v) {
  if (!Number.isFinite(v) || Math.abs(v - Math.round(v)) < 1e-9 * Math.max(1, Math.abs(v)) || Math.abs(v) > 1e9 || Math.abs(v) < 1e-9) return null;
  const f = toFraction(v, 1000);
  if (f) return fracTex(f.p, f.q);
  // a√b / c
  const sq = toFraction(v * v, 1000);
  if (sq && sq.p > 0 && sq.p * sq.q <= 1e6) {
    let n = sq.p * sq.q; // v = √(p·q) / q
    let m = 1;
    for (let d = 2; d * d <= n; d++) {
      while (n % (d * d) === 0) {
        n /= d * d;
        m *= d;
      }
    }
    if (n > 1) {
      const g = gcd(m, sq.q);
      return fracTex((v < 0 ? -1 : 1) * (m / g), sq.q / g, `\\sqrt{${n}}`);
    }
  }
  // večkratnik π
  const pi = toFraction(v / Math.PI, 24);
  if (pi && Math.abs(pi.p) <= 100) return fracTex(pi.p, pi.q, "\\pi");
  return null;
}

// ---------- zapis števila ----------

/**
 * Število za prikaz. mode: "auto" | "sci" | "fix2" … "fix6" | "sig2" … "sig6".
 * Vrne { text, tex }; tex uporablja ·10^{n}.
 */
export function formatNumber(v, { mode = "auto", comma = true } = {}) {
  if (Number.isNaN(v)) return { text: "—", tex: "\\text{—}", nan: true };
  if (!Number.isFinite(v)) return { text: v > 0 ? "∞" : "−∞", tex: v > 0 ? "\\infty" : "-\\infty" };
  const dec = (s) => (comma ? s.replace(".", ",") : s);
  const sci = (digits) => {
    const [m, e] = v.toExponential(digits).split("e");
    const mm = mode === "auto" ? String(Number(m)) : m;
    const n = Number(e);
    return { text: `${dec(mm)} · 10^${n}`.replace(/^-/, "−"), tex: `${dec(mm).replace(/^-/, "-")}\\cdot 10^{${n}}` };
  };
  const plain = (s) => ({ text: dec(s).replace(/^-/, "−"), tex: dec(s) });
  if (Object.is(v, -0)) v = 0;
  const a = Math.abs(v);
  let m;
  if ((m = /^fix(\d)$/.exec(mode))) {
    if (a >= 1e15) return sci(Number(m[1]));
    return plain(v.toFixed(Number(m[1])));
  }
  if ((m = /^sig(\d)$/.exec(mode))) {
    const d = Number(m[1]);
    if (a !== 0 && (a >= 10 ** Math.max(d, 6) || a < 1e-4)) return sci(d - 1);
    const p = v.toPrecision(d);
    return plain(/e/.test(p) ? String(Number(p)) : p);
  }
  if (mode === "sci") return a === 0 ? plain("0") : sci(Math.min(9, Math.max(0, String(Number(v.toPrecision(10))).replace(/[-.]|e.*$/g, "").replace(/^0+/, "").replace(/0+$/, "").length - 1)));
  if (a !== 0 && (a >= 1e12 || a < 1e-6)) return sci(9);
  let s = String(Number(v.toPrecision(12)));
  if (/e/.test(s)) return sci(9);
  return plain(s);
}

// ---------- konstante ----------
// Vrednosti CODATA 2018 (SI); »show« je zaokrožen zapis za seznam.
export const CONSTANTS = [
  { id: "g", sym: "g", value: 9.81, unit: "m/s^2" },
  { id: "c", sym: "c", value: 299792458, unit: "m/s" },
  { id: "G", sym: "G", value: 6.6743e-11, unit: "N\\,m^2/kg^2" },
  { id: "h", sym: "h", value: 6.62607015e-34, unit: "J\\,s" },
  { id: "e0", sym: "e_0", value: 1.602176634e-19, unit: "A\\,s" },
  { id: "me", sym: "m_e", value: 9.1093837015e-31, unit: "kg" },
  { id: "mp", sym: "m_p", value: 1.67262192369e-27, unit: "kg" },
  { id: "u", sym: "u", value: 1.6605390666e-27, unit: "kg" },
  { id: "NA", sym: "N_A", value: 6.02214076e23, unit: "mol^{-1}" },
  { id: "kB", sym: "k_B", value: 1.380649e-23, unit: "J/K" },
  { id: "R", sym: "R", value: 8.314462618, unit: "J/(mol\\,K)" },
  { id: "Vm", sym: "V_m", value: 22.413969545, unit: "L/mol" },
  { id: "eps0", sym: "\\varepsilon_0", value: 8.8541878128e-12, unit: "A\\,s/(V\\,m)" },
  { id: "mu0", sym: "\\mu_0", value: 1.25663706212e-6, unit: "V\\,s/(A\\,m)" },
  { id: "sigma", sym: "\\sigma", value: 5.670374419e-8, unit: "W/(m^2\\,K^4)" },
  { id: "p0", sym: "p_0", value: 101325, unit: "Pa" },
];

/** Konstanta kot besedilo za vnos (npr. »6,62607015E-34«). */
export function constantText(c, comma = true) {
  const s = Math.abs(c.value) >= 1e6 || Math.abs(c.value) < 1e-3 ? c.value.toExponential().replace("e+", "E").replace("e", "E") : String(c.value);
  return comma ? s.replace(".", ",") : s;
}

// ---------- enote ----------
// f: faktor do osnovne enote (prva v seznamu). Temperatura ima posebno pretvorbo.
export const QUANTITIES = [
  { id: "length", units: [["m", 1], ["km", 1e3], ["dm", 0.1], ["cm", 0.01], ["mm", 1e-3], ["μm", 1e-6], ["nm", 1e-9], ["mi", 1609.344], ["ft", 0.3048], ["in", 0.0254]] },
  { id: "area", units: [["m²", 1], ["km²", 1e6], ["ha", 1e4], ["a", 100], ["dm²", 1e-2], ["cm²", 1e-4], ["mm²", 1e-6]] },
  { id: "volume", units: [["m³", 1], ["dm³", 1e-3], ["L", 1e-3], ["hL", 0.1], ["dL", 1e-4], ["cL", 1e-5], ["mL", 1e-6], ["cm³", 1e-6], ["mm³", 1e-9]] },
  { id: "mass", units: [["kg", 1], ["t", 1e3], ["dag", 1e-2], ["g", 1e-3], ["mg", 1e-6], ["μg", 1e-9], ["lb", 0.45359237], ["oz", 0.028349523125]] },
  { id: "time", units: [["s", 1], ["ms", 1e-3], ["μs", 1e-6], ["min", 60], ["h", 3600], ["d", 86400]] },
  { id: "speed", units: [["m/s", 1], ["km/h", 1 / 3.6], ["km/s", 1e3], ["mph", 0.44704], ["kn", 1852 / 3600]] },
  { id: "force", units: [["N", 1], ["kN", 1e3], ["MN", 1e6], ["mN", 1e-3]] },
  { id: "pressure", units: [["Pa", 1], ["hPa", 100], ["kPa", 1e3], ["MPa", 1e6], ["bar", 1e5], ["mbar", 100], ["atm", 101325], ["mmHg", 133.322387415]] },
  { id: "energy", units: [["J", 1], ["kJ", 1e3], ["MJ", 1e6], ["Wh", 3600], ["kWh", 3.6e6], ["cal", 4.184], ["kcal", 4184], ["eV", 1.602176634e-19]] },
  { id: "power", units: [["W", 1], ["mW", 1e-3], ["kW", 1e3], ["MW", 1e6], ["KM", 735.49875]] },
  { id: "temperature", units: [["°C"], ["K"], ["°F"]] },
  { id: "density", units: [["kg/m³", 1], ["g/cm³", 1e3], ["kg/dm³", 1e3], ["g/L", 1]] },
  { id: "charge", units: [["C", 1], ["mC", 1e-3], ["μC", 1e-6], ["As", 1], ["mAh", 3.6], ["Ah", 3600]] },
  { id: "amount", units: [["mol", 1], ["mmol", 1e-3], ["kmol", 1e3]] },
  { id: "angle", units: [["°", Math.PI / 180], ["rad", 1], ["′", Math.PI / 10800], ["″", Math.PI / 648000], ["obr", 2 * Math.PI]] },
];

const toKelvin = { "°C": (v) => v + 273.15, K: (v) => v, "°F": (v) => ((v - 32) * 5) / 9 + 273.15 };
const fromKelvin = { "°C": (v) => v - 273.15, K: (v) => v, "°F": (v) => ((v - 273.15) * 9) / 5 + 32 };

/** Pretvori vrednost med enotama iste količine. */
export function convert(value, quantity, from, to) {
  const q = QUANTITIES.find((x) => x.id === quantity);
  if (!q || !Number.isFinite(value)) return NaN;
  if (quantity === "temperature") return toKelvin[from] && fromKelvin[to] ? fromKelvin[to](toKelvin[from](value)) : NaN;
  const a = q.units.find((u) => u[0] === from);
  const b = q.units.find((u) => u[0] === to);
  if (!a || !b) return NaN;
  // zaokrožimo šum (0,1 · 3 = 0,30000000000000004)
  return Number(((value * a[1]) / b[1]).toPrecision(14));
}
