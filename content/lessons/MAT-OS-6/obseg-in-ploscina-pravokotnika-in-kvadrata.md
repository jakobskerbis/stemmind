---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz nižjih razredov že poznaš pravokotnik in kvadrat, znaš meriti dolžine v centimetrih in metrih ter poznaš množenje in seštevanje. Zdaj bomo te stvari povezali v dve pomembni količini: **obseg** in **ploščino**.

Obseg potrebuješ, kadar vprašaš: »Koliko ograje potrebujem za vrt?« ali »Koliko okrasnega traku je treba za okvir slike?« Ploščino potrebuješ, kadar vprašaš: »Koliko ploščic potrebujem za tla?« ali »Koliko barve je treba za steno?« Pogosto ju zamenjamo, zato se ju bomo naučili natančno ločiti.

## Razlaga

**1. Pravokotnik in kvadrat.** Pravokotnik ima štiri stranice in štiri prave kote. Nasprotni stranici sta enako dolgi. Dolžini obeh različnih stranic označimo z $a$ in $b$. **Kvadrat** je poseben pravokotnik, ki ima vse štiri stranice enako dolge ($a$).

**2. Obseg.** Obseg je dolžina poti okrog lika, torej **vsota dolžin vseh stranic**. Merimo ga v enotah za dolžino ($\,\text{mm}$, $\,\text{cm}$, $\,\text{m}$, $\,\text{km}$).

- Pravokotnik: $o = a + b + a + b = 2 \cdot (a + b)$
- Kvadrat: $o = a + a + a + a = 4 \cdot a$

**3. Ploščina.** Ploščina pove, koliko ploskve lik prekriva. Merimo jo v enotah za ploščino ($\,\text{mm}^2$, $\,\text{cm}^2$, $\,\text{m}^2$, $\,\text{km}^2$). Ena enota ploščine je kvadrat s stranico ene enote dolžine. Na primer $1\,\text{cm}^2$ je kvadratek s stranico $1\,\text{cm}$.

Če pravokotnik pokrijemo s takimi kvadratki, jih v eni vrsti stoji $a$, vrst pa je $b$. Zato:

- Pravokotnik: $p = a \cdot b$
- Kvadrat: $p = a \cdot a = a^2$

**4. Pazi na enote.** Pri računanju morata biti obe stranici v isti enoti. Če je ena v metrih in druga v centimetrih, eno pretvori.

**5. Iskanje neznane stranice.** Če poznaš ploščino in eno stranico, drugo dobiš z deljenjem: $b = p : a$. Če poznaš obseg in eno stranico pravokotnika, najprej izračunaš $a + b = o : 2$, nato odšteješ znano stranico.

## Rešeni primeri

### Primer 1: obseg in ploščina pravokotnika

Pravokotnik ima stranici $a = 8\,\text{cm}$ in $b = 5\,\text{cm}$. Izračunaj obseg in ploščino.

1. Obseg je vsota vseh stranic, zato: $o = 2 \cdot (a + b)$.
2. Vstavimo: $o = 2 \cdot (8 + 5) = 2 \cdot 13 = 26\,\text{cm}$.
3. Ploščina je število kvadratkov, torej $a \cdot b$: $p = 8 \cdot 5 = 40\,\text{cm}^2$.
4. Odgovor: obseg je $26\,\text{cm}$, ploščina $40\,\text{cm}^2$. Pri ploščini pišemo $\text{cm}^2$, ker štejemo kvadratke.

### Primer 2: kvadrat in neznana stranica

a) Kvadrat ima stranico $a = 7\,\text{cm}$. Izračunaj obseg in ploščino.

1. $o = 4 \cdot a = 4 \cdot 7 = 28\,\text{cm}$.
2. $p = a \cdot a = 7 \cdot 7 = 49\,\text{cm}^2$.

b) Pravokotnik ima ploščino $54\,\text{cm}^2$ in eno stranico $6\,\text{cm}$. Kolikšna je druga stranica in kolikšen je obseg?

1. Iz $p = a \cdot b$ sledi $b = p : a$, ker je deljenje obratno množenju.
2. $b = 54 : 6 = 9\,\text{cm}$.
3. Obseg: $o = 2 \cdot (6 + 9) = 2 \cdot 15 = 30\,\text{cm}$.
4. Preverimo: $6 \cdot 9 = 54$. ✓

