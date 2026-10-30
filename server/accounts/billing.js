// Novi del plačil (j 2026-10-30, načrt »Evklid – nov sistem plačil«):
// - paketi pred testom: enkratno plačilo za 7, 14 ali 30 dni polnega dostopa za en profil,
//   ponudijo se samo učencu brez aktivne naročnine;
// - povezava »Prosi starše za plačilo«: mladoletni imetnik računa pošlje staršu povezavo,
//   starš pregleda in plača brez lastnega računa v Evklidu;
// - dve potrditvi pred vsakim plačilom (polnoletnost in takojšen začetek z vedenjem o odstopu);
// - skrbniške aktivacijske kode (seznam, nova koda, izklop);
// - dnevna opravila: usklajevanje naročnin s Stripom, opomnik pred koncem kode in pred letno obnovitvijo.
import express from "express";
import { randomToken, sha256, Throttle } from "./auth.js";
import { PASSES, passByDays, passForDaysLeft, paidActive, planFor, planByKey, isPremiumChild, GRACE_DAYS, currencyDecimals, schoolPlanFor } from "./plans.js";
import { Schedules, nowParts, cleanDate, TEST_KINDS } from "../schedule.js";
import { cleanText } from "../settings.js";
import { ljNow } from "./goal-reminder.js";
import { promoEndingEmail, renewalEmail } from "./email.js";
import { audit } from "../dnevnik-dostopov.js";

export const ADULT_TEXT = "Sem polnoleten/-na in plačujem za svoj profil ali kot starš oziroma skrbnik.";
export const WITHDRAWAL_TEXT =
  "Želim, da se uporaba začne takoj. Vem, da lahko v 14 dneh odstopim od pogodbe in da v tem primeru dobim vrnjen sorazmerni del plačila.";
