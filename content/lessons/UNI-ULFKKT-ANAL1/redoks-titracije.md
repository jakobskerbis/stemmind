---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Konec vročega julija ribiči na plitvem jezeru opazijo, da ribe lovijo zrak tik pod gladino. Topla voda raztopi manj kisika, alge pa ga ponoči porabljajo. Koliko kisika je res ostalo v vodi, izmerimo z **jodometrijo**. Kako močno je reka obremenjena z organskimi snovmi, ki kisik porabljajo, pove **manganometrija**. Obe sta **redoks titraciji**: titrant in analit si izmenjata elektrone.

»Titracija je titracija,« pravi Luka pred vajo. »Pri $\mathrm{NaOH}$ in $\mathrm{HCl}$ je razmerje 1 : 1, pri EDTA tudi. Torej en mol $\mathrm{KMnO_4}$ porabi en mol železa.« Če bi imel prav, bi vsi njegovi rezultati za železo prišli petkrat premajhni. Kje se zmoti, bomo razčistili spotoma.

## Razlaga

Kislinsko-bazne titracije že poznaš. Redoks titracijo zgradimo tako, da gremo po vrsti skozi razlike:

| | kislinsko-bazna | redoks |
|---|---|---|
| prenaša se | proton $\mathrm{H^+}$ | elektron $\mathrm{e^-}$ |
| moč reagenta | $\mathrm{p}K_a$ | standardni potencial $E^\circ$ |
| na krivulji merimo | pH | potencial $E$ |
| razmerje | iz števila $\mathrm{H^+}$ | iz števila $\mathrm{e^-}$ |

**Prva razlika: elektroni namesto protonov.** Kislina odda proton, baza ga sprejme. Pri redoks reakciji **reducent** odda elektrone (se oksidira), **oksidant** jih sprejme (se reducira). Vsako reakcijo razstavimo na dve **polreakciji**:

$$\mathrm{MnO_4^- + 8\,H^+ + 5\,e^- \rightarrow Mn^{2+} + 4\,H_2O}$$

$$\mathrm{Fe^{2+} \rightarrow Fe^{3+} + e^-}$$

**Druga razlika: razmerje ni samo po sebi 1 : 1.** Pri $\mathrm{HCl}$ in $\mathrm{NaOH}$ gre en proton k eni bazi. EDTA vedno objame en kovinski ion. Pri redoksu pa mora biti elektronov, ki jih reducent odda, toliko, kolikor jih oksidant sprejme. Permanganat sprejme pet elektronov, železov ion jih odda enega, zato:

$$\mathrm{MnO_4^- + 5\,Fe^{2+} + 8\,H^+ \rightarrow Mn^{2+} + 5\,Fe^{3+} + 4\,H_2O}$$

Tu se Luka zmoti: $n(\mathrm{Fe^{2+}}) = 5\,n(\mathrm{MnO_4^-})$.

:::premisli
Oksalatni ion se oksidira do ogljikovega dioksida: $\mathrm{C_2O_4^{2-} \rightarrow 2\,CO_2 + 2\,e^-}$. Napovej, v kakšnem razmerju reagirata permanganat in oksalat.
---
$2 : 5$. Dva permanganata sprejmeta $10$ elektronov, pet oksalatov jih odda prav toliko: $\mathrm{2\,MnO_4^- + 5\,C_2O_4^{2-} + 16\,H^+ \rightarrow 2\,Mn^{2+} + 10\,CO_2 + 8\,H_2O}$.
:::

**Tretja razlika: potencial namesto pH.** Moč kisline pove $\mathrm{p}K_a$, moč oksidanta **standardni elektrodni potencial** $E^\circ$: višji je, močnejši je oksidant. Primerjava enačb (pri $25\,^\circ\mathrm{C}$) je skoraj dobesedna:

$$\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A^-}]}{[\mathrm{HA}]}$$

$$E = E^\circ + \frac{0{,}0592\ \mathrm{V}}{n}\log\frac{[\mathrm{ox}]}{[\mathrm{red}]}$$

Druga je **Nernstova enačba**, $n$ je število izmenjanih elektronov. Pri polovični titraciji kisline velja $\mathrm{pH} = \mathrm{p}K_a$. Pri polovični oksidaciji železa velja $E = E^\circ(\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}77\ \mathrm{V}$. Čim bolj se $E^\circ$ titranta in analita razlikujeta, tem višji je preskok potenciala v ekvivalenčni točki, tako kot je pri kislinah preskok pH večji pri močnejši kislini.

