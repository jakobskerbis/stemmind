---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Ulomke že znaš krajšati in razširjati ter z njimi reševati besedilne naloge, v katerih iščeš del celote ali celoto iz dela. Zdaj spoznaš še en način, kako primerjamo dve količini: **razmerje**.

Razmerja srečaš povsod. Na steklenici sirupa piše »$1$ del sirupa in $5$ delov vode«. V receptu za palačinke je moke in mleka v določenem razmerju. Pri igri si zmagovalci delijo nagrado glede na to, koliko je kdo prispeval. Če razmerje upoštevaš, je sok vedno enako sladek, ne glede na to, ali pripravljaš kozarec ali cel vrč.

V tej lekciji se naučiš razmerje zapisati, ga **okrajšati** na najpreprostejšo obliko in neko količino **razdeliti v danem razmerju**.

## Razlaga

**1. Kaj je razmerje.** Razmerje dveh količin $a$ in $b$ zapišemo $a : b$ in beremo »$a$ proti $b$«. Števili $a$ in $b$ sta **člena razmerja**: $a$ je prvi člen, $b$ drugi člen. Razmerje pove, kolikokrat je ena količina večja ali manjša od druge.

Primer: v razredu je $12$ deklic in $18$ dečkov. Razmerje števila deklic proti številu dečkov je $12 : 18$.

**2. Vrstni red je pomemben.** Razmerje deklic proti dečkom je $12 : 18$, razmerje dečkov proti deklicam pa $18 : 12$. To nista enaki razmerji, zato vedno pazi, katera količina je prva.

**3. Vrednost razmerja.** Če prvi člen delimo z drugim, dobimo **vrednost razmerja** (količnik): vrednost razmerja $a : b$ je $\dfrac{a}{b}$. Vrednost razmerja $3 : 4$ je $\dfrac{3}{4} = 0{,}75$. Razmerje lahko torej zapišemo tudi kot ulomek.

**4. Razširjanje in krajšanje.** Oba člena smemo pomnožiti ali deliti z **istim** številom, različnim od $0$. Vrednost razmerja se pri tem ne spremeni, tako kot se ne spremeni vrednost ulomka:

$$a : b = (a \cdot k) : (b \cdot k) \qquad a : b = (a : k) : (b : k), \quad k \neq 0$$

**5. Okrajšano razmerje.** Razmerje je **okrajšano**, ko sta člena naravni števili brez skupnega delitelja, večjega od $1$ (sta tuji števili). Razmerje okrajšamo do konca tako, da oba člena delimo z njunim **največjim skupnim deliteljem**:

$$12 : 18 = (12 : 6) : (18 : 6) = 2 : 3, \quad \text{ker je } D(12, 18) = 6.$$

**6. Razmerje količin z enotami.** Primerjamo lahko le istovrstne količine (dolžino z dolžino, maso z maso), zapisane v **isti enoti**. Enota se v razmerju pokrajša, zato je razmerje samo število:

$$50\,\text{cm} : 2\,\text{m} = 50\,\text{cm} : 200\,\text{cm} = 50 : 200 = 1 : 4$$

**7. Razmerje z ulomki ali decimalnimi števili.** Člena najprej razširimo, da postaneta naravni števili, nato razmerje okrajšamo:

- decimalni števili razširimo z $10$, $100$ …: $0{,}6 : 1{,}5 = 6 : 15 = 2 : 5$,
- ulomke razširimo z najmanjšim skupnim večkratnikom imenovalcev: $\dfrac{2}{3} : \dfrac{5}{6} = 4 : 5$ (razširili smo s $6$).

**8. Deljenje v danem razmerju.** Količino $c$ razdelimo v razmerju $a : b$ takole:

| Korak | Kaj narediš |
|---|---|
| 1. | Seštej člena: vseh delov je $a + b$. |
| 2. | En del: $c : (a + b)$. |
| 3. | Prvi del dobi $a$ delov, drugi $b$ delov. |
| 4. | Preveri, ali je vsota delov enaka $c$. |

Enako deliš v razmerju s tremi členi, na primer $a : b : d$, le delov je $a + b + d$. Pri razmerju $a : b$ prvi del znaša $\dfrac{a}{a + b}$ celote, drugi pa $\dfrac{b}{a + b}$ celote.

