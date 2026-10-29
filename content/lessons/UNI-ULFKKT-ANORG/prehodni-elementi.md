---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Uganka, preden prebereš kar koli teorije. Mars je na nebu rdečkast zaradi železovih oksidov v prahu. Modra galica $\mathrm{CuSO_4 \cdot 5\,H_2O}$ je živo modra, cinkov sulfat $\mathrm{ZnSO_4 \cdot 7\,H_2O}$ pa je bel in njegova raztopina brezbarvna, čeprav sta baker in cink v periodnem sistemu soseda. Kalcij ima v spojinah vedno $+2$, mangan, le nekaj mest desno, pa od $+2$ (bledo rožnati $\mathrm{Mn^{2+}}$) do $+7$ (vijolični $\mathrm{KMnO_4}$). Kaj imajo železo, baker in mangan, česar cink in kalcij nimata?

Prehodne kovine so tudi katalizatorji: železo v Haberjevem postopku za amoniak, vanadijev oksid pri proizvodnji žveplove kisline, platina, paladij in rodij v avtomobilskem katalizatorju. Vse troje, barve, mnoga oksidacijska števila in katalizo, razloži ena stvar: delno zasedene orbitale $d$.

## Razlaga

**1. Kje so in kaj so.** Prehodni elementi so v d-bloku, v skupinah 3 do 12. Pri njih se polnijo orbitale $(n-1)d$. Po definiciji IUPAC je prehodni element tisti, ki ima delno zasedeno podlupino $d$ v atomu ali v vsaj enem običajnem kationu. Cink, kadmij in živo srebro imajo v ionih polno podlupino $d^{10}$, zato jih strogo vzeto ne štejemo med prehodne.

**2. Elektronska konfiguracija ionov.** V atomu se orbitala $4s$ zapolni pred $3d$: železo je $[\mathrm{Ar}]\,3d^6\,4s^2$. Pri ionizaciji pa atom najprej izgubi elektrone $4s$. Zato je $\mathrm{Fe^{2+}}$ $[\mathrm{Ar}]\,3d^6$ in $\mathrm{Fe^{3+}}$ $[\mathrm{Ar}]\,3d^5$. Izjemi v atomih sta Cr ($3d^5\,4s^1$) in Cu ($3d^{10}\,4s^1$).

Primerjaj nekaj ionov, ki se pojavljajo v tej lekciji:

| Ion | Skupina | Oksidacijsko število | Elektroni $d$ |
|---|---|---|---|
| $\mathrm{Ti^{3+}}$ | 4 | $+3$ | $d^1$ |
| $\mathrm{Fe^{2+}}$ | 8 | $+2$ | $d^6$ |
| $\mathrm{Fe^{3+}}$ | 8 | $+3$ | $d^5$ |
| $\mathrm{Cu^{2+}}$ | 11 | $+2$ | $d^9$ |

Ali vidiš, kako se zadnji stolpec izračuna iz srednjih dveh? To je hitro pravilo: število elektronov $d$ v ionu = številka skupine $-$ oksidacijsko število. Za $\mathrm{Fe^{3+}}$: $8 - 3 = 5$, torej $d^5$.

**3. Mnogo oksidacijskih števil.** Pri kalciju sta po energiji dostopna le dva elektrona $4s$. Tretji bi prišel iz notranje lupine, kar stane ogromno energije. Pri prehodnih elementih sta $3d$ in $4s$ po energiji blizu, zato atom lahko odda različno število elektronov. Ionizacijske energije rastejo postopoma, brez velikega skoka.

| Element | Skupina | Pogosta oksidacijska števila | Primer |
|---|---|---|---|
| Ti | 4 | $+3$, $+4$ | $\mathrm{TiO_2}$ |
| Cr | 6 | $+3$, $+6$ | $\mathrm{Cr_2O_3}$, $\mathrm{K_2Cr_2O_7}$ |
| Mn | 7 | $+2$, $+4$, $+7$ | $\mathrm{MnO_2}$, $\mathrm{KMnO_4}$ |
| Fe | 8 | $+2$, $+3$ | $\mathrm{FeSO_4}$, $\mathrm{Fe_2O_3}$ |
| Cu | 11 | $+1$, $+2$ | $\mathrm{Cu_2O}$, $\mathrm{CuSO_4}$ |