**Četrta razlika: indikator.** Kislinsko-bazni indikator je sam šibka kislina. Pri redoksu imamo tri možnosti. **Samoindikator**: titrant je obarvan, produkt ne. **Specifični indikator**: škrob z jodom tvori temno modro spojino. **Redoks indikator** (npr. feroin) spremeni barvo pri določenem potencialu.

**Manganometrija.** Titrant je $\mathrm{KMnO_4}$ ($E^\circ = 1{,}51\ \mathrm{V}$), zelo močan oksidant. Ion $\mathrm{MnO_4^-}$ je vijoličast, $\mathrm{Mn^{2+}}$ skoraj brezbarven. Do ekvivalenčne točke se vsaka kapljica takoj razbarva. Prva kapljica v prebitku obarva raztopino trajno rožnato. Za to potrebujemo:

- **močno kisel medij z $\mathrm{H_2SO_4}$**, sicer nastaja rjav $\mathrm{MnO_2}$ in elektronov je samo 3;
- **ne $\mathrm{HCl}$**, ker bi permanganat oksidiral $\mathrm{Cl^-}$ v $\mathrm{Cl_2}$, in ne $\mathrm{HNO_3}$, ki je sama oksidant;
- **standardizacijo**, ker $\mathrm{KMnO_4}$ ni primarni standard: počasi razpada. Umerimo ga z natrijevim oksalatom pri $60$–$70\,^\circ\mathrm{C}$. Reakcija je na začetku počasna, nastali $\mathrm{Mn^{2+}}$ pa jo pospeši (**avtokataliza**).

**Jodometrija.** Jod je šibek oksidant ($E^\circ(\mathrm{I_2/I^-}) = 0{,}54\ \mathrm{V}$), zato ubereme posredno pot. Vzorcu z **oksidantom** dodamo prebitek $\mathrm{KI}$. Oksidant iz jodida sprosti ekvivalentno množino $\mathrm{I_2}$, tega pa titriramo z natrijevim tiosulfatom:

$$\mathrm{I_2 + 2\,S_2O_3^{2-} \rightarrow 2\,I^- + S_4O_6^{2-}}$$

Prebitka $\mathrm{KI}$ ni treba odmeriti natančno, saj tiosulfat meri le sproščeni jod. Pri **jodimetriji** pa je titrant sam jod in z njim neposredno titriramo **reducent** (npr. vitamin C). Tiosulfat umerimo z $\mathrm{KIO_3}$, ki je primarni standard: $\mathrm{IO_3^- + 5\,I^- + 6\,H^+ \rightarrow 3\,I_2 + 3\,H_2O}$.

:::premisli
Med titracijo joda s tiosulfatom se raztopina razbarva od rjave prek rumene do brezbarvne. Zakaj škrob dodamo šele, ko je raztopina bledo rumena, in ne že na začetku?
---
Pri veliki koncentraciji joda se škrob nanj močno in počasi reverzibilno veže. Del joda bi ostal ujet, modra barva bi izginjala počasi in končna točka bi prišla prepozno. Tik pred koncem je joda malo in modra barva izgine ostro z eno kapljico.
:::

**Kisik po Winklerju.** Vzorcu dodamo $\mathrm{Mn^{2+}}$ in bazo, da se obori bel $\mathrm{Mn(OH)_2}$. Kisik oksidira $\mathrm{Mn(OH)_2}$ v rjav $\mathrm{Mn(OH)_3}$, ki po nakisanju z jodidom sprosti jod:

$$\mathrm{2\,Mn(OH)_2 + \tfrac{1}{2}\,O_2 + H_2O \rightarrow 2\,Mn(OH)_3}$$

$$\mathrm{2\,Mn(OH)_3 + 2\,I^- + 6\,H^+ \rightarrow 2\,Mn^{2+} + I_2 + 6\,H_2O}$$

Pol mola $\mathrm{O_2}$ da en mol $\mathrm{I_2}$, ta pa porabi dva mola tiosulfata. Torej je $n(\mathrm{S_2O_3^{2-}}) = 4\,n(\mathrm{O_2})$.

## Rešeni primeri

### Primer 1: železo v limonitu

Limonit je rjava železova ruda, ki nastane s preperevanjem železovih mineralov na zraku in v deževnici. Vzorec z maso $0{,}2500\ \mathrm{g}$ raztopimo, vse železo reduciramo v $\mathrm{Fe^{2+}}$ in titriramo z $\mathrm{KMnO_4}$ s koncentracijo $0{,}02000\ \mathrm{mol/L}$. Do trajne rožnate barve porabimo $22{,}40\ \mathrm{mL}$. Kolikšen je masni delež železa?

