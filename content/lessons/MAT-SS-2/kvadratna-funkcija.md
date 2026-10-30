---
stanje: osnutek
demo: graf
avtor: AI
---

## Zakaj se tega učimo

Linearno funkcijo $f(x) = kx + n$ že dobro poznaš: njen graf je premica, ki ves čas enakomerno narašča ali pada. Veliko pojavov pa ni takih. Žoga, ki jo vržeš poševno navzgor, se najprej dviga, doseže najvišjo točko in nato pada. Ploščina kvadrata s stranico $x$ je $x^2$ in raste vse hitreje. Pri vrtu, ki ga ograjuješ z dano dolžino ograje, ploščina najprej narašča, nato pada, vmes pa je največja.

Vse to opisuje **kvadratna funkcija**. Njen graf je **parabola**. V tej lekciji spoznaš tri oblike zapisa kvadratne funkcije, naučiš se poiskati **teme** in **ničle** ter narisati graf. Kako parametri $a$, $p$ in $q$ premikajo in raztegujejo parabolo, si lahko ogledaš v interaktivni simulaciji spodaj (»Kvadratna funkcija v temenski obliki«).

## Razlaga

**1. Definicija.** Kvadratna funkcija je funkcija s predpisom

$$f(x) = ax^2 + bx + c, \qquad a, b, c \in \mathbb{R},\ a \ne 0.$$

Število $a$ je **vodilni koeficient**, $b$ **linearni koeficient**, $c$ **prosti člen**. Pogoj $a \ne 0$ je nujen: pri $a = 0$ dobimo linearno funkcijo. Definicijsko območje je $\mathbb{R}$.

**2. Osnovna parabola.** Najpreprostejša kvadratna funkcija je $f(x) = x^2$:

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $x^2$ | $9$ | $4$ | $1$ | $0$ | $1$ | $4$ | $9$ |

Graf je simetričen glede na os $y$, najnižja točka je izhodišče $(0, 0)$.

**3. Vpliv koeficienta $a$.**

- $a > 0$: parabola je odprta **navzgor**, teme je najnižja točka (minimum).
- $a < 0$: parabola je odprta **navzdol**, teme je najvišja točka (maksimum).
- $|a| > 1$: parabola je ožja od $y = x^2$; $|a| < 1$: parabola je širša.

**4. Tri oblike zapisa.**

| Oblika | Zapis | Kaj takoj preberemo |
|---|---|---|
| splošna | $f(x) = ax^2 + bx + c$ | presečišče z osjo $y$: $(0, c)$ |
| temenska | $f(x) = a(x - p)^2 + q$ | teme $T(p, q)$ |
| ničelna | $f(x) = a(x - x_1)(x - x_2)$ | ničli $x_1$ in $x_2$ |

V vseh treh oblikah je $a$ isto število. Ničelna oblika obstaja v realnih številih samo, če ima funkcija realne ničle.

**5. Teme.** Graf funkcije $f(x) = a(x - p)^2 + q$ dobimo tako, da parabolo $y = ax^2$ premaknemo za $p$ v smeri osi $x$ in za $q$ v smeri osi $y$. Teme je $T(p, q)$, **simetrijska os** je navpična premica $x = p$. Pazi na predznak: pri $(x - 2)^2$ je $p = 2$, pri $(x + 2)^2 = (x - (-2))^2$ pa $p = -2$.

Iz splošne oblike dobimo teme z obrazcema

$$p = -\frac{b}{2a}, \qquad q = f(p).$$

Drugo koordinato lahko izračunaš tudi kot $q = c - \dfrac{b^2}{4a}$, vendar je vstavljanje $p$ v predpis navadno varnejše.

**6. Ničle.** Ničla je vrednost $x$, pri kateri je $f(x) = 0$; tam graf seka ali se dotika osi $x$. V tej lekciji ničle iščemo na dva načina:

- **iz temenske oblike**: rešimo $a(x - p)^2 + q = 0$, torej $(x - p)^2 = -\dfrac{q}{a}$, in korenimo (ne pozabi na $\pm$);
- **z razstavljanjem**, kot znaš iz 1. letnika: $x^2 - 5x + 6 = (x - 2)(x - 3)$, ničli sta $2$ in $3$.

