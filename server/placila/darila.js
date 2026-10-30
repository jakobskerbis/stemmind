// Darilna koda (j 2026-10-30): polnoletna oseba kupi kodo za eno leto Osebno (en profil) za 49 €
// z enkratnim plačilom in jo podari. Prejemnik jo vpiše v polje za aktivacijsko kodo v zavihku Račun.
// Koda je ločena od aktivacijskih kod (te so ena na račun): darilo podaljša dostop parents.gift_until.
// Vračilo ali spor pred vpisom kodo izklopi; po vpisu se dostop prejemnika konča.
import express from "express";
import { randomBytes } from "node:crypto";
import { GIFT, isoIn } from "../accounts/plans.js";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // brez I, O, 0, 1
const newCode = () =>
  "DAR-" +
  [...randomBytes(8)]
    .map((b, i) => (i === 4 ? "-" : "") + ALPHABET[b % ALPHABET.length])
    .join("");
export const GIFT_RE = /^DAR-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

export function migrateGifts(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS gifts (
      id INTEGER PRIMARY KEY,
      buyer_id INTEGER NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
      amount INTEGER NOT NULL,
      currency TEXT NOT NULL DEFAULT 'EUR',
      days INTEGER NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending', -- pending | paid | refunded | disputed
      code TEXT UNIQUE,
      checkout_id TEXT,
      payment_id TEXT,
      redeemed_by INTEGER REFERENCES parents(id) ON DELETE SET NULL,
      redeemed_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_gifts_buyer ON gifts(buyer_id);
    CREATE INDEX IF NOT EXISTS idx_gifts_payment ON gifts(payment_id);
  `);
}

const later = (iso, now = Date.now()) => !!iso && Date.parse(iso) > now;

// ctx: { db, stripe, json, log, getParent, ensureCustomer, baseUrl, isMinor, recordConsent, paidActive }
export function mountGifts(app, ctx) {
  const {
    db,
    stripe,
    json,
    log,
    getParent,
    ensureCustomer,
    baseUrl,
    isMinor,
    recordConsent,
    paidActive,
  } = ctx;
  migrateGifts(db);
  const get = (id) =>
    db.prepare("SELECT * FROM gifts WHERE id = ?").get(id) || null;
  const byCode = (code) =>
    db.prepare("SELECT * FROM gifts WHERE code = ?").get(
      String(code || "")
        .trim()
        .toUpperCase(),
    ) || null;

  // Plačilo je uspelo: ustvari kodo (enkrat). session = Stripe Checkout Session.
  function complete(session) {
    if (session?.metadata?.kind !== "gift" || session.payment_status !== "paid")
      return false;
    const g = get(Number(session.metadata.gift_id));
    if (
      !g ||
      String(g.buyer_id) !== String(session.metadata.parent_id) ||
      g.status !== "pending"
    )
      return false;
    const pi =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : session.payment_intent?.id || null;
    for (let i = 0; i < 5; i++) {
      try {
        const r = db
          .prepare(
            "UPDATE gifts SET status = 'paid', code = ?, payment_id = ? WHERE id = ? AND status = 'pending'",
          )
          .run(newCode(), pi, g.id);
        return r.changes > 0;
      } catch (e) {
        if (!/UNIQUE/.test(String(e.message))) throw e; // zelo redko: enaka koda, poskusi znova
      }
    }
    return false;
  }

  // Vračilo ali spor: nevpisana koda ne velja več; vpisana konča dostop prejemnika.
  function end(paymentId, status) {
    const g =
      paymentId &&
      db.prepare("SELECT * FROM gifts WHERE payment_id = ?").get(paymentId);
    if (!g || g.status !== "paid") return false;
    db.prepare("UPDATE gifts SET status = ? WHERE id = ?").run(status, g.id);
    if (g.redeemed_by)
      db.prepare(
        "UPDATE parents SET gift_until = datetime('now') WHERE id = ?",
      ).run(g.redeemed_by);
    return true;
  }

  // Vpis kode: dostop eno leto od danes ali od konca prejšnjega darila. Vrne { ok, until } ali { error }.
  function redeem(parent, raw) {
    const g = byCode(raw);
    if (!g || g.status !== "paid")
      return { error: "Ta darilna koda ni veljavna." };
    if (g.redeemed_by) return { error: "Ta darilna koda je že uporabljena." };
    if (paidActive(parent))
      return {
        error:
          "Že imate naročnino, zato darilo ni potrebno. Prihranite ga za nekoga drugega.",
      };
    const from = later(parent.gift_until)
      ? Date.parse(parent.gift_until)
      : Date.now();
    const until = isoIn(g.days, from);
    const r = db
      .prepare(
        "UPDATE gifts SET redeemed_by = ?, redeemed_at = datetime('now') WHERE id = ? AND redeemed_by IS NULL",
      )
      .run(parent.id, g.id);
    if (!r.changes) return { error: "Ta darilna koda je že uporabljena." };
    db.prepare("UPDATE parents SET gift_until = ? WHERE id = ?").run(
      until,
      parent.id,
    );
    return { ok: true, until, gift: true };
  }

  // Kupljena darila za zavihek Račun (kupec vidi kodo, dokler je ni kdo vpisal).
  const listFor = (parentId) =>
    db
      .prepare(
        "SELECT id, status, code, redeemed_at, created_at FROM gifts WHERE buyer_id = ? AND status IN ('paid', 'refunded', 'disputed') ORDER BY id DESC LIMIT 20",
      )
      .all(parentId)
      .map((g) => ({
        id: g.id,
        code: g.status === "paid" ? g.code : null,
        status: g.status,
        redeemed: !!g.redeemed_at,
        created_at: g.created_at,
      }));

  app.post("/api/billing/gift", json, async (req, res) => {
    const p = req.parent;
    if (!stripe.enabled)
      return res
        .status(503)
        .json({
          error: "Plačila še niso nastavljena (manjka STRIPE_SECRET_KEY).",
        });
    if (p.is_guest)
      return res.status(403).json({ error: "Najprej ustvari račun." });
    if (isMinor(p))
      return res
        .status(403)
        .json({ error: "Darilno kodo lahko kupi samo polnoletna oseba." });
    if (req.body?.adult !== true || req.body?.withdrawal !== true)
      return res
        .status(400)
        .json({ error: "Pred plačilom potrdite obe izjavi.", consent: true });
    const open = db
      .prepare(
        "SELECT COUNT(*) AS n FROM gifts WHERE buyer_id = ? AND status = 'pending' AND created_at > datetime('now', '-1 day')",
      )
      .get(p.id).n;
    if (open >= 5)
      return res
        .status(429)
        .json({ error: "Preveč odprtih nakupov. Poskusite jutri." });
    try {
      const customer = await ensureCustomer(p);
      const id = Number(
        db
          .prepare(
            "INSERT INTO gifts (buyer_id, amount, currency, days) VALUES (?, ?, ?, ?)",
          )
          .run(p.id, GIFT.amount, GIFT.currency, GIFT.days).lastInsertRowid,
      );
      const meta = { kind: "gift", gift_id: id, parent_id: p.id };
      const base = baseUrl(req);
      const session = await stripe.request("POST", "/checkout/sessions", {
        mode: "payment",
        customer,
        client_reference_id: String(p.id),
        line_items: [
          {
            price_data: {
              currency: GIFT.currency.toLowerCase(),
              unit_amount: GIFT.amount,
              tax_behavior: "inclusive",
              product_data: { name: `Evklid – ${GIFT.label}` },
            },
            quantity: 1,
          },
        ],
        success_url: `${base}/?billing=gift&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${base}/?billing=cancel`,
        locale: "sl",
        metadata: meta,
        payment_intent_data: { metadata: meta },
      });
      db.prepare("UPDATE gifts SET checkout_id = ? WHERE id = ?").run(
        session.id,
        id,
      );
      recordConsent(p.id, p.email, "gift", req.body?.lang);
      res.json({ url: session.url });
    } catch (err) {
      log.error?.("[evklid] Stripe darilo:", err.message);
      res
        .status(502)
        .json({
          error: "Plačilne strani ni bilo mogoče odpreti. Poskusite znova.",
        });
    }
  });

  // Vrnitev s plačilne strani (deluje tudi brez webhooka).
  app.post("/api/billing/gift/confirm", json, async (req, res) => {
    if (!stripe.enabled)
      return res
        .status(503)
        .json({
          error: "Plačila še niso nastavljena (manjka STRIPE_SECRET_KEY).",
        });
    const sid = String(req.body?.session_id || "");
    if (!/^cs_[\w]+$/.test(sid))
      return res.status(400).json({ error: "Neznana seja plačila." });
    try {
      const session = await stripe.request("GET", `/checkout/sessions/${sid}`);
      if (
        String(session.metadata?.parent_id) !== String(req.parent.id) ||
        session.metadata?.kind !== "gift"
      )
        return res.status(404).json({ error: "Plačilo ne obstaja." });
      complete(session);
      const g = get(Number(session.metadata.gift_id));
      res.json({
        paid: g?.status === "paid",
        code: g?.status === "paid" ? g.code : null,
      });
    } catch (err) {
      log.error?.("[evklid] Stripe darilo (potrditev):", err.message);
      res
        .status(502)
        .json({
          error: "Plačila ni bilo mogoče preveriti. Osvežite stran čez minuto.",
        });
    }
  });

  return {
    complete,
    end,
    redeem,
    listFor,
    isGift: (code) =>
      GIFT_RE.test(
        String(code || "")
          .trim()
          .toUpperCase(),
      ),
    get,
  };
}
