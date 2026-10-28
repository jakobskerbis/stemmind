// Svetli/temni način in lastne barve. Navaden skript v <head>, da se barve nastavijo pred prvim izrisom.
// Nastavitve so shranjene na tej napravi (localStorage "stemmind.theme"):
//   { mode: "system" | "light" | "dark", accent: "#rrggbb" | null,
//     light: { bg, surface, menu, text } | null, dark: { … } | null }
// Iz teh nekaj barv izračunamo vse ostale (robove, sivo besedilo, poudarke …) in pri tem
// pazimo na kontrast, da je besedilo vedno dobro berljivo.
(function () {
  const KEY = "stemmind.theme";
  const BASE = {
    light: { bg: "#f3f6fb", surface: "#ffffff", menu: "#ffffff", text: "#14213d", accent: "#2563eb" },
    dark: { bg: "#0d1322", surface: "#151d30", menu: "#151d30", text: "#eceef8", accent: "#5b95ff" },
  };
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
      return { mode: ["light", "dark", "system"].includes(s.mode) ? s.mode : "system", accent: hexToRgb(s.accent) ? s.accent : null, light: s.light || null, dark: s.dark || null };
    } catch {
      return { mode: "system", accent: null, light: null, dark: null };
    }
  }
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {}
    apply(s);
    window.dispatchEvent(new CustomEvent("stemmind:theme", { detail: s }));
  }
  const isDarkMode = (s) => s.mode === "dark" || (s.mode === "system" && mq.matches);

  // Iz nekaj izbranih barv izračuna vse spremenljivke. Vrne null, če ni lastnih barv.
  function compute(s) {
    const key = isDarkMode(s) ? "dark" : "light";
    const pal = s[key] || {};
    const custom = Object.keys(pal).some((k) => hexToRgb(pal[k])) || s.accent;
    if (!custom) return null;
    const base = BASE[key];
    const pick = (k) => (hexToRgb(pal[k]) ? pal[k] : base[k]);
    const bg = pick("bg"), surface = pick("surface");
    const menu = hexToRgb(pal.menu) ? pal.menu : hexToRgb(pal.surface) ? surface : base.menu;
    const dark = lum(bg) < 0.18;
    // Izbrano pisavo spoštujemo, dokler je berljiva (4.5); samodejno izbrana mora doseči 7.
    const text = hexToRgb(pal.text) ? readable([bg, surface], pal.text, MIN.muted) : readable([bg, surface], base.text);
    const accent = fit(s.accent || base.accent, [surface, bg], MIN.accent);
    const [ah, as] = toHsl(accent);
    const heroA = fit(accent, ["#ffffff"], MIN.onAccent, -1);
    const heroB = fit(hsl(ah + 28, Math.max(as, 60), toHsl(heroA)[2] + 6), ["#ffffff"], MIN.onAccent, -1);
    const accentText = onColor(accent);
    const vars = {
      "--bg": bg,
      "--surface": surface,
      "--text": text,
      "--muted": mutedOf(text, [surface, bg]),
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
    return { vars, dark, menu, text, bg, surface, accent };
  }

  const ALL_VARS = ["--bg", "--surface", "--text", "--muted", "--surface-2", "--border", "--accent", "--accent-2", "--accent-grad", "--accent-soft", "--accent-text", "--hero-a", "--hero-b", "--user-bubble", "--user-text", "--menu", "--menu-text", "--menu-muted", "--menu-2", "--menu-border", "--menu-accent", "--menu-accent-soft"];

  function apply(s = load()) {
    const root = document.documentElement;
    const c = compute(s);
    for (const v of ALL_VARS) root.style.removeProperty(v);
    const dark = c ? c.dark : isDarkMode(s);
    root.classList.toggle("dark", dark);
    root.style.colorScheme = dark ? "dark" : "light";
    if (c) for (const [k, v] of Object.entries(c.vars)) root.style.setProperty(k, v);
    const meta = document.querySelector('meta[name="theme-color"]');
    const top = c ? c.menu : isDarkMode(s) ? BASE.dark.menu : BASE.light.menu;
    if (meta) meta.setAttribute("content", top);
  }

  // ---------- naključne barve ----------
  const rnd = (a, b) => a + Math.random() * (b - a);
  const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];
  function randomAccent(s = load()) {
    const key = isDarkMode(s) ? "dark" : "light";
    const pal = s[key] || {};
    const against = [hexToRgb(pal.surface) ? pal.surface : BASE[key].surface, hexToRgb(pal.bg) ? pal.bg : BASE[key].bg];
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
      [v["--accent-text"], v["--accent"], MIN.onAccent], ["#ffffff", v["--hero-a"], MIN.onAccent], ["#ffffff", v["--hero-b"], 3],
    ];
    if (v["--menu"]) pairs.push([v["--menu-text"], v["--menu"], MIN.text], [v["--menu-accent"], v["--menu"], MIN.accent]);
    return pairs.every(([a, b, m]) => contrast(a, b) >= m - 0.01);
  }

  window.STEMTheme = { load, save, apply, compute, check, contrast, randomAccent, randomPalette, isDarkMode, BASE, MIN, readable };
  apply();
  mq.addEventListener?.("change", () => apply());
})();
