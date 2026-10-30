// Grški matematiki: kratka zgodovinska dejstva (docs/oblikovanje.md → »Pridih stare Grčije«).
// Kartica .gr-fact v praznem klepetu z inštruktorjem in na dnu Učne poti; dejstvo je naključno,
// gumb pokaže drugo. Besedila so v i18n (greek.f1 … greek.f11). »Evklid« je tu matematik, ne ime aplikacije.
import { icon } from "./icons.js";
import { t } from "./i18n.js";

const FACTS = ["greek.f1", "greek.f2", "greek.f3", "greek.f4", "greek.f5", "greek.f6", "greek.f7", "greek.f8", "greek.f9", "greek.f10", "greek.f11"];
let last = -1;

function pick() {
  let i = Math.floor(Math.random() * FACTS.length);
  if (i === last) i = (i + 1) % FACTS.length;
  last = i;
  return t(FACTS[i]);
}

export function greekFactHtml(cls = "") {
  return `<aside class="gr-fact ${cls}" aria-label="${t("greek.title")}">
    <span class="gr-ic" aria-hidden="true">${icon("elementi")}</span>
    <div class="gr-body"><span class="eyebrow">${t("greek.title")}</span><p class="gr-text" aria-live="polite">${pick()}</p></div>
    <button type="button" class="ghost icon-only gr-next" title="${t("greek.next")}" aria-label="${t("greek.next")}">${icon("refresh-cw")}</button>
  </aside>`;
}

// Gumb »Drugo dejstvo« v vseh karticah znotraj root (enkrat na element).
export function wireGreekFacts(root = document) {
  root.querySelectorAll(".gr-fact:not([data-wired])").forEach((box) => {
    box.dataset.wired = "1";
    box.querySelector(".gr-next")?.addEventListener("click", () => {
      box.querySelector(".gr-text").textContent = pick();
    });
  });
}
