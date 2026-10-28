---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Linearne enačbe z eno neznanko že znaš reševati: člene z $x$ spraviš na eno stran, število na drugo, nato deliš. Znaš tudi računati z ulomki in poiskati skupni imenovalec (najmanjši skupni večkratnik imenovalcev).

Kadar so v enačbi ulomki, je računanje dolgo in se hitro zmotiš. Zato ulomke **odpravimo**: enačbo pomnožimo s primernim številom, tako da ostanejo samo cela števila. Dobimo navadno linearno enačbo, ki jo že znaš rešiti. Na koncu rezultat še **preizkusimo**, torej ga vstavimo v prvotno enačbo. Tako vemo, da je rešitev res pravilna.

Take enačbe nastanejo pri nalogah o deležih ("tretjino poti, četrtino zneska ..."), pri mešanicah, delu in razdeljevanju.

## Razlaga

**1. Ekvivalentna enačba.** Če obe strani enačbe pomnožimo z istim številom, ki ni $0$, ima nova enačba enako rešitev kot prvotna. To je ključ za odpravljanje ulomkov.

**2. Skupni imenovalec.** Poiščemo število, v katerega gredo vsi imenovalci. Najpogosteje vzamemo najmanjši skupni večkratnik. Za imenovalce $2$, $3$ in $4$ je to $12$.

**3. Postopek v korakih.**

1. Poišči najmanjši skupni večkratnik vseh imenovalcev.
2. **Vsak člen** na obeh straneh pomnoži s tem številom. Tudi člene brez ulomka.
3. Krajšaj. Vsak ulomek postane izraz brez imenovalca.
4. Če je pred ulomkom z vsoto ali razliko v števcu (npr. $\dfrac{x-2}{6}$) dobljeni izraz množen z neko številko, ga **zapiši v oklepaju**, nato odpravi oklepaje. Pazi na predznak.
5. Reši dobljeno enačbo: zdruzi člene z $x$, člene brez $x$, deli.
6. **Preizkus:** rešitev vstavi v prvotno enačbo (z ulomki) in preveri, da sta strani enaki.

**4. Primer krajšanja.** Pri množenju z $12$ je
$$12\cdot\frac{x}{4}=3x,\qquad 12\cdot\frac{x+1}{3}=4(x+1),\qquad 12\cdot 5 = 60.$$

## Rešeni primeri

### Primer 1 (lažji)

Reši enačbo $\dfrac{x}{3}+\dfrac{x}{2}=5$.

1. Imenovalca sta $3$ in $2$, najmanjši skupni večkratnik je $6$.
2. Vsak člen pomnožimo s $6$, ker mora ostati enačba ekvivalentna:
$$6\cdot\frac{x}{3}+6\cdot\frac{x}{2}=6\cdot 5.$$
3. Krajšamo: $2x+3x=30$.
4. Združimo: $5x=30$.
5. Delimo s $5$: $x=6$.
6. **Preizkus:** leva stran je $\dfrac{6}{3}+\dfrac{6}{2}=2+3=5$, desna stran je $5$. ✓

### Primer 2

Reši enačbo $\dfrac{x+1}{2}-\dfrac{2x-1}{3}=1$.

1. Imenovalca $2$ in $3$, najmanjši skupni večkratnik je $6$.
2. Množimo vse člene s $6$:
$$6\cdot\frac{x+1}{2}-6\cdot\frac{2x-1}{3}=6\cdot 1.$$
3. Krajšamo in števce zapišemo v oklepaje: $3(x+1)-2(2x-1)=6$.
4. Odpravimo oklepaje. Pozor: pred drugim oklepajem je minus, zato se oba člena v njem zamenjata predznak:
$$3x+3-4x+2=6.$$
5. Združimo: $-x+5=6$, torej $-x=1$, torej $x=-1$.
6. **Preizkus:** leva stran je $\dfrac{-1+1}{2}-\dfrac{2\cdot(-1)-1}{3}=\dfrac{0}{2}-\dfrac{-3}{3}=0-(-1)=1$. Desna stran je $1$. ✓

