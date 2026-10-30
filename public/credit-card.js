// Kartica »Dodatna poraba AI« v zavihku Račun (server/accounts/billing.js, /api/billing/credit).
// Vsak profil ima mesečni del skupnega proračuna AI (server/proracun.js); ko ga porabi, imetnik računa
// tukaj dokupi pogovore, ki veljajo za vse profile računa in ne potečejo. Prikazano je samo število
// pogovorov, ne delež plačila ali znesek kredita (j 2026-10-30).
import { t, locale } from "./i18n.js";
import { icon, hydrateIcons } from "./icons.js";
import { consentFields, consentsOk, consentBody } from "./pay-ui.js";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const money = (cents, currency) => (cents / 100).toLocaleString(locale(), { style: "currency", currency });

export async function renderCreditCard(el, { api }) {
  if (!el) return;
  let d;
  try {
    d = await api("/api/billing/credit");
  } catch {
    el.innerHTML = "";
    return;
  }
  if (!d.packs?.length && !d.balance_conversations) {
    el.innerHTML = "";
    return;
  }
  const packs = d.packs
    .map(
      (p, i) => `<label class="plan"><input type="radio" name="pack" value="${esc(p.id)}" ${i === 1 || d.packs.length === 1 ? "checked" : ""}>
        <span>${esc(t("credit.pack", { price: money(p.amount, p.currency), n: p.conversations }))}</span></label>`,
    )
    .join("");
  // Poljuben znesek brez zgornje meje (j 2026-10-30): sproti pokaže oceno pogovorov.
  const c = d.custom;
  const customOpt = c
    ? `<label class="plan credit-custom"><input type="radio" name="pack" value="custom">
        <span>${esc(t("credit.custom"))} <span class="credit-amount"><input type="number" name="amount_eur" min="${c.min / 100}" step="any" inputmode="decimal" aria-label="${esc(t("credit.customLabel"))}" placeholder="${c.min / 100}"> €</span>
        <span class="muted credit-est" aria-live="polite"></span></span></label>`
    : "";
  const canPay = d.billing && !d.minor && d.packs.length;
  el.innerHTML = `
    <form class="card credit-card" novalidate>
      <h2>${icon("zap")} ${esc(t("credit.title"))}</h2>
      <p>${esc(t("credit.text"))}</p>
      ${d.balance_conversations ? `<p><b>${esc(t("credit.balance", { n: d.balance_conversations }))}</b></p>` : ""}
      ${
        !d.billing
          ? `<p class="muted">${esc(t("credit.off"))}</p>`
          : d.minor
            ? `<p class="muted">${esc(t("credit.minor"))}</p>`
            : `<fieldset class="pass-options"><legend class="sr-only">${esc(t("credit.title"))}</legend>${packs}${customOpt}</fieldset>
      <p class="muted">${esc(t("credit.note"))}</p>`
      }
      ${canPay ? `${consentFields()}<button type="submit" class="primary">${esc(t("pay.continue"))}</button>` : ""}
      <p class="form-error" role="alert" hidden></p>
    </form>`;
  hydrateIcons?.(el);
  const form = el.querySelector("form");
  const err = form.querySelector(".form-error");
  const amount = form.amount_eur;
  const est = form.querySelector(".credit-est");
  const estimate = () => {
    const eur = Number(amount.value);
    let n = eur >= c.min / 100 ? Math.floor(eur * c.per_eur) : 0;
    if (n >= 20) n -= n % 5;
    est.textContent = n ? t("credit.customEst", { n }) : t("credit.customMin", { min: money(c.min, "EUR") });
  };
  amount?.addEventListener("input", () => {
    form.querySelector('input[name="pack"][value="custom"]').checked = true;
    estimate();
  });
  amount?.addEventListener("focus", () => (form.querySelector('input[name="pack"][value="custom"]').checked = true));
  if (amount) estimate();
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    err.hidden = true;
    if (!canPay) return;
    if (!consentsOk(form)) {
      err.textContent = t("pay.consentMissing");
      err.hidden = false;
      return;
    }
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    try {
      const custom = form.pack.value === "custom";
      if (custom && !(Number(amount.value) >= c.min / 100)) throw new Error(t("credit.customMin", { min: money(c.min, "EUR") }));
      const r = await api("/api/billing/credit", { method: "POST", body: { pack: form.pack.value, ...(custom ? { amount_eur: Number(amount.value) } : {}), ...consentBody() } });
      location.href = r.url;
    } catch (x) {
      btn.disabled = false;
      err.textContent = x.message;
      err.hidden = false;
    }
  });
}
