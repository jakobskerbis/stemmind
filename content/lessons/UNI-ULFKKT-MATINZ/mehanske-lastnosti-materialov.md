---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Med drugo svetovno vojno so v ZDA zgradili več tisoč tovornih ladij razreda Liberty. Da bi jih izdelali hitro in poceni, so trup namesto kovičenja varili. Nekaj ladij je v mrzlem morju nenadoma počilo, nekatere celo na dvoje, čeprav niso bile preobremenjene. Preiskave so pokazale, da je bilo jeklo dovolj trdno, a pri nizki temperaturi **krhko**. Ni prenašalo udarca in razpoke.

Od takrat jekla ne kupujemo le po ceni na kilogram. Na atestu (certifikatu) so napisane številke, ki povedo, kaj plačaš: meja tečenja, natezna trdnost, raztezek in udarna žilavost pri določeni temperaturi. Oznaka konstrukcijskega jekla S355J2 na primer pove, da ima meja tečenja vsaj $355\,\mathrm{MPa}$ in da epruveta pri $-20\,^\circ\mathrm{C}$ ob udarcu porabi vsaj $27\,\mathrm{J}$. Kako te številke izmerimo in kaj pomenijo, je vsebina te teme.

## Razlaga

**Natezni preizkus na konkretni epruveti.** Okroglo jekleno epruveto s premerom $d_0 = 10{,}0\,\mathrm{mm}$ vpnemo v trgalni stroj. Na njej označimo merilno dolžino $L_0 = 50{,}0\,\mathrm{mm}$. Stroj jo počasi razteguje in beleži silo $F$ ter podaljšek $\Delta L$.

| točka | $F$ [kN] | kaj vidimo |
|---|---|---|
| prožno območje | $12{,}0$ | podaljšek $0{,}0364\,\mathrm{mm}$, po razbremenitvi izgine |
| meja tečenja | $28{,}3$ | epruveta se začne trajno podaljševati |
| največja sila | $41{,}6$ | na enem mestu nastane zožitev (vrat) |
| lom | – | $L_u = 61{,}0\,\mathrm{mm}$, premer v vratu $6{,}0\,\mathrm{mm}$ |

**Od sile k napetosti.** Debelejša epruveta prenese večjo silo, zato silo delimo s prvotnim presekom $S_0 = \pi d_0^2/4 = 78{,}54\,\mathrm{mm^2}$. Dobimo **napetost** $\sigma = F/S_0$ v $\mathrm{MPa}$ ($1\,\mathrm{MPa} = 1\,\mathrm{N/mm^2}$). Pri $12{,}0\,\mathrm{kN}$ je $\sigma \approx 152{,}8\,\mathrm{MPa}$. Podaljšek delimo z $L_0$ in dobimo **raztezek** $\varepsilon = \Delta L/L_0 = 7{,}28 \cdot 10^{-4}$. Tako rezultat ni odvisen od velikosti epruvete.

**Prožnost.** V prožnem območju je napetost sorazmerna z raztezkom, $\sigma = E\,\varepsilon$ (Hookov zakon). Za našo epruveto je $E = 152{,}8\,\mathrm{MPa} / 7{,}28 \cdot 10^{-4} \approx 2{,}10 \cdot 10^5\,\mathrm{MPa} = 210\,\mathrm{GPa}$. **Modul elastičnosti** $E$ pove togost: odvisen je od vezi med atomi, zato imajo skoraj vsa jekla približno $210\,\mathrm{GPa}$.

:::premisli
Konstruktor želi, da se natezna palica pod isto majhno obremenitvijo manj podaljša. Zato navadno žarjeno jeklo zamenja s kaljenim, ki je precej trdnejše. Bo palica res manj podaljšana?
---
Ne. Podaljšek v prožnem območju določa $E$, ta pa je pri obeh približno $210\,\mathrm{GPa}$. Toplotna obdelava premakne mejo tečenja, togosti pa skoraj ne spremeni.
:::

