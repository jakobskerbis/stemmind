import test from "node:test";
import assert from "node:assert/strict";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { Stripe, signWebhook, verifyWebhook, formEncode } from "../server/accounts/stripe.js";
import { accessFor, isPremiumChild } from "../server/accounts/plans.js";
import { weekKey, isSendTime } from "../server/accounts/weekly.js";

const SECRET = "whsec_test";
const YEAR = new Date().getFullYear();
const ADULT = "1985-04-12";

// Lažni Stripe + Resend: zapomni si klice in vrne smiselne odgovore.
function fakeFetch(calls) {
  let n = 0;
  return async (url, init = {}) => {
    const body = init.body ? (init.headers["Content-Type"]?.includes("json") ? JSON.parse(init.body) : Object.fromEntries(new URLSearchParams(init.body))) : null;
    const u = new URL(url);
    calls.push({ method: init.method, path: u.pathname, query: Object.fromEntries(u.searchParams), body, host: u.host });
    const ok = (data) => ({ ok: true, status: 200, json: async () => data });
    if (u.host === "api.resend.com") return ok({ id: "email_" + ++n });
    const p = u.pathname.replace("/v1", "");
    if (p === "/customers") return ok({ id: "cus_" + ++n });
    if (p === "/prices" && init.method === "GET") return ok({ data: [] });
    if (p === "/products") return ok({ id: "prod_1" });
    if (p === "/prices") return ok({ id: "price_" + body.lookup_key });
    if (p === "/checkout/sessions") return ok({ id: "cs_1", url: "https://checkout.stripe.test/cs_1" });
    if (p === "/billing_portal/configurations") return ok({ id: "bpc_1" });
    if (p === "/billing_portal/sessions") return ok({ url: "https://billing.stripe.test/p" });
    if (/\/balance_transactions$/.test(p)) return ok({ id: "cbtxn_1" });
    if (p.startsWith("/subscriptions")) return ok({ data: [] });
    return { ok: false, status: 404, json: async () => ({ error: { message: "ni" } }) };
  };
}

async function withServer(fn, extra = {}) {
  const store = openDb(":memory:");
  const calls = [];
  const mails = [];
  const app = createApp(store, {
    accounts: true,
    scheduler: false,
    stripeKey: "sk_test_x",
    resendKey: "re_x",
    webhookSecret: SECRET,
    fetchFn: fakeFetch(calls),
    log: { error() {} },
    streamFn: async ({ onText }) => {
      onText("ok");
      return { text: 'ok\n<<META subject=MAT topic="-" error=0 mode=A flag=none>>', stopReason: "end_turn" };
    },
    ...extra,
  });
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  // Odjemalec s piškotki (en na starša).
  const client = () => {
    const jar = {};
    return async (path, opts = {}) => {
      const res = await fetch(base + path, {
        method: opts.method || "GET",
        redirect: "manual",
        headers: { "Content-Type": "application/json", cookie: Object.entries(jar).map(([k, v]) => `${k}=${v}`).join("; "), ...(opts.headers || {}) },
        body: opts.raw ?? (opts.body ? JSON.stringify(opts.body) : undefined),
      });
      for (const c of res.headers.getSetCookie()) {
        const [kv] = c.split(";");
        const i = kv.indexOf("=");
        jar[kv.slice(0, i)] = kv.slice(i + 1);
      }
      const type = res.headers.get("content-type") || "";
      return { status: res.status, headers: res.headers, body: type.includes("json") ? await res.json() : await res.text() };
    };
  };
  try {
    await fn({ client, store, calls, mails, base });
  } finally {
    server.close();
  }
}

const verifyLink = (calls) => {
  const mail = calls.filter((c) => c.host === "api.resend.com").at(-1);
  return /\/api\/auth\/verify\?token=[\w-]+/.exec(mail.body.text)[0];
};

async function registerVerified(call, calls, email, extra = {}) {
  const r = await call("/api/auth/register", { method: "POST", body: { email, password: "geslo1234", accept_privacy: true, birth_date: ADULT, ...extra } });
  assert.equal(r.status, 201, JSON.stringify(r.body));
  const v = await call(verifyLink(calls));
  assert.equal(v.status, 302);
  return r.body.parent;
}

