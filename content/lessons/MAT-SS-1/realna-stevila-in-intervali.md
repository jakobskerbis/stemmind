---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

V prejšnji lekciji si spoznal, da so racionalna števila na številski premici gosta: med dvema vedno leži še tretje. Zdi se, da so zapolnila vso premico. Pa ni tako. Nariši kvadrat s stranico $1\,\text{cm}$. Po Pitagorovem izreku ima diagonala dolžino $d$, za katero velja $d^2 = 1^2 + 1^2 = 2$. Diagonala seveda ima neko dolžino, vendar ni ulomka, ki bi dal $2$, če ga pomnožimo samega s seboj. Premica ima torej »luknje«, ki jih zapolnijo šele **realna števila** $\mathbb{R}$.

Preostali dve ideji te lekcije sta enako praktični. Razdaljo med dvema točkama merimo ne glede na smer, zato potrebujemo **absolutno vrednost**. Inženir pa ne sprašuje »kolikšna je dolžina vijaka«, ampak »v katerem območju sme biti dolžina«. Takemu območju rečemo **interval**. Z intervali bomo zapisovali rešitve neenačb, definicijska območja funkcij in kasneje še marsikaj. Zato je prav, da jih obvladaš zdaj.

## Razlaga

**1. Iracionalna in realna števila.** Število, ki ni racionalno, imenujemo **iracionalno**. Primera sta $\sqrt{2} = 1{,}41421356\ldots$ in $\pi = 3{,}14159265\ldots$. Decimalni zapis racionalnega števila je končen ali periodičen. Decimalni zapis iracionalnega števila je neskončen in **neperiodičen**. Množico iracionalnih števil označimo z $\mathbb{I}$. Skupaj z racionalnimi tvorijo **realna števila**:

$$\mathbb{R} = \mathbb{Q} \cup \mathbb{I}, \qquad \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}.$$

Vsakemu realnemu številu pripada natanko ena točka na številski premici in vsaki točki natanko eno realno število. Realna števila torej »pokrijejo« vso premico. Za računanje in primerjanje veljajo ista pravila kot pri racionalnih številih.

Koren naravnega števila je celo število, če je število popoln kvadrat ($\sqrt{9} = 3$, $\sqrt{16} = 4$), sicer je iracionalen ($\sqrt{2}$, $\sqrt{3}$, $\sqrt{5}$). Korene boš podrobneje spoznal v 2. letniku. Iracionalnega števila ne moremo zapisati natančno z decimalkami, zato računamo s približki. Ocenimo $\sqrt{2}$: ker je $1{,}41^2 = 1{,}9881$ in $1{,}42^2 = 2{,}0164$, velja $1{,}41 < \sqrt{2} < 1{,}42$.

**2. Absolutna vrednost.** Absolutna vrednost števila $x$ je njegova razdalja od $0$ na številski premici:

$$|x| = \begin{cases} x, & x \ge 0 \\ -x, & x < 0 \end{cases}$$

Absolutna vrednost je torej vedno nenegativna. Primeri: $|5| = 5$, $|-5| = 5$, $|0| = 0$. Pri $|\sqrt{2} - 2|$ je izraz znotraj absolutne vrednosti negativen, ker je $\sqrt{2} < 2$, zato je $|\sqrt{2} - 2| = 2 - \sqrt{2}$.

**Razdalja** med točkama z abscisama $a$ in $b$ je $|a - b| = |b - a|$. Lastnosti:

- $|x| \ge 0$, in $|x| = 0$ natanko tedaj, ko je $x = 0$,
- $|-x| = |x|$,
- $|a \cdot b| = |a| \cdot |b|$ in $\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|}$ za $b \neq 0$,
- trikotniška neenakost: $|a + b| \le |a| + |b|$.

**Enačba z absolutno vrednostjo.** Enačba $|x| = a$ pomeni »točka $x$ je od $0$ oddaljena za $a$«:

- za $a > 0$ sta rešitvi $x = a$ in $x = -a$,
- za $a = 0$ je edina rešitev $x = 0$,
- za $a < 0$ rešitve ni, ker absolutna vrednost ni negativna.

Podobno je $|x - c| = r$ ($r > 0$) enačba točk, ki so od $c$ oddaljene za $r$: $x = c - r$ ali $x = c + r$.

