---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Trikotnike že dobro poznaš: razvrstiš jih glede na stranice in kote, veš, da je vsota njihovih notranjih kotov $180^\circ$, in znaš uporabiti pare kotov, na primer sokota ($\alpha + \beta = 180^\circ$) ter kota z vzporednimi kraki. Pravokotnik in kvadrat poznaš že od prej.

Zdaj gremo k likom s štirimi oglišči. Štirikotnikov je veliko vrst in vsaka ima svoje ime in svoje lastnosti: **paralelogram**, **pravokotnik**, **romb**, **kvadrat**, **trapez** in **deltoid**. Srečaš jih povsod: zaslon in vrata sta pravokotnika, karo na igralnih kartah je romb, papirnati zmaj je deltoid, prerez nasipa ali strehe pa je pogosto trapez. Ko poznaš lastnosti teh likov, lahko izračunaš manjkajoče kote, prepoznaš lik iz opisa in pozneje pravilno izbereš formulo za obseg in ploščino.

## Razlaga

**1. Oznake.** Štirikotnik $ABCD$ ima oglišča $A$, $B$, $C$, $D$, označena v nasprotni smeri urnega kazalca. Stranice so $a = |AB|$, $b = |BC|$, $c = |CD|$ in $d = |DA|$, notranji koti pa $\alpha$ (pri $A$), $\beta$ (pri $B$), $\gamma$ (pri $C$) in $\delta$ (pri $D$). Daljici, ki povezujeta nasprotni oglišči, sta **diagonali**: $e = |AC|$ in $f = |BD|$.

**2. Vsota notranjih kotov.** Diagonala $e$ razdeli štirikotnik na dva trikotnika. Vsota kotov vsakega je $180^\circ$, zato je vsota notranjih kotov štirikotnika

$$\alpha + \beta + \gamma + \delta = 360^\circ$$

**3. Paralelogram.** Paralelogram je štirikotnik, ki ima **dva para vzporednih stranic**: $a \parallel c$ in $b \parallel d$. Lastnosti:

- nasprotni stranici sta enako dolgi: $a = c$, $b = d$,
- nasprotna kota sta enaka: $\alpha = \gamma$, $\beta = \delta$,
- sosednja kota skupaj merita $180^\circ$: $\alpha + \beta = 180^\circ$,
- diagonali se **razpolavljata** (sekata se v točki, ki je sredina obeh diagonal).

**4. Posebni paralelogrami.**

- **Pravokotnik** je paralelogram s štirimi pravimi koti. Njegovi diagonali sta enako dolgi: $e = f$.
- **Romb** je paralelogram s štirimi enako dolgimi stranicami. Njegovi diagonali sta pravokotni in razpolavljata notranje kote.
- **Kvadrat** je hkrati pravokotnik in romb: ima enake stranice, prave kote, enako dolgi in pravokotni diagonali.

**5. Trapez.** Trapez je štirikotnik, ki ima vsaj en par vzporednih stranic. Vzporedni stranici sta **osnovnici** ($a \parallel c$), drugi dve stranici sta **kraka** ($b$ in $d$). Kota ob istem kraku skupaj merita $180^\circ$:

$$\alpha + \delta = 180^\circ, \qquad \beta + \gamma = 180^\circ$$

- **Enakokraki trapez** ima enako dolga kraka ($b = d$). Kota ob isti osnovnici sta enaka ($\alpha = \beta$, $\gamma = \delta$), diagonali sta enako dolgi.
- **Pravokotni trapez** ima en krak pravokoten na osnovnici, zato ima dva prava kota.

**6. Deltoid.** Deltoid je štirikotnik, ki ima **dva para enako dolgih sosednjih stranic**: $|AB| = |AD| = a$ in $|CB| = |CD| = b$. Lastnosti:

- diagonala $e = AC$ je **os simetrije** deltoida,
- diagonali sta pravokotni, diagonala $e$ razpolavlja diagonalo $f$,
- kota ob ogliščih $B$ in $D$ sta enaka: $\beta = \delta$,
- diagonala $e$ razpolavlja kota $\alpha$ in $\gamma$.

**7. Pregled lastnosti.**

| Lik | Vzporedne stranice | Stranice | Koti | Diagonali |
|---|---|---|---|---|
| paralelogram | dva para | nasprotni enaki | nasprotna enaka | se razpolavljata |
| pravokotnik | dva para | nasprotni enaki | vsi $90^\circ$ | se razpolavljata, enako dolgi |
| romb | dva para | vse enake | nasprotna enaka | se razpolavljata, pravokotni |
| kvadrat | dva para | vse enake | vsi $90^\circ$ | se razpolavljata, pravokotni, enako dolgi |
| trapez | vsaj en par | poljubne | ob kraku skupaj $180^\circ$ | v splošnem nič posebnega |
| deltoid | v splošnem nobenega | dva para enakih sosednjih | $\beta = \delta$ | pravokotni, $e$ razpolavlja $f$ |

