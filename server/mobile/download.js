// Stran /prenesi: Evklid kot aplikacija za Android in iPhone, tudi mimo trgovin.
// - Android: datoteka APK (EAS Build, profil "direct"). Vir: EVKLID_ANDROID_APK_URL ali datoteka
//   data/<slug>.apk na tem strežniku (postreže se na /prenesi/<slug>.apk).
// - iPhone: Apple aplikacij mimo trgovine ne dovoli; povezava TestFlight (EVKLID_TESTFLIGHT_URL), sicer spletna aplikacija.
// - App Store in Google Play: EVKLID_APP_STORE_URL, EVKLID_PLAY_URL, ko bosta aplikaciji objavljeni.
import fs from "node:fs";
import path from "node:path";
import { BRAND } from "../brand.js";
import { uiText, manifestLang } from "../webapp.js";
import { RTL } from "../../public/i18n/languages.js";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const httpsUrl = (u) => (/^https:\/\/[^\s"'<>]+$/.test(String(u || "")) ? u : null);

export function mountDownload(app, opts = {}) {
  const env = opts.env || process.env;
  const apkFile = opts.apkFile || path.resolve(env.EVKLID_ANDROID_APK_FILE || `data/${BRAND.slug}.apk`);
  const apkName = `${BRAND.slug}.apk`;

  app.get(`/prenesi/${apkName}`, (_req, res) => {
    if (!fs.existsSync(apkFile)) return res.status(404).send("APK ni na voljo.");
    res.set("Content-Disposition", `attachment; filename="${apkName}"`);
    res.type("application/vnd.android.package-archive").sendFile(apkFile);
  });

  app.get("/prenesi", (req, res) => {
    const lang = manifestLang(req.query.lang, req.acceptsLanguages());
    const t = (k, v) => esc(uiText(lang, k, v));
    const apk = httpsUrl(env.EVKLID_ANDROID_APK_URL) || (fs.existsSync(apkFile) ? `/prenesi/${apkName}` : null);
    const play = httpsUrl(env.EVKLID_PLAY_URL);
    const appStore = httpsUrl(env.EVKLID_APP_STORE_URL);
    const testflight = httpsUrl(env.EVKLID_TESTFLIGHT_URL);
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
