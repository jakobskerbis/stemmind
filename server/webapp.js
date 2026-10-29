// STEMMind kot aplikacija na telefonu in računalniku (PWA).
// - /manifest.webmanifest: opis aplikacije v jeziku vmesnika (?lang=… ali jezik brskalnika),
//   z bližnjicami (dolg pritisk na ikono) in posnetki zaslona za okno »Namesti«.
// - /.well-known/assetlinks.json: povezava z aplikacijo v Google Play (TWA), ko sta v .env
//   ANDROID_PACKAGE in ANDROID_SHA256 (glej docs/aplikacija.md).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import SL from "../public/i18n/sl.js";
import { UI_LANGUAGES, RTL, detectLanguage, uiChain } from "../public/i18n/languages.js";

const UI_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "i18n", "ui");
const KEYS = ["inst.desc", "nav.path", "nav.textbook", "nav.chat", "nav.graph"];
const cache = new Map();

// Besedila za manifest iz prevodov vmesnika (veriga nadomestnih jezikov kot v brskalniku).
function strings(lang) {
  if (cache.has(lang)) return cache.get(lang);
  const dicts = uiChain(lang)
    .filter((c) => UI_LANGUAGES.includes(c))
    .map((c) => {
      if (c === "sl") return SL;
      try {
        return JSON.parse(fs.readFileSync(path.join(UI_DIR, `${c}.json`), "utf8"));
      } catch {
        return {};
      }
    });
  const out = Object.fromEntries(KEYS.map((k) => [k, dicts.find((d) => typeof d[k] === "string")?.[k] || k]));
  cache.set(lang, out);
  return out;
}

export function manifest(lang = "sl") {
  const s = strings(lang);
  const shortcut = (key, view, file) => ({
    name: s[key],
    url: `/?pogled=${view}`,
    icons: [{ src: `/icons/shortcut-${file}.png`, sizes: "192x192", type: "image/png" }],
  });
  return {
    id: "/",
    name: "STEMMind",
    short_name: "STEMMind",
    description: s["inst.desc"],
    lang,
    dir: RTL.has(lang) ? "rtl" : "ltr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    categories: ["education"],
    // Klik na ikono, ko je STEMMind že odprt, ga prikaže (brez drugega okna).
    launch_handler: { client_mode: ["navigate-existing", "auto"] },
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [shortcut("nav.path", "path", "pot"), shortcut("nav.chat", "chat", "instruktor"), shortcut("nav.textbook", "textbook", "ucbenik"), shortcut("nav.graph", "graph", "kalkulator")],
    screenshots: [
      { src: "/icons/screen-pot.png", sizes: "780x1688", type: "image/png", form_factor: "narrow", label: s["nav.path"] },
      { src: "/icons/screen-ucbenik.png", sizes: "780x1688", type: "image/png", form_factor: "narrow", label: s["nav.textbook"] },
      { src: "/icons/screen-racunalnik.png", sizes: "1440x900", type: "image/png", form_factor: "wide", label: s["nav.path"] },
    ],
  };
}

// Jezik manifesta: izbira v aplikaciji (?lang=) ima prednost pred jezikom brskalnika.
export function manifestLang(query, acceptLanguages = []) {
  if (typeof query === "string" && (UI_LANGUAGES.includes(query) || query === "sr-Latn")) return query;
  return detectLanguage(acceptLanguages).code;
}

export function mountWebApp(app) {
  app.get("/manifest.webmanifest", (req, res) => {
    const lang = manifestLang(req.query.lang, req.acceptsLanguages());
    res.set("Cache-Control", "no-cache").type("application/manifest+json").send(JSON.stringify(manifest(lang)));
  });
  app.get("/.well-known/assetlinks.json", (_req, res) => {
    const pkg = process.env.ANDROID_PACKAGE;
    const prints = String(process.env.ANDROID_SHA256 || "").split(/[\s,]+/).filter(Boolean);
    if (!pkg || !prints.length) return res.status(404).json([]);
    res.json([
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: { namespace: "android_app", package_name: pkg, sha256_cert_fingerprints: prints },
      },
    ]);
  });
}
