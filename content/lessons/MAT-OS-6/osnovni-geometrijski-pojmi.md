---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Od prvih razredov rišeš črte, kvadrate in pravokotnike, z ravnilom meriš dolžine, pri obsegu in ploščini pravokotnika pa računaš z dolžinami stranic. Besede, kot so »črta«, »rob« ali »vogal«, so v vsakdanjem pogovoru povsem dobre, v matematiki pa ne: vsaka beseda mora imeti natančen pomen, da vsi mislimo isto.

V tej lekciji spoznaš osnovne gradnike geometrije: **točko**, **premico**, **poltrak** in **daljico**, ter dva pomembna odnosa med premicama: **vzporednost** in **pravokotnost**. Uporabljamo jih povsod, kjer je treba nekaj natančno opisati ali narisati: pri načrtu hiše, zemljevidu, tlorisu stanovanja ali računalniški grafiki. Isti pojmi so podlaga za naslednje teme, saj boš kote, krožnice in konstrukcije opisoval prav z njimi. Pri računanju z dolžinami daljic pa boš uporabljal ulomke, decimalna števila in preproste enačbe, ki jih že poznaš.

## Razlaga

**1. Točka.** Točka je osnovni pojem: nima velikosti, ima samo **lego**. Narisana pikica ali križec je le sled svinčnika, prava točka je neskončno majhna. Točke označimo z velikimi tiskanimi črkami: $A$, $B$, $C$. Vse, kar rišemo v tej lekciji, leži v **ravnini**, to je ravna ploskev, ki se v mislih neomejeno širi na vse strani. List papirja ali šolska tabla sta njena dela.

**2. Premica.** Premica je ravna črta brez začetka in konca: v mislih se neomejeno nadaljuje v obe smeri. Je neskončno tanka in ima neskončno mnogo točk. Označimo jo z majhno tiskano črko ($p$, $q$, $r$) ali z imenoma dveh točk na njej: premica $AB$. Dva pravila veljata vedno:

- skozi dve različni točki gre **natanko ena** premica (zato z ravnilom potegnemo eno samo ravno črto med dvema točkama),
- skozi eno točko jih gre **neskončno mnogo**.

**3. Točka in premica.** Točka lahko leži na premici ali ne. Zapišemo: $A \in p$ (»točka $A$ leži na premici $p$«) in $D \notin p$ (»točka $D$ ne leži na premici $p$«).

**4. Poltrak.** Točka $O$ na premici razdeli premico na dva dela. Vsak ima začetek v $O$ in se neomejeno nadaljuje v eno smer. Vsakemu pravimo **poltrak**: del premice z začetkom, a brez konca. Poltrak $AB$ ima začetek v $A$ in poteka skozi $B$ naprej. Vrstni red črk zato šteje: poltrak $AB$ in poltrak $BA$ sta različna, ker začneta v različnih točkah in tečeta v nasprotnih smereh. Dva poltraka z isto začetno točko, ki skupaj sestavljata premico, sta **nasprotna**.

**5. Daljica.** Daljica je del premice med dvema točkama, ki ju imenujemo **krajišči**. Ima začetek in konec, zato ima **dolžino**, ki jo izmerimo z ravnilom. Daljico med $A$ in $B$ imenujemo daljica $AB$, njeno dolžino zapišemo $|AB|$. Ker daljice ne usmerjamo, je $|AB| = |BA|$. Pri merjenju poravnaj krajišče $A$ z oznako $0$ na ravnilu in preberi oznako pri $B$. Dolžino zapišemo z enoto, na primer $|AB| = 4{,}5\,\text{cm}$.

| pojem | začetek | konec | dolžina |
|---|---|---|---|
| premica | ne | ne | neskončna, ni merljiva |
| poltrak | da | ne | neskončna, ni merljiva |
| daljica | da | da | končna, merljiva |

Za daljice veljata dve pravili:

