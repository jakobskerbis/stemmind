# Token rules for every thread and agent

Written in English on purpose: it is read by agents, and English needs fewer tokens than Slovenian.

## 0. Quality comes first (j, 2026-10-29)

Save tokens only where lesson quality stays the same. Never to save tokens:
- drop the second-Opus review, the recalculation of every worked example, or the quiz-key check;
- shorten lessons, remove »Drugače« sections, worked examples or quiz questions;
- switch writers or reviewers to Sonnet or Haiku (Opus or Fable only; Opus is the default).

Everything below cuts waste (re-reading, idle turns, long replies), not content.

## 1. Never read these whole

| File | Size | Use instead |
|---|---|---|
| `server/university-extra.js` | 1.1 MB (~400k tokens) | `node scripts/lesson-topic.js <id>`, `node scripts/fakultetne-lekcije.js --json --n 16` |
| `docs/predmetniki-*.md` | 17–118 KB | `grep -n` for the one course you need |
| `content/references/*.json` | >150 KB | `grep` / a `node -e` filter |
| `server/university-data.js`, `server/curriculum-data.js` | 30–60 KB | the two scripts above |
| other lessons in the same path | ~5k tokens each | `previousSummaries` in the `lesson-topic.js` output |

Read a big file only with `offset`/`limit` or `grep -n`, never twice in one agent.

## 2. Lesson writer agents

- The orchestrator runs `node scripts/lesson-brief.js <id> <id>` once per writer agent and pastes the output as the whole prompt: it already holds the rules of §2 and `docs/kakovost.md` §1 and the topic JSON (`previousSummaries`, goals, demos). `node scripts/lesson-brief.js --review <ids>` does the same for reviewers. Do not write briefs by hand and do not add the README or exemplar text to the prompt. Agents do not explore the repo or rerun the scripts.
- Give each writer **2 related topics** (same path, adjacent in the learning path). The fixed cost of an agent (system prompt, tools, reading the format and exemplar) is then paid once for two lessons. Do not go above 3.
- Read at most: `content/lessons/README.md` (format) and `exemplar` (style, `content/lessons/FIZ-OS-9/upor-in-ohmov-zakon.md`). Use `previousSummaries` for what the student already knows; open a sibling lesson only if a summary is missing and it is truly needed.
- Keep the writing brief in the workflow script short (aim ≤ 400 words): level, j's rules (Podatki/Iščemo in every worked example, formula only in `:::formula`, Slovenian terms, decimal comma, »avtor: AI«, no »PhET«), the topic JSON. Do not paste README or the exemplar into the prompt as well as letting the agent read it.
- Write each file with one `Write`. Check numbers with one `node -e` call (cheaper and more reliable than mental arithmetic). Run `node scripts/check-lesson.js -q <files>` once; fix failures with `Edit`, not a rewrite. Do not `cat` the file back.
- Final reply to the orchestrator: ≤ 3 lines per lesson (`OK <id>, <words> besed` or what is unresolved). No lesson text in the reply.

## 3. Reviewer agents (second Opus, keep it)

- Give each reviewer **2–3 lessons** and only: the file paths, the topic level (path label + goals), and the checklist below. No exemplar, no README.
- Run `node scripts/check-lesson.js -q <files>` first; the format, LaTeX and every pure-number step (`$37 \cdot 7 = 259$`) are then already checked (the checker prints how many steps it recomputed and fails on a mismatch), so the reviewer reads for content only.
- Checklist: the remaining numbers in worked examples recomputed (substitutions, rounding, units and significant figures; batch them into one `node -e`); every »+« quiz answer truly correct and every »-« truly wrong; level fits the path (nothing not yet taught); Slovenian terminology; »Podatki« lists all given data.
- Fix with small `Edit`s. Never rewrite the whole file. Reply: `<id>: N popravkov – <5–10 words each>`, ≤ 5 lines per lesson.
- For upgrading old lessons to the new format: run the checker first and fix only what it and the checklist flag; keep correct text as it is.
- Old lessons raised to the new bar (new `:::premisli`, `~` lines, 5th quiz question, faded example) get a second pass too: one reviewer per 3 raised lessons reads only `git diff origin/main -- <files>` and checks quiz keys, `~` lines, premisli answers, new numbers and level. The checker verifies arithmetic only; wrong quiz keys are where the earlier errors were.

## 4. Orchestrator (the thread itself)

Each tool call resends the thread's whole context, which is large in long-running threads, so fewer calls matter most here.
- One wake = launch the batch, end the turn. Do not poll; the workflow notifies you.
- All threads share j's 5-hour and 7-day usage limits. Lesson batches run at fixed slots: OŠ/SŠ textbook thread 10:50, 15:50, 20:50, 00:50, 05:50 UTC; faks thread 04:20, 13:20, 18:20, 23:20 UTC. A thread that is not a lesson thread runs at most 2 agents at once and none in the first hour after a batch starts.
- Before launching a batch, call `get_session` (claude-code-remote MCP, no arguments) and read `external_metadata.rate_limit_info`: launch only when `status` is `allowed`. `allowed_warning` with `rateLimitType: seven_day` means the weekly limit is near and every thread would stop until `resetsAt`: do not scale up, shrink or hold the batch and tell the optimizer thread.
- Report each batch to the optimizer thread: agents per role, wall time, `subagent_tokens` (the Workflow tool's total: input + output over all turns, probably with cache reads; comparable between batches, not exact accounting) and tokens per lesson.
- Do not read lesson files, memory files or old thread messages to report on a batch; use the agents' short replies.
- After the batch, one command: `node scripts/check-lesson.js -q $(git diff --name-only origin/main -- content/lessons) && npm test 2>&1 | tail -6`, then one command for `git add/commit/push`.
- Status: update the checklist; send at most one short reply per batch (≤ 60 words). No replies for routine steps.
- Write memory only when something new is decided, and update the existing file instead of adding a new one.

## 5. Model and effort

- Opus writes and reviews (j's rule). Do not use Fable unless j asks: it costs more and Opus meets the quality bar with the second review.
- Do not raise effort above the default for writers; reviewers may use the default too, since numbers are verified with `node -e`.

## 6. App runtime cost (the tutor)

Already done in PR #26 and #47 (see `docs/stroski-ai.md`): Haiku by default, Opus only for »Razloži podrobneje«, static system prompt cached with 1 h TTL, history trimmed, reuse/hint answers without a model. When changing `prompts/system_prompt.md`, keep everything above `<!-- STEMMIND:NASTAVITVE` byte-identical for all students, or the cache stops working.
