---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Dvojna vez $\mathrm{C{=}C}$ je močnejša od enojne $\mathrm{C{-}C}$. Pa vendar metan v jeklenki zemeljskega plina leta stoji nespremenjen, etilen (eten), ki ga oddajajo zoreče banane, pa z bromom v nekaj sekundah razbarva rdečerjavo bromovico in v tovarni z vodo ob kislinskem katalizatorju da etanol. Obe molekuli imata le ogljik in vodik. Na tej »šibki« dvojni vezi sloni celo glasba: gramofonske plošče so iz PVC, ki nastane, ko se molekule kloroetena (vinilklorida) prek dvojnih vezi povežejo v dolge verige. Od tod ime »vinilka«.

Paradoks razreši zgradba vezi. Dvojna vez je ena vez $\sigma$ in ena vez $\pi$, vez $\pi$ pa je šibkejša in se pretrga prva. Alkani imajo samo vezi $\sigma$, alkeni in alkini pa tudi vezi $\pi$. Ko razumeš, kako reagira vez $\pi$ in kaj se dogaja z alkani na svetlobi, znaš napovedati **produkt** brez učenja na pamet: kateri izomer nastane pri adiciji $\mathrm{HBr}$, zakaj brom izbira drugače kot klor in kako iz alkina dobiš *cis*- ali *trans*-alken.

## Razlaga

### Slika: kje ležijo elektroni

**Dve vrsti reaktivnosti.** Vez $\sigma$ $\mathrm{C{-}H}$ je močna in nepolarna, elektroni so tesno med jedroma. Alkani zato ne reagirajo s kislinami, bazami ali oksidanti pri sobni temperaturi. Reagirajo šele z zelo reaktivnimi delci z enim neparnim elektronom, z **radikali**. Vez $\pi$ v alkenu je šibkejša, njeni elektroni ležijo nad in pod ravnino molekule in so lahko dosegljivi. Alken je zato **nukleofil**: daje elektronski par **elektrofilu**, delcu, ki elektrone išče (npr. $\mathrm{H^+}$, $\mathrm{Br_2}$).

```
  alkan (le σ)                 alken (σ + π)
                                 ░░░ oblak π ░░░
  H3C ── CH3                   H2C ═══════ CH2
  elektroni tesno med jedroma    ░░░ oblak π ░░░
  → dosežejo jih le radikali    → dosegljiv elektrofilom
```

### Adicije na alkene

**Elektrofilna adicija $\mathrm{HBr}$.** Pri **adiciji** se dva delca vežeta na oba ogljika dvojne vezi, vez $\pi$ izgine. Mehanizem ima dva koraka:

1. Elektroni $\pi$ napadejo $\mathrm{H}$ iz $\mathrm{HBr}$. Nastane vez $\mathrm{C{-}H}$ in **karbokation**: ogljik s tremi vezmi, prazno orbitalo $p$ in nabojem $+$ ($sp^2$, ravninski).
2. Bromidni ion $\mathrm{Br^-}$ s svojim nevezanim parom napade karbokation. Nastane vez $\mathrm{C{-}Br}$.

Prvi korak je počasen, ker nastane nabit delec. Ta korak določa hitrost in **odloči, kateri produkt nastane**.

**Stabilnost karbokationov.** Alkilne skupine okoli pozitivnega ogljika ga stabilizirajo. Elektroni sosednjih vezi $\mathrm{C{-}H}$ in $\mathrm{C{-}C}$ se delno razširijo v prazno orbitalo $p$ (**hiperkonjugacija**), alkilne skupine pa še nekoliko potiskajo elektrone proti ogljiku (induktivni učinek). Več alkilnih skupin pomeni stabilnejši kation:

| karbokation | primer | št. alkilnih skupin | stabilnost |
|---|---|---|---|
| terciarni (3°) | $\mathrm{(CH_3)_3C^+}$ | 3 | največja |
| sekundarni (2°) | $\mathrm{(CH_3)_2CH^+}$ | 2 | srednja |
| primarni (1°) | $\mathrm{CH_3CH_2^+}$ | 1 | majhna |
| metilni | $\mathrm{CH_3^+}$ | 0 | najmanjša |

