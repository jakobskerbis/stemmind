import { icon } from "./icons.js";
import { loadPrograms, programsCache } from "./programs.js";
import { mountLevelPicker, schoolSystemOptions } from "./level-picker.js";
import { systemForCountry } from "./regions.js";
import { currentLang, currentRegion, deviceRegion, t } from "./i18n.js";
import { openProfileMenu } from "./profile-menu.js";
import { consentFields, consentsOk, consentBody, linkBox, bindLinkBox } from "./pay-ui.js";
// Starševski račun: prijava, potrditev e-naslova, otroci s soglasjem, naročnina, priporočila.
// Deluje samo, ko je na strežniku EVKLID_ACCOUNTS=1.

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const eur = (cents) => (cents / 100).toLocaleString("sl-SI", { style: "currency", currency: "EUR" });
// Cena v valuti paketa (regijske cene: rupije, naire …); valute brez decimalk imajo cele enote.
const ZERO_DECIMAL = new Set(["VND", "XOF", "XAF", "UGX", "RWF", "JPY", "KRW", "GNF", "MGA"]);
const money = (minor, currency = "EUR") => {
  if (currency === "EUR") return eur(minor);
  const major = ZERO_DECIMAL.has(currency) ? minor : minor / 100;
  const whole = Number.isInteger(major);
  return major.toLocaleString(currentLang() === "sl" ? "sl-SI" : undefined, { style: "currency", currency, minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: whole ? 0 : 2 });
};
const date = (iso) => (iso ? new Date(iso).toLocaleDateString("sl-SI", { day: "numeric", month: "long", year: "numeric" }) : "");
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch {} },
};

async function api(url, opts = {}) {
  const res = await fetch(url, {
    method: opts.method || "GET",
    headers: { "Content-Type": "application/json" },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || `Napaka ${res.status}`), { data, status: res.status });
  return data;
}

let enabled = false;
let status = null;
let onReadyCb = null;

export const accountsOn = () => enabled;

// Profil je lahko hkrati odprt samo na eni napravi. Če ga ima druga naprava,
// strežnik vrne 409 { taken }; ponudimo prevzem.
function watchTakenProfiles() {
  const orig = window.fetch.bind(window);
  window.fetch = async (...args) => {
    const res = await orig(...args);
    if (res.status === 409) {
      res.clone().json().then((d) => d?.taken && showTaken(d, orig)).catch(() => {});
    }
    // Profil je bil medtem zaklenjen (odklep drugega profila na tej napravi, novo geslo, odjava drugod).
    if (res.status === 423) {
      res.clone().json().then((d) => {
        if (!d?.locked || $("#lock-overlay")) return;
        openProfileLock({ id: d.student_id, name: d.name, locked: true }).then((id) => {
          store.set("studentId", String(id));
          location.reload();
        });
      }).catch(() => {});
    }
    return res;
  };
}

function showTaken(d, rawFetch) {
  if ($("#taken-overlay")) return;
  const box = document.createElement("div");
  box.id = "taken-overlay";
  box.className = "overlay";
  box.innerHTML = `<div class="card overlay-card">
    <h2>Profil je odprt drugje</h2>
    <p>${esc(d.error)}</p>
    <p class="muted">Če nadaljuješ tukaj, se na drugi napravi profil zapre.</p>
    <div class="form-actions">
      <button class="primary" id="taken-here" type="button">Nadaljuj tukaj</button>
      <button id="taken-other" type="button">Izberi drug profil</button>
    </div></div>`;
  document.body.appendChild(box);
  $("#taken-here").addEventListener("click", async () => {
    await rawFetch(`/api/students/${d.student_id}/claim`, { method: "POST" });
    store.set("studentId", String(d.student_id));
    location.reload();
  });
  $("#taken-other").addEventListener("click", () => {
    box.remove();
    openProfileMenu();
  });
}

// ---------- geslo profila ----------
// Vsak profil ima svoje geslo. Zaklenjen profil (locked) odpre geslo; profil brez gesla (needs_password)
// pred prvo uporabo dobi geslo. Vrne id profila, ki ga odpremo: tega ali drugega, ki ga izbere uporabnik.
const PROFILE_PW_MIN = 4;
const lockError = (err) => (err.status === 401 ? t("lock.wrong") : err.status === 429 ? t("lock.tooMany") : err.message);

export function openProfileLock(student, students = []) {
  $("#lock-overlay")?.remove();
  const set = !student.locked;
  const others = students.filter((s) => s.id !== student.id);
  const pw = (name, auto, label) =>
    `<label>${esc(label)} <input type="password" name="${name}" minlength="${PROFILE_PW_MIN}" maxlength="200" autocomplete="${auto}" required></label>`;
  const box = document.createElement("div");
  box.id = "lock-overlay";
  box.className = "overlay";
  box.innerHTML = `<div class="card overlay-card lock-card" role="dialog" aria-modal="true" aria-labelledby="lock-title">
    <span class="pm-avatar big" aria-hidden="true">${esc((student.name || "?").trim().charAt(0).toUpperCase() || "?")}</span>
    <h2 id="lock-title" dir="auto">${esc(student.name)}</h2>
    <form class="form" id="lock-form" novalidate>
      <p class="muted">${esc(set ? t("lock.setText") : t("lock.text"))}</p>
      ${pw("password", set ? "new-password" : "current-password", t("lock.password"))}
      ${set ? `${pw("repeat", "new-password", t("lock.repeat"))}<small class="muted">${esc(t("lock.hint"))}</small>` : ""}
      <p class="form-error" role="alert" hidden></p>
      <button class="primary" type="submit">${esc(set ? t("lock.save") : t("lock.open"))}</button>
    </form>
    ${set ? "" : `<details class="lock-forgot"><summary>${esc(t("lock.forgot"))}</summary>
      <form class="form" id="lock-reset" novalidate>
        <p class="muted">${esc(t("lock.forgotText"))}</p>
        ${pw("auth", "current-password", t("lock.accountPw"))}
        ${pw("password", "new-password", t("lock.newPw"))}
        <p class="form-error" role="alert" hidden></p>
        <button type="submit">${esc(t("lock.save"))}</button>
      </form></details>`}
    ${others.length ? `<p class="muted lock-others-title">${esc(t("lock.other"))}</p>
      <div class="lock-others">${others.map((o) => `<button type="button" data-id="${o.id}" dir="auto">${esc(o.name)}</button>`).join("")}</div>` : ""}
    <form method="post" action="/api/auth/logout" class="lock-logout"><button type="submit" class="ghost" id="lock-logout">${esc(t("pm.logout"))}</button></form>
  </div>`;
  document.body.appendChild(box);
  // Aplikacija za zaslonom ni dosegljiva s tipko Tab ali bralnikom zaslona, dokler je profil zaklenjen.
  const behind = [...document.body.children].filter((el) => el !== box);
  behind.forEach((el) => (el.inert = true));
  const f = $("#lock-form", box);
  f.password.focus();
  const fail = (form, msg) => {
    const e = $(".form-error", form);
    e.textContent = msg;
    e.hidden = false;
  };
  const checkNew = (form, a, b) => {
    if (a.length < PROFILE_PW_MIN) return fail(form, t("lock.short")), false;
    if (b !== undefined && a !== b) return fail(form, t("lock.mismatch")), false;
    return true;
  };
  return new Promise((resolve) => {
    const done = (id) => {
      behind.forEach((el) => (el.inert = false));
      box.remove();
      resolve(id);
    };
    let busy = false;
    const submit = (form, run) =>
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (busy) return;
        busy = true;
        const btn = $('button[type="submit"]', form);
        btn.disabled = true;
        try {
          await run();
        } catch (err) {
          fail(form, lockError(err));
        } finally {
          busy = false;
          btn.disabled = false;
        }
      });
    submit(f, async () => {
      const v = f.password.value;
      if (set && !checkNew(f, v, f.repeat.value)) return;
      if (!v) return fail(f, t("lock.wrong"));
      await api(`/api/students/${student.id}/unlock`, { method: "POST", body: set ? { password: v, set: true } : { password: v } });
      done(student.id);
    });
    const r = $("#lock-reset", box);
    if (r) {
      submit(r, async () => {
        if (!checkNew(r, r.password.value)) return;
        await api("/api/account/profile-password", { method: "POST", body: { student_id: student.id, auth: r.auth.value, password: r.password.value } });
        await api(`/api/students/${student.id}/unlock`, { method: "POST", body: { password: r.password.value } });
        toast(t("lock.saved"));
        done(student.id);
      });
    }
    box.querySelectorAll(".lock-others [data-id]").forEach((b) => b.addEventListener("click", () => done(Number(b.dataset.id))));
    // Odjava je navaden obrazec (strežnik preusmeri na prijavo), da deluje v vsakem brskalniku, tudi brez skripta.
    $(".lock-logout", box).addEventListener("submit", () => store.set("studentId", null));
  });
}

