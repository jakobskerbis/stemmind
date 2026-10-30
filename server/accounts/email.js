// Pošiljanje e-pošte prek Resend. Brez ključa se sporočilo izpiše v dnevnik (razvoj).
import { BRAND } from "../brand.js";

export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export class Mailer {
  constructor({ apiKey = process.env.RESEND_API_KEY, from = process.env.RESEND_FROM, fetchFn = globalThis.fetch, log = console.log } = {}) {
    this.key = apiKey;
    this.from = from || "Evklid <onboarding@resend.dev>";
    this.fetch = fetchFn;
    this.log = log;
  }
  get enabled() {
    return !!this.key;
  }
  async send({ to, subject, html, text }) {
    if (!this.key) {
      // Na javnem strežniku brez e-naslova in vsebine (povezave za novo geslo so kot geslo); lokalno cela vsebina.
      const prod = process.env.NODE_ENV === "production" || /^https:/i.test(process.env.EVKLID_BASE_URL || "");
      this.log(prod ? `[evklid] E-pošta ni poslana (Resend ni nastavljen): ${subject}` : `[evklid] E-pošta (Resend ni nastavljen) za ${to}: ${subject}\n${text || ""}`);
      return { id: null, dev: true };
    }
    const res = await this.fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${this.key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: this.from, to: [to], subject, html, text }),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body?.message || `Resend ${res.status}`);
    return body;
  }
}

export function layout(title, inner, footer = "") {
  return `<!doctype html><html lang="sl"><body style="margin:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;color:#1d2433">
<div style="max-width:560px;margin:0 auto;padding:24px">
<div style="font-size:22px;font-weight:bold;margin-bottom:16px">${BRAND.wordmark[0]}<span style="color:#4f6bed">${BRAND.wordmark[1]}</span></div>
<div style="background:#fff;border-radius:12px;padding:24px">
<h1 style="font-size:20px;margin:0 0 16px">${esc(title)}</h1>
${inner}
</div>
<p style="font-size:12px;color:#6b7385;margin-top:16px">${footer}</p>
</div></body></html>`;
}

export const button = (href, label) =>
  `<p style="margin:24px 0"><a href="${esc(href)}" style="background:#4f6bed;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:bold">${esc(label)}</a></p>`;

export function verifyEmail(url) {
  return {
    subject: "Potrdi e-naslov za Evklid",
    html: layout(
      "Potrdi svoj e-naslov",
      `<p>Pozdravljeni! S klikom na gumb potrdite e-naslov in da ste zakoniti zastopnik otroka, ki bo uporabljal Evklid.</p>${button(url, "Potrdi e-naslov")}<p style="font-size:13px;color:#6b7385">Če se niste registrirali, to sporočilo prezrite.</p>`,
    ),
    text: `Potrdite e-naslov za Evklid: ${url}`,
  };
}

export function resetEmail(url) {
  return {
    subject: "Novo geslo za Evklid",
    html: layout("Nastavi novo geslo", `<p>Za novo geslo kliknite spodnji gumb. Povezava velja 1 uro.</p>${button(url, "Nastavi novo geslo")}<p style="font-size:13px;color:#6b7385">Če niste zahtevali novega gesla, sporočilo prezrite.</p>`),
    text: `Novo geslo za Evklid (velja 1 uro): ${url}`,
  };
}

export function referralRewardEmail(appUrl) {
  return {
    subject: "Evklid: prislužili ste brezplačen mesec 🎁",
    html: layout("Hvala za priporočilo!", `<p>Družina, ki ste jo povabili, se je naročila na Evklid. Oboji ste dobili en mesec brezplačno.</p>${button(appUrl, "Odpri Evklid")}`),
    text: `Družina, ki ste jo povabili, se je naročila na Evklid. Oboji ste dobili en mesec brezplačno. ${appUrl}`,
  };
}

// Neuspelo plačilo naročnine: poln dostop ostane še nekaj dni, starš posodobi kartico v zavihku Račun.
export function paymentFailedEmail(appUrl, graceDays) {
  return {
    subject: "Evklid: plačilo naročnine ni uspelo",
    html: layout(
      "Plačilo ni uspelo",
      `<p>Zadnjega plačila naročnine ni bilo mogoče izvesti. Poln dostop ostane še ${graceDays} dni.</p><p>V zavihku Račun kliknite »Upravljaj naročnino in račune« in posodobite kartico. Če tega ne storite, profili preidejo na brezplačni paket. Noben podatek se ne izbriše.</p>${button(appUrl, "Odpri Evklid")}`,
    ),
    text: `Plačilo naročnine za Evklid ni uspelo. Poln dostop ostane še ${graceDays} dni. Kartico posodobite v zavihku Račun: ${appUrl}`,
  };
}

// 7 dni pred koncem aktivacijske kode.
export function promoEndingEmail(untilText, appUrl) {
  return {
    subject: "Evklid: brezplačni dostop se kmalu konča",
    html: layout(
      "Brezplačni dostop se kmalu konča",
      `<p>Poln dostop z aktivacijsko kodo velja do ${esc(untilText)}. Potem profili preidejo na brezplačni paket, napredek pa ostane.</p><p>Če želite nadaljevati brez omejitev, izberite naročnino v zavihku Račun. Prvo plačilo bo šele po koncu kode.</p>${button(appUrl, "Odpri Evklid")}`,
    ),
    text: `Poln dostop z aktivacijsko kodo za Evklid velja do ${untilText}. Naročnino lahko izberete v zavihku Račun: ${appUrl}`,
  };
}

// Osebno ob šolski licenci: licenca ne velja več, zato se naročnina ob koncu obdobja ne podaljša.
export function schoolSubEndEmail(endText, regularText, appUrl) {
  const body = `Vaš otrok nima več šolske licence, zato se naročnina Osebno ob šolski licenci ne bo podaljšala${endText ? ` in se konča ${endText}` : ""}. Do takrat ostane vse kot zdaj. Če želite Evklid uporabljati naprej, lahko v zavihku Račun izberete redno naročnino (od ${regularText} na mesec).`;
  return {
    subject: "Evklid: šolska licenca je potekla",
    html: layout("Šolska licenca je potekla", `<p>${esc(body)}</p>${button(appUrl, "Odpri Evklid")}`),
    text: `${body} ${appUrl}`,
  };
}

// 30 dni pred samodejno obnovitvijo letne naročnine.
export function renewalEmail(dateText, amountText, appUrl) {
  return {
    subject: "Evklid: letna naročnina se bo obnovila",
    html: layout(
      "Letna naročnina se bo obnovila",
      `<p>Vaša letna naročnina na Evklid se bo samodejno obnovila ${esc(dateText)} za ${esc(amountText)}.</p><p>Če je ne želite podaljšati, jo do takrat prekličite v zavihku Račun (»Upravljaj naročnino in račune«).</p>${button(appUrl, "Odpri Evklid")}`,
    ),
    text: `Vaša letna naročnina na Evklid se bo samodejno obnovila ${dateText} za ${amountText}. Prekličete jo v zavihku Račun: ${appUrl}`,
  };
}
