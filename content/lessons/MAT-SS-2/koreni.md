---
stanje: osnutek
demo: koren
avtor: AI
---

## Zakaj se tega učimo

Iz osnovne šole že veš, da je kvadratni koren števila $a$ tisto nenegativno število, ki ga pomnoženo samo s seboj dobimo $a$. Tako je $\sqrt{49} = 7$. Poznaš tudi iracionalna števila: $\sqrt{2}$ ni ulomek in ima neskončen neperiodičen decimalni zapis. Takih števil ne moremo zapisati natančno z decimalkami, zato jih puščamo v obliki korena in računamo z njimi.

Pri tem se hitro pokaže, da je $\sqrt{72}$ nerodna oblika števila $6\sqrt{2}$ in da se z izrazom $\dfrac{1}{\sqrt{5} - \sqrt{2}}$ težko računa, dokler korenov ne spravimo iz imenovalca. V tej lekciji se naučiš pravil za računanje s koreni, **delnega korenjenja** in **racionalizacije**. Brez tega ne gre pri reševanju kvadratnih enačb, pri izračunu diagonal in višin v geometriji ali pri računanju z razdaljami v koordinatnem sistemu. Pri vadbi približkov in grafa korenske funkcije ti pomaga interaktivna simulacija spodaj.

## Razlaga

**1. Kvadratni koren.** Za $a \ge 0$ je $\sqrt{a}$ **nenegativno** število, katerega kvadrat je $a$. Pogoj $a \ge 0$ je nujen: v realnih številih ne obstaja koren negativnega števila. Velja

$$\left(\sqrt{a}\right)^2 = a \quad (a \ge 0), \qquad \sqrt{x^2} = |x| \quad (x \in \mathbb{R}).$$

Zato je $\sqrt{(-3)^2} = \sqrt{9} = 3 = |-3|$ in ne $-3$.

**2. n-ti koren.** Za naravno število $n \ge 2$ je $\sqrt[n]{a}$ tisto število $b$, za katero velja $b^n = a$. Pri **sodem** $n$ mora biti $a \ge 0$ in je koren po dogovoru nenegativen. Pri **lihem** $n$ je koren definiran tudi za negativne $a$: $\sqrt[3]{-27} = -3$, ker je $(-3)^3 = -27$. Pišemo $\sqrt[3]{a}$, kubični koren.

**3. Pravila za računanje.** Za $a, b \ge 0$ (in $b > 0$ pri deljenju) veljajo:

| Pravilo | Primer |
|---|---|
| $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$ | $\sqrt{3} \cdot \sqrt{12} = \sqrt{36} = 6$ |
| $\sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}}$ | $\sqrt{\dfrac{25}{4}} = \dfrac{5}{2}$ |
| $\sqrt[n]{a \cdot b} = \sqrt[n]{a} \cdot \sqrt[n]{b}$ | $\sqrt[3]{2} \cdot \sqrt[3]{4} = \sqrt[3]{8} = 2$ |
| $\sqrt[m]{\sqrt[n]{a}} = \sqrt[m \cdot n]{a}$ | $\sqrt{\sqrt{16}} = \sqrt[4]{16} = 2$ |

Pravila ne veljajo za seštevanje: **$\sqrt{a + b} \ne \sqrt{a} + \sqrt{b}$**. Preizkus: $\sqrt{9 + 16} = 5$, toda $\sqrt{9} + \sqrt{16} = 7$.

**3a. Ocena korena.** Če $a$ ni popoln kvadrat, koren ocenimo med dvema celima številoma. Ker je $4^2 = 16$ in $5^2 = 25$, velja $4 < \sqrt{20} < 5$. Ker je $4{,}4^2 = 19{,}36$ in $4{,}5^2 = 20{,}25$, je še natančneje $4{,}4 < \sqrt{20} < 4{,}5$. Tako lahko hitro preveriš, ali je rezultat računa smiseln.

**4. Seštevanje in odštevanje.** Seštevamo lahko samo **istovrstne korene**, to so členi z enakim številom pod korenom, kot seštevamo podobne člene v algebrskih izrazih: $2\sqrt{3} + 5\sqrt{3} = 7\sqrt{3}$. Člena $2\sqrt{3}$ in $3\sqrt{5}$ ne moremo združiti.

**5. Delno korenjenje.** Pod korenom poiščemo največji popolni kvadrat, ki je faktor, in ga "izvlečemo":

$$\sqrt{a^2 \cdot b} = a\sqrt{b} \quad (a \ge 0,\ b \ge 0).$$