Do mangana je najvišje število enako številki skupine (oddani so vsi elektroni $3d$ in $4s$). Desno od mangana jedro elektrone $3d$ drži vse močneje, zato najvišja števila padajo: železo je skoraj vedno $+2$ ali $+3$.

Visoka števila nastopajo v oksoanionih, npr. $\mathrm{MnO_4^-}$ in $\mathrm{Cr_2O_7^{2-}}$. Ti so močni oksidanti. Navzdol po skupini pa postajajo visoka števila *stabilnejša*: $\mathrm{Cr(VI)}$ je oksidant, $\mathrm{W(VI)}$ v $\mathrm{WO_3}$ pa je stabilen. To je obratno kot pri p-bloku, kjer težki elementi raje ostanejo pri nižjem številu.

:::premisli
$\mathrm{Fe^{2+}}$ ($d^6$) se na zraku počasi oksidira v $\mathrm{Fe^{3+}}$. $\mathrm{Mn^{2+}}$ pa v kisli raztopini ostane nespremenjen. Napovej, zakaj, če veš, da je polovično zasedena podlupina posebej stabilna.
---
$\mathrm{Fe^{3+}}$ je $d^5$: z oddajo enega elektrona železo doseže polovično zasedeno podlupino, kar je ugodno. $\mathrm{Mn^{2+}}$ pa je že $d^5$; z oksidacijo v $\mathrm{Mn^{3+}}$ ($d^4$) bi to stabilno razporeditev porušil, zato se ne oksidira rad.
:::

**4. Zakaj so spojine obarvane.** V raztopini je ion obdan z molekulami vode. Rečemo jim *ligandi*: molekule ali ioni, ki so s prostim elektronskim parom vezani na kovinski ion. Delec $[\mathrm{Cu(H_2O)_6}]^{2+}$ je *kompleks*. Natančneje jih obravnava naslednja lekcija.

Šest ligandov leži v ogliščih oktaedra. V prostem ionu imajo vseh pet orbital $d$ enako energijo. Ligandi pa elektrone v orbitalah, ki kažejo proti njim, odbijajo močneje. Pet orbital se razcepi na dve skupini:

```
 E ^   --  --     e_g
   |      |       (2, proti ligandom)
   |      | Delta_o
   |      |
   |  --  --  --  t_2g
                  (3, med ligandi)
```

Razliko energij imenujemo **razcep ligandnega polja** $\Delta_\mathrm{o}$. Elektron lahko vsrka foton z energijo $\Delta_\mathrm{o}$ in skoči iz $t_{2g}$ v $e_g$ (prehod d–d). Za večino ionov je $\Delta_\mathrm{o}$ ravno v območju vidne svetlobe.

Iz bele svetlobe se vsrka ena barva, mi pa vidimo **komplementarno** barvo, preostanek:

| Vsrkana valovna dolžina | Vsrkana barva | Vidimo |
|---|---|---|
| $430$–$490\,\mathrm{nm}$ | modra | oranžno-rumeno |
| $490$–$560\,\mathrm{nm}$ | zelena | vijolično-rdeče |
| $580$–$620\,\mathrm{nm}$ | oranžna | modro |
| $620$–$800\,\mathrm{nm}$ | rdeča | modro-zeleno |

Razvrsti ione iz uganke in tabele zgoraj po številu elektronov $d$. Obarvani so $\mathrm{Ti^{3+}}$ ($d^1$), $\mathrm{Fe^{2+}}$ ($d^6$) in $\mathrm{Cu^{2+}}$ ($d^9$); brezbarvni so $\mathrm{Sc^{3+}}$ in $\mathrm{Ti^{4+}}$ ($d^0$) ter $\mathrm{Zn^{2+}}$ in $\mathrm{Cu^+}$ ($d^{10}$). Vzorec: ion $d^0$ nima elektronov $d$, ki bi skočili, ion $d^{10}$ pa nima prostega mesta v $e_g$, zato sta oba brezbarvna. To je odgovor na uganko z galico in cinkovim sulfatom.

