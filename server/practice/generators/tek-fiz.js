// Tekmovalne naloge iz fizike (Stefanovo priznanje, fizikalna olimpijada), OŠ in SŠ.
// Vse količine in odgovori so izračunani v kodi.
import { NAMES, g } from "../rng.js";
import { tx, qty, dat, res, num, roundHalfUp } from "./tek-util.js";

const OS = (slug) => `FIZ-TEK-OS/${slug}`;
const SS = (slug) => `FIZ-TEK-SS/${slug}`;
const G = 9.81;
const GTXT = "$g = 9{,}81\\ \\mathrm{m/s^2}$";
const GDAT = "g = 9{,}81\\ \\mathrm{m/s^2}";
// Količina v besedilu: $5{,}2\ \mathrm{m}$.
const Q = (v, u, d = null) => `$${qty(tx(v, d), u)}$`;
const deg = (a) => (a * Math.PI) / 180;
const avg = (a) => a.reduce((s, x) => s + x, 0) / a.length;

export const TEK_FIZ = [
  // ================================================================ OŠ
  {
    id: "tek-fiz-graf-gibanja",
    topics: [OS("branje-in-risanje-grafov-gibanja")],
    gen(level, r) {
      const v = r.int(4, 20), t1 = r.int(2, 10), t2 = r.int(5, 30), t3 = r.int(2, 10);
      const s1 = (v * t1) / 2, s2 = v * t2, s3 = (v * t3) / 2, s = s1 + s2 + s3, T = t1 + t2 + t3;
      const text = `Kolesar spelje iz mirovanja in ${t1} s enakomerno pospešuje do hitrosti ${Q(v, "m/s")}, nato ${t2} s vozi s to hitrostjo, nazadnje pa ${t3} s enakomerno zavira do ustavitve.`;
      const given = [dat("v", v, "m/s"), dat("t_1", t1, "s"), dat("t_2", t2, "s"), dat("t_3", t3, "s")];
      const areas = `$s_1 = \\tfrac{1}{2} \\cdot ${v} \\cdot ${t1} = ${tx(s1)}$ m, $s_2 = ${v} \\cdot ${t2} = ${s2}$ m, $s_3 = \\tfrac{1}{2} \\cdot ${v} \\cdot ${t3} = ${tx(s3)}$ m`;
      if (level === 1) {
        return {
          text: `${text} Kolikšno pot prevozi?`,
          answer: num(s, "m", 1),
          hint: "Nariši graf hitrosti v odvisnosti od časa. Pot je ploščina pod grafom (trapez).",
          data: { given, find: ["s"] },
          formula: "s = \\text{ploščina pod grafom } v(t)",
          solution: `${areas}.\n$s = ${tx(s1)} + ${s2} + ${tx(s3)} ${res(s, 1, "m")}$.`,
        };
      }
      if (level === 2) {
        return {
          text: `${text} Kolikšna je njegova povprečna hitrost na celi poti?`,
          answer: num(s / T, "m/s", 2),
          hint: "Povprečna hitrost je celotna pot, deljena s celotnim časom. Pot dobiš kot ploščino pod grafom $v(t)$.",
          data: { given, find: ["\\bar{v}"] },
          formula: ["s = \\text{ploščina pod grafom}", "\\bar{v} = \\dfrac{s}{t}"],
          solution: `${areas}, skupaj $s = ${tx(s)}$ m v času $t = ${T}$ s.\n$\\bar{v} = \\dfrac{${tx(s)}}{${T}} ${res(s / T, 2, "m/s")}$.`,
        };
      }
      const half = s / 2;
      const t = half <= s1 ? Math.sqrt((2 * half * t1) / v) : half <= s1 + s2 ? t1 + (half - s1) / v : T - Math.sqrt((2 * (s - half) * t3) / v);
      return {
        text: `${text} Koliko sekund po začetku je prevozil natanko polovico celotne poti? Zaokroži na eno decimalko.`,
        answer: num(t, "s", 1),
        hint: "Izračunaj celotno pot (ploščina pod grafom) in ugotovi, v katerem delu gibanja je polovica poti.",
        data: { given, find: ["t_{1/2}"] },
        formula: ["s = \\text{ploščina pod grafom}", "s = \\tfrac{1}{2} a t^2 \\text{ oz. } s = v t"],
        solution: `${areas}, skupaj ${tx(s)} m, polovica je ${tx(half)} m.\n${
          half <= s1 ? `To je še med pospeševanjem: $a = \\tfrac{${v}}{${t1}}$, $t = \\sqrt{\\tfrac{2 \\cdot ${tx(half)}}{a}} ${res(t, 1, "s")}$.` : half <= s1 + s2 ? `To je med enakomerno vožnjo: $t = ${t1} + \\dfrac{${tx(half)} - ${tx(s1)}}{${v}} ${res(t, 1, "s")}$.` : `To je med zaviranjem; ostane ${tx(s - half)} m poti, kar zahteva $\\sqrt{\\tfrac{2 \\cdot ${tx(s - half)} \\cdot ${t3}}{${v}}}$ s pred koncem: $t ${res(t, 1, "s")}$.`
        }`,
      };
    },
  },
  {
    id: "tek-fiz-merske-napake",
    topics: [OS("ocenjevanje-in-merske-napake")],
    gen(level, r) {
      if (level <= 2) {
        const base = r.dec(5, 40, 1);
        const xs = Array.from({ length: 5 }, () => roundHalfUp(base + r.dec(-0.4, 0.4, 1), 1));
        const m = avg(xs);
        const mr = roundHalfUp(m, 2);
        const dev = Math.max(...xs.map((x) => Math.abs(x - mr)));
        const list = xs.map((x) => tx(x)).join("; ");
        const qty0 = r.pick([["čas padanja žoge", "s"], ["dolžino mize", "cm"], ["čas 10 nihajev nihala", "s"]]);
        const who = NAMES[r.int(0, 11)];
        const text = `${who} je petkrat ${g(who, "izmeril", "izmerila")} ${qty0[0]} in ${g(who, "dobil", "dobila")} (v ${qty0[1]}): ${list}.`;
        if (level === 1) {
          return {
            text: `${text} Kolikšna je povprečna vrednost? Zaokroži na dve decimalki.`,
            answer: num(m, qty0[1], 2),
            hint: "Seštej vse meritve in deli s številom meritev.",
            data: { given: xs.map((x, i) => `x_${i + 1} = ${qty(tx(x), qty0[1])}`), find: ["\\bar{x}"] },
            formula: "\\bar{x} = \\dfrac{x_1 + x_2 + \\ldots + x_n}{n}",
            solution: `$\\bar{x} = \\dfrac{${xs.map((x) => tx(x)).join(" + ")}}{5} ${res(m, 2, qty0[1])}$.`,
          };
        }
        return {
          text: `${text} Absolutno napako oceni kot največje odstopanje posamezne meritve od povprečja (povprečje zaokroži na dve decimalki). Kolikšna je relativna napaka v odstotkih? Zaokroži na eno decimalko.`,
          answer: num((dev / mr) * 100, "%", 1),
          hint: "Najprej povprečje, nato največja razlika med meritvijo in povprečjem, nato to razliko deli s povprečjem.",
          data: { given: xs.map((x, i) => `x_${i + 1} = ${qty(tx(x), qty0[1])}`), find: ["\\delta"] },
          formula: ["\\Delta x = \\max |x_i - \\bar{x}|", "\\delta = \\dfrac{\\Delta x}{\\bar{x}} \\cdot 100\\,\\%"],
          solution: `$\\bar{x} = ${tx(mr, 2)}$ ${qty0[1]}, $\\Delta x = ${tx(dev, 2)}$ ${qty0[1]}.\n$\\delta = \\dfrac{${tx(dev, 2)}}{${tx(mr, 2)}} \\cdot 100\\,\\% ${res((dev / mr) * 100, 1, "\\%")}$.`,
        };
      }
      const m = r.int(50, 500), dm = r.pick([1, 2, 5]), V = r.int(20, 200), dV = r.pick([1, 2, 5]);
      const rel = (dm / m + dV / V) * 100;
      return {
        text: `Gostoto kamna določimo iz mase ${Q(m, "g")} (z napako ${Q(dm, "g")}) in prostornine ${Q(V, "cm^3")} (z napako ${Q(dV, "cm^3")}). Kolikšna je relativna napaka gostote v odstotkih? Zaokroži na eno decimalko.`,
        answer: num(rel, "%", 1),
        hint: "Pri deljenju (ali množenju) količin se relativni napaki seštejeta.",
        data: { given: [dat("m", m, "g"), dat("\\Delta m", dm, "g"), dat("V", V, "cm^3"), dat("\\Delta V", dV, "cm^3")], find: ["\\delta_\\rho"] },
        formula: "\\delta_\\rho = \\dfrac{\\Delta m}{m} + \\dfrac{\\Delta V}{V}",
        solution: `$\\delta_\\rho = \\dfrac{${dm}}{${m}} + \\dfrac{${dV}}{${V}} \\approx ${tx(dm / m, 4)} + ${tx(dV / V, 4)} \\approx ${tx(rel / 100, 4)}$, to je $${tx(rel, 1)}\\,\\%$.`,
      };
    },
  },
  {
    id: "tek-fiz-povprecna-hitrost",
    topics: [OS("sestavljeno-gibanje-in-povprecna-hitrost")],
    gen(level, r) {
      if (level === 1) {
        const s1 = r.int(5, 60), v1 = r.int(30, 90), s2 = r.int(5, 60), v2 = r.int(30, 130);
        const t = s1 / v1 + s2 / v2, vp = (s1 + s2) / t;
        return {
          text: `Avto prevozi ${s1} km s hitrostjo ${v1} km/h, nato ${s2} km s hitrostjo ${v2} km/h. Kolikšna je povprečna hitrost na celi poti? Zaokroži na eno decimalko.`,
          answer: num(vp, "km/h", 1),
          hint: "Izračunaj čas za vsak odsek posebej. Povprečna hitrost = celotna pot / celotni čas.",
          data: { given: [dat("s_1", s1, "km"), dat("v_1", v1, "km/h"), dat("s_2", s2, "km"), dat("v_2", v2, "km/h")], find: ["\\bar{v}"] },
          formula: ["t = \\dfrac{s}{v}", "\\bar{v} = \\dfrac{s_1 + s_2}{t_1 + t_2}"],
          solution: `$t_1 = \\dfrac{${s1}}{${v1}} = ${tx(s1 / v1, 4)}$ h, $t_2 = \\dfrac{${s2}}{${v2}} = ${tx(s2 / v2, 4)}$ h.\n$\\bar{v} = \\dfrac{${s1 + s2}}{${tx(t, 4)}} ${res(vp, 1, "km/h")}$.`,
        };
      }
      if (level === 2) {
        const d = r.int(50, 300), v1 = r.int(40, 90), v2 = r.int(40, 110), dt = r.pick([0.5, 1, 1.5]);
        // Prvi odpelje iz A ob 0, drugi iz B proti A čez dt.
        const t = (d + v2 * dt) / (v1 + v2);
        if (t <= dt) return null;
        return {
          text: `Kraja A in B sta ${d} km narazen. Iz A proti B odpelje avto s hitrostjo ${v1} km/h. ${tx(dt)} h pozneje odpelje iz B proti A tovornjak s hitrostjo ${v2} km/h. Koliko kilometrov od A se srečata? Zaokroži na eno decimalko.`,
          answer: num(v1 * t, "km", 1),
          hint: "Ko tovornjak štarta, je avto že prevozil del poti. Nato se razdalja med njima zmanjšuje s hitrostjo $v_1 + v_2$.",
          data: { given: [dat("d", d, "km"), dat("v_1", v1, "km/h"), dat("v_2", v2, "km/h"), dat("\\Delta t", tx(dt), "h")], find: ["x"] },
          formula: ["v_1 t + v_2 (t - \\Delta t) = d", "x = v_1 t"],
          solution: `$${v1}t + ${v2}(t - ${tx(dt)}) = ${d}$, torej $t = \\dfrac{${d} + ${v2} \\cdot ${tx(dt)}}{${v1} + ${v2}} ${res(t, 3, "h")}$.\n$x = ${v1} \\cdot t ${res(v1 * t, 1, "km")}$.`,
        };
      }
      const d = r.int(6, 30), t1 = r.dec(0.5, 2, 1), vr = r.dec(0.5, 3, 1);
      const vc = d / t1 - vr;
      if (vc <= vr + 1) return null;
      const t2 = d / (vc - vr);
      return {
        text: `Čoln pluje ${d} km po reki navzdol in za to porabi ${tx(t1)} h. Reka teče s hitrostjo ${Q(vr, "km/h")}. Koliko časa potrebuje za pot nazaj (proti toku) z enako hitrostjo glede na vodo? Zaokroži na dve decimalki.`,
        answer: num(t2, "h", 2),
        hint: "Po toku je hitrost glede na breg $v_c + v_r$, proti toku $v_c - v_r$. Iz prve vožnje izračunaj $v_c$.",
        data: { given: [dat("d", d, "km"), dat("t_1", tx(t1), "h"), dat("v_r", tx(vr), "km/h")], find: ["t_2"] },
        formula: ["v_c + v_r = \\dfrac{d}{t_1}", "t_2 = \\dfrac{d}{v_c - v_r}"],
        solution: `$v_c + v_r = \\dfrac{${d}}{${tx(t1)}} = ${tx(d / t1, 3)}$ km/h, $v_c = ${tx(vc, 3)}$ km/h.\n$t_2 = \\dfrac{${d}}{${tx(vc, 3)} - ${tx(vr)}} ${res(t2, 2, "h")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-vzvod",
    topics: [OS("sile-ravnovesje-in-vzvod")],
    gen(level, r) {
      const [a, b] = r.shuffle(NAMES).slice(0, 2);
      if (level === 1) {
        const m1 = r.int(25, 60), m2 = r.int(25, 60), r1 = r.dec(1, 2.5, 1);
        const r2 = (m1 * r1) / m2;
        if (r2 > 3) return null;
        return {
          text: `${a} (${m1} kg) sedi na gugalnici ${Q(r1, "m")} od osi. Kako daleč od osi na drugi strani mora sesti ${b} (${m2} kg), da bo gugalnica v ravnovesju? Zaokroži na dve decimalki.`,
          answer: num(r2, "m", 2),
          hint: "Navora na obeh straneh morata biti enaka: $F_1 r_1 = F_2 r_2$. Težni pospešek se pokrajša.",
          data: { given: [dat("m_1", m1, "kg"), dat("r_1", tx(r1), "m"), dat("m_2", m2, "kg")], find: ["r_2"] },
          formula: "m_1 r_1 = m_2 r_2",
          solution: `$r_2 = \\dfrac{m_1 r_1}{m_2} = \\dfrac{${m1} \\cdot ${tx(r1)}}{${m2}} ${res(r2, 2, "m")}$.`,
        };
      }
      if (level === 2) {
        const L = r.int(2, 6), M = r.int(2, 20), x = r.dec(0.3, L / 2 - 0.2, 1);
        // Drog dolžine L, os x od levega konca; na levem koncu utež m za ravnovesje (težišče drogu na L/2).
        const m = (M * (L / 2 - x)) / x;
        return {
          text: `Homogen drog z dolžino ${L} m in maso ${M} kg je podprt ${Q(x, "m")} od levega konca. Kolikšno maso moramo obesiti na levi konec, da bo drog vodoraven? Zaokroži na dve decimalki.`,
          answer: num(m, "kg", 2),
          hint: "Teža droga prijemlje v njegovem težišču (na sredini). Primerjaj navora okoli podpore.",
          data: { given: [dat("L", L, "m"), dat("M", M, "kg"), dat("x", tx(x), "m")], find: ["m"] },
          formula: "m \\cdot x = M \\cdot \\left(\\tfrac{L}{2} - x\\right)",
          solution: `Težišče droga je ${tx(L / 2)} m od levega konca, torej $${tx(L / 2 - x)}$ m desno od podpore.\n$m = \\dfrac{${M} \\cdot ${tx(L / 2 - x)}}{${tx(x)}} ${res(m, 2, "kg")}$.`,
        };
      }
      const m = r.int(20, 200), n = r.int(1, 3), eta = r.int(70, 95);
      const F = (m * G) / 2 ** n / (eta / 100);
      return {
        text: `Breme z maso ${m} kg dvigujemo s sistemom ${n === 1 ? "enega gibljivega škripca" : `${n} gibljivih škripcev, zaporedno vezanih (vsak razpolovi silo)`}. Izkoristek sistema je ${eta} %. S kolikšno silo moramo vleči vrv? (${GTXT}) Zaokroži na eno decimalko.`,
        answer: num(F, "N", 1),
        hint: `Vsak gibljivi škripec idealno razpolovi potrebno silo. Zaradi trenja je sila večja: deli z izkoristkom.`,
        data: { given: [dat("m", m, "kg"), `n = ${n}`, `\\eta = ${eta}\\ \\%`, GDAT], find: ["F"] },
        formula: "F = \\dfrac{m g}{2^n \\, \\eta}",
        solution: `$F_g = ${m} \\cdot 9{,}81 = ${tx(m * G, 1)}$ N, idealno $F_0 = \\dfrac{F_g}{${2 ** n}} = ${tx((m * G) / 2 ** n, 2)}$ N.\n$F = \\dfrac{F_0}{${tx(eta / 100)}} ${res(F, 1, "N")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-tlak-vzgon",
    topics: [OS("tlak-in-vzgon-v-nalogah")],
    gen(level, r) {
      if (level === 1) {
        const [liq, rho] = r.pick([["vodi", 1000], ["morski vodi", 1030], ["olju", 900]]);
        const h = r.dec(0.5, 30, 1);
        const p = (rho * G * h) / 1000;
        return {
          text: `Kolikšen je hidrostatični tlak v ${liq} (${Q(rho, "kg/m^3")}) v globini ${Q(h, "m")}? Izrazi v kPa in zaokroži na eno decimalko. (${GTXT})`,
          answer: num(p, "kPa", 1),
          hint: "$p = \\rho g h$. Rezultat v Pa deli s 1000.",
          data: { given: [dat("\\rho", rho, "kg/m^3"), dat("h", tx(h), "m"), GDAT], find: ["p"] },
          formula: "p = \\rho g h",
          solution: `$p = ${rho} \\cdot 9{,}81 \\cdot ${tx(h)} = ${tx(rho * G * h, 0)}\\ \\mathrm{Pa} ${res(p, 1, "kPa")}$.`,
        };
      }
      if (level === 2) {
        const [mat, rt] = r.pick([["smrekovega lesa", 450], ["hrastovega lesa", 700], ["ledu", 920], ["plute", 240]]);
        const H = r.int(10, 50);
        const above = H * (1 - rt / 1000);
        return {
          text: `Kocka iz ${mat} (${Q(rt, "kg/m^3")}) z robom ${H} cm plava v vodi (${Q(1000, "kg/m^3")}). Koliko centimetrov kocke gleda iz vode? Zaokroži na eno decimalko.`,
          answer: num(above, "cm", 1),
          hint: "Pri plavanju je vzgon enak teži. Potopljeni del prostornine je razmerje gostot $\\rho_t / \\rho_v$.",
          data: { given: [dat("\\rho_t", rt, "kg/m^3"), dat("a", H, "cm"), dat("\\rho_v", 1000, "kg/m^3")], find: ["h_{zunaj}"] },
          formula: ["\\rho_v g V_{pot} = \\rho_t g V", "\\dfrac{h_{pot}}{a} = \\dfrac{\\rho_t}{\\rho_v}"],
          solution: `$h_{pot} = ${H} \\cdot \\dfrac{${rt}}{1000} = ${tx((H * rt) / 1000, 2)}$ cm.\n$h_{zunaj} = ${H} - ${tx((H * rt) / 1000, 2)} ${res(above, 1, "cm")}$.`,
        };
      }
      const Fa = r.dec(5, 50, 1), ratio = r.pick([2.7, 7.9, 8.9, 11.3, 2.5, 4.5]);
      const Fw = roundHalfUp(Fa * (1 - 1 / ratio), 1);
      const rho = (1000 * Fa) / (Fa - Fw);
      return {
        text: `Silomer kaže, da kamen v zraku tehta ${Q(Fa, "N")}, potopljen v vodo (${Q(1000, "kg/m^3")}) pa ${Q(Fw, "N")}. Kolikšna je gostota kamna? Zaokroži na celo število.`,
        answer: num(rho, "kg/m³", 0, { unitAlternatives: ["kg/m3"] }),
        hint: "Razlika pokazanih sil je vzgon. Iz vzgona izračunaj prostornino kamna, iz teže pa maso.",
        data: { given: [dat("F_z", tx(Fa), "N"), dat("F_v", tx(Fw), "N"), dat("\\rho_v", 1000, "kg/m^3")], find: ["\\rho"] },
        formula: ["F_{vzg} = F_z - F_v = \\rho_v g V", "\\rho = \\rho_v \\dfrac{F_z}{F_z - F_v}"],
        solution: `$F_{vzg} = ${tx(Fa)} - ${tx(Fw)} = ${tx(Fa - Fw, 1)}$ N.\n$\\rho = 1000 \\cdot \\dfrac{${tx(Fa)}}{${tx(Fa - Fw, 1)}} ${res(rho, 0, "kg/m^3")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-energija-izkoristek",
    topics: [OS("delo-energija-in-izkoristek")],
    gen(level, r) {
      if (level === 1) {
        const m = r.int(50, 800), h = r.int(3, 30), t = r.int(10, 120), eta = r.int(50, 90);
        const P = (m * G * h) / t / (eta / 100);
        return {
          text: `Dvigalo dvigne breme z maso ${m} kg za ${h} m v ${t} s. Izkoristek motorja je ${eta} %. Kolikšno električno moč porablja motor? (${GTXT}) Zaokroži na celo število.`,
          answer: num(P, "W", 0),
          hint: "Koristna moč je $\\dfrac{mgh}{t}$. Porabljena moč je večja: deli z izkoristkom.",
          data: { given: [dat("m", m, "kg"), dat("h", h, "m"), dat("t", t, "s"), `\\eta = ${eta}\\ \\%`, GDAT], find: ["P_{el}"] },
          formula: ["P_k = \\dfrac{m g h}{t}", "P_{el} = \\dfrac{P_k}{\\eta}"],
          solution: `$P_k = \\dfrac{${m} \\cdot 9{,}81 \\cdot ${h}}{${t}} = ${tx((m * G * h) / t, 1)}$ W.\n$P_{el} = \\dfrac{${tx((m * G * h) / t, 1)}}{${tx(eta / 100)}} ${res(P, 0, "W")}$.`,
        };
      }
      if (level === 2) {
        const h = r.dec(1, 40, 1), loss = r.int(5, 40);
        const v = Math.sqrt(2 * G * h * (1 - loss / 100));
        return {
          text: `Kamen pade z višine ${Q(h, "m")}. Zaradi zračnega upora se ${loss} % začetne potencialne energije pretvori v notranjo energijo. S kolikšno hitrostjo prileti na tla? (${GTXT}) Zaokroži na dve decimalki.`,
          answer: num(v, "m/s", 2),
          hint: "Kinetična energija ob tleh je preostali del potencialne energije: $\\tfrac{1}{2}mv^2 = (1 - \\text{izguba})\\, mgh$.",
          data: { given: [dat("h", tx(h), "m"), `\\text{izguba} = ${loss}\\ \\%`, GDAT], find: ["v"] },
          formula: "\\tfrac{1}{2} m v^2 = (1 - \\text{izguba}) \\, m g h",
          solution: `$v = \\sqrt{2 g h (1 - ${tx(loss / 100)})} = \\sqrt{2 \\cdot 9{,}81 \\cdot ${tx(h)} \\cdot ${tx(1 - loss / 100)}} ${res(v, 2, "m/s")}$.`,
        };
      }
      const V = r.int(20, 300), h = r.int(5, 50), eta = r.int(50, 85);
      const P = (V * G * h) / 60 / (eta / 100);
      return {
        text: `Črpalka vsako minuto načrpa ${V} litrov vode v ${h} m višji rezervoar. Izkoristek črpalke je ${eta} %. Kolikšno moč porablja? (${GTXT}, 1 liter vode ima maso 1 kg) Zaokroži na celo število.`,
        answer: num(P, "W", 0),
        hint: "V eni minuti dvigne $V$ kg vode za $h$. Koristno delo deli s 60 s in z izkoristkom.",
        data: { given: [dat("V", V, "l"), dat("h", h, "m"), `\\eta = ${eta}\\ \\%`, GDAT], find: ["P"] },
        formula: ["A = m g h", "P = \\dfrac{A}{t \\, \\eta}"],
        solution: `$A = ${V} \\cdot 9{,}81 \\cdot ${h} = ${tx(V * G * h, 0)}$ J v 60 s.\n$P = \\dfrac{${tx(V * G * h, 0)}}{60 \\cdot ${tx(eta / 100)}} ${res(P, 0, "W")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-toplotne-bilance",
    topics: [OS("toplotne-bilance")],
    gen(level, r) {
      const c = 4200, lam = 336000;
      if (level === 1) {
        const m1 = r.dec(0.2, 3, 1), T1 = r.int(10, 30), m2 = r.dec(0.2, 3, 1), T2 = r.int(50, 95);
        const T = (m1 * T1 + m2 * T2) / (m1 + m2);
        return {
          text: `V posodo nalijemo ${Q(m1, "kg")} vode s temperaturo ${T1} °C in ${Q(m2, "kg")} vode s temperaturo ${T2} °C. Kolikšna je končna temperatura, če toplote ne izgubljamo? Zaokroži na eno decimalko.`,
          answer: num(T, "°C", 1, { unitAlternatives: ["°c", "stopinj"] }),
          hint: "Toplota, ki jo odda topla voda, je enaka toploti, ki jo prejme hladna.",
          data: { given: [dat("m_1", tx(m1), "kg"), dat("T_1", T1, "°C"), dat("m_2", tx(m2), "kg"), dat("T_2", T2, "°C")], find: ["T"] },
          formula: ["m_1 c (T - T_1) = m_2 c (T_2 - T)", "T = \\dfrac{m_1 T_1 + m_2 T_2}{m_1 + m_2}"],
          solution: `$T = \\dfrac{${tx(m1)} \\cdot ${T1} + ${tx(m2)} \\cdot ${T2}}{${tx(m1)} + ${tx(m2)}} ${res(T, 1, "°C")}$.`,
        };
      }
      if (level === 2) {
        const P = r.pick([1500, 1800, 2000, 2200]), eta = r.int(75, 95), m = r.dec(0.5, 1.8, 1), T1 = r.int(10, 25);
        const t = (m * c * (100 - T1)) / (P * (eta / 100));
        return {
          text: `Grelnik vode z močjo ${P} W in izkoristkom ${eta} % segreje ${Q(m, "kg")} vode z ${T1} °C do vrelišča (100 °C). Koliko časa traja? Specifična toplota vode je ${Q(c, "J/(kg K)")}. Zaokroži na celo število sekund.`,
          answer: num(t, "s", 0),
          hint: "Potrebna toplota je $Q = m c \\Delta T$. Grelnik v sekundi odda $\\eta P$ koristne toplote.",
          data: { given: [dat("P", P, "W"), `\\eta = ${eta}\\ \\%`, dat("m", tx(m), "kg"), dat("T_1", T1, "°C"), dat("c", c, "J/(kg\\,K)")], find: ["t"] },
          formula: ["Q = m c \\Delta T", "t = \\dfrac{Q}{\\eta P}"],
          solution: `$Q = ${tx(m)} \\cdot ${c} \\cdot ${100 - T1} = ${tx(m * c * (100 - T1), 0)}$ J.\n$t = \\dfrac{${tx(m * c * (100 - T1), 0)}}{${tx(eta / 100)} \\cdot ${P}} ${res(t, 0, "s")}$.`,
        };
      }
      const mw = r.dec(0.3, 2, 1), T = r.int(20, 80), mi = r.dec(0.05, 0.8, 2);
      const Qw = mw * c * T, Qmelt = mi * lam;
      const given = [dat("m_v", tx(mw), "kg"), dat("T_v", T, "°C"), dat("m_l", tx(mi), "kg"), dat("c", c, "J/(kg\\,K)"), dat("q_t", lam / 1000, "kJ/kg")];
      const intro = `V ${Q(mw, "kg")} vode s temperaturo ${T} °C vržemo ${Q(mi, "kg")} ledu s temperaturo 0 °C. Specifična toplota vode je ${Q(c, "J/(kg K)")}, talilna toplota ledu ${Q(lam / 1000, "kJ/kg")}. Toplote ne izgubljamo.`;
      if (Qw > Qmelt) {
        const Tk = (mw * T - (mi * lam) / c) / (mw + mi);
        return {
          text: `${intro} Kolikšna je končna temperatura? Zaokroži na eno decimalko.`,
          answer: num(Tk, "°C", 1, { unitAlternatives: ["°c"] }),
          hint: "Najprej preveri, ali toplota, ki jo voda odda pri ohladitvi na 0 °C, zadošča za stalitev vsega ledu. Nato zapiši toplotno bilanco s končno temperaturo $T$.",
          data: { given, find: ["T"] },
          formula: "m_v c (T_v - T) = m_l q_t + m_l c (T - 0)",
          solution: `Voda pri ohladitvi na 0 °C odda $${tx(Qw, 0)}$ J, za taljenje je treba $${tx(Qmelt, 0)}$ J, torej se ves led stali.\n$${tx(mw)} \\cdot ${c} (${T} - T) = ${tx(mi)} \\cdot ${lam} + ${tx(mi)} \\cdot ${c} \\cdot T$\n$T = \\dfrac{${tx(mw)} \\cdot ${T} - ${tx(mi)} \\cdot ${lam}/${c}}{${tx(mw)} + ${tx(mi)}} ${res(Tk, 1, "°C")}$.`,
        };
      }
      const melted = Qw / lam;
      return {
        text: `${intro} Koliko ledu se stali? Zaokroži na tri decimalke.`,
        answer: num(melted, "kg", 3),
        hint: "Preveri, ali toplota vode pri ohladitvi na 0 °C zadošča za stalitev vsega ledu. Če ne, se voda ohladi na 0 °C in stali le del ledu.",
        data: { given, find: ["m_{stal}"] },
        formula: "m_v c (T_v - 0) = m_{stal} q_t",
        solution: `Voda pri ohladitvi na 0 °C odda $${tx(mw)} \\cdot ${c} \\cdot ${T} = ${tx(Qw, 0)}$ J, za ves led bi potrebovali $${tx(Qmelt, 0)}$ J. Toplote je premalo, končna temperatura je 0 °C.\n$m_{stal} = \\dfrac{${tx(Qw, 0)}}{${lam}} ${res(melted, 3, "kg")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-zrcala-lece",
    topics: [OS("zrcala-in-lece-v-nalogah")],
    gen(level, r) {
      if (level === 1) {
        if (r.next() < 0.5) {
          const a = r.pick([20, 24, 30, 36, 40, 45, 60, 72, 90]);
          return {
            text: `Dve ravni zrcali oklepata kot ${a}°. Med njiju postavimo svečo. Koliko slik sveče vidimo v zrcalih?`,
            answer: num(360 / a - 1),
            hint: "Za kot $\\alpha$, ki deli $360^\\circ$ brez ostanka, je število slik $\\dfrac{360^\\circ}{\\alpha} - 1$.",
            data: { given: [`\\alpha = ${a}^\\circ`], find: ["N"] },
            formula: "N = \\dfrac{360^\\circ}{\\alpha} - 1",
            solution: `$N = \\dfrac{360^\\circ}{${a}^\\circ} - 1 = ${360 / a - 1}$.`,
          };
        }
        const H = r.int(140, 195), e = r.int(6, 12);
        let who;
        return {
          text: `${(who = NAMES[r.int(0, 11)])} je ${g(who, "visok", "visoka")} ${H} cm, oči ima ${e} cm pod temenom. Najmanj kako visoko mora biti navpično ravno zrcalo na steni, da se v njem vidi v celoti?`,
          answer: num(H / 2, "cm", 1),
          hint: "Žarek od stopal se odbije na polovici višine med očmi in stopali; žarek od temena na polovici med temenom in očmi.",
          data: { given: [dat("H", H, "cm"), dat("e", e, "cm")], find: ["h"] },
          formula: "h = \\dfrac{H}{2}",
          solution: `Spodnji rob zrcala mora biti na višini $\\dfrac{${H} - ${e}}{2}$, zgornji na $${H} - \\dfrac{${e}}{2}$. Razlika je $\\dfrac{${H}}{2} ${res(H / 2, 1, "cm")}$ (neodvisno od oddaljenosti in od $e$).`,
        };
      }
      const f = r.int(5, 30), a = r.int(f + 2, 4 * f);
      const b = (a * f) / (a - f);
      if (level === 2) {
        return {
          text: `Predmet stoji ${a} cm pred zbiralno lečo z goriščno razdaljo ${f} cm. Kako daleč za lečo nastane slika? Zaokroži na eno decimalko.`,
          answer: num(b, "cm", 1),
          hint: "Enačba leče: $\\dfrac{1}{f} = \\dfrac{1}{a} + \\dfrac{1}{b}$.",
          data: { given: [dat("a", a, "cm"), dat("f", f, "cm")], find: ["b"] },
          formula: "\\dfrac{1}{f} = \\dfrac{1}{a} + \\dfrac{1}{b}",
          solution: `$\\dfrac{1}{b} = \\dfrac{1}{${f}} - \\dfrac{1}{${a}}$, $b = \\dfrac{a f}{a - f} = \\dfrac{${a} \\cdot ${f}}{${a - f}} ${res(b, 1, "cm")}$.`,
        };
      }
      const P = r.dec(1, 8, 1);
      const S = (P * b) / a;
      return {
        text: `Predmet z višino ${Q(P, "cm")} stoji ${a} cm pred zbiralno lečo z goriščno razdaljo ${f} cm. Kako visoka je slika? Zaokroži na dve decimalki.`,
        answer: num(S, "cm", 2),
        hint: "Najprej z enačbo leče izračunaj razdaljo slike $b$, nato povečavo $\\dfrac{S}{P} = \\dfrac{b}{a}$.",
        data: { given: [dat("P", tx(P), "cm"), dat("a", a, "cm"), dat("f", f, "cm")], find: ["S"] },
        formula: ["\\dfrac{1}{f} = \\dfrac{1}{a} + \\dfrac{1}{b}", "\\dfrac{S}{P} = \\dfrac{b}{a}"],
        solution: `$b = \\dfrac{${a} \\cdot ${f}}{${a - f}} = ${tx(b, 3)}$ cm.\n$S = P \\cdot \\dfrac{b}{a} = ${tx(P)} \\cdot \\dfrac{${tx(b, 3)}}{${a}} ${res(S, 2, "cm")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-vezja",
    topics: [OS("vezja-z-vec-porabniki")],
    gen(level, r) {
      const R1 = r.int(2, 30), R2 = r.int(5, 60), R3 = r.int(5, 60), U = r.pick([6, 9, 12, 18, 24, 230 / 10]);
      const Rp = (R2 * R3) / (R2 + R3), R = R1 + Rp, I = U / R, U23 = I * Rp;
      const text = `Upornik $R_1 = ${R1}\\ \\Omega$ je zaporedno vezan z vzporedno vezavo upornikov $R_2 = ${R2}\\ \\Omega$ in $R_3 = ${R3}\\ \\Omega$. Vezje je priključeno na napetost ${Q(U, "V")}.`;
      const given = [dat("R_1", R1, "\\Omega"), dat("R_2", R2, "\\Omega"), dat("R_3", R3, "\\Omega"), dat("U", tx(U), "V")];
      const base = `$R_{23} = \\dfrac{${R2} \\cdot ${R3}}{${R2} + ${R3}} = ${tx(Rp, 3)}\\ \\Omega$, $R = ${R1} + ${tx(Rp, 3)} = ${tx(R, 3)}\\ \\Omega$, $I = \\dfrac{${tx(U)}}{${tx(R, 3)}} = ${tx(I, 4)}$ A`;
      if (level === 1) {
        return {
          text: `${text} Kolikšen tok teče iz vira? Zaokroži na tri decimalke.`,
          answer: num(I, "A", 3),
          hint: "Najprej nadomesti vzporedna upornika z enim, nato prištej zaporednega.",
          data: { given, find: ["I"] },
          formula: ["R_{23} = \\dfrac{R_2 R_3}{R_2 + R_3}", "I = \\dfrac{U}{R_1 + R_{23}}"],
          solution: `$R_{23} = \\dfrac{${R2} \\cdot ${R3}}{${R2} + ${R3}} = ${tx(Rp, 3)}\\ \\Omega$, $R = ${R1} + ${tx(Rp, 3)} = ${tx(R, 3)}\\ \\Omega$.\n$I = \\dfrac{${tx(U)}}{${tx(R, 3)}} ${res(I, 3, "A")}$.`,
        };
      }
      const I2 = U23 / R2;
      if (level === 2) {
        return {
          text: `${text} Kolikšen tok teče skozi upornik $R_2$? Zaokroži na tri decimalke.`,
          answer: num(I2, "A", 3),
          hint: "Izračunaj skupni tok, nato napetost na vzporedni vezavi $U_{23} = I R_{23}$ in tok $I_2 = U_{23} / R_2$.",
          data: { given, find: ["I_2"] },
          formula: ["I = \\dfrac{U}{R_1 + R_{23}}", "U_{23} = I R_{23}", "I_2 = \\dfrac{U_{23}}{R_2}"],
          solution: `${base}.\n$U_{23} = I R_{23} = ${tx(U23, 3)}$ V, $I_2 = \\dfrac{${tx(U23, 3)}}{${R2}} ${res(I2, 3, "A")}$.`,
        };
      }
      const P3 = (U23 * U23) / R3;
      return {
        text: `${text} Kolikšna moč se troši na uporniku $R_3$? Zaokroži na dve decimalki.`,
        answer: num(P3, "W", 2),
        hint: "Poišči napetost na vzporedni vezavi, nato $P_3 = \\dfrac{U_{23}^2}{R_3}$.",
        data: { given, find: ["P_3"] },
        formula: ["U_{23} = U \\dfrac{R_{23}}{R_1 + R_{23}}", "P_3 = \\dfrac{U_{23}^2}{R_3}"],
        solution: `${base}.\n$U_{23} = ${tx(U23, 3)}$ V, $P_3 = \\dfrac{${tx(U23, 3)}^2}{${R3}} ${res(P3, 2, "W")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-elektrika-dom",
    topics: [OS("elektricna-energija-in-moc-v-gospodinjstvu")],
    gen(level, r) {
      if (level === 1) {
        const items = r.shuffle([["hladilnik", 150, 10], ["televizor", 120, 4], ["računalnik", 300, 5], ["sesalnik", 1600, 0.5], ["pralni stroj", 2000, 1], ["žarnica LED", 9, 6]]).slice(0, 3);
        const price = r.pick([0.15, 0.18, 0.2, 0.22, 0.25]), days = 30;
        const kwh = items.reduce((s, [, P, h]) => s + (P * h * days) / 1000, 0);
        const cost = kwh * price;
        return {
          text: `V mesecu s ${days} dnevi vsak dan ${items.map(([n, P, h]) => `${n} (${P} W) deluje ${tx(h)} h`).join(", ")}. Koliko stane porabljena električna energija, če je cena ${Q(price, "€/kWh")}? Zaokroži na dve decimalki.`,
          answer: num(cost, "€", 2, { unitAlternatives: ["eur", "evrov", "€"] }),
          hint: "Energija = moč × čas. Moč pretvori v kW, čas v ure; seštej za vse naprave in pomnoži s ceno.",
          data: { given: [...items.flatMap(([, P, h], i) => [`P_${i + 1} = ${P}\\ \\mathrm{W}`, `t_${i + 1} = ${tx(h)}\\ \\mathrm{h}`]), dat("\\text{cena}", tx(price), "€/kWh")], find: ["\\text{strošek}"] },
          formula: ["W = P \\cdot t", "\\text{strošek} = W \\cdot \\text{cena}"],
          solution: `${items.map(([n, P, h]) => `${n}: $${tx(P / 1000)} \\cdot ${tx(h)} \\cdot ${days} = ${tx((P * h * days) / 1000)}$ kWh`).join("; ")}.\nSkupaj $${tx(kwh)}$ kWh, strošek $${tx(kwh)} \\cdot ${tx(price)} ${res(cost, 2, "€")}$.`,
        };
      }
      if (level === 2) {
        const P = r.pick([40, 60, 75, 100, 1000, 2000]), U = 230;
        const R = (U * U) / P;
        return {
          text: `Na grelniku piše ${U} V, ${P} W. Kolikšen je upor grelne žice med delovanjem? Zaokroži na eno decimalko.`,
          answer: num(R, "Ω", 1, { unitAlternatives: ["ohm", "ohmov", "Ω"] }),
          hint: "$P = U I$ in $U = R I$, zato $P = \\dfrac{U^2}{R}$.",
          data: { given: [dat("U", U, "V"), dat("P", P, "W")], find: ["R"] },
          formula: "R = \\dfrac{U^2}{P}",
          solution: `$R = \\dfrac{${U}^2}{${P}} ${res(R, 1, "\\Omega")}$.`,
        };
      }
      const P = r.pick([1000, 1500, 2000, 2500]), U = 230, U2 = r.int(190, 220);
      const P2 = P * (U2 / U) ** 2;
      return {
        text: `Grelnik ima pri napetosti ${U} V moč ${P} W. Zvečer napetost v omrežju pade na ${U2} V. Kolikšna je takrat moč grelnika (upor se ne spremeni)? Zaokroži na celo število.`,
        answer: num(P2, "W", 0),
        hint: "Upor je enak, moč je sorazmerna s kvadratom napetosti.",
        data: { given: [dat("U", U, "V"), dat("P", P, "W"), dat("U'", U2, "V")], find: ["P'"] },
        formula: ["R = \\dfrac{U^2}{P}", "P' = P \\left(\\dfrac{U'}{U}\\right)^2"],
        solution: `$P' = ${P} \\cdot \\left(\\dfrac{${U2}}{${U}}\\right)^2 ${res(P2, 0, "W")}$ (moč pade za ${tx((1 - P2 / P) * 100, 1)} %, napetost le za ${tx((1 - U2 / U) * 100, 1)} %).`,
      };
    },
  },
  {
    id: "tek-fiz-meritve",
    topics: [OS("nacrtovanje-poskusa-in-obdelava-meritev")],
    gen(level, r) {
      if (level <= 2) {
        const k = level === 1 ? r.int(20, 120) : r.int(500, 9000);
        const xs = level === 1 ? [2, 4, 6, 8] : [10, 20, 30, 40];
        const ys = xs.map((x) => roundHalfUp((k * x * (1 + r.dec(-0.03, 0.03, 3))) / (level === 1 ? 100 : 1000), level === 1 ? 2 : 1));
        const ratios = ys.map((y, i) => y / (xs[i] / (level === 1 ? 100 : 1)));
        const kk = avg(ratios);
        const lbl = level === 1 ? ["raztezek vzmeti", "cm", "sila", "N", "koeficient vzmeti", "N/m"] : ["prostornina", "cm³", "masa", "g", "gostoto", "g/cm³"];
        const table = xs.map((x, i) => `${x} ${lbl[1]} → ${tx(ys[i])} ${lbl[3]}`).join("; ");
        const kk2 = level === 1 ? kk : avg(ys.map((y, i) => y / xs[i]));
        return {
          text: `Pri poskusu smo izmerili pare (${lbl[0]} → ${lbl[2]}): ${table}. Izračunaj ${lbl[4]} kot povprečje razmerij ${level === 1 ? "sila/raztezek (raztezek pretvori v metre)" : "masa/prostornina"}. Zaokroži na ${level === 1 ? "eno decimalko" : "tri decimalke"}.`,
          answer: num(kk2, lbl[5], level === 1 ? 1 : 3, { unitAlternatives: level === 1 ? ["N/m"] : ["g/cm3", "g/cm³"] }),
          hint: "Za vsak par izračunaj razmerje, nato povprečje. Pri vzmeti pazi na enote (1 cm = 0,01 m).",
          data: { given: xs.flatMap((x, i) => [`${level === 1 ? "x" : "V"}_${i + 1} = ${x}\\ \\mathrm{${level === 1 ? "cm" : "cm^3"}}`, `${level === 1 ? "F" : "m"}_${i + 1} = ${tx(ys[i])}\\ \\mathrm{${lbl[3]}}`]), find: [level === 1 ? "k" : "\\rho"] },
          formula: level === 1 ? "k = \\dfrac{F}{x}" : "\\rho = \\dfrac{m}{V}",
          solution: `Razmerja: ${(level === 1 ? ratios : ys.map((y, i) => y / xs[i])).map((q) => `$${tx(q, 3)}$`).join(", ")}.\nPovprečje: $${level === 1 ? "k" : "\\rho"} ${res(kk2, level === 1 ? 1 : 3, level === 1 ? "N/m" : "g/cm³")}$.`,
        };
      }
      const l = r.dec(0.3, 1.5, 2);
      const T = 2 * Math.PI * Math.sqrt(l / G);
      const t10 = roundHalfUp(10 * T * (1 + r.dec(-0.01, 0.01, 3)), 2);
      const gm = (4 * Math.PI ** 2 * l) / (t10 / 10) ** 2;
      return {
        text: `Nitno nihalo ima dolžino ${Q(l, "m")}. Čas 10 nihajev je ${Q(t10, "s")}. Kolikšen težni pospešek dobimo iz te meritve? Zaokroži na dve decimalki.`,
        answer: num(gm, "m/s²", 2, { unitAlternatives: ["m/s2"] }),
        hint: "Nihajni čas je čas enega nihaja. Iz $t_0 = 2\\pi\\sqrt{l/g}$ izrazi $g$.",
        data: { given: [dat("l", tx(l), "m"), dat("t_{10}", tx(t10), "s")], find: ["g"] },
        formula: ["t_0 = 2\\pi \\sqrt{\\dfrac{l}{g}}", "g = \\dfrac{4\\pi^2 l}{t_0^2}"],
        solution: `$t_0 = \\dfrac{${tx(t10)}}{10} = ${tx(t10 / 10, 3)}$ s.\n$g = \\dfrac{4\\pi^2 \\cdot ${tx(l)}}{${tx(t10 / 10, 3)}^2} ${res(gm, 2, "m/s^2")}$.`,
      };
    },
  },
  // ================================================================ SŠ
  {
    id: "tek-fiz-met",
    topics: [SS("posevni-met-in-gibanje-v-ravnini")],
    gen(level, r) {
      if (level === 1) {
        const h = r.dec(1, 50, 1), v = r.int(2, 30);
        const t = Math.sqrt((2 * h) / G), x = v * t;
        return {
          text: `Žogo vržemo vodoravno s hitrostjo ${Q(v, "m/s")} z višine ${Q(h, "m")}. Kako daleč od mesta pod točko meta pade na tla? Zračni upor zanemarimo. (${GTXT}) Zaokroži na dve decimalki.`,
          answer: num(x, "m", 2),
          hint: "Navpično gibanje je prosti pad, vodoravno enakomerno. Čas padanja je odvisen le od višine.",
          data: { given: [dat("v_0", v, "m/s"), dat("h", tx(h), "m"), GDAT], find: ["x"] },
          formula: ["t = \\sqrt{\\dfrac{2h}{g}}", "x = v_0 t"],
          solution: `$t = \\sqrt{\\dfrac{2 \\cdot ${tx(h)}}{9{,}81}} = ${tx(t, 3)}$ s.\n$x = ${v} \\cdot ${tx(t, 3)} ${res(x, 2, "m")}$.`,
        };
      }
      const v = r.int(5, 40), a = r.int(15, 75);
      if (level === 2) {
        const R = (v * v * Math.sin(deg(2 * a))) / G, H = (v * Math.sin(deg(a))) ** 2 / (2 * G);
        const askH = r.next() < 0.4;
        return {
          text: `Kamen vržemo s tal s hitrostjo ${Q(v, "m/s")} pod kotom ${a}° glede na vodoravnico. ${askH ? "Kako visoko se dvigne?" : "Kako daleč pade?"} Zračni upor zanemarimo. (${GTXT}) Zaokroži na dve decimalki.`,
          answer: num(askH ? H : R, "m", 2),
          hint: "Razstavi začetno hitrost na vodoravno $v_0 \\cos\\alpha$ in navpično $v_0 \\sin\\alpha$ komponento.",
          data: { given: [dat("v_0", v, "m/s"), `\\alpha = ${a}^\\circ`, GDAT], find: [askH ? "h_{\\max}" : "D"] },
          formula: askH ? "h_{\\max} = \\dfrac{(v_0 \\sin\\alpha)^2}{2g}" : "D = \\dfrac{v_0^2 \\sin 2\\alpha}{g}",
          solution: askH
            ? `$h_{\\max} = \\dfrac{(${v} \\cdot \\sin ${a}^\\circ)^2}{2 \\cdot 9{,}81} ${res(H, 2, "m")}$.`
            : `$D = \\dfrac{${v}^2 \\cdot \\sin ${2 * a}^\\circ}{9{,}81} ${res(R, 2, "m")}$.`,
        };
      }
      const h = r.dec(1, 30, 1);
      const vy = v * Math.sin(deg(a)), vx = v * Math.cos(deg(a));
      const t = (vy + Math.sqrt(vy * vy + 2 * G * h)) / G;
      return {
        text: `S stolpa, visokega ${Q(h, "m")}, vržemo kamen s hitrostjo ${Q(v, "m/s")} pod kotom ${a}° navzgor glede na vodoravnico. Kako daleč od vznožja stolpa pade? Zračni upor zanemarimo. (${GTXT}) Zaokroži na dve decimalki.`,
        answer: num(vx * t, "m", 2),
        hint: "Čas leta dobiš iz navpične enačbe $0 = h + v_0 \\sin\\alpha \\, t - \\tfrac{1}{2} g t^2$ (pozitivna rešitev).",
        data: { given: [dat("h", tx(h), "m"), dat("v_0", v, "m/s"), `\\alpha = ${a}^\\circ`, GDAT], find: ["D"] },
        formula: ["0 = h + v_0 \\sin\\alpha \\, t - \\tfrac{1}{2} g t^2", "D = v_0 \\cos\\alpha \\, t"],
        solution: `$v_y = ${tx(vy, 3)}$ m/s, $v_x = ${tx(vx, 3)}$ m/s.\n$t = \\dfrac{v_y + \\sqrt{v_y^2 + 2gh}}{g} = ${tx(t, 3)}$ s.\n$D = v_x t ${res(vx * t, 2, "m")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-klanec",
    topics: [SS("newtonovi-zakoni-s-trenjem-in-klanci")],
    gen(level, r) {
      if (level === 1) {
        let a, mu, acc;
        do (a = r.int(20, 60)), (mu = r.dec(0.05, 0.5, 2)), (acc = G * (Math.sin(deg(a)) - mu * Math.cos(deg(a))));
        while (acc < 0.3);
        return {
          text: `Klada drsi po klancu z naklonom ${a}°. Koeficient trenja je ${tx(mu)}. Kolikšen je pospešek klade? (${GTXT}) Zaokroži na dve decimalki.`,
          answer: num(acc, "m/s²", 2, { unitAlternatives: ["m/s2"] }),
          hint: "Vzdolž klanca delujeta dinamična komponenta teže $mg\\sin\\alpha$ in trenje $\\mu mg\\cos\\alpha$.",
          data: { given: [`\\alpha = ${a}^\\circ`, `\\mu = ${tx(mu)}`, GDAT], find: ["a"] },
          formula: "a = g(\\sin\\alpha - \\mu \\cos\\alpha)",
          solution: `$a = 9{,}81 \\cdot (\\sin ${a}^\\circ - ${tx(mu)} \\cdot \\cos ${a}^\\circ) ${res(acc, 2, "m/s^2")}$.`,
        };
      }
      if (level === 2) {
        const m1 = r.dec(1, 10, 1), m2 = r.dec(0.5, 9, 1);
        if (m1 === m2) return null;
        const [M, m] = m1 > m2 ? [m1, m2] : [m2, m1];
        const T = (2 * M * m * G) / (M + m);
        return {
          text: `Čez lahek škripec brez trenja je napeljana vrv, na kateri visita uteži z masama ${Q(M, "kg")} in ${Q(m, "kg")}. Kolikšna je sila v vrvi med gibanjem? (${GTXT}) Zaokroži na dve decimalki.`,
          answer: num(T, "N", 2),
          hint: "Zapiši Newtonov zakon za vsako utež posebej; pospešek je za obe enak.",
          data: { given: [dat("m_1", tx(M), "kg"), dat("m_2", tx(m), "kg"), GDAT], find: ["F_v"] },
          formula: ["a = \\dfrac{(m_1 - m_2) g}{m_1 + m_2}", "F_v = m_2 (g + a) = \\dfrac{2 m_1 m_2 g}{m_1 + m_2}"],
          solution: `$a = \\dfrac{(${tx(M)} - ${tx(m)}) \\cdot 9{,}81}{${tx(M + m)}} = ${tx(((M - m) * G) / (M + m), 3)}$ m/s².\n$F_v = ${tx(m)} \\cdot (9{,}81 + ${tx(((M - m) * G) / (M + m), 3)}) ${res(T, 2, "N")}$.`,
        };
      }
      let m1, m2, mu, acc;
      do (m1 = r.dec(1, 8, 1)), (m2 = r.dec(0.5, 6, 1)), (mu = r.dec(0.1, 0.5, 2)), (acc = ((m2 - mu * m1) * G) / (m1 + m2));
      while (acc < 0.2);
      return {
        text: `Klada z maso ${Q(m1, "kg")} leži na vodoravni mizi (koeficient trenja ${tx(mu)}). Z vrvjo čez škripec na robu mize je povezana z utežjo z maso ${Q(m2, "kg")}, ki visi. Kolikšen je pospešek sistema? (${GTXT}) Zaokroži na dve decimalki.`,
        answer: num(acc, "m/s²", 2, { unitAlternatives: ["m/s2"] }),
        hint: "Sistem poganja teža viseče uteži, zavira ga trenje na mizi. Pospešuje se skupna masa obeh teles.",
        data: { given: [dat("m_1", tx(m1), "kg"), `\\mu = ${tx(mu)}`, dat("m_2", tx(m2), "kg"), GDAT], find: ["a"] },
        formula: "a = \\dfrac{(m_2 - \\mu m_1) g}{m_1 + m_2}",
        solution: `$a = \\dfrac{(${tx(m2)} - ${tx(mu)} \\cdot ${tx(m1)}) \\cdot 9{,}81}{${tx(m1)} + ${tx(m2)}} ${res(acc, 2, "m/s^2")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-trki",
    topics: [SS("gibalna-kolicina-in-trki")],
    gen(level, r) {
      if (level <= 2) {
        const m1 = r.int(500, 2000), v1 = r.int(5, 30), m2 = r.int(500, 3000), v2 = r.int(-20, 10);
        const u = (m1 * v1 + m2 * v2) / (m1 + m2);
        const text = `Avto z maso ${m1} kg vozi s hitrostjo ${Q(v1, "m/s")} in trči v ${v2 < 0 ? "nasproti vozeči" : v2 === 0 ? "mirujoči" : "pred njim vozeči"} avto z maso ${m2} kg${v2 ? `, ki ima hitrost ${Q(Math.abs(v2), "m/s")}` : ""}. Po trku se gibljeta skupaj.`;
        const given = [dat("m_1", m1, "kg"), dat("v_1", v1, "m/s"), dat("m_2", m2, "kg"), dat("v_2", Math.abs(v2), "m/s")];
        if (level === 1) {
          return {
            text: `${text} Kolikšna je velikost njune skupne hitrosti po trku? Zaokroži na dve decimalki.`,
            answer: num(Math.abs(u), "m/s", 2),
            hint: "Gibalna količina se ohrani. Pazi na smer: hitrost v nasprotni smeri je negativna.",
            data: { given: v2 ? given : given.slice(0, 3), find: ["u"] },
            formula: "m_1 v_1 + m_2 v_2 = (m_1 + m_2) u",
            solution: `$u = \\dfrac{${m1} \\cdot ${v1} + ${m2} \\cdot ${par0(v2)}}{${m1} + ${m2}} ${res(u, 2, "m/s")}$${u < 0 ? " (v smeri drugega avta)" : ""}.`,
          };
        }
        const dE = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2 - 0.5 * (m1 + m2) * u * u;
        return {
          text: `${text} Koliko kinetične energije se pri trku pretvori v druge oblike? Izrazi v kJ in zaokroži na eno decimalko.`,
          answer: num(dE / 1000, "kJ", 1),
          hint: "Iz ohranitve gibalne količine izračunaj skupno hitrost, nato primerjaj kinetično energijo pred trkom in po njem.",
          data: { given: v2 ? given : given.slice(0, 3), find: ["\\Delta W_k"] },
          formula: ["m_1 v_1 + m_2 v_2 = (m_1 + m_2) u", "\\Delta W_k = \\tfrac{1}{2} m_1 v_1^2 + \\tfrac{1}{2} m_2 v_2^2 - \\tfrac{1}{2}(m_1 + m_2) u^2"],
          solution: `$u = ${tx(u, 3)}$ m/s.\n$\\Delta W_k = ${tx(0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2, 0)} - ${tx(0.5 * (m1 + m2) * u * u, 0)} = ${tx(dE, 0)}\\ \\mathrm{J} ${res(dE / 1000, 1, "kJ")}$.`,
        };
      }
      const m = r.int(5, 30), v = r.int(200, 800), M = r.dec(1, 5, 1);
      const u = ((m / 1000) * v) / (m / 1000 + M), h = (u * u) / (2 * G);
      return {
        text: `Izstrelek z maso ${m} g in hitrostjo ${Q(v, "m/s")} se zarije v leseno klado z maso ${Q(M, "kg")}, ki visi na dolgi vrvi (balistično nihalo). Za koliko centimetrov se klada dvigne? (${GTXT}) Zaokroži na eno decimalko.`,
        answer: num(h * 100, "cm", 1),
        hint: "Trk je neprožen: ohrani se gibalna količina. Nato se ohrani energija: $\\tfrac{1}{2}(m+M)u^2 = (m+M) g h$.",
        data: { given: [dat("m", m, "g"), dat("v", v, "m/s"), dat("M", tx(M), "kg"), GDAT], find: ["h"] },
        formula: ["m v = (m + M) u", "h = \\dfrac{u^2}{2g}"],
        solution: `$u = \\dfrac{${tx(m / 1000)} \\cdot ${v}}{${tx(m / 1000)} + ${tx(M)}} = ${tx(u, 3)}$ m/s.\n$h = \\dfrac{${tx(u, 3)}^2}{2 \\cdot 9{,}81} = ${tx(h, 4)}\\ \\mathrm{m} ${res(h * 100, 1, "cm")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-navor",
    topics: [SS("vrtenje-in-navor")],
    gen(level, r) {
      if (level === 1) {
        const L = r.int(2, 8), M = r.int(5, 50), m = r.int(10, 100), x = r.dec(0.5, L - 0.5, 1);
        // Drog na podporah na koncih A in B, breme m na razdalji x od A. Sila podpore B.
        const FB = (M * G * (L / 2) + m * G * x) / L;
        return {
          text: `Homogena greda z dolžino ${L} m in maso ${M} kg leži na podporah na obeh koncih $A$ in $B$. Na razdalji ${Q(x, "m")} od $A$ stoji breme z maso ${m} kg. S kolikšno silo deluje podpora v $B$? (${GTXT}) Zaokroži na eno decimalko.`,
          answer: num(FB, "N", 1),
          hint: "Zapiši ravnovesje navorov okoli točke $A$: sila v $B$ krat $L$ je enaka vsoti navorov teže grede in bremena.",
          data: { given: [dat("L", L, "m"), dat("M", M, "kg"), dat("x", tx(x), "m"), dat("m", m, "kg"), GDAT], find: ["F_B"] },
          formula: "F_B L = M g \\tfrac{L}{2} + m g x",
          solution: `$F_B = \\dfrac{${M} \\cdot 9{,}81 \\cdot ${tx(L / 2)} + ${m} \\cdot 9{,}81 \\cdot ${tx(x)}}{${L}} ${res(FB, 1, "N")}$.`,
        };
      }
      if (level === 2) {
        const [name, k, acc] = r.pick([["poln valj", 0.5, "poln valj"], ["polna krogla", 0.4, "polno kroglo"], ["tanek obroč", 1, "tanek obroč"], ["tanka votla krogla", 2 / 3, "tanko votlo kroglo"]]);
        const h = r.dec(0.2, 5, 1);
        const v = Math.sqrt((2 * G * h) / (1 + k));
        return {
          text: `${name.charAt(0).toUpperCase() + name.slice(1)} se brez drsenja skotali s klanca z višinsko razliko ${Q(h, "m")}. Kolikšna je hitrost ${name.includes("krogla") ? "njenega" : "njegovega"} težišča na dnu? Za ${acc} je $J = ${k === 0.5 ? "\\tfrac{1}{2}" : k === 0.4 ? "\\tfrac{2}{5}" : k === 1 ? "" : "\\tfrac{2}{3}"} m r^2$. (${GTXT}) Zaokroži na dve decimalki.`,
          answer: num(v, "m/s", 2),
          hint: "Potencialna energija se pretvori v translacijsko in rotacijsko kinetično energijo; pri kotaljenju je $v = \\omega r$.",
          data: { given: [dat("h", tx(h), "m"), GDAT], find: ["v"] },
          formula: ["m g h = \\tfrac{1}{2} m v^2 + \\tfrac{1}{2} J \\omega^2", "v = \\sqrt{\\dfrac{2 g h}{1 + J/(m r^2)}}"],
          solution: `$v = \\sqrt{\\dfrac{2 \\cdot 9{,}81 \\cdot ${tx(h)}}{1 + ${tx(k, 3)}}} ${res(v, 2, "m/s")}$.`,
        };
      }
      const L = r.dec(1, 4, 1), M = r.int(5, 40), m = r.int(0, 50), a = r.int(20, 60);
      const T = ((M * G) / 2 + m * G) / Math.sin(deg(a));
      return {
        text: `Homogen drog z maso ${M} kg in dolžino ${Q(L, "m")} je na enem koncu pritrjen na steno s tečajem in drži vodoravno. Drugi konec drži vrv, ki z drogom oklepa kot ${a}°.${m ? ` Na tem koncu visi še breme z maso ${m} kg.` : ""} Kolikšna je sila v vrvi? (${GTXT}) Zaokroži na eno decimalko.`,
        answer: num(T, "N", 1),
        hint: "Navore računaj okoli tečaja: sila tečaja nima navora. Navor vrvi je $F_v L \\sin\\alpha$.",
        data: { given: [dat("M", M, "kg"), dat("L", tx(L), "m"), `\\alpha = ${a}^\\circ`, ...(m ? [dat("m", m, "kg")] : []), GDAT], find: ["F_v"] },
        formula: "F_v L \\sin\\alpha = M g \\tfrac{L}{2} + m g L",
        solution: `Dolžina se pokrajša: $F_v = \\dfrac{${M} \\cdot 9{,}81 / 2 + ${m} \\cdot 9{,}81}{\\sin ${a}^\\circ} ${res(T, 1, "N")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-gravitacija",
    topics: [SS("gravitacija-in-krozenje")],
    gen(level, r) {
      if (level === 1) {
        const mu = r.dec(0.3, 0.9, 2), R = r.int(20, 300);
        const v = Math.sqrt(mu * G * R) * 3.6;
        return {
          text: `Avto vozi skozi vodoraven ovinek s polmerom ${R} m. Koeficient lepenja med gumami in cesto je ${tx(mu)}. Kolikšna je največja hitrost, pri kateri avto še ne zdrsne? Izrazi v km/h. (${GTXT}) Zaokroži na eno decimalko.`,
          answer: num(v, "km/h", 1),
          hint: "Centripetalno silo zagotavlja sila lepenja: $\\dfrac{mv^2}{r} \\le \\mu m g$.",
          data: { given: [dat("r", R, "m"), `\\mu = ${tx(mu)}`, GDAT], find: ["v_{\\max}"] },
          formula: "v_{\\max} = \\sqrt{\\mu g r}",
          solution: `$v_{\\max} = \\sqrt{${tx(mu)} \\cdot 9{,}81 \\cdot ${R}} = ${tx(v / 3.6, 3)}\\ \\mathrm{m/s} ${res(v, 1, "km/h")}$.`,
        };
      }
      if (level === 2) {
        const h = r.int(200, 2000), R = 6370, g0 = G;
        const rr = (R + h) * 1000;
        const T = (2 * Math.PI * Math.sqrt(rr ** 3 / (g0 * (R * 1000) ** 2))) / 60;
        return {
          text: `Satelit kroži ${h} km nad površjem Zemlje. Polmer Zemlje je ${R} km, težni pospešek na površju ${GTXT.replace(/\$/g, "$")}. Kolikšen je obhodni čas satelita v minutah? Zaokroži na eno decimalko.`,
          answer: num(T, "min", 1),
          hint: "Gravitacija je centripetalna sila: $\\dfrac{GMm}{r^2} = m \\dfrac{4\\pi^2}{T^2} r$, pri čemer je $GM = g R^2$.",
          data: { given: [dat("h", h, "km"), dat("R", R, "km"), GDAT], find: ["T"] },
          formula: ["GM = g R^2", "T = 2\\pi \\sqrt{\\dfrac{r^3}{g R^2}}, \\; r = R + h"],
          solution: `$r = ${R} + ${h} = ${R + h}$ km.\n$T = 2\\pi \\sqrt{\\dfrac{(${R + h} \\cdot 10^3)^3}{9{,}81 \\cdot (${R} \\cdot 10^3)^2}} = ${tx(T * 60, 0)}\\ \\mathrm{s} ${res(T, 1, "min")}$.`,
        };
      }
      const r1 = r.dec(0.4, 2, 2), T1 = r.dec(0.2, 3, 2), r2 = r.dec(2, 30, 1);
      const T2 = T1 * (r2 / r1) ** 1.5;
      return {
        text: `Planet A kroži okoli zvezde v povprečni razdalji ${tx(r1)} a.e. z obhodnim časom ${tx(T1)} leta. Planet B kroži okoli iste zvezde v razdalji ${tx(r2)} a.e. Kolikšen je njegov obhodni čas v letih? Zaokroži na dve decimalki.`,
        answer: num(T2, "let", 2, { unitAlternatives: ["leta", "let", "leti", "leto"] }),
        hint: "Tretji Keplerjev zakon: $\\dfrac{T^2}{a^3}$ je za vse planete iste zvezde enak.",
        data: { given: [`a_1 = ${tx(r1)}\\ \\text{a.e.}`, `T_1 = ${tx(T1)}\\ \\text{let}`, `a_2 = ${tx(r2)}\\ \\text{a.e.}`], find: ["T_2"] },
        formula: "\\dfrac{T_1^2}{a_1^3} = \\dfrac{T_2^2}{a_2^3}",
        solution: `$T_2 = T_1 \\left(\\dfrac{a_2}{a_1}\\right)^{3/2} = ${tx(T1)} \\cdot \\left(\\dfrac{${tx(r2)}}{${tx(r1)}}\\right)^{3/2} ${res(T2, 2, "\\text{let}")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-nihanje",
    topics: [SS("nihanje-in-valovanje")],
    gen(level, r) {
      if (level === 1) {
        const T = r.dec(0.8, 4, 2);
        const l = (G * T * T) / (4 * Math.PI ** 2);
        return {
          text: `Kako dolgo mora biti matematično nihalo, da je njegov nihajni čas ${Q(T, "s")}? (${GTXT}) Zaokroži na tri decimalke.`,
          answer: num(l, "m", 3),
          hint: "$t_0 = 2\\pi\\sqrt{l/g}$. Izrazi $l$.",
          data: { given: [dat("t_0", tx(T), "s"), GDAT], find: ["l"] },
          formula: "l = \\dfrac{g t_0^2}{4\\pi^2}",
          solution: `$l = \\dfrac{9{,}81 \\cdot ${tx(T)}^2}{4\\pi^2} ${res(l, 3, "m")}$.`,
        };
      }
      if (level === 2) {
        const m = r.dec(0.1, 3, 2), k = r.int(10, 500), add = r.dec(0.1, 2, 2);
        const T1 = 2 * Math.PI * Math.sqrt(m / k), T2 = 2 * Math.PI * Math.sqrt((m + add) / k);
        return {
          text: `Utež z maso ${Q(m, "kg")} niha na vzmeti s koeficientom ${Q(k, "N/m")}. Za koliko sekund se podaljša nihajni čas, če dodamo še ${Q(add, "kg")}? Zaokroži na tri decimalke.`,
          answer: num(T2 - T1, "s", 3),
          hint: "Nihajni čas vzmetnega nihala: $t_0 = 2\\pi\\sqrt{m/k}$. Izračunaj oba in odštej.",
          data: { given: [dat("m", tx(m), "kg"), dat("k", k, "N/m"), dat("\\Delta m", tx(add), "kg")], find: ["\\Delta t_0"] },
          formula: "t_0 = 2\\pi\\sqrt{\\dfrac{m}{k}}",
          solution: `$t_1 = 2\\pi\\sqrt{\\dfrac{${tx(m)}}{${k}}} = ${tx(T1, 4)}$ s, $t_2 = 2\\pi\\sqrt{\\dfrac{${tx(m + add)}}{${k}}} = ${tx(T2, 4)}$ s.\n$\\Delta t_0 ${res(T2 - T1, 3, "s")}$.`,
        };
      }
      const L = r.dec(0.3, 1.5, 2), F = r.int(20, 300), mu = r.dec(0.5, 10, 1), n = r.int(1, 4);
      const f = (n / (2 * L)) * Math.sqrt(F / (mu / 1000));
      return {
        text: `Struna z dolžino ${Q(L, "m")} in dolžinsko gostoto ${Q(mu, "g/m")} je napeta s silo ${Q(F, "N")}. Kolikšna je frekvenca ${n === 1 ? "osnovnega lastnega nihanja" : `${n}. lastnega nihanja (${n}. harmonika)`}? Zaokroži na eno decimalko.`,
        answer: num(f, "Hz", 1),
        hint: "Hitrost valovanja na struni je $c = \\sqrt{F/\\mu}$. Pri stoječem valovanju z vozli na koncih je $L = n \\tfrac{\\lambda}{2}$.",
        data: { given: [dat("L", tx(L), "m"), dat("\\mu", tx(mu), "g/m"), dat("F", F, "N"), `n = ${n}`], find: ["\\nu_n"] },
        formula: ["c = \\sqrt{\\dfrac{F}{\\mu}}", "\\nu_n = \\dfrac{n c}{2L}"],
        solution: `$c = \\sqrt{\\dfrac{${F}}{${tx(mu / 1000)}}} = ${tx(Math.sqrt(F / (mu / 1000)), 2)}$ m/s.\n$\\nu_{${n}} = \\dfrac{${n} \\cdot ${tx(Math.sqrt(F / (mu / 1000)), 2)}}{2 \\cdot ${tx(L)}} ${res(f, 1, "Hz")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-plin",
    topics: [SS("idealni-plin-in-termodinamika")],
    gen(level, r) {
      const R = 8.31;
      if (level === 1) {
        const V = r.dec(1, 50, 1), p = r.int(100, 1000), T = r.int(250, 400);
        const n = (p * 1000 * V * 1e-3) / (R * T);
        return {
          text: `V jeklenki s prostornino ${Q(V, "l")} je plin pri tlaku ${p} kPa in temperaturi ${T} K. Koliko molov plina je v jeklenki? ($R = 8{,}31\\ \\mathrm{J/(mol\\,K)}$) Zaokroži na tri decimalke.`,
          answer: num(n, "mol", 3),
          hint: "Splošna plinska enačba $pV = nRT$. Prostornino pretvori v m³, tlak v Pa.",
          data: { given: [dat("V", tx(V), "l"), dat("p", p, "kPa"), dat("T", T, "K"), dat("R", "8{,}31", "J/(mol\\,K)")], find: ["n"] },
          formula: "n = \\dfrac{pV}{RT}",
          solution: `$n = \\dfrac{${p} \\cdot 10^3 \\cdot ${tx(V)} \\cdot 10^{-3}}{8{,}31 \\cdot ${T}} ${res(n, 3, "mol")}$.`,
        };
      }
      if (level === 2) {
        const n = r.dec(0.2, 3, 1), dT = r.int(10, 200);
        const Q = 2.5 * n * R * dT, W = n * R * dT;
        const askW = r.next() < 0.5;
        return {
          text: `${tx(n)} mol enoatomnega idealnega plina segrevamo pri stalnem tlaku, da se mu temperatura poveča za ${dT} K. ${askW ? "Koliko dela opravi plin?" : "Koliko toplote mu dovedemo?"} ($R = 8{,}31\\ \\mathrm{J/(mol\\,K)}$, za enoatomni plin je $W_n = \\tfrac{3}{2} nRT$) Zaokroži na celo število.`,
          answer: num(askW ? W : Q, "J", 0),
          hint: "Pri stalnem tlaku je delo $A = p\\Delta V = nR\\Delta T$. Prvi zakon: $Q = \\Delta W_n + A$.",
          data: { given: [`n = ${tx(n)}\\ \\mathrm{mol}`, dat("\\Delta T", dT, "K"), dat("R", "8{,}31", "J/(mol\\,K)")], find: [askW ? "A" : "Q"] },
          formula: ["A = p \\Delta V = n R \\Delta T", "\\Delta W_n = \\tfrac{3}{2} n R \\Delta T", "Q = \\Delta W_n + A"],
          solution: `$A = ${tx(n)} \\cdot 8{,}31 \\cdot ${dT} = ${tx(W, 1)}$ J, $\\Delta W_n = \\tfrac{3}{2} \\cdot ${tx(W, 1)} = ${tx(1.5 * W, 1)}$ J.\n${askW ? `$A ${res(W, 0, "J")}$` : `$Q = ${tx(1.5 * W, 1)} + ${tx(W, 1)} ${res(Q, 0, "J")}$`}.`,
        };
      }
      const T1 = r.int(400, 900), T2 = r.int(270, 350), Q1 = r.int(1, 50);
      const W = Q1 * (1 - T2 / T1);
      return {
        text: `Idealni toplotni stroj (Carnotov) deluje med rezervoarjema s temperaturama ${T1} K in ${T2} K. V vsakem ciklu prejme ${Q1} kJ toplote. Koliko dela opravi v enem ciklu? Zaokroži na dve decimalki.`,
        answer: num(W, "kJ", 2),
        hint: "Izkoristek Carnotovega stroja je $\\eta = 1 - T_2 / T_1$.",
        data: { given: [dat("T_1", T1, "K"), dat("T_2", T2, "K"), dat("Q_1", Q1, "kJ")], find: ["A"] },
        formula: ["\\eta = 1 - \\dfrac{T_2}{T_1}", "A = \\eta Q_1"],
        solution: `$\\eta = 1 - \\dfrac{${T2}}{${T1}} = ${tx(1 - T2 / T1, 4)}$.\n$A = ${tx(1 - T2 / T1, 4)} \\cdot ${Q1} ${res(W, 2, "kJ")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-elektrostatika",
    topics: [SS("elektrostatika")],
    gen(level, r) {
      const k = 9e9;
      if (level === 1) {
        const q1 = r.dec(0.5, 10, 1), q2 = r.dec(0.5, 10, 1), d = r.int(2, 50);
        const F = (k * q1 * 1e-6 * q2 * 1e-6) / (d / 100) ** 2;
        return {
          text: `Točkasta naboja ${Q(q1, "\\mu C")} in ${Q(q2, "\\mu C")} sta ${d} cm narazen. S kolikšno silo se odbijata? ($k = 9 \\cdot 10^9\\ \\mathrm{N\\,m^2/C^2}$) Zaokroži na dve decimalki.`,
          answer: num(F, "N", 2),
          hint: "Coulombov zakon $F = k \\dfrac{q_1 q_2}{r^2}$. Pretvori µC v C in cm v m.",
          data: { given: [dat("q_1", tx(q1), "\\mu C"), dat("q_2", tx(q2), "\\mu C"), dat("r", d, "cm"), "k = 9 \\cdot 10^9\\ \\mathrm{N\\,m^2/C^2}"], find: ["F"] },
          formula: "F = k \\dfrac{q_1 q_2}{r^2}",
          solution: `$F = 9 \\cdot 10^9 \\cdot \\dfrac{${tx(q1)} \\cdot 10^{-6} \\cdot ${tx(q2)} \\cdot 10^{-6}}{(${tx(d / 100)})^2} ${res(F, 2, "N")}$.`,
        };
      }
      if (level === 2) {
        const q1 = r.int(1, 9), q2 = r.int(1, 16), d = r.int(10, 100);
        const x = d / (1 + Math.sqrt(q2 / q1));
        return {
          text: `Naboja $q_1 = ${q1}\\ \\mathrm{\\mu C}$ in $q_2 = ${q2}\\ \\mathrm{\\mu C}$ sta ${d} cm narazen. Na kateri razdalji od $q_1$ na zveznici med njima je električna poljska jakost enaka nič? Zaokroži na dve decimalki.`,
          answer: num(x, "cm", 2),
          hint: "Polji istoimenskih nabojev sta med njima nasprotni. Postavi $k\\dfrac{q_1}{x^2} = k\\dfrac{q_2}{(d - x)^2}$.",
          data: { given: [dat("q_1", q1, "\\mu C"), dat("q_2", q2, "\\mu C"), dat("d", d, "cm")], find: ["x"] },
          formula: ["\\dfrac{q_1}{x^2} = \\dfrac{q_2}{(d - x)^2}", "x = \\dfrac{d}{1 + \\sqrt{q_2/q_1}}"],
          solution: `$\\dfrac{d - x}{x} = \\sqrt{\\dfrac{${q2}}{${q1}}} = ${tx(Math.sqrt(q2 / q1), 4)}$, torej $x = \\dfrac{${d}}{1 + ${tx(Math.sqrt(q2 / q1), 4)}} ${res(x, 2, "cm")}$.`,
        };
      }
      const S = r.int(50, 500), d = r.dec(0.5, 5, 1), U = r.int(10, 500);
      const C = (8.85e-12 * S * 1e-4) / (d * 1e-3), W = 0.5 * C * U * U;
      return {
        text: `Ploščati kondenzator ima plošči s ploščino ${S} cm², ki sta ${Q(d, "mm")} narazen (zrak). Priključimo ga na napetost ${U} V. Koliko energije je shranjene v kondenzatorju? Izrazi v µJ. ($\\varepsilon_0 = 8{,}85 \\cdot 10^{-12}\\ \\mathrm{As/(Vm)}$) Zaokroži na tri decimalke.`,
        answer: num(W * 1e6, "µJ", 3, { unitAlternatives: ["uJ", "µJ", "μJ"] }),
        hint: "$C = \\varepsilon_0 \\dfrac{S}{d}$ in $W = \\tfrac{1}{2} C U^2$.",
        data: { given: [dat("S", S, "cm^2"), dat("d", tx(d), "mm"), dat("U", U, "V"), "\\varepsilon_0 = 8{,}85 \\cdot 10^{-12}\\ \\mathrm{As/(Vm)}"], find: ["W"] },
        formula: ["C = \\varepsilon_0 \\dfrac{S}{d}", "W = \\tfrac{1}{2} C U^2"],
        solution: `$C = 8{,}85 \\cdot 10^{-12} \\cdot \\dfrac{${S} \\cdot 10^{-4}}{${tx(d)} \\cdot 10^{-3}} = ${tx(C * 1e12, 2)}$ pF.\n$W = \\tfrac{1}{2} \\cdot ${tx(C * 1e12, 2)} \\cdot 10^{-12} \\cdot ${U}^2 ${res(W * 1e6, 3, "\\mu J")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-kirchhoff",
    topics: [SS("tokokrogi-s-kirchhoffovimi-pravili")],
    gen(level, r) {
      if (level === 1) {
        const e = r.dec(1.5, 24, 1), ri = r.dec(0.1, 3, 1), R = r.int(1, 50);
        const I = e / (R + ri), U = e - I * ri;
        return {
          text: `Baterija z gonilno napetostjo ${Q(e, "V")} in notranjim uporom ${Q(ri, "\\Omega")} je priključena na upornik ${Q(R, "\\Omega")}. Kolikšna je napetost med poloma baterije? Zaokroži na dve decimalki.`,
          answer: num(U, "V", 2),
          hint: "Tok je $I = \\dfrac{U_g}{R + R_n}$. Napetost na polih je manjša od gonilne za padec na notranjem uporu.",
          data: { given: [dat("U_g", tx(e), "V"), dat("R_n", tx(ri), "\\Omega"), dat("R", R, "\\Omega")], find: ["U"] },
          formula: ["I = \\dfrac{U_g}{R + R_n}", "U = U_g - I R_n"],
          solution: `$I = \\dfrac{${tx(e)}}{${R} + ${tx(ri)}} = ${tx(I, 4)}$ A.\n$U = ${tx(e)} - ${tx(I, 4)} \\cdot ${tx(ri)} ${res(U, 2, "V")}$.`,
        };
      }
      if (level === 2) {
        const e = r.dec(1.5, 24, 1), ri = r.dec(0.2, 5, 1);
        const P = (e * e) / (4 * ri);
        return {
          text: `Vir ima gonilno napetost ${Q(e, "V")} in notranji upor ${Q(ri, "\\Omega")}. Kolikšna je največja moč, ki jo lahko odda zunanjemu uporniku? Zaokroži na dve decimalki.`,
          answer: num(P, "W", 2),
          hint: "Moč na zunanjem uporniku je največja, ko je njegov upor enak notranjemu uporu vira.",
          data: { given: [dat("U_g", tx(e), "V"), dat("R_n", tx(ri), "\\Omega")], find: ["P_{\\max}"] },
          formula: ["R = R_n", "P_{\\max} = \\dfrac{U_g^2}{4 R_n}"],
          solution: `Pri $R = R_n = ${tx(ri)}\\ \\Omega$: $P_{\\max} = \\dfrac{${tx(e)}^2}{4 \\cdot ${tx(ri)}} ${res(P, 2, "W")}$.`,
        };
      }
      const e1 = r.int(2, 24), e2 = r.int(2, 24), R1 = r.int(1, 20), R2 = r.int(1, 20), R3 = r.int(1, 30);
      const V = (e1 / R1 + e2 / R2) / (1 / R1 + 1 / R2 + 1 / R3);
      const I3 = V / R3;
      return {
        text: `Dva vira sta vezana vzporedno na upornik $R_3 = ${R3}\\ \\Omega$: prvi z gonilno napetostjo ${Q(e1, "V")} prek upornika $R_1 = ${R1}\\ \\Omega$, drugi z gonilno napetostjo ${Q(e2, "V")} prek upornika $R_2 = ${R2}\\ \\Omega$ (pozitivna pola obeh virov sta na isti strani). Kolikšen tok teče skozi $R_3$? Zaokroži na tri decimalke.`,
        answer: num(I3, "A", 3),
        hint: "Naj bo $U$ napetost na $R_3$. Za vozlišče velja $\\dfrac{U_1 - U}{R_1} + \\dfrac{U_2 - U}{R_2} = \\dfrac{U}{R_3}$ (Kirchhoffovo pravilo za tokove).",
        data: { given: [dat("U_1", e1, "V"), dat("R_1", R1, "\\Omega"), dat("U_2", e2, "V"), dat("R_2", R2, "\\Omega"), dat("R_3", R3, "\\Omega")], find: ["I_3"] },
        formula: ["\\dfrac{U_1 - U}{R_1} + \\dfrac{U_2 - U}{R_2} = \\dfrac{U}{R_3}", "I_3 = \\dfrac{U}{R_3}"],
        solution: `$U = \\dfrac{${e1}/${R1} + ${e2}/${R2}}{1/${R1} + 1/${R2} + 1/${R3}} = ${tx(V, 4)}$ V.\n$I_3 = \\dfrac{${tx(V, 4)}}{${R3}} ${res(I3, 3, "A")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-lorentz",
    topics: [SS("magnetno-polje-in-lorentzova-sila")],
    gen(level, r) {
      if (level === 1) {
        const I = r.dec(0.5, 20, 1), l = r.int(5, 100), B = r.dec(0.05, 1.5, 2), a = r.pick([30, 45, 60, 90]);
        const F = I * (l / 100) * B * Math.sin(deg(a));
        return {
          text: `Ravni vodnik z dolžino ${l} cm, po katerem teče tok ${Q(I, "A")}, je v homogenem magnetnem polju ${Q(B, "T")}. Vodnik s smerjo polja oklepa kot ${a}°. Kolikšna sila deluje nanj? Zaokroži na tri decimalke.`,
          answer: num(F, "N", 3),
          hint: "$F = I l B \\sin\\alpha$.",
          data: { given: [dat("l", l, "cm"), dat("I", tx(I), "A"), dat("B", tx(B), "T"), `\\alpha = ${a}^\\circ`], find: ["F"] },
          formula: "F = I l B \\sin\\alpha",
          solution: `$F = ${tx(I)} \\cdot ${tx(l / 100)} \\cdot ${tx(B)} \\cdot \\sin ${a}^\\circ ${res(F, 3, "N")}$.`,
        };
      }
      const [pn, m, q] = r.pick([["proton", 1.67e-27, 1.6e-19], ["elektron", 9.11e-31, 1.6e-19]]);
      const mTex = pn === "proton" ? "1{,}67 \\cdot 10^{-27}" : "9{,}11 \\cdot 10^{-31}";
      if (level === 2) {
        const vE = pn === "proton" ? r.int(1, 50) : r.int(1, 30);
        const v = vE * (pn === "proton" ? 1e5 : 1e6);
        const B = pn === "proton" ? r.dec(0.01, 1, 2) : r.dec(1, 20, 1) / 1000;
        const rad = (m * v) / (q * B);
        const Btex = pn === "proton" ? Q(B, "T") : Q(roundHalfUp(B * 1000, 1), "mT");
        const Bdat = pn === "proton" ? dat("B", tx(B), "T") : dat("B", tx(roundHalfUp(B * 1000, 1)), "mT");
        const Bsol = pn === "proton" ? tx(B) : `${tx(roundHalfUp(B * 1000, 1))} \\cdot 10^{-3}`;
        const scale = pn === "proton" ? [100, "cm"] : [1000, "mm"];
        return {
          text: `${pn === "proton" ? "Proton" : "Elektron"} ($m = ${mTex}\\ \\mathrm{kg}$, $e = 1{,}6 \\cdot 10^{-19}\\ \\mathrm{As}$) prileti s hitrostjo $${vE} \\cdot 10^{${pn === "proton" ? 5 : 6}}\\ \\mathrm{m/s}$ pravokotno v homogeno magnetno polje ${Btex}. Kolikšen je polmer krožnice, po kateri se giblje? Izrazi v ${scale[1]} in zaokroži na dve decimalki.`,
          answer: num(rad * scale[0], scale[1], 2),
          hint: "Lorentzova sila je centripetalna: $evB = \\dfrac{mv^2}{r}$.",
          data: { given: [`m = ${mTex}\\ \\mathrm{kg}`, "e = 1{,}6 \\cdot 10^{-19}\\ \\mathrm{As}", `v = ${vE} \\cdot 10^{${pn === "proton" ? 5 : 6}}\\ \\mathrm{m/s}`, Bdat], find: ["r"] },
          formula: "r = \\dfrac{m v}{e B}",
          solution: `$r = \\dfrac{${mTex} \\cdot ${vE} \\cdot 10^{${pn === "proton" ? 5 : 6}}}{1{,}6 \\cdot 10^{-19} \\cdot ${Bsol}} = ${tx(rad, 5)}\\ \\mathrm{m} ${res(rad * scale[0], 2, scale[1])}$.`,
        };
      }
      const B = r.dec(0.05, 2, 2);
      const T = (2 * Math.PI * m) / (q * B);
      const scale = pn === "proton" ? [1e9, "ns"] : [1e12, "ps"];
      return {
        text: `${pn === "proton" ? "Proton" : "Elektron"} ($m = ${mTex}\\ \\mathrm{kg}$, $e = 1{,}6 \\cdot 10^{-19}\\ \\mathrm{As}$) kroži v homogenem magnetnem polju ${Q(B, "T")}. Kolikšen je njegov obhodni čas? Izrazi v ${scale[1]} in zaokroži na eno decimalko. (Ali je odvisen od hitrosti?)`,
        answer: num(T * scale[0], scale[1], 1),
        hint: "Iz $r = \\dfrac{mv}{eB}$ in $t_0 = \\dfrac{2\\pi r}{v}$ dobiš $t_0 = \\dfrac{2\\pi m}{eB}$ — neodvisno od hitrosti.",
        data: { given: [`m = ${mTex}\\ \\mathrm{kg}`, "e = 1{,}6 \\cdot 10^{-19}\\ \\mathrm{As}", dat("B", tx(B), "T")], find: ["t_0"] },
        formula: "t_0 = \\dfrac{2\\pi m}{e B}",
        solution: `$t_0 = \\dfrac{2\\pi \\cdot ${mTex}}{1{,}6 \\cdot 10^{-19} \\cdot ${tx(B)}} ${res(T * scale[0], 1, scale[1])}$. Obhodni čas ni odvisen od hitrosti (to izkorišča ciklotron).`,
      };
    },
  },
  {
    id: "tek-fiz-optika-ss",
    topics: [SS("geometrijska-optika")],
    gen(level, r) {
      const mats = [["vode", 1.33, "vodo"], ["stekla", 1.5, "steklom"], ["diamanta", 2.42, "diamantom"], ["etanola", 1.36, "etanolom"], ["kremena", 1.46, "kremenom"]];
      const [mn, n, mInst] = r.pick(mats);
      if (level === 1) {
        const a = r.int(10, 80);
        const b = (Math.asin(Math.sin(deg(a)) / n) * 180) / Math.PI;
        return {
          text: `Žarek pade iz zraka na gladino ${mn} (lomni količnik ${tx(n)}) pod vpadnim kotom ${a}°. Kolikšen je lomni kot? Zaokroži na eno decimalko.`,
          answer: num(b, "°", 1, { unitAlternatives: ["stopinj"] }),
          hint: "Lomni zakon: $\\sin\\alpha = n \\sin\\beta$.",
          data: { given: [`\\alpha = ${a}^\\circ`, `n = ${tx(n)}`], find: ["\\beta"] },
          formula: "\\sin\\alpha = n \\sin\\beta",
          solution: `$\\sin\\beta = \\dfrac{\\sin ${a}^\\circ}{${tx(n)}} = ${tx(Math.sin(deg(a)) / n, 4)}$, $\\beta ${res(b, 1, "^\\circ")}$.`,
        };
      }
      if (level === 2) {
        const c = (Math.asin(1 / n) * 180) / Math.PI;
        return {
          text: `Kolikšen je mejni kot za popolni odboj na meji med ${mInst} (lomni količnik ${tx(n)}) in zrakom? Zaokroži na eno decimalko.`,
          answer: num(c, "°", 1, { unitAlternatives: ["stopinj"] }),
          hint: "Pri mejnem kotu je lomni kot v zraku $90^\\circ$.",
          data: { given: [`n = ${tx(n)}`], find: ["\\alpha_m"] },
          formula: "\\sin\\alpha_m = \\dfrac{1}{n}",
          solution: `$\\sin\\alpha_m = \\dfrac{1}{${tx(n)}} = ${tx(1 / n, 4)}$, $\\alpha_m ${res(c, 1, "^\\circ")}$.`,
        };
      }
      const h = r.dec(0.5, 5, 1);
      const nn = r.pick([1.33, 1.36]);
      const hp = h / nn;
      return {
        text: `Bazen je globok ${Q(h, "m")} in poln ${nn === 1.33 ? "vode (lomni količnik 1,33)" : "tekočine z lomnim količnikom 1,36"}. Kako globok se zdi opazovalcu, ki gleda navpično navzdol? Zaokroži na dve decimalki.`,
        answer: num(hp, "m", 2),
        hint: "Za majhne kote je $\\tan \\approx \\sin$, zato je navidezna globina $h' = h/n$.",
        data: { given: [dat("h", tx(h), "m"), `n = ${tx(nn)}`], find: ["h'"] },
        formula: "h' = \\dfrac{h}{n}",
        solution: `$h' = \\dfrac{${tx(h)}}{${tx(nn)}} ${res(hp, 2, "m")}$.`,
      };
    },
  },
  {
    id: "tek-fiz-dimenzije",
    topics: [SS("ocenjevanje-in-dimenzijska-analiza")],
    gen(level, r) {
      const probs = [
        { what: "nihajni čas $t_0$ nitnega nihala", form: "t_0 = C\\, m^a\\, l^b\\, g^c", vars: ["a", "b", "c"], ans: [0, 0.5, -0.5], units: "$[m] = \\mathrm{kg}$, $[l] = \\mathrm{m}$, $[g] = \\mathrm{m/s^2}$" },
        { what: "nihajni čas $t_0$ uteži na vzmeti", form: "t_0 = C\\, m^a\\, k^b", vars: ["a", "b"], ans: [0.5, -0.5], units: "$[m] = \\mathrm{kg}$, $[k] = \\mathrm{N/m} = \\mathrm{kg/s^2}$" },
        { f: true, what: "hitrost $c$ valovanja na struni", form: "c = C\\, F^a\\, \\mu^b", vars: ["a", "b"], ans: [0.5, -0.5], units: "$[F] = \\mathrm{kg\\,m/s^2}$, $[\\mu] = \\mathrm{kg/m}$" },
        { f: true, what: "hitrost $v$ telesa, ki pade z višine $h$", form: "v = C\\, h^a\\, g^b\\, m^c", vars: ["a", "b", "c"], ans: [0.5, 0.5, 0], units: "$[h] = \\mathrm{m}$, $[g] = \\mathrm{m/s^2}$, $[m] = \\mathrm{kg}$" },
        { f: true, what: "sila upora $F$ pri hitrem gibanju skozi zrak", form: "F = C\\, \\rho^a\\, v^b\\, S^c", vars: ["a", "b", "c"], ans: [1, 2, 1], units: "$[\\rho] = \\mathrm{kg/m^3}$, $[v] = \\mathrm{m/s}$, $[S] = \\mathrm{m^2}$" },
        { what: "obhodni čas $T$ planeta", form: "T = C\\, r^a\\, (GM)^b", vars: ["a", "b"], ans: [1.5, -0.5], units: "$[r] = \\mathrm{m}$, $[GM] = \\mathrm{m^3/s^2}$" },
      ];
      const pool = level === 1 ? probs.slice(0, 3) : level === 2 ? probs.slice(1, 5) : probs.slice(3);
      const p = r.pick(pool);
      const i = r.int(0, p.vars.length - 1);
      return {
        text: `Fizik predvideva, da je ${p.what} ${p.f ? "odvisna" : "odvisen"} le od naštetih količin: $${p.form}$, kjer je $C$ brezdimenzijska konstanta. Enote: ${p.units}. Kolikšen je eksponent $${p.vars[i]}$? (Decimalna števila zapiši z vejico, npr. −0,5.)`,
        answer: num(p.ans[i], null, 1),
        hint: "Zapiši enote obeh strani in izenači eksponente kilogramov, metrov in sekund. Dobiš sistem enačb.",
        data: false,
        formula: "[\\text{leva stran}] = [\\text{desna stran}] \\text{ za kg, m in s posebej}",
        solution: `Z izenačitvijo eksponentov osnovnih enot dobimo ${p.vars.map((v, k) => `$${v} = ${tx(p.ans[k])}$`).join(", ")}.\nIskani eksponent: $${p.vars[i]} = ${tx(p.ans[i])}$.`,
      };
    },
  },
];

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function par0(x) {
  return x < 0 ? `(${x})` : `${x}`;
}
void g;
