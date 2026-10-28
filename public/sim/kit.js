// Ogrodje za lastne simulacije v učbeniku (brez knjižnic: SVG, canvas, drsniki).
// Vsaka simulacija je funkcija (el, opts) => void, ki vse nariše v el.
// Barve jemljemo iz CSS spremenljivk, da delujejo v svetli in temni temi.

export const NS = "http://www.w3.org/2000/svg";

// Število s slovensko decimalno vejico.
export function fmt(x, d = 2) {
  if (!Number.isFinite(x)) return "–";
  const r = Number(x.toFixed(d));
  return String(Object.is(r, -0) ? 0 : r).replace(".", ",").replace("-", "−");
}
// Število za KaTeX (decimalna vejica brez presledka).
export const tfmt = (x, d = 2) => fmt(x, d).replace("−", "-").replace(",", "{,}");

export function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k === "html") el.innerHTML = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const k of kids.flat()) if (k != null && k !== false) el.append(k);
  return el;
}

// SVG element; text = besedilo za <text>.
export function s(tag, attrs = {}, parent, text) {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs || {})) if (v != null) el.setAttribute(k, v);
  if (text != null) el.textContent = text;
  if (parent) parent.append(el);
  return el;
}

let uid = 0;
export function svgBox(w, hgt, cls = "") {
  const svg = s("svg", { viewBox: `0 0 ${w} ${hgt}`, class: `demo-svg ${cls}`, role: "img" });
  svg.uid = `s${++uid}`;
  return svg;
}

// Puščice: s("line", { ..., "marker-end": arrowHead(svg, "a") }).
export function arrowHead(svg, color = "text") {
  const id = `${svg.uid}-arr-${color}`;
  if (!svg.querySelector(`#${id}`)) {
    let defs = svg.querySelector("defs");
    if (!defs) defs = s("defs", {}, null), svg.prepend(defs);
    const mk = s("marker", { id, viewBox: "0 0 10 10", refX: 8.5, refY: 5, markerWidth: 6, markerHeight: 6, orient: "auto-start-reverse", markerUnits: "strokeWidth" }, defs);
    s("path", { d: "M0,0 L10,5 L0,10 z", class: `fill-${color}` }, mk);
  }
  return `url(#${id})`;
}
export function arrow(parent, x1, y1, x2, y2, color = "text", width = 2.5, extra = {}) {
  const svg = parent.ownerSVGElement || parent;
  if (Math.hypot(x2 - x1, y2 - y1) < 1) return null;
  return s("line", { x1, y1, x2, y2, class: `vec stroke-${color}`, "stroke-width": width, "marker-end": arrowHead(svg, color), ...extra }, parent);
}
export const label = (parent, x, y, t, cls = "lbl", anchor = "middle") =>
  s("text", { x, y, class: cls, "text-anchor": anchor, "dominant-baseline": "middle" }, parent, t);

// Drsnik z oznako in prikazano vrednostjo.
export function slider({ label: lab, min, max, step = 1, value, unit = "", digits, onInput, format }) {
  const d = digits ?? (String(step).split(".")[1]?.length || 0);
  const out = h("output");
  const input = h("input", { type: "range", min, max, step, value, "aria-label": lab });
  const show = () => (out.textContent = format ? format(Number(input.value)) : `${fmt(Number(input.value), d)}${unit ? (unit === "°" || unit === "%" ? "" : " ") + unit : ""}`);
  input.addEventListener("input", () => {
    show();
    onInput?.(Number(input.value));
  });
  show();
  const wrap = h("label", { class: "demo-slider" }, h("span", { class: "demo-slider-label" }, lab), input, out);
  wrap.set = (v, silent) => {
    input.value = v;
    show();
    if (!silent) onInput?.(Number(input.value));
  };
  wrap.get = () => Number(input.value);
  wrap.input = input;
  return wrap;
}

