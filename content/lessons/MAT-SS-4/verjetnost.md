---
stanje: osnutek
phet: plinko-probability
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz prejšnjih letnikov že znaš klasično definicijo verjetnosti: če je vseh enako verjetnih izidov $n$, ugodnih za dogodek $A$ pa $m$, je
$$P(A) = \frac{m}{n}.$$
Ugodne in vse izide štejemo s kombinatoriko (permutacije, variacije, kombinacije).

Realni problemi pa so redko samo »vrzi kocko enkrat«. Zanima nas, kolikšna je verjetnost, da se zgodi *eno ali drugo*, da se zgodita *obe hkrati* ali da se zgodi nekaj, *če že vemo*, da se je zgodilo nekaj drugega. Tako razmišljajo zavarovalnice, zdravniki pri razlagi izvidov testov, tovarne pri nadzoru kakovosti in vsak, ki hoče pošteno oceniti tveganje. V tej lekciji se naučiš tri orodja: **verjetnost vsote dogodkov**, **verjetnost produkta dogodkov** in **pogojno verjetnost**.

## Razlaga

**1. Dogodki.** Poskus ima množico možnih izidov. **Dogodek** je skupina izidov (podmnožica). Pri metu kocke je dogodek $A$: »padlo je sodo število« $= \{2, 4, 6\}$.

- **Gotov dogodek** se zgodi vedno: $P = 1$.
- **Nemogoč dogodek** se ne zgodi nikoli: $P = 0$.
- Za vsak dogodek velja $0 \le P(A) \le 1$.
- **Nasprotni dogodek** $\overline{A}$ se zgodi, kadar se $A$ ne zgodi:
$$P(\overline{A}) = 1 - P(A).$$

**2. Vsota in produkt dogodkov.**

- **Vsota** $A + B$: zgodi se $A$ ali $B$ (vsaj eden od njiju).
- **Produkt** $A \cdot B$: zgodita se $A$ in $B$ hkrati.

Dogodka sta **nezdružljiva**, če se ne moreta zgoditi hkrati, torej je $A \cdot B$ nemogoč dogodek. Pri metu kocke sta »padla je 1« in »padla je 2« nezdružljiva.

**3. Verjetnost vsote.** Pri splošnih dogodkih velja
$$P(A + B) = P(A) + P(B) - P(A \cdot B).$$
Izide, ki so v obeh dogodkih, bi pri seštevanju šteli dvakrat, zato jih enkrat odštejemo. Če sta $A$ in $B$ nezdružljiva, je $P(A \cdot B) = 0$ in dobimo preprosto
$$P(A + B) = P(A) + P(B).$$

**4. Pogojna verjetnost.** Verjetnost dogodka $A$ ob pogoju, da se je $B$ že zgodil (z $P(B) > 0$), je
$$P(A \mid B) = \frac{P(A \cdot B)}{P(B)}.$$
Pogoj $B$ »zoži svet« na izide, v katerih se je $B$ zgodil, in med njimi gledamo, kolikšen delež jih je ugodnih za $A$.

**5. Verjetnost produkta.** Iz definicije pogojne verjetnosti sledi
$$P(A \cdot B) = P(B) \cdot P(A \mid B).$$
Verjetnost, da se zgodita oba dogodka, je verjetnost prvega, pomnožena z verjetnostjo drugega, ko je prvi že nastopil. To je pravilo za računanje po stopnjah (npr. dva izvlečka brez vračanja).

**6. Neodvisna dogodka.** Dogodka $A$ in $B$ sta **neodvisna**, če informacija o enem ne spremeni verjetnosti drugega, torej $P(A \mid B) = P(A)$. Takrat velja
$$P(A \cdot B) = P(A) \cdot P(B).$$
Primer: dva zaporedna meta kovanca. Pri vlečenju brez vračanja dogodka niha biti neodvisna.

## Rešeni primeri

### Primer 1 (lažji): vsota dogodkov pri metu kocke

Vržemo pošteno kocko. Dogodek $A$: padlo je sodo število. Dogodek $B$: padlo je število, večje od $3$. Izračunaj $P(A + B)$.

1. Zapišemo izide: $A = \{2, 4, 6\}$, $B = \{4, 5, 6\}$. Vseh izidov je $6$.
2. $P(A) = \dfrac{3}{6} = \dfrac{1}{2}$ in $P(B) = \dfrac{3}{6} = \dfrac{1}{2}$.
3. Dogodka sta združljiva (izida $4$ in $6$ sta v obeh), zato potrebujemo presek: $A \cdot B = \{4, 6\}$, torej $P(A \cdot B) = \dfrac{2}{6} = \dfrac{1}{3}$.
4. Uporabimo formulo, ki odšteje dvakrat štete izide:
$$P(A + B) = \frac{1}{2} + \frac{1}{2} - \frac{1}{3} = \frac{2}{3}.$$
5. Preverimo z neposrednim štetjem: $A + B = \{2, 4, 5, 6\}$ ima $4$ izide, $\dfrac{4}{6} = \dfrac{2}{3}$. Ujemanje potrdi račun.

