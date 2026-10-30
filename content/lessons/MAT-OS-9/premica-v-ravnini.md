---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih tem že znaš, da je graf linearne funkcije $y = kx + n$ premica. Število $k$ je **smerni koeficient** (pove, kako strma je premica), število $n$ pa **začetna vrednost** (pove, kje premica seka os $y$). Znaš tudi narisati premico, če poznaš $k$ in $n$.

V praksi pa pogosto poznamo samo dve meritvi ali dve točki. Iz dveh meritev stroška, hitrosti ali višine želimo dobiti pravilo, ki velja za vse vrednosti. To pomeni, da moramo iz točk izračunati enačbo premice. Pogosto nas zanima tudi, ali sta dve premici **vzporedni**. Na primer: ali bosta dve cesti ali dve tarifi vedno ostali v enaki razdalji? V tej lekciji se naučiš oboje.

## Razlaga

**1. Premica kot graf linearne funkcije.** Enačba premice je
$$y = kx + n.$$
Če se $x$ poveča za $1$, se $y$ spremeni za $k$. Če je $k > 0$, premica narašča, če je $k < 0$, pada, če je $k = 0$, je vodoravna.

**2. Vzporedni premici.** Premici $y = k_1 x + n_1$ in $y = k_2 x + n_2$ sta **vzporedni**, če imata enak smerni koeficient:
$$k_1 = k_2.$$
Če imata poleg tega še enak $n$, je to ista premica. Vzporedni premici nimata nobene skupne točke.

**3. Smerni koeficient iz dveh točk.** Če poznaš točki $A(x_1, y_1)$ in $B(x_2, y_2)$, ki ležita na premici, je
$$k = \frac{y_2 - y_1}{x_2 - x_1}.$$
Števec je spremembra višine, imenovalec pa sprememba po vodoravni osi. Računaš torej, za koliko se $y$ spremeni, ko se $x$ poveča za $1$.

**4. Začetna vrednost $n$.** Ko poznaš $k$, vstaviš koordinati ene od točk v $y = kx + n$ in izračunaš $n$.

**5. Postopek za enačbo premice skozi dve točki.**

1. Izračunaj $k = \dfrac{y_2 - y_1}{x_2 - x_1}$.
2. Vstavi $k$ in koordinati prve točke v $y = kx + n$ ter izračunaj $n$.
3. Zapiši $y = kx + n$.
4. Preveri z drugo točko.

**6. Premica skozi točko, vzporedna dani premici.** Smerni koeficient prepišeš z dane premice, $n$ pa izračunaš tako, da vstaviš dano točko.

## Rešeni primeri

### Primer 1 (lažji): vzporednost

Katera od premic $y = 3x - 2$, $y = -3x + 1$, $y = 3x + 4$ je vzporedna premici $y = 3x + 1$?

1. Vzporednost določa samo smerni koeficient. Dana premica ima $k = 3$.
2. Premica $y = 3x - 2$ ima $k = 3$, zato je vzporedna.
3. Premica $y = -3x + 1$ ima $k = -3$. To ni enako $3$, zato ni vzporedna. Čeprav ima enak $n$, se s prvo premico seka pri $x = 0$.
4. Premica $y = 3x + 4$ ima $k = 3$, zato je vzporedna.

**Odgovor:** vzporedni sta $y = 3x - 2$ in $y = 3x + 4$.

### Primer 2: premica skozi dve točki

Poišči enačbo premice skozi točki $A(1, 3)$ in $B(3, 7)$.

1. Smerni koeficient: $k = \dfrac{7 - 3}{3 - 1} = \dfrac{4}{2} = 2$.
2. Vstavimo $k = 2$ in točko $A(1, 3)$ v $y = kx + n$: $3 = 2 \cdot 1 + n$, torej $n = 1$.
3. Enačba: $y = 2x + 1$.
4. Preverimo s točko $B$: $2 \cdot 3 + 1 = 7$. ✓

### Primer 3 (težji): dve premici skupaj

Premica $p$ poteka skozi točki $A(-2, 5)$ in $B(4, -1)$. Poišči njeno enačbo, nato še enačbo premice $q$, ki je vzporedna premici $p$ in poteka skozi točko $C(1, 4)$.

