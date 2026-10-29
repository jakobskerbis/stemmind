import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { filesFromTarball, planChanges, applyChanges, rollback, readState, needsRestart, supervisorChanged, MARKER } from "../scripts/posodobitev.js";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";

const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), "kompreno-pos-"));
const put = (root, rel, text, mode) => {
  fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true });
  fs.writeFileSync(path.join(root, rel), text);
  if (mode) fs.chmodSync(path.join(root, rel), mode);
};
const read = (root, rel) => fs.readFileSync(path.join(root, rel), "utf8");
const long = `content/${"zelo-dolgo-ime-mape-".repeat(4)}/${"lekcija-".repeat(10)}.md`;

// Arhiv kot ga vrne GitHub: vse v mapi kompreno-<sha>/, format pax.
function tarball(files) {
  const dir = tmp();
  const top = path.join(dir, "kompreno-abc123");
  for (const [rel, text, mode] of files) put(top, rel, text, mode);
  const out = path.join(dir, "a.tar.gz");
  execFileSync("tar", ["--format=pax", "-czf", out, "-C", dir, "kompreno-abc123"]);
  return fs.readFileSync(out);
}

const NEW = [
  ["package.json", '{"name":"kompreno"}'],
  ["server/index.js", "// nova"],
  ["public/app.js", "// nova app"],
  [long, "# dolga pot"],
  ["zagon-windows.bat", `rem ${MARKER}\r\nnova`],
  ["telefon-windows.bat", `rem ${MARKER}\r\nnova`],
  ["zagon-mac.command", "#!/bin/bash\n# nova", 0o755],
  [".env", "ANTHROPIC_API_KEY=iz-arhiva"],
  ["data/kompreno.db", "iz-arhiva"],
];

test("arhiv: dolge poti, brez .env in data/, izvedljive datoteke", () => {
  const files = filesFromTarball(tarball(NEW));
  assert.ok(files.has(long));
  assert.equal(String(files.get("server/index.js")), "// nova");
  assert.ok(!files.has(".env") && !files.has("data/kompreno.db"));
  assert.equal(files.get("zagon-mac.command").executable, true);
  assert.ok(!files.get("server/index.js").executable);
});

test("posodobitev prepiše samo spremenjeno, ohrani .env in podatke, zna nazaj", () => {
  const root = tmp();
  put(root, ".env", "ANTHROPIC_API_KEY=moj");
  put(root, "data/kompreno.db", "moji podatki");
  put(root, "package.json", '{"name":"kompreno"}'); // enaka
  put(root, "server/index.js", "// stara");
  put(root, "server/staro.js", "// iz prejšnje posodobitve, v main je ni več");
  put(root, "moja-datoteka.txt", "uporabnikova");
  put(root, "zagon-windows.bat", `rem ${MARKER}\r\nstara`); // varna oblika: prepišemo
  put(root, "telefon-windows.bat", "stara brez oznake"); // stara oblika: med tekom ne prepišemo
  const files = filesFromTarball(tarball(NEW));
  const plan = planChanges(root, files, ["server/index.js", "server/staro.js", "package.json"]);
  assert.deepEqual(plan.skipped, ["telefon-windows.bat"]);
  assert.deepEqual(plan.remove, ["server/staro.js"]);
  assert.ok(!plan.write.includes("package.json"));
  assert.ok(plan.write.includes("server/index.js") && plan.write.includes(long));

  fs.writeFileSync(path.join(root, "data", "posodobitev.json"), JSON.stringify({ sha: "a".repeat(40), datoteke: ["server/staro.js"] }));
  applyChanges(root, files, plan);
  fs.writeFileSync(path.join(root, "data", "posodobitev.json"),
    JSON.stringify({ sha: "b".repeat(40), prejsnja: "a".repeat(40), datoteke: [...files.keys()], prejsnjeDatoteke: ["server/staro.js"] }));
  assert.equal(read(root, "server/index.js"), "// nova");
  assert.equal(read(root, long), "# dolga pot");
  assert.ok(!fs.existsSync(path.join(root, "server/staro.js")));
  assert.equal(read(root, ".env"), "ANTHROPIC_API_KEY=moj");
  assert.equal(read(root, "data/kompreno.db"), "moji podatki");
  assert.equal(read(root, "moja-datoteka.txt"), "uporabnikova");
  assert.equal(read(root, "telefon-windows.bat"), "stara brez oznake");
  if (process.platform !== "win32") assert.ok(fs.statSync(path.join(root, "zagon-mac.command")).mode & 0o100);

  assert.equal(rollback(root, () => {}), true);
  assert.equal(read(root, "server/index.js"), "// stara");
  assert.equal(read(root, "server/staro.js"), "// iz prejšnje posodobitve, v main je ni več");
  assert.ok(!fs.existsSync(path.join(root, long)));
  const state = readState(root);
  assert.equal(state.sha, "a".repeat(40));
  assert.deepEqual(state.slabe, ["b".repeat(40)]);
  assert.deepEqual(state.datoteke, ["server/staro.js"]);
});

test("kdaj znova zagnati strežnik oziroma zagonski program", () => {
  assert.equal(needsRestart(["docs/posodobitve.md", "README.md", "test/a.test.js", "zagon-windows.bat"]), false);
  assert.equal(needsRestart(["content/lessons/MAT-OS-9/x.md"]), true);
  assert.equal(needsRestart(["public/i18n/ui/de.json"]), true);
  assert.equal(supervisorChanged(["server/app.js"]), false);
  assert.equal(supervisorChanged(["scripts/telefon.js"]), true);
});

test("strežnik pove različico in zasedenost; service worker dobi različico knjižnic", async () => {
  const app = createApp(openDb(":memory:"));
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const s = await (await fetch(`${base}/healthz/stanje`)).json();
    assert.equal(typeof s.razlicica, "string");
    assert.equal(s.aktivni, 0);
    await fetch(`${base}/api/config`);
    assert.equal((await (await fetch(`${base}/healthz/stanje`)).json()).aktivni, 0);
    const sw = await fetch(`${base}/sw.js`);
    assert.match(sw.headers.get("content-type"), /javascript/);
    assert.match(await sw.text(), /const VERSION = "kompreno-v1-[0-9a-f]{8}";/);
  } finally {
    server.close();
  }
});
