---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Reševanje preprostih enačb, kot je $x + 5 = 12$ ali $3x = 21$, že znaš. Znaš tudi računati z ulomki (razširjanje, skupni imenovalec) in odpirati oklepaje. V tej lekciji vse to združiš in rešuješ **linearne enačbe**, tudi take z ulomki in s **parametrom**.

Linearne enačbe nastopajo povsod, kjer je nekaj odvisno od nečesa premo sorazmerno: cena taksija, mesečni strošek telefona, čas potovanja. Znanje potrebuješ tudi naprej, saj je reševanje linearnih enačb osnova za sisteme enačb, linearno funkcijo in kasneje za kvadratne enačbe. Parameter pa je prvi korak k pravi algebri: namesto ene enačbe rešuješ cel »razred« enačb naenkrat.

## Razlaga

**1. Kaj je linearna enačba.** Linearna enačba z eno neznanko $x$ je enačba, ki jo lahko z ekvivalentnimi preoblikami prevedemo na obliko

$$ax = b,$$

kjer sta $a$ in $b$ števili. Neznanka nastopa samo v prvi potenci ($x$, ne $x^2$ in ne $\frac{1}{x}$).

**2. Ekvivalentne preoblike.** Enačbi ostane rešitev ista, če:

- na obeh straneh prištejemo ali odštejemo isto število ali izraz,
- obe strani pomnožimo ali delimo z istim številom, **različnim od $0$**,
- odpremo oklepaje in poenostavimo posamezno stran.

Enačba je kot tehtnica: kar naredimo na eni strani, moramo narediti tudi na drugi.

**3. Postopek reševanja.**

1. Odpri oklepaje.
2. Če so v enačbi ulomki, vse člene pomnoži s skupnim imenovalcem, da jih odpraviš.
3. Člene z neznanko prenesi na eno stran, ostale na drugo.
4. Poenostavi in dobi obliko $ax = b$.
5. Deli z $a$ (če $a \ne 0$).
6. **Preveri** z vstavitvijo v prvotno enačbo.

**4. Koliko rešitev ima enačba $ax = b$?**

- Če je $a \neq 0$: natanko ena rešitev, $x = \dfrac{b}{a}$.
- Če je $a = 0$ in $b \neq 0$: enačba $0 \cdot x = b$ **nima rešitve** (npr. $0 = 4$ ni res).
- Če je $a = 0$ in $b = 0$: enačba $0 \cdot x = 0$ velja za **vsako realno število**, rešitev je $\mathbb{R}$.

**5. Enačbe s parametrom.** Včasih v enačbi poleg $x$ nastopa še črka, npr. $a$ ali $m$, ki predstavlja neko poljubno, a fiksno število. Tej črki rečemo **parameter**. Za vsako vrednost parametra dobimo drugo enačbo, zato rešitev običajno zapišemo kot formulo in ločimo primere.

Primer: $mx + 1 = 3x + 5$. Člene z $x$ prenesemo na levo: $mx - 3x = 5 - 1$, torej $(m-3)x = 4$.

- Če je $m \neq 3$, delimo z $m - 3$: $x = \dfrac{4}{m-3}$.
- Če je $m = 3$, dobimo $0 \cdot x = 4$, kar ne velja. Enačba nima rešitve.

Pri parametru **nikoli ne delimo z izrazom, ki bi lahko bil $0$**, ne da bi ta primer obravnavali posebej.

## Rešeni primeri

### Primer 1: oklepaji

Reši enačbo $3(x-2) + 5 = 2x + 7$.

1. Odpremo oklepaj. Vsak člen v oklepaju pomnožimo s $3$: $3x - 6 + 5 = 2x + 7$.
2. Poenostavimo levo stran: $3x - 1 = 2x + 7$.
3. Člene z $x$ prenesemo na levo, števila na desno. Odštejemo $2x$ in prištejemo $1$: $3x - 2x = 7 + 1$.
4. Poenostavimo: $x = 8$.
5. Preverimo. Leva stran: $3 \cdot (8-2) + 5 = 18 + 5 = 23$. Desna stran: $2 \cdot 8 + 7 = 23$. ✓

### Primer 2: ulomki

Reši enačbo $\dfrac{x+1}{2} - \dfrac{2x-1}{3} = 1$.

