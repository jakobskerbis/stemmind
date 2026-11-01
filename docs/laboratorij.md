# Virtualni laboratorij

English summary for agents: simulated experiments where the student builds the setup (substances, equipment,
amounts, also wrong ones), measures with realistic instrument noise, records a table and a graph, sees the
consequences of mistakes and answers a conclusion question. Brief: j, point 8 of
`placljivi-paket/prompt-za-koordinatorja.md`. Quality bar: `docs/kakovost.md` §3 plus the rules below.

## Rules for every experiment

1. **Real laws and real data.** The model computes with the physical/chemical law and literature values
   (constants, densities, solubilities, indicator ranges, rates, gas volume at room conditions, heat losses).
   Every number in `public/sim/lab-model*.js` has a source in a comment or is marked »ocena« (estimate).
2. **Real equipment in real proportions** (fixed scale, a scale bar), real time, measurement noise from the
   instrument's datasheet accuracy (fixed calibration error + last-digit jitter, never more than the spec).
3. **Mistakes have consequences** that a real lab would show: overrange (OL), blown fuse, burnt resistor,
   short circuit (supply current limit), foam overflow, popped stopper, missing goggles.
4. **Table + graph + conclusion question** (one correct option, an explanation for every option).
5. **Simplifications are written in the sim** (`POENOSTAVITVE`, `POENOSTAVITVE_TITRACIJA`, »Kaj je poenostavljeno?«) and here.
6. **Test against literature** in `test/laboratorij.test.js` (titration: `test/laboratorij-titracija.test.js`) with the allowed deviation stated.
7. **Review:** pass 1 automatic, pass 2 an Opus expert check of the science and function, pass 3 look/phone/pedagogy
   (`docs/pregled.md`). Dangerous experiments are only simulated; a short video only when no realistic
   simulation is possible; home experiments get a safety note and an equipment list.

## Code

| File | What |
|---|---|
| `public/sim/lab-model.js` | models, no DOM (tests import it): `OhmBench`, `Co2Bench`, multimeter, fuse, lamp, `rng`/`gauss` |
| `public/sim/lab.js` | UI parts: `ticker` (real time, also with reduced motion), `lcd`, `dataTable`, `dataGraph`, `conclusion`, `eventLog`, `notes`, `fixed` |
| `public/sim/lab-fiz.js` | `labOhm` (engine `lab-ohm`) |
| `public/sim/lab-kem.js` | `labCo2` (engine `lab-co2`), `flaskLevel` |
| `public/sim/lab-model-titracija.js` | titration model, no DOM: `TitrBench`, `solvePH` (charge balance), indicators, burette/pipette/pH meter |
| `public/sim/lab-titracija.js` | `labTitracija` (engine `lab-titracija`) |

Engines are registered in `public/sim/index.js` and shown at topics through `public/sim/katalog.js`.
The »Laboratorij« tab (`public/laboratorij.js`, `server/laboratorij.js`, `GET /api/students/:id/lab`) lists every `lab-` engine
once (deduped by engine + opts) with the topics it belongs to; a new experiment needs an entry in `LAB_INFO` in `katalog.js`
(subject, title, one-line description), which `test/laboratorij-pogled.test.js` checks. Lock = the textbook's lesson lock.

## Experiments

### `lab-ohm` – Ohm's law (FIZ-OS-9 tok in napetost, upor in Ohmov zakon; FIZ-SS-2 električni tok)
Supply 0–12 V with 1 A current limit; 0,5 W resistors 47/100/220/470 Ω (±5 %, colour bands) or a 6 V / 0,1 A lamp;
ammeter and voltmeter each in series, parallel or disconnected, with ranges. Data: 3½-digit multimeter
±(0,5 % + 2) V, ±(1 % + 2) mA, ±(2 % + 5) 10 A; 10 MΩ voltmeter; shunts 10/1/0,01 Ω; F fuses per IEC 60127-2 (hold at 1,5 In, blow above);
lamp P ∝ U^1,6, cold filament R/10. Tests: Ohm's law with burden to 0,01 %; R from the slope within tolerance;
voltmeter in series; ammeter in parallel blows the fuse; resistor burns at ~3 W, survives 1,44 W; lamp exponent.

### `lab-co2` – baking soda and acid, proof of CO₂ (KEM-OS-8 kisline in baze; KEM-OS-9 računanje z množino; KEM-SS-1 stehiometrija)
Lemon juice / vinegar / HCl 1 mol/L / water in a 100 mL Erlenmeyer flask on a 0,01 g balance; soda weighed on a boat;
no stopper, stopper with a tube into limewater or water, or a closed stopper; burning splint; stopwatch; Δm(t) graph.
Data: molar masses (IUPAC), citric acid 46,7 g/L (Penniston 2008), CO₂ solubility 0,038 mol/L at 20 °C (Sander 2015),
Ca(OH)₂ 1,73 g/L (CRC), Vm = 24,05 L/mol, CO₂ in the headspace weighs 0,63 g/L more than the air it replaced. Estimates: reaction time constants, foam lifetime, bubble absorption
in limewater, stopper pop pressure, CO₂ leaving an open flask. Tests: 1 g NaHCO₃ → 0,524 g CO₂ (after 1 h, ±0,005 g),
dissolved CO₂ and CO₂ in the headspace lower the loss at 30 s, limiting reagent, triprotic citric acid, limewater milky then clear,
splint below 15 % O₂, overflow and popped stopper.

