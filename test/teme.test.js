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
      // Okvir v barvah obdobja (ui.css → »Okvir«): meniji, glave in vrstica za pisanje, obvestila, pas ob robovih.
      const e = T.ERAS[id][mode];
      for (const k of ["menu", "bar", "banner"]) assert.match(e[k] || "", /^#[0-9a-f]{6}$/, `${id} ${mode}: ERAS.${k}`);
      assert.notEqual(e.menu, e.surface, `${id} ${mode}: meni naj ima barvo obdobja`);
      for (const k of ["--menu", "--menu-text", "--menu-accent", "--menu-accent-text", "--bar", "--banner", "--edge-c"]) assert.ok(c.vars[k], `${id} ${mode}: ${k}`);
      assert.equal(c.vars["--menu-accent"], e.menuAccent || e.accent, `${id} ${mode}: poudarek menija ni dovolj kontrasten`);
      assert.ok(c.menuMotif.length === 1 && c.chrome.length === 2, `${id} ${mode}: preverjanje okvirja`);
      // Lastne barve: poudarek in meni uporabnika veljata, kontrast ostane preverjen.
      for (const own of [{ accent: "#1d7a3a" }, { [mode]: { menu: mode === "dark" ? "#3a3f52" : "#20304a" } }, { [mode]: { surface: mode === "dark" ? "#1a1a1a" : "#ffffff" } }]) {
        const o = T.compute({ style: id, mode, accent: null, light: null, dark: null, ...own });
        assert.ok(T.check(o), `${id} ${mode} ${JSON.stringify(own)}: premajhen kontrast`);
      }
    }
  }
});

test("the contrast check covers the wallpaper opacity in ui.css and every wallpaper tile is up to date", async () => {
  const css = fs.readFileSync(path.join(PUB, "ui.css"), "utf8");
  const pcts = [...css.matchAll(/--wall-[cm]: color-mix\(in srgb, var\(--text\) ([\d.]+)%/g)].map((m) => Number(m[1]) / 100);
  assert.match(css, /--wall-m: color-mix/, "--wall-m (tapeta na seznamu pogovorov) v ui.css");
  assert.ok(pcts.length && pcts.every((p) => p > 0), "--wall-c v ui.css");
  assert.ok(T.MOTIF >= Math.max(...pcts), `MOTIF ${T.MOTIF} < ${Math.max(...pcts)}`);
  assert.match(css, /mask: var\(--tapeta\) repeat/);
  // Tapeta je sestavljena iz motivov sloga (node scripts/tapeta.js); nova risba ali tema zahteva novo sestavo.
  const { sestavi } = await import("../scripts/tapeta.js");
  for (const [id, e] of Object.entries(T.ERAS)) {
    const file = path.join(PUB, "eras", id, "tapeta.svg");
    assert.equal(fs.existsSync(file) && fs.readFileSync(file, "utf8"), sestavi(id, e), `${id}: node scripts/tapeta.js ${id}`);
  }
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

// Veljavni podatki poti SVG: ukazi s pravim številom števil (zastavici loka sta 0 ali 1, lahko brez presledka).
function validPathData(d) {
  const ARGS = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0 };
  const num = /[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/iy;
  let i = 0, cmd = null, first = true;
  const skip = () => { while (i < d.length && /[\s,]/.test(d[i])) i++; };
  for (skip(); i < d.length; skip()) {
    if (/[a-z]/i.test(d[i])) {
      cmd = d[i++];
      if (!(cmd.toLowerCase() in ARGS) || (first && cmd.toLowerCase() !== "m")) return false;
      first = false;
      if (cmd.toLowerCase() === "z") continue;
    } else if (!cmd || cmd.toLowerCase() === "z") return false;
    const k = cmd.toLowerCase();
    for (let a = 0; a < ARGS[k]; a++) {
      skip();
      if (k === "a" && (a === 3 || a === 4)) {
        if (!/[01]/.test(d[i])) return false;
        i++;
        continue;
      }
      num.lastIndex = i;
      const m = num.exec(d);
      if (!m) return false;
      i = num.lastIndex;
    }
  }
  return !first;
}

test("every history style supplies period icons: each mapped icon exists in icons.js and is valid, small SVG", async () => {
  const { ZNAKI, sestavi } = await import("../scripts/ikone-obdobij.js");
  const src = fs.readFileSync(path.join(PUB, "icons.js"), "utf8");
  const base = new Set([...src.matchAll(/[{\s]"([a-z0-9-]+)":"/g)].map((m) => m[1]));
  assert.ok(base.has("map") && base.has("sparkles"), "imena ikon iz icons.js");
  for (const z of ZNAKI) assert.ok(base.has(z), `ZNAKI: ${z} ni v icons.js`);
  const lucide = fs.existsSync(path.join(PUB, "..", "node_modules", "lucide-static"));
  for (const [id, e] of Object.entries(T.ERAS)) {
    assert.ok(e.icons, `${id}: ERAS.${id}.icons (ikone obdobja)`);
    const file = path.join(PUB, "eras", id, `${e.icons}.json`);
    const raw = fs.readFileSync(file, "utf8");
    assert.ok(raw.length < 40000, `${id}: ikone ${raw.length} B`);
    if (lucide) assert.equal(raw, sestavi(id), `${id}: node scripts/ikone-obdobij.js`);
    const { map, svg } = JSON.parse(raw);
    // Vsaka ikona vmesnika ima odločitev: ikona obdobja v vsakem slogu ali navaden znak (ZNAKI, docs/oblikovanje.md).
    for (const name of base) assert.ok(ZNAKI.includes(name) !== Boolean(map[name]), `${id}: ${name} naj bo ${ZNAKI.includes(name) ? "brez ikone obdobja (ZNAKI)" : "v map"}`);
    for (const [name, def] of Object.entries(map)) {
      assert.ok(base.has(name), `${id}: ${name} ni ikona v icons.js`);
      assert.ok(svg[def], `${id}: ${name} → ${def} manjka v svg`);
    }
    for (const [def, body] of Object.entries(svg)) {
      assert.ok(Object.values(map).includes(def), `${id}: ${def} ni uporabljena`);
      const tags = [...body.matchAll(/<(\/?)([a-z]+)\b([^>]*)>/g)];
      assert.ok(tags.length, `${id}/${def}: prazna`);
      for (const [, close, tag, attrs] of tags) {
        if (close) continue;
        assert.ok(["path", "circle", "rect", "ellipse", "line", "polyline", "polygon"].includes(tag), `${id}/${def}: <${tag}>`);
        assert.doesNotMatch(attrs, /\bon[a-z]+=|href|url\(|style=/i, `${id}/${def}`);
        for (const [, d] of attrs.matchAll(/\bd="([^"]*)"/g)) assert.ok(validPathData(d), `${id}/${def}: neveljavna pot ${d}`);
        for (const [, k, v] of attrs.matchAll(/\b(cx|cy|r|rx|ry|x|y|width|height|x1|y1|x2|y2)="([^"]*)"/g)) assert.ok(Number.isFinite(+v) && +v >= -1 && +v <= 25, `${id}/${def}: ${k}="${v}"`);
      }
    }
  }
  assert.ok(validPathData("M3 3a1 1 0 01 2 2z") && !validPathData("M3 3L4") && !validPathData("L3 3"), "preverjanje poti");
});
