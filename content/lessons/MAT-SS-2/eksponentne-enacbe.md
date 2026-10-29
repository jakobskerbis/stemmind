---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Pri eksponentni funkciji $f(x) = a^x$ si spoznal, kako hitro raste (ali pada) količina, ki se v enakih časovnih korakih pomnoži z istim faktorjem. Do zdaj si računal v eno smer: poznal si eksponent in izračunal potenco, na primer $2^{10} = 1024$. V praksi pa nas pogosto zanima obratno vprašanje: **po kolikšnem času** se število bakterij poveča na $1024$-kratno vrednost? **Koliko** razpolovnih časov mora miniti, da od radioaktivne snovi ostane le osmina? V takih nalogah je neznanka v eksponentu.

Enačbam, v katerih neznanka nastopa v eksponentu, pravimo **eksponentne enačbe**. V tej lekciji se naučiš dveh osnovnih postopkov za njihovo reševanje: **enačenja osnov** in **uvedbe nove spremenljivke**. Pri tem boš potreboval pravila za računanje s potencami (tudi z racionalnimi eksponenti) in reševanje kvadratne enačbe, ki ju že poznaš.

## Razlaga

**1. Kaj je eksponentna enačba.** Eksponentna enačba je enačba, v kateri je neznanka v eksponentu potence. Primeri: $2^x = 32$, $\;3^{2x-1} = \dfrac{1}{27}$, $\;4^x - 3 \cdot 2^x - 4 = 0$. Enačba $x^2 = 9$ ni eksponentna, ker je neznanka v osnovi.

**2. Ključna lastnost.** Naj bo $a > 0$ in $a \ne 1$. Eksponentna funkcija $f(x) = a^x$ je za $a > 1$ naraščajoča, za $0 < a < 1$ pa padajoča. Zato vsako vrednost zavzame **natanko enkrat**. Iz tega sledi pravilo, na katerem temelji vse reševanje:

$$a^{u} = a^{v} \iff u = v \qquad (a > 0,\ a \ne 1).$$

Če sta obe strani enačbe potenci **z isto osnovo**, smemo izenačiti eksponenta. Pogoj $a \ne 1$ je pomemben: $1^5 = 1^7$, pa vendar $5 \ne 7$.

**3. Kdaj enačba nima rešitve.** Za $a > 0$ je potenca $a^x$ vedno pozitivna. Enačbe $2^x = -4$ ali $3^x = 0$ zato nimajo realne rešitve. To preveriš takoj, preden začneš računati.

**4. Enačenje osnov.** Obe strani zapišemo kot potenci iste osnove in izenačimo eksponenta. Pomagata ti tabela pogostih potenc in pravila za potence:

| Osnova | Potence |
|---|---|
| $2$ | $4 = 2^2$, $8 = 2^3$, $16 = 2^4$, $32 = 2^5$, $64 = 2^6$, $128 = 2^7$, $256 = 2^8$ |
| $3$ | $9 = 3^2$, $27 = 3^3$, $81 = 3^4$, $243 = 3^5$ |
| $5$ | $25 = 5^2$, $125 = 5^3$, $625 = 5^4$ |
| vsaka $a$ | $1 = a^0$, $\;\dfrac{1}{a^n} = a^{-n}$, $\;\sqrt[n]{a^m} = a^{\frac{m}{n}}$ |

Primer: $8^{x} = 4^{x+1}$. Ker je $8 = 2^3$ in $4 = 2^2$, dobimo $2^{3x} = 2^{2x+2}$, torej $3x = 2x + 2$ in $x = 2$.

**5. Izpostavljanje skupnega faktorja.** Če v enačbi nastopa **vsota ali razlika** potenc z isto osnovo, na primer $3^{x+1} - 3^{x-1} = 72$, osnov še ne moremo izenačiti. Vse člene zapišemo s potenco $3^x$: $3^{x+1} = 3 \cdot 3^x$ in $3^{x-1} = \dfrac{1}{3} \cdot 3^x$. Nato izpostavimo $3^x$:

$$3^x \left(3 - \frac{1}{3}\right) = 72 \;\Rightarrow\; 3^x \cdot \frac{8}{3} = 72 \;\Rightarrow\; 3^x = 27 = 3^3 \;\Rightarrow\; x = 3.$$

