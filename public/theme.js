// Svetli/temni način in lastne barve. Navaden skript v <head>, da se barve nastavijo pred prvim izrisom.
// Nastavitve so shranjene na tej napravi (localStorage "evklid.theme"):
//   { style: "cist" | "igriv" | "temen" | ključ iz ERAS (zgodovinski slogi), mode: "system" | "light" | "dark", accent: "#rrggbb" | null,
//     light: { bg, surface, menu, text } | null, dark: { … } | null }
// Slog (docs/oblikovanje.md): Čist (privzeto, Instrument Sans, umirjen), Igriv (Nunito, zaobljen, topel),
// Temen (IBM Plex Sans, vedno temen, metin poudarek) in zgodovinski slogi iz tabele ERAS spodaj (Antični,
// Renesansa, Hiša modrosti, Indija …). Slog nastavi data-style na <html> (pisava, oblike)
// in osnovne barve; lastne barve uporabnika veljajo nad njimi.
// Iz teh nekaj barv izračunamo vse ostale (robove, sivo besedilo, poudarke …) in pri tem
// pazimo na kontrast, da je besedilo vedno dobro berljivo.
// Nastavitve te naprave so v localStorage pod ključi z imenom aplikacije (»evklid.…« / »evklid_…«).
// Ključe s prejšnjimi imeni (brand.json → legacy; seznam spodaj posodobi scripts/preimenuj.js) enkrat
// prenesemo na trenutno ime, da se nič ne izgubi. theme.js se naloži prvi na vsaki strani.
(function () {
  try {
    const NOW = "evklid";
    const LEGACY = ["kompreno", "stemmind"]; // brand:legacy
    // Po vrsti od najnovejšega imena: če ključ obstaja pod dvema prejšnjima imenoma, obvelja novejši.
    const keys = Object.keys(localStorage);
    for (const old of LEGACY) {
      for (const key of keys) {
        if (!key.startsWith(old + ".") && !key.startsWith(old + "_")) continue;
        const next = NOW + key.slice(old.length);
        if (localStorage.getItem(next) === null) localStorage.setItem(next, localStorage.getItem(key));
        localStorage.removeItem(key);
      }
    }
  } catch {}
})();