test("register, verify, consent and ownership", async () => {
  await withServer(async ({ client, calls }) => {
    const a = client();
    assert.equal((await a("/api/students")).status, 401);
    assert.equal((await a("/api/auth/register", { method: "POST", body: { email: "x@y.si", password: "geslo1234" } })).status, 400);

    const reg = await a("/api/auth/register", { method: "POST", body: { email: "Ana@Primer.si", password: "geslo1234", accept_privacy: true, birth_date: ADULT } });
    assert.equal(reg.status, 201);
    assert.equal(reg.body.parent.email, "ana@primer.si");
    assert.equal(reg.body.dev_verify_url, undefined); // Resend je nastavljen

    // Pred potrditvijo e-naslova otroka ni mogoče dodati.
    const early = await a("/api/students", { method: "POST", body: { name: "Miha", birth_year: YEAR - 12, consent: true } });
    assert.equal(early.status, 403);
    await a(verifyLink(calls));

    const noConsent = await a("/api/students", { method: "POST", body: { name: "Miha", birth_year: YEAR - 12 } });
    assert.equal(noConsent.status, 400);
    const kid = await a("/api/students", { method: "POST", body: { name: "Miha", birth_year: YEAR - 12, consent: true } });
    assert.equal(kid.status, 201);

    const acc = (await a("/api/account")).body;
    assert.equal(acc.access.tier, "trial");
    assert.equal(acc.children[0].premium, true);

    // Drug starš ne vidi in ne more spreminjati tujega otroka.
    const b = client();
    await registerVerified(b, calls, "bor@primer.si");
    assert.deepEqual((await b("/api/students")).body, []);
    assert.equal((await b(`/api/students/${kid.body.id}`)).status, 404);
    assert.equal((await b(`/api/students/${kid.body.id}`, { method: "DELETE" })).status, 404);
    const conv = (await a(`/api/students/${kid.body.id}/conversations`, { method: "POST" })).body;
    assert.equal((await b(`/api/conversations/${conv.id}`)).status, 404);
    assert.equal((await a(`/api/conversations/${conv.id}`)).status, 200);
    // Poraba AI: starš prek povezave (telefon) je ne vidi; na računalniku s strežnikom jo vidi
    // in lahko račun označi kot skrbniški, nato jo vidi tudi na telefonu.
    const tunnel = { headers: { "X-Forwarded-For": "1.2.3.4" } };
    assert.equal((await b("/api/usage", tunnel)).status, 403);
    assert.equal((await b("/api/usage/claim", { method: "POST", ...tunnel })).status, 403);
    const local = await b("/api/usage");
    assert.equal(local.status, 200);
    assert.equal(local.body.can_claim, true);
    assert.equal((await b("/api/usage/claim", { method: "POST" })).status, 200);
    assert.equal((await b("/api/usage", tunnel)).status, 200);
    assert.equal((await b("/api/usage")).body.can_claim, false);
    assert.equal((await a("/api/usage", tunnel)).status, 403);

    // Odjava in ponovna prijava.
    await a("/api/auth/logout", { method: "POST" });
    assert.equal((await a("/api/students")).status, 401);
    assert.equal((await a("/api/auth/login", { method: "POST", body: { email: "ana@primer.si", password: "napacno12" } })).status, 401);
    assert.equal((await a("/api/auth/login", { method: "POST", body: { email: "ANA@primer.si", password: "geslo1234" } })).status, 200);
    assert.equal((await a("/api/students")).body.length, 1);
  });
});

test("free tier limits tutor questions; subscription via webhook lifts it", async () => {
  process.env.STEMMIND_FREE_DAILY_QUESTIONS = "2";
  try {
    await withServer(async ({ client, calls, store }) => {
      const a = client();
      const parent = await registerVerified(a, calls, "cene@primer.si");
      const kid = (await a("/api/students", { method: "POST", body: { name: "Lan", birth_year: YEAR - 10, consent: true } })).body;
      // Preizkus je potekel.
      store.db.prepare("UPDATE parents SET trial_ends_at = '2020-01-01T00:00:00Z'").run();
      const conv = (await a(`/api/students/${kid.id}/conversations`, { method: "POST" })).body;
      const ask = (t) => a(`/api/conversations/${conv.id}/messages`, { method: "POST", body: { text: t } });
      assert.equal((await ask("prvo")).status, 200);
      assert.equal((await ask("drugo")).status, 200);
      const blocked = await ask("tretje");
      assert.equal(blocked.status, 429);
      assert.equal(blocked.body.upgrade, true);

      // Plačilo: checkout s pravilno ceno.
      const co = await a("/api/billing/checkout", { method: "POST", body: { seats: 1, interval: "year" } });
      assert.equal(co.body.url, "https://checkout.stripe.test/cs_1");
      const session = calls.find((c) => c.path === "/v1/checkout/sessions");
      assert.equal(session.body["line_items[0][price]"], "price_stemmind_1_year");
      assert.equal(session.body.mode, "subscription");
      assert.equal(session.body["subscription_data[trial_end]"], undefined); // preizkus je že potekel
      assert.equal(calls.filter((c) => c.path === "/v1/prices" && c.method === "POST").length, 4);
      const customer = store.db.prepare("SELECT stripe_customer_id FROM parents WHERE id = ?").get(parent.id).stripe_customer_id;

      // Webhook z napačnim podpisom je zavrnjen.
      const event = {
        type: "customer.subscription.updated",
        data: {
          object: {
            id: "sub_1",
            customer,
            status: "active",
            cancel_at_period_end: false,
            items: { data: [{ price: { id: "price_x", lookup_key: "stemmind_1_year" }, current_period_end: 1893456000 }] },
          },
        },
      };
      const raw = JSON.stringify(event);
      const anon = client();
      assert.equal((await anon("/api/stripe/webhook", { method: "POST", raw, headers: { "stripe-signature": signWebhook(raw, "wrong") } })).status, 400);
      const okHook = await anon("/api/stripe/webhook", { method: "POST", raw, headers: { "stripe-signature": signWebhook(raw, SECRET) } });
      assert.equal(okHook.status, 200);

      const acc = (await a("/api/account")).body;
      assert.equal(acc.access.tier, "paid");
      assert.equal(acc.parent.subscription.plan, "stemmind_1_year");
      assert.equal(acc.parent.subscription.period_end, "2030-01-01T00:00:00.000Z");
      assert.equal((await ask("tretje")).status, 200);
      assert.equal((await a("/api/billing/checkout", { method: "POST", body: { seats: 2, interval: "month" } })).status, 409);

      const portal = await a("/api/billing/portal", { method: "POST" });
      assert.equal(portal.body.url, "https://billing.stripe.test/p");
    });
  } finally {
    delete process.env.STEMMIND_FREE_DAILY_QUESTIONS;
  }
});