### Primer 3: besedilna naloga

Vrt ima obliko pravokotnika z merama $12\,\text{m}$ in $8\,\text{m}$. Ogradili ga bomo z žično ograjo. En meter ograje stane $5$ evrov. Na vrtu bomo posejali travo, ena vreča semen zadošča za $20\,\text{m}^2$. Koliko stane ograja in koliko vreč semen potrebujemo?

1. **Kaj iščemo.** Ograja gre okrog vrta, zato potrebujemo **obseg**. Seme prekrije površino, zato potrebujemo **ploščino**.
2. Obseg: $o = 2 \cdot (12 + 8) = 2 \cdot 20 = 40\,\text{m}$.
3. Cena ograje: $40 \cdot 5 = 200$ evrov.
4. Ploščina: $p = 12 \cdot 8 = 96\,\text{m}^2$.
5. Število vreč: $96 : 20 = 4{,}8$. Vreče ne moremo kupiti na pol, zato zaokrožimo navzgor: potrebujemo **5 vreč**.
6. Odgovor: ograja stane $200$ evrov, potrebujemo $5$ vreč semen.

## Pogoste napake

- **Zamenjava obsega in ploščine.** Obseg je dolžina poti okoli lika (enota $\text{cm}$), ploščina je površina (enota $\text{cm}^2$). Pred računom se vprašaj: ali iščem rob ali notranjost?
- **Napačna enota.** Ploščina $40\,\text{cm}$ je napaka, pravilno je $40\,\text{cm}^2$.
- **Seštevanje samo dveh stranic.** Obseg pravokotnika ni $a + b$, ampak $2 \cdot (a + b)$.
- **Kvadrat: $a^2$ ni $2 \cdot a$.** Pri $a = 5$ je $a^2 = 25$, medtem ko je $2 \cdot a = 10$.
- **Različne enote.** Pravokotnik $2\,\text{m}$ krat $50\,\text{cm}$: najprej pretvori v $200\,\text{cm}$ krat $50\,\text{cm}$ (ali v $2\,\text{m}$ krat $0{,}5\,\text{m}$).

## Povzetek

- Obseg je vsota dolžin vseh stranic. Pravokotnik: $o = 2 \cdot (a + b)$. Kvadrat: $o = 4 \cdot a$.
- Ploščina pove, koliko ploskve lik prekriva. Pravokotnik: $p = a \cdot b$. Kvadrat: $p = a^2$.
- Obseg merimo v $\text{cm}$, $\text{m}$, ..., ploščino v $\text{cm}^2$, $\text{m}^2$, ...
- Pred računom pretvori vse mere v isto enoto.
- Pri besedilnih nalogah se vprašaj, ali gre za rob (obseg) ali za površino (ploščina).

## Drugače: Na sliki

Predstavljaj si pravokotnik $4\,\text{cm} \times 3\,\text{cm}$, narisan na kvadratni mreži, kjer je en kvadratek $1\,\text{cm}^2$.

- **Ploščina:** v vsaki vrsti je $4$ kvadratkov, vrste so $3$. Skupaj $3 \cdot 4 = 12$ kvadratkov, torej $12\,\text{cm}^2$.
- **Obseg:** hodiš po robu. Po zgornji stranici narediš $4$ korake, po desni $3$, po spodnji $4$, po levi $3$. Skupaj $14$ korakov, torej $14\,\text{cm}$.

Ploščino torej štejemo **znotraj** lika (kvadratke), obseg pa **po robu** (daljice). V simulaciji zgoraj sestavljaj like iz kvadratkov in opazuj, kako se spremenita obseg in ploščina. Opaziš lahko, da imajo različni liki z enako ploščino lahko različne obsege.

## Drugače: Iz vsakdanjega življenja

**Obseg: ograja, okvir, trak.** Če hočeš okoli pravokotne slike $30\,\text{cm} \times 20\,\text{cm}$ prilepiti okrasni trak, potrebuješ $2 \cdot (30 + 20) = 100\,\text{cm}$ traku.

**Ploščina: tlak, barva, tla.** Če imaš sobo $4\,\text{m} \times 3\,\text{m}$ in hočeš položiti parket, potrebuješ $4 \cdot 3 = 12\,\text{m}^2$ parketa. Dolžina robov te ne zanima, zanima te površina tal.

