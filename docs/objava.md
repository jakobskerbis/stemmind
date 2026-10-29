# Objava STEMMind na spletu (Render)

Aplikacija je pripravljena za Render. Datoteka `render.yaml` vse nastavi sama: strežnik v Frankfurtu, Node 22 in trajni disk za bazo učencev (podatki ostanejo ob vsaki posodobitvi).

Strošek: paket Starter ≈ 7 $/mesec + disk 1 GB ≈ 0,25 $/mesec. Brezplačni paket ne pride v poštev, ker nima trajnega diska (baza bi se izbrisala ob vsakem zagonu).

## Koraki (približno 10 minut)

1. Prijavi se na <https://render.com> z GitHub računom.
2. Klikni **New → Blueprint** in izberi repozitorij `jakobskerbis/stemmind`.
3. Render prebere `render.yaml` in prosi za vrednosti, ki jih ne sme poznati nihče drug. Vpiši jih tam (nikoli v klepet):
   - `ANTHROPIC_API_KEY` – iz <https://console.anthropic.com> → API Keys.
   - `STEMMIND_PASSWORD` – začasno geslo, dokler aplikacija ni javna (lahko pustiš prazno).
   - `STEMMIND_BASE_URL` – pusti prazno; po prvem zagonu vpiši naslov, ki ga dobiš (npr. `https://stemmind.onrender.com`).
   - `STEMMIND_ADMIN_EMAILS` – tvoj e-naslov.
   - `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `RESEND_API_KEY`, `RESEND_FROM` – lahko pustiš prazno; brez njih plačila niso vklopljena, e-pošta pa se le izpiše v dnevnik.
4. Klikni **Apply**. Po nekaj minutah je aplikacija na naslovu `https://stemmind….onrender.com`.
5. Vsaka sprememba, ki pride v `main`, se objavi sama.

## Po prvem zagonu

- **Stripe webhook:** v Stripe → Developers → Webhooks dodaj `https://<tvoj-naslov>/api/stripe/webhook`, nato skopiraj `whsec_…` v Render → Environment → `STRIPE_WEBHOOK_SECRET`.
- **Lastna domena (npr. stemmind.si):** Render → Settings → Custom Domains; pri registrarju dodaj CNAME, ki ga pokaže Render. Nato posodobi `STEMMIND_BASE_URL`.
- **Razlage in učbenik:** enkrat poženi generiranje (v Render → Shell):
  `node scripts/generate-explanations.js --yes` in `node scripts/generate-lessons.js --yes --model claude-sonnet-5-5`.

## Omejitve stroškov AI (že nastavljene)

- `STEMMIND_STUDENT_MONTHLY_USD=1.5` – največ 1,5 $ na učenca na mesec.
- `STEMMIND_FREE_DAILY_QUESTIONS=10` – brezplačni paket: 10 vprašanj na dan.
- `STEMMIND_FREE_POOL_USD=10` – brezplačni paket: vsi brezplačni učenci skupaj porabijo največ 10 $ (≈ 8,7 €) na mesec, nato do 1. v mesecu samo Vadnica in lekcije.
- `STEMMIND_FREE_STUDENT_USD=0.2` – brezplačni paket: največ 0,2 $ na brezplačnega učenca na mesec.
- `STEMMIND_MONTHLY_BUDGET_USD=50` – opozorilo v dnevniku pri 80 % porabe.

Vse lahko spremeniš v Render → Environment.

## Varnostna kopija

Render → Disks naredi dnevni posnetek diska samodejno (hrani se 7 dni).