### Primer 2: produkt dogodkov brez vračanja

V vrečki je $5$ rdečih in $3$ modre kroglice. Brez vračanja izvlečemo dve. Kolikšna je verjetnost, da sta (a) obe rdeči, (b) različnih barv?

**(a)**
1. Dogodek $R_1$: prva je rdeča, $R_2$: druga je rdeča. Iščemo $P(R_1 \cdot R_2) = P(R_1) \cdot P(R_2 \mid R_1)$.
2. $P(R_1) = \dfrac{5}{8}$, ker je $5$ rdečih od $8$.
3. Če je bila prva rdeča, je v vrečki še $7$ kroglic, od tega $4$ rdeče, zato $P(R_2 \mid R_1) = \dfrac{4}{7}$. Pogojna verjetnost je tu nujna, ker se sestava vrečke po prvem izvlečku spremeni.
4. $P = \dfrac{5}{8} \cdot \dfrac{4}{7} = \dfrac{20}{56} = \dfrac{5}{14}$.

**(b)**
1. Različni barvi pomenita »prva rdeča in druga modra« ali »prva modra in druga rdeča«. To sta nezdružljiva dogodka, zato verjetnosti seštejemo.
2. $P(R_1 M_2) = \dfrac{5}{8} \cdot \dfrac{3}{7} = \dfrac{15}{56}$ in $P(M_1 R_2) = \dfrac{3}{8} \cdot \dfrac{5}{7} = \dfrac{15}{56}$.
3. $P = \dfrac{15}{56} + \dfrac{15}{56} = \dfrac{30}{56} = \dfrac{15}{28}$.
4. Preverimo s kombinacijami: $\dfrac{\binom{5}{1}\binom{3}{1}}{\binom{8}{2}} = \dfrac{15}{28}$. Ujema se.

### Primer 3 (težji): pogojna verjetnost pri kontroli kakovosti

Tovarna ima dva stroja. Stroj $A$ izdela $60\,\%$ vseh izdelkov, stroj $B$ pa $40\,\%$. Pri stroju $A$ je $2\,\%$ izdelkov pokvarjenih, pri stroju $B$ pa $5\,\%$. Naključno izberemo en izdelek in je pokvarjen. Kolikšna je verjetnost, da ga je izdelal stroj $A$?

1. Označimo: $A$ – izdelek je s stroja $A$, $B$ – s stroja $B$, $N$ – izdelek je pokvarjen. Podano: $P(A) = 0{,}6$, $P(B) = 0{,}4$, $P(N \mid A) = 0{,}02$, $P(N \mid B) = 0{,}05$.
2. Iščemo $P(A \mid N) = \dfrac{P(A \cdot N)}{P(N)}$.
3. Števec izračunamo s pravilom za produkt: $P(A \cdot N) = P(A) \cdot P(N \mid A) = 0{,}6 \cdot 0{,}02 = 0{,}012$.
4. Imenovalec: izdelek je pokvarjen, če je pokvarjen in s stroja $A$, ali pokvarjen in s stroja $B$. To sta nezdružljiva dogodka, zato seštejemo:
$$P(N) = 0{,}6 \cdot 0{,}02 + 0{,}4 \cdot 0{,}05 = 0{,}012 + 0{,}020 = 0{,}032.$$
5. Delimo: $P(A \mid N) = \dfrac{0{,}012}{0{,}032} = \dfrac{12}{32} = \dfrac{3}{8} = 0{,}375$.
6. Odgovor: z verjetnostjo $37{,}5\,\%$. Čeprav stroj $A$ izdela več izdelkov, je pri pokvarjenih manjši delež, ker je njegova stopnja napak manjša.

## Pogoste napake

- **Pozabljen presek pri vsoti.** Pri združljivih dogodkih ne smeš samo sešteti $P(A) + P(B)$. Če dobiš verjetnost, večjo od $1$, je skoraj gotovo to vzrok.
- **Zamenjava $P(A \mid B)$ in $P(B \mid A)$.** To sta različni količini. Verjetnost, da je pokvarjen izdelek s stroja $A$, ni enaka verjetnosti, da je izdelek s stroja $A$ pokvarjen.
- **Množenje, kot da sta dogodka neodvisna.** Pri vlečenju brez vračanja se verjetnosti po prvem izvlečku spremenijo. Formula $P(A)\cdot P(B)$ velja samo za neodvisna dogodka.
- **Zamenjava »nezdružljiva« in »neodvisna«.** Nezdružljiva dogodka (z verjetnostima nad $0$) sta močno odvisna: če se zgodi eden, se drugi gotovo ne.
- **Napačen imenovalec pri pogojni verjetnosti.** Delimo z $P(B)$, to je verjetnostjo pogoja, ne z $P(A)$ ali s številom vseh izidov.

