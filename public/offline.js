// Vaje brez povezave (lahki način).
// Ko je povezava, odjemalec enkrat na dan prenese paket nalog za trenutno učno pot
// (naloge z rešitvami, ~30 KB stisnjeno). Brez povezave vadnica jemlje naloge iz paketa
// in jih preverja v brskalniku (isti check.js kot strežnik). Odgovori čakajo v vrsti in
// se ob ponovni povezavi pošljejo strežniku, ki vsako nalogo iz semena ustvari znova,
// odgovor preveri še enkrat in podeli XP.
import { checkAnswer } from "/practice/check.js";

// Enako kot hintSteps v server/practice/index.js: podatki → formula → namig.
function hintSteps(t) {
  const steps = [];
  const given = t.data?.given?.filter(Boolean) || [];
  if (given.length) steps.push({ kind: "data", given, find: t.data?.find?.filter(Boolean) || [] });
  const formula = t.formula ? [].concat(t.formula).filter(Boolean) : [];
  if (formula.length) steps.push({ kind: "formula", formula });
  if (t.hint) steps.push({ kind: "hint", text: t.hint });
  return steps;
}

const PACK = (sid) => `stemmind.offline.pack.${sid}`;
const QUEUE = (sid) => `stemmind.offline.queue.${sid}`;
const DAY = 86400000;

const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

export const getPack = (sid) => read(PACK(sid), null);
export const pendingCount = (sid) => read(QUEUE(sid), []).length;
export const packTaskCount = (sid) => Object.values(getPack(sid)?.tasks || {}).reduce((n, list) => n + list.length, 0);

// Napaka omrežja (fetch ni uspel ali service worker javi, da ni povezave).
export class OfflineError extends Error {
  constructor() {
    super("offline");
    this.offline = true;
  }
}

// Prenese nov paket, če je stari starejši od dneva ali za drugo pot.
export async function refreshPack(api, sid, pathKey, { force = false } = {}) {
  if (!navigator.onLine) return getPack(sid);
  const old = getPack(sid);
  if (!force && old && old.path === pathKey && Date.now() - Date.parse(old.created) < DAY) return old;
  try {
    const pack = await api(`/api/students/${sid}/offline-pack?path=${encodeURIComponent(pathKey)}`);
    // Če ni prostora (zasebno okno, poln pomnilnik), paket preprosto ni na voljo.
    if (!write(PACK(sid), pack)) return old;
    return pack;
  } catch {
    return old;
  }
}

// Pošlje odgovore iz vrste. Vrne { synced, correct, xp } ali null, če ni česa poslati.
export async function syncOffline(api, sid) {
  const queue = read(QUEUE(sid), []);
  if (!queue.length || !navigator.onLine) return null;
  const out = await api(`/api/students/${sid}/offline-sync`, { method: "POST", body: { results: queue } });
  // Odstranimo samo poslane (med pošiljanjem so lahko prišli novi).
  const rest = read(QUEUE(sid), []).slice(queue.length);
  write(QUEUE(sid), rest);
  return out;
}

// Odgovor API iz paketa za klice, ki jih vadnica potrebuje. Vrne undefined, če klica ne zna.
let lastTask = null;
export function offlineApi(sid, url, opts = {}) {
  const pack = getPack(sid);
  if (!pack) return undefined;
  const u = new URL(url, location.origin);
  const p = u.pathname;
  const body = typeof opts.body === "string" ? JSON.parse(opts.body || "{}") : opts.body || {};

  if (p === "/api/topic") {
    const t = pack.topics[u.searchParams.get("id")];
    return t ? { ...t, explanation: null, offline: true } : undefined;
  }
  if (p === `/api/students/${sid}/path`) {
    const key = u.searchParams.get("key");
    return !key || key === pack.path ? { ...pack.view, defaultKey: pack.path, offline: true } : undefined;
  }
  if (p === `/api/students/${sid}/practice/next`) {
    const list = pack.tasks[body.topic_id];
    if (!list?.length) return undefined;
    // Po vrsti, da se naloge ne ponavljajo; ko zmanjka, začnemo znova.
    const done = new Set(read(QUEUE(sid), []).map((r) => `${r.topic_id}:${r.seed}`));
    const item = list.find((x) => !done.has(`${body.topic_id}:${x.seed}`)) || list[Math.floor(Math.random() * list.length)];
    lastTask = { ...item, topic_id: body.topic_id, attempts: 0, id: `off-${item.seed}` };
    return { task: { id: lastTask.id, mode: "practice", ...item.task }, state: { level: item.level, streak: 0 }, offline: true };
  }
  const m = /^\/api\/students\/\d+\/tasks\/(off-[^/]+)\/(answer|help|skip|read|hint)$/.exec(p);
  if (m && lastTask?.id === decodeURIComponent(m[1])) {
    if (m[2] === "hint") {
      const steps = hintSteps({ ...lastTask.task, hint: lastTask.hint });
      return { steps: steps.slice(0, Math.max(1, Number(body.step) || 1)), total: steps.length, offline: true };
    }
    if (m[2] !== "answer") throw new OfflineError();
    const res = checkAnswer(lastTask.answer, body.answer);
    const out = { kind: res.kind, message: res.message || null, ...(res.code ? { code: res.code, params: res.params || {} } : {}), offline: true };
    if (["format", "unit", "simplify"].includes(res.kind)) return { ...out, retry: true };
    lastTask.attempts += 1;
    // V vrsto gre samo prvi odgovor (tako kot prvi poskus na strežniku).
    if (lastTask.attempts === 1) {
      const queue = read(QUEUE(sid), []);
      queue.push({ topic_id: lastTask.topic_id, level: lastTask.level, seed: lastTask.seed, answer: String(body.answer ?? ""), at: new Date().toISOString() });
      write(QUEUE(sid), queue);
    }
    if (res.kind === "correct") return { ...out, correct: true, solution: lastTask.solution };
    return { ...out, correct: false, hint: lastTask.hint, ...(res.mistake ? { mistake: res.mistake } : {}), ...(lastTask.attempts >= 3 ? { solution: lastTask.solution, final: true } : {}) };
  }
  return undefined;
}
