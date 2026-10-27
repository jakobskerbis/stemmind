# STEMMind

Osebni AI inštruktor za matematiko, fiziko in kemijo za slovenske učence (OŠ 6.–9. razred) in dijake (SŠ). Teče na Claude API.

## Kaj zna

- **Klepet** s pretakanjem odgovorov, izrisom formul (KaTeX) in fotografijami nalog (kamera ali prilepljena slika).
- **Nastavitve** na učenca: predmet, šola, raven, program (redni / tekmovanja), način A (vodenje) ali B (celotna rešitev), osebnost/tema, ročno vnesene šibke točke.
- **Spremembe iz klepeta** (»zdaj kemija«, »daj mi celo rešitev«) model upošteva sam; glava klepeta pokaže trenutni predmet in način.
- **Analitika**: model na konec vsakega odgovora doda vrstico `<<META …>>`. Strežnik jo odstrani še preden jo učenec vidi (tudi med pretakanjem), jo shrani in iz nje izračuna šibke točke.
- **Samodejne šibke točke**: tema z vsaj 3 potezami in vsaj 40 % napak v zadnjih 60 dneh se doda v prompt kot šibka točka.
- **Napredek**: šibke točke, aktivnost po dnevih, teme z deležem napak in opozorila (stiska, nevarna prošnja, poskus obiti pravila).
- **Učna pot**: 20 poti po učnem načrtu (MAT, FIZ, KEM; OŠ in SŠ, 255 tem). Naslednji sklop se odklene, ko je prejšnji osvojen (8 od zadnjih 10 pravilnih in vsaj 2 težji nalogi) ali s preizkusom znanja.
- **Vadnica**: koda sestavi naloge in izračuna rezultate (37 vrst nalog). Preverjanje dopušča zaokroževanje, preveri enote in razloži napačno zaokroževanje. Težavnost se prilagaja, ob napaki je namig, po treh poskusih rešen zgled.
- **Vnos z dotikom**: gumb ✍️ odpre ploščo s tipkami ali površino za pisanje s prstom, miško ali pisalom. Na telefonu je spodaj in besedilo naloge ostane pripeto zgoraj, na računalniku in ležeči tablici je ob strani. Napisano prebere model (»Prebral sem: … Je prav?«), preveri pa koda. Na napravah na dotik se plošča odpre sama.
- **Ponavljanje** v razmikih 1, 3, 7 in 21 dni, mešane naloge iz več tem, XP, dnevni niz in tedenska lestvica.
- **Načini učenja** (spodnja vrstica, vedno dosegljiva): *Nova snov* nadaljuje tam, kjer je učenec ostal; *Ponavljanje* pokaže število nalog na vrsti; *Priprava na test* (izbrani sklopi in datum, bližje kot je test, težje so naloge); *Današnji trening* (~15 min, 70 % nove snovi in 30 % ponavljanja, obrne se, ko se nabere več kot 15 nalog za ponavljanje). Preklop kadar koli: nedokončana seja ali naloga počaka na isto mesto. Vsak odklenjen sklop lahko vadiš posebej (»Vadi sklop«).
- **Poraba**: vsak klic se zabeleži (žetoni in strošek), z dnevnimi in mesečnimi omejitvami. Pregled je v Nastavitvah.
- **Preizkusni način**: brez API ključa vrača pripravljene odgovore, da lahko preizkusiš vse ostalo.

## Zagon

Potrebuješ Node.js 22.5 ali novejši.

```bash
npm install
cp .env.example .env      # vpiši ANTHROPIC_API_KEY
npm start                 # http://localhost:3000
```

Brez ključa se aplikacija zažene v preizkusnem načinu. Teste zaženeš z `npm test`.

## Nastavitve okolja

