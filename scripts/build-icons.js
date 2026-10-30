// Iz paketa lucide-static zgradi public/icons.js z ikonami, ki jih uporablja vmesnik.
//   node scripts/build-icons.js
import fs from "node:fs";
import path from "node:path";

const NAMES = [
  "map", "compass", "repeat", "clipboard-check", "zap", "message-circle", "chart-column", "settings", "user",
  "star", "flame", "check", "x", "lock", "pencil", "keyboard", "eraser", "undo-2", "trash-2", "plus", "eye",
  "camera", "send", "arrow-left", "arrow-right", "lightbulb", "trophy", "target", "puzzle", "book-open",
  "sparkles", "circle-help", "menu", "chevron-right", "graduation-cap", "play", "rotate-ccw", "award",
  "calendar", "info", "search", "users", "circle-check", "circle-x", "bot", "trending-up", "download", "flask-conical", "monitor-play", "refresh-cw", "medal", "timer", "skip-forward", "flag",
  "sigma", "sun", "moon", "sun-moon", "palette", "dices", "paintbrush", "mic", "square", "circle-arrow-up", "party-popper", "globe", "wifi-off", "cloud-upload", "feather", "message-square-heart",
  "library", "file-text", "list-checks", "external-link", "notebook-pen", "bell",
  // znanstveni kalkulator in enote
  "calculator", "atom", "ruler", "arrow-left-right",
  // grafični kalkulator
  "chart-spline", "square-function", "zoom-in", "zoom-out", "house", "maximize", "maximize-2", "minimize-2", "image-down", "save",
  "folder-open", "ellipsis-vertical", "pause", "table", "sliders-horizontal", "copy", "chevron-down", "delete", "corner-down-left",
  "wrench", "text", "redo-2", "activity", "chart-area", "flower", "infinity", "spline", "circle",
  // namestitev aplikacije
  "share", "square-plus", "smartphone",
  // kartice za ponavljanje
  "layers",
  // igre
  "gamepad-2", "volume-2", "volume-x", "heart",
  // števec porabe AI (samo skrbnik)
  "wallet",
  // meni profila (ime zgoraj desno)
  "user-plus", "log-out",
  // urnik
  "bell", "calendar-days", "calendar-clock", "link",
  // kotiček zanimanj
  "newspaper", "pin", "pin-off",
  // igre: zaklenjene igre in gradnja
  "unlock", "castle",
  // igre v slogu mobilnih iger (public/games/fun.js)
  "chef-hat", "car", "paw-print", "shopping-basket", "grid-2x2", "cherry", "droplet", "bomb", "blocks", "gem", "spade", "joystick",
  // skeniranje nalog (public/scan/)
  "scan-line", "scan-text", "badge-check", "image",
];
const dir = path.join("node_modules", "lucide-static", "icons");
const out = {};
for (const n of NAMES) {
  const svg = fs.readFileSync(path.join(dir, `${n}.svg`), "utf8");
  out[n] = svg.slice(svg.indexOf(">", svg.indexOf("<svg")) + 1, svg.lastIndexOf("</svg>")).replace(/\s*\n\s*/g, "").trim();
}
const js = `// Ikone Lucide (ISC licenca, https://lucide.dev). Ustvarjeno s scripts/build-icons.js.
const P = ${JSON.stringify(out, null, 0).replace(/","/g, '",\n  "')};

export function icon(name, cls = "") {
  const body = P[name] || "";
  return \`<svg class="i \${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\${body}</svg>\`;
}

// Zamenja <i data-icon="ime"></i> v HTML z ikonami.
export function hydrateIcons(root = document) {
  root.querySelectorAll("i[data-icon]").forEach((el) => {
    el.outerHTML = icon(el.dataset.icon, el.className);
  });
}
`;
fs.writeFileSync(path.join("public", "icons.js"), js);
console.log(`icons.js: ${Object.keys(out).length} ikon`);
