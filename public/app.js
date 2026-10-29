// STEMMind – odjemalec (brez ogrodja).
import { attachPad, closePad, openPad, padIsSheet } from "./pad.js";
import { icon, hydrateIcons } from "./icons.js";
import { t, locale, currentLang, currentRegion, regionFor, setLanguage, deviceRegion } from "./i18n.js";
import { systemForCountry, isRegional, SCHOOL_SYSTEMS } from "./regions.js";
import { mountLanguageCard } from "./language.js";

hydrateIcons();
import { initAccount, accountsOn, openAddChild } from "./account.js";
import { initTextbook, showTextbook, openLesson, textbookBack } from "./textbook.js";
import { loadLeague } from "./leagues.js";
import { PACES, DEFAULT_PACE, createPacer } from "./pace.js";
import { loadPrograms, programsCache, subjectOptions, SUBJECT_NAMES } from "./programs.js";
import { mountLevelPicker, levelLabel, schoolSystemOptions } from "./level-picker.js";
import { attachMic } from "./speech.js";
import { mountSymbols } from "./symbols.js";
import { renderSuggestion, renderWelcome, stageUp } from "./level-up.js";
import { offlineApi, refreshPack, syncOffline, packTaskCount, pendingCount } from "./offline.js";
import { initFeedback, showFeedback } from "./feedback.js";
import { initInstall, installSheetOpen, closeInstallSheet } from "./install.js";
import { initFlashcards, showFlashcards, addCardsNote } from "./flashcards.js";
import { initUsageMeter, refreshUsageMeter } from "./usage-meter.js";
import { initFullscreen } from "./fullscreen.js";

const $ = (sel) => document.querySelector(sel);
// Brez povezave odgovori vadnica iz shranjenega paketa nalog (public/offline.js).
const fromPack = (url, opts) => (state.student ? offlineApi(state.student.id, url, opts) : undefined);
// Računalnik s STEMMind je ugasnjen ali okno ni odprto: ngrok ali Cloudflare vrneta
// svojo napako. Takrat delamo kot brez povezave (vaje iz shranjenega paketa).
function serverDown(res) {
  const code = res.headers.get("ngrok-error-code");
  const down = !!(code && code !== "ERR_NGROK_6024") || [502, 504, 530].includes(res.status);
  if (down !== serverIsDown) {
    serverIsDown = !!down;
    setTimeout(() => syncOfflineBanner(), 0);
  }
  return down;
}
let serverIsDown = false;

const api = async (url, opts = {}) => {
  if (/\/tasks\/off-/.test(url)) {
    const local = fromPack(url, opts);
    if (local !== undefined) return local;
    throw new Error(t("off.noConnection"));
  }
  let res;
  try {
    res = await fetch(url, {
      ...opts,
      headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
      body: opts.body && typeof opts.body !== "string" ? JSON.stringify(opts.body) : opts.body,
    });
  } catch {
    res = null;
  }
  if (!res || (res.status === 503 && res.headers.get("X-Offline")) || serverDown(res)) {
    const local = fromPack(url, opts);
    if (local !== undefined) return local;
    throw new Error(t("off.noConnection"));
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || t("common.error", { status: res.status }));
  }
  return res.json();
};

const MODE_NAMES = { A: t("chatMode.A"), B: t("chatMode.B") };

const isUni = (s) => s?.educational_track === "UNIVERZA";

const state = {
  students: [],
  student: null,
  conversations: [],
  conversationId: null,
  sending: false,
  image: null, // { media_type, data, url }
};

// ---------- izris matematike in markdowna ----------

function renderMath(tex, display) {
  try {
    return katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: "ignore" });
  } catch {
    return tex;
  }
}

// Sporočilo učenca: besedilo ostane besedilo, le $...$ se izriše kot formula.
function renderUserText(text) {
  const parts = String(text).split(/(\$[^$\n]+?\$)/g);
  return parts.map((p, i) => (i % 2 ? renderMath(p.slice(1, -1), false) : escapeHtml(p))).join("");
}

function renderRich(text) {
  const math = [];
  const stash = (tex, display) => `@@MATH${math.push({ tex, display }) - 1}@@`;
  let src = text
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => stash(t, true))
    .replace(/\\\[([\s\S]+?)\\\]/g, (_, t) => stash(t, true))
    .replace(/\\\((.+?)\\\)/g, (_, t) => stash(t, false))
    .replace(/(^|[^\\$])\$([^$\n]+?)\$/g, (_, pre, t) => pre + stash(t, false));
  let html = DOMPurify.sanitize(marked.parse(src, { breaks: true }));
  // V tabelah so ulomki in potence v polni velikosti (\displaystyle), sicer so premajhni za branje.
  html = html.replace(/<table[\s\S]*?<\/table>/g, (tbl) =>
    tbl.replace(/@@MATH(\d+)@@/g, (_, i) => renderMath(math[i].display ? math[i].tex : `\\displaystyle ${math[i].tex}`, math[i].display)),
  );
  html = html.replace(/@@MATH(\d+)@@/g, (_, i) => renderMath(math[i].tex, math[i].display));
  return html;
}

// ---------- pogledi ----------

function showView(name) {
  syncHistory(name);
  currentView = name;
  syncCompetitionTab();
  if (name === "path" || name === "competition") setBack(name);
  if (name !== "topic") stopContestTimer();
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.view === name));
  // Na telefonu so Napredek, Lige, Nastavitve in Račun pod zavihkom »Jaz«.
  if (ME_VIEWS.includes(name)) $('#tabbar [data-view="me"]').classList.add("active");
  if (name === "me") renderMe();
  document.querySelectorAll(".view").forEach((v) => (v.hidden = v.id !== `view-${name}`));
  if (name === "settings") {
    fillSettingsForm();
    $("#settings-account").hidden = $("#account-tab").hidden;
    loadUsage();
  }
  if (name === "progress") loadProgress();
  if (name === "league") loadLeague(state.student.id);
  if (name === "path") loadPath();
  if (name === "textbook") showTextbook();
  if (name === "competition") (examMode() ? loadExams() : loadCompetition());
  if (name === "feedback") showFeedback();
  if (name === "cards") {
    setActiveMode("cards");
    showFlashcards();
  }
  if (name === "graph") showGraph();
  else document.body.classList.remove("gc-kp");
  closeCalcOverlay();
  if (name !== "topic") closePad();
  if (name !== "topic" && name !== "cards") setActiveMode(null);
  window.scrollTo(0, 0);
}
document.querySelectorAll(".tab, .brand").forEach((t) => t.addEventListener("click", () => showView(t.dataset.view)));

// Tipka Nazaj (Android, aplikacija na začetnem zaslonu, brskalnik): brez tega bi tipka Nazaj
// v nameščeni aplikaciji takoj zaprla STEMMind. Zgodovina ima dve ravni: Učna pot (0) in
// trenutni pogled (1). Nazaj najprej zapre odprto okno (kalkulator, navodila) ali lekcijo,
// s podstrani »Jaz« (Nastavitve, Napredek …) vodi na »Jaz«, sicer na Učno pot.
let currentView = "path";
let fromBack = false;
let skipPop = 0;
let overlayEntry = false; // zapis v zgodovini samo za okno, odprto na Učni poti
const atTop = () => history.state?.stm !== 1;
function syncHistory(name) {
  if (fromBack) return;
  if (name === "path") {
    if (!atTop()) {
      skipPop++;
      overlayEntry = false;
      history.back();
    }
    return;
  }
  const entry = { stm: 1, v: name };
  if (atTop()) history.pushState(entry, "");
  else history.replaceState(entry, "");
}
// Okno se je odprlo: na Učni poti dodamo zapis, da ga tipka Nazaj zapre namesto aplikacije.
function overlayOpened() {
  if (currentView === "path" && atTop()) {
    history.pushState({ stm: 1, v: "path" }, "");
    overlayEntry = true;
  }
}
// Okno zaprto z gumbom: odvečni zapis odstranimo, da ni treba dvakrat pritisniti Nazaj.
function overlayClosed() {
  if (overlayEntry && currentView === "path" && !atTop()) {
    skipPop++;
    history.back();
  }
  overlayEntry = false;
}
window.addEventListener("popstate", () => {
  if (skipPop) {
    skipPop--;
    return;
  }
  const wasOverlay = overlayEntry;
  overlayEntry = false;
  const keep = () => currentView !== "path" && history.pushState({ stm: 1, v: currentView }, "");
  if (installSheetOpen()) {
    closeInstallSheet({ fromBack: true });
    return keep();
  }
  if (calcOverlayOpen()) {
    closeCalcOverlay({ fromBack: true });
    return keep();
  }
  if (wasOverlay && currentView === "path") return;
  if (!$("#tour")?.hidden && $("#tour")) return keep();
  if (currentView === "textbook" && textbookBack()) return keep();
  const subMe = ME_VIEWS.includes(currentView) && !["me", "graph"].includes(currentView);
  if (subMe && $("#tabbar").offsetParent) return showView("me"); // telefon: nazaj na »Jaz«
  fromBack = true;
  try {
    showView("path");
  } finally {
    fromBack = false;
  }
});

const ME_VIEWS = ["me", "progress", "league", "settings", "account", "feedback", "graph"];
function renderMe() {
  const s = state.student;
  if (!s) return;
  $("#me-avatar").textContent = (s.name || "?").trim().charAt(0).toUpperCase();
  $("#me-name").textContent = s.name;
  $("#me-level").textContent = $("#path-select").selectedOptions[0]?.textContent.replace(t("path.myLevel"), "") || "";
  $("#me-xp").textContent = $("#xp-total").textContent;
  $("#me-streak").textContent = $("#xp-streak").textContent;
  $("#me-account").hidden = $("#account-tab").hidden;
}
// Nazaj na »Jaz« s podstrani (viden samo, ko je spodnja vrstica: telefon in tablica).
document.addEventListener("click", (e) => {
  if (e.target.closest(".me-back")) showView("me");
});
document.querySelectorAll("#view-me [data-go], #settings-account [data-go]").forEach((b) =>
  b.addEventListener("click", () => (b.dataset.go === "account" ? $("#account-tab").click() : showView(b.dataset.go))),
);
// Klik na kartico s profilom: Nastavitve, na mestu šole in letnika (pod njimi je povezava na Račun).
$("#me-head")?.addEventListener("click", () => {
  showView("settings");
  const el = $("#settings-form .level-field") || $("#settings-form");
  requestAnimationFrame(() => {
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    const card = $("#settings-form");
    card?.classList.remove("flash-target");
    void card?.offsetWidth;
    card?.classList.add("flash-target");
  });
});

// ---------- učenci ----------

async function loadStudents(selectId) {
  state.students = await api("/api/students");
  if (!state.students.length) {
    if (accountsOn()) return openAddChild(); // otroka doda starš s soglasjem
    state.students = [await onboard()];
  }
  const sel = $("#student-select");
  sel.innerHTML = state.students.map((s) => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join("");
  const saved = Number(selectId ?? localStorageGet("studentId"));
  const pick = state.students.find((s) => s.id === saved) || state.students[0];
  sel.value = pick.id;
  await selectStudent(pick.id);
}

// Nov profil: ime in izbira šole po korakih (OŠ / SŠ / fakulteta → … → letnik).
async function onboard(name = "") {
  const programs = await loadPrograms(api);
  // Privzeti šolski sistem po državi naprave (Indija → CBSE, Nigerija → JSS/SS …), sicer Slovenija.
  const defaultSystem = systemForCountry(deviceRegion());
  const box = $("#view-onboard");
  box.innerHTML = `
    <form id="onboard-form" class="card form">
      <h1>${t("onb.hello")}</h1>
      <p class="muted">${t("onb.text")}</p>
      <div class="onb-lang"></div>
      <label>${t("onb.name")} <input name="name" maxlength="40" required placeholder="${escapeHtml(t("onb.namePh"))}" value="${escapeHtml(name)}"></label>
      <fieldset class="level-field">
        <legend>${t("set.school")}</legend>
        <label class="system-field"><span>${t("set.system")}</span>
          <select name="school_system">${schoolSystemOptions(defaultSystem)}</select>
        </label>
        <div class="level-picker"></div>
        <input type="hidden" name="educational_track">
        <input type="hidden" name="study_program">
        <input type="hidden" name="curriculum_level">
      </fieldset>
      <p class="form-error" hidden></p>
      <button class="primary big" type="submit">${t("common.start")}</button>
    </form>`;
  const f = $("#onboard-form");
  mountLanguageCard(f.querySelector(".onb-lang"), { compact: true });
  const picker = mountLevelPicker(f.querySelector(".level-picker"), f, { programs, settings: { school_system: defaultSystem } });
  f.school_system.addEventListener("change", () => picker.setSystem(f.school_system.value));
  showView("onboard");
  document.body.classList.add("onboarding");
  return new Promise((resolve) => {
    let busy = false; // ob počasni povezavi večkratni pritisk ne sme ustvariti več učencev
    f.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (busy) return;
      const err = f.querySelector(".form-error");
      if (!picker.complete()) {
        err.textContent = t("onb.finish");
        err.hidden = false;
        return;
      }
      const track = f.educational_track.value;
      const settings = {
        school_system: f.school_system.value,
        educational_track: track,
        study_program: f.study_program.value,
        curriculum_level: f.curriculum_level.value,
        language: currentLang(),
        region: currentRegion(),
      };
      if (track === "UNIVERZA") settings.subject = programs.find((p) => p.id === settings.study_program)?.mainSubject || "MAT";
      const btn = f.querySelector('button[type="submit"]');
      busy = true;
      btn.disabled = true;
      err.hidden = true;
      let s;
      try {
        s = await api("/api/students", { method: "POST", body: { name: f.name.value, settings } });
      } catch (ex) {
        err.textContent = ex.message;
        err.hidden = false;
        busy = false;
        btn.disabled = false;
        return;
      }
      document.body.classList.remove("onboarding");
      resolve(s);
    });
  });
}

async function selectStudent(id) {
  state.student = state.students.find((s) => s.id === Number(id));
  // Jezik je del profila: ob menjavi učenca se vmesnik preklopi v njegov jezik (stran se naloži znova).
  const want = state.student.settings.language;
  if (want && want !== currentLang()) {
    localStorageSet("studentId", state.student.id);
    if (setLanguage(want)) return;
  }
  syncCompetitionTab();
  applyLite();
  localStorageSet("studentId", state.student.id);
  sendOffline();
  state.conversationId = null;
  await loadConversations();
  if (state.conversations.length) await openConversation(state.conversations[0].id);
  else renderEmptyChat();
  if (!$("#view-settings").hidden) fillSettingsForm();
  if (!$("#view-progress").hidden) loadProgress();
  if (!$("#view-league").hidden) loadLeague(state.student.id);
  state.pathKey = null;
  clearLevelCard();
  state.symbols?.refresh();
  if (!$("#view-path").hidden || !$("#view-topic").hidden) showView("path");
  refreshXp();
}
$("#student-select").addEventListener("change", (e) => selectStudent(e.target.value));

// ---------- pogovori ----------

async function loadConversations() {
  state.conversations = await api(`/api/students/${state.student.id}/conversations`);
  renderConversationList();
}

function renderConversationList() {
  const list = $("#conversation-list");
  list.innerHTML = "";
  for (const c of state.conversations) {
    const li = document.createElement("li");
    li.className = c.id === state.conversationId ? "active" : "";
    li.innerHTML = `<span>${escapeHtml(c.title)}</span><button title="${t("chat.delete")}" aria-label="${t("chat.delete")}">${icon("trash-2")}</button>`;
    li.querySelector("span").addEventListener("click", () => openConversation(c.id));
    li.querySelector("button").addEventListener("click", async (e) => {
      e.stopPropagation();
      if (!confirm(t("chat.confirmDelete"))) return;
      await api(`/api/conversations/${c.id}`, { method: "DELETE" });
      if (state.conversationId === c.id) {
        state.conversationId = null;
        renderEmptyChat();
      }
      await loadConversations();
    });
    list.appendChild(li);
  }
}