:::premisli
$\mathrm{MnO_4^-}$ je intenzivno vijoličen, $\mathrm{Cr_2O_7^{2-}}$ oranžen. Izračunaj število elektronov $d$ v obeh. Ali barvo lahko povzroča prehod d–d?
---
Mn v $\mathrm{MnO_4^-}$ ima $+7$, torej $7 - 7 = 0$: $d^0$. Cr v $\mathrm{Cr_2O_7^{2-}}$ ima $+6$, torej $6 - 6 = 0$: $d^0$. Prehod d–d ni mogoč. Barva nastane s *prenosom naboja*: elektron preskoči s kisika na kovino. Ti prehodi so zelo močni, zato je permanganat tako intenzivno obarvan.
:::

**5. Kataliza.** Katalizator pospeši reakcijo, ker ponudi pot z nižjo aktivacijsko energijo. Sam se na koncu ne porabi. Prehodne kovine so dobri katalizatorji iz dveh razlogov.

- **Spreminjanje oksidacijskega števila.** Kovina lahko sprejme in odda elektron, nato se vrne v začetno stanje. Primer je $\mathrm{V_2O_5}$ v kontaktnem postopku: $\mathrm{SO_2 + V_2O_5 \rightarrow SO_3 + 2\,VO_2}$, nato $\mathrm{2\,VO_2 + \tfrac12\,O_2 \rightarrow V_2O_5}$. Vanadij gre iz $+5$ v $+4$ in nazaj.
- **Vezava na površino.** Pri *heterogeni* katalizi je katalizator v drugi fazi kot reaktanti, običajno trdna kovina in plini. Molekule se vežejo na površino (adsorpcija), pri tem se njihove vezi oslabijo. Tako železo pri Haberjevem postopku razrahlja trojno vez $\mathrm{N{\equiv}N}$, nikelj pri hidrogenaciji olj pa vez $\mathrm{H{-}H}$.

Pri *homogeni* katalizi je katalizator v isti fazi, npr. ioni $\mathrm{Fe^{2+}}$ v raztopini.

Katalizator ne spremeni $\Delta G$ reakcije in ne premakne ravnotežja. Ravnotežje se le hitreje vzpostavi.

## Rešeni primeri

### Primer 1 (lažji): oksidacijsko število in elektroni d

Določi oksidacijsko število mangana v $\mathrm{KMnO_4}$ in v $\mathrm{MnSO_4}$ ter število elektronov $d$ v obeh.

**Podatki:** spojini $\mathrm{KMnO_4}$ in $\mathrm{MnSO_4}$; K ima $+1$, O ima $-2$, ion $\mathrm{SO_4^{2-}}$ ima naboj $-2$; Mn je v 7. skupini
**Iščemo:** oksidacijsko število $x$ in število elektronov $d$

:::formula
Vsota oksidacijskih števil v spojini je $0$; število elektronov $d$ = skupina $-$ oksidacijsko število.
:::

**Rešitev:**

1. $\mathrm{KMnO_4}$: $(+1) + x + 4 \cdot (-2) = 0$, zato $x = 8 - 1 = 7$, Mn ima $+7$.
2. Elektroni $d$: $7 - 7 = 0$, torej $d^0$. Mangan je oddal vse valenčne elektrone.
3. $\mathrm{MnSO_4}$: $x + (-2) = 0$, zato $x = +2$, ker je sulfat en ion z nabojem $-2$.
4. Elektroni $d$: $7 - 2 = 5$, torej $d^5$, kar je $[\mathrm{Ar}]\,3d^5$.
5. Odgovor: v $\mathrm{KMnO_4}$ ima Mn $+7$ ($d^0$), v $\mathrm{MnSO_4}$ $+2$ ($d^5$).

### Primer 2: razcep iz barve

Astronomi sestavo zvezd berejo iz absorpcijskih črt v spektru; kemik na enak način bere razcep orbital iz spektra raztopine. Raztopina $[\mathrm{Ti(H_2O)_6}]^{3+}$ najmočneje vsrkava svetlobo pri $500\,\mathrm{nm}$. Kolikšen je razcep $\Delta_\mathrm{o}$ v $\mathrm{kJ/mol}$? Kakšne barve je raztopina?

