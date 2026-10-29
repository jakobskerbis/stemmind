---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Magnetno polje in električni tok sta tesno povezana: tok ustvarja magnetno polje, magnetno polje deluje na gibajoče se naboje, spreminjajoče se magnetno polje pa v vodniku inducira napetost. Na teh treh pojavih temelji večina elektrotehnike: elektromotor, generator v elektrarni, transformator, indukcijska kuhalna plošča, brezžično polnjenje telefona.

V naravoslovju in medicini so magnetna polja merilno orodje. **Masni spektrometer** loči ione po masi, ker jih magnetno polje ukrivi različno močno. **Jedrska magnetna resonanca** (NMR) v kemiji in **magnetnoresonančno slikanje** (MRI) v medicini uporabljata močna polja tuljav s superprevodnimi navitji. Ptice selivke in nekatere bakterije se orientirajo po zemeljskem magnetnem polju.

V tej lekciji spoznaš:

- **Lorentzovo silo** na gibajoč se naboj in silo na vodnik s tokom,
- **Amperov zakon**, s katerim izračunamo polje ravnega vodnika in tuljave,
- **indukcijski zakon** in Lenzovo pravilo, ki opisujeta nastanek inducirane napetosti.

## Razlaga

**1. Gostota magnetnega polja.** Magnetno polje opišemo z vektorjem **gostote magnetnega polja** $\vec{B}$. Enota je **tesla**, $1\,\mathrm{T} = 1\,\mathrm{V\,s/m^2}$. Zemeljsko polje je okoli $50\,\mu\mathrm{T}$, magnet na hladilniku okoli $10\,\mathrm{mT}$, močan neodimov magnet ob površini do okoli $1\,\mathrm{T}$, magnet v napravi MRI $1{,}5$ do $3\,\mathrm{T}$. Polje ponazorimo s **silnicami**, ki so vedno sklenjene: magnetnih »nabojev« (samostojnih polov) ni.

**2. Lorentzova sila.** Na naboj $q$, ki se giblje s hitrostjo $\vec{v}$ v magnetnem polju, deluje sila

$$\vec{F} = q\,\vec{v} \times \vec{B}, \qquad F = |q|vB\sin\theta.$$

Sila je pravokotna na hitrost in na polje; smer dobimo s pravilom desne roke (za negativen naboj je nasprotna). Naboj, ki se giblje vzporedno s poljem, ne čuti sile. Ker je sila pravokotna na hitrost, **ne opravlja dela**: spremeni smer, ne pa velikosti hitrosti. Če sta prisotni tudi električno in magnetno polje, je celotna sila $\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$.

**3. Kroženje naboja.** Če naboj prileti pravokotno na homogeno polje, ga Lorentzova sila sili na krožnico. Ta sila je centripetalna, $|q|vB = mv^2/r$, zato je polmer

$$r = \frac{mv}{|q|B}, \qquad \omega = \frac{|q|B}{m}.$$

Krožna frekvenca (**ciklotronska frekvenca**) ni odvisna od hitrosti. Na tem delujeta ciklotron in masni spektrometer: ioni z enako energijo in nabojem, a različno maso, opišejo krožnice z različnim polmerom.

**4. Sila na vodnik s tokom.** Tok so gibajoči se naboji, zato na raven vodnik z dolžino $l$ in tokom $I$ v polju $\vec{B}$ deluje sila

$$\vec{F} = I\,\vec{l} \times \vec{B}, \qquad F = IlB\sin\theta,$$

kjer $\vec{l}$ kaže v smeri toka. Na zanko s tokom v polju deluje navor; na tem deluje elektromotor in merilnik toka z vrtljivo tuljavico.

**5. Amperov zakon.** Tok ustvarja magnetno polje. Za vsako sklenjeno pot velja **Amperov zakon**:

$$\oint\vec{B} \cdot \mathrm{d}\vec{s} = \mu_0I,$$

