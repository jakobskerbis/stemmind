// Starševski računi, soglasja, naročnine (Stripe), priporočila in tedenska poročila (Resend).
// Vklop: EVKLID_ACCOUNTS=1. Brez tega aplikacija deluje kot prej (brez prijave).
import "../env.js";
import { BRAND, LEGACY } from "../brand.js";
import { isLocalRequest } from "../feedback.js";
import express from "express";
import { migrateAccounts } from "./schema.js";
import { hashPassword, verifyPassword, randomToken, sha256, readCookie, Sessions, setSessionCookie, clearSessionCookie, Throttle } from "./auth.js";
import { planByKey, planFor, plansFor, currencyForCountry, REGIONAL_DRAFT, monthlyAmount, accessFor, isPremiumChild, isoIn, freeDailyQuestions, freeMonthlyPoolUsd, freeStudentMonthlyUsd, TRIAL_DAYS, REFERRAL_DAYS, MAX_CHILDREN, PRIVACY_VERSION } from "./plans.js";
import { Stripe, verifyWebhook } from "./stripe.js";
import { Mailer, verifyEmail, resetEmail, referralRewardEmail } from "./email.js";
import { buildWeeklyReport, weekKey, isSendTime } from "./weekly.js";
import { buildGoalReminder, reminderDays, isNoonTime, ljNow } from "./goal-reminder.js";
import { Devices, deviceLabel, deviceWarnLimit } from "./devices.js";
import { cleanText } from "../settings.js";
import { Usage } from "../usage.js";
import { promoConfig, createPromo } from "./promo.js";
import { minAgeOf, ageOn, parseBirthDate, ADULT_AGE } from "./age.js";
import { guestModeOn, guestNet, guestPerDay, GuestQuota, GUEST_SESSION_DAYS } from "./guest.js";

export const CONSENT_TEXT =
  "Izjavljam, da sem starš ali zakoniti zastopnik tega otroka in soglašam, da Evklid obdeluje otrokove osebne podatke " +
  "(ime ali vzdevek, letnica rojstva, nastavitve, pogovori z AI inštruktorjem, fotografije nalog in napredek) za namen " +
  "učenja, kot je opisano v Obvestilu o varstvu osebnih podatkov. Soglasje lahko kadar koli prekličem z izbrisom otrokovega profila.";

// Soglasje dijaka, ki je dovolj star za lastno privolitev in ustvarja svoj profil.
export const SELF_CONSENT_TEXT =
  "Profil je moj. Prebral(a) sem Obvestilo o varstvu osebnih podatkov in soglašam, da Evklid obdeluje moje podatke " +
  "(ime ali vzdevek, letnica rojstva, nastavitve, pogovori z AI inštruktorjem, fotografije nalog in napredek) za namen učenja.";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PAID = new Set(["active", "trialing", "past_due"]);
const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// Piškotek po zavrnjeni registraciji zaradi starosti: 24 ur je na tej napravi mogoča samo
// registracija polnoletnega (starša), da otrok ne poskusi znova z drugim datumom.
const AGE_COOKIE = `${BRAND.slug}_age`;
const LEGACY_AGE_COOKIES = LEGACY.map((l) => `${l.slug}_age`); // prejšnja imena (velja en dan)

function referralCode() {
  let s = "";
  for (const b of randomToken(8).split("")) s += CODE_CHARS[b.charCodeAt(0) % CODE_CHARS.length];
  return s.slice(0, 7);
}

