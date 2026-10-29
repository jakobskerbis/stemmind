import test from "node:test";
import assert from "node:assert/strict";
import { evaluate, prepare, exactTex, formatNumber, convert, toFraction, CONSTANTS, QUANTITIES } from "../public/graph/scicore.js";
import { stats, evalComplex, polyRoots, M, readMatrix, convertBase, molarMass } from "../public/graph/toolscore.js";
import { ELEMENTS, MASSES, CATEGORIES, shells } from "../public/graph/pse-data.js";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";

const near = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) <= eps * (1 + Math.abs(b)), `${a} ≉ ${b}`);
const ev = (text, opts) => {
  const r = evaluate(text, opts);
  assert.ok(!r.error, `${text}: ${JSON.stringify(r.error)}`);
  return r.value;
};

test("znanstveni kalkulator: decimalna vejica, Ans, kombinacije, stopinje", () => {
  near(ev("1,5 + 2,25"), 3.75);
  near(ev("2Ans + 1", { ans: 5 }), 11);
  near(ev("Ans^2", { ans: 3 }), 9);
  near(ev("nCr(5;2)"), 10);
  near(ev("sin(30)", { deg: true }), 0.5);
  near(ev("sin(π/6)"), 0.5);
  near(ev("sin(90°)", { deg: false }), 1, 1e-9);
  near(ev("1,2E5"), 120000);
  near(ev("(2+3"), 5, 0);
  near(ev("√(16) + 3!"), 10);
  near(ev("log(1000) + ln(e)"), 4);
  assert.ok(typeof prepare("Ans+1") === "string");
});

test("znanstveni kalkulator: spremenljivke, napake in enačbe", () => {
  const set = evaluate("a = 4");
  assert.equal(set.assign, "a");
  near(set.value, 4);
  near(ev("3a", { vars: { a: 4 } }), 12);
  assert.ok(evaluate("3b").error, "neznana spremenljivka je napaka");
  assert.equal(evaluate("x + 1 = 3").error?.code, "notCalc");
  assert.ok(evaluate("2 +* 3").error);
});

test("natančni rezultati: ulomki, koreni, večkratniki π", () => {
  assert.deepEqual(toFraction(0.75), { p: 3, q: 4 });
  assert.match(exactTex(0.5), /frac\{1\}\{2\}/);
  assert.match(exactTex(Math.sqrt(3) / 2), /sqrt\{3\}/);
  assert.match(exactTex(Math.PI / 4), /pi/);
  assert.equal(exactTex(60), null);
  assert.equal(exactTex(59.99999999999999), null);
});

test("oblike zapisa števil", () => {
  assert.equal(formatNumber(2.5).text, "2,5");
  assert.equal(formatNumber(2.5, { comma: false }).text, "2.5");
  assert.equal(formatNumber(Math.PI, { mode: "fix2" }).text, "3,14");
  assert.equal(formatNumber(123456, { mode: "sig3" }).text, "123000");
  assert.match(formatNumber(123456, { mode: "sci" }).text, /1,23.*10/);
});

test("pretvorbe enot in konstante", () => {
  near(convert(72, "speed", "km/h", "m/s"), 20);
  near(convert(100, "temperature", "°C", "°F"), 212);
  near(convert(0, "temperature", "°C", "K"), 273.15);
  near(convert(1, "energy", "kWh", "J"), 3.6e6);
  near(convert(0.1, "length", "m", "cm"), 10, 0);
  assert.ok(Number.isNaN(convert(1, "mass", "kg", "m")));
  assert.equal(QUANTITIES.length, 15);
  assert.equal(CONSTANTS.find((c) => c.id === "NA").value, 6.02214076e23);
});

test("statistika", () => {
  const s = stats([2, 4, 4, 4, 5, 5, 7, 9]);
  assert.equal(s.n, 8);
  near(s.mean, 5);
  near(s.median, 4.5);
  near(s.sdP, 2);
  assert.deepEqual(s.mode, [4]);
  assert.equal(s.range, 7);
});

test("kompleksna števila in koreni polinomov", () => {
  const z = evalComplex("(1+2i)(3-i)");
  near(z[0], 5);
  near(z[1], 5);
  const q = polyRoots([1, 0, 1]).sort((a, b) => a[1] - b[1]);
  near(q[0][0], 0); near(q[0][1], -1); near(q[1][0], 0); near(q[1][1], 1);
  const cubic = polyRoots([1, -6, 11, -6]).map(([re]) => re).sort((a, b) => a - b);
  cubic.forEach((r, i) => near(r, i + 1));
});

test("matrike: determinanta, inverz, sistem", () => {
  const A = readMatrix("2 1\n1 3");
  near(M.det(A), 5);
  const inv = M.inverse(A);
  near(inv[0][0], 0.6);
  near(inv[0][1], -0.2);
  const sol = M.solve(readMatrix("1 1\n1 -1"), readMatrix("3\n1"));
  near(sol.x[0][0] ?? sol.x[0], 2);
  assert.ok(M.solve(readMatrix("1 1\n2 2"), readMatrix("1\n3")).none);
  assert.ok(M.solve(readMatrix("1 1\n2 2"), readMatrix("1\n2")).many);
});

test("številski sistemi", () => {
  const r = convertBase("255", 10);
  assert.equal(r[2], "11111111");
  assert.equal(r[16].toUpperCase(), "FF");
  assert.equal(convertBase("777", 8)[10], "511");
});

test("molska masa iz formule", () => {
  near(molarMass("H2SO4", MASSES).M, 98.072, 1e-4);
  near(molarMass("CuSO4·5H2O", MASSES).M, 249.677, 1e-4);
  near(molarMass("K3[Fe(CN)6]", MASSES).M, 329.247, 1e-4);
  near(molarMass("SO4^2-", MASSES).M, 96.056, 1e-4);
  assert.equal(molarMass("Xy2", MASSES).error, "element");
  assert.ok(molarMass("H2(O", MASSES).error);
});

test("periodni sistem: 118 elementov na pravih mestih", () => {
  assert.equal(ELEMENTS.length, 118);
  const by = (s) => ELEMENTS.find((e) => e.sym === s);
  assert.deepEqual([by("H").period, by("H").group], [1, 1]);
  assert.deepEqual([by("Fe").z, by("Fe").period, by("Fe").group], [26, 4, 8]);
  assert.deepEqual([by("Og").z, by("Og").group], [118, 18]);
  assert.equal(by("La").f, true);
  assert.equal(by("U").cat, "actinide");
  assert.equal(by("Cl").cat, "halogen");
  assert.equal(by("Ne").cat, "noble");
  assert.equal(by("Hg").sl, "živo srebro");
  near(MASSES.C, 12.011, 1e-3);
  assert.ok(MASSES.Tc > 0, "radioaktivni elementi imajo masno število");
  assert.equal(new Set(ELEMENTS.map((e) => e.cat)).size, CATEGORIES.length);
  assert.deepEqual(shells(11), [2, 8, 1]);
});

test("zbirka formul prek API", async () => {
  const app = createApp(openDb(":memory:"), { streamFn: async () => ({ text: "", content: [] }) });
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const r = await fetch(`${base}/api/formulas?book=KEM-OS`);
    assert.equal(r.status, 200);
    const body = await r.json();
    assert.equal(body.key, "KEM-OS");
    assert.ok(body.md.length > 100);
    assert.equal((await fetch(`${base}/api/formulas?book=../x`)).status, 404);
    assert.equal((await fetch(`${base}/api/formulas?book=ZGO-OS`)).status, 404);
  } finally {
    server.close();
  }
});
