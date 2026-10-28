---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Že iz osnovne šole poznaš skupine stvari, ki jih obravnavamo kot celoto: učence v razredu, večkratnike števila $3$, delitelje števila $12$. V matematiki takšni skupini rečemo **množica**. Beseda je kratka, za njo pa stoji zelo natančen jezik. Z njim brez ugibanja odgovoriš na vprašanja, kot so: Katera števila so hkrati soda in deljiva s $3$? Kateri dijaki obiskujejo vsaj en krožek? Koliko jih ne obiskuje nobenega?

Jezik množic boš potreboval v skoraj vsaki temi, ki sledi. Rešitve enačb in neenačb zapisujemo kot množice, definicijsko območje funkcije je množica, števila razvrščamo v množice (naravna, cela, racionalna, realna števila), v verjetnosti pa so dogodki podmnožice. Vennov diagram je koristen tudi pri vsakdanjih problemih: pri anketah, pri filtriranju v spletni trgovini in pri iskanju po spletu. V tej lekciji se naučiš oznak, računskih operacij in tega, kako se lotiš besedilnih nalog s štetjem elementov.

## Razlaga

**1. Množica in elementi.** *Množica* je skupek različnih objektov, ki so natančno določeni: za vsak objekt moramo vedeti, ali v množici je ali ni. Objekte imenujemo **elementi** množice. Množice označimo z velikimi črkami ($A$, $B$, $C$, …), elemente pa običajno z malimi. Zapis $a \in A$ beremo »$a$ je element množice $A$«, zapis $a \notin A$ pa »$a$ ni element množice $A$«.

Množico zapišemo na dva načina:

- z naštevanjem: $A = \{1, 2, 3, 4, 5\}$,
- z lastnostjo: $A = \{x \mid x \text{ je naravno število in } x < 6\}$, kar beremo »množica vseh $x$, za katere velja …«.

Oba zapisa opisujeta isto množico. Vrstni red in ponavljanje elementov ne štejeta: $\{1, 2, 3\} = \{3, 2, 1\} = \{1, 1, 2, 3\}$.

**2. Posebne množice.**

- **Prazna množica** $\emptyset$ (tudi $\{\}$) nima nobenega elementa.
- **Moč množice** $|A|$ je število njenih elementov, na primer $|\{a, b, c\}| = 3$ in $|\emptyset| = 0$. Množica je *končna*, če ima končno mnogo elementov, sicer je *neskončna* (na primer množica vseh sodih števil).
- **Univerzalna množica** $\mathcal{U}$ vsebuje vse elemente, ki jih v dani nalogi sploh obravnavamo. Določena mora biti, preden računamo komplement.

**3. Podmnožica.** Množica $A$ je **podmnožica** množice $B$, zapisano $A \subseteq B$, če je vsak element množice $A$ tudi element množice $B$. Če je $A \subseteq B$ in $A \neq B$, je $A$ **prava podmnožica** in pišemo $A \subset B$. Dve množici sta enaki, če imata iste elemente: $A = B$ natanko tedaj, ko velja $A \subseteq B$ in $B \subseteq A$.

Vsaka množica je podmnožica same sebe ($A \subseteq A$), prazna množica pa je podmnožica vsake množice ($\emptyset \subseteq A$). Pazi na razliko: znak $\in$ povezuje *element* z množico, znak $\subseteq$ pa *množico* z množico. Zato je $2 \in \{1, 2, 3\}$, toda $\{2\} \subseteq \{1, 2, 3\}$.

Množica z $n$ elementi ima natanko $2^n$ podmnožic. Množica $\{a, b\}$ ima podmnožice $\emptyset$, $\{a\}$, $\{b\}$ in $\{a, b\}$, torej $2^2 = 4$.

**4. Vennov diagram.** Univerzalno množico narišemo kot pravokotnik, vsako množico pa kot krog ali elipso v njem. Elementi so pike znotraj likov. Dva kroga, ki se delno prekrivata, razdelita pravokotnik na štiri območja: le v $A$, v obeh, le v $B$ in v nobeni od njiju.

