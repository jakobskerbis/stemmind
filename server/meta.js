// Branje in odstranjevanje strojne vrstice <<META ...>> iz odgovorov modela.

const META_RE = /<<META\b([\s\S]*?)>>/g;
const MARKER = "<<META";

const VALID = {
  subject: ["MAT", "FIZ", "KEM"],
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
  };
}

export function stripMeta(text) {
  return text
    .replace(META_RE, "")
    .replace(/<<META\b[\s\S]*$/, "") // nedokončan blok (npr. odrezan odgovor)
    .replace(/\s+$/, "");
}

// Filter za pretakanje: sproti spušča besedilo naprej, a zadrži vse od
// začetka "<<META" naprej (in morebitno nedokončano predpono na koncu),
// da učenec META vrstice nikoli ne vidi.
export function createStreamFilter() {
  let buffer = "";
  let emitted = 0; // koliko znakov iz buffer je že šlo naprej
  let metaStarted = false;

  return {
    push(chunk) {
      buffer += chunk;
      if (metaStarted) return "";
      const idx = buffer.indexOf(MARKER, Math.max(0, emitted - MARKER.length));
      let safeEnd;
      if (idx !== -1) {
        metaStarted = true;
        safeEnd = idx;
      } else {
        // Zadrži konec, ki bi lahko bil začetek markerja (npr. "<", "<<M").
        safeEnd = buffer.length;
        for (let k = Math.min(MARKER.length - 1, buffer.length); k > 0; k--) {
          if (MARKER.startsWith(buffer.slice(-k))) {
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
    // Na koncu vrne preostanek (brez META) in celotno surovo besedilo.
    end() {
      const rest = stripMeta(buffer.slice(emitted));
      return { rest, raw: buffer };
    },
  };
}
