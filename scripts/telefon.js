// Odpre STEMMind na telefonu: zažene strežnik z geslom in brezplačen Cloudflare tunel.
// Uporaba: node scripts/telefon.js  (na Windows dvoklik na telefon-windows.bat)
// Računalnik mora biti prižgan, dokler uporabljaš povezavo na telefonu.
import fs from "node:fs";
import path from "node:path";
import { spawn, execFileSync } from "node:child_process";
import readline from "node:readline/promises";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const envFile = path.join(root, ".env");
const port = Number(process.env.PORT || 3000);
const local = `http://localhost:${port}`;
const toolsDir = path.join(root, "data", "orodja");
const urlFile = path.join(root, "data", "telefon-povezava.txt");
const logFile = path.join(root, "data", "dnevnik.txt"); // izpis strežnika, za iskanje napak
const isWin = process.platform === "win32";

const say = (s = "") => console.log(s);
const children = [];
function stopAll(code = 0) {
  stopping = true;
  for (const c of children) try { c.kill(); } catch {}
  process.exit(code);
}
process.on("SIGINT", () => stopAll());

function readEnv() {
  try { return fs.readFileSync(envFile, "utf8"); } catch { return ""; }
}
function envValue(text, key) {
  const m = text.match(new RegExp(`^\\s*${key}\\s*=\\s*([^#\\r\\n]*)`, "m"));
  return m ? m[1].trim() : "";
}

