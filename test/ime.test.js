// Aplikacija se je do 29. 10. 2026 imenovala STEMMind, zdaj Kompreno. Ta test:
// 1) prepreči, da bi se staro ime vrnilo (vidno ali v kodi),
// 2) preveri, da se stare nastavitve, baza, piškotek in oznake prenesejo brez izgube.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const OLD = /stem\s?minds?/gi;

// Staro ime sme ostati samo tu: ime repozitorija in mape na j-jevem računalniku ter koda za prenos.
const ALWAYS = [/jakobskerbis\/stemmind/i, /stemmind-(main|sim)\b/i];
const COMPAT = {
  "README.md": [/imenovala STEMMind/, /STEMMIND_\*/, /data\/stemmind\.db/, /imenuje `stemmind`/],
  "CLAUDE.md": [/called STEMMind/, /»stemmind«/],
  "server/env.js": [/STEMMind/, /STEMMIND_/],
  "server/db.js": [/STEMMind/, /stemmind\.db/],
  "server/gate.js": [/STEMMind/, /stemmind_geslo/, /stemmind-gate-v1/],
  "server/accounts/index.js": [/stemmind_age/, /STEMMind/],
  "server/accounts/plans.js": [/STEMMind/, /stemmind_/],
  "scripts/posodobitev.js": [/STEMMind/, /STEMMIND-SAMOPOSODOBITEV/, /\.stemmind-package\.json/],
  "scripts/telefon.js": [/STEMMind/, /STEMMIND_/],
  "scripts/bliznjice.js": [/STEMMind/],
  "public/theme.js": [/STEMMind/, /stemmind/],
  "samodejni-zagon-windows.bat": [/STEMMind/],
  "ustvari-bliznjico.bat": [/STEMMind\.lnk/],
  "ustvari-bliznjico-mac.command": [/Desktop\/STEMMind/],
  "test/ime.test.js": [/.*/],
};
const SKIP_DIRS = new Set([".git", ".claude", "node_modules", "data", "vendor"]);
const TEXT = /\.(js|cjs|mjs|json|md|html|css|bat|cmd|command|yaml|yml|txt|example|svg|webmanifest|py|csv)$|^(Dockerfile|\.env\.example|\.gitattributes)$/;

function* walk(dir) {
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(d.name)) continue;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(p);
    else if (TEXT.test(d.name)) yield p;
  }
}

test("staro ime STEMMind se ne vrne (razen v kodi za prenos)", () => {
  const bad = [];
  for (const file of walk(root)) {
    const rel = path.relative(root, file).split(path.sep).join("/");
    const lines = fs.readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      if (!OLD.test(line)) return;
      OLD.lastIndex = 0;
      let rest = line;
      for (const re of [...ALWAYS, ...(COMPAT[rel] || [])]) rest = rest.replace(new RegExp(re.source, re.flags.replace("g", "") + "g"), "");
      if (OLD.test(rest)) bad.push(`${rel}:${i + 1}: ${line.trim().slice(0, 120)}`);
      OLD.lastIndex = 0;
    });
    if (/stemmind/i.test(path.basename(file))) bad.push(`${rel}: ime datoteke`);
  }
  assert.deepEqual(bad, [], "Aplikacija se zdaj imenuje Kompreno (KOMPRENO_*, kompreno.*). Popravi te vrstice:\n" + bad.join("\n"));
});

test("stare nastavitve STEMMIND_* v .env veljajo kot KOMPRENO_*", async () => {
  process.env.STEMMIND_PREIZKUS_IMENA = "staro";
  process.env.STEMMIND_PREIZKUS_OBA = "staro";
  process.env.KOMPRENO_PREIZKUS_OBA = "novo";
  await import(`../server/env.js?t=${Date.now()}`);
  assert.equal(process.env.KOMPRENO_PREIZKUS_IMENA, "staro");
  assert.equal(process.env.KOMPRENO_PREIZKUS_OBA, "novo"); // novo ime ima prednost
  for (const k of ["STEMMIND_PREIZKUS_IMENA", "STEMMIND_PREIZKUS_OBA", "KOMPRENO_PREIZKUS_IMENA", "KOMPRENO_PREIZKUS_OBA"]) delete process.env[k];
});

test("baza data/stemmind.db se ob prvem zagonu prenese v data/kompreno.db", async () => {
  const { openDb } = await import("../server/db.js");
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "kompreno-ime-"));
  const old = openDb(path.join(dir, "stemmind.db"));
  const s = old.createStudent("Ana");
  old.db.close();
  const store = openDb(path.join(dir, "kompreno.db"));
  assert.deepEqual(store.listStudents().map((x) => [x.id, x.name]), [[s.id, "Ana"]]);
  assert.ok(fs.existsSync(path.join(dir, "stemmind.db")), "stara ostane kot varnostna kopija");
  store.createStudent("Bor");
  store.db.close();
  const again = openDb(path.join(dir, "kompreno.db")); // drugič se ne prepiše čez
  assert.equal(again.listStudents().length, 2);
  again.db.close();
  fs.rmSync(dir, { recursive: true, force: true });
});

test("piškotek z geslom iz časa STEMMind še velja in se zamenja z novim", async () => {
  const crypto = await import("node:crypto");
  const { passwordGate } = await import("../server/gate.js");
  const app = express();
  app.use(passwordGate("geslo1"));
  app.get("/api/x", (_req, res) => res.json({ ok: true }));
  const server = app.listen(0);
  try {
    const base = `http://127.0.0.1:${server.address().port}`;
    const legacy = crypto.createHmac("sha256", "geslo1").update("stemmind-gate-v1").digest("hex");
    const r = await fetch(base + "/api/x", { headers: { cookie: `stemmind_geslo=${legacy}` } });
    assert.equal(r.status, 200);
    assert.match(r.headers.get("set-cookie") || "", /^kompreno_geslo=[a-f0-9]{64}/);
    const wrong = await fetch(base + "/api/x", { headers: { cookie: `stemmind_geslo=${"0".repeat(64)}` } });
    assert.equal(wrong.status, 401);
  } finally {
    server.close();
  }
});

test("naročnine s starimi cenami (lookup_key stemmind_…) se še prepoznajo", async () => {
  const { planByKey } = await import("../server/accounts/plans.js");
  assert.equal(planByKey("stemmind_1_month")?.key, "kompreno_1_month");
  assert.equal(planByKey("kompreno_2_year")?.seats, 2);
  assert.equal(planByKey("drugo"), null);
});

test("zagonske datoteke s staro oznako samoposodobitve se še posodobijo", async () => {
  const { planChanges, LEGACY_MARKER } = await import("../scripts/posodobitev.js");
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "kompreno-ime-"));
  fs.writeFileSync(path.join(dir, "zagon-windows.bat"), `rem ${LEGACY_MARKER}\r\nstara`);
  const files = new Map([["zagon-windows.bat", Buffer.from("nova")]]);
  const plan = planChanges(dir, files, []);
  assert.deepEqual(plan.write, ["zagon-windows.bat"]);
  assert.deepEqual(plan.skipped, []);
  fs.rmSync(dir, { recursive: true, force: true });
});
