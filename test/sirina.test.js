// Široke formule in tabele v lekcijah (public/sirina.js, public/textbook.css; j 2026-10-31).
// Celoten videz v brskalniku preverja scripts/preveri-videz-lekcij.cjs.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { MIN, pomanjsaj } from "../public/sirina.js";

const pub = (f) => fs.readFileSync(path.join(import.meta.dirname, "..", "public", f), "utf8");

test("textbook icon size never applies to KaTeX svgs (root sign kept its bar)", () => {
  const rule = pub("textbook.css").split("\n").find((l) => l.startsWith(".textbook svg"));
  assert.ok(rule, "pravilo za ikone");
  assert.match(rule, /:not\(\.katex svg\)/);
});

// Element, katerega širina raste s pisavo (kot formula ali tabela).
function fake(natural, base = 20) {
  const el = { style: { fontSize: "" } };
  const size = () => (el.style.fontSize ? parseFloat(el.style.fontSize) : base);
  globalThis.getComputedStyle = () => ({ fontSize: `${size()}px` });
  return { el, meri: () => (natural * size()) / base };
}

test("too wide: shrinks just enough to fit", () => {
  const { el, meri } = fake(330);
  pomanjsaj(el, 300, meri);
  assert.ok(meri() <= 301, `širina ${meri()}`);
  assert.ok(parseFloat(el.style.fontSize) > 20 * 0.85);
});

test("far too wide: stops at the minimum size and leaves the rest to the scrollbar", () => {
  const { el, meri } = fake(900);
  pomanjsaj(el, 300, meri);
  assert.equal(Number(parseFloat(el.style.fontSize).toFixed(1)), 20 * MIN);
  assert.ok(meri() > 300);
});

test("fits already: size is left alone (and an old size is cleared)", () => {
  const { el, meri } = fake(200);
  el.style.fontSize = "16px";
  pomanjsaj(el, 300, meri);
  assert.equal(el.style.fontSize, "");
});

test("lesson and »Razloži drugače« both get fitted", () => {
  const js = pub("textbook.js");
  assert.match(js, /wireFormulas\(box\);\n\s+prilagodiSirino\(box\);/);
  assert.match(js, /wireFormulas\(altBody\);\n\s+prilagodiSirino\(altBody\);/);
});

test("an inline formula never breaks across two lines", () => {
  assert.match(pub("textbook.css"), /^\.textbook \.katex \{ white-space: nowrap; \}$/m);
});

test("a setting with only a few values is buttons, not a slider (axis sliders stay sliders)", async () => {
  const { GUMBI_DO } = await import("../public/sim/kit.js");
  assert.ok(GUMBI_DO >= 4 && GUMBI_DO <= 8);
  const kit = pub("sim/kit.js");
  assert.match(kit, /n <= GUMBI_DO && !wrap\.classList\.contains\("axis-slider"\)/);
  assert.match(kit, /sl\.classList\.add\("axis-slider"\);\n\s+sl\.sync\?\.\(\);/);
  assert.match(pub("textbook.css"), /\.demo-slider\.as-choice \.demo-choice/);
});

test("a formula that does not fit is folded at its equals signs: left side on top, each »= …« below", async () => {
  const { zlozTex } = await import("../public/sirina.js");
  assert.equal(zlozTex("a = b + c = d"), "\\begin{aligned}&a \\\\ &\\quad {}= b + c \\\\ &\\quad {}= d\\end{aligned}");
  assert.equal(zlozTex("s = v t"), "\\begin{aligned}&s \\\\ &\\quad {}= v t\\end{aligned}");
  // relacije v ulomku, oklepaju ali {…} ostanejo na mestu
  assert.equal(zlozTex("F = \\dfrac{a = b}{c}"), "\\begin{aligned}&F \\\\ &\\quad {}= \\dfrac{a = b}{c}\\end{aligned}");
  assert.equal(zlozTex("\\left( x = 1 \\right) + (a \\ge 0)"), null);
  // stopnja 1: le izjave, ločene s \quad, vsaka v svoji vrstici
  assert.equal(zlozTex("x^2 = 4 \\qquad (x > 0)", 1), "\\begin{aligned}&x^2 = 4 \\\\ &(x > 0)\\end{aligned}");
  // kemijska enačba v enem \mathrm
  assert.equal(zlozTex("\\mathrm{CaCO_3 \\to CaO + CO_2}"), "\\begin{aligned}&\\mathrm{CaCO_3} \\\\ &\\quad {}\\to \\mathrm{CaO + CO_2}\\end{aligned}");
  // ni kje zložiti ali že ima vrstice
  assert.equal(zlozTex("x + y"), null);
  assert.equal(zlozTex("\\begin{aligned}a&=b\\end{aligned}"), null);
});
