---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

V temi o algebrskih izrazih si se naučil odpirati oklepaje: $(x+2)(x+3) = x^2 + 5x + 6$. Poznaš tudi obrazec $(a+b)(a-b) = a^2 - b^2$ in kvadrat dvočlenika. Pri vsem tem si šel v isto smer, od produkta k vsoti.

**Razstavljanje** je pot v nasprotno smer: izraz, ki je vsota, zapišemo kot produkt. Tako kot število $91$ zapišemo kot $7 \cdot 13$, zapišemo izraz $x^2 + 5x + 6$ kot $(x+2)(x+3)$. Podobno je razcepu naravnega števila na prafaktorje, le da zdaj nastopajo tudi črke.

Zakaj je to koristno? Izraz v obliki produkta je veliko lažje obvladati. Produkt je enak $0$ samo takrat, ko je vsaj en faktor enak $0$, zato iz razcepa takoj vidiš, kdaj je izraz nič. Razstavljanje boš nujno potreboval za krajšanje in seštevanje ulomljenih izrazov, ki sledita v naslednji temi. Pomaga ti tudi pri računanju na pamet: $52^2 - 48^2$ izračunaš v glavi, če ga zapišeš kot $(52-48)(52+48)$.

## Razlaga

**1. Kaj pomeni razstaviti.** Razstaviti izraz pomeni zapisati ga kot produkt faktorjev. Razcep je **popoln**, ko noben faktor ni več mogoče razstaviti naprej. Pravilnost vedno preveriš s preizkusom: faktorje zmnožiš in moraš dobiti prvotni izraz.

**2. Izpostavljanje skupnega faktorja.** Zakon o razčlenjevanju (distributivnost) $ab + ac = a(b + c)$ preberemo v obratni smeri. Postopek:

1. Poišči največji skupni delitelj vseh koeficientov.
2. Vsako spremenljivko, ki nastopa v vseh členih, vzemi z najmanjšim eksponentom.
3. Produkt teh dveh delov je skupni faktor. Vsak člen deli z njim in ostanke napiši v oklepaj.

Primer: v $12x^3y - 18x^2y^2$ je največji skupni delitelj koeficientov $6$, spremenljivka $x$ ima najmanjši eksponent $2$, spremenljivka $y$ pa $1$. Skupni faktor je $6x^2y$ in velja $12x^3y - 18x^2y^2 = 6x^2y(2x - 3y)$. Če je skupni faktor tudi cel oklepaj, ga izpostaviš prav tako: $a(x+1) + b(x+1) = (a+b)(x+1)$.

**Izpostavljanje po skupinah.** Pri štirih členih jih združimo v dva para, ki imata vsak svoj skupni faktor, in upamo, da se v oklepajih pokaže enak izraz:

$$ax + ay + bx + by = a(x+y) + b(x+y) = (a+b)(x+y).$$

Če izpostavimo negativen faktor, se vsem členom v oklepaju spremeni predznak: $-a - b = -(a+b)$ in $b - a = -(a - b)$.

**3. Obrazci za razstavljanje.** Znane obrazce iz algebrskih izrazov preberi od desne proti levi:

| Kako izraz izgleda | Obrazec | Primer |
|---|---|---|
| dva člena, med njima minus, oba kvadrata | $a^2 - b^2 = (a-b)(a+b)$ | $9x^2 - 16 = (3x-4)(3x+4)$ |
| trije členi, kvadrat vsote | $a^2 + 2ab + b^2 = (a+b)^2$ | $x^2 + 10x + 25 = (x+5)^2$ |
| trije členi, kvadrat razlike | $a^2 - 2ab + b^2 = (a-b)^2$ | $4x^2 - 12x + 9 = (2x-3)^2$ |

Pri razliki kvadratov je pomembno, da prepoznaš kvadrata: $9x^2 = (3x)^2$ in $16 = 4^2$. Izraz $a^2 + b^2$ (z znakom plus) z realnimi števili ni mogoče razstaviti.

**4. Vietovo pravilo.** Poglej, kaj dobiš, ko zmnožiš dva dvočlenika:

$$(x+a)(x+b) = x^2 + (a+b)\,x + a\cdot b.$$

Če je torej dan trinom $x^2 + px + q$, iščemo števili $a$ in $b$, za kateri velja

$$a + b = p \qquad \text{in} \qquad a \cdot b = q,$$