**Meja tečenja in natezna trdnost.** Ko **dislokacije** (črtne napake v kristalni mreži) začnejo drseti, se kovina trajno deformira. Napetost, pri kateri se to zgodi, je **meja tečenja** $R_e = 28\,300\,\mathrm{N}/78{,}54\,\mathrm{mm^2} \approx 360\,\mathrm{MPa}$. Pri jeklih brez izrazite meje tečenja namesto nje odčitamo $R_{p0,2}$, napetost pri $0{,}2\,\%$ trajnega raztezka. Največja sila da **natezno trdnost** $R_m = 41\,600\,\mathrm{N}/78{,}54\,\mathrm{mm^2} \approx 530\,\mathrm{MPa}$. Konstrukcije dimenzioniramo po $R_e$, saj trajno upognjen nosilec ni več uporaben.

**Duktilnost.** Kako zelo se material raztegne pred lomom, povesta **raztezek po pretrgu** $A = (L_u - L_0)/L_0 = 22{,}0\,\%$ in **kontrakcija** $Z = (S_0 - S_u)/S_0 = 64{,}0\,\%$, kjer je $S_u = 28{,}27\,\mathrm{mm^2}$ presek v vratu. Velika $A$ in $Z$ pomenita, da material pred lomom opozori z vidno deformacijo.

**Posplošitev: krivulja $\sigma$–$\varepsilon$.** Vse te točke ležijo na eni krivulji: najprej strma premica (naklon $E$), nato tečenje, utrjevanje (napetost spet raste, ker se dislokacije ovirajo) do $R_m$ in padec po nastanku vratu do loma. Krhek material, npr. siva litina, se zlomi že na koncu premice, skoraj brez trajne deformacije.

**Trdota.** Natezni preizkus uniči epruveto, zato v praksi pogosto merimo **trdoto**, odpornost proti vtiskovanju. Pri **Vickersovi** metodi vtisnemo diamantno piramido s silo $F$ in izmerimo diagonali vtiska. Pri **Brinellovi** vtisnemo kroglico iz trdine, pri **Rockwellovi** merimo globino vtiska. Večji vtisk pomeni mehkejši material. Za jekla velja približno $R_m \approx 3{,}3 \cdot \mathrm{HV}$ (v $\mathrm{MPa}$), zato trdota hitro oceni trdnost brez razreza dela.

**Žilavost.** **Udarna žilavost** pove, koliko energije material porabi, ko ga zlomi udarec. Pri **Charpyjevem** preizkusu nihalo z višine $h_1$ zlomi epruveto z zarezo V in se dvigne le do $h_2$. Porabljena energija je $\mathrm{KV} = m g (h_1 - h_2)$ v joulih. Jekla s prostorsko centrirano kubično mrežo (ferit) imajo **prehodno temperaturo**: nad njo se lomijo žilavo z veliko energije, pod njo krhko z malo. Kovine s ploskovno centrirano mrežo (avstenitno nerjavno jeklo, aluminij, baker) tega prehoda nimajo. To je razložilo ladje Liberty.

:::premisli
Pri kaljenju jeklo hitro ohladimo in nastane **martenzit**, mreža, prenasičena z ogljikom in močno napeta. Kako se spremenita trdota in žilavost in zakaj jeklo nato popuščamo (ponovno segrejemo na zmerno temperaturo)?
---
Trdota močno naraste, žilavost pa pade, ker je martenzit napet in krhek. S popuščanjem žrtvujemo del trdote, da dobimo nazaj žilavost.
:::

## Rešeni primeri

### Primer 1 (lažji): trdota po Vickersu

Na vzorcu jekla s silo $294{,}2\,\mathrm{N}$ (HV30) izmerimo diagonali vtiska $0{,}510\,\mathrm{mm}$ in $0{,}530\,\mathrm{mm}$. Kolikšna je trdota?

**Podatki:** $F = 294{,}2\,\mathrm{N}$, $d_1 = 0{,}510\,\mathrm{mm}$, $d_2 = 0{,}530\,\mathrm{mm}$
**Iščemo:** trdoto $\mathrm{HV}$

:::formula
$\mathrm{HV} = 0{,}1891\,\dfrac{F}{d^2}$, $F$ v N, $d = \dfrac{d_1 + d_2}{2}$ v mm
:::

**Rešitev:**