test("free tier stops at the monthly AI budget (all free students and per student)", async () => {
  process.env.STEMMIND_FREE_POOL_USD = "0.5";
  process.env.STEMMIND_FREE_STUDENT_USD = "0";
  try {
    await withServer(async ({ client, calls, store }) => {
      const a = client();
      await registerVerified(a, calls, "meja@primer.si");
      const kid = (await a("/api/students", { method: "POST", body: { name: "Tia", birth_year: YEAR - 10, consent: true } })).body;
      const conv = (await a(`/api/students/${kid.id}/conversations`, { method: "POST" })).body;
      const ask = (t) => a(`/api/conversations/${conv.id}/messages`, { method: "POST", body: { text: t } });
      store.db.prepare("INSERT INTO usage (student_id, model, kind, cost_usd) VALUES (?, 'claude-haiku', 'chat', 0.6)").run(kid.id);
      // Med preizkusom meja brezplačnega paketa ne velja.
      assert.equal((await ask("prvo")).status, 200);
      store.db.prepare("UPDATE parents SET trial_ends_at = '2020-01-01T00:00:00Z'").run();
      const pool = await ask("drugo");
      assert.equal(pool.status, 429);
      assert.match(pool.body.error, /za vse porabljena/);
      process.env.STEMMIND_FREE_POOL_USD = "0";
      process.env.STEMMIND_FREE_STUDENT_USD = "0.5";
      const per = await ask("tretje");
      assert.equal(per.status, 429);
      assert.match(per.body.error, /Ta mesec si porabil/);
      process.env.STEMMIND_FREE_STUDENT_USD = "0";
      assert.equal((await ask("četrto")).status, 200);
    });
  } finally {
    delete process.env.STEMMIND_FREE_POOL_USD;
    delete process.env.STEMMIND_FREE_STUDENT_USD;
  }
});

test("checkout carries remaining app trial into Stripe", async () => {
  await withServer(async ({ client, calls }) => {
    const a = client();
    await registerVerified(a, calls, "dani@primer.si");
    await a("/api/billing/checkout", { method: "POST", body: { seats: 2, interval: "month" } });
    const session = calls.find((c) => c.path === "/v1/checkout/sessions");
    assert.equal(session.body["line_items[0][price]"], "price_stemmind_2_month");
    const days = (Number(session.body["subscription_data[trial_end]"]) * 1000 - Date.now()) / 86400000;
    assert.ok(days > 6.9 && days <= 7, String(days));
  });
});