1. Skupni imenovalec je $6$. Vsak člen, tudi $1$ na desni, pomnožimo s $6$:
$$6 \cdot \frac{x+1}{2} - 6 \cdot \frac{2x-1}{3} = 6 \cdot 1.$$
2. Krajšamo: $3(x+1) - 2(2x-1) = 6$. Ulomkov ni več, imamo pa oklepaje.
3. Odpremo oklepaje. Pozor: pred drugim oklepajem je minus, zato ga množimo z $-2$: $3x + 3 - 4x + 2 = 6$.
4. Poenostavimo: $-x + 5 = 6$.
5. Odštejemo $5$: $-x = 1$. Pomnožimo z $-1$: $x = -1$.
6. Preverimo. $\dfrac{-1+1}{2} - \dfrac{2\cdot(-1)-1}{3} = \dfrac{0}{2} - \dfrac{-3}{3} = 0 + 1 = 1$. ✓

### Primer 3: parameter

Reši enačbo $ax + 3 = x + a + 2$ za neznanko $x$. Parameter $a$ je realno število.

1. Člene z $x$ prenesemo na levo, ostalo na desno: $ax - x = a + 2 - 3$.
2. Na levi izpostavimo $x$, na desni poenostavimo: $(a-1)x = a - 1$.
3. Razločimo primera, ker bi z deljenjem z $a-1$ lahko delili z $0$.
4. **Primer $a \neq 1$:** delimo z $a - 1$ in dobimo $x = \dfrac{a-1}{a-1} = 1$.
5. **Primer $a = 1$:** enačba postane $0 \cdot x = 0$, kar velja za vsak $x$. Rešitev je vsako realno število.
6. Preverimo z vrednostmi. Za $a = 2$: $2x + 3 = x + 4$ da $x = 1$. ✓ Za $a = 1$: $x + 3 = x + 3$ res velja za vsak $x$. ✓
7. **Odgovor:** za $a \neq 1$ je $x = 1$, za $a = 1$ je rešitev vsako realno število.

## Pogoste napake

- **Predznak pred oklepajem.** Pri $-(2x-1)$ se predznak spremeni pri *obeh* členih: $-2x + 1$, ne $-2x - 1$. Pri ulomku $-\dfrac{2x-1}{3}$ je števec v oklepaju, zato po množenju s $6$ dobimo $-2(2x-1)$.
- **Pozabljeno množenje členov brez ulomka.** Če enačbo množiš s skupnim imenovalcem, moraš pomnožiti *vsak* člen, tudi celo število.
- **Prenos brez spremembe predznaka.** Če člen prenesemo na drugo stran, se mu predznak spremeni, ker pravzaprav na obeh straneh prištejemo ali odštejemo isto.
- **Deljenje z $0$ pri parametru.** Pri $(a-1)x = a-1$ ne smeš kar deliti, ne da bi ločil primer $a = 1$.
- **Napačen zaključek pri $0 \cdot x = b$.** Če je $b \neq 0$, rešitve ni. Če je $b = 0$, so rešitve vsa števila. To nista isto.
- **Izpustiš preverjanje.** Vstavitev v prvotno enačbo hitro razkrije računsko napako.

## Povzetek

- Linearno enačbo z ekvivalentnimi preoblikami prevedemo na $ax = b$.
- Postopek: odpri oklepaje, odpravi ulomke (množenje s skupnim imenovalcem), zberi člene z $x$ na eni strani, poenostavi, deli z $a$, preveri.
- Za $a \neq 0$ je rešitev $x = \dfrac{b}{a}$. Za $a = 0$, $b \neq 0$ rešitve ni. Za $a = 0$, $b = 0$ je rešitev vsako realno število.
- Pri enačbi s parametrom obravnavamo primere, kdaj je koeficient pri $x$ enak $0$ in kdaj ni.
- Rešitev vedno preveri z vstavitvijo.

## Drugače: Na sliki

Enačbo $3x - 1 = 2x + 7$ si lahko predstavljaš kot vprašanje: pri katerem $x$ imata premici $y = 3x - 1$ in $y = 2x + 7$ enako vrednost? Rešitev je abscisa **presečišča** teh dveh premic. V našem primeru je $x = 8$. Takrat imata obe premici vrednost $y = 3 \cdot 8 - 1 = 23$ in $y = 2 \cdot 8 + 7 = 23$.

Posebej preprost primer je enačba $ax + b = 0$. Njena rešitev je **ničla** linearne funkcije $f(x) = ax + b$, torej točka, kjer graf seka os $x$. Na primer $2x - 4 = 0$ da $x = 2$, graf funkcije $y = 2x - 4$ prečka os $x$ v točki $(2, 0)$.

Pri parametru slika razloži tudi primere. Če sta premici vzporedni in različni, se ne sekata (ni rešitve). Če sta isti premici, se prekrivata povsod (neskončno rešitev). V ostalih primerih se sekata v eni točki.

## Drugače: Iz vsakdanjega življenja

Taksist zaračuna začetni znesek $2\,\text{€}$ in še $1{,}20\,\text{€}$ za vsak prevožen kilometer. Vožnja je stala $9{,}20\,\text{€}$. Koliko kilometrov si prevozil?

