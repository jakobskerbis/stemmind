---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Na kuhinjskem pultu so sol, sladkor in olje. Sladkor se v suhi ponvi kmalu stopi v karamelo, sol pa ostane trdna, saj ima tališče $801\,^\circ\mathrm{C}$. V vodi se sladkor raztopi tako kot sol, olje pa splava na vrh juhe. Molekula vode je upognjena, molekula $\mathrm{CO_2}$ iz mehurčkov v kisli vodi pa linearna. Preden bereš naprej, ugani: kaj imata skupnega sol in sladkor, da se oba topita v vodi, in kaj ju loči? Ključ do uganke sta **kemijska vez** in **sile med molekulami**.

V gimnaziji si spoznal ionsko in kovalentno vez ter Lewisove strukture. Na fakulteti te pojme poglobimo in jih povežemo:

- iz **elektronegativnosti** sklepamo, ali je vez ionska, polarna ali nepolarna kovalentna,
- z modelom **VSEPR** napovemo obliko molekule in kote med vezmi,
- s **hibridizacijo** opišemo, katere orbitale gradijo vezi,
- iz oblike in polarnosti sklepamo na **medmolekulske sile**, te pa določajo vrelišče, topnost, viskoznost in zgradbo bioloških makromolekul (dvojna vijačnica DNA, zvitje beljakovin).

To je temelj za organsko kemijo, biokemijo, farmacijo in znanost o materialih.

## Razlaga

### Elektronegativnost in vrste vezi

**Elektronegativnost** $\chi$ je merilo, kako močno atom v vezi privlači skupne elektrone. Na Paulingovi lestvici je najvišja pri fluoru ($3{,}98$), visoka pri kisiku ($3{,}44$), dušiku ($3{,}04$) in kloru ($3{,}16$), nizka pri alkalijskih kovinah (natrij $0{,}93$).

Primerjaj tri snovi, ki vse vsebujejo klor. Kuhinjska sol $\mathrm{NaCl}$ ($\Delta\chi = 3{,}16 - 0{,}93 = 2{,}23$) je trd kristal ionov. Vodikov klorid $\mathrm{HCl}$ ($\Delta\chi = 0{,}96$) je plin iz molekul z delnima nabojema. Klor $\mathrm{Cl_2}$ ($\Delta\chi = 0$) je plin iz povsem simetričnih molekul. Vzorec: večja kot je razlika, bolj se skupni par pomakne k enemu atomu, pri največjih razlikah pa elektron preide v celoti. Iz takih primerjav izhaja okvirno pravilo za razliko $\Delta\chi$ med vezanima atomoma:

- $\Delta\chi < 0{,}4$: **nepolarna kovalentna** vez (elektroni so enakomerno porazdeljeni, npr. $\mathrm{Cl_2}$, vez $\mathrm{C{-}H}$),
- $0{,}4 \le \Delta\chi \le 1{,}7$: **polarna kovalentna** vez (delna naboja $\delta^+$ in $\delta^-$, npr. $\mathrm{H{-}Cl}$, $\mathrm{O{-}H}$),
- $\Delta\chi > 1{,}7$: pretežno **ionska** vez (prenos elektronov, npr. $\mathrm{NaCl}$).

Meje niso ostre: prehod od kovalentne do ionske vezi je zvezen.

### Ionska vez

Atom z nizko ionizacijsko energijo (kovina) odda elektrone, atom z visoko elektronsko afiniteto (nekovina) jih sprejme. Nastali kationi in anioni se privlačijo z električno silo v vse smeri, zato ne tvorijo molekul, ampak **ionsko kristalno mrežo**. Moč mreže opisuje **mrežna energija**: energija, ki se sprosti, ko iz plinastih ionov nastane mol kristala. Iz Coulombovega zakona sledi, da je približno sorazmerna z $\frac{z_+ z_-}{r_+ + r_-}$: večja naboja in manjša iona dasta trdnejšo mrežo (in višje tališče). Ionske snovi so trde, krhke, v talini in raztopini prevajajo električni tok.

### Kovalentna vez

Atoma si delita elektronski par. **Lewisova struktura** prikaže vezne in nevezne (proste) elektronske pare. Postopek: (1) preštej valenčne elektrone (pri ionih prištej ali odštej naboj), (2) poveži atome z enojnimi vezmi, (3) dopolni oktete zunanjih atomov, (4) ostanek postavi na osrednji atom, (5) po potrebi tvori dvojne ali trojne vezi. **Formalni naboj** atoma je