**5. Operacije z množicami.**

| Operacija | Zapis | Kateri elementi? |
|---|---|---|
| **Unija** | $A \cup B$ | tisti, ki so v $A$ ali v $B$ (ali v obeh) |
| **Presek** | $A \cap B$ | tisti, ki so v $A$ in hkrati v $B$ |
| **Razlika** | $A \setminus B$ | tisti, ki so v $A$, niso pa v $B$ |
| **Komplement** | $A^c$ | tisti iz $\mathcal{U}$, ki niso v $A$ |

Komplement pišemo tudi $\overline{A}$ ali $A'$. Besedica »ali« je v matematiki vključujoča in pomeni »vsaj eno od obeh«. Če je $A \cap B = \emptyset$, pravimo, da sta množici **disjunktni** (tuji): nimata skupnih elementov.

**6. Pravila.**

- Unija in presek sta zamenljiva: $A \cup B = B \cup A$ in $A \cap B = B \cap A$. Razlika pa ne: običajno je $A \setminus B \neq B \setminus A$.
- Razliko lahko zapišemo s komplementom: $A \setminus B = A \cap B^c$.
- Komplement komplementa je prvotna množica: $(A^c)^c = A$.
- Distributivnost: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ in $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$.
- De Morganovi pravili: $(A \cup B)^c = A^c \cap B^c$ in $(A \cap B)^c = A^c \cup B^c$. Komplement unije je presek komplementov, komplement preseka pa unija komplementov.

**7. Štetje elementov.** Za končni množici velja

$$|A \cup B| = |A| + |B| - |A \cap B|.$$

Elemente preseka bi pri vsoti $|A| + |B|$ prešteli dvakrat, zato jih enkrat odštejemo. Če sta množici disjunktni, je $|A \cap B| = 0$ in se moči kar seštejeta. Pri treh množicah je najbolj zanesljivo, da Vennov diagram izpolnjuješ **od sredine navzven**: najprej območje, ki je v vseh treh množicah, nato območja, ki so v natanko dveh, in nazadnje območja, ki so v natanko eni.

## Rešeni primeri

### Primer 1 (lažji)

Dani sta množici $A = \{1, 2, 3, 4, 5, 6\}$ in $B = \{2, 4, 6, 8, 10\}$. Določi $A \cup B$, $A \cap B$, $A \setminus B$ in $B \setminus A$.

**Podatki:** $A = \{1, 2, 3, 4, 5, 6\}$, $B = \{2, 4, 6, 8, 10\}$
**Iščemo:** $A \cup B$, $A \cap B$, $A \setminus B$, $B \setminus A$

:::formula
- $A \cup B$: elementi, ki so v $A$ ali v $B$
- $A \cap B$: elementi, ki so v $A$ in v $B$
- $A \setminus B$: elementi, ki so v $A$, ne pa v $B$
- preverjanje: $|A \cup B| = |A| + |B| - |A \cap B|$
:::

**Rešitev:**

1. Unija: zberemo vse elemente iz obeh množic, vsakega le enkrat: $A \cup B = \{1, 2, 3, 4, 5, 6, 8, 10\}$.
2. Presek: poiščemo elemente, ki jih najdemo v obeh množicah. To so $2$, $4$ in $6$, torej $A \cap B = \{2, 4, 6\}$.
3. Razlika $A \setminus B$: iz $A$ odstranimo elemente, ki so tudi v $B$ (to so $2$, $4$, $6$). Ostane $A \setminus B = \{1, 3, 5\}$.
4. Razlika $B \setminus A$: iz $B$ odstranimo $2$, $4$, $6$. Ostane $B \setminus A = \{8, 10\}$.
5. Preverimo s formulo za moč unije: $|A| = 6$, $|B| = 5$, $|A \cap B| = 3$, zato je $|A \cup B| = 6 + 5 - 3 = 8$. V uniji smo res našteli $8$ elementov.
6. Odgovor: $A \cup B = \{1, 2, 3, 4, 5, 6, 8, 10\}$, $A \cap B = \{2, 4, 6\}$, $A \setminus B = \{1, 3, 5\}$, $B \setminus A = \{8, 10\}$.