Enako zaporedje $3^\circ > 2^\circ > 1^\circ > \text{metil}$ velja za radikale.

**Markovnikovo pravilo.** Pri propenu $\mathrm{CH_3CH{=}CH_2}$ se $\mathrm{H^+}$ lahko veže na C1 ali na C2:

- $\mathrm{H}$ na C1 (končni $\mathrm{CH_2}$): pozitivni naboj ostane na C2, kation je **sekundarni**.
- $\mathrm{H}$ na C2: naboj je na C1, kation je **primarni**.

Hitreje nastane stabilnejši, sekundarni kation, zato je glavni produkt **2-bromopropan**. Klasična oblika pravila: *vodik se veže na tisti ogljik dvojne vezi, ki že ima več vodikov.* Sodobna oblika je splošnejša: *reakcija poteče prek najstabilnejšega karbokationa.* Produktu, ki ustreza pravilu, rečemo **markovnikovski**.

:::premisli
Na 2-metilpropen $\mathrm{(CH_3)_2C{=}CH_2}$ adiramo $\mathrm{HCl}$. Napovej glavni produkt, preden bereš naprej.
---
2-kloro-2-metilpropan, $\mathrm{(CH_3)_3CCl}$. Če se $\mathrm{H}$ veže na $\mathrm{CH_2}$, nastane terciarni kation; druga možnost bi dala primarni kation, ki je veliko manj stabilen.
:::

**Druge adicije na alkene.** Vse sledijo isti logiki ali pa imajo poseben razlog, da ji ne:

- **Hidratacija** ($\mathrm{H_2O}$, kislinski katalizator $\mathrm{H_2SO_4}$): prek karbokationa, markovnikovski alkohol. Propen da propan-2-ol.
- **Halogeniranje** ($\mathrm{Br_2}$ ali $\mathrm{Cl_2}$): namesto prostega karbokationa nastane trikotni **bromonijev ion**. $\mathrm{Br^-}$ ga napade z nasprotne strani, zato se atoma broma vežeta **anti** (na nasprotni strani ravnine). Iz ciklopentena nastane *trans*-1,2-dibromociklopentan kot racemat. Ta reakcija je test na dvojno vez: bromovica se razbarva.
- **Hidrogeniranje** ($\mathrm{H_2}$, kovinski katalizator Pt, Pd ali Ni): oba vodika prideta s površine kovine na isto stran, adicija je **syn**. Nastane alkan.
- **$\mathrm{HBr}$ s peroksidi** ($\mathrm{ROOR}$, svetloba): radikalski mehanizem, produkt je **antimarkovnikovski** (razlaga spodaj, pri radikalskih reakcijah).

Kadar karbokation nastane na ravninskem ogljiku, ga nukleofil lahko napade z obeh strani. Če pri tem nastane stereocenter, dobimo racemat.

### Alkini

Trojna vez ima dve vezi $\pi$, zato alkin lahko adira **dvakrat**. S prebitkom $\mathrm{HBr}$ iz propina nastane 2,2-dibromopropan (obakrat po Markovnikovu). Pri hidrogeniranju izbiramo katalizator:

| reagent | kje se ustavi | produkt |
|---|---|---|
| $\mathrm{H_2}$, Pt ali Pd na oglju | gre do konca | alkan |
| $\mathrm{H_2}$, **Lindlarjev katalizator** (zastrupljen Pd) | pri alkenu, syn adicija | ***cis*-alken** |
| $\mathrm{Na}$ v tekočem $\mathrm{NH_3}$ | pri alkenu | ***trans*-alken** |

Hidratacija alkina (z $\mathrm{H_2SO_4}$ in $\mathrm{Hg^{2+}}$) najprej da **enol** (OH na ogljiku dvojne vezi), ki se takoj pretvori v keton. Iz propina nastane propanon.

### Radikalske reakcije

