import test from "node:test";
import assert from "node:assert/strict";
import { buildSystemPrompt, systemBlocks, SPLIT_MARKER } from "../server/prompt.js";
import { normalizeSettings } from "../server/settings.js";

test("static part of the prompt is identical for every student and goes first", () => {
  const a = buildSystemPrompt({ settings: normalizeSettings({ subject: "FIZ", curriculum_level: "2. letnik" }), studentName: "Zarja", weaknesses: ["ulomki z neznanko"] });
  const b = buildSystemPrompt({
    settings: normalizeSettings({ educational_track: "UNIVERZA", subject: "BIO" }),
    studentName: "Tilen",
    learningPath: "Tema: Mejoza.",
  });
  const [sa, da] = systemBlocks(a);
  const [sb, db] = systemBlocks(b);
  assert.equal(sa.text, sb.text);
  assert.deepEqual(sa.cache_control, { type: "ephemeral" });
  assert.equal(db.cache_control, undefined);
  // Vse nastavitve so v drugem bloku, v prvem ni nobenega vstavljenega podatka.
  assert.doesNotMatch(sa.text, /Zarja|Tilen|ulomki z neznanko|Mejoza|Ime učenca:/);
  assert.match(da.text, /Ime učenca: Zarja/);
  assert.match(da.text, /šibke točke učenca: ulomki z neznanko/);
  assert.match(db.text, /Šola: UNIVERZA/);
  assert.match(db.text, /Tema: Mejoza\./);
  // Stalni del vsebuje ključna pravila.
  for (const re of [/Varnostni ščit/, /<<META subject=/, /Način A/, /Način B/, /COMPETITION/, /UNIVERZA/, /Podatki/, /učnim stilom/]) {
    assert.match(sa.text, re);
  }
});

test("systemBlocks without a marker returns one block", () => {
  assert.deepEqual(systemBlocks("samo besedilo"), [{ type: "text", text: "samo besedilo" }]);
  assert.ok(!"samo besedilo".includes(SPLIT_MARKER));
});
