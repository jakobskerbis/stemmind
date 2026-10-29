// Slovenski izpiti (NPZ 6. in 9. razred, splošna matura) kot poskusni izpit na čas.
import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { Progress } from "../server/progress.js";
import { getPath } from "../server/curriculum.js";
import { examInfo, examKeyFor, examsFor } from "../server/exams.js";

test("si exams: NPZ and matura for Slovenian students only, default by school and grade", () => {
  assert.deepEqual(examsFor("SI").own, ["NPZ6", "NPZ9", "MATURA"]);
  for (const sys of ["IN-CBSE", "US", "NG"]) for (const id of ["NPZ6", "NPZ9", "MATURA"]) assert.ok(!examsFor(sys).other.includes(id), `${sys}: ${id}`);
  const key = (track, grade, subject) => examKeyFor({ school_system: "SI", educational_track: track, curriculum_level: grade, subject });
  assert.equal(key("OSNOVNA_SOLA", "6. razred", "MAT"), "MAT-EX-NPZ6");
  assert.equal(key("OSNOVNA_SOLA", "9. razred", "KEM"), "KEM-EX-NPZ9");
  assert.equal(key("SREDNJA_SOLA", "4. letnik", "BIO"), "BIO-EX-MATURA");
});

test("si exams: topics come from the Slovenian learning paths, tasks are in Slovenian", () => {
  const info = examInfo("MAT-EX-MATURA", "SI");
  assert.equal(info.tasksLang, "sl");
  assert.equal(info.subjects.length, 4);
  const path = getPath("MAT-EX-NPZ9");
  assert.deepEqual(path.units.map((u) => u.title), ["6. razred", "7. razred", "8. razred", "9. razred"]);
  for (const t of path.units.flatMap((u) => u.topics)) for (const b of t.base) assert.match(b, /^MAT-OS-[6-9]\//);
  const ids = getPath("MAT-EX-MATURA").units.flatMap((u) => u.topics.map((t) => t.id));
  assert.equal(new Set(ids).size, ids.length);
});

test("si exams: matura physics mock is a timed multiple-choice paper", () => {
  const store = openDb(":memory:");
  const p = new Progress(store);
  const s = store.createStudent("Ana");
  const n = p.startContest(s.id, "FIZ-EX-MATURA");
  assert.equal(n.total, 18);
  assert.equal(n.task.answerType, "choice");
  assert.equal(n.task.textLang, null);
});
