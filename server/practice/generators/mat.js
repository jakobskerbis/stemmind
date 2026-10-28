// Generatorji nalog za matematiko v OŠ (6.–9. razred).
// Vsak generator izračuna števila in pravilen odgovor v kodi.
import { NAMES, choices, g, nOf, verbOf } from "../rng.js";
import { fmt, gcd, roundHalfUp } from "../check.js";

// Število za LaTeX z decimalno vejico.
export const tx = (x, d = null) => fmt(x, d).replace(",", "{,}").replace("−", "-");
const frac = (n, d) => `\\frac{${n}}{${d}}`;

function reduce(n, d) {
  const g = gcd(n, d);
  const s = d < 0 ? -1 : 1;
  return [(s * n) / g, (s * d) / g];
}
const fracTex = (n, d) => (d === 1 ? `${n}` : n < 0 ? `-${frac(-n, d)}` : frac(n, d));

// Pomožne funkcije za rubriko »Podatki« (Podatki / Iščemo), formulo in račun v rešitvi (vse brez $).
// Enota za LaTeX: unitTex("cm²") → "\mathrm{cm^2}"; enota, ki se začne z \, ostane (npr. \text{€}).
const unitTex = (u) => (u.startsWith("\\") ? u : `\\mathrm{${u.replace("²", "^2").replace("³", "^3")}}`);
// Količina z enoto: qty("2{,}5", "cm") → "2{,}5\ \mathrm{cm}".
const qty = (val, unit) => `${val}\\ ${unitTex(unit)}`;
// Vrstica podatka: dat("a", tx(a), "cm") → "a = 5\ \mathrm{cm}". Vrednost mora biti zapisana enako kot v besedilu.
const dat = (sym, val, unit) => `${sym} = ${unit ? qty(val, unit) : val}`;
// Rezultat: "= 4{,}5\ \mathrm{cm}" oz. "\approx 4{,}51\ \mathrm{cm}", kadar ga je bilo treba zaokrožiti na d decimalk.
const needsRounding = (x, d) => Math.abs(x - roundHalfUp(x, d)) > 1e-9;
const res = (x, d, unit) => `${needsRounding(x, d) ? "\\approx" : "="} ${qty(tx(x, d), unit)}`;
// Zaokrožena vrednost za natančnim rezultatom: " \approx 10{,}81\ \mathrm{cm^2}" ali prazen niz, če zaokroževanje ni potrebno.
const rnd = (x, d, unit) => (needsRounding(x, d) ? ` \\approx ${qty(tx(x, d), unit)}` : "");
// Negativno število v oklepaju: par(-3) → "(-3)".
const par = (x) => (x < 0 ? `(${x})` : `${x}`);
const EUR = "\\text{€}";
const PCT = "\\%";
const P_FORMULA = "P = \\dfrac{\\text{ugodni izidi}}{\\text{vsi izidi}}";

// Razcep na prafaktorje: primeFactors(12) → [2, 2, 3].
function primeFactors(n) {
  const out = [];
  for (let p = 2; p * p <= n; p++) {
    while (n % p === 0) {
      out.push(p);
      n /= p;
    }
  }
  if (n > 1) out.push(n);
  return out;
}

