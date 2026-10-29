# Kompreno – notes for Claude

- The app was called STEMMind until 2026-10-29; now Kompreno in every name: visible brand, env vars `KOMPRENO_*`, `data/kompreno.db`, localStorage `kompreno.*`, cookies, events `kompreno:*`, `window.kompreno`. Old names survive only in compat code (server/env.js, db.js, gate.js, theme.js, posodobitev.js, bliznjice.js …); `test/ime.test.js` fails on any new »stemmind«. The GitHub repo is still `jakobskerbis/stemmind` and j's folder `stemmind-main`.

- Quality first, then tokens: follow `docs/token-rules.md` (read it once per thread, not per agent).
- Never read `server/university-extra.js` (1.1 MB) or `docs/predmetniki-*.md` whole; use `node scripts/lesson-topic.js <id>` and `grep -n`.
- Lesson format: `content/lessons/README.md`; check with `node scripts/check-lesson.js -q <files>` (also recomputes numeric steps). Writer/reviewer prompts: `node scripts/lesson-brief.js [--review|--read] <ids>`.
- Lessons are written and reviewed by Opus (or Fable), never Sonnet.
