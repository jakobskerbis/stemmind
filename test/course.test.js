import test from "node:test";
import assert from "node:assert/strict";
import { normalizeSettings } from "../server/settings.js";
import { pathKeyFor } from "../server/curriculum.js";

const uni = { educational_track: "UNIVERZA", study_program: "UM-FKKT-KI", curriculum_level: "1. letnik" };

test("fakulteta: predmet iz predmetnika izbrane smeri določi učno pot in predmet aplikacije", () => {
  const s = normalizeSettings({ ...uni, subject: "MAT", study_course: "UNI-UMFKKT-ANORG" });
  assert.equal(s.study_course, "UNI-UMFKKT-ANORG");
  assert.equal(s.subject, "KEM");
  assert.equal(pathKeyFor(s), "UNI-UMFKKT-ANORG");
  // Izbirni predmet velja v vsakem letniku.
  assert.equal(normalizeSettings({ ...uni, study_course: "UNI-UMFKKT-WBIOTEH" }).subject, "BIO");
  // Predmet drugega programa ali letnika ne velja: prvi predmet letnika po predmetu aplikacije.
  const other = normalizeSettings({ ...uni, subject: "FIZ", study_course: "UNI-ULFKKT-XYZ" });
  assert.equal(other.study_course, "");
  assert.equal(pathKeyFor(other), "UNI-UMFKKT-FIZ1");
  const next = normalizeSettings({ ...s, curriculum_level: "2. letnik" });
  assert.equal(next.study_course, "", "po prehodu v višji letnik velja predmetnik novega letnika");
  // OŠ in SŠ: brez predmeta iz predmetnika.
  assert.equal(normalizeSettings({ educational_track: "SREDNJA_SOLA", curriculum_level: "2. letnik", study_course: "UNI-UMFKKT-ANORG" }).study_course, "");
});