Če je $x$ število kilometrov, je cena $2 + 1{,}2x$. Zapišemo enačbo:

$$2 + 1{,}2x = 9{,}2.$$

Odštejemo $2$: $1{,}2x = 7{,}2$. Delimo z $1{,}2$: $x = 6$. Prevozil si $6\,\text{km}$. Preveri: $2 + 1{,}2 \cdot 6 = 2 + 7{,}2 = 9{,}2$. ✓

Še analogija s tehtnico. Enačba je tehtnica v ravnovesju. Če z leve skodelice vzameš dve kroglici, moraš vzeti dve tudi z desne, sicer se ravnovesje poruši. Zato smemo na obeh straneh narediti isto. Parameter je pa kot teža, ki je ne poznamo vnaprej: tehtnico moramo uravnotežiti za vsako možno težo.

## Drugače: Korak za korakom s številkami

Reši enačbo $\dfrac{2x-1}{4} = \dfrac{x+2}{3}$.

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Skupni imenovalec je $12$. Obe strani množimo z $12$. | $12 \cdot \dfrac{2x-1}{4} = 12 \cdot \dfrac{x+2}{3}$ |
| 2 | Krajšamo. | $3(2x-1) = 4(x+2)$ |
| 3 | Odpremo oklepaje. | $6x - 3 = 4x + 8$ |
| 4 | Odštejemo $4x$, prištejemo $3$. | $6x - 4x = 8 + 3$ |
| 5 | Poenostavimo. | $2x = 11$ |
| 6 | Delimo z $2$. | $x = \dfrac{11}{2} = 5{,}5$ |

Preverimo: leva stran je $\dfrac{2 \cdot 5{,}5 - 1}{4} = \dfrac{10}{4} = 2{,}5$, desna stran je $\dfrac{5{,}5 + 2}{3} = \dfrac{7{,}5}{3} = 2{,}5$. ✓

## Drugače: Bolj natančno

Zakaj smemo enačbo množiti ali deliti z istim številom, ki ni $0$? Če velja $A = B$, potem velja tudi $kA = kB$ za vsak $k$. To je očitno. Obratno, če velja $kA = kB$ in je $k \neq 0$, lahko obe strani delimo s $k$ in dobimo $A = B$. Zato sta enačbi **ekvivalentni**, imata iste rešitve. Če je $k = 0$, dobimo $0 = 0$ ne glede na $A$ in $B$, zato bi izgubili vso informacijo in dobili »rešitve«, ki jih prej ni bilo.

Zato pri parametru ne smemo deliti z izrazom, ki je lahko $0$. V enačbi $(a-1)x = a-1$ je množenje s faktorjem $a - 1$ ekvivalentna preoblika samo, če je $a - 1 \neq 0$. Primer $a = 1$ je treba rešiti ločeno, neposredno iz enačbe.

Splošno: enačbo $ax = b$ rešujemo takole.

- Če je $a \neq 0$, ima enačba natanko eno rešitev $x = \dfrac{b}{a}$. Preverimo: $a \cdot \dfrac{b}{a} = b$. ✓
- Če je $a = 0$, je leva stran za vsak $x$ enaka $0$. Enačba je torej res za vse $x$, če je $b = 0$, in za noben $x$, če je $b \neq 0$.

## Preveri se

? Reši enačbo $5x - 7 = 3x + 9$.
- $x = 1$
+ $x = 8$
- $x = -8$
> Člene z $x$ zberemo na levi: $5x - 3x = 9 + 7$, torej $2x = 16$ in $x = 8$. Odgovor $x = 1$ dobimo, če $7$ napačno odštejemo ($9 - 7 = 2$), odgovor $x = -8$ pa, če napačno obrnemo predznak.

? Reši enačbo $\dfrac{x}{2} + \dfrac{x}{3} = 5$.
- $x = 1$
- $x = 30$
+ $x = 6$
> Pomnožimo s $6$: $3x + 2x = 30$, torej $5x = 30$ in $x = 6$. Če pozabimo pomnožiti desno stran, dobimo $x = 1$. Če ne delimo s $5$, dobimo $30$.

? Za katero vrednost parametra $a$ enačba $ax - 2 = 4 + 2x$ nima rešitve?
- $a = 0$
- $a = 6$
+ $a = 2$
- $a = -2$
> Enačbo preoblikujemo: $ax - 2x = 6$, torej $(a-2)x = 6$. Za $a = 2$ dobimo $0 \cdot x = 6$, kar nikoli ne velja. Za vsak drug $a$ je rešitev $x = \dfrac{6}{a-2}$.
