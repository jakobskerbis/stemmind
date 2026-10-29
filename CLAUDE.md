# STEMMind – notes for Claude

- Quality first, then tokens: follow `docs/token-rules.md` (read it once per thread, not per agent).
- Never read `server/university-extra.js` (1.1 MB) or `docs/predmetniki-*.md` whole; use `node scripts/lesson-topic.js <id>` and `grep -n`.
- Lesson format: `content/lessons/README.md`; check with `node scripts/check-lesson.js -q <files>` (also recomputes numeric steps). Writer/reviewer prompts: `node scripts/lesson-brief.js [--review] <ids>`.
- Lessons are written and reviewed by Opus (or Fable), never Sonnet.
- Every change is reviewed three times before merge (j, 2026-10-29): `docs/pregled.md` (pass 1 automatic incl. `node scripts/preveri-aplikacijo.cjs`, passes 2 and 3 by separate reviewer agents).