const PAY_LINK_DAYS = 7;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function migrateBilling(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS passes (
      id INTEGER PRIMARY KEY,
      parent_id INTEGER NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
      student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
      days INTEGER NOT NULL,
      amount INTEGER NOT NULL,
      currency TEXT NOT NULL DEFAULT 'EUR',
      ai_usd REAL NOT NULL,
      test_date TEXT,
      test_name TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'pending', -- pending | active | refunded | disputed | expired
      checkout_id TEXT,
      payment_id TEXT,
      starts_at TEXT,
      ends_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_passes_student ON passes(student_id, status);
    CREATE INDEX IF NOT EXISTS idx_passes_payment ON passes(payment_id);
    CREATE TABLE IF NOT EXISTS pay_links (
      token_hash TEXT PRIMARY KEY,
      parent_id INTEGER NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
      kind TEXT NOT NULL,                     -- sub | pass
      plan_key TEXT,
      student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
      days INTEGER,
      test_date TEXT,
      test_name TEXT NOT NULL DEFAULT '',
      pass_id INTEGER,
      expires_at TEXT NOT NULL,
      done_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    -- Dokaz o potrditvah pred plačilom (polnoletnost, takojšen začetek in pravica do odstopa).
    CREATE TABLE IF NOT EXISTS billing_consents (
      id INTEGER PRIMARY KEY,
      parent_id INTEGER REFERENCES parents(id) ON DELETE SET NULL,
      payer_email TEXT NOT NULL DEFAULT '',
      kind TEXT NOT NULL,
      text TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    -- Webhooki: vsak dogodek se obdela enkrat (ponudnik ga lahko pošlje večkrat).
    CREATE TABLE IF NOT EXISTS billing_events (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,
      received_at TEXT NOT NULL DEFAULT (datetime('now')),
      processed_at TEXT,
      error TEXT
    );
  `);
  const cols = db.prepare("PRAGMA table_info(parents)").all().map((c) => c.name);
  // Začetek neuspelega plačila (status past_due): poln dostop ostane še GRACE_DAYS dni.
  if (!cols.includes("past_due_since")) db.exec("ALTER TABLE parents ADD COLUMN past_due_since TEXT");
}

const iso = (ms) => new Date(ms).toISOString();

export class Passes {
  constructor(db) {
    this.db = db;
  }
  create({ parentId, studentId, plan, testDate, testName }) {
    const r = this.db
      .prepare("INSERT INTO passes (parent_id, student_id, days, amount, currency, ai_usd, test_date, test_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
      .run(parentId, studentId, plan.days, plan.amount, plan.currency, plan.aiUsd, testDate, testName || "");
    return Number(r.lastInsertRowid);
  }
  get(id) {
    return this.db.prepare("SELECT * FROM passes WHERE id = ?").get(Number(id)) || null;
  }
  setCheckout(id, checkoutId) {
    this.db.prepare("UPDATE passes SET checkout_id = ? WHERE id = ?").run(checkoutId, id);
  }
  // Iz »pending« (ali »expired«, ko zamudno plačilo, npr. SEPA, prispe po 48 h) v »active«;
  // ponovljen klic (webhook in vrnitev s plačilne strani) ne podaljša paketa.
  // Če ima profil že aktiven paket (dva plačnika hkrati), se novi začne, ko prejšnji poteče.
  activate(id, paymentId, now = Date.now()) {
    const p = this.get(id);
    if (!p || (p.status !== "pending" && p.status !== "expired")) return false;
    const prev = this.latestFor(p.student_id, now);
    const start = prev ? Math.max(now, Date.parse(prev.ends_at)) : now;
    const r = this.db
      .prepare("UPDATE passes SET status = 'active', payment_id = ?, starts_at = ?, ends_at = ? WHERE id = ? AND status IN ('pending','expired')")
      .run(paymentId || null, iso(start), iso(start + p.days * 86400000), id);
    return r.changes > 0;
  }
  activeFor(studentId, now = Date.now()) {
    return (
      this.db
        .prepare("SELECT * FROM passes WHERE student_id = ? AND status = 'active' AND starts_at <= ? AND ends_at > ? ORDER BY ends_at DESC")
        .get(studentId, iso(now), iso(now)) || null
    );
  }
  // Zadnji plačan paket, ki še ni potekel (tudi če se začne šele za trenutno aktivnim).
  latestFor(studentId, now = Date.now()) {
    return this.db.prepare("SELECT * FROM passes WHERE student_id = ? AND status = 'active' AND ends_at > ? ORDER BY ends_at DESC").get(studentId, iso(now)) || null;
  }
  byPayment(paymentId) {
    return paymentId ? this.db.prepare("SELECT * FROM passes WHERE payment_id = ?").get(paymentId) || null : null;
  }
  // Vračilo ali spor: paket se konča takoj.
  end(id, status) {
    this.db.prepare("UPDATE passes SET status = ?, ends_at = ? WHERE id = ?").run(status, iso(Date.now()), id);
  }
  // Poraba AI v času paketa (v dolarjih, kot zaračunava Claude API).
  spentUsd(pass) {
    return this.db.prepare("SELECT COALESCE(SUM(cost_usd),0) AS s FROM usage WHERE student_id = ? AND created_at >= datetime(?)").get(pass.student_id, pass.starts_at).s;
  }
  expirePending(hours = 48) {
    return this.db.prepare("UPDATE passes SET status = 'expired' WHERE status = 'pending' AND created_at < datetime('now', ?)").run(`-${hours} hours`).changes;
  }
}

export const publicPass = (p) =>
  p && { id: p.id, days: p.days, amount: p.amount, currency: p.currency, status: p.status, test_name: p.test_name, test_date: p.test_date, ends_at: p.ends_at };

// Najbližji test (test, kolokvij, izpit, ustno) v naslednjih 30 dneh iz urnika učenca.
export function nextTest(schedules, studentId, now = new Date()) {
  const today = nowParts(now).date;
  const days = (d) => Math.round((Date.parse(`${d}T12:00:00Z`) - Date.parse(`${today}T12:00:00Z`)) / 86400000);
  return (
    schedules
      .get(studentId)
      .events.filter((e) => TEST_KINDS.includes(e.kind))
      .map((e) => ({ id: e.id, name: e.name, date: e.date, kind: e.kind, daysLeft: days(e.date) }))
      .filter((e) => e.daysLeft >= 0 && e.daysLeft <= 29)
      .sort((a, b) => a.daysLeft - b.daysLeft)[0] || null
  );
}

export function mountBilling(app, ctx) {
  const { db, store, stripe, log, json, getParent, update, childIds, ownerOf, ensureCustomer, accessOf, baseUrl, sendMail, currencyOf, isMinor, applySubscription, syncCustomer, promo, kv, offersFor = () => ({ show: true, prices: true }), hasSchoolChild = () => false } = ctx;
  migrateBilling(db);
  const passes = new Passes(db);
  const schedules = new Schedules(db);
  const publicThrottle = new Throttle(30, 15 * 60000);
  const linkThrottle = new Throttle(10, 3600000);

  const needStripe = (res) => {
    if (stripe.enabled) return false;
    res.status(503).json({ error: "Plačila še niso nastavljena (manjka STRIPE_SECRET_KEY)." });
    return true;
  };
  const consented = (body) => body?.adult === true && body?.withdrawal === true;
  const consentError = { error: "Pred plačilom potrdite obe izjavi.", consent: true };
  // Shrani se slovensko besedilo in jezik, v katerem ju je plačnik prebral (prevod je v public/i18n).
  function recordConsent(parentId, payerEmail, kind, lang) {
    const l = /^[a-z]{2,3}(-[A-Za-z]{2,4})?$/.test(String(lang || "")) ? lang : "sl";
    db.prepare("INSERT INTO billing_consents (parent_id, payer_email, kind, text) VALUES (?, ?, ?, ?)").run(parentId, payerEmail || "", kind, `${ADULT_TEXT}\n${WITHDRAWAL_TEXT}\n[jezik: ${l}]`);
  }

  // Ali ima profil poln dostop iz paketa pred testom (dokler ni porabljena meja AI paketa).
  function passPremium(studentId) {
    const p = passes.activeFor(studentId);
    return !!p && passes.spentUsd(p) < p.ai_usd;
  }

  // Preverjanje nakupa paketa (za plačilo v aplikaciji in za povezavo za starše).
  // Vrne { plan, studentId, test } ali { status, body } za napako.
  function checkPass(req, parent, body) {
    const studentId = Number(body?.student_id);
    if (!Number.isInteger(studentId) || ownerOf(studentId) !== parent.id) return { status: 404, body: { error: "Učenec ne obstaja." } };
    const plan = passByDays(body?.days);
    if (!plan) return { status: 400, body: { error: "Neznan paket." } };
    // j 2026-10-30: paket se ponudi samo učencu brez aktivne naročnine na Evklid.
    if (paidActive(parent)) return { status: 409, body: { error: "Ta račun že ima naročnino, zato paket pred testom ni potreben.", subscription: true } };
    if (passes.latestFor(studentId)) return { status: 409, body: { error: "Ta profil že ima aktiven paket pred testom.", active: true } };
    if (currencyOf(req, parent) !== "EUR") return { status: 400, body: { error: "Paketi pred testom so zaenkrat na voljo samo v evrih." } };
    const date = cleanDate(body?.test_date);
    const today = nowParts().date;
    const left = date ? Math.round((Date.parse(`${date}T12:00:00Z`) - Date.parse(`${today}T12:00:00Z`)) / 86400000) : -1;
    if (left < 0 || left > 29) return { status: 400, body: { error: "Paket pred testom je za test v naslednjih 30 dneh." } };
    return { plan, studentId, test: { date, name: cleanText(body?.test_name, 80) } };
  }

  function passLineItem(plan) {
    return {
      price_data: {
        currency: plan.currency.toLowerCase(),
        unit_amount: plan.amount,
        tax_behavior: "inclusive",
        product_data: { name: `Evklid – ${plan.label} (${plan.days} dni)` },
      },
      quantity: 1,
    };
  }

  // Plačilo paketa je uspelo: vklopi ga (enkrat). session = Stripe Checkout Session.
  function completePassSession(session) {
    if (session?.metadata?.kind !== "pass" || session.payment_status !== "paid") return false;
    const pass = passes.get(session.metadata.pass_id);
    if (!pass || String(pass.parent_id) !== String(session.metadata.parent_id)) return false;
    if (pass.status === "expired") log.error?.("[evklid] zamudno plačilo paketa po izteku čakanja; paket vklopljen", pass.id);
    const ok = passes.activate(pass.id, typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id);
    if (ok) {
      db.prepare("UPDATE pay_links SET done_at = datetime('now') WHERE pass_id = ? AND done_at IS NULL").run(pass.id);
      if (session.metadata.pay_link) db.prepare("UPDATE pay_links SET done_at = datetime('now') WHERE token_hash = ? AND done_at IS NULL").run(session.metadata.pay_link);
    }
    return ok;
  }

  // Naročnina, plačana prek povezave za starše: plačnikova stranka v Stripu postane stranka računa.
  async function completeSubSession(session) {
    const parent = getParent(Number(session?.metadata?.parent_id));
    if (!parent || !session.subscription) return false;
    const subId0 = typeof session.subscription === "string" ? session.subscription : session.subscription.id;
    if (paidActive(parent) && parent.sub_id && parent.sub_id !== subId0)
      log.error?.("[evklid] račun je plačan dvakrat (dve naročnini); prejšnjo je treba preklicati v Stripu", parent.id, parent.sub_id);
    if (session.customer) update(parent.id, { stripe_customer_id: session.customer });
    const subId = typeof session.subscription === "string" ? session.subscription : session.subscription.id;
    await applySubscription(parent.id, await stripe.request("GET", `/subscriptions/${subId}`));
    if (session.metadata.pay_link) db.prepare("UPDATE pay_links SET done_at = datetime('now') WHERE token_hash = ? AND done_at IS NULL").run(session.metadata.pay_link);
    return true;
  }

  // --- paket pred testom ---
  app.get("/api/students/:id/pass-offer", (req, res) => {
    const parent = req.parent;
    const studentId = Number(req.params.id);
    const active = passes.latestFor(studentId);
    const base = { billing: stripe.enabled, active: publicPass(active), passes: PASSES.map(({ days, amount, currency, label }) => ({ days, amount, currency, label })) };
    if (!stripe.enabled || active || paidActive(parent) || currencyOf(req, parent) !== "EUR") return res.json({ ...base, offer: null });
    const test = nextTest(schedules, studentId);
    if (!test) return res.json({ ...base, offer: null });
    // Pravila ponudb (server/placila/ponudbe.js): ne med poukom in ne, če jih je učitelj izklopil;
    // pod 15 let brez cene, le povezava s podatki za starše.
    const policy = offersFor(studentId);
    if (!policy.show) return res.json({ ...base, offer: null });
    // Preizkus, koda ali bonus, ki pokrije čas do dneva po testu: ponudba ni potrebna.
    const access = accessOf(parent);
    const coverEnd = Date.parse(`${test.date}T23:59:59Z`) + 86400000;
    if (isPremiumChild(access, childIds(parent.id), studentId) && access.until && Date.parse(access.until) >= coverEnd) return res.json({ ...base, offer: null });
    if (!policy.prices) return res.json({ ...base, passes: [], offer: { test, parent_info: true } });
    res.json({ ...base, offer: { test, suggested: passForDaysLeft(test.daysLeft)?.days ?? 30, pay_link: isMinor(parent) } });
  });

  app.post("/api/billing/pass", json, async (req, res) => {
    if (needStripe(res)) return;
    const p = req.parent;
    if (isMinor(p)) return res.status(403).json({ error: "Paket plača starš. Pošlji mu povezavo za plačilo.", pay_link: true });
    const c = checkPass(req, p, req.body);
    if (c.status) return res.status(c.status).json(c.body);
    if (!consented(req.body)) return res.status(400).json(consentError);
    try {
      const customer = await ensureCustomer(p);
      const passId = passes.create({ parentId: p.id, studentId: c.studentId, plan: c.plan, testDate: c.test.date, testName: c.test.name });
      const base = baseUrl(req);
      const meta = { kind: "pass", pass_id: passId, parent_id: p.id };
      const session = await stripe.request("POST", "/checkout/sessions", {
        mode: "payment",
        customer,
        client_reference_id: String(p.id),
        line_items: [passLineItem(c.plan)],
        success_url: `${base}/?billing=pass&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${base}/?billing=cancel`,
        locale: "sl",
        metadata: meta,
        payment_intent_data: { metadata: meta },
      });
      passes.setCheckout(passId, session.id);
      recordConsent(p.id, p.email, "pass", req.body?.lang);
      res.json({ url: session.url });
    } catch (err) {
      log.error?.("[evklid] Stripe paket:", err.message);
      res.status(502).json({ error: "Plačilne strani ni bilo mogoče odpreti. Poskusite znova." });
    }
  });

  // Vrnitev s plačilne strani (deluje tudi brez webhooka, npr. na domačem računalniku).
  app.post("/api/billing/pass/confirm", json, async (req, res) => {
    if (needStripe(res)) return;
    const id = String(req.body?.session_id || "");
    if (!/^cs_[\w]+$/.test(id)) return res.status(400).json({ error: "Neznana seja plačila." });
    try {
      const session = await stripe.request("GET", `/checkout/sessions/${id}`);
      if (String(session.metadata?.parent_id) !== String(req.parent.id)) return res.status(404).json({ error: "Plačilo ne obstaja." });
      completePassSession(session);
      const pass = passes.get(session.metadata?.pass_id);
      res.json({ pass: publicPass(pass), paid: pass?.status === "active" });
    } catch (err) {
      log.error?.("[evklid] Stripe paket (potrditev):", err.message);
      res.status(502).json({ error: "Plačila ni bilo mogoče preveriti. Osvežite stran čez minuto." });
    }
  });

  // --- povezava »Prosi starše za plačilo« ---
  const linkByToken = (token) => {
    if (!/^[\w-]{20,80}$/.test(String(token || ""))) return null;
    const l = db.prepare("SELECT * FROM pay_links WHERE token_hash = ?").get(sha256(token));
    return l && Date.parse(l.expires_at) > Date.now() ? l : null;
  };

  app.post("/api/billing/pay-link", json, (req, res) => {
    if (needStripe(res)) return;
    const p = req.parent;
    if (p.is_guest) return res.status(403).json({ error: "Najprej ustvari račun." });
    if (linkThrottle.blocked(`link${p.id}`)) return res.status(429).json({ error: "Preveč povezav v kratkem času. Poskusite čez eno uro." });
    const open = db.prepare("SELECT COUNT(*) AS n FROM pay_links WHERE parent_id = ? AND done_at IS NULL AND expires_at > ?").get(p.id, iso(Date.now())).n;
    if (open >= 5) return res.status(429).json({ error: "Odprtih je že 5 povezav za plačilo. Počakajte, da starš plača ali da povezave potečejo." });
    const kind = req.body?.kind === "pass" ? "pass" : "sub";
    let row;
    if (kind === "sub") {
      if (paidActive(p)) return res.status(409).json({ error: "Naročnino že imate." });
      const school = req.body?.school === true;
      const plan = school ? schoolPlanFor(req.body?.interval) : planFor(Number(req.body?.seats), req.body?.interval, currencyOf(req, p));
      if (!plan) return res.status(400).json({ error: "Neznan paket." });
      if (school && !hasSchoolChild(p.id)) return res.status(403).json({ error: "Ta cena velja samo za učence s šolsko licenco." });
      row = { plan_key: plan.key, student_id: null, days: null, test_date: null, test_name: "" };
    } else {
      const c = checkPass(req, p, req.body);
      if (c.status) return res.status(c.status).json(c.body);
      row = { plan_key: c.plan.key, student_id: c.studentId, days: c.plan.days, test_date: c.test.date, test_name: c.test.name };
    }
    linkThrottle.fail(`link${p.id}`);
    const token = randomToken(24);
    const expires = iso(Date.now() + PAY_LINK_DAYS * 86400000);
    db.prepare("INSERT INTO pay_links (token_hash, parent_id, kind, plan_key, student_id, days, test_date, test_name, expires_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)").run(
      sha256(token),
      p.id,
      kind,
      row.plan_key,
      row.student_id,
      row.days,
      row.test_date,
      row.test_name,
      expires,
    );
    res.status(201).json({ url: `${baseUrl(req)}/placaj.html?t=${token}`, expires_at: expires });
  });

  // Stran za starše (placaj.html) brez prijave: kaj plačujejo, za koga in koliko.
  function linkView(l) {
    const parent = getParent(l.parent_id);
    // Za naročnino: ime prvega profila na računu (najstnikov lasten profil).
    const sid = l.student_id ?? childIds(l.parent_id)[0];
    const student = sid ? store.getStudent(sid) : null;
    const plan = l.kind === "sub" ? planByKey(l.plan_key) : passByDays(l.days);
    const pass = l.pass_id ? passes.get(l.pass_id) : null;
    const paid = !!l.done_at || (l.kind === "sub" ? paidActive(parent) : pass?.status === "active");
    return {
      kind: l.kind,
      // Samo ime (vzdevek) iz aplikacije, nikoli e-naslov.
      name: student?.name || parent?.name || "",
      plan: plan && { label: plan.label, amount: plan.amount, currency: plan.currency || "EUR", interval: plan.interval || null, seats: plan.seats || 1, days: plan.days || null },
      test: l.kind === "pass" ? { name: l.test_name, date: l.test_date } : null,
      expires_at: l.expires_at,
      paid,
      grace_days: GRACE_DAYS,
      adult_text: ADULT_TEXT,
      withdrawal_text: WITHDRAWAL_TEXT,
    };
  }

  const publicLink = (req, res) => {
    const key = `pay${req.ip}`;
    if (publicThrottle.blocked(key)) {
      res.status(429).json({ error: "Preveč poskusov. Poskusite čez 15 minut." });
      return null;
    }
    const l = linkByToken(req.params.token);
    if (!l) {
      publicThrottle.fail(key);
      res.status(404).json({ error: "Povezava za plačilo ne obstaja ali je potekla. Prosite za novo.", expired: true });
      return null;
    }
    return l;
  };

  app.get("/api/pay/:token", (req, res) => {
    const l = publicLink(req, res);
    if (l) res.json(linkView(l));
  });

  app.post("/api/pay/:token/checkout", json, async (req, res) => {
    if (needStripe(res)) return;
    const l = publicLink(req, res);
    if (!l) return;
    const email = String(req.body?.email || "").trim().toLowerCase();
    if (!EMAIL_RE.test(email) || email.length > 200) return res.status(400).json({ error: "Vpišite veljaven e-naslov za račun." });
    if (!consented(req.body)) return res.status(400).json(consentError);
    const parent = getParent(l.parent_id);
    if (!parent) return res.status(404).json({ error: "Povezava za plačilo ne obstaja ali je potekla. Prosite za novo.", expired: true });
    if (linkView(l).paid) return res.status(409).json({ error: "To je že plačano. Hvala!", paid: true });
    const base = baseUrl(req);
    const back = `${base}/placaj.html?t=${encodeURIComponent(req.params.token)}`;
    try {
      let session;
      if (l.kind === "sub") {
        if (paidActive(parent)) return res.status(409).json({ error: "To je že plačano. Hvala!", paid: true });
        const plan = planByKey(l.plan_key);
        // Povezava je lahko stara: šolska cena le, če ima otrok šolsko licenco še ob plačilu.
        if (plan.school && !hasSchoolChild(parent.id)) return res.status(403).json({ error: "Ta cena velja samo za učence s šolsko licenco. Prosite za novo povezavo." });
        const { prices } = plan.school ? await stripe.ensureSchoolPrices() : await stripe.ensurePrices(plan.currency || "EUR");
        const trialEnd = Math.max(Date.parse(parent.trial_ends_at || 0) || 0, Date.parse(parent.promo_until || 0) || 0);
        const subscription_data = { metadata: { parent_id: parent.id } };
        if (trialEnd - Date.now() > 49 * 3600000) subscription_data.trial_end = Math.floor(trialEnd / 1000);
        session = await stripe.request("POST", "/checkout/sessions", {
          mode: "subscription",
          customer_email: email,
          client_reference_id: String(parent.id),
          line_items: [{ price: prices[plan.key], quantity: 1 }],
          success_url: `${back}&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: back,
          locale: (plan.currency || "EUR") === "EUR" ? "sl" : "auto",
          allow_promotion_codes: "true",
          subscription_data,
          metadata: { parent_id: parent.id, pay_link: l.token_hash },
        });
      } else {
        const plan = passByDays(l.days);
        if (paidActive(parent)) return res.status(409).json({ error: "Ta račun že ima naročnino, zato paket pred testom ni potreben.", subscription: true });
        if (passes.latestFor(l.student_id)) return res.status(409).json({ error: "To je že plačano. Hvala!", paid: true });
        // Ponoven klik na isti povezavi uporabi isti (še neplačan) paket, zato dve plačilni strani ne dasta dveh paketov.
        const prev = l.pass_id ? passes.get(l.pass_id) : null;
        const passId = prev?.status === "pending" ? prev.id : passes.create({ parentId: parent.id, studentId: l.student_id, plan, testDate: l.test_date, testName: l.test_name });
        db.prepare("UPDATE pay_links SET pass_id = ? WHERE token_hash = ?").run(passId, l.token_hash);
        const meta = { kind: "pass", pass_id: passId, parent_id: parent.id, pay_link: l.token_hash };
        session = await stripe.request("POST", "/checkout/sessions", {
          mode: "payment",
          customer_email: email,
          client_reference_id: String(parent.id),
          line_items: [passLineItem(plan)],
          success_url: `${back}&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: back,
          locale: "sl",
          metadata: meta,
          payment_intent_data: { metadata: meta },
        });
        passes.setCheckout(passId, session.id);
      }
      recordConsent(parent.id, email, `pay_link_${l.kind}`, req.body?.lang);
      res.json({ url: session.url });
    } catch (err) {
      log.error?.("[evklid] Stripe povezava za starše:", err.message);
      res.status(502).json({ error: "Plačilne strani ni bilo mogoče odpreti. Poskusite znova." });
    }
  });

  app.post("/api/pay/:token/confirm", json, async (req, res) => {
    if (needStripe(res)) return;
    const l = publicLink(req, res);
    if (!l) return;
    const id = String(req.body?.session_id || "");
    if (!/^cs_[\w]+$/.test(id)) return res.status(400).json({ error: "Neznana seja plačila." });
    try {
      const session = await stripe.request("GET", `/checkout/sessions/${id}`);
      if (session.metadata?.pay_link !== l.token_hash) return res.status(404).json({ error: "Plačilo ne obstaja." });
      if (l.kind === "pass") completePassSession(session);
      else if (session.status === "complete") await completeSubSession(session);
      res.json(linkView(db.prepare("SELECT * FROM pay_links WHERE token_hash = ?").get(l.token_hash)));
    } catch (err) {
      log.error?.("[evklid] Stripe povezava za starše (potrditev):", err.message);
      res.status(502).json({ error: "Plačila ni bilo mogoče preveriti. Osvežite stran čez minuto." });
    }
  });

  // --- skrbnik: aktivacijske kode ---
  const admin = (req, res) => {
    if (req.parent?.is_admin) return true;
    res.status(403).json({ error: "Samo za skrbnika." });
    return false;
  };
  app.get("/api/admin/promo-codes", (req, res) => {
    if (admin(req, res)) res.json({ codes: promo.list() });
  });
  app.post("/api/admin/promo-codes", json, (req, res) => {
    if (!admin(req, res)) return;
    const r = promo.create(req.body);
    if (r.error) return res.status(r.exists ? 409 : 400).json({ error: r.error });
    audit(db, { req, parentId: req.parent?.id, actor: "admin", action: "promo_create" });
    res.status(201).json({ codes: promo.list() });
  });
  app.post("/api/admin/promo-codes/:code/active", json, (req, res) => {
    if (!admin(req, res)) return;
    const r = promo.setActive(req.params.code, req.body?.active === true);
    if (r.error) return res.status(404).json({ error: r.error });
    audit(db, { req, parentId: req.parent?.id, actor: "admin", action: req.body?.active === true ? "promo_on" : "promo_off" });
    res.json({ codes: promo.list() });
  });

  // --- dnevna opravila (enkrat na dan po 3.00 v Ljubljani) ---
  const fmtDate = (isoText) => new Date(isoText).toLocaleDateString("sl-SI", { timeZone: "Europe/Ljubljana" });
  const fmtMoney = (minor, currency) => new Intl.NumberFormat("sl-SI", { style: "currency", currency }).format(minor / 10 ** currencyDecimals(currency));
  async function remind(p, kind, period, msg) {
    const claim = db.prepare("INSERT OR IGNORE INTO email_log (parent_id, kind, period) VALUES (?, ?, ?)").run(p.id, kind, period);
    if (!claim.changes) return 0;
    const ok = await sendMail(p.email, msg);
    if (!ok) db.prepare("UPDATE email_log SET ok = 0 WHERE parent_id = ? AND kind = ? AND period = ?").run(p.id, kind, period);
    return ok ? 1 : 0;
  }

  async function billingDaily(now = new Date(), { force = false } = {}) {
    const { date, hour } = ljNow(now);
    if (!force && (hour < 3 || kv.get("billing_daily") === date)) return null;
    kv.set("billing_daily", date);
    const out = { synced: 0, sync_errors: 0, expired: passes.expirePending(), promo_end: 0, renewal: 0 };
    // Usklajevanje s Stripom: če je kak webhook izgubljen (strežnik ugasnjen), ga ujame to.
    if (stripe.enabled) {
      for (const p of db.prepare("SELECT * FROM parents WHERE stripe_customer_id IS NOT NULL AND sub_id IS NOT NULL").all()) {
        try {
          await syncCustomer(p);
          out.synced++;
        } catch (err) {
          out.sync_errors++;
          log.error?.("[evklid] usklajevanje naročnine:", p.id, err.message);
        }
      }
    }
    const appUrl = baseUrl(null) + "/";
    const nowIso = iso(now.getTime());
    const in7 = iso(now.getTime() + 7 * 86400000);
    for (const p of db.prepare("SELECT * FROM parents WHERE email_verified_at IS NOT NULL AND is_guest = 0 AND promo_until > ? AND promo_until <= ?").all(nowIso, in7)) {
      if (paidActive(p, now.getTime())) continue;
      out.promo_end += await remind(p, "promo_end", p.promo_until.slice(0, 10), promoEndingEmail(fmtDate(p.promo_until), appUrl));
    }
    const in30 = iso(now.getTime() + 30 * 86400000);
    for (const p of db.prepare("SELECT * FROM parents WHERE sub_period_end > ? AND sub_period_end <= ? AND sub_cancel_at_period_end = 0").all(nowIso, in30)) {
      const plan = planByKey(p.sub_plan);
      if (plan?.interval !== "year" || !paidActive(p, now.getTime())) continue;
      out.renewal += await remind(p, "renewal", p.sub_period_end.slice(0, 10), renewalEmail(fmtDate(p.sub_period_end), fmtMoney(plan.amount, plan.currency || "EUR"), appUrl));
    }
    return out;
  }

  return { passes, passPremium, completePassSession, completeSubSession, billingDaily, recordConsent };
}
