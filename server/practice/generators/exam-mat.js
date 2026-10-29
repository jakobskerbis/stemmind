// Izpitne naloge iz matematike (angleško): teme, ki jih zahtevajo SAT, gaokao, JEE in
// CBSE, slovenski generatorji pa jih nimajo (kvadratne enačbe, trigonometrija, zaporedja,
// logaritmi, odvodi, integrali, kompleksna števila, vektorji, matrike …).
// Teme so v banki "MAT-EXB" (server/exam-data.js); izpitne poti jih uporabijo kot osnovo.
import { choices } from "../rng.js";
import { en, sg, co, sco, par, frac, fracTex, reduce, num, fraction, roundTo, task, nCr, fact, poly, factor, numM, fractionM, dq } from "./exam-util.js";

const T = (slug) => `MAT-EXB/${slug}`;
// Angleški vrstilni števnik: 1st, 2nd, 3rd, 11th, 23rd …
const ordEn = (n) => `${n}${n % 100 >= 11 && n % 100 <= 13 ? "th" : ["th", "st", "nd", "rd"][n % 10] || "th"}`;
const TRIPLES = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [7, 24, 25], [9, 12, 15], [20, 21, 29]];

export const EXAM_MAT = [
  {
    id: "ex-quadratic",
    topics: [T("quadratic-equations")],
    gen(level, r) {
      const p = r.int(-7, 7);
      let q = r.int(-7, 7);
      if (q === p) q += 2;
      const s = p + q, m = p * q;
      if (level === 1) {
        const eq = `${poly([[1, "x^2"], [-s, "x"], [m, ""]])} = 0`;
        return task({
          text: `What is the larger solution of $${eq}$?`,
          answer: num(Math.max(p, q)),
          hint: "Find two numbers whose product is the constant term and whose sum is the opposite of the x-coefficient.",
          solution: `$${eq}$\n$${factor(p)}${factor(q)} = 0$\n$x = ${p}$ or $x = ${q}$, so the larger solution is $${Math.max(p, q)}$.`,
          formula: "x_{1,2} = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
        });
      }
      if (level === 2) {
        const a = r.pick([2, 3, -2]);
        const eq = `${poly([[a, "x^2"], [-a * s, "x"], [a * m, ""]])} = 0`;
        return task({
          text: `What is the sum of the solutions of $${eq}$?`,
          answer: num(s),
          hint: "For $ax^2 + bx + c = 0$ the sum of the roots is $-\\dfrac{b}{a}$.",
          solution: `Sum of roots $= -\\dfrac{b}{a} = -\\dfrac{${-a * s}}{${a}} = ${s}$.\n(The roots are $${p}$ and $${q}$.)`,
          formula: "x_1 + x_2 = -\\dfrac{b}{a}, \\quad x_1 x_2 = \\dfrac{c}{a}",
        });
      }
      return task({
        text: `If $\\alpha$ and $\\beta$ are the roots of $${poly([[1, "x^2"], [-s, "x"], [m, ""]])} = 0$, what is $\\alpha^2 + \\beta^2$?`,
        answer: num(s * s - 2 * m),
        hint: "Use $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$ and Vieta's formulas.",
        solution: `$\\alpha + \\beta = ${s}$, $\\alpha\\beta = ${m}$\n$\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = ${par(s)}^2 - 2 \\cdot ${par(m)} = ${s * s - 2 * m}$`,
        formula: "\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta",
      });
    },
  },
  {
    id: "ex-systems",
    topics: [T("systems-of-linear-equations")],
    gen(level, r) {
      const x = r.int(-6, 9), y = x + r.nonZero(-6, 6);
      if (level === 1) {
        return task({
          text: `If $x + y = ${x + y}$ and $x - y = ${x - y}$, what is the value of $x$?`,
          answer: num(x),
          hint: "Add the two equations to eliminate $y$.",
          solution: `Adding: $2x = ${x + y} + ${par(x - y)} = ${2 * x}$, so $x = ${x}$.`,
        });
      }
      if (level === 2) {
        const a = r.pick([2, 3, 4]), b = r.pick([1, -1, 2, -3]), c = r.pick([1, 2, 5]), d = r.pick([-1, 3, -2]);
        if (a * d - b * c === 0) return null;
        return task({
          text: `Solve the system $${co(a)} ${sco(b, "y")} = ${a * x + b * y}$, $${co(c)} ${sco(d, "y")} = ${c * x + d * y}$. What is the value of $y$?`,
          answer: num(y),
          hint: "Multiply the equations so that the $x$-terms cancel, then subtract.",
          solution: `Eliminate $x$: multiply the first equation by $${c}$ and the second by $${a}$ and subtract:\n$${b * c - a * d}y = ${c * (a * x + b * y) - a * (c * x + d * y)}$, so $y = ${y}$ (and $x = ${x}$).`,
        });
      }
      const ad = r.int(6, 15), ch = r.int(3, ad - 1), na = r.int(20, 80), nc = r.int(20, 80);
      return task({
        text: `A theater sold ${na + nc} tickets for a total of ${ad * na + ch * nc} dollars. Adult tickets cost ${ad} dollars and child tickets cost ${ch} dollars. How many adult tickets were sold?`,
        answer: num(na),
        hint: "Let $a$ be adult tickets and $c$ child tickets: $a + c = $ total and $" + ad + "a + " + ch + "c = $ revenue.",
        solution: `$a + c = ${na + nc}$ and $${ad}a + ${ch}c = ${ad * na + ch * nc}$.\nSubstitute $c = ${na + nc} - a$: $${ad - ch}a = ${ad * na + ch * nc} - ${ch * (na + nc)} = ${(ad - ch) * na}$, so $a = ${na}$.`,
      });
    },
  },
  {
    id: "ex-exponential",
    topics: [T("exponential-growth-and-decay")],
    gen(level, r) {
      if (level === 1) {
        const P = r.pick([1000, 2000, 500, 1500]), rate = r.pick([2, 3, 4, 5]), t = r.int(2, 5);
        const v = P * (1 + rate / 100) ** t;
        return task({
          text: `${P} dollars are invested at ${rate}% interest compounded annually. What is the value of the investment after ${t} years, in dollars?${roundTo(2)}`,
          answer: num(v, 2),
          hint: "Each year the amount is multiplied by $1 + \\dfrac{r}{100}$.",
          formula: "A = P\\left(1 + \\dfrac{r}{100}\\right)^t",
          solution: `$A = ${P} \\cdot ${en(1 + rate / 100)}^{${t}} \\approx ${en(v, 2)}$`,
        });
      }
      if (level === 2) {
        const N = r.pick([800, 1200, 640, 960]), h = r.pick([2, 3, 5, 8]), k = r.int(2, 4);
        return task({
          text: `A substance has a half-life of ${h} hours. A sample has a mass of ${N} mg. What is its mass after ${h * k} hours, in mg?`,
          answer: num(N / 2 ** k, 2),
          hint: "Count the number of half-lives that pass.",
          formula: "m = m_0 \\left(\\tfrac12\\right)^{t / T_{1/2}}",
          solution: `$${h * k} / ${h} = ${k}$ half-lives.\n$m = ${N} \\cdot \\left(\\tfrac12\\right)^{${k}} = ${en(N / 2 ** k)}\\ \\text{mg}$`,
        });
      }
      const f = r.pick([1.5, 2, 3]), y0 = r.pick([100, 200, 50]), t = r.int(2, 4);
      return task({
        text: `A population is modeled by $P(t) = ${y0} \\cdot b^t$, where $t$ is in years. If $P(${t}) = ${en(y0 * f ** t)}$, what is the value of $b$?`,
        answer: num(f, 2, { alsoAccept: [] }),
        hint: "Divide by the starting value and take the root.",
        solution: `$b^{${t}} = \\dfrac{${en(y0 * f ** t)}}{${y0}} = ${en(f ** t)}$, so $b = \\sqrt[${t}]{${en(f ** t)}} = ${en(f)}$.`,
      });
    },
  },
  {
    id: "ex-right-trig",
    topics: [T("right-triangle-trigonometry")],
    gen(level, r) {
      if (level === 1) {
        const [a, b, c] = r.pick(TRIPLES);
        const fn = r.pick(["sin", "cos", "tan"]);
        const [n, d] = fn === "sin" ? [a, c] : fn === "cos" ? [b, c] : [a, b];
        return task({
          text: `In right triangle $ABC$, angle $C$ is the right angle, $BC = ${a}$, $AC = ${b}$ and $AB = ${c}$. What is $\\${fn} A$? Write it as a fraction.`,
          answer: fraction(n, d),
          inputHint: "e.g. 3/5",
          hint: "SOH CAH TOA: sine = opposite/hypotenuse, cosine = adjacent/hypotenuse, tangent = opposite/adjacent.",
          solution: `For angle $A$: opposite side $BC = ${a}$, adjacent side $AC = ${b}$, hypotenuse $AB = ${c}$.\n$\\${fn} A = ${frac(n, d)} = ${fracTex(n, d)}$`,
        });
      }
      const ang = r.pick([20, 25, 35, 40, 50, 55, 65]);
      if (level === 2) {
        const h = r.int(8, 30);
        const v = h * Math.sin((ang * Math.PI) / 180);
        return task({
          text: `A right triangle has a hypotenuse of length ${h} cm and an acute angle of ${ang}°. What is the length of the side opposite this angle, in cm?${roundTo(2)}`,
          answer: num(v, 2),
          hint: "opposite = hypotenuse × sin(angle).",
          solution: `$\\text{opposite} = ${h} \\cdot \\sin ${ang}^\\circ \\approx ${en(v, 2)}\\ \\text{cm}$`,
        });
      }
      const dist = r.int(20, 80);
      const v = dist * Math.tan((ang * Math.PI) / 180);
      return task({
        text: `From a point ${dist} m from the foot of a tower, the angle of elevation of the top of the tower is ${ang}°. How tall is the tower, in meters?${roundTo(1)}`,
        answer: num(v, 1),
        hint: "The height is opposite the angle and the distance is adjacent to it.",
        solution: `$h = ${dist} \\cdot \\tan ${ang}^\\circ \\approx ${en(v, 1)}\\ \\text{m}$`,
      });
    },
  },
  {
    id: "ex-ap",
    topics: [T("arithmetic-progressions")],
    gen(level, r) {
      const a = r.int(-10, 15), d = r.nonZero(-5, 7), n = r.int(8, 30);
      if (level === 1) {
        return task({
          text: `An arithmetic progression begins $${a}, ${a + d}, ${a + 2 * d}, \\dots$ What is its ${ordEn(n)} term?`,
          answer: num(a + (n - 1) * d),
          hint: "$a_n = a_1 + (n-1)d$.",
          formula: "a_n = a_1 + (n-1)d",
          solution: `$d = ${d}$\n$a_{${n}} = ${a} + ${n - 1} \\cdot ${par(d)} = ${a + (n - 1) * d}$`,
        });
      }
      if (level === 2) {
        const S = (n * (2 * a + (n - 1) * d)) / 2;
        return task({
          text: `Find the sum of the first ${n} terms of the arithmetic progression $${a}, ${a + d}, ${a + 2 * d}, \\dots$`,
          answer: num(S),
          hint: "$S_n = \\dfrac{n}{2}\\left(2a_1 + (n-1)d\\right)$.",
          formula: "S_n = \\dfrac{n}{2}\\left(2a_1 + (n-1)d\\right)",
          solution: `$S_{${n}} = \\dfrac{${n}}{2}\\left(2 \\cdot ${par(a)} + ${n - 1} \\cdot ${par(d)}\\right) = ${S}$`,
        });
      }
      const m = r.int(3, 6), k = m + r.int(3, 6);
      return task({
        text: `In an arithmetic progression, $a_{${m}} = ${a + (m - 1) * d}$ and $a_{${k}} = ${a + (k - 1) * d}$. What is $a_{${n}}$?`,
        answer: num(a + (n - 1) * d),
        hint: "Subtract the two terms to find the common difference first.",
        formula: "a_n = a_1 + (n-1)d",
        solution: `$${k - m}d = ${a + (k - 1) * d} - ${par(a + (m - 1) * d)} = ${(k - m) * d}$, so $d = ${d}$ and $a_1 = ${a}$.\n$a_{${n}} = ${a} + ${n - 1} \\cdot ${par(d)} = ${a + (n - 1) * d}$`,
      });
    },
  },
  {
    id: "ex-gp",
    topics: [T("geometric-progressions")],
    gen(level, r) {
      const a = r.pick([1, 2, 3, 5, -2]), q = r.pick([2, 3, -2]), n = r.int(5, 8);
      if (level === 1) {
        return task({
          text: `A geometric sequence begins $${a}, ${a * q}, ${a * q * q}, \\dots$ What is its ${ordEn(n)} term?`,
          answer: num(a * q ** (n - 1)),
          hint: "$a_n = a_1 q^{n-1}$.",
          formula: "a_n = a_1 q^{\\,n-1}",
          solution: `$q = ${q}$\n$a_{${n}} = ${a} \\cdot ${par(q)}^{${n - 1}} = ${a * q ** (n - 1)}$`,
        });
      }
      if (level === 2) {
        const S = (a * (q ** n - 1)) / (q - 1);
        return task({
          text: `Find the sum of the first ${n} terms of the geometric sequence $${a}, ${a * q}, ${a * q * q}, \\dots$`,
          answer: num(S),
          hint: "$S_n = a_1 \\dfrac{q^n - 1}{q - 1}$.",
          formula: "S_n = a_1 \\dfrac{q^n - 1}{q - 1}",
          solution: `$S_{${n}} = ${a} \\cdot \\dfrac{${par(q)}^{${n}} - 1}{${q} - 1} = ${S}$`,
        });
      }
      const a1 = r.pick([6, 8, 9, 12, 18]), [qn, qd] = r.pick([[1, 2], [1, 3], [2, 3], [-1, 2], [3, 4]]);
      const [sn, sd] = reduce(a1 * qd, qd - qn);
      return task({
        text: `Find the sum to infinity of the geometric series $${a1} + ${a1} \\cdot \\left(${fracTex(qn, qd)}\\right) + ${a1} \\cdot \\left(${fracTex(qn, qd)}\\right)^2 + \\dots$ Write it as a fraction or a whole number.`,
        answer: fraction(sn, sd),
        inputHint: "e.g. 27/2",
        hint: "For $|q| < 1$: $S = \\dfrac{a_1}{1 - q}$.",
        formula: "S_\\infty = \\dfrac{a_1}{1 - q}",
        solution: `$S = \\dfrac{${a1}}{1 - \\left(${fracTex(qn, qd)}\\right)} = ${fracTex(sn, sd)}$`,
      });
    },
  },
  {
    id: "ex-statistics",
    topics: [T("statistics-mean-median")],
    gen(level, r) {
      const n = level === 2 ? 8 : 7;
      const data = Array.from({ length: n }, () => r.int(2, 40));
      const sorted = [...data].sort((a, b) => a - b);
      if (level === 1) {
        const sum = data.reduce((s, x) => s + x, 0);
        return task({
          text: `What is the mean of the data set $${data.join(", ")}$?${roundTo(2)}`,
          answer: num(sum / n, 2),
          hint: "Add the values and divide by how many there are.",
          solution: `Sum $= ${sum}$, count $= ${n}$\nMean $= ${sum} / ${n} \\approx ${en(sum / n, 2)}$`,
        });
      }
      if (level === 2) {
        const med = (sorted[3] + sorted[4]) / 2;
        return task({
          text: `What is the median of the data set $${data.join(", ")}$?`,
          answer: num(med),
          hint: "Sort the values. With an even number of values, the median is the mean of the two middle ones.",
          solution: `Sorted: $${sorted.join(", ")}$\nMedian $= \\dfrac{${sorted[3]} + ${sorted[4]}}{2} = ${en(med)}$`,
        });
      }
      const mean = r.int(10, 30), k = 5;
      const known = Array.from({ length: k - 1 }, () => r.int(mean - 8, mean + 8));
      const missing = mean * k - known.reduce((s, x) => s + x, 0);
      return task({
        text: `The mean of five numbers is ${mean}. Four of the numbers are $${known.join(", ")}$. What is the fifth number?`,
        answer: num(missing),
        hint: "The total of the five numbers is $5 \\times$ the mean.",
        solution: `Total $= 5 \\cdot ${mean} = ${5 * mean}$\nFifth number $= ${5 * mean} - ${known.reduce((s, x) => s + x, 0)} = ${missing}$`,
      });
    },
  },
  {
    id: "ex-logarithms",
    topics: [T("logarithms")],
    gen(level, r) {
      const b = r.pick([2, 3, 5, 10]);
      if (level === 1) {
        const k = r.int(-2, b === 10 ? 4 : 5);
        const arg = k >= 0 ? `${b ** k}` : `\\frac{1}{${b ** -k}}`;
        return task({
          text: `Evaluate $\\log_{${b}} ${arg}$.`,
          answer: num(k),
          hint: "$\\log_b x = k$ means $b^k = x$.",
          solution: `$${b}^{${k}} = ${arg}$, so $\\log_{${b}} ${arg} = ${k}$.`,
        });
      }
      if (level === 2) {
        const k = r.int(2, 4), x = r.pick([2, 4, 8, 3]), y = b ** k * x;
        return task({
          text: `Evaluate $\\log_{${b}} ${y} - \\log_{${b}} ${x}$.`,
          answer: num(k),
          hint: "$\\log_b x - \\log_b y = \\log_b \\dfrac{x}{y}$.",
          formula: "\\log_b x - \\log_b y = \\log_b \\dfrac{x}{y}",
          solution: `$\\log_{${b}} \\dfrac{${y}}{${x}} = \\log_{${b}} ${y / x} = ${k}$`,
        });
      }
      const a = r.int(-5, 6), k = r.int(1, b === 10 ? 2 : 4);
      return task({
        text: `Solve $\\log_{${b}}${a ? `(${poly([[1, "x"], [a, ""]])})` : " x"} = ${k}$.`,
        answer: num(b ** k - a),
        hint: "Rewrite in exponential form: $x + a = b^k$.",
        solution: `$${poly([[1, "x"], [a, ""]])} = ${b}^{${k}} = ${b ** k}$, so $x = ${b ** k - a}$.`,
      });
    },
  },
  {
    id: "ex-functions",
    topics: [T("functions")],
    gen(level, r) {
      const a = r.nonZero(-3, 3), b = r.int(-6, 6), c = r.int(-9, 9), x0 = r.int(-4, 4);
      const f = (x) => a * x * x + b * x + c;
      const fTex = poly([[a, "x^2"], [b, "x"], [c, ""]]);
      if (level === 1) {
        return task({
          text: `If $f(x) = ${fTex}$, what is $f(${x0})$?`,
          answer: num(f(x0)),
          hint: "Substitute the value for every $x$ and use the order of operations.",
          solution: `$f(${x0}) = ${a} \\cdot ${par(x0)}^2 + ${par(b)} \\cdot ${par(x0)} + ${par(c)} = ${f(x0)}$`,
        });
      }
      const m = r.nonZero(-4, 4), k = r.int(-8, 8);
      if (level === 2) {
        const g = (x) => m * x + k;
        return task({
          text: `Let $f(x) = ${fTex}$ and $g(x) = ${poly([[m, "x"], [k, ""]])}$. What is $f(g(${x0}))$?`,
          answer: num(f(g(x0))),
          hint: "Work from the inside out: first $g(" + x0 + ")$, then put the result into $f$.",
          solution: `$g(${x0}) = ${g(x0)}$\n$f(${g(x0)}) = ${f(g(x0))}$`,
        });
      }
      const y = m * x0 + k;
      return task({
        text: `The function $h(x) = ${poly([[m, "x"], [k, ""]])}$ has an inverse $h^{-1}$. What is $h^{-1}(${y})$?`,
        answer: num(x0),
        hint: "$h^{-1}(y)$ is the $x$ with $h(x) = y$.",
        solution: `Solve $${poly([[m, "x"], [k, ""]])} = ${y}$: $x = \\dfrac{${y} - ${par(k)}}{${m}} = ${x0}$.`,
      });
    },
  },
  {
    id: "ex-inequalities",
    topics: [T("quadratic-inequalities")],
    gen(level, r) {
      if (level === 1) {
        const a = r.pick([2, 3, 4, 5]), b = r.int(-9, 9), c = r.int(-20, 30);
        const bound = (c - b) / a;
        const smallest = Math.floor(bound) + 1;
        return task({
          text: `What is the smallest integer $x$ that satisfies $${poly([[a, "x"], [b, ""]])} > ${c}$?`,
          answer: num(smallest),
          hint: "Solve for $x$ as with an equation, then pick the first integer above the bound.",
          solution: `$${a}x > ${c - b}$, so $x > ${fracTex(c - b, a)}$. The smallest integer is $${smallest}$.`,
        });
      }
      const p = r.int(-6, 3), q = p + r.int(3, 9);
      const strict = level === 2;
      const s = p + q, m = p * q;
      const pl = poly([[1, "x^2"], [-s, "x"], [m, ""]]);
      const count = strict ? q - p - 1 : q - p + 1;
      return task({
        text: `How many integers $x$ satisfy $${pl} ${strict ? "<" : "\\le"} 0$?`,
        answer: num(count),
        hint: "Factor the quadratic. The parabola opens upwards, so it is negative between the roots.",
        solution: `$${pl} = ${factor(p)}${factor(q)}$\nSolution: $${p} ${strict ? "<" : "\\le"} x ${strict ? "<" : "\\le"} ${q}$, which contains ${count} integers.`,
      });
    },
  },
  {
    id: "ex-trig-values",
    topics: [T("trigonometric-identities")],
    gen(level, r) {
      const [a0, b0, c] = r.pick(TRIPLES);
      const [a, b] = r.next() < 0.5 ? [a0, b0] : [b0, a0];
      const S3 = 0.8660254, S2 = 0.7071068;
      if (level === 1) {
        // [izraz, vrednost, tipična napačna vrednost, zakaj]
        const items = [
          ["\\sin 30^\\circ", 0.5, S3, "That is $\\cos 30^\\circ$; sine of 30° is the smaller value."],
          ["\\cos 60^\\circ", 0.5, S3, "That is $\\sin 60^\\circ$; cosine decreases from 1 at 0° to 0 at 90°."],
          ["\\tan 45^\\circ", 1, S2, "$\\tan 45^\\circ = \\sin 45^\\circ / \\cos 45^\\circ$; the two are equal."],
          ["\\cos 0^\\circ", 1, 0, "That is $\\sin 0^\\circ$; at 0° the cosine is the largest."],
          ["\\sin 90^\\circ", 1, 0, "That is $\\cos 90^\\circ$; at 90° the sine is the largest."],
          ["\\cos 90^\\circ", 0, 1, "That is $\\sin 90^\\circ$."],
          ["\\sin^2 45^\\circ", 0.5, S2, "You forgot to square $\\sin 45^\\circ$."],
          ["\\cos^2 30^\\circ", 0.75, S3, "You forgot to square $\\cos 30^\\circ$."],
          ["\\sin^2 60^\\circ", 0.75, S3, "You forgot to square $\\sin 60^\\circ$."],
          ["\\tan^2 60^\\circ", 3, 1.7320508, "You forgot to square $\\tan 60^\\circ = \\sqrt3$."],
          ["\\sin^2 30^\\circ", 0.25, 0.5, "You forgot to square $\\sin 30^\\circ$."],
          ["\\cos^2 60^\\circ", 0.25, 0.5, "You forgot to square $\\cos 60^\\circ$."],
          ["2\\sin 30^\\circ", 1, 0.5, "Multiply $\\sin 30^\\circ$ by 2."],
          ["4\\cos^2 60^\\circ", 1, 2, "Square $\\cos 60^\\circ$ before multiplying by 4."],
          ["\\sin 30^\\circ + \\cos 60^\\circ", 1, 0.5, "Both terms equal $\\tfrac12$; add them."],
          ["2\\cos^2 45^\\circ", 1, 2 * S2, "Square $\\cos 45^\\circ$ first: $(\\sqrt2/2)^2 = \\tfrac12$."],
          ["\\tan 45^\\circ \\cdot \\sin 30^\\circ", 0.5, 1, "Multiply by $\\sin 30^\\circ = \\tfrac12$."],
          ["\\sin^2 37^\\circ + \\cos^2 37^\\circ", 1, 0, "For every angle $\\sin^2\\theta + \\cos^2\\theta = 1$."],
        ];
        const [tex, val, wrong, why] = r.pick(items);
        return task({
          text: `What is the exact value of $${tex}$? Give it as a decimal.`,
          answer: numM(val, null, [[wrong, why]]),
          hint: "Use the values for the special angles 0°, 30°, 45°, 60° and 90° (draw the 30-60-90 and 45-45-90 triangles).",
          formula: "\\sin 30^\\circ = \\tfrac12,\\ \\sin 45^\\circ = \\tfrac{\\sqrt2}{2},\\ \\sin 60^\\circ = \\tfrac{\\sqrt3}{2}",
          solution: `Special values: $\\sin 30^\\circ = \\cos 60^\\circ = \\tfrac12$, $\\sin 45^\\circ = \\cos 45^\\circ = \\tfrac{\\sqrt2}{2}$, $\\sin 60^\\circ = \\cos 30^\\circ = \\tfrac{\\sqrt3}{2}$, $\\tan 45^\\circ = 1$.\nSubstitute: $${tex} = ${en(val)}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 2);
        if (v === 0) {
          return task({
            text: `If $\\sin\\theta = ${fracTex(a, c)}$ and $\\theta$ is acute, what is $\\tan\\theta$? Write it as a fraction.`,
            answer: fractionM(a, b, [[b / a, "That is $\\cot\\theta$: $\\tan\\theta = \\sin\\theta / \\cos\\theta$."], [b / c, "That is $\\cos\\theta$; divide $\\sin\\theta$ by it."]]),
            inputHint: "e.g. 3/4",
            hint: "Use $\\sin^2\\theta + \\cos^2\\theta = 1$ to find $\\cos\\theta$ first.",
            formula: "\\sin^2\\theta + \\cos^2\\theta = 1, \\quad \\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}",
            solution: `$\\cos\\theta = \\sqrt{1 - \\left(${frac(a, c)}\\right)^2} = \\sqrt{${frac(c * c - a * a, c * c)}} = ${frac(b, c)}$\n$\\tan\\theta = ${frac(a, c)} : ${frac(b, c)} = ${fracTex(a, b)}$`,
          });
        }
        if (v === 1) {
          return task({
            text: `If $\\sin\\theta = ${fracTex(a, c)}$ and $90^\\circ < \\theta < 180^\\circ$, what is $\\cos\\theta$? Write it as a fraction.`,
            answer: fractionM(-b, c, [[b / c, "In the second quadrant the cosine is negative."], [-a / c, "Use $\\cos\\theta = \\pm\\sqrt{1 - \\sin^2\\theta}$, not $-\\sin\\theta$."]]),
            inputHint: "e.g. -4/5",
            hint: "Find $|\\cos\\theta|$ from $\\sin^2\\theta + \\cos^2\\theta = 1$, then choose the sign for the second quadrant.",
            formula: "\\sin^2\\theta + \\cos^2\\theta = 1",
            solution: `$\\cos^2\\theta = 1 - \\left(${frac(a, c)}\\right)^2 = ${frac(b * b, c * c)}$\n$|\\cos\\theta| = ${frac(b, c)}$\nIn quadrant II cosine is negative: $\\cos\\theta = ${fracTex(-b, c)}$`,
          });
        }
        const items = [["\\sin 150^\\circ", 0.5, 30], ["\\cos 120^\\circ", -0.5, 60], ["\\tan 135^\\circ", -1, 45], ["\\sin 210^\\circ", -0.5, 30], ["\\cos 240^\\circ", -0.5, 60], ["\\sin 330^\\circ", -0.5, 30], ["\\cos 300^\\circ", 0.5, 60], ["\\tan 225^\\circ", 1, 45], ["\\cos 180^\\circ", -1, 0], ["\\sin 270^\\circ", -1, 90], ["\\tan 315^\\circ", -1, 45], ["\\cos 150^\\circ \\cdot \\cos 30^\\circ", -0.75, 30], ["\\sin^2 120^\\circ", 0.75, 60], ["\\cos 120^\\circ + \\sin 150^\\circ", 0, 60]];
        const [tex, val, ref] = r.pick(items);
        return task({
          text: `Find the exact value of $${tex}$. Give it as a decimal.`,
          answer: numM(val, null, [[-val, "Check the sign in that quadrant (All–Sin–Tan–Cos)."], [Math.abs(val) === 0.5 ? S3 * Math.sign(val) : NaN, "Use the reference angle with the same function (sine stays sine)."]]),
          hint: "Write the angle as $180^\\circ \\pm \\alpha$ or $360^\\circ - \\alpha$, use the reference angle $\\alpha$, then decide the sign from the quadrant.",
          formula: "\\sin(180^\\circ - \\alpha) = \\sin\\alpha,\\ \\cos(180^\\circ - \\alpha) = -\\cos\\alpha",
          solution: `Reference angle: $${ref}^\\circ$.\nSign from the quadrant (All–Sin–Tan–Cos).\n$${tex} = ${en(val)}$`,
        });
      }
      const v = r.int(0, 4);
      const cosT = frac(b, c);
      if (v === 0) {
        return task({
          text: `If $\\sin\\theta = ${fracTex(a, c)}$ and $\\theta$ is acute, what is $\\sin 2\\theta$? Write it as a fraction.`,
          answer: fractionM(2 * a * b, c * c, [[(2 * a) / c, "$\\sin 2\\theta \\neq 2\\sin\\theta$; use the double-angle formula."], [(a * b) / (c * c), "You forgot the factor 2 in $2\\sin\\theta\\cos\\theta$."]]),
          inputHint: "e.g. 24/25",
          hint: "Find $\\cos\\theta$ first, then use $\\sin 2\\theta = 2 \\sin\\theta \\cos\\theta$.",
          formula: "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta",
          solution: `$\\cos\\theta = \\sqrt{1 - \\left(${frac(a, c)}\\right)^2} = ${cosT}$\n$\\sin 2\\theta = 2 \\cdot ${frac(a, c)} \\cdot ${cosT} = ${fracTex(2 * a * b, c * c)}$`,
        });
      }
      if (v === 1) {
        return task({
          text: `If $\\sin\\theta = ${fracTex(a, c)}$ and $\\theta$ is acute, what is $\\cos 2\\theta$? Write it as a fraction.`,
          answer: fractionM(b * b - a * a, c * c, [[(a * a - b * b) / (c * c), "Sign error: $\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta$."], [(2 * b) / c, "$\\cos 2\\theta \\neq 2\\cos\\theta$."], [1 - (2 * a) / c, "Use $1 - 2\\sin^2\\theta$: the sine must be squared."]]),
          inputHint: "e.g. 7/25",
          hint: "Use $\\cos 2\\theta = 1 - 2\\sin^2\\theta$.",
          formula: "\\cos 2\\theta = 1 - 2\\sin^2\\theta",
          solution: `$\\sin^2\\theta = ${frac(a * a, c * c)}$\n$\\cos 2\\theta = 1 - 2 \\cdot ${frac(a * a, c * c)} = ${fracTex(c * c - 2 * a * a, c * c)}$`,
        });
      }
      if (v === 2) {
        return task({
          text: `If $\\tan\\theta = ${fracTex(a, b)}$, what is $\\tan 2\\theta$? Write it as a fraction.`,
          answer: fractionM(2 * a * b, b * b - a * a, [[(2 * a) / b, "$\\tan 2\\theta \\neq 2\\tan\\theta$; use the double-angle formula."], [(2 * a * b) / (b * b + a * a), "The denominator is $1 - \\tan^2\\theta$, not $1 + \\tan^2\\theta$."]]),
          inputHint: "e.g. 24/7",
          hint: "Use $\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1 - \\tan^2\\theta}$.",
          formula: "\\tan 2\\theta = \\dfrac{2\\tan\\theta}{1 - \\tan^2\\theta}",
          solution: `$2\\tan\\theta = ${fracTex(2 * a, b)}$\n$1 - \\tan^2\\theta = 1 - ${frac(a * a, b * b)} = ${fracTex(b * b - a * a, b * b)}$\n$\\tan 2\\theta = ${fracTex(2 * a, b)} : ${fracTex(b * b - a * a, b * b)} = ${fracTex(2 * a * b, b * b - a * a)}$`,
        });
      }
      if (v === 3) {
        const [p0, q0, s] = r.pick(TRIPLES.filter((t) => t[2] !== c));
        const [p, q] = r.next() < 0.5 ? [p0, q0] : [q0, p0];
        // sin A = a/c, cos B = q/s; oba kota ostra
        return task({
          text: `$A$ and $B$ are acute angles with $\\sin A = ${fracTex(a, c)}$ and $\\cos B = ${fracTex(q, s)}$. What is $\\sin(A + B)$? Write it as a fraction.`,
          answer: fractionM(a * q + b * p, c * s, [[a / c + p / s, "$\\sin(A+B) \\neq \\sin A + \\sin B$; use the addition formula."], [(a * q - b * p) / (c * s), "That is $\\sin(A - B)$; for $A + B$ both terms are added."]]),
          inputHint: "e.g. 56/65",
          hint: "Find $\\cos A$ and $\\sin B$ first, then use $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$.",
          formula: "\\sin(A+B) = \\sin A\\cos B + \\cos A \\sin B",
          solution: `$\\cos A = ${frac(b, c)}$, $\\sin B = ${frac(p, s)}$\n$\\sin(A+B) = ${frac(a, c)} \\cdot ${frac(q, s)} + ${frac(b, c)} \\cdot ${frac(p, s)} = ${frac(a * q + b * p, c * s)}$\n$= ${fracTex(a * q + b * p, c * s)}$`,
        });
      }
      return task({
        text: `If $\\sin\\theta = ${fracTex(a, c)}$ and $\\theta$ is obtuse, what is $\\tan\\theta$? Write it as a fraction.`,
        answer: fractionM(-a, b, [[a / b, "An obtuse angle is in quadrant II, where the tangent is negative."], [-b / a, "That is $\\cot\\theta$; $\\tan\\theta = \\sin\\theta / \\cos\\theta$."]]),
        inputHint: "e.g. -3/4",
        hint: "Find $\\cos\\theta$ (negative for an obtuse angle), then divide.",
        formula: "\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}",
        solution: `$|\\cos\\theta| = \\sqrt{1 - \\left(${frac(a, c)}\\right)^2} = ${frac(b, c)}$\n$\\theta$ obtuse, so $\\cos\\theta = -${frac(b, c)}$\n$\\tan\\theta = ${frac(a, c)} : \\left(-${frac(b, c)}\\right) = ${fracTex(-a, b)}$`,
      });
    },
  },
  {
    id: "ex-coordinate",
    topics: [T("coordinate-geometry")],
    gen(level, r) {
      const x1 = r.int(-6, 6), y1 = r.int(-6, 6);
      if (level === 1) {
        const [a, b, c] = r.pick(TRIPLES.slice(0, 4));
        const [dx, dy] = r.next() < 0.5 ? [a, b] : [b, a];
        const sx = r.pick([1, -1]), sy = r.pick([1, -1]);
        return task({
          text: `What is the distance between the points $(${x1}, ${y1})$ and $(${x1 + sx * dx}, ${y1 + sy * dy})$?`,
          answer: num(c),
          hint: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
          formula: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
          solution: `$d = \\sqrt{${dx}^2 + ${dy}^2} = \\sqrt{${c * c}} = ${c}$`,
        });
      }
      const x2 = x1 + r.nonZero(-5, 5), y2 = r.int(-6, 6);
      if (level === 2) {
        return task({
          text: `What is the slope of the line through $(${x1}, ${y1})$ and $(${x2}, ${y2})$? Write it as a fraction or a whole number.`,
          answer: fraction(y2 - y1, x2 - x1),
          inputHint: "e.g. -3/2",
          hint: "slope $= \\dfrac{y_2 - y_1}{x_2 - x_1}$.",
          formula: "k = \\dfrac{y_2 - y_1}{x_2 - x_1}",
          solution: `$k = \\dfrac{${y2} - ${par(y1)}}{${x2} - ${par(x1)}} = ${fracTex(y2 - y1, x2 - x1)}$`,
        });
      }
      const k = r.nonZero(-3, 3), n = r.int(-8, 8);
      const xa = r.int(-4, 0), xb = xa + r.int(1, 4);
      return task({
        text: `A line passes through $(${xa}, ${k * xa + n})$ and $(${xb}, ${k * xb + n})$. What is its $y$-intercept?`,
        answer: num(n),
        hint: "Find the slope, then use $y = kx + n$ with one of the points.",
        solution: `$k = \\dfrac{${k * xb + n} - ${par(k * xa + n)}}{${xb} - ${par(xa)}} = ${k}$\n$n = y - kx = ${k * xa + n} - ${par(k)} \\cdot ${par(xa)} = ${n}$`,
      });
    },
  },
  {
    id: "ex-combinatorics",
    topics: [T("permutations-and-combinations")],
    gen(level, r) {
      if (level === 1) {
        const n = r.int(5, 10), k = r.int(2, 4);
        return task({
          text: `In how many ways can a committee of ${k} be chosen from ${n} students?`,
          answer: num(nCr(n, k)),
          hint: "Order does not matter: use $\\binom{n}{k}$.",
          formula: "\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}",
          solution: `$\\binom{${n}}{${k}} = ${nCr(n, k)}$`,
        });
      }
      if (level === 2) {
        const n = r.int(4, 7), k = r.int(2, 3);
        const v = fact(n) / fact(n - k);
        return task({
          text: `${n} runners take part in a race. In how many ways can the ${k === 2 ? "gold and silver medals" : "gold, silver and bronze medals"} be awarded?`,
          answer: num(v),
          hint: "Order matters: $n(n-1)\\cdots$.",
          formula: "V_n^k = \\dfrac{n!}{(n-k)!}",
          solution: `$${Array.from({ length: k }, (_, i) => n - i).join(" \\cdot ")} = ${v}$`,
        });
      }
      const boys = r.int(4, 7), girls = r.int(3, 6), k = 3;
      const v = nCr(boys + girls, k) - nCr(boys, k);
      return task({
        text: `A group has ${boys} boys and ${girls} girls. In how many ways can a team of ${k} be chosen if it must include at least one girl?`,
        answer: num(v),
        hint: "Count all teams and subtract the teams with no girls.",
        solution: `All teams: $\\binom{${boys + girls}}{${k}} = ${nCr(boys + girls, k)}$; only boys: $\\binom{${boys}}{${k}} = ${nCr(boys, k)}$.\n$${nCr(boys + girls, k)} - ${nCr(boys, k)} = ${v}$`,
      });
    },
  },
  {
    id: "ex-derivatives",
    topics: [T("differentiation")],
    gen(level, r) {
      const a = r.nonZero(-4, 5), b = r.int(-6, 6), c = r.int(-9, 9), x0 = r.int(-3, 3);
      if (level === 1) {
        const n = r.int(2, 4);
        const d = a * n * x0 ** (n - 1) + b;
        return task({
          text: `If $f(x) = ${poly([[a, `x^${n}`], [b, "x"], [c, ""]])}$, what is $f'(${x0})$?`,
          answer: num(d),
          hint: "$(x^n)' = n x^{n-1}$; constants differentiate to 0.",
          formula: "(x^n)' = n x^{n-1}",
          solution: `$f'(x) = ${poly([[a * n, n === 2 ? "x" : `x^{${n - 1}}`], [b, ""]])}$\n$f'(${x0}) = ${a * n} \\cdot ${par(x0)}${n === 2 ? "" : `^{${n - 1}}`} ${b ? sg(b) : ""} = ${d}$`,
        });
      }
      if (level === 2) {
        const p = r.nonZero(-2, 2);
        const fv = p * x0 ** 3 + b * x0 + c, d = 3 * p * x0 * x0 + b;
        const n = fv - d * x0;
        return task({
          text: `The tangent to $y = ${poly([[p, "x^3"], [b, "x"], [c, ""]])}$ at $x = ${x0}$ has equation $y = mx + n$. What is $n$?`,
          answer: num(n),
          hint: "Slope $m = y'(x_0)$; the tangent passes through $(x_0, y(x_0))$.",
          solution: `$y(${x0}) = ${fv}$, $y' = ${poly([[3 * p, "x^2"], [b, ""]])}$, $m = ${d}$\n$n = ${fv} - ${par(d)} \\cdot ${par(x0)} = ${n}$`,
        });
      }
      const k = r.int(1, 4), s = r.pick([1, -1]);
      return task({
        text: `The function $f(x) = ${poly([[1, "x^3"], [-3 * k * k, "x"], [c, ""]])}$ has a local ${s > 0 ? "minimum" : "maximum"}. At what value of $x$?`,
        answer: num(s * k),
        hint: "Solve $f'(x) = 0$ and check the sign of $f''(x)$.",
        solution: `$f'(x) = 3x^2 - ${3 * k * k} = 0 \\Rightarrow x = \\pm ${k}$\n$f''(x) = 6x$: $f''(${k}) > 0$ (minimum), $f''(${-k}) < 0$ (maximum).\nSo the local ${s > 0 ? "minimum" : "maximum"} is at $x = ${s * k}$.`,
      });
    },
  },
  {
    id: "ex-integrals",
    topics: [T("integration")],
    gen(level, r) {
      if (level === 1) {
        if (r.next() < 0.25) {
          const k = r.int(2, 9), sin = r.next() < 0.5;
          const val = sin ? 2 * k : k;
          return task({
            text: `Evaluate $\\displaystyle\\int_0^{${sin ? "\\pi" : "\\pi/2"}} ${k}\\${sin ? "sin" : "cos"} x\\,dx$.`,
            answer: numM(val, null, [[sin ? 0 : -k, sin ? "Check the sign: an antiderivative of $\\sin x$ is $-\\cos x$." : "An antiderivative of $\\cos x$ is $+\\sin x$."], [sin ? -2 * k : 0, sin ? "$[-\\cos x]_0^{\\pi} = -\\cos\\pi + \\cos 0$; watch both signs." : "Use $\\sin(\\pi/2) = 1$ and $\\sin 0 = 0$."]]),
            hint: `Find an antiderivative of $\\${sin ? "sin" : "cos"} x$ and substitute the limits.`,
            formula: sin ? "\\int \\sin x\\,dx = -\\cos x + C" : "\\int \\cos x\\,dx = \\sin x + C",
            solution: sin
              ? `$\\int_0^{\\pi} ${k}\\sin x\\,dx = ${k}\\left[-\\cos x\\right]_0^{\\pi}$\n$= ${k}\\left(-\\cos\\pi + \\cos 0\\right) = ${k}(1 + 1) = ${val}$`
              : `$\\int_0^{\\pi/2} ${k}\\cos x\\,dx = ${k}\\left[\\sin x\\right]_0^{\\pi/2}$\n$= ${k}(1 - 0) = ${val}$`,
          });
        }
        const n = r.int(0, 3), a = r.int(1, 4), b = r.int(1, n === 3 ? 3 : 5);
        const c = (n + 1) * a, val = a * b ** (n + 1);
        const integrand = n === 0 ? `${c}` : `${c}${n === 1 ? "x" : `x^{${n}}`}`;
        return task({
          text: `Evaluate $\\displaystyle\\int_0^{${b}} ${integrand}\\,dx$.`,
          answer: numM(val, null, [[c * b ** (n + 1), `You forgot to divide by $n + 1 = ${n + 1}$.`], [n ? c * n * b ** (n - 1) : NaN, "You differentiated instead of integrating."], [n ? a * b ** n : NaN, "Raise the power by one: $x^n \\to \\dfrac{x^{n+1}}{n+1}$."]]),
          hint: "Use the power rule for integrals, then substitute the upper and lower limits.",
          formula: "\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C",
          solution: `Antiderivative: $F(x) = ${co(a, n === 0 ? "x" : `x^{${n + 1}}`)}$\n$F(${b}) - F(0) = ${a === 1 ? "" : `${a} \\cdot `}${b}^{${n + 1}} - 0 = ${val}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 2);
        if (v === 0) {
          const p = r.int(1, 3), q = r.int(-4, 5), lo = r.int(0, 2), hi = lo + r.int(1, 3);
          const F = (x) => p * x ** 3 + q * x;
          return task({
            text: `Evaluate $\\displaystyle\\int_{${lo}}^{${hi}} (${poly([[3 * p, "x^2"], [q, ""]])})\\,dx$.`,
            answer: numM(F(hi) - F(lo), null, [[F(hi), "Subtract the value of the antiderivative at the lower limit."], [F(hi) + F(lo), "It is $F(b) - F(a)$, not $F(b) + F(a)$."], [3 * p * hi * hi + q - (3 * p * lo * lo + q), "You substituted into $f$ instead of into the antiderivative $F$."]]),
            hint: "Find an antiderivative, then subtract its values at the limits.",
            formula: "\\int_a^b f(x)\\,dx = F(b) - F(a)",
            solution: `$F(x) = ${poly([[p, "x^3"], [q, "x"]])}$\n$F(${hi}) = ${F(hi)}$, $F(${lo}) = ${F(lo)}$\n$F(${hi}) - F(${lo}) = ${F(hi)} - ${par(F(lo))} = ${F(hi) - F(lo)}$`,
          });
        }
        if (v === 1) {
          const bb = r.int(2, 6), c = bb * r.int(1, 4);
          const val = c - c / bb;
          return task({
            text: `Evaluate $\\displaystyle\\int_1^{${bb}} \\dfrac{${c}}{x^2}\\,dx$.`,
            answer: numM(val, null, [[c / bb - c, "Sign error: an antiderivative of $x^{-2}$ is $-x^{-1}$."], [c * Math.log(bb), "That would be $\\int \\frac{1}{x}dx$; here the power is $-2$."], [c, "Subtract the value at the upper limit as well."]]),
            hint: "Write the integrand as $" + c + "x^{-2}$ and use the power rule.",
            formula: "\\int x^{-2}\\,dx = -x^{-1} + C",
            solution: `$F(x) = -\\dfrac{${c}}{x}$\n$F(${bb}) - F(1) = -${fracTex(c, bb)} + ${c}$\n$= ${en(val)}$`,
          });
        }
        const k = r.int(2, 9);
        return task({
          text: `Evaluate $\\displaystyle\\int_0^{\\ln ${k}} e^{x}\\,dx$.`,
          answer: numM(k - 1, null, [[k, "Subtract the value at the lower limit: $e^0 = 1$, not 0."], [Math.log(k), "$e^{\\ln k} = k$; substitute into $e^x$."]]),
          hint: "An antiderivative of $e^x$ is $e^x$; use $e^{\\ln k} = k$.",
          formula: "\\int e^x\\,dx = e^x + C",
          solution: `$\\left[e^x\\right]_0^{\\ln ${k}} = e^{\\ln ${k}} - e^0$\n$= ${k} - 1 = ${k - 1}$`,
        });
      }
      const v = r.int(0, 4);
      if (v === 0) {
        const k = r.int(1, 6);
        return task({
          text: `Find the area of the region enclosed by $y = x^2$ and $y = ${co(k)}$. Write it as a fraction or a whole number.`,
          answer: fractionM(k ** 3, 6, [[k ** 3 / 2, "That is the area under the line only; subtract the area under the parabola."], [k ** 3 / 3, "That is the area under the parabola; take (upper − lower)."]]),
          inputHint: "e.g. 9/2",
          hint: "Find the intersection points, then integrate (upper − lower).",
          formula: "A = \\int_a^b (f(x) - g(x))\\,dx",
          solution: `Intersections: $x^2 = ${co(k)} \\Rightarrow x = 0, x = ${k}$\n$A = \\int_0^{${k}} (${co(k)} - x^2)\\,dx = \\left[\\tfrac{${k}}{2}x^2 - \\tfrac{x^3}{3}\\right]_0^{${k}}$\n$= ${fracTex(k ** 3, 2)} - ${fracTex(k ** 3, 3)} = ${fracTex(k ** 3, 6)}$`,
        });
      }
      if (v === 1) {
        const m = r.int(1, 5);
        return task({
          text: `Find the area of the region between the curve $y = ${m * m} - x^2$ and the x-axis. Write it as a fraction or a whole number.`,
          answer: fractionM(4 * m ** 3, 3, [[(2 * m ** 3) / 3, "Integrate over the whole interval $[-" + m + ", " + m + "]$, not just $[0, " + m + "]$."], [2 * m ** 3, "You forgot to subtract the integral of $x^2$ (that is the whole rectangle)."]]),
          inputHint: "e.g. 32/3",
          hint: "Find where the curve meets the x-axis, then integrate between those points.",
          formula: "A = \\int_a^b f(x)\\,dx",
          solution: `Zeros: $${m * m} - x^2 = 0 \\Rightarrow x = \\pm ${m}$\n$A = \\int_{-${m}}^{${m}} (${m * m} - x^2)\\,dx = \\left[${m * m}x - \\tfrac{x^3}{3}\\right]_{-${m}}^{${m}}$\n$= 2\\left(${m ** 3} - ${fracTex(m ** 3, 3)}\\right) = ${fracTex(4 * m ** 3, 3)}$`,
        });
      }
      if (v === 2) {
        const k = r.int(2, 8), c = r.int(1, 6), N = k * k + c * k;
        return task({
          text: `Find the positive number $k$ such that $\\displaystyle\\int_0^{k} (2x + ${c})\\,dx = ${N}$.`,
          answer: numM(k, null, [[Math.sqrt(N), `You dropped the term ${c}k from the antiderivative.`], [N / c, "Integrate both terms: the antiderivative is $x^2 + " + c + "x$."]]),
          hint: "Integrate to get an expression in $k$, then solve the quadratic equation.",
          formula: "\\int_0^k (2x + c)\\,dx = k^2 + ck",
          solution: `$\\int_0^k (2x + ${c})\\,dx = k^2 + ${c}k$\n$k^2 + ${c}k - ${N} = 0 \\Rightarrow (k - ${k})(k + ${k + c}) = 0$\n$k > 0$, so $k = ${k}$`,
        });
      }
      if (v === 3) {
        const a = r.int(1, 6), b = r.int(0, 8), Tt = r.int(2, 8);
        const s = 0.5 * a * Tt * Tt + b * Tt;
        return task({
          text: `A particle moves along a line with velocity $v(t) = ${poly([[a, "t"], [b, ""]])}$ m/s. How far does it travel from $t = 0$ to $t = ${Tt}$ s, in meters?`,
          data: { given: [`v(t) = ${poly([[a, "t"], [b, ""]])}\\ \\mathrm{m/s}`, dq("T", Tt, "s")], find: ["s"] },
          answer: numM(s, null, [[(a * Tt + b) * Tt, "The velocity is not constant: integrate $v(t)$ instead of using $v(T)\\cdot T$."], [a * Tt + b, "That is the final velocity; distance is the integral of velocity."], [a * Tt * Tt + b * Tt, "An antiderivative of $" + a + "t$ is $\\tfrac{" + a + "}{2}t^2$."]]),
          hint: "Distance is the integral of velocity over the time interval (the velocity is never negative here).",
          formula: "s = \\int_0^T v(t)\\,dt",
          solution: `$s = \\int_0^{${Tt}} (${poly([[a, "t"], [b, ""]])})\\,dt = \\left[\\tfrac{${a}}{2}t^2 ${b ? `+ ${b}t` : ""}\\right]_0^{${Tt}}$\n$= ${en(0.5 * a * Tt * Tt)}${b ? ` + ${b * Tt}` : ""} = ${en(s)}\\ \\text{m}$`,
        });
      }
      const p = 3 * r.int(1, 4), bb = r.int(1, 6);
      const avg = (p * bb * bb) / 3;
      return task({
        text: `What is the average value of $f(x) = ${p}x^2$ on the interval $[0, ${bb}]$?`,
        answer: numM(avg, null, [[(p * bb ** 3) / 3, "That is the integral; divide by the length of the interval."], [(p * bb * bb) / 2, "The average of $x^2$ is not half of its largest value."], [p * bb * bb, "That is the largest value of $f$, not the average."]]),
        hint: "Average value = (integral over the interval) ÷ (length of the interval).",
        formula: "\\bar f = \\dfrac{1}{b-a}\\int_a^b f(x)\\,dx",
        solution: `$\\int_0^{${bb}} ${p}x^2\\,dx = \\left[${co(p / 3, "x^3")}\\right]_0^{${bb}} = ${(p * bb ** 3) / 3}$\n$\\bar f = \\dfrac{${(p * bb ** 3) / 3}}{${bb}} = ${en(avg)}$`,
      });
    },
  },
  {
    id: "ex-complex",
    topics: [T("complex-numbers")],
    gen(level, r) {
      const z = (a, b) => `${a} ${b < 0 ? "-" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}i`;
      if (level === 1) {
        const [a, b, c] = r.pick(TRIPLES.slice(0, 4));
        const sa = r.pick([1, -1]) * a, sb = r.pick([1, -1]) * b;
        return task({
          text: `What is the modulus $|z|$ of $z = ${z(sa, sb)}$?`,
          answer: num(c),
          hint: "$|a + bi| = \\sqrt{a^2 + b^2}$.",
          solution: `$|z| = \\sqrt{${par(sa)}^2 + ${par(sb)}^2} = \\sqrt{${c * c}} = ${c}$`,
        });
      }
      const a = r.nonZero(-5, 5), b = r.nonZero(-5, 5), c = r.nonZero(-5, 5), d = r.nonZero(-5, 5);
      if (level === 2) {
        return task({
          text: `What is the real part of $(${z(a, b)})(${z(c, d)})$?`,
          answer: num(a * c - b * d),
          hint: "Multiply out and use $i^2 = -1$.",
          solution: `$(${z(a, b)})(${z(c, d)}) = ${a * c} + ${par(a * d)}i + ${par(b * c)}i + ${par(b * d)}i^2$\nReal part: $${a * c} - ${par(b * d)} = ${a * c - b * d}$`,
        });
      }
      return task({
        text: `What is the imaginary part of $(${z(a, b)})^2$?`,
        answer: num(2 * a * b),
        hint: "$(a + bi)^2 = a^2 - b^2 + 2abi$.",
        solution: `$(${z(a, b)})^2 = ${a * a - b * b} + ${par(2 * a * b)}i$, so the imaginary part is $${2 * a * b}$.`,
      });
    },
  },
  {
    id: "ex-vectors",
    topics: [T("vectors")],
    gen(level, r) {
      const v = () => [r.int(-5, 5), r.int(-5, 5), r.int(-5, 5)];
      const vt = (a) => `(${a.join(", ")})`;
      if (level === 1) {
        const a = v(), b = v();
        const d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        return task({
          text: `What is the dot product $\\vec a \\cdot \\vec b$ for $\\vec a = ${vt(a)}$ and $\\vec b = ${vt(b)}$?`,
          answer: num(d),
          hint: "$\\vec a \\cdot \\vec b = a_1b_1 + a_2b_2 + a_3b_3$.",
          solution: `$${a[0]} \\cdot ${par(b[0])} + ${par(a[1])} \\cdot ${par(b[1])} + ${par(a[2])} \\cdot ${par(b[2])} = ${d}$`,
        });
      }
      if (level === 2) {
        const [x, y, z, m] = r.pick([[2, 3, 6, 7], [1, 4, 8, 9], [2, 6, 9, 11], [4, 4, 7, 9], [1, 2, 2, 3], [2, 10, 11, 15]]);
        const s = () => r.pick([1, -1]);
        const a = r.shuffle([s() * x, s() * y, s() * z]);
        return task({
          text: `What is the magnitude of $\\vec a = ${vt(a)}$?`,
          answer: num(m),
          hint: "$|\\vec a| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$.",
          solution: `$|\\vec a| = \\sqrt{${a.map((c) => `${par(c)}^2`).join(" + ")}} = \\sqrt{${m * m}} = ${m}$`,
        });
      }
      // a·b = 0: k, a0, a1, b2 izberemo, b3 = ±1, a2 izračunamo.
      const k = r.int(-3, 3), b2 = r.nonZero(-3, 3), b3 = r.pick([1, -1]);
      const a0 = r.nonZero(-4, 4), a1 = r.int(-4, 4);
      const a = [a0, a1, -(a0 * k + a1 * b2) * b3];
      const rest = a[1] * b2 + a[2] * b3;
      return task({
        text: `For which value of $k$ are $\\vec a = ${vt(a)}$ and $\\vec b = (k, ${b2}, ${b3})$ perpendicular?`,
        answer: num(k),
        hint: "Perpendicular vectors have dot product 0.",
        solution: `$${a[0]}k + ${par(a[1])} \\cdot ${par(b2)} + ${par(a[2])} \\cdot ${par(b3)} = 0 \\Rightarrow ${a[0]}k = ${-rest} \\Rightarrow k = ${k}$`,
      });
    },
  },
  {
    id: "ex-matrices",
    topics: [T("matrices-and-determinants")],
    gen(level, r) {
      const m = () => r.int(-5, 6);
      if (level === 1) {
        const [a, b, c, d] = [m(), m(), m(), m()];
        return task({
          text: `Find the determinant of $\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$.`,
          answer: num(a * d - b * c),
          hint: "$\\det = ad - bc$.",
          solution: `$${a} \\cdot ${par(d)} - ${par(b)} \\cdot ${par(c)} = ${a * d - b * c}$`,
        });
      }
      if (level === 2) {
        const A = [[m(), m(), m()], [m(), m(), m()], [m(), m(), m()]];
        const det = A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1]) - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0]) + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
        return task({
          text: `Find the determinant of $\\begin{pmatrix} ${A.map((row) => row.join(" & ")).join(" \\\\ ")} \\end{pmatrix}$.`,
          answer: num(det),
          hint: "Expand along the first row (or use Sarrus' rule).",
          solution: `Expanding along the first row:\n$${A[0][0]}(${A[1][1] * A[2][2] - A[1][2] * A[2][1]}) - ${par(A[0][1])}(${A[1][0] * A[2][2] - A[1][2] * A[2][0]}) + ${par(A[0][2])}(${A[1][0] * A[2][1] - A[1][1] * A[2][0]}) = ${det}$`,
        });
      }
      // ak = bc: b = a·m, k = c·m.
      const a = r.nonZero(-4, 4), c = r.nonZero(-5, 5), mm = r.nonZero(-3, 3);
      const b = a * mm, k = c * mm;
      return task({
        text: `For which value of $k$ is the matrix $\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & k \\end{pmatrix}$ singular (not invertible)?`,
        answer: num(k),
        hint: "A matrix is singular when its determinant is 0.",
        solution: `$${a}k - ${par(b)} \\cdot ${par(c)} = 0 \\Rightarrow k = ${k}$`,
      });
    },
  },
  {
    id: "ex-probability",
    topics: [T("probability")],
    gen(level, r) {
      if (level === 1) {
        const v = r.int(0, 3);
        if (v === 0) {
          const s = r.int(2, 12);
          const ways = 6 - Math.abs(s - 7);
          return task({
            text: `Two fair six-sided dice are rolled. What is the probability that the sum is ${s}? Write it as a fraction.`,
            answer: fractionM(ways, 36, [[1 / 11, "The 11 possible sums are not equally likely; count ordered pairs out of 36."], [ways / 6, "There are 36 outcomes for two dice, not 6."]]),
            inputHint: "e.g. 1/6",
            hint: "There are 36 equally likely ordered outcomes; count the pairs with this sum.",
            formula: "P = \\dfrac{\\text{favourable}}{\\text{all outcomes}}",
            solution: `All outcomes: $6 \\cdot 6 = 36$\nPairs with sum ${s}: ${ways}\n$P = ${frac(ways, 36)} = ${fracTex(ways, 36)}$`,
          });
        }
        if (v === 1) {
          const ev = [["a prime number", 3, "2, 3, 5"], ["a multiple of 3", 2, "3, 6"], ["an even number", 3, "2, 4, 6"], ["greater than 4", 2, "5, 6"], ["less than 3", 2, "1, 2"], ["at least 2", 5, "2, 3, 4, 5, 6"], ["a factor of 6", 4, "1, 2, 3, 6"], ["a perfect square", 2, "1, 4"]];
          const [desc, k, list] = r.pick(ev);
          return task({
            text: `A fair six-sided die is rolled once. What is the probability that the number shown is ${desc}? Write it as a fraction.`,
            answer: fractionM(k, 6, [[(6 - k) / 6, "That is the probability of the complement."], [k / 5, "A die has 6 equally likely faces."]]),
            inputHint: "e.g. 1/3",
            hint: "List the faces that satisfy the condition and divide by 6.",
            formula: "P = \\dfrac{\\text{favourable}}{\\text{all outcomes}}",
            solution: `Favourable faces: ${list} (${k} of them)\n$P = ${frac(k, 6)} = ${fracTex(k, 6)}$`,
          });
        }
        if (v === 2) {
          const cards = [["a heart", 13, "13 hearts", 4], ["a king", 4, "4 kings", 13], ["a red king", 2, "2 red kings", 4], ["a face card (J, Q or K)", 12, "12 face cards", 4], ["an ace or a king", 8, "4 aces + 4 kings", 4], ["a black card", 26, "26 black cards", 13], ["a red ace", 2, "2 red aces", 4], ["a spade or a heart", 26, "13 + 13", 13]];
          const [desc, k, why, alt] = r.pick(cards);
          return task({
            text: `A card is drawn at random from a standard deck of 52 cards. What is the probability that it is ${desc}? Write it as a fraction.`,
            answer: fractionM(k, 52, [[alt / 52, "Recount the cards that satisfy the condition (4 suits × 13 ranks)."], [(52 - k) / 52, "That is the probability of the complement."]]),
            inputHint: "e.g. 1/13",
            hint: "A deck has 4 suits of 13 cards; count the favourable cards.",
            formula: "P = \\dfrac{\\text{favourable}}{52}",
            solution: `Favourable cards: ${why} = ${k}\n$P = ${frac(k, 52)} = ${fracTex(k, 52)}$`,
          });
        }
        const red = r.int(2, 9), blue = r.int(2, 9), green = r.int(1, 6), n = red + blue + green;
        return task({
          text: `A bag contains ${red} red, ${blue} blue and ${green} green marbles. One marble is drawn at random. What is the probability that it is not red? Write it as a fraction.`,
          answer: fractionM(blue + green, n, [[red / n, "That is the probability that it IS red."], [blue / n, "\"Not red\" includes the green marbles too."]]),
          inputHint: "e.g. 2/5",
          data: { given: [`r = ${red}`, `b = ${blue}`, `g = ${green}`], find: ["P(\\text{not red})"] },
          hint: "Count the marbles that are not red, or use $1 - P(\\text{red})$.",
          formula: "P(\\text{not } A) = 1 - P(A)",
          solution: `Total: $${red} + ${blue} + ${green} = ${n}$\nNot red: $${blue + green}$\n$P = ${frac(blue + green, n)} = ${fracTex(blue + green, n)}$`,
        });
      }
      if (level === 2) {
        const v = r.int(0, 4);
        const red = r.int(3, 8), blue = r.int(2, 7), n = red + blue;
        const bag = { given: [`r = ${red}`, `b = ${blue}`], find: ["P"] };
        if (v === 0) {
          return task({
            text: `A bag contains ${red} red and ${blue} blue balls. Two balls are drawn without replacement. What is the probability that both are red? Write it as a fraction.`,
            answer: fractionM(red * (red - 1), n * (n - 1), [[(red * red) / (n * n), "Without replacement the second draw has one red ball and one ball fewer."], [(2 * red) / n, "Multiply the probabilities of the two draws, do not add them."]]),
            inputHint: "e.g. 2/7",
            data: bag,
            hint: "Multiply the probability for the first draw by the probability for the second draw (one red ball fewer).",
            formula: "P(A \\cap B) = P(A)\\,P(B \\mid A)",
            solution: `First red: $${frac(red, n)}$\nSecond red (given the first): $${frac(red - 1, n - 1)}$\n$P = ${frac(red, n)} \\cdot ${frac(red - 1, n - 1)} = ${fracTex(red * (red - 1), n * (n - 1))}$`,
          });
        }
        if (v === 1) {
          return task({
            text: `A bag contains ${red} red and ${blue} blue balls. A ball is drawn, put back, and a second ball is drawn. What is the probability that both are blue? Write it as a fraction.`,
            answer: fractionM(blue * blue, n * n, [[(blue * (blue - 1)) / (n * (n - 1)), "The ball is put back, so the second draw has the same probabilities."], [(2 * blue) / n, "Multiply the probabilities of the two draws, do not add them."]]),
            inputHint: "e.g. 4/25",
            data: bag,
            hint: "With replacement the two draws are independent.",
            formula: "P(A \\cap B) = P(A)\\,P(B)",
            solution: `Each draw: $P(\\text{blue}) = ${frac(blue, n)}$\n$P = ${frac(blue, n)} \\cdot ${frac(blue, n)} = ${fracTex(blue * blue, n * n)}$`,
          });
        }
        if (v === 2) {
          return task({
            text: `A bag contains ${red} red and ${blue} blue balls. Two balls are drawn without replacement. What is the probability that they have different colours? Write it as a fraction.`,
            answer: fractionM(2 * red * blue, n * (n - 1), [[(red * blue) / (n * (n - 1)), "Red-then-blue and blue-then-red are both possible: multiply by 2."], [(2 * red * blue) / (n * n), "Without replacement the second draw is out of one ball fewer."]]),
            inputHint: "e.g. 3/5",
            data: bag,
            hint: "Add the probabilities of red-then-blue and blue-then-red.",
            formula: "P = P(RB) + P(BR)",
            solution: `$P(RB) = ${frac(red, n)} \\cdot ${frac(blue, n - 1)} = ${frac(red * blue, n * (n - 1))}$\n$P(BR) = ${frac(blue, n)} \\cdot ${frac(red, n - 1)} = ${frac(red * blue, n * (n - 1))}$\n$P = ${fracTex(2 * red * blue, n * (n - 1))}$`,
          });
        }
        if (v === 3) {
          const m = r.int(3, 6), k = r.int(1, m - 1);
          return task({
            text: `A fair coin is tossed ${m} times. What is the probability of getting exactly ${k} head${k === 1 ? "" : "s"}? Write it as a fraction.`,
            answer: fractionM(nCr(m, k), 2 ** m, [[1 / 2 ** m, `That is one particular order; there are $\\binom{${m}}{${k}}$ orders.`], [k / m, "Count outcomes: there are $2^n$ equally likely sequences."]]),
            inputHint: "e.g. 3/8",
            data: { given: [`n = ${m}`, `k = ${k}`], find: ["P"] },
            hint: "Count the sequences with exactly that many heads and divide by the number of all sequences.",
            formula: "P = \\dfrac{\\binom{n}{k}}{2^n}",
            solution: `All sequences: $2^{${m}} = ${2 ** m}$\nWith exactly ${k} heads: $\\binom{${m}}{${k}} = ${nCr(m, k)}$\n$P = ${frac(nCr(m, k), 2 ** m)} = ${fracTex(nCr(m, k), 2 ** m)}$`,
          });
        }
        const pa = r.int(3, 7) / 10, pb = r.int(2, 6) / 10, pab = r.int(1, Math.round(Math.min(pa, pb) * 10) - 1) / 10;
        const u = pa + pb - pab;
        return task({
          text: `For two events, $P(A) = ${en(pa)}$, $P(B) = ${en(pb)}$ and $P(A \\cap B) = ${en(pab)}$. What is $P(A \\cup B)$?`,
          answer: numM(Math.round(u * 100) / 100, null, [[pa + pb, "Subtract $P(A \\cap B)$; otherwise the overlap is counted twice."], [pa * pb, "That is $P(A \\cap B)$ for independent events, not the union."], [1 - u, "That is the probability that neither happens."]]),
          data: { given: [dq("P(A)", pa), dq("P(B)", pb), dq("P(A \\cap B)", pab)], find: ["P(A \\cup B)"] },
          hint: "Add the two probabilities and remove the overlap once.",
          formula: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
          solution: `$P(A \\cup B) = ${en(pa)} + ${en(pb)} - ${en(pab)}$\n$= ${en(Math.round(u * 100) / 100)}$`,
        });
      }
      const v = r.int(0, 4);
      if (v === 0) {
        const k = r.int(2, 4);
        return task({
          text: `A fair die is rolled ${k} times. What is the probability of getting at least one six? Write it as a fraction.`,
          answer: fractionM(6 ** k - 5 ** k, 6 ** k, [[k / 6, "Adding $\\tfrac16$ for each roll counts outcomes with several sixes more than once."], [1 / 6 ** k, "That is the probability that every roll is a six."], [5 ** k / 6 ** k, "That is the probability of no six; subtract it from 1."]]),
          inputHint: "e.g. 11/36",
          data: { given: [`n = ${k}`], find: ["P(\\text{at least one six})"] },
          hint: "Use the complement: $1 - P(\\text{no six})$.",
          formula: "P(\\text{at least one}) = 1 - P(\\text{none})",
          solution: `$P(\\text{no six}) = \\left(\\tfrac56\\right)^{${k}} = ${frac(5 ** k, 6 ** k)}$\n$P = 1 - ${frac(5 ** k, 6 ** k)} = ${fracTex(6 ** k - 5 ** k, 6 ** k)}$`,
        });
      }
      if (v === 1) {
        const p = r.pick([0.01, 0.02, 0.05, 0.1]), s = r.pick([0.9, 0.95, 0.99]), f = r.pick([0.02, 0.05, 0.1]);
        const post = (p * s) / (p * s + (1 - p) * f);
        return task({
          text: `A disease affects ${en(p * 100)}% of a population. A test detects it in ${en(s * 100)}% of people who have it, but also gives a positive result for ${en(f * 100)}% of healthy people. A person tests positive. What is the probability that they have the disease?${roundTo(3)}`,
          answer: numM(post, 3, [[s, "That is $P(+\\mid D)$; you need $P(D \\mid +)$, which depends on how rare the disease is."], [p * s, "That is $P(D \\cap +)$; divide it by the total probability of a positive test."], [1 - f, "That is the probability that a healthy person tests negative."]]),
          data: { given: [`P(D) = ${en(p * 100)}\\%`, `P(+ \\mid D) = ${en(s * 100)}\\%`, `P(+ \\mid \\text{healthy}) = ${en(f * 100)}\\%`], find: ["P(D \\mid +)"] },
          hint: "Find the probability of a positive test from both groups (ill and healthy), then use Bayes' theorem.",
          formula: "P(D \\mid +) = \\dfrac{P(D)P(+ \\mid D)}{P(D)P(+ \\mid D) + P(\\bar D)P(+ \\mid \\bar D)}",
          solution: `Ill and positive: $${en(p)} \\cdot ${en(s)} = ${en(p * s, 5)}$\nHealthy and positive: $${en(1 - p)} \\cdot ${en(f)} = ${en((1 - p) * f, 5)}$\n$P(D \\mid +) = \\dfrac{${en(p * s, 5)}}{${en(p * s + (1 - p) * f, 5)}} \\approx ${en(post, 3)}$`,
        });
      }
      if (v === 2) {
        const m = r.int(4, 8), k = r.int(1, m - 1), p = r.pick([0.2, 0.3, 0.4, 0.6, 0.7]);
        const P = nCr(m, k) * p ** k * (1 - p) ** (m - k);
        return task({
          text: `A basketball player scores a free throw with probability ${en(p)}, independently each time. She takes ${m} free throws. What is the probability that she scores exactly ${k}?${roundTo(4)}`,
          answer: numM(P, 4, [[p ** k * (1 - p) ** (m - k), `That is one particular order of hits and misses; multiply by $\\binom{${m}}{${k}}$.`], [nCr(m, k) * p ** k, "Include the probability of the misses, $(1-p)^{n-k}$."]]),
          data: { given: [`n = ${m}`, `k = ${k}`, dq("p", p)], find: ["P"] },
          hint: "This is a binomial distribution: choose which throws are hits, then multiply the probabilities.",
          formula: "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}",
          solution: `$\\binom{${m}}{${k}} = ${nCr(m, k)}$\n$P = ${nCr(m, k)} \\cdot ${en(p)}^{${k}} \\cdot ${en(1 - p)}^{${m - k}}$\n$\\approx ${en(P, 4)}$`,
        });
      }
      if (v === 3) {
        const cost = r.pick([2, 3, 5]), W = r.pick([10, 20, 25, 50]), a = r.int(1, 3), b = r.pick([6, 8, 10, 12]);
        const E = (W * a) / b - cost;
        return task({
          text: `A game costs ${cost} dollars to play. You win a prize of ${W} dollars with probability ${a}/${b}, otherwise nothing. What is your expected gain per game, in dollars? (A loss is negative.)${roundTo(2)}`,
          answer: numM(E, 2, [[(W * a) / b, "Subtract the cost of playing."], [((W - cost) * a) / b, "You pay the cost every game, not only when you win."], [-E, "Check the sign: gain = expected winnings − cost."]]),
          data: { given: [dq("c", cost), dq("W", W), `P = ${a}/${b}`], find: ["E"] },
          hint: "Expected winnings = prize × probability; then subtract what you pay.",
          formula: "E = W \\cdot P - c",
          solution: `Expected winnings: $${W} \\cdot ${fracTex(a, b)} = ${en((W * a) / b, 2)}$\n$E = ${en((W * a) / b, 2)} - ${cost} = ${en(E, 2)}$`,
        });
      }
      const gg = r.int(3, 9), gn = r.int(5, 12), bg = r.int(2, 8), bn = r.int(5, 12);
      const girls = gg + gn, total = girls + bg + bn;
      return task({
        text: `In a class, ${gg} girls and ${bg} boys wear glasses, while ${gn} girls and ${bn} boys do not. A student is chosen at random and turns out to be a girl. What is the probability that she wears glasses? Write it as a fraction.`,
        answer: fractionM(gg, girls, [[gg / total, "That is $P(\\text{girl and glasses})$; the condition restricts you to the girls."], [gg / (gg + bg), "That is $P(\\text{girl} \\mid \\text{glasses})$, the reverse condition."]]),
        inputHint: "e.g. 3/8",
        data: { given: [`\\text{girls with glasses} = ${gg}`, `\\text{girls without} = ${gn}`, `\\text{boys with glasses} = ${bg}`, `\\text{boys without} = ${bn}`], find: ["P(\\text{glasses} \\mid \\text{girl})"] },
        hint: "Given that the student is a girl, only the girls count as possible outcomes.",
        formula: "P(A \\mid B) = \\dfrac{n(A \\cap B)}{n(B)}",
        solution: `Girls: $${gg} + ${gn} = ${girls}$\nGirls with glasses: $${gg}$\n$P = ${frac(gg, girls)} = ${fracTex(gg, girls)}$`,
      });
    },
  },
  {
    id: "ex-binomial",
    topics: [T("binomial-distribution")],
    gen(level, r) {
      if (level === 1) {
        const n = r.int(3, 6), k = r.int(1, n - 1);
        return task({
          text: `A fair coin is tossed ${n} times. What is the probability of getting exactly ${k} heads? Write it as a fraction.`,
          answer: fraction(nCr(n, k), 2 ** n),
          inputHint: "e.g. 3/8",
          hint: "$P(X = k) = \\binom{n}{k} \\left(\\tfrac12\\right)^n$",
          solution: `$P(X = ${k}) = \\binom{${n}}{${k}} \\cdot \\dfrac{1}{${2 ** n}} = ${fracTex(nCr(n, k), 2 ** n)}$`,
        });
      }
      if (level === 2) {
        const n = r.int(5, 12), p = r.pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.6, 0.7]), k = Math.max(1, Math.min(n - 1, Math.round(n * p) + r.int(-1, 1)));
        const P = nCr(n, k) * p ** k * (1 - p) ** (n - k);
        return task({
          text: `$X \\sim B(${n}, ${en(p)})$. Find $P(X = ${k})$.${roundTo(3)}`,
          answer: num(P, 3),
          hint: "$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$",
          formula: "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}",
          solution: `$P(X = ${k}) = \\binom{${n}}{${k}} \\cdot ${en(p)}^{${k}} \\cdot ${en(1 - p)}^{${n - k}} \\approx ${en(P, 3)}$`,
        });
      }
      const n = r.int(8, 20), p = r.pick([0.05, 0.1, 0.15, 0.2]);
      if (r.next() < 0.5) {
        const P = (1 - p) ** n + n * p * (1 - p) ** (n - 1);
        return task({
          text: `In a factory ${en(p * 100)}% of items are faulty. A sample of ${n} items is taken. Find the probability that at most one item is faulty.${roundTo(3)}`,
          answer: num(P, 3),
          hint: "$P(X \\le 1) = P(X = 0) + P(X = 1)$",
          solution: `$P(X \\le 1) = ${en(1 - p)}^{${n}} + ${n} \\cdot ${en(p)} \\cdot ${en(1 - p)}^{${n - 1}} \\approx ${en(P, 3)}$`,
        });
      }
      const V = n * p * (1 - p);
      return task({
        text: `$X \\sim B(${n}, ${en(p)})$. Find the variance $\\operatorname{Var}(X)$.${roundTo(2)}`,
        answer: num(V, 2),
        hint: "$\\operatorname{Var}(X) = np(1-p)$",
        solution: `$\\operatorname{Var}(X) = ${n} \\cdot ${en(p)} \\cdot ${en(1 - p)} = ${en(V, 2)}$`,
      });
    },
  },
  {
    id: "ex-percent-ratio",
    topics: [T("ratios-rates-and-percentages")],
    gen(level, r) {
      if (level === 1) {
        const p = r.pick([12, 15, 20, 25, 35, 40, 65]), base = r.pick([80, 120, 240, 360, 500]);
        return task({
          text: `What is ${p}% of ${base}?`,
          answer: num((p * base) / 100),
          hint: "Multiply by $\\dfrac{p}{100}$.",
          solution: `$${base} \\cdot ${en(p / 100)} = ${en((p * base) / 100)}$`,
        });
      }
      if (level === 2) {
        const old = r.pick([40, 50, 80, 120, 250]), ch = r.pick([-30, -20, -15, 10, 25, 40]);
        const nw = old * (1 + ch / 100);
        return task({
          text: `The price of a jacket changed from ${old} dollars to ${en(nw)} dollars. By what percent did the price change? (Use a negative number for a decrease.)`,
          answer: num(ch),
          hint: "percent change $= \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\cdot 100$.",
          solution: `$\\dfrac{${en(nw)} - ${old}}{${old}} \\cdot 100 = ${ch}\\%$`,
        });
      }
      const a = r.int(2, 5), b = r.int(1, 4), c = r.int(1, 3), unit = r.int(4, 15);
      const total = (a + b + c) * unit;
      return task({
        text: `${total} dollars are shared among three people in the ratio $${a} : ${b} : ${c}$. How many dollars does the first person get?`,
        answer: num(a * unit),
        hint: "Find the value of one part first.",
        solution: `Parts: $${a} + ${b} + ${c} = ${a + b + c}$; one part $= ${total} / ${a + b + c} = ${unit}$.\nFirst person: $${a} \\cdot ${unit} = ${a * unit}$`,
      });
    },
  },
  {
    id: "ex-circles",
    topics: [T("circles")],
    gen(level, r) {
      if (level === 1) {
        const rad = r.int(2, 12);
        return task({
          text: `What is the area of a circle with radius ${rad} cm, in cm²?${roundTo(1)}`,
          answer: num(Math.PI * rad * rad, 1),
          hint: "$A = \\pi r^2$.",
          formula: "A = \\pi r^2",
          solution: `$A = \\pi \\cdot ${rad}^2 \\approx ${en(Math.PI * rad * rad, 1)}\\ \\text{cm}^2$`,
        });
      }
      if (level === 2) {
        const h = r.int(-5, 5), k = r.int(-5, 5), rad = r.int(2, 8);
        const D = -2 * h, E = -2 * k, F = h * h + k * k - rad * rad;
        const eq = `${poly([[1, "x^2"], [1, "y^2"], [D, "x"], [E, "y"], [F, ""]])} = 0`;
        return task({
          text: `The equation of a circle is $${eq}$. What is its radius?`,
          answer: num(rad),
          hint: "Complete the square in $x$ and in $y$.",
          formula: "(x - p)^2 + (y - q)^2 = r^2",
          solution: `$${factor(h)}^2 + ${factor(k, "y")}^2 = ${h * h} + ${k * k} - ${par(F)} = ${rad * rad}$, so $r = ${rad}$.`,
        });
      }
      const rad = r.int(3, 12), ang = r.pick([30, 45, 60, 72, 90, 120, 150]);
      const A = (ang / 360) * Math.PI * rad * rad;
      return task({
        text: `A sector of a circle with radius ${rad} cm has a central angle of ${ang}°. What is the area of the sector, in cm²?${roundTo(1)}`,
        answer: num(A, 1),
        hint: "Sector area $= \\dfrac{\\theta}{360^\\circ} \\pi r^2$.",
        formula: "A = \\dfrac{\\theta}{360^\\circ}\\pi r^2",
        solution: `$A = \\dfrac{${ang}}{360} \\cdot \\pi \\cdot ${rad}^2 \\approx ${en(A, 1)}\\ \\text{cm}^2$`,
      });
    },
  },
];

// Pomožno: izbirna naloga z že pripravljenimi možnostmi (za generatorje, ki jo potrebujejo).
export const examChoice = (r, correct, distractors) => ({ type: "choice", ...choices(r, correct, distractors) });