**Radikalsko halogeniranje alkanov.** Metan in klor v temi ne reagirata. Na svetlobi nastane klorometan in $\mathrm{HCl}$. Veriga se vrti v krogu:

```
        Cl·  ── + CH4 ──►  HCl + CH3·
         ▲                      │
         └── CH3Cl ◄── + Cl2 ───┘
```

Gre za **verižno reakcijo** v treh fazah:

1. **Iniciacija:** svetloba razcepi $\mathrm{Cl_2}$ **homolitsko** (vsak atom dobi en elektron): $\mathrm{Cl_2} \rightarrow 2\,\mathrm{Cl\cdot}$.
2. **Propagacija** (ponavlja se tisočkrat):
   $\mathrm{Cl\cdot} + \mathrm{CH_4} \rightarrow \mathrm{HCl} + \mathrm{CH_3\cdot}$, nato
   $\mathrm{CH_3\cdot} + \mathrm{Cl_2} \rightarrow \mathrm{CH_3Cl} + \mathrm{Cl\cdot}$.
   Drugi korak vrne $\mathrm{Cl\cdot}$, ki začne nov krog.
3. **Terminacija:** dva radikala se srečata in združita, npr. $\mathrm{CH_3\cdot} + \mathrm{Cl\cdot} \rightarrow \mathrm{CH_3Cl}$ ali $2\,\mathrm{CH_3\cdot} \rightarrow \mathrm{C_2H_6}$. Veriga se prekine.

Pri daljših alkanih se odločajo **vodiki**: odtrga se lahko primarni, sekundarni ali terciarni vodik. Terciarni radikal je najstabilnejši, zato se terciarni $\mathrm{H}$ odtrga najlaže. Relativna hitrost na en vodik:

| reagent | 1° H | 2° H | 3° H |
|---|---|---|---|
| $\mathrm{Cl_2}$ (25 °C) | 1 | 3,8 | 5 |
| $\mathrm{Br_2}$ (125 °C) | 1 | 82 | 1600 |

Delež produkta je sorazmeren s produktom **število vodikov $\times$ relativna hitrost**. Klor je hiter in malo izbirčen, brom počasen in zelo izbirčen.

:::premisli
Zakaj je brom toliko bolj izbirčen od klora? Namig: korak $\mathrm{X\cdot} + \mathrm{R{-}H} \rightarrow \mathrm{HX} + \mathrm{R\cdot}$ je pri kloru eksotermen, pri bromu endotermen.
---
Pri bromu je prehodno stanje pozno in podobno radikalu $\mathrm{R\cdot}$, zato se razlika v stabilnosti radikalov ($3^\circ > 2^\circ > 1^\circ$) skoraj v celoti pozna v hitrosti. Pri kloru je prehodno stanje zgodnje, podobno izhodnemu alkanu, zato so razlike majhne (Hammondov postulat).
:::

**Antimarkovnikovska adicija $\mathrm{HBr}$.** S peroksidi nastane radikal $\mathrm{Br\cdot}$. Ta se veže prvi, in to na končni $\mathrm{CH_2}$, ker tako nastane stabilnejši sekundarni radikal. Nato radikal odtrga $\mathrm{H}$ iz $\mathrm{HBr}$. Iz propena nastane **1-bromopropan**. Pravilo »prek najstabilnejšega vmesnega delca« velja tudi tu. To deluje samo s $\mathrm{HBr}$, s $\mathrm{HCl}$ in $\mathrm{HI}$ ne.

## Rešeni primeri

### Primer 1 (lažji): ista reagenta, dva produkta

Na 2-metilpropen $\mathrm{(CH_3)_2C{=}CH_2}$ adiramo $\mathrm{HBr}$, enkrat v temi brez peroksidov, enkrat s peroksidi. Napiši glavna produkta.

**Podatki:** alken $\mathrm{(CH_3)_2C{=}CH_2}$; reagent $\mathrm{HBr}$; (a) brez peroksidov, (b) s peroksidi $\mathrm{ROOR}$
**Iščemo:** glavni produkt v (a) in (b)

