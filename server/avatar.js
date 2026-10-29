// Kovanci in avatar: pravilni odgovori v igrah prinesejo kovance, z njimi učenec kupuje dele avatarja
// (public/avatar.js). Brez pravega denarja. Avatar je edino, kar učenec izbere in vidijo drugi (lige, razred).
import { ITEM, SLOTS, DEFAULT_AVATAR, COINS_PER_CORRECT, COINS_PER_DAY, cleanAvatar } from "../public/avatar.js";
import { ensureKnowledgeTables } from "./zbirke.js";

export function ensureAvatarTables(db) {
  ensureKnowledgeTables(db); // predmeti za znanje (server/zbirke.js) so tudi del inventarja
  db.exec(`
    CREATE TABLE IF NOT EXISTS coin_events (
      id INTEGER PRIMARY KEY,
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      amount INTEGER NOT NULL,
      reason TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS coin_events_student ON coin_events(student_id, created_at);
    CREATE TABLE IF NOT EXISTS avatar_items (
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      item TEXT NOT NULL,
      bought_at TEXT NOT NULL DEFAULT (datetime('now')),
      PRIMARY KEY (student_id, item)
    );
    CREATE TABLE IF NOT EXISTS avatar_state (
      student_id INTEGER PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
      equipped TEXT NOT NULL
    );
  `);
}

// Shranjen avatar za prikaz drugim (lige, razred); samo znani deli.
export function publicAvatar(json) {
  if (!json) return null;
  try {
    return cleanAvatar(JSON.parse(json), [], true);
  } catch {
    return null;
  }
}

export class Avatars {
  constructor(db) {
    this.db = db;
    ensureAvatarTables(db);
  }
  balance(id) {
    return this.db.prepare("SELECT COALESCE(SUM(amount),0) AS s FROM coin_events WHERE student_id = ?").get(id).s;
  }
  earnedToday(id) {
    return this.db.prepare("SELECT COALESCE(SUM(amount),0) AS s FROM coin_events WHERE student_id = ? AND amount > 0 AND date(created_at) = date('now')").get(id).s;
  }
  // Kupljeni deli in predmeti za znanje (brez odvzetih).
  owned(id) {
    return this.db
      .prepare("SELECT item FROM avatar_items WHERE student_id = ? UNION SELECT item FROM knowledge_items WHERE student_id = ? AND revoked_at IS NULL")
      .all(id, id)
      .map((r) => r.item);
  }
  // Izbrani deli; brez shranjenega avatarja null (drugi vidijo privzetega).
  equipped(id) {
    const r = this.db.prepare("SELECT equipped FROM avatar_state WHERE student_id = ?").get(id);
    if (!r) return null;
    try {
      return cleanAvatar(JSON.parse(r.equipped), this.owned(id));
    } catch {
      return { ...DEFAULT_AVATAR };
    }
  }
  // Kovanci za pravilne odgovore v igri, največ COINS_PER_DAY na dan.
  award(id, correct, reason) {
    const room = Math.max(0, COINS_PER_DAY - this.earnedToday(id));
    const n = Math.min(room, Math.max(0, Math.floor(correct)) * COINS_PER_CORRECT);
    if (n > 0) this.db.prepare("INSERT INTO coin_events (student_id, amount, reason) VALUES (?, ?, ?)").run(id, n, reason);
    return n;
  }
  buy(id, itemId) {
    const x = ITEM[itemId];
    if (!x) return { error: "unknown" };
    if (x.earn) return { error: "earn" }; // predmeti za znanje niso naprodaj
    if (x.price === 0 || this.owned(id).includes(x.id)) return { ok: true };
    this.db.exec("BEGIN IMMEDIATE");
    try {
      if (this.balance(id) < x.price) {
        this.db.exec("ROLLBACK");
        return { error: "coins" };
      }
      this.db.prepare("INSERT INTO coin_events (student_id, amount, reason) VALUES (?, ?, ?)").run(id, -x.price, `avatar: ${x.id}`);
      this.db.prepare("INSERT OR IGNORE INTO avatar_items (student_id, item) VALUES (?, ?)").run(id, x.id);
      this.db.exec("COMMIT");
      return { ok: true };
    } catch (e) {
      this.db.exec("ROLLBACK");
      throw e;
    }
  }
  equip(id, eq) {
    const clean = cleanAvatar(eq, this.owned(id));
    this.db
      .prepare("INSERT INTO avatar_state (student_id, equipped) VALUES (?, ?) ON CONFLICT(student_id) DO UPDATE SET equipped = excluded.equipped")
      .run(id, JSON.stringify(clean));
    return clean;
  }
  view(id) {
    return { coins: this.balance(id), earnedToday: this.earnedToday(id), perDay: COINS_PER_DAY, owned: this.owned(id), equipped: this.equipped(id) || { ...DEFAULT_AVATAR }, saved: !!this.equipped(id) };
  }
}

export function mountAvatar(app, avatars, { loadStudent }) {
  app.get("/api/students/:id/avatar", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    res.json(avatars.view(s.id));
  });
  app.post("/api/students/:id/avatar/buy", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const r = avatars.buy(s.id, String(req.body?.item || ""));
    if (r.error) return res.status(400).json({ error: r.error === "coins" ? "Premalo kovancev." : r.error === "earn" ? "Ta predmet se odklene samo z znanjem." : "Neznan predmet." });
    res.json(avatars.view(s.id));
  });
  app.post("/api/students/:id/avatar", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const eq = req.body?.equipped;
    if (!eq || typeof eq !== "object" || Object.keys(eq).some((k) => !SLOTS.includes(k))) return res.status(400).json({ error: "Neveljaven avatar." });
    avatars.equip(s.id, eq);
    res.json(avatars.view(s.id));
  });
}