kjer je $I$ celotni tok, ki gre skozi ploskev, ki jo pot objema, in $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{V\,s/(A\,m)}$ **indukcijska konstanta**. Zakon je uporaben, kadar ima polje veliko simetrije.

- **Dolg raven vodnik.** Silnice so krožnice okoli vodnika. Za krožnico s polmerom $r$ je $B \cdot 2\pi r = \mu_0I$, torej
$$B = \frac{\mu_0I}{2\pi r}.$$
Smer: palec desne roke v smeri toka, prsti kažejo smer silnic.
- **Dolga tuljava** z $N$ ovoji na dolžini $l$. V notranjosti je polje homogeno in vzporedno z osjo, zunaj pa skoraj nič. Pravokotna pot z eno stranico dolžine $x$ v notranjosti objame $Nx/l$ ovojev:
$$B = \frac{\mu_0NI}{l}.$$

Polje v središču krožne zanke s polmerom $R$ je $B = \mu_0I/(2R)$; to izračunamo z Biot-Savartovim zakonom, ker Amperov tu ni dovolj.

**6. Sila med vzporednima vodnikoma.** Vodnik 1 ustvari na mestu vodnika 2 polje $\mu_0I_1/(2\pi r)$, ki deluje na vodnik 2 s silo $F/l = \mu_0I_1I_2/(2\pi r)$. Vodnika z istosmernima tokovoma se privlačita, z nasprotnima se odbijata.

**7. Magnetni pretok.** Skozi ploskev s površino $S$ v homogenem polju je **magnetni pretok**

$$\Phi_m = BS\cos\theta = \vec{B} \cdot \vec{S},$$

kjer je $\theta$ kot med poljem in normalo na ploskev. Enota je **weber**, $1\,\mathrm{Wb} = 1\,\mathrm{V\,s}$.

**8. Indukcijski zakon.** Ko se magnetni pretok skozi zanko spreminja, se v zanki **inducira napetost**:

$$U_i = -N\,\frac{\mathrm{d}\Phi_m}{\mathrm{d}t}$$

za tuljavo z $N$ ovoji. Pretok lahko spremenimo s spremembo polja, površine ali kota. **Lenzovo pravilo** (minus v enačbi) pove smer: inducirani tok teče tako, da njegovo magnetno polje nasprotuje spremembi pretoka, ki ga je povzročila. To je posledica ohranitve energije.

**9. Gibajoč se vodnik.** Palica z dolžino $l$, ki se giblje s hitrostjo $v$ pravokotno na polje $B$, pri čemer je tudi sama pravokotna na polje, ima med koncema inducirano napetost

$$U_i = Blv.$$

To sledi iz Lorentzove sile na elektrone v palici ali iz spremembe pretoka skozi zanko, ki jo palica zapira.

**10. Generator in transformator.** Tuljava z $N$ ovoji in površino $S$, ki se vrti s kotno hitrostjo $\omega$ v homogenem polju, ima pretok $BS\cos\omega t$, zato se v njej inducira izmenična napetost $U_i = NBS\omega\sin\omega t$. V **transformatorju** dve tuljavi na skupnem železnem jedru objemata isti pretok, zato je razmerje napetosti enako razmerju števil ovojev: $U_2/U_1 = N_2/N_1$.

**11. Samoindukcija.** Tok skozi tuljavo ustvari pretok skozi lastne ovoje. Ko se tok spreminja, se inducira napetost $U_i = -L\,\mathrm{d}I/\mathrm{d}t$, kjer je $L$ **induktivnost** (enota henry, $1\,\mathrm{H} = 1\,\mathrm{V\,s/A}$). Za dolgo tuljavo je $L = \mu_0N^2S/l$, shranjena energija pa $W = \tfrac{1}{2}LI^2$.

## Rešeni primeri

### Primer 1 (lažji)

