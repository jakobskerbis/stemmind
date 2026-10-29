// Zbirke znanja in učni pass (public/zbirke.js). Odklepanje je samo na strežniku: obvladane teme
// (tutor, vaje, preizkus znanja; ne »označi kot obvladano«) in XP sezone odklenejo predmete, odjemalec jih
// samo prikazuje. Vsaka podelitev ostane zapisana (tema, vir, čas); odvzem jo označi, ne izbriše.
import { KNOWLEDGE, KITEM, PASS, PASS_REWARDS, RARITY_TIER, baseId, seasonOf, topicTier } from "../public/zbirke.js";
import { getTopic, getPath, baseTopicIds } from "./curriculum.js";

export const SHOWCASE_MAX = 3;

export function ensureKnowledgeTables(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS knowledge_items (
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      item TEXT NOT NULL,                 -- id predmeta; sezonski s pripono, npr. pass_coat~2026-1
      topic_id TEXT,                      -- tema, ki je predmet prinesla (ali NULL pri passu in kompletih)
      source TEXT,                        -- practice | chat | placement | pass | set
      earned_at TEXT NOT NULL DEFAULT (datetime('now')),
      revoked_at TEXT,                    -- odvzem (npr. goljufanje): zgodovina ostane
      revoke_reason TEXT,
      PRIMARY KEY (student_id, item)
    );
    CREATE TABLE IF NOT EXISTS showcase (
      student_id INTEGER PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
      items TEXT NOT NULL
    );
  `);
}

const nowSql = () => new Date().toISOString().replace("T", " ").slice(0, 19);

// Ali obvladana tema izpolni pogoj predmeta.
function topicMatches(item, topicId) {
  const t = getTopic(topicId);
  const ids = new Set([topicId, ...baseTopicIds(topicId)]);
  if (item.need.t?.some((id) => ids.has(id))) return true;
  if (!t || !item.need.kw || t.subject !== subjectOf(item)) return false;
  const tier = topicTier(getPath(t.path));
  return tier >= RARITY_TIER[item.rarity] && new RegExp(item.need.kw, "i").test(t.name);
}
const SUBJECT = { pse: "KEM", fiz: "FIZ", krivulje: "MAT" };
const subjectOf = (item) => SUBJECT[item.collection];

export class Knowledge {
  constructor(db) {
    this.db = db;
    ensureKnowledgeTables(db);
  }

  rows(id) {
    return this.db.prepare("SELECT item, topic_id, source, earned_at, revoked_at FROM knowledge_items WHERE student_id = ?").all(id);
  }
  owned(id) {
    return this.rows(id).filter((r) => !r.revoked_at).map((r) => r.item);
  }

  // XP sezone za učni pass: brez XP iz iger (te prinesejo kovance), največ PASS.dayCap na dan.
  passXp(id, season = seasonOf()) {
    const days = this.db
      .prepare(
        `SELECT date(created_at) AS d, SUM(amount) AS s FROM xp_events
         WHERE student_id = ? AND amount > 0 AND reason NOT LIKE 'igra:%' AND created_at >= ? AND created_at < ?
         GROUP BY d`,
      )
      .all(id, season.from, season.to);
    return days.reduce((sum, r) => sum + Math.min(PASS.dayCap, r.s), 0);
  }
  pass(id, season = seasonOf()) {
    const xp = this.passXp(id, season);
    const tier = Math.min(PASS.tiers, Math.floor(xp / PASS.perTier));
    return { season: season.key, from: season.from, to: season.to, xp, tier, tiers: PASS.tiers, perTier: PASS.perTier, dayCap: PASS.dayCap, rewards: PASS_REWARDS };
  }

  // Ovrednoti pravila in zapiše nove predmete; vrne nove id-je.
  sync(id) {
    const have = new Map(this.rows(id).map((r) => [r.item, r]));
    const add = [];
    const grant = (item, topic = null, source = null) => {
      if (have.has(item)) return;
      have.set(item, { item });
      add.push([item, topic, source]);
    };
    const mastered = this.db
      .prepare(
        `SELECT topic_id, source FROM topic_state
         WHERE student_id = ? AND status = 'mastered' AND COALESCE(source, '') <> 'manual'
         ORDER BY mastered_at, topic_id`,
      )
      .all(id);
    for (const x of KNOWLEDGE) {
      if (x.need?.t || x.need?.kw) {
        const hit = mastered.find((m) => topicMatches(x, m.topic_id));
        if (hit) grant(x.id, hit.topic_id, hit.source || "practice");
      } else if (x.need?.tek) {
        const tek = mastered.filter((m) => getPath(getTopic(m.topic_id)?.path)?.school === "TEK");
        const chat = tek.find((m) => m.source === "chat");
        if (tek.length >= x.need.tek && (!x.need.chat || chat)) grant(x.id, chat?.topic_id || tek[0].topic_id, "chat");
      }
    }
    // Kompleti: dovolj predmetov iste zbirke (brez kompletov).
    for (const x of KNOWLEDGE.filter((k) => k.set)) {
      const n = [...have.keys()].filter((i) => {
        const k = KITEM[baseId(i)];
        return k && k.collection === x.collection && !k.set && !have.get(i).revoked_at;
      }).length;
      if (n >= x.need.own) grant(x.id, null, "set");
    }
    const p = this.pass(id);
    for (const r of PASS_REWARDS) if (p.tier >= r.tier) grant(`${r.id}~${p.season}`, null, "pass");
    if (add.length) {
      const ins = this.db.prepare("INSERT OR IGNORE INTO knowledge_items (student_id, item, topic_id, source, earned_at) VALUES (?, ?, ?, ?, ?)");
      const at = nowSql();
      for (const [item, topic, source] of add) ins.run(id, item, topic, source, at);
    }
    return add.map(([item]) => item);
  }

  // Odvzem (npr. sumljiv dosežek): predmet izgine iz inventarja, zapis ostane.
  revoke(id, item, reason) {
    return this.db.prepare("UPDATE knowledge_items SET revoked_at = ?, revoke_reason = ? WHERE student_id = ? AND item = ? AND revoked_at IS NULL").run(nowSql(), String(reason || ""), id, item).changes > 0;
  }

  showcase(id) {
    const r = this.db.prepare("SELECT items FROM showcase WHERE student_id = ?").get(id);
    let list = [];
    try {
      list = JSON.parse(r?.items || "[]");
    } catch {}
    const own = new Set(this.owned(id));
    return list.filter((i) => own.has(i)).slice(0, SHOWCASE_MAX);
  }
  setShowcase(id, items) {
    const own = new Set(this.owned(id));
    const clean = [...new Set((Array.isArray(items) ? items : []).map(String))].filter((i) => own.has(i)).slice(0, SHOWCASE_MAX);
    this.db.prepare("INSERT INTO showcase (student_id, items) VALUES (?, ?) ON CONFLICT(student_id) DO UPDATE SET items = excluded.items").run(id, JSON.stringify(clean));
    return clean;
  }

  view(id) {
    const fresh = this.sync(id);
    const items = this.rows(id)
      .filter((r) => !r.revoked_at)
      .map((r) => {
        const t = r.topic_id ? getTopic(r.topic_id) : null;
        return { id: r.item, at: r.earned_at, source: r.source, topic: t ? { id: r.topic_id, name: t.name, path: getPath(t.path)?.label || "" } : null };
      });
    // Zgled teme za pogoj vsakega zaklenjenega predmeta (ime in pot), da so pogoji vnaprej vidni.
    const hints = {};
    for (const x of KNOWLEDGE) {
      const ex = x.need?.t?.[0] && getTopic(x.need.t[0]);
      if (ex) hints[x.id] = { name: ex.name, path: getPath(ex.path)?.label || "", id: x.need.t[0] };
    }
    return { items, fresh, hints, pass: this.pass(id), showcase: this.showcase(id), showcaseMax: SHOWCASE_MAX };
  }
}

export function mountKnowledge(app, knowledge, { loadStudent, avatars }) {
  const full = (id) => ({ ...knowledge.view(id), avatar: avatars.view(id) });
  app.get("/api/students/:id/zbirke", (req, res) => {
    const s = loadStudent(req, res);
    if (s) res.json(full(s.id));
  });
  app.post("/api/students/:id/zbirke/vitrina", (req, res) => {
    const s = loadStudent(req, res);
    if (!s) return;
    if (!Array.isArray(req.body?.items)) return res.status(400).json({ error: "Neveljavna vitrina." });
    knowledge.setShowcase(s.id, req.body.items);
    res.json(full(s.id));
  });
}