### Primer 2 (srednji)

Univerzalna množica je $\mathcal{U} = \{1, 2, 3, \dots, 12\}$. Množica $A$ vsebuje vsa soda števila iz $\mathcal{U}$, množica $B$ pa vse večkratnike števila $3$ iz $\mathcal{U}$. Določi $A \cap B$, $A \cup B$, $(A \cup B)^c$ in $A^c \cap B^c$ ter primerjaj zadnji dve množici.

**Podatki:** $\mathcal{U} = \{1, 2, 3, \dots, 12\}$, $A$ = soda števila iz $\mathcal{U}$, $B$ = večkratniki števila $3$ iz $\mathcal{U}$
**Iščemo:** $A \cap B$, $A \cup B$, $(A \cup B)^c$, $A^c \cap B^c$ in primerjavo zadnjih dveh

:::formula
Komplement: $X^c = \{x \in \mathcal{U} \mid x \notin X\}$. Presek in unija kot običajno.
:::

**Rešitev:**

1. Množici naštejemo: $A = \{2, 4, 6, 8, 10, 12\}$ in $B = \{3, 6, 9, 12\}$.
2. Presek: v obeh sta $6$ in $12$, torej $A \cap B = \{6, 12\}$. To so števila, ki so deljiva z $2$ in s $3$, torej s $6$.
3. Unija: $A \cup B = \{2, 3, 4, 6, 8, 9, 10, 12\}$. Števili $6$ in $12$ zapišemo le enkrat.
4. Komplement unije: iz $\mathcal{U}$ izločimo vse elemente unije, ostanejo $(A \cup B)^c = \{1, 5, 7, 11\}$.
5. Komplementa posebej: $A^c = \{1, 3, 5, 7, 9, 11\}$ in $B^c = \{1, 2, 4, 5, 7, 8, 10, 11\}$. V obeh sta $1$, $5$, $7$ in $11$, torej $A^c \cap B^c = \{1, 5, 7, 11\}$.
6. Primerjava: množici $(A \cup B)^c$ in $A^c \cap B^c$ sta enaki. To je prvo De Morganovo pravilo.
7. Preverimo še s štetjem: $|A \cup B| = 6 + 4 - 2 = 8$, zato je $|(A \cup B)^c| = 12 - 8 = 4$. Res imamo štiri elemente.
8. Odgovor: $A \cap B = \{6, 12\}$, $A \cup B = \{2, 3, 4, 6, 8, 9, 10, 12\}$ in $(A \cup B)^c = A^c \cap B^c = \{1, 5, 7, 11\}$.

### Primer 3 (težji)

V skupini dijakov vsak govori vsaj en tuji jezik: angleščino (množica $A$), nemščino (množica $N$) ali italijanščino (množica $I$). Angleško govori $22$ dijakov, nemško $18$ in italijansko $15$. Angleško in nemško govori $9$ dijakov, angleško in italijansko $7$, nemško in italijansko $6$ (v teh številkah so všteti tudi tisti, ki govorijo še tretji jezik). Vse tri jezike govorijo $3$ dijaki. Koliko dijakov je v skupini in koliko jih govori natanko en tuji jezik?

**Podatki:** $|A| = 22$, $|N| = 18$, $|I| = 15$, $|A \cap N| = 9$, $|A \cap I| = 7$, $|N \cap I| = 6$, $|A \cap N \cap I| = 3$, vsak dijak govori vsaj en jezik
**Iščemo:** število dijakov $|A \cup N \cup I|$ in število dijakov, ki govorijo natanko en jezik

:::formula
$|A \cup N \cup I| = |A| + |N| + |I| - |A \cap N| - |A \cap I| - |N \cap I| + |A \cap N \cap I|$. Zanesljiveje: Vennov diagram izpolnjujemo od sredine navzven.
:::

