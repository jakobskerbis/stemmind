// Branje in odstranjevanje strojnih blokov iz odgovorov modela:
// vrstice <<META ...>> (analitika) in blokov <<KARTICA V: … O: … >> (kartice za ponavljanje).

const META_RE = /<<META\b([\s\S]*?)>>/g;
const CARD_RE = /<<KARTICA\b([\s\S]*?)>>/g;
const MARKERS = ["<<META", "<<KARTICA"];

import { ALL_SUBJECTS } from "./subjects.js";

const VALID = {
  subject: ALL_SUBJECTS,
  mode: ["A", "B"],
  flag: ["none", "offtopic", "distress", "unsafe", "injection"],
};

function parseAttrs(body) {
  const attrs = {};
  // key="vrednost s presledki" | key=vrednost
  const re = /(\w+)=(?:"([^"]*)"|«([^»]*)»|»([^«]*)«|(\S+))/g;
  let m;
  while ((m = re.exec(body))) {
    attrs[m[1]] = (m[2] ?? m[3] ?? m[4] ?? m[5] ?? "").trim();
  }
  return attrs;
}

// Vrne zadnji META blok v besedilu kot objekt ali null.
export function parseMeta(text) {
  let last = null;
  for (const m of text.matchAll(META_RE)) last = m[1];
  if (last === null) return null;
  const a = parseAttrs(last);
  const pick = (key, fallback) => (VALID[key].includes(a[key]) ? a[key] : fallback);
  const topic = (a.topic || "-").slice(0, 80);
  return {
    subject: pick("subject", null),
    topic: topic === "-" || topic === "…" ? null : topic,
    error: a.error === "1" ? 1 : 0,
    mode: pick("mode", null),
    flag: pick("flag", "none"),
    done: a.done === "1" ? 1 : 0,
  };
}

// Kartice za ponavljanje iz odgovora: [{ front, back }] (največ `max`, brez praznih in podvojenih).
// Oznaki V:/O: sta enaki v vseh jezikih; sprejmemo tudi Q:/A: (angleški zapis).
export function parseCards(text, max = 3) {
  const out = [];
  const seen = new Set();
  for (const m of String(text || "").matchAll(CARD_RE)) {
    const body = m[1];
    const q = /(?:^|\n)[ \t]*(?:V|Q)[ \t]*:[ \t]*([\s\S]*?)(?=\n[ \t]*(?:O|A)[ \t]*:)/.exec(body);
    const a = /\n[ \t]*(?:O|A)[ \t]*:[ \t]*([\s\S]*)$/.exec(body);
    const front = (q?.[1] || "").trim().slice(0, 300);
    const back = (a?.[1] || "").trim().slice(0, 600);
    if (!front || !back) continue;
    const key = front.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ front, back });
    if (out.length >= max) break;
  }
  return out;
}

export function stripMeta(text) {
  return text
    .replace(META_RE, "")
    .replace(CARD_RE, "")
    .replace(/<<(?:META|KARTICA)\b[\s\S]*$/, "") // nedokončan blok (npr. odrezan odgovor)
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s+$/, "");
}

// Filter za pretakanje: sproti spušča besedilo naprej, a zadrži vse od
// začetka prvega strojnega bloka ("<<META" ali "<<KARTICA") naprej (in morebitno
// nedokončano predpono na koncu), da učenec strojnih blokov nikoli ne vidi.
export function createStreamFilter() {
  let buffer = "";
  let emitted = 0; // koliko znakov iz buffer je že šlo naprej
  let metaStarted = false;

  return {
    push(chunk) {
      buffer += chunk;
      if (metaStarted) return "";
      const from = Math.max(0, emitted - 10);
      const found = MARKERS.map((mk) => buffer.indexOf(mk, from)).filter((i) => i !== -1);
      const idx = found.length ? Math.min(...found) : -1;
      let safeEnd;
      if (idx !== -1) {
        metaStarted = true;
        safeEnd = idx;
      } else {
        // Zadrži konec, ki bi lahko bil začetek markerja (npr. "<", "<<M").
        safeEnd = buffer.length;
        for (let k = Math.min(9, buffer.length); k > 0; k--) {
          const tail = buffer.slice(-k);
          if (MARKERS.some((mk) => mk.length > k && mk.startsWith(tail))) {
            safeEnd = buffer.length - k;
            break;
          }
        }
      }
      // Presledke in prelome na koncu zadrži, dokler ne vemo, ali jim sledi META.
      while (safeEnd > emitted && /\s/.test(buffer[safeEnd - 1])) safeEnd--;
      if (safeEnd <= emitted) return "";
      const out = buffer.slice(emitted, safeEnd);
      emitted = safeEnd;
      return out;
    },
    // Na koncu vrne preostanek (brez strojnih blokov) in celotno surovo besedilo.
    end() {
      const rest = stripMeta(buffer.slice(emitted));
      return { rest, raw: buffer };
    },
  };
}
