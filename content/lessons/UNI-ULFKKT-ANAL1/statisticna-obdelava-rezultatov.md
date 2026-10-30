---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Tesar na gradbišču meri dolžino trama. Sodelavec Matic mu reče: »Ne meri petkrat. Vsaka meritev prinese svojo napako, napake se seštejejo in povprečje petih meritev je slabše od ene same.«

Ima Matic prav? Ob koncu lekcije boš znal to presoditi s številkami. Enako vprašanje si postavi vsak analizni kemik: titracijo ali tehtanje ponovi trikrat ali petkrat, nato pa mora povedati, kaj je rezultat, kako zanesljiv je in koliko števk sme zapisati. Brez tega je število na poročilu samo ugibanje z decimalkami.

## Razlaga

**Pet meritev istega trama.** Tesar je z merskim trakom (razdelki po $1\,\mathrm{mm}$) izmeril spodnje dolžine. Zadnja dva stolpca vsebujeta odmike od povprečja $\bar x = 2002\,\mathrm{mm}$, ki ga izračunamo takoj pod tabelo.

| Meritev $i$ | $x_i$ [mm] | odmik $x_i - \bar x$ [mm] | kvadrat odmika [mm²] |
|---|---|---|---|
| 1 | 2003 | $+1$ | 1 |
| 2 | 2001 | $-1$ | 1 |
| 3 | 2004 | $+2$ | 4 |
| 4 | 2000 | $-2$ | 4 |
| 5 | 2002 | $0$ | 0 |

Najboljša ocena prave dolžine je **aritmetična sredina** ali povprečje: vsota meritev, deljena s številom meritev $n$.

$$\bar x = \frac{1}{n}\sum_{i=1}^{n} x_i = \frac{10\,010\,\mathrm{mm}}{5} = 2002\,\mathrm{mm}$$

Poglej stolpec z odmiki. Odmiki so pozitivni in negativni, njihova vsota je točno $0$. To velja vedno: povprečje leži tako, da se odmiki navzgor in navzdol izničijo. Zato povprečni odmik ne pove ničesar o raztrosu.

Rešitev je kvadriranje. Kvadrat odmika je vedno pozitiven, zato se ne izniči. Vsoto kvadratov delimo z $n-1$ in korenimo. Tako dobimo **standardni odklon** vzorca $s$, merilo za raztros posameznih meritev okoli povprečja:

$$s = \sqrt{\frac{\sum (x_i - \bar x)^2}{n-1}}$$

Za tram: vsota kvadratov je $10\,\mathrm{mm^2}$, torej $s = \sqrt{10/4}\,\mathrm{mm} \approx 1{,}58\,\mathrm{mm}$.

Zakaj $n-1$ in ne $n$? Odmike smo računali od $\bar x$, ki smo ga izračunali iz istih podatkov. Ko poznaš štiri odmike, je peti določen (vsota mora biti $0$). Neodvisnih podatkov o raztrosu je samo $n-1$. Temu številu rečemo **prostostne stopnje**.

Včasih podamo raztros v odstotkih povprečja. To je **relativni standardni odklon**, $\mathrm{RSD} = \dfrac{s}{\bar x}\cdot 100\,\%$. Za tram je približno $0{,}08\,\%$.

:::premisli
Tesar doda šesto meritev, ki je točno $2002\,\mathrm{mm}$, enaka povprečju. Se bo $s$ povečal, zmanjšal ali ostal enak? Napovej, preden računaš.
---
Zmanjša se. Vsota kvadratov ostane $10\,\mathrm{mm^2}$, delimo pa s $5$ namesto s $4$: $s = \sqrt{2}\,\mathrm{mm} \approx 1{,}41\,\mathrm{mm}$. Meritev blizu povprečja kaže, da je raztros manjši, kot smo mislili.
:::

**Kaj se zgodi, ko meritev dodajamo.** Recimo, da tesar meri enako skrbno in dobi vedno $s \approx 1{,}58\,\mathrm{mm}$, enkrat s 3, enkrat s 5, enkrat z 10 meritvami. Poleg $s$ izračunamo še polovično širino intervala, v katerem s 95-% zaupanjem leži prava dolžina (kako, pove pravilo spodaj).

