---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Z ulomki že znaš računati: $\dfrac{12}{18}$ okrajšaš v $\dfrac{2}{3}$, ulomka $\dfrac{1}{3}$ in $\dfrac{1}{4}$ pa s skupnim imenovalcem sešteješ v $\dfrac{7}{12}$. Pri racionalnih številih si spoznal tudi, da imenovalec ne sme biti $0$. V tej lekciji ista pravila uporabiš za ulomke, v katerih nastopajo črke, na primer $\dfrac{x^2-9}{x^2+3x}$. Takim izrazom pravimo **ulomljeni izrazi**.

Ključno orodje je znanje iz prejšnje teme. Ulomka ne moreš okrajšati, dokler števca in imenovalca ne razstaviš na faktorje, zato zdaj uporabiš izpostavljanje, razliko kvadratov in Vietovo pravilo.

Ulomljeni izrazi nastopajo povsod, kjer računaš z razmerji in obratnimi vrednostmi. V fiziki je upor dveh vzporedno vezanih upornikov določen z $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$. Čas, v katerem dva delavca ali dve pipi skupaj opravita delo, dobiš z vsoto ulomkov. Znanje boš potreboval tudi pri funkcijah in enačbah v naslednjih temah.

## Razlaga

**1. Kaj je ulomljeni izraz.** Ulomljeni izraz je količnik $\dfrac{A}{B}$ dveh algebrskih izrazov, pri čemer imenovalec $B$ vsebuje spremenljivko. Ulomek ni definiran, kadar je imenovalec enak $0$. Zato vsak ulomljeni izraz zahteva **pogoje**: vrednosti spremenljivke, pri katerih je imenovalec $0$, izločimo. Imenovalec razstavimo in poiščemo vrednosti, pri katerih je kateri od faktorjev enak $0$.

| Izraz | Imenovalec razstavljen | Pogoji |
|---|---|---|
| $\dfrac{3}{x-5}$ | $x-5$ | $x \neq 5$ |
| $\dfrac{x}{x^2-4}$ | $(x-2)(x+2)$ | $x \neq 2$ in $x \neq -2$ |
| $\dfrac{1}{x^2+x}$ | $x(x+1)$ | $x \neq 0$ in $x \neq -1$ |
| $\dfrac{2}{x^2+1}$ | ni razcepa | ni pogojev, ker je $x^2 + 1 \ge 1$ |

**2. Krajšanje.** Števec in imenovalec smemo deliti z istim izrazom $C \neq 0$:

$$\frac{A \cdot C}{B \cdot C} = \frac{A}{B}.$$

Krajšamo lahko samo **faktorje** (dele produkta), nikoli **členov** (delov vsote). Zato je prvi korak vedno razstavljanje. Postopek:

1. Razstavi števec in imenovalec.
2. Iz imenovalca prvotnega izraza zapiši pogoje.
3. Okrajšaj enake faktorje.
4. Zapiši rezultat in pogoje.

Primer: $\dfrac{x^2-9}{x^2+3x} = \dfrac{(x-3)(x+3)}{x(x+3)} = \dfrac{x-3}{x}$, pogoja sta $x \neq 0$ in $x \neq -3$. Pri potencah uporabiš znana pravila: $\dfrac{a^5}{a^2} = a^3$. Faktorja z nasprotnima predznakoma sta povezana z $b - a = -(a - b)$, zato je $\dfrac{a-b}{b-a} = -1$.

**3. Množenje in deljenje.** Ulomke množimo števec s števcem in imenovalec z imenovalcem:

$$\frac{A}{B} \cdot \frac{C}{D} = \frac{A \cdot C}{B \cdot D}.$$

Deljenje je množenje z obratnim ulomkom: $\dfrac{A}{B} : \dfrac{C}{D} = \dfrac{A}{B} \cdot \dfrac{D}{C}$, pri čemer mora biti tudi $C \neq 0$. Najprej razstavi vse števce in imenovalce, nato okrajšaj navzkriž, šele nazadnje množi. Primer:

