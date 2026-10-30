---
stanje: osnutek
demo: statistika
avtor: AI
---

## Zakaj se tega učimo

Iz osnovne šole že poznaš aritmetično sredino, ki ji pravimo tudi povprečje, in veš, da podatke lahko prikažemo v tabeli ali s stolpci. V srednji šoli pa dobiš na voljo orodja, s katerimi o podatkih zares **odločaš**.

Predstavljaj si, da dva razreda pri isti kontrolni nalogi dosežeta enako povprečje. Ali sta razreda enako uspešna? Ni nujno. V prvem so lahko vsi približno povprečni, v drugem pa je polovica odličnih in polovica na robu padca. Povprečje samo tega ne pove. Povedo pa ti to **mere razpršenosti**. Statistiko srečaš povsod: pri vremenski napovedi, v športnih rezultatih, v anketah in pri branju novic. Če jo razumeš, ne nasedaš preprosto izbranim številkam.

Vse, kar potrebuješ iz prejšnjih tem, so osnovni računi, preoblikovanje izrazov in reševanje enačb. Nove ideje te lekcije so srednje vrednosti, mere razpršenosti in prikazi podatkov. Pri preverjanju razumevanja ti pomaga interaktivna simulacija spodaj (»Obdelava podatkov: sredine in razpršenost«).

## Razlaga

**1. Osnovni pojmi.** Statistična enota je en predmet opazovanja (učenec, meritev). Spremenljivka je lastnost, ki jo opazujemo (točke na testu). Vrednosti zapišemo kot $x_1, x_2, \ldots, x_n$, kjer je $n$ število podatkov. **Frekvenca** $f$ pove, kolikokrat se vrednost pojavi. **Relativna frekvenca** je delež $\dfrac{f}{n}$, običajno v odstotkih.

**2. Srednje vrednosti.** To so števila, ki predstavijo »sredino« podatkov.

- **Aritmetična sredina** je vsota podatkov, deljena z njihovim številom:
$$\bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}$$
Če so podatki v frekvenčni tabeli z vrednostmi $x_i$ in frekvencami $f_i$, računamo **tehtano sredino** $\bar{x} = \dfrac{\sum f_i x_i}{\sum f_i}$.
- **Mediana** $M$ je srednja vrednost urejenih podatkov. Podatke uredimo po velikosti. Pri lihem $n$ je mediana srednji podatek, pri sodem $n$ pa aritmetična sredina obeh srednjih.
- **Modus** je podatek z največjo frekvenco. Podatki imajo lahko dva modusa ali pa nobenega, če se vse vrednosti pojavijo enakokrat.

Aritmetična sredina je občutljiva na **osamelce**, to so podatki, ki zelo odstopajo. Mediana je odpornejša. Če je v razredu devet dijakov z žepnino $10\,\text{€}$ in eden z $200\,\text{€}$, je povprečje $29\,\text{€}$, mediana pa $10\,\text{€}$.

**3. Mere razpršenosti.** Pokažejo, kako se podatki raztezajo okoli sredine.

- **Razmah** (variacijski razmik) je $R = x_{\max} - x_{\min}$. Je preprost, a odvisen le od dveh skrajnih podatkov.
- **Kvartili.** Urejene podatke razdelimo na štiri približno enake dele. Drugi kvartil $Q_2$ je mediana. Prvi kvartil $Q_1$ je mediana spodnje polovice, tretji kvartil $Q_3$ pa mediana zgornje polovice. Pri lihem $n$ srednji podatek v nobeno polovico ne všteješ. **Medkvartilni razmik** je $Q_3 - Q_1$ in zajame sredinsko polovico podatkov.
- **Varianca** je povprečje kvadratov odklonov od sredine:
$$\sigma^2 = \frac{(x_1-\bar{x})^2 + \cdots + (x_n-\bar{x})^2}{n}$$
- **Standardni odklon** je njen koren: $\sigma = \sqrt{\sigma^2}$. Ima enako enoto kot podatki, zato ga lahko neposredno primerjamo s sredino. Manjši kot je, bolj so podatki zbrani okoli sredine.

Odklone kvadriramo, ker je njihova vsota vedno $0$ (pozitivni in negativni se uničijo). Kvadrati pa so vsi nenegativni.

