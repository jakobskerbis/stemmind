# Token rules for every thread and agent

Written in English on purpose: it is read by agents, and English needs fewer tokens than Slovenian.

## 0. Quality comes first (j, 2026-10-29)

Save tokens only where lesson quality stays the same. Never to save tokens:
- drop the second-Opus review, the recalculation of every worked example, or the quiz-key check;
- shorten lessons, remove »Drugače« sections, worked examples or quiz questions;
- switch writers or reviewers to Sonnet or Haiku (Opus or Fable only; Opus is the default).

Since 2026-10-29 13:00 UTC j has the Claude Max 20x plan and set the rule (12:59): every thread spends the remaining usage on the best quality it can buy, relative to what is left. Quality steps (second review, raising old lessons to `docs/kakovost.md` §1, reviewer effort high) come before more lessons per day.

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

- The whole prompt of a writer agent is the output of `node scripts/lesson-brief.js <id> <id>`: it already holds the rules of §2, `docs/kakovost.md` §1/§1b and the topic JSON (`previousSummaries`, goals, demos, `form` plan). `--review <ids>` is the reviewer brief, `--read <ids>` the third-pass reader brief. The orchestrator passes only the ids in the workflow args; the agent's first step runs the script itself and follows it (workflow args shrink from ~100 KB to ~2 KB per batch). Do not write briefs by hand and do not add the README or exemplar text to the prompt. Agents do not explore the repo beyond that.
- Give each writer **2 related topics** (same path, adjacent in the learning path). The fixed cost of an agent (system prompt, tools, reading the format and exemplar) is then paid once for two lessons. Do not go above 3.
- Read at most: `content/lessons/README.md` (format) and `exemplar` (style, `content/lessons/FIZ-OS-9/upor-in-ohmov-zakon.md`). Use `previousSummaries` for what the student already knows; open a sibling lesson only if a summary is missing and it is truly needed.
- Keep the writing brief in the workflow script short (aim ≤ 400 words): level, j's rules (Podatki/Iščemo in every worked example, formula only in `:::formula`, Slovenian terms, decimal comma, »avtor: AI«, no »PhET«), the topic JSON. Do not paste README or the exemplar into the prompt as well as letting the agent read it.
- Write each file with one `Write`. Check numbers with one `node -e` call (cheaper and more reliable than mental arithmetic). Run `node scripts/check-lesson.js -q <files>` once; fix failures with `Edit`, not a rewrite. Do not `cat` the file back.
- Final reply to the orchestrator: ≤ 3 lines per lesson (`OK <id>, <words> besed` or what is unresolved). No lesson text in the reply.

## 3. Reviewer agents (second Opus, keep it)

- Give each reviewer **2 lessons** (3 only for diff-only raise reviews), effort `high`, and only: the file paths, the topic level (path label + goals), and the checklist below. No exemplar, no README.
- Run `node scripts/check-lesson.js -q <files>` first; the format, LaTeX and every pure-number step (`$37 \cdot 7 = 259$`) are then already checked (the checker prints how many steps it recomputed and fails on a mismatch), so the reviewer reads for content only.
- Checklist: the remaining numbers in worked examples recomputed (substitutions, rounding, units and significant figures; batch them into one `node -e`); every »+« quiz answer truly correct and every »-« truly wrong; level fits the path (nothing not yet taught); Slovenian terminology; »Podatki« lists all given data.
- Fix with small `Edit`s. Never rewrite the whole file. Reply: `<id>: N popravkov – <5–10 words each>`, ≤ 5 lines per lesson.
- For upgrading old lessons to the new format: run the checker first and fix only what it and the checklist flag; keep correct text as it is.
- Old lessons raised to the new bar (new `:::premisli`, `~` lines, 5th quiz question, faded example) get a second pass too: one reviewer per 3 raised lessons reads only `git diff origin/main -- <files>` and checks quiz keys, `~` lines, premisli answers, new numbers and level. The checker verifies arithmetic only; wrong quiz keys are where the earlier errors were.

## 3b. Reader agents (third pass, j 2026-10-29: everything in the app is reviewed three times)

