import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { summaryMarkdown, normalizeFeedback, purgeOldWishes } from "../server/feedback.js";
import { Avatars, exportTokenOk } from "../server/avatar.js";
import { ADDED, ITEM, isNew, isNewDate } from "../public/avatar.js";

// Tedenske posodobitve kozmetike (j, 30. 10. 2026; docs/kozmetika-posodobitve.md).
test("oznaka Novo velja 7 dni od dneva, ko je predmet prišel", () => {
  const day = Date.parse("2026-10-30T00:00:00Z");
  assert.ok(isNewDate("2026-10-30", day + 3600e3));
  assert.ok(isNewDate("2026-10-30", day + 6.9 * 864e5));
  assert.ok(!isNewDate("2026-10-30", day + 7 * 864e5));
  assert.ok(!isNewDate("2026-10-30", day - 1));
  assert.ok(!isNewDate(undefined, day));
  assert.ok(isNew("hat_flame", day + 864e5) && !isNew("hat_cap", day + 864e5));
  for (const [id, d] of Object.entries(ADDED)) assert.ok(ITEM[id] && /^\d{4}-\d{2}-\d{2}$/.test(d), id);
});

test("želje za trgovino: shranijo se kot cosmetics, v povzetku v svojem razdelku, največ 5 na dan", async () => {
  assert.equal(normalizeFeedback({ kind: "cosmetics", ideas: "piratski klobuk" }).kind, "cosmetics");
  assert.equal(normalizeFeedback({ kind: "bogus", ideas: "x" }).kind, "form");
  const md = summaryMarkdown([{ id: 1, kind: "cosmetics", ideas: "piratski klobuk", name: "Ana", ratings: {}, interview: [] }]);
  assert.match(md, /Želje za trgovino z avatarji \(1\)/);
  assert.match(md, /piratski klobuk/);
  assert.match(md, /0 mnenj/);

  const store = openDb(":memory:");
  const server = createApp(store, {}).listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const post = (p, body) => fetch(base + p, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  try {
    const s = await (await post("/api/students", { name: "Ana" })).json();
    for (let i = 0; i < 5; i++) assert.equal((await post(`/api/students/${s.id}/feedback`, { kind: "cosmetics", ideas: `želja ${i}` })).status, 201);
    assert.equal((await post(`/api/students/${s.id}/feedback`, { kind: "cosmetics", ideas: "še ena" })).status, 429);
    assert.equal((await post(`/api/students/${s.id}/feedback`, { ideas: "običajno mnenje" })).status, 201);
  } finally {
    server.close();
  }
});

test("trendi avatarjev: samo števila in šele od 3 učencev naprej", () => {
  const store = openDb(":memory:");
  const av = new Avatars(store.db);
  const ids = ["A", "B", "C"].map((n) => store.createStudent(n).id);
  av.equip(ids[0], { hat: ["hat_cap"] });
  av.equip(ids[1], { hat: ["hat_cap"] });
  assert.deepEqual(av.trends(), { students: 2, enough: false });
  av.equip(ids[2], { body: "body_gold" });
  const t = av.trends();
  assert.equal(t.enough, true);
  assert.equal(t.students, 3);
  assert.equal(t.worn.hat_cap, undefined); // hat_cap ni kupljen, equip ga ne obleče
  assert.equal(t.worn.body_gold, undefined); // samo en učenec: ni v seštevku
  for (const id of ids) av.equip(id, { body: "body_gold" });
  assert.equal(av.trends().worn.body_gold, 3);
  assert.ok(!JSON.stringify(t).includes("\"A\""));
});

test("izvoz za tedensko posodobitev: ključ v stalnem času, želje brez imen", async () => {
  const env = { EVKLID_EXPORT_TOKEN: "x".repeat(32) };
  const req = (h) => ({ headers: h ? { authorization: h } : {} });
  assert.ok(exportTokenOk(req(`Bearer ${"x".repeat(32)}`), env));
  assert.ok(!exportTokenOk(req(`Bearer ${"x".repeat(31)}`), env));
  assert.ok(!exportTokenOk(req(), env));
  assert.ok(!exportTokenOk(req("Bearer short"), { EVKLID_EXPORT_TOKEN: "short" })); // prekratek ključ ne velja
  assert.ok(!exportTokenOk(req("Bearer "), { EVKLID_EXPORT_TOKEN: "" }));

  const store = openDb(":memory:");
  const server = createApp(store, {}).listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const post = (p, body) => fetch(base + p, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  try {
    const s = await (await post("/api/students", { name: "Ana Novak" })).json();
    await post(`/api/students/${s.id}/feedback`, { kind: "cosmetics", ideas: "zmajevo jajce", lang: "sl" });
    const out = await (await fetch(base + "/api/kozmetika/export")).json(); // lokalno: dovoljeno
    assert.equal(out.wishes.length, 1);
    assert.deepEqual(Object.keys(out.wishes[0]).sort(), ["day", "lang", "text"]);
    assert.equal(out.wishes[0].text, "zmajevo jajce");
    assert.ok(!JSON.stringify(out).includes("Ana"));
    assert.equal(out.trends.enough, false);
  } finally {
    server.close();
  }
});

test("želje za trgovino se po 90 dneh izbrišejo, ostala mnenja ostanejo", () => {
  const store = openDb(":memory:");
  purgeOldWishes(store.db);
  const ins = store.db.prepare("INSERT INTO feedback (kind, ideas, created_at) VALUES (?, ?, datetime('now', ?))");
  ins.run("cosmetics", "stara želja", "-91 days");
  ins.run("cosmetics", "nova želja", "-89 days");
  ins.run("form", "staro mnenje", "-200 days");
  assert.equal(purgeOldWishes(store.db), 1);
  assert.deepEqual(store.db.prepare("SELECT ideas FROM feedback ORDER BY id").all().map((r) => r.ideas), ["nova želja", "staro mnenje"]);
});
