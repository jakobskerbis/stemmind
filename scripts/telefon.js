// Odpre Evklid na telefonu: zažene strežnik z geslom in odpre povezavo z interneta.
// Stalna povezava (ista ob vsakem zagonu): brezplačen račun ngrok (NGROK_AUTHTOKEN in
// NGROK_DOMAIN v .env, skript ju vpraša enkrat). Brez tega: začasna povezava Cloudflare.
// Uporaba: node scripts/zaganjalnik.js telefon  (na Windows dvoklik na telefon-windows.bat)
// Računalnik mora biti prižgan, dokler uporabljaš povezavo na telefonu.
// Aplikacija se sama posodobi z GitHuba (preverja vsakih 15 minut), povezava ostane ista (docs/posodobitve.md).
import "../server/env.js";
import { BRAND, LEGACY } from "../server/brand.js";
import fs from "node:fs";
import path from "node:path";
import { spawn, execFileSync } from "node:child_process";
import readline from "node:readline/promises";
import { fileURLToPath } from "node:url";
import { superviseServer, autoUpdate, openLog, logSay, serverStatus, RESTART_CODE } from "./nadzor.js";
import { renameLegacyShortcuts } from "./bliznjice.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const envFile = path.join(root, ".env");
const port = Number(process.env.PORT || 3000);
const local = `http://localhost:${port}`;
const toolsDir = path.join(root, "data", "orodja");
const urlFile = path.join(root, "data", "telefon-povezava.txt");
const friendFile = path.join(root, "data", "povezava-za-prijatelje.txt");
const isWin = process.platform === "win32";

const say = (s = "") => console.log(s);
const children = [];
let stopping = false;
function stopAll(code = 0) {
  stopping = true;
  server?.stop();
  for (const c of children) try { c.kill(); } catch {}
  process.exit(code);
}
process.on("SIGINT", () => stopAll());

function readEnv() {
  try { return fs.readFileSync(envFile, "utf8"); } catch { return ""; }
}
function envValue(text, key) {
  const m = text.match(new RegExp(`^\\s*${key}\\s*=\\s*([^#\\r\\n]*)`, "m"));
  if (m) return m[1].trim();
  // Starejša .env ima nastavitve s prejšnjim imenom aplikacije (brand.json → legacy).
  if (!key.startsWith(`${BRAND.env}_`)) return "";
  for (const l of LEGACY) {
    const v = envValue(text, `${l.env}_${key.slice(BRAND.env.length + 1)}`);
    if (v) return v;
  }
  return "";
}

function appendEnv(lines) {
  const text = readEnv();
  const sep = text && !text.endsWith("\n") ? "\n" : "";
  fs.writeFileSync(envFile, `${text}${sep}${lines.join("\n")}\n`);
}