in potem je $x^2 + px + q = (x+a)(x+b)$. Najprej zapiši vse pare celih faktorjev števila $q$, nato med njimi poišči par z vsoto $p$. Predznaka ti pomagata zožiti iskanje:

| Predznak $q$ | Predznak $p$ | Predznaka iskanih števil |
|---|---|---|
| $q > 0$ | $p > 0$ | obe števili sta pozitivni |
| $q > 0$ | $p < 0$ | obe števili sta negativni |
| $q < 0$ | poljuben | števili imata različna predznaka, večje po absolutni vrednosti ima predznak števila $p$ |

Primer: $x^2 + 7x + 12$. Iščemo števili z vsoto $7$ in produktom $12$. Pari faktorjev števila $12$ so $1\cdot12$, $2\cdot6$, $3\cdot4$. Vsoto $7$ ima par $3$ in $4$, zato je $x^2 + 7x + 12 = (x+3)(x+4)$. Če takega para ni, trinoma s celimi števili ne moremo razstaviti.

Če pred $x^2$ stoji koeficient, ki ni $1$, najprej poskusi izpostaviti skupni faktor: $2x^2 - 10x + 12 = 2(x^2 - 5x + 6) = 2(x-2)(x-3)$.

**5. Vrstni red korakov.** Pri vsaki nalogi ravnaj takole:

1. Izpostavi skupni faktor, če obstaja.
2. Preštej člene v oklepaju. Dva člena: poskusi razliko kvadratov. Trije: popolni kvadrat ali Vietovo pravilo. Štirje: združi po skupinah.
3. Vsak nastali faktor preglej, ali ga je mogoče razstaviti naprej.
4. Naredi preizkus z množenjem.

## Rešeni primeri

### Primer 1 (lažji)

Razstavi izraz $12a^2b - 18ab^2 + 6ab$.

**Podatki:** izraz $12a^2b - 18ab^2 + 6ab$ s tremi členi
**Iščemo:** popoln razcep izraza v produkt

:::formula
$ab + ac + ad = a(b + c + d)$
:::

**Rešitev:**

1. Koeficienti so $12$, $18$ in $6$. Njihov največji skupni delitelj je $6$.
2. Spremenljivka $a$ nastopa z eksponenti $2$, $1$, $1$ (najmanjši je $1$), spremenljivka $b$ z eksponenti $1$, $2$, $1$ (najmanjši je $1$). Skupni faktor je $6ab$.
3. Delimo posamezne člene: $12a^2b : 6ab = 2a$, $18ab^2 : 6ab = 3b$, $6ab : 6ab = 1$.
4. Zapišemo: $12a^2b - 18ab^2 + 6ab = 6ab(2a - 3b + 1)$.
5. Preizkus: $6ab \cdot 2a = 12a^2b$, $6ab \cdot 3b = 18ab^2$, $6ab \cdot 1 = 6ab$. Ujema se.
6. Odgovor: $12a^2b - 18ab^2 + 6ab = 6ab(2a - 3b + 1)$.

### Primer 2 (srednji)

Razstavi trinom $x^2 - 5x - 14$.

**Podatki:** trinom $x^2 - 5x - 14$, torej $p = -5$ in $q = -14$
**Iščemo:** števili $a$ in $b$, da je $x^2 - 5x - 14 = (x+a)(x+b)$

:::formula
Vietovo pravilo: $x^2 + px + q = (x+a)(x+b)$, če je $a + b = p$ in $a \cdot b = q$.
:::

**Rešitev:**

1. Iščemo števili z vsoto $-5$ in produktom $-14$.
2. Produkt je negativen, zato imata števili različna predznaka. Vsota je negativna, zato ima večje po absolutni vrednosti predznak minus.
3. Pari faktorjev števila $14$ so $1 \cdot 14$ in $2 \cdot 7$. Pri paru $1$ in $-14$ je vsota $-13$, pri paru $2$ in $-7$ pa $2 + (-7) = -5$. Drugi par ustreza.
4. Zapišemo $a = 2$ in $b = -7$: $x^2 - 5x - 14 = (x+2)(x-7)$.
5. Preizkus: $(x+2)(x-7) = x^2 - 7x + 2x - 14 = x^2 - 5x - 14$. Ujema se.
6. Odgovor: $x^2 - 5x - 14 = (x+2)(x-7)$.

### Primer 3 (težji)

