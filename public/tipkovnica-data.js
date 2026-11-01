// Evklidova tipkovnica: podatki in čista pravila brez DOM (razporeditve po jeziku, različice črk,
// skupine funkcij, kdaj polje dobi našo tipkovnico, vstavljanje predloge z »@«).
// Komponenta je v public/tipkovnica.js; test/tipkovnica.test.js preveri ta modul v Node.
import { LANGUAGES } from "./i18n/languages.js";

// ---------- razporeditve črk ----------
// rows: tri vrstice črk; caseless: pisava brez velikih črk (brez ⇧); rtl: od desne proti levi;
// globe: tipka 🌐 da temu polju telefonovo tipkovnico (jeziki, ki pišejo z načinom za znake).
const QWERTY = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
const QWERTZ = ["qwertzuiop", "asdfghjkl", "yxcvbnm"];
const split = (rows) => rows.map((r) => [...r]);

export const LAYOUTS = {
  sl: { rows: split(["qwertzuiopš", "asdfghjklčž", "yxcvbnm"]) },
  de: { rows: split(["qwertzuiopü", "asdfghjklöä", "yxcvbnmß"]) },
  qwertz: { rows: split(QWERTZ) },
  qwerty: { rows: split(QWERTY) },
  ru: { rows: split(["йцукенгшщзх", "фывапролджэ", "ячсмитьбю"]) },
  uk: { rows: split(["йцукенгшщзх", "фівапролджє", "ячсмитьбю"]) },
  be: { rows: split(["йцукенгшўзх", "фывапролджэ", "ячсмітьбю"]) },
  sr: { rows: split(["љњертзуиопш", "асдфгхјклчћ", "жџцвбнмђ"]) },
  mk: { rows: split(["љњертѕуиопш", "асдфгхјклчќ", "жзџцвбнмѓ"]) },
  el: { rows: split(["ςερτυθιοπ", "ασδφγηξκλ", "ζχψωβνμ"]) },
  ar: { rows: split(["ضصثقفغعهخحج", "شسيبلاتنمكط", "ذءؤرىةوزظد"]), caseless: true, rtl: true },
  fa: { rows: split(["ضصثقفغعهخحج", "شسیبلاتنمکگ", "ظطزرذدپوچژ"]), caseless: true, rtl: true },
  ime: { rows: split(QWERTY), globe: true },
};

// Različice ob dolgem pritisku. Prva je tudi namig v kotu tipke.
const LATIN_VARIANTS = {
  a: ["á", "à", "â", "ä", "ã", "å", "ą", "æ"], c: ["č", "ć", "ç"], d: ["đ", "ď"], e: ["é", "è", "ê", "ë", "ę", "ě", "ė"],
  g: ["ğ"], i: ["í", "ì", "î", "ï", "ı"], l: ["ł", "ľ"], n: ["ñ", "ń", "ň"], o: ["ó", "ò", "ô", "ö", "õ", "ø", "ő"],
  r: ["ř"], s: ["š", "ś", "ş", "ß"], t: ["ť", "ţ"], u: ["ú", "ù", "û", "ü", "ů", "ű"], y: ["ý", "ÿ"], z: ["ž", "ź", "ż"],
};
const PUNCT = { ".": ["?", "!", "…", ":"], ",": [";", "'", '"', "-"] };
export const VARIANTS = {
  sl: { c: ["č", "ć"], s: ["š"], z: ["ž"], d: ["đ"], e: ["é", "è", "ê", "ë"], a: ["á", "à", "â", "ä"], o: ["ó", "ô", "ö"], u: ["ú", "ü"], i: ["í", "î"], n: ["ñ"], ...PUNCT },
  de: { a: ["á", "à", "â"], o: ["ó", "ò", "ô"], u: ["ú", "ù", "û"], e: ["é", "è", "ê", "ë"], s: ["ś", "š"], c: ["ç", "č"], n: ["ñ"], ...PUNCT },
  latin: { ...LATIN_VARIANTS, ...PUNCT },
  ru: { "е": ["ё"], "ь": ["ъ"], ...PUNCT },
  uk: { "г": ["ґ"], "і": ["ї"], "ь": ["'"], ...PUNCT },
  be: { "е": ["ё"], "ь": ["'"], ...PUNCT },
  sr: PUNCT,
  mk: PUNCT,
  el: { "α": ["ά"], "ε": ["έ"], "η": ["ή"], "ι": ["ί", "ϊ", "ΐ"], "ο": ["ό"], "υ": ["ύ", "ϋ", "ΰ"], "ω": ["ώ"], ".": [";", "!", "…", ":"], ",": ["·", "'", '"'] },
  ar: { "ا": ["أ", "إ", "آ"], "ي": ["ئ", "ى"], "و": ["ؤ"], "ه": ["ة"], "ك": ["ک", "گ"], "ب": ["پ"], "ج": ["چ"], "ز": ["ژ"], ".": ["؟", "!", ":"], "،": ["؛", "'", '"'] },
  fa: { "ا": ["آ", "أ"], "ی": ["ئ", "ي", "ے"], "ک": ["ك"], "ه": ["ة", "ۀ", "ہ", "ھ"], "و": ["ؤ"], "ت": ["ٹ"], "د": ["ڈ"], "ر": ["ڑ"], "ن": ["ں"], ".": ["؟", "!", ":"], "،": ["؛", "'", '"'] },
};

