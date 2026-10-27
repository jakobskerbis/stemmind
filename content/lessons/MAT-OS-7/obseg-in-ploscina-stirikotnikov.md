---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Že znaš izračunati obseg in ploščino pravokotnika ($S = a \cdot b$) in kvadrata ($S = a^2$). Znaš tudi izračunati ploščino trikotnika ($S = \dfrac{a \cdot v}{2}$). Vse to bomo uporabili.

Večina predmetov okoli nas nima oblike pravokotnika. Streha, tlakovana ploščad, zmaj na nebu, opeka v zidu ali parcela s poševnimi robovi so paralelogrami, trapezi, rombi ali deltoidi. Če znaš izračunati njihov obseg in ploščino, veš, koliko ograje, barve ali ploščic potrebuješ.

## Razlaga

**1. Obseg** je vsota dolžin vseh stranic. **Ploščina** pove, koliko ploskve lik pokriva. Obseg merimo v $\text{cm}$, $\text{m}$, ploščino v $\text{cm}^2$, $\text{m}^2$.

**2. Paralelogram.** Ima dva para vzporednih stranic. Nasprotni stranici sta enako dolgi ($a$ in $b$).

- Obseg: $o = 2a + 2b = 2(a + b)$
- Ploščina: $S = a \cdot v_a$

Višina $v_a$ je razdalja med stranico $a$ in njej vzporedno stranico. Je **pravokotna** na stranico $a$. Stranica $b$ je poševna, zato **ni** višina.

**3. Trapez.** Ima en par vzporednih stranic, ki ju imenujemo **osnovnici** ($a$ in $c$). Drugi dve stranici sta **kraka** ($b$ in $d$). Višina $v$ je razdalja med osnovnicama.

- Obseg: $o = a + b + c + d$
- Ploščina: $S = \dfrac{(a + c) \cdot v}{2}$

**4. Romb.** Paralelogram z vsemi štirimi stranicami enakimi. Diagonali $e$ in $f$ sta pravokotni in se razpolavljata.

- Obseg: $o = 4a$
- Ploščina: $S = \dfrac{e \cdot f}{2}$ (ali kot paralelogram $S = a \cdot v$)

**5. Deltoid.** Ima dva para sosednjih enakih stranic ($a$ in $b$). Diagonali $e$ in $f$ sta pravokotni.

- Obseg: $o = 2a + 2b = 2(a + b)$
- Ploščina: $S = \dfrac{e \cdot f}{2}$

**6. Povezava.** Romb je poseben paralelogram in tudi poseben deltoid, zato zanj veljajo vse njune formule.

## Rešeni primeri

### Primer 1: paralelogram

Paralelogram ima stranici $a = 8\,\text{cm}$ in $b = 5\,\text{cm}$ ter višino na stranico $a$ enako $v_a = 3\,\text{cm}$. Izračunaj obseg in ploščino.

1. Obseg: nasprotni stranici sta enaki, zato $o = 2(a + b) = 2 \cdot (8 + 5) = 2 \cdot 13 = 26\,\text{cm}$.
2. Ploščina: višina je dana na stranico $a$, zato množimo z $a$: $S = a \cdot v_a = 8 \cdot 3 = 24\,\text{cm}^2$.
3. Pazimo: $5 \cdot 8$ ni ploščina, ker $b$ ni pravokotna na $a$.

### Primer 2: trapez

Trapez ima osnovnici $a = 10\,\text{cm}$ in $c = 6\,\text{cm}$, kraka $b = 4{,}5\,\text{cm}$ in $d = 5\,\text{cm}$ ter višino $v = 4\,\text{cm}$. Izračunaj obseg in ploščino.

1. Obseg seštejemo čez vse štiri stranice: $o = 10 + 4{,}5 + 6 + 5 = 25{,}5\,\text{cm}$.
2. Ploščina: najprej seštejemo osnovnici, ker formula zahteva njuno vsoto: $a + c = 10 + 6 = 16\,\text{cm}$.
3. $S = \dfrac{16 \cdot 4}{2} = \dfrac{64}{2} = 32\,\text{cm}^2$.
4. Kraka v ploščini ne nastopata, potrebujemo ju samo za obseg.