Po dolgem ravnem vodniku teče tok $10\,\mathrm{A}$. Kolikšna je gostota magnetnega polja na razdalji $2{,}0\,\mathrm{cm}$ od vodnika? Vzporedno z njim na tej razdalji napnemo drugi vodnik, po katerem teče tok $5{,}0\,\mathrm{A}$ v isti smeri. S kolikšno silo deluje prvi vodnik na $1{,}0\,\mathrm{m}$ drugega vodnika in v katero smer?

**Podatki:** $I_1 = 10\,\mathrm{A}$, $r = 2{,}0\,\mathrm{cm} = 0{,}020\,\mathrm{m}$, $I_2 = 5{,}0\,\mathrm{A}$ (ista smer), $l = 1{,}0\,\mathrm{m}$, $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{V\,s/(A\,m)}$
**Iščemo:** gostoto polja $B$ in silo $F$ na drugi vodnik

:::formula
$B = \dfrac{\mu_0I_1}{2\pi r}$, $F = I_2lB$
:::

**Rešitev:**

1. $B = 4\pi \cdot 10^{-7} \cdot 10/(2\pi \cdot 0{,}020)\,\mathrm{T} = 2 \cdot 10^{-7} \cdot 10/0{,}020\,\mathrm{T} = 1{,}0 \cdot 10^{-4}\,\mathrm{T}$.
2. To je $100\,\mu\mathrm{T}$, dvakrat več od zemeljskega polja; zato vodniki s tokom motijo kompas.
3. Polje je pravokotno na drugi vodnik, zato $F = I_2lB = 5{,}0 \cdot 1{,}0 \cdot 1{,}0 \cdot 10^{-4}\,\mathrm{N} = 5{,}0 \cdot 10^{-4}\,\mathrm{N}$.
4. Odgovor: polje na razdalji $2{,}0\,\mathrm{cm}$ je $1{,}0 \cdot 10^{-4}\,\mathrm{T}$; vodnika se privlačita, sila na meter drugega vodnika je $0{,}50\,\mathrm{mN}$.

### Primer 2

V masnem spektrometru enkrat pozitivno nabite ione ogljika pospešimo z napetostjo $2000\,\mathrm{V}$ iz mirovanja, nato pa vstopijo pravokotno v homogeno magnetno polje $0{,}20\,\mathrm{T}$, kjer opišejo polkrožnico in zadenejo detektor. Kolikšna je hitrost iona $\mathrm{^{12}C^+}$, kolikšna sta polmera tirnic za $\mathrm{^{12}C^+}$ in $\mathrm{^{13}C^+}$ in kako daleč narazen zadeneta detektor? Atomska enota mase je $1{,}66 \cdot 10^{-27}\,\mathrm{kg}$; maso elektrona zanemarimo.

**Podatki:** $q = +e_0 = 1{,}602 \cdot 10^{-19}\,\mathrm{C}$, $U = 2000\,\mathrm{V}$, $B = 0{,}20\,\mathrm{T}$, $m_{12} = 12\,\mathrm{u}$, $m_{13} = 13\,\mathrm{u}$, $1\,\mathrm{u} = 1{,}66 \cdot 10^{-27}\,\mathrm{kg}$, ioni vstopijo pravokotno na polje
**Iščemo:** hitrost $v_{12}$, polmera $r_{12}$ in $r_{13}$, razdaljo med mestoma zadetka $\Delta x$

:::formula
$e_0U = \tfrac{1}{2}mv^2$, $r = \dfrac{mv}{e_0B} = \dfrac{1}{B}\sqrt{\dfrac{2mU}{e_0}}$, $\Delta x = 2(r_{13} - r_{12})$
:::

**Rešitev:**

