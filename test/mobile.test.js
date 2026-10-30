// Strežnik za mobilno aplikacijo (server/mobile): seja v glavi, prijava z Apple, nakupi App Store in
// Google Play, potisna obvestila, stran /prenesi.
import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { openDb } from "../server/db.js";
import { createApp } from "../server/app.js";
import { verifyAppleJws, AppleSignatureError, APPLE_ROOT_G3 } from "../server/mobile/apple-crypto.js";
import { BUNDLE_ID, STORE_PRODUCTS, appleState } from "../server/mobile/store-billing.js";
import { googleSubscriptionState } from "../server/mobile/google-play.js";
import { goalPushText } from "../server/mobile/push.js";

const CHAIN = JSON.parse(fs.readFileSync(new URL("./fixtures/apple-chain.json", import.meta.url), "utf8"));
const ADULT = "1985-04-12";
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");

// JWS, podpisan s testno verigo (enaka oblika kot Applov).
function appleJws(payload, { x5c = CHAIN.x5c, key = CHAIN.leafKey } = {}) {
  const input = `${b64({ alg: "ES256", x5c })}.${b64(payload)}`;
  const sig = crypto.sign("sha256", Buffer.from(input), { key, dsaEncoding: "ieee-p1363" });
  return `${input}.${sig.toString("base64url")}`;
}
const tx = (over = {}) => ({
  bundleId: BUNDLE_ID,
  productId: STORE_PRODUCTS.find((p) => p.seats === 2 && p.interval === "month").id,
  transactionId: "2000000001",
  originalTransactionId: "1000000001",
  expiresDate: Date.now() + 30 * 86400000,
  environment: "Sandbox",
  ...over,
});

// Prijava z Apple: lasten ključ RSA namesto Applovega.
const RSA = crypto.generateKeyPairSync("rsa", { modulusLength: 2048 });
const JWK = { ...RSA.publicKey.export({ format: "jwk" }), kid: "test-kid", alg: "RS256", use: "sig" };
function identityToken(claims, nonceRaw) {
  const input = `${b64({ alg: "RS256", kid: "test-kid" })}.${b64({
    iss: "https://appleid.apple.com",
    aud: BUNDLE_ID,
    exp: Math.floor(Date.now() / 1000) + 600,
    iat: Math.floor(Date.now() / 1000),
    nonce: crypto.createHash("sha256").update(nonceRaw).digest("hex"),
    ...claims,
  })}`;
  return `${input}.${crypto.sign("RSA-SHA256", Buffer.from(input), RSA.privateKey).toString("base64url")}`;
}
const NONCE = "nakljucni-niz-1234567890";

async function withServer(fn, mobile = {}) {
  const store = openDb(":memory:");
  const play = { enabled: true, subs: new Map(), async subscription(t) { return this.subs.get(t) || null; } };
  const app = createApp(store, {
    accounts: true,
    scheduler: false,
    log: { error() {}, warn() {}, info() {} },
    mobile: { appleJws: { rootFingerprint: CHAIN.rootFingerprint }, appleKeys: [JWK], play, env: { EVKLID_GOOGLE_RTDN_TOKEN: "skrivnost-rtdn" }, ...mobile },
  });
  const server = app.listen(0);
  const base = `http://127.0.0.1:${server.address().port}`;
  // Odjemalec kot mobilna aplikacija: brez piškotkov, seja v glavi.
  const appClient = (device = crypto.randomBytes(24).toString("base64url")) => {
    let session = null;
    const call = async (path, opts = {}) => {
      const res = await fetch(base + path, {
        method: opts.method || (opts.body ? "POST" : "GET"),
        headers: {
          "content-type": "application/json",
          "x-evklid-app": "ios/1.0.0",
          "x-evklid-device": device,
          ...(session ? { authorization: `Bearer ${session}` } : {}),
        },
        body: opts.body ? JSON.stringify(opts.body) : undefined,
      });
      const s = res.headers.get("x-evklid-session");
      if (s) session = s === "-" ? null : s;
      const type = res.headers.get("content-type") || "";
      return { status: res.status, headers: res.headers, body: type.includes("json") ? await res.json() : await res.text() };
    };
    call.session = () => session;
    return call;
  };
  const adult = async (c, email = "starsh@primer.si") => {
    const r = await c("/api/auth/register", { body: { email, password: "geslo12345", accept_privacy: true, birth_date: ADULT } });
    assert.equal(r.status, 201, JSON.stringify(r.body));
    store.db.prepare("UPDATE parents SET email_verified_at = datetime('now') WHERE email = ?").run(email);
    return store.db.prepare("SELECT * FROM parents WHERE email = ?").get(email);
  };
  try {
    await fn({ base, store, appClient, adult, play });
  } finally {
    server.close();
  }
}