**3. Intervali.** **Interval** je množica vseh realnih števil med dvema **krajiščema** $a$ in $b$ ($a \le b$). Krajišče je lahko vključeno ali izključeno. Interval je lahko tudi neomejen, če se razteza v neskončnost.

| Interval | Neenačba | Ime | Na številski premici |
|---|---|---|---|
| $(a, b)$ | $a < x < b$ | odprti | oba prazna krožca |
| $[a, b]$ | $a \le x \le b$ | zaprti | oba polna krožca |
| $[a, b)$ | $a \le x < b$ | polodprti | poln pri $a$, prazen pri $b$ |
| $(a, b]$ | $a < x \le b$ | polodprti | prazen pri $a$, poln pri $b$ |
| $(a, \infty)$ | $x > a$ | neomejeni | prazen krožec, puščica v desno |
| $[a, \infty)$ | $x \ge a$ | neomejeni | poln krožec, puščica v desno |
| $(-\infty, b)$ | $x < b$ | neomejeni | prazen krožec, puščica v levo |
| $(-\infty, b]$ | $x \le b$ | neomejeni | poln krožec, puščica v levo |
| $(-\infty, \infty)$ | vsak $x$ | cela premica | $\mathbb{R}$ |

Pravila za zapis:

- **Okrogel oklepaj** pomeni, da krajišče **ni** v množici (strogi znak $<$ ali $>$).
- **Oglat oklepaj** pomeni, da krajišče **je** v množici ($\le$ ali $\ge$).
- Znaka $\infty$ in $-\infty$ nista števili, zato ob njiju vedno pišemo okrogel oklepaj.
- Dolžina intervala je $b - a$, njegovo središče pa $\dfrac{a + b}{2}$.
- Kadar so v intervalu decimalna števila, krajišči ločimo s podpičjem: $[49{,}7\,;\,50{,}3]$.

**4. Operacije z intervali.** Intervali so množice, zato zanje veljajo operacije iz lekcije o množicah: **presek** $A \cap B$ (elementi, ki so v obeh), **unija** $A \cup B$ (elementi, ki so v vsaj eni) in **razlika** $A \setminus B$ (elementi iz $A$, ki niso v $B$). Za $A = [1, 5]$ in $B = (3, 8)$ je

$$A \cap B = (3, 5], \qquad A \cup B = [1, 8), \qquad A \setminus B = [1, 3].$$

Če se intervala ne dotikata, unija ostane iz dveh delov, npr. $(-\infty, -2) \cup (3, \infty)$. Pri takih nalogah vedno nariši oba intervala na isto številsko premico in posebej preveri krajišči.

**5. Absolutna vrednost in intervali.** Pogoj $|x - c| < r$ pomeni »$x$ je od $c$ oddaljen za manj kot $r$«. Zato leži $x$ na intervalu s središčem $c$ in polmerom $r$:

- $|x - c| < r \iff c - r < x < c + r \iff x \in (c - r,\, c + r)$,
- $|x - c| \le r \iff x \in [c - r,\, c + r]$,
- $|x - c| > r \iff x \in (-\infty,\, c - r) \cup (c + r,\, \infty)$,
- $|x - c| \ge r \iff x \in (-\infty,\, c - r] \cup [c + r,\, \infty)$.

Zapomni si: »manj kot« pomeni **med** (en kos), »več kot« pomeni **zunaj** (dva kosa). Primer: $|x - 2| < 3$ da $x \in (-1, 5)$.

## Rešeni primeri

### Primer 1 (lažji)

Izračunaj vrednost izraza $|{-3}| + |5 - 9| - |{-2}|$ in razdaljo med točkama $A(-4)$ in $B(3)$ na številski premici.

**Podatki:** izraz $|{-3}| + |5 - 9| - |{-2}|$, točki $A(-4)$ in $B(3)$ na številski premici
**Iščemo:** vrednost izraza in razdaljo $|AB|$

:::formula
$|x| = x$ za $x \ge 0$ in $|x| = -x$ za $x < 0$. Razdalja točk $A(a)$ in $B(b)$ je $|AB| = |b - a|$.
:::

**Rešitev:**

