---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Odpri pipo čisto malo. Curek je gladek in prozoren, kot steklena palica. Odpri jo bolj in curek postane razmršen, šumi in se peni. Voda je ista, cev je ista, spremenila se je le hitrost. Med pa iz kozarca teče gladko tudi takrat, ko ga zlivaš hitro.

Bernoullijeva enačba teh razlik ne pozna: v njej tekočina nima notranjega trenja. V realnih ceveh, črpalkah in reaktorjih pa je trenje ključno. Od njega je odvisno, kolikšen tlak izgubimo v cevovodu, kako dobro se snovi mešajo in kako hitro se prenaša toplota. Zato moraš za vsak tok najprej vedeti dve stvari: kako »gosta« je tekočina (**viskoznost**) in ali teče urejeno ali vrtinčasto (**Reynoldsovo število**).

## Razlaga

**1. Viskoznost kot notranje trenje.** Predstavljaj si tanko plast tekočine med dvema vzporednima ploščama. Spodnja plošča miruje, zgornjo vlečemo s stalno hitrostjo. Tekočina se drži obeh plošč: ob spodnji miruje, ob zgornji se giblje z njo. Vmes se plasti tekočine drsajo druga ob drugi, vsaka nekoliko hitreje od tiste pod njo.

Diagram v besedah (prerez, hitrost plasti je dolžina puščice):

```
zgornja plošča  ==========>  v
                --------->
                ------>
                --->
spodnja plošča  ==========   0
```

Za vlečenje potrebujemo silo. Sila na enoto ploskve je **strižna napetost** $\tau$ (v Pa). Spremembi hitrosti s prečno razdaljo $\dfrac{\mathrm{d}v}{\mathrm{d}y}$ rečemo **strižna hitrost** (v $\mathrm{s^{-1}}$).

**2. Newtonov zakon viskoznosti.** Pri vodi, zraku in večini preprostih tekočin je strižna napetost sorazmerna s strižno hitrostjo:

$$\tau = \mu \frac{\mathrm{d}v}{\mathrm{d}y}$$

Sorazmernostni koeficient $\mu$ je **dinamična viskoznost**. Enota je $\mathrm{Pa \cdot s}$. Starejša enota je centipoise: $1\,\mathrm{cP} = 1\,\mathrm{mPa \cdot s} = 10^{-3}\,\mathrm{Pa \cdot s}$. Tekočine, za katere velja ta zakon, so **newtonske**.

**3. Kinematična viskoznost.** Pogosto nastopa razmerje viskoznosti in gostote:

$$\nu = \frac{\mu}{\rho}$$

To je **kinematična viskoznost**, enota $\mathrm{m^2/s}$. Pove, kako hitro se »razširi« motnja hitrosti v tekočini.

| Snov (20 °C) | $\mu$ [Pa·s] | $\nu$ [m²/s] |
|---|---|---|
| zrak | $1{,}8 \cdot 10^{-5}$ | $1{,}5 \cdot 10^{-5}$ |
| voda | $1{,}0 \cdot 10^{-3}$ | $1{,}0 \cdot 10^{-6}$ |
| olivno olje | $\approx 0{,}08$ | $\approx 8{,}8 \cdot 10^{-5}$ |
| glicerol | $1{,}41$ | $1{,}1 \cdot 10^{-3}$ |

Zrak ima okoli 55-krat manjšo dinamično viskoznost kot voda, a 15-krat večjo kinematično. Razlog je zelo majhna gostota zraka.

**4. Viskoznost in temperatura.** Pri kapljevinah viskoznost s temperaturo močno pada: molekule se lažje odtrgajo od sosed. Pri plinih je obratno: viskoznost s temperaturo raste, ker hitrejše molekule med plastmi prenesejo več gibalne količine.

:::premisli
Motorno olje in zrak segrejemo z $20\,^\circ\mathrm{C}$ na $80\,^\circ\mathrm{C}$. Kako se spremeni viskoznost vsake snovi? Napovej, preden pogledaš.
---
Olju viskoznost močno pade (večkrat), ker se molekule kapljevine lažje premikajo druga mimo druge. Zraku viskoznost naraste (za okoli $15\,\%$), ker je pri plinu viskoznost posledica prenosa gibalne količine med trki, ta pa s hitrostjo molekul raste.
:::