function toast(msg) {
  const t = $("#toast");
  if (!t) return alert(msg);
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (t.hidden = true), 4000);
}

function authMode(on) {
  document.body.classList.toggle("auth-mode", on);
  $("#view-auth").hidden = !on;
  if (on) document.querySelectorAll(".view").forEach((v) => (v.hidden = v.id !== "view-auth"));
}

const errorBox = (form) => $(".form-error", form);
function showError(form, err) {
  const box = errorBox(form);
  box.textContent = err.message;
  box.hidden = false;
}

// ---------- zagon ----------

// Vrne true, ko lahko aplikacija naloži učence. Sicer prikaže prijavo in pozneje pokliče onReady.
export async function initAccount({ onReady }) {
  onReadyCb = onReady;
  status = await api("/api/account/status").catch(() => ({ enabled: false }));
  enabled = !!status.enabled;
  if (!enabled) return true;
  $("#account-tab").hidden = false;
  watchTakenProfiles();
  guardLogoOnAuth();
  $("#account-tab").addEventListener("click", renderAccount);

  const q = new URLSearchParams(location.search);
  if (q.get("ref")) store.set("evklid_ref", q.get("ref"));
  if (q.get("koda")) store.set("evklid_koda", q.get("koda"));
  // Povezava s strani za starše (starsi.html): starš ustvari račun, otrokovo ime je že vpisano.
  const parentInvite = q.get("starsi") === "1";
  if (parentInvite) {
    store.set("evklid_invite_name", (q.get("ime") || "").slice(0, 40) || null);
    store.set(AGE_BLOCK, null);
  }
  const reset = q.get("reset");
  const verified = q.get("verified");
  const billing = q.get("billing");
  const sessionId = q.get("session_id");
  if (q.toString()) history.replaceState(null, "", location.pathname);
  if (verified === "1") toast("E-naslov je potrjen ✓");
  if (verified === "0") toast("Povezava za potrditev ni veljavna ali je že uporabljena.");

  if (reset) {
    renderReset(reset);
    return false;
  }
  if (billing && status.logged_in) {
    if (billing === "pass" && sessionId) {
      // Paket pred testom: potrditev plačila ob vrnitvi (deluje tudi brez webhooka).
      const r = await api("/api/billing/pass/confirm", { method: "POST", body: { session_id: sessionId } }).catch(() => null);
      toast(r?.paid ? t("pass.paid") : t("pass.pending"));
    } else if (billing !== "cancel") await api("/api/billing/sync", { method: "POST" }).catch(() => {});
    if (billing === "success") toast("Hvala! Naročnina je aktivna.");
    status = await api("/api/account/status");
  }
  if (parentInvite) route.firstMode = "register";
  const ready = await route();
  route.firstMode = null;
  if (ready && billing) setTimeout(() => $("#account-tab").click(), 0);
  return ready;
}

// Na zaslonih prijave logotip ne odpira menija delov aplikacije (ti brez profila ne delujejo).
// Skriti vhod za goste (dotik logotipa) je odstranjen skupaj z uporabo brez računa (j, 2026-10-29).
function guardLogoOnAuth() {
  document.addEventListener(
    "click",
    (e) => {
      if (!e.target.closest(".brand") || !document.body.classList.contains("auth-mode")) return;
      e.preventDefault();
      e.stopImmediatePropagation();
    },
    true,
  );
}

async function route() {
  if (!status.logged_in) return renderLogin(route.firstMode || "login"), false;
  // Uporaba brez računa je izklopljena: gost lahko samo ustvari račun in obdrži napredek.
  if (status.parent.guest && !status.guest_mode) return renderGuestOff(), false;
  if (!status.parent.verified && !status.parent.guest) return renderVerify(), false;
  if (!status.children) return renderAddChild(), false;
  authMode(false);
  adjustAppForAccounts();
  return true;
}

async function continueFlow() {
  status = await api("/api/account/status");
  if (await route()) await onReadyCb?.();
}

// Učenca dodaja starš s soglasjem v zavihku Račun (porabo AI skrije strežnik vsem razen skrbniku).
function adjustAppForAccounts() {
  const form = $("#new-student-form");
  if (form) {
    form.hidden = true;
    const h = form.closest(".card")?.querySelector("h2");
    if (h) h.textContent = "Profil otroka";
  }
}

// Ko starš izbriše zadnjega otroka.
export function openAddChild() {
  renderAddChild();
}

// ---------- prijava in registracija ----------

function shell(inner) {
  authMode(true);
  $("#view-auth").innerHTML = `<div class="auth-box">${inner}</div>`;
}

// Po zavrnjeni registraciji zaradi starosti naprava 24 ur kaže stran s povezavo za starše.
const AGE_BLOCK = "evklid_age_block";
const ageBlocked = () => Date.now() - Number(store.get(AGE_BLOCK) || 0) < 86400000;