**4. Osamelci.** Podatek je običajno osamelec, če leži pod $Q_1 - 1{,}5\,(Q_3 - Q_1)$ ali nad $Q_3 + 1{,}5\,(Q_3 - Q_1)$.

**5. Prikazi podatkov.**

| Prikaz | Kdaj ga uporabimo |
|---|---|
| Frekvenčna tabela | urejen pregled vrednosti, frekvenc in deležev |
| Stolpčni diagram | kategorije ali posamezne vrednosti; stolpci so ločeni |
| Krožni diagram | deleži celote; središčni kot kroga je $\dfrac{f}{n}\cdot 360^\circ$ |
| Histogram | števila, razvrščena v razrede iste širine; stolpci se dotikajo |
| Škatla z brki | pet števil: najmanjši podatek, $Q_1$, $M$, $Q_3$, največji podatek |

Pri razvrščenih podatkih računamo z **razrednimi sredinami**. Rezultat je le približek, saj ne vemo, kje v razredu ležijo posamezni podatki.

## Rešeni primeri

### Primer 1 (lažji)

Osem dijakov je na kontrolni nalogi doseglo točke: $6, 9, 7, 10, 8, 9, 5, 12$. Določi aritmetično sredino, mediano, modus in razmah.

**Podatki:** $n = 8$, točke: $6, 9, 7, 10, 8, 9, 5, 12$
**Iščemo:** $\bar{x}$, $M$, modus in $R$

:::formula
$\bar{x} = \dfrac{x_1 + \cdots + x_n}{n}$, $\;M$ = sredina urejenih podatkov, $\;R = x_{\max} - x_{\min}$
:::

**Rešitev:**

1. Vsota: $6 + 9 + 7 + 10 + 8 + 9 + 5 + 12 = 66$. Torej $\bar{x} = \dfrac{66}{8} = 8{,}25$.
2. Urejeni podatki: $5, 6, 7, 8, 9, 9, 10, 12$. Ker je $n = 8$ sod, je mediana sredina četrtega in petega podatka: $M = \dfrac{8 + 9}{2} = 8{,}5$.
3. Modus je $9$, ker se pojavi dvakrat, vse ostale vrednosti pa le enkrat.
4. Razmah: $R = 12 - 5 = 7$.
5. Odgovor: aritmetična sredina je $8{,}25$ točke, mediana $8{,}5$ točke, modus $9$ točk in razmah $7$ točk.

### Primer 2 (srednji)

Enajst dijakov je zapisalo čas poti v šolo v minutah: $12, 15, 14, 18, 16, 13, 17, 15, 14, 16, 45$. Določi kvartile in medkvartilni razmik ter preveri, ali je kakšen podatek osamelec. Primerjaj aritmetično sredino z mediano.

**Podatki:** $n = 11$, časi v minutah: $12, 15, 14, 18, 16, 13, 17, 15, 14, 16, 45$
**Iščemo:** $Q_1$, $Q_2$, $Q_3$, medkvartilni razmik, osamelce, $\bar{x}$ in $M$

:::formula
$Q_1$ in $Q_3$ sta mediani spodnje in zgornje polovice; osamelec leži pod $Q_1 - 1{,}5\,(Q_3 - Q_1)$ ali nad $Q_3 + 1{,}5\,(Q_3 - Q_1)$
:::

**Rešitev:**

1. Urejeni podatki: $12, 13, 14, 14, 15, 15, 16, 16, 17, 18, 45$.
2. Mediana je šesti podatek: $Q_2 = M = 15\,\text{min}$.
3. Spodnja polovica (brez šestega podatka): $12, 13, 14, 14, 15$, zato je $Q_1 = 14\,\text{min}$. Zgornja polovica: $16, 16, 17, 18, 45$, zato je $Q_3 = 17\,\text{min}$.
4. Medkvartilni razmik: $17 - 14 = 3\,\text{min}$.
5. Meji: spodnja $14 - 1{,}5 \cdot 3 = 9{,}5$, zgornja $17 + 1{,}5 \cdot 3 = 21{,}5$. Podatek $45$ je nad zgornjo mejo, torej je osamelec. Vsi ostali podatki so znotraj mej.
6. Vsota je $195$, zato je $\bar{x} = \dfrac{195}{11} \approx 17{,}7\,\text{min}$. Brez osamelca bi bila sredina $\dfrac{150}{10} = 15\,\text{min}$, mediana pa bi ostala $15\,\text{min}$.
7. Odgovor: $Q_1 = 14\,\text{min}$, $Q_2 = 15\,\text{min}$, $Q_3 = 17\,\text{min}$, medkvartilni razmik je $3\,\text{min}$, osamelec je $45\,\text{min}$. Osamelec povprečje potegne navzgor ($17{,}7\,\text{min}$), mediana ($15\,\text{min}$) pa bolje opisuje običajnega dijaka.

