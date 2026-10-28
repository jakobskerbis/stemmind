// Izbira šole po korakih: OŠ → razred, SŠ → letnik → raven matematike,
// fakulteta → univerza → fakulteta → študijski program → letnik.
// Izbira se zapiše v skrita polja obrazca (educational_track, study_program,
// curriculum_level), zato jo obrazci berejo kot prej.

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const TRACKS = [
  ["OSNOVNA_SOLA", "Osnovna šola", "6.–9. razred"],
  ["SREDNJA_SOLA", "Srednja šola", "1.–4. letnik"],
  ["UNIVERZA", "Fakulteta", "1. stopnja"],
];
const OS_GRADES = ["6. razred", "7. razred", "8. razred", "9. razred"];
const SS_YEARS = ["1. letnik", "2. letnik", "3. letnik", "4. letnik"];
const SS_LEVELS = [
  ["OR", "Osnovna raven", "matura iz matematike na osnovni ravni"],
  ["VR", "Višja raven", "matura iz matematike na višji ravni"],
];
const UNI_YEARS = ["1. letnik", "2. letnik", "3. letnik", "4. letnik"];

// Iz shranjenih nastavitev sestavi korake izbire.
function fromSettings(s, programs) {
  const v = { track: s.educational_track || "" };
  const level = String(s.curriculum_level || "");
  if (v.track === "OSNOVNA_SOLA") v.grade = OS_GRADES.find((g) => level.startsWith(g[0])) || "";
  if (v.track === "SREDNJA_SOLA") {
    v.year = SS_YEARS.find((y) => level.startsWith(y[0])) || "";
    v.ssLevel = /VR/.test(level) ? "VR" : /OR/.test(level) ? "OR" : "";
  }
  if (v.track === "UNIVERZA") {
    const p = programs.find((x) => x.id === s.study_program);
    if (p) Object.assign(v, { uni: p.university, faculty: p.faculty, program: p.id });
    v.year = UNI_YEARS.find((y) => level.startsWith(y[0])) || "";
  }
  return v;
}

// Nastavitve iz izbire (ali null, dokler izbira ni končana).
function toSettings(v) {
  if (v.track === "OSNOVNA_SOLA" && v.grade) return { educational_track: v.track, study_program: "", curriculum_level: v.grade };
  if (v.track === "SREDNJA_SOLA" && v.year && v.ssLevel) return { educational_track: v.track, study_program: "", curriculum_level: `${v.year} ${v.ssLevel}` };
  if (v.track === "UNIVERZA" && v.program && v.year) return { educational_track: v.track, study_program: v.program, curriculum_level: v.year };
  return null;
}

// Vrstni red korakov za trenutno izbiro: [ključ, vprašanje, možnosti [vrednost, oznaka, opis], izbrana oznaka].
function steps(v, programs) {
  const out = [["track", "Kje se učiš?", TRACKS, TRACKS.find((t) => t[0] === v.track)?.[1]]];
  if (v.track === "OSNOVNA_SOLA") out.push(["grade", "Kateri razred?", OS_GRADES.map((g) => [g, g]), v.grade]);
  if (v.track === "SREDNJA_SOLA") {
    out.push(["year", "Kateri letnik?", SS_YEARS.map((y) => [y, y]), v.year]);
    if (v.year) out.push(["ssLevel", "Katera raven matematike?", SS_LEVELS, SS_LEVELS.find((l) => l[0] === v.ssLevel)?.[1]]);
  }
  if (v.track === "UNIVERZA") {
    const unis = [...new Map(programs.map((p) => [p.university, p.universityName])).entries()];
    out.push(["uni", "Katera univerza?", unis.map(([k, n]) => [k, k, n]), unis.find(([k]) => k === v.uni)?.[0]]);
    if (v.uni) {
      const facs = [...new Map(programs.filter((p) => p.university === v.uni).map((p) => [p.faculty, p])).values()];
      const fac = facs.find((p) => p.faculty === v.faculty);
      out.push(["faculty", "Katera fakulteta?", facs.map((p) => [p.faculty, p.facultyShort.replace(`${v.uni} `, ""), p.facultyName.replace(/^U[A-Z]+ /, "")]), fac?.facultyShort.replace(`${v.uni} `, "")]);
    }
    if (v.faculty) {
      const progs = programs.filter((p) => p.faculty === v.faculty);
      out.push(["program", "Kateri študijski program?", progs.map((p) => [p.id, p.name, "univerzitetni, 1. stopnja"]), progs.find((p) => p.id === v.program)?.name]);
    }
    if (v.program) {
      const p = programs.find((x) => x.id === v.program);
      const years = UNI_YEARS.slice(0, p?.years || 3);
      out.push(["year", "Kateri letnik?", years.map((y) => [y, y]), v.year]);
    }
  }
  return out;
}