- Če točka $C$ leži na daljici $AB$ (med $A$ in $B$), je $|AB| = |AC| + |CB|$.
- **Razpolovišče** daljice $AB$ je točka $M$ na daljici, ki je enako oddaljena od obeh krajišč: $|AM| = |MB| = \dfrac{|AB|}{2}$. Daljico razdeli na dve enaki polovici.

**6. Dve premici v ravnini.** Za dve različni premici velja natanko ena izmed možnosti:

- imata **natanko eno skupno točko**: premici se **sekata**, skupni točki pravimo **presečišče**,
- nimata nobene skupne točke: premici sta **vzporedni**.

Če bi imeli skupni dve različni točki, bi bili obe točki na eni in isti premici, zato sta premici potem ista.

**7. Vzporednici.** Premici $p$ in $q$ sta vzporedni, če ležita v isti ravnini in nimata skupne točke, kakor koli ju podaljšamo. Zapišemo $p \parallel q$. Vzporednici sta povsod enako narazen, kot tirnici na železnici. Velja:

- skozi točko $T$, ki ne leži na premici $p$, gre **natanko ena** vzporednica s $p$,
- če je $a \parallel b$ in $b \parallel c$, je tudi $a \parallel c$.

Vzporednico skozi točko $T$ narišemo z geotrikotnikom in ravnilom: geotrikotnik položimo s stranico na premico $p$, ob drugo stranico prislonimo ravnilo in ga trdno držimo, nato geotrikotnik drsimo vzdolž ravnila, dokler prva stranica ne gre skozi $T$. Vzdolž nje potegnemo črto.

**8. Pravokotnici.** Premici sta **pravokotni**, če se sekata in v presečišču tvorita **pravi kot**, tak, kot ga ima vogal lista ali geotrikotnika (kote bomo spoznali v naslednji temi). Zapišemo $p \perp q$. Pravokotnici nista nujno vodoravna in navpična: če list zasukaš, ostaneta pravokotni.

- Skozi dano točko gre **natanko ena** pravokotnica na dano premico (točka je lahko na premici ali zunaj nje).
- Če sta premici vzporedni in je tretja pravokotna na eno izmed njiju, je pravokotna tudi na drugo: iz $a \parallel b$ in $c \perp a$ sledi $c \perp b$.

Pravokotnico skozi točko $T$ na premico $p$ narišemo tako: eno stranico ob pravem kotu geotrikotnika položimo na $p$ in ga drsimo po $p$, dokler druga stranica ob pravem kotu ne gre skozi $T$. Vzdolž nje potegnemo črto.

**9. Razdalje.** Razdalja med dvema točkama je dolžina daljice med njima. **Razdalja točke od premice** je dolžina pravokotne daljice od točke do premice, to je najkrajša pot do nje. **Razdalja med vzporednicama** je razdalja katere koli točke ene premice od druge, povsod enaka.

## Rešeni primeri

### Primer 1 (lažji)

Na premici $p$ ležijo točke $A$, $B$ in $C$ v tem vrstnem redu (točka $B$ je med $A$ in $C$). Točka $D$ ne leži na premici $p$. a) Z znaki zapiši, katere točke ležijo na $p$ in katera ne. b) Naštej vse daljice, ki jih določajo točke $A$, $B$ in $C$. c) Poimenuj poltraka z začetkom v $B$, ki potekata skozi $A$ oziroma skozi $C$. Sta enaka?

**Podatki:** točke $A$, $B$, $C$ ležijo na premici $p$ v tem vrstnem redu, $B$ je med $A$ in $C$, točka $D$ ne leži na $p$
**Iščemo:** zapis lege točk, imena vseh daljic, imeni poltrakov z začetkom v $B$

:::formula
$X \in p$ (točka leži na premici), $X \notin p$ (ne leži). Daljica $XY$ ima krajišči $X$ in $Y$. Poltrak $XY$ se začne v $X$ in poteka skozi $Y$.
:::

