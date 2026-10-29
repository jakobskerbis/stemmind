// Izpitne naloge iz kemije (angleško) za JEE, NEET, gaokao in CBSE: mol, stehiometrija,
// raztopine, plini, pH, termokemija, ravnotežje, kinetika, elektrokemija, zgradba atoma.
import { en, num, numM, dq, roundTo, task } from "./exam-util.js";
import { roundHalfUp } from "../check.js";

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
        const v = r.int(0, 2);
        if (v === 0) {
          const n = r.pick([0.1, 0.2, 0.25, 0.5, 1.5, 2, 3, 4]);
          return task({
            text: `What is the mass of ${en(n)} mol of ${name} ($\\mathrm{${f}}$, $M = ${en(M)}$ g/mol), in grams?`,
            answer: numM(Math.round(n * M * 1e6) / 1e6, 2, [[M / n, "Multiply the amount by the molar mass, do not divide."], [n / M, "Mass = amount × molar mass."]]),
            data: { given: [dq("n", n, "mol"), dq("M", M, "g/mol")], find: ["m"] },
            hint: "Molar mass tells you the mass of one mole.",
            formula: "m = n M",
            solution: `$m = n M = ${en(n)} \\cdot ${en(M)}$\n$m = ${en(n * M)}\\ \\text{g}$`,
          });
        }
        if (v === 1) {
          const m = r.pick([1, 2, 5, 10, 20, 50, 100]) * (M > 100 ? 2 : 1);
          return task({
            text: `How many moles are there in ${m} g of ${name} ($\\mathrm{${f}}$, $M = ${en(M)}$ g/mol)?${roundTo(3)}`,
            answer: numM(m / M, 3, [[m * M, "Divide the mass by the molar mass."], [M / m, "You inverted the ratio: $n = m/M$."]]),
            data: { given: [dq("m", m, "g"), dq("M", M, "g/mol")], find: ["n"] },
            hint: "Amount of substance = mass ÷ molar mass.",
            formula: "n = \\dfrac{m}{M}",
            solution: `$n = \\dfrac{${m}}{${en(M)}}$\n$n \\approx ${en(m / M, 3)}\\ \\text{mol}$`,
          });
        }
        const n = r.pick([0.1, 0.25, 0.5, 2, 3, 5]);
        return task({
          text: `How many molecules are there in ${en(n)} mol of a substance? Give the answer in units of $10^{23}$.${roundTo(2)} (Use $N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}$.)`,
          answer: numM(n * 6.022, 2, [[6.022 / n, "Multiply by Avogadro's number, do not divide."], [n * 6.022 * 10, "Keep the power of ten as $10^{23}$."]]),
          data: { given: [dq("n", n, "mol"), "N_A = 6.022 \\times 10^{23}\\ \\mathrm{mol^{-1}}"], find: ["N"] },
          hint: "One mole contains $N_A$ particles.",
          formula: "N = n N_A",
          solution: `$N = ${en(n)} \\cdot 6.022 \\times 10^{23}$\n$N \\approx ${en(n * 6.022, 2)} \\times 10^{23}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 2);
        if (v === 0) {
          const m = r.pick([9, 18, 36, 4.4, 22, 11.7, 90, 17, 34, 50]);
          const N = (m / M) * NA;
          return task({
            text: `How many molecules (formula units) are there in ${en(m)} g of ${name} ($M = ${en(M)}$ g/mol)? Give the answer in units of $10^{23}$.${roundTo(2)} (Use $N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}$.)`,
            answer: numM(N / 1e23, 2, [[(m * M * NA) / 1e23, "First find moles by dividing the mass by the molar mass."], [(m * NA) / 1e23, "Convert grams to moles before multiplying by $N_A$."]]),
            data: { given: [dq("m", m, "g"), dq("M", M, "g/mol"), "N_A = 6.022 \\times 10^{23}\\ \\mathrm{mol^{-1}}"], find: ["N"] },
            hint: "First find moles, $n = m/M$, then multiply by Avogadro's number.",
            formula: ["n = \\dfrac{m}{M}", "N = n N_A"],
            solution: `$n = ${en(m)}/${en(M)} \\approx ${en(m / M, 4)}\\ \\text{mol}$\n$N = ${en(m / M, 4)} \\cdot 6.022 \\times 10^{23} \\approx ${en(N / 1e23, 2)} \\times 10^{23}$`,
          });
        }
        if (v === 1) {
          const [g, gn, Mg, at, atn] = r.pick([["H_2O", "water", 18, 3, "atoms"], ["CO_2", "carbon dioxide", 44, 3, "atoms"], ["NH_3", "ammonia", 17, 4, "atoms"], ["CH_4", "methane", 16, 5, "atoms"], ["C_2H_6", "ethane", 30, 8, "atoms"], ["O_2", "oxygen", 32, 2, "atoms"]]);
          const m = r.pick([1.6, 3.2, 4.4, 8, 9, 17, 18, 30, 32, 36]);
          const N = (m / Mg) * at * 6.022;
          return task({
            text: `How many atoms in total are there in ${en(m)} g of ${gn} ($\\mathrm{${g}}$, $M = ${Mg}$ g/mol)? Give the answer in units of $10^{23}$.${roundTo(2)} (Use $N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}$.)`,
            answer: numM(N, 2, [[N / at, `That is the number of molecules; each molecule has ${at} atoms.`], [m * at * 6.022, "Convert grams to moles first."]]),
            data: { given: [dq("m", m, "g"), dq("M", Mg, "g/mol"), "N_A = 6.022 \\times 10^{23}\\ \\mathrm{mol^{-1}}"], find: ["N_{atoms}"] },
            hint: "Find the number of molecules, then multiply by the number of atoms in one molecule.",
            formula: ["n = \\dfrac{m}{M}", "N = n N_A \\cdot (\\text{atoms per molecule})"],
            solution: `$n = ${en(m)}/${Mg} \\approx ${en(m / Mg, 4)}\\ \\text{mol}$\nMolecules: $${en(m / Mg, 4)} \\cdot 6.022 \\approx ${en((m / Mg) * 6.022, 3)} \\times 10^{23}$\nAtoms: $\\times ${at} \\approx ${en(N, 2)} \\times 10^{23}$`,
          });
        }
        const mm = (M / NA) * 1e23;
        return task({
          text: `What is the mass of one molecule (formula unit) of ${name} ($M = ${en(M)}$ g/mol), in units of $10^{-23}$ g?${roundTo(2)} (Use $N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}$.)`,
          answer: numM(mm, 2, [[(NA / M) / 1e23, "You inverted the ratio: mass of one particle = $M/N_A$."], [M * 6.022, "Divide the molar mass by $N_A$, do not multiply."]]),
          data: { given: [dq("M", M, "g/mol"), "N_A = 6.022 \\times 10^{23}\\ \\mathrm{mol^{-1}}"], find: ["m_1"] },
          hint: "One mole has mass $M$ and contains $N_A$ particles.",
          formula: "m_1 = \\dfrac{M}{N_A}",
          solution: `$m_1 = \\dfrac{${en(M)}}{6.022 \\times 10^{23}}\\ \\text{g}$\n$m_1 \\approx ${en(mm, 2)} \\times 10^{-23}\\ \\text{g}$`,
        });
      }
      const v = r.int(0, 2);
      const OX = [["Fe", 56, 2, 3], ["Al", 27, 2, 3], ["Cu", 63.5, 1, 1], ["Mg", 24, 1, 1], ["Ca", 40, 1, 1], ["Na", 23, 2, 1], ["Zn", 65, 1, 1], ["Cr", 52, 2, 3], ["Mn", 55, 1, 2]];
      const [el, M1, x, y] = r.pick(OX);
      const sub = (k) => (k > 1 ? `_${k}` : "");
      const Mox = x * M1 + y * 16;
      if (v === 0) {
        const pct = ((x * M1) / Mox) * 100;
        return task({
          text: `What is the percentage by mass of ${el} in the oxide $\\mathrm{${el}${sub(x)}O${sub(y)}}$? ($M(\\mathrm{${el}}) = ${en(M1)}$, $M(\\mathrm{O}) = 16$ g/mol.)${roundTo(1)}`,
          answer: numM(pct, 1, [[(M1 / (M1 + 16)) * 100, "Use the subscripts: count every atom in the formula."], [100 - pct, "That is the percentage of oxygen."]]),
          data: { given: [dq("M(\\mathrm{" + el + "})", M1, "g/mol"), dq("M(\\mathrm{O})", 16, "g/mol")], find: ["w(\\mathrm{" + el + "})"] },
          hint: "Mass of the element in one formula unit divided by the molar mass of the compound.",
          formula: "w = \\dfrac{x M(\\text{element})}{M(\\text{compound})} \\cdot 100\\%",
          solution: `$M = ${x} \\cdot ${en(M1)} + ${y} \\cdot 16 = ${en(Mox)}\\ \\text{g/mol}$\n$w = \\dfrac{${en(x * M1)}}{${en(Mox)}} \\cdot 100\\%$\n$w \\approx ${en(pct, 1)}\\%$`,
        });
      }
      if (v === 1) {
        const m = r.pick([10, 20, 40, 50, 80, 100]);
        const mEl = (m * x * M1) / Mox;
        return task({
          text: `What mass of ${el} can be obtained from ${m} g of pure $\\mathrm{${el}${sub(x)}O${sub(y)}}$? ($M(\\mathrm{${el}}) = ${en(M1)}$, $M(\\mathrm{O}) = 16$ g/mol.)${roundTo(2)}`,
          answer: numM(mEl, 2, [[(m * M1) / Mox, `One formula unit contains ${x} metal atoms.`], [m - mEl, "That is the mass of oxygen."]]),
          data: { given: [dq("m", m, "g"), dq("M(\\mathrm{" + el + "})", M1, "g/mol"), dq("M(\\mathrm{O})", 16, "g/mol")], find: ["m(\\mathrm{" + el + "})"] },
          hint: "Find the mass fraction of the metal in the oxide, then multiply by the mass of oxide.",
          formula: "m(\\text{el}) = m \\cdot \\dfrac{x M(\\text{el})}{M(\\text{oxide})}",
          solution: `$M = ${en(Mox)}\\ \\text{g/mol}$\nMass fraction: $\\dfrac{${en(x * M1)}}{${en(Mox)}} \\approx ${en((x * M1) / Mox, 4)}$\n$m = ${m} \\cdot ${en((x * M1) / Mox, 4)} \\approx ${en(mEl, 2)}\\ \\text{g}$`,
        });
      }
      // obratno: iz deleža kovine v oksidu MO določi molsko maso kovine
      const [el2, M2] = r.pick([["Mg", 24], ["Ca", 40], ["Zn", 65], ["Cu", 64], ["Ni", 59], ["Ba", 137]]);
      const pct = roundHalfUp((M2 / (M2 + 16)) * 100, 1);
      const Mx = (16 * pct) / (100 - pct);
      return task({
        text: `An unknown metal X forms the oxide XO, which contains ${en(pct)}% X by mass. What is the molar mass of X, in g/mol? ($M(\\mathrm{O}) = 16$ g/mol.)${roundTo(0)}`,
        answer: numM(Mx, 0, [[(16 * pct) / 100, "The percentage refers to the whole oxide: $w = M_X/(M_X + 16)$."], [(16 * (100 - pct)) / pct, "You swapped the metal and oxygen percentages."]]),
        data: { given: [`w(\\mathrm{X}) = ${en(pct)}\\%`, dq("M(\\mathrm{O})", 16, "g/mol")], find: ["M(\\mathrm{X})"] },
        hint: "In 100 g of oxide find the mass of X and of O; their mole amounts are equal (formula XO).",
        formula: "\\dfrac{m_X}{M_X} = \\dfrac{m_O}{16}",
        solution: `In 100 g: $m_X = ${en(pct)}$ g, $m_O = ${en(100 - pct)}$ g\n$n(\\mathrm{O}) = ${en(100 - pct)}/16 \\approx ${en((100 - pct) / 16, 4)}$ mol $= n(\\mathrm{X})$\n$M_X = ${en(pct)}/${en((100 - pct) / 16, 4)} \\approx ${en(Mx, 0)}\\ \\text{g/mol}$ (${el2})`,
      });
    },
  },
  {
    id: "exk-stoich",
    topics: [T("stoichiometry")],
    gen(level, r) {
      // Uravnotežene reakcije: [enačba, [[formula, koeficient, M, ime], …]]
      const RX = [
        ["2H_2 + O_2 \\rightarrow 2H_2O", [["H_2", 2, 2, "hydrogen"], ["O_2", 1, 32, "oxygen"], ["H_2O", 2, 18, "water"]]],
        ["CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O", [["CH_4", 1, 16, "methane"], ["O_2", 2, 32, "oxygen"], ["CO_2", 1, 44, "carbon dioxide"], ["H_2O", 2, 18, "water"]]],
        ["CaCO_3 \\rightarrow CaO + CO_2", [["CaCO_3", 1, 100, "calcium carbonate"], ["CaO", 1, 56, "calcium oxide"], ["CO_2", 1, 44, "carbon dioxide"]]],
        ["N_2 + 3H_2 \\rightarrow 2NH_3", [["N_2", 1, 28, "nitrogen"], ["H_2", 3, 2, "hydrogen"], ["NH_3", 2, 17, "ammonia"]]],
        ["2Mg + O_2 \\rightarrow 2MgO", [["Mg", 2, 24, "magnesium"], ["O_2", 1, 32, "oxygen"], ["MgO", 2, 40, "magnesium oxide"]]],
        ["Zn + 2HCl \\rightarrow ZnCl_2 + H_2", [["Zn", 1, 65, "zinc"], ["HCl", 2, 36.5, "hydrogen chloride"], ["ZnCl_2", 1, 136, "zinc chloride"], ["H_2", 1, 2, "hydrogen"]]],
        ["C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O", [["C_3H_8", 1, 44, "propane"], ["O_2", 5, 32, "oxygen"], ["CO_2", 3, 44, "carbon dioxide"], ["H_2O", 4, 18, "water"]]],
        ["2Na + Cl_2 \\rightarrow 2NaCl", [["Na", 2, 23, "sodium"], ["Cl_2", 1, 71, "chlorine"], ["NaCl", 2, 58.5, "sodium chloride"]]],
        ["Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2", [["Fe_2O_3", 1, 160, "iron(III) oxide"], ["CO", 3, 28, "carbon monoxide"], ["Fe", 2, 56, "iron"], ["CO_2", 3, 44, "carbon dioxide"]]],
        ["2KClO_3 \\rightarrow 2KCl + 3O_2", [["KClO_3", 2, 122.5, "potassium chlorate"], ["KCl", 2, 74.5, "potassium chloride"], ["O_2", 3, 32, "oxygen"]]],
      ];
      const [eq, sp] = r.pick(RX);
      let [A, B] = r.shuffle(sp).slice(0, 2);
      // Na ravni 1 raje par z različnima koeficientoma (sicer je razmerje 1 : 1 trivialno).
      for (let i = 0; level === 1 && i < 6 && A[1] === B[1]; i++) [A, B] = r.shuffle(sp).slice(0, 2);
      const ratio = B[1] / A[1];
      const Ms = `($M$: ${[A, B].map((s) => `$\\mathrm{${s[0]}}$ ${en(s[2])}`).join(", ")} g/mol.)`;
      if (level === 1) {
        const nA = r.pick([0.5, 1, 1.5, 2, 3, 4, 6]);
        return task({
          text: `In the reaction $\\mathrm{${eq}}$, how many moles of $\\mathrm{${B[0]}}$ correspond to ${en(nA)} mol of $\\mathrm{${A[0]}}$?${roundTo(2)}`,
          answer: numM(nA * ratio, 2, [[nA, "Use the coefficients of the balanced equation; the mole ratio is not 1 : 1."], [nA / ratio, "You inverted the mole ratio."], [(nA * B[2]) / A[2], "Mole ratios come from the coefficients, not from the molar masses."]]),
          data: { given: [dq(`n(\\mathrm{${A[0]}})`, nA, "mol")], find: [`n(\\mathrm{${B[0]}})`] },
          hint: "The coefficients give the mole ratio of the substances.",
          formula: `\\dfrac{n(\\mathrm{${B[0]}})}{n(\\mathrm{${A[0]}})} = \\dfrac{${B[1]}}{${A[1]}}`,
          solution: `Mole ratio $\\mathrm{${A[0]}} : \\mathrm{${B[0]}} = ${A[1]} : ${B[1]}$\n$n(\\mathrm{${B[0]}}) = ${en(nA)} \\cdot \\dfrac{${B[1]}}{${A[1]}} = ${en(nA * ratio, 2)}\\ \\text{mol}$`,
        });
      }
      if (level === 2) {
        const mA = r.pick([2, 4, 8, 10, 16, 20, 25, 32, 50, 100]);
        const mB = (mA / A[2]) * ratio * B[2];
        return task({
          text: `In the reaction $\\mathrm{${eq}}$, what mass of $\\mathrm{${B[0]}}$ corresponds to ${mA} g of $\\mathrm{${A[0]}}$, in grams? ${Ms}${roundTo(2)}`,
          answer: numM(mB, 2, [[(mA / A[2]) * B[2], "Use the mole ratio from the coefficients."], [mA * ratio, "Convert grams to moles first; masses do not follow the coefficients."], [(mA / A[2]) * (A[1] / B[1]) * B[2], "You inverted the mole ratio."]]),
          data: { given: [dq(`m(\\mathrm{${A[0]}})`, mA, "g"), dq(`M(\\mathrm{${A[0]}})`, A[2], "g/mol"), dq(`M(\\mathrm{${B[0]}})`, B[2], "g/mol")], find: [`m(\\mathrm{${B[0]}})`] },
          hint: "grams of A → moles of A → (mole ratio) → moles of B → grams of B.",
          formula: ["n = \\dfrac{m}{M}", `n(\\mathrm{${B[0]}}) = \\dfrac{${B[1]}}{${A[1]}}\\, n(\\mathrm{${A[0]}})`],
          solution: `$n(\\mathrm{${A[0]}}) = ${mA}/${en(A[2])} \\approx ${en(mA / A[2], 4)}\\ \\text{mol}$\n$n(\\mathrm{${B[0]}}) = ${en(mA / A[2], 4)} \\cdot \\tfrac{${B[1]}}{${A[1]}} \\approx ${en((mA / A[2]) * ratio, 4)}\\ \\text{mol}$\n$m = ${en((mA / A[2]) * ratio, 4)} \\cdot ${en(B[2])} \\approx ${en(mB, 2)}\\ \\text{g}$`,
        });
      }
      const v = r.int(0, 2);
      if (v === 0) {
        const nN = r.pick([1, 1.5, 2, 3]), nH = r.pick([2, 3, 4.5, 6, 9]);
        const limitingN = nN <= nH / 3;
        const nNH3 = limitingN ? 2 * nN : (2 * nH) / 3;
        return task({
          text: `In the reaction $\\mathrm{N_2 + 3H_2 \\rightarrow 2NH_3}$, ${en(nN)} mol of $\\mathrm{N_2}$ reacts with ${en(nH)} mol of $\\mathrm{H_2}$. What is the maximum amount of $\\mathrm{NH_3}$ formed, in mol?${roundTo(2)}`,
          answer: numM(nNH3, 2, [[limitingN ? (2 * nH) / 3 : 2 * nN, "That uses the excess reactant; the limiting reactant decides the yield."], [nN + nH, "Use the mole ratios; amounts do not simply add."]]),
          data: { given: [dq("n(\\mathrm{N_2})", nN, "mol"), dq("n(\\mathrm{H_2})", nH, "mol")], find: ["n(\\mathrm{NH_3})"] },
          hint: "Find the limiting reactant: compare $n(\\mathrm{N_2})$ with $n(\\mathrm{H_2})/3$.",
          formula: "n(\\mathrm{NH_3}) = 2\\, n(\\mathrm{N_2}) = \\tfrac23\\, n(\\mathrm{H_2})",
          solution: `$n(\\mathrm{H_2})/3 = ${en(nH / 3, 3)}$ mol, $n(\\mathrm{N_2}) = ${en(nN)}$ mol\nSo ${limitingN ? "N₂" : "H₂"} is limiting.\n$n(\\mathrm{NH_3}) = ${limitingN ? `2 \\cdot ${en(nN)}` : `\\tfrac23 \\cdot ${en(nH)}`} = ${en(nNH3, 2)}\\ \\text{mol}$`,
        });
      }
      if (v === 1) {
        const mA = r.pick([10, 20, 25, 40, 50, 100]), y = r.pick([60, 70, 75, 80, 85, 90]);
        const theo = (mA / A[2]) * ratio * B[2], act = roundHalfUp((theo * y) / 100, 1);
        const pc = (act / theo) * 100;
        return task({
          text: `In the reaction $\\mathrm{${eq}}$, ${mA} g of $\\mathrm{${A[0]}}$ reacts completely and ${en(act)} g of $\\mathrm{${B[0]}}$ is obtained. What is the percentage yield? ${Ms}${roundTo(1)}`,
          answer: numM(pc, 1, [[(act / mA) * 100, "Compare with the theoretical mass of the product, not with the mass of the reactant."], [(act / ((mA / A[2]) * B[2])) * 100, "Use the mole ratio from the equation for the theoretical yield."]]),
          data: { given: [dq(`m(\\mathrm{${A[0]}})`, mA, "g"), dq(`m(\\mathrm{${B[0]}})`, act, "g"), dq(`M(\\mathrm{${A[0]}})`, A[2], "g/mol"), dq(`M(\\mathrm{${B[0]}})`, B[2], "g/mol")], find: ["\\eta"] },
          hint: "Find the theoretical mass of the product, then compare the actual mass with it.",
          formula: "\\eta = \\dfrac{m_{actual}}{m_{theoretical}} \\cdot 100\\%",
          solution: `$n(\\mathrm{${A[0]}}) = ${mA}/${en(A[2])} \\approx ${en(mA / A[2], 4)}\\ \\text{mol}$\nTheoretical: $m(\\mathrm{${B[0]}}) = ${en(mA / A[2], 4)} \\cdot \\tfrac{${B[1]}}{${A[1]}} \\cdot ${en(B[2])} \\approx ${en(theo, 2)}\\ \\text{g}$\n$\\eta = ${en(act)}/${en(theo, 2)} \\cdot 100\\% \\approx ${en(pc, 1)}\\%$`,
        });
      }
      const m = r.pick([10, 20, 25, 50]), p = r.pick([60, 75, 80, 90, 95]);
      const nC = (m * p) / 100 / 100, V = nC * 22.4;
      return task({
        text: `A ${m} g sample of limestone contains ${p}% $\\mathrm{CaCO_3}$ by mass. When heated, $\\mathrm{CaCO_3 \\rightarrow CaO + CO_2}$. What volume of $\\mathrm{CO_2}$ is released at STP, in liters? ($M(\\mathrm{CaCO_3}) = 100$ g/mol, $V_m = 22.4$ L/mol.)${roundTo(2)}`,
        answer: numM(V, 2, [[(m / 100) * 22.4, "Only part of the sample is $\\mathrm{CaCO_3}$: use the purity."], [nC * 44, "That is the mass of $\\mathrm{CO_2}$ in grams; use the molar volume."]]),
        data: { given: [dq("m", m, "g"), `w = ${p}\\%`, dq("M", 100, "g/mol"), dq("V_m", 22.4, "L/mol")], find: ["V(\\mathrm{CO_2})"] },
        hint: "Mass of pure CaCO₃ → moles → moles of CO₂ (1 : 1) → volume at STP.",
        formula: ["n = \\dfrac{w\\, m}{M}", "V = n V_m"],
        solution: `$m(\\mathrm{CaCO_3}) = ${m} \\cdot ${en(p / 100)} = ${en((m * p) / 100)}\\ \\text{g}$\n$n = ${en((m * p) / 100)}/100 = ${en(nC)}\\ \\text{mol} = n(\\mathrm{CO_2})$\n$V = ${en(nC)} \\cdot 22.4 \\approx ${en(V, 2)}\\ \\text{L}$`,
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
      const R = 0.0821;
      if (level === 1) {
        const v = r.int(0, 2);
        if (v === 0) {
          const n = r.pick([0.1, 0.25, 0.5, 1, 1.5, 2, 3]);
          return task({
            text: `What volume does ${en(n)} mol of an ideal gas occupy at STP (0 °C, 1 atm), in liters? (Molar volume at STP: 22.4 L/mol.)${roundTo(2)}`,
            answer: numM(n * 22.4, 2, [[22.4 / n, "Multiply the amount by the molar volume."]]),
            data: { given: [dq("n", n, "mol"), dq("V_m", 22.4, "L/mol")], find: ["V"] },
            hint: "One mole of any ideal gas at STP occupies 22.4 L.",
            formula: "V = n V_m",
            solution: `$V = n V_m = ${en(n)} \\cdot 22.4$\n$V = ${en(n * 22.4)}\\ \\text{L}$`,
          });
        }
        if (v === 1) {
          const p1 = r.pick([1, 2, 3, 4]), V1 = r.pick([2, 4, 6, 10, 12]), p2 = r.pick([0.5, 1.5, 2.5, 5, 6]);
          if (p1 === p2) return null;
          return task({
            text: `A gas occupies ${V1} L at ${en(p1)} atm. At constant temperature the pressure changes to ${en(p2)} atm. What is the new volume, in liters?${roundTo(2)}`,
            answer: numM((p1 * V1) / p2, 2, [[(p2 * V1) / p1, "At constant temperature volume is inversely proportional to pressure."], [p1 * V1 * p2, "Divide $p_1V_1$ by $p_2$."]]),
            data: { given: [dq("p_1", p1, "atm"), dq("V_1", V1, "L"), dq("p_2", p2, "atm")], find: ["V_2"] },
            hint: "Boyle's law: the product $pV$ stays constant.",
            formula: "p_1 V_1 = p_2 V_2",
            solution: `$V_2 = \\dfrac{p_1 V_1}{p_2} = \\dfrac{${en(p1)} \\cdot ${V1}}{${en(p2)}}$\n$V_2 \\approx ${en((p1 * V1) / p2, 2)}\\ \\text{L}$`,
          });
        }
        const V = r.pick([5.6, 11.2, 2.24, 44.8, 67.2, 8.96, 4.48]);
        return task({
          text: `How many moles of gas are in ${en(V)} L at STP? (Molar volume at STP: 22.4 L/mol.)${roundTo(2)}`,
          answer: numM(V / 22.4, 2, [[V * 22.4, "Divide the volume by the molar volume."]]),
          data: { given: [dq("V", V, "L"), dq("V_m", 22.4, "L/mol")], find: ["n"] },
          hint: "One mole occupies 22.4 L at STP.",
          formula: "n = \\dfrac{V}{V_m}",
          solution: `$n = \\dfrac{${en(V)}}{22.4}$\n$n = ${en(V / 22.4, 2)}\\ \\text{mol}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 2);
        if (v === 0) {
          const n = r.pick([0.5, 1, 2]), tC = r.pick([0, 27, 77, 127, 227]), V = r.pick([10, 20, 24.6, 50]);
          const Tk = tC + 273, p = (n * R * Tk) / V;
          return task({
            text: `${en(n)} mol of an ideal gas is kept in a ${en(V)} L vessel at ${tC} °C. What is its pressure, in atm? (Use $R = 0.0821\\ \\text{L·atm/(mol·K)}$.)${roundTo(2)}`,
            answer: numM(p, 2, [[tC ? (n * R * tC) / V : NaN, "Convert the temperature to kelvin ($T = t + 273$)."], [(n * R * V) / Tk, "Rearrange $pV = nRT$ correctly: $p = nRT/V$."]]),
            data: { given: [dq("n", n, "mol"), dq("V", V, "L"), `t = ${tC}\\ ^\\circ\\mathrm{C}`, dq("R", 0.0821, "L\\,atm/(mol\\,K)")], find: ["p"] },
            hint: "Convert the temperature to kelvin, then use $pV = nRT$.",
            formula: "pV = nRT",
            solution: `$T = ${tC} + 273 = ${Tk}\\ \\text{K}$\n$p = \\dfrac{${en(n)} \\cdot 0.0821 \\cdot ${Tk}}{${en(V)}} \\approx ${en(p, 2)}\\ \\text{atm}$`,
          });
        }
        if (v === 1) {
          const V1 = r.pick([2, 3, 5, 10]), t1 = r.pick([0, 27, 127]), t2 = r.pick([77, 177, 227, 327]);
          const V2 = (V1 * (t2 + 273)) / (t1 + 273);
          return task({
            text: `A gas occupies ${V1} L at ${t1} °C. It is heated at constant pressure to ${t2} °C. What is its new volume, in liters?${roundTo(2)}`,
            answer: numM(V2, 2, [[t1 ? (V1 * t2) / t1 : NaN, "Charles's law uses absolute temperature (kelvin)."], [(V1 * (t1 + 273)) / (t2 + 273), "Heating at constant pressure increases the volume."]]),
            data: { given: [dq("V_1", V1, "L"), `t_1 = ${t1}\\ ^\\circ\\mathrm{C}`, `t_2 = ${t2}\\ ^\\circ\\mathrm{C}`], find: ["V_2"] },
            hint: "Convert both temperatures to kelvin; at constant pressure $V/T$ is constant.",
            formula: "\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}",
            solution: `$T_1 = ${t1 + 273}\\ \\text{K}$, $T_2 = ${t2 + 273}\\ \\text{K}$\n$V_2 = ${V1} \\cdot \\dfrac{${t2 + 273}}{${t1 + 273}} \\approx ${en(V2, 2)}\\ \\text{L}$`,
          });
        }
        const [g, M] = r.pick([["O_2", 32], ["N_2", 28], ["CO_2", 44], ["CH_4", 16], ["SO_2", 64], ["Cl_2", 71], ["NH_3", 17]]);
        const m = r.pick([1, 2, 4, 8, 10]) * (M > 40 ? 2 : 1), V = (m / M) * 22.4;
        return task({
          text: `${m} g of a gas occupies ${en(V, 2)} L at STP. What is its molar mass, in g/mol? (Molar volume at STP: 22.4 L/mol.)${roundTo(0)}`,
          answer: numM((m * 22.4) / roundHalfUp(V, 2), 0, [[(m * roundHalfUp(V, 2)) / 22.4, "First find moles $n = V/V_m$, then $M = m/n$."], [roundHalfUp(V, 2) / m, "$M = m/n$, mass divided by moles."]]),
          data: { given: [dq("m", m, "g"), dq("V", en(V, 2), "L"), dq("V_m", 22.4, "L/mol")], find: ["M"] },
          hint: "Find the amount from the volume, then divide the mass by it.",
          formula: ["n = \\dfrac{V}{V_m}", "M = \\dfrac{m}{n}"],
          solution: `$n = ${en(V, 2)}/22.4 \\approx ${en(roundHalfUp(V, 2) / 22.4, 4)}\\ \\text{mol}$\n$M = ${m}/${en(roundHalfUp(V, 2) / 22.4, 4)} \\approx ${en((m * 22.4) / roundHalfUp(V, 2), 0)}\\ \\text{g/mol}$ ($\\mathrm{${g}}$)`,
        });
      }
      const v = r.int(0, 2);
      if (v === 0) {
        const PAIRS = [["H_2", 2, "O_2", 32], ["He", 4, "CH_4", 16], ["CH_4", 16, "SO_2", 64], ["H_2", 2, "CO_2", 44], ["He", 4, "O_2", 32], ["NH_3", 17, "HCl", 36.5], ["N_2", 28, "Cl_2", 71]];
        const [g1, M1, g2, M2] = r.pick(PAIRS);
        const rev = r.next() < 0.5;
        if (!rev) {
          const ratio = Math.sqrt(M2 / M1);
          return task({
            text: `By Graham's law, how many times faster does $\\mathrm{${g1}}$ ($M = ${M1}$ g/mol) effuse than $\\mathrm{${g2}}$ ($M = ${en(M2)}$ g/mol) under the same conditions?${roundTo(2)}`,
            answer: numM(ratio, 2, [[M2 / M1, "Rate depends on the square root of molar mass."], [Math.sqrt(M1 / M2), "Lighter gases effuse faster: the ratio should be greater than 1."]]),
            data: { given: [dq("M_1", M1, "g/mol"), dq("M_2", M2, "g/mol")], find: ["r_1/r_2"] },
            hint: "Rate is inversely proportional to the square root of molar mass.",
            formula: "\\dfrac{r_1}{r_2} = \\sqrt{\\dfrac{M_2}{M_1}}",
            solution: `$\\dfrac{M_2}{M_1} = ${en(M2 / M1, 4)}$\n$\\dfrac{r_1}{r_2} = \\sqrt{${en(M2 / M1, 4)}} \\approx ${en(ratio, 2)}$`,
          });
        }
        const k = r.pick([1.5, 2, 2.5, 3, 4]), Mk = r.pick([4, 16, 28, 32]);
        return task({
          text: `An unknown gas effuses ${en(k)} times more slowly than a gas of molar mass ${Mk} g/mol under the same conditions. What is the molar mass of the unknown gas, in g/mol?${roundTo(1)}`,
          answer: numM(Mk * k * k, 1, [[Mk * k, "Square the rate ratio: $M \\propto 1/r^2$."], [Mk / (k * k), "A slower gas is heavier: multiply."]]),
          data: { given: [dq("M_1", Mk, "g/mol"), `r_1/r_2 = ${en(k)}`], find: ["M_2"] },
          hint: "Use Graham's law in reverse: square the rate ratio.",
          formula: "\\dfrac{r_1}{r_2} = \\sqrt{\\dfrac{M_2}{M_1}}",
          solution: `$\\dfrac{M_2}{M_1} = \\left(\\dfrac{r_1}{r_2}\\right)^2 = ${en(k)}^2 = ${en(k * k)}$\n$M_2 = ${Mk} \\cdot ${en(k * k)} = ${en(Mk * k * k, 1)}\\ \\text{g/mol}$`,
        });
      }
      if (v === 1) {
        const [g1, M1, g2, M2] = r.pick([["He", 4, "Ne", 20], ["N_2", 28, "O_2", 32], ["H_2", 2, "N_2", 28], ["CH_4", 16, "O_2", 32]]);
        const m1 = r.pick([2, 4, 8, 16]), m2 = r.pick([8, 16, 32, 40]), P = r.pick([1, 2, 3, 5]);
        const n1 = m1 / M1, n2 = m2 / M2, p1 = (P * n1) / (n1 + n2);
        return task({
          text: `A mixture contains ${m1} g of $\\mathrm{${g1}}$ ($M = ${M1}$ g/mol) and ${m2} g of $\\mathrm{${g2}}$ ($M = ${M2}$ g/mol) at a total pressure of ${P} atm. What is the partial pressure of $\\mathrm{${g1}}$, in atm?${roundTo(2)}`,
          answer: numM(p1, 2, [[(P * m1) / (m1 + m2), "Partial pressure depends on the mole fraction, not the mass fraction."], [P - p1, `That is the partial pressure of $\\mathrm{${g2}}$.`]]),
          data: { given: [dq(`m(\\mathrm{${g1}})`, m1, "g"), dq(`m(\\mathrm{${g2}})`, m2, "g"), dq("p", P, "atm")], find: [`p(\\mathrm{${g1}})`] },
          hint: "Convert both masses to moles, find the mole fraction, then use Dalton's law.",
          formula: ["x_1 = \\dfrac{n_1}{n_1 + n_2}", "p_1 = x_1 p"],
          solution: `$n_1 = ${m1}/${M1} = ${en(n1, 4)}$ mol, $n_2 = ${m2}/${M2} = ${en(n2, 4)}$ mol\n$x_1 = \\dfrac{${en(n1, 4)}}{${en(n1 + n2, 4)}} \\approx ${en(n1 / (n1 + n2), 4)}$\n$p_1 = ${en(n1 / (n1 + n2), 4)} \\cdot ${P} \\approx ${en(p1, 2)}\\ \\text{atm}$`,
        });
      }
      const [g, M] = r.pick([["O_2", 32], ["N_2", 28], ["CO_2", 44], ["CH_4", 16], ["NH_3", 17]]);
      const m = r.pick([4, 8, 11, 16, 22, 32]), tC = r.pick([25, 27, 37, 100]), p = r.pick([1, 2, 0.5]);
      const V = ((m / M) * R * (tC + 273)) / p;
      return task({
        text: `What volume does ${m} g of $\\mathrm{${g}}$ ($M = ${M}$ g/mol) occupy at ${tC} °C and ${en(p)} atm, in liters? (Use $R = 0.0821\\ \\text{L·atm/(mol·K)}$.)${roundTo(2)}`,
        answer: numM(V, 2, [[(m * R * (tC + 273)) / p, "Convert the mass to moles first."], [((m / M) * R * tC) / p, "Use the absolute temperature in kelvin."]]),
        data: { given: [dq("m", m, "g"), dq("M", M, "g/mol"), `t = ${tC}\\ ^\\circ\\mathrm{C}`, dq("p", p, "atm"), dq("R", 0.0821, "L\\,atm/(mol\\,K)")], find: ["V"] },
        hint: "Find moles, convert the temperature to kelvin, then use $pV = nRT$.",
        formula: ["n = \\dfrac{m}{M}", "pV = nRT"],
        solution: `$n = ${m}/${M} \\approx ${en(m / M, 4)}\\ \\text{mol}$\n$T = ${tC + 273}\\ \\text{K}$\n$V = \\dfrac{${en(m / M, 4)} \\cdot 0.0821 \\cdot ${tC + 273}}{${en(p)}} \\approx ${en(V, 2)}\\ \\text{L}$`,
      });
    },
  },
  {
    id: "exk-ph",
    topics: [T("acids-bases-and-ph")],
    gen(level, r) {
      const lg = Math.log10;
      if (level === 1) {
        const v = r.int(0, 2);
        if (v === 0) {
          const a = r.pick([1, 2, 3, 5]), k = r.int(1, 5);
          const c = a * 10 ** -k, pH = -lg(c);
          return task({
            text: `What is the pH of a ${en(c)} mol/L solution of HCl (a strong acid)?${roundTo(2)}`,
            answer: numM(pH, 2, [[lg(c), "pH is the NEGATIVE logarithm of $[\\mathrm{H^+}]$."], [14 + lg(c), "That is the pH of a base of this concentration; HCl is an acid."]]),
            data: { given: [`c = ${en(c)}\\ \\mathrm{mol/L}`], find: ["\\mathrm{pH}"] },
            hint: "A strong acid dissociates completely, so $[\\mathrm{H^+}] = c$.",
            formula: "\\mathrm{pH} = -\\log[\\mathrm{H^+}]",
            solution: `$[\\mathrm{H^+}] = ${en(c)}\\ \\text{mol/L}$\n$\\mathrm{pH} = -\\log ${en(c)} \\approx ${en(pH, 2)}$`,
          });
        }
        if (v === 1) {
          const pOH = r.pick([1.5, 2, 2.7, 3.2, 4, 4.8, 5.5, 9, 10.3, 11]);
          return task({
            text: `A solution at 25 °C has pOH = ${en(pOH)}. What is its pH?`,
            answer: numM(Math.round((14 - pOH) * 100) / 100, null, [[pOH, "pH and pOH add up to 14."], [-pOH, "Use $\\mathrm{pH} = 14 - \\mathrm{pOH}$."]]),
            data: { given: [`\\mathrm{pOH} = ${en(pOH)}`], find: ["\\mathrm{pH}"] },
            hint: "At 25 °C pH + pOH = 14.",
            formula: "\\mathrm{pH} + \\mathrm{pOH} = 14",
            solution: `$\\mathrm{pH} = 14 - \\mathrm{pOH}$\n$\\mathrm{pH} = 14 - ${en(pOH)} = ${en(14 - pOH)}$`,
          });
        }
        const pH = r.int(1, 6), a = r.pick([0, 0.3, 0.5, 0.7]);
        const p = pH + a, h = 10 ** -p * 10 ** pH;
        return task({
          text: `A solution has pH = ${en(p)}. What is $[\\mathrm{H^+}]$, in units of $10^{-${pH}}$ mol/L?${roundTo(2)}`,
          answer: numM(h, 2, [[10 ** a, "$[\\mathrm{H^+}] = 10^{-\\mathrm{pH}}$: the exponent is negative."], [p, "Undo the logarithm: $[\\mathrm{H^+}] = 10^{-\\mathrm{pH}}$."]]),
          data: { given: [`\\mathrm{pH} = ${en(p)}`], find: ["[\\mathrm{H^+}]"] },
          hint: "Undo the logarithm: $[\\mathrm{H^+}] = 10^{-\\mathrm{pH}}$.",
          formula: "[\\mathrm{H^+}] = 10^{-\\mathrm{pH}}",
          solution: `$[\\mathrm{H^+}] = 10^{-${en(p)}} = 10^{-${en(a)}} \\cdot 10^{-${pH}}$\n$10^{-${en(a)}} \\approx ${en(h, 2)}$, so $[\\mathrm{H^+}] \\approx ${en(h, 2)} \\times 10^{-${pH}}\\ \\text{mol/L}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 2);
        if (v === 0) {
          const [base, z] = r.pick([["NaOH", 1], ["KOH", 1], ["Ba(OH)_2", 2], ["Ca(OH)_2", 2]]);
          const c = r.pick([0.001, 0.002, 0.005, 0.01, 0.02, 0.05]);
          const pOH = -lg(z * c), pH = 14 - pOH;
          return task({
            text: `What is the pH of a ${en(c)} mol/L $\\mathrm{${base}}$ solution at 25 °C (complete dissociation)?${roundTo(2)}`,
            answer: numM(pH, 2, [[pOH, "That is the pOH; pH = 14 − pOH."], [z === 2 ? 14 + lg(c) : NaN, "Each formula unit releases two $\\mathrm{OH^-}$ ions."]]),
            data: { given: [`c = ${en(c)}\\ \\mathrm{mol/L}`], find: ["\\mathrm{pH}"] },
            hint: `Find $[\\mathrm{OH^-}]$${z === 2 ? " (two OH⁻ per formula unit)" : ""}, then pOH, then $\\mathrm{pH} = 14 - \\mathrm{pOH}$.`,
            formula: ["\\mathrm{pOH} = -\\log[\\mathrm{OH^-}]", "\\mathrm{pH} + \\mathrm{pOH} = 14"],
            solution: `$[\\mathrm{OH^-}] = ${z === 2 ? `2 \\cdot ${en(c)} = ` : ""}${en(z * c)}\\ \\text{mol/L}$\n$\\mathrm{pOH} = -\\log ${en(z * c)} \\approx ${en(pOH, 2)}$\n$\\mathrm{pH} = 14 - ${en(pOH, 2)} \\approx ${en(pH, 2)}$`,
          });
        }
        if (v === 1) {
          const c = r.pick([0.001, 0.005, 0.01, 0.02, 0.05]);
          const pH = -lg(2 * c);
          return task({
            text: `What is the pH of a ${en(c)} mol/L $\\mathrm{H_2SO_4}$ solution? (Assume both protons dissociate completely.)${roundTo(2)}`,
            answer: numM(pH, 2, [[-lg(c), "Each $\\mathrm{H_2SO_4}$ gives two $\\mathrm{H^+}$ ions."], [-lg(c / 2), "Multiply the concentration by 2, do not divide."]]),
            data: { given: [`c = ${en(c)}\\ \\mathrm{mol/L}`], find: ["\\mathrm{pH}"] },
            hint: "Find $[\\mathrm{H^+}]$ first: two protons per molecule.",
            formula: "\\mathrm{pH} = -\\log[\\mathrm{H^+}]",
            solution: `$[\\mathrm{H^+}] = 2 \\cdot ${en(c)} = ${en(2 * c)}\\ \\text{mol/L}$\n$\\mathrm{pH} = -\\log ${en(2 * c)} \\approx ${en(pH, 2)}$`,
          });
        }
        const pH0 = r.int(1, 3), f = r.pick([10, 100, 50, 20]);
        const pH = pH0 + lg(f);
        return task({
          text: `100 mL of HCl solution with pH = ${pH0} is diluted with water to ${100 * f} mL. What is the new pH?${roundTo(2)}`,
          answer: numM(pH, 2, [[pH0 * f, "pH is logarithmic: diluting $f$ times raises pH by $\\log f$."], [pH0 - lg(f), "Dilution makes the solution less acidic: pH increases."]]),
          data: { given: [`\\mathrm{pH}_0 = ${pH0}`, dq("V_1", 100, "mL"), dq("V_2", 100 * f, "mL")], find: ["\\mathrm{pH}"] },
          hint: "Find how many times $[\\mathrm{H^+}]$ decreases, then take the logarithm.",
          formula: ["c_1 V_1 = c_2 V_2", "\\mathrm{pH} = -\\log[\\mathrm{H^+}]"],
          solution: `$[\\mathrm{H^+}]_0 = 10^{-${pH0}}$ mol/L\n$[\\mathrm{H^+}] = 10^{-${pH0}} \\cdot \\dfrac{100}{${100 * f}}$\n$\\mathrm{pH} = ${pH0} + \\log ${f} \\approx ${en(pH, 2)}$`,
        });
      }
      const v = r.int(0, 3);
      if (v === 0) {
        const Ka = r.pick([1.8e-5, 1e-5, 4e-6, 6.3e-5, 7.2e-4, 3.5e-8]), c = r.pick([0.1, 0.01, 0.05, 0.2]);
        const e = Math.floor(lg(Ka)), mant = Number((Ka / 10 ** e).toFixed(2));
        const h = Math.sqrt(Ka * c), pH = -lg(h);
        return task({
          text: `A weak acid HA has $K_a = ${en(mant)} \\times 10^{${e}}$. What is the pH of a ${en(c)} mol/L solution? (Assume $[\\mathrm{H^+}] = \\sqrt{K_a c}$.)${roundTo(2)}`,
          answer: numM(pH, 2, [[-lg(c), "A weak acid is only partly dissociated; $[\\mathrm{H^+}] \\neq c$."], [-lg(Ka * c), "Take the square root of $K_a c$."]]),
          data: { given: [`K_a = ${en(mant)} \\times 10^{${e}}`, `c = ${en(c)}\\ \\mathrm{mol/L}`], find: ["\\mathrm{pH}"] },
          hint: "Use $[\\mathrm{H^+}] \\approx \\sqrt{K_a c}$, then take $-\\log$.",
          formula: "[\\mathrm{H^+}] \\approx \\sqrt{K_a c}",
          solution: `$K_a c = ${en(mant)} \\times 10^{${e}} \\cdot ${en(c)}$\n$[\\mathrm{H^+}] = \\sqrt{K_a c} \\approx ${en(h * 10 ** -Math.floor(lg(h)), 3)} \\times 10^{${Math.floor(lg(h))}}$\n$\\mathrm{pH} \\approx ${en(pH, 2)}$`,
        });
      }
      if (v === 1) {
        const c = r.pick([0.1, 0.05, 0.01]), pH = r.pick([2.5, 2.9, 3, 3.4, 3.7]);
        const h = 10 ** -pH;
        if (h >= c / 2) return null;
        const Ka = (h * h) / (c - h);
        const e = Math.floor(lg(Ka));
        return task({
          text: `A ${en(c)} mol/L solution of a weak monoprotic acid has pH = ${en(pH)}. What is $K_a$, in units of $10^{${e}}$?${roundTo(2)}`,
          answer: numM(Ka / 10 ** e, 2, [[h / c / 10 ** e, "$K_a = [\\mathrm{H^+}][\\mathrm{A^-}]/[\\mathrm{HA}]$: square $[\\mathrm{H^+}]$."], [h / 10 ** e, "That is $[\\mathrm{H^+}]$ itself; $K_a = [\\mathrm{H^+}]^2/(c - [\\mathrm{H^+}])$."]]),
          data: { given: [`c = ${en(c)}\\ \\mathrm{mol/L}`, `\\mathrm{pH} = ${en(pH)}`], find: ["K_a"] },
          hint: "From pH find $[\\mathrm{H^+}] = [\\mathrm{A^-}]$; the undissociated acid is $c - [\\mathrm{H^+}]$.",
          formula: "K_a = \\dfrac{[\\mathrm{H^+}]^2}{c - [\\mathrm{H^+}]}",
          solution: `$[\\mathrm{H^+}] = 10^{-${en(pH)}} \\approx ${en(h * 10 ** -Math.floor(lg(h)), 3)} \\times 10^{${Math.floor(lg(h))}}$\n$K_a = \\dfrac{(${en(h * 10 ** -Math.floor(lg(h)), 3)} \\times 10^{${Math.floor(lg(h))}})^2}{${en(c)} - ${en(h, 6)}}$\n$K_a \\approx ${en(Ka / 10 ** e, 2)} \\times 10^{${e}}$`,
        });
      }
      if (v === 2) {
        const ca = r.pick([0.1, 0.2]), Va = r.pick([20, 25, 50]), cb = r.pick([0.1, 0.2]), Vb = r.pick([10, 15, 20, 30, 40, 60]);
        const na = ca * Va, nb = cb * Vb;
        if (Math.abs(na - nb) < 1e-9) return null;
        const ex = Math.abs(na - nb) / (Va + Vb);
        const pH = na > nb ? -lg(ex) : 14 + lg(ex);
        return task({
          text: `${Va} mL of ${en(ca)} mol/L HCl is mixed with ${Vb} mL of ${en(cb)} mol/L NaOH. What is the pH of the mixture at 25 °C?${roundTo(2)}`,
          answer: numM(pH, 2, [[na > nb ? -lg(Math.abs(na - nb) / Va) : 14 + lg(Math.abs(na - nb) / Vb), "Divide the excess by the TOTAL volume of the mixture."], [na > nb ? 14 + lg(ex) : -lg(ex), na > nb ? "The acid is in excess, so the solution is acidic." : "The base is in excess, so the solution is basic."]]),
          data: { given: [dq("V_a", Va, "mL"), `c_a = ${en(ca)}\\ \\mathrm{mol/L}`, dq("V_b", Vb, "mL"), `c_b = ${en(cb)}\\ \\mathrm{mol/L}`], find: ["\\mathrm{pH}"] },
          hint: "Find the moles of $\\mathrm{H^+}$ and $\\mathrm{OH^-}$; they neutralise each other. Divide the excess by the total volume.",
          formula: ["n = cV", "\\mathrm{pH} = -\\log[\\mathrm{H^+}]"],
          solution: `$n(\\mathrm{H^+}) = ${en(ca)} \\cdot ${Va} = ${en(na)}\\ \\text{mmol}$, $n(\\mathrm{OH^-}) = ${en(cb)} \\cdot ${Vb} = ${en(nb)}\\ \\text{mmol}$\nExcess ${na > nb ? "$\\mathrm{H^+}$" : "$\\mathrm{OH^-}$"}: $${en(Math.abs(na - nb))}$ mmol in ${Va + Vb} mL, $c = ${en(ex, 5)}$ mol/L\n${na > nb ? `$\\mathrm{pH} = -\\log ${en(ex, 5)} \\approx ${en(pH, 2)}$` : `$\\mathrm{pOH} = -\\log ${en(ex, 5)} \\approx ${en(-lg(ex), 2)}$, $\\mathrm{pH} \\approx ${en(pH, 2)}$`}`,
        });
      }
      const pKa = r.pick([4.76, 3.75, 4.2, 9.25, 7.2]), cA = r.pick([0.1, 0.2, 0.05]), cB = r.pick([0.05, 0.1, 0.2, 0.3]);
      if (cA === cB) return null;
      const pH = pKa + lg(cB / cA);
      return task({
        text: `A buffer contains ${en(cA)} mol/L of a weak acid (p$K_a$ = ${en(pKa)}) and ${en(cB)} mol/L of its conjugate base. What is its pH?${roundTo(2)}`,
        answer: numM(pH, 2, [[pKa + lg(cA / cB), "The ratio is [base]/[acid], not [acid]/[base]."], [pKa, "pH = pKa only when the acid and base concentrations are equal."]]),
        data: { given: [`\\mathrm{p}K_a = ${en(pKa)}`, `[\\mathrm{HA}] = ${en(cA)}\\ \\mathrm{mol/L}`, `[\\mathrm{A^-}] = ${en(cB)}\\ \\mathrm{mol/L}`], find: ["\\mathrm{pH}"] },
        hint: "Use the Henderson–Hasselbalch equation.",
        formula: "\\mathrm{pH} = \\mathrm{p}K_a + \\log\\dfrac{[\\mathrm{A^-}]}{[\\mathrm{HA}]}",
        solution: `$\\dfrac{[\\mathrm{A^-}]}{[\\mathrm{HA}]} = \\dfrac{${en(cB)}}{${en(cA)}} = ${en(cB / cA, 3)}$\n$\\log ${en(cB / cA, 3)} \\approx ${en(lg(cB / cA), 3)}$\n$\\mathrm{pH} = ${en(pKa)} + ${en(lg(cB / cA), 3)} \\approx ${en(pH, 2)}$`,
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
      const C = (x) => `$[\\mathrm{${x}}]$`;
      if (level === 1) {
        // [enačba, reaktanti [[snov, koef]], produkti]
        const RX = [
          ["A + B \\rightleftharpoons C", [["A", 1], ["B", 1]], [["C", 1]]],
          ["N_2O_4 \\rightleftharpoons 2NO_2", [["N_2O_4", 1]], [["NO_2", 2]]],
          ["H_2 + I_2 \\rightleftharpoons 2HI", [["H_2", 1], ["I_2", 1]], [["HI", 2]]],
          ["PCl_5 \\rightleftharpoons PCl_3 + Cl_2", [["PCl_5", 1]], [["PCl_3", 1], ["Cl_2", 1]]],
          ["2SO_2 + O_2 \\rightleftharpoons 2SO_3", [["SO_2", 2], ["O_2", 1]], [["SO_3", 2]]],
          ["CO + H_2O \\rightleftharpoons CO_2 + H_2", [["CO", 1], ["H_2O", 1]], [["CO_2", 1], ["H_2", 1]]],
        ];
        const [eq, re, pr] = r.pick(RX);
        const conc = {};
        for (const [s] of [...re, ...pr]) conc[s] = r.pick([0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1, 1.2]);
        const prod = (list, useCoef = true) => list.reduce((p, [s, k]) => p * conc[s] ** (useCoef ? k : 1), 1);
        const K = prod(pr) / prod(re);
        const hasCoef = [...re, ...pr].some(([, k]) => k > 1);
        const term = (list) => list.map(([s, k]) => `[\\mathrm{${s}}]${k > 1 ? `^${k}` : ""}`).join("");
        return task({
          text: `For $\\mathrm{${eq}}$ the equilibrium concentrations are ${[...re, ...pr].map(([s]) => `${C(s)} = ${en(conc[s])}`).join(", ")} mol/L. What is $K_c$?${roundTo(2)}`,
          answer: numM(K, 2, [[1 / K, "Products go in the numerator, reactants in the denominator."], [hasCoef ? prod(pr, false) / prod(re, false) : NaN, "Raise each concentration to the power of its coefficient."], [re.length > 1 ? (pr.reduce((p, [s]) => p + conc[s], 0)) / re.reduce((p, [s]) => p + conc[s], 0) : NaN, "Multiply the concentrations, do not add them."]]),
          data: { given: [...re, ...pr].map(([s]) => `[\\mathrm{${s}}] = ${en(conc[s])}\\ \\mathrm{mol/L}`), find: ["K_c"] },
          hint: "Write $K_c$ as products over reactants, each raised to the power of its coefficient.",
          formula: `K_c = \\dfrac{${term(pr)}}{${term(re)}}`,
          solution: `$K_c = \\dfrac{${term(pr)}}{${term(re)}}$\n$K_c = \\dfrac{${pr.map(([s, k]) => `${en(conc[s])}${k > 1 ? `^${k}` : ""}`).join(" \\cdot ")}}{${re.map(([s, k]) => `${en(conc[s])}${k > 1 ? `^${k}` : ""}`).join(" \\cdot ")}} \\approx ${en(K, 2)}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 2);
        if (v === 0) {
          const c0 = r.pick([0.5, 1, 1.5, 2]), y = r.pick([0.4, 0.6, 0.8, 1, 1.2, 1.6, 2]);
          if (y / 2 >= c0) return null;
          const x = y / 2, K = (y * y) / ((c0 - x) * (c0 - x));
          return task({
            text: `${en(c0)} mol/L of $\\mathrm{H_2}$ and ${en(c0)} mol/L of $\\mathrm{I_2}$ are mixed. At equilibrium ($\\mathrm{H_2 + I_2 \\rightleftharpoons 2HI}$) ${C("HI")} = ${en(y)} mol/L. What is $K_c$?${roundTo(2)}`,
            answer: numM(K, 2, [[(y * y) / (c0 * c0), "Use equilibrium concentrations of $\\mathrm{H_2}$ and $\\mathrm{I_2}$, not the starting ones."], [(y * y) / ((c0 - y) * (c0 - y)), "Forming 2 mol of HI uses only 1 mol of $\\mathrm{H_2}$: subtract $y/2$."], [y / ((c0 - x) * (c0 - x)), "Square $[\\mathrm{HI}]$ (coefficient 2)."]]),
            data: { given: [`c_0 = ${en(c0)}\\ \\mathrm{mol/L}`, `[\\mathrm{HI}] = ${en(y)}\\ \\mathrm{mol/L}`], find: ["K_c"] },
            hint: "Make an ICE table: forming $y$ mol/L of HI uses $y/2$ of each reactant.",
            formula: "K_c = \\dfrac{[\\mathrm{HI}]^2}{[\\mathrm{H_2}][\\mathrm{I_2}]}",
            solution: `Used: $${en(y)}/2 = ${en(x)}$ mol/L of each reactant\n$[\\mathrm{H_2}] = [\\mathrm{I_2}] = ${en(c0)} - ${en(x)} = ${en(c0 - x)}$ mol/L\n$K_c = \\dfrac{${en(y)}^2}{${en(c0 - x)}^2} \\approx ${en(K, 2)}$`,
          });
        }
        if (v === 1) {
          const c0 = r.pick([0.5, 1, 2]), a = r.pick([20, 25, 40, 50, 60]);
          const x = (c0 * a) / 100, K = (x * x) / (c0 - x);
          return task({
            text: `${en(c0)} mol/L of $\\mathrm{PCl_5}$ is placed in a vessel. At equilibrium ($\\mathrm{PCl_5 \\rightleftharpoons PCl_3 + Cl_2}$), ${a}% of it has dissociated. What is $K_c$?${roundTo(3)}`,
            answer: numM(K, 3, [[(x * x) / c0, "Use the equilibrium concentration of $\\mathrm{PCl_5}$: $c_0 - x$."], [x / (c0 - x), "Both $\\mathrm{PCl_3}$ and $\\mathrm{Cl_2}$ appear in the numerator."]]),
            data: { given: [`c_0 = ${en(c0)}\\ \\mathrm{mol/L}`, `\\alpha = ${a}\\%`], find: ["K_c"] },
            hint: "Find $x$, the concentration that dissociated; it gives $[\\mathrm{PCl_3}] = [\\mathrm{Cl_2}] = x$.",
            formula: "K_c = \\dfrac{[\\mathrm{PCl_3}][\\mathrm{Cl_2}]}{[\\mathrm{PCl_5}]}",
            solution: `$x = ${en(a / 100)} \\cdot ${en(c0)} = ${en(x)}$ mol/L\n$[\\mathrm{PCl_5}] = ${en(c0)} - ${en(x)} = ${en(c0 - x)}$ mol/L\n$K_c = \\dfrac{${en(x)}^2}{${en(c0 - x)}} \\approx ${en(K, 3)}$`,
          });
        }
        const K = r.pick([4, 5, 10, 16, 25, 0.5, 0.25, 50]), mode = r.pick(["rev", "double", "half"]);
        const K2 = mode === "rev" ? 1 / K : mode === "double" ? K * K : Math.sqrt(K);
        return task({
          text: `For $\\mathrm{N_2 + 3H_2 \\rightleftharpoons 2NH_3}$, $K_c = ${en(K)}$ at a certain temperature. What is $K_c$ for ${mode === "rev" ? "$\\mathrm{2NH_3 \\rightleftharpoons N_2 + 3H_2}$" : mode === "double" ? "$\\mathrm{2N_2 + 6H_2 \\rightleftharpoons 4NH_3}$" : "$\\mathrm{\\tfrac12 N_2 + \\tfrac32 H_2 \\rightleftharpoons NH_3}$"} at the same temperature?${roundTo(3)}`,
          answer: numM(K2, 3, [[mode === "rev" ? -K : 2 * K, mode === "rev" ? "Reversing a reaction inverts $K$, it does not change its sign." : "Doubling the coefficients squares $K$; it does not double it."], [mode === "half" ? K / 2 : mode === "rev" ? K : NaN, mode === "half" ? "Halving the coefficients takes the square root of $K$." : "Reversing the reaction changes $K$ to $1/K$."]]),
          data: { given: [`K_c = ${en(K)}`], find: ["K_c'"] },
          hint: "Reversing a reaction gives $1/K$; multiplying all coefficients by $n$ gives $K^n$.",
          formula: ["K_{rev} = \\dfrac{1}{K}", "K_{n\\times} = K^n"],
          solution: `${mode === "rev" ? "The reaction is reversed" : mode === "double" ? "All coefficients are multiplied by 2" : "All coefficients are multiplied by ½"}\n$K_c' = ${mode === "rev" ? `1/${en(K)}` : mode === "double" ? `${en(K)}^2` : `\\sqrt{${en(K)}}`}$\n$K_c' \\approx ${en(K2, 3)}$`,
        });
      }
      const v = r.int(0, 2);
      if (v === 0) {
        const K = r.pick([4, 9, 16, 25, 36, 49, 0.25]), c0 = r.pick([0.5, 1, 1.5, 2]);
        const s = Math.sqrt(K), x = (c0 * s) / (1 + s);
        return task({
          text: `For $\\mathrm{A + B \\rightleftharpoons C + D}$, $K_c = ${en(K)}$. If ${en(c0)} mol/L of A and ${en(c0)} mol/L of B are mixed (no C or D at the start), what is ${C("C")} at equilibrium, in mol/L?${roundTo(3)}`,
          answer: numM(x, 3, [[(c0 * K) / (1 + K), "Take the square root of both sides: $\\sqrt{K} = x/(c_0 - x)$."], [c0 * s, "The reactants are used up as C forms: $[\\mathrm{A}] = c_0 - x$."]]),
          data: { given: [`K_c = ${en(K)}`, `c_0 = ${en(c0)}\\ \\mathrm{mol/L}`], find: ["[\\mathrm{C}]"] },
          hint: "Let $x$ react: $K_c = \\dfrac{x^2}{(c_0 - x)^2}$, so take the square root of both sides.",
          formula: "K_c = \\dfrac{[\\mathrm{C}][\\mathrm{D}]}{[\\mathrm{A}][\\mathrm{B}]}",
          solution: `$\\dfrac{x^2}{(${en(c0)} - x)^2} = ${en(K)}$\n$\\dfrac{x}{${en(c0)} - x} = ${en(s)}$\n$x = \\dfrac{${en(s * c0)}}{${en(1 + s)}} \\approx ${en(x, 3)}\\ \\text{mol/L}$`,
        });
      }
      if (v === 1) {
        const c0 = r.pick([0.1, 0.2, 0.5, 1]), K = r.pick([0.01, 0.02, 0.05, 0.1, 0.2]);
        // PCl5 ⇌ PCl3 + Cl2: x² + Kx - Kc0 = 0
        const x = (-K + Math.sqrt(K * K + 4 * K * c0)) / 2;
        return task({
          text: `For $\\mathrm{PCl_5 \\rightleftharpoons PCl_3 + Cl_2}$, $K_c = ${en(K)}$. Starting with ${en(c0)} mol/L of $\\mathrm{PCl_5}$ only, what is ${C("Cl_2")} at equilibrium, in mol/L?${roundTo(3)}`,
          answer: numM(x, 3, [[Math.sqrt(K * c0), "That assumes $x \\ll c_0$; here solve the quadratic exactly."], [Math.sqrt(K), "The denominator is $c_0 - x$, not 1."]]),
          data: { given: [`K_c = ${en(K)}`, `c_0 = ${en(c0)}\\ \\mathrm{mol/L}`], find: ["[\\mathrm{Cl_2}]"] },
          hint: "With $x$ dissociated: $K_c = \\dfrac{x^2}{c_0 - x}$. Solve the quadratic and keep the positive root.",
          formula: "K_c = \\dfrac{x^2}{c_0 - x}",
          solution: `$x^2 + ${en(K)}x - ${en(K * c0)} = 0$\n$x = \\dfrac{-${en(K)} + \\sqrt{${en(K * K)} + ${en(4 * K * c0)}}}{2}$\n$x \\approx ${en(x, 3)}\\ \\text{mol/L}$`,
        });
      }
      const Kc = r.pick([0.5, 1.2, 2, 4.5, 10]), T = r.pick([300, 400, 500, 600]), dn = r.pick([1, -1, 2]);
      const eqs = { 1: "PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g)", "-1": "2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)", 2: "2NH_3(g) \\rightleftharpoons N_2(g) + 3H_2(g)" };
      const Kp = Kc * (0.0821 * T) ** dn;
      return task({
        text: `For $\\mathrm{${eqs[dn]}}$, $K_c = ${en(Kc)}$ at ${T} K. What is $K_p$ (pressures in atm)? (Use $R = 0.0821\\ \\text{L·atm/(mol·K)}$.)${roundTo(dn === -1 ? 5 : 1)}`,
        answer: numM(Kp, dn === -1 ? 5 : 1, [[Kc * (0.0821 * T) ** -dn, "$\\Delta n$ = moles of gaseous products − moles of gaseous reactants."], [Kc * 0.0821 * T, `Raise $RT$ to the power $\\Delta n = ${dn}$.`], [Kc, "$K_p = K_c$ only when $\\Delta n = 0$."]]),
        data: { given: [`K_c = ${en(Kc)}`, dq("T", T, "K"), dq("R", 0.0821, "L\\,atm/(mol\\,K)")], find: ["K_p"] },
        hint: "Count $\\Delta n$ of gas molecules, then use $K_p = K_c (RT)^{\\Delta n}$.",
        formula: "K_p = K_c (RT)^{\\Delta n}",
        solution: `$\\Delta n = ${dn}$\n$RT = 0.0821 \\cdot ${T} = ${en(0.0821 * T)}$\n$K_p = ${en(Kc)} \\cdot ${en(0.0821 * T)}^{${dn}} \\approx ${en(Kp, dn === -1 ? 5 : 1)}$`,
      });
    },
  },
  {
    id: "exk-kinetics",
    topics: [T("chemical-kinetics")],
    gen(level, r) {
      if (level === 1) {
        const v = r.int(0, 3);
        if (v === 0) {
          const t = r.pick([5, 10, 15, 20, 30, 45]), k = r.int(2, 5), c0 = r.pick([0.4, 0.8, 1.2, 1.6, 2, 3.2]);
          return task({
            text: `A first-order reaction has a half-life of ${t} min. Starting at ${en(c0)} mol/L, what is the concentration after ${t * k} min, in mol/L?${roundTo(3)}`,
            answer: numM(c0 / 2 ** k, 3, [[c0 / (2 * k), "Halve once per half-life: divide by $2^n$, not by $2n$."], [c0 - c0 / 2 ** k, "That is how much reacted, not how much is left."]]),
            data: { given: [dq("t_{1/2}", t, "min"), `c_0 = ${en(c0)}\\ \\mathrm{mol/L}`, dq("t", t * k, "min")], find: ["c"] },
            hint: "Count half-lives; each one halves the concentration.",
            formula: "c = c_0 \\left(\\tfrac12\\right)^{t/t_{1/2}}",
            solution: `$n = ${t * k}/${t} = ${k}$ half-lives\n$c = ${en(c0)}/2^{${k}} = ${en(c0 / 2 ** k, 3)}\\ \\text{mol/L}$`,
          });
        }
        if (v === 1) {
          const k = r.pick([0.01, 0.02, 0.05, 0.1, 0.231, 0.0693, 0.004]);
          const t = Math.LN2 / k;
          return task({
            text: `A first-order reaction has rate constant $k = ${en(k)}\\ \\text{s}^{-1}$. What is its half-life, in seconds?${roundTo(1)}`,
            answer: numM(t, 1, [[k / Math.LN2, "You inverted the ratio: $t_{1/2} = \\ln 2 / k$."], [1 / k, "Multiply by $\\ln 2 \\approx 0.693$."]]),
            data: { given: [`k = ${en(k)}\\ \\mathrm{s^{-1}}`], find: ["t_{1/2}"] },
            hint: "For a first-order reaction the half-life does not depend on concentration.",
            formula: "t_{1/2} = \\dfrac{\\ln 2}{k} \\approx \\dfrac{0.693}{k}",
            solution: `$t_{1/2} = \\dfrac{0.693}{${en(k)}}$\n$t_{1/2} \\approx ${en(t, 1)}\\ \\text{s}$`,
          });
        }
        if (v === 2) {
          const n = r.pick([0, 1, 2, 3]), f = r.pick([2, 3, 4, 5]);
          return task({
            text: `The rate law of a reaction is rate $= k[\\mathrm{A}]^{${n}}$. By what factor does the rate change when $[\\mathrm{A}]$ is multiplied by ${f}?`,
            answer: numM(f ** n, null, [[f * n, "Raise the factor to the power $n$, do not multiply."], [n === 0 ? f : f, n === 0 ? "Zero order: the rate does not depend on $[\\mathrm{A}]$." : "The rate is not simply proportional unless $n = 1$."]]),
            data: { given: [`n = ${n}`, `f = ${f}`], find: ["\\text{factor}"] },
            hint: "Rate is proportional to $[\\mathrm{A}]^n$.",
            formula: "\\dfrac{r_2}{r_1} = \\left(\\dfrac{[\\mathrm{A}]_2}{[\\mathrm{A}]_1}\\right)^n",
            solution: `$\\dfrac{r_2}{r_1} = ${f}^{${n}}$\nFactor $= ${f ** n}$`,
          });
        }
        const c1 = r.pick([0.8, 1, 1.2, 1.5, 2]), c2 = r.pick([0.2, 0.3, 0.5, 0.6]), dt = r.pick([10, 20, 25, 40, 50]);
        const rate = (c1 - c2) / dt;
        return task({
          text: `The concentration of a reactant falls from ${en(c1)} mol/L to ${en(c2)} mol/L in ${dt} s. What is the average rate of reaction, in mol/(L·s)?${roundTo(3)}`,
          answer: numM(rate, 3, [[c1 / dt, "Use the change in concentration, not the starting value."], [dt / (c1 - c2), "You inverted the ratio: rate = Δc/Δt."]]),
          data: { given: [`c_1 = ${en(c1)}\\ \\mathrm{mol/L}`, `c_2 = ${en(c2)}\\ \\mathrm{mol/L}`, dq("\\Delta t", dt, "s")], find: ["v"] },
          hint: "Rate = change in concentration ÷ time.",
          formula: "v = -\\dfrac{\\Delta c}{\\Delta t}",
          solution: `$\\Delta c = ${en(c2)} - ${en(c1)} = ${en(c2 - c1)}$ mol/L\n$v = \\dfrac{${en(c1 - c2)}}{${dt}} \\approx ${en(rate, 3)}\\ \\text{mol/(L·s)}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 2);
        if (v === 0) {
          const k = r.pick([0.01, 0.02, 0.05, 0.1]), t = r.pick([10, 20, 30, 50, 60]), c0 = r.pick([0.5, 1, 2]);
          const c = c0 * Math.exp(-k * t);
          return task({
            text: `A first-order reaction has $k = ${en(k)}\\ \\text{s}^{-1}$. Starting at ${en(c0)} mol/L, what is the concentration after ${t} s, in mol/L?${roundTo(3)}`,
            answer: numM(c, 3, [[c0 * (1 - k * t), "First-order decay is exponential, not linear."], [c0 * Math.exp(-k / t), "The exponent is $-kt$."]]),
            data: { given: [`k = ${en(k)}\\ \\mathrm{s^{-1}}`, `c_0 = ${en(c0)}\\ \\mathrm{mol/L}`, dq("t", t, "s")], find: ["c"] },
            hint: "Use the integrated first-order rate law.",
            formula: "c = c_0 e^{-kt}",
            solution: `$kt = ${en(k)} \\cdot ${t} = ${en(k * t)}$\n$e^{-${en(k * t)}} \\approx ${en(Math.exp(-k * t), 4)}$\n$c = ${en(c0)} \\cdot ${en(Math.exp(-k * t), 4)} \\approx ${en(c, 3)}\\ \\text{mol/L}$`,
          });
        }
        if (v === 1) {
          const n = r.pick([0, 1, 2]), f = r.pick([2, 3, 4]), r1 = r.pick([1.2, 2, 2.5, 3, 4]);
          const r2 = r1 * f ** n;
          return task({
            text: `When $[\\mathrm{A}]$ is increased from 0.1 mol/L to ${en(0.1 * f)} mol/L, the initial rate changes from ${en(r1)} to ${en(r2)} mmol/(L·s). What is the order of the reaction in A?`,
            answer: numM(n, null, [[r2 / r1, "That is the rate ratio; the order is the exponent: $\\text{ratio} = f^n$."], [n === 1 ? 2 : 1, "Compare how many times the rate changed with how many times the concentration changed."]]),
            data: { given: [`c_1 = 0.1\\ \\mathrm{mol/L}`, `c_2 = ${en(0.1 * f)}\\ \\mathrm{mol/L}`, `v_1 = ${en(r1)}`, `v_2 = ${en(r2)}`], find: ["n"] },
            hint: "Find the factor by which the concentration and the rate changed; then solve $\\text{rate factor} = (\\text{conc. factor})^n$.",
            formula: "\\dfrac{v_2}{v_1} = \\left(\\dfrac{c_2}{c_1}\\right)^n",
            solution: `Concentration factor: $${en(0.1 * f)}/0.1 = ${f}$\nRate factor: $${en(r2)}/${en(r1)} = ${en(r2 / r1)}$\n$${f}^n = ${en(r2 / r1)} \\Rightarrow n = ${n}$`,
          });
        }
        const th = r.pick([10, 20, 30, 40, 60]), pct = r.pick([10, 20, 25, 40, 60, 75, 90]);
        const k = Math.LN2 / th, t = Math.log(100 / pct) / k;
        return task({
          text: `A first-order reaction has a half-life of ${th} min. How long does it take until only ${pct}% of the reactant remains, in minutes?${roundTo(1)}`,
          answer: numM(t, 1, [[Math.log(100 / (100 - pct)) / k, `That is the time until ${pct}% has reacted.`], [th * (100 - pct) / 50, "First-order decay is exponential: use logarithms."]]),
          data: { given: [dq("t_{1/2}", th, "min"), `c/c_0 = ${pct}\\%`], find: ["t"] },
          hint: "Find $k$ from the half-life, then use $\\ln(c_0/c) = kt$.",
          formula: ["k = \\dfrac{\\ln 2}{t_{1/2}}", "t = \\dfrac{1}{k}\\ln\\dfrac{c_0}{c}"],
          solution: `$k = 0.693/${th} \\approx ${en(k, 5)}\\ \\text{min}^{-1}$\n$\\ln\\dfrac{100}{${pct}} \\approx ${en(Math.log(100 / pct), 4)}$\n$t = ${en(Math.log(100 / pct), 4)} / ${en(k, 5)} \\approx ${en(t, 1)}\\ \\text{min}$`,
        });
      }
      const v = r.int(0, 2);
      if (v === 0) {
        const Ea = r.pick([40, 50, 60, 75, 80, 100]), T1 = r.pick([290, 298, 300, 310]), dT = r.pick([10, 20, 30, 50]);
        const T2 = T1 + dT, ratio = Math.exp(((Ea * 1000) / 8.314) * (1 / T1 - 1 / T2));
        return task({
          text: `A reaction has activation energy ${Ea} kJ/mol. By what factor does the rate constant increase when the temperature rises from ${T1} K to ${T2} K? (Use $R = 8.314$ J/(mol·K).)${roundTo(2)}`,
          answer: numM(ratio, 2, [[Math.exp((Ea / 8.314) * (1 / T1 - 1 / T2)), "Convert kJ to J before using $R$ in J/(mol·K)."], [((Ea * 1000) / 8.314) * (1 / T1 - 1 / T2), "That is $\\ln(k_2/k_1)$; take the exponential."]]),
          data: { given: [dq("E_a", Ea, "kJ/mol"), dq("T_1", T1, "K"), dq("T_2", T2, "K"), dq("R", 8.314, "J/(mol\\,K)")], find: ["k_2/k_1"] },
          hint: "Use the two-temperature form of the Arrhenius equation, with $E_a$ in J/mol.",
          formula: "\\ln\\dfrac{k_2}{k_1} = \\dfrac{E_a}{R}\\left(\\dfrac{1}{T_1} - \\dfrac{1}{T_2}\\right)",
          solution: `$\\dfrac{1}{T_1} - \\dfrac{1}{T_2} = ${en((1 / T1 - 1 / T2) * 1e5, 3)} \\times 10^{-5}\\ \\text{K}^{-1}$\n$\\ln\\dfrac{k_2}{k_1} = \\dfrac{${Ea * 1000}}{8.314} \\cdot ${en((1 / T1 - 1 / T2) * 1e5, 3)} \\times 10^{-5} \\approx ${en(Math.log(ratio), 3)}$\n$\\dfrac{k_2}{k_1} = e^{${en(Math.log(ratio), 3)}} \\approx ${en(ratio, 2)}$`,
        });
      }
      if (v === 1) {
        const T1 = r.pick([300, 310, 320]), dT = r.pick([10, 20]), f = r.pick([2, 3, 4]);
        const T2 = T1 + dT, Ea = (8.314 * Math.log(f)) / (1 / T1 - 1 / T2) / 1000;
        return task({
          text: `The rate constant of a reaction becomes ${f} times larger when the temperature rises from ${T1} K to ${T2} K. What is the activation energy, in kJ/mol? (Use $R = 8.314$ J/(mol·K).)${roundTo(1)}`,
          answer: numM(Ea, 1, [[Ea * 1000, "Convert J/mol to kJ/mol."], [(8.314 * f) / (1 / T1 - 1 / T2) / 1000, "Use $\\ln f$, not $f$."]]),
          data: { given: [`k_2/k_1 = ${f}`, dq("T_1", T1, "K"), dq("T_2", T2, "K"), dq("R", 8.314, "J/(mol\\,K)")], find: ["E_a"] },
          hint: "Solve the two-temperature Arrhenius equation for $E_a$.",
          formula: "E_a = \\dfrac{R \\ln(k_2/k_1)}{1/T_1 - 1/T_2}",
          solution: `$\\ln ${f} \\approx ${en(Math.log(f), 4)}$\n$\\dfrac{1}{T_1} - \\dfrac{1}{T_2} = ${en((1 / T1 - 1 / T2) * 1e5, 3)} \\times 10^{-5}\\ \\text{K}^{-1}$\n$E_a = \\dfrac{8.314 \\cdot ${en(Math.log(f), 4)}}{${en((1 / T1 - 1 / T2) * 1e5, 3)} \\times 10^{-5}} \\approx ${en(Ea, 1)}\\ \\text{kJ/mol}$`,
        });
      }
      const m = r.pick([1, 2]), n = r.pick([0, 1, 2]), fa = r.pick([2, 3]), fb = r.pick([2, 3, 4]);
      const F = fa ** m * fb ** n;
      return task({
        text: `The rate law is rate $= k[\\mathrm{A}]^{${m}}[\\mathrm{B}]^{${n}}$. By what factor does the rate change if $[\\mathrm{A}]$ is multiplied by ${fa} and $[\\mathrm{B}]$ by ${fb} at the same time?`,
        answer: numM(F, null, [[fa * fb, "Raise each factor to its order before multiplying."], [fa ** m + fb ** n, "Multiply the two effects, do not add them."]]),
        data: { given: [`m = ${m}`, `n = ${n}`, `f_A = ${fa}`, `f_B = ${fb}`], find: ["\\text{factor}"] },
        hint: "Each concentration factor is raised to its own order; then multiply.",
        formula: "\\dfrac{v_2}{v_1} = f_A^{\\,m} f_B^{\\,n}",
        solution: `A: $${fa}^{${m}} = ${fa ** m}$\nB: $${fb}^{${n}} = ${fb ** n}$\nFactor $= ${fa ** m} \\cdot ${fb ** n} = ${F}$`,
      });
    },
  },
  {
    id: "exk-electro",
    topics: [T("electrochemistry")],
    gen(level, r) {
      const E0 = { Mg: -2.37, Al: -1.66, Zn: -0.76, Fe: -0.44, Ni: -0.25, Sn: -0.14, Pb: -0.13, Cu: 0.34, Ag: 0.8 };
      const ion = (m) => (m === "Ag" ? "+" : m === "Al" ? "3+" : "2+");
      const F = 96500;
      if (level === 1) {
        const v = r.int(0, 1);
        if (v === 0) {
          const [a, c] = r.shuffle(Object.keys(E0)).slice(0, 2).sort((x, y) => E0[x] - E0[y]);
          const emf = Math.round((E0[c] - E0[a]) * 100) / 100;
          return task({
            text: `Standard reduction potentials: $E^\\circ(\\mathrm{${a}^{${ion(a)}}/${a}}) = ${en(E0[a])}$ V and $E^\\circ(\\mathrm{${c}^{${ion(c)}}/${c}}) = ${en(E0[c])}$ V. What is the standard emf of the cell made from these two electrodes, in volts?`,
            answer: numM(emf, null, [[Math.round((E0[c] + E0[a]) * 100) / 100, "Subtract: $E_{cell} = E_{cathode} - E_{anode}$."], [-emf, "The cathode is the electrode with the more positive potential, so the emf is positive."]]),
            data: { given: [`E^\\circ_1 = ${en(E0[a])}\\ \\mathrm{V}`, `E^\\circ_2 = ${en(E0[c])}\\ \\mathrm{V}`], find: ["E^\\circ_{cell}"] },
            hint: "The more positive one is the cathode.",
            formula: "E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}",
            solution: `Cathode: ${c}, anode: ${a}\n$E^\\circ = ${en(E0[c])} - (${en(E0[a])}) = ${en(emf)}\\ \\text{V}$`,
          });
        }
        const I = r.pick([0.5, 1, 2, 2.5, 5, 10]), t = r.pick([60, 300, 600, 965, 1930, 3600]);
        return task({
          text: `A current of ${en(I)} A flows for ${t} s. How many moles of electrons pass through the circuit? ($F = 96500$ C/mol.)${roundTo(4)}`,
          answer: numM((I * t) / F, 4, [[I * t, "That is the charge in coulombs; divide by $F$."], [F / (I * t), "You inverted the ratio: $n = Q/F$."]]),
          data: { given: [dq("I", I, "A"), dq("t", t, "s"), dq("F", F, "C/mol")], find: ["n(e^-)"] },
          hint: "Find the charge $Q = It$, then divide by the charge of one mole of electrons.",
          formula: ["Q = I t", "n = \\dfrac{Q}{F}"],
          solution: `$Q = ${en(I)} \\cdot ${t} = ${en(I * t)}\\ \\text{C}$\n$n = \\dfrac{${en(I * t)}}{96500} \\approx ${en((I * t) / F, 4)}\\ \\text{mol}$`,
        });
      }
      const METALS = [["Cu", 63.5, 2, "CuSO_4"], ["Ag", 108, 1, "AgNO_3"], ["Zn", 65, 2, "ZnSO_4"], ["Ni", 58.7, 2, "NiSO_4"], ["Al", 27, 3, "Al_2O_3 \\text{ melt}"]];
      if (level === 2) {
        const [mt, M, z, salt] = r.pick(METALS);
        const rev = r.next() < 0.4;
        const I = r.pick([0.5, 1, 2, 5, 10]);
        if (!rev) {
          const t = r.pick([965, 1930, 3600, 3860, 7200, 9650]);
          const m = (I * t * M) / (z * F);
          return task({
            text: `A current of ${en(I)} A is passed through $\\mathrm{${salt}}$ for ${t} s. What mass of ${mt} is deposited at the cathode, in grams? ($M(\\mathrm{${mt}}) = ${en(M)}$ g/mol, $F = 96500$ C/mol, $\\mathrm{${mt}^{${ion(mt)}} + ${z > 1 ? z : ""}e^- \\rightarrow ${mt}}$.)${roundTo(3)}`,
            answer: numM(m, 3, [[z > 1 ? (I * t * M) / F : (I * t * M) / (2 * F), z > 1 ? `Each ${mt} ion needs ${z} electrons: divide by ${z}.` : "Silver ions need only one electron each."], [(I * t) / (z * F), "That is the amount in moles; multiply by the molar mass."]]),
            data: { given: [dq("I", I, "A"), dq("t", t, "s"), dq("M", M, "g/mol"), `z = ${z}`, dq("F", F, "C/mol")], find: ["m"] },
            hint: `Charge $Q = It$; moles of electrons $= Q/F$; ${z} electron${z > 1 ? "s" : ""} per ${mt} atom.`,
            formula: "m = \\dfrac{I t M}{z F}",
            solution: `$Q = ${en(I)} \\cdot ${t} = ${en(I * t)}\\ \\text{C}$\n$n(e^-) = ${en(I * t)}/96500 \\approx ${en((I * t) / F, 5)}$ mol, $n(\\mathrm{${mt}}) = ${en((I * t) / F / z, 5)}$ mol\n$m = ${en((I * t) / F / z, 5)} \\cdot ${en(M)} \\approx ${en(m, 3)}\\ \\text{g}$`,
          });
        }
        const m = r.pick([0.5, 1, 2, 5]);
        const t = (m * z * F) / (M * I) / 60;
        return task({
          text: `How long must a current of ${en(I)} A flow through $\\mathrm{${salt}}$ to deposit ${en(m)} g of ${mt}, in minutes? ($M(\\mathrm{${mt}}) = ${en(M)}$ g/mol, $F = 96500$ C/mol, ${z} electron${z > 1 ? "s" : ""} per atom.)${roundTo(1)}`,
          answer: numM(t, 1, [[t * 60, "That is the time in seconds; convert to minutes."], [t / z, `Each ${mt} atom needs ${z} electrons: multiply by ${z}.`]]),
          data: { given: [dq("I", I, "A"), dq("m", m, "g"), dq("M", M, "g/mol"), `z = ${z}`, dq("F", F, "C/mol")], find: ["t"] },
          hint: "Moles of metal → moles of electrons → charge → time.",
          formula: "t = \\dfrac{m z F}{M I}",
          solution: `$n = ${en(m)}/${en(M)} \\approx ${en(m / M, 5)}$ mol, $n(e^-) = ${z} \\cdot ${en(m / M, 5)} \\approx ${en((z * m) / M, 5)}$ mol\n$Q = ${en((z * m) / M, 5)} \\cdot 96500 \\approx ${en((z * m * F) / M, 0)}\\ \\text{C}$\n$t = Q/I \\approx ${en(t * 60, 0)}\\ \\text{s} \\approx ${en(t, 1)}\\ \\text{min}$`,
        });
      }
      const v = r.int(0, 2);
      if (v === 0) {
        const [a, c] = r.shuffle(["Zn", "Fe", "Ni", "Cu", "Mg", "Pb"]).slice(0, 2).sort((x, y) => E0[x] - E0[y]);
        const emf = E0[c] - E0[a], dG = (-2 * F * emf) / 1000;
        return task({
          text: `A cell is built from $\\mathrm{${a}^{2+}/${a}}$ ($E^\\circ = ${en(E0[a])}$ V) and $\\mathrm{${c}^{2+}/${c}}$ ($E^\\circ = ${en(E0[c])}$ V). Two electrons are transferred. What is $\\Delta G^\\circ$ of the cell reaction, in kJ/mol? ($F = 96500$ C/mol.)${roundTo(1)}`,
          answer: numM(dG, 1, [[-dG, "A spontaneous cell reaction has a negative $\\Delta G^\\circ$."], [(-F * emf) / 1000, "Two electrons are transferred: $n = 2$."], [-2 * F * emf, "Convert J/mol to kJ/mol."]]),
          data: { given: [`E^\\circ_1 = ${en(E0[a])}\\ \\mathrm{V}`, `E^\\circ_2 = ${en(E0[c])}\\ \\mathrm{V}`, `n = 2`, dq("F", F, "C/mol")], find: ["\\Delta G^\\circ"] },
          hint: "First find the cell emf, then use $\\Delta G^\\circ = -nFE^\\circ$.",
          formula: ["E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}", "\\Delta G^\\circ = -n F E^\\circ_{cell}"],
          solution: `$E^\\circ_{cell} = ${en(E0[c])} - (${en(E0[a])}) = ${en(emf)}\\ \\text{V}$\n$\\Delta G^\\circ = -2 \\cdot 96500 \\cdot ${en(emf)} = ${en(-2 * F * emf)}\\ \\text{J/mol}$\n$\\Delta G^\\circ \\approx ${en(dG, 1)}\\ \\text{kJ/mol}$`,
        });
      }
      if (v === 1) {
        const n = r.pick([1, 2]), E = r.pick([0.059, 0.118, 0.177, 0.236, 0.295]);
        const lgK = (n * E) / 0.059;
        return task({
          text: `A cell reaction at 25 °C transfers ${n} electron${n > 1 ? "s" : ""} and has $E^\\circ_{\\text{cell}} = ${en(E)}$ V. What is $\\log_{10} K$ for the reaction? (Use $E^\\circ = \\dfrac{0.059}{n}\\log K$.)`,
          answer: numM(Math.round(lgK * 1000) / 1000, null, [[E / (0.059 * n), "Multiply by $n$: $\\log K = nE^\\circ/0.059$."], [10 ** lgK, "The question asks for $\\log K$, not $K$."]]),
          data: { given: [`n = ${n}`, `E^\\circ = ${en(E)}\\ \\mathrm{V}`], find: ["\\log K"] },
          hint: "Rearrange the given equation for $\\log K$.",
          formula: "\\log K = \\dfrac{n E^\\circ}{0.059}",
          solution: `$\\log K = \\dfrac{${n} \\cdot ${en(E)}}{0.059}$\n$\\log K = ${en(lgK, 3)}$`,
        });
      }
      const [a, c] = [["Zn", "Cu"], ["Fe", "Cu"], ["Zn", "Ni"], ["Mg", "Zn"]][r.int(0, 3)];
      const ca = r.pick([0.01, 0.1, 1, 2]), cc = r.pick([0.001, 0.01, 0.1, 1]);
      if (ca === cc) return null;
      const E0c = E0[c] - E0[a], E = E0c - (0.059 / 2) * Math.log10(ca / cc);
      return task({
        text: `For the cell $\\mathrm{${a} | ${a}^{2+}(${en(ca)}\\ M) || ${c}^{2+}(${en(cc)}\\ M) | ${c}}$, $E^\\circ_{\\text{cell}} = ${en(E0c)}$ V. What is the cell emf at 25 °C, in volts? (Use $E = E^\\circ - \\dfrac{0.059}{n}\\log Q$.)${roundTo(3)}`,
        answer: numM(E, 3, [[E0c - (0.059 / 2) * Math.log10(cc / ca), "$Q = [\\text{product ion}]/[\\text{reactant ion}] = [\\mathrm{" + a + "^{2+}}]/[\\mathrm{" + c + "^{2+}}]$."], [E0c - 0.059 * Math.log10(ca / cc), "Two electrons are transferred: $n = 2$."]]),
        data: { given: [`E^\\circ = ${en(E0c)}\\ \\mathrm{V}`, `[\\mathrm{${a}^{2+}}] = ${en(ca)}\\ \\mathrm{M}`, `[\\mathrm{${c}^{2+}}] = ${en(cc)}\\ \\mathrm{M}`], find: ["E"] },
        hint: `Write $Q$ for $\\mathrm{${a} + ${c}^{2+} \\rightarrow ${a}^{2+} + ${c}}$ and use the Nernst equation with $n = 2$.`,
        formula: "E = E^\\circ - \\dfrac{0.059}{n}\\log Q",
        solution: `$Q = \\dfrac{[\\mathrm{${a}^{2+}}]}{[\\mathrm{${c}^{2+}}]} = \\dfrac{${en(ca)}}{${en(cc)}} = ${en(ca / cc)}$\n$\\log Q = ${en(Math.log10(ca / cc), 3)}$\n$E = ${en(E0c)} - 0.0295 \\cdot ${en(Math.log10(ca / cc), 3)} \\approx ${en(E, 3)}\\ \\text{V}$`,
      });
    },
  },
  {
    id: "exk-atom",
    topics: [T("atomic-structure")],
    gen(level, r) {
      const EL = [["C", 6, 12], ["N", 7, 14], ["O", 8, 16], ["F", 9, 19], ["Na", 11, 23], ["Mg", 12, 24], ["Al", 13, 27], ["P", 15, 31], ["S", 16, 32], ["Cl", 17, 35], ["K", 19, 39], ["Ca", 20, 40], ["Fe", 26, 56], ["Cu", 29, 64], ["Zn", 30, 65], ["Br", 35, 80], ["Ag", 47, 108], ["I", 53, 127]];
      const [s, Z, A] = r.pick(EL);
      if (level === 1) {
        const v = r.int(0, 1);
        if (v === 0) {
          return task({
            text: `How many neutrons are there in one atom of $^{${A}}_{${Z}}\\mathrm{${s}}$?`,
            answer: numM(A - Z, null, [[A, "The mass number counts protons and neutrons together."], [A + Z, "Subtract the atomic number from the mass number."]]),
            data: { given: [`A = ${A}`, `Z = ${Z}`], find: ["N"] },
            hint: "Mass number = protons + neutrons.",
            formula: "N = A - Z",
            solution: `$N = A - Z$\n$N = ${A} - ${Z} = ${A - Z}$`,
          });
        }
        return task({
          text: `An atom of ${s} has ${Z} protons and ${A - Z} neutrons. What is its mass number?`,
          answer: numM(A, null, [[A - 2 * Z, "Add the protons and neutrons; do not subtract."], [Z, "That is the atomic number (protons only)."]]),
          data: { given: [`Z = ${Z}`, `N = ${A - Z}`], find: ["A"] },
          hint: "Mass number counts all nucleons.",
          formula: "A = Z + N",
          solution: `$A = Z + N$\n$A = ${Z} + ${A - Z} = ${A}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 2);
        if (v === 0) {
          const charge = r.pick([-3, -2, -1, 1, 2, 3]);
          const sym = charge > 0 ? `${charge === 1 ? "" : charge}+` : `${charge === -1 ? "" : -charge}-`;
          return task({
            text: `How many electrons does the ion $\\mathrm{${s}^{${sym}}}$ have? (Atomic number of ${s}: ${Z}.)`,
            answer: numM(Z - charge, null, [[Z + charge, "A positive ion has LOST electrons; a negative ion has GAINED them."], [Z, "An ion has a different number of electrons than the neutral atom."]]),
            data: { given: [`Z = ${Z}`], find: ["n(e^-)"] },
            hint: "Start from the neutral atom ($Z$ electrons), then remove or add electrons for the charge.",
            formula: "n(e^-) = Z - q",
            solution: `Neutral ${s}: ${Z} electrons\nCharge ${charge > 0 ? "+" : ""}${charge}: ${charge > 0 ? `lost ${charge}` : `gained ${-charge}`}\n$${Z} ${charge > 0 ? "-" : "+"} ${Math.abs(charge)} = ${Z - charge}$ electrons`,
          });
        }
        if (v === 1) {
          const [el, m1, m2, p1] = r.pick([["Cl", 35, 37, 75], ["B", 10, 11, 20], ["Cu", 63, 65, 69], ["Li", 6, 7, 7.5], ["Br", 79, 81, 50.7], ["Ga", 69, 71, 60]]);
          const avg = (m1 * p1 + m2 * (100 - p1)) / 100;
          return task({
            text: `Element ${el} has two isotopes: ${el}-${m1} (${en(p1)}%) and ${el}-${m2} (${en(100 - p1)}%). Taking each isotope's mass as its mass number, what is the average atomic mass?${roundTo(2)}`,
            answer: numM(avg, 2, [[(m1 + m2) / 2, "Weight each isotope by its abundance; a plain average ignores the percentages."], [(m1 * (100 - p1) + m2 * p1) / 100, "You swapped the abundances of the two isotopes."]]),
            data: { given: [`m_1 = ${m1}`, `w_1 = ${en(p1)}\\%`, `m_2 = ${m2}`, `w_2 = ${en(100 - p1)}\\%`], find: ["\\bar A"] },
            hint: "Multiply each mass by its fraction and add.",
            formula: "\\bar A = w_1 m_1 + w_2 m_2",
            solution: `$\\bar A = ${en(p1 / 100)} \\cdot ${m1} + ${en((100 - p1) / 100)} \\cdot ${m2}$\n$= ${en((m1 * p1) / 100)} + ${en((m2 * (100 - p1)) / 100)}$\n$\\bar A \\approx ${en(avg, 2)}$`,
          });
        }
        const n = r.int(1, 5), ask = r.pick(["e", "orb"]);
        return task({
          text: `What is the maximum number of ${ask === "e" ? "electrons" : "orbitals"} in the shell with principal quantum number $n = ${n}$?`,
          answer: numM(ask === "e" ? 2 * n * n : n * n, null, ask === "e" ? [[n * n, "That is the number of orbitals; each holds 2 electrons."], [2 * n, "The formula is $2n^2$, not $2n$."]] : [[2 * n * n, "That is the number of electrons; each orbital holds 2."], [2 * n - 1, "That is the number of orbitals in one subshell ($2l + 1$), not the whole shell."]]),
          data: { given: [`n = ${n}`], find: [ask === "e" ? "N_e" : "N_{orb}"] },
          hint: "The shell has subshells $l = 0, 1, \\ldots, n-1$, each with $2l + 1$ orbitals.",
          formula: ask === "e" ? "N_e = 2n^2" : "N_{orb} = n^2",
          solution: `Orbitals: $1 + 3 + \\ldots + (2n - 1) = n^2 = ${n * n}$\n${ask === "e" ? `Two electrons per orbital: $2n^2 = ${2 * n * n}$` : `Answer: $${n * n}$`}`,
        });
      }
      const v = r.int(0, 2);
      if (v === 0) {
        const n1 = r.pick([1, 2, 3]), n2 = n1 + r.int(1, 3);
        const E = 13.6 * (1 / (n1 * n1) - 1 / (n2 * n2)), lam = 1240 / E;
        const askL = r.next() < 0.5;
        return task({
          text: `The electron in a hydrogen atom falls from level $n = ${n2}$ to $n = ${n1}$. ${askL ? "What is the wavelength of the emitted photon, in nm? (Use $hc = 1240$ eV·nm.)" : "What energy is emitted, in eV?"} (Use $E_n = -\\dfrac{13.6}{n^2}$ eV.)${roundTo(askL ? 0 : 2)}`,
          answer: askL
            ? numM(lam, 0, [[1240 / (13.6 / (n1 * n1)), "Use the difference between the two levels, not one level."], [1240 / (13.6 * (1 / n1 - 1 / n2)), "Square the quantum numbers."]])
            : numM(E, 2, [[13.6 / (n1 * n1), "That is the energy of one level; you need the difference."], [13.6 * (1 / n1 - 1 / n2), "Square the quantum numbers: $E_n \\propto 1/n^2$."]]),
          data: { given: [`n_i = ${n2}`, `n_f = ${n1}`, ...(askL ? ["hc = 1240\\ \\mathrm{eV\\,nm}"] : [])], find: [askL ? "\\lambda" : "\\Delta E"] },
          hint: "$\\Delta E = 13.6\\left(\\dfrac{1}{n_f^2} - \\dfrac{1}{n_i^2}\\right)$ eV" + (askL ? ", then $\\lambda = hc/\\Delta E$." : "."),
          formula: askL ? ["\\Delta E = 13.6\\left(\\dfrac{1}{n_f^2} - \\dfrac{1}{n_i^2}\\right)", "\\lambda = \\dfrac{hc}{\\Delta E}"] : "E_n = -\\dfrac{13.6\\ \\text{eV}}{n^2}",
          solution: `$E_{${n2}} = -13.6/${n2 * n2} \\approx ${en(-13.6 / (n2 * n2), 3)}$ eV, $E_{${n1}} = ${en(-13.6 / (n1 * n1), 3)}$ eV\n$\\Delta E \\approx ${en(E, 3)}\\ \\text{eV}$${askL ? `\n$\\lambda = 1240/${en(E, 3)} \\approx ${en(lam, 0)}\\ \\text{nm}$` : ""}`,
        });
      }
      if (v === 1) {
        const n = r.int(2, 5);
        const Ei = 13.6 / (n * n);
        return task({
          text: `How much energy, in eV, is needed to ionize a hydrogen atom whose electron is in the level $n = ${n}$? (Use $E_n = -\\dfrac{13.6}{n^2}$ eV.)${roundTo(2)}`,
          answer: numM(Ei, 2, [[13.6, "That is the ionization energy from the ground state ($n = 1$)."], [13.6 / n, "Square the quantum number."], [13.6 - Ei, "Ionization takes the electron from $E_n$ to 0, not to $n = 1$."]]),
          data: { given: [`n = ${n}`], find: ["E_{ion}"] },
          hint: "Ionization means raising the electron from $E_n$ to $E_\\infty = 0$.",
          formula: "E_{ion} = 0 - E_n = \\dfrac{13.6}{n^2}\\ \\text{eV}",
          solution: `$E_{${n}} = -\\dfrac{13.6}{${n * n}} \\approx ${en(-Ei, 2)}\\ \\text{eV}$\n$E_{ion} = 0 - E_{${n}} \\approx ${en(Ei, 2)}\\ \\text{eV}$`,
        });
      }
      const [el, m1, m2, avg] = r.pick([["Cl", 35, 37, 35.5], ["Cu", 63, 65, 63.55], ["B", 10, 11, 10.8], ["Br", 79, 81, 79.9], ["Ga", 69, 71, 69.8], ["Rb", 85, 87, 85.5]]);
      const x = ((m2 - avg) / (m2 - m1)) * 100;
      return task({
        text: `Element ${el} has two isotopes, ${el}-${m1} and ${el}-${m2}, and an average atomic mass of ${en(avg)}. Taking each isotope's mass as its mass number, what is the percentage abundance of ${el}-${m1}?${roundTo(1)}`,
        answer: numM(x, 1, [[100 - x, `That is the abundance of ${el}-${m2}.`], [50, "The isotopes are not equally abundant: the average is closer to the more common one."]]),
        data: { given: [`m_1 = ${m1}`, `m_2 = ${m2}`, `\\bar A = ${en(avg)}`], find: ["w_1"] },
        hint: "Let the fraction of the lighter isotope be $x$; then $x m_1 + (1 - x) m_2 = \\bar A$.",
        formula: "x m_1 + (1 - x) m_2 = \\bar A",
        solution: `$${m1}x + ${m2}(1 - x) = ${en(avg)}$\n$x = \\dfrac{${m2} - ${en(avg)}}{${m2} - ${m1}} = ${en((m2 - avg) / (m2 - m1), 4)}$\n$w_1 \\approx ${en(x, 1)}\\%$`,
      });
    },
  },
];
