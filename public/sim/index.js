// Seznam simulacij: id → [datoteka, ime izvožene funkcije].
// Datoteke se naložijo šele, ko jih učenec potrebuje (dinamični import).
// Ta datoteka nima kode za brskalnik na najvišji ravni, zato jo uvozi tudi strežnik.

export const ENGINES = {
  // starejše demonstracije (public/demos.js)
  linearna: ["../demos.js", "linearna"],
  pitagora: ["../demos.js", "pitagora"],
  ulomki: ["../demos.js", "ulomki"],
  ohm: ["../demos.js", "ohm"],
  "prosti-pad": ["../demos.js", "prosti-pad"],
  nihalo: ["../demos.js", "nihalo"],
  plini: ["../demos.js", "plini"],
  enacbe: ["../demos.js", "enacbe"],
  ph: ["../demos.js", "ph"],
  // matematika: števila
  mestna: ["mat-stevila.js", "mestna"],
  stotica: ["mat-stevila.js", "stotica"],
  delitelji: ["mat-stevila.js", "delitelji"],
  razcep: ["mat-stevila.js", "razcep"],
  dvvenn: ["mat-stevila.js", "dvvenn"],
  evklid: ["mat-stevila.js", "evklid"],
  skoki: ["mat-stevila.js", "skoki"],
  decimalke: ["mat-stevila.js", "decimalke"],
  periode: ["mat-stevila.js", "periode"],
  "ulomki-primerjava": ["mat-stevila.js", "ulomkiPrimerjava"],
  "ulomki-racun": ["mat-stevila.js", "ulomkiRacun"],
  "ulomki-mnozenje": ["mat-stevila.js", "ulomkiMnozenje"],
  trak: ["mat-stevila.js", "trak"],
  razmerje: ["mat-stevila.js", "razmerje"],
  sorazmerje: ["mat-stevila.js", "sorazmerje"],
  odstotki: ["mat-stevila.js", "odstotki"],
  potence: ["mat-stevila.js", "potence"],
  znanstveni: ["mat-stevila.js", "znanstveni"],
  koren: ["mat-stevila.js", "koren"],
  realna: ["mat-stevila.js", "realna"],
  venn: ["mat-stevila.js", "venn"],
  enote: ["mat-stevila.js", "enote"],
  // matematika: algebra
  tehtnica: ["mat-algebra.js", "tehtnica"],
  neenacba: ["mat-algebra.js", "neenacba"],
  ploscice: ["mat-algebra.js", "ploscice"],
  povrsinski: ["mat-algebra.js", "povrsinski"],
  sistem: ["mat-algebra.js", "sistem"],
  // matematika: ravninska geometrija
  premice: ["mat-geo.js", "premice"],
  kot: ["mat-geo.js", "kot"],
  "pari-kotov": ["mat-geo.js", "pariKotov"],
  krog: ["mat-geo.js", "krog"],
  konstrukcija: ["mat-geo.js", "konstrukcija"],
  simetrija: ["mat-geo.js", "simetrija"],
  pravokotnik: ["mat-geo.js", "pravokotnik"],
  trikotnik: ["mat-geo.js", "trikotnik"],
  ploscine: ["mat-geo.js", "ploscine"],
  stirikotnik: ["mat-geo.js", "stirikotnik"],
  "krog-ploscina": ["mat-geo.js", "krogPloscina"],
  izsek: ["mat-geo.js", "izsek"],
  veckotnik: ["mat-geo.js", "veckotnik"],
  koordinate: ["mat-geo.js", "koordinate"],
  "dve-tocki": ["mat-geo.js", "dveTocki"],
  podobnost: ["mat-geo.js", "podobnost"],
  tales: ["mat-geo.js", "tales"],
  "pitagora-uporaba": ["mat-geo.js", "pitagoraUporaba"],
  // matematika: statistika in verjetnost
  diagram: ["mat-stat.js", "diagram"],
  sredina: ["mat-stat.js", "sredina"],
  statistika: ["mat-stat.js", "statistika"],
  verjetnost: ["mat-stat.js", "verjetnost"],
  kombinatorika: ["mat-stat.js", "kombinatorika"],
  // matematika: geometrijska telesa
  telesa: ["mat-telesa.js", "telesa"],
  // matematika: funkcije in analiza
  graf: ["mat-funkcije.js", "graf"],
  odvod: ["mat-funkcije.js", "odvod"],
  integral: ["mat-funkcije.js", "integral"],
  zaporedje: ["mat-funkcije.js", "zaporedje"],
  vrsta: ["mat-funkcije.js", "vrsta"],
  obresti: ["mat-funkcije.js", "obresti"],
  kompleksna: ["mat-funkcije.js", "kompleksna"],
  srecanje: ["mat-funkcije.js", "srecanje"],
};

export const hasEngine = (id) => Object.hasOwn(ENGINES, id);

// Nariše simulacijo v el. Vrne true, če je uspelo.
export async function mountSim(id, el, opts = {}) {
  const e = ENGINES[id];
  if (!e) return false;
  const mod = await import(new URL(e[0], import.meta.url).href);
  const fn = mod[e[1]] || mod.DEMOS?.[e[1]];
  if (typeof fn !== "function") return false;
  el.replaceChildren();
  el.classList.add("demo", `demo-${id}`);
  try {
    fn(el, opts || {});
  } catch (err) {
    console.error(`Simulacija ${id}:`, err);
    el.replaceChildren();
    el.append(Object.assign(document.createElement("p"), { className: "muted", textContent: "Simulacije ni bilo mogoče naložiti." }));
    return false;
  }
  return true;
}
