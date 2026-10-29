import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";

function fakeStream(replies, seen) {
  let i = 0;
  return async ({ system, messages, onText }) => {
    seen.push({ system, messages });
    const r = replies[i++ % replies.length];
    if (r instanceof Error) throw r;
    const text = typeof r === "string" ? r : r.text;
    for (let k = 0; k < text.length; k += 4) onText(text.slice(k, k + 4));
    return { content: [{ type: "text", text }], text, stopReason: r.stopReason ?? "end_turn" };
  };
}

async function withServer(replies, fn, opts = {}) {
  const store = openDb(":memory:");
  const seen = [];
  const app = createApp(store, { streamFn: fakeStream(replies, seen), ...opts });
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const call = async (path, opts = {}) => {
    const res = await fetch(base + path, {
      method: opts.method || "GET",
      headers: { "Content-Type": "application/json" },
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    });
    const type = res.headers.get("content-type") || "";
    return { status: res.status, body: type.includes("json") ? await res.json() : await res.text() };
  };
  try {
    await fn({ call, seen, store });
  } finally {
    server.close();
  }
}

const events = (sse) =>
  sse.split("\n\n").filter(Boolean).map((c) => ({
    event: /^event: (.*)$/m.exec(c)[1],
    data: JSON.parse(/^data: (.*)$/m.exec(c)[1]),
  }));

test("chat turn: streams without META, stores event, feeds weaknesses back", async () => {
  const wrong = 'Poglej še enkrat drugi korak.\n<<META subject=MAT topic="ulomki" error=1 mode=A flag=none>>';
  await withServer([wrong], async ({ call, seen }) => {
    const s = (await call("/api/students", { method: "POST", body: { name: "Miha" } })).body;
    const c = (await call(`/api/students/${s.id}/conversations`, { method: "POST" })).body;

    for (let i = 0; i < 3; i++) {
      const r = await call(`/api/conversations/${c.id}/messages`, { method: "POST", body: { text: `1/2 + 1/3 = 2/5? (${i})` } });
      const ev = events(r.body);
      const streamed = ev.filter((e) => e.event === "delta").map((e) => e.data.text).join("");
      assert.equal(streamed, "Poglej še enkrat drugi korak.");
      assert.ok(!r.body.includes("META"));
      assert.equal(ev.at(-1).event, "done");
    }

    // Zgodovina za API ohrani META, prikaz ne.
    assert.equal(seen[2].messages.length, 5);
    assert.match(seen[2].messages[1].content[0].text, /<<META/);
    const conv = (await call(`/api/conversations/${c.id}`)).body;
    assert.ok(conv.messages.every((m) => !m.text.includes("META")));
    assert.equal(conv.title, "1/2 + 1/3 = 2/5? (0)");

    const p = (await call(`/api/students/${s.id}/progress`)).body;
    assert.equal(p.topics[0].topic, "ulomki");
    assert.equal(p.weak.length, 1);

    // Po treh napakah so ulomki v promptu kot šibka točka.
    await call(`/api/conversations/${c.id}/messages`, { method: "POST", body: { text: "še enkrat" } });
    assert.match(seen[3].system, /šibke točke učenca: ulomki \(MAT\)/);
    assert.doesNotMatch(seen[0].system, /ulomki \(MAT\)/);
  });
});

test("dashboard settings reach the system prompt", async () => {
  await withServer(['ok\n<<META subject=FIZ topic="-" error=0 mode=B flag=none>>'], async ({ call, seen }) => {
    const s = (await call("/api/students", { method: "POST", body: { name: "Eva" } })).body;
    const u = await call(`/api/students/${s.id}`, {
      method: "PUT",
      body: { settings: { subject: "FIZ", solving_mode: "B", track: "BOGUS" }, manual_weaknesses: "enote, vektorji" },
    });
    assert.equal(u.body.settings.track, "REGULAR");
    const c = (await call(`/api/students/${s.id}/conversations`, { method: "POST" })).body;
    await call(`/api/conversations/${c.id}/messages`, { method: "POST", body: { text: "hitrost" } });
    assert.match(seen[0].system, /Predmet: FIZ/);
    assert.match(seen[0].system, /Način: B/);
    assert.match(seen[0].system, /šibke točke učenca: enote, vektorji/);
    const conv = (await call(`/api/conversations/${c.id}`)).body;
    assert.deepEqual(conv.state, { subject: "FIZ", mode: "B" });
  });
});

test("refusal and API errors are handled", async () => {
  await withServer([{ text: "x", stopReason: "refusal" }, new Error("boom")], async ({ call, store }) => {
    const s = (await call("/api/students", { method: "POST", body: { name: "Tim" } })).body;
    const c = (await call(`/api/students/${s.id}/conversations`, { method: "POST" })).body;
    const r1 = events((await call(`/api/conversations/${c.id}/messages`, { method: "POST", body: { text: "a" } })).body);
    assert.match(r1.at(-1).data.text, /ne morem pomagati/);
    assert.equal(store.flagEvents(s.id)[0].flag, "unsafe");

    const r2 = events((await call(`/api/conversations/${c.id}/messages`, { method: "POST", body: { text: "b" } })).body);
    assert.equal(r2.at(-1).event, "error");
    // Neuspelo sporočilo je odstranjeno: ostaneta le prvi par.
    assert.equal(store.listMessages(c.id).length, 2);
  });
});