$$\frac{2x}{x-1} \cdot \frac{x^2-1}{4x^2} = \frac{2x}{x-1} \cdot \frac{(x-1)(x+1)}{4x^2} = \frac{x+1}{2x}, \quad x \neq 1,\ x \neq 0.$$

**4. Seštevanje in odštevanje.** Ulomka z enakim imenovalcem seštejemo (odštejemo) števca:

$$\frac{A}{C} \pm \frac{B}{C} = \frac{A \pm B}{C}.$$

Kadar sta imenovalca različna, ju najprej pretvorimo na **skupni imenovalec**. Ta je najmanjši skupni večkratnik imenovalcev: razstavljenim imenovalcem vzamemo vsak različen faktor z največjim eksponentom. Postopek:

1. Razstavi imenovalce in zapiši pogoje.
2. Določi skupni imenovalec.
3. Vsak ulomek razširi z manjkajočimi faktorji (števec in imenovalec pomnožiš z istim izrazom).
4. Seštej ali odštej števce. Pri odštevanju drugi števec vedno zapiši v oklepaju.
5. Poenostavi števec in preveri, ali je mogoče krajšanje.

Primer: $\dfrac{1}{x} + \dfrac{1}{x+2} = \dfrac{(x+2) + x}{x(x+2)} = \dfrac{2x+2}{x(x+2)} = \dfrac{2(x+1)}{x(x+2)}$, pogoja sta $x \neq 0$ in $x \neq -2$.

## Rešeni primeri

### Primer 1 (lažji)

Okrajšaj ulomljeni izraz $\dfrac{3x+6}{x^2-4}$ in zapiši, za katere vrednosti $x$ je definiran.

**Podatki:** izraz $\dfrac{3x+6}{x^2-4}$
**Iščemo:** okrajšani izraz in vrednosti $x$, pri katerih je izraz definiran

:::formula
$\dfrac{A \cdot C}{B \cdot C} = \dfrac{A}{B}$ za $C \neq 0$; $\quad ab + ac = a(b+c)$; $\quad a^2 - b^2 = (a-b)(a+b)$
:::

**Rešitev:**

1. Števec: $3x + 6 = 3(x+2)$.
2. Imenovalec (razlika kvadratov): $x^2 - 4 = (x-2)(x+2)$.
3. Imenovalec ne sme biti $0$, zato je $x \neq 2$ in $x \neq -2$.
4. Okrajšamo faktor $x+2$: $\dfrac{3(x+2)}{(x-2)(x+2)} = \dfrac{3}{x-2}$.
5. Preizkus pri $x = 3$: $\dfrac{9+6}{9-4} = \dfrac{15}{5} = 3$ in $\dfrac{3}{3-2} = 3$.
6. Odgovor: $\dfrac{3x+6}{x^2-4} = \dfrac{3}{x-2}$ za $x \neq 2$ in $x \neq -2$. Pogoj $x \neq -2$ ostane, čeprav ga okrajšani ulomek ne zahteva.

### Primer 2 (srednji)

Poenostavi izraz $\dfrac{x}{x^2-9} - \dfrac{2}{x+3}$.

**Podatki:** izraz $\dfrac{x}{x^2-9} - \dfrac{2}{x+3}$ (razlika dveh ulomkov z različnima imenovalcema)
**Iščemo:** en sam poenostavljen ulomek in pogoje zanj

:::formula
$\dfrac{A}{C} - \dfrac{B}{C} = \dfrac{A - B}{C}$; skupni imenovalec je najmanjši skupni večkratnik imenovalcev.
:::

**Rešitev:**