test("app session travels in headers, never as cookies", async () => {
  await withServer(async ({ appClient, adult }) => {
    const c = appClient();
    await adult(c);
    assert.ok(c.session()?.length >= 20, "seja v glavi X-Evklid-Session");
    const created = await c("/api/students", { body: { name: "Ana", self: true, consent: true } });
    assert.equal(created.status, 201, JSON.stringify(created.body));
    const list = await c("/api/students");
    assert.equal(list.status, 200);
    assert.equal(list.headers.getSetCookie().length, 0, "aplikacija ne dobi piškotkov");
    // Brez seje ni dostopa, tudi s pravo napravo.
    const anon = appClient();
    assert.equal((await anon("/api/students")).status, 401);
    // Odjava počisti sejo.
    await c("/api/auth/logout", { body: {} });
    assert.equal(c.session(), null);
  });
});

test("Apple JWS: test chain verifies, Apple root is pinned, tampering fails", () => {
  const payload = verifyAppleJws(appleJws(tx()), { rootFingerprint: CHAIN.rootFingerprint });
  assert.equal(payload.originalTransactionId, "1000000001");
  // Ista veriga ni Applova: z resničnim korenom zavrnjena.
  assert.throws(() => verifyAppleJws(appleJws(tx())), AppleSignatureError);
  assert.notEqual(APPLE_ROOT_G3, CHAIN.rootFingerprint);
  // Spremenjena vsebina, drugačen ključ ali manjkajoča veriga.
  const [h, , s] = appleJws(tx()).split(".");
  assert.throws(() => verifyAppleJws(`${h}.${b64(tx({ expiresDate: 9e15 }))}.${s}`, { rootFingerprint: CHAIN.rootFingerprint }), AppleSignatureError);
  const other = crypto.generateKeyPairSync("ec", { namedCurve: "P-256" }).privateKey;
  assert.throws(() => verifyAppleJws(appleJws(tx(), { key: other }), { rootFingerprint: CHAIN.rootFingerprint }), AppleSignatureError);
  assert.throws(() => verifyAppleJws(appleJws(tx(), { x5c: CHAIN.x5c.slice(0, 2) }), { rootFingerprint: CHAIN.rootFingerprint }), AppleSignatureError);
  // List brez Applove razširitve za podpis nakupov: veriga, kjer je vmesno potrdilo na mestu lista.
  assert.throws(() => verifyAppleJws(appleJws(tx(), { x5c: [CHAIN.x5c[1], CHAIN.x5c[2], CHAIN.x5c[2]] }), { rootFingerprint: CHAIN.rootFingerprint }), AppleSignatureError);
});

test("App Store purchase gives the plan, other account is refused, refund notification ends it", async () => {
  await withServer(async ({ appClient, adult, store, base }) => {
    const c = appClient();
    const p = await adult(c);
    const info = await c("/api/billing/store");
    assert.equal(info.status, 200);
    assert.match(info.body.account_token, /^[0-9a-f-]{36}$/);
    assert.equal(info.body.products.length, 4);
    const token = info.body.account_token;

    // Nakup drugega računa (drug appAccountToken) je zavrnjen.
    const foreign = await c("/api/billing/apple", { body: { signed_transaction: appleJws(tx({ appAccountToken: crypto.randomUUID() })) } });
    assert.equal(foreign.status, 409);
    // Napačna aplikacija.
    assert.equal((await c("/api/billing/apple", { body: { signed_transaction: appleJws(tx({ bundleId: "com.drug" })) } })).status, 400);

    const ok = await c("/api/billing/apple", { body: { signed_transaction: appleJws(tx({ appAccountToken: token })) } });
    assert.equal(ok.status, 200, JSON.stringify(ok.body));
    assert.equal(ok.body.account.access.tier, "paid");
    assert.equal(ok.body.account.access.seats, 2);
    let row = store.db.prepare("SELECT sub_provider, sub_id, sub_status, sub_plan FROM parents WHERE id = ?").get(p.id);
    assert.deepEqual({ ...row }, { sub_provider: "apple", sub_id: "apple:1000000001", sub_status: "active", sub_plan: "evklid_2_month" });

    // Isti nakup (»Obnovi nakupe«) z drugim računom: zavrnjen.
    const c2 = appClient();
    await adult(c2, "drugi@primer.si");
    assert.equal((await c2("/api/billing/apple", { body: { signed_transaction: appleJws(tx()) } })).status, 409);

    // Obvestilo App Store o vračilu: naročnina se konča.
    const note = { notificationType: "REFUND", data: { bundleId: BUNDLE_ID, signedTransactionInfo: appleJws(tx({ appAccountToken: token, revocationDate: Date.now() })) } };
    const bad = await fetch(`${base}/webhooks/app-store`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ signedPayload: "a.b.c" }) });
    assert.equal(bad.status, 400);
    const r = await fetch(`${base}/webhooks/app-store`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ signedPayload: appleJws(note) }) });
    assert.equal(r.status, 200);
    row = store.db.prepare("SELECT sub_status FROM parents WHERE id = ?").get(p.id);
    assert.equal(row.sub_status, "canceled");
  });
});

