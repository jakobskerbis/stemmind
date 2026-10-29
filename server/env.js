// Aplikacija se je do 29. 10. 2026 imenovala STEMMind. Stare nastavitve v .env (STEMMIND_…)
// še delujejo: vsako prepišemo v ustrezno KOMPRENO_…, če ta ni nastavljena posebej.
// Uvozi to datoteko kot prvo v vsaki datoteki, ki bere KOMPRENO_… (vrstni red uvozov v ES modulih).
const OLD = "STEMMIND_";
for (const [key, value] of Object.entries(process.env)) {
  if (!key.startsWith(OLD)) continue;
  const name = `KOMPRENO_${key.slice(OLD.length)}`;
  if (process.env[name] === undefined) process.env[name] = value;
}