**Podatki:** $\lambda = 500\,\mathrm{nm} = 5{,}00 \cdot 10^{-7}\,\mathrm{m}$, $h = 6{,}626 \cdot 10^{-34}\,\mathrm{J\,s}$, $c = 2{,}998 \cdot 10^{8}\,\mathrm{m/s}$, $N_\mathrm{A} = 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}}$
**Iščemo:** $\Delta_\mathrm{o}$ v $\mathrm{kJ/mol}$ in barvo raztopine

:::formula
$E_\text{foton} = \dfrac{hc}{\lambda}$, $\Delta_\mathrm{o} = N_\mathrm{A} \cdot E_\text{foton}$
:::

**Rešitev:**

1. $\mathrm{Ti^{3+}}$: $4 - 3 = 1$, torej $d^1$. En elektron v $t_{2g}$, en sam možen prehod, zato ima spekter en sam absorpcijski vrh.
2. Energija enega fotona: $E = \dfrac{6{,}626 \cdot 10^{-34}\,\mathrm{J\,s} \cdot 2{,}998 \cdot 10^{8}\,\mathrm{m/s}}{5{,}00 \cdot 10^{-7}\,\mathrm{m}} \approx 3{,}97 \cdot 10^{-19}\,\mathrm{J}$.
3. Na mol: $\Delta_\mathrm{o} \approx 3{,}97 \cdot 10^{-19}\,\mathrm{J} \cdot 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}} \approx 239\,\mathrm{kJ/mol}$.
4. Vsrkana je zelena svetloba, zato vidimo komplementarno barvo.
5. Odgovor: $\Delta_\mathrm{o} \approx 239\,\mathrm{kJ/mol}$, raztopina je vijolično-rdeča.

### Primer 3 (težji): kako ioni železa katalizirajo reakcijo

Reakcija $\mathrm{S_2O_8^{2-} + 2\,I^- \rightarrow 2\,SO_4^{2-} + I_2}$ je počasna, ker se odbijata dva negativna iona. Malo $\mathrm{Fe^{2+}}$ jo močno pospeši. Pokaži, da sta obe stopnji s $\mathrm{Fe}$ termodinamsko ugodni in da se železo obnovi.

**Podatki:** $E^\circ(\mathrm{S_2O_8^{2-}/SO_4^{2-}}) = 2{,}01\,\mathrm{V}$, $E^\circ(\mathrm{Fe^{3+}/Fe^{2+}}) = 0{,}77\,\mathrm{V}$, $E^\circ(\mathrm{I_2/I^-}) = 0{,}54\,\mathrm{V}$
**Iščemo:** $E^\circ_\text{celice}$ obeh stopenj in neto reakcijo

:::formula
$E^\circ_\text{celice} = E^\circ_\text{oksidant} - E^\circ_\text{reducent}$; stopnja je ugodna, če je $E^\circ_\text{celice} > 0$.
:::

**Rešitev:**

1. Stopnja 1: $\mathrm{S_2O_8^{2-} + 2\,Fe^{2+} \rightarrow 2\,SO_4^{2-} + 2\,Fe^{3+}}$. Pozitivni ion in negativni ion se privlačita.
2. $E^\circ_1 = 2{,}01\,\mathrm{V} - 0{,}77\,\mathrm{V} = 1{,}24\,\mathrm{V} > 0$, ugodno.
3. Stopnja 2: $\mathrm{2\,Fe^{3+} + 2\,I^- \rightarrow 2\,Fe^{2+} + I_2}$. Spet se privlačita nasprotna naboja.
4. $E^\circ_2 = 0{,}77\,\mathrm{V} - 0{,}54\,\mathrm{V} = 0{,}23\,\mathrm{V} > 0$, ugodno.
5. Seštejemo stopnji: $\mathrm{2\,Fe^{2+}}$ in $\mathrm{2\,Fe^{3+}}$ se pokrajšata, ostane prvotna reakcija. Železo se je obnovilo.
6. Odgovor: obe stopnji imata $E^\circ_\text{celice} > 0$ ($1{,}24\,\mathrm{V}$ in $0{,}23\,\mathrm{V}$); železo deluje kot homogeni katalizator, ker menja število $+2 \rightleftharpoons +3$.

### Primer 4: zdaj ti