export function mountAccounts(app, store, opts = {}) {
  const enabled = opts.accounts ?? process.env.EVKLID_ACCOUNTS === "1";
  if (!enabled) {
    app.get("/api/account/status", (_req, res) => res.json({ enabled: false }));
    return null;
  }

  const db = store.db;
  migrateAccounts(db);
  const aiUsage = new Usage(db);
  // Uporaba brez registracije (začasno, samo razvojna različica; EVKLID_GUEST=0 izklopi).
  const guestOn = opts.guest ?? guestModeOn(process.env);
  const guests = new GuestQuota(db);
  app.set("trust proxy", 1);

  const kv = {
    get: (k) => db.prepare("SELECT value FROM kv WHERE key = ?").get(k)?.value ?? null,
    set: (k, v) => db.prepare("INSERT OR REPLACE INTO kv (key, value) VALUES (?, ?)").run(k, v),
  };
  const env = process.env;
  const stripe = new Stripe({ secretKey: opts.stripeKey ?? env.STRIPE_SECRET_KEY, fetchFn: opts.fetchFn, kv });
  const mailer = new Mailer({ apiKey: opts.resendKey ?? env.RESEND_API_KEY, fetchFn: opts.fetchFn, log: opts.mailLog });
  const webhookSecret = opts.webhookSecret ?? env.STRIPE_WEBHOOK_SECRET;
  const adminEmails = (env.EVKLID_ADMIN_EMAILS || "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
  const sessions = new Sessions(db);
  const devices = new Devices(db);
  const throttle = new Throttle();
  const json = express.json({ limit: "100kb" });
  const log = opts.log || console;
  const promoCfg = opts.promo ?? promoConfig(env);
  const promo = createPromo(db, promoCfg);
  if (promoCfg.code) log.info?.(`[evklid] aktivacijska koda ${promoCfg.code}: porabljenih ${promo.used()}/${promoCfg.limit}, ${promoCfg.days} dni`);
  const accessOf = (p) => accessFor(p, Date.now(), promoCfg.seats);

  const baseUrl = (req) => (env.EVKLID_BASE_URL || (req ? `${req.protocol}://${req.get("host")}` : `http://localhost:${env.PORT || 3000}`)).replace(/\/$/, "");

  // --- podatki ---
  const getParent = (id) => db.prepare("SELECT * FROM parents WHERE id = ?").get(id);
  const parentByEmail = (email) => db.prepare("SELECT * FROM parents WHERE email = ?").get(String(email).trim());
  const parentByCustomer = (cid) => cid && db.prepare("SELECT * FROM parents WHERE stripe_customer_id = ?").get(cid);
  const childIds = (parentId) => db.prepare("SELECT id FROM students WHERE parent_id = ? ORDER BY id").all(parentId).map((r) => r.id);
  const birthYear = (id) => db.prepare("SELECT birth_year FROM students WHERE id = ?").get(id)?.birth_year ?? null;
  const children = (parentId) => childIds(parentId).map((id) => ({ ...store.getStudent(id), birth_year: birthYear(id) }));
  const ownerOf = (studentId) => db.prepare("SELECT parent_id FROM students WHERE id = ?").get(studentId)?.parent_id;
  const update = (id, fields) => {
    const keys = Object.keys(fields);
    db.prepare(`UPDATE parents SET ${keys.map((k) => `${k} = ?`).join(", ")} WHERE id = ?`).run(...keys.map((k) => fields[k]), id);
  };

  // Imetnik računa, mlajši od 18 let (dijak, ki je račun ustvaril sam): sme imeti samo svoj profil.
  const isMinor = (p) => {
    const age = p?.birth_date ? ageOn(p.birth_date) : null;
    return age !== null && age < ADULT_AGE;
  };

  const publicParent = (p) => ({
    id: p.id,
    email: p.is_guest ? null : p.email,
    guest: !!p.is_guest,
    name: p.name,
    minor: isMinor(p),
    birth_year: p.birth_date ? Number(p.birth_date.slice(0, 4)) : null,
    verified: !!p.email_verified_at,
    is_admin: !!p.is_admin || adminEmails.includes(String(p.email).toLowerCase()),
    weekly_email: !!p.weekly_email,
    referral_code: p.referral_code,
    trial_ends_at: p.trial_ends_at,
    bonus_until: p.bonus_until,
    promo_until: p.promo_until,
    has_customer: !!p.stripe_customer_id,
    subscription: p.sub_status
      ? { status: p.sub_status, plan: p.sub_plan, seats: p.sub_seats, period_end: p.sub_period_end, cancel_at_period_end: !!p.sub_cancel_at_period_end }
      : null,
  });

  function premiumFor(studentId) {
    const parentId = ownerOf(studentId);
    if (!parentId) return true; // stari podatki brez starša
    const access = accessOf(getParent(parentId));
    return isPremiumChild(access, childIds(parentId), studentId);
  }

  // Poraba AI brezplačnih učencev v tem mesecu (učenci brez naročnine, preizkusa, bonusa ali kode).
  const monthUsdByStudent = () =>
    db.prepare("SELECT student_id AS id, COALESCE(SUM(cost_usd),0) AS usd FROM usage WHERE created_at >= date('now','start of month') GROUP BY student_id").all();
  // Gostje: kvota velja za omrežje (vsi gostje z istega omrežja skupaj, tudi izbrisani), ne za profil.
  const quotaScope = (studentId) => {
    const net = guests.netOf(studentId);
    return net ? { ids: guests.idsOnNet(net), net } : { ids: [studentId], net: null };
  };
  const moreHint = (studentId) =>
    guests.netOf(studentId) ? "Za več vprašanj ustvari račun v zavihku Račun." : "Za neomejena vprašanja naj starš izbere naročnino v zavihku Račun.";

  function freeBudgetReason(studentId) {
    const rows = monthUsdByStudent();
    const per = freeStudentMonthlyUsd();
    const scope = quotaScope(studentId);
    if (per && guests.monthUsd(scope.ids, scope.net) >= per) {
      return `Ta mesec si porabil brezplačna vprašanja za inštruktorja. Vadnica in lekcije delujejo naprej neomejeno. ${moreHint(studentId)}`;
    }
    const pool = freeMonthlyPoolUsd();
    const gone = db.prepare("SELECT COALESCE(SUM(usd),0) AS usd FROM guest_spent WHERE day >= date('now','start of month')").get().usd;
    if (pool && rows.filter((r) => !premiumFor(r.id)).reduce((t, r) => t + r.usd, gone) >= pool) {
      return `Brezplačna vprašanja za inštruktorja so ta mesec za vse porabljena. Vadnica in lekcije delujejo naprej neomejeno. ${moreHint(studentId)}`;
    }
    return null;
  }

  function questionsToday(studentId) {
    const scope = quotaScope(studentId);
    return guests.questionsToday(scope.ids, scope.net);
  }

  async function sendMail(to, msg) {
    if (/@gost\.invalid$/i.test(String(to))) return false; // gost nima e-naslova
    try {
      await mailer.send({ to, ...msg });
      return true;
    } catch (err) {
      log.error?.("[evklid] pošiljanje e-pošte ni uspelo:", err.message);
      return false;
    }
  }

  // --- prijava in preverjanje lastništva za vse /api klice ---
  app.use("/api", (req, _res, next) => {
    const pid = sessions.parentId(readCookie(req));
    req.parent = pid ? getParent(pid) : null;
    // Skrbnik: e-naslov v EVKLID_ADMIN_EMAILS (tudi če je bil dodan po registraciji).
    if (req.parent && adminEmails.includes(String(req.parent.email).toLowerCase())) req.parent.is_admin = 1;
    req.deviceId = devices.identify(req, _res);
    next();
  });

  const PUBLIC = [/^\/auth\//, /^\/account\/status$/, /^\/account\/prices$/, /^\/account\/unsubscribe$/, /^\/stripe\/webhook$/, /^\/config$/];
  app.use("/api", (req, res, next) => {
    if (PUBLIC.some((re) => re.test(req.path))) return next();
    const p = req.parent;
    if (!p) return res.status(401).json({ error: "Prijavi se.", login: true });
    if (p.is_guest && /^\/billing\//.test(req.path)) return res.status(403).json({ error: "Najprej ustvari račun v zavihku Račun.", guest: true });
    if (p.is_guest && !guestOn) return res.status(401).json({ error: "Uporaba brez računa ni več mogoča. Ustvari račun, da obdržiš napredek.", login: true, guest_off: true });
    // Porabo AI vidi samo skrbnik ali kdor aplikacijo odpre na računalniku, kjer teče strežnik.
    if (/^\/usage(\/|$)/.test(req.path) && !p.is_admin && !isLocalRequest(req)) return res.status(403).json({ error: "Samo za skrbnika." });

    let studentId = null;
    const s = /^\/students\/(\d+)(\/|$)/.exec(req.path);
    const c = /^\/conversations\/(\d+)(\/|$)/.exec(req.path);
    if (s) studentId = Number(s[1]);
    if (c) {
      studentId = store.getConversation(Number(c[1]))?.student_id ?? null;
      if (studentId === null) return res.status(404).json({ error: "Pogovor ne obstaja." });
    }
    if (studentId !== null && ownerOf(studentId) !== p.id) {
      return res.status(404).json({ error: s ? "Učenec ne obstaja." : "Pogovor ne obstaja." });
    }

    // Profil je hkrati odprt samo na eni napravi. Izbris profila je dovoljen z vsake naprave staršu.
    if (studentId !== null) {
      const own = s && /^\/students\/\d+\/?$/.test(req.path);
      if (own && req.method === "DELETE") {
        devices.logChange(p.id, "deleted", studentId);
        guests.snapshot(studentId);
      } else if (c && req.method === "DELETE" && /^\/conversations\/\d+\/?$/.test(req.path)) {
        guests.snapshotConversation(Number(c[1]), studentId);
      } else {
        const takeover = req.method === "POST" && req.path === `/students/${studentId}/claim`;
        const r = devices.use(studentId, req.deviceId, deviceLabel(req.get("user-agent")), { takeover });
        if (!r.ok) {
          return res.status(409).json({
            error: `Ta profil je trenutno odprt na drugi napravi (${r.other}). Profil je lahko hkrati odprt samo na eni napravi.`,
            taken: true,
            student_id: studentId,
          });
        }
      }
    }

    // Brezplačni paket: omejeno število vprašanj inštruktorju na dan.
    if (c && req.method === "POST" && /\/messages$/.test(req.path) && !premiumFor(studentId)) {
      const limit = freeDailyQuestions();
      if (questionsToday(studentId) >= limit) {
        return res.status(429).json({
          error: `Danes si porabil vseh ${limit} brezplačnih vprašanj za inštruktorja. Vadnica deluje naprej neomejeno. ${moreHint(studentId)}`,
          limit: true,
          upgrade: true,
        });
      }
    }
    // Mesečna meja porabe brezplačnega paketa velja za vse klice AI (inštruktor, branje zapisa, fotografija urnika).
    if (studentId !== null && req.method === "POST" && /(\/messages|\/tasks\/\d+\/read|\/schedule\/photo)$/.test(req.path) && !premiumFor(studentId)) {
      const blocked = freeBudgetReason(studentId);
      if (blocked) return res.status(429).json({ error: blocked, limit: true, upgrade: true });
    }
    next();
  });

  // --- registracija, prijava, gesla ---
  // Skupna preverjanja za registracijo in nadgradnjo gosta. Ob napaki pošlje odgovor in vrne null.
  function checkSignup(req, res) {
    const email = String(req.body?.email || "").trim().toLowerCase();
    const password = String(req.body?.password || "");
    if (!EMAIL_RE.test(email) || email.length > 200) return res.status(400).json({ error: "Vpišite veljaven e-naslov." }), null;
    if (password.length < 8) return res.status(400).json({ error: "Geslo mora imeti vsaj 8 znakov." }), null;
    if (req.body?.accept_privacy !== true) return res.status(400).json({ error: "Potrebno je strinjanje z obvestilom o varstvu podatkov." }), null;

    // Preverjanje starosti: mlajši od starosti digitalne privolitve dobijo povezavo za starše.
    const birth = parseBirthDate(req.body?.birth_date);
    const age = birth ? ageOn(birth) : null;
    if (age === null || age < 0 || age > 120) return res.status(400).json({ error: "Vpišite datum rojstva.", birth_date: true }), null;
    const cf = String(req.headers["cf-ipcountry"] || "").toUpperCase();
    const minAge = minAgeOf(cf, req.body?.country);
    const blockedBefore = readCookie(req, AGE_COOKIE) === "1" || LEGACY_AGE_COOKIES.some((c) => readCookie(req, c) === "1");
    if (age < minAge || (blockedBefore && age < ADULT_AGE)) {
      const secure = req.secure ? "; Secure" : "";
      res.append("Set-Cookie", `${AGE_COOKIE}=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400${secure}`);
      return res.status(403).json({
        error: `Za mlajše od ${minAge} let račun ustvari starš. Pokaži mu povezavo za starše.`,
        under_age: true,
        min_age: minAge,
      }), null;
    }
    if (parentByEmail(email)) return res.status(409).json({ error: "Ta e-naslov je že registriran. Prijavite se.", exists: true }), null;
    const birthIso = `${birth.y}-${String(birth.m).padStart(2, "0")}-${String(birth.d).padStart(2, "0")}`;
    return { email, password, birthIso };
  }

  app.post("/api/auth/register", json, async (req, res) => {
    const v = checkSignup(req, res);
    if (!v) return;
    const { email, password } = v;

    const refCode = String(req.body?.referral_code || "").trim().toUpperCase();
    const referrer = refCode ? db.prepare("SELECT id FROM parents WHERE referral_code = ? AND is_guest = 0").get(refCode) : null;
    const token = randomToken();
    let code = referralCode();
    while (db.prepare("SELECT 1 FROM parents WHERE referral_code = ?").get(code)) code = referralCode();
    const isAdmin = adminEmails.includes(email) ? 1 : 0;
    const r = db
      .prepare(
        `INSERT INTO parents (email, password_hash, name, is_admin, verify_token_hash, privacy_version, trial_ends_at, unsubscribe_token, referral_code, referred_by)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(email, hashPassword(password), cleanText(req.body?.name, 60), isAdmin, sha256(token), PRIVACY_VERSION, isoIn(TRIAL_DAYS), randomToken(18), code, referrer?.id ?? null);
    const id = Number(r.lastInsertRowid);
    db.prepare("UPDATE parents SET birth_date = ? WHERE id = ?").run(v.birthIso, id);
    const country = String(req.headers["cf-ipcountry"] || req.body?.country || "").toUpperCase();
    if (/^[A-Z]{2}$/.test(country)) db.prepare("UPDATE parents SET country = ? WHERE id = ?").run(country, id);
    // Skrbnik prevzame učence iz časa pred računi.
    if (isAdmin) db.prepare("UPDATE students SET parent_id = ? WHERE parent_id IS NULL").run(id);

    const url = `${baseUrl(req)}/api/auth/verify?token=${token}`;
    await sendMail(email, verifyEmail(url));
    // Aktivacijska koda ob registraciji; napačna koda registracije ne ustavi.
    const promoRaw = String(req.body?.promo_code || "").trim();
    const promoResult = promoRaw ? promo.redeem(getParent(id), promoRaw) : null;
    setSessionCookie(req, res, sessions.create(id));
    res.status(201).json({
      parent: publicParent(getParent(id)),
      referred: !!referrer,
      ...(promoResult?.ok ? { promo_until: promoResult.until } : promoResult ? { promo_error: promoResult.error } : {}),
      ...(mailer.enabled ? {} : { dev_verify_url: url }),
    });
  });

  // --- uporaba brez registracije (gost) ---
  app.post("/api/auth/guest", json, (req, res) => {
    if (!guestOn) return res.status(404).json({ error: "Uporaba brez računa ni vklopljena." });
    if (req.parent) return res.json({ parent: publicParent(req.parent) });
    if (req.body?.accept_privacy !== true) return res.status(400).json({ error: "Potrebno je strinjanje z obvestilom o varstvu podatkov." });
    // Naprava, ki je bila zavrnjena pri registraciji zaradi starosti, tudi brez računa ne more naprej.
    if (readCookie(req, AGE_COOKIE) === "1" || LEGACY_AGE_COOKIES.some((c) => readCookie(req, c) === "1")) {
      return res.status(403).json({ error: "Za mlajše učence račun ustvari starš. Pokaži mu povezavo za starše.", under_age: true });
    }
    const net = guestNet(req);
    if (guests.createdToday(net) >= guestPerDay()) {
      return res.status(429).json({ error: "S tega omrežja je danes nastalo že preveč profilov brez računa. Ustvari račun ali poskusi jutri.", guest_limit: true });
    }
    let code = referralCode();
    while (db.prepare("SELECT 1 FROM parents WHERE referral_code = ?").get(code)) code = referralCode();
    const r = db
      .prepare(
        `INSERT INTO parents (email, password_hash, privacy_version, unsubscribe_token, referral_code, weekly_email, is_guest, guest_net)
         VALUES (?, ?, ?, ?, ?, 0, 1, ?)`,
      )
      .run(`gost-${randomToken(12)}@gost.invalid`, hashPassword(randomToken()), PRIVACY_VERSION, randomToken(18), code, net);
    const id = Number(r.lastInsertRowid);
    guests.logCreated(net);
    const country = String(req.headers["cf-ipcountry"] || req.body?.country || "").toUpperCase();
    if (/^[A-Z]{2}$/.test(country)) db.prepare("UPDATE parents SET country = ? WHERE id = ?").run(country, id);
    setSessionCookie(req, res, sessions.create(id, GUEST_SESSION_DAYS));
    res.status(201).json({ parent: publicParent(getParent(id)) });
  });

  // Gost ustvari račun: isti profili in napredek, dobi e-naslov in geslo. Do potrditve e-naslova
  // ostane v kvoti omrežja (guest_net); 7-dnevni preizkus dobi šele ob potrditvi (/api/auth/verify).
  app.post("/api/auth/upgrade", json, async (req, res) => {
    const p = req.parent;
    if (!p) return res.status(401).json({ error: "Prijavi se.", login: true });
    if (!p.is_guest) return res.status(400).json({ error: "Račun že imaš." });
    const v = checkSignup(req, res);
    if (!v) return;
    const token = randomToken();
    const isAdmin = adminEmails.includes(v.email) ? 1 : 0;
    db.prepare(
      `UPDATE parents SET email = ?, password_hash = ?, name = ?, is_admin = ?, verify_token_hash = ?, privacy_version = ?,
         privacy_accepted_at = datetime('now'), birth_date = ?, weekly_email = 1, is_guest = 0 WHERE id = ?`,
    ).run(v.email, hashPassword(v.password), cleanText(req.body?.name, 60), isAdmin, sha256(token), PRIVACY_VERSION, v.birthIso, p.id);
    db.prepare("UPDATE consents SET parent_email = ? WHERE parent_id = ?").run(v.email, p.id);
    if (isAdmin) db.prepare("UPDATE students SET parent_id = ? WHERE parent_id IS NULL").run(p.id);
    const url = `${baseUrl(req)}/api/auth/verify?token=${token}`;
    await sendMail(v.email, verifyEmail(url));
    sessions.destroyAll(p.id);
    setSessionCookie(req, res, sessions.create(p.id));
    res.json({ parent: publicParent(getParent(p.id)), ...(mailer.enabled ? {} : { dev_verify_url: url }) });
  });

  // Gost se prijavi v obstoječi račun: njegove profile prenesemo, če je v paketu prostor.
  const canAdopt = (guest, p) => {
    const n = childIds(guest.id).length;
    const room = Math.min(MAX_CHILDREN, accessOf(p).seats || 1) - childIds(p.id).length;
    return !n || (n <= room && !(isMinor(p) && childIds(p.id).length));
  };
  function adoptGuest(guest, p) {
    const ids = childIds(guest.id);
    db.prepare("UPDATE students SET parent_id = ? WHERE parent_id = ?").run(p.id, guest.id);
    db.prepare("UPDATE consents SET parent_id = ?, parent_email = ? WHERE parent_id = ?").run(p.id, p.email, guest.id);
    db.prepare("DELETE FROM parents WHERE id = ?").run(guest.id);
    return { moved: ids.length };
  }

  app.get("/api/auth/verify", (req, res) => {
    const token = String(req.query.token || "");
    const p = token && db.prepare("SELECT id FROM parents WHERE verify_token_hash = ?").get(sha256(token));
    if (!p) return res.redirect("/?verified=0");
    update(p.id, { email_verified_at: new Date().toISOString(), verify_token_hash: null });
    // Nekdanji gost: s potrditvijo zapusti kvoto omrežja in dobi 7-dnevni preizkus.
    const full = getParent(p.id);
    if (full.guest_net && !full.is_guest) update(p.id, { guest_net: null, trial_ends_at: full.trial_ends_at || isoIn(TRIAL_DAYS) });
    res.redirect("/?verified=1");
  });

  app.post("/api/auth/resend-verification", async (req, res) => {
    const p = req.parent;
    if (!p) return res.status(401).json({ error: "Prijavi se.", login: true });
    if (p.is_guest) return res.status(400).json({ error: "Najprej ustvari račun." });
    if (p.email_verified_at) return res.json({ ok: true, verified: true });
    const token = randomToken();
    update(p.id, { verify_token_hash: sha256(token) });
    const url = `${baseUrl(req)}/api/auth/verify?token=${token}`;
    await sendMail(p.email, verifyEmail(url));
    res.json({ ok: true, ...(mailer.enabled ? {} : { dev_verify_url: url }) });
  });

  app.post("/api/auth/login", json, (req, res) => {
    const email = String(req.body?.email || "").trim().toLowerCase();
    const key = `${email}|${req.ip}`;
    if (throttle.blocked(key)) return res.status(429).json({ error: "Preveč poskusov. Poskusite čez 15 minut." });
    const p = parentByEmail(email);
    if (!p || !verifyPassword(String(req.body?.password || ""), p.password_hash)) {
      throttle.fail(key);
      return res.status(401).json({ error: "Napačen e-naslov ali geslo." });
    }
    const fromGuest = req.parent?.is_guest && req.parent.id !== p.id ? req.parent : null;
    // Profila brez računa ne zavržemo potiho: brez prostora v paketu prijava ne uspe.
    if (fromGuest && !canAdopt(fromGuest, p)) {
      return res.status(409).json({ error: "Profila brez računa ni mogoče prenesti, ker v paketu tega računa ni prostora. Ustvari nov račun ali najprej izbriši podatke brez računa.", guest_conflict: true });
    }
    throttle.reset(key);
    const guest = fromGuest ? adoptGuest(fromGuest, p) : null;
    setSessionCookie(req, res, sessions.create(p.id));
    res.json({ parent: publicParent(p), ...(guest ? { guest_moved: guest.moved } : {}) });
  });

  app.post("/api/auth/logout", (req, res) => {
    sessions.destroy(readCookie(req));
    clearSessionCookie(res);
    res.json({ ok: true });
  });

  app.post("/api/auth/forgot", json, async (req, res) => {
    const p = parentByEmail(String(req.body?.email || "").trim().toLowerCase());
    let devUrl;
    if (p) {
      const token = randomToken();
      update(p.id, { reset_token_hash: sha256(token), reset_expires_at: isoIn(1 / 24) });
      devUrl = `${baseUrl(req)}/?reset=${token}`;
      await sendMail(p.email, resetEmail(devUrl));
    }
    // Enak odgovor ne glede na to, ali račun obstaja.
    res.json({ ok: true, ...(!mailer.enabled && devUrl ? { dev_reset_url: devUrl } : {}) });
  });

  app.post("/api/auth/reset", json, (req, res) => {
    const token = String(req.body?.token || "");
    const password = String(req.body?.password || "");
    if (password.length < 8) return res.status(400).json({ error: "Geslo mora imeti vsaj 8 znakov." });
    const p = token && db.prepare("SELECT * FROM parents WHERE reset_token_hash = ?").get(sha256(token));
    if (!p || Date.parse(p.reset_expires_at) < Date.now()) return res.status(400).json({ error: "Povezava je potekla. Zahtevajte novo." });
    update(p.id, {
      password_hash: hashPassword(password),
      reset_token_hash: null,
      reset_expires_at: null,
      email_verified_at: p.email_verified_at || new Date().toISOString(),
    });
    sessions.destroyAll(p.id);
    setSessionCookie(req, res, sessions.create(p.id));
    res.json({ ok: true });
  });

  // --- račun ---
  app.get("/api/account/status", (req, res) => {
    const p = req.parent;
    res.json({
      enabled: true,
      guest_mode: guestOn,
      logged_in: !!p,
      parent: p ? publicParent(p) : null,
      children: p ? childIds(p.id).length : 0,
      billing: stripe.enabled,
      email: mailer.enabled,
    });
  });

  // Država za ceno: Cloudflare (CF-IPCountry, npr. tunel ali gostovanje za Cloudflare), sicer
  // država, shranjena ob registraciji, sicer Slovenija. Naročnina ostane v valuti, v kateri je sklenjena.
  const countryOf = (req, p) => {
    const cf = String(req.headers["cf-ipcountry"] || "").toUpperCase();
    return /^[A-Z]{2}$/.test(cf) && cf !== "XX" && cf !== "T1" ? cf : p?.country || "SI";
  };
  const currencyOf = (req, p) => {
    const sub = p?.sub_plan && planByKey(p.sub_plan);
    return sub?.currency || currencyForCountry(countryOf(req, p));
  };

  function accountView(req, p) {
    const access = accessOf(p);
    const ids = childIds(p.id);
    const rewards = db.prepare("SELECT COUNT(*) AS n FROM referral_rewards WHERE referrer_id = ?").get(p.id).n;
    return {
      parent: publicParent(p),
      access,
      free_daily_questions: freeDailyQuestions(),
      children: children(p.id).map((c) => ({
        id: c.id,
        name: c.name,
        birth_year: c.birth_year,
        premium: isPremiumChild(access, ids, c.id),
        questions_today: questionsToday(c.id),
        ai_month: aiUsage.studentMonth(c.id),
        devices: devices.recent(c.id),
      })),
      max_children: Math.min(MAX_CHILDREN, access.seats || 1),
      device_warn_limit: deviceWarnLimit(),
      swap_blocked_until: devices.swapBlockedUntil(p.id),
      plans: plansFor(currencyOf(req, p)),
      currency: currencyOf(req, p),
      prices_draft: REGIONAL_DRAFT && currencyOf(req, p) !== "EUR",
      billing: stripe.enabled,
      email: mailer.enabled,
      promo: {
        redeemed: !!db.prepare("SELECT 1 FROM promo_redemptions WHERE parent_id = ?").get(p.id),
        available: !!promoCfg.code,
        seats: promoCfg.seats,
        ...(p.is_admin && promoCfg.code ? { admin: { ...promo.stats(), url: `${baseUrl(req)}/?koda=${promoCfg.code}` } } : {}),
      },
      referral: { code: p.referral_code, url: `${baseUrl(req)}/?ref=${p.referral_code}`, rewards, days: REFERRAL_DAYS },
      consent_text: CONSENT_TEXT,
    };
  }

  app.get("/api/account", (req, res) => res.json(accountView(req, req.parent)));

  // Cene in preizkus za stran za starše (starsi.html), brez prijave.
  app.get("/api/account/prices", (req, res) => {
    const country = String(req.query.country || "").toUpperCase();
    const currency = currencyOf(req, /^[A-Z]{2}$/.test(country) ? { country } : null);
    res.json({ currency, plans: plansFor(currency), trial_days: TRIAL_DAYS, free_daily_questions: freeDailyQuestions(), min_age: minAgeOf(String(req.headers["cf-ipcountry"] || ""), country) });
  });

  app.post("/api/account/promo", json, (req, res) => {
    if (req.parent.is_guest) return res.status(403).json({ error: "Najprej ustvari račun." });
    if (req.parent.guest_net && !req.parent.email_verified_at) return res.status(403).json({ error: "Najprej potrdi e-naslov." });
    const key = `promo|${req.parent.id}`;
    if (throttle.blocked(key)) return res.status(429).json({ error: "Preveč poskusov. Poskusite čez 15 minut." });
    const r = promo.redeem(req.parent, req.body?.code);
    if (r.error) {
      throttle.fail(key);
      return res.status(r.exhausted ? 410 : 400).json({ error: r.error });
    }
    res.json(accountView(req, getParent(req.parent.id)));
  });

  // Na računalniku, kjer teče strežnik: »ta račun je moj«, da števec porabe vidim tudi na telefonu.
  app.post("/api/usage/claim", (req, res) => {
    if (!isLocalRequest(req)) return res.status(403).json({ error: "Samo na računalniku, kjer teče Evklid." });
    db.prepare("UPDATE parents SET is_admin = 1 WHERE id = ?").run(req.parent.id);
    res.json({ ok: true });
  });

  app.put("/api/account", json, (req, res) => {
    const p = req.parent;
    const fields = {};
    if (req.body?.name !== undefined) fields.name = cleanText(req.body.name, 60);
    if (req.body?.weekly_email !== undefined) fields.weekly_email = req.body.weekly_email ? 1 : 0;
    if (Object.keys(fields).length) update(p.id, fields);
    res.json(accountView(req, getParent(p.id)));
  });

  // Izvoz vseh podatkov (GDPR čl. 15 in 20).
  app.get("/api/account/export", (req, res) => {
    const p = req.parent;
    const parent = { ...p };
    for (const k of ["password_hash", "verify_token_hash", "reset_token_hash", "reset_expires_at", "unsubscribe_token"]) delete parent[k];
    const q = (sql, ...a) => db.prepare(sql).all(...a);
    const data = {
      exported_at: new Date().toISOString(),
      parent,
      consents: q("SELECT * FROM consents WHERE parent_id = ?", p.id),
      children: children(p.id).map((c) => ({
        ...c,
        conversations: store.listConversations(c.id).map((conv) => ({
          ...conv,
          messages: q("SELECT role, display_text AS text, has_image, created_at FROM messages WHERE conversation_id = ? ORDER BY id", conv.id),
        })),
        events: q("SELECT subject, topic, error, mode, flag, created_at FROM events WHERE student_id = ?", c.id),
        topics: q("SELECT * FROM topic_state WHERE student_id = ?", c.id),
        tasks: q("SELECT topic_id, mode, level, attempts, hint_used, solved, first_try_correct, last_answer, created_at FROM tasks WHERE student_id = ?", c.id),
        xp: q("SELECT amount, reason, created_at FROM xp_events WHERE student_id = ?", c.id),
        schedule: (() => {
          try {
            const r = db.prepare("SELECT data FROM schedules WHERE student_id = ?").get(c.id);
            return r ? JSON.parse(r.data) : null;
          } catch {
            return null; // tabela urnikov še ne obstaja
          }
        })(),
      })),
    };
    res.set("Content-Disposition", 'attachment; filename="evklid-podatki.json"');
    res.json(data);
  });

  // Izbris računa z vsemi otroki in pogovori (GDPR čl. 17).
  app.delete("/api/account", json, async (req, res) => {
    const p = req.parent;
    if (!p.is_guest && !verifyPassword(String(req.body?.password || ""), p.password_hash)) return res.status(401).json({ error: "Napačno geslo." });
    if (stripe.enabled && p.sub_id && PAID.has(p.sub_status)) {
      try {
        await stripe.request("DELETE", `/subscriptions/${p.sub_id}`);
      } catch (err) {
        log.error?.("[evklid] preklic naročnine ni uspel:", err.message);
        return res.status(502).json({ error: "Naročnine ni bilo mogoče preklicati. Poskusite znova ali jo prekličite v portalu." });
      }
    }
    guests.snapshotParent(p.id); // poraba gosta ostane šteta za omrežje
    db.prepare("DELETE FROM students WHERE parent_id = ?").run(p.id);
    db.prepare("DELETE FROM parents WHERE id = ?").run(p.id);
    clearSessionCookie(res);
    res.json({ ok: true });
  });

  app.get("/api/account/unsubscribe", (req, res) => {
    const token = String(req.query.token || "");
    const p = token && db.prepare("SELECT id FROM parents WHERE unsubscribe_token = ?").get(token);
    if (p) update(p.id, { weekly_email: 0 });
    res.type("html").send(
      `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Evklid</title>` +
        `<body style="font-family:sans-serif;max-width:480px;margin:40px auto;padding:0 16px"><h1>Evklid</h1><p>${
          p ? "Tedenskih poročil ne boste več prejemali. Ponovno jih vklopite v zavihku Račun." : "Povezava ni veljavna."
        }</p><p><a href="/">Odpri Evklid</a></p></body>`,
    );
  });

  // --- otroci (nadomesti osnovni GET/POST /api/students) ---
  app.get("/api/students", (req, res) => res.json(children(req.parent.id)));

  // Ta naprava prevzame profil (druga naprava se ustavi ob naslednji zahtevi).
  app.post("/api/students/:id/claim", (_req, res) => res.json({ ok: true }));

  // Odjava z vseh drugih naprav: seje staršev in odprti profili.
  app.post("/api/account/logout-others", (req, res) => {
    sessions.destroyOthers(req.parent.id, readCookie(req));
    devices.releaseOthers(childIds(req.parent.id), req.deviceId);
    res.json({ ok: true });
  });

  app.post("/api/students", json, (req, res) => {
    const p = req.parent;
    if (!p.email_verified_at && !p.is_guest) return res.status(403).json({ error: "Najprej potrdite e-naslov (povezava je v e-pošti).", verify: true });
    // Število profilov = paket (preizkus: 2, brezplačno: 1). Menjava profila največ enkrat na 30 dni.
    const seats = Math.min(MAX_CHILDREN, accessOf(p).seats || 1);
    if (childIds(p.id).length >= seats) {
      return res.status(400).json({
        error: seats === 1 ? "Vaš paket ima 1 profil. Za drugega otroka izberite paket za 2 otroka v zavihku Račun." : `Vaš paket ima ${seats} profila.`,
        seats: true,
      });
    }
    const blocked = devices.swapBlockedUntil(p.id);
    if (blocked) {
      return res.status(400).json({
        error: `Profil lahko zamenjate največ enkrat na 30 dni. Nov profil boste lahko dodali ${new Date(blocked).toLocaleDateString("sl-SI")}.`,
        swap: true,
      });
    }
    const name = cleanText(req.body?.name, 40);
    if (!name) return res.status(400).json({ error: "Vpišite ime ali vzdevek otroka." });
    const minor = isMinor(p);
    // Mladoletni imetnik (dijak, ki je račun ustvaril sam) ima samo svoj profil; za otroke soglaša starš.
    if (minor && childIds(p.id).length) {
      return res.status(403).json({ error: "Profile za druge otroke lahko doda samo polnoleten starš s svojim računom.", minor: true });
    }
    // Lasten profil (dijak ali študent soglaša sam): letnica iz datuma rojstva ob registraciji.
    const self = minor || req.body?.self === true;
    const year = self && p.birth_date ? Number(p.birth_date.slice(0, 4)) : Number(req.body?.birth_year);
    const now = new Date().getFullYear();
    if (self) {
      const minAge = minAgeOf(p.country);
      // Brez datuma rojstva (stari računi) štejemo previdno: rojeni v letu now-minAge so morda še mlajši.
      const oldEnough = p.birth_date ? ageOn(p.birth_date) >= minAge : now - year > minAge;
      if (!oldEnough) {
        return res.status(403).json({ error: `Sam lahko soglašaš od ${minAge}. leta. Za mlajše otroke profil ustvari starš in izbere »Za mojega otroka«.`, self_too_young: true });
      }
    }
    // Tudi odrasli študenti fakultet ustvarijo svoj profil, zato ni zgornje starostne meje za otroke.
    if (!Number.isInteger(year) || year < now - 90 || year > now - 5) return res.status(400).json({ error: "Vpišite letnico rojstva." });
    if (req.body?.consent !== true) return res.status(400).json({ error: self ? "Označi soglasje za obdelavo podatkov." : "Za otrokov profil je potrebno soglasje starša.", consent: true });
    const under15 = now - year <= 15; // previdno: v letu 15. rojstnega dne še štejemo kot mlajšega od 15
    const s = store.createStudent(name, req.body?.settings);
    db.prepare("UPDATE students SET parent_id = ?, birth_year = ? WHERE id = ?").run(p.id, year, s.id);
    db.prepare("INSERT INTO consents (parent_id, student_id, child_birth_year, under_15, version, text, parent_email) VALUES (?, ?, ?, ?, ?, ?, ?)").run(
      p.id,
      s.id,
      year,
      under15 ? 1 : 0,
      PRIVACY_VERSION,
      self ? SELF_CONSENT_TEXT : CONSENT_TEXT,
      p.email,
    );
    devices.logChange(p.id, "created", s.id);
    devices.use(s.id, req.deviceId, deviceLabel(req.get("user-agent")));
    res.status(201).json({ ...store.getStudent(s.id), birth_year: year });
  });

  // --- naročnina (Stripe) ---
  const needStripe = (res) => {
    if (stripe.enabled) return false;
    res.status(503).json({ error: "Plačila še niso nastavljena (manjka STRIPE_SECRET_KEY)." });
    return true;
  };

  async function ensureCustomer(p) {
    if (p.stripe_customer_id) return p.stripe_customer_id;
    const c = await stripe.request("POST", "/customers", { email: p.email, name: p.name || undefined, metadata: { parent_id: p.id } });
    update(p.id, { stripe_customer_id: c.id });
    return c.id;
  }

  app.post("/api/billing/checkout", json, async (req, res) => {
    if (needStripe(res)) return;
    const p = req.parent;
    const currency = currencyOf(req, p);
    const plan = planFor(Number(req.body?.seats), req.body?.interval, currency);
    if (!plan) return res.status(400).json({ error: "Neznan paket." });
    if (PAID.has(p.sub_status)) return res.status(409).json({ error: "Naročnino že imate. Paket spremenite v portalu.", portal: true });
    try {
      const customer = await ensureCustomer(p);
      const { prices } = await stripe.ensurePrices(currency);
      const base = baseUrl(req);
      // Preostanek 7-dnevnega preizkusa ali aktivacijske kode se prenese v Stripe (če sta še vsaj 2 dni).
      const trialEnd = Math.max(Date.parse(p.trial_ends_at || 0) || 0, Date.parse(p.promo_until || 0) || 0);
      const subscription_data = { metadata: { parent_id: p.id } };
      if (trialEnd - Date.now() > 49 * 3600000) subscription_data.trial_end = Math.floor(trialEnd / 1000);
      const session = await stripe.request("POST", "/checkout/sessions", {
        mode: "subscription",
        customer,
        client_reference_id: String(p.id),
        line_items: [{ price: prices[plan.key], quantity: 1 }],
        success_url: `${base}/?billing=success&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${base}/?billing=cancel`,
        locale: currency === "EUR" ? "sl" : "auto",
        allow_promotion_codes: "true",
        subscription_data,
        metadata: { parent_id: p.id },
      });
      res.json({ url: session.url });
    } catch (err) {
      log.error?.("[evklid] Stripe checkout:", err.message);
      res.status(502).json({ error: "Plačilne strani ni bilo mogoče odpreti. Poskusite znova." });
    }
  });

  app.post("/api/billing/portal", async (req, res) => {
    if (needStripe(res)) return;
    const p = req.parent;
    if (!p.stripe_customer_id) return res.status(400).json({ error: "Naročnine še nimate." });
    try {
      const configuration = await stripe.ensurePortalConfig();
      const s = await stripe.request("POST", "/billing_portal/sessions", { customer: p.stripe_customer_id, return_url: `${baseUrl(req)}/?billing=portal`, configuration });
      res.json({ url: s.url });
    } catch (err) {
      log.error?.("[evklid] Stripe portal:", err.message);
      res.status(502).json({ error: "Portala ni bilo mogoče odpreti. Poskusite znova." });
    }
  });

  async function applySubscription(parentId, sub) {
    const item = sub.items?.data?.[0];
    const price = item?.price || {};
    const plan = planByKey(price.lookup_key);
    const seats = plan?.seats || Number(price.metadata?.seats) || 1;
    const end = sub.current_period_end ?? item?.current_period_end;
    update(parentId, {
      sub_id: sub.id,
      sub_status: sub.status,
      sub_plan: plan?.key || price.lookup_key || price.id || null,
      sub_seats: seats,
      sub_period_end: end ? new Date(end * 1000).toISOString() : null,
      sub_cancel_at_period_end: sub.cancel_at_period_end ? 1 : 0,
    });
    if (sub.status === "active") await maybeRewardReferral(parentId);
  }

  async function syncCustomer(p) {
    if (!p.stripe_customer_id) return;
    const list = await stripe.request("GET", "/subscriptions", { customer: p.stripe_customer_id, status: "all", limit: 10 });
    const subs = list.data || [];
    const best = subs.find((s) => PAID.has(s.status)) || subs.sort((a, b) => b.created - a.created)[0];
    if (best) await applySubscription(p.id, best);
  }

  app.post("/api/billing/sync", async (req, res) => {
    if (needStripe(res)) return;
    try {
      await syncCustomer(req.parent);
    } catch (err) {
      log.error?.("[evklid] Stripe sync:", err.message);
    }
    res.json(accountView(req, getParent(req.parent.id)));
  });

  // Priporočilo: ko povabljeni prvič plača, oba dobita mesec brezplačno.
  async function giveFreeMonth(p) {
    if (stripe.enabled && p.stripe_customer_id && PAID.has(p.sub_status)) {
      try {
        await stripe.request("POST", `/customers/${p.stripe_customer_id}/balance_transactions`, {
          amount: -monthlyAmount(p.sub_seats || 1, planByKey(p.sub_plan)?.currency || "EUR"),
          currency: (planByKey(p.sub_plan)?.currency || "EUR").toLowerCase(),
          description: "Evklid: brezplačni mesec (priporočilo)",
        });
        return "credit";
      } catch (err) {
        log.error?.("[evklid] dobropis ni uspel, dodajam dneve:", err.message);
      }
    }
    const from = Math.max(Date.now(), Date.parse(p.bonus_until || 0) || 0);
    update(p.id, { bonus_until: isoIn(REFERRAL_DAYS, from) });
    return "bonus";
  }

  async function maybeRewardReferral(parentId) {
    const p = getParent(parentId);
    if (!p?.referred_by || p.referral_rewarded) return;
    if (db.prepare("UPDATE parents SET referral_rewarded = 1 WHERE id = ? AND referral_rewarded = 0").run(p.id).changes === 0) return;
    const referrer = getParent(p.referred_by);
    const referredReward = await giveFreeMonth(getParent(p.id));
    const referrerReward = referrer ? await giveFreeMonth(referrer) : null;
    db.prepare("INSERT INTO referral_rewards (referrer_id, referred_id, referrer_reward, referred_reward) VALUES (?, ?, ?, ?)").run(
      referrer?.id ?? null,
      p.id,
      referrerReward,
      referredReward,
    );
    const appUrl = baseUrl(null);
    if (referrer) await sendMail(referrer.email, referralRewardEmail(appUrl));
    await sendMail(p.email, referralRewardEmail(appUrl));
  }

  app.post("/api/stripe/webhook", express.raw({ type: "*/*", limit: "1mb" }), async (req, res) => {
    const raw = Buffer.isBuffer(req.body) ? req.body.toString("utf8") : "";
    if (!verifyWebhook(raw, req.get("stripe-signature"), webhookSecret)) return res.status(400).json({ error: "Neveljaven podpis." });
    let event;
    try {
      event = JSON.parse(raw);
    } catch {
      return res.status(400).json({ error: "Neveljaven JSON." });
    }
    const obj = event.data?.object || {};
    try {
      const parentFor = () => parentByCustomer(obj.customer) || (obj.metadata?.parent_id && getParent(Number(obj.metadata.parent_id)));
      switch (event.type) {
        case "checkout.session.completed": {
          const p = parentFor() || getParent(Number(obj.client_reference_id));
          if (!p) break;
          if (!p.stripe_customer_id && obj.customer) update(p.id, { stripe_customer_id: obj.customer });
          if (obj.subscription && stripe.enabled) await applySubscription(p.id, await stripe.request("GET", `/subscriptions/${obj.subscription}`));
          break;
        }
        case "customer.subscription.created":
        case "customer.subscription.updated":
        case "customer.subscription.deleted": {
          const p = parentFor();
          if (p) await applySubscription(p.id, obj);
          break;
        }
        case "invoice.paid": {
          const p = parentFor();
          if (p && obj.amount_paid > 0) await maybeRewardReferral(p.id);
          break;
        }
      }
      res.json({ received: true });
    } catch (err) {
      log.error?.("[evklid] webhook:", event.type, err.message);
      res.status(500).json({ error: "Napaka pri obdelavi." });
    }
  });

  // --- tedensko poročilo ---
  const reportFor = (p, req) =>
    buildWeeklyReport(db, p, children(p.id), {
      appUrl: baseUrl(req) + "/",
      unsubscribeUrl: `${baseUrl(req)}/api/account/unsubscribe?token=${p.unsubscribe_token}`,
    });

  app.get("/api/account/weekly-report/preview", (req, res) => res.type("html").send(reportFor(req.parent, req).html));

  app.post("/api/account/weekly-report/send", async (req, res) => {
    const p = req.parent;
    if (p.is_guest) return res.status(400).json({ error: "Najprej ustvari račun." });
    if (!childIds(p.id).length) return res.status(400).json({ error: "Najprej dodajte otroka." });
    const ok = await sendMail(p.email, reportFor(p, req));
    res.status(ok ? 200 : 502).json(ok ? { ok: true, dev: !mailer.enabled } : { error: "Pošiljanje ni uspelo." });
  });

  async function sendWeeklyAll(now = new Date()) {
    const period = weekKey(now);
    const parents = db.prepare("SELECT * FROM parents WHERE weekly_email = 1 AND email_verified_at IS NOT NULL").all();
    let sent = 0;
    for (const p of parents) {
      if (!childIds(p.id).length) continue;
      const claim = db.prepare("INSERT OR IGNORE INTO email_log (parent_id, kind, period) VALUES (?, 'weekly', ?)").run(p.id, period);
      if (!claim.changes) continue;
      const ok = await sendMail(p.email, reportFor(p, null));
      if (!ok) db.prepare("UPDATE email_log SET ok = 0 WHERE parent_id = ? AND kind = 'weekly' AND period = ?").run(p.id, period);
      else sent++;
    }
    return sent;
  }

  // --- dnevni opomnik do datuma cilja (ob 12.00 v Ljubljani, enkrat na dan za vsakega otroka) ---
  async function sendGoalRemindersAll(now = new Date()) {
    const { date } = ljNow(now);
    const parents = db.prepare("SELECT * FROM parents WHERE email_verified_at IS NOT NULL").all();
    let sent = 0;
    for (const p of parents) {
      for (const child of children(p.id)) {
        const n = reminderDays(child, date);
        if (n === null) continue;
        const period = `${date}:${child.id}`;
        const claim = db.prepare("INSERT OR IGNORE INTO email_log (parent_id, kind, period) VALUES (?, 'goal', ?)").run(p.id, period);
        if (!claim.changes) continue;
        const ok = await sendMail(p.email, buildGoalReminder(child, n, { appUrl: baseUrl(null) + "/" }));
        if (!ok) db.prepare("UPDATE email_log SET ok = 0 WHERE parent_id = ? AND kind = 'goal' AND period = ?").run(p.id, period);
        else sent++;
      }
    }
    return sent;
  }

  if (opts.scheduler !== false) {
    const timer = setInterval(() => {
      if (process.env.EVKLID_WEEKLY_EMAIL !== "0" && isSendTime()) sendWeeklyAll().catch((e) => log.error?.("[evklid] tedenska poročila:", e.message));
      if (process.env.EVKLID_GOAL_EMAIL !== "0" && isNoonTime()) sendGoalRemindersAll().catch((e) => log.error?.("[evklid] opomniki cilja:", e.message));
      try {
        guests.cleanup();
      } catch (e) {
        log.error?.("[evklid] čiščenje gostov:", e.message);
      }
    }, 30 * 60000);
    timer.unref();
  }

  return { sendWeeklyAll, sendGoalRemindersAll, maybeRewardReferral, stripe, mailer, premiumFor, guests };
}

