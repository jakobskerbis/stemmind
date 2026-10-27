// Poraba AI: beleženje žetonov in stroška, dnevne omejitve, mesečni proračun.
import { costUsd } from "./claude.js";

const num = (k, d) => {
  const v = Number(process.env[k]);
  return Number.isFinite(v) && process.env[k] !== "" && process.env[k] !== undefined ? v : d;
};

export const LIMITS = {
  dailyQuestions: () => num("STEMMIND_DAILY_QUESTIONS", 0), // 0 = brez omejitve
  monthlyBudgetUsd: () => num("STEMMIND_MONTHLY_BUDGET_USD", 0), // 0 = brez omejitve
  studentMonthlyUsd: () => num("STEMMIND_STUDENT_MONTHLY_USD", 0),
  alertRatio: 0.8,
  historyTurns: () => num("STEMMIND_HISTORY_TURNS", 10),
};

export class Usage {
  constructor(db) {
    this.db = db;
  }
  log(studentId, model, usage, kind = "chat") {
    const cost = costUsd(model, usage || {});
    this.db
      .prepare(
        `INSERT INTO usage (student_id, model, kind, input_tokens, output_tokens, cache_read_tokens, cache_write_tokens, cost_usd)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        studentId,
        model,
        kind,
        usage?.input_tokens || 0,
        usage?.output_tokens || 0,
        usage?.cache_read_input_tokens || 0,
        usage?.cache_creation_input_tokens || 0,
        cost,
      );
    const month = this.monthTotal();
    const budget = LIMITS.monthlyBudgetUsd();
    if (budget && month >= budget * LIMITS.alertRatio && month - cost < budget * LIMITS.alertRatio) {
      console.warn(`[stemmind] OPOZORILO: porabljenih ${Math.round((month / budget) * 100)} % mesečnega proračuna (${month.toFixed(2)} $).`);
    }
    return cost;
  }
  monthTotal(studentId = null) {
    const q = `SELECT COALESCE(SUM(cost_usd),0) AS s FROM usage WHERE created_at >= date('now','start of month')${studentId ? " AND student_id = ?" : ""}`;
    return studentId ? this.db.prepare(q).get(studentId).s : this.db.prepare(q).get().s;
  }
  questionsToday(studentId) {
    return this.db
      .prepare(
        `SELECT COUNT(*) AS n FROM messages m JOIN conversations c ON c.id = m.conversation_id
         WHERE c.student_id = ? AND m.role = 'user' AND date(m.created_at) = date('now')`,
      )
      .get(studentId).n;
  }
  // Vrne besedilo razloga, če je klepet trenutno onemogočen, sicer null.
  blockReason(studentId) {
    const daily = LIMITS.dailyQuestions();
    if (daily && this.questionsToday(studentId) >= daily) {
      return `Danes si porabil vseh ${daily} vprašanj za inštruktorja. Jutri jih spet dobiš. Do takrat lahko neomejeno vadiš v Vadnici.`;
    }
    const budget = LIMITS.monthlyBudgetUsd();
    if (budget && this.monthTotal() >= budget) {
      return "Inštruktor ta mesec ni več na voljo (dosežen je mesečni proračun). Vadnica in razlage tem delujejo naprej.";
    }
    const per = LIMITS.studentMonthlyUsd();
    if (per && this.monthTotal(studentId) >= per) {
      return "Ta mesec si dosegel omejitev vprašanj za inštruktorja. Vadnica in razlage tem delujejo naprej.";
    }
    return null;
  }
  summary() {
    const rows = this.db
      .prepare(
        `SELECT s.id, s.name, COUNT(u.id) AS calls, COALESCE(SUM(u.input_tokens),0) AS input_tokens,
                COALESCE(SUM(u.output_tokens),0) AS output_tokens, COALESCE(SUM(u.cache_read_tokens),0) AS cache_read_tokens,
                COALESCE(SUM(u.cost_usd),0) AS cost_usd
         FROM students s LEFT JOIN usage u ON u.student_id = s.id AND u.created_at >= date('now','start of month')
         GROUP BY s.id ORDER BY cost_usd DESC`,
      )
      .all();
    return {
      month_usd: this.monthTotal(),
      budget_usd: LIMITS.monthlyBudgetUsd() || null,
      daily_questions: LIMITS.dailyQuestions() || null,
      students: rows,
    };
  }
}

// Zgodovina za API v "kosih": ko pogovor preseže 2N izmenjav, odrežemo
// najstarejših N naenkrat. Tako ostane začetek zgodovine enak več potez
// zapored in predpomnilnik deluje.
export function windowHistory(messages, turns = LIMITS.historyTurns()) {
  if (!turns) return messages;
  const exchanges = Math.ceil(messages.length / 2);
  const drop = Math.max(0, Math.floor((exchanges - turns) / turns) * turns);
  let out = messages.slice(drop * 2);
  while (out.length && out[0].role !== "user") out = out.slice(1);
  return out;
}
