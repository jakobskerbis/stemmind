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