function renderEmptyChat() {
  $("#chat-title").textContent = t("chat.new");
  const ideas = [t("chat.idea1"), t("chat.idea2"), t("chat.idea3")];
  $("#messages").innerHTML = `<div class="empty">
    <div class="tutor-avatar big" aria-hidden="true">${icon("sparkles")}</div>
    <p class="big">${t("chat.hello", { name: escapeHtml(state.student.name) })}</p>
    <p>${t("chat.intro")}</p>
    <div class="ideas">${ideas.map((t) => `<button type="button" class="idea" data-idea="${escapeHtml(t)}">${escapeHtml(t)}</button>`).join("")}</div></div>`;
  $("#messages").querySelectorAll("[data-idea]").forEach((b) =>
    b.addEventListener("click", () => {
      $("#input").value = b.dataset.idea;
      $("#input").focus();
    }),
  );
  renderState(null);
}

function renderState(convState) {
  const s = state.student.settings;
  const subject = convState?.subject || s.subject;
  const mode = convState?.mode || s.solving_mode;
  const program = isUni(s) ? programsCache().find((p) => p.id === s.study_program)?.label : null;
  $("#chat-state").innerHTML = [SUBJECT_NAMES[subject], MODE_NAMES[mode], program, levelLabel(s.curriculum_level)]
    .filter(Boolean)
    .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
    .join("");
  // Pogovor o temi učne poti: povezava na lekcijo v učbeniku.
  const topicId = state.conversationId && state.convTopic;
  if (topicId) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip chip-btn";
    b.textContent = t("chat.readLesson");
    b.addEventListener("click", () => openLesson(topicId));
    $("#chat-state").append(b);
  }
}

async function openConversation(id) {
  const conv = await api(`/api/conversations/${id}`);
  state.conversationId = conv.id;
  state.convTopic = conv.topic?.id || null;
  $("#chat-title").textContent = conv.title;
  const box = $("#messages");
  box.innerHTML = "";
  if (!conv.messages.length) renderEmptyChat();
  for (const m of conv.messages) addMessage(m.role, m.text, m.has_image);
  renderState(conv.state);
  renderConversationList();
  box.scrollTop = box.scrollHeight;
}

$("#toggle-sidebar").addEventListener("click", () => $(".sidebar").classList.toggle("open"));
$("#conversation-list").addEventListener("click", () => $(".sidebar").classList.remove("open"));

$("#new-chat").addEventListener("click", () => {
  $(".sidebar").classList.remove("open");
  state.conversationId = null;
  renderConversationList();
  renderEmptyChat();
  $("#input").focus();
});

// ---------- sporočila ----------

function addMessage(role, text, hasImage = false) {
  const box = $("#messages");
  box.querySelector(".empty")?.remove();
  const el = document.createElement("div");
  el.className = `msg ${role}`;
  if (role === "user") {
    el.innerHTML = renderUserText(text);
    if (hasImage) {
      const note = document.createElement("div");
      note.className = "photo-note";
      note.innerHTML = `${icon("camera")} ${t("chat.photoNote")}`;
      el.prepend(note);
    }
  } else {
    el.innerHTML = renderRich(text);
    if (text) addDeepButton(el, false);
    if (text) addGraphButton(el, text);
  }
  box.appendChild(el);
  box.scrollTop = box.scrollHeight;
  return el;
}

