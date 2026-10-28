import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { Progress } from "../server/progress.js";
import { getPath, listPaths } from "../server/curriculum.js";
import { EXAMS, EXAM_IDS } from "../server/exam-data.js";
import { examInfo, examKeyFor, examsFor, isExamPath, mockPlan, scaledScore, examPrompt } from "../server/exams.js";
import { generateTask, hasGenerator } from "../server/practice/index.js";
import { toChoice } from "../server/practice/choice.js";
import { checkAnswer, parseNumberWithUnit, roundHalfUp, fmt } from "../server/practice/check.js";

const examKeys = () => EXAM_IDS.flatMap((id) => Object.keys(EXAMS[id].subjects).map((s) => `${s}-EX-${id}`));

function correctInput(a) {
  if (a.type === "number") return (a.decimals != null ? roundHalfUp(a.value, a.decimals).toFixed(a.decimals) : String(a.value)) + (a.unit ? " " + a.unit : "");
  if (a.type === "fraction") return `${a.num}/${a.den}`;
  if (a.type === "choice") return String(a.index);
  return a.values.join(",");
}
function wrongInput(a) {
  if (a.type === "choice") return String((a.index + 1) % a.options.length);
  if (a.type === "number") return fmt(a.value + 1000) + (a.unit ? " " + a.unit : "");
  if (a.type === "fraction") return `${a.num + 1}/${a.den}`;
  return a.values.map((v) => v + 1).join(",");
}

test("exams: every exam subject is a hidden path whose topics all have tasks", () => {
  const keys = examKeys();
  assert.ok(keys.length >= 15);
  for (const key of keys) {
    assert.ok(isExamPath(key), key);
    const path = getPath(key);
    assert.equal(path.school, "EX");
    const topics = path.units.flatMap((u) => u.topics);
    assert.ok(topics.length >= 3, key);
    for (const t of topics) assert.ok(hasGenerator(t.id), `${t.id}: ni generatorja`);
  }
  // Izpitne poti niso v običajnih seznamih poti (ne za SI ne za regije).
  assert.ok(listPaths().every((p) => !p.key.includes("-EX")));
  assert.ok(listPaths(undefined, "US").every((p) => !p.key.includes("-EX")));
  assert.equal(isExamPath("MAT-EX-NOPE"), false);
  assert.equal(isExamPath("BIO-EX-SAT"), false);
});

test("exams: own exams per school system and default key", () => {
  assert.deepEqual(examsFor("US").own, ["SAT"]);
  assert.ok(examsFor("IN-CBSE").own.includes("JEEM") && examsFor("IN-CBSE").own.includes("NEET"));
  assert.deepEqual(examsFor("CN").own, ["GAOKAO"]);
  assert.equal(examKeyFor({ school_system: "US", subject: "FIZ" }), "MAT-EX-SAT");
  assert.equal(examKeyFor({ school_system: "IN-CBSE", subject: "FIZ" }, "NEET"), "FIZ-EX-NEET");
  assert.equal(examKeyFor({ school_system: "IN-CBSE", subject: "MAT" }, "NEET"), "FIZ-EX-NEET");
  assert.equal(examKeyFor({ school_system: "KE", subject: "MAT" }), "MAT-EX-SAT");
  const info = examInfo("MAT-EX-JEEM", "IN-CBSE");
  assert.equal(info.mock.tasks, 25);
  assert.equal(info.mock.maxPoints, 100);
  assert.equal(info.mock.negative, true);
  assert.equal(info.mock.penalty, -1);
  assert.equal(examInfo("MAT-EX-SAT", "US").mock.scale[1], 800);
  assert.match(examPrompt("FIZ-EX-NEET"), /NEET/);
  assert.equal(examPrompt("MAT-OS-8"), "");
});

test("exams: mock plans follow the format and every planned task can be generated", () => {
  for (const key of examKeys()) {
    const [subject, , id] = key.split("-");
    const def = EXAMS[id].subjects[subject].mock;
    const { plan, minutes } = mockPlan(key);
    assert.equal(minutes, def.minutes);
    assert.equal(plan.length, def.groups.reduce((n, g) => n + g.n, 0), key);
    for (let i = 1; i < plan.length; i++) {
      // Ista tema ne pride dvakrat zapored, razen če sklop nima druge.
      if (plan[i].topic === plan[i - 1].topic) assert.equal(getPath(key).units.find((u) => u.topics.some((t) => t.id === plan[i].topic)).topics.length, 1);
    }
    for (const item of plan) assert.ok(generateTask(item.topic, item.level), `${key}: ${item.topic} L${item.level}`);
  }
});

