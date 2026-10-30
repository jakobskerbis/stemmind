# Oblikovanje Evklida

Skupna pravila videza, da je aplikacija povsod enaka. Nove dele sestavi iz gradnikov spodaj, ne iz novih različic istega.

## Barve in mere

Vse barve so spremenljivke v `public/style.css` (`:root`, temni način pod njim). V CSS ne piši barv neposredno, razen izjem, ki že obstajajo (lige, simulacije).

| Spremenljivka | Namen |
|---|---|
| `--accent`, `--accent-soft` | glavna modra; svetlo modro ozadje izbranega |
| `--surface`, `--surface-2`, `--bg` | kartica; sivo-modra podlaga (tirnica, hover); ozadje strani |
| `--text`, `--muted`, `--border` | besedilo; drugotno besedilo; robovi |
| `--ok`, `--danger`, `--gold` | pravilno; napaka; XP in ponavljanje |
| `--radius` (Čist 14px), `--radius-sm` (10px) | kartice in seznami; gumbi, polja, možnosti |
| `--press` (Čist 0, Igriv 3px) | globina »pritisnjenih« gumbov (spodnja senca); senc ne piši na roke, uporabi `0 var(--press) 0 …` |
| `--warm` | odštevanje do cilja, niz dni |
| `--font` | pisava sloga (ne piši imena pisave neposredno) |

## Slogi (Nastavitve → Videz → Slog)

Trije slogi iz osnutka »Evklid UI« (2026-10-29). `theme.js` nastavi `data-style` na `<html>` in osnovne barve sloga; lastne barve uporabnika veljajo nad njimi.

| Slog | Pisava | Oblike | Barve |
|---|---|---|---|
| **Čist** (privzeti) | Instrument Sans | robovi 14/10 px, brez senc pod gumbi, ravne kartice | ozadje #F6F7F9, okna bela, poudarek #2353D1; temni način #0D1117 / #6E9BFF |
| **Igriv** | Nunito | robovi 22/14 px, pritisnjeni gumbi (`--press: 3px`) | toplo ozadje #FFF6EA, vijolični poudarek #6A3BD6 |
| **Temen** | IBM Plex Sans | robovi 10/7 px | vedno temen: #0D1117, metin poudarek #4CD3A4 (izbira Svetlo/Temno se skrije) |

Pravila za Čist veljajo v `style.css` (`:root`), Igriv in Temen v `ui.css` (»Slogi«). Pisave so v `node_modules/@fontsource-variable/*` in se prenesejo le, ko jih slog uporablja; v lahkem načinu ostane sistemska pisava. Inštruktor slog spremeni z nastavitvijo naprave `style`.

Temni način je razred `.dark` na `<html>`, ne `@media (prefers-color-scheme)`: pravila za temni način piši kot `.dark .moj-razred { … }`. Razred nastavi `public/theme.js` (Nastavitve → Videz: Svetlo / Temno / Samodejno).

Lastne barve: uporabnik v Nastavitve → Videz izbere poudarek in barve ozadja, oken, menijev in pisave (ali »Naključne barve«). `theme.js` iz njih izračuna vse spremenljivke zgoraj in poskrbi za kontrast (besedilo vsaj 7:1, sivo besedilo in poudarki 4.5:1). Zato:

- nikoli ne piši barve besedila ali ozadja neposredno, vedno spremenljivko;
- belo besedilo samo na prelivu `--hero-a` → `--hero-b`, besedilo na `--accent` je `--accent-text`;
- meniji (`.topbar`, `.modebar`, `.sidebar`, `.dd-list`) imajo lahko svojo barvo; znotraj njih `--surface`, `--text` … že pomenijo barve menija.

Pisava je spremenljivka `--font` (po slogu). Naslovi so debeli (700, v slogu Igriv 800), gumbi 700–800.

## Gradniki (`public/ui.css`)