const LANG_LAYOUT = {
  sl: "sl", hr: "sl", bs: "sl", "sr-Latn": "sl",
  de: "de", gsw: "de", bar: "de", nds: "de", lb: "de",
  cs: "qwertz", sk: "qwertz", hu: "qwertz",
  ru: "ru", bg: "ru", uk: "uk", be: "be", sr: "sr", mk: "mk", el: "el",
  ar: "ar", fa: "fa", ur: "fa", ps: "fa",
};
// Latinica, ki jo telefon piše z načinom za znake (tonski znaki): ostane tipka 🌐.
const IME_LATIN = new Set(["vi"]);
const NATIVE = new Map(LANGUAGES.map(([code, native]) => [code, native]));

/** Razporeditev ABC za jezik aplikacije: { id, rows, variants, caseless, rtl, globe, comma }. */
export function layoutFor(lang = "sl") {
  let id = LANG_LAYOUT[lang];
  if (!id) {
    const base = String(lang).split("-")[0];
    id = LANG_LAYOUT[base];
    if (!id) {
      const name = NATIVE.get(lang) || NATIVE.get(base) || "";
      if (IME_LATIN.has(base)) id = "ime";
      else if (/^[\p{Script=Latin}\p{P}\p{Zs}\d]+$/u.test(name)) id = "qwerty";
      else if (/\p{Script=Cyrillic}/u.test(name)) id = "ru";
      else if (/\p{Script=Arabic}/u.test(name)) id = "fa";
      else id = "ime"; // japonščina, kitajščina, hindijščina, korejščina, tajščina …
    }
  }
  const L = LAYOUTS[id];
  const variants = VARIANTS[id] || (id === "ime" || id === "qwerty" || id === "qwertz" ? VARIANTS.latin : PUNCT);
  return { id, rows: L.rows, variants, caseless: !!L.caseless, rtl: !!L.rtl, globe: !!L.globe, comma: L.rtl ? "،" : "," };
}

// ---------- matematika: f(x) po skupinah ----------
// Samo zapisi, ki jih razume kalkulator (public/graph/math.js BUILTINS, scicore.js, scisolve.js).
// [napis, vstavi]; »@« je mesto kazalca (in označenega besedila).
export const FX_GROUPS = [
  ["trig", "sc.grp.trig", [["sin", "sin(@)"], ["cos", "cos(@)"], ["tan", "tan(@)"], ["cot", "cot(@)"], ["°", "°"], ["sin⁻¹", "arcsin(@)"], ["cos⁻¹", "arccos(@)"], ["tan⁻¹", "arctan(@)"], ["cot⁻¹", "arccot(@)"], ["π", "π"], ["sinh", "sinh(@)"], ["cosh", "cosh(@)"], ["tanh", "tanh(@)"]]],
  ["pow", "tk.fx.pow", [["x²", "²"], ["x³", "³"], ["xⁿ", "^(@)"], ["x⁻¹", "⁻¹"], ["√", "√(@)"], ["∛", "∛(@)"], ["ⁿ√", "root(@;)"], ["eˣ", "e^(@)"], ["10ˣ", "10^(@)"], ["log", "log(@)"], ["ln", "ln(@)"], ["logₐ", "logb(@;)"], ["|x|", "abs(@)"], ["a/b", "(@)/()"], ["×10ⁿ", "×10^(@)"]]],
  ["ana", "sc.grp.ana", [["d/dx", "d/dx(@)"], ["f′(a)", "d/dx(@;)"], ["∫ₐᵇ", "∫(@;;)"], ["∑", "∑_(n=1)^(@) "], ["∏", "∏_(n=1)^(@) "], ["f(x)=", "f(x)="], ["g(x)=", "g(x)="], ["x", "x"], ["y", "y"], ["=", "="], [";", ";"], ["<", "<"], [">", ">"], ["≤", "≤"], ["≥", "≥"]]],
  ["num", "sc.grp.num", [["n!", "!"], ["nCr", "nCr(@;)"], ["nPr", "nPr(@;)"], ["gcd", "gcd(@;)"], ["lcm", "lcm(@;)"], ["mod", "mod(@;)"], ["round", "round(@;)"], ["⌊x⌋", "floor(@)"], ["⌈x⌉", "ceil(@)"], ["sgn", "sgn(@)"], ["%", "%"], ["Ans", "Ans"]]],
  ["stat", "sc.grp.stat", [["mean", "mean(@)"], ["median", "median(@)"], ["σ", "stdev(@)"], ["min", "min(@)"], ["max", "max(@)"], ["Σ", "total(@)"], [";", ";"]]],
  ["cplx", "sc.grp.cplx", [["i", "i"], ["|z|", "abs(@)"]]],
];