1. Razstavimo: $x^2 - 9 = (x-3)(x+3)$. Pogoja: $x \neq 3$ in $x \neq -3$.
2. Skupni imenovalec je $(x-3)(x+3)$. Prvi ulomek ostane, drugega razširimo z $x-3$: $\dfrac{2}{x+3} = \dfrac{2(x-3)}{(x-3)(x+3)}$.
3. Odštejemo, drugi števec je v oklepaju: $\dfrac{x - 2(x-3)}{(x-3)(x+3)}$.
4. Števec: $x - 2(x-3) = x - 2x + 6 = 6 - x$.
5. Rezultata $\dfrac{6-x}{(x-3)(x+3)}$ ni mogoče krajšati, ker števec $6 - x$ ni enak nobenemu od faktorjev imenovalca (niti njegovemu nasprotnemu).
6. Preizkus pri $x = 1$: $\dfrac{1}{1-9} - \dfrac{2}{4} = -\dfrac{1}{8} - \dfrac{4}{8} = -\dfrac{5}{8}$ in $\dfrac{6-1}{(1-3)(1+3)} = \dfrac{5}{-8} = -\dfrac{5}{8}$.
7. Odgovor: izraz je enak $\dfrac{6-x}{(x-3)(x+3)}$ za $x \neq 3$ in $x \neq -3$.

### Primer 3 (težji)

Poenostavi izraz $\left(\dfrac{x}{x-2} - \dfrac{4}{x^2-2x}\right) \cdot \dfrac{x^2-4x+4}{x^2+4x+4}$.

**Podatki:** izraz $\left(\dfrac{x}{x-2} - \dfrac{4}{x^2-2x}\right) \cdot \dfrac{x^2-4x+4}{x^2+4x+4}$ (razlika v oklepaju, pomnožena z ulomkom)
**Iščemo:** poenostavljen ulomek in pogoje zanj

:::formula
$\dfrac{A}{B} \cdot \dfrac{C}{D} = \dfrac{A \cdot C}{B \cdot D}$; $\quad a^2 - b^2 = (a-b)(a+b)$; $\quad a^2 \pm 2ab + b^2 = (a \pm b)^2$
:::

**Rešitev:**

1. Razstavimo imenovalce in števce: $x^2 - 2x = x(x-2)$, $x^2 - 4x + 4 = (x-2)^2$, $x^2 + 4x + 4 = (x+2)^2$.
2. Pogoji: $x \neq 0$, $x \neq 2$ (iz $x(x-2)$) in $x \neq -2$ (iz $(x+2)^2$).
3. Oklepaj: skupni imenovalec je $x(x-2)$. Prvi ulomek razširimo z $x$: $\dfrac{x}{x-2} = \dfrac{x^2}{x(x-2)}$. Torej $\dfrac{x^2 - 4}{x(x-2)}$.
4. Števec je razlika kvadratov: $x^2 - 4 = (x-2)(x+2)$. Okrajšamo faktor $x-2$: $\dfrac{(x-2)(x+2)}{x(x-2)} = \dfrac{x+2}{x}$.
5. Množimo: $\dfrac{x+2}{x} \cdot \dfrac{(x-2)^2}{(x+2)^2}$. Okrajšamo $x+2$ in dobimo $\dfrac{(x-2)^2}{x(x+2)}$.
6. Preizkus pri $x = 3$: oklepaj je $3 - \dfrac{4}{3} = \dfrac{5}{3}$, drugi ulomek je $\dfrac{1}{25}$, produkt $\dfrac{5}{75} = \dfrac{1}{15}$. Rezultat: $\dfrac{(3-2)^2}{3 \cdot 5} = \dfrac{1}{15}$.
7. Odgovor: izraz je enak $\dfrac{(x-2)^2}{x(x+2)}$ za $x \neq 0$, $x \neq 2$ in $x \neq -2$.

## Pogoste napake

