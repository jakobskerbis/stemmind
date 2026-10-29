# Kompreno – notes for Claude

- The app was called STEMMind until 2026-10-29. Visible brand is now Kompreno everywhere (UI, i18n, emails, docs); internal names stay `stemmind` (env vars `STEMMIND_*`, DB file, localStorage keys, package name, repo).

- Quality first, then tokens: follow `docs/token-rules.md` (read it once per thread, not per agent).
- Never read `server/university-extra.js` (1.1 MB) or `docs/predmetniki-*.md` whole; use `node scripts/lesson-topic.js <id>` and `grep -n`.
- Lesson format: `content/lessons/README.md`; check with `node scripts/check-lesson.js -q <files>` (also recomputes numeric steps). Writer/reviewer prompts: `node scripts/lesson-brief.js [--review|--read] <ids>`.
- Lessons are written and reviewed by Opus (or Fable), never Sonnet.
