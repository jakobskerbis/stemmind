// Šibke točke: ročno vnesene + samodejno zaznane iz META analitike.

const SUBJECT_LABEL = { MAT: "MAT", FIZ: "FIZ", KEM: "KEM", BIO: "BIO", GEO: "GEO", RAC: "RAČ", EKO: "EKO" };

// Tema je šibka, če je imel učenec v zadnjih 60 dneh vsaj MIN_TURNS potez
// pri njej in je bil delež napak vsaj MIN_RATE.
export const MIN_TURNS = 3;
export const MIN_RATE = 0.4;

export function detectWeakTopics(stats) {
  return stats
    .filter((s) => s.turns >= MIN_TURNS && s.errors / s.turns >= MIN_RATE)
    .sort((a, b) => b.errors / b.turns - a.errors / a.turns)
    .slice(0, 8)
    .map((s) => ({ ...s, rate: s.errors / s.turns }));
}

export function weaknessesForPrompt(store, student) {
  const auto = detectWeakTopics(store.topicStats(student.id)).map(
    (s) => `${s.topic}${s.subject ? ` (${SUBJECT_LABEL[s.subject]})` : ""}`,
  );
  const all = [...student.manual_weaknesses];
  for (const a of auto) {
    if (!all.some((m) => a.toLowerCase().startsWith(m.toLowerCase()))) all.push(a);
  }
  return all;
}
