// Zbirke znanja in učni pass (j, 29. 10. 2026: dokument »Kozmetika in personalizacija v igrah Kompreno«).
// Predmeti se odklenejo samo z znanjem (obvladana tema), nikoli s kovanci ali denarjem; brez naključja.
// Redkost pomeni težavnost snovi: navadno (osnove OŠ), redko (8.–9. razred, NPZ), epsko (SŠ, matura),
// legendarno (tekmovalna raven, potrjeno v pogovoru z inštruktorjem). Pravila so podatki: nov predmet je
// nova vrstica tukaj (in risba spodaj), ne nova koda. Uporabljata ga odjemalec (risanje, pogoji) in strežnik
// (odklepanje v server/zbirke.js).
// Pot znanja (j, 29. 10. 2026 18:14): epski, legendarni in mitični predmeti za skupne XP, ki jih učenec
// zbere z učenjem, kot je bilo do zdaj urejeno; več XP pomeni več vloženega časa.

export const RARITY_TIER = { common: 1, rare: 2, epic: 3, legendary: 4, mythic: 5 };
export const RARITY_BY_TIER = ["common", "common", "rare", "epic", "legendary", "mythic"];

export const COLLECTIONS = [
  { id: "pse", subject: "KEM", slot: "badge", icon: "atom", name: { sl: "Periodni sistem", en: "Periodic table" } },
  { id: "fiz", subject: "FIZ", slot: "fx", icon: "zap", name: { sl: "Fizikalni efekti", en: "Physics effects" } },
  { id: "krivulje", subject: "MAT", slot: "bg", icon: "chart-spline", name: { sl: "Matematične krivulje", en: "Maths curves" } },
  { id: "pot", subject: null, slot: null, icon: "trophy", name: { sl: "Pot znanja", en: "Path of knowledge" } },
  { id: "lige", subject: null, slot: "badge", icon: "medal", name: { sl: "Zmage na lestvicah", en: "Leaderboard wins" } },
  { id: "igre", subject: null, slot: null, icon: "gamepad-2", name: { sl: "Liki iz iger", en: "Game characters" } },
];

// Zmaga na lestvici šteje, ko je na njej vsaj toliko učencev z XP (server/leagues.js).
export const AWARD_MIN = 3;
// Barve lig (kot .tier-0 … .tier-6 v leagues.css) za značke zmag.
export const LEAGUE_COLORS = ["#c27c45", "#8d99ae", "#f5a524", "#3b82f6", "#e5484d", "#16a05a", "#7c6cff"];

// Učni pass: dve sezoni na šolsko leto, 30 stopenj, XP samo iz učenja (nalog, obvladanih tem, treningov).
export const PASS = { tiers: 30, perTier: 300, dayCap: 400 };
// Nagrade passa: ista oblika vsako sezono, barva in letnica pa sta znak tiste sezone.
export const PASS_REWARDS = [
  { tier: 5, id: "pass_board" },
  { tier: 10, id: "pass_badge" },
  { tier: 15, id: "pass_pencil" },
  { tier: 20, id: "pass_coat" },
  { tier: 25, id: "pass_sparks" },
  { tier: 30, id: "pass_gold" },
];

// Sezona za datum: september–januar = 1, februar–avgust = 2 (poletje ostane v drugi sezoni).
export function seasonOf(date = new Date()) {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  if (m >= 9) return { key: `${y}-1`, year: y, half: 1, from: `${y}-09-01`, to: `${y + 1}-02-01` };
  if (m === 1) return { key: `${y - 1}-1`, year: y - 1, half: 1, from: `${y - 1}-09-01`, to: `${y}-02-01` };
  return { key: `${y - 1}-2`, year: y - 1, half: 2, from: `${y}-02-01`, to: `${y}-09-01` };
}
export const seasonLabel = (key) => {
  const [y, h] = String(key).split("-").map(Number);
  return `${String(y % 100).padStart(2, "0")}/${String((y + 1) % 100).padStart(2, "0")} ${h === 2 ? "II" : "I"}`;
};
// Barva sezone: jesen topla, pomlad zelena; vsako leto malo drugačen odtenek.
function seasonHue(key) {
  const [y, h] = String(key).split("-").map(Number);
  return ((h === 2 ? 130 : 22) + ((y - 2026) * 47) % 360 + 360) % 360;
}

// t: teme (id SŠ/OŠ poti; prva je zgled, ki ga pokažemo kot pogoj), kw: ključna beseda v imenu teme
// (\b pred besedo, kjer bi sicer ujela sredino druge: nekovine, vitamini, anorganska, trikotnik)
// istega predmeta, ki šteje, če je tema vsaj na ravni redkosti (velja tudi za regijske in fakultetne poti).
const k = (id, sym, z, cat, rarity, sl, en, t, kw) => ({ id, collection: "pse", slot: "badge", sym, z, cat, rarity, name: { sl, en }, need: { t, kw } });
const f = (id, rarity, sl, en, t, kw) => ({ id, collection: "fiz", slot: "fx", rarity, name: { sl, en }, need: { t, kw } });
const m = (id, rarity, sl, en, t, kw) => ({ id, collection: "krivulje", slot: "bg", rarity, name: { sl, en }, need: { t, kw } });

// Kdo je bil znanstvenik za predmetom (ena vrstica v pogledu »preglej«).
const ABOUT = {
  pot_vega: { sl: "Jurij Vega (1754–1802), slovenski matematik in topniški častnik, avtor slavnih logaritemskih tablic.", en: "Jurij Vega (1754–1802), Slovenian mathematician and artillery officer, author of famous logarithm tables." },
  pot_stefan: { sl: "Jožef Stefan (1835–1893), slovenski fizik: zakon sevanja j = σT⁴.", en: "Jožef Stefan (1835–1893), Slovenian physicist: radiation law j = σT⁴." },
  pot_radium: { sl: "Marie Curie je odkrila radij in polonij ter dobila dve Nobelovi nagradi.", en: "Marie Curie discovered radium and polonium and won two Nobel Prizes." },
  pot_pregl: { sl: "Friderik Pregl (1869–1930), slovenski kemik, Nobelova nagrada 1923 za mikroanalizo.", en: "Fritz Pregl (1869–1930), Slovenian chemist, Nobel Prize 1923 for microanalysis." },
  pot_noether: { sl: "Emmy Noether (1882–1935) je pokazala, da iz vsake simetrije v naravi sledi en ohranitveni zakon.", en: "Emmy Noether (1882–1935) showed that every symmetry in nature gives a conservation law." },
  pot_tesla: { sl: "Nikola Tesla (1856–1943), izumitelj izmeničnega toka in indukcijskega motorja.", en: "Nikola Tesla (1856–1943), inventor of alternating-current systems and the induction motor." },
};