**Rešitev:**

1. a) $A \in p$, $B \in p$, $C \in p$ in $D \notin p$.
2. b) Vsak par točk določa eno daljico: daljica $AB$, daljica $BC$ in daljica $AC$. Skupaj so tri. Daljica $AC$ vsebuje tudi točko $B$.
3. c) Poltrak z začetkom v $B$ skozi $A$ je poltrak $BA$, skozi $C$ pa poltrak $BC$.
4. Poltraka nista enaka: začneta v isti točki $B$, vendar tečeta v nasprotnih smereh. Skupaj sestavljata premico $p$, zato sta nasprotna.
5. Odgovor: tri daljice ($AB$, $BC$, $AC$), poltraka $BA$ in $BC$ sta različna (nasprotna).

### Primer 2 (srednji)

Daljica $AB$ je dolga $15\,\text{cm}$. Točka $C$ leži na daljici $AB$ tako, da je $|AC|$ enaka $\dfrac{2}{5}$ dolžine $|AB|$. Točka $M$ je razpolovišče daljice $CB$. Izračunaj $|AC|$, $|CB|$, $|CM|$ in $|AM|$.

**Podatki:** $|AB| = 15\,\text{cm}$, $C$ leži na daljici $AB$, $|AC| = \dfrac{2}{5}$ od $|AB|$, $M$ je razpolovišče daljice $CB$
**Iščemo:** $|AC|$, $|CB|$, $|CM|$ in $|AM|$

:::formula
Če $C$ leži na daljici $AB$: $|AB| = |AC| + |CB|$. Razpolovišče $M$ daljice $CB$: $|CM| = \dfrac{|CB|}{2}$.
:::

**Rešitev:**

1. Ena petina daljice $AB$ je $15 : 5 = 3\,\text{cm}$, zato je $|AC| = 2 \cdot 3\,\text{cm} = 6\,\text{cm}$.
2. Točka $C$ leži na daljici $AB$, zato je $|CB| = |AB| - |AC| = 15\,\text{cm} - 6\,\text{cm} = 9\,\text{cm}$.
3. Točka $M$ razpolovi daljico $CB$: $|CM| = 9\,\text{cm} : 2 = 4{,}5\,\text{cm}$.
4. Točka $M$ leži na daljici $CB$, zato $|AM| = |AC| + |CM| = 6\,\text{cm} + 4{,}5\,\text{cm} = 10{,}5\,\text{cm}$.
5. Preverimo na drug način: $|MB| = |CM| = 4{,}5\,\text{cm}$, zato je $|AM| = |AB| - |MB| = 15\,\text{cm} - 4{,}5\,\text{cm} = 10{,}5\,\text{cm}$. Ujema se.
6. Odgovor: $|AC| = 6\,\text{cm}$, $|CB| = 9\,\text{cm}$, $|CM| = 4{,}5\,\text{cm}$, $|AM| = 10{,}5\,\text{cm}$.

### Primer 3 (težji)

V isti ravnini so premice $a$, $b$, $c$ in $d$. Vemo, da je $a \parallel b$, $c \perp a$ in $d \parallel c$. Razdalja med vzporednicama $a$ in $b$ je $4\,\text{cm}$. Točka $T$ leži na premici $a$. a) Kakšen je odnos med $c$ in $b$? b) Kakšen je odnos med $d$ in $a$ ter med $d$ in $b$? c) Kolikšna je razdalja točke $T$ od premice $b$?

**Podatki:** vse premice ležijo v isti ravnini, $a \parallel b$, $c \perp a$, $d \parallel c$, razdalja med $a$ in $b$ je $4\,\text{cm}$, $T \in a$
**Iščemo:** odnos premic $c$ in $b$, odnos premic $d$ in $a$ ter $d$ in $b$, razdaljo točke $T$ od $b$