:::formula
Reakcija poteče prek najstabilnejšega vmesnega delca ($3^\circ > 2^\circ > 1^\circ$). Brez peroksidov se prvi veže $\mathrm{H^+}$, s peroksidi $\mathrm{Br\cdot}$.
:::

**Rešitev:**

1. (a) Prvi se veže $\mathrm{H^+}$. Na $\mathrm{CH_2}$ da terciarni kation $\mathrm{(CH_3)_3C^+}$, na C2 bi dal primarnega. Izberemo terciarnega.
2. $\mathrm{Br^-}$ napade kation: nastane $\mathrm{(CH_3)_3CBr}$, 2-bromo-2-metilpropan.
3. (b) Prvi se veže $\mathrm{Br\cdot}$. Na $\mathrm{CH_2}$ da terciarni radikal $\mathrm{(CH_3)_2\dot{C}CH_2Br}$, ki je stabilnejši od primarnega.
4. Radikal odtrga $\mathrm{H}$ iz $\mathrm{HBr}$: nastane $\mathrm{(CH_3)_2CHCH_2Br}$, 1-bromo-2-metilpropan.
5. Odgovor: brez peroksidov nastane 2-bromo-2-metilpropan, s peroksidi 1-bromo-2-metilpropan.

### Primer 2: entalpija kloriranja metana

Izračunaj reakcijsko entalpijo $\Delta H$ za $\mathrm{CH_4} + \mathrm{Cl_2} \rightarrow \mathrm{CH_3Cl} + \mathrm{HCl}$ in za oba koraka propagacije. Energije vezi: $\mathrm{CH_3{-}H}$ $439\,\mathrm{kJ/mol}$, $\mathrm{Cl{-}Cl}$ $242\,\mathrm{kJ/mol}$, $\mathrm{CH_3{-}Cl}$ $350\,\mathrm{kJ/mol}$, $\mathrm{H{-}Cl}$ $431\,\mathrm{kJ/mol}$.

**Podatki:** $E(\mathrm{C{-}H}) = 439\,\mathrm{kJ/mol}$, $E(\mathrm{Cl{-}Cl}) = 242\,\mathrm{kJ/mol}$, $E(\mathrm{C{-}Cl}) = 350\,\mathrm{kJ/mol}$, $E(\mathrm{H{-}Cl}) = 431\,\mathrm{kJ/mol}$
**Iščemo:** $\Delta H$ celotne reakcije in obeh korakov propagacije

:::formula
$\Delta H = \sum E(\text{pretrgane vezi}) - \sum E(\text{nastale vezi})$
:::

**Rešitev:**

1. Pretrgamo $\mathrm{C{-}H}$ in $\mathrm{Cl{-}Cl}$: $439 + 242 = 681$ (v $\mathrm{kJ/mol}$).
2. Nastaneta $\mathrm{C{-}Cl}$ in $\mathrm{H{-}Cl}$: $350 + 431 = 781$.
3. Celota: $\Delta H = 681 - 781 = -100$, torej $-100\,\mathrm{kJ/mol}$ – reakcija je eksotermna.
4. Prvi korak propagacije ($\mathrm{Cl\cdot} + \mathrm{CH_4}$) pretrga $\mathrm{C{-}H}$, tvori $\mathrm{H{-}Cl}$: $\Delta H_1 = 439 - 431 = 8$, torej $+8\,\mathrm{kJ/mol}$.
5. Drugi korak ($\mathrm{CH_3\cdot} + \mathrm{Cl_2}$) pretrga $\mathrm{Cl{-}Cl}$, tvori $\mathrm{C{-}Cl}$: $\Delta H_2 = 242 - 350 = -108$, torej $-108\,\mathrm{kJ/mol}$.
6. Preverba: $8 + (-108) = -100$.
7. Odgovor: $\Delta H = -100\,\mathrm{kJ/mol}$; prvi korak propagacije je rahlo endotermen ($+8\,\mathrm{kJ/mol}$), drugi močno eksotermen ($-108\,\mathrm{kJ/mol}$).

### Primer 3 (težji): kloriranje ali bromiranje propana?