| $n$ | $s$ [mm] | faktor $t$ (95 %) | polovična širina [mm] |
|---|---|---|---|
| 3 | 1,58 | 4,303 | 3,9 |
| 5 | 1,58 | 2,776 | 2,0 |
| 10 | 1,58 | 2,262 | 1,1 |

Opazi dvoje. Standardni odklon se z več meritvami ne spremeni: to je lastnost metode in skrbnosti, ne števila meritev. Interval pa se hitro oži. Matic se torej moti. Napake posameznih meritev se pri povprečju ne seštevajo, ampak se delno izničijo.

**Pravilo: interval zaupanja.** Prava vrednost $\mu$ leži z izbrano verjetnostjo (navadno 95 %) v intervalu

$$\mu = \bar x \pm \frac{t \cdot s}{\sqrt{n}}$$

Količnik $s/\sqrt n$ je **standardni odklon povprečja**. Faktor $t$ je **Studentov faktor**. Odčitamo ga iz tabele za $n-1$ prostostnih stopenj in izbrano verjetnost. Za 95 %: $t = 4{,}303$ ($n=3$), $3{,}182$ ($n=4$), $2{,}776$ ($n=5$), $2{,}571$ ($n=6$), $2{,}262$ ($n=10$). Pri zelo velikem $n$ se $t$ približa $1{,}96$.

:::premisli
Med $n = 3$ in $n = 10$ se $\sqrt n$ poveča manj kot dvakrat, interval pa se zoži več kot trikrat. Zakaj?
---
Ker se zmanjša tudi $t$. Pri malo meritvah je sama ocena $s$ negotova, zato tabela da velik faktor $t$ (previdnost). Z več meritvami $s$ poznamo bolje in $t$ pade s $4{,}303$ na $2{,}262$. Oba učinka skupaj zožita interval.
:::

**Značilne števke.** Kalkulator za tram izpiše $\bar x = 2002$ in $s = 1{,}5811388\ldots$ Vseh teh števk ne smemo zapisati. **Značilne števke** so vse zanesljive števke in prva negotova.

- Ničle na začetku (vodilne ničle) niso značilne: $0{,}0450$ ima tri značilne števke ($4$, $5$ in zadnjo ničlo).
- Ničle na koncu za decimalno vejico so značilne: $25{,}00\,\mathrm{mL}$ pomeni, da smo brali na stotinko.
- Pri seštevanju in odštevanju ima rezultat toliko decimalnih mest kot podatek z najmanj decimalnimi mesti.
- Pri množenju in deljenju ima rezultat toliko značilnih števk kot podatek z najmanj značilnimi števkami.
- Negotovost zaokrožimo na eno (največ dve) značilni števki, povprečje pa na isto decimalno mesto kot negotovost.

Vmesnih rezultatov ne zaokrožujemo; zaokrožimo šele končni rezultat. Za tram pri $n = 5$: $\mu = (2002 \pm 2)\,\mathrm{mm}$.

## Rešeni primeri

### Primer 1: vlaga v mivki

Laboratorij betonarne štirikrat določi masni delež vode v mivki za beton: $5{,}2\,\%$, $5{,}5\,\%$, $5{,}3\,\%$ in $5{,}4\,\%$. Izračunaj povprečje in standardni odklon.

**Podatki:** $x_1 = 5{,}2\,\%$, $x_2 = 5{,}5\,\%$, $x_3 = 5{,}3\,\%$, $x_4 = 5{,}4\,\%$, $n = 4$
**Iščemo:** povprečje $\bar x$ in standardni odklon $s$

:::formula
$\bar x = \dfrac{\sum x_i}{n}$, $\quad s = \sqrt{\dfrac{\sum (x_i - \bar x)^2}{n-1}}$
:::

**Rešitev:**