- **Gumbi**: `button.primary` (modri, s spodnjo senco), `button.secondary` (bel z robom), `button.ghost`, `button.danger`, `.text-btn`. Povezava, ki je videti kot gumb: `a.btn-primary` / `a.btn-secondary`.
- **Spustni meni**: navaden `<select>`. `public/dropdown.js` ga sam zamenja z zaobljenim seznamom v slogu aplikacije (tudi menije, ki se pojavijo pozneje, npr. v simulacijah). Vrednost, `change` in obrazci delujejo kot prej. `<select data-native>` ostane sistemski.
- **Preklopnik** (2–4 možnosti, ena izbrana, npr. predmet ali raven): `<div class="seg"><button class="active">…</button>…</div>`.
- **Filtrirni žetoni** (vrstica, ki se na telefonu pomika vstran): `<div class="chip-row"><button class="active">…</button>…</div>`.
- **Izbrana možnost** (kartica ali kljukica): moder rob in `--accent-soft` ozadje (`.lp-opt.on`, `label.check`).
- **Seznam povezav** (npr. stran Jaz): `<div class="card list-card"><button class="list-row"><span class="ic">ikona</span><span class="lr-text"><b>Naslov</b><small>opis</small></span>…</button></div>`.
- **Izmerjene vrednosti v simulacijah**: `values([["čas t", "3,16 s"], …])` iz `public/sim/kit.js` (kartice, na telefonu dve v vrsti). Tabela `.demo-table` samo za prave tabele z več vrsticami.
- **Tabele** (vse v aplikaciji: klepet, razlage, naloge, lekcije, kartice, formule, orodja, Napredek, mnenja, strani za starše): en skupen videz v `style.css` (»tabele: en videz«): okvir z zaobljenimi robovi, siva poudarjena glava, črte med vrsticami in stolpci, rahle proge, števke enake širine; temni način prek barvnih spremenljivk. Markdown se izriše v `public/rich.js` (`renderRich`): tabela dobi `.md-table` v `.md-table-wrap` (na ozkem zaslonu se pomika vstran), stolpci s samimi števili ali formulami so na sredini, stolpci z daljšim besedilom se smejo prelomiti, formule nikoli. Med sprotnim izpisom odgovora se tabela pokaže po celih vrsticah (glava skupaj z ločilom), nikoli kot surove črte `|`. Novi tabeli v kodi daj razred `.table` ali `.demo-table` in ji ne dodajaj svojih robov ali barv.
- **Kartica**: `.card`; poudarjena kartica z modrim prelivom: `.hero`.
- **Vmesni koraki** (`.work`, `style.css`): zvezek pod besedilom naloge, s črtami in tipkovnico Σ; shrani se za vsako nalogo posebej in gre tutorju zraven. Na računalniku je odprt sam, na telefonu ob kliku.
- **Formula** (`.formula-body`): razkrita formula je vedno v svojem okvirju z modrim robom levo, nikoli prosto v besedilu.
- **Vrstica s tutorjem** (`.tutor-row`): »Razloži mi« in »Preglej s tutorjem« pod vsako rešitvijo (Vadnica, pregled tekmovanja). Na telefonu gumba čez celo širino.
- **Klikljive formule** (`public/formula-data.js` + `formula-info.js`): `renderMath` v `app.js` pred izrisom ovije znane simbole in enote v `\htmlData{fx=…}`. Simbol je rahlo podčrtan; klik ali Enter odpre kartico (ime, izračun, enota in njena sestava, npr. M → molska masa, M = m/n, g/mol = g ÷ mol). Pomen je po predmetu teme ali lekcije (a: MAT koeficient, FIZ pospešek), dvoumne črke imajo pogoj `ctx` (formula mora ustrezati). Enota šele za številom (9,81 m/s²), zato kemijske formule (H₂O) niso enote. Ne v gumbih (možnosti odgovora) in ne v Preizkusu znanja / tekmovanju (`.no-fx`), ker bi zveza izdala rešitev. Nov simbol ali enota: vnos v `formula-data.js` (sl + en); test `test/goal-formula.test.js` preveri, da se vse izriše.
- **Cilj** (`public/goal.js`, `goal-data.js`): cilj (sprotno, test, NPZ v OŠ, matura v SŠ, tekmovanje, izpit) in neobvezni datum se vprašata samo ob novem profilu; potem je le vrstica »Srednja šola 1. letnik · Matura · 1. 6. 2027 · še 215 dni · Spremeni« na Učni poti in v Napredku ter značka v zgornji vrstici (od 1440 px). Spremeni ali izbriši v Nastavitve → Cilj. Opomnik ob 12.00 (stikalo, privzeto vključeno, le z datumom): kartica na Učni poti po 12.00 do dneva cilja (»Kasneje« jo skrije do jutri) in z računi e-pošta staršu (`server/accounts/goal-reminder.js`, Resend).
- **XP in raven** (`public/xp-levels.js`, `xp-fx.js`, `xp.css`): raven L se začne pri 50·(L−1)² XP. Na Učni poti pod Današnjim treningom vrstica ravni (»Raven 3 · še 115 XP do ravni 4«) in krog dnevnega cilja (Nastavitve → Dnevni cilj XP: 30/50/100/200, privzeto 50; inštruktor ga spremeni z `xp_goal`); vrstica ravni tudi na strani Jaz; v zgornji vrstici tanka zlata črta pod zneskom XP. Ob novem XP (naloga, igra, tekmovanje, sinhronizacija) zvezdice odletijo od »+15 XP« k zgornjemu znesku, ki steče do nove vrednosti; pod »Pravilno!« žetoni, za kaj je bil XP. Nova raven: okno s konfeti (zapre se z gumbom, Esc, dotikom ozadja); dosežen dnevni cilj in mejniki skupnih XP (100, 250, 500, 1000 …): pasica na vrhu, ki izgine sama. Vse sledi primerjavi prejšnjega in novega povzetka XP (`refreshXp` v `app.js`), zato novi viri XP ne potrebujejo svoje kode. Ob »manj gibanja« in v lahkem načinu brez letenja in konfetov.
- **Stikalo**: `<button class="switch" role="switch" aria-checked="true|false">`.
- **Animacije**: samo `transform` in `opacity`, kratke (do ~0,6 s), zamik po kartici z `--i`; ob »manj gibanja« jih ni (`style.css` jih izklopi globalno, `countUp` takoj pokaže število).

