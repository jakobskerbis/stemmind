---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Na terenski vaji ob jezeru sošolec trdi: »Prvi meter vode vpije $30\,\%$ sončne svetlobe. Torej trije metri vpijejo $90\,\%$, šest metrov pa že vso.« Sliši se logično, a ni res. Do konca razlage boš znal izračunati, koliko svetlobe v resnici pride do globine treh metrov.

Isto vprašanje si postavljamo v laboratoriju. Koliko klorofila je v vzorcu jezera? Koliko cinka odnaša potok iz opuščenega rudnika? Vzorcu ne moremo pogledati v notranjost, lahko pa izmerimo, koliko svetlobe prepusti. **Spektrometrične metode** iz te meritve izračunajo koncentracijo. So hitre in poceni, zato so v analizi voda, tal in zraka najpogostejše.

## Razlaga

**1. Prepustnost.** Na vzorec posvetimo svetlobo z jakostjo $I_0$. Na drugi strani izmerimo jakost $I$, ki je manjša, ker je del svetlobe vzorec vpil. Razmerje

$$T = \frac{I}{I_0}$$

imenujemo **prepustnost** (transmitanca). Je število med $0$ in $1$, pogosto ga pišemo v odstotkih ($\%T$).

*Hiter preizkus:* detektor kaže $I = 20$, brez vzorca $I_0 = 80$ (poljubne enote). Kolikšen je $\%T$? (Odgovor: $25\,\%$.)

**2. Plast za plastjo.** Vodo v mislih razrežemo na enake plasti po en meter. Vsaka plast prepusti enak *delež* svetlobe, ki nanjo pade, ne enake količine.

| plast | delež svetlobe za plastjo | vpito skupaj |
|---|---|---|
| 0 m | $1{,}000$ | $0\,\%$ |
| 1 m | $0{,}700$ | $30\,\%$ |
| 2 m | $0{,}490$ | $51\,\%$ |
| 3 m | $0{,}343$ | $65{,}7\,\%$ |

Druga plast vpije $30\,\%$ od preostalih $70\,\%$, torej le $21\,\%$ začetne svetlobe. Sošolec se je zmotil, ker je odstotke seštel, namesto da bi jih množil. Prepustnost z debelino pada **eksponentno** in nikoli ne doseže nič.

:::premisli
Koliko svetlobe bi po tem pravilu prišlo do globine šestih metrov? Napovej, ali je to bliže $0\,\%$ ali $10\,\%$.
---
$0{,}7^6 \approx 0{,}118$, torej približno $12\,\%$. Šest metrov ne vpije vse svetlobe, ampak okoli $88\,\%$.
:::

**3. Absorbanca.** Množenje je nerodno, zato vpeljemo logaritem. **Absorbanca** je

$$A = -\log_{10} T = \log_{10}\frac{I_0}{I}$$

Za plasti iz tabele dobimo $A = 0{,}155$, $0{,}310$ in $0{,}465$. Absorbance se pri zaporednih plasteh **seštevajo**, zato absorbanca raste premo sorazmerno z debelino.

*Hiter preizkus:* $T = 0{,}10$. Koliko je $A$? (Odgovor: $1{,}0$.)

**4. Beer-Lambertov zakon.** Absorbanca je sorazmerna tudi s koncentracijo absorbirajoče snovi: dvakrat več molekul na isti poti vpije kot dvakrat debelejša plast. Oboje združi **Beer-Lambertov zakon**:

$$A = \varepsilon \, b \, c$$

Tu je $b$ dolžina poti skozi vzorec (debelina kivete, običajno $1{,}00\,\mathrm{cm}$), $c$ množinska koncentracija v $\mathrm{mol/L}$ in $\varepsilon$ **molarni absorpcijski koeficient** v $\mathrm{L\,mol^{-1}\,cm^{-1}}$. Koeficient $\varepsilon$ je lastnost snovi pri izbrani valovni dolžini: velik $\varepsilon$ pomeni, da snov to svetlobo močno vpija.

:::premisli
Raztopino razredčimo na polovico in jo izmerimo v dvakrat daljši kiveti. Kaj se zgodi z absorbanco?
---
Ostane enaka. Produkt $b \cdot c$ se ne spremeni: svetloba na poti sreča enako število molekul.
:::

