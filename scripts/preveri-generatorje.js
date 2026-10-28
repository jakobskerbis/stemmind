// Preveri vse generatorje nalog: vsaka naloga mora prestati preverjanje s svojim
// odgovorom, besedilo ne sme vsebovati "undefined"/"NaN", vsaka tema mora obstajati.
// Zagon: node scripts/preveri-generatorje.js [predpona-id]   (npr. uni-)
import { GENERATORS, generateTask } from "../server/practice/index.js";
import { checkAnswer, roundHalfUp, fmt } from "../server/practice/check.js";
import { getTopic } from "../server/curriculum.js";

const prefix = process.argv[2] || "";
const SEEDS = Number(process.env.SEEDS || 40);

function correctInput(a) {
  if (a.type === "number") return (a.decimals != null ? fmt(roundHalfUp(a.value, a.decimals), a.decimals) : fmt(a.value)) + (a.unit ? " " + a.unit : "");
  if (a.type === "fraction") return `${a.num}/${a.den}`;
  if (a.type === "choice") return String(a.index);
  return a.values.join(",");
}

let n = 0;
let bad = 0;
const ids = new Set();
for (const g of GENERATORS) {
  if (!g.id.startsWith(prefix)) continue;
  if (ids.has(g.id)) {
    console.log(`PODVOJEN ID: ${g.id}`);
    bad++;
  }
  ids.add(g.id);
  if (!g.topics.length) {
    console.log(`${g.id}: brez tem (napačen naslov teme?)`);
    bad++;
  }
  for (const topicId of g.topics) {
    if (!getTopic(topicId)) {
      console.log(`${g.id}: tema ${topicId} ne obstaja`);
      bad++;
      continue;
    }
    for (let level = 1; level <= 3; level++) {
      for (let seed = 1; seed <= SEEDS; seed++) {
        try {
          const t = generateTask(topicId, level, seed);
          if (t.generator !== g.id) continue;
          n++;
          const a = t.answer;
          if (a.type === "number" && !Number.isFinite(a.value)) throw new Error(`odgovor ni število: ${a.value}`);
          if (a.type === "number" && a.decimals != null && Math.abs(a.value) < 0.5 * 10 ** -a.decimals && a.value !== 0) {
            throw new Error(`odgovor ${a.value} se zaokroži na 0 pri ${a.decimals} decimalkah`);
          }
          const res = checkAnswer(a, correctInput(a));
          if (res.kind !== "correct") throw new Error(`lastni odgovor ${correctInput(a)} ni sprejet: ${JSON.stringify(res)}`);
          const text = [t.text, t.hint, t.solution].join(" ");
          if (/undefined|NaN|Infinity/.test(text)) throw new Error(`besedilo vsebuje undefined/NaN: ${t.text}`);
          if (/\$\$|\\\\\(/.test(t.text) === false && (t.text.split("$").length - 1) % 2) throw new Error(`neparno število $ v besedilu: ${t.text}`);
        } catch (e) {
          bad++;
          if (bad <= 40) console.log(`${g.id} | ${topicId} | raven ${level} | seme ${seed}: ${e.message}`);
        }
      }
    }
  }
}
console.log(`Generatorjev: ${ids.size}, nalog: ${n}, napak: ${bad}`);
process.exit(bad ? 1 : 0);