## Povzetek

- Dogodek je podmnožica izidov. Za nasprotni dogodek velja $P(\overline{A}) = 1 - P(A)$.
- Vsota $A + B$ pomeni »$A$ ali $B$«, produkt $A \cdot B$ pa »$A$ in $B$«.
- $P(A + B) = P(A) + P(B) - P(A \cdot B)$. Pri nezdružljivih dogodkih se zmanjša na $P(A) + P(B)$.
- Pogojna verjetnost: $P(A \mid B) = \dfrac{P(A \cdot B)}{P(B)}$.
- Produkt: $P(A \cdot B) = P(B) \cdot P(A \mid B)$. Pri neodvisnih dogodkih $P(A \cdot B) = P(A) \cdot P(B)$.
- Pri nalogah s koraki si pomagaj z drevesom: verjetnosti vzdolž poti množimo, verjetnosti različnih poti, ki vodijo do istega dogodka, seštevamo.

## Drugače: Na sliki

Predstavljaj si pravokotnik s ploščino $1$, ki predstavlja vse izide. Dogodek $A$ je lik v njem, njegova ploščina pa je $P(A)$. Dogodek $B$ je drug lik.

- Vsota $A + B$ je ploščina, ki jo pokrivata skupaj. Če se liki prekrivata, prekrito območje pri seštevanju ploščin štejemo dvakrat, zato ga enkrat odštejemo: to je $P(A \cdot B)$.
- Produkt $A \cdot B$ je ploščina prekritja.
- Pogojna verjetnost $P(A \mid B)$: ostanemo samo znotraj lika $B$ in vprašamo, kolikšen del lika $B$ prekriva tudi $A$. To je ploščina prekritja, deljena s ploščino $B$.

Pri računanju po stopnjah nariši **drevo**. Iz začetka potegni veje za možne izide prvega koraka in nanje napiši verjetnosti. Iz konca vsake veje potegni nove veje s pogojnimi verjetnostmi drugega koraka. Verjetnost cele poti dobiš tako, da verjetnosti na poti zmnožiš.

V simulaciji PhET (Plinko Probability) kroglice padajo skozi vrste žebljičkov. Na vsakem žebljičku se kroglica odloči za levo ali desno. Vsak žebljiček je en dogodek v zaporedju, pot do posamezne košare pa je produkt takih dogodkov. Ker se kroglica na vsakem žebljičku odloča neodvisno, verjetnosti na poti množimo. Do iste košare vodi več različnih poti, njihove verjetnosti pa seštevamo (poti so med seboj nezdružljive). Pri treh vrstah in enaki verjetnosti levo/desno pridemo do skrajne košare le na eni poti: $\left(\dfrac{1}{2}\right)^3 = \dfrac{1}{8}$. V srednji košari končamo po $3$ poteh, torej $\dfrac{3}{8}$. Poskusi to preveriti: spusti veliko kroglic in primerjaj delež v posamezni košari z izračunom.

## Drugače: Iz vsakdanjega življenja

**Vreme in dežnik.** Recimo, da je verjetnost dežja zjutraj $0{,}3$, verjetnost dežja popoldne $0{,}4$, verjetnost dežja v obeh delih dneva pa $0{,}2$. Verjetnost, da bo deževalo *vsaj enkrat* v dnevu, je
$$0{,}3 + 0{,}4 - 0{,}2 = 0{,}5.$$
Če bi preprosto seštela $0{,}3 + 0{,}4 = 0{,}7$, bi dneve, ko dežuje zjutraj *in* popoldne, šteli dvakrat.

**Pogojna verjetnost v življenju.** »Verjetnost, da je človek bolan, če je test pozitiven« in »verjetnost, da je test pozitiven, če je človek bolan« sta zelo različni stvari. Zdravnik mora vedeti, katera od njiju je podana. Zato je razumevanje pogojne verjetnosti tako pomembno pri branju zdravstvenih in drugih statističnih podatkov.

**Pogoj kot zožitev.** Če veš, da je v razredu $12$ deklet in $10$ fantov, in veš, da je k tabli poklican nekdo z modro majico (recimo, da so jo oblekla $4$ dekleta in $6$ fantov), te ne zanima več ves razred, ampak samo $10$ ljudi z modro majico. Verjetnost, da je to dekle, je $\dfrac{4}{10}$.

## Drugače: Korak za korakom s številkami

