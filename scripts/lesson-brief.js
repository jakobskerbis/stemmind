#!/usr/bin/env node
// Izpiše kratka, popolna navodila (brief) za pisca ali pregledovalca lekcij, pripravljena za
// kopiranje v nalogo agenta. Orkestrator jih ne sestavlja ročno (docs/token-rules.md §2–4).
//   node scripts/lesson-brief.js MAT-OS-8/pitagorov-izrek FIZ-OS-8/vzgon      # pisec (2 temi)
//   node scripts/lesson-brief.js --review MAT-OS-8/pitagorov-izrek [...]     # pregledovalec
// Angleško namenoma: bere ga agent, angleščina porabi manj žetonov. Deluje tudi za UNI-* teme.
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const review = args.includes("--review");
const ids = args.filter((a) => !a.startsWith("-"));
if (!ids.length) {
  console.error("uporaba: node scripts/lesson-brief.js [--review] <id-teme> [...]");
  process.exit(1);
}
const here = path.dirname(fileURLToPath(import.meta.url));
const topics = JSON.parse(execFileSync(process.execPath, [path.join(here, "lesson-topic.js"), ...ids], { encoding: "utf8" }));
const missing = topics.filter((t) => t.error);
if (missing.length) {
  console.error(missing.map((t) => `${t.id}: ${t.error}`).join("\n"));
  process.exit(1);
}
const uni = topics.some((t) => t.id.startsWith("UNI-"));
const tek = topics.some((t) => /(^|-)TEK(-|$)/.test(t.id.split("/")[0])); // tekmovanja
const exemplar = topics[0].exemplar;
const files = topics.map((t) => t.file).join(" ");

const WRITER = `# STEMMind lesson brief: write ${topics.length} lesson${topics.length > 1 ? "s" : ""}

Read once: \`content/lessons/README.md\` (format) and \`${exemplar}\` (style). Do not read other lessons or explore the repo: \`previousSummaries\` below is what the student already knows.

Quality bar (docs/kakovost.md §1, all required):
- Correct. Compute every number with one \`node -e\` before writing it. \`check-lesson.js\` recomputes pure-number steps itself and fails on a mismatch.
- Level. Use only what \`before\` / \`previousSummaries\` taught; cover every goal in \`goals\`.
- Zakaj: start from a concrete situation or question the student knows, not a definition.
- Razlaga: concrete → picture → symbols; define each new term at first use; one idea per paragraph; at least one picture-like representation (table ≤ 4 columns, number line, diagram in words, or »simulacija spodaj« with one thing to try and what to notice). Exactly 2 \`:::premisli\` blocks that ask for a prediction or a »zakaj«, not a copy of the sentence above.
- Rešeni primeri: 3, easy → hard. Each: **Podatki:** (all given data with units) / **Iščemo:** / \`:::formula … :::\` / **Rešitev:** numbered steps with intermediate results and a short »why« clause / answer in a sentence. Primer 3 is a transfer case (word problem, reverse question or two steps). The last example (or »Primer 4 – zdaj ti«) leaves the final 1–2 steps to the student, answer hidden in a \`:::premisli\` block.
- Pogoste napake: 3–5 real misconceptions of this topic, each with the wrong reasoning, why it is wrong and the fix; the quiz distractors use the same misconceptions.
- Povzetek: a few bullet lines (the tutor gets it as context).
- Drugače: at least 2 truly different alternatives (»Na sliki«, »Iz vsakdanjega življenja«, »Korak za korakom s številkami«, »Bolj natančno«).
- Preveri se: 5 questions (1 recall, 2 understanding, 2 application), ≥ 3 options, exactly one \`+\`, every \`-\` option has its own \`~\` line (why a student picks it), \`>\` explains the right answer.
- Phone: no information only in colour; formulas fit 360 px or are split. 1300–2300 words, short sentences.

House rules: Slovenian with the terminology of the level; decimal comma \`$3{,}5$\`; all math in LaTeX; the formula of an example only inside \`:::formula\`; header \`stanje: osnutek\` and \`avtor: AI\`; never mention PhET or a model name.${
  uni
    ? "\nUniversity (UNI-*) lessons are shared by every course with the same topic: write them generically (no faculty or course name), put stricter proofs in »Drugače: Bolj natančno«, save to the listed `file`."
    : ""
}${
  tek
    ? "\nCompetition topic (Kenguru, Vegovo, olimpijada; Stefanovo = FIZ, Preglovo = KEM): the student already masters regular school material. Teach strategies and typical problem types; examples at competition level (easy ≈ Kenguru/school round, hard ≈ national round/olympiad) with complete solutions. Never cite real past problems, years or results."
    : ""
}

Workflow (docs/token-rules.md §2): one \`Write\` per file; one \`node -e\` for all numbers; then once \`node scripts/check-lesson.js -q ${files}\`; fix with \`Edit\`, never rewrite; do not read the file back. If \`lessonExists\` is true, upgrade the existing lesson: run the checker, fix what it and the bar flag, keep correct text.
Reply ≤ 3 lines per lesson: \`OK <id>, <words> besed\` or what is unresolved. No lesson text in the reply.

## Topics
`;

const REVIEWER = `# STEMMind review brief: ${topics.length} lesson${topics.length > 1 ? "s" : ""} (second, independent pass)

Run first: \`node scripts/check-lesson.js -q ${files}\`. Format, LaTeX and pure-number steps are then already checked (it prints how many steps it recomputed and any mismatch). Read for content only and check:
1. Remaining numbers: substitutions, rounding, units and significant figures in every worked example (batch them into one \`node -e\`); every \`+\` quiz answer truly correct, every \`-\` truly wrong; every \`~\` names the real error.
2. Level fits the path: nothing used that the path has not taught yet; every goal covered.
3. »Podatki« lists all given data; steps say why; Primer 3 is a transfer case; the faded final step exists.
4. Pogoste napake are real misconceptions of this topic and match the distractors; the 2 »premisli« ask for a prediction or a »zakaj«.
5. Slovenian terminology of the level, decimal comma, tables ≤ 4 columns.${uni ? "\n6. University lesson: generic (no faculty or course name), proofs in »Drugače: Bolj natančno«." : ""}${
  tek ? "\n6. Competition lesson: strategies and typical problem types at competition level (easy ≈ school round, hard ≈ national round), complete solutions, no real past problems, years or results cited." : ""
}
Fix with small \`Edit\`s, never rewrite. Do not read the exemplar or the README. Reply per lesson: \`<id>: N popravkov – <5–10 words each>\`, ≤ 5 lines.

## Lessons
`;

const compact = (t) =>
  review
    ? { id: t.id, file: t.file, level: t.pathLabel, goals: t.goals, before: t.before }
    : {
        id: t.id,
        file: t.file,
        name: t.name,
        unit: t.unit,
        level: t.pathLabel,
        goals: t.goals,
        lessonExists: t.lessonExists,
        demos: t.demos,
        before: t.before,
        after: t.after,
        previousSummaries: t.previousSummaries,
      };

process.stdout.write((review ? REVIEWER : WRITER) + topics.map((t) => JSON.stringify(compact(t), null, 1)).join("\n") + "\n");
