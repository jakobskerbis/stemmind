---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Sošolka trdi: »Kromatografija je odveč. Če hočem v zraku izmeriti benzen in toluen, posnamem UV spekter mešanice in iz absorbance izračunam obe koncentraciji. Beer-Lambertov zakon že poznamo.«

Na prvi pogled zveni smiselno. A pomisli na rover, ki na Marsu segreje vzorec kamnine, ali na sondo, ki je pristala na Saturnovi luni Titan. Iz vzorca se sprostijo desetine ali stotine organskih spojin, ki jih nihče ne pozna vnaprej. Obe napravi sta zato nosili **plinski kromatograf** z masnim spektrometrom, ne samo spektrometra. Spektrometer namreč vidi vse snovi hkrati, kromatograf pa jih najprej razvrsti eno za drugo.

## Razlaga

**Od spektra h kromatogramu.** V kiveti spektrometra so vse molekule hkrati. Absorbanca pri izbrani valovni dolžini je vsota prispevkov vseh snovi:

$$A = b\,(\varepsilon_1 c_1 + \varepsilon_2 c_2 + \dots)$$

Benzen in toluen imata široka, skoraj prekrita absorpcijska pasova okrog $255\,\mathrm{nm}$. Iz ene vsote ne razbereš dveh neznank, pri stotih spojinah pa je naloga brezupna. Kromatografija obrne vrstni red: **najprej loči** snovi v času, šele nato jih detektor meri **eno za drugo**. V tekočinski kromatografiji je detektor pogosto kar UV-VIS spektrometer s pretočno celico. Staro znanje torej ostane, le da zdaj vsak vrh pripada eni snovi.

**Kako nastane ločba.** Kromatografska kolona vsebuje **stacionarno fazo**, skozi njo teče **mobilna faza**. Molekule analita ves čas prehajajo med fazama. Ravnotežje opiše **porazdelitveni koeficient** $K = c_\mathrm{S}/c_\mathrm{M}$, razmerje koncentracij v stacionarni in mobilni fazi. Snov z večjim $K$ preživi več časa vezana, zato pride iz kolone kasneje.

Zapis signala detektorja v odvisnosti od časa je **kromatogram**. Vsaka snov da **vrh**. Čas od injiciranja do vrha je **retencijski čas** $t_\mathrm{R}$. Snov, ki se sploh ne zadržuje, pride ven v **mrtvem času** $t_\mathrm{M}$.

**Širina vrha in ločljivost.** Molekule iste snovi ne pridejo ven hkrati: difundirajo in potujejo po različno dolgih poteh med delci. Vrh ima zato obliko zvona. Njegovo **širino na bazni liniji** $w$ dobimo iz tangent v prevojih; znaša okrog štiri standardne odklone. Kakovost kolone opiše **število teoretskih podov** $N = 16\,(t_\mathrm{R}/w)^2$. Za vrh s $t_\mathrm{R} = 4{,}20\,\mathrm{min}$ in $w = 0{,}28\,\mathrm{min}$ je $N = 16 \cdot 15^2 = 3600$.

Dva vrhova sta ločena, če je razdalja med njunima sredinama velika v primerjavi z njuno širino. To pove **ločljivost**:

$$R_\mathrm{s} = \frac{2\,(t_\mathrm{R,2} - t_\mathrm{R,1})}{w_1 + w_2}$$

Pri $R_\mathrm{s} = 1$ se vrhova prekrivata za okrog $2\,\%$. Pri $R_\mathrm{s} \geq 1{,}5$ sta ločena do bazne linije, kar je cilj pri kvantitativni analizi.

:::premisli
Kolono iste vrste podaljšamo na dvakratno dolžino, drugi pogoji ostanejo enaki. Kolikokrat se poveča ločljivost? Napovej, preden bereš naprej.
---
Približno $\sqrt{2} \approx 1{,}41$-krat, ne dvakrat. Retencijska časa in njuna razlika se podvojita. Število podov $N$ se tudi podvoji, širina pa je $w = 4\,t_\mathrm{R}/\sqrt{N}$, torej zraste za $2/\sqrt{2} = \sqrt{2}$. Razlika zraste dvakrat, širina $\sqrt{2}$-krat, razmerje pa $\sqrt{2}$-krat.
:::

**Plinska in tekočinska kromatografija.** Obe tehniki ločujeta po istem načelu, razlikujeta pa se v mobilni fazi. Iz te razlike sledi skoraj vse drugo:

| | plinska (GC) | tekočinska (HPLC) |
|---|---|---|
| mobilna faza | inerten plin (He, $\mathrm{N_2}$, $\mathrm{H_2}$) | topilo (voda, metanol, acetonitril) |
| retencijo uravnavamo | s temperaturo kolone | s sestavo mobilne faze |
| primeren vzorec | hlapen, toplotno obstojen | raztopljen; tudi nehlapen ali toplotno občutljiv |
| kolona | kapilarna, $15$–$60\,\mathrm{m}$ | polnjena, $5$–$25\,\mathrm{cm}$, delci $2$–$5\,\mathrm{µm}$ |
| detektorji | FID, TCD, MS | UV-VIS (DAD), fluorescenčni, MS |

Nosilni plin (mobilna faza v GC) z analitom skoraj ne interagira; samo prenaša pare. Ločbo določata stacionarna faza in temperatura: višja temperatura poveča parni tlak in skrajša retencijo. Pri **temperaturnem programu** kolono med analizo segrevamo, da hlapne snovi izidejo zgodaj in ločeno, težje pa ne čakajo ure.

V HPLC topilo aktivno tekmuje s stacionarno fazo. Najpogostejša je **reverzno-fazna** izvedba: nepolarna stacionarna faza (verige $\mathrm{C_{18}}$ na silikagelu) in polarna mobilna faza. Polarne snovi izidejo prve. Spreminjanju sestave topila med analizo rečemo **gradientna elucija**.

:::premisli
Pri reverzno-fazni HPLC povečamo delež acetonitrila v mobilni fazi s $30\,\%$ na $50\,\%$. Kaj se zgodi z retencijskimi časi in zakaj?
---
Skrajšajo se. Mobilna faza postane manj polarna, zato nepolarne molekule v njej laže ostanejo. Porazdelitveni koeficient $K$ se zmanjša in snovi prej zapustijo kolono.
:::

**Umeritvena krivulja.** Pri spektrometriji je bil signal absorbanca. Pri kromatografiji je signal **površina vrha**, ki je sorazmerna z množino snovi, ki je šla skozi detektor. Postopek je enak: izmerimo standarde z znanimi koncentracijami, skozi točke položimo premico $y = a + b\,c$ po metodi najmanjših kvadratov in iz površine vrha vzorca izračunamo $c$.

Dve razliki sta pomembni. Prvič, detektor se na vsako snov odzove drugače (FID približno sorazmerno s številom ogljikovih atomov, UV-detektor sorazmerno z $\varepsilon$). Zato vsaka snov potrebuje svojo umeritev. Drugič, v GC injiciramo okrog $1\,\mathrm{µL}$ vzorca in ta volumen ni vedno natanko enak. Pomagamo si z **notranjim standardom**: v vse standarde in vzorce dodamo enako količino snovi, ki je v vzorcu ni. Na os $y$ nato nanašamo razmerje površin $A_x/A_\mathrm{IS}$. Če se injicira $5\,\%$ manj, se zmanjšata obe površini in razmerje ostane enako.

## Rešeni primeri

### Primer 1: dovolj ločena vrhova?

Plinski kromatograf na roverju na Marsu analizira pare iz segrete kamnine. Benzen ima $t_\mathrm{R} = 4{,}20\,\mathrm{min}$ in širino vrha $0{,}28\,\mathrm{min}$, toluen $t_\mathrm{R} = 4{,}65\,\mathrm{min}$ in širino $0{,}32\,\mathrm{min}$. Sta vrhova ločena do bazne linije?

**Podatki:** $t_\mathrm{R,1} = 4{,}20\,\mathrm{min}$, $w_1 = 0{,}28\,\mathrm{min}$, $t_\mathrm{R,2} = 4{,}65\,\mathrm{min}$, $w_2 = 0{,}32\,\mathrm{min}$
**Iščemo:** ločljivost $R_\mathrm{s}$

:::formula
$R_\mathrm{s} = \dfrac{2\,(t_\mathrm{R,2} - t_\mathrm{R,1})}{w_1 + w_2}$
:::

**Rešitev:**

1. Razlika retencijskih časov: $4{,}65 - 4{,}20 = 0{,}45$ min.
2. Vsota širin: $0{,}28 + 0{,}32 = 0{,}60$ min.
3. $R_\mathrm{s} = \dfrac{2 \cdot 0{,}45}{0{,}60} = 1{,}5$. Faktor $2$ je tu, ker primerjamo razdaljo s *povprečno* širino.
4. Odgovor: $R_\mathrm{s} = 1{,}5$, vrhova sta ravno ločena do bazne linije.

