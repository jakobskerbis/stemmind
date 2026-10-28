// STEMMind – odjemalec (brez ogrodja).
import { attachPad, closePad, openPad, padIsSheet } from "./pad.js";
import { icon, hydrateIcons } from "./icons.js";

hydrateIcons();
import { initAccount, accountsOn, openAddChild } from "./account.js";
import { initTextbook, showTextbook, openLesson } from "./textbook.js";
import { loadLeague } from "./leagues.js";
import { PACES, DEFAULT_PACE, createPacer } from "./pace.js";
import { loadPrograms, programOptions, programsCache, programYears, subjectOptions, SUBJECT_NAMES, UNI_YEARS } from "./programs.js";

const $ = (sel) => document.querySelector(sel);
const api = async (url, opts = {}) => {
  const res = await fetch(url, {
    ...opts,
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    body: opts.body && typeof opts.body !== "string" ? JSON.stringify(opts.body) : opts.body,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Napaka ${res.status}`);
  }
  return res.json();
};

const MODE_NAMES = { A: "Vodenje", B: "Celotna rešitev" };
const LEVELS = {
  OSNOVNA_SOLA: ["6. razred", "7. razred", "8. razred", "9. razred"],
  SREDNJA_SOLA: ["1. letnik OR", "1. letnik VR", "2. letnik OR", "2. letnik VR", "3. letnik OR", "3. letnik VR", "4. letnik OR", "4. letnik VR"],
  UNIVERZA: UNI_YEARS,
};
const LEVEL_PLACEHOLDER = { OSNOVNA_SOLA: "npr. 8. razred", SREDNJA_SOLA: "npr. 2. letnik VR", UNIVERZA: "npr. 1. letnik" };

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
  html = html.replace(/@@MATH(\d+)@@/g, (_, i) => renderMath(math[i].tex, math[i].display));
  return html;
}

// ---------- pogledi ----------

function showView(name) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.view === name));
  document.querySelectorAll(".view").forEach((v) => (v.hidden = v.id !== `view-${name}`));
  if (name === "settings") {
    fillSettingsForm();
    loadUsage();
  }
  if (name === "progress") loadProgress();
  if (name === "league") loadLeague(state.student.id);
  if (name === "path") loadPath();
  if (name === "textbook") showTextbook();
  if (name !== "topic") closePad();
  if (name !== "topic") setActiveMode(null);
  window.scrollTo(0, 0);
}
document.querySelectorAll(".tab, .brand").forEach((t) => t.addEventListener("click", () => showView(t.dataset.view)));

// ---------- učenci ----------

async function loadStudents(selectId) {
  state.students = await api("/api/students");
  if (!state.students.length) {
    if (accountsOn()) return openAddChild(); // otroka doda starš s soglasjem
    const name = prompt("Kako ti je ime?", "") || "Učenec";
    state.students = [await api("/api/students", { method: "POST", body: { name } })];
  }
  const sel = $("#student-select");
  sel.innerHTML = state.students.map((s) => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join("");
  const saved = Number(selectId ?? localStorageGet("studentId"));
  const pick = state.students.find((s) => s.id === saved) || state.students[0];
  sel.value = pick.id;
  await selectStudent(pick.id);
}

async function selectStudent(id) {
  state.student = state.students.find((s) => s.id === Number(id));
  localStorageSet("studentId", state.student.id);
  state.conversationId = null;
  await loadConversations();
  if (state.conversations.length) await openConversation(state.conversations[0].id);
  else renderEmptyChat();
  if (!$("#view-settings").hidden) fillSettingsForm();
  if (!$("#view-progress").hidden) loadProgress();
  if (!$("#view-league").hidden) loadLeague(state.student.id);
  state.pathKey = null;
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
    li.innerHTML = `<span>${escapeHtml(c.title)}</span><button title="Izbriši pogovor" aria-label="Izbriši pogovor">${icon("trash-2")}</button>`;
    li.querySelector("span").addEventListener("click", () => openConversation(c.id));
    li.querySelector("button").addEventListener("click", async (e) => {
      e.stopPropagation();
      if (!confirm("Izbrišem ta pogovor?")) return;
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
  $("#chat-title").textContent = "Nov pogovor";
  const ideas = ["Kako rešim enačbo 2x + 3 = 11?", "Razloži mi Pitagorov izrek.", "Kaj je gostota?"];
  $("#messages").innerHTML = `<div class="empty">
    <div class="tutor-avatar big" aria-hidden="true">${icon("sparkles")}</div>
    <p class="big">Živjo, ${escapeHtml(state.student.name)}!</p>
    <p>Napiši nalogo ali jo fotografiraj. Skupaj jo bova rešila po korakih.</p>
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
  $("#chat-state").innerHTML = [SUBJECT_NAMES[subject], MODE_NAMES[mode], program, s.curriculum_level]
    .filter(Boolean)
    .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
    .join("");
  // Pogovor o temi učne poti: povezava na lekcijo v učbeniku.
  const topicId = state.conversationId && state.convTopic;
  if (topicId) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip chip-btn";
    b.textContent = "Preberi lekcijo";
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
      note.innerHTML = `${icon("camera")} fotografija naloge`;
      el.prepend(note);
    }
  } else {
    el.innerHTML = renderRich(text);
    if (text) addDeepButton(el, false);
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
    bubble.title = "Dotakni se za prikaz celega odgovora";

    const res = await fetch(`/api/conversations/${state.conversationId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, deep, image: image ? { media_type: image.media_type, data: image.data } : undefined }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      bubble.remove();
      throw new Error(err.error || `Napaka ${res.status}`);
    }

    let doneData = null;
    await readSse(res, {
      delta: (d) => pacer.push(d.text),
      mastered: (d) => toast(`Tema »${d.topic}« je osvojena!`, "trophy"),
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
      if (state.pacer === pacer) state.pacer = null;
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
  send(input.value.trim());
});

// ---------- fotografije ----------

async function loadImage(file) {
  if (!file || !file.type.startsWith("image/")) return;
  // Pomanjšaj na največ 1600 px, da je pošiljanje hitro in poceni.
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1200 / Math.max(bitmap.width, bitmap.height)); // manjša slika = manj žetonov
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const url = canvas.toDataURL("image/jpeg", 0.8);
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

// ---------- nastavitve ----------

// Izbira predmeta: študent ima predmete svojega programa (tudi biologijo …).
function fillSubjectOptions() {
  const f = $("#settings-form");
  const uni = f.educational_track.value === "UNIVERZA";
  const program = uni ? programsCache().find((p) => p.id === f.study_program.value) : null;
  const prev = f.subject.value || state.student?.settings?.subject;
  f.subject.innerHTML = subjectOptions(program, prev);
  if (![...f.subject.options].some((o) => o.value === prev)) f.subject.selectedIndex = 0;
}

function fillLevelOptions(track) {
  const prog = track === "UNIVERZA" ? programsCache().find((p) => p.id === $("#settings-form").study_program.value) : null;
  $("#level-options").innerHTML = (track === "UNIVERZA" ? programYears(prog) : LEVELS[track] || []).map((l) => `<option value="${l}">`).join("");
  $("#settings-form").curriculum_level.placeholder = LEVEL_PLACEHOLDER[track] || "";
  // Fakulteta: izbira programa namesto tekmovanj.
  const uni = track === "UNIVERZA";
  $("#study-program-row").hidden = !uni;
  $("#track-row").hidden = uni;
  fillSubjectOptions();
}

async function fillSettingsForm() {
  const f = $("#settings-form");
  const s = state.student.settings;
  f.name.value = state.student.name;
  f.study_program.innerHTML = programOptions(await loadPrograms(api), s.study_program);
  for (const key of ["track", "educational_track", "curriculum_level", "personality_setting"]) f[key].value = s[key];
  if (s.study_program) f.study_program.value = s.study_program;
  f.subject.innerHTML = subjectOptions(isUni(s) ? programsCache().find((p) => p.id === s.study_program) : null, s.subject);
  f.querySelector(`input[name=solving_mode][value=${s.solving_mode}]`).checked = true;
  f.manual_weaknesses.value = state.student.manual_weaknesses.join(", ");
  fillLevelOptions(s.educational_track);
}
// Hitrost izpisa je nastavitev naprave (ne profila), shrani se takoj.
{
  const sel = $("#pace-select");
  sel.innerHTML = Object.entries(PACES)
    .map(([k, p]) => `<option value="${k}">${p.label}</option>`)
    .join("");
  sel.value = PACES[localStorageGet("pace")] ? localStorageGet("pace") : DEFAULT_PACE;
  sel.addEventListener("change", () => localStorageSet("pace", sel.value));
}
$("#settings-form").study_program.addEventListener("change", () => fillLevelOptions("UNIVERZA"));
$("#settings-form").educational_track.addEventListener("change", (e) => {
  fillLevelOptions(e.target.value);
  // Ob preklopu šole stara raven ne velja več: ponudimo prvo.
  const f = $("#settings-form");
  if (!(LEVELS[e.target.value] || []).includes(f.curriculum_level.value)) f.curriculum_level.value = LEVELS[e.target.value]?.[0] || "";
  if (e.target.value === "UNIVERZA") loadPrograms(api).then(() => fillLevelOptions("UNIVERZA"));
});

$("#settings-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = e.target;
  const updated = await api(`/api/students/${state.student.id}`, {
    method: "PUT",
    body: {
      name: f.name.value,
      manual_weaknesses: f.manual_weaknesses.value,
      settings: {
        subject: f.subject.value,
        track: f.track.value,
        educational_track: f.educational_track.value,
        study_program: f.educational_track.value === "UNIVERZA" ? f.study_program.value : "",
        curriculum_level: f.curriculum_level.value,
        solving_mode: f.querySelector("input[name=solving_mode]:checked").value,
        personality_setting: f.personality_setting.value,
      },
    },
  });
  const i = state.students.findIndex((s) => s.id === updated.id);
  state.students[i] = updated;
  state.student = updated;
  $("#student-select").options[$("#student-select").selectedIndex].textContent = updated.name;
  renderState(null);
  const ok = $("#settings-saved");
  ok.hidden = false;
  setTimeout(() => (ok.hidden = true), 2000);
});

$("#new-student-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const s = await api("/api/students", { method: "POST", body: { name: e.target.name.value } });
  e.target.reset();
  await loadStudents(s.id);
  fillSettingsForm();
});

$("#delete-student").addEventListener("click", async () => {
  if (!confirm(`Res izbrišem učenca ${state.student.name} in vse njegove pogovore?`)) return;
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
    ...p.weak.map((w) => `<li class="auto" title="${Math.round(w.rate * 100)} % napak">${escapeHtml(w.topic)} (${w.subject ?? "?"})</li>`),
  ];
  weak.innerHTML = items.length ? items.join("") : `<li>Še ni podatkov.</li>`;

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
          (a) => `<div class="bar" style="height:${(a.turns / max) * 100}%" title="${a.day}: ${a.turns} potez, ${a.errors} napak">
            <div class="err" style="height:${a.turns ? (a.errors / a.turns) * 100 : 0}%"></div></div>`,
        )
        .join("")
    : `<p class="muted">Še ni aktivnosti.</p>`;

  $("#topic-rows").innerHTML = p.topics.length
    ? p.topics
        .map(
          (t) => `<tr><td>${t.subject ?? "–"}</td><td>${escapeHtml(t.topic)}</td><td>${t.turns}</td>
            <td class="${t.rate >= 0.4 && t.turns >= 3 ? "bad" : ""}">${t.errors} (${Math.round(t.rate * 100)} %)</td></tr>`,
        )
        .join("")
    : `<tr><td colspan="4" class="muted">Še ni podatkov.</td></tr>`;

  const FLAG_NAMES = { distress: "stiska", unsafe: "nevarna prošnja", injection: "poskus obiti pravila", offtopic: "izven teme" };
  const flags = p.flags.filter((f) => f.flag !== "offtopic");
  $("#flags-card").hidden = !flags.length;
  refreshXp();
  $("#flag-list").innerHTML = flags
    .map((f) => `<li>${f.created_at.slice(0, 16)} – <b>${FLAG_NAMES[f.flag] ?? f.flag}</b> v pogovoru »${escapeHtml(f.title)}«</li>`)
    .join("");
}

// Gumb »Razloži podrobneje« uporabi zmogljivejši (dražji) model samo na zahtevo.
function addDeepButton(el, wasDeep) {
  if (wasDeep || el.classList.contains("error") || el.querySelector(".deep-btn")) return;
  document.querySelectorAll(".deep-btn").forEach((x) => x.remove()); // samo pri zadnjem odgovoru
  const b = document.createElement("button");
  b.className = "deep-btn";
  b.type = "button";
  b.innerHTML = `${icon("search")} Razloži podrobneje`;
  b.addEventListener("click", () => {
    b.remove();
    send("Tega ne razumem dobro. Razloži podrobneje, korak za korakom.", { deep: true });
  });
  el.appendChild(b);
}

// Tiha napaka (npr. prekinjena povezava) se pokaže kot obvestilo, ne pa kot »nič se ne zgodi«.
window.addEventListener("unhandledrejection", (e) => {
  const msg = e.reason?.message || String(e.reason || "");
  if (msg) toast(`Napaka: ${msg}`, "circle-x");
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

const LEVEL_NAMES = { 1: "lahka", 2: "srednja", 3: "težka" };
const NODE = {
  locked: ["lock", "zaklenjeno"],
  due: ["rotate-ccw", "za ponovitev"],
  mastered: ["check", "osvojeno"],
  learning: ["pencil", "v učenju"],
  new: ["play", "še ne"],
};
const diffBadge = (level) =>
  `<span class="diff d${level}" title="Težavnost"><span class="dots"><i></i><i></i><i></i></span>${LEVEL_NAMES[level] || ""}</span>`;

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
  const badge = $("#modebar .badge");
  badge.hidden = !m.reviewBacklog;
  badge.textContent = m.reviewBacklog;
  badge.title = `${m.reviewBacklog} nalog za ponavljanje`;
  const daily = $('#modebar [data-mode="daily"]');
  daily.classList.toggle("done", m.daily.done);
  daily.title = m.daily.done ? "Današnji trening je opravljen" : m.daily.open ? "Nadaljuj današnji trening" : "Približno 15 minut: nova snov in ponavljanje";
  return m;
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
      <h2>${icon("repeat")} Najprej 5 minut ponavljanja?</h2>
      <p>Nabralo se je <b>${m.reviewBacklog}</b> nalog za ponavljanje. Kratka ponovitev pomaga, da osvojeno znanje ne zbledi. Lahko pa takoj nadaljuješ z novo snovjo.</p>
      <div class="actions"><button class="primary" id="sg-review">Da, 5 minut ponavljanja</button><button id="sg-new">Ne, nova snov</button></div>
    </div>`;
    $("#sg-review").addEventListener("click", () => startSession("review", { quick: true }));
    $("#sg-new").addEventListener("click", () => goNew({ skipHint: true }));
    return;
  }
  if (!m?.newTopic) {
    showView("path");
    toast("Vse teme te poti so osvojene. Izberi drugo pot ali ponavljaj.", "trophy");
    return;
  }
  await openTopic(m.newTopic.id);
  if (m.newTopic.practice) await nextPractice();
}

async function showTestPrep(edit = false) {
  setActiveMode("test");
  const { plan } = await api(`/api/students/${state.student.id}/test-plan`);
  showView("topic");
  const box = $("#topic-content");
  if (plan && !edit && plan.daysLeft >= 0) {
    const when = plan.daysLeft === 0 ? "danes" : plan.daysLeft === 1 ? "jutri" : `čez ${plan.daysLeft} dni`;
    box.innerHTML = `<h1 class="with-icon">${icon("clipboard-check")} Priprava na test</h1>
      <div class="card"><p>Test je <b>${when}</b> (${escapeHtml(new Date(plan.date).toLocaleDateString("sl-SI"))}).</p>
      <p class="muted">Snov: ${plan.unitTitles.map(escapeHtml).join(", ")}</p>
      <p class="muted">Vsak dan reši niz mešanih nalog iz teh sklopov. Bližje kot je test, težje so naloge.</p>
      <div class="actions"><button class="primary" id="tp-start">Začni današnji niz</button><button id="tp-edit">Spremeni</button></div></div>`;
    $("#tp-start").addEventListener("click", () => startSession("test-prep"));
    $("#tp-edit").addEventListener("click", () => showTestPrep(true));
    return;
  }
  const p = await api(`/api/students/${state.student.id}/path?key=${encodeURIComponent(state.pathKey || "")}`);
  const today = new Date().toISOString().slice(0, 10);
  const chosen = new Set(plan?.path === p.key ? plan.units : []);
  box.innerHTML = `<h1 class="with-icon">${icon("clipboard-check")} Priprava na test</h1>
    <form id="tp-form" class="card">
      <p><b>Katera snov bo na testu?</b> <span class="muted">(${escapeHtml(p.label || "")})</span></p>
      <div class="tp-units">${p.units
        .map((u, i) =>
          u.hasPractice
            ? `<label class="check"><input type="checkbox" name="unit" value="${i}" ${chosen.has(i) ? "checked" : ""}> ${escapeHtml(u.title)}</label>`
            : "",
        )
        .join("")}</div>
      <p><label><b>Datum testa</b><br><input type="date" name="date" min="${today}" value="${plan?.date && plan.date >= today ? plan.date : ""}" required></label></p>
      <div class="actions"><button class="primary">Shrani in začni</button>${plan ? `<button type="button" id="tp-del">Odstrani pripravo</button>` : ""}</div>
      <div id="tp-err" class="muted"></div>
    </form>`;
  $("#tp-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const units = f.getAll("unit").map(Number);
    if (!units.length) return ($("#tp-err").textContent = "Izberi vsaj en sklop.");
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
  }),
);