**6. Uvedba nove spremenljivke.** Kadar v enačbi nastopata $a^x$ in $a^{2x}$, ji pogosto lahko damo obliko kvadratne enačbe. Upoštevamo $a^{2x} = \left(a^x\right)^2$ in vpeljemo $t = a^x$. Ker je $a^x > 0$, mora biti tudi $t > 0$. Postopek:

1. Vse potence zapiši z $a^x$ (na primer $4^x = \left(2^x\right)^2$, $2^{x+1} = 2 \cdot 2^x$).
2. Vpelji $t = a^x$ z zahtevo $t > 0$.
3. Reši kvadratno enačbo za $t$.
4. **Zavrzi** rešitve $t \le 0$.
5. Za vsako sprejeto $t$ reši enačbo $a^x = t$ z enačenjem osnov.

**7. Enaki eksponenti, različni osnovi.** Če je $a^{u} = b^{u}$ za različni pozitivni osnovi $a$ in $b$, delimo z $b^u$ in dobimo $\left(\dfrac{a}{b}\right)^u = 1 = \left(\dfrac{a}{b}\right)^0$, zato je $u = 0$. Tako je rešitev enačbe $2^{x-3} = 5^{x-3}$ število $x = 3$.

**8. Preizkus.** Rešitev vedno vstavi v prvotno enačbo. Preizkus pri eksponentnih enačbah je navadno hiter, ker so potence majhna cela števila ali preprosti ulomki.

**9. Grafični pogled.** Rešitev enačbe $f(x) = g(x)$ je abscisa presečišča grafov funkcij $f$ in $g$. Rešitve enačbe $2^x = 8$ so torej abscise presečišč krivulje $y = 2^x$ in vodoravne premice $y = 8$; presečišče je pri $x = 3$. V interaktivni simulaciji spodaj (»Eksponentna enačba grafično«) lahko opazuješ, kako se presečišče premika, ko spreminjaš desno stran enačbe. Videl boš tudi, da premica $y = c$ z $c \le 0$ grafa ne seka. Enačbe, kot je $2^x = 5$, kjer desne strani ne moremo zapisati kot potenco z osnovo $2$ s preprostim eksponentom, imajo rešitev (graf jo pokaže blizu $x \approx 2{,}3$), natančno pa jih bomo znali zapisati šele v naslednji lekciji.

## Rešeni primeri

### Primer 1 (lažji)

Reši enačbi: a) $3^{2x-1} = \dfrac{1}{27}$, b) $4^{x} = 8\sqrt{2}$.

**Podatki:** enačba a) $3^{2x-1} = \dfrac{1}{27}$, enačba b) $4^{x} = 8\sqrt{2}$
**Iščemo:** rešitev $x$ vsake enačbe

:::formula
$a^{u} = a^{v} \iff u = v$ (za $a > 0$, $a \ne 1$); $\;\dfrac{1}{a^n} = a^{-n}$, $\;\sqrt{a} = a^{\frac{1}{2}}$, $\;(a^m)^n = a^{mn}$
:::

**Rešitev:**

1. a) Desno stran zapišemo s potenco števila $3$: $\dfrac{1}{27} = \dfrac{1}{3^3} = 3^{-3}$.
2. Dobimo $3^{2x-1} = 3^{-3}$, zato je $2x - 1 = -3$, $2x = -2$ in $x = -1$.
3. Preizkus: $3^{2 \cdot (-1) - 1} = 3^{-3} = \dfrac{1}{27}$. Ujema se.
4. b) Obe strani zapišemo s potenco števila $2$: $4^x = \left(2^2\right)^x = 2^{2x}$ in $8\sqrt{2} = 2^3 \cdot 2^{\frac{1}{2}} = 2^{\frac{7}{2}}$.
5. Iz $2^{2x} = 2^{\frac{7}{2}}$ sledi $2x = \dfrac{7}{2}$ in $x = \dfrac{7}{4}$.
6. Preizkus: $4^{\frac{7}{4}} = 2^{\frac{7}{2}} \approx 11{,}31$ in $8\sqrt{2} \approx 8 \cdot 1{,}414 \approx 11{,}31$. Ujema se.
7. Odgovor: rešitev enačbe a) je $x = -1$, rešitev enačbe b) je $x = \dfrac{7}{4}$.

### Primer 2 (srednji)