### Primer 3: deltoid (iskanje diagonale)

Deltoid ima ploščino $60\,\text{cm}^2$ in diagonalo $e = 15\,\text{cm}$. Kolikšna je diagonala $f$? Če sta stranici $a = 9\,\text{cm}$ in $b = 5\,\text{cm}$, koliko je obseg?

1. Zapišemo formulo: $S = \dfrac{e \cdot f}{2}$.
2. Vstavimo: $60 = \dfrac{15 \cdot f}{2}$.
3. Pomnožimo z $2$: $120 = 15 \cdot f$.
4. Delimo s $15$: $f = 120 : 15 = 8\,\text{cm}$.
5. Preverimo: $\dfrac{15 \cdot 8}{2} = \dfrac{120}{2} = 60$. ✓
6. Obseg: $o = 2(a + b) = 2 \cdot (9 + 5) = 2 \cdot 14 = 28\,\text{cm}$.

## Pogoste napake

- **Poševna stranica namesto višine.** Pri paralelogramu in trapezu moraš v ploščino vstaviti višino, ki je pravokotna na osnovnico, ne kraka ali poševne stranice.
- **Pozabljeno deljenje z 2.** Pri trapezu, rombu in deltoidu je v formuli $:2$. Brez tega dobiš dvakrat preveliko ploščino.
- **Obseg paralelograma kot $a + b$.** Stranici sta dve vsake vrste, zato $o = 2(a + b)$.
- **Napačne enote.** Obseg je v $\text{cm}$, ploščina v $\text{cm}^2$. Pred računom pretvori vse mere v isto enoto.
- **Diagonala kot stranica.** Pri rombu in deltoidu diagonal ne prištevaj k obsegu.

## Povzetek

| Lik | Obseg | Ploščina |
|---|---|---|
| Paralelogram | $2(a + b)$ | $a \cdot v_a$ |
| Trapez | $a + b + c + d$ | $\dfrac{(a + c) \cdot v}{2}$ |
| Romb | $4a$ | $\dfrac{e \cdot f}{2}$ |
| Deltoid | $2(a + b)$ | $\dfrac{e \cdot f}{2}$ |

- Višina je vedno pravokotna na osnovnico.
- Pri trapezu seštej osnovnici, pri rombu in deltoidu zmnoži diagonali, nato deli z $2$.
- Rezultat zapiši z ustrezno enoto ($\text{cm}$ za obseg, $\text{cm}^2$ za ploščino).

## Drugače: Na sliki

**Paralelogram.** Na eni strani paralelograma odreži pravokotni trikotnik (ob višini) in ga prestavi na drugo stran. Dobiš pravokotnik z istima mer $a$ in $v_a$. Ploščina se ni spremenila, zato je $S = a \cdot v_a$.

**Trapez.** Naredi kopijo trapeza, jo obrni in prilepi h kraku prvega. Dva trapeza skupaj tvorita paralelogram z osnovnico $a + c$ in višino $v$. Ena kopija je polovica: $S = \dfrac{(a + c) \cdot v}{2}$.

**Romb in deltoid.** Okoli lika si predstavljaj pravokotnik s stranicama $e$ in $f$. Diagonali razdelita pravokotnik na štiri dele. Lik zavzema natanko polovico tega pravokotnika, zato je $S = \dfrac{e \cdot f}{2}$.

## Drugače: Iz vsakdanjega življenja

**Zmaj.** Papirnati zmaj ima obliko deltoida. Dve palici (diagonali) sta dolgi $60\,\text{cm}$ in $40\,\text{cm}$. Za papir potrebuješ
$$S = \frac{60 \cdot 40}{2} = \frac{2400}{2} = 1200\,\text{cm}^2.$$

