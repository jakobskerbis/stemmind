// Šolski sistemi po državah (regijski profili). Uporabljata jih strežnik in vmesnik.
//
// Slovenija ("SI") je izvirni sistem z razredi 6–9 in letniki 1–4. Drugi sistemi imajo
// svoje ime razredov (Class 8, JSS 2, Form 3 …) in svoj učni načrt:
//   syllabus "IN"  = Indija, CBSE / NCERT (server/region-curricula.js, po poglavjih NCERT),
//   syllabus "INT" = mednarodni angleški učni načrt po letih šolanja (za ostale države).
// Vsak razred ima »level« = leto šolanja (6 = 6. leto, 12 = zadnje leto srednje šole),
// po katerem se izbere učna pot. OSNUTEK: razporeditev in številke za pomoč naj pred
// objavo preveri nekdo iz te države.
//
// yearStart: mesec začetka šolskega leta (za predlog prehoda v višji razred).
// help: telefon za pomoč otrokom in mladim v stiski (inštruktor ga navede namesto TOM telefona).

const g = (prefix, from, to, level0, suffix = "") =>
  Array.from({ length: to - from + 1 }, (_, i) => [`${prefix}${from + i}${suffix}`, level0 + i]);

export const SCHOOL_SYSTEMS = {
  SI: {
    name: "Slovenija",
    country: "SI",
    syllabus: "SI",
  },
  "IN-CBSE": {
    name: "India – CBSE / NCERT",
    country: "IN",
    yearStart: 4,
    syllabus: "IN",
    stages: [
      ["Middle school", g("Class ", 6, 8, 6)],
      ["Secondary (Class 9–10)", g("Class ", 9, 10, 9)],
      ["Senior secondary (Class 11–12)", g("Class ", 11, 12, 11)],
    ],
    exams: "CBSE Class 10 and Class 12 board exams; JEE and NEET entrance exams",
    help: "CHILDLINE 1098, Tele-MANAS 14416, emergency 112",
  },
  "IN-ICSE": {
    name: "India – ICSE / ISC",
    country: "IN",
    yearStart: 4,
    syllabus: "IN",
    stages: [
      ["Middle school", g("Class ", 6, 8, 6)],
      ["ICSE (Class 9–10)", g("Class ", 9, 10, 9)],
      ["ISC (Class 11–12)", g("Class ", 11, 12, 11)],
    ],
    exams: "ICSE (Class 10) and ISC (Class 12) exams; JEE and NEET entrance exams",
    help: "CHILDLINE 1098, Tele-MANAS 14416, emergency 112",
  },
  PK: {
    name: "Pakistan",
    country: "PK",
    yearStart: 4,
    syllabus: "INT",
    stages: [
      ["Middle school", g("Class ", 6, 8, 6)],
      ["Matric (SSC)", g("Class ", 9, 10, 9)],
      ["Intermediate (HSSC / FSc)", g("Class ", 11, 12, 11)],
    ],
    exams: "SSC (Matric) and HSSC (Intermediate) board exams; MDCAT and ECAT",
    help: "Rescue 1122, police 15",
  },
  BD: {
    name: "Bangladesh",
    country: "BD",
    yearStart: 1,
    syllabus: "INT",
    stages: [
      ["Junior secondary", g("Class ", 6, 8, 6)],
      ["Secondary (SSC)", g("Class ", 9, 10, 9)],
      ["Higher secondary (HSC)", g("Class ", 11, 12, 11)],
    ],
    exams: "SSC and HSC exams",
    help: "Child Helpline 1098, emergency 999",
  },
  NP: {
    name: "Nepal",
    country: "NP",
    yearStart: 4,
    syllabus: "INT",
    stages: [
      ["Basic level", g("Grade ", 6, 8, 6)],
      ["Secondary (SEE)", g("Grade ", 9, 10, 9)],
      ["Higher secondary (NEB)", g("Grade ", 11, 12, 11)],
    ],
    exams: "SEE (Grade 10) and NEB Grade 12 exams",
    help: "Child Helpline 1098, police 100",
  },
  LK: {
    name: "Sri Lanka",
    country: "LK",
    yearStart: 1,
    syllabus: "INT",
    stages: [
      ["Junior secondary", g("Grade ", 6, 9, 6)],
      ["Senior secondary (O/L)", [["Grade 10", 10], ["Grade 11", 10]]],
      ["Collegiate (A/L)", [["Grade 12", 11], ["Grade 13", 12]]],
    ],
    exams: "G.C.E. O/L and A/L exams",
    help: "Child helpline 1929, emergency 119",
  },
  NG: {
    name: "Nigeria",
    country: "NG",
    yearStart: 9,
    syllabus: "INT",
    stages: [
      ["Junior secondary (JSS)", g("JSS ", 1, 3, 7)],
      ["Senior secondary (SS)", g("SS ", 1, 3, 10)],
    ],
    exams: "BECE (JSS 3), WAEC WASSCE and NECO (SS 3), JAMB UTME",
    help: "emergency 112",
  },
  GH: {
    name: "Ghana",
    country: "GH",
    yearStart: 9,
    syllabus: "INT",
    stages: [
      ["Junior high school (JHS)", g("JHS ", 1, 3, 7)],
      ["Senior high school (SHS)", g("SHS ", 1, 3, 10)],
    ],
    exams: "BECE (JHS 3) and WASSCE (SHS 3)",
    help: "emergency 112",
  },
  KE: {
    name: "Kenya – CBC",
    country: "KE",
    yearStart: 1,
    syllabus: "INT",
    stages: [
      ["Junior school", g("Grade ", 7, 9, 7)],
      ["Senior school", g("Grade ", 10, 12, 10)],
    ],
    exams: "KJSEA (Grade 9); KCSE for students still in the 8-4-4 system",
    help: "Childline Kenya 116, emergency 999 or 112",
  },
  TZ: {
    name: "Tanzania",
    country: "TZ",
    yearStart: 1,
    syllabus: "INT",
    stages: [
      ["O-level", g("Form ", 1, 4, 8)],
      ["A-level", [["Form 5", 12], ["Form 6", 12]]],
    ],
    exams: "FTNA (Form 2), CSEE (Form 4), ACSEE (Form 6)",
    help: "Child helpline 116, emergency 112",
  },
  UG: {
    name: "Uganda",
    country: "UG",
    yearStart: 2,
    syllabus: "INT",
    stages: [
      ["O-level", g("S", 1, 4, 8)],
      ["A-level", [["S5", 12], ["S6", 12]]],
    ],
    exams: "UCE (S4) and UACE (S6)",
    help: "Sauti child helpline 116, emergency 999 or 112",
  },
  RW: {
    name: "Rwanda",
    country: "RW",
    yearStart: 9,
    syllabus: "INT",
    stages: [
      ["Lower secondary", g("S", 1, 3, 7)],
      ["Upper secondary", g("S", 4, 6, 10)],
    ],
    exams: "O-level national exam (S3) and A-level national exam (S6)",
    help: "Child helpline 116, emergency 112",
  },
  ET: {
    name: "Ethiopia",
    country: "ET",
    yearStart: 9,
    syllabus: "INT",
    stages: [
      ["Middle school", g("Grade ", 7, 8, 7)],
      ["Secondary", g("Grade ", 9, 12, 9)],
    ],
    exams: "Grade 8 regional exam and Grade 12 national exam (ESSLCE)",
    help: "police 991",
  },
  ZA: {
    name: "South Africa – CAPS",
    country: "ZA",
    yearStart: 1,
    syllabus: "INT",
    stages: [
      ["Senior phase", g("Grade ", 7, 9, 7)],
      ["FET phase", g("Grade ", 10, 12, 10)],
    ],
    exams: "NSC (matric) exams in Grade 12",
    help: "Childline South Africa 116, emergency 112",
  },
  ZM: {
    name: "Zambia",
    country: "ZM",
    yearStart: 1,
    syllabus: "INT",
    stages: [
      ["Junior secondary", g("Grade ", 8, 9, 8)],
      ["Senior secondary", g("Grade ", 10, 12, 10)],
    ],
    exams: "Grade 9 and Grade 12 ECZ exams",
    help: "Childline Zambia 116, emergency 999 or 112",
  },
  ZW: {
    name: "Zimbabwe",
    country: "ZW",
    yearStart: 1,
    syllabus: "INT",
    stages: [
      ["O-level", g("Form ", 1, 4, 8)],
      ["A-level", [["Form 5 (Lower Six)", 12], ["Form 6 (Upper Six)", 12]]],
    ],
    exams: "ZIMSEC O-level (Form 4) and A-level (Form 6)",
    help: "Childline Zimbabwe 116, emergency 999 or 112",
  },
  EG: {
    name: "Egypt",
    country: "EG",
    yearStart: 9,
    syllabus: "INT",
    stages: [
      ["Preparatory", g("Prep ", 1, 3, 7)],
      ["Secondary", g("Secondary ", 1, 3, 10)],
    ],
    exams: "Preparatory certificate and Thanaweya Amma (Secondary 3)",
    help: "Child helpline 16000, police 122, ambulance 123",
  },
  "FR-AF": {
    name: "Afrique francophone (collège / lycée)",
    country: "SN",
    countries: ["SN", "CI", "CM", "ML", "BF", "NE", "BJ", "TG", "GN", "CD", "CG", "GA", "MG", "TD"],
    yearStart: 10,
    syllabus: "INT",
    stages: [
      ["Collège", [["6e", 6], ["5e", 7], ["4e", 8], ["3e", 9]]],
      ["Lycée", [["2nde", 10], ["1re", 11], ["Terminale", 12]]],
    ],
    exams: "BEPC (3e) and baccalauréat (Terminale)",
    help: "child helpline 116 where available",
  },
  PH: {
    name: "Philippines – K to 12",
    country: "PH",
    yearStart: 8,
    syllabus: "INT",
    stages: [
      ["Junior high school", g("Grade ", 7, 10, 7)],
      ["Senior high school", g("Grade ", 11, 12, 11)],
    ],
    exams: "NAT and college entrance tests",
    help: "Bantay Bata 163, emergency 911",
  },
  ID: {
    name: "Indonesia",
    country: "ID",
    yearStart: 7,
    syllabus: "INT",
    stages: [
      ["SMP", g("Kelas ", 7, 9, 7)],
      ["SMA", g("Kelas ", 10, 12, 10)],
    ],
    exams: "Asesmen Nasional and UTBK-SNBT",
    help: "SAPA 129, emergency 112",
  },
  VN: {
    name: "Vietnam",
    country: "VN",
    yearStart: 9,
    syllabus: "INT",
    stages: [
      ["THCS", g("Lớp ", 6, 9, 6)],
      ["THPT", g("Lớp ", 10, 12, 10)],
    ],
    exams: "Lớp 10 entrance exam and the national high school exam",
    help: "Child helpline 111, police 113, ambulance 115",
  },
  MY: {
    name: "Malaysia",
    country: "MY",
    yearStart: 3,
    syllabus: "INT",
    stages: [
      ["Lower secondary", g("Form ", 1, 3, 7)],
      ["Upper secondary (SPM)", g("Form ", 4, 5, 10)],
      ["Form 6 (STPM)", [["Form 6", 12]]],
    ],
    exams: "SPM (Form 5) and STPM",
    help: "Talian Kasih 15999, emergency 999",
  },
  INTL: {
    name: "International (Grade 6–12)",
    country: "",
    yearStart: 9,
    syllabus: "INT",
    stages: [
      ["Lower secondary", g("Grade ", 6, 9, 6)],
      ["Upper secondary", g("Grade ", 10, 12, 10)],
    ],
    exams: "",
    help: "",
  },
};

