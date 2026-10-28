---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih tem že poznaš silo (merimo jo v newtonih, $\mathrm{N}$) in veš, da sila lahko spremeni gibanje telesa ali ga deformira. Znaš tudi izmeriti dolžino poti v metrih.

V vsakdanjem govoru rečemo, da »delamo«, ko se učimo, razmišljamo ali držimo težko torbo. V fiziki pa ima beseda **delo** natančen pomen: povezano je s silo in potjo, na kateri sila deluje. S tem pojmom lahko primerjamo, koliko napora je potrebnega, da dvignemo škatlo, porinemo omaro ali potegnemo sani. Delo je tudi prvi korak k energiji, ki jo bomo spoznali v naslednjih temah.

## Razlaga

**1. Kdaj telo opravi delo.** Sila opravi delo, kadar telo premika. Pri tem mora imeti sila smer (vsaj približno) v smeri gibanja telesa. Potrebujemo torej dvoje: **silo** in **pot**, na kateri sila deluje.

**2. Formula.** Če na telo deluje stalna sila $F$ v smeri gibanja in telo prepotuje pot $s$, je opravljeno delo:

$$A = F \cdot s$$

- $A$ je delo,
- $F$ je sila (v $\mathrm{N}$),
- $s$ je pot (v $\mathrm{m}$).

**3. Enota.** Delo merimo v **joulih** ($\mathrm{J}$):

$$1\,\mathrm{J} = 1\,\mathrm{N} \cdot 1\,\mathrm{m}$$

Delo je $1\,\mathrm{J}$, kadar sila $1\,\mathrm{N}$ premakne telo za $1\,\mathrm{m}$ v smeri sile. Pogosto uporabljamo tudi $1\,\mathrm{kJ} = 1000\,\mathrm{J}$.

**4. Kdaj je delo enako nič.**

- Če se telo ne premakne ($s = 0$), je $A = 0$. Tudi če se zelo trudiš in potiskaš zid, ne opraviš dela.
- Če je sila pravokotna na smer gibanja, delo ni opravljeno. Ko nosiš torbo po vodoravni poti, je sila, s katero držiš torbo, usmerjena navzgor, gibanje pa je vodoravno. Ta sila ne opravlja dela.

**5. Dviganje telesa.** Pri dviganju telesa s stalno hitrostjo mora sila dvigovanja uravnotežiti težo telesa. Teža je $F_g = m \cdot g$, pri čemer je $g \approx 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$. Teža telesa z maso $1\,\mathrm{kg}$ je torej približno $10\,\mathrm{N}$. Delo pri dvigovanju za višino $h$ je:

$$A = F_g \cdot h$$

**6. Pretvarjanje enot.** Pred računom vse pretvori v osnovne enote: sila v $\mathrm{N}$, pot v $\mathrm{m}$. Na primer $250\,\mathrm{cm} = 2{,}5\,\mathrm{m}$.

## Rešeni primeri

### Primer 1: vlečenje vozička

Otrok vleče voziček s stalno silo $20\,\mathrm{N}$ v smeri gibanja po poti $5\,\mathrm{m}$. Koliko dela opravi?

**Podatki:** $F = 20\,\mathrm{N}$ (stalna sila v smeri gibanja), $s = 5\,\mathrm{m}$
**Iščemo:** delo $A$

:::formula
$A = F \cdot s$
:::

**Rešitev:**

1. Sila in pot sta v isti smeri, zato lahko uporabimo $A = F \cdot s$.
2. Vstavimo: $A = 20\,\mathrm{N} \cdot 5\,\mathrm{m} = 100\,\mathrm{N\,m}$.
3. Ker je $1\,\mathrm{N\,m} = 1\,\mathrm{J}$, je $A = 100\,\mathrm{J}$.
4. Smiselnost: večja sila ali daljša pot bi dala več dela, kar se ujema s formulo.

### Primer 2: dviganje škatle

Škatlo z maso $4\,\mathrm{kg}$ dvignemo enakomerno s tal na polico, ki je $1{,}5\,\mathrm{m}$ visoko. Koliko dela opravimo? Vzemi $g = 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$.

**Podatki:** $m = 4\,\mathrm{kg}$, $h = 1{,}5\,\mathrm{m}$, $g = 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$, dviganje je enakomerno
**Iščemo:** delo $A$