Iz lege temena in smeri odprtosti vidiš, koliko realnih ničel je: če sta $a$ in $q$ različno predznačena, sta dve; če je $q = 0$, je ena (dvojna, teme leži na osi $x$); če sta $a$ in $q$ enako predznačena, realnih ničel ni.

**7. Lastnosti.** Za $a > 0$ funkcija pada na intervalu $(-\infty, p]$ in narašča na $[p, \infty)$, zaloga vrednosti je $[q, \infty)$. Za $a < 0$ je obratno: narašča na $(-\infty, p]$, pada na $[p, \infty)$, zaloga vrednosti je $(-\infty, q]$.

## Rešeni primeri

### Primer 1 (lažji)

Dana je funkcija $f(x) = 2(x - 1)^2 - 8$. Zapiši teme, smer odprtosti, presečišče z osjo $y$, ničle in zalogo vrednosti.

**Podatki:** predpis v temenski obliki $f(x) = 2(x - 1)^2 - 8$, torej $a = 2$, $p = 1$, $q = -8$
**Iščemo:** teme $T$, smer odprtosti, presečišče z osjo $y$, ničli $x_1$, $x_2$, zalogo vrednosti $Z_f$

:::formula
Temenska oblika $f(x) = a(x - p)^2 + q$, teme $T(p, q)$; ničle iz $f(x) = 0$
:::

**Rešitev:**

1. Teme: $T(1, -8)$. Ker je $a = 2 > 0$, je parabola odprta navzgor in ožja od $y = x^2$.
2. Presečišče z osjo $y$: $f(0) = 2(0 - 1)^2 - 8 = 2 - 8 = -6$, torej točka $(0, -6)$.
3. Ničle: $2(x - 1)^2 - 8 = 0$, $(x - 1)^2 = 4$, $x - 1 = \pm 2$. Dobimo $x_1 = -1$ in $x_2 = 3$.
4. Preverjanje: $f(3) = 2 \cdot 4 - 8 = 0$ in $f(-1) = 2 \cdot 4 - 8 = 0$. Ničli sta simetrični glede na os $x = 1$.
5. Zaloga vrednosti: najmanjša vrednost je $q = -8$, zato $Z_f = [-8, \infty)$.
6. Odgovor: teme je $T(1, -8)$, parabola je odprta navzgor, os $y$ seka v $(0, -6)$, ničli sta $-1$ in $3$, zaloga vrednosti je $[-8, \infty)$.

### Primer 2 (srednji)

Funkcijo $f(x) = -x^2 + 4x + 5$ zapiši v temenski in ničelni obliki ter opiši njen graf.

**Podatki:** splošna oblika $f(x) = -x^2 + 4x + 5$, torej $a = -1$, $b = 4$, $c = 5$
**Iščemo:** temensko obliko, ničelno obliko, teme, ničle, intervala naraščanja in padanja, zalogo vrednosti

:::formula
$p = -\dfrac{b}{2a}$, $\; q = f(p)$, $\; f(x) = a(x - p)^2 + q = a(x - x_1)(x - x_2)$
:::

**Rešitev:**

1. Prva koordinata temena: $p = -\dfrac{4}{2 \cdot (-1)} = 2$.
2. Druga koordinata: $q = f(2) = -2^2 + 4 \cdot 2 + 5 = -4 + 8 + 5 = 9$. Teme je $T(2, 9)$.
3. Temenska oblika: $f(x) = -(x - 2)^2 + 9$.
4. Ničle: $-(x - 2)^2 + 9 = 0$, $(x - 2)^2 = 9$, $x - 2 = \pm 3$, torej $x_1 = -1$, $x_2 = 5$.
5. Ničelna oblika: $f(x) = -(x + 1)(x - 5)$. Preverjanje: $-(x^2 - 4x - 5) = -x^2 + 4x + 5$.
6. Ker je $a = -1 < 0$, je parabola odprta navzdol, teme je najvišja točka. Os $y$ seka v $(0, 5)$; simetrična točka glede na os $x = 2$ je $(4, 5)$.
7. Odgovor: $f(x) = -(x - 2)^2 + 9 = -(x + 1)(x - 5)$. Funkcija narašča na $(-\infty, 2]$, pada na $[2, \infty)$, največja vrednost je $9$, zaloga vrednosti je $(-\infty, 9]$, ničli sta $-1$ in $5$.

