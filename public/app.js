// STEMMind – odjemalec (brez ogrodja).
import { attachPad, closePad } from "./pad.js";
import { initAccount, accountsOn, openAddChild } from "./account.js";
import { initTextbook, showTextbook, openLesson } from "./textbook.js";

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

const SUBJECT_NAMES = { MAT: "Matematika", FIZ: "Fizika", KEM: "Kemija" };
const MODE_NAMES = { A: "Vodenje", B: "Celotna rešitev" };
const LEVELS = {
  OSNOVNA_SOLA: ["6. razred", "7. razred", "8. razred", "9. razred"],
  SREDNJA_SOLA: ["1. letnik OR", "1. letnik VR", "2. letnik OR", "2. letnik VR", "3. letnik OR", "3. letnik VR", "4. letnik OR", "4. letnik VR"],
};

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
  if (name === "path") loadPath();
  if (name === "textbook") showTextbook();
  if (name !== "topic") closePad();
  if (name !== "topic") setActiveMode(null);
  window.scrollTo(0, 0);
}
document.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => showView(t.dataset.view)));

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
    li.innerHTML = `<span>${escapeHtml(c.title)}</span><button title="Izbriši">🗑</button>`;
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
  $("#messages").innerHTML = `<div class="empty"><p class="big">Živjo, ${escapeHtml(state.student.name)}! 👋</p>
    <p>Napiši nalogo ali jo fotografiraj. Skupaj jo bova rešila.</p></div>`;
  renderState(null);
}

function renderState(convState) {
  const s = state.student.settings;
  const subject = convState?.subject || s.subject;
  const mode = convState?.mode || s.solving_mode;
  $("#chat-state").innerHTML = [SUBJECT_NAMES[subject], MODE_NAMES[mode], s.curriculum_level]
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
    el.textContent = text;
    if (hasImage) {
      const note = document.createElement("div");
      note.className = "photo-note";
      note.textContent = "📷 fotografija naloge";
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
    let raw = "";
    let frame = 0;
    const paint = () => {
      frame = 0;
      bubble.innerHTML = renderRich(raw);
      const box = $("#messages");
      box.scrollTop = box.scrollHeight;
    };

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

    await readSse(res, {
      delta: (d) => {
        raw += d.text;
        if (!frame) frame = requestAnimationFrame(paint);
      },
      mastered: (d) => toast(`🏆 Tema »${d.topic}« je osvojena!`),
      done: (d) => {
        raw = d.text;
        paint();
        addDeepButton(bubble, d.deep);
        if (d.state) renderState(d.state);
        if (d.title) $("#chat-title").textContent = d.title;
      },
      error: (d) => {
        bubble.classList.add("error");
        raw = d.error;
        paint();
        $("#input").value = text; // vrni besedilo za ponovni poskus
      },
    });
    bubble.classList.remove("typing");
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

function fillLevelOptions(track) {
  $("#level-options").innerHTML = (LEVELS[track] || []).map((l) => `<option value="${l}">`).join("");
}

function fillSettingsForm() {
  const f = $("#settings-form");
  const s = state.student.settings;
  f.name.value = state.student.name;
  for (const key of ["subject", "track", "educational_track", "curriculum_level", "personality_setting"]) f[key].value = s[key];
  f.querySelector(`input[name=solving_mode][value=${s.solving_mode}]`).checked = true;
  f.manual_weaknesses.value = state.student.manual_weaknesses.join(", ");
  fillLevelOptions(s.educational_track);
}
$("#settings-form").educational_track.addEventListener("change", (e) => fillLevelOptions(e.target.value));

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
  const x = await refreshXp();
  $("#leaderboard").innerHTML = (x?.leaderboard || [])
    .map((l) => `<li class="${l.id === state.student.id ? "me" : ""}"><span>${escapeHtml(l.name)}</span><b>${l.xp} XP</b></li>`)
    .join("");
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
  b.textContent = "🔍 Razloži podrobneje";
  b.addEventListener("click", () => {
    b.remove();
    send("Tega ne razumem dobro. Razloži podrobneje, korak za korakom.", { deep: true });
  });
  el.appendChild(b);
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (t.hidden = true), 3500);
}

// ---------- pomožno ----------

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
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

const STATUS_ICON = { new: "○", learning: "◐", mastered: "●" };

