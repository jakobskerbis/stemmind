---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Do zdaj si spoznal naravna števila ($1, 2, 3, \dots$), cela števila (tudi negativna, npr. $-5$) in ulomke ter decimalna števila (npr. $\frac{3}{4}$, $0{,}75$). V 8. razredu vse to povežemo v eno množico: **racionalna števila**. Tako lahko računamo z vsemi števili, ki jih srečaš vsak dan: temperatura $-3{,}5\,^\circ\text{C}$, polovica pice $\frac{1}{2}$, dolg $-12{,}40$ evra.

Naučil se boš:

- kako racionalna števila **razvrstiš** po velikosti, tudi ko so negativna in zapisana na različne načine,
- kako z njimi **računaš** in v kakšnem vrstnem redu izvajaš računske operacije v **številskih izrazih**.

## Razlaga

**1. Kaj je racionalno število.** Racionalno število je vsako število, ki ga lahko zapišemo kot ulomek $\dfrac{a}{b}$, kjer sta $a$ in $b$ cela števila in $b \neq 0$. Množico racionalnih števil označimo z $\mathbb{Q}$.

Racionalna so:

- **cela števila**, npr. $5 = \frac{5}{1}$, $-3 = \frac{-3}{1}$,
- **ulomki**, npr. $\frac{2}{3}$, $-\frac{7}{4}$,
- **končna decimalna števila**, npr. $0{,}75 = \frac{3}{4}$, $-1{,}2 = -\frac{6}{5}$,
- **periodična decimalna števila**, npr. $\frac{1}{3} = 0{,}333\ldots = 0{,}\overline{3}$.

**2. Predznak ulomka.** Velja $-\dfrac{a}{b} = \dfrac{-a}{b} = \dfrac{a}{-b}$. Navadno minus pišemo pred ulomek ali v števec.

**3. Številska premica in urejanje.** Racionalna števila ležijo na številski premici. Število, ki je bolj **levo**, je manjše. Zato velja:

- vsako negativno število je manjše od nič in od vsakega pozitivnega števila,
- med negativnimi števili je **manjše tisto, ki ima večjo absolutno vrednost**: $-3 < -2$.

*Absolutna vrednost* $|x|$ je razdalja števila od $0$: $|-3| = 3$, $|3| = 3$.

**4. Kako primerjamo.**

- Ulomke z enakim imenovalcem primerjamo po števcih.
- Ulomke z različnimi imenovalci razširimo na **skupni imenovalec**.
- Če so števila zapisana različno, jih lahko vsa zapišemo kot decimalna ali vsa kot ulomke.

**5. Seštevanje in odštevanje.** Ulomka morata imeti skupni imenovalec:

$$\frac{a}{c} + \frac{b}{c} = \frac{a+b}{c}$$

Odštevanje pomeni prištevanje nasprotnega števila: $x - y = x + (-y)$.

**6. Množenje.** Množimo števec s števcem in imenovalec z imenovalcem:

$$\frac{a}{b}\cdot\frac{c}{d} = \frac{a\cdot c}{b\cdot d}$$

**Pravila za predznak:** enaka predznaka dasta $+$, različna dasta $-$.

**7. Deljenje.** Deljenje z ulomkom pomeni množenje z **obratno vrednostjo** (obratnim ulomkom):

$$\frac{a}{b} : \frac{c}{d} = \frac{a}{b}\cdot\frac{d}{c} \qquad (c \neq 0)$$

Z nič ne smemo deliti.

**8. Vrstni red računskih operacij v številskih izrazih.**

1. Najprej račun v **oklepajih** (od notranjih proti zunanjim).
2. Nato **potence**.
3. Nato **množenje in deljenje** (od leve proti desni).
4. Nazadnje **seštevanje in odštevanje** (od leve proti desni).

## Rešeni primeri

### Primer 1 (lažji): urejanje po velikosti

Uredi po velikosti od najmanjšega do največjega: $-\dfrac{3}{4},\ 0{,}5,\ -0{,}8,\ \dfrac{2}{3}$.

1. Števila zapišemo v decimalni obliki, ker jih je tako najlažje primerjati: $-\frac{3}{4} = -0{,}75$, $0{,}5$, $-0{,}8$, $\frac{2}{3} = 0{,}666\ldots$
2. Ločimo negativna in pozitivna. Negativni sta $-0{,}75$ in $-0{,}8$, pozitivni sta $0{,}5$ in $0{,}666\ldots$ Negativna so vedno manjša od pozitivnih.
3. Med negativnima je večja absolutna vrednost pri $-0{,}8$ ($0{,}8 > 0{,}75$), zato je $-0{,}8 < -0{,}75$.
4. Med pozitivnima: $0{,}5 < 0{,}666\ldots$
5. **Odgovor:** $-0{,}8 < -\dfrac{3}{4} < 0{,}5 < \dfrac{2}{3}$.

### Primer 2: seštevanje in odštevanje ulomkov

Izračunaj $\dfrac{2}{3} - \dfrac{5}{6} + \dfrac{1}{4}$.

