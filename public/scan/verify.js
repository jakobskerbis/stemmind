// Preverjanje rešitev, ki jih napiše AI (strežnik in vmesnik uporabljata isto kodo).
// AI rešitev pokažemo kot »preverjeno« samo, če jo izračun potrdi: rešitve vstavimo v enačbo,
// izraze primerjamo v naključnih točkah, odvode z numeričnim odvodom, nedoločene integrale z odvajanjem.
import { parse, compile, integrate } from "../graph/math.js";
import { prep, splitSystem, satisfies, equalNumerically } from "./solvecore.js";

const fin = Number.isFinite;

function fnOf(text) {
  try {
    return compile(parse(prep(text)));
  } catch {
    return null;
  }
}

// vrednost »2«, »-1/3«, »sqrt(2)«, »π/6 + 2kπ« (k = 0, 1, −1)
function values(expr) {
  const f = fnOf(String(expr).replace(/\bk\b/g, "k"));
  if (!f) return [];
  const out = [];
  for (const k of [0, 1, -1]) {
    const v = f({ k });
    if (fin(v)) out.push(v);
  }
  return [...new Set(out)];
}

// Ničle L − D na intervalu (za rešitve, ki jih AI morda ni našel).
function scanRoots(eqText, v, a = -50, b = 50, n = 4000) {
  let ast;
  try {
    ast = parse(prep(eqText));
  } catch {
    return [];
  }
  if (ast.k !== "cmp" || ast.terms.length !== 2 || ast.ops[0] !== "=") return [];
  const L = compile(ast.terms[0]);
  const R = compile(ast.terms[1]);
  const g = (x) => L({ [v]: x }) - R({ [v]: x });
  const roots = [];
  let px = a;
  let py = g(a);
  for (let i = 1; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    const y = g(x);
    if (fin(py) && fin(y) && (py === 0 || py * y < 0) && Math.abs(y - py) < 1e3) {
      let lo = px;
      let hi = x;
      for (let k = 0; k < 60; k++) {
        const m = (lo + hi) / 2;
        if (g(lo) * g(m) <= 0) hi = m;
        else lo = m;
      }
      const r = (lo + hi) / 2;
      if (Math.abs(g(r)) < 1e-6 && !roots.some((q) => Math.abs(q - r) < 1e-6)) roots.push(r);
    }
    px = x;
    py = y;
  }
  return roots;
}

/**
 * ai: { kind, variable, problem, solutions: [..], value, steps … }
 * Vrne { verified: bool, reason, missing: [x …] }
 */
export function verifyAi(problemText, ai) {
  const kind = ai?.kind;
  const v = /^[a-zA-Z]$/.test(ai?.variable || "") ? ai.variable : "x";
  try {
    if (kind === "system") {
      const parts = splitSystem(problemText) || String(problemText).split(/;|\n/).filter((s) => s.includes("="));
      for (const sol of ai.solutions || []) {
        const env = {};
        for (const m of String(sol).matchAll(/([a-zA-Z])\s*=\s*([^;,]+(?:,\d+)?)/g)) {
          const val = values(m[2])[0];
          if (val === undefined) return { verified: false, reason: "parse" };
          env[m[1]] = val;
        }
        if (!parts.length || parts.some((p) => satisfies(p, env) !== true)) return { verified: false, reason: "wrong" };
      }
      return { verified: (ai.solutions || []).length > 0, reason: (ai.solutions || []).length ? null : "empty" };
    }
    if (kind === "equation") {
      const sols = (ai.solutions || []).flatMap((s) => values(s));
      if (!(ai.solutions || []).length) {
        // »ni rešitve«: preverimo, da numerično res ni ničle
        const r = scanRoots(problemText, v);
        return { verified: r.length === 0, reason: r.length ? "missing" : null, missing: r };
      }
      if (!sols.length) return { verified: false, reason: "parse" };
      for (const s of sols) if (satisfies(problemText, { [v]: s }) !== true) return { verified: false, reason: "wrong" };
      const periodic = (ai.solutions || []).some((s) => /\bk\b/.test(s));
      if (!periodic) {
        const missing = scanRoots(problemText, v).filter((r) => !sols.some((s) => Math.abs(s - r) < 1e-5 * Math.max(1, Math.abs(r))));
        if (missing.length) return { verified: false, reason: "missing", missing };
      }
      return { verified: true };
    }
    if (kind === "expression" || kind === "arith") {
      const a = parse(prep(problemText));
      const b = parse(prep(ai.value));
      return { verified: equalNumerically(a, b), reason: "wrong" };
    }
    if (kind === "derivative") {
      const f = fnOf(String(problemText).replace(/^\s*(d\/d[a-z]|f\(x\)\s*=)\s*/, ""));
      const g = fnOf(ai.value);
      if (!f || !g) return { verified: false, reason: "parse" };
      return { verified: compareFns((x) => (f({ [v]: x + 1e-5 }) - f({ [v]: x - 1e-5 })) / 2e-5, (x) => g({ [v]: x })), reason: "wrong" };
    }
    if (kind === "integral") {
      const m = /∫\s*(?:_\(?([^\s^]+?)\)?\^\(?([^\s]+?)\)?)?\s*(.+?)\s*d([a-z])\s*$/.exec(String(problemText).replace(/\\int/g, "∫"));
      const g = fnOf(ai.value);
      if (!m || !g) return { verified: false, reason: "parse" };
      const f = fnOf(m[3]);
      const x = m[4];
      if (!f) return { verified: false, reason: "parse" };
      if (m[1] !== undefined) {
        const a = values(m[1])[0];
        const b = values(m[2])[0];
        const exact = integrate((t) => f({ [x]: t }), a, b);
        const val = g({});
        return { verified: fin(exact) && fin(val) && Math.abs(exact - val) < 1e-6 * Math.max(1, Math.abs(exact)), reason: "wrong" };
      }
      return { verified: compareFns((t) => f({ [x]: t }), (t) => (g({ [x]: t + 1e-5 }) - g({ [x]: t - 1e-5 })) / 2e-5), reason: "wrong" };
    }
  } catch {
    return { verified: false, reason: "error" };
  }
  return { verified: false, reason: "kind" };
}

function compareFns(f, g) {
  let tested = 0;
  for (const x of [0.37, 1.3, 2.1, -0.8, 3.7, -2.2, 0.9, 5.3]) {
    const a = f(x);
    const b = g(x);
    if (!fin(a) || !fin(b)) continue;
    tested++;
    if (Math.abs(a - b) > 1e-4 * Math.max(1, Math.abs(a))) return false;
  }
  return tested >= 2;
}