:::formula
Sila dvigovanja je enaka teži: $F_g = m \cdot g$, nato $A = F_g \cdot h$
:::

**Rešitev:**

1. Pri enakomernem dviganju je sila dvigovanja enaka teži škatle. Izračunamo težo: $F_g = m \cdot g = 4\,\mathrm{kg} \cdot 10\,\dfrac{\mathrm{N}}{\mathrm{kg}} = 40\,\mathrm{N}$.
2. Pot v smeri sile je višina: $s = h = 1{,}5\,\mathrm{m}$.
3. Delo: $A = 40\,\mathrm{N} \cdot 1{,}5\,\mathrm{m} = 60\,\mathrm{J}$.
4. Odgovor: opravimo $60\,\mathrm{J}$ dela.

### Primer 3 (težji): iskanje sile iz dela

Delavec porine zaboj po vodoravnih tleh po poti $300\,\mathrm{cm}$ in pri tem opravi $540\,\mathrm{J}$ dela. S kolikšno stalno silo je potiskal v smeri gibanja?

**Podatki:** $s = 300\,\mathrm{cm}$, $A = 540\,\mathrm{J}$, sila je stalna in kaže v smeri gibanja
**Iščemo:** silo $F$

:::formula
Iz $A = F \cdot s$ sledi $F = \dfrac{A}{s}$
:::

**Rešitev:**

1. Pot pretvorimo v metre: $300\,\mathrm{cm} = 3\,\mathrm{m}$.
2. Iščemo silo, zato formulo preoblikujemo: iz $A = F \cdot s$ sledi $F = \dfrac{A}{s}$.
3. Vstavimo: $F = \dfrac{540\,\mathrm{J}}{3\,\mathrm{m}} = 180\,\mathrm{N}$.
4. Preverimo: $180\,\mathrm{N} \cdot 3\,\mathrm{m} = 540\,\mathrm{J}$. ✓
5. Odgovor: delavec je potiskal s silo $180\,\mathrm{N}$.

## Pogoste napake

- **Pozabljena pretvorba enot.** Če pot vstaviš v centimetrih, rezultat ni v joulih. Najprej pretvori v $\mathrm{m}$.
- **Mešanje mase in teže.** Pri dviganju v formulo ne vstaviš mase v $\mathrm{kg}$, ampak težo v $\mathrm{N}$: $F_g = m \cdot g$.
- **»Držim, torej delam.«** Če se telo ne premakne, je delo v fizikalnem smislu enako nič, ne glede na napor.
- **Napačna pot pri dviganju.** Za delo dviga šteje samo višina, ne dolžina poti po klančini ali vijugasti poti.
- **Napačna enota.** Delo ni v newtonih ali metrih, ampak v joulih.

## Povzetek

- Delo opravi sila, ki premika telo v smeri svojega delovanja.
- Za stalno silo v smeri gibanja velja $A = F \cdot s$.
- Enota za delo je joule: $1\,\mathrm{J} = 1\,\mathrm{N\,m}$.
- Če je $s = 0$ ali je sila pravokotna na gibanje, je delo enako $0$.
- Pri dviganju je $F = m \cdot g$ in $s = h$, torej $A = m \cdot g \cdot h$.
- Pred računom pretvori enote v $\mathrm{N}$ in $\mathrm{m}$.

## Drugače: Na sliki

Predstavljaj si graf, na katerem vodoravna os kaže pot $s$, navpična pa silo $F$. Če je sila stalna, je graf vodoravna črta. Lik pod črto do poti $s$ je **pravokotnik** s stranicama $F$ in $s$. Njegova ploščina je $F \cdot s$, to pa je ravno delo.

Zgled: sila $4\,\mathrm{N}$ na poti $3\,\mathrm{m}$ nariše pravokotnik z višino $4$ in širino $3$, njegova ploščina je $12$, delo pa $12\,\mathrm{J}$.

Če sila ostane enaka, a je pot dvakrat daljša, je pravokotnik dvakrat širši in delo je dvakrat večje.

## Drugače: Iz vsakdanjega življenja

Primerjaj dva primera:

- Po stopnicah v nadstropje nosiš nahrbtnik. Dvigaš ga navzgor, zato tvoje mišice opravljajo delo proti teži.
- Po vodoravnem hodniku nosiš isti nahrbtnik. Sila, s katero ga držiš, kaže navzgor, gibanje pa je vodoravno, zato ta sila ne opravi dela v fizikalnem smislu.