- Every new lesson gets a third pass after the reviewer: an Opus »student's eyes« reader, prompt = `node scripts/lesson-brief.js --read <ids>`, **3 lessons per reader**, default effort, small `Edit`s only (clarity, premisli and faded step that really make the student think, not monotone per `docs/kakovost.md` §1b, flow, phone). It never changes numbers or quiz keys; it reports doubts instead.
- Raised old lessons already have three passes (original writer, raise writer, diff-only reviewer): no extra agent.
- Run it as the third stage of the same pipeline (writer → reviewer → reader per pair), not as a barrier, so readers start while other pairs are still being written. Cost ≈ +1 agent per 3 lessons.
- Code PRs follow `docs/pregled.md` (pass 1 `npm test` + UI smoke test, passes 2 and 3 by reviewer agents).

## 4. Orchestrator (the thread itself)

Each tool call resends the thread's whole context, which is large in long-running threads, so fewer calls matter most here.
- One wake = launch the batch, end the turn. Do not poll; the workflow notifies you.
- All threads share j's 5-hour and 7-day usage limits (Claude Max 20x since 2026-10-29). The 5-hour window is the binding one: on 2026-10-29 every thread stopped from 15:58 to 17:50 UTC because two lesson pipelines, several feature threads and long-context orchestrators ran at once. So each lesson thread runs **one batch per 5-hour window**, early in the window and one after the other: textbook thread at window start + 10 min, faks thread at window start + 1 h 30 min. The window start is the `resetsAt` that `get_session` shows during the previous window (windows chain back-to-back while threads are busy); at the end of each batch, schedule the next start from it. Batch content stays (textbook 16 new + 8 raises + readers; faks 24 new + 6 raises + 6 variety + readers). Faks topics are split between threads with `node scripts/fakultetne-lekcije.js --json --n 24 --deli 2 --del 0` (faks thread) and `--del 1` (textbook thread once OŠ+SŠ+TEK are done). A thread that is not a lesson thread runs at most 2 agents at once and no many-agent workflow unless j asks for one.
- Before launching a batch, call `get_session` (claude-code-remote MCP, no arguments) and read `external_metadata.rate_limit_info`: `allowed` → full batch; `allowed_warning` or `rejected` on `five_hour` → skip the slot (a batch cut off mid-way wastes its agents) and tell the optimizer thread; `allowed_warning` on `seven_day` → half batch. In the batch report, add the `five_hour` status at the end of the batch: the optimizer thread adds a batch per window after two windows without a warning and removes one after a warning.
- Long-running orchestrators: every tool call re-reads the thread's whole context (200–400k tokens in threads that run for days), so one call can cost as much as a small agent. Put several steps into one Bash call, never paste large outputs into the thread, and keep scheduled wakes rare (the optimizer checks every 3 h, not every hour).
- Report each batch to the optimizer thread: agents per role, wall time, `subagent_tokens` (the Workflow tool's total: input + output over all turns, probably with cache reads; comparable between batches, not exact accounting) and tokens per lesson.
- Do not read lesson files, memory files or old thread messages to report on a batch; use the agents' short replies.
- After the batch, one command: `node scripts/check-lesson.js -q $(git diff --name-only origin/main -- content/lessons) && npm test 2>&1 | tail -6`, then one command for `git add/commit/push`.
- Status: update the checklist; send at most one short reply per batch (≤ 60 words). No replies for routine steps.
- Write memory only when something new is decided, and update the existing file instead of adding a new one.

## 5. Model and effort

- Opus writes and reviews (j's rule). Fable may do the second review of the hardest lessons (competition topics, faks 3rd year and up, proofs, numerics): at most 2 Fable reviewers per batch, because Fable has its own smaller weekly counter on j's Usage screen. Never Sonnet or Haiku for content.
- Writers run at the default effort; reviewers at `high` (numbers are still verified with `node -e`, effort buys a more careful reading of level and reasoning).

## 6. App runtime cost (the tutor)

Already done in PR #26 and #47 (see `docs/stroski-ai.md`): Haiku by default, Opus only for »Razloži podrobneje«, static system prompt cached with 1 h TTL, history trimmed, reuse/hint answers without a model. When changing `prompts/system_prompt.md`, keep everything above `<!-- KOMPRENO:NASTAVITVE` byte-identical for all students, or the cache stops working.