V simulaciji spodaj (»Razmerje pri mešanju soka«) mešaš sok in vodo v različnih razmerjih in opazuješ, kdaj ima mešanica enako barvo in okus.

## Rešeni primeri

### Primer 1 (lažji)

V razredu je $12$ deklic in $18$ dečkov. Zapiši razmerje števila deklic proti številu dečkov in ga okrajšaj do konca.

**Podatki:** število deklic: $12$; število dečkov: $18$
**Iščemo:** okrajšano razmerje deklic proti dečkom

:::formula
Okrajšanje: oba člena delimo z največjim skupnim deliteljem: $a : b = \big(a : D(a,b)\big) : \big(b : D(a,b)\big)$
:::

**Rešitev:**

1. Razmerje deklic proti dečkom: $12 : 18$.
2. Delitelji števila $12$: $1, 2, 3, 4, 6, 12$. Delitelji števila $18$: $1, 2, 3, 6, 9, 18$. Največji skupni delitelj je $D(12, 18) = 6$.
3. Oba člena delimo s $6$: $12 : 18 = (12 : 6) : (18 : 6) = 2 : 3$.
4. Števili $2$ in $3$ sta tuji, zato je razmerje okrajšano do konca.
5. Odgovor: razmerje deklic proti dečkom je $2 : 3$; na vsaki $2$ deklici prideta $3$ dečki.

### Primer 2 (srednji)

Za malinovec zmešamo sirup in vodo v razmerju $1 : 5$. Koliko sirupa in koliko vode potrebujemo za $1{,}5\,\text{l}$ pijače?

**Podatki:** razmerje sirup : voda $= 1 : 5$; količina pijače $1{,}5\,\text{l}$
**Iščemo:** prostornino sirupa in prostornino vode

:::formula
Deljenje v razmerju $a : b$: en del $= c : (a + b)$; prvi del $= a \cdot$ en del, drugi del $= b \cdot$ en del
:::

**Rešitev:**

1. Pretvorimo v mililitre, da računamo z naravnimi števili: $1{,}5\,\text{l} = 1500\,\text{ml}$.
2. Vseh delov je $1 + 5 = 6$.
3. En del: $1500\,\text{ml} : 6 = 250\,\text{ml}$.
4. Sirup: $1 \cdot 250\,\text{ml} = 250\,\text{ml}$. Voda: $5 \cdot 250\,\text{ml} = 1250\,\text{ml}$.
5. Preverimo: $250\,\text{ml} + 1250\,\text{ml} = 1500\,\text{ml}$ in $250 : 1250 = 1 : 5$.
6. Odgovor: potrebujemo $250\,\text{ml}$ sirupa in $1250\,\text{ml}$ ($1{,}25\,\text{l}$) vode.

### Primer 3 (težji)

Tri sestre si razdelijo $650$ € v razmerju $\dfrac{1}{2} : \dfrac{1}{3} : \dfrac{1}{4}$. Koliko evrov dobi vsaka?

**Podatki:** vsota $650$ €; razmerje $\dfrac{1}{2} : \dfrac{1}{3} : \dfrac{1}{4}$
**Iščemo:** znesek prve, druge in tretje sestre

:::formula
Razmerje z ulomki razširimo z najmanjšim skupnim večkratnikom imenovalcev. Nato: en del $=$ vsota $: (a + b + c)$.
:::

**Rešitev:**

1. Imenovalci so $2$, $3$ in $4$. Njihov najmanjši skupni večkratnik je $v(2, 3, 4) = 12$.
2. Vse člene pomnožimo z $12$: $\dfrac{1}{2} \cdot 12 = 6$, $\dfrac{1}{3} \cdot 12 = 4$, $\dfrac{1}{4} \cdot 12 = 3$. Razmerje je $6 : 4 : 3$.
3. Vseh delov je $6 + 4 + 3 = 13$.
4. En del: $650 : 13 = 50$, torej $50$ €.
5. Prva sestra: $6 \cdot 50 = 300$ €, druga: $4 \cdot 50 = 200$ €, tretja: $3 \cdot 50 = 150$ €.
6. Preverimo: $300 + 200 + 150 = 650$.
7. Odgovor: prva sestra dobi $300$ €, druga $200$ € in tretja $150$ €.