1. Vsota meritev: $5{,}2 + 5{,}5 + 5{,}3 + 5{,}4 = 21{,}4$, zato $\bar x = 21{,}4 / 4 = 5{,}35\,\%$.
2. Odmiki od povprečja so $-0{,}15$, $+0{,}15$, $-0{,}05$ in $+0{,}05$ (vsota je $0$, kar je dobra kontrola).
3. Kvadrati odmikov: $0{,}0225 + 0{,}0225 + 0{,}0025 + 0{,}0025 = 0{,}05$.
4. Delimo s prostostnimi stopnjami $n - 1 = 3$ in korenimo: $s = \sqrt{0{,}05/3} \approx 0{,}129\,\%$.
5. Odgovor: povprečni delež vode je $5{,}35\,\%$, standardni odklon pa približno $0{,}13\,\%$.

### Primer 2: CaO v cementu z intervalom zaupanja

Petkrat določimo masni delež CaO v cementu: $63{,}2\,\%$, $63{,}5\,\%$, $63{,}1\,\%$, $63{,}4\,\%$ in $63{,}3\,\%$. Podaj rezultat s 95-% intervalom zaupanja in pravilnim številom značilnih števk.

**Podatki:** pet meritev ($n = 5$) zgoraj, verjetnost $95\,\%$, $t = 2{,}776$ za $4$ prostostne stopnje
**Iščemo:** interval zaupanja za pravo vrednost $\mu$

:::formula
$\mu = \bar x \pm \dfrac{t \cdot s}{\sqrt{n}}$
:::

**Rešitev:**

1. Povprečje: $\bar x = 316{,}5\,\% / 5 = 63{,}3\,\%$.
2. Odmiki so $-0{,}1$, $+0{,}2$, $-0{,}2$, $+0{,}1$ in $0$; vsota kvadratov je $0{,}10$.
3. $s = \sqrt{0{,}10/4} \approx 0{,}158\,\%$ (ne zaokrožujemo še, ker računamo naprej).
4. Polovična širina: $\dfrac{2{,}776 \cdot 0{,}158}{\sqrt 5} \approx 0{,}196\,\%$.
5. Negotovost zaokrožimo na eno značilno števko, $0{,}2\,\%$; povprečje ima že eno decimalko, kar se ujema.
6. Odgovor: masni delež CaO je $(63{,}3 \pm 0{,}2)\,\%$ pri 95-% zaupanju.

### Primer 3: koliko meritev potrebuje mizar

Mizar iz izkušenj pričakuje, da bo standardni odklon njegovih meritev dolžine kuhinjskega pulta okoli $s = 1{,}6\,\mathrm{mm}$. Ker bo $s$ izračunal iz istih meritev, uporabi Studentov $t$. Za vgradnjo želi, da je 95-% interval zaupanja za povprečje ožji od $\pm 1\,\mathrm{mm}$. Ali zadostuje pet meritev? Najmanj koliko meritev potrebuje?

**Podatki:** $s = 1{,}6\,\mathrm{mm}$, zahtevana polovična širina $\le 1\,\mathrm{mm}$, verjetnost $95\,\%$; $t = 2{,}776$ ($n=5$), $2{,}262$ ($n=10$), $2{,}201$ ($n=12$), $2{,}179$ ($n=13$)
**Iščemo:** najmanjše število meritev $n$

:::formula
polovična širina $= \dfrac{t \cdot s}{\sqrt{n}} \le 1\,\mathrm{mm}$
:::

**Rešitev:**

1. Pri $n = 5$: $\dfrac{2{,}776 \cdot 1{,}6}{\sqrt 5} \approx 1{,}99\,\mathrm{mm}$. To je skoraj dvakrat preveč, pet meritev ne zadostuje.
2. Pri $n = 10$: $\dfrac{2{,}262 \cdot 1{,}6}{\sqrt{10}} \approx 1{,}14\,\mathrm{mm}$. Še vedno preširoko.
3. Pri $n = 12$: $\dfrac{2{,}201 \cdot 1{,}6}{\sqrt{12}} \approx 1{,}02\,\mathrm{mm}$. Za las preveč.
4. Pri $n = 13$: $\dfrac{2{,}179 \cdot 1{,}6}{\sqrt{13}} \approx 0{,}97\,\mathrm{mm}$. Pogoj je izpolnjen.
5. Odgovor: pet meritev ne zadostuje; mizar potrebuje najmanj $13$ meritev. (Bolj praktično je izboljšati metodo, da se zmanjša $s$.)

