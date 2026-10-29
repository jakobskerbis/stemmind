// Predmeti aplikacije po predmetniku: OŠ 6. in 7. razred matematika in naravoslovje,
// od 8. razreda in v gimnaziji matematika, fizika, kemija in biologija; študenti fakultet
// še strokovne predmete svojega programa. Regijski sistemi imajo matematiko, fiziko in kemijo.
export const SCHOOL_SUBJECTS = ["MAT", "FIZ", "KEM", "NAR", "BIO"];
export const EARLY_OS_SUBJECTS = ["MAT", "NAR"];
export const LATE_SUBJECTS = ["MAT", "FIZ", "KEM", "BIO"];
export const REGIONAL_SUBJECTS = ["MAT", "FIZ", "KEM"];
// Slovenski OŠ razred 1 do 7 (»6. razred«): matematika in naravoslovje (1.–5. razred zaenkrat s snovjo 6. razreda).
export const isEarlyOs = (track, level) => track === "OSNOVNA_SOLA" && /^[1-7]\./.test(String(level || "").trim());
export function schoolSubjectsFor(track, level) {
  return isEarlyOs(track, level) ? EARLY_OS_SUBJECTS : LATE_SUBJECTS;
}
// Predmet, ki ga razred nima: fizika, kemija ali biologija v 6./7. → naravoslovje, naravoslovje v 8. → fizika.
export function subjectForLevel(subject, track, level) {
  const list = schoolSubjectsFor(track, level);
  if (list.includes(subject)) return subject;
  if (subject === "FIZ" || subject === "KEM" || subject === "BIO") return "NAR";
  if (subject === "NAR") return "FIZ";
  return "MAT";
}
export const UNI_SUBJECTS = ["BIO", "GEO", "RAC", "EKO"];
export const ALL_SUBJECTS = [...new Set([...SCHOOL_SUBJECTS, ...UNI_SUBJECTS])];
export const SUBJECT_NAMES = {
  MAT: "Matematika",
  FIZ: "Fizika",
  KEM: "Kemija",
  NAR: "Naravoslovje",
  BIO: "Biologija",
  GEO: "Geologija in okolje",
  RAC: "Računalništvo",
  EKO: "Ekonomija",
};
