// Pogled »Lige«: tedenska liga, vzdevek, razredi in skupine prijateljev.
import { icon } from "./icons.js";
import { avatarSvg, itemOf, itemName } from "./avatar.js";
import { DRAW } from "./zbirke.js";
import { t, currentLang } from "./i18n.js";
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const api = async (url, opts = {}) => {
  const res = await fetch(url, {
    ...opts,
    headers: { "Content-Type": "application/json" },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Napaka ${res.status}`);
  return data;
};

// Barve lig (Bronasta … Diamantna) so v leagues.css kot .tier-0 … .tier-6.
const tierBadge = (i, cls = "") => `<span class="tier-badge tier-${i} ${cls}">${icon(i >= 6 ? "trophy" : "award")}</span>`;
const OUTCOME = {
  up: "Prejšnji teden si napredoval v višjo ligo. Bravo!",
  down: "Prejšnji teden si izpadel v nižjo ligo. Ta teden gre lahko nazaj gor.",
  stay: "Prejšnji teden si ostal v isti ligi.",
};

let current = null; // id učenca
let period = "week"; // razredi in prijatelji: ta teden | ta mesec
try {
  period = localStorage.getItem("kompreno.boardPeriod") === "month" ? "month" : "week";
} catch {}

// Značka zmage sama (izrez okoli prsi avatarja).
const badgeSvg = (id, size = 34) => `<svg class="lg-badge" viewBox="48 64 32 32" width="${size}" height="${size}" aria-hidden="true">${DRAW.badge(id)}</svg>`;
const badgeName = (id) => (itemOf(id) ? itemName(itemOf(id), currentLang?.() || "sl") : id);

function timeLeft(iso) {
  const ms = new Date(iso) - Date.now();
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  return d > 0 ? `še ${d} d ${h} h` : `še ${h} h`;
}

function boardHtml(rows, zones = false) {
  if (!rows.length) return `<p class="muted">Še nihče.</p>`;
  return `<ol class="leaderboard league-board">${rows
    .map(
      (r) => `<li class="${r.me ? "me" : ""} ${zones ? `zone-${r.zone}` : ""}">
        <span class="who"><span class="rank">${r.rank}</span>${avatarSvg(r.avatar, { size: 44 })}<span class="nick-name">${esc(r.nickname)}</span>${r.me ? ` <span class="you">ti</span>` : ""}</span>
        <b>${r.xp} <span class="xp-unit">XP</span></b>${zones && r.zone !== "stay" ? `<span class="zone-mark" title="${r.zone === "up" ? "napreduje" : "izpade"}">${icon(r.zone === "up" ? "arrow-right" : "arrow-left")}</span>` : ""}</li>`,
    )
    .join("")}</ol>`;
}

// Razredi in prijatelji: razvrstitev po tednu ali mesecu.
const byPeriod = (rows) =>
  period === "week" ? rows : [...rows].sort((a, b) => b.month - a.month).map((r, i) => ({ ...r, rank: i + 1, xp: r.month }));

function monthCard(M) {
  if (!M) return "";
  const me = M.me ? `<div class="lg-me-row">${boardHtml([M.me])}</div>` : "";
  return `<div class="card">
      <h2 class="h-icon">${icon("calendar-days")} ${esc(t("lg.month"))}</h2>
      <p class="muted league-rule">${esc(t("lg.monthIntro", { n: M.awardMin }))} · ${icon("calendar")} ${esc(t("lg.ends"))} ${timeLeft(M.endsAt)}</p>
      ${M.board.length ? boardHtml(M.board) : `<div class="league-empty">${icon("target")}<p>${esc(t("lg.monthEmpty"))}</p></div>`}
      ${me}
    </div>`;
}

export async function loadLeague(studentId) {
  current = studentId;
  const root = $("#league-content");
  let data;
  try {
    data = await api(`/api/students/${studentId}/league`);
  } catch (e) {
    root.innerHTML = `<p class="muted">${esc(e.message)}</p>`;
    return;
  }
  if (current !== studentId) return;
  const L = data.league;
  const league = L.joined
    ? `<p class="muted league-rule"><span class="dot up"></span>Najboljših ${L.promoteCount} napreduje${L.demoteCount ? ` · <span class="dot down"></span>zadnjih ${L.demoteCount} izpade` : ""} · ${icon("calendar")} konec ${timeLeft(L.endsAt)}</p>
       ${boardHtml(L.board, true)}`
    : `<div class="league-empty">${icon("target")}<p>Reši nalogo in zberi prve XP ta teden. Potem se uvrstiš v skupino do 30 učencev s podobnim znanjem.</p></div>`;
  const award = L.lastWeek?.award;
  const wins = (L.awards || []).length
    ? `<div class="lg-wins"><span>${esc(t("lg.awards"))}</span>${L.awards.map((id) => `<button type="button" class="lg-win" data-zb="${esc(id)}" title="${esc(badgeName(id))}" aria-label="${esc(badgeName(id))}">${badgeSvg(id, 30)}</button>`).join("")}</div>`
    : "";

  root.innerHTML = `
    <div class="card league-hero tier-${L.tier}">
      <div class="lg-hero-av">${avatarSvg(L.avatar, { size: 84, title: L.nickname })}${tierBadge(L.tier, "big lg-tier")}</div>
      <div>
        <h2>${esc(L.tierName)} liga</h2>
        <div class="nick">${icon("user")} <b>${esc(L.nickname)}</b> <button type="button" id="nick-change" class="ghost small">${icon("pencil")}<span>Zamenjaj</span></button></div>
        ${L.lastWeek ? `<div class="last">${OUTCOME[L.lastWeek.outcome]} (${L.lastWeek.rank}. mesto)</div>` : ""}
        ${award ? `<button type="button" class="lg-award" data-zb="${esc(award)}">${badgeSvg(award, 36)}<span>${esc(t("lg.award", { name: badgeName(award) }))}</span>${icon("chevron-right")}</button>` : ""}
        ${wins}
      </div>
    </div>
    <div id="nick-picker" class="card" hidden></div>
    <div class="card">
      <h2 class="h-icon">${icon("trophy")} Tedenska liga</h2>
      ${league}
      <p class="muted small lg-win-rule">${icon("medal")} ${esc(t("lg.weekWin"))}</p>
      <div class="tier-row">${L.tiers.map((t, i) => `<span class="${i === L.tier ? "cur" : i < L.tier ? "done" : ""}" title="${esc(t)}">${tierBadge(i)}<span>${esc(t)}</span></span>`).join("")}</div>
    </div>
    ${monthCard(data.month)}
    ${data.classes.length ? `<div class="chip-row lg-period" role="group">${["week", "month"].map((k) => `<button type="button" class="${period === k ? "active" : ""}" data-period="${k}" aria-pressed="${period === k}">${esc(t(k === "week" ? "lg.thisWeek" : "lg.thisMonth"))}</button>`).join("")}</div>` : ""}
    ${data.classes
      .map(
        (c) => `<div class="card">
          <div class="group-head">
            <h2 class="h-icon">${icon(c.kind === "class" ? "graduation-cap" : "users")} ${esc(c.name)}</h2>
            <span class="code-chip" title="${c.kind === "friends" ? "Deli kodo s prijatelji" : "Koda razreda"}">${esc(c.code)}</span>
          </div>
          <p class="muted">${period === "week" ? "Lestvica tega tedna" : esc(t("lg.classMonth"))}${c.kind === "friends" ? ". Kodo deli s prijatelji." : ""}</p>
          ${boardHtml(byPeriod(c.board))}
          <button type="button" class="ghost small" data-leave="${c.id}">${icon("x")}<span>Zapusti</span></button>
        </div>`,
      )
      .join("")}
    <div class="card form">
      <h2 class="h-icon">${icon("users")} Razred ali prijatelji</h2>
      <p class="muted">Vpiši kodo, ki ti jo je dal učitelj ali prijatelj. Drugi vidijo samo tvoj vzdevek.</p>
      <form id="join-form" class="row">
        <input id="join-code" placeholder="npr. KXT-4P9" maxlength="9" autocomplete="off" autocapitalize="characters" required>
        <button class="primary" type="submit">Pridruži se</button>
      </form>
      <form id="friends-form" class="row">
        <input id="friends-name" placeholder="Ime skupine prijateljev" maxlength="40">
        <button type="submit" class="secondary">${icon("plus")}<span>Ustvari skupino</span></button>
      </form>
      <p class="muted">Si učitelj? <a href="ucitelj.html" target="_blank">Ustvari razred in dobi kodo.</a></p>
    </div>`;

  $("#nick-change").addEventListener("click", showNickPicker);
  // [data-zb] odpre zbirke prek skupnega poslušalca v app.js (tu bi se odprlo dvakrat).
  root.querySelectorAll("[data-period]").forEach((b) =>
    b.addEventListener("click", () => {
      period = b.dataset.period;
      try {
        localStorage.setItem("kompreno.boardPeriod", period);
      } catch {}
      loadLeague(studentId);
    }),
  );
  $("#join-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const r = await api(`/api/students/${studentId}/classes`, { method: "POST", body: { code: $("#join-code").value } });
      toast(r.already ? `Že si v skupini »${r.class.name}«.` : `Pridružil si se skupini »${r.class.name}«.`);
      loadLeague(studentId);
    } catch (err) {
      toast(err.message);
    }
  });
  $("#friends-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const r = await api(`/api/students/${studentId}/friend-groups`, { method: "POST", body: { name: $("#friends-name").value } });
      toast(`Skupina je ustvarjena. Koda za prijatelje: ${r.code}`);
      loadLeague(studentId);
    } catch (err) {
      toast(err.message);
    }
  });
  root.querySelectorAll("[data-leave]").forEach((b) =>
    b.addEventListener("click", async () => {
      if (!confirm("Res želiš zapustiti to skupino?")) return;
      await api(`/api/students/${studentId}/classes/${b.dataset.leave}`, { method: "DELETE" });
      loadLeague(studentId);
    }),
  );
}

async function showNickPicker() {
  const box = $("#nick-picker");
  const opts = await api(`/api/students/${current}/nickname-options`);
  box.hidden = false;
  box.innerHTML = `<h2>Izberi vzdevek</h2>
    <p class="muted">Zaradi varnosti vzdevka ne moreš vpisati sam, zato drugi nikoli ne vidijo tvojega imena.</p>
    <div class="nick-list">${opts.map((o) => `<button type="button" class="secondary small" data-nick="${esc(o)}">${esc(o)}</button>`).join("")}</div>
    <button type="button" id="nick-more" class="ghost small">${icon("refresh-cw")}<span>Drugi predlogi</span></button>`;
  box.querySelectorAll("[data-nick]").forEach((b) =>
    b.addEventListener("click", async () => {
      await api(`/api/students/${current}/nickname`, { method: "PUT", body: { nickname: b.dataset.nick } });
      loadLeague(current);
    }),
  );
  $("#nick-more").addEventListener("click", showNickPicker);
}

function toast(msg) {
  const t = $("#toast");
  if (!t) return alert(msg);
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (t.hidden = true), 4000);
}