export const KNOWLEDGE = [
  // Periodni sistem (značke elementov)
  k("el_h", "H", 1, "nonmetal", "common", "Vodik", "Hydrogen", ["KEM-OS-8/kisline-in-baze", "KEM-SS-2/kisline-in-baze"], "kislin"),
  k("el_he", "He", 2, "noble", "common", "Helij", "Helium", ["KEM-OS-8/zgradba-atoma", "KEM-SS-1/zgradba-atoma"], "zgradba atoma"),
  k("el_ne", "Ne", 10, "noble", "common", "Neon", "Neon", ["KEM-OS-8/periodni-sistem", "KEM-SS-1/periodni-sistem"], "periodni"),
  k("el_o", "O", 8, "nonmetal", "common", "Kisik", "Oxygen", ["KEM-OS-8/kemijska-reakcija"], "kemijska reakcija"),
  k("el_na", "Na", 11, "alkali", "common", "Natrij", "Sodium", ["KEM-OS-8/ionska-vez"], "ionsk"),
  k("el_fe", "Fe", 26, "metal", "common", "Železo", "Iron", ["KEM-OS-8/kovine"], "\\bkovin"),
  k("el_s", "S", 16, "nonmetal", "common", "Žveplo", "Sulfur", ["KEM-OS-8/nekovine"], "nekovin"),
  k("el_mg", "Mg", 12, "alkaline", "common", "Magnezij", "Magnesium", ["KEM-OS-8/energija-pri-reakcijah", "KEM-SS-1/energija-pri-reakcijah"], "energija pri reakcij"),
  k("el_c", "C", 6, "nonmetal", "rare", "Ogljik", "Carbon", ["KEM-OS-9/ogljik-in-organske-spojine", "KEM-OS-9/alkani-alkeni-alkini", "KEM-SS-3/ogljikovodiki"], "ogljik|\\borgansk"),
  k("el_n", "N", 7, "nonmetal", "rare", "Dušik", "Nitrogen", ["KEM-OS-9/amini-in-aminokisline", "KEM-OS-9/beljakovine"], "\\bamin|beljakovin"),
  k("el_ar", "Ar", 18, "noble", "rare", "Argon", "Argon", ["KEM-OS-9/mnozina-snovi", "KEM-OS-9/racunanje-z-mnozino-snovi", "KEM-SS-1/mnozina-snovi"], "množin"),
  k("el_cl", "Cl", 17, "halogen", "epic", "Klor", "Chlorine", ["KEM-SS-3/halogenoalkani-in-alkoholi"], "halogen"),
  k("el_cu", "Cu", 29, "metal", "epic", "Baker", "Copper", ["KEM-SS-2/galvanski-cleni-in-elektroliza", "KEM-SS-2/redoks-reakcije"], "redoks|galvansk|elektroliz"),
  k("el_pt", "Pt", 78, "metal", "epic", "Platina", "Platinum", ["KEM-SS-2/hitrost-reakcij", "KEM-SS-2/kemijsko-ravnotezje"], "hitrost reakcij|ravnotež"),
  k("el_ag", "Ag", 47, "metal", "epic", "Srebro", "Silver", ["KEM-SS-2/titracija"], "titracij"),
  // Fizikalni efekti (sled okoli avatarja)
  f("fx_refraction", "common", "Lom svetlobe", "Refraction", ["FIZ-OS-8/lom-svetlobe", "FIZ-SS-3/geometrijska-optika"], "lom svetlobe|optik"),
  f("fx_orbit", "common", "Tir planeta", "Planet orbit", ["FIZ-OS-8/nebo-in-osoncje", "FIZ-SS-2/gravitacijski-zakon"], "osončj|gravitacij"),
  f("fx_bubbles", "common", "Vzgon", "Buoyancy", ["FIZ-OS-8/vzgon", "FIZ-SS-1/tlak-in-vzgon"], "vzgon"),
  f("fx_speed", "common", "Hitrostne črte", "Speed lines", ["FIZ-OS-8/enakomerno-gibanje", "FIZ-OS-8/pospeseno-gibanje", "FIZ-SS-1/premo-enakomerno-gibanje"], "gibanj"),
  f("fx_spark", "rare", "Električna iskra", "Electric spark", ["FIZ-OS-9/elektricni-tok-in-napetost", "FIZ-OS-9/elektricni-naboj", "FIZ-SS-2/elektricni-naboj-in-coulombov-zakon"], "električn"),
  f("fx_field", "rare", "Magnetne silnice", "Magnetic field lines", ["FIZ-OS-9/magneti-in-magnetno-polje", "FIZ-OS-9/elektromagnet", "FIZ-SS-3/magnetno-polje"], "magnet"),
  f("fx_brown", "rare", "Brownovo gibanje", "Brownian motion", ["FIZ-OS-9/temperatura-in-notranja-energija", "FIZ-OS-9/toplota", "FIZ-SS-2/notranja-energija-in-toplota"], "toplot|notranja energija|plin"),
  f("fx_wave", "epic", "Valovanje", "Wave", ["FIZ-SS-3/nihanje", "FIZ-SS-3/valovanje", "FIZ-SS-3/zvok"], "nihanj|valovanj|zvok"),
  f("fx_interference", "epic", "Interferenca", "Interference", ["FIZ-SS-3/valovna-optika"], "valovna optika|interferenc"),
  f("fx_induction", "epic", "Indukcija", "Induction", ["FIZ-SS-3/indukcija"], "indukcij"),
  f("fx_atom", "epic", "Atom", "Atom", ["FIZ-SS-4/atom", "FIZ-SS-4/fotoefekt-in-foton", "FIZ-SS-4/jedro-in-radioaktivnost"], "atom|jedr|foton|radioaktiv"),
  // Edini legendarni predmet (največ 2 % vseh): tekmovalna raven, vsaj ena tema potrjena v pogovoru.
  { id: "fx_doppler", collection: "fiz", slot: "fx", rarity: "legendary", name: { sl: "Dopplerjev efekt", en: "Doppler effect" }, need: { tek: 3, chat: 1 } },
  // Matematične krivulje (ozadja)
  m("bg_symmetry", "common", "Simetrija", "Symmetry", ["MAT-OS-6/simetrija"], "simetrij"),
  m("bg_cube", "common", "Kocke", "Cubes", ["MAT-OS-6/kocka-in-kvader"], "kocka|kvader"),
  m("bg_fractions", "common", "Ulomki", "Fractions", ["MAT-OS-7/sestevanje-in-odstevanje-ulomkov", "MAT-OS-7/mnozenje-in-deljenje-ulomkov", "MAT-OS-6/ulomek-kot-del-celote"], "ulom"),
  m("bg_triangles", "common", "Trikotniki", "Triangles", ["MAT-OS-7/vrste-trikotnikov-in-notranji-koti", "MAT-OS-7/obseg-in-ploscina-trikotnika"], "trikotnik"),
  m("bg_pi", "rare", "Število π", "The number π", ["MAT-OS-8/obseg-in-ploscina-kroga", "MAT-OS-8/krozni-lok-in-krozni-izsek"], "krog|krožn"),
  m("bg_pythagoras", "rare", "Pitagorovo drevo", "Pythagoras tree", ["MAT-OS-8/pitagorov-izrek", "MAT-OS-8/uporaba-pitagorovega-izreka"], "pitagor"),
  m("bg_line", "rare", "Premica", "Straight line", ["MAT-OS-9/linearna-funkcija", "MAT-OS-9/graf-linearne-funkcije", "MAT-SS-1/linearna-funkcija"], "linearna funkcij|premic"),
  m("bg_bell", "rare", "Gaussova krivulja", "Bell curve", ["MAT-OS-9/statisticna-raziskava", "MAT-SS-4/statistika"], "statisti"),
  m("bg_parabola", "epic", "Parabola", "Parabola", ["MAT-SS-2/kvadratna-funkcija", "MAT-SS-2/kvadratna-enacba"], "kvadratn"),
  m("bg_exp", "epic", "Eksponentna rast", "Exponential growth", ["MAT-SS-2/eksponentna-funkcija", "MAT-SS-2/logaritem"], "eksponent|logarit"),
  m("bg_sine", "epic", "Sinusoida", "Sine wave", ["MAT-SS-3/grafi-kotnih-funkcij", "MAT-SS-3/kotne-funkcije-poljubnega-kota"], "\\bkotn"),
  m("bg_lissajous", "epic", "Lissajousova krivulja", "Lissajous curve", ["MAT-SS-3/adicijski-izreki", "MAT-SS-3/trigonometrijske-enacbe"], "adicijsk|trigonometrijsk"),
  m("bg_spiral", "epic", "Fibonaccijeva spirala", "Fibonacci spiral", ["MAT-SS-4/zaporedja", "MAT-SS-4/aritmeticno-in-geometrijsko-zaporedje"], "zaporedj"),
  m("bg_fractal", "epic", "Sierpińskijev trikotnik", "Sierpiński triangle", ["MAT-SS-4/geometrijska-vrsta"], "vrsta"),
  // Kompleti: celota snovi, ne naključje
  { id: "outfit_pse", collection: "pse", slot: "outfit", rarity: "epic", set: true, name: { sl: "Halja s periodnim sistemom", en: "Periodic-table lab coat" }, need: { own: 10 } },
  { id: "acc_spectro", collection: "fiz", slot: "acc", rarity: "epic", set: true, name: { sl: "Spektroskopska očala", en: "Spectroscope goggles" }, need: { own: 8 } },
  { id: "outfit_euler", collection: "krivulje", slot: "outfit", rarity: "epic", set: true, name: { sl: "Eulerjev pulover", en: "Euler sweater" }, need: { own: 9 } },
  // Pot znanja: skupni XP (vse, kar učenec zbere z učenjem); epsko → legendarno → mitično
  ...[
    ["pot_hourglass", "fx", "epic", 2000, "Peščena ura", "Hourglass"],
    ["pot_owl", "hat", "epic", 4000, "Sova modrosti", "Owl of wisdom"],
    ["pot_vega", "outfit", "epic", 6000, "Vegova uniforma", "Vega's uniform"],
    ["pot_library", "bg", "epic", 8000, "Knjižnica", "Library"],
    ["pot_dividers", "badge", "epic", 10000, "Šestilo", "Compasses"],
    ["pot_stefan", "outfit", "legendary", 15000, "Stefanov frak", "Stefan's tailcoat"],
    ["pot_radium", "fx", "legendary", 20000, "Sij radija", "Radium glow"],
    ["pot_laurel", "hat", "legendary", 30000, "Lovorov venec", "Laurel wreath"],
    ["pot_observatory", "bg", "legendary", 40000, "Observatorij", "Observatory"],
    ["pot_pregl", "acc", "legendary", 50000, "Preglova lupa", "Pregl's magnifier"],
    ["pot_noether", "bg", "mythic", 60000, "Simetrija Emmy Noether", "Emmy Noether's symmetry"],
    ["pot_aurora", "fx", "mythic", 80000, "Polarni sij", "Aurora"],
    ["pot_tesla", "outfit", "mythic", 100000, "Teslov plašč", "Tesla's coat"],
    ["pot_infinity", "badge", "mythic", 120000, "Neskončnost", "Infinity"],
  ].map(([id, slot, rarity, xp, sl, en]) => ({ id, collection: "pot", slot, rarity, name: { sl, en }, need: { xp }, ...(ABOUT[id] ? { about: ABOUT[id] } : {}) })),
  // Zmage na lestvicah (server/leagues.js): 1. mesto v tedenski skupini po ligi, stopničke, mesečni prvak.
  ...[
    ["Bronasti", "Bronze", "rare"],
    ["Srebrni", "Silver", "rare"],
    ["Zlati", "Gold", "epic"],
    ["Safirni", "Sapphire", "epic"],
    ["Rubinasti", "Ruby", "legendary"],
    ["Smaragdni", "Emerald", "legendary"],
    ["Diamantni", "Diamond", "mythic"],
  ].map(([sl, en, rarity], tier) => ({ id: `win_week_${tier}`, collection: "lige", slot: "badge", rarity, name: { sl: `Zmaga v ${sl} ligi`, en: `${en} league win` }, need: { league: "week", tier } })),
  { id: "win_week_podium", collection: "lige", slot: "badge", rarity: "rare", name: { sl: "Tedenske stopničke", en: "Weekly podium" }, need: { league: "weekPodium" } },
  { id: "win_month_podium", collection: "lige", slot: "badge", rarity: "epic", name: { sl: "Mesečne stopničke", en: "Monthly podium" }, need: { league: "monthPodium" } },
  { id: "win_month", collection: "lige", slot: "badge", rarity: "legendary", name: { sl: "Mesečni prvak", en: "Monthly champion" }, need: { league: "month" } },
  // Liki in predmeti iz iger: pravilni odgovori v igrah (games) ali število različnih uspešno končanih iger (cleared).
  ...[
    ["kind_cat", "kind", "common", { games: 20 }, "Mačka", "Cat"],
    ["kind_bunny", "kind", "common", { cleared: 3 }, "Zajček", "Bunny"],
    ["kind_bear", "kind", "common", { games: 60 }, "Medvedek", "Bear"],
    ["acc_joystick", "acc", "rare", { games: 100 }, "Igralni plošček", "Game controller"],
    ["kind_mouse", "kind", "rare", { games: 150 }, "Miška", "Mouse"],
    ["kind_penguin", "kind", "rare", { cleared: 10 }, "Pingvin", "Penguin"],
    ["kind_fox", "kind", "rare", { games: 300 }, "Lisica", "Fox"],
    ["hat_pixel", "hat", "epic", { cleared: 15 }, "Pikselna krona", "Pixel crown"],
    ["kind_owl", "kind", "epic", { cleared: 25 }, "Sova", "Owl"],
    ["kind_koala", "kind", "epic", { games: 600 }, "Koala", "Koala"],
    ["bg_arcade", "bg", "epic", { games: 800 }, "Arkada", "Arcade"],
    ["kind_alien", "kind", "epic", { cleared: 50 }, "Vesoljček", "Alien"],
    ["kind_dino", "kind", "legendary", { games: 1200 }, "Dinozaver", "Dinosaur"],
    ["fx_pixels", "fx", "legendary", { games: 1800 }, "Pikselne iskrice", "Pixel sparkles"],
    ["kind_unicorn", "kind", "legendary", { cleared: 100 }, "Samorog", "Unicorn"],
    ["kind_dragon", "kind", "legendary", { games: 2500 }, "Zmaj", "Dragon"],
  ].map(([id, slot, rarity, need, sl, en]) => ({ id, collection: "igre", slot, rarity, name: { sl, en }, need })),
  // Učni pass (sezonski; barva in letnica sezone)
  { id: "pass_board", collection: "pass", slot: "bg", rarity: "common", tier: 5, name: { sl: "Šolska tabla", en: "Chalkboard" } },
  { id: "pass_badge", collection: "pass", slot: "badge", rarity: "common", tier: 10, name: { sl: "Značka sezone", en: "Season badge" } },
  { id: "pass_pencil", collection: "pass", slot: "acc", rarity: "common", tier: 15, name: { sl: "Svinčnik za ušesom", en: "Pencil behind the ear" } },
  { id: "pass_coat", collection: "pass", slot: "outfit", rarity: "rare", tier: 20, name: { sl: "Sezonski laboratorijski plašč", en: "Season lab coat" } },
  { id: "pass_sparks", collection: "pass", slot: "fx", rarity: "rare", tier: 25, name: { sl: "Iskrice znanja", en: "Sparks of knowledge" } },
  { id: "pass_gold", collection: "pass", slot: "badge", rarity: "rare", tier: 30, name: { sl: "Zlata značka letnika", en: "Golden year badge" } },
].map((x) => ({ ...x, v: 1, earn: true }));
export const KITEM = Object.fromEntries(KNOWLEDGE.map((x) => [x.id, x]));