- **Krajšanje členov namesto faktorjev.** Zapišeš $\dfrac{x+3}{3} = x$ ali $\dfrac{x^2+5}{x^2+3} = \dfrac{5}{3}$. Razlog: krajšamo lahko le tisto, s čimer je množen ves števec in ves imenovalec. Pravilno: razstavi in krajšaj faktorje, na primer $\dfrac{x^2+2x}{x} = \dfrac{x(x+2)}{x} = x+2$ za $x \neq 0$. Izraz $\dfrac{x+3}{3}$ pri $x = 3$ da $2$, ne $3$.
- **Seštevanje števcev in imenovalcev.** Zapišeš $\dfrac{1}{x} + \dfrac{1}{y} = \dfrac{2}{x+y}$. Razlog: ulomka lahko seštejemo le, če imata enaka imenovalca. Pravilno: $\dfrac{1}{x} + \dfrac{1}{y} = \dfrac{y}{xy} + \dfrac{x}{xy} = \dfrac{x+y}{xy}$. Pri $x = y = 2$ je vsota $1$, napačni izraz pa da $\dfrac{1}{2}$.
- **Pozabljen oklepaj pri odštevanju.** Zapišeš $\dfrac{5x}{x+1} - \dfrac{2x-3}{x+1} = \dfrac{5x - 2x - 3}{x+1}$. Razlog: minus velja za ves drugi števec. Pravilno: $\dfrac{5x - (2x-3)}{x+1} = \dfrac{3x+3}{x+1} = \dfrac{3(x+1)}{x+1} = 3$ za $x \neq -1$.
- **Pozabljeni pogoji.** Zapišeš $\dfrac{x^2-x}{x} = x - 1$ in ne omeniš pogojev. Razlog: pri $x = 0$ prvotni izraz ni definiran, desna stran pa je. Pravilno: $\dfrac{x(x-1)}{x} = x - 1$ za $x \neq 0$.
- **Napačen predznak pri nasprotnih faktorjih.** Zapišeš $\dfrac{x-3}{3-x} = 1$. Razlog: $3 - x = -(x-3)$. Pravilno: $\dfrac{x-3}{3-x} = \dfrac{x-3}{-(x-3)} = -1$ za $x \neq 3$.

## Povzetek

- Ulomljeni izraz $\dfrac{A}{B}$ je definiran samo, kadar je $B \neq 0$. Pogoje vedno zapiši iz prvotnega imenovalca.
- Krajšanje: $\dfrac{A \cdot C}{B \cdot C} = \dfrac{A}{B}$. Krajšamo faktorje, ne členov, zato najprej razstavimo.
- Množenje: $\dfrac{A}{B} \cdot \dfrac{C}{D} = \dfrac{A \cdot C}{B \cdot D}$. Pred množenjem okrajšaj navzkriž.
- Deljenje: $\dfrac{A}{B} : \dfrac{C}{D} = \dfrac{A}{B} \cdot \dfrac{D}{C}$, pri čemer je $C \neq 0$.
- Seštevanje in odštevanje: $\dfrac{A}{C} \pm \dfrac{B}{C} = \dfrac{A \pm B}{C}$. Pri različnih imenovalcih poišči skupni imenovalec, ulomke razširi in seštej števce.
- Pri odštevanju drugi števec zapiši v oklepaju. Na koncu poskusi rezultat še krajšati.
- Faktorja $a-b$ in $b-a$ sta nasprotna: $b - a = -(a-b)$.

## Drugače: Na sliki

**Krajšanje.** Ulomek si predstavljaj kot dve vrsti zidakov: zgoraj faktorji števca, spodaj faktorji imenovalca. Za $\dfrac{x^2-9}{x^2+3x}$ dobiš:

| | prvi faktor | drugi faktor |
|---|---|---|
| števec | $x-3$ | $x+3$ |
| imenovalec | $x$ | $x+3$ |

Zidaka $x+3$ stojita eden nad drugim, zato ju prečrtaš. Ostaneta $x-3$ zgoraj in $x$ spodaj. Zidaka $x-3$ in $x$ nista enaka, zato ju ne smeš krajšati.

**Seštevanje.** Vzemi dve enaki palici. Eno razreži na $3$, drugo na $4$ enakih delov. Kosa nista enaka, zato ju ne moreš kar prešteti. Ko pa vsako palico razrežeš na $12$ enakih koščkov, tretjina vsebuje $4$ koščke, četrtina $3$, skupaj $7$ koščkov od $12$. To je skupni imenovalec. Splošno: za $\dfrac{1}{x} + \dfrac{1}{y}$ palici razrežeš na $xy$ koščkov in dobiš $y + x$ koščkov od $xy$.

**Množenje.** Enotski kvadrat razdeli na $b$ stolpcev in $d$ vrstic, to je $b \cdot d$ celic. Širina $\dfrac{a}{b}$ pokrije $a$ stolpcev, višina $\dfrac{c}{d}$ pa $c$ vrstic. Pravokotnik ima $a \cdot c$ celic od $b \cdot d$, torej ploščino $\dfrac{a \cdot c}{b \cdot d}$.