$$\mathrm{FN} = (\text{valenčni } e^-) - (\text{nevezni } e^-) - \tfrac{1}{2}(\text{vezni } e^-);$$

najboljša struktura ima formalne naboje čim bližje nič. **Red vezi** (enojna, dvojna, trojna) je povezan z dolžino in energijo vezi: za ogljik je $\mathrm{C{-}C}$ dolga približno $154\,\mathrm{pm}$ ($347\,\mathrm{kJ/mol}$), $\mathrm{C{=}C}$ $134\,\mathrm{pm}$ ($614\,\mathrm{kJ/mol}$), $\mathrm{C{\equiv}C}$ $120\,\mathrm{pm}$ ($839\,\mathrm{kJ/mol}$).

### Model VSEPR

Elektronski pari okoli osrednjega atoma se med seboj odbijajo in se razporedijo čim dlje narazen. Štejemo **elektronske skupine**: vsak vezani atom (ne glede na red vezi) in vsak nevezni par. Zapis $\mathrm{AX}_m\mathrm{E}_n$ pomeni osrednji atom $\mathrm{A}$, $m$ vezanih atomov in $n$ neveznih parov.

:::premisli
Metan $\mathrm{CH_4}$ ima okoli ogljika štiri vezi in kot $109{,}5^\circ$. Amonijak $\mathrm{NH_3}$ ima okoli dušika tri vezi in en nevezni par, torej prav tako štiri skupine. Bo kot $\mathrm{H{-}N{-}H}$ večji ali manjši od $109{,}5^\circ$?
---
Manjši, okoli $107^\circ$. Razporeditev skupin je še vedno tetraedrska, a nevezni par je bliže jedru in se odbija močneje kot vezni, zato potisne vezi skupaj.
:::

- $2$ skupini: linearno, $180^\circ$ ($\mathrm{CO_2}$),
- $3$ skupine: trigonalno planarno, $120^\circ$ ($\mathrm{BF_3}$); z enim neveznim parom kotna oblika ($\mathrm{SO_2}$),
- $4$ skupine: tetraedrsko, $109{,}5^\circ$ ($\mathrm{CH_4}$); $\mathrm{AX_3E}$ trigonalna piramida ($\mathrm{NH_3}$, približno $107^\circ$); $\mathrm{AX_2E_2}$ kotna ($\mathrm{H_2O}$, približno $104{,}5^\circ$),
- $5$ skupin: trigonalna bipiramida ($\mathrm{PCl_5}$),
- $6$ skupin: oktaeder ($\mathrm{SF_6}$).

Nevezni pari se odbijajo močneje kot vezni, zato kote stisnejo. **Razporeditev elektronskih skupin** in **oblika molekule** (razporeditev atomov) se razlikujeta, kadar ima osrednji atom nevezne pare.

### Hibridizacija

Atomske orbitale osrednjega atoma se pomešajo v enakovredne **hibridne orbitale**, usmerjene tako, kot zahteva VSEPR. Število hibridnih orbital je enako številu elektronskih skupin:

- $2$ skupini: $sp$ (ena $s$ in ena $p$), $180^\circ$,
- $3$ skupine: $sp^2$, $120^\circ$,
- $4$ skupine: $sp^3$, $109{,}5^\circ$.

Hibridne orbitale tvorijo **vezi $\sigma$** (prekrivanje vzdolž osi vezi). Nehibridizirane orbitale $p$ se lahko bočno prekrijejo v **vezi $\pi$**. Enojna vez je ena $\sigma$, dvojna $\sigma + \pi$, trojna $\sigma + 2\pi$. Ker vez $\pi$ zahteva vzporedni orbitali $p$, okoli dvojne vezi ni prostega vrtenja (od tod izomerija *cis-trans*).

### Polarnost molekule

Polarne vezi še ne pomenijo polarne molekule. **Dipolni moment** molekule je vektorska vsota dipolnih momentov vezi. V simetričnih molekulah ($\mathrm{CO_2}$, $\mathrm{BF_3}$, $\mathrm{CH_4}$, $\mathrm{CCl_4}$) se izničijo in molekula je nepolarna; v upognjeni $\mathrm{H_2O}$ ali piramidalnem $\mathrm{NH_3}$ se ne.

### Medmolekulske sile

Od najšibkejših do najmočnejših, okvirno:

- **disperzijske (Londonove) sile**: med vsemi molekulami, zaradi trenutnih dipolov; večje z večjim številom elektronov in večjo površino molekule,
- **dipol-dipol**: med polarnimi molekulami,
- **vodikova vez**: ko je vodik vezan na $\mathrm{F}$, $\mathrm{O}$ ali $\mathrm{N}$ in ga privlači nevezni par sosednje molekule ($10$ do $40\,\mathrm{kJ/mol}$),
- **ion-dipol**: pri raztapljanju ionskih snovi v vodi.

Vse so mnogo šibkejše od kovalentnih vezi ($150$ do $1000\,\mathrm{kJ/mol}$). Močnejše medmolekulske sile pomenijo višje vrelišče, višjo površinsko napetost in višjo viskoznost. Za topnost velja »podobno se topi v podobnem«.

:::premisli
Zdaj se vrni k uganki s pulta: zakaj se sladkor raztopi v vodi, olje pa ne, čeprav sladkor ni ionska snov kot sol?
---
Sladkor ima veliko skupin $\mathrm{O{-}H}$ in z vodo tvori vodikove vezi, sol pa se veže z vodo prek sil ion-dipol. Olje je skoraj nepolarno in ima le disperzijske sile; molekule vode raje ostanejo povezane med seboj z vodikovimi vezmi in olje izrinejo.
:::

## Rešeni primeri

### Primer 1 (lažji)

Z elektronegativnostmi razvrsti vezi v kuhinjski soli $\mathrm{NaCl}$, v $\mathrm{HCl}$, $\mathrm{Cl_2}$ in vez $\mathrm{C{-}H}$ v metanu. Elektronegativnosti: $\chi(\mathrm{Na}) = 0{,}93$, $\chi(\mathrm{H}) = 2{,}20$, $\chi(\mathrm{C}) = 2{,}55$, $\chi(\mathrm{Cl}) = 3{,}16$.

**Podatki:** $\chi(\mathrm{Na}) = 0{,}93$, $\chi(\mathrm{H}) = 2{,}20$, $\chi(\mathrm{C}) = 2{,}55$, $\chi(\mathrm{Cl}) = 3{,}16$; vezi $\mathrm{Na{-}Cl}$, $\mathrm{H{-}Cl}$, $\mathrm{Cl{-}Cl}$, $\mathrm{C{-}H}$
**Iščemo:** vrsto vsake vezi in na katerem atomu je delni negativni naboj

:::formula
$\Delta\chi = \chi_{\text{večja}} - \chi_{\text{manjša}}$; $\Delta\chi < 0{,}4$ nepolarna, $0{,}4$ do $1{,}7$ polarna kovalentna, $> 1{,}7$ ionska
:::

**Rešitev:**

1. $\mathrm{NaCl}$: $\Delta\chi = 3{,}16 - 0{,}93 = 2{,}23 > 1{,}7$, ionska vez; klor je anion $\mathrm{Cl^-}$.
2. $\mathrm{HCl}$: $\Delta\chi = 3{,}16 - 2{,}20 = 0{,}96$, polarna kovalentna; $\delta^-$ je na kloru.
3. $\mathrm{Cl_2}$: $\Delta\chi = 0$, nepolarna kovalentna.
4. $\mathrm{C{-}H}$: $\Delta\chi = 2{,}55 - 2{,}20 = 0{,}35 < 0{,}4$, praktično nepolarna, ker ogljik le malo močneje privlači skupni par kot vodik.
5. Odgovor: $\mathrm{NaCl}$ ima ionsko vez, $\mathrm{HCl}$ polarno kovalentno (negativni pol na $\mathrm{Cl}$), $\mathrm{Cl_2}$ in $\mathrm{C{-}H}$ pa nepolarni kovalentni vezi.

### Primer 2

Z modelom VSEPR določi obliko, približni kot med vezmi, hibridizacijo osrednjega atoma in polarnost molekul $\mathrm{NH_3}$ in $\mathrm{BF_3}$. Dušik ima $5$, bor $3$, vodik $1$ in fluor $7$ valenčnih elektronov.

**Podatki:** $\mathrm{NH_3}$ in $\mathrm{BF_3}$; valenčni elektroni: $\mathrm{N}$ $5$, $\mathrm{B}$ $3$, $\mathrm{H}$ $1$, $\mathrm{F}$ $7$
**Iščemo:** obliko, kot, hibridizacijo in polarnost obeh molekul

:::formula
Število elektronskih skupin $=$ vezani atomi $+$ nevezni pari; $\mathrm{AX}_m\mathrm{E}_n$; $2 \to sp$, $3 \to sp^2$, $4 \to sp^3$
:::

**Rešitev:**

