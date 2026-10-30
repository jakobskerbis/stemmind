import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

// Napisana gradiva iz testnih primerov (učenci jih ne vidijo).
process.env.EVKLID_GRADIVA = new URL("./fixtures/gradiva", import.meta.url).pathname;
const { checkGradivo, gradivaFor, gradivoPage, videoFor, seconds } = await import("../server/gradiva-vsebina.js");
const { openDb } = await import("../server/db.js");
const { createApp } = await import("../server/app.js");

const OHM = "FIZ-OS-9/upor-in-ohmov-zakon";
const src = (v) => fs.readFileSync(new URL(`./fixtures/gradiva/${v}/${OHM}.md`, import.meta.url), "utf8");

test("fixtures pass the format check", () => {
  for (const v of ["poskus", "projekt", "video"]) assert.deepEqual(checkGradivo(v, src(v), OHM), [], v);
  assert.deepEqual(gradivaFor(OHM), ["poskus", "projekt", "video"]);
  assert.deepEqual(gradivaFor("FIZ-OS-9/delo"), []);
  assert.equal(seconds("1:30"), 90);
  assert.equal(seconds("90"), null);
});

test("format check catches missing safety, bad scenes and unknown simulations", () => {
  const noSafety = src("poskus").replace(/## Varnost[\s\S]*?## Potrebuješ/, "## Potrebuješ");
  assert.ok(checkGradivo("poskus", noSafety).some((e) => e.includes("Varnost")));
  assert.ok(checkGradivo("poskus", src("poskus").replace("avtor: AI", "avtor: Opus")).some((e) => e.includes("avtor")));
  const badVideo = src("video").replace("simulacija: ohm", "simulacija: ni-je").replace("## 0:30", "## 0:10").replace("trajanje: 1:00", "trajanje: 5:00");
  const errs = checkGradivo("video", badVideo);
  assert.ok(errs.some((e) => e.includes("ne obstaja")));
  assert.ok(errs.some((e) => e.includes("ni za prejšnjim")));
  assert.ok(errs.some((e) => e.includes("trajanje")));
  assert.ok(checkGradivo("projekt", src("projekt") + "\n## Dodatek\n\nx\n").some((e) => e.includes("nepričakovan")));
  assert.ok(checkGradivo("poskus", src("poskus").replace("$R$", "$\\frac{R$")).some((e) => e.includes("formula")));
});

test("experiment page puts safety first and the answer at the bottom", () => {
  const html = gradivoPage("poskus", OHM);
  assert.ok(html.indexOf("Varnost") < html.indexOf("Potrebuješ"));
  assert.ok(html.indexOf("Kaj se zgodi s tokom") < html.indexOf("upor se zmanjša"));
  assert.match(html, /class="answer"/);
  assert.match(gradivoPage("projekt", OHM), /Merila/);
  assert.equal(gradivoPage("video", OHM), null);
});

test("video script: scenes with captions, speech and simulation actions", () => {
  const v = videoFor(OHM);
  assert.equal(v.sim, "ohm");
  assert.equal(v.duration, 60);
  assert.deepEqual(v.scenes.map((s) => s.t), [0, 15, 30, 45]);
  assert.deepEqual(v.scenes[0].actions, [{ do: "set", target: "napetost U", value: "6" }, { do: "set", target: "upor R", value: "20" }]);
  assert.match(v.scenes[0].speak, /20 ohmov/);
  assert.match(v.scenes[3].html, /katex/);
});

test("HTTP: written materials are listed and served", async () => {
  const store = openDb(":memory:");
  const server = createApp(store).listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const s = store.createStudent("Ana");
    const list = await (await fetch(`${base}/api/students/${s.id}/gradiva?topic=${OHM}`)).json();
    assert.deepEqual(list.items.map((x) => x.vrsta), ["povzetek", "zvok", "delovni-list", "video", "poskus", "projekt"]);
    let r = await fetch(`${base}/api/students/${s.id}/gradiva/stran?vrsta=poskus&topic=${OHM}`);
    assert.equal(r.status, 200);
    assert.equal((await fetch(`${base}/api/students/${s.id}/gradiva/stran?vrsta=video&topic=${OHM}`)).status, 400);
    assert.equal((await fetch(`${base}/api/students/${s.id}/gradiva/stran?vrsta=poskus&topic=FIZ-OS-9/delo`)).status, 404);
    r = await fetch(`${base}/api/students/${s.id}/gradiva/video?topic=${OHM}`);
    assert.equal((await r.json()).scenes.length, 4);
    assert.equal((await fetch(`${base}/api/students/${s.id}/gradiva/video?topic=FIZ-OS-9/delo`)).status, 404);
  } finally {
    server.close();
  }
});