1. Povprečna diagonala: $d = \dfrac{0{,}510 + 0{,}530}{2} = 0{,}520\,\mathrm{mm}$; povprečimo, ker vtisk ni nikoli popolnoma kvadraten.
2. $d^2 = 0{,}520^2 = 0{,}2704\,\mathrm{mm^2}$.
3. $\mathrm{HV} = 0{,}1891 \cdot \dfrac{294{,}2}{0{,}2704} \approx 206$.
4. Odgovor: trdota je približno $206\,\mathrm{HV30}$.

### Primer 2: katera palica je cenejša na enoto nosilnosti

V trgovini z jeklom prodajajo okrogle palice premera $8{,}0\,\mathrm{mm}$. Meter palice iz S235 stane $2{,}40$ €, iz S355 pa $2{,}90$ €. Pri kateri plačaš manj za vsak kilonewton sile, ki jo palica prenese do meje tečenja?

**Podatki:** $d = 8{,}0\,\mathrm{mm}$, $R_{e1} = 235\,\mathrm{MPa}$, $R_{e2} = 355\,\mathrm{MPa}$, cena $2{,}40$ € in $2{,}90$ € na meter
**Iščemo:** sili $F_1$, $F_2$ in ceno na kN

:::formula
$F = R_e \cdot S$, $S = \dfrac{\pi d^2}{4}$; cena na kN $= \dfrac{\text{cena}}{F}$
:::

**Rešitev:**

1. Presek: $S = \dfrac{\pi \cdot 8{,}0^2}{4} \approx 50{,}27\,\mathrm{mm^2}$.
2. S235: $F_1 = 235\,\mathrm{N/mm^2} \cdot 50{,}27\,\mathrm{mm^2} \approx 11\,810\,\mathrm{N} = 11{,}8\,\mathrm{kN}$.
3. S355: $F_2 = 355\,\mathrm{N/mm^2} \cdot 50{,}27\,\mathrm{mm^2} \approx 17\,840\,\mathrm{N} = 17{,}8\,\mathrm{kN}$.
4. Cena na kN: $\dfrac{2{,}40}{11{,}81} \approx 0{,}203$ € in $\dfrac{2{,}90}{17{,}84} \approx 0{,}163$ €.
5. Odgovor: dražja palica S355 je na enoto nosilnosti za približno petino cenejša, ker trdnost naraste bolj kot cena.

### Primer 3 (težji): je cenejša ponudba res cenejša?

Za zunanji žerjav, ki bo delal pozimi do $-20\,^\circ\mathrm{C}$, potrebujemo $2400\,\mathrm{kg}$ pločevine. Ponudnik A prodaja S355JR po $1{,}10$ €/kg, ponudnik B S355J2 po $1{,}18$ €/kg. Charpyjevo nihalo z maso $20{,}0\,\mathrm{kg}$ spustimo z višine $1{,}50\,\mathrm{m}$. Epruveta iz ponudbe A, ohlajena na $-20\,^\circ\mathrm{C}$, ga po lomu pusti dvigniti do $1{,}38\,\mathrm{m}$. Zahteva je vsaj $27\,\mathrm{J}$. Katero ponudbo izberemo in koliko več plačamo?

**Podatki:** $m_{\text{pl}} = 2400\,\mathrm{kg}$, $1{,}10$ €/kg in $1{,}18$ €/kg, $m = 20{,}0\,\mathrm{kg}$, $h_1 = 1{,}50\,\mathrm{m}$, $h_2 = 1{,}38\,\mathrm{m}$, $g = 9{,}81\,\mathrm{m/s^2}$, zahteva $\mathrm{KV} \ge 27\,\mathrm{J}$ pri $-20\,^\circ\mathrm{C}$
**Iščemo:** $\mathrm{KV}$ jekla A pri $-20\,^\circ\mathrm{C}$, izbiro in razliko v ceni

:::formula
$\mathrm{KV} = m g (h_1 - h_2)$; razlika v ceni $= m_{\text{pl}} \cdot \Delta(\text{cena na kg})$
:::

**Rešitev:**

1. Višinska razlika: $h_1 - h_2 = 1{,}50 - 1{,}38 = 0{,}12\,\mathrm{m}$.
2. $\mathrm{KV} = 20{,}0 \cdot 9{,}81 \cdot 0{,}12\,\mathrm{J} \approx 23{,}5\,\mathrm{J}$, kar je manj od $27\,\mathrm{J}$: jeklo A je pri tej temperaturi pod prehodno temperaturo in se lomi krhko.
3. Jeklo B ima oznako J2, ki zagotavlja $27\,\mathrm{J}$ prav pri $-20\,^\circ\mathrm{C}$.
4. Razlika v ceni: $2400 \cdot (1{,}18 - 1{,}10) = 192$ €.
5. Odgovor: izberemo ponudbo B; zanesljivost pozimi stane $192$ € več, kar je malo v primerjavi s posledicami krhkega loma.

