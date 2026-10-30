// Kdaj objaviti novo različico na Renderju (j, 2026-10-30: »optimiziraj samodejne posodobitve«).
// GitHub Actions to preveri vsakih 15 minut (.github/workflows/render-posodobitev.yml).
// Na Renderju s trajnim diskom vsaka objava pomeni ~1 minuto izpada, zato:
//  - objavi hitro (v ~15 min), ko nihče ne uporablja Evklida (miren strežnik);
//  - med uporabo počaka, a najdlje NAJDLJE_MIN od prve neobjavljene spremembe;
//  - med dvema objavama vsaj MED_OBJAVAMA_MIN (ne zaganja ves dan znova).
// Okolje: HOOK (Render Deploy Hook), GH_TOKEN, REPO, URL (privzeto https://<domena>), ROCNO=1 (takoj).
export const MIRNO_MIN = 10; // toliko minut nihče ni nič poslal
export const MED_OBJAVAMA_MIN = 60;
export const NAJDLJE_MIN = 180;

// stanje: odgovor /healthz/stanje ali null (strežnik ni dosegljiv)
// cakaMin: koliko minut je stara najstarejša neobjavljena sprememba v main
// zadnja: { sha, at } zadnje sprožene objave (predpomnilnik GitHub Actions) ali null
export function decide({ stanje, mainSha, cakaMin, rocno = false, zadnja = null, now = Date.now() }) {
  if (stanje && mainSha.startsWith(stanje.razlicica || "\0")) return { objavi: false, zakaj: "že teče zadnja različica" };
  if (rocno) return { objavi: true, zakaj: "ročni zagon" };
  // Ista različica je bila sprožena, a ne teče: objava še poteka ali ni uspela. Ne ponavljaj vsakih 15 min.
  if (zadnja?.sha === mainSha && now - zadnja.at < NAJDLJE_MIN * 60000) return { objavi: false, zakaj: "ta različica je že bila sprožena (objava poteka ali ni uspela)" };
  if (!stanje) return cakaMin >= MED_OBJAVAMA_MIN ? { objavi: true, zakaj: "strežnik ni dosegljiv, sprememba čaka že dolgo" } : { objavi: false, zakaj: "strežnik ni dosegljiv (morda se ravno objavlja)" };
  if (cakaMin >= NAJDLJE_MIN) return { objavi: true, zakaj: `sprememba čaka že ${Math.round(cakaMin)} min` };
  const gorMin = (stanje.gorMs ?? Infinity) / 60000;
  if (gorMin < MED_OBJAVAMA_MIN) return { objavi: false, zakaj: `zadnja objava pred ${Math.round(gorMin)} min` };
  const miren = !stanje.aktivni && (stanje.mirujeMs == null || stanje.mirujeMs >= MIRNO_MIN * 60000);
  return miren ? { objavi: true, zakaj: "strežnik je miren" } : { objavi: false, zakaj: "nekdo se ravno uči, počakam" };
}

// Od kdaj je v main sprememba, ki je na strežniku še ni. Commiti iz vej PR imajo stare datume,
// zato štejejo združitve (merge commit, datum = trenutek združitve); brez njih zadnji commit.
export function pendingSince(commits) {
  const date = (c) => Date.parse(c?.commit?.committer?.date || "");
  const merges = commits.filter((c) => (c.parents?.length || 0) > 1).map(date).filter(Number.isFinite);
  if (merges.length) return Math.min(...merges);
  const last = date(commits[commits.length - 1]);
  return Number.isFinite(last) ? last : null;
}

async function main() {
  const { HOOK, GH_TOKEN, REPO = "jakobskerbis/stemmind", ROCNO } = process.env;
  if (!HOOK) return console.log("RENDER_DEPLOY_HOOK ni nastavljen, preskočeno.");
  const { BRAND } = await import("../server/brand.js");
  const url = process.env.URL || `https://${BRAND.domain}`;
  const gh = async (p) => {
    const r = await fetch(`https://api.github.com/repos/${REPO}/${p}`, { headers: { Accept: "application/vnd.github+json", "User-Agent": "evklid-render-objava", ...(GH_TOKEN ? { Authorization: `Bearer ${GH_TOKEN}` } : {}) } });
    if (!r.ok) throw new Error(`GitHub ${p}: ${r.status}`);
    return r.json();
  };
  const mainSha = (await gh("commits/main")).sha;
  let stanje = null;
  try {
    const r = await fetch(`${url}/healthz/stanje`, { signal: AbortSignal.timeout(10000) });
    if (r.ok) stanje = await r.json();
  } catch {}
  let cakaMin = 0;
  try {
    const cmp = stanje?.razlicica ? await gh(`compare/${stanje.razlicica}...main`) : { commits: [await gh("commits/main")] };
    const t = pendingSince(cmp.commits || []);
    if (t) cakaMin = (Date.now() - t) / 60000;
  } catch {}
  const fs = await import("node:fs");
  const file = process.env.ZADNJA || ".render-objava.json";
  let zadnja = null;
  try { zadnja = JSON.parse(fs.readFileSync(file, "utf8")); } catch {}
  const d = decide({ stanje, mainSha, cakaMin, rocno: ROCNO === "1", zadnja });
  console.log(`main ${mainSha.slice(0, 12)}, strežnik ${stanje?.razlicica || "?"}, čaka ${Math.round(cakaMin)} min: ${d.zakaj}`);
  if (!d.objavi) return;
  const r = await fetch(HOOK, { method: "POST" });
  if (!r.ok) throw new Error(`Render: ${r.status}`);
  fs.writeFileSync(file, JSON.stringify({ sha: mainSha, at: Date.now() }));
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, "sprozeno=1\n");
  console.log("Objava sprožena.");
}

if (process.argv[1]?.endsWith("render-objava.js")) {
  main().catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
