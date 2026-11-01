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
5. **Simplifications are written in the sim** (`POENOSTAVITVE`, `POENOSTAVITVE_TITRACIJA`, `POENOSTAVITVE_ELEKTRIKA`, »Kaj je poenostavljeno?«) and here.
6. **Test against literature** in `test/laboratorij.test.js` (titration: `test/laboratorij-titracija.test.js`, electricity: `test/laboratorij-elektrika.test.js`) with the allowed deviation stated.
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
| `public/sim/lab-model-elektrika.js` | models, no DOM: `VezBench` (series/parallel/mixed netlist, reuses the `lab-model.js` meters, fuse, resistors, lamp, supply), `tester`, `MATERIALI` |
| `public/sim/lab-elektrika.js` | `labVezava` (engine `lab-vezava`), `labPrevodnost` (engine `lab-prevodnost`); circuit parts `drawMeter`, `drawResistor`, `drawLamp` shared with `labOhm` (`lab-fiz.js`) |

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

### `lab-vezava` – series and parallel circuits (FIZ-OS-9 električni krog; FIZ-SS-2 električna vezja)
Same supply, multimeter, fuses, 0,5 W resistors (47/100/220/470 Ω ±5 %) and 6 V / 0,1 A lamps as `lab-ohm`, plus a wire (0,02 Ω, ocena) and an
empty socket. Series or parallel with 2–3 elements, or mixed 1 + (2 ∥ 3); ammeter and voltmeter each in series or in parallel, at the supply
(series = main line, parallel = supply terminals) or at element 1–3. Netlist solved by nodal analysis with lamp iteration. Summary per circuit
(type, parts, U₀): I = I₁ + I₂, U = U₁ + U₂, U/I vs the total from the colour code; graph measured U/I vs computed R_total with y = x;
three conclusion questions (series voltages, parallel currents, lamps dim in series and a removed lamp breaks only a series circuit).
Mistakes: voltmeter in series (I ≈ 0), ammeter in parallel (fuse), wire across a branch (1 A current limit), 47 Ω at 12 V burns, lamps at 12 V in parallel burn.
Tests (`test/laboratorij-elektrika.test.js`): nominal totals; Kirchhoff sums in the model to 10⁻⁶ (series sum includes the 1 Ω ammeter burden);
measured U/I = R_true + R_ammeter within the summed meter specs and R_true within ±5 % of the colour code (200 seeds, 5 circuits);
lamps: parallel 0,95–1,0 of nominal, series 0,05–0,15 ((3/6)^3,4 = 0,095), removed lamp: series off, parallel unchanged ±0,02; the mistakes above; deterministic seed.

### `lab-prevodnost` – metals and non-metals, what conducts? (NAR-OS-7 elementi in spojine; KEM-OS-8 kovine)
Tester: 4,5 V flat battery (internal resistance 1,5 Ω, ocena), E10 lamp 3,8 V / 0,3 A (same lamp rules as ZARNICA) or a red LED (1,8 V) with 150 Ω,
two crocodile clips, optional ammeter (200 mA / 10 A; ~0,3 A through a metal shows OL on 200 mA). Samples 6 cm long: Cu, Al, Fe wire Ø 1 mm,
pencil lead Ø 0,5 mm, sulfur, glass, plastic, wood, rubber, paper, solid salt (1 cm² section); liquids between two copper plates (cell constant 50 m⁻¹, ocena):
NaCl 1/5/20 %, tap, distilled and sugar water. Data: ρ Cu 1,68·10⁻⁸, Al 2,65·10⁻⁸, Fe 9,7·10⁻⁸, S 2·10¹⁵ Ω m (CRC); NaCl solutions 1,6 / 7,0 / 19,6 S/m
(CRC, concentrative properties); estimates: pencil lead 3·10⁻⁵ Ω m, insulators 10¹⁰–10¹⁴ Ω m, tap water 0,05 S/m, distilled water on air 10⁻⁴ S/m,
decomposition voltage 2,1 V (bubbles), visibility limits (lamp 3 % of nominal light, LED 0,05 mA). Magnet, lustre and bend buttons; the student
sorts each sample into kovina / nekovina / drugo and checks (graphite conducts but is a non-metal; copper is a metal though not magnetic).
Graph: current vs salt % (lamp and LED). Tests: R of copper from ρ; metals light, graphite and 20 % salt water weakly, 1 % salt water not with the lamp
but with the LED (and bubbles), insulators and distilled/sugar water dark with both (< 0,1 mA); current rises with concentration; copper 0,3 A ± 10 %;
brightness Cu > graphite > 5 % salt; only iron is magnetic; metals and non-metals classified as in the textbook.

## Next (from j's list)
FIZ: heater power and efficiency (`lab-grelnik`, planned: 12 V / 50 W immersion heater, water on a balance, lid and stirring, Q = mcΔT vs W = UIt),
pendulum and stopwatch, density and buoyancy in a measuring cylinder, refraction through a lens. KEM: flame test, electrolysis of water.
NAR: the same engines on more NAR-OS-6/7 topics. Each one: model + test first, then UI, then the three reviews.