| Spremenljivka | Privzeto | Pomen |
|---|---|---|
| `ANTHROPIC_API_KEY` | – | Ključ iz console.anthropic.com. Brez njega preizkusni način. |
| `STEMMIND_PASSWORD` | – | Če je nastavljeno, stran zahteva geslo (HTTP Basic, uporabniško ime poljubno). Priporočeno, dokler ni pravih prijav. |
| `STEMMIND_MODEL` | `claude-haiku-5-5` | Privzeti model za klepet (poceni). |
| `STEMMIND_MODEL_DEEP` | `claude-opus-5-5` | Za »Razloži podrobneje« in program Tekmovanja. |
| `STEMMIND_EFFORT` / `STEMMIND_EFFORT_DEEP` | `low` / `medium` | Koliko model razmišlja. |
| `STEMMIND_MAX_TOKENS` | `8000` | Najdaljši odgovor. |
| `STEMMIND_OCR_MODEL` | = `STEMMIND_MODEL` | Model za branje rokopisa. |
| `STEMMIND_HISTORY_TURNS` | `10` | Koliko izmenjav zgodovine gre v API (starejše se odrežejo po kosih, da predpomnilnik deluje). |
| `STEMMIND_ANSWER_CACHE` | `1` | Enaka prva vprašanja dobijo shranjen odgovor brez klica API. |
| `STEMMIND_DAILY_QUESTIONS` | `0` | Vprašanj za inštruktorja na učenca na dan (0 = brez omejitve). Vadnica je vedno neomejena. |
| `STEMMIND_MONTHLY_BUDGET_USD` | `0` | Skupni mesečni proračun v $; pri 80 % opozorilo, pri 100 % se klepet ustavi. |
| `STEMMIND_STUDENT_MONTHLY_USD` | `0` | Mesečna omejitev na učenca v $. |
| `STEMMIND_EXPLANATIONS` | `content/explanations.json` | Datoteka z vnaprej pripravljenimi razlagami tem. |
| `STEMMIND_EXPLAIN_MODEL` | `claude-opus-5-5` | Model za skript z razlagami. |
| `STEMMIND_DB` | `data/stemmind.db` | Pot do baze SQLite. Mora biti na trajnem disku. |
| `STEMMIND_DEBUG` | `0` | `1` omogoči `/api/students/:id/prompt` (ogled sestavljenega prompta). |
| `PORT` | `3000` | Vrata strežnika. |

## Razlage tem

Razlage tem se ustvarijo enkrat z Message Batches API (pol cene) in se nato strežejo brez stroška:

```bash
node scripts/generate-explanations.js            # samo ocena stroška (Opus ≈ 4 $, Haiku ≈ 0,15 $ za vse teme)
node scripts/generate-explanations.js --yes      # ustvari razlage za vse teme
node scripts/generate-explanations.js --yes --path MAT-OS-8 --model claude-haiku-5-5
```

Dokler razlag ni, gumb »Uči se s STEMMind« temo razloži v klepetu.

## Objava

Aplikacija je en proces Node z bazo v eni datoteki, zato potrebuje gostovanje s **trajnim diskom**:

- **Render / Railway / Fly.io**: poveži repozitorij, dodaj trajni disk (volume), nastavi `STEMMIND_DB` na pot na tem disku ter `ANTHROPIC_API_KEY` in `STEMMIND_PASSWORD`.
- **Docker**: `docker build -t stemmind . && docker run -p 3000:3000 -v stemmind-data:/data -e ANTHROPIC_API_KEY=... stemmind`

## Zgradba

```
prompts/system_prompt.md   sistemski prompt (predloga z {nastavitvami})
server/app.js              API in klepet (SSE)
server/claude.js           klic Claude API + preizkusni način
server/meta.js             branje/odstranjevanje META, filter za pretakanje
server/prompt.js           sestavljanje prompta iz nastavitev
server/weaknesses.js       zaznavanje šibkih točk
server/db.js               SQLite (učenci, pogovori, sporočila, dogodki, naloge, XP, poraba)
server/curriculum*.js      učne poti po učnem načrtu (osnutek, naj ga pregleda učitelj)
server/practice/           generatorji nalog in preverjanje odgovorov
server/progress.js         napredovanje, ponavljanje, preizkus znanja, XP
server/usage.js            beleženje porabe in omejitve
public/pad.js              vnos z dotikom (tipke, pisanje, branje rokopisa)
scripts/                   ustvarjanje razlag (Batch API)
public/                    vmesnik (brez ogrodja)
docs/                      opombe k promptu in seznam za preizkušanje
```

## Pomembno pred uporabo z učenci

- **Zasebnost**: uporabniki so mladoletni. Za otroke, mlajše od 15 let, je v Sloveniji za take storitve potrebno soglasje staršev. Pripravi kratko obvestilo o zasebnosti. Pogovori in fotografije se hranijo v bazi.
- **Prijava**: zdaj je le skupno geslo in izbira učenca. Za več družin ali razredov dodaj prave račune.
- **Kakovost**: preden aplikacijo daš učencem, naj učitelj preizkusi naloge iz `docs/preizkus.md`.
- **Stroški**: v konzoli Anthropic nastavi mesečno omejitev porabe. Fotografije se pošljejo ob vsakem naslednjem odgovoru v istem pogovoru, zato je pri dolgih pogovorih s slikami bolje začeti nov pogovor.
