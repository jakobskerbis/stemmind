import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { modeParams } from "../server/claude.js";
import { presolve, codeFindings, needsReview, fixBlock, insertFix } from "../server/live-check.js";

const META = '\n<<META subject=MAT topic="enačbe" error=0 mode=A flag=none done=0>>';
const LONG = "Pri tekmovalnih nalogah iz geometrije najprej narišemo skico in označimo vse dane količine. Pitagorov izrek velja v vsakem trikotniku, zato ga uporabimo kar takoj, brez dodatnega preverjanja kotov.";

// streamFn: odgovor inštruktorja iz `answers` (po vrsti), popravek iz `fixes`; vse klice zabeleži.
function harness({ answers = [], fixes = [], reviews = [] } = {}) {
  const store = openDb(":memory:");
  const calls = [];
  const reviewCalls = [];
  const streamFn = async ({ system, messages, mode, onText }) => {
    const isFix = typeof system === "string" && system.startsWith("You fix one mistake");
    calls.push({ system, messages, mode, isFix });
    const text = isFix ? fixes.shift() ?? "OK" : (answers.shift() ?? "Odgovor.") + META;
    if (!isFix) onText(text);
    return { content: [{ type: "text", text }], text, stopReason: "end_turn", model: modeParams(mode).model, usage: { input_tokens: 100, output_tokens: 20 } };
  };
  const reviewCreateFn = async (params) => {
    reviewCalls.push(params);
    const text = reviews.shift() ?? "OK";
    return { content: [{ type: "text", text }], stop_reason: "end_turn", model: params.model, usage: { input_tokens: 1000, output_tokens: 10 } };
  };
  const server = createApp(store, { streamFn, reviewCreateFn }).listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const call = async (path, body, method = "POST") => {
    const res = await fetch(base + path, { method, headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
    return (res.headers.get("content-type") || "").includes("json") ? res.json() : res.text();
  };
  const student = async (settings = {}) => (await call("/api/students", { name: "Ana", settings }));
  const ask = async (s, text, extra = {}) => {
    const c = await call(`/api/students/${s.id}/conversations`, {});
    const sse = await call(`/api/conversations/${c.id}/messages`, { text, ...extra });
    return { c, sse, history: store.apiHistory(c.id), messages: store.listMessages(c.id) };
  };
  const kinds = () => store.db.prepare("SELECT kind, COUNT(*) AS n FROM usage GROUP BY kind").all().reduce((o, r) => ((o[r.kind] = r.n), o), {});
  return { store, calls, reviewCalls, ask, student, kinds, close: () => server.close() };
}

test("live check: a wrong calculation gets exactly one correction, streamed and stored", async () => {
  const h = harness({ answers: ["Izračunajmo: $7 \\cdot 8 = 54$. Zdaj prištej še $2$."], fixes: ["Popravek: $7 \\cdot 8 = 56$, ne $54$."] });
  try {
    const s = await h.student();
    const r = await h.ask(s, "Koliko je 7 krat 8 plus 2?");
    assert.equal(h.calls.length, 2, "odgovor in en popravek");
    assert.ok(h.calls[1].isFix);
    assert.equal(h.calls[1].mode, "think", "Haiku → popravek z več razmisleka");
    assert.match(h.calls[1].messages[0].content[0].text, /56 ≠ 54/);
    assert.match(r.sse, /event: delta\ndata: \{"text":"\\n\\n> \*\*Popravek:\*\* \$7 \\\\cdot 8 = 56\$/);
    const a = r.messages.at(-1);
    assert.equal((a.display_text.match(/Popravek/g) || []).length, 1);
    assert.match(a.display_text, /54\$\. Zdaj prištej še \$2\$\.\n\n> \*\*Popravek:\*\*/);
    const stored = a.api_content[0].text;
    assert.ok(stored.indexOf("Popravek") < stored.indexOf("<<META"), "popravek pred vrstico META");
    assert.equal(h.kinds().popravek, 1);
  } finally {
    h.close();
  }
});

test("live check: a correct answer gets no correction and no extra call", async () => {
  const h = harness({ answers: ["Velja $7 \\cdot 8 = 56$. Kaj pa $56 + 2$?"] });
  try {
    const r = await h.ask(await h.student(), "Koliko je 7 krat 8 plus 2?");
    assert.equal(h.calls.length, 1);
    assert.doesNotMatch(r.messages.at(-1).display_text, /Popravek/);
    assert.equal(h.kinds().popravek, undefined);
  } finally {
    h.close();
  }
});

test("live check: a task our solver handles adds a hidden verified result to this API call only", async () => {
  const h = harness({ answers: ["Kaj bi naredil najprej, da se znebiš $3$?", "Torej je $x = 5$."], fixes: ["Popravek: rešitev je $x = 4$, ker je $2 \\cdot 4 + 3 = 11$."] });
  try {
    const s = await h.student();
    const r = await h.ask(s, "Reši enačbo 2x + 3 = 11");
    const sent = h.calls[0].messages.at(-1);
    assert.equal(sent.role, "user");
    assert.equal(sent.content.length, 2, "učenčevo besedilo + opomba");
    assert.equal(sent.content[0].text, "Reši enačbo 2x + 3 = 11");
    assert.match(sent.content[1].text, /<preverjen_racun>[\s\S]*x = 4[\s\S]*način A[\s\S]*Never mention a program/);
    assert.doesNotMatch(JSON.stringify(r.history), /preverjen_racun/, "opomba ni v shranjeni zgodovini");
    assert.doesNotMatch(r.sse, /preverjen_racun|x = 4/, "učenec opombe ne vidi");
    assert.equal(h.calls.length, 1, "vodenje brez rezultata: nič za popraviti");
    assert.equal(h.calls[0].system.includes("preverjen_racun"), false, "sistemski prompt ostane enak (predpomnilnik)");

    // Napačna končna vrednost neznanke: koda jo ujame proti rešitvi reševalnika.
    const r2 = await h.ask(s, "Prosim, reši 2x + 3 = 11"); // drugo besedilo: prvi odgovor je v predpomnilniku odgovorov
    assert.equal(h.calls.length, 3);
    assert.match(h.calls[2].messages[0].content[0].text, /x = 5 for the equation 2x \+ 3 = 11, but the correct solution is x = 4/);
    assert.match(r2.messages.at(-1).display_text, /> \*\*Popravek:\*\* rešitev je \$x = 4\$/);

    // Brez naloge (ali z eno samo operacijo) ni opombe.
    await h.ask(s, "Kaj je enačba?");
    assert.equal(h.calls.at(-1).messages.at(-1).content.length, 1);
  } finally {
    h.close();
  }
});

test("live check: in mock mode the hidden note does not change the prepared answer", async () => {
  const old = { mock: process.env.EVKLID_MOCK, delay: process.env.EVKLID_MOCK_DELAY_MS };
  process.env.EVKLID_MOCK = "1";
  process.env.EVKLID_MOCK_DELAY_MS = "0";
  const store = openDb(":memory:");
  const server = createApp(store).listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const post = async (p, body) => (await fetch(base + p, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })).text();
  try {
    const s = JSON.parse(await post("/api/students", { name: "Ana" }));
    const c = JSON.parse(await post(`/api/students/${s.id}/conversations`, {}));
    const sse = await post(`/api/conversations/${c.id}/messages`, { text: "Reši enačbo 2x + 3 = 11" });
    assert.match(sse, /Preizkusni način/);
    assert.doesNotMatch(sse, /Ni čisto prav/, "opomba z »x = 4« ne sproži odgovora na učenčevo rešitev");
  } finally {
    server.close();
    for (const [k, v] of [["EVKLID_MOCK", old.mock], ["EVKLID_MOCK_DELAY_MS", old.delay]]) v === undefined ? delete process.env[k] : (process.env[k] = v);
  }
});

test("live check: competition and university Haiku answers without calculations go to the reviewer; lite does not", async () => {
  const h = harness({ answers: [LONG, LONG, LONG, LONG], reviews: ["NAPAKA: Pitagorov izrek velja samo v pravokotnem trikotniku.", "OK"], fixes: ["Popravek: Pitagorov izrek velja samo v pravokotnem trikotniku."] });
  try {
    const tek = await h.student({ track: "COMPETITION" });
    const r = await h.ask(tek, "Kako začnem geometrijsko nalogo?");
    assert.equal(h.reviewCalls.length, 1);
    assert.equal(h.reviewCalls[0].model, modeParams("mid").model, "pregleda Sonnet");
    assert.match(h.reviewCalls[0].system, /strict fact-checker/);
    assert.match(h.calls.at(-1).messages[0].content[0].text, /a reviewer reported: Pitagorov izrek/);
    assert.match(r.messages.at(-1).display_text, /> \*\*Popravek:\*\* Pitagorov izrek velja samo v pravokotnem/);
    assert.equal(h.kinds().preverjanje, 1, "strošek pregleda šteje v proračun");

    const uni = await h.student({ educational_track: "UNIVERZA", curriculum_level: "1" });
    const r2 = await h.ask(uni, "Kako začnem geometrijsko nalogo?");
    assert.equal(h.reviewCalls.length, 2);
    assert.doesNotMatch(r2.messages.at(-1).display_text, /Popravek/, "OK: brez popravka");

    const lite = await h.student({ track: "COMPETITION", data_mode: "lite" });
    await h.ask(lite, "Kako začnem geometrijsko nalogo?");
    const regular = await h.student();
    await h.ask(regular, "Kako začnem geometrijsko nalogo?");
    assert.equal(h.reviewCalls.length, 2, "lahki način in običajna šolska raven brez pregleda");
  } finally {
    h.close();
  }
});

test("live check: review rules (free plan, saving mode, calculations already checked, non-Haiku)", () => {
  const base = { checked: 0, model: "claude-haiku-5-5", lite: false, premium: true, level: 1, risky: true, spentToday: 0, answerLength: 300 };
  assert.equal(needsReview(base), true);
  assert.equal(needsReview({ ...base, premium: false }), false, "brezplačni paket");
  assert.equal(needsReview({ ...base, lite: true }), false);
  assert.equal(needsReview({ ...base, level: 0 }), false, "varčni način proračuna");
  assert.equal(needsReview({ ...base, level: () => -1 }), false);
  assert.equal(needsReview({ ...base, checked: 2 }), false, "koda je že preverila račune");
  assert.equal(needsReview({ ...base, model: "claude-sonnet-5-5" }), false);
  assert.equal(needsReview({ ...base, risky: false }), false);
  assert.equal(needsReview({ ...base, answerLength: 40 }), false);
  assert.equal(needsReview({ ...base, spentToday: () => 1 }), false, "privzeta dnevna meja 1 $");
});

test("live check: the daily cap stops reviews", async () => {
  process.env.EVKLID_LIVE_CHECK_DAILY_USD = "0.005";
  const h = harness({ answers: [LONG, LONG] });
  try {
    const s = await h.student({ track: "COMPETITION" });
    await h.ask(s, "Kako začnem geometrijsko nalogo?");
    assert.equal(h.reviewCalls.length, 1);
    h.store.db.prepare("INSERT INTO usage (student_id, model, kind, cost_usd) VALUES (?, 'claude-sonnet-5-5', 'preverjanje', 0.01)").run(s.id);
    await h.ask(s, "Kako začnem geometrijsko nalogo?");
    assert.equal(h.reviewCalls.length, 1, "nad dnevno mejo brez pregleda");
  } finally {
    delete process.env.EVKLID_LIVE_CHECK_DAILY_USD;
    h.close();
  }
});

test("live check: EVKLID_LIVE_CHECK=0 turns everything off", async () => {
  process.env.EVKLID_LIVE_CHECK = "0";
  const h = harness({ answers: ["Velja $7 \\cdot 8 = 54$.", "Odgovor.", LONG], fixes: ["Popravek: 56."] });
  try {
    const s = await h.student({ track: "COMPETITION" });
    const r = await h.ask(s, "Koliko je 7 krat 8?");
    await h.ask(s, "Reši enačbo 2x + 3 = 11");
    await h.ask(s, "Kako začnem geometrijsko nalogo?");
    assert.equal(h.calls.length, 3, "brez popravka");
    assert.ok(h.calls.every((c) => !c.isFix && c.messages.at(-1).content.length === 1), "brez opombe");
    assert.equal(h.reviewCalls.length, 0);
    assert.doesNotMatch(r.messages.at(-1).display_text, /Popravek/);
  } finally {
    delete process.env.EVKLID_LIVE_CHECK;
    h.close();
  }
});

test("live check: extraction stays conservative and stated values are checked against the solver", () => {
  const sol = (t) => presolve(t)?.problems.map((p) => `${p.type}:${p.answer}`).join("|") ?? null;
  assert.equal(sol("Reši enačbo 2x + 3 = 11"), "equation:x = 4");
  assert.equal(sol("Koliko je 3 + 4 · 5?"), "arith:23");
  assert.equal(sol("Reši sistem x + y = 5 in x - y = 1"), "system:x = 3,\\quad y = 2");
  assert.equal(sol("Odvajaj x^3 + 2x"), "derivative:f'(x) = 3x^{2} + 2");
  assert.equal(sol("Reši $2x+3=11$, dobil sem $x = 5$"), "equation:x = 4", "učenčev odgovor ni naloga");
  for (const t of ["Koliko je 7 · 8?", "x = 5", "Je $x = 5$?", "Imam 3 jabolka in 2 hruški, koliko je vseh?", "Reši 2x + 3 = 11 in povej, ali je rešitev soda", "x^2 < 4"]) assert.equal(presolve(t), null, t);

  const pre = presolve("Reši x^2 - 5x + 6 = 0");
  assert.equal(codeFindings("Rešitvi sta $x_1 = 2$ in $x_2 = 3$.", pre).issue, null);
  assert.match(codeFindings("Rešitvi sta $x_1 = 2$ in $x_2 = 4$.", pre).issue, /x = 4/);
  assert.equal(codeFindings("Če bi bil $x = 5$, leva stran ne bi bila 0.", pre).issue, null, "hipotetična vrednost");
  assert.deepEqual(codeFindings("Najprej razmisli, kaj veš o enačbi.", pre), { checked: 0, issue: null });
  assert.equal(fixBlock("OK"), null);
  assert.equal(fixBlock("Popravek: $7 \\cdot 8 = 56$."), "\n\n> **Popravek:** $7 \\cdot 8 = 56$.");
  assert.equal(insertFix("A." + META, "\n\nB"), "A.\n\nB" + META);
});
