---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz prejšnjih razredov že znaš, da je množenje skrajšan zapis za ponavljajoče se seštevanje: $4 + 4 + 4 = 3 \cdot 4$. Ploščino kvadrata zapišeš kot $a \cdot a = a^2$, prostornino kocke pa kot $a \cdot a \cdot a = a^3$.

Kaj pa, če moraš isto število zmnožiti sámo s seboj petkrat, desetkrat ali stokrat? Zapis $2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2$ je dolg in nepregleden. **Potenca** je kratek zapis za ponavljajoče se množenje, tako kot je množenje kratek zapis za ponavljajoče se seštevanje.

Potence uporabljamo povsod, kjer se nekaj hitro množi: pri razmnoževanju bakterij, širjenju verižnih sporočil, pri velikostih datotek v računalniku (kilobajt, megabajt) in pri zapisu zelo velikih števil v naravoslovju.

## Razlaga

**1. Zapis.** Produkt $n$ enakih faktorjev $a$ zapišemo kot potenco:

$$a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ faktorjev}}$$

- $a$ je **osnova** (število, ki ga množimo samo s seboj),
- $n$ je **eksponent** (pove, koliko faktorjev je v produktu); je naravno število,
- $a^n$ je **potenca**, njena vrednost pa je **vrednost potence**.

Primer: $5^3 = 5 \cdot 5 \cdot 5 = 125$. Beremo: »pet na tretjo«. Osnova je $5$, eksponent je $3$.

Posebna primera: $a^2$ beremo »a na kvadrat«, $a^3$ pa »a na kub«. Potenca z eksponentom $1$ je kar osnova: $a^1 = a$.

**2. Računanje vrednosti potence.** Osnovo zapišemo tolikokrat, kot pove eksponent, in zmnožimo. Pri tem eksponent **ni** faktor: $2^4$ ni $2 \cdot 4$, ampak $2 \cdot 2 \cdot 2 \cdot 2 = 16$.

**3. Potence z negativno osnovo.** Negativno osnovo zapišemo v oklepaju.

- $(-2)^3 = (-2)(-2)(-2) = -8$ (liho mnogo negativnih faktorjev, rezultat je negativen),
- $(-2)^4 = (-2)(-2)(-2)(-2) = 16$ (sodo mnogo negativnih faktorjev, rezultat je pozitiven).

Pozor: $-2^4$ pomeni $-(2^4) = -16$. Brez oklepaja je minus samo predznak pred potenco.

**4. Množenje potenc z enako osnovo.** Ko množimo potenci z isto osnovo, osnovo prepišemo, eksponenta pa seštejemo:

$$a^m \cdot a^n = a^{m+n}$$

Primer: $3^2 \cdot 3^4 = 3^{2+4} = 3^6$.

**5. Deljenje potenc z enako osnovo.** Ko delimo potenci z isto osnovo (in je $m > n$, $a \neq 0$), osnovo prepišemo, eksponenta pa odštejemo:

$$a^m : a^n = a^{m-n}$$

Primer: $5^7 : 5^3 = 5^{7-3} = 5^4$.

**6. Kdaj pravili veljata.** Obe pravili veljata samo, če sta osnovi **enaki**. Izraza $2^3 \cdot 3^4$ s tema pravilama ne moremo skrajšati v eno potenco.

## Rešeni primeri

### Primer 1: zapis in vrednost potence

a) Zapiši $7 \cdot 7 \cdot 7 \cdot 7$ kot potenco.
b) Izračunaj vrednost potence $3^4$.
c) Izračunaj $(-2)^5$.

**Rešitev:**

a) Faktor $7$ se pojavi štirikrat, zato je osnova $7$, eksponent pa $4$: $7^4$.

b) Zapišemo kot produkt: $3^4 = 3 \cdot 3 \cdot 3 \cdot 3$. Računamo po korakih, da se ne zmotimo: $3 \cdot 3 = 9$, $9 \cdot 3 = 27$, $27 \cdot 3 = 81$. Torej $3^4 = 81$.

c) Osnova je negativna, eksponent pa lih ($5$), zato bo rezultat negativen. Absolutna vrednost je $2^5 = 32$, zato je $(-2)^5 = -32$.

### Primer 2: pravili za množenje in deljenje

Poenostavi in nato izračunaj:

a) $2^3 \cdot 2^4$
b) $5^6 : 5^4$
c) $a^5 \cdot a^2$

**Rešitev:**

a) Osnovi sta enaki ($2$), zato eksponenta seštejemo: $2^3 \cdot 2^4 = 2^{3+4} = 2^7$. Vrednost: $2^7 = 128$.

