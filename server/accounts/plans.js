// Paketi, cene in pravica do polnega dostopa.
import "../env.js";
import { BRAND, LEGACY } from "../brand.js";

export const TRIAL_DAYS = 7;
export const REFERRAL_DAYS = 30;
export const MAX_CHILDREN = 4;
export const PRIVACY_VERSION = "2026-10-29";

// Cene v centih (z DDV). lookup_key poveže ceno v Stripu s paketom.
// Ena cena za vse ravni (OŠ, SŠ, fakulteta). Ob spremembi zneska Stripe sam
// ustvari novo ceno in staro arhivira (glej ensurePrices); obstoječe naročnine
// ostanejo pri stari ceni.
// Izračun (2026-10-28): od 9,99 € ostane po DDV (22 %) in Stripu (1,5 % + 0,25 €)
// 7,8 €; AI stane 1–2 € na dejavnega učenca → 6–7 € na mesec za nas (≈ 75 %).
// Šolsko leto: 89 € = 7,42 € na mesec (26 % ceneje), plačilo vnaprej, manj odpovedi.
export const PLANS = [
  { key: `${BRAND.slug}_1_month`, seats: 1, interval: "month", amount: 999, label: "1 otrok, mesečno" },
  { key: `${BRAND.slug}_1_year`, seats: 1, interval: "year", amount: 8900, label: "1 otrok, šolsko leto" },
  { key: `${BRAND.slug}_2_month`, seats: 2, interval: "month", amount: 1599, label: "2 otroka, mesečno" },
  { key: `${BRAND.slug}_2_year`, seats: 2, interval: "year", amount: 13900, label: "2 otroka, šolsko leto" },
];

// ---------- regijske cene (potrdil j, 2026-10-28) ----------
// Cene v lokalni valuti: [1 otrok mesečno, 1 otrok šolsko leto, 2 otroka mesečno,
// 2 otroka šolsko leto] v glavnih enotah valute (rupije, naire …).
// Merilo: ~4–5 € na mesec za enega otroka, da pokrijejo strošek AI na aktivnega učenca
// (1–2 €), ki s kupno močjo ne pade. Razmerja med paketi so kot pri cenah v evrih.
// Slovenija in ostale države ostanejo pri cenah v evrih zgoraj.
export const REGIONAL_DRAFT = false;
export const REGIONAL_PRICES = {
  INR: { countries: ["IN"], prices: [399, 3499, 649, 5599] },
  PKR: { countries: ["PK"], prices: [1399, 11999, 2199, 18999] },
  BDT: { countries: ["BD"], prices: [549, 4799, 899, 7699] },
  NGN: { countries: ["NG"], prices: [7500, 64000, 12000, 103000] },
  GHS: { countries: ["GH"], prices: [59, 499, 95, 799] },
  KES: { countries: ["KE"], prices: [649, 5599, 1049, 8999] },
  ZAR: { countries: ["ZA"], prices: [89, 779, 149, 1249] },
  EGP: { countries: ["EG"], prices: [249, 2199, 399, 3499] },
  PHP: { countries: ["PH"], prices: [279, 2399, 449, 3899] },
  IDR: { countries: ["ID"], prices: [79000, 699000, 129000, 1099000] },
  VND: { countries: ["VN"], prices: [129000, 1099000, 199000, 1799000] },
  XOF: { countries: ["SN", "CI", "ML", "BF", "NE", "BJ", "TG", "GW"], prices: [2900, 25000, 4700, 40000] },
  // Ostale države z nižjimi dohodki v Afriki in Aziji: ena cena v dolarjih.
  USD: {
    countries: ["NP", "LK", "TZ", "UG", "RW", "ET", "ZM", "ZW", "MW", "MZ", "CM", "CD", "CG", "GA", "TD", "GN", "MG", "SL", "LR", "GM", "SD", "SS", "SO", "MM", "KH", "LA", "AF", "TJ", "KG", "UZ", "MN", "BT", "MV", "LS", "SZ", "BW", "NA", "AO"],
    prices: [4.99, 42.99, 7.99, 68.99],
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
    key: `${BRAND.slug}_${seats}_${interval}_${currency.toLowerCase()}`,
    seats,
    interval,
    amount: minorUnits(currency, r.prices[i]),
    label,
    currency,
  }));
}
export const ALL_PLANS = [...PLANS.map((p) => ({ ...p, currency: "EUR" })), ...Object.keys(REGIONAL_PRICES).flatMap(plansFor)];

// Cene, ustvarjene pod prejšnjim imenom aplikacije (brand.json → legacy), imajo v Stripu lookup_key »<staro>_…«.
const currentKey = (key) => LEGACY.reduce((k, l) => (k.startsWith(`${l.slug}_`) ? `${BRAND.slug}_${k.slice(l.slug.length + 1)}` : k), String(key ?? ""));
export const planByKey = (key) => ALL_PLANS.find((p) => p.key === currentKey(key)) || null;
export const planFor = (seats, interval, currency = "EUR") => plansFor(currency).find((p) => p.seats === seats && p.interval === interval) || null;
export const monthlyAmount = (seats, currency = "EUR") => planFor(seats >= 2 ? 2 : 1, "month", currency).amount;

export const freeDailyQuestions = () => {
  const v = Number(process.env.KOMPRENO_FREE_DAILY_QUESTIONS);
  return Number.isFinite(v) && process.env.KOMPRENO_FREE_DAILY_QUESTIONS ? v : 10;
};

// Brezplačni paket ne sme stati več, kot določi skrbnik (v dolarjih, kot zaračunava Claude API; 0 = brez omejitve).
// Skupaj za vse brezplačne učence na mesec (10 $ ≈ 8,7 €) in na enega brezplačnega učenca na mesec.
// 10 vprašanj na dan s Haikujem je največ ~0,14 $ na mesec, zato meja na učenca ujame le izjeme (veliko fotografij).
const envUsd = (k, d) => {
  const v = Number(process.env[k]);
  return process.env[k] !== undefined && process.env[k] !== "" && Number.isFinite(v) ? v : d;
};
export const freeMonthlyPoolUsd = () => envUsd("KOMPRENO_FREE_POOL_USD", 10);
export const freeStudentMonthlyUsd = () => envUsd("KOMPRENO_FREE_STUDENT_USD", 0.2);

const PAID = new Set(["active", "trialing", "past_due"]);
const later = (iso, now) => iso && Date.parse(iso.replace(" ", "T") + (iso.includes("Z") ? "" : "Z")) > now;

// Kaj starš trenutno ima: paid (naročnina), trial (preizkus), bonus (mesec iz priporočila) ali free.
export function accessFor(parent, now = Date.now(), promoSeats = 1) {
  if (parent.sub_status && PAID.has(parent.sub_status)) {
    return { tier: "paid", seats: parent.sub_seats || 1, until: parent.sub_period_end };
  }
  // Aktivacijska koda; med 7-dnevnim preizkusom ostaneta 2 profila.
  if (later(parent.promo_until, now)) {
    const seats = later(parent.trial_ends_at, now) ? Math.max(2, promoSeats) : promoSeats;
    return { tier: "promo", seats, until: parent.promo_until };
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
