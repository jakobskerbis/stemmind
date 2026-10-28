---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih razredov že znaš množiti in računati ploščino kvadrata: če ima stranica dolžino $a$, je ploščina $a \cdot a$. Tak zapis je dolg in se ponavlja, zato ga skrajšamo: $a \cdot a = a^2$. Pravimo mu **kvadrat števila**.

Kvadriranje potrebuješ povsod, kjer se pojavljajo ploščine (koliko ploščic potrebuješ za kvadratno sobo), pozneje pa pri Pitagorovem izreku, pri formulah v fiziki in pri računanju s koreni. Naučil se boš tudi, kako kvadrat hitro **oceniti**, da takoj opaziš, če si se pri računu zmotil.

## Razlaga

**1. Definicija.** Kvadrat števila $a$ je produkt števila s samim seboj:

$$a^2 = a \cdot a$$

Beremo: »$a$ na kvadrat« ali »kvadrat števila $a$«. Število $a$ je **osnova**, število $2$ je **eksponent**.

**2. Primeri.**

- $5^2 = 5 \cdot 5 = 25$
- $12^2 = 12 \cdot 12 = 144$
- $0^2 = 0$, $1^2 = 1$

**3. Kvadrat negativnega števila.** Produkt dveh negativnih števil je pozitiven, zato je

$$(-4)^2 = (-4)\cdot(-4) = 16$$

Kvadrat je torej **nikoli negativen**: $a^2 \ge 0$ za vsako število $a$. Števili $4$ in $-4$ imata enak kvadrat.

**4. Pozor na zapis.** $(-4)^2 = 16$, toda $-4^2 = -(4\cdot 4) = -16$. Brez oklepaja se kvadrira samo število neposredno pred eksponentom.

**5. Kvadrat ulomka in decimalnega števila.**

- $\left(\dfrac{2}{3}\right)^2 = \dfrac{2}{3}\cdot\dfrac{2}{3} = \dfrac{4}{9}$ (kvadriramo števec in imenovalec).
- $(0{,}3)^2 = 0{,}3 \cdot 0{,}3 = 0{,}09$ (trije desetinki krat tri desetinke je devet stotink; decimalnih mest je dvakrat toliko).

**6. Popolni kvadrati.** Kvadrate naravnih števil imenujemo **popolni kvadrati**. Dobro je, da jih znaš na pamet:

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 |

Ostali: $11^2 = 121$, $12^2 = 144$, $13^2 = 169$, $14^2 = 196$, $15^2 = 225$.

**7. Ocenjevanje kvadrata.** Kvadrat števila, ki ni v tabeli, ujameš med dva znana kvadrata. Primer: $27^2$. Ker je $20 < 27 < 30$, je $400 < 27^2 < 900$. Natančneje: $27$ je blizu $30$, zato je kvadrat blizu $900$, a manjši. Še bolje zaokrožimo na $27 \approx 27$ in računamo $27^2 = 729$.

Pri ocenjevanju za kvadrat zaokroženega števila: $48^2 \approx 50^2 = 2500$. Pravi rezultat ($2304$) je malo manjši, ker je $48 < 50$.

**8. Zadnja števka kvadrata.** Zadnja števka kvadrata je odvisna samo od zadnje števke osnove. Kvadrat naravnega števila se nikoli ne konča na $2$, $3$, $7$ ali $8$. To je koristen test: število $1\,237$ ne more biti popolni kvadrat.

## Rešeni primeri

### Primer 1 (lažji): osnovno kvadriranje

Izračunaj $9^2$, $(-6)^2$ in $-6^2$.

1. $9^2 = 9 \cdot 9 = 81$.
2. $(-6)^2 = (-6)\cdot(-6) = 36$, ker je produkt dveh negativnih števil pozitiven.
3. $-6^2 = -(6\cdot 6) = -36$, ker eksponent velja samo za $6$, minus pa ostane pred njim.

### Primer 2: ulomek in decimalno število

Izračunaj $\left(\dfrac{3}{5}\right)^2$ in $(1{,}2)^2$.