1. $\mathrm{NH_3}$: $5 + 3 \cdot 1 = 8$ valenčnih elektronov, to so $4$ pari. Trije pari so vezni ($\mathrm{N{-}H}$), en par je nevezen na dušiku: $\mathrm{AX_3E}$.
2. Štiri skupine: tetraedrska razporeditev, hibridizacija $sp^3$. Oblika molekule (samo atomi) je **trigonalna piramida**; nevezni par stisne kot na približno $107^\circ$.
3. Dipoli vezi $\mathrm{N{-}H}$ ($\Delta\chi = 0{,}84$) se v piramidi ne izničijo: $\mathrm{NH_3}$ je **polarna**.
4. $\mathrm{BF_3}$: $3 + 3 \cdot 7 = 24$ elektronov. Tri vezi $\mathrm{B{-}F}$ ($3$ pari), vsak fluor ima $3$ nevezne pare ($9$ parov), skupaj $12$ parov $= 24$ elektronov. Bor nima neveznega para: $\mathrm{AX_3}$.
5. Tri skupine: **trigonalno planarno**, $120^\circ$, hibridizacija $sp^2$; bor ima le $6$ elektronov (nepopoln oktet), prazna orbitala $p$ ga naredi Lewisovo kislino.
6. Trije enaki dipoli pod $120^\circ$ se izničijo: $\mathrm{BF_3}$ je **nepolarna**, čeprav so vezi zelo polarne.
7. Odgovor: $\mathrm{NH_3}$ je polarna trigonalna piramida s koti okoli $107^\circ$ ($sp^3$), $\mathrm{BF_3}$ pa nepolarna trigonalno planarna molekula s koti $120^\circ$ ($sp^2$).

### Primer 3 (težji)

Propan $\mathrm{CH_3CH_2CH_3}$ ($M = 44{,}1\,\mathrm{g/mol}$), dimetil eter $\mathrm{CH_3OCH_3}$ ($M = 46{,}1\,\mathrm{g/mol}$) in etanol $\mathrm{CH_3CH_2OH}$ ($M = 46{,}1\,\mathrm{g/mol}$) imajo skoraj enake molske mase. Njihova vrelišča so $-42\,^\circ\mathrm{C}$, $-24\,^\circ\mathrm{C}$ in $78\,^\circ\mathrm{C}$. Določi hibridizacijo in obliko okoli kisika v obeh spojinah s kisikom ter pojasni vrstni red vrelišč z medmolekulskimi silami.

**Podatki:** propan $44{,}1\,\mathrm{g/mol}$, vrelišče $-42\,^\circ\mathrm{C}$; dimetil eter $46{,}1\,\mathrm{g/mol}$, vrelišče $-24\,^\circ\mathrm{C}$; etanol $46{,}1\,\mathrm{g/mol}$, vrelišče $78\,^\circ\mathrm{C}$
**Iščemo:** hibridizacijo in obliko okoli $\mathrm{O}$, vrsto medmolekulskih sil in razlago vrstnega reda vrelišč

:::formula
Okoli $\mathrm{O}$: $\mathrm{AX_2E_2}$, $4$ skupine $\to sp^3$, kotna oblika. Sile: disperzijske $<$ dipol-dipol $<$ vodikove vezi ($\mathrm{H}$ na $\mathrm{O}$, $\mathrm{N}$, $\mathrm{F}$).
:::

**Rešitev:**

1. V obeh spojinah ima kisik dve enojni vezi in dva nevezna para: $\mathrm{AX_2E_2}$, hibridizacija $sp^3$, kotna (upognjena) oblika s kotom blizu tetraedrskega (okoli $105^\circ$ do $112^\circ$). Vsi ogljiki so $sp^3$ (štiri enojne vezi).
2. Propan: samo vezi $\mathrm{C{-}C}$ in $\mathrm{C{-}H}$, molekula je skoraj nepolarna; med molekulami delujejo le **disperzijske sile**.
3. Dimetil eter: vezi $\mathrm{C{-}O}$ so polarne, upognjena oblika pomeni, da se dipola ne izničita, molekula je **polarna**: disperzijske sile in **dipol-dipol** privlak. Vodik je vezan le na ogljik, zato med molekulami etra ni vodikovih vezi.
4. Etanol: ima skupino $\mathrm{O{-}H}$, zato poleg disperzijskih in dipolnih sil tvori **vodikove vezi** z nevezanimi pari kisika sosednjih molekul.
5. Ker so molske mase (in s tem disperzijske sile) skoraj enake, vrstni red določajo dodatne sile: propan (le disperzijske) $<$ eter (dipol-dipol) $\ll$ etanol (vodikove vezi).
6. Odgovor: kisik je v obeh spojinah $sp^3$ s kotno obliko; vrelišča naraščajo od propana ($-42\,^\circ\mathrm{C}$) prek etra ($-24\,^\circ\mathrm{C}$) do etanola ($78\,^\circ\mathrm{C}$), ker se dodajo najprej dipolne sile in nato vodikove vezi, ki jih je treba pri vrenju pretrgati.

