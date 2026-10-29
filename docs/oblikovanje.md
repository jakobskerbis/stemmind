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
- **Tabela v besedilu** (Markdown iz inštruktorja, razlag, nalog in lekcij): sama dobi robove, sivo glavo in razmik; na ozkem zaslonu se pomika vstran (`ui.css`, »tabela v besedilu«). Ne dodajaj ji svojih slogov.
- **Kartica**: `.card`; poudarjena kartica z modrim prelivom: `.hero`.

Pravilo izbranega stanja: izbrano je vedno modro (`--accent` besedilo ali rob, `--accent-soft` ozadje).

## Navigacija

- Računalnik (miška): zavihki v zgornji vrstici.
- Telefon (do 760 px) in tablica na dotik (do 1240 px): spodnja vrstica `#tabbar` s petimi zavihki z napisi (Učna pot, Učbenik, Inštruktor, Tekmovanja, Jaz). Napredek, Lige, Nastavitve in Račun so pod »Jaz« (`#view-me`), na vrhu imajo gumb »← Jaz« (`.me-back`). Nov glavni del aplikacije dodaj v zgornje zavihke in na stran Jaz, ne kot šesti zavihek spodaj.
- Gumb nazaj je povsod enak: `button.ghost.back` z ikono `arrow-left` (»← Učna pot«, »← Učbenik«, »← Jaz«).
- Povratne informacije (`#view-feedback`, `public/feedback.js`): na računalniku zavihek »Mnenje« (viden v testni različici), na telefonu vrstica na strani Jaz; na Učni poti kartica `.fb-card`, dokler tester ne pošlje mnenja ali je ne skrije.
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
- Plošča za vnos ima svoje polje in Preveri; ko je odprta, je vrstica z vnosom v kartici naloge na telefonu in tablici skrita (en sam Preveri). Na telefonu in tablici pokončno je plošča spodaj, naloga se pomakne na vrh nad njo (tudi ob preklopu na Piši). Na tablici pokončno so tipke in platno široki največ 640 px. Na tablici ležeče je plošča desno.
- Tablica ležeče (od 1000 px): isti dva stolpca kot na računalniku (učna pot, lekcija s poskusi desno, kazalo, napredek), z nekoliko ožjim desnim stolpcem.

## Vnos v Inštruktorju

Vrstica za vnos ima od leve proti desni: fotografija naloge, simboli (Σ), besedilo, mikrofon, Pošlji.

- **Simboli** (`public/symbols.js`): plošča nad vrstico, skupine kot `.chip-row`, tipke `.sym-key` (najmanj 44 px). Vrstni red skupin je po ravni (OŠ: osnovno; SŠ: + funkcije; fakulteta: analiza najprej; kemija najprej pri predmetu KEM). Tipke ne vzamejo fokusa polju. `@` v vstavljenem besedilu je mesto kazalca.
- **Mikrofon** (`public/speech.js`): prepoznavanje govora v brskalniku (sl-SI), brez stroškov API. Med poslušanjem je gumb rdeč in utripa. Gumb se skrije, če ga brskalnik ne podpira (npr. Firefox).

## Prehod na višjo raven

Kartica `.level-card` na vrhu Učne poti (`#level-card`, `public/level-up.js`): od 20. 8. do 31. 10. predlaga naslednji razred ali letnik (en klik), ob prehodu OŠ → SŠ ali SŠ → fakulteta pa pokaže, kaj je novega. Brez naročnine doda gumb »Poglej pakete« (zavihek Račun); cen ne prikazuje.


## Grafični kalkulator

Koda je v `public/graph/` (`math.js` razčlenjevalnik, odvodi in integrali; `model.js` razvrsti izraze; `plot.js` riše na platno; `calc.js` seznam in menije; `examples.js` primere), slog v `public/graph.css`, shranjeni grafi na strežniku v `server/graphs.js`. Vse teče v brskalniku, brez API in brez zunanjih knjižnic (KaTeX je že v `/vendor/`).