Primer: $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$. Z neznankami: $\sqrt{18a^3} = \sqrt{9a^2 \cdot 2a} = 3a\sqrt{2a}$ za $a \ge 0$. Pri kubičnem korenu iščemo popolne kubuse (kocke naravnih števil): $\sqrt[3]{54} = \sqrt[3]{27 \cdot 2} = 3\sqrt[3]{2}$. Obratno, faktor lahko vnesemo pod koren: $3\sqrt{2} = \sqrt{9 \cdot 2} = \sqrt{18}$ (če je faktor pozitiven).

**6. Racionalizacija imenovalca.** Za izraz je lepša oblika, v kateri v imenovalcu ni korena. Ulomek razširimo tako, da vrednost ostane enaka.

- Imenovalec je en koren: $\dfrac{a}{\sqrt{b}} = \dfrac{a \cdot \sqrt{b}}{\sqrt{b} \cdot \sqrt{b}} = \dfrac{a\sqrt{b}}{b}$.
- Imenovalec je vsota ali razlika dveh členov s korenom: razširimo s **konjugiranim izrazom** (isti členi, nasprotni znak), ker velja razlika kvadratov
$$\left(\sqrt{a} + \sqrt{b}\right)\left(\sqrt{a} - \sqrt{b}\right) = a - b.$$

Tako je $\dfrac{1}{\sqrt{a} - \sqrt{b}} = \dfrac{\sqrt{a} + \sqrt{b}}{a - b}$ za $a \ne b$.

Razširitev je dovoljena, ker ulomek množimo z $1$, na primer z $\dfrac{\sqrt{b}}{\sqrt{b}}$. Konjugirani izraz deluje tudi, kadar je le eden od členov koren: $\dfrac{3}{2 + \sqrt{3}} = \dfrac{3\left(2 - \sqrt{3}\right)}{4 - 3} = 6 - 3\sqrt{3}$. Preverjanje: leva stran je $\dfrac{3}{3{,}732} \approx 0{,}804$, desna $6 - 5{,}196 = 0{,}804$.

## Rešeni primeri

### Primer 1 (lažji)

Poenostavi izraz $\sqrt{50} + \sqrt{18} - \sqrt{8}$.

**Podatki:** dan je izraz $\sqrt{50} + \sqrt{18} - \sqrt{8}$ (brez dodatnih številskih podatkov)
**Iščemo:** čim preprostejši zapis izraza

:::formula
$\sqrt{a^2 \cdot b} = a\sqrt{b}$ in $\;p\sqrt{b} + q\sqrt{b} = (p + q)\sqrt{b}$
:::

**Rešitev:**

1. Vsak koren delno korenimo: $\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2}$, $\sqrt{18} = \sqrt{9 \cdot 2} = 3\sqrt{2}$, $\sqrt{8} = \sqrt{4 \cdot 2} = 2\sqrt{2}$.
2. Zdaj imamo istovrstne korene: $5\sqrt{2} + 3\sqrt{2} - 2\sqrt{2} = (5 + 3 - 2)\sqrt{2} = 6\sqrt{2}$.
3. Preverjanje: $\sqrt{50} + \sqrt{18} - \sqrt{8} \approx 7{,}071 + 4{,}243 - 2{,}828 = 8{,}485$ in $6\sqrt{2} \approx 8{,}485$.
4. Odgovor: izraz je enak $6\sqrt{2}$.

### Primer 2 (srednji)

Racionaliziraj imenovalec in poenostavi: a) $\dfrac{6}{\sqrt{3}}$, b) $\dfrac{10}{\sqrt{7} - \sqrt{2}}$.

**Podatki:** ulomka $\dfrac{6}{\sqrt{3}}$ in $\dfrac{10}{\sqrt{7} - \sqrt{2}}$
**Iščemo:** enaka ulomka brez korena v imenovalcu

:::formula
$\dfrac{a}{\sqrt{b}} = \dfrac{a\sqrt{b}}{b}$ in $\;\left(\sqrt{a} - \sqrt{b}\right)\left(\sqrt{a} + \sqrt{b}\right) = a - b$
:::

**Rešitev:**