1. Imenovalci so $3$, $6$ in $4$. Najmanjši skupni večkratnik je $12$, zato je to skupni imenovalec.
2. Razširimo: $\frac{2}{3} = \frac{8}{12}$ (pomnožili smo z $4$), $\frac{5}{6} = \frac{10}{12}$ (pomnožili smo z $2$), $\frac{1}{4} = \frac{3}{12}$ (pomnožili smo s $3$).
3. Seštejemo števce, imenovalec ostane: $\dfrac{8 - 10 + 3}{12} = \dfrac{1}{12}$.
4. Ulomek $\frac{1}{12}$ se ne da več krajšati, zato je to končni rezultat.

### Primer 3 (težji): številski izraz

Izračunaj $\left(-\dfrac{3}{4} + \dfrac{1}{2}\right) : \left(-\dfrac{1}{8}\right) - 2\cdot\left(-\dfrac{3}{2}\right)^2$.

1. **Prvi oklepaj:** $-\frac{3}{4} + \frac{1}{2} = -\frac{3}{4} + \frac{2}{4} = -\frac{1}{4}$.
2. **Potenca:** $\left(-\frac{3}{2}\right)^2 = \frac{9}{4}$. Rezultat je pozitiven, ker je kvadrat negativnega števila pozitiven.
3. Izraz je zdaj $-\dfrac{1}{4} : \left(-\dfrac{1}{8}\right) - 2\cdot\dfrac{9}{4}$.
4. **Deljenje:** $-\frac{1}{4} : \left(-\frac{1}{8}\right) = -\frac{1}{4}\cdot(-8) = \frac{8}{4} = 2$. Minus krat minus je plus.
5. **Množenje:** $2 \cdot \frac{9}{4} = \frac{18}{4} = \frac{9}{2}$.
6. **Odštevanje:** $2 - \frac{9}{2} = \frac{4}{2} - \frac{9}{2} = -\frac{5}{2}$.
7. **Odgovor:** $-\dfrac{5}{2} = -2{,}5$.

## Pogoste napake

- **Seštevanje števcev in imenovalcev.** $\frac{1}{2} + \frac{1}{3}$ ni $\frac{2}{5}$. Najprej poiščemo skupni imenovalec: $\frac{3}{6} + \frac{2}{6} = \frac{5}{6}$.
- **Napačno urejanje negativnih števil.** $-5$ je manjše od $-2$, čeprav je $5 > 2$. Bolj levo na premici pomeni manjše.
- **Deljenje brez obrata.** $\frac{1}{2} : \frac{1}{4}$ ni $\frac{1}{8}$. Pravilno: $\frac{1}{2}\cdot 4 = 2$.
- **Predznak potence.** $\left(-\frac{3}{2}\right)^2 = \frac{9}{4}$, a $-\left(\frac{3}{2}\right)^2 = -\frac{9}{4}$. Oklepaj je pomemben.
- **Napačen vrstni red.** V izrazu $2 - 3\cdot(-4)$ najprej množimo, šele nato odštevamo.
- **Pozabljeno krajšanje.** Rezultat vedno okrajšaj, če gre.

## Povzetek

- Racionalna števila so števila oblike $\frac{a}{b}$, $a, b \in \mathbb{Z}$, $b \neq 0$. Vključujejo cela števila, ulomke in končna ter periodična decimalna števila.
- Večje je tisto število, ki je na številski premici bolj desno. Pri negativnih številih je manjše tisto z večjo absolutno vrednostjo.
- Za seštevanje in odštevanje potrebujemo skupni imenovalec. Množimo števec s števcem in imenovalec z imenovalcem. Delimo tako, da množimo z obratnim ulomkom.
- Vrstni red: oklepaji, potence, množenje in deljenje, seštevanje in odštevanje.
- Predznaki: enaka predznaka dasta $+$, različna dasta $-$.

## Drugače: Na sliki

Nariši številsko premico z enoto $1$ in označi točke $-2, -1, 0, 1, 2$. Racionalna števila ležijo tudi med njimi:

- $\frac{1}{2}$ je na sredini med $0$ in $1$,
- $-\frac{3}{2} = -1{,}5$ je na sredini med $-2$ in $-1$,
- $\frac{3}{4} = 0{,}75$ je tri četrtine poti od $0$ do $1$.

Kar je na premici bolj desno, je večje. Zato je $-1{,}5 < -0{,}5 < 0{,}75$.

Seštevanje je **premik po premici**: pri $-1{,}5 + 2$ začneš pri $-1{,}5$ in se premakneš za $2$ v desno, pristaneš pri $0{,}5$. Odštevanje pozitivnega števila je premik v levo.

## Drugače: Iz vsakdanjega življenja

**Temperatura.** Zjutraj je $-3{,}5\,^\circ\text{C}$, čez dan se segreje za $6\,^\circ\text{C}$. Izračunaš $-3{,}5 + 6 = 2{,}5$, torej $2{,}5\,^\circ\text{C}$. Hladneje je tisto, kar je bolj levo: $-8\,^\circ\text{C}$ je hladneje kot $-3\,^\circ\text{C}$.

