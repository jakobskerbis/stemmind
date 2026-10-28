---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz 7. razreda že znaš reševati preproste enačbe, na primer $x + 5 = 12$, in veš, da je rešitev število, ki ga vstaviš namesto $x$, da enakost drži. Znaš tudi računati z negativnimi števili in z racionalnimi števili (ulomki, decimalna števila).

Zdaj se bomo naučili **formalno** reševati zahtevnejše linearne enačbe, kot sta $3x - 7 = 2x + 5$ ali $2(x + 4) = 18$. Pri takih enačbah ugibanje ne deluje več, zato potrebujemo zanesljiv postopek. Enačbe uporabljamo vsak dan: pri izračunu cene (koliko izdelkov lahko kupim z danim denarjem), pri potovanjih (kdaj se dve vozili srečata), pri receptih in v fiziki. Vsako besedilno nalogo, kjer je neznana vrednost, lahko zapišemo kot enačbo in jo rešimo.

Ob koncu lekcije boš znal rešiti linearno enačbo po korakih in z **preizkusom** preveriti, ali je rešitev pravilna.

## Razlaga

**1. Kaj je linearna enačba.** Enačba z eno neznanko $x$, kjer se $x$ pojavlja samo v prvi potenci (ne $x^2$, ne $\frac{1}{x}$). Splošna oblika je $ax + b = c$.

**2. Rešitev enačbe** je število, ki ga vstavimo namesto $x$, da sta obe strani enaki.

**3. Tehtnica.** Enačba je kot tehtnica v ravnovesju. Leva in desna stran imata enako »težo«. Ravnovesje ostane, če na obeh straneh naredimo **isto**:

- na obeh straneh prištejemo isto število,
- na obeh straneh odštejemo isto število,
- obe strani pomnožimo z istim številom, ki ni $0$,
- obe strani delimo z istim številom, ki ni $0$.

Tem korakom pravimo **ekvivalentne preoblikovanja**: enačba se spremeni, rešitev pa ostane ista.

**4. Postopek reševanja po korakih.**

1. Odpravi oklepaje (množenje z razčlenitvijo) in ulomke (množenje z skupnim imenovalcem).
2. Na vsaki strani zdruzi podobne člene (člene z $x$ med seboj, števila med seboj).
3. Člene z $x$ spravi na eno stran, števila na drugo (z dodajanjem ali odštevanjem na obeh straneh).
4. Obe strani deli s koeficientom pri $x$.
5. Naredi **preizkus**: rešitev vstavi v prvotno enačbo in izračunaj posebej levo in posebej desno stran.

**5. Posebna primera.**

- Če se $x$ pri preoblikovanju odpravi in dobiš resnično enakost (npr. $5 = 5$), ima enačba **neskončno mnogo rešitev** (vsako število je rešitev).
- Če dobiš neresnično enakost (npr. $3 = 7$), enačba **nima rešitve**.

**6. Preizkus.** Rešitev vstavimo v **prvotno** enačbo (ne v katero od vmesnih oblik, ker bi lahko napako prenesli naprej). Če je leva stran enaka desni, je rešitev pravilna.

## Rešeni primeri

### Primer 1 (lažji)

Reši enačbo $3x + 5 = 20$.

1. Število $5$ moramo spraviti na desno stran. Na obeh straneh odštejemo $5$: $3x + 5 - 5 = 20 - 5$, torej $3x = 15$.
2. Pri $x$ je koeficient $3$. Zato obe strani delimo s $3$: $x = 15 : 3 = 5$.
3. **Preizkus.** Leva stran: $3 \cdot 5 + 5 = 15 + 5 = 20$. Desna stran: $20$. Enaki sta, zato je $x = 5$ prava rešitev.

### Primer 2

Reši enačbo $5x - 7 = 2x + 8$.

1. Člene z $x$ želimo na levi strani. Na obeh straneh odštejemo $2x$: $5x - 2x - 7 = 8$, torej $3x - 7 = 8$.
2. Števila želimo na desni. Na obeh straneh prištejemo $7$: $3x = 15$.
3. Delimo s $3$: $x = 5$.
4. **Preizkus.** Leva stran: $5 \cdot 5 - 7 = 25 - 7 = 18$. Desna stran: $2 \cdot 5 + 8 = 10 + 8 = 18$. Enaki sta. ✓

