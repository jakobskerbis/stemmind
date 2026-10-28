// Učbenik: kazalo, iskanje in lekcije z interaktivnimi demonstracijami.
import { mountSim } from "./sim/index.js";

let ctx = null; // { api, renderRich, escapeHtml, getStudent, openTopic, nextPractice, learnWithTutor, showView }
const $ = (sel) => document.querySelector(sel);
const tb = { subject: null, book: null, query: "", topicId: null, books: [], myPath: null, program: null };

// Ikone iz icons.js (ko je na voljo prenovljen vmesnik), sicer brez ikon.
let iconFn = () => "";
import("./icons.js")
  .then((m) => {
    if (typeof m.icon === "function") iconFn = (n) => m.icon(n) || "";
  })
  .catch(() => {});
const ic = (n) => iconFn(n);


export function initTextbook(c) {
  ctx = c;
  wireSelectionAsk();
}

// ---------- Označi besedilo in vprašaj tutorja ----------
// Učenec v lekciji označi del besedila (z miško ali prstom), ob izboru se
// pokaže gumb »Razloži«, ki odpre klepet s tutorjem z označenim delom.
let current = null; // { id, name } odprte lekcije
const SELECT_AREA = ".tb-section, .tb-alt-body, .tb-checks, .tb-goals, .tb-title";
const MAX_QUOTE = 800;

// Besedilo izbora; formule (KaTeX) zamenja z LaTeX-om, da jih tutor prebere pravilno.
function selectionText(sel) {
  const parts = [];
  for (let i = 0; i < sel.rangeCount; i++) {
    const frag = sel.getRangeAt(i).cloneContents();
    frag.querySelectorAll(".katex").forEach((k) => {
      const tex = k.querySelector('annotation[encoding="application/x-tex"]')?.textContent;
      if (tex) k.replaceWith(document.createTextNode(` $${tex.trim()}$ `));
    });
    frag.querySelectorAll(".katex-mathml, button, .i").forEach((n) => n.remove());
    const div = document.createElement("div");
    div.appendChild(frag);
    parts.push(div.innerText ?? div.textContent);
  }
  return parts.join(" ").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

function selectionInLesson(sel) {
  if (!current || !sel || sel.isCollapsed || !sel.rangeCount) return null;
  const view = $("#view-textbook");
  if (!view || view.hidden || view.offsetParent === null) return null;
  const node = sel.getRangeAt(0).commonAncestorContainer;
  const el = node.nodeType === 1 ? node : node.parentElement;
  if (!el || !view.contains(el)) return null;
  // Izbor mora biti znotraj besedila lekcije (ne v gumbih ali menijih).
  const start = sel.anchorNode?.nodeType === 1 ? sel.anchorNode : sel.anchorNode?.parentElement;
  if (!el.closest(SELECT_AREA) && !start?.closest(SELECT_AREA)) return null;
  const text = selectionText(sel);
  return text.length >= 2 ? text : null;
}

function askButton() {
  let b = document.getElementById("tb-sel-ask");
  if (b) return b;
  b = document.createElement("button");
  b.type = "button";
  b.id = "tb-sel-ask";
  b.className = "tb-sel-ask";
  b.hidden = true;
  b.innerHTML = `${ic("message-circle")}Razloži`;
  // Ne izgubi izbora ob pritisku na gumb.
  b.addEventListener("mousedown", (e) => e.preventDefault());
  b.addEventListener("click", () => {
    const text = selectionInLesson(document.getSelection()) || b.dataset.text;
    b.hidden = true;
    if (!text || !current) return;
    const quote = text.length > MAX_QUOTE ? `${text.slice(0, MAX_QUOTE)} …` : text;
    document.getSelection()?.removeAllRanges();
    ctx.learnWithTutor(current, `V lekciji »${current.name}« mi ni jasen ta del:\n\n»${quote}«\n\nMi ga razložiš preprosteje, po korakih?`);
  });
  document.body.appendChild(b);
  return b;
}

function placeAskButton() {
  const b = askButton();
  const sel = document.getSelection();
  const text = selectionInLesson(sel);
  if (!text) {
    b.hidden = true;
    return;
  }
  b.dataset.text = text;
  b.hidden = false;
  const rects = [...sel.getRangeAt(0).getClientRects()].filter((r) => r.width || r.height);
  const r = rects.length ? rects[rects.length - 1] : sel.getRangeAt(0).getBoundingClientRect();
  // Pod izborom (nad njim telefon pokaže svoj meni Kopiraj/Izberi vse).
  const coarse = matchMedia("(pointer: coarse)").matches;
  const w = b.offsetWidth || 110;
  const left = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), document.documentElement.clientWidth - w - 8);
  let top = r.bottom + (coarse ? 30 : 8);
  if (top + 44 > window.innerHeight) top = Math.max(8, r.top - 52);
  b.style.left = `${left + window.scrollX}px`;
  b.style.top = `${top + window.scrollY}px`;
}