Razstavi do konca izraz $2x^3 + 4x^2 - 18x - 36$.

**Podatki:** izraz $2x^3 + 4x^2 - 18x - 36$ s štirimi členi
**Iščemo:** popoln razcep izraza v produkt

:::formula
$ab + ac = a(b + c)$, $\quad ax + ay + bx + by = (a+b)(x+y)$, $\quad a^2 - b^2 = (a-b)(a+b)$
:::

**Rešitev:**

1. Vsi koeficienti so deljivi z $2$, zato izpostavimo $2$: $2x^3 + 4x^2 - 18x - 36 = 2(x^3 + 2x^2 - 9x - 18)$.
2. V oklepaju so štirje členi. Združimo prva dva in zadnja dva: $x^2(x+2) - 9(x+2)$.
3. Izpostavimo skupni faktor $(x+2)$: $(x+2)(x^2 - 9)$.
4. Drugi faktor je razlika kvadratov, $x^2 - 9 = (x-3)(x+3)$.
5. Skupaj: $2(x+2)(x-3)(x+3)$.
6. Preizkus: $(x-3)(x+3) = x^2 - 9$, nato $(x+2)(x^2-9) = x^3 + 2x^2 - 9x - 18$, in po množenju z $2$ dobimo $2x^3 + 4x^2 - 18x - 36$. Preverimo še pri $x = 1$: prvotni izraz je $2 + 4 - 18 - 36 = -48$, razcep pa $2 \cdot 3 \cdot (-2) \cdot 4 = -48$.
7. Odgovor: $2x^3 + 4x^2 - 18x - 36 = 2(x+2)(x-3)(x+3)$.

## Pogoste napake

- **Pozabljena enica pri izpostavljanju.** Zapišeš $4x^2 + 4x = 4x \cdot x$. Razlog: ko je cel člen enak skupnemu faktorju, ne ostane nič, ampak $1$. Pravilno: $4x^2 + 4x = 4x(x + 1)$. Preizkus: $4x(x+1) = 4x^2 + 4x$.
- **Razcep ni popoln.** Zapišeš $6x^2 - 9x = 3(2x^2 - 3x)$ ali se ustaviš pri $x^4 - 16 = (x^2-4)(x^2+4)$. Razlog: nisi izpostavil največjega skupnega faktorja (tudi spremenljivke) oziroma nisi pogledal, ali se kak faktor da razstaviti naprej. Pravilno: $6x^2 - 9x = 3x(2x - 3)$ in $x^4 - 16 = (x-2)(x+2)(x^2+4)$.
- **Napačen predznak pri izpostavljanju minusa.** Zapišeš $-x^2 + 4x = -x(x + 4)$. Razlog: ko izpostaviš $-x$, se predznaka vseh členov v oklepaju obrneta. Pravilno: $-x^2 + 4x = -x(x - 4)$. Preizkus: $-x \cdot x = -x^2$ in $-x \cdot (-4) = 4x$.
- **Mešanje obrazcev.** Zapišeš $x^2 + 9 = (x+3)^2$ ali $x^2 - 9 = (x-3)^2$. Razlog: $(x+3)^2 = x^2 + 6x + 9$ ima srednji člen, razlika kvadratov pa ga nima, vsota kvadratov pa se ne da razstaviti. Pravilno: $x^2 - 9 = (x-3)(x+3)$, izraz $x^2 + 9$ ostane nerazstavljen.
- **Vietovo pravilo z napačnimi predznaki.** Za $x^2 - 5x + 6$ zapišeš $(x+2)(x+3)$, ker je $2 \cdot 3 = 6$. Razlog: preveril si le produkt, ne pa vsote; $2 + 3 = 5$, ne $-5$. Pravilno: iščeš števili z vsoto $-5$ in produktom $6$, to sta $-2$ in $-3$, zato je $x^2 - 5x + 6 = (x-2)(x-3)$.

## Povzetek

- Razstaviti pomeni zapisati vsoto kot produkt. Preizkus je množenje faktorjev nazaj.
- Izpostavljanje: $ab + ac = a(b+c)$. Vzemi največji skupni delitelj koeficientov in vsako spremenljivko z najmanjšim eksponentom. Pazi na člen, ki postane $1$.
- Po skupinah: $ax + ay + bx + by = (a+b)(x+y)$.
- Razlika kvadratov: $a^2 - b^2 = (a-b)(a+b)$. Vsota kvadratov $a^2 + b^2$ se ne da razstaviti.
- Popolni kvadrat: $a^2 \pm 2ab + b^2 = (a \pm b)^2$.
- Vietovo pravilo: $x^2 + px + q = (x+a)(x+b)$, kjer je $a + b = p$ in $a \cdot b = q$.
- Vrstni red: skupni faktor, nato obrazec glede na število členov, nato preglej vse faktorje in na koncu preizkus.