test("referral: both parents get a free month after the first payment", async () => {
  await withServer(async ({ client, calls, store }) => {
    const a = client();
    const ref = await registerVerified(a, calls, "eva@primer.si");
    const b = client();
    const reg = await b("/api/auth/register", { method: "POST", body: { email: "fran@primer.si", password: "geslo1234", accept_privacy: true, birth_date: ADULT, referral_code: ref.referral_code.toLowerCase() } });
    assert.equal(reg.body.referred, true);
    await b("/api/billing/checkout", { method: "POST", body: { seats: 2, interval: "month" } });
    const customer = store.db.prepare("SELECT stripe_customer_id FROM parents WHERE email = 'fran@primer.si'").get().stripe_customer_id;

    const send = (status) => {
      const raw = JSON.stringify({
        type: "customer.subscription.updated",
        data: { object: { id: "sub_9", customer, status, items: { data: [{ price: { lookup_key: "stemmind_2_month" }, current_period_end: 1893456000 }] } } },
      });
      return client()("/api/stripe/webhook", { method: "POST", raw, headers: { "stripe-signature": signWebhook(raw, SECRET) } });
    };
    await send("trialing");
    assert.equal(calls.filter((c) => c.path.endsWith("/balance_transactions")).length, 0); // še ni plačal
    await send("active");
    await send("active"); // ponovljen dogodek ne nagradi dvakrat

    const credits = calls.filter((c) => c.path.endsWith("/balance_transactions"));
    assert.equal(credits.length, 1);
    assert.equal(credits[0].body.amount, "-1599"); // povabljeni: dobropis v višini mesečne naročnine
    const referrer = (await a("/api/account")).body;
    assert.equal(referrer.referral.rewards, 1);
    assert.equal(referrer.access.tier, "trial"); // še v preizkusu, mesec se doda kot bonus
    const bonus = store.db.prepare("SELECT bonus_until FROM parents WHERE email = 'eva@primer.si'").get().bonus_until;
    assert.ok(Date.parse(bonus) > Date.now() + 29 * 86400000);
  });
});

test("weekly report, export and account deletion", async () => {
  await withServer(async ({ client, calls, store }) => {
    const a = client();
    await registerVerified(a, calls, "gal@primer.si");
    const kid = (await a("/api/students", { method: "POST", body: { name: "Zala", birth_year: YEAR - 13, consent: true } })).body;
    store.db.prepare("INSERT INTO xp_events (student_id, amount, reason) VALUES (?, 40, 'test')").run(kid.id);

    const preview = await a("/api/account/weekly-report/preview");
    assert.match(preview.body, /Zala/);
    assert.match(preview.body, /<b>40<\/b>/);
    const sent = await a("/api/account/weekly-report/send", { method: "POST" });
    assert.equal(sent.status, 200);
    const mail = calls.filter((c) => c.host === "api.resend.com").at(-1);
    assert.equal(mail.body.to[0], "gal@primer.si");
    assert.match(mail.body.subject, /Zala/);

    // Odjava od poročil prek povezave.
    const unsub = /\/api\/account\/unsubscribe\?token=[\w-]+/.exec(mail.body.text)[0];
    await client()(unsub);
    assert.equal((await a("/api/account")).body.parent.weekly_email, false);

    const consent = store.db.prepare("SELECT * FROM consents WHERE student_id = ?").get(kid.id);
    assert.equal(consent.under_15, 1);
    assert.equal(consent.parent_email, "gal@primer.si");

    const exp = await a("/api/account/export");
    assert.equal(exp.body.children[0].name, "Zala");
    assert.equal(exp.body.parent.password_hash, undefined);

    assert.equal((await a("/api/account", { method: "DELETE", body: { password: "narobe123" } })).status, 401);
    assert.equal((await a("/api/account", { method: "DELETE", body: { password: "geslo1234" } })).status, 200);
    assert.equal(store.db.prepare("SELECT COUNT(*) AS n FROM students").get().n, 0);
    assert.equal(store.db.prepare("SELECT COUNT(*) AS n FROM consents").get().n, 0);
    assert.equal((await a("/api/account")).status, 401);
  });
});

test("weekly scheduler sends once per week", async () => {
  const { mountAccounts } = await import("../server/accounts/index.js");
  const express = (await import("express")).default;
  const store = openDb(":memory:");
  const calls = [];
  const api = mountAccounts(express(), store, { accounts: true, scheduler: false, resendKey: "re_x", fetchFn: fakeFetch(calls), log: { error() {} } });
  store.db.prepare(
    "INSERT INTO parents (email, password_hash, privacy_version, unsubscribe_token, referral_code, email_verified_at) VALUES ('i@p.si', 'x', 'v', 't', 'C1', '2026-01-01')",
  ).run();
  const s = store.createStudent("Ivo");
  store.db.prepare("UPDATE students SET parent_id = 1 WHERE id = ?").run(s.id);
  assert.equal(await api.sendWeeklyAll(), 1);
  assert.equal(await api.sendWeeklyAll(), 0);
});

