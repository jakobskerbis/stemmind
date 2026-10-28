---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz geometrije in fizike že poznaš formule, v katerih črke predstavljajo števila: $p = a \cdot b$ za ploščino pravokotnika, $s = v \cdot t$ za pot, $V = a^3$ za prostornino kocke. **Algebrski izraz** je naslednji korak: izraz s črkami, v katerega lahko vstaviš poljubna števila, in pravila, po katerih ga smeš preoblikovati, ne da bi se mu spremenila vrednost. Za to že imaš orodje iz prejšnje teme, saj črke potenciramo in množimo po istih pravilih kot števila.

Zakaj je to uporabno? Z enim izrazom opišeš cel razred računov hkrati. Namesto da posebej računaš ploščino vrta, ki je dolg $12\,\text{m}$ in širok $13\,\text{m}$, in posebej vrta, ki je dolg $22\,\text{m}$ in širok $23\,\text{m}$, napišeš en izraz in vstaviš. Posebni zmnožki, ki jih spoznaš v tej lekciji, pa ti omogočajo tudi računanje na pamet, na primer $99^2$ ali $51 \cdot 49$. Znanje potrebuješ tudi naprej: pri razstavljanju izrazov, pri ulomljenih izrazih in pri linearni funkciji moraš izraze z oklepaji hitro in brez napak poenostavljati.

## Razlaga

**1. Algebrski izraz in njegova vrednost.** Algebrski izraz je izraz iz števil in črk (**spremenljivk**), povezanih z računskimi operacijami. Njegovo **vrednost** dobimo, če namesto črk vstavimo števila. Vzemimo izraz $3x^2 - 5x + 2$. Pri $x = 2$ je njegova vrednost $3 \cdot 4 - 10 + 2 = 4$. Pri $x = -1$ je $3 \cdot (-1)^2 - 5 \cdot (-1) + 2 = 3 + 5 + 2 = 10$. Negativno število pri vstavljanju vedno zapiši v oklepaju.

**2. Enočlenik.** Enočlenik je zmnožek števila in potenc spremenljivk, na primer $-4a^2b^3$. Število $-4$ je **koeficient**, **stopnja** enočlenika pa je vsota eksponentov: $2 + 3 = 5$. Enočlenika sta **podobna**, če imata enak spremenljivi del: $5ab$ in $-2ab$ sta podobna, $5ab$ in $5a^2b$ pa nista.

- Podobne enočlenike seštejemo tako, da seštejemo koeficiente, spremenljivi del pa ostane: $5ab - 2ab = 3ab$. Nepodobnih enočlenikov ne moremo združiti.
- Enočlenike pomnožimo tako, da zmnožimo koeficiente in potence iste spremenljivke po pravilu $a^m \cdot a^n = a^{m+n}$: $(-3a^2b) \cdot (4ab^3) = -12a^3b^4$.

**3. Mnogočlenik.** Vsota enočlenikov je **mnogočlenik**. Mnogočlenik z dvema členoma je dvočlenik (na primer $a + b$), s tremi pa tričlenik (na primer $2x^3 - 5x + 7$). Stopnja mnogočlenika je največja stopnja njegovih členov, pri $2x^3 - 5x + 7$ torej $3$. Člene običajno uredimo po padajočih potencah.

Pri seštevanju in odštevanju mnogočlenikov odpremo oklepaje in združimo podobne člene. Pazi na pravilo: **minus pred oklepajem spremeni predznak vsakemu členu v oklepaju**.

$$(3x^2 - 2x + 1) - (x^2 + 4x - 5) = 3x^2 - 2x + 1 - x^2 - 4x + 5 = 2x^2 - 6x + 6$$

**4. Množenje enočlenika z mnogočlenikom.** Uporabimo razčlenjevalni zakon (distributivnost) $a(b + c) = ab + ac$: z enočlenikom pomnožimo vsak člen v oklepaju.

$$-2x(3x^2 - x + 4) = -6x^3 + 2x^2 - 8x$$

