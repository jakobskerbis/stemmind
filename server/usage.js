// Poraba AI: beleženje žetonov in stroška, dnevne omejitve, mesečni proračun.
import { costUsd } from "./claude.js";

const num = (k, d) => {
  const v = Number(process.env[k]);
  return Number.isFinite(v) && process.env[k] !== "" && process.env[k] !== undefined ? v : d;
};

export const LIMITS = {
  dailyQuestions: () => num("STEMMIND_DAILY_QUESTIONS", 0), // 0 = brez omejitve
  monthlyBudgetUsd: () => num("STEMMIND_MONTHLY_BUDGET_USD", 0), // 0 = brez omejitve
  // Na učenca na mesec: nad mehko mejo »Razloži podrobneje« uporabi hitri model,
  // nad trdo mejo inštruktor počaka do naslednjega meseca (Vadnica deluje naprej).
  studentSoftUsd: () => num("STEMMIND_STUDENT_SOFT_USD", 1),
  studentMonthlyUsd: () => num("STEMMIND_STUDENT_MONTHLY_USD", 3),
  // Koliko odgovorov zmogljivejšega modela (Opus) na učenca na dan.
  dailyDeep: () => num("STEMMIND_DAILY_DEEP", 5),
  alertRatio: 0.8,
  historyTurns: () => num("STEMMIND_HISTORY_TURNS", 10),
  // Zmogljivejši model dobi samo zadnje izmenjave (njegov predpomnilnik je ločen, vsak žeton je drag).
  deepHistoryTurns: () => num("STEMMIND_DEEP_HISTORY_TURNS", 3),
  // Tekmovanja: privzeto hitri model z več razmisleka; 1 = vedno zmogljivejši model (prej).
  competitionDeep: () => process.env.STEMMIND_COMPETITION_DEEP === "1",
};

// Za prikaz v evrih (Claude API zaračunava v dolarjih).
export const EUR_PER_USD = () => num("STEMMIND_EUR_PER_USD", 0.87);

