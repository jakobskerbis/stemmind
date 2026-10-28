---
stanje: osnutek
demo: linearna
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih razredov že znaš množiti in deliti, računati z ulomki in decimalnimi števili ter brati podatke iz tabele. Znaš tudi narisati točke v koordinatnem sistemu.

V vsakdanjem življenju se pogosto srečaš z odvisnostjo, kjer se ob večanju ene količine veča tudi druga: več kilogramov jabolk pomeni višji znesek na blagajni, več ur hoje pomeni daljšo pot, več sestavin pomeni več porcij. Kadar se količini spreminjata na poseben, »pošten« način, rečemo, da sta **premo sorazmerni**. Takrat lahko iz ene znane vrednosti izračunamo drugo, ne da bi karkoli tehtali ali merili. Za to se naučiš tri orodja: **tabelo**, **graf** in **sklepni račun**.

## Razlaga

**1. Kaj je premo sorazmerje.** Količini sta premo sorazmerni, če se ob podvojitvi prve podvoji tudi druga, ob potrojitvi prve se potroji tudi druga, ob polovici prve se razpolovi tudi druga. Skratka: če prvo količino pomnožimo z nekim številom, se z istim številom pomnoži tudi druga.

**2. Količnik je stalen.** Pri premem sorazmerju je količnik ustreznih vrednosti vedno enak:

$$\frac{y}{x} = k \quad \text{oziroma} \quad y = k \cdot x$$

Število $k$ imenujemo **koeficient sorazmernosti**. Pove, koliko je $y$, kadar je $x = 1$ (npr. cena za $1\,\text{kg}$).

**3. Tabela.** Vrednosti zapišemo v tabelo. Primer: $1\,\text{kg}$ jabolk stane $1{,}20\,\text{€}$.

| $x$ (masa v $\text{kg}$) | 1 | 2 | 3 | 5 |
|---|---|---|---|---|
| $y$ (cena v €) | 1,20 | 2,40 | 3,60 | 6,00 |

Ali je to premo sorazmerje? Preverimo količnike: $\frac{1{,}20}{1} = 1{,}2$, $\frac{2{,}40}{2} = 1{,}2$, $\frac{3{,}60}{3} = 1{,}2$, $\frac{6}{5} = 1{,}2$. Vsi so enaki, zato je $k = 1{,}2$.

**4. Graf.** Točke $(x, y)$ narišemo v koordinatni sistem. Pri premem sorazmerju ležijo vse točke na **premici, ki poteka skozi izhodišče** $(0, 0)$. To je logično: če kupiš $0\,\text{kg}$, plačaš $0\,\text{€}$. Večji kot je $k$, bolj strma je premica.

**5. Sklepni račun.** Postopek v treh korakih:

1. Iz podatka za več enot sklepamo na **eno enoto** (delimo).
2. Iz ene enote sklepamo na **želeno število enot** (množimo).
3. Zapišemo odgovor z enoto.

**6. Kdaj ni premo sorazmerje.** Če se ob podvojitvi ene količine druga ne podvoji, sorazmerje ni premo. Primer: starost otroka in njegova višina. Pri $2$ letih ni dvakrat tako visok kot pri $1$ letu. Prav tako ni premo sorazmerje, če graf ne gre skozi izhodišče (npr. taksi s fiksno osnovno ceno).

## Rešeni primeri

### Primer 1 (lažji): preverjanje s tabelo

Ali sta količini v tabeli premo sorazmerni?

| $x$ | 2 | 4 | 6 |
|---|---|---|---|
| $y$ | 5 | 10 | 15 |

1. Izračunamo količnike $\frac{y}{x}$, ker je pri premem sorazmerju stalen.
2. $\frac{5}{2} = 2{,}5$, $\frac{10}{4} = 2{,}5$, $\frac{15}{6} = 2{,}5$.
3. Vsi količniki so enaki, zato je sorazmerje premo, $k = 2{,}5$.
4. Preverimo še z drugim pogledom: $x$ se podvoji ($2 \to 4$), $y$ se tudi podvoji ($5 \to 10$). ✓

### Primer 2: sklepni račun

$4$ zvezki stanejo $6\,\text{€}$. Koliko stane $10$ zvezkov?