Iz propana želimo čim več 2-halopropana. Izračunaj deleža monohalogeniranih produktov pri kloriranju (25 °C) in pri bromiranju (125 °C). Kateri reagent izbereš?

**Podatki:** propan $\mathrm{CH_3CH_2CH_3}$ ima $6$ primarnih in $2$ sekundarna vodika; relativni hitrosti na en H: klor $1 : 3{,}8$, brom $1 : 82$ (1° : 2°)
**Iščemo:** deleža 1- in 2-halopropana za oba halogena; boljši reagent

:::formula
$\text{delež}_i = \dfrac{n_i \cdot r_i}{\sum n_j \cdot r_j}$
($n$ = število vodikov dane vrste, $r$ = relativna hitrost na en vodik)
:::

**Rešitev:**

1. Klor, primarni H: $6 \cdot 1 = 6$.
2. Klor, sekundarni H: $2 \cdot 3{,}8 = 7{,}6$. Vsota: $6 + 7{,}6 = 13{,}6$.
3. Deleža: 1-kloropropan $\dfrac{6}{13{,}6} = 0{,}441$, torej $44\,\%$; 2-kloropropan $\dfrac{7{,}6}{13{,}6} = 0{,}559$, torej $56\,\%$.
4. Brom, primarni H: $6 \cdot 1 = 6$; sekundarni H: $2 \cdot 82 = 164$. Vsota: $6 + 164 = 170$.
5. Deleža: 1-bromopropan $\dfrac{6}{170} = 0{,}035$, torej $3{,}5\,\%$; 2-bromopropan $\dfrac{164}{170} = 0{,}965$, torej $96{,}5\,\%$.
6. Odgovor: izberemo brom, ki da približno $96{,}5\,\%$ 2-bromopropana; klor da le $56\,\%$ 2-kloropropana in zmes, ki jo je treba ločevati.

### Primer 4 – zdaj ti

2-metilpropan $\mathrm{(CH_3)_3CH}$ kloriramo na svetlobi pri 25 °C. Kolikšna deleža 1-kloro-2-metilpropana in 2-kloro-2-metilpropana pričakuješ?

**Podatki:** $9$ primarnih H (tri skupine $\mathrm{CH_3}$), $1$ terciarni H; relativni hitrosti 1° : 3° $= 1 : 5$
**Iščemo:** deleža obeh monokloriranih produktov

:::formula
$\text{delež}_i = \dfrac{n_i \cdot r_i}{\sum n_j \cdot r_j}$
:::

**Rešitev:**

1. Primarni H: $9 \cdot 1 = 9$.
2. Terciarni H: $1 \cdot 5 = 5$. Vsota: $9 + 5 = 14$.
3. Izračunaj deleža sam, nato preveri:

:::premisli
Koliko sta $\dfrac{9}{14}$ in $\dfrac{5}{14}$ v odstotkih? Kateri produkt prevladuje in zakaj, čeprav je terciarni H najreaktivnejši?
---
1-kloro-2-metilpropan $\approx 64\,\%$, 2-kloro-2-metilpropan $\approx 36\,\%$. Prevladuje primarni produkt, ker je primarnih vodikov devetkrat več, klor pa je premalo izbirčen, da bi to nadoknadil.
:::

## Pogoste napake

- **»Markovnikov = halogen na ogljik z več vodiki.«** Napačno obrnjeno. Vodik gre na ogljik, ki *že ima* več vodikov, halogen pa na bolj substituiranega. Popravek: ne uči se stavka, ampak nariši oba možna karbokationa in izberi stabilnejšega.
- **»Peroksidi obrnejo vse adicije.«** Antimarkovnikovski produkt s peroksidi nastane samo s $\mathrm{HBr}$. Pri $\mathrm{HCl}$, $\mathrm{HI}$ ali vodi peroksidi ne pomagajo.
- **»Produkt kloriranja določa samo stabilnost radikala.«** Pozabiš na število vodikov. Pri kloru, ki je malo izbirčen, statistika pogosto prevlada (Primer 4). Vedno računaj $n \cdot r$.
- **»Pri adiciji $\mathrm{Br_2}$ se broma vežeta na isto stran.«** Bromonijev ion napade $\mathrm{Br^-}$ z nasprotne strani, adicija je anti. Syn je hidrogeniranje.
- **»$\mathrm{H_2}$ in katalizator iz alkina vedno da alken.«** Navadni Pt ali Pd reducira do alkana. Za *cis*-alken potrebuješ Lindlarjev katalizator, za *trans*-alken $\mathrm{Na}/\mathrm{NH_3}$.