// Ključi, ki jih sprememba koraka izniči (vse za njim).
const AFTER = {
  track: ["grade", "year", "ssLevel", "uni", "faculty", "program"],
  uni: ["faculty", "program", "year"],
  faculty: ["program", "year"],
  program: ["year"],
  year: ["ssLevel"],
};

// Namesti izbirnik v element `box` znotraj obrazca `form`.
// onChange(settings|null, track) se kliče ob vsaki spremembi.
export function mountLevelPicker(box, form, { programs, settings = {}, onChange = () => {} }) {
  let v = fromSettings(settings, programs);
  let open = toSettings(v) ? null : steps(v, programs).find((s) => !s[3])?.[0] || "track";

  const write = () => {
    const s = toSettings(v) || { educational_track: v.track || "", study_program: "", curriculum_level: "" };
    for (const [k, val] of Object.entries(s)) if (form[k]) form[k].value = val;
    onChange(toSettings(v), v.track);
  };

  const render = () => {
    const list = steps(v, programs);
    const done = list.filter((s) => s[3] && s[0] !== open);
    const current = list.find((s) => s[0] === open) || list.find((s) => !s[3]);
    box.innerHTML = `
      <div class="lp-crumbs">${done
        .map(([k, , , label]) => `<button type="button" class="lp-crumb" data-step="${k}" title="Spremeni">${esc(label)}</button>`)
        .join(`<span class="lp-sep" aria-hidden="true">›</span>`)}${
        !current && done.length ? `<button type="button" class="text-btn lp-change" data-step="track">Spremeni</button>` : ""
      }</div>
      ${
        current
          ? `<p class="lp-q">${esc(current[1])}</p>
        <div class="lp-options">${current[2]
          .map(([val, label, sub]) => `<button type="button" class="choice lp-opt ${val === v[current[0]] ? "on" : ""}" data-key="${current[0]}" data-val="${esc(val)}">
              <span>${esc(label)}</span>${sub ? `<small>${esc(sub)}</small>` : ""}</button>`)
          .join("")}</div>`
          : ""
      }`;
    box.querySelectorAll("[data-step]").forEach((b) =>
      b.addEventListener("click", () => {
        open = b.dataset.step;
        render();
      }),
    );
    box.querySelectorAll(".lp-opt").forEach((b) =>
      b.addEventListener("click", () => {
        const { key, val } = b.dataset;
        if (v[key] !== val) for (const k of AFTER[key] || []) delete v[k];
        v[key] = val;
        const next = steps(v, programs).find((s) => !s[3]);
        open = next ? next[0] : null;
        write();
        render();
      }),
    );
  };
  write();
  render();
  return {
    // Ponovno nastavi iz nastavitev profila (npr. ob menjavi učenca).
    set(s) {
      v = fromSettings(s, programs);
      open = toSettings(v) ? null : steps(v, programs).find((x) => !x[3])?.[0] || "track";
      write();
      render();
    },
    complete: () => !!toSettings(v),
  };
}
