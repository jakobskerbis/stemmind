// Preverjanje odgovorov: števila (z zaokroževanjem in enotami), ulomki,
// izbira, koeficienti kemijskih enačb.

// ---------- pomožno ----------

export function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

// Zaokroževanje, kot ga učijo v šoli: števka 0–4 navzdol, 5–9 navzgor.
export function roundHalfUp(x, d) {
  const f = 10 ** d;
  const sign = x < 0 ? -1 : 1;
  return (sign * Math.round(Math.abs(x) * f + 1e-9)) / f;
}

// Slovenski zapis števila: decimalna vejica.
export function fmt(x, d = null) {
  let s = d === null ? String(Number(x.toFixed(10))) : roundHalfUp(x, d).toFixed(d);
  return s.replace("-", "−").replace(".", ",");
}

const SUP = { "²": "2", "³": "3" };
export function normUnit(u) {
  return String(u || "")
    .toLowerCase()
    .replace(/[²³]/g, (c) => SUP[c])
    .replace(/\^/g, "")
    .replace(/\s+/g, "")
    .replace(/\*|·/g, "")
    .replace(/°c/g, "°c")
    .replace(/^stopinj[ae]?$|^°$/, "°")
    .replace(/kmh$/, "km/h");
}

// Razčleni vnos, npr. "12,5 cm²", "−3", "1 200", "2.5m".
export function parseNumberWithUnit(input) {
  const s = String(input).trim().replace(/−/g, "-");
  const m = s.match(/^([+-]?\s*(?:\d{1,3}(?:[ .]\d{3})+|\d+)?(?:[.,]\d+)?)\s*(.*)$/);
  if (!m || !/\d/.test(m[1])) return null;
  let num = m[1].replace(/\s/g, "");
  // "1.200" s piko kot ločilom tisočic (natanko 3 števke po piki in brez vejice)
  if (/^\d{1,3}(\.\d{3})+$/.test(num) && !num.includes(",")) num = num.replace(/\./g, "");
  num = num.replace(",", ".");
  const value = Number(num);
  if (!Number.isFinite(value)) return null;
  const decimals = (num.split(".")[1] || "").length;
  return { value, decimals, unit: m[2].trim() };
}

// ---------- preverjanje ----------

const ROUNDING_RULE =
  "Pri zaokroževanju pogledaš prvo števko za mestom, na katero zaokrožuješ: če je 0, 1, 2, 3 ali 4, zaokrožiš navzdol (števka ostane), če je 5, 6, 7, 8 ali 9, zaokrožiš navzgor (števka se poveča za 1).";

function decimalsWord(d) {
  if (d === 0) return "na celo število";
  if (d === 1) return "na eno decimalko";
  if (d === 2) return "na dve decimalki";
  if (d === 3 || d === 4) return `na ${d} decimalke`;
  return `na ${d} decimalk`;
}

