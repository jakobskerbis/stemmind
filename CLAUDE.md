# STEMMind – notes for Claude

- Quality first, then tokens: follow `docs/token-rules.md` (read it once per thread, not per agent).
- Never read `server/university-extra.js` (1.1 MB) or `docs/predmetniki-*.md` whole; use `node scripts/lesson-topic.js <id>` and `grep -n`.
- Lesson format: `content/lessons/README.md`; check with `node scripts/check-lesson.js -q <files>`.
- Lessons are written and reviewed by Opus (or Fable), never Sonnet.