### Primer 3 (težji)

V razredu z $20$ učenci so šteli brate in sestre. Število bratov in sester $0, 1, 2, 3, 4$ ima po vrsti frekvence $4, 8, 5, 2, 1$. Določi aritmetično sredino, mediano, modus, varianco in standardni odklon.

**Podatki:** $n = 20$; vrednosti $x$: $0, 1, 2, 3, 4$; frekvence $f$: $4, 8, 5, 2, 1$
**Iščemo:** $\bar{x}$, $M$, modus, $\sigma^2$ in $\sigma$

:::formula
$\bar{x} = \dfrac{\sum f_i x_i}{n}$, $\;\sigma^2 = \dfrac{\sum f_i (x_i - \bar{x})^2}{n}$, $\;\sigma = \sqrt{\sigma^2}$
:::

**Rešitev:**

1. Preveri število podatkov: $4 + 8 + 5 + 2 + 1 = 20$.
2. Vsota vrednosti: $\sum f_i x_i = 0 + 8 + 10 + 6 + 4 = 28$, zato je $\bar{x} = \dfrac{28}{20} = 1{,}4$.
3. Frekvence seštevamo po vrsti: do vrednosti $0$ je $4$ podatkov, do vrednosti $1$ pa $12$. Deseti in enajsti podatek sta zato oba $1$, torej je $M = 1$. Modus je $1$ (največja frekvenca $8$).
4. Kvadrati odklonov, pomnoženi s frekvenco: $4 \cdot 1{,}96 = 7{,}84$; $8 \cdot 0{,}16 = 1{,}28$; $5 \cdot 0{,}36 = 1{,}8$; $2 \cdot 2{,}56 = 5{,}12$; $1 \cdot 6{,}76 = 6{,}76$. Vsota je $22{,}8$.
5. Varianca: $\sigma^2 = \dfrac{22{,}8}{20} = 1{,}14$. Standardni odklon: $\sigma = \sqrt{1{,}14} \approx 1{,}07$.
6. Odgovor: $\bar{x} = 1{,}4$, $M = 1$, modus $1$, $\sigma^2 = 1{,}14$ in $\sigma \approx 1{,}07$. Učenec ima v povprečju $1{,}4$ brata ali sestre, običajni odklon od tega pa je okoli $1$.

## Pogoste napake

- **Mediana neurejenih podatkov.** Če vzameš srednji podatek v prvotnem vrstnem redu, dobiš napačno število. Mediana je definirana za *urejene* podatke. Najprej uredi, nato poišči sredino.
- **Napačen imenovalec pri frekvenčni tabeli.** Pri frekvenčni tabeli učenci pogosto delijo s številom različnih vrednosti (v primeru zgoraj s $5$), ne s številom podatkov ($20$). Pravilno: $\bar{x} = \dfrac{\sum f_i x_i}{\sum f_i}$.
- **Standardni odklon brez korena.** Varianca ima enoto na kvadrat (npr. $\text{min}^2$), zato je ni smiselno primerjati s podatki. Vedno dokončaj z $\sigma = \sqrt{\sigma^2}$.
- **Vsota odklonov namesto vsote kvadratov.** $\sum (x_i - \bar{x}) = 0$ za vsak nabor podatkov. Odklone moraš najprej kvadrirati in šele nato sešteti.
- **Povprečje kot edina številka.** Povprečje brez razpršenosti je lahko zavajajoče. Ob njem vedno pogledaj mediano in standardni odklon ali medkvartilni razmik.