**5. Množenje mnogočlenikov.** Vsak člen prvega mnogočlenika pomnožimo z vsakim členom drugega, nato združimo podobne člene:

$$(a + b)(c + d) = ac + ad + bc + bd.$$

Na primer $(2x + 3)(x - 5) = 2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$. Če ima prvi mnogočlenik $m$ členov, drugi pa $n$, je pred združevanjem $m \cdot n$ členov; pri dveh dvočlenikih jih je torej štiri.

**6. Kvadrat dvočlenika.** Kvadrat pomeni množenje s samim seboj: $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2$. Ker je $ba = ab$, dobimo

$$(a + b)^2 = a^2 + 2ab + b^2, \qquad (a - b)^2 = a^2 - 2ab + b^2.$$

Z besedami: kvadrat prvega člena, dvakratni zmnožek obeh členov in kvadrat drugega člena. Pri razliki je predznak minus le pri srednjem členu, saj je $(-b)^2 = b^2$. Primera: $(x + 4)^2 = x^2 + 8x + 16$ in $(3x - 2)^2 = (3x)^2 - 2 \cdot 3x \cdot 2 + 2^2 = 9x^2 - 12x + 4$.

**7. Zmnožek vsote in razlike.** Pri $(a + b)(a - b) = a^2 - ab + ab - b^2$ se srednja člena uničita:

$$(a + b)(a - b) = a^2 - b^2.$$

Rezultat je razlika kvadratov. Primer: $(2x + 5)(2x - 5) = 4x^2 - 25$.

**8. Kub dvočlenika.** Izpeljemo ga iz kvadrata: $(a + b)^3 = (a + b)^2(a + b) = (a^2 + 2ab + b^2)(a + b)$. Pomnožimo vsak člen z vsakim: $a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3$. Podobne člene združimo:

$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3, \qquad (a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3.$$

Koeficienti so $1, 3, 3, 1$. Potence prvega člena od leve proti desni padajo, potence drugega naraščajo. Pri razliki se predznaki izmenjujejo: $+, -, +, -$. Primera: $(x + 2)^3 = x^3 + 6x^2 + 12x + 8$ in $(x - 2)^3 = x^3 - 6x^2 + 12x - 8$.

**9. Pregled.**

| Izraz | Ime | Rezultat |
|---|---|---|
| $(a + b)^2$ | kvadrat vsote | $a^2 + 2ab + b^2$ |
| $(a - b)^2$ | kvadrat razlike | $a^2 - 2ab + b^2$ |
| $(a + b)(a - b)$ | zmnožek vsote in razlike | $a^2 - b^2$ |
| $(a + b)^3$ | kub vsote | $a^3 + 3a^2b + 3ab^2 + b^3$ |
| $(a - b)^3$ | kub razlike | $a^3 - 3a^2b + 3ab^2 - b^3$ |

Črki $a$ in $b$ lahko nadomestimo s poljubnima izrazoma, tudi z enočlenikoma: pri $(2x - 5)^2$ je $a = 2x$ in $b = 5$.

**10. Preizkus.** Razvit izraz preveriš tako, da vstaviš isto majhno število v izvirni in v razviti izraz. Če se vrednosti ne ujemata, si se zmotil. Ne izberi ničle, ker pri njej večina členov izgine in napaka ostane skrita.

## Rešeni primeri

### Primer 1 (lažji)

Poenostavi izraz $(2x^2 - 3x + 5) - (x^2 + 4x - 7)$ in izračunaj njegovo vrednost za $x = 2$.

**Podatki:** izraz $(2x^2 - 3x + 5) - (x^2 + 4x - 7)$, vrednost spremenljivke $x = 2$
**Iščemo:** poenostavljen izraz in njegovo vrednost pri $x = 2$

:::formula
Minus pred oklepajem spremeni predznak vsakemu členu v njem: $-(p + q - r) = -p - q + r$. Podobne člene združimo: $m x^k + n x^k = (m + n) x^k$.
:::

**Rešitev:**

1. Odpremo drugi oklepaj in spremenimo predznake: $2x^2 - 3x + 5 - x^2 - 4x + 7$.
2. Združimo člene s $x^2$: $2x^2 - x^2 = x^2$. Združimo člene z $x$: $-3x - 4x = -7x$. Združimo števila: $5 + 7 = 12$.
3. Poenostavljen izraz je $x^2 - 7x + 12$.
4. Vrednost pri $x = 2$: $2^2 - 7 \cdot 2 + 12 = 4 - 14 + 12 = 2$.
5. Preizkus z izvirnim izrazom: $(2 \cdot 4 - 6 + 5) - (4 + 8 - 7) = 7 - 5 = 2$. Rezultata se ujemata.
6. Odgovor: izraz je enak $x^2 - 7x + 12$, njegova vrednost pri $x = 2$ je $2$.

### Primer 2 (srednji)

Zmnoži in poenostavi izraz $(3x - 2)(2x + 5) - (x - 4)(x + 4)$.

**Podatki:** izraz $(3x - 2)(2x + 5) - (x - 4)(x + 4)$
**Iščemo:** poenostavljen izraz brez oklepajev

:::formula
$(a + b)(c + d) = ac + ad + bc + bd$ in $(a + b)(a - b) = a^2 - b^2$
:::

**Rešitev:**

1. Prvi zmnožek (vsak člen z vsakim): $(3x - 2)(2x + 5) = 6x^2 + 15x - 4x - 10 = 6x^2 + 11x - 10$.
2. Drugi zmnožek je zmnožek vsote in razlike: $(x - 4)(x + 4) = x^2 - 16$.
3. Drugi rezultat damo v oklepaj, ker pred njim stoji minus: $(6x^2 + 11x - 10) - (x^2 - 16) = 6x^2 + 11x - 10 - x^2 + 16$.
4. Združimo podobne člene: $6x^2 - x^2 = 5x^2$, člen $11x$ ostane, $-10 + 16 = 6$. Rezultat: $5x^2 + 11x + 6$.
5. Preizkus pri $x = 1$: izvirni izraz je $(1) \cdot (7) - (-3) \cdot (5) = 7 + 15 = 22$, rezultat pa $5 + 11 + 6 = 22$.
6. Odgovor: izraz je enak $5x^2 + 11x + 6$.

### Primer 3 (težji)

Razvij kub dvočlenika $(2a - 3b)^3$. Rezultat preveri za $a = 2$ in $b = 1$.

**Podatki:** izraz $(2a - 3b)^3$, vrednosti za preizkus $a = 2$ in $b = 1$
**Iščemo:** razvit izraz in preizkus pri $a = 2$, $b = 1$

:::formula
$(p - q)^3 = p^3 - 3p^2q + 3pq^2 - q^3$, kjer sta $p$ prvi in $q$ drugi člen dvočlenika
:::

**Rešitev:**

1. Prvi člen je $p = 2a$, drugi člen je $q = 3b$.
2. Kub prvega člena: $p^3 = (2a)^3 = 8a^3$.
3. Drugi člen formule: $3p^2q = 3 \cdot (2a)^2 \cdot 3b = 3 \cdot 4a^2 \cdot 3b = 36a^2b$.
4. Tretji člen formule: $3pq^2 = 3 \cdot 2a \cdot (3b)^2 = 3 \cdot 2a \cdot 9b^2 = 54ab^2$.
5. Kub drugega člena: $q^3 = (3b)^3 = 27b^3$.
6. Sestavimo s predznaki $+, -, +, -$: $(2a - 3b)^3 = 8a^3 - 36a^2b + 54ab^2 - 27b^3$.
7. Preizkus pri $a = 2$, $b = 1$: leva stran je $(4 - 3)^3 = 1$, desna stran pa $8 \cdot 8 - 36 \cdot 4 + 54 \cdot 2 - 27 = 64 - 144 + 108 - 27 = 1$.
8. Odgovor: $(2a - 3b)^3 = 8a^3 - 36a^2b + 54ab^2 - 27b^3$.

## Pogoste napake

- **»$(a + b)^2 = a^2 + b^2$« in »$(a + b)^3 = a^3 + b^3$«.** Razlog: kvadrat pomeni množenje oklepaja s samim seboj, pri čemer nastaneta še mešana člena. Preizkus: $(2 + 3)^2 = 25$, vendar $2^2 + 3^2 = 13$. Pravilno: $(a + b)^2 = a^2 + 2ab + b^2$ in $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$.
- **Napačen predznak pri kvadratu razlike: »$(x - 3)^2 = x^2 - 9$« ali »$x^2 - 6x - 9$«.** Razlog: minus je le pri srednjem členu, saj je $(-3)^2 = +9$. Izraz $x^2 - 9$ je rezultat zmnožka $(x - 3)(x + 3)$, kar je drug primer. Pravilno: $(x - 3)^2 = x^2 - 6x + 9$.
- **Minus pred oklepajem: »$5x - (2x - 3) = 3x - 3$«.** Razlog: minus spremeni predznak vsakemu členu v oklepaju, torej tudi zadnjemu. Pravilno: $5x - (2x - 3) = 5x - 2x + 3 = 3x + 3$.
- **Člena nista pomnožena vsak z vsakim: »$(x + 2)(x + 3) = x^2 + 6$«.** Razlog: pomnožila sta se le prva in zadnja člena. Pravilno: pomnožimo vse štiri pare, $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$. Namig: pred združevanjem preštej člene, pri dveh dvočlenikih jih mora biti štiri.
- **Mešanje vsote in zmnožka enočlenikov: »$3x + 2x^2 = 5x^3$« ali »$3x \cdot 2x = 6x$«.** Razlog: seštevamo samo podobne člene, pri množenju pa se eksponenti iste spremenljivke seštejejo ($x \cdot x = x^2$). Pravilno: $3x + 2x^2$ ni mogoče poenostaviti, $3x + 2x = 5x$ in $3x \cdot 2x = 6x^2$.

## Povzetek

- Algebrski izraz sestavljajo števila, spremenljivke in računske operacije. Vrednost izraza dobiš z vstavljanjem števil, negativna števila v oklepaju.
- Seštevamo samo podobne člene (enak spremenljivi del): koeficienti se seštejejo. Pri množenju se koeficienti zmnožijo, eksponenti iste spremenljivke pa seštejejo.
- Minus pred oklepajem spremeni predznak vsem členom v oklepaju.
- Mnogočlenike množimo tako, da vsak člen pomnožimo z vsakim: $(a + b)(c + d) = ac + ad + bc + bd$.
- Kvadrat dvočlenika: $(a \pm b)^2 = a^2 \pm 2ab + b^2$. Zmnožek vsote in razlike: $(a + b)(a - b) = a^2 - b^2$.
- Kub dvočlenika: $(a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3$, koeficienti so $1, 3, 3, 1$.
- Razvit izraz preveri tako, da v oba izraza vstaviš isto majhno število, ki ni $0$.

## Drugače: Na sliki

Formule za dvočlenik se da prebrati s ploščinami in prostorninami. Kvadrat s stranico $a + b$ razdelimo z eno vodoravno in eno navpično črto na štiri dele:

| | $a$ | $b$ |
|---|---|---|
| $a$ | kvadrat, ploščina $a^2$ | pravokotnik, ploščina $ab$ |
| $b$ | pravokotnik, ploščina $ab$ | kvadrat, ploščina $b^2$ |

Celotna ploščina je $(a + b)^2$ in je enaka vsoti štirih delov: $a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$. S števili: pri $a = 3$ in $b = 2$ je stranica $5$ in ploščina $25$, deli pa imajo ploščine $9 + 6 + 6 + 4 = 25$.

Kvadrat razlike je slika odrezovanja. Vzemimo kvadrat s stranico $a$ in ploščino $a^2$. Ob desnem robu odrežemo trak širine $b$ (ploščina $ab$) in ob zgornjem robu še enega (ploščina $ab$). V zgornjem desnem kotu smo kvadratek $b^2$ odrezali dvakrat, zato ga enkrat vrnemo: $(a - b)^2 = a^2 - 2ab + b^2$. S števili: pri $a = 5$, $b = 2$ je $25 - 20 + 4 = 9 = 3^2$.

Kocko z robom $a + b$ z ravnimi rezi razdelimo na osem delov: ena kocka $a^3$, trije kvadri $a^2b$, trije kvadri $ab^2$ in ena kocka $b^3$. Skupaj $1 + 3 + 3 + 1 = 8$ delov, prostornina je $a^3 + 3a^2b + 3ab^2 + b^3$.

## Drugače: Iz vsakdanjega življenja

**Računanje na pamet.** Posebni zmnožki so trik za hitro računanje:

- $52^2 = (50 + 2)^2 = 2500 + 200 + 4 = 2704$,
- $98^2 = (100 - 2)^2 = 10\,000 - 400 + 4 = 9604$,
- $51 \cdot 49 = (50 + 1)(50 - 1) = 2500 - 1 = 2499$.

**Vrt.** Kvadratni vrt ima stranico $x$ metrov. Eno stranico podaljšamo za $2\,\text{m}$, drugo za $3\,\text{m}$. Nova ploščina je $(x + 2)(x + 3) = x^2 + 5x + 6$. Pri $x = 10$ dobimo vrt $12\,\text{m} \times 13\,\text{m}$, torej $156\,\text{m}^2$, in res je $100 + 50 + 6 = 156$. Izraz $5x + 6$ pove, za koliko se ploščina poveča. Lepo je vidno, da dodatek ni stalen, ampak je odvisen od stranice $x$ prvotnega vrta.

**Računski trik z izrazom.** Pomisli si poljubno število, mu prištej $3$, vsoto pomnoži z $2$, odštej $6$ in rezultat deli z $2$. Dobiš začetno število. Zakaj? Če je število $n$, je $(n + 3) \cdot 2 - 6 = 2n + 6 - 6 = 2n$, polovica tega pa je $n$. Izraz s črko dokaže trik za vsa števila hkrati, česar s poskušanjem ne bi mogel.

## Drugače: Korak za korakom s številkami

Razvijmo $(2x - 5)^2$ po korakih in rezultat preverimo.

| Korak | Kaj naredim | Rezultat |
|---|---|---|
| 1 | Prepoznam kvadrat razlike $(a - b)^2$ in določim člena | $a = 2x$, $b = 5$ |
| 2 | Kvadriram prvi člen | $(2x)^2 = 4x^2$ |
| 3 | Dvakratni zmnožek obeh členov, predznak minus | $-2 \cdot 2x \cdot 5 = -20x$ |
| 4 | Kvadriram drugi člen (predznak je vedno plus) | $5^2 = 25$ |
| 5 | Sestavim vse tri člene | $4x^2 - 20x + 25$ |
| 6 | Preizkus pri $x = 3$ | $(6 - 5)^2 = 1$ in $36 - 60 + 25 = 1$ |

Pri kubu je postopek podoben. Za $(x - 1)^3$ je $a = x$ in $b = 1$. Zapišemo koeficiente $1, 3, 3, 1$ in predznake $+, -, +, -$. Potence prvega člena so $x^3, x^2, x, 1$, potence drugega pa $1$ povsod, saj je $1^k = 1$. Dobimo $x^3 - 3x^2 + 3x - 1$. Preizkus pri $x = 2$: leva stran je $(2 - 1)^3 = 1$, desna pa $8 - 12 + 6 - 1 = 1$.

## Drugače: Bolj natančno

**Vse izhaja iz razčlenjevalnega zakona.** Pravilo za zmnožek mnogočlenikov dobimo z dvakratno uporabo zakona $a(b + c) = ab + ac$: $(a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd$. Vse posebne zmnožke dobimo iz tega pravila s posebnimi izbirami členov. Stopnja zmnožka je vsota stopenj faktorjev: $(x^2 + 1)(x^3 - x)$ ima stopnjo $2 + 3 = 5$.

**Kvadrat in kub razlike sta posebna primera vsote.** Če v formuli za vsoto zamenjamo $b$ z $-b$, dobimo $(a + (-b))^2 = a^2 + 2a(-b) + (-b)^2 = a^2 - 2ab + b^2$. Enako velja za kub: $(a + (-b))^3 = a^3 + 3a^2(-b) + 3a(-b)^2 + (-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$. Predznaki se izmenjujejo, ker lihe potence števila $-b$ ostanejo negativne, sode pa postanejo pozitivne.

**Vzorec koeficientov.** Koeficienti v $(a + b)^n$ tvorijo Pascalov trikotnik: $1, 2, 1$ za $n = 2$ in $1, 3, 3, 1$ za $n = 3$. Vsako število je vsota dveh števil nad njim, zato je naslednja vrstica $1, 4, 6, 4, 1$ in $(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$. Izraz $(a + b)^n$ ima $n + 1$ členov, vsak pa je stopnje $n$.

**Enakost izrazov in enačba.** Zapis $(a + b)^2 = a^2 + 2ab + b^2$ je enakost izrazov: velja za vse vrednosti $a$ in $b$. Enačba, na primer $x^2 = 4$, velja le za nekatere vrednosti ($x = 2$ in $x = -2$). Preizkus z nekaj števili enakosti ne dokaže, napako pa odkrije: če se vrednosti pri eni izbiri ne ujemata, enakost ne velja.

## Preveri se

? Razvij $(x - 4)^2$.
- $x^2 - 16$
+ $x^2 - 8x + 16$
- $x^2 - 8x - 16$
- $x^2 + 8x + 16$
> Kvadrat razlike: $x^2 - 2 \cdot x \cdot 4 + 4^2 = x^2 - 8x + 16$. Izraz $x^2 - 16$ je rezultat zmnožka $(x - 4)(x + 4)$, $x^2 + 8x + 16$ pa je razvoj za $(x + 4)^2$. Zadnji člen kvadrata je vedno pozitiven.

? Zmnoži $(2x + 3)(x - 1)$.
- $2x^2 - 3$
- $2x^2 + 5x - 3$
+ $2x^2 + x - 3$
- $2x^2 - x - 3$
> Pomnožimo vsak člen z vsakim: $2x \cdot x + 2x \cdot (-1) + 3 \cdot x + 3 \cdot (-1) = 2x^2 - 2x + 3x - 3 = 2x^2 + x - 3$. Rezultat $2x^2 - 3$ dobiš, če pomnožiš samo prva in zadnja člena.

? Razvij $(a - 2)^3$.
- $a^3 - 8$
+ $a^3 - 6a^2 + 12a - 8$
- $a^3 - 6a^2 - 12a - 8$
- $a^3 + 6a^2 + 12a + 8$
> Po formuli $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$ z $b = 2$ dobimo $a^3 - 3a^2 \cdot 2 + 3a \cdot 4 - 8 = a^3 - 6a^2 + 12a - 8$. Predznaki se izmenjujejo $+, -, +, -$. Rezultat $a^3 + 6a^2 + 12a + 8$ je razvoj za $(a + 2)^3$.

? Kolikšen je zmnožek $51 \cdot 49$, če ga zapišeš kot $(50 + 1)(50 - 1)$?
- $2500$
- $2501$
+ $2499$
- $2599$
> Zmnožek vsote in razlike: $(50 + 1)(50 - 1) = 50^2 - 1^2 = 2500 - 1 = 2499$. Rezultat $2500$ dobiš, če pozabiš odšteti $1^2$, rezultat $2501$ pa, če kvadrat drugega člena prišteješ, namesto da bi ga odštel.
