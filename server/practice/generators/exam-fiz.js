// Izpitne naloge iz fizike (angleško) za JEE, NEET, gaokao in CBSE: mehanika, nihanje,
// valovanje, toplota, elektrika, magnetizem, optika in moderna fizika.
// Enota je v besedilu (»in m/s«), odgovor je samo število. g = 10 m/s², kot na teh izpitih.
import { en, num, numM, dq, roundTo, task } from "./exam-util.js";

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
      const gtxt = " (Take $g = 10\\ \\text{m/s}^2$.)";
      if (level === 1) {
        const v = r.int(0, 4);
        if (v === 0) {
          const m = r.pick([0.5, 1, 2, 3, 4, 5, 8, 10]), vv = r.int(2, 20);
          const E = 0.5 * m * vv * vv;
          return task({
            text: `What is the kinetic energy of a ${en(m)} kg object moving at ${vv} m/s, in joules?`,
            answer: numM(E, null, [[m * vv * vv, "You forgot the factor ½."], [0.5 * m * vv, "The speed must be squared."]]),
            data: { given: [dq("m", m, "kg"), dq("v", vv, "m/s")], find: ["E_k"] },
            hint: "Kinetic energy depends on the square of the speed.",
            formula: "E_k = \\tfrac12 m v^2",
            solution: `$E_k = \\tfrac12 \\cdot ${en(m)} \\cdot ${vv}^2$\n$E_k = ${en(E)}\\ \\text{J}$`,
          });
        }
        if (v === 1) {
          const m = r.pick([0.2, 0.5, 2, 5, 12, 40, 60]), h = r.pick([1.5, 2, 3, 5, 8, 12, 20]);
          const E = m * G * h;
          return task({
            text: `A ${en(m)} kg object is lifted ${en(h)} m. By how much does its gravitational potential energy increase, in joules?${gtxt}`,
            answer: numM(E, null, [[m * h, "Multiply by $g$ as well."], [0.5 * m * G * h, "There is no ½ in $mgh$."]]),
            data: { given: [dq("m", m, "kg"), dq("h", h, "m"), dq("g", 10, "m/s^2")], find: ["\\Delta E_p"] },
            hint: "Potential energy gained = weight × height.",
            formula: "\\Delta E_p = m g h",
            solution: `$\\Delta E_p = ${en(m)} \\cdot 10 \\cdot ${en(h)}$\n$\\Delta E_p = ${en(E)}\\ \\text{J}$`,
          });
        }
        if (v === 2) {
          const F = r.int(5, 60), d = r.int(2, 25), th = r.pick([0, 60]);
          const W = F * d * Math.cos((th * Math.PI) / 180);
          return task({
            text: `A force of ${F} N pulls a box ${d} m along the floor. The force makes an angle of ${th}° with the direction of motion. How much work does the force do, in joules?`,
            answer: numM(Math.round(W * 1e6) / 1e6, null, [[th ? F * d : NaN, "Only the component of the force along the motion does work: multiply by $\\cos\\theta$."], [F / d, "Work is force times distance, not force divided by distance."]]),
            data: { given: [dq("F", F, "N"), dq("s", d, "m"), `\\theta = ${th}^\\circ`], find: ["W"] },
            hint: "Use the component of the force along the displacement.",
            formula: "W = F s \\cos\\theta",
            solution: `$W = ${F} \\cdot ${d} \\cdot \\cos ${th}^\\circ$\n$W = ${en(W)}\\ \\text{J}$`,
          });
        }
        if (v === 3) {
          const W = r.pick([600, 1200, 1800, 2400, 3000, 4500, 9000]), t = r.pick([3, 5, 6, 10, 12, 15, 20, 30]);
          return task({
            text: `A motor does ${W} J of work in ${t} s. What is its average power, in watts?${roundTo(1)}`,
            answer: numM(W / t, 1, [[W * t, "Power is work divided by time."], [t / W, "You inverted the ratio: $P = W/t$."]]),
            data: { given: [dq("W", W, "J"), dq("t", t, "s")], find: ["P"] },
            hint: "Power is the rate of doing work.",
            formula: "P = \\dfrac{W}{t}",
            solution: `$P = \\dfrac{${W}}{${t}}$\n$P \\approx ${en(W / t, 1)}\\ \\text{W}$`,
          });
        }
        const k = r.pick([50, 100, 200, 400, 500, 800]), x = r.pick([0.02, 0.05, 0.1, 0.15, 0.2]);
        const E = 0.5 * k * x * x;
        return task({
          text: `A spring with spring constant ${k} N/m is compressed by ${en(x)} m. How much elastic potential energy does it store, in joules?${roundTo(3)}`,
          answer: numM(E, 3, [[k * x * x, "You forgot the factor ½."], [0.5 * k * x, "The compression must be squared."]]),
          data: { given: [dq("k", k, "N/m"), dq("x", x, "m")], find: ["E_{el}"] },
          hint: "Elastic energy depends on the square of the compression.",
          formula: "E_{el} = \\tfrac12 k x^2",
          solution: `$E_{el} = \\tfrac12 \\cdot ${k} \\cdot ${en(x)}^2$\n$E_{el} \\approx ${en(E, 3)}\\ \\text{J}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 3);
        if (v === 0) {
          const h = r.pick([1.25, 1.8, 3.2, 5, 7.2, 11.25, 20, 31.25, 45, 80]);
          const vv = Math.sqrt(2 * G * h);
          return task({
            text: `A stone is dropped from a height of ${en(h)} m. Ignoring air resistance, what is its speed just before it hits the ground, in m/s?${gtxt}`,
            answer: numM(vv, null, [[G * h * 2, "Take the square root: $v^2 = 2gh$."], [Math.sqrt(G * h), "Energy: $mgh = \\tfrac12 mv^2$, so $v = \\sqrt{2gh}$ (do not drop the 2)."]]),
            data: { given: [dq("h", h, "m"), dq("g", 10, "m/s^2")], find: ["v"] },
            hint: "Potential energy turns into kinetic energy: $mgh = \\tfrac12 m v^2$; the mass cancels.",
            formula: "mgh = \\tfrac12 m v^2",
            solution: `$v^2 = 2gh = 2 \\cdot 10 \\cdot ${en(h)} = ${en(2 * G * h)}$\n$v = \\sqrt{${en(2 * G * h)}} = ${en(vv)}\\ \\text{m/s}$`,
          });
        }
        if (v === 1) {
          const m = r.pick([800, 1000, 1200, 1500]), kmh = r.pick([36, 54, 72, 90, 108]), F = r.pick([4000, 5000, 6000, 8000]);
          const vv = kmh / 3.6, d = (0.5 * m * vv * vv) / F;
          return task({
            text: `A ${m} kg car travelling at ${kmh} km/h brakes with a constant braking force of ${F} N. What is its stopping distance, in meters?${roundTo(1)}`,
            answer: numM(d, 1, [[(0.5 * m * kmh * kmh) / F, "Convert km/h to m/s first (divide by 3.6)."], [(m * vv * vv) / F, "Kinetic energy has a factor ½."]]),
            data: { given: [dq("m", m, "kg"), dq("v", kmh, "km/h"), dq("F", F, "N")], find: ["s"] },
            hint: "The braking force does work equal to the car's kinetic energy.",
            formula: "F s = \\tfrac12 m v^2",
            solution: `$v = ${kmh} / 3.6 = ${en(vv)}\\ \\text{m/s}$\n$E_k = \\tfrac12 \\cdot ${m} \\cdot ${en(vv)}^2 = ${en(0.5 * m * vv * vv)}\\ \\text{J}$\n$s = \\dfrac{${en(0.5 * m * vv * vv)}}{${F}} \\approx ${en(d, 1)}\\ \\text{m}$`,
          });
        }
        if (v === 2) {
          const k = r.pick([100, 200, 400, 500, 800]), x = r.pick([0.05, 0.1, 0.2]), m = r.pick([0.1, 0.2, 0.5, 1]);
          const vv = x * Math.sqrt(k / m);
          return task({
            text: `A spring (k = ${k} N/m) compressed by ${en(x)} m launches a ${en(m)} kg block on a frictionless table. What is the block's speed when it leaves the spring, in m/s?${roundTo(2)}`,
            answer: numM(vv, 2, [[x * x * Math.sqrt(k / m), "Set $\\tfrac12 kx^2 = \\tfrac12 mv^2$ and solve: $v = x\\sqrt{k/m}$."], [(k * x * x) / m, "Take the square root to get $v$ from $v^2$."]]),
            data: { given: [dq("k", k, "N/m"), dq("x", x, "m"), dq("m", m, "kg")], find: ["v"] },
            hint: "Elastic energy of the spring becomes kinetic energy of the block.",
            formula: "\\tfrac12 k x^2 = \\tfrac12 m v^2",
            solution: `$E = \\tfrac12 \\cdot ${k} \\cdot ${en(x)}^2 = ${en(0.5 * k * x * x)}\\ \\text{J}$\n$v = \\sqrt{\\dfrac{2E}{m}} = \\sqrt{\\dfrac{${en(k * x * x)}}{${en(m)}}} \\approx ${en(vv, 2)}\\ \\text{m/s}$`,
          });
        }
        const V = r.pick([200, 500, 1000, 1500, 2000]), h = r.pick([5, 8, 10, 15, 20]), t = r.pick([60, 120, 300, 600]);
        const P = (V * G * h) / t;
        return task({
          text: `A pump lifts ${V} L of water (1 L has mass 1 kg) through a height of ${h} m in ${t} s. What is the useful power of the pump, in watts?${roundTo(1)}${gtxt}`,
          answer: numM(P, 1, [[V * G * h, "That is the work; divide by the time."], [(V * h) / t, "Work against gravity is $mgh$: include $g$."]]),
          data: { given: [dq("V", V, "L"), dq("h", h, "m"), dq("t", t, "s"), dq("g", 10, "m/s^2")], find: ["P"] },
          hint: "Find the mass of water, the work $mgh$ done on it, and divide by the time.",
          formula: "P = \\dfrac{mgh}{t}",
          solution: `$m = ${V}\\ \\text{kg}$\n$W = ${V} \\cdot 10 \\cdot ${h} = ${V * G * h}\\ \\text{J}$\n$P = \\dfrac{${V * G * h}}{${t}} \\approx ${en(P, 1)}\\ \\text{W}$`,
        });
      }
      const v = r.int(0, 3);
      if (v === 0) {
        const m = r.int(50, 120), h = r.int(3, 15), t = r.int(5, 30), eta = r.pick([0.2, 0.25]);
        const P = (m * G * h) / t;
        return task({
          text: `A ${m} kg person climbs a staircase ${h} m high in ${t} s. The body converts food energy into mechanical work with an efficiency of ${en(eta * 100)}%. What power must the body supply from food, in watts?${roundTo(1)}${gtxt}`,
          answer: numM(P / eta, 1, [[P, "That is the useful (mechanical) power; divide by the efficiency."], [P * eta, "Divide by the efficiency: the input is larger than the output."]]),
          data: { given: [dq("m", m, "kg"), dq("h", h, "m"), dq("t", t, "s"), `\\eta = ${en(eta * 100)}\\%`, dq("g", 10, "m/s^2")], find: ["P_{in}"] },
          hint: "Find the useful power $mgh/t$, then the input power from the efficiency.",
          formula: ["P = \\dfrac{mgh}{t}", "\\eta = \\dfrac{P}{P_{in}}"],
          solution: `$W = ${m} \\cdot 10 \\cdot ${h} = ${m * G * h}\\ \\text{J}$\n$P = ${m * G * h} / ${t} \\approx ${en(P, 2)}\\ \\text{W}$\n$P_{in} = P / ${en(eta)} \\approx ${en(P / eta, 1)}\\ \\text{W}$`,
        });
      }
      if (v === 1) {
        const m = r.pick([2, 5, 10, 20]), h = r.pick([2, 3, 4, 5, 8]), vb = r.pick([4, 5, 6, 7, 8]);
        if (vb * vb >= 2 * G * h) return null;
        const Wf = m * G * h - 0.5 * m * vb * vb;
        return task({
          text: `A ${m} kg box slides from rest down a rough ramp from a height of ${h} m and reaches the bottom at ${vb} m/s. How much energy was lost to friction, in joules?${gtxt}`,
          answer: numM(Wf, null, [[0.5 * m * vb * vb, "That is the kinetic energy at the bottom; the loss is $mgh - \\tfrac12 mv^2$."], [m * G * h, "That is the starting potential energy; part of it became kinetic energy."]]),
          data: { given: [dq("m", m, "kg"), dq("h", h, "m"), dq("v", vb, "m/s"), dq("g", 10, "m/s^2")], find: ["W_{fr}"] },
          hint: "Compare the energy at the top with the energy at the bottom.",
          formula: "W_{fr} = mgh - \\tfrac12 m v^2",
          solution: `Top: $E_p = ${m} \\cdot 10 \\cdot ${h} = ${m * G * h}\\ \\text{J}$\nBottom: $E_k = \\tfrac12 \\cdot ${m} \\cdot ${vb}^2 = ${en(0.5 * m * vb * vb)}\\ \\text{J}$\nLost: $${m * G * h} - ${en(0.5 * m * vb * vb)} = ${en(Wf)}\\ \\text{J}$`,
        });
      }
      if (v === 2) {
        const L = r.pick([0.4, 0.8, 1, 1.6, 2, 2.5]), th = r.pick([30, 45, 60, 90]);
        const vv = Math.sqrt(2 * G * L * (1 - Math.cos((th * Math.PI) / 180)));
        return task({
          text: `A pendulum of length ${en(L)} m is released from rest with the string at ${th}° to the vertical. What is the speed of the bob at the lowest point, in m/s?${roundTo(2)}${gtxt}`,
          answer: numM(vv, 2, [[Math.sqrt(2 * G * L), "The bob does not fall the full length $L$: the drop is $L(1 - \\cos\\theta)$."], [Math.sqrt(2 * G * L * Math.cos((th * Math.PI) / 180)), "The height drop is $L - L\\cos\\theta$, not $L\\cos\\theta$."]]),
          data: { given: [dq("L", L, "m"), `\\theta = ${th}^\\circ`, dq("g", 10, "m/s^2")], find: ["v"] },
          hint: "Find how far the bob drops vertically, then use conservation of energy.",
          formula: ["h = L(1 - \\cos\\theta)", "v = \\sqrt{2gh}"],
          solution: `$h = ${en(L)}(1 - \\cos ${th}^\\circ) \\approx ${en(L * (1 - Math.cos((th * Math.PI) / 180)), 3)}\\ \\text{m}$\n$v = \\sqrt{2 \\cdot 10 \\cdot ${en(L * (1 - Math.cos((th * Math.PI) / 180)), 3)}} \\approx ${en(vv, 2)}\\ \\text{m/s}$`,
        });
      }
      const Pw = r.pick([20, 30, 40, 60, 75]), kmh = r.pick([72, 90, 108, 126]), dist = r.pick([10, 20, 50, 100]);
      const vv = kmh / 3.6, F = (Pw * 1000) / vv, W = F * dist * 1000;
      return task({
        text: `A car's engine delivers ${Pw} kW while the car moves at a constant ${kmh} km/h. How much work does the engine do against resistive forces over ${dist} km, in megajoules?${roundTo(1)}`,
        answer: numM(W / 1e6, 1, [[(Pw * 1000 * dist * 1000) / kmh / 1e6, "Convert km/h to m/s before dividing."], [(F * dist) / 1e6, "Convert the distance to meters."]]),
        data: { given: [dq("P", Pw, "kW"), dq("v", kmh, "km/h"), dq("s", dist, "km")], find: ["W"] },
        hint: "At constant speed the engine force equals the resistance: $F = P/v$. Then $W = Fs$.",
        formula: ["P = F v", "W = F s"],
        solution: `$v = ${kmh}/3.6 = ${en(vv)}\\ \\text{m/s}$\n$F = \\dfrac{${Pw * 1000}}{${en(vv)}} \\approx ${en(F, 1)}\\ \\text{N}$\n$W = ${en(F, 1)} \\cdot ${dist * 1000} \\approx ${en(W / 1e6, 1)}\\ \\text{MJ}$`,
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
      const gtxt = " (Take $g = 10\\ \\text{m/s}^2$.)";
      if (level === 1) {
        const v = r.int(0, 2);
        if (v === 0) {
          const m = r.int(1, 5), vv = r.int(2, 12), R = r.pick([0.5, 0.8, 1, 1.5, 2, 4]);
          const F = (m * vv * vv) / R;
          return task({
            text: `A ${m} kg stone is whirled in a horizontal circle of radius ${en(R)} m at ${vv} m/s. What is the centripetal force, in newtons?${roundTo(1)}`,
            answer: numM(F, 1, [[(m * vv) / R, "The speed must be squared."], [m * vv * vv * R, "Divide by the radius, do not multiply."]]),
            data: { given: [dq("m", m, "kg"), dq("v", vv, "m/s"), dq("r", R, "m")], find: ["F"] },
            hint: "The centripetal force grows with the square of the speed.",
            formula: "F = \\dfrac{m v^2}{r}",
            solution: `$F = \\dfrac{${m} \\cdot ${vv}^2}{${en(R)}}$\n$F \\approx ${en(F, 1)}\\ \\text{N}$`,
          });
        }
        if (v === 1) {
          const R = r.pick([0.2, 0.5, 1, 2, 5, 10]), Tp = r.pick([0.5, 1, 2, 4, 5]);
          const vv = (2 * Math.PI * R) / Tp;
          return task({
            text: `A point on a wheel moves in a circle of radius ${en(R)} m and makes one revolution every ${en(Tp)} s. What is its speed, in m/s?${roundTo(2)}`,
            answer: numM(vv, 2, [[(Math.PI * R) / Tp, "The circumference is $2\\pi r$, not $\\pi r$."], [(2 * Math.PI * R) * Tp, "Divide the circumference by the period."]]),
            data: { given: [dq("r", R, "m"), dq("T", Tp, "s")], find: ["v"] },
            hint: "In one period the point travels one circumference.",
            formula: "v = \\dfrac{2\\pi r}{T}",
            solution: `$v = \\dfrac{2\\pi \\cdot ${en(R)}}{${en(Tp)}}$\n$v \\approx ${en(vv, 2)}\\ \\text{m/s}$`,
          });
        }
        const vv = r.int(2, 30), R = r.pick([0.5, 2, 5, 10, 20, 50]);
        return task({
          text: `A car moves at a constant ${vv} m/s around a curve of radius ${en(R)} m. What is its centripetal acceleration, in m/s²?${roundTo(2)}`,
          answer: numM((vv * vv) / R, 2, [[vv / R, "The speed must be squared."], [R / (vv * vv), "You inverted the ratio: $a = v^2/r$."]]),
          data: { given: [dq("v", vv, "m/s"), dq("r", R, "m")], find: ["a_c"] },
          hint: "Centripetal acceleration depends on the speed squared and the radius.",
          formula: "a_c = \\dfrac{v^2}{r}",
          solution: `$a_c = \\dfrac{${vv}^2}{${en(R)}}$\n$a_c \\approx ${en((vv * vv) / R, 2)}\\ \\text{m/s}^2$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 3);
        if (v === 0) {
          const k = r.pick([1.5, 2, 3, 4, 5, 10]);
          const g = 9.8 / (k * k);
          return task({
            text: `The acceleration due to gravity at the Earth's surface is $9.8\\ \\text{m/s}^2$. What is it at a distance of ${en(k)} Earth radii from the Earth's centre, in m/s²?${roundTo(2)}`,
            answer: numM(g, 2, [[9.8 / k, "Gravity falls off as $1/r^2$, not $1/r$."], [9.8 / ((k - 1) * (k - 1)), "Distance is measured from the Earth's centre, not from the surface."]]),
            data: { given: [dq("g_0", 9.8, "m/s^2"), `r = ${en(k)} R`], find: ["g"] },
            hint: "Gravity falls off as the inverse square of the distance from the centre.",
            formula: "g(r) = g_0 \\left(\\dfrac{R}{r}\\right)^2",
            solution: `$\\left(\\dfrac{R}{r}\\right)^2 = \\dfrac{1}{${en(k * k)}}$\n$g = 9.8 / ${en(k * k)} \\approx ${en(g, 2)}\\ \\text{m/s}^2$`,
          });
        }
        if (v === 1) {
          const mu = r.pick([0.3, 0.4, 0.5, 0.6, 0.8]), R = r.pick([20, 30, 40, 50, 80, 100]);
          const vv = Math.sqrt(mu * G * R);
          return task({
            text: `A car rounds a flat curve of radius ${R} m. The coefficient of static friction between the tyres and the road is ${en(mu)}. What is the maximum speed without skidding, in m/s?${roundTo(1)}${gtxt}`,
            answer: numM(vv, 1, [[mu * G * R, "Take the square root: friction gives $v^2 = \\mu g r$."], [Math.sqrt(G * R), "Friction provides the centripetal force; include $\\mu$."]]),
            data: { given: [dq("r", R, "m"), `\\mu = ${en(mu)}`, dq("g", 10, "m/s^2")], find: ["v_{max}"] },
            hint: "Maximum static friction $\\mu mg$ provides the centripetal force $mv^2/r$.",
            formula: "\\mu m g = \\dfrac{m v^2}{r}",
            solution: `$v^2 = \\mu g r = ${en(mu)} \\cdot 10 \\cdot ${R} = ${en(mu * G * R)}$\n$v = \\sqrt{${en(mu * G * R)}} \\approx ${en(vv, 1)}\\ \\text{m/s}$`,
          });
        }
        if (v === 2) {
          const vv = r.pick([10, 15, 20, 25]), R = r.pick([50, 80, 100, 150, 200]);
          const th = (Math.atan((vv * vv) / (R * G)) * 180) / Math.PI;
          return task({
            text: `At what angle should a road curve of radius ${R} m be banked so that a car at ${vv} m/s needs no friction, in degrees?${roundTo(1)}${gtxt}`,
            answer: numM(th, 1, [[(Math.atan((R * G) / (vv * vv)) * 180) / Math.PI, "You inverted the ratio: $\\tan\\theta = v^2/(rg)$."], [(Math.asin(Math.min(1, (vv * vv) / (R * G))) * 180) / Math.PI, "Use the tangent: the normal force's components give $\\tan\\theta$."]]),
            data: { given: [dq("r", R, "m"), dq("v", vv, "m/s"), dq("g", 10, "m/s^2")], find: ["\\theta"] },
            hint: "The horizontal component of the normal force provides the centripetal force; the vertical one balances the weight.",
            formula: "\\tan\\theta = \\dfrac{v^2}{r g}",
            solution: `$\\tan\\theta = \\dfrac{${vv}^2}{${R} \\cdot 10} = ${en((vv * vv) / (R * G), 4)}$\n$\\theta \\approx ${en(th, 1)}^\\circ$`,
          });
        }
        const T1 = r.pick([1, 2, 3]), x = r.pick([2, 3, 4, 9]);
        const T2 = T1 * x ** 1.5;
        return task({
          text: `A satellite orbits a planet with period ${T1} h. Another satellite orbits the same planet at ${x} times the orbital radius. What is its period, in hours?${roundTo(1)}`,
          answer: numM(T2, 1, [[T1 * x, "Period is not proportional to the radius: $T^2 \\propto r^3$."], [T1 * x * x, "Kepler's law: $T \\propto r^{3/2}$, not $r^2$."]]),
          data: { given: [dq("T_1", T1, "h"), `r_2 = ${x} r_1`], find: ["T_2"] },
          hint: "Use Kepler's third law in ratio form.",
          formula: "\\dfrac{T_2^2}{T_1^2} = \\dfrac{r_2^3}{r_1^3}",
          solution: `$T_2 = T_1 \\left(\\dfrac{r_2}{r_1}\\right)^{3/2} = ${T1} \\cdot ${x}^{3/2}$\n$${x}^{3/2} \\approx ${en(x ** 1.5, 3)}$\n$T_2 \\approx ${en(T2, 1)}\\ \\text{h}$`,
        });
      }
      const v = r.int(0, 3);
      if (v === 0) {
        const R = r.pick([0.4, 0.9, 1.6, 2.5, 3.6, 4.9]), m = r.pick([0.2, 0.5, 1]);
        const vt = Math.sqrt(G * R), vb = Math.sqrt(5 * G * R), Tb = 6 * m * G;
        const ask = r.int(0, 1);
        return task({
          text: ask === 0
            ? `A ${en(m)} kg ball on a string moves in a vertical circle of radius ${en(R)} m with the minimum speed needed to keep the string taut at the top. What is its speed at the bottom, in m/s?${roundTo(2)}${gtxt}`
            : `A ${en(m)} kg ball on a string moves in a vertical circle of radius ${en(R)} m with the minimum speed needed to keep the string taut at the top. What is the tension in the string at the bottom, in newtons?${gtxt}`,
          answer: ask === 0
            ? numM(vb, 2, [[vt, "That is the speed at the top; the ball gains energy falling $2r$."], [Math.sqrt(3 * G * R), "The ball falls $2r$ (a diameter), not $r$."]])
            : numM(Tb, null, [[m * G, "At the bottom the tension must also provide the centripetal force."], [5 * m * G, "Tension = $mg + mv^2/r$: add the weight."]]),
          data: { given: [dq("m", m, "kg"), dq("r", R, "m"), dq("g", 10, "m/s^2")], find: [ask === 0 ? "v_b" : "T_b"] },
          hint: "At the top gravity alone gives the centripetal force. Then use energy conservation down to the bottom (drop $2r$).",
          formula: ["mg = \\dfrac{m v_t^2}{r}", "v_b^2 = v_t^2 + 2g(2r)", "T_b - mg = \\dfrac{m v_b^2}{r}"],
          solution: `Top: $v_t^2 = g r = ${en(G * R)}$\nBottom: $v_b^2 = v_t^2 + 4gr = 5gr = ${en(5 * G * R)}$, $v_b \\approx ${en(vb, 2)}\\ \\text{m/s}$${ask === 1 ? `\n$T_b = mg + \\dfrac{m v_b^2}{r} = mg + 5mg = 6mg = ${en(Tb)}\\ \\text{N}$` : ""}`,
        });
      }
      if (v === 1) {
        const m = r.pick([0.2, 0.5, 1, 2]), R = r.pick([0.5, 0.8, 1, 1.2]), vv = r.pick([4, 5, 6, 8]);
        const Tt = (m * vv * vv) / R - m * G;
        if (Tt <= 0) return null;
        return task({
          text: `A ${en(m)} kg ball on a string moves in a vertical circle of radius ${en(R)} m. At the top of the circle its speed is ${vv} m/s. What is the tension in the string at the top, in newtons?${roundTo(1)}${gtxt}`,
          answer: numM(Tt, 1, [[(m * vv * vv) / R + m * G, "At the top weight and tension both point down (toward the centre): subtract $mg$."], [(m * vv * vv) / R, "Gravity also acts toward the centre at the top."]]),
          data: { given: [dq("m", m, "kg"), dq("r", R, "m"), dq("v", vv, "m/s"), dq("g", 10, "m/s^2")], find: ["T"] },
          hint: "At the top both the tension and the weight point toward the centre.",
          formula: "T + mg = \\dfrac{m v^2}{r}",
          solution: `$\\dfrac{m v^2}{r} = \\dfrac{${en(m)} \\cdot ${vv}^2}{${en(R)}} = ${en((m * vv * vv) / R, 2)}\\ \\text{N}$\n$mg = ${en(m * G)}\\ \\text{N}$\n$T = ${en((m * vv * vv) / R, 2)} - ${en(m * G)} \\approx ${en(Tt, 1)}\\ \\text{N}$`,
        });
      }
      if (v === 2) {
        const [pl, g0, Rkm] = r.pick([["Earth", 10, 6400], ["the Moon", 1.6, 1740], ["Mars", 3.7, 3390], ["Mercury", 3.7, 2440]]);
        const ve = Math.sqrt(2 * g0 * Rkm * 1000) / 1000;
        return task({
          text: `The surface gravity of ${pl} is $${en(g0)}\\ \\text{m/s}^2$ and its radius is ${Rkm} km. What is the escape speed from its surface, in km/s?${roundTo(2)}`,
          answer: numM(ve, 2, [[ve / Math.SQRT2, "That is the orbital speed near the surface; escape speed is $\\sqrt2$ times larger."], [Math.sqrt(2 * g0 * Rkm) / 1000, "Convert the radius to meters before using the formula."]]),
          data: { given: [dq("g", g0, "m/s^2"), dq("R", Rkm, "km")], find: ["v_e"] },
          hint: "Use $GM = gR^2$ in the escape speed formula.",
          formula: ["v_e = \\sqrt{\\dfrac{2GM}{R}}", "GM = g R^2"],
          solution: `$v_e = \\sqrt{2 g R}$\n$v_e = \\sqrt{2 \\cdot ${en(g0)} \\cdot ${Rkm * 1000}}\\ \\text{m/s}$\n$v_e \\approx ${en(ve * 1000, 0)}\\ \\text{m/s} \\approx ${en(ve, 2)}\\ \\text{km/s}$`,
        });
      }
      const h = r.pick([300, 400, 600, 1000, 2000]), R = 6400;
      const rr = (R + h) * 1000, vo = Math.sqrt((10 * (R * 1000) ** 2) / rr), Tm = (2 * Math.PI * rr) / vo / 60;
      return task({
        text: `A satellite orbits the Earth at a height of ${h} km above the surface. Earth's radius is ${R} km and $g = 10\\ \\text{m/s}^2$ at the surface. What is its orbital period, in minutes?${roundTo(0)}`,
        answer: numM(Tm, 0, [[(2 * Math.PI * h * 1000) / Math.sqrt((10 * (R * 1000) ** 2) / (h * 1000)) / 60, "Measure the orbital radius from the Earth's centre: $r = R + h$."], [(2 * Math.PI * rr) / Math.sqrt(10 * rr) / 60, "Gravity is weaker at height: use $g_0 R^2 / r$, not $g_0$."]]),
        data: { given: [dq("h", h, "km"), dq("R", R, "km"), dq("g_0", 10, "m/s^2")], find: ["T"] },
        hint: "Gravity provides the centripetal force; use $GM = g_0R^2$ and $r = R + h$.",
        formula: ["\\dfrac{GMm}{r^2} = \\dfrac{m v^2}{r}", "GM = g_0 R^2", "T = \\dfrac{2\\pi r}{v}"],
        solution: `$r = ${R} + ${h} = ${R + h}\\ \\text{km}$\n$v = \\sqrt{\\dfrac{g_0 R^2}{r}} \\approx ${en(vo, 0)}\\ \\text{m/s}$\n$T = \\dfrac{2\\pi r}{v} \\approx ${en(Tm * 60, 0)}\\ \\text{s} \\approx ${en(Tm, 0)}\\ \\text{min}$`,
      });
    },
  },
  {
    id: "exf-shm",
    topics: [T("oscillations")],
    gen(level, r) {
      const gtxt = " (Take $g = 10\\ \\text{m/s}^2$.)";
      const TP = 2 * Math.PI;
      if (level === 1) {
        const v = r.int(0, 3);
        if (v === 0) {
          const L = r.pick([0.1, 0.25, 0.4, 0.9, 1.6, 2.5, 3.6]);
          const T = TP * Math.sqrt(L / G);
          return task({
            text: `What is the period of a simple pendulum of length ${en(L)} m, in seconds?${roundTo(2)}${gtxt}`,
            answer: numM(T, 2, [[TP * Math.sqrt(G / L), "You inverted the ratio under the root: it is $L/g$."], [Math.sqrt(L / G), "You forgot the factor $2\\pi$."]]),
            data: { given: [dq("L", L, "m"), dq("g", 10, "m/s^2")], find: ["T"] },
            hint: "The period depends only on the length and $g$.",
            formula: "T = 2\\pi\\sqrt{\\dfrac{L}{g}}",
            solution: `$T = 2\\pi\\sqrt{${en(L)}/10} = 2\\pi \\cdot ${en(Math.sqrt(L / G), 4)}$\n$T \\approx ${en(T, 2)}\\ \\text{s}$`,
          });
        }
        if (v === 1) {
          const m = r.pick([0.1, 0.2, 0.5, 1, 2]), k = r.pick([20, 50, 80, 100, 200, 400]);
          const T = TP * Math.sqrt(m / k);
          return task({
            text: `A mass of ${en(m)} kg oscillates on a spring with spring constant ${k} N/m. What is the period of oscillation, in seconds?${roundTo(3)}`,
            answer: numM(T, 3, [[TP * Math.sqrt(k / m), "You inverted the ratio under the root: it is $m/k$."], [Math.sqrt(m / k), "You forgot the factor $2\\pi$."]]),
            data: { given: [dq("m", m, "kg"), dq("k", k, "N/m")], find: ["T"] },
            hint: "A heavier mass oscillates more slowly, a stiffer spring faster.",
            formula: "T = 2\\pi\\sqrt{\\dfrac{m}{k}}",
            solution: `$T = 2\\pi\\sqrt{${en(m)}/${k}} = 2\\pi \\cdot ${en(Math.sqrt(m / k), 4)}$\n$T \\approx ${en(T, 3)}\\ \\text{s}$`,
          });
        }
        if (v === 2) {
          const A = r.pick([0.02, 0.05, 0.1, 0.2, 0.3]), w = r.int(2, 12);
          return task({
            text: `A particle performs simple harmonic motion with amplitude ${en(A)} m and angular frequency ${w} rad/s. What is its maximum speed, in m/s?`,
            answer: numM(Math.round(A * w * 1e6) / 1e6, null, [[A * w * w, "That is the maximum acceleration $A\\omega^2$."], [A / w, "Multiply the amplitude by $\\omega$."]]),
            data: { given: [dq("A", A, "m"), dq("\\omega", w, "rad/s")], find: ["v_{max}"] },
            hint: "The maximum speed is reached at the equilibrium position.",
            formula: "v_{max} = A\\omega",
            solution: `$v_{max} = A\\omega = ${en(A)} \\cdot ${w}$\n$v_{max} = ${en(A * w)}\\ \\text{m/s}$`,
          });
        }
        const A = r.pick([0.02, 0.05, 0.1, 0.2]), w = r.int(2, 10);
        return task({
          text: `A body in simple harmonic motion has amplitude ${en(A)} m and angular frequency ${w} rad/s. What is its maximum acceleration, in m/s²?`,
          answer: numM(Math.round(A * w * w * 1e6) / 1e6, null, [[A * w, "That is the maximum speed $A\\omega$; acceleration needs $\\omega^2$."], [A * A * w, "It is $A\\omega^2$, not $A^2\\omega$."]]),
          data: { given: [dq("A", A, "m"), dq("\\omega", w, "rad/s")], find: ["a_{max}"] },
          hint: "The acceleration is largest at the turning points.",
          formula: "a_{max} = A\\omega^2",
          solution: `$a_{max} = A\\omega^2 = ${en(A)} \\cdot ${w}^2$\n$a_{max} = ${en(A * w * w)}\\ \\text{m/s}^2$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 3);
        if (v === 0) {
          const T = r.pick([1, 1.5, 2, 2.5, 3]);
          const L = G * (T / TP) ** 2;
          return task({
            text: `What length must a simple pendulum have to have a period of ${en(T)} s, in meters?${roundTo(3)}${gtxt}`,
            answer: numM(L, 3, [[G * T / TP, "Square $T/(2\\pi)$ when solving for $L$."], [G * T * T, "You forgot to divide by $(2\\pi)^2$."]]),
            data: { given: [dq("T", T, "s"), dq("g", 10, "m/s^2")], find: ["L"] },
            hint: "Solve $T = 2\\pi\\sqrt{L/g}$ for $L$: square both sides.",
            formula: "L = g\\left(\\dfrac{T}{2\\pi}\\right)^2",
            solution: `$\\dfrac{T}{2\\pi} = ${en(T / TP, 4)}$\n$L = 10 \\cdot ${en(T / TP, 4)}^2 \\approx ${en(L, 3)}\\ \\text{m}$`,
          });
        }
        if (v === 1) {
          const x = r.pick([0.01, 0.02, 0.04, 0.05, 0.1]);
          const T = TP * Math.sqrt(x / G);
          return task({
            text: `A mass hung on a spring stretches it by ${en(x)} m at equilibrium. If the mass is pulled down slightly and released, what is the period of oscillation, in seconds?${roundTo(3)}${gtxt}`,
            answer: numM(T, 3, [[TP * Math.sqrt(G / x), "At equilibrium $kx = mg$, so $m/k = x/g$ (not $g/x$)."], [Math.sqrt(x / G), "You forgot the factor $2\\pi$."]]),
            data: { given: [dq("x", x, "m"), dq("g", 10, "m/s^2")], find: ["T"] },
            hint: "From the equilibrium condition $kx = mg$ find $m/k$.",
            formula: ["k x = m g", "T = 2\\pi\\sqrt{\\dfrac{m}{k}}"],
            solution: `$\\dfrac{m}{k} = \\dfrac{x}{g} = \\dfrac{${en(x)}}{10} = ${en(x / G)}$\n$T = 2\\pi\\sqrt{${en(x / G)}} \\approx ${en(T, 3)}\\ \\text{s}$`,
          });
        }
        if (v === 2) {
          const m = r.pick([0.1, 0.2, 0.5, 1, 2]), k = r.pick([20, 50, 80, 200, 500]), A = r.pick([0.02, 0.05, 0.1]);
          const vm = A * Math.sqrt(k / m);
          return task({
            text: `A ${en(m)} kg block on a spring (k = ${k} N/m) oscillates with amplitude ${en(A)} m. What is its maximum speed, in m/s?${roundTo(3)}`,
            answer: numM(vm, 3, [[A * Math.sqrt(m / k), "$\\omega = \\sqrt{k/m}$, not $\\sqrt{m/k}$."], [(A * k) / m, "That is the maximum acceleration $A\\omega^2$."]]),
            data: { given: [dq("m", m, "kg"), dq("k", k, "N/m"), dq("A", A, "m")], find: ["v_{max}"] },
            hint: "Find $\\omega$ from $k$ and $m$ first, then $v_{max} = A\\omega$.",
            formula: ["\\omega = \\sqrt{\\dfrac{k}{m}}", "v_{max} = A\\omega"],
            solution: `$\\omega = \\sqrt{${k}/${en(m)}} \\approx ${en(Math.sqrt(k / m), 3)}\\ \\text{rad/s}$\n$v_{max} = ${en(A)} \\cdot ${en(Math.sqrt(k / m), 3)} \\approx ${en(vm, 3)}\\ \\text{m/s}$`,
          });
        }
        const m = r.pick([0.2, 0.5, 1, 2]), f = r.pick([0.5, 1, 2, 2.5, 5]);
        const k = m * (TP * f) ** 2;
        return task({
          text: `A ${en(m)} kg mass on a spring oscillates with a frequency of ${en(f)} Hz. What is the spring constant, in N/m?${roundTo(1)}`,
          answer: numM(k, 1, [[m * TP * f, "Square $\\omega$: $k = m\\omega^2$."], [m * f * f, "Convert frequency to angular frequency: $\\omega = 2\\pi f$."]]),
          data: { given: [dq("m", m, "kg"), dq("f", f, "Hz")], find: ["k"] },
          hint: "Convert the frequency to angular frequency, then use $\\omega^2 = k/m$.",
          formula: ["\\omega = 2\\pi f", "k = m\\omega^2"],
          solution: `$\\omega = 2\\pi \\cdot ${en(f)} \\approx ${en(TP * f, 3)}\\ \\text{rad/s}$\n$k = ${en(m)} \\cdot ${en(TP * f, 3)}^2 \\approx ${en(k, 1)}\\ \\text{N/m}$`,
        });
      }
      const v = r.int(0, 3);
      if (v === 0) {
        const A = r.pick([0.05, 0.1, 0.2]), w = r.int(2, 10), fr = r.pick([0.25, 0.4, 0.5, 0.6, 0.8]);
        const x = A * fr, vv = w * Math.sqrt(A * A - x * x);
        return task({
          text: `A particle in SHM has amplitude ${en(A)} m and angular frequency ${w} rad/s. What is its speed when it is ${en(x)} m from equilibrium, in m/s?${roundTo(3)}`,
          answer: numM(vv, 3, [[A * w, "That is the maximum speed (at equilibrium); here the particle is displaced."], [w * (A - x), "Use $\\sqrt{A^2 - x^2}$, not $A - x$."], [w * x, "The speed is largest at $x = 0$: use $\\sqrt{A^2 - x^2}$."]]),
          data: { given: [dq("A", A, "m"), dq("\\omega", w, "rad/s"), dq("x", x, "m")], find: ["v"] },
          hint: "Use energy conservation: $\\tfrac12 kA^2 = \\tfrac12 kx^2 + \\tfrac12 mv^2$, which gives $v = \\omega\\sqrt{A^2 - x^2}$.",
          formula: "v = \\omega\\sqrt{A^2 - x^2}",
          solution: `$A^2 - x^2 = ${en(A * A)} - ${en(x * x)} = ${en(A * A - x * x)}$\n$\\sqrt{${en(A * A - x * x)}} \\approx ${en(Math.sqrt(A * A - x * x), 4)}$\n$v = ${w} \\cdot ${en(Math.sqrt(A * A - x * x), 4)} \\approx ${en(vv, 3)}\\ \\text{m/s}$`,
        });
      }
      if (v === 1) {
        const T0 = r.pick([1, 1.5, 2, 2.4]), a = r.pick([2, 2.5, 4, 5]), up = r.next() < 0.5;
        const T = T0 * Math.sqrt(G / (up ? G + a : G - a));
        return task({
          text: `A pendulum has a period of ${en(T0)} s in a lift at rest. What is its period when the lift accelerates ${up ? "upward" : "downward"} at ${en(a)} m/s², in seconds?${roundTo(2)}${gtxt}`,
          answer: numM(T, 2, [[T0 * Math.sqrt(G / (up ? G - a : G + a)), up ? "Accelerating upward increases the effective gravity to $g + a$." : "Accelerating downward reduces the effective gravity to $g - a$."], [T0, "The effective gravity changes, so the period changes."], [T0 * (G / (up ? G + a : G - a)), "The period depends on $\\sqrt{1/g}$: take the square root of the ratio."]]),
          data: { given: [dq("T_0", T0, "s"), dq("a", a, "m/s^2"), dq("g", 10, "m/s^2")], find: ["T"] },
          hint: "In an accelerating lift replace $g$ by the effective gravity, then compare with the period at rest.",
          formula: ["g_{eff} = g " + (up ? "+" : "-") + " a", "T = T_0\\sqrt{\\dfrac{g}{g_{eff}}}"],
          solution: `$g_{eff} = 10 ${up ? "+" : "-"} ${en(a)} = ${en(up ? G + a : G - a)}\\ \\text{m/s}^2$\n$T = ${en(T0)}\\sqrt{\\dfrac{10}{${en(up ? G + a : G - a)}}}$\n$T \\approx ${en(T, 2)}\\ \\text{s}$`,
        });
      }
      if (v === 2) {
        const k = r.pick([100, 200, 400, 800]), A = r.pick([0.05, 0.1, 0.2]), fr = r.pick([0.25, 0.5, 0.6, 0.8]);
        const x = A * fr, Ek = 0.5 * k * (A * A - x * x);
        return task({
          text: `A block on a spring (k = ${k} N/m) oscillates with amplitude ${en(A)} m. What is its kinetic energy when the displacement is ${en(x)} m, in joules?${roundTo(3)}`,
          answer: numM(Ek, 3, [[0.5 * k * x * x, "That is the elastic energy at that point; KE is total minus elastic."], [0.5 * k * A * A, "That is the total energy; subtract the elastic energy at $x$."], [0.5 * k * (A - x) ** 2, "Use $A^2 - x^2$, not $(A - x)^2$."]]),
          data: { given: [dq("k", k, "N/m"), dq("A", A, "m"), dq("x", x, "m")], find: ["E_k"] },
          hint: "Total energy $\\tfrac12 kA^2$ is shared between elastic and kinetic energy.",
          formula: "E_k = \\tfrac12 k (A^2 - x^2)",
          solution: `Total: $\\tfrac12 \\cdot ${k} \\cdot ${en(A)}^2 = ${en(0.5 * k * A * A)}\\ \\text{J}$\nElastic at $x$: $\\tfrac12 \\cdot ${k} \\cdot ${en(x)}^2 = ${en(0.5 * k * x * x)}\\ \\text{J}$\n$E_k = ${en(0.5 * k * A * A)} - ${en(0.5 * k * x * x)} \\approx ${en(Ek, 3)}\\ \\text{J}$`,
        });
      }
      const T0 = r.pick([0.4, 0.5, 0.6, 0.8, 1]), mode = r.pick(["series", "parallel", "half"]);
      const fac = mode === "series" ? Math.SQRT2 : 1 / Math.SQRT2;
      const T = T0 * fac;
      const setup = mode === "series" ? "two identical springs joined end to end (in series)" : mode === "parallel" ? "two identical springs side by side (in parallel)" : "one half of the spring (the spring is cut in two equal pieces)";
      return task({
        text: `A mass on a single spring oscillates with period ${en(T0)} s. What is the period if the same mass hangs from ${setup}, in seconds?${roundTo(3)}`,
        answer: numM(T, 3, [[mode === "series" ? T0 / Math.SQRT2 : T0 * Math.SQRT2, mode === "series" ? "Springs in series are softer ($k/2$), so the period gets longer." : "This arrangement is stiffer ($2k$), so the period gets shorter."], [mode === "series" ? 2 * T0 : T0 / 2, "The period depends on $\\sqrt{1/k}$: use the square root of the factor."]]),
        data: { given: [dq("T_0", T0, "s")], find: ["T"] },
        hint: "Find the new spring constant first ($k/2$ for two in series; $2k$ in parallel or for half a spring), then use $T \\propto 1/\\sqrt{k}$.",
        formula: ["T = 2\\pi\\sqrt{\\dfrac{m}{k}}", mode === "series" ? "k_{eff} = \\dfrac{k}{2}" : "k_{eff} = 2k"],
        solution: `$k_{eff} = ${mode === "series" ? "k/2" : "2k"}$\n$T = T_0\\sqrt{\\dfrac{k}{k_{eff}}} = ${en(T0)} \\cdot ${mode === "series" ? "\\sqrt2" : "\\tfrac{1}{\\sqrt2}"}$\n$T \\approx ${en(T, 3)}\\ \\text{s}$`,
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
      const rad = (d) => (d * Math.PI) / 180, deg = (x) => (x * 180) / Math.PI;
      const MED = [["water", 1.33], ["glass", 1.5], ["diamond", 2.42], ["ethanol", 1.36], ["quartz", 1.46], ["flint glass", 1.62]];
      const [mn, n] = r.pick(MED);
      if (level === 1) {
        const v = r.int(0, 3);
        if (v === 0) {
          const vv = 3 / n;
          return task({
            text: `The refractive index of ${mn} is ${en(n)}. What is the speed of light in it, in units of $10^8$ m/s? (Speed of light in vacuum: $3 \\times 10^8$ m/s.)${roundTo(2)}`,
            answer: numM(vv, 2, [[3 * n, "Light is slower in a medium: divide by $n$."]]),
            data: { given: [`n = ${en(n)}`, "c = 3 \\times 10^8\\ \\mathrm{m/s}"], find: ["v"] },
            hint: "The refractive index tells how many times slower light is in the medium.",
            formula: "n = \\dfrac{c}{v}",
            solution: `$v = \\dfrac{c}{n} = \\dfrac{3 \\times 10^8}{${en(n)}}$\n$v \\approx ${en(vv, 2)} \\times 10^8\\ \\text{m/s}$`,
          });
        }
        if (v === 1) {
          const i = r.int(15, 75);
          const ref = deg(Math.asin(Math.sin(rad(i)) / n));
          return task({
            text: `A ray of light passes from air into ${mn} (refractive index ${en(n)}) at an angle of incidence of ${i}°. What is the angle of refraction, in degrees?${roundTo(1)}`,
            answer: numM(ref, 1, [[i / n, "Snell's law relates the sines of the angles, not the angles."], [90 - ref, "Angles are measured from the normal, not from the surface."]]),
            data: { given: [`i = ${i}^\\circ`, `n = ${en(n)}`], find: ["r"] },
            hint: "Snell's law with $n_1 = 1$ for air.",
            formula: "n_1 \\sin i = n_2 \\sin r",
            solution: `$\\sin r = \\dfrac{\\sin ${i}^\\circ}{${en(n)}} = ${en(Math.sin(rad(i)) / n, 4)}$\n$r \\approx ${en(ref, 1)}^\\circ$`,
          });
        }
        if (v === 2) {
          const f = r.pick([10, 20, 25, 40, 50, 80]), conv = r.next() < 0.6;
          const P = (conv ? 100 : -100) / f;
          return task({
            text: `A ${conv ? "converging" : "diverging"} lens has a focal length of ${conv ? f : -f} cm. What is its power, in dioptres?${roundTo(2)}${conv ? "" : " (A diverging lens has negative power.)"}`,
            answer: numM(P, 2, [[(conv ? 1 : -1) / f, "Convert the focal length to meters first."], [-P, "Converging lenses have positive power, diverging lenses negative."]]),
            data: { given: [dq("f", conv ? f : -f, "cm")], find: ["P"] },
            hint: "Power is the reciprocal of the focal length in meters.",
            formula: "P = \\dfrac{1}{f}",
            solution: `$f = ${conv ? "" : "-"}${en(f / 100)}\\ \\text{m}$\n$P = \\dfrac{1}{${conv ? "" : "-"}${en(f / 100)}} = ${en(P, 2)}\\ \\text{D}$`,
          });
        }
        const R = r.pick([10, 16, 20, 30, 40, 50]);
        return task({
          text: `A concave mirror has a radius of curvature of ${R} cm. What is its focal length, in cm?`,
          answer: numM(R / 2, null, [[R, "The focal length is half the radius of curvature."], [2 * R, "The focal length is half the radius, not double."]]),
          data: { given: [dq("R", R, "cm")], find: ["f"] },
          hint: "For a spherical mirror the focus lies halfway between the mirror and the centre of curvature.",
          formula: "f = \\dfrac{R}{2}",
          solution: `$f = \\dfrac{R}{2} = \\dfrac{${R}}{2}$\n$f = ${en(R / 2)}\\ \\text{cm}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 3);
        if (v === 0) {
          const f = r.pick([10, 12, 15, 20, 25]), u = f + r.pick([5, 8, 10, 15, 20, 30]);
          const vv = (u * f) / (u - f);
          return task({
            text: `An object is placed ${u} cm in front of a converging lens of focal length ${f} cm. How far from the lens is the image formed, in cm?${roundTo(1)}`,
            answer: numM(vv, 1, [[(u * f) / (u + f), "Subtract: $\\tfrac1v = \\tfrac1f - \\tfrac1u$."], [u - f, "Work with reciprocals, not with the distances themselves."]]),
            data: { given: [dq("u", u, "cm"), dq("f", f, "cm")], find: ["v"] },
            hint: "Thin lens equation: $\\dfrac1f = \\dfrac1u + \\dfrac1v$ (real-is-positive convention).",
            formula: "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}",
            solution: `$\\dfrac1v = \\dfrac1{${f}} - \\dfrac1{${u}} = \\dfrac{${u - f}}{${u * f}}$\n$v = \\dfrac{${u * f}}{${u - f}} \\approx ${en(vv, 1)}\\ \\text{cm}$`,
          });
        }
        if (v === 1) {
          const f = r.pick([10, 15, 20]), u = f + r.pick([5, 10, 20, 30]), h = r.pick([1, 2, 3, 4, 5]);
          const vv = (u * f) / (u - f), hi = (h * vv) / u;
          return task({
            text: `A ${h} cm tall object stands ${u} cm in front of a converging lens of focal length ${f} cm. How tall is the real image, in cm?${roundTo(2)}`,
            answer: numM(hi, 2, [[(h * u) / vv, "Magnification is $v/u$, not $u/v$."], [vv, "That is the image distance; you need the image height."]]),
            data: { given: [dq("h", h, "cm"), dq("u", u, "cm"), dq("f", f, "cm")], find: ["h'"] },
            hint: "Find the image distance $v$ first, then the magnification $v/u$.",
            formula: ["\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}", "\\dfrac{h'}{h} = \\dfrac{v}{u}"],
            solution: `$v = \\dfrac{${u} \\cdot ${f}}{${u} - ${f}} \\approx ${en(vv, 2)}\\ \\text{cm}$\n$m = \\dfrac{v}{u} \\approx ${en(vv / u, 3)}$\n$h' = ${h} \\cdot ${en(vv / u, 3)} \\approx ${en(hi, 2)}\\ \\text{cm}$`,
          });
        }
        if (v === 2) {
          const c = deg(Math.asin(1 / n));
          return task({
            text: `What is the critical angle for light going from ${mn} (refractive index ${en(n)}) into air, in degrees?${roundTo(1)}`,
            answer: numM(c, 1, [[90 - c, "The critical angle is measured from the normal."], [deg(Math.atan(1 / n)), "Use the sine: $\\sin C = 1/n$."]]),
            data: { given: [`n = ${en(n)}`], find: ["C"] },
            hint: "At the critical angle the refracted ray grazes the surface ($r = 90^\\circ$).",
            formula: "\\sin C = \\dfrac{1}{n}",
            solution: `$\\sin C = \\dfrac{1}{${en(n)}} = ${en(1 / n, 4)}$\n$C \\approx ${en(c, 1)}^\\circ$`,
          });
        }
        const f1 = r.pick([10, 20, 25, 40, 50]), f2 = r.pick([-50, -40, 20, 25, 50, 100]);
        if (f1 + f2 === 0) return null;
        const P = 100 / f1 + 100 / f2, f = 100 / P;
        return task({
          text: `Two thin lenses with focal lengths ${f1} cm and ${f2} cm are placed in contact. What is the focal length of the combination, in cm?${roundTo(1)}`,
          answer: numM(f, 1, [[f1 + f2, "Powers add, not focal lengths: $1/f = 1/f_1 + 1/f_2$."], [P, "That is the power in dioptres; convert it to a focal length."]]),
          data: { given: [dq("f_1", f1, "cm"), dq("f_2", f2, "cm")], find: ["f"] },
          hint: "For lenses in contact the powers add.",
          formula: "\\dfrac{1}{f} = \\dfrac{1}{f_1} + \\dfrac{1}{f_2}",
          solution: `$P = \\dfrac{100}{${f1}} + \\dfrac{100}{${f2}} = ${en(P, 3)}\\ \\text{D}$\n$f = \\dfrac{100}{${en(P, 3)}} \\approx ${en(f, 1)}\\ \\text{cm}$`,
        });
      }
      const v = r.int(0, 3);
      if (v === 0) {
        const L = r.pick([60, 80, 90, 100, 120]), m = r.pick([2, 3, 4]);
        const u = L / (m + 1), vv = m * u, f = (u * vv) / L;
        return task({
          text: `A screen is ${L} cm from an object. A converging lens placed between them forms a sharp image ${m} times larger than the object on the screen. What is the focal length of the lens, in cm?${roundTo(1)}`,
          answer: numM(f, 1, [[u, "That is the object distance; use the lens equation to find $f$."], [L / 4, "$f = L/4$ only when the image is the same size as the object."], [L / m, "$u + v = L$ and $v = mu$: solve for $u$ and $v$ first."]]),
          data: { given: [dq("L", L, "cm"), `m = ${m}`], find: ["f"] },
          hint: "Use $u + v = L$ and $v = m u$ to find $u$ and $v$, then the lens equation.",
          formula: ["u + v = L", "v = m u", "\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v}"],
          solution: `$u + ${m}u = ${L} \\Rightarrow u = ${en(u, 2)}\\ \\text{cm}$\n$v = ${m}u = ${en(vv, 2)}\\ \\text{cm}$\n$f = \\dfrac{uv}{u + v} = \\dfrac{${en(u, 2)} \\cdot ${en(vv, 2)}}{${L}} \\approx ${en(f, 1)}\\ \\text{cm}$`,
        });
      }
      if (v === 1) {
        const h = r.pick([0.8, 1, 1.2, 1.5, 2, 2.5]), nw = r.pick([1.33, 1.36]);
        const C = Math.asin(1 / nw), R = h * Math.tan(C);
        return task({
          text: `A small lamp lies at the bottom of a pool ${en(h)} m deep, filled with a liquid of refractive index ${en(nw)}. Light leaves the surface only through a bright circle above the lamp. What is the radius of this circle, in meters?${roundTo(2)}`,
          answer: numM(R, 2, [[h * Math.sin(C), "Radius $= h\\tan C$, not $h\\sin C$ (draw the right triangle)."], [h / Math.tan(C), "$\\tan C$ = radius / depth, not depth / radius."], [2 * R, "That is the diameter of the circle."]]),
          data: { given: [dq("h", h, "m"), `n = ${en(nw)}`], find: ["R"] },
          hint: "Outside the circle the rays are totally internally reflected. Find the critical angle, then use the right triangle.",
          formula: ["\\sin C = \\dfrac{1}{n}", "R = h \\tan C"],
          solution: `$\\sin C = 1/${en(nw)} = ${en(1 / nw, 4)}$, $C \\approx ${en(deg(C), 2)}^\\circ$\n$\\tan C \\approx ${en(Math.tan(C), 4)}$\n$R = ${en(h)} \\cdot ${en(Math.tan(C), 4)} \\approx ${en(R, 2)}\\ \\text{m}$`,
        });
      }
      if (v === 2) {
        const A = r.pick([30, 45, 60]), np = r.pick([1.5, 1.52, 1.6]);
        const dm = 2 * deg(Math.asin(np * Math.sin(rad(A / 2)))) - A;
        return task({
          text: `A prism with apex angle ${A}° is made of glass with refractive index ${en(np)}. What is the angle of minimum deviation, in degrees?${roundTo(1)}`,
          answer: numM(dm, 1, [[(np - 1) * A, "$(n-1)A$ is only a thin-prism approximation; compute exactly."], [deg(Math.asin(np * Math.sin(rad(A / 2)))), "That is the angle of incidence $i$; deviation is $2i - A$."]]),
          data: { given: [`A = ${A}^\\circ`, `n = ${en(np)}`], find: ["\\delta_{min}"] },
          hint: "At minimum deviation the ray inside the prism makes the angle $A/2$ with the normal; find $i$ and use $\\delta = 2i - A$.",
          formula: ["\\sin i = n \\sin\\dfrac{A}{2}", "\\delta_{min} = 2i - A"],
          solution: `$r = A/2 = ${A / 2}^\\circ$\n$\\sin i = ${en(np)} \\sin ${A / 2}^\\circ = ${en(np * Math.sin(rad(A / 2)), 4)}$, $i \\approx ${en(deg(Math.asin(np * Math.sin(rad(A / 2)))), 2)}^\\circ$\n$\\delta_{min} = 2i - ${A}^\\circ \\approx ${en(dm, 1)}^\\circ$`,
        });
      }
      const n2 = r.pick([1.33, 1.5]), real = r.pick([1, 1.5, 2, 3]);
      const app = real / n2;
      return task({
        text: `A fish is ${en(real)} m below the surface of ${n2 === 1.33 ? "water (n = 1.33)" : "a liquid with n = 1.5"}. A bird looks at it from directly above. How much closer to the surface does the fish appear, in meters?${roundTo(2)}`,
        answer: numM(real - app, 2, [[app, "That is the apparent depth; the question asks for the difference."], [real * n2 - real, "Seen from air, objects in water appear shallower: divide by $n$."]]),
        data: { given: [dq("d", real, "m"), `n = ${en(n2)}`], find: ["\\Delta d"] },
        hint: "For near-normal viewing, apparent depth = real depth / $n$.",
        formula: ["d' = \\dfrac{d}{n}", "\\Delta d = d - d'"],
        solution: `$d' = \\dfrac{${en(real)}}{${en(n2)}} \\approx ${en(app, 3)}\\ \\text{m}$\n$\\Delta d = ${en(real)} - ${en(app, 3)} \\approx ${en(real - app, 2)}\\ \\text{m}$`,
      });
    },
  },
  {
    id: "exf-modern",
    topics: [T("modern-physics")],
    gen(level, r) {
      const HC = "(Use $hc = 1240\\ \\text{eV·nm}$.)";
      if (level === 1) {
        const v = r.int(0, 3);
        if (v === 0) {
          const T = r.pick([2, 3, 5, 8, 10, 12]), k = r.int(2, 5), N0 = r.pick([800, 1600, 3200, 6400, 12800]);
          return task({
            text: `A radioactive isotope has a half-life of ${T} days. Starting with ${N0} nuclei, how many remain undecayed after ${T * k} days?`,
            answer: numM(N0 / 2 ** k, null, [[N0 / (2 * k), "Halve the number once per half-life; do not divide by twice the number of half-lives."], [N0 - N0 / 2 ** k, "That is the number that decayed; the question asks how many remain."]]),
            data: { given: [dq("T_{1/2}", T, "days"), dq("N_0", N0), dq("t", T * k, "days")], find: ["N"] },
            hint: "Count the half-lives and halve that many times.",
            formula: "N = N_0 \\left(\\tfrac12\\right)^{t/T_{1/2}}",
            solution: `$t/T_{1/2} = ${T * k}/${T} = ${k}$ half-lives\n$N = ${N0}/2^{${k}} = ${N0 / 2 ** k}$`,
          });
        }
        if (v === 1) {
          const lam = r.pick([310, 400, 450, 496, 550, 620, 656, 248]);
          const E = 1240 / lam;
          return task({
            text: `What is the energy of a photon of wavelength ${lam} nm, in eV? ${HC}${roundTo(2)}`,
            answer: numM(E, 2, [[lam / 1240, "You inverted the ratio: $E = hc/\\lambda$."], [1240 * lam, "Divide $hc$ by the wavelength."]]),
            data: { given: [dq("\\lambda", lam, "nm"), "hc = 1240\\ \\mathrm{eV\\,nm}"], find: ["E"] },
            hint: "Photon energy is inversely proportional to the wavelength.",
            formula: "E = \\dfrac{hc}{\\lambda}",
            solution: `$E = \\dfrac{1240}{${lam}}$\n$E \\approx ${en(E, 2)}\\ \\text{eV}$`,
          });
        }
        if (v === 2) {
          const V = r.pick([25, 50, 100, 150, 200, 400, 900]);
          const lam = 1.227 / Math.sqrt(V);
          return task({
            text: `An electron is accelerated from rest through a potential difference of ${V} V. What is its de Broglie wavelength, in nm? (Use $\\lambda = \\dfrac{1.227}{\\sqrt{V}}$ nm.)${roundTo(3)}`,
            answer: numM(lam, 3, [[1.227 / V, "Take the square root of the voltage."], [1.227 * Math.sqrt(V), "Divide by $\\sqrt V$, do not multiply."]]),
            data: { given: [dq("V", V, "V")], find: ["\\lambda"] },
            hint: "Substitute the voltage into the given formula.",
            formula: "\\lambda = \\dfrac{1.227}{\\sqrt{V}}\\ \\text{nm}",
            solution: `$\\sqrt{${V}} \\approx ${en(Math.sqrt(V), 3)}$\n$\\lambda = \\dfrac{1.227}{${en(Math.sqrt(V), 3)}} \\approx ${en(lam, 3)}\\ \\text{nm}$`,
          });
        }
        const W = r.pick([1.9, 2.1, 2.3, 2.5, 3.1, 4.1, 4.3, 4.7]);
        const l0 = 1240 / W;
        return task({
          text: `A metal has a work function of ${en(W)} eV. What is the longest wavelength of light that can eject electrons from it, in nm? ${HC}${roundTo(0)}`,
          answer: numM(l0, 0, [[W * 1240, "Divide $hc$ by the work function."], [W / 1240, "You inverted the ratio: $\\lambda_0 = hc/W$."]]),
          data: { given: [dq("W", W, "eV"), "hc = 1240\\ \\mathrm{eV\\,nm}"], find: ["\\lambda_0"] },
          hint: "At the threshold the photon energy just equals the work function.",
          formula: "\\lambda_0 = \\dfrac{hc}{W}",
          solution: `$\\lambda_0 = \\dfrac{1240}{${en(W)}}$\n$\\lambda_0 \\approx ${en(l0, 0)}\\ \\text{nm}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 3);
        if (v === 0) {
          const lam = r.pick([200, 220, 250, 280, 300, 350, 400]), W = r.pick([2, 2.3, 2.5, 3, 4.2, 4.5]);
          const E = 1240 / lam, K = E - W;
          if (K <= 0.1) return null;
          const stop = r.next() < 0.5;
          return task({
            text: `Light of wavelength ${lam} nm falls on a metal with work function ${en(W)} eV. What is ${stop ? "the stopping potential, in volts" : "the maximum kinetic energy of the emitted photoelectrons, in eV"}? ${HC}${roundTo(2)}`,
            answer: numM(K, 2, [[E, "Subtract the work function from the photon energy."], [E + W, "The work function is used up, so subtract it."]]),
            data: { given: [dq("\\lambda", lam, "nm"), dq("W", W, "eV"), "hc = 1240\\ \\mathrm{eV\\,nm}"], find: [stop ? "V_s" : "K_{max}"] },
            hint: "Find the photon energy, then subtract the work function.",
            formula: stop ? ["E = \\dfrac{hc}{\\lambda}", "eV_s = E - W"] : ["E = \\dfrac{hc}{\\lambda}", "K_{max} = E - W"],
            solution: `$E = 1240/${lam} \\approx ${en(E, 3)}\\ \\text{eV}$\n$K_{max} = ${en(E, 3)} - ${en(W)} \\approx ${en(K, 2)}\\ \\text{eV}$${stop ? `\n$V_s = K_{max}/e \\approx ${en(K, 2)}\\ \\text{V}$` : ""}`,
          });
        }
        if (v === 1) {
          const T = r.pick([4, 5, 6, 8, 10]), t = r.pick([3, 7, 9, 12, 15]), N0 = r.pick([1000, 2000, 5000]);
          if (t % T === 0) return null;
          const N = N0 * 2 ** (-t / T);
          return task({
            text: `A sample contains ${N0} radioactive nuclei with a half-life of ${T} h. How many remain after ${t} h?${roundTo(0)}`,
            answer: numM(N, 0, [[N0 * (1 - t / (2 * T)), "Decay is exponential, not linear: use $2^{-t/T}$."], [N0 / 2 ** Math.round(t / T), "The number of half-lives need not be a whole number."]]),
            data: { given: [dq("N_0", N0), dq("T_{1/2}", T, "h"), dq("t", t, "h")], find: ["N"] },
            hint: "Find the (non-integer) number of half-lives $t/T$, then use $N = N_0 \\cdot 2^{-t/T}$.",
            formula: "N = N_0 \\cdot 2^{-t/T_{1/2}}",
            solution: `$t/T_{1/2} = ${t}/${T} = ${en(t / T, 3)}$\n$2^{-${en(t / T, 3)}} \\approx ${en(2 ** (-t / T), 4)}$\n$N = ${N0} \\cdot ${en(2 ** (-t / T), 4)} \\approx ${en(N, 0)}$`,
          });
        }
        if (v === 2) {
          const k = r.int(2, 5), t = r.pick([6, 8, 10, 12, 15, 20, 24]) * k, N0 = r.pick([1600, 3200, 6400]);
          const N = N0 / 2 ** k;
          return task({
            text: `A sample's activity falls from ${N0} Bq to ${N} Bq in ${t} minutes. What is the half-life, in minutes?`,
            answer: numM(t / k, null, [[t / 2, "The activity halved more than once: count the halvings."], [(t * N) / N0, "Find how many times the activity halved, then divide the time by that number."]]),
            data: { given: [dq("A_0", N0, "Bq"), dq("A", N, "Bq"), dq("t", t, "min")], find: ["T_{1/2}"] },
            hint: "How many times must you halve the starting activity to get the final activity?",
            formula: "\\dfrac{A}{A_0} = 2^{-t/T_{1/2}}",
            solution: `$\\dfrac{A_0}{A} = \\dfrac{${N0}}{${N}} = ${2 ** k} = 2^{${k}}$\nSo $t = ${k}\\,T_{1/2}$\n$T_{1/2} = ${t}/${k} = ${t / k}\\ \\text{min}$`,
          });
        }
        const n1 = r.pick([1, 2]), n2 = n1 + r.int(1, 3);
        const E = 13.6 * (1 / (n1 * n1) - 1 / (n2 * n2)), lam = 1240 / E;
        return task({
          text: `An electron in a hydrogen atom drops from $n = ${n2}$ to $n = ${n1}$. What is the wavelength of the emitted photon, in nm? (Use $E_n = -13.6/n^2$ eV and $hc = 1240$ eV·nm.)${roundTo(0)}`,
          answer: numM(lam, 0, [[1240 / (13.6 / (n2 * n2)), "Use the energy difference between the two levels, not one level."], [1240 / (13.6 * (1 / n1 - 1 / n2)), "The energies go as $1/n^2$: square the quantum numbers."]]),
          data: { given: [`n_i = ${n2}`, `n_f = ${n1}`, "hc = 1240\\ \\mathrm{eV\\,nm}"], find: ["\\lambda"] },
          hint: "Find the energy difference of the two levels, then $\\lambda = hc/\\Delta E$.",
          formula: ["\\Delta E = 13.6\\left(\\dfrac{1}{n_1^2} - \\dfrac{1}{n_2^2}\\right)\\ \\text{eV}", "\\lambda = \\dfrac{hc}{\\Delta E}"],
          solution: `$\\Delta E = 13.6\\left(\\dfrac1{${n1 * n1}} - \\dfrac1{${n2 * n2}}\\right) \\approx ${en(E, 3)}\\ \\text{eV}$\n$\\lambda = \\dfrac{1240}{${en(E, 3)}} \\approx ${en(lam, 0)}\\ \\text{nm}$`,
        });
      }
      const v = r.int(0, 3);
      if (v === 0) {
        const lam = r.pick([200, 250, 300, 310, 400]), Vs = r.pick([0.5, 0.8, 1, 1.2, 1.5, 2]);
        const W = 1240 / lam - Vs;
        if (W <= 0.5) return null;
        return task({
          text: `When light of wavelength ${lam} nm shines on a metal, the stopping potential is ${en(Vs)} V. What is the work function of the metal, in eV? ${HC}${roundTo(2)}`,
          answer: numM(W, 2, [[1240 / lam + Vs, "The work function is the photon energy minus the electrons' kinetic energy."], [1240 / lam, "Subtract the kinetic energy $eV_s$ of the electrons."]]),
          data: { given: [dq("\\lambda", lam, "nm"), dq("V_s", Vs, "V"), "hc = 1240\\ \\mathrm{eV\\,nm}"], find: ["W"] },
          hint: "The stopping potential gives the maximum kinetic energy in eV directly.",
          formula: ["E = \\dfrac{hc}{\\lambda}", "W = E - eV_s"],
          solution: `$E = 1240/${lam} \\approx ${en(1240 / lam, 3)}\\ \\text{eV}$\n$K_{max} = eV_s = ${en(Vs)}\\ \\text{eV}$\n$W = ${en(1240 / lam, 3)} - ${en(Vs)} \\approx ${en(W, 2)}\\ \\text{eV}$`,
        });
      }
      if (v === 1) {
        const T = r.pick([5, 8, 10, 12, 30]), pct = r.pick([10, 20, 25, 40, 60, 75, 90]);
        const t = T * Math.log2(100 / pct);
        return task({
          text: `A radioactive isotope has a half-life of ${T} years. How long does it take until only ${pct}% of the original nuclei remain, in years?${roundTo(1)}`,
          answer: numM(t, 1, [[T * Math.log2(100 / (100 - pct)), `That is the time until ${pct}% have DECAYED.`], [T * (100 - pct) / 50, "Decay is exponential: use logarithms, not a straight line."]]),
          data: { given: [dq("T_{1/2}", T, "years"), `N/N_0 = ${pct}\\%`], find: ["t"] },
          hint: "Solve $\\tfrac{N}{N_0} = 2^{-t/T}$ for $t$ with logarithms.",
          formula: "t = T_{1/2} \\log_2\\dfrac{N_0}{N}",
          solution: `$\\dfrac{N_0}{N} = \\dfrac{100}{${pct}} = ${en(100 / pct, 4)}$\n$\\log_2 ${en(100 / pct, 4)} = \\dfrac{\\ln ${en(100 / pct, 4)}}{\\ln 2} \\approx ${en(Math.log2(100 / pct), 4)}$\n$t = ${T} \\cdot ${en(Math.log2(100 / pct), 4)} \\approx ${en(t, 1)}\\ \\text{years}$`,
        });
      }
      if (v === 2) {
        const P = r.pick([1, 2, 5, 10]), lam = r.pick([405, 532, 633, 650]);
        const E = (6.63e-34 * 3e8) / (lam * 1e-9), N = (P * 1e-3) / E / 1e15;
        return task({
          text: `A ${P} mW laser emits light of wavelength ${lam} nm. How many photons does it emit per second, in units of $10^{15}$? (Use $h = 6.63 \\times 10^{-34}$ J·s and $c = 3 \\times 10^8$ m/s.)${roundTo(2)}`,
          answer: numM(N, 2, [[(P / E) / 1e15, "Convert milliwatts to watts."], [(P * 1e-3 * E) / 1e15, "Number of photons = power ÷ energy of one photon."]]),
          data: { given: [dq("P", P, "mW"), dq("\\lambda", lam, "nm"), "h = 6.63 \\times 10^{-34}\\ \\mathrm{J\\,s}", "c = 3 \\times 10^8\\ \\mathrm{m/s}"], find: ["N"] },
          hint: "Find the energy of one photon in joules, then divide the power by it.",
          formula: ["E = \\dfrac{hc}{\\lambda}", "N = \\dfrac{P}{E}"],
          solution: `$E = \\dfrac{6.63 \\times 10^{-34} \\cdot 3 \\times 10^8}{${lam} \\times 10^{-9}} \\approx ${en(E * 1e19, 3)} \\times 10^{-19}\\ \\text{J}$\n$N = \\dfrac{${en(P * 1e-3)}}{${en(E * 1e19, 3)} \\times 10^{-19}} \\approx ${en(N, 2)} \\times 10^{15}\\ \\text{s}^{-1}$`,
        });
      }
      const [nuc, Z, A, mass] = r.pick([["^{4}_{2}\\mathrm{He}", 2, 4, 4.0026], ["^{12}_{6}\\mathrm{C}", 6, 12, 12], ["^{16}_{8}\\mathrm{O}", 8, 16, 15.9949], ["^{7}_{3}\\mathrm{Li}", 3, 7, 7.016], ["^{56}_{26}\\mathrm{Fe}", 26, 56, 55.9349]]);
      const mH = 1.0078, mn = 1.0087;
      const dm = Z * mH + (A - Z) * mn - mass, Eb = dm * 931.5, per = Eb / A;
      return task({
        text: `The atomic mass of $${nuc}$ is ${en(mass)} u. Using $m(^1\\mathrm{H}) = 1.0078$ u, $m_n = 1.0087$ u and 1 u = 931.5 MeV, what is the binding energy per nucleon, in MeV?${roundTo(2)}`,
        answer: numM(per, 2, [[Eb, "That is the total binding energy; divide by the number of nucleons."], [Eb / Z, "Divide by all nucleons $A$, not only the protons."]]),
        data: { given: [dq("m", mass, "u"), dq("m_H", 1.0078, "u"), dq("m_n", 1.0087, "u"), `Z = ${Z}`, `A = ${A}`, "1\\ \\mathrm{u} = 931.5\\ \\mathrm{MeV}"], find: ["E_b/A"] },
        hint: "Find the mass defect (mass of separate nucleons minus the atom's mass), convert it to energy, then divide by $A$.",
        formula: ["\\Delta m = Z m_H + (A - Z) m_n - m", "E_b = \\Delta m \\cdot 931.5\\ \\text{MeV/u}"],
        solution: `$\\Delta m = ${Z} \\cdot 1.0078 + ${A - Z} \\cdot 1.0087 - ${en(mass)} = ${en(dm, 4)}\\ \\text{u}$\n$E_b = ${en(dm, 4)} \\cdot 931.5 \\approx ${en(Eb, 1)}\\ \\text{MeV}$\n$E_b/A = ${en(Eb, 1)}/${A} \\approx ${en(per, 2)}\\ \\text{MeV}$`,
      });
    },
  },
];