## Povzetek

- Aritmetična sredina: $\bar{x} = \dfrac{\sum x_i}{n}$; s frekvencami $\bar{x} = \dfrac{\sum f_i x_i}{\sum f_i}$.
- Mediana je sredina urejenih podatkov; modus je najpogostejši podatek.
- Razmah $R = x_{\max} - x_{\min}$; medkvartilni razmik $Q_3 - Q_1$.
- Varianca $\sigma^2 = \dfrac{\sum (x_i - \bar{x})^2}{n}$, standardni odklon $\sigma = \sqrt{\sigma^2}$.
- Osamelec: pod $Q_1 - 1{,}5\,(Q_3 - Q_1)$ ali nad $Q_3 + 1{,}5\,(Q_3 - Q_1)$.
- Osamelci vplivajo na povprečje, mediana in medkvartilni razmik sta odporna.
- Prikazi: stolpčni diagram, krožni diagram (kot $\dfrac{f}{n}\cdot 360^\circ$), histogram, škatla z brki.

## Drugače: Na sliki

Predstavljaj si urejene podatke iz Primera 2 na številski premici. Škatla z brki jih povzame s petimi številkami:

| Del slike | Vrednost | Kaj pomeni |
|---|---|---|
| levi brk se začne | $12$ | najmanjši podatek |
| leva stranica škatle | $14$ | $Q_1$ |
| črta v škatli | $15$ | mediana |
| desna stranica škatle | $17$ | $Q_3$ |
| desni brk se konča | $18$ | največji podatek znotraj mej |
| posamezna pika | $45$ | osamelec |

Širina škatle je medkvartilni razmik: v njej leži sredinska polovica podatkov. Če je črta mediane bližje levemu robu škatle, so podatki na levi strani bolj zgoščeni, na desni pa razvlečeni. Histogram pa je kot »ogrodje iz stolpcev«: višji stolpec pomeni več podatkov v tistem razredu. Krožni diagram prikazuje le deleže celote, zato ne pokaže, kako veliki so podatki.

## Drugače: Iz vsakdanjega življenja

Dva strelca streljata na tarčo. Pet strelov prvega prinese $48, 50, 50, 50, 52$ točk, pet strelov drugega pa $30, 40, 50, 60, 70$. Oba imata povprečje $50$ točk. Trener bo kljub temu prvega označil za zanesljivega, drugega pa za nepredvidljivega. Standardni odklon to pove s številom: prvi strelec ima $\sigma \approx 1{,}3$ točke, drugi pa $\sigma \approx 14{,}1$ točke.

Podobno je s plačami. Če v podjetju devet delavcev zasluži po $1000\,\text{€}$, direktor pa $11\,000\,\text{€}$, je povprečna plača $2000\,\text{€}$. Takšno povprečje nobenemu delavcu ne ustreza. Mediana plače, $1000\,\text{€}$, pove, kaj je običajno. Zato poročila o plačah in cenah stanovanj pogosto navajajo mediano. Prav tako vedno vprašaj, kolikšna je razpršenost, ne le sredina: avtobus, ki v povprečju pride ob 8.00, a včasih ob 7.40 in včasih ob 8.20, je za jutranjo uro precej slabši od tistega, ki je vedno natančen.

## Drugače: Korak za korakom s številkami

Izračunajmo standardni odklon za podatke $3, 5, 6, 8, 8$. Pomagaj si s tabelo.

1. Aritmetična sredina: $\bar{x} = \dfrac{3 + 5 + 6 + 8 + 8}{5} = \dfrac{30}{5} = 6$.
2. Za vsak podatek izračunaj odklon in njegov kvadrat:

| $x_i$ | $x_i - \bar{x}$ | $(x_i - \bar{x})^2$ |
|---|---|---|
| $3$ | $-3$ | $9$ |
| $5$ | $-1$ | $1$ |
| $6$ | $0$ | $0$ |
| $8$ | $2$ | $4$ |
| $8$ | $2$ | $4$ |

