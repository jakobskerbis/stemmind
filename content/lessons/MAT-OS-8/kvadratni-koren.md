---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Kvadriranje že poznaš: $5^2 = 5 \cdot 5 = 25$. Tudi ploščino kvadrata računaš tako: če ima kvadrat stranico $a$, je njegova ploščina $a^2$.

Zdaj vprašanje obrnemo: kvadrat ima ploščino $49\,\text{cm}^2$. Kako dolga je stranica? Iščemo število, ki ga moramo pomnožiti samo s seboj, da dobimo $49$. To je **kvadratni koren**. Korenjenje potrebuješ pri računanju dolžin iz ploščin, pri Pitagorovem izreku in pri mnogih nalogah iz fizike in vsakdanjega življenja.

## Razlaga

**1. Definicija.** Kvadratni koren nenegativnega števila $a$ je tisto nenegativno število, katerega kvadrat je $a$. Zapišemo ga $\sqrt{a}$.

$$\sqrt{a} = b \iff b^2 = a \quad (a \ge 0,\ b \ge 0)$$

Na primer $\sqrt{49} = 7$, ker je $7^2 = 49$.

**2. Poimenovanje.** Število pod korenom ($a$) imenujemo **korenjenec**, rezultat ($b$) je **kvadratni koren**.

**3. Popolni kvadrati.** Števila, katerih koren je naravno število, so popolni kvadrati. Dobro si zapomni:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 | 169 | 196 | 225 |

**4. Koren negativnega števila.** V realnih številih ne obstaja, ker je kvadrat vsakega števila nenegativen. $\sqrt{-9}$ ni definiran.

**5. Povezava s kvadriranjem.** Za $a \ge 0$ velja:

$$\left(\sqrt{a}\right)^2 = a \qquad \text{in} \qquad \sqrt{a^2} = a$$

**6. Delno korenjenje.** Kadar korenjenec ni popoln kvadrat, mu včasih lahko izluščimo popoln kvadratni faktor. Uporabimo pravilo

$$\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b} \quad (a, b \ge 0).$$

Primer: $\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2}$. Iščemo največji popolni kvadrat, ki deli korenjenec.

**7. Ocena brez računala.** Če število ni popoln kvadrat, koren ni naravno število. Poiščemo sosednja popolna kvadrata, med katerima leži korenjenec. Če je $n^2 < a < (n+1)^2$, je $n < \sqrt{a} < n+1$.

## Rešeni primeri

### Primer 1 (lažji): osnovno korenjenje

Izračunaj $\sqrt{81}$, $\sqrt{144}$ in $\sqrt{0{,}25}$.

1. $\sqrt{81}$: iščemo število, ki na kvadrat da $81$. Ker je $9 \cdot 9 = 81$, je $\sqrt{81} = 9$.
2. $\sqrt{144} = 12$, ker je $12^2 = 144$.
3. $\sqrt{0{,}25}$: $0{,}25 = \dfrac{25}{100}$, zato je koren $\dfrac{5}{10} = 0{,}5$. Preverimo: $0{,}5^2 = 0{,}25$. ✓

### Primer 2: delno korenjenje

Delno korenjuj $\sqrt{72}$.

1. Poiščemo največji popolni kvadrat, ki deli $72$. Delitelji med popolnimi kvadrati: $4$, $9$, $36$. Največji je $36$, ker je $72 = 36 \cdot 2$.
2. Razbijemo koren: $\sqrt{72} = \sqrt{36 \cdot 2} = \sqrt{36} \cdot \sqrt{2}$.
3. Korenimo popolni kvadrat: $\sqrt{36} = 6$.
4. Rezultat: $\sqrt{72} = 6\sqrt{2}$.
5. Preverimo: $(6\sqrt{2})^2 = 36 \cdot 2 = 72$. ✓

Če bi izbrali manjši kvadrat, npr. $\sqrt{72} = \sqrt{4 \cdot 18} = 2\sqrt{18}$, bi bil postopek nedokončan, ker $18$ še vsebuje faktor $9$. Zato iščemo največji popolni kvadrat.

### Primer 3 (težji): ocena in uporaba

Oceni $\sqrt{50}$ na eno decimalko brez računala. Nato izračunaj stranico kvadrata s ploščino $50\,\text{cm}^2$.

1. Poiščemo sosednja popolna kvadrata: $7^2 = 49$ in $8^2 = 64$. Ker je $49 < 50 < 64$, je $7 < \sqrt{50} < 8$.
2. $50$ je zelo blizu $49$, zato je koren malo nad $7$. Preizkusimo $7{,}1$: $7{,}1^2 = 50{,}41$, kar je že več kot $50$.
3. Preizkusimo $7{,}0$: $49$, premalo. Torej je $7 < \sqrt{50} < 7{,}1$ in na eno decimalko $\sqrt{50} \approx 7{,}1$ (ker je $50$ bližje $50{,}41$ kot $49$ ... natančneje: $7{,}05^2 = 49{,}7025 < 50$, zato je koren večji od $7{,}05$ in zaokrožen na eno decimalko res $7{,}1$).
4. Stranica kvadrata: $a = \sqrt{50}\,\text{cm}$. Z delnim korenjenjem: $\sqrt{50} = 5\sqrt{2}\,\text{cm} \approx 7{,}1\,\text{cm}$.
5. Smiselnost: $7{,}1^2 \approx 50$. ✓

## Pogoste napake