function renderLogin(mode = "login") {
  if (mode === "register" && ageBlocked()) return renderAskParent();
  const invited = mode === "register" && store.get("evklid_invite_name");
  const ref = store.get("evklid_ref") || "";
  const koda = store.get("evklid_koda") || "";
  shell(`
    <h1>${mode === "login" ? "Prijava" : "Nov račun"}</h1>
    <p class="muted">${mode === "login" ? "Za starše (otrokov profil) in za dijake ter študente (lasten profil)." : `Evklid je 7 dni brezplačen, brez kartice. Nato ${eur(999)} na mesec ali brezplačni paket z omejenim številom vprašanj.`}</p>
    ${invited ? `<p class="card">Ustvarite svoj račun starša. Nato dodate otrokov profil (<b>${esc(invited)}</b>) in s tem date soglasje.</p>` : ""}
    <form id="auth-form" class="card form">
      ${mode === "register" ? `<label>Vaše ime (neobvezno) <input name="name" maxlength="60" autocomplete="name"></label>` : ""}
      <label>E-naslov <input name="email" type="email" required autocomplete="email"></label>
      <label>Geslo <input name="password" type="password" required minlength="8" autocomplete="${mode === "login" ? "current-password" : "new-password"}"></label>
      ${mode === "register" ? `
        <label>Vaš datum rojstva <input name="birth_date" type="date" required min="1900-01-01" max="${new Date().toISOString().slice(0, 10)}" autocomplete="bday"></label>
        <label>Aktivacijska koda (neobvezno) <input name="promo_code" maxlength="40" autocapitalize="characters" value="${esc(koda)}"></label>
        <label>Koda priporočila (neobvezno) <input name="referral_code" maxlength="12" value="${esc(ref)}"></label>
        <label class="check"><input type="checkbox" name="accept_privacy" required>
          <span>Prebral(a) sem <a href="/zasebnost.html" target="_blank">obvestilo o varstvu osebnih podatkov</a>. Račun ustvarjam kot starš oziroma zakoniti zastopnik ali zase (dijak ali študent).</span></label>` : ""}
      <p class="form-error" hidden></p>
      <button class="primary" type="submit">${mode === "login" ? "Prijava" : "Ustvari račun"}</button>
    </form>
    <p class="auth-links">
      ${mode === "login"
        ? `Še nimate računa? <a href="#" data-go="register">Registracija</a> · <a href="#" data-go="forgot">Pozabljeno geslo</a>`
        : `Že imate račun? <a href="#" data-go="login">Prijava</a>`}
    </p>`);
  bindLinks();
  $("#auth-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = e.target;
    try {
      if (mode === "login") {
        await api("/api/auth/login", { method: "POST", body: { email: f.email.value, password: f.password.value } });
      } else {
        const r = await api("/api/auth/register", {
          method: "POST",
          body: { name: f.name.value, email: f.email.value, password: f.password.value, referral_code: f.referral_code.value, promo_code: f.promo_code.value, accept_privacy: f.accept_privacy.checked, birth_date: f.birth_date.value, country: deviceRegion() },
        });
        store.set("evklid_ref", null);
        store.set("evklid_koda", null);
        if (r.promo_until) toast(`Aktivacijska koda velja ✓ Poln dostop do ${date(r.promo_until)}.`);
        if (r.promo_error) toast(`Račun je ustvarjen, koda pa ni bila sprejeta: ${r.promo_error}`);
        if (r.dev_verify_url) store.set("evklid_dev_verify", r.dev_verify_url);
      }
      await continueFlow();
    } catch (err) {
      if (err.data?.under_age) {
        store.set(AGE_BLOCK, String(Date.now()));
        return renderAskParent(err.data.min_age);
      }
      showError(f, err);
    }
  });
}

// Premlad za lasten račun: povezava za starše s vsemi podatki (kaj je Evklid, podatki, cena, soglasje).
function renderAskParent(minAge) {
  const linkFor = (name) => `${location.origin}/starsi.html${name ? `?ime=${encodeURIComponent(name)}` : ""}`;
  shell(`
    <h1>Vprašaj starše</h1>
    <p class="muted">${minAge ? `Za mlajše od ${minAge} let` : "Za mlajše učence"} račun ustvari starš ali skrbnik. Pošlji jim to povezavo: tam piše, kaj je Evklid, katere podatke hranimo in koliko stane. Ko starš ustvari račun in doda tvoj profil, se lahko začneš učiti.</p>
    <form id="ask-parent" class="card form">
      <label>Tvoje ime ali vzdevek (neobvezno) <input name="name" maxlength="40" placeholder="npr. Miha"></label>
      <label>Povezava za starše <input name="link" readonly value="${esc(linkFor(""))}"></label>
      <div class="form-actions">
        <button class="primary" type="button" data-act="share">Pošlji staršem</button>
        <button type="button" data-act="copy">Kopiraj povezavo</button>
        <button type="button" data-act="mail">Pošlji po e-pošti</button>
      </div>
    </form>
    <p class="auth-links">Si starš? <a href="/starsi.html">Preberi več in ustvari račun</a> · <a href="#" data-go="login">Prijava</a></p>`);
  bindLinks();
  const f = $("#ask-parent");
  const link = () => linkFor(f.name.value.trim());
  const text = () => {
    const n = f.name.value.trim();
    return `${n ? `${n} bi rad(a)` : "Rad(a) bi"} uporabljal(a) Evklid, AI inštruktorja za matematiko, fiziko in kemijo. Za to potrebujem tvoje dovoljenje:`;
  };
  const mail = () => (location.href = `mailto:?subject=${encodeURIComponent("Evklid – prosim za dovoljenje")}&body=${encodeURIComponent(`${text()}\n${link()}`)}`);
  f.name.addEventListener("input", () => (f.link.value = link()));
  f.querySelector('[data-act="mail"]').addEventListener("click", mail);
  f.querySelector('[data-act="copy"]').addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(link());
      toast("Povezava je kopirana.");
    } catch {
      f.link.select();
    }
  });
  f.querySelector('[data-act="share"]').addEventListener("click", async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Evklid", text: text(), url: link() });
      } catch {}
    } else mail();
  });
}

function bindLinks() {
  document.querySelectorAll("[data-go]").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const go = a.dataset.go;
      if (go === "forgot") renderForgot();
      else renderLogin(go);
    }),
  );
}

function renderForgot() {
  shell(`
    <h1>Pozabljeno geslo</h1>
    <form id="auth-form" class="card form">
      <label>E-naslov <input name="email" type="email" required autocomplete="email"></label>
      <p class="form-error" hidden></p>
      <button class="primary" type="submit">Pošlji povezavo</button>
    </form>
    <p class="auth-links"><a href="#" data-go="login">Nazaj na prijavo</a></p>`);
  bindLinks();
  $("#auth-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const r = await api("/api/auth/forgot", { method: "POST", body: { email: e.target.email.value } });
      e.target.outerHTML = `<div class="card"><p>Če račun s tem e-naslovom obstaja, smo vam poslali povezavo za novo geslo.</p>${
        r.dev_reset_url ? `<p class="muted">Razvojni način (e-pošta ni nastavljena): <a href="${esc(r.dev_reset_url)}">nastavi geslo</a></p>` : ""
      }</div>`;
    } catch (err) {
      showError(e.target, err);
    }
  });
}