- **Navigacija**: zgornji zavihek »Kalkulator« za Inštruktorjem; na telefonu vrstica v zavihku Jaz. Iz naloge (gumb pod nalogo, razen na tekmovanju in uvrstitvenem testu) in iz odgovora inštruktorja (»Nariši graf«, ko odgovor vsebuje enačbo z x ali y) se kalkulator odpre kot prekrivni zaslon `.graph-overlay` z gumbom nazaj.
- **Postavitev**: na računalniku seznam izrazov levo (380 px), graf desno. Do 860 px je graf zgoraj, seznam pod njim, tipkovnica čisto spodaj. Gumbi za povečavo so na telefonu v vrsti.
- **Tipkovnica**: na zaslonu na dotik polja ne odprejo sistemske tipkovnice (`inputmode="none"`), ampak lastno (123, f(x), Σ iz `public/symbols.js`, ABC). Ko je odprta, se skrijejo spodnja vrstica zavihkov, pas testnega načina in gumb nazaj (`body.gc-kp`).
- **Barve krivulj** so podatkovne barve (`--g-red`, `--g-blue` … v `graph.css`), z različico za temni način. Niso barve gumbov in se ne mešajo z barvo poudarka iz Nastavitve → Videz.
- **Shranjevanje**: zadnji graf se samodejno shrani v brskalnik za vsakega učenca; »Moji grafi« jih hrani na strežniku (z majhno sličico).

## Računska orodja (znanstveni kalkulator, orodja, PSE, formule)

Isti zaslon kot grafični kalkulator ima zgoraj preklopnik `.calc-modes`: Znanstveni | Grafični | Orodja | PSE | Formule. Koda: `public/graph/scicore.js` (računanje, ulomki, oblike zapisa, konstante, enote), `sci.js` (znanstveni kalkulator in pretvornik enot), `toolscore.js` (statistika, kompleksna števila, polinomi, matrike, številski sistemi, molska masa), `tools.js` (Orodja, PSE, Formule), `pse-data.js` (118 elementov). Zbirke formul so v `content/formulas/*.md`, strežnik jih da prek `/api/formulas?book=KEM-OS`. Vse teče v brskalniku, brez API.

- **Kje se odpre**: zavihek »Kalkulator«; gumb s kalkulatorjem v Učni poti (ob naslovu), na zaslonu teme (ob »Nazaj«), pod nalogo in v glavi Inštruktorja. Od tam se odpre kot prekrivni zaslon in ne zapusti strani; Esc ali puščica nazaj ga zapre.
- **Privzeti način**: zadnji uporabljeni (`stemmind.calcMode`). Pri kemiji (predmet teme ali profila KEM) se odpre PSE. Če naloga vsebuje funkcijo za risanje, se odpre Grafični z vpisanimi izrazi. Formule pokažejo zbirko za predmet in stopnjo (OŠ/SŠ) učenca.
- **Znanstveni**: na računalniku zgodovina levo, tipkovnica desno (360–460 px); do 860 px zgodovina zgoraj, tipkovnica spodaj (funkcijske tipke 38 px, številke 46 px). Rezultat je točen, kadar se da (ulomek, koren, večkratnik π), in decimalen. Dotik izraza v zgodovini ga vrne v vnos, dotik rezultata ga vstavi.
- **Vstavljanje**: vsako orodje ima »V kalkulator«, ki preklopi na Znanstveni in vstavi vrednost (npr. molska masa iz PSE).
- **PSE**: 18 stolpcev, na telefonu se pomika vodoravno. Barve skupin so podatkovne barve z besedilno legendo (nikoli samo barva). Lantanoidi in aktinoidi so v ločenih vrsticah spodaj.
- **Telefon**: preklopnik nima ikon pod 480 px in se stisne do 360 px; vrstice čipov (izbira orodja) se pomikajo vodoravno.
