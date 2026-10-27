// Paketi, cene in pravica do polnega dostopa.

export const TRIAL_DAYS = 7;
export const REFERRAL_DAYS = 30;
export const MAX_CHILDREN = 4;
export const PRIVACY_VERSION = "2026-10-27";

// Cene v centih (z DDV). lookup_key poveže ceno v Stripu s paketom.
export const PLANS = [
  { key: "stemmind_1_month", seats: 1, interval: "month", amount: 899, label: "1 otrok, mesečno" },
  { key: "stemmind_1_year", seats: 1, interval: "year", amount: 6900, label: "1 otrok, šolsko leto" },
  { key: "stemmind_2_month", seats: 2, interval: "month", amount: 1449, label: "2 otroka, mesečno" },
  { key: "stemmind_2_year", seats: 2, interval: "year", amount: 10900, label: "2 otroka, šolsko leto" },
];
export const planByKey = (key) => PLANS.find((p) => p.key === key) || null;
export const planFor = (seats, interval) => PLANS.find((p) => p.seats === seats && p.interval === interval) || null;
export const monthlyAmount = (seats) => planFor(seats >= 2 ? 2 : 1, "month").amount;

export const freeDailyQuestions = () => {
  const v = Number(process.env.STEMMIND_FREE_DAILY_QUESTIONS);
  return Number.isFinite(v) && process.env.STEMMIND_FREE_DAILY_QUESTIONS ? v : 10;
};

const PAID = new Set(["active", "trialing", "past_due"]);
const later = (iso, now) => iso && Date.parse(iso.replace(" ", "T") + (iso.includes("Z") ? "" : "Z")) > now;

// Kaj starš trenutno ima: paid (naročnina), trial (preizkus), bonus (mesec iz priporočila) ali free.
export function accessFor(parent, now = Date.now()) {
  if (parent.sub_status && PAID.has(parent.sub_status)) {
    return { tier: "paid", seats: parent.sub_seats || 1, until: parent.sub_period_end };
  }
  if (later(parent.trial_ends_at, now)) return { tier: "trial", seats: 2, until: parent.trial_ends_at };
  if (later(parent.bonus_until, now)) return { tier: "bonus", seats: 1, until: parent.bonus_until };
  return { tier: "free", seats: 0, until: null };
}

// Otrok ima poln dostop, če je med prvimi »seats« otroki starša.
export function isPremiumChild(access, childIds, studentId) {
  if (!access.seats) return false;
  return [...childIds].sort((a, b) => a - b).slice(0, access.seats).includes(studentId);
}

export const isoIn = (days, from = Date.now()) => new Date(from + days * 86400000).toISOString();