1. Število $-3$ je negativno, zato je $|{-3}| = 3$.
2. Najprej izračunamo vrednost znotraj absolutne vrednosti: $5 - 9 = -4$, torej $|5 - 9| = |{-4}| = 4$.
3. Podobno $|{-2}| = 2$.
4. Vrednost izraza: $3 + 4 - 2 = 5$.
5. Razdalja: $|AB| = |3 - (-4)| = |7| = 7$. Preverba v drugi smeri: $|{-4} - 3| = |{-7}| = 7$.
6. Odgovor: vrednost izraza je $5$, točki $A$ in $B$ sta oddaljeni za $7$ enot. Res: od $-4$ do $0$ so $4$ enote, od $0$ do $3$ pa še $3$ enote.

### Primer 2 (srednji)

Dana sta intervala $A = [-2, 4)$ in $B = (1, 6]$. Določi $A \cap B$, $A \cup B$ in $A \setminus B$ ter rezultate zapiši z intervali.

**Podatki:** $A = [-2, 4)$, $B = (1, 6]$
**Iščemo:** presek $A \cap B$, unijo $A \cup B$ in razliko $A \setminus B$

:::formula
$x \in A \cap B \iff x \in A \text{ in } x \in B$; $\;x \in A \cup B \iff x \in A \text{ ali } x \in B$; $\;x \in A \setminus B \iff x \in A \text{ in } x \notin B$
:::

**Rešitev:**

1. Z neenačbami: $A$ so števila z $-2 \le x < 4$, $B$ pa števila z $1 < x \le 6$.
2. **Presek:** hkrati morata veljati obe neenačbi. Večja leva meja je $1$ (izključena, ker $1 \notin B$), manjša desna meja je $4$ (izključena, ker $4 \notin A$). Torej $A \cap B = (1, 4)$.
3. **Unija:** najmanjši element je $-2$ (v $A$), največji je $6$ (v $B$). Intervala se prekrivata, zato vmes ni vrzeli. Torej $A \cup B = [-2, 6]$. Preverimo krajišči: $1 \in A$, $4 \in B$, zato ni luknje.
4. **Razlika:** iz $A$ odstranimo vse, kar je v $B$, to je števila z $x > 1$. Ostanejo števila z $-2 \le x \le 1$. Število $1$ ni v $B$, zato ostane: $A \setminus B = [-2, 1]$.
5. Preverba s števili: $x = 1$ je v $A$, ni v $B$, torej je v razliki. Število $x = 4$ je v $B$, ni v $A$, torej je v uniji, ne pa v preseku.
6. Odgovor: $A \cap B = (1, 4)$, $A \cup B = [-2, 6]$, $A \setminus B = [-2, 1]$.

### Primer 3 (težji)

Pri izdelavi vijakov mora biti dolžina vijaka $50\,\text{mm}$, dopustno odstopanje pa je največ $0{,}3\,\text{mm}$ navzgor ali navzdol. (a) Zapiši pogoj za dolžino $x$ vijaka z absolutno vrednostjo. (b) Zapiši množico dovoljenih dolžin kot interval. (c) Ali ustrezata vijaka z dolžinama $49{,}6\,\text{mm}$ in $50{,}25\,\text{mm}$?

**Podatki:** predpisana dolžina $50\,\text{mm}$, odstopanje največ $0{,}3\,\text{mm}$ v obe smeri, preizkušeni dolžini $49{,}6\,\text{mm}$ in $50{,}25\,\text{mm}$
**Iščemo:** pogoj z absolutno vrednostjo, interval dovoljenih dolžin $x$ in ustreznost obeh vijakov

:::formula
$|x - c| \le r \iff c - r \le x \le c + r \iff x \in [c - r,\, c + r]$
:::

**Rešitev:**

