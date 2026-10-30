import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { CONCEPTS, AREAS, makeQuestion, setNumberStyle, fr, poly, cx } from "../public/games/topics.js";
import { ENGINES, statement } from "../public/games/engines.js";
import { PACE, gameLock, isCleared, topicYear } from "../public/games/unlock.js";
import { LESSONS } from "../public/games/lessons.js";
import { getTopic } from "../server/curriculum.js";

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
          assert.ok(![q.q, q.a, ...q.w].some((x) => /\bNaN\b|undefined|Infinity|\bnull\b|\[object/.test(x)), where);
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
  // Vsaka vrsta igre ima zgodbo (poglavja) v slovenščini in angleščini.
  for (const e of ENGINES) for (const lang of ["sl", "en"]) {
    assert.ok(e.story?.[lang]?.length >= 3, `${e.id} ${lang}: ni zgodbe`);
    for (const [title, text] of e.story[lang]) assert.ok(title && text.length > 10, `${e.id} ${lang}`);
  }
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
    assert.equal(r.body.games["meteor:frac_add"].cleared, true); // 12 od 15 = 80 %
    assert.deepEqual(r.body.passed, []);
    assert.equal((await call(`/api/students/${s.id}/games/unlock`, { concept: "lin2", correct: 3 })).status, 400);
    assert.equal((await call(`/api/students/${s.id}/games/unlock`, { concept: "lin2", correct: 4 })).body.ok, true);
    r = await call(`/api/students/${s.id}/games`);
    assert.deepEqual(r.body.passed, ["lin2"]);
    assert.ok(Array.isArray(r.body.known));
  } finally {
    server.close();
  }
});

test("games: unlocking by knowledge and by game speed", () => {
  for (const e of ENGINES) assert.ok([1, 2, 3].includes(PACE[e.id]), `${e.id} nima hitrosti v unlock.js`);
  assert.ok(ENGINES.some((e) => PACE[e.id] === 1) && ENGINES.some((e) => PACE[e.id] === 2));
  const ids = new Set(CONCEPTS.map((c) => c.id));
  for (const [cid, topics] of Object.entries(LESSONS)) {
    assert.ok(ids.has(cid), `LESSONS: neznan pojem ${cid}`);
    for (const t of topics) assert.ok(getTopic(t), `LESSONS ${cid}: tema ${t} ne obstaja`);
  }
  assert.equal(topicYear("MAT-OS-7/x"), 7);
  assert.equal(topicYear("FIZ-SS-2/x"), 11);
  assert.ok(isCleared(8, 2) && !isCleared(8, 3) && !isCleared(7, 0));
  const calm = ENGINES.find((e) => PACE[e.id] === 1).id;
  const mid = ENGINES.find((e) => PACE[e.id] === 2).id;
  const fast = ENGINES.find((e) => PACE[e.id] === 3).id;
  const c = CONCEPTS.find((x) => x.id === "lin2");
  const st = (o = {}) => ({ year: c.year, known: new Set(), passed: new Set(), games: {}, ...o });
  // Snov iz višjega ali tega razreda je zaklenjena, iz nižjega odprta (mirne igre).
  assert.equal(gameLock(calm, c, st()).need, "learn");
  assert.equal(gameLock(calm, c, st({ year: c.year + 1 })), null);
  assert.equal(gameLock(calm, c, st({ passed: new Set(["lin2"]) })), null);
  for (const t of LESSONS.lin2 || []) assert.equal(gameLock(calm, c, st({ known: new Set([t]) })), null);
  // Hitrejše igre šele po opravljeni počasnejši igri te snovi.
  const ok = st({ passed: new Set(["lin2"]) });
  assert.deepEqual(gameLock(mid, c, ok), { need: "pace", pace: 1 });
  ok.games[`${calm}:lin2`] = { cleared: true };
  ok.games[`${mid}:frac_add`] = { cleared: true }; // druga snov ne šteje
  assert.equal(gameLock(mid, c, ok), null);
  assert.deepEqual(gameLock(fast, c, ok), { need: "pace", pace: 2 });
  ok.games[`${mid}:lin2`] = { cleared: true };
  assert.equal(gameLock(fast, c, ok), null);
});

