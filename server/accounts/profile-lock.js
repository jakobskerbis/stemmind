// Geslo za vsak profil (j, 2026-10-29: »vsak profil naj ima svoje geslo«).
// Račun (e-naslov + geslo) ima lahko več profilov; vsak profil ima še svoje geslo.
// Profil z geslom je na napravi odprt šele po vpisu gesla. Odklep velja na tej napravi,
// dokler na njej ne odpremo drugega profila istega računa, do odjave ali največ UNLOCK_DAYS.
// Profil brez gesla (stari profili, gost) strežnik ne zaklene; aplikacija ob odprtju zahteva, da ga nastaviš.
import { hashPassword, verifyPassword, needsRehash } from "./auth.js";

export const UNLOCK_DAYS = 30;
export const PROFILE_PASSWORD_MIN = 4;
export const PROFILE_PASSWORD_MAX = 200;

export function migrateProfileLocks(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS profile_passwords (
      student_id INTEGER PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
      hash TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS profile_unlocks (
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      device_id TEXT NOT NULL,
      expires_at INTEGER NOT NULL,            -- ms
      PRIMARY KEY (student_id, device_id)
    );
  `);
}

// Vrne napako (besedilo) ali null, če je geslo profila sprejemljivo.
export function checkProfilePassword(pw) {
  if (typeof pw !== "string" || pw.length < PROFILE_PASSWORD_MIN) return `Geslo profila mora imeti vsaj ${PROFILE_PASSWORD_MIN} znake.`;
  if (pw.length > PROFILE_PASSWORD_MAX) return "Geslo profila je predolgo.";
  return null;
}

export class ProfileLocks {
  constructor(db) {
    this.db = db;
    migrateProfileLocks(db);
  }
  hasPassword(studentId) {
    return !!this.db.prepare("SELECT 1 FROM profile_passwords WHERE student_id = ?").get(studentId);
  }
  // Enaka shema kot geslo računa (auth.js); star zapis ob uspešnem vpisu tiho zamenjamo z močnejšim.
  async verify(studentId, pw) {
    const row = this.db.prepare("SELECT hash FROM profile_passwords WHERE student_id = ?").get(studentId);
    const ok = await verifyPassword(typeof pw === "string" ? pw : "", row?.hash);
    if (!row || typeof pw !== "string" || !ok) return false;
    if (needsRehash(row.hash)) this.db.prepare("UPDATE profile_passwords SET hash = ? WHERE student_id = ? AND hash = ?").run(await hashPassword(pw), studentId, row.hash);
    return true;
  }
  // Novo geslo zaklene profil na vseh napravah.
  async setPassword(studentId, pw) {
    const hash = await hashPassword(pw);
    this.db
      .prepare(
        `INSERT INTO profile_passwords (student_id, hash) VALUES (?, ?)
         ON CONFLICT(student_id) DO UPDATE SET hash = excluded.hash, updated_at = datetime('now')`,
      )
      .run(studentId, hash);
    this.db.prepare("DELETE FROM profile_unlocks WHERE student_id = ?").run(studentId);
  }
  isUnlocked(studentId, deviceId, now = Date.now()) {
    const row = this.db.prepare("SELECT expires_at FROM profile_unlocks WHERE student_id = ? AND device_id = ?").get(studentId, deviceId);
    return !!row && row.expires_at > now;
  }
  // Profil je zaklenjen, če ima geslo in na tej napravi ni odklenjen.
  locked(studentId, deviceId) {
    return this.hasPassword(studentId) && !this.isUnlocked(studentId, deviceId);
  }
  // Odklene profil na tej napravi; drugi profili istega računa se na njej zaklenejo (brat ne odpre sestrinega).
  unlock(studentId, deviceId, siblingIds = [], now = Date.now()) {
    const del = this.db.prepare("DELETE FROM profile_unlocks WHERE student_id = ? AND device_id = ?");
    for (const id of siblingIds) if (id !== studentId) del.run(id, deviceId);
    this.db
      .prepare(
        `INSERT INTO profile_unlocks (student_id, device_id, expires_at) VALUES (?, ?, ?)
         ON CONFLICT(student_id, device_id) DO UPDATE SET expires_at = excluded.expires_at`,
      )
      .run(studentId, deviceId, now + UNLOCK_DAYS * 86400000);
  }
  // Odjava: profili računa se na tej napravi zaklenejo.
  lockDevice(studentIds, deviceId) {
    const del = this.db.prepare("DELETE FROM profile_unlocks WHERE student_id = ? AND device_id = ?");
    for (const id of studentIds) del.run(id, deviceId);
  }
  // »Odjavi vse druge naprave«: profili ostanejo odklenjeni samo na tej napravi.
  lockOtherDevices(studentIds, deviceId) {
    const del = this.db.prepare("DELETE FROM profile_unlocks WHERE student_id = ? AND device_id != ?");
    for (const id of studentIds) del.run(id, deviceId);
  }
}
