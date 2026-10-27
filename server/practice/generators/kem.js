// Generatorji nalog za kemijo (OŠ in gimnazija).
import { choices } from "../rng.js";
import { roundHalfUp } from "../check.js";
import { tx } from "./mat.js";

// Elementi: simbol, ime, Z, relativna atomska masa (zaokrožena, kot v šolskih periodnih sistemih)
const EL = {
  H: ["vodik", 1, 1.01], He: ["helij", 2, 4.0], Li: ["litij", 3, 6.94], C: ["ogljik", 6, 12.01], N: ["dušik", 7, 14.01],
  O: ["kisik", 8, 16.0], F: ["fluor", 9, 19.0], Na: ["natrij", 11, 22.99], Mg: ["magnezij", 12, 24.31],
  Al: ["aluminij", 13, 26.98], S: ["žveplo", 16, 32.07], Cl: ["klor", 17, 35.45], K: ["kalij", 19, 39.1],
  Ca: ["kalcij", 20, 40.08], Fe: ["železo", 26, 55.85], Cu: ["baker", 29, 63.55], Zn: ["cink", 30, 65.38],
};
// Najpogostejši izotop (masno število) za vaje o zgradbi atoma
const MASS_NUMBER = { H: 1, He: 4, Li: 7, C: 12, N: 14, O: 16, F: 19, Na: 23, Mg: 24, Al: 27, S: 32, Cl: 35, K: 39, Ca: 40, Fe: 56, Cu: 63, Zn: 65 };

const COMPOUNDS = [
  ["H2O", "vode", { H: 2, O: 1 }],
  ["CO2", "ogljikovega dioksida", { C: 1, O: 2 }],
  ["NaCl", "natrijevega klorida", { Na: 1, Cl: 1 }],
  ["CaCO3", "kalcijevega karbonata", { Ca: 1, C: 1, O: 3 }],
  ["H2SO4", "žveplove(VI) kisline", { H: 2, S: 1, O: 4 }],
  ["NaOH", "natrijevega hidroksida", { Na: 1, O: 1, H: 1 }],
  ["C6H12O6", "glukoze", { C: 6, H: 12, O: 6 }],
  ["NH3", "amonijaka", { N: 1, H: 3 }],
  ["MgO", "magnezijevega oksida", { Mg: 1, O: 1 }],
  ["CH4", "metana", { C: 1, H: 4 }],
];
const molar = (comp) => Object.entries(comp).reduce((s, [e, n]) => s + EL[e][2] * n, 0);
const formulaTex = (f) => f.replace(/(\d+)/g, "_{$1}");

// Enačbe z znanimi najmanjšimi koeficienti
const EQUATIONS = [
  { l: ["H2", "O2"], r: ["H2O"], c: [2, 1, 2], level: 1 },
  { l: ["Na", "Cl2"], r: ["NaCl"], c: [2, 1, 2], level: 1 },
  { l: ["Mg", "O2"], r: ["MgO"], c: [2, 1, 2], level: 1 },
  { l: ["N2", "H2"], r: ["NH3"], c: [1, 3, 2], level: 1 },
  { l: ["CH4", "O2"], r: ["CO2", "H2O"], c: [1, 2, 1, 2], level: 2 },
  { l: ["Al", "O2"], r: ["Al2O3"], c: [4, 3, 2], level: 2 },
  { l: ["Fe", "O2"], r: ["Fe2O3"], c: [4, 3, 2], level: 2 },
  { l: ["HCl", "NaOH"], r: ["NaCl", "H2O"], c: [1, 1, 1, 1], level: 1 },
  { l: ["C3H8", "O2"], r: ["CO2", "H2O"], c: [1, 5, 3, 4], level: 3 },
  { l: ["Zn", "HCl"], r: ["ZnCl2", "H2"], c: [1, 2, 1, 1], level: 2 },
  { l: ["C2H6", "O2"], r: ["CO2", "H2O"], c: [2, 7, 4, 6], level: 3 },
  { l: ["Al", "HCl"], r: ["AlCl3", "H2"], c: [2, 6, 2, 3], level: 3 },
  { l: ["CaCO3", "HCl"], r: ["CaCl2", "H2O", "CO2"], c: [1, 2, 1, 1, 1], level: 2 },
  { l: ["Fe2O3", "CO"], r: ["Fe", "CO2"], c: [1, 3, 2, 3], level: 3 },
];