*Preverjanje:* $2^3 = 8$, $2^4 = 16$, $8 \cdot 16 = 128$. ✓

b) Osnovi sta enaki ($5$), zato eksponenta odštejemo: $5^6 : 5^4 = 5^{6-4} = 5^2 = 25$.

*Preverjanje:* $5^6 = 15\,625$, $5^4 = 625$, $15\,625 : 625 = 25$. ✓

c) Osnova je $a$ pri obeh potencah, zato je $a^5 \cdot a^2 = a^{5+2} = a^7$.

### Primer 3: sestavljen račun in besedilna naloga

a) Poenostavi: $\dfrac{3^2 \cdot 3^5}{3^4}$ in izračunaj vrednost.

b) Bakterija se vsako uro podvoji. Na začetku je ena bakterija. Koliko jih je po $6$ urah? Koliko jih je po $9$ urah, če veš, da jih je po $6$ urah toliko, kot si izračunal?

**Rešitev:**

a)

1. Najprej poenostavimo števec, saj je osnova povsod $3$: $3^2 \cdot 3^5 = 3^{2+5} = 3^7$.
2. Nato delimo: $3^7 : 3^4 = 3^{7-4} = 3^3$.
3. Vrednost: $3^3 = 3 \cdot 3 \cdot 3 = 27$.

*Preverjanje:* $3^7 = 2187$, $3^4 = 81$, $2187 : 81 = 27$. ✓

b)

1. Po $1$ uri: $2$ bakteriji, po $2$ urah: $2 \cdot 2 = 2^2 = 4$, po $3$ urah: $2^3 = 8$. Opazimo: po $n$ urah jih je $2^n$.
2. Po $6$ urah: $2^6 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 64$.
3. Za $9$ ur lahko uporabimo pravilo za množenje: v naslednjih $3$ urah se število še $3$-krat podvoji, torej $2^6 \cdot 2^3 = 2^{6+3} = 2^9$.
4. Vrednost: $2^9 = 64 \cdot 8 = 512$.
5. **Odgovor.** Po $6$ urah je $64$ bakterij, po $9$ urah pa $512$.

## Pogoste napake

- **Eksponent obravnavaš kot faktor.** $2^4$ ni $2 \cdot 4 = 8$, ampak $2 \cdot 2 \cdot 2 \cdot 2 = 16$.
- **Pri množenju potenc množiš eksponente.** $a^3 \cdot a^2 = a^5$, ne $a^6$. Eksponenta se *seštejeta*.
- **Pri deljenju potenc deliš eksponente.** $a^6 : a^2 = a^4$, ne $a^3$. Eksponenta se *odštejeta*.
- **Množiš tudi osnovi.** $2^3 \cdot 2^4 \neq 4^7$. Osnova ostane ista: $2^7$.
- **Napačna uporaba pravila za različne osnove.** $2^3 \cdot 3^2$ ne moreš zapisati kot $6^5$ ali $2^5$. Pravili veljata le za enake osnove.
- **Predznak pri negativni osnovi.** $(-3)^2 = 9$, vendar $-3^2 = -9$. Oklepaj je pomemben.

## Povzetek

- Potenca $a^n$ je produkt $n$ enakih faktorjev $a$. Osnova je $a$, eksponent je $n$.
- $a^1 = a$, $a^2$ je »a na kvadrat«, $a^3$ je »a na kub«.
- Pri negativni osnovi je rezultat pozitiven za sod eksponent in negativen za lih eksponent. Negativno osnovo vedno zapiši v oklepaju.
- Množenje potenc z enako osnovo: $a^m \cdot a^n = a^{m+n}$.
- Deljenje potenc z enako osnovo: $a^m : a^n = a^{m-n}$ (za $m > n$).
- Pravili veljata le, če sta osnovi enaki.

## Drugače: Na sliki

Potence z eksponentom $2$ in $3$ imajo geometrijski pomen.

- $5^2$: kvadrat s stranico $5$ je sestavljen iz $5$ vrstic po $5$ ploščic, to je $25$ ploščic. Zato pravimo »na kvadrat«.
- $3^3$: kocka z robom $3$ je sestavljena iz $3$ plasti, v vsaki plasti je $3 \cdot 3 = 9$ kockic, skupaj $27$ kockic. Zato pravimo »na kub«.

Poglej še množenje potenc. Zapiši $2^3 \cdot 2^2$ v razširjeni obliki:

$$\underbrace{2 \cdot 2 \cdot 2}_{3} \cdot \underbrace{2 \cdot 2}_{2} = \underbrace{2 \cdot 2 \cdot 2 \cdot 2 \cdot 2}_{5} = 2^5$$

