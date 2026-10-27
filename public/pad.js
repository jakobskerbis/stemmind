// Vnos z dotikom: plošča s tipkami in risalno površino.
// Na telefonu se odpre spodaj (besedilo naloge ostane pripeto zgoraj),
// na širšem zaslonu ob strani, tako da je naloga ves čas vidna.

const LS_KEY = "stemmind.pad";
const prefs = (() => {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || {};
  } catch {
    return {};
  }
})();
const savePrefs = () => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(prefs));
  } catch {}
};

const isTouch = () => matchMedia("(pointer: coarse)").matches;

let pad = null; // DOM plošče
let cur = null; // { task, input, form, readFn }
let ink = null; // risalna površina

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function build() {
  pad = el(`<aside id="pad" class="pad" hidden aria-label="Vnos odgovora">
    <div class="pad-head">
      <div class="pad-tabs" role="tablist">
        <button type="button" data-tab="keys" role="tab">🔢 Tipke</button>
        <button type="button" data-tab="draw" role="tab">✍️ Piši</button>
      </div>
      <button type="button" class="pad-close" aria-label="Zapri">✕</button>
    </div>
    <div class="pad-answer"><span class="pad-value" aria-live="polite"></span><span class="pad-units"></span><button type="button" class="primary pad-check">Preveri</button></div>
    <div class="read-result" aria-live="polite"></div>
    <div class="pad-body pad-keys">
      <div class="keys">
        ${["7", "8", "9", "⌫", "4", "5", "6", ",", "1", "2", "3", "−", "0", "/", "␣", "C"]
          .map((k) => `<button type="button" class="key${k === "⌫" || k === "C" ? " fn" : ""}" data-k="${k}">${k === "␣" ? "presl." : k}</button>`)
          .join("")}
      </div>
    </div>
    <div class="pad-body pad-draw">
      <div class="draw-tools">
        <button type="button" data-tool="pen" class="on" title="Pisalo">✏️</button>
        <button type="button" data-tool="eraser" title="Radirka">🧽</button>
        <button type="button" data-act="undo" title="Razveljavi">↶</button>
        <button type="button" data-act="clear" title="Počisti">🗑️</button>
        <button type="button" data-act="grow" title="Več prostora">＋ prostor</button>
      </div>
      <div class="canvas-wrap"><canvas class="ink" aria-label="Površina za pisanje"></canvas></div>
      <div class="draw-foot">
        <button type="button" class="primary" data-act="read">👁️ Preberi odgovor</button>
        <span class="muted">Piši sproti, kot v zvezek. Končni odgovor napiši v zadnjo vrstico.</span>
      </div>
    </div>
  </aside>`);
  document.body.appendChild(pad);

  pad.querySelector(".pad-close").addEventListener("click", () => {
    prefs.auto = false;
    savePrefs();
    closePad();
  });
  pad.querySelectorAll("[data-tab]").forEach((b) => b.addEventListener("click", () => setTab(b.dataset.tab)));
  pad.querySelector(".keys").addEventListener("click", (e) => {
    const b = e.target.closest(".key");
    if (b) press(b.dataset.k);
  });
  pad.querySelector(".pad-units").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) press(" " + b.dataset.u, true);
  });
  pad.querySelector(".pad-check").addEventListener("click", submit);
  ink = createInk(pad.querySelector("canvas.ink"));
  pad.querySelectorAll("[data-tool]").forEach((b) =>
    b.addEventListener("click", () => {
      ink.tool = b.dataset.tool;
      pad.querySelectorAll("[data-tool]").forEach((x) => x.classList.toggle("on", x === b));
    }),
  );
  pad.querySelector("[data-act=undo]").addEventListener("click", () => ink.undo());
  pad.querySelector("[data-act=clear]").addEventListener("click", () => ink.clear());
  pad.querySelector("[data-act=grow]").addEventListener("click", () => ink.grow());
  pad.querySelector("[data-act=read]").addEventListener("click", readInk);

  // Prostor pod vsebino, da plošča na telefonu ne prekrije odgovora in povratne informacije.
  new ResizeObserver(() => {
    document.documentElement.style.setProperty("--pad-h", pad.hidden ? "0px" : pad.offsetHeight + "px");
  }).observe(pad);
}

function setTab(tab) {
  prefs.tab = tab;
  savePrefs();
  pad.dataset.tab = tab;
  pad.querySelectorAll("[data-tab]").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.tab === tab)));
  if (tab === "draw") ink.fit();
}

