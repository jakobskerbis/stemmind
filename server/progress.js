// Napredovanje: prilagodljiva težavnost, obvladanje tem, odklepanje sklopov,
// preizkus znanja, razmaknjeno ponavljanje, XP in lestvica.
import crypto from "node:crypto";
import { getPath, getTopic } from "./curriculum.js";
import { generateTask, hasGenerator, publicTask } from "./practice/index.js";
import { checkAnswer } from "./practice/check.js";

export const RULES = {
  levelUpStreak: 3, // 3 pravilni zapored -> težje
  masteryWindow: 10, // zadnjih 10 nalog
  masteryCorrect: 8, // vsaj 8 pravilnih v prvem poskusu
  masteryHard: 2, // od tega vsaj 2 na najvišji težavnosti
  maxAttempts: 3, // po 3 napačnih pokažemo rešen zgled
  reviewDays: [1, 3, 7, 21], // razmaki ponavljanja
  placementPass: 0.8,
  placementTasks: 6,
  reviewTasks: 6,
};

const XP = {
  base: (level) => 5 + 5 * level, // 10 / 15 / 20
  minWithHelp: 2,
  fixBonus: 3,
  mastery: 25,
  placement: 40,
  dailyStreak: (days) => 5 * Math.min(days, 7),
};

const nowSql = () => new Date().toISOString().replace("T", " ").slice(0, 19);
const addDays = (d) => new Date(Date.now() + d * 86400000).toISOString().replace("T", " ").slice(0, 19);
const today = () => new Date().toISOString().slice(0, 10);

export class Progress {
  constructor(store) {
    this.store = store;
    this.db = store.db;
  }

  // ---------- stanje teme ----------
  state(studentId, topicId) {
    return (
      this.db.prepare("SELECT * FROM topic_state WHERE student_id = ? AND topic_id = ?").get(studentId, topicId) || {
        student_id: studentId,
        topic_id: topicId,
        level: 1,
        streak: 0,
        status: "new",
        source: null,
        mastered_at: null,
        review_stage: 0,
        review_due: null,
        seen_example: 0,
      }
    );
  }
  saveState(s) {
    this.db
      .prepare(
        `INSERT INTO topic_state (student_id, topic_id, level, streak, status, source, mastered_at, review_stage, review_due, seen_example, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
         ON CONFLICT(student_id, topic_id) DO UPDATE SET level = excluded.level, streak = excluded.streak, status = excluded.status,
           source = excluded.source, mastered_at = excluded.mastered_at, review_stage = excluded.review_stage,
           review_due = excluded.review_due, seen_example = excluded.seen_example, updated_at = datetime('now')`,
      )
      .run(s.student_id, s.topic_id, s.level, s.streak, s.status, s.source, s.mastered_at, s.review_stage, s.review_due, s.seen_example);
  }
  markMastered(studentId, topicId, source) {
    const s = this.state(studentId, topicId);
    if (s.status === "mastered") return false;
    Object.assign(s, { status: "mastered", source, mastered_at: nowSql(), review_stage: 0, review_due: addDays(RULES.reviewDays[0]) });
    this.saveState(s);
    return true;
  }
  setStatus(studentId, topicId, status) {
    if (status === "mastered") return this.markMastered(studentId, topicId, "manual");
    const s = this.state(studentId, topicId);
    Object.assign(s, { status, mastered_at: null, review_due: null, review_stage: 0, source: null });
    this.saveState(s);
    return true;
  }

  // ---------- pregled učne poti ----------
  pathView(studentId, pathKey) {
    const path = getPath(pathKey);
    if (!path) return null;
    const states = Object.fromEntries(
      this.db
        .prepare("SELECT * FROM topic_state WHERE student_id = ? AND topic_id LIKE ?")
        .all(studentId, `${pathKey}/%`)
        .map((s) => [s.topic_id, s]),
    );
    const now = nowSql();
    const units = path.units.map((u) => {
      const topics = u.topics.map((t) => {
        const s = states[t.id] || {};
        return {
          id: t.id,
          name: t.name,
          goals: t.goals,
          practice: hasGenerator(t.id),
          status: s.status || "new",
          level: s.level || 1,
          review_due: s.review_due || null,
          due: !!(s.status === "mastered" && s.review_due && s.review_due <= now),
        };
      });
      const gated = topics.filter((t) => t.practice);
      const relevant = gated.length ? gated : topics;
      return {
        title: u.title,
        topics,
        hasPractice: gated.length > 0,
        started: topics.some((t) => t.status !== "new"),
        mastered: relevant.every((t) => t.status === "mastered"),
        progress: relevant.filter((t) => t.status === "mastered").length / relevant.length,
      };
    });
    // Odklepanje: sklop z vajami je zaklenjen, dokler ni obvladan prejšnji sklop z vajami
    // (razen če ga je učenec že začel ali opravil preizkus znanja).
    let prevGate = null;
    for (const u of units) {
      u.locked = !!(u.hasPractice && prevGate && !prevGate.mastered && !u.started);
      if (u.hasPractice) prevGate = u;
    }
    const next =
      units.flatMap((u) => (u.locked ? [] : u.topics)).find((t) => t.status !== "mastered") || null;
    return { key: path.key, label: path.label, units, next, dueCount: this.dueTopics(studentId).length };
  }