function renderReset(token) {
  shell(`
    <h1>Novo geslo</h1>
    <form id="auth-form" class="card form">
      <label>Novo geslo <input name="password" type="password" required minlength="8" autocomplete="new-password"></label>
      <p class="form-error" hidden></p>
      <button class="primary" type="submit">Shrani geslo</button>
    </form>`);
  $("#auth-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await api("/api/auth/reset", { method: "POST", body: { token, password: e.target.password.value } });
      toast("Geslo je spremenjeno ✓");
      await continueFlow();
    } catch (err) {
      showError(e.target, err);
    }
  });
}

function renderVerify() {
  const dev = store.get("evklid_dev_verify");
  shell(`
    <h1>Potrdite e-naslov</h1>
    <div class="card">
      <p>Na <b>${esc(status.parent.email)}</b> smo poslali povezavo. Kliknite jo, nato se vrnite sem.</p>
      <p class="muted">S potrditvijo tudi izjavite, da ste starš ali zakoniti zastopnik otroka. To zahteva zakon o varstvu podatkov za otroke, mlajše od 15 let.</p>
      ${dev && !status.email ? `<p class="muted">Razvojni način (e-pošta ni nastavljena): <a href="${esc(dev)}">potrdi e-naslov</a></p>` : ""}
      ${!dev && !status.email ? `<p class="warn">E-pošta na strežniku še ni nastavljena, zato povezava ni prišla. Na računalniku, kjer teče Evklid, se prijavite v ta račun in kliknite »Pošlji znova«.</p>` : ""}
      <div class="form-actions">
        <button class="primary" id="verify-done" type="button">Sem potrdil(a)</button>
        <button id="verify-resend" type="button">Pošlji znova</button>
        <button id="verify-logout" type="button">Odjava</button>
      </div>
    </div>`);
  $("#verify-done").addEventListener("click", continueFlow);
  $("#verify-resend").addEventListener("click", async () => {
    const r = await api("/api/auth/resend-verification", { method: "POST" });
    if (r.dev_verify_url) store.set("evklid_dev_verify", r.dev_verify_url);
    toast("Povezava je poslana znova.");
    if (r.dev_verify_url) renderVerify();
  });
  $("#verify-logout").addEventListener("click", logout);
}

// ---------- otroci ----------

function childForm(consentText, programs = []) {
  const y = new Date().getFullYear();
  const years = Array.from({ length: 60 }, (_, i) => y - 6 - i);
  // Mladoletni imetnik računa ustvari samo svoj profil (letnica iz datuma rojstva ob registraciji).
  const self = !!status?.parent?.minor;
  const invited = store.get("evklid_invite_name") || "";
  // Polnoletni imetnik izbere: profil za otroka (soglasje starša) ali zase (dijak/študent, dovolj star za lastno soglasje).
  const choice = self ? "" : `
      <fieldset class="whose-field">
        <legend>Za koga je profil?</legend>
        <label class="check"><input type="radio" name="whose" value="child"${invited ? " checked" : ""} required> <span>Za mojega otroka (dam soglasje kot starš)</span></label>
        <label class="check"><input type="radio" name="whose" value="self"> <span>Zame: sem dijak ali študent, star vsaj 15 let, in soglašam sam</span></label>
      </fieldset>`;
  return `
    <form id="child-form" class="card form${self ? " self-profile" : ""}">${choice}
      <label>${self ? "Tvoje ime ali vzdevek" : "Ime ali vzdevek"} <input name="name" maxlength="40" required placeholder="npr. Miha" value="${esc(invited)}"></label>
      <fieldset class="level-field">
        <legend>Šola in letnik</legend>
        <label class="system-field"><span>Država in šolski sistem</span>
          <select name="school_system">${schoolSystemOptions(systemForCountry(deviceRegion()))}</select>
        </label>
        <div class="level-picker child-level"></div>
        <small class="muted">Vsebina se prilagodi izbiri; pri fakulteti sledi javnemu predmetniku programa. Izbiro lahko kadar koli spremeniš v profilu.</small>
        <input type="hidden" name="educational_track">
        <input type="hidden" name="study_program">
        <input type="hidden" name="curriculum_level">
      </fieldset>
      <label class="year-field"${self ? " hidden" : ""}>Letnica rojstva
        <select name="birth_year"${self ? "" : " required"}><option value="">Izberite …</option>${years.map((v) => `<option>${v}</option>`).join("")}</select>
      </label>
      ${status?.parent?.guest ? "" : `<label>${esc(t("lock.password"))} <input type="password" name="profile_password" minlength="${PROFILE_PW_MIN}" maxlength="200" autocomplete="new-password" required></label>
      <small class="muted">${esc(t("lock.hint"))}</small>`}
      <label class="check"><input type="checkbox" name="consent" required>
        <span class="consent-self"${self ? "" : " hidden"}>Profil je moj. Prebral(a) sem <a href="/zasebnost.html" target="_blank">obvestilo o varstvu podatkov</a> in soglašam z obdelavo svojih podatkov (ime ali vzdevek, letnica rojstva, nastavitve, pogovori z AI inštruktorjem, fotografije nalog in napredek) za namen učenja.</span>
        <span class="consent-child"${self ? " hidden" : ""}>${esc(consentText)} <a href="/zasebnost.html" target="_blank">Obvestilo o varstvu podatkov</a>.</span>
</label>
      <p class="form-error" hidden></p>
      <button class="primary" type="submit">Ustvari profil</button>
    </form>`;
}

// Nastavitve profila iz obrazca: šola, program in letnik.
function childSettings(f) {
  const track = f.educational_track.value;
  const base = { school_system: f.school_system.value, educational_track: track, study_program: f.study_program.value, curriculum_level: f.curriculum_level.value, language: currentLang(), region: currentRegion() };
  if (track === "UNIVERZA") return { ...base, subject: programsCache().find((p) => p.id === f.study_program.value)?.mainSubject || "MAT" };
  return base;
}

