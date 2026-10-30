// Učbenik za tiskanje (server/textbook-print.js): gumb »Shrani kot PDF« in samodejni tisk (#natisni).
// Ločena datoteka zaradi politike CSP (brez vrinjenih skript in onclick).
document.getElementById("natisni")?.addEventListener("click", () => print());
if (location.hash === "#natisni") addEventListener("load", () => setTimeout(() => print(), 300));