### `lab-titracija` – acid–base titration with an indicator (KEM-OS-8 nevtralizacija in soli; KEM-SS-2 šibke kisline in baze, titracija)
Goggles; rinse the 50 mL burette with titrant, fill it with NaOH 0,1000 mol/L (exact, as a standardised solution), let the air out of the tip;
pipette 25,00 mL of HCl, acetic acid or vinegar diluted 1 : 10 (unknown c, seeded 0,08–0,12 mol/L) into a 100 mL Erlenmeyer flask on a white tile;
indicator (none, phenolphthalein, methyl orange, bromothymol blue) and optional pH meter; stopcock closed / drops (~2/s) / stream (~1 mL/s) / one drop;
the student reads the meniscus in a 15× zoom and types the readings; table of trials, concordance (0,10 mL), mean, computed c checked against
the student's own data and then against the true value with the likely causes; pH(V) graph 0–50 mL, pH 0–14, equivalence point from the steepest segment.
Model: pH from the charge balance (H⁺, OH⁻, Na⁺, Cl⁻, acetate with Ka), bisection on log[H⁺], ideal solutions. Data: Kw = 1,0·10⁻¹⁴ (25 °C),
Ka(CH₃COOH) = 1,75·10⁻⁵, pKa 4,756 (CRC Handbook; Harris); indicator ranges phenolphthalein 8,2–10,0, methyl orange 3,1–4,4, bromothymol blue 6,0–7,6
(CRC), pKIn 3,46 / 7,1 (Harris), 9,4 for phenolphthalein; colour from the In⁻ fraction (Henderson–Hasselbalch) through estimated absorbances.
End colour seen: two-colour indicators at the top of the range, phenolphthalein at the first faint pink (8,2). Burette class A ±0,05 mL (ISO 385,
smooth calibration error ≤ 0,04 mL between two readings), pipette class A ±0,03 mL (ISO 648), drop ~0,05 mL ±10 % (Harris).
Estimates: stream 1 mL/s and drops 0,1 mL/s, 0,8 mL water left in an unrinsed burette (titrant ~1,6 % weaker on the first fill), air bubble 0,2–0,5 mL
pushed out by a stream after 0,3–1,5 mL (drops do not move it), pH meter ±0,02 (0,01 resolution), indicator absorbances, transient colour at the drop
(0,3 s far from the end point, up to ~2,5 s near it), pipetting shortened to 3 s, 0,2 mL water in a pipette not rinsed with the sample (−0,8 %),
0,5 mL left on the wall of a rinsed flask (water: no error; sample: +2 %). Mistakes: no goggles (nothing starts), overshoot, wrong indicator,
no indicator, unrinsed burette, air bubble, wrong reading (hint), final reading below the initial one (refused), burette run to the 50 mL mark;
in the model only (no control yet): wet pipette and flask rinsed with the sample (`pipette(id, { pipeta, erlenmajerica })`). Tests (`test/laboratorij-titracija.test.js`):
initial pH of 0,1 M HCl 1,00 (±0,01) and acetic acid 2,88 (±0,02); equivalence 7,00 (±0,01) and 8,72 (±0,03), half-equivalence = pKa 4,76 (±0,02), +10 mL 1,37 / 4,58 and +30 mL 11,96 (±0,01, dilution by the added volume);
phenolphthalein within 0,05 mL and bromothymol blue within 0,1 mL of equivalence with HCl; methyl orange with acetic acid at 25–35 % of the
equivalence volume; careful titrations recover c within ±0,3 % (10 seeds, three samples); overshoot > +5 %; unrinsed burette +1,1 to +2,2 % on the first
titration, and that dilution shrinks after each top-up; air bubble adds its volume (±0,1 mL); wet pipette −0,5 to −1,1 %,
flask rinsed with sample +1,5 to +2,5 %, flask wet with water ±0,3 %; topping up never lowers the level, volume is conserved, the level stops at 50 mL; pipette, burette and pH meter within spec over 500 seeds; drops and flow; deterministic seed.

## Next (from j's list)
KEM: flame test, electrolysis of water. FIZ: pendulum and stopwatch,
density and buoyancy in a measuring cylinder, refraction through a lens, heating water with a thermometer.
NAR: the same engines on NAR-OS-6/7 topics. Each one: model + test first, then UI, then the three reviews.