### Primer 4 – zdaj ti

Sladkor (saharoza) se v čaju raztopi v nekaj sekundah. V njegovih molekulah so vezi $\mathrm{C{-}H}$, $\mathrm{C{-}O}$ in $\mathrm{O{-}H}$. Razvrsti jih po polarnosti in pojasni, katere sile povežejo sladkor z vodo. Elektronegativnosti: $\chi(\mathrm{H}) = 2{,}20$, $\chi(\mathrm{C}) = 2{,}55$, $\chi(\mathrm{O}) = 3{,}44$.

**Podatki:** $\chi(\mathrm{H}) = 2{,}20$, $\chi(\mathrm{C}) = 2{,}55$, $\chi(\mathrm{O}) = 3{,}44$; vezi $\mathrm{C{-}H}$, $\mathrm{C{-}O}$, $\mathrm{O{-}H}$
**Iščemo:** vrstni red polarnosti vezi in vrsto sil med sladkorjem in vodo

:::formula
$\Delta\chi = \chi_{\text{večja}} - \chi_{\text{manjša}}$; vodikova vez nastane, ko je $\mathrm{H}$ vezan na $\mathrm{O}$, $\mathrm{N}$ ali $\mathrm{F}$
:::

**Rešitev:**

1. $\mathrm{C{-}H}$: $\Delta\chi = 2{,}55 - 2{,}20 = 0{,}35$, praktično nepolarna, ker je razlika pod mejo $0{,}4$.
2. $\mathrm{C{-}O}$: $\Delta\chi = 3{,}44 - 2{,}55 = 0{,}89$, polarna kovalentna; $\delta^-$ je na kisiku, ker ta močneje privlači skupni par.
3. Izračunaj še $\Delta\chi$ za $\mathrm{O{-}H}$ in sklepaj, katere sile povežejo sladkor z vodo, nato preveri:

:::premisli
Katera vez je najbolj polarna in kakšne sile nastanejo med molekulami sladkorja in vode?
---
$\mathrm{O{-}H}$: $\Delta\chi = 3{,}44 - 2{,}20 = 1{,}24$, najbolj polarna vez (vrstni red $\mathrm{O{-}H} > \mathrm{C{-}O} > \mathrm{C{-}H}$). Ker je vodik vezan na kisik, skupine $\mathrm{O{-}H}$ sladkorja tvorijo vodikove vezi z vodo; zato se sladkor raztaplja.
:::

## Pogoste napake

- **Mešanje vezi in medmolekulskih sil.** Pri vrenju vode se ne pretrgajo vezi $\mathrm{O{-}H}$ v molekuli, ampak vodikove vezi **med** molekulami.
- **Polarne vezi pomenijo polarno molekulo.** $\mathrm{CO_2}$ in $\mathrm{CCl_4}$ imata polarne vezi, a sta zaradi simetrije nepolarni.
- **Pozabljeni nevezni pari pri VSEPR.** Voda ni linearna: kisik ima dva nevezna para, zato ima štiri elektronske skupine in kotno obliko.
- **Dvojna vez šteje kot dve skupini.** Pri VSEPR je večkratna vez ena sama skupina; $\mathrm{CO_2}$ ima okoli ogljika dve skupini in je linearen ($sp$).
- **Vodikova vez z vodikom na ogljiku.** $\mathrm{CH_4}$ ali $\mathrm{CH_3OCH_3}$ ne tvorita vodikovih vezi med svojimi molekulami; vodik mora biti vezan na $\mathrm{F}$, $\mathrm{O}$ ali $\mathrm{N}$.
- **Ionska »molekula« NaCl.** Ionske snovi tvorijo mrežo; formula $\mathrm{NaCl}$ pove le razmerje ionov $1 : 1$.
- **Hibridizacija pred obliko.** Hibridizacijo določimo iz števila elektronskih skupin (VSEPR), ne obratno.

## Povzetek

