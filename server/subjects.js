// Predmeti aplikacije po predmetniku: OŠ 6. in 7. razred matematika in naravoslovje,
// od 8. razreda in v SŠ matematika, fizika in kemija; študenti fakultet še strokovne
// predmete svojega programa.
export const SCHOOL_SUBJECTS = ["MAT", "FIZ", "KEM", "NAR"];
export const EARLY_OS_SUBJECTS = ["MAT", "NAR"];
export const LATE_SUBJECTS = ["MAT", "FIZ", "KEM"];
// Slovenski OŠ razred 6 ali 7 (»6. razred«).
export const isEarlyOs = (track, level) => track === "OSNOVNA_SOLA" && /^[67]\./.test(String(level || "").trim());
export function schoolSubjectsFor(track, level) {
  return isEarlyOs(track, level) ? EARLY_OS_SUBJECTS : LATE_SUBJECTS;
}
// Predmet, ki ga razred nima: fizika ali kemija v 6./7. → naravoslovje, naravoslovje v 8. → fizika.
export function subjectForLevel(subject, track, level) {
  const list = schoolSubjectsFor(track, level);
  if (list.includes(subject)) return subject;
  if (subject === "FIZ" || subject === "KEM") return "NAR";
  if (subject === "NAR") return "FIZ";
  return "MAT";
}
export const UNI_SUBJECTS = ["BIO", "GEO", "RAC", "EKO"];
export const ALL_SUBJECTS = [...SCHOOL_SUBJECTS, ...UNI_SUBJECTS];
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