**Rešitev:**

1. Sredina: vse tri jezike govorijo $3$ dijaki.
2. Natanko dva jezika: angleščina in nemščina brez italijanščine $9 - 3 = 6$, angleščina in italijanščina brez nemščine $7 - 3 = 4$, nemščina in italijanščina brez angleščine $6 - 3 = 3$.
3. Natanko en jezik: samo angleščina $22 - (6 + 4 + 3) = 22 - 13 = 9$, samo nemščina $18 - (6 + 3 + 3) = 18 - 12 = 6$, samo italijanščina $15 - (4 + 3 + 3) = 15 - 10 = 5$.
4. Skupaj: $9 + 6 + 5 + 6 + 4 + 3 + 3 = 36$ dijakov.
5. Preverimo s formulo: $22 + 18 + 15 - 9 - 7 - 6 + 3 = 55 - 22 + 3 = 36$.
6. Natanko en jezik govori $9 + 6 + 5 = 20$ dijakov.
7. Odgovor: v skupini je $36$ dijakov, natanko en tuji jezik jih govori $20$.

## Pogoste napake

- **Zamenjava znakov $\in$ in $\subseteq$.** Zapišeš $\{2\} \in A$ ali $2 \subseteq A$. Razlog: $\in$ pove, da je nekaj *element* množice, $\subseteq$ pa, da je nekaj *množica znotraj* druge množice. Pravilno: za $A = \{1, 2, 3\}$ zapišemo $2 \in A$ in $\{2\} \subseteq A$. Pred zapisom se vprašaj, ali je levo od znaka element ali množica.
- **Dvojno štetje preseka.** Za moč unije vzameš $|A| + |B|$. Razlog: elementi preseka so v obeh množicah in jih tako prešteješ dvakrat. Pravilno: $|A \cup B| = |A| + |B| - |A \cap B|$. Pri $|A| = 20$, $|B| = 15$ in $|A \cap B| = 6$ je v uniji $29$ elementov, ne $35$.
- **Razlika naj bi bila zamenljiva.** Zapišeš $A \setminus B = B \setminus A$. Razlog: razlika odvzema elemente *prvi* množici, zato vrstni red šteje. Pravilno: za $A = \{1, 2, 3\}$ in $B = \{3, 4\}$ je $A \setminus B = \{1, 2\}$, $B \setminus A = \{4\}$.
- **Komplement brez univerzalne množice.** Računaš $A^c$, ne da bi vedel, v kateri množici $\mathcal{U}$ delaš. Razlog: komplement so elementi iz $\mathcal{U}$, ki niso v $A$, zato je odvisen od $\mathcal{U}$. Pravilno: najprej preberi ali določi $\mathcal{U}$, nato iz nje izloči elemente $A$. Za $A = \{2, 4\}$ je v $\mathcal{U} = \{1, 2, 3, 4\}$ komplement $\{1, 3\}$, v $\mathcal{U} = \{1, \dots, 6\}$ pa $\{1, 3, 5, 6\}$.
- **Prazna množica ni »nič«.** Zapišeš $\emptyset = \{0\}$ ali $|\emptyset| = 1$. Razlog: množica $\{0\}$ ima en element (število nič), prazna množica pa nobenega. Pravilno: $|\emptyset| = 0$, $|\{0\}| = 1$ in tudi $|\{\emptyset\}| = 1$.

## Povzetek

- Množico določajo njeni elementi; zapišemo jo z naštevanjem $\{\dots\}$ ali z lastnostjo $\{x \mid \dots\}$. Velja $a \in A$ ali $a \notin A$.
- $A \subseteq B$ pomeni, da je vsak element množice $A$ tudi v $B$. Vedno velja $A \subseteq A$ in $\emptyset \subseteq A$; množica z $n$ elementi ima $2^n$ podmnožic.
- Operacije: $A \cup B$ (v $A$ ali v $B$), $A \cap B$ (v $A$ in v $B$), $A \setminus B$ (v $A$, ne v $B$), $A^c$ (v $\mathcal{U}$, ne v $A$).
- Množici sta disjunktni, če je $A \cap B = \emptyset$. Razlika ni zamenljiva, unija in presek sta.
- De Morgan: $(A \cup B)^c = A^c \cap B^c$ in $(A \cap B)^c = A^c \cup B^c$.
- Moč unije: $|A \cup B| = |A| + |B| - |A \cap B|$.
- Pri treh množicah izpolnjuješ Vennov diagram od sredine navzven.