### Primer 2: kofein iz umeritvene premice

S HPLC in UV-detektorjem določamo kofein v energijski pijači. Standardi dajo:

| $c$ [mg/L] | površina [mAU·s] |
|---|---|
| $10$ | $1250$ |
| $20$ | $2410$ |
| $40$ | $4890$ |
| $80$ | $9700$ |

Pijačo smo razredčili $10$-krat; površina vrha vzorca je $3900\,\mathrm{mAU \cdot s}$. Kolikšna je koncentracija kofeina v pijači?

**Podatki:** štirje standardi (preglednica), $A_\mathrm{vz} = 3900\,\mathrm{mAU \cdot s}$, faktor razredčitve $f = 10$
**Iščemo:** koncentracija kofeina v pijači $c_0$

:::formula
$b = \dfrac{\sum (c_i - \bar c)(A_i - \bar A)}{\sum (c_i - \bar c)^2}$, $\quad a = \bar A - b\,\bar c$, $\quad c_0 = f \cdot \dfrac{A_\mathrm{vz} - a}{b}$
:::

**Rešitev:**

1. Povprečji: $\bar c = 37{,}5$ mg/L, $\bar A = 4562{,}5$ mAU·s.
2. Odmiki $c_i - \bar c$ so $-27{,}5$, $-17{,}5$, $2{,}5$, $42{,}5$; odmiki $A_i - \bar A$ so $-3312{,}5$, $-2152{,}5$, $327{,}5$, $5137{,}5$.
3. Vsota produktov odmikov: $91\,093{,}75 + 37\,668{,}75 + 818{,}75 + 218\,343{,}75 = 347\,925$.
4. Vsota kvadratov odmikov $c$: $756{,}25 + 306{,}25 + 6{,}25 + 1806{,}25 = 2875$.
5. Naklon: $b = 347\,925 / 2875 \approx 121{,}02$ mAU·s na mg/L.
6. Odsek: $a = 4562{,}5 - 121{,}02 \cdot 37{,}5 \approx 24{,}3$ mAU·s.
7. Razredčeni vzorec: $c = (3900 - 24{,}3) / 121{,}02 \approx 32{,}0$ mg/L. Odsek odštejemo, ker del signala ni sorazmeren s koncentracijo.
8. Pijača: $32{,}0 \cdot 10 = 320$ mg/L.
9. Odgovor: pijača vsebuje okrog $320\,\mathrm{mg/L}$ kofeina, kar je $32\,\mathrm{mg}$ na $100\,\mathrm{mL}$.

### Primer 3 (težji): kolona za vesoljsko sondo

Za kromatograf na sondi preizkušajo kolono dolžine $15\,\mathrm{m}$. Kritični par spojin ima na njej $R_\mathrm{s} = 1{,}0$, druga spojina izide pri $6{,}0\,\mathrm{min}$. Na voljo je tudi kolona dolžine $30\,\mathrm{m}$. Ali zadošča za bazno ločbo? Kako dolga kolona bi dala natanko $R_\mathrm{s} = 1{,}5$ in koliko bi trajala analiza do tega vrha? Pogoji in polnitev kolone ostanejo enaki.

**Podatki:** $L_1 = 15\,\mathrm{m}$, $R_\mathrm{s,1} = 1{,}0$, $t_\mathrm{R}(15\,\mathrm{m}) = 6{,}0\,\mathrm{min}$, $L_2 = 30\,\mathrm{m}$, cilj $R_\mathrm{s} = 1{,}5$
**Iščemo:** $R_\mathrm{s}$ pri $30\,\mathrm{m}$, potrebna dolžina $L$, retencijski čas pri tej dolžini

:::formula
$R_\mathrm{s} \propto \sqrt{N} \propto \sqrt{L}$, torej $\dfrac{R_\mathrm{s,2}}{R_\mathrm{s,1}} = \sqrt{\dfrac{L_2}{L_1}}$; $\quad t_\mathrm{R} \propto L$
:::

**Rešitev:**