## Povzetek

- Alkani (le vezi $\sigma$) reagirajo radikalsko; alkeni in alkini (vezi $\pi$) so nukleofili in elektrofilno adirajo.
- Adicija $\mathrm{HX}$ in $\mathrm{H_2O}/\mathrm{H^+}$ poteče prek najstabilnejšega karbokationa ($3^\circ > 2^\circ > 1^\circ > \text{metil}$): Markovnikovo pravilo, H na ogljik z več vodiki.
- $\mathrm{HBr}$ s peroksidi: radikalska, antimarkovnikovska adicija.
- $\mathrm{Br_2}$: anti adicija prek bromonijevega iona; $\mathrm{H_2}/\text{kat.}$: syn adicija.
- Alkini adirajo dvakrat; Lindlar da *cis*-alken, $\mathrm{Na}/\mathrm{NH_3}$ *trans*-alken; hidratacija prek enola da keton.
- Radikalsko halogeniranje: iniciacija, propagacija, terminacija. Delež produkta $\propto$ število H $\times$ relativna hitrost; brom je veliko bolj izbirčen od klora.

## Drugače: Na sliki

Propen nariši kot črto: levo $\mathrm{CH_3}$, na sredini C2, desno $\mathrm{CH_2}$, med C2 in C1 dvojna črta. Nad dvojno vezjo nariši oblak elektronov $\pi$.

```
A: H+ na C1
   CH3–CH=CH2 → CH3–CH(+)–CH3
   2°, stabilnejši
B: H+ na C2
   CH3–CH=CH2 → CH3–CH2–CH2(+)
   1°, manj stabilen
```

Predstavljaj si, da je pozitivni naboj »breme«. Sekundarni ogljik ima dva soseda ($\mathrm{CH_3}$ in $\mathrm{CH_3}$ po adiciji), ki breme delita; primarni ima le enega. Reakcija gre po poti, kjer je breme lažje nositi, in $\mathrm{Br^-}$ pride tja, kjer je naboj ostal.

## Drugače: Iz vsakdanjega življenja

- **Margarina:** rastlinska olja imajo dvojne vezi $\mathrm{C{=}C}$ in so tekoča. Delno hidrogeniranje z $\mathrm{H_2}$ in nikljem jih nasiti, maščoba postane trda.
- **Ozonska luknja:** freoni so stabilni alkanski derivati. V stratosferi jih UV-svetloba homolitsko razcepi, nastali $\mathrm{Cl\cdot}$ pa v verižni reakciji razgradi tisoče molekul ozona. Iniciacija in propagacija sta istega tipa kot pri kloriranju metana.

## Drugače: Bolj natančno

**Hammondov postulat.** Prehodno stanje je po zgradbi podobno tistemu delcu (izhodnemu ali produktu), ki mu je energijsko bližje. Protonacija alkena je endotermna, zato je prehodno stanje podobno karbokationu in stabilnost kationa se prenese v hitrost. To utemelji Markovnikovo pravilo kinetično, ne le s stabilnostjo produkta.

**Premestitve.** Karbokation se lahko s premikom hidrida ali metila ($1{,}2$-premik) pretvori v stabilnejšega. 3-metilbut-1-en s $\mathrm{HCl}$ da najprej sekundarni kation na C2; premik hidrida s C3 da terciarni kation, glavni produkt je 2-kloro-2-metilbutan. Premestitve so znak, da reakcija poteka prek prostega karbokationa; pri bromonijevem ionu jih ni.