## Drugače: Na sliki

Predstavljaj si pravokotnik, ki pomeni $\mathcal{U}$, in v njem dva kroga, ki se delno prekrivata. Krog levo je množica $A$, krog desno množica $B$. Pravokotnik se razdeli na štiri območja:

| Območje na sliki | Kateri elementi so tam | Zapis |
|---|---|---|
| levi krog brez prekrivanja | v $A$, ne v $B$ | $A \setminus B$ |
| prekrivanje (leča v sredini) | v obeh | $A \cap B$ |
| desni krog brez prekrivanja | v $B$, ne v $A$ | $B \setminus A$ |
| pravokotnik zunaj obeh krogov | v nobeni | $(A \cup B)^c$ |

Vsaka operacija je pobarvanje nekaj teh območij. Unija pobarva oba kroga v celoti, to je tri območja. Presek pobarva samo lečo. Razlika $A \setminus B$ pobarva levi krog brez leče. Komplement $A^c$ pobarva vse, kar je zunaj levega kroga: desni krog brez leče in zunanje območje.

Zdaj lahko De Morganovo pravilo preprosto *vidiš*. Množica $(A \cup B)^c$ je zunanje območje. Množica $A^c \cap B^c$ je tisto, kar je hkrati zunaj levega in zunaj desnega kroga, torej spet zunanje območje. Če je $A \subseteq B$, leži krog $A$ cel znotraj kroga $B$. Disjunktni množici sta kroga, ki se ne prekrivata. Pri treh krogih nastane sedem območij znotraj krogov in osmo zunaj njih.

## Drugače: Iz vsakdanjega življenja

Pomisli na iskanje po spletu ali na filtre v spletni trgovini. Vsak filter določa množico izdelkov, vezniki pa so operacije z množicami:

- »kolo **in** rabljeno« je presek množic: izdelki, ki so kolesa in so rabljeni,
- »kolo **ali** skiro« je unija: izdelki, ki so kolesa ali skiroji,
- »kolo **ne** električno« je razlika: kolesa, od katerih odvzameš električna.

Vsak filter, ki ga dodaš, ponavadi zmanjša število zadetkov, saj iščeš presek vedno več množic.

Še en primer je jedilnik. Na njem je $12$ jedi, od tega $5$ vegetarijanskih (množica $V$). Dve od teh vsebujeta oreščke (množica $O$). Ana je vegetarijanka in je alergična na oreščke. Ustrezajo ji jedi iz množice $V \setminus O$, torej vegetarijanske jedi brez oreščkov. Njihovo število je $|V| - |V \cap O| = 5 - 2 = 3$. Takšno razmišljanje uporabljajo tudi baze podatkov, ki iščejo po več pogojih hkrati.

## Drugače: Korak za korakom s številkami

Naloga: V razredu je $30$ dijakov. Nogomet trenira $18$ dijakov, košarko $14$, oba športa pa $7$. Koliko dijakov ne trenira nobenega od teh dveh športov?

Naloga ima presek, zato Vennov diagram izpolnimo od sredine navzven:

| Korak | Kaj izračunamo | Račun | Rezultat |
|---|---|---|---|
| 1 | trenirajo oba (presek) | podano | $7$ |
| 2 | samo nogomet | $18 - 7$ | $11$ |
| 3 | samo košarka | $14 - 7$ | $7$ |
| 4 | vsaj en šport (unija) | $11 + 7 + 7$ | $25$ |
| 5 | nobenega športa | $30 - 25$ | $5$ |

