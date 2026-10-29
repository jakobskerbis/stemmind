import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { CONCEPTS, AREAS, makeQuestion, setNumberStyle, fr, poly, cx } from "../public/games/topics.js";
import { ENGINES, statement } from "../public/games/engines.js";

test("games: every concept gives valid questions on every level, in both number styles", () => {
  for (const lang of ["sl", "en"]) {
    setNumberStyle(lang);
    for (const c of CONCEPTS) {
      for (let tier = 1; tier <= 3; tier++) {
        for (let i = 0; i < 150; i++) {
          const q = c.gen(tier);
          const where = `${lang} ${c.id} ${tier}: ${JSON.stringify(q)}`;
          assert.ok(q.q && q.a, where);
          assert.ok(q.w.length >= 3, `premalo napačnih – ${where}`);
          assert.ok(!q.w.includes(q.a), `napačen = pravilen – ${where}`);
          assert.equal(new Set(q.w).size, q.w.length, `podvojen – ${where}`);
          assert.ok(!/NaN|undefined|Infinity|null|\[object/.test(q.q + q.a + q.w.join()), where);
        }
      }
    }
  }
  setNumberStyle("sl");
});

test("games: answers are right (spot checks of the formatting helpers)", () => {
  setNumberStyle("sl");
  assert.equal(fr(6, 8), "3/4");
  assert.equal(fr(-4, 2), "−2");
  assert.equal(poly([1, -3, 2]), "x² − 3x + 2");
  assert.equal(poly([-1, 0, 0]), "−x²");
  assert.equal(cx(3, -1), "3 − i");
  assert.equal(cx(0, 2), "2i");
  // Rešitve enačb iz generatorja res zadoščajo enačbi.
  const lin = CONCEPTS.find((c) => c.id === "lin2");
  for (let i = 0; i < 200; i++) {
    const q = lin.gen(1);
    const [, a, b, rhs] = q.q.replace(/−/g, "-").match(/^(-?\d*)x ([+-] \d+) = (-?\d+)$/) || [];
    if (!a && a !== "") continue;
    const k = a === "" ? 1 : a === "-" ? -1 : Number(a);
    const x = Number(q.a.replace("x = ", "").replace("−", "-"));
    assert.equal(k * x + Number(b.replace(" ", "")), Number(rhs), q.q);
  }
});

test("games: at least 10 games in every area, unique ids, statements for the sorter", () => {
  for (const [id] of AREAS) {
    const n = CONCEPTS.filter((c) => c.area === id).length * ENGINES.length;
    assert.ok(n >= 10, `${id}: samo ${n} iger`);
  }
  assert.equal(new Set(CONCEPTS.map((c) => c.id)).size, CONCEPTS.length);
  assert.equal(new Set(ENGINES.map((e) => e.id)).size, ENGINES.length);
  assert.ok(CONCEPTS.length * ENGINES.length >= 300);
  assert.deepEqual(statement("? : 30 = 3 : 6", "15"), ["", "15 : 30 = 3 : 6"]);
  assert.deepEqual(statement("Praštevilo?", "17"), ["Praštevilo?", "17"]);
  assert.deepEqual(statement("2x = 8", "x = 4"), ["2x = 8", "⇒ x = 4"]);
  assert.deepEqual(statement("7 · 8", "56"), ["7 · 8", "= 56"]);
  assert.ok(makeQuestion("int_def", 3).q.includes("∫"));
});

test("games API: best score, level and capped XP", async () => {
  const store = openDb(":memory:");
  const app = createApp(store, {});
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const call = async (p, body) => {
    const res = await fetch(base + p, { method: body ? "POST" : "GET", headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
    return { status: res.status, body: await res.json() };
  };
  try {
    const s = (await call("/api/students", { name: "Igralec", settings: { curriculum_level: "8. razred" } })).body;
    let r = await call(`/api/students/${s.id}/games`);
    assert.equal(r.body.year, 8);
    assert.deepEqual(r.body.games, {});
    assert.equal((await call(`/api/students/${s.id}/games/result`, { game: "bad id", score: 1 })).status, 400);
    r = await call(`/api/students/${s.id}/games/result`, { game: "meteor:frac_add", score: 120, correct: 12, wrong: 3, tier: 2 });
    assert.equal(r.body.xp, 6);
    assert.equal(r.body.best, 120);
    r = await call(`/api/students/${s.id}/games/result`, { game: "meteor:frac_add", score: 300, correct: 500, wrong: 0, tier: 3 });
    assert.equal(r.body.xp, 20); // največ 20 na igro
    assert.equal(r.body.newBest, true);
    r = await call(`/api/students/${s.id}/games/result`, { game: "runner:lin2", score: 50, correct: 100, wrong: 0, tier: 1 });
    r = await call(`/api/students/${s.id}/games/result`, { game: "runner:lin2", score: 10, correct: 100, wrong: 0, tier: 1 });
    assert.equal(r.body.xp, 14); // 60 na dan
    assert.equal(r.body.best, 50);
    r = await call(`/api/students/${s.id}/games`);
    assert.equal(r.body.games["meteor:frac_add"].best, 300);
    assert.equal(r.body.games["meteor:frac_add"].plays, 2);
    assert.equal(r.body.concepts.frac_add, 3);
    assert.equal(r.body.xpToday, 60);
  } finally {
    server.close();
  }
});
