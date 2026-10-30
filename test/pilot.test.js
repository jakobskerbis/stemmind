// Merjenje v pilotu (server/pilot.js): vprašanja na dan, strošek AI na učenca, obiski strani za starše.
import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { pilotReport } from "../server/pilot.js";

test("pilot report: questions per day, AI cost per student, parent page visits; admin only", async () => {
  const store = openDb(":memory:");
  const app = createApp(store, { accounts: false, scheduler: false, log: { error() {} } });
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const db = store.db;
    const a = db.prepare("INSERT INTO students (name, settings) VALUES ('Ana', '{}')").run().lastInsertRowid;
    const b = db.prepare("INSERT INTO students (name, settings) VALUES ('Bor', '{}')").run().lastInsertRowid;
    const conv = (s) => db.prepare("INSERT INTO conversations (student_id) VALUES (?)").run(s).lastInsertRowid;
    const ca = conv(a);
    const cb = conv(b);
    const msg = (c, role, when) => db.prepare("INSERT INTO messages (conversation_id, role, api_content, display_text, created_at) VALUES (?, ?, '\"x\"', 'x', datetime('now', ?))").run(c, role, when);
    for (let i = 0; i < 4; i++) msg(ca, "user", "-1 minute");
    msg(ca, "assistant", "-1 minute"); // odgovori se ne štejejo
    msg(cb, "user", "-1 day");
    msg(cb, "user", "-400 days"); // zunaj obdobja
    db.prepare("INSERT INTO usage (student_id, model, cost_usd, created_at) VALUES (?, 'haiku', 0.02, datetime('now', '-1 minute'))").run(a);
    db.prepare("INSERT INTO usage (student_id, model, cost_usd, created_at) VALUES (?, 'haiku', 0.04, datetime('now', '-1 day'))").run(b);

    // Obiski: navaden brskalnik dvakrat, robot in predogled povezave ne.
    const ua = { "User-Agent": "Mozilla/5.0 (iPhone)" };
    assert.equal((await fetch(`${base}/starsi.html`, { headers: ua })).status, 200);
    await fetch(`${base}/starsi.html?ime=Ana`, { headers: ua });
    await fetch(`${base}/starsi.html`, { headers: { "User-Agent": "facebookexternalhit/1.1" } });
    await fetch(`${base}/starsi.html`, { headers: { ...ua, "Sec-Purpose": "prefetch" } });
    await fetch(`${base}/placaj.html`, { headers: ua });
    await fetch(`${base}/index.html`, { headers: ua });

    const r = pilotReport(db, { days: 7 });
    assert.equal(r.rows.length, 7);
    assert.equal(r.totals.questions, 5);
    assert.equal(r.totals.askers, 2);
    assert.equal(r.rows.at(-1).questions, 4);
    assert.equal(r.totals.questionsPerAskerDay, 2.5); // 5 vprašanj / 2 učenca-dneva
    assert.equal(r.totals.aiUsd, 0.06);
    assert.equal(r.totals.aiUsers, 2);
    assert.ok(Math.abs(r.totals.aiEurPerStudentMonth - ((0.06 * 0.87) / 2) * (30 / 7)) < 0.001);
    assert.deepEqual(r.totals.visits, { starsi: 2, placaj: 1, sole: 0 });

    // Prek API (brez računov samo na računalniku s strežnikom); nesmiselni parametri ne podrejo poročila.
    const api = await (await fetch(`${base}/api/admin/pilot?days=abc&school[]=1`)).json();
    assert.equal(api.days, 30);
    assert.equal(api.totals.questions, 5);
    assert.equal(pilotReport(db, { days: 7, schoolId: 999 }).totals.questions, 0, "šola brez učencev");
  } finally {
    server.close();
  }
});