// Izbirni seznam. options: [[vrednost, napis], …] ali [napis, …].
export function select({ label: lab, options, value, onChange }) {
  const sel = h("select", { "aria-label": lab }, options.map((o) => (Array.isArray(o) ? h("option", { value: o[0] }, o[1]) : h("option", { value: o }, o))));
  if (value != null) sel.value = value;
  sel.addEventListener("change", () => onChange?.(sel.value));
  const wrap = h("label", { class: "demo-slider" }, h("span", { class: "demo-slider-label" }, lab), sel);
  wrap.get = () => sel.value;
  wrap.set = (v) => ((sel.value = v), onChange?.(sel.value));
  wrap.sel = sel;
  return wrap;
}

// Skupina gumbov, kjer je izbran natanko eden (npr. načini prikaza).
export function segmented({ options, value, onChange }) {
  const wrap = h("div", { class: "demo-seg", role: "radiogroup" });
  const btns = options.map((o) => {
    const [v, t] = Array.isArray(o) ? o : [o, o];
    const b = h("button", { type: "button", role: "radio", class: "seg-btn", onclick: () => wrap.set(v) }, t);
    b.dataset.v = v;
    return b;
  });
  wrap.append(...btns);
  wrap.set = (v, silent) => {
    wrap.value = v;
    btns.forEach((b) => {
      const on = b.dataset.v === String(v);
      b.classList.toggle("on", on);
      b.setAttribute("aria-checked", on);
    });
    if (!silent) onChange?.(v);
  };
  wrap.get = () => wrap.value;
  wrap.set(value ?? (Array.isArray(options[0]) ? options[0][0] : options[0]), true);
  return wrap;
}

export function toggle(lab, checked, onChange) {
  const chk = h("input", { type: "checkbox", checked: !!checked });
  chk.addEventListener("change", () => onChange?.(chk.checked));
  const wrap = h("label", { class: "demo-check" }, chk, " ", lab);
  wrap.get = () => chk.checked;
  wrap.set = (v) => ((chk.checked = v), onChange?.(v));
  return wrap;
}

export function button(text, onclick, cls = "secondary small") {
  return h("button", { type: "button", class: cls, onclick }, text);
}
export const buttons = (...kids) => h("div", { class: "demo-buttons" }, ...kids);
export const controls = (...kids) => h("div", { class: "demo-controls" }, ...kids);
export const readout = () => h("div", { class: "demo-readout", "aria-live": "polite" });
export const stage = (...kids) => h("div", { class: "demo-stage" }, ...kids);
export const tryIt = (text) => (text ? h("p", { class: "demo-try" }, h("b", {}, "Poskusi: "), text) : null);

// Animacija, ki se ustavi, ko simulacija ni več na strani.
// Vrne { play(), pause(), toggle(), running }.
export function animate(el, step, { autoplay = true } = {}) {
  const ctl = { running: false };
  let last = 0;
  const tick = (now) => {
    if (!el.isConnected && el.dataset.mounted) return (ctl.running = false);
    if (el.isConnected) el.dataset.mounted = "1";
    if (!ctl.running) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (step(dt) === false) ctl.running = false, ctl.onstop?.();
    if (ctl.running) requestAnimationFrame(tick);
  };
  ctl.play = () => {
    if (ctl.running) return;
    ctl.running = true;
    last = performance.now();
    requestAnimationFrame(tick);
    ctl.onchange?.();
  };
  ctl.pause = () => {
    ctl.running = false;
    ctl.onchange?.();
  };
  ctl.toggle = () => (ctl.running ? ctl.pause() : ctl.play());
  if (autoplay) ctl.play();
  return ctl;
}

// Gumb Predvajaj/Ustavi za animacijo.
export function playButton(anim, { play = "Predvajaj", pause = "Ustavi" } = {}) {
  const b = button("", () => anim.toggle(), "primary small");
  const upd = () => (b.textContent = anim.running ? `❚❚ ${pause}` : `▶ ${play}`);
  const prev = anim.onchange;
  anim.onchange = () => (prev?.(), upd());
  const prevStop = anim.onstop;
  anim.onstop = () => (prevStop?.(), upd());
  upd();
  return b;
}

export const tex = (t) => (window.katex ? katex.renderToString(t, { throwOnError: false }) : t);
export const texBlock = (t) => `<div class="demo-eq">${tex(t)}</div>`;