Pravilo izbranega stanja: izbrano je vedno modro (`--accent` besedilo ali rob, `--accent-soft` ozadje).

## Navigacija

- Računalnik (miška): zavihki v zgornji vrstici.
- Telefon (do 760 px) in tablica na dotik (do 1240 px): spodnja vrstica `#tabbar` s petimi zavihki z napisi (Učna pot, Učbenik, Inštruktor, Tekmovanja ali NPZ/Matura, Jaz). Napredek, Lige, Nastavitve in Račun so pod »Jaz« (`#view-me`), na vrhu imajo gumb »← Jaz« (`.me-back`). Nov glavni del aplikacije dodaj v zgornje zavihke in na stran Jaz, ne kot šesti zavihek spodaj.
- NPZ in matura (`#view-exams`, `loadExams` v `app.js`, `public/exam-papers.js`): samo slovenska OŠ in SŠ (ne fakulteta, ne regijski sistemi, kjer so izpiti v zavihku »Izpiti«). Zgornji zavihek za Tekmovanji. Na telefonu je na četrtem mestu spodnje vrstice »NPZ« (OŠ) ali »Matura« (SŠ), ko je cilj NPZ ali matura, sicer Tekmovanja; drugi od obeh je vrstica na strani Jaz (z gumbom »← Jaz«). Tekmovanja imajo samo tekmovanja. Na vrhu kartica Pripravljenost (dni do izpita iz cilja ali polje za datum, ki se shrani v cilj; delež znane snovi izpita; tri najšibkejše teme z »Vadi«), nato trening, poskusni izpit in Pretekle pole: izbira po korakih kot pri ravni izobrazbe (`.lp-crumb`, `.lp-opt`: šola → izpit → predmet → raven pri matematiki na maturi → leta in roki), vsak rok samo povezuje na dokumente na ric.si (`server/exam-papers-si.js`, `node scripts/pole-ric.js`). Nalog RIC nikoli ne prepisujemo; rok brez naše pole v istem slogu (`ours`) kaže »Naša pola v tem slogu je v pripravi«.
- Ime zgoraj desno (`#profile-btn`, `public/profile-menu.js`) odpre meni profila: kdo se uči (raven in predmet), zamenjava profila (če jih je več), Dodaj profil, Nastavitve, z računi še Račun in Odjava. Skriti `<select id="student-select">` še vedno hrani izbranega učenca. Na telefonu do 400 px je na gumbu samo začetnica.
- Gumb nazaj je povsod enak: `button.ghost.back` z ikono `arrow-left` (»← Učna pot«, »← Učbenik«, »← Jaz«).
- Urnik (`#view-schedule`, `public/schedule.js`, `docs/urnik.md`): zgornji zavihek »Urnik« in vrstica na strani Jaz. Na računalniku dnevi v stolpcih, na telefonu drug pod drugim z vrsticami ur (čas levo). Na Učni poti kartica `.sch-card` pod Današnjim treningom: opomnik pred testom (moder rob), ure danes/jutri kot žetoni (naslednja poudarjena), gumb »Ponovi pred uro«.
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
- **Začetno okno**: prazen graf se vedno odpre v oknu −10 … 10. Platno, ustvarjeno izven strani (širina 0), ob prvi pravi velikosti obdrži območje, ne merila (prej −150 … 150).
- **Shranjevanje**: zadnji graf se samodejno shrani v brskalnik za vsakega učenca; »Moji grafi« jih hrani na strežniku (z majhno sličico).

