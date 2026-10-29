// Znanstveni kalkulator in pretvornik enot (vmesnik). Računa scicore.js, brez API in brez knjižnic.
// Tipkovnica je vedno vidna (kot pri pravem kalkulatorju); na računalniku lahko tipkaš tudi s tipkovnico.
import { evaluate, exactTex, formatNumber, CONSTANTS, constantText, QUANTITIES, convert } from "./scicore.js";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const isTouch = () => typeof matchMedia !== "undefined" && matchMedia("(hover: none) and (pointer: coarse)").matches;
const MAX_HISTORY = 60;
const FORMATS = ["auto", "sci", "fix2", "fix3", "fix4", "sig2", "sig3", "sig4"];

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
const store = {
  get(k) {
    try {
      return JSON.parse(localStorage.getItem(k) || "null");
    } catch {
      return null;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch {}
  },
};

// Tipke: [napis, vstavi, 2nd napis, 2nd vstavi]. »@« je mesto kazalca po vstavljanju.
const FN_KEYS = [
  ["2nd", "#2nd"], ["x²", "²", "x³", "³"], ["xʸ", "^(", "ⁿ√x", "root(@;)"], ["√", "√(", "∛", "∛("], ["x⁻¹", "⁻¹", "|x|", "abs("], ["◀", "#left"],
  ["sin", "sin(", "sin⁻¹", "arcsin("], ["cos", "cos(", "cos⁻¹", "arccos("], ["tan", "tan(", "tan⁻¹", "arctan("], ["ln", "ln(", "eˣ", "e^("], ["log", "log(", "10ˣ", "10^("], ["▶", "#right"],
  ["(", "("], [")", ")"], ["π", "π", "e", "e"], ["n!", "!", "nCr", "nCr(@;)"], ["°", "°", "nPr", "nPr(@;)"], ["%", "%", "logₐ", "logb(@;)"],
];
const NUM_KEYS = [
  ["7", "7"], ["8", "8"], ["9", "9"], ["⌫", "#del"], ["AC", "#ac"],
  ["4", "4"], ["5", "5"], ["6", "6"], ["×", "×"], ["÷", "÷"],
  ["1", "1"], ["2", "2"], ["3", "3"], ["+", "+"], ["−", "−"],
  ["0", "0"], [",", "#dec"], ["×10ˣ", "×10^("], ["Ans", "Ans"], ["=", "#eq"],
];
const KEY_LABEL = { "#2nd": "sc.second", "#left": "sc.left", "#right": "sc.right", "#del": "sc.del", "#ac": "sc.ac", "#eq": "sc.equals" };

/**
 * Znanstveni kalkulator v elementu root.
 * opts: { t, icon, locale(), storageKey(), toast?(msg) }
 */
export function createScientific(root, opts) {
  const { t, icon } = opts;
  const comma = () => usesComma(opts.locale?.());
  const key = () => opts.storageKey?.() || "kompreno.sci.0";
  let st = load();
  let second = false;

  function load() {
    const s = store.get(key()) || {};
    return { history: Array.isArray(s.history) ? s.history.slice(-MAX_HISTORY) : [], vars: s.vars && typeof s.vars === "object" ? s.vars : {}, ans: Number.isFinite(s.ans) ? s.ans : 0, deg: s.deg !== false, format: FORMATS.includes(s.format) ? s.format : "auto" };
  }
  const save = () => store.set(key(), st);

  root.classList.add("sc");
  root.innerHTML = `
    <div class="sc-screen">
      <div class="sc-bar">
        <div class="seg sc-angle" role="group" aria-label="${esc(t("gc.angles"))}">
          <button type="button" data-deg="1" title="${esc(t("gc.deg"))}">DEG</button><button type="button" data-deg="0" title="${esc(t("gc.rad"))}">RAD</button>
        </div>
        <label class="sc-format-l"><span class="sr-only">${esc(t("sc.format"))}</span><select class="sc-format" aria-label="${esc(t("sc.format"))}"></select></label>
        <span class="sc-sp"></span>
        <button type="button" class="ghost small sc-const-btn" aria-expanded="false">${icon("atom")}<span>${esc(t("sc.constants"))}</span></button>
        <button type="button" class="ghost icon-only sc-clear-h" title="${esc(t("sc.clearHistory"))}" aria-label="${esc(t("sc.clearHistory"))}">${icon("trash-2")}</button>
      </div>
      <div class="sc-history" aria-label="${esc(t("sc.history"))}" role="log"></div>
      <div class="sc-consts" hidden></div>
      <div class="sc-entry">
        <div class="sc-preview" aria-hidden="true"></div>
        <input class="sc-input" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" aria-label="${esc(t("sc.title"))}" placeholder="${esc(t("sc.placeholder"))}">
        <div class="sc-live" aria-live="polite"></div>
      </div>
    </div>
    <div class="sc-keys">
      <div class="sc-fn"></div>
      <div class="sc-num"></div>
    </div>`;
  const $ = (s) => root.querySelector(s);
  const input = $(".sc-input");
  const hist = $(".sc-history");
  const consts = $(".sc-consts");

  // --- tipkovnica ---
  const keyHtml = (k, cls) => {
    const label = KEY_LABEL[k[1]] ? ` aria-label="${esc(t(KEY_LABEL[k[1]]))}" title="${esc(t(KEY_LABEL[k[1]]))}"` : "";
    const c = [cls, k[1] === "#eq" ? "eq" : "", k[1] === "#ac" || k[1] === "#del" ? "warn" : "", k[1] === "#2nd" ? "second" : "", /^[0-9]$/.test(k[1]) || k[1] === "#dec" ? "digit" : ""].filter(Boolean).join(" ");
    return `<button type="button" class="sc-key ${c}" data-ins="${esc(k[1])}"${k[3] ? ` data-ins2="${esc(k[3])}" data-l1="${esc(k[0])}" data-l2="${esc(k[2])}"` : ""}${label}>${k[1] === "#dec" ? (comma() ? "," : ".") : esc(k[0])}</button>`;
  };
  $(".sc-fn").innerHTML = FN_KEYS.map((k) => keyHtml(k, "fn")).join("");
  $(".sc-num").innerHTML = NUM_KEYS.map((k) => keyHtml(k, "n")).join("");

  function setSecond(on) {
    second = on;
    root.classList.toggle("sc-2nd", on);
    root.querySelector(".sc-key.second").setAttribute("aria-pressed", String(on));
    root.querySelectorAll(".sc-key[data-ins2]").forEach((b) => (b.textContent = on ? b.dataset.l2 : b.dataset.l1));
  }

  // --- vnos ---
  const OPS = /^[+×÷^²³⁻!%−]/;
  function insert(text) {
    let ins = text;
    // po izračunu: operator nadaljuje z rezultatom (Ans)
    if (!input.value && OPS.test(ins) && st.history.length) ins = `Ans${ins}`;
    const s = input.selectionStart ?? input.value.length;
    const e = input.selectionEnd ?? s;
    const at = ins.indexOf("@");
    const clean = ins.replace("@", "");
    input.value = input.value.slice(0, s) + clean + input.value.slice(e);
    const pos = s + (at >= 0 ? at : clean.length);
    input.setSelectionRange(pos, pos);
    update();
  }
  function del() {
    const s = input.selectionStart ?? input.value.length;
    const e = input.selectionEnd ?? s;
    if (s !== e) input.value = input.value.slice(0, s) + input.value.slice(e);
    else if (s > 0) {
      // celo ime funkcije z oklepajem naenkrat (sin( …)
      const m = /(?:arcsin|arccos|arctan|sin|cos|tan|ln|log|logb|abs|root|nCr|nPr|√|∛)\($|Ans$|×10\^\($|.$/u.exec(input.value.slice(0, s));
      const n = m ? m[0].length : 1;
      input.value = input.value.slice(0, s - n) + input.value.slice(s);
      input.setSelectionRange(s - n, s - n);
    }
    update();
  }
  function move(d) {
    const p = Math.max(0, Math.min(input.value.length, (input.selectionStart ?? input.value.length) + d));
    input.setSelectionRange(p, p);
  }

  const env = () => ({ vars: st.vars, ans: st.ans, deg: st.deg, comma: comma() });
  const fmt = (v) => formatNumber(v, { mode: st.format, comma: comma() });

  function errorText(e) {
    const names = (e.info?.names || []).join(", ");
    switch (e.code) {
      case "missing":
        return t("gc.errMissing", { names });
      case "char":
        return t("gc.errChar", { ch: e.info.ch });
      case "unknownFn":
        return t("gc.errChar", { ch: e.info.f });
      case "notCalc":
        return t("sc.errEquation");
      case "other":
        return t("gc.errOther");
      default:
        return t("gc.errSyntax");
    }
  }

  // sproti: lep zapis izraza in predogled rezultata
  function update() {
    const text = input.value;
    const prev = $(".sc-preview");
    const live = $(".sc-live");
    if (!text.trim()) {
      prev.innerHTML = "";
      live.textContent = "";
      live.className = "sc-live";
      return;
    }
    const r = evaluate(text, env());
    if (!r) return;
    if (r.error) {
      prev.innerHTML = "";
      live.textContent = "";
      live.className = "sc-live";
      return;
    }
    prev.innerHTML = texHtml(r.tex);
    live.className = "sc-live muted";
    live.innerHTML = Number.isFinite(r.value) ? texHtml(`= ${fmt(r.value).tex}`) : "";
  }

  function compute() {
    const text = input.value.trim();
    if (!text) return;
    const r = evaluate(text, env());
    const live = $(".sc-live");
    if (!r) return;
    if (r.error || !Number.isFinite(r.value)) {
      live.className = "sc-live sc-err";
      live.innerHTML = `${icon("info")}<span>${esc(r.error ? errorText(r.error) : t("sc.errUndefined"))}</span>`;
      return;
    }
    if (r.assign) st.vars[r.assign] = r.value;
    st.ans = r.value;
    st.history.push({ text, tex: r.tex, value: r.value, assign: r.assign || undefined });
    if (st.history.length > MAX_HISTORY) st.history.splice(0, st.history.length - MAX_HISTORY);
    save();
    input.value = "";
    update();
    renderHistory(true);
  }

  function renderHistory(scroll) {
    const h = st.history;
    if (!h.length) {
      hist.innerHTML = `<p class="sc-empty muted">${esc(t("sc.empty"))}</p>`;
      return;
    }
    hist.innerHTML = h
      .map((e, i) => {
        const f = fmt(e.value);
        const ex = st.format === "auto" ? exactTex(e.value) : null;
        const res = `${ex ? `${ex} \\approx ` : ""}${f.tex}`;
        return `<div class="sc-h-row">
          <button type="button" class="sc-h-expr" data-i="${i}" title="${esc(t("sc.recall"))}">${texHtml(e.tex)}</button>
          <button type="button" class="sc-h-res" data-i="${i}" title="${esc(t("sc.useResult"))}">${texHtml(`= ${res}`)}</button>
        </div>`;
      })
      .join("");
    if (scroll) hist.scrollTop = hist.scrollHeight;
  }

  function syncBar() {
    root.querySelectorAll(".sc-angle button").forEach((b) => b.classList.toggle("active", (b.dataset.deg === "1") === st.deg));
    const sel = $(".sc-format");
    const lbl = (f) => (f === "auto" ? t("sc.fmtAuto") : f === "sci" ? t("sc.fmtSci") : f.startsWith("fix") ? t("sc.fmtFix", { n: f.slice(3) }) : t("sc.fmtSig", { n: f.slice(3) }));
    sel.innerHTML = FORMATS.map((f) => `<option value="${f}"${f === st.format ? " selected" : ""}>${esc(lbl(f))}</option>`).join("");
  }

  function renderConsts() {
    const c = comma();
    consts.innerHTML = `<div class="sc-consts-h"><b>${esc(t("sc.constants"))}</b><button type="button" class="ghost icon-only sc-consts-x" aria-label="${esc(t("pad.close"))}">${icon("x")}</button></div>
      <div class="sc-consts-list">${CONSTANTS.map((k) => {
        const f = formatNumber(k.value, { mode: "auto", comma: c });
        return `<button type="button" class="sc-const" data-id="${k.id}"><span class="sc-c-sym">${texHtml(k.sym)}</span><span class="sc-c-name">${esc(t(`sc.c.${k.id}`))}</span><span class="sc-c-val">${texHtml(`${f.tex}\\ \\mathrm{${k.unit}}`)}</span></button>`;
      }).join("")}</div>`;
  }
  function showConsts(on) {
    consts.hidden = !on;
    hist.hidden = on;
    $(".sc-const-btn").setAttribute("aria-expanded", String(on));
    if (on) {
      renderConsts();
      consts.querySelector(".sc-const")?.focus({ preventScroll: true });
    }
  }

  // --- dogodki ---
  const touch = isTouch();
  if (touch) input.setAttribute("inputmode", "none");
  // tipke ne vzamejo fokusa polju (kazalec ostane na mestu)
  root.querySelector(".sc-keys").addEventListener("pointerdown", (e) => {
    if (e.target.closest(".sc-key")) e.preventDefault();
  });
  root.querySelector(".sc-keys").addEventListener("click", (e) => {
    const b = e.target.closest(".sc-key");
    if (!b) return;
    const ins = second && b.dataset.ins2 ? b.dataset.ins2 : b.dataset.ins;
    if (ins === "#2nd") return setSecond(!second);
    if (ins === "#eq") compute();
    else if (ins === "#ac") {
      input.value = "";
      update();
    } else if (ins === "#del") del();
    else if (ins === "#left") move(-1);
    else if (ins === "#right") move(1);
    else if (ins === "#dec") insert(comma() ? "," : ".");
    else insert(ins);
    if (second && ins !== "#2nd") setSecond(false);
    if (!touch) input.focus({ preventScroll: true });
  });
  input.addEventListener("input", update);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      compute();
    } else if (e.key === "Escape" && input.value) {
      e.preventDefault();
      e.stopPropagation();
      input.value = "";
      update();
    } else if (!input.value && e.key.length === 1 && "+*/^!%".includes(e.key) && st.history.length) {
      // tipkovnica: operator na začetku nadaljuje z rezultatom
      e.preventDefault();
      insert(e.key === "*" ? "×" : e.key === "/" ? "÷" : e.key);
    }
  });
  hist.addEventListener("click", (e) => {
    const b = e.target.closest("[data-i]");
    if (!b) return;
    const it = st.history[Number(b.dataset.i)];
    if (!it) return;
    if (b.classList.contains("sc-h-expr")) {
      input.value = it.text;
      input.setSelectionRange(it.text.length, it.text.length);
      update();
    } else insert(formatNumber(it.value, { mode: "auto", comma: comma() }).text.replace(" · 10^", "E").replace("−", "-"));
    if (!touch) input.focus({ preventScroll: true });
  });
  root.querySelector(".sc-angle").addEventListener("click", (e) => {
    const b = e.target.closest("[data-deg]");
    if (!b) return;
    st.deg = b.dataset.deg === "1";
    save();
    syncBar();
    update();
  });
  $(".sc-format").addEventListener("change", (e) => {
    st.format = e.target.value;
    save();
    renderHistory(false);
    update();
  });
  $(".sc-clear-h").addEventListener("click", () => {
    st.history = [];
    st.vars = {};
    st.ans = 0;
    save();
    renderHistory(false);
  });
  $(".sc-const-btn").addEventListener("click", () => showConsts(consts.hidden));
  consts.addEventListener("click", (e) => {
    if (e.target.closest(".sc-consts-x")) return showConsts(false);
    const b = e.target.closest(".sc-const");
    if (!b) return;
    const k = CONSTANTS.find((x) => x.id === b.dataset.id);
    showConsts(false);
    insert(`(${constantText(k, comma())})`);
    if (!touch) input.focus({ preventScroll: true });
  });

  function refresh() {
    syncBar();
    renderHistory(true);
    update();
  }
  refresh();

  return {
    root,
    resize() {
      hist.scrollTop = hist.scrollHeight;
      if (!touch && root.isConnected) input.focus({ preventScroll: true });
    },
    reload() {
      st = load();
      setSecond(false);
      showConsts(false);
      refresh();
    },
    insert,
    get state() {
      return st;
    },
  };
}