Reši enačbo $2^{x+2} + 2^{x-1} = 36$.

**Podatki:** enačba $2^{x+2} + 2^{x-1} = 36$
**Iščemo:** rešitev $x$

:::formula
$a^{x+n} = a^n \cdot a^x$; izpostavimo skupni faktor $a^x$, nato $a^{u} = a^{v} \iff u = v$
:::

**Rešitev:**

1. Člene zapišemo s potenco $2^x$: $2^{x+2} = 4 \cdot 2^x$ in $2^{x-1} = \dfrac{1}{2} \cdot 2^x$.
2. Izpostavimo $2^x$: $2^x \left(4 + \dfrac{1}{2}\right) = 36$, torej $2^x \cdot \dfrac{9}{2} = 36$.
3. Delimo z $\dfrac{9}{2}$: $2^x = 36 \cdot \dfrac{2}{9} = 8$.
4. Ker je $8 = 2^3$, je $x = 3$.
5. Preizkus: $2^{5} + 2^{2} = 32 + 4 = 36$. Ujema se.
6. Odgovor: rešitev enačbe je $x = 3$.

### Primer 3 (težji)

Reši enačbo $9^{x} - 2 \cdot 3^{x+1} - 27 = 0$.

**Podatki:** enačba $9^{x} - 2 \cdot 3^{x+1} - 27 = 0$
**Iščemo:** vse realne rešitve $x$

:::formula
$9^x = \left(3^x\right)^2$, $\;3^{x+1} = 3 \cdot 3^x$; nova spremenljivka $t = 3^x$, $t > 0$; $\;t_{1,2} = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
:::

**Rešitev:**

1. Vse potence zapišemo s $3^x$: $9^x = \left(3^2\right)^x = \left(3^x\right)^2$ in $2 \cdot 3^{x+1} = 2 \cdot 3 \cdot 3^x = 6 \cdot 3^x$.
2. Enačba se glasi $\left(3^x\right)^2 - 6 \cdot 3^x - 27 = 0$.
3. Vpeljemo $t = 3^x$, kjer je $t > 0$: $\;t^2 - 6t - 27 = 0$.
4. Rešimo kvadratno enačbo. Diskriminanta je $D = 36 + 108 = 144$, zato je $t_{1,2} = \dfrac{6 \pm 12}{2}$, torej $t_1 = 9$ in $t_2 = -3$. (Tudi razcep $(t - 9)(t + 3) = 0$ da isto.)
5. Rešitev $t_2 = -3$ zavržemo, ker $3^x$ ne more biti negativno.
6. Iz $3^x = 9 = 3^2$ dobimo $x = 2$.
7. Preizkus: $9^2 - 2 \cdot 3^3 - 27 = 81 - 54 - 27 = 0$. Ujema se.
8. Odgovor: enačba ima eno rešitev, $x = 2$.

## Pogoste napake

- **Izenačevanje eksponentov pri različnih osnovah.** Iz $2^x = 4^{x-1}$ nekateri sklepajo $x = x - 1$ in zaključijo, da rešitve ni. Eksponenta smeš izenačiti le, ko sta osnovi enaki. Pravilno: $4^{x-1} = 2^{2x-2}$, zato je $x = 2x - 2$ in $x = 2$ (preizkus: $2^2 = 4 = 4^1$).
- **Napačno »razbijanje« potence.** $2^{x+3} = 2^x + 2^3$ ni res, saj vsota v eksponentu pomeni **produkt** potenc: $2^{x+3} = 2^3 \cdot 2^x = 8 \cdot 2^x$. Podobno $2^x + 2^x$ ni $4^x$, ampak $2 \cdot 2^x = 2^{x+1}$.
- **Koeficient vpleten v osnovo.** $2 \cdot 3^x$ ni enako $6^x$, ker se potencira le osnova $3$, faktor $2$ pa ne. Preizkus z $x = 2$: $2 \cdot 9 = 18$, $6^2 = 36$. Koeficient pusti pred potenco in ga po potrebi izpostavi ali z njim deli.
- **Sprejeta negativna vrednost nove spremenljivke.** Pri uvedbi $t = a^x$ dobiš iz kvadratne enačbe včasih $t < 0$. Enačba $3^x = -3$ nima rešitve, ker je $3^x$ vedno pozitivno. Ob uvedbi nove spremenljivke vedno zapiši pogoj $t > 0$ in neustrezne vrednosti zavrzi.
- **Napačen predznak pri obratni vrednosti.** $\dfrac{1}{8} = 2^{3}$ ali $\dfrac{1}{8} = 2^{\frac{1}{3}}$ je napačno. Obratna vrednost pomeni negativni eksponent: $\dfrac{1}{8} = 2^{-3}$, koren pa ulomek v eksponentu: $\sqrt[3]{2} = 2^{\frac{1}{3}}$.

