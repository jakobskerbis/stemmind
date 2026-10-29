// Evklid kot aplikacija na začetnem zaslonu (PWA).
// - Android, Chrome in Edge na računalniku: gumb »Namesti aplikacijo« odpre okno brskalnika za namestitev.
// - iPhone in iPad: Safari namestitve ne ponudi sam, zato pokažemo tri korake (Deli → Dodaj na začetni zaslon).
// - Odprto v Instagramu, Messengerju …: najprej odpri v brskalniku.
// Kartica je na Učni poti (dokler je ne skriješ), vrstica v »Jaz« in kartica v Nastavitvah ostaneta.
import { icon } from "./icons.js";
import { t, currentLang } from "./i18n.js";

const KEY = "evklid.install"; // čas, ko je bila kartica na Učni poti skrita
const HIDE_DAYS = 21;
let deferred = null; // beforeinstallprompt
let ctx = { toast: () => {}, onSheet: () => {} };
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function get() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}
function set(v) {
  try {
    localStorage.setItem(KEY, v);
  } catch {}
}

export function isStandalone() {
  return ["standalone", "fullscreen", "minimal-ui", "window-controls-overlay"].some((m) => matchMedia(`(display-mode: ${m})`).matches) || navigator.standalone === true;
}

// Kje teče stran: ios | android | desktop, in ali je to vgrajen brskalnik druge aplikacije.
export function platform(ua = navigator.userAgent, touch = navigator.maxTouchPoints || 0) {
  const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && touch > 1); // iPad se predstavi kot Mac
  const android = /Android/.test(ua);
  const inApp = /FBAN|FBAV|FB_IAB|Instagram|Messenger|Snapchat|TikTok|musical_ly|Line\/|LinkedInApp|Twitter|GSA\/|; wv\)/.test(ua);
  const safariMac = !ios && /Macintosh/.test(ua) && /Version\/\d+.*Safari/.test(ua);
  return { os: ios ? "ios" : android ? "android" : "desktop", inApp, safariMac, mobile: ios || android };
}

// Ali ponudimo namestitev: ne v že nameščeni aplikaciji; na računalniku samo, ko brskalnik to zna.
export function canOffer(p = platform()) {
  if (isStandalone()) return false;
  if (p.mobile) return true;
  return !!deferred || p.safariMac;
}

function steps(p) {
  if (p.inApp) return { note: t("inst.inApp"), list: [] };
  if (p.os === "ios")
    return {
      list: [
        ["share", t("inst.ios1")],
        ["square-plus", t("inst.ios2")],
        ["check", t("inst.ios3")],
      ],
      note: t("inst.iosNote"),
    };
  if (p.os === "android")
    return {
      list: [
        ["ellipsis-vertical", t("inst.and1")],
        ["smartphone", t("inst.and2")],
      ],
    };
  return { list: [["download", t("inst.desk1")]] };
}

// Gumb: okno brskalnika za namestitev, kjer ga ni, pa navodila.
export async function install() {
  if (deferred) {
    const ev = deferred;
    deferred = null;
    ev.prompt();
    await ev.userChoice.catch(() => null); // isti dogodek se ne da ponoviti; ob zavrnitvi ostanejo navodila
    refresh();
    return;
  }
  openSheet();
}

function openSheet() {
  let dlg = $("#install-sheet");
  if (!dlg) {
    dlg = document.createElement("dialog");
    dlg.id = "install-sheet";
    dlg.className = "install-sheet";
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg || e.target.closest(".is-close")) closeInstallSheet();
    });
    dlg.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeInstallSheet();
    });
    document.body.append(dlg);
  }
  const p = platform();
  const { list, note } = steps(p);
  dlg.innerHTML = `<div class="is-box" role="document">
    <div class="is-head"><img src="/icons/icon-192.png" alt="" width="48" height="48"><h2>${esc(t("inst.sheetTitle"))}</h2>
      <button type="button" class="ghost icon-only is-close" aria-label="${esc(t("nav.back"))}" title="${esc(t("nav.back"))}">${icon("x")}</button></div>
    ${list.length ? `<ol class="is-steps">${list.map(([ic, txt]) => `<li><span class="is-ic">${icon(ic)}</span><span>${esc(txt)}</span></li>`).join("")}</ol>` : ""}
    ${note ? `<p class="muted is-note">${esc(note)}</p>` : ""}
    <button type="button" class="primary is-close is-ok">${esc(t("common.done"))}</button>
  </div>`;
  dlg.classList.toggle("is-top", p.os === "ios" && /iPad|Macintosh/.test(navigator.userAgent)); // na iPadu je »Deli« zgoraj
  if (!dlg.open) {
    dlg.showModal();
    ctx.onSheet(true);
  }
}

