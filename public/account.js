import { icon } from "./icons.js";
import { loadPrograms, programsCache } from "./programs.js";
import { mountLevelPicker } from "./level-picker.js";
// Starševski račun: prijava, potrditev e-naslova, otroci s soglasjem, naročnina, priporočila.
// Deluje samo, ko je na strežniku STEMMIND_ACCOUNTS=1.

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const eur = (cents) => (cents / 100).toLocaleString("sl-SI", { style: "currency", currency: "EUR" });
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
    $("#student-select")?.focus();
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
  $("#account-tab").addEventListener("click", renderAccount);

  const q = new URLSearchParams(location.search);
  if (q.get("ref")) store.set("stemmind_ref", q.get("ref"));
  const reset = q.get("reset");
  const verified = q.get("verified");
  const billing = q.get("billing");
  if (q.toString()) history.replaceState(null, "", location.pathname);
  if (verified === "1") toast("E-naslov je potrjen ✓");
  if (verified === "0") toast("Povezava za potrditev ni veljavna ali je že uporabljena.");

  if (reset) {
    renderReset(reset);
    return false;
  }
  if (billing && status.logged_in) {
    if (billing !== "cancel") await api("/api/billing/sync", { method: "POST" }).catch(() => {});
    if (billing === "success") toast("Hvala! Naročnina je aktivna.");
    status = await api("/api/account/status");
  }
  const ready = await route();
  if (ready && billing) setTimeout(() => $("#account-tab").click(), 0);
  return ready;
}

async function route() {
  if (!status.logged_in) return renderLogin(), false;
  if (!status.parent.verified) return renderVerify(), false;
  if (!status.children) return renderAddChild(), false;
  authMode(false);
  adjustAppForAccounts();
  return true;
}

async function continueFlow() {
  status = await api("/api/account/status");
  if (await route()) await onReadyCb?.();
}