- **Koren vsote razbiješ.** $\sqrt{9 + 16} = \sqrt{25} = 5$, ne $3 + 4 = 7$. Pravilo za razbijanje velja samo za produkt, ne za vsoto.
- **Mešanje korenjenja in deljenja z 2.** $\sqrt{36} = 6$, ne $18$.
- **Koren negativnega števila.** $\sqrt{-16}$ ni definiran. Pazi na razliko: $\sqrt{16} = 4$, ne $\pm 4$. Enačba $x^2 = 16$ ima dve rešitvi, simbol $\sqrt{16}$ pa samo eno.
- **Nedokončano delno korenjenje.** $\sqrt{72} = 2\sqrt{18}$ še ni končni zapis. Izlušči največji popolni kvadrat.
- **Napačna ocena.** $\sqrt{50}$ ni $25$. Koren je veliko manjši od korenjenca (za števila nad $1$).

## Povzetek

- $\sqrt{a} = b$ pomeni $b^2 = a$, pri čemer $a \ge 0$ in $b \ge 0$.
- Popolne kvadrate do $15^2 = 225$ je koristno poznati na pamet.
- Koren negativnega števila ni definiran.
- $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$ za $a, b \ge 0$. S tem delno korenimo: $\sqrt{72} = 6\sqrt{2}$.
- Ocena: če je $n^2 < a < (n+1)^2$, je $n < \sqrt{a} < n+1$.

## Drugače: Na sliki

Predstavljaj si kvadrat, sestavljen iz enotskih ploščic. Če ima $36$ ploščic, ga lahko razporediš v $6$ vrst po $6$ ploščic. Stranica ima torej $6$ ploščic, zato je $\sqrt{36} = 6$.

Korenjenje je torej iskanje stranice kvadrata, če poznamo ploščino. Če ploščic $50$ ne moremo razporediti v popoln kvadrat, vemo, da je stranica med $7$ in $8$, ker $7 \cdot 7 = 49$ ploščic še ne zadošča, $8 \cdot 8 = 64$ pa jih je preveč.

Na številski premici: $\sqrt{50}$ leži med $7$ in $8$, zelo blizu $7$.

## Drugače: Iz vsakdanjega življenja

Želiš položiti ploščice na kvadratno teraso s ploščino $64\,\text{m}^2$. Koliko meri stranica? Iščeš $\sqrt{64} = 8\,\text{m}$.

Če ima vrt ploščino $200\,\text{m}^2$ in je kvadratne oblike, boš stranico ocenil takole: $14^2 = 196$ in $15^2 = 225$, zato je stranica malo čez $14\,\text{m}$. To ti zadošča, da veš, koliko ograje potrebuješ približno: obseg je okoli $4 \cdot 14 = 56\,\text{m}$, nekoliko več.

Korenjenje je torej obratno dejanje kvadriranja, tako kot je odštevanje obratno seštevanju.

## Drugače: Korak za korakom s številkami

Recept za delno korenjenje, na primeru $\sqrt{180}$:

1. Razcepi korenjenec na prafaktorje: $180 = 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 = 2^2 \cdot 3^2 \cdot 5$.
2. Poišči pare enakih faktorjev: par $2 \cdot 2$ in par $3 \cdot 3$.
3. Iz vsakega para ven pride en faktor: $2$ in $3$. Ostane $5$ brez para.
4. Zmnoži, kar je prišlo ven: $2 \cdot 3 = 6$. Ostane pod korenom $5$.
5. Rezultat: $\sqrt{180} = 6\sqrt{5}$.
6. Preveri: $6^2 \cdot 5 = 36 \cdot 5 = 180$. ✓

Recept za oceno $\sqrt{105}$:

1. Poišči popolna kvadrata okoli $105$: $10^2 = 100$ in $11^2 = 121$.
2. Torej $10 < \sqrt{105} < 11$.
3. $105$ je blizu $100$, zato je koren malo nad $10$ (približno $10{,}2$, saj $10{,}2^2 = 104{,}04$).

## Drugače: Bolj natančno

Pravilo $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$ za $a, b \ge 0$ izhaja iz definicije korena. Označimo $x = \sqrt{a}$ in $y = \sqrt{b}$, torej $x^2 = a$ in $y^2 = b$. Potem je

$$(x \cdot y)^2 = x^2 \cdot y^2 = a \cdot b.$$

Število $x \cdot y$ je nenegativno in njegov kvadrat je $a \cdot b$, zato je po definiciji $x \cdot y = \sqrt{a \cdot b}$.

Podobnega pravila za vsoto ni. Protiprimer: $\sqrt{9 + 16} = 5$, toda $\sqrt{9} + \sqrt{16} = 7$.

Tudi ocena je upravičena: funkcija $n \mapsto n^2$ za nenegativna števila narašča. Če je $n^2 < a < (n+1)^2$, mora biti zato $n < \sqrt{a} < n+1$.

## Preveri se

? Koliko je $\sqrt{169}$?
- $84{,}5$
+ $13$
- $14$
- $23$
> $13 \cdot 13 = 169$, zato je $\sqrt{169} = 13$. Odgovor $84{,}5$ dobiš z deljenjem z $2$, kar ni korenjenje.

? Kateri zapis je delno korenjen $\sqrt{48}$?
- $2\sqrt{12}$
+ $4\sqrt{3}$
- $6\sqrt{8}$
> $48 = 16 \cdot 3$, zato je $\sqrt{48} = 4\sqrt{3}$. Zapis $2\sqrt{12}$ je nedokončan, ker $12$ vsebuje faktor $4$, $6\sqrt{8}$ pa ni enak $\sqrt{48}$.

? Med katerima zaporednima naravnima številoma leži $\sqrt{90}$?
- med $8$ in $9$
+ med $9$ in $10$
- med $45$ in $46$
> $9^2 = 81$ in $10^2 = 100$, ker je $81 < 90 < 100$, je $9 < \sqrt{90} < 10$.
