import test from "node:test";
import assert from "node:assert/strict";
import { mdBlocks, splitSection, lessonSteps } from "../public/lesson-steps.js";
import { loadLesson } from "../server/textbook.js";

const think = '<div class="tb-think"><p class="tb-think-label">Premisli</p>\n\nZakaj?\n\n<details><summary>Pokaži odgovor</summary>\n\nKer.\n\n</details></div>';

test("blocks keep Premisli, formula and $$ math whole", () => {
  const md = `Prvi.\n\n${think}\n\n$$\na = b\n\nc = d\n$$\n\nZadnji.`;
  const b = mdBlocks(md);
  assert.equal(b.length, 4);
  assert.equal(b[1], think);
  assert.match(b[2], /^\$\$[\s\S]*\$\$$/);
});

test("explanation splits after every Premisli and at ### headings; examples stay whole", () => {
  const md = `Uvod.\n\n${think}\n\nNaprej.\n\n### Drugi del\n\nBesedilo.`;
  assert.deepEqual(splitSection(md, "explain").map((c) => c.slice(0, 6)), ["Uvod.\n", "Naprej", "### Dr"]);
  const ex = `### Primer 1\n\n${"Korak. ".repeat(400)}\n\n${"Še. ".repeat(300)}\n\n### Primer 2\n\nB`;
  assert.equal(splitSection(ex, "examples").length, 2);
  assert.equal(splitSection("Kratko.", "why").length, 1);
});

test("long explanation is cut at a paragraph, never into tiny pieces", () => {
  const p = "Odstavek z nekaj besedami. ".repeat(20); // ~540 znakov
  const parts = splitSection(Array(6).fill(p).join("\n\n"), "explain");
  assert.ok(parts.length >= 2);
  for (const c of parts) assert.ok(c.length >= 350 && c.length <= 1700, String(c.length));
});

test("quiz questions are spread between the cards: after Razlaga, after Pogoste napake, rest at the end", () => {
  const S = ["Zakaj se tega učimo", "Razlaga", "Rešeni primeri", "Pogoste napake", "Povzetek"].map((title) => ({ title, md: "Besedilo." }));
  const steps = lessonSteps(S, 5);
  const checks = steps.filter((s) => s.type === "check");
  assert.deepEqual(checks.map((c) => c.checks), [[0], [1], [2, 3, 4]]);
  assert.equal(steps[steps.indexOf(checks[0]) - 1].title, "Razlaga");
  assert.equal(steps[steps.indexOf(checks[1]) - 1].title, "Pogoste napake");
  assert.equal(checks[2].final, true);
  assert.deepEqual(lessonSteps(S, 2).filter((s) => s.type === "check").map((c) => c.checks), [[0, 1]]);
  assert.equal(lessonSteps(S, 0).filter((s) => s.type === "check").length, 0);
});

test("a real lesson becomes short cards that keep all its text", () => {
  const L = loadLesson("FIZ-OS-9/upor-in-ohmov-zakon");
  const steps = lessonSteps(L.sections, L.checks.length);
  assert.ok(steps.length >= 8);
  const text = steps.filter((s) => s.type === "text");
  for (const [i, s] of L.sections.entries()) {
    const joined = text.filter((x) => x.section === i).map((x) => x.md).join("\n\n");
    assert.equal(joined.replace(/\s+/g, " ").trim(), s.md.replace(/\s+/g, " ").trim(), s.title);
  }
  assert.deepEqual(steps.filter((s) => s.type === "check").flatMap((s) => s.checks), L.checks.map((_, i) => i));
});
