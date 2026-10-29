// Dimni test celotne aplikacije v pravem brskalniku: ali vsak del deluje od začetka do konca.
// Zažene svoj strežnik (preizkusni način, začasna baza, brez novic), nato v Chromiumu na računalniški
// (1280×800) in telefonski širini (360×740, dotik) prehodi uvod treh profilov (OŠ, SŠ, fakulteta),
// vse zavihke, nalogo (narobe, nato prav, lestev namigov), lekcijo s simulacijo, klepet, igro,
// tekmovalni trening, nastavitve, meni profila, urnik in izpite; z računi še registracijo,
// prijavo, Račun in stran za starše. Beleži napake strani in konzole, neuspele zahteve in odgovore
// ≥ 400, vodoravno drsenje in vidne neprevedene ključe (npr. »nav.path«).
// Zagon: node scripts/preveri-aplikacijo.cjs [--posnetki <mapa>] [--brez-racunov] [--samo racunalnik|telefon]
// Izhod 1, če je kaj narobe. Potrebuje Playwright s Chromiumom (require("playwright")).
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const net = require("node:net");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const args = process.argv.slice(2);
const arg = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
};
const SHOTS = arg("--posnetki") ? path.resolve(arg("--posnetki")) : null;
const ONLY = arg("--samo");
const ACCOUNTS = !args.includes("--brez-racunov");
const T0 = Date.now();

const problems = []; // { where, what }
const notes = [];
let shotN = 0;
const problem = (where, what) => {
  const key = `${where}|${what}`;
  if (!problems.some((p) => `${p.where}|${p.what}` === key)) problems.push({ where, what });
};

// ---------- strežnik ----------
const freePort = () =>
  new Promise((resolve, reject) => {
    const s = net.createServer();
    s.listen(0, () => {
      const { port } = s.address();
      s.close(() => resolve(port));
    });
    s.on("error", reject);
  });

