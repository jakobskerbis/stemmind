// Zgodovinski slogi (public/theme.js → ERAS): kontrast v svetlem in temnem načinu, datoteke motivov,
// prevodi in nastavitev za inštruktorja. Nov slog iz docs/oblikovanje.md mora prestati te teste.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import SL from "../public/i18n/sl.js";
import { DEVICE_SETTINGS } from "../public/settings-registry.js";

const PUB = path.join(import.meta.dirname, "..", "public");

function loadTheme() {
  const store = new Map();
  const el = () => ({ style: { setProperty() {}, removeProperty() {} }, dataset: {}, classList: { toggle() {}, add() {} }, removeAttribute() {}, setAttribute() {}, appendChild() {} });
  const window = {
    localStorage: { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k), key: () => null, length: 0 },
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    document: { documentElement: el(), head: el(), querySelector: () => null, createElement: el },
    navigator: {},
    dispatchEvent() {},
    CustomEvent: class {},
  };
  window.window = window;
  vm.runInNewContext(fs.readFileSync(path.join(PUB, "theme.js"), "utf8").replace("Object.keys(localStorage)", "[]"), window);
  return window.STEMTheme;
}

const T = loadTheme();
const cap = (s) => s[0].toUpperCase() + s.slice(1);

test("every history style passes the contrast check in light and dark mode, also over its background motifs", () => {
  assert.ok(Object.keys(T.ERAS).length >= 4);
  for (const id of Object.keys(T.ERAS)) {
    for (const mode of ["light", "dark"]) {
      const c = T.compute({ style: id, mode, accent: null, light: null, dark: null });
      assert.ok(c && c.motifBg?.length === 2, `${id} ${mode}`);
      assert.equal(c.dark, mode === "dark", `${id} ${mode}: napačna svetlost ozadja`);
      assert.ok(T.check(c), `${id} ${mode}: premajhen kontrast`);
      // Osnovne barve so že dovolj kontrastne (theme.js jih ne sme opazno popraviti).
      assert.equal(c.vars["--accent"], T.ERAS[id][mode].accent, `${id} ${mode}: poudarek ni dovolj kontrasten`);
    }
  }
});

test("the motif contrast check covers the strongest motif opacity in ui.css (two layers may overlap)", () => {
  const css = fs.readFileSync(path.join(PUB, "ui.css"), "utf8");
  const pct = (v) => Number(css.match(new RegExp(`${v}: color-mix\\(in srgb, var\\(--text\\) ([\\d.]+)%`))?.[1]) / 100;
  const a = pct("--motif-c"), b = pct("--motif-c2");
  assert.ok(a > 0 && b > 0, "--motif-c in --motif-c2 v ui.css");
  assert.ok(T.MOTIF >= 1 - (1 - a) * (1 - b) - 1e-9, `MOTIF ${T.MOTIF} < ${(1 - (1 - a) * (1 - b)).toFixed(3)}`);
  // Vsak zaslon ima oba sloja; osem mest (--a1 … --a8) za osem risb sloga.
  for (let i = 1; i <= 8; i++) assert.ok(css.includes(`var(--a${i}) no-repeat var(--g${i})`), `--a${i}`);
});

test("every history style has its font, motif files, fact texts, picker names and tutor setting", () => {
  const deps = JSON.parse(fs.readFileSync(path.join(PUB, "..", "package.json"), "utf8")).dependencies;
  for (const [id, e] of Object.entries(T.ERAS)) {
    assert.match(id, /^[a-z]+$/, id);
    assert.ok(deps[`@fontsource-variable/${e.font[1]}`], `${id}: paket pisave ${e.font[1]} ni v package.json`);
    assert.ok(e.motifs.length >= 6 && e.motifs.length <= 8, `${id}: 6–8 motivov`);
    let bytes = 0;
    for (const f of new Set([e.band[0], e.glyph, ...e.motifs])) {
      const file = path.join(PUB, "eras", id, `${f}.svg`);
      assert.ok(fs.existsSync(file), `manjka ${file}`);
      const svg = fs.readFileSync(file, "utf8");
      assert.match(svg, /^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" viewBox="[\d. ]+"/, file);
      assert.doesNotMatch(svg, /<script|href=|<text/i, file);
      bytes += svg.length;
    }
    assert.ok(bytes < 30000, `${id}: motivi ${bytes} B`);
    const [prefix, n] = e.facts;
    for (const k of [`${prefix}.title`, ...Array.from({ length: n }, (_, i) => `${prefix}.f${i + 1}`), `ap.style${cap(id)}`, `ap.style${cap(id)}Text`]) assert.ok(SL[k], `${id}: manjka ${k} v sl.js`);
    assert.ok(!SL[`${prefix}.f${n + 1}`], `${id}: več dejstev kot ${n}`);
    assert.ok(prefix === "greek" || prefix === `era.${id}`, `${id}: ključi dejstev naj bodo era.${id}.*`);
    assert.ok(DEVICE_SETTINGS.style.values.includes(id), `${id}: ni v settings-registry.js`);
    assert.match(DEVICE_SETTINGS.style.desc, new RegExp(`\\b${id} = `), `${id}: opis v settings-registry.js`);
  }
  assert.deepEqual(DEVICE_SETTINGS.style.values, [...T.STYLES]);
});
