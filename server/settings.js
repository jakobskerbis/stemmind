// Nastavitve učenca (nadzorna plošča) in njihovo preverjanje.
import { PROGRAMS } from "./university-data.js";
import { ALL_SUBJECTS, SCHOOL_SUBJECTS } from "./subjects.js";

export const ENUMS = {
  subject: ALL_SUBJECTS,
  track: ["REGULAR", "COMPETITION"],
  educational_track: ["OSNOVNA_SOLA", "SREDNJA_SOLA", "UNIVERZA"],
  study_program: ["", ...Object.keys(PROGRAMS)],
  solving_mode: ["A", "B"],
};

export const DEFAULT_SETTINGS = {
  subject: "MAT",
  track: "REGULAR",
  educational_track: "OSNOVNA_SOLA",
  curriculum_level: "8. razred",
  study_program: "",
  solving_mode: "A",
  personality_setting: "prijazen in spodbuden",
};

// Proste besedilne nastavitve gredo v sistemski prompt, zato jih skrajšamo
// in odstranimo prelome vrstic, da ne morejo posnemati novih razdelkov.
export function cleanText(value, maxLen) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n\t]+/g, " ").replace(/\s{2,}/g, " ").trim().slice(0, maxLen);
}

export function normalizeSettings(input = {}) {
  const out = { ...DEFAULT_SETTINGS };
  for (const [key, allowed] of Object.entries(ENUMS)) {
    if (allowed.includes(input[key])) out[key] = input[key];
  }
  if (input.curriculum_level !== undefined) {
    out.curriculum_level = cleanText(input.curriculum_level, 60) || DEFAULT_SETTINGS.curriculum_level;
  }
  // Fakulteta: program je obvezen, tekmovanj ni; brez fakultete programa ne hranimo.
  if (out.educational_track === "UNIVERZA") {
    if (!out.study_program) out.study_program = Object.keys(PROGRAMS)[0];
    out.track = "REGULAR";
  } else {
    out.study_program = "";
    // Strokovni predmeti fakultet (biologija …) v OŠ/SŠ ne obstajajo.
    if (!SCHOOL_SUBJECTS.includes(out.subject)) out.subject = DEFAULT_SETTINGS.subject;
  }
  if (input.personality_setting !== undefined) {
    out.personality_setting = cleanText(input.personality_setting, 200);
  }
  return out;
}

export function normalizeWeaknessList(value) {
  const list = Array.isArray(value) ? value : String(value ?? "").split(",");
  return [...new Set(list.map((w) => cleanText(String(w), 60)).filter(Boolean))].slice(0, 20);
}