### Primer 3 (težji)

Reši enačbo $2(x - 3) - 4 = 5x + 2(1 - x)$ in naredi preizkus.

1. **Oklepaji.** Levo: $2(x - 3) = 2x - 6$. Desno: $2(1 - x) = 2 - 2x$. Enačba je:
$$2x - 6 - 4 = 5x + 2 - 2x$$
2. **Združimo podobne člene** na vsaki strani posebej. Levo: $2x - 10$. Desno: $5x - 2x + 2 = 3x + 2$. Enačba je:
$$2x - 10 = 3x + 2$$
3. **Člene z $x$ na eno stran.** Odštejemo $3x$ na obeh straneh: $-x - 10 = 2$.
4. **Števila na drugo stran.** Prištejemo $10$: $-x = 12$.
5. **Delimo z $-1$** (ali obe strani pomnožimo z $-1$): $x = -12$.
6. **Preizkus** v prvotni enačbi. Leva stran: $2(-12 - 3) - 4 = 2 \cdot (-15) - 4 = -30 - 4 = -34$. Desna stran: $5 \cdot (-12) + 2(1 - (-12)) = -60 + 2 \cdot 13 = -60 + 26 = -34$. Enaki sta, zato je $x = -12$ rešitev. ✓

## Pogoste napake

- **Operacija samo na eni strani.** Če odšteješ $5$ samo na levi, ravnovesje poruši. Vedno na obeh straneh.
- **Pozabljeno množenje v oklepaju.** $2(x - 3) = 2x - 6$, ne $2x - 3$. Z $2$ pomnožiš vsak člen v oklepaju.
- **Napačen predznak pri prenosu.** Ko člen »prestaviš« čez enačaj, mu spremeniš predznak, ker v resnici na obeh straneh izvedeš nasprotno operacijo. Iz $x + 4 = 9$ sledi $x = 9 - 4$.
- **Deljenje samo enega člena.** Iz $3x = 15 + 6$ ne moreš deliti samo $15$ s $3$. Najprej seštej: $3x = 21$, nato $x = 7$.
- **Preizkus v spremenjeno enačbo.** Rešitev vstavi v prvotno enačbo, sicer se napaka pri preoblikovanju ne odkrije.
- **Napačen predznak pri $-x = 12$.** Rešitev ni $x = 12$, ampak $x = -12$.

## Povzetek

- Linearna enačba ima neznanko le v prvi potenci. Rešitev je število, ki enačbo spremeni v resnično enakost.
- Enačbo smemo preoblikovati tako, da na obeh straneh naredimo isto (prištejemo, odštejemo, množimo ali delimo z istim številom, ki ni $0$).
- Postopek: odpravi oklepaje in ulomke, združi podobne člene, loči člene z $x$ od števil, deli s koeficientom.
- Preizkus: rešitev vstavi v prvotno enačbo in primerjaj levo ter desno stran.
- Če se $x$ odpravi in je enakost resnična, je rešitev neskončno mnogo; če je neresnična, rešitve ni.

## Drugače: Na sliki

Predstavljaj si tehtnico z dvema posodama. V levi je vrečka z neznanim številom bombonov ($x$) in $5$ posameznih bombonov, v desni je $20$ posameznih bombonov. Tehtnica je v ravnovesju.

Če z obeh posod vzameš $5$ bombonov, je tehtnica še vedno v ravnovesju. V levi je zdaj samo vrečka, v desni $15$ bombonov. To je enačba $x = 15$ (če je ena vrečka).

Pri enačbi $3x + 5 = 20$ so v levi posodi tri enake vrečke in $5$ bombonov. Ko odvzameš $5$ bombonov z obeh strani, ostanejo tri vrečke na levi in $15$ bombonov na desni. Če vsebino razdeliš na tri enake dele, ima ena vrečka $5$ bombonov.

V simulaciji zgoraj lahko to sam preizkusiš: na obe strani dodajaj ali odvzemaj enake predmete in opazuj, da tehtnica ostane v ravnovesju. Tako se prepričaš, da so koraki pri reševanju enačbe dovoljeni.

## Drugače: Iz vsakdanjega življenja

