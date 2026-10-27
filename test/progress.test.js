import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { Progress, RULES } from "../server/progress.js";
import { roundHalfUp, fmt } from "../server/practice/check.js";
import { windowHistory } from "../server/usage.js";

function correctInput(a) {
  if (a.type === "number") return (a.decimals != null ? fmt(roundHalfUp(a.value, a.decimals), a.decimals) : fmt(a.value)) + (a.unit ? " " + a.unit : "");
  if (a.type === "fraction") return `${a.num}/${a.den}`;
  if (a.type === "choice") return String(a.index);
  return a.values.join(",");
}
function setup() {
  const store = openDb(":memory:");
  const p = new Progress(store);
  const s = store.createStudent("Ana");
  return { store, p, s };
}
const TOPIC = "MAT-OS-8/pitagorov-izrek";

test("first practice shows a worked example, then tasks", () => {
  const { p, s } = setup();
  const first = p.nextPractice(s.id, TOPIC);
  assert.ok(first.example && first.example.solution);
  const second = p.nextPractice(s.id, TOPIC);
  assert.ok(second.task.id);
  assert.equal(second.task.answerType, "number");
  assert.equal(second.task.solution, undefined); // odgovor ostane na strežniku
});

test("difficulty adapts and topic is mastered after 8/10 with 2 hard", () => {
  const { p, s } = setup();
  p.nextPractice(s.id, TOPIC);
  let mastered = false, levels = [];
  for (let i = 0; i < 12 && !mastered; i++) {
    const { task } = p.nextPractice(s.id, TOPIC);
    levels.push(task.level);
    const row = p.getTask(task.id);
    const res = p.answer(s.id, task.id, correctInput(row.payload.answer));
    assert.equal(res.correct, true, JSON.stringify(res));
    assert.ok(res.xp.gained > 0);
    mastered = !!res.mastered;
  }
  assert.deepEqual(levels.slice(0, 7), [1, 1, 1, 2, 2, 2, 3]);
  assert.ok(mastered);
  const st = p.state(s.id, TOPIC);
  assert.equal(st.status, "mastered");
  assert.ok(st.review_due);
});

test("a mistake lowers difficulty and returns a hint, not the solution", () => {
  const { p, s } = setup();
  p.nextPractice(s.id, TOPIC);
  const st = p.state(s.id, TOPIC);
  st.level = 2;
  p.saveState(st);
  const { task } = p.nextPractice(s.id, TOPIC);
  const wrong = `99999 ${p.getTask(task.id).payload.answer.unit || ""}`;
  const res = p.answer(s.id, task.id, wrong);
  assert.equal(res.correct, false);
  assert.ok(res.hint);
  assert.equal(res.solution, undefined);
  assert.equal(res.levelDown, 1);
  // Še dva napačna poskusa: nato rešen zgled
  p.answer(s.id, task.id, wrong);
  const last = p.answer(s.id, task.id, wrong);
  assert.ok(last.solution);
});

test("chapters unlock in order; placement test unlocks and masters a unit", () => {
  const { p, s } = setup();
  let view = p.pathView(s.id, "MAT-OS-8");
  assert.equal(view.units[0].locked, false);
  assert.equal(view.units[1].locked, true);
  const start = p.startPlacement(s.id, "MAT-OS-8", 0);
  let next = start, result;
  while (!next.finished) {
    const row = p.getTask(next.task.id);
    const res = p.answer(s.id, next.task.id, correctInput(row.payload.answer));
    next = res.next;
    result = res.placement;
  }
  assert.equal(result.passed, true);
  view = p.pathView(s.id, "MAT-OS-8");
  assert.equal(view.units[0].mastered, true);
  assert.equal(view.units[1].locked, false);
  assert.equal(view.units[2].locked, true);
});

test("review mixes due topics and pushes the next review out", () => {
  const { p, s, store } = setup();
  for (const t of ["MAT-OS-8/pitagorov-izrek", "MAT-OS-8/linearne-enacbe"]) p.markMastered(s.id, t, "manual");
  store.db.prepare("UPDATE topic_state SET review_due = datetime('now','-1 hour')").run();
  let next = p.startReview(s.id);
  const topics = new Set();
  while (!next.finished) {
    const row = p.getTask(next.task.id);
    topics.add(row.topic_id);
    next = p.answer(s.id, next.task.id, correctInput(row.payload.answer)).next;
  }
  assert.equal(topics.size, 2);
  assert.equal(p.dueTopics(s.id).length, 0);
  assert.ok(p.state(s.id, "MAT-OS-8/pitagorov-izrek").review_stage >= 1);
});

test("history window trims in chunks so the cached prefix stays stable", () => {
  const msgs = (n) => Array.from({ length: n }, (_, i) => ({ role: i % 2 ? "assistant" : "user", content: String(i) }));
  assert.equal(windowHistory(msgs(19), 10).length, 19); // 10 izmenjav
  assert.equal(windowHistory(msgs(37), 10).length, 37); // 19 izmenjav: še vse
  assert.equal(windowHistory(msgs(39), 10)[0].content, "20"); // 20 izmenjav: odrežemo 10
  assert.equal(windowHistory(msgs(55), 10)[0].content, "20"); // enak začetek do 29 izmenjav
});