1. **Smerni koeficient premice $p$:** $k = \dfrac{-1 - 5}{4 - (-2)} = \dfrac{-6}{6} = -1$. Pazi na odštevanje negativnega števila: $4 - (-2) = 6$.
2. **Začetna vrednost:** vstavimo $A(-2, 5)$: $5 = (-1)\cdot(-2) + n$, torej $5 = 2 + n$ in $n = 3$.
3. **Enačba $p$:** $y = -x + 3$.
4. **Preverimo s točko $B$:** $-4 + 3 = -1$. ✓
5. **Premica $q$:** je vzporedna $p$, zato ima enak smerni koeficient $k = -1$.
6. Vstavimo $C(1, 4)$: $4 = -1 \cdot 1 + n$, torej $n = 5$.
7. **Enačba $q$:** $y = -x + 5$.
8. **Preverimo:** $-1 + 5 = 4$ ✓. Smerna koeficienta sta enaka, $n$ pa različna, zato premici nista ista.

## Pogoste napake

- **Zamenjan vrstni red pri $k$.** Če v števcu odšteješ $y_2 - y_1$, moraš v imenovalcu odšteti $x_2 - x_1$ v *istem* vrstnem redu. Če ju zamešaš, dobiš nasprotni predznak.
- **Napaka pri negativnih številih.** $4 - (-2) = 6$, ne $2$.
- **Pozabljeno deljenje.** Razlika $y$ sama ni smerni koeficient. Deliti moraš z razliko $x$.
- **Mešanje $k$ in $n$.** Vzporedni premici imata enak $k$, ne enak $n$. Pri enakem $n$ in različnem $k$ se premici sekata na osi $y$.
- **Pozabljeno preverjanje.** Vedno vstavi še drugo točko. Tako takoj odkriješ računsko napako.
- **Navpična premica.** Če je $x_1 = x_2$, bi delil z $0$. Taka premica ($x = $ konstanta) ni graf funkcije in je ne zapišemo kot $y = kx + n$.

## Povzetek

- Premica: $y = kx + n$, kjer je $k$ smerni koeficient, $n$ pa začetna vrednost.
- Premici sta vzporedni natanko tedaj, ko imata enak smerni koeficient: $k_1 = k_2$.
- Skozi točki $A(x_1, y_1)$ in $B(x_2, y_2)$ je $k = \dfrac{y_2 - y_1}{x_2 - x_1}$.
- $n$ dobiš tako, da v $y = kx + n$ vstaviš koordinati ene točke.
- Rezultat vedno preveri z drugo točko.

## Drugače: Na sliki

Predstavljaj si premico kot stopnice. Če se z vsakim korakom za $1$ v desno povzpneš za $k$, dobiš graf s smernim koeficientom $k$.

Pri točkah $A(1, 3)$ in $B(3, 7)$ greš od $A$ do $B$ za $2$ v desno in za $4$ navzgor. Na en korak v desno je to $4 : 2 = 2$ navzgor, zato je $k = 2$.

Vzporedni premici si predstavljaj kot dve tirnici ali dve vzporedni stopnišči: obe imata enako strme stopnice, ena pa je samo premaknjena navzgor ali navzdol. Zato se nikoli ne srečata.

Če želiš poiskati $n$, nadaljuj po premici do osi $y$. Pri $A(1, 3)$ in $k = 2$ stopiš za en korak nazaj: $x = 0$, $y = 3 - 2 = 1$. Točka $(0, 1)$ leži na osi $y$, torej $n = 1$.

## Drugače: Iz vsakdanjega življenja

Kolesarska izposojevalnica ima fiksen znesek ob najemu in nato ceno na uro. Veš samo, da si po $2$ urah plačal $7\,€$, po $4$ urah pa $11\,€$.

- Za dve dodatni uri plačaš $11 - 7 = 4\,€$ več. Na uro je to $4 : 2 = 2\,€$. To je $k$.
- Za $2$ uri je cena $2 \cdot 2 = 4\,€$, plačal si $7\,€$, torej je fiksni znesek $n = 3\,€$.
- Cena: $y = 2x + 3$.

