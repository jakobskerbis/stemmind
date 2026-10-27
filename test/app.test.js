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

async function withServer(replies, fn) {
  const store = openDb(":memory:");
  const seen = [];
  const app = createApp(store, { streamFn: fakeStream(replies, seen) });
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
