// STEMMind – odjemalec (brez ogrodja).

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
  if (name === "settings") fillSettingsForm();
  if (name === "progress") loadProgress();
}
document.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => showView(t.dataset.view)));

// ---------- učenci ----------

async function loadStudents(selectId) {
  state.students = await api("/api/students");
  if (!state.students.length) {
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
}

async function openConversation(id) {
  const conv = await api(`/api/conversations/${id}`);
  state.conversationId = conv.id;
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
  }
  box.appendChild(el);
  box.scrollTop = box.scrollHeight;
  return el;
}

async function send(text) {
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
      body: JSON.stringify({ text, image: image ? { media_type: image.media_type, data: image.data } : undefined }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Napaka ${res.status}`);
    }

    await readSse(res, {
      delta: (d) => {
        raw += d.text;
        if (!frame) frame = requestAnimationFrame(paint);
      },
      done: (d) => {
        raw = d.text;
        paint();
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
  const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const url = canvas.toDataURL("image/jpeg", 0.85);
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
  $("#flag-list").innerHTML = flags
    .map((f) => `<li>${f.created_at.slice(0, 16)} – <b>${FLAG_NAMES[f.flag] ?? f.flag}</b> v pogovoru »${escapeHtml(f.title)}«</li>`)
    .join("");
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

// ---------- zagon ----------

(async () => {
  const cfg = await api("/api/config");
  $("#mock-banner").hidden = !cfg.mock;
  await loadStudents();
})();
