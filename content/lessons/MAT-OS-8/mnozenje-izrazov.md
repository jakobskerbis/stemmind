---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz 7. razreda že znaš računati z racionalnimi števili, poznaš spremenljivke in znaš seštevati ter odštevati izraze, npr. $3a + 5a = 8a$. Znaš tudi izračunati ploščino pravokotnika: $a \cdot b$.

Zdaj bomo naredili naslednji korak: izraze bomo **množili**. To potrebuješ, kadar je stranica lika podana z izrazom, npr. pravokotnik s stranicama $a + 2$ in $b + 3$. Njegovo ploščino izračunaš z množenjem vsote z vsoto. Brez tega znanja ne moreš reševati enačb z oklepaji in ne moreš izraza razstavljati, kar boš delal v nadaljevanju.

## Razlaga

**1. Množenje enočlenikov.** Enočlenika zmnožimo tako, da posebej zmnožimo števila (koeficiente) in posebej spremenljivke:

$$3a \cdot 4b = 12ab, \qquad 2x \cdot 5x = 10x^2$$

**2. Množenje vsote z enočlenikom.** Vsak člen v oklepaju pomnožimo z enočlenikom. Temu pravimo **razčlenjevanje** (odpravljanje oklepaja) z uporabo **zakona o razčlenjevanju** (distributivnosti):

$$a \cdot (b + c) = a \cdot b + a \cdot c$$

Enako velja za razliko: $a \cdot (b - c) = ab - ac$.

**3. Množenje dvočlenikov.** **Dvočlenik** je izraz iz dveh členov, npr. $a + b$ ali $x - 3$. Pri množenju dveh dvočlenikov pomnožimo **vsak člen prvega z vsakim členom drugega** in produkte seštejemo:

$$(a + b)(c + d) = ac + ad + bc + bd$$

Dvočlenik pomnožimo z dvočlenikom, dobimo štiri produkte. Pogosto se dva med seboj podobna člena združita.

**4. Predznaki.** Pri množenju pazi na predznake: plus krat plus je plus, minus krat minus je plus, plus krat minus je minus. Predznak spada k členu, ki mu sledi.

**5. Poenostavljanje.** Po množenju seštejemo ali odštejemo **podobne člene** (člene z enakimi spremenljivkami in enakimi potencami): $3x + 5x = 8x$, vendar $3x + 5x^2$ ni mogoče združiti.

## Rešeni primeri

### Primer 1 (lažji): vsota krat enočlenik

Zmnoži: $3x \cdot (2x + 5)$.

1. Vsak člen v oklepaju pomnožimo s $3x$: $3x \cdot 2x + 3x \cdot 5$.
2. Prvi produkt: $3 \cdot 2 = 6$ in $x \cdot x = x^2$, torej $6x^2$.
3. Drugi produkt: $3x \cdot 5 = 15x$.
4. Rezultat: $6x^2 + 15x$.
5. Preverimo z $x = 1$: levo $3 \cdot (2 + 5) = 21$, desno $6 + 15 = 21$. ✓

### Primer 2: dvočlenik krat dvočlenik

Zmnoži in poenostavi: $(x + 3)(x + 4)$.

1. Prvi člen prvega oklepaja ($x$) pomnožimo z obema členoma drugega: $x \cdot x + x \cdot 4 = x^2 + 4x$.
2. Drugi člen prvega oklepaja ($3$) pomnožimo z obema členoma drugega: $3 \cdot x + 3 \cdot 4 = 3x + 12$.
3. Seštejemo vse štiri produkte: $x^2 + 4x + 3x + 12$.
4. Podobna člena $4x$ in $3x$ združimo: $x^2 + 7x + 12$.
5. Preverimo z $x = 1$: levo $4 \cdot 5 = 20$, desno $1 + 7 + 12 = 20$. ✓

### Primer 3 (težji): predznaki in več členov

Zmnoži in poenostavi: $(2a - 3)(a + 5) - 4a \cdot (a - 1)$.

1. Najprej prvi produkt: $2a \cdot a + 2a \cdot 5 + (-3) \cdot a + (-3) \cdot 5 = 2a^2 + 10a - 3a - 15$.
2. Združimo: $2a^2 + 7a - 15$.
3. Drugi produkt: $4a \cdot (a - 1) = 4a^2 - 4a$.
4. Pred drugim produktom je minus, zato ga odštejemo **v celoti**, zato moramo **vsem členom zamenjati predznak**: $-(4a^2 - 4a) = -4a^2 + 4a$.
5. Skupaj: $2a^2 + 7a - 15 - 4a^2 + 4a$.
6. Združimo podobne člene: $2a^2 - 4a^2 = -2a^2$ in $7a + 4a = 11a$.
7. Rezultat: $-2a^2 + 11a - 15$.
8. Preverimo z $a = 1$: levo $(2 - 3)(1 + 5) - 4 \cdot 0 = -6$, desno $-2 + 11 - 15 = -6$. ✓

## Pogoste napake

- **Pomnožen samo prvi člen.** $3 \cdot (x + 4) = 3x + 12$, ne $3x + 4$. Z enočlenikom moramo pomnožiti vse člene v oklepaju.
- **Pozabljen člen pri dvočlenikih.** Pri $(a+b)(c+d)$ moraš dobiti štiri produkte. Če jih imaš manj, si enega izpustil.
- **Napačen predznak.** $(x - 3)(x + 2)$: produkt $-3 \cdot 2 = -6$, ne $+6$.
- **Seštevanje neenakih členov.** $x^2 + x$ ne moremo združiti v $2x^2$ in tudi ne v $x^3$.
- **Minus pred oklepajem.** $-(a - b) = -a + b$, ne $-a - b$.
- **Zmeda pri potencah.** $x \cdot x = x^2$, ne $2x$.