1. **Na eno enoto (delimo):** $1$ zvezek stane $6 : 4 = 1{,}5\,\text{€}$.
2. **Na želeno število (množimo):** $10$ zvezkov stane $10 \cdot 1{,}5 = 15\,\text{€}$.
3. **Odgovor:** $10$ zvezkov stane $15\,\text{€}$.
4. **Preverimo smiselnost:** $10$ zvezkov je več kot $4$, zato mora biti cena višja kot $6\,\text{€}$. ✓

### Primer 3 (težji): tabela, formula in graf

Avto vozi s stalno hitrostjo in v $2\,\text{h}$ prevozi $120\,\text{km}$. a) Zapiši formulo za prevožene kilometre $y$ v odvisnosti od časa $x$. b) Dopolni tabelo. c) Opiši graf.

1. **Koeficient sorazmernosti:** $k = \frac{120}{2} = 60$. To je prevoženih $60\,\text{km}$ na uro.
2. **Formula:** $y = 60 \cdot x$.
3. **Tabela:**

| $x$ (čas v $\text{h}$) | 1 | 2 | 3 | 4,5 |
|---|---|---|---|---|
| $y$ (pot v $\text{km}$) | 60 | 120 | 180 | 270 |

   Za zadnji stolpec: $60 \cdot 4{,}5 = 270$.
4. **Graf:** točke $(1, 60)$, $(2, 120)$, $(3, 180)$, $(4{,}5, 270)$ ležijo na premici skozi izhodišče $(0, 0)$, ker v $0\,\text{h}$ prevozimo $0\,\text{km}$.
5. **Preverimo:** $\frac{270}{4{,}5} = 60$. ✓

## Pogoste napake

- **Mešanje premega sorazmerja z vsako rastočo odvisnostjo.** Da količina raste, še ne pomeni, da je sorazmerje premo. Vedno preveri, ali je količnik $\frac{y}{x}$ stalen.
- **Seštevanje namesto množenja.** Če $3$ čokolade stanejo $4\,\text{€}$, $6$ čokolad ne stane $4 + 3 = 7\,\text{€}$, ampak $2 \cdot 4 = 8\,\text{€}$. Količino pomnožimo, ne prištejemo.
- **Pozabljena enota.** Rezultat brez enote ni popoln odgovor (npr. $15$ namesto $15\,\text{€}$).
- **Graf ne gre skozi izhodišče.** Če premica ne poteka skozi $(0, 0)$, to ni premo sorazmerje.
- **Zamenjava stolpcev.** Pri računanju količnika vedno deli $y$ z $x$ in pri vseh parih na enak način.

## Povzetek

- Količini sta premo sorazmerni, če se ob množenju ene z nekim številom z istim številom pomnoži tudi druga.
- Količnik $\frac{y}{x} = k$ je stalen, $k$ je koeficient sorazmernosti; zveza je $y = kx$.
- V tabeli preverimo, ali so vsi količniki $\frac{y}{x}$ enaki.
- Graf je premica skozi izhodišče $(0, 0)$.
- Sklepni račun: najprej na eno enoto (delimo), nato na želeno število enot (množimo).

## Drugače: Na sliki

Spodnja demonstracija »Graf funkcije y = kx + n« prikazuje premico v koordinatnem sistemu. Pri premem sorazmerju nas zanima poseben primer, ko je $n = 0$, torej $y = kx$.

- Nastavi $n = 0$ in opazuj: premica vedno poteka skozi izhodišče. To je graf premega sorazmerja.
- Spreminjaj $k$: večji ko je $k$, strmejša je premica. Pri $k = 2$ se $y$ poveča za $2$, ko se $x$ poveča za $1$.
- Zdaj nastavi $n$ na neko število, različno od $0$. Premica se premakne in ne gre več skozi izhodišče. Takšna zveza **ni** premo sorazmerje, ker $x = 0$ ne da $y = 0$.

Poskusi še simulacijo spodaj (»Premo sorazmerje«), kjer lahko preveriš, kdaj sta dva para vrednosti v enakem razmerju.

## Drugače: Iz vsakdanjega življenja

**Na tržnici.** Prodajalec ima napis: »Češnje: $4\,\text{€}$ za $1\,\text{kg}$.« Če vzameš pol kilograma, plačaš $2\,\text{€}$, za dva kilograma $8\,\text{€}$. Cena sledi masi: dvakrat več češenj, dvakrat višji znesek. Cena in masa sta premo sorazmerni.