Ko ob steni stojiš in jo potiskaš, se utrudiš, čeprav je delo na zidu enako nič, ker se zid ne premakne. Utrujenost nastane zato, ker mišice v telesu porabljajo energijo tudi takrat, ko ni fizikalnega dela.

Še en zgled: kdor dvigne težji kovček, opravi več dela kot tisti, ki dvigne lažjega na isto višino, ker je potrebna sila večja.

## Drugače: Korak za korakom s številkami

Recept za nalogo z delom:

1. Izpiši podatke in jih pretvori v $\mathrm{N}$ in $\mathrm{m}$.
2. Preveri, ali je sila v smeri gibanja.
3. Če se telo dviga, izračunaj težo: $F_g = m \cdot g$.
4. Uporabi $A = F \cdot s$ (ali preoblikuj: $F = \dfrac{A}{s}$, $s = \dfrac{A}{F}$).
5. Zapiši rezultat z enoto $\mathrm{J}$.

Tabela primerov ($A = F \cdot s$):

| $F$ | $s$ | $A$ |
|---|---|---|
| $10\,\mathrm{N}$ | $2\,\mathrm{m}$ | $20\,\mathrm{J}$ |
| $10\,\mathrm{N}$ | $4\,\mathrm{m}$ | $40\,\mathrm{J}$ |
| $25\,\mathrm{N}$ | $4\,\mathrm{m}$ | $100\,\mathrm{J}$ |
| $50\,\mathrm{N}$ | $0{,}5\,\mathrm{m}$ | $25\,\mathrm{J}$ |

Opazuj: če se ena količina podvoji, se podvoji tudi delo. Delo je sorazmerno s silo in s potjo.

## Drugače: Bolj natančno

Enoto joule lahko izpeljemo iz osnovnih enot. Sila ima enoto $1\,\mathrm{N} = 1\,\dfrac{\mathrm{kg\,m}}{\mathrm{s}^2}$, zato je

$$1\,\mathrm{J} = 1\,\mathrm{N\,m} = 1\,\dfrac{\mathrm{kg\,m}^2}{\mathrm{s}^2}.$$

Formula $A = F \cdot s$ velja samo, če je sila stalna in kaže v smeri gibanja. Če sila s smerjo gibanja oklepa kot, delo opravi le njena komponenta v smeri gibanja. Pri pravokotni sili je ta komponenta enaka nič, zato je delo nič. Če se sila vzdolž poti spreminja, delo ustreza ploščini pod grafom sile v odvisnosti od poti. Splošnejše primere boš spoznal kasneje.

## Preveri se

? Kolikšno delo opravi sila $30\,\mathrm{N}$, ki telo premakne za $4\,\mathrm{m}$ v smeri sile?
- $7{,}5\,\mathrm{J}$
- $34\,\mathrm{J}$
+ $120\,\mathrm{J}$
- $120\,\mathrm{N}$
> $A = F \cdot s = 30\,\mathrm{N} \cdot 4\,\mathrm{m} = 120\,\mathrm{J}$. Odgovor $7{,}5$ dobiš z deljenjem, $34$ s seštevanjem, enota $\mathrm{N}$ pa ni enota za delo.

? Škatlo z maso $2\,\mathrm{kg}$ enakomerno dvignemo za $3\,\mathrm{m}$. Koliko dela opravimo? Vzemi $g = 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$.
- $6\,\mathrm{J}$
- $20\,\mathrm{J}$
+ $60\,\mathrm{J}$
> Teža škatle je $2\,\mathrm{kg} \cdot 10\,\dfrac{\mathrm{N}}{\mathrm{kg}} = 20\,\mathrm{N}$. Delo je $20\,\mathrm{N} \cdot 3\,\mathrm{m} = 60\,\mathrm{J}$. Odgovor $6$ uporabi samo maso, $20$ pa samo težo brez poti.

? Učenec $10$ sekund z vso močjo potiska težko omaro, ki se ne premakne. Koliko dela opravi na omari?
+ $0\,\mathrm{J}$, ker je pot enaka nič
- $0\,\mathrm{J}$, ker se ne utrudi
- Veliko, ker se trudi
> Delo je $A = F \cdot s$. Ker se omara ne premakne, je $s = 0$ in zato $A = 0$, ne glede na to, kako se učenec trudi.