1. Ulomek: $\left(\dfrac{3}{5}\right)^2 = \dfrac{3^2}{5^2} = \dfrac{9}{25}$. Kvadriramo števec in imenovalec posebej, ker množimo ulomka.
2. Decimalno število: $12 \cdot 12 = 144$. Ker ima $1{,}2$ eno decimalko, ima kvadrat dve: $(1{,}2)^2 = 1{,}44$.
3. Preverimo z oceno: $1{,}2$ je malo več kot $1$, zato mora biti kvadrat malo večji od $1$. ✓

### Primer 3 (težji): ocena in besedilna naloga

Kvadratna dvorana ima stranico $23\,\text{m}$. Oceni in nato izračunaj njeno ploščino.

1. **Ocena.** $20 < 23 < 25$, zato je ploščina med $20^2 = 400$ in $25^2 = 625$ kvadratnih metrov. Ker je $23$ bliže $25$ kot $20$, pričakujemo vrednost bliže zgornji meji.
2. **Račun.** $23^2 = 23 \cdot 23 = 23\cdot 20 + 23 \cdot 3 = 460 + 69 = 529$.
3. **Preverimo oceno.** $400 < 529 < 625$. ✓ Zadnja števka: $3\cdot 3 = 9$, kar se ujema z $529$.
4. **Odgovor.** Ploščina dvorane je $529\,\text{m}^2$. Enota je kvadratni meter, ker se kvadrirajo tudi metri.

## Pogoste napake

- **Množenje z dva namesto s samim seboj.** $7^2 = 49$, ne $14$. Eksponent $2$ pomeni, da osnovo dvakrat zapišemo v produkt.
- **Kvadrat negativnega števila.** $(-5)^2 = 25$, ne $-25$. Pazi na oklepaj: $-5^2 = -25$.
- **Kvadrat vsote.** $(3+4)^2 = 7^2 = 49$, ne $3^2 + 4^2 = 25$. Najprej izračunaj oklepaj, nato kvadriraj.
- **Decimalna vejica.** $(0{,}4)^2 = 0{,}16$, ne $1{,}6$ in ne $0{,}4$. Kvadrat števila, manjšega od $1$, je manjši od tega števila.
- **Pozabljena enota.** Ploščina je v $\text{m}^2$, ne v $\text{m}$.

## Povzetek

- Kvadrat števila: $a^2 = a \cdot a$.
- Kvadrat je vedno $\ge 0$; $(-a)^2 = a^2$, toda $-a^2$ je negativno.
- $(-4)^2 = 16$, $-4^2 = -16$.
- Kvadrat ulomka: $\left(\dfrac{a}{b}\right)^2 = \dfrac{a^2}{b^2}$.
- Popolne kvadrate do $15^2$ je dobro poznati na pamet.
- Kvadrat ocenimo tako, da osnovo ujamemo med dve »lepi« števili.
- Popolni kvadrat se ne konča na $2$, $3$, $7$ ali $8$.

## Drugače: Na sliki

Nariši kvadrat s stranico $4$ kvadratke. Vanj gre $4$ vrstice po $4$ kvadratkov, skupaj $16$. Zato je $4^2 = 16$. Beseda »kvadrat« pri števili res izvira iz te slike.

Za $5^2$ narišeš kvadrat $5 \times 5$ in dobiš $25$ kvadratkov. Iz $4^2$ v $5^2$ dodaš »L-obliko«: $5 + 4 = 9$ kvadratkov, zato je $25 = 16 + 9$. Na enak način dobiš naslednje kvadrate: $1, 4, 9, 16, 25, \dots$ so vsote zaporednih lihih števil:

$$1,\quad 1+3,\quad 1+3+5,\quad 1+3+5+7,\ \dots$$

Slika pokaže tudi, zakaj kvadrat hitro raste: če stranico podvojiš, ploščina ni dvakrat večja, ampak **štirikrat**. Iz $3^2 = 9$ dobiš $6^2 = 36$.

## Drugače: Iz vsakdanjega življenja