**5. Reynoldsov poskus.** Osborne Reynolds je v stekleno cev z vodo vbrizgal tanko nit barvila. Pri majhni hitrosti je nit ostala ravna in ostra do konca cevi. Tak tok je **laminaren**: plasti tečejo vzporedno, brez mešanja. Pri veliki hitrosti se je nit po kratki razdalji raztrgala in barvilo je obarvalo ves presek. Tak tok je **turbulenten**: se hitrost na vsakem mestu nenehno spreminja po smeri in velikosti, nastajajo vrtinci.

**6. Reynoldsovo število.** Reynolds je ugotovil, da o vrsti toka ne odloča hitrost sama, ampak kombinacija štirih količin:

$$\mathrm{Re} = \frac{\rho\, v\, D}{\mu} = \frac{v\, D}{\nu}$$

Tu je $v$ povprečna hitrost (prostorninski pretok, deljen s presekom), $D$ notranji premer cevi. Re je **brezdimenzijsko**: enote se pokrajšajo. Pomeni razmerje med vztrajnostnimi silami (ki motnje ojačajo) in viskoznimi silami (ki jih dušijo).

Za tok v ravni okrogli cevi velja:

- $\mathrm{Re} < 2100$: laminarni tok,
- $2100 < \mathrm{Re} < 4000$: prehodno območje (tok je nestabilen),
- $\mathrm{Re} > 4000$: turbulentni tok.

Meja $2100$ je dogovorna; nekateri viri navajajo $2300$. V zelo gladkih cevih brez motenj se laminarni tok lahko ohrani tudi do precej večjih Re.

**7. Profil hitrosti.** Ob steni je hitrost vedno nič. V laminarnem toku je profil parabola, največja hitrost na osi je dvakrat večja od povprečne. V turbulentnem toku vrtinci premešajo tekočino, zato je profil sredi cevi skoraj raven, povprečna hitrost je približno $0{,}8$ največje.

:::premisli
Skozi cev teče stalen prostorninski pretok. Cev zamenjamo s cevjo z dvakrat večjim premerom. Ali se Re poveča, zmanjša ali ostane enak?
---
Zmanjša se na polovico. Presek je štirikrat večji, zato je hitrost štirikrat manjša. Premer je v števcu dvakrat večji. Skupaj: $\mathrm{Re}$ se spremeni za faktor $\frac{2}{4} = \frac{1}{2}$. Pri stalnem pretoku je $\mathrm{Re} = \dfrac{4 \rho Q}{\pi \mu D}$.
:::

## Rešeni primeri

### Primer 1 (lažji): voda v cevi

Voda pri $20\,^\circ\mathrm{C}$ teče s povprečno hitrostjo $0{,}8\,\mathrm{m/s}$ po cevi z notranjim premerom $2{,}5\,\mathrm{cm}$. Gostota vode je $998\,\mathrm{kg/m^3}$, viskoznost $1{,}0\,\mathrm{mPa \cdot s}$. Ali je tok laminaren ali turbulenten?

**Podatki:** $v = 0{,}8\,\mathrm{m/s}$, $D = 2{,}5\,\mathrm{cm}$, $\rho = 998\,\mathrm{kg/m^3}$, $\mu = 1{,}0\,\mathrm{mPa \cdot s}$
**Iščemo:** $\mathrm{Re}$ in vrsto toka

:::formula
$\mathrm{Re} = \dfrac{\rho\, v\, D}{\mu}$
:::

**Rešitev:**

1. Pretvorimo v osnovne enote SI: $D = 0{,}025\,\mathrm{m}$, $\mu = 1{,}0 \cdot 10^{-3}\,\mathrm{Pa \cdot s}$.
2. Vstavimo: $\mathrm{Re} = \dfrac{998 \cdot 0{,}8 \cdot 0{,}025}{0{,}001} = 19960$.
3. Primerjamo z mejo: $19960 > 4000$, torej smo daleč v turbulentnem območju.
4. Odgovor: $\mathrm{Re} \approx 2{,}0 \cdot 10^4$, tok je turbulenten.

