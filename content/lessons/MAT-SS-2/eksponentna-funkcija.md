---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Pri potencah z racionalnimi eksponenti si spoznal, da imajo izrazi, kot so $2^{\frac{1}{2}} = \sqrt{2}$, $8^{\frac{2}{3}} = 4$ in $4^{-\frac{1}{2}} = \dfrac{1}{2}$, natančno določen pomen, če je osnova pozitivna. Pri kvadratni funkciji $f(x) = x^2$ je spremenljivka $x$ v **osnovi**, eksponent pa je stalen. Kaj pa, če zamenjamo vlogi: osnova je stalna, spremenljivka pa je v **eksponentu**?

Tako dobimo **eksponentno funkcijo**, na primer $f(x) = 2^x$. Opisuje pojave, pri katerih se količina v enakih časovnih presledkih **pomnoži z istim faktorjem**: razmnoževanje bakterij, širjenje novice po družbenih omrežjih, rast prihrankov z obrestmi, razpad radioaktivnih snovi in izločanje zdravila iz krvi. Za eksponentno rast je značilno, da je na začetku neopazna, potem pa postane izjemno hitra. V tej lekciji spoznaš graf in lastnosti eksponentne funkcije. Kako osnova vpliva na obliko grafa, si oglej v interaktivni simulaciji spodaj (»Eksponentna funkcija«).

## Razlaga

**1. Definicija.** Eksponentna funkcija je funkcija s predpisom

$$f(x) = a^x, \qquad a > 0,\ a \ne 1.$$

Število $a$ je **osnova**. Pogoj $a > 0$ potrebujemo, ker potence z negativno osnovo in racionalnim eksponentom niso definirane (spomni se protislovja pri $(-8)^{\frac{2}{6}}$). Pri $a = 1$ bi bila funkcija konstantna, $1^x = 1$, kar ni zanimivo, zato tudi to osnovo izločimo.

**2. Tabela vrednosti.** Izračunajmo nekaj vrednosti funkcij $f(x) = 2^x$ in $g(x) = \left(\dfrac{1}{2}\right)^x$:

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $2^x$ | $\frac{1}{8}$ | $\frac{1}{4}$ | $\frac{1}{2}$ | $1$ | $2$ | $4$ | $8$ |
| $\left(\frac{1}{2}\right)^x$ | $8$ | $4$ | $2$ | $1$ | $\frac{1}{2}$ | $\frac{1}{4}$ | $\frac{1}{8}$ |

Pri $2^x$ se vrednost ob povečanju $x$ za $1$ vsakič **podvoji**, pri $\left(\frac{1}{2}\right)^x$ pa **razpolovi**. Vrednosti so vedno pozitivne, tudi pri negativnih $x$: $2^{-3} = \dfrac{1}{8}$.

**3. Lastnosti funkcije $f(x) = a^x$.**

| Lastnost | $a > 1$ | $0 < a < 1$ |
|---|---|---|
| definicijsko območje | $\mathbb{R}$ | $\mathbb{R}$ |
| zaloga vrednosti | $(0, \infty)$ | $(0, \infty)$ |
| monotonost | strogo naraščajoča | strogo padajoča |
| presečišče z osjo $y$ | $(0, 1)$ | $(0, 1)$ |
| ničle | nima | nima |
| vodoravna asimptota | $y = 0$, ko gre $x \to -\infty$ | $y = 0$, ko gre $x \to \infty$ |
| omejenost | navzdol omejena z $0$, navzgor neomejena | navzdol omejena z $0$, navzgor neomejena |

Vsak graf gre skozi točki $(0, 1)$ in $(1, a)$, ker je $a^0 = 1$ in $a^1 = a$. Os $x$ (premica $y = 0$) je **vodoravna asimptota**: graf se ji poljubno približa, a je nikoli ne doseže.

**4. Vpliv osnove.** Pri $a > 1$ je graf za $x > 0$ tem strmejši, čim večja je osnova: $3^x$ raste hitreje kot $2^x$. Za $x < 0$ je obratno, tam je $3^x$ pod $2^x$. Pri $0 < a < 1$ velja zrcalno: za $x < 0$ je graf tem strmejši, čim bližje $0$ je osnova.