async function ensurePassword() {
  const text = readEnv();
  if (envValue(text, "EVKLID_PASSWORD")) return;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  say("Povezava za telefon bo zaščitena z geslom, da je ne more odpreti kdorkoli.");
  let pw = "";
  while (pw.length < 4 || /[\s#]/.test(pw)) {
    pw = (await rl.question("Izberi geslo (vsaj 4 znaki, brez presledkov) in pritisni Enter: ")).trim();
  }
  rl.close();
  const sep = text && !text.endsWith("\n") ? "\n" : "";
  fs.writeFileSync(envFile, `${text}${sep}EVKLID_PASSWORD=${pw}\n`);
  say("Geslo je shranjeno v datoteko .env (spremeniš ga lahko tam).");
}

let server = null; // nadzor strežnika (scripts/nadzor.js), da ga lahko posodobitev znova zažene
let log = null;

async function ensureServer() {
  const s = await serverStatus(port);
  if (s === 401) return false; // že teče z geslom (v drugem oknu)
  if (s) {
    say("Evklid že teče brez gesla. Zapri drugo okno Evklida in znova zaženi to datoteko.");
    return stopAll(1);
  }
  log = openLog(root);
  server = superviseServer({ root, port, say, log });
  if (await server.start()) return true;
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

// --- stalna povezava (ngrok) ---
const TOKEN_RE = /\b[0-9A-Za-z]{20,}_[0-9A-Za-z]{10,}\b/;
const DOMAIN_RE = /\b[a-z0-9][a-z0-9-]*(?:\.[a-z0-9-]+)*\.ngrok(?:-free)?\.(?:app|dev|io|pizza)\b/i;

async function ngrokSettings() {
  const text = readEnv();
  let token = envValue(text, "NGROK_AUTHTOKEN");
  let domain = envValue(text, "NGROK_DOMAIN").replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  if (token && domain) return { token, domain };
  if (envValue(text, "EVKLID_STALNA_POVEZAVA") === "0") return null;
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const lines = rl[Symbol.asyncIterator]();
  const ask = async (q) => { process.stdout.write(q); const { value, done } = await lines.next(); if (done) throw new Error("ni vnosa"); return value.trim(); };
  say();
  say("STALNA POVEZAVA: ista povezava ob vsakem zagonu (za bližnjico na telefonu in prijatelje).");
  say("Potrebuješ brezplačen račun na https://dashboard.ngrok.com/signup (prijava z Googlom).");
  say("Nato odpri https://dashboard.ngrok.com/get-started/your-authtoken, kopiraj žeton");
  say("in ga tukaj prilepi (desni klik v tem oknu = prilepi).");
  say("Če želiš samo začasno povezavo, pritisni Enter.");
  const t = await ask("Žeton ngrok: ").catch(() => "");
  if (!t) { rl.close(); return null; }
  token = (t.match(TOKEN_RE) || [t.split(/\s+/).pop()])[0];
  say();
  say("Zdaj odpri https://dashboard.ngrok.com/domains in kopiraj svoj brezplačni naslov");
  say("(konča se na .ngrok-free.app ali .ngrok-free.dev). Če ga ni, klikni »New Domain«.");
  while (!domain) {
    const d = await ask("Naslov ngrok: ").catch(() => { rl.close(); throw new Error("naslov ngrok ni vpisan"); });
    domain = (d.match(DOMAIN_RE) || [""])[0].toLowerCase();
    if (!domain) say("Tega ne prepoznam. Prilepi naslov, npr. moj-naslov.ngrok-free.app");
  }
  rl.close();
  appendEnv([`NGROK_AUTHTOKEN=${token}`, `NGROK_DOMAIN=${domain}`]);
  say("Shranjeno v .env. Naslednjič te ne vprašam več.");
  return { token, domain };
}

function ngrokAsset() {
  const arch = process.arch === "arm64" ? "arm64" : process.arch === "ia32" ? "386" : "amd64";
  const os = isWin ? "windows" : process.platform === "darwin" ? "darwin" : "linux";
  const ext = os === "linux" ? "tgz" : "zip";
  return { url: `https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-${os}-${arch}.${ext}`, ext, file: isWin ? "ngrok.exe" : "ngrok" };
}

async function ensureNgrok() {
  const a = ngrokAsset();
  const bin = path.join(toolsDir, a.file);
  if (fs.existsSync(bin)) return bin;
  fs.mkdirSync(toolsDir, { recursive: true });
  say("Prvič prenašam orodje ngrok (~10 MB) ...");
  const res = await fetch(a.url);
  if (!res.ok) throw new Error(`prenos ni uspel (${res.status})`);
  const archive = path.join(toolsDir, `ngrok.${a.ext}`);
  fs.writeFileSync(archive, Buffer.from(await res.arrayBuffer()));
  // Windows Defender ngrok včasih takoj premakne v karanteno; takrat povemo, kako ga dovoliti.
  const defender = isWin
    ? "Verjetno ga je izbrisal Windows Defender. Odpri Varnost sistema Windows > Zaščita pred virusi in grožnjami > " +
      "Zgodovina zaščite, odpri vnos z ngrok, izberi Dejanja > Dovoli v napravi in znova zaženi to datoteko"
    : "orodja ngrok ni v prenesenem paketu";
  try {
    execFileSync("tar", [a.ext === "tgz" ? "-xzf" : "-xf", archive, "-C", toolsDir], { stdio: "ignore" });
  } catch {
    throw new Error(defender);
  }
  fs.rmSync(archive, { force: true });
  if (!fs.existsSync(bin)) throw new Error(defender);
  if (!isWin) fs.chmodSync(bin, 0o755);
  return bin;
}

const NGROK_HINTS = {
  ERR_NGROK_105: "žeton ni pravilen (v .env popravi NGROK_AUTHTOKEN)",
  ERR_NGROK_107: "žeton ni pravilen (v .env popravi NGROK_AUTHTOKEN)",
  ERR_NGROK_108: "ngrok že teče v drugem oknu ali na drugem računalniku, zapri ga",
  ERR_NGROK_313: "naslov ne pripada temu računu (v .env popravi NGROK_DOMAIN)",
  ERR_NGROK_320: "naslov ne pripada temu računu (v .env popravi NGROK_DOMAIN)",
  ERR_NGROK_334: "ta naslov je že odprt drugje, zapri drugo okno",
};

// Zažene ngrok; ob prekinitvi ga znova zažene (naslov ostane enak).
function startNgrok(bin, { token, domain }) {
  if (isWin) try { execFileSync("taskkill", ["/IM", "ngrok.exe", "/F"], { stdio: "ignore" }); } catch {}
  const url = `https://${domain}`;
  return new Promise((resolve, reject) => {
    let started = false;
    const run = () => {
      const t = spawn(bin, ["http", String(port), `--url=${url}`, "--log=stdout", "--log-format=logfmt"],
        { cwd: root, stdio: ["ignore", "pipe", "pipe"], env: { ...process.env, NGROK_AUTHTOKEN: token } });
      children.push(t);
      let last = "";
      const onData = (d) => {
        const s = String(d);
        log?.write(`ngrok: ${s}`);
        const code = s.match(/ERR_NGROK_\d+/);
        if (code || /lvl=(eror|crit)|ERROR:/.test(s)) last = code ? code[0] : s.trim().split("\n").pop();
        if (!started && /started tunnel|url=https:\/\//.test(s)) { started = true; resolve(url); }
      };
      t.stdout.on("data", onData);
      t.stderr.on("data", onData);
      t.on("error", (e) => { if (!started) reject(new Error(isWin ? "ngrok se ne zažene (morda ga je izbrisal Windows Defender)" : e.message)); });
      t.on("exit", async (code) => {
        if (stopping) return;
        if (!started) return reject(new Error(NGROK_HINTS[last] || last || `koda ${code}`));
        say("Stalna povezava se je prekinila, znova jo odpiram čez 5 sekund ...");
        await new Promise((r) => setTimeout(r, 5000));
        if (!stopping) run();
      });
    };
    run();
    setTimeout(() => { if (!started) reject(new Error("ni se odprla v 40 sekundah")); }, 40000);
  });
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
  renameLegacyShortcuts(root);
  process.chdir(root);
  await ensurePassword();
  const stable = await ngrokSettings();
  say("Zaganjam Evklid ...");
  const own = await ensureServer();
  say("Odpiram povezavo za telefon ...");
  let url = "";
  if (stable) {
    try {
      url = await startNgrok(await ensureNgrok(), stable);
    } catch (e) {
      say(`Stalna povezava ni uspela: ${e.message}`);
      say("Odpiram začasno povezavo ...");
    }
  }
  if (!url) url = await startTunnel(await ensureCloudflared());
  const pw = envValue(readEnv(), "EVKLID_PASSWORD");
  const friend = `${url}/?geslo=${encodeURIComponent(pw)}`;
  fs.mkdirSync(path.dirname(urlFile), { recursive: true });
  fs.writeFileSync(urlFile, url + "\n");
  fs.writeFileSync(friendFile, friend + "\n");
  const copied = copyToClipboard(friend);
  say();
  say("==============================================================");
  say("  Evklid za telefon:");
  say();
  say(`  ${url}`);
  say();
  say("  Povezava za prijatelje (prijavi jih takoj, brez vpisa gesla):");
  say();
  say(`  ${friend}`);
  say();
  if (copied) say("  Povezava za prijatelje je že kopirana: prilepi jo v sporočilo.");
  say("  Ob prvem odprtju brez gesla v povezavi stran vpraša za geslo iz .env.");
  say("  Na telefonu v meniju brskalnika izberi »Dodaj na začetni zaslon«.");
  say();
  say("  Povezava deluje, dokler je to okno odprto in računalnik prižgan.");
  say(stable && url.includes(stable.domain)
    ? "  To je STALNA povezava: ob vsakem zagonu je enaka."
    : "  To je začasna povezava: ob vsakem zagonu je nova.");
  say("==============================================================");
  if (own) {
    autoUpdate({
      root, port, say: logSay(log), server,
      restartSelf: process.env.EVKLID_ZAGANJALNIK ? () => stopAll(RESTART_CODE) : null,
    });
  }
}

main().catch((e) => { say(`Napaka: ${e.message}`); stopAll(1); });
