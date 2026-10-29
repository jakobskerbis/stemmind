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
  data_mode: { values: ["auto", "lite", "normal"], desc: "light mode (less data, shorter replies): auto = on slow connection, lite = always, normal = never" },
  goal: { values: ["sprotno", "test", "npz", "matura", "tekmovanje", "izpit"], desc: "student's goal: sprotno = everyday learning, test = school test, npz (OŠ), matura (SŠ), tekmovanje (competition), izpit (faculty / regional exam)" },
  goal_date: { desc: "date of the goal 'YYYY-MM-DD', or '' to delete it (daily reminder at 12:00 until then)" },
  goal_reminder: { values: ["on", "off"], desc: "daily reminder at 12:00 until goal_date" },
  weak_points: { list: true, desc: "student's own list of weak points (whole new list, replaces the old one), e.g. ['ulomki', 'pretvarjanje enot']" },
};

// Nastavitve te naprave (localStorage); strežnik jih ne hrani, odjemalec jih uporabi takoj.
// ls: ključ v localStorage in preslikava vrednosti; brez ls ima nastavitev svojo kodo v public/chat-settings.js.
export const DEVICE_SETTINGS = {
  style: { values: ["cist", "igriv", "temen"], desc: "visual style: cist = clean (default), igriv = playful/rounded, temen = always dark" },
  theme: { values: ["light", "dark", "system"], desc: "light / dark mode, system = follow the device (ignored in style temen)" },
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
