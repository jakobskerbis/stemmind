// Pogled »Zbirke in učni pass« (public/zbirke.js): vitrina, učni pass s 30 stopnjami, tri zbirke
// znanja z vnaprej vidnimi pogoji in pogled »preglej« (katera snov in kdaj je prinesla predmet).
import { t } from "./i18n.js";
import { icon } from "./icons.js";
import { avatarSvg, itemName, itemOf, DEFAULT_AVATAR } from "./avatar.js";
import { COLLECTIONS, KNOWLEDGE, PASS_REWARDS, baseId, variantOf, seasonLabel, elementTile } from "./zbirke.js";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const TAB_KEY = "stemmind.zbirkeTab";

let ctx = null; // { api, getStudent, currentLang, showView }
let data = null; // odgovor /api/students/:id/zbirke
let root = null;
let tab = "pse";
let open = null; // id predmeta v pogledu »preglej«
let msg = "";
let from = null; // pogled, iz katerega je učenec prišel (gumb Nazaj na igre)

export function initZbirke(c) {
  ctx = c;
  try {
    tab = localStorage.getItem(TAB_KEY) || "pse";
  } catch {}
}

export async function loadZbirke() {
  const s = ctx?.getStudent();
  if (!s) return null;
  data = await ctx.api(`/api/students/${s.id}/zbirke`);
  return data;
}

// Odpre pogled; item = predmet, ki ga takoj pokažemo v pogledu »preglej«.
export async function showZbirke(item = null, back = null) {
  root = document.querySelector("#zbirke-content");
  if (!root || !ctx) return;
  open = item;
  from = back;
  msg = "";
  if (item) tab = collectionOf(item);
  if (data) render();
  try {
    await loadZbirke();
    render();
  } catch (e) {
    if (!data) root.innerHTML = `<p class="muted">${esc(e.message)}</p>`;
  }
}

const lang = () => ctx.currentLang?.() || "sl";
const collectionOf = (id) => itemOf(id)?.collection || "pse";
const ownedSet = () => new Set((data?.items || []).map((x) => x.id));
const equipped = () => data?.avatar?.equipped || { ...DEFAULT_AVATAR };
const fmtDate = (sql) => {
  try {
    return new Date(String(sql).replace(" ", "T") + "Z").toLocaleDateString(lang());
  } catch {
    return String(sql).slice(0, 10);
  }
};

// Sličica predmeta: element kot ploščica, ostalo na avatarju.
export function itemThumb(id, size = 72, eq = DEFAULT_AVATAR) {
  const x = itemOf(id);
  if (!x) return "";
  if (x.sym) return `<svg class="zb-tile" viewBox="0 0 20 20" width="${size}" height="${size}" aria-hidden="true">${elementTile(x, { x0: 0, y0: 0, s: 20 })}</svg>`;
  return avatarSvg({ ...eq, [x.slot]: id }, { size });
}

// Pogoj za predmet, kot ga vidi učenec.
function condition(x, id) {
  if (x.collection === "pass") return t("zb.needPass", { tier: x.tier });
  if (x.set) return t("zb.needSet", { count: x.need.own, name: itemName(COLLECTIONS.find((c) => c.id === x.collection), lang()) });
  if (x.need?.tek) return t("zb.needTek");
  const h = data?.hints?.[baseId(id)];
  return h ? t("zb.needTopic", { topic: h.name, path: h.path }) : "";
}

// Predmeti za zavihek: zbirka ali pass (sezonski predmeti trenutne sezone + prejšnje, ki jih imaš).
function tabItems() {
  if (tab !== "pass") return KNOWLEDGE.filter((x) => x.collection === tab).map((x) => x.id);
  return PASS_REWARDS.map((r) => `${r.id}~${data.pass.season}`);
}

function card(id) {
  const x = itemOf(id);
  const own = ownedSet().has(id);
  const on = equipped()[x.slot] === id;
  const shown = data.showcase.includes(id);
  return `<button type="button" class="zb-card gm-r-${x.rarity}${own ? "" : " zb-locked"}${on ? " on" : ""}" data-zbopen="${esc(id)}">
    <span class="zb-thumb">${itemThumb(id, 72, own ? equipped() : DEFAULT_AVATAR)}${own ? "" : `<span class="zb-lock">${icon("lock")}</span>`}${shown ? `<span class="zb-star" title="${esc(t("zb.showcase"))}">${icon("star")}</span>` : ""}</span>
    <b>${esc(itemName(x, lang()))}</b>
    <small>${own ? esc(on ? t("games.wearing") : t(`games.rarity.${x.rarity}`)) : esc(x.collection === "pass" ? t("zb.needPassShort", { tier: x.tier }) : t("zb.locked"))}</small>
  </button>`;
}

