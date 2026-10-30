---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Na gradbišču je betonski mešalnik priključen na vtičnico $230\,\mathrm{V}$. Tokovne klešče na dovodnem kablu kažejo $3{,}83\,\mathrm{A}$. Sošolec hitro izračuna: »Moč je $U I$, torej $230\,\mathrm{V} \cdot 3{,}83\,\mathrm{A} \approx 881\,\mathrm{W}$. Toliko energije v sekundi gre v boben.«

Števec električne energije na gradbiščni omarici se s tem ne strinja. V eni uri našteje le okoli $0{,}53\,\mathrm{kWh}$, ne $0{,}88\,\mathrm{kWh}$. Kdo ima prav in kam gre razlika? Odgovor skriva izmenični tok: napetost in tok v motorju nista »v koraku«. Do konca lekcije boš sošolčevo trditev popravil s tremi orodji: s kazalci, z impedanco ter z delovno in jalovo močjo. Ista orodja rabi električar, ko izbira presek kabla za delavnico ali kondenzatorje za kompenzacijo.

## Razlaga

Gradimo po en kos naenkrat. Večina kosov se konča s kratkim preverjanjem.

**1. Sinusna napetost.** V omrežju napetost ni stalna kot pri bateriji. Niha po sinusu: $u(t) = U_\mathrm{m} \sin(\omega t)$. Pri tem je $U_\mathrm{m}$ temenska (največja) vrednost, $f = 50\,\mathrm{Hz}$ frekvenca in $\omega = 2\pi f \approx 314\,\mathrm{s^{-1}}$ krožna frekvenca. Smer toka se zamenja stokrat v sekundi.

*Preveri:* kolikokrat v sekundi doseže napetost vrh $+U_\mathrm{m}$? (Petdesetkrat, enkrat na periodo $T = 1/f = 20\,\mathrm{ms}$.)

**2. Efektivna vrednost.** Napis »$230\,\mathrm{V}$« ni vrh sinusa. Je **efektivna vrednost** $U$: enosmerna napetost, ki bi v istem grelcu sprostila enako toploto. Za sinus velja $U = U_\mathrm{m}/\sqrt{2}$, enako za tok $I = I_\mathrm{m}/\sqrt{2}$. Ampermetri in voltmetri kažejo efektivne vrednosti; vse formule spodaj jih uporabljajo.

*Preveri:* kolikšen je vrh omrežne napetosti? ($U_\mathrm{m} = 230\,\mathrm{V} \cdot \sqrt{2} \approx 325\,\mathrm{V}$.)

**3. Kazalci.** Namesto risanja dveh sinusov nad časovno osjo narišemo puščici. **Kazalec** je puščica, katere dolžina je efektivna vrednost, kot glede na vodoravnico pa faza (za koliko je sinus zamaknjen v času). Predstavljaj si, da se vse puščice vrtijo skupaj s kotno hitrostjo $\omega$. Ker se vrtijo skupaj, jih lahko »zamrznemo« in gledamo le kot med njimi. Kot med kazalcem napetosti in kazalcem toka je **fazni kot** $\varphi$.

**4. Trije elementi.** Upornik, tuljava in kondenzator se na izmenično napetost odzovejo različno. **Tuljava** (navitje žice, npr. v motorju ali transformatorju) ima induktivnost $L$ v henryjih ($\mathrm{H}$); spremembam toka se upira. **Kondenzator** ima kapacitivnost $C$ v faradih ($\mathrm{F}$); se izmenično polni in prazni. Namesto upornosti imata **reaktanco** $X$, tudi v ohmih:

| element | »upor« pri $\omega$ | tok glede na napetost | večja $f$ |
|---|---|---|---|
| upornik | $R$ | v fazi, $\varphi = 0$ | nič se ne spremeni |
| tuljava | $X_L = \omega L$ | zaostaja za $90^\circ$ | $X_L$ raste |
| kondenzator | $X_C = \dfrac{1}{\omega C}$ | prehiteva za $90^\circ$ | $X_C$ pada |

:::premisli
Kondenzator priključimo najprej na baterijo, nato na omrežje. Kje bo tekel stalen tok in zakaj?
---
Le v omrežju. Pri enosmerni napetosti je $\omega = 0$, zato je $X_C = \dfrac{1}{\omega C}$ neskončen: kondenzator se nabije in tok preneha. Pri $50\,\mathrm{Hz}$ se neprestano polni in prazni, zato tok teče.
:::

*Preveri:* kaj se zgodi z $X_L$, če frekvenco podvojimo? (Podvoji se.)