## Drugače: Iz vsakdanjega življenja

**Pipi.** Prva pipa napolni bazen v $x$ urah, druga v $y$ urah. V eni uri prva napolni $\dfrac{1}{x}$ bazena, druga $\dfrac{1}{y}$. Skupaj v eni uri napolnita $\dfrac{1}{x} + \dfrac{1}{y} = \dfrac{x+y}{xy}$ bazena. Za poln bazen potrebujeta torej $\dfrac{xy}{x+y}$ ure. Pri $x = 3$ in $y = 6$: v uri napolnita $\dfrac{1}{3} + \dfrac{1}{6} = \dfrac{1}{2}$ bazena, torej bazen napolnita v $2$ urah. Formula da isto: $\dfrac{3 \cdot 6}{3 + 6} = \dfrac{18}{9} = 2$.

**Povprečna hitrost.** Na izlet greš na razdaljo $s$ s hitrostjo $v_1$ in se vrneš s hitrostjo $v_2$. Časa sta $\dfrac{s}{v_1}$ in $\dfrac{s}{v_2}$, skupna pot je $2s$. Povprečna hitrost je skupna pot, deljena s skupnim časom:

$$v = 2s : \left(\frac{s}{v_1} + \frac{s}{v_2}\right) = 2s : \frac{s(v_1 + v_2)}{v_1 v_2} = \frac{2 v_1 v_2}{v_1 + v_2}.$$

Pri $v_1 = 30\,\text{km/h}$ in $v_2 = 60\,\text{km/h}$ je $v = \dfrac{2 \cdot 30 \cdot 60}{90}\,\text{km/h} = 40\,\text{km/h}$. Povprečje $45\,\text{km/h}$ bi bilo napačno, ker se po počasnem delu poti voziš dlje časa.

## Drugače: Korak za korakom s številkami

**Naloga A:** okrajšaj $\dfrac{x^2-x-6}{x^2-9}$.

1. Števec po Vietovem pravilu: iščemo števili z vsoto $-1$ in produktom $-6$, to sta $2$ in $-3$. Torej $x^2 - x - 6 = (x+2)(x-3)$.
2. Imenovalec: $x^2 - 9 = (x-3)(x+3)$. Pogoja: $x \neq 3$ in $x \neq -3$.
3. Okrajšamo $x - 3$ in dobimo $\dfrac{x+2}{x+3}$.

Zdaj preverimo s številkami:

| $x$ | prvotni ulomek | okrajšani ulomek |
|---|---|---|
| $0$ | $\dfrac{-6}{-9} = \dfrac{2}{3}$ | $\dfrac{2}{3}$ |
| $1$ | $\dfrac{1-1-6}{1-9} = \dfrac{-6}{-8} = \dfrac{3}{4}$ | $\dfrac{3}{4}$ |
| $2$ | $\dfrac{4-2-6}{4-9} = \dfrac{-4}{-5} = \dfrac{4}{5}$ | $\dfrac{4}{5}$ |
| $3$ | $\dfrac{0}{0}$, ni definiran | $\dfrac{5}{6}$ |

Vrstica pri $x = 3$ pokaže, zakaj so pogoji pomembni: okrajšani izraz ima vrednost, prvotni pa je pri $x = 3$ nedefiniran.

**Naloga B:** seštej $\dfrac{2}{x} + \dfrac{3}{x+1}$. Skupni imenovalec je $x(x+1)$. Prvi ulomek razširimo z $x+1$, drugega z $x$: $\dfrac{2(x+1) + 3x}{x(x+1)} = \dfrac{5x+2}{x(x+1)}$. Preizkus pri $x = 2$: $\dfrac{2}{2} + \dfrac{3}{3} = 2$ in $\dfrac{5 \cdot 2 + 2}{2 \cdot 3} = \dfrac{12}{6} = 2$.

## Drugače: Bolj natančno