(function () {
  const KEY = "evklid.theme";
  // Zgodovinski slogi: VSE o slogu na enem mestu (docs/oblikovanje.md → »Kako dodati novo zgodovinsko temo«).
  //   light/dark: osnovne barve (bg, surface, menu, text, accent; band = barva pasu na kartici dejstev, neobvezno)
  //   font: [ime pisave, paket @fontsource-variable/<paket>] samo za h1 in naslove sklopov (besedilo ostane --font)
  //   hero: zasuk odtenka preliva logotipa in kartice Današnji trening (drugi slogi 28°)
  //   band: [datoteka, širina, višina] vzorca v pasu na vrhu kartice dejstev (public/eras/<slog>/<datoteka>.svg)
  //   glyph: majhna ikona ob naslovu kartice dejstev; motifs: 6–8 risb (črte, viewBox 0 0 64 64) za ozadja
  //     zaslonov, skritih ob robovih (ui.css → »Motivi«); vse datoteke so v public/eras/<slog>/
  //   facts: [predpona ključev i18n, število]: <predpona>.title in <predpona>.f1 … .fN
  //   Ime v izbiri sloga: ap.style<Slog> in ap.style<Slog>Text (prva črka velika), npr. ap.styleRenesansa.
  const ERAS = {
    antik: {
      light: { bg: "#f5f0e8", surface: "#fffcf7", menu: "#fffcf7", text: "#241c15", accent: "#973f1c" },
      dark: { bg: "#16110d", surface: "#211a14", menu: "#211a14", text: "#f2e8da", accent: "#e08a52" },
      font: ["EB Garamond Variable", "eb-garamond"], hero: 6, band: ["meander", 8, 8], glyph: "ikona",
      motifs: ["dorski-steber", "amfora", "sova", "konstrukcija", "jonski-steber", "lovor", "valj-krogla", "pitagora"],
      facts: ["greek", 11],
    },
    renesansa: {
      light: { bg: "#f3ead8", surface: "#fffaf0", menu: "#fffaf0", text: "#2b1d12", accent: "#9b2335", band: "#a8834a" },
      dark: { bg: "#19130c", surface: "#241b12", menu: "#241b12", text: "#f3e7d3", accent: "#ec8f8a", band: "#b8955a" },
      font: ["EB Garamond Variable", "eb-garamond"], hero: 14, band: ["prepletanje", 16, 8], glyph: "ikona",
      motifs: ["sestilo", "armila", "vitruvij", "spirala", "kodeks", "perspektiva", "daljnogled", "poliedr"],
      facts: ["era.renesansa", 6],
    },
    bagdad: {
      light: { bg: "#edf2f0", surface: "#fbfdfc", menu: "#fbfdfc", text: "#10272b", accent: "#0f5f68", band: "#b88a2e" },
      dark: { bg: "#0b1c22", surface: "#11272e", menu: "#11272e", text: "#e9f1ef", accent: "#e2b24f", band: "#c99a3c" },
      font: ["El Messiri Variable", "el-messiri"], hero: 22, band: ["zvezde", 12, 10], glyph: "ikona",
      motifs: ["astrolab", "zvezda", "ozvezdje", "lok", "rozeta", "kvadrant", "rokopis", "abak"],
      facts: ["era.bagdad", 6],
    },
    indija: {
      light: { bg: "#fbf1e1", surface: "#fffbf4", menu: "#fffbf4", text: "#231a2c", accent: "#33408f", band: "#d9822b" },
      dark: { bg: "#13122a", surface: "#1c1a3a", menu: "#1c1a3a", text: "#f3edf7", accent: "#f2a64a", band: "#d98a35" },
      font: ["Eczar Variable", "eczar"], hero: 14, band: ["lotosi", 12, 10], glyph: "ikona",
      motifs: ["lotos", "sunja", "kolo", "steber", "stopnice", "palmov-list", "pav", "rangoli"],
      facts: ["era.indija", 6],
    },
  };
  const STYLES = ["cist", "igriv", "temen", ...Object.keys(ERAS)];
  // Osnovne barve slogov. Čist je enak privzetim barvam v style.css (brez izračuna).
  const BASES = {
    cist: {
      light: { bg: "#f6f7f9", surface: "#ffffff", menu: "#ffffff", text: "#141821", accent: "#2353d1" },
      dark: { bg: "#0d1117", surface: "#151b23", menu: "#151b23", text: "#e6eaf0", accent: "#6e9bff" },
    },
    igriv: {
      light: { bg: "#fff6ea", surface: "#ffffff", menu: "#ffffff", text: "#1f1a2e", accent: "#6a3bd6" },
      dark: { bg: "#17121f", surface: "#211a2e", menu: "#211a2e", text: "#efeaf8", accent: "#a98bff" },
    },
    temen: {
      light: { bg: "#0d1117", surface: "#151b23", menu: "#151b23", text: "#e6eaf0", accent: "#4cd3a4" },
      dark: { bg: "#0d1117", surface: "#151b23", menu: "#151b23", text: "#e6eaf0", accent: "#4cd3a4" },
    },
  };
  for (const [k, e] of Object.entries(ERAS)) BASES[k] = { light: e.light, dark: e.dark };
  // Motivi v ozadju so v barvi besedila (ui.css: sloja 7 % in 5 %, ki se lahko prekrivata: 1 − 0,93 · 0,95 ≈ 11,7 %);
  // kontrast besedila se preverja na podlagi z najmočnejšim deležem, ki se lahko pojavi pod besedilom.
  const MOTIF = 0.12;
  const BASE = BASES.cist;
  const baseOf = (s) => BASES[s && STYLES.includes(s.style) ? s.style : "cist"];
  // Najmanjši kontrast (WCAG): navadno besedilo 7 (AAA), sivo besedilo in poudarki 4.5 (AA).
  const MIN = { text: 7, muted: 4.5, accent: 4.5, onAccent: 4.5 };
  const mq = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : { matches: false, addEventListener() {} };

  // ---------- barve ----------
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  function hexToRgb(hex) {
    let h = String(hex || "").trim().replace("#", "");
    if (h.length === 3) h = h.replace(/./g, "$&$&");
    const n = parseInt(h, 16);
    return /^[0-9a-f]{6}$/i.test(h) ? [(n >> 16) & 255, (n >> 8) & 255, n & 255] : null;
  }
  const rgbToHex = (rgb) => "#" + rgb.map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, "0")).join("");
  function lum(hex) {
    const [r, g, b] = hexToRgb(hex).map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  function contrast(a, b) {
    const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
    return (x + 0.05) / (y + 0.05);
  }
  function mix(a, b, t) { // t = delež barve b
    const A = hexToRgb(a), B = hexToRgb(b);
    return rgbToHex(A.map((v, i) => v + (B[i] - v) * t));
  }
  function toHsl(hex) {
    const [r, g, b] = hexToRgb(hex).map((v) => v / 255);
    const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
    if (max === min) return [0, 0, l * 100];
    const d = max - min, s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return [h * 60, s * 100, l * 100];
  }
  function hsl(h, s, l) {
    h = ((h % 360) + 360) % 360; s = clamp(s / 100); l = clamp(l / 100);
    const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return rgbToHex([f(0) * 255, f(8) * 255, f(4) * 255]);
  }
  // Spremeni svetlost barve (ohrani odtenek), dokler ne doseže kontrasta z vsemi podlagami.
  function fit(color, against, min, prefer) {
    const ok = (c) => against.every((bg) => contrast(c, bg) >= min);
    if (ok(color)) return color;
    const [h, s, l] = toHsl(color);
    const darkBg = against.reduce((t, bg) => t + lum(bg), 0) / against.length < 0.18;
    const dir = prefer || (darkBg ? 1 : -1);
    for (const d of [dir, -dir]) {
      for (let x = l; x >= 0 && x <= 100; x += d * 2) {
        const c = hsl(h, s, x);
        if (ok(c)) return c;
      }
    }
    return darkBg ? "#ffffff" : "#000000";
  }
  // Barva besedila, ki je dobro berljiva na vseh podlagah: najprej poskusi želeno, sicer temno ali svetlo.
  function readable(on, wish, min = MIN.text) {
    if (wish) {
      const f = fit(wish, on, min); // ohrani odtenek, spremeni le svetlost
      if (on.every((bg) => contrast(f, bg) >= min)) return f;
    }
    const tint = toHsl(on[0])[0];
    const dark = hsl(tint, 35, 11), light = hsl(tint, 25, 95);
    const score = (c) => Math.min(...on.map((bg) => contrast(c, bg)));
    const best = score(dark) >= score(light) ? dark : light;
    return score(best) >= MIN.text ? best : score("#000000") >= score("#ffffff") ? "#000000" : "#ffffff";
  }
  const onColor = (bg) => (contrast("#ffffff", bg) >= contrast("#0b1020", bg) ? "#ffffff" : "#0b1020");
  // Sivo besedilo: čim bolj umirjeno, a še vedno berljivo.
  function mutedOf(text, on) {
    for (let t = 0.42; t >= 0; t -= 0.04) {
      const c = mix(text, on[0], t);
      if (on.every((bg) => contrast(c, bg) >= MIN.muted)) return c;
    }
    return text;
  }

  // ---------- nastavitve ----------
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || "{}");
      return { style: STYLES.includes(s.style) ? s.style : "cist", mode: ["light", "dark", "system"].includes(s.mode) ? s.mode : "system", accent: hexToRgb(s.accent) ? s.accent : null, light: s.light || null, dark: s.dark || null };
    } catch {
      return { style: "cist", mode: "system", accent: null, light: null, dark: null };
    }
  }
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {}
    apply(s);
    window.dispatchEvent(new CustomEvent("evklid:theme", { detail: s }));
  }
  const isDarkMode = (s) => s.style === "temen" || s.mode === "dark" || (s.mode === "system" && mq.matches);

  // Iz nekaj izbranih barv izračuna vse spremenljivke. Vrne null, če ni lastnih barv.
  function compute(s) {
    const key = isDarkMode(s) ? "dark" : "light";
    const pal = s[key] || {};
    // Čist brez lastnih barv = privzete barve iz style.css; drugi slogi se izračunajo iz svojih osnovnih barv.
    const custom = Object.keys(pal).some((k) => hexToRgb(pal[k])) || s.accent || (s.style && s.style !== "cist");
    if (!custom) return null;
    const base = baseOf(s)[key];
    const pick = (k) => (hexToRgb(pal[k]) ? pal[k] : base[k]);
    const bg = pick("bg"), surface = pick("surface");
    const menu = hexToRgb(pal.menu) ? pal.menu : hexToRgb(pal.surface) ? surface : base.menu;
    const dark = lum(bg) < 0.18;
    const era = ERAS[s.style];
    // Izbrano pisavo spoštujemo, dokler je berljiva (4.5); samodejno izbrana mora doseči 7.
    const text = hexToRgb(pal.text) ? readable([bg, surface], pal.text, MIN.muted) : readable([bg, surface], base.text);
    // Zgodovinski slogi: podlaga pod motivi (ozadje in kartice z MOTIF deleža besedila) mora biti prav tako berljiva.
    const motifBg = era ? [mix(bg, text, MOTIF), mix(surface, text, MOTIF)] : [];
    const onBg = [surface, bg, ...motifBg];
    const accent = fit(s.accent || base.accent, onBg, MIN.accent);
    const [ah, as] = toHsl(accent);
    const heroA = fit(accent, ["#ffffff"], MIN.onAccent, -1);
    // Zgodovinski slogi zasukajo odtenek preliva za svoj »hero« (Antični 6°: ostane v terakoti), drugi za 28°.
    const heroB = fit(hsl(ah + (era ? era.hero : 28), Math.max(as, 60), toHsl(heroA)[2] + 6), ["#ffffff"], MIN.onAccent, -1);
    const accentText = onColor(accent);
    const vars = {
      "--bg": bg,
      "--surface": surface,
      "--text": text,
      "--muted": mutedOf(text, onBg),
      "--surface-2": mix(mix(surface, text, dark ? 0.08 : 0.05), accent, dark ? 0.06 : 0.07),
      "--border": mix(surface, text, dark ? 0.16 : 0.12),
      "--accent": accent,
      "--accent-2": mix(accent, surface, 0.2),
      "--accent-grad": hsl(ah + 28, as, toHsl(accent)[2]),
      "--accent-soft": mix(surface, accent, dark ? 0.22 : 0.13),
      "--accent-text": accentText,
      "--hero-a": heroA,
      "--hero-b": heroB,
      "--user-bubble": accent,
      "--user-text": accentText,
    };
    // Pas na kartici dejstev v barvi obdobja (zlato, žafran …), malo potopljen v okno, da ne vpije.
    if (era && base.band && !s.accent) vars["--band-c"] = mix(surface, base.band, 0.75);
    // Meniji: lastna podlaga, besedilo in poudarek se prilagodita njej.
    if (menu.toLowerCase() !== surface.toLowerCase()) {
      const mText = readable([menu], text, contrast(text, menu) >= MIN.muted ? MIN.muted : MIN.text);
      const mAccent = fit(accent, [menu], MIN.accent);
      Object.assign(vars, {
        "--menu": menu,
        "--menu-text": mText,
        "--menu-muted": mutedOf(mText, [menu]),
        "--menu-2": mix(menu, mText, 0.08),
        "--menu-border": mix(menu, mText, 0.14),
        "--menu-accent": mAccent,
        "--menu-accent-soft": mix(menu, mAccent, lum(menu) < 0.18 ? 0.24 : 0.14),
      });
    }
    return { vars, dark, menu, text, bg, surface, accent, motifBg };
  }

  const ALL_VARS = ["--bg", "--surface", "--text", "--muted", "--surface-2", "--border", "--accent", "--accent-2", "--accent-grad", "--accent-soft", "--accent-text", "--hero-a", "--hero-b", "--user-bubble", "--user-text", "--menu", "--menu-text", "--menu-muted", "--menu-2", "--menu-border", "--menu-accent", "--menu-accent-soft", "--band-c"];
  const ERA_VARS = ["--era-font", "--band", "--band-w", "--band-h", "--glyph", ...[1, 2, 3, 4, 5, 6, 7, 8].map((i) => `--m${i}`)];
  const eraUrl = (id, f) => `url("/eras/${id}/${f}.svg")`;
  // Pisava sloga (/vendor/<paket>/index.css) se doda le enkrat; brskalnik prenese datoteke šele, ko jih rabi.
  function loadFont(pkg) {
    if (!pkg || document.querySelector(`link[data-font="${pkg}"]`)) return;
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = `vendor/${pkg}/index.css`;
    l.dataset.font = pkg;
    document.head.appendChild(l);
  }
  function applyEra(root, id) {
    const era = ERAS[id];
    for (const v of ERA_VARS) root.style.removeProperty(v);
    if (!era) return root.removeAttribute("data-era");
    root.dataset.era = id;
    loadFont(era.font[1]);
    const m = era.motifs;
    root.style.setProperty("--era-font", `"${era.font[0]}"`);
    root.style.setProperty("--band", eraUrl(id, era.band[0]));
    root.style.setProperty("--band-w", era.band[1] + "px");
    root.style.setProperty("--band-h", era.band[2] + "px");
    root.style.setProperty("--glyph", eraUrl(id, era.glyph));
    // Osem mest za motive (ui.css); krajši seznam se ponovi.
    for (let i = 0; i < 8; i++) root.style.setProperty(`--m${i + 1}`, eraUrl(id, m[i % m.length]));
  }

  function apply(s = load()) {
    const root = document.documentElement;
    root.dataset.style = STYLES.includes(s.style) ? s.style : "cist";
    applyEra(root, s.style);
    const c = compute(s);
    for (const v of ALL_VARS) root.style.removeProperty(v);
    const dark = c ? c.dark : isDarkMode(s);
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    if (c) for (const [k, v] of Object.entries(c.vars)) root.style.setProperty(k, v);
    const meta = document.querySelector('meta[name="theme-color"]');
    const top = c ? c.menu : isDarkMode(s) ? baseOf(s).dark.menu : baseOf(s).light.menu;
    if (meta) meta.setAttribute("content", top);
  }

  // ---------- naključne barve ----------
  const rnd = (a, b) => a + Math.random() * (b - a);
  const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];
  function randomAccent(s = load()) {
    const key = isDarkMode(s) ? "dark" : "light";
    const pal = s[key] || {};
    const against = [hexToRgb(pal.surface) ? pal.surface : baseOf(s)[key].surface, hexToRgb(pal.bg) ? pal.bg : baseOf(s)[key].bg];
    const current = s.accent ? toHsl(s.accent)[0] : -999;
    let h;
    do h = rnd(0, 360); while (Math.abs(((h - current + 540) % 360) - 180) < 40);
    return fit(hsl(h, rnd(62, 88), key === "dark" ? 66 : 46), against, MIN.accent);
  }
  // Celotna paleta za trenutni način: ozadje, okna, meniji in pisava v istem odtenku, poudarek v drugem.
  function randomPalette(s = load()) {
    const darkMode = isDarkMode(s);
    for (let i = 0; i < 40; i++) {
      const h = rnd(0, 360);
      const pal = darkMode
        ? {
            bg: hsl(h, rnd(18, 45), rnd(6, 10)),
            surface: hsl(h, rnd(16, 38), rnd(12, 17)),
            text: hsl(h, rnd(15, 40), rnd(92, 97)),
          }
        : {
            bg: hsl(h, rnd(25, 70), rnd(91, 96)),
            surface: hsl(h, rnd(20, 70), rnd(98, 100)),
            text: hsl(h, rnd(25, 55), rnd(9, 16)),
          };
      pal.menu = choice([
        pal.surface,
        darkMode ? hsl(h, rnd(20, 45), rnd(9, 13)) : hsl(h, rnd(35, 75), rnd(87, 93)),
        darkMode ? hsl(h, rnd(35, 60), rnd(20, 26)) : hsl(h, rnd(35, 60), rnd(15, 24)),
      ]);
      const accent = fit(hsl(h + choice([150, 180, 210, 35, -35]), rnd(62, 88), darkMode ? 66 : 46), [pal.surface, pal.bg], MIN.accent);
      const c = compute({ ...s, accent, [darkMode ? "dark" : "light"]: pal });
      if (c && check(c)) return { pal, accent };
    }
    return { pal: null, accent: null };
  }
  // Preveri vse pare besedila in podlage.
  function check(c) {
    const v = c.vars;
    const pairs = [
      [v["--text"], c.bg, MIN.text], [v["--text"], c.surface, MIN.text],
      [v["--muted"], c.surface, MIN.muted], [v["--accent"], c.surface, MIN.accent], [v["--accent"], c.bg, MIN.accent],
      [v["--accent-text"], v["--accent"], MIN.onAccent],
      ...(c.motifBg || []).flatMap((m) => [[v["--text"], m, MIN.text], [v["--muted"], m, MIN.muted], [v["--accent"], m, MIN.accent]]), ["#ffffff", v["--hero-a"], MIN.onAccent], ["#ffffff", v["--hero-b"], 3],
    ];
    if (v["--menu"]) pairs.push([v["--menu-text"], v["--menu"], MIN.text], [v["--menu-accent"], v["--menu"], MIN.accent]);
    return pairs.every(([a, b, m]) => contrast(a, b) >= m - 0.01);
  }

  window.STEMTheme = { load, save, apply, compute, check, contrast, randomAccent, randomPalette, isDarkMode, BASE, BASES, STYLES, ERAS, baseOf, MIN, MOTIF, readable, loadFont };
  apply();
  mq.addEventListener?.("change", () => apply());
})();

// Lahki način pred prvim izrisom (da se spletna pisava sploh ne prenese): zadnja izbira na tej
// napravi ("evklid.lite" = "1" / "0") ali, če je ni, varčevanje s podatki / počasna povezava.
(function () {
  let saved = null;
  try {
    saved = localStorage.getItem("evklid.lite");
  } catch {}
  const c = navigator.connection;
  const auto = !!(c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || "")));
  if (saved === "1" || (saved === null && auto)) document.documentElement.classList.add("lite");
})();