**5. Impedanca.** Navitje motorja ima hkrati upornost žice $R$ in reaktanco $X_L$. Tok skozi oba je isti. Napetost na $R$ je z njim v fazi, napetost na tuljavi pa ga prehiteva za $90^\circ$. Napetosti na njiju torej nista v fazi, zato ju ne seštevamo kot števili, ampak kot kazalca pod pravim kotom. Nastane pravokotni trikotnik. Hipotenuza je **impedanca** $Z$, skupni »upor« vezja:

$$Z = \sqrt{R^2 + X^2}, \quad X = X_L - X_C$$

Ohmov zakon velja z impedanco: $I = U/Z$. Fazni kot preberemo iz istega trikotnika: $\cos\varphi = R/Z$.

:::premisli
Upornik $30\,\Omega$ in tuljava z $X_L = 40\,\Omega$ sta vezana zaporedno. Je impedanca $70\,\Omega$, $50\,\Omega$ ali $10\,\Omega$? Napovej, nato utemelji.
---
$50\,\Omega$. Kazalca sta pravokotna, zato velja Pitagora: $\sqrt{30^2 + 40^2} = 50$. Vsota $70\,\Omega$ bi veljala le, če bi bila napetosti v fazi.
:::

**6. Tri moči.** Moč v vsakem trenutku je $p = u \cdot i$. Ker sta $u$ in $i$ zamaknjena, je $p$ del periode negativna: tuljava energijo vrne v omrežje. Zato ločimo tri moči:

- **delovna moč** $P = U I \cos\varphi$ v vatih ($\mathrm{W}$): povprečje, ki se spremeni v toploto ali mehansko delo; to šteje števec;
- **jalova moč** $Q = U I \sin\varphi$ v voltamperih reaktivnih ($\mathrm{var}$): energija, ki niha sem in tja med virom in poljem tuljave ali kondenzatorja;
- **navidezna moč** $S = U I$ v voltamperih ($\mathrm{VA}$): določa tok, ki ga morajo prenesti kabli.

Moči tvorijo **trikotnik moči**: $P$ vodoravno, $Q$ navpično, $S$ hipotenuza, $S^2 = P^2 + Q^2$. Razmerje $\cos\varphi = P/S$ je **faktor moči**.

*Preveri:* koliko je $P$ pri čisti tuljavi? (Nič, ker je $\varphi = 90^\circ$ in $\cos 90^\circ = 0$.)

Sošolec je izračunal $S$, ne $P$. To je jedro napake iz uvoda.

## Rešeni primeri

### Primer 1: dušilka v delavnici

Stara fluorescenčna svetilka v mizarski delavnici ima dušilko (tuljavo) z induktivnostjo $0{,}5\,\mathrm{H}$. Upornost navitja zanemarimo. Kolikšna je reaktanca dušilke in kolikšen tok bi tekel, če bi jo sámo priključili na $230\,\mathrm{V}$, $50\,\mathrm{Hz}$?

**Podatki:** $L = 0{,}5\,\mathrm{H}$, $U = 230\,\mathrm{V}$, $f = 50\,\mathrm{Hz}$, $R \approx 0$
**Iščemo:** reaktanco $X_L$ in tok $I$

:::formula
$X_L = 2\pi f L$, $\quad I = \dfrac{U}{X_L}$
:::

**Rešitev:**

1. Reaktanca, ker je element tuljava: $X_L = 2\pi \cdot 50\,\mathrm{Hz} \cdot 0{,}5\,\mathrm{H} \approx 157{,}1\,\Omega$.
2. Brez upornosti je $Z = X_L$, zato $I = \dfrac{230\,\mathrm{V}}{157{,}1\,\Omega} \approx 1{,}46\,\mathrm{A}$.
3. Odgovor: reaktanca je približno $157\,\Omega$, tok pa $1{,}46\,\mathrm{A}$. Delovna moč je kljub toku enaka nič, ker je $\varphi = 90^\circ$.

### Primer 2: mešalnik iz uvoda

Navitje motorja mešalnika ima pri $50\,\mathrm{Hz}$ upornost $36\,\Omega$ in induktivno reaktanco $48\,\Omega$. Priključeno je na $230\,\mathrm{V}$. Izračunaj tok, faktor moči ter delovno, jalovo in navidezno moč.

**Podatki:** $R = 36\,\Omega$, $X_L = 48\,\Omega$, $U = 230\,\mathrm{V}$
**Iščemo:** $I$, $\cos\varphi$, $P$, $Q$, $S$

:::formula
$Z = \sqrt{R^2 + X_L^2}$, $\quad I = \dfrac{U}{Z}$, $\quad \cos\varphi = \dfrac{R}{Z}$