async function ensurePassword() {
  const text = readEnv();
  if (envValue(text, "STEMMIND_PASSWORD")) return;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  say("Povezava za telefon bo zaščitena z geslom, da je ne more odpreti kdorkoli.");
  let pw = "";
  while (pw.length < 4 || /[\s#]/.test(pw)) {
    pw = (await rl.question("Izberi geslo (vsaj 4 znaki, brez presledkov) in pritisni Enter: ")).trim();
  }
  rl.close();
  const sep = text && !text.endsWith("\n") ? "\n" : "";
  fs.writeFileSync(envFile, `${text}${sep}STEMMIND_PASSWORD=${pw}\n`);
  say("Geslo je shranjeno v datoteko .env (spremeniš ga lahko tam).");
}

async function status() {
  try {
    const r = await fetch(local, { signal: AbortSignal.timeout(2000) });
    return r.status;
  } catch { return 0; }
}

let stopping = false;
let log = null;

function spawnServer() {
  const server = spawn(process.execPath,
    ["--env-file-if-exists=.env", "--disable-warning=ExperimentalWarning", "server/index.js"],
    { cwd: root, stdio: ["ignore", "pipe", "pipe"] });
  for (const stream of [server.stdout, server.stderr]) {
    stream.on("data", (d) => { process.stdout.write(d); log?.write(`${new Date().toISOString().slice(11, 19)} ${d}`); });
  }
  children.push(server);
  // Če se strežnik ustavi (npr. posodobitev ga je zaprla), ga zaženemo znova,
  // da povezava za telefon ostane ista.
  server.on("exit", async (code) => {
    if (stopping) return;
    say(`Strežnik se je ustavil (koda ${code}). Znova ga zaganjam čez 3 sekunde ...`);
    await new Promise((r) => setTimeout(r, 3000));
    if (stopping) return;
    while (await status()) await new Promise((r) => setTimeout(r, 2000)); // počakaj, da se vrata sprostijo
    spawnServer();
  });
  return server;
}

async function ensureServer() {
  const s = await status();
  if (s === 401) return; // že teče, z geslom
  if (s) {
    say("STEMMind že teče brez gesla. Zapri drugo okno STEMMind in znova zaženi to datoteko.");
    return stopAll(1);
  }
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
  log = fs.createWriteStream(logFile, { flags: "a" });
  log.write(`\n=== zagon ${new Date().toISOString()} ===\n`);
  spawnServer();
  for (let i = 0; i < 60; i++) {
    if (await status()) return;
    await new Promise((r) => setTimeout(r, 500));
  }
  say("Strežnik se ni zagnal.");
  stopAll(1);
}

function cloudflaredAsset() {
  const arch = process.arch === "arm64" ? "arm64" : process.arch === "ia32" ? "386" : "amd64";
  if (isWin) return { name: `cloudflared-windows-${arch}.exe`, file: "cloudflared.exe" };
  if (process.platform === "darwin") return { name: `cloudflared-darwin-${arch}.tgz`, file: "cloudflared", tgz: true };
  return { name: `cloudflared-linux-${arch}`, file: "cloudflared" };
}

async function ensureCloudflared() {
  try { execFileSync(isWin ? "where" : "which", ["cloudflared"], { stdio: "ignore" }); return "cloudflared"; } catch {}
  const a = cloudflaredAsset();
  const bin = path.join(toolsDir, a.file);
  if (fs.existsSync(bin)) return bin;
  fs.mkdirSync(toolsDir, { recursive: true });
  say("Prvič prenašam orodje za povezavo (Cloudflare, ~40 MB) ...");
  const res = await fetch(`https://github.com/cloudflare/cloudflared/releases/latest/download/${a.name}`);
  if (!res.ok) throw new Error(`Prenos ni uspel (${res.status}).`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (a.tgz) {
    const tgz = path.join(toolsDir, a.name);
    fs.writeFileSync(tgz, buf);
    execFileSync("tar", ["-xzf", tgz, "-C", toolsDir]);
    fs.rmSync(tgz);
  } else {
    fs.writeFileSync(bin + ".tmp", buf);
    fs.renameSync(bin + ".tmp", bin);
  }
  if (!isWin) fs.chmodSync(bin, 0o755);
  return bin;
}

function copyToClipboard(text) {
  try {
    if (isWin) execFileSync("clip", { input: text });
    else if (process.platform === "darwin") execFileSync("pbcopy", { input: text });
    else return false;
    return true;
  } catch { return false; }
}

function startTunnel(bin) {
  return new Promise((resolve, reject) => {
    const t = spawn(bin, ["tunnel", "--no-autoupdate", "--url", local], { cwd: root, stdio: ["ignore", "pipe", "pipe"] });
    children.push(t);
    let found = false;
    const onData = (d) => {
      const m = String(d).match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/);
      if (m && !found) { found = true; resolve(m[0]); }
    };
    t.stdout.on("data", onData);
    t.stderr.on("data", onData);
    t.on("exit", (code) => {
      if (!found) reject(new Error(`Tunel se ni odprl (koda ${code}).`));
      else { say("Povezava za telefon se je prekinila. Znova zaženi to datoteko."); stopAll(1); }
    });
    setTimeout(() => { if (!found) reject(new Error("Tunel se ni odprl v 60 sekundah.")); }, 60000);
  });
}

async function main() {
  process.chdir(root);
  await ensurePassword();
  say("Zaganjam STEMMind ...");
  await ensureServer();
  const bin = await ensureCloudflared();
  say("Odpiram povezavo za telefon ...");
  const url = await startTunnel(bin);
  fs.mkdirSync(path.dirname(urlFile), { recursive: true });
  fs.writeFileSync(urlFile, url + "\n");
  const copied = copyToClipboard(url);
  say();
  say("==============================================================");
  say("  STEMMind za telefon:");
  say();
  say(`  ${url}`);
  say();
  say("  Ob prvem odprtju telefon vpraša za prijavo:");
  say("  uporabniško ime je lahko karkoli, geslo je tvoje geslo iz .env.");
  if (copied) say("  Povezava je že kopirana: prilepi jo v sporočilo samemu sebi.");
  say();
  say("  Povezava deluje, dokler je to okno odprto in računalnik prižgan.");
  say("  Ob vsakem zagonu dobiš novo povezavo.");
  say("==============================================================");
}

main().catch((e) => { say(`Napaka: ${e.message}`); stopAll(1); });