## Povzetek

- Enočlenika množimo tako, da posebej množimo koeficiente in spremenljivke: $3a \cdot 4b = 12ab$.
- Vsota krat enočlenik: $a(b + c) = ab + ac$. Vsak člen v oklepaju pomnožimo.
- Dvočlenik krat dvočlenik: $(a+b)(c+d) = ac + ad + bc + bd$ (vsak z vsakim, štirje produkti).
- Po množenju združimo podobne člene.
- Pri predznakih bodi previden, predvsem pri minusu pred oklepajem.
- Rezultat lahko preveriš tako, da za spremenljivko vstaviš število.

## Drugače: Na sliki

Pravokotnik ima stranici $x + 3$ in $x + 4$. Razdelimo ga na štiri manjše pravokotnike (stranici razdelimo na dela $x$ in $3$ ter $x$ in $4$):

- zgoraj levo: kvadrat $x \cdot x = x^2$,
- zgoraj desno: pravokotnik $x \cdot 4 = 4x$,
- spodaj levo: pravokotnik $3 \cdot x = 3x$,
- spodaj desno: pravokotnik $3 \cdot 4 = 12$.

Ploščina celotnega pravokotnika je vsota štirih delov: $x^2 + 4x + 3x + 12 = x^2 + 7x + 12$.

Slika pokaže, zakaj pri množenju dvočlenikov dobimo štiri produkte: pravokotnik ima štiri dele in vsak ustreza enemu paru členov.

## Drugače: Iz vsakdanjega življenja

V razredu je $12$ klopi in pri vsaki klopi sta $2$ stola. Če dodamo še $3$ klopi, je vseh klopi $12 + 3$. Skupaj stolov je

$$2 \cdot (12 + 3) = 2 \cdot 12 + 2 \cdot 3 = 24 + 6 = 30.$$

Isto dobimo, če najprej seštejemo: $2 \cdot 15 = 30$. Razčlenjevanje torej pomeni, da vsako skupino šteješ posebej.

Še en primer: v trgovini kupiš $x$ zvezkov po $2\,€$ in $x$ svinčnikov po $1\,€$. Če to naredijo 3 prijatelji, je skupni znesek $3 \cdot (2x + x) = 6x + 3x = 9x$. Vsak izdelek se pomnoži s številom prijateljev.

## Drugače: Korak za korakom s številkami

Najprej poskusi z navadnimi števili, da vidiš, kaj se zgodi: $(10 + 3)(10 + 4)$.

| | $10$ | $4$ |
|---|---|---|
| $10$ | $100$ | $40$ |
| $3$ | $30$ | $12$ |

Vsota: $100 + 40 + 30 + 12 = 182$. Preverimo: $13 \cdot 14 = 182$. ✓

Enako naredimo s spremenljivko, npr. $(x + 2)(x + 5)$:

| | $x$ | $5$ |
|---|---|---|
| $x$ | $x^2$ | $5x$ |
| $2$ | $2x$ | $10$ |

Vsota: $x^2 + 5x + 2x + 10 = x^2 + 7x + 10$.

Tabela pomaga, da ne pozabiš nobenega produkta. Pri razliki, npr. $(x - 2)(x + 5)$, v tabelo vpiši člene s predznaki: $x$, $-2$ in $x$, $5$. Dobimo $x^2 + 5x - 2x - 10 = x^2 + 3x - 10$.

## Drugače: Bolj natančno

Pravilo za dvočlenike izhaja iz razčlenjevanja. Najprej označimo $(c + d)$ z eno črko, npr. $m = c + d$. Potem:

$$(a + b) \cdot m = a \cdot m + b \cdot m.$$

Zdaj nazaj vstavimo $m = c + d$:

$$a \cdot (c + d) + b \cdot (c + d) = ac + ad + bc + bd.$$

Dvakrat smo uporabili isti zakon: prvič za celoten oklepaj, drugič za vsak del posebej. Zato je pravilo »vsak z vsakim« res vedno pravilno, ne le pri izbranih številih.

Ker je $a - b = a + (-b)$, pravilo velja tudi za razlike, če pazimo na predznake členov.

## Preveri se

? Kaj dobimo, če zmnožimo $2x \cdot (x + 6)$?
- $2x^2 + 6$
- $2x + 12x$
+ $2x^2 + 12x$
- $3x + 8x$
> Z $2x$ pomnožimo oba člena: $2x \cdot x = 2x^2$ in $2x \cdot 6 = 12x$. Odgovor $2x^2 + 6$ ima pomnožen samo prvi člen.

? Kolikšen je produkt $(x + 5)(x - 2)$ po poenostavitvi?
- $x^2 + 7x - 10$
- $x^2 - 3x - 10$
+ $x^2 + 3x - 10$
- $x^2 + 3x + 10$
> Produkti so: $x \cdot x = x^2$, $x \cdot (-2) = -2x$, $5 \cdot x = 5x$, $5 \cdot (-2) = -10$. Vsota: $x^2 - 2x + 5x - 10 = x^2 + 3x - 10$.

? Kaj dobimo, če poenostavimo $5 - (x - 3)$?
- $2 - x$
- $2 + x$
- $5 - x - 3$
+ $8 - x$
> Minus pred oklepajem zamenja predznak obema členoma: $5 - x + 3 = 8 - x$. Pri napačnih odgovorih je zamenjan predznak le prvemu členu v oklepaju ali pa je pozabljen minus pri $3$.