function checkNumber(ans, input) {
  const p = parseNumberWithUnit(input);
  if (!p) return { kind: "format", message: "Vpiši število (decimalno vejico lahko zapišeš z vejico)." };

  // Enota
  if (ans.unit) {
    const want = normUnit(ans.unit);
    const got = normUnit(p.unit);
    if (!got) return { kind: "unit", message: `Število je zapisano, dodaj še enoto. V kateri enoti je rezultat?` };
    const alts = (ans.unitAlternatives || []).map(normUnit);
    if (got !== want && !alts.includes(got)) {
      return { kind: "unit", message: `Preveri enoto: rezultat zapiši v ${ans.unit}.` };
    }
  }

  const exacts = [ans.value, ...(ans.alsoAccept || [])];
  const d = ans.decimals;

  // Brez zahtevanega zaokroževanja: točen rezultat (z drobno toleranco).
  if (d === undefined || d === null) {
    const ok = exacts.some((e) => Math.abs(p.value - e) <= (ans.tolerance ?? 1e-9) * Math.max(1, Math.abs(e)));
    return ok ? { kind: "correct" } : { kind: "wrong" };
  }

  for (const e of exacts) {
    const right = roundHalfUp(e, d);
    if (Math.abs(p.value - right) < 1e-9 && p.decimals <= d) {
      // Npr. 2,5 pri dveh decimalkah je enako 2,50 – sprejmemo.
      return { kind: "correct" };
    }
  }

  // Je izračun pravilen, a je narobe le zaokroževanje?
  for (const e of exacts) {
    const right = roundHalfUp(e, d);
    const own = p.decimals;
    const diff = Math.abs(p.value - e);
    const step = 10 ** -own;
    const roundedOwn = diff <= 0.5 * step * (1 + 1e-7); // pravilno zaokroženo, a na napačno število mest
    const truncated = Math.abs(p.value) <= Math.abs(e) + 1e-12 && diff < step; // odrezano namesto zaokroženo
    const closeToExact = own === d ? diff < step : roundedOwn || truncated;
    if (!closeToExact) continue;
    let what;
    if (own !== d) {
      what = `Rezultat je treba zaokrožiti ${decimalsWord(d)}, ti si ga zapisal ${own === 0 ? "kot celo število" : `na ${own} decimal${own === 1 ? "ko" : own === 2 ? "ki" : own < 5 ? "ke" : "k"}`}.`;
    } else {
      what = `Zaokrožil si v napačno smer.`;
    }
    const next = Math.floor(Math.abs(e) * 10 ** (d + 1) + 1e-9) % 10;
    return {
      kind: "rounding",
      message:
        `Izračun je pravilen, popraviti je treba le zaokroževanje. ${what} ${ROUNDING_RULE} ` +
        `Tu je natančnejši rezultat ${fmt(e, Math.min(d + 3, 6))}, števka za ${d === 0 ? "enicami" : `${d}. decimalko`} je ${next}, ` +
        `zato je pravilno zaokroženo ${fmt(right, d)}.`,
      reveal: fmt(right, d) + (ans.unit ? ` ${ans.unit}` : ""),
    };
  }
  return { kind: "wrong" };
}

function parseFraction(input) {
  const s = String(input).trim().replace(/−/g, "-").replace(/\s+/g, " ");
  let m = s.match(/^([+-]?\d+)\s*\/\s*(\d+)$/);
  if (m) return { num: Number(m[1]), den: Number(m[2]) };
  m = s.match(/^([+-]?)(\d+) (\d+)\s*\/\s*(\d+)$/); // mešano število "1 1/2"
  if (m) {
    const sign = m[1] === "-" ? -1 : 1;
    const den = Number(m[4]);
    return { num: sign * (Number(m[2]) * den + Number(m[3])), den };
  }
  m = s.match(/^[+-]?\d+$/);
  if (m) return { num: Number(s), den: 1 };
  return null;
}

function checkFraction(ans, input) {
  const f = parseFraction(input);
  if (!f || f.den === 0) {
    return { kind: "format", message: "Zapiši ulomek v obliki a/b (npr. 3/4) ali mešano število (npr. 1 1/2)." };
  }
  const same = f.num * ans.den === ans.num * f.den;
  if (!same) return { kind: "wrong" };
  if (gcd(f.num, f.den) !== 1) return { kind: "simplify", message: "Vrednost je pravilna, a ulomek še okrajšaj do konca." };
  return { kind: "correct" };
}

function checkChoice(ans, input) {
  return Number(input) === ans.index ? { kind: "correct" } : { kind: "wrong" };
}

function checkCoefficients(ans, input) {
  const nums = String(input)
    .split(/[,;\s]+/)
    .filter(Boolean)
    .map(Number);
  if (nums.length !== ans.values.length || nums.some((n) => !Number.isInteger(n) || n < 1)) {
    return { kind: "format", message: `Vpiši ${ans.values.length} celih števil, ločenih z vejico (koeficient 1 tudi zapiši).` };
  }
  if (nums.every((n, i) => n === ans.values[i])) return { kind: "correct" };
  const ratio = nums[0] / ans.values[0];
  if (nums.every((n, i) => Math.abs(n / ans.values[i] - ratio) < 1e-9)) {
    return { kind: "simplify", message: "Enačba je urejena, a koeficienti morajo biti najmanjša možna cela števila." };
  }
  return { kind: "wrong" };
}

export function checkAnswer(answer, input) {
  if (input === undefined || input === null || String(input).trim() === "") {
    return { kind: "format", message: "Najprej vpiši odgovor." };
  }
  switch (answer.type) {
    case "number":
      return checkNumber(answer, input);
    case "fraction":
      return checkFraction(answer, input);
    case "choice":
      return checkChoice(answer, input);
    case "coefficients":
      return checkCoefficients(answer, input);
    default:
      throw new Error(`Neznana vrsta odgovora: ${answer.type}`);
  }
}
