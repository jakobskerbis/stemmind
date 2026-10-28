// Paketi, cene in pravica do polnega dostopa.

export const TRIAL_DAYS = 7;
export const REFERRAL_DAYS = 30;
export const MAX_CHILDREN = 4;
export const PRIVACY_VERSION = "2026-10-27";

// Cene v centih (z DDV). lookup_key poveže ceno v Stripu s paketom.
// Ena cena za vse ravni (OŠ, SŠ, fakulteta). Ob spremembi zneska Stripe sam
// ustvari novo ceno in staro arhivira (glej ensurePrices); obstoječe naročnine
// ostanejo pri stari ceni.
// Izračun (2026-10-28): od 9,99 € ostane po DDV (22 %) in Stripu (1,5 % + 0,25 €)
// 7,8 €; AI stane 1–2 € na dejavnega učenca → 6–7 € na mesec za nas (≈ 75 %).
// Šolsko leto: 89 € = 7,42 € na mesec (26 % ceneje), plačilo vnaprej, manj odpovedi.
export const PLANS = [
  { key: "stemmind_1_month", seats: 1, interval: "month", amount: 999, label: "1 otrok, mesečno" },
  { key: "stemmind_1_year", seats: 1, interval: "year", amount: 8900, label: "1 otrok, šolsko leto" },
  { key: "stemmind_2_month", seats: 2, interval: "month", amount: 1599, label: "2 otroka, mesečno" },
  { key: "stemmind_2_year", seats: 2, interval: "year", amount: 13900, label: "2 otroka, šolsko leto" },
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