3. Preveri: vsota odklonov je $-3 - 1 + 0 + 2 + 2 = 0$, kot mora biti. Vsota kvadratov je $18$.
4. Varianca: $\sigma^2 = \dfrac{18}{5} = 3{,}6$.
5. Standardni odklon: $\sigma = \sqrt{3{,}6} \approx 1{,}90$.
6. Smiselnost: večina podatkov leži v razponu $6 \pm 2$, torej od $4$ do $8$, kar se ujema z $\sigma \approx 1{,}9$.

## Drugače: Bolj natančno

**Zakaj vsota odklonov nikoli ne prinese informacije.** Ker je $\bar{x} = \dfrac{\sum x_i}{n}$, velja $\sum (x_i - \bar{x}) = \sum x_i - n\bar{x} = 0$. Zato odklone kvadriramo. Aritmetična sredina je prav tisto število $c$, pri katerem je vsota $\sum (x_i - c)^2$ najmanjša.

**Drugi zapis variance.** Raztegnemo kvadrate in dobimo
$$\sigma^2 = \frac{\sum x_i^2}{n} - \bar{x}^2,$$
torej »povprečje kvadratov minus kvadrat povprečja«. Preizkus za podatke $2, 4, 4, 4, 5, 5, 7, 9$: povprečje je $5$, povprečje kvadratov $\dfrac{232}{8} = 29$, zato je $\sigma^2 = 29 - 25 = 4$ in $\sigma = 2$.

**Vzorec in populacija.** Zgornja formula, kjer delimo z $n$, velja, kadar imamo vse podatke populacije. Pri vzorcu, ki iz njega ocenjujemo širšo populacijo, delimo z $n - 1$ (to boš podrobneje spoznal pozneje). Različni računalniški programi tudi različno računajo kvartile, zato lahko dobiš nekoliko drugačne vrednosti kot tukaj.

**Linearna sprememba podatkov.** Če vsak podatek pomnožimo z $a$ in prištejemo $b$, se sredina spremeni v $a\bar{x} + b$, standardni odklon pa v $|a|\,\sigma$. Premik podatkov torej razpršenosti ne spremeni, raztegnitev pa jo raztegne.

## Preveri se

? Podatki: $4, 7, 7, 9, 13$. Kolikšna je mediana?
- $8$
+ $7$
- $9$
> Podatki so že urejeni, $n = 5$ je lih, zato je mediana srednji podatek, to je $7$. Vrednost $8$ je aritmetična sredina ($\frac{40}{5}$), ne mediana.

? Pri katerem naboru podatkov je standardni odklon enak $0$?
- $1, 2, 3$
- $-5, 0, 5$
+ $4, 4, 4, 4$
> Standardni odklon je $0$ le, če so vsi podatki enaki sredini, torej enaki med seboj.

? Frekvenčna tabela: vrednost $1$ ima frekvenco $3$, vrednost $2$ frekvenco $5$, vrednost $3$ frekvenco $2$. Kolikšna je aritmetična sredina?
- $2$
- $2{,}5$
+ $1{,}9$
> $n = 3 + 5 + 2 = 10$, $\sum f_i x_i = 3 + 10 + 6 = 19$, zato je $\bar{x} = \dfrac{19}{10} = 1{,}9$. Vrednost $2$ bi dobil, če bi seštel samo vrednosti $1, 2, 3$ in delil s $3$.

? Pri krožnem diagramu ima kategorija 15 % vseh podatkov. Kolikšen je središčni kot njenega izseka?
- $15^\circ$
- $90^\circ$
+ $54^\circ$
> Središčni kot je $0{,}15 \cdot 360^\circ = 54^\circ$.

:::simboli
\bar{x} | aritmetična sredina (povprečje) | \bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}
x_1, x_2, x_n | vrednosti podatkov | | |
x_i | i-ta vrednost podatka | | |
n | število podatkov | | |
\sigma | standardni odklon | \sigma = \sqrt{\sigma^2} | | σ² je varianca
M | mediana | | | srednja vrednost urejenih podatkov
R | razmah (variacijski razmik) | R = x_{\max} - x_{\min} | |
x_{\max} | največji podatek | | |
x_{\min} | najmanjši podatek | | |
Q_1 | prvi kvartil | | | mediana spodnje polovice podatkov
Q_3 | tretji kvartil | | | Q₃ − Q₁ je medkvartilni razmik
f_i | frekvenca vrednosti x_i | | |
:::