## Pogoste napake

- **Različne enote.** Razmerje $50\,\text{cm} : 2\,\text{m}$ ni $50 : 2 = 25 : 1$. Količini morata biti v isti enoti, zato najprej pretvori: $50\,\text{cm} : 200\,\text{cm} = 1 : 4$.
- **Zamenjan vrstni red.** Če naloga sprašuje razmerje dečkov proti deklicam, odgovor $2 : 3$ ni pravilen, pravilno je $3 : 2$. Člene vedno zapiši v vrstnem redu, kot ga navaja besedilo.
- **Pri deljenju deliš s prvim členom.** Pri deljenju $35$ bonbonov v razmerju $3 : 4$ ne računaš $35 : 3$. Vsota zajema vse dele, zato deliš z $3 + 4 = 7$: en del je $5$, prvi dobi $15$, drugi $20$ bonbonov.
- **Razmerje zamenjaš z ulomkom celote.** V razmerju $2 : 3$ prvi del ni $\dfrac{2}{3}$ celote, ampak $\dfrac{2}{2 + 3} = \dfrac{2}{5}$ celote. Ulomek $\dfrac{2}{3}$ pove le, kolikšen je prvi del v primerjavi z drugim.
- **Člene odštevaš ali ne okrajšaš do konca.** Razmerje $12 : 18$ ni enako $6 : 12$ (od obeh členov smo odšteli $6$). Člena smeš le **deliti** ali **množiti** z istim številom. Razmerje $4 : 6$ je pravilno, a ni okrajšano do konca, ker imata $4$ in $6$ še skupni delitelj $2$.

## Povzetek

- Razmerje $a : b$ beremo »$a$ proti $b$«; $a$ in $b$ sta člena razmerja, vrstni red je pomemben.
- Vrednost razmerja $a : b$ je $\dfrac{a}{b}$.
- Razširjanje in krajšanje: $a : b = (a \cdot k) : (b \cdot k) = (a : k) : (b : k)$, $k \neq 0$.
- Okrajšano razmerje: oba člena delimo z $D(a, b)$; člena sta nato tuji naravni števili.
- Količine primerjamo v isti enoti; decimalna števila in ulomke najprej spremenimo v naravna števila.
- Deljenje $c$ v razmerju $a : b$: en del je $c : (a + b)$, dela sta $a$ in $b$ delov.

## Drugače: Na sliki

Predstavljaj si vrsto kozarcev enake velikosti. Pri malinovcu v razmerju $1 : 5$ postaviš en kozarec sirupa (temno rdeč) in pet kozarcev vode (prozornih). Vseh kozarcev je šest. Ko vse zliješ v vrč, je v vrču šest enakih delov in en del od šestih je sirup.

Če želiš več pijače, k vsakemu kozarcu sirupa dodaš novih pet kozarcev vode: dva rdeča in deset prozornih, tri rdeči in petnajst prozornih. Vrsta kozarcev se podaljša, vzorec pa ostane enak: en rdeč na pet prozornih. Zato je sok enako sladek. To je razširjanje razmerja: $1 : 5 = 2 : 10 = 3 : 15$.

Pri deljenju v razmerju naredi obratno: celotno količino razdeli na toliko enakih kozarcev, kolikor je vseh delov, nato jih preštej za vsako sestavino.

## Drugače: Iz vsakdanjega življenja

Razmerja uporabljaš pogosteje, kot misliš:

- **Kuhanje.** Za riž vzameš riž in vodo v razmerju približno $1 : 2$. Za eno skodelico riža dve skodelici vode, za tri skodelice riža šest skodelic vode.
- **Gradnja.** Zidar meša cement in pesek na primer v razmerju $1 : 3$. Če ima $20$ lopat mešanice, je vseh delov $1 + 3 = 4$, en del je $5$ lopat: $5$ lopat cementa in $15$ lopat peska.
- **Delitev denarja.** Če Jure za skupno darilo prispeva $10$ €, Tina pa $15$ €, je razmerje prispevkov $10 : 15 = 2 : 3$. Če darilo prodata naprej za $30$ €, je pošteno, da si denar razdelita v istem razmerju: Jure $12$ €, Tina $18$ €.