**Denar.** Negativno število pomeni dolg. Če imaš na računu $-12{,}40$ evra (si v minusu) in vložiš $20$ evrov, imaš $-12{,}40 + 20 = 7{,}60$ evra.

**Kuhanje.** Recept zahteva $\frac{3}{4}$ litra mleka, ti pa pripraviš le polovico. Izračunaš $\frac{1}{2}\cdot\frac{3}{4} = \frac{3}{8}$ litra. Če želiš vedeti, koliko kozarcev po $\frac{1}{4}$ litra napolniš s $\frac{3}{4}$ litra, deliš: $\frac{3}{4} : \frac{1}{4} = \frac{3}{4}\cdot 4 = 3$ kozarce.

## Drugače: Korak za korakom s številkami

**Naloga:** izračunaj $-1{,}5 + \dfrac{3}{4}$.

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Števili zapišemo v isti obliki. Izberemo ulomke: $-1{,}5 = -\frac{3}{2}$ | $-\frac{3}{2} + \frac{3}{4}$ |
| 2 | Skupni imenovalec je $4$. $-\frac{3}{2} = -\frac{6}{4}$ | $-\frac{6}{4} + \frac{3}{4}$ |
| 3 | Seštejemo števca: $-6 + 3 = -3$ | $-\frac{3}{4}$ |
| 4 | Preverimo z decimalnim zapisom: $-1{,}5 + 0{,}75 = -0{,}75$ | $-\frac{3}{4} = -0{,}75$ ✓ |

**Predznaki pri množenju in deljenju:**

| Račun | Predznaka | Rezultat |
|---|---|---|
| $(+)\cdot(+)$ | enaka | $+$ |
| $(-)\cdot(-)$ | enaka | $+$ |
| $(+)\cdot(-)$ | različna | $-$ |
| $(-)\cdot(+)$ | različna | $-$ |

Enako velja za deljenje. Primer: $\left(-\frac{1}{2}\right)\cdot\left(-\frac{4}{3}\right) = +\frac{4}{6} = \frac{2}{3}$.

## Drugače: Bolj natančno

**Definicija.** $\mathbb{Q} = \left\{ \dfrac{a}{b} \;\middle|\; a, b \in \mathbb{Z},\ b \neq 0 \right\}$. Ulomka $\frac{a}{b}$ in $\frac{c}{d}$ predstavljata isto število natanko tedaj, ko je $a\cdot d = b\cdot c$. Zato je npr. $\frac{2}{3} = \frac{8}{12}$, ker je $2\cdot 12 = 3\cdot 8 = 24$.

**Zakaj delimo z obratno vrednostjo?** Deliti z $\frac{c}{d}$ pomeni vprašati, kolikokrat se $\frac{c}{d}$ "skrije" v številu. Ker je $\frac{c}{d}\cdot\frac{d}{c} = 1$, velja $\frac{a}{b} : \frac{c}{d} = \frac{a}{b}\cdot\frac{d}{c}$. Če namreč to pomnožimo z $\frac{c}{d}$, dobimo spet $\frac{a}{b}$.

**Zakaj je minus krat minus plus?** Vemo, da $(-1)\cdot 3 = -3$ in $(-1)\cdot 0 = 0$. Vzorec pri $(-1)\cdot 2, (-1)\cdot 1, (-1)\cdot 0$ je $-2, -1, 0$, rezultat se vsakič poveča za $1$. Nadaljujemo: $(-1)\cdot(-1) = 1$ in $(-1)\cdot(-2) = 2$. Tako ostanejo pravila računanja nespremenjena.

**Periodično število kot ulomek.** Naj bo $x = 0{,}\overline{3} = 0{,}333\ldots$ Potem je $10x = 3{,}333\ldots$ Odštejemo: $10x - x = 3$, torej $9x = 3$ in $x = \frac{1}{3}$. Tudi periodična decimalna števila so torej racionalna.

## Preveri se

? Katero od števil je najmanjše?
- $-\dfrac{1}{4}$
- $-0{,}5$
+ $-\dfrac{2}{3}$
> Zapišemo decimalno: $-0{,}25$, $-0{,}5$, $-0{,}666\ldots$ Med negativnimi števili je najmanjše tisto z največjo absolutno vrednostjo, torej $-\frac{2}{3}$.

? Izračunaj $-\dfrac{1}{2}\cdot\left(-\dfrac{4}{3}\right)$.
- $-\dfrac{2}{3}$
+ $\dfrac{2}{3}$
- $\dfrac{5}{6}$
> Minus krat minus je plus. Množimo števca in imenovalca: $\frac{1\cdot 4}{2\cdot 3} = \frac{4}{6} = \frac{2}{3}$. Odgovor $\frac{5}{6}$ bi dobil, če bi števili seštel.

? Izračunaj $2 - 3\cdot(-4)$.
- $4$
- $-10$
+ $14$
> Najprej množimo: $3\cdot(-4) = -12$. Nato odštejemo: $2 - (-12) = 2 + 12 = 14$. Če bi najprej odštel, bi dobil $(2-3)\cdot(-4) = 4$, kar je napačen vrstni red.
