import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { getTopic } from "../server/curriculum.js";
import { parseLesson, lessonView, searchTextbook, tocView, DEMOS, PHET, LESSONS_DIR, lessonSummaryForPrompt } from "../server/textbook.js";

test("parseLesson: front matter, sections, alternatives, checks", () => {
  const l = parseLesson(`---
stanje: pregledano
demo: ohm
---
## Razlaga
Besedilo.
## Drugače: Na sliki
Slika.
## Preveri se
? Koliko je $2 + 2$?
- 3
+ 4
> Ker je tako.
? Brez pravilnega
- a
- b
`);
  assert.equal(l.meta.stanje, "pregledano");
  assert.equal(l.meta.demo, "ohm");
  assert.deepEqual(l.sections, [{ title: "Razlaga", md: "Besedilo." }]);
  assert.deepEqual(l.alternatives, [{ title: "Na sliki", md: "Slika." }]);
  assert.equal(l.checks.length, 1, "vprašanje brez pravilnega odgovora se izpusti");
  assert.deepEqual(l.checks[0], { q: "Koliko je $2 + 2$?", options: ["3", "4"], correct: 1, why: "Ker je tako." });
});

test("every lesson file belongs to a topic and is complete", () => {
  for (const dir of fs.readdirSync(LESSONS_DIR, { withFileTypes: true }).filter((d) => d.isDirectory())) {
    for (const f of fs.readdirSync(path.join(LESSONS_DIR, dir.name)).filter((f) => f.endsWith(".md"))) {
      const id = `${dir.name}/${f.replace(/\.md$/, "")}`;
      assert.ok(getTopic(id), `${id}: tema ne obstaja`);
      const v = lessonView(id);
      const titles = v.lesson.sections.map((s) => s.title.toLowerCase());
      for (const need of ["razlaga", "rešeni primeri", "povzetek"]) assert.ok(titles.includes(need), `${id}: manjka »${need}«`);
      assert.ok(v.lesson.alternatives.length >= 2, `${id}: premalo drugačnih razlag`);
      assert.ok(v.lesson.checks.length >= 2, `${id}: premalo vprašanj`);
      if (v.lesson.status) assert.match(v.lesson.status, /^(osnutek|pregledano)$/);
      assert.ok(lessonSummaryForPrompt(id).length > 50);
    }
  }
});

test("demo and PhET mappings point at real topics", () => {
  for (const [id, d] of Object.entries(DEMOS)) for (const t of d.topics) assert.ok(getTopic(t), `${id}: ${t}`);
  for (const t of Object.keys(PHET)) assert.ok(getTopic(t), t);
});

test("search ranks title matches and folds diacritics", () => {
  const hits = searchTextbook("pitagorov");
  assert.equal(hits[0].id, "MAT-OS-8/pitagorov-izrek");
  assert.ok(searchTextbook("enacb").some((h) => h.id === "KEM-OS-8/urejanje-kemijskih-enacb"));
  assert.ok(searchTextbook("hipotenuza").some((h) => h.id === "MAT-OS-8/pitagorov-izrek"), "najde tudi besedilo lekcije");
  assert.deepEqual(searchTextbook("x"), []);
});

test("toc marks lessons, demos and practice", () => {
  const toc = tocView("MAT-OS-8");
  const t = toc.units.flatMap((u) => u.topics).find((x) => x.id === "MAT-OS-8/pitagorov-izrek");
  assert.deepEqual([t.lesson, t.demo, t.practice], [true, true, true]);
  assert.equal(tocView("NI-POT"), null);
});

test("textbook API", async () => {
  const app = createApp(openDb(":memory:"));
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const lesson = await (await fetch(`${base}/api/textbook/lesson?id=FIZ-OS-9/upor-in-ohmov-zakon`)).json();
    assert.equal(lesson.demo.id, "ohm");
    assert.match(lesson.phet.url, /^https:\/\/phet\.colorado\.edu\/sims\/html\/ohms-law\//);
    assert.equal(lesson.next.id.startsWith("FIZ-OS-9/"), true);
    const noLesson = await (await fetch(`${base}/api/textbook/lesson?id=FIZ-OS-9/prosti-pad`)).json();
    assert.equal(noLesson.lesson, null);
    assert.equal(noLesson.demo.id, "prosti-pad");
    assert.equal((await fetch(`${base}/api/textbook/lesson?id=../../etc/passwd`)).status, 404);
    assert.equal((await fetch(`${base}/api/textbook/toc?path=KEM-OS-8`)).status, 200);
    const hits = await (await fetch(`${base}/api/textbook/search?q=ohm`)).json();
    assert.equal(hits[0].id, "FIZ-OS-9/upor-in-ohmov-zakon");
  } finally {
    server.close();
  }
});
