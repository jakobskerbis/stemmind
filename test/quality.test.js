import test from "node:test";
import assert from "node:assert/strict";
import { checkAnswer } from "../server/practice/check.js";
import { hintSteps, publicTask } from "../server/practice/index.js";

test("checker names typical mistakes: generator list, sign, power of ten, reciprocal, factor 2", () => {
  const a = { type: "number", value: 2.5, unit: "kg", decimals: 2, mistakes: [{ value: 2500, why: "Si pretvoril g v kg?" }] };
  assert.equal(checkAnswer(a, "2500 kg").mistake.message, "Si pretvoril g v kg?");
  assert.equal(checkAnswer(a, "25 kg").mistake.code, "chk.magnitudeBig");
  assert.equal(checkAnswer(a, "0,025 kg").mistake.code, "chk.magnitudeSmall");
  assert.equal(checkAnswer(a, "-2,5 kg").mistake.code, "chk.sign");
  assert.equal(checkAnswer(a, "0,4 kg").mistake.code, "chk.reciprocal");
  assert.equal(checkAnswer(a, "5 kg").mistake.code, "chk.factor2Big");
  assert.equal(checkAnswer(a, "7 kg").mistake, undefined);
  assert.equal(checkAnswer(a, "2,50 kg").kind, "correct");
  const c = { type: "choice", options: ["a", "b", "c"], index: 1, why: ["a je napačno, ker …", null, "c …"] };
  assert.equal(checkAnswer(c, "0").mistake.message, "a je napačno, ker …");
  assert.equal(checkAnswer(c, "1").kind, "correct");
});

test("hint ladder: data → formula → first step", () => {
  const task = { text: "x", hint: "Najprej …", data: { given: ["m = 2"], find: ["F"] }, formula: "F = m g", answer: { type: "number", value: 1 } };
  assert.deepEqual(hintSteps(task).map((s) => s.kind), ["data", "formula", "hint"]);
  assert.equal(publicTask(task).hintSteps, 3);
  assert.deepEqual(hintSteps({ hint: "h" }).map((s) => s.kind), ["hint"]);
});