function wireSelectionAsk() {
  let t = null;
  document.addEventListener("selectionchange", () => {
    clearTimeout(t);
    // Počakamo, da učenec konča z označevanjem (posebej na telefonu).
    t = setTimeout(placeAskButton, 250);
  });
  window.addEventListener("resize", () => document.getElementById("tb-sel-ask") && placeAskButton());
}

const esc = (s) => ctx.escapeHtml(String(s ?? ""));

// Odpre učbenik (kazalo ali zadnjo odprto lekcijo).
export async function showTextbook() {
  const box = $("#view-textbook");
  if (!box) return;
  if (tb.topicId) return renderLesson(tb.topicId);
  await renderHome();
}

export async function openLesson(topicId) {
  tb.topicId = topicId;
  ctx.showView("textbook");
}

async function renderHome() {
  current = null;
  const box = $("#view-textbook");
  const student = ctx.getStudent();
  // Študent fakultete: najprej učbenik njegovega študijskega programa, nato OŠ/SŠ.
  const program = student?.settings?.educational_track === "UNIVERZA" ? student.settings.study_program || "" : "";
  if (!tb.books.length || tb.program !== program) {
    tb.program = program;
    tb.books = await ctx.api(`/api/textbook/books${program ? `?program=${encodeURIComponent(program)}` : ""}`);
    tb.subject = null;
    tb.book = null;
    tb.myPath = null;
  }
  if (tb.myPath === null) tb.myPath = (await ctx.api(`/api/students/${student.id}/path`).catch(() => null))?.key || "";
  // Privzeto: učbenik predmeta in ravni, ki ju učenec ima v učni poti.
  if (!tb.subject) tb.subject = program ? "PROG" : (tb.myPath || student?.settings?.subject || "MAT").split("-")[0];
  const subjects = [...new Map(tb.books.map((b) => [b.subject, b.subject === "PROG" ? "Moj študij" : b.subjectName])).entries()];
  if (!subjects.some(([k]) => k === tb.subject)) tb.subject = subjects[0]?.[0];
  const books = tb.books.filter((b) => b.subject === tb.subject);
  if (!books.some((b) => b.key === tb.book)) {
    const mine = tb.myPath.split("-");
    tb.book = (books.find((b) => mine[0] === b.subject && mine[1] === b.school) || books[0])?.key || null;
  }
  const book = books.find((b) => b.key === tb.book);
  const SHORT = { OS: "Osnovna šola", SS: "Srednja šola", TEK: "Tekmovanja" };
  const levelName = (b) => SHORT[b.school] || b.schoolName.charAt(0).toUpperCase() + b.schoolName.slice(1);
  box.innerHTML = `
    <div class="tb-head">
      <h1>${ic("book-open")}Učbenik</h1>
      <p class="muted">Za vsak predmet svoj učbenik: razlage vseh tem, rešeni primeri in poskusi, ki jih lahko premikaš sam.</p>
      <div class="tb-search">
        <input id="tb-q" type="search" placeholder="Išči pojem, zakon ali poskus …" value="${esc(tb.query)}" aria-label="Išči po učbeniku" autocomplete="off">
      </div>
      <div class="tb-filters">
        <div class="seg" role="tablist" aria-label="Predmet">${subjects
          .map(([k, v]) => `<button type="button" role="tab" data-subj="${esc(k)}" class="${k === tb.subject ? "active" : ""}" aria-selected="${k === tb.subject}">${esc(v)}</button>`)
          .join("")}</div>
        ${books.length > 1 ? `<div class="seg" role="tablist" aria-label="Raven">${books
          .map((b) => `<button type="button" role="tab" data-book="${esc(b.key)}" class="${b.key === tb.book ? "active" : ""}" aria-selected="${b.key === tb.book}">${esc(levelName(b))}</button>`)
          .join("")}</div>` : ""}
      </div>
      ${book ? `<div class="tb-book card">
        <div><p class="eyebrow">Učbenik</p><h2>${esc(book.subjectName)} · ${esc(book.schoolName)}</h2>
        <p class="muted">${book.lessons} od ${book.topics} lekcij${book.lessons < book.topics ? ", ostale nastajajo" : ""}</p></div>
        <div class="tb-book-actions">
          <a class="btn-primary tb-book-pdf" href="/ucbenik/${esc(book.key)}#natisni" target="_blank" rel="noopener">${ic("download")}Celoten učbenik (PDF)</a>
          ${book.formulas ? `<a class="btn-secondary tb-book-pdf" href="/ucbenik/${esc(book.key)}/formule#natisni" target="_blank" rel="noopener">${ic("sigma")}Formule in konstante (PDF)</a>` : ""}
        </div>
      </div>` : ""}
    </div>
    <div id="tb-body"></div>`;
  const q = $("#tb-q");
  let timer;
  q.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      tb.query = q.value.trim();
      renderBody();
    }, 200);
  });
  box.querySelectorAll("[data-subj]").forEach((b) =>
    b.addEventListener("click", () => {
      tb.subject = b.dataset.subj;
      tb.book = null;
      renderHome();
    }),
  );
  box.querySelectorAll("[data-book]").forEach((b) =>
    b.addEventListener("click", () => {
      tb.book = b.dataset.book;
      renderHome();
    }),
  );
  await renderBody();
}

