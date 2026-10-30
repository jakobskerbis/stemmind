// Stran /prenesi: Evklid kot aplikacija za Android in iPhone, tudi mimo trgovin.
// - Android: datoteka APK (EAS Build, profil "direct"). Vir: EVKLID_ANDROID_APK_URL ali datoteka
//   <slug>.apk v mapi baze (na Renderju trajni disk /var/data, doma data/), postreže se na /prenesi/<slug>.apk.
//   Skrbnik jo naloži v Nastavitvah: prilepi povezavo iz expo.dev (POST /api/admin/apk).
// - iPhone: Apple aplikacij mimo trgovine ne dovoli; povezava TestFlight (EVKLID_TESTFLIGHT_URL), sicer spletna aplikacija.
// - App Store in Google Play: EVKLID_APP_STORE_URL, EVKLID_PLAY_URL, ko bosta aplikaciji objavljeni.
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import express from "express";
import { BRAND } from "../brand.js";
import { uiText, manifestLang } from "../webapp.js";
import { RTL } from "../../public/i18n/languages.js";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const httpsUrl = (u) => (/^https:\/\/[^\s"'<>]+$/.test(String(u || "")) ? u : null);

// Od kod skrbnik lahko naloži APK (gradnje EAS in izdaje GitHub, z njihovimi preusmeritvami).
const APK_HOSTS = /(^|\.)(expo\.dev|expo\.io|storage\.googleapis\.com|github\.com|githubusercontent\.com)$/i;
const MAX_APK = 300 * 1024 * 1024;

// Prenese APK s povezave v datoteko: samo https in znani strežniki (tudi po preusmeritvah), največ 300 MB,
// vsebina se mora začeti kot ZIP (APK je ZIP). Najprej v začasno datoteko, nato zamenjava naenkrat.
export async function fetchApk(url, file, fetchImpl = fetch) {
  let u = String(url || "").trim();
  let res = null;
  for (let hop = 0; hop < 6 && !res; hop++) {
    let p;
    try {
      p = new URL(u);
    } catch {
      return { error: "Povezava ni veljavna." };
    }
    if (p.protocol !== "https:" || !APK_HOSTS.test(p.hostname)) return { error: "Povezava mora biti do expo.dev ali GitHub (https)." };
    const r = await fetchImpl(p.href, { redirect: "manual" });
    const loc = r.status >= 300 && r.status < 400 ? r.headers.get("location") : null;
    if (loc) u = new URL(loc, p).href;
    else if (!r.ok) return { error: `Prenos ni uspel (${r.status}).` };
    else res = r;
  }
  if (!res?.body) return { error: "Preveč preusmeritev." };
  if (Number(res.headers.get("content-length")) > MAX_APK) return { error: "Datoteka je prevelika." };
  const tmp = `${file}.${process.pid}.tmp`;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  let bytes = 0;
  let head = Buffer.alloc(0);
  try {
    await pipeline(
      Readable.fromWeb(res.body),
      async function* (src) {
        for await (const chunk of src) {
          bytes += chunk.length;
          if (bytes > MAX_APK) throw new Error("Datoteka je prevelika.");
          if (head.length < 4) head = Buffer.concat([head, chunk]).subarray(0, 4);
          yield chunk;
        }
      },
      fs.createWriteStream(tmp),
    );
    if (!head.equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]))) throw new Error("To ni datoteka APK.");
    fs.renameSync(tmp, file);
    return { bytes };
  } catch (e) {
    fs.rmSync(tmp, { force: true });
    return { error: e.message || "Prenos ni uspel." };
  }
}

