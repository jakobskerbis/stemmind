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
- **Vmesni koraki** (`.work`, `style.css`): zvezek pod besedilom naloge, s črtami in tipkovnico Σ; shrani se za vsako nalogo posebej in gre tutorju zraven. Na računalniku je odprt sam, na telefonu ob kliku.
- **Formula** (`.formula-body`): razkrita formula je vedno v svojem okvirju z modrim robom levo, nikoli prosto v besedilu.
- **Vrstica s tutorjem** (`.tutor-row`): »Razloži mi« in »Preglej s tutorjem« pod vsako rešitvijo (Vadnica, pregled tekmovanja). Na telefonu gumba čez celo širino.
- **Animacije**: samo `transform` in `opacity`, kratke (do ~0,6 s), zamik po kartici z `--i`; ob »manj gibanja« jih ni (`style.css` jih izklopi globalno, `countUp` takoj pokaže število).

Pravilo izbranega stanja: izbrano je vedno modro (`--accent` besedilo ali rob, `--accent-soft` ozadje).

## Navigacija

- Računalnik (miška): zavihki v zgornji vrstici.
- Telefon (do 760 px) in tablica na dotik (do 1240 px): spodnja vrstica `#tabbar` s petimi zavihki z napisi (Učna pot, Učbenik, Inštruktor, Tekmovanja, Jaz). Napredek, Lige, Nastavitve in Račun so pod »Jaz« (`#view-me`), na vrhu imajo gumb »← Jaz« (`.me-back`). Nov glavni del aplikacije dodaj v zgornje zavihke in na stran Jaz, ne kot šesti zavihek spodaj.
- Ime zgoraj desno (`#profile-btn`, `public/profile-menu.js`) odpre meni profila: kdo se uči (raven in predmet), zamenjava profila (če jih je več), Dodaj profil, Nastavitve, z računi še Račun in Odjava. Skriti `<select id="student-select">` še vedno hrani izbranega učenca. Na telefonu do 400 px je na gumbu samo začetnica.
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
- **Drsniki**: vsak ima svoj ▶/⏸; premik z roko ustavi predvajanje. Ko sta vsaj dva drsnika, se v orodni vrstici pokaže »Predvajaj vse« / »Ustavi vse« (takrat je »Moji grafi« samo ikona). Med animacijo se vrstica drsnika posodablja na mestu, ne gradi znova, sicer gumbi ne dobijo klika.
- **Shranjevanje**: zadnji graf se samodejno shrani v brskalnik za vsakega učenca; »Moji grafi« jih hrani na strežniku (z majhno sličico).

## Računska orodja (znanstveni kalkulator, orodja, PSE, formule)

Isti zaslon kot grafični kalkulator ima zgoraj preklopnik `.calc-modes`: Znanstveni | Grafični | Orodja | PSE | Formule. Koda: `public/graph/scicore.js` (računanje, ulomki, oblike zapisa, konstante, enote), `sci.js` (znanstveni kalkulator in pretvornik enot), `toolscore.js` (statistika, kompleksna števila, polinomi, matrike, številski sistemi, molska masa), `chemcore.js` (urejanje enačb, stehiometrija, pH, koncentracije, topnost), `probcore.js` (porazdelitve), `anacore.js` (odvod, ničle, limita, Taylor, vektorji, diferencialne enačbe, merske napake), `plot3d.js` (3D graf), `tools.js` + `tools-chem.js`, `tools-prob.js`, `tools-ana.js` (zaslon orodij, PSE, formule), `pse-data.js` in `pse-extra.js` (118 elementov). Zbirke formul so v `content/formulas/*.md`, strežnik jih da prek `/api/formulas?book=KEM-OS`. Vse teče v brskalniku, brez API.