// Id v inventarju: predmeti passa nosijo sezono (»pass_coat~2026-1«), ostali so brez pripone.
export const baseId = (id) => String(id || "").split("~")[0];
export const variantOf = (id) => String(id || "").split("~")[1] || "";

// Raven teme: 1 osnove OŠ, 2 8.–9. razred (pri MAT) ali 9. razred (FIZ, KEM), 3 SŠ in višje, 4 tekmovanja.
export function topicTier(path) {
  if (!path) return 2;
  if (path.school === "TEK") return 4;
  if (["SS", "EX", "EXB", "UNI"].includes(path.school)) return 3;
  const g = Number(path.grade) || 0;
  if (path.school === "OS") return g <= 7 || (g === 8 && path.subject !== "MAT") ? 1 : 2;
  return g >= 10 ? 3 : g >= 8 ? 2 : 1;
}

// ---------- risanje (viewBox 0 0 100 100, kot public/avatar.js) ----------
const INK = "#1f2937";
const CAT = { nonmetal: ["#bbf7d0", "#15803d"], noble: ["#ddd6fe", "#6d28d9"], alkali: ["#fecaca", "#b91c1c"], alkaline: ["#fed7aa", "#c2410c"], metal: ["#fde68a", "#a16207"], halogen: ["#a5f3fc", "#0e7490"] };

// Ploščica elementa (tudi za kartico v zbirki).
export function elementTile(x, { x0 = 56, y0 = 73, s = 20 } = {}) {
  const [bg, fg] = CAT[x.cat] || CAT.nonmetal;
  return `<g transform="translate(${x0} ${y0}) scale(${s / 20})"><rect width="20" height="20" rx="3" fill="${bg}" stroke="${INK}" stroke-width="1.6"/><text x="3" y="6.6" font-size="5" font-family="system-ui,sans-serif" fill="${fg}">${x.z}</text><text x="10" y="16.4" font-size="${x.sym.length > 1 ? 9 : 10.5}" font-weight="700" text-anchor="middle" font-family="system-ui,sans-serif" fill="${INK}">${x.sym}</text></g>`;
}

// Medalja z barvnim trakom (središče 64, 82 kot ostale značke).
const medal = (ribbon, face, inner) =>
  `<g transform="translate(64 82)"><path d="M-7-14l4 9h6l4-9z" fill="${ribbon}" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"/><path d="M-2-14l2 5 2-5" stroke="#fff" stroke-width="1.2" fill="none" opacity=".7"/><circle r="9.5" fill="${face}" stroke="${INK}" stroke-width="1.8"/><circle r="7" fill="none" stroke="#fff" stroke-width=".9" opacity=".7"/>${inner}</g>`;