### Primer 4: zdaj ti

Opeka ima maso $3{,}482\,\mathrm{kg}$ in mere $0{,}250\,\mathrm{m} \times 0{,}120\,\mathrm{m} \times 0{,}065\,\mathrm{m}$. Izračunaj njeno gostoto s pravilnim številom značilnih števk.

**Podatki:** $m = 3{,}482\,\mathrm{kg}$, $a = 0{,}250\,\mathrm{m}$, $b = 0{,}120\,\mathrm{m}$, $c = 0{,}065\,\mathrm{m}$
**Iščemo:** gostoto $\rho$

:::formula
$\rho = \dfrac{m}{a \cdot b \cdot c}$
:::

**Rešitev:**

1. Prostornina: $V = 0{,}250 \cdot 0{,}120 \cdot 0{,}065\,\mathrm{m^3} = 0{,}00195\,\mathrm{m^3}$ (vmesno ne zaokrožujemo).
2. Preštej značilne števke: $3{,}482$ ima štiri, $0{,}250$ in $0{,}120$ po tri, $0{,}065$ pa le dve.
3. Izračunaj $\rho$ in ga zaokroži sam, nato preveri:

:::premisli
Kolikšna je gostota opeke, zapisana s pravilnim številom značilnih števk?
---
$\rho = 3{,}482\,\mathrm{kg} / 0{,}00195\,\mathrm{m^3} \approx 1786\,\mathrm{kg/m^3}$. Najmanj značilnih števk (dve) ima $0{,}065\,\mathrm{m}$, zato zapišemo $\rho \approx 1{,}8 \cdot 10^3\,\mathrm{kg/m^3}$.
:::

## Pogoste napake

- **»Več meritev pomeni več napak.«** Napake posameznih meritev se pri povprečju delno izničijo. Raztros posamezne meritve ($s$) ostane enak, negotovost povprečja ($s/\sqrt n$) pa pada. Popravek: ločuj $s$ od intervala zaupanja.
- **»Z več meritvami se zmanjša $s$.«** Obratna napaka. Standardni odklon opisuje metodo in ga s ponavljanjem le natančneje ocenimo. Ožji postane interval zaupanja.
- **Deljenje z $n$ namesto z $n-1$.** Tako dobiš premajhen $s$ in preveč optimističen rezultat. Pri malo meritvah je razlika velika. Popravek: pri vzorcu meritev vedno $n-1$.
- **Pozabljen $\sqrt n$ ali $t$.** Kdor zapiše $\bar x \pm s$, poda raztros meritev, ne intervala zaupanja. Kdor vzame $1{,}96$ pri treh meritvah, dobi več kot dvakrat preozek interval. Popravek: $t$ iz tabele za $n - 1$ prostostnih stopenj.
- **Vse števke s kalkulatorja.** Zapis $(20{,}4625 \pm 0{,}0796)\,\mathrm{mL}$ trdi, da poznamo desettisočinke, čeprav je negotova že stotinka. Popravek: negotovost na eno značilno števko, povprečje na isto decimalno mesto.

## Povzetek

- Povprečje $\bar x = \sum x_i / n$ je najboljša ocena prave vrednosti.
- Standardni odklon $s = \sqrt{\sum (x_i - \bar x)^2 / (n-1)}$ meri raztros posameznih meritev; $\mathrm{RSD} = s/\bar x \cdot 100\,\%$.
- Interval zaupanja: $\mu = \bar x \pm t s / \sqrt n$, $t$ iz tabele za $n-1$ prostostnih stopenj (95 %: $n=3$: $4{,}303$; $n=5$: $2{,}776$).
- Več meritev ne zmanjša $s$, zoži pa interval zaupanja.
- Značilne števke: vodilne ničle ne štejejo; pri $\pm$ decimalna mesta, pri $\cdot$ in $:$ značilne števke; negotovost na 1 števko, povprečje na isto mesto; zaokrožuj šele na koncu.