Ion $[\mathrm{Cu(H_2O)_6}]^{2+}$ ima širok absorpcijski vrh pri približno $800\,\mathrm{nm}$. Izračunaj $\Delta_\mathrm{o}$ v $\mathrm{kJ/mol}$ in pojasni barvo modre galice.

**Podatki:** $\lambda = 800\,\mathrm{nm}$; iz primera 2: pri $500\,\mathrm{nm}$ je $\Delta_\mathrm{o} \approx 239{,}3\,\mathrm{kJ/mol}$
**Iščemo:** $\Delta_\mathrm{o}$ in barvo

:::formula
$\Delta_\mathrm{o} = \dfrac{N_\mathrm{A} hc}{\lambda}$, zato je $\Delta_\mathrm{o}$ obratno sorazmeren z $\lambda$.
:::

**Rešitev:**

1. $\mathrm{Cu^{2+}}$: $11 - 2 = 9$, torej $d^9$. Eno mesto v $e_g$ je prosto, prehod d–d je mogoč.
2. Ker je $\Delta_\mathrm{o}$ obratno sorazmeren z $\lambda$: $\Delta_\mathrm{o} = 239{,}3\,\mathrm{kJ/mol} \cdot \dfrac{500\,\mathrm{nm}}{800\,\mathrm{nm}}$.
3. Izračunaj sam, nato s tabelo barv določi, kaj vidimo:

:::premisli
Koliko je $\Delta_\mathrm{o}$ in zakaj je raztopina modra?
---
$\Delta_\mathrm{o} \approx 149{,}6\,\mathrm{kJ/mol}$, manj kot pri $\mathrm{Ti^{3+}}$. Ion vsrkava rdečo svetlobo (in del bližnje infrardeče), zato vidimo komplementarno modro-zeleno, v praksi svetlo modro barvo.
:::

## Pogoste napake

- **"$\mathrm{Fe^{2+}}$ je $[\mathrm{Ar}]\,3d^4\,4s^2$."** Pri tvorbi kationa atom najprej odda elektrone $4s$, ne $3d$. Pravilno: $\mathrm{Fe^{2+}}$ je $[\mathrm{Ar}]\,3d^6$.
- **"Ion je obarvan, ker absorbira barvo, ki jo vidimo."** Vidimo preostanek bele svetlobe, torej komplementarno barvo. Modri $\mathrm{Cu^{2+}}$ vsrkava rdečo.
- **"Vsaka spojina prehodne kovine je obarvana."** Ioni $d^0$ in $d^{10}$ nimajo prehodov d–d, zato so $\mathrm{Zn^{2+}}$, $\mathrm{Sc^{3+}}$ in $\mathrm{TiO_2}$ brezbarvni oz. beli. Barva $d^0$ oksoanionov ($\mathrm{MnO_4^-}$) izvira iz prenosa naboja.
- **"Najvišje oksidacijsko število je vedno številka skupine."** Velja le do mangana. Za železo ($8$. skupina) $+8$ v običajni kemiji ne nastopa.
- **"Katalizator premakne ravnotežje k produktom."** Katalizator zniža aktivacijsko energijo za obe smeri enako. Ravnotežje se doseže hitreje, njegova lega ostane enaka.

## Povzetek

- Prehodni elementi: d-blok, skupine 3 do 12; delno zasedena podlupina $d$ v atomu ali običajnem ionu (Zn, Cd, Hg strogo niso prehodni).
- Ioni najprej izgubijo elektrone $4s$; število elektronov $d$ = skupina $-$ oksidacijsko število.
- Veliko oksidacijskih števil, ker sta $3d$ in $4s$ po energiji blizu; najvišje število raste do Mn ($+7$), nato pada.
- Navzdol po skupini so visoka števila stabilnejša (obratno kot v p-bloku).
- Barva: ligandi razcepijo orbitale $d$ za $\Delta_\mathrm{o}$; vsrka se foton $E = hc/\lambda$, vidimo komplementarno barvo; $d^0$ in $d^{10}$ sta brezbarvna (razen prenosa naboja).
- Kataliza: menjava oksidacijskega števila (homogena, $\mathrm{Fe^{2+}/Fe^{3+}}$, $\mathrm{V_2O_5}$) in adsorpcija na površino (heterogena, Fe, Ni, Pt).
- Katalizator zniža aktivacijsko energijo, ne spremeni ravnotežja.

