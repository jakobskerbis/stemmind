// Števec porabe AI v zgornji vrstici: vidi ga samo skrbnik (strežnik vrne porabo le na
// računalniku, kjer teče STEMMind, ali skrbniku z računom). Pokaže porabo vseh profilov
// danes in ta mesec; klik odpre pregled po profilih.
import { icon } from "./icons.js";
import { t } from "./i18n.js";

const $ = (sel) => document.querySelector(sel);
let D = null; // { escapeHtml, showView, toast }
let last = null;
let timer = null;

const eur = (x) => {
  const v = x || 0;
  return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: v && v < 1 ? 3 : 2 });
};

export function initUsageMeter(deps) {
  D = deps;
  const btn = $("#usage-meter");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePop();
  });
  document.addEventListener("click", (e) => {
    const pop = $("#usage-pop");
    if (pop && !pop.hidden && !pop.contains(e.target)) pop.hidden = true;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#usage-pop")?.hidden) $("#usage-pop").hidden = true;
  });
  document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && refreshUsageMeter());
  refreshUsageMeter();
}

// Ponovno prebere porabo (ob zagonu, po odgovoru inštruktorja, vsako minuto).
export async function refreshUsageMeter() {
  const btn = $("#usage-meter");
  if (!btn || !D) return;
  clearTimeout(timer);
  let res = null;
  try {
    res = await fetch("/api/usage");
  } catch {
    return; // brez povezave: pusti zadnje stanje
  }
  const u = res.ok ? await res.json().catch(() => null) : null;
  if (!u) {
    // Ni dovoljenja (ni skrbnik, odpira prek povezave za telefon): števec je skrit.
    last = null;
    btn.hidden = true;
    $("#usage-pop").hidden = true;
    return;
  }
  last = u;
  btn.hidden = false;
  btn.querySelector("b").textContent = `${eur(u.today_eur)} €`;
  btn.title = t("meter.title", { today: eur(u.today_eur), month: eur(u.month_eur) });
  if (!$("#usage-pop").hidden) renderPop();
  if (document.visibilityState === "visible") timer = setTimeout(refreshUsageMeter, 60_000);
}

// Delež mesečne meje na učenca: zelena do 50 %, rumena do 80 %, nato rdeča.
function limitBar(pct) {
  if (pct == null) return "";
  const v = Math.min(100, pct);
  const cls = pct >= 80 ? "hi" : pct >= 50 ? "mid" : "";
  return `<span class="um-bar ${cls}" title="${t("meter.limitPct", { pct })}" role="img" aria-label="${t("meter.limitPct", { pct })}"><i style="width:${Math.max(v, pct > 0 ? 3 : 0)}%"></i></span>`;
}

// Predlog meje in cene (besedila pripravi strežnik, server/advice.js).
function adviceHtml(a) {
  if (!a) return "";
  const e = a.economy;
  const esc = D.escapeHtml;
  const badge = (st) => (st === "keep" || st === "none" ? "ok" : st === "data" ? "wait" : "act");
  return `<section class="um-advice">
    <h3>${icon("lightbulb")} ${t("meter.advice")}</h3>
    <p class="muted um-econ">${t("meter.economy", { price: eur(e.price_eur), net: eur(e.net_eur), ai: eur(e.ai_avg_eur), profit: eur(e.profit_eur), margin: e.margin_pct })}</p>
    <div class="um-tip ${badge(a.limit.status)}"><b>${t("meter.limitTitle")}</b><p>${esc(a.limit.text)}</p></div>
    <div class="um-tip ${badge(a.price.status)}"><b>${t("meter.priceTitle")}</b><p>${esc(a.price.text)}</p></div>
  </section>`;
}

function togglePop() {
  const pop = $("#usage-pop");
  if (!pop.hidden) return (pop.hidden = true);
  renderPop();
  pop.hidden = false;
  refreshUsageMeter();
}

function renderPop() {
  const u = last;
  const pop = $("#usage-pop");
  if (!u || !pop) return;
  const esc = D.escapeHtml;
  const rows = u.students
    .filter((s) => s.calls || s.saved)
    .map(
      (s) =>
        `<tr><td>${esc(s.name)}</td><td>${eur(s.today_eur)} €</td><td>${eur(s.cost_eur)} €${limitBar(s.limit_pct)}</td><td>${s.today_calls} / ${s.calls}</td></tr>`,
    )
    .join("");
  pop.innerHTML = `
    <div class="um-head"><b>${icon("wallet")} ${t("meter.heading")}</b><button type="button" class="ghost icon-only um-close" aria-label="${t("meter.close")}">${icon("x")}</button></div>
    <p class="muted um-only">${icon("lock")} ${t("meter.onlyYou")}</p>
    <div class="um-totals">
      <div><span class="muted">${t("meter.today")}</span><b>${eur(u.today_eur)} €</b><small class="muted">${t("meter.replies", { n: u.today_calls, free: u.today_saved })}</small></div>
      <div><span class="muted">${t("meter.month")}</span><b>${eur(u.month_eur)} €</b><small class="muted">${t("meter.replies", { n: u.month_calls ?? 0, free: u.saved_answers || 0 })}</small></div>
      <div><span class="muted">${t("meter.forecast")}</span><b>${eur(u.projected_eur)} €</b><small class="muted">${t("meter.perStudent", { eur: eur(u.per_active_eur), n: u.active_students })}</small></div>
    </div>
    ${
      rows
        ? `<table class="table um-table"><thead><tr><th>${t("meter.profile")}</th><th>${t("meter.today")}</th><th>${t("meter.month")}</th><th>${t("meter.repliesCol")}</th></tr></thead><tbody>${rows}</tbody></table>`
        : `<p class="muted">${t("meter.none")}</p>`
    }
    ${u.can_claim ? `<div class="um-claim"><button type="button" class="secondary" data-act="claim">${icon("smartphone")} ${t("meter.claim")}</button><small class="muted">${t("meter.claimHint")}</small></div>` : ""}
    ${adviceHtml(u.advice)}
    <button type="button" class="text-btn" data-act="more">${t("meter.more")} ${icon("chevron-right")}</button>`;
  pop.querySelector(".um-close").addEventListener("click", () => (pop.hidden = true));
  pop.querySelector('[data-act="more"]').addEventListener("click", () => {
    pop.hidden = true;
    D.showView("settings");
    setTimeout(() => $("#usage")?.closest(".card")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  });
  pop.querySelector('[data-act="claim"]')?.addEventListener("click", async () => {
    const res = await fetch("/api/usage/claim", { method: "POST" }).catch(() => null);
    if (res?.ok) {
      D.toast(t("meter.claimed"), "check");
      last.can_claim = false;
      renderPop();
    } else D.toast(t("meter.claimFail"));
  });
}