test("store purchase never overwrites a paid Stripe subscription", async () => {
  await withServer(async ({ appClient, adult, store }) => {
    const c = appClient();
    const p = await adult(c);
    store.db.prepare("UPDATE parents SET sub_id = 'sub_stripe', sub_status = 'active', sub_plan = 'evklid_1_month', sub_seats = 1, sub_period_end = ? WHERE id = ?").run(new Date(Date.now() + 86400000 * 20).toISOString(), p.id);
    const r = await c("/api/billing/apple", { body: { signed_transaction: appleJws(tx()) } });
    assert.equal(r.status, 200);
    assert.equal(r.body.conflict, "stripe");
    assert.equal(store.db.prepare("SELECT sub_id FROM parents WHERE id = ?").get(p.id).sub_id, "sub_stripe");
  });
});

test("Google Play purchase is read from Google, billing retry keeps access as past_due", async () => {
  await withServer(async ({ appClient, adult, store, play, base }) => {
    const c = appClient();
    const p = await adult(c);
    const token = (await c("/api/billing/store")).body.account_token;
    const sub = (state, days = 30) => ({
      subscriptionState: state,
      externalAccountIdentifiers: { obfuscatedExternalAccountId: token },
      lineItems: [{ productId: "evklid.year.1", expiryTime: new Date(Date.now() + days * 86400000).toISOString(), autoRenewingPlan: { autoRenewEnabled: true } }],
    });
    play.subs.set("tok-google-1234567890", sub("SUBSCRIPTION_STATE_ACTIVE"));
    assert.equal((await c("/api/billing/google", { body: { purchase_token: "neznan-zeton-123" } })).status, 400);
    const r = await c("/api/billing/google", { body: { purchase_token: "tok-google-1234567890" } });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.equal(r.body.account.access.tier, "paid");
    // RTDN: ob neuspeli obnovi (on hold) past_due; brez pravega žetona v naslovu 403.
    play.subs.set("tok-google-1234567890", sub("SUBSCRIPTION_STATE_ON_HOLD", -1));
    const msg = { message: { data: Buffer.from(JSON.stringify({ packageName: BUNDLE_ID, subscriptionNotification: { purchaseToken: "tok-google-1234567890", notificationType: 5 } })).toString("base64") } };
    const post = (q) => fetch(`${base}/webhooks/google-play${q}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(msg) });
    assert.equal((await post("?token=napacen")).status, 403);
    assert.equal((await post("?token=skrivnost-rtdn")).status, 204);
    const row = store.db.prepare("SELECT sub_status, past_due_since FROM parents WHERE id = ?").get(p.id);
    assert.equal(row.sub_status, "past_due");
    assert.ok(row.past_due_since);
  });
});

test("state mapping: Apple grace/retry and Google canceled-but-paid", () => {
  const past = Date.now() - 1000;
  assert.equal(appleState({ productId: "x", expiresDate: past }).status, "expired");
  assert.equal(appleState({ productId: "x", expiresDate: past }, { isInBillingRetryPeriod: true }).status, "billing_retry");
  assert.equal(appleState({ productId: "x", expiresDate: past }, { gracePeriodExpiresDate: Date.now() + 86400000 }).status, "grace");
  assert.equal(appleState({ productId: "x", expiresDate: Date.now() + 1000 }, { autoRenewStatus: 0 }).willRenew, false);
  const g = googleSubscriptionState({ subscriptionState: "SUBSCRIPTION_STATE_CANCELED", lineItems: [{ productId: "evklid.month.1", expiryTime: new Date(Date.now() + 86400000).toISOString() }] });
  assert.equal(g.status, "active");
  assert.equal(g.willRenew, false);
});

test("Sign in with Apple: new account needs age and consent, then logs in by Apple id; deletion via Apple", async () => {
  await withServer(async ({ appClient, store }) => {
    const c = appClient();
    const token = identityToken({ sub: "apple.001", email: "relay@privaterelay.appleid.com", email_verified: "true" }, NONCE);
    assert.equal((await c("/api/auth/apple", { body: { identity_token: token, nonce: "napacen-niz-1234567890" } })).status, 401);
    const first = await c("/api/auth/apple", { body: { identity_token: token, nonce: NONCE } });
    assert.equal(first.status, 400);
    assert.equal(first.body.need_signup, true);
    const young = await c("/api/auth/apple", { body: { identity_token: token, nonce: NONCE, accept_privacy: true, birth_date: `${new Date().getFullYear() - 10}-01-01` } });
    assert.equal(young.status, 403);
    assert.equal(young.body.under_age, true);
    const made = await c("/api/auth/apple", { body: { identity_token: token, nonce: NONCE, accept_privacy: true, birth_date: ADULT, given_name: "Mojca" } });
    assert.equal(made.status, 201, JSON.stringify(made.body));
    assert.equal(made.body.parent.verified, true);
    assert.ok(c.session());

    // Druga naprava: ista Apple identiteta najde isti račun (brez e-naslova v žetonu).
    const c2 = appClient();
    const again = await c2("/api/auth/apple", { body: { identity_token: identityToken({ sub: "apple.001" }, NONCE), nonce: NONCE } });
    assert.equal(again.status, 200);
    assert.equal(again.body.parent.id, made.body.parent.id);

    // Izbris brez gesla: potrditev z novo prijavo z Apple (tuj sub ne zadošča).
    const wrong = await c2("/api/account", { method: "DELETE", body: { apple_identity_token: identityToken({ sub: "apple.999" }, NONCE), apple_nonce: NONCE } });
    assert.equal(wrong.status, 401);
    const del = await c2("/api/account", { method: "DELETE", body: { apple_identity_token: identityToken({ sub: "apple.001" }, NONCE), apple_nonce: NONCE } });
    assert.equal(del.status, 200);
    assert.equal(store.db.prepare("SELECT COUNT(*) AS n FROM parents").get().n, 0);
  });
});

test("Sign in with Apple links an existing account with the same verified e-mail", async () => {
  await withServer(async ({ appClient, adult }) => {
    const c = appClient();
    const p = await adult(c, "jaz@primer.si");
    const r = await appClient()("/api/auth/apple", { body: { identity_token: identityToken({ sub: "apple.777", email: "jaz@primer.si", email_verified: true }, NONCE), nonce: NONCE } });
    assert.equal(r.status, 200);
    assert.equal(r.body.parent.id, p.id);
  });
});

test("push tokens: only Expo tokens, tied to the account", async () => {
  await withServer(async ({ appClient, adult, store }) => {
    const c = appClient();
    const p = await adult(c);
    assert.equal((await c("/api/push/register", { body: { token: "nekaj" } })).status, 400);
    assert.equal((await c("/api/push/register", { body: { token: "ExponentPushToken[abcDEF1234567890]", platform: "ios" } })).status, 200);
    assert.equal(store.db.prepare("SELECT parent_id FROM push_tokens").get().parent_id, p.id);
    assert.equal((await appClient()("/api/push/register", { body: { token: "ExponentPushToken[abcDEF1234567890]" } })).status, 401);
    assert.match(goalPushText({ name: "Ana", settings: { goal: "matura" } }, 3).title, /Matura: še 3 dnevi/);
  });
});

test("download page offers the APK when it exists and works without login", async () => {
  await withServer(
    async ({ base }) => {
      const page = await (await fetch(`${base}/prenesi?lang=en`)).text();
      assert.match(page, /\/prenesi\/evklid\.apk/);
      assert.match(page, /TestFlight/);
      const apk = await fetch(`${base}/prenesi/evklid.apk`);
      assert.equal(apk.status, 200);
      assert.equal(apk.headers.get("content-type"), "application/vnd.android.package-archive");
    },
    { apkFile: fileURLToPath(new URL("./fixtures/apple-chain.json", import.meta.url)), env: { EVKLID_TESTFLIGHT_URL: "https://testflight.apple.com/join/TEST" } },
  );
});