1. Pri $30\,\mathrm{m}$: $R_\mathrm{s} = 1{,}0 \cdot \sqrt{30/15} \approx 1{,}41$. To je manj kot $1{,}5$, kolona ne zadošča.
2. Potrebna dolžina: $L = 15 \cdot (1{,}5/1{,}0)^2 = 33{,}75$ m. Ločljivost moramo povečati $1{,}5$-krat, dolžino pa zato kvadrat tega, $2{,}25$-krat.
3. Retencijski čas raste sorazmerno z dolžino: $6{,}0 \cdot 2{,}25 = 13{,}5$ min.
4. Odgovor: kolona $30\,\mathrm{m}$ da le $R_\mathrm{s} \approx 1{,}41$. Za $R_\mathrm{s} = 1{,}5$ bi potrebovali okrog $34\,\mathrm{m}$, analiza pa bi se podaljšala na $13{,}5\,\mathrm{min}$. Zato raje izberemo selektivnejšo stacionarno fazo ali drug temperaturni program.

### Primer 4 – zdaj ti: notranji standard

Vodo iz sistema za recikliranje na vesoljski postaji pred čiščenjem analizirajo s HPLC in notranjim standardom. Umeritvena premica je $A_x/A_\mathrm{IS} = 0{,}02 + 0{,}250\,c$ ($c$ v mg/L). Vzorec so razredčili $5$-krat, izmerjeno razmerje površin je $1{,}32$. Kolikšna je koncentracija onesnažila v vodi?

**Podatki:** $a = 0{,}02$, $b = 0{,}250\,\mathrm{L/mg}$, $A_x/A_\mathrm{IS} = 1{,}32$, $f = 5$
**Iščemo:** koncentracija $c_0$ v nerazredčeni vodi

:::formula
$c_0 = f \cdot \dfrac{A_x/A_\mathrm{IS} - a}{b}$
:::

**Rešitev:**

1. Na osi $y$ je razmerje površin, zato vstavimo $1{,}32$ in ne posamezne površine.
2. Od razmerja odštejemo odsek: $1{,}32 - 0{,}02 = 1{,}30$.
3. Deli z naklonom in upoštevaj razredčitev.

:::premisli
Kolikšna je koncentracija?
---
$c = 1{,}30 / 0{,}250 = 5{,}2$ mg/L v razredčenem vzorcu; v vodi $5{,}2 \cdot 5 = 26$ mg/L.
:::

## Pogoste napake

Največ napak izvira iz tega, da ločljivost ali umeritev beremo »na pol«.

- **Ločljivost je samo razlika retencijskih časov.** Vrhova $0{,}45\,\mathrm{min}$ narazen sta lahko lepo ločena (ozka vrhova) ali popolnoma zlita (široka vrhova). Razliko vedno primerjaj s širinama: $R_\mathrm{s} = \dfrac{2\,\Delta t_\mathrm{R}}{w_1 + w_2}$.
- **Dvakrat daljša kolona, dvakrat večja ločljivost.** Širina vrhov raste s $\sqrt{L}$, zato ločljivost raste le s $\sqrt{L}$. Za dvakratno ločljivost potrebuješ štirikrat daljšo kolono in štirikrat daljšo analizo.
- **Ena umeritev za vse snovi.** Detektor se na različne snovi različno odzove. Enaki površini benzena in toluena ne pomenita enakih koncentracij; vsaka snov potrebuje svoj standard.
- **Pozabljen odsek ali razredčitev.** $c = A/b$ je pravilno le, če je $a = 0$. Najprej odštej odsek, nato deli z naklonom in na koncu pomnoži s faktorjem razredčitve.
- **GC za vse.** Sladkorji, beljakovine in mnoga zdravila niso hlapni ali razpadejo pri segrevanju. Zanje izberi HPLC. Tudi zamenjava nosilnega plina ločbe v GC skoraj ne spremeni, ker plin z analitom ne interagira.

## Povzetek

- Spektrometrija meri vse snovi v kiveti hkrati (absorbance se seštevajo); kromatografija snovi najprej loči v času, nato jih detektor meri posamič.
- Ločba temelji na porazdelitvi med stacionarno in mobilno fazo, $K = c_\mathrm{S}/c_\mathrm{M}$; večji $K$ pomeni daljši retencijski čas $t_\mathrm{R}$.
- Število podov $N = 16\,(t_\mathrm{R}/w)^2$; ločljivost $R_\mathrm{s} = \dfrac{2\,(t_\mathrm{R,2} - t_\mathrm{R,1})}{w_1 + w_2}$; $R_\mathrm{s} \geq 1{,}5$ pomeni bazno ločbo. $R_\mathrm{s}$ raste s $\sqrt{L}$.
- GC: inerten plin, hlapni in toplotno obstojni vzorci, retencijo uravnava temperatura. HPLC: tekoča mobilna faza, tudi nehlapni vzorci, retencijo uravnava sestava topila (reverzno-fazna: polarne snovi izidejo prve).
- Kvantifikacija: površina vrha proti koncentraciji standardov, premica $y = a + b\,c$ po metodi najmanjših kvadratov; $c = f \cdot (y - a)/b$. Notranji standard izniči nihanja injiciranega volumna.