test("helpers: webhook signature, form encoding, access, week key", () => {
  const sig = signWebhook("{}", SECRET);
  assert.ok(verifyWebhook("{}", sig, SECRET));
  assert.ok(!verifyWebhook("{ }", sig, SECRET));
  assert.ok(!verifyWebhook("{}", signWebhook("{}", SECRET, 1000), SECRET));
  assert.equal(formEncode({ a: { b: 1 }, c: [{ d: 2 }], e: ["x"] }).toString(), "a%5Bb%5D=1&c%5B0%5D%5Bd%5D=2&e%5B0%5D=x");

  const now = Date.parse("2026-10-27T12:00:00Z");
  assert.equal(accessFor({ sub_status: "active", sub_seats: 2 }, now).tier, "paid");
  assert.equal(accessFor({ sub_status: "canceled", trial_ends_at: "2026-10-30T00:00:00Z" }, now).tier, "trial");
  assert.equal(accessFor({ bonus_until: "2026-11-30T00:00:00Z" }, now).tier, "bonus");
  assert.equal(accessFor({}, now).tier, "free");
  assert.ok(isPremiumChild({ seats: 1 }, [5, 3], 3));
  assert.ok(!isPremiumChild({ seats: 1 }, [5, 3], 5));

  assert.equal(weekKey(new Date("2026-10-27T12:00:00Z")), "2026-W44");
  assert.equal(weekKey(new Date("2027-01-01T12:00:00Z")), "2026-W53");
  assert.ok(isSendTime(new Date("2026-10-25T17:30:00Z"))); // nedelja 18:30 v Ljubljani
  assert.ok(!isSendTime(new Date("2026-10-26T17:30:00Z")));
});

test("anti-sharing: seats per plan, one profile swap per 30 days", async () => {
  await withServer(async ({ client, calls, store }) => {
    const a = client();
    await registerVerified(a, calls, "jan@primer.si");
    const add = (name) => a("/api/students", { method: "POST", body: { name, birth_year: YEAR - 11, consent: true } });
    // Preizkus: 2 profila.
    const k1 = (await add("Ana")).body;
    assert.equal((await add("Bor")).status, 201);
    const third = await add("Cene");
    assert.equal(third.status, 400);
    assert.equal(third.body.seats, true);

    // Menjava: izbris + nov profil je dovoljen enkrat.
    assert.equal((await a(`/api/students/${k1.id}`, { method: "DELETE" })).status, 200);
    const k3 = await add("Cene");
    assert.equal(k3.status, 201);
    await a(`/api/students/${k3.body.id}`, { method: "DELETE" });
    const again = await add("Dan");
    assert.equal(again.status, 400);
    assert.equal(again.body.swap, true);
    assert.ok((await a("/api/account")).body.swap_blocked_until);

    // Po 30 dneh spet gre.
    store.db.prepare("UPDATE profile_changes SET created_at = datetime('now','-31 days')").run();
    assert.equal((await add("Dan")).status, 201);

    // Brezplačni paket: samo 1 profil.
    store.db.prepare("UPDATE parents SET trial_ends_at = '2020-01-01T00:00:00Z'").run();
    store.db.prepare("UPDATE profile_changes SET created_at = datetime('now','-31 days')").run();
    const kids = (await a("/api/students")).body;
    await a(`/api/students/${kids[0].id}`, { method: "DELETE" });
    await a(`/api/students/${kids[1].id}`, { method: "DELETE" });
    store.db.prepare("UPDATE profile_changes SET created_at = datetime('now','-31 days')").run();
    assert.equal((await add("Eva")).status, 201);
    assert.equal((await add("Fran")).body.seats, true);
  });
});

test("anti-sharing: a profile is open on one device at a time", async () => {
  await withServer(async ({ client, calls, store }) => {
    const phone = client();
    await registerVerified(phone, calls, "kaja@primer.si");
    const kid = (await phone("/api/students", { method: "POST", body: { name: "Lan", birth_year: YEAR - 12, consent: true } })).body;
    assert.equal((await phone(`/api/students/${kid.id}/xp`)).status, 200);

    // Isti račun na drugi napravi (drug piškotek naprave).
    const tablet = client();
    assert.equal((await tablet("/api/auth/login", { method: "POST", body: { email: "kaja@primer.si", password: "geslo1234" } })).status, 200);
    assert.equal((await tablet("/api/students")).body.length, 1); // seznam profilov je viden
    const blocked = await tablet(`/api/students/${kid.id}/xp`);
    assert.equal(blocked.status, 409);
    assert.equal(blocked.body.taken, true);

    // Prevzem: tablica nadaljuje, telefon se ustavi.
    assert.equal((await tablet(`/api/students/${kid.id}/claim`, { method: "POST" })).status, 200);
    assert.equal((await tablet(`/api/students/${kid.id}/xp`)).status, 200);
    assert.equal((await phone(`/api/students/${kid.id}/xp`)).status, 409);
    const conv = (await tablet(`/api/students/${kid.id}/conversations`, { method: "POST" })).body;
    assert.equal((await phone(`/api/conversations/${conv.id}`)).status, 409);

    // Po 30 minutah nedejavnosti lahko druga naprava nadaljuje brez prevzema.
    store.db.prepare("UPDATE profile_claims SET last_seen = last_seen - 31 * 60000").run();
    assert.equal((await phone(`/api/students/${kid.id}/xp`)).status, 200);

    const acc = (await phone("/api/account")).body;
    assert.equal(acc.children[0].devices.length, 2);
    assert.equal(acc.device_warn_limit, 3);

    // Odjava z drugih naprav: tablica izgubi prijavo.
    await phone("/api/account/logout-others", { method: "POST" });
    assert.equal((await tablet("/api/students")).status, 401);
    assert.equal((await phone("/api/students")).status, 200);
  });
});