### Primer 3 (težji)

Parabola ima teme v točki $T(3, -2)$ in poteka skozi točko $A(1, 6)$. Zapiši predpis kvadratne funkcije v temenski, splošni in ničelni obliki.

**Podatki:** teme $T(3, -2)$, torej $p = 3$, $q = -2$; točka na grafu $A(1, 6)$, torej $f(1) = 6$
**Iščemo:** koeficient $a$ in predpis $f(x)$ v vseh treh oblikah

:::formula
$f(x) = a(x - p)^2 + q$; koordinate točke na grafu zadoščajo predpisu: $f(1) = 6$
:::

**Rešitev:**

1. Vstavimo teme: $f(x) = a(x - 3)^2 - 2$.
2. Vstavimo točko $A$: $6 = a(1 - 3)^2 - 2 = 4a - 2$, zato $4a = 8$ in $a = 2$.
3. Temenska oblika: $f(x) = 2(x - 3)^2 - 2$.
4. Splošna oblika: $2(x^2 - 6x + 9) - 2 = 2x^2 - 12x + 18 - 2 = 2x^2 - 12x + 16$.
5. Ničle: $2(x - 3)^2 = 2$, $(x - 3)^2 = 1$, $x - 3 = \pm 1$, torej $x_1 = 2$, $x_2 = 4$.
6. Ničelna oblika: $f(x) = 2(x - 2)(x - 4)$. Preverjanje: $2(x^2 - 6x + 8) = 2x^2 - 12x + 16$ in $f(1) = 2 \cdot (-1) \cdot (-3) = 6$.
7. Odgovor: $f(x) = 2(x - 3)^2 - 2 = 2x^2 - 12x + 16 = 2(x - 2)(x - 4)$.

## Pogoste napake

- **Napačen predznak v temenu.** Pri $f(x) = (x + 3)^2 - 1$ teme ni $(3, -1)$. Razlog: v temenski obliki je $x - p$, zato $x + 3 = x - (-3)$ in $p = -3$. Pravilno: $T(-3, -1)$. Preveri tako, da vstaviš $x = p$: oklepaj mora biti enak $0$.
- **Zamenjava $c$ in $q$.** Prosti člen $c$ je vrednost funkcije pri $x = 0$, ne pri temenu. Pri $f(x) = -x^2 + 4x + 5$ je $c = 5$, teme pa $(2, 9)$. Razlog za zmedo: pri $b = 0$ sta enaka. Pravilno: $q$ vedno izračunaj kot $f(p)$.
- **Pozabljen $\pm$ pri korenjenju.** Iz $(x - 1)^2 = 4$ nekateri dobijo le $x = 3$. Razlog: enačba $t^2 = 4$ ima rešitvi $t = 2$ in $t = -2$. Pravilno: $x - 1 = \pm 2$, torej $x = 3$ ali $x = -1$.
- **Napaka pri $p = -\dfrac{b}{2a}$.** Pri $f(x) = 2x^2 - 12x + 16$ je $b = -12$, zato $p = -\dfrac{-12}{4} = 3$, ne $-3$. Pravilno: $b$ vstavi z njegovim predznakom v oklepaju.
- **$-x^2$ in $(-x)^2$.** Pri $f(x) = -x^2 + 4x + 5$ je $f(-1) = -(-1)^2 - 4 + 5 = -1 - 4 + 5 = 0$, ne $1 - 4 + 5 = 2$. Razlog: najprej kvadriramo, nato upoštevamo minus pred členom.

## Povzetek