### Primer 4: zdaj ti – duktilnost iz nateznega preizkusa

Epruveta iz jekla ima $d_0 = 8{,}0\,\mathrm{mm}$ in $L_0 = 80{,}0\,\mathrm{mm}$. Po pretrgu sestavimo dela: $L_u = 92{,}0\,\mathrm{mm}$, premer v vratu $d_u = 6{,}4\,\mathrm{mm}$. Izračunaj raztezek po pretrgu $A$ in kontrakcijo $Z$.

**Podatki:** $d_0 = 8{,}0\,\mathrm{mm}$, $L_0 = 80{,}0\,\mathrm{mm}$, $L_u = 92{,}0\,\mathrm{mm}$, $d_u = 6{,}4\,\mathrm{mm}$
**Iščemo:** $A$ in $Z$ v odstotkih

:::formula
$A = \dfrac{L_u - L_0}{L_0} \cdot 100\,\%$, $Z = \left(1 - \dfrac{d_u^2}{d_0^2}\right) \cdot 100\,\%$
:::

**Rešitev:**

1. Podaljšek: $L_u - L_0 = 92{,}0 - 80{,}0 = 12{,}0\,\mathrm{mm}$.
2. Razmerje premerov: $\dfrac{d_u}{d_0} = \dfrac{6{,}4}{8{,}0} = 0{,}80$; pri kontrakciji ga kvadriramo, ker je presek sorazmeren s kvadratom premera.
3. Dokončaj sam, nato preveri:

:::premisli
Koliko sta $A$ in $Z$?
---
$A = \dfrac{12{,}0}{80{,}0} \cdot 100\,\% = 15{,}0\,\%$ in $Z = (1 - 0{,}64) \cdot 100\,\% = 36\,\%$.
:::

## Pogoste napake

- **Napetost s presekom v vratu.** Kdor $R_m$ računa s končnim presekom $S_u$, dobi več kot dvakrat večjo vrednost. Inženirske napetosti vedno delimo s prvotnim $S_0$.
- **Premer namesto polmera.** $S = \pi d^2$ da štirikrat prevelik presek in štirikrat premajhno napetost. Pravilno je $S = \pi d^2/4$.
- **»Trdnejše jeklo je tudi bolj togo.«** Toplotna obdelava in legiranje spremenijo $R_e$ in $R_m$, modul $E$ pa ostane okoli $210\,\mathrm{GPa}$. Togost povečaš z večjim presekom, ne z boljšim jeklom.
- **»Trdo pomeni žilavo.«** Kaljen martenzit je zelo trd, a krhek. Trdota in žilavost se pogosto izključujeta; kompromis dosežemo s popuščanjem.
- **Žilavost brez temperature.** $\mathrm{KV} = 100\,\mathrm{J}$ pri sobni temperaturi ne pove nič o zimi. Feritna jekla imajo prehodno temperaturo, zato je na atestu podatek vedno vezan na temperaturo.

## Povzetek

- Natezni preizkus: $\sigma = F/S_0$, $\varepsilon = \Delta L/L_0$; prožno območje $\sigma = E\,\varepsilon$, za jekla $E \approx 210\,\mathrm{GPa}$.
- Meja tečenja $R_e$ (ali $R_{p0,2}$) je začetek trajne deformacije, natezna trdnost $R_m = F_{\max}/S_0$; dimenzioniramo po $R_e$.
- Duktilnost: raztezek po pretrgu $A$ in kontrakcija $Z$.
- Trdota (Vickers, Brinell, Rockwell) je odpornost proti vtiskovanju; za jekla $R_m \approx 3{,}3 \cdot \mathrm{HV}$.
- Udarna žilavost (Charpy) $\mathrm{KV} = m g (h_1 - h_2)$; feritna jekla imajo prehodno temperaturo žilavo–krhko, avstenitna in druge kovine s ploskovno centrirano mrežo je nimajo.
- Kaljenje poveča trdoto in zmanjša žilavost, popuščanje del žilavosti vrne.