Preverimo s formulo za moč unije: $18 + 14 - 7 = 25$, kar se ujema s četrtim korakom. Seštevek vseh štirih območij je $11 + 7 + 7 + 5 = 30$, kar je vsa skupina. Če bi pri četrtem koraku računal kar $18 + 14 = 32$, bi dobil več dijakov, kot jih je v razredu. To je znak, da si elemente preseka štel dvakrat.

## Drugače: Bolj natančno

Operacije se natančno definirajo z logičnimi vezniki, kjer $\lor$ pomeni »ali«, $\land$ pa »in«:

$$A \cup B = \{x \mid x \in A \lor x \in B\}, \qquad A \cap B = \{x \mid x \in A \land x \in B\},$$

$$A \setminus B = \{x \mid x \in A \land x \notin B\}, \qquad A^c = \{x \in \mathcal{U} \mid x \notin A\}.$$

Prvo De Morganovo pravilo dokažemo z verigo ekvivalenc: $x \in (A \cup B)^c$ natanko tedaj, ko $x \notin A \cup B$, to je natanko tedaj, ko $x \notin A$ in $x \notin B$, in to je natanko tedaj, ko $x \in A^c \cap B^c$. Množici imata torej iste elemente, zato sta enaki.

Formulo za moč unije utemeljimo tako: množica $A \cup B$ razpade na tri disjunktne dele $A \setminus B$, $A \cap B$ in $B \setminus A$. Velja $|A| = |A \setminus B| + |A \cap B|$ in $|B| = |B \setminus A| + |A \cap B|$. Vsota $|A| + |B|$ šteje presek dvakrat, moč unije pa enkrat, zato je razlika natanko $|A \cap B|$.

Število podmnožic: pri vsakem od $n$ elementov se odločimo, ali ga vzamemo v podmnožico ali ne. Odločitve so neodvisne, zato je možnosti $2 \cdot 2 \cdots 2 = 2^n$. Prazna množica je primer, ko nismo vzeli nobenega elementa, cela množica pa primer, ko smo vzeli vse.

## Preveri se

? Naj bo $A = \{1, 2, 3\}$. Katera trditev je pravilna?
- $2 \subseteq A$
- $\{2\} \in A$
+ $\{2\} \subseteq A$
- $4 \in A$
> Znak $\subseteq$ povezuje množico z množico, zato je $\{2\} \subseteq A$ pravilno. Število $2$ je element in ga pišemo z $\in$ ($2 \in A$). Množica $\{2\}$ ni element množice $A$, število $4$ pa v $A$ ni.

? Naj bo $A = \{1, 2, 3, 4, 5, 6\}$ in $B = \{4, 5, 6, 7, 8\}$. Kaj je $B \setminus A$?
- $\{1, 2, 3\}$
- $\{4, 5, 6\}$
+ $\{7, 8\}$
- $\{1, 2, 3, 7, 8\}$
> Iz $B$ odstranimo elemente, ki so tudi v $A$ ($4$, $5$, $6$), ostaneta $7$ in $8$. Množica $\{1, 2, 3\}$ je $A \setminus B$, množica $\{4, 5, 6\}$ je presek.

? Za množici velja $|A| = 20$, $|B| = 15$ in $|A \cap B| = 6$. Koliko elementov ima $A \cup B$?
- $35$
- $41$
+ $29$
- $14$
> $|A \cup B| = |A| + |B| - |A \cap B| = 20 + 15 - 6 = 29$. Rezultat $35$ dobiš, če pozabiš odšteti presek, $41$, če ga prišteješ, $14$ pa je število elementov razlike $A \setminus B$.

? Kateri izraz je enak $(A \cup B)^c$?
- $A^c \cup B^c$
+ $A^c \cap B^c$
- $A \cap B$
- $A \setminus B$
> Element zunaj unije ni v $A$ in ni v $B$, torej je v $A^c$ in v $B^c$. To je prvo De Morganovo pravilo. Izraz $A^c \cup B^c$ je enak $(A \cap B)^c$.