V vseh primerih razmerje pove, kako so deli med seboj povezani, ne glede na to, koliko je celota.

## Drugače: Korak za korakom s številkami

Okrajšaj razmerje $0{,}48\,\text{kg} : 600\,\text{g}$.

1. Količini pretvori v isto enoto: $0{,}48\,\text{kg} = 480\,\text{g}$. Razmerje je $480 : 600$.
2. Če je potrebno, odpravi decimalna mesta (tu jih ni več).
3. Poišči največji skupni delitelj: $480 = 2^5 \cdot 3 \cdot 5$, $600 = 2^3 \cdot 3 \cdot 5^2$, zato je $D(480, 600) = 2^3 \cdot 3 \cdot 5 = 120$.
4. Deli oba člena s $120$: $480 : 120 = 4$, $600 : 120 = 5$.
5. Okrajšano razmerje je $4 : 5$.
6. Preveri: vrednost $\dfrac{480}{600} = 0{,}8$ in $\dfrac{4}{5} = 0{,}8$ sta enaki.

Če ne najdeš takoj največjega skupnega delitelja, lahko krajšaš postopoma: $480 : 600 = 48 : 60 = 4 : 5$ (najprej z $10$, nato z $12$).

## Drugače: Bolj natančno

Razmerje $a : b$ dveh pozitivnih števil ima vrednost $\dfrac{a}{b}$. Dve razmerji sta enaki natanko tedaj, ko imata enako vrednost. Zato razširjanje in krajšanje razmerja delujeta enako kot pri ulomkih: $\dfrac{a \cdot k}{b \cdot k} = \dfrac{a}{b}$ za vsak $k \neq 0$.

Drugi člen ne sme biti $0$, ker z nič ne moremo deliti. Okrajšana oblika je enolična: če sta člena tuji naravni števili, je razmerje že v najpreprostejši obliki in druge take oblike ni.

Pri razmerju treh količin $a : b : c$ ena sama vrednost ne zadošča, ker hkrati primerjamo tri pare. Vse člene zato vedno množimo ali delimo z **istim** številom. Krajšamo jih z največjim skupnim deliteljem vseh treh: $8 : 12 : 20 = 2 : 3 : 5$, ker je $D(8, 12, 20) = 4$.

Pri deljenju količine $c$ v razmerju $a : b$ dobi prvi del $\dfrac{a}{a + b} \cdot c$, drugi pa $\dfrac{b}{a + b} \cdot c$. Ulomka se seštejeta v $1$, zato vsota obeh delov res znaša $c$.

## Preveri se

? Okrajšaj razmerje $24 : 36$ do konca.
- $4 : 6$
- $3 : 2$
+ $2 : 3$
- $12 : 18$
> $D(24, 36) = 12$, zato je $24 : 36 = 2 : 3$. Razmerji $4 : 6$ in $12 : 18$ sta enaki, a nista okrajšani do konca.

? $35$ bonbonov razdelimo v razmerju $3 : 4$. Koliko bonbonov dobi prvi?
- $5$
+ $15$
- $20$
- $12$
> Vseh delov je $3 + 4 = 7$, en del je $35 : 7 = 5$, prvi dobi $3 \cdot 5 = 15$ bonbonov.

? Kolikšno je okrajšano razmerje $40\,\text{cm} : 2\,\text{m}$?
- $20 : 1$
+ $1 : 5$
- $2 : 1$
- $1 : 50$
> $2\,\text{m} = 200\,\text{cm}$, $40 : 200 = 1 : 5$. Odgovor $20 : 1$ dobiš, če pozabiš pretvoriti enote.

? Kolikšno je okrajšano razmerje $0{,}4 : 1{,}2$?
- $1 : 2$
- $3 : 1$
+ $1 : 3$
- $4 : 1$
> Razširimo z $10$: $4 : 12$, nato krajšamo s $4$: $1 : 3$.