## Drugače: Iz vsakdanjega življenja

- **Rja in modra galica.** Rja je rjava zaradi $\mathrm{Fe^{3+}}$, raztopina $\mathrm{FeSO_4}$ pa je bledo zelena zaradi $\mathrm{Fe^{2+}}$. Ko raztopina $\mathrm{FeSO_4}$ stoji na zraku, porumeni: $\mathrm{Fe^{2+}}$ se oksidira v $\mathrm{Fe^{3+}}$.
- **Bela barva.** Titanov dioksid $\mathrm{TiO_2}$ ($\mathrm{Ti^{4+}}$, $d^0$) je bel pigment v zidnih barvah, zobni pasti in sončnih kremah. Bel je, ker vidne svetlobe ne vsrkava.
- **Avtomobilski katalizator.** Izpušni plini gredo skozi satovje, prevlečeno s Pt, Pd in Rh. Na površini kovin se $\mathrm{CO}$ oksidira v $\mathrm{CO_2}$, dušikovi oksidi pa reducirajo v $\mathrm{N_2}$. Kovina se ne porabi, a jo "zastrupi" svinec, zato tak avto tankamo neosvinčen bencin.
- **Alkotest.** Starejši alkotesti so uporabljali oranžni $\mathrm{Cr_2O_7^{2-}}$ ($\mathrm{Cr(VI)}$). Etanol ga reducira v zeleni $\mathrm{Cr^{3+}}$: sprememba oksidacijskega števila se vidi kot sprememba barve.

## Drugače: Korak za korakom s številkami

Zakaj kalcij ostane pri $+2$, mangan pa ne? Poglej zaporedne ionizacijske energije (v $\mathrm{kJ/mol}$, zaokroženo):

| Element | $I_1$ | $I_2$ | $I_3$ |
|---|---|---|---|
| Ca | $590$ | $1145$ | $4912$ |
| Mn | $717$ | $1509$ | $3248$ |

1. Pri Ca je $I_3$ več kot štirikrat večja od $I_2$: tretji elektron je iz notranje lupine $3p$. Energija mreže ali hidratacije tega ne pokrije, zato $\mathrm{Ca^{3+}}$ ne nastane.
2. Pri Mn je $I_3$ le približno dvakrat večja od $I_2$: tretji elektron je še vedno valenčni elektron $3d$.
3. Pri Mn naraščanje ostane zmerno vse do sedmega elektrona, potem pride skok (notranja lupina). Zato je najvišje število $+7$.
4. Visokih ionov kot $\mathrm{Mn^{7+}}$ v resnici ni. Visoka števila so stabilna le v kovalentnih oksoanionih, kot je $\mathrm{MnO_4^-}$, kjer kisik "deli" naboj.

## Drugače: Bolj natančno

**Jakost polja in spinsko stanje.** Velikost $\Delta_\mathrm{o}$ je odvisna od liganda (spektrokemijska vrsta: $\mathrm{I^-} < \mathrm{Cl^-} < \mathrm{H_2O} < \mathrm{NH_3} < \mathrm{CN^-}$), od oksidacijskega števila (višje število, večji razcep) in od periode ($4d$ in $5d$ imata večji razcep kot $3d$). Za $d^4$ do $d^7$ se elektroni razporedijo glede na to, ali je $\Delta_\mathrm{o}$ večji od energije parjenja: nizkospinsko ali visokospinsko stanje. To vodi do magnetnih lastnosti in je tema koordinacijske kemije.

**Izbirna pravila.** Prehodi d–d so v središčnosimetričnem oktaedru prepovedani po Laportovem pravilu (ne spremeni se parnost orbitale). Opazimo jih le šibko, ker vibracije za trenutek porušijo simetrijo. Zato so raztopine $\mathrm{Cu^{2+}}$ ali $\mathrm{Ti^{3+}}$ blede v primerjavi s $\mathrm{MnO_4^-}$, kjer je prehod s prenosom naboja dovoljen. Visokospinski $d^5$ ($\mathrm{Mn^{2+}}$) ima prehode še spinsko prepovedane, zato je komaj rožnat.

