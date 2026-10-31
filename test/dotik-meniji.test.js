// Telefon v pravem brskalniku (Playwright, če je nameščen):
// 1) tipka ABC v grafičnem kalkulatorju odpre sistemsko tipkovnico in naša tipkovnica ne skoči nazaj;
// 2) dolg spustni meni se odpre čez gumb: izbrana možnost je v iskalnem okencu, seznam se začne za njo.
import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let playwright = null;
try {
  playwright = require("playwright");
} catch {}

const PUB = path.resolve("public");
const TYPES = { ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".html": "text/html" };
const PAGES = {
  "/t-calc.html": `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/ui.css"><link rel="stylesheet" href="/graph.css"><div id="g" style="height:600px"></div><button id="ven" style="position:fixed;top:0;left:0;z-index:9999;width:44px;height:44px">x</button>
<script type="module">
import { createCalculator } from "/graph/calc.js";
window.calc = createCalculator(document.getElementById("g"), { t: (k) => k, icon: () => "", locale: () => "sl", storageKey: () => "t-calc", studentId: () => "", toast() {}, askTutor() {} });
window.ready = true;
</script>`,
  "/t-dd.html": `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/ui.css">
<div style="padding:120px 16px"><select id="dolg">${Array.from({ length: 30 }, (_, i) => `<option value="${i}"${i === 10 ? " selected" : ""}>Možnost ${i}</option>`).join("")}</select>
<select id="kratek"><option>Ena</option><option selected>Dve</option><option>Tri</option></select></div>
<script type="module">import "/dropdown.js"; window.ready = true;</script>`,
};

function serve() {
  const server = http.createServer((req, res) => {
    const url = req.url.split("?")[0];
    if (PAGES[url]) return res.writeHead(200, { "content-type": "text/html; charset=utf-8" }).end(PAGES[url]);
    const file = path.join(PUB, path.normalize(url));
    if (!file.startsWith(PUB) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) return res.writeHead(404).end();
    res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" }).end(fs.readFileSync(file));
  });
  return new Promise((ok) => server.listen(0, "127.0.0.1", () => ok(server)));
}

let browser = null;
try {
  if (playwright) browser = await playwright.chromium.launch();
} catch {}
const skip = browser ? false : "Playwright/Chromium ni nameščen";