const ONE = `<text y="3.6" font-size="10" font-weight="800" text-anchor="middle" font-family="system-ui,sans-serif" fill="${INK}">1</text>`;
const BADGE = {
  ...Object.fromEntries(LEAGUE_COLORS.map((c, i) => [`win_week_${i}`, () => medal(c, c, ONE)])),
  win_week_podium: () =>
    `<g transform="translate(64 83)"><rect x="-11" y="-2" width="7" height="9" fill="#cbd5e1" stroke="${INK}" stroke-width="1.4"/><rect x="-3.5" y="-7" width="7" height="14" fill="#facc15" stroke="${INK}" stroke-width="1.4"/><rect x="4" y="0" width="7" height="7" fill="#d97706" stroke="${INK}" stroke-width="1.4"/><path d="M0-14l1.6 3.3 3.6.4-2.7 2.4.8 3.5-3.3-1.9-3.3 1.9.8-3.5-2.7-2.4 3.6-.4z" fill="#fde047" stroke="${INK}" stroke-width=".9" stroke-linejoin="round"/></g>`,
  win_month_podium: () => medal("#0ea5e9", "#e0f2fe", `<g fill="none" stroke="${INK}" stroke-width="1.3"><rect x="-4.5" y="-3.5" width="9" height="8" rx="1"/><path d="M-4.5-1h9"/></g><text y="3.6" font-size="4.2" font-weight="800" text-anchor="middle" font-family="system-ui,sans-serif" fill="${INK}">1–3</text>`),
  win_month: () =>
    `<g transform="translate(64 82)"><path d="M-9-11h18v4q0 9-9 10-9-1-9-10z" fill="#facc15" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M-9-8h-3q0 6 4 7M9-8h3q0 6-4 7" fill="none" stroke="${INK}" stroke-width="1.4"/><path d="M-2 3h4v4h4v4h-12v-4h4z" fill="#ca8a04" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"/><path d="M0-9l1.4 2.8 3 .4-2.2 2 .6 3-2.8-1.5-2.8 1.5.6-3-2.2-2 3-.4z" fill="#fff"/></g>`,
  pot_dividers: () => `<g transform="translate(64 81)"><circle r="12" fill="#ede9fe" stroke="${INK}" stroke-width="1.8"/><path d="M-6 6a9 9 0 0 1 12 0" stroke="#a855f7" stroke-width="2" fill="none"/><path d="M0-8L-6 7M0-8L6 7" stroke="#334155" stroke-width="2.6" stroke-linecap="round"/><circle cy="-8" r="2.4" fill="#a855f7" stroke="${INK}" stroke-width="1"/><path d="M6 7l1 3" stroke="#334155" stroke-width="1.6"/></g>`,
  pot_infinity: () => `<g transform="translate(64 82)"><circle r="11" fill="#fff1f2" stroke="#e11d48" stroke-width="1.8"/><circle r="8.6" fill="none" stroke="#fda4af" stroke-width=".8"/><path d="M0 0c-2-3-7-3-7 0s5 3 7 0 7-3 7 0-5 3-7 0z" fill="none" stroke="#be123c" stroke-width="2.2"/><circle cx="-7" cy="-8" r="1" fill="#fde047"/><circle cx="8" cy="7" r="1" fill="#fde047"/></g>`,
  pass_badge: (v) => {
    const h = seasonHue(v);
    return `<g transform="translate(64 83)"><circle r="9" fill="hsl(${h} 85% 60%)" stroke="${INK}" stroke-width="1.6"/><circle r="6.4" fill="none" stroke="#fff" stroke-width="1" opacity=".8"/><text y="1.8" font-size="5" font-weight="700" text-anchor="middle" font-family="system-ui,sans-serif" fill="${INK}">${seasonLabel(v || "2026-1").split(" ")[1]}</text></g>`;
  },
  pass_gold: (v) =>
    `<g transform="translate(64 82)"><path d="M-5 6l-3 9 4-2 4 3 0-10zM5 6l3 9-4-2-4 3 0-10z" fill="hsl(${seasonHue(v)} 80% 55%)" stroke="${INK}" stroke-width="1.2"/><circle r="9" fill="#facc15" stroke="${INK}" stroke-width="1.6"/><path d="M0-5l1.5 3.2 3.5.4-2.6 2.3.8 3.5L0 2.6-3.2 4.4l.8-3.5-2.6-2.3 3.5-.4z" fill="#fff7cc" stroke="#a16207" stroke-width=".8"/></g>`,
};

// Sledi: back = za telesom, front = pred njim.
const FX = {
  pot_hourglass: {
    front: () => `<g transform="translate(86 24)"><path d="M-7-11h14M-7 11h14" stroke="#92400e" stroke-width="2.4" stroke-linecap="round"/><path d="M-5.5-10q0 7 5.5 10q-5.5 3-5.5 10h11q0-7-5.5-10q5.5-3 5.5-10z" fill="#e0f2fe" fill-opacity=".8" stroke="${INK}" stroke-width="1.4"/><path d="M-3.5-6h7l-3.5 5zM-4 9q4-4 8 0z" fill="#f59e0b"/><path d="M0 0v6" stroke="#f59e0b" stroke-width="1" stroke-dasharray="1 1"/></g>`,
  },
  pot_radium: {
    back: (v, u) => `<defs><radialGradient id="rad${u}"><stop offset=".45" stop-color="#bef264" stop-opacity=".9"/><stop offset="1" stop-color="#4ade80" stop-opacity="0"/></radialGradient></defs><ellipse cx="50" cy="60" rx="48" ry="44" fill="url(#rad${u})"/>`,
    front: () => [[12, 30], [88, 40], [16, 80], [84, 86], [50, 8]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2" fill="#d9f99d" stroke="#65a30d" stroke-width=".8"/>`).join(""),
  },
  pot_aurora: {
    back: () => `<path d="M0 30q25-22 50-8t50-10v18q-25 14-50 6T0 44z" fill="#34d399" opacity=".55"/><path d="M0 18q25-14 50-2t50-12v12q-25 12-50 2T0 30z" fill="#a78bfa" opacity=".5"/><path d="M0 40q30-12 55-2t45-6v8q-25 10-50 2T0 48z" fill="#22d3ee" opacity=".45"/>`,
    front: () => [[10, 12], [92, 10], [70, 4]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#f8fafc"/>`).join(""),
  },
  fx_refraction: {
    back: () => `<path d="M2 40L30 56" stroke="#fff" stroke-width="3" opacity=".9"/><path d="M30 56l-12 6 6-14z" fill="#e0f2fe" stroke="#64748b" stroke-width="1"/>${["#ef4444", "#f59e0b", "#facc15", "#22c55e", "#3b82f6", "#8b5cf6"].map((c, i) => `<path d="M24 56L${100} ${60 + i * 6}" stroke="${c}" stroke-width="2.4" opacity=".75"/>`).join("")}`,
  },
  fx_orbit: {
    back: () => `<ellipse cx="50" cy="58" rx="46" ry="16" fill="none" stroke="#fde68a" stroke-width="1.6" stroke-dasharray="3 3" transform="rotate(-14 50 58)"/>`,
    front: () => `<circle cx="10" cy="72" r="5.5" fill="#60a5fa" stroke="${INK}" stroke-width="1.4"/><path d="M6 70q4 3 9 0" stroke="#16a34a" stroke-width="1.6" fill="none"/>`,
  },
  fx_bubbles: {
    front: () => [[12, 80, 4], [18, 62, 3], [10, 44, 2.4], [88, 76, 3.6], [84, 54, 2.6], [90, 36, 2]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#bae6fd" fill-opacity=".45" stroke="#0284c7" stroke-width="1"/><circle cx="${x - r / 3}" cy="${y - r / 3}" r="${r / 4}" fill="#fff"/>`).join(""),
  },
  fx_speed: {
    back: () => `<g stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round">${[[2, 40, 16], [0, 54, 14], [4, 68, 13], [2, 82, 15]].map(([x, y, l]) => `<path d="M${x} ${y}h${l}"/>`).join("")}</g>`,
  },
  fx_spark: {
    front: () => `<path d="M14 10l-6 14h7l-5 13 13-18h-7l5-9z" fill="#facc15" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/><path d="M86 16l-4 9h5l-3 9 9-12h-5l3-6z" fill="#fde047" stroke="${INK}" stroke-width="1.2" stroke-linejoin="round"/>`,
  },
  fx_field: {
    back: () => `<g fill="none" stroke="#f43f5e" stroke-width="1.4" opacity=".75">${[14, 22, 30, 38].map((r) => `<path d="M50 ${58 - r * 0.2}C${50 - r * 2.4} ${58 - r * 1.4} ${50 - r * 2.4} ${58 + r * 1.4} 50 ${58 + r * 0.2}M50 ${58 - r * 0.2}C${50 + r * 2.4} ${58 - r * 1.4} ${50 + r * 2.4} ${58 + r * 1.4} 50 ${58 + r * 0.2}"/>`).join("")}</g>`,
  },
  fx_brown: {
    back: () => `<path d="M8 20l8 6-3 8 9 3-4 9 7 5" stroke="#a78bfa" stroke-width="1.2" fill="none" stroke-dasharray="2 1.5"/>${[[8, 20], [16, 26], [13, 34], [22, 37], [18, 46], [25, 51], [80, 14], [88, 24], [92, 40], [84, 86]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2" fill="#8b5cf6"/>`).join("")}`,
  },
  fx_wave: {
    back: () => `<path d="M0 22q6.25-10 12.5 0t12.5 0 12.5 0 12.5 0 12.5 0 12.5 0 12.5 0 12.5 0" stroke="#22d3ee" stroke-width="2.6" fill="none"/><path d="M0 30q6.25-6 12.5 0t12.5 0 12.5 0 12.5 0 12.5 0 12.5 0 12.5 0 12.5 0" stroke="#0891b2" stroke-width="1.4" fill="none" opacity=".7"/>`,
  },
  fx_interference: {
    back: () => `<g fill="none" stroke="#38bdf8" stroke-width="1.1" opacity=".7">${[8, 16, 24, 32, 40].map((r) => `<circle cx="30" cy="8" r="${r}"/><circle cx="70" cy="8" r="${r}"/>`).join("")}</g>`,
  },
  fx_induction: {
    back: () => `<g fill="none" stroke="#f59e0b" stroke-width="2">${[0, 1, 2, 3, 4].map((i) => `<ellipse cx="${8 + i * 4}" cy="60" rx="3" ry="11"/>`).join("")}</g><path d="M2 46h22" stroke="#ef4444" stroke-width="2"/><path d="M20 43l4 3-4 3" stroke="#ef4444" stroke-width="2" fill="none"/><rect x="74" y="54" width="22" height="9" rx="2" fill="#ef4444" stroke="${INK}" stroke-width="1.4"/><rect x="85" y="54" width="11" height="9" rx="2" fill="#3b82f6" stroke="${INK}" stroke-width="1.4"/>`,
  },
  fx_atom: {
    back: () => `<g fill="none" stroke="#a5b4fc" stroke-width="1.6">${[0, 60, 120].map((a) => `<ellipse cx="50" cy="56" rx="47" ry="14" transform="rotate(${a} 50 56)"/>`).join("")}</g>`,
    front: () => `<circle cx="96" cy="56" r="2.6" fill="#6366f1"/><circle cx="26.5" cy="15.3" r="2.6" fill="#6366f1"/><circle cx="26.5" cy="96.7" r="2.6" fill="#6366f1"/>`,
  },
  fx_doppler: {
    back: () => `<g fill="none" stroke-width="1.8">${[10, 20, 30, 40, 50].map((r, i) => `<circle cx="${50 - i * 6}" cy="56" r="${r}" stroke="hsl(${i * 70} 85% 55%)" opacity="${0.9 - i * 0.12}"/>`).join("")}</g>`,
    front: () => `<path d="M88 14l2 4.5 5 .5-3.8 3.3 1.2 4.9-4.4-2.6-4.4 2.6 1.2-4.9-3.8-3.3 5-.5z" fill="#fde047" stroke="${INK}" stroke-width="1.1"/>`,
  },
  fx_pixels: {
    front: () =>
      [[10, 22, "#f472b6"], [88, 16, "#22d3ee"], [92, 58, "#a3e635"], [7, 60, "#facc15"], [16, 88, "#60a5fa"], [86, 86, "#fb923c"]]
        .map(([x, y, c], i) => `<g transform="translate(${x} ${y}) rotate(${i * 15})" fill="${c}" stroke="${INK}" stroke-width=".8"><rect x="-1.6" y="-5" width="3.2" height="10"/><rect x="-5" y="-1.6" width="10" height="3.2"/></g>`)
        .join(""),
  },
  pass_sparks: {
    front: (v) => {
      const h = seasonHue(v);
      return [[12, 18, 1], [86, 12, 0.8], [90, 70, 1.1], [8, 64, 0.7]].map(([x, y, s]) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0-6L1.6-1.6 6 0 1.6 1.6 0 6-1.6 1.6-6 0-1.6-1.6z" fill="hsl(${h} 90% 62%)" stroke="${INK}" stroke-width=".9"/>`).join("");
    },
  },
};

