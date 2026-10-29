import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { getTopic, getPath } from "../server/curriculum.js";
import { KNOWLEDGE, COLLECTIONS, PASS, PASS_REWARDS, RARITY_TIER, seasonOf, seasonLabel, topicTier } from "../public/zbirke.js";
import { avatarSvg, cleanAvatar, SLOTS, ITEMS } from "../public/avatar.js";
import { publicAvatar } from "../server/avatar.js";

test("zbirke: every item draws, every condition topic exists at the item's level, at most 2 % legendary", () => {
  assert.equal(new Set(ITEMS.map((x) => x.id)).size, ITEMS.length);
  for (const x of KNOWLEDGE) {
    assert.ok(SLOTS.includes(x.slot) && x.name.sl && x.name.en && RARITY_TIER[x.rarity], x.id);
    const id = x.collection === "pass" ? `${x.id}~2026-1` : x.id;
    const svg = avatarSvg({ [x.slot]: id });
    assert.ok(svg.startsWith("<svg") && svg.endsWith("</svg>") && !/undefined|NaN|null/.test(svg), x.id);
    for (const tid of x.need?.t || []) {
      const t = getTopic(tid);
      assert.ok(t, `${x.id}: ni teme ${tid}`);
      assert.ok(topicTier(getPath(t.path)) >= RARITY_TIER[x.rarity], `${x.id}: ${tid} je pod ravnjo ${x.rarity}`);
    }
    // Zgled (prva tema) je natanko na ravni redkosti: pogoj, ki ga vidi učenec, ustreza redkosti.
    if (x.need?.t) assert.equal(topicTier(getPath(getTopic(x.need.t[0]).path)), RARITY_TIER[x.rarity], `${x.id}: zgled`);
  }
  assert.ok(KNOWLEDGE.filter((x) => x.rarity === "legendary").length / KNOWLEDGE.length <= 0.02);
  for (const c of COLLECTIONS) {
    const n = KNOWLEDGE.filter((x) => x.collection === c.id && !x.set).length;
    const set = KNOWLEDGE.find((x) => x.collection === c.id && x.set);
    assert.ok(set && set.need.own < n, c.id);
  }
  assert.deepEqual(PASS_REWARDS.map((r) => r.tier).filter((t) => t > PASS.tiers), []);
});

test("zbirke: seasons follow the school half-years", () => {
  assert.equal(seasonOf(new Date("2026-10-29T12:00:00Z")).key, "2026-1");
  assert.equal(seasonOf(new Date("2027-01-31T12:00:00Z")).key, "2026-1");
  assert.equal(seasonOf(new Date("2027-02-01T12:00:00Z")).key, "2026-2");
  assert.equal(seasonOf(new Date("2027-08-20T12:00:00Z")).key, "2026-2");
  assert.equal(seasonLabel("2026-2"), "26/27 II");
});

test("zbirke: seasonal ids and unknown parts are cleaned", () => {
  assert.equal(cleanAvatar({ outfit: "pass_coat~2026-1" }, ["pass_coat~2026-1"]).outfit, "pass_coat~2026-1");
  assert.equal(cleanAvatar({ outfit: "pass_coat" }, ["pass_coat"]).outfit, "outfit_none");
  assert.equal(cleanAvatar({ outfit: "pass_coat~2026-1" }, []).outfit, "outfit_none");
  assert.equal(cleanAvatar({ badge: "el_fe~2026-1" }, ["el_fe~2026-1"]).badge, "badge_none");
  assert.equal(cleanAvatar({ fx: "el_fe" }, ["el_fe"]).fx, "fx_none"); // napačen predal
  assert.equal(publicAvatar(JSON.stringify({ badge: "el_fe", outfit: "pass_coat~2026-1", hat: "<script>" })).outfit, "pass_coat~2026-1");
});