function passCard() {
  const p = data.pass;
  const done = p.tier >= p.tiers;
  const inTier = p.xp - p.tier * p.perTier;
  const next = PASS_REWARDS.find((r) => r.tier > p.tier);
  const cells = Array.from({ length: p.tiers }, (_, i) => {
    const n = i + 1;
    const r = PASS_REWARDS.find((x) => x.tier === n);
    const cls = `zb-cell${n <= p.tier ? " got" : ""}${r ? " reward" : ""}${n === p.tier + 1 ? " now" : ""}`;
    return `<li class="${cls}" ${r ? `data-zbopen="${esc(`${r.id}~${p.season}`)}"` : ""}>${r ? itemThumb(`${r.id}~${p.season}`, 34) : `<span>${n}</span>`}</li>`;
  }).join("");
  return `<section class="card zb-pass">
    <div class="zb-pass-head">
      <div><h2>${icon("award")} ${esc(t("zb.pass"))}</h2><p class="muted">${esc(t(p.season.endsWith("-2") ? "zb.season2" : "zb.season1", { season: seasonLabel(p.season) }))}</p></div>
      <b class="zb-tier">${esc(t("zb.tier", { tier: p.tier, tiers: p.tiers }))}</b>
    </div>
    <div class="zb-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${p.tiers}" aria-valuenow="${p.tier}"><span style="width:${done ? 100 : Math.round((inTier / p.perTier) * 100)}%"></span></div>
    <p class="zb-next">${esc(done ? t("zb.passDone") : t("zb.toNext", { xp: p.perTier - inTier }))}${!done && next ? ` · ${esc(t("zb.nextReward", { tier: next.tier }))}` : ""}</p>
    <ol class="zb-track">${cells}</ol>
    <p class="muted small">${esc(t("zb.passHint", { cap: p.dayCap }))} ${esc(t("zb.streakFreeze"))}</p>
  </section>`;
}

function inspect(id) {
  const x = itemOf(id);
  if (!x) return "";
  const own = ownedSet().has(id);
  const row = data.items.find((i) => i.id === id);
  const on = equipped()[x.slot] === id;
  const shown = data.showcase.includes(id);
  const v = variantOf(id);
  const where = row?.topic ? t("zb.fromTopic", { topic: `${row.topic.name} (${row.topic.path})` }) : row?.source === "pass" ? t("zb.fromPass", { season: seasonLabel(v) }) : row?.source === "set" ? t("zb.fromSet") : "";
  return `<div class="zb-inspect card" role="dialog" aria-modal="false" aria-label="${esc(itemName(x, lang()))}">
    <button type="button" class="ghost zb-x" data-act="close" aria-label="${esc(t("nav.back"))}">${icon("x")}</button>
    <div class="zb-big">${x.sym ? itemThumb(id, 120) : avatarSvg({ ...equipped(), [x.slot]: id }, { size: 170, title: itemName(x, lang()) })}</div>
    <div class="zb-info">
      <h2>${esc(itemName(x, lang()))}${v ? ` <small class="muted">${esc(seasonLabel(v))}</small>` : ""}</h2>
      <p><span class="gm-rtag gm-r-${x.rarity}">${esc(t(`games.rarity.${x.rarity}`))}</span> ${x.set ? `<span class="gm-rtag">${esc(t("zb.set"))}</span>` : ""}</p>
      ${own ? `<p>${icon("calendar")} ${esc(t("zb.got", { date: fmtDate(row?.at) }))}</p>${where ? `<p>${icon("book-open")} ${esc(where)}</p>` : ""}` : `<p class="zb-need">${icon("lock")} ${esc(condition(x, id))}</p>`}
      ${msg ? `<p class="gm-shop-msg" role="status">${esc(msg)}</p>` : ""}
      ${own ? `<div class="actions">
        <button type="button" class="primary" data-act="wear">${esc(on ? t("zb.takeOff") : t("games.wear"))}</button>
        <button type="button" class="secondary" data-act="show">${icon("star")}${esc(shown ? t("zb.removeShow") : t("zb.addShow"))}</button>
      </div>` : ""}
    </div>
  </div>`;
}