1. $m_{12} = 12 \cdot 1{,}66 \cdot 10^{-27}\,\mathrm{kg} \approx 1{,}99 \cdot 10^{-26}\,\mathrm{kg}$.
2. $v_{12} = \sqrt{2e_0U/m_{12}} = \sqrt{2 \cdot 1{,}602 \cdot 10^{-19} \cdot 2000/1{,}99 \cdot 10^{-26}}\,\mathrm{m/s} \approx 1{,}79 \cdot 10^5\,\mathrm{m/s}$.
3. $r_{12} = m_{12}v_{12}/(e_0B) = 1{,}99 \cdot 10^{-26} \cdot 1{,}79 \cdot 10^5/(1{,}602 \cdot 10^{-19} \cdot 0{,}20)\,\mathrm{m} \approx 0{,}1115\,\mathrm{m}$ (natančneje $0{,}11152\,\mathrm{m}$).
4. Ker je $r \propto \sqrt{m}$: $r_{13} = r_{12}\sqrt{13/12} \approx 0{,}11608\,\mathrm{m}$.
5. Ioni zadenejo detektor po polovici kroga, torej na razdalji premera od vstopa: $\Delta x = 2(0{,}11608 - 0{,}11152)\,\mathrm{m} \approx 9{,}1\,\mathrm{mm}$.
6. Odgovor: ion $\mathrm{^{12}C^+}$ ima hitrost okoli $1{,}8 \cdot 10^5\,\mathrm{m/s}$ in kroži s polmerom $11{,}2\,\mathrm{cm}$, ion $\mathrm{^{13}C^+}$ s polmerom $11{,}6\,\mathrm{cm}$; izotopa zadeneta detektor približno $9\,\mathrm{mm}$ narazen.

### Primer 3 (težji)

Kovinska palica z dolžino $0{,}50\,\mathrm{m}$ drsi brez trenja po dveh vzporednih vodoravnih tirnicah, ki sta na enem koncu povezani z uporom $0{,}80\,\Omega$. Sistem je v navpičnem homogenem magnetnem polju $0{,}40\,\mathrm{T}$. Palico vlečemo s stalno hitrostjo $2{,}0\,\mathrm{m/s}$. Kolikšna je inducirana napetost, kolikšen tok teče, s kolikšno silo moramo vleči palico in kolikšna je moč vlečenja? Upor palice in tirnic zanemarimo.

**Podatki:** $l = 0{,}50\,\mathrm{m}$, $R = 0{,}80\,\Omega$, $B = 0{,}40\,\mathrm{T}$ (pravokotno na ravnino tirnic), $v = 2{,}0\,\mathrm{m/s}$ (stalna), brez trenja, upor palice in tirnic zanemarljiv
**Iščemo:** $U_i$, $I$, silo vlečenja $F$, moč $P$

:::formula
$U_i = Blv$, $I = U_i/R$, $F = IlB$, $P = Fv = I^2R$
:::

**Rešitev:**

1. Inducirana napetost: $U_i = 0{,}40\,\mathrm{T} \cdot 0{,}50\,\mathrm{m} \cdot 2{,}0\,\mathrm{m/s} = 0{,}40\,\mathrm{V}$.
2. Tok: $I = 0{,}40\,\mathrm{V}/0{,}80\,\Omega = 0{,}50\,\mathrm{A}$.
3. Na palico s tokom deluje magnetna sila $F_m = IlB = 0{,}50 \cdot 0{,}50 \cdot 0{,}40\,\mathrm{N} = 0{,}10\,\mathrm{N}$. Po Lenzovem pravilu nasprotuje gibanju (zavira palico).
4. Za stalno hitrost mora biti vlečna sila enako velika: $F = 0{,}10\,\mathrm{N}$.
5. Moč vlečenja: $P = Fv = 0{,}10\,\mathrm{N} \cdot 2{,}0\,\mathrm{m/s} = 0{,}20\,\mathrm{W}$. Preizkus: $I^2R = 0{,}25 \cdot 0{,}80\,\mathrm{W} = 0{,}20\,\mathrm{W}$ ✓.
6. Odgovor: inducira se napetost $0{,}40\,\mathrm{V}$, teče tok $0{,}50\,\mathrm{A}$, palico vlečemo s silo $0{,}10\,\mathrm{N}$ in z močjo $0{,}20\,\mathrm{W}$, ki se v celoti pretvori v toploto na uporu.