async function refreshXp() {
  if (!state.student) return;
  const x = await api(`/api/students/${state.student.id}/xp`);
  $("#xp-total").textContent = x.total;
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
  daily.title = m.daily.done ? "Današnji trening je opravljen ✓" : m.daily.open ? "Nadaljuj današnji trening" : "Približno 15 minut: nova snov in ponavljanje";
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
      <h2>🔁 Najprej 5 minut ponavljanja?</h2>
      <p>Nabralo se je <b>${m.reviewBacklog}</b> nalog za ponavljanje. Kratka ponovitev pomaga, da osvojeno znanje ne zbledi. Lahko pa takoj nadaljuješ z novo snovjo.</p>
      <div class="actions"><button class="primary" id="sg-review">Da, 5 minut ponavljanja</button><button id="sg-new">Ne, nova snov</button></div>
    </div>`;
    $("#sg-review").addEventListener("click", () => startSession("review", { quick: true }));
    $("#sg-new").addEventListener("click", () => goNew({ skipHint: true }));
    return;
  }
  if (!m?.newTopic) {
    showView("path");
    toast("Vse teme te poti so osvojene. 🎉 Izberi drugo pot ali ponavljaj.");
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
    box.innerHTML = `<h1>📝 Priprava na test</h1>
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
  box.innerHTML = `<h1>📝 Priprava na test</h1>
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
  // izbira poti (vse poti predmeta)
  const paths = await api(`/api/paths?subject=${state.student.settings.subject}`);
  $("#path-select").innerHTML = paths
    .map((x) => `<option value="${x.key}" ${x.key === p.key ? "selected" : ""}>${escapeHtml(x.label)}${x.key === p.defaultKey ? " (moja raven)" : ""}</option>`)
    .join("");
  if (!p.key) {
    content.innerHTML = `<p class="muted">${escapeHtml(p.message)}</p>`;
    return;
  }
  state.pathKey = p.key;
  const x = p.xp;
  $("#xp-card").innerHTML = `<div><b>Raven ${x.level}</b> · ${x.total} XP</div>
    <div class="muted">Ta teden ${x.week} XP · 🔥 ${x.streak} ${x.streak === 1 ? "dan" : "dni"} zapored</div>
    <button class="primary daily-btn" data-daily>⚡ Današnji trening <span class="muted">~15 min</span></button>
    ${p.next ? `<div class="next">Naslednji korak: <b>${escapeHtml(p.next.name)}</b> <button class="primary" data-open="${p.next.id}">Začni</button></div>` : `<div class="next">🎉 Vse teme te poti so osvojene!</div>`}`;

  content.innerHTML = p.units
    .map(
      (u, ui) => `<section class="unit card ${u.locked ? "locked" : ""}">
        <div class="unit-head">
          <h2>${u.locked ? "🔒 " : u.mastered ? "✅ " : ""}${escapeHtml(u.title)}</h2>
          <div class="bar"><div style="width:${Math.round(u.progress * 100)}%"></div></div>
        </div>
        ${u.locked ? `<p class="muted">Odklene se, ko osvojiš prejšnji sklop. Če snov že znaš, opravi preizkus znanja.</p>` : ""}
        <div class="unit-actions">
          ${u.hasPractice && !u.locked && u.started ? `<button class="small" data-unit="${ui}">🧩 Vadi sklop</button>` : ""}
          ${u.hasPractice && !u.mastered ? `<button class="small" data-placement="${ui}">🎯 Preizkus znanja</button>` : ""}
        </div>
        <ul class="topics">
          ${u.topics
            .map(
              (t) => `<li class="topic ${t.status} ${t.due ? "due" : ""}">
                <span class="st" title="${{ new: "še ne", learning: "v učenju", mastered: "osvojeno" }[t.status]}">${t.due ? "⟳" : STATUS_ICON[t.status]}</span>
                <button class="link" data-open="${t.id}" ${u.locked ? "disabled" : ""}>${escapeHtml(t.name)}</button>
                ${t.due ? `<span class="tag">za ponovitev</span>` : ""}
                ${t.practice && t.status !== "new" && t.status !== "mastered" ? `<span class="lvl">${"★".repeat(t.level)}${"☆".repeat(3 - t.level)}</span>` : ""}
              </li>`,
            )
            .join("")}
        </ul>
      </section>`,
    )
    .join("");
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
  $("#topic-content").innerHTML = `
    <p class="muted">${escapeHtml(t.pathLabel)} · ${escapeHtml(t.unit)}</p>
    <h1>${escapeHtml(t.name)}</h1>
    <p><b>Cilji:</b> ${escapeHtml(t.goals)}</p>
    <div class="actions">
      ${hasPractice?.practice ? `<button class="primary" id="t-practice">✏️ Vadi naloge</button>` : ""}
      <button id="t-learn">💬 Uči se s STEMMind</button>
      <button id="t-lesson" class="secondary">📖 Lekcija</button>
      ${hasPractice?.status === "mastered" ? "" : `<button id="t-done" class="small">Označi kot osvojeno</button>`}
    </div>
    <div class="card explanation">${
      t.explanation
        ? renderRich(t.explanation)
        : `<p class="muted">Za to temo še ni pripravljene razlage. Klikni »Uči se s STEMMind«: najprej te vpraša, kaj že znaš, nato razloži po korakih.</p>`
    }</div>
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
  const out = await api(`/api/students/${state.student.id}/practice/next`, { method: "POST", body: { topic_id: state.topic.id } });
  const box = $("#practice");
  if (out.example) {
    box.innerHTML = `<div class="card task example">
      <div class="task-tag">📖 Rešen zgled</div>
      <div class="task-text">${renderRich(out.example.text)}</div>
      ${out.example.figure ? figureSvg(out.example.figure) : ""}
      <div class="solution">${renderRich(out.example.solution)}</div>
      <p class="muted">${renderRich("Namig za podobne naloge: " + out.example.hint)}</p>
      <button class="primary" id="ex-next">Zdaj ti →</button>
    </div>`;
    $("#ex-next").addEventListener("click", nextPractice);
  } else {
    renderTask(out.task, { mode: "practice" });
  }
  box.scrollIntoView({ behavior: "smooth", block: "start" });
}

