# Kompreno – notes for Claude

- App name lives in `brand.json` (name, slug, env prefix, wordmark; earlier names under `legacy`). Every user-visible string and internal name uses the current name (env `KOMPRENO_*`, `data/<slug>.db`, localStorage `<slug>.*`, events `<slug>:*`). Rename = `node scripts/preimenuj.js <Ime>` then fix the declined forms it lists. Old names live only in compat code that reads `legacy` (server/env.js, db.js, gate.js, theme.js, posodobitev.js, bliznjice.js); `test/ime.test.js` fails on any old name. The GitHub repo and j's folder still use the first name.

- Quality first, then tokens: follow `docs/token-rules.md` (read it once per thread, not per agent).
- Never read `server/university-extra.js` (1.1 MB) or `docs/predmetniki-*.md` whole; use `node scripts/lesson-topic.js <id>` and `grep -n`.
- Lesson format: `content/lessons/README.md`; check with `node scripts/check-lesson.js -q <files>` (also recomputes numeric steps). Writer/reviewer prompts: `node scripts/lesson-brief.js [--review|--read] <ids>`.
- Lessons are written and reviewed by Opus (or Fable), never Sonnet.