**Podatki:** $m(\text{vzorec}) = 0{,}2500\ \mathrm{g}$, $c(\mathrm{KMnO_4}) = 0{,}02000\ \mathrm{mol/L}$, $V = 22{,}40\ \mathrm{mL}$, $M(\mathrm{Fe}) = 55{,}845\ \mathrm{g/mol}$
**Iščemo:** masni delež $w(\mathrm{Fe})$

:::formula
$n(\mathrm{Fe^{2+}}) = 5\,c(\mathrm{KMnO_4})\,V$, $\quad w(\mathrm{Fe}) = \dfrac{n(\mathrm{Fe})\,M(\mathrm{Fe})}{m(\text{vzorec})}$
:::

**Rešitev:**

1. Permanganat: $0{,}02000 \cdot 22{,}40 = 0{,}4480$, torej $0{,}4480\ \mathrm{mmol}$.
2. Vsak $\mathrm{MnO_4^-}$ sprejme pet elektronov, vsak $\mathrm{Fe^{2+}}$ odda enega: $5 \cdot 0{,}4480 = 2{,}240$, torej $2{,}240\ \mathrm{mmol}$ železa.
3. Masa železa: $2{,}240 \cdot 55{,}845 = 125{,}09$, torej $125{,}1\ \mathrm{mg}$.
4. Delež: $\dfrac{125{,}09}{250{,}0} \cdot 100 = 50{,}04$.
5. Odgovor: limonit vsebuje $50{,}04\ \%$ železa. Z Lukovim razmerjem 1 : 1 bi dobili le $10{,}01\ \%$.

### Primer 2: umerjanje tiosulfata

$0{,}1070\ \mathrm{g}$ $\mathrm{KIO_3}$ raztopimo v bučki do $250{,}0\ \mathrm{mL}$. Alikvotu $25{,}00\ \mathrm{mL}$ dodamo prebitek $\mathrm{KI}$ in kislino. Sproščeni jod porabi $29{,}85\ \mathrm{mL}$ raztopine $\mathrm{Na_2S_2O_3}$. Kolikšna je koncentracija tiosulfata?

**Podatki:** $m(\mathrm{KIO_3}) = 0{,}1070\ \mathrm{g}$, $M(\mathrm{KIO_3}) = 214{,}00\ \mathrm{g/mol}$, $V(\text{bučka}) = 250{,}0\ \mathrm{mL}$, $V(\text{alikvot}) = 25{,}00\ \mathrm{mL}$, $V(\mathrm{S_2O_3^{2-}}) = 29{,}85\ \mathrm{mL}$
**Iščemo:** $c(\mathrm{Na_2S_2O_3})$

:::formula
$1\ \mathrm{IO_3^-} \rightarrow 3\ \mathrm{I_2} \rightarrow 6\ \mathrm{S_2O_3^{2-}}$, $\quad c = \dfrac{n(\mathrm{S_2O_3^{2-}})}{V(\mathrm{S_2O_3^{2-}})}$
:::

**Rešitev:**

1. Jodat v bučki: $\dfrac{0{,}1070}{214{,}00} = 0{,}0005000$, torej $0{,}5000\ \mathrm{mmol}$.
2. V alikvotu je desetina: $0{,}05000\ \mathrm{mmol}$ $\mathrm{IO_3^-}$.
3. En jodat sprosti tri molekule joda: $3 \cdot 0{,}05000 = 0{,}1500$, torej $0{,}1500\ \mathrm{mmol}$ $\mathrm{I_2}$.
4. Vsak $\mathrm{I_2}$ porabi dva tiosulfata: $2 \cdot 0{,}1500 = 0{,}3000$, torej $0{,}3000\ \mathrm{mmol}$.
5. Koncentracija: $\dfrac{0{,}3000}{29{,}85} = 0{,}01005$.
6. Odgovor: koncentracija tiosulfata je $0{,}01005\ \mathrm{mol/L}$.

### Primer 3: kisik v jezeru po vročem dnevu

Z umerjenim tiosulfatom iz primera 2 določimo kisik v površinski plasti jezera popoldne, ko je voda segreta na $25\,^\circ\mathrm{C}$. Vzorec $200{,}0\ \mathrm{mL}$ obdelamo po Winklerju, sproščeni jod porabi $19{,}90\ \mathrm{mL}$ tiosulfata. Kolikšna je masna koncentracija kisika in koliko je to odstotkov nasičenosti, če voda pri $25\,^\circ\mathrm{C}$ raztopi največ $8{,}26\ \mathrm{mg/L}$ kisika?