## Računska orodja (znanstveni kalkulator, orodja, PSE, formule)

Isti zaslon kot grafični kalkulator ima zgoraj preklopnik `.calc-modes`: Znanstveni | Grafični | Orodja | PSE | Formule. Koda: `public/graph/scicore.js` (računanje, ulomki, oblike zapisa, konstante, enote), `sci.js` (znanstveni kalkulator in pretvornik enot), `toolscore.js` (statistika, kompleksna števila, polinomi, matrike, številski sistemi, molska masa), `chemcore.js` (urejanje enačb, stehiometrija, pH, koncentracije, topnost), `probcore.js` (porazdelitve), `anacore.js` (odvod, ničle, limita, Taylor, vektorji, diferencialne enačbe, merske napake), `plot3d.js` (3D graf), `tools.js` + `tools-chem.js`, `tools-prob.js`, `tools-ana.js` (zaslon orodij, PSE, formule), `pse-data.js` in `pse-extra.js` (118 elementov). Zbirke formul so v `content/formulas/*.md`, strežnik jih da prek `/api/formulas?book=KEM-OS`. Vse teče v brskalniku, brez API.

- **Kje se odpre**: zavihek »Kalkulator«; gumb s kalkulatorjem v Učni poti (ob naslovu), na zaslonu teme (ob »Nazaj«), pod nalogo in v glavi Inštruktorja. Od tam se odpre kot prekrivni zaslon in ne zapusti strani; Esc ali puščica nazaj ga zapre.
- **Privzeti način**: zadnji uporabljeni (`evklid.calcMode`). Pri kemiji (predmet teme ali profila KEM) se odpre PSE. Če naloga vsebuje funkcijo za risanje, se odpre Grafični z vpisanimi izrazi. Formule pokažejo zbirko za predmet in stopnjo (OŠ/SŠ) učenca.
- **Znanstveni**: na računalniku zgodovina levo, tipkovnica desno (360–460 px); do 860 px zgodovina zgoraj, tipkovnica spodaj (funkcijske tipke 38 px, številke 46 px). Rezultat je točen, kadar se da (ulomek, koren, večkratnik π), in decimalen. Dotik izraza v zgodovini ga vrne v vnos, dotik rezultata ga vstavi.
- **Znanstveni razume več kot račun** (`scisolve.js`, brez API): enačbo z eno neznanko reši (polinom do 8. stopnje točno, kvadratna z racionalnimi koeficienti v obliki (−b ± m√n)/2a, sicer numerično na [−100, 100]; periodično trigonometrično enačbo na eni periodi), neenačbo zapiše z intervali (pol nikoli ni v rešitvi), sistem linearnih enačb, ločenih s »;«, reši z Gaussovo eliminacijo, nelinearen sistem in enačbo z x in y pošlje v graf. »f(x) = …« shrani funkcijo, »a = 5« spremenljivko (oboje kot čipi v vrstici »Shranjeno«, dotik vstavi ime). »d/dx(f)« da simbolni odvod, »d/dx(f; a)« odvod v točki, »∫(f; a; b)« določeni integral, »i« kompleksno število. Enačba brez neznank (2 + 2 = 4) pokaže Drži / Ne drži. Odstotek deluje kot na telefonu (200 + 10 % = 220). Med tipkanjem enačbe se pokaže le lep zapis in »Pritisni = za rešitev«.
- **Rezultat**: ulomek ima še mešano število (7/3 = 2⅓ ≈ 2,333); zapis ENG ima eksponent, deljiv s 3. Pod zadnjim rezultatom so gumbi Nariši graf (preklopi na Grafični z vpisanimi krivuljami; enačba z desno stranjo ≠ 0 da dve krivulji, presečišče je rešitev), Po korakih (odpre zaslon Skeniraj, samo če obstaja `#view-scan`), Prafaktorji (celo sestavljeno število) in Kopiraj. Več rešitev je vsaka v svojem bloku, da se na telefonu prelomi med njimi.
- **Tipke**: četrta vrstica funkcijskih tipk x, =, d/dx, ∫, ;, ⋯ (2nd: y, <, f(x)=, i, >). »⋯« odpre ploščo »Funkcije« po skupinah; plošča in Konstante prekrijeta tipkovnico, zgodovina ostane vidna. Na računalniku ↑/↓ prikliče prejšnje vnose. Na telefonu znanstveni način skrije zgornjo vrstico (← in spodnji zavihki ostanejo); funkcijske tipke so visoke 40 px.
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