  dueTopics(studentId) {
    return this.db
      .prepare(
        "SELECT topic_id FROM topic_state WHERE student_id = ? AND status = 'mastered' AND review_due IS NOT NULL AND review_due <= ? ORDER BY review_due",
      )
      .all(studentId, nowSql())
      .map((r) => r.topic_id)
      .filter((id) => hasGenerator(id));
  }

  // ---------- naloge ----------
  saveTask(studentId, task, mode, sessionId = null) {
    const r = this.db
      .prepare("INSERT INTO tasks (student_id, topic_id, mode, session_id, level, payload) VALUES (?, ?, ?, ?, ?, ?)")
      .run(studentId, task.topicId, mode, sessionId, task.level, JSON.stringify(task));
    return Number(r.lastInsertRowid);
  }
  getTask(id) {
    const t = this.db.prepare("SELECT * FROM tasks WHERE id = ?").get(id);
    return t && { ...t, payload: JSON.parse(t.payload) };
  }

  // Naslednja vaja pri temi. Prvič pri temi najprej pokažemo rešen zgled.
  nextPractice(studentId, topicId) {
    if (!hasGenerator(topicId)) return null;
    const s = this.state(studentId, topicId);
    if (!s.seen_example) {
      const ex = generateTask(topicId, 1);
      s.seen_example = 1;
      if (s.status === "new") s.status = "learning";
      this.saveState(s);
      return { example: { ...publicTask(ex), solution: ex.solution, hint: ex.hint } };
    }
    if (s.status === "new") {
      s.status = "learning";
      this.saveState(s);
    }
    const task = generateTask(topicId, s.level);
    const id = this.saveTask(studentId, task, "practice");
    return { task: { id, mode: "practice", ...publicTask(task) }, state: { level: s.level, streak: s.streak } };
  }

  // Ponavljanje: naloge iz več tem, ki so na vrsti, prepletene med sabo.
  startReview(studentId) {
    const due = this.dueTopics(studentId);
    if (!due.length) return null;
    const sessionId = crypto.randomUUID();
    const ids = [];
    for (let i = 0; i < Math.min(RULES.reviewTasks, Math.max(due.length, 3)); i++) {
      const topicId = due[i % due.length];
      ids.push(this.saveTask(studentId, generateTask(topicId, 2), "review", sessionId));
    }
    return this.sessionNext(sessionId);
  }

  // Preizkus znanja za sklop: ob uspehu so vse teme sklopa obvladane.
  startPlacement(studentId, pathKey, unitIndex) {
    const unit = getPath(pathKey)?.units[unitIndex];
    if (!unit) return null;
    const topics = unit.topics.filter((t) => hasGenerator(t.id));
    if (!topics.length) return null;
    const sessionId = crypto.randomUUID();
    const n = Math.max(RULES.placementTasks, topics.length);
    for (let i = 0; i < n; i++) {
      const t = topics[i % topics.length];
      this.saveTask(studentId, generateTask(t.id, i % 2 ? 3 : 2), "placement", sessionId);
    }
    return this.sessionNext(sessionId);
  }

  sessionNext(sessionId) {
    const all = this.db.prepare("SELECT * FROM tasks WHERE session_id = ? ORDER BY id").all(sessionId);
    const open = all.find((t) => !t.solved && t.attempts < (t.mode === "placement" ? 1 : RULES.maxAttempts));
    const done = all.filter((t) => t.solved || t.attempts >= (t.mode === "placement" ? 1 : RULES.maxAttempts)).length;
    if (!open) return { finished: true, sessionId, total: all.length, correct: all.filter((t) => t.first_try_correct).length };
    const payload = JSON.parse(open.payload);
    return {
      sessionId,
      index: done + 1,
      total: all.length,
      task: { id: open.id, mode: open.mode, topicName: getTopic(open.topic_id)?.name, ...publicTask(payload) },
    };
  }