**8. Družina štirikotnikov.** Lastnosti se dedujejo: kvadrat ima vse lastnosti pravokotnika in romba, romb vse lastnosti paralelograma in deltoida, paralelogram pa je poseben trapez (ima celo dva para vzporednih stranic). Zato je pravilno reči »vsak kvadrat je romb«, ne pa »vsak romb je kvadrat«.

V interaktivni simulaciji spodaj (**Vrste štirikotnikov**) spreminjaj oglišča in opazuj, kdaj se lik spremeni iz ene vrste v drugo.

## Rešeni primeri

### Primer 1 (lažji)

V paralelogramu $ABCD$ meri kot $\alpha = 65^\circ$. Izračunaj kote $\beta$, $\gamma$ in $\delta$.

**Podatki:** paralelogram $ABCD$, $\alpha = 65^\circ$
**Iščemo:** kote $\beta$, $\gamma$, $\delta$

:::formula
V paralelogramu: $\alpha + \beta = 180^\circ$, $\gamma = \alpha$, $\delta = \beta$
:::

**Rešitev:**

1. Sosednja kota skupaj merita $180^\circ$: $\beta = 180^\circ - 65^\circ = 115^\circ$.
2. Nasprotna kota sta enaka: $\gamma = \alpha = 65^\circ$ in $\delta = \beta = 115^\circ$.
3. Preverimo vsoto: $65^\circ + 115^\circ + 65^\circ + 115^\circ = 360^\circ$. ✓
4. Odgovor: $\beta = 115^\circ$, $\gamma = 65^\circ$ in $\delta = 115^\circ$.

### Primer 2 (srednji)

Deltoid $ABCD$ ima $|AB| = |AD|$ in $|CB| = |CD|$. Kot pri oglišču $A$ meri $\alpha = 80^\circ$, kot pri oglišču $C$ pa $\gamma = 40^\circ$. Izračunaj kota $\beta$ in $\delta$. Katera diagonala je os simetrije?

**Podatki:** deltoid $ABCD$, $|AB| = |AD|$, $|CB| = |CD|$, $\alpha = 80^\circ$, $\gamma = 40^\circ$
**Iščemo:** kota $\beta$ in $\delta$ ter os simetrije

:::formula
$\alpha + \beta + \gamma + \delta = 360^\circ$; v deltoidu je $\beta = \delta$
:::

**Rešitev:**

1. Enaki sosednji stranici se stikata v ogliščih $A$ in $C$, zato je os simetrije diagonala $e = AC$. Ta prezrcali $B$ v $D$, zato je $\beta = \delta$.
2. Za kota $\beta$ in $\delta$ ostane: $360^\circ - 80^\circ - 40^\circ = 240^\circ$.
3. Kota sta enaka, zato vsak meri $240^\circ : 2 = 120^\circ$.
4. Preverimo: $80^\circ + 120^\circ + 40^\circ + 120^\circ = 360^\circ$. ✓
5. Odgovor: $\beta = \delta = 120^\circ$, os simetrije je diagonala $e = AC$.

### Primer 3 (težji)

V enakokrakem trapezu $ABCD$ sta osnovnici $AB$ in $CD$, kraka pa sta enako dolga: $|AD| = |BC|$. Kot $\delta$ je trikrat tolikšen kot kot $\alpha$. Izračunaj vse notranje kote trapeza.

**Podatki:** enakokraki trapez, $AB \parallel CD$, $|AD| = |BC|$, $\delta = 3 \cdot \alpha$
**Iščemo:** kote $\alpha$, $\beta$, $\gamma$, $\delta$

:::formula
V trapezu: $\alpha + \delta = 180^\circ$; v enakokrakem trapezu: $\beta = \alpha$, $\gamma = \delta$
:::

**Rešitev:**

1. Kota $\alpha$ in $\delta$ ležita ob istem kraku $AD$, zato je $\alpha + \delta = 180^\circ$.
2. Vstavimo $\delta = 3\alpha$: $\alpha + 3\alpha = 180^\circ$, torej $4\alpha = 180^\circ$.
3. Delimo s $4$: $\alpha = 45^\circ$.
4. Potem je $\delta = 3 \cdot 45^\circ = 135^\circ$.
5. Trapez je enakokraki, zato je $\beta = \alpha = 45^\circ$ in $\gamma = \delta = 135^\circ$.
6. Preverimo: $45^\circ + 45^\circ + 135^\circ + 135^\circ = 360^\circ$ in $135^\circ = 3 \cdot 45^\circ$. ✓
7. Odgovor: $\alpha = \beta = 45^\circ$, $\gamma = \delta = 135^\circ$.

