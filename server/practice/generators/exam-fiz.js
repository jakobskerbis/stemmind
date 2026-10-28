// Izpitne naloge iz fizike (angleško) za JEE, NEET, gaokao in CBSE: mehanika, nihanje,
// valovanje, toplota, elektrika, magnetizem, optika in moderna fizika.
// Enota je v besedilu (»in m/s«), odgovor je samo število. g = 10 m/s², kot na teh izpitih.
import { en, num, roundTo, task } from "./exam-util.js";

const T = (slug) => `FIZ-EXB/${slug}`;
const G = 10;
const rad = (deg) => (deg * Math.PI) / 180;

export const EXAM_FIZ = [
  {
    id: "exf-kinematics",
    topics: [T("kinematics")],
    gen(level, r) {
      const u = r.int(0, 20), a = r.int(1, 6), t = r.int(2, 10);
      if (level === 1) {
        return task({
          text: `A car starts with a speed of ${u} m/s and accelerates uniformly at ${a} m/s² for ${t} s. What is its final speed, in m/s?`,
          answer: num(u + a * t),
          hint: "$v = u + at$.",
          formula: "v = u + at",
          solution: `$v = ${u} + ${a} \\cdot ${t} = ${u + a * t}\\ \\text{m/s}$`,
        });
      }
      if (level === 2) {
        const s = u * t + 0.5 * a * t * t;
        return task({
          text: `A body moving at ${u} m/s accelerates uniformly at ${a} m/s². How far does it travel in ${t} s, in meters?`,
          answer: num(s),
          hint: "$s = ut + \\tfrac12 at^2$.",
          formula: "s = ut + \\tfrac12 at^2",
          solution: `$s = ${u} \\cdot ${t} + \\tfrac12 \\cdot ${a} \\cdot ${t}^2 = ${en(s)}\\ \\text{m}$`,
        });
      }
      const v = r.int(10, 40), d = r.int(20, 100);
      const dec = (v * v) / (2 * d);
      return task({
        text: `A train moving at ${v} m/s is brought to rest over a distance of ${d} m with uniform deceleration. What is the magnitude of the deceleration, in m/s²?${roundTo(2)}`,
        answer: num(dec, 2),
        hint: "$v^2 = u^2 + 2as$ with final speed 0.",
        formula: "v^2 = u^2 + 2as",
        solution: `$0 = ${v}^2 - 2a \\cdot ${d} \\Rightarrow a = \\dfrac{${v * v}}{${2 * d}} \\approx ${en(dec, 2)}\\ \\text{m/s}^2$`,
      });
    },
  },
  {
    id: "exf-projectile",
    topics: [T("projectile-motion")],
    gen(level, r) {
      const u = r.pick([10, 20, 30, 40, 50]);
      if (level === 1) {
        const h = r.pick([5, 20, 45, 80, 125]);
        const t = Math.sqrt((2 * h) / G);
        return task({
          text: `A ball is thrown horizontally at ${u} m/s from the top of a cliff ${h} m high. How far from the foot of the cliff does it land, in meters? (Take $g = 10\\ \\text{m/s}^2$.)`,
          answer: num(u * t),
          hint: "Find the time of fall from $h = \\tfrac12 g t^2$, then $x = ut$.",
          formula: "h = \\tfrac12 g t^2, \\quad x = u t",
          solution: `$t = \\sqrt{2h/g} = \\sqrt{${2 * h}/10} = ${en(t)}\\ \\text{s}$\n$x = ${u} \\cdot ${en(t)} = ${en(u * t)}\\ \\text{m}$`,
        });
      }
      const ang = r.pick([15, 30, 45, 60, 75]);
      if (level === 2) {
        const R = (u * u * Math.sin(rad(2 * ang))) / G;
        return task({
          text: `A projectile is launched at ${u} m/s at ${ang}° above the horizontal on level ground. What is its horizontal range, in meters? (Take $g = 10\\ \\text{m/s}^2$.)${roundTo(1)}`,
          answer: num(R, 1),
          hint: "$R = \\dfrac{u^2 \\sin 2\\theta}{g}$.",
          formula: "R = \\dfrac{u^2 \\sin 2\\theta}{g}",
          solution: `$R = \\dfrac{${u}^2 \\cdot \\sin ${2 * ang}^\\circ}{10} \\approx ${en(R, 1)}\\ \\text{m}$`,
        });
      }
      const H = (u * Math.sin(rad(ang))) ** 2 / (2 * G);
      return task({
        text: `A projectile is launched at ${u} m/s at ${ang}° above the horizontal. What is the maximum height it reaches, in meters? (Take $g = 10\\ \\text{m/s}^2$.)${roundTo(1)}`,
        answer: num(H, 1),
        hint: "Only the vertical component matters: $H = \\dfrac{(u\\sin\\theta)^2}{2g}$.",
        formula: "H = \\dfrac{u^2 \\sin^2\\theta}{2g}",
        solution: `$H = \\dfrac{(${u} \\sin ${ang}^\\circ)^2}{2 \\cdot 10} \\approx ${en(H, 1)}\\ \\text{m}$`,
      });
    },
  },
  {
    id: "exf-newton",
    topics: [T("laws-of-motion")],
    gen(level, r) {
      if (level === 1) {
        const m = r.int(2, 20), F = r.int(10, 100);
        return task({
          text: `A net force of ${F} N acts on a ${m} kg block on a frictionless surface. What is its acceleration, in m/s²?${roundTo(2)}`,
          answer: num(F / m, 2),
          hint: "$F = ma$.",
          formula: "F = ma",
          solution: `$a = F/m = ${F}/${m} \\approx ${en(F / m, 2)}\\ \\text{m/s}^2$`,
        });
      }
      if (level === 2) {
        const m = r.int(2, 10), F = r.int(30, 80), mu = r.pick([0.1, 0.2, 0.25, 0.3]);
        const a = (F - mu * m * G) / m;
        if (a <= 0) return null;
        return task({
          text: `A horizontal force of ${F} N pulls a ${m} kg box across a floor. The coefficient of kinetic friction is ${mu}. What is the box's acceleration, in m/s²? (Take $g = 10\\ \\text{m/s}^2$.)${roundTo(2)}`,
          answer: num(a, 2),
          hint: "Net force = applied force − friction, with friction $= \\mu m g$.",
          formula: "ma = F - \\mu m g",
          solution: `$F_f = ${mu} \\cdot ${m} \\cdot 10 = ${en(mu * m * G)}\\ \\text{N}$\n$a = \\dfrac{${F} - ${en(mu * m * G)}}{${m}} \\approx ${en(a, 2)}\\ \\text{m/s}^2$`,
        });
      }
      const m1 = r.int(2, 8), m2 = r.int(1, 8);
      const a = ((m1 - m2) * G) / (m1 + m2);
      if (m1 === m2) return null;
      const big = Math.max(m1, m2), small = Math.min(m1, m2);
      const acc = ((big - small) * G) / (big + small), T2 = (2 * big * small * G) / (big + small);
      void a;
      return task({
        text: `Two masses of ${big} kg and ${small} kg hang on either side of a light, frictionless pulley (Atwood machine). What is the tension in the string, in newtons? (Take $g = 10\\ \\text{m/s}^2$.)${roundTo(2)}`,
        answer: num(T2, 2),
        hint: "First find the acceleration $a = \\dfrac{(m_1 - m_2)g}{m_1 + m_2}$, then $T = m_2(g + a)$.",
        formula: "T = \\dfrac{2 m_1 m_2 g}{m_1 + m_2}",
        solution: `$a = \\dfrac{(${big} - ${small}) \\cdot 10}{${big + small}} \\approx ${en(acc, 2)}\\ \\text{m/s}^2$\n$T = \\dfrac{2 \\cdot ${big} \\cdot ${small} \\cdot 10}{${big + small}} \\approx ${en(T2, 2)}\\ \\text{N}$`,
      });
    },
  },
  {
    id: "exf-energy",
    topics: [T("work-energy-and-power")],
    gen(level, r) {
      if (level === 1) {
        const m = r.int(1, 10), v = r.int(2, 20);
        return task({
          text: `What is the kinetic energy of a ${m} kg object moving at ${v} m/s, in joules?`,
          answer: num(0.5 * m * v * v),
          hint: "$E_k = \\tfrac12 m v^2$.",
          formula: "E_k = \\tfrac12 m v^2",
          solution: `$E_k = \\tfrac12 \\cdot ${m} \\cdot ${v}^2 = ${en(0.5 * m * v * v)}\\ \\text{J}$`,
        });
      }
      if (level === 2) {
        const h = r.pick([5, 20, 45, 80]);
        const v = Math.sqrt(2 * G * h);
        return task({
          text: `A stone is dropped from a height of ${h} m. Ignoring air resistance, what is its speed just before it hits the ground, in m/s? (Take $g = 10\\ \\text{m/s}^2$.)`,
          answer: num(v),
          hint: "Potential energy turns into kinetic energy: $mgh = \\tfrac12 m v^2$.",
          formula: "v = \\sqrt{2gh}",
          solution: `$v = \\sqrt{2 \\cdot 10 \\cdot ${h}} = ${en(v)}\\ \\text{m/s}$`,
        });
      }
      const m = r.int(50, 120), h = r.int(3, 15), t = r.int(5, 30);
      const P = (m * G * h) / t;
      return task({
        text: `A ${m} kg person climbs a staircase ${h} m high in ${t} s. What is the average power developed, in watts? (Take $g = 10\\ \\text{m/s}^2$.)${roundTo(1)}`,
        answer: num(P, 1),
        hint: "Power = work / time, and the work is $mgh$.",
        formula: "P = \\dfrac{mgh}{t}",
        solution: `$P = \\dfrac{${m} \\cdot 10 \\cdot ${h}}{${t}} \\approx ${en(P, 1)}\\ \\text{W}$`,
      });
    },
  },
  {
    id: "exf-momentum",
    topics: [T("momentum-and-collisions")],
    gen(level, r) {
      const m1 = r.int(1, 8), m2 = r.int(1, 8), v1 = r.int(2, 12);
      if (level === 1) {
        const F = r.int(10, 200), t = r.pick([0.1, 0.2, 0.5, 2]);
        return task({
          text: `A force of ${F} N acts on a ball for ${t} s. What is the change in the ball's momentum, in kg·m/s?`,
          answer: num(F * t),
          hint: "Impulse $= F\\,\\Delta t = \\Delta p$.",
          formula: "\\Delta p = F \\Delta t",
          solution: `$\\Delta p = ${F} \\cdot ${t} = ${en(F * t)}\\ \\text{kg·m/s}$`,
        });
      }
      if (level === 2) {
        const v = (m1 * v1) / (m1 + m2);
        return task({
          text: `A ${m1} kg trolley moving at ${v1} m/s collides with a stationary ${m2} kg trolley and they stick together. What is their common speed after the collision, in m/s?${roundTo(2)}`,
          answer: num(v, 2),
          hint: "Momentum is conserved: $m_1 v_1 = (m_1 + m_2) v$.",
          formula: "m_1 v_1 = (m_1 + m_2)v",
          solution: `$v = \\dfrac{${m1} \\cdot ${v1}}{${m1} + ${m2}} \\approx ${en(v, 2)}\\ \\text{m/s}$`,
        });
      }
      const v1f = ((m1 - m2) / (m1 + m2)) * v1, v2f = ((2 * m1) / (m1 + m2)) * v1;
      void v1f;
      return task({
        text: `A ${m1} kg ball moving at ${v1} m/s makes a perfectly elastic head-on collision with a stationary ${m2} kg ball. What is the speed of the second ball after the collision, in m/s?${roundTo(2)}`,
        answer: num(v2f, 2),
        hint: "For an elastic collision with the second body at rest: $v_2' = \\dfrac{2m_1}{m_1 + m_2} v_1$.",
        formula: "v_2' = \\dfrac{2 m_1}{m_1 + m_2} v_1",
        solution: `$v_2' = \\dfrac{2 \\cdot ${m1}}{${m1} + ${m2}} \\cdot ${v1} \\approx ${en(v2f, 2)}\\ \\text{m/s}$`,
      });
    },
  },
  {
    id: "exf-circular",
    topics: [T("circular-motion-and-gravitation")],
    gen(level, r) {
      if (level === 1) {
        const m = r.int(1, 5), v = r.int(2, 12), R = r.pick([0.5, 1, 2, 4]);
        return task({
          text: `A ${m} kg stone is whirled in a horizontal circle of radius ${R} m at ${v} m/s. What is the centripetal force, in newtons?${roundTo(1)}`,
          answer: num((m * v * v) / R, 1),
          hint: "$F = \\dfrac{mv^2}{r}$.",
          formula: "F = \\dfrac{m v^2}{r}",
          solution: `$F = \\dfrac{${m} \\cdot ${v}^2}{${R}} = ${en((m * v * v) / R, 1)}\\ \\text{N}$`,
        });
      }
      if (level === 2) {
        const k = r.pick([2, 3, 4]);
        const g = 9.8 / (k * k);
        return task({
          text: `The acceleration due to gravity at the Earth's surface is $9.8\\ \\text{m/s}^2$. What is it at a distance of ${k} Earth radii from the Earth's centre, in m/s²?${roundTo(2)}`,
          answer: num(g, 2),
          hint: "Gravity falls off as $1/r^2$.",
          formula: "g(r) = g_0 \\left(\\dfrac{R}{r}\\right)^2",
          solution: `$g = 9.8 / ${k}^2 \\approx ${en(g, 2)}\\ \\text{m/s}^2$`,
        });
      }
      const R = r.pick([0.4, 0.9, 1.6, 2.5, 3.6]);
      const v = Math.sqrt(G * R);
      return task({
        text: `What is the minimum speed at the top of a vertical circle of radius ${R} m for a ball on a string to keep the string taut, in m/s? (Take $g = 10\\ \\text{m/s}^2$.)`,
        answer: num(v),
        hint: "At the minimum speed the tension at the top is zero, so gravity alone provides the centripetal force.",
        formula: "mg = \\dfrac{m v^2}{r}",
        solution: `$v = \\sqrt{gr} = \\sqrt{10 \\cdot ${R}} = ${en(v)}\\ \\text{m/s}$`,
      });
    },
  },
  {
    id: "exf-shm",
    topics: [T("oscillations")],
    gen(level, r) {
      if (level === 1) {
        const L = r.pick([0.4, 0.9, 1.6, 2.5]);
        const T = 2 * Math.PI * Math.sqrt(L / G);
        return task({
          text: `What is the period of a simple pendulum of length ${L} m, in seconds? (Take $g = 10\\ \\text{m/s}^2$.)${roundTo(2)}`,
          answer: num(T, 2),
          hint: "$T = 2\\pi\\sqrt{L/g}$.",
          formula: "T = 2\\pi\\sqrt{\\dfrac{L}{g}}",
          solution: `$T = 2\\pi\\sqrt{${L}/10} \\approx ${en(T, 2)}\\ \\text{s}$`,
        });
      }
      if (level === 2) {
        const m = r.pick([0.1, 0.2, 0.5, 1, 2]), k = r.pick([20, 50, 80, 100, 200]);
        const T = 2 * Math.PI * Math.sqrt(m / k);
        return task({
          text: `A mass of ${m} kg oscillates on a spring with spring constant ${k} N/m. What is the period of oscillation, in seconds?${roundTo(3)}`,
          answer: num(T, 3),
          hint: "$T = 2\\pi\\sqrt{m/k}$.",
          formula: "T = 2\\pi\\sqrt{\\dfrac{m}{k}}",
          solution: `$T = 2\\pi\\sqrt{${m}/${k}} \\approx ${en(T, 3)}\\ \\text{s}$`,
        });
      }
      const A = r.pick([0.05, 0.1, 0.2]), w = r.int(2, 10);
      return task({
        text: `A particle performs simple harmonic motion with amplitude ${A} m and angular frequency ${w} rad/s. What is its maximum speed, in m/s?`,
        answer: num(A * w),
        hint: "$v_{\\max} = A\\omega$.",
        formula: "v_{\\max} = A\\omega",
        solution: `$v_{\\max} = ${A} \\cdot ${w} = ${en(A * w)}\\ \\text{m/s}$`,
      });
    },
  },
  {
    id: "exf-waves",
    topics: [T("waves-and-sound")],
    gen(level, r) {
      if (level === 1) {
        const f = r.pick([50, 100, 256, 440, 512, 1000]), lam = r.pick([0.34, 0.5, 0.68, 1.36, 2]);
        return task({
          text: `A sound wave has a frequency of ${f} Hz and a wavelength of ${lam} m. What is its speed, in m/s?`,
          answer: num(f * lam),
          hint: "$v = f\\lambda$.",
          formula: "v = f\\lambda",
          solution: `$v = ${f} \\cdot ${lam} = ${en(f * lam)}\\ \\text{m/s}$`,
        });
      }
      if (level === 2) {
        const L = r.pick([0.5, 0.6, 0.8, 1]), v = r.pick([200, 300, 400]), n = r.int(1, 3);
        const f = (n * v) / (2 * L);
        return task({
          text: `A string of length ${L} m is fixed at both ends. Waves travel along it at ${v} m/s. What is the frequency of the ${n === 1 ? "fundamental mode" : `harmonic number ${n}`}, in Hz?${Number.isInteger(f) ? "" : roundTo(1)}`,
          answer: num(f, 1),
          hint: "For a string fixed at both ends: $f_n = \\dfrac{n v}{2L}$.",
          formula: "f_n = \\dfrac{n v}{2L}",
          solution: `$f_{${n}} = \\dfrac{${n} \\cdot ${v}}{2 \\cdot ${L}} ${Number.isInteger(f) ? "=" : "\\approx"} ${en(f, Number.isInteger(f) ? null : 1)}\\ \\text{Hz}$`,
        });
      }
      const f = r.pick([400, 500, 600]), vs = r.int(10, 40), v = 340;
      const f2 = (f * v) / (v - vs);
      return task({
        text: `An ambulance siren emits ${f} Hz and moves towards a stationary listener at ${vs} m/s. The speed of sound is 340 m/s. What frequency does the listener hear, in Hz?${roundTo(1)}`,
        answer: num(f2, 1),
        hint: "Source moving towards the listener: $f' = f\\dfrac{v}{v - v_s}$.",
        formula: "f' = f \\dfrac{v}{v - v_s}",
        solution: `$f' = ${f} \\cdot \\dfrac{340}{340 - ${vs}} \\approx ${en(f2, 1)}\\ \\text{Hz}$`,
      });
    },
  },
  {
    id: "exf-thermal",
    topics: [T("thermal-physics")],
    gen(level, r) {
      if (level === 1) {
        const m = r.pick([0.5, 1, 2, 3]), dT = r.int(10, 60), c = 4200;
        return task({
          text: `How much heat is needed to raise the temperature of ${m} kg of water by ${dT} °C, in kJ? (Specific heat capacity of water: 4200 J/(kg·K).)`,
          answer: num((m * c * dT) / 1000),
          hint: "$Q = mc\\Delta T$.",
          formula: "Q = m c \\Delta T",
          solution: `$Q = ${m} \\cdot 4200 \\cdot ${dT} = ${en(m * c * dT)}\\ \\text{J} = ${en((m * c * dT) / 1000)}\\ \\text{kJ}$`,
        });
      }
      if (level === 2) {
        const p1 = r.pick([100, 150, 200]), V1 = r.int(2, 10), T1 = r.pick([300, 280, 320]), T2 = T1 + r.int(20, 150), V2 = r.int(2, 12);
        const p2 = (p1 * V1 * T2) / (T1 * V2);
        return task({
          text: `A gas at ${p1} kPa occupies ${V1} L at ${T1} K. It is changed to ${V2} L at ${T2} K. What is its new pressure, in kPa?${roundTo(1)}`,
          answer: num(p2, 1),
          hint: "Combined gas law: $\\dfrac{p_1V_1}{T_1} = \\dfrac{p_2V_2}{T_2}$.",
          formula: "\\dfrac{p_1 V_1}{T_1} = \\dfrac{p_2 V_2}{T_2}",
          solution: `$p_2 = \\dfrac{${p1} \\cdot ${V1} \\cdot ${T2}}{${T1} \\cdot ${V2}} \\approx ${en(p2, 1)}\\ \\text{kPa}$`,
        });
      }
      const Th = r.pick([500, 600, 800, 1000]), Tc = r.pick([300, 250, 350]);
      const eta = (1 - Tc / Th) * 100;
      return task({
        text: `What is the maximum (Carnot) efficiency of a heat engine working between ${Th} K and ${Tc} K, in percent?${roundTo(1)}`,
        answer: num(eta, 1),
        hint: "$\\eta = 1 - \\dfrac{T_c}{T_h}$.",
        formula: "\\eta = 1 - \\dfrac{T_c}{T_h}",
        solution: `$\\eta = 1 - \\dfrac{${Tc}}{${Th}} = ${en(eta / 100, 4)} \\approx ${en(eta, 1)}\\%$`,
      });
    },
  },
  {
    id: "exf-electrostatics",
    topics: [T("electrostatics-and-capacitors")],
    gen(level, r) {
      if (level === 1) {
        const q1 = r.int(1, 9), q2 = r.int(1, 9), d = r.pick([0.1, 0.2, 0.3, 0.5]);
        const F = (9e9 * q1 * 1e-6 * q2 * 1e-6) / (d * d);
        return task({
          text: `Two point charges of ${q1} μC and ${q2} μC are ${d} m apart in vacuum. What is the force between them, in newtons? (Take $k = 9 \\times 10^9\\ \\text{N·m}^2/\\text{C}^2$.)${roundTo(2)}`,
          answer: num(F, 2),
          hint: "Coulomb's law: $F = k\\dfrac{q_1 q_2}{r^2}$.",
          formula: "F = k \\dfrac{q_1 q_2}{r^2}",
          solution: `$F = 9 \\times 10^9 \\cdot \\dfrac{${q1} \\times 10^{-6} \\cdot ${q2} \\times 10^{-6}}{${d}^2} \\approx ${en(F, 2)}\\ \\text{N}$`,
        });
      }
      if (level === 2) {
        const C1 = r.int(2, 12), C2 = r.int(2, 12), series = r.next() < 0.5;
        const C = series ? (C1 * C2) / (C1 + C2) : C1 + C2;
        return task({
          text: `Capacitors of ${C1} μF and ${C2} μF are connected in ${series ? "series" : "parallel"}. What is the equivalent capacitance, in μF?${series ? roundTo(2) : ""}`,
          answer: num(C, series ? 2 : null),
          hint: series ? "In series: $\\dfrac1C = \\dfrac1{C_1} + \\dfrac1{C_2}$." : "In parallel capacitances add.",
          formula: series ? "\\dfrac{1}{C} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2}" : "C = C_1 + C_2",
          solution: series ? `$C = \\dfrac{${C1} \\cdot ${C2}}{${C1} + ${C2}} \\approx ${en(C, 2)}\\ \\mu\\text{F}$` : `$C = ${C1} + ${C2} = ${C}\\ \\mu\\text{F}$`,
        });
      }
      const C = r.int(2, 50), V = r.int(5, 100);
      const E = 0.5 * C * 1e-6 * V * V * 1000;
      return task({
        text: `A ${C} μF capacitor is charged to ${V} V. How much energy does it store, in mJ?${roundTo(2)}`,
        answer: num(E, 2),
        hint: "$E = \\tfrac12 C V^2$.",
        formula: "E = \\tfrac12 C V^2",
        solution: `$E = \\tfrac12 \\cdot ${C} \\times 10^{-6} \\cdot ${V}^2 \\approx ${en(E / 1000, 5)}\\ \\text{J} = ${en(E, 2)}\\ \\text{mJ}$`,
      });
    },
  },
  {
    id: "exf-circuits",
    topics: [T("current-electricity")],
    gen(level, r) {
      const R1 = r.int(2, 20), R2 = r.int(2, 20), V = r.pick([6, 9, 12, 24]);
      if (level === 1) {
        return task({
          text: `Resistors of ${R1} Ω and ${R2} Ω are connected in series to a ${V} V battery. What is the current in the circuit, in amperes?${roundTo(2)}`,
          answer: num(V / (R1 + R2), 2),
          hint: "In series the resistances add; then $I = V/R$.",
          formula: "I = \\dfrac{V}{R_1 + R_2}",
          solution: `$I = \\dfrac{${V}}{${R1} + ${R2}} \\approx ${en(V / (R1 + R2), 2)}\\ \\text{A}$`,
        });
      }
      if (level === 2) {
        const Rp = (R1 * R2) / (R1 + R2);
        return task({
          text: `Resistors of ${R1} Ω and ${R2} Ω are connected in parallel. What is their equivalent resistance, in ohms?${roundTo(2)}`,
          answer: num(Rp, 2),
          hint: "$\\dfrac1R = \\dfrac1{R_1} + \\dfrac1{R_2}$.",
          formula: "R = \\dfrac{R_1 R_2}{R_1 + R_2}",
          solution: `$R = \\dfrac{${R1} \\cdot ${R2}}{${R1} + ${R2}} \\approx ${en(Rp, 2)}\\ \\Omega$`,
        });
      }
      const E = r.pick([6, 9, 12]), rr = r.pick([0.5, 1, 2]), R = r.int(3, 20);
      const I = E / (R + rr), Vt = I * R;
      return task({
        text: `A battery with emf ${E} V and internal resistance ${rr} Ω is connected to a ${R} Ω resistor. What is the terminal voltage, in volts?${roundTo(2)}`,
        answer: num(Vt, 2),
        hint: "$I = \\dfrac{\\varepsilon}{R + r}$ and the terminal voltage is $IR$.",
        formula: "U = \\varepsilon - I r",
        solution: `$I = \\dfrac{${E}}{${R} + ${rr}} \\approx ${en(I, 3)}\\ \\text{A}$\n$U = IR \\approx ${en(Vt, 2)}\\ \\text{V}$`,
      });
    },
  },
  {
    id: "exf-magnetism",
    topics: [T("magnetism-and-induction")],
    gen(level, r) {
      if (level === 1) {
        const B = r.pick([0.1, 0.2, 0.5, 1.5]), I = r.int(1, 10), L = r.pick([0.2, 0.5, 1, 2]);
        return task({
          text: `A straight wire of length ${L} m carries a current of ${I} A at right angles to a uniform magnetic field of ${B} T. What is the force on the wire, in newtons?`,
          answer: num(B * I * L),
          hint: "$F = BIL\\sin\\theta$ with $\\theta = 90^\\circ$.",
          formula: "F = B I L \\sin\\theta",
          solution: `$F = ${B} \\cdot ${I} \\cdot ${L} = ${en(B * I * L)}\\ \\text{N}$`,
        });
      }
      if (level === 2) {
        const N = r.pick([50, 100, 200, 500]), dPhi = r.pick([0.002, 0.005, 0.01, 0.02]), dt = r.pick([0.1, 0.2, 0.5]);
        const emf = (N * dPhi) / dt;
        return task({
          text: `The magnetic flux through a coil of ${N} turns changes by ${dPhi} Wb in ${dt} s. What is the magnitude of the induced emf, in volts?`,
          answer: num(emf),
          hint: "Faraday's law: $\\varepsilon = N\\dfrac{\\Delta\\Phi}{\\Delta t}$.",
          formula: "\\varepsilon = N\\dfrac{\\Delta \\Phi}{\\Delta t}",
          solution: `$\\varepsilon = ${N} \\cdot \\dfrac{${dPhi}}{${dt}} = ${en(emf)}\\ \\text{V}$`,
        });
      }
      const v = r.pick([1, 2, 5]) * 1e6, B = r.pick([0.1, 0.2, 0.5]);
      const R = (9.11e-31 * v) / (1.6e-19 * B) * 1000;
      return task({
        text: `An electron moves at ${en(v / 1e6)} × 10⁶ m/s perpendicular to a magnetic field of ${B} T. What is the radius of its circular path, in mm? (Electron mass $9.11 \\times 10^{-31}$ kg, charge $1.6 \\times 10^{-19}$ C.)${roundTo(3)}`,
        answer: num(R, 3),
        hint: "The magnetic force provides the centripetal force: $qvB = \\dfrac{mv^2}{r}$.",
        formula: "r = \\dfrac{m v}{q B}",
        solution: `$r = \\dfrac{9.11 \\times 10^{-31} \\cdot ${en(v / 1e6)} \\times 10^6}{1.6 \\times 10^{-19} \\cdot ${B}} \\approx ${en(R, 3)}\\ \\text{mm}$`,
      });
    },
  },
  {
    id: "exf-optics",
    topics: [T("optics")],
    gen(level, r) {
      if (level === 1) {
        const n = r.pick([1.33, 1.5, 2.42]);
        const v = 3e8 / n / 1e8;
        return task({
          text: `The refractive index of a medium is ${n}. What is the speed of light in it, in units of $10^8$ m/s? (Speed of light in vacuum: $3 \\times 10^8$ m/s.)${roundTo(2)}`,
          answer: num(v, 2),
          hint: "$n = c/v$.",
          formula: "n = \\dfrac{c}{v}",
          solution: `$v = \\dfrac{3 \\times 10^8}{${n}} \\approx ${en(v, 2)} \\times 10^8\\ \\text{m/s}$`,
        });
      }
      if (level === 2) {
        const f = r.pick([10, 15, 20, 25]), u = f + r.pick([5, 10, 15, 20, 30]);
        const v = (u * f) / (u - f);
        return task({
          text: `An object is placed ${u} cm in front of a converging lens of focal length ${f} cm. How far from the lens is the image formed, in cm?${roundTo(1)}`,
          answer: num(v, 1),
          hint: "Thin lens equation: $\\dfrac1f = \\dfrac1u + \\dfrac1v$ (real-is-positive convention).",
          formula: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}",
          solution: `$\\dfrac1v = \\dfrac1{${f}} - \\dfrac1{${u}} \\Rightarrow v = \\dfrac{${u} \\cdot ${f}}{${u} - ${f}} \\approx ${en(v, 1)}\\ \\text{cm}$`,
        });
      }
      const n1 = 1, n2 = r.pick([1.33, 1.5]), i = r.pick([30, 40, 45, 60]);
      const ref = (Math.asin((n1 * Math.sin(rad(i))) / n2) * 180) / Math.PI;
      return task({
        text: `A ray of light passes from air into a medium of refractive index ${n2} at an angle of incidence of ${i}°. What is the angle of refraction, in degrees?${roundTo(1)}`,
        answer: num(ref, 1),
        hint: "Snell's law: $n_1 \\sin i = n_2 \\sin r$.",
        formula: "n_1 \\sin\\alpha = n_2 \\sin\\beta",
        solution: `$\\sin r = \\dfrac{\\sin ${i}^\\circ}{${n2}} \\approx ${en(Math.sin(rad(i)) / n2, 4)}$, $r \\approx ${en(ref, 1)}^\\circ$`,
      });
    },
  },
  {
    id: "exf-modern",
    topics: [T("modern-physics")],
    gen(level, r) {
      if (level === 1) {
        const T = r.pick([2, 5, 8, 10]), k = r.int(2, 5), N0 = r.pick([800, 1600, 3200, 6400]);
        return task({
          text: `A radioactive isotope has a half-life of ${T} days. Starting with ${N0} nuclei, how many remain undecayed after ${T * k} days?`,
          answer: num(N0 / 2 ** k),
          hint: "Count the half-lives and halve that many times.",
          formula: "N = N_0 \\left(\\tfrac12\\right)^{t/T_{1/2}}",
          solution: `$${T * k}/${T} = ${k}$ half-lives; $N = ${N0}/2^{${k}} = ${N0 / 2 ** k}$`,
        });
      }
      if (level === 2) {
        const lam = r.pick([200, 250, 300, 400]), W = r.pick([2, 2.3, 3, 4.2]);
        const E = 1240 / lam, K = E - W;
        if (K <= 0) return null;
        return task({
          text: `Light of wavelength ${lam} nm falls on a metal with work function ${W} eV. What is the maximum kinetic energy of the emitted photoelectrons, in eV? (Use $hc = 1240\\ \\text{eV·nm}$.)${roundTo(2)}`,
          answer: num(K, 2),
          hint: "Photon energy $E = hc/\\lambda$; $K_{\\max} = E - W$.",
          formula: "K_{\\max} = \\dfrac{hc}{\\lambda} - W",
          solution: `$E = 1240/${lam} \\approx ${en(E, 3)}\\ \\text{eV}$\n$K_{\\max} = ${en(E, 3)} - ${W} \\approx ${en(K, 2)}\\ \\text{eV}$`,
        });
      }
      const V = r.pick([50, 100, 150, 200, 400]);
      const lam = 1.227 / Math.sqrt(V);
      return task({
        text: `An electron is accelerated from rest through a potential difference of ${V} V. What is its de Broglie wavelength, in nm? (Use $\\lambda = \\dfrac{1.227}{\\sqrt{V}}$ nm.)${roundTo(3)}`,
        answer: num(lam, 3),
        hint: "Substitute the voltage into the given formula.",
        formula: "\\lambda = \\dfrac{h}{\\sqrt{2 m e V}} = \\dfrac{1.227}{\\sqrt{V}}\\ \\text{nm}",
        solution: `$\\lambda = \\dfrac{1.227}{\\sqrt{${V}}} \\approx ${en(lam, 3)}\\ \\text{nm}$`,
      });
    },
  },
];