function bindChildForm(after) {
  const f = $("#child-form");
  const fixedSelf = f.classList.contains("self-profile");
  const isSelf = () => fixedSelf || f.whose?.value === "self";
  // Lasten profil: soglasje dijaka/študenta; letnica iz datuma rojstva ob registraciji, če ga imamo.
  const sync = () => {
    const own = isSelf();
    f.querySelector(".consent-self").hidden = !own;
    f.querySelector(".consent-child").hidden = own;
    const knownYear = own && status?.parent?.birth_year;
    f.querySelector(".year-field").hidden = fixedSelf || !!knownYear;
    f.birth_year.required = !(fixedSelf || knownYear);
  };
  f.querySelectorAll('input[name="whose"]').forEach((r) => r.addEventListener("change", sync));
  // Pri fakulteti je profil najpogosteje študentov lasten.
  const toggle = (_, track) => {
    if (fixedSelf || !f.whose) return;
    if (track === "UNIVERZA" && !f.whose.value) f.querySelector('input[name="whose"][value="self"]').checked = true;
    sync();
  };
  const picker = mountLevelPicker(f.querySelector(".child-level"), f, { programs: programsCache(), settings: { school_system: f.school_system.value }, onChange: toggle });
  f.school_system.addEventListener("change", () => picker.setSystem(f.school_system.value));
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!picker.complete()) return showError(f, new Error("Izberite šolo in letnik do konca."));
    const profilePw = f.profile_password?.value;
    if (f.profile_password && profilePw.length < PROFILE_PW_MIN) return showError(f, new Error(t("lock.short")));
    try {
      const s = await api("/api/students", {
        method: "POST",
        body: { name: f.name.value, birth_year: Number(f.birth_year.value), self: isSelf(), consent: f.consent.checked, settings: childSettings(f), ...(profilePw ? { profile_password: profilePw } : {}) },
      });
      store.set("studentId", String(s.id));
      store.set("evklid_invite_name", null);
      await after(s);
    } catch (err) {
      showError(f, err);
    }
  });
}

async function renderAddChild() {
  const [acc, programs] = await Promise.all([api("/api/account"), loadPrograms(api)]);
  shell(`
    <h1>Ustvarite profil</h1>
    <p class="muted">Vsak učenec, dijak ali študent ima svoj profil z učno potjo in napredkom. Za otroke, mlajše od 15 let, je potrebno soglasje starša.</p>
    ${childForm(acc.consent_text, programs)}
    <p class="auth-links"><a href="#" id="add-child-logout">Odjava</a></p>`);
  $("#add-child-logout").addEventListener("click", (e) => (e.preventDefault(), logout()));
  bindChildForm(continueFlow);
}

// ---------- zavihek Račun ----------

const STATUS_TEXT = {
  active: "aktivna",
  trialing: "brezplačni preizkus",
  past_due: "plačilo ni uspelo – posodobite kartico",
  canceled: "preklicana",
  unpaid: "neplačana",
  incomplete: "nedokončana",
  incomplete_expired: "potekla",
  paused: "zaustavljena",
};


// Poraba inštruktorja ta mesec kot delež mesečne omejitve (brez zneskov).
function aiPill(a) {
  if (!a || a.percent == null) return "";
  if (a.hard_reached) return `<span class="pill warn" title="Inštruktor bo spet na voljo 1. v mesecu. Vadnica deluje naprej.">inštruktor ta mesec porabljen</span>`;
  const extra = a.soft_reached ? " · podrobne razlage pripravlja hitrejši model" : "";
  return `<span class="pill" title="Delež mesečne omejitve za AI inštruktorja">AI ta mesec ${a.percent} %${extra}</span>`;
}

function planText(acc) {
  const { access, parent } = acc;
  const sub = parent.subscription;
  const plan = sub && acc.plans.find((p) => p.key === sub.plan);
  if (access.tier === "paid") {
    return `<p><b>Naročnina:</b> ${esc(plan?.label || sub.plan)} (${STATUS_TEXT[sub.status] || sub.status})</p>
      <p class="muted">${sub.cancel_at_period_end ? `Naročnina se konča ${date(sub.period_end)}.` : `Naslednje obdobje se začne ${date(sub.period_end)}.`}</p>`;
  }
  if (access.tier === "trial") return `<p><b>Brezplačni preizkus</b> do ${date(access.until)}: vse funkcije za do 2 otroka.</p>`;
  if (access.tier === "promo") {
    const trial = Date.parse(parent.trial_ends_at || 0) > Date.now();
    return `<p><b>Poln dostop z aktivacijsko kodo</b> do ${date(access.until)}.</p>${
      trial ? `<p class="muted">Do ${date(parent.trial_ends_at)} (preizkus) lahko uporabljata 2 otroka, nato velja koda za ${acc.promo?.seats > 1 ? `${acc.promo.seats} otroke` : "1 otroka"}.</p>` : ""}`;
  }
  if (access.tier === "bonus") return `<p><b>Brezplačni mesec</b> iz priporočila do ${date(access.until)}.</p>`;
  return `<p><b>Brezplačni paket:</b> vadnica brez omejitev in ${acc.free_daily_questions} vprašanj inštruktorju na dan.</p>`;
}

function plansPicker(acc) {
  const cell = (seats, interval) => {
    const p = acc.plans.find((x) => x.seats === seats && x.interval === interval);
    const cur = p.currency || "EUR";
    const perMonth = interval === "year" ? `<span class="muted">≈ ${money(Math.round(p.amount / 10), cur)} / mesec (10 mesecev)</span>` : "";
    return `<label class="plan"><input type="radio" name="plan" value="${seats}-${interval}" ${seats === 1 && interval === "month" ? "checked" : ""}>
      <span><b>${money(p.amount, cur)}</b> / ${interval === "year" ? "šolsko leto" : "mesec"}<br>${perMonth}</span></label>`;
  };
  return `
    <form id="plan-form" class="plans" novalidate>
      <div class="plan-row"><div class="plan-head">1 otrok</div>${cell(1, "month")}${cell(1, "year")}</div>
      <div class="plan-row"><div class="plan-head">2 otroka</div>${cell(2, "month")}${cell(2, "year")}</div>
      <p class="form-error" role="alert" hidden></p>
      ${acc.prices_draft ? `<p class="muted">Cene v lokalni valuti so predlog (razvojna različica).</p>` : ""}
      ${acc.parent.minor
        ? `<p class="muted">${esc(t("pay.minorNote"))}</p>
           <button class="primary" type="button" id="plan-link">${esc(t("pay.askParent"))}</button><div id="plan-link-out"></div>`
        : `${consentFields()}
           <button class="primary" type="submit">${esc(t("pay.continue"))}</button>`}
      ${acc.parent.minor ? "" : `<p class="muted">Plačilo poteka varno prek Stripe. Naročnino lahko kadar koli prekličete.${
        acc.access.tier === "trial" ? " Preostanek preizkusa se ohrani: prvo plačilo bo šele po njegovem koncu." : ""
      }</p>`}
    </form>`;
}

