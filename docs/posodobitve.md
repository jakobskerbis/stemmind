# Samodejne posodobitve

Kompreno se posodablja sam. Vse, kar pride v vejo `main` na GitHubu (nove lekcije, igre,
orodja, prevodi, spremembe strežnika in baze), je v aplikaciji v približno 15 minutah.
Ročno ni treba narediti nič.

## Računalnik (Windows, Mac) in telefon prek računalnika

| Kdaj | Kaj se zgodi |
|---|---|
| Ob vsakem zagonu (`zagon-windows.bat`, `telefon-windows.bat`, bližnjica, samodejni zagon) | Najprej se prenese najnovejša različica, nato se aplikacija zažene. |
| Med tekom, vsakih 15 minut | Preveri GitHub (en majhen klic). Če je kaj novega: prenese, namesti nove knjižnice (če se je spremenil `package.json`), počaka na miren trenutek (nihče ne čaka na odgovor inštruktorja, največ 20 minut) in strežnik znova zažene. Povezava za telefon ostane ista. |
| Ob ponovnem zagonu strežnika | Baza se sama prilagodi novi različici (`server/db.js`), lekcije in naloge se naložijo na novo. |
| Telefon ali brskalnik, ki je bil odprt | Ko teče nova različica, se stran tiho osveži: ko se aplikacija vrne v ospredje (vsaj 1 minuto v ozadju) ali po 10 minutah brez dotika. Nikoli med tekmovanjem ali ko je v polju napisano, a neposlano besedilo. Nove datoteke pridejo same (service worker najprej vpraša strežnik), nove knjižnice dobijo nov predpomnilnik. |

Kaj ostane nedotaknjeno: `.env` (ključi, geslo, ngrok), mapa `data/` (učenci, napredek,
dnevnik) in `node_modules/`. Pobrišejo se samo datoteke, ki jih je prinesla prejšnja
posodobitev in jih v `main` ni več; lastnih datotek v mapi posodobitev ne briše.

Če se nova različica ne zažene v eni minuti, se vrne prejšnja (shranjena v
`data/posodobitev/prejsnja/`) in ta različica se preskoči, dokler na GitHubu ni novejše.
Kaj se je zgodilo, piše v oknu in v `data/dnevnik.txt`.

**Takoj posodobi:** dvakrat klikni `posodobi-windows.bat` (Mac: `posodobi-mac.command`). Če
Kompreno teče, se posodobi v pol minute; sicer se posodobi in zažene.

**Kdaj ne deluje:** ko je računalnik ugasnjen ali Kompreno ni zagnan. Ob naslednjem zagonu se
posodobi sam. Za zagon ob prižigu računalnika enkrat zaženi `samodejni-zagon-windows.bat`;
Windows Task Scheduler ni potreben.

## Render (ko bo aplikacija na spletu)

Render novo različico objavi vsaki 2 uri (tam ponovni zagon s trajnim diskom pomeni kratek izpad), če je v `main` kaj novega
(`.github/workflows/render-posodobitev.yml`; v `render.yaml` je `autoDeploy: false`, da se
strežnik ne zaganja ob vsaki spremembi). Enkratna nastavitev: v Renderju odpri storitev
kompreno > Settings > Deploy Hook in povezavo kopiraj v GitHub > Settings > Secrets and
variables > Actions kot skrivnost `RENDER_DEPLOY_HOOK`.

## Nastavitve v `.env`

| Nastavitev | Pomen |
|---|---|
| `STEMMIND_POSODOBITEV_MINUTE=15` | Kako pogosto preveri (v minutah). |
| `STEMMIND_POSODOBITEV=0` | Izklopi samodejne posodobitve. |

## Kako deluje (za razvijalce)

- `scripts/posodobitev.js`: zadnja različica prek GitHub API, prenos `tar.gz` samo ob spremembi,
  razpakira Node (brez git, unzip ali tar), prepiše le spremenjene datoteke, stanje v
  `data/posodobitev.json`. V klonu z git namesto tega `git merge --ff-only origin/main`
  (samo na veji main brez neshranjenih sprememb).
- `scripts/nadzor.js`: strežnik kot podproces (ob padcu se zažene znova), urnik posodobitev,
  miren trenutek prek `/healthz/stanje`, vrnitev ob napaki.
- `scripts/zaganjalnik.js`: zažene `zagon.js` ali `telefon.js` in ju zažene znova, ko se
  posodobita sama (izhodna koda 75).
- Zagonske datoteke `.bat`/`.command` imajo oznako `STEMMIND-SAMOPOSODOBITEV`: dolgi ukazi so v
  eni vrstici z `exit /b` (Mac: vse v funkciji `main`), zato jih posodobitev lahko prepiše med
  tekom. Datoteke brez oznake (stare različice) med tekom ne prepiše.
- `server/razlicica.js`: različica za `/healthz/stanje` in ime predpomnilnika v `/sw.js`.