- $\Delta\chi$ okvirno loči nepolarno ($< 0{,}4$), polarno kovalentno ($0{,}4$ do $1{,}7$) in ionsko vez ($> 1{,}7$).
- Ionska vez: elektrostatski privlak ionov v mreži; mrežna energija raste z naboji in pada z velikostjo ionov.
- Kovalentna vez: skupni elektronski pari; Lewisova struktura, formalni naboj, red vezi (večji red: krajša in močnejša vez).
- VSEPR: število skupin $2, 3, 4$ da linearno ($180^\circ$), trigonalno planarno ($120^\circ$), tetraedrsko ($109{,}5^\circ$) razporeditev; nevezni pari spremenijo obliko in stisnejo kote.
- Hibridizacija $sp$, $sp^2$, $sp^3$ ustreza $2$, $3$, $4$ skupinam; enojna vez je $\sigma$, dvojna $\sigma + \pi$, trojna $\sigma + 2\pi$.
- Medmolekulske sile: disperzijske $<$ dipol-dipol $<$ vodikove vezi; določajo vrelišča in topnost.

## Drugače: Na sliki

| Skupine | Nevezni pari | Oblika | Kot | Hibridizacija | Primer |
|---|---|---|---|---|---|
| $2$ | $0$ | linearna | $180^\circ$ | $sp$ | $\mathrm{CO_2}$ |
| $3$ | $0$ | trigonalno planarna | $120^\circ$ | $sp^2$ | $\mathrm{BF_3}$ |
| $3$ | $1$ | kotna | pod $120^\circ$ | $sp^2$ | $\mathrm{SO_2}$ |
| $4$ | $0$ | tetraedrska | $109{,}5^\circ$ | $sp^3$ | $\mathrm{CH_4}$ |
| $4$ | $1$ | trigonalna piramida | okoli $107^\circ$ | $sp^3$ | $\mathrm{NH_3}$ |
| $4$ | $2$ | kotna | okoli $104{,}5^\circ$ | $sp^3$ | $\mathrm{H_2O}$ |

Predstavljaj si balone, zvezane v enem vozlu: dva balona se postavita na nasprotni strani, trije v ravnino pod $120^\circ$, štirje v oglišča tetraedra. Nevezni par je »debelejši balon«, ki potisne ostale bližje skupaj.

Vodikove vezi med molekulami vode:

```
      H          H
       \          \
        O-H ····· O-H ····· O
       /    (vodikova vez)
      H
```

Polna črta je kovalentna vez v molekuli, pikčasta črta je vodikova vez med molekulami (več kot desetkrat šibkejša: okoli $20\,\mathrm{kJ/mol}$ proti $463\,\mathrm{kJ/mol}$ za vez $\mathrm{O{-}H}$).

## Drugače: Iz vsakdanjega življenja

**DNA in beljakovine.** Dve verigi DNA drži skupaj veliko vodikovih vezi med bazami (adenin-timin z dvema, gvanin-citozin s tremi). Vsaka posamezna vez je šibka, zato se verigi pri podvajanju lahko razkleneta, vseh skupaj pa je dovolj, da je molekula stabilna. Pri beljakovinah vodikove vezi, disperzijske sile in ionski mostički določajo zvitje; pri segrevanju (kuhanje jajca) se te šibke interakcije pretrgajo in beljakovina denaturira.

**Led plava.** Vodikove vezi v ledu razporedijo molekule v odprto heksagonalno mrežo, zato ima led manjšo gostoto kot voda. Jezera zamrznejo od zgoraj navzdol in življenje pod ledom preživi zimo.

**Milo in čistila.** Molekula mila ima ionsko »glavo« (topno v vodi zaradi sil ion-dipol) in dolg nepolaren »rep« (topen v maščobi zaradi disperzijskih sil). Repi obdajo kapljico maščobe, glave pa jo držijo v vodi.

**Zdravila.** Učinkovina se veže na receptor z vodikovimi vezmi in drugimi medmolekulskimi silami. Oblika molekule (VSEPR, hibridizacija, *cis-trans* izomerija) odloči, ali se prilega vezavnemu mestu kot ključ v ključavnico.

## Drugače: Korak za korakom s številkami

Določimo zgradbo metanala (formaldehida) $\mathrm{H_2CO}$.

