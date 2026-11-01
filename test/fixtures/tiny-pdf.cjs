// Majhen PDF z besedilno plastjo za preizkus razdelitve pole na naloge (test/paper-tasks.test.js,
// scripts/preveri-aplikacijo.cjs). Ni prava pola RIC: pages = [[[x, y, "besedilo"], …], …] na A4 (595×842).
function tinyPdf(pages) {
  const objs = [];
  const add = (s) => objs.push(s) && objs.length;
  const catalog = add("");
  const tree = add("");
  const font = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>");
  const kids = [];
  for (const lines of pages) {
    const esc = (s) => s.replace(/[\\()]/g, (c) => "\\" + c);
    const stream = lines.map(([x, y, s, size = 11]) => `BT /F1 ${size} Tf ${x} ${y} Td (${esc(s)}) Tj ET`).join("\n");
    const content = add(`<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream`);
    kids.push(add(`<< /Type /Page /Parent ${tree} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${font} 0 R >> >> /Contents ${content} 0 R >>`));
  }
  objs[catalog - 1] = `<< /Type /Catalog /Pages ${tree} 0 R >>`;
  objs[tree - 1] = `<< /Type /Pages /Kids [${kids.map((k) => `${k} 0 R`).join(" ")}] /Count ${kids.length} >>`;
  let out = "%PDF-1.4\n";
  const offs = objs.map((o, i) => {
    const at = Buffer.byteLength(out, "latin1");
    out += `${i + 1} 0 obj\n${o}\nendobj\n`;
    return at;
  });
  const xref = Buffer.byteLength(out, "latin1");
  out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n${offs.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("")}`;
  out += `trailer\n<< /Size ${objs.length + 1} /Root ${catalog} 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(out, "latin1");
}

// Dve strani v slogu pole NPZ: naslovnica brez nalog, nato naloga 1 (a, b) in naloga 2 na drugi strani.
const SAMPLE = [
  [[200, 700, "Preizkus znanja", 20], [200, 650, "Navodila za reševanje"]],
  [
    [71, 752, "1."], [92, 752, "Izracunaj."],
    [71, 727, "1."], [92, 727, "a)"], [115, 727, "12 + 30 ="], [482, 702, "(1 tocka)"],
    [71, 600, "1."], [92, 600, "b)"], [115, 600, "7 * 8 ="], [482, 575, "(1 tocka)"],
    [71, 400, "2."], [92, 400, "Koliko je 25 % od 80?"], [482, 375, "(2 tocki)"],
  ],
];

module.exports = { tinyPdf, SAMPLE };
