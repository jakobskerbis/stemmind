// Simulacije pri naravoslovju (OŠ 6. in 7. razred): razvrščanje s takojšnjo razlago.
// Učenec vidi kartico (organ, organizem, pojav …) in izbere skupino; po izbiri dobi razlago,
// napačne kartice pridejo na vrsto še enkrat na koncu kroga.
import { s, svgBox, button, buttons, readout, layout, label } from "./kit.js";
import { SETS } from "./nar-data.js";

function sortSim(el, set) {
  const out = readout();
  const def = SETS[set] || SETS.celica;
  const svg = svgBox(340, 130);
  const shuffle = (a) => a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);
  let queue = shuffle(def.items.map((_, i) => i)), again = new Set(), right = 0, total = 0, answered = false, cur = null;
  const catName = (k) => def.cats.find((c) => c[0] === k)[1];
  const draw = () => {
    svg.replaceChildren();
    s("rect", { x: 10, y: 10, width: 320, height: 110, rx: 14, class: "box" }, svg);
    const words = def.items[cur][0].split(" ");
    const lines = [];
    words.forEach((w) => (lines.length && (lines.at(-1) + " " + w).length < 28 ? (lines[lines.length - 1] += " " + w) : lines.push(w)));
    lines.forEach((ln, i) => label(svg, 170, 68 + (i - (lines.length - 1) / 2) * 22, ln, "lbl big"));
  };
  const score = () => `<p class="muted">Pravilnih odgovorov: ${right} od ${total}.</p>`;
  const next = () => {
    if (!queue.length) {
      // Krog je končan: napačne kartice še enkrat, nato nov krog.
      queue = again.size ? shuffle([...again]) : shuffle(def.items.map((_, i) => i));
      again = new Set();
    }
    cur = queue.shift();
    answered = false;
    draw();
    out.innerHTML = `<p>${def.q}</p>${score()}`;
  };
  const pick = (k) => {
    if (answered) return;
    answered = true;
    total++;
    const [, ans, why] = def.items[cur];
    const ok = ans === k;
    if (ok) right++;
    else again.add(cur);
    out.innerHTML = `<p>${ok ? '<b class="ok-text">Pravilno!</b>' : `<b class="bad-text">Ne čisto.</b> Pravilno je: <b>${catName(ans)}</b>.`} ${why}</p>${score()}`;
  };
  next();
  layout(el, {
    stage: svg,
    controls: [buttons(...def.cats.map(([k, t]) => button(t, () => pick(k), "secondary"))), buttons(button("Naslednja ▸", next, "primary small"))],
    out,
    tryText: def.try,
  });
}

export function uvrsti(el, { set = "celica" } = {}) {
  sortSim(el, set);
}

export const NAR_SETS = Object.keys(SETS);