test("touch-browser checks", { skip }, async (t) => {
  const server = await serve();
  const base = `http://127.0.0.1:${server.address().port}`;
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 }, isMobile: true, hasTouch: true });
  t.after(async () => {
    await ctx.close();
    await browser.close();
    server.close();
  });

  await t.test("graphing calculator: ABC keeps the system keyboard", async () => {
    const page = await ctx.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`${base}/t-calc.html`);
    await page.waitForFunction(() => window.ready);
    await page.tap(".gc-input");
    await page.waitForSelector(".gc-keypad:not([hidden])");
    assert.equal(await page.getAttribute(".gc-input", "inputmode"), "none", "own keypad: system keyboard off");
    await page.tap('.gc-keypad [data-kt="abc"]');
    await page.waitForTimeout(300);
    const st = await page.evaluate(() => {
      const f = document.querySelector(".gc-input");
      return { focused: document.activeElement === f, inputmode: f.getAttribute("inputmode"), keypadHidden: document.querySelector(".gc-keypad").hidden };
    });
    assert.deepEqual(st, { focused: true, inputmode: null, keypadHidden: true });
    // Tipkanje s sistemsko tipkovnico gre v polje.
    await page.keyboard.type("y=2x");
    assert.equal(await page.inputValue(".gc-input"), "y=2x");
    // Telefon polje ob odpiranju tipkovnice za hip odfokusira: naslednji dotik ne vrne naše tipkovnice.
    await page.evaluate(() => document.querySelector(".gc-input").blur());
    await page.waitForTimeout(100);
    await page.tap(".gc-row .gc-main"); // vrstica z izrazom: dotik odpre urejanje
    await page.waitForTimeout(100);
    assert.equal(await page.evaluate(() => document.activeElement?.classList.contains("gc-input")), true, "dotik vrstice odpre urejanje");
    assert.equal(await page.evaluate(() => document.querySelector(".gc-keypad").hidden), true, "ABC ostane po izgubi fokusa");
    assert.equal(await page.getAttribute(".gc-input", "inputmode"), null);
    // Dotik izven kalkulatorja konča način ABC; naslednji dotik polja spet pokaže našo tipkovnico.
    await page.evaluate(() => document.querySelector(".gc-input").blur());
    await page.tap("#ven");
    await page.tap(".gc-row .gc-main");
    await page.waitForSelector(".gc-keypad:not([hidden])");
    assert.deepEqual(errors, []);
  });

  await t.test("long dropdown opens over its button with the chosen item in the search box", async () => {
    const page = await ctx.newPage();
    await page.goto(`${base}/t-dd.html`);
    await page.waitForFunction(() => window.ready && document.querySelector(".dd-btn"));
    const btn = page.locator(".dd-btn").first();
    const b = await btn.boundingBox();
    await btn.tap();
    const list = page.locator(".dd-list");
    await list.evaluate((el) => Promise.all(el.getAnimations().map((a) => a.finished)));
    assert.ok(await list.evaluate((el) => el.classList.contains("over")));
    const input = list.locator(".dd-search input");
    assert.equal(await input.getAttribute("placeholder"), "Možnost 10");
    const ib = await input.boundingBox();
    assert.ok(Math.abs(ib.y - b.y) <= 1.5 && Math.abs(ib.x - b.x) <= 1.5 && Math.abs(ib.width - b.width) <= 1.5, `okence na mestu gumba (${ib.x},${ib.y} vs ${b.x},${b.y})`);
    // Izbrana možnost je v okencu, seznam se začne z naslednjo.
    assert.equal(await list.locator('.dd-opt[data-i="10"]').isHidden(), true);
    const firstVisible = await list.evaluate((el) => {
      const head = el.querySelector(".dd-search").getBoundingClientRect().bottom;
      return [...el.querySelectorAll(".dd-opt")].find((o) => !o.hidden && o.getBoundingClientRect().top >= head - 1)?.textContent;
    });
    assert.equal(firstVisible, "Možnost 11");
    // Tik pod okencem ni odrezane prejšnje vrstice.
    const underHead = await list.evaluate((el) => {
      const h = el.querySelector(".dd-search").getBoundingClientRect();
      return document.elementFromPoint(h.left + 30, h.bottom + 2)?.closest(".dd-opt")?.textContent;
    });
    assert.equal(underHead, "Možnost 11");
    // Iskanje najde tudi izbrano možnost.
    await input.fill("10");
    assert.equal(await list.locator('.dd-opt[data-i="10"]').isVisible(), true);
    await list.locator('.dd-opt[data-i="10"]').tap();
    assert.equal(await page.locator(".dd-list").count(), 0);
    assert.equal(await page.$eval("#dolg", (s) => s.value), "10");
    // Izbira druge možnosti.
    await btn.tap();
    await page.locator(".dd-search input").fill("2");
    await page.locator('.dd-opt[data-i="25"]').tap();
    assert.equal(await page.$eval("#dolg", (s) => s.value), "25");
  });

  await t.test("short dropdown stays a plain list under the button", async () => {
    const page = await ctx.newPage();
    await page.goto(`${base}/t-dd.html`);
    await page.waitForFunction(() => window.ready && document.querySelectorAll(".dd-btn").length === 2);
    await page.locator(".dd-btn").nth(1).tap();
    const list = page.locator(".dd-list");
    assert.equal(await list.locator(".dd-search").count(), 0);
    assert.equal(await list.evaluate((el) => el.classList.contains("over")), false);
    assert.equal(await list.locator(".dd-opt").count(), 3);
  });
});