export function mountDownload(app, opts = {}) {
  const env = opts.env || process.env;
  const apkName = `${BRAND.slug}.apk`;
  const dataDir = path.dirname(env.EVKLID_DB || `data/${BRAND.slug}.db`);
  const apkFile = opts.apkFile || path.resolve(env.EVKLID_ANDROID_APK_FILE || path.join(dataDir, apkName));

  // Kje je aplikacija za posamezno napravo (gumb »Namesti aplikacijo« v spletni aplikaciji).
  const links = () => ({
    apk: httpsUrl(env.EVKLID_ANDROID_APK_URL) || (fs.existsSync(apkFile) ? `/prenesi/${apkName}` : null),
    play: httpsUrl(env.EVKLID_PLAY_URL),
    appStore: httpsUrl(env.EVKLID_APP_STORE_URL),
    testflight: httpsUrl(env.EVKLID_TESTFLIGHT_URL),
  });
  app.get("/api/app-links", (_req, res) => res.set("Cache-Control", "no-cache").json(links()));

  const admin = (req, res) => {
    if (req.parent?.is_admin) return true;
    res.status(403).json({ error: "Samo za skrbnika." });
    return false;
  };
  const apkStatus = () => {
    const st = fs.statSync(apkFile, { throwIfNoEntry: false });
    return { file: st ? { bytes: st.size, at: st.mtime.toISOString() } : null, url: httpsUrl(env.EVKLID_ANDROID_APK_URL) };
  };
  app.get("/api/admin/apk", (req, res) => {
    if (admin(req, res)) res.json(apkStatus());
  });
  let busy = false;
  app.post("/api/admin/apk", express.json({ limit: "4kb" }), async (req, res) => {
    if (!admin(req, res)) return;
    if (busy) return res.status(409).json({ error: "Prenos že poteka." });
    busy = true;
    try {
      const r = await fetchApk(req.body?.url, apkFile, opts.fetch || fetch);
      if (r.error) return res.status(400).json({ error: r.error });
      res.json(apkStatus());
    } catch {
      res.status(502).json({ error: "Prenos ni uspel." });
    } finally {
      busy = false;
    }
  });

  app.get(`/prenesi/${apkName}`, (_req, res) => {
    if (!fs.existsSync(apkFile)) return res.status(404).send("APK ni na voljo.");
    res.set("Content-Disposition", `attachment; filename="${apkName}"`);
    res.type("application/vnd.android.package-archive").sendFile(apkFile);
  });

  app.get("/prenesi", (req, res) => {
    const lang = manifestLang(req.query.lang, req.acceptsLanguages());
    const t = (k, v) => esc(uiText(lang, k, v));
    const { apk, play, appStore, testflight } = links();
    const ua = String(req.get("user-agent") || "");
    const first = /iPhone|iPad|Macintosh.*Mobile/.test(ua) ? "ios" : "android";
    const btn = (href, label, primary = true) => `<a class="btn${primary ? "" : " sec"}" href="${esc(href)}">${label}</a>`;
    const android = `<section><h2>${t("dl.android")}</h2>
      ${play ? btn(play, t("dl.play")) : ""}
      ${apk ? `${btn(apk, t("dl.apk"), !play)}<p class="muted">${t("dl.apkSteps")}</p>` : play ? "" : `<p class="muted">${t("dl.soon")}</p>`}
    </section>`;
    const ios = `<section><h2>${t("dl.ios")}</h2>
      ${appStore ? btn(appStore, t("dl.appStore")) : ""}
      ${!appStore && testflight ? `${btn(testflight, t("dl.testflight"))}<p class="muted">${t("dl.testflightSteps")}</p>` : ""}
      ${!appStore ? `<p class="muted">${t("dl.iosWeb")}</p>${btn("/", t("dl.openWeb"), false)}` : ""}
    </section>`;
    res.set("Cache-Control", "no-cache").type("html").send(`<!doctype html>
<html lang="${esc(lang)}" dir="${RTL.has(lang) ? "rtl" : "ltr"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(BRAND.name)} · ${t("dl.title")}</title><link rel="icon" href="/icons/icon-192.png">
<style>
:root{--bg:#F6F7F9;--surface:#fff;--text:#0f172a;--muted:#5b6474;--accent:#2353D1;--accent-text:#fff;--border:#e3e7ee}
@media (prefers-color-scheme:dark){:root{--bg:#0D1117;--surface:#161b22;--text:#e6edf3;--muted:#9aa4b2;--accent:#6E9BFF;--accent-text:#0D1117;--border:#30363d}}
body{margin:0;background:var(--bg);color:var(--text);font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{max-width:560px;margin:0 auto;padding:32px 16px}
header{display:flex;align-items:center;gap:12px;margin-bottom:8px}header img{width:56px;height:56px;border-radius:14px}
h1{font-size:26px;margin:0}h2{font-size:19px;margin:0 0 12px}
section{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px;margin:16px 0}
.btn{display:block;text-align:center;background:var(--accent);color:var(--accent-text);font-weight:700;text-decoration:none;border-radius:10px;padding:14px;margin:8px 0}
.btn.sec{background:transparent;color:var(--accent);border:1.5px solid var(--accent)}
.muted{color:var(--muted);font-size:14px;margin:8px 0 0}
</style></head><body><main>
<header><img src="/icons/icon-192.png" alt=""><div><h1>${esc(BRAND.name)}</h1><div class="muted">${t("dl.title")}</div></div></header>
<p>${t("dl.intro")}</p>
${first === "ios" ? ios + android : android + ios}
</main></body></html>`);
  });
}