test("textbook: interactive part only with a paid plan or trial; PDF is public", async () => {
  await withServer(async ({ client, calls, store, base }) => {
    const a = client();
    await registerVerified(a, calls, "uci@primer.si");
    const kid = (await a("/api/students", { method: "POST", body: { name: "Eva", birth_year: YEAR - 13, consent: true } })).body;
    const url = `/api/students/${kid.id}/lesson?id=MAT-OS-8/pitagorov-izrek`;
    const trial = (await a(url)).body;
    assert.equal(trial.interactive, true);
    assert.equal(trial.demo.id, "pitagora");

    store.db.prepare("UPDATE parents SET trial_ends_at = '2020-01-01T00:00:00Z'").run();
    const free = (await a(url)).body;
    assert.equal(free.interactive, false);
    assert.equal(free.demo, null);
    assert.equal(free.locked.demo, "Pitagorov izrek s kvadrati");
    assert.ok(free.lesson.sections.length > 3, "besedilo ostane brezplačno");

    // Neprijavljen obiskovalec ne dobi lekcije prek API, PDF pa je javen.
    assert.equal((await client()(url)).status, 401);
    const pdf = await fetch(`${base}/ucbenik/MAT-OS-8`);
    assert.equal(pdf.status, 200);
  });
});

test("leagues with accounts: teacher's classes belong to the account; children join only their own", async () => {
  await withServer(async ({ client, calls }) => {
    const teacher = client();
    await registerVerified(teacher, calls, "ucitelj@sola.si");
    assert.equal((await client()("/api/classes", { method: "POST", body: { name: "8.b" } })).status, 401);
    const cls = (await teacher("/api/classes", { method: "POST", body: { name: "8.b" } })).body;
    assert.deepEqual((await teacher("/api/teacher/classes")).body.map((c) => c.code), [cls.code]);
    assert.equal((await teacher(`/api/classes/${cls.code}`)).status, 200); // brez ključa

    const parent = client();
    await registerVerified(parent, calls, "stars@primer.si");
    assert.equal((await parent(`/api/classes/${cls.code}`)).status, 403);
    const kidId = (await parent("/api/students", { method: "POST", body: { name: "Lan", birth_year: YEAR - 12, consent: true } })).body.id;
    assert.equal((await parent(`/api/students/${kidId}/classes`, { method: "POST", body: { code: cls.code } })).status, 201);
    assert.equal((await teacher(`/api/students/${kidId}/league`)).status, 404); // tuj otrok
    assert.equal((await teacher(`/api/classes/${cls.code}`)).body.members.length, 1);
  });
});

test("sprememba cene: nova cena v Stripu, stara arhivirana, portal se ustvari znova", async () => {
  const calls = [];
  const kv = new Map();
  kv.set("stripe_prices", JSON.stringify({ product: "prod_1", prices: { stemmind_1_month: "price_old" }, amounts: { stemmind_1_month: 899 } }));
  kv.set("stripe_portal_config", "bpc_old");
  const fetchFn = async (url, init) => {
    const u = new URL(url);
    const body = init.body ? Object.fromEntries(new URLSearchParams(init.body)) : null;
    calls.push({ method: init.method, path: u.pathname, body });
    const ok = (data) => ({ ok: true, status: 200, json: async () => data });
    if (u.pathname === "/v1/prices" && init.method === "GET") {
      // Stara cena za 1 otroka (8,99 €), ostale so že prave.
      return ok({
        data: [
          { id: "price_old", lookup_key: "stemmind_1_month", unit_amount: 899, product: "prod_1" },
          { id: "price_1y", lookup_key: "stemmind_1_year", unit_amount: 8900, product: "prod_1" },
          { id: "price_2m", lookup_key: "stemmind_2_month", unit_amount: 1599, product: "prod_1" },
          { id: "price_2y", lookup_key: "stemmind_2_year", unit_amount: 13900, product: "prod_1" },
        ],
      });
    }
    if (u.pathname === "/v1/prices") return ok({ id: "price_new" });
    if (u.pathname === "/v1/prices/price_old") return ok({ id: "price_old", active: false });
    return { ok: false, status: 404, json: async () => ({ error: { message: "ni" } }) };
  };
  const stripe = new Stripe({ secretKey: "sk_test_x", fetchFn, kv: { get: (k) => kv.get(k), set: (k, v) => kv.set(k, v) } });
  const r = await stripe.ensurePrices();
  assert.equal(r.prices.stemmind_1_month, "price_new");
  assert.equal(r.prices.stemmind_1_year, "price_1y");
  const created = calls.find((c) => c.path === "/v1/prices" && c.method === "POST");
  assert.equal(created.body.unit_amount, "999");
  assert.equal(created.body.transfer_lookup_key, "true");
  assert.equal(calls.find((c) => c.path === "/v1/prices/price_old").body.active, "false");
  assert.equal(kv.get("stripe_portal_config"), ""); // portal z novimi cenami
  assert.equal(JSON.parse(kv.get("stripe_prices")).amounts.stemmind_1_month, 999);
  // Drugi klic bere iz predpomnilnika.
  const n = calls.length;
  await stripe.ensurePrices();
  assert.equal(calls.length, n);
});


