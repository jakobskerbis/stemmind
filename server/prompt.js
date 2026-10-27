// Sestavi sistemski prompt iz predloge in aktivnih nastavitev.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cleanText } from "./settings.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATE_PATH = process.env.STEMMIND_PROMPT_PATH || path.join(here, "..", "prompts", "system_prompt.md");

let cached = null;
export function loadTemplate() {
  if (!cached) cached = fs.readFileSync(TEMPLATE_PATH, "utf8");
  return cached;
}

const PLACEHOLDERS = [
  "student_name",
  "subject",
  "track",
  "educational_track",
  "curriculum_level",
  "solving_mode",
  "personality_setting",
  "weaknesses",
  "learning_path",
];

// settings: normalizirane nastavitve; weaknesses: seznam nizov.
export function buildSystemPrompt({ settings, weaknesses = [], studentName = "", learningPath = "" }, template = loadTemplate()) {
  const values = {
    learning_path: learningPath || "(Prost pogovor: ni izbrane teme učne poti.)",
    ...settings,
    student_name: cleanText(studentName, 40) || "(ni podano)",
    personality_setting: settings.personality_setting || "nevtralna",
    weaknesses: weaknesses.length ? weaknesses.join(", ") : "(še ni podatkov)",
  };
  // Zamenjamo samo znana imena, da LaTeX zapisi kot {,} ostanejo nedotaknjeni.
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    PLACEHOLDERS.includes(key) ? String(values[key] ?? "") : match,
  );
}