// Kemija: elementi, indeksi, naboji, puščice, agregatna stanja.
export const KEM_ROWS = [
  ["H", "C", "N", "O", "S", "Cl", "Na", "K", "Ca", "Fe"],
  ["₂", "₃", "₄", "₅", "₆", "⁺", "⁻", "²⁺", "³⁺", "²⁻"],
  ["→", "⇌", "↑", "↓", "(aq)", "(s)", "(l)", "(g)", "Δ", "e⁻"],
];

// Vrstica 123 nad številkami: v matematiki zapisi, drugje pogosti znaki.
export const NUM_TOP_MATH = [["x²", "²"], ["√", "√(@)"], ["xⁿ", "^(@)"], ["π", "π"], ["( )", "(@)"], ["a/b", "(@)/()"]];
export const NUM_TOP_TEXT = [["( )", "(@)"], ["%", "%"], ["€", "€"], ["/", "/"], ["#", "#"], ["&", "&"]];
// Pogosti znaki v klepetu z inštruktorjem (vrstica nad tipkami).
export const TUTOR_CHIPS = [["x²", "²"], ["√", "√(@)"], ["a/b", "(@)/()"], ["π", "π"], ["→", "→"], ["≤", "≤"], ["≠", "≠"], ["·", "·"], ["°", "°"]];
export const URL_CHIPS = [["https://", "https://"], [".com", ".com"], [".si", ".si"], ["/", "/"]];
/** Ali je polje za povezavo (type=url ali inputmode=url): dobi tipko Prilepi in pripone. */
export const isUrlField = (el) => String(el?.type || el?.getAttribute?.("type") || "").toLowerCase() === "url" || String(el?.getAttribute?.("inputmode") || "").toLowerCase() === "url";
// e-pošta v obrazcu z geslom = prijava ali registracija
const hasPassword = (el) => !!(el.form || el.closest?.("form"))?.querySelector?.('input[type="password"]');
export const EMAIL_CHIPS = [["@", "@"], [".si", ".si"], [".com", ".com"], ["@gmail.com", "@gmail.com"]];

// ---------- katera polja dobijo našo tipkovnico ----------
// Telefonova tipkovnica samo za prijavne podatke (j, 1. 11.: »no other keyboard than Evklid's, except on the sign-in page for credentials«):
// geslo in e-pošta/uporabniško ime v obrazcu z geslom. Vse ostalo (tudi povezave) piše Evklidova, s tipko Prilepi.
const NO_KB_TYPES = new Set(["password", "file", "date", "datetime-local", "month", "week", "time", "color", "range", "checkbox", "radio", "submit", "button", "reset", "image", "hidden"]);
const NUM_TYPES = new Set(["number", "tel"]);
const NUM_MODES = new Set(["numeric", "decimal", "tel"]);
const LOGIN = /\b(username|current-password|new-password|one-time-code)\b/;

/**
 * Vrsta polja za Evklidovo tipkovnico: null (ostane telefonova), "num" (samo 123) ali "text".
 * el je element ali podoben predmet (tagName, type, getAttribute, hasAttribute, closest, isContentEditable).
 * inputmode: izvirni inputmode (preden ga tipkovnica nastavi na »none«).
 */