function syncValue() {
  if (!cur) return;
  const v = cur.input.value;
  const span = pad.querySelector(".pad-value");
  span.textContent = v || cur.input.placeholder || "";
  span.classList.toggle("ph", !v);
}

function press(k, isUnit = false) {
  if (!cur) return;
  const inp = cur.input;
  let v = inp.value;
  if (isUnit) {
    // Zamenjaj morebitno prejšnjo enoto.
    v = v.replace(/\s+[^\d\s,./−-][^\s]*$/, "").trimEnd() + k;
  } else if (k === "⌫") v = v.slice(0, -1);
  else if (k === "C") v = "";
  else if (k === "␣") v += " ";
  else if (k === "−") v += "-";
  else if (k === "," && cur.task.answerType === "coefficients") v += ", ";
  else v += k;
  inp.value = v;
  syncValue();
  navigator.vibrate?.(8);
}

function submit() {
  if (!cur || !cur.input.value.trim()) return;
  cur.form.requestSubmit();
}

async function readInk() {
  if (!cur) return;
  const box = pad.querySelector(".read-result");
  const image = ink.exportImage();
  if (!image) {
    box.innerHTML = `<div class="fb info">Najprej nekaj napiši. 🙂</div>`;
    return;
  }
  box.innerHTML = `<div class="fb info">Berem …</div>`;
  try {
    const r = await cur.readFn(image);
    if (!r.text) {
      box.innerHTML = `<div class="fb info">${escapeHtml(r.message || "Zapisa nisem uspel prebrati.")}</div>`;
      return;
    }
    box.innerHTML = `<div class="fb info">Prebral sem: <b class="read-text"></b>. Je prav?</div>
      <div class="actions"><button type="button" class="primary" data-ok>Da, preveri</button><button type="button" data-fix>Popravi s tipkami</button></div>`;
    box.querySelector(".read-text").textContent = r.text;
    box.querySelector("[data-ok]").addEventListener("click", () => {
      cur.input.value = r.text;
      syncValue();
      box.innerHTML = "";
      submit();
    });
    box.querySelector("[data-fix]").addEventListener("click", () => {
      cur.input.value = r.text;
      syncValue();
      box.innerHTML = "";
      setTab("keys");
    });
  } catch (err) {
    box.innerHTML = `<div class="fb bad">${escapeHtml(err.message)}</div>`;
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

/**
 * Poveži ploščo z nalogo. Na napravah na dotik se odpre sama (razen če jo je učenec zaprl).
 * @param {{task, input: HTMLInputElement, form: HTMLFormElement, readFn: (dataUrl) => Promise<{text, message}>, opener: HTMLElement}} opts
 */
export function attachPad(opts) {
  if (!pad) build();
  cur = opts;
  ink.clear(true);
  pad.querySelector(".read-result").innerHTML = "";
  const units = opts.task.unit ? [opts.task.unit] : [];
  pad.querySelector(".pad-units").innerHTML = units.map((u) => `<button type="button" data-u="${escapeHtml(u)}">${escapeHtml(u)}</button>`).join("");
  opts.input.addEventListener("input", syncValue);
  opts.opener?.addEventListener("click", () => {
    prefs.auto = true;
    savePrefs();
    openPad();
  });
  syncValue();
  if (prefs.auto ?? isTouch()) openPad();
  else closePad();
}

export function openPad(tab) {
  if (!pad || !cur) return;
  const top = document.querySelector(".topbar")?.getBoundingClientRect().bottom;
  if (top) document.documentElement.style.setProperty("--pad-top", Math.round(top) + "px");
  pad.hidden = false;
  document.body.classList.add("pad-open");
  setTab(tab || prefs.tab || "keys");
  // Na telefonu brez sistemske tipkovnice, ki bi prekrila nalogo.
  if (isTouch()) cur.input.setAttribute("inputmode", "none");
  document.documentElement.style.setProperty("--pad-h", pad.offsetHeight + "px");
  // Naloga naj bo na vrhu vidnega dela.
  const card = cur.form.closest(".task");
  requestAnimationFrame(() => card?.scrollIntoView({ block: "start" }));
}

export function closePad() {
  if (!pad) return;
  pad.hidden = true;
  document.body.classList.remove("pad-open");
  document.documentElement.style.setProperty("--pad-h", "0px");
  cur?.input.removeAttribute("inputmode");
}

// Po oddanem odgovoru: pri pravilnem odgovoru plošča izgine, da je vidna razlaga.
export function padAfterAnswer(correctOrDone) {
  if (correctOrDone) closePad();
}

// ---------------------------------------------------------------------------
// Risalna površina (prst, miška, pisalo). Pri pisalu so dotiki dlani prezrti.

function createInk(canvas) {
  const ctx = canvas.getContext("2d");
  const strokes = [];
  let active = null;
  let penSeen = false;
  let extra = 0; // dodatna višina (»+ prostor«)
  const api = { tool: "pen" };

  const color = () => getComputedStyle(canvas).color || "#111";

  function size() {
    const r = canvas.parentElement.getBoundingClientRect();
    return { w: r.width, h: canvas.clientHeight };
  }

  api.fit = () => {
    const base = canvas.parentElement.clientHeight - 2;
    if (base <= 0) return;
    canvas.style.height = base + extra + "px";
    const { w, h } = size();
    if (!w) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    redraw();
  };

  function drawStroke(c, s, ink) {
    c.save();
    c.globalCompositeOperation = s.tool === "eraser" ? "destination-out" : "source-over";
    c.strokeStyle = ink;
    c.lineWidth = s.tool === "eraser" ? 22 : 3;
    c.lineCap = c.lineJoin = "round";
    c.beginPath();
    const p = s.pts;
    c.moveTo(p[0][0], p[0][1]);
    if (p.length === 1) c.lineTo(p[0][0] + 0.1, p[0][1]);
    for (let i = 1; i < p.length; i++) c.lineTo(p[i][0], p[i][1]);
    c.stroke();
    c.restore();
  }

  function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const c = color();
    for (const s of strokes) drawStroke(ctx, s, c);
  }

  const pos = (e) => {
    const r = canvas.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  };

  canvas.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "pen") penSeen = true;
    if (penSeen && e.pointerType === "touch") return; // dlan na zaslonu
    if (e.button > 0) return;
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {}
    active = { id: e.pointerId, tool: e.button === 5 ? "eraser" : api.tool, pts: [pos(e)] };
    strokes.push(active);
    redraw();
    e.preventDefault();
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!active || e.pointerId !== active.id) return;
    const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    for (const ev of evs.length ? evs : [e]) active.pts.push(pos(ev));
    redraw();
    e.preventDefault();
  });
  const end = (e) => {
    if (active && e.pointerId === active.id) active = null;
  };
  canvas.addEventListener("pointerup", end);
  canvas.addEventListener("pointercancel", end);
  let lastWrapH = 0;
  new ResizeObserver(() => {
    const h = canvas.parentElement.clientHeight;
    if (h && h !== lastWrapH) {
      lastWrapH = h;
      api.fit();
    }
  }).observe(canvas.parentElement);

  api.undo = () => {
    strokes.pop();
    redraw();
  };
  api.clear = (resetSize = false) => {
    strokes.length = 0;
    if (resetSize) extra = 0;
    if (resetSize && canvas.width) api.fit();
    else redraw();
  };
  api.grow = () => {
    extra += 160;
    api.fit();
    canvas.parentElement.scrollTop = canvas.parentElement.scrollHeight;
  };

  // Izvoz za branje: le del s pisavo, črno na belem, največ 800 px → manj žetonov.
  api.exportImage = () => {
    const pen = strokes.filter((s) => s.tool === "pen");
    if (!pen.length) return null;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const s of pen) for (const [x, y] of s.pts) {
      x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y);
    }
    const m = 16;
    x0 -= m; y0 -= m; x1 += m; y1 += m;
    const w = x1 - x0, h = y1 - y0;
    const k = Math.min(1.5, 800 / Math.max(w, h));
    const W = Math.max(1, Math.round(w * k)), H = Math.max(1, Math.round(h * k));
    const layer = document.createElement("canvas");
    layer.width = W;
    layer.height = H;
    const lc = layer.getContext("2d");
    lc.setTransform(k, 0, 0, k, -x0 * k, -y0 * k);
    for (const s of strokes) drawStroke(lc, s, "#000");
    const out = document.createElement("canvas");
    out.width = W;
    out.height = H;
    const oc = out.getContext("2d");
    oc.fillStyle = "#fff";
    oc.fillRect(0, 0, W, H);
    oc.drawImage(layer, 0, 0);
    return out.toDataURL("image/png");
  };
  api.hasInk = () => strokes.some((s) => s.tool === "pen");
  return api;
}