function render() {
  if (!root || !data) return;
  const own = ownedSet();
  const counts = Object.fromEntries(COLLECTIONS.map((c) => [c.id, KNOWLEDGE.filter((x) => x.collection === c.id)]));
  const tabs = [...COLLECTIONS.map((c) => ({ id: c.id, label: itemName(c, lang()), ic: c.icon, n: counts[c.id].filter((x) => own.has(x.id)).length, of: counts[c.id].length })), { id: "pass", label: t("zb.pass"), ic: "award" }];
  if (!tabs.some((x) => x.id === tab)) tab = "pse";
  const earlier = tab === "pass" ? data.items.filter((i) => itemOf(i.id)?.collection === "pass" && variantOf(i.id) !== data.pass.season).map((i) => i.id) : [];
  const show = data.showcase;
  root.innerHTML = `
    ${from === "games" ? `<button type="button" class="text-btn zb-back" data-act="back">${icon("arrow-left")}${esc(t("games.back"))}</button>` : ""}
    <div class="zb-top card">
      <div class="zb-me">${avatarSvg(equipped(), { size: 120, title: t("games.avatar") })}</div>
      <div class="zb-show">
        <h2>${icon("star")} ${esc(t("zb.showcase"))}</h2>
        <div class="zb-slots">${Array.from({ length: data.showcaseMax }, (_, i) => (show[i] ? `<button type="button" class="zb-slot full" data-zbopen="${esc(show[i])}">${itemThumb(show[i], 56, equipped())}</button>` : `<span class="zb-slot"></span>`)).join("")}</div>
        <p class="muted small">${esc(show.length ? t("zb.showcaseHint") : t("zb.showcaseEmpty"))}</p>
      </div>
    </div>
    <p class="zb-intro">${esc(t("zb.intro"))} <span class="muted">${esc(t("zb.rules"))}</span></p>
    ${passCard()}
    <div class="chip-row zb-tabs" role="tablist">${tabs.map((x) => `<button type="button" role="tab" aria-selected="${tab === x.id}" class="${tab === x.id ? "active" : ""}" data-tab="${x.id}">${icon(x.ic)}${esc(x.label)}${x.of ? ` <small>${x.n}/${x.of}</small>` : ""}</button>`).join("")}</div>
    <div class="zb-grid">${tabItems().map(card).join("")}</div>
    ${earlier.length ? `<h3 class="zb-sub">${esc(t("zb.earlier"))}</h3><div class="zb-grid">${earlier.map(card).join("")}</div>` : ""}
    ${open ? inspect(open) : ""}`;
  // Trak passa: trenutna stopnja na sredini.
  const track = root.querySelector(".zb-track");
  const now = track?.querySelector(".now") || track?.querySelector(".got:last-of-type");
  if (track && now) track.scrollLeft = Math.max(0, now.offsetLeft - track.offsetLeft - track.clientWidth / 2 + now.clientWidth / 2);
  root.querySelectorAll("[data-tab]").forEach((b) =>
    b.addEventListener("click", () => {
      tab = b.dataset.tab;
      open = null;
      try {
        localStorage.setItem(TAB_KEY, tab);
      } catch {}
      render();
    }),
  );
  root.querySelectorAll("[data-zbopen]").forEach((b) =>
    b.addEventListener("click", () => {
      open = b.dataset.zbopen;
      msg = "";
      render();
      root.querySelector(".zb-inspect")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }),
  );
  root.querySelector('[data-act="back"]')?.addEventListener("click", () => ctx.showView(from));
  root.querySelector('[data-act="close"]')?.addEventListener("click", () => ((open = null), render()));
  root.querySelector('[data-act="wear"]')?.addEventListener("click", () => {
    const x = itemOf(open);
    const on = equipped()[x.slot] === open;
    save("avatar", { equipped: { ...equipped(), [x.slot]: on ? DEFAULT_AVATAR[x.slot] : open } }, (r) => ((data.avatar = r), ""));
  });
  root.querySelector('[data-act="show"]')?.addEventListener("click", () => {
    const has = show.includes(open);
    if (!has && show.length >= data.showcaseMax) return ((msg = t("zb.showFull")), render());
    save("zbirke/vitrina", { items: has ? show.filter((i) => i !== open) : [...show, open] }, (r) => ((data = r), ""));
  });
}

async function save(url, body, apply) {
  const s = ctx.getStudent();
  if (!s) return;
  try {
    msg = apply(await ctx.api(`/api/students/${s.id}/${url}`, { method: "POST", body: JSON.stringify(body) })) || "";
  } catch (e) {
    msg = e.message;
  }
  render();
}

// Obvestilo o novih predmetih (po nalogi ali pogovoru): ime enega ali več predmetov.
export function unlockedText(ids) {
  const names = (ids || []).map((id) => itemOf(id)).filter(Boolean).map((x) => itemName(x, lang()));
  if (!names.length) return "";
  return names.length === 1 ? t("zb.new", { name: names[0] }) : t("zb.newMany", { names: names.join(", ") });
}

// Kartica za »Jaz«: avatar, vitrina in stopnja passa.
export async function meCard(el) {
  if (!el || !ctx?.getStudent()) return;
  try {
    const d = await loadZbirke();
    el.innerHTML = `<span class="zb-me-av">${avatarSvg(d.avatar.equipped, { size: 56 })}</span>
      <span class="lr-text"><b>${esc(t("zb.title"))}</b><small>${esc(t("zb.passLevel", { tier: d.pass.tier, tiers: d.pass.tiers }))} · ${d.items.filter((i) => itemOf(i.id)?.collection !== "pass").length}/${KNOWLEDGE.filter((x) => x.collection !== "pass").length}</small></span>
      <span class="zb-me-show">${d.showcase.map((id) => itemThumb(id, 34, d.avatar.equipped)).join("")}</span>${icon("chevron-right")}`;
    el.hidden = false;
  } catch {}
}