## Pogoste napake

- **Vsota kotov $180^\circ$ namesto $360^\circ$.** Navada iz trikotnika je močna. Pravilno: štirikotnik razpade na dva trikotnika, zato je vsota $2 \cdot 180^\circ = 360^\circ$.
- **»Romb ni paralelogram, ker je drugačne oblike.«** Učenci si zapomnijo tipično sliko lika, ne definicije. Pravilno: preveri definicijo. Romb ima dva para vzporednih stranic, zato je paralelogram. Prav tako je kvadrat romb in pravokotnik.
- **Pri trapezu sešteješ napačna kota.** Učenci včasih zapišejo $\alpha + \beta = 180^\circ$, kot pri paralelogramu. Pravilno: do $180^\circ$ se dopolnjujeta kota ob istem **kraku** ($\alpha + \delta$ in $\beta + \gamma$), ker sta osnovnici vzporedni. Kota ob isti osnovnici sta enaka le v enakokrakem trapezu.
- **Pri deltoidu izenačiš napačna kota.** Ker so koti »nasprotni« kot pri paralelogramu, se zdi, da je tudi $\alpha = \gamma$. Pravilno: enaka sta le kota ob ogliščih, ki ju os simetrije prezrcali enega v drugega, torej kota med različno dolgima stranicama ($\beta = \delta$).
- **Diagonali vedno pravokotni ali vedno enaki.** Lastnosti enega lika prenesemo na drugega. Pravilno: pravokotni sta diagonali romba, kvadrata in deltoida; enako dolgi sta diagonali pravokotnika, kvadrata in enakokrakega trapeza. Pri splošnem paralelogramu nista ne eno ne drugo.

## Povzetek

- Vsota notranjih kotov štirikotnika: $\alpha + \beta + \gamma + \delta = 360^\circ$.
- Paralelogram: dva para vzporednih stranic; $\alpha = \gamma$, $\beta = \delta$, $\alpha + \beta = 180^\circ$; diagonali se razpolavljata.
- Pravokotnik: vsi koti $90^\circ$, $e = f$. Romb: vse stranice enake, diagonali pravokotni. Kvadrat: oboje.
- Trapez: vsaj en par vzporednih stranic (osnovnici); $\alpha + \delta = 180^\circ$, $\beta + \gamma = 180^\circ$.
- Enakokraki trapez: $b = d$, $\alpha = \beta$, $\gamma = \delta$, $e = f$.
- Deltoid: dva para enakih sosednjih stranic; os simetrije je diagonala $e$; diagonali pravokotni; $\beta = \delta$.
- Kvadrat je romb in pravokotnik; romb je paralelogram in deltoid.

## Drugače: Na sliki

Družino štirikotnikov si predstavljaj kot drevo, v katerem vsak nižji lik podeduje lastnosti višjega:

| Raven | Lik | Kaj doda k liku nad sabo |
|---|---|---|
| 1 | štirikotnik | štiri oglišča, vsota kotov $360^\circ$ |
| 2 | trapez | en par vzporednih stranic |
| 2 | deltoid | dva para enakih sosednjih stranic |
| 3 | paralelogram (pod trapezom) | še drugi par vzporednih stranic |
| 4 | pravokotnik (pod paralelogramom) | pravi koti |
| 4 | romb (pod paralelogramom in deltoidom) | vse stranice enake |
| 5 | kvadrat (pod pravokotnikom in rombom) | pravi koti in enake stranice |

Romb ima dva »starša«: je paralelogram in je deltoid. Kvadrat ima prav tako dva: pravokotnik in romb. Ko v interaktivni simulaciji spodaj potegneš oglišče paralelograma, tako da postanejo vse stranice enake, se lik »preseli« eno raven niže, v romb.

## Drugače: Iz vsakdanjega življenja

Poglej okoli sebe in poskusi prepoznati štirikotnike:

- **List papirja, vrata, zaslon** so pravokotniki. Mizar preveri, ali je okvir res pravokoten, tako da izmeri obe diagonali: če sta enako dolgi, so koti pravi.
- **Škarjasta dvigala in raztegljiva vrata** imajo palice, ki tvorijo rombe. Ko se mehanizem razteza, se koti spreminjajo, stranice pa ostajajo enake, zato lik ves čas ostane romb.
- **Papirnati zmaj** je deltoid. Dve palici sta njegovi diagonali in sta pravokotni; daljša palica je os simetrije, zato zmaj leti uravnoteženo.
- **Prerez nasipa, korita ali strehe** je pogosto enakokraki trapez: dno in vrh sta vzporedna, poševni stranici pa enako nagnjeni.
- **Parkirna mesta pod poševnim kotom** so označena kot paralelogrami, da lahko avtomobil zapelje v prostor brez ostrega zavoja.