- **Kje se odpre**: zavihek »Kalkulator«; gumb s kalkulatorjem v Učni poti (ob naslovu), na zaslonu teme (ob »Nazaj«), pod nalogo in v glavi Inštruktorja. Od tam se odpre kot prekrivni zaslon in ne zapusti strani; Esc ali puščica nazaj ga zapre.
- **Privzeti način**: zadnji uporabljeni (`stemmind.calcMode`). Pri kemiji (predmet teme ali profila KEM) se odpre PSE. Če naloga vsebuje funkcijo za risanje, se odpre Grafični z vpisanimi izrazi. Formule pokažejo zbirko za predmet in stopnjo (OŠ/SŠ) učenca.
- **Znanstveni**: na računalniku zgodovina levo, tipkovnica desno (360–460 px); do 860 px zgodovina zgoraj, tipkovnica spodaj (funkcijske tipke 38 px, številke 46 px). Rezultat je točen, kadar se da (ulomek, koren, večkratnik π), in decimalen. Dotik izraza v zgodovini ga vrne v vnos, dotik rezultata ga vstavi.
- **Vstavljanje**: vsako orodje ima »V kalkulator«, ki preklopi na Znanstveni in vstavi vrednost (npr. molska masa iz PSE).
- **PSE**: 18 stolpcev, na telefonu se pomika vodoravno. Barve skupin so podatkovne barve z besedilno legendo (nikoli samo barva). Lantanoidi in aktinoidi so v ločenih vrsticah spodaj.
- **Telefon**: preklopnik nima ikon pod 480 px in se stisne do 360 px; vrstice čipov (izbira orodja) se pomikajo vodoravno.
- **Vrstni red orodij** sledi predmetu (`ORDER` v `tools.js`): KEM najprej enačbe reakcij, raztopine, topnost; FIZ enote, merske napake, enačbe, vektorji; MAT enačbe, analiza, statistika, verjetnost. Ob menjavi predmeta se čipi preuredijo.
- **Številke**: v TeX-u je decimalna vejica vedno `{,}` (sicer KaTeX doda presledek). Stehiometrija kaže 4 veljavna mesta, merske napake napako na 1 mesto (2, če se začne z 1).
- **Enačba reakcije** se izpiše kot vrstični KaTeX, da se na telefonu prelomi pri + in →.
- **Topnost**: T/M/N (topna, slabo topna, netopna) in »–« (ne obstaja ali razpade); barve zelena/oranžna/rdeča iz `--g-*`, vedno s črko, ker barva ni dovolj. Vrstice ionov ostanejo prilepljene levo, ko se tabela pomika.
- **PSE**: v celicah se izbere atomska masa, elektronegativnost ali oksidacijska števila. Podrobnosti dodajo konfiguracijo, lupine, χ, oksidacijska števila, stanje, tališče, vrelišče, gostoto; spodaj je kartica za vez (meji 0,4 in 1,7). Vir dodatnih podatkov: periodni sistem PubChem (javna domena), `scripts/build-pse-extra.js` iz `scripts/pubchem-elementi.csv`.
- **3D graf**: barva pove višino (modra → zelena → rumena, lestvica ob grafu); merilo je izbrano tako, da kocka ostane na platnu pri vsakem nagibu. Osi x in y sta označeni na sprednjih robovih, os z v skrajno levem kotu. Vrtenje s prstom, miško ali puščicami, povečava s kolescem, dvema prstoma ali + in −.
- **Formule**: zgoraj dva preklopnika (predmet, stopnja), pod njima kazalo poglavij, ki ostane prilepljeno na vrh in označi trenutno poglavje. Vsako poglavje je svoja kartica; dvostolpčne tabele postanejo vrstice »ime + formula« (na telefonu ime nad formulo). Formula se ne prelomi sredi izraza; preširoka se pomanjša do 78 %, šele nato pomika vodoravno.
- **Formule za fakulteto**: `MAT-UNI`, `FIZ-UNI`, `KEM-UNI`; študent (`educational_track` UNIVERZA) jih dobi privzeto.

## Igre

Kako snov vgradimo v igro (učenje je igranje, ne kviz), animacije in kontrole: `docs/igre-smernice.md`.

Razdelek IGRE (`public/games/`, slog `public/games.css`, strežnik `server/games.js`): mreža pisanih kvadratnih ploščic kot na portalih z igrami. Na računalniku zgornji zavihek »Igre«, na telefonu vrstica na strani Jaz (med igro se spodnja vrstica skrije).