1. Odstopanje od predpisane dolžine je razdalja med $x$ in $50$, torej $|x - 50|$. Dopustno je največ $0{,}3$, zato je pogoj $|x - 50| \le 0{,}3$ (vse v milimetrih).
2. Uporabimo pravilo s $c = 50$ in $r = 0{,}3$: $50 - 0{,}3 \le x \le 50 + 0{,}3$, torej $49{,}7 \le x \le 50{,}3$.
3. Besedi »največ« ustreza znak $\le$, zato sta krajišči vključeni. Interval je $[49{,}7\,;\,50{,}3]$.
4. Vijak $49{,}6\,\text{mm}$: $|49{,}6 - 50| = |{-0{,}4}| = 0{,}4 > 0{,}3$. Ne ustreza. Isto pove interval, saj $49{,}6 < 49{,}7$.
5. Vijak $50{,}25\,\text{mm}$: $|50{,}25 - 50| = 0{,}25 \le 0{,}3$. Ustreza. Tudi v intervalu je, saj $49{,}7 \le 50{,}25 \le 50{,}3$.
6. Odgovor: pogoj je $|x - 50| \le 0{,}3$, dovoljene dolžine so $[49{,}7\,;\,50{,}3]\,\text{mm}$. Vijak z $49{,}6\,\text{mm}$ ne ustreza, vijak s $50{,}25\,\text{mm}$ ustreza.

## Pogoste napake

- **»Absolutna vrednost vsote je vsota absolutnih vrednosti«: $|a + b| = |a| + |b|$.** To velja le, če imata $a$ in $b$ isti predznak. Za $a = 3$, $b = -5$ je $|3 + (-5)| = |{-2}| = 2$, medtem ko je $|3| + |{-5}| = 8$. Pravilno: najprej izračunaj vsoto, nato ji vzemi absolutno vrednost. Splošno velja le $|a + b| \le |a| + |b|$.
- **Odstranjevanje minusa po občutku: $|2 - 5| = 2 + 5 = 7$.** Absolutna vrednost ne spreminja znakov znotraj izraza. Pravilno: $2 - 5 = -3$, ta vrednost je negativna, zato jo zamenjaš z nasprotno: $|{-3}| = 3$. Ker absolutna vrednost nikoli ni negativna, enačba $|x| = -3$ nima rešitve.
- **Pomešani smeri pri neenačbah: rešitev $|x| > 3$ zapišeš kot $(-3, 3)$.** Razdalja od $0$ večja od $3$ pomeni **zunaj** tega odseka. Pravilno: $|x| < 3$ je $(-3, 3)$, $|x| > 3$ pa je $(-\infty, -3) \cup (3, \infty)$. Test: število $0$ ima $|0| = 0 < 3$, torej spada k prvi, ne k drugi množici.
- **Napačni oklepaji: $[2, \infty]$ ali $(2, 5)$ za $2 \le x \le 5$.** Znak $\infty$ ni število, zato mu sledi okrogel oklepaj: $[2, \infty)$. Pri $\le$ in $\ge$ piši oglat oklepaj, pri $<$ in $>$ okrogel. Pravilno: $2 \le x \le 5$ je $[2, 5]$.
- **»Število $3{,}14$ je enako $\pi$« in »vsak koren je iracionalen«.** Število $3{,}14$ je le racionalen približek števila $\pi$, ki ima neskončen neperiodičen zapis. Koren je iracionalen samo, če število pod korenom ni popoln kvadrat: $\sqrt{9} = 3$ je racionalno, $\sqrt{2}$ pa ne.

## Povzetek

- Realna števila: $\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$. Iracionalna števila ($\sqrt{2}$, $\pi$) imajo neskončen neperiodičen decimalni zapis. Realna števila ustrezajo točkam na številski premici.
- Absolutna vrednost: $|x| = x$ za $x \ge 0$, $|x| = -x$ za $x < 0$. Pomeni razdaljo od $0$, razdalja med $a$ in $b$ je $|a - b|$.
- Lastnosti: $|{-x}| = |x|$, $|ab| = |a||b|$, $|a + b| \le |a| + |b|$. Enačba $|x| = a$ ima za $a > 0$ rešitvi $\pm a$, za $a < 0$ je brez rešitve.
- Intervali: $(a, b)$, $[a, b]$, $[a, b)$, $(a, b]$ in neomejeni. Okrogel oklepaj: krajišče ni vključeno. Oglat: je vključeno. Ob $\infty$ vedno okrogel.
- Presek, unija in razlika intervalov: nariši na isto premico in preveri krajišča.
- $|x - c| < r \iff x \in (c - r,\, c + r)$ (med). $|x - c| > r \iff x \in (-\infty,\, c - r) \cup (c + r,\, \infty)$ (zunaj).

## Drugače: Na sliki

