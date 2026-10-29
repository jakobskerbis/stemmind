// Igre (razdelek IGRE): najboljši rezultat in stopnja za vsako igro, XP za pravilne odgovore.
// Igra = vrsta igre + pojem, npr. "meteor:frac_add". Naloge nastanejo v brskalniku (public/games/topics.js).
import { gradeInfo } from "../public/regions.js";

const GAME_ID = /^[a-z]{2,20}:[a-z0-9_]{2,30}$/;
const XP_PER_GAME = 20; // največ na igro (1 XP za vsaka 2 pravilna odgovora)
const XP_PER_DAY = 60; // največ na dan iz iger, da igre ne izrinejo učenja

const int = (v, max) => Math.max(0, Math.min(max, Math.floor(Number(v) || 0)));

// Leto šolanja (1–13) za izbiro iger in začetno težavnost; študent = 14.
export function schoolYear(settings = {}) {
  if (settings.educational_track === "UNIVERZA") return 14;
  return gradeInfo(settings.school_system || "SI", settings.curriculum_level)?.level || 8;
}

export function mountGames(app, store, { loadStudent, progress }) {
  const db = store.db;
  db.exec(`
    CREATE TABLE IF NOT EXISTS game_scores (
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      game TEXT NOT NULL,
      best INTEGER NOT NULL DEFAULT 0,
      plays INTEGER NOT NULL DEFAULT 0,
      tier INTEGER NOT NULL DEFAULT 1,
      correct INTEGER NOT NULL DEFAULT 0,
      wrong INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      PRIMARY KEY (student_id, game)
    );
  `);
  const xpToday = (id) =>
    db
      .prepare("SELECT COALESCE(SUM(amount),0) AS s FROM xp_events WHERE student_id = ? AND reason LIKE 'igra:%' AND date(created_at) = date('now')")
      .get(id).s;

  app.get("/api/students/:id/games", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const rows = db.prepare("SELECT game, best, plays, tier FROM game_scores WHERE student_id = ?").all(s.id);
    const games = {};
    const concepts = {}; // zadnja stopnja pri pojmu (čez vse vrste iger)
    for (const r of rows) {
      games[r.game] = { best: r.best, plays: r.plays, tier: r.tier };
      const c = r.game.split(":")[1];
      concepts[c] = Math.max(concepts[c] || 1, r.tier);
    }
    res.json({ year: schoolYear(s.settings), games, concepts, xpToday: xpToday(s.id), xpPerDay: XP_PER_DAY });
  });

  app.post("/api/students/:id/games/result", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    const game = String(req.body?.game || "");
    if (!GAME_ID.test(game)) return res.status(400).json({ error: "Neznana igra." });
    const score = int(req.body.score, 1_000_000);
    const correct = int(req.body.correct, 1000);
    const wrong = int(req.body.wrong, 1000);
    const tier = Math.max(1, int(req.body.tier, 3));
    const prev = db.prepare("SELECT best FROM game_scores WHERE student_id = ? AND game = ?").get(s.id, game);
    db.prepare(
      `INSERT INTO game_scores (student_id, game, best, plays, tier, correct, wrong) VALUES (?, ?, ?, 1, ?, ?, ?)
       ON CONFLICT(student_id, game) DO UPDATE SET best = MAX(best, excluded.best), plays = plays + 1, tier = excluded.tier,
         correct = correct + excluded.correct, wrong = wrong + excluded.wrong, updated_at = datetime('now')`,
    ).run(s.id, game, score, tier, correct, wrong);
    const room = Math.max(0, XP_PER_DAY - xpToday(s.id));
    const xp = Math.min(XP_PER_GAME, Math.floor(correct / 2), room);
    const summary = xp > 0 ? progress.award(s.id, [[xp, `igra: ${game}`]]) : null;
    res.json({
      xp,
      best: Math.max(prev?.best || 0, score),
      newBest: !!prev && score > prev.best,
      capped: room <= Math.floor(correct / 2) && correct >= 2,
      total: summary?.total ?? null,
    });
  });
}