test("input validation", async () => {
  await withServer(["x"], async ({ call }) => {
    const s = (await call("/api/students", { method: "POST", body: { name: "Lan" } })).body;
    const c = (await call(`/api/students/${s.id}/conversations`, { method: "POST" })).body;
    assert.equal((await call(`/api/conversations/${c.id}/messages`, { method: "POST", body: { text: "" } })).status, 400);
    assert.equal(
      (await call(`/api/conversations/${c.id}/messages`, { method: "POST", body: { image: { media_type: "text/html", data: "x" } } })).status,
      400,
    );
    assert.equal((await call(`/api/conversations/999/messages`, { method: "POST", body: { text: "a" } })).status, 404);
    assert.equal((await call(`/api/students/${s.id}/prompt`)).status, 404);
  });
});

test("handwriting read: validates image, returns transcript and logs usage", async () => {
  const PNG = "data:image/png;base64,iVBORw0KGgo=";
  const readFn = async ({ unit }) => ({ text: `5 ${unit ?? ""}`.trim(), usage: { input_tokens: 500, output_tokens: 10 }, model: "claude-haiku-5-5" });
  await withServer(["x"], async ({ call, store }) => {
    const s = (await call("/api/students", { method: "POST", body: { name: "Ana" } })).body;
    const topic = "MAT-OS-8/pitagorov-izrek";
    await call(`/api/students/${s.id}/practice/next`, { method: "POST", body: { topic_id: topic } }); // zgled
    const { task } = (await call(`/api/students/${s.id}/practice/next`, { method: "POST", body: { topic_id: topic } })).body;
    const bad = await call(`/api/students/${s.id}/tasks/${task.id}/read`, { method: "POST", body: { image: "nekaj" } });
    assert.equal(bad.status, 400);
    const ok = await call(`/api/students/${s.id}/tasks/${task.id}/read`, { method: "POST", body: { image: PNG } });
    assert.equal(ok.status, 200);
    assert.match(ok.body.text, /^5/);
    const row = store.db.prepare("SELECT kind FROM usage").get();
    assert.equal(row.kind, "ocr");
  }, { readFn });
});

test("tekmovanja: razdelek po nastavitvah, brez tekmovalnih poti na učni poti", async () => {
  await withServer(["ok"], async ({ call }) => {
    const s = (await call("/api/students", { method: "POST", body: { name: "Tim" } })).body;
    const c = (await call(`/api/students/${s.id}/competition`)).body;
    assert.equal(c.key, c.defaultKey);
    assert.match(c.key, /^MAT-TEK-(OS|SS)$/);
    assert.ok(c.competitions.includes("Kenguru"));
    assert.equal(c.contest.maxPoints, 40);
    const k = (await call(`/api/students/${s.id}/competition?key=KEM-TEK-SS`)).body;
    assert.equal(k.key, "KEM-TEK-SS");
    assert.ok(k.units.length);
    const paths = (await call("/api/paths?subject=MAT")).body;
    assert.ok(paths.length && paths.every((p) => !p.key.includes("-TEK-")));
    const tr = await call(`/api/students/${s.id}/competition-training`, { method: "POST", body: { path: "FIZ-TEK-SS" } });
    assert.equal(tr.status, 200);
    assert.equal(tr.body.total, 10);
    const ct = (await call(`/api/students/${s.id}/contest`, { method: "POST", body: { path: "FIZ-TEK-SS" } })).body;
    const sk = (await call(`/api/students/${s.id}/tasks/${ct.task.id}/skip`, { method: "POST" })).body;
    assert.equal(sk.skipped, true);
    const fin = (await call(`/api/students/${s.id}/contest/finish`, { method: "POST", body: { sessionId: ct.sessionId } })).body;
    assert.equal(fin.contest.points, 0);
    await call(`/api/students/${s.id}`, { method: "PUT", body: { settings: { educational_track: "UNIVERZA" } } });
    const u = (await call(`/api/students/${s.id}/competition`)).body;
    assert.equal(u.key, null);
  });
});

test("dvojni klik na Začni ne ustvari dveh enakih učencev", () =>
  withServer([], async ({ call }) => {
    const body = { name: "Mojca", settings: { subject: "MAT", curriculum_level: "6. razred" } };
    const post = () => call("/api/students", { method: "POST", body });
    const res = await Promise.all([post(), post(), post()]);
    assert.equal(new Set(res.map((r) => r.body.id)).size, 1);
    const list = (await call("/api/students")).body;
    assert.equal(list.filter((s) => s.name === "Mojca").length, 1);
    // drug učenec z drugim imenom je še vedno dovoljen
    assert.equal((await call("/api/students", { method: "POST", body: { name: "Luka" } })).status, 201);
  }));