### Primer 3 (težji)

Reši enačbo $\dfrac{3x-1}{4}-\dfrac{x-2}{6}=\dfrac{x}{2}+\dfrac{1}{3}$.

1. Imenovalci so $4$, $6$, $2$, $3$. Najmanjši skupni večkratnik je $12$.
2. Vsak člen pomnožimo z $12$:
$$12\cdot\frac{3x-1}{4}-12\cdot\frac{x-2}{6}=12\cdot\frac{x}{2}+12\cdot\frac{1}{3}.$$
3. Krajšamo: $3(3x-1)-2(x-2)=6x+4$.
4. Oklepaji: $9x-3-2x+4=6x+4$.
5. Poenostavimo levo stran: $7x+1=6x+4$.
6. Člene z $x$ na levo, števila na desno: $7x-6x=4-1$, torej $x=3$.
7. **Preizkus:**
 - Leva stran: $\dfrac{3\cdot 3-1}{4}-\dfrac{3-2}{6}=\dfrac{8}{4}-\dfrac{1}{6}=2-\dfrac{1}{6}=\dfrac{11}{6}$.
 - Desna stran: $\dfrac{3}{2}+\dfrac{1}{3}=\dfrac{9}{6}+\dfrac{2}{6}=\dfrac{11}{6}$.
 - Strani sta enaki. ✓

## Pogoste napake

- **Pozabljen člen brez ulomka.** Pri $\dfrac{x}{2}+3=5$ moraš z $2$ pomnožiti tudi $3$ in $5$: $x+6=10$. Napačno bi bilo $x+3=5$.
- **Minus pred ulomkom.** Pri $-\dfrac{x-2}{6}$ dobiš $-(x-2)$, torej $-x+2$, ne $-x-2$. Zato je oklepaj nujen.
- **Množenje samo števcev ali samo ene strani.** Z istim številom moraš pomnožiti **celotno** enačbo, vsak člen na obeh straneh.
- **Napačno krajšanje.** Pri $\dfrac{3x-1}{4}\cdot 12$ je rezultat $3(3x-1)$, ne $3\cdot 3x-1$.
- **Preskočen preizkus.** Napako v predznaku opaziš šele, ko rezultat vstaviš v prvotno enačbo.

## Povzetek

- Ulomke odpravimo tako, da enačbo pomnožimo z najmanjšim skupnim večkratnikom imenovalcev.
- Pomnožiti je treba **vsak člen** na obeh straneh.
- Števce z vsoto ali razliko zapišemo v oklepaj, nato pazimo na predznak.
- Dobimo navadno linearno enačbo, ki jo rešimo na znani način.
- Rešitev vedno preizkusimo v prvotni enačbi.

## Drugače: Na sliki

Predstavljaj si tehtnico v ravnovesju. Na eni strani je $\dfrac{x}{2}+\dfrac{x}{3}$, na drugi $10$. Če na obeh straneh vsako vsebino povečamo $6$-krat, tehtnica ostane v ravnovesju.

Pri tem se ulomki spremenijo v cele dele: polovica škatle, povečana $6$-krat, so $3$ cele škatle, tretjina pa $2$ celi škatli. Enačba postane $3x+2x=60$.

Slika torej pove: množenje z istim številom ravnovesja ne poruši. Ulomke pa "pretopi" v cele kose.

Rešitev: $5x=60$, $x=12$. Preizkus: $\dfrac{12}{2}+\dfrac{12}{3}=6+4=10$. ✓

## Drugače: Iz vsakdanjega življenja

Ana je v ponedeljek prebrala tretjino knjige, v torek četrtino, za konec pa ji je ostalo še $25$ strani. Koliko strani ima knjiga?

Označimo število strani z $x$. Prebrani deli in ostanek skupaj dajo celo knjigo:
$$\frac{x}{3}+\frac{x}{4}+25=x.$$

Množimo z $12$: $4x+3x+300=12x$. Torej $7x+300=12x$, od tod $300=5x$ in $x=60$.