async function send(text, { deep = false } = {}) {
  if (state.sending) return;
  const image = state.image;
  if (!text && !image) return;
  state.sending = true;
  $("#send").disabled = true;
  state.pacer?.skip();

  try {
    if (!state.conversationId) {
      const conv = await api(`/api/students/${state.student.id}/conversations`, { method: "POST" });
      state.conversationId = conv.id;
    }
    addMessage("user", text, !!image);
    $("#input").value = "";
    autoGrow();
    clearImage();

    const bubble = addMessage("assistant", "");
    bubble.classList.add("typing");
    const box = $("#messages");
    const paint = (shown) => {
      const atBottom = box.scrollHeight - box.scrollTop - box.clientHeight < 80;
      bubble.innerHTML = renderRich(closeMarkdown(shown));
      if (atBottom) box.scrollTop = box.scrollHeight;
    };
    // Odgovor se izpisuje z berljivim tempom; dotik sporočila pokaže vse naenkrat.
    const pacer = createPacer(currentPace(), paint);
    state.pacer = pacer;
    const skip = () => pacer.skip();
    bubble.addEventListener("click", skip);
    bubble.title = t("chat.tapToSkip");

    const res = await fetch(`/api/conversations/${state.conversationId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, deep, lite: liteActive(), image: image ? { media_type: image.media_type, data: image.data } : undefined }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      bubble.remove();
      throw new Error(err.error || t("common.error", { status: res.status }));
    }

    let doneData = null;
    let cardsData = null;
    await readSse(res, {
      delta: (d) => pacer.push(d.text),
      cards: (d) => (cardsData = d),
      mastered: (d) => toast(t("chat.mastered", { topic: d.topic }), "trophy"),
      done: (d) => {
        doneData = d;
        pacer.finish(d.text);
        if (d.state) renderState(d.state);
        if (d.title) $("#chat-title").textContent = d.title;
      },
      error: (d) => {
        bubble.classList.add("error");
        pacer.finish(d.error);
        pacer.skip();
        $("#input").value = text; // vrni besedilo za ponovni poskus
      },
    });
    pacer.finish();
    pacer.done.then(() => {
      bubble.classList.remove("typing");
      bubble.removeEventListener("click", skip);
      bubble.removeAttribute("title");
      if (doneData) addDeepButton(bubble, doneData.deep);
      if (doneData?.text) addGraphButton(bubble, doneData.text);
      if (cardsData) addCardsNote(bubble, cardsData);
      if (state.pacer === pacer) state.pacer = null;
      refreshUsageMeter();
    });
    await loadConversations();
  } catch (err) {
    addMessage("assistant", err.message).classList.add("error");
    $("#input").value = text;
  } finally {
    state.sending = false;
    $("#send").disabled = false;
  }
}

async function readSse(res, handlers) {
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    let idx;
    while ((idx = buf.indexOf("\n\n")) !== -1) {
      const chunk = buf.slice(0, idx);
      buf = buf.slice(idx + 2);
      const event = /^event: (.*)$/m.exec(chunk)?.[1];
      const data = /^data: (.*)$/m.exec(chunk)?.[1];
      if (event && data && handlers[event]) handlers[event](JSON.parse(data));
    }
  }
}

const input = $("#input");
function autoGrow() {
  input.style.height = "auto";
  input.style.height = Math.min(input.scrollHeight, 200) + "px";
}
input.addEventListener("input", autoGrow);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    $("#composer").requestSubmit();
  }
});
$("#composer").addEventListener("submit", (e) => {
  e.preventDefault();
  setSymbols(false);
  send(input.value.trim());
});

// Glasovni vnos (brskalnik, sl-SI) in napredna tipkovnica s simboli.
attachMic($("#mic-btn"), input, { onMessage: (m) => toast(m, "mic"), onChange: autoGrow });
state.symbols = mountSymbols($("#sym-panel"), input, { settings: () => state.student?.settings, onChange: autoGrow });
function setSymbols(open) {
  open = state.symbols.toggle(open);
  $("#sym-btn").setAttribute("aria-pressed", String(open));
  $("#sym-btn").classList.toggle("on", open);
  return open;
}
$("#sym-btn").addEventListener("click", () => {
  if (setSymbols() && !matchMedia("(pointer: coarse)").matches) input.focus();
});

// ---------- fotografije ----------

async function loadImage(file) {
  if (!file || !file.type.startsWith("image/")) return;
  // Pomanjšaj na največ 1600 px, da je pošiljanje hitro in poceni.
  const bitmap = await createImageBitmap(file);
  // Lahki način: še manjša in bolj stisnjena slika (manj prenosa in manj žetonov).
  const lite = liteActive();
  const scale = Math.min(1, (lite ? 900 : 1200) / Math.max(bitmap.width, bitmap.height)); // manjša slika = manj žetonov
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const url = canvas.toDataURL("image/jpeg", lite ? 0.6 : 0.8);
  state.image = { media_type: "image/jpeg", data: url.split(",")[1], url };
  $("#image-preview img").src = url;
  $("#image-preview").hidden = false;
}
function clearImage() {
  state.image = null;
  $("#image-preview").hidden = true;
  $("#image-input").value = "";
}
$("#image-input").addEventListener("change", (e) => loadImage(e.target.files[0]));
$("#remove-image").addEventListener("click", clearImage);
input.addEventListener("paste", (e) => {
  const file = [...(e.clipboardData?.files || [])].find((f) => f.type.startsWith("image/"));
  if (file) {
    e.preventDefault();
    loadImage(file);
  }
});

// ---------- lahki način in delo brez povezave ----------

// Lahki način: vedno, nikoli ali samodejno, kadar naprava varčuje s podatki ali ima počasno povezavo.
function liteActive() {
  const mode = state.student?.settings?.data_mode || "auto";
  if (mode !== "auto") return mode === "lite";
  const c = navigator.connection;
  return !!(c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || "")));
}
function applyLite() {
  const on = liteActive();
  document.documentElement.classList.toggle("lite", on);
  localStorageSet("stemmind.lite", on ? "1" : "0"); // za theme.js ob naslednjem odprtju
}
navigator.connection?.addEventListener?.("change", applyLite);

// Service worker: aplikacija se odpre brez povezave; ob prvem obisku shrani že naložene datoteke.
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker
    .register("/sw.js")
    .then(async () => {
      const reg = await navigator.serviceWorker.ready;
      const urls = performance.getEntriesByType("resource").map((e) => e.name).concat(location.href);
      reg.active?.postMessage({ type: "precache", urls });
    })
    .catch(() => null);
}

// Pasica brez povezave na učni poti in pošiljanje odgovorov, ko se povezava vrne.
function syncOfflineBanner() {
  const box = $("#offline-banner");
  if (!box || !state.student) return;
  const sid = state.student.id;
  const off = !navigator.onLine || serverIsDown;
  const n = packTaskCount(sid);
  const pending = pendingCount(sid);
  box.hidden = !off && !pending;
  box.innerHTML = off
    ? `${icon("wifi-off")}<span>${n ? t("off.banner", { n }) : t("off.bannerEmpty")}</span>`
    : `${icon("refresh-cw")}<span>${t("off.pending", { n: pending })}</span>`;
}
async function sendOffline() {
  if (!state.student || !navigator.onLine) return;
  const out = await syncOffline(api, state.student.id).catch(() => null);
  if (out?.synced) {
    toast(t("off.synced", { n: out.synced }), "cloud-upload");
    refreshXp().catch(() => null);
  }
  syncOfflineBanner();
}
window.addEventListener("online", () => {
  sendOffline();
  syncOfflineBanner();
});
window.addEventListener("offline", syncOfflineBanner);

// ---------- nastavitve ----------

// Izbira predmeta: OŠ in SŠ matematika, fizika, kemija; fakulteta predmeti iz predmetnika
// izbrane smeri in letnika (in izbirni predmeti).
function fillSubjectOptions() {
  const f = $("#settings-form");
  const uni = f.educational_track.value === "UNIVERZA";
  $("#subject-row").hidden = uni;
  $("#course-row").hidden = !uni;
  if (uni) return fillCourseOptions();
  const prev = f.subject.value || state.student?.settings?.subject;
  f.subject.innerHTML = subjectOptions(null, prev);
  if (![...f.subject.options].some((o) => o.value === prev)) f.subject.selectedIndex = 0;
}

const courseCache = new Map(); // program → predmeti po letnikih (/api/paths?program=)
let courseReq = 0;
async function fillCourseOptions() {
  const f = $("#settings-form");
  const program = f.study_program.value;
  const sel = f.study_course;
  if (!program) return (sel.innerHTML = "");
  const req = ++courseReq;
  if (!courseCache.has(program)) courseCache.set(program, await api(`/api/paths?program=${encodeURIComponent(program)}`).catch(() => []));
  if (req !== courseReq) return; // medtem je bil izbran drug program
  const list = courseCache.get(program);
  const year = Number((String(f.curriculum_level.value).match(/([1-4])/) || [])[1]) || 1;
  // Letnik brez predmetov (moduli): zadnji letnik s predmeti, kot na učni poti.
  const years = [...new Set(list.filter((c) => c.year).map((c) => c.year))].filter((y) => y <= year);
  const y = years.length ? Math.max(...years) : null;
  const mine = list.filter((c) => c.year === y);
  const elect = list.filter((c) => c.elective);
  const s = state.student?.settings || {};
  const keys = [...mine, ...elect].map((c) => c.key);
  const prev = keys.includes(sel.value) ? sel.value : keys.includes(s.study_course) ? s.study_course : (mine.find((c) => c.subject === s.subject) || mine[0] || elect[0])?.key;
  const opt = (c) => `<option value="${c.key}" data-subject="${c.subject}"${c.key === prev ? " selected" : ""}>${escapeHtml(c.label.replace(/ \([^)]*\)$/, ""))}</option>`;
  sel.innerHTML =
    (mine.length ? `<optgroup label="${escapeHtml(t("path.year", { n: y }))}">${mine.map(opt).join("")}</optgroup>` : "") +
    (elect.length ? `<optgroup label="${escapeHtml(t("path.electives"))}">${elect.map(opt).join("")}</optgroup>` : "");
}

function fillLevelOptions(track) {
  // Fakulteta in regijski šolski sistemi: brez slovenskih tekmovanj (NPZ, matura, olimpijade).
  $("#track-row").hidden = track === "UNIVERZA" || isRegional($("#settings-form").school_system.value);
  fillSubjectOptions();
}

// Izbira šole po korakih (OŠ/SŠ/fakulteta → … → letnik).
let levelPicker = null;

async function fillSettingsForm() {
  const f = $("#settings-form");
  const s = state.student.settings;
  f.name.value = state.student.name;
  const programs = await loadPrograms(api);
  for (const key of ["track", "personality_setting"]) f[key].value = s[key];
  f.data_mode.value = s.data_mode || "auto";
  f.subject.innerHTML = subjectOptions(null, s.subject);
  f.study_course.innerHTML = "";
  f.school_system.innerHTML = schoolSystemOptions(s.school_system || "SI");
  if (!levelPicker) {
    levelPicker = mountLevelPicker($("#settings-level"), f, { programs, settings: s, onChange: (_, track) => fillLevelOptions(track) });
    f.school_system.addEventListener("change", () => levelPicker.setSystem(f.school_system.value));
  } else levelPicker.set(s);
  f.querySelector(`input[name=solving_mode][value=${s.solving_mode}]`).checked = true;
  f.manual_weaknesses.value = state.student.manual_weaknesses.join(", ");
  fillLevelOptions(s.educational_track);
  if (state.pickUniversity) {
    state.pickUniversity = false;
    levelPicker.set({ ...s, educational_track: "UNIVERZA", study_program: "", curriculum_level: "" });
    $("#settings-level").scrollIntoView({ block: "center" });
  }
}
// Jezik aplikacije in inštruktorja: shrani se v profil učenca in na napravo.
mountLanguageCard($("#language-card"), {
  onChange: async (code) => {
    if (!state.student) return;
    await api(`/api/students/${state.student.id}`, { method: "PUT", body: { settings: { language: code, region: regionFor(code) } } }).catch(() => null);
  },
});
$("#lang-note").hidden = currentLang() === "sl";

// Hitrost izpisa je nastavitev naprave (ne profila), shrani se takoj.
{
  const sel = $("#pace-select");
  sel.innerHTML = Object.entries(PACES)
    .map(([k]) => `<option value="${k}">${t(`pace.${k}`)}</option>`)
    .join("");
  sel.value = PACES[localStorageGet("pace")] ? localStorageGet("pace") : DEFAULT_PACE;
  sel.addEventListener("change", () => localStorageSet("pace", sel.value));
}

$("#settings-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = e.target;
  const before = state.student.settings;
  if (levelPicker && !levelPicker.complete()) {
    alert(t("set.finishSchool"));
    return;
  }
  const updated = await api(`/api/students/${state.student.id}`, {
    method: "PUT",
    body: {
      name: f.name.value,
      manual_weaknesses: f.manual_weaknesses.value,
      settings: {
        school_system: f.school_system.value,
        ...(f.educational_track.value === "UNIVERZA"
          ? { study_course: f.study_course.value, subject: f.study_course.selectedOptions[0]?.dataset.subject || state.student.settings.subject }
          : { subject: f.subject.value, study_course: "" }),
        track: isRegional(f.school_system.value) ? "REGULAR" : f.track.value,
        educational_track: f.educational_track.value,
        study_program: f.educational_track.value === "UNIVERZA" ? f.study_program.value : "",
        curriculum_level: f.curriculum_level.value,
        solving_mode: f.querySelector("input[name=solving_mode]:checked").value,
        personality_setting: f.personality_setting.value,
        data_mode: f.data_mode.value,
      },
    },
  });
  const i = state.students.findIndex((s) => s.id === updated.id);
  state.students[i] = updated;
  state.student = updated;
  syncCompetitionTab();
  applyLite();
  $("#student-select").options[$("#student-select").selectedIndex].textContent = updated.name;
  renderState(null);
  state.symbols?.refresh();
  if (levelChanged(before, updated.settings)) state.pathKey = null;
  // Prehod OŠ → SŠ ali SŠ → fakulteta: na Učni poti pokažemo, kaj je novega.
  const up = stageUp(before, updated.settings);
  if (up) {
    state.welcome = { stage: up };
    return showView("path");
  }
  const ok = $("#settings-saved");
  ok.hidden = false;
  setTimeout(() => (ok.hidden = true), 2000);
});

// ---------- prehod v višji razred / letnik ----------

const levelChanged = (a, b) => ["educational_track", "curriculum_level", "study_program", "school_system"].some((k) => a?.[k] !== b?.[k]);

function clearLevelCard() {
  const box = $("#level-card");
  box.hidden = true;
  box.innerHTML = "";
  state.levelChecked = null;
  state.welcome = null;
}

async function showLevelCard() {
  const box = $("#level-card");
  const sid = state.student?.id;
  if (!sid) return;
  if (state.welcome) {
    const { stage } = state.welcome;
    state.welcome = null;
    const r = await api(`/api/students/${sid}/level-up`).catch(() => ({ premium: true }));
    renderWelcome(box, { stage, premium: r.premium, accounts: accountsOn(), onAccount: () => $("#account-tab").click() });
    return;
  }
  if (!box.hidden || state.levelChecked === sid) return;
  state.levelChecked = sid;
  const r = await api(`/api/students/${sid}/level-up`).catch(() => null);
  if (!r?.suggestion || state.student?.id !== sid) return;
  renderSuggestion(box, { studentId: sid, suggestion: r.suggestion, onApply: (s) => applyLevel(s.settings), onChoose: chooseUniversity });
}

// En klik: nov razred ali letnik.
async function applyLevel(settings) {
  const before = state.student.settings;
  const updated = await api(`/api/students/${state.student.id}`, { method: "PUT", body: { settings } });
  state.students[state.students.findIndex((s) => s.id === updated.id)] = updated;
  state.student = updated;
  syncCompetitionTab();
  state.symbols?.refresh();
  state.pathKey = null;
  const up = stageUp(before, updated.settings);
  if (up) state.welcome = { stage: up };
  else toast(t("path.levelNow", { level: levelLabel(updated.settings.curriculum_level) }), "circle-arrow-up");
  showView("path");
}

// Iz srednje šole na fakulteto: izbira univerze, fakultete in programa v Nastavitvah.
function chooseUniversity() {
  state.pickUniversity = true;
  showView("settings");
}

$("#new-student-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const s = await onboard(e.target.name.value);
  e.target.reset();
  await loadStudents(s.id);
  showView("path");
});

$("#delete-student").addEventListener("click", async () => {
  if (!confirm(t("set.confirmDelete", { name: state.student.name }))) return;
  await api(`/api/students/${state.student.id}`, { method: "DELETE" });
  localStorageSet("studentId", "");
  await loadStudents();
  fillSettingsForm();
});

// ---------- napredek ----------

async function loadProgress() {
  const p = await api(`/api/students/${state.student.id}/progress`);
  const weak = $("#weak-list");
  const items = [
    ...p.manual_weaknesses.map((w) => `<li>${escapeHtml(w)}</li>`),
    ...p.weak.map((w) => `<li class="auto" title="${t("prog.errRate", { n: Math.round(w.rate * 100) })}">${escapeHtml(w.topic)} (${w.subject ?? "?"})</li>`),
  ];
  weak.innerHTML = items.length ? items.join("") : `<li>${t("common.noData")}</li>`;

  // 30 stolpcev, en na dan (dnevi brez aktivnosti so prazni).
  const byDay = Object.fromEntries(p.activity.map((a) => [a.day, a]));
  const days = [...Array(30)].map((_, i) => {
    const d = new Date(Date.now() - (29 - i) * 86400000).toISOString().slice(0, 10);
    return byDay[d] || { day: d, turns: 0, errors: 0 };
  });
  const max = Math.max(1, ...days.map((a) => a.turns));
  $("#activity").innerHTML = p.activity.length
    ? days
        .map(
          (a) => `<div class="bar" style="height:${(a.turns / max) * 100}%" title="${t("prog.dayTitle", { day: a.day, turns: a.turns, errors: a.errors })}">
            <div class="err" style="height:${a.turns ? (a.errors / a.turns) * 100 : 0}%"></div></div>`,
        )
        .join("")
    : `<p class="muted">${t("prog.noActivity")}</p>`;

  $("#topic-rows").innerHTML = p.topics.length
    ? p.topics
        .map(
          (t) => `<tr><td>${t.subject ?? "–"}</td><td>${escapeHtml(t.topic)}</td><td>${t.turns}</td>
            <td class="${t.rate >= 0.4 && t.turns >= 3 ? "bad" : ""}">${t.errors} (${Math.round(t.rate * 100)} %)</td></tr>`,
        )
        .join("")
    : `<tr><td colspan="4" class="muted">${t("common.noData")}</td></tr>`;

  const FLAG_NAMES = { distress: t("flag.distress"), unsafe: t("flag.unsafe"), injection: t("flag.injection"), offtopic: t("flag.offtopic") };
  const flags = p.flags.filter((f) => f.flag !== "offtopic");
  $("#flags-card").hidden = !flags.length;
  refreshXp();
  $("#flag-list").innerHTML = flags
    .map((f) => `<li>${t("prog.flagIn", { when: f.created_at.slice(0, 16), flag: FLAG_NAMES[f.flag] ?? f.flag, title: escapeHtml(f.title) })}</li>`)
    .join("");
}

// Gumb »Razloži podrobneje« uporabi zmogljivejši (dražji) model samo na zahtevo.
function addDeepButton(el, wasDeep) {
  // Ponovna razlaga je vedno na voljo (tudi po ponovni razlagi); strežnik izbere najcenejši model.
  if (el.classList.contains("error") || el.querySelector(".deep-btn")) return;
  document.querySelectorAll(".deep-btn").forEach((x) => x.remove()); // samo pri zadnjem odgovoru
  const b = document.createElement("button");
  b.className = "deep-btn";
  b.type = "button";
  b.innerHTML = `${icon("search")} ${t("chat.deeper")}`;
  b.addEventListener("click", () => {
    b.remove();
    send(t("chat.deeperMsg"), { deep: true });
  });
  el.appendChild(b);
}

// Tiha napaka (npr. prekinjena povezava) se pokaže kot obvestilo, ne pa kot »nič se ne zgodi«.
window.addEventListener("unhandledrejection", (e) => {
  const msg = e.reason?.message || String(e.reason || "");
  if (msg) toast(t("common.errorMsg", { msg }), "circle-x");
});

function toast(msg, ic = null) {
  const t = $("#toast");
  t.innerHTML = `${ic ? icon(ic) : ""}<span></span>`;
  t.querySelector("span").textContent = msg;
  t.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (t.hidden = true), 3500);
}

// ---------- pomožno ----------

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
// Med postopnim izpisom zapre odprte ** in *, da se ne vidijo surove zvezdice.
function closeMarkdown(t) {
  const bold = (t.match(/\*\*/g) || []).length;
  if (bold % 2) t += "**";
  const single = (t.replace(/\*\*/g, "").match(/\*/g) || []).length;
  if (single % 2) t += "*";
  return t;
}
function currentPace() {
  return PACES[localStorageGet("pace")] || PACES[DEFAULT_PACE];
}
function localStorageGet(k) {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
}
function localStorageSet(k, v) {
  try {
    localStorage.setItem(k, v);
  } catch {}
}

// ---------- učna pot ----------

const LEVEL_NAMES = { 1: t("level.1"), 2: t("level.2"), 3: t("level.3") };
const NODE = {
  locked: ["lock", t("node.locked")],
  due: ["rotate-ccw", t("node.due")],
  mastered: ["check", t("node.mastered")],
  learning: ["pencil", t("node.learning")],
  new: ["play", t("node.new")],
};
// Tekmovalni razdelek ima svoja imena težavnosti: tudi najlažja raven je nad rednim poukom.
const COMP_LEVEL_NAMES = { 1: t("level.comp1"), 2: t("level.comp2"), 3: t("level.comp3") };
const isCompTopic = (id) => /^(MAT|FIZ|KEM)-TEK-/.test(String(id || ""));
const diffBadge = (level, comp = false) =>
  `<span class="diff d${level}" title="${t("level.title")}"><span class="dots"><i></i><i></i><i></i></span>${(comp ? COMP_LEVEL_NAMES : LEVEL_NAMES)[level] || ""}</span>`;

async function refreshXp() {
  if (!state.student) return;
  const x = await api(`/api/students/${state.student.id}/xp`);
  const prev = Number($("#xp-total").textContent) || 0;
  $("#xp-total").textContent = x.total;
  if (x.total > prev && prev) {
    $("#xp-badge").classList.remove("bump");
    void $("#xp-badge").offsetWidth;
    $("#xp-badge").classList.add("bump");
  }
  $("#xp-streak").textContent = x.streak;
  state.leaderboard = x.leaderboard;
  refreshModes();
  return x;
}

// ---------- načini učenja (spodnja vrstica) ----------

async function refreshModes() {
  if (!state.student) return null;
  const q = state.pathKey ? `?path=${encodeURIComponent(state.pathKey)}` : "";
  const m = await api(`/api/students/${state.student.id}/modes${q}`).catch(() => null);
  if (!m) return null;
  state.modes = m;
  setCardsDue(m.cardsDue);
  const badge = $('#modebar [data-mode="review"] .badge');
  badge.hidden = !m.reviewBacklog;
  badge.textContent = m.reviewBacklog;
  badge.title = t("mode.reviewBadge", { n: m.reviewBacklog });
  const daily = $('#modebar [data-mode="daily"]');
  if (!daily) return m;
  daily.classList.toggle("done", m.daily.done);
  daily.title = m.daily.done ? t("daily.doneTitle") : m.daily.open ? t("daily.continue") : t("daily.about");
  return m;
}

// Število kartic za ponavljanje, ki so danes na vrsti (značka na gumbu »Kartice«).
function setCardsDue(n) {
  const b = $('#modebar [data-mode="cards"] .badge');
  if (!b || n === undefined) return;
  b.hidden = !n;
  b.textContent = n;
  b.title = t("cards.dueN", { n });
}

function setActiveMode(mode) {
  document.querySelectorAll("#modebar [data-mode]").forEach((b) => b.classList.toggle("active", b.dataset.mode === mode));
}

const REVIEW_HINT_KEY = "stemmind.reviewHint";
async function goNew({ skipHint = false } = {}) {
  const m = (await refreshModes()) || state.modes;
  setActiveMode("new");
  let shown = null;
  try {
    shown = localStorage.getItem(REVIEW_HINT_KEY);
  } catch {}
  const today = new Date().toISOString().slice(0, 10);
  if (!skipHint && m?.suggestReview && shown !== today) {
    try {
      localStorage.setItem(REVIEW_HINT_KEY, today);
    } catch {}
    showView("topic");
    $("#topic-content").innerHTML = `<div class="card suggest">
      <h2>${icon("repeat")} ${t("suggest.title")}</h2>
      <p>${t("suggest.text", { n: m.reviewBacklog })}</p>
      <div class="actions"><button class="primary" id="sg-review">${t("suggest.yes")}</button><button id="sg-new">${t("suggest.no")}</button></div>
    </div>`;
    $("#sg-review").addEventListener("click", () => startSession("review", { quick: true }));
    $("#sg-new").addEventListener("click", () => goNew({ skipHint: true }));
    return;
  }
  if (!m?.newTopic) {
    showView("path");
    toast(t("path.allDoneToast"), "trophy");
    return;
  }
  const pretest = await openTopic(m.newTopic.id);
  if (m.newTopic.practice && !pretest) await nextPractice();
}

async function showTestPrep(edit = false) {
  setActiveMode("test");
  const { plan } = await api(`/api/students/${state.student.id}/test-plan`);
  showView("topic");
  const box = $("#topic-content");
  if (plan && !edit && plan.daysLeft >= 0) {
    const when = plan.daysLeft === 0 ? t("test.today") : plan.daysLeft === 1 ? t("test.tomorrow") : t("test.inDays", { n: plan.daysLeft });
    box.innerHTML = `<h1 class="with-icon">${icon("clipboard-check")} ${t("mode.test")}</h1>
      <div class="card"><p>${t("test.when", { when, date: escapeHtml(new Date(plan.date).toLocaleDateString(locale())) })}</p>
      <p class="muted">${t("test.material", { list: plan.unitTitles.map(escapeHtml).join(", ") })}</p>
      <p class="muted">${t("test.howto")}</p>
      <div class="actions"><button class="primary" id="tp-start">${t("test.startToday")}</button><button id="tp-edit">${t("common.change")}</button></div></div>`;
    $("#tp-start").addEventListener("click", () => startSession("test-prep"));
    $("#tp-edit").addEventListener("click", () => showTestPrep(true));
    return;
  }
  const p = await api(`/api/students/${state.student.id}/path?key=${encodeURIComponent(state.pathKey || "")}`);
  const today = new Date().toISOString().slice(0, 10);
  const chosen = new Set(plan?.path === p.key ? plan.units : []);
  box.innerHTML = `<h1 class="with-icon">${icon("clipboard-check")} ${t("mode.test")}</h1>
    <form id="tp-form" class="card">
      <p><b>${t("test.which")}</b> <span class="muted">(${escapeHtml(p.label || "")})</span></p>
      <div class="tp-units">${p.units
        .map((u, i) =>
          u.hasPractice
            ? `<label class="check"><input type="checkbox" name="unit" value="${i}" ${chosen.has(i) ? "checked" : ""}> ${escapeHtml(u.title)}</label>`
            : "",
        )
        .join("")}</div>
      <p><label><b>${t("test.date")}</b><br><input type="date" name="date" min="${today}" value="${plan?.date && plan.date >= today ? plan.date : ""}" required></label></p>
      <div class="actions"><button class="primary">${t("test.saveStart")}</button>${plan ? `<button type="button" id="tp-del">${t("test.remove")}</button>` : ""}</div>
      <div id="tp-err" class="muted"></div>
    </form>`;
  $("#tp-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const units = f.getAll("unit").map(Number);
    if (!units.length) return ($("#tp-err").textContent = t("test.pickUnit"));
    try {
      await api(`/api/students/${state.student.id}/test-plan`, { method: "POST", body: { path: p.key, units, date: f.get("date") } });
      startSession("test-prep");
    } catch (err) {
      $("#tp-err").textContent = err.message;
    }
  });
  $("#tp-del")?.addEventListener("click", async () => {
    await api(`/api/students/${state.student.id}/test-plan`, { method: "DELETE" });
    showTestPrep(true);
  });
}

document.querySelectorAll("#modebar [data-mode]").forEach((b) =>
  b.addEventListener("click", () => {
    if (!state.student) return;
    const mode = b.dataset.mode;
    if (mode === "new") goNew();
    else if (mode === "review") startSession("review");
    else if (mode === "test") showTestPrep();
    else if (mode === "daily") startSession("daily", { path: state.pathKey });
    else if (mode === "cards") showView("cards");
  }),
);

async function loadPath(key = state.pathKey) {
  const q = key ? `?key=${encodeURIComponent(key)}` : "";
  const p = await api(`/api/students/${state.student.id}/path${q}`);
  const content = $("#path-content");
  // izbira poti: vse poti predmeta oziroma vsi predmeti študijskega programa po letnikih
  const uni = isUni(state.student.settings);
  if (uni) await loadPrograms(api);
  const sys = state.student.settings.school_system || "SI";
  const paths = await api(uni ? `/api/paths?program=${encodeURIComponent(state.student.settings.study_program)}` : `/api/paths?subject=${state.student.settings.subject}&system=${encodeURIComponent(sys)}`);
  const opt = (x) => `<option value="${x.key}" ${x.key === p.key ? "selected" : ""}>${escapeHtml(x.label.replace(/ \((?:UL|UM|UP|UNG) [A-Z]+\)$/, ""))}${x.key === p.defaultKey ? t(uni ? "path.mySubject" : "path.myLevel") : ""}</option>`;
  $("#path-select").innerHTML = uni
    ? [1, 2, 3, 4, null]
        .map((y) => paths.filter((x) => x.year === y))
        .filter((list) => list.length)
        .map((list) => `<optgroup label="${list[0].year ? t("path.year", { n: list[0].year }) : t("path.electives")}">${list.map(opt).join("")}</optgroup>`)
        .join("")
    : paths.map(opt).join("");
  if (!p.key) {
    content.innerHTML = `<p class="muted">${escapeHtml(p.message)}</p>`;
    return;
  }
  state.pathKey = p.key;
  showLevelCard();
  syncOfflineBanner();
  // Naloge za vadbo brez povezave (enkrat na dan, v ozadju).
  if (!p.offline) refreshPack(api, state.student.id, p.key).then(syncOfflineBanner);
  // Fakulteta: vir predmetnika in opozorilo, da je osnutek.
  const prog = uni ? programsCache().find((x) => x.id === state.student.settings.study_program) : null;
  $("#path-note").hidden = !prog && !isRegional(sys);
  // Regijski šolski sistem: učna pot je preslikana na snov te države (osnutek).
  if (!prog && isRegional(sys)) $("#path-note").textContent = t("path.regionNote", { system: SCHOOL_SYSTEMS[sys].name });
  $("#lang-note").hidden = currentLang() === "sl" || isRegional(sys);
  if (prog) {
    $("#path-note").innerHTML = `${t("path.uniNote", { faculty: escapeHtml(prog.facultyName), program: escapeHtml(prog.name), year: escapeHtml(prog.sourceYear || "") })} ${prog.source ? `<a href="${escapeHtml(prog.source)}" target="_blank" rel="noopener">${t("path.uniSource")}</a>.` : ""}`;
  }
  const x = p.xp;
  const done = state.modes?.daily?.done;
  $("#xp-card").innerHTML = `
    <div class="hero">
      <div class="hero-icon">${icon("zap")}</div>
      <div class="hero-text"><h2>${t("daily.title")}</h2><p>${done ? t("daily.doneText") : t("daily.text")}</p></div>
      <button class="primary big" data-daily>${done ? t("daily.again") : t("daily.start")}</button>
    </div>
    ${
      p.next
        ? `<button class="next-row" data-open="${p.next.id}"><span class="eyebrow">${t("path.next")}</span><span class="next-name">${escapeHtml(p.next.name)}</span>${icon("chevron-right")}</button>`
        : `<div class="next-row done">${icon("trophy")}<span class="next-name">${t("path.allDone")}</span></div>`
    }
    <div class="stats-row">
      <div><b>${x.level}</b><span>${t("stats.level")}</span></div>
      <div><b>${x.week}</b><span>${t("stats.week")}</span></div>
      <div><b>${x.streak}</b><span>${t("stats.streak", { n: x.streak })}</span></div>
    </div>`;

  content.innerHTML =
    `<div class="legend">${["mastered", "learning", "due", "locked"].map((k) => `<span class="lg ${k}">${icon(NODE[k][0])}${NODE[k][1]}</span>`).join("")}</div>` +
    p.units
      .map((u, ui) => {
        const rel = u.topics.filter((t) => t.practice).length ? u.topics.filter((t) => t.practice) : u.topics;
        const nDone = rel.filter((t) => t.status === "mastered").length;
        const pct = Math.round(u.progress * 100);
        return `<section class="unit card ${u.locked ? "locked" : ""} ${u.mastered ? "mastered" : ""}">
        <div class="unit-head">
          <div class="ring" style="--p:${pct}">${u.locked ? icon("lock") : u.mastered ? icon("award") : `<span>${pct}%</span>`}</div>
          <div class="unit-title"><span class="eyebrow">${t("unit.label", { n: ui + 1 })}</span><h2>${escapeHtml(u.title)}</h2>
            <span class="muted">${u.locked ? t("unit.lockedNote") : t("unit.progress", { done: nDone, total: rel.length })}</span></div>
        </div>
        <ol class="path">
          ${u.topics
            .map((tp) => {
              const st = u.locked ? "locked" : tp.due ? "due" : tp.status;
              const isNext = p.next && p.next.id === tp.id;
              const sub = NODE[st][1] + (tp.practice && tp.status === "learning" && !u.locked ? ` · ${LEVEL_NAMES[tp.level]}` : "");
              return `<li><button class="node ${st} ${isNext ? "current" : ""}" data-open="${tp.id}" ${u.locked ? "disabled" : ""}>
                <span class="node-dot">${icon(NODE[st][0])}</span>
                <span class="node-text"><span class="node-name">${escapeHtml(tp.name)}</span><span class="node-sub">${isNext ? t("node.nextPrefix") : ""}${sub}</span></span>
              </button></li>`;
            })
            .join("")}
        </ol>
        <div class="unit-actions">
          ${u.hasPractice && !u.locked && u.started ? `<button class="secondary small" data-unit="${ui}">${icon("puzzle")}${t("unit.practice")}</button>` : ""}
          ${u.hasPractice && !u.mastered ? `<button class="secondary small" data-placement="${ui}">${icon("target")}${u.locked ? t("unit.unlockTest") : t("unit.test")}</button>` : ""}
        </div>
      </section>`;
      })
      .join("");  if (!maybeTour.done) {
    maybeTour.done = true;
    maybeTour();
  }
}

$("#path-select").addEventListener("change", (e) => loadPath(e.target.value));
document.addEventListener("click", (e) => {
  const open = e.target.closest("[data-open]");
  if (open && !open.disabled) {
    setBack(open.closest("#view-competition") ? "competition" : open.closest("#view-path") ? "path" : state.backTo || "path");
    openTopic(open.dataset.open);
  }
  const pl = e.target.closest("[data-placement]");
  if (pl) startSession("placement", { path: state.pathKey, unit: Number(pl.dataset.placement) });
  const un = e.target.closest("[data-unit]");
  if (un) startSession("unit-practice", { path: state.pathKey, unit: Number(un.dataset.unit) });
  if (e.target.closest("[data-daily]")) startSession("daily", { path: state.pathKey });
});
$("#back-to-path").addEventListener("click", () => showView(state.backTo || "path"));
// Tekmovanja so za osnovno in srednjo šolo; fakulteta zavihka nima.
// Šolski sistemi zunaj Slovenije: isti zavihek je »Izpiti« (SAT, gaokao, JEE, NEET, CBSE …).
// Sporočilo preverjanja: slovensko besedilo s strežnika, v drugih jezikih prevod po kodi.
const fbText = (r) => (r.code && currentLang() !== "sl" ? t(r.code, r.params || {}) : r.message);
const examMode = () => !!state.student && isRegional(state.student.settings.school_system);
const prepLabel = () => (examMode() ? t("nav.exams") : t("nav.competition"));
const prepBack = () => (examMode() ? t("exam.back") : t("result.toCompetitions"));
function syncCompetitionTab() {
  $("#competition-tab").hidden = $("#competition-tab-m").hidden = !state.student || isUni(state.student.settings);
  for (const tab of [$("#competition-tab"), $("#competition-tab-m")]) {
    const span = tab.querySelector("span");
    span.dataset.i18n = examMode() ? "nav.exams" : "nav.competition";
    span.textContent = prepLabel();
    tab.querySelector("i, svg").outerHTML = icon(examMode() ? "clipboard-check" : "medal");
  }
}
// Gumb »nazaj« na temi oziroma pri seriji nalog vodi tja, od koder je učenec prišel.
function setBack(view) {
  state.backTo = view;
  $("#back-to-path").innerHTML = `${icon("arrow-left")}${view === "competition" ? prepLabel() : t("nav.path")}`;
}

async function openTopic(topicId) {
  const tp = await api(`/api/topic?id=${encodeURIComponent(topicId)}`);
  state.topic = tp;
  showView("topic");
  const hasPractice = (await api(`/api/students/${state.student.id}/path?key=${encodeURIComponent(tp.path)}`)).units
    .flatMap((u) => u.topics)
    .find((x) => x.id === tp.id);
  const canPractice = !!hasPractice?.practice;
  $("#topic-content").innerHTML = `<div class="topic-grid">
    <div class="card topic-head">
      <span class="eyebrow">${escapeHtml(tp.pathLabel)} · ${escapeHtml(tp.unit)}</span>
      <h1>${escapeHtml(tp.name)}</h1>
      <p class="goals">${icon("target")}<span>${escapeHtml(tp.goals)}</span></p>
      <div class="actions">
        ${canPractice ? `<button class="primary big" id="t-practice">${icon("pencil")}${t("topic.practice")}</button>` : ""}
        <button class="${canPractice ? "secondary" : "primary big"}" id="t-learn">${icon("message-circle")}${t("topic.learn")}</button>
        <button id="t-lesson" class="secondary">${icon("book-open")}${t("topic.lesson")}</button>
      </div>
      ${hasPractice?.status === "mastered" ? "" : `<button id="t-done" class="text-btn">${t("topic.known")}</button>`}
    </div>
    <div class="card explanation">
      <h2 class="with-icon">${icon("book-open")} ${t("topic.explanation")}</h2>
      ${
        tp.explanation
          ? renderRich(tp.explanation)
          : `<p class="muted">${t("topic.noExplanation")}</p>`
      }
    </div>
    <div id="practice"></div></div>`;
  $("#t-practice")?.addEventListener("click", () => nextPractice());
  $("#t-learn").addEventListener("click", () => learnWithTutor(tp));
  $("#t-lesson").addEventListener("click", () => openLesson(tp.id));
  $("#t-done")?.addEventListener("click", async () => {
    if (!confirm(t("topic.confirmKnown"))) return;
    await api(`/api/students/${state.student.id}/topic-status`, { method: "POST", body: { topic_id: tp.id, status: "mastered" } });
    toast(t("topic.markedKnown"));
    openTopic(tp.id);
  });
  // Nova tema: najprej kratek test predznanja (tri naloge, od lažje do težje).
  if (canPractice && hasPractice.status === "new") return startPretest(tp);
  return false;
}

// Začetni test predznanja: rezultat določi začetno stopnjo vaj in zahtevnost inštruktorja.
// Vrne true, če je test prikazan (»Nova snov« takrat ne odpre takoj vaje).
async function startPretest(tp) {
  const out = await api(`/api/students/${state.student.id}/pretest`, { method: "POST", body: { topic_id: tp.id } }).catch(() => null);
  if (!out || out.skip || out.finished || !out.task) return false;
  renderTask(out.task, { mode: "pretest", index: out.index, total: out.total });
  return true;
}

function pretestResultHtml(p) {
  const name = { osnovna: t("pretest.tierBasic"), srednja: t("pretest.tierMid"), "višja": t("pretest.tierHigh") }[p.tier];
  return `<div class="card result pretest-result">
    <div class="result-icon">${icon("target")}</div>
    <h2>${t("pretest.resultTitle", { tier: name })}</h2>
    <p>${t("pretest.score", { correct: p.correct, total: p.total })}</p>
    <p class="muted">${t(p.known >= 3 ? "pretest.textHigh" : p.known === 2 ? "pretest.textMid" : "pretest.textBasic")}</p>
    <div class="actions">
      <button class="primary big" id="pt-learn">${icon("message-circle")}${t("topic.learn")}</button>
      <button class="secondary" id="pt-practice">${icon("pencil")}${t("topic.practice")}</button>
      <button class="secondary" id="pt-lesson">${icon("book-open")}${t("topic.lesson")}</button>
    </div></div>`;
}

async function learnWithTutor(topic, firstMessage = t("topic.startMsg", { name: topic.name })) {
  const conv = await api(`/api/students/${state.student.id}/conversations`, { method: "POST", body: { topic_id: topic.id } });
  await loadConversations();
  showView("chat");
  await openConversation(conv.id);
  send(firstMessage);
}

// ---------- vadnica ----------

async function nextPractice() {
  const box = $("#practice");
  let out;
  try {
    out = await api(`/api/students/${state.student.id}/practice/next`, { method: "POST", body: { topic_id: state.topic.id } });
  } catch (err) {
    box.innerHTML = `<div class="card task"><div class="fb bad">${icon("circle-x")}<span>${t("task.loadError", { msg: escapeHtml(err.message) })}</span></div></div>`;
    return;
  }
  if (out.example) {
    box.innerHTML = `<div class="card task example">
      <div class="task-top"><span class="eyebrow with-icon">${icon("book-open")} ${t("task.example")}</span></div>
      <div class="task-text">${renderRich(out.example.text)}</div>
      ${out.example.figure ? figureSvg(out.example.figure) : ""}
      ${workedBlock(out.example, out.example.solution)}
      <div class="fb hint">${icon("lightbulb")}<div>${renderRich(out.example.hint)}</div></div>
      <div class="actions"><button class="primary big" id="ex-next">${t("task.yourTurn")}${icon("arrow-right")}</button></div>
    </div>`;
    $("#ex-next").addEventListener("click", nextPractice);
  } else {
    renderTask(out.task, { mode: "practice" });
  }
  box.scrollIntoView({ behavior: "smooth", block: "start" });
}

const SESSIONS = {
  review: { mode: "review", icon: "repeat", title: t("session.review"), intro: t("session.reviewIntro"), empty: t("session.reviewEmpty") },
  placement: { mode: "placement", icon: "target", title: t("session.placement"), intro: t("session.placementIntro") },
  daily: { mode: "daily", icon: "zap", title: t("session.daily"), intro: t("session.dailyIntro"), empty: t("session.dailyEmpty") },
  "unit-practice": { mode: "unit", icon: "puzzle", title: t("session.unit"), intro: t("session.unitIntro") },
  "test-prep": { mode: "test", icon: "clipboard-check", title: t("session.testPrep"), intro: t("session.testPrepIntro") },
  tek: { mode: "tek", endpoint: "competition-training", icon: "medal", title: t("session.tek"), intro: t("session.tekIntro") },
  contest: { mode: "contest", icon: "timer", title: t("session.contest"), intro: t("session.contestIntro") },
};
const SESSION_DONE = { review: t("sessionDone.review"), daily: t("sessionDone.daily"), unit: t("sessionDone.unit"), test: t("sessionDone.test"), tek: t("sessionDone.tek") };

async function startSession(kind, body = {}) {
  let cfg = SESSIONS[kind];
  // Izpiti (zunaj Slovenije): isti mehanizem, a z izpitnimi naslovi.
  if (examMode() && kind === "tek") cfg = { ...cfg, icon: "target", title: t("exam.train"), intro: t("exam.trainText") };
  if (examMode() && kind === "contest") cfg = { ...cfg, title: t("exam.mock"), intro: t("exam.mockIntro") };
  setActiveMode({ review: "review", daily: "daily", "test-prep": "test" }[kind] || null);
  let out;
  try {
    out = await api(`/api/students/${state.student.id}/${cfg.endpoint || kind}`, { method: "POST", body });
  } catch (err) {
    toast(err.message);
    return;
  }
  if (kind !== "tek" && kind !== "contest") setBack("path");
  showView("topic");
  $("#topic-content").innerHTML = `<div class="session-grid"><div class="session-main"><div class="session-head"><span class="session-icon">${icon(cfg.icon)}</span><div><h1>${cfg.title}</h1><p class="muted">${cfg.intro}</p></div></div><div id="practice"></div></div><aside id="session-side" class="card explanation" hidden></aside></div>`;
  if (kind === "contest") {
    if (out.contest) return showContestResult(out.contest);
    state.contestDeadline = out.deadline;
    renderTask(out.task, { mode: "contest", index: out.index, total: out.total, sessionId: out.sessionId });
    return startContestTimer(out.sessionId, out.deadline);
  }
  if (out.finished) {
    $("#practice").innerHTML = out.empty ? `<p>${cfg.empty || t("session.noTasks")}</p>` : sessionDoneCard(cfg.mode, out);
    return;
  }
  renderTask(out.task, { mode: cfg.mode, index: out.index, total: out.total });
}

function sessionDoneCard(mode, n) {
  return `<div class="card result celebrate"><div class="result-icon">${icon("trophy")}</div><h2>${SESSION_DONE[mode] || t("common.done")}!</h2>
    <p>${t("result.firstTry", { correct: n.correct, total: n.total })}${n.xp ? ` · +${n.xp.gained} XP` : ""}</p>
    <button class="primary big" id="fb-back">${state.backTo === "competition" ? prepBack() : t("result.toPath")}</button></div>`;
}

// Slike pri nalogah: graf premice in številska premica. Barve so enake v svetlem
// in temnem načinu (risba je na belem »listu«).
let figSeq = 0;
function figureSvg(f) {
  if (f.type === "line") return lineFigure(f);
  if (f.type === "numberline") return numberLineFigure(f);
  return "";
}

function lineFigure(f) {
  const id = `fig${++figSeq}`;
  const R = 6, S = 28, P = 22; // polmer mreže, velikost enote, rob
  const W = 2 * R * S + 2 * P;
  const X = (x) => P + (x + R) * S, Y = (y) => P + (R - y) * S;
  let g = "", nums = "";
  for (let i = -R; i <= R; i++) {
    g += `<line x1="${X(i)}" y1="${Y(-R)}" x2="${X(i)}" y2="${Y(R)}"/><line x1="${X(-R)}" y1="${Y(i)}" x2="${X(R)}" y2="${Y(i)}"/>`;
    if (i && Math.abs(i) < R) {
      nums += `<text x="${X(i)}" y="${Y(0) + 17}" text-anchor="middle">${i < 0 ? "−" + -i : i}</text>`;
      nums += `<text x="${X(0) - 7}" y="${Y(i) + 4}" text-anchor="end">${i < 0 ? "−" + -i : i}</text>`;
    }
  }
  const f0 = (x) => f.k * x + f.n;
  // Do tri točke s celimi koordinatami blizu izhodišča; dotik pokaže koordinate.
  const pts = [];
  for (let x = -R + 1; x < R; x++) if (Math.abs(f0(x)) < R) pts.push(x);
  pts.sort((a, b) => Math.abs(a) + Math.abs(f0(a)) - (Math.abs(b) + Math.abs(f0(b))));
  const shown = pts.slice(0, 3).sort((a, b) => a - b);
  const ptsSvg = shown
    .map((x) => {
      const y = f0(x);
      const right = X(x) < W - 90;
      return `<g class="fig-pt" tabindex="0" role="button" aria-label="${t("task.pointAria", { x, y })}">
        <circle cx="${X(x)}" cy="${Y(y)}" r="14" class="hit"/><circle cx="${X(x)}" cy="${Y(y)}" r="6.5" class="dot"/>
        <text x="${X(x) + (right ? 12 : -12)}" y="${Y(y) - 10}" text-anchor="${right ? "start" : "end"}" class="coord">(${x}, ${y})</text></g>`;
    })
    .join("");
  return `<figure class="fig"><svg viewBox="0 0 ${W} ${W}" role="img" aria-label="${t("task.graphAria")}">
    <defs><marker id="${id}a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="arrow"/></marker>
      <clipPath id="${id}c"><rect x="${X(-R)}" y="${Y(R)}" width="${2 * R * S}" height="${2 * R * S}"/></clipPath></defs>
    <rect x="0" y="0" width="${W}" height="${W}" rx="14" class="paper"/>
    <g class="grid">${g}</g>
    <line x1="${X(-R)}" y1="${Y(0)}" x2="${X(R) + 12}" y2="${Y(0)}" class="axis" marker-end="url(#${id}a)"/>
    <line x1="${X(0)}" y1="${Y(-R)}" x2="${X(0)}" y2="${Y(R) - 12}" class="axis" marker-end="url(#${id}a)"/>
    <g class="nums">${nums}<text x="${X(0) - 7}" y="${Y(0) + 17}" text-anchor="end">0</text></g>
    <text x="${X(R) + 6}" y="${Y(0) - 10}" class="axis-name">x</text><text x="${X(0) + 10}" y="${Y(R) - 4}" class="axis-name">y</text>
    <line clip-path="url(#${id}c)" x1="${X(-R - 1)}" y1="${Y(f0(-R - 1))}" x2="${X(R + 1)}" y2="${Y(f0(R + 1))}" class="plot"/>
    ${ptsSvg}</svg>
    <figcaption>${icon("info")} ${t("task.tapPoint")}</figcaption></figure>`;
}

function numberLineFigure(f) {
  const id = `fig${++figSeq}`;
  const S = 40, P = 26, from = f.x0 - 5, to = f.x0 + 5;
  const W = (to - from) * S + 2 * P, H = 84, Y = 40;
  const X = (x) => P + (x - from) * S;
  let ticks = "";
  for (let x = from; x <= to; x++) {
    ticks += `<line x1="${X(x)}" y1="${Y - 7}" x2="${X(x)}" y2="${Y + 7}" class="tick"/><text x="${X(x)}" y="${Y + 28}" text-anchor="middle" class="${x === f.x0 ? "strong" : ""}">${x < 0 ? "−" + -x : x}</text>`;
  }
  const end = f.dir < 0 ? P - 8 : W - P + 8;
  return `<figure class="fig wide"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${t("task.lineAria")}">
    <defs><marker id="${id}a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="arrow"/></marker>
      <marker id="${id}b" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="ray-arrow"/></marker></defs>
    <rect x="0" y="0" width="${W}" height="${H}" rx="14" class="paper"/>
    <line x1="${P - 14}" y1="${Y}" x2="${W - P + 14}" y2="${Y}" class="axis" marker-end="url(#${id}a)"/>
    ${ticks}
    <line x1="${X(f.x0)}" y1="${Y}" x2="${end}" y2="${Y}" class="ray" marker-end="url(#${id}b)"/>
    <circle cx="${X(f.x0)}" cy="${Y}" r="8" class="${f.closed ? "closed" : "open"}"/></svg></figure>`;
}

// Dotik točke na grafu pokaže ali skrije njene koordinate.
document.addEventListener("click", (e) => e.target.closest(".fig-pt")?.classList.toggle("show"));
document.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.closest?.(".fig-pt")) {
    e.preventDefault();
    e.target.closest(".fig-pt").classList.toggle("show");
  }
});

// Na širokem zaslonu je med serijo nalog desno razlaga teme trenutne naloge (ne pri preizkusu znanja in tekmovanju).
const SIDE_MODES = ["review", "daily", "unit", "test", "tek"];
const topicCache = new Map();
async function showSideExplanation(task, ctx) {
  const side = $("#session-side");
  if (!side) return;
  if (!SIDE_MODES.includes(ctx.mode) || !task.topicId) return (side.hidden = true);
  if (side.dataset.topic === task.topicId) return;
  side.dataset.topic = task.topicId;
  try {
    if (!topicCache.has(task.topicId)) topicCache.set(task.topicId, await api(`/api/topic?id=${encodeURIComponent(task.topicId)}`));
    const tp = topicCache.get(task.topicId);
    if (side.dataset.topic !== task.topicId) return;
    side.innerHTML = `<h2 class="with-icon">${icon("book-open")} ${escapeHtml(tp.name)}</h2>${
      tp.explanation ? renderRich(tp.explanation) : `<p class="muted">${t("topic.noExplanationShort")}</p>`
    }<button type="button" class="secondary small" id="side-lesson">${icon("book-open")}${t("topic.fullLesson")}</button>`;
    side.hidden = false;
    $("#side-lesson").addEventListener("click", () => openLesson(t.id));
  } catch {
    side.hidden = true;
  }
}

function renderTask(task, ctx) {
  showSideExplanation(task, ctx);
  const box = $("#practice");
  // Tekmovalna imena težavnosti (težja, zahtevna, izziv) samo pri slovenskih tekmovanjih, ne pri izpitih.
  const comp = !examMode() && (ctx.mode === "tek" || ctx.mode === "contest" || (ctx.mode === "practice" && isCompTopic(state.topic?.id)));
  const stars = !["placement", "pretest"].includes(ctx.mode) && task.level ? diffBadge(task.level, comp) : "";
  const pts = ctx.mode === "contest" && task.points ? `<span class="pts">${t("task.points", { n: task.points })}</span>` : "";
  const counter = ctx.total ? `<span class="count">${ctx.index} / ${ctx.total}</span>` : "";
  let input;
  if (task.answerType === "choice") {
    input = `<div class="choices">${task.options
      .map((o, i) => `<button type="button" class="choice" data-i="${i}">${task.optionsTex ? renderMath(o, false) : escapeHtml(o)}</button>`)
      .join("")}</div>`;
  } else {
    const ph =
      task.inputHint ||
      (task.answerType === "coefficients" ? t("task.phCoef") : task.unit ? t("task.phUnit", { unit: task.unit }) : t("task.phResult"));
    input = `<form class="answer-row"><input id="answer" autocomplete="off" inputmode="${task.answerType === "number" && !task.unit ? "decimal" : "text"}" placeholder="${escapeHtml(ph)}"><button type="button" class="pad-open-btn secondary" title="${t("task.writeTitle")}">${icon("pencil")}<span>${t("task.write")}</span></button><button class="primary">${t("task.check")}</button></form>`;
  }
  const calcBtn = ["contest", "placement", "pretest"].includes(ctx.mode) ? "" : `<button type="button" class="ghost task-calc icon-only" title="${escapeHtml(t("nav.graph"))}" aria-label="${escapeHtml(t("nav.graph"))}">${icon("calculator")}</button>`;
  const bar = ctx.mode === "contest" ? `<div class="contest-bar"><span id="contest-timer" class="contest-timer" role="timer">${icon("timer")}<b>${leftText(state.contestDeadline)}</b></span><span class="muted">${t("comp.timerNote")}</span></div>` : "";
  const penalty = ctx.mode === "contest" && task.penalty ? `<span class="pts neg">${t("exam.penaltyPts", { n: String(task.penalty).replace("-", "−") })}</span>` : "";
  const hintLadder = task.hintSteps > 0 && !["contest", "placement", "pretest"].includes(ctx.mode);
  const pretestHead =
    ctx.mode === "pretest" ? `<div class="card pretest-head"><h2 class="with-icon">${icon("target")} ${t("pretest.title")}</h2><p class="muted">${t("pretest.intro")}</p></div>` : "";
  box.innerHTML = `${bar}${pretestHead}<div class="card task">
    <div class="task-top task-tag"><span class="task-topic">${task.topicName ? escapeHtml(task.topicName) : ""}</span>${stars}${pts}${penalty}${counter}${calcBtn}</div>
    ${ctx.total ? `<div class="progress" aria-hidden="true"><div style="width:${Math.round(((ctx.index - 1) / ctx.total) * 100)}%"></div></div>` : ""}
    <div class="task-text">${renderRich(task.text)}</div>
    ${task.figure ? figureSvg(task.figure) : ""}
    ${workHtml()}
    ${input}
    ${hintLadder ? `<div id="hint-box" class="hint-box" aria-live="polite"></div><div class="hint-row"><button type="button" class="ghost small" id="hint-btn">${icon("lightbulb")}<span>${t("task.hintBtn")}</span></button></div>` : ""}
    <div id="feedback" class="feedback" aria-live="polite"></div>
    ${ctx.mode === "pretest" ? `<div class="contest-actions"><button type="button" class="secondary small" id="p-skip">${icon("circle-help")}${t("pretest.dontKnow")}</button></div>` : ""}
    ${ctx.mode === "contest" ? `<div class="contest-actions"><button type="button" class="secondary small" id="c-skip">${icon("skip-forward")}${t("comp.skip")}</button><button type="button" class="text-btn" id="c-finish">${icon("flag")}${examMode() ? t("exam.finish") : t("comp.finish")}</button></div>` : ""}
  </div>`;
  wireWork(box, task);
  const submit = (value) => checkTask(task, ctx, value);
  // Lestev namigov: vsak klik odpre en korak več (podatki → formula → prvi korak).
  let hintShown = 0;
  $("#hint-btn")?.addEventListener("click", async () => {
    const btn = $("#hint-btn");
    btn.disabled = true;
    try {
      const r = await api(`/api/students/${state.student.id}/tasks/${task.id}/hint`, { method: "POST", body: { step: hintShown + 1 } });
      hintShown = r.steps.length;
      $("#hint-box").innerHTML = r.steps.map((st, i) => hintStepHtml(st, i + 1, r.total)).join("");
      if (hintShown >= r.total) btn.remove();
      else {
        btn.disabled = false;
        btn.querySelector("span").textContent = t("task.hintMore");
      }
    } catch (err) {
      btn.disabled = false;
      $("#hint-box").innerHTML = `<div class="fb bad">${escapeHtml(err.message)}</div>`;
    }
  });
  box.querySelector(".task-calc")?.addEventListener("click", async () => {
    const exprs = mayPlot(task.text) ? await plotFromText(task.text) : [];
    // enačba krivulje → graf, sicer računalo
    openCalcOverlay(exprs.length ? { mode: "graph", exprs, backLabel: t("gc.backTask") } : { mode: calcSubject() === "KEM" ? "pse" : calcMode === "graph" ? "sci" : calcMode, backLabel: t("gc.backTask") });
  });
  $("#p-skip")?.addEventListener("click", async () => {
    $("#p-skip").disabled = true;
    const r = await api(`/api/students/${state.student.id}/tasks/${task.id}/skip`, { method: "POST" }).catch((e) => ({ error: e.message }));
    if (r.error) return toast(r.error);
    pretestStep(r, ctx);
  });
  if (ctx.mode === "contest") {
    $("#c-skip").addEventListener("click", async () => {
      if (!confirm(t("comp.confirmSkip"))) return;
      contestStep(await api(`/api/students/${state.student.id}/tasks/${task.id}/skip`, { method: "POST" }).catch((e) => ({ error: e.message })), ctx);
    });
    $("#c-finish").addEventListener("click", async () => {
      if (!confirm(examMode() ? t("exam.confirmFinish") : t("comp.confirmFinish"))) return;
      finishContest(ctx.sessionId);
    });
  }
  box.querySelector("form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    submit($("#answer").value);
  });
  box.querySelectorAll(".choice").forEach((b) => b.addEventListener("click", () => submit(b.dataset.i)));
  const form = box.querySelector("form");
  if (form) {
    attachPad({
      task,
      form,
      input: $("#answer"),
      opener: form.querySelector(".pad-open-btn"),
      readFn: (image) => api(`/api/students/${state.student.id}/tasks/${task.id}/read`, { method: "POST", body: { image } }),
    });
    if (!document.body.classList.contains("pad-open")) $("#answer").focus();
  } else closePad();
}

// ---------- vmesni koraki (kot v zvezek) in pomoč inštruktorja pri nalogi ----------
const WORK_OPEN_KEY = "stemmind.workOpen";
const workKey = (id) => `stemmind.work.${id}`;
function lsGet(k) {
  try {
    return localStorage.getItem(k);
  } catch {
    return null;
  }
}
function lsSet(k, v) {
  try {
    if (v) localStorage.setItem(k, v);
    else localStorage.removeItem(k);
  } catch {}
}
const workOf = (taskId) => (taskId ? lsGet(workKey(taskId)) || "" : "");

function workHtml() {
  return `<div class="work">
    <button type="button" class="work-toggle" aria-expanded="false">${icon("notebook-pen")}<span>${t("task.work")}</span>${icon("chevron-down")}</button>
    <div class="work-body" hidden>
      <textarea class="work-text" rows="3" spellcheck="false" placeholder="${escapeHtml(t("task.workPh"))}"></textarea>
      <button type="button" class="ghost small icon-only work-sym" aria-pressed="false" title="${escapeHtml(t("chat.symbols"))}" aria-label="${escapeHtml(t("chat.symbols"))}">${icon("sigma")}</button>
      <div class="sym-panel work-sym-panel" hidden></div>
    </div>
  </div>`;
}

// Zapis se shrani v napravo (po nalogi) in gre zraven, ko učenec vpraša inštruktorja.
function wireWork(box, task) {
  const w = box.querySelector(".work");
  if (!w) return;
  const btn = w.querySelector(".work-toggle");
  const body = w.querySelector(".work-body");
  const ta = w.querySelector(".work-text");
  const grow = () => {
    ta.style.height = "auto";
    ta.style.height = `${Math.min(ta.scrollHeight + 2, 420)}px`;
  };
  const setOpen = (open, remember) => {
    body.hidden = !open;
    w.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    if (remember) lsSet(WORK_OPEN_KEY, open ? "1" : "0");
    if (open) grow();
  };
  ta.value = workOf(task.id);
  const pref = lsGet(WORK_OPEN_KEY);
  // Na računalniku je prostor odprt, na telefonu se odpre z dotikom (manj drsenja); izbira se zapomni.
  setOpen(ta.value ? true : pref ? pref === "1" : matchMedia("(min-width: 900px) and (pointer: fine)").matches, false);
  btn.addEventListener("click", () => {
    setOpen(body.hidden, true);
    if (!body.hidden) ta.focus();
  });
  ta.addEventListener("input", () => {
    lsSet(workKey(task.id), ta.value.trim() ? ta.value : "");
    grow();
  });
  // Na telefonu bi plošča za vnos in sistemska tipkovnica skupaj prekrili vse.
  ta.addEventListener("focus", () => {
    if (padIsSheet()) closePad();
  });
  const panel = w.querySelector(".work-sym-panel");
  const symBtn = w.querySelector(".work-sym");
  const sym = mountSymbols(panel, ta, {
    settings: () => state.student?.settings,
    onChange: () => ta.dispatchEvent(new Event("input")),
  });
  symBtn.addEventListener("click", () => {
    const open = sym.toggle();
    symBtn.setAttribute("aria-pressed", String(open));
    symBtn.classList.toggle("on", open);
  });
}

const tutorRow = (taskId) =>
  taskId && navigator.onLine !== false
    ? `<div class="tutor-row" data-task="${taskId}">
        <button type="button" class="secondary small" data-tutor="explain">${icon("message-circle")}${t("task.explain")}</button>
        <button type="button" class="secondary small" data-tutor="review">${icon("clipboard-check")}${t("task.reviewTutor")}</button>
      </div>`
    : "";

// Odpre Inštruktorja z nalogo, odgovorom in vmesnimi koraki.
async function askTutorAbout(taskId, kind) {
  try {
    const h = await api(`/api/students/${state.student.id}/tasks/${taskId}/help`, { method: "POST", body: { kind, work: workOf(taskId) } });
    await loadConversations();
    showView("chat");
    await openConversation(h.conversation.id);
    send(h.text);
  } catch (err) {
    toast(err.message);
  }
}
document.addEventListener("click", (e) => {
  const b = e.target.closest(".tutor-row [data-tutor]");
  if (b) askTutorAbout(b.closest(".tutor-row").dataset.task, b.dataset.tutor);
});

function hintStepHtml(st, n, total) {
  const tex = (x) => renderMath(String(x), false);
  const head = `<b>${t("task.hintStep", { n, total })}</b> `;
  if (st.kind === "data") {
    return `<div class="fb hint">${icon("list-checks")}<div>${head}${t("task.hintData")}<div class="task-data">
      <div class="data-col"><span class="sol-label">${t("task.given")}</span><div class="data-list">${st.given.map((x) => `<div>${tex(x)}</div>`).join("")}</div></div>
      ${st.find.length ? `<div class="data-col"><span class="sol-label">${t("task.find")}</span><div class="data-list">${st.find.map((x) => `<div>${tex(`${x} = \\,?`)}</div>`).join("")}</div></div>` : ""}
    </div></div></div>`;
  }
  if (st.kind === "formula") return `<div class="fb hint">${icon("sigma")}<div>${head}${t("task.hintFormula")}<div class="formula-body">${st.formula.map((f) => `<div>${tex(f)}</div>`).join("")}</div></div></div>`;
  return `<div class="fb hint">${icon("lightbulb")}<div>${head}${renderRich(st.text)}</div></div>`;
}

// Prepoznana tipična napaka (iz generatorja ali splošni vzorec: predznak, pretvorba enot …).
const mistakeHtml = (m) => (m ? `<div class="fb info mistake">${icon("search")}<span>${escapeHtml(m.code ? fbText(m) : m.message)}</span></div>` : "");

// Rešitev z izpisanimi podatki iz besedila (Podatki / Iščemo) in formulo, skrito za gumbom.
function workedBlock(task, solution, label = t("task.solution")) {
  const d = task.data;
  const tex = (t) => renderMath(String(t), false);
  const dataHtml =
    d && Array.isArray(d.given) && d.given.length
      ? `<div class="task-data">
          <div class="data-col"><span class="sol-label">${t("task.given")}</span><div class="data-list">${d.given.map((x) => `<div>${tex(x)}</div>`).join("")}</div></div>
          ${Array.isArray(d.find) && d.find.length ? `<div class="data-col"><span class="sol-label">${t("task.find")}</span><div class="data-list">${d.find.map((x) => `<div>${tex(`${x} = \\,?`)}</div>`).join("")}</div></div>` : ""}
        </div>`
      : "";
  const formulas = task.formula ? (Array.isArray(task.formula) ? task.formula : [task.formula]) : [];
  const formulaHtml = formulas.length
    ? `<details class="formula"><summary>${icon("eye")}${t("task.showFormula")}</summary><div class="formula-body">${formulas.map((f) => `<div>${tex(f)}</div>`).join("")}</div></details>`
    : "";
  return `<div class="solution">${dataHtml}${formulaHtml}<span class="sol-label">${label}</span>${renderRich(solution)}</div>`;
}

async function checkTask(task, ctx, value) {
  const fb = $("#feedback");
  let r;
  try {
    fb.innerHTML = `<div class="fb info">${t("task.checking")}</div>`;
    r = await api(`/api/students/${state.student.id}/tasks/${task.id}/answer`, { method: "POST", body: { answer: value } });
  } catch (err) {
    // Napaka pri povezavi: učenec jo vidi, namesto da se ne zgodi nič.
    fb.innerHTML = `<div class="fb bad">${icon("circle-x")}<span>${t("task.checkError", { msg: escapeHtml(err.message) })}</span></div>`;
    return;
  }
  const next = (label = t("task.next")) => `<div class="actions"><button class="primary big" id="fb-next">${label}${icon("arrow-right")}</button></div>`;
  let html = "";
  if (ctx.mode === "contest" && !r.retry) return contestStep(r, ctx);
  if (ctx.mode === "pretest" && !r.retry) return pretestStep(r, ctx);
  if (r.retry) {
    html = `<div class="fb info">${escapeHtml(fbText(r))}</div>`;
  } else if (ctx.mode === "placement") {
    html = `<div class="fb ${r.correct ? "ok" : "bad"}">${icon(r.correct ? "circle-check" : "circle-x")}<span>${r.correct ? t("task.correct") : t("task.wrong")}</span></div>${r.message ? `<div class="fb info">${icon("info")}<span>${escapeHtml(fbText(r))}</span></div>` : ""}`;
    if (r.placement) {
      const p = r.placement;
      html += `<div class="card result ${p.passed ? "celebrate" : ""}">${p.passed ? `<div class="result-icon">${icon("award")}</div>` : ""}<h2>${p.passed ? t("placement.passed") : t("placement.notYet")}</h2>
        <p>${t("placement.score", { correct: p.correct, total: p.total })}${p.passed ? ` +${p.xp.gained} XP` : t("placement.unlocked")}</p>
        <button class="primary big" id="fb-back">${t("result.toPath")}</button></div>`;
    } else html += next();
  } else if (r.correct) {
    html = `<div class="fb ok pop">${icon("circle-check")}<span><b>${t("task.correctBang")}</b>${r.levelUp ? t("task.harder") : ""}</span><span class="xp-gain">${r.offline ? t("off.xpLater") : `+${r.xp.gained} XP`}</span></div>
      ${r.mastered ? `<div class="fb mastered pop">${icon("trophy")}<span>${t("task.mastered")}</span></div>` : ""}
      ${workedBlock(task, r.solution)}
      ${r.selfExplain ? `<div class="fb info">${icon("circle-help")}<span>${escapeHtml(r.selfExplain)}</span></div>` : ""}
      ${r.offline ? "" : tutorRow(task.id)}`;
    html += ctx.mode !== "practice" && r.next?.finished ? sessionDoneCard(ctx.mode, r.next) : next();
    if (!r.offline) refreshXp();
  } else {
    html = `<div class="fb bad shake">${icon("circle-x")}<span>${escapeHtml(fbText(r) || t("task.wrong"))}</span></div>
      ${mistakeHtml(r.mistake)}
      ${r.levelDown ? `<div class="muted">${t("task.easier")}</div>` : ""}
      ${r.hint ? `<div class="fb hint">${icon("lightbulb")}<div><b>${t("task.hint")}</b> ${renderRich(r.hint)}</div></div>` : ""}`;
    if (r.solution) {
      html += workedBlock(task, r.solution, t("task.example"));
      if (!r.offline) html += tutorRow(task.id);
      html += ctx.mode !== "practice" && r.next?.finished ? sessionDoneCard(ctx.mode, r.next) : next(ctx.mode === "practice" ? t("task.similar") : t("task.next"));
    } else {
      html += `<div class="actions"><button id="fb-retry" class="primary big">${t("task.retry")}</button>
        ${r.offline ? "" : `<button id="fb-help" class="secondary">${icon("message-circle")}${t("task.askTutor")}</button>`}</div>
        ${r.offline ? "" : `<p class="muted small-note">${t("task.attemptsLeft", { n: r.attemptsLeft })}</p>`}`;
    }
  }
  fb.innerHTML = html;
  // Ko je naloga zaključena, plošča izgine, da sta razlaga in gumb »Naprej« vidna.
  let padClosedForFeedback = false;
  if (!r.retry && (r.correct || r.solution || ctx.mode === "placement")) closePad();
  else if (!r.retry && padIsSheet()) {
    // Na telefonu plošča prekrije povratno informacijo; zapremo jo, »Poskusi znova« jo spet odpre.
    closePad();
    padClosedForFeedback = true;
  }
  fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
  $("#fb-retry")?.addEventListener("click", () => {
    fb.innerHTML = "";
    if (padClosedForFeedback) openPad();
    else $("#answer")?.select();
  });
  $("#fb-help")?.addEventListener("click", async () => {
    const h = await api(`/api/students/${state.student.id}/tasks/${task.id}/help`, { method: "POST", body: { work: workOf(task.id) } });
    await loadConversations();
    showView("chat");
    await openConversation(h.conversation.id);
    send(h.text);
  });
  $("#fb-back")?.addEventListener("click", () => showView(state.backTo || "path"));
  $("#fb-next")?.addEventListener("click", () => {
    if (ctx.mode === "practice") return nextPractice();
    const n = r.next;
    if (n && !n.finished) renderTask(n.task, { mode: ctx.mode, index: n.index, total: n.total });
  });
}

// Test predznanja: brez rešitve in namigov, takoj naslednja naloga; na koncu raven in nadaljevanje.
function pretestStep(r, ctx) {
  closePad();
  if (r.pretest) {
    const tp = state.topic;
    $("#practice").innerHTML = pretestResultHtml(r.pretest);
    $("#pt-learn").addEventListener("click", () => learnWithTutor(tp));
    $("#pt-practice").addEventListener("click", () => nextPractice());
    $("#pt-lesson").addEventListener("click", () => openLesson(tp.id));
    $("#practice").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const n = r.next;
  if (n && !n.finished) {
    toast(r.skipped ? t("pretest.skipped") : r.correct ? t("task.correct") : t("pretest.noted"), r.correct ? "circle-check" : "arrow-right");
    renderTask(n.task, { mode: "pretest", index: n.index, total: n.total });
  }
}

// ---------- tekmovanja ----------

const SCHOOL_NAMES = { OS: t("comp.os"), SS: t("comp.ss") };

async function loadCompetition(key = state.compKey) {
  const box = $("#competition-content");
  const q = key ? `?key=${encodeURIComponent(key)}` : "";
  let c;
  try {
    c = await api(`/api/students/${state.student.id}/competition${q}`);
  } catch (err) {
    box.innerHTML = `<p class="muted">${t("comp.loadError", { msg: escapeHtml(err.message) })}</p>`;
    return;
  }
  if (!c.key) {
    box.innerHTML = `<h1>${t("comp.title")}</h1><p class="muted">${escapeHtml(c.message)}</p>`;
    return;
  }
  state.compKey = c.key;
  const seg = (items, cur, attr) =>
    `<div class="seg" role="group">${items.map(([v, label]) => `<button type="button" class="${v === cur ? "active" : ""}" aria-pressed="${v === cur}" ${attr}="${v}">${label}</button>`).join("")}</div>`;
  const left = c.openContest ? Math.max(1, Math.ceil((c.openContest.deadline - Date.now()) / 60000)) : 0;
  const hist = c.history.length
    ? `<ul class="contest-history">${c.history.map((h) => `<li><span>${escapeHtml(new Date(h.date).toLocaleDateString(locale()))}</span><b>${h.points} / ${h.maxPoints}</b><span class="bar"><i style="width:${Math.round((h.points / h.maxPoints) * 100)}%"></i></span></li>`).join("")}</ul>`
    : `<p class="muted small-note">${t("comp.historyEmpty")}</p>`;
  const learning = c.units.flatMap((u) => u.topics).filter((t) => t.status !== "new").length;
  box.innerHTML = `
    <h1>${t("comp.title")}</h1>
    <div class="comp-pickers">
      ${seg(["MAT", "FIZ", "KEM"].map((k) => [k, SUBJECT_NAMES[k] || k]), c.subject, "data-comp-subject")}
      ${seg(Object.entries(SCHOOL_NAMES), c.school, "data-comp-school")}
    </div>
    <p class="muted comp-intro">${t("comp.intro", { list: c.competitions.map(escapeHtml).join(", ") })}</p>
    <div class="card xp-card comp-hero">
      <div class="hero">
        <div class="hero-icon">${icon("medal")}</div>
        <div class="hero-text"><h2>${t("session.tek")}</h2><p>${t("comp.trainText")}</p></div>
        <button class="primary big" data-comp-train>${t("common.start")}</button>
      </div>
    </div>
    <section class="card contest-card">
      <div class="contest-head">
        <span class="session-icon">${icon("timer")}</span>
        <div><h2>${t("session.contest")}</h2>
          <p class="muted">${t("comp.contestText", { tasks: c.contest.tasks, minutes: c.contest.minutes, max: c.contest.maxPoints })}</p></div>
      </div>
      <button class="primary" data-comp-contest>${c.openContest ? t("comp.continue", { n: left }) : t("comp.startContest")}</button>
      <span class="field-label">${t("comp.lastResults")}</span>
      ${hist}
    </section>
    <h2 class="comp-topics-title">${t("comp.topics")}</h2>
    <p class="muted small-note">${learning ? t("comp.topicsSaved") : t("comp.topicsFree")}</p>
    ${c.units
      .map(
        (u, ui) => `<section class="unit card">
        <div class="unit-head"><div class="ring" style="--p:${Math.round(u.progress * 100)}"><span>${Math.round(u.progress * 100)}%</span></div>
          <div class="unit-title"><span class="eyebrow">${t("unit.label", { n: ui + 1 })}</span><h2>${escapeHtml(u.title)}</h2></div></div>
        <ol class="path">${u.topics
          .map((tp) => {
            const st = tp.due ? "due" : tp.status;
            const sub = NODE[st][1] + (tp.practice && tp.status === "learning" ? ` · ${COMP_LEVEL_NAMES[tp.level]}` : "");
            return `<li><button class="node ${st}" data-open="${tp.id}"><span class="node-dot">${icon(NODE[st][0])}</span>
              <span class="node-text"><span class="node-name">${escapeHtml(tp.name)}</span><span class="node-sub">${sub}</span></span></button></li>`;
          })
          .join("")}</ol></section>`,
      )
      .join("")}`;
}

document.addEventListener("click", (e) => {
  const subj = e.target.closest("[data-comp-subject]");
  const school = e.target.closest("[data-comp-school]");
  if (subj || school) {
    const [s0, , sc0] = (state.compKey || "MAT-TEK-OS").split("-");
    loadCompetition(`${subj ? subj.dataset.compSubject : s0}-TEK-${school ? school.dataset.compSchool : sc0}`);
  }
  if (e.target.closest("[data-comp-train]")) {
    setBack("competition");
    startSession("tek", { path: state.compKey });
  }
  if (e.target.closest("[data-comp-contest]")) {
    setBack("competition");
    startSession("contest", { path: state.compKey });
  }
});

// ---------- priprave na izpite (šolski sistemi zunaj Slovenije) ----------

async function loadExams(key = state.examKey, exam = null) {
  const box = $("#competition-content");
  const q = key ? `?key=${encodeURIComponent(key)}` : exam ? `?exam=${encodeURIComponent(exam)}` : "";
  let c;
  try {
    c = await api(`/api/students/${state.student.id}/exams${q}`);
  } catch (err) {
    box.innerHTML = `<p class="muted">${t("comp.loadError", { msg: escapeHtml(err.message) })}</p>`;
    return;
  }
  if (!c.key) {
    box.innerHTML = `<h1>${t("exam.title")}</h1>`;
    return;
  }
  state.examKey = state.compKey = c.key;
  const seg = (items, cur, attr) =>
    `<div class="seg" role="group">${items.map(([v, label]) => `<button type="button" class="${v === cur ? "active" : ""}" aria-pressed="${v === cur}" ${attr}="${v}">${escapeHtml(label)}</button>`).join("")}</div>`;
  const left = c.openContest ? Math.max(1, Math.ceil((c.openContest.deadline - Date.now()) / 60000)) : 0;
  const hist = c.history.length
    ? `<ul class="contest-history">${c.history.map((h) => `<li><span>${escapeHtml(new Date(h.date).toLocaleDateString(locale()))}</span><b>${h.points} / ${h.maxPoints}</b><span class="bar"><i style="width:${Math.max(0, Math.round((h.points / h.maxPoints) * 100))}%"></i></span></li>`).join("")}</ul>`
    : `<p class="muted small-note">${t("exam.historyEmpty")}</p>`;
  const others = c.exams.other.filter((x) => x.id !== c.exam);
  const ownIds = c.exams.own.map((x) => x.id);
  const examSeg = [...c.exams.own, ...(ownIds.includes(c.exam) ? [] : [{ id: c.exam, name: c.name }])].map((x) => [x.id, x.name]);
  const m = c.mock;
  box.innerHTML = `
    <h1>${t("exam.title")}</h1>
    <div class="comp-pickers">
      ${seg(examSeg, c.exam, "data-exam")}
      ${others.length ? `<label class="field exam-other"><span class="field-label">${t("exam.otherExams")}</span><select data-exam-other><option value="">…</option>${others.map((x) => `<option value="${x.id}">${escapeHtml(`${x.name} (${x.country})`)}</option>`).join("")}</select></label>` : ""}
      ${c.subjects.length > 1 ? seg(c.subjects.map((x) => [x.key, SUBJECT_NAMES[x.subject] || x.name]), c.key, "data-exam-subject") : ""}
    </div>
    <details class="card exam-about"><summary>${icon("info")}<span><b>${escapeHtml(c.full)}</b> · ${escapeHtml(c.country)}</span></summary><p lang="en">${escapeHtml(c.about)}</p></details>
    <div class="card xp-card comp-hero">
      <div class="hero">
        <div class="hero-icon">${icon("target")}</div>
        <div class="hero-text"><h2>${t("exam.train")}</h2><p>${t("exam.trainText")}</p></div>
        <button class="primary big" data-comp-train>${t("common.start")}</button>
      </div>
    </div>
    <section class="card contest-card">
      <div class="contest-head">
        <span class="session-icon">${icon("timer")}</span>
        <div><h2>${t("exam.mock")}</h2>
          <p class="muted">${t("exam.mockText", { tasks: m.tasks, choice: m.choice, minutes: m.minutes, max: m.maxPoints })}</p>
          ${m.negative ? `<p class="muted small-note">${t("exam.negative", { p: String(m.penalty).replace("-", "−") })}</p>` : ""}
          ${m.scale ? `<p class="muted small-note">${t("exam.scaleNote", { min: m.scale[0], max: m.scale[1] })}</p>` : ""}
          ${m.graded ? `<p class="muted small-note">${t("exam.gradeNote")}</p>` : ""}</div>
      </div>
      <button class="primary" data-comp-contest>${c.openContest ? t("comp.continue", { n: left }) : t("exam.startMock")}</button>
      <span class="field-label">${t("comp.lastResults")}</span>
      ${hist}
    </section>
    <h2 class="comp-topics-title">${t("comp.topics")}</h2>
    <p class="muted small-note">${t("exam.topicsNote")}</p>
    ${c.units
      .map(
        (u, ui) => `<section class="unit card">
        <div class="unit-head"><div class="ring" style="--p:${Math.round(u.progress * 100)}"><span>${Math.round(u.progress * 100)}%</span></div>
          <div class="unit-title"><span class="eyebrow">${t("unit.label", { n: ui + 1 })}</span><h2>${escapeHtml(u.title)}</h2></div></div>
        <ol class="path">${u.topics
          .map((tp) => {
            const st = tp.due ? "due" : tp.status;
            return `<li><button class="node ${st}" data-open="${tp.id}"><span class="node-dot">${icon(NODE[st][0])}</span>
              <span class="node-text"><span class="node-name">${escapeHtml(tp.name)}</span><span class="node-sub">${NODE[st][1]}</span></span></button></li>`;
          })
          .join("")}</ol></section>`,
      )
      .join("")}`;
}

document.addEventListener("click", (e) => {
  const ex = e.target.closest("[data-exam]");
  if (ex) loadExams(null, ex.dataset.exam);
  const sub = e.target.closest("[data-exam-subject]");
  if (sub) loadExams(sub.dataset.examSubject);
});
document.addEventListener("change", (e) => {
  const sel = e.target.closest("[data-exam-other]");
  if (sel?.value) loadExams(null, sel.value);
});

// Odgovor ali preskok pri poskusnem tekmovanju: brez povratne informacije, takoj naslednja naloga.
function contestStep(r, ctx) {
  if (r.error) return toast(r.error);
  if (r.contest) return showContestResult(r.contest, r.timeUp);
  const n = r.next;
  if (n && !n.finished) {
    toast(r.skipped ? t("comp.skipped") : t("comp.saved"), r.skipped ? "skip-forward" : "check");
    renderTask(n.task, { mode: "contest", index: n.index, total: n.total, sessionId: n.sessionId });
    $("#practice").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

async function finishContest(sessionId, timeUp = false) {
  try {
    const r = await api(`/api/students/${state.student.id}/contest/finish`, { method: "POST", body: { sessionId } });
    showContestResult(r.contest, timeUp);
  } catch (err) {
    toast(err.message);
  }
}

function startContestTimer(sessionId, deadline) {
  stopContestTimer();
  const tick = () => {
    const el = $("#contest-timer");
    const ms = deadline - Date.now();
    if (el) {
      el.querySelector("b").textContent = leftText(deadline);
      el.classList.toggle("warn", ms <= 300000);
    }
    if (ms <= 0) {
      stopContestTimer();
      finishContest(sessionId, true);
    }
  };
  tick();
  state.contestTimer = setInterval(tick, 1000);
}
function leftText(deadline) {
  const s = Math.max(0, Math.ceil(((deadline || 0) - Date.now()) / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
function stopContestTimer() {
  if (state.contestTimer) clearInterval(state.contestTimer);
  state.contestTimer = null;
}

function showContestResult(c, timeUp = false) {
  stopContestTimer();
  closePad();
  const yours = (it) => {
    if (it.yourAnswer == null) return t("comp.noAnswer");
    if (it.task?.answerType === "choice") return it.task.options?.[Number(it.yourAnswer)] ?? it.yourAnswer;
    return it.yourAnswer;
  };
  const pct = c.maxPoints ? Math.round((c.points / c.maxPoints) * 100) : 0;
  $("#practice").innerHTML = `<div class="card result ${pct >= 50 ? "celebrate" : ""}">
      <div class="result-icon">${icon("medal")}</div>
      ${timeUp ? `<p class="muted">${t("comp.timeUp")}</p>` : ""}
      <h2 class="score-line">${t("comp.score", { points: `<span class="count-up" data-to="${Number(c.points) || 0}">0</span>`, max: c.maxPoints })}</h2>
      <div class="score-bar" aria-hidden="true"><div style="--pct:${Math.max(0, Math.min(100, pct))}%"></div></div>
      <p>${t("comp.summary", { correct: c.correct, total: c.total, minutes: c.minutes })}${c.xp ? ` · +${c.xp.gained} XP` : ""}</p>
      ${c.scaled ? `<p>${t("exam.scaled", { value: c.scaled.value, min: c.scaled.min, max: c.scaled.max })}</p>` : ""}
      ${c.grade ? `<p>${t("exam.grade", { grade: escapeHtml(c.grade) })}</p>` : ""}
      ${c.wrong && c.items.some((x) => x.earned < 0) ? `<p class="muted">${t("exam.wrongPenalty", { n: c.wrong })}</p>` : ""}
      <p class="muted">${examMode() ? (pct >= 75 ? t("exam.great") : pct >= 50 ? t("exam.good") : t("exam.hard")) : pct >= 75 ? t("comp.great") : pct >= 50 ? t("comp.good") : t("comp.hard")}</p>
      <button class="primary big" id="fb-back">${prepBack()}</button>
    </div>
    <h2 class="comp-topics-title">${t("comp.review")}</h2>
    ${c.items
      .map((it, i) => {
        const st = it.correct ? "ok" : it.yourAnswer == null ? "skip" : "bad";
        return `<details class="card review-item ${st}" style="--i:${i}">
        <summary><span class="ri-icon">${icon(st === "ok" ? "circle-check" : st === "skip" ? "skip-forward" : "circle-x")}</span>
          <span class="ri-name">${i + 1}. ${escapeHtml(it.topicName)}</span><span class="ri-pts">${it.earned}/${it.points}</span></summary>
        ${
          it.task
            ? `<div class="task-text">${renderRich(it.task.text)}</div>
          ${it.task.answerType === "choice" ? `<div class="choices static">${it.task.options.map((o, k) => `<div class="choice ${String(k) === String(it.yourAnswer) ? "picked" : ""} ${k === it.task.correctIndex ? "right" : ""}">${it.task.optionsTex ? renderMath(o, false) : escapeHtml(o)}</div>`).join("")}</div>` : ""}
          <p><b>${t("comp.yourAnswer")}</b> ${it.task.optionsTex && it.yourAnswer != null && it.task.answerType === "choice" ? renderMath(yours(it), false) : escapeHtml(yours(it))}</p>
          ${workedBlock(it.task, it.task.solution)}
          ${tutorRow(it.taskId)}`
            : `<p class="muted">${t("comp.notReached")}</p>`
        }
      </details>`;
      })
      .join("")}`;
  $("#fb-back").addEventListener("click", () => showView("competition"));
  countUp($("#practice .count-up"));
  refreshXp();
}

// Število točk se prešteje od 0 navzgor (brez animacije, če jih učenec ne želi).
function countUp(el, ms = 900) {
  if (!el) return;
  const to = Number(el.dataset.to) || 0;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !to) {
    el.textContent = String(to);
    return;
  }
  const t0 = performance.now();
  const step = (now) => {
    const k = Math.min(1, (now - t0) / ms);
    el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 3))));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ---------- poraba in lestvica ----------

async function loadUsage() {
  // Poraba je samo za skrbnika: strežnik drugim vrne 403, kartica ostane skrita.
  const card = $("#usage")?.closest(".card");
  const res = await fetch("/api/usage").catch(() => null);
  if (card) card.hidden = !res?.ok;
  if (!res?.ok) return;
  const u = await res.json();
  const eur = (x) => (x || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 3 });
  const L = u.limits || {};
  $("#usage").innerHTML = `<p>${t("usage.total", { usd: u.month_usd.toFixed(2) })}${t("usage.eur", { eur: eur(u.month_eur) })}${u.budget_usd ? t("usage.budget", { budget: u.budget_usd }) : ""}${
    u.daily_questions ? t("usage.limit", { n: u.daily_questions }) : ""
  }</p>
  <p>${t("usage.summary", { active: u.active_students, avg: eur(u.per_active_eur), msg: eur(u.per_message_eur), proj: eur(u.projected_eur) })}</p>
  <p class="muted">${t("usage.saved", { count: u.saved_answers || 0 })}</p>
  ${L.daily_deep || L.student_soft_usd || L.student_hard_usd ? `<p class="muted">${t("usage.limits", { deep: L.daily_deep ?? "∞", soft: L.student_soft_usd ?? "∞", hard: L.student_hard_usd ?? "∞" })}</p>` : ""}
  <table class="table"><thead><tr><th>${t("usage.student")}</th><th>${t("usage.calls")}</th><th>${t("usage.savedCol")}</th><th>${t("usage.tokens")}</th><th>${t("usage.cost")}</th></tr></thead><tbody>
  ${u.students
    .map((s) => `<tr><td>${escapeHtml(s.name)}</td><td>${s.calls}</td><td>${s.saved || 0}</td><td>${s.input_tokens} / ${s.output_tokens} / ${s.cache_read_tokens}</td><td>${eur(s.cost_eur)} € <span class="muted">(${s.cost_usd.toFixed(3)} $)</span></td></tr>`)
    .join("")}</tbody></table>
  ${(u.by_model || []).length ? `<table class="table"><thead><tr><th>${t("usage.model")}</th><th>${t("usage.calls")}</th><th>${t("usage.tokens")}</th><th>${t("usage.cost")}</th></tr></thead><tbody>
  ${u.by_model
    .map((m) => `<tr><td>${escapeHtml(m.model)} <span class="muted">· ${escapeHtml(m.kind)}</span></td><td>${m.calls}</td><td>${m.input_tokens} / ${m.output_tokens} / ${m.cache_read_tokens}</td><td>${eur(m.cost_eur)} €</td></tr>`)
    .join("")}</tbody></table>` : ""}`;
}

// ---------- uvodni ogled ----------

const TOUR = [
  { sel: "#xp-card", title: t("daily.title"), text: t("tour.dailyText") },
  { sel: "#path-content .unit", title: t("nav.path"), text: t("tour.pathText") },
  { sel: "#modebar", title: t("tour.modes"), text: t("tour.modesText") },
  { sel: '#tabbar [data-view="me"]', title: t("nav.me"), text: t("tour.meText") },
  { sel: '.tab[data-view="chat"]', title: t("nav.chat"), text: t("tour.chatText") },
];
const TOUR_KEY = "stemmind.tour";

function startTour() {
  const box = $("#tour");
  let i = 0;
  const show = () => {
    const step = TOUR[i];
    const target = [...document.querySelectorAll(step.sel)].find((el) => el.getClientRects().length); // vidni (telefon ali računalnik)
    if (!target) return next();
    target.scrollIntoView({ block: "nearest" });
    const r = target.getBoundingClientRect();
    const pad = 6;
    Object.assign(box.querySelector(".tour-spot").style, {
      left: `${r.left - pad}px`,
      top: `${r.top - pad}px`,
      width: `${r.width + 2 * pad}px`,
      height: `${Math.min(r.height, innerHeight * 0.5) + 2 * pad}px`,
    });
    const card = box.querySelector(".tour-card");
    const below = r.top + Math.min(r.height, innerHeight * 0.5) / 2 < innerHeight / 2;
    card.style.top = below ? `${Math.min(r.top + Math.min(r.height, innerHeight * 0.5) + 16, innerHeight - 220)}px` : "auto";
    card.style.bottom = below ? "auto" : `${Math.max(innerHeight - r.top + 16, 16)}px`;
    box.querySelector(".tour-step").textContent = `${i + 1} / ${TOUR.length}`;
    box.querySelector("#tour-title").textContent = step.title;
    box.querySelector(".tour-text").textContent = step.text;
    box.querySelector('[data-tour="next"]').textContent = i === TOUR.length - 1 ? t("tour.start") : t("tour.next");
  };
  const end = () => {
    box.hidden = true;
    try {
      localStorage.setItem(TOUR_KEY, "done");
    } catch {}
  };
  const next = () => (++i >= TOUR.length ? end() : show());
  box.querySelector('[data-tour="next"]').onclick = next;
  box.querySelector('[data-tour="skip"]').onclick = end;
  box.hidden = false;
  show();
}
function maybeTour() {
  let seen = null;
  try {
    seen = localStorage.getItem(TOUR_KEY);
  } catch {}
  if (!seen) setTimeout(startTour, 400);
}
$("#tour-again").addEventListener("click", () => {
  showView("path");
  setTimeout(startTour, 500);
});

// ---------- kalkulatorji (public/graph/): znanstveni, grafični, pretvornik enot ----------
// Naložijo se šele ob prvem odprtju. Vsako orodje obstaja enkrat: v zavihku Kalkulator ali
// čez cel zaslon (iz Učne poti, vadnice, naloge in Inštruktorja), z gumbom nazaj.

const CALC_MODES = ["sci", "graph", "tools", "pse", "formulas"];
let calcMode = "sci";
try {
  if (CALC_MODES.includes(localStorage.getItem("stemmind.calcMode"))) calcMode = localStorage.getItem("stemmind.calcMode");
} catch {}
const calcTools = {};
let calcP = null; // grafični kalkulator
function calcOverlayOpen() {
  return !$("#graph-overlay").hidden;
}
function calcSlot() {
  return calcOverlayOpen() ? $("#graph-overlay-body") : $("#graph-slot");
}

function graphCalc() {
  calcP ||= import("./graph/calc.js").then(({ createCalculator }) => {
    const host = document.createElement("div");
    host.id = "graph-host";
    return createCalculator(host, {
      t,
      icon,
      locale,
      api,
      toast: (m) => toast(m, "check"),
      storageKey: () => `stemmind.graph.${state.student?.id ?? 0}`,
      studentId: () => state.student?.id,
      askTutor: (text) => {
        closeCalcOverlay();
        showView("chat");
        const box = $("#input");
        box.value = text;
        autoGrow();
        box.focus();
      },
      symbols: (panel, field, onChange) => mountSymbols(panel, field, { settings: () => state.student?.settings, onChange }),
    });
  });
  return calcP;
}
// predmet, ki ga učenec trenutno dela (tema v vadnici, sicer nastavitev)
function calcSubject() {
  const id = !$("#view-topic").hidden ? state.topic?.id : null;
  return (id && /^[A-Z]+/.exec(id)?.[0]) || state.student?.settings?.subject || "MAT";
}
function formulaBook() {
  const s = calcSubject();
  const subj = ["MAT", "FIZ", "KEM"].includes(s) ? s : "MAT";
  const track = state.student?.settings?.educational_track;
  return `${subj}-${track === "OSNOVNA_SOLA" ? "OS" : track === "UNIVERZA" ? "UNI" : "SS"}`;
}
async function insertIntoCalc(text) {
  const tool = await setCalcMode("sci");
  tool.insert(text);
}
function calcTool(mode) {
  if (mode === "graph") return graphCalc();
  calcTools[mode] ||= (mode === "sci" ? import("./graph/sci.js") : import("./graph/tools.js")).then((m) => {
    const host = document.createElement("div");
    const base = { t, icon, locale, onInsert: insertIntoCalc };
    if (mode === "sci") return m.createScientific(host, { ...base, storageKey: () => `stemmind.sci.${state.student?.id ?? 0}` });
    if (mode === "tools") return m.createTools(host, { ...base, subject: calcSubject });
    if (mode === "pse") return m.createPse(host, { ...base, lang: currentLang });
    return m.createFormulas(host, { ...base, api, renderRich, bookKey: formulaBook });
  });
  return calcTools[mode];
}
/** Pokaže izbrano orodje v zavihku ali v prekrivnem oknu. */
async function setCalcMode(mode) {
  if (!CALC_MODES.includes(mode)) mode = "sci";
  calcMode = mode;
  try {
    localStorage.setItem("stemmind.calcMode", mode);
  } catch {}
  document.querySelectorAll(".calc-modes [data-calc-mode]").forEach((b) => {
    b.classList.toggle("active", b.dataset.calcMode === mode);
    b.setAttribute("aria-selected", String(b.dataset.calcMode === mode));
  });
  if (mode !== "graph") document.body.classList.remove("gc-kp");
  const tool = await calcTool(mode);
  if (calcMode !== mode) return; // medtem izbran drug način
  // zgodovina in grafi so po učencih: ob menjavi učenca naložimo njegove
  if (tool._student !== state.student?.id) {
    if (tool._student !== undefined) tool.reload?.();
    tool._student = state.student?.id;
  }
  if (mode === "formulas" || mode === "tools") tool.reload();
  const slot = calcSlot();
  if (tool.root.parentElement !== slot) slot.replaceChildren(tool.root);
  tool.resize?.();
  return tool;
}
document.querySelectorAll(".calc-modes").forEach((seg) =>
  seg.addEventListener("click", (e) => {
    const b = e.target.closest("[data-calc-mode]");
    if (b) setCalcMode(b.dataset.calcMode);
  }),
);
function showGraph() {
  return setCalcMode(calcMode);
}
/** Odpre kalkulator čez cel zaslon. mode: "sci" | "graph" | "units"; exprs: izrazi za graf. */
async function openCalcOverlay({ mode = calcMode, exprs = [], backLabel = t("nav.back") } = {}) {
  $("#graph-close-label").textContent = backLabel;
  $("#graph-close").setAttribute("aria-label", backLabel);
  if ($("#graph-overlay").hidden) overlayOpened();
  $("#graph-overlay").hidden = false;
  document.body.classList.add("graph-open");
  const tool = await setCalcMode(mode);
  if (mode === "graph" && exprs.length) tool.show(exprs);
  return tool;
}
// združljivost: grafični kalkulator z izrazi (inštruktor, preizkusi)
const openGraphOverlay = (exprs = [], backLabel = t("nav.back")) => openCalcOverlay({ mode: "graph", exprs, backLabel });
function closeCalcOverlay({ fromBack = false } = {}) {
  if (!calcOverlayOpen()) return;
  if (!fromBack) overlayClosed();
  $("#graph-overlay").hidden = true;
  document.body.classList.remove("graph-open", "gc-kp");
  $("#graph-overlay-body").replaceChildren();
  if (!$("#view-graph").hidden) setCalcMode(calcMode);
}
$("#graph-close").addEventListener("click", () => closeCalcOverlay());
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && calcOverlayOpen() && !document.querySelector(".gc-pop:not([hidden])")) closeCalcOverlay();
});
// gumbi »Kalkulator« v Učni poti, vadnici in Inštruktorju
document.querySelectorAll(".calc-open").forEach((b) =>
  b.addEventListener("click", () => {
    const view = document.querySelector("main.view:not([hidden])")?.id;
    const back = view === "view-chat" ? t("nav.chat") : view === "view-path" ? t("nav.path") : t("nav.back");
    // pri kemiji najprej periodni sistem, sicer zadnje uporabljeno orodje (privzeto znanstveni)
    openCalcOverlay({ mode: calcSubject() === "KEM" ? "pse" : calcMode, backLabel: back });
  }),
);
// Enačbe v besedilu (LaTeX) → izrazi za kalkulator. Hiter pregled brez nalaganja modula.
const mayPlot = (text) => /\$[^$]*(?:[xy]\s*(?:=|<|>|\\le|\\ge)|=[^$]*\bx\b)/.test(String(text || "")) && /x/.test(String(text || ""));
async function plotFromText(text) {
  const { plottableFromText } = await import("./graph/math.js");
  return plottableFromText(text);
}
// Gumb »Nariši graf« pod odgovorom inštruktorja, če ta vsebuje funkcijo ali enačbo krivulje.
async function addGraphButton(bubble, text) {
  if (!mayPlot(text) || bubble.querySelector(".graph-btn")) return;
  const exprs = await plotFromText(text);
  if (!exprs.length) return;
  const b = document.createElement("button");
  b.type = "button";
  b.className = "secondary small graph-btn";
  b.innerHTML = `${icon("chart-spline")}<span>${escapeHtml(t("chat.drawGraph"))}</span>`;
  b.addEventListener("click", (e) => {
    e.stopPropagation();
    openGraphOverlay(exprs, t("nav.chat"));
  });
  bubble.append(b);
}

// Za samodejne preizkuse v brskalniku.
window.stemmind = { openTopic, showView, openLesson, openGraphOverlay, openCalcOverlay };

initFlashcards({ api, renderRich, escapeHtml, toast, showView, getStudent: () => state.student, onDue: setCardsDue });

initTextbook({
  api,
  renderRich,
  escapeHtml,
  getStudent: () => state.student,
  openTopic,
  nextPractice,
  learnWithTutor,
  showView,
});

// ---------- zagon ----------

// Bližnjica z ikone aplikacije (dolg pritisk na ikono): /?pogled=chat odpre Inštruktorja.
const START_VIEW = ["chat", "textbook", "graph"].find((v) => v === new URLSearchParams(location.search).get("pogled"));
if (new URLSearchParams(location.search).has("pogled")) history.replaceState(null, "", location.pathname);
initInstall({ toast, onSheet: (open) => (open ? overlayOpened() : overlayClosed()) });
initFullscreen();

(async () => {
  const cfg = await api("/api/config");
  $("#mock-banner").hidden = !cfg.mock;
  initFeedback({ api, getStudent: () => state.student, showView, toast, currentLang }, cfg);
  // Starševski računi (account.js): prijava, potrditev, prvi otrok.
  let first = true;
  const start = async (o) => {
    await loadStudents();
    if (first) initUsageMeter({ escapeHtml, showView, toast });
    else refreshUsageMeter();
    if (!o?.keepView) showView("path");
    if (first && START_VIEW && !o?.keepView) showView(START_VIEW);
    first = false;
  };
  if (await initAccount({ onReady: start })) await start();
})();

// Računalnik: če zavihki z napisi ne gredo v zgornjo vrstico (ožje okno ali več zavihkov),
// jih postopoma stisnemo; zavihek brez napisa ga pokaže ob lebdenju (title).
{
  const bar = document.querySelector(".topbar");
  const tabs = bar?.querySelector(".tabs");
  if (bar && tabs) {
    // Koraki, dokler zavihki ne gredo v vrstico: ožji zavihki, brez napisa »STEMMind« ob logotipu,
    // manj pogosti zavihki samo z ikono, na koncu vsi samo z ikono (izbrani obdrži napis).
    const STEPS = ["tabs-tight", "tabs-nobrand", "tabs-minor", "tabs-compact"];
    const over = () => tabs.scrollWidth > tabs.clientWidth + 1;
    const fit = () => {
      tabs.querySelectorAll(".tab").forEach((t) => (t.title = t.textContent.trim()));
      bar.classList.remove(...STEPS);
      for (const step of STEPS) {
        if (!over()) break;
        bar.classList.add(step);
      }
    };
    new ResizeObserver(fit).observe(tabs);
    new MutationObserver(fit).observe(tabs, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ["hidden", "class"] });
    document.fonts?.ready.then(fit);
  }
}