async function loadPath(key = state.pathKey) {
  const q = key ? `?key=${encodeURIComponent(key)}` : "";
  const p = await api(`/api/students/${state.student.id}/path${q}`);
  const content = $("#path-content");
  // izbira poti: vse poti predmeta oziroma vsi predmeti študijskega programa po letnikih
  const uni = isUni(state.student.settings);
  if (uni) await loadPrograms(api);
  const paths = await api(uni ? `/api/paths?program=${encodeURIComponent(state.student.settings.study_program)}` : `/api/paths?subject=${state.student.settings.subject}`);
  const opt = (x) => `<option value="${x.key}" ${x.key === p.key ? "selected" : ""}>${escapeHtml(x.label.replace(/ \((?:UL|UM|UP|UNG) [A-Z]+\)$/, ""))}${x.key === p.defaultKey ? (uni ? " (moj predmet)" : " (moja raven)") : ""}</option>`;
  $("#path-select").innerHTML = uni
    ? [1, 2, 3, 4, null]
        .map((y) => paths.filter((x) => x.year === y))
        .filter((list) => list.length)
        .map((list) => `<optgroup label="${list[0].year ? `${list[0].year}. letnik` : "Izbirni predmeti"}">${list.map(opt).join("")}</optgroup>`)
        .join("")
    : paths.map(opt).join("");
  if (!p.key) {
    content.innerHTML = `<p class="muted">${escapeHtml(p.message)}</p>`;
    return;
  }
  state.pathKey = p.key;
  // Fakulteta: vir predmetnika in opozorilo, da je osnutek.
  const prog = uni ? programsCache().find((x) => x.id === state.student.settings.study_program) : null;
  $("#path-note").hidden = !prog;
  if (prog) {
    $("#path-note").innerHTML = `${escapeHtml(prog.facultyName)}, ${escapeHtml(prog.name)} (UN, 1. stopnja). Predmeti in teme sledijo javnemu predmetniku (${escapeHtml(prog.sourceYear || "")}); jeziki, praksa in zaključno delo niso zajeti. ${prog.source ? `<a href="${escapeHtml(prog.source)}" target="_blank" rel="noopener">Uradni predmetnik</a>.` : ""}`;
  }
  const x = p.xp;
  const done = state.modes?.daily?.done;
  $("#xp-card").innerHTML = `
    <div class="hero">
      <div class="hero-icon">${icon("zap")}</div>
      <div class="hero-text"><h2>Današnji trening</h2><p>${done ? "Opravljeno za danes. Lahko narediš še en krog." : "Približno 15 minut: nova snov in malo ponavljanja."}</p></div>
      <button class="primary big" data-daily>${done ? "Še en krog" : "Začni trening"}</button>
    </div>
    ${
      p.next
        ? `<button class="next-row" data-open="${p.next.id}"><span class="eyebrow">Naslednja tema</span><span class="next-name">${escapeHtml(p.next.name)}</span>${icon("chevron-right")}</button>`
        : `<div class="next-row done">${icon("trophy")}<span class="next-name">Vse teme te poti so osvojene!</span></div>`
    }
    <div class="stats-row">
      <div><b>${x.level}</b><span>raven</span></div>
      <div><b>${x.week}</b><span>XP ta teden</span></div>
      <div><b>${x.streak}</b><span>${x.streak === 1 ? "dan" : "dni"} zapored</span></div>
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
          <div class="unit-title"><span class="eyebrow">Sklop ${ui + 1}</span><h2>${escapeHtml(u.title)}</h2>
            <span class="muted">${u.locked ? "Odklene se, ko osvojiš prejšnji sklop." : `${nDone} od ${rel.length} osvojenih`}</span></div>
        </div>
        <ol class="path">
          ${u.topics
            .map((t) => {
              const st = u.locked ? "locked" : t.due ? "due" : t.status;
              const isNext = p.next && p.next.id === t.id;
              const sub = NODE[st][1] + (t.practice && t.status === "learning" && !u.locked ? ` · ${LEVEL_NAMES[t.level]}` : "");
              return `<li><button class="node ${st} ${isNext ? "current" : ""}" data-open="${t.id}" ${u.locked ? "disabled" : ""}>
                <span class="node-dot">${icon(NODE[st][0])}</span>
                <span class="node-text"><span class="node-name">${escapeHtml(t.name)}</span><span class="node-sub">${isNext ? "Naslednja · " : ""}${sub}</span></span>
              </button></li>`;
            })
            .join("")}
        </ol>
        <div class="unit-actions">
          ${u.hasPractice && !u.locked && u.started ? `<button class="secondary small" data-unit="${ui}">${icon("puzzle")}Vadi sklop</button>` : ""}
          ${u.hasPractice && !u.mastered ? `<button class="secondary small" data-placement="${ui}">${icon("target")}${u.locked ? "Odkleni s preizkusom znanja" : "Preizkus znanja"}</button>` : ""}
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
  if (open && !open.disabled) openTopic(open.dataset.open);
  const pl = e.target.closest("[data-placement]");
  if (pl) startSession("placement", { path: state.pathKey, unit: Number(pl.dataset.placement) });
  const un = e.target.closest("[data-unit]");
  if (un) startSession("unit-practice", { path: state.pathKey, unit: Number(un.dataset.unit) });
  if (e.target.closest("[data-daily]")) startSession("daily", { path: state.pathKey });
});
$("#back-to-path").addEventListener("click", () => showView("path"));

async function openTopic(topicId) {
  const t = await api(`/api/topic?id=${encodeURIComponent(topicId)}`);
  state.topic = t;
  showView("topic");
  const hasPractice = (await api(`/api/students/${state.student.id}/path?key=${encodeURIComponent(t.path)}`)).units
    .flatMap((u) => u.topics)
    .find((x) => x.id === t.id);
  const canPractice = !!hasPractice?.practice;
  $("#topic-content").innerHTML = `
    <div class="card topic-head">
      <span class="eyebrow">${escapeHtml(t.pathLabel)} · ${escapeHtml(t.unit)}</span>
      <h1>${escapeHtml(t.name)}</h1>
      <p class="goals">${icon("target")}<span>${escapeHtml(t.goals)}</span></p>
      <div class="actions">
        ${canPractice ? `<button class="primary big" id="t-practice">${icon("pencil")}Vadi naloge</button>` : ""}
        <button class="${canPractice ? "secondary" : "primary big"}" id="t-learn">${icon("message-circle")}Razloži mi z inštruktorjem</button>
        <button id="t-lesson" class="secondary">${icon("book-open")}Lekcija</button>
      </div>
      ${hasPractice?.status === "mastered" ? "" : `<button id="t-done" class="text-btn">To temo že znam</button>`}
    </div>
    <div class="card explanation">
      <h2 class="with-icon">${icon("book-open")} Razlaga</h2>
      ${
        t.explanation
          ? renderRich(t.explanation)
          : `<p class="muted">Razlaga za to temo še ni pripravljena. Inštruktor te najprej vpraša, kaj že znaš, nato razloži po korakih.</p>`
      }
    </div>
    <div id="practice"></div>`;
  $("#t-practice")?.addEventListener("click", () => nextPractice());
  $("#t-learn").addEventListener("click", () => learnWithTutor(t));
  $("#t-lesson").addEventListener("click", () => openLesson(t.id));
  $("#t-done")?.addEventListener("click", async () => {
    if (!confirm("Res znaš to temo? Označena bo kot osvojena in se bo pojavljala pri ponavljanju.")) return;
    await api(`/api/students/${state.student.id}/topic-status`, { method: "POST", body: { topic_id: t.id, status: "mastered" } });
    toast("Tema je označena kot osvojena.");
    openTopic(t.id);
  });
}

async function learnWithTutor(t, firstMessage = `Začniva s temo: ${t.name}.`) {
  const conv = await api(`/api/students/${state.student.id}/conversations`, { method: "POST", body: { topic_id: t.id } });
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
    box.innerHTML = `<div class="card task"><div class="fb bad">${icon("circle-x")}<span>Naloge nisem mogel naložiti (${escapeHtml(err.message)}). Preveri povezavo in poskusi znova.</span></div></div>`;
    return;
  }
  if (out.example) {
    box.innerHTML = `<div class="card task example">
      <div class="task-top"><span class="eyebrow with-icon">${icon("book-open")} Rešen zgled</span></div>
      <div class="task-text">${renderRich(out.example.text)}</div>
      ${out.example.figure ? figureSvg(out.example.figure) : ""}
      ${workedBlock(out.example, out.example.solution, "Rešitev")}
      <div class="fb hint">${icon("lightbulb")}<div>${renderRich(out.example.hint)}</div></div>
      <div class="actions"><button class="primary big" id="ex-next">Zdaj ti${icon("arrow-right")}</button></div>
    </div>`;
    $("#ex-next").addEventListener("click", nextPractice);
  } else {
    renderTask(out.task, { mode: "practice" });
  }
  box.scrollIntoView({ behavior: "smooth", block: "start" });
}

const SESSIONS = {
  review: { mode: "review", icon: "repeat", title: "Ponavljanje", intro: "Mešane naloge iz tem, ki jih je čas ponoviti, da znanje ostane.", empty: "Trenutno ni ničesar za ponoviti. Naloge za ponavljanje se pojavijo nekaj dni po novi snovi." },
  placement: { mode: "placement", icon: "target", title: "Preizkus znanja", intro: "Brez namigov. Z vsaj 80 % se sklop odklene in šteje kot osvojen." },
  daily: { mode: "daily", icon: "zap", title: "Današnji trening", intro: "Približno 15 minut: nova snov, vmes ponavljanje.", empty: "Na tej poti še ni nalog za trening. Začni z novo snovjo." },
  "unit-practice": { mode: "unit", icon: "puzzle", title: "Vaja sklopa", intro: "Prepletene naloge iz vseh tem tega sklopa." },
  "test-prep": { mode: "test", icon: "clipboard-check", title: "Priprava na test", intro: "Mešane naloge iz snovi za test. Bližje kot je test, težje so." },
};
const SESSION_DONE = { review: "Ponavljanje končano", daily: "Današnji trening opravljen", unit: "Vaja sklopa končana", test: "Današnji niz za test opravljen" };

async function startSession(kind, body = {}) {
  const cfg = SESSIONS[kind];
  setActiveMode({ review: "review", daily: "daily", "test-prep": "test" }[kind] || null);
  let out;
  try {
    out = await api(`/api/students/${state.student.id}/${kind}`, { method: "POST", body });
  } catch (err) {
    toast(err.message);
    return;
  }
  showView("topic");
  $("#topic-content").innerHTML = `<div class="session-head"><span class="session-icon">${icon(cfg.icon)}</span><div><h1>${cfg.title}</h1><p class="muted">${cfg.intro}</p></div></div><div id="practice"></div>`;
  if (out.finished) {
    $("#practice").innerHTML = out.empty ? `<p>${cfg.empty || "Ni nalog."}</p>` : sessionDoneCard(cfg.mode, out);
    return;
  }
  renderTask(out.task, { mode: cfg.mode, index: out.index, total: out.total });
}

function sessionDoneCard(mode, n) {
  return `<div class="card result celebrate"><div class="result-icon">${icon("trophy")}</div><h2>${SESSION_DONE[mode] || "Končano"}!</h2>
    <p>Pravilno v prvem poskusu: <b>${n.correct} od ${n.total}</b>${n.xp ? ` · +${n.xp.gained} XP` : ""}</p>
    <button class="primary big" id="fb-back">Na učno pot</button></div>`;
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
      return `<g class="fig-pt" tabindex="0" role="button" aria-label="Točka (${x}, ${y})">
        <circle cx="${X(x)}" cy="${Y(y)}" r="14" class="hit"/><circle cx="${X(x)}" cy="${Y(y)}" r="6.5" class="dot"/>
        <text x="${X(x) + (right ? 12 : -12)}" y="${Y(y) - 10}" text-anchor="${right ? "start" : "end"}" class="coord">(${x}, ${y})</text></g>`;
    })
    .join("");
  return `<figure class="fig"><svg viewBox="0 0 ${W} ${W}" role="img" aria-label="Graf premice v koordinatnem sistemu">
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
    <figcaption>${icon("info")} Tapni oranžno točko, da vidiš njene koordinate.</figcaption></figure>`;
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
  return `<figure class="fig wide"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Številska premica z označeno rešitvijo">
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

function renderTask(task, ctx) {
  const box = $("#practice");
  const stars = ctx.mode !== "placement" && task.level ? diffBadge(task.level) : "";
  const counter = ctx.total ? `<span class="count">${ctx.index} / ${ctx.total}</span>` : "";
  let input;
  if (task.answerType === "choice") {
    input = `<div class="choices">${task.options
      .map((o, i) => `<button type="button" class="choice" data-i="${i}">${task.optionsTex ? renderMath(o, false) : escapeHtml(o)}</button>`)
      .join("")}</div>`;
  } else {
    const ph =
      task.inputHint ||
      (task.answerType === "coefficients" ? "npr. 2, 1, 2" : task.unit ? `število in enota, npr. 12,5 ${task.unit}` : "vpiši rezultat");
    input = `<form class="answer-row"><input id="answer" autocomplete="off" inputmode="${task.answerType === "number" && !task.unit ? "decimal" : "text"}" placeholder="${escapeHtml(ph)}"><button type="button" class="pad-open-btn secondary" title="Vnos s prstom ali miško: tipke ali pisanje">${icon("pencil")}<span>Piši</span></button><button class="primary">Preveri</button></form>`;
  }
  box.innerHTML = `<div class="card task">
    <div class="task-top task-tag"><span class="task-topic">${task.topicName ? escapeHtml(task.topicName) : ""}</span>${stars}${counter}</div>
    ${ctx.total ? `<div class="progress" aria-hidden="true"><div style="width:${Math.round(((ctx.index - 1) / ctx.total) * 100)}%"></div></div>` : ""}
    <div class="task-text">${renderRich(task.text)}</div>
    ${task.figure ? figureSvg(task.figure) : ""}
    ${input}
    <div id="feedback" class="feedback" aria-live="polite"></div>
  </div>`;
  const submit = (value) => checkTask(task, ctx, value);
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

// Rešitev z izpisanimi podatki iz besedila (Podatki / Iščemo) in formulo, skrito za gumbom.
function workedBlock(task, solution, label = "Rešitev") {
  const d = task.data;
  const tex = (t) => renderMath(String(t), false);
  const dataHtml =
    d && Array.isArray(d.given) && d.given.length
      ? `<div class="task-data">
          <div class="data-col"><span class="sol-label">Podatki</span><div class="data-list">${d.given.map((x) => `<div>${tex(x)}</div>`).join("")}</div></div>
          ${Array.isArray(d.find) && d.find.length ? `<div class="data-col"><span class="sol-label">Iščemo</span><div class="data-list">${d.find.map((x) => `<div>${tex(`${x} = \\,?`)}</div>`).join("")}</div></div>` : ""}
        </div>`
      : "";
  const formulas = task.formula ? (Array.isArray(task.formula) ? task.formula : [task.formula]) : [];
  const formulaHtml = formulas.length
    ? `<details class="formula"><summary>${icon("eye")}Pokaži formulo</summary><div class="formula-body">${formulas.map((f) => `<div>${tex(f)}</div>`).join("")}</div></details>`
    : "";
  return `<div class="solution">${dataHtml}${formulaHtml}<span class="sol-label">${label}</span>${renderRich(solution)}</div>`;
}

async function checkTask(task, ctx, value) {
  const fb = $("#feedback");
  let r;
  try {
    fb.innerHTML = `<div class="fb info">Preverjam …</div>`;
    r = await api(`/api/students/${state.student.id}/tasks/${task.id}/answer`, { method: "POST", body: { answer: value } });
  } catch (err) {
    // Napaka pri povezavi: učenec jo vidi, namesto da se ne zgodi nič.
    fb.innerHTML = `<div class="fb bad">${icon("circle-x")}<span>Odgovora nisem mogel preveriti (${escapeHtml(err.message)}). Preveri povezavo in poskusi znova.</span></div>`;
    return;
  }
  const next = (label = "Naslednja naloga") => `<div class="actions"><button class="primary big" id="fb-next">${label}${icon("arrow-right")}</button></div>`;
  let html = "";
  if (r.retry) {
    html = `<div class="fb info">${escapeHtml(r.message)}</div>`;
  } else if (ctx.mode === "placement") {
    html = `<div class="fb ${r.correct ? "ok" : "bad"}">${icon(r.correct ? "circle-check" : "circle-x")}<span>${r.correct ? "Pravilno" : "Ni pravilno"}</span></div>${r.message ? `<div class="fb info">${icon("info")}<span>${escapeHtml(r.message)}</span></div>` : ""}`;
    if (r.placement) {
      const p = r.placement;
      html += `<div class="card result ${p.passed ? "celebrate" : ""}">${p.passed ? `<div class="result-icon">${icon("award")}</div>` : ""}<h2>${p.passed ? "Sklop je odklenjen in osvojen!" : "Še ne čisto."}</h2>
        <p>Pravilno: ${p.correct}/${p.total}.${p.passed ? ` +${p.xp.gained} XP` : " Sklop je odklenjen za učenje; začni pri prvi temi."}</p>
        <button class="primary big" id="fb-back">Na učno pot</button></div>`;
    } else html += next();
  } else if (r.correct) {
    html = `<div class="fb ok pop">${icon("circle-check")}<span><b>Pravilno!</b>${r.levelUp ? " Naslednje naloge bodo malo težje." : ""}</span><span class="xp-gain">+${r.xp.gained} XP</span></div>
      ${r.mastered ? `<div class="fb mastered pop">${icon("trophy")}<span>Tema je osvojena! Jutri te povabim k ponovitvi.</span></div>` : ""}
      ${workedBlock(task, r.solution, "Rešitev")}
      ${r.selfExplain ? `<div class="fb info">${icon("circle-help")}<span>${escapeHtml(r.selfExplain)}</span></div>` : ""}`;
    html += ctx.mode !== "practice" && r.next?.finished ? sessionDoneCard(ctx.mode, r.next) : next();
    refreshXp();
  } else {
    html = `<div class="fb bad shake">${icon("circle-x")}<span>${escapeHtml(r.message)}</span></div>
      ${r.levelDown ? `<div class="muted">Naslednje naloge bodo malo lažje, da utrdiš osnove.</div>` : ""}
      ${r.hint ? `<div class="fb hint">${icon("lightbulb")}<div><b>Namig:</b> ${renderRich(r.hint)}</div></div>` : ""}`;
    if (r.solution) {
      html += workedBlock(task, r.solution, "Rešen zgled");
      html += ctx.mode !== "practice" && r.next?.finished ? sessionDoneCard(ctx.mode, r.next) : next(ctx.mode === "practice" ? "Poskusi podobno nalogo" : "Naslednja naloga");
    } else {
      html += `<div class="actions"><button id="fb-retry" class="primary big">Poskusi znova</button>
        <button id="fb-help" class="secondary">${icon("message-circle")}Vprašaj inštruktorja</button></div>
        <p class="muted small-note">Še ${r.attemptsLeft} ${r.attemptsLeft === 1 ? "poskus" : "poskusa"}, nato pokažem rešen zgled.</p>`;
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
    const h = await api(`/api/students/${state.student.id}/tasks/${task.id}/help`, { method: "POST" });
    await loadConversations();
    showView("chat");
    await openConversation(h.conversation.id);
    send(h.text);
  });
  $("#fb-back")?.addEventListener("click", () => showView("path"));
  $("#fb-next")?.addEventListener("click", () => {
    if (ctx.mode === "practice") return nextPractice();
    const n = r.next;
    if (n && !n.finished) renderTask(n.task, { mode: ctx.mode, index: n.index, total: n.total });
  });
}

// ---------- poraba in lestvica ----------

async function loadUsage() {
  const u = await api("/api/usage");
  $("#usage").innerHTML = `<p>Skupaj: <b>${u.month_usd.toFixed(2)} $</b>${u.budget_usd ? ` od ${u.budget_usd} $ proračuna` : ""}${
    u.daily_questions ? ` · omejitev ${u.daily_questions} vprašanj na dan` : ""
  }</p>
  <table class="table"><thead><tr><th>Učenec</th><th>Klici</th><th>Žetoni (vhod / izhod / predpomnilnik)</th><th>Strošek</th></tr></thead><tbody>
  ${u.students
    .map((s) => `<tr><td>${escapeHtml(s.name)}</td><td>${s.calls}</td><td>${s.input_tokens} / ${s.output_tokens} / ${s.cache_read_tokens}</td><td>${s.cost_usd.toFixed(3)} $</td></tr>`)
    .join("")}</tbody></table>`;
}

// ---------- uvodni ogled ----------

const TOUR = [
  { sel: "#xp-card", title: "Današnji trening", text: "Vsak dan približno 15 minut. Aplikacija sama zmeša novo snov in ponavljanje." },
  { sel: "#path-content .unit", title: "Učna pot", text: "Teme si sledijo po učnem načrtu. Naslednji sklop se odklene, ko osvojiš prejšnjega. Tapni temo, da začneš." },
  { sel: "#modebar", title: "Načini učenja", text: "Tu kadar koli preklopiš med novo snovjo, ponavljanjem in pripravo na test. Napredek se ohrani." },
  { sel: '.tab[data-view="chat"]', title: "Inštruktor", text: "Ko se zatakneš, vprašaj inštruktorja. Vodi te po korakih, rezultata pa ti ne pove kar tako." },
];
const TOUR_KEY = "stemmind.tour";

function startTour() {
  const box = $("#tour");
  let i = 0;
  const show = () => {
    const step = TOUR[i];
    const target = document.querySelector(step.sel);
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
    box.querySelector('[data-tour="next"]').textContent = i === TOUR.length - 1 ? "Začniva" : "Naprej";
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

// Za samodejne preizkuse v brskalniku.
window.stemmind = { openTopic, showView, openLesson };

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

(async () => {
  const cfg = await api("/api/config");
  $("#mock-banner").hidden = !cfg.mock;
  // Starševski računi (account.js): prijava, potrditev, prvi otrok.
  const start = async (o) => {
    await loadStudents();
    if (!o?.keepView) showView("path");
  };
  if (await initAccount({ onReady: start })) await start();
})();