## Pogoste napake

- **Lorentzova sila v smeri polja.** Sila je pravokotna na $\vec{B}$ in na $\vec{v}$, ne vzporedna s poljem. Pri gibanju vzdolž silnic je sila nič.
- **Magnetna sila opravlja delo.** Lorentzova sila je pravokotna na hitrost, zato ne spremeni kinetične energije delca. Ione pospeši električno polje, magnetno jih le ukrivi.
- **Napačen predznak naboja.** Za elektron je smer sile nasprotna od tiste, ki jo da pravilo desne roke za $\vec{v} \times \vec{B}$.
- **Polje vodnika z $1/r^2$.** Polje dolgega ravnega vodnika pada z $1/r$, ne z $1/r^2$.
- **Napetost se inducira zaradi polja.** Napetost povzroči **sprememba** pretoka, ne pretok sam. Mirujoča zanka v stalnem polju nima inducirane napetosti, ne glede na velikost polja.
- **Pozabljeno število ovojev.** Pri tuljavi pomnoži spremembo pretoka skozi en ovoj z $N$.

## Povzetek

- Lorentzova sila $\vec{F} = q\vec{v} \times \vec{B}$; kroženje: $r = mv/(|q|B)$, $\omega = |q|B/m$; sila na vodnik $\vec{F} = I\vec{l} \times \vec{B}$.
- Amperov zakon $\oint\vec{B} \cdot \mathrm{d}\vec{s} = \mu_0I$; raven vodnik $B = \mu_0I/(2\pi r)$; dolga tuljava $B = \mu_0NI/l$.
- Magnetni pretok $\Phi_m = BS\cos\theta$.
- Indukcijski zakon $U_i = -N\,\mathrm{d}\Phi_m/\mathrm{d}t$; Lenzovo pravilo: inducirani tok nasprotuje spremembi; gibajoča palica $U_i = Blv$.
- Generator $U_i = NBS\omega\sin\omega t$; transformator $U_2/U_1 = N_2/N_1$; samoindukcija $U_i = -L\,\mathrm{d}I/\mathrm{d}t$.

## Drugače: Na sliki

Silnice okoli ravnega vodnika, ko tok teče iz lista proti tebi ($\odot$):

```
        . - - - .
      /   . - .   \
     |   |  ⊙  |   |      silnice: koncentrične krožnice,
      \   ' - '   /       smer proti urinemu kazalcu
        ' - - - '
```

Čim dlje od vodnika, tem redkejše so silnice, ker polje pada z $1/r$.

Palica na tirnicah iz Primera 3 (polje kaže iz lista, $\odot$):

```
   o------------------------o
   |     ⊙   ⊙   ⊙   |          palica →  v
  [R]    ⊙   ⊙   ⊙   |  l
   |     ⊙   ⊙   ⊙   |
   o------------------------o
```

Ko palica drsi v desno, se površina zanke in s tem pretok povečujeta. Inducirani tok teče tako, da njegovo polje v zanki kaže v list, torej proti povečanju pretoka; sila na palico s tem tokom kaže v levo, proti gibanju.

## Drugače: Iz vsakdanjega življenja

**NMR in MRI.** Jedra vodika imajo magnetni moment, ki v polju $B$ precesira s frekvenco $\nu = \gamma B/(2\pi)$, kjer je za proton $\gamma/(2\pi) \approx 42{,}6\,\mathrm{MHz/T}$. V polju $1{,}5\,\mathrm{T}$ je to okoli $64\,\mathrm{MHz}$. Radijski impulz jedra vzbudi, njihova precesija pa v tuljavi inducira napetost, ki jo izmerimo: indukcijski zakon je torej zadnji člen meritve. Kemijski premik v spektru NMR nastane, ker elektroni okoli jedra nekoliko oslabijo polje, ki ga jedro čuti.