export function fieldKind(el, inputmode = el?.getAttribute?.("inputmode")) {
  if (!el || el.disabled || el.readOnly) return null;
  if (el.hasAttribute?.("data-system-kb") || el.closest?.("[data-system-kb]")) return null;
  const tag = String(el.tagName || "").toUpperCase();
  const auto = String(el.getAttribute?.("autocomplete") || "").toLowerCase();
  if (LOGIN.test(auto)) return null;
  if (tag === "TEXTAREA") return "text";
  if (tag === "INPUT") {
    const type = String(el.type || el.getAttribute?.("type") || "text").toLowerCase();
    if (NO_KB_TYPES.has(type)) return null;
    if ((type === "email" || /\bemail\b/.test(auto)) && hasPassword(el)) return null;
    if (NUM_TYPES.has(type) || NUM_MODES.has(String(inputmode || "").toLowerCase())) return "num";
    return "text";
  }
  if (el.isContentEditable) return "text";
  return null;
}

/** Ali polje dobi našo tipkovnico pri nastavitvi mode (always | math | never); math: polje za matematiko. */
export function usesOwnKeyboard(el, mode = "always", { math = false, inputmode } = {}) {
  const kind = fieldKind(el, inputmode);
  if (!kind || mode === "never") return false;
  if (mode === "math") return math || kind === "num";
  return true;
}

// ---------- vstavljanje predloge ----------
/**
 * Vstavi predlogo v besedilo: »@« je mesto kazalca, tja gre označeno besedilo (označiš 16, pritisneš √ → √(16)).
 * Vrne { value, caret, text } (text = vstavljeni del).
 */
export function applyTemplate(value, start, end, ins, maxLength = -1, literal = false) {
  const v = String(value ?? "");
  const s = Math.max(0, Math.min(start ?? v.length, v.length));
  const e = Math.max(s, Math.min(end ?? s, v.length));
  const sel = v.slice(s, e);
  const at = literal ? -1 : ins.indexOf("@"); // literal: »@« je znak (e-pošta, prilepljena povezava), ne mesto kazalca
  let text = at < 0 ? ins : ins.slice(0, at) + sel + ins.slice(at + 1);
  if (maxLength >= 0) {
    const room = maxLength - (v.length - (e - s));
    if (room <= 0) return { value: v, caret: e, text: "" };
    if (text.length > room) text = text.slice(0, room);
  }
  const caret = at < 0 ? s + text.length : Math.min(s + at + sel.length, s + text.length);
  return { value: v.slice(0, s) + text + v.slice(e), caret, text };
}

/** Briši pred kazalcem (cel znak, tudi par nadomestnih znakov) ali označeno besedilo. */
export function deleteBack(value, start, end) {
  const v = String(value ?? "");
  if (end > start) return { value: v.slice(0, start) + v.slice(end), caret: start };
  if (start <= 0) return { value: v, caret: 0 };
  const before = [...v.slice(0, start)];
  before.pop();
  const s = before.join("");
  return { value: s + v.slice(start), caret: s.length };
}

/** Pomik kazalca za en znak (cel znak). */
export function stepCaret(value, pos, dir) {
  const v = String(value ?? "");
  if (dir < 0) return pos <= 0 ? 0 : pos - (/[\uDC00-\uDFFF]/.test(v[pos - 1]) && pos > 1 ? 2 : 1);
  return pos >= v.length ? v.length : pos + (/[\uD800-\uDBFF]/.test(v[pos]) ? 2 : 1);
}

/** Enota pri nalogi: zamenja prejšnjo enoto na koncu odgovora (»12 m« + km/h → »12 km/h«). */
export function withUnit(value, unit) {
  return String(value ?? "").replace(/\s+[^\d\s,./−-][^\s]*$/, "").trimEnd() + " " + unit;
}

// ---------- nastavitve naprave ----------
export const PREF_KEY = "evklid.tipkovnica";
export const MODES = ["always", "math", "never"];
export const DEFAULT_PREFS = { mode: "always", words: false, buzz: true };
export function parsePrefs(raw) {
  let p = {};
  try {
    p = JSON.parse(raw || "{}") || {};
  } catch {}
  return {
    mode: MODES.includes(p.mode) ? p.mode : DEFAULT_PREFS.mode,
    words: typeof p.words === "boolean" ? p.words : DEFAULT_PREFS.words,
    buzz: typeof p.buzz === "boolean" ? p.buzz : DEFAULT_PREFS.buzz,
  };
}

/** Predlogi besed: do n besed iz seznama, ki se začnejo z začetkom besede (velika začetnica ostane). */
export function suggest(words, prefix, n = 3) {
  if (!words?.length || !prefix) return [];
  const low = prefix.toLocaleLowerCase();
  const out = [];
  for (const w of words) {
    if (w.length > low.length && w.toLocaleLowerCase().startsWith(low) && !out.includes(w)) out.push(prefix[0] !== low[0] ? w[0].toLocaleUpperCase() + w.slice(1) : w);
    if (out.length >= n) break;
  }
  return out;
}