**Stereokemija.** Pri adiciji $\mathrm{Br_2}$ na *cis*-but-2-en nastane racemat (2*R*,3*R*)- in (2*S*,3*S*)-2,3-dibromobutana, na *trans*-but-2-en pa mezo spojina. Anti adicija je **stereospecifična**: stereokemija izhodne snovi določa stereokemijo produkta.

## Preveri se

? Katera je glavna razlika v reaktivnosti alkanov in alkenov?
- Alkani so bolj reaktivni, ker imajo več vodikov.
~ Število vodikov ne določa reaktivnosti. Vezi $\mathrm{C{-}H}$ $\sigma$ so močne in nepolarne, zato so alkani leni.
+ Alkeni imajo elektrone $\pi$, ki napadejo elektrofile; alkani reagirajo le z radikali.
- Alkeni so manj reaktivni, ker je dvojna vez močnejša od enojne.
~ Celotna dvojna vez je res močnejša, a vez $\pi$ v njej je šibkejša od vezi $\sigma$ in se pretrga prva.
> Alkani imajo le močne vezi $\sigma$ in reagirajo radikalsko; vez $\pi$ v alkenu je dosegljiv elektronski par, zato alkeni elektrofilno adirajo.

? Kateri je glavni produkt adicije $\mathrm{HCl}$ na 1-metilcikloheksen?
- 1-kloro-2-metilcikloheksan
~ To je antimarkovnikovski produkt: klor na manj substituiranem ogljiku. Brez peroksidov poteče reakcija prek terciarnega kationa.
+ 1-kloro-1-metilcikloheksan
- metilcikloheksan
~ To bi dobil z $\mathrm{H_2}$ in katalizatorjem. $\mathrm{HCl}$ adira $\mathrm{H}$ in $\mathrm{Cl}$.
> $\mathrm{H^+}$ se veže na C2, naboj ostane na terciarnem C1, ki nosi metilno skupino; tja se veže $\mathrm{Cl^-}$.

? Zakaj da $\mathrm{HBr}$ s peroksidi iz propena 1-bromopropan?
- Ker peroksidi naredijo primarni karbokation stabilnejšega.
~ Peroksidi ne spremenijo stabilnosti kationov. Spremenijo mehanizem: prvi se veže $\mathrm{Br\cdot}$, ne $\mathrm{H^+}$.
- Ker se pri radikalskih reakcijah Markovnikovo pravilo ne upošteva.
~ Logika »najstabilnejši vmesni delec« še vedno velja; le da se prvi veže brom in nastane sekundarni radikal.
+ Ker se prvi veže $\mathrm{Br\cdot}$ na $\mathrm{CH_2}$, da nastane stabilnejši sekundarni radikal.
> Brom pride na končni ogljik, ker tako nastane sekundarni radikal; nato radikal odtrga $\mathrm{H}$ iz $\mathrm{HBr}$.

? Butan ima $6$ primarnih in $4$ sekundarne vodike. Kolikšen delež 2-klorobutana nastane pri kloriranju (1° : 2° $= 1 : 3{,}8$)?
- $40\,\%$
~ To je le delež sekundarnih vodikov ($4$ od $10$); pozabil si pomnožiti z relativno hitrostjo.
+ $72\,\%$
- $97\,\%$
~ Tolikšna izbirčnost je značilna za brom. Klor je veliko manj izbirčen.
> $4 \cdot 3{,}8 = 15{,}2$; $6 \cdot 1 = 6$; delež $\dfrac{15{,}2}{21{,}2} \approx 72\,\%$.

? Kateri reagent iz but-2-ina da *cis*-but-2-en?
- $\mathrm{H_2}$, Pt
~ Navadni Pt ne ustavi reakcije pri alkenu; nastane butan.
- $\mathrm{Na}$ v tekočem $\mathrm{NH_3}$
~ Ta redukcija da *trans*-alken.
+ $\mathrm{H_2}$, Lindlarjev katalizator
> Zastrupljeni Pd adira en ekvivalent $\mathrm{H_2}$ syn, oba vodika na isto stran, zato nastane *cis*-but-2-en.