### Primer 2: olje, dan je pretok

Olje ($\rho = 880\,\mathrm{kg/m^3}$, $\mu = 0{,}10\,\mathrm{Pa \cdot s}$) črpamo s prostorninskim pretokom $2{,}0\,\mathrm{L/s}$ po cevi s premerom $5{,}0\,\mathrm{cm}$. Kakšen je tok?

**Podatki:** $\rho = 880\,\mathrm{kg/m^3}$, $\mu = 0{,}10\,\mathrm{Pa \cdot s}$, $Q = 2{,}0\,\mathrm{L/s}$, $D = 5{,}0\,\mathrm{cm}$
**Iščemo:** povprečno hitrost $v$, $\mathrm{Re}$ in vrsto toka

:::formula
$v = \dfrac{Q}{A}$, $A = \dfrac{\pi D^2}{4}$, nato $\mathrm{Re} = \dfrac{\rho\, v\, D}{\mu}$
:::

**Rešitev:**

1. Enote: $Q = 0{,}0020\,\mathrm{m^3/s}$, $D = 0{,}050\,\mathrm{m}$.
2. Presek: $A = \dfrac{\pi \cdot (0{,}050\,\mathrm{m})^2}{4} \approx 1{,}96 \cdot 10^{-3}\,\mathrm{m^2}$.
3. Hitrost iz kontinuitetne enačbe: $v = \dfrac{0{,}0020\,\mathrm{m^3/s}}{1{,}96 \cdot 10^{-3}\,\mathrm{m^2}} \approx 1{,}02\,\mathrm{m/s}$.
4. $\mathrm{Re} = \dfrac{880 \cdot 1{,}02 \cdot 0{,}050}{0{,}10} \approx 448$.
5. $448 < 2100$, zato je tok laminaren, čeprav je hitrost večja kot pri vodi v primeru 1. Odloča velika viskoznost.
6. Odgovor: $\mathrm{Re} \approx 450$, olje teče laminarno.

### Primer 3 (težji): največji pretok za laminarni tok

V laboratoriju želimo z vodo ($\rho = 998\,\mathrm{kg/m^3}$, $\mu = 1{,}0 \cdot 10^{-3}\,\mathrm{Pa \cdot s}$) v cevki s premerom $1{,}0\,\mathrm{cm}$ prikazati laminarni tok. Kolikšen je največji prostorninski pretok v litrih na minuto, pri katerem je $\mathrm{Re} \le 2100$?

**Podatki:** $\rho = 998\,\mathrm{kg/m^3}$, $\mu = 1{,}0 \cdot 10^{-3}\,\mathrm{Pa \cdot s}$, $D = 1{,}0\,\mathrm{cm}$, $\mathrm{Re}_\mathrm{krit} = 2100$
**Iščemo:** največji pretok $Q_\mathrm{max}$ v $\mathrm{L/min}$

:::formula
$v = \dfrac{\mathrm{Re}\, \mu}{\rho\, D}$, nato $Q = v \cdot \dfrac{\pi D^2}{4}$
:::

**Rešitev:**

1. Obrnemo definicijo Re, ker zdaj poznamo Re in iščemo hitrost: $v = \dfrac{\mathrm{Re}\,\mu}{\rho\,D}$.
2. $v = \dfrac{2100 \cdot 0{,}001}{998 \cdot 0{,}010} \approx 0{,}210\,\mathrm{m/s}$.
3. Presek: $A = \dfrac{\pi \cdot (0{,}010\,\mathrm{m})^2}{4} \approx 7{,}85 \cdot 10^{-5}\,\mathrm{m^2}$.
4. $Q = v A \approx 0{,}210\,\mathrm{m/s} \cdot 7{,}85 \cdot 10^{-5}\,\mathrm{m^2} \approx 1{,}65 \cdot 10^{-5}\,\mathrm{m^3/s}$.
5. Pretvorimo: $1{,}65 \cdot 10^{-5}\,\mathrm{m^3/s} = 0{,}0165\,\mathrm{L/s}$, pomnožimo s $60\,\mathrm{s/min}$ in dobimo $\approx 0{,}99\,\mathrm{L/min}$.
6. Odgovor: laminarni tok dobimo le pri pretoku pod približno $1\,\mathrm{L/min}$. Zato voda v ceveh skoraj vedno teče turbulentno.