// Vnos aktivacijske kode; skrbnik vidi še porabo in povezavo za deljenje.
function promoBox(acc, paid) {
  const pr = acc.promo || {};
  const a = pr.admin;
  const admin = a
    ? `<div class="promo-admin"><p><b>Aktivacijska koda ${esc(a.code)}:</b> porabljenih ${a.used} od ${a.limit} · vsak dobi ${a.days} dni polnega dostopa.</p>
        <div class="inline"><input id="promo-url" readonly value="${esc(a.url)}"><button id="promo-copy" type="button">Kopiraj</button></div></div>`
    : "";
  if (!pr.available || pr.redeemed || paid) return admin;
  return `<details${store.get("evklid_koda") ? " open" : ""}><summary>Imate aktivacijsko kodo?</summary>
      <form id="promo-form" class="inline form">
        <input name="code" maxlength="40" required autocapitalize="characters" placeholder="npr. EVKLID3X" value="${esc(store.get("evklid_koda") || "")}">
        <button class="primary" type="submit">Aktiviraj</button>
        <p class="form-error" hidden></p>
      </form></details>${admin}`;
}

// Skrbnik: aktivacijske kode (seznam, nova koda, vklop/izklop) in zadnji dogodki plačil.
function adminCodes(acc) {
  const rows = acc.promo.codes
    .map(
      (c) => `<li class="code-row"><div><b>${esc(c.code)}</b>${c.from_env ? ` <span class="pill">${esc(t("admin.fromEnv"))}</span>` : ""} <span class="pill ${c.active ? "ok" : ""}">${esc(t(c.active ? "admin.on" : "admin.off"))}</span>
        <br><small class="muted">${esc(t("admin.usage", { used: c.used, max: c.max_uses, days: c.days, seats: c.seats }))} · ${esc(c.max_model === "sonnet" ? t("admin.modelSonnet") : t("admin.modelAny"))}${c.valid_until ? ` · ${esc(t("admin.untilShort", { date: date(c.valid_until) }))}` : ""}${c.note ? ` · ${esc(c.note)}` : ""}</small></div>
        <div class="code-actions"><button type="button" data-code-copy="${esc(c.code)}">${esc(t("admin.copyLink"))}</button>
        <button type="button" data-code-toggle="${esc(c.code)}" data-active="${c.active ? 1 : 0}">${esc(t(c.active ? "admin.disable" : "admin.enable"))}</button></div></li>`,
    )
    .join("");
  const events = (acc.billing_events || [])
    .map((e) => `<li><code>${esc(e.type)}</code> <small class="muted">${esc(e.received_at)}${e.error ? ` · ${esc(t("admin.eventError"))}: ${esc(e.error)}` : e.processed_at ? "" : " · …"}</small></li>`)
    .join("");
  return `
    <div class="card admin-codes">
      <h2>${esc(t("admin.codes"))}</h2>
      <ul class="code-list">${rows}</ul>
      <details class="code-new"><summary>${esc(t("admin.create"))}</summary>
        <form id="code-form" class="form" novalidate>
          <label>${esc(t("admin.code"))} <input name="code" required maxlength="30" autocapitalize="characters" pattern="[A-Za-z0-9-]{4,30}"></label>
          <label>${esc(t("admin.days"))} <input name="days" type="number" min="1" max="730" value="30" required></label>
          <label>${esc(t("admin.uses"))} <input name="max_uses" type="number" min="1" max="100000" value="100" required></label>
          <label>${esc(t("admin.seats"))} <select name="seats"><option value="1">1</option><option value="2">2</option></select></label>
          <label>${esc(t("admin.model"))} <select name="max_model"><option value="sonnet">${esc(t("admin.modelSonnet"))}</option><option value="">${esc(t("admin.modelAny"))}</option></select></label>
          <label>${esc(t("admin.until"))} <input name="valid_until" type="date"></label>
          <label>${esc(t("admin.note"))} <input name="note" maxlength="120"></label>
          <p class="form-error" role="alert" hidden></p>
          <button class="primary" type="submit">${esc(t("admin.create"))}</button>
        </form></details>
      <h3>${esc(t("admin.events"))}</h3>
      ${events ? `<ul class="event-list">${events}</ul>` : `<p class="muted">${esc(t("admin.noEvents"))}</p>`}
    </div>`;
}

function bindAdminCodes(acc) {
  if (!acc.promo?.codes) return;
  $("#code-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = e.target;
    $(".form-error", f).hidden = true;
    try {
      await api("/api/admin/promo-codes", {
        method: "POST",
        body: { code: f.code.value, days: Number(f.days.value), max_uses: Number(f.max_uses.value), seats: Number(f.seats.value), max_model: f.max_model.value, valid_until: f.valid_until.value || null, note: f.note.value },
      });
      toast(t("admin.created"));
      renderAccount();
    } catch (err) {
      showError(f, err);
    }
  });
  document.querySelectorAll("[data-code-toggle]").forEach((b) =>
    b.addEventListener("click", async () => {
      try {
        await api(`/api/admin/promo-codes/${encodeURIComponent(b.dataset.codeToggle)}/active`, { method: "POST", body: { active: b.dataset.active !== "1" } });
        renderAccount();
      } catch (err) {
        toast(err.message);
      }
    }),
  );
  document.querySelectorAll("[data-code-copy]").forEach((b) =>
    b.addEventListener("click", async () => {
      const url = acc.promo.base_url + encodeURIComponent(b.dataset.codeCopy);
      try {
        await navigator.clipboard.writeText(url);
        toast(t("pay.copied"));
      } catch {
        prompt(t("admin.copyLink"), url);
      }
    }),
  );
}

// ---------- uporaba brez računa (gost) ----------

function upgradeForm() {
  return `
    <form id="upgrade-form" class="form">
      <label>${esc(t("guest.name"))} <input name="name" maxlength="60" autocomplete="name"></label>
      <label>${esc(t("guest.email"))} <input name="email" type="email" required autocomplete="email"></label>
      <label>${esc(t("guest.password"))} <input name="password" type="password" required minlength="8" autocomplete="new-password"></label>
      <label>${esc(t("guest.birth"))} <input name="birth_date" type="date" required min="1900-01-01" max="${new Date().toISOString().slice(0, 10)}" autocomplete="bday"></label>
      <label class="check"><input type="checkbox" name="accept_privacy" required>
        <span>${esc(t("guest.accept"))} <a href="/zasebnost.html" target="_blank">${esc(t("guest.privacy"))}</a></span></label>
      <p class="form-error" hidden></p>
      <button class="primary" type="submit">${esc(t("guest.upgradeBtn"))}</button>
    </form>`;
}

function guestLoginForm() {
  return `
    <details class="guest-login"><summary>${esc(t("guest.haveAccount"))}</summary>
      <form id="guest-login-form" class="form">
        <p class="muted">${esc(t("guest.loginNote"))}</p>
        <label>${esc(t("guest.email"))} <input name="email" type="email" required autocomplete="email"></label>
        <label>${esc(t("guest.loginPassword"))} <input name="password" type="password" required autocomplete="current-password"></label>
        <p class="form-error" hidden></p>
        <button type="submit">${esc(t("guest.loginBtn"))}</button>
      </form>
    </details>`;
}