1. **Valenčni elektroni:** $\mathrm{C}$ $4$, $2 \cdot \mathrm{H}$ $2$, $\mathrm{O}$ $6$, skupaj $12$ elektronov ($6$ parov).
2. **Ogrodje:** ogljik je osrednji atom, nanj sta vezana oba vodika in kisik. Tri enojne vezi porabijo $3$ pare.
3. **Dopolnimo kisik:** trije nevezni pari na kisiku porabijo še $3$ pare. Vseh $6$ parov je porabljenih, ogljik pa ima le $6$ elektronov.
4. **Dvojna vez:** en nevezni par kisika premaknemo v vez $\mathrm{C{=}O}$. Zdaj imata oba atoma oktet, kisik pa ima $2$ nevezna para.
5. **Formalna naboja:** $\mathrm{C}$: $4 - 0 - \frac{1}{2} \cdot 8 = 0$; $\mathrm{O}$: $6 - 4 - \frac{1}{2} \cdot 4 = 0$. Struktura je ugodna.
6. **VSEPR okoli ogljika:** $3$ skupine (dva $\mathrm{H}$ in en $\mathrm{O}$, dvojna vez šteje enkrat), brez neveznih parov: $\mathrm{AX_3}$, trigonalno planarno, okoli $120^\circ$.
7. **Hibridizacija:** ogljik $sp^2$; ena nehibridizirana orbitala $p$ tvori vez $\pi$ s kisikom.
8. **Štetje vezi:** $2$ vezi $\mathrm{C{-}H}$ ($\sigma$) in vez $\mathrm{C{=}O}$ ($\sigma + \pi$): skupaj $3\,\sigma$ in $1\,\pi$.
9. **Polarnost:** $\Delta\chi(\mathrm{C{-}O}) = 3{,}44 - 2{,}55 = 0{,}89$, dipol se ne izniči: molekula je polarna.

## Drugače: Bolj natančno

**Delež ionskega značaja.** Pauling je predlagal oceno deleža ionskega značaja vezi $1 - e^{-(\Delta\chi)^2/4}$. Za $\mathrm{HCl}$ ($\Delta\chi = 0{,}96$) dobimo okoli $21\,\%$, za $\mathrm{NaCl}$ ($\Delta\chi = 2{,}23$) okoli $71\,\%$. Nobena vez ni povsem ionska; meja $1{,}7$ ustreza približno $50\,\%$ ionskega značaja.

**Mrežna energija in Born-Haberjev cikel.** Mrežne energije ne merimo neposredno, ampak jo izračunamo s Hessovim zakonom iz sublimacijske, ionizacijske in disociacijske energije, elektronske afinitete in tvorbene entalpije. Za $\mathrm{NaCl}$ je okoli $787\,\mathrm{kJ/mol}$, za $\mathrm{MgO}$ okoli $3800\,\mathrm{kJ/mol}$: produkt nabojev je $4$-krat večji, ioni pa so manjši, zato je $\mathrm{MgO}$ ognjevzdržen material s tališčem nad $2800\,^\circ\mathrm{C}$.

**Teorija molekulskih orbital (MO).** Model VSEPR in hibridizacija sta lokalizirana opisa. Natančnejši je opis z molekulskimi orbitalami, ki so linearne kombinacije atomskih orbital in se raztezajo čez vso molekulo. **Red vezi** je

$$\text{red vezi} = \tfrac{1}{2}\left(n_{\text{vezni}} - n_{\text{protivezni}}\right).$$

Za $\mathrm{N_2}$ je red $3$, za $\mathrm{O_2}$ pa $2$, pri čemer ima $\mathrm{O_2}$ dva nesparjena elektrona v protiveznih orbitalah $\pi^*$. Zato je kisik **paramagneten** (ga privlači magnet), česar Lewisova struktura z vsemi sparjenimi elektroni ne pojasni.

**Delokalizacija in resonanca.** V benzenu ali karbonatnem ionu nobena posamezna Lewisova struktura ne opiše dejanskega stanja; elektroni $\pi$ so delokalizirani. Vse vezi $\mathrm{C{-}O}$ v $\mathrm{CO_3^{2-}}$ so enako dolge, z redom vezi $1\frac{1}{3}$.

**Izvor disperzijskih sil.** Trenutni dipol ene molekule inducira dipol v sosednji; potencialna energija pojema z razdaljo kot $1/r^6$. Zato so te sile kratkega dosega, a pri velikih molekulah (dolge verige alkanov, polimeri) zaradi velikega števila stikov zelo pomembne.

## Preveri se