:::formula
Če je $a \parallel b$ in $c \perp a$, je $c \perp b$. Če je $d \parallel c$ in $c \perp a$, je $d \perp a$. Razdalja med vzporednicama je povsod enaka.
:::

**Rešitev:**

1. Skico narišemo tako, da sta $a$ in $b$ dve vodoravni črti, $4\,\text{cm}$ narazen. Ker sta premici $a$ in $b$ vzporedni, sta povsod enako narazen.
2. a) Premica $c$ je pravokotna na $a$, zato jo seka pod pravim kotom. Ker je $b$ vzporedna z $a$, $c$ seka tudi $b$ pod pravim kotom, torej $c \perp b$.
3. b) Premica $d$ je vzporedna s $c$, zato ima isto lego glede na $a$ in $b$ kot $c$. Velja $d \perp a$ in $d \perp b$.
4. c) Razdalja točke $T$ od $b$ je dolžina pravokotne daljice od $T$ do $b$. Točka $T$ leži na $a$, razdalja med vzporednicama pa je povsod enaka, zato je razdalja $4\,\text{cm}$.
5. Odgovor: $c \perp b$, $d \perp a$, $d \perp b$ in razdalja $T$ od $b$ je $4\,\text{cm}$.

## Pogoste napake

- **»Premica ima konec.«** Na papirju narišemo le del premice, zato se zdi, da se začne in konča. Razlog: papir je omejen, premica ni. Pravilno: če sta označeni dve krajišči, gre za daljico. Premico narišemo s puščicama ali kot črto, ki sega čez označeni točki.
- **Poltraka $AB$ in $BA$ sta enaka.** Razlog: oba vsebujeta točki $A$ in $B$. Pravilno: poltrak se začne v prvi črki. Poltrak $AB$ gre od $A$ skozi $B$ naprej, poltrak $BA$ pa od $B$ skozi $A$ naprej.
- **»Ne sekata se, torej sta vzporedni.«** Razlog: na listu se premici morda ne srečata, zunaj lista pa se. Pravilno: vzporednost preveri z razdaljo. Izmeri razdaljo med premicama na dveh različnih mestih. Če je povsod enaka, sta vzporedni, sicer ne.
- **»Pravokotni premici sta vodoravna in navpična.«** Razlog: tako ju vidimo v zvezku. Pravilno: pravokotnost se pozna po pravem kotu, ne po legi na listu. Preveri z vogalom geotrikotnika, saj sta lahko obe premici poševni.
- **Napačno merjenje daljice.** Razlog: začetek ravnila ni vedno oznaka $0$, pred njo je pogosto še prazen rob. Pravilno: krajišče $A$ postavi na oznako $0$, dolžino preberi pri $B$. Če začneš pri $1$, odštej: $7{,}5 - 1 = 6{,}5$.

## Povzetek

- Točka ima samo lego in jo označimo z veliko črko. Premica je ravna in neomejena v obe smeri. Skozi dve različni točki gre natanko ena premica.
- Zapis: $A \in p$ (točka leži na premici), $D \notin p$ (ne leži).
- Poltrak $AB$ ima začetek v $A$ in poteka skozi $B$. Poltrak $AB$ in poltrak $BA$ sta različna.
- Daljica $AB$ je del premice med krajiščema, njena dolžina je $|AB| = |BA|$. Če $C$ leži na daljici $AB$, je $|AB| = |AC| + |CB|$.
- Razpolovišče $M$ daljice $AB$: $|AM| = |MB| = \dfrac{|AB|}{2}$.
- Dve različni premici se sekata v eni točki ali pa sta vzporedni ($p \parallel q$, nimata skupne točke).
- Pravokotni premici ($p \perp q$) se sekata pod pravim kotom. Če je $a \parallel b$ in $c \perp a$, je $c \perp b$.
- Skozi točko zunaj premice gre natanko ena vzporednica in natanko ena pravokotnica. Razdalja točke od premice je dolžina pravokotne daljice.