async function renderBody() {
  const body = $("#tb-body");
  if (!body) return;
  if (tb.query.length >= 2) {
    const hits = await ctx.api(`/api/textbook/search?q=${encodeURIComponent(tb.query)}`);
    body.innerHTML = hits.length
      ? `<p class="muted">Zadetki za »${esc(tb.query)}«</p><ul class="tb-list">${hits
          .map(
            (h) => `<li><button type="button" class="tb-topic" data-lesson="${esc(h.id)}">
              <span class="tb-name">${esc(h.name)}</span>
              <span class="tb-sub">${esc(h.pathLabel)} · ${esc(h.unit)}</span>
              ${h.snippet ? `<span class="tb-snip">${esc(h.snippet)}</span>` : ""}
            </button></li>`,
          )
          .join("")}</ul>`
      : `<div class="card"><p>Ni zadetkov za »${esc(tb.query)}«. Poskusi z drugo besedo ali vprašaj tutorja.</p></div>`;
    return;
  }
  if (!tb.book) {
    body.innerHTML = `<div class="card"><p>Za ta predmet še ni učbenika.</p></div>`;
    return;
  }
  const book = await ctx.api(`/api/textbook/toc?book=${encodeURIComponent(tb.book)}`);
  const unitHtml = (u, i) => `<section class="card tb-unit">
        <h2><span class="tb-num">${i + 1}</span>${esc(u.title)}</h2>
        <ul class="tb-list">${u.topics
          .map(
            (t) => `<li><button type="button" class="tb-topic ${t.lesson ? "" : "pending"}" data-lesson="${esc(t.id)}">
              <span class="tb-name">${esc(t.name)}</span>
              <span class="tb-badges">
                ${t.lesson ? `<span class="tb-badge">lekcija</span>` : ""}
                ${t.demo ? `<span class="tb-badge demo">poskus</span>` : ""}
                ${t.practice ? `<span class="tb-badge vaje">vaje</span>` : ""}
              </span>
            </button></li>`,
          )
          .join("")}</ul>
      </section>`;
  const parts = book.parts;
  body.innerHTML = `${parts.length > 1 ? `<nav class="tb-jump chip-row" aria-label="Deli učbenika">${parts
      .map((p) => `<a href="#tb-part-${esc(p.key)}" class="${p.key === tb.myPath ? "active" : ""}">${esc(p.label.split(",").slice(1).join(",").trim() || p.label)}</a>`)
      .join("")}</nav>` : ""}
    ${parts
      .map(
        (p) => `<section class="tb-part" id="tb-part-${esc(p.key)}">
        <div class="tb-part-head"><h2>${esc(p.label)}</h2>
          <a class="tb-pdf" href="/ucbenik/${esc(p.key)}#natisni" target="_blank" rel="noopener">${ic("download")}PDF tega dela</a></div>
        ${p.units.map(unitHtml).join("")}
      </section>`,
      )
      .join("")}`;
  body.querySelectorAll(".tb-jump a").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }),
  );
}

// Klik na temo v kazalu ali iskanju.
document.addEventListener("click", (e) => {
  const b = e.target.closest("#view-textbook [data-lesson]");
  if (b) {
    tb.topicId = b.dataset.lesson;
    renderLesson(tb.topicId);
  }
});