$P = UI\cos\varphi$, $\quad Q = UI\sin\varphi$, $\quad S = UI$
:::

**Rešitev:**

1. Kazalca $R$ in $X_L$ sta pravokotna: $Z = \sqrt{36^2 + 48^2}\,\Omega = 60\,\Omega$.
2. Tok po Ohmovem zakonu: $I = \dfrac{230\,\mathrm{V}}{60\,\Omega} \approx 3{,}83\,\mathrm{A}$. To je tok s klešč.
3. Faktor moči: $\cos\varphi = \dfrac{36}{60} = 0{,}6$, zato $\sin\varphi = 0{,}8$ in $\varphi \approx 53{,}1^\circ$.
4. Navidezna moč: $S = 230\,\mathrm{V} \cdot 3{,}833\,\mathrm{A} \approx 882\,\mathrm{VA}$.
5. Delovna moč: $P = S \cos\varphi \approx 882 \cdot 0{,}6\,\mathrm{W} \approx 529\,\mathrm{W}$. Preverimo z $I^2 R = 3{,}833^2 \cdot 36 \approx 529\,\mathrm{W}$; toplota in delo nastajata le v »$R$-delu«.
6. Jalova moč: $Q = S \sin\varphi \approx 705\,\mathrm{var}$.
7. Odgovor: tok je $3{,}83\,\mathrm{A}$, $\cos\varphi = 0{,}6$, $P \approx 529\,\mathrm{W}$, $Q \approx 705\,\mathrm{var}$, $S \approx 882\,\mathrm{VA}$. Sošolec je izračunal $S$; števec šteje $P$, zato v eni uri pokaže $0{,}53\,\mathrm{kWh}$.

### Primer 3: kompresor iz meritve in kompenzacija

Električar v kleparski delavnici izmeri na kompresorju napetost $230\,\mathrm{V}$, tok $8\,\mathrm{A}$ in z vatmetrom delovno moč $1{,}29\,\mathrm{kW}$. Kolikšna sta faktor moči in jalova moč? Kolikšen kondenzator, vezan vzporedno, bi jalovo moč povsem kompenziral?

**Podatki:** $U = 230\,\mathrm{V}$, $I = 8\,\mathrm{A}$, $P = 1290\,\mathrm{W}$, $f = 50\,\mathrm{Hz}$
**Iščemo:** $\cos\varphi$, $Q$ in kapacitivnost $C$

:::formula
$S = UI$, $\quad \cos\varphi = \dfrac{P}{S}$, $\quad Q = \sqrt{S^2 - P^2}$

kondenzator: $Q_C = \dfrac{U^2}{X_C} = \omega C U^2$
:::

**Rešitev:**

1. Navidezna moč: $S = 230\,\mathrm{V} \cdot 8\,\mathrm{A} = 1840\,\mathrm{VA}$.
2. Faktor moči: $\cos\varphi = \dfrac{1290}{1840} \approx 0{,}70$, torej $\varphi \approx 45{,}5^\circ$.
3. Jalova moč iz trikotnika moči: $Q = \sqrt{1840^2 - 1290^2}\,\mathrm{var} \approx 1312\,\mathrm{var}$.
4. Kondenzator mora dati enako veliko jalovo moč nasprotnega predznaka: $Q_C = 1312\,\mathrm{var}$.
5. Izrazi $C$ iz $Q_C = \omega C U^2$ in izračunaj sam.

:::premisli
Kolikšen je $C$? Kolikšen tok teče po dovodu po kompenzaciji?
---
$C = \dfrac{Q_C}{2\pi f U^2} = \dfrac{1312}{2\pi \cdot 50 \cdot 230^2}\,\mathrm{F} \approx 79\,\mu\mathrm{F}$. Po kompenzaciji je $S = P$, zato $I = \dfrac{1290\,\mathrm{W}}{230\,\mathrm{V}} \approx 5{,}6\,\mathrm{A}$ namesto $8\,\mathrm{A}$. Kompresor dela enako, kabel pa je manj obremenjen.
:::

## Pogoste napake

