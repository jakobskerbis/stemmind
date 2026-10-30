// Šolska licenca kot vir pravic (server/placila/pravice.js). Podatke o šolah, licencah in razredih ima
// server/schools.js (ločen del: učiteljevi računi, razredi, licence, ki jih vnese skrbnik). Tukaj jih
// samo beremo: schoolAccess(db, studentId, now) in schoolStudents(db, schoolId). Dokler modula ni,
// šolskih pravic ni (vsi učenci imajo samo osebne vire).
let schools = null;
try {
  schools = await import("../schools.js");
} catch (e) {
  if (
    e?.code !== "ERR_MODULE_NOT_FOUND" ||
    !/schools\.js/.test(String(e.message))
  )
    throw e;
}

const SPENT_MS = 60000; // poraba AI šole se preračuna največ enkrat na minuto
const CACHES = new WeakMap(); // db → Map(schoolId → { at, usd })

// source: { access(db, studentId, now), students(db, schoolId) }; privzeto server/schools.js.
// personalOf(studentId): ali ima učenec osebni paket; njegova poraba AI se ne šteje v mejo šole.
export function createSchoolSource(
  db,
  { source = null, personalOf = () => false } = {},
) {
  const src =
    source ||
    (schools
      ? { access: schools.schoolAccess, students: schools.schoolStudents }
      : null);
  if (!CACHES.has(db)) CACHES.set(db, new Map());
  const cache = CACHES.get(db);

  function spentUsd(schoolId) {
    const c = cache.get(schoolId);
    if (c && Date.now() - c.at < SPENT_MS) return c.usd;
    const ids = (src.students(db, schoolId) || []).filter(
      (id) => !personalOf(id),
    );
    const usd = ids.length
      ? db
          .prepare(
            `SELECT COALESCE(SUM(cost_usd),0) AS s FROM usage WHERE created_at >= date('now','start of month') AND student_id IN (${ids.map(() => "?").join(",")})`,
          )
          .get(...ids).s
      : 0;
    cache.set(schoolId, { at: Date.now(), usd });
    return usd;
  }

  return {
    available: !!src,
    // Licence učenca v obliki, ki jo pričakuje rights(): [] ali [{ ... }].
    forStudent(studentId, now = Date.now()) {
      const a = src?.access(db, studentId, now);
      if (!a) return [];
      const cap = Number(a.aiCapUsdMonth) || 0;
      return [
        {
          id: a.licenceId,
          school_id: a.schoolId,
          school_name: a.schoolName,
          plan: a.plan,
          subjects: a.subjects ?? null,
          grades: a.grades ?? null,
          valid_until: a.validUntil ?? null,
          ai_month_usd: cap,
          ai_spent_usd: cap > 0 ? spentUsd(a.schoolId) : 0,
        },
      ];
    },
    clearCache: () => cache.clear(),
  };
}