// Učenca dodaja starš s soglasjem v zavihku Račun, poraba je samo za skrbnika.
function adjustAppForAccounts() {
  const form = $("#new-student-form");
  if (form) {
    form.hidden = true;
    const h = form.closest(".card")?.querySelector("h2");
    if (h) h.textContent = "Profil otroka";
  }
  const usage = $("#usage")?.closest(".card");
  if (usage) usage.hidden = !status.parent?.is_admin;
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

function renderLogin(mode = "login") {
  const ref = store.get("stemmind_ref") || "";
  shell(`
    <h1>${mode === "login" ? "Prijava" : "Nov račun"}</h1>
    <p class="muted">${mode === "login" ? "Za starše (otrokov profil) in za študente fakultet (lasten profil)." : `STEMMind je 7 dni brezplačen, brez kartice. Nato ${eur(899)} na mesec ali brezplačni paket z omejenim številom vprašanj.`}</p>
    <form id="auth-form" class="card form">
      ${mode === "register" ? `<label>Vaše ime (neobvezno) <input name="name" maxlength="60" autocomplete="name"></label>` : ""}
      <label>E-naslov <input name="email" type="email" required autocomplete="email"></label>
      <label>Geslo <input name="password" type="password" required minlength="8" autocomplete="${mode === "login" ? "current-password" : "new-password"}"></label>
      ${mode === "register" ? `
        <label>Koda priporočila (neobvezno) <input name="referral_code" maxlength="12" value="${esc(ref)}"></label>
        <label class="check"><input type="checkbox" name="accept_privacy" required>
          <span>Prebral(a) sem <a href="/zasebnost.html" target="_blank">obvestilo o varstvu osebnih podatkov</a> in sem polnoleten(a): starš oziroma zakoniti zastopnik ali študent, ki ustvarja lasten profil.</span></label>` : ""}
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
          body: { name: f.name.value, email: f.email.value, password: f.password.value, referral_code: f.referral_code.value, accept_privacy: f.accept_privacy.checked },
        });
        store.set("stemmind_ref", null);
        if (r.dev_verify_url) store.set("stemmind_dev_verify", r.dev_verify_url);
      }
      await continueFlow();
    } catch (err) {
      showError(f, err);
    }
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
  const dev = store.get("stemmind_dev_verify");
  shell(`
    <h1>Potrdite e-naslov</h1>
    <div class="card">
      <p>Na <b>${esc(status.parent.email)}</b> smo poslali povezavo. Kliknite jo, nato se vrnite sem.</p>
      <p class="muted">S potrditvijo tudi izjavite, da ste starš ali zakoniti zastopnik otroka. To zahteva zakon o varstvu podatkov za otroke, mlajše od 15 let.</p>
      ${dev && !status.email ? `<p class="muted">Razvojni način (e-pošta ni nastavljena): <a href="${esc(dev)}">potrdi e-naslov</a></p>` : ""}
      <div class="form-actions">
        <button class="primary" id="verify-done" type="button">Sem potrdil(a)</button>
        <button id="verify-resend" type="button">Pošlji znova</button>
        <button id="verify-logout" type="button">Odjava</button>
      </div>
    </div>`);
  $("#verify-done").addEventListener("click", continueFlow);
  $("#verify-resend").addEventListener("click", async () => {
    const r = await api("/api/auth/resend-verification", { method: "POST" });
    if (r.dev_verify_url) store.set("stemmind_dev_verify", r.dev_verify_url);
    toast("Povezava je poslana znova.");
    if (r.dev_verify_url) renderVerify();
  });
  $("#verify-logout").addEventListener("click", logout);
}

// ---------- otroci ----------

function childForm(consentText, programs = []) {
  const y = new Date().getFullYear();
  const years = Array.from({ length: 60 }, (_, i) => y - 6 - i);
  return `
    <form id="child-form" class="card form">
      <label>Ime ali vzdevek <input name="name" maxlength="40" required placeholder="npr. Miha"></label>
      <fieldset class="level-field">
        <legend>Šola in letnik</legend>
        <div class="level-picker child-level"></div>
        <small class="muted">Vsebina se prilagodi izbiri; pri fakulteti sledi javnemu predmetniku programa. Izbiro lahko kadar koli spremeniš v profilu.</small>
        <input type="hidden" name="educational_track">
        <input type="hidden" name="study_program">
        <input type="hidden" name="curriculum_level">
      </fieldset>
      <label>Letnica rojstva
        <select name="birth_year" required><option value="">Izberite …</option>${years.map((v) => `<option>${v}</option>`).join("")}</select>
      </label>
      <label class="check"><input type="checkbox" name="consent" required>
        <span class="consent-child">${esc(consentText)} <a href="/zasebnost.html" target="_blank">Obvestilo o varstvu podatkov</a>.</span>
        <span class="consent-adult" hidden>Profil je moj (sem polnoleten študent) ali profil mojega otroka. Prebral(a) sem <a href="/zasebnost.html" target="_blank">obvestilo o varstvu podatkov</a> in soglašam z obdelavo podatkov (ime ali vzdevek, letnica rojstva, nastavitve, pogovori z AI inštruktorjem, fotografije nalog in napredek) za namen učenja.</span></label>
      <p class="form-error" hidden></p>
      <button class="primary" type="submit">Ustvari profil</button>
    </form>`;
}

// Nastavitve profila iz obrazca: šola, program in letnik.
function childSettings(f) {
  const track = f.educational_track.value;
  const base = { educational_track: track, study_program: f.study_program.value, curriculum_level: f.curriculum_level.value };
  if (track === "UNIVERZA") return { ...base, subject: programsCache().find((p) => p.id === f.study_program.value)?.mainSubject || "MAT" };
  return base;
}

function bindChildForm(after) {
  const f = $("#child-form");
  const toggle = (_, track) => {
    const uni = track === "UNIVERZA";
    f.querySelector(".consent-child").hidden = uni;
    f.querySelector(".consent-adult").hidden = !uni;
  };
  const picker = mountLevelPicker(f.querySelector(".child-level"), f, { programs: programsCache(), onChange: toggle });
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!picker.complete()) return showError(f, new Error("Izberite šolo in letnik do konca."));
    try {
      const s = await api("/api/students", {
        method: "POST",
        body: { name: f.name.value, birth_year: Number(f.birth_year.value), consent: f.consent.checked, settings: childSettings(f) },
      });
      store.set("studentId", String(s.id));
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

function planText(acc) {
  const { access, parent } = acc;
  const sub = parent.subscription;
  const plan = sub && acc.plans.find((p) => p.key === sub.plan);
  if (access.tier === "paid") {
    return `<p><b>Naročnina:</b> ${esc(plan?.label || sub.plan)} (${STATUS_TEXT[sub.status] || sub.status})</p>
      <p class="muted">${sub.cancel_at_period_end ? `Naročnina se konča ${date(sub.period_end)}.` : `Naslednje obdobje se začne ${date(sub.period_end)}.`}</p>`;
  }
  if (access.tier === "trial") return `<p><b>Brezplačni preizkus</b> do ${date(access.until)}: vse funkcije za do 2 otroka.</p>`;
  if (access.tier === "bonus") return `<p><b>Brezplačni mesec</b> iz priporočila do ${date(access.until)}.</p>`;
  return `<p><b>Brezplačni paket:</b> vadnica brez omejitev in ${acc.free_daily_questions} vprašanj inštruktorju na dan.</p>`;
}

function plansPicker(acc) {
  const cell = (seats, interval) => {
    const p = acc.plans.find((x) => x.seats === seats && x.interval === interval);
    const perMonth = interval === "year" ? `<span class="muted">≈ ${eur(Math.round(p.amount / 10))} / mesec (10 mesecev)</span>` : "";
    return `<label class="plan"><input type="radio" name="plan" value="${seats}-${interval}" ${seats === 1 && interval === "month" ? "checked" : ""}>
      <span><b>${eur(p.amount)}</b> / ${interval === "year" ? "šolsko leto" : "mesec"}<br>${perMonth}</span></label>`;
  };
  return `
    <form id="plan-form" class="plans">
      <div class="plan-row"><div class="plan-head">1 otrok</div>${cell(1, "month")}${cell(1, "year")}</div>
      <div class="plan-row"><div class="plan-head">2 otroka</div>${cell(2, "month")}${cell(2, "year")}</div>
      <p class="form-error" hidden></p>
      <button class="primary" type="submit">Nadaljuj na plačilo</button>
      <p class="muted">Plačilo poteka varno prek Stripe. Naročnino lahko kadar koli prekličete.${
        acc.access.tier === "trial" ? " Preostanek preizkusa se ohrani: prvo plačilo bo šele po njegovem koncu." : ""
      }</p>
    </form>`;
}

async function renderAccount() {
  const view = $("#view-account");
  let acc;
  try {
    acc = await api("/api/account");
  } catch (err) {
    if (err.status === 401) return logout();
    view.innerHTML = `<p class="form-error">${esc(err.message)}</p>`;
    return;
  }
  const paid = acc.access.tier === "paid";
  view.innerHTML = `
    <h1>Račun</h1>
    <div class="card">
      <h2>Naročnina</h2>
      ${planText(acc)}
      ${!acc.billing ? `<p class="muted">Plačila še niso nastavljena na strežniku.</p>` : paid ? "" : plansPicker(acc)}
      ${acc.billing && acc.parent.has_customer ? `<button id="portal-btn" type="button">Upravljaj naročnino in račune</button>` : ""}
    </div>

    <div class="card">
      <h2>Otroci</h2>
      <ul class="child-list">${acc.children
        .map((c) => `<li><b>${esc(c.name)}</b> <span class="muted">(${c.birth_year || "–"})</span> ${
          c.premium ? `<span class="pill ok">poln dostop</span>` : `<span class="pill">brezplačni paket · danes ${c.questions_today}/${acc.free_daily_questions}</span>`
        }</li>`)
        .join("")}</ul>
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
        <a href="/api/account/export" download>Prenesi vse moje podatke</a>
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
      const r = await api("/api/billing/checkout", { method: "POST", body: { seats: Number(seats), interval } });
      location.href = r.url;
    } catch (err) {
      btn.disabled = false;
      showError(e.target, err);
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

async function logout() {
  await api("/api/auth/logout", { method: "POST" }).catch(() => {});
  store.set("studentId", null);
  location.href = "/";
}