// Formula v rešenem primeru je skrita za gumbom, da učenec najprej poskusi sam.
function wireFormulas(root) {
  root.querySelectorAll("details.tb-formula").forEach((d) =>
    d.addEventListener("toggle", () => {
      d.querySelector("summary").textContent = d.open ? "Skrij formulo" : "Pokaži formulo";
    }),
  );
}

async function renderLesson(topicId) {
  const box = $("#view-textbook");
  let L;
  try {
    L = await ctx.api(`/api/students/${ctx.getStudent().id}/lesson?id=${encodeURIComponent(topicId)}`);
  } catch (err) {
    tb.topicId = null;
    return renderHome();
  }
  current = { id: L.id, name: L.name };
  const R = ctx.renderRich;
  const lesson = L.lesson;
  const sections = lesson?.sections || [];
  // Demonstracijo postavimo za rešene primere (ali za razlago, če primerov ni).
  let demoAfter = sections.findIndex((s) => /rešen/i.test(s.title));
  if (demoAfter < 0) demoAfter = sections.findIndex((s) => /razlag/i.test(s.title));
  if (demoAfter < 0) demoAfter = sections.length - 1;
  const explainAt = sections.findIndex((s) => /razlag/i.test(s.title));
  const altAt = explainAt >= 0 ? explainAt : 0;

  const locked = !L.interactive && !!L.locked?.demo;
  const demos = L.demos || (L.demo ? [L.demo] : []);
  const demoHtml = demos.length
    ? demos.map((d, i) => `<section class="card tb-demo"><h2>${ic("flask-conical")}Preizkusi sam: ${esc(d.title)}</h2><div class="tb-demo-mount" data-sim="${i}"></div></section>`).join("")
    : locked
      ? `<section class="card tb-locked"><h2>${ic("lock")}Poskus: ${esc(L.locked.demo)}</h2>
          <p>Interaktivni poskusi, simulacije in sprotno preverjanje so na voljo v plačljivem paketu in med 7-dnevnim preizkusom. Besedilo lekcije in PDF sta brezplačna.</p>
          <button type="button" class="primary" id="tb-upgrade">${ic("sparkles")}Poglej pakete</button></section>`
      : "";
  const altHtml = lesson?.alternatives?.length
    ? `<div class="tb-alt">
        <button type="button" class="secondary" id="tb-alt-btn">${ic("refresh-cw")}Razloži drugače</button>
        <div id="tb-alt-box" hidden>
          <div class="tb-alt-tabs chip-row" role="tablist">${lesson.alternatives
            .map((a, i) => `<button type="button" role="tab" data-alt="${i}" class="${i ? "" : "active"}">${esc(a.title)}</button>`)
            .join("")}</div>
          <div class="tb-alt-body" id="tb-alt-body"></div>
        </div>
      </div>`
    : "";
  const sectionHtml = sections
    .map((s, i) => {
      const cls = /povzetek/i.test(s.title) ? "tb-summary" : /napak/i.test(s.title) ? "tb-mistakes" : /zakaj/i.test(s.title) ? "tb-why" : "";
      return `<section class="card tb-section ${cls}">${s.title ? `<h2>${esc(s.title)}</h2>` : ""}<div class="explanation">${R(s.md)}</div>${
        i === altAt ? altHtml : ""
      }</section>${i === demoAfter ? demoHtml : ""}`;
    })
    .join("");

  const fallback = !lesson
    ? `<section class="card tb-section"><div class="explanation">${
        L.explanation ? R(L.explanation) : `<p>Lekcija za to temo še nastaja.${L.demo ? " Medtem si oglej poskus spodaj" : ""}${L.practice ? ", reši nekaj nalog" : ""} ali vprašaj tutorja, ki ti temo razloži po korakih.</p>`
      }</div></section>${demoHtml}`
    : "";

  const staticChecks = () => `<section class="card tb-checks"><h2>${ic("circle-help")}Preveri se</h2><ol>${lesson.checks
    .map((c) => `<li><div class="tb-q">${R(c.q)}</div><ol type="a">${c.options.map((o) => `<li>${R(o)}</li>`).join("")}</ol>
      <details><summary>Rešitev</summary>${"abcdefgh"[c.correct]}) ${c.why ? R(c.why) : ""}</details></li>`)
    .join("")}</ol></section>`;
  const checksHtml = lesson?.checks?.length && !L.interactive
    ? staticChecks()
    : lesson?.checks?.length
    ? `<section class="card tb-checks"><h2>${ic("circle-help")}Preveri se</h2>${lesson.checks
        .map(
          (c, qi) => `<div class="tb-check" data-q="${qi}">
            <div class="tb-q">${R(c.q)}</div>
            <div class="tb-opts">${c.options.map((o, oi) => `<button type="button" class="tb-opt" data-o="${oi}">${R(o)}</button>`).join("")}</div>
            <div class="tb-why" hidden></div>
          </div>`,
        )
        .join("")}</section>`
    : "";

  box.innerHTML = `
    <button type="button" class="text-btn tb-back" id="tb-back">← Učbenik</button>
    <p class="muted tb-crumb">${esc(L.pathLabel)} · ${esc(L.unit)}</p>
    <h1 class="tb-title">${esc(L.name)}</h1>
    ${lesson ? `<a class="tb-pdf" href="/ucbenik/${L.path}/${L.id.split("/")[1]}#natisni" target="_blank" rel="noopener">${ic("download")}PDF lekcije</a>` : ""}
    <p class="muted tb-sel-hint">${ic("message-circle")}Ti kakšen del ni jasen? Označi ga in pritisni »Razloži«.</p>
    ${L.goals ? `<p class="tb-goals"><b>Cilji:</b> ${esc(L.goals)}</p>` : ""}
    ${lesson && lesson.status !== "pregledano" ? `<p class="tb-draft">Osnutek: lekcijo mora še pregledati učitelj. Če opaziš napako, povej tutorju.</p>` : ""}
    ${sectionHtml}${fallback}${checksHtml}
    <section class="card tb-next">
      <h2>Kaj zdaj?</h2>
      <div class="actions">
        ${L.practice ? `<button type="button" class="primary" id="tb-practice">${ic("pencil")}Vadi naloge</button>` : ""}
        <button type="button" class="secondary" id="tb-ask">${ic("message-circle")}Še ni jasno? Vprašaj tutorja</button>
      </div>
      <div class="tb-nav">
        ${L.prev ? `<button type="button" class="ghost" data-lesson="${esc(L.prev.id)}">← ${esc(L.prev.name)}</button>` : "<span></span>"}
        ${L.next ? `<button type="button" class="ghost" data-lesson="${esc(L.next.id)}">${esc(L.next.name)} →</button>` : ""}
      </div>
    </section>`;
  window.scrollTo(0, 0);
  box.scrollTop = 0;

  $("#tb-back").addEventListener("click", () => {
    tb.topicId = null;
    renderHome();
  });
  wireFormulas(box);
  box.querySelectorAll(".tb-demo-mount").forEach((m) => {
    const d = demos[Number(m.dataset.sim)];
    mountSim(d.id, m, d.opts);
  });
  $("#tb-upgrade")?.addEventListener("click", () => ctx.showView("account"));
  // Razloži drugače
  const altBody = $("#tb-alt-body");
  const showAlt = (i) => {
    box.querySelectorAll("[data-alt]").forEach((b) => b.classList.toggle("active", Number(b.dataset.alt) === i));
    altBody.innerHTML = `<div class="explanation">${R(lesson.alternatives[i].md)}</div>`;
    wireFormulas(altBody);
  };
  $("#tb-alt-btn")?.addEventListener("click", () => {
    const altBox = $("#tb-alt-box");
    altBox.hidden = !altBox.hidden;
    if (!altBox.hidden) showAlt(0);
  });
  box.querySelectorAll("[data-alt]").forEach((b) => b.addEventListener("click", () => showAlt(Number(b.dataset.alt))));
  // Preveri se
  if (L.interactive) box.querySelectorAll(".tb-check").forEach((el) => {
    const c = lesson.checks[Number(el.dataset.q)];
    el.querySelectorAll(".tb-opt").forEach((b) =>
      b.addEventListener("click", () => {
        const o = Number(b.dataset.o);
        const ok = o === c.correct;
        b.classList.add(ok ? "ok" : "bad");
        const why = el.querySelector(".tb-why");
        why.hidden = false;
        why.className = `tb-why fb ${ok ? "ok" : "bad"}`;
        why.innerHTML = ok ? `Pravilno! ${c.why ? R(c.why) : ""}` : "Ni čisto tako. Premisli še enkrat ali preberi razlago zgoraj.";
        if (ok) el.querySelectorAll(".tb-opt").forEach((x) => (x.disabled = true));
      }),
    );
  });
  $("#tb-practice")?.addEventListener("click", async () => {
    await ctx.openTopic(L.id);
    ctx.nextPractice();
  });
  $("#tb-ask").addEventListener("click", () =>
    ctx.learnWithTutor({ id: L.id, name: L.name }, `Prebral sem lekcijo »${L.name}«, pa mi še ni čisto jasno. Mi razložiš na drug način?`),
  );
}
