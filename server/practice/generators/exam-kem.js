// Izpitne naloge iz kemije (angleško) za JEE, NEET, gaokao in CBSE: mol, stehiometrija,
// raztopine, plini, pH, termokemija, ravnotežje, kinetika, elektrokemija, zgradba atoma.
import { en, num, roundTo, task } from "./exam-util.js";
import { choices } from "../rng.js";

const T = (slug) => `KEM-EXB/${slug}`;
// Molske mase (g/mol), zaokrožene kot na izpitih.
const COMPOUNDS = [
  ["H_2O", "water", 18],
  ["CO_2", "carbon dioxide", 44],
  ["NaCl", "sodium chloride", 58.5],
  ["NaOH", "sodium hydroxide", 40],
  ["CaCO_3", "calcium carbonate", 100],
  ["H_2SO_4", "sulfuric acid", 98],
  ["C_6H_{12}O_6", "glucose", 180],
  ["NH_3", "ammonia", 17],
  ["HCl", "hydrogen chloride", 36.5],
  ["KMnO_4", "potassium permanganate", 158],
];
const NA = 6.022e23;

export const EXAM_KEM = [
  {
    id: "exk-mole",
    topics: [T("mole-concept")],
    gen(level, r) {
      const [f, name, M] = r.pick(COMPOUNDS);
      if (level === 1) {
        const n = r.pick([0.1, 0.25, 0.5, 2, 3]);
        return task({
          text: `What is the mass of ${n} mol of ${name} ($\\mathrm{${f}}$, $M = ${M}$ g/mol), in grams?`,
          answer: num(n * M, 2),
          hint: "$m = nM$.",
          formula: "m = n M",
          solution: `$m = ${n} \\cdot ${M} = ${en(n * M)}\\ \\text{g}$`,
        });
      }
      if (level === 2) {
        const m = r.pick([9, 18, 36, 4.4, 22, 11.7, 90]);
        const N = (m / M) * NA;
        return task({
          text: `How many molecules (formula units) are there in ${m} g of ${name} ($M = ${M}$ g/mol)? Give the answer in units of $10^{23}$.${roundTo(2)} (Use $N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}$.)`,
          answer: num(N / 1e23, 2),
          hint: "First find moles, $n = m/M$, then multiply by Avogadro's number.",
          formula: "N = \\dfrac{m}{M} N_A",
          solution: `$n = ${m}/${M} \\approx ${en(m / M, 4)}\\ \\text{mol}$\n$N = ${en(m / M, 4)} \\cdot 6.022 \\times 10^{23} \\approx ${en(N / 1e23, 2)} \\times 10^{23}$`,
        });
      }
      const [el, M1, x, y] = r.pick([["Fe", 56, 2, 3], ["Al", 27, 2, 3], ["Cu", 63.5, 1, 1], ["Mg", 24, 1, 1], ["Ca", 40, 1, 1]]);
      const Mox = x * M1 + y * 16;
      const pct = ((x * M1) / Mox) * 100;
      return task({
        text: `What is the percentage by mass of ${el} in the oxide $\\mathrm{${el}${x > 1 ? `_${x}` : ""}O${y > 1 ? `_${y}` : ""}}$? ($M(\\mathrm{${el}}) = ${M1}$, $M(\\mathrm{O}) = 16$ g/mol.)${roundTo(1)}`,
        answer: num(pct, 1),
        hint: "Mass of the element in one formula unit divided by the molar mass of the compound.",
        formula: "w = \\dfrac{x M(\\text{element})}{M(\\text{compound})} \\cdot 100\\%",
        solution: `$M = ${x} \\cdot ${M1} + ${y} \\cdot 16 = ${en(Mox)}$\n$w = \\dfrac{${en(x * M1)}}{${en(Mox)}} \\cdot 100\\% \\approx ${en(pct, 1)}\\%$`,
      });
    },
  },
  {
    id: "exk-stoich",
    topics: [T("stoichiometry")],
    gen(level, r) {
      if (level === 1) {
        const m = r.pick([10, 20, 25, 50]);
        const co2 = (m / 100) * 44;
        return task({
          text: `Calcium carbonate decomposes: $\\mathrm{CaCO_3 \\rightarrow CaO + CO_2}$. What mass of $\\mathrm{CO_2}$ is produced from ${m} g of $\\mathrm{CaCO_3}$, in grams? ($M$: CaCO₃ 100, CO₂ 44 g/mol.)`,
          answer: num(co2, 2),
          hint: "1 mol of CaCO₃ gives 1 mol of CO₂.",
          solution: `$n(\\mathrm{CaCO_3}) = ${m}/100 = ${en(m / 100)}\\ \\text{mol} = n(\\mathrm{CO_2})$\n$m(\\mathrm{CO_2}) = ${en(m / 100)} \\cdot 44 = ${en(co2)}\\ \\text{g}$`,
        });
      }
      if (level === 2) {
        const mH = r.pick([2, 4, 6, 8]);
        const water = (mH / 2) * 18;
        return task({
          text: `Hydrogen burns in oxygen: $\\mathrm{2H_2 + O_2 \\rightarrow 2H_2O}$. What mass of water forms when ${mH} g of hydrogen burns completely, in grams? ($M$: H₂ 2, H₂O 18 g/mol.)`,
          answer: num(water),
          hint: "Moles of water equal moles of hydrogen.",
          solution: `$n(\\mathrm{H_2}) = ${mH}/2 = ${mH / 2}\\ \\text{mol} \\Rightarrow n(\\mathrm{H_2O}) = ${mH / 2}\\ \\text{mol}$\n$m = ${mH / 2} \\cdot 18 = ${water}\\ \\text{g}$`,
        });
      }
      const nN = r.pick([1, 2, 3]), nH = r.pick([2, 3, 6, 9]);
      // N2 + 3H2 -> 2NH3
      const limitingN = nN <= nH / 3;
      const nNH3 = limitingN ? 2 * nN : (2 * nH) / 3;
      return task({
        text: `In the reaction $\\mathrm{N_2 + 3H_2 \\rightarrow 2NH_3}$, ${nN} mol of $\\mathrm{N_2}$ reacts with ${nH} mol of $\\mathrm{H_2}$. What is the maximum amount of $\\mathrm{NH_3}$ formed, in mol?${roundTo(2)}`,
        answer: num(nNH3, 2),
        hint: "Find the limiting reactant: compare $n(\\mathrm{N_2})$ with $n(\\mathrm{H_2})/3$.",
        solution: `$n(\\mathrm{H_2})/3 = ${en(nH / 3, 3)}$ mol, $n(\\mathrm{N_2}) = ${nN}$ mol, so ${limitingN ? "N₂" : "H₂"} is limiting.\n$n(\\mathrm{NH_3}) = ${limitingN ? `2 \\cdot ${nN}` : `\\tfrac23 \\cdot ${nH}`} = ${en(nNH3, 2)}\\ \\text{mol}$`,
      });
    },
  },
  {
    id: "exk-solutions",
    topics: [T("solutions-and-concentration")],
    gen(level, r) {
      const [f, name, M] = r.pick(COMPOUNDS.filter((c) => ["NaCl", "NaOH", "C_6H_{12}O_6", "KMnO_4"].includes(c[0])));
      if (level === 1) {
        const m = r.pick([4, 10, 20, 29.25, 36, 90]), V = r.pick([0.25, 0.5, 1, 2]);
        const c = m / M / V;
        return task({
          text: `${m} g of ${name} ($M = ${M}$ g/mol) is dissolved to make ${V * 1000} mL of solution. What is the molarity, in mol/L?${roundTo(3)}`,
          answer: num(c, 3),
          hint: "$c = \\dfrac{n}{V} = \\dfrac{m}{MV}$.",
          formula: "c = \\dfrac{m}{M V}",
          solution: `$n = ${m}/${M} \\approx ${en(m / M, 4)}\\ \\text{mol}$\n$c = ${en(m / M, 4)}/${V} \\approx ${en(c, 3)}\\ \\text{mol/L}$`,
        });
      }
      if (level === 2) {
        const c1 = r.pick([1, 2, 5, 6]), V1 = r.pick([10, 20, 25, 50]), V2 = r.pick([100, 250, 500]);
        return task({
          text: `${V1} mL of a ${c1} mol/L solution is diluted with water to ${V2} mL. What is the new concentration, in mol/L?${roundTo(3)}`,
          answer: num((c1 * V1) / V2, 3),
          hint: "Moles do not change on dilution: $c_1V_1 = c_2V_2$.",
          formula: "c_1 V_1 = c_2 V_2",
          solution: `$c_2 = \\dfrac{${c1} \\cdot ${V1}}{${V2}} = ${en((c1 * V1) / V2, 3)}\\ \\text{mol/L}$`,
        });
      }
      const cA = r.pick([0.1, 0.2, 0.5]), VA = r.pick([10, 20, 25]), cB = r.pick([0.1, 0.2, 0.25]);
      const VB = (cA * VA) / cB;
      return task({
        text: `What volume of ${cB} mol/L NaOH is needed to neutralise ${VA} mL of ${cA} mol/L HCl, in mL?${roundTo(1)}`,
        answer: num(VB, 1),
        hint: "HCl and NaOH react 1 : 1, so $c_A V_A = c_B V_B$.",
        formula: "c_A V_A = c_B V_B",
        solution: `$V_B = \\dfrac{${cA} \\cdot ${VA}}{${cB}} = ${en(VB, 1)}\\ \\text{mL}$`,
      });
    },
  },
  {
    id: "exk-gases",
    topics: [T("gaseous-state")],
    gen(level, r) {
      if (level === 1) {
        const n = r.pick([0.5, 1, 2, 3]);
        return task({
          text: `What volume does ${n} mol of an ideal gas occupy at STP (0 °C, 1 atm), in liters? (Molar volume at STP: 22.4 L/mol.)`,
          answer: num(n * 22.4, 2),
          hint: "$V = n V_m$.",
          formula: "V = n V_m",
          solution: `$V = ${n} \\cdot 22.4 = ${en(n * 22.4)}\\ \\text{L}$`,
        });
      }
      if (level === 2) {
        const n = r.pick([0.5, 1, 2]), Tk = r.pick([273, 300, 350, 400]), V = r.pick([10, 20, 24.6, 50]);
        const p = (n * 0.0821 * Tk) / V;
        return task({
          text: `${n} mol of an ideal gas is kept in a ${V} L vessel at ${Tk} K. What is its pressure, in atm? (Use $R = 0.0821\\ \\text{L·atm/(mol·K)}$.)${roundTo(2)}`,
          answer: num(p, 2),
          hint: "$pV = nRT$.",
          formula: "pV = nRT",
          solution: `$p = \\dfrac{${n} \\cdot 0.0821 \\cdot ${Tk}}{${V}} \\approx ${en(p, 2)}\\ \\text{atm}$`,
        });
      }
      const [g1, M1, g2, M2] = r.pick([["H_2", 2, "O_2", 32], ["He", 4, "CH_4", 16], ["CH_4", 16, "SO_2", 64], ["H_2", 2, "CO_2", 44]]);
      const ratio = Math.sqrt(M2 / M1);
      return task({
        text: `By Graham's law, how many times faster does $\\mathrm{${g1}}$ ($M = ${M1}$) effuse than $\\mathrm{${g2}}$ ($M = ${M2}$) under the same conditions?${roundTo(2)}`,
        answer: num(ratio, 2),
        hint: "Rate is inversely proportional to the square root of molar mass.",
        formula: "\\dfrac{r_1}{r_2} = \\sqrt{\\dfrac{M_2}{M_1}}",
        solution: `$\\dfrac{r_1}{r_2} = \\sqrt{${M2}/${M1}} \\approx ${en(ratio, 2)}$`,
      });
    },
  },
  {
    id: "exk-ph",
    topics: [T("acids-bases-and-ph")],
    gen(level, r) {
      if (level === 1) {
        const k = r.int(1, 5);
        return task({
          text: `What is the pH of a $10^{-${k}}$ mol/L solution of HCl (a strong acid)?`,
          answer: num(k),
          hint: "$\\mathrm{pH} = -\\log[\\mathrm{H^+}]$; a strong acid dissociates completely.",
          formula: "\\mathrm{pH} = -\\log[\\mathrm{H^+}]",
          solution: `$[\\mathrm{H^+}] = 10^{-${k}}$, so $\\mathrm{pH} = ${k}$.`,
        });
      }
      if (level === 2) {
        const c = r.pick([0.001, 0.002, 0.005, 0.01, 0.05]);
        const pH = 14 + Math.log10(c);
        return task({
          text: `What is the pH of a ${c} mol/L NaOH solution at 25 °C?${roundTo(2)}`,
          answer: num(pH, 2),
          hint: "Find pOH from $[\\mathrm{OH^-}]$, then $\\mathrm{pH} = 14 - \\mathrm{pOH}$.",
          formula: "\\mathrm{pH} + \\mathrm{pOH} = 14",
          solution: `$\\mathrm{pOH} = -\\log ${c} \\approx ${en(-Math.log10(c), 2)}$\n$\\mathrm{pH} = 14 - ${en(-Math.log10(c), 2)} \\approx ${en(pH, 2)}$`,
        });
      }
      const Ka = r.pick([1.8e-5, 1e-5, 4e-6, 6.3e-5]), c = r.pick([0.1, 0.01, 0.05]);
      const h = Math.sqrt(Ka * c), pH = -Math.log10(h);
      return task({
        text: `A weak acid HA has $K_a = ${en(Ka / 10 ** Math.floor(Math.log10(Ka)))} \\times 10^{${Math.floor(Math.log10(Ka))}}$. What is the pH of a ${c} mol/L solution? (Assume $[\\mathrm{H^+}] = \\sqrt{K_a c}$.)${roundTo(2)}`,
        answer: num(pH, 2),
        hint: "Use $[\\mathrm{H^+}] \\approx \\sqrt{K_a c}$, then take $-\\log$.",
        formula: "[\\mathrm{H^+}] \\approx \\sqrt{K_a c}",
        solution: `$[\\mathrm{H^+}] = \\sqrt{${Ka.toExponential(2)} \\cdot ${c}} \\approx ${h.toExponential(3)}$\n$\\mathrm{pH} \\approx ${en(pH, 2)}$`,
      });
    },
  },
  {
    id: "exk-thermo",
    topics: [T("thermochemistry")],
    gen(level, r) {
      if (level === 1) {
        const dH = -r.pick([286, 394, 890, 572]), n = r.pick([0.5, 2, 3]);
        return task({
          text: `A reaction has $\\Delta H = ${dH}$ kJ per mole of fuel. How much heat is released when ${n} mol of fuel burns, in kJ?`,
          answer: num(-dH * n),
          hint: "Heat released = moles × $|\\Delta H|$.",
          solution: `$Q = ${n} \\cdot ${-dH} = ${en(-dH * n)}\\ \\text{kJ}$`,
        });
      }
      if (level === 2) {
        const a = -r.int(100, 400), b = -r.int(50, 300);
        return task({
          text: `Given $\\mathrm{A \\rightarrow B}$, $\\Delta H_1 = ${a}$ kJ and $\\mathrm{B \\rightarrow C}$, $\\Delta H_2 = ${b}$ kJ, what is $\\Delta H$ for $\\mathrm{A \\rightarrow C}$, in kJ? (Hess's law.)`,
          answer: num(a + b),
          hint: "Add the steps: enthalpy changes add up.",
          formula: "\\Delta H = \\Delta H_1 + \\Delta H_2",
          solution: `$\\Delta H = ${a} + (${b}) = ${a + b}\\ \\text{kJ}$`,
        });
      }
      const dH = r.int(-120, 60), dS = r.int(-200, 250), Tk = r.pick([298, 350, 500, 1000]);
      const dG = dH - (Tk * dS) / 1000;
      return task({
        text: `For a reaction, $\\Delta H = ${dH}$ kJ/mol and $\\Delta S = ${dS}$ J/(mol·K). What is $\\Delta G$ at ${Tk} K, in kJ/mol?${roundTo(1)}`,
        answer: num(dG, 1),
        hint: "$\\Delta G = \\Delta H - T\\Delta S$ (convert $\\Delta S$ to kJ).",
        formula: "\\Delta G = \\Delta H - T\\Delta S",
        solution: `$\\Delta G = ${dH} - ${Tk} \\cdot ${dS < 0 ? `(${en(dS / 1000)})` : en(dS / 1000)} \\approx ${en(dG, 1)}\\ \\text{kJ/mol}$`,
      });
    },
  },
  {
    id: "exk-equilibrium",
    topics: [T("chemical-equilibrium")],
    gen(level, r) {
      if (level === 1) {
        const a = r.pick([0.1, 0.2, 0.5]), b = r.pick([0.1, 0.2, 0.4]), c = r.pick([0.2, 0.4, 0.8, 1]);
        const K = c / (a * b);
        return task({
          text: `For $\\mathrm{A + B \\rightleftharpoons C}$ the equilibrium concentrations are $[\\mathrm{A}] = ${a}$, $[\\mathrm{B}] = ${b}$ and $[\\mathrm{C}] = ${c}$ mol/L. What is $K_c$?${roundTo(2)}`,
          answer: num(K, 2),
          hint: "$K_c = \\dfrac{[\\mathrm{C}]}{[\\mathrm{A}][\\mathrm{B}]}$.",
          formula: "K_c = \\dfrac{[\\mathrm{C}]}{[\\mathrm{A}][\\mathrm{B}]}",
          solution: `$K_c = \\dfrac{${c}}{${a} \\cdot ${b}} \\approx ${en(K, 2)}$`,
        });
      }
      if (level === 2) {
        const h = r.pick([0.1, 0.2, 0.3]), i = r.pick([0.4, 0.6, 0.8]);
        const K = (2 * h) ** 2 / (h * h);
        void i;
        return task({
          text: `For $\\mathrm{H_2 + I_2 \\rightleftharpoons 2HI}$, at equilibrium $[\\mathrm{H_2}] = [\\mathrm{I_2}] = ${h}$ mol/L and $[\\mathrm{HI}] = ${en(2 * h)}$ mol/L. What is $K_c$?`,
          answer: num(K),
          hint: "$K_c = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H_2}][\\mathrm{I_2}]}$.",
          formula: "K_c = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H_2}][\\mathrm{I_2}]}",
          solution: `$K_c = \\dfrac{${en(2 * h)}^2}{${h} \\cdot ${h}} = ${en(K)}$`,
        });
      }
      const K = r.pick([4, 9, 16, 25, 36]), c0 = r.pick([1, 2]);
      // A ⇌ B? Use A + B ⇌ C + D with equal start c0: K = x²/(c0-x)² → x = c0·√K/(1+√K)
      const s = Math.sqrt(K), x = (c0 * s) / (1 + s);
      return task({
        text: `For $\\mathrm{A + B \\rightleftharpoons C + D}$, $K_c = ${K}$. If ${c0} mol/L of A and ${c0} mol/L of B are mixed (no C or D at the start), what is $[\\mathrm{C}]$ at equilibrium, in mol/L?${roundTo(3)}`,
        answer: num(x, 3),
        hint: "Let $x$ react: $K_c = \\dfrac{x^2}{(c_0 - x)^2}$, so take the square root of both sides.",
        formula: "K_c = \\dfrac{[\\mathrm{C}][\\mathrm{D}]}{[\\mathrm{A}][\\mathrm{B}]}",
        solution: `$\\sqrt{${K}} = \\dfrac{x}{${c0} - x} \\Rightarrow ${s}(${c0} - x) = x \\Rightarrow x = \\dfrac{${s * c0}}{${1 + s}} \\approx ${en(x, 3)}\\ \\text{mol/L}$`,
      });
    },
  },
  {
    id: "exk-kinetics",
    topics: [T("chemical-kinetics")],
    gen(level, r) {
      if (level === 1) {
        const t = r.pick([10, 20, 30, 45]), k = r.int(2, 5), c0 = r.pick([0.8, 1.6, 3.2]);
        return task({
          text: `A first-order reaction has a half-life of ${t} min. Starting at ${c0} mol/L, what is the concentration after ${t * k} min, in mol/L?${roundTo(3)}`,
          answer: num(c0 / 2 ** k, 3),
          hint: "Count half-lives; each one halves the concentration.",
          solution: `$${t * k}/${t} = ${k}$ half-lives; $c = ${c0}/2^{${k}} = ${en(c0 / 2 ** k, 3)}\\ \\text{mol/L}$`,
        });
      }
      if (level === 2) {
        const k = r.pick([0.01, 0.02, 0.05, 0.1, 0.231]);
        const t = Math.LN2 / k;
        return task({
          text: `A first-order reaction has rate constant $k = ${k}\\ \\text{s}^{-1}$. What is its half-life, in seconds?${roundTo(1)}`,
          answer: num(t, 1),
          hint: "$t_{1/2} = \\dfrac{\\ln 2}{k}$.",
          formula: "t_{1/2} = \\dfrac{\\ln 2}{k} \\approx \\dfrac{0.693}{k}",
          solution: `$t_{1/2} = 0.693/${k} \\approx ${en(t, 1)}\\ \\text{s}$`,
        });
      }
      const n = r.pick([1, 2]), f = r.pick([2, 3, 4]);
      return task({
        text: `The rate law of a reaction is rate $= k[\\mathrm{A}]^{${n}}$. By what factor does the rate increase when $[\\mathrm{A}]$ is multiplied by ${f}?`,
        answer: num(f ** n),
        hint: "Rate is proportional to $[\\mathrm{A}]^n$.",
        solution: `Factor $= ${f}^{${n}} = ${f ** n}$`,
      });
    },
  },
  {
    id: "exk-electro",
    topics: [T("electrochemistry")],
    gen(level, r) {
      const PAIRS = [["Zn", -0.76, "Cu", 0.34], ["Mg", -2.37, "Cu", 0.34], ["Zn", -0.76, "Ag", 0.8], ["Fe", -0.44, "Cu", 0.34], ["Cu", 0.34, "Ag", 0.8]];
      if (level === 1) {
        const [a, Ea, c, Ec] = r.pick(PAIRS);
        return task({
          text: `Standard reduction potentials: $E^\\circ(\\mathrm{${a}^{2+}/${a}}) = ${Ea}$ V and $E^\\circ(\\mathrm{${c}^{${c === "Ag" ? "+" : "2+"}}/${c}}) = ${Ec}$ V. What is the standard emf of the cell made from these two electrodes, in volts?`,
          answer: num(Math.round((Ec - Ea) * 100) / 100),
          hint: "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$; the more positive one is the cathode.",
          formula: "E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}",
          solution: `$E^\\circ = ${Ec} - (${Ea}) = ${en(Ec - Ea, 2)}\\ \\text{V}$`,
        });
      }
      if (level === 2) {
        const I = r.pick([1, 2, 5, 10]), t = r.pick([965, 1930, 3860, 9650]);
        const m = (I * t * 63.5) / (2 * 96500);
        return task({
          text: `A current of ${I} A is passed through a $\\mathrm{CuSO_4}$ solution for ${t} s. What mass of copper is deposited at the cathode, in grams? ($M(\\mathrm{Cu}) = 63.5$ g/mol, $F = 96500$ C/mol, $\\mathrm{Cu^{2+} + 2e^- \\rightarrow Cu}$.)${roundTo(3)}`,
          answer: num(m, 3),
          hint: "Charge $Q = It$; moles of electrons $= Q/F$; 2 electrons per Cu atom.",
          formula: "m = \\dfrac{I t M}{z F}",
          solution: `$Q = ${I} \\cdot ${t} = ${I * t}\\ \\text{C}$\n$m = \\dfrac{${I * t} \\cdot 63.5}{2 \\cdot 96500} \\approx ${en(m, 3)}\\ \\text{g}$`,
        });
      }
      const n = r.pick([1, 2]), E = r.pick([0.46, 1.1, 0.78, 1.56]);
      const dG = (-n * 96500 * E) / 1000;
      return task({
        text: `A cell reaction transfers ${n} mol of electrons and has $E^\\circ_{\\text{cell}} = ${E}$ V. What is $\\Delta G^\\circ$, in kJ/mol? ($F = 96500$ C/mol.)${roundTo(1)}`,
        answer: num(dG, 1),
        hint: "$\\Delta G^\\circ = -nFE^\\circ$.",
        formula: "\\Delta G^\\circ = -n F E^\\circ",
        solution: `$\\Delta G^\\circ = -${n} \\cdot 96500 \\cdot ${E} = ${en(dG * 1000)}\\ \\text{J/mol} \\approx ${en(dG, 1)}\\ \\text{kJ/mol}$`,
      });
    },
  },
  {
    id: "exk-atom",
    topics: [T("atomic-structure")],
    gen(level, r) {
      const EL = [["C", 6, 12], ["N", 7, 14], ["O", 8, 16], ["Na", 11, 23], ["Mg", 12, 24], ["Al", 13, 27], ["P", 15, 31], ["S", 16, 32], ["Cl", 17, 35], ["K", 19, 39], ["Ca", 20, 40], ["Fe", 26, 56]];
      const [s, Z, A] = r.pick(EL);
      if (level === 1) {
        return task({
          text: `How many neutrons are there in one atom of $^{${A}}_{${Z}}\\mathrm{${s}}$?`,
          answer: num(A - Z),
          hint: "Neutrons = mass number − atomic number.",
          solution: `$N = A - Z = ${A} - ${Z} = ${A - Z}$`,
        });
      }
      if (level === 2) {
        const charge = r.pick([-2, -1, 1, 2, 3]);
        const sym = charge > 0 ? `${charge === 1 ? "" : charge}+` : `${charge === -1 ? "" : -charge}-`;
        return task({
          text: `How many electrons does the ion $\\mathrm{${s}^{${sym}}}$ have? (Atomic number of ${s}: ${Z}.)`,
          answer: num(Z - charge),
          hint: "A positive ion has lost electrons; a negative ion has gained them.",
          solution: `$${Z} ${charge > 0 ? "-" : "+"} ${Math.abs(charge)} = ${Z - charge}$ electrons`,
        });
      }
      const n1 = r.pick([1, 2]), n2 = n1 + r.int(1, 3);
      const E = 13.6 * (1 / (n1 * n1) - 1 / (n2 * n2));
      const opts = choices(r, en(E, 2), [en(13.6 / (n2 * n2), 2), en(13.6 / (n1 * n1), 2), en(E * 2, 2), en(13.6 * (1 / n1 - 1 / n2), 2)]);
      void opts;
      return task({
        text: `What energy, in eV, is emitted when the electron in a hydrogen atom falls from level $n = ${n2}$ to $n = ${n1}$? (Use $E_n = -\\dfrac{13.6}{n^2}$ eV.)${roundTo(2)}`,
        answer: num(E, 2),
        hint: "$\\Delta E = 13.6\\left(\\dfrac{1}{n_1^2} - \\dfrac{1}{n_2^2}\\right)$ eV.",
        formula: "E_n = -\\dfrac{13.6\\ \\text{eV}}{n^2}",
        solution: `$\\Delta E = 13.6\\left(\\dfrac1{${n1 * n1}} - \\dfrac1{${n2 * n2}}\\right) \\approx ${en(E, 2)}\\ \\text{eV}$`,
      });
    },
  },
];