// Koordinatni sistem. Vrne { X, Y, inv(px,py), g } za risanje v enotah.
export function axes(svg, { W, H, x: [x0, x1], y: [y0, y1], pad = 28, padR = 10, padT = 10, grid = true, xStep, yStep, xLabel = "x", yLabel = "y", origin = true, xFmt, yFmt, parent } = {}) {
  const P = parent || svg;
  const L = pad, B = H - pad, R = W - padR, T = padT;
  const X = (x) => L + ((x - x0) / (x1 - x0)) * (R - L);
  const Y = (y) => B - ((y - y0) / (y1 - y0)) * (B - T);
  const inv = (px, py) => [x0 + ((px - L) / (R - L)) * (x1 - x0), y0 + ((B - py) / (B - T)) * (y1 - y0)];
  const g = s("g", { class: "axes" }, P);
  const nice = (span) => {
    const raw = span / 8, p = 10 ** Math.floor(Math.log10(raw)), m = raw / p;
    return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
  };
  const xs = xStep || nice(x1 - x0), ys = yStep || nice(y1 - y0);
  const ax = origin && y0 <= 0 && y1 >= 0 ? Y(0) : B;
  const ay = origin && x0 <= 0 && x1 >= 0 ? X(0) : L;
  const dec = (st) => Math.max(0, -Math.floor(Math.log10(st) + 1e-9));
  for (let v = Math.ceil(x0 / xs) * xs; v <= x1 + 1e-9; v += xs) {
    if (grid) s("line", { x1: X(v), y1: T, x2: X(v), y2: B, class: "grid" }, g);
    if (Math.abs(v) > 1e-9 || !origin || ay === L) s("text", { x: X(v), y: ax + 14, class: "tick", "text-anchor": "middle" }, g, xFmt ? xFmt(v) : fmt(v, dec(xs)));
  }
  for (let v = Math.ceil(y0 / ys) * ys; v <= y1 + 1e-9; v += ys) {
    if (grid) s("line", { x1: L, y1: Y(v), x2: R, y2: Y(v), class: "grid" }, g);
    if (Math.abs(v) > 1e-9 || !origin || ax === B) s("text", { x: ay - 5, y: Y(v) + 4, class: "tick", "text-anchor": "end" }, g, yFmt ? yFmt(v) : fmt(v, dec(ys)));
  }
  s("line", { x1: L, y1: ax, x2: R, y2: ax, class: "axis", "marker-end": arrowHead(svg) }, g);
  s("line", { x1: ay, y1: B, x2: ay, y2: T, class: "axis", "marker-end": arrowHead(svg) }, g);
  if (xLabel) s("text", { x: R - 2, y: ax - 8, class: "axis-label", "text-anchor": "end" }, g, xLabel);
  if (yLabel) s("text", { x: ay + 7, y: T + 10, class: "axis-label" }, g, yLabel);
  return { X, Y, inv, g, L, R, T, B, x0, x1, y0, y1 };
}

// Pot grafa funkcije f na intervalu (prekine pri skokih in neskončnostih).
export function fnPath(f, A, { from = A.x0, to = A.x1, n = 240 } = {}) {
  let d = "", pen = false, prevY = null;
  const span = A.y1 - A.y0;
  for (let i = 0; i <= n; i++) {
    const x = from + ((to - from) * i) / n;
    const y = f(x);
    const ok = Number.isFinite(y) && y > A.y0 - span * 2 && y < A.y1 + span * 2;
    if (ok && pen && prevY != null && Math.abs(y - prevY) > span * 1.5) pen = false;
    if (ok) d += `${pen ? "L" : "M"}${A.X(x).toFixed(1)},${A.Y(y).toFixed(1)}`;
    pen = ok;
    prevY = ok ? y : null;
  }
  return d;
}

// Pretvorba položaja kazalca v koordinate SVG.
export function svgPoint(svg, ev) {
  const pt = svg.createSVGPoint();
  pt.x = ev.clientX;
  pt.y = ev.clientY;
  const m = svg.getScreenCTM();
  if (!m) return [0, 0];
  const p = pt.matrixTransform(m.inverse());
  return [p.x, p.y];
}

