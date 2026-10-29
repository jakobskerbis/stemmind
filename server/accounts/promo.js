// Aktivacijska koda za prve stranke: prvih N računov dobi poln dostop za D dni.
// Nastavitve v .env: KOMPRENO_PROMO_CODE (privzeto KOMPRENO100), KOMPRENO_PROMO_LIMIT (100),
// KOMPRENO_PROMO_DAYS (365), KOMPRENO_PROMO_SEATS (1 otrok). KOMPRENO_PROMO_CODE=off kodo izklopi.
import "../env.js";
import { isoIn } from "./plans.js";

export function promoConfig(env = process.env) {
  const code = String(env.KOMPRENO_PROMO_CODE ?? "KOMPRENO100").trim().toUpperCase();
  const num = (v, def) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Math.floor(Number(v)) : def);
  return {
    code: code === "OFF" || code === "" ? null : code,
    limit: num(env.KOMPRENO_PROMO_LIMIT, 100),
    days: num(env.KOMPRENO_PROMO_DAYS, 365),
    seats: num(env.KOMPRENO_PROMO_SEATS, 1),
  };
}

export function createPromo(db, cfg) {
  const used = () => (cfg.code ? db.prepare("SELECT COUNT(*) AS n FROM promo_redemptions WHERE code = ?").get(cfg.code).n : 0);

  // node:sqlite je sinhron, zato sta štetje in vpis skupaj atomarna (ni tekme za zadnje mesto).
  function redeem(parent, raw) {
    const code = String(raw || "").trim().toUpperCase();
    if (!code) return { error: "Vpišite aktivacijsko kodo." };
    if (!cfg.code || code !== cfg.code) return { error: "Ta aktivacijska koda ni veljavna." };
    if (db.prepare("SELECT 1 FROM promo_redemptions WHERE parent_id = ?").get(parent.id)) {
      return { error: "Aktivacijsko kodo ste na tem računu že uporabili." };
    }
    if (["active", "trialing", "past_due"].includes(parent.sub_status)) {
      return { error: "Že imate naročnino, zato koda ni potrebna. Prihranite jo za prijatelja." };
    }
    if (used() >= cfg.limit) return { error: `Vseh ${cfg.limit} aktivacij te kode je že porabljenih.`, exhausted: true };
    const until = isoIn(cfg.days);
    db.prepare("INSERT INTO promo_redemptions (parent_id, code) VALUES (?, ?)").run(parent.id, code);
    db.prepare("UPDATE parents SET promo_until = ? WHERE id = ?").run(until, parent.id);
    return { ok: true, until };
  }

  const stats = () => (cfg.code ? { code: cfg.code, used: used(), limit: cfg.limit, days: cfg.days, seats: cfg.seats } : null);

  return { redeem, stats, used };
}