- **Igra = vrsta igre × pojem.** 19 vrst iger: `engines.js` (Meteorji, Baloni, Tekač, Sortirnica), `arcade.js` in `arcade2.js` (igre v slogu 80. in 90. let: labirint, grad, kača, žaba, krti, helikopter, opeke, vesoljci, pristajalnik, mehurčki), `build.js` (top, ki ruši stolpe, in žerjav, ki gradi stolp), `sensors.js` (kroglica, skakač, čarobna krogla z nagibom in tresenjem telefona). Matematični pojmi z generatorji so v `topics.js`, pojmi drugih predmetov (FIZ, KEM, BIO, NAR, GEO, RAC, EKO) v `subjects/` (pravila v `subjects/README.md`). Nad področji je vrstica predmetov; iskanje išče po vseh. Nova vrsta igre = nov predmet v seznamu vrst + ključi `games.e.<id>` in `games.e.<id>.how` v vseh jezikih; nov pojem = `def(...)` v `topics.js` ali vnos v paketu predmeta in znak v `GLYPH` (`index.js`).
- **Senzorji**: igra z `sensors: true` bere nagib (`G.tilt`, umerjen ob začetku in po premoru) in tresenje (`shake()`); dovoljenje na iPhonu se zahteva ob kliku »Igraj«. Brez senzorjev (računalnik, zavrnjeno dovoljenje) se igra z dotikom, miško ali tipkami.
- **Naloge** so kratke in v simbolih (`−`, `²`, `√`, `∫`, `{…}` za množico rešitev), ker se izrišejo na predmetu v igri. Napačni odgovori so tipične napake, nikoli enaki pravilnemu. `test/games.test.js` preveri vse pojme na vseh treh stopnjah.
- **Odklepanje** (`unlock.js`, pravila v `docs/igre-smernice.md` §11): igra je zaklenjena, dokler učenec snovi ne zna (obvladana tema učne poti, snov iz nižjega razreda ali preizkus 4 od 5 brez časa); hitrejše igre se odklenejo po opravljeni mirnejši igri iste snovi (8 pravilnih, 80 %). Zaklenjena ploščica je siva s ključavnico, klik pokaže, kaj manjka, in ponudi snov, preizkus ali mirnejšo igro.
- **Težavnost**: vsaka igra se začne na stopnji 1 (ali na zadnji doseženi pri pojmu); 5 pravilnih zapored → težje, 2 napačna → lažje. Hitrost izbere učenec (Počasi/Srednje/Hitro, privzeto Počasi, `stemmind.gamePace`) in z odgovori naraste največ za polovico; prvo vprašanje pride po kratkem premoru.
- **Zgodbe**: vsaka vrsta igre ima junaka in 4 poglavja (`story: { sl, en }` v `engines.js`); novo poglavje se odklene vsakih 8 pravilnih: igra se ne ustavi, pokaže se le kratek napis in nove barve prizora. Zgodba je ena kratka vrstica na začetni kartici (j: »naj bodo igre preproste«). Nova vrsta igre potrebuje zgodbo (test to preveri).
- **Videz stare flash igre**: debele temne obrobe (`--gm-ink`), risankasti prelivi, sončni žarki na naslovni kartici, izbočeni gumbi, obrobljen tekst in 8-bitni zvoki.
- **Učenje**: ob napaki se v glavi pokaže pravilni odgovor (pri igrah, kjer lahko poskusiš znova, le »Poskusi znova«), naslednje vprašanje pride šele čez ~2 s, na koncu seznam »Ponovi« (naloga → pravilni odgovor).
- **XP**: 1 XP za 2 pravilna odgovora, največ 20 na igro in 60 na dan iz iger.
- **Kovanci in avatar** (`public/avatar.js`, `server/avatar.js`): 1 kovanec za vsak pravilen odgovor v igrah, največ 150 na dan; z njimi učenec v trgovini (gumb »Moj avatar« na vrhu iger) kupuje dele avatarja (7 predalov, 56 izvirnih SVG delov, redkost po ceni: navaden, redek, epski, legendaren). Brez pravega denarja. Avatar je edino, kar učenec izbere in vidijo drugi (lige, razred); vzdevki ostanejo samodejni. Inštruktor sme avatar obleči v brezplačne ali kupljene dele (`avatar` v `settings-registry.js`), kupuje se samo v trgovini. Nov del = vnos v `ITEMS` in risba v istem predalu.
- Prizori iger in ploščice imajo svoje barve (kot simulacije); okvir, kartice in gumbi uporabljajo spremenljivke. Vse igre delujejo z dotikom, miško in tipkami (1–4, ← →, preslednica, P ali Esc za premor).
