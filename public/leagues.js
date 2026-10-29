// Pogled »Lige«: tedenska liga, vzdevek, razredi in skupine prijateljev.
import { icon } from "./icons.js";
import { avatarSvg } from "./avatar.js";
import { t } from "./i18n.js";
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const api = async (url, opts = {}) => {
  const res = await fetch(url, {
    ...opts,
    headers: { "Content-Type": "application/json" },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || t("lg.error", { status: res.status }));
  return data;
};

// Barve lig (Bronasta … Diamantna) so v leagues.css kot .tier-0 … .tier-6.
const tierBadge = (i, cls = "") => `<span class="tier-badge tier-${i} ${cls}">${icon(i >= 6 ? "trophy" : "award")}</span>`;
// Imena lig (strežnik jih pošlje v slovenščini) iz prevodov; neznana stopnja ostane z imenom s strežnika.
const tierName = (i, fallback) => (Number.isInteger(i) && i >= 0 && i <= 6 ? t(`lg.tier${i}`) : fallback);
const OUTCOME = {
  up: "lg.up",
  down: "lg.down",
  stay: "lg.stay",
};

let current = null; // id učenca

function timeLeft(iso) {
  const ms = new Date(iso) - Date.now();
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  return d > 0 ? t("lg.leftDays", { d, h }) : t("lg.leftHours", { h });
}

function boardHtml(rows, zones = false) {
  if (!rows.length) return `<p class="muted">${esc(t("lg.nobody"))}</p>`;
  return `<ol class="leaderboard league-board">${rows
    .map(
      (r) => `<li class="${r.me ? "me" : ""} ${zones ? `zone-${r.zone}` : ""}">
        <span class="who"><span class="rank">${r.rank}</span>${avatarSvg(r.avatar, { size: 30 })}${esc(r.nickname)}${r.me ? ` <span class="you">${esc(t("lg.you"))}</span>` : ""}</span>
        <b>${r.xp} <span class="xp-unit">XP</span></b>${zones && r.zone !== "stay" ? `<span class="zone-mark" title="${esc(t(r.zone === "up" ? "lg.zoneUp" : "lg.zoneDown"))}">${icon(r.zone === "up" ? "arrow-right" : "arrow-left")}</span>` : ""}</li>`,
    )
    .join("")}</ol>`;
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
    ? `<p class="muted league-rule"><span class="dot up"></span>${esc(t("lg.promote", { count: L.promoteCount }))}${L.demoteCount ? ` · <span class="dot down"></span>${esc(t("lg.demote", { count: L.demoteCount }))}` : ""} · ${icon("calendar")} ${esc(t("lg.ends", { time: timeLeft(L.endsAt) }))}</p>
       ${boardHtml(L.board, true)}`
    : `<div class="league-empty">${icon("target")}<p>${esc(t("lg.empty"))}</p></div>`;

  root.innerHTML = `
    <div class="card league-hero tier-${L.tier}">
      ${tierBadge(L.tier, "big")}
      <div>
        <h2>${esc(t("lg.leagueName", { tier: tierName(L.tier, L.tierName) }))}</h2>
        <div class="nick">${icon("user")} <b>${esc(L.nickname)}</b> <button type="button" id="nick-change" class="ghost small">${icon("pencil")}<span>${esc(t("lg.change"))}</span></button></div>
        ${L.lastWeek ? `<div class="last">${esc(t(OUTCOME[L.lastWeek.outcome]))} (${esc(t("lg.place", { rank: L.lastWeek.rank }))})</div>` : ""}
      </div>
    </div>
    <div id="nick-picker" class="card" hidden></div>
    <div class="card">
      <h2 class="h-icon">${icon("trophy")} ${esc(t("lg.weekly"))}</h2>
      ${league}
      <div class="tier-row">${L.tiers.map((n, i) => `<span class="${i === L.tier ? "cur" : i < L.tier ? "done" : ""}" title="${esc(tierName(i, n))}">${tierBadge(i)}<span>${esc(tierName(i, n))}</span></span>`).join("")}</div>
    </div>
    ${data.classes
      .map(
        (c) => `<div class="card">
          <div class="group-head">
            <h2 class="h-icon">${icon(c.kind === "class" ? "graduation-cap" : "users")} ${esc(c.name)}</h2>
            <span class="code-chip" title="${esc(t(c.kind === "friends" ? "lg.shareCode" : "lg.classCode"))}">${esc(c.code)}</span>
          </div>
          <p class="muted">${esc(t(c.kind === "friends" ? "lg.boardFriends" : "lg.board"))}</p>
          ${boardHtml(c.board)}
          <button type="button" class="ghost small" data-leave="${c.id}">${icon("x")}<span>${esc(t("lg.leave"))}</span></button>
        </div>`,
      )
      .join("")}
    <div class="card form">
      <h2 class="h-icon">${icon("users")} ${esc(t("lg.groups"))}</h2>
      <p class="muted">${esc(t("lg.joinText"))}</p>
      <form id="join-form" class="row">
        <input id="join-code" placeholder="${esc(t("lg.codePh"))}" aria-label="${esc(t("lg.classCode"))}" maxlength="9" autocomplete="off" autocapitalize="characters" required>
        <button class="primary" type="submit">${esc(t("lg.join"))}</button>
      </form>
      <form id="friends-form" class="row">
        <input id="friends-name" placeholder="${esc(t("lg.groupPh"))}" aria-label="${esc(t("lg.groupPh"))}" maxlength="40">
        <button type="submit" class="secondary">${icon("plus")}<span>${esc(t("lg.create"))}</span></button>
      </form>
      <p class="muted">${esc(t("lg.teacher"))} <a href="ucitelj.html" target="_blank">${esc(t("lg.teacherLink"))}</a></p>
    </div>`;

  $("#nick-change").addEventListener("click", showNickPicker);
  $("#join-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const r = await api(`/api/students/${studentId}/classes`, { method: "POST", body: { code: $("#join-code").value } });
      toast(t(r.already ? "lg.already" : "lg.joined", { name: r.class.name }));
      loadLeague(studentId);
    } catch (err) {
      toast(err.message);
    }
  });
  $("#friends-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const r = await api(`/api/students/${studentId}/friend-groups`, { method: "POST", body: { name: $("#friends-name").value } });
      toast(t("lg.created", { code: r.code }));
      loadLeague(studentId);
    } catch (err) {
      toast(err.message);
    }
  });
  root.querySelectorAll("[data-leave]").forEach((b) =>
    b.addEventListener("click", async () => {
      if (!confirm(t("lg.leaveConfirm"))) return;
      await api(`/api/students/${studentId}/classes/${b.dataset.leave}`, { method: "DELETE" });
      loadLeague(studentId);
    }),
  );
}

async function showNickPicker() {
  const box = $("#nick-picker");
  const opts = await api(`/api/students/${current}/nickname-options`);
  box.hidden = false;
  box.innerHTML = `<h2>${esc(t("lg.pickNick"))}</h2>
    <p class="muted">${esc(t("lg.nickWhy"))}</p>
    <div class="nick-list">${opts.map((o) => `<button type="button" class="secondary small" data-nick="${esc(o)}">${esc(o)}</button>`).join("")}</div>
    <button type="button" id="nick-more" class="ghost small">${icon("refresh-cw")}<span>${esc(t("lg.moreNicks"))}</span></button>`;
  box.querySelectorAll("[data-nick]").forEach((b) =>
    b.addEventListener("click", async () => {
      await api(`/api/students/${current}/nickname`, { method: "PUT", body: { nickname: b.dataset.nick } });
      loadLeague(current);
    }),
  );
  $("#nick-more").addEventListener("click", showNickPicker);
}

function toast(msg) {
  const el = $("#toast");
  if (!el) return alert(msg);
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (el.hidden = true), 4000);
}