**Podatki:** $V(\text{vzorec}) = 200{,}0\ \mathrm{mL}$, $c(\mathrm{S_2O_3^{2-}}) = 0{,}01005\ \mathrm{mol/L}$, $V(\mathrm{S_2O_3^{2-}}) = 19{,}90\ \mathrm{mL}$, $M(\mathrm{O_2}) = 32{,}00\ \mathrm{g/mol}$, $\gamma_{\text{nas}} = 8{,}26\ \mathrm{mg/L}$
**Iščemo:** $\gamma(\mathrm{O_2})$ in nasičenost v $\%$

:::formula
$n(\mathrm{O_2}) = \dfrac{n(\mathrm{S_2O_3^{2-}})}{4}$, $\quad \gamma(\mathrm{O_2}) = \dfrac{n(\mathrm{O_2})\,M(\mathrm{O_2})}{V(\text{vzorec})}$, $\quad \text{nasičenost} = \dfrac{\gamma(\mathrm{O_2})}{\gamma_{\text{nas}}} \cdot 100\ \%$
:::

**Rešitev:**

1. Tiosulfat: $0{,}01005 \cdot 19{,}90 \approx 0{,}2000$, torej $0{,}2000\ \mathrm{mmol}$.
2. En $\mathrm{O_2}$ prek dveh $\mathrm{I_2}$ porabi štiri tiosulfate: $\dfrac{0{,}2000}{4} = 0{,}05000$, torej $0{,}05000\ \mathrm{mmol}$ kisika.
3. Masa kisika: $0{,}05000 \cdot 32{,}00 = 1{,}600$, torej $1{,}600\ \mathrm{mg}$ v $0{,}2000\ \mathrm{L}$.
4. Izračunaj sam koncentracijo in nasičenost:

:::premisli
Koliko je $\gamma(\mathrm{O_2})$ in koliko odstotkov nasičenosti je to?
---
$\gamma(\mathrm{O_2}) = 1{,}600\ \mathrm{mg} / 0{,}2000\ \mathrm{L} = 8{,}00\ \mathrm{mg/L}$, nasičenost $8{,}00 / 8{,}26 \cdot 100\ \% \approx 97\ \%$. Popoldne je površinska voda skoraj nasičena, ker alge podnevi kisik proizvajajo; ribe se dušijo ponoči in zjutraj, ko ga alge in razkroj porabijo.
:::

## Pogoste napake

- **»Vedno 1 : 1«.** Luka je prenesel razmerje iz kislinsko-baznih titracij in EDTA. Pri redoksu razmerje določa število elektronov: $\mathrm{MnO_4^-}$ sprejme 5, $\mathrm{Fe^{2+}}$ odda 1. Najprej uravnoteži elektrone, šele nato računaj množine.
- **Nakisanje s $\mathrm{HCl}$.** »Kislina je kislina.« Permanganat oksidira tudi klorid, zato porabimo preveč titranta in dobimo previsok rezultat. Pri manganometriji nakisamo z $\mathrm{H_2SO_4}$.
- **Škrob na začetku.** Zdi se, da je zgodnji indikator varnejši. Pri veliki koncentraciji joda pa se jod ujame v škrob in sprošča počasi, končna točka zamuja. Škrob dodaj pri bledo rumeni barvi.
- **Winkler 1 : 2.** Ker $\mathrm{I_2}$ porabi dva tiosulfata, učenci pišejo $n(\mathrm{O_2}) = n(\mathrm{S_2O_3^{2-}})/2$. Pozabijo, da en $\mathrm{O_2}$ sprosti dva $\mathrm{I_2}$. Pravilno: $n(\mathrm{O_2}) = n(\mathrm{S_2O_3^{2-}})/4$.
- **Zamenjava jodometrije in jodimetrije.** Pri jodometriji je analit oksidant in titrant tiosulfat; pri jodimetriji je analit reducent in titrant jod. Najprej se vprašaj: ali analit jod sprošča ali porablja?

## Povzetek