**Parcela.** Parcela ima obliko trapeza: ob cesti je široka $30\,\text{m}$, ob potoku $20\,\text{m}$, razdalja med njima je $12\,\text{m}$. Ploščina je
$$S = \frac{(30 + 20) \cdot 12}{2} = \frac{600}{2} = 300\,\text{m}^2.$$
Če je trava prodajana po $\text{m}^2$, zdaj veš, koliko semena potrebuješ.

**Talne ploščice.** Romb s stranico $a$ ima obseg $4a$. Za rob ene rombaste ploščice s stranico $10\,\text{cm}$ potrebuješ $40\,\text{cm}$ fuge.

## Drugače: Korak za korakom s številkami

Naloga: trapez z osnovnicama $12\,\text{cm}$ in $8\,\text{cm}$ ter višino $5\,\text{cm}$. Ploščina?

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Prepoznamo lik | trapez |
| 2 | Zapišemo formulo | $S = \dfrac{(a + c) \cdot v}{2}$ |
| 3 | Seštejemo osnovnici | $12 + 8 = 20$ |
| 4 | Pomnožimo z višino | $20 \cdot 5 = 100$ |
| 5 | Delimo z $2$ | $100 : 2 = 50$ |
| 6 | Zapišemo enoto | $50\,\text{cm}^2$ |

Isti postopek (prepoznaj lik, formula, vstavi, izračunaj, enota) deluje pri vseh štirih likih.

## Drugače: Bolj natančno

**Zakaj velja formula za trapez?** Trapez s osnovnicama $a$, $c$ in višino $v$ prilepimo skupaj z njegovo kopijo, obrnjeno za $180^\circ$. Nastane lik z osnovnico $a + c$ in višino $v$. Ta je paralelogram, njegova ploščina je $(a + c) \cdot v$. Trapez je polovica, zato $S = \dfrac{(a + c) \cdot v}{2}$.

**Zakaj velja $S = \dfrac{e \cdot f}{2}$ za romb in deltoid?** Diagonali sta pravokotni. Diagonala $e$ deli lik na dva trikotnika z isto osnovnico $e$. Njuni višini na to osnovnico skupaj dasta diagonalo $f$. Ploščini trikotnikov sta $\dfrac{e \cdot f_1}{2}$ in $\dfrac{e \cdot f_2}{2}$, kjer je $f = f_1 + f_2$. Skupaj:
$$S = \frac{e \cdot f_1}{2} + \frac{e \cdot f_2}{2} = \frac{e \cdot (f_1 + f_2)}{2} = \frac{e \cdot f}{2}.$$

## Preveri se

? Paralelogram ima stranici $a = 12\,\text{cm}$ in $b = 7\,\text{cm}$ ter višino na stranico $a$ enako $5\,\text{cm}$. Kolikšna je ploščina?
- $84\,\text{cm}^2$
- $38\,\text{cm}^2$
+ $60\,\text{cm}^2$
> Višina je dana na stranico $a$, zato $S = 12 \cdot 5 = 60\,\text{cm}^2$. Rezultat $84$ dobiš, če pomnožiš z napačno stranico $b$, $38$ pa je obseg.

? Trapez ima osnovnici $9\,\text{cm}$ in $5\,\text{cm}$ ter višino $6\,\text{cm}$. Kolikšna je ploščina?
- $84\,\text{cm}^2$
+ $42\,\text{cm}^2$
- $135\,\text{cm}^2$
> $S = \dfrac{(9 + 5) \cdot 6}{2} = \dfrac{84}{2} = 42\,\text{cm}^2$. Odgovor $84$ pozabi deljenje z $2$, $135$ pa dobiš, če osnovnici množiš namesto seštevaš.

? Romb ima diagonali $e = 14\,\text{cm}$ in $f = 6\,\text{cm}$. Kolikšna je njegova ploščina?
- $84\,\text{cm}^2$
- $20\,\text{cm}^2$
+ $42\,\text{cm}^2$
> $S = \dfrac{e \cdot f}{2} = \dfrac{14 \cdot 6}{2} = \dfrac{84}{2} = 42\,\text{cm}^2$. Odgovor $84$ ne upošteva deljenja z $2$, $20$ je vsota diagonal.