export const SYSTEM_IDS = Object.keys(SCHOOL_SYSTEMS);
export const DEFAULT_SYSTEM = "SI";
export const isRegional = (id) => !!SCHOOL_SYSTEMS[id] && id !== "SI";

// Država (ISO 3166) → šolski sistem; brez ujemanja ostane Slovenija (dosedanje vedenje).
export const COUNTRY_SYSTEM = {};
for (const [id, s] of Object.entries(SCHOOL_SYSTEMS)) {
  for (const c of s.countries || [s.country]) if (c && !COUNTRY_SYSTEM[c]) COUNTRY_SYSTEM[c] = id;
}
export const systemForCountry = (country) => COUNTRY_SYSTEM[String(country || "").toUpperCase()] || DEFAULT_SYSTEM;

// Razredi sistema: [{ label, level, stage }].
export function gradesOf(id) {
  const s = SCHOOL_SYSTEMS[id];
  if (!s?.stages) return [];
  return s.stages.flatMap(([stage, grades]) => grades.map(([label, level]) => ({ label, level, stage })));
}

export const gradeInfo = (id, label) => gradesOf(id).find((x) => x.label === label) || null;

// Razredi do 9. leta šolanja so »osnovna šola«, od 10. »srednja šola« (lige, tekmovanja, prompt).
export const trackForLevel = (level) => (level <= 9 ? "OSNOVNA_SOLA" : "SREDNJA_SOLA");

// Privzeti razred: tisti, ki je najbližje 8. letu šolanja (kot slovenski 8. razred).
export function defaultGrade(id) {
  const list = gradesOf(id);
  return list.reduce((best, x) => (Math.abs(x.level - 8) < Math.abs(best.level - 8) ? x : best), list[0])?.label || "";
}