test("zbirke: items unlock only from mastered topics and the learning pass, never from coins", async () => {
  const store = openDb(":memory:");
  const app = createApp(store, {});
  const server = app.listen(0);
  const base = `http://localhost:${server.address().port}`;
  const call = async (p, body) => {
    const res = await fetch(base + p, { method: body ? "POST" : "GET", headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
    return { status: res.status, body: await res.json() };
  };
  const master = (sid, topic, source) =>
    store.db
      .prepare("INSERT INTO topic_state (student_id, topic_id, status, source, mastered_at) VALUES (?, ?, 'mastered', ?, datetime('now')) ON CONFLICT(student_id, topic_id) DO UPDATE SET status = 'mastered', source = excluded.source")
      .run(sid, topic, source);
  const xp = (sid, amount, reason, daysAgo = 0) =>
    store.db.prepare("INSERT INTO xp_events (student_id, amount, reason, created_at) VALUES (?, ?, ?, datetime('now', ?))").run(sid, amount, reason, `-${daysAgo} days`);
  try {
    const s = (await call("/api/students", { name: "Zbiralka", settings: { curriculum_level: "8. razred" } })).body;
    let r = await call(`/api/students/${s.id}/zbirke`);
    assert.equal(r.body.items.length, 0);
    assert.equal(r.body.pass.tier, 0);
    assert.ok(r.body.hints.el_fe.name && r.body.hints.el_fe.path, "pogoj je viden vnaprej");

    // »Označi kot obvladano« ne odklene ničesar, vaje in pogovor z inštruktorjem pa.
    master(s.id, "KEM-OS-8/kovine", "manual");
    assert.equal((await call(`/api/students/${s.id}/zbirke`)).body.items.length, 0);
    master(s.id, "KEM-OS-8/kovine", "practice");
    r = await call(`/api/students/${s.id}/zbirke`);
    assert.deepEqual(r.body.fresh, ["el_fe"]);
    assert.equal(r.body.items[0].topic.id, "KEM-OS-8/kovine");
    // Ključna beseda: sorodna tema na višji ravni (SŠ) odklene tudi navaden predmet.
    master(s.id, "KEM-SS-1/periodni-sistem", "chat");
    assert.ok((await call(`/api/students/${s.id}/zbirke`)).body.items.some((i) => i.id === "el_ne"));
    // Ključna beseda na prenizki ravni ne odklene epskega predmeta (Cl je SŠ).
    master(s.id, "KEM-OS-8/nevtralizacija-in-soli", "practice");
    assert.ok(!(await call(`/api/students/${s.id}/zbirke`)).body.items.some((i) => i.id === "el_cl"));

    // Predmeta za znanje ni mogoče kupiti; obleči ga lahko, ko ga imaš.
    xp(s.id, 0, "x");
    assert.equal((await call(`/api/students/${s.id}/avatar/buy`, { item: "el_ag" })).status, 400);
    r = await call(`/api/students/${s.id}/avatar`, { equipped: { badge: "el_fe", fx: "fx_spark" } });
    assert.equal(r.body.equipped.badge, "el_fe");
    assert.equal(r.body.equipped.fx, "fx_none");
    assert.ok(r.body.owned.includes("el_fe"));

    // Vitrina: samo svoji predmeti, največ trije.
    r = await call(`/api/students/${s.id}/zbirke/vitrina`, { items: ["el_fe", "el_ag", "el_ne", "el_fe"] });
    assert.deepEqual(r.body.showcase, ["el_fe", "el_ne"]);
    assert.equal((await call(`/api/students/${s.id}/zbirke/vitrina`, { items: "el_fe" })).status, 400);

    // Učni pass: XP iz učenja, največ dayCap na dan, brez XP iz iger.
    const season = seasonOf().key;
    xp(s.id, 5000, "igra: maze:add");
    xp(s.id, 5000, "pravilno");
    r = await call(`/api/students/${s.id}/zbirke`);
    assert.equal(r.body.pass.xp, PASS.dayCap);
    // Dnevi v tej sezoni (prvi dnevi sezone: prejšnji dnevi ne štejejo), dovolj za stopnjo 5.
    const inSeason = (d) => new Date(Date.now() - d * 86400000).toISOString().slice(0, 10) >= seasonOf().from;
    let days = 1;
    for (let d = 1; days * PASS.dayCap < 5 * PASS.perTier; d++) {
      xp(s.id, PASS.dayCap, "dnevni trening", d);
      if (inSeason(d)) days += 1;
      if (d > 60) break;
    }
    r = await call(`/api/students/${s.id}/zbirke`);
    assert.equal(r.body.pass.tier, Math.floor((days * PASS.dayCap) / PASS.perTier));
    if (days * PASS.dayCap >= 5 * PASS.perTier) {
      assert.ok(r.body.fresh.includes(`pass_board~${season}`), "nagrada stopnje 5");
      r = await call(`/api/students/${s.id}/avatar`, { equipped: { bg: `pass_board~${season}` } });
      assert.equal(r.body.equipped.bg, `pass_board~${season}`);
    }

    // Odvzem: predmet izgine, zapis ostane in se ne podeli znova.
    const { Knowledge } = await import("../server/zbirke.js");
    const k = new Knowledge(store.db);
    assert.ok(k.revoke(s.id, "el_fe", "test"));
    assert.ok(!k.owned(s.id).includes("el_fe"));
    k.sync(s.id);
    assert.ok(!k.owned(s.id).includes("el_fe"));
    assert.equal(store.db.prepare("SELECT revoke_reason FROM knowledge_items WHERE student_id = ? AND item = 'el_fe'").get(s.id).revoke_reason, "test");

    // Legendarni: tri tekmovalne teme, vsaj ena potrjena v pogovoru.
    for (const t of ["MAT-TEK-OS/deljivost-in-ostanki", "MAT-TEK-OS/dirichletovo-nacelo", "FIZ-TEK-OS/toplotne-bilance"]) master(s.id, t, "practice");
    assert.ok(!k.owned(s.id).includes("fx_doppler") && !k.sync(s.id).includes("fx_doppler"));
    master(s.id, "KEM-TEK-OS/raztopine-in-masni-delez", "chat");
    assert.ok(k.sync(s.id).includes("fx_doppler"));
  } finally {
    server.close();
  }
});

test("day streak: today does not break it yet, one missed day a week is frozen", async () => {
  const store = openDb(":memory:");
  const { Progress } = await import("../server/progress.js");
  const p = new Progress(store);
  const sid = store.db.prepare("INSERT INTO students (name, settings) VALUES ('Niz', '{}')").run().lastInsertRowid;
  const on = (...days) => {
    store.db.prepare("DELETE FROM xp_events WHERE student_id = ?").run(sid);
    for (const d of days) store.db.prepare("INSERT INTO xp_events (student_id, amount, reason, created_at) VALUES (?, 5, 'x', datetime('now', ?))").run(sid, `-${d} days`);
  };
  on(1, 2, 3);
  assert.equal(p.dayStreak(sid), 3); // danes še ni vadil: niz ostane
  on(0, 2, 3);
  assert.equal(p.dayStreak(sid), 3); // včeraj zamrznjen
  on(0, 2, 4, 5);
  assert.equal(p.dayStreak(sid), 2); // druga luknja v istem tednu prekine niz
  on(0, 2, 3, 4, 5, 6, 7, 8, 10);
  assert.equal(p.dayStreak(sid), 9); // luknji 8 dni narazen: obe zamrznjeni
  on(0, 3);
  assert.equal(p.dayStreak(sid), 1); // dva zaporedna zamujena dneva
});