**5. Umeritvena premica.** V praksi $\varepsilon$ redko vzamemo iz tabel. Izmerimo nekaj **standardov** z znano koncentracijo, narišemo $A$ proti $c$ in dobimo premico skozi izhodišče. Koncentracijo vzorca odčitamo s premice. Linearnost velja približno do $A \approx 1$; pri večjih absorbancah pride do detektorja premalo svetlobe in premica se ukrivi, zato vzorec razredčimo.

*Hiter preizkus:* standard z $c = 2{,}0\,\mathrm{mg/L}$ ima $A = 0{,}10$. Kolikšna je $c$ vzorca z $A = 0{,}30$? (Odgovor: $6{,}0\,\mathrm{mg/L}$.)

**6. UV-VIS spektrometrija.** Molekule vpijajo ultravijolično ($200$–$400\,\mathrm{nm}$) in vidno svetlobo ($400$–$800\,\mathrm{nm}$), ko elektroni preskočijo v višje energijsko stanje. Spektrometer ima vir (devterijeva žarnica za UV, volframova za VIS), **monokromator**, ki izbere eno valovno dolžino, kiveto in detektor.

Graf $A$ proti $\lambda$ je **absorpcijski spekter**; njegovi vrhovi so široki nekaj deset nanometrov. Merimo pri vrhu, $\lambda_{\max}$, kjer je metoda najbolj občutljiva. Raztopina ima barvo, komplementarno vpiti svetlobi: klorofil vpija modro in rdečo, zato je zelen. Za UV potrebujemo kremenove kivete, ker steklo UV vpija.

*Hiter preizkus:* zakaj ne merimo na pobočju vrha? (Odgovor: tam majhen premik $\lambda$ močno spremeni $A$.)

**7. Atomska absorpcijska spektrometrija (AAS).** Kovine v vodi so ioni, ki vidne svetlobe skoraj ne vpijajo. Pri AAS vzorec razpršimo v plamen ali segrejemo v grafitni kiveti (majhni grafitni cevki, ki jo segreje električni tok), da nastanejo prosti **atomi** v osnovnem stanju. Atomi vpijajo le pri zelo ostrih **črtah**, širokih okoli $0{,}005\,\mathrm{nm}$. Zato vir ni žarnica z zveznim spektrom, ampak **votla katodna žarnica** iz iste kovine, ki seva prav te črte. Za vsak element potrebujemo svojo žarnico. Metoda je zelo selektivna: druge kovine pri tej črti ne vpijajo. Koncentracijo spet dobimo z umeritveno premico $A = k\,c$.

## Rešeni primeri

### Primer 1 (lažji): voda z algami

Vzorec jezerske vode s cvetenjem alg prepusti $40{,}0\,\%$ svetlobe pri $665\,\mathrm{nm}$. Kolikšna je absorbanca? Kolikšna bi bila pri $\%T = 4{,}0\,\%$?

**Podatki:** $\%T_1 = 40{,}0\,\%$, $\%T_2 = 4{,}0\,\%$, $\lambda = 665\,\mathrm{nm}$
**Iščemo:** absorbanci $A_1$ in $A_2$

:::formula
$A = -\log_{10} T$, kjer je $T$ delež (ne odstotek)
:::

**Rešitev:**

1. Odstotke pretvorimo v delež: $T_1 = 0{,}400$, $T_2 = 0{,}040$.
2. $A_1 = -\log_{10} 0{,}400 \approx 0{,}398$.
3. $A_2 = -\log_{10} 0{,}040 \approx 1{,}398$; desetkrat manjša prepustnost doda absorbanci natanko $1$.
4. Odgovor: absorbanca je $0{,}398$ oziroma $1{,}40$. Drugi vzorec je že nad mejo linearnosti, zato bi ga razredčili.

### Primer 2: klorofil v ekstraktu

Klorofil iz alg ekstrahiramo v aceton. Ekstrakt ima v kiveti $1{,}00\,\mathrm{cm}$ pri $663\,\mathrm{nm}$ absorbanco $0{,}312$. Molarni absorpcijski koeficient klorofila a je tam $7{,}8 \cdot 10^4\,\mathrm{L\,mol^{-1}\,cm^{-1}}$, molska masa $893{,}5\,\mathrm{g/mol}$. Kolikšna je koncentracija v $\mathrm{mol/L}$ in v $\mathrm{mg/L}$?

