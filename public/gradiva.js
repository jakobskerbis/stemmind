// Gradiva ob lekciji: povzetek na eni strani, zvočni povzetek (branje na glas v brskalniku)
// in delovni list za tisk z rešitvami (strežnik: server/gradiva.js).
import { t } from "./i18n.js";
import { icon } from "./icons.js";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const LABEL = { povzetek: "gr.povzetek", zvok: "gr.zvok", "delovni-list": "gr.delovni" };

// Gumbi za temo; prazno, če tema nima gradiv. Zaklenjena gradiva ne pokažemo (ponudbe so drugje).
export async function gradivaHtml(studentId, topicId) {
  let d;
  try {
    const r = await fetch(`/api/students/${studentId}/gradiva?topic=${encodeURIComponent(topicId)}`);
    if (!r.ok) return "";
    d = await r.json();
  } catch {
    return "";
  }
  const items = d.items.filter((x) => !x.locked);
  if (!items.length) return "";
  return `${items
    .map((x) =>
      x.url
        ? `<a class="tb-pdf" href="${esc(x.url)}" target="_blank" rel="noopener">${icon(x.icon)}${esc(t(LABEL[x.vrsta]))}</a>`
        : `<button type="button" class="tb-pdf tb-gr-btn" data-gradivo="${esc(x.vrsta)}" data-topic="${esc(topicId)}">${icon(x.icon)}<span>${esc(t(LABEL[x.vrsta]))}</span></button>`,
    )
    .join("")}<p class="muted tb-gr-msg" role="status" hidden></p>`;
}

function say(root, msg) {
  const el = root.querySelector(".tb-gr-msg");
  if (!el) return;
  el.textContent = msg || "";
  el.hidden = !msg;
}

// Stran za tisk odpremo v novem oknu: okno odpremo takoj (sicer ga brskalnik blokira), vsebino
// naložimo s prijavo trenutne seje in jo zapišemo vanj (base: poti do slogov in KaTeX).
export async function openPrintable(url, onError) {
  const w = window.open("", "_blank");
  if (!w) return onError(t("gr.popup"));
  try {
    w.document.title = "Evklid";
    w.document.body.textContent = "…";
  } catch {}
  let r;
  try {
    r = await fetch(url);
  } catch {
    w.close();
    return onError(t("off.noConnection"));
  }
  if (!r.ok) {
    const e = await r.json().catch(() => ({}));
    w.close();
    return onError(e.code && t(e.code) !== e.code ? t(e.code) : e.error || t("common.error", { status: r.status }));
  }
  const html = (await r.text()).replace("<head>", `<head><base href="${location.origin}/">`);
  w.document.open();
  w.document.write(html);
  w.document.close();
}

// --- branje na glas ---
let speaking = null; // gumb, ki trenutno bere

function slVoice() {
  const voices = window.speechSynthesis?.getVoices() || [];
  return voices.find((v) => /^sl(-|_|$)/i.test(v.lang)) || null;
}
// Glasovi se v Chromu naložijo z zamikom.
function voiceReady() {
  if (slVoice() || !window.speechSynthesis) return Promise.resolve(slVoice());
  return new Promise((res) => {
    const done = () => res(slVoice());
    window.speechSynthesis.addEventListener("voiceschanged", done, { once: true });
    setTimeout(done, 1500);
  });
}

function stop() {
  window.speechSynthesis?.cancel();
  if (speaking) {
    speaking.querySelector("span").textContent = t("gr.zvok");
    speaking.setAttribute("aria-pressed", "false");
  }
  speaking = null;
}

async function listen(btn, studentId, root) {
  if (speaking === btn) return stop();
  stop();
  if (!window.speechSynthesis) return say(root, t("gr.noSpeech"));
  const voice = await voiceReady();
  if (!voice) return say(root, t("gr.noVoice"));
  let a;
  try {
    const r = await fetch(`/api/students/${studentId}/gradiva/zvok?topic=${encodeURIComponent(btn.dataset.topic)}`);
    if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || "");
    a = await r.json();
  } catch (e) {
    return say(root, e.message || t("off.noConnection"));
  }
  say(root, "");
  speaking = btn;
  btn.querySelector("span").textContent = t("gr.zvokStop");
  btn.setAttribute("aria-pressed", "true");
  // Vsak odstavek posebej: dolga besedila nekateri brskalniki sredi branja prekinejo.
  a.parts.forEach((part, i) => {
    const u = new SpeechSynthesisUtterance(part);
    u.voice = voice;
    u.lang = voice.lang;
    u.rate = 0.95;
    if (i === a.parts.length - 1) u.onend = () => speaking === btn && stop();
    window.speechSynthesis.speak(u);
  });
}

// Ko se lekcija zamenja ali uporabnik odide, branje ustavimo.
export const stopReading = stop;

export function wireGradiva(root, studentId) {
  root.querySelectorAll("[data-gradivo]").forEach((btn) => {
    btn.addEventListener("click", () => {
      say(root, "");
      if (btn.dataset.gradivo === "zvok") return listen(btn, studentId, root);
      if (btn.dataset.gradivo === "delovni-list")
        return openPrintable(`/api/students/${studentId}/gradiva/delovni-list?topic=${encodeURIComponent(btn.dataset.topic)}`, (m) => say(root, m));
    });
  });
}
