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

test("practice resumes the same unanswered task", () => {
  const { p, s } = setup();
  p.nextPractice(s.id, TOPIC); // zgled
  const a = p.nextPractice(s.id, TOPIC);
  const b = p.nextPractice(s.id, TOPIC);
  assert.equal(b.task.id, a.task.id);
  assert.ok(b.resumed);
});

test("daily training mixes ~70% new and ~30% review, resumes, and gives a bonus", () => {
  const { p, s } = setup();
  const path = "MAT-OS-8";
  // dve osvojeni temi, ki sta na vrsti za ponavljanje
  const view = p.pathView(s.id, path);
  const practiceTopics = view.units.flatMap((u) => u.topics).filter((t) => t.practice);
  for (const t of practiceTopics.slice(0, 2)) {
    p.markMastered(s.id, t.id, "manual");
    p.db.prepare("UPDATE topic_state SET review_due = '2000-01-01 00:00:00' WHERE student_id = ? AND topic_id = ?").run(s.id, t.id);
  }
  const first = p.startDaily(s.id, path);
  assert.equal(first.total, 10);
  const again = p.startDaily(s.id, path);
  assert.equal(again.task.id, first.task.id); // nadaljevanje
  const sess = p.getSession(first.sessionId);
  const modes = sess.plan.map((x) => x.mode);
  assert.equal(modes.filter((m) => m === "review").length, 3);
  assert.equal(modes.filter((m) => m === "practice").length, 7);
  assert.ok(modes.indexOf("review") < 5); // ponavljanje je vmes, ne šele na koncu
  let next = first, bonus = null;
  for (let i = 0; i < 20 && !next.finished; i++) {
    const row = p.getTask(next.task.id);
    const r = p.answer(s.id, next.task.id, correctInput(row.payload.answer));
    next = r.next;
    if (next.finished) bonus = next.xp;
  }
  assert.ok(next.finished);
  assert.ok(bonus.items.some((x) => x.reason === "dnevni trening"));
  assert.equal(p.modes(s.id, path).daily.done, true);
});

test("daily flips to mostly review when review piles up", () => {
  const { p, s } = setup();
  const path = "MAT-OS-8";
  const all = p.pathView(s.id, path).units.flatMap((u) => u.topics).filter((t) => t.practice);
  for (const t of all.slice(0, 9)) {
    p.markMastered(s.id, t.id, "manual");
    p.db.prepare("UPDATE topic_state SET review_due = '2000-01-01 00:00:00' WHERE student_id = ? AND topic_id = ?").run(s.id, t.id);
  }
  p.setStatus(s.id, all[9].id, "learning");
  const m = p.modes(s.id, path);
  assert.ok(m.suggestReview);
  const d = p.startDaily(s.id, path);
  const plan = p.getSession(d.sessionId).plan;
  assert.equal(plan.filter((x) => x.mode === "review").length, 7);
  const q = p.startReview(s.id, { quick: true });
  assert.equal(q.total, RULES.quickReviewTasks);
});

test("test prep: harder tasks closer to the date; unit practice only when unlocked", () => {
  const { p, s } = setup();
  const path = "MAT-OS-8";
  const view = p.pathView(s.id, path);
  const ui = view.units.findIndex((u) => u.hasPractice);
  const later = new Date(Date.now() + 10 * 86400000).toISOString().slice(0, 10);
  const soon = new Date(Date.now() + 1 * 86400000).toISOString().slice(0, 10);
  assert.equal(p.setTestPlan(s.id, path, [], later), null);
  p.setTestPlan(s.id, path, [ui], later);
  const far = p.getSession(p.startTest(s.id).sessionId).plan;
  p.setTestPlan(s.id, path, [ui], soon);
  const near = p.getSession(p.startTest(s.id).sessionId).plan;
  const avg = (pl) => pl.reduce((a, x) => a + x.level, 0) / pl.length;
  assert.ok(avg(near) > avg(far));
  assert.equal(p.testPlan(s.id).daysLeft, 1);
  const locked = view.units.findIndex((u) => u.locked);
  if (locked >= 0) assert.equal(p.startUnit(s.id, path, locked), null);
  const u = p.startUnit(s.id, path, ui);
  assert.ok(u.task.id);
  assert.equal(p.startUnit(s.id, path, ui).task.id, u.task.id);
});