## Drugače: Na sliki

Poglej premico, poltrak in daljico, narisane eno pod drugo (pike $A$ in $B$ sta isti):

```
premica p        <----A--------B---->
poltrak AB                A--------B---->
daljica AB                A--------B
```

Premica ima puščici na obeh straneh, poltrak eno samo, daljica nobene. Poltrak ima na začetku črko brez puščice, ker se tam konča. Dve premici si lahko predstavljaš s tremi znaki, ki jih poznaš:

| znak | kaj narišeš | odnos premic |
|---|---|---|
| = | dve črti, ki tečeta vštric | vzporedni |
| + | ena vodoravna, ena navpična črta | pravokotni (sekata se pod pravim kotom) |
| X | dve poševni črti, ki se križata | sekata se, a nista pravokotni |

V zvezku s kvadratno mrežo vse to vidiš kar sam. Vse vodoravne črte mreže so med seboj vzporedne, prav tako vse navpične. Vsaka vodoravna črta je pravokotna na vsako navpično. Razmik med sosednjima vodoravnima črtama je povsod enak, kar je razdalja med vzporednicama.

## Drugače: Iz vsakdanjega življenja

**Točka.** Na zemljevidu je kraj, na primer Ljubljana, majhna pika. Zemljevid ne kaže njene velikosti, ampak le lego, in to je ravno pomen točke.

**Poltrak.** Curek svetlobe iz laserskega kazalnika se začne pri kazalniku in gre naravnost naprej, dokler ga kaj ne ustavi. Tudi pogled skozi ključavnico ali žarek žaromata je podoben poltraku: ima začetek, konca pa si v mislih ne predstavljaš.

**Daljica.** Napeta vrvica, rob mize, svinčnik na mizi: vse to so daljice, saj imajo jasna krajišča in jih lahko izmeriš. Ravna pot med dvema krajema je najkrajša pot med njima.

**Vzporednici.** Tirnici na železnici, črti na robu ceste, strune na kitari, letve na ograji. Vzporednice morajo biti povsod enako narazen: če bi se tirnici približali, bi se vlak izkolesil.

**Pravokotnici.** Vogal sobe, kjer se stena sreča s tlemi, okenski okvir, križišče ulic v mrežasto zgrajenem mestu, križ na zastavi Švice. Zidar in tesar uporabljata pravi kot, da so stene in nosilci res pravokotni.

## Drugače: Korak za korakom s številkami

**Postopek A: dolžini dveh delov daljice.** Točka $T$ leži na daljici $AB$ z $|AB| = 24\,\text{cm}$. Daljica $TB$ je za $6\,\text{cm}$ daljša od daljice $AT$. Koliko sta dolgi?

1. Neznano dolžino označimo: $|AT| = x$.
2. Potem je $|TB| = x + 6$ (v centimetrih).
3. Ker $T$ leži na daljici $AB$, je $|AT| + |TB| = |AB|$, torej $x + (x + 6) = 24$.
4. Poenostavimo: $2x + 6 = 24$, nato $2x = 18$ in $x = 9$.
5. $|AT| = 9\,\text{cm}$ in $|TB| = 9 + 6 = 15\,\text{cm}$.
6. Preverimo: $9 + 15 = 24$ in $15 - 9 = 6$.

**Postopek B: vzporednica skozi točko.** Točka $T$ je $3\,\text{cm}$ od premice $p$.

1. Geotrikotnik s stranico položi na $p$.
2. Ob drugo stranico geotrikotnika prisloni ravnilo.
3. Geotrikotnik drsi po ravnilu, dokler stranica, ki je bila na $p$, ne gre skozi $T$.
4. Po tej stranici potegni črto $q$.
5. Preveri: izmeri razdaljo med $p$ in $q$ pri dveh mestih, na primer $2\,\text{cm}$ levo in $8\,\text{cm}$ desno od $T$. Če dobiš obakrat $3\,\text{cm}$, je $q \parallel p$. Če dobiš $3\,\text{cm}$ in $3{,}4\,\text{cm}$, premici nista vzporedni.