Preizkus: $\dfrac{60}{3}=20$, $\dfrac{60}{4}=15$, $20+15+25=60$. ✓ Knjiga ima $60$ strani.

Tak zapis uporabljaš vsakič, ko je nekaj podano z deleži celote.

## Drugače: Korak za korakom s številkami

Reši $\dfrac{x}{4}-\dfrac{1}{2}=\dfrac{x}{6}$.

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Imenovalci $4$, $2$, $6$: najmanjši skupni večkratnik | $12$ |
| 2 | Vsak člen pomnožimo z $12$ | $12\cdot\frac{x}{4}-12\cdot\frac{1}{2}=12\cdot\frac{x}{6}$ |
| 3 | Krajšamo | $3x-6=2x$ |
| 4 | Člene z $x$ na levo: odštejemo $2x$ | $x-6=0$ |
| 5 | Prištejemo $6$ | $x=6$ |
| 6 | Preizkus leve strani | $\frac{6}{4}-\frac{1}{2}=\frac{3}{2}-\frac{1}{2}=1$ |
| 7 | Preizkus desne strani | $\frac{6}{6}=1$ ✓ |

## Drugače: Bolj natančno

Zakaj množenje enačbe ne spremeni rešitve? Če je $A=B$, je tudi $k\cdot A=k\cdot B$ za vsako število $k$. Če pa je $k\neq 0$, velja tudi obratno: iz $kA=kB$ lahko delimo s $k$ in dobimo $A=B$. Zato imata prvotna in nova enačba natanko iste rešitve. Pogoj $k\neq 0$ je pomemben: z $0$ bi dobili $0=0$ in izgubili vso informacijo.

Zakaj mora biti pomnožen vsak člen? Leva in desna stran sta vsaka en izraz, sestavljen iz več členov. Množenje izraza $\dfrac{x}{3}+\dfrac{x}{2}$ s $6$ je množenje vsote, zato po distributivnosti pomnožimo vsak člen:
$$6\left(\frac{x}{3}+\frac{x}{2}\right)=6\cdot\frac{x}{3}+6\cdot\frac{x}{2}=2x+3x.$$

Preizkus ima pomen kot kontrola pravilnosti postopka. Če smo kje naredili napako (npr. pri predznaku), bo vstavitev rešitve v prvotno enačbo dala neenaki strani.

## Preveri se

? Kolikšna je rešitev enačbe $\dfrac{x}{4}+\dfrac{x}{6}=5$?
- $x=1$
+ $x=12$
- $x=60$
> Množimo z $12$: $3x+2x=60$, torej $5x=60$ in $x=12$. Preizkus: $\dfrac{12}{4}+\dfrac{12}{6}=3+2=5$. Rešitev $x=1$ dobiš, če pozabiš pomnožiti $5$ z $12$, rešitev $60$ pa, če ne deliš s $5$.

? Kolikšna je rešitev enačbe $\dfrac{x-1}{2}-\dfrac{x+1}{3}=0$?
- $x=1$
+ $x=5$
- $x=-5$
> Množimo s $6$: $3(x-1)-2(x+1)=0$, torej $3x-3-2x-2=0$ in $x=5$. Preizkus: $\dfrac{4}{2}-\dfrac{6}{3}=2-2=0$. Če minus pred drugim oklepajem pozabiš uporabiti pri $+1$, dobiš napačni $x=1$.

? Kaj dobimo, če enačbo $\dfrac{x}{2}+\dfrac{2}{3}=\dfrac{5}{6}$ pomnožimo s $6$?
- $3x+2=5$
- $3x+4=\dfrac{5}{6}$
+ $3x+4=5$
> Pomnožiti moramo vsak člen: $6\cdot\dfrac{x}{2}=3x$, $6\cdot\dfrac{2}{3}=4$, $6\cdot\dfrac{5}{6}=5$. Pri drugem odgovoru je ostala desna stran nepomnožena, pri prvem pa je napačno izračunan člen $\dfrac{2}{3}$.
