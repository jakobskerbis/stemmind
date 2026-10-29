// Orodja za računanje ob kalkulatorju: pretvornik enot, statistika, enačbe, kompleksna števila,
// matrike, številski sistemi; periodni sistem z molsko maso; zbirka formul predmeta.
// Vse računa brskalnik (toolscore.js, pse-data.js), brez API.
import { createUnits } from "./sci.js";
import { formatNumber } from "./scicore.js";
import { readList, stats, evalComplex, polyRoots, readMatrix, M, convertBase, molarMass, readNumber } from "./toolscore.js";
import { ELEMENTS, CATEGORIES, MASSES, shells } from "./pse-data.js";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const texHtml = (s, display = false) => {
  try {
    return window.katex.renderToString(s, { throwOnError: false, displayMode: display, strict: "ignore" });
  } catch {
    return esc(s);
  }
};
const usesComma = (locale) => {
  try {
    return (1.5).toLocaleString(locale || "sl").includes(",");
  } catch {
    return true;
  }
};
const remember = {
  get(k, d) {
    try {
      return JSON.parse(localStorage.getItem(k) || "null") ?? d;
    } catch {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch {}
  },
};

const TOOLS = ["units", "stats", "eq", "complex", "matrix", "base"];

/**
 * Zbirka orodij z izbiro zgoraj.
 * opts: { t, icon, locale(), onInsert(text) }
 */
export function createTools(root, opts) {
  const { t, icon } = opts;
  const comma = () => usesComma(opts.locale?.());
  // v orodjih dovolj 8 veljavnih mest (5,0990195 namesto 5,09901951359)
  const num = (v, mode = "auto") => formatNumber(Number.isFinite(v) ? Number(v.toPrecision(8)) : v, { mode, comma: comma() });
  const insText = (v) => formatNumber(v, { comma: comma() }).text.replace(" · 10^", "E").replace("−", "-");
  let tool = TOOLS.includes(remember.get("stemmind.tool")) ? remember.get("stemmind.tool") : "units";
  const views = {};

  root.classList.add("tl");
  root.innerHTML = `<div class="tl-top"><div class="chip-row tl-pick" role="tablist" aria-label="${esc(t("sc.toolsMode"))}">${TOOLS.map(
    (k) => `<button type="button" role="tab" data-tool="${k}">${esc(t(`sc.tool.${k}`))}</button>`,
  ).join("")}</div></div><div class="tl-body"></div>`;
  const body = root.querySelector(".tl-body");

  // ---- skupni gradniki ----
  const insertBtn = (v) => (Number.isFinite(v) ? `<button type="button" class="ghost icon-only tl-ins" data-v="${esc(insText(v))}" title="${esc(t("sc.toCalc"))}" aria-label="${esc(t("sc.toCalc"))}">${icon("calculator")}</button>` : "");
  const card = (html) => `<div class="card tl-card">${html}</div>`;
  const err = (msg) => `<p class="tl-err">${icon("info")}<span>${esc(msg)}</span></p>`;
  const cTex = ([re, im], mode = "auto") => {
    if (!Number.isFinite(re) || !Number.isFinite(im)) return "\\text{—}";
    const a = num(re, mode).tex;
    const b = num(Math.abs(im), mode).tex;
    if (im === 0) return a;
    const ib = b === "1" ? "i" : `${b}\\,i`;
    if (re === 0) return `${im < 0 ? "-" : ""}${ib}`;
    return `${a} ${im < 0 ? "-" : "+"} ${ib}`;
  };
  const mTex = (A) => `\\begin{pmatrix}${A.map((r) => r.map((v) => num(v).tex).join(" & ")).join(" \\\\ ")}\\end{pmatrix}`;

  // ---- statistika ----
  function stats_(el) {
    const saved = remember.get("stemmind.tool.stats", "2 4 4 4 5 5 7 9");
    el.innerHTML = card(`<label class="tl-field"><span>${esc(t("sc.data"))}</span><textarea class="tl-data" rows="3" inputmode="decimal" spellcheck="false">${esc(saved)}</textarea></label><p class="muted tl-note">${esc(t("sc.dataHint"))}</p>`) + `<div class="tl-out" aria-live="polite"></div>`;
    const ta = el.querySelector(".tl-data");
    const run = () => {
      remember.set("stemmind.tool.stats", ta.value);
      const s = stats(readList(ta.value));
      const out = el.querySelector(".tl-out");
      if (!s) return (out.innerHTML = "");
      const row = (key, sym, v, extra = "") => `<div class="tl-row"><span class="tl-k">${esc(t(`sc.st.${key}`))}</span><span class="tl-v">${texHtml(`${sym} = ${extra || num(v).tex}`)}</span>${extra ? "" : insertBtn(v)}</div>`;
      out.innerHTML =
        (s.bad ? err(t("sc.dataBad", { n: s.bad })) : "") +
        card(
          [
            row("n", "n", s.n),
            row("sum", "\\Sigma x", s.sum),
            row("mean", "\\bar{x}", s.mean),
            row("median", "Me", s.median),
            row("mode", "Mo", 0, s.mode.length ? s.mode.map((v) => num(v).tex).join(";\\ ") : "\\text{—}"),
            row("min", "x_{\\min}", s.min),
            row("max", "x_{\\max}", s.max),
            row("range", "R", s.range),
            row("q1", "Q_1", s.q1),
            row("q3", "Q_3", s.q3),
            row("iqr", "IQR", s.iqr),
            row("sdP", "\\sigma", s.sdP),
            row("sdS", "s", s.sdS),
            row("varP", "\\sigma^2", s.varP),
            row("varS", "s^2", s.varS),
          ].join(""),
        ) +
        `<p class="muted tl-note">${esc(t("sc.sorted"))}: ${esc(s.sorted.slice(0, 200).map((v) => num(v).text).join("; "))}</p>`;
    };
    ta.addEventListener("input", run);
    run();
  }

  // ---- enačbe ----
  function eq_(el) {
    const st = remember.get("stemmind.tool.eq", { kind: "poly", deg: 2, poly: ["1", "-5", "6", "0", "0"], n: 2, sys: [] });
    el.innerHTML = `<div class="seg tl-seg"><button type="button" data-kind="poly">${esc(t("sc.eq.poly"))}</button><button type="button" data-kind="sys">${esc(t("sc.eq.sys"))}</button></div><div class="tl-eq"></div><div class="tl-out" aria-live="polite"></div>`;
    const box = el.querySelector(".tl-eq");
    const out = el.querySelector(".tl-out");
    const save = () => remember.set("stemmind.tool.eq", st);
    const LET = ["a", "b", "c", "d", "e"];
    function draw() {
      el.querySelectorAll(".tl-seg button").forEach((b) => b.classList.toggle("active", b.dataset.kind === st.kind));
      if (st.kind === "poly") {
        const d = st.deg;
        const terms = LET.slice(0, d + 1).map((l, i) => (d - i > 1 ? `${l}x^{${d - i}}` : d - i === 1 ? `${l}x` : l));
        box.innerHTML = card(`<label class="tl-field tl-inline"><span>${esc(t("sc.eq.degree"))}</span><select class="tl-deg">${[1, 2, 3, 4].map((k) => `<option${k === d ? " selected" : ""}>${k}</option>`).join("")}</select></label>
          <div class="tl-formula">${texHtml(`${terms.join(" + ")} = 0`)}</div>
          <div class="tl-coefs">${LET.slice(0, d + 1).map((l, i) => `<label class="tl-field"><span>${texHtml(l)}</span><input class="tl-co" data-i="${i}" inputmode="decimal" value="${esc(st.poly[i] ?? "0")}"></label>`).join("")}</div>`);
      } else {
        const n = st.n;
        const vars = ["x", "y", "z", "w"].slice(0, n);
        const g = (i, j) => esc(st.sys?.[i]?.[j] ?? (i === j ? "1" : "0"));
        box.innerHTML = card(`<label class="tl-field tl-inline"><span>${esc(t("sc.eq.unknowns"))}</span><select class="tl-n">${[2, 3, 4].map((k) => `<option${k === n ? " selected" : ""}>${k}</option>`).join("")}</select></label>
          <div class="tl-sys" style="--cols:${n + 1}">${Array.from({ length: n }, (_, i) =>
            Array.from({ length: n + 1 }, (_, j) => `<label class="tl-cell"><input class="tl-sc" data-i="${i}" data-j="${j}" inputmode="decimal" value="${g(i, j)}" aria-label="${esc(j < n ? `${i + 1}. ${vars[j]}` : `${i + 1}. =`)}"><span>${j < n ? texHtml(vars[j]) : ""}</span></label>`).join(""),
          ).join("")}</div><p class="muted tl-note">${esc(t("sc.eq.sysHint"))}</p>`);
      }
      solve();
    }
    function solve() {
      if (st.kind === "poly") {
        const co = st.poly.slice(0, st.deg + 1).map(readNumber);
        if (co.some((v) => !Number.isFinite(v)) || co[0] === 0) return (out.innerHTML = co[0] === 0 ? err(t("sc.eq.leadZero")) : "");
        const roots = polyRoots(co);
        out.innerHTML = card(`<div class="tl-h">${esc(t("sc.eq.roots"))}</div>${roots
          .map((r, i) => `<div class="tl-row"><span class="tl-v">${texHtml(`x_{${i + 1}} = ${cTex(r)}`)}</span>${r[1] === 0 ? insertBtn(r[0]) : ""}</div>`)
          .join("")}${st.deg === 2 ? `<p class="muted tl-note">${texHtml(`D = b^2 - 4ac = ${num(co[1] ** 2 - 4 * co[0] * co[2]).tex}`)}</p>` : ""}`);
      } else {
        const n = st.n;
        const A = [];
        const b = [];
        for (let i = 0; i < n; i++) {
          A.push(Array.from({ length: n }, (_, j) => readNumber(st.sys?.[i]?.[j] ?? (i === j ? "1" : "0"))));
          b.push(readNumber(st.sys?.[i]?.[n] ?? "0"));
        }
        if (A.flat().concat(b).some((v) => !Number.isFinite(v))) return (out.innerHTML = "");
        const r = M.solve(A, b);
        const vars = ["x", "y", "z", "w"];
        out.innerHTML = r.none ? err(t("sc.eq.noSol")) : r.many ? err(t("sc.eq.many")) : card(r.x.map((v, i) => `<div class="tl-row"><span class="tl-v">${texHtml(`${vars[i]} = ${num(v).tex}`)}</span>${insertBtn(v)}</div>`).join(""));
      }
    }
    el.addEventListener("click", (e) => {
      const b = e.target.closest("[data-kind]");
      if (!b) return;
      st.kind = b.dataset.kind;
      save();
      draw();
    });
    el.addEventListener("change", (e) => {
      if (e.target.matches(".tl-deg")) st.deg = Number(e.target.value);
      else if (e.target.matches(".tl-n")) st.n = Number(e.target.value);
      else return;
      save();
      draw();
    });
    el.addEventListener("input", (e) => {
      const x = e.target;
      if (x.matches(".tl-co")) st.poly[Number(x.dataset.i)] = x.value;
      else if (x.matches(".tl-sc")) {
        st.sys ||= [];
        st.sys[x.dataset.i] ||= [];
        st.sys[x.dataset.i][x.dataset.j] = x.value;
      } else return;
      save();
      solve();
    });
    draw();
  }

  // ---- kompleksna števila ----
  function complex_(el) {
    el.innerHTML = card(`<label class="tl-field"><span>${esc(t("sc.input"))}</span><input class="tl-cx" autocomplete="off" spellcheck="false" value="${esc(remember.get("stemmind.tool.cx", "(2 + 3i)(1 − i)"))}"></label><p class="muted tl-note">${esc(t("sc.cx.hint"))}</p>`) + `<div class="tl-out" aria-live="polite"></div>`;
    const inp = el.querySelector(".tl-cx");
    const run = () => {
      remember.set("stemmind.tool.cx", inp.value);
      const out = el.querySelector(".tl-out");
      if (!inp.value.trim()) return (out.innerHTML = "");
      let z;
      try {
        z = evalComplex(inp.value);
      } catch {
        return (out.innerHTML = err(t("gc.errSyntax")));
      }
      const r = Math.hypot(z[0], z[1]);
      const phi = Math.atan2(z[1], z[0]);
      out.innerHTML = card(
        [
          `z = ${cTex(z)}`,
          `\\operatorname{Re} z = ${num(z[0]).tex},\\quad \\operatorname{Im} z = ${num(z[1]).tex}`,
          `|z| = ${num(r).tex}`,
          `\\arg z = ${num(phi).tex} = ${num((phi * 180) / Math.PI).tex}^\\circ`,
          `z = ${num(r).tex}\\,(\\cos ${num((phi * 180) / Math.PI).tex}^\\circ + i \\sin ${num((phi * 180) / Math.PI).tex}^\\circ)`,
          `\\bar z = ${cTex([z[0], -z[1]])}`,
        ]
          .map((x) => `<div class="tl-row"><span class="tl-v">${texHtml(x)}</span></div>`)
          .join(""),
      );
    };
    inp.addEventListener("input", run);
    run();
  }

  // ---- matrike ----
  function matrix_(el) {
    const st = remember.get("stemmind.tool.mx", { A: "2 1\n1 3", B: "3\n5" });
    el.innerHTML =
      card(`<div class="tl-mx"><label class="tl-field"><span>${texHtml("A")}</span><textarea class="tl-A" rows="3" spellcheck="false">${esc(st.A)}</textarea></label><label class="tl-field"><span>${texHtml("B")}</span><textarea class="tl-B" rows="3" spellcheck="false">${esc(st.B)}</textarea></label></div>
      <p class="muted tl-note">${esc(t("sc.mx.hint"))}</p>
      <div class="chip-row tl-ops">${["det A", "A^{-1}", "A^T", "\\operatorname{rref} A", "A + B", "A - B", "A \\cdot B", "A x = B"].map((o, i) => `<button type="button" data-op="${i}">${texHtml(o)}</button>`).join("")}</div>`) + `<div class="tl-out" aria-live="polite"></div>`;
    const out = el.querySelector(".tl-out");
    let op = 0;
    const run = () => {
      st.A = el.querySelector(".tl-A").value;
      st.B = el.querySelector(".tl-B").value;
      remember.set("stemmind.tool.mx", st);
      el.querySelectorAll(".tl-ops button").forEach((b) => b.classList.toggle("active", Number(b.dataset.op) === op));
      const A = readMatrix(st.A);
      const B = readMatrix(st.B);
      if (!A) return (out.innerHTML = err(t("sc.mx.hint")));
      const needB = op >= 4;
      if (needB && !B) return (out.innerHTML = err(t("sc.mx.hint")));
      const sq = A.length === A[0].length;
      let res;
      switch (op) {
        case 0:
          res = sq ? `\\det A = ${num(M.det(A)).tex}` : null;
          break;
        case 1: {
          if (!sq) break;
          const inv = M.inverse(A);
          res = inv ? `A^{-1} = ${mTex(inv)}` : "!" + t("sc.mx.singular");
          break;
        }
        case 2:
          res = `A^T = ${mTex(M.transpose(A))}`;
          break;
        case 3: {
          const r = M.rref(A);
          res = `${mTex(r.R)},\\quad \\operatorname{rang} A = ${r.rank}`;
          break;
        }
        case 4:
        case 5: {
          const r = op === 4 ? M.add(A, B) : M.sub(A, B);
          res = r ? `${op === 4 ? "A + B" : "A - B"} = ${mTex(r)}` : null;
          break;
        }
        case 6: {
          const r = M.mul(A, B);
          res = r ? `A \\cdot B = ${mTex(r)}` : null;
          break;
        }
        case 7: {
          if (!sq || B.length !== A.length) break;
          const r = M.solve(A, B.map((x) => x[0]));
          res = r.none ? "!" + t("sc.eq.noSol") : r.many ? "!" + t("sc.eq.many") : `x = ${mTex(r.x.map((v) => [v]))}`;
          break;
        }
      }
      if (res == null) out.innerHTML = err(t("sc.mx.size"));
      else if (res.startsWith("!")) out.innerHTML = err(res.slice(1));
      else out.innerHTML = card(`<div class="tl-mx-res">${texHtml(res, true)}</div>`);
    };
    el.querySelector(".tl-ops").addEventListener("click", (e) => {
      const b = e.target.closest("[data-op]");
      if (!b) return;
      op = Number(b.dataset.op);
      run();
    });
    el.addEventListener("input", run);
    run();
  }

  // ---- številski sistemi ----
  function base_(el) {
    const st = remember.get("stemmind.tool.base", { v: "2024", b: 10 });
    el.innerHTML = card(`<div class="tl-pair"><label class="tl-field"><span>${esc(t("sc.input"))}</span><input class="tl-bv" autocomplete="off" autocapitalize="characters" spellcheck="false" value="${esc(st.v)}"></label>
      <label class="tl-field tl-narrow"><span>${esc(t("sc.base.from"))}</span><select class="tl-bb">${[2, 8, 10, 16].map((b) => `<option value="${b}"${b === st.b ? " selected" : ""}>${b}</option>`).join("")}</select></label></div>`) + `<div class="tl-out" aria-live="polite"></div>`;
    const run = () => {
      st.v = el.querySelector(".tl-bv").value;
      st.b = Number(el.querySelector(".tl-bb").value);
      remember.set("stemmind.tool.base", st);
      const out = el.querySelector(".tl-out");
      if (!st.v.trim()) return (out.innerHTML = "");
      const r = convertBase(st.v, st.b);
      if (!r) return (out.innerHTML = err(t("sc.base.invalid")));
      const names = { 2: "BIN", 8: "OCT", 10: "DEC", 16: "HEX" };
      out.innerHTML = card([2, 8, 10, 16].map((b) => `<div class="tl-row"><span class="tl-k">${names[b]}</span><span class="tl-v tl-mono">${esc(r[b])}<sub>${b}</sub></span></div>`).join(""));
    };
    el.addEventListener("input", run);
    el.addEventListener("change", run);
    run();
  }

  const BUILD = {
    units: (el) => createUnits(el, { t, icon, locale: opts.locale, onInsert: opts.onInsert }),
    stats: stats_,
    eq: eq_,
    complex: complex_,
    matrix: matrix_,
    base: base_,
  };
  function show(k) {
    tool = k;
    remember.set("stemmind.tool", k);
    root.querySelectorAll(".tl-pick [data-tool]").forEach((b) => {
      b.classList.toggle("active", b.dataset.tool === k);
      b.setAttribute("aria-selected", String(b.dataset.tool === k));
    });
    if (!views[k]) {
      views[k] = document.createElement("div");
      views[k].className = `tl-view tl-${k}`;
      BUILD[k](views[k]);
    }
    body.replaceChildren(views[k]);
  }
  root.querySelector(".tl-pick").addEventListener("click", (e) => {
    const b = e.target.closest("[data-tool]");
    if (b) show(b.dataset.tool);
  });
  body.addEventListener("click", (e) => {
    const b = e.target.closest(".tl-ins");
    if (b) opts.onInsert?.(b.dataset.v);
  });
  show(tool);
  return { root, resize() {}, reload() {}, show };
}

/**
 * Periodni sistem z molsko maso. opts: { t, icon, locale(), lang(), onInsert(text) }
 */
export function createPse(root, opts) {
  const { t, icon } = opts;
  const comma = () => usesComma(opts.locale?.());
  const dec = (v, d) => (comma() ? v.toFixed(d).replace(".", ",") : v.toFixed(d));
  const nm = (e) => (opts.lang?.() === "sl" ? e.sl : e.en);
  const arText = (e) => (e.ar == null ? `[${e.a}]` : dec(e.ar, e.ar < 10 ? 3 : 2));
  let sel = ELEMENTS[remember.get("stemmind.pse.sel", 6) - 1] || ELEMENTS[5];

  root.classList.add("pse");
  root.innerHTML = `<div class="pse-wrap">
      <div class="pse-scroll"><div class="pse-grid" role="group" aria-label="${esc(t("sc.pseTitle"))}"></div></div>
      <div class="pse-legend">${CATEGORIES.map((c) => `<span class="pse-lg cat-${c}"><i></i>${esc(t(`sc.cat.${c}`))}</span>`).join("")}</div>
      <div class="pse-cards">
        <div class="card pse-detail" aria-live="polite"></div>
        <div class="card pse-mm">
          <label class="tl-field"><span>${esc(t("sc.molar"))}</span><input class="pse-f" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(t("sc.formulaPh"))}" value="${esc(remember.get("stemmind.pse.f", "H2SO4"))}"></label>
          <div class="pse-mm-out" aria-live="polite"></div>
        </div>
      </div>
    </div>`;
  const $ = (s) => root.querySelector(s);

  // mreža: 18 stolpcev, 7 period + 2 vrstici f
  const cells = [];
  for (const e of ELEMENTS) {
    let row = e.period;
    let col = e.group;
    if (e.f) {
      row = e.z < 89 ? 9 : 10;
      col = 3 + (e.z - (e.z < 89 ? 57 : 89));
    }
    cells.push(`<button type="button" class="pse-el cat-${e.cat}" style="grid-row:${row};grid-column:${col}" data-z="${e.z}" aria-label="${e.z} ${esc(nm(e))}"><small>${e.z}</small><b>${e.sym}</b><span>${esc(arText(e))}</span></button>`);
  }
  cells.push(`<div class="pse-ph cat-lanthanide" style="grid-row:6;grid-column:3" aria-hidden="true">57–71</div><div class="pse-ph cat-actinide" style="grid-row:7;grid-column:3" aria-hidden="true">89–103</div>`);
  $(".pse-grid").innerHTML = cells.join("");
  // številke skupin nad mrežo
  $(".pse-scroll").insertAdjacentHTML("afterbegin", `<div class="pse-groups" aria-hidden="true">${Array.from({ length: 18 }, (_, i) => `<span>${i + 1}</span>`).join("")}</div>`);

  function detail() {
    const e = sel;
    root.querySelectorAll(".pse-el").forEach((b) => b.classList.toggle("sel", Number(b.dataset.z) === e.z));
    const sh = shells(e.z);
    const M = e.ar ?? e.a;
    const row = (k, v) => `<div><dt>${esc(t(k))}</dt><dd>${v}</dd></div>`;
    $(".pse-detail").innerHTML = `<div class="pse-d-top">
        <div class="pse-big cat-${e.cat}">${texHtml(`{}^{${e.a}}_{${e.z}}\\mathrm{${e.sym}}`)}</div>
        <div class="pse-d-name"><b>${esc(nm(e))}</b><span class="muted">${esc(t(`sc.cat.${e.cat}`))}${e.ar == null ? ` · ${esc(t("sc.pse.radio"))}` : ""}</span></div>
      </div>
      <dl class="pse-dl">
        ${row("sc.pse.z", texHtml(`Z = ${e.z}`))}
        ${row("sc.pse.ar", texHtml(`A_r = ${e.ar == null ? `[${e.a}]` : arText(e).replace(",", "{,}")}`))}
        ${row("sc.pse.a", `${texHtml(`A = ${e.a}`)} <small class="muted">${esc(t(e.ar == null ? "sc.pse.aStable" : "sc.pse.aCommon"))}</small>`)}
        ${row("sc.pse.particles", texHtml(`p^+ = ${e.z},\\ n^0 = ${e.a - e.z},\\ e^- = ${e.z}`))}
        ${row("sc.pse.place", `${esc(t("sc.pse.group"))} ${e.f ? "3 (f)" : e.group} · ${esc(t("sc.pse.period"))} ${e.period}`)}
        ${sh ? row("sc.pse.shells", sh.join(", ")) : ""}
        ${row("sc.molar", texHtml(`M = ${(e.ar == null ? String(e.a) : arText(e)).replace(",", "{,}")}\\ \\mathrm{g/mol}`))}
      </dl>
      <div class="actions pse-act">
        <button type="button" class="secondary small pse-ins">${icon("calculator")}<span>${esc(t("sc.toCalc"))}</span></button>
        <button type="button" class="ghost small pse-add">${icon("plus")}<span>${esc(t("sc.pse.addFormula"))}</span></button>
      </div>`;
    $(".pse-ins").addEventListener("click", () => opts.onInsert?.(String(M).replace(".", comma() ? "," : ".")));
    $(".pse-add").addEventListener("click", () => {
      const f = $(".pse-f");
      f.value += e.sym;
      molar();
    });
  }

  function molar() {
    const f = $(".pse-f").value;
    remember.set("stemmind.pse.f", f);
    const out = $(".pse-mm-out");
    if (!f.trim()) return (out.innerHTML = "");
    const r = molarMass(f, MASSES);
    if (!r) return (out.innerHTML = "");
    if (r.error) return (out.innerHTML = `<p class="tl-err">${icon("info")}<span>${esc(r.error === "element" ? t("sc.badElement", { sym: r.sym }) : t("sc.badFormula"))}</span></p>`);
    const texF = f.replace(/\s+/g, "").replace(/(\d+)/g, (m, d, i, s) => (i === 0 || /[·*•.]/.test(s[i - 1]) ? m : `_{${m}}`)).replace(/[·*•]/g, "\\cdot ").replace(/\^/g, "^");
    const rows = [...r.counts].map(([sym, n]) => {
      const ar = MASSES[sym];
      return `<tr><td>${esc(sym)}</td><td>${n}</td><td>${dec(ar, 3)}</td><td>${dec(n * ar, 3)}</td><td>${dec((100 * n * ar) / r.M, 2)} %</td></tr>`;
    });
    out.innerHTML = `<div class="pse-mm-res">${texHtml(`M(\\mathrm{${texF}}) = ${dec(r.M, 2).replace(",", "{,}")}\\ \\mathrm{g/mol}`)}<button type="button" class="ghost icon-only pse-mm-ins" title="${esc(t("sc.toCalc"))}" aria-label="${esc(t("sc.toCalc"))}">${icon("calculator")}</button></div>
      <table class="pse-tab"><thead><tr><th></th><th>N</th><th>${texHtml("A_r")}</th><th>${texHtml("N \\cdot A_r")}</th><th>${texHtml("w")}</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
    out.querySelector(".pse-mm-ins").addEventListener("click", () => opts.onInsert?.(dec(r.M, 3).replace(/0+$/, "").replace(/[.,]$/, "")));
  }

  $(".pse-grid").addEventListener("click", (e) => {
    const b = e.target.closest(".pse-el");
    if (!b) return;
    sel = ELEMENTS[Number(b.dataset.z) - 1];
    remember.set("stemmind.pse.sel", sel.z);
    detail();
    // na telefonu so podrobnosti pod mrežo
    if (matchMedia("(max-width: 860px)").matches) $(".pse-detail").scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
  $(".pse-f").addEventListener("input", molar);
  detail();
  molar();
  return { root, resize() {}, reload() {} };
}

/**
 * Formule in konstante predmeta (content/formulas/*.md prek /api/formulas).
 * opts: { t, icon, api, renderRich, bookKey() }
 */
export function createFormulas(root, opts) {
  const { t } = opts;
  const BOOKS = ["MAT-OS", "MAT-SS", "FIZ-OS", "FIZ-SS", "KEM-OS", "KEM-SS"];
  let book = null;
  const cache = {};
  root.classList.add("fm");
  root.innerHTML = `<div class="fm-wrap"><div class="chip-row fm-pick" role="tablist">${BOOKS.map((b) => {
    const [s, l] = b.split("-");
    return `<button type="button" role="tab" data-book="${b}">${esc(t(`subj.${s}`))} · ${esc(t(l === "OS" ? "lp.os" : "lp.ss"))}</button>`;
  }).join("")}</div><div class="card fm-body textbook-md"></div></div>`;
  const body = root.querySelector(".fm-body");
  async function show(b) {
    book = BOOKS.includes(b) ? b : "MAT-OS";
    root.querySelectorAll(".fm-pick [data-book]").forEach((x) => {
      x.classList.toggle("active", x.dataset.book === book);
      x.setAttribute("aria-selected", String(x.dataset.book === book));
    });
    if (!cache[book]) {
      body.innerHTML = `<p class="muted">${esc(t("common.loading"))}</p>`;
      try {
        cache[book] = (await opts.api(`/api/formulas?book=${book}`)).md;
      } catch {
        cache[book] = null;
      }
    }
    body.innerHTML = cache[book] ? opts.renderRich(cache[book]) : `<p class="muted">${esc(t("sc.formNone"))}</p>`;
  }
  root.querySelector(".fm-pick").addEventListener("click", (e) => {
    const b = e.target.closest("[data-book]");
    if (b) show(b.dataset.book);
  });
  return {
    root,
    resize() {},
    reload() {
      show(opts.bookKey?.() || book);
    },
    show,
  };
}