// Pikselni vesoljček (8 × 6) za ozadje Arkada.
const INVADER = ["00100100", "00011000", "00111100", "01011010", "11111111", "10100101"];
const pixels = (rows, x0, y0, s, c) => rows.flatMap((r, y) => [...r].map((b, x) => (b === "1" ? `<rect x="${x0 + x * s}" y="${y0 + y * s}" width="${s}" height="${s}"/>` : ""))).join("").replace(/^/, `<g fill="${c}">`) + "</g>";
const BG = {
  bg_arcade: () =>
    `<rect width="100" height="100" fill="#1e1b4b"/><g stroke="#4338ca" stroke-width=".5" opacity=".6">${Array.from({ length: 9 }, (_, i) => `<path d="M${(i + 1) * 10} 0V100M0 ${(i + 1) * 10}H100"/>`).join("")}</g>${pixels(INVADER, 6, 8, 2, "#a3e635")}${pixels(INVADER, 76, 12, 2, "#f472b6")}${pixels(INVADER, 8, 70, 1.6, "#22d3ee")}<rect x="0" y="94" width="100" height="6" fill="#facc15"/><g fill="#fde047">${[[30, 10], [60, 6], [92, 40], [4, 44]].map(([x, y]) => `<rect x="${x}" y="${y}" width="2" height="2"/>`).join("")}</g>`,
  pot_library: () => `<rect width="100" height="100" fill="#78350f"/>${[8, 38, 68].map((y) => `<rect x="0" y="${y + 24}" width="100" height="4" fill="#451a03"/>${Array.from({ length: 12 }, (_, i) => `<rect x="${2 + i * 8.2}" y="${y + 4 + (i % 3) * 2}" width="7" height="${20 - (i % 3) * 2}" fill="${["#dc2626", "#2563eb", "#16a34a", "#ca8a04", "#7c3aed", "#0891b2"][(i + y) % 6]}" stroke="#1c1917" stroke-width=".5"/>`).join("")}`).join("")}`,
  pot_observatory: () => `<rect width="100" height="100" fill="#0f172a"/><g fill="#e2e8f0">${[[8, 10], [22, 30], [40, 8], [60, 20], [78, 6], [92, 26], [70, 40], [12, 50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.1"/>`).join("")}</g><circle cx="84" cy="16" r="6" fill="#fef9c3"/><path d="M0 100V86h100v14z" fill="#1e293b"/><path d="M91 77l8-8" stroke="#94a3b8" stroke-width="3"/><path d="M80 86a10 10 0 0 1 20 0z" fill="#cbd5e1" stroke="#475569" stroke-width="1"/><path d="M90 76v10" stroke="#475569" stroke-width="1.2"/>`,
  pot_noether: (v, u) => `<defs><radialGradient id="nb${u}"><stop offset="0" stop-color="#4c1d95"/><stop offset="1" stop-color="#1e1b4b"/></radialGradient></defs><rect width="100" height="100" fill="url(#nb${u})"/><g transform="translate(50 54)" fill="none">${Array.from({ length: 12 }, (_, i) => `<ellipse rx="44" ry="12" transform="rotate(${i * 15})" stroke="${i % 2 ? "#fbbf24" : "#c084fc"}" stroke-width=".8" opacity=".7"/>`).join("")}<circle r="20" stroke="#fde68a" stroke-width="1"/><circle r="46" stroke="#a78bfa" stroke-width=".8"/></g>`,
  bg_symmetry: () => `<rect width="100" height="100" fill="#fdf2f8"/><path d="M50 0V100" stroke="#f9a8d4" stroke-width="1" stroke-dasharray="3 2"/><g fill="#f472b6" opacity=".55"><path d="M50 10q-20 2-30 18q14 2 30-6z"/><path d="M50 10q20 2 30 18q-14 2-30-6z"/><circle cx="20" cy="70" r="7"/><circle cx="80" cy="70" r="7"/></g>`,
  bg_cube: () => `<rect width="100" height="100" fill="#eff6ff"/>${[[16, 18], [84, 22], [14, 78], [86, 80]].map(([x, y]) => `<g transform="translate(${x} ${y})"><path d="M0-9l9 5v10l-9 5-9-5V-4z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1"/><path d="M0 1l9-5M0 1l-9-5M0 1v10" stroke="#1d4ed8" stroke-width="1" fill="none"/></g>`).join("")}`,
  bg_fractions: () => `<rect width="100" height="100" fill="#fff7ed"/>${[[18, 20, 4], [82, 20, 3], [16, 82, 8], [84, 82, 6]].map(([x, y, n]) => `<g transform="translate(${x} ${y})"><circle r="11" fill="#fdba74" stroke="#c2410c" stroke-width="1"/>${Array.from({ length: n }, (_, i) => `<path d="M0 0L${11 * Math.cos((2 * Math.PI * i) / n)} ${11 * Math.sin((2 * Math.PI * i) / n)}" stroke="#c2410c" stroke-width="1"/>`).join("")}<path d="M0 0L11 0A11 11 0 0 1 ${(11 * Math.cos((2 * Math.PI) / n)).toFixed(2)} ${(11 * Math.sin((2 * Math.PI) / n)).toFixed(2)}z" fill="#fb923c"/></g>`).join("")}`,
  bg_triangles: () => `<rect width="100" height="100" fill="#ecfdf5"/><g fill="none" stroke="#6ee7b7" stroke-width="1">${Array.from({ length: 7 }, (_, r) => Array.from({ length: 7 }, (_, c) => `<path d="M${c * 17 - (r % 2) * 8.5} ${r * 15}l8.5 15h-17z"/>`).join("")).join("")}</g>`,
  bg_pi: () => `<rect width="100" height="100" fill="#f5f3ff"/><circle cx="50" cy="56" r="44" fill="none" stroke="#c4b5fd" stroke-width="1.4"/><text x="50" y="12" font-size="7" text-anchor="middle" font-family="system-ui,sans-serif" fill="#7c3aed">π = 3,14159 26535</text><text x="8" y="30" font-size="16" font-family="Georgia,serif" fill="#a78bfa" opacity=".7">π</text>`,
  bg_pythagoras: () => {
    let out = "";
    const sq = (x, y, s, a, d) => {
      if (d > 4) return;
      const rad = (a * Math.PI) / 180;
      const pts = [[0, 0], [s, 0], [s, -s], [0, -s]].map(([px, py]) => [x + px * Math.cos(rad) - py * Math.sin(rad), y + px * Math.sin(rad) + py * Math.cos(rad)]);
      out += `<path d="M${pts.map((p) => p.map((n) => n.toFixed(1)).join(" ")).join("L")}z" fill="hsl(${100 + d * 20} 55% ${70 - d * 5}%)" stroke="#166534" stroke-width=".6"/>`;
      const s2 = s / Math.SQRT2;
      sq(pts[3][0], pts[3][1], s2, a - 45, d + 1);
      const r2 = ((a - 45) * Math.PI) / 180;
      sq(pts[3][0] + s2 * Math.cos(r2), pts[3][1] + s2 * Math.sin(r2), s2, a + 45, d + 1);
    };
    sq(80, 100, 14, 0, 0);
    sq(6, 100, 10, 0, 1);
    return `<rect width="100" height="100" fill="#f0fdf4"/>${out}`;
  },
  bg_line: () => `<rect width="100" height="100" fill="#f8fafc"/><path d="${Array.from({ length: 9 }, (_, i) => `M${(i + 1) * 10} 0V100M0 ${(i + 1) * 10}H100`).join("")}" stroke="#e2e8f0" stroke-width=".8"/><path d="M50 0V100M0 50H100" stroke="#94a3b8" stroke-width="1.2"/><path d="M0 95L100 15" stroke="#2563eb" stroke-width="2.4"/><text x="70" y="20" font-size="7" font-family="system-ui,sans-serif" fill="#2563eb" font-style="italic">y = kx + n</text>`,
  bg_bell: () => `<rect width="100" height="100" fill="#fefce8"/><g fill="#fde68a">${Array.from({ length: 10 }, (_, i) => { const x = 5 + i * 9; const h = 70 * Math.exp(-((x + 4.5 - 50) ** 2) / 400); return `<rect x="${x}" y="${(96 - h).toFixed(1)}" width="8" height="${h.toFixed(1)}"/>`; }).join("")}</g><path d="M0 96${Array.from({ length: 51 }, (_, i) => { const x = i * 2; return `L${x} ${(96 - 70 * Math.exp(-((x - 50) ** 2) / 400)).toFixed(1)}`; }).join("")}" stroke="#ca8a04" stroke-width="2" fill="none"/>`,
  bg_parabola: () => `<rect width="100" height="100" fill="#f0f9ff"/><path d="M50 0V100M0 86H100" stroke="#bae6fd" stroke-width="1.2"/><path d="M8 4Q50 168 92 4" stroke="#0ea5e9" stroke-width="2.4" fill="none"/><circle cx="50" cy="86" r="2.4" fill="#0369a1"/>`,
  bg_exp: () => `<rect width="100" height="100" fill="#fff1f2"/><path d="M0 96H100M4 0V100" stroke="#fecdd3" stroke-width="1.2"/><path d="M4 94${Array.from({ length: 49 }, (_, i) => { const x = 4 + i * 2; return `L${x} ${(94 - 2 * Math.exp(x / 25.5)).toFixed(1)}`; }).join("")}" stroke="#e11d48" stroke-width="2.4" fill="none"/><text x="10" y="14" font-size="9" font-family="Georgia,serif" fill="#e11d48" font-style="italic">eˣ</text>`,
  bg_sine: () => `<rect width="100" height="100" fill="#ecfeff"/><path d="M0 22H100" stroke="#a5f3fc" stroke-width="1"/><path d="M0 22${Array.from({ length: 51 }, (_, i) => `L${i * 2} ${(22 - 12 * Math.sin((i * 2 * Math.PI) / 25)).toFixed(1)}`).join("")}" stroke="#0891b2" stroke-width="2.2" fill="none"/><path d="M0 22${Array.from({ length: 51 }, (_, i) => `L${i * 2} ${(22 - 12 * Math.cos((i * 2 * Math.PI) / 25)).toFixed(1)}`).join("")}" stroke="#f472b6" stroke-width="1.4" fill="none" opacity=".7"/>`,
  bg_lissajous: () => `<rect width="100" height="100" fill="#1e1b4b"/><path d="M${Array.from({ length: 201 }, (_, i) => { const t = (i / 200) * 2 * Math.PI; return `${(50 + 44 * Math.sin(3 * t + Math.PI / 2)).toFixed(1)} ${(54 + 42 * Math.sin(2 * t)).toFixed(1)}`; }).join("L")}" stroke="#a5b4fc" stroke-width="1.6" fill="none"/>`,
  bg_spiral: () => {
    // Kvadrati s stranicami 1, 1, 2, 3, 5, 8, 13 (Fibonaccijevo zaporedje).
    const sq = [[0, 0, 1], [1, 0, 1], [0, 1, 2], [-3, 0, 3], [-3, -5, 5], [2, -5, 8], [-3, 3, 13]];
    const S = 4.2;
    const tx = (x) => (30 + x * S).toFixed(1);
    const ty = (y) => (24 + y * S).toFixed(1);
    return `<rect width="100" height="100" fill="#fffbeb"/><g fill="#fde68a" fill-opacity=".35" stroke="#d97706" stroke-width=".9">${sq.map(([x, y, s]) => `<rect x="${tx(x)}" y="${ty(y)}" width="${(s * S).toFixed(1)}" height="${(s * S).toFixed(1)}"/>`).join("")}</g><g font-family="system-ui,sans-serif" fill="#b45309" text-anchor="middle">${sq.slice(3).map(([x, y, s]) => `<text x="${tx(x + s / 2)}" y="${ty(y + s / 2 + 0.3 * Math.min(2, s / 4))}" font-size="${Math.min(14, 3 + s)}">${s}</text>`).join("")}</g>`;
  },
  bg_fractal: () => {
    let out = "";
    const tri = (x, y, s, d) => {
      if (d === 0) return void (out += `<path d="M${x} ${y}l${s / 2} ${(-s * 0.866).toFixed(2)}l${s / 2} ${(s * 0.866).toFixed(2)}z"/>`);
      tri(x, y, s / 2, d - 1);
      tri(x + s / 2, y, s / 2, d - 1);
      tri(x + s / 4, y - (s / 2) * 0.866, s / 2, d - 1);
    };
    tri(2, 96, 96, 4);
    return `<rect width="100" height="100" fill="#fdf4ff"/><g fill="#e879f9" opacity=".55">${out}</g>`;
  },
  pass_board: (v) => `<rect width="100" height="100" fill="hsl(${seasonHue(v)} 35% 28%)"/><rect x="3" y="3" width="94" height="94" fill="none" stroke="#a16207" stroke-width="4"/><g fill="none" stroke="#f8fafc" stroke-width="1.2" opacity=".75"><path d="M10 18h22M10 26h14"/><path d="M68 14q6 12 12 0t12 0"/><path d="M12 84l8-8 8 8"/></g><text x="64" y="88" font-size="7" font-family="system-ui,sans-serif" fill="#f8fafc" opacity=".8">${seasonLabel(v || "2026-1")}</text>`,
};

const OUTFIT = {
  pot_vega: (u) => `<g clip-path="url(#c${u})"><path d="M0 72h100v32H0z" fill="#1e3a8a" stroke="${INK}" stroke-width="2"/><path d="M50 72v30" stroke="#172554" stroke-width="2"/>${[78, 85, 92].map((y) => `<circle cx="45" cy="${y}" r="1.6" fill="#facc15"/><circle cx="55" cy="${y}" r="1.6" fill="#facc15"/>`).join("")}</g><path d="M20 74h12l-2 4H22zM68 74h12l-2 4H70z" fill="#facc15" stroke="${INK}" stroke-width="1.2"/>`,
  pot_stefan: (u) => `<g clip-path="url(#c${u})"><path d="M0 72h100v32H0z" fill="#111827" stroke="${INK}" stroke-width="2"/><path d="M40 72h20l-4 30h-12z" fill="#f8fafc"/></g><path d="M50 76l-7-4v8zM50 76l7-4v8z" fill="#111827" stroke="${INK}" stroke-width="1.2"/><path d="M66 84l4-6 4 6M64 90h12" stroke="#fbbf24" stroke-width="1.6" fill="none" stroke-linecap="round"/>`,
  pot_tesla: (u) => `<g clip-path="url(#c${u})"><path d="M0 72h100v32H0z" fill="#312e81" stroke="${INK}" stroke-width="2"/><path d="M50 72v30" stroke="#1e1b4b" stroke-width="2.5"/></g><path d="M24 76l6 5-4 2 7 6M76 76l-6 5 4 2-7 6" stroke="#67e8f9" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M8 60l6 4-3 2 6 4M92 60l-6 4 3 2-6 4" stroke="#a5f3fc" stroke-width="1.6" fill="none"/>`,
  outfit_pse: (u) => `<g clip-path="url(#c${u})"><path d="M0 74h100v30H0z" fill="#f8fafc" stroke="${INK}" stroke-width="2"/>${Array.from({ length: 12 }, (_, i) => `<rect x="${22 + (i % 6) * 9.5}" y="${78 + Math.floor(i / 6) * 8}" width="8" height="7" rx="1" fill="${["#bbf7d0", "#fecaca", "#fde68a", "#ddd6fe", "#a5f3fc", "#fed7aa"][i % 6]}" stroke="#64748b" stroke-width=".6"/>`).join("")}</g>`,
  outfit_euler: (u) => `<g clip-path="url(#c${u})"><path d="M0 74q50 8 100 0v30H0z" fill="#1e3a8a" stroke="${INK}" stroke-width="2"/><path d="M0 92h100" stroke="#facc15" stroke-width="1.6" stroke-dasharray="4 3"/></g><text x="50" y="87" font-size="7" text-anchor="middle" font-family="Georgia,serif" font-style="italic" fill="#fde68a">e^iπ+1=0</text>`,
  pass_coat: (u, v) => {
    const h = seasonHue(v);
    return `<g clip-path="url(#c${u})"><path d="M0 74h100v30H0z" fill="#f8fafc" stroke="${INK}" stroke-width="2"/><path d="M50 74v26M50 74l-10 10M50 74l10 10" stroke="hsl(${h} 70% 50%)" stroke-width="2.4" fill="none"/><path d="M20 90h22" stroke="hsl(${h} 70% 50%)" stroke-width="3"/></g>`;
  },
};

