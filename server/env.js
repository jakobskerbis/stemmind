// Nastavitve v .env iz časa prejšnjih imen aplikacije (brand.json → legacy, npr. <STARO>_PASSWORD)
// še delujejo: vsako prepišemo v trenutno ime (<IME>_PASSWORD), če to ni nastavljeno posebej.
// Uvozi to datoteko kot prvo v vsaki datoteki, ki bere nastavitve aplikacije (vrstni red uvozov v ES modulih).
import { BRAND, LEGACY } from "./brand.js";

for (const old of LEGACY) {
  const prefix = `${old.env}_`;
  for (const [key, value] of Object.entries(process.env)) {
    if (!key.startsWith(prefix)) continue;
    const name = `${BRAND.env}_${key.slice(prefix.length)}`;
    if (process.env[name] === undefined) process.env[name] = value;
  }
}