**5. Zrcaljenje.** Ker je $\left(\dfrac{1}{a}\right)^x = a^{-x}$, je graf funkcije $y = \left(\dfrac{1}{a}\right)^x$ zrcalna slika grafa $y = a^x$ čez os $y$. To vidiš tudi v tabeli zgoraj: vrstici sta zrcalni.

**6. Število $e$.** Posebej pomembna osnova je število $e \approx 2{,}718$, ki ga imenujemo **Eulerjevo število**. Funkcijo $f(x) = e^x$ imenujemo **naravna eksponentna funkcija**. Ker je $2 < e < 3$, leži njen graf med grafoma $2^x$ in $3^x$.

**7. Premiki grafa.** Iz grafa $y = a^x$ dobimo grafe sorodnih funkcij:

- $y = a^x + q$: graf premaknemo za $q$ v smeri osi $y$; asimptota postane $y = q$, zaloga vrednosti $(q, \infty)$.
- $y = a^{x - p}$: graf premaknemo za $p$ v smeri osi $x$ (pri $p > 0$ v desno); asimptota ostane $y = 0$.
- $y = -a^x$: graf prezrcalimo čez os $x$; zaloga vrednosti postane $(-\infty, 0)$.

**8. Primerjanje potenc.** Ker je funkcija pri $a > 1$ strogo naraščajoča, iz $x_1 < x_2$ sledi $a^{x_1} < a^{x_2}$. Pri $0 < a < 1$ je strogo padajoča, zato iz $x_1 < x_2$ sledi $a^{x_1} > a^{x_2}$. Tako lahko potence z isto osnovo primerjamo brez računanja.

## Rešeni primeri

### Primer 1 (lažji)

Za funkcijo $f(x) = 3^x$ izračunaj $f(-2)$, $f(0)$, $f\!\left(\dfrac{1}{2}\right)$ in $f(2)$. Ali je funkcija naraščajoča ali padajoča? Kje seka os $y$?

**Podatki:** $f(x) = 3^x$, osnova $a = 3$, vrednosti $x = -2$, $x = 0$, $x = \dfrac{1}{2}$, $x = 2$
**Iščemo:** funkcijske vrednosti, monotonost in presečišče z osjo $y$

:::formula
$a^{-n} = \dfrac{1}{a^n}$, $\;a^0 = 1$, $\;a^{\frac{1}{2}} = \sqrt{a}$; pri $a > 1$ je $a^x$ naraščajoča.
:::

**Rešitev:**

1. $f(-2) = 3^{-2} = \dfrac{1}{3^2} = \dfrac{1}{9}$.
2. $f(0) = 3^0 = 1$.
3. $f\!\left(\dfrac{1}{2}\right) = 3^{\frac{1}{2}} = \sqrt{3} \approx 1{,}73$.
4. $f(2) = 3^2 = 9$.
5. Osnova $a = 3$ je večja od $1$, zato je funkcija strogo naraščajoča. To potrjujejo tudi vrednosti: $\dfrac{1}{9} < 1 < 1{,}73 < 9$.
6. Odgovor: $f(-2) = \dfrac{1}{9}$, $f(0) = 1$, $f\!\left(\dfrac{1}{2}\right) = \sqrt{3} \approx 1{,}73$ in $f(2) = 9$. Funkcija je naraščajoča in seka os $y$ v točki $(0, 1)$.

### Primer 2 (srednji)

Brez računala ugotovi, katero število je večje: a) $2^{0{,}7}$ ali $2^{0{,}4}$; b) $0{,}3^{-1{,}2}$ ali $0{,}3^{-0{,}8}$; c) $5^{-0{,}1}$ ali $1$.

**Podatki:** pari števil $2^{0{,}7}$ in $2^{0{,}4}$; $0{,}3^{-1{,}2}$ in $0{,}3^{-0{,}8}$; $5^{-0{,}1}$ in $1$
**Iščemo:** večje število v vsakem paru

:::formula
Pri $a > 1$: $x_1 < x_2 \Rightarrow a^{x_1} < a^{x_2}$. Pri $0 < a < 1$: $x_1 < x_2 \Rightarrow a^{x_1} > a^{x_2}$. Velja $a^0 = 1$.
:::

**Rešitev:**

