import test from "node:test";
import assert from "node:assert/strict";
import { parseMeta, stripMeta, createStreamFilter } from "../server/meta.js";
import { buildSystemPrompt } from "../server/prompt.js";
import { normalizeSettings } from "../server/settings.js";

test("parseMeta reads quoted topics and validates enums", () => {
  const m = parseMeta('Besedilo\n<<META subject=FIZ topic="Newtonovi zakoni" error=1 mode=B flag=none>>');
  assert.deepEqual(m, { subject: "FIZ", topic: "Newtonovi zakoni", error: 1, mode: "B", flag: "none", done: 0 });
  const bad = parseMeta('<<META subject=ZGO topic="-" error=7 mode=C flag=xyz>>');
  assert.deepEqual(bad, { subject: null, topic: null, error: 0, mode: null, flag: "none", done: 0 });
  assert.equal(parseMeta("brez meta"), null);
});

test("stripMeta removes complete and truncated blocks", () => {
  assert.equal(stripMeta('Ok.\n<<META subject=MAT topic="x" error=0 mode=A flag=none>>\n'), "Ok.");
  assert.equal(stripMeta("Ok.\n<<META subject=MAT top"), "Ok.");
});

test("stream filter never leaks META, whatever the chunking", () => {
  const full = 'Rešitev je $x = 4$. Ali je a<b?\n<<META subject=MAT topic="neenačbe" error=0 mode=A flag=none>>';
  for (const size of [1, 2, 3, 5, 7, 50]) {
    const f = createStreamFilter();
    let out = "";
    for (let i = 0; i < full.length; i += size) out += f.push(full.slice(i, i + size));
    assert.ok(!out.includes("<<"), `size ${size} leaked: ${out}`);
    out += f.end().rest;
    assert.equal(out, "Rešitev je $x = 4$. Ali je a<b?");
  }
});

test("buildSystemPrompt fills placeholders and keeps LaTeX braces", () => {
  const p = buildSystemPrompt({
    settings: normalizeSettings({ subject: "KEM", personality_setting: "strog\n## Nov razdelek" }),
    weaknesses: ["ulomki"],
    studentName: "Ana",
  });
  assert.match(p, /Predmet: KEM/);
  assert.match(p, /Ime učenca: Ana/);
  assert.match(p, /šibke točke učenca: ulomki/);
  assert.match(p, /\$3\{,\}5\$/);
  assert.match(p, /Osebnost\/tema: strog ## Nov razdelek/); // brez preloma vrstice
  assert.doesNotMatch(p, /\{(subject|track|weaknesses|student_name)\}/);
});