  // ---------- odgovor ----------
  answer(studentId, taskId, input) {
    const row = this.getTask(taskId);
    if (!row || row.student_id !== studentId) return { error: "Naloga ne obstaja." };
    const maxAttempts = row.mode === "placement" ? 1 : RULES.maxAttempts;
    if (row.solved || row.attempts >= maxAttempts) return { error: "Ta naloga je že zaključena." };

    const task = row.payload;
    const res = checkAnswer(task.answer, input);
    const out = { kind: res.kind, message: res.message || null };

    // Napake v zapisu (manjka enota, neokrajšan ulomek ...) ne štejemo kot poskus.
    if (["format", "unit", "simplify"].includes(res.kind)) {
      return { ...out, retry: true };
    }

    const correct = res.kind === "correct";
    const attempts = row.attempts + 1;
    const firstTry = row.attempts === 0;
    this.db
      .prepare(
        `UPDATE tasks SET attempts = ?, solved = ?, last_answer = ?, first_try_correct = COALESCE(first_try_correct, ?) WHERE id = ?`,
      )
      .run(attempts, correct ? 1 : 0, String(input).slice(0, 200), firstTry ? (correct ? 1 : 0) : null, taskId);

    const topic = getTopic(row.topic_id);
    // Analitika za šibke točke (enako kot META iz klepeta)
    this.store.addEvent({
      student_id: studentId,
      conversation_id: null,
      message_id: null,
      subject: topic?.subject ?? null,
      topic: topic?.name ?? null,
      error: correct ? 0 : 1,
      mode: "V",
      flag: "none",
    });

    if (row.mode === "placement") {
      out.correct = correct;
      if (!correct && res.kind === "rounding") out.message = res.message;
      out.next = this.sessionNext(row.session_id);
      if (out.next.finished) out.placement = this.finishPlacement(studentId, row.session_id);
      return out;
    }

    const s = this.state(studentId, row.topic_id);
    if (correct) {
      out.correct = true;
      out.solution = task.solution;
      const helped = row.hint_used || attempts > 1;
      let xp = helped ? Math.max(XP.minWithHelp, Math.floor(XP.base(row.level) / 2)) : XP.base(row.level);
      const reasons = [[xp, helped ? "pravilno (s pomočjo)" : "pravilno"]];
      if (attempts > 1) reasons.push([XP.fixBonus, "popravljena napaka"]);
      out.xp = this.award(studentId, reasons);

      if (row.mode === "practice") {
        if (firstTry) {
          s.streak += 1;
          if (s.streak >= RULES.levelUpStreak && s.level < 3) {
            s.level += 1;
            s.streak = 0;
            out.levelUp = s.level;
          }
        }
        this.saveState(s);
        if (s.status !== "mastered" && this.checkMastery(studentId, row.topic_id)) {
          this.markMastered(studentId, row.topic_id, "practice");
          out.mastered = true;
          out.xp = this.award(studentId, [[XP.mastery, "obvladana tema"]], out.xp);
        }
      }
      if (row.mode === "review" && firstTry) this.advanceReview(studentId, row.topic_id, true);
      if (row.mode === "review") out.next = this.sessionNext(row.session_id);
      // Samorazlaga: občasno vprašanje »zakaj?«
      if (Math.random() < 0.3) out.selfExplain = "Razloži sam sebi v enem stavku: zakaj je bil ključni korak pravilen?";
      return out;
    }

    // Napačno
    out.correct = false;
    if (row.mode === "practice" && firstTry) {
      s.streak = 0;
      if (s.level > 1) {
        s.level -= 1;
        out.levelDown = s.level;
      }
      this.saveState(s);
    }
    if (row.mode === "review" && firstTry) this.advanceReview(studentId, row.topic_id, false);
    this.db.prepare("UPDATE tasks SET hint_used = 1 WHERE id = ?").run(taskId);
    out.hint = task.hint;
    if (res.kind === "rounding") out.message = res.message;
    else out.message = "Ni še pravilno. Poglej namig in poskusi znova. Kje si se zataknil?";
    out.attemptsLeft = maxAttempts - attempts;
    if (out.attemptsLeft <= 0) {
      // Po treh poskusih: rešen zgled (učenje iz zgleda), nato nova naloga.
      out.solution = task.solution;
      out.message = "Poglejva rešen zgled, nato poskusiš podobno nalogo.";
    }
    if (row.mode === "review" && out.attemptsLeft <= 0) out.next = this.sessionNext(row.session_id);
    return out;
  }

