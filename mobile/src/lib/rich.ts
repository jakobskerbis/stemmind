// Besedilo z Markdownom in formulami → HTML za RichText. Isti izris kot na spletu (public/rich.js),
// formule pa KaTeX izriše v MathML, ki ga WebView na iPhonu in Androidu izriše sam (brez pisav in
// brez povezave). Ves izris teče v aplikaciji; WebView samo prikaže gotov HTML.
import { Marked } from "marked";
import katex from "katex";
import { createRenderer, streamSafe } from "../../../public/rich.js";
import type { Theme } from "./theme";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// MathML v WebView vrstične formule ne prelomi (na spletu KaTeX prelomi pri »=«), zato dolgo vrstično
// formulo razdelimo pri »=« na najvišji ravni v več kosov, med katerimi se vrstica sme prelomiti.
export function splitAtEquals(tex: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < tex.length; i++) {
    const c = tex[i];
    if (c === "\\") {
      const m = /^\\(left|right|begin|end)\b/.exec(tex.slice(i));
      if (m) depth += m[1] === "left" || m[1] === "begin" ? 1 : -1;
      i += m ? m[0].length - 1 : 1;
    } else if (c === "{") depth++;
    else if (c === "}") depth--;
    else if (c === "=" && depth === 0 && i > start) {
      out.push(tex.slice(start, i));
      start = i;
    }
  }
  out.push(tex.slice(start));
  return out.filter((x) => x.trim());
}
const mml = (tex: string, o: object) => katex.renderToString(tex, { ...o, output: "mathml" });
const mathml = {
  renderToString: (tex: string, o: { displayMode?: boolean }) => {
    const parts = o.displayMode || tex.length < 24 ? [tex] : splitAtEquals(tex);
    return parts.length > 1 ? `<span class="m-wrap">${parts.map((x) => mml(x, o)).join("<wbr>")}</span>` : mml(tex, o);
  },
};

// Vsebina strežnika (lekcije, naloge, rešitve) sme imeti HTML (npr. <details> »Pokaži formulo«).
const trustedMarked = new Marked();
// Odgovori inštruktorja (AI): surov HTML se izpiše kot besedilo.
const safeMarked = new Marked({ renderer: { html: ({ text }: { text: string }) => esc(text) } });

// sanitize: vsebina je že varna (zaupanja vredna ali z izpisanim HTML), DOMPurify v aplikaciji ni potreben.
const make = createRenderer as (o: object) => { renderRich: (s: string) => string };
const trusted = make({ marked: trustedMarked, katex: mathml, sanitize: (h: string) => h });
const untrusted = make({ marked: safeMarked, katex: mathml, sanitize: (h: string) => h });

export function toHtml(md: string, { ai = false, streaming = false } = {}) {
  const src = streaming ? streamSafe(md) : md;
  return (ai ? untrusted : trusted).renderRich(src) as string;
}

// Kratko besedilo brez formul in Markdowna se izriše kar z naravnim besedilom (brez WebView).
export const isPlain = (s: string) => !/[$*_`|#<>\\[\]]|^\s*[-+]\s|^\s*\d+\.\s/m.test(s);

// Celoten dokument za WebView: barve teme, sistemska pisava, MathML, tabele, »Pokaži formulo«.
export function docHtml(body: string, th: Theme, { size = 17, center = false } = {}) {
  return `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data:">
<style>
:root{color-scheme:${th.dark ? "dark" : "light"}}
html,body{margin:0;padding:0;background:transparent;color:${th.text};font:${size}px/1.5 -apple-system,system-ui,Roboto,"Segoe UI",sans-serif;-webkit-text-size-adjust:100%;word-wrap:break-word}
body{${center ? "text-align:center;" : ""}}
p{margin:0 0 .7em}p:last-child{margin-bottom:0}
h1,h2,h3,h4{line-height:1.25;margin:1em 0 .4em}
h3,h4,.sub-head{font-size:1.12em;font-weight:800;line-height:1.3;margin:1.4em 0 .45em;padding-inline-start:10px;border-inline-start:3px solid ${th.accent}}
#c>:first-child{margin-top:0}
ul,ol{padding-inline-start:1.4em;margin:.3em 0 .8em}li{margin:.2em 0}
a{color:${th.accent}}
strong{font-weight:700}
code{font-family:ui-monospace,Menlo,monospace;font-size:.9em;background:${th.surface2};padding:.1em .3em;border-radius:5px}
pre{background:${th.surface2};padding:10px;border-radius:10px;overflow-x:auto;font-size:13px}
pre code{background:none;padding:0}
blockquote{margin:.6em 0;padding:.4em .9em;border-inline-start:3px solid ${th.accent};background:${th.accentSoft};border-radius:8px}
math{font-size:1.08em;font-family:"STIX Two Math","Cambria Math","Noto Sans Math",math}
math[display=block]{display:block;margin:.6em 0;overflow-x:auto;overflow-y:hidden}
.katex{display:inline-block;max-width:100%;overflow-x:auto;overflow-y:hidden;vertical-align:middle}
.m-wrap .katex{max-width:none}
.md-table-wrap{overflow-x:auto;margin:.6em 0;border:1px solid ${th.border};border-radius:12px}
table{border-collapse:collapse;width:100%;font-size:.95em}
th,td{padding:7px 10px;border-bottom:1px solid ${th.border};text-align:start;vertical-align:top}
th{background:${th.surface2};font-weight:700}tr:last-child td{border-bottom:0}
td.num,th.num{text-align:center}
details{margin:.6em 0;border:1px solid ${th.border};border-radius:12px;padding:.5em .8em;background:${th.surface}}
details[open]{border-inline-start:3px solid ${th.accent}}
details.tb-solution>summary{display:inline-block;padding:.35em .9em;border-radius:999px;background:${th.accentSoft};list-style:none}
details.tb-solution>summary::-webkit-details-marker{display:none}
details.tb-solution[open]>summary{margin-bottom:.4em}
summary{color:${th.accent};font-weight:700;cursor:pointer}
.tb-think{margin:.8em 0;padding:.7em .9em;border-radius:12px;background:${th.goldSoft}}
.tb-think-label{font-weight:700;color:${th.gold};margin-bottom:.3em}
img,svg{max-width:100%;height:auto}
</style></head><body><div id="c">${body}</div></body></html>`;
}

// Merjenje višine vsebine (WebView brez drsenja, višino dobi od vsebine).
export const MEASURE_JS = `(function(){
  var last=0;function send(){var h=Math.ceil(document.getElementById('c').getBoundingClientRect().height);if(h!==last){last=h;window.ReactNativeWebView.postMessage(String(h));}}
  new ResizeObserver(send).observe(document.getElementById('c'));
  document.addEventListener('toggle',send,true);send();setTimeout(send,300);
})();true;`;