// Opombe, ko je zmogljivejši model nadomeščen s hitrejšim (pokažejo se nad odgovorom).
export const NOTES = {
  dailyDeep: (n) => `*(Danes si že ${n}× uporabil podrobno razlago z zmogljivejšim modelom. To razlago pripravi hitrejši model, ki dobro premisli. Jutri je zmogljivejši spet na voljo.)*\n\n`,
  softBudget: "*(Ta mesec si že veliko uporabljal podrobne razlage. Do konca meseca jih pripravi hitrejši model, ki dobro premisli.)*\n\n",
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
  // Število odgovorov zmogljivejšega modela danes.
  deepToday(studentId, deepModel) {
    return this.db
      .prepare("SELECT COUNT(*) AS n FROM usage WHERE student_id = ? AND kind = 'chat' AND model LIKE ? AND date(created_at) = date('now')")
      .get(studentId, `%${String(deepModel).replace(/^claude-/, "").split("-")[0]}%`).n;
  }
  // Izbere način klica za sporočilo. Vrne { mode, note }: note je opomba za učenca,
  // kadar je zmogljivejši model zaradi omejitve nadomeščen.
  // wantThink: prva ponovna razlaga (Haiku z več razmisleka); wantDeep: ponovna prošnja zapored (Opus).
  chooseMode(studentId, { wantDeep = false, wantThink = false, competition = false, lite = false, deepModel = "claude-opus" } = {}) {
    if (competition && !wantDeep && !LIMITS.competitionDeep()) return { mode: "think", note: null };
    if (wantDeep || competition) {
      const daily = LIMITS.dailyDeep();
      if (daily && this.deepToday(studentId, deepModel) >= daily) return { mode: "think", note: NOTES.dailyDeep(daily) };
      const soft = LIMITS.studentSoftUsd();
      if (soft && this.monthTotal(studentId) >= soft) return { mode: "think", note: NOTES.softBudget };
      return { mode: "deep", note: null };
    }
    if (wantThink) return { mode: "think", note: null };
    return { mode: lite ? "lite" : "chat", note: null };
  }
  // Odgovor brez klica modela (ponovna raba ali namig iz generatorja): zapišemo, da je viden prihranek.
  logSaved(studentId, kind) {
    this.db.prepare("INSERT INTO usage (student_id, model, kind, cost_usd) VALUES (?, ?, ?, 0)").run(studentId, kind === "reuse" ? "cache" : "koda", kind);
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
    const month = "u.created_at >= date('now','start of month')";
    const today = "date(u.created_at) = date('now')";
    const rows = this.db
      .prepare(
        `SELECT s.id, s.name, COUNT(CASE WHEN u.kind NOT IN ('reuse','hint') THEN 1 END) AS calls,
                COUNT(CASE WHEN u.kind IN ('reuse','hint') THEN 1 END) AS saved,
                COUNT(CASE WHEN u.model LIKE '%opus%' OR u.model LIKE '%sonnet%' OR u.model LIKE '%fable%' THEN 1 END) AS deep_calls,
                COALESCE(SUM(u.input_tokens),0) AS input_tokens,
                COALESCE(SUM(u.output_tokens),0) AS output_tokens, COALESCE(SUM(u.cache_read_tokens),0) AS cache_read_tokens,
                COALESCE(SUM(u.cost_usd),0) AS cost_usd,
                COUNT(CASE WHEN ${today} AND u.kind NOT IN ('reuse','hint') THEN 1 END) AS today_calls,
                COUNT(CASE WHEN ${today} AND u.kind IN ('reuse','hint') THEN 1 END) AS today_saved,
                COALESCE(SUM(CASE WHEN ${today} THEN u.cost_usd END),0) AS today_usd
         FROM students s LEFT JOIN usage u ON u.student_id = s.id AND ${month}
         GROUP BY s.id ORDER BY cost_usd DESC`,
      )
      .all();
    const byModel = this.db
      .prepare(
        `SELECT model, kind, COUNT(*) AS calls, SUM(input_tokens) AS input_tokens, SUM(output_tokens) AS output_tokens,
                SUM(cache_read_tokens) AS cache_read_tokens, SUM(cache_write_tokens) AS cache_write_tokens, SUM(cost_usd) AS cost_usd
         FROM usage u WHERE ${month} GROUP BY model, kind ORDER BY cost_usd DESC`,
      )
      .all();
    const total = this.monthTotal();
    const eur = EUR_PER_USD();
    const active = rows.filter((r) => r.calls + r.saved > 0).length;
    const now = new Date();
    const day = now.getUTCDate();
    const daysInMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0)).getUTCDate();
    const calls = byModel.filter((m) => m.kind !== "reuse" && m.kind !== "hint").reduce((a, m) => a + m.calls, 0);
    const saved = byModel.filter((m) => m.kind === "reuse" || m.kind === "hint").reduce((a, m) => a + m.calls, 0);
    const r4 = (x) => Math.round(x * 10000) / 10000;
    const todayUsd = rows.reduce((a, r) => a + r.today_usd, 0);
    return {
      today_usd: todayUsd,
      today_eur: r4(todayUsd * eur),
      today_calls: rows.reduce((a, r) => a + r.today_calls, 0),
      today_saved: rows.reduce((a, r) => a + r.today_saved, 0),
      month_calls: calls,
      month_usd: total,
      month_eur: r4(total * eur),
      eur_per_usd: eur,
      projected_eur: r4((total / Math.max(1, day)) * daysInMonth * eur),
      active_students: active,
      per_active_eur: active ? r4((total / active) * eur) : 0,
      per_message_eur: calls ? r4((total / calls) * eur) : 0,
      saved_answers: saved,
      budget_usd: LIMITS.monthlyBudgetUsd() || null,
      daily_questions: LIMITS.dailyQuestions() || null,
      limits: {
        student_soft_usd: LIMITS.studentSoftUsd() || null,
        student_hard_usd: LIMITS.studentMonthlyUsd() || null,
        daily_deep: LIMITS.dailyDeep() || null,
      },
      by_model: byModel.map((m) => ({ ...m, cost_eur: r4(m.cost_usd * eur) })),
      students: rows.map((r) => ({
        ...r,
        cost_eur: r4(r.cost_usd * eur),
        today_eur: r4(r.today_usd * eur),
        // Kako blizu mesečne meje je učenec (100 = inštruktor počaka do naslednjega meseca).
        limit_pct: LIMITS.studentMonthlyUsd() ? Math.round((100 * r.cost_usd) / LIMITS.studentMonthlyUsd()) : null,
      })),
    };
  }
  // Za starše: poraba otroka ta mesec kot delež mesečne omejitve (brez zneskov).
  studentMonth(studentId) {
    const usd = this.monthTotal(studentId);
    const hard = LIMITS.studentMonthlyUsd();
    const soft = LIMITS.studentSoftUsd();
    return {
      percent: hard ? Math.min(100, Math.round((usd / hard) * 100)) : null,
      soft_reached: !!soft && usd >= soft,
      hard_reached: !!hard && usd >= hard,
    };
  }
}

// Zgodovina za API v "kosih": ko pogovor preseže 2N izmenjav, odrežemo
// najstarejših N naenkrat. Tako ostane začetek zgodovine enak več potez
// zapored in predpomnilnik deluje.
// Zgodovina za zmogljivejši model: samo zadnjih N izmenjav (njegov predpomnilnik
// se z Haikujevim ne deli, zato bi vso zgodovino plačali po polni ceni).
export function recentHistory(messages, turns = LIMITS.deepHistoryTurns()) {
  if (!turns) return messages;
  let out = messages.slice(-(turns * 2 - 1));
  while (out.length && out[0].role !== "user") out = out.slice(1);
  return out;
}

export function windowHistory(messages, turns = LIMITS.historyTurns()) {
  if (!turns) return messages;
  const exchanges = Math.ceil(messages.length / 2);
  const drop = Math.max(0, Math.floor((exchanges - turns) / turns) * turns);
  let out = messages.slice(drop * 2);
  while (out.length && out[0].role !== "user") out = out.slice(1);
  return out;
}