const SESSIONS = {
  review: { mode: "review", title: "🔁 Ponavljanje", intro: "Mešane naloge iz tem, ki jih je čas ponoviti. Ponavljanje v razmikih (1, 3, 7, 21 dni) pomaga, da znanje ostane.", empty: "Trenutno ni ničesar za ponoviti. 👍" },
  placement: { mode: "placement", title: "🎯 Preizkus znanja", intro: "Reši naloge brez namigov. Če jih rešiš vsaj 80 %, se sklop odklene in šteje kot osvojen." },
  daily: { mode: "daily", title: "⚡ Današnji trening", intro: "Približno 15 minut: večinoma nova snov, vmes ponavljanje. Ko se ponavljanje nabere, je ponavljanja več.", empty: "Na tej poti še ni nalog za trening. Začni z novo snovjo." },
  "unit-practice": { mode: "unit", title: "🧩 Vaja sklopa", intro: "Prepletene naloge iz vseh tem tega sklopa." },
  "test-prep": { mode: "test", title: "📝 Priprava na test", intro: "Mešane naloge iz snovi za test. Bližje kot je test, težje so." },
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
  $("#topic-content").innerHTML = `<h1>${cfg.title}</h1><p class="muted">${cfg.intro}</p><div id="practice"></div>`;
  if (out.finished) {
    $("#practice").innerHTML = out.empty ? `<p>${cfg.empty || "Ni nalog."}</p>` : sessionDoneCard(cfg.mode, out);
    return;
  }
  renderTask(out.task, { mode: cfg.mode, index: out.index, total: out.total });
}

function sessionDoneCard(mode, n) {
  return `<div class="card result"><h2>${SESSION_DONE[mode] || "Končano"} 👏</h2>
    <p>Pravilno v prvem poskusu: ${n.correct}/${n.total}${n.xp ? ` · +${n.xp.gained} XP` : ""}</p>
    <button class="primary" id="fb-back">Na učno pot</button></div>`;
}

function figureSvg(f) {
  if (f.type !== "line") return "";
  const S = 24, R = 6, W = (2 * R + 1) * S;
  const X = (x) => (x + R) * S + S / 2, Y = (y) => (R - y) * S + S / 2;
  let g = "";
  for (let i = -R; i <= R; i++) {
    g += `<line x1="${X(i)}" y1="${Y(-R)}" x2="${X(i)}" y2="${Y(R)}" class="grid"/><line x1="${X(-R)}" y1="${Y(i)}" x2="${X(R)}" y2="${Y(i)}" class="grid"/>`;
  }
  const y1 = f.k * -R + f.n, y2 = f.k * R + f.n;
  return `<svg class="figure" viewBox="0 0 ${W} ${W}" role="img" aria-label="Graf premice">
    ${g}<line x1="${X(-R)}" y1="${Y(0)}" x2="${X(R)}" y2="${Y(0)}" class="axis"/><line x1="${X(0)}" y1="${Y(-R)}" x2="${X(0)}" y2="${Y(R)}" class="axis"/>
    <text x="${X(R) - 4}" y="${Y(0) - 6}" class="lbl">x</text><text x="${X(0) + 6}" y="${Y(R) + 10}" class="lbl">y</text>
    <text x="${X(1) - 3}" y="${Y(0) + 16}" class="lbl">1</text><text x="${X(0) - 14}" y="${Y(1) + 4}" class="lbl">1</text>
    <clipPath id="clip"><rect x="${X(-R)}" y="${Y(R)}" width="${2 * R * S}" height="${2 * R * S}"/></clipPath>
    <line clip-path="url(#clip)" x1="${X(-R)}" y1="${Y(y1)}" x2="${X(R)}" y2="${Y(y2)}" class="plot"/></svg>`;
}