## Drugače: Na sliki

Kromatogram iz primera 1, narisan z besedami (čas teče v desno):

```
signal
  |            benzen   toluen
  |              /\       /\
  |             /  \     /  \
  |            /    \   /    \
  |___________/      \_/      \______
  0          4,06  4,34 4,49 4,81    čas [min]
                4,20     4,65
```

Benzenov vrh se začne pri $4{,}06$ in konča pri $4{,}34\,\mathrm{min}$ (sredina $\pm$ polovica širine), toluenov se začne pri $4{,}49\,\mathrm{min}$. Med njima je kratek odsek bazne linije, zato $R_\mathrm{s} = 1{,}5$ pomeni »ravno še ločena«. Pri $R_\mathrm{s} = 1$ bi se vrhova dotikala, pri $R_\mathrm{s} = 0{,}5$ bi bila videti kot en vrh z ramo.

## Drugače: Iz vsakdanjega življenja

Pri množičnem teku vsi tekači startajo hkrati. Proga je kolona, tekači so molekule. Hitri tekači so snovi z majhnim $K$, počasni tisti, ki se pogosto »ustavijo« pri stojnicah z napitki (stacionarna faza).

Na startu je vse ena gneča. Na cilju se tekači razporedijo v skupine po hitrosti; to je ločba. Vsaka skupina pa se med tekom tudi raztegne, ker nihče ne teče natanko enako; to je širina vrha. Ločljivost pove, ali je med zadnjim tekačem prve skupine in prvim druge skupine prazen prostor. Daljša proga razliko med skupinama poveča, a tudi raztegne vsako skupino, zato pomaga manj, kot bi pričakoval.

## Preveri se

? Katera trditev o plinski kromatografiji drži?
- Mobilna faza je tekočina, ki raztaplja analit.
~ To velja za tekočinsko kromatografijo. V GC je mobilna faza inerten plin.
- Prej izide snov z večjim porazdelitvenim koeficientom $K$.
~ Večji $K$ pomeni, da je snov več časa v stacionarni fazi, zato izide kasneje.
+ Retencijo uravnavamo predvsem s temperaturo kolone in izbiro stacionarne faze.
- Primerna je za beljakovine in sladkorje, ker se pri segrevanju ne spremenijo.
~ Beljakovine in sladkorji niso hlapni in pri segrevanju razpadejo; zanje uporabimo HPLC.
> Nosilni plin z analitom skoraj ne interagira, zato ločbo določata stacionarna faza in temperatura.

? Vrhova imata $t_\mathrm{R,1} = 7{,}40\,\mathrm{min}$ in $t_\mathrm{R,2} = 7{,}80\,\mathrm{min}$, oba širino na bazni liniji $0{,}40\,\mathrm{min}$. Kolikšna je ločljivost?
- $0{,}40$
~ To je le razlika retencijskih časov v minutah, ne ločljivost. Primerjati jo moraš s širinama.
- $0{,}5$
~ Pozabil si faktor $2$ v števcu (razdaljo primerjamo s povprečno širino).
+ $1{,}0$
- $2{,}0$
~ Razdaljo si delil le z eno širino. Imenovalec je vsota obeh širin.
> $R_\mathrm{s} = \dfrac{2 \cdot 0{,}40}{0{,}40 + 0{,}40} = 1{,}0$. Vrhova se še prekrivata, za bazno ločbo potrebujemo $1{,}5$.

? Umeritvena premica je $A = 120 + 95\,c$ ($c$ v mg/L). Vzorec je bil razredčen $2$-krat, površina njegovega vrha je $1070$. Študent je izračunal: $c = 1070/95 = 11{,}3\,\mathrm{mg/L}$, v vzorcu $2 \cdot 11{,}3 = 22{,}6\,\mathrm{mg/L}$. Kje je napaka?
- Napake ni.
~ Rezultat je previsok: del površine ($120$) ni sorazmeren s koncentracijo in ga je treba odšteti.
+ Ni odštel odseka; pravilno je $c = (1070 - 120)/95 = 10{,}0\,\mathrm{mg/L}$, v vzorcu $20{,}0\,\mathrm{mg/L}$.
- Razredčitev bi moral upoštevati z deljenjem z $2$.
~ Vzorec je bil razredčen, zato je bil prvotno bolj koncentriran. Z razredčitvenim faktorjem množimo.
- Namesto deljenja bi moral pomnožiti: $c = 1070 \cdot 95$.
~ Naklon $95$ pove, koliko površine prinese $1\,\mathrm{mg/L}$; koncentracijo dobiš z deljenjem.
> Iz $A = a + b\,c$ sledi $c = (A - a)/b = 950/95 = 10{,}0\,\mathrm{mg/L}$; z razredčitvijo $20{,}0\,\mathrm{mg/L}$.