- Redoks titracija temelji na prenosu elektronov; razmerje sledi iz izenačenja elektronov v polreakcijah, ne samo po sebi 1 : 1.
- Nernstova enačba $E = E^\circ + \dfrac{0{,}0592\ \mathrm{V}}{n}\log\dfrac{[\mathrm{ox}]}{[\mathrm{red}]}$ je redoks dvojček Henderson-Hasselbalchove; večja razlika $E^\circ$ da višji preskok.
- Manganometrija: $\mathrm{KMnO_4}$ v $\mathrm{H_2SO_4}$, samoindikator (trajno rožnato), $n(\mathrm{Fe^{2+}}) = 5\,n(\mathrm{MnO_4^-})$, umerjanje z oksalatom (2 : 5).
- Jodometrija: oksidant + prebitek $\mathrm{I^-}$ → $\mathrm{I_2}$, titracija s tiosulfatom ($\mathrm{I_2} : \mathrm{S_2O_3^{2-}} = 1 : 2$), škrob tik pred koncem; tiosulfat umerimo s $\mathrm{KIO_3}$ (1 : 6).
- Winkler: $n(\mathrm{S_2O_3^{2-}}) = 4\,n(\mathrm{O_2})$.

## Drugače: Na sliki

Postavi krivulji drugo ob drugo. Pri titraciji šibke kisline z bazo pH najprej počasi raste, pri polovici je enak $\mathrm{p}K_a$, nato skoči. Pri titraciji $\mathrm{Fe^{2+}}$ s permanganatom (v $1\ \mathrm{mol/L}$ kislini) je enako, le da se na navpični osi dviga potencial:

| delež titracije | potencial $E$ | kaj ga določa |
|---|---|---|
| 50 % | $0{,}77\ \mathrm{V}$ | par $\mathrm{Fe^{3+}/Fe^{2+}}$, enako zastopan |
| 100 % | $\approx 1{,}39\ \mathrm{V}$ | ekvivalenčna točka |
| 200 % | $\approx 1{,}51\ \mathrm{V}$ | par $\mathrm{MnO_4^-/Mn^{2+}}$, enako zastopan |

Potencial v ekvivalenčni točki je tehtano povprečje: $\dfrac{1 \cdot 0{,}77 + 5 \cdot 1{,}51}{6}\ \mathrm{V} \approx 1{,}39\ \mathrm{V}$. Ker permanganat izmenja več elektronov, točka ni na sredini skoka, ampak bližje $1{,}51\ \mathrm{V}$. Krivulja je zato nesimetrična, kar pri titraciji 1 : 1 ne vidiš.

Potencial na lestvici:

```
 0,08 V      0,54 V      0,77 V              1,51 V
 S4O6/S2O3   I2/I-       Fe3+/Fe2+           MnO4-/Mn2+
 ----|-----------|-----------|-------------------|---->  E°
   močnejši reducent               močnejši oksidant
```

Vsak oksidant oksidira vse reducente, ki so na lestvici levo od njega. Zato jod oksidira tiosulfat, permanganat pa železo (in žal tudi klorid pri $1{,}36\ \mathrm{V}$).

## Drugače: Iz vsakdanjega življenja

Jodovo tinkturo kapni na prerezan krompir: škrob v krompirju se obarva temno modro. To je isti indikator kot pri jodometriji.

Zdaj v kozarec vode z nekaj kapljicami jodove tinkture in žlico škroba vrzi zdrobljeno tableto vitamina C. Modra barva izgine. Vitamin C je reducent: elektrone odda jodu, ta postane brezbarven jodid. Če bi obrnil vrstni red in raztopino joda z znano koncentracijo dodajal iz birete k raztopljeni tableti, bi naredil jodimetrijo.

Rjasti madeži na skalah ob izviru, kjer železova voda pride na zrak, so ista oksidacija kot pri titraciji v primeru 1, le da elektrone namesto permanganata sprejme kisik iz zraka: $\mathrm{Fe^{2+}}$ preide v $\mathrm{Fe^{3+}}$, ki se obori kot rjav hidroksid. Tako nastaja tudi limonit.

## Preveri se

? Vzorcu z neznanim oksidantom dodamo $\mathrm{KI}$ in kislino. Kako poteka ta jodometrična določitev?
- Analit je reducent, ki ga titriramo neposredno z raztopino joda.
~ To je jodimetrija. Pri jodometriji analit jod sprosti, ne porabi.
+ Analit je oksidant, ki iz prebitka $\mathrm{I^-}$ sprosti jod; tega titriramo s tiosulfatom.
- Prebitek $\mathrm{KI}$ moramo odmeriti natančno na $0{,}01\ \mathrm{mL}$.
~ Odmerjanje $\mathrm{KI}$ ne vpliva na rezultat, saj je v prebitku. Natančno merimo tiosulfat.
- Škrob dodamo na začetku, da končne točke ne zgrešimo.
~ Na začetku je joda veliko in se ujame v škrob; končna točka zamuja.
> Oksidant sprosti ekvivalentno množino $\mathrm{I_2}$, tiosulfat pa jo izmeri.