export const MAT_GENERATORS = [
  // ---------------------------------------------------------------- 6. razred
  {
    id: "deljivost",
    topics: ["MAT-OS-6/deljivost"],
    gen(level, r) {
      const k = r.pick(level === 1 ? [2, 5, 10] : level === 2 ? [3, 9, 5] : [3, 4, 6, 9]);
      const digits = level === 1 ? 3 : level === 2 ? 4 : 5;
      let n = r.int(10 ** (digits - 1), 10 ** digits - 1);
      if (r.next() < 0.5) n -= n % k; // pol nalog je deljivih
      if (n < 10 ** (digits - 1)) n += k;
      const yes = n % k === 0;
      const c = { options: ["Da", "Ne"], index: yes ? 0 : 1 };
      // Preverjanje pravila deljivosti, kot ga zapiše učenec.
      const stevke = String(n).split("").map(Number);
      const last = n % 10;
      const sum = stevke.reduce((s, x) => s + x, 0);
      const sumTex = `$${stevke.join(" + ")} = ${sum}$`;
      const parity = last % 2 === 0 ? "soda" : "liha";
      const je = (ok) => (ok ? "je" : "ni");
      const rule = {
        2: `Zadnja števka je $${last}$, ki je ${parity}.`,
        5: `Zadnja števka je $${last}$${last === 0 || last === 5 ? ", torej 0 ali 5" : ", ne 0 in ne 5"}.`,
        10: `Zadnja števka je $${last}$${last === 0 ? "" : ", ne 0"}.`,
        3: `Vsota števk: ${sumTex}; $${sum}$ ${je(sum % 3 === 0)} deljivo s 3.`,
        9: `Vsota števk: ${sumTex}; $${sum}$ ${je(sum % 9 === 0)} deljivo z 9.`,
        4: `Zadnji dve števki: $${n % 100}$; $${n % 100}$ ${je(n % 4 === 0)} deljivo s 4.`,
        6: `Zadnja števka $${last}$ je ${parity}; vsota števk ${sumTex} ${je(sum % 3 === 0)} deljiva s 3.`,
      }[k];
      const q = Math.floor(n / k);
      const rem = n % k;
      return {
        text: `Ali je število $${n}$ deljivo s $${k}$?`,
        answer: { type: "choice", ...c },
        hint: {
          2: "Poglej zadnjo števko: biti mora soda.",
          5: "Poglej zadnjo števko: biti mora 0 ali 5.",
          10: "Poglej zadnjo števko: biti mora 0.",
          3: "Seštej vse števke. Je vsota deljiva s 3?",
          9: "Seštej vse števke. Je vsota deljiva z 9?",
          4: "Poglej zadnji dve števki. Je dvomestno število, ki ga tvorita, deljivo s 4?",
          6: "Število je deljivo s 6, če je deljivo z 2 in s 3 hkrati.",
        }[k],
        data: false,
        formula: false,
        solution: `${rule}\n${yes ? "Da" : "Ne"}: $${n} : ${k} = ${q}$${rem ? `, ostanek $${rem}$` : ""}.`,
      };
    },
  },
  {
    id: "decimalna-racunanje",
    topics: ["MAT-OS-6/racunanje-z-decimalnimi-stevili", "MAT-OS-6/desetiski-ulomki-in-decimalna-stevila"],
    gen(level, r) {
      const op = level === 1 ? r.pick(["+", "-"]) : level === 2 ? r.pick(["+", "-", "·"]) : r.pick(["·", ":"]);
      let a = r.dec(1, level === 3 ? 50 : 100, r.int(1, 2));
      let b = r.dec(0.1, level === 1 ? 50 : 10, level === 3 ? 1 : r.int(1, 2));
      let result;
      if (op === "+") result = a + b;
      if (op === "-") {
        if (b > a) [a, b] = [b, a];
        result = a - b;
      }
      if (op === "·") result = a * b;
      if (op === ":") {
        // deljenje z rezultatom na največ 2 decimalki
        result = r.dec(1, 30, r.int(0, 2));
        b = r.dec(0.2, 9, 1);
        a = Math.round(result * b * 1000) / 1000;
      }
      result = Math.round(result * 1e6) / 1e6;
      const opTex = op === ":" ? ":" : op === "·" ? "\\cdot" : op;
      const calc = `$${tx(a)} ${opTex} ${tx(b)} = ${tx(result)}$`;
      // Število decimalk v zapisu.
      const decs = (x) => (fmt(x).split(",")[1] || "").length;
      let solution = calc;
      if (op === "·" && decs(a) + decs(b) > 0) {
        const da = decs(a);
        const db = decs(b);
        const ai = Math.round(a * 10 ** da);
        const bi = Math.round(b * 10 ** db);
        solution = `Zmnožimo brez vejic: $${ai} \\cdot ${bi} = ${ai * bi}$. Faktorja imata skupaj ${nOf(da + db, "decimalko", "decimalki", "decimalke", "decimalk")}, zato jih ima toliko tudi rezultat:\n${calc}`;
      }
      if (op === ":" && decs(b) > 0) {
        const f = 10 ** decs(b);
        solution = `Vejico v obeh številih premaknemo za ${nOf(decs(b), "mesto", "mesti", "mesta", "mest")} v desno, da je delitelj celo število:\n$${tx(a)} : ${tx(b)} = ${tx(a * f)} : ${tx(b * f)} = ${tx(result)}$`;
      }
      return {
        text: `Izračunaj: $${tx(a)} ${opTex} ${tx(b)}$`,
        answer: { type: "number", value: result },
        hint:
          op === "+" || op === "-"
            ? "Podpiši števili tako, da je decimalna vejica pod decimalno vejico."
            : op === "·"
              ? "Zmnoži, kot da vejic ni, nato v rezultatu odšteješ toliko decimalk, kolikor jih imata faktorja skupaj."
              : "Delitelj naredi celo število: vejico v obeh številih premakni za enako mest v desno.",
        data: false,
        formula: false,
        solution,
      };
    },
  },
  {
    id: "merske-enote",
    topics: ["MAT-OS-6/merske-enote", "FIZ-OS-8/fizikalne-kolicine-in-enote", "FIZ-SS-1/fizikalne-kolicine-in-enote"],
    gen(level, r) {
      // sym: oznaka količine v rubriki Podatki (d dolžina, m masa, p ploščina, V prostornina, t čas).
      const sets = [
        { units: ["mm", "cm", "dm", "m"], f: 10, sym: "d" },
        { units: ["g", "dag", "kg"], f: 0, custom: { g: 1, dag: 10, kg: 1000 }, sym: "m" },
        { units: ["m", "km"], f: 0, custom: { m: 1, km: 1000 }, sym: "d" },
        { units: ["mm²", "cm²", "dm²", "m²"], f: 100, sym: "p" },
        { units: ["cm³", "dm³", "m³"], f: 1000, sym: "V" },
        { units: ["ml", "dl", "l"], f: 0, custom: { ml: 1, dl: 100, l: 1000 }, sym: "V" },
        { units: ["s", "min", "h"], f: 0, custom: { s: 1, min: 60, h: 3600 }, sym: "t" },
      ];
      const pool = level === 1 ? sets.slice(0, 3) : level === 2 ? sets.slice(0, 6) : sets.slice(3);
      const s = r.pick(pool);
      const factor = (u) => (s.custom ? s.custom[u] : s.f ** s.units.indexOf(u));
      let [from, to] = r.shuffle(s.units).slice(0, 2);
      let value = level === 1 ? r.int(1, 90) : r.dec(0.5, 90, r.int(0, 2));
      if (s.units[0] === "s") {
        // Čas: pretvorbe s faktorjem 60 naj dajo lep rezultat.
        const ratio = factor(from) / factor(to);
        value = ratio >= 1 ? r.pick([0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10, 12]) : r.pick([0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 6, 8]) / ratio;
      }
      const result = Math.round(((value * factor(from)) / factor(to)) * 1e9) / 1e9;
      // Zveza med enotama: 1 večja enota = k manjših; v manjšo enoto množimo, v večjo delimo.
      const ratio = factor(from) / factor(to);
      const toSmaller = ratio >= 1;
      const k = Math.round(toSmaller ? ratio : 1 / ratio);
      const relation = `1\\ ${unitTex(toSmaller ? from : to)} = ${k}\\ ${unitTex(toSmaller ? to : from)}`;
      return {
        text: `Pretvori: $${tx(value)}\\ ${unitTex(from)} = \\ ?\\ ${unitTex(to)}$`,
        answer: { type: "number", value: result, unit: to },
        hint: s.f
          ? `Med sosednjima enotama je faktor ${s.f}. Koliko korakov je od ${from} do ${to}?`
          : `Pomisli, koliko ${s.units[0]} je v 1 ${s.units[s.units.length - 1]}.`,
        data: { given: [dat(s.sym, tx(value), from)], find: [`${s.sym}\\ (\\text{v}\\ ${unitTex(to)})`] },
        formula: relation,
        solution: `$${relation}$\n$${qty(tx(value), from)} = ${tx(value)} ${toSmaller ? "\\cdot" : ":"} ${k}\\ ${unitTex(to)} = ${qty(tx(result), to)}$`,
      };
    },
  },
  {
    id: "pravokotnik",
    topics: ["MAT-OS-6/obseg-in-ploscina-pravokotnika-in-kvadrata"],
    gen(level, r) {
      const u = r.pick(["cm", "dm", "m"]);
      const u2 = `${u}²`;
      const a = level === 1 ? r.int(2, 20) : r.dec(1.5, 30, 1);
      const b = level === 1 ? r.int(2, 20) : r.dec(1.5, 30, 1);
      const kind = level === 3 ? "inverse" : r.pick(["o", "p"]);
      const name = r.pick(NAMES);
      if (kind === "inverse") {
        const p = Math.round(a * b * 100) / 100;
        return {
          text: `${name} ima vrt v obliki pravokotnika s ploščino $${tx(p)}\\ \\mathrm{${u}^2}$. Ena stranica meri $${tx(a)}\\ \\mathrm{${u}}$. Koliko meri druga stranica?`,
          answer: { type: "number", value: b, unit: u, tolerance: 1e-6 },
          hint: "Ploščina je produkt stranic: $p = a \\cdot b$. Kako iz tega izraziš $b$?",
          data: { given: [dat("p", tx(p), u2), dat("a", tx(a), u)], find: ["b"] },
          formula: ["p = a \\cdot b", "b = \\dfrac{p}{a}"],
          solution: `$b = \\dfrac{p}{a} = \\dfrac{${qty(tx(p), u2)}}{${qty(tx(a), u)}} = ${qty(tx(b), u)}$`,
        };
      }
      const o = Math.round(2 * (a + b) * 100) / 100;
      const p = Math.round(a * b * 100) / 100;
      const given = [dat("a", tx(a), u), dat("b", tx(b), u)];
      return kind === "o"
        ? {
            text: `Pravokotnik ima stranici $a = ${tx(a)}\\ \\mathrm{${u}}$ in $b = ${tx(b)}\\ \\mathrm{${u}}$. Izračunaj njegov obseg.`,
            answer: { type: "number", value: o, unit: u },
            hint: "Obseg je vsota dolžin vseh štirih stranic.",
            data: { given, find: ["o"] },
            formula: "o = 2a + 2b",
            solution: `$o = 2a + 2b = 2 \\cdot ${qty(tx(a), u)} + 2 \\cdot ${qty(tx(b), u)} = ${qty(tx(2 * a), u)} + ${qty(tx(2 * b), u)} = ${qty(tx(o), u)}$`,
          }
        : {
            text: `Pravokotnik ima stranici $a = ${tx(a)}\\ \\mathrm{${u}}$ in $b = ${tx(b)}\\ \\mathrm{${u}}$. Izračunaj njegovo ploščino.`,
            answer: { type: "number", value: p, unit: u2 },
            hint: "Ploščina pravokotnika je $p = a \\cdot b$. Pazi na enoto.",
            data: { given, find: ["p"] },
            formula: "p = a \\cdot b",
            solution: `$p = a \\cdot b = ${qty(tx(a), u)} \\cdot ${qty(tx(b), u)} = ${qty(tx(p), u2)}$`,
          };
    },
  },

  // ---------------------------------------------------------------- 7. razred
  {
    id: "nsd-nsv",
    topics: ["MAT-OS-7/najvecji-skupni-delitelj-in-najmanjsi-skupni-veckratnik", "MAT-OS-7/prastevila-in-razcep"],
    gen(level, r) {
      const base = r.pick(level === 1 ? [2, 3, 4, 5] : [4, 6, 8, 9, 12, 15]);
      const a = base * r.int(2, level === 3 ? 12 : 7);
      let b = base * r.int(2, level === 3 ? 12 : 7);
      if (b === a) b += base;
      const g = gcd(a, b);
      const lcm = (a * b) / g;
      const askGcd = r.next() < 0.5;
      // Razcep na prafaktorje: skupni prafaktorji dajo D, vsi (z največjimi potencami) pa v.
      const fa = primeFactors(a);
      const fb = primeFactors(b);
      const common = [];
      const rest = [...fb];
      for (const p of fa) {
        const i = rest.indexOf(p);
        if (i >= 0) {
          common.push(p);
          rest.splice(i, 1);
        }
      }
      const all = [...fa, ...rest].sort((x, y) => x - y);
      const prod = (xs) => (xs.length > 1 ? `${xs.join(" \\cdot ")} = ` : "");
      const razcep = `$${a} = ${fa.join(" \\cdot ")}$\n$${b} = ${fb.join(" \\cdot ")}$`;
      return {
        text: askGcd ? `Poišči največji skupni delitelj: $D(${a}, ${b})$` : `Poišči najmanjši skupni večkratnik: $v(${a}, ${b})$`,
        answer: { type: "number", value: askGcd ? g : lcm },
        hint: "Obe števili razcepi na prafaktorje. Za D vzameš skupne prafaktorje, za v pa vse prafaktorje z največjimi potencami.",
        data: false,
        formula: askGcd ? false : "v(a, b) = \\dfrac{a \\cdot b}{D(a, b)}",
        solution: askGcd
          ? `${razcep}\nSkupni prafaktorji: $D(${a}, ${b}) = ${prod(common)}${g}$`
          : `${razcep}\nVsi prafaktorji z največjimi potencami: $v(${a}, ${b}) = ${prod(all)}${lcm}$\nPreizkus: $v(${a}, ${b}) = \\dfrac{${a} \\cdot ${b}}{D(${a}, ${b})} = \\dfrac{${a * b}}{${g}} = ${lcm}$`,
      };
    },
  },
  {
    id: "ulomki-racunanje",
    topics: [
      "MAT-OS-7/sestevanje-in-odstevanje-ulomkov",
      "MAT-OS-7/mnozenje-in-deljenje-ulomkov",
      "MAT-OS-7/razsirjanje-in-krajsanje-ulomkov",
    ],
    gen(level, r) {
      const d1 = r.int(2, level === 1 ? 6 : 10);
      const d2 = level === 1 ? d1 : r.int(2, 10);
      let n1 = r.int(1, d1 * (level === 3 ? 2 : 1));
      let n2 = r.int(1, d2);
      if (n1 === d1) n1 = n1 > 1 ? n1 - 1 : n1 + 1;
      if (n2 === d2) n2 = n2 > 1 ? n2 - 1 : n2 + 1;
      const op = level === 1 ? r.pick(["+", "-"]) : r.pick(["+", "-", "·", ":"]);
      let n, d;
      if (op === "+") [n, d] = [n1 * d2 + n2 * d1, d1 * d2];
      if (op === "-") [n, d] = [n1 * d2 - n2 * d1, d1 * d2];
      if (op === "·") [n, d] = [n1 * n2, d1 * d2];
      if (op === ":") [n, d] = [n1 * d2, d1 * n2];
      [n, d] = reduce(n, d);
      const opTex = { "+": "+", "-": "-", "·": "\\cdot", ":": ":" }[op];
      // Koraki: ulomek pred krajšanjem izpustimo, če je že okrajšan.
      const raw = (rn, rd) => (rn === n && rd === d ? null : frac(rn, rd));
      let steps, formula;
      if (op === "+" || op === "-") {
        const L = (d1 * d2) / gcd(d1, d2); // skupni imenovalec
        const e1 = n1 * (L / d1);
        const e2 = n2 * (L / d2);
        const sum = op === "+" ? e1 + e2 : e1 - e2;
        steps = [d1 === d2 ? null : `${frac(e1, L)} ${opTex} ${frac(e2, L)}`, `\\frac{${e1} ${opTex} ${e2}}{${L}}`, raw(sum, L)];
        formula = `\\frac{a}{n} ${opTex} \\frac{b}{n} = \\frac{a ${opTex} b}{n}`;
      } else if (op === "·") {
        steps = [`\\frac{${n1} \\cdot ${n2}}{${d1} \\cdot ${d2}}`, raw(n1 * n2, d1 * d2)];
        formula = "\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}";
      } else {
        steps = [`${frac(n1, d1)} \\cdot ${frac(d2, n2)}`, `\\frac{${n1} \\cdot ${d2}}{${d1} \\cdot ${n2}}`, raw(n1 * d2, d1 * n2)];
        formula = "\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}";
      }
      return {
        text: `Izračunaj in rezultat okrajšaj: $${frac(n1, d1)} ${opTex} ${frac(n2, d2)}$`,
        answer: { type: "fraction", num: n, den: d },
        hint:
          op === "+" || op === "-"
            ? "Ulomka najprej razširi na skupni imenovalec, nato seštej oz. odštej števca."
            : op === "·"
              ? "Števec pomnožiš s števcem, imenovalec z imenovalcem. Lahko prej krajšaš navzkriž."
              : "Deliš tako, da pomnožiš z obratno vrednostjo drugega ulomka.",
        data: false,
        formula,
        solution: `$${[`${frac(n1, d1)} ${opTex} ${frac(n2, d2)}`, ...steps.filter(Boolean), fracTex(n, d)].join(" = ")}$`,
        inputHint: "npr. 3/4, -1/2 ali 1 1/3",
      };
    },
  },
  {
    id: "odstotki",
    topics: ["MAT-OS-7/odstotni-racun"],
    gen(level, r) {
      const name = r.pick(NAMES);
      const kind = level === 1 ? "del" : level === 2 ? r.pick(["del", "popust"]) : r.pick(["popust", "osnova", "odstotek"]);
      const p = r.pick(level === 1 ? [10, 20, 25, 50] : [5, 12, 15, 20, 25, 30, 35, 40]);
      const base = level === 1 ? r.int(2, 20) * 10 : r.dec(8, 250, r.int(0, 2));
      const part = Math.round(base * p) / 100;
      const pDat = dat("p", `${p}`, PCT);
      const cDat = dat("c", tx(base), EUR);
      const partFormula = "d = \\dfrac{p}{100} \\cdot c";
      if (kind === "del")
        return {
          text: `Koliko je $${p}\\ \\%$ od $${tx(base)}$ €?`,
          answer: { type: "number", value: part, unit: "€", decimals: 2, unitAlternatives: ["eur", "evrov"] },
          hint: "Odstotek pretvori v decimalno število (npr. 20 % = 0,20) in ga pomnoži z osnovo.",
          data: { given: [pDat, cDat], find: ["d"] },
          formula: partFormula,
          solution: `$d = \\dfrac{p}{100} \\cdot c = \\dfrac{${p}}{100} \\cdot ${qty(tx(base), EUR)} = ${tx(p / 100)} \\cdot ${qty(tx(base), EUR)} = ${qty(tx(part), EUR)}$`,
        };
      if (kind === "popust") {
        const price = Math.round((base - part) * 100) / 100;
        const rounded = needsRounding((base * p) / 100, 2); // popust je zaokrožen na cente
        return {
          text: `${name} kupi jakno, ki stane $${tx(base)}$ €. V trgovini imajo $${p}\\ \\%$ popusta. Koliko plača? Rezultat zaokroži na cente.`,
          answer: { type: "number", value: base * (1 - p / 100), unit: "€", decimals: 2, unitAlternatives: ["eur", "evrov"] },
          hint: "Po popustu plača $(100 - p)\\ \\%$ prvotne cene.",
          data: { given: [cDat, pDat], find: ["c_{\\text{nova}}"] },
          formula: [partFormula, "c_{\\text{nova}} = c - d"],
          solution: `$d = \\dfrac{${p}}{100} \\cdot ${qty(tx(base), EUR)} = ${tx(p / 100)} \\cdot ${qty(tx(base), EUR)} ${rounded ? "\\approx" : "="} ${qty(tx(part, 2), EUR)}$\n$c_{\\text{nova}} = c - d = ${qty(tx(base), EUR)} - ${qty(tx(part, 2), EUR)} ${rounded ? "\\approx" : "="} ${qty(tx(price, 2), EUR)}$`,
        };
      }
      if (kind === "osnova") {
        return {
          text: `$${p}\\ \\%$ učencev šole je šlo na izlet, to je $${Math.round(p * 4)}$ učencev. Koliko učencev ima šola?`,
          answer: { type: "number", value: 400 },
          hint: "Najprej izračunaj, koliko učencev je 1 %.",
          data: { given: [pDat, `d = ${p * 4}`], find: ["c"] },
          formula: "c = \\dfrac{d}{p} \\cdot 100",
          solution: `$1\\ \\%$ učencev: $${p * 4} : ${p} = 4$\n$c = \\dfrac{d}{p} \\cdot 100 = \\dfrac{${p * 4}}{${p}} \\cdot 100 = 4 \\cdot 100 = 400$ učencev`,
        };
      }
      const total = r.pick([20, 25, 40, 50, 80]);
      const got = r.int(1, total - 1);
      const pct = (got / total) * 100;
      return {
        text: `Na testu je bilo $${total}$ točk. ${name} je ${g(name, "dosegel", "dosegla")} $${got}$ točk. Koliko odstotkov je to? Zaokroži na eno decimalko.`,
        answer: { type: "number", value: pct, decimals: 1, unit: "%", unitAlternatives: ["odstotkov"] },
        hint: "Delež = del : celota. Delež pomnoži s 100 %.",
        data: { given: [dat("c", `${total}`, "\\text{točk}"), dat("d", `${got}`, "\\text{točk}")], find: ["p"] },
        formula: "p = \\dfrac{d}{c} \\cdot 100\\ \\%",
        solution: `$p = \\dfrac{d}{c} \\cdot 100\\ \\% = \\dfrac{${got}}{${total}} \\cdot 100\\ \\% = ${tx(got / total)} \\cdot 100\\ \\% ${res(pct, 1, PCT)}$`,
      };
    },
  },
  {
    id: "premo-sorazmerje",
    topics: ["MAT-OS-7/premo-sorazmerje", "MAT-OS-7/obratno-sorazmerje", "MAT-OS-6/sklepni-racun"],
    gen(level, r) {
      const name = r.pick(NAMES);
      if (level === 3 || (level === 2 && r.next() < 0.4)) {
        const workers = r.int(2, 6);
        const days = r.int(3, 12) * (r.next() < 0.5 ? 2 : 1);
        const workers2 = r.pick([2, 3, 4, 5, 6, 8].filter((w) => w !== workers));
        const v = (workers * days) / workers2;
        const DNI = "\\text{dni}";
        return {
          text: `${nOf(workers, "delavec", "delavca", "delavci", "delavcev")} šolo ${verbOf(workers, "prepleska", "prepleskata", "prepleskajo")} v ${days} dneh. V koliko dneh bi jo ${verbOf(workers2, "prepleskal", "prepleskala", "prepleskali", "prepleskalo")} ${nOf(workers2, "delavec", "delavca", "delavci", "delavcev")}, če delajo enako hitro? Zaokroži na eno decimalko.`,
          answer: { type: "number", value: v, decimals: 1, unit: "dni", unitAlternatives: ["dan", "dneh", "dnevi", "d"] },
          hint: "Več delavcev, manj dni: to je obratno sorazmerje. Produkt delavci · dnevi ostane enak.",
          data: { given: [`n_1 = ${workers}`, dat("t_1", `${days}`, DNI), `n_2 = ${workers2}`], find: ["t_2"] },
          formula: ["n_1 \\cdot t_1 = n_2 \\cdot t_2", "t_2 = \\dfrac{n_1 \\cdot t_1}{n_2}"],
          solution: `$n_1 \\cdot t_1 = n_2 \\cdot t_2$\n$${workers} \\cdot ${qty(days, DNI)} = ${workers2} \\cdot t_2$\n$t_2 = \\dfrac{${workers} \\cdot ${qty(days, DNI)}}{${workers2}} = \\dfrac{${qty(workers * days, DNI)}}{${workers2}} ${res(v, 1, DNI)}$`,
        };
      }
      const kg = r.int(2, 6);
      const price = r.dec(0.4, 4, 2);
      const kg2 = r.int(7, 15);
      const total = Math.round(kg * price * 100) / 100;
      const total2 = (total / kg) * kg2;
      return {
        text: `${name} je za ${kg} kg jabolk ${g(name, "plačal", "plačala")} $${tx(total, 2)}$ €. Koliko bi ${g(name, "plačal", "plačala")} za ${kg2} kg?`,
        answer: { type: "number", value: total2, decimals: 2, unit: "€", unitAlternatives: ["eur", "evrov"] },
        hint: "Najprej izračunaj ceno za 1 kg.",
        data: { given: [dat("m_1", `${kg}`, "kg"), dat("c_1", tx(total, 2), EUR), dat("m_2", `${kg2}`, "kg")], find: ["c_2"] },
        formula: ["\\dfrac{c_1}{m_1} = \\dfrac{c_2}{m_2}", "c_2 = \\dfrac{c_1}{m_1} \\cdot m_2"],
        solution: `Cena za $1\\ \\mathrm{kg}$: $${qty(tx(total, 2), EUR)} : ${kg} = ${qty(tx(total / kg, 2), EUR)}$\n$c_2 = \\dfrac{c_1}{m_1} \\cdot m_2 = ${qty(tx(total / kg, 2), EUR)} \\cdot ${kg2} = ${qty(tx(total2, 2), EUR)}$`,
      };
    },
  },
  {
    id: "koti-trikotnika",
    topics: ["MAT-OS-7/vrste-trikotnikov-in-notranji-koti", "MAT-OS-7/vrste-kotov-in-pari-kotov"],
    gen(level, r) {
      const deg = (x) => `${x}^\\circ`;
      const SUM = "\\alpha + \\beta + \\gamma = 180^\\circ";
      if (level === 1) {
        const a = r.int(20, 100);
        const b = r.int(20, 160 - a);
        return {
          text: `V trikotniku merita kota $\\alpha = ${a}^\\circ$ in $\\beta = ${b}^\\circ$. Koliko meri kot $\\gamma$?`,
          answer: { type: "number", value: 180 - a - b, unit: "°", unitAlternatives: ["stopinj", "stopinje"] },
          hint: "Vsota notranjih kotov trikotnika je $180^\\circ$.",
          data: { given: [`\\alpha = ${deg(a)}`, `\\beta = ${deg(b)}`], find: ["\\gamma"] },
          formula: [SUM, "\\gamma = 180^\\circ - \\alpha - \\beta"],
          solution: `$\\gamma = 180^\\circ - \\alpha - \\beta = 180^\\circ - ${deg(a)} - ${deg(b)} = ${deg(180 - a - b)}$`,
        };
      }
      if (level === 2) {
        const top = r.int(20, 140);
        const base = (180 - top) / 2;
        return {
          text: `Enakokraki trikotnik ima kot ob vrhu $\\gamma = ${top}^\\circ$. Koliko meri kot ob osnovnici? Zaokroži na eno decimalko.`,
          answer: { type: "number", value: base, decimals: 1, unit: "°", unitAlternatives: ["stopinj", "stopinje"] },
          hint: "Kota ob osnovnici enakokrakega trikotnika sta enaka.",
          data: { given: [`\\gamma = ${deg(top)}`], find: ["\\alpha"] },
          formula: [SUM, "\\alpha = \\beta = \\dfrac{180^\\circ - \\gamma}{2}"],
          solution: `$\\alpha = \\dfrac{180^\\circ - \\gamma}{2} = \\dfrac{180^\\circ - ${deg(top)}}{2} = \\dfrac{${deg(180 - top)}}{2} = ${deg(tx(base))}$`,
        };
      }
      const a = r.int(30, 80);
      const b = r.int(30, 80);
      return {
        text: `V trikotniku merita notranja kota $\\alpha = ${a}^\\circ$ in $\\beta = ${b}^\\circ$. Koliko meri zunanji kot $\\gamma'$ ob oglišču $C$?`,
        answer: { type: "number", value: a + b, unit: "°", unitAlternatives: ["stopinj", "stopinje"] },
        hint: "Zunanji kot je sokot notranjega kota. Lahko pa uporabiš, da je enak vsoti nepriležnih notranjih kotov.",
        data: { given: [`\\alpha = ${deg(a)}`, `\\beta = ${deg(b)}`], find: ["\\gamma'"] },
        formula: ["\\gamma' = \\alpha + \\beta", "\\gamma' = 180^\\circ - \\gamma"],
        solution: `$\\gamma' = \\alpha + \\beta = ${deg(a)} + ${deg(b)} = ${deg(a + b)}$`,
      };
    },
  },
  {
    id: "ploscina-trikotnika",
    topics: ["MAT-OS-7/obseg-in-ploscina-trikotnika", "MAT-OS-7/obseg-in-ploscina-stirikotnikov"],
    gen(level, r) {
      const u = r.pick(["cm", "m"]);
      const u2 = `${u}²`;
      if (level <= 2) {
        const a = level === 1 ? r.int(2, 20) : r.dec(2, 20, 1);
        const v = level === 1 ? r.int(2, 20) : r.dec(2, 20, 1);
        const p = (a * v) / 2;
        return {
          text: `Trikotnik ima stranico $a = ${tx(a)}\\ \\mathrm{${u}}$ in pripadajočo višino $v_a = ${tx(v)}\\ \\mathrm{${u}}$. Izračunaj ploščino.`,
          answer: { type: "number", value: p, decimals: level === 1 ? null : 2, unit: u2 },
          hint: "Ploščina trikotnika je $p = \\dfrac{a \\cdot v_a}{2}$.",
          data: { given: [dat("a", tx(a), u), dat("v_a", tx(v), u)], find: ["p"] },
          formula: "p = \\dfrac{a \\cdot v_a}{2}",
          solution: `$p = \\dfrac{a \\cdot v_a}{2} = \\dfrac{${qty(tx(a), u)} \\cdot ${qty(tx(v), u)}}{2} = \\dfrac{${qty(tx(a * v), u2)}}{2} = ${qty(tx(p), u2)}${level === 1 ? "" : rnd(p, 2, u2)}$`,
        };
      }
      const a = r.int(6, 20);
      const c = r.int(2, a - 2);
      const v = r.int(3, 12);
      const p = ((a + c) * v) / 2;
      return {
        text: `Trapez ima osnovnici $a = ${a}\\ \\mathrm{${u}}$ in $c = ${c}\\ \\mathrm{${u}}$ ter višino $v = ${v}\\ \\mathrm{${u}}$. Izračunaj ploščino.`,
        answer: { type: "number", value: p, unit: u2 },
        hint: "Ploščina trapeza je $p = \\dfrac{(a + c) \\cdot v}{2}$.",
        data: { given: [dat("a", `${a}`, u), dat("c", `${c}`, u), dat("v", `${v}`, u)], find: ["p"] },
        formula: "p = \\dfrac{(a + c) \\cdot v}{2}",
        solution: `$p = \\dfrac{(a + c) \\cdot v}{2} = \\dfrac{(${qty(a, u)} + ${qty(c, u)}) \\cdot ${qty(v, u)}}{2} = \\dfrac{${qty(a + c, u)} \\cdot ${qty(v, u)}}{2} = \\dfrac{${qty((a + c) * v, u2)}}{2} = ${qty(tx(p), u2)}$`,
      };
    },
  },

  // ---------------------------------------------------------------- 8. razred
  {
    id: "cela-stevila",
    topics: ["MAT-OS-8/racunanje-s-celimi-stevili", "MAT-OS-8/cela-stevila", "MAT-OS-8/racionalna-stevila"],
    gen(level, r) {
      const a = r.nonZero(-20, 20);
      const b = r.nonZero(-20, 20);
      const c = r.nonZero(-10, 10);
      const p = (x) => (x < 0 ? `(${x})` : `${x}`);
      let text, value, step;
      if (level === 1) {
        const op = r.pick(["+", "-"]);
        value = op === "+" ? a + b : a - b;
        text = `${a} ${op} ${p(b)}`;
        // Prištevanje/odštevanje negativnega števila zapišemo z nasprotnim številom.
        if (b < 0) step = `${a} ${op === "+" ? "-" : "+"} ${-b}`;
      } else if (level === 2) {
        const op = r.pick(["\\cdot", ":"]);
        if (op === ":") {
          value = a;
          text = `${p(a * b)} : ${p(b)}`;
        } else {
          value = a * b;
          text = `${p(a)} \\cdot ${p(b)}`;
        }
      } else {
        value = a - b * c;
        text = `${a} - ${p(b)} \\cdot ${p(c)}`;
        step = `${a} - ${p(b * c)}`;
        if (b * c < 0) step += ` = ${a} + ${-b * c}`;
      }
      return {
        text: `Izračunaj: $${text}$`,
        answer: { type: "number", value },
        hint:
          level === 3
            ? "Najprej množi, nato odštevaj. Pazi na predznake: minus krat minus je plus."
            : "Pri odštevanju negativnega števila prišteješ nasprotno število. Pri množenju: enaka predznaka dasta plus, različna minus.",
        data: false,
        formula: false,
        solution: `$${text} = ${step ? `${step} = ` : ""}${value}$`,
      };
    },
  },
  {
    id: "potence",
    topics: ["MAT-OS-8/potence-z-naravnimi-eksponenti", "MAT-OS-8/zapis-z-desetiskimi-potencami"],
    gen(level, r) {
      if (level === 1) {
        const b = r.int(2, 6);
        const e = r.int(2, 4);
        return {
          text: `Izračunaj: $${b}^${e}$`,
          answer: { type: "number", value: b ** e },
          hint: `$${b}^${e}$ pomeni, da ${b} pomnožiš samo s sabo ${e}-krat.`,
          data: false,
          formula: "a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n\\text{-krat}}",
          solution: `$${b}^${e} = ${Array(e).fill(b).join(" \\cdot ")} = ${b ** e}$`,
        };
      }
      if (level === 2) {
        const b = r.pick(["a", "x", "2"]);
        const m = r.int(2, 7);
        const n = r.int(2, 7);
        const op = r.pick(["\\cdot", ":"]);
        const res = op === ":" ? m - n : m + n;
        if (op === ":" && m <= n) return this.gen(2, r);
        const c = choices(r, `${b}^{${res}}`, [`${b}^{${m * n}}`, `${b}^{${op === ":" ? m + n : Math.abs(m - n) || 1}}`, `${b}^{${res + 1}}`]);
        return {
          text: `Poenostavi: $${b}^{${m}} ${op} ${b}^{${n}}$`,
          answer: { type: "choice", ...c },
          options_tex: true,
          hint: op === ":" ? "Pri deljenju potenc z enako osnovo eksponente odštejemo." : "Pri množenju potenc z enako osnovo eksponente seštejemo.",
          data: false,
          formula: op === ":" ? "a^m : a^n = a^{m - n}" : "a^m \\cdot a^n = a^{m + n}",
          solution: `$${b}^{${m}} ${op} ${b}^{${n}} = ${b}^{${m} ${op === ":" ? "-" : "+"} ${n}} = ${b}^{${res}}$`,
        };
      }
      const mant = r.dec(1.1, 9.9, 1);
      const e = r.int(3, 7);
      const neg = r.next() < 0.5;
      const val = mant * 10 ** (neg ? -e : e);
      const shown = neg ? val.toFixed(e + 1).replace(".", ",") : String(Math.round(val));
      return {
        text: `Število $${shown.replace(",", "{,}")}$ zapiši v obliki $a \\cdot 10^n$, kjer je $1 \\le a < 10$. Koliko je $n$?`,
        answer: { type: "number", value: neg ? -e : e },
        hint: "Za koliko mest moraš premakniti decimalno vejico, da dobiš število med 1 in 10? V katero smer?",
        data: false,
        formula: false,
        solution: `Vejico premaknemo za ${nOf(e, "mesto", "mesti", "mesta", "mest")} v ${neg ? "desno" : "levo"}, da dobimo $${tx(mant)}$:\n$${shown.replace(",", "{,}")} = ${tx(mant)} \\cdot 10^{${neg ? -e : e}}$, torej $n = ${neg ? -e : e}$.`,
      };
    },
  },
  {
    id: "kvadratni-koren",
    topics: ["MAT-OS-8/kvadratni-koren", "MAT-OS-8/kvadrat-stevila", "MAT-OS-8/realna-stevila"],
    gen(level, r) {
      if (level === 1) {
        const n = r.int(2, 20);
        const sq = r.next() < 0.5;
        return {
          text: sq ? `Izračunaj: $${n}^2$` : `Izračunaj: $\\sqrt{${n * n}}$`,
          answer: { type: "number", value: sq ? n * n : n },
          hint: sq ? "Število pomnoži samo s sabo." : "Katero število, pomnoženo samo s sabo, da to število?",
          data: false,
          formula: sq ? "a^2 = a \\cdot a" : "\\sqrt{a^2} = a",
          solution: sq ? `$${n}^2 = ${n} \\cdot ${n} = ${n * n}$` : `$\\sqrt{${n * n}} = \\sqrt{${n}^2} = ${n}$, ker je $${n} \\cdot ${n} = ${n * n}$.`,
        };
      }
      if (level === 2) {
        const n = r.int(2, 99);
        const val = Math.sqrt(n);
        if (Number.isInteger(val)) return this.gen(2, r);
        const lo = Math.floor(val);
        return {
          text: `Med katerima zaporednima naravnima številoma leži $\\sqrt{${n}}$? Vpiši manjše.`,
          answer: { type: "number", value: lo },
          hint: "Poišči najbližja popolna kvadrata pod in nad tem številom.",
          data: false,
          formula: "a^2 < n < (a + 1)^2 \\;\\Rightarrow\\; a < \\sqrt{n} < a + 1",
          solution: `$${lo}^2 = ${lo ** 2}$ in $${lo + 1}^2 = ${(lo + 1) ** 2}$\n$${lo ** 2} < ${n} < ${(lo + 1) ** 2}$, zato $${lo} < \\sqrt{${n}} < ${lo + 1}$.`,
        };
      }
      const k = r.pick([2, 3, 5, 6, 7]);
      const s = r.int(2, 6);
      return {
        text: `Delno koreni: $\\sqrt{${s * s * k}} = a\\sqrt{${k}}$. Koliko je $a$?`,
        answer: { type: "number", value: s },
        hint: `Število pod korenom zapiši kot produkt popolnega kvadrata in ${k}.`,
        data: false,
        formula: "\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}",
        solution: `$\\sqrt{${s * s * k}} = \\sqrt{${s * s} \\cdot ${k}} = \\sqrt{${s * s}} \\cdot \\sqrt{${k}} = ${s}\\sqrt{${k}}$`,
      };
    },
  },
  {
    id: "pitagora",
    topics: ["MAT-OS-8/pitagorov-izrek", "MAT-OS-8/uporaba-pitagorovega-izreka"],
    gen(level, r) {
      const u = r.pick(["cm", "dm", "m"]);
      const u2 = `${u}²`;
      const triples = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15], [7, 24, 25]];
      // Račun hipotenuze (ali diagonale) z enotami: sqrt((a u)^2 + (b u)^2) = sqrt(a² u² + b² u²) = sqrt(s u²).
      const sumSq = (a, b) => `\\sqrt{(${qty(a, u)})^2 + (${qty(b, u)})^2} = \\sqrt{${qty(a * a, u2)} + ${qty(b * b, u2)}} = \\sqrt{${qty(a * a + b * b, u2)}}`;
      if (level === 1) {
        const [a, b, c] = r.pick(triples);
        return {
          text: `Pravokotni trikotnik ima kateti $a = ${a}\\ \\mathrm{${u}}$ in $b = ${b}\\ \\mathrm{${u}}$. Izračunaj hipotenuzo $c$.`,
          answer: { type: "number", value: c, unit: u },
          hint: "Pitagorov izrek: $c^2 = a^2 + b^2$.",
          data: { given: [dat("a", `${a}`, u), dat("b", `${b}`, u)], find: ["c"] },
          formula: ["c^2 = a^2 + b^2", "c = \\sqrt{a^2 + b^2}"],
          solution: `$c = \\sqrt{a^2 + b^2} = ${sumSq(a, b)} = ${qty(c, u)}$`,
        };
      }
      if (level === 2) {
        const a = r.int(2, 15);
        const b = r.int(2, 15);
        const c = Math.sqrt(a * a + b * b);
        if (Number.isInteger(c)) return this.gen(2, r);
        return {
          text: `Pravokotni trikotnik ima kateti $a = ${a}\\ \\mathrm{${u}}$ in $b = ${b}\\ \\mathrm{${u}}$. Izračunaj hipotenuzo in jo zaokroži na dve decimalki.`,
          answer: { type: "number", value: c, unit: u, decimals: 2 },
          hint: "Pitagorov izrek: $c^2 = a^2 + b^2$. Zaokroži šele na koncu.",
          data: { given: [dat("a", `${a}`, u), dat("b", `${b}`, u)], find: ["c"] },
          formula: ["c^2 = a^2 + b^2", "c = \\sqrt{a^2 + b^2}"],
          solution: `$c = \\sqrt{a^2 + b^2} = ${sumSq(a, b)} ${res(c, 2, u)}$`,
        };
      }
      const kind = r.pick(["kateta", "diagonala"]);
      if (kind === "kateta") {
        const c = r.int(8, 25);
        const a = r.int(3, c - 2);
        const b = Math.sqrt(c * c - a * a);
        return {
          text: `Lestev dolžine $${c}\\ \\mathrm{dm}$ je naslonjena na steno. Spodnji konec je $${a}\\ \\mathrm{dm}$ od stene. Kako visoko na steni sega lestev? Zaokroži na dve decimalki.`,
          answer: { type: "number", value: b, unit: "dm", decimals: 2 },
          hint: "Lestev je hipotenuza. Kateto izračunaš s $b^2 = c^2 - a^2$.",
          data: { given: [dat("c", `${c}`, "dm"), dat("a", `${a}`, "dm")], find: ["b"] },
          formula: ["c^2 = a^2 + b^2", "b = \\sqrt{c^2 - a^2}"],
          solution: `$b = \\sqrt{c^2 - a^2} = \\sqrt{(${qty(c, "dm")})^2 - (${qty(a, "dm")})^2} = \\sqrt{${qty(c * c, "dm²")} - ${qty(a * a, "dm²")}} = \\sqrt{${qty(c * c - a * a, "dm²")}} ${res(b, 2, "dm")}$`,
        };
      }
      const a = r.int(3, 20);
      const b = r.int(3, 20);
      const d = Math.sqrt(a * a + b * b);
      return {
        text: `Pravokotnik ima stranici $${a}\\ \\mathrm{${u}}$ in $${b}\\ \\mathrm{${u}}$. Izračunaj dolžino diagonale in jo zaokroži na dve decimalki.`,
        answer: { type: "number", value: d, unit: u, decimals: 2 },
        hint: "Diagonala razdeli pravokotnik na dva pravokotna trikotnika.",
        data: { given: [dat("a", `${a}`, u), dat("b", `${b}`, u)], find: ["d"] },
        formula: ["d^2 = a^2 + b^2", "d = \\sqrt{a^2 + b^2}"],
        solution: `$d = \\sqrt{a^2 + b^2} = ${sumSq(a, b)} ${res(d, 2, u)}$`,
      };
    },
  },
  {
    id: "linearne-enacbe",
    topics: [
      "MAT-OS-8/linearne-enacbe",
      "MAT-OS-9/linearne-enacbe-z-ulomki",
      "MAT-OS-6/preproste-enacbe",
      "MAT-SS-1/linearne-enacbe",
    ],
    gen(level, r) {
      const x = r.int(-9, 12);
      const a = r.nonZero(level === 1 ? 2 : -9, 9);
      const b = r.int(-20, 20);
      const sign = (v) => (v < 0 ? `- ${-v}` : v === 0 ? "" : `+ ${v}`);
      const cx = (v) => (v === 1 ? "x" : v === -1 ? "-x" : `${v}x`);
      // Člen z x s predznakom: sgx(-3) → "- 3x", sgx(1) → "+ x".
      const sgx = (v) => (v < 0 ? `- ${cx(-v)}` : `+ ${cx(v)}`);
      // Podatek je enačba sama; rešitev so vrstice postopka. Pri b = 0 ostanejo odvečni presledki
      // in enaki zaporedni koraki, zato jih počistimo.
      const tidy = (s) => s.replace(/\s+/g, " ").replace(/ \$/g, "$");
      const steps = (eq, lines) => ({
        data: { given: [tidy(eq)], find: ["x"] },
        solution: [`$${eq}$`, ...lines.filter(Boolean)]
          .map(tidy)
          .filter((l, i, arr) => l !== arr[i - 1])
          .join("\n"),
      });
      if (level === 1) {
        const ax = Math.abs(a);
        const c = ax * x + b;
        const eq = `${ax}x ${sign(b)} = ${c}`;
        return {
          text: `Reši enačbo: $${eq}$`,
          answer: { type: "number", value: x },
          hint: "Najprej osami člen z $x$ (prenesi število na drugo stran), nato deli s koeficientom.",
          formula: false,
          ...steps(eq, [b !== 0 && `$${ax}x = ${c} ${sign(-b)}$`, `$${ax}x = ${c - b}$`, `$x = ${c - b} : ${ax} = ${x}$`]),
        };
      }
      if (level === 2) {
        const c = r.nonZero(-9, 9);
        const d = a * x + b - c * x;
        if (a === c) return this.gen(2, r);
        const eq = `${cx(a)} ${sign(b)} = ${cx(c)} ${sign(d)}`;
        return {
          text: `Reši enačbo: $${eq}$`,
          answer: { type: "number", value: x },
          hint: "Člene z $x$ zberi na levi, števila na desni strani enačbe.",
          formula: false,
          ...steps(eq, [`$${cx(a)} ${sgx(-c)} = ${d} ${sign(-b)}$`, `$${cx(a - c)} = ${d - b}$`, a - c !== 1 && `$x = \\dfrac{${d - b}}{${a - c}} = ${x}$`]),
        };
      }
      // z oklepaji ali ulomkom
      const k = r.int(2, 5);
      const m = r.int(2, 6);
      const rhs = (x + m) / k;
      if (Number.isInteger(rhs)) {
        const eq = `\\dfrac{x ${sign(m)}}{${k}} = ${rhs}`;
        return {
          text: `Reši enačbo: $${eq}$`,
          answer: { type: "number", value: x },
          hint: "Enačbo pomnoži z imenovalcem, da se znebiš ulomka.",
          formula: "\\dfrac{a}{b} = c \\;\\Rightarrow\\; a = c \\cdot b",
          ...steps(eq, [`$x ${sign(m)} = ${par(rhs)} \\cdot ${k}$`, `$x ${sign(m)} = ${rhs * k}$`, `$x = ${rhs * k} - ${m} = ${x}$`]),
        };
      }
      const c = k * (x - m) + b;
      const eq = `${k}(x - ${m}) ${sign(b)} = ${c}`;
      return {
        text: `Reši enačbo: $${eq}$`,
        answer: { type: "number", value: x },
        hint: "Najprej odpravi oklepaj (vsak člen v oklepaju pomnoži s številom pred njim).",
        formula: "a(b - c) = ab - ac",
        ...steps(eq, [
          `$${k}x - ${k * m} ${sign(b)} = ${c}$`,
          `$${k}x = ${c} + ${k * m} ${sign(-b)}$`,
          `$${k}x = ${c + k * m - b}$`,
          `$x = ${c + k * m - b} : ${k} = ${x}$`,
        ]),
      };
    },
  },
  {
    id: "izrazi",
    topics: ["MAT-OS-8/algebrski-izrazi", "MAT-OS-8/mnozenje-izrazov", "MAT-OS-8/razstavljanje"],
    gen(level, r) {
      if (level === 1) {
        const a = r.int(2, 9);
        const b = r.int(-9, 9);
        const x = r.int(-5, 6);
        const expr = `${a}x ${b < 0 ? "-" : "+"} ${Math.abs(b)}`;
        return {
          text: `Izračunaj vrednost izraza $${expr}$ za $x = ${x}$.`,
          answer: { type: "number", value: a * x + b },
          hint: "Namesto $x$ vstavi število (v oklepaju, če je negativno).",
          data: { given: [`x = ${x}`], find: [expr] },
          formula: false,
          solution: `$${expr} = ${a} \\cdot ${par(x)} ${b < 0 ? "-" : "+"} ${Math.abs(b)} = ${a * x} ${b < 0 ? "-" : "+"} ${Math.abs(b)} = ${a * x + b}$`,
        };
      }
      const p = r.int(1, 7);
      let q = r.nonZero(-7, 7);
      if (q === -p) q = -q; // da člen z x ne izgine
      const qs = q < 0 ? `- ${-q}` : `+ ${q}`;
      // Zapis polinoma a x^2 + b x + c brez "1x", "+ -3" in ničelnih členov.
      const poly = (a2, b, c) => {
        const parts = [];
        if (a2) parts.push(a2 === 1 ? "x^2" : `${a2}x^2`);
        if (b) parts.push(`${b < 0 ? "- " : parts.length ? "+ " : ""}${Math.abs(b) === 1 ? "" : Math.abs(b)}x`);
        if (c) parts.push(`${c < 0 ? "- " : parts.length ? "+ " : ""}${Math.abs(c)}`);
        return parts.join(" ") || "0";
      };
      if (level === 2) {
        const right = poly(1, p + q, p * q);
        const c = choices(r, right, [poly(1, 0, p * q), poly(1, p - q, p * q), poly(0, 2, p + q)]);
        // Vsak člen z vsakim: x·x + x·q + p·x + p·q.
        const xq = `${q < 0 ? "-" : "+"} ${Math.abs(q) === 1 ? "" : Math.abs(q)}x`;
        const px = `+ ${p === 1 ? "" : p}x`;
        const pq = `${p * q < 0 ? "-" : "+"} ${Math.abs(p * q)}`;
        return {
          text: `Zmnoži: $(x + ${p})(x ${qs})$`,
          answer: { type: "choice", ...c },
          options_tex: true,
          hint: "Vsak člen prvega oklepaja pomnoži z vsakim členom drugega, nato seštej podobne člene.",
          data: false,
          formula: "(a + b)(c + d) = ac + ad + bc + bd",
          solution: `$(x + ${p})(x ${qs}) = x^2 ${xq} ${px} ${pq} = ${right}$`,
        };
      }
      const k = r.int(2, 9);
      const m = r.int(2, 9);
      const n = r.nonZero(-9, 9);
      const sg = k * n < 0 ? "-" : "+";
      return {
        text: `Izpostavi skupni faktor: $${k * m}x ${sg} ${Math.abs(k * n)} = ${k}(\\,${m}x + \\square\\,)$. Katero število je v kvadratku?`,
        answer: { type: "number", value: n },
        hint: `Vsak člen deli s ${k}.`,
        data: false,
        formula: "ab + ac = a(b + c)",
        solution: `$${k * m}x ${sg} ${Math.abs(k * n)} = ${k} \\cdot ${m}x ${sg} ${k} \\cdot ${Math.abs(n)} = ${k}(${m}x ${sg} ${Math.abs(n)})$`,
      };
    },
  },
  {
    id: "krog",
    topics: ["MAT-OS-8/obseg-in-ploscina-kroga", "MAT-OS-8/krozni-lok-in-krozni-izsek"],
    gen(level, r) {
      const u = r.pick(["cm", "m"]);
      const u2 = `${u}²`;
      const rad = level === 1 ? r.int(2, 15) : r.dec(1.5, 20, 1);
      const piNote = "Uporabi $\\pi \\approx 3{,}14$ ali tipko $\\pi$ na računalu.";
      const rDat = dat("r", tx(rad), u);
      if (level === 3) {
        const alpha = r.pick([30, 45, 60, 72, 90, 120, 135, 150]);
        const l = (Math.PI * rad * alpha) / 180;
        return {
          text: `Krožni lok s središčnim kotom $${alpha}^\\circ$ leži na krožnici s polmerom $${tx(rad)}\\ \\mathrm{${u}}$. Izračunaj dolžino loka. Zaokroži na dve decimalki. ${piNote}`,
          answer: { type: "number", value: l, alsoAccept: [(3.14 * rad * alpha) / 180], unit: u, decimals: 2 },
          hint: "Lok je tak del obsega, kot je kot $\\alpha$ del $360^\\circ$: $l = \\dfrac{\\pi r \\alpha}{180^\\circ}$.",
          data: { given: [`\\alpha = ${alpha}^\\circ`, rDat], find: ["l"] },
          formula: "l = \\dfrac{\\pi r \\alpha}{180^\\circ}",
          solution: `$l = \\dfrac{\\pi r \\alpha}{180^\\circ} = \\dfrac{\\pi \\cdot ${qty(tx(rad), u)} \\cdot ${alpha}^\\circ}{180^\\circ} \\approx ${qty(tx(l, 2), u)}$`,
        };
      }
      const area = r.next() < 0.5;
      const v = area ? Math.PI * rad * rad : 2 * Math.PI * rad;
      const v314 = area ? 3.14 * rad * rad : 2 * 3.14 * rad;
      return {
        text: `Krog ima polmer $r = ${tx(rad)}\\ \\mathrm{${u}}$. Izračunaj ${area ? "njegovo ploščino" : "njegov obseg"}. Zaokroži na dve decimalki. ${piNote}`,
        answer: { type: "number", value: v, alsoAccept: [v314], unit: area ? u2 : u, decimals: 2 },
        hint: area ? "Ploščina kroga: $p = \\pi r^2$." : "Obseg kroga: $o = 2\\pi r$.",
        data: { given: [rDat], find: [area ? "p" : "o"] },
        formula: area ? "p = \\pi r^2" : "o = 2 \\pi r",
        solution: area
          ? `$p = \\pi r^2 = \\pi \\cdot (${qty(tx(rad), u)})^2 = \\pi \\cdot ${qty(tx(rad * rad), u2)} \\approx ${qty(tx(v, 2), u2)}$`
          : `$o = 2 \\pi r = 2 \\cdot \\pi \\cdot ${qty(tx(rad), u)} \\approx ${qty(tx(v, 2), u)}$`,
      };
    },
  },

  // ---------------------------------------------------------------- 9. razred
  {
    id: "linearna-funkcija",
    topics: [
      "MAT-OS-9/linearna-funkcija",
      "MAT-OS-9/graf-linearne-funkcije",
      "MAT-OS-9/premica-v-ravnini",
      "MAT-SS-1/linearna-funkcija",
    ],
    gen(level, r) {
      const k = r.nonZero(-4, 4);
      const n = r.int(-5, 5);
      const f = (x) => k * x + n;
      const fx = `${k === 1 ? "" : k === -1 ? "-" : k}x ${n < 0 ? "-" : "+"} ${Math.abs(n)}`;
      if (level === 1) {
        const x = r.int(-4, 5);
        const kx = k === 1 ? par(x) : k === -1 ? `-${par(x)}` : `${k} \\cdot ${par(x)}`;
        const pn = `${n < 0 ? "-" : "+"} ${Math.abs(n)}`;
        // Vstavljeno število → zmnožek → vrednost; enake zaporedne korake (npr. pri k = 1) izpustimo.
        const chain = [`f(${x})`, `${kx} ${pn}`, `${k * x} ${pn}`, `${f(x)}`].filter((s, i, arr) => s !== arr[i - 1]);
        return {
          text: `Dana je funkcija $f(x) = ${fx}$. Izračunaj $f(${x})$.`,
          answer: { type: "number", value: f(x) },
          hint: "Namesto $x$ vstavi dano število.",
          data: { given: [`f(x) = ${fx}`, `x = ${x}`], find: [`f(${x})`] },
          formula: "f(x) = kx + n",
          solution: `$${chain.join(" = ")}$`,
        };
      }
      if (level === 2) {
        // branje grafa
        const x0 = r.int(-3, 3);
        return {
          text: `Na sliki je graf linearne funkcije. Koliko je smerni koeficient $k$?`,
          figure: { type: "line", k, n },
          answer: { type: "number", value: k },
          hint: "Poišči dve točki na premici z celimi koordinatami. Za koliko se spremeni $y$, ko se $x$ poveča za 1?",
          data: false,
          formula: "k = \\dfrac{\\Delta y}{\\Delta x}",
          solution: `Premica gre skozi $(${x0}, ${f(x0)})$ in $(${x0 + 1}, ${f(x0 + 1)})$: ko se $x$ poveča za $1$, se $y$ spremeni za $${k}$.\n$k = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{${f(x0 + 1)} - ${par(f(x0))}}{${x0 + 1} - ${par(x0)}} = \\dfrac{${k}}{1} = ${k}$`,
        };
      }
      const x1 = r.int(-4, 2);
      const x2 = x1 + r.int(1, 4);
      const kk = r.nonZero(-3, 3);
      const nn = r.int(-5, 5);
      const y1 = kk * x1 + nn;
      const y2 = kk * x2 + nn;
      return {
        text: `Premica gre skozi točki $A(${x1}, ${y1})$ in $B(${x2}, ${y2})$. Izračunaj začetno vrednost $n$.`,
        answer: { type: "number", value: nn },
        hint: "Najprej izračunaj $k = \\dfrac{y_2 - y_1}{x_2 - x_1}$, nato v $y = kx + n$ vstavi eno točko.",
        data: { given: [`x_1 = ${x1}`, `y_1 = ${y1}`, `x_2 = ${x2}`, `y_2 = ${y2}`], find: ["n"] },
        formula: ["k = \\dfrac{y_2 - y_1}{x_2 - x_1}", "y = kx + n \\;\\Rightarrow\\; n = y_1 - k \\cdot x_1"],
        solution: `$k = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{${y2} - ${par(y1)}}{${x2} - ${par(x1)}} = \\dfrac{${y2 - y1}}{${x2 - x1}} = ${kk}$\n$n = y_1 - k \\cdot x_1 = ${y1} - ${par(kk)} \\cdot ${par(x1)} = ${y1} ${kk * x1 < 0 ? `+ ${-kk * x1}` : `- ${kk * x1}`} = ${nn}$`,
      };
    },
  },
  {
    id: "neenacbe",
    topics: ["MAT-OS-9/linearne-neenacbe", "MAT-SS-1/linearne-neenacbe", "MAT-OS-6/preproste-neenacbe"],
    gen(level, r) {
      if (level === 2 && r.int(0, 1) === 1) {
        // Branje rešitve s številske premice
        const x0 = r.int(-4, 6);
        const op = r.pick(["<", ">", "\\le", "\\ge"]);
        const strict = { "<": "\\le", ">": "\\ge", "\\le": "<", "\\ge": ">" }[op];
        const flip = { "<": ">", ">": "<", "\\le": "\\ge", "\\ge": "\\le" }[op];
        const right = `x ${op} ${x0}`;
        const c = choices(r, right, [`x ${strict} ${x0}`, `x ${flip} ${x0}`, `x ${op} ${x0 + 1}`]);
        const closed = op.includes("le") || op.includes("ge");
        return {
          text: "Na številski premici je prikazana rešitev neenačbe. Katera je?",
          figure: { type: "numberline", x0, dir: op === "<" || op === "\\le" ? -1 : 1, closed },
          answer: { type: "choice", ...c },
          options_tex: true,
          hint: "Poln krožec pomeni, da število spada zraven ($\\le$ ali $\\ge$), prazen pa, da ne ($<$ ali $>$). Pobarvani del kaže, katera števila so rešitev.",
          data: false,
          formula: false,
          solution: `Krožec pri $${x0}$ je ${closed ? "poln" : "prazen"}, pobarvano je ${op === "<" || op === "\\le" ? "levo" : "desno"}: $${right}$.`,
        };
      }
      const a = level === 3 ? r.nonZero(-6, -2) : r.int(2, 6);
      const x0 = r.int(-6, 8);
      const b = r.int(-10, 10);
      const c = a * x0 + b;
      const ineq = r.pick(["<", ">", "\\le", "\\ge"]);
      const flip = a < 0;
      const resultOp = flip ? { "<": ">", ">": "<", "\\le": "\\ge", "\\ge": "\\le" }[ineq] : ineq;
      const right = `x ${resultOp} ${x0}`;
      const wrong = `x ${{ "<": ">", ">": "<", "\\le": "\\ge", "\\ge": "\\le" }[resultOp]} ${x0}`;
      const c2 = choices(r, right, [wrong, `x ${resultOp} ${-x0 || 1}`, `x ${resultOp} ${c}`]);
      const bs = `${b < 0 ? "-" : "+"} ${Math.abs(b)}`;
      return {
        text: `Reši neenačbo: $${a}x ${bs} ${ineq} ${c}$`,
        answer: { type: "choice", ...c2 },
        options_tex: true,
        hint: flip
          ? "Rešuješ kot enačbo. Ko deliš z negativnim številom, se znak neenakosti obrne!"
          : "Rešuješ kot enačbo: osami člen z $x$ in deli s koeficientom.",
        data: false,
        formula: flip ? "a \\cdot x < b \\;\\Rightarrow\\; x > \\dfrac{b}{a} \\quad (a < 0)" : "a \\cdot x < b \\;\\Rightarrow\\; x < \\dfrac{b}{a} \\quad (a > 0)",
        solution: [
          `$${a}x ${bs} ${ineq} ${c}$`,
          b !== 0 && `$${a}x ${ineq} ${c} ${b < 0 ? "+" : "-"} ${Math.abs(b)}$`,
          `$${a}x ${ineq} ${c - b}$`,
          `$x ${resultOp} \\dfrac{${c - b}}{${a}}$${flip ? " (delimo z negativnim številom, zato se znak obrne)" : ""}`,
          `$${right}$`,
        ]
          .filter(Boolean)
          .join("\n"),
      };
    },
  },
  {
    id: "telesa",
    topics: ["MAT-OS-9/prizma", "MAT-OS-9/valj", "MAT-OS-9/piramida", "MAT-OS-9/stozec", "MAT-OS-9/krogla", "MAT-SS-3/povrsina-in-prostornina-teles"],
    gen(level, r, topicId = "") {
      const u = r.pick(["cm", "dm", "m"]);
      const u3 = `${u}³`;
      const which = topicId.includes("valj")
        ? "valj"
        : topicId.includes("piramida")
          ? "piramida"
          : topicId.includes("stozec")
            ? "stozec"
            : topicId.includes("krogla")
              ? "krogla"
              : topicId.includes("prizma")
                ? "kvader"
                : r.pick(["kvader", "valj", "piramida", "stozec", "krogla"]);
      const a = level === 1 ? r.int(2, 12) : r.dec(1.5, 12, 1);
      const b = level === 1 ? r.int(2, 12) : r.dec(1.5, 12, 1);
      const h = level === 1 ? r.int(2, 15) : r.dec(2, 15, 1);
      const piNote = "Zaokroži na dve decimalki. Uporabi tipko $\\pi$ ali $\\pi \\approx 3{,}14$.";
      const A = qty(tx(a), u);
      const H = qty(tx(h), u);
      const V = ({ text, value, v314 = null, hint, given, formula, solution }) => ({
        text,
        answer: { type: "number", value, alsoAccept: v314 ? [v314] : [], unit: u3, decimals: 2 },
        hint,
        data: { given, find: ["V"] },
        formula,
        solution,
      });
      if (which === "kvader")
        return V({
          text: `Kvader ima robove $a = ${tx(a)}\\ \\mathrm{${u}}$, $b = ${tx(b)}\\ \\mathrm{${u}}$ in $c = ${tx(h)}\\ \\mathrm{${u}}$. Izračunaj prostornino. Zaokroži na dve decimalki.`,
          value: a * b * h,
          hint: "Prostornina prizme je ploščina osnovne ploskve krat višina: $V = a \\cdot b \\cdot c$.",
          given: [dat("a", tx(a), u), dat("b", tx(b), u), dat("c", tx(h), u)],
          formula: "V = a \\cdot b \\cdot c",
          solution: `$V = a \\cdot b \\cdot c = ${A} \\cdot ${qty(tx(b), u)} \\cdot ${H} ${res(a * b * h, 2, u3)}$`,
        });
      if (which === "valj")
        return V({
          text: `Valj ima polmer osnovne ploskve $r = ${tx(a)}\\ \\mathrm{${u}}$ in višino $v = ${tx(h)}\\ \\mathrm{${u}}$. Izračunaj prostornino. ${piNote}`,
          value: Math.PI * a * a * h,
          v314: 3.14 * a * a * h,
          hint: "$V = \\pi r^2 v$",
          given: [dat("r", tx(a), u), dat("v", tx(h), u)],
          formula: "V = \\pi r^2 v",
          solution: `$V = \\pi r^2 v = \\pi \\cdot (${A})^2 \\cdot ${H} \\approx ${qty(tx(Math.PI * a * a * h, 2), u3)}$`,
        });
      if (which === "piramida")
        return V({
          text: `Pravilna štiristrana piramida ima osnovni rob $a = ${tx(a)}\\ \\mathrm{${u}}$ in višino $v = ${tx(h)}\\ \\mathrm{${u}}$. Izračunaj prostornino. Zaokroži na dve decimalki.`,
          value: (a * a * h) / 3,
          hint: "Prostornina piramide je tretjina produkta ploščine osnovne ploskve in višine: $V = \\dfrac{a^2 v}{3}$.",
          given: [dat("a", tx(a), u), dat("v", tx(h), u)],
          formula: "V = \\dfrac{a^2 \\cdot v}{3}",
          solution: `$V = \\dfrac{a^2 \\cdot v}{3} = \\dfrac{(${A})^2 \\cdot ${H}}{3} ${res((a * a * h) / 3, 2, u3)}$`,
        });
      if (which === "stozec")
        return V({
          text: `Stožec ima polmer osnovne ploskve $r = ${tx(a)}\\ \\mathrm{${u}}$ in višino $v = ${tx(h)}\\ \\mathrm{${u}}$. Izračunaj prostornino. ${piNote}`,
          value: (Math.PI * a * a * h) / 3,
          v314: (3.14 * a * a * h) / 3,
          hint: "$V = \\dfrac{\\pi r^2 v}{3}$",
          given: [dat("r", tx(a), u), dat("v", tx(h), u)],
          formula: "V = \\dfrac{\\pi r^2 v}{3}",
          solution: `$V = \\dfrac{\\pi r^2 v}{3} = \\dfrac{\\pi \\cdot (${A})^2 \\cdot ${H}}{3} \\approx ${qty(tx((Math.PI * a * a * h) / 3, 2), u3)}$`,
        });
      return V({
        text: `Krogla ima polmer $r = ${tx(a)}\\ \\mathrm{${u}}$. Izračunaj prostornino. ${piNote}`,
        value: (4 * Math.PI * a ** 3) / 3,
        v314: (4 * 3.14 * a ** 3) / 3,
        hint: "$V = \\dfrac{4\\pi r^3}{3}$",
        given: [dat("r", tx(a), u)],
        formula: "V = \\dfrac{4 \\pi r^3}{3}",
        solution: `$V = \\dfrac{4 \\pi r^3}{3} = \\dfrac{4 \\cdot \\pi \\cdot (${A})^3}{3} \\approx ${qty(tx((4 * Math.PI * a ** 3) / 3, 2), u3)}$`,
      });
    },
  },
  {
    id: "podobnost",
    topics: ["MAT-OS-9/podobni-trikotniki", "MAT-OS-9/talesov-izrek", "MAT-SS-2/podobnost"],
    gen(level, r) {
      const k = level === 1 ? r.int(2, 4) : r.pick([1.5, 2.5, 3, 1.2]);
      const a = r.int(2, 12);
      const b = r.int(2, 12);
      if (level === 3) {
        const h = r.dec(1.2, 2, 2);
        const s = r.dec(1, 4, 1);
        const S = r.dec(5, 30, 1);
        const H = (h * S) / s;
        return {
          text: `${r.pick(NAMES)} je visok $${tx(h)}\\ \\mathrm{m}$ in meče senco dolžine $${tx(s)}\\ \\mathrm{m}$. Drevo hkrati meče senco dolžine $${tx(S)}\\ \\mathrm{m}$. Kako visoko je drevo? Zaokroži na dve decimalki.`,
          answer: { type: "number", value: H, unit: "m", decimals: 2 },
          hint: "Sončni žarki so vzporedni, zato sta trikotnika (oseba–senca in drevo–senca) podobna.",
          data: { given: [dat("h_1", tx(h), "m"), dat("s_1", tx(s), "m"), dat("s_2", tx(S), "m")], find: ["h_2"] },
          formula: ["\\dfrac{h_2}{s_2} = \\dfrac{h_1}{s_1}", "h_2 = \\dfrac{h_1 \\cdot s_2}{s_1}"],
          solution: `$\\dfrac{h_2}{s_2} = \\dfrac{h_1}{s_1}$\n$h_2 = \\dfrac{h_1 \\cdot s_2}{s_1} = \\dfrac{${qty(tx(h), "m")} \\cdot ${qty(tx(S), "m")}}{${qty(tx(s), "m")}} ${res(H, 2, "m")}$`,
        };
      }
      return {
        text: `Trikotnika sta podobna z razmerjem podobnosti $k = ${tx(k)}$. Stranica manjšega trikotnika meri $${a}\\ \\mathrm{cm}$. Koliko meri istoležna stranica večjega trikotnika?`,
        answer: { type: "number", value: a * k, unit: "cm" },
        hint: "Istoležne stranice podobnih trikotnikov so v razmerju $k$: stranico pomnoži s $k$.",
        data: { given: [`k = ${tx(k)}`, dat("a", `${a}`, "cm")], find: ["a'"] },
        formula: "a' = k \\cdot a",
        solution: `$a' = k \\cdot a = ${tx(k)} \\cdot ${qty(a, "cm")} = ${qty(tx(a * k), "cm")}$`,
        _b: b,
      };
    },
  },
  {
    id: "verjetnost",
    topics: ["MAT-OS-9/verjetnost", "MAT-SS-4/verjetnost"],
    gen(level, r) {
      // Okrajšan ulomek za neokrajšanim, če se razlikujeta.
      const reduced = (rn, rd, n, d) => (rn === n && rd === d ? "" : ` = ${fracTex(n, d)}`);
      if (level === 1) {
        const target = r.pick([
          ["sodo število", 3, "2, 4, 6"],
          ["število, večje od 4", 2, "5, 6"],
          ["šestico", 1, "6"],
          ["praštevilo", 3, "2, 3, 5"],
        ]);
        const [n, d] = reduce(target[1], 6);
        return {
          text: `Mečemo pošteno igralno kocko. Kolikšna je verjetnost, da pade ${target[0]}? Zapiši kot okrajšan ulomek.`,
          answer: { type: "fraction", num: n, den: d },
          hint: "Verjetnost = število ugodnih izidov : število vseh izidov.",
          data: false,
          formula: P_FORMULA,
          solution: `Vsi izidi: $1, 2, 3, 4, 5, 6$ (6 izidov). Ugodni izidi: $${target[2]}$ (${nOf(target[1], "izid", "izida", "izidi", "izidov")}).\n$P = \\dfrac{\\text{ugodni izidi}}{\\text{vsi izidi}} = ${frac(target[1], 6)}${reduced(target[1], 6, n, d)}$`,
          inputHint: "npr. 1/2",
        };
      }
      const red = r.int(1, 8);
      const blue = r.int(1, 8);
      const green = r.int(1, 6);
      const total = red + blue + green;
      const kroglice = (n) => `${verbOf(n, "je", "sta", "so")} ${nOf(n, "kroglica", "kroglici", "kroglice", "kroglic")}`;
      const nDat = (label, n) => `n_{\\text{${label}}} = ${n}`;
      if (level === 2) {
        const [n, d] = reduce(red, total);
        return {
          text: `V vrečki ${kroglice(total)}: ${nOf(red, "rdeča", "rdeči", "rdeče", "rdečih")}, ${nOf(blue, "modra", "modri", "modre", "modrih")} in ${nOf(green, "zelena", "zeleni", "zelene", "zelenih")}. Na slepo izvlečemo eno. Kolikšna je verjetnost, da je rdeča? Zapiši kot okrajšan ulomek.`,
          answer: { type: "fraction", num: n, den: d },
          hint: "Koliko je vseh kroglic? Koliko je rdečih?",
          data: { given: [nDat("vse", total), nDat("rdeče", red), nDat("modre", blue), nDat("zelene", green)], find: ["P"] },
          formula: P_FORMULA,
          solution: `$P = \\dfrac{n_{\\text{rdeče}}}{n_{\\text{vse}}} = ${frac(red, total)}${reduced(red, total, n, d)}$`,
          inputHint: "npr. 3/8",
        };
      }
      const R = red + 1;
      const T = R + blue + green;
      const [n, d] = reduce(R * (R - 1), T * (T - 1));
      return {
        text: `V vrečki ${kroglice(T)}: ${nOf(R, "rdeča", "rdeči", "rdeče", "rdečih")} in ${nOf(blue + green, "druge barve", "drugih barv", "drugih barv", "drugih barv")}. Zaporedoma izvlečemo dve kroglici, prve ne vrnemo. Kolikšna je verjetnost, da sta obe rdeči? Zapiši kot okrajšan ulomek.`,
        answer: { type: "fraction", num: n, den: d },
        hint: "Verjetnost za prvo rdečo pomnoži z verjetnostjo za drugo rdečo, ko je ena že izvlečena.",
        data: { given: [nDat("vse", T), nDat("rdeče", R), nDat("druge", blue + green)], find: ["P"] },
        formula: ["P = P_1 \\cdot P_2", "P = \\dfrac{n_{\\text{rdeče}}}{n_{\\text{vse}}} \\cdot \\dfrac{n_{\\text{rdeče}} - 1}{n_{\\text{vse}} - 1}"],
        solution: `Prva kroglica: $P_1 = ${frac(R, T)}$; druga (ena rdeča in ena kroglica manj): $P_2 = ${frac(R - 1, T - 1)}$\n$P = P_1 \\cdot P_2 = ${frac(R, T)} \\cdot ${frac(R - 1, T - 1)} = ${frac(R * (R - 1), T * (T - 1))}${reduced(R * (R - 1), T * (T - 1), n, d)}$`,
        inputHint: "npr. 1/6",
      };
    },
  },
];