**Postopek C: pravokotnica skozi točko.** Isto točko $T$ povežemo s premico $p$ tako, da je črta pravokotna na $p$.

1. Stranico ob pravem kotu geotrikotnika položi na $p$.
2. Geotrikotnik drsi po $p$, dokler druga stranica ob pravem kotu ne gre skozi $T$.
3. Vzdolž te stranice potegni črto do $p$.
4. Dolžina te črte je razdalja točke $T$ od premice $p$: $3\,\text{cm}$.

## Drugače: Bolj natančno

**Osnovni pojmi.** Točke, premice in ravnine v matematiki ne definiramo s pomočjo drugih pojmov, ampak jih sprejmemo kot osnovne in določimo, kako se obnašajo. Taka pravila, na primer »skozi dve različni točki gre natanko ena premica«, imenujemo **aksiomi**. Vse druge trditve nato izpeljemo iz njih.

**Daljica in poltrak kot množici točk.** Daljica $AB$ vsebuje krajišči $A$ in $B$ ter vse točke premice med njima. Poltrak $AB$ vsebuje daljico $AB$ in vse točke premice za $B$. V nekaterih učbenikih zapišejo daljico kot $[AB]$, poltrak kot $[AB$, premico kot $AB$, dolžino pa kot $|AB|$ ali $d(A, B)$.

**Neskončno točk, a končna dolžina.** Daljica ima končno dolžino, pa vendar neskončno mnogo točk: med vsakima dvema točkama je še razpolovišče, torej še ena točka, in tako naprej. Dolžina zato ni »število točk«, ampak mera, ki jo izmerimo z ravnilom.

**Aksiom o vzporednicah.** Trditev, da gre skozi točko zunaj premice natanko ena vzporednica, je v ravninski geometriji aksiom, ki ga je prvi zapisal Evklid. Iz nje sledi, da sta dve premici, pravokotni na tretjo, med seboj vzporedni.

**Zakaj pravokotna razdalja?** Razdaljo točke od premice merimo po pravokotni daljici, ker je ta najkrajša od vseh daljic od točke do premice. Zakaj je tako, boš dokazal v 8. razredu s Pitagorovim izrekom.

## Preveri se

? Koliko premic gre skozi dve različni točki $A$ in $B$?
- nobena
+ natanko ena
- natanko dve
- neskončno mnogo
> Skozi dve različni točki gre natanko ena premica, premica $AB$. Neskončno mnogo premic gre skozi eno samo točko.

? Kje ima začetek poltrak $AB$?
+ v točki $A$
- v točki $B$
- v razpolovišču daljice $AB$
- poltrak nima začetka
> Poltrak $AB$ se začne v prvi navedeni točki $A$ in poteka skozi $B$ naprej. Poltrak $BA$ bi imel začetek v $B$.

? Daljica $AB$ je dolga $9\,\text{cm}$, $M$ je njeno razpolovišče. Koliko je $|AM|$?
- $3\,\text{cm}$
+ $4{,}5\,\text{cm}$
- $9\,\text{cm}$
- $18\,\text{cm}$
> Razpolovišče deli daljico na dve enaki polovici: $|AM| = 9\,\text{cm} : 2 = 4{,}5\,\text{cm}$. Odgovor $18\,\text{cm}$ dobiš, če dolžino podvojiš namesto razpoloviš.

? V ravnini je $a \perp b$ in $b \parallel c$ (premici $b$ in $c$ sta različni). Kaj velja za premici $a$ in $c$?
+ $a \perp c$
- $a \parallel c$
- $a$ in $c$ sovpadata
- Tega ne moremo ugotoviti.
> Premica, ki je pravokotna na eno izmed dveh vzporednic, je pravokotna tudi na drugo. Zato je $a \perp c$.