function bindGuestForms(after) {
  $("#upgrade-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = e.target;
    const btn = $("button[type=submit]", f);
    btn.disabled = true;
    try {
      const r = await api("/api/auth/upgrade", {
        method: "POST",
        body: { name: f.name.value, email: f.email.value, password: f.password.value, birth_date: f.birth_date.value, accept_privacy: f.accept_privacy.checked, country: deviceRegion() },
      });
      if (r.dev_verify_url) store.set("evklid_dev_verify", r.dev_verify_url);
      toast(t("guest.created"));
      await after();
    } catch (err) {
      btn.disabled = false;
      showError(f, err);
      if (err.data?.under_age) {
        errorBox(f).append(" ", t("guest.parentHint"), " ", Object.assign(document.createElement("a"), { href: "/starsi.html", target: "_blank", textContent: t("guest.parentLink") }));
      }
      if (err.data?.exists) {
        const login = $("#guest-login-form");
        login.closest("details").open = true;
        login.email.value = f.email.value;
        login.password.focus();
      }
    }
  });
  $("#guest-login-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = e.target;
    const btn = $("button[type=submit]", f);
    btn.disabled = true;
    try {
      await api("/api/auth/login", { method: "POST", body: { email: f.email.value, password: f.password.value } });
      store.set("studentId", null);
      toast(t("guest.moved"));
      setTimeout(() => location.replace("/"), 1200);
    } catch (err) {
      btn.disabled = false;
      showError(f, err);
    }
  });
}

// Zavihek Račun za gosta: ustvari račun (isti profil in napredek) ali se prijavi v obstoječega.
function renderGuestAccount(view, acc) {
  view.innerHTML = `
    <button type="button" class="ghost back me-back">${icon("arrow-left")}Jaz</button>
    <h1>${esc(t("guest.title"))}</h1>
    <div class="card">
      <p>${esc(t("guest.intro"))}</p>
      <p class="muted">${esc(t("guest.limits", { n: acc.free_daily_questions }))}</p>
    </div>
    <div class="card">
      <h2>${esc(t("guest.upgradeTitle"))}</h2>
      ${upgradeForm()}
      ${guestLoginForm()}
    </div>
    <div class="card">
      <p class="muted"><a href="/zasebnost.html" target="_blank">${esc(t("guest.privacy"))}</a></p>
      <button id="delete-account" class="danger" type="button">${esc(t("guest.delete"))}</button>
    </div>`;
  bindGuestForms(async () => {
    status = await api("/api/account/status");
    if (await route()) await onReadyCb?.({ keepView: true });
  });
  $("#delete-account").addEventListener("click", async () => {
    if (!confirm(t("guest.deleteConfirm"))) return;
    try {
      await api("/api/account", { method: "DELETE", body: {} });
      store.set("studentId", null);
      location.replace("/");
    } catch (err) {
      toast(err.message);
    }
  });
}

// Uporaba brez računa je bila izklopljena: gost ustvari račun ali se prijavi, napredek ostane.
function renderGuestOff() {
  shell(`
    <h1>${esc(t("guest.upgradeTitle"))}</h1>
    <p class="muted">${esc(t("guest.off"))}</p>
    <div class="card">${upgradeForm()}${guestLoginForm()}</div>`);
  bindGuestForms(continueFlow);
}