1. a) Razširimo s $\sqrt{3}$: $\dfrac{6}{\sqrt{3}} = \dfrac{6\sqrt{3}}{\sqrt{3} \cdot \sqrt{3}} = \dfrac{6\sqrt{3}}{3} = 2\sqrt{3}$.
2. b) Konjugirani izraz imenovalca je $\sqrt{7} + \sqrt{2}$. Ulomek razširimo z njim:
$$\frac{10}{\sqrt{7} - \sqrt{2}} \cdot \frac{\sqrt{7} + \sqrt{2}}{\sqrt{7} + \sqrt{2}} = \frac{10\left(\sqrt{7} + \sqrt{2}\right)}{7 - 2}.$$
3. Imenovalec je $7 - 2 = 5$, zato je rezultat $\dfrac{10\left(\sqrt{7} + \sqrt{2}\right)}{5} = 2\left(\sqrt{7} + \sqrt{2}\right) = 2\sqrt{7} + 2\sqrt{2}$.
4. Preverjanje: $\dfrac{10}{2{,}6458 - 1{,}4142} \approx 8{,}120$ in $2 \cdot 2{,}6458 + 2 \cdot 1{,}4142 \approx 8{,}120$.
5. Odgovor: a) $2\sqrt{3}$, b) $2\sqrt{7} + 2\sqrt{2}$.

### Primer 3 (težji)

Izračunaj in poenostavi: $\dfrac{\sqrt{3} + \sqrt{2}}{\sqrt{3} - \sqrt{2}} - \dfrac{\sqrt{3} - \sqrt{2}}{\sqrt{3} + \sqrt{2}}$.

**Podatki:** dan je izraz $\dfrac{\sqrt{3} + \sqrt{2}}{\sqrt{3} - \sqrt{2}} - \dfrac{\sqrt{3} - \sqrt{2}}{\sqrt{3} + \sqrt{2}}$ (brez dodatnih številskih podatkov)
**Iščemo:** vrednost izraza v najpreprostejši obliki

:::formula
$\left(\sqrt{a} \pm \sqrt{b}\right)^2 = a \pm 2\sqrt{ab} + b$ in $\;\left(\sqrt{a} - \sqrt{b}\right)\left(\sqrt{a} + \sqrt{b}\right) = a - b$
:::

**Rešitev:**

1. Prvi ulomek razširimo s $\sqrt{3} + \sqrt{2}$: imenovalec je $3 - 2 = 1$, števec pa $\left(\sqrt{3} + \sqrt{2}\right)^2 = 3 + 2\sqrt{6} + 2 = 5 + 2\sqrt{6}$. Prvi ulomek je torej $5 + 2\sqrt{6}$.
2. Drugi ulomek razširimo s $\sqrt{3} - \sqrt{2}$: imenovalec je spet $3 - 2 = 1$, števec pa $\left(\sqrt{3} - \sqrt{2}\right)^2 = 3 - 2\sqrt{6} + 2 = 5 - 2\sqrt{6}$.
3. Odštejemo: $\left(5 + 2\sqrt{6}\right) - \left(5 - 2\sqrt{6}\right) = 4\sqrt{6}$.
4. Preverjanje: prvi ulomek je približno $9{,}899$, drugi $0{,}101$, razlika $9{,}798$ in $4\sqrt{6} \approx 9{,}798$.
5. Odgovor: vrednost izraza je $4\sqrt{6}$.

## Pogoste napake

- **Koren vsote kot vsota korenov.** Zapis $\sqrt{a + b} = \sqrt{a} + \sqrt{b}$ je napačen, saj pravilo velja le za produkt in količnik. Če je v korenu vsota, je ne smeš razdeliti. Preizkus: $\sqrt{9 + 16} = 5 \ne 7$.
- **$\sqrt{x^2} = x$.** To velja le za $x \ge 0$. Za $x = -3$ je $\sqrt{(-3)^2} = 3$. Pravilno: $\sqrt{x^2} = |x|$.
- **Seštevanje različnih korenov.** $2\sqrt{3} + 3\sqrt{5} = 5\sqrt{8}$ ni res. Seštejemo samo člene z enakim številom pod korenom. Najprej delno korenimo, nato šele ugotovi, ali so istovrstni.
- **Napačen faktor pri racionalizaciji.** Pri $\dfrac{1}{\sqrt{5} - \sqrt{2}}$ ulomka ne smeš razširiti z $\sqrt{5} - \sqrt{2}$, ker dobiš $\left(\sqrt{5} - \sqrt{2}\right)^2 = 7 - 2\sqrt{10}$, ki še vedno vsebuje koren. Razširiti moraš z izrazom nasprotnega znaka $\sqrt{5} + \sqrt{2}$, da dobiš $5 - 2 = 3$.
- **Delno korenjenje do polovice.** $\sqrt{72} = 2\sqrt{18}$ drži, a ni končna oblika, ker je v $18$ še popolni kvadrat $9$. Izvleči moraš *največji* popolni kvadrat: $72 = 36 \cdot 2$, zato je $\sqrt{72} = 6\sqrt{2}$.