Kupuješ kvadratne talne ploščice. Soba ima obliko kvadrata, ki je $6$ ploščic dolg in $6$ ploščic širok. Ploščic je $6^2 = 36$. Če bi sobo povečal na $12 \times 12$ ploščic, bi jih potreboval $144$, torej ne dvakrat več, ampak štirikrat več.

Še en primer: pica s premerom $30\,\text{cm}$ in pica s premerom $15\,\text{cm}$. Večja ni dvakrat večja po površini, ampak približno štirikrat. Zato je ena velika pica pogosto bolj izplačljiva kot dve majhni. (Pri tem je pomembno, da ploščina kroga res raste s kvadratom polmera; formule za krog se boš učil pozneje.)

Analogija: pri kvadriranju je pomembno, da se meri »v obe smeri«: dolžina krat širina. Zato se število poveča tako hitro.

## Drugače: Korak za korakom s številkami

Kako izračunati $37^2$ brez kalkulatorja?

1. Razbij število: $37 = 30 + 7$.
2. Množi po delih: $37 \cdot 37 = 37\cdot 30 + 37 \cdot 7$.
3. $37 \cdot 30 = 1110$.
4. $37 \cdot 7 = 259$.
5. Seštej: $1110 + 259 = 1369$.
6. Oceni za preverjanje: $30^2 = 900$ in $40^2 = 1600$, rezultat $1369$ je vmes. ✓
7. Zadnja števka: $7\cdot 7 = 49$, torej se konča na $9$. ✓

Hitra ocena in preverjanje z zadnjo števko ti prihranita veliko napak.

Tabela zadnjih števk:

| zadnja števka osnove | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| zadnja števka kvadrata | 0 | 1 | 4 | 9 | 6 | 5 | 6 | 9 | 4 | 1 |

## Drugače: Bolj natančno

**Zakaj je kvadrat vedno nenegativen?** Če je $a > 0$, je produkt dveh pozitivnih števil pozitiven. Če je $a < 0$, je produkt dveh negativnih števil pozitiven. Če je $a = 0$, je $0^2 = 0$. V vseh primerih $a^2 \ge 0$.

**Zakaj $(-a)^2 = a^2$?** Ker je $(-a)\cdot(-a) = a \cdot a$ (minus krat minus je plus).

**Zakaj je vsota lihih števil kvadrat?** Iz $n^2$ dobimo $(n+1)^2$ tako, da dodamo $2n + 1$ kvadratkov (ena vrstica, en stolpec, in skupni kot se šteje enkrat):

$$(n+1)^2 = n^2 + 2n + 1$$

Za $n = 4$: $5^2 = 16 + 9 = 25$. ✓ Ker je $2n+1$ liho število, sledi, da je $n^2$ vsota prvih $n$ lihih števil.

**Zakaj se kvadrat ne konča na $2$, $3$, $7$, $8$?** Zadnja števka produkta $a\cdot a$ je odvisna samo od zadnje števke števila $a$. Ko preizkusiš vseh deset možnosti (tabela zgoraj), dobiš samo zadnje števke $0, 1, 4, 5, 6, 9$.

## Preveri se

? Koliko je $(-7)^2$?
- $-49$
- $-14$
+ $49$
- $14$
> $(-7)^2 = (-7)\cdot(-7) = 49$, ker je produkt dveh negativnih števil pozitiven. Odgovor $-49$ bi bil pravilen za $-7^2$ brez oklepaja, $14$ in $-14$ pa nastaneta, če osnovo množiš z $2$.

? Med katerima dvema popolnima kvadratoma leži število $27^2$?
- $200$ in $400$
+ $400$ in $900$
- $900$ in $1600$
> Ker je $20 < 27 < 30$, je $20^2 < 27^2 < 30^2$, torej $400 < 27^2 < 900$. Pravi rezultat je $729$.

? Koliko je $(0{,}5)^2$?
- $1$
- $0{,}10$
- $2{,}5$
+ $0{,}25$
> $5 \cdot 5 = 25$, ker ima $0{,}5$ eno decimalko, ima kvadrat dve: $0{,}25$. Kvadrat števila, ki je manjše od $1$, je manjši od tega števila.
