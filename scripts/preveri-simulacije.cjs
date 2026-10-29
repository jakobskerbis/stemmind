// Pregled vseh simulacij iz kataloga na telefonski širini (360 px) po merilih docs/kakovost.md §3:
// napake v konzoli, vodoravno drsenje, oznake kontrol, tipkovnica za vlečne elemente, »Poskusi«, »Ponastavi«.
// Zagon: node scripts/preveri-simulacije.cjs   (potrebuje Playwright s Chromiumom; zažene strežnik na vratih 3998)
const { spawn } = require("node:child_process");
const path = require("node:path");
const { chromium } = require("playwright");
const PORT = 3998;

(async () => {
  const root = path.join(__dirname, "..");
  const srv = spawn(process.execPath, ["--disable-warning=ExperimentalWarning", "server/index.js"], { cwd: root, env: { ...process.env, PORT, EVKLID_MOCK: "1" }, stdio: "ignore" });
  const base = `http://localhost:${PORT}`;
  for (let i = 0; i < 50; i++) {
    try { if ((await fetch(base + "/style.css")).ok) break; } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 360, height: 740 }, hasTouch: true });
  const errs = [];
  let cur = "";
  p.on("pageerror", (e) => errs.push(`${cur}: ${String(e.message).slice(0, 140)}`));
  p.on("console", (m) => m.type() === "error" && errs.push(`${cur}: ${m.text().slice(0, 140)}`));
  await p.goto(base + "/zasebnost.html");
  await p.evaluate(async () => {
    document.head.innerHTML = '<meta name="viewport" content="width=device-width,initial-scale=1">' + ["vendor/katex/katex.min.css", "style.css", "ui.css", "textbook.css"].map((h) => `<link rel="stylesheet" href="/${h}">`).join("");
    document.body.innerHTML = '<div id="box" style="padding:16px"></div>';
    await new Promise((r) => { const sc = document.createElement("script"); sc.src = "/vendor/katex/katex.min.js"; sc.onload = r; document.head.append(sc); });
    const { mountSim } = await import("/sim/index.js");
    const { SIM_TOPICS } = await import("/sim/katalog.js");
    const seen = new Set();
    window.SIMS = [];
    for (const [topic, v] of Object.entries(SIM_TOPICS)) for (const [id, , opts] of Array.isArray(v[0]) ? v : [v]) {
      const k = id + JSON.stringify(opts || {});
      if (!seen.has(k)) seen.add(k), SIMS.push({ topic, id, opts: opts || {} });
    }
    window.mountOne = async (i) => {
      const box = document.getElementById("box");
      box.innerHTML = "";
      const m = document.createElement("div");
      box.append(m);
      await mountSim(SIMS[i].id, m, SIMS[i].opts);
      await new Promise((r) => setTimeout(r, 200));
      const ctrls = [...m.querySelectorAll("input,select,button")];
      return {
        overflow: Math.max(document.documentElement.scrollWidth - innerWidth, 0),
        tryText: !!m.querySelector(".demo-try"),
        reset: !!m.querySelector(".demo-reset") || SIMS[i].id === "zbirka",
        unlabeled: ctrls.filter((c) => !(c.getAttribute("aria-label") || c.textContent.trim() || c.labels?.length || c.title)).length,
        dragNoKey: m.querySelectorAll(".drag:not([tabindex])").length,
      };
    };
  });
  const n = await p.evaluate(() => SIMS.length);
  const bad = [];
  for (let i = 0; i < n; i++) {
    const sim = await p.evaluate((i) => SIMS[i], i);
    cur = `${sim.id} (${sim.topic})`;
    const r = await p.evaluate((i) => mountOne(i), i);
    const issues = [];
    if (r.overflow) issues.push(`širša od zaslona za ${r.overflow} px`);
    if (!r.tryText) issues.push("brez »Poskusi«");
    if (!r.reset) issues.push("brez »Ponastavi«");
    if (r.unlabeled) issues.push(`${r.unlabeled} kontrol brez oznake`);
    if (r.dragNoKey) issues.push(`${r.dragNoKey} vlečnih elementov brez tipkovnice`);
    if (issues.length) bad.push(`${cur}: ${issues.join("; ")}`);
  }
  await b.close();
  srv.kill();
  bad.forEach((x) => console.log(x));
  errs.forEach((x) => console.log("NAPAKA " + x));
  console.log(`Simulacij: ${n}, s pomanjkljivostmi: ${bad.length}, napak v konzoli: ${errs.length}`);
  process.exit(bad.length || errs.length ? 1 : 0);
})();