- Kvadratna funkcija: $f(x) = ax^2 + bx + c$, $a \ne 0$; graf je parabola.
- $a > 0$: odprta navzgor (minimum v temenu); $a < 0$: odprta navzdol (maksimum v temenu).
- Temenska oblika $f(x) = a(x - p)^2 + q$, teme $T(p, q)$, simetrijska os $x = p$.
- Iz splošne oblike: $p = -\dfrac{b}{2a}$, $q = f(p)$; presečišče z osjo $y$ je $(0, c)$.
- Ničelna oblika $f(x) = a(x - x_1)(x - x_2)$; ničle so rešitve enačbe $f(x) = 0$.
- Dve realni ničli, če sta $a$ in $q$ različnih predznakov; ena pri $q = 0$; nobene, če sta enakih predznakov.
- Zaloga vrednosti: $[q, \infty)$ za $a > 0$, $(-\infty, q]$ za $a < 0$.

## Drugače: Na sliki

Predstavljaj si parabolo $y = x^2$ kot črko U, narisano na prozorni foliji, ki leži na koordinatnem sistemu tako, da je njeno dno v izhodišču. Vsak parameter temenske oblike naredi s to folijo nekaj drugega:

- $q$ folijo **premakne gor ali dol**. Pri $q = 3$ se dno dvigne v točko $(0, 3)$.
- $p$ folijo **premakne levo ali desno**. Pri $(x - 2)^2$ gre dno v desno na $x = 2$, saj je oklepaj enak nič ravno pri $x = 2$.
- $a$ folijo **raztegne ali stisne** v navpični smeri. Pri $a = 2$ je vsaka točka dvakrat višje od osi, zato je krak strmejši in parabola videti ožja. Pri negativnem $a$ se U **prezrcali** čez os $x$ in postane obrnjen U.

Ničle so mesta, kjer krivulja preseka vodoravno os. Če je dno U nad osjo $x$ in je U odprt navzgor, krivulja osi nikoli ne doseže, zato realnih ničel ni. Če dno leži pod osjo, jo kraka presekata dvakrat, simetrično levo in desno od simetrijske osi. V interaktivni simulaciji spodaj premikaj drsnike za $a$, $p$ in $q$ ter opazuj, kako se teme in ničli premikata.

## Drugače: Iz vsakdanjega življenja

Ko košarkar vrže žogo proti košu, žoga (če zanemarimo upor zraka) leti po paraboli, odprti navzdol. Teme je najvišja točka leta, takrat se žoga za trenutek ne dviga več. Višino žoge v odvisnosti od vodoravne razdalje opisuje kvadratna funkcija z negativnim vodilnim koeficientom.

Curki vode v vodnjakih, kabli visečih mostov in prerezi satelitskih anten imajo obliko parabole. Parabolična antena ima lastnost, da se vzporedni žarki po odboju zberejo v eni točki, zato sprejemnik postavijo prav tja.

Kvadratna funkcija pomaga tudi pri iskanju najboljše rešitve. Kmet ima $40\,\text{m}$ ograje in želi ob ravnem zidu ograditi pravokoten vrt, ograja pa je potrebna samo na treh stranicah. Če sta stranici, pravokotni na zid, dolgi $x$, je tretja dolga $40 - 2x$, ploščina pa $P(x) = x(40 - 2x) = -2x^2 + 40x$. To je parabola, odprta navzdol, s temenom pri $x = -\dfrac{40}{2 \cdot (-2)} = 10$. Največja ploščina je $P(10) = 10 \cdot 20 = 200\,\text{m}^2$.

## Drugače: Korak za korakom s številkami

Postopek risanja grafa pokažimo na funkciji $f(x) = x^2 - 6x + 5$.

1. **Preberi koeficiente:** $a = 1$, $b = -6$, $c = 5$. Ker je $a > 0$, je parabola odprta navzgor.
2. **Teme:** $p = -\dfrac{-6}{2 \cdot 1} = 3$, $q = f(3) = 9 - 18 + 5 = -4$. Teme je $T(3, -4)$.
3. **Temenska oblika:** $f(x) = (x - 3)^2 - 4$.
4. **Ničle:** $(x - 3)^2 = 4$, $x - 3 = \pm 2$, torej $x_1 = 1$ in $x_2 = 5$. Ničelna oblika je $f(x) = (x - 1)(x - 5)$.
5. **Presečišče z osjo $y$:** $(0, 5)$. Zrcalna točka glede na os $x = 3$ je $(6, 5)$.
6. **Tabela za kontrolo:**

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $5$ | $0$ | $-3$ | $-4$ | $-3$ | $0$ | $5$ |