**Indukcijska kuhalna plošča.** Pod steklom je tuljava z izmeničnim tokom s frekvenco nekaj deset kilohertzov. Spreminjajoče se polje inducira v dnu posode vrtinčne tokove, ki posodo segrejejo; steklo ostane hladno. Posoda mora biti iz feromagnetne kovine, sicer je segrevanje slabo.

**Elektrarna in daljnovod.** Generator v hidroelektrarni pretvori mehansko delo vode v električno energijo z indukcijo. Transformatorji napetost dvignejo na več sto kilovoltov, da je tok v daljnovodu majhen in so izgube $I^2R$ majhne, pred porabniki pa jo spet znižajo.

**Merjenje pretoka krvi.** Kri vsebuje ione. Ko teče skozi magnetno polje, Lorentzova sila potiska pozitivne in negativne ione na nasprotni strani žile, kar ustvari napetost $U = Bdv$ med elektrodama na straneh žile. Iz nje izračunamo hitrost toka; tako deluje elektromagnetni merilnik pretoka, ki ga uporabljajo tudi v industriji za prevodne tekočine.

## Drugače: Korak za korakom s številkami

Tuljava z $200$ ovoji in površino preseka $4{,}0\,\mathrm{cm^2}$ je v magnetnem polju, ki je vzporedno z osjo tuljave. Polje v $0{,}10\,\mathrm{s}$ enakomerno naraste z $0$ na $0{,}50\,\mathrm{T}$. Konca tuljave sta povezana, celotni upor je $2{,}0\,\Omega$.

1. **Površina v SI:** $S = 4{,}0\,\mathrm{cm^2} = 4{,}0 \cdot 10^{-4}\,\mathrm{m^2}$.
2. **Sprememba pretoka skozi en ovoj:** $\Delta\Phi_m = \Delta B \cdot S = 0{,}50 \cdot 4{,}0 \cdot 10^{-4}\,\mathrm{Wb} = 2{,}0 \cdot 10^{-4}\,\mathrm{Wb}$.
3. **Inducirana napetost:** $|U_i| = N\,\Delta\Phi_m/\Delta t = 200 \cdot 2{,}0 \cdot 10^{-4}/0{,}10\,\mathrm{V} = 0{,}40\,\mathrm{V}$.
4. **Tok:** $I = 0{,}40\,\mathrm{V}/2{,}0\,\Omega = 0{,}20\,\mathrm{A}$.
5. **Pretečeni naboj:** $Q = I\Delta t = 0{,}20 \cdot 0{,}10\,\mathrm{C} = 0{,}020\,\mathrm{C}$. Enako da $Q = N\Delta\Phi_m/R$, kar ni odvisno od tega, kako hitro se polje spremeni.
6. **Smer:** po Lenzovem pravilu inducirani tok ustvari polje, ki v tuljavi kaže nasproti zunanjemu polju.

## Drugače: Bolj natančno

**Amperov zakon za tuljavo.** Za pravokotno pot z eno stranico dolžine $x$ v notranjosti vzdolž osi in drugo zunaj prispevata k integralu le notranja stranica ($Bx$) in nič od zunanje, ker je tam polje zanemarljivo, stranici pravokotno na os pa nič, ker je $\vec{B}$ pravokoten na pot. Objeti tok je $NIx/l$, zato je $Bx = \mu_0NIx/l$.

**Biot-Savartov zakon.** Splošno polje toka izračunamo z

$$\mathrm{d}\vec{B} = \frac{\mu_0I}{4\pi}\,\frac{\mathrm{d}\vec{l} \times \hat{r}}{r^2}.$$