1. a) Osnova $2 > 1$, funkcija $2^x$ narašča. Ker je $0{,}4 < 0{,}7$, je $2^{0{,}4} < 2^{0{,}7}$.
2. b) Osnova $0{,}3$ je med $0$ in $1$, funkcija $0{,}3^x$ pada. Ker je $-1{,}2 < -0{,}8$, je $0{,}3^{-1{,}2} > 0{,}3^{-0{,}8}$.
3. c) Število $1$ zapišemo kot $5^0$. Osnova $5 > 1$, funkcija narašča, in ker je $-0{,}1 < 0$, je $5^{-0{,}1} < 5^0 = 1$.
4. Preverjanje z računalom: $2^{0{,}7} \approx 1{,}62$ in $2^{0{,}4} \approx 1{,}32$; $0{,}3^{-1{,}2} \approx 4{,}24$ in $0{,}3^{-0{,}8} \approx 2{,}62$; $5^{-0{,}1} \approx 0{,}85$.
5. Odgovor: večja so števila $2^{0{,}7}$, $0{,}3^{-1{,}2}$ in $1$.

### Primer 3 (težji)

Dana je funkcija $g(x) = 2^{x+1} - 4$. Določi njeno definicijsko območje, zalogo vrednosti, asimptoto in presečišče z osjo $y$. Pokaži, da je $x = 1$ njena ničla, in pojasni, zakaj druge ničle nima. Za katere $x$ je funkcija negativna?

**Podatki:** $g(x) = 2^{x+1} - 4$, osnova $a = 2$, premik za $1$ v levo in za $4$ navzdol, kandidat za ničlo $x = 1$
**Iščemo:** definicijsko območje, zalogo vrednosti, asimptoto, presečišče z osjo $y$, ničle in območje, kjer je $g(x) < 0$

:::formula
Graf $y = a^{x-p} + q$ dobimo iz $y = a^x$ s premikom za $p$ po osi $x$ in za $q$ po osi $y$; asimptota $y = q$, zaloga vrednosti $(q, \infty)$.
:::

**Rešitev:**

1. Zapis $2^{x+1} = 2^{x-(-1)}$ pomeni premik grafa $y = 2^x$ za $1$ v **levo**, člen $-4$ pa premik za $4$ **navzdol**.
2. Definicijsko območje: $\mathbb{R}$ (potenco $2^{x+1}$ lahko izračunamo za vsak $x$).
3. Ker je $2^{x+1} > 0$, je $g(x) > -4$. Zaloga vrednosti je $(-4, \infty)$, vodoravna asimptota je premica $y = -4$.
4. Presečišče z osjo $y$: $g(0) = 2^1 - 4 = -2$, torej točka $(0, -2)$.
5. Ničla: $g(1) = 2^2 - 4 = 4 - 4 = 0$, zato je $x = 1$ ničla.
6. Osnova $2 > 1$, zato je $g$ strogo naraščajoča. Strogo naraščajoča funkcija vsako vrednost, tudi $0$, doseže največ enkrat, zato druge ničle ni.
7. Ker funkcija narašča in je $g(1) = 0$, je za $x < 1$ vrednost manjša od $0$. Preverimo: $g(-1) = 2^0 - 4 = -3 < 0$ in $g(2) = 2^3 - 4 = 4 > 0$.
8. Odgovor: $D_g = \mathbb{R}$, $Z_g = (-4, \infty)$, asimptota $y = -4$, presečišče z osjo $y$ je $(0, -2)$. Edina ničla je $x = 1$, funkcija je negativna za $x \in (-\infty, 1)$.

## Pogoste napake

- **Zamenjava $2^x$ in $x^2$.** To sta različni funkciji: pri $x = 3$ je $2^3 = 8$, $3^2 = 9$, pri $x = 10$ pa $2^{10} = 1024$ in $10^2 = 100$. Pri eksponentni funkciji je spremenljivka v eksponentu, pri kvadratni v osnovi.
- **Negativni eksponent da negativno vrednost.** $2^{-3} = -8$ ni res. Negativni eksponent pomeni obratno vrednost: $2^{-3} = \dfrac{1}{8}$. Vrednosti eksponentne funkcije so **vedno pozitivne**, zato graf funkcije $a^x$ nikoli ne seka osi $x$.
- **Smer premika.** Graf $y = 2^{x-3}$ ni premaknjen v levo, ampak za $3$ v **desno**. Razmisli: vrednost $1$, ki jo ima $2^x$ pri $x = 0$, ima $2^{x-3}$ šele pri $x = 3$.
- **Napačna smer pri osnovi, manjši od $1$.** Pri $0 < a < 1$ funkcija pada, zato večji eksponent da manjšo vrednost: $0{,}5^3 = 0{,}125 < 0{,}5^2 = 0{,}25$. Pred primerjanjem vedno preveri, ali je osnova večja ali manjša od $1$.
- **$-2^x$ ni isto kot $(-2)^x$.** Zapis $-2^x$ pomeni $-\left(2^x\right)$, kar je zrcaljenje grafa čez os $x$. Zapis $(-2)^x$ pa ni eksponentna funkcija, ker osnova ni pozitivna.