test("aktivacijska koda: poln dostop za prve N računov, enkrat na račun", async () => {
  const promo = { code: "STEMMIND100", limit: 2, days: 365, seats: 1 };
  await withServer(async ({ client, calls, store }) => {
    // Ob registraciji (male črke, presledki), dostop po koncu preizkusa ostane.
    const a = client();
    const reg = await a("/api/auth/register", { method: "POST", body: { email: "a@kod.si", password: "geslo1234", accept_privacy: true, birth_date: ADULT, promo_code: " stemmind100 " } });
    assert.equal(reg.status, 201);
    const days = (Date.parse(reg.body.promo_until) - Date.now()) / 86400000;
    assert.ok(days > 364.9 && days <= 365, String(days));
    let acc = (await a("/api/account")).body;
    assert.equal(acc.access.tier, "promo");
    assert.equal(acc.access.seats, 2); // med preizkusom ostaneta 2 profila
    assert.equal(acc.promo.redeemed, true);
    assert.equal(acc.promo.admin, undefined);
    store.db.prepare("UPDATE parents SET trial_ends_at = ? WHERE email = ?").run("2020-01-01T00:00:00Z", "a@kod.si");
    acc = (await a("/api/account")).body;
    assert.deepEqual([acc.access.tier, acc.access.seats], ["promo", 1]);
    // Drugič na istem računu ne gre.
    assert.equal((await a("/api/account/promo", { method: "POST", body: { code: "STEMMIND100" } })).status, 400);

    // Napačna koda ne ustavi registracije.
    const b = client();
    const regB = await b("/api/auth/register", { method: "POST", body: { email: "b@kod.si", password: "geslo1234", accept_privacy: true, birth_date: ADULT, promo_code: "NAPAKA" } });
    assert.equal(regB.status, 201);
    assert.match(regB.body.promo_error, /ni veljavna/);
    assert.equal((await b("/api/account")).body.access.tier, "trial");
    // Pozneje v zavihku Račun.
    const ok = await b("/api/account/promo", { method: "POST", body: { code: "STEMMIND100" } });
    assert.equal(ok.status, 200);
    assert.equal(ok.body.access.tier, "promo");

    // Limit 2 je dosežen.
    const c = client();
    await registerVerified(c, calls, "c@kod.si");
    const full = await c("/api/account/promo", { method: "POST", body: { code: "STEMMIND100" } });
    assert.equal(full.status, 410);
    assert.match(full.body.error, /Vseh 2 aktivacij/);
    assert.equal(store.db.prepare("SELECT COUNT(*) AS n FROM promo_redemptions").get().n, 2);

    // Preostanek kode se prenese v Stripe, da starš ne plača, dokler koda velja.
    store.db.prepare("UPDATE parents SET email_verified_at = datetime('now') WHERE email = ?").run("a@kod.si");
    await a("/api/billing/checkout", { method: "POST", body: { seats: 1, interval: "month" } });
    const session = calls.find((x) => x.path === "/v1/checkout/sessions");
    const left = (Number(session.body["subscription_data[trial_end]"]) * 1000 - Date.now()) / 86400000;
    assert.ok(left > 364, String(left));
  }, { promo });
});

test("aktivacijska koda: skrbnik vidi porabo in povezavo", async () => {
  process.env.STEMMIND_ADMIN_EMAILS = "skrbnik@kod.si";
  try {
    await withServer(async ({ client }) => {
      const a = client();
      await a("/api/auth/register", { method: "POST", body: { email: "skrbnik@kod.si", password: "geslo1234", accept_privacy: true, birth_date: ADULT } });
      assert.equal((await a("/api/usage", { headers: { "X-Forwarded-For": "1.2.3.4" } })).status, 200);
      const { admin } = (await a("/api/account")).body.promo;
      assert.equal(admin.code, "STEMMIND100");
      assert.deepEqual([admin.used, admin.limit, admin.days], [0, 100, 365]);
      assert.match(admin.url, /\/\?koda=STEMMIND100$/);
    });
  } finally {
    delete process.env.STEMMIND_ADMIN_EMAILS;
  }
});

