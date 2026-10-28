// Sestavi sistemski prompt iz predloge in aktivnih nastavitev.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cleanText } from "./settings.js";
import { studyProgramPrompt } from "./curriculum.js";
import { langInfo } from "../public/i18n/languages.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATE_PATH = process.env.STEMMIND_PROMPT_PATH || path.join(here, "..", "prompts", "system_prompt.md");

// Vrstica, ki loči stalni del prompta (enak za vse učence, predpomnjen pri
// Claude API) od nastavitev učenca, ki jih vstavi strežnik.
export const SPLIT_MARKER = "<!-- STEMMIND:NASTAVITVE";

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
  "study_program",
  "solving_mode",
  "personality_setting",
  "weaknesses",
  "learning_path",
  "language",
];

// settings: normalizirane nastavitve; weaknesses: seznam nizov.
export function buildSystemPrompt({ settings, weaknesses = [], studentName = "", learningPath = "" }, template = loadTemplate()) {
  const values = {
    learning_path: learningPath || "(Prost pogovor: ni izbrane teme učne poti.)",
    ...settings,
    study_program: studyProgramPrompt(settings),
    student_name: cleanText(studentName, 40) || "(ni podano)",
    personality_setting: settings.personality_setting || "nevtralna",
    weaknesses: weaknesses.length ? weaknesses.join(", ") : "(še ni podatkov)",
    language: languagePrompt(settings.language, settings.region),
  };
  // Zamenjamo samo znana imena, da LaTeX zapisi kot {,} ostanejo nedotaknjeni.
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    PLACEHOLDERS.includes(key) ? String(values[key] ?? "") : match,
  );
}

// Razdeli sestavljeni prompt na stalni del (predpomnjen) in del z nastavitvami.
// Vrne bloke za polje `system` Claude API; če oznake ni, en sam blok.
export function systemBlocks(prompt, { cacheStatic = true } = {}) {
  const at = prompt.indexOf(SPLIT_MARKER);
  if (at === -1) return [{ type: "text", text: prompt }];
  const end = prompt.indexOf("\n", at);
  const staticPart = prompt.slice(0, at).trimEnd();
  const dynamicPart = (end === -1 ? "" : prompt.slice(end + 1)).trim();
  const blocks = [{ type: "text", text: staticPart }];
  if (cacheStatic) blocks[0].cache_control = { type: "ephemeral" };
  if (dynamicPart) blocks.push({ type: "text", text: dynamicPart });
  return blocks;
}

// Jezik pogovora za prompt, npr. »slovenščina (sl)« ali »German – Deutsch (de)«.
export function languagePrompt(code, region = "") {
  const l = langInfo(code || "sl");
  const base = l.code === "sl" ? "slovenščina (sl)" : `${l.english} – ${l.native} (${l.code})`;
  if (!region || (l.code === "sl" && region === "SI")) return base;
  let name = region;
  try {
    name = new Intl.DisplayNames(["en"], { type: "region" }).of(region) || region;
  } catch {}
  return `${base}, regija: ${name} (${region})`;
}