? Določiti moraš toplotno neobstojen, nehlapen antibiotik v tabletah. Katero tehniko izbereš in zakaj?
- GC, ker ima daljšo kolono in zato večjo ločljivost.
~ Dolžina kolone ne pomaga, če snov v plinski fazi sploh ne pride skozi kolono ali razpade v injektorju.
+ HPLC, ker vzorec ostane raztopljen in ga ni treba upariti.
- Obe sta enako primerni, razlikujeta se le v ceni.
~ Razlikujeta se v mobilni fazi: GC zahteva hlapen in toplotno obstojen vzorec, HPLC ne.
> V HPLC je mobilna faza tekočina, zato analiza poteka pri sobni ali rahlo povišani temperaturi. Nehlapne in občutljive snovi so tipično področje HPLC.

? Forenzični laboratorij določa etanol v krvi z GC. V vsak vzorec in standard doda enako količino propan-1-ola in na umeritveni krivulji uporabi razmerje površin. Zakaj?
- Ker propan-1-ol poveča ločljivost med etanolom in vodo.
~ Dodana snov ne spremeni kolone ali temperature, zato ločljivosti ne poveča.
- Ker detektor brez propan-1-ola etanola ne zazna.
~ FID etanol zazna sam. Propan-1-ol je referenca, ne pomoč detektorju.
+ Ker razmerje izniči razlike v injiciranem volumnu in nihanja instrumenta med meritvami.
> Propan-1-ol je notranji standard. Če se injicira manj vzorca, se zmanjšata obe površini, razmerje pa ostane enako.

:::simboli
A | absorbanca zmesi | A = b\,(\varepsilon_1 c_1 + \varepsilon_2 c_2 + \dots) | – | pri umeritvi: površina vrha (Ā povprečje)
\varepsilon_1, \varepsilon_2 | molarna absorpcijska koeficienta snovi | | L\,mol^{-1}\,cm^{-1}
c_1, c_2 | koncentraciji snovi v zmesi | | mol/L
b | naklon umeritvene premice | b = \dfrac{\sum (c_i - \bar c)(A_i - \bar A)}{\sum (c_i - \bar c)^2} | | v A = b(εc + …): dolžina poti skozi kiveto
a | odsek umeritvene premice | a = \bar A - b\,\bar c | | premica y = a + b c
c | masna koncentracija | | mg/L | c̄: povprečje koncentracij standardov
c_i | koncentracija i-tega standarda | | mg/L
A_i | površina vrha i-tega standarda | | mAU s
A_\mathrm{vz} | površina vrha vzorca | | mAU s
c_0 | koncentracija v prvotnem vzorcu | c_0 = f \cdot \dfrac{A_\mathrm{vz} - a}{b} | mg/L
f | faktor razredčitve | | – | kolikokrat smo vzorec razredčili
R_\mathrm{s} | ločljivost | R_\mathrm{s} = \dfrac{2\,(t_\mathrm{R,2} - t_\mathrm{R,1})}{w_1 + w_2} | – | pri R_s ≥ 1,5 ločitev do bazne linije
R_\mathrm{s,1} | ločljivost na krajši koloni | | –
R_\mathrm{s,2} | ločljivost na daljši koloni | | –
t_\mathrm{R} | retencijski čas | | min | od injiciranja do vrha
t_\mathrm{R,1} | retencijski čas prve snovi | | min
t_\mathrm{R,2} | retencijski čas druge snovi | | min
w_1 | širina prvega vrha na bazni liniji | | min
w_2 | širina drugega vrha na bazni liniji | | min
N | število teoretskih podov | | – | N = 16 (t_R/w)²
L | dolžina kolone | | m
L_1 | dolžina prvotne kolone | | m
L_2 | dolžina nove kolone | | m
A_x | površina vrha analita | | mAU s
A_\mathrm{IS} | površina vrha notranjega standarda | | mAU s
:::