## Povzetek

- Eksponentna funkcija: $f(x) = a^x$, $a > 0$, $a \ne 1$.
- $D_f = \mathbb{R}$, $Z_f = (0, \infty)$; ničel ni; graf gre skozi $(0, 1)$ in $(1, a)$.
- $a > 1$: strogo naraščajoča; $0 < a < 1$: strogo padajoča.
- Vodoravna asimptota je os $x$ ($y = 0$).
- $\left(\frac{1}{a}\right)^x = a^{-x}$: graf je zrcalna slika grafa $a^x$ čez os $y$.
- $y = a^{x - p} + q$: premik za $p$ po osi $x$ in za $q$ po osi $y$; asimptota $y = q$.
- Naravna eksponentna funkcija: $e^x$, $e \approx 2{,}718$.

## Drugače: Na sliki

Nariši koordinatni sistem in v njem tri grafe: $y = 2^x$, $y = 3^x$ in $y = \left(\frac{1}{2}\right)^x$. Vsi trije gredo skozi isto točko $(0, 1)$, kot bi bili pripeti na žebelj na osi $y$.

Graf $y = 2^x$ prihaja z leve čisto ob osi $x$, kot letalo, ki še pelje po pisti. Okrog $x = 0$ se začne dvigovati, desno od $x = 2$ pa se strmo vzpenja, kot letalo po vzletu. Graf $y = 3^x$ je desno od osi $y$ še strmejši, levo od nje pa se še tesneje prilega osi $x$. Graf $y = \left(\frac{1}{2}\right)^x$ je zrcalna slika grafa $2^x$ čez os $y$: z leve se spušča z velike višine in se v desno vedno bolj približuje osi $x$.

Nobeden od grafov se osi $x$ ne dotakne. V interaktivni simulaciji spodaj spreminjaj osnovo $a$ in opazuj: ko gre $a$ proti $1$, se graf zravna v vodoravno premico $y = 1$, ko pa $a$ preide pod $1$, graf iz naraščajočega postane padajoč.

## Drugače: Iz vsakdanjega življenja

**Bakterije.** V hranilni raztopini je ob začetku poskusa $100$ bakterij. Vsako uro se vsaka bakterija razdeli na dve, zato se število podvoji. Po $t$ urah je bakterij $N(t) = 100 \cdot 2^t$. Po eni uri jih je $200$, po treh $800$, po petih $3200$, po desetih pa že $102\,400$. V prvi uri se jih je pojavilo le $100$ novih, v deseti uri pa več kot $50\,000$. To je značilnost eksponentne rasti: prirastek ni stalen, ampak raste skupaj s količino.

**Zdravilo.** Bolnik vzame tableto z $80\,\text{mg}$ zdravilne učinkovine. Recimo, da telo vsake štiri ure izloči polovico količine, ki je v krvi. Po $t$ takih obdobjih je v krvi še $80 \cdot \left(\frac{1}{2}\right)^t$ miligramov: $40\,\text{mg}$, $20\,\text{mg}$, $10\,\text{mg}$, $5\,\text{mg}$ in tako naprej. Količina pada, a nikoli ne doseže natanko nič, kar ustreza asimptoti. Zato zdravnik določi presledke med odmerki tako, da učinkovine v krvi ni ne premalo ne preveč.

## Drugače: Korak za korakom s številkami

Nariši graf funkcije $f(x) = 2^{x-2} + 1$.

