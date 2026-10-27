# STEMMind

Osebni AI inštruktor za matematiko, fiziko in kemijo za slovenske učence (OŠ 6.–9. razred) in dijake (SŠ). Teče na Claude API.

## Kaj zna

- **Klepet** s pretakanjem odgovorov, izrisom formul (KaTeX) in fotografijami nalog (kamera ali prilepljena slika).
- **Nastavitve** na učenca: predmet, šola, raven, program (redni / tekmovanja), način A (vodenje) ali B (celotna rešitev), osebnost/tema, ročno vnesene šibke točke.
- **Spremembe iz klepeta** (»zdaj kemija«, »daj mi celo rešitev«) model upošteva sam; glava klepeta pokaže trenutni predmet in način.
- **Analitika**: model na konec vsakega odgovora doda vrstico `<<META …>>`. Strežnik jo odstrani še preden jo učenec vidi (tudi med pretakanjem), jo shrani in iz nje izračuna šibke točke.
- **Samodejne šibke točke**: tema z vsaj 3 potezami in vsaj 40 % napak v zadnjih 60 dneh se doda v prompt kot šibka točka.
- **Napredek**: šibke točke, aktivnost po dnevih, teme z deležem napak in opozorila (stiska, nevarna prošnja, poskus obiti pravila).
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
| `STEMMIND_MODEL` | `claude-opus-5-5` | Model. `claude-haiku-5-5` je precej cenejši, a šibkejši. |
| `STEMMIND_EFFORT` | `medium` | Koliko model razmišlja (`low`/`medium`/`high`). |
| `STEMMIND_EFFORT_COMPETITION` | `high` | Enako, za program Tekmovanja. |
| `STEMMIND_DB` | `data/stemmind.db` | Pot do baze SQLite. Mora biti na trajnem disku. |
| `STEMMIND_DEBUG` | `0` | `1` omogoči `/api/students/:id/prompt` (ogled sestavljenega prompta). |
| `PORT` | `3000` | Vrata strežnika. |

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
server/db.js               SQLite (učenci, pogovori, sporočila, dogodki)
public/                    vmesnik (brez ogrodja)
docs/                      opombe k promptu in seznam za preizkušanje
```

## Pomembno pred uporabo z učenci

- **Zasebnost**: uporabniki so mladoletni. Za otroke, mlajše od 15 let, je v Sloveniji za take storitve potrebno soglasje staršev. Pripravi kratko obvestilo o zasebnosti. Pogovori in fotografije se hranijo v bazi.
- **Prijava**: zdaj je le skupno geslo in izbira učenca. Za več družin ali razredov dodaj prave račune.
- **Kakovost**: preden aplikacijo daš učencem, naj učitelj preizkusi naloge iz `docs/preizkus.md`.
- **Stroški**: v konzoli Anthropic nastavi mesečno omejitev porabe. Fotografije se pošljejo ob vsakem naslednjem odgovoru v istem pogovoru, zato je pri dolgih pogovorih s slikami bolje začeti nov pogovor.
