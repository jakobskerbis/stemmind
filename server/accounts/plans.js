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

// ---------- regijske cene (PREDLOG, še ni potrjen) ----------
// Cene, prilagojene kupni moči, v lokalni valuti: [1 otrok mesečno, 1 otrok šolsko leto,
// 2 otroka mesečno, 2 otroka šolsko leto] v glavnih enotah valute (rupije, naire …).
// Merilo: ~2–2,6 € na mesec za enega otroka, ker strošek AI na aktivnega učenca (1–2 €)
// s kupno močjo ne pade. Slovenija in ostale države ostanejo pri cenah v evrih zgoraj.
export const REGIONAL_DRAFT = true;
export const REGIONAL_PRICES = {
  INR: { countries: ["IN"], prices: [249, 1999, 399, 3199] },
  PKR: { countries: ["PK"], prices: [699, 5499, 1099, 8699] },
  BDT: { countries: ["BD"], prices: [299, 2399, 449, 3599] },
  NGN: { countries: ["NG"], prices: [3500, 28000, 5500, 44000] },
  GHS: { countries: ["GH"], prices: [29, 229, 45, 359] },
  KES: { countries: ["KE"], prices: [349, 2799, 549, 4399] },
  ZAR: { countries: ["ZA"], prices: [79, 649, 129, 1049] },
  EGP: { countries: ["EG"], prices: [129, 999, 199, 1599] },
  PHP: { countries: ["PH"], prices: [149, 1199, 229, 1849] },
  IDR: { countries: ["ID"], prices: [39000, 299000, 59000, 469000] },
  VND: { countries: ["VN"], prices: [59000, 469000, 89000, 699000] },
  XOF: { countries: ["SN", "CI", "ML", "BF", "NE", "BJ", "TG", "GW"], prices: [1500, 12000, 2500, 19000] },
  // Ostale države z nižjimi dohodki v Afriki in Aziji: ena cena v dolarjih.
  USD: {
    countries: ["NP", "LK", "TZ", "UG", "RW", "ET", "ZM", "ZW", "MW", "MZ", "CM", "CD", "CG", "GA", "TD", "GN", "MG", "SL", "LR", "GM", "SD", "SS", "SO", "MM", "KH", "LA", "AF", "TJ", "KG", "UZ", "MN", "BT", "MV", "LS", "SZ", "BW", "NA", "AO"],
    prices: [2.99, 23.99, 4.49, 35.99],
  },
};
// Valute brez decimalk v Stripu (znesek je v celih enotah).
const ZERO_DECIMAL = new Set(["VND", "XOF", "XAF", "UGX", "RWF", "JPY", "KRW", "GNF", "MGA"]);
const SHAPE = [
  [1, "month", "1 otrok, mesečno"],
  [1, "year", "1 otrok, šolsko leto"],
  [2, "month", "2 otroka, mesečno"],
  [2, "year", "2 otroka, šolsko leto"],
];
// Znesek v najmanjših enotah (centi, paise …), kot ga pričakuje Stripe.
export const minorUnits = (currency, major) => Math.round(major * (ZERO_DECIMAL.has(currency) ? 1 : 100));
export const currencyDecimals = (currency) => (ZERO_DECIMAL.has(currency) ? 0 : 2);

export const currencyForCountry = (country) => {
  const c = String(country || "").toUpperCase();
  return Object.entries(REGIONAL_PRICES).find(([, v]) => v.countries.includes(c))?.[0] || "EUR";
};

// Paketi v valuti: EUR = PLANS (lookup_key brez pripone), drugje lookup_key s pripono valute.
export function plansFor(currency = "EUR") {
  const r = REGIONAL_PRICES[currency];
  if (!r) return PLANS.map((p) => ({ ...p, currency: "EUR" }));
  return SHAPE.map(([seats, interval, label], i) => ({
    key: `stemmind_${seats}_${interval}_${currency.toLowerCase()}`,
    seats,
    interval,
    amount: minorUnits(currency, r.prices[i]),
    label,
    currency,
  }));
}
export const ALL_PLANS = [...PLANS.map((p) => ({ ...p, currency: "EUR" })), ...Object.keys(REGIONAL_PRICES).flatMap(plansFor)];

export const planByKey = (key) => ALL_PLANS.find((p) => p.key === key) || null;
export const planFor = (seats, interval, currency = "EUR") => plansFor(currency).find((p) => p.seats === seats && p.interval === interval) || null;
export const monthlyAmount = (seats, currency = "EUR") => planFor(seats >= 2 ? 2 : 1, "month", currency).amount;

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
