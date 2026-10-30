// Šole, učitelji, licence in razredne naloge (server/schools.js).
import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { schoolAccess } from "../server/schools.js";

const YEAR = new Date().getFullYear();
const TOPIC = "MAT-OS-7/razsirjanje-in-krajsanje-ulomkov";

async function withServer(fn) {
  const store = openDb(":memory:");
  const calls = [];
  const fetchFn = async (url, init = {}) => {
    calls.push({ host: new URL(url).host, body: init.body ? JSON.parse(init.body) : null });
    return { ok: true, status: 200, json: async () => ({ id: "x" }) };
  };
  const app = createApp(store, { accounts: true, scheduler: false, stripeKey: "", resendKey: "re_x", fetchFn, log: { error() {} } });
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const client = () => {
    const jar = {};
    return async (path, opts = {}) => {
      const res = await fetch(base + path, {
        method: opts.method || "GET",
        redirect: "manual",
        headers: { "Content-Type": "application/json", cookie: Object.entries(jar).map(([k, v]) => `${k}=${v}`).join("; ") },
        body: opts.body ? JSON.stringify(opts.body) : undefined,
      });
      for (const c of res.headers.getSetCookie()) {
        const [kv] = c.split(";");
        jar[kv.slice(0, kv.indexOf("="))] = kv.slice(kv.indexOf("=") + 1);
      }
      const type = res.headers.get("content-type") || "";
      return { status: res.status, headers: res.headers, body: type.includes("json") ? await res.json() : await res.text() };
    };
  };
  const register = async (call, email, verify = true) => {
    const r = await call("/api/auth/register", { method: "POST", body: { email, password: "geslo1234", accept_privacy: true, birth_date: "1985-04-12" } });
    assert.equal(r.status, 201, JSON.stringify(r.body));
    if (verify) {
      const mail = calls.filter((c) => c.host === "api.resend.com").at(-1);
      assert.equal((await call(/\/api\/auth\/verify\?token=[\w-]+/.exec(mail.body.text)[0])).status, 302);
    }
  };
  try {
    await fn({ client, store, register });
  } finally {
    server.close();
  }
}

test("teacher: school, colleague, class with grade and subject; teacher account needs no plan", async () => {
  await withServer(async ({ client, store, register }) => {
    const t = client();
    await register(t, "ucitelj@sola.si");
    store.db.prepare("UPDATE parents SET trial_ends_at = '2020-01-01T00:00:00Z'").run(); // brez preizkusa in naročnine
    const sch = await t("/api/schools", { method: "POST", body: { name: "OŠ Prule", place: "Ljubljana", stage: "OS" } });
    assert.equal(sch.status, 201);
    assert.equal(sch.body.role, "admin");
    assert.equal(sch.body.licence, null);

    // Nepotrjen e-naslov ne more ustvariti šole.
    const u = client();
    await register(u, "nepotrjen@sola.si", false);
    assert.equal((await u("/api/schools", { method: "POST", body: { name: "OŠ X" } })).status, 403);

    // Sodelavec se pridruži s kodo šole.
    const c = client();
    await register(c, "sodelavka@sola.si");
    assert.equal((await c("/api/schools/join", { method: "POST", body: { code: "NAPACNA1" } })).status, 404);
    const j = await c("/api/schools/join", { method: "POST", body: { code: sch.body.inviteCode.toLowerCase() } });
    assert.equal(j.status, 201);
    assert.equal(j.body.role, "teacher");
    assert.equal(j.body.teachers, 2);

    const cls = await t("/api/teacher/classes", { method: "POST", body: { name: "7.a", schoolId: sch.body.id, path: "MAT-OS-7" } });
    assert.equal(cls.status, 201);
    assert.deepEqual([cls.body.grade, cls.body.subject, cls.body.path, cls.body.schoolId], [7, "MAT", "MAT-OS-7", sch.body.id]);
    assert.equal((await t("/api/teacher/classes", { method: "POST", body: { name: "x", path: "UNI-nekaj" } })).status, 400);
    // Tuja šola ne.
    const other = client();
    await register(other, "drug@sola.si");
    assert.equal((await other("/api/teacher/classes", { method: "POST", body: { name: "8.b", schoolId: sch.body.id } })).status, 404);
    assert.equal((await other(`/api/teacher/classes/${cls.body.code}/overview`)).status, 403);

    const home = (await t("/api/teacher/home")).body;
    assert.equal(home.schools.length, 1);
    assert.equal(home.classes[0].name, "7.a");
    const topics = (await t("/api/teacher/topics?path=MAT-OS-7")).body;
    assert.ok(topics.some((u) => u.topics.some((x) => x.id === TOPIC)));
    assert.equal((await t("/api/teacher/topics?path=nic")).status, 404);
  });
});