? $25{,}00\ \mathrm{mL}$ raztopine $\mathrm{Fe^{2+}}$ porabi $15{,}00\ \mathrm{mL}$ $\mathrm{KMnO_4}$ s koncentracijo $0{,}01000\ \mathrm{mol/L}$. Kolikšna je $c(\mathrm{Fe^{2+}})$?
- $0{,}006000\ \mathrm{mol/L}$
~ To je razmerje 1 : 1. Permanganat sprejme pet elektronov, zato množino pomnožiš s 5.
- $0{,}001200\ \mathrm{mol/L}$
~ Delil si s 5. Petkrat več je železa, ne permanganata.
+ $0{,}03000\ \mathrm{mol/L}$
> $n(\mathrm{Fe^{2+}}) = 5 \cdot 0{,}01000 \cdot 15{,}00 = 0{,}7500\ \mathrm{mmol}$, $c = 0{,}7500\ \mathrm{mmol} / 25{,}00\ \mathrm{mL} = 0{,}03000\ \mathrm{mol/L}$.

? Sošolka je za $100{,}0\ \mathrm{mL}$ vzorca reke in $12{,}00\ \mathrm{mL}$ tiosulfata ($0{,}01000\ \mathrm{mol/L}$) zapisala: $n(\mathrm{O_2}) = 0{,}1200/2 = 0{,}06000\ \mathrm{mmol}$, $\gamma(\mathrm{O_2}) = 19{,}2\ \mathrm{mg/L}$. Ali je račun pravilen?
- Napake ni; $19{,}2\ \mathrm{mg/L}$ je običajna vrednost za reko.
~ Pri sobni temperaturi voda raztopi le okoli $8$–$10\ \mathrm{mg/L}$ kisika, rezultat je nemogoč.
- Pozabila je pretvoriti mL v L, zato je rezultat desetkrat prevelik.
~ Enote so pravilne; napaka je v stehiometriji.
+ Deliti bi morala s 4, ker en $\mathrm{O_2}$ sprosti dva $\mathrm{I_2}$; pravilno je $9{,}60\ \mathrm{mg/L}$.
> $n(\mathrm{O_2}) = 0{,}1200/4 = 0{,}03000\ \mathrm{mmol}$, $\gamma = 0{,}03000 \cdot 32{,}00\ \mathrm{mg} / 0{,}1000\ \mathrm{L} = 9{,}60\ \mathrm{mg/L}$.

? Primerjaj manganometrijo in kislinsko-bazno titracijo. Kaj drži?
- Pri obeh je razmerje titrant : analit vedno 1 : 1.
~ Pri redoksu razmerje sledi iz števila elektronov, pri $\mathrm{MnO_4^-}$ in $\mathrm{Fe^{2+}}$ je 1 : 5.
+ Pri manganometriji vlogo indikatorja prevzame titrant sam, pri kislinsko-bazni potrebujemo dodano barvilo.
- Pri obeh na titracijski krivulji spremljamo pH.
~ Pri redoks titraciji spremljamo potencial $E$, ne pH.
> $\mathrm{MnO_4^-}$ je vijoličast, $\mathrm{Mn^{2+}}$ skoraj brezbarven, zato prva kapljica prebitka obarva raztopino rožnato.

? Pri vzorčenju jezera za Winklerjevo metodo v steklenici ostane mehurček zraka. Kako to vpliva na rezultat?
- Nič, mehurček je premajhen, da bi vplival.
~ Kisik iz mehurčka ($21\ \%$ zraka) se med obdelavo raztopi in reagira z $\mathrm{Mn(OH)_2}$.
+ Rezultat bo previsok, ker se v vzorec raztopi še kisik iz zraka.
- Rezultat bo prenizek, ker kisik pobegne v mehurček.
~ Kisik ne uhaja: $\mathrm{Mn(OH)_2}$ ga veže, in zrak v mehurčku ima več kisika, kot ga je v enaki prostornini vode.
> $\mathrm{Mn(OH)_2}$ veže ves dostopen kisik, tudi tistega iz mehurčka, zato je poraba tiosulfata večja.