## Povzetek

- Eksponentna enačba ima neznanko v eksponentu.
- Za $a > 0$, $a \ne 1$ velja $a^{u} = a^{v} \iff u = v$ (enačenje osnov).
- Ker je $a^x > 0$, enačbe $a^x = c$ s $c \le 0$ nimajo rešitve.
- Pomagaj si s $\dfrac{1}{a^n} = a^{-n}$, $\sqrt[n]{a^m} = a^{\frac{m}{n}}$, $(a^m)^n = a^{mn}$, $a^{x+n} = a^n \cdot a^x$.
- Pri vsoti potenc z isto osnovo izpostavi skupni faktor $a^x$.
- Če nastopata $a^{2x}$ in $a^x$, vpelji $t = a^x$ s pogojem $t > 0$ in reši kvadratno enačbo.
- Iz $a^u = b^u$ za različni pozitivni osnovi sledi $u = 0$.
- Vsako rešitev preveri s preizkusom v prvotni enačbi.

## Drugače: Na sliki

Predstavljaj si graf funkcije $y = 2^x$ in nekaj njegovih točk:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|---|---|
| $2^x$ | $\frac{1}{4}$ | $\frac{1}{2}$ | $1$ | $2$ | $4$ | $8$ | $16$ |

Reševati enačbo $2^x = 8$ pomeni na grafu poiskati točko, ki ima **višino** $8$, in prebrati njeno **absciso**. Nariši vodoravno premico $y = 8$: krivuljo seka natanko v eni točki, $(3, 8)$, zato je $x = 3$. Ker krivulja ves čas raste, presečišče ne more biti več kot eno; ker krivulja leži nad osjo $x$, premica $y = -4$ krivulje sploh ne seka, zato enačba $2^x = -4$ nima rešitve.

Pri uvedbi nove spremenljivke si lahko predstavljaš dva koraka: najprej poiščeš višine $t$, ki rešijo kvadratno enačbo, nato pa za vsako pozitivno višino narišeš vodoravno premico in prebereš abscisi presečišč. Negativne višine na grafu sploh ne obstajajo. V interaktivni simulaciji spodaj premikaj vodoravno premico in opazuj, kje seka krivuljo.

## Drugače: Iz vsakdanjega življenja

**Bakterije.** V hranilni raztopini se število bakterij vsakih $20$ minut podvoji. Na začetku jih je $500$. Kdaj jih bo $512\,000$? Po $n$ podvojitvah jih je $500 \cdot 2^n$, zato rešujemo $500 \cdot 2^n = 512\,000$. Delimo s $500$: $2^n = 1024 = 2^{10}$, torej $n = 10$. Deset podvojitev traja $10 \cdot 20\,\text{min} = 200\,\text{min}$, kar je $3$ ure in $20$ minut.

**Razpolovni čas.** Radioaktivni izotop joda ima razpolovni čas približno $8$ dni: vsakih $8$ dni ostane polovica snovi. Po koliko dneh ostane $\dfrac{1}{8}$ začetne količine? Rešujemo $\left(\dfrac{1}{2}\right)^n = \dfrac{1}{8} = \left(\dfrac{1}{2}\right)^3$, torej $n = 3$ razpolovne dobe, kar je približno $24$ dni.

**Zgibanje papirja.** Ko list prepogneš, se debelina podvoji. Kolikokrat ga moraš prepogniti, da bo $64$ plasti? Iz $2^n = 64 = 2^6$ dobiš $6$-krat. V vseh treh zgodbah je neznanka število korakov, torej eksponent.

## Drugače: Korak za korakom s številkami

**Reši $5^{2x} - 30 \cdot 5^{x} + 125 = 0$.**