## Drugače: Korak za korakom s številkami

Recept za prepoznavanje štirikotnika iz podatkov. Vzemimo štirikotnik, ki ima stranice $5\,\text{cm}$, $5\,\text{cm}$, $5\,\text{cm}$, $5\,\text{cm}$ in kot $\alpha = 70^\circ$.

1. **Vzporedne stranice?** Vse stranice so enake, zato so nasprotne stranice enake in lik je paralelogram (dva para vzporednih stranic).
2. **Enake stranice?** Vse štiri merijo $5\,\text{cm}$, zato je lik romb.
3. **Pravi koti?** $\alpha = 70^\circ$, torej ni pravokotnik in ne kvadrat.
4. **Izračunaj kote.** $\beta = 180^\circ - 70^\circ = 110^\circ$, $\gamma = 70^\circ$, $\delta = 110^\circ$.
5. **Preveri vsoto.** $70^\circ + 110^\circ + 70^\circ + 110^\circ = 360^\circ$. ✓
6. **Odgovor.** Lik je romb (torej tudi paralelogram in deltoid), ni pa kvadrat.

Če bi bil $\alpha = 90^\circ$, bi v 3. koraku ugotovili, da je lik kvadrat.

## Drugače: Bolj natančno

**Zakaj sta nasprotna kota paralelograma enaka?** Kota $\alpha$ in $\beta$ imata vzporedne krake: krak $AB$ in krak $BA$ ležita na isti premici, kraka $AD$ in $BC$ pa sta vzporedna. En kot je ostri, drugi topi (ali sta oba prava), zato je $\alpha + \beta = 180^\circ$. Enako velja za $\beta + \gamma = 180^\circ$. Če obe enakosti primerjamo, dobimo $\alpha = 180^\circ - \beta = \gamma$.

**Zakaj se v trapezu dopolnjujeta kota ob kraku?** Kota $\alpha$ in $\delta$ imata skupni krak $AD$, druga kraka $AB$ in $DC$ pa sta vzporedna in usmerjena v isto stran. Po pravilu za kote z vzporednimi kraki je $\alpha + \delta = 180^\circ$. Kota ob drugem kraku nista povezana s kotoma ob prvem, zato je trapez lahko zelo nesimetričen.

**Zakaj je v deltoidu $\beta = \delta$?** Ker je $|AB| = |AD|$ in $|CB| = |CD|$, sta trikotnika $ABC$ in $ADC$ skladna po izreku sss (stranica $AC$ je skupna). Skladna trikotnika imata enake istoležne kote, zato je kot pri $B$ enak kotu pri $D$.

## Preveri se

? Štirikotnik ima kote $\alpha = 90^\circ$, $\beta = 85^\circ$ in $\gamma = 100^\circ$. Koliko meri kot $\delta$?
- $95^\circ$
+ $85^\circ$
- $275^\circ$
- $5^\circ$
> $\delta = 360^\circ - 90^\circ - 85^\circ - 100^\circ = 85^\circ$. Odgovor $5^\circ$ dobiš, če vzameš vsoto kotov $180^\circ$ namesto $360^\circ$.

? Katera trditev je pravilna?
- Vsak romb je kvadrat.
- Vsak paralelogram je pravokotnik.
+ Vsak kvadrat je romb.
- Vsak deltoid je romb.
> Kvadrat ima štiri enake stranice in dva para vzporednih stranic, zato izpolnjuje definicijo romba. Obratno ne velja: romb nima nujno pravih kotov.

? Diagonali štirikotnika sta enako dolgi in se razpolavljata, nista pa pravokotni. Kateri lik je to?
- romb
+ pravokotnik
- deltoid
- kvadrat
> Diagonali, ki se razpolavljata, pomenita paralelogram; enako dolgi diagonali pomenita pravokotnik. Ker nista pravokotni, lik ni kvadrat.

? V trapezu $ABCD$ z osnovnicama $AB$ in $CD$ meri kot $\alpha = 70^\circ$. Koliko meri kot $\delta$?
- $70^\circ$
- $20^\circ$
+ $110^\circ$
> Kota ob istem kraku $AD$ skupaj merita $180^\circ$: $\delta = 180^\circ - 70^\circ = 110^\circ$.
