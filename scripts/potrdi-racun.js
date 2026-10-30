// Potrdi e-naslov računa brez e-pošte: node scripts/potrdi-racun.js ime@primer.si
// Za strežnik brez pošiljanja e-pošte (Render brez RESEND_API_KEY): poženi v Render → Shell.
// Kdor ima dostop do strežnika, ima dostop do baze, zato to ni nova luknja.
// Če je naslov v EVKLID_ADMIN_EMAILS, je račun po potrditvi skrbniški.
import "../server/env.js";
import { DatabaseSync } from "node:sqlite";
import { BRAND } from "../server/brand.js";

export function confirmEmail(db, email, now = new Date()) {
  const row = db.prepare("SELECT id, email_verified_at FROM parents WHERE lower(email) = lower(?) AND is_guest = 0").get(String(email).trim());
  if (!row) return { found: false };
  if (row.email_verified_at) return { found: true, already: true };
  db.prepare("UPDATE parents SET email_verified_at = ?, verify_token_hash = NULL WHERE id = ?").run(now.toISOString(), row.id);
  return { found: true, already: false };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const email = process.argv[2];
  if (!email || !email.includes("@")) {
    console.log("Uporaba: node scripts/potrdi-racun.js ime@primer.si");
    process.exit(1);
  }
  const db = new DatabaseSync(process.env.EVKLID_DB || `data/${BRAND.slug}.db`);
  const r = confirmEmail(db, email);
  db.close();
  if (!r.found) {
    console.log(`Računa z naslovom ${email} ni. Najprej se registriraj v aplikaciji.`);
    process.exit(1);
  }
  console.log(r.already ? "Ta e-naslov je že potrjen." : "E-naslov je potrjen. Osveži stran v aplikaciji.");
}