Za središče krožne zanke so vsi prispevki vzporedni in $r = R$, zato je $B = \frac{\mu_0I}{4\pi R^2} \cdot 2\pi R = \frac{\mu_0I}{2R}$. Amperov zakon je integralna oblika istih zakonitosti za stacionarne tokove.

**Indukcijski zakon iz Lorentzove sile.** Na elektron v palici, ki se giblje s hitrostjo $v$, deluje sila $e_0vB$ vzdolž palice. Elektroni se premikajo, dokler električno polje nabojev na koncih ne uravnoteži magnetne sile: $e_0E = e_0vB$, zato je napetost $U = El = Blv$. Hkrati se površina zanke spreminja s hitrostjo $\mathrm{d}S/\mathrm{d}t = lv$, zato je $\mathrm{d}\Phi_m/\mathrm{d}t = Blv$, kar se ujema z indukcijskim zakonom. Pri mirujoči zanki v spreminjajočem se polju Lorentzova sila ne pojasni napetosti; tam spreminjajoče se magnetno polje ustvari vrtinčno električno polje, $\oint\vec{E} \cdot \mathrm{d}\vec{s} = -\mathrm{d}\Phi_m/\mathrm{d}t$. To je ena od Maxwellovih enačb.

**Energijska bilanca pri Lenzovem pravilu.** Če bi inducirani tok pomagal gibanju, bi se palica sama pospeševala in proizvajala toploto brez vloženega dela, kar bi kršilo ohranitev energije. Natančno: mehanska moč $Fv = (IlB)v$ je enaka električni moči $U_iI = (Blv)I$.

**Generator.** Pri $N = 100$, $S = 0{,}010\,\mathrm{m^2}$, $B = 0{,}20\,\mathrm{T}$ in frekvenci $50\,\mathrm{Hz}$ ($\omega = 314\,\mathrm{s^{-1}}$) je amplituda inducirane napetosti $NBS\omega \approx 62{,}8\,\mathrm{V}$, efektivna vrednost pa $62{,}8/\sqrt{2} \approx 44{,}4\,\mathrm{V}$.

## Preveri se

? Elektron se giblje vzporedno s silnicami homogenega magnetnega polja. Kolikšna magnetna sila deluje nanj?
+ Nič.
- Največja možna, $e_0vB$.
- Polovica največje, $e_0vB/2$.
> $F = |q|vB\sin\theta$, pri $\theta = 0$ je $\sin\theta = 0$.

? Gostota polja na razdalji $r$ od dolgega ravnega vodnika je $B$. Kolikšna je na razdalji $2r$?
- $B/4$
+ $B/2$
- $2B$
> $B = \mu_0I/(2\pi r)$ pada z $1/r$.

? Dolga tuljava ima $500$ ovojev na dolžini $25\,\mathrm{cm}$, po njej teče tok $2{,}0\,\mathrm{A}$. Kolikšna je gostota polja v notranjosti?
- $0{,}50\,\mathrm{mT}$
+ $5{,}0\,\mathrm{mT}$
- $2{,}5\,\mathrm{mT}$
> $B = \mu_0NI/l = 4\pi \cdot 10^{-7} \cdot 500 \cdot 2{,}0/0{,}25\,\mathrm{T} \approx 5{,}0 \cdot 10^{-3}\,\mathrm{T}$.

? Transformator ima na primarni strani $1000$ ovojev in napetost $230\,\mathrm{V}$, na sekundarni $50$ ovojev. Kolikšna je sekundarna napetost?
- $4600\,\mathrm{V}$
+ $11{,}5\,\mathrm{V}$
- $230\,\mathrm{V}$
> $U_2 = U_1N_2/N_1 = 230 \cdot 50/1000\,\mathrm{V} = 11{,}5\,\mathrm{V}$. $4600\,\mathrm{V}$ dobiš z obrnjenim razmerjem.