**Podatki:** $A = 0{,}312$, $b = 1{,}00\,\mathrm{cm}$, $\varepsilon = 7{,}8 \cdot 10^4\,\mathrm{L\,mol^{-1}\,cm^{-1}}$, $M = 893{,}5\,\mathrm{g/mol}$
**Iščemo:** $c$ in masno koncentracijo $\gamma$

:::formula
$c = \dfrac{A}{\varepsilon\, b}$, nato $\gamma = c \cdot M$
:::

**Rešitev:**

1. Beer-Lambertov zakon obrnemo za $c$: $c = \dfrac{0{,}312}{7{,}8 \cdot 10^4 \cdot 1{,}00}\,\mathrm{mol/L} = 4{,}0 \cdot 10^{-6}\,\mathrm{mol/L}$.
2. Pretvorimo v maso: $\gamma = 4{,}0 \cdot 10^{-6}\,\mathrm{mol/L} \cdot 893{,}5\,\mathrm{g/mol} \approx 3{,}57 \cdot 10^{-3}\,\mathrm{g/L}$.
3. Odgovor: ekstrakt vsebuje $4{,}0 \cdot 10^{-6}\,\mathrm{mol/L}$ klorofila a, kar je približno $3{,}6\,\mathrm{mg/L}$.

### Primer 3 (težji): cink v potoku pod rudnikom

Cink v potoku določamo z AAS pri $213{,}9\,\mathrm{nm}$. Standardi $0{,}20$, $0{,}40$ in $0{,}60\,\mathrm{mg/L}$ dajo absorbance $0{,}088$, $0{,}176$ in $0{,}264$. Vzorec je bil premočan, zato smo $5{,}00\,\mathrm{mL}$ vode razredčili na $50{,}0\,\mathrm{mL}$. Razredčeni vzorec ima $A = 0{,}143$. Koliko cinka je v potoku?

**Podatki:** standardi $(0{,}20;\,0{,}088)$, $(0{,}40;\,0{,}176)$, $(0{,}60;\,0{,}264)$ v $\mathrm{mg/L}$ in enotah $A$; $V_1 = 5{,}00\,\mathrm{mL}$, $V_2 = 50{,}0\,\mathrm{mL}$, $A_{\mathrm{vz}} = 0{,}143$
**Iščemo:** masno koncentracijo cinka v potoku $\gamma_0$

:::formula
Umeritvena premica $A = k\,\gamma$; faktor razredčitve $f = \dfrac{V_2}{V_1}$; $\gamma_0 = f \cdot \gamma$
:::

**Rešitev:**

1. Naklon premice: $k = \dfrac{0{,}088}{0{,}20} = 0{,}44\,\mathrm{L/mg}$; vsi trije standardi dajo isti $k$, zato smo v linearnem območju.
2. Koncentracija v razredčenem vzorcu: $\gamma = \dfrac{0{,}143}{0{,}44}\,\mathrm{mg/L} = 0{,}325\,\mathrm{mg/L}$.
3. Faktor razredčitve: $f = \dfrac{50{,}0}{5{,}00} = 10$, ker smo vzorec desetkrat razredčili.
4. $\gamma_0 = 10 \cdot 0{,}325\,\mathrm{mg/L} = 3{,}25\,\mathrm{mg/L}$.
5. Odgovor: v potoku je približno $3{,}3\,\mathrm{mg/L}$ cinka.

### Primer 4: zdaj ti – fosfat v jezeru

Fosfat v jezeru pretvorimo v modro obarvan kompleks z $\varepsilon = 2{,}0 \cdot 10^4\,\mathrm{L\,mol^{-1}\,cm^{-1}}$ pri $880\,\mathrm{nm}$. Ker je fosfata malo, merimo v kiveti $5{,}00\,\mathrm{cm}$. Prepustnost je $31{,}6\,\%$. Kolikšna je koncentracija fosfata?

**Podatki:** $\varepsilon = 2{,}0 \cdot 10^4\,\mathrm{L\,mol^{-1}\,cm^{-1}}$, $b = 5{,}00\,\mathrm{cm}$, $\%T = 31{,}6\,\%$
**Iščemo:** množinsko koncentracijo $c$

:::formula
$A = -\log_{10} T$, nato $c = \dfrac{A}{\varepsilon\, b}$
:::

**Rešitev:**

1. Prepustnost kot delež: $T = 0{,}316$.
2. Daljša kiveta poveča absorbanco, zato izmerimo tudi zelo nizke koncentracije.
3. Izračunaj $A$ in nato $c$ sam, potem preveri:

:::premisli
Koliko sta $A$ in $c$?
---
$A = -\log_{10} 0{,}316 \approx 0{,}500$ in $c = \dfrac{0{,}500}{2{,}0 \cdot 10^4 \cdot 5{,}00}\,\mathrm{mol/L} = 5{,}0 \cdot 10^{-6}\,\mathrm{mol/L}$.
:::

## Pogoste napake

- **»Absorbanca je odstotek vpite svetlobe.«** Kdor tako misli, pri $A = 0{,}30$ reče, da se vpije $30\,\%$. Absorbanca je logaritem: $A = 0{,}30$ pomeni $T \approx 0{,}50$, vpije se polovica. Vedno računaj prek $T = 10^{-A}$.
- **Prepustnost obravnavaš kot linearno.** Če podvojiš $c$ ali $b$, se $T$ ne razpolovi, ampak kvadrira ($0{,}60 \to 0{,}36$). Linearna je le absorbanca.
- **Merjenje zunaj linearnega območja.** Pri $A$ nad približno $1$ je premica ukrivljena in koncentracija pride prenizka. Vzorec razredči in upoštevaj faktor razredčitve.
- **Pozabljen faktor razredčitve.** S premice odčitaš koncentracijo v kiveti, ne v naravnem vzorcu. Pomnoži s $V_{\text{končni}}/V_{\text{vzorca}}$.
- **»AAS izmeri vse kovine naenkrat.«** Votla katodna žarnica seva črte enega elementa, zato za vsak element zamenjamo žarnico. AAS meri atome, ne molekule ali ione v raztopini.

## Povzetek

- Prepustnost $T = I/I_0$; absorbanca $A = -\log_{10} T$.
- Beer-Lambertov zakon: $A = \varepsilon\, b\, c$; absorbanca je sorazmerna z dolžino poti in koncentracijo, prepustnost pada eksponentno.
- Koncentracijo dobimo z umeritveno premico iz standardov; linearno območje približno do $A \approx 1$, sicer razredčimo in množimo s faktorjem razredčitve.
- UV-VIS: molekule, široki vrhovi, merimo pri $\lambda_{\max}$; za UV kremenova kiveta.
- AAS: prosti atomi v plamenu ali grafitni kiveti, ostre črte, votla katodna žarnica za vsak element posebej; zelo selektivna metoda za kovine.

## Drugače: Na sliki

Pot svetlobe v obeh napravah si nariši kot verigo:

```
UV-VIS:  žarnica (zvezni spekter) → monokromator → kiveta z raztopino → detektor
AAS:     votla katodna žarnica (črte) → plamen z atomi → monokromator → detektor
```

Pri UV-VIS monokromator stoji *pred* vzorcem in izbere eno barvo iz mavrice. Pri AAS stoji *za* plamenom: plamen sam sveti, monokromator pa izloči vse razen črte elementa.

Graf $A$ proti $c$ je premica skozi izhodišče, ki se pri velikih $A$ ukrivi navzdol. Graf $T$ proti $c$ je krivulja, ki se kot senca v vse globljem jezeru bliža nič, a je nikoli ne doseže.

## Drugače: Bolj natančno

Tanka plast debeline $\mathrm{d}x$ zmanjša jakost za delež, sorazmeren s koncentracijo: $\mathrm{d}I = -k\,c\,I\,\mathrm{d}x$. Z integracijo od $0$ do $b$ dobimo $\ln(I_0/I) = k\,c\,b$. Prehod na desetiški logaritem da $A = \varepsilon\, b\, c$ z $\varepsilon = k/\ln 10$.

Izpeljava predpostavi monokromatsko svetlobo, razredčeno raztopino brez interakcij med molekulami in snov, ki ne sodeluje v ravnotežjih. Odstopanja nastanejo zaradi končne širine pasu monokromatorja, sipane svetlobe, ki doseže detektor mimo vzorca, in kemijskih ravnotežij (npr. protolize barvila).

Za zmes snovi, ki ne reagirajo med sabo, se absorbance seštevajo: $A = b \sum_i \varepsilon_i c_i$. Z meritvijo pri več valovnih dolžinah tako določimo več snovi hkrati.