**Kdaj sta dva izraza enaka.** Izraza $\dfrac{x^2}{x}$ in $x$ nista povsem enaka: prvi ni definiran pri $x = 0$, drugi je. Pravimo, da sta enaka na skupnem definicijskem območju, to je za vse $x \neq 0$. Zato pogoje zapišemo, ko izraz še ni okrajšan. Okrajšanje samo po sebi pogojev ne odstrani.

**Zakaj krajšanje deluje.** Ker je $\dfrac{C}{C} = 1$ za $C \neq 0$, velja $\dfrac{A \cdot C}{B \cdot C} = \dfrac{A}{B} \cdot \dfrac{C}{C} = \dfrac{A}{B} \cdot 1 = \dfrac{A}{B}$. Razširjanje je enak korak v nasprotni smeri: ulomek pomnožimo z $\dfrac{C}{C}$, kar vrednosti ne spremeni.

**Seštevanje.** Če prvi ulomek razširimo z $D$, drugega pa z $B$, dobimo $\dfrac{A}{B} + \dfrac{C}{D} = \dfrac{AD}{BD} + \dfrac{CB}{BD} = \dfrac{AD + BC}{BD}$. Ta obrazec vedno deluje, vendar je produkt imenovalcev lahko nepotrebno velik. Najmanjši skupni večkratnik je krajši, računi so lažji, rezultat pa je pogosto že okrajšan.

**Deljenje.** Ker je $\dfrac{C}{D} \cdot \dfrac{D}{C} = 1$ (če sta $C \neq 0$ in $D \neq 0$), je $\dfrac{D}{C}$ obratna vrednost ulomka $\dfrac{C}{D}$. Deljenje z ulomkom je zato množenje z njegovo obratno vrednostjo. Deliti ne smemo z ničlo, zato mora biti $\dfrac{C}{D} \neq 0$, torej $C \neq 0$.

## Preveri se

? Za katere vrednosti $x$ ulomljeni izraz $\dfrac{7}{x^2-16}$ ni definiran?
- samo pri $x = 4$
+ pri $x = 4$ in $x = -4$
- pri $x = 16$ in $x = -16$
- pri $x = 0$
> Imenovalec je $x^2 - 16 = (x-4)(x+4)$ in je enak $0$ pri $x = 4$ ali $x = -4$. Pri $x = 0$ je imenovalec $-16$, izraz je torej definiran.

? Okrajšaj $\dfrac{x^2-25}{3x+15}$.
- $\dfrac{x+5}{3}$
+ $\dfrac{x-5}{3}$
- $\dfrac{x-5}{x+5}$
- $x - 5$
> Razstavimo: $\dfrac{(x-5)(x+5)}{3(x+5)}$. Okrajšamo $x + 5$ in ostane $\dfrac{x-5}{3}$ za $x \neq -5$. Pri $x = 2$ je prvotni izraz $\dfrac{-21}{21} = -1$, kar se ujema le z rezultatom $\dfrac{2-5}{3} = -1$.

? Poenostavi $\dfrac{3}{x-1} - \dfrac{2}{x+1}$.
- $\dfrac{x+1}{x^2-1}$
+ $\dfrac{x+5}{x^2-1}$
- $\dfrac{5}{x^2-1}$
- $\dfrac{x+5}{2x}$
> Skupni imenovalec je $(x-1)(x+1) = x^2 - 1$. Števec je $3(x+1) - 2(x-1) = 3x + 3 - 2x + 2 = x + 5$. Odgovor $\dfrac{x+1}{x^2-1}$ dobiš, če pozabiš oklepaj in izračunaš $3x + 3 - 2x - 2$.

? Poenostavi $\dfrac{x+1}{x-2} \cdot \dfrac{x^2-4}{x^2+x}$.
- $\dfrac{x-2}{x}$
+ $\dfrac{x+2}{x}$
- $\dfrac{x+2}{x+1}$
- $\dfrac{(x+1)(x+2)}{x}$
> Razstavimo: $\dfrac{x+1}{x-2} \cdot \dfrac{(x-2)(x+2)}{x(x+1)}$. Okrajšamo $x+1$ in $x-2$, ostane $\dfrac{x+2}{x}$. Pogoji so $x \neq 2$, $x \neq 0$ in $x \neq -1$.