## Drugače: Na sliki

Izraze si predstavljaj kot ploščine pravokotnikov.

**Izpostavljanje.** Pravokotnik z višino $a$ in širino $b + c$ sestavljata dva pravokotnika, ki imata višino $a$ ter širini $b$ in $c$. Njuni ploščini sta $ab$ in $ac$. Cela ploščina je $a(b+c)$ in tudi $ab + ac$. Razstavljanje pomeni, da dva pravokotnika s skupno stranico $a$ prilepiš skupaj.

**Razlika kvadratov.** Iz kvadrata s stranico $a$ izreži kvadrat s stranico $b$ v spodnjem desnem kotu. Ostane lik v obliki črke L s ploščino $a^2 - b^2$. Razreži ga na zgornji trak (višina $a-b$, širina $a$) in spodnji levi kos (višina $b$, širina $a-b$). Drugi kos zasukaj in ga prilepi desno k prvemu. Nastane pravokotnik z višino $a-b$ in širino $a+b$, torej $a^2 - b^2 = (a-b)(a+b)$.

**Vietovo pravilo.** Pravokotnik s stranicama $x+3$ in $x+4$ razdelimo na štiri dele:

| | $x$ | $4$ |
|---|---|---|
| $x$ | $x^2$ | $4x$ |
| $3$ | $3x$ | $12$ |

Vsota ploščin je $x^2 + 4x + 3x + 12 = x^2 + 7x + 12$. Srednji člen je nastal iz $4x + 3x$, torej je $7 = 3 + 4$, zadnji člen pa iz $3 \cdot 4 = 12$.

## Drugače: Iz vsakdanjega življenja

**Nakup.** Kupiš $12$ zvezkov po $z$ evrov in $12$ svinčnikov po $s$ evrov. Plačilo je $12z + 12s$. Lažje je najprej izračunati ceno enega kompleta in jo pomnožiti: $12(z + s)$. To je izpostavljanje skupnega faktorja v praksi. Pri številkah: $37 \cdot 8 + 37 \cdot 2 = 37 \cdot 10 = 370$.

**Računanje na pamet.** Razliko kvadratov uporabiš za hitre račune: $98 \cdot 102 = (100-2)(100+2) = 100^2 - 2^2 = 10\,000 - 4 = 9\,996$. Tudi $52^2 - 48^2 = (52-48)(52+48) = 4 \cdot 100 = 400$. Preveri: $2\,704 - 2\,304 = 400$.

**Dimenzije.** Pravokotna terasa ima ploščino $x^2 + 7x + 12$ kvadratnih metrov. Če nariše načrt, mora delavec vedeti, koliko merita stranici. Razcep $(x+3)(x+4)$ pove, da sta stranici dolgi $x+3$ in $x+4$ metra. Za $x = 2$ je to pravokotnik $5\,\text{m} \times 6\,\text{m}$ s ploščino $30\,\text{m}^2$, kar se ujema z $4 + 14 + 12 = 30$.

## Drugače: Korak za korakom s številkami

**Naloga A:** razstavi $4x^3 - 36x$.

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Izpostavimo $4x$ (koeficienta sta $4$ in $36$, $D = 4$; $x$ z najmanjšim eksponentom $1$) | $4x(x^2 - 9)$ |
| 2 | Drugi faktor je razlika kvadratov $x^2 - 3^2$ | $4x(x-3)(x+3)$ |
| 3 | Preizkus pri $x = 2$: prvotni izraz $4 \cdot 8 - 72 = -40$, razcep $4 \cdot 2 \cdot (-1) \cdot 5 = -40$ | enako |

Preizkus pri $x = 3$ je še zanimivejši: prvotni izraz je $4 \cdot 27 - 108 = 0$, v razcepu pa je faktor $x - 3 = 0$, zato je produkt $0$.

**Naloga B:** razstavi $x^2 + 2x - 24$. Iščemo števili z vsoto $2$ in produktom $-24$. Ker je vsota pozitivna, ima večje število predznak plus:

| Par (produkt $-24$) | Vsota |
|---|---|
| $-1$ in $24$ | $23$ |
| $-2$ in $12$ | $10$ |
| $-3$ in $8$ | $5$ |
| $-4$ in $6$ | $2$ |

Vsoto $2$ ima zadnji par, zato je $x^2 + 2x - 24 = (x-4)(x+6)$. Preizkus pri $x = 1$: prvotni izraz je $1 + 2 - 24 = -21$, razcep pa $(-3) \cdot 7 = -21$.

## Drugače: Bolj natančno

**Zakaj Vietovo pravilo deluje.** Iz $(x+a)(x+b) = x^2 + bx + ax + ab = x^2 + (a+b)x + ab$ vidiš, da je koeficient pri $x$ vsota števil $a$ in $b$, prosti člen pa njun produkt. Primerjava s $x^2 + px + q$ da natanko pogoja $a + b = p$ in $a \cdot b = q$.

**Zakaj vsote kvadratov ni mogoče razstaviti.** Denimo, da bi veljalo $x^2 + 1 = (x+a)(x+b)$ za vse $x$. Pri $x = -a$ bi bila desna stran enaka $0$, leva pa $a^2 + 1 \ge 1$. To je protislovje. Podobno velja za vsak $a^2 + b^2$ z $b \neq 0$.

**Odvisnost od množice števil.** Izraz $x^2 - 2$ ni razstavljiv s celimi števili, z realnimi števili pa je $x^2 - 2 = (x - \sqrt{2})(x + \sqrt{2})$. V tej temi razstavljamo s celimi števili, razlika kvadratov pa deluje, kadar sta oba člena kvadrata.

**Trinomi z vodilnim koeficientom, različnim od $1$.** Za $2x^2 + 7x + 3$ poišči števili z vsoto $7$ in produktom $2 \cdot 3 = 6$. To sta $1$ in $6$. Srednji člen razbijemo: $2x^2 + x + 6x + 3 = x(2x+1) + 3(2x+1) = (2x+1)(x+3)$. Preizkus: $(2x+1)(x+3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3$.

## Preveri se

? Kateri je popoln razcep izraza $12x^2 - 18x$?
- $6x(2x + 3)$
+ $6x(2x - 3)$
- $6(2x - 3)$
- $3x(4x + 6)$
> Skupni faktor je $6x$ in $12x^2 : 6x = 2x$, $18x : 6x = 3$, torej $6x(2x - 3)$. Preostali zapisi niso enaki prvotnemu izrazu: $6x(2x+3) = 12x^2 + 18x$, $6(2x-3) = 12x - 18$ in $3x(4x+6) = 12x^2 + 18x$.

? Razstavi $49x^2 - 1$.
- $(7x - 1)^2$
+ $(7x - 1)(7x + 1)$
- $(7x + 1)^2$
- $(49x - 1)(x + 1)$
> Izraz je razlika kvadratov, $(7x)^2 - 1^2 = (7x - 1)(7x + 1)$. Kvadrata dvočlenika imata srednji člen ($\pm 14x$), izraz $(49x-1)(x+1) = 49x^2 + 48x - 1$ pa tudi ni enak prvotnemu.

? Kateri razcep ustreza trinomu $x^2 - x - 12$?
- $(x - 3)(x + 4)$
+ $(x + 3)(x - 4)$
- $(x - 3)(x - 4)$
- $(x + 3)(x + 4)$
> Iščemo števili z vsoto $-1$ in produktom $-12$: to sta $3$ in $-4$. Preizkus: $(x+3)(x-4) = x^2 - 4x + 3x - 12 = x^2 - x - 12$. Razcep $(x-3)(x+4)$ da $x^2 + x - 12$, preostala dva pa trinoma $x^2 - 7x + 12$ in $x^2 + 7x + 12$.

? Razstavi do konca: $3x^3 - 12x$.
- $3x(x - 2)^2$
- $3x(x^2 + 4)$
+ $3x(x - 2)(x + 2)$
- $3x(x - 4)(x + 1)$
> Najprej izpostavimo $3x$: $3x(x^2 - 4)$. Drugi faktor je razlika kvadratov, zato je razcep $3x(x-2)(x+2)$. Ostale možnosti dajo $3x(x^2 - 4x + 4)$, $3x^3 + 12x$ in $3x(x^2 - 3x - 4)$.