test("private space: teacher sees only assignment results and XP; licence seats; export and transfer", async () => {
  await withServer(async ({ client, store, register }) => {
    const db = store.db;
    const t = client();
    await register(t, "ucitelj@sola.si");
    const sch = (await t("/api/schools", { method: "POST", body: { name: "OŠ Prule" } })).body;
    const cls = (await t("/api/teacher/classes", { method: "POST", body: { name: "7.a", schoolId: sch.id, path: "MAT-OS-7" } })).body;
    const a = await t(`/api/teacher/classes/${cls.code}/assignments`, { method: "POST", body: { topicId: TOPIC, due: "2026-12-01" } });
    assert.equal(a.status, 201);
    assert.equal((await t(`/api/teacher/classes/${cls.code}/assignments`, { method: "POST", body: { topicId: "ne/obstaja" } })).status, 400);
    assert.equal((await t(`/api/teacher/classes/${cls.code}/assignments`, { method: "POST", body: { topicId: TOPIC, due: "jutri" } })).status, 400);

    // Dva otroka iz dveh družin se pridružita.
    const kids = [];
    for (const [mail, name] of [["a@primer.si", "Ana"], ["b@primer.si", "Bor"]]) {
      const p = client();
      await register(p, mail);
      const id = (await p("/api/students", { method: "POST", body: { name, birth_year: YEAR - 12, consent: true } })).body.id;
      assert.equal((await p(`/api/students/${id}/classes`, { method: "POST", body: { code: cls.code } })).status, 201);
      kids.push({ p, id });
    }
    // Ana reši 5 nalog pri dodeljeni temi in eno pri drugi temi (te učitelj ne vidi).
    const later = "datetime('now', '+1 minute')";
    for (let i = 0; i < 5; i++) db.prepare(`INSERT INTO tasks (student_id, topic_id, level, payload, attempts, solved, first_try_correct, created_at) VALUES (?, ?, 1, '{}', 1, 1, 1, ${later})`).run(kids[0].id, TOPIC);
    db.prepare(`INSERT INTO tasks (student_id, topic_id, level, payload, attempts, solved, created_at) VALUES (?, 'MAT-OS-9/linearna-funkcija', 1, '{}', 1, 1, ${later})`).run(kids[0].id);
    db.prepare(`INSERT INTO tasks (student_id, topic_id, level, payload, attempts, solved, created_at) VALUES (?, ?, 1, '{}', 1, 0, ${later})`).run(kids[1].id, TOPIC);

    const ov = (await t(`/api/teacher/classes/${cls.code}/overview`)).body;
    assert.equal(ov.members.length, 2);
    assert.ok(ov.members.every((m) => !("name" in m)), "brez pravih imen");
    const res = ov.assignments[0].results;
    assert.equal(res[kids[0].id].status, "done");
    assert.equal(res[kids[0].id].solved, 5);
    assert.equal(res[kids[1].id].status, "started");
    assert.equal(ov.assignments[0].done, 1);
    assert.ok(!JSON.stringify(ov).includes("linearna"), "druge teme niso vidne");

    // Oznaka učenca (učitelj) in izvoz CSV.
    assert.equal((await t(`/api/teacher/classes/${cls.code}/members/${kids[0].id}`, { method: "PUT", body: { label: "=Ana K." } })).status, 200);
    const csv = await t(`/api/teacher/classes/${cls.code}/export.csv`);
    assert.equal(csv.status, 200);
    assert.match(csv.body, /'=Ana K\./, "formula v celici je onemogočena");
    assert.match(csv.body, /opravljeno \(5\)/);

    // Licenca: brez nje ni šolskih pravic; 1 mesto = prvi pridruženi.
    assert.equal(schoolAccess(db, kids[0].id), null);
    const plain = client();
    await register(plain, "neskrbnik@primer.si");
    assert.equal((await plain(`/api/admin/schools/${sch.id}/licences`, { method: "POST", body: {} })).status, 403);
    db.prepare("UPDATE parents SET is_admin = 1 WHERE email = 'ucitelj@sola.si'").run();
    const today = new Date().toISOString().slice(0, 10);
    const bad = await t(`/api/admin/schools/${sch.id}/licences`, { method: "POST", body: { plan: "pilot", seats: 1, validUntil: "2020-01-01" } });
    assert.equal(bad.status, 400);
    const lic = await t(`/api/admin/schools/${sch.id}/licences`, {
      method: "POST",
      body: { plan: "pilot", seats: 1, priceEur: 12, subjects: ["MAT", "XX"], grades: [7], validFrom: today, validUntil: "2099-08-31", aiCapUsdMonth: 20 },
    });
    assert.equal(lic.status, 201, JSON.stringify(lic.body));
    assert.equal(lic.body.licence.subjects, null, "neznan predmet = seznam zavrnjen");
    const acc = schoolAccess(db, kids[0].id);
    assert.equal(acc.schoolName, "OŠ Prule");
    assert.deepEqual(acc.grades, [7]);
    assert.equal(acc.aiCapUsdMonth, 20);
    assert.equal(schoolAccess(db, kids[1].id), null, "drugi učenec nima mesta");

    // Učenec vidi svoje naloge in licenco; izvoz je vedno mogoč.
    const mine = (await kids[0].p(`/api/students/${kids[0].id}/assignments`)).body;
    assert.equal(mine.classes[0].items[0].status, "done");
    assert.equal(mine.licence.school, "OŠ Prule");
    assert.equal((await kids[1].p(`/api/students/${kids[0].id}/assignments`)).status, 404, "tuj otrok");
    const exp = await kids[1].p(`/api/students/${kids[1].id}/school-export`);
    assert.equal(exp.status, 200);
    assert.equal(exp.body.classes[0].className, "7.a");

    // Prenos na drugo šolo: nova šola, novi razred; iz stare šole izstopi, napredek ostane.
    const t2 = client();
    await register(t2, "druga@sola.si");
    const s2 = (await t2("/api/schools", { method: "POST", body: { name: "OŠ Druga" } })).body;
    const c2 = (await t2("/api/teacher/classes", { method: "POST", body: { name: "7.b", schoolId: s2.id } })).body;
    const tr = await kids[0].p(`/api/students/${kids[0].id}/transfer`, { method: "POST", body: { code: c2.code } });
    assert.equal(tr.status, 200);
    assert.deepEqual(tr.body.left, ["7.a"]);
    assert.equal(db.prepare("SELECT COUNT(*) AS n FROM tasks WHERE student_id = ?").get(kids[0].id).n, 6);
    assert.equal((await t(`/api/teacher/classes/${cls.code}/overview`)).body.members.length, 1);
    // Bor zdaj dobi prosto mesto.
    assert.equal(schoolAccess(db, kids[1].id)?.schoolId, sch.id);
  });
});
