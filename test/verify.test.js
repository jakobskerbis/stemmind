import test from "node:test";
import assert from "node:assert/strict";
import { verifyAnswer, parseVerdict, codeCheck } from "../server/verify.js";

const fake = (replies) => {
  const calls = [];
  const fn = async (p) => {
    calls.push(p.model);
    const t = typeof replies === "function" ? replies(p.model) : replies;
    if (t instanceof Error) throw t;
    return { content: [{ type: "text", text: t }], usage: { input_tokens: 1000, output_tokens: 100 }, model: p.model };
  };
  return { fn, calls };
};

test("verdict parsing", () => {
  assert.deepEqual(parseVerdict("OK"), { ok: true });
  assert.deepEqual(parseVerdict(" ok. "), { ok: true });
  assert.equal(parseVerdict("NAPAKA: 7 · 8 je 56").ok, false);
  assert.equal(parseVerdict("NAPAKA: 7 · 8 je 56").reason, "7 · 8 je 56");
  assert.equal(parseVerdict("OK, but 7·8 is 56").ok, false, "vse razen golega OK je dvom");
});

test("pass 1: code recomputes arithmetic before any model is asked", async () => {
  assert.match(codeCheck("Torej $7 \\cdot 8 = 54$."), /ne izide/);
  assert.equal(codeCheck("Torej $7 \\cdot 8 = 56$."), null);
  const { fn, calls } = fake("OK");
  const r = await verifyAnswer({ question: "7 krat 8", answer: "Torej $7 \\cdot 8 = 54$.", createFn: fn });
  assert.equal(r.ok, false);
  assert.equal(calls.length, 0, "napačen račun ne gre do modelov");
});

test("passes 2 and 3: two different models must both say OK", async () => {
  const ok = fake("OK");
  const r = await verifyAnswer({ question: "7 krat 8", answer: "$7 \\cdot 8 = 56$", createFn: ok.fn });
  assert.equal(r.ok, true);
  assert.equal(new Set(ok.calls).size, 2, "dva različna modela");
  assert.ok(r.cost > 0);

  const one = fake((m) => (/opus/.test(m) ? "NAPAKA: napačna enota" : "OK"));
  const r2 = await verifyAnswer({ question: "q", answer: "a", createFn: one.fn });
  assert.equal(r2.ok, false);
  assert.match(r2.reason, /enota/);

  const err = await verifyAnswer({ question: "q", answer: "a", createFn: fake(new Error("timeout")).fn });
  assert.equal(err.ok, false, "napaka pri preverjanju = ne shrani");
});

test("daily verification budget: above it nothing new is stored", async () => {
  const usage = { kindToday: () => 5, log() {} };
  const { fn, calls } = fake("OK");
  const r = await verifyAnswer({ question: "q", answer: "a", usage, createFn: fn });
  assert.equal(r.ok, false);
  assert.equal(calls.length, 0);
});

// --- vgrajeno v klepet ---
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";

async function chatServer(reply, verifyFn) {
  const store = openDb(":memory:");
  const streamFn = async ({ onText }) => {
    onText(reply);
    return { content: [{ type: "text", text: reply }], text: reply, stopReason: "end_turn" };
  };
  const server = createApp(store, { streamFn, verifyFn }).listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const post = (p, body) => fetch(base + p, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body || {}) });
  const s = await (await post("/api/students", { name: "Ana" })).json();
  const ask = async (text) => {
    const c = await (await post(`/api/students/${s.id}/conversations`)).json();
    return (await post(`/api/conversations/${c.id}/messages`, { text })).text();
  };
  const cards = async () => (await (await fetch(`${base}/api/students/${s.id}/flashcards`)).json()).cards;
  return { store, ask, cards, close: () => server.close() };
}
const tick = () => new Promise((r) => setTimeout(r, 20));
const META = '\n<<META subject=MAT topic="x" error=0 mode=A flag=none done=0>>';

test("chat: an answer is reused only after the checks pass, a rejected one is dropped", async () => {
  let release;
  const pending = new Promise((r) => (release = r));
  const app = await chatServer("Ploščina je $3 \\cdot 4 = 12$ cm²." + META, () => pending);
  try {
    const row = () => app.store.db.prepare("SELECT verified FROM answer_cache").get();
    await app.ask("kolikšna je ploščina pravokotnika");
    assert.equal(row().verified, 0, "čaka na preverjanje");
    await app.ask("kolikšna je ploščina pravokotnika");
    assert.equal(app.store.db.prepare("SELECT hits FROM answer_cache").get().hits, 0, "nepreverjen odgovor ne gre drugim");
    release({ ok: true });
    await tick();
    assert.equal(row().verified, 1);
  } finally {
    app.close();
  }
  const bad = await chatServer("Ploščina je 13 cm²." + META, async () => ({ ok: false, reason: "NAPAKA" }));
  try {
    await bad.ask("kolikšna je ploščina pravokotnika");
    await tick();
    assert.equal(bad.store.db.prepare("SELECT COUNT(*) AS n FROM answer_cache").get().n, 0);
  } finally {
    bad.close();
  }
});

test("chat: an arithmetic error is never stored, even without an API key", async () => {
  const app = await chatServer("Torej $7 \\cdot 8 = 54$.\n<<KARTICA\nV: Koliko je 7 · 8?\nO: $7 \\cdot 8 = 54$\n>>" + META);
  try {
    await app.ask("koliko je 7 krat 8");
    assert.equal(app.store.db.prepare("SELECT COUNT(*) AS n FROM answer_cache").get().n, 0);
    assert.equal(app.store.db.prepare("SELECT COUNT(*) AS n FROM flashcards").get().n, 0);
  } finally {
    app.close();
  }
});

test("chat: flashcards stay hidden until checked, rejected ones are deleted", async () => {
  const card = "Dobro.\n<<KARTICA\nV: Formula za ploščino pravokotnika?\nO: $S = a \\cdot b$\n>>" + META;
  const ok = await chatServer(card, async () => ({ ok: true }));
  try {
    await ok.ask("razloži ploščino pravokotnika");
    await tick();
    assert.equal((await ok.cards()).length, 1);
  } finally {
    ok.close();
  }
  let release;
  const wait = new Promise((r) => (release = r));
  const bad = await chatServer(card, () => wait);
  try {
    await bad.ask("razloži ploščino pravokotnika");
    assert.equal((await bad.cards()).length, 0, "skrita, dokler ni preverjena");
    release({ ok: false, reason: "NAPAKA" });
    await tick();
    assert.equal(bad.store.db.prepare("SELECT COUNT(*) AS n FROM flashcards").get().n, 0);
  } finally {
    bad.close();
  }
});