- **Igra = vrsta igre × pojem.** 30 vrst iger: `engines.js` (Meteorji, Baloni, Tekač, Sortirnica), `arcade.js` in `arcade2.js` (igre v slogu 80. in 90. let: labirint, grad, kača, žaba, krti, helikopter, opeke, vesoljci, pristajalnik, mehurčki), `build.js` (top, ki ruši stolpe, in žerjav, ki gradi stolp), `sensors.js` (kroglica, skakač, čarobna krogla z nagibom in tresenjem telefona), `fun.js` (v slogu priljubljenih mobilnih iger, j 2026-10-29: okrepčevalnica z naročili in potrpljenjem gostov, vožnja čez hribe z gorivom in skoki, ljubljenček Bibi, ki ga hraniš, lovilec s košaro, spomin s pari, rezanje sadja s potegom prsta, kopanje poti za vodo, minolovec z detektorjem; izvirni liki, brez imen in risb tujih iger), `retro.js` (zvrsti iz vprašalnika o igrah iz otroštva, j 2026-10-30: padajoči bloki v steze z odgovori, dragulji v barvah odgovorov, kartaški dvoboj z živalskimi nasprotniki). **Igre iz otroštva** (`childhood.js`): neobvezen vprašalnik v Igrah (vabilo nad mrežo, »Ne zdaj« ga skrije; povezava »Igre iz otroštva« ostane) s 26 zvrstmi; pod vsako piše, v katero Evklidovo igro se spremeni. Izbira se shrani v profil (`game_childhood`, inštruktor jo lahko spremeni iz klepeta) in doda razdelek »Igre iz tvojega otroštva« na vrh mreže ter filter »Iz otroštva«. Nova zvrst = vnos v `GENRES` (samo splošno ime zvrsti, nikoli ime tuje igre) in ključ `games.g.<id>` v vseh jezikih. Matematični pojmi z generatorji so v `topics.js`, pojmi drugih predmetov (SPO in NIT za 1.–5. razred, NAR, FIZ, KEM, BIO, GEO, RAC, EKO) in dodatni matematični paketi (`mat15.js` za 1.–5. razred, `mat2.js` za teme učne poti brez igre) v `subjects/` (pravila v `subjects/README.md`). Nad področji je vrstica predmetov; iskanje išče po vseh. Nova vrsta igre = nov predmet v seznamu vrst + ključi `games.e.<id>` in `games.e.<id>.how` v vseh jezikih; nov pojem = `def(...)` v `topics.js` ali vnos v paketu predmeta in znak v `GLYPH` (`index.js`).
- **Senzorji**: igra z `sensors: true` bere nagib (`G.tilt`, umerjen ob začetku in po premoru) in tresenje (`shake()`); dovoljenje na iPhonu se zahteva ob kliku »Igraj«. Brez senzorjev (računalnik, zavrnjeno dovoljenje) se igra z dotikom, miško ali tipkami.
- **Naloge** so kratke in v simbolih (`−`, `²`, `√`, `∫`, `{…}` za množico rešitev), ker se izrišejo na predmetu v igri. Napačni odgovori so tipične napake, nikoli enaki pravilnemu. `test/games.test.js` preveri vse pojme na vseh treh stopnjah.
- **Označena pot** (`unlock.js`, `docs/igre-smernice.md` §11): zapora iger je izklopljena (j 2026-10-29: »Odstrani zaporo iger«, `LOCKS_ON = false`), vse igre so odprte. Igre, ki so učencu zdaj najbolj v pomoč (snov zna, iz njegovega ali prejšnjega razreda ali obvladana na učni poti, naslednja po hitrosti: mirna → srednja → hitra), imajo zlat rob in kompas, so prve v vsakem področju, nad mrežo pa je kratka razlaga.
- **Težavnost**: vsaka igra se začne na stopnji 1 (ali na zadnji doseženi pri pojmu); 5 pravilnih zapored → težje, 2 napačna → lažje. Hitrost izbere učenec (Počasi/Srednje/Hitro, privzeto Počasi, `evklid.gamePace`) in z odgovori naraste največ za polovico; prvo vprašanje pride po kratkem premoru.
- **Zgodbe**: vsaka vrsta igre ima junaka in 4 poglavja (`story: { sl, en }` v `engines.js`); novo poglavje se odklene vsakih 8 pravilnih: igra se ne ustavi, pokaže se le kratek napis in nove barve prizora. Zgodba je ena kratka vrstica na začetni kartici (j: »naj bodo igre preproste«). Nova vrsta igre potrebuje zgodbo (test to preveri).
- **Videz stare flash igre**: debele temne obrobe (`--gm-ink`), risankasti prelivi, sončni žarki na naslovni kartici, izbočeni gumbi, obrobljen tekst in 8-bitni zvoki.
- **Učenje**: ob napaki se v glavi pokaže pravilni odgovor (pri igrah, kjer lahko poskusiš znova, le »Poskusi znova«), naslednje vprašanje pride šele čez ~2 s, na koncu seznam »Ponovi« (naloga → pravilni odgovor).
- **XP**: 1 XP za 2 pravilna odgovora, največ 20 na igro in 60 na dan iz iger.
- **Kovanci in avatar** (`public/avatar.js`, `server/avatar.js`): 1 kovanec za vsak pravilen odgovor v igrah, največ 150 na dan; z njimi učenec v trgovini (gumb »Moj avatar« na vrhu iger) kupuje dele avatarja (7 predalov, 56 izvirnih SVG delov, redkost po ceni: navaden, redek, epski, legendaren). Brez pravega denarja. Avatar je edino, kar učenec izbere in vidijo drugi (lige, razred); vzdevki ostanejo samodejni. Inštruktor sme avatar obleči v brezplačne ali kupljene dele (`avatar` v `settings-registry.js`), kupuje se samo v trgovini. Nov del = vnos v `ITEMS` in risba v istem predalu.
- Prizori iger in ploščice imajo svoje barve (kot simulacije); okvir, kartice in gumbi uporabljajo spremenljivke. Vse igre delujejo z dotikom, miško in tipkami (1–4, ← →, preslednica, P ali Esc za premor).