  checkMastery(studentId, topicId) {
    const last = this.db
      .prepare(
        `SELECT first_try_correct, level FROM tasks
         WHERE student_id = ? AND topic_id = ? AND mode IN ('practice','review') AND first_try_correct IS NOT NULL
         ORDER BY id DESC LIMIT ?`,
      )
      .all(studentId, topicId, RULES.masteryWindow);
    const correct = last.filter((t) => t.first_try_correct).length;
    const hard = last.filter((t) => t.first_try_correct && t.level >= 3).length;
    return correct >= RULES.masteryCorrect && hard >= RULES.masteryHard;
  }

  advanceReview(studentId, topicId, ok) {
    const s = this.state(studentId, topicId);
    if (s.status !== "mastered") return;
    if (ok) {
      s.review_stage += 1;
      s.review_due = s.review_stage < RULES.reviewDays.length ? addDays(RULES.reviewDays[s.review_stage]) : null;
    } else {
      s.review_stage = 0;
      s.review_due = addDays(RULES.reviewDays[0]);
    }
    this.saveState(s);
  }

  finishPlacement(studentId, sessionId) {
    const all = this.db.prepare("SELECT * FROM tasks WHERE session_id = ?").all(sessionId);
    const correct = all.filter((t) => t.first_try_correct).length;
    const passed = correct / all.length >= RULES.placementPass;
    const topics = [...new Set(all.map((t) => t.topic_id))];
    let xp = null;
    if (passed) {
      // Vse teme sklopa (tudi brez vaj) štejemo kot obvladane.
      const t0 = getTopic(topics[0]);
      const unit = getPath(t0.path).units[t0.unitIndex];
      for (const t of unit.topics) this.markMastered(studentId, t.id, "placement");
      xp = this.award(studentId, [[XP.placement, "preizkus znanja"]]);
    } else {
      for (const id of topics) {
        const s = this.state(studentId, id);
        if (s.status === "new") {
          s.status = "learning";
          this.saveState(s);
        }
      }
    }
    return { passed, correct, total: all.length, xp };
  }

  // ---------- XP ----------
  award(studentId, items, prev = null) {
    const insert = this.db.prepare("INSERT INTO xp_events (student_id, amount, reason) VALUES (?, ?, ?)");
    const firstToday = !this.db
      .prepare("SELECT 1 FROM xp_events WHERE student_id = ? AND date(created_at) = date('now') LIMIT 1")
      .get(studentId);
    const all = [...items];
    if (firstToday) {
      const streak = this.dayStreak(studentId) + 1;
      if (streak > 1) all.push([XP.dailyStreak(streak), `${streak} dni zapored`]);
    }
    for (const [amount, reason] of all) insert.run(studentId, amount, reason);
    const gained = all.reduce((s, [a]) => s + a, 0) + (prev?.gained || 0);
    return { gained, items: [...(prev?.items || []), ...all.map(([amount, reason]) => ({ amount, reason }))], ...this.xpSummary(studentId) };
  }

  // Koliko zaporednih dni do včeraj je učenec zbiral XP.
  dayStreak(studentId) {
    const days = this.db
      .prepare("SELECT DISTINCT date(created_at) AS d FROM xp_events WHERE student_id = ? ORDER BY d DESC LIMIT 400")
      .all(studentId)
      .map((r) => r.d);
    const set = new Set(days);
    let streak = 0;
    const d = new Date();
    if (set.has(today())) streak = 1;
    for (let i = 1; i < 400; i++) {
      const day = new Date(d.getTime() - i * 86400000).toISOString().slice(0, 10);
      if (!set.has(day)) break;
      streak += 1;
    }
    return streak;
  }

  xpSummary(studentId) {
    const total = this.db.prepare("SELECT COALESCE(SUM(amount),0) AS s FROM xp_events WHERE student_id = ?").get(studentId).s;
    const week = this.db
      .prepare("SELECT COALESCE(SUM(amount),0) AS s FROM xp_events WHERE student_id = ? AND created_at >= ?")
      .get(studentId, weekStart()).s;
    return { total, week, streak: this.dayStreak(studentId), level: Math.floor(Math.sqrt(total / 50)) + 1 };
  }

  // Tedenska lestvica med učenci te namestitve (samo vzdevki).
  leaderboard() {
    return this.db
      .prepare(
        `SELECT s.id, s.name, COALESCE(SUM(x.amount), 0) AS xp
         FROM students s LEFT JOIN xp_events x ON x.student_id = s.id AND x.created_at >= ?
         GROUP BY s.id ORDER BY xp DESC, s.name LIMIT 30`,
      )
      .all(weekStart());
  }
}

// Ponedeljek tega tedna, 00:00 (UTC)
function weekStart() {
  const d = new Date();
  const day = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - day);
  return d.toISOString().slice(0, 10) + " 00:00:00";
}