function renderTask(task, ctx) {
  const box = $("#practice");
  const stars = ctx.mode !== "placement" && task.level ? `<span class="lvl" title="Težavnost">${"★".repeat(task.level)}${"☆".repeat(3 - task.level)}</span>` : "";
  const counter = ctx.total ? `<span class="muted">${ctx.index}/${ctx.total}</span>` : "";
  let input;
  if (task.answerType === "choice") {
    input = `<div class="choices">${task.options
      .map((o, i) => `<button type="button" class="choice" data-i="${i}">${task.optionsTex ? renderMath(o, false) : escapeHtml(o)}</button>`)
      .join("")}</div>`;
  } else {
    const ph =
      task.inputHint ||
      (task.answerType === "coefficients" ? "npr. 2, 1, 2" : task.unit ? `število in enota, npr. 12,5 ${task.unit}` : "vpiši rezultat");
    input = `<form class="answer-row"><input id="answer" autocomplete="off" inputmode="${task.answerType === "number" && !task.unit ? "decimal" : "text"}" placeholder="${escapeHtml(ph)}"><button type="button" class="pad-open-btn" title="Vnos z dotikom (tipke ali pisanje s prstom)" aria-label="Vnos z dotikom">✍️</button><button class="primary">Preveri</button></form>`;
  }
  box.innerHTML = `<div class="card task">
    <div class="task-tag">${task.topicName ? escapeHtml(task.topicName) + " · " : ""}${stars} ${counter}</div>
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

async function checkTask(task, ctx, value) {
  const r = await api(`/api/students/${state.student.id}/tasks/${task.id}/answer`, { method: "POST", body: { answer: value } });
  const fb = $("#feedback");
  const next = (label = "Naslednja naloga →") => `<button class="primary" id="fb-next">${label}</button>`;
  let html = "";
  if (r.retry) {
    html = `<div class="fb info">${escapeHtml(r.message)}</div>`;
  } else if (ctx.mode === "placement") {
    html = `<div class="fb ${r.correct ? "ok" : "bad"}">${r.correct ? "✓ Pravilno" : "✗ Ni pravilno"}</div>${r.message ? `<div class="fb info">${escapeHtml(r.message)}</div>` : ""}`;
    if (r.placement) {
      const p = r.placement;
      html += `<div class="card result"><h2>${p.passed ? "🎉 Sklop je odklenjen in osvojen!" : "Še ne čisto."}</h2>
        <p>Pravilno: ${p.correct}/${p.total}.${p.passed ? ` +${p.xp.gained} XP` : " Sklop je odklenjen za učenje; začni pri prvi temi."}</p>
        <button class="primary" id="fb-back">Na učno pot</button></div>`;
    } else html += next();
  } else if (r.correct) {
    html = `<div class="fb ok">✓ Pravilno! +${r.xp.gained} XP${r.levelUp ? ` · ⬆️ težavnost ${"★".repeat(r.levelUp)}` : ""}</div>
      ${r.mastered ? `<div class="fb mastered">🏆 Tema je osvojena! Čez 1 dan te povabim k ponovitvi.</div>` : ""}
      <div class="solution">${renderRich(r.solution)}</div>
      ${r.selfExplain ? `<div class="fb info">🤔 ${escapeHtml(r.selfExplain)}</div>` : ""}`;
    html += ctx.mode !== "practice" && r.next?.finished ? sessionDoneCard(ctx.mode, r.next) : next();
    refreshXp();
  } else {
    html = `<div class="fb bad">${escapeHtml(r.message)}</div>
      ${r.levelDown ? `<div class="muted">Težavnost sem znižal, da utrdiš osnove.</div>` : ""}
      ${r.hint ? `<div class="fb hint">💡 ${renderRich(r.hint)}</div>` : ""}`;
    if (r.solution) {
      html += `<div class="solution"><b>Rešen zgled:</b> ${renderRich(r.solution)}</div>`;
      html += ctx.mode !== "practice" && r.next?.finished ? sessionDoneCard(ctx.mode, r.next) : next(ctx.mode === "practice" ? "Poskusi podobno nalogo →" : "Naslednja naloga →");
    } else {
      html += `<div class="actions"><button id="fb-retry" class="primary">Poskusi znova (še ${r.attemptsLeft})</button>
        <button id="fb-help">💬 Vprašaj STEMMind</button></div>`;
    }
  }
  fb.innerHTML = html;
  // Ko je naloga zaključena, plošča izgine, da sta razlaga in gumb »Naprej« vidna.
  if (!r.retry && (r.correct || r.solution || ctx.mode === "placement")) closePad();
  fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
  $("#fb-retry")?.addEventListener("click", () => {
    fb.innerHTML = "";
    $("#answer")?.select();
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