## Drugače: Korak za korakom s številkami

Postopek za vsak niz ponovljenih meritev, na primeru treh debelin keramične ploščice $8{,}1$, $8{,}3$ in $8{,}2\,\mathrm{mm}$:

1. Seštej in deli: $\bar x = 24{,}6 / 3 = 8{,}2\,\mathrm{mm}$.
2. Odmiki: $-0{,}1$, $+0{,}1$, $0$. Kontrola: vsota je $0$.
3. Kvadrati: $0{,}01 + 0{,}01 + 0 = 0{,}02$.
4. Deli z $n - 1 = 2$ in koreni: $s = \sqrt{0{,}01} = 0{,}1\,\mathrm{mm}$.
5. Iz tabele: $t = 4{,}303$ za $2$ prostostni stopnji.
6. Polovična širina: $4{,}303 \cdot 0{,}1 / \sqrt 3 \approx 0{,}25\,\mathrm{mm}$.
7. Zaokroži: $0{,}2\,\mathrm{mm}$ (ena značilna števka); povprečje na desetinko.
8. Zapiši: debelina je $(8{,}2 \pm 0{,}2)\,\mathrm{mm}$ pri 95-% zaupanju.

## Drugače: Kot zgodba

Trije zidarji gradijo isti zid in vsak po svoje meri višino vrste opek.

Prvi izmeri enkrat in reče: »Točno $75\,\mathrm{mm}$.« Nihče ne ve, ali je imel srečo ali ne, ker o raztrosu ne pove ničesar.

Drugi izmeri petkrat, dobi $74$, $76$, $75$, $73$ in $77\,\mathrm{mm}$ in se ustraši: »Vsakič drugače, nekaj je narobe.« Ni narobe. Tak je raztros njegovega merjenja, okoli $1{,}6\,\mathrm{mm}$. Povprečje $75\,\mathrm{mm}$ je zanesljivejše od vsake posamezne meritve.

Tretji meri desetkrat. Njegove meritve se raztresejo enako kot pri drugem, saj ima isti meter in iste roke. Ko pa izračuna interval zaupanja, je ta skoraj za polovico ožji. Šef zato zaupa tretjemu: ne zato, ker meri bolje, ampak ker ve, koliko svojemu povprečju lahko verjame.

Pri poročilu vsi trije zapišejo le toliko števk, kolikor jih znajo upravičiti. Kdor napiše $75{,}2834\,\mathrm{mm}$, pove le, kako dolg je zaslon kalkulatorja.

## Preveri se

? Katera trditev o standardnem odklonu $s$ niza meritev je pravilna?
- Z večanjem števila meritev $s$ vedno pada proti nič.
~ Pada interval zaupanja (zaradi $\sqrt n$ in manjšega $t$), $s$ pa opisuje raztros metode in ostane približno enak.
+ $s$ opisuje raztros posameznih meritev okoli povprečja in je lastnost metode.
- $s$ je povprečje odmikov od aritmetične sredine.
~ Povprečje odmikov je vedno $0$, ker se pozitivni in negativni izničijo; zato odmike kvadriramo.
> Standardni odklon meri, kako daleč so posamezne meritve od povprečja. Z več meritvami ga ocenimo natančneje, ne pa zmanjšamo.

? Trikrat izmeriš maso vzorca: $10{,}1\,\mathrm{g}$, $10{,}3\,\mathrm{g}$, $10{,}2\,\mathrm{g}$. Kolikšen je standardni odklon $s$?
- $0{,}08\,\mathrm{g}$
~ Tako dobiš, če vsoto kvadratov deliš z $n = 3$ namesto z $n - 1 = 2$.
+ $0{,}1\,\mathrm{g}$
- $0{,}2\,\mathrm{g}$
~ To je razpon (največja minus najmanjša meritev), ne standardni odklon.
- $0{,}06\,\mathrm{g}$
~ To je $s/\sqrt n$, standardni odklon povprečja, ne posameznih meritev.
> $\bar x = 10{,}2\,\mathrm{g}$, vsota kvadratov odmikov je $0{,}02\,\mathrm{g^2}$, $s = \sqrt{0{,}02/2}\,\mathrm{g} = 0{,}1\,\mathrm{g}$.