Druga izposojevalnica ima ceno $y = 2x + 5$. Cena na uro je enaka ($k$ enak), le fiksni znesek je višji. Premici sta vzporedni, zato je razlika med cenama pri vsakem številu ur enaka $2\,€$.

## Drugače: Korak za korakom s številkami

Poišči enačbo premice skozi $A(2, 1)$ in $B(6, 9)$.

| Korak | Kaj naredimo | Račun |
|---|---|---|
| 1 | Razlika $y$ | $9 - 1 = 8$ |
| 2 | Razlika $x$ | $6 - 2 = 4$ |
| 3 | Smerni koeficient | $k = 8 : 4 = 2$ |
| 4 | Vstavimo $A$ in $k$ | $1 = 2 \cdot 2 + n$ |
| 5 | Izračunamo $n$ | $1 = 4 + n$, torej $n = -3$ |
| 6 | Enačba | $y = 2x - 3$ |
| 7 | Preverimo $B$ | $2 \cdot 6 - 3 = 9$ ✓ |

Vzporedna premica skozi $C(0, 4)$ ima $k = 2$ in ker je $C$ na osi $y$, je $n = 4$. Torej $y = 2x + 4$.

## Drugače: Bolj natančno

**Zakaj formula za $k$ drži?** Naj bosta točki $A(x_1, y_1)$ in $B(x_2, y_2)$ na premici $y = kx + n$. Potem velja
$$y_1 = kx_1 + n \quad \text{in} \quad y_2 = kx_2 + n.$$
Drugo enačbo odštejemo od prve:
$$y_2 - y_1 = k(x_2 - x_1).$$
Če je $x_2 \ne x_1$, delimo z $x_2 - x_1$ in dobimo
$$k = \frac{y_2 - y_1}{x_2 - x_1}.$$

**Zakaj sta premici z enakim $k$ in različnima $n$ vzporedni?** Skupne točke bi imeli pri tistem $x$, kjer sta vrednosti enaki: $kx + n_1 = kx + n_2$. Odštejemo $kx$ in dobimo $n_1 = n_2$. To je protislovje, če je $n_1 \ne n_2$, zato skupne točke ni. Če pa je $n_1 = n_2$, sta premici ena in ista.

## Preveri se

? Katera premica je vzporedna premici $y = 4x - 1$?
- $y = -4x - 1$
+ $y = 4x + 7$
- $y = \dfrac{1}{4}x - 1$
> Vzporedni premici imata enak smerni koeficient $k = 4$. Premica $y = -4x - 1$ ima enak $n$, a drug $k$, premica $y = \frac{1}{4}x - 1$ pa ima $k = \frac{1}{4}$.

? Kakšna je enačba premice skozi točki $(0, 1)$ in $(2, 5)$?
- $y = 4x + 1$
- $y = \dfrac{1}{2}x + 1$
+ $y = 2x + 1$
- $y = 2x + 5$
> $k = \dfrac{5 - 1}{2 - 0} = 2$. Točka $(0, 1)$ je na osi $y$, zato je $n = 1$. Preverimo: $2 \cdot 2 + 1 = 5$ ✓. Odgovor $y = 4x + 1$ pozabi deliti z razliko $x$.

? Kakšna je enačba premice, ki je vzporedna premici $y = 3x - 2$ in poteka skozi točko $(1, 5)$?
- $y = 3x + 5$
+ $y = 3x + 2$
- $y = -3x + 8$
> Vzporedna premica ima $k = 3$. Iz $5 = 3 \cdot 1 + n$ dobimo $n = 2$. Odgovor $y = 3x + 5$ za $n$ vzame kar koordinato $y$ točke.

:::simboli
y | odvisna spremenljivka (ordinata točke) | y = kx + n | |
x | neodvisna spremenljivka (abscisa točke) | | |
k | smerni koeficient premice | k = \frac{y_2 - y_1}{x_2 - x_1} | | pove, kako strma je premica
n | začetna vrednost (presečišče z osjo y) | | |
k_1, k_2 | smerna koeficienta dveh premic | | | enaka pri vzporednih premicah
x_1, x_2 | abscisi dveh točk na premici | | | x₂ ≠ x₁
y_1, y_2 | ordinati dveh točk na premici | | |
:::