/**
 * Pretvornik enot. opts: { t, icon, locale(), onInsert?(text) }
 */
export function createUnits(root, opts) {
  const { t, icon } = opts;
  const comma = () => usesComma(opts.locale?.());
  const saved = store.get("kompreno.units") || {};
  let q = QUANTITIES.find((x) => x.id === saved.q) || QUANTITIES[0];
  let from = q.units.some((u) => u[0] === saved.from) ? saved.from : q.units[1]?.[0] || q.units[0][0];
  let to = q.units.some((u) => u[0] === saved.to) ? saved.to : q.units[0][0];
  let value = typeof saved.value === "string" ? saved.value : "1";

  root.classList.add("un");
  root.innerHTML = `<div class="un-wrap">
      <div class="chip-row un-q" role="tablist" aria-label="${esc(t("sc.quantity"))}"></div>
      <div class="card un-card">
        <label class="un-field"><span>${esc(t("sc.value"))}</span><input class="un-val" inputmode="decimal" autocomplete="off"></label>
        <div class="un-pair">
          <label class="un-field"><span>${esc(t("sc.from"))}</span><select class="un-from"></select></label>
          <button type="button" class="ghost icon-only un-swap" title="${esc(t("sc.swap"))}" aria-label="${esc(t("sc.swap"))}">${icon("arrow-left-right")}</button>
          <label class="un-field"><span>${esc(t("sc.to"))}</span><select class="un-to"></select></label>
        </div>
        <div class="un-result" aria-live="polite"></div>
        ${opts.onInsert ? `<button type="button" class="secondary small un-ins">${icon("calculator")}<span>${esc(t("sc.toCalc"))}</span></button>` : ""}
      </div>
      <div class="un-all-h muted">${esc(t("sc.allUnits"))}</div>
      <div class="un-all"></div>
    </div>`;
  const $ = (s) => root.querySelector(s);
  const num = () => {
    let s = $(".un-val").value.trim().replace(/\s/g, "").replace("−", "-");
    if (comma()) s = s.replace(",", ".");
    return s === "" ? NaN : Number(s);
  };
  const show = (v) => formatNumber(v, { mode: "auto", comma: comma() });

  function renderQ() {
    $(".un-q").innerHTML = QUANTITIES.map((x) => `<button type="button" class="${x === q ? "active" : ""}" role="tab" aria-selected="${x === q}" data-q="${x.id}">${esc(t(`sc.q.${x.id}`))}</button>`).join("");
    const opt = (sel) => q.units.map((u) => `<option value="${esc(u[0])}"${u[0] === sel ? " selected" : ""}>${esc(u[0])}</option>`).join("");
    $(".un-from").innerHTML = opt(from);
    $(".un-to").innerHTML = opt(to);
  }
  function calc() {
    const v = num();
    const r = convert(v, q.id, from, to);
    const out = $(".un-result");
    if (!Number.isFinite(r)) {
      out.innerHTML = `<span class="muted">—</span>`;
      $(".un-all").innerHTML = "";
    } else {
      out.innerHTML = texHtml(`${show(v).tex}\\ \\text{${from}} = \\mathbf{${show(r).tex}}\\ \\text{${to}}`);
      $(".un-all").innerHTML = q.units
        .filter((u) => u[0] !== from)
        .map((u) => `<button type="button" class="un-row" data-u="${esc(u[0])}"><span>${texHtml(show(convert(v, q.id, from, u[0])).tex)}</span><b>${esc(u[0])}</b></button>`)
        .join("");
    }
    store.set("kompreno.units", { q: q.id, from, to, value: $(".un-val").value });
    return r;
  }
  $(".un-val").value = value;
  renderQ();
  calc();
  $(".un-q").addEventListener("click", (e) => {
    const b = e.target.closest("[data-q]");
    if (!b) return;
    q = QUANTITIES.find((x) => x.id === b.dataset.q);
    from = q.units[1]?.[0] || q.units[0][0];
    to = q.units[0][0];
    renderQ();
    calc();
  });
  $(".un-val").addEventListener("input", calc);
  $(".un-from").addEventListener("change", (e) => {
    from = e.target.value;
    calc();
  });
  $(".un-to").addEventListener("change", (e) => {
    to = e.target.value;
    calc();
  });
  $(".un-swap").addEventListener("click", () => {
    [from, to] = [to, from];
    renderQ();
    calc();
  });
  $(".un-all").addEventListener("click", (e) => {
    const b = e.target.closest("[data-u]");
    if (!b) return;
    to = b.dataset.u;
    renderQ();
    calc();
  });
  $(".un-ins")?.addEventListener("click", () => {
    const r = calc();
    if (Number.isFinite(r)) opts.onInsert(show(r).text.replace(" · 10^", "E").replace("−", "-"));
  });
  return { root, resize() {}, reload() {} };
}
