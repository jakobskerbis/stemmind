// Povzetek povratnih informacij testerjev (brez API, brez stroškov).
//   node scripts/povzetek-povratnih.js [data/povratne-informacije.json]
// Zapiše data/povratne-informacije-povzetek.md in ga izpiše.
import fs from "node:fs";
import path from "node:path";
import { summaryMarkdown } from "../server/feedback.js";

const file = process.argv[2] || path.join("data", "povratne-informacije.json");
if (!fs.existsSync(file)) {
  console.log(`Ni datoteke ${file}. Mnenja se zapišejo vanjo, ko prvi tester pošlje vprašalnik.`);
  process.exit(0);
}
const entries = JSON.parse(fs.readFileSync(file, "utf8"));
const md = summaryMarkdown(entries);
const out = path.join(path.dirname(file), "povratne-informacije-povzetek.md");
fs.writeFileSync(out, md);
console.log(md);
console.log(`Shranjeno v ${out}`);