const ACC = {
  acc_joystick: () =>
    `<g transform="translate(74 82) rotate(-14)"><rect x="-14" y="-7.5" width="28" height="15" rx="7.5" fill="#334155" stroke="${INK}" stroke-width="2"/><path d="M-8.5-3v6M-11.5 0h6" stroke="#f8fafc" stroke-width="2.2" stroke-linecap="round"/><circle cx="5" cy="-2" r="2" fill="#ef4444"/><circle cx="9.5" cy="1.5" r="2" fill="#22c55e"/></g>`,
  pot_pregl: () => `<circle cx="60" cy="52" r="10" fill="#e0f2fe" fill-opacity=".35" stroke="#a16207" stroke-width="3"/><path d="M67 59l12 12" stroke="#78350f" stroke-width="4.5" stroke-linecap="round"/><path d="M55 47q3-3 7-2" stroke="#fff" stroke-width="1.6" fill="none"/>`,
  acc_spectro: (v, u) => `<path d="M22 50h56" stroke="#334155" stroke-width="4"/><rect x="29" y="43" width="19" height="15" rx="7" fill="url(#spc${u})" stroke="${INK}" stroke-width="2.5"/><rect x="52" y="43" width="19" height="15" rx="7" fill="url(#spc${u})" stroke="${INK}" stroke-width="2.5"/><defs><linearGradient id="spc${u}" x1="0" x2="1"><stop offset="0" stop-color="#f87171"/><stop offset=".33" stop-color="#facc15"/><stop offset=".66" stop-color="#4ade80"/><stop offset="1" stop-color="#60a5fa"/></linearGradient></defs>`,
  pass_pencil: (v) => `<g transform="rotate(-30 74 36)"><rect x="66" y="32" width="24" height="6" rx="1" fill="hsl(${seasonHue(v)} 85% 58%)" stroke="${INK}" stroke-width="1.4"/><path d="M90 32l6 3-6 3z" fill="#fde68a" stroke="${INK}" stroke-width="1.2"/><rect x="62" y="32" width="5" height="6" fill="#f472b6" stroke="${INK}" stroke-width="1.2"/></g>`,
};