- **»Moč je vedno $UI$.«** To velja le za grelce in žarnice z nitko, kjer je $\varphi = 0$. Pri motorjih je $UI$ navidezna moč v $\mathrm{VA}$. Delovno moč dobiš šele s faktorjem $\cos\varphi$.
- **Upornost in reaktanco seštejemo.** $Z = R + X_L$ je napačno, ker napetosti na $R$ in na $L$ nista v fazi. Kazalca sta pravokotna, zato $Z = \sqrt{R^2 + X^2}$.
- **»$230\,\mathrm{V}$ je največja napetost.«** Je efektivna vrednost. Vrh je $325\,\mathrm{V}$, kar je pomembno pri izbiri izolacije in kondenzatorjev. V formulah za moč pa uporabljaš $230\,\mathrm{V}$, ne $325\,\mathrm{V}$.
- **»Jalova moč se porabi in jo plačamo kot toploto.«** Jalova energija niha med virom in tuljavo ter se ne spremeni v delo. Škodi pa posredno: poveča tok, zato se bolj grejejo kabli in transformatorji.
- **»Pri višji frekvenci ima kondenzator večji upor.«** Obratno: $X_C = \dfrac{1}{\omega C}$ pada s frekvenco. S frekvenco raste $X_L$.

## Povzetek

- Omrežje: $230\,\mathrm{V}$ efektivno, $f = 50\,\mathrm{Hz}$, vrh $U_\mathrm{m} = \sqrt{2}\,U \approx 325\,\mathrm{V}$.
- Kazalec: puščica z dolžino efektivne vrednosti; kot med $U$ in $I$ je fazni kot $\varphi$.
- Reaktanci: $X_L = \omega L$ (tok zaostaja $90^\circ$), $X_C = 1/(\omega C)$ (tok prehiteva $90^\circ$).
- Impedanca: $Z = \sqrt{R^2 + (X_L - X_C)^2}$, $I = U/Z$, $\cos\varphi = R/Z$.
- Moči: $P = UI\cos\varphi$ (W), $Q = UI\sin\varphi$ (var), $S = UI$ (VA), $S^2 = P^2 + Q^2$.
- Kompenzacija: vzporedni kondenzator zmanjša $Q$ in tok, $P$ ostane enak.

## Drugače: Na sliki

Nariši vodoravno puščico toka $I$. Ker je pri zaporedni vezavi tok skupen, je to referenca.

- Napetost na uporniku $U_R = IR$ leži na isti vodoravnici, ker je v fazi s tokom.
- Napetost na tuljavi $U_L = I X_L$ kaže navpično navzgor, ker ji tok sledi z zamikom $90^\circ$.
- Napetost na kondenzatorju $U_C = I X_C$ bi kazala navpično navzdol.

Postavi $U_L$ na konec $U_R$. Puščica od začetka $U_R$ do konca $U_L$ je napetost vira $U$. Dobiš pravokotni trikotnik, kot $\varphi$ je ob ogljišču začetka.

Vse stranice deli s tokom $I$: dobiš trikotnik $R$, $X$, $Z$. Vse pomnoži s tokom $I$: dobiš trikotnik $P$, $Q$, $S$. Trije trikotniki so si podobni, zato imajo isti kot $\varphi$. Za mešalnik iz Primera 2 so stranice v razmerju $3 : 4 : 5$.

## Drugače: Bolj natančno

Kazalec je kompleksno število. Napetost $u(t) = \sqrt{2}\,U\sin(\omega t)$ zapišemo kot $\underline{U} = U\,e^{j0}$, kjer je $j^2 = -1$. Iz $u_L = L\,\dfrac{\mathrm{d}i}{\mathrm{d}t}$ sledi, da odvod sinusa pomeni množenje kazalca z $j\omega$. Zato:

$$\underline{Z}_R = R, \quad \underline{Z}_L = j\omega L, \quad \underline{Z}_C = \frac{1}{j\omega C} = -\frac{j}{\omega C}$$

Zaporedne impedance seštevamo kot kompleksna števila: $\underline{Z} = R + j(X_L - X_C)$. Absolutna vrednost je $Z = \sqrt{R^2 + X^2}$, argument pa $\varphi$. Vzporedne vezave računamo kot upornike: $\dfrac{1}{\underline{Z}} = \dfrac{1}{\underline{Z}_1} + \dfrac{1}{\underline{Z}_2}$.

Povprečna moč: naj bo $u = \sqrt{2}\,U\sin\omega t$ in $i = \sqrt{2}\,I\sin(\omega t - \varphi)$. Tedaj

$$p(t) = UI\cos\varphi - UI\cos(2\omega t - \varphi)$$

Drugi člen niha z dvojno frekvenco in ima povprečje nič. Ostane $P = UI\cos\varphi$. Kompleksna moč je $\underline{S} = \underline{U}\,\underline{I}^{*} = P + jQ$.

Efektivna vrednost je koren povprečja kvadrata: $U = \sqrt{\dfrac{1}{T}\displaystyle\int_0^T u^2\,\mathrm{d}t}$. Ker je povprečje $\sin^2$ enako $\tfrac12$, dobimo $U = U_\mathrm{m}/\sqrt{2}$.

## Preveri se