? Kakšna je oblika molekule vode?
- linearna
~ Upoštevaš le dve vezi in pozabiš na dva nevezna para kisika; ta odbijata vezi in molekulo upogneta.
+ kotna (upognjena)
- trigonalno planarna
~ Trigonalna oblika zahteva tri skupine; kisik jih ima štiri (dve vezi in dva nevezna para).
> Kisik ima dve vezi in dva nevezna para ($\mathrm{AX_2E_2}$): elektronske skupine so razporejene tetraedrsko, atomi pa tvorijo kotno obliko s kotom okoli $104{,}5^\circ$.

? Kakšna je hibridizacija ogljika v $\mathrm{CO_2}$?
+ $sp$
- $sp^2$
~ Dvojna vez te spomni na eten ($sp^2$), a hibridizacijo določa število skupin okoli ogljika, tu sta le dve.
- $sp^3$
~ Vsako dvojno vez si štel kot dve skupini; pri VSEPR je večkratna vez ena sama skupina.
> Ogljik ima dve elektronski skupini (dve dvojni vezi, vsaka šteje enkrat), zato je linearen in $sp$ hibridiziran.

? Med molekulami katere snovi delujejo vodikove vezi?
- $\mathrm{CH_4}$
~ Metan ima veliko vodikov, a so vezani na ogljik; vez $\mathrm{C{-}H}$ je skoraj nepolarna in vodik skoraj nima delnega pozitivnega naboja.
- $\mathrm{CCl_4}$
~ Vezi $\mathrm{C{-}Cl}$ so polarne, a molekula je simetrična in sploh nima vodika; med molekulami delujejo le disperzijske sile.
+ $\mathrm{CH_3OH}$
> Metanol ima vodik, vezan na kisik. V $\mathrm{CH_4}$ in $\mathrm{CCl_4}$ ni vezi $\mathrm{O{-}H}$, $\mathrm{N{-}H}$ ali $\mathrm{F{-}H}$.

? Katera molekula je nepolarna, čeprav ima polarne vezi?
- $\mathrm{H_2O}$
~ Vezi $\mathrm{O{-}H}$ so res polarne, a voda je upognjena, zato se dipola seštejeta in molekula je polarna.
+ $\mathrm{CO_2}$
- $\mathrm{NH_3}$
~ Trije enaki atomi zvenijo simetrično, a nevezni par naredi piramido; dipoli kažejo vsi na isto stran in se ne izničijo.
> V linearni molekuli $\mathrm{CO_2}$ sta dipola vezi $\mathrm{C{=}O}$ nasprotno usmerjena in se izničita.

? Maja kuha testenine in reče: »Ko voda v loncu zavre, molekule vode razpadejo na vodik in kisik.« Kaj je narobe?
- Nič, mehurčki so vodik in kisik.
~ Mehurčki so vodna para; za razcep vezi $\mathrm{O{-}H}$ ($463\,\mathrm{kJ/mol}$) je treba veliko več energije, kot je dobi voda pri $100\,^\circ\mathrm{C}$.
+ Pretrgajo se vodikove vezi med molekulami, molekule $\mathrm{H_2O}$ ostanejo cele.
- Pretrgajo se ionske vezi med ioni $\mathrm{H^+}$ in $\mathrm{OH^-}$.
~ Voda je iz molekul s kovalentnimi vezmi, ne ionska snov; ionov je v čisti vodi zanemarljivo malo.
> Pri vrenju se premagajo medmolekulske sile (pri vodi predvsem vodikove vezi); kovalentne vezi v molekulah ostanejo, zato je para še vedno $\mathrm{H_2O}$.

:::simboli
\mathrm{FN} | formalni naboj atoma | \mathrm{FN} = (\text{valenčni } e^-) - (\text{nevezni } e^-) - \tfrac{1}{2}(\text{vezni } e^-) | – | najboljša struktura ima naboje čim bližje nič
e | elektron | | | v Paulingovi oceni je e osnova naravnega logaritma
n_{\text{vezni}} | število elektronov v veznih orbitalah | | –
n_{\text{protivezni}} | število elektronov v protiveznih orbitalah | | –
\chi | elektronegativnost | | –
\Delta\chi | razlika elektronegativnosti vezanih atomov | \Delta\chi = \chi_{\text{večja}} - \chi_{\text{manjša}} | – | pod 0,4 nepolarna, nad 1,7 ionska vez
\chi_{\text{večja}} | večja elektronegativnost vezanih atomov | | –
\chi_{\text{manjša}} | manjša elektronegativnost vezanih atomov | | –
s | orbitala tipa s | | | v oznakah hibridizacije sp, sp², sp³
p | orbitala tipa p | | | eksponent pove število vključenih orbital p
:::
