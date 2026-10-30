# Learning material types (gradiva)

j's brief point 7 (2026-10-30), design doc »Evklid Osebno poleg šolske licence«, table »Vrste gradiv«.
English on purpose: agents read this file. Code: `server/gradiva.js`, `server/govor.js`, `public/gradiva.js`.

## Access

One function decides: `canUse(student, vrsta)` in `server/gradiva.js`. `free` types (made from the free
textbook text, no cost) are for everyone; the rest need `accounts.premiumFor` until
`server/placila/pravice.js` adds the school licence (school licence: school subjects; Osebno: all
subjects). Locked materials are hidden in the lesson; offers belong to the offers work (brief point 3).

## Types

| Type | Status | Source | Access |
|---|---|---|---|
| One-page summary + mind map (`povzetek`) | built | lesson »Povzetek«, »Pogoste napake«, `:::formula` blocks; optional authored map | free, `/gradiva/povzetek/<POT>/<tema>` |
| Audio summary (`zvok`) | built | same text, LaTeX read aloud by `server/govor.js`, browser `speechSynthesis` with a Slovenian voice | free |
| Printable worksheet with solutions (`delovni-list`) | built | task generators (already reviewed), seeded: same »koda lista« = same sheet | paid; teachers free (next PR) |
| Weak-topic worksheet | built | tasks of the last 60 days, ≥3 tasks and ≥40 % wrong at first try | paid, button on Napredek |
| Past NPZ / matura | links only | RIC holds all rights (»© Državni izpitni center, vse pravice pridržane« on every paper), so papers are linked on ric.si, never copied. The timed mock exam (PR #125) uses our own tasks in the RIC format | everyone |
| Home experiments, real-life projects, short videos from simulations | next PR | content files (format to be added here) | paid |
| Live class quiz | later PR | teacher page, class code | teachers |

## Authored mind map (content)

Without a file the mind map branches are the lesson's summary bullets. A better map is a short file
`content/gradiva/miselni/<POT>/<tema>.md` (same id as the lesson):

```
---
avtor: AI
stanje: osnutek
---
- Upor: nasprotuje toku
  - enota ohm ($\Omega$)
- Ohmov zakon
  - $I = \dfrac{U}{R}$
```

Top-level bullets are branches (at most 8, keyword first, `Label: detail` allowed), indented bullets are
details. With an authored map the summary page also shows the lesson summary.

## Content rules

All new content (maps, experiments, projects, video scripts) is written and reviewed by Opus or Fable,
three passes as lessons (`docs/token-rules.md` §3, §3b), at the pace the optimizer thread sets (§4).
Nothing here needs new content to work: every type above has a version built from reviewed material.