Faktorje samo »sestaviš v eno vrsto«. Zato je število faktorjev $3 + 2 = 5$. Eksponenta se seštejeta, ker seštevaš števili faktorjev.

## Drugače: Iz vsakdanjega življenja

**Verižno sporočilo.** Prejmeš sporočilo in ga posreduješ trem prijateljem. Vsak od njih ga spet pošlje trem novim osebam in tako naprej.

- V 1. krogu ga prejme $3$ oseb: $3^1 = 3$.
- V 2. krogu ga prejme $3 \cdot 3 = 3^2 = 9$ oseb.
- V 3. krogu ga prejme $3^3 = 27$ oseb.
- V 4. krogu ga prejme $3^4 = 81$ oseb.

Število narašča zelo hitro, ker se vsakič pomnoži s $3$. Prav zato potence uporabljamo pri opisu hitrega širjenja, na primer bakterij ali govoric.

**Deljenje.** Če je v 5. krogu $3^5 = 243$ oseb, v 3. krogu pa $3^3 = 27$ oseb, je 5. krog večji za faktor $3^5 : 3^3 = 3^2 = 9$. Res: $243 : 27 = 9$.

## Drugače: Korak za korakom s številkami

Poglej, kako rastejo potence števila $2$:

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
|---|---|---|---|---|---|---|---|---|---|---|
| $2^n$ | $2$ | $4$ | $8$ | $16$ | $32$ | $64$ | $128$ | $256$ | $512$ | $1024$ |

Vsak naslednji člen dobiš tako, da prejšnjega pomnožiš z $2$.

Preverimo pravili s tabelo:

- **Množenje.** $2^3 \cdot 2^4$: iz tabele $8 \cdot 16 = 128$, in res $2^{3+4} = 2^7 = 128$. ✓
- **Deljenje.** $2^9 : 2^5$: iz tabele $512 : 32 = 16$, in res $2^{9-5} = 2^4 = 16$. ✓

Postopek pri nalogi:

1. Preveri, ali sta osnovi enaki.
2. Če množiš, eksponenta seštej, če deliš, ju odštej.
3. Osnovo prepiši.
4. Po potrebi izračunaj vrednost potence.

## Drugače: Bolj natančno

**Zakaj velja $a^m \cdot a^n = a^{m+n}$?** Potenci razpišemo na faktorje. Naj bo na primer $m = 3$ in $n = 2$:

$$a^3 \cdot a^2 = (a \cdot a \cdot a) \cdot (a \cdot a) = a \cdot a \cdot a \cdot a \cdot a = a^5$$

Ker je množenje asociativno, oklepaje lahko opustimo. Na koncu je $3 + 2 = 5$ faktorjev $a$. Enako velja za poljubna naravna $m$ in $n$: ko pomnožimo $m$ faktorjev z $n$ faktorji, dobimo $m + n$ faktorjev.

**Zakaj velja $a^m : a^n = a^{m-n}$ za $m > n$?** Naj bo $a \neq 0$, $m = 5$, $n = 2$:

$$a^5 : a^2 = \frac{a \cdot a \cdot a \cdot a \cdot a}{a \cdot a}$$

Dva faktorja $a$ v imenovalcu se pokrajšata z dvema v števcu. Ostanejo $5 - 2 = 3$ faktorji: $a \cdot a \cdot a = a^3$.

Pogoj $a \neq 0$ je potreben, ker z ničlo ne smemo deliti. Pogoj $m > n$ je potreben, da je razlika eksponentov spet naravno število. Primere z $m \le n$ boš spoznal pozneje.

## Preveri se

? Kolikšna je vrednost potence $4^3$?
- $12$
+ $64$
- $81$
> $4^3 = 4 \cdot 4 \cdot 4 = 16 \cdot 4 = 64$. Rezultat $12$ dobiš, če eksponent napačno obravnavaš kot faktor ($4 \cdot 3$), rezultat $81$ pa, če zamenjaš osnovo in eksponent ($3^4$).

? Kako zapišemo produkt $2^5 \cdot 2^3$ kot eno potenco?
- $2^{15}$
- $4^8$
+ $2^8$
> Osnovi sta enaki, zato osnovo prepišemo, eksponenta pa seštejemo: $5 + 3 = 8$. Množenje eksponentov ($2^{15}$) ali množenje osnov ($4^8$) je napačno.

? Kako zapišemo količnik $7^9 : 7^4$ kot eno potenco?
- $7^{13}$
- $7^{36}$
+ $7^5$
- $1^5$
> Pri deljenju potenc z enako osnovo osnovo prepišemo, eksponenta pa odštejemo: $9 - 4 = 5$. Seštevanje eksponentov ($7^{13}$) velja pri množenju, osnove pa pri deljenju ne delimo.
