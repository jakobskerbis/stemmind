# Learning material types (gradiva)

j's brief point 7 (2026-10-30), design doc »Evklid Osebno poleg šolske licence«, table »Vrste gradiv«.
English on purpose: agents read this file. Code: `server/gradiva.js`, `server/govor.js`, `public/gradiva.js`.

## Access

One function decides: `canUse(student, vrsta, topicId)` in `server/gradiva.js`. `free` types (made from
the free textbook text, no cost) are for everyone; topic materials follow `lessonInteractive` from
`server/placila/pravice.js` (school licence: its subjects and grades; Osebno: all); the weak-topic
worksheet is Osebno only. Locked materials are hidden in the lesson; offers belong to the offers work (brief point 3).

## Types

| Type | Status | Source | Access |
|---|---|---|---|
| One-page summary + mind map (`povzetek`) | built | lesson »Povzetek«, »Pogoste napake«, `:::formula` blocks; optional authored map | free, `/gradiva/povzetek/<POT>/<tema>` |
| Audio summary (`zvok`) | built | same text, LaTeX read aloud by `server/govor.js`, browser `speechSynthesis` with a Slovenian voice | free |
| Printable worksheet with solutions (`delovni-list`) | built | task generators (already reviewed), seeded: same »koda lista« = same sheet | paid; teachers free (next PR) |
| Weak-topic worksheet | built | tasks of the last 60 days, ≥3 tasks and ≥40 % wrong at first try | paid, button on Napredek |
| Past NPZ / matura | links only | RIC holds all rights (»© Državni izpitni center, vse pravice pridržane« on every paper), so papers are linked on ric.si, never copied. The timed mock exam (PR #125) uses our own tasks in the RIC format | everyone |
| Home experiment (`poskus`), real-life project (`projekt`) | format + print page built, no content yet | `content/gradiva/<vrsta>/<POT>/<tema>.md` | as topic materials |
| Short video from a simulation (`video`) | format + in-app player built, no content yet | script `content/gradiva/video/<POT>/<tema>.md` drives an existing simulation, captions read aloud | as topic materials |
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

## Written materials (content files)

Check every file with `node scripts/check-gradivo.js -q <files>` (format, KaTeX, simulation id, scene times).
Front matter always has `naslov`, `avtor: AI`, `stanje: osnutek|pregledano`. Examples: `test/fixtures/gradiva/`.

**Home experiment** (`poskus`): only experiments that are safe at home with household items; anything with
acids, flames, mains electricity or heat beyond a kettle belongs to the virtual lab instead. Front matter also
`cas` (e.g. `20 min`) and `odrasli: da|ne` (adult present). Sections in this order: `## Varnost` (always
first, concrete: what could go wrong and how to avoid it), `## Potrebuješ` (bullet list), `## Postopek`
(numbered), `## Kaj opaziš`, `## Zakaj` (the physics/chemistry at the topic's level), `## Vprašanje` (one
question, then a line `> Odgovor: …`, printed at the bottom).

**Project** (`projekt`): `cas` (e.g. `1 teden`); sections `## Izziv`, `## Potrebuješ`, `## Koraki`,
`## Kaj oddaš`, `## Merila` (a short rubric the teacher can grade by).

**Short video** (`video`): `simulacija` (an id from `public/sim/index.js` ENGINES, normally one listed for the
topic in `public/sim/katalog.js`), optional `moznosti` (JSON options for the simulation), `trajanje` m:ss
between 0:45 and 2:30. Each scene is `## m:ss` (first 0:00, increasing), one or two sentences of caption
(≤ 260 characters, read aloud), and action lines `- nastavi: <slider aria-label> = <value>` or
`- klikni: <button text>`. Slider labels are the `label` of `kit.slider` in the simulation's source. The
player waits for the voice to finish a caption before the next scene, so keep captions short.

## Content rules

All new content (maps, experiments, projects, video scripts) is written and reviewed by Opus or Fable,
three passes as lessons (`docs/token-rules.md` §3, §3b), at the pace the optimizer thread sets (§4).
Nothing here needs new content to work: every type above has a version built from reviewed material.