test("avatar: coins from games, buying and wearing items", async () => {
  const { ITEMS, ITEM, SLOTS, avatarSvg, cleanAvatar, DEFAULT_AVATAR } = await import("../public/avatar.js");
  // Vsak predmet ima znan predal in izriše veljaven SVG.
  assert.equal(new Set(ITEMS.map((x) => x.id)).size, ITEMS.length);
  for (const slot of SLOTS) assert.ok(ITEMS.some((x) => x.slot === slot && x.price === 0), `${slot}: ni brezplačnega`);
  for (const x of ITEMS) {
    assert.ok(SLOTS.includes(x.slot) && x.name.sl && x.name.en, x.id);
    const svg = avatarSvg({ [x.slot]: x.id });
    assert.ok(svg.startsWith("<svg") && svg.endsWith("</svg>") && !/undefined|NaN/.test(svg), x.id);
  }
  assert.deepEqual(cleanAvatar({ hat: "hat_crown", eyes: "mouth_grin", body: "nope" }, []), DEFAULT_AVATAR);
  assert.deepEqual(cleanAvatar({ hat: "hat_crown" }, ["hat_crown"]).hat, ["hat_crown"]);

  const store = openDb(":memory:");
  const app = createApp(store, {});
  const server = app.listen(0);
  const base = `http://localhost:${server.address().port}`;
  const call = async (p, body) => {
    const res = await fetch(base + p, { method: body ? "POST" : "GET", headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
    return { status: res.status, body: await res.json() };
  };
  try {
    const s = (await call("/api/students", { name: "Kupec", settings: { curriculum_level: "8. razred" } })).body;
    let r = await call(`/api/students/${s.id}/avatar`);
    assert.equal(r.body.coins, 0);
    assert.equal((await call(`/api/students/${s.id}/avatar/buy`, { item: "hat_cap" })).status, 400); // premalo kovancev
    r = await call(`/api/students/${s.id}/games/result`, { game: "maze:frac_add", score: 10, correct: 30, wrong: 1, tier: 1 });
    assert.equal(r.body.coins, 30);
    r = await call(`/api/students/${s.id}/avatar/buy`, { item: "hat_cap" });
    assert.equal(r.body.coins, 30 - ITEM.hat_cap.price);
    assert.ok(r.body.owned.includes("hat_cap"));
    // Nošnja: samo kupljeni ali brezplačni deli.
    r = await call(`/api/students/${s.id}/avatar`, { equipped: { hat: "hat_cap", outfit: "outfit_armor" } });
    assert.deepEqual(r.body.equipped.hat, ["hat_cap"]);
    assert.deepEqual(r.body.equipped.outfit, []);
    assert.equal((await call(`/api/students/${s.id}/avatar`, { equipped: { name: "x" } })).status, 400);
    // Dnevna meja kovancev.
    for (let i = 0; i < 6; i++) await call(`/api/students/${s.id}/games/result`, { game: "maze:frac_add", score: 1, correct: 40, wrong: 0, tier: 1 });
    assert.equal((await call(`/api/students/${s.id}/avatar`)).body.earnedToday, 150);
  } finally {
    server.close();
  }
});

test("games: lock is switched off (j 2026-10-29: »Odstrani zaporo iger«)", async () => {
  const { LOCKS_ON } = await import("../public/games/unlock.js");
  assert.equal(LOCKS_ON, false);
});

test("games: childhood questionnaire genres map to existing games; tutor can change the choice", async () => {
  const { GENRES, cleanChildhood, childhoodEngines } = await import("../public/games/childhood.js");
  const sl = (await import("../public/i18n/sl.js")).default;
  const ids = new Set(ENGINES.map((e) => e.id));
  for (const g of GENRES) {
    assert.ok(g.engines.length && g.engines.every((e) => ids.has(e)), g.id);
    assert.ok(sl[`games.g.${g.id}`], `games.g.${g.id}`);
  }
  assert.equal(cleanChildhood(null), null);
  assert.deepEqual(cleanChildhood(["snake", "x", "snake", " cards "]), ["snake", "cards"]);
  assert.deepEqual(childhoodEngines(["space", "cards"]), ["invaders", "meteor", "cards"]);
  const store = openDb(":memory:");
  const s = store.createStudent("Ana", {});
  assert.equal(s.settings.game_childhood, null);
  assert.deepEqual(store.updateStudent(s.id, { settings: { game_childhood: ["blocks", "nope"] } }).settings.game_childhood, ["blocks"]);
  const { createSettingsTools } = await import("../server/chat-settings.js");
  const t = createSettingsTools({ store, studentId: s.id, conversationId: 1, pending: new Map() });
  const r = JSON.parse((await t.onToolUse("change_settings", { changes: { game_childhood: ["match", "pet"] } })).content);
  assert.equal(r.status, "applied");
  assert.deepEqual(store.getStudent(s.id).settings.game_childhood, ["match", "pet"]);
  const bad = JSON.parse((await t.onToolUse("change_settings", { changes: { game_childhood: ["tetris"] } })).content);
  assert.equal(bad.status, "error");
});

test("games: ratings, weekly vote and the anonymous trends summary", async () => {
  const { weekKey } = await import("../public/games/wishes.js");
  const { gameTrends } = await import("../server/games.js");
  assert.equal(weekKey(new Date("2026-11-04T05:00:00Z")), "2026-11-04"); // sreda
  assert.equal(weekKey(new Date("2026-11-03T23:00:00Z")), "2026-10-28"); // torek → prejšnja sreda
  const store = openDb(":memory:");
  const app = createApp(store, {});
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const post = (p, body) => fetch(base + p, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  try {
    const ids = ["A", "B", "C"].map((n) => store.createStudent(n, {}).id);
    assert.equal((await post(`/api/students/${ids[0]}/games/rate`, { engine: "nope", up: true })).status, 400);
    assert.equal((await post(`/api/students/${ids[0]}/games/wish`, { genre: "tetris" })).status, 400);
    assert.equal((await post(`/api/students/${ids[0]}/games/rate`, { engine: "cards", up: true })).status, 200);
    assert.equal(gameTrends(store.db).enough, false); // premalo učencev: brez števil
    await post(`/api/students/${ids[1]}/games/rate`, { engine: "cards", up: false });
    await post(`/api/students/${ids[1]}/games/wish`, { genre: "golf" });
    await post(`/api/students/${ids[2]}/games/wish`, { genre: "darts" });
    await post(`/api/students/${ids[2]}/games/wish`, { genre: "golf" }); // glas se zamenja
    const tr = gameTrends(store.db);
    assert.equal(tr.enough, true);
    assert.deepEqual(tr.ratings.cards, { up: 1, down: 1 });
    assert.deepEqual(tr.wishes[tr.week], { golf: 2 });
    assert.ok(!JSON.stringify(tr).includes('"A"'));
    const g = await (await fetch(`${base}/api/students/${ids[2]}/games`)).json();
    assert.equal(g.wish, "golf");
    assert.equal((await fetch(`${base}/api/games/trends`)).status, 200); // na računalniku s strežnikom
    assert.equal((await fetch(`${base}/api/games/trends`, { headers: { "X-Forwarded-For": "203.0.113.5" } })).status, 403); // od drugod ne
    // trije igralci in en glas: samo igranje ne odpre števil (glas bi bil razkrit)
    const st2 = openDb(":memory:");
    createApp(st2, {});
    for (const n of ["D", "E", "F"]) st2.db.prepare("INSERT INTO game_scores (student_id, game, best) VALUES (?, 'cards:frac_add', 1)").run(st2.createStudent(n, {}).id);
    st2.db.prepare("INSERT INTO game_wishes (student_id, week, genre) VALUES (1, ?, 'golf')").run(weekKey());
    assert.equal(gameTrends(st2.db).enough, false);
  } finally {
    server.close();
  }
});