### Primer 4: zdaj ti

Zrak s kinematično viskoznostjo $1{,}5 \cdot 10^{-5}\,\mathrm{m^2/s}$ teče s povprečno hitrostjo $3{,}0\,\mathrm{m/s}$ po prezračevalnem kanalu okroglega preseka s premerom $20\,\mathrm{cm}$. Kakšen je tok?

**Podatki:** $\nu = 1{,}5 \cdot 10^{-5}\,\mathrm{m^2/s}$, $v = 3{,}0\,\mathrm{m/s}$, $D = 20\,\mathrm{cm}$
**Iščemo:** $\mathrm{Re}$ in vrsto toka

:::formula
$\mathrm{Re} = \dfrac{v\, D}{\nu}$
:::

**Rešitev:**

1. Dana je kinematična viskoznost, zato gostote ne potrebujemo: že vsebovana je v $\nu$.
2. Premer v metrih: $D = 0{,}20\,\mathrm{m}$.
3. Izračunaj Re in odloči sam, nato preveri:

:::premisli
Koliko je $\mathrm{Re}$ in kakšen je tok?
---
$\mathrm{Re} = \dfrac{3{,}0 \cdot 0{,}20}{1{,}5 \cdot 10^{-5}} = 40\,000$. To je več kot $4000$, tok je turbulenten.
:::

## Pogoste napake

- **»Večja hitrost vedno pomeni turbulenco.«** Hitrost je le ena od štirih količin. Olje v primeru 2 teče hitreje od $1\,\mathrm{m/s}$ in je laminarno, ker ima veliko viskoznost. Odloča vedno $\mathrm{Re}$, ne hitrost sama.
- **Zamenjava $\mu$ in $\nu$.** Kdor v $\mathrm{Re} = \dfrac{\rho v D}{\mu}$ vstavi kinematično viskoznost, dobi rezultat, ki je za faktor $\rho$ prevelik (pri vodi $1000$-krat). Preveri enote: $\mu$ ima $\mathrm{Pa \cdot s}$, $\nu$ ima $\mathrm{m^2/s}$. Z $\nu$ uporabi obliko $\dfrac{vD}{\nu}$.
- **Nepretvorjene enote.** Premer v centimetrih ali viskoznost v cP ($\mathrm{mPa \cdot s}$) da napačen red velikosti. Pred računanjem vse pretvori v m, kg, s in $\mathrm{Pa \cdot s}$; Re mora na koncu ostati brez enote.
- **Polmer namesto premera.** V definiciji za cev je premer $D$. S polmerom dobiš polovico prave vrednosti in lahko napačno sklepaš na laminarni tok.
- **»Pri segrevanju vsaka tekočina postane manj viskozna.«** To velja za kapljevine. Plinom viskoznost s temperaturo raste.

## Povzetek

- Viskoznost je notranje trenje tekočine. Newtonov zakon: $\tau = \mu \dfrac{\mathrm{d}v}{\mathrm{d}y}$.
- Dinamična viskoznost $\mu$ v $\mathrm{Pa \cdot s}$ ($1\,\mathrm{cP} = 1\,\mathrm{mPa \cdot s}$); kinematična $\nu = \mu/\rho$ v $\mathrm{m^2/s}$.
- Kapljevinam viskoznost s temperaturo pada, plinom raste.
- $\mathrm{Re} = \dfrac{\rho v D}{\mu} = \dfrac{vD}{\nu}$ je brezdimenzijsko razmerje vztrajnostnih in viskoznih sil.
- V okrogli cevi: $\mathrm{Re} < 2100$ laminarno, $2100$ do $4000$ prehodno, $\mathrm{Re} > 4000$ turbulentno.
- Laminarni profil je parabola ($v_\mathrm{max} = 2\bar v$), turbulentni je sredi cevi skoraj raven.

## Drugače: Iz vsakdanjega življenja