export const KEM_GENERATORS = [
  {
    id: "zgradba-atoma",
    topics: ["KEM-OS-8/zgradba-atoma", "KEM-SS-1/zgradba-atoma"],
    gen(level, r) {
      const sym = r.pick(Object.keys(MASS_NUMBER));
      const [name, Z] = EL[sym];
      const A = MASS_NUMBER[sym];
      const ask = level === 1 ? r.pick(["p", "e"]) : r.pick(["n", "n", "e-ion"]);
      if (ask === "e-ion" && ["Na", "Mg", "Al", "K", "Ca", "F", "Cl", "O", "S"].includes(sym)) {
        const charge = { Na: 1, K: 1, Mg: 2, Ca: 2, Al: 3, F: -1, Cl: -1, O: -2, S: -2 }[sym];
        const ion = `\\mathrm{${sym}}^{${Math.abs(charge) === 1 ? "" : Math.abs(charge)}${charge > 0 ? "+" : "-"}}`;
        return {
          text: `Koliko elektronov ima ion $${ion}$? (Vrstno število elementa ${name} je ${Z}.)`,
          answer: { type: "number", value: Z - charge },
          hint: "Pozitiven ion je oddal elektrone, negativen jih je sprejel. Naboj pove, koliko.",
          solution: `$${Z} - (${charge}) = ${Z - charge}$ elektronov`,
        };
      }
      if (ask === "n" || ask === "e-ion") {
        return {
          text: `Atom elementa ${name} ($\\mathrm{^{${A}}_{${Z}}${sym}}$): koliko nevtronov ima v jedru?`,
          answer: { type: "number", value: A - Z },
          hint: "Masno število = protoni + nevtroni. Vrstno število = protoni.",
          solution: `$${A} - ${Z} = ${A - Z}$ nevtronov`,
        };
      }
      return {
        text: `Element ${name} ima vrstno število ${Z}. Koliko ${ask === "p" ? "protonov" : "elektronov"} ima nevtralen atom?`,
        answer: { type: "number", value: Z },
        hint: "Vrstno število pove število protonov. V nevtralnem atomu je elektronov enako kot protonov.",
        solution: `${Z}`,
      };
    },
  },
  {
    id: "urejanje-enacb",
    topics: ["KEM-OS-8/urejanje-kemijskih-enacb", "KEM-SS-1/urejanje-enacb", "KEM-OS-8/kemijska-reakcija"],
    gen(level, r) {
      const pool = EQUATIONS.filter((e) => e.level <= level && e.level >= level - 1);
      const eq = r.pick(pool.length ? pool : EQUATIONS);
      const side = (arr, off) => arr.map((f, i) => `\\square_{${off + i + 1}}\\,\\mathrm{${formulaTex(f)}}`).join(" + ");
      return {
        text: `Uredi enačbo. Vpiši koeficiente v kvadratkih po vrsti, ločene z vejico:\n\n$$${side(eq.l, 0)} \\rightarrow ${side(eq.r, eq.l.length)}$$`,
        answer: { type: "coefficients", values: eq.c },
        hint: "Preštej atome vsakega elementa na obeh straneh. Najprej uredi element, ki se pojavi v najmanj snoveh; kisik in vodik pogosto na koncu.",
        solution: `$$${eq.l.map((f, i) => `${eq.c[i] === 1 ? "" : eq.c[i]}\\,\\mathrm{${formulaTex(f)}}`).join(" + ")} \\rightarrow ${eq.r.map((f, i) => `${eq.c[eq.l.length + i] === 1 ? "" : eq.c[eq.l.length + i]}\\,\\mathrm{${formulaTex(f)}}`).join(" + ")}$$`,
        inputHint: `npr. ${eq.c.map(() => "1").join(", ")}`,
      };
    },
  },
  {
    id: "molska-masa",
    topics: ["KEM-OS-9/mnozina-snovi", "KEM-SS-1/mnozina-snovi", "KEM-OS-9/racunanje-z-mnozino-snovi", "KEM-SS-1/stehiometrija"],
    gen(level, r) {
      const [f, name, comp] = r.pick(level === 1 ? COMPOUNDS.slice(0, 4) : COMPOUNDS);
      const M = molar(comp);
      const atoms = Object.entries(comp).map(([e]) => `$A_r(\\mathrm{${e}}) = ${tx(EL[e][2])}$`).join(", ");
      if (level === 1) {
        return {
          text: `Izračunaj molsko maso ${name} ($\\mathrm{${formulaTex(f)}}$). Podatki: ${atoms}. Zaokroži na dve decimalki.`,
          answer: { type: "number", value: M, unit: "g/mol", decimals: 2, unitAlternatives: ["gmol-1", "g/mol"] },
          hint: "Seštej relativne atomske mase vseh atomov v formuli (upoštevaj indekse).",
          solution: `$M = ${tx(roundHalfUp(M, 2), 2)}\\ \\mathrm{g/mol}$`,
        };
      }
      if (level === 2) {
        const m = r.dec(1, 200, 1);
        return {
          text: `Koliko molov je $${tx(m)}\\ \\mathrm{g}$ ${name} ($\\mathrm{${formulaTex(f)}}$)? Podatki: ${atoms}. Zaokroži na tri decimalke.`,
          answer: { type: "number", value: m / M, unit: "mol", decimals: 3, alsoAccept: [m / roundHalfUp(M, 1), m / roundHalfUp(M, 2)] },
          hint: "Najprej izračunaj molsko maso $M$, nato $n = \\dfrac{m}{M}$.",
          solution: `$M = ${tx(roundHalfUp(M, 2), 2)}\\ \\mathrm{g/mol}$, $n = \\dfrac{${tx(m)}}{${tx(roundHalfUp(M, 2), 2)}} \\approx ${tx(roundHalfUp(m / M, 3), 3)}\\ \\mathrm{mol}$`,
        };
      }
      const n = r.dec(0.05, 5, 2);
      return {
        text: `Kolikšna je masa $${tx(n)}\\ \\mathrm{mol}$ ${name} ($\\mathrm{${formulaTex(f)}}$)? Podatki: ${atoms}. Zaokroži na dve decimalki.`,
        answer: { type: "number", value: n * M, unit: "g", decimals: 2, alsoAccept: [n * roundHalfUp(M, 1), n * roundHalfUp(M, 2)] },
        hint: "$m = n \\cdot M$",
        solution: `$m = ${tx(n)} \\cdot ${tx(roundHalfUp(M, 2), 2)} \\approx ${tx(roundHalfUp(n * M, 2), 2)}\\ \\mathrm{g}$`,
      };
    },
  },
  {
    id: "masni-delez",
    topics: ["KEM-OS-9/raztopine", "KEM-SS-1/raztopine"],
    gen(level, r) {
      if (level <= 2) {
        const ms = r.int(2, 60);
        const mw = r.int(50, 500);
        const w = (ms / (ms + mw)) * 100;
        return {
          text: `V $${mw}\\ \\mathrm{g}$ vode raztopimo $${ms}\\ \\mathrm{g}$ sladkorja. Kolikšen je masni delež sladkorja v raztopini v odstotkih? Zaokroži na eno decimalko.`,
          answer: { type: "number", value: w, unit: "%", decimals: 1 },
          hint: "$w = \\dfrac{m_{topljenca}}{m_{raztopine}}$. Masa raztopine je topljenec + voda!",
          solution: `$w = \\dfrac{${ms}}{${ms + mw}} \\cdot 100\\ \\% \\approx ${tx(roundHalfUp(w, 1), 1)}\\ \\%$`,
        };
      }
      const n = r.dec(0.01, 0.5, 2);
      const V = r.pick([100, 250, 500, 1000]);
      return {
        text: `V $${V}\\ \\mathrm{mL}$ raztopine je raztopljenih $${tx(n)}\\ \\mathrm{mol}$ NaCl. Kolikšna je množinska koncentracija v $\\mathrm{mol/L}$? Zaokroži na tri decimalke.`,
        answer: { type: "number", value: n / (V / 1000), unit: "mol/L", decimals: 3, unitAlternatives: ["mol/l", "m"] },
        hint: "$c = \\dfrac{n}{V}$. Prostornino pretvori v litre.",
        solution: `$c = \\dfrac{${tx(n)}}{${tx(V / 1000)}} = ${tx(roundHalfUp(n / (V / 1000), 3), 3)}\\ \\mathrm{mol/L}$`,
      };
    },
  },
  {
    id: "periodni-sistem",
    topics: ["KEM-OS-8/periodni-sistem", "KEM-SS-1/periodni-sistem", "KEM-OS-8/kovine", "KEM-OS-8/nekovine"],
    gen(level, r) {
      const groups = { Li: 1, Na: 1, K: 1, Mg: 2, Ca: 2, Al: 13, C: 14, N: 15, O: 16, S: 16, F: 17, Cl: 17, He: 18 };
      const sym = r.pick(Object.keys(groups));
      const [name] = EL[sym];
      if (level === 1) {
        const metal = ["Li", "Na", "K", "Mg", "Ca", "Al"].includes(sym);
        return {
          text: `Ali je ${name} ($\\mathrm{${sym}}$) kovina ali nekovina?`,
          answer: { type: "choice", options: ["kovina", "nekovina"], index: metal ? 0 : 1 },
          hint: "Kovine so v periodnem sistemu levo in na sredini, nekovine desno zgoraj.",
          solution: metal ? "Kovina." : "Nekovina.",
        };
      }
      const g = groups[sym];
      const valence = g <= 2 ? g : g - 10;
      return {
        text: `Koliko zunanjih (valenčnih) elektronov ima atom elementa ${name} ($\\mathrm{${sym}}$)?${level === 3 ? "" : ` Element je v ${g}. skupini.`}`,
        answer: { type: "number", value: sym === "He" ? 2 : valence },
        hint: "Pri glavnih skupinah število zunanjih elektronov preberemo iz številke skupine (1, 2 oziroma 13–18 minus 10).",
        solution: `${sym === "He" ? 2 : valence}`,
      };
    },
  },
  {
    id: "ph",
    topics: ["KEM-OS-8/ph-lestvica", "KEM-OS-8/kisline-in-baze", "KEM-SS-2/ph"],
    gen(level, r) {
      if (level <= 2) {
        const ph = r.int(0, 14);
        const label = ph < 7 ? "kisla" : ph === 7 ? "nevtralna" : "bazična";
        return {
          text: `Raztopina ima pH $${ph}$. Kakšna je?`,
          answer: { type: "choice", ...choices(r, label, ["kisla", "nevtralna", "bazična"]) },
          hint: "pH 7 je nevtralno. Manj kot 7 je kislo, več kot 7 bazično.",
          solution: `pH ${ph}: ${label}.`,
        };
      }
      const exp = r.int(1, 5);
      const mant = r.pick([1, 2, 5]);
      const c = mant * 10 ** -exp;
      return {
        text: `Kolikšen je pH raztopine močne kisline HCl s koncentracijo $${tx(mant)} \\cdot 10^{-${exp}}\\ \\mathrm{mol/L}$? Zaokroži na dve decimalki.`,
        answer: { type: "number", value: -Math.log10(c), decimals: 2 },
        hint: "Močna kislina popolnoma disociira: $[\\mathrm{H_3O^+}] = c$. pH $= -\\log [\\mathrm{H_3O^+}]$.",
        solution: `pH $= -\\log(${tx(c)}) \\approx ${tx(roundHalfUp(-Math.log10(c), 2), 2)}$`,
      };
    },
  },
];