async function renderAccount() {
  const view = $("#view-account");
  let acc;
  try {
    acc = await api("/api/account");
  } catch (err) {
    if (err.data?.guest_off) {
      status = await api("/api/account/status");
      return route();
    }
    if (err.status === 401) return logout();
    view.innerHTML = `<p class="form-error">${esc(err.message)}</p>`;
    return;
  }
  if (acc.parent.guest) return renderGuestAccount(view, acc);
  const paid = acc.access.tier === "paid";
  view.innerHTML = `
    <button type="button" class="ghost back me-back">${icon("arrow-left")}Jaz</button>
    <h1>Račun</h1>
    <div class="card">
      <h2>Naročnina</h2>
      ${planText(acc)}
      ${!acc.billing ? `<p class="muted">Plačila še niso nastavljena na strežniku.</p>` : paid ? "" : plansPicker(acc)}
      ${acc.billing && acc.parent.has_customer ? `<button id="portal-btn" type="button">Upravljaj naročnino in račune</button>` : ""}
      ${promoBox(acc, paid)}
    </div>
    ${acc.promo?.codes ? adminCodes(acc) : ""}

    <div class="card">
      <h2>Otroci</h2>
      <ul class="child-list">${acc.children
        .map((c) => `<li><b>${esc(c.name)}</b> <span class="muted">(${c.birth_year || "–"})</span> ${
          c.premium ? `<span class="pill ok">poln dostop</span>` : `<span class="pill">brezplačni paket · danes ${c.questions_today}/${acc.free_daily_questions}</span>`
        }${c.pass ? ` <span class="pill">${esc(t("acct.passPill", { date: date(c.pass.ends_at) }))}</span>` : ""} ${aiPill(c.ai_month)}${c.has_password ? "" : ` <span class="pill">${esc(t("lock.none"))}</span>`}</li>`)
        .join("")}</ul>
      ${acc.children.length ? `<details class="profile-pw"><summary>${esc(t("lock.change"))}</summary>
        <form id="profile-pw-form" class="form" novalidate>
          <label>${esc(t("meter.profile"))} <select name="student_id">${acc.children.map((c) => `<option value="${c.id}">${esc(c.name)}</option>`).join("")}</select></label>
          <label>${esc(t("lock.auth"))} <input type="password" name="auth" autocomplete="current-password" required></label>
          <label>${esc(t("lock.newPw"))} <input type="password" name="password" minlength="${PROFILE_PW_MIN}" maxlength="200" autocomplete="new-password" required></label>
          <p class="form-error" role="alert" hidden></p>
          <button class="primary" type="submit">${esc(t("lock.save"))}</button>
        </form></details>` : ""}
      ${acc.children
        .filter((c) => c.devices.length > acc.device_warn_limit)
        .map((c) => `<p class="warn">${icon("info")} Profil <b>${esc(c.name)}</b> je bil v zadnjih 30 dneh odprt na ${c.devices.length} različnih napravah (${c.devices.map((d) => esc(d.label)).join(", ")}). Če to niste bili vi, kliknite »Odjavi vse druge naprave« in spremenite geslo.</p>`)
        .join("")}
      ${acc.swap_blocked_until
        ? `<p class="muted">Profil lahko zamenjate enkrat na 30 dni. Nov profil boste lahko dodali ${date(acc.swap_blocked_until)}.</p>`
        : acc.children.length < acc.max_children
          ? `<details><summary>Dodaj profil</summary>${childForm(acc.consent_text, await loadPrograms(api))}</details>`
          : `<p class="muted">Vaš paket ima ${acc.max_children === 1 ? "1 profil" : `${acc.max_children} profila`}.${acc.max_children === 1 ? " Za drugega otroka izberite paket za 2 otroka." : ""}</p>`}
      <p class="muted">Vsak profil je lahko hkrati odprt samo na eni napravi. Profil zamenjate (izbrišete v zavihku Nastavitve in dodate novega) največ enkrat na 30 dni.</p>
    </div>

    <div class="card">
      <h2>${icon("award")} Povabi prijatelje</h2>
      <p>Ko se družina, ki jo povabite, naroči in prvič plača, <b>oboji dobite en mesec brezplačno</b>.</p>
      <div class="inline"><input id="ref-url" readonly value="${esc(acc.referral.url)}"><button id="ref-copy" type="button">Kopiraj</button></div>
      <p class="muted">Vaša koda: <b>${esc(acc.referral.code)}</b>${acc.referral.rewards ? ` · prisluženi meseci: ${acc.referral.rewards}` : ""}</p>
    </div>

    <div class="card">
      <h2>Tedensko poročilo</h2>
      <label class="check"><input type="checkbox" id="weekly-toggle" ${acc.parent.weekly_email ? "checked" : ""}>
        <span>Vsako nedeljo zvečer mi pošlji kratko poročilo o napredku na ${esc(acc.parent.email)}</span></label>
      <div class="form-actions">
        <a href="/api/account/weekly-report/preview" target="_blank">Predogled</a>
        <button id="weekly-send" type="button">Pošlji mi ga zdaj</button>
      </div>
    </div>

    <div class="card">
      <h2>Podatki in zasebnost</h2>
      <p class="muted"><a href="/zasebnost.html" target="_blank">Obvestilo o varstvu osebnih podatkov</a></p>
      <div class="form-actions">
        <button id="export-btn" type="button">Prenesi vse moje podatke</button>
        <button id="logout-btn" type="button">Odjava</button>
        <button id="logout-others" type="button">Odjavi vse druge naprave</button>
      </div>
      <button id="delete-account" class="danger" type="button">Izbriši račun in vse podatke</button>
    </div>`;

  $("#plan-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const [seats, interval] = e.target.plan.value.split("-");
    const btn = $("button[type=submit]", e.target);
    btn.disabled = true;
    try {
      if (!consentsOk(e.target)) throw new Error(t("payp.consentMissing"));
      const r = await api("/api/billing/checkout", { method: "POST", body: { seats: Number(seats), interval, ...consentBody() } });
      location.href = r.url;
    } catch (err) {
      btn.disabled = false;
      showError(e.target, err);
    }
  });
  // Mladoletni imetnik: povezava, s katero plača starš.
  $("#plan-link")?.addEventListener("click", async (e) => {
    const f = $("#plan-form");
    const [seats, interval] = f.plan.value.split("-");
    e.target.disabled = true;
    try {
      const r = await api("/api/billing/pay-link", { method: "POST", body: { kind: "sub", seats: Number(seats), interval } });
      const out = $("#plan-link-out");
      out.innerHTML = linkBox(r.url);
      bindLinkBox(out, r.url, toast);
    } catch (err) {
      showError(f, err);
    } finally {
      e.target.disabled = false;
    }
  });
  bindAdminCodes(acc);
  $("#promo-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = $("button[type=submit]", e.target);
    btn.disabled = true;
    try {
      const r = await api("/api/account/promo", { method: "POST", body: { code: e.target.code.value } });
      store.set("evklid_koda", null);
      toast(`Aktivacijska koda velja ✓ Poln dostop do ${date(r.access.until)}.`);
      await onReadyCb?.({ keepView: true });
      renderAccount();
    } catch (err) {
      btn.disabled = false;
      showError(e.target, err);
    }
  });
  $("#promo-copy")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText($("#promo-url").value);
      toast("Povezava je kopirana.");
    } catch {
      $("#promo-url").select();
    }
  });
  $("#portal-btn")?.addEventListener("click", async () => {
    try {
      location.href = (await api("/api/billing/portal", { method: "POST" })).url;
    } catch (err) {
      toast(err.message);
    }
  });
  if ($("#child-form")) {
    bindChildForm(async () => {
      toast("Otrok je dodan ✓");
      await onReadyCb?.({ keepView: true });
      renderAccount();
    });
  }
  $("#ref-copy").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(acc.referral.url);
      toast("Povezava je kopirana.");
    } catch {
      $("#ref-url").select();
    }
  });
  const ppw = $("#profile-pw-form");
  ppw?.addEventListener("submit", async (e) => {
    e.preventDefault();
    $(".form-error", ppw).hidden = true;
    if (ppw.password.value.length < PROFILE_PW_MIN) return showError(ppw, new Error(t("lock.short")));
    try {
      const id = Number(ppw.student_id.value);
      const password = ppw.password.value;
      await api("/api/account/profile-password", { method: "POST", body: { student_id: id, auth: ppw.auth.value, password } });
      // Novo geslo zaklene profil na vseh napravah; odprt profil na tej napravi ostane odprt.
      if (id === Number(store.get("studentId"))) await api(`/api/students/${id}/unlock`, { method: "POST", body: { password } });
      toast(t("lock.saved"));
      renderAccount();
    } catch (err) {
      showError(ppw, new Error(lockError(err)));
    }
  });
  $("#weekly-toggle").addEventListener("change", (e) => api("/api/account", { method: "PUT", body: { weekly_email: e.target.checked } }));
  $("#weekly-send").addEventListener("click", async () => {
    try {
      const r = await api("/api/account/weekly-report/send", { method: "POST" });
      toast(r.dev ? "E-pošta ni nastavljena: poročilo je izpisano v dnevniku strežnika." : "Poročilo je poslano.");
    } catch (err) {
      toast(err.message);
    }
  });
  $("#logout-btn").addEventListener("click", logout);
  $("#logout-others").addEventListener("click", async () => {
    await api("/api/account/logout-others", { method: "POST" });
    toast("Vse druge naprave so odjavljene.");
  });
  $("#export-btn").addEventListener("click", async () => {
    const password = prompt("Za prenos vseh podatkov (tudi pogovorov vseh profilov) vpišite geslo računa.");
    if (!password) return;
    try {
      const data = await api("/api/account/export", { method: "POST", body: { password } });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
      a.download = "evklid-podatki.json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    } catch (err) {
      toast(err.message);
    }
  });
  $("#delete-account").addEventListener("click", async () => {
    const password = prompt("Za izbris računa, vseh otrokovih profilov in pogovorov vpišite geslo. Tega ni mogoče razveljaviti.");
    if (!password) return;
    try {
      await api("/api/account", { method: "DELETE", body: { password } });
      store.set("studentId", null);
      location.reload();
    } catch (err) {
      toast(err.message);
    }
  });
}

export async function logout() {
  if (status?.parent?.guest && !confirm(t("guest.logoutConfirm"))) return;
  // Ob počasni ali prekinjeni povezavi ne čakamo v nedogled: stran se po 4 s vseeno naloži znova.
  await Promise.race([api("/api/auth/logout", { method: "POST" }).catch(() => {}), new Promise((r) => setTimeout(r, 4000))]);
  store.set("studentId", null);
  location.replace("/?odjava=1");
}