- **Dim cigarete ali kadilne palčke.** Najprej se dviga v ravni, gladki niti (laminarno). Ko se pospeši in je curek širši, Re zraste in nit se nenadoma razbije v vrtince (turbulentno).
- **Pipa.** Tanek, počasen curek je prozoren in gladek. Ko pipo odpreš, curek postane moten, ker vrtinci lomijo površino.
- **Med in voda.** Med ima več tisočkrat večjo viskoznost kot voda. Pri isti hitrosti in isti posodi je njegov Re več tisočkrat manjši, zato med skoraj vedno teče laminarno, v debelem, gladkem traku.
- **Mešanje.** Mleko se v kavi hitro premeša, ko jo zmešaš z žličko (turbulentno). Če ga nežno vliješ in ne mešaš, ostanejo dolgo vidne lise, ker se v laminarnem toku plasti ne mešajo.

## Drugače: Korak za korakom s številkami

Postopek za vsak izračun Re v cevi:

1. Izpiši $\rho$, $\mu$ (ali $\nu$), $D$ in $v$ (ali $Q$).
2. Pretvori v SI: cm v m, L/s v $\mathrm{m^3/s}$, cP v $\mathrm{Pa \cdot s}$ (deli s $1000$).
3. Če je dan pretok, izračunaj $v = \dfrac{4Q}{\pi D^2}$.
4. Izračunaj $\mathrm{Re}$ z $\mu$ ali z $\nu$, nikoli z obema hkrati.
5. Preveri enote: ostati ne sme nič.
6. Primerjaj z $2100$ in $4000$.

Primer za občutek pri vodi ($\nu \approx 10^{-6}\,\mathrm{m^2/s}$): $\mathrm{Re} \approx 10^6 \cdot v \cdot D$ (z $v$ v m/s in $D$ v m). Za cev $D = 0{,}02\,\mathrm{m}$ in $v = 1\,\mathrm{m/s}$ to da $\mathrm{Re} \approx 20\,000$.

## Drugače: Bolj natančno

**Dimenzijska preverba.** $[\rho v D / \mu] = \dfrac{\mathrm{kg\,m^{-3}} \cdot \mathrm{m\,s^{-1}} \cdot \mathrm{m}}{\mathrm{kg\,m^{-1}\,s^{-1}}} = 1$. Re je eno od brezdimenzijskih števil, ki jih da Buckinghamov teorem $\pi$ za tok v cevi.

**Razmerje sil.** Vztrajnostna napetost je reda $\rho v^2$, viskozna reda $\mu v / D$. Njuno razmerje je $\dfrac{\rho v^2}{\mu v / D} = \dfrac{\rho v D}{\mu}$.

**Laminarni tok v cevi (Hagen-Poiseuille).** Iz ravnovesja tlačne in viskozne sile na valj tekočine sledi profil
$$v(r) = v_\mathrm{max}\left(1 - \frac{r^2}{R^2}\right),$$
povprečje po preseku je $\bar v = \dfrac{v_\mathrm{max}}{2}$, tlačni padec na dolžini $L$ pa
$$\Delta p = \frac{32\, \mu\, L\, \bar v}{D^2}.$$
To bo izhodišče za tlačne izgube v ceveh.

**Turbulentni profil.** Približno ga opiše potenčni zakon $v(r) = v_\mathrm{max}\left(1 - \dfrac{r}{R}\right)^{1/7}$. Tik ob steni ostane tanka viskozna podplast, v kateri je tok laminaren.

**Nekrožni preseki.** Namesto $D$ vzamemo hidravlični premer $D_h = \dfrac{4A}{O}$ ($A$ presek, $O$ omočeni obseg). Za krog da $D_h = D$.

**Nenewtonske tekočine.** Pri njih $\mu$ ni stalna. Psevdoplastične (barve, kri, kečap) se pri večji strižni hitrosti redčijo, binghamske (zobna pasta) tečejo šele nad mejno napetostjo. Zanje se Re definira s prilagojeno viskoznostjo.

## Preveri se