1. **Osnovni graf:** $y = 2^x$, naraščajoč, skozi $(0, 1)$ in $(1, 2)$, asimptota $y = 0$.
2. **Premik po osi $x$:** zapis $x - 2$ pomeni premik za $2$ v desno.
3. **Premik po osi $y$:** člen $+1$ pomeni premik za $1$ navzgor, zato je asimptota $y = 1$.
4. **Tabela vrednosti:**

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|---|
| $2^{x-2}$ | $\frac{1}{8}$ | $\frac{1}{4}$ | $\frac{1}{2}$ | $1$ | $2$ | $4$ |
| $f(x)$ | $1{,}125$ | $1{,}25$ | $1{,}5$ | $2$ | $3$ | $5$ |

5. **Kontrola:** točka $(0, 1)$ osnovnega grafa se premakne v $(0 + 2, 1 + 1) = (2, 2)$, kar se ujema s tabelo.
6. **Lastnosti:** $D_f = \mathbb{R}$, $Z_f = (1, \infty)$, funkcija je naraščajoča, ničel nima, os $y$ seka v točki $(0; 1{,}25)$.
7. Točke vneseš v koordinatni sistem in jih povežeš z gladko krivuljo, ki se na levi približuje premici $y = 1$.

## Drugače: Bolj natančno

**Zakaj je funkcija $a^x$ pri $a > 1$ naraščajoča?** Naj bo $x_1 < x_2$. Potem je $x_2 - x_1 > 0$ in

$$a^{x_2} = a^{x_1} \cdot a^{x_2 - x_1}.$$

Za $a > 1$ in pozitiven eksponent je $a^{x_2 - x_1} > 1$ (za racionalni eksponent $\frac{m}{n} > 0$ je $\sqrt[n]{a^m} > 1$, ker je $a^m > 1$). Ker je $a^{x_1} > 0$, sledi $a^{x_2} > a^{x_1}$. Pri $0 < a < 1$ je $a^{x_2 - x_1} < 1$ in neenakost se obrne.

**Iracionalni eksponenti.** Do zdaj smo znali izračunati $a^x$ le za racionalne $x$. Kaj pomeni $2^{\sqrt{2}}$? Število $\sqrt{2} = 1{,}41421\ldots$ približujemo z racionalnimi števili $1{,}4$; $1{,}41$; $1{,}414$; … Potence $2^{1{,}4}$, $2^{1{,}41}$, $2^{1{,}414}$, … zaradi monotonosti naraščajo, so omejene z $2^{1{,}5}$ in se vedno bolj približujejo enemu samemu številu. To število označimo z $2^{\sqrt{2}} \approx 2{,}665$. Tako je $a^x$ definirana za vsako realno število in graf je sklenjena krivulja brez lukenj.

**Značilna lastnost.** Za eksponentno funkcijo velja $f(x + y) = f(x) \cdot f(y)$, ker je $a^{x+y} = a^x \cdot a^y$. Povečanje argumenta za stalno vrednost pomeni množenje vrednosti s stalnim faktorjem. Zaradi stroge monotonosti je funkcija tudi injektivna: različnim $x$ pripadata različni vrednosti. To bo temelj za reševanje eksponentnih enačb.

## Preveri se

? Katera od funkcij je eksponentna?
- $f(x) = x^3$
+ $f(x) = 3^x$
- $f(x) = 3x$
- $f(x) = (-3)^x$
> Pri eksponentni funkciji je spremenljivka v eksponentu, osnova pa pozitivna in različna od $1$. Pri $(-3)^x$ je osnova negativna.

? Kolikšna je zaloga vrednosti funkcije $f(x) = 2^x + 3$?
- $\mathbb{R}$
- $(0, \infty)$
+ $(3, \infty)$
- $[3, \infty)$
> Ker je $2^x > 0$, je $2^x + 3 > 3$. Vrednosti $3$ funkcija ne doseže, zato je interval odprt.

? Katera funkcija je padajoča?
- $f(x) = 2^x$
+ $f(x) = 0{,}8^x$
- $f(x) = \left(\frac{5}{4}\right)^x$
> Eksponentna funkcija pada, ko je osnova med $0$ in $1$. Od danih osnov je taka le $0{,}8$.

? Katera premica je asimptota grafa funkcije $f(x) = 3^{x-2} - 1$?
- $y = 0$
+ $y = -1$
- $y = -2$
- $x = 2$
> Premik za $2$ v desno asimptote ne spremeni, premik za $1$ navzdol pa jo premakne iz $y = 0$ v $y = -1$.