test("choice: four options, the right one checks, spread over A-D", () => {
  const counts = [0, 0, 0, 0];
  let converted = 0;
  for (const key of ["MAT-EX-SAT", "FIZ-EX-JEEM", "KEM-EX-NEET"]) {
    for (const t of getPath(key).units.flatMap((u) => u.topics)) {
      for (let seed = 1; seed <= 30; seed++) {
        const task = generateTask(t.id, 2, seed);
        if (!task) continue;
        const c = toChoice(task, seed);
        if (task.answer.type === "choice" || c.answer.type !== "choice") continue; // samo pretvorjene
        converted++;
        assert.equal(c.answer.options.length, 4, t.id);
        assert.equal(new Set(c.answer.options).size, 4, `${t.id}: podvojene možnosti`);
        assert.equal(checkAnswer(c.answer, String(c.answer.index)).kind, "correct");
        assert.equal(checkAnswer(c.answer, String((c.answer.index + 1) % 4)).kind, "wrong");
        counts[c.answer.index]++;
      }
    }
  }
  assert.ok(converted > 300);
  for (const n of counts) assert.ok(n > converted / 8, `neenakomerno: ${counts}`);
  // Verjetnost: vse možnosti med 0 in 1.
  const p = toChoice({ answer: { type: "fraction", num: 3, den: 8 }, lang: "en" }, 7);
  for (const o of p.answer.options) {
    const m = /\\frac\{(\d+)\}\{(\d+)\}/.exec(o);
    assert.ok(m && +m[1] < +m[2], o);
  }
});

test("check: English decimals with a dot are not read as thousands", () => {
  assert.equal(parseNumberWithUnit("0.120", { dot: true }).value, 0.12);
  assert.equal(parseNumberWithUnit("1.000", { dot: true }).value, 1);
  assert.equal(parseNumberWithUnit("1.000").value, 1000);
  assert.equal(checkAnswer({ type: "number", value: 0.12, decimals: 3, dot: true }, "0.120").kind, "correct");
  assert.equal(checkAnswer({ type: "number", value: 0.12, decimals: 3, dot: true }, "0,120").kind, "correct");
});

test("exam mock: JEE negative marking, SAT scaled score, XP", () => {
  const store = openDb(":memory:");
  const p = new Progress(store);
  const s = store.createStudent("Arjun");
  assert.ok(p.pathView(s.id, "MAT-EX-JEEM").units.every((u) => !u.locked));
  let n = p.startContest(s.id, "MAT-EX-JEEM");
  assert.equal(n.total, 25);
  assert.equal(n.task.points, 4);
  assert.equal(n.task.penalty, -1);
  // Pravilno, napačno, preskok, nato konec: 4 − 1 + 0 = 3.
  let row = p.getTask(n.task.id);
  let r = p.answer(s.id, n.task.id, correctInput(row.payload.answer));
  n = r.next;
  row = p.getTask(n.task.id);
  r = p.answer(s.id, n.task.id, wrongInput(row.payload.answer));
  n = r.next;
  r = p.skipContestTask(s.id, n.task.id);
  const res = p.finishContest(r.next.sessionId);
  assert.equal(res.points, 3);
  assert.equal(res.maxPoints, 100);
  assert.equal(res.wrong, 1);
  assert.equal(res.items[1].earned, -1);
  assert.equal(res.items[2].earned, 0);
  assert.equal(res.scaled, null);
  assert.equal(res.xp.gained, 1);

  assert.deepEqual(scaledScore("MAT-EX-SAT", 0, 22), { value: 200, min: 200, max: 800 });
  assert.equal(scaledScore("MAT-EX-SAT", 22, 22).value, 800);
  assert.equal(scaledScore("MAT-EX-SAT", 11, 22).value, 500);
  const sat = p.startContest(s.id, "MAT-EX-SAT");
  assert.equal(sat.total, 22);
  const end = p.finishContest(sat.sessionId);
  assert.equal(end.scaled.value, 200);
});

test("API: exams view for a US and an Indian student", async () => {
  const store = openDb(":memory:");
  const app = createApp(store, { streamFn: async () => ({ content: [], text: "", stopReason: "end_turn" }) });
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  const call = async (path, opts = {}) => {
    const res = await fetch(base + path, { method: opts.method || "GET", headers: { "Content-Type": "application/json" }, body: opts.body ? JSON.stringify(opts.body) : undefined });
    return { status: res.status, body: await res.json() };
  };
  try {
    const us = (await call("/api/students", { method: "POST", body: { name: "Sam", settings: { school_system: "US", curriculum_level: "Grade 11", subject: "MAT" } } })).body;
    const v = (await call(`/api/students/${us.id}/exams`)).body;
    assert.equal(v.key, "MAT-EX-SAT");
    assert.equal(v.defaultExam, "SAT");
    assert.ok(v.units.length && v.about);
    assert.deepEqual(v.exams.own.map((e) => e.id), ["SAT"]);
    const inS = (await call("/api/students", { method: "POST", body: { name: "Priya", settings: { school_system: "IN-CBSE", curriculum_level: "Class 12", subject: "KEM" } } })).body;
    const j = (await call(`/api/students/${inS.id}/exams?exam=JEEM`)).body;
    assert.equal(j.key, "KEM-EX-JEEM");
    assert.equal(j.subjects.length, 3);
    const c = (await call(`/api/students/${inS.id}/contest`, { method: "POST", body: { path: "KEM-EX-JEEM" } })).body;
    assert.equal(c.total, 25);
    const tr = (await call(`/api/students/${inS.id}/competition-training`, { method: "POST", body: { path: "FIZ-EX-NEET" } })).body;
    assert.ok(tr.task);
  } finally {
    server.close();
  }
});