? Kaj fizikalno pove Reynoldsovo število?
- Razmerje med tlakom in gostoto tekočine.
~ Tlak v Re ne nastopa. Re primerja sile, ki ohranjajo gibanje, s silami trenja.
+ Razmerje med vztrajnostnimi in viskoznimi silami v toku.
- Hitrost tekočine, preračunano v brezdimenzijsko obliko.
~ Hitrost je le en del Re. Ista hitrost da pri medu in vodi povsem različna Re.
- Koliko energije se izgubi zaradi trenja na enoto dolžine cevi.
~ To so tlačne izgube, ki so od Re odvisne, a niso Re sam.
> $\mathrm{Re} = \dfrac{\rho v D}{\mu}$ primerja vztrajnost ($\rho v^2$) z viskoznim trenjem ($\mu v/D$). Pri velikem Re trenje ne uspe zadušiti motenj in tok postane turbulenten.

? Olje laminarno teče po cevi pri $\mathrm{Re} = 1800$. Olje segrejemo, pretok ostane enak. Kaj se zgodi?
- Re pade, tok ostane še bolj laminaren.
~ Tako bi bilo, če bi viskoznost s temperaturo rasla. Pri kapljevinah pada.
+ Re naraste, tok lahko preide v prehodno ali turbulentno območje.
- Re ostane enak, ker se hitrost ne spremeni.
~ Hitrost res ostane enaka, a $\mu$ v imenovalcu se zmanjša, zato Re zraste.
> Viskoznost olja s temperaturo močno pade. Ker je $\mu$ v imenovalcu, Re zraste in lahko preseže $2100$.

? Zakaj se viskoznost zraka pri segrevanju poveča?
- Ker se zrak pri segrevanju zgosti.
~ Pri stalnem tlaku se segret zrak razredči, ne zgosti.
- Ker se med molekulami okrepijo privlačne sile.
~ Privlačne sile so pomembne pri kapljevinah. Pri plinih viskoznost izvira iz trkov in prenosa gibalne količine.
+ Ker hitrejše molekule med plastmi prenesejo več gibalne količine.
> Pri plinih molekule letijo med hitrejšimi in počasnejšimi plastmi in izenačujejo njihovo hitrost. Pri višji temperaturi je ta prenos hitrejši, zato je trenje večje.

? Kapljevina z $\rho = 1000\,\mathrm{kg/m^3}$ in $\mu = 2\,\mathrm{cP}$ teče s hitrostjo $0{,}5\,\mathrm{m/s}$ po cevi s premerom $4\,\mathrm{cm}$. Koliko je Re?
- $10$
~ Tako dobiš, če cP vstaviš kot $\mathrm{Pa \cdot s}$. $2\,\mathrm{cP} = 0{,}002\,\mathrm{Pa \cdot s}$.
- $5000$
~ To je polovica pravega rezultata: vstavil si polmer $2\,\mathrm{cm}$ namesto premera.
+ $10\,000$
- $1000$
~ Tako dobiš, če premer vstaviš v cm in viskoznost v cP. Obe enoti moraš pretvoriti v SI.
> $\mathrm{Re} = \dfrac{1000 \cdot 0{,}5 \cdot 0{,}04}{0{,}002} = 10\,000$. Tok je turbulenten.

? Olje s kinematično viskoznostjo $1{,}0 \cdot 10^{-4}\,\mathrm{m^2/s}$ in gostoto $900\,\mathrm{kg/m^3}$ teče s hitrostjo $1{,}0\,\mathrm{m/s}$ po cevi s premerom $10\,\mathrm{cm}$. Kakšen je tok?
- Turbulenten, $\mathrm{Re} = 900\,000$.
~ Gostoto si vstavil še enkrat. V $\nu$ je že vsebovana: $\mathrm{Re} = \dfrac{vD}{\nu}$.
+ Laminaren, $\mathrm{Re} = 1000$.
- Turbulenten, ker je hitrost $1\,\mathrm{m/s}$ velika.
~ O vrsti toka ne odloča hitrost sama. Izračunaj Re.
> $\mathrm{Re} = \dfrac{1{,}0 \cdot 0{,}10}{1{,}0 \cdot 10^{-4}} = 1000 < 2100$, tok je laminaren.