## Povzetek

- $\sqrt{a}$ je definiran za $a \ge 0$ in je nenegativen; $\left(\sqrt{a}\right)^2 = a$, $\sqrt{x^2} = |x|$.
- Za $a, b \ge 0$: $\sqrt{ab} = \sqrt{a}\sqrt{b}$ in $\sqrt{\dfrac{a}{b}} = \dfrac{\sqrt{a}}{\sqrt{b}}$ ($b > 0$); pri vsoti pravila ni: $\sqrt{a + b} \ne \sqrt{a} + \sqrt{b}$.
- Sodi koren negativnega števila ni realen; lihi koren je: $\sqrt[3]{-8} = -2$.
- Seštevamo samo istovrstne korene: $p\sqrt{b} + q\sqrt{b} = (p + q)\sqrt{b}$.
- Delno korenjenje: $\sqrt{a^2 b} = a\sqrt{b}$, izvleči moraš največji popolni kvadrat.
- Racionalizacija: $\dfrac{a}{\sqrt{b}} = \dfrac{a\sqrt{b}}{b}$.
- Konjugirani izraz: $\left(\sqrt{a} - \sqrt{b}\right)\left(\sqrt{a} + \sqrt{b}\right) = a - b$.

## Drugače: Na sliki

Kvadratni koren je **dolžina stranice kvadrata** z dano ploščino. Kvadrat s stranico $1\,\text{cm}$ ima ploščino $1\,\text{cm}^2$, njegova diagonala pa je po Pitagorovem izreku dolga $\sqrt{2}\,\text{cm}$. Kvadrat s ploščino $2\,\text{cm}^2$ ima torej stranico $\sqrt{2}\,\text{cm} \approx 1{,}41\,\text{cm}$.

Pravilo za produkt vidimo na pravokotniku s stranicama $\sqrt{2}$ in $\sqrt{3}$: njegova ploščina je $\sqrt{2} \cdot \sqrt{3}$, kar je enako ploščini kvadrata s stranico $\sqrt{6}$. Zato je $\sqrt{2}\sqrt{3} = \sqrt{6}$. Pri $\sqrt{6} \approx 2{,}449$ to tudi preveriš: $1{,}414 \cdot 1{,}732 \approx 2{,}449$.

Graf funkcije $y = \sqrt{x}$ je v prvem kvadrantu "položena polovica parabole". Začne se v izhodišču, nato pa vedno bolj počasi raste. Nekaj točk:

| $x$ | $0$ | $1$ | $4$ | $9$ | $16$ |
|---|---|---|---|---|---|
| $y = \sqrt{x}$ | $0$ | $1$ | $2$ | $3$ | $4$ |

Za negativen $x$ grafa ni, saj koren negativnega števila ni realen. Graf lahko preizkusiš v simulaciji spodaj.

## Drugače: Iz vsakdanjega življenja

Poglej list papirja A4. Njegovi stranici sta dolgi $297\,\text{mm}$ in $210\,\text{mm}$, razmerje je $\dfrac{297}{210} \approx 1{,}414$, kar je približno $\sqrt{2}$. To ni naključje. Če list prepogneš na polovico, dobiš format A5 s stranicama $210\,\text{mm}$ in $148{,}5\,\text{mm}$ in razmerje je spet približno $1{,}414$. Z računom: če je daljša stranica $x$ in krajša $y$ ter $\dfrac{x}{y} = \sqrt{2}$, ima polovica stranici $y$ in $\dfrac{x}{2}$, razmerje pa je $\dfrac{y}{x/2} = \dfrac{2}{\sqrt{2}} = \sqrt{2}$. Tu smo racionalizirali: $\dfrac{2}{\sqrt{2}} = \dfrac{2\sqrt{2}}{2} = \sqrt{2}$.

Še en primer: kvadratna soba ima ploščino $50\,\text{m}^2$. Stranica je $\sqrt{50} = 5\sqrt{2} \approx 7{,}07\,\text{m}$. Zapis $5\sqrt{2}$ ti pove več kot $\sqrt{50}$: stranica je petkrat daljša od diagonale kvadrata s stranico $1\,\text{m}$.

