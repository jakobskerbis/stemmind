// Učbenik: kazalo, iskanje in lekcije z interaktivnimi demonstracijami.
import { mountSim } from "./sim/index.js";

let ctx = null; // { api, renderRich, escapeHtml, getStudent, openTopic, nextPractice, learnWithTutor, showView }
const $ = (sel) => document.querySelector(sel);
const tb = { subject: null, pathKey: null, query: "", topicId: null, paths: [] };

// Ikone iz icons.js (ko je na voljo prenovljen vmesnik), sicer brez ikon.
let iconFn = () => "";
import("./icons.js")
  .then((m) => {
    if (typeof m.icon === "function") iconFn = (n) => m.icon(n) || "";
  })
  .catch(() => {});
const ic = (n) => iconFn(n);

const SUBJECTS = { MAT: "Matematika", FIZ: "Fizika", KEM: "Kemija" };

export function initTextbook(c) {
  ctx = c;
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
  const box = $("#view-textbook");
  const student = ctx.getStudent();
  if (!tb.paths.length) tb.paths = await ctx.api("/api/paths");
  if (!tb.subject) tb.subject = student?.settings?.subject || "MAT";
  if (!tb.pathKey || !tb.pathKey.startsWith(tb.subject)) {
    const mine = await ctx.api(`/api/students/${student.id}/path`).catch(() => null);
    tb.pathKey = mine?.key?.startsWith(tb.subject) ? mine.key : tb.paths.find((p) => p.subject === tb.subject)?.key;
  }
  const paths = tb.paths.filter((p) => p.subject === tb.subject);
  box.innerHTML = `
    <div class="tb-head">
      <h1>${ic("book-open")}Učbenik</h1>
      <p class="muted">Razlage vseh tem z rešenimi primeri in poskusi, ki jih lahko premikaš sam.</p>
      <div class="tb-search">
        <input id="tb-q" type="search" placeholder="Išči pojem, zakon ali poskus …" value="${esc(tb.query)}" aria-label="Išči po učbeniku" autocomplete="off">
      </div>
      <div class="tb-filters">
        <div class="tb-seg" role="tablist">${Object.entries(SUBJECTS)
          .map(([k, v]) => `<button type="button" role="tab" data-subj="${k}" class="${k === tb.subject ? "on" : ""}" aria-selected="${k === tb.subject}">${v}</button>`)
          .join("")}</div>
        <select id="tb-path" aria-label="Razred ali letnik">${paths.map((p) => `<option value="${p.key}" ${p.key === tb.pathKey ? "selected" : ""}>${esc(p.label)}</option>`).join("")}</select>
        ${tb.pathKey ? `<a class="tb-pdf" id="tb-pdf-path" href="/ucbenik/${tb.pathKey}#natisni" target="_blank" rel="noopener">${ic("download")}Prenesi učbenik (PDF)</a>` : ""}
      </div>
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
      tb.pathKey = null;
      renderHome();
    }),
  );
  $("#tb-path").addEventListener("change", (e) => {
    tb.pathKey = e.target.value;
    $("#tb-pdf-path")?.setAttribute("href", `/ucbenik/${tb.pathKey}#natisni`);
    renderBody();
  });
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
  if (!tb.pathKey) {
    body.innerHTML = `<div class="card"><p>Za ta predmet še ni učne poti.</p></div>`;
    return;
  }
  const toc = await ctx.api(`/api/textbook/toc?path=${encodeURIComponent(tb.pathKey)}`);
  body.innerHTML = toc.units
    .map(
      (u, i) => `<section class="card tb-unit">
        <h2><span class="tb-num">${i + 1}</span>${esc(u.title)}</h2>
        <ul class="tb-list">${u.topics
          .map(
            (t) => `<li><button type="button" class="tb-topic ${t.lesson ? "" : "pending"}" data-lesson="${esc(t.id)}">
              <span class="tb-name">${esc(t.name)}</span>
              <span class="tb-badges">
                ${t.lesson ? `<span class="tb-badge">lekcija</span>` : ""}
                ${t.demo ? `<span class="tb-badge demo">poskus</span>` : ""}
                ${t.phet && !t.demo ? `<span class="tb-badge sim">simulacija</span>` : ""}
                ${t.practice ? `<span class="tb-badge vaje">vaje</span>` : ""}
              </span>
            </button></li>`,
          )
          .join("")}</ul>
      </section>`,
    )
    .join("");
}

// Klik na temo v kazalu ali iskanju.
document.addEventListener("click", (e) => {
  const b = e.target.closest("#view-textbook [data-lesson]");
  if (b) {
    tb.topicId = b.dataset.lesson;
    renderLesson(tb.topicId);
  }
});