Na številski premici označi točko $c = 2$. Pogoj $|x - 2| < 3$ pomeni: točka $x$ je od točke $2$ oddaljena manj kot $3$ enote. Od točke $2$ stopi tri enote v levo in pristaneš pri $-1$. Stopi tri enote v desno in pristaneš pri $5$. Vse točke med $-1$ in $5$ imajo iskano lastnost, točki $-1$ in $5$ pa ne, ker sta oddaljeni natanko $3$. Zato ju narišemo kot prazna krožca: $x \in (-1, 5)$.

| $x$ | $-2$ | $-1$ | $0$ | $2$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|---|
| $\lvert x - 2 \rvert$ | $4$ | $3$ | $2$ | $0$ | $2$ | $3$ | $4$ |
| $\lvert x - 2 \rvert < 3$? | ne | ne | da | da | da | ne | ne |

Če bi pogoj bil $\le$, bi bila krožca polna in bi veljalo $[-1, 5]$. Pri pogoju $|x - 2| > 3$ pobarvaš ravno nasprotno: dva žarka, ki se začneta pri $-1$ in $5$ in tečeta proč od središča, $(-\infty, -1) \cup (5, \infty)$. Središče intervala $(-1, 5)$ je $\dfrac{-1 + 5}{2} = 2$, polmer pa $\dfrac{5 - (-1)}{2} = 3$. To sta natanko števili $c$ in $r$ iz pogoja.

## Drugače: Iz vsakdanjega življenja

**Razdalja ne pozna smeri.** Stojiš na postaji ob ravni cesti. Trgovina je $300\,\text{m}$ proti vzhodu, pošta $300\,\text{m}$ proti zahodu. Če vzhod štejemo kot pozitivno smer, je trgovina pri $+300$, pošta pri $-300$. Obe sta enako daleč: $|300| = |-300| = 300$. Absolutna vrednost pozabi smer in ohrani samo »kako daleč«.

**Hladilnik.** Priporočena temperatura v hladilniku je 4 °C, a se sme razlikovati za največ 2 °C. Pogoj: $|t - 4| \le 2$. To pomeni $2 \le t \le 6$, torej $t \in [2, 6]$. Pri 7 °C je $|7 - 4| = 3 > 2$, torej je hladilnik pretopel.

**Besede in intervali.** Vsakdanje izraze prevedemo v intervale:

- »vsaj $18$ let« pomeni $[18, \infty)$,
- »več kot $100\,\text{km/h}$« pomeni $(100, \infty)$,
- »od $12$ do $15$ let, obe meji vključno« pomeni $[12, 15]$,
- »manj kot $5\,\text{€}$« pomeni $(-\infty, 5)$, ali v praksi, ker cene niso negativne, $[0, 5)$.

Bistvo je v besedici: »vsaj« in »največ« vključujeta mejo (oglat oklepaj), »več kot« in »manj kot« ne (okrogel oklepaj).

## Drugače: Korak za korakom s številkami

Reši neenačbo $|2x - 1| < 5$ in rešitev zapiši z intervalom.

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Pogoj »manj kot« pomeni, da je izraz $2x - 1$ med $-5$ in $5$. | $-5 < 2x - 1 < 5$ |
| 2 | Vsem trem delom prištejemo $1$. | $-4 < 2x < 6$ |
| 3 | Vse tri dele delimo z $2$ (pozitivno število, znaka se ne obrneta). | $-2 < x < 3$ |
| 4 | Zapišemo interval. | $x \in (-2, 3)$ |
| 5 | Preverba v sredini: $x = 0$ da $\lvert{-1}\rvert = 1 < 5$. | velja |
| 6 | Preverba na krajiščih: $x = 3$ da $\lvert 5 \rvert = 5$, $x = -2$ da $\lvert{-5}\rvert = 5$. | ne velja, krajišči izključeni |
| 7 | Preverba zunaj: $x = 4$ da $\lvert 7 \rvert = 7$. | ne velja |

Še en primer s pogojem »več ali enako«: $|x + 1| \ge 2$. Izraz $x + 1$ mora biti $\le -2$ ali $\ge 2$. Prvi primer da $x \le -3$, drugi $x \ge 1$. Rešitev: $(-\infty, -3] \cup [1, \infty)$. Preverba: $x = -3$ da $|{-2}| = 2 \ge 2$, $x = 1$ da $|2| = 2 \ge 2$, $x = 0$ da $|1| = 1 \ge 2$, kar ne velja, in $0$ res ni v rešitvi.