Dve pošteni kocki vržemo hkrati. Vseh izidov je $6 \cdot 6 = 36$. Dogodek $B$: vsota je $8$. Dogodek $A$: na prvi kocki je $3$. Kolikšna je $P(A \mid B)$?

**Korak 1: izpišemo izide za $B$** (v obliki (prva, druga)):

| Prva kocka | Druga kocka | Vsota |
|---|---|---|
| $2$ | $6$ | $8$ |
| $3$ | $5$ | $8$ |
| $4$ | $4$ | $8$ |
| $5$ | $3$ | $8$ |
| $6$ | $2$ | $8$ |

Ugodnih izidov za $B$ je $5$, torej $P(B) = \dfrac{5}{36}$.

**Korak 2: poiščemo presek.** Med temi petimi izidi je na prvi kocki $3$ samo pri $(3, 5)$. Torej $P(A \cdot B) = \dfrac{1}{36}$.

**Korak 3: vstavimo v formulo.**
$$P(A \mid B) = \frac{\dfrac{1}{36}}{\dfrac{5}{36}} = \frac{1}{5}.$$

**Korak 4: preverimo z zožitvijo.** Če vemo, da je vsota $8$, so možni samo ti $5$ izidi, med njimi je en ugoden, torej $\dfrac{1}{5}$. Rezultat se ujema.

Opomba: $P(A) = \dfrac{1}{6}$, $P(A \mid B) = \dfrac{1}{5}$. Informacija o vsoti je torej verjetnost za $A$ spremenila, zato dogodka nista neodvisna.

## Drugače: Bolj natančno

**Zakaj velja formula za vsoto?** Naj bo vseh izidov $n$. Število izidov v $A + B$ dobimo po principu vključitve in izključitve:
$$|A + B| = |A| + |B| - |A \cdot B|,$$
ker izide v preseku štejemo v $|A|$ in v $|B|$, torej dvakrat. Če vse delimo z $n$, dobimo
$$P(A + B) = P(A) + P(B) - P(A \cdot B).$$

**Zakaj je pogojna verjetnost takšna?** Pri klasični verjetnosti ima $B$ $|B|$ izidov. Če vemo, da se je $B$ zgodil, je prostor izidov zožen na $B$, ugodni pa so izidi iz $A \cdot B$. Zato
$$P(A \mid B) = \frac{|A \cdot B|}{|B|} = \frac{|A \cdot B|/n}{|B|/n} = \frac{P(A \cdot B)}{P(B)}.$$

**Neodvisnost.** Dogodka sta neodvisna natanko tedaj, ko je $P(A \mid B) = P(A)$, kar je po definiciji pogojne verjetnosti ekvivalentno $P(A \cdot B) = P(A) \cdot P(B)$. V Primeru 1 je $P(A \cdot B) = \dfrac{1}{3}$, medtem ko je $P(A) \cdot P(B) = \dfrac{1}{4}$. Ker se vrednosti razlikujeta, dogodka »sodo število« in »večje od $3$« nista neodvisna.

## Preveri se

? Za dogodka $A$ in $B$ velja $P(A) = 0{,}5$, $P(B) = 0{,}4$ in $P(A \cdot B) = 0{,}2$. Kolikšna je $P(A + B)$?
- $0{,}9$
- $0{,}3$
+ $0{,}7$
> $P(A + B) = 0{,}5 + 0{,}4 - 0{,}2 = 0{,}7$. Odgovor $0{,}9$ pozabi odšteti presek, $0{,}3$ pa nastane, če presek odštejemo samo od prve verjetnosti.

? Za dogodka $A$ in $B$ velja $P(A) = 0{,}6$, $P(B) = 0{,}4$ in $P(A \cdot B) = 0{,}12$. Kolikšna je $P(A \mid B)$?
- $0{,}2$
+ $0{,}3$
- $0{,}048$
> $P(A \mid B) = \dfrac{P(A \cdot B)}{P(B)} = \dfrac{0{,}12}{0{,}4} = 0{,}3$. Vrednost $0{,}2$ je $P(B \mid A) = \dfrac{0{,}12}{0{,}6}$, torej zamenjava dogodkov, $0{,}048$ pa dobimo z napačnim množenjem.

? Kovanec vržemo trikrat. Kolikšna je verjetnost, da pade vsaj enkrat cifra?
- $\dfrac{3}{8}$
- $\dfrac{1}{8}$
- $\dfrac{1}{2}$
+ $\dfrac{7}{8}$
> Nasprotni dogodek je, da cifra ne pade nikoli, torej trikrat pade grb: $\left(\dfrac{1}{2}\right)^3 = \dfrac{1}{8}$. Zato je $P = 1 - \dfrac{1}{8} = \dfrac{7}{8}$.