7. **Nariši:** označi točke, skozi njih nariši gladko krivuljo, simetrično glede na premico $x = 3$. Vrednosti v tabeli so simetrične okoli $x = 3$, kar je dobra kontrola, da si teme izračunal pravilno.

## Drugače: Bolj natančno

Temensko obliko dobimo iz splošne z **dopolnjevanjem do popolnega kvadrata**. Za $a \ne 0$ izpostavimo $a$ in prištejemo ter odštejemo kvadrat polovice koeficienta pri $x$:

$$ax^2 + bx + c = a\left(x^2 + \frac{b}{a}x\right) + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c.$$

Od tod je $p = -\dfrac{b}{2a}$ in $q = c - \dfrac{b^2}{4a}$, kar se ujema s $q = f(p)$.

**Simetrija.** Za poljuben $t$ velja $f(p + t) = at^2 + q = f(p - t)$. Točki, ki sta enako oddaljeni od $p$, imata torej enako vrednost; premica $x = p$ je simetrijska os.

**Ekstrem.** Ker je $(x - p)^2 \ge 0$ in je enak nič samo pri $x = p$, za $a > 0$ velja $f(x) \ge q$ z enakostjo samo v temenu, zato je $q$ najmanjša vrednost. Za $a < 0$ je $f(x) \le q$, $q$ je največja vrednost.

**Število ničel.** Iz $(x - p)^2 = -\dfrac{q}{a}$ sledi: desna stran je pozitivna natanko tedaj, ko sta $a$ in $q$ različno predznačena; takrat sta ničli $x_{1,2} = p \pm \sqrt{-\dfrac{q}{a}}$, simetrični glede na $p$. Zato je $p = \dfrac{x_1 + x_2}{2}$: prva koordinata temena je aritmetična sredina ničel.

## Preveri se

? Kje je teme parabole $f(x) = -3(x + 2)^2 + 5$?
- $T(2, 5)$
+ $T(-2, 5)$
- $T(-2, -5)$
- $T(5, -2)$
> Ker je $x + 2 = x - (-2)$, je $p = -2$, in $q = 5$. Teme je $T(-2, 5)$.

? Katera trditev velja za $f(x) = -x^2 + 2x + 3$?
- Parabola je odprta navzgor.
- Teme je $T(1, 3)$.
+ Največja vrednost funkcije je $4$.
- Os $y$ seka v točki $(0, -3)$.
> $a = -1 < 0$, zato je parabola odprta navzdol. $p = -\dfrac{2}{-2} = 1$, $q = f(1) = -1 + 2 + 3 = 4$, os $y$ seka v $(0, 3)$.

? Kateri sta ničli funkcije $f(x) = 2(x - 3)^2 - 18$?
- $x_1 = 0$, $x_2 = 3$
- $x_1 = -6$, $x_2 = 6$
+ $x_1 = 0$, $x_2 = 6$
> $(x - 3)^2 = 9$, $x - 3 = \pm 3$, torej $x_1 = 0$ in $x_2 = 6$.

? Koliko realnih ničel ima $f(x) = 4(x + 1)^2 + 3$?
+ nobene
- eno
- dve
> $a = 4 > 0$ in $q = 3 > 0$: parabola je odprta navzgor, njeno teme $(-1, 3)$ leži nad osjo $x$, zato osi ne seka.

:::simboli
f | kvadratna funkcija | f(x) = ax^2 + bx + c | |
x | neodvisna spremenljivka | | |
a | vodilni koeficient | | | a ≠ 0; pri a > 0 je parabola odprta navzgor
b | linearni koeficient | | |
c | prosti člen | | | presečišče z osjo y je (0, c)
p | abscisa temena | p = -\frac{b}{2a} | | simetrijska os je x = p
q | ordinata temena | q = f(p) | |
T | teme parabole | | |
x_1, x_2 | ničli funkcije | | |
:::