test("preverjanje starosti: premlad otrok dobi povezavo za starše, dijak ima samo svoj profil", async () => {
  const { minAgeOf, ageOn, parseBirthDate } = await import("../server/accounts/age.js");
  assert.equal(minAgeOf("SI"), 15);
  assert.equal(minAgeOf("US"), 15); // nikoli pod slovensko mejo
  assert.equal(minAgeOf("DE"), 16);
  assert.equal(minAgeOf("IN"), 18);
  assert.equal(parseBirthDate("2010-02-30"), null);
  assert.equal(ageOn("2010-06-15", new Date(2025, 5, 14)), 14);
  assert.equal(ageOn("2010-06-15", new Date(2025, 5, 15)), 15);

  const ymd = (yearsAgo) => {
    const d = new Date();
    d.setFullYear(d.getFullYear() - yearsAgo);
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  };
  await withServer(async ({ client, calls, store }) => {
    const kid = client();
    const body = { email: "otrok@primer.si", password: "geslo1234", accept_privacy: true, country: "SI" };
    assert.equal((await kid("/api/auth/register", { method: "POST", body })).status, 400); // brez datuma
    const young = await kid("/api/auth/register", { method: "POST", body: { ...body, birth_date: ymd(12) } });
    assert.equal(young.status, 403);
    assert.equal(young.body.under_age, true);
    assert.equal(young.body.min_age, 15);
    // Nič ni shranjeno; drug datum na isti napravi deluje samo za polnoletne (starša).
    assert.equal(store.db.prepare("SELECT COUNT(*) AS n FROM parents").get().n, 0);
    assert.equal((await kid("/api/auth/register", { method: "POST", body: { ...body, birth_date: ymd(16) } })).status, 403);
    const parent = await kid("/api/auth/register", { method: "POST", body: { ...body, email: "stars@primer.si", birth_date: ymd(40) } });
    assert.equal(parent.status, 201);
    assert.equal(parent.body.parent.minor, false);

    // Strani za starše: cene brez prijave.
    const prices = await client()("/api/account/prices?country=SI");
    assert.equal(prices.status, 200);
    assert.equal(prices.body.currency, "EUR");
    assert.equal(prices.body.plans.length, 4);

    // Dijak (16) ustvari račun zase: samo en profil, letnica iz datuma rojstva.
    const teen = client();
    const reg = await teen("/api/auth/register", { method: "POST", body: { ...body, email: "dijak@primer.si", birth_date: ymd(16) } });
    assert.equal(reg.status, 201);
    assert.equal(reg.body.parent.minor, true);
    await teen(verifyLink(calls));
    const own = await teen("/api/students", { method: "POST", body: { name: "Jaka", birth_year: YEAR - 10, consent: true } });
    assert.equal(own.status, 201);
    assert.equal(own.body.birth_year, Number(ymd(16).slice(0, 4)));
    const consent = store.db.prepare("SELECT text FROM consents WHERE student_id = ?").get(own.body.id);
    assert.match(consent.text, /^Profil je moj/);
    const sibling = await teen("/api/students", { method: "POST", body: { name: "Brat", birth_year: YEAR - 8, consent: true } });
    assert.equal(sibling.status, 403);

    // Polnoleten dijak (npr. 18 let, SŠ) izbere »Zame«: lastno soglasje, letnica iz datuma rojstva.
    const adult = client();
    await registerVerified(adult, calls, "maturant@primer.si", { birth_date: ymd(18) });
    const mine = await adult("/api/students", { method: "POST", body: { name: "Tina", birth_year: YEAR - 9, self: true, consent: true } });
    assert.equal(mine.status, 201);
    assert.equal(mine.body.birth_year, Number(ymd(18).slice(0, 4)));
    assert.match(store.db.prepare("SELECT text FROM consents WHERE student_id = ?").get(mine.body.id).text, /^Profil je moj/);
    // Star račun brez datuma rojstva: »Zame« samo, če je letnica dovolj stara.
    store.db.prepare("UPDATE parents SET birth_date = NULL WHERE email = 'maturant@primer.si'").run();
    const tooYoung = await adult("/api/students", { method: "POST", body: { name: "Mlajši", birth_year: YEAR - 15, self: true, consent: true } });
    assert.equal(tooYoung.status, 403);
    assert.equal(tooYoung.body.self_too_young, true);
  });
});
