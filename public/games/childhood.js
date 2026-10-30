// Vprašalnik »Katere igre si igral kot otrok?« (j 2026-10-30): učenec izbere zvrsti iger iz otroštva,
// Evklid pa mu v zbirki pokaže svoje izvirne učne igre v tem slogu (lastni liki, risbe in imena; brez
// blagovnih znamk). Zvrst → vrste iger iz engines.js. Shrani se v profil (settings.game_childhood):
// null = vprašalnik še ni bil izpolnjen, [] = preskočen. Isti seznam uporablja strežnik.

export const GENRES = [
  { id: "blocks", emoji: "🧱", engines: ["blocks"] },
  { id: "maze", emoji: "👾", engines: ["maze"] },
  { id: "platform", emoji: "🦘", engines: ["jumper", "castle"] },
  { id: "run", emoji: "🏃", engines: ["runner"] },
  { id: "snake", emoji: "🐍", engines: ["snake"] },
  { id: "paddle", emoji: "🏓", engines: ["bricks"] },
  { id: "space", emoji: "🚀", engines: ["invaders", "meteor"] },
  { id: "crossing", emoji: "🐸", engines: ["frog"] },
  { id: "moles", emoji: "🔨", engines: ["moles"] },
  { id: "flying", emoji: "🐦", engines: ["heli"] },
  { id: "memory", emoji: "🧠", engines: ["pairs"] },
  { id: "cards", emoji: "🃏", engines: ["cards"] },
  { id: "mines", emoji: "💣", engines: ["mines"] },
  { id: "racing", emoji: "🏎️", engines: ["hills"] },
  { id: "bubbles", emoji: "🫧", engines: ["bubbles"] },
  { id: "match", emoji: "💎", engines: ["match"] },
  { id: "sling", emoji: "🎯", engines: ["cannon"] },
  { id: "stack", emoji: "🏗️", engines: ["crane"] },
  { id: "cooking", emoji: "🍔", engines: ["diner"] },
  { id: "pet", emoji: "🐣", engines: ["pet"] },
  { id: "slicing", emoji: "🍉", engines: ["slicer"] },
  { id: "water", emoji: "💧", engines: ["water"] },
  { id: "catch", emoji: "🧺", engines: ["catcher"] },
  { id: "balloons", emoji: "🎈", engines: ["balloons"] },
  { id: "tilt", emoji: "🔮", engines: ["marble"] },
  { id: "lander", emoji: "🌙", engines: ["lander"] },
];
export const GENRE_IDS = GENRES.map((g) => g.id);

// Veljaven seznam zvrsti (neznane in ponovljene izpusti); null ostane null (vprašalnik še ni izpolnjen).
export function cleanChildhood(list) {
  if (list === null) return null;
  const raw = Array.isArray(list) ? list : String(list ?? "").split(",");
  return [...new Set(raw.map((x) => String(x).trim()).filter((x) => GENRE_IDS.includes(x)))];
}

// Vrste iger za izbrane zvrsti, po vrsti izbire.
export const childhoodEngines = (list) => [...new Set((list || []).flatMap((id) => GENRES.find((g) => g.id === id)?.engines || []))];
