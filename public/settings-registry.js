// Vse nastavitve, ki jih inštruktor sme spremeniti iz klepeta (orodji v server/chat-settings.js).
// Isti seznam uporabljata strežnik (opis orodja za model, preverjanje) in odjemalec (nastavitve naprave).
//
// NIKOLI tukaj: finančni podatki (naročnina, plačila, cene, kode za aktivacijo, račun) in osebni
// podatki (ime, e-pošta, geslo, starost, starši, vzdevek). Te ureja samo učenec v Nastavitvah / Računu.
//
// Nova nastavitev v aplikaciji → nov vnos tukaj. test/chat-settings.test.js preveri, da ima vsako
// polje obrazca Nastavitve in vsaka nastavitev naprave svoj vnos (razen izrecno izvzetih).
//
// Opisi (desc) so v angleščini, ker jih bere model (manj žetonov); učencu jih ne kažemo.

import { INTEREST_IDS, NEWS_LEVELS, NEWS_LANGS } from "./interests.js";
import { DIALECTS } from "./dialects.js";

const DIALECT_LIST = Object.entries(DIALECTS).map(([l, list]) => `${l}: ${list.map((d) => d.id).join(", ")}`).join("; ");

// Profil učenca (shrani se na strežniku, velja na vseh napravah).
// confirm: sprememba zamenja učno pot, zato jo učenec najprej potrdi (gumb ali »da«).
export const PROFILE_SETTINGS = {
  school_system: { confirm: true, desc: "country / school system id: SI = Slovenia (default), others are regional curricula (see get_settings)" },
  educational_track: { confirm: true, values: ["OSNOVNA_SOLA", "SREDNJA_SOLA", "UNIVERZA"], desc: "school stage: primary (OŠ), secondary (SŠ) or faculty" },
  curriculum_level: { confirm: true, desc: "grade or year: OŠ '6. razred'…'9. razred'; SŠ '1. letnik'…'4. letnik', optional maths level ' OR'/' VR' (e.g. '3. letnik VR'); faculty '1. letnik'…; regional systems use their grade names (e.g. 'Class 8')" },
  study_program: { confirm: true, desc: "faculty study programme: id or name with faculty, e.g. 'Kemija UL FKKT' (get_settings options=study_program lists them)" },
  study_course: { desc: "faculty only: course of the programme's current year or an elective, by name (get_settings options=study_course)" },
  subject: { values: ["MAT", "FIZ", "KEM", "NAR", "BIO", "GEO", "RAC", "EKO"], desc: "school subject; OŠ 6./7. has MAT and NAR only; at faculty prefer study_course" },
  track: { values: ["REGULAR", "COMPETITION"], desc: "REGULAR = school (NPZ/matura), COMPETITION = competition preparation (not at faculty or in regional systems)" },
  solving_mode: { values: ["A", "B"], desc: "A = step-by-step guidance, B = full worked solution with explanation (permanent default)" },
  personality_setting: { desc: "tutor tone / theme of examples, max 200 chars, e.g. 'strog', 'šaljiv, primeri iz nogometa'" },
  language: { desc: "conversation and app language, ISO 639 code (e.g. 'sl', 'en', 'de', 'hr', 'zh-Hant'); the app reloads in it" },
  dialect: { desc: `tutor's dialect or language variant, only for the chat tone (terms, formulas, boxes and tasks stay standard); '' = standard language; must belong to the conversation language: ${DIALECT_LIST}` },
  data_mode: { values: ["auto", "lite", "normal"], desc: "light mode (less data, shorter replies): auto = on slow connection, lite = always, normal = never" },
  avatar: { object: true, desc: "avatar look (the only thing other students see): object {slot: item id}, slots body, eyes, mouth, hat, outfit, acc, bg; only free items or items the student owns (get_settings lists both); buying with game coins happens only in the games shop" },
  interests: { list: true, values: INTEREST_IDS, desc: `news corner (Kotiček) interests, whole new list (replaces the old one), max 8, ids: ${INTEREST_IDS.join(", ")}` },
  interest_custom: { desc: "own extra topic for the news corner, max 40 chars of keywords, e.g. 'črne luknje' (English keywords find more news); '' clears it" },
  news_level: { values: NEWS_LEVELS, desc: "news corner depth: simple = written for kids and teens, all = also research news, auto = by school stage" },
  news_lang: { values: NEWS_LANGS, desc: "news corner: all = also English sources, mine = only news in the app language (fewer)" },
  weak_points: { list: true, desc: "student's own list of weak points (whole new list, replaces the old one), e.g. ['ulomki', 'pretvarjanje enot']" },
};

// Nastavitve te naprave (localStorage); strežnik jih ne hrani, odjemalec jih uporabi takoj.
// ls: ključ v localStorage in preslikava vrednosti; brez ls ima nastavitev svojo kodo v public/chat-settings.js.
export const DEVICE_SETTINGS = {
  theme: { values: ["light", "dark", "system"], desc: "light / dark mode, system = follow the device" },
  accent: { desc: "accent colour: '#rrggbb', 'random' or 'default' (contrast is fixed automatically)" },
  colors: { values: ["random", "default"], desc: "whole colour palette of the current light/dark mode: random or back to default" },
  color_background: { desc: "background colour '#rrggbb' (current light/dark mode)" },
  color_windows: { desc: "windows/cards colour '#rrggbb'" },
  color_menus: { desc: "menus colour '#rrggbb'" },
  color_text: { desc: "text colour '#rrggbb' (adjusted for readability)" },
  reply_speed: { values: ["zelo_pocasi", "pocasi", "srednje", "hitro", "takoj"], ls: ["pace"], desc: "how fast tutor replies appear, takoj = no animation" },
  fullscreen: { values: ["on", "off"], ls: ["stemmind.fullscreen", { on: "1", off: "0" }], desc: "full-screen mode in the browser" },
  calculator: { values: ["sci", "graph", "tools", "pse", "formulas"], ls: ["stemmind.calcMode"], desc: "calculator opens in: scientific, graphing, tools, periodic table, formulas" },
  writing_pad: { values: ["auto", "off"], desc: "touch keypad / handwriting pad opens by itself at tasks (auto) or only on tap (off)" },
  writing_pad_tab: { values: ["keys", "draw"], desc: "pad opens on keypad (keys) or handwriting (draw)" },
  game_sound: { values: ["on", "off"], ls: ["stemmind.gameSound"], desc: "sound in games" },
  game_speed: { values: ["slow", "mid", "fast"], ls: ["stemmind.gamePace"], desc: "game speed" },
};

export const ALL_SETTING_KEYS = [...Object.keys(PROFILE_SETTINGS), ...Object.keys(DEVICE_SETTINGS)];
export const HEX = /^#[0-9a-f]{6}$/i;

// Preveri vrednost nastavitve naprave; vrne normalizirano vrednost ali null.
export function deviceValue(key, value) {
  const def = DEVICE_SETTINGS[key];
  if (!def || typeof value !== "string") return null;
  const v = value.trim();
  if (def.values) return def.values.includes(v) ? v : null;
  if (key === "accent") return v === "random" || v === "default" || HEX.test(v) ? v.toLowerCase() : null;
  if (key.startsWith("color_")) return HEX.test(v) ? v.toLowerCase() : null;
  return null;
}
