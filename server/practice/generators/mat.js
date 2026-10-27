// Generatorji nalog za matematiko v OŠ (6.–9. razred).
// Vsak generator izračuna števila in pravilen odgovor v kodi.
import { NAMES, choices } from "../rng.js";
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
        solution: `${yes ? "Da" : "Ne"}: $${n} : ${k} = ${tx(n / k)}$.`,
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
      return {
        text: `Izračunaj: $${tx(a)} ${op === ":" ? ":" : op === "·" ? "\\cdot" : op} ${tx(b)}$`,
        answer: { type: "number", value: result },
        hint:
          op === "+" || op === "-"
            ? "Podpiši števili tako, da je decimalna vejica pod decimalno vejico."
            : op === "·"
              ? "Zmnoži, kot da vejic ni, nato v rezultatu odšteješ toliko decimalk, kolikor jih imata faktorja skupaj."
              : "Delitelj naredi celo število: vejico v obeh številih premakni za enako mest v desno.",
        solution: `$${tx(a)} ${op === ":" ? ":" : op === "·" ? "\\cdot" : op} ${tx(b)} = ${tx(result)}$`,
      };
    },
  },
  {
    id: "merske-enote",
    topics: ["MAT-OS-6/merske-enote", "FIZ-OS-8/fizikalne-kolicine-in-enote", "FIZ-SS-1/fizikalne-kolicine-in-enote"],
    gen(level, r) {
      const sets = [
        { units: ["mm", "cm", "dm", "m"], f: 10 },
        { units: ["g", "dag", "kg"], f: 0, custom: { g: 1, dag: 10, kg: 1000 } },
        { units: ["m", "km"], f: 0, custom: { m: 1, km: 1000 } },
        { units: ["mm²", "cm²", "dm²", "m²"], f: 100 },
        { units: ["cm³", "dm³", "m³"], f: 1000 },
        { units: ["ml", "dl", "l"], f: 0, custom: { ml: 1, dl: 100, l: 1000 } },
        { units: ["s", "min", "h"], f: 0, custom: { s: 1, min: 60, h: 3600 } },
      ];
      const pool = level === 1 ? sets.slice(0, 3) : level === 2 ? sets.slice(0, 6) : sets.slice(3);
      const s = r.pick(pool);
      const factor = (u) => (s.custom ? s.custom[u] : s.f ** s.units.indexOf(u));
      let [from, to] = r.shuffle(s.units).slice(0, 2);
      const value = level === 1 ? r.int(1, 90) : r.dec(0.5, 90, r.int(0, 2));
      const result = Math.round(((value * factor(from)) / factor(to)) * 1e9) / 1e9;
      return {
        text: `Pretvori: $${tx(value)}\\ \\mathrm{${from.replace("²", "^2").replace("³", "^3")}} = \\ ?\\ \\mathrm{${to.replace("²", "^2").replace("³", "^3")}}$`,
        answer: { type: "number", value: result, unit: to },
        hint: s.f
          ? `Med sosednjima enotama je faktor ${s.f}. Koliko korakov je od ${from} do ${to}?`
          : `Pomisli, koliko ${s.units[0]} je v 1 ${s.units[s.units.length - 1]}.`,
        solution: `$${tx(value)}\\ ${from} = ${tx(result)}\\ ${to}$`,
      };
    },
  },
  {
    id: "pravokotnik",
    topics: ["MAT-OS-6/obseg-in-ploscina-pravokotnika-in-kvadrata"],
    gen(level, r) {
      const u = r.pick(["cm", "dm", "m"]);
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
          solution: `$b = p : a = ${tx(p)} : ${tx(a)} = ${tx(b)}\\ \\mathrm{${u}}$`,
        };
      }
      const o = Math.round(2 * (a + b) * 100) / 100;
      const p = Math.round(a * b * 100) / 100;
      return kind === "o"
        ? {
            text: `Pravokotnik ima stranici $a = ${tx(a)}\\ \\mathrm{${u}}$ in $b = ${tx(b)}\\ \\mathrm{${u}}$. Izračunaj njegov obseg.`,
            answer: { type: "number", value: o, unit: u },
            hint: "Obseg je vsota dolžin vseh štirih stranic.",
            solution: `$o = 2a + 2b = ${tx(o)}\\ \\mathrm{${u}}$`,
          }
        : {
            text: `Pravokotnik ima stranici $a = ${tx(a)}\\ \\mathrm{${u}}$ in $b = ${tx(b)}\\ \\mathrm{${u}}$. Izračunaj njegovo ploščino.`,
            answer: { type: "number", value: p, unit: `${u}²` },
            hint: "Ploščina pravokotnika je $p = a \\cdot b$. Pazi na enoto.",
            solution: `$p = a \\cdot b = ${tx(p)}\\ \\mathrm{${u}^2}$`,
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
      return {
        text: askGcd ? `Poišči največji skupni delitelj: $D(${a}, ${b})$` : `Poišči najmanjši skupni večkratnik: $v(${a}, ${b})$`,
        answer: { type: "number", value: askGcd ? g : lcm },
        hint: "Obe števili razcepi na prafaktorje. Za D vzameš skupne prafaktorje, za v pa vse prafaktorje z največjimi potencami.",
        solution: askGcd ? `$D(${a}, ${b}) = ${g}$` : `$v(${a}, ${b}) = ${lcm}$`,
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
      const n1 = r.int(1, d1 * (level === 3 ? 2 : 1));
      const n2 = r.int(1, d2);
      const op = level === 1 ? r.pick(["+", "-"]) : r.pick(["+", "-", "·", ":"]);
      let n, d;
      if (op === "+") [n, d] = [n1 * d2 + n2 * d1, d1 * d2];
      if (op === "-") [n, d] = [n1 * d2 - n2 * d1, d1 * d2];
      if (op === "·") [n, d] = [n1 * n2, d1 * d2];
      if (op === ":") [n, d] = [n1 * d2, d1 * n2];
      [n, d] = reduce(n, d);
      const opTex = { "+": "+", "-": "-", "·": "\\cdot", ":": ":" }[op];
      return {
        text: `Izračunaj in rezultat okrajšaj: $${frac(n1, d1)} ${opTex} ${frac(n2, d2)}$`,
        answer: { type: "fraction", num: n, den: d },
        hint:
          op === "+" || op === "-"
            ? "Ulomka najprej razširi na skupni imenovalec, nato seštej oz. odštej števca."
            : op === "·"
              ? "Števec pomnožiš s števcem, imenovalec z imenovalcem. Lahko prej krajšaš navzkriž."
              : "Deliš tako, da pomnožiš z obratno vrednostjo drugega ulomka.",
        solution: `$${frac(n1, d1)} ${opTex} ${frac(n2, d2)} = ${fracTex(n, d)}$`,
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
      if (kind === "del")
        return {
          text: `Koliko je $${p}\\ \\%$ od $${tx(base)}$ €?`,
          answer: { type: "number", value: part, unit: "€", decimals: 2, unitAlternatives: ["eur", "evrov"] },
          hint: "Odstotek pretvori v decimalno število (npr. 20 % = 0,20) in ga pomnoži z osnovo.",
          solution: `$${tx(p / 100)} \\cdot ${tx(base)} = ${tx(part)}$ €`,
        };
      if (kind === "popust") {
        const price = Math.round((base - part) * 100) / 100;
        return {
          text: `${name} kupi jakno, ki stane $${tx(base)}$ €. V trgovini imajo $${p}\\ \\%$ popusta. Koliko plača? Rezultat zaokroži na cente.`,
          answer: { type: "number", value: base * (1 - p / 100), unit: "€", decimals: 2, unitAlternatives: ["eur", "evrov"] },
          hint: "Po popustu plača $(100 - p)\\ \\%$ prvotne cene.",
          solution: `$${tx(base)} \\cdot ${tx(1 - p / 100)} \\approx ${tx(price, 2)}$ €`,
        };
      }
      if (kind === "osnova") {
        return {
          text: `$${p}\\ \\%$ učencev šole je šlo na izlet, to je $${Math.round(p * 4)}$ učencev. Koliko učencev ima šola?`,
          answer: { type: "number", value: 400 },
          hint: "Najprej izračunaj, koliko učencev je 1 %.",
          solution: `$${p * 4} : ${p} \\cdot 100 = 400$`,
        };
      }
      const total = r.pick([20, 25, 40, 50, 80]);
      const got = r.int(1, total - 1);
      return {
        text: `Na testu je bilo $${total}$ točk. ${name} je dosegel $${got}$ točk. Koliko odstotkov je to? Zaokroži na eno decimalko.`,
        answer: { type: "number", value: (got / total) * 100, decimals: 1, unit: "%", unitAlternatives: ["odstotkov"] },
        hint: "Delež = del : celota. Delež pomnoži s 100 %.",
        solution: `$${got} : ${total} \\cdot 100\\ \\% = ${tx((got / total) * 100, 1)}\\ \\%$`,
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
        return {
          text: `${workers} delavci prepleskajo šolo v ${days} dneh. V koliko dneh bi jo prepleskalo ${workers2} delavcev, če delajo enako hitro? Zaokroži na eno decimalko.`,
          answer: { type: "number", value: v, decimals: 1, unit: "dni", unitAlternatives: ["dan", "dneh", "dnevi", "d"] },
          hint: "Več delavcev, manj dni: to je obratno sorazmerje. Produkt delavci · dnevi ostane enak.",
          solution: `$${workers} \\cdot ${days} = ${workers2} \\cdot x \\Rightarrow x = ${tx(v, 1)}$ dni`,
        };
      }
      const qty = r.int(2, 6);
      const price = r.dec(0.4, 4, 2);
      const qty2 = r.int(7, 15);
      const total = Math.round(qty * price * 100) / 100;
      return {
        text: `${name} je za ${qty} kg jabolk plačal $${tx(total, 2)}$ €. Koliko bi plačal za ${qty2} kg?`,
        answer: { type: "number", value: (total / qty) * qty2, decimals: 2, unit: "€", unitAlternatives: ["eur", "evrov"] },
        hint: "Najprej izračunaj ceno za 1 kg.",
        solution: `$${tx(total, 2)} : ${qty} \\cdot ${qty2} = ${tx((total / qty) * qty2, 2)}$ €`,
      };
    },
  },
  {
    id: "koti-trikotnika",
    topics: ["MAT-OS-7/vrste-trikotnikov-in-notranji-koti", "MAT-OS-7/vrste-kotov-in-pari-kotov"],
    gen(level, r) {
      if (level === 1) {
        const a = r.int(20, 100);
        const b = r.int(20, 160 - a);
        return {
          text: `V trikotniku merita kota $\\alpha = ${a}^\\circ$ in $\\beta = ${b}^\\circ$. Koliko meri kot $\\gamma$?`,
          answer: { type: "number", value: 180 - a - b, unit: "°", unitAlternatives: ["stopinj", "stopinje"] },
          hint: "Vsota notranjih kotov trikotnika je $180^\\circ$.",
          solution: `$\\gamma = 180^\\circ - ${a}^\\circ - ${b}^\\circ = ${180 - a - b}^\\circ$`,
        };
      }
      if (level === 2) {
        const top = r.int(20, 140);
        const base = (180 - top) / 2;
        return {
          text: `Enakokraki trikotnik ima kot ob vrhu $\\gamma = ${top}^\\circ$. Koliko meri kot ob osnovnici? Zaokroži na eno decimalko.`,
          answer: { type: "number", value: base, decimals: 1, unit: "°", unitAlternatives: ["stopinj", "stopinje"] },
          hint: "Kota ob osnovnici enakokrakega trikotnika sta enaka.",
          solution: `$\\alpha = (180^\\circ - ${top}^\\circ) : 2 = ${tx(base)}^\\circ$`,
        };
      }
      const a = r.int(30, 80);
      const b = r.int(30, 80);
      return {
        text: `V trikotniku merita notranja kota $\\alpha = ${a}^\\circ$ in $\\beta = ${b}^\\circ$. Koliko meri zunanji kot $\\gamma'$ ob oglišču $C$?`,
        answer: { type: "number", value: a + b, unit: "°", unitAlternatives: ["stopinj", "stopinje"] },
        hint: "Zunanji kot je sokot notranjega kota. Lahko pa uporabiš, da je enak vsoti nepriležnih notranjih kotov.",
        solution: `$\\gamma' = \\alpha + \\beta = ${a + b}^\\circ$`,
      };
    },
  },
  {
    id: "ploscina-trikotnika",
    topics: ["MAT-OS-7/obseg-in-ploscina-trikotnika", "MAT-OS-7/obseg-in-ploscina-stirikotnikov"],
    gen(level, r) {
      const u = r.pick(["cm", "m"]);
      if (level <= 2) {
        const a = level === 1 ? r.int(2, 20) : r.dec(2, 20, 1);
        const v = level === 1 ? r.int(2, 20) : r.dec(2, 20, 1);
        return {
          text: `Trikotnik ima stranico $a = ${tx(a)}\\ \\mathrm{${u}}$ in pripadajočo višino $v_a = ${tx(v)}\\ \\mathrm{${u}}$. Izračunaj ploščino.`,
          answer: { type: "number", value: (a * v) / 2, decimals: level === 1 ? null : 2, unit: `${u}²` },
          hint: "Ploščina trikotnika je $p = \\dfrac{a \\cdot v_a}{2}$.",
          solution: `$p = \\dfrac{${tx(a)} \\cdot ${tx(v)}}{2} = ${tx((a * v) / 2)}\\ \\mathrm{${u}^2}$`,
        };
      }
      const a = r.int(6, 20);
      const c = r.int(2, a - 2);
      const v = r.int(3, 12);
      return {
        text: `Trapez ima osnovnici $a = ${a}\\ \\mathrm{${u}}$ in $c = ${c}\\ \\mathrm{${u}}$ ter višino $v = ${v}\\ \\mathrm{${u}}$. Izračunaj ploščino.`,
        answer: { type: "number", value: ((a + c) * v) / 2, unit: `${u}²` },
        hint: "Ploščina trapeza je $p = \\dfrac{(a + c) \\cdot v}{2}$.",
        solution: `$p = \\dfrac{(${a} + ${c}) \\cdot ${v}}{2} = ${tx(((a + c) * v) / 2)}\\ \\mathrm{${u}^2}$`,
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
      let text, value;
      if (level === 1) {
        const op = r.pick(["+", "-"]);
        value = op === "+" ? a + b : a - b;
        text = `${a} ${op} ${p(b)}`;
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
      }
      return {
        text: `Izračunaj: $${text}$`,
        answer: { type: "number", value },
        hint:
          level === 3
            ? "Najprej množi, nato odštevaj. Pazi na predznake: minus krat minus je plus."
            : "Pri odštevanju negativnega števila prišteješ nasprotno število. Pri množenju: enaka predznaka dasta plus, različna minus.",
        solution: `$${text} = ${value}$`,
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
          solution: `$${b}^${e} = ${b ** e}$`,
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
          solution: `$${b}^{${m}} ${op} ${b}^{${n}} = ${b}^{${res}}$`,
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
        solution: `$${shown.replace(",", "{,}")} = ${tx(mant)} \\cdot 10^{${neg ? -e : e}}$`,
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
          solution: sq ? `$${n}^2 = ${n * n}$` : `$\\sqrt{${n * n}} = ${n}$`,
        };
      }
      if (level === 2) {
        const n = r.int(2, 99);
        const val = Math.sqrt(n);
        if (Number.isInteger(val)) return this.gen(2, r);
        return {
          text: `Med katerima zaporednima naravnima številoma leži $\\sqrt{${n}}$? Vpiši manjše.`,
          answer: { type: "number", value: Math.floor(val) },
          hint: "Poišči najbližja popolna kvadrata pod in nad tem številom.",
          solution: `$${Math.floor(val) ** 2} < ${n} < ${Math.ceil(val) ** 2}$, zato $${Math.floor(val)} < \\sqrt{${n}} < ${Math.ceil(val)}$.`,
        };
      }
      const k = r.pick([2, 3, 5, 6, 7]);
      const s = r.int(2, 6);
      return {
        text: `Delno koreni: $\\sqrt{${s * s * k}} = a\\sqrt{${k}}$. Koliko je $a$?`,
        answer: { type: "number", value: s },
        hint: `Število pod korenom zapiši kot produkt popolnega kvadrata in ${k}.`,
        solution: `$\\sqrt{${s * s * k}} = \\sqrt{${s * s} \\cdot ${k}} = ${s}\\sqrt{${k}}$`,
      };
    },
  },
  {
    id: "pitagora",
    topics: ["MAT-OS-8/pitagorov-izrek", "MAT-OS-8/uporaba-pitagorovega-izreka"],
    gen(level, r) {
      const u = r.pick(["cm", "dm", "m"]);
      const triples = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15], [7, 24, 25]];
      if (level === 1) {
        const [a, b, c] = r.pick(triples);
        return {
          text: `Pravokotni trikotnik ima kateti $a = ${a}\\ \\mathrm{${u}}$ in $b = ${b}\\ \\mathrm{${u}}$. Izračunaj hipotenuzo $c$.`,
          answer: { type: "number", value: c, unit: u },
          hint: "Pitagorov izrek: $c^2 = a^2 + b^2$.",
          solution: `$c = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a * a + b * b}} = ${c}\\ \\mathrm{${u}}$`,
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
          solution: `$c = \\sqrt{${a * a + b * b}} \\approx ${tx(roundHalfUp(c, 2), 2)}\\ \\mathrm{${u}}$`,
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
          solution: `$b = \\sqrt{${c}^2 - ${a}^2} = \\sqrt{${c * c - a * a}} \\approx ${tx(roundHalfUp(b, 2), 2)}\\ \\mathrm{dm}$`,
        };
      }
      const a = r.int(3, 20);
      const b = r.int(3, 20);
      const d = Math.sqrt(a * a + b * b);
      return {
        text: `Pravokotnik ima stranici $${a}\\ \\mathrm{${u}}$ in $${b}\\ \\mathrm{${u}}$. Izračunaj dolžino diagonale in jo zaokroži na dve decimalki.`,
        answer: { type: "number", value: d, unit: u, decimals: 2 },
        hint: "Diagonala razdeli pravokotnik na dva pravokotna trikotnika.",
        solution: `$d = \\sqrt{${a}^2 + ${b}^2} \\approx ${tx(roundHalfUp(d, 2), 2)}\\ \\mathrm{${u}}$`,
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
      const sign = (v) => (v < 0 ? `- ${-v}` : `+ ${v}`);
      if (level === 1) {
        const ax = Math.abs(a);
        const c = ax * x + b;
        return {
          text: `Reši enačbo: $${ax}x ${sign(b)} = ${c}$`,
          answer: { type: "number", value: x },
          hint: "Najprej osami člen z $x$ (prenesi število na drugo stran), nato deli s koeficientom.",
          solution: `$${ax}x = ${c - b} \\Rightarrow x = ${x}$`,
        };
      }
      if (level === 2) {
        const c = r.nonZero(-9, 9);
        const d = a * x + b - c * x;
        if (a === c) return this.gen(2, r);
        return {
          text: `Reši enačbo: $${a}x ${sign(b)} = ${c}x ${sign(d)}$`,
          answer: { type: "number", value: x },
          hint: "Člene z $x$ zberi na levi, števila na desni strani enačbe.",
          solution: `$${a - c}x = ${d - b} \\Rightarrow x = ${x}$`,
        };
      }
      // z oklepaji ali ulomkom
      const k = r.int(2, 5);
      const m = r.int(2, 6);
      const rhs = (x + m) / k;
      if (Number.isInteger(rhs)) {
        return {
          text: `Reši enačbo: $\\dfrac{x ${sign(m)}}{${k}} = ${rhs}$`,
          answer: { type: "number", value: x },
          hint: "Enačbo pomnoži z imenovalcem, da se znebiš ulomka.",
          solution: `$x ${sign(m)} = ${rhs * k} \\Rightarrow x = ${x}$`,
        };
      }
      const c = k * (x - m) + b;
      return {
        text: `Reši enačbo: $${k}(x - ${m}) ${sign(b)} = ${c}$`,
        answer: { type: "number", value: x },
        hint: "Najprej odpravi oklepaj (vsak člen v oklepaju pomnoži s številom pred njim).",
        solution: `$${k}x - ${k * m} ${sign(b)} = ${c} \\Rightarrow x = ${x}$`,
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
        return {
          text: `Izračunaj vrednost izraza $${a}x ${b < 0 ? "-" : "+"} ${Math.abs(b)}$ za $x = ${x}$.`,
          answer: { type: "number", value: a * x + b },
          hint: "Namesto $x$ vstavi število (v oklepaju, če je negativno).",
          solution: `$${a} \\cdot ${x < 0 ? `(${x})` : x} ${b < 0 ? "-" : "+"} ${Math.abs(b)} = ${a * x + b}$`,
        };
      }
      const p = r.int(1, 7);
      const q = r.nonZero(-7, 7);
      const qs = q < 0 ? `- ${-q}` : `+ ${q}`;
      if (level === 2) {
        const right = `x^2 ${p + q < 0 ? "-" : "+"} ${Math.abs(p + q)}x ${p * q < 0 ? "-" : "+"} ${Math.abs(p * q)}`;
        const c = choices(r, right, [
          `x^2 + ${p * q}`,
          `x^2 ${p - q < 0 ? "-" : "+"} ${Math.abs(p - q)}x ${p * q < 0 ? "-" : "+"} ${Math.abs(p * q)}`,
          `2x ${p + q < 0 ? "-" : "+"} ${Math.abs(p + q)}`,
        ]);
        return {
          text: `Zmnoži: $(x + ${p})(x ${qs})$`,
          answer: { type: "choice", ...c },
          options_tex: true,
          hint: "Vsak člen prvega oklepaja pomnoži z vsakim členom drugega, nato seštej podobne člene.",
          solution: `$(x + ${p})(x ${qs}) = ${right.replace(/\+ 1x|\+ -/, (m) => m)}$`,
        };
      }
      const k = r.int(2, 9);
      const m = r.int(2, 9);
      const n = r.nonZero(-9, 9);
      return {
        text: `Izpostavi skupni faktor: $${k * m}x ${k * n < 0 ? "-" : "+"} ${Math.abs(k * n)} = ${k}(\\,${m}x + \\square\\,)$. Katero število je v kvadratku?`,
        answer: { type: "number", value: n },
        hint: `Vsak člen deli s ${k}.`,
        solution: `$${k * m}x ${k * n < 0 ? "-" : "+"} ${Math.abs(k * n)} = ${k}(${m}x ${n < 0 ? "-" : "+"} ${Math.abs(n)})$`,
      };
    },
  },
  {
    id: "krog",
    topics: ["MAT-OS-8/obseg-in-ploscina-kroga", "MAT-OS-8/krozni-lok-in-krozni-izsek"],
    gen(level, r) {
      const u = r.pick(["cm", "m"]);
      const rad = level === 1 ? r.int(2, 15) : r.dec(1.5, 20, 1);
      const piNote = "Uporabi $\\pi \\approx 3{,}14$ ali tipko $\\pi$ na računalu.";
      if (level === 3) {
        const alpha = r.pick([30, 45, 60, 72, 90, 120, 135, 150]);
        const l = (Math.PI * rad * alpha) / 180;
        return {
          text: `Krožni lok s središčnim kotom $${alpha}^\\circ$ leži na krožnici s polmerom $${tx(rad)}\\ \\mathrm{${u}}$. Izračunaj dolžino loka. Zaokroži na dve decimalki. ${piNote}`,
          answer: { type: "number", value: l, alsoAccept: [(3.14 * rad * alpha) / 180], unit: u, decimals: 2 },
          hint: "Lok je tak del obsega, kot je kot $\\alpha$ del $360^\\circ$: $l = \\dfrac{\\pi r \\alpha}{180^\\circ}$.",
          solution: `$l = \\dfrac{\\pi \\cdot ${tx(rad)} \\cdot ${alpha}^\\circ}{180^\\circ} \\approx ${tx(roundHalfUp(l, 2), 2)}\\ \\mathrm{${u}}$`,
        };
      }
      const area = r.next() < 0.5;
      const v = area ? Math.PI * rad * rad : 2 * Math.PI * rad;
      const v314 = area ? 3.14 * rad * rad : 2 * 3.14 * rad;
      return {
        text: `Krog ima polmer $r = ${tx(rad)}\\ \\mathrm{${u}}$. Izračunaj njegov ${area ? "ploščino" : "obseg"}. Zaokroži na dve decimalki. ${piNote}`,
        answer: { type: "number", value: v, alsoAccept: [v314], unit: area ? `${u}²` : u, decimals: 2 },
        hint: area ? "Ploščina kroga: $p = \\pi r^2$." : "Obseg kroga: $o = 2\\pi r$.",
        solution: area
          ? `$p = \\pi \\cdot ${tx(rad)}^2 \\approx ${tx(roundHalfUp(v, 2), 2)}\\ \\mathrm{${u}^2}$`
          : `$o = 2\\pi \\cdot ${tx(rad)} \\approx ${tx(roundHalfUp(v, 2), 2)}\\ \\mathrm{${u}}$`,
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
        return {
          text: `Dana je funkcija $f(x) = ${fx}$. Izračunaj $f(${x})$.`,
          answer: { type: "number", value: f(x) },
          hint: "Namesto $x$ vstavi dano število.",
          solution: `$f(${x}) = ${f(x)}$`,
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
          solution: `Premica gre skozi $(${x0}, ${f(x0)})$ in $(${x0 + 1}, ${f(x0 + 1)})$, zato je $k = ${k}$.`,
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
        solution: `$k = \\dfrac{${y2} - (${y1})}{${x2} - (${x1})} = ${kk}$, $n = ${y1} - ${kk} \\cdot (${x1}) = ${nn}$`,
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
      return {
        text: `Reši neenačbo: $${a}x ${b < 0 ? "-" : "+"} ${Math.abs(b)} ${ineq} ${c}$`,
        answer: { type: "choice", ...c2 },
        options_tex: true,
        hint: flip
          ? "Rešuješ kot enačbo. Ko deliš z negativnim številom, se znak neenakosti obrne!"
          : "Rešuješ kot enačbo: osami člen z $x$ in deli s koeficientom.",
        solution: `$${a}x ${ineq} ${c - b} \\Rightarrow ${right}$`,
      };
    },
  },
  {
    id: "telesa",
    topics: ["MAT-OS-9/prizma", "MAT-OS-9/valj", "MAT-OS-9/piramida", "MAT-OS-9/stozec", "MAT-OS-9/krogla", "MAT-SS-3/povrsina-in-prostornina-teles"],
    gen(level, r, topicId = "") {
      const u = r.pick(["cm", "dm", "m"]);
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
      const V = (txt, value, v314, hint, sol) => ({
        text: txt,
        answer: { type: "number", value, alsoAccept: v314 ? [v314] : [], unit: `${u}³`, decimals: 2 },
        hint,
        solution: sol,
      });
      if (which === "kvader")
        return V(
          `Kvader ima robove $a = ${tx(a)}\\ \\mathrm{${u}}$, $b = ${tx(b)}\\ \\mathrm{${u}}$ in $c = ${tx(h)}\\ \\mathrm{${u}}$. Izračunaj prostornino. Zaokroži na dve decimalki.`,
          a * b * h,
          null,
          "Prostornina prizme je ploščina osnovne ploskve krat višina: $V = a \\cdot b \\cdot c$.",
          `$V = ${tx(a)} \\cdot ${tx(b)} \\cdot ${tx(h)} \\approx ${tx(roundHalfUp(a * b * h, 2), 2)}\\ \\mathrm{${u}^3}$`,
        );
      if (which === "valj")
        return V(
          `Valj ima polmer osnovne ploskve $r = ${tx(a)}\\ \\mathrm{${u}}$ in višino $v = ${tx(h)}\\ \\mathrm{${u}}$. Izračunaj prostornino. ${piNote}`,
          Math.PI * a * a * h,
          3.14 * a * a * h,
          "$V = \\pi r^2 v$",
          `$V = \\pi \\cdot ${tx(a)}^2 \\cdot ${tx(h)} \\approx ${tx(roundHalfUp(Math.PI * a * a * h, 2), 2)}\\ \\mathrm{${u}^3}$`,
        );
      if (which === "piramida")
        return V(
          `Pravilna štiristrana piramida ima osnovni rob $a = ${tx(a)}\\ \\mathrm{${u}}$ in višino $v = ${tx(h)}\\ \\mathrm{${u}}$. Izračunaj prostornino. Zaokroži na dve decimalki.`,
          (a * a * h) / 3,
          null,
          "Prostornina piramide je tretjina produkta ploščine osnovne ploskve in višine: $V = \\dfrac{a^2 v}{3}$.",
          `$V = \\dfrac{${tx(a)}^2 \\cdot ${tx(h)}}{3} \\approx ${tx(roundHalfUp((a * a * h) / 3, 2), 2)}\\ \\mathrm{${u}^3}$`,
        );
      if (which === "stozec")
        return V(
          `Stožec ima polmer osnovne ploskve $r = ${tx(a)}\\ \\mathrm{${u}}$ in višino $v = ${tx(h)}\\ \\mathrm{${u}}$. Izračunaj prostornino. ${piNote}`,
          (Math.PI * a * a * h) / 3,
          (3.14 * a * a * h) / 3,
          "$V = \\dfrac{\\pi r^2 v}{3}$",
          `$V = \\dfrac{\\pi \\cdot ${tx(a)}^2 \\cdot ${tx(h)}}{3} \\approx ${tx(roundHalfUp((Math.PI * a * a * h) / 3, 2), 2)}\\ \\mathrm{${u}^3}$`,
        );
      return V(
        `Krogla ima polmer $r = ${tx(a)}\\ \\mathrm{${u}}$. Izračunaj prostornino. ${piNote}`,
        (4 * Math.PI * a ** 3) / 3,
        (4 * 3.14 * a ** 3) / 3,
        "$V = \\dfrac{4\\pi r^3}{3}$",
        `$V = \\dfrac{4\\pi \\cdot ${tx(a)}^3}{3} \\approx ${tx(roundHalfUp((4 * Math.PI * a ** 3) / 3, 2), 2)}\\ \\mathrm{${u}^3}$`,
      );
    },
  },
  {
    id: "podobnost",
    topics: ["MAT-OS-9/podobni-trikotniki", "MAT-OS-9/talesov-izrek", "MAT-SS-2/podobnost"],
    gen(level, r) {
      const k = level === 1 ? r.int(2, 4) : r.pick([1.5, 2.5, 0.5, 3, 1.2]);
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
          solution: `$\\dfrac{H}{${tx(S)}} = \\dfrac{${tx(h)}}{${tx(s)}} \\Rightarrow H \\approx ${tx(roundHalfUp(H, 2), 2)}\\ \\mathrm{m}$`,
        };
      }
      return {
        text: `Trikotnika sta podobna z razmerjem podobnosti $k = ${tx(k)}$. Stranica manjšega trikotnika meri $${a}\\ \\mathrm{cm}$. Koliko meri istoležna stranica večjega trikotnika?`,
        answer: { type: "number", value: a * k, unit: "cm" },
        hint: "Istoležne stranice podobnih trikotnikov so v razmerju $k$: stranico pomnoži s $k$.",
        solution: `$${a} \\cdot ${tx(k)} = ${tx(a * k)}\\ \\mathrm{cm}$`,
        _b: b,
      };
    },
  },
  {
    id: "verjetnost",
    topics: ["MAT-OS-9/verjetnost", "MAT-SS-4/verjetnost"],
    gen(level, r) {
      if (level === 1) {
        const target = r.pick([
          ["sodo število", 3],
          ["število, večje od 4", 2],
          ["šestico", 1],
          ["praštevilo", 3],
        ]);
        const [n, d] = reduce(target[1], 6);
        return {
          text: `Mečemo pošteno igralno kocko. Kolikšna je verjetnost, da pade ${target[0]}? Zapiši kot okrajšan ulomek.`,
          answer: { type: "fraction", num: n, den: d },
          hint: "Verjetnost = število ugodnih izidov : število vseh izidov.",
          solution: `$P = ${frac(target[1], 6)} = ${fracTex(n, d)}$`,
          inputHint: "npr. 1/2",
        };
      }
      const red = r.int(1, 8);
      const blue = r.int(1, 8);
      const green = r.int(0, 6);
      const total = red + blue + green;
      if (level === 2) {
        const [n, d] = reduce(red, total);
        return {
          text: `V vrečki je ${red} rdečih, ${blue} modrih in ${green} zelenih kroglic. Na slepo izvlečemo eno. Kolikšna je verjetnost, da je rdeča? Zapiši kot okrajšan ulomek.`,
          answer: { type: "fraction", num: n, den: d },
          hint: "Koliko je vseh kroglic? Koliko je rdečih?",
          solution: `$P = ${frac(red, total)} = ${fracTex(n, d)}$`,
          inputHint: "npr. 3/8",
        };
      }
      const [n, d] = reduce(red * (red - 1), total * (total - 1));
      return {
        text: `V vrečki je ${red + 1} rdečih in ${blue + green} drugih kroglic. Zaporedoma izvlečemo dve kroglici, prve ne vrnemo. Kolikšna je verjetnost, da sta obe rdeči? Zapiši kot okrajšan ulomek.`,
        answer: { type: "fraction", ...(() => { const [nn, dd] = reduce((red + 1) * red, total * (total - 1)); return { num: nn, den: dd }; })() },
        hint: "Verjetnost za prvo rdečo pomnoži z verjetnostjo za drugo rdečo, ko je ena že izvlečena.",
        solution: `$P = ${frac(red + 1, total)} \\cdot ${frac(red, total - 1)}$`,
        inputHint: "npr. 1/6",
        _unused: [n, d],
      };
    },
  },
];