async function renderLesson(topicId) {
  const box = $("#view-textbook");
  let L;
  try {
    L = await ctx.api(`/api/students/${ctx.getStudent().id}/lesson?id=${encodeURIComponent(topicId)}`);
  } catch (err) {
    tb.topicId = null;
    return renderHome();
  }
  const R = ctx.renderRich;
  const lesson = L.lesson;
  const sections = lesson?.sections || [];
  // Demonstracijo postavimo za rešene primere (ali za razlago, če primerov ni).
  let demoAfter = sections.findIndex((s) => /rešen/i.test(s.title));
  if (demoAfter < 0) demoAfter = sections.findIndex((s) => /razlag/i.test(s.title));
  if (demoAfter < 0) demoAfter = sections.length - 1;
  const explainAt = sections.findIndex((s) => /razlag/i.test(s.title));
  const altAt = explainAt >= 0 ? explainAt : 0;

  const locked = !L.interactive && (L.locked?.demo || L.locked?.phet);
  const demos = L.demos || (L.demo ? [L.demo] : []);
  const demoHtml = demos.length
    ? demos.map((d, i) => `<section class="card tb-demo"><h2>${ic("flask-conical")}Preizkusi sam: ${esc(d.title)}</h2><div class="tb-demo-mount" data-sim="${i}"></div></section>`).join("")
    : locked
      ? `<section class="card tb-locked"><h2>${ic("lock")}${L.locked.demo ? `Poskus: ${esc(L.locked.demo)}` : "Simulacija"}</h2>
          <p>Interaktivni poskusi, simulacije in sprotno preverjanje so na voljo v plačljivem paketu in med 7-dnevnim preizkusom. Besedilo lekcije in PDF sta brezplačna.</p>
          <button type="button" class="primary" id="tb-upgrade">${ic("sparkles")}Poglej pakete</button></section>`
      : "";
  const altHtml = lesson?.alternatives?.length
    ? `<div class="tb-alt">
        <button type="button" class="secondary" id="tb-alt-btn">${ic("refresh-cw")}Razloži drugače</button>
        <div id="tb-alt-box" hidden>
          <div class="tb-alt-tabs" role="tablist">${lesson.alternatives
            .map((a, i) => `<button type="button" role="tab" data-alt="${i}" class="${i ? "" : "on"}">${esc(a.title)}</button>`)
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
        L.explanation ? R(L.explanation) : `<p>Lekcija za to temo še nastaja.${L.demo || L.phet ? " Medtem si oglej poskus spodaj" : ""}${L.practice ? ", reši nekaj nalog" : ""} ali vprašaj tutorja, ki ti temo razloži po korakih.</p>`
      }</div></section>${demoHtml}`
    : "";

  const phetHtml = L.phet
    ? `<section class="card tb-phet"><h2>${ic("monitor-play")}Simulacija</h2>
        <div id="tb-phet-mount"><button type="button" class="secondary" id="tb-phet-load">Naloži simulacijo</button>
        <a class="muted" href="${esc(L.phet.url)}" target="_blank" rel="noopener">ali jo odpri v novem oknu</a></div>
        <p class="tb-credit">Simulacija PhET Interactive Simulations, University of Colorado Boulder, licenca CC BY 4.0 (phet.colorado.edu). Če prevod ni na voljo, se odpre v angleščini.</p>
      </section>`
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
    ${L.goals ? `<p class="tb-goals"><b>Cilji:</b> ${esc(L.goals)}</p>` : ""}
    ${lesson && lesson.status !== "pregledano" ? `<p class="tb-draft">Osnutek: lekcijo mora še pregledati učitelj. Če opaziš napako, povej tutorju.</p>` : ""}
    ${sectionHtml}${fallback}${phetHtml}${checksHtml}
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
  box.querySelectorAll(".tb-demo-mount").forEach((m) => {
    const d = demos[Number(m.dataset.sim)];
    mountSim(d.id, m, d.opts);
  });
  $("#tb-upgrade")?.addEventListener("click", () => ctx.showView("account"));
  $("#tb-phet-load")?.addEventListener("click", () => {
    $("#tb-phet-mount").innerHTML = `<div class="tb-frame"><iframe src="${esc(L.phet.url)}" title="Simulacija PhET" allowfullscreen loading="lazy"></iframe></div>`;
  });
  // Razloži drugače
  const altBody = $("#tb-alt-body");
  const showAlt = (i) => {
    box.querySelectorAll("[data-alt]").forEach((b) => b.classList.toggle("on", Number(b.dataset.alt) === i));
    altBody.innerHTML = `<div class="explanation">${R(lesson.alternatives[i].md)}</div>`;
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