Pri AAS je absorpcijska črta široka le okoli $0{,}005\,\mathrm{nm}$, pas monokromatorja pa okoli $0{,}2\,\mathrm{nm}$. Iz zveznega vira bi atomi vpili le drobec svetlobe v tem pasu, zato bi se signal komaj spremenil. Votla katodna žarnica seva črto, ožjo od absorpcijske, zato Beer-Lambertov zakon velja tudi za atome. Grafitna kiveta zadrži atome dlje na poti žarka kot plamen, zato doseže $100$- do $1000$-krat nižje meje zaznave.

## Preveri se

? Katera trditev o AAS je pravilna?
- Z eno žarnico z zveznim spektrom izmerimo več kovin hkrati.
~ To velja za UV-VIS. Atomske črte so tako ozke, da potrebujemo vir, ki seva prav črto izbranega elementa.
+ Za vsak element potrebujemo votlo katodno žarnico iz tega elementa.
- Meri absorpcijo ionov v raztopini, zato plamen ni nujen.
~ Ioni v raztopini ne vpijajo pri atomskih črtah. Plamen ali grafitna kiveta naredi proste atome.
> Votla katodna žarnica seva ostre črte istega elementa, ki jih atomi v plamenu vpijejo.

? Raztopina ima $\varepsilon = 2{,}0 \cdot 10^4\,\mathrm{L\,mol^{-1}\,cm^{-1}}$, $b = 1{,}00\,\mathrm{cm}$ in $c = 2{,}5 \cdot 10^{-5}\,\mathrm{mol/L}$. Kolikšna je absorbanca?
- $0{,}50\,\%$
~ Absorbanca ni odstotek; je brezdimenzijsko število.
+ $0{,}50$
- $0{,}32$
~ $0{,}32$ je prepustnost $T = 10^{-0{,}50}$, ne absorbanca.
- $8{,}0 \cdot 10^{8}$
~ Koncentracijo si delil namesto množil. Velja $A = \varepsilon\, b\, c$.
> $A = 2{,}0 \cdot 10^4 \cdot 1{,}00 \cdot 2{,}5 \cdot 10^{-5} = 0{,}50$.

? Sošolec piše: »Vzorec ima v kiveti $1\,\mathrm{cm}$ prepustnost $0{,}60$. V kiveti $2\,\mathrm{cm}$ bo prepustnost $0{,}60/2 = 0{,}30$.« Kje je napaka?
- Napake ni, prepustnost je obratno sorazmerna z debelino.
~ Sorazmerna z debelino je absorbanca, ne prepustnost. Druga plast prepusti delež od že oslabljene svetlobe.
+ Podvoji se absorbanca, zato je nova prepustnost $0{,}60^2 = 0{,}36$.
- Prepustnost se ne spremeni, ker je koncentracija enaka.
~ Daljša pot pomeni več molekul na poti žarka, zato se vpije več svetlobe.
> $A$ se podvoji z $0{,}222$ na $0{,}444$, kar da $T = 0{,}36$. Deleži se množijo, ne delijo.

? V čem se UV-VIS in AAS najbolj razlikujeta?
- UV-VIS ne uporablja Beer-Lambertovega zakona, AAS ga.
~ Obe metodi temeljita na istem zakonu $A = \varepsilon\, b\, c$ oziroma umeritveni premici $A = k\,c$.
- AAS meri molekule, UV-VIS atome.
~ Ravno obratno: UV-VIS meri molekule v raztopini, AAS proste atome.
+ UV-VIS meri molekule s širokimi vrhovi, AAS proste atome z zelo ostrimi črtami.
> Zaradi ostrih črt je AAS zelo selektivna za posamezne kovine, UV-VIS pa je primerna za obarvane ali UV-aktivne molekule.

? Vzorec deževnice ima pri UV-VIS meritvi $A = 1{,}8$, zunaj umeritvene premice (do $A = 1{,}0$). Kaj narediš?
- Iz absorbance izračunam koncentracijo, saj zakon velja pri vseh $A$.
~ Pri velikih $A$ pride do detektorja premalo svetlobe in premica se ukrivi. Rezultat bi bil napačen.
+ Vzorec razredčim, ponovno izmerim in rezultat pomnožim s faktorjem razredčitve.
- Uporabim daljšo kiveto, da bo meritev natančnejša.
~ Daljša kiveta absorbanco še poveča. Pri premočnem vzorcu potrebuješ krajšo kiveto ali razredčitev.
> Z razredčitvijo spraviš $A$ v linearno območje; koncentracijo v izvirnem vzorcu dobiš z množenjem s faktorjem razredčitve.