**Recept.** Palačinke za $4$ osebe potrebujejo $2$ jajci. Za $8$ oseb potrebuješ $4$ jajca (dvakrat več oseb, dvakrat več jajc). Ko recept povečuješ ali zmanjšuješ, delaš ravno sklepni račun.

**Primer, ki ni premo sorazmerje.** Taksi zaračuna $3\,\text{€}$ osnovne cene in še $1\,\text{€}$ za vsak kilometer. Za $2\,\text{km}$ plačaš $5\,\text{€}$, za $4\,\text{km}$ pa $7\,\text{€}$, ne $10\,\text{€}$. Cena se ni podvojila, zato sorazmerje ni premo.

## Drugače: Korak za korakom s številkami

Naloga: $5$ kosov enakih svinčnikov stane $3{,}50\,\text{€}$. Koliko stane $8$ kosov?

**Z razmislekom o enoti (sklepni račun):**

1. $5$ svinčnikov → $3{,}50\,\text{€}$
2. $1$ svinčnik → $3{,}50 : 5 = 0{,}70\,\text{€}$
3. $8$ svinčnikov → $8 \cdot 0{,}70 = 5{,}60\,\text{€}$

**S tabelo in koeficientom:**

| $x$ (število svinčnikov) | 1 | 5 | 8 |
|---|---|---|---|
| $y$ (cena v €) | 0,70 | 3,50 | ? |

1. $k = \frac{3{,}50}{5} = 0{,}70$.
2. $y = 0{,}70 \cdot x$.
3. Za $x = 8$: $y = 0{,}70 \cdot 8 = 5{,}60$.

Oba načina dasta isti rezultat: $5{,}60\,\text{€}$. Izberi tistega, ki ti je bližje; tabela je uporabna, kadar moraš izračunati več vrednosti naenkrat.

## Drugače: Bolj natančno

Spoznali smo, da pri premem sorazmerju velja $y = kx$. Zakaj iz tega sledi, da se ob podvojitvi $x$ podvoji tudi $y$?

Vzemimo dva para vrednosti: $(x_1, y_1)$ in $(x_2, y_2)$, oba z istim koeficientom $k$. Potem je $y_1 = kx_1$ in $y_2 = kx_2$. Če je $x_2 = 2x_1$, je

$$y_2 = k \cdot 2x_1 = 2 \cdot (kx_1) = 2y_1.$$

Enako velja za poljubno število namesto $2$. Iz $\frac{y_1}{x_1} = \frac{y_2}{x_2} = k$ sledi tudi, da lahko neznano vrednost izračunamo z razmerjem:

$$\frac{y_2}{x_2} = \frac{y_1}{x_1} \quad \Rightarrow \quad y_2 = \frac{y_1}{x_1} \cdot x_2.$$

Pri sklepnem računu $4$ zvezki → $6\,\text{€}$, $10$ zvezkov → ? je to natanko to, kar naredimo: $y_2 = \frac{6}{4} \cdot 10 = 15$.

## Preveri se

? Katera tabela prikazuje premo sorazmerje?
- $x$: 1, 2, 3; $y$: 3, 4, 5
+ $x$: 1, 2, 3; $y$: 4, 8, 12
- $x$: 2, 4, 6; $y$: 1, 2, 4
- $x$: 1, 2, 3; $y$: 12, 6, 4
> Pri premem sorazmerju je količnik $\frac{y}{x}$ stalen. Pri tabeli $4, 8, 12$ je vedno $4$. Pri tabeli $3, 4, 5$ se $y$ le povečuje za $1$ (seštevanje), kar ni sorazmerje.

? $6$ jabolk tehta $900\,\text{g}$. Koliko tehta $10$ takih jabolk?
- $904\,\text{g}$
- $1350\,\text{g}$
+ $1500\,\text{g}$
> $1$ jabolko tehta $900 : 6 = 150\,\text{g}$, torej $10$ jabolk tehta $10 \cdot 150 = 1500\,\text{g}$.

? Kako izgleda graf premega sorazmerja?
- Poljubna premica, ki seka os $y$ nad izhodiščem.
- Krivulja, ki se vzpenja vedno hitreje.
+ Premica, ki poteka skozi izhodišče $(0, 0)$.
> Pri $y = kx$ za $x = 0$ dobimo $y = 0$, zato graf poteka skozi izhodišče in je premica. Če premica seka os $y$ drugje, zveza ni premo sorazmerje.