const HAT = {
  hat_pixel: () => `<path d="M30 34V16h5v6h5V12h6v10h8V12h6v10h5v-6h5v18z" fill="#facc15" stroke="${INK}" stroke-width="2" stroke-linejoin="miter"/><g fill="#ef4444"><rect x="36" y="26" width="4" height="4"/><rect x="60" y="26" width="4" height="4"/></g><rect x="48" y="25" width="4" height="5" fill="#3b82f6"/>`,
  pot_owl: () => `<g transform="translate(50 18)"><ellipse rx="12" ry="11" fill="#a16207" stroke="${INK}" stroke-width="2"/><path d="M-10-8l-3-6 6 3M10-8l3-6-6 3" fill="#a16207" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><circle cx="-5" cy="-2" r="4.2" fill="#fef3c7" stroke="${INK}" stroke-width="1.2"/><circle cx="5" cy="-2" r="4.2" fill="#fef3c7" stroke="${INK}" stroke-width="1.2"/><circle cx="-5" cy="-2" r="1.8" fill="${INK}"/><circle cx="5" cy="-2" r="1.8" fill="${INK}"/><path d="M-1.5 2l1.5 3 1.5-3z" fill="#f59e0b"/><path d="M-6 6q6 4 12 0" stroke="#fde68a" stroke-width="1.2" fill="none"/></g>`,
  pot_laurel: () => `<g fill="#65a30d" stroke="#365314" stroke-width=".8">${Array.from({ length: 7 }, (_, i) => { const a = Math.PI * (0.95 + i * 0.09); return `<ellipse cx="${(50 + 30 * Math.cos(a)).toFixed(1)}" cy="${(40 + 18 * Math.sin(a)).toFixed(1)}" rx="5" ry="2.4" transform="rotate(${((a * 180) / Math.PI + 70).toFixed(0)} ${(50 + 30 * Math.cos(a)).toFixed(1)} ${(40 + 18 * Math.sin(a)).toFixed(1)})"/><ellipse cx="${(50 - 30 * Math.cos(a)).toFixed(1)}" cy="${(40 + 18 * Math.sin(a)).toFixed(1)}" rx="5" ry="2.4" transform="rotate(${(110 - (a * 180) / Math.PI).toFixed(0)} ${(50 - 30 * Math.cos(a)).toFixed(1)} ${(40 + 18 * Math.sin(a)).toFixed(1)})"/>`; }).join("")}</g><circle cx="50" cy="23" r="2.4" fill="#facc15" stroke="${INK}" stroke-width=".8"/>`,
};

