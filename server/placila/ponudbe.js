// Pravila ponudb (j 2026-10-30, načrt »Šolska licenca in Evklid Osebno«, UCPD Priloga I, točka 28):
// - nikoli v razredu in med poukom po Urniku (pri učencu iz šole brez Urnika: delavnik 7.00–15.00);
// - učitelj jih lahko izklopi za svoj razred;
// - pod 15 let brez cene, le povezava s podatki za starše; aplikacija sama ne ponuja gumba
//   »Prosi starše za plačilo« (učenec ga odpre sam);
// - nikoli v ligah, brez naključnih nakupov in brez prednosti v ligah (XP prinaša samo vadba, ki je
//   za vse enaka; plačljivi deli XP ne dajejo).
export const NO_PRICE_AGE = 15;
const SCHOOL_DAY = ["07:00", "15:00"];

// lessons: ure iz Urnika ({ day 1–7, start "HH:MM", end "HH:MM" }); now: { day, time } po času v Ljubljani.
export function inLesson(lessons = [], now) {
  return lessons.some(
    (l) =>
      l.day === now.day &&
      l.start &&
      l.end &&
      l.start <= now.time &&
      now.time < l.end,
  );
}

// age: starost učenca (null = neznana, velja kot pod 15); membership: { inSchool, inClass, offersOff }
// (server/schools.js, nit za šole); lessons, now: Urnik in trenutni čas.
// Vrne { show, prices, reason }: show = ponudba sme biti prikazana, prices = sme imeti ceno.
export function offerPolicy({
  age = null,
  membership = null,
  lessons = [],
  now,
}) {
  const m = membership || {};
  if (m.offersOff) return { show: false, prices: false, reason: "teacher_off" };
  if (inLesson(lessons, now))
    return { show: false, prices: false, reason: "lesson" };
  const school = m.inSchool || m.inClass;
  if (
    school &&
    !lessons.length &&
    now.day <= 5 &&
    SCHOOL_DAY[0] <= now.time &&
    now.time < SCHOOL_DAY[1]
  ) {
    return { show: false, prices: false, reason: "school_hours" };
  }
  if (age === null || age < NO_PRICE_AGE)
    return { show: true, prices: false, reason: "under_15" };
  return { show: true, prices: true, reason: null };
}