const servers = [];
async function startServer(extraEnv = {}) {
  const port = await freePort();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "evklid-preveri-"));
  const env = {
    ...process.env,
    PORT: String(port),
    EVKLID_MOCK: "1",
    EVKLID_MOCK_DELAY_MS: "0",
    EVKLID_NEWS: "0",
    EVKLID_DB: path.join(dir, "t.db"),
    EVKLID_PASSWORD: "",
    ANTHROPIC_API_KEY: "",
    RESEND_API_KEY: "",
    STRIPE_SECRET_KEY: "",
    ...extraEnv,
  };
  const log = [];
  const srv = spawn(process.execPath, ["--disable-warning=ExperimentalWarning", "server/index.js"], { cwd: ROOT, env, stdio: ["ignore", "pipe", "pipe"] });
  srv.stdout.on("data", (d) => log.push(String(d)));
  srv.stderr.on("data", (d) => log.push(String(d)));
  const base = `http://localhost:${port}`;
  servers.push({ srv, dir });
  for (let i = 0; i < 100; i++) {
    try {
      if ((await fetch(base + "/healthz")).ok) return { base, db: env.EVKLID_DB, log };
    } catch {}
    await new Promise((r) => setTimeout(r, 100));
  }
  throw new Error(`strežnik se ni zagnal:\n${log.join("")}`);
}
function stopServers() {
  for (const { srv, dir } of servers) {
    srv.kill();
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

// ---------- pravilni in napačni odgovori iz baze (koda za preverjanje je ista kot na strežniku) ----------
let checkAnswer;
let sqlite;
function taskAnswer(dbPath, taskId) {
  const db = new sqlite.DatabaseSync(dbPath, { readOnly: true });
  try {
    const row = db.prepare("SELECT payload FROM tasks WHERE id = ?").get(Number(taskId));
    return row ? JSON.parse(row.payload).answer : null;
  } finally {
    db.close();
  }
}
function answersFor(a) {
  const round = (v, d) => (d == null ? String(v) : (Math.round(v * 10 ** d + 1e-9) / 10 ** d).toFixed(d));
  let right = [];
  let wrong = [];
  if (a.type === "number") {
    const u = a.unit ? ` ${a.unit}` : "";
    const s = round(a.value, a.decimals);
    right = [s.replace(".", ",") + u, s + u, String(a.value).replace(".", ",") + u];
    wrong = [round(a.value * 3 + 17, a.decimals).replace(".", ",") + u, `${Math.round(a.value) + 101}${u}`];
  } else if (a.type === "fraction") {
    right = [`${a.num}/${a.den}`];
    wrong = [`${a.num + 1}/${a.den + 3}`, `${a.num * 5 + 2}/${a.den}`];
  } else if (a.type === "choice") {
    right = [String(a.index)];
    wrong = [String(a.index === 0 ? 1 : 0)];
  } else if (a.type === "coefficients") {
    right = [a.values.join(", ")];
    wrong = [a.values.map((v, i) => v + i + 1).join(", "), a.values.map((v, i) => (i ? v : v + 1)).join(", ")];
  }
  return {
    right: right.find((x) => checkAnswer(a, x).kind === "correct"),
    wrong: wrong.find((x) => checkAnswer(a, x).kind === "wrong"),
  };
}

// ---------- brskalnik ----------
let KEYS = [];
async function newPage(browser, phone, label, base) {
  const ctx = await browser.newContext({
    viewport: phone ? { width: 360, height: 740 } : { width: 1280, height: 800 },
    hasTouch: phone,
    isMobile: phone,
    deviceScaleFactor: 1,
    locale: "sl-SI",
    timezoneId: "Europe/Ljubljana",
    reducedMotion: "reduce",
    serviceWorkers: "block",
  });
  const p = await ctx.newPage();
  p.label = label;
  p.where = "zagon";
  p.base = base;
  p.allow = []; // pričakovani odgovori ≥ 400 (npr. napačno geslo)
  p.on("pageerror", (e) => problem(`${label} ${p.where}`, `napaka strani: ${String(e.message).split("\n")[0].slice(0, 160)}`));
  p.on("console", (m) => {
    if (m.type() !== "error") return;
    const txt = m.text();
    if (/Failed to load resource/.test(txt)) return; // zabeleži že odgovor ≥ 400
    problem(`${label} ${p.where}`, `konzola: ${txt.slice(0, 160)}`);
  });
  p.on("requestfailed", (r) => {
    const why = r.failure()?.errorText || "";
    if (/ERR_ABORTED/.test(why)) return; // prekinjeno ob menjavi strani ali pretoku
    problem(`${label} ${p.where}`, `zahteva ni uspela: ${r.method()} ${r.url().replace(base, "")} (${why})`);
  });
  p.on("response", (r) => {
    if (r.status() < 400) return;
    const u = r.url().replace(base, "");
    if (p.allow.some((re) => re.test(`${r.status()} ${u}`))) return;
    problem(`${label} ${p.where}`, `HTTP ${r.status()} ${r.request().method()} ${u}`);
  });
  p.on("dialog", (d) => d.accept().catch(() => {}));
  p.on("crash", () => problem(`${label} ${p.where}`, "stran se je sesula (crash)"));
  // Tipka Nazaj ali zgodovina ne sme odpeljati iz aplikacije (npr. na about:blank).
  p.on("framenavigated", (f) => {
    if (f === p.mainFrame() && !f.url().startsWith(base)) problem(`${label} ${p.where}`, `stran je zapustila aplikacijo: ${f.url()}`);
  });
  await p.addInitScript(PAGE_HOOKS);
  return p;
}

// V strani: id zadnje prikazane naloge (za pravilen/napačen odgovor iz baze) in pospešena ura iger
// (window.__fastGames: vsak okvir izriše 10 korakov po 50 ms, da se igra konča v nekaj sekundah).
function PAGE_HOOKS() {
  // Neobravnavane zavrnitve aplikacija pokaže le kot obvestilo; tukaj jih zabeležimo kot napako.
  addEventListener("unhandledrejection", (e) => console.error(`neobravnavana zavrnitev: ${e.reason?.message || e.reason}`));
  const f = window.fetch;
  window.fetch = async (...a) => {
    const r = await f(...a);
    try {
      if (/\/(practice\/next|pretest|competition-training|contest|daily|review|unit-practice|placement|test-prep|answer|skip)$/.test(String(a[0])) && r.ok) {
        r.clone().json().then((j) => {
          const t = j.task || j.next?.task;
          if (t?.id) window.__stmTask = t.id;
        }).catch(() => {});
      }
    } catch {}
    return r;
  };
  const raf = window.requestAnimationFrame.bind(window);
  const caf = window.cancelAnimationFrame.bind(window);
  const pending = new Map();
  let seq = 0;
  let fake = 0;
  let scheduled = false;
  const flush = () => {
    scheduled = false;
    fake = Math.max(fake, performance.now());
    for (let i = 0; i < 10 && pending.size; i++) {
      const cbs = [...pending.values()];
      pending.clear();
      fake += 50;
      for (const cb of cbs) cb(fake);
    }
    if (pending.size && !scheduled) (scheduled = true), raf(flush);
  };
  window.requestAnimationFrame = (cb) => {
    if (!window.__fastGames) return raf(cb);
    const id = -++seq;
    pending.set(id, cb);
    if (!scheduled) (scheduled = true), raf(flush);
    return id;
  };
  window.cancelAnimationFrame = (id) => (id < 0 ? pending.delete(id) : caf(id));
}

// Stanje zaslona: vodoravno drsenje in vidni neprevedeni ključi; posnetek.
async function screen(p, name) {
  p.where = name;
  await settle(p);
  const r = await p
    .evaluate((keys) => {
      const set = new Set(keys);
      const vis = (el) => !!(el.offsetParent || el.getClientRects().length) && getComputedStyle(el).visibility !== "hidden";
      const texts = [document.body.innerText];
      for (const el of document.querySelectorAll("[placeholder],[aria-label],[title]")) {
        if (!vis(el)) continue;
        for (const a of ["placeholder", "aria-label", "title"]) if (el.getAttribute(a)) texts.push(el.getAttribute(a));
      }
      const raw = new Set();
      for (const t of texts) for (const m of t.matchAll(/\b[a-z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*\b/g)) if (set.has(m[0])) raw.add(m[0]);
      const over = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) - innerWidth;
      return { raw: [...raw], over };
    }, KEYS)
    .catch((e) => ({ raw: [], over: 0, err: e.message }));
  if (r.err) problem(`${p.label} ${name}`, `ni mogoče pregledati: ${r.err.slice(0, 120)}`);
  if (r.over > 1) problem(`${p.label} ${name}`, `vodoravno drsenje za ${r.over} px`);
  if (r.raw.length) problem(`${p.label} ${name}`, `neprevedeni ključi: ${r.raw.join(", ")}`);
  if (SHOTS) {
    const file = path.join(SHOTS, `${String(++shotN).padStart(3, "0")}-${p.label}-${name}.png`.replace(/[^\w.\-]+/g, "_"));
    await p.screenshot({ path: file }).catch(() => {});
  }
}
// Počaka, da se zahteve umirijo (brez fiksnih dolgih čakanj).
async function settle(p, ms = 150) {
  await p.waitForLoadState("networkidle", { timeout: 3000 }).catch(() => {});
  await p.waitForTimeout(ms);
}

// Korak: napaka v enem koraku ne ustavi pregleda, zabeleži se z imenom koraka.
async function step(p, name, fn) {
  p.where = name;
  try {
    await fn();
  } catch (e) {
    const at = await p
      .evaluate(() => `${[...document.querySelectorAll("main.view")].find((v) => !v.hidden)?.id || "brez pogleda"} ${document.body.className}`.trim())
      .catch(() => "?");
    problem(`${p.label} ${name}`, `korak ni uspel: ${String(e.message).split("\n")[0].slice(0, 200)} [${at}]`);
    if (SHOTS) await p.screenshot({ path: path.join(SHOTS, `NAPAKA-${p.label}-${name}.png`.replace(/[^\w.\-]+/g, "_")) }).catch(() => {});
    if (SHOTS) fs.writeFileSync(path.join(SHOTS, `NAPAKA-${p.label}-${name}.html`.replace(/[^\w.\-]+/g, "_")), await p.content().catch(() => ""));
  }
}
const visible = (p, sel) => p.locator(sel).filter({ visible: true }).first();
async function click(p, sel, opts = {}) {
  await visible(p, sel).click({ timeout: opts.timeout ?? 5000 });
  await settle(p, opts.wait ?? 100);
}
async function expectVisible(p, sel, what, timeout = 5000) {
  await visible(p, sel).waitFor({ state: "visible", timeout }).catch(() => {
    throw new Error(`ni vidno: ${what || sel}`);
  });
}
async function tab(p, view) {
  // Računalnik: zgornja vrstica; telefon: spodnja vrstica ali »Jaz« → seznam.
  const top = p.locator(`.topbar .tab[data-view="${view}"]`);
  if (await top.isVisible()) return click(p, `.topbar .tab[data-view="${view}"]`);
  const bottom = p.locator(`#tabbar .tab[data-view="${view}"]`);
  if (await bottom.isVisible()) return click(p, `#tabbar .tab[data-view="${view}"]`);
  await click(p, '#tabbar .tab[data-view="me"]');
  await click(p, `#view-me [data-go="${view}"]`);
}
const currentView = (p) => p.evaluate(() => [...document.querySelectorAll("main.view")].find((v) => !v.hidden)?.id || "");

// ---------- koraki ----------

// Vodič ob prvi uporabi: vsak profil ga dobi enkrat (settings.tour_version na strežniku).
// how: "vse" (vsi koraki z Naprej, enkrat Nazaj), "esc" ali "preskoci". Po zaprtju mora biti v profilu shranjen.
async function closeTour(p, how, timeout = 5000) {
  await expectVisible(p, "#tour", "vodič ob prvi uporabi", timeout);
  if (how === "vse") {
    for (let i = 0; i < 40 && (await p.locator("#tour").isVisible()); i++) {
      if (i === 0) await screen(p, "uvodni-ogled");
      if (i === 2) {
        const at = await p.locator("#tour .tour-step").innerText();
        await click(p, '#tour [data-tour="back"]');
        if ((await p.locator("#tour .tour-step").innerText()) === at) throw new Error("»Nazaj« v vodiču ne gre korak nazaj");
      }
      await click(p, '#tour [data-tour="next"]');
    }
  } else if (how === "esc") await p.keyboard.press("Escape");
  else await click(p, '#tour [data-tour="skip"]');
  await p.locator("#tour").waitFor({ state: "hidden", timeout: 3000 }).catch(() => {
    throw new Error(`vodič se ni zaprl (${how})`);
  });
  await settle(p, 200);
  const tv = await p.evaluate(async () => {
    const r = await fetch(`/api/students/${localStorage.getItem("studentId")}`);
    return r.ok ? (await r.json()).settings?.tour_version || 0 : -1;
  });
  if (!(tv >= 1)) throw new Error(`vodič ni shranjen v profilu (tour_version ${tv})`);
}

// tour: kako zapreti vodič; stran: »drug pogled« = takoj po vprašalniku odpre Učbenik, vodič pa
// mora počakati na vrnitev na Učno pot (ne sme se odpreti čez drug pogled).
async function onboard(p, name, levelSteps, { interests = false, tour = "preskoci", away = false } = {}) {
  await expectVisible(p, "#onboard-form", "obrazec za nov profil", 10000);
  await p.fill('#onboard-form input[name="name"]', name);
  for (const val of levelSteps) await click(p, `#onboard-form .lp-opt[data-val="${val}"]`);
  await screen(p, `uvod-${name}`);
  await click(p, '#onboard-form button[type="submit"]', { wait: 300 });
  // Vprašalnik kotička zanimanj (ob prvem zagonu profila).
  await expectVisible(p, ".iq-wrap .iq", "vprašalnik zanimanj", 8000);
  await screen(p, `zanimanja-${name}`);
  if (interests) {
    await click(p, '.iq-wrap [data-int="space"]');
    await click(p, '.iq-wrap [data-int="math"]');
    await click(p, ".iq-wrap [data-iq=next]");
    await click(p, ".iq-wrap [data-level]");
    await click(p, ".iq-wrap [data-iq=next]");
    await p.fill(".iq-wrap .iq-custom input", "šah");
    await click(p, ".iq-wrap [data-iq=save]", { wait: 300 });
  } else if (away)
    await p.evaluate(() => {
      document.querySelector(".iq-wrap [data-iq=skip]").click();
      document.querySelector('.topbar .tab[data-view="textbook"]').click();
    });
  else await click(p, ".iq-wrap [data-iq=skip]", { wait: 300 });
  await p.locator(".iq-wrap").waitFor({ state: "detached", timeout: 5000 }).catch(() => {
    throw new Error("vprašalnik zanimanj se ni zaprl");
  });
  if (away) {
    await p.waitForTimeout(1200);
    if ((await currentView(p)) !== "view-textbook") throw new Error(`po vprašalniku je odprt ${await currentView(p)} namesto Učbenika`);
    if (await p.locator("#tour").isVisible()) throw new Error("vodič se je odprl čez drug pogled");
    await tab(p, "path");
  }
  await closeTour(p, tour);
  await expectVisible(p, "#view-path #xp-card .hero", "učna pot");
  await screen(p, `pot-${name}`);
}

// Odgovor na nalogo prek vmesnika: izbira ali vpis.
async function answerTask(p, db, value) {
  const choice = p.locator("#practice .task .choices .choice");
  if (await choice.count()) await choice.nth(Number(value)).click();
  else {
    await p.fill("#answer", value);
    await p.locator("#practice .answer-row button.primary").click();
  }
  await p.locator("#feedback .fb:not(.info), #feedback .fb.info:not(:has-text('Preverjam'))").first().waitFor({ timeout: 5000 });
  await settle(p);
}
async function practiceTopic(p, db) {
  // Naslednja tema na učni poti → stran teme (pri novi temi test predznanja).
  await click(p, "#xp-card .next-row[data-open]", { wait: 300 });
  await expectVisible(p, "#view-topic .topic-head, #view-topic #practice .task", "stran teme");
  await screen(p, "tema");
  // Test predznanja: »Ne vem« do konca, nato vaja.
  for (let i = 0; i < 5 && (await p.locator("#p-skip").isVisible()); i++) await click(p, "#p-skip", { wait: 250 });
  if (await p.locator(".pretest-result").isVisible()) {
    await screen(p, "test-predznanja");
    await click(p, "#pt-practice", { wait: 300 });
  } else await click(p, "#t-practice", { wait: 300 });
  // Rešen zgled, nato prva naloga.
  if (await p.locator("#ex-next").isVisible()) {
    await screen(p, "zgled");
    await click(p, "#ex-next", { wait: 300 });
  }
  await expectVisible(p, "#practice .task .task-text", "naloga");
  const taskId = await p.evaluate(() => window.__stmTask);
  if (!taskId) throw new Error("ne najdem id naloge");
  // Lestev namigov do konca.
  let hints = 0;
  for (; hints < 5 && (await p.locator("#hint-btn").isVisible()); hints++) {
    await click(p, "#hint-btn", { wait: 200 });
  }
  const steps = await p.locator("#hint-box .fb.hint").count();
  if (await p.locator("#hint-box").count()) {
    if (!steps) throw new Error("lestev namigov ni pokazala nobenega koraka");
    if (steps !== hints) throw new Error(`lestev namigov: ${hints} klikov, ${steps} korakov`);
  }
  await screen(p, "naloga-namigi");
  const ans = taskAnswer(db, taskId);
  const { right, wrong } = answersFor(ans);
  if (!right || !wrong) throw new Error(`ne znam sestaviti odgovora (${ans?.type})`);
  await answerTask(p, db, wrong);
  if (!(await p.locator("#feedback .fb.bad").isVisible())) throw new Error("napačen odgovor ni označen kot napačen");
  await screen(p, "naloga-narobe");
  if (await p.locator("#fb-retry").isVisible()) {
    await click(p, "#fb-retry");
    await answerTask(p, db, right);
    if (!(await p.locator("#feedback .fb.ok").isVisible())) throw new Error("pravilen odgovor ni označen kot pravilen");
    await screen(p, "naloga-prav");
  } else notes.push("naloga je po prvem napačnem odgovoru pokazala rešitev (izbirna)");
  // Naslednja naloga se odpre.
  await click(p, "#fb-next", { wait: 300 });
  await expectVisible(p, "#practice .task", "naslednja naloga");
  // Kalkulator iz naloge (okno čez zaslon) in nazaj.
  await click(p, "#practice .task-calc", { wait: 300 });
  await expectVisible(p, "#graph-overlay", "kalkulator iz naloge");
  await screen(p, "naloga-kalkulator");
  await click(p, "#graph-close");
  if (await p.locator("#graph-overlay").isVisible()) throw new Error("kalkulator se ni zaprl");
  // Nazaj na učno pot.
  await click(p, "#back-to-path");
  if ((await currentView(p)) !== "view-path") throw new Error("»Učna pot« z naloge ne vodi na učno pot");
}

async function textbook(p, label) {
  await tab(p, "textbook");
  await expectVisible(p, "#view-textbook .tb-head", "učbenik");
  await screen(p, `ucbenik-${label}`);
  // Lekcija s poskusom (simulacijo), sicer katera koli napisana lekcija.
  let lesson = p.locator("#tb-body .tb-topic:has(.tb-badge.demo):has(.tb-badge:text('lekcija'))").first();
  if (!(await lesson.count())) lesson = p.locator("#tb-body .tb-topic:not(.pending)").first();
  if (!(await lesson.count())) throw new Error("v učbeniku ni nobene lekcije");
  await lesson.scrollIntoViewIfNeeded();
  await lesson.click();
  await settle(p, 400);
  await expectVisible(p, "#view-textbook .tb-title", "lekcija");
  await screen(p, `lekcija-${label}`);
  // Lekcija po korakih (privzeto): Naprej do konca, enkrat Nazaj; »Preveri se« in »Razloži drugače«
  // preveri v koraku, kjer sta (skriti koraki so hidden).
  const shown = (sel) => p.locator(sel).filter({ visible: true }).first();
  const steps = await p.locator("#tb-step-next").count();
  let checked = false;
  let alt = false;
  let sim = false;
  for (let i = 0; i < 60; i++) {
    // Simulacija: na računalniku ob strani, na telefonu v enem od korakov.
    if (!sim && (await shown(".tb-demo").count())) {
      const demo = shown(".tb-demo");
      await demo.scrollIntoViewIfNeeded();
      await p.waitForTimeout(300);
      if (!(await demo.locator(".tb-demo-mount").first().evaluate((m) => m.children.length))) throw new Error("simulacija se ni naložila");
      // Prvi drsnik ali gumb simulacije.
      const ctl = demo.locator("input[type=range], button").first();
      if (await ctl.count()) {
        if ((await ctl.getAttribute("type")) === "range") await ctl.fill(String(await ctl.evaluate((x) => x.max)));
        else await ctl.click();
      }
      await screen(p, `simulacija-${label}`);
      sim = true;
    }
    if (!checked && (await shown(".tb-check .tb-opt").count())) {
      const opt = shown(".tb-check .tb-opt");
      await opt.scrollIntoViewIfNeeded();
      await opt.click();
      if (!(await shown(".tb-check .tb-why").count())) throw new Error("»Preveri se« ne pokaže odziva");
      checked = true;
    }
    if (!alt && (await shown("#tb-alt-btn").count())) {
      await shown("#tb-alt-btn").scrollIntoViewIfNeeded();
      await click(p, "#tb-alt-btn");
      if (!(await p.locator("#tb-alt-body .explanation").isVisible())) throw new Error("»Razloži drugače« ne pokaže razlage");
      alt = true;
    }
    if (!steps || !(await p.locator("#tb-step-next").isVisible())) break;
    if (i === 1) {
      await click(p, "#tb-step-prev", { wait: 50 });
      if ((await p.locator(".tb-step-count").innerText()).trim().split(" ")[0] !== "1") throw new Error("»Nazaj« v lekciji po korakih ne gre na 1. korak");
      await click(p, "#tb-step-next", { wait: 50 });
    }
    await click(p, "#tb-step-next", { wait: 50 });
    if (i === 0) await screen(p, `lekcija-korak-${label}`);
  }
  if (steps && (await p.locator("#tb-step-next").isVisible())) throw new Error("lekcija po korakih ne pride do konca");
  if ((await p.locator(".tb-demo").count()) && !sim) throw new Error("simulacija lekcije ni bila vidna v nobenem koraku");
  // Nazaj na seznam in iskanje.
  await p.locator("#tb-back").scrollIntoViewIfNeeded();
  await click(p, "#tb-back");
  await p.fill("#tb-q", "ulom");
  await settle(p, 500);
  await screen(p, `ucbenik-iskanje-${label}`);
  await p.fill("#tb-q", "");
  await settle(p, 300);
}

async function chat(p, label) {
  await tab(p, "chat");
  await expectVisible(p, "#view-chat #composer", "inštruktor");
  if (await p.locator("#new-chat").isVisible()) await click(p, "#new-chat");
  await p.fill("#input", "Koliko je 3/4 + 1/8?");
  await click(p, "#send", { wait: 300 });
  await p.locator("#messages .msg.assistant, #messages [class*=assistant]").last().waitFor({ timeout: 8000 }).catch(() => {
    throw new Error("ni odgovora inštruktorja");
  });
  await p.waitForFunction(() => !document.querySelector("#send")?.disabled, null, { timeout: 8000 }).catch(() => {});
  await settle(p, 300);
  await screen(p, `klepet-${label}`);
  const n = await p.locator("#conversation-list li").count();
  if (!n) throw new Error("pogovor ni na seznamu");
}

async function calculator(p, label) {
  await tab(p, "graph");
  await expectVisible(p, "#view-graph #graph-slot > *", "kalkulator");
  for (const mode of ["sci", "graph", "tools", "pse", "formulas"]) {
    await click(p, `#view-graph [data-calc-mode="${mode}"]`, { wait: 400 });
    const empty = await p.locator("#graph-slot").evaluate((s) => !s.innerText.trim() && !s.querySelector("canvas,svg"));
    if (empty) throw new Error(`kalkulator »${mode}« je prazen`);
    await screen(p, `kalkulator-${mode}-${label}`);
  }
  // Znanstveni: izračun.
  await click(p, '#view-graph [data-calc-mode="sci"]', { wait: 300 });
}

async function competition(p, label) {
  await tab(p, "competition");
  await expectVisible(p, "#competition-content [data-comp-train]", "tekmovanja ali izpiti");
  await screen(p, `tekmovanja-${label}`);
  await click(p, "#competition-content [data-comp-train]", { wait: 400 });
  await expectVisible(p, "#practice .task", "naloga tekmovalnega treninga");
  // Trening do konca: »Ne vem« ni, zato odgovorimo pravilno ali narobe, dokler ni konec.
  for (let i = 0; i < 12; i++) {
    if (await p.locator("#practice .result").isVisible()) break;
    const id = await p.evaluate(() => window.__stmTask);
    const { right, wrong } = answersFor(taskAnswer(p.db, id));
    await answerTask(p, p.db, i % 2 ? wrong || right : right || wrong);
    if (await p.locator("#fb-retry").isVisible()) {
      await click(p, "#fb-retry");
      await answerTask(p, p.db, right);
    }
    if (await p.locator("#practice .result").isVisible()) break;
    await click(p, "#fb-next", { wait: 250 });
  }
  if (!(await p.locator("#practice .result").isVisible())) throw new Error("trening se ni končal");
  await screen(p, `trening-konec-${label}`);
  await click(p, "#fb-back");
  if ((await currentView(p)) !== "view-competition") throw new Error("gumb na koncu treninga ne vodi na tekmovanja");
}

async function contest(p, label) {
  // Poskusno tekmovanje: začni, preskoči eno nalogo, končaj, poglej rezultat.
  await click(p, "#competition-content [data-comp-contest]", { wait: 400 });
  await expectVisible(p, "#practice .task", "naloga poskusnega tekmovanja");
  await screen(p, `poskusni-${label}`);
  await click(p, "#c-skip", { wait: 300 });
  await click(p, "#c-finish", { wait: 400 });
  await expectVisible(p, "#practice .result", "rezultat poskusnega tekmovanja");
  await screen(p, `poskusni-rezultat-${label}`);
  await click(p, "#fb-back");
}

async function games(p, label) {
  await tab(p, "games");
  await expectVisible(p, "#games-content .gm-portal", "igre");
  await screen(p, `igre-${label}`);
  const tile = p.locator("#games-content .gm-tile:not(.gm-locked)").first();
  if (!(await tile.count())) throw new Error("ni odklenjene igre");
  await tile.click();
  await expectVisible(p, ".gm-play [data-act=play]", "začetek igre");
  await screen(p, `igra-${label}`);
  await p.evaluate(() => (window.__fastGames = true));
  await click(p, ".gm-play [data-act=play]", { wait: 200 });
  // Do konca igre: brez odgovorov se čas za nalogo izteče in igra porabi vsa življenja.
  const over = () => p.locator(".gm-end").isVisible();
  for (let i = 0; i < 60 && !(await over()); i++) await p.waitForTimeout(250);
  await p.evaluate(() => (window.__fastGames = false));
  if (!(await over())) throw new Error("igra se ni končala (brez odgovorov bi morala izgubiti vsa življenja)");
  await settle(p, 400);
  await screen(p, `igra-konec-${label}`);
  await click(p, ".gm-end [data-act=exit]");
  await expectVisible(p, "#games-content .gm-portal", "igre po koncu igre");
}

async function views(p, label) {
  for (const v of ["corner", "progress", "settings", "league", "schedule"]) {
    await step(p, `${v}-${label}`, async () => {
      await tab(p, v);
      await settle(p, 300);
      if ((await currentView(p)) !== `view-${v}`) throw new Error(`zavihek ${v} se ni odprl`);
      await screen(p, `${v}-${label}`);
    });
  }
}

async function settingsChange(p) {
  await tab(p, "settings");
  const sel = p.locator('#settings-form select[name="data_mode"]');
  await sel.selectOption("lite");
  await click(p, '#settings-form button[type="submit"]', { wait: 300 });
  await expectVisible(p, "#settings-saved", "»Shranjeno«");
  const saved = await p.evaluate(async () => {
    const id = localStorage.getItem("studentId");
    return (await (await fetch(`/api/students/${id}`)).json()).settings.data_mode;
  });
  if (saved !== "lite") throw new Error(`nastavitev ni shranjena (${saved})`);
  await sel.selectOption("auto");
  await click(p, '#settings-form button[type="submit"]', { wait: 300 });
}

async function schedule(p) {
  await tab(p, "schedule");
  await click(p, '#view-schedule [data-act="lesson"]');
  await p.fill('#sch-lesson-form input[name="name"]', "Matematika");
  await p.selectOption('#sch-lesson-form select[name="period"]', "2");
  await click(p, '#sch-lesson-form button.primary', { wait: 300 });
  await expectVisible(p, "#view-schedule .sch-lesson", "ura v urniku");
  await click(p, '#view-schedule [data-act="event"]');
  const d = new Date(Date.now() + 10 * 864e5).toISOString().slice(0, 10);
  await p.fill('#sch-event-form input[name="subject"]', "Matematika");
  await p.fill('#sch-event-form input[name="date"]', d);
  await click(p, '#sch-event-form button.primary', { wait: 400 });
  // Nov test s predmetom aplikacije odpre izbiro sklopov: izberemo prvega in shranimo.
  if (await p.locator('#sch-event-form input[name="unit"]').count()) {
    await p.locator('#sch-event-form input[name="unit"]').first().check();
    await click(p, '#sch-event-form button.primary', { wait: 400 });
  }
  await expectVisible(p, '#view-schedule [data-event]', "test v urniku");
  await screen(p, "urnik-izpolnjen");
}

async function profileMenu(p) {
  await click(p, "#profile-btn");
  await expectVisible(p, "#profile-pop .pm-item", "meni profila");
  await screen(p, "meni-profila");
  const others = p.locator("#profile-pop .pm-student[aria-checked=false]");
  if (await others.count()) {
    const name = (await others.first().locator("span[dir=auto]").innerText()).trim();
    await others.first().click();
    await settle(p, 500);
    const now = (await p.locator("#profile-btn .pm-name").innerText()).trim();
    if (now !== name) throw new Error(`menjava profila: pričakoval »${name}«, vidim »${now}«`);
  } else await p.keyboard.press("Escape");
}

async function league(p) {
  await tab(p, "league");
  await expectVisible(p, "#nick-change", "liga");
  // Vzdevek: izbira iz predlogov.
  await click(p, "#nick-change", { wait: 300 });
  const nick = (await visible(p, "#nick-picker [data-nick]").innerText()).trim();
  await click(p, "#nick-picker [data-nick]", { wait: 400 });
  const now = (await p.locator("#league-content .nick b").innerText()).trim();
  if (now !== nick) throw new Error(`vzdevek se ni zamenjal (${now} namesto ${nick})`);
  // Skupina prijateljev: nastane, se pokaže s kodo, zapustimo jo.
  await p.fill("#friends-name", "Šahisti");
  await click(p, '#friends-form button[type="submit"]', { wait: 400 });
  await expectVisible(p, "#league-content .code-chip", "skupina prijateljev");
  await screen(p, "liga-skupina");
  await click(p, "#league-content [data-leave]", { wait: 400 });
  if (await p.locator("#league-content .code-chip").count()) throw new Error("skupine ni bilo mogoče zapustiti");
}

async function flashcards(p) {
  await tab(p, "path");
  await click(p, '#modebar [data-mode="cards"]', { wait: 400 });
  await expectVisible(p, "#fc-add", "kartice");
  await p.fill('#fc-add textarea[name="front"]', "Koliko je 7 · 8?");
  await p.fill('#fc-add textarea[name="back"]', "56");
  await click(p, "#fc-add button.primary", { wait: 400 });
  await expectVisible(p, ".fc-list li", "nova kartica na seznamu");
  await screen(p, "kartice");
  await click(p, ".fc-back");
}

async function feedback(p, label) {
  const t = p.locator('.topbar .tab[data-view="feedback"]');
  if (!(await t.isVisible()) && !(await p.locator('#tabbar').isVisible())) return;
  await tab(p, "feedback");
  await settle(p, 300);
  if ((await currentView(p)) !== "view-feedback") throw new Error("Mnenje se ni odprlo");
  await screen(p, `mnenje-${label}`);
}

// ---------- scenariji ----------

async function desktop(browser, app) {
  const p = await newPage(browser, false, "pc", app.base);
  p.db = app.db;
  await p.goto(app.base + "/");
  await step(p, "uvod-OS", () => onboard(p, "Ana", ["OSNOVNA_SOLA", "8. razred"], { interests: true, tour: "vse" }));
  await step(p, "naloga", () => practiceTopic(p, app.db));
  await step(p, "dnevni-trening", async () => {
    await click(p, "#xp-card [data-daily]", { wait: 400 });
    await expectVisible(p, "#practice .task, #practice .result, #practice p", "dnevni trening");
    await screen(p, "dnevni-trening");
    await click(p, "#back-to-path");
  });
  for (const m of ["review", "test", "cards"]) {
    await step(p, `nacin-${m}`, async () => {
      await tab(p, "path");
      await click(p, `#modebar [data-mode="${m}"]`, { wait: 400 });
      await screen(p, `nacin-${m}`);
      await tab(p, "path");
    });
  }
  await step(p, "ucbenik", () => textbook(p, "OS"));
  await step(p, "klepet", () => chat(p, "OS"));
  await step(p, "kalkulator", () => calculator(p, "OS"));
  await step(p, "tekmovanja", () => competition(p, "OS"));
  await step(p, "poskusno-tekmovanje", () => contest(p, "OS"));
  await step(p, "igre", () => games(p, "OS"));
  await views(p, "OS");
  await step(p, "mnenje", () => feedback(p, "OS"));
  await step(p, "nastavitve", () => settingsChange(p));
  await step(p, "lige", () => league(p));
  await step(p, "kartice", () => flashcards(p));
  await step(p, "urnik", () => schedule(p));
  // »Dodaj profil« se da preklicati: Nastavitve in zavihki se vrnejo.
  await step(p, "nov-profil-preklic", async () => {
    await click(p, "#profile-btn");
    await click(p, '#profile-pop [data-act="add"]', { wait: 300 });
    await p.fill('#new-student-form input[name="name"]', "Preklic");
    await click(p, '#new-student-form button[type="submit"]', { wait: 400 });
    await expectVisible(p, "#onboard-form [data-onb-cancel]", "»Prekliči« na uvodu profila");
    await click(p, "#onboard-form [data-onb-cancel]", { wait: 300 });
    if ((await currentView(p)) !== "view-settings") throw new Error("»Prekliči« ne vodi nazaj v Nastavitve");
    if (!(await p.locator(".topbar .tabs").isVisible())) throw new Error("po preklicu so zavihki še skriti");
  });
  // Drugi in tretji profil: »Dodaj profil« iz menija profila.
  for (const [name, levels, lbl, opts] of [
    ["Bor", ["SREDNJA_SOLA", "2. letnik", "VR"], "SS", { tour: "esc", away: true }],
    ["Cene", ["UNIVERZA", "UL", "UL-FMF", "UL-FMF-MAT", "1. letnik"], "UNI", { tour: "preskoci" }],
  ]) {
    await step(p, `nov-profil-${lbl}`, async () => {
      await click(p, "#profile-btn");
      await click(p, '#profile-pop [data-act="add"]', { wait: 300 });
      await p.fill('#new-student-form input[name="name"]', name);
      await click(p, '#new-student-form button[type="submit"]', { wait: 400 });
      await onboard(p, name, levels, opts);
    });
    await step(p, `pot-${lbl}`, async () => {
      await click(p, "#xp-card .next-row[data-open]", { wait: 300 });
      await expectVisible(p, "#view-topic .topic-head, #view-topic #practice .task", "stran teme");
      await screen(p, `tema-${lbl}`);
      await click(p, "#back-to-path");
    });
    await step(p, `ucbenik-${lbl}`, () => textbook(p, lbl));
    await step(p, `klepet-${lbl}`, () => chat(p, lbl));
    if (lbl === "SS") await step(p, `tekmovanja-${lbl}`, () => competition(p, lbl));
    if (lbl === "UNI")
      await step(p, "faks-brez-tekmovanj", async () => {
        if (await p.locator("#competition-tab").isVisible()) throw new Error("fakulteta ima zavihek Tekmovanja");
      });
    await views(p, lbl);
  }
  await step(p, "meni-profila", () => profileMenu(p));
  // Izpiti: profil v tujem šolskem sistemu (zavihek »Izpiti«). Osvežitev na podstrani (Urnik)
  // preveri tudi, da zgodovina ne odpelje iz aplikacije.
  await step(p, "izpiti", async () => {
    const id = await p.evaluate(() => localStorage.getItem("studentId"));
    await p.evaluate(async (id) => {
      await fetch(`/api/students/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ settings: { school_system: "IN-CBSE", educational_track: "SREDNJA_SOLA", curriculum_level: "Class 11", language: "sl" } }) });
    }, id);
    await p.reload();
    await settle(p, 500);
    await expectVisible(p, "#view-path #xp-card .hero", `učna pot po osvežitvi (${p.url()})`, 8000);
    await tab(p, "competition");
    await expectVisible(p, "#competition-content [data-comp-train]", "izpiti");
    await screen(p, "izpiti");
    await click(p, "#competition-content [data-comp-train]", { wait: 400 });
    await expectVisible(p, "#practice .task", "naloga izpitnega treninga");
    await screen(p, "izpit-trening");
    // Razlaga ob seriji nalog: »Celotna lekcija« odpre lekcijo te teme v učbeniku.
    await expectVisible(p, "#session-side #side-lesson", "razlaga ob nalogi");
    const topic = (await p.locator("#session-side h2").innerText()).trim();
    await click(p, "#side-lesson", { wait: 500 });
    await expectVisible(p, "#view-textbook .tb-title", "lekcija iz razlage ob nalogi");
    const title = (await p.locator("#view-textbook .tb-title").innerText()).trim();
    if (title !== topic) throw new Error(`»Celotna lekcija« odpre »${title}« namesto »${topic}«`);
  });
  await p.context().close();
}

async function phone(browser, app) {
  const p = await newPage(browser, true, "tel", app.base);
  p.db = app.db;
  await p.goto(app.base + "/");
  await settle(p, 500);
  // Profil iz baze se odpre brez uvoda (prvi profil).
  await step(p, "zagon", async () => {
    await expectVisible(p, "#view-path #xp-card .hero", "učna pot na telefonu", 8000);
    if (!(await p.locator("#tabbar").isVisible())) throw new Error("spodnja vrstica ni vidna");
    await screen(p, "pot");
  });
  // Vodič na telefonu: »Ponovi uvodni ogled« v Nastavitvah, vsi koraki (zavihki pod »Jaz« se preskočijo).
  await step(p, "tel-vodic", async () => {
    await click(p, '#tabbar .tab[data-view="me"]', { wait: 200 });
    await click(p, '#view-me [data-go="settings"]', { wait: 300 });
    await click(p, "#tour-again", { wait: 200 });
    await closeTour(p, "vse");
    if ((await currentView(p)) !== "view-path") throw new Error("po vodiču ni odprta Učna pot");
  });
  for (const v of ["textbook", "chat", "competition"]) {
    await step(p, `zavihek-${v}`, async () => {
      await click(p, `#tabbar .tab[data-view="${v}"]`, { wait: 300 });
      if ((await currentView(p)) !== `view-${v}`) throw new Error(`zavihek ${v} se ni odprl`);
      await screen(p, v);
    });
  }
  await step(p, "jaz", async () => {
    await click(p, '#tabbar .tab[data-view="me"]', { wait: 300 });
    await expectVisible(p, "#view-me .me-head", "Jaz");
    await screen(p, "jaz");
  });
  // Vsaka vrstica v »Jaz« in nazaj (gumb in tipka Nazaj).
  const rows = await p.locator("#view-me [data-go]").evaluateAll((bs) => bs.filter((b) => !b.hidden && b.offsetParent).map((b) => b.dataset.go));
  for (const v of rows) {
    await step(p, `jaz-${v}`, async () => {
      await click(p, '#tabbar .tab[data-view="me"]', { wait: 200 });
      await click(p, `#view-me [data-go="${v}"]`, { wait: 400 });
      if ((await currentView(p)) !== `view-${v}`) throw new Error(`»${v}« se ni odprl`);
      await screen(p, `jaz-${v}`);
      await p.goBack();
      await settle(p, 300);
      const now = await currentView(p);
      if (now !== "view-me" && v !== "graph") throw new Error(`tipka Nazaj z »${v}« vodi na ${now} namesto na »Jaz«`);
    });
  }
  await step(p, "tel-naloga", async () => {
    await click(p, '#tabbar .tab[data-view="path"]', { wait: 300 });
    await click(p, "#xp-card .next-row[data-open]", { wait: 400 });
    await expectVisible(p, "#view-topic", "tema");
    await screen(p, "tema");
    if (await p.locator("#t-practice").isVisible()) await click(p, "#t-practice", { wait: 400 });
    if (await p.locator("#ex-next").isVisible()) await click(p, "#ex-next", { wait: 400 });
    await screen(p, "naloga");
    await p.goBack();
    await settle(p, 300);
    if ((await currentView(p)) !== "view-path") throw new Error("tipka Nazaj s teme ne vodi na učno pot");
  });
  await step(p, "tel-klepet", () => chat(p, "tel"));
  await step(p, "tel-osvezitev", async () => {
    // Osvežitev na podstrani (potegni za osvežitev) in tipka Nazaj: aplikacija mora ostati odprta.
    await click(p, '#tabbar .tab[data-view="me"]', { wait: 200 });
    await click(p, '#view-me [data-go="settings"]', { wait: 300 });
    await p.reload();
    await settle(p, 600);
    await expectVisible(p, "#view-path #xp-card .hero", "učna pot po osvežitvi", 8000);
    await click(p, '#tabbar .tab[data-view="chat"]', { wait: 300 });
    await p.goBack();
    await settle(p, 400);
    if (!p.url().startsWith(p.base)) throw new Error(`tipka Nazaj po osvežitvi zapre aplikacijo (${p.url()})`);
    if ((await currentView(p)) !== "view-path") throw new Error(`tipka Nazaj po osvežitvi vodi na ${await currentView(p)}`);
  });
  await step(p, "tel-ucbenik", () => textbook(p, "tel"));
  await step(p, "tel-kalkulator", () => calculator(p, "tel"));
  await step(p, "tel-igre", () => games(p, "tel"));
  await p.context().close();
}

async function accounts(browser, app) {
  const p = await newPage(browser, false, "racun", app.base);
  p.db = app.db;
  await p.goto(app.base + "/");
  await settle(p, 500);
  const email = "stars@primer.si";
  await step(p, "prijava-prazna", async () => {
    await expectVisible(p, "#view-auth #auth-form", "prijava");
    await screen(p, "prijava");
    p.allow = [/^401 \/api\/auth\/login$/];
    await p.fill('#auth-form input[name="email"]', email);
    await p.fill('#auth-form input[name="password"]', "napacno-geslo");
    await click(p, '#auth-form button[type="submit"]', { wait: 300 });
    await expectVisible(p, "#auth-form .form-error", "napaka ob napačnem geslu");
    p.allow = [];
  });
  await step(p, "registracija", async () => {
    await click(p, '#view-auth [data-go="register"]');
    await p.fill('#auth-form input[name="name"]', "Mama");
    await p.fill('#auth-form input[name="email"]', email);
    await p.fill('#auth-form input[name="password"]', "geslo1234");
    await p.fill('#auth-form input[name="birth_date"]', "1985-04-02");
    await p.check('#auth-form input[name="accept_privacy"]');
    await screen(p, "registracija");
    await click(p, '#auth-form button[type="submit"]', { wait: 400 });
    await expectVisible(p, "#verify-done", "potrditev e-naslova");
    await screen(p, "potrditev");
    const href = await p.locator('#view-auth a[href*="/api/auth/verify"]').getAttribute("href");
    await p.goto(href);
    await settle(p, 500);
  });
  await step(p, "otrok", async () => {
    await expectVisible(p, "#child-form", "obrazec za otroka", 8000);
    await p.check('#child-form input[name="whose"][value="child"]');
    await p.fill('#child-form input[name="name"]', "Miha");
    for (const val of ["OSNOVNA_SOLA", "7. razred"]) await click(p, `#child-form .lp-opt[data-val="${val}"]`);
    await p.selectOption('#child-form select[name="birth_year"]', String(new Date().getFullYear() - 12));
    await p.fill('#child-form input[name="profile_password"]', "miha-1");
    await p.check('#child-form input[name="consent"]');
    await screen(p, "otrok");
    await click(p, '#child-form button[type="submit"]', { wait: 600 });
    await expectVisible(p, ".iq-wrap .iq", "vprašalnik zanimanj otroka", 8000);
    await click(p, ".iq-wrap [data-iq=skip]", { wait: 300 });
    await closeTour(p, "preskoci");
    await expectVisible(p, "#view-path #xp-card .hero", "učna pot otroka");
    await screen(p, "pot-otroka");
  });
  await step(p, "racun", async () => {
    await click(p, "#account-tab", { wait: 500 });
    await expectVisible(p, "#view-account #logout-btn", "Račun");
    await screen(p, "racun");
  });
  await step(p, "dodaj-profil", async () => {
    await click(p, "#profile-btn");
    await click(p, '#profile-pop [data-act="add"]', { wait: 400 });
    if ((await currentView(p)) !== "view-account") throw new Error("»Dodaj profil« ne odpre Računa");
  });
  await step(p, "klepet-racun", () => chat(p, "racun"));
  await step(p, "odjava-prijava", async () => {
    await click(p, "#account-tab", { wait: 400 });
    await click(p, "#logout-btn", { wait: 500 });
    await expectVisible(p, "#auth-form", "prijava po odjavi", 8000);
    await p.fill('#auth-form input[name="email"]', email);
    await p.fill('#auth-form input[name="password"]', "geslo1234");
    await click(p, '#auth-form button[type="submit"]', { wait: 600 });
    // Vsak profil ima svoje geslo: po odjavi je profil na tej napravi zaklenjen.
    await expectVisible(p, "#lock-overlay #lock-form", "geslo profila po prijavi", 8000);
    await screen(p, "geslo-profila");
    p.allow = [/^401 \/api\/students\/\d+\/unlock$/];
    await p.fill('#lock-form input[name="password"]', "narobe");
    await click(p, '#lock-form button[type="submit"]', { wait: 300 });
    await expectVisible(p, "#lock-form .form-error", "napaka ob napačnem geslu profila");
    p.allow = [];
    await p.fill('#lock-form input[name="password"]', "miha-1");
    await click(p, '#lock-form button[type="submit"]', { wait: 600 });
    await expectVisible(p, "#view-path #xp-card .hero", "učna pot po prijavi", 8000);
  });
  await step(p, "starsi", async () => {
    await p.goto(app.base + "/starsi.html");
    await settle(p, 400);
    await screen(p, "starsi");
  });
  await p.context().close();
}

(async () => {
  checkAnswer = (await import(pathToFileURL(path.join(ROOT, "server/practice/check.js")))).checkAnswer;
  process.removeAllListeners("warning");
  sqlite = require("node:sqlite");
  KEYS = Object.keys((await import(pathToFileURL(path.join(ROOT, "public/i18n/sl.js")))).default);
  if (SHOTS) fs.mkdirSync(SHOTS, { recursive: true });
  const browser = await chromium.launch();
  try {
    const app = await startServer();
    if (ONLY !== "telefon") await desktop(browser, app);
    if (ONLY !== "racunalnik") await phone(browser, app);
    if (ACCOUNTS && !ONLY) {
      const acc = await startServer({ EVKLID_ACCOUNTS: "1" });
      await accounts(browser, acc);
      const bad = acc.log.join("").split("\n").filter((l) => /napaka|Error|TypeError/.test(l) && !/\[evklid\] 4\d\d /.test(l));
      bad.forEach((l) => problem("strežnik (računi)", l.slice(0, 200)));
    }
    const bad = app.log.join("").split("\n").filter((l) => /napaka|Error|TypeError/.test(l) && !/\[evklid\] 4\d\d /.test(l));
    bad.forEach((l) => problem("strežnik", l.slice(0, 200)));
  } finally {
    await browser.close();
    stopServers();
  }
  for (const n of notes) console.log(`opomba: ${n}`);
  for (const { where, what } of problems) console.log(`NAPAKA ${where}: ${what}`);
  console.log(`Preverjeno v ${Math.round((Date.now() - T0) / 1000)} s${SHOTS ? `, posnetki: ${shotN} v ${SHOTS}` : ""}. Težav: ${problems.length}.`);
  process.exit(problems.length ? 1 : 0);
})().catch((e) => {
  console.error(e);
  stopServers();
  process.exit(1);
});