## Drugače: Bolj natančno

**Zakaj $\sqrt{2}$ ni racionalno število?** Dokaz s protislovjem. Recimo, da je $\sqrt{2} = \dfrac{p}{q}$, kjer sta $p, q$ naravni števili in je ulomek nekrajšljiv. Kvadriramo: $p^2 = 2q^2$. Torej je $p^2$ sodo, zato je tudi $p$ sodo (kvadrat lihega števila je liho, saj je $(2k+1)^2 = 4k^2 + 4k + 1$). Zapišemo $p = 2k$ in dobimo $4k^2 = 2q^2$, torej $q^2 = 2k^2$. Zato je tudi $q$ sodo. Oba, $p$ in $q$, sta sodi, kar je v protislovju z nekrajšljivostjo. Predpostavka je napačna: $\sqrt{2}$ je iracionalno.

**Natančnejša definicija absolutne vrednosti.** Velja $|x| = \max(x, -x)$, torej večje od števil $x$ in $-x$. Zato je $-|x| \le x \le |x|$. Iz tega sledi pravilo $|y| \le r \iff -r \le y \le r$, na katerem sloni pretvorba v intervale.

**Dokaz trikotniške neenakosti.** Seštejemo neenakosti $-|a| \le a \le |a|$ in $-|b| \le b \le |b|$:

$$-(|a| + |b|) \le a + b \le |a| + |b|.$$

Po zgornjem pravilu to pomeni $|a + b| \le |a| + |b|$. Enakost velja natanko takrat, ko imata $a$ in $b$ isti predznak (ali je eden od njiju $0$). Ime izhaja iz geometrije: stranica trikotnika ni daljša od vsote preostalih dveh.

**Gostost in »polnost«.** Med poljubnima realnima številoma $p < q$ leži tako racionalno kot iracionalno število. Gostost sama še ne pomeni, da ni lukenj: tudi racionalna števila so gosta, pa vendar izpustijo $\sqrt{2}$. Realna števila lukenj nimajo, pravimo jim, da so *polna*: vsaki točki premice pripada natanko eno realno število. Natančno definicijo polnosti spoznaš šele pri analizi.

## Preveri se

? Katero od števil ni racionalno?
- $\sqrt{9}$
+ $\sqrt{2}$
- $0{,}\overline{3}$
- $-\dfrac{7}{4}$
> Število $\sqrt{9} = 3$ je celo, $0{,}\overline{3} = \dfrac{1}{3}$ in $-\dfrac{7}{4}$ sta ulomka. Le $\sqrt{2}$ ima neskončen neperiodičen decimalni zapis.

? Kolikšna je vrednost izraza $|3 - 8| - |{-2}|$?
- $7$
+ $3$
- $-7$
- $-3$
> Najprej $3 - 8 = -5$, torej $|{-5}| = 5$. Nato $|{-2}| = 2$. Rezultat je $5 - 2 = 3$. Odgovor $-3$ dobiš, če absolutni vrednosti izpustiš ($-5 - (-2)$), $-7$, če ostane le druga ($-5 - 2$), $7$ pa, če $5$ in $2$ sešteješ.

? Katero število NE pripada intervalu $(-2, 5]$?
- $0$
- $4{,}99$
+ $-2$
- $5$
> Levo krajišče $-2$ ima okrogel oklepaj, zato ni v intervalu. Desno krajišče $5$ ima oglat oklepaj, zato je v intervalu.

? Katera množica je rešitev neenačbe $|x - 1| < 2$?
- $[-1, 3]$
+ $(-1, 3)$
- $(-\infty, -1) \cup (3, \infty)$
- $(-2, 2)$
> Razdalja števila $x$ od $1$ mora biti manjša od $2$, torej $1 - 2 < x < 1 + 2$, kar da $(-1, 3)$. Zaprti interval bi dopuščal tudi krajišči, ki imata razdaljo natanko $2$. Interval $(-\infty, -1) \cup (3, \infty)$ bi pripadal pogoju $|x - 1| > 2$.