1. Opazimo, da je $5^{2x} = \left(5^x\right)^2$. V enačbi nastopata le $\left(5^x\right)^2$ in $5^x$, kar je znak za novo spremenljivko.
2. Vpeljemo $t = 5^x$, $t > 0$. Enačba postane $t^2 - 30t + 125 = 0$.
3. Diskriminanta: $D = (-30)^2 - 4 \cdot 1 \cdot 125 = 900 - 500 = 400$, $\sqrt{D} = 20$.
4. Rešitvi: $t_1 = \dfrac{30 + 20}{2} = 25$ in $t_2 = \dfrac{30 - 20}{2} = 5$. Obe sta pozitivni, zato obe obdržimo.
5. Vrnemo se k $x$: iz $5^x = 25 = 5^2$ dobimo $x_1 = 2$, iz $5^x = 5 = 5^1$ dobimo $x_2 = 1$.
6. Preizkus za $x = 2$: $625 - 30 \cdot 25 + 125 = 625 - 750 + 125 = 0$.
7. Preizkus za $x = 1$: $25 - 30 \cdot 5 + 125 = 25 - 150 + 125 = 0$.
8. Rešitvi enačbe sta $x_1 = 2$ in $x_2 = 1$.

Opazi, da je kvadratna enačba za $t$ le vmesni korak. Dokler ne izračunaš $x$, naloga ni končana.

## Drugače: Bolj natančno

**Zakaj smemo izenačiti eksponenta.** Naj bo $a > 1$ in $u < v$. Potem je $v - u > 0$ in $a^{v-u} > 1$, ker je potenca števila, večjega od $1$, s pozitivnim eksponentom večja od $1$. Zato je $a^v = a^u \cdot a^{v-u} > a^u$. Različna eksponenta torej dasta različni potenci. Za $0 < a < 1$ je sklep enak, le neenakost se obrne. Iz $a^u = a^v$ zato sledi $u = v$. Ta lastnost se imenuje **injektivnost** eksponentne funkcije. Za $a = 1$ odpove, ker je $1^x = 1$ za vsak $x$.

**Obstoj rešitve.** Zaloga vrednosti funkcije $a^x$ ($a > 0$, $a \ne 1$) je interval $(0, \infty)$. Zato ima enačba $a^x = c$ za vsak $c > 0$ natanko eno rešitev, za $c \le 0$ pa nobene. Z enačenjem osnov jo najdemo le, če je $c$ »lepa« potenca števila $a$; za ostale pozitivne $c$ rešitev obstaja, a jo zapišemo z novim pojmom, ki ga spoznaš v naslednji lekciji.

**Enačbe z $a^x$ in $a^{-x}$.** Enačbo $2^x + 2^{-x} = \dfrac{5}{2}$ rešimo z $t = 2^x$: $t + \dfrac{1}{t} = \dfrac{5}{2}$. Pomnožimo z $2t$ (smemo, ker je $t > 0$): $2t^2 - 5t + 2 = 0$, torej $t = 2$ ali $t = \dfrac{1}{2}$ in $x = 1$ ali $x = -1$.

## Preveri se

? Reši enačbo $2^{x-1} = 16$.
- $x = 3$
- $x = 4$
+ $x = 5$
- $x = 8$
> $16 = 2^4$, zato je $x - 1 = 4$ in $x = 5$. Preizkus: $2^4 = 16$.

? Reši enačbo $5^{x} = \dfrac{1}{25}$.
- $x = 2$
+ $x = -2$
- $x = \dfrac{1}{2}$
- $x = -5$
> $\dfrac{1}{25} = \dfrac{1}{5^2} = 5^{-2}$, zato je $x = -2$. Obratna vrednost pomeni negativni eksponent.

? Koliko rešitev ima enačba $3^x = -9$?
+ nobene
- eno, $x = -2$
- eno, $x = 2$
- dve
> Potenca s pozitivno osnovo je vedno pozitivna, zato $3^x$ ne more biti $-9$. Enačba nima rešitve.

? Reši enačbo $4^x - 3 \cdot 2^x - 4 = 0$.
- $x = 4$ ali $x = -1$
+ $x = 2$
- $x = 2$ ali $x = 0$
- enačba nima rešitve
> Z $t = 2^x > 0$ dobimo $t^2 - 3t - 4 = 0$, torej $t = 4$ ali $t = -1$. Vrednost $t = -1$ zavržemo, iz $2^x = 4$ pa sledi $x = 2$.