export const installSheetOpen = () => !!$("#install-sheet")?.open;
export function closeInstallSheet({ fromBack = false } = {}) {
  const dlg = $("#install-sheet");
  if (!dlg?.open) return;
  dlg.close();
  if (!fromBack) ctx.onSheet(false);
}

function cardHtml(p) {
  const text = p.mobile ? t("inst.text") : t("inst.textDesk");
  const btn = deferred ? t("inst.btn") : t("inst.how");
  return `<span class="fb-card-ic">${icon(p.mobile ? "smartphone" : "download")}</span>
    <div class="fb-card-text"><b>${esc(t("inst.title"))}</b><p class="muted">${esc(text)}</p></div>
    <span></span>
    <button type="button" class="primary fb-card-go inst-go">${icon(deferred ? "download" : "info")}<span>${esc(btn)}</span></button>`;
}

function hiddenOnPath() {
  const at = Number(get());
  return at > 0 && Date.now() - at < HIDE_DAYS * 864e5;
}

// Osveži vse tri mesta (Učna pot, Jaz, Nastavitve).
export function refresh() {
  const p = platform();
  const offer = canOffer(p);
  const card = $("#install-card");
  if (card) {
    card.hidden = !offer || hiddenOnPath();
    if (!card.hidden) {
      // Na Učni poti majhna vrstica (ne odrine vaj navzdol); dotik kjer koli odpre namestitev.
      card.className = "card list-card install-mini";
      card.innerHTML = `<button type="button" class="list-row inst-go"><span class="ic">${icon(p.mobile ? "smartphone" : "download")}</span><span class="lr-text"><b>${esc(t("inst.title"))}</b><small>${esc(p.mobile ? t("inst.meSub") : t("inst.textDesk"))}</small></span>${icon("chevron-right")}</button>
        <button type="button" class="ghost icon-only fb-card-x" aria-label="${esc(t("inst.dismiss"))}" title="${esc(t("inst.dismiss"))}">${icon("x")}</button>`;
      card.querySelector(".inst-go").onclick = install;
      card.querySelector(".fb-card-x").onclick = () => {
        set(String(Date.now()));
        card.hidden = true;
      };
    }
  }
  const box = $("#install-settings");
  if (box) {
    box.hidden = !offer;
    if (offer) {
      box.className = "card fb-card install-card";
      box.innerHTML = cardHtml(p);
      box.querySelector(".inst-go").onclick = install;
    }
  }
  const row = $("#me-install");
  if (row) row.hidden = !offer;
}

export function initInstall(opts = {}) {
  ctx = { ...ctx, ...opts };
  // Manifest v jeziku vmesnika (ime bližnjic ob dolgem pritisku na ikono).
  const link = $('link[rel="manifest"]');
  if (link) link.href = `/manifest.webmanifest?lang=${encodeURIComponent(currentLang())}`;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault(); // namesto pasice brskalnika ponudimo svoj gumb
    deferred = e;
    refresh();
  });
  window.addEventListener("appinstalled", () => {
    deferred = null;
    closeInstallSheet();
    ctx.toast(t("inst.done"), "circle-check");
    refresh();
  });
  $("#me-install")?.addEventListener("click", install);
  matchMedia("(display-mode: standalone)").addEventListener?.("change", refresh);
  refresh();
}