Opazi: za ograjo okoli sobe bi računal obseg ($14\,\text{m}$), za talno oblogo pa ploščino ($12\,\text{m}^2$). Števili sta različni in imata različni enoti, saj merita različni stvari.

## Drugače: Korak za korakom s številkami

Primerjajmo tri pravokotnike z obsegom $20\,\text{cm}$:

| $a$ | $b$ | obseg $2 \cdot (a+b)$ | ploščina $a \cdot b$ |
|---|---|---|---|
| $9\,\text{cm}$ | $1\,\text{cm}$ | $20\,\text{cm}$ | $9\,\text{cm}^2$ |
| $8\,\text{cm}$ | $2\,\text{cm}$ | $20\,\text{cm}$ | $16\,\text{cm}^2$ |
| $5\,\text{cm}$ | $5\,\text{cm}$ | $20\,\text{cm}$ | $25\,\text{cm}^2$ |

Vsi trije imajo enak obseg, a različne ploščine. Obseg torej ne določa ploščine. Pri enakem obsegu ima največjo ploščino lik, ki je bolj »kompakten«, tukaj kvadrat.

Recept za nalogo:

1. Preberi, ali iščeš rob ali površino.
2. Zapiši mere in jih pretvori v isto enoto.
3. Izberi formulo.
4. Vstavi in izračunaj.
5. Dopiši pravilno enoto in preveri, ali je rezultat smiseln.

## Drugače: Bolj natančno

**Zakaj je ploščina $a \cdot b$?** Ploščino merimo z enotnim kvadratom, ki ima stranico $1$ enoto. Če je $a$ celo število, lahko vzdolž stranice $a$ položimo $a$ takih kvadratov v vrsto. Če je $b$ celo število, lahko tako vrsto ponovimo $b$-krat. Dobimo $b$ vrst po $a$ kvadratov, to je $a \cdot b$ kvadratov. Pravilo velja tudi za decimalne mere, npr. $2{,}5\,\text{m} \cdot 1{,}2\,\text{m}$.

**Zakaj je enota $\text{cm}^2$?** Ker ploščino merimo s kvadrati s stranico $1\,\text{cm}$, se enota množi: $\text{cm} \cdot \text{cm} = \text{cm}^2$.

**Kvadrat kot poseben primer.** Če v pravokotniku postavimo $b = a$, dobimo $o = 2 \cdot (a + a) = 4a$ in $p = a \cdot a = a^2$.

**Pretvarjanje enot ploščine.** Ker je $1\,\text{m} = 100\,\text{cm}$, je $1\,\text{m}^2 = 100 \cdot 100\,\text{cm}^2 = 10\,000\,\text{cm}^2$. Pretvorni količnik ni $100$, ampak $10\,000$.

## Preveri se

? Pravokotnik ima stranici $9\,\text{cm}$ in $4\,\text{cm}$. Kolikšen je njegov obseg?
- $13\,\text{cm}$
+ $26\,\text{cm}$
- $36\,\text{cm}$
- $36\,\text{cm}^2$
> Obseg je $2 \cdot (9 + 4) = 2 \cdot 13 = 26\,\text{cm}$. Odgovor $13\,\text{cm}$ je seštevek samo dveh stranic, $36$ pa je ploščina.

? Kvadrat ima obseg $24\,\text{cm}$. Kolikšna je njegova ploščina?
- $24\,\text{cm}^2$
- $12\,\text{cm}^2$
+ $36\,\text{cm}^2$
- $144\,\text{cm}^2$
> Stranica je $a = 24 : 4 = 6\,\text{cm}$, ploščina pa $6 \cdot 6 = 36\,\text{cm}^2$. Odgovor $144$ dobiš, če kvadriraš obseg ali stranico narobe določiš.

? Soba je dolga $5\,\text{m}$ in široka $4\,\text{m}$. Koliko $\text{m}^2$ talne obloge potrebujemo?
- $18\,\text{m}^2$
+ $20\,\text{m}^2$
- $9\,\text{m}^2$
> Talna obloga prekrije površino, zato računamo ploščino: $5 \cdot 4 = 20\,\text{m}^2$. Število $18$ je obseg ($2 \cdot (5+4)$), $9$ pa vsota stranic.