? Sošolka je za štiri titracije dobila $\bar x = 20{,}4625\,\mathrm{mL}$ in $s = 0{,}05\,\mathrm{mL}$ ter zapisala: $\mu = (20{,}4625 \pm 0{,}0796)\,\mathrm{mL}$, s $t = 3{,}182$. Kje je napaka?
- Uporabiti bi morala $t = 1{,}96$.
~ $1{,}96$ velja šele za zelo veliko meritev. Pri štirih meritvah je pravilen $t = 3{,}182$ za $3$ prostostne stopnje.
- Deliti bi morala z $n$, ne s $\sqrt n$.
~ Standardni odklon povprečja je $s/\sqrt n$; deljenje z $n$ bi dalo preozek interval.
+ Račun je pravilen, zapisala pa je preveč števk: pravilno je $(20{,}46 \pm 0{,}08)\,\mathrm{mL}$.
> $3{,}182 \cdot 0{,}05 / \sqrt 4 \approx 0{,}0796\,\mathrm{mL}$, kar zaokrožimo na eno značilno števko, $0{,}08\,\mathrm{mL}$. Povprečje zaokrožimo na isto decimalno mesto: $20{,}46\,\mathrm{mL}$.

? Dva zidarja merita z enakim $s = 2\,\mathrm{mm}$. Prvi izmeri $4$-krat ($t = 3{,}182$), drugi $16$-krat ($t = 2{,}131$). Kako se primerjata njuna 95-% intervala zaupanja?
- Enaka sta, ker imata enak $s$.
~ Enak $s$ pomeni enak raztros meritev; interval je odvisen še od $n$ in $t$.
- Drugi ima natanko dvakrat ožji interval, ker je $\sqrt{16/4} = 2$.
~ Pozabil si, da se zmanjša tudi faktor $t$, zato je razlika večja od dvakratne.
+ Drugi ima približno trikrat ožji interval.
> Prvi: $3{,}182 \cdot 2 / 2 \approx 3{,}2\,\mathrm{mm}$; drugi: $2{,}131 \cdot 2 / 4 \approx 1{,}1\,\mathrm{mm}$. Oži se zaradi $\sqrt n$ in zaradi manjšega $t$.

? Mizar sešteje dolžini dveh letev: $1{,}25\,\mathrm{m}$ (izmerjeno na centimeter) in $0{,}3\,\mathrm{m}$ (ocenjeno na decimeter). Kako zapiše skupno dolžino?
- $1{,}55\,\mathrm{m}$
~ Pri seštevanju šteje najmanjše število decimalnih mest; druga letev je znana le na desetinko metra.
+ $1{,}6\,\mathrm{m}$
- $2\,\mathrm{m}$
~ To je zaokroženo pregrobo; desetinke metra poznamo.
- $1{,}550\,\mathrm{m}$
~ Dodana ničla bi pomenila, da poznamo milimetre, česar ne vemo.
> $1{,}25 + 0{,}3 = 1{,}55$, rezultat zaokrožimo na eno decimalno mesto (kot $0{,}3$): $1{,}6\,\mathrm{m}$.

:::simboli
x | izmerjena vrednost | \bar x = \dfrac{\sum x_i}{n} | mm | s črtico (x̄): povprečje meritev
x_i | i-ta meritev | | mm
i | zaporedna številka meritve | | – | od 1 do n
n | število meritev | | –
s | standardni odklon vzorca | s = \sqrt{\dfrac{\sum (x_i - \bar x)^2}{n-1}} | mm | raztros meritev okoli povprečja
\mu | prava vrednost | \mu = \bar x \pm \dfrac{t \cdot s}{\sqrt{n}} | mm | interval zaupanja, navadno 95 %
t | Studentov faktor | | – | odvisen od n in izbrane verjetnosti
\rho | gostota opeke | \rho = \dfrac{m}{a \cdot b \cdot c} | kg/m^3
m | masa opeke | | kg
a | dolžina opeke | | m
b | širina opeke | | m
c | višina opeke | | m
:::