## Drugače: Z analogijo

Predstavljaj si tri stvari iz trgovine: gumico, žvečilni gumi in prepečenec.

- **Gumica** se raztegne in vrne v prvotno obliko. To je prožno območje; kako močno jo moraš vleči za določen raztezek, pove $E$.
- **Žvečilni gumi** se vleče in ostane raztegnjen. To je plastična deformacija po meji tečenja; dolga nitka pred pretrgom pomeni velik $A$.
- **Prepečenec** se zlomi brez opozorila. To je krhek material.

Žilavost je kot cona gnetenja v avtomobilu: dobra ni tista, ki se ne deformira, ampak tista, ki pri trku porabi čim več energije. Mrzlo feritno jeklo se obnaša kot prepečenec, toplo pa bolj kot žvečilni gumi. Analogija ima mejo: gumica ni kovina, njena prožnost izvira iz polimernih verig, ne iz vezi med atomi v mreži.

## Drugače: Bolj natančno

**Inženirska in prava napetost.** Inženirska napetost deli s $S_0$, prava s trenutnim presekom: $\sigma_{\text{p}} = F/S$. Ker se ob nastanku vratu presek hitro manjša, inženirska krivulja po $R_m$ pade, prava pa raste vse do loma. Pri enakomerni deformaciji (stalna prostornina) velja $\sigma_{\text{p}} = \sigma(1 + \varepsilon)$.

**Energija.** Ploščina pod krivuljo $\sigma$–$\varepsilon$ je delo na enoto prostornine, ki ga material sprejme do loma, v $\mathrm{J/m^3}$. Material z veliko $R_m$ in veliko $A$ ima veliko ploščino in je žilav. Charpyjev $\mathrm{KV}$ to meri pri udarcu in z zarezo, kar je strožje.

**Formula za Vickers.** Piramida ima kot med ploskvama $136^\circ$. Trdota je sila na ploščino vtiska: $\mathrm{HV} = \dfrac{2F\sin 68^\circ}{d^2}$ v $\mathrm{kgf/mm^2}$. Ko silo vstavimo v newtonih, pomnožimo z $1/9{,}807 \approx 0{,}102$, zato je konstanta $2 \cdot \sin 68^\circ \cdot 0{,}102 \approx 0{,}1891$.

**Prehodna temperatura.** V prostorsko centrirani kubični mreži je gibanje vijačnih dislokacij močno odvisno od temperature. Pri nizki temperaturi meja tečenja naraste nad napetost, ki je potrebna za cepilni lom po kristalnih ravninah, in material poči brez plastične deformacije. V ploskovno centrirani kubični mreži je dovolj lahko drsnih sistemov pri vseh temperaturah, zato krhkega prehoda ni. Prehodno temperaturo znižamo z drobnozrnatim jeklom in manj ogljika.

## Preveri se

? Katera metoda ne spada med ostale?
- Brinell
~ Brinellova metoda meri trdoto z vtiskom kroglice, tako kot ostali dve vtiskovalni metodi.
- Vickers
~ Vickersova metoda meri trdoto z vtiskom diamantne piramide.
- Rockwell
~ Rockwellova metoda meri trdoto iz globine vtiska.
+ Charpy
> Charpyjev preizkus meri udarno žilavost (energijo loma), ostale tri merijo trdoto.

? Palico s premerom $12{,}0\,\mathrm{mm}$ obremenimo z natezno silo $20{,}0\,\mathrm{kN}$. Kolikšna je napetost?
- $44{,}2\,\mathrm{MPa}$
~ Presek si izračunal kot $\pi d^2$ namesto $\pi d^2/4$, zato je štirikrat prevelik.
- $139\,\mathrm{MPa}$
~ Delil si z $d^2$ in pozabil faktor $\pi/4$.
+ $177\,\mathrm{MPa}$
> $S = \pi \cdot 12{,}0^2/4 \approx 113{,}1\,\mathrm{mm^2}$, $\sigma = 20\,000\,\mathrm{N}/113{,}1\,\mathrm{mm^2} \approx 177\,\mathrm{MPa}$.