// Vlečenje elementa (miška, prst, pisalo). onMove(x, y) v koordinatah SVG.
export function draggable(svg, target, onMove, { onStart, onEnd } = {}) {
  target.classList.add("drag");
  target.addEventListener("pointerdown", (ev) => {
    ev.preventDefault();
    target.setPointerCapture?.(ev.pointerId);
    onStart?.(...svgPoint(svg, ev));
    const move = (e) => onMove(...svgPoint(svg, e));
    const up = () => {
      target.removeEventListener("pointermove", move);
      target.removeEventListener("pointerup", up);
      target.removeEventListener("pointercancel", up);
      onEnd?.();
    };
    target.addEventListener("pointermove", move);
    target.addEventListener("pointerup", up);
    target.addEventListener("pointercancel", up);
  });
}

// Vlečna točka: krog z večjo nevidno ploskvijo za prst.
export function handle(parent, cls = "a", r = 7) {
  const g = s("g", { class: "handle" }, parent);
  s("circle", { r: 18, class: "hit" }, g);
  const c = s("circle", { r, class: `pt fill-${cls}` }, g);
  g.move = (x, y) => g.setAttribute("transform", `translate(${x},${y})`);
  g.dot = c;
  return g;
}

// Canvas, ki se prilagodi gostoti zaslona. Vrne { cv, ctx, W, H }.
export function canvasBox(W, H) {
  const cv = h("canvas", { class: "demo-canvas", width: W * 2, height: H * 2 });
  cv.style.aspectRatio = `${W} / ${H}`;
  const ctx = cv.getContext("2d");
  ctx.scale(2, 2);
  return { cv, ctx, W, H };
}

// Barva iz CSS spremenljivke (za canvas).
export function cssColor(el, name, fallback = "#2563eb") {
  const v = getComputedStyle(el).getPropertyValue(name).trim();
  return v || fallback;
}
export function palette(el) {
  const c = (n, f) => cssColor(el, n, f);
  return { text: c("--text", "#14213d"), muted: c("--muted", "#5d6b86"), border: c("--border", "#dfe6f1"), surface: c("--surface", "#fff"), surface2: c("--surface-2", "#eaf0f9"), accent: c("--accent", "#2563eb"), a: c("--demo-a", "#e8833a"), b: c("--demo-b", "#2f9e8f"), c: c("--demo-c", "#7b61d1"), ok: c("--ok", "#16a05a"), danger: c("--danger", "#e5484d") };
}

// Postavi simulacijo: oder, kontrole, izpis, namig.
export function layout(el, { stage: st, controls: ctl, out, extra, tryText }) {
  el.append(...[st && (st.classList?.contains("demo-stage") ? st : stage(...[].concat(st))), ctl && (Array.isArray(ctl) ? controls(...ctl) : ctl), extra, out, tryIt(tryText)].flat().filter(Boolean));
}

export function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) [x, y] = [y, x % y];
  return x;
}
export const lcm = (a, b) => (a && b ? Math.abs(a * b) / gcd(a, b) : 0);
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const rnd = (a, b) => a + Math.random() * (b - a);
export const rint = (a, b) => Math.floor(a + Math.random() * (b - a + 1));
export const deg = (r) => (r * 180) / Math.PI;
export const rad = (d) => (d * Math.PI) / 180;
export function primeFactors(n) {
  const out = [];
  for (let p = 2; p * p <= n; p++) while (n % p === 0) out.push(p), (n /= p);
  if (n > 1) out.push(n);
  return out;
}
// Ulomek za KaTeX.
export const frac = (a, b) => (b === 1 ? `${a}` : `\\frac{${a}}{${b}}`);
// Sklanjanje: n + (1 / 2 / 3-4 / 5+) oblika.
export function plural(n, [one, two, few, many]) {
  const m = Math.abs(n) % 100;
  return m === 1 ? one : m === 2 ? two : m === 3 || m === 4 ? few : many;
}