Kupil si $4$ enake zvezke in pisalo za $2\,\text{€}$. Skupaj si plačal $10\,\text{€}$. Koliko stane en zvezek?

Cena zvezka je $x$. Enačba: $4x + 2 = 10$.

- Pisalo je že plačano, zato ga odštejemo: $4x = 8$.
- Osem evrov je bilo porabljenih za štiri enake zvezke, zato delimo: $x = 2$.

En zvezek stane $2\,\text{€}$.

Preizkus kot v trgovini: $4 \cdot 2 + 2 = 10$. Račun se ujema, zato je rešitev prava. Natanko tako delaš, ko preveriš, ali ti je blagajnik pravilno izračunal račun.

## Drugače: Korak za korakom s številkami

Reši $\dfrac{x}{2} + 3 = \dfrac{x}{4} + 5$.

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Odpravimo ulomke: vse pomnožimo s $4$ (skupni imenovalec) | $4 \cdot \dfrac{x}{2} + 4 \cdot 3 = 4 \cdot \dfrac{x}{4} + 4 \cdot 5$ |
| 2 | Izračunamo | $2x + 12 = x + 20$ |
| 3 | Odštejemo $x$ na obeh straneh | $x + 12 = 20$ |
| 4 | Odštejemo $12$ na obeh straneh | $x = 8$ |
| 5 | Preizkus, leva stran | $\dfrac{8}{2} + 3 = 4 + 3 = 7$ |
| 6 | Preizkus, desna stran | $\dfrac{8}{4} + 5 = 2 + 5 = 7$ |

Obe strani sta $7$, zato je $x = 8$ rešitev.

Opomba: vsak člen, tudi tisti brez ulomka, moramo pomnožiti s $4$.

## Drugače: Bolj natančno

Zakaj smemo na obeh straneh narediti isto? Enačba $A = B$ pove, da sta izraza $A$ in $B$ za vsak $x$ iz rešitve enaka števila. Če sta dve števili enaki, sta enaki tudi, ko jima prištejemo isto število $c$: iz $A = B$ sledi $A + c = B + c$. Podobno velja za množenje: iz $A = B$ sledi $A \cdot c = B \cdot c$.

Pri tem ne izgubimo rešitev, če koraki delujejo tudi **nazaj**. Prištevanje $c$ lahko razveljavimo z odštevanjem $c$. Množenje s $c \ne 0$ lahko razveljavimo z deljenjem s $c$. Zato imata enačbi pred in po koraku isto množico rešitev. To je razlog, da zahtevamo $c \neq 0$: množenje z $0$ bi vse spremenilo v $0 = 0$ in bi pri tem izgubili informacijo (korak ni povraten).

Splošna rešitev enačbe $ax + b = c$ za $a \ne 0$: odštejemo $b$, dobimo $ax = c - b$, delimo z $a$ in dobimo
$$x = \frac{c - b}{a}.$$
Če je $a = 0$, enačba ni več v pravem pomenu linearna: dobimo $b = c$, kar je bodisi vedno resnično (neskončno rešitev) bodisi nikoli (brez rešitve).

## Preveri se

? Kolikšna je rešitev enačbe $4x - 9 = 11$?
- $x = \dfrac{1}{2}$
- $x = -5$
+ $x = 5$
- $x = 20$
> Prištejemo $9$: $4x = 20$, nato delimo s $4$: $x = 5$. Preizkus: $4 \cdot 5 - 9 = 11$. Odgovor $20$ dobiš, če pozabiš deliti s $4$.

? Pri reševanju enačbe $3(x + 2) = 15$ je prvi korak pravilno zapisan kot:
- $3x + 2 = 15$
+ $3x + 6 = 15$
- $x + 2 = 15 + 3$
> Z $3$ moramo pomnožiti oba člena v oklepaju: $3 \cdot x + 3 \cdot 2 = 3x + 6$. Odgovor $3x + 2$ pozabi pomnožiti drugi člen.

? Kaj dobiš, ko enačbo $2x + 4 = 2x + 9$ rešuješ po korakih?
- Rešitev $x = 0$.
- Neskončno mnogo rešitev.
+ Neresnično enakost $4 = 9$, zato enačba nima rešitve.
> Ko na obeh straneh odštejemo $2x$, dobimo $4 = 9$, kar nikoli ne drži. Enačba zato nima rešitve.
