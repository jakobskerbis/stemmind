#!/usr/bin/env node
// Izpiše podatke o temah (za pisanje lekcije): node scripts/lesson-topic.js MAT-OS-6/kot FIZ-OS-8/vzgon
import fs from "node:fs";
import path from "node:path";
import { getTopic, getPath, topicOrder } from "../server/curriculum.js";
import { lessonView, LESSONS_DIR } from "../server/textbook.js";

const ids = process.argv.slice(2);
if (!ids.length) {
  console.error("uporaba: node scripts/lesson-topic.js <id-teme> [...]");
  process.exit(1);
}
const out = ids.map((id) => {
  const t = getTopic(id);
  if (!t) return { id, error: "tema ne obstaja" };
  const order = topicOrder(t.path);
  const i = order.findIndex((x) => x.id === id);
  const v = lessonView(id);
  const siblings = order.filter((x) => x.id !== id && fs.existsSync(path.join(LESSONS_DIR, `${x.id}.md`))).map((x) => `content/lessons/${x.id}.md`);
  return {
    id, file: `content/lessons/${id}.md`, name: t.name, unit: t.unit, path: t.path, pathLabel: getPath(t.path).label, goals: t.goals,
    demo: v.demo, phet: v.phet?.sim || null,
    before: order.slice(Math.max(0, i - 6), i).map((x) => x.name),
    after: order.slice(i + 1, i + 4).map((x) => x.name),
    lessonExists: fs.existsSync(path.join(LESSONS_DIR, `${id}.md`)),
    sampleLessonsInSamePath: siblings.slice(0, 2),
  };
});
console.log(JSON.stringify(out, null, 1));