## Drugače: Korak za korakom s številkami

**Delno korenjenje $\sqrt{180}$.**

1. Razstavi število pod korenom na praštevila: $180 = 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 = 2^2 \cdot 3^2 \cdot 5$.
2. Vsak par enakih praštevil gre ven iz korena kot eno število: $\sqrt{2^2 \cdot 3^2 \cdot 5} = 2 \cdot 3 \cdot \sqrt{5}$.
3. Rezultat je $6\sqrt{5}$.
4. Preverjanje: $\sqrt{180} \approx 13{,}416$ in $6\sqrt{5} \approx 6 \cdot 2{,}236 = 13{,}416$.

**Racionalizacija $\dfrac{7}{2\sqrt{5}}$.**

1. V imenovalcu je koren $\sqrt{5}$. Ulomek razširimo s $\sqrt{5}$, ne z $2\sqrt{5}$.
2. Števec: $7 \cdot \sqrt{5} = 7\sqrt{5}$. Imenovalec: $2\sqrt{5} \cdot \sqrt{5} = 2 \cdot 5 = 10$.
3. Rezultat: $\dfrac{7\sqrt{5}}{10}$.
4. Preverjanje: $\dfrac{7}{2 \cdot 2{,}236} \approx 1{,}565$ in $\dfrac{7 \cdot 2{,}236}{10} \approx 1{,}565$.

**Kubični koren $\sqrt[3]{54}$.** Najdemo popolni kubus: $54 = 27 \cdot 2$, zato je $\sqrt[3]{54} = 3\sqrt[3]{2} \approx 3{,}78$.

## Drugače: Bolj natančno

**Zakaj velja pravilo za produkt?** Naj bo $a, b \ge 0$. Število $\sqrt{a}\sqrt{b}$ je nenegativno in njegov kvadrat je $\left(\sqrt{a}\sqrt{b}\right)^2 = \sqrt{a}^2 \cdot \sqrt{b}^2 = ab$. Edino nenegativno število s kvadratom $ab$ pa je po definiciji $\sqrt{ab}$, zato je $\sqrt{a}\sqrt{b} = \sqrt{ab}$.

**Zakaj je $\sqrt{x^2} = |x|$?** Število $\sqrt{x^2}$ je po definiciji nenegativno in ima kvadrat $x^2$. Za $x \ge 0$ ima ta lastnost število $x$, za $x < 0$ pa število $-x$. To je ravno definicija absolutne vrednosti.

**Zakaj konjugirani izraz deluje?** Pri produktu $(u - v)(u + v)$ se mešana člena uničita in ostane $u^2 - v^2$. Če vstavimo $u = \sqrt{a}$ in $v = \sqrt{b}$, kvadrata korenov izgineta in ostane racionalno število $a - b$.

**Zakaj je $\sqrt{2}$ iracionalen?** Denimo, da je $\sqrt{2} = \dfrac{p}{q}$ s tujima naravnima številoma $p$ in $q$. Potem je $p^2 = 2q^2$, torej je $p^2$ sodo, zato je sodo tudi $p$. Zapišemo $p = 2r$ in dobimo $4r^2 = 2q^2$, torej $q^2 = 2r^2$ in je sodo tudi $q$. To je protislovje, saj $p$ in $q$ nista tuja.

## Preveri se

? Kolikšen je $\sqrt{75}$ v obliki z delnim korenjenjem?
- $3\sqrt{5}$
+ $5\sqrt{3}$
- $25\sqrt{3}$
> $75 = 25 \cdot 3$, zato je $\sqrt{75} = 5\sqrt{3}$. Rezultat $3\sqrt{5}$ je $\sqrt{45}$.

? Kolikšen je $\sqrt{(-7)^2}$?
- $-7$
+ $7$
- $49$
> $\sqrt{(-7)^2} = \sqrt{49} = 7 = |-7|$. Koren je vedno nenegativen.

? Racionaliziraj imenovalec: $\dfrac{6}{\sqrt{2}}$.
- $6\sqrt{2}$
+ $3\sqrt{2}$
- $3$
> $\dfrac{6}{\sqrt{2}} = \dfrac{6\sqrt{2}}{2} = 3\sqrt{2}$. Ulomek razširimo s $\sqrt{2}$, imenovalec postane $2$.

? Kolikšen je $\sqrt[3]{-27}$?
- $3$
+ $-3$
- Realnega števila ni.
> Kubični koren je definiran tudi za negativna števila, ker je $(-3)^3 = -27$.
