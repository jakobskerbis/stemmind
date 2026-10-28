# Oblikovanje STEMMind

Skupna pravila videza, da je aplikacija povsod enaka. Nove dele sestavi iz gradnikov spodaj, ne iz novih različic istega.

## Barve in mere

Vse barve so spremenljivke v `public/style.css` (`:root`, temni način pod njim). V CSS ne piši barv neposredno, razen izjem, ki že obstajajo (lige, simulacije).

| Spremenljivka | Namen |
|---|---|
| `--accent`, `--accent-soft` | glavna modra; svetlo modro ozadje izbranega |
| `--surface`, `--surface-2`, `--bg` | kartica; sivo-modra podlaga (tirnica, hover); ozadje strani |
| `--text`, `--muted`, `--border` | besedilo; drugotno besedilo; robovi |
| `--ok`, `--danger`, `--gold` | pravilno; napaka; XP in ponavljanje |
| `--radius` (16px), `--radius-sm` (12px) | kartice in seznami; gumbi, polja, možnosti |

Temni način je razred `.dark` na `<html>`, ne `@media (prefers-color-scheme)`: pravila za temni način piši kot `.dark .moj-razred { … }`. Razred nastavi `public/theme.js` (Nastavitve → Videz: Svetlo / Temno / Samodejno).

Lastne barve: uporabnik v Nastavitve → Videz izbere poudarek in barve ozadja, oken, menijev in pisave (ali »Naključne barve«). `theme.js` iz njih izračuna vse spremenljivke zgoraj in poskrbi za kontrast (besedilo vsaj 7:1, sivo besedilo in poudarki 4.5:1). Zato:

- nikoli ne piši barve besedila ali ozadja neposredno, vedno spremenljivko;
- belo besedilo samo na prelivu `--hero-a` → `--hero-b`, besedilo na `--accent` je `--accent-text`;
- meniji (`.topbar`, `.modebar`, `.sidebar`, `.dd-list`) imajo lahko svojo barvo; znotraj njih `--surface`, `--text` … že pomenijo barve menija.

Pisava je Nunito. Naslovi so debeli (800), gumbi 700–800.

## Gradniki (`public/ui.css`)

- **Gumbi**: `button.primary` (modri, s spodnjo senco), `button.secondary` (bel z robom), `button.ghost`, `button.danger`, `.text-btn`. Povezava, ki je videti kot gumb: `a.btn-primary` / `a.btn-secondary`.
- **Spustni meni**: navaden `<select>`. `public/dropdown.js` ga sam zamenja z zaobljenim seznamom v slogu aplikacije (tudi menije, ki se pojavijo pozneje, npr. v simulacijah). Vrednost, `change` in obrazci delujejo kot prej. `<select data-native>` ostane sistemski.
- **Preklopnik** (2–4 možnosti, ena izbrana, npr. predmet ali raven): `<div class="seg"><button class="active">…</button>…</div>`.
- **Filtrirni žetoni** (vrstica, ki se na telefonu pomika vstran): `<div class="chip-row"><button class="active">…</button>…</div>`.
- **Izbrana možnost** (kartica ali kljukica): moder rob in `--accent-soft` ozadje (`.lp-opt.on`, `label.check`).
- **Seznam povezav** (npr. stran Jaz): `<div class="card list-card"><button class="list-row"><span class="ic">ikona</span><span class="lr-text"><b>Naslov</b><small>opis</small></span>…</button></div>`.
- **Izmerjene vrednosti v simulacijah**: `values([["čas t", "3,16 s"], …])` iz `public/sim/kit.js` (kartice, na telefonu dve v vrsti). Tabela `.demo-table` samo za prave tabele z več vrsticami.
- **Kartica**: `.card`; poudarjena kartica z modrim prelivom: `.hero`.

Pravilo izbranega stanja: izbrano je vedno modro (`--accent` besedilo ali rob, `--accent-soft` ozadje).

## Navigacija

- Računalnik (miška): zavihki v zgornji vrstici.
- Telefon (do 760 px) in tablica na dotik (do 1240 px): spodnja vrstica `#tabbar` s petimi zavihki z napisi (Učna pot, Učbenik, Inštruktor, Tekmovanja, Jaz). Napredek, Lige, Nastavitve in Račun so pod »Jaz« (`#view-me`), na vrhu imajo gumb »← Jaz« (`.me-back`). Nov glavni del aplikacije dodaj v zgornje zavihke in na stran Jaz, ne kot šesti zavihek spodaj.
- Gumb nazaj je povsod enak: `button.ghost.back` z ikono `arrow-left` (»← Učna pot«, »← Učbenik«, »← Jaz«).
- Načini učenja (Nova snov, Ponavljanje, Priprava na test) so kartice `#modebar.modes` na Učni poti; Današnji trening je modra kartica nad njimi.

## Široki zasloni (od 1200 px, tablica ležeče od 1000 px)

Prostor ob strani izkoristimo za informacije, ki jih učenec potrebuje hkrati:

- Učna pot: levo izbira poti, Današnji trening in načini (pritrjeni), desno sklopi.
- Tema: levo naloga, desno razlaga (pritrjena, z lastnim drsnikom). Pri seriji nalog (trening, ponavljanje, priprava na test, vaja sklopa, tekmovalni trening) je desno razlaga teme trenutne naloge; pri Preizkusu znanja in tekmovanju je ni.
- Lekcija: besedilo levo, poskusi in simulacije desno (`placeDemos` v `textbook.js`; na ožjem zaslonu so med besedilom).
- Kazalo učbenika in Napredek: kartice v dveh stolpcih.
- Ko je odprta plošča za vnos (400 px desno), sta stolpca šele od 1700 px.

## Telefon in tablica

Pravila so v `public/touch.css`. »Tablica« je zaslon na dotik (`(hover: none) and (pointer: coarse)`) do 1240 px; računalnik z miško iste širine ostane pri zgornjih zavihkih.

- Najmanjša višina tipke za dotik je 44px.
- Gumbi v `.actions` na telefonu zapolnijo vrstico; tudi posamezen glavni gumb pod obrazcem ali v kartici (Shrani, Začni tekmovanje).
- Preklopniki so na telefonu čez celo širino.
- Plošča za vnos: na telefonu in tablici pokončno je spodaj, naloga se pomakne na vrh nad njo (tudi ob preklopu na Piši). Na tablici pokončno so tipke in platno široki največ 640 px. Na tablici ležeče je plošča desno.
- Tablica ležeče (od 1000 px): isti dva stolpca kot na računalniku (učna pot, lekcija s poskusi desno, kazalo, napredek), z nekoliko ožjim desnim stolpcem.