? Jeklo kalimo, da nastane martenzit. Kaj je posledica?
- Trdota in žilavost obe narasteta.
~ Trdota in žilavost se pri martenzitu ne gibljeta skupaj: trdota naraste, žilavost pade.
+ Trdota naraste, žilavost pade, zato jeklo nato popuščamo.
- Modul elastičnosti se podvoji.
~ $E$ je odvisen od vezi med atomi in se s toplotno obdelavo skoraj ne spremeni.
> Martenzit je prenasičen z ogljikom in napet, zato je trd in krhek; popuščanje zmanjša napetosti in vrne del žilavosti.

? Študent računa $R_m$ za epruveto z $d_0 = 10{,}0\,\mathrm{mm}$, $F_{\max} = 41{,}6\,\mathrm{kN}$ in premerom v vratu $6{,}0\,\mathrm{mm}$. (1) $S_0 = 78{,}5\,\mathrm{mm^2}$. (2) $S_u = 28{,}3\,\mathrm{mm^2}$. (3) $R_m = 41\,600/28{,}3 \approx 1470\,\mathrm{MPa}$. Kateri korak je napačen?
- Korak 1
~ $\pi \cdot 10{,}0^2/4 \approx 78{,}5\,\mathrm{mm^2}$ je pravilno.
- Korak 2
~ $\pi \cdot 6{,}0^2/4 \approx 28{,}3\,\mathrm{mm^2}$ je pravilen presek v vratu, potreben za kontrakcijo.
+ Korak 3
> Natezno trdnost računamo s prvotnim presekom: $R_m = 41\,600/78{,}5 \approx 530\,\mathrm{MPa}$.

? Za zunanje stopnišče v gorah, kjer pozimi pade do $-20\,^\circ\mathrm{C}$, izbiraš med S235JR (žilavost zagotovljena pri $+20\,^\circ\mathrm{C}$) in nekoliko dražjim S235J2 (pri $-20\,^\circ\mathrm{C}$). Kaj izbereš?
- S235JR, ker imata obe enako mejo tečenja.
~ Enaka $R_e$ ne pomeni enake žilavosti pri mrazu. Pod prehodno temperaturo se lahko jeklo JR lomi krhko.
+ S235J2, ker je žilavost zagotovljena pri najnižji temperaturi uporabe.
- Vseeno je, ker stopnišče ni obremenjeno z udarci.
~ Krhek lom sproži že razpoka ali zareza ob zvaru, ne le udarec; tako so pokale tudi ladje Liberty.
> Žilavost mora biti zagotovljena pri najnižji temperaturi, pri kateri del dela; oznaka J2 to zagotavlja pri $-20\,^\circ\mathrm{C}$.

:::simboli
\mathrm{HV} | trdota po Vickersu | \mathrm{HV} = 0{,}1891\,\dfrac{F}{d^2} | – | F v N, d v mm; za jekla natezna trdnost ≈ 3,3 · HV
F | sila | | N | pri meji tečenja F = Rₑ · S
d | povprečna diagonala vtiska | d = \dfrac{d_1 + d_2}{2} | mm | v S = πd²/4 premer palice
d_1, d_2 | izmerjeni diagonali vtiska | | mm
R_e | meja tečenja | | MPa |
S | ploščina prečnega prereza | S = \dfrac{\pi d^2}{4} | mm^2 |
\mathrm{KV} | udarna žilavost (porabljena energija po Charpyju) | \mathrm{KV} = m g (h_1 - h_2) | J |
m | masa nihala | | kg |
g | težni pospešek | | m/s^2 | 9,81 m/s²
h_1 | začetna višina nihala | | m |
h_2 | višina, do katere se nihalo dvigne po lomu | | m |
m_{\text{pl}} | masa pločevine | | kg |
A | raztezek po pretrgu | A = \dfrac{L_u - L_0}{L_0} \cdot 100\,\% | \% |
L_u | merilna dolžina po pretrgu | | mm |
L_0 | začetna merilna dolžina | | mm |
Z | kontrakcija (zoženje preseka) | Z = \left(1 - \dfrac{d_u^2}{d_0^2}\right) \cdot 100\,\% | \% |
d_u | premer v vratu po pretrgu | | mm |
d_0 | začetni premer epruvete | | mm |
:::