? Katera trditev o idealni tuljavi na izmenični napetosti je pravilna?
- Tok je v fazi z napetostjo, ker tuljava nima upornosti.
~ V fazi je tok le pri uporniku. Pri tuljavi tok zaostaja za $90^\circ$.
+ Tok teče, delovna moč pa je enaka nič.
- Tuljava porabi moč $UI$, ki se spremeni v toploto.
~ $UI$ je navidezna moč. Pri $\varphi = 90^\circ$ je $P = UI\cos\varphi = 0$; energija le niha.
- Pri višji frekvenci skozi tuljavo teče večji tok.
~ $X_L = \omega L$ s frekvenco raste, zato tok pada. Narašča tok skozi kondenzator.
> Tok zaostaja za $90^\circ$, zato je $\cos\varphi = 0$ in $P = 0$. Tuljava energijo v enem delu periode sprejme, v drugem vrne.

? Upornik $40\,\Omega$ in tuljava z $X_L = 30\,\Omega$ sta zaporedno na $230\,\mathrm{V}$. Kolikšen je tok?
- $3{,}29\,\mathrm{A}$
~ To je $\dfrac{230}{40 + 30}$. Upornosti in reaktance ne seštevamo kot števil, ker nista v fazi.
- $5{,}75\,\mathrm{A}$
~ To je $\dfrac{230}{40}$, kot da tuljave ni. Tudi reaktanca zmanjša tok.
+ $4{,}6\,\mathrm{A}$
> $Z = \sqrt{40^2 + 30^2}\,\Omega = 50\,\Omega$, $I = \dfrac{230\,\mathrm{V}}{50\,\Omega} = 4{,}6\,\mathrm{A}$.

? Rešitev naloge: »$U = 230\,\mathrm{V}$, $I = 6\,\mathrm{A}$, $\cos\varphi = 0{,}8$. (1) $S = UI = 1380\,\mathrm{VA}$. (2) $P = S\cos\varphi = 1104\,\mathrm{W}$. (3) $Q = S - P = 276\,\mathrm{var}$.« Kje je napaka?
- V koraku (1): navidezno moč moramo računati s temensko vrednostjo $325\,\mathrm{V}$.
~ Merilniki in formule za moč uporabljajo efektivne vrednosti, zato je $230\,\mathrm{V}$ pravilno.
- V koraku (2): pravilno je $P = UI = 1380\,\mathrm{W}$.
~ $UI$ je navidezna moč. Delovna moč vsebuje še faktor $\cos\varphi$.
+ V koraku (3): pravilno je $Q = \sqrt{S^2 - P^2} = 828\,\mathrm{var}$.
> $P$ in $Q$ sta pravokotni stranici trikotnika moči, zato ju ne odštevamo. $Q = \sqrt{1380^2 - 1104^2}\,\mathrm{var} = 828\,\mathrm{var}$.

? Stroja v delavnici imata pri $230\,\mathrm{V}$ enako delovno moč $1\,\mathrm{kW}$. Prvi ima $\cos\varphi = 1$, drugi $\cos\varphi = 0{,}5$. Kaj velja za tok?
- Tok je pri obeh enak, ker imata enako moč.
~ Enaka je le delovna moč. Tok določa navidezna moč $S = P/\cos\varphi$.
+ Drugi vleče dvakrat večji tok ($8{,}7\,\mathrm{A}$ namesto $4{,}3\,\mathrm{A}$).
- Drugi vleče polovico toka, ker polovico moči »vrne« omrežju.
~ Vrnjena jalova energija ne zmanjša toka, ampak ga poveča: tok mora nositi tudi jalovo moč.
> $I = \dfrac{P}{U\cos\varphi}$. Pri $\cos\varphi = 0{,}5$ je tok dvakrat večji, zato drugi stroj potrebuje debelejši kabel.

? Obrtnik z mnogimi motorji v lesni delavnici dobi na računu postavko za jalovo energijo. Električar vgradi kondenzatorsko baterijo. Kaj se zgodi?
- Motorji porabijo manj delovne moči in delajo počasneje.
~ Kondenzatorji ne spremenijo dela motorjev; $P$ ostane enaka.
- Kondenzatorji shranijo odvečno delovno energijo za kasneje.
~ Kondenzator izmenjuje le jalovo energijo z motorji. Delovne energije ne shranjuje.
+ Jalovo moč motorjem dajejo kondenzatorji, zato iz omrežja teče manjši tok.
> Kondenzator ima jalovo moč nasprotnega predznaka kot tuljava. Skupni $Q$ pade, $\cos\varphi$ se približa $1$, tok v dovodu se zmanjša, $P$ pa ostane enaka.