**Sabatierjevo načelo.** Dober heterogeni katalizator veže reaktante ravno prav močno: dovolj, da jih aktivira, a ne premočno, sicer produkt ne odide s površine. Če vrišemo hitrost reakcije proti jakosti vezave za različne kovine, dobimo krivuljo v obliki vulkana; pri sintezi amoniaka sta blizu vrha Fe in Ru.

## Preveri se

? Kakšna je elektronska konfiguracija iona $\mathrm{Fe^{3+}}$?
- $[\mathrm{Ar}]\,3d^3\,4s^2$
~ Atom pri ionizaciji najprej odda elektrone $4s$, ne $3d$.
+ $[\mathrm{Ar}]\,3d^5$
- $[\mathrm{Ar}]\,3d^6\,4s^2$
~ To je konfiguracija nevtralnega atoma Fe; ion $3+$ ima tri elektrone manj.
> Fe je $[\mathrm{Ar}]\,3d^6\,4s^2$. Najprej odda oba elektrona $4s$, nato en elektron $3d$: $8 - 3 = 5$ elektronov $d$.

? Katera vodna raztopina je brezbarvna?
- $\mathrm{CuSO_4}$
~ $\mathrm{Cu^{2+}}$ je $d^9$ in ima prehod d–d, raztopina je modra.
- $\mathrm{CrCl_3}$
~ $\mathrm{Cr^{3+}}$ je $d^3$ ($6 - 3 = 3$), ima prehode d–d in je zelen ali vijoličen.
+ $\mathrm{ZnSO_4}$
- $\mathrm{KMnO_4}$
~ Mn(VII) je sicer $d^0$, a permanganat je intenzivno vijoličen zaradi prenosa naboja s kisika na mangan.
> $\mathrm{Zn^{2+}}$ je $d^{10}$: v $e_g$ ni prostega mesta, prehod d–d ni mogoč, prenosa naboja v vidnem območju ni.

? Raztopina vsrkava predvsem rdečo svetlobo. Kakšne barve je?
- rdeča
~ Rdeča svetloba je vsrkana, do očesa ne pride. Vidimo preostanek.
+ modro-zelena
- rumena
~ Rumeno vidimo, ko se vsrka modra ali vijolična svetloba.
> Vidimo komplementarno barvo vsrkane. Rdeči je komplementarna modro-zelena.

? Kaj se zgodi, če v reakcijo pri Haberjevem postopku dodamo boljši katalizator?
- Ravnotežni delež amoniaka se poveča.
~ Katalizator zniža aktivacijsko energijo za obe smeri enako, zato ravnotežja ne premakne.
+ Ravnotežje se vzpostavi hitreje, delež amoniaka v ravnotežju ostane enak.
- Reakcija postane bolj eksotermna.
~ $\Delta H$ in $\Delta G$ sta lastnosti začetnega in končnega stanja; katalizator ju ne spremeni.
> Katalizator ponudi pot z nižjo aktivacijsko energijo. Hitrosti obeh smeri se povečata enako, zato je lega ravnotežja enaka.

? Kompleks vsrkava pri $600\,\mathrm{nm}$. Kolikšen je $\Delta_\mathrm{o}$? ($N_\mathrm{A}hc = 0{,}1196\,\mathrm{J\,m/mol}$)
- $1{,}99 \cdot 10^{-4}\,\mathrm{J/mol}$
~ Valovno dolžino si vstavil v nanometrih ($600$) namesto v metrih. $600\,\mathrm{nm} = 6{,}00 \cdot 10^{-7}\,\mathrm{m}$.
+ $199\,\mathrm{kJ/mol}$
- $3{,}31 \cdot 10^{-19}\,\mathrm{J}$
~ To je energija enega fotona. Za kJ/mol pomnoži z $N_\mathrm{A}$.
> $\Delta_\mathrm{o} = \dfrac{0{,}1196\,\mathrm{J\,m/mol}}{6{,}00 \cdot 10^{-7}\,\mathrm{m}} \approx 199\,400\,\mathrm{J/mol} \approx 199\,\mathrm{kJ/mol}$. Vsrkana je oranžna, raztopina je modra.