// Liki (predal »kind«): back = za telesom (ušesa, rogovi, krila), front = na telesu (gobček, trebuh, brki).
// Barva telesa (url(#g…)) ostane učenčeva izbira, lik doda obliko.
const F = (u) => `url(#g${u})`;
const KIND = {
  kind_cat: {
    back: (u) => `<path d="M24 44L26 12 46 27z" fill="${F(u)}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/><path d="M76 44L74 12 54 27z" fill="${F(u)}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/><path d="M29 33l1-14 10 8zM71 33l-1-14-10 8z" fill="#fda4af"/>`,
    front: () => `<path d="M47 60h6l-3 3z" fill="#fb7185" stroke="${INK}" stroke-width="1.2" stroke-linejoin="round"/><g stroke="${INK}" stroke-width="1.3" stroke-linecap="round"><path d="M22 59l12 2M22 66l12-2M78 59l-12 2M78 66l-12-2"/></g>`,
  },
  kind_bear: {
    back: (u) => `<circle cx="27" cy="30" r="10" fill="${F(u)}" stroke="${INK}" stroke-width="2.5"/><circle cx="73" cy="30" r="10" fill="${F(u)}" stroke="${INK}" stroke-width="2.5"/><circle cx="27" cy="30" r="5" fill="#000" opacity=".18"/><circle cx="73" cy="30" r="5" fill="#000" opacity=".18"/>`,
    front: () => `<ellipse cx="50" cy="66" rx="12" ry="9" fill="#fef3c7" stroke="${INK}" stroke-width="1.8"/><ellipse cx="50" cy="60.5" rx="4" ry="2.8" fill="${INK}"/>`,
  },
  kind_bunny: {
    back: (u) => `<g stroke="${INK}" stroke-width="2.5"><ellipse cx="37" cy="18" rx="7" ry="16" transform="rotate(-12 37 18)" fill="${F(u)}"/><ellipse cx="63" cy="18" rx="7" ry="16" transform="rotate(12 63 18)" fill="${F(u)}"/></g><ellipse cx="37" cy="19" rx="3.2" ry="11.5" transform="rotate(-12 37 19)" fill="#fda4af"/><ellipse cx="63" cy="19" rx="3.2" ry="11.5" transform="rotate(12 63 19)" fill="#fda4af"/>`,
    front: () => `<ellipse cx="50" cy="61" rx="3" ry="2.2" fill="#fb7185"/><path d="M46 70h8v5h-8z" fill="#fff" stroke="${INK}" stroke-width="1.4"/><path d="M50 70v5" stroke="${INK}" stroke-width="1"/>`,
  },
  kind_mouse: {
    back: (u) => `<circle cx="23" cy="32" r="14" fill="${F(u)}" stroke="${INK}" stroke-width="2.5"/><circle cx="77" cy="32" r="14" fill="${F(u)}" stroke="${INK}" stroke-width="2.5"/><circle cx="23" cy="32" r="8" fill="#fda4af"/><circle cx="77" cy="32" r="8" fill="#fda4af"/>`,
    front: () => `<circle cx="50" cy="61" r="3" fill="#fb7185" stroke="${INK}" stroke-width="1.2"/><g stroke="${INK}" stroke-width="1.2" stroke-linecap="round"><path d="M24 58l13 3M24 64l13-1M76 58l-13 3M76 64l-13-1"/></g>`,
  },
  kind_fox: {
    back: (u) => `<path d="M22 46L24 8 46 28z" fill="${F(u)}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/><path d="M78 46L76 8 54 28z" fill="${F(u)}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/><path d="M27 32l0-17 10 11zM73 32l0-17-10 11z" fill="#fff"/><path d="M25 14l-1-6 6 4M75 14l1-6-6 4" fill="${INK}"/>`,
    front: (u) => `<g clip-path="url(#c${u})"><path d="M14 58q20 4 30 12q6 4 12 0q10-8 30-12v40H14z" fill="#fff" opacity=".92"/></g><ellipse cx="50" cy="61" rx="3.6" ry="2.6" fill="${INK}"/>`,
  },
  kind_penguin: {
    back: (u) => `<path d="M21 60q-12 12-6 26l8-6z" fill="${F(u)}" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round"/><path d="M79 60q12 12 6 26l-8-6z" fill="${F(u)}" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round"/><path d="M38 94l-4 4h12zM62 94l4 4H54z" fill="#f97316" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>`,
    front: (u) => `<g clip-path="url(#c${u})"><ellipse cx="50" cy="78" rx="21" ry="22" fill="#f8fafc"/></g><path d="M45 59h10l-5 6z" fill="#f97316" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>`,
  },
  kind_owl: {
    back: (u) => `<path d="M24 36l-6-20 18 10zM76 36l6-20-18 10z" fill="${F(u)}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`,
    front: (u) => `<g fill="none" stroke="#fff" stroke-width="1.6" opacity=".55"><circle cx="40" cy="52" r="10"/><circle cx="60" cy="52" r="10"/></g><path d="M46 60h8l-4 7z" fill="#f59e0b" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/><g clip-path="url(#c${u})" fill="none" stroke="#fff" stroke-width="1.5" opacity=".5"><path d="M38 80q3 3 6 0M47 80q3 3 6 0M56 80q3 3 6 0M42 87q3 3 6 0M51 87q3 3 6 0"/></g>`,
  },
  kind_koala: {
    back: (u) => `<circle cx="22" cy="38" r="15" fill="${F(u)}" stroke="${INK}" stroke-width="2.5"/><circle cx="78" cy="38" r="15" fill="${F(u)}" stroke="${INK}" stroke-width="2.5"/><circle cx="22" cy="38" r="8" fill="#fff" opacity=".6"/><circle cx="78" cy="38" r="8" fill="#fff" opacity=".6"/>`,
    front: () => `<ellipse cx="50" cy="58.5" rx="5.5" ry="5" fill="#334155" stroke="${INK}" stroke-width="1.5"/><ellipse cx="48.3" cy="56.8" rx="1.4" ry="1.7" fill="#fff" opacity=".6"/>`,
  },
  kind_alien: {
    back: (u) => `<g stroke="${INK}" stroke-width="2.5" stroke-linecap="round"><path d="M40 28L30 8M60 28L70 8"/></g><circle cx="30" cy="8" r="5" fill="#a3e635" stroke="${INK}" stroke-width="2"/><circle cx="70" cy="8" r="5" fill="#a3e635" stroke="${INK}" stroke-width="2"/>`,
    front: () => `<g stroke="${INK}" stroke-width="2"><circle cx="50" cy="38" r="5.5" fill="#fff"/></g><circle cx="50" cy="38.5" r="2.8" fill="${INK}"/>`,
  },
  kind_dino: {
    back: () => `<path d="M30 30l-4-9 9 3 2-10 7 7 6-9 6 9 7-7 2 10 9-3-4 9z" fill="#16a34a" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><path d="M78 80q14 0 18 10-10 2-20-2z" fill="#16a34a" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>`,
    front: (u) => `<g clip-path="url(#c${u})" fill="#fff" opacity=".25"><circle cx="30" cy="70" r="4"/><circle cx="70" cy="74" r="5"/><circle cx="36" cy="86" r="3"/></g>`,
  },
  kind_unicorn: {
    back: () => `<path d="M24 40q-10-14 0-26 6 10 10 12-8-12 4-22 2 12 8 14" fill="#f9a8d4" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>`,
    front: () => `<path d="M45 26L50 2l5 24z" fill="#fde68a" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><path d="M46.5 20l7-2M47.5 13l5-1.5M48.5 7l3-1" stroke="#f59e0b" stroke-width="1.5"/>`,
  },
  kind_dragon: {
    back: (u) => `<path d="M22 56Q4 40 6 22q8 8 10 4 4 10 10 6 2 10 8 12z" fill="#7c3aed" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><path d="M78 56Q96 40 94 22q-8 8-10 4-4 10-10 6-2 10-8 12z" fill="#7c3aed" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><path d="M34 30q-8-10-4-22 6 8 12 16M66 30q8-10 4-22-6 8-12 16" fill="#fde68a" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>`,
    front: () => `<path d="M44 61l2 1.5M56 61l-2 1.5" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>`,
  },
};

// Deli za public/avatar.js: (u, variant) => SVG
export const DRAW = {
  hat: (id) => HAT[baseId(id)]?.() ?? null,
  badge: (id) => {
    const x = KITEM[baseId(id)];
    if (!x) return "";
    if (x.sym) return elementTile(x);
    return BADGE[x.id]?.(variantOf(id)) || "";
  },
  fxBack: (id, u) => FX[baseId(id)]?.back?.(variantOf(id), u) || "",
  fxFront: (id) => FX[baseId(id)]?.front?.(variantOf(id)) || "",
  bg: (id, u) => BG[baseId(id)]?.(variantOf(id), u) ?? null,
  outfit: (id, u) => OUTFIT[baseId(id)]?.(u, variantOf(id)) ?? null,
  acc: (id, u) => ACC[baseId(id)]?.(variantOf(id), u) ?? null,
  kindBack: (id, u) => KIND[id]?.back?.(u) || "",
  kindFront: (id, u) => KIND[id]?.front?.(u) || "",
};
