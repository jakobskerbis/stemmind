// Vsaka vrstica, ki se lahko pomika vstran, je označena (public/drsniki.js, j 2026-11-01).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { DRSNE, IZVZETO } from "../public/drsniki.js";

const pub = new URL("../public/", import.meta.url);

// Ožji izbirnik (».msg .katex-display«) je zajet, če je v seznamu njegov konec (».katex-display«).
test("vsako pravilo z overflow-x: auto je v seznamu drsnih vrstic", () => {
  const znani = new Set([...DRSNE, ...IZVZETO]);
  const manjka = [];
  for (const f of readdirSync(pub).filter((f) => f.endsWith(".css"))) {
    const css = readFileSync(new URL(f, pub), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    for (const [, sel, telo] of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      if (!/overflow(?:-x)?\s*:\s*(?:auto|scroll)\b/.test(telo)) continue;
      for (const s of sel.split(",").map((x) => x.trim().replace(/\s+/g, " "))) {
        if (s && !znani.has(s) && ![...znani].some((k) => s.endsWith(` ${k}`))) manjka.push(`${f}: ${s}`);
      }
    }
  }
  assert.deepEqual(manjka, []);
});

test("drsniki.css in drsniki.js sta naložena v aplikaciji in kalkulatorju", () => {
  for (const f of ["index.html", "kalkulator.html"]) {
    const html = readFileSync(new URL(f, pub), "utf8");
    assert.match(html, /href="drsniki\.css"/, f);
  }
  assert.match(readFileSync(new URL("app.js", pub), "utf8"), /initDrsniki\(\)/);
  assert.match(readFileSync(new URL("kalkulator.js", pub), "utf8"), /initDrsniki\(\)/);
});