## Kotiček zanimanj

Kotiček (`public/corner.js`, slog `public/corner.css`, strežnik `server/corner.js`, področja in viri `public/interests.js`): novice iz znanosti o temah, ki jih učenec izbere. Na računalniku zgornji zavihek »Kotiček«, na telefonu vrstica »Moj kotiček« na strani Jaz.

- **Vprašalnik** (`.iq`): ob zagonu ga enkrat dobi vsak profil, ki ga še ni izpolnil (`settings.interests === null`); uvodni ogled počaka nanj. Trije koraki: teme (do 8, ploščice `.iq-opt` z emojijem), kako podrobne novice (`.iq-level`), lastna tema in »tudi v angleščini«. »Pozneje« shrani prazen seznam, da se ne ponavlja. Znova ga odpre »Uredi zanimanja« v kotičku in v Nastavitvah (kartica Kotiček zanimanj); inštruktor zanimanja spremeni iz klepeta (`interests`, `interest_custom`, `news_level`, `news_lang` v registru).
- **Novice**: kartice `.news-card` (tema, vir, datum, oznaka jezika, naslov, povzetek, Pripni, Razloži mi, Preberi ↗). »Razloži mi« vpiše prošnjo v Inštruktorja. Žetoni zgoraj: Vse, Pripeto, vsaka tema.
- **Čez cel zaslon** (`.corner-board`): gumb »Oglasna deska« odpre pogled čez cel zaslon (tudi celozaslonski način brskalnika) z dvema načinoma: Časopis (serifni naslovi, stolpci s črtami, prva novica čez vse stolpce) in Oglasna deska (pluta, listki z bucikami; pripete novice na vrhu, rdeča bucika). Stolpcev je 1–4 po širini. Esc, Zapri ali tipka Nazaj ga zapre. Barvi plute sta podatkovni barvi z različico za temni način.
- **Viri in varnost**: Science News Explores (za mlade), ScienceDaily, NASA, ESA, MMC RTV SLO, Kvarkadabra. OŠ dobi samo poljudne vire (`news_level` auto), SŠ in fakulteta tudi znanstvene. Za OŠ in SŠ strežnik izloči novice o nasilju, drogah, spolnosti in samomoru. Novice se preberejo na strežniku vsaki 2 uri in hranijo v `news_cache` (delujejo tudi brez povezave); model jih ne piše.
