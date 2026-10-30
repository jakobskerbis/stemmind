---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Ana vsak teden v hranilnik da $3\,\text{€}$ več kot prejšnji teden. Bojan pa vsak teden prihrani dvakrat toliko kot prejšnji teden. Kdo bo po desetih tednih prihranil več? In koliko bo v hranilniku vsega skupaj?

Pri Ani se člen za členom **prišteva** isto število, pri Bojanu se **množi** z istim številom. To sta dve najpomembnejši vrsti zaporedij: **aritmetično** in **geometrijsko**. Že veš, kaj je zaporedje, splošni člen in monotonost. V tej lekciji se naučiš za ti dve zaporedji hitro izračunati poljuben člen in vsoto prvih $n$ členov, ne da bi jih seštel enega za drugim. Prvo opisuje enakomerno rast (sedeži v vrstah dvorane, stopnice), drugo rast ali upadanje za isti delež (razmnoževanje bakterij, razpolovna doba).

## Razlaga

**1. Dve zaporedji v tabeli.** Obe zaporedji se začneta z $2$. Prvo vsakič poveča za $3$, drugo vsakič pomnoži s $3$:

| $n$ | prištevamo $3$ | množimo s $3$ |
|---|---|---|
| 1 | $2$ | $2$ |
| 2 | $5$ | $6$ |
| 3 | $8$ | $18$ |
| 4 | $11$ | $54$ |
| 5 | $14$ | $162$ |

Prvo raste enakomerno, drugo vedno hitreje.

**2. Aritmetično zaporedje.** Zaporedje je **aritmetično**, če je razlika dveh zaporednih členov vedno enaka. To stalno razliko imenujemo **diferenca** in jo označimo z $d$:

$$a_{n+1} - a_n = d.$$

Od $a_1$ do $a_n$ naredimo $n - 1$ korakov, vsak prinese $d$. Zato je splošni člen

$$a_n = a_1 + (n-1)\,d.$$

Če je $d > 0$, je zaporedje strogo naraščajoče, če je $d < 0$, strogo padajoče, pri $d = 0$ pa konstantno.

:::premisli
Zaporedje je $3, 7, 11, \ldots$ Koliko je $a_{10}$? Zakaj v formuli piše $n - 1$ in ne $n$?
---
$d = 4$, $a_{10} = 3 + 9 \cdot 4 = 39$. Od prvega do desetega člena je le $9$ korakov: prvi člen že imamo, diferenco prištejemo za vsak naslednji člen.
:::

**3. Vsota aritmetičnega zaporedja.** Z $S_n$ označimo **vsoto prvih $n$ členov**: $S_n = a_1 + a_2 + \ldots + a_n$. Mladi Gauss je baje v nekaj minutah seštel $1 + 2 + \ldots + 100$. Vsoto je zapisal še v obratnem vrstnem redu in seštel člene v parih: $1 + 100$, $2 + 99$, $3 + 98$ … Vsak par da $101$, parov je $100$, kar je dvojna vsota. Torej je vsota $\dfrac{100 \cdot 101}{2} = 5050$.

Isti premislek velja za vsako aritmetično zaporedje, ker se od para do para prvi člen poveča za $d$, drugi pa zmanjša za $d$, zato ima vsak od $n$ parov vsoto $a_1 + a_n$:

$$S_n = \frac{n}{2}\,(a_1 + a_n) = \frac{n}{2}\,\bigl(2a_1 + (n-1)\,d\bigr).$$

**4. Geometrijsko zaporedje.** Zaporedje z neničelnimi členi je **geometrijsko**, če je količnik dveh zaporednih členov vedno enak. To stalno število imenujemo **količnik** in ga označimo s $q$:

$$\frac{a_{n+1}}{a_n} = q.$$

Od $a_1$ do $a_n$ spet naredimo $n - 1$ korakov, le da vsak korak pomeni množenje s $q$:

$$a_n = a_1 \cdot q^{\,n-1}.$$

Pri $a_1 > 0$ je zaporedje za $q > 1$ strogo naraščajoče, za $0 < q < 1$ strogo padajoče. Za $q < 0$ členi izmenično menjajo predznak, zato zaporedje ni monotono. Takemu zaporedju rečemo **alternirajoče**.

:::premisli
Zaporedji $2, 4, 6, \ldots$ in $2, 4, 8, \ldots$ se začneta enako. Napovej, kolikšen je deseti člen vsakega.
---
Prvo je aritmetično z $d = 2$: $a_{10} = 2 + 9 \cdot 2 = 20$. Drugo je geometrijsko s $q = 2$: $a_{10} = 2 \cdot 2^9 = 1024$. Geometrijska rast z $q > 1$ prej ali slej prehiti vsako aritmetično.
:::

**5. Vsota geometrijskega zaporedja.** Vsoto $S_n = a_1 + a_1 q + \ldots + a_1 q^{n-1}$ pomnožimo s $q$ in odštejemo. Skoraj vsi členi se odštejejo, ostane $S_n - q S_n = a_1 - a_1 q^n$. Za $q \ne 1$ zato velja

$$S_n = a_1 \cdot \frac{q^n - 1}{q - 1}.$$

Pri $q = 1$ so vsi členi enaki $a_1$, zato je $S_n = n \cdot a_1$.

V simulaciji spodaj (»Aritmetično in geometrijsko zaporedje«) primerjaj grafa obeh vrst zaporedij. Naloga: pri aritmetičnem zaporedju preveri, da točke $(n, a_n)$ ležijo na isti premici; pri geometrijskem zaporedju s količnikom večjim od $1$ opazi, da so razmiki med sosednjimi točkami vedno večji.

## Rešeni primeri

### Primer 1 (lažji)

Aritmetično zaporedje ima prvi člen $a_1 = 5$ in diferenco $d = 3$. Izračunaj dvajseti člen in vsoto prvih dvajsetih členov.

**Podatki:** $a_1 = 5$, $d = 3$, $n = 20$
**Iščemo:** člen $a_{20}$ in vsoto $S_{20}$

:::formula
$a_n = a_1 + (n-1)\,d$, $\quad S_n = \dfrac{n}{2}\,(a_1 + a_n)$
:::

**Rešitev:**

1. Do dvajsetega člena je $19$ korakov: $a_{20} = 5 + 19 \cdot 3 = 62$.
2. Vsota po Gaussovem premisleku, saj poznamo prvi in zadnji člen: $S_{20} = \dfrac{20}{2} \cdot (5 + 62) = 10 \cdot 67 = 670$.
3. Odgovor: dvajseti člen je $62$, vsota prvih dvajsetih členov je $670$.

### Primer 2 (srednji)

Geometrijsko zaporedje ima prvi člen $a_1 = 3$ in količnik $q = 2$. Izračunaj osmi člen in vsoto prvih osmih členov.

**Podatki:** $a_1 = 3$, $q = 2$, $n = 8$
**Iščemo:** člen $a_8$ in vsoto $S_8$

:::formula
$a_n = a_1 \cdot q^{\,n-1}$, $\quad S_n = a_1 \cdot \dfrac{q^n - 1}{q - 1}$
:::

**Rešitev:**

1. Do osmega člena je $7$ množenj z $2$: $a_8 = 3 \cdot 2^7 = 3 \cdot 128 = 384$.
2. Ker je $q \ne 1$, uporabimo formulo za geometrijsko vsoto: $S_8 = 3 \cdot \dfrac{2^8 - 1}{2 - 1} = 3 \cdot 255 = 765$.
3. Preizkus smiselnosti: vsota je malo manj kot dvakratnik zadnjega člena, kar je pri $q = 2$ pričakovano, saj je vsak člen večji od vsote vseh prejšnjih.
4. Odgovor: osmi člen je $384$, vsota prvih osmih členov je $765$.

### Primer 3 (težji)

V dvorani je v prvi vrsti $18$ sedežev, v vsaki naslednji vrsti pa $2$ sedeža več kot v prejšnji. Dvorana ima skupaj $740$ sedežev. Koliko vrst ima dvorana in koliko sedežev je v zadnji vrsti?

**Podatki:** $a_1 = 18$, $d = 2$, $S_n = 740$
**Iščemo:** število vrst $n$ in število sedežev v zadnji vrsti $a_n$

:::formula
$S_n = \dfrac{n}{2}\,\bigl(2a_1 + (n-1)\,d\bigr)$, $\quad a_n = a_1 + (n-1)\,d$
:::

**Rešitev:**

1. Števila sedežev po vrstah tvorijo aritmetično zaporedje, ker se vsakič povečajo za isto število.
2. Neznan je $n$, zato uporabimo obliko vsote brez $a_n$: $740 = \dfrac{n}{2}\,\bigl(36 + 2(n-1)\bigr) = n\,(n + 17)$.
3. Dobimo kvadratno enačbo $n^2 + 17n - 740 = 0$.
4. Diskriminanta: $D = 17^2 + 4 \cdot 740 = 289 + 2960 = 3249 = 57^2$.
5. Rešitvi sta $n = \dfrac{-17 + 57}{2} = 20$ in $n = \dfrac{-17 - 57}{2} = -37$. Število vrst je naravno število, zato velja $n = 20$.
6. Zadnja vrsta: $a_{20} = 18 + 19 \cdot 2 = 56$. Preizkus: $\dfrac{20}{2} \cdot (18 + 56) = 740$.
7. Odgovor: dvorana ima $20$ vrst, v zadnji vrsti je $56$ sedežev.

### Primer 4: zdaj ti

V geometrijskem zaporedju je $a_2 = 6$ in $a_5 = 48$. Izračunaj vsoto prvih šestih členov.

**Podatki:** $a_2 = 6$, $a_5 = 48$, $n = 6$
**Iščemo:** vsoto $S_6$

:::formula
$a_n = a_1 \cdot q^{\,n-1}$, $\quad S_n = a_1 \cdot \dfrac{q^n - 1}{q - 1}$
:::

**Rešitev:**

1. Od $a_2$ do $a_5$ so trije koraki, zato je $a_5 = a_2 \cdot q^3$ in $q^3 = \dfrac{48}{6} = 8$, torej $q = 2$.
2. Prvi člen je en korak pred drugim: $a_1 = \dfrac{a_2}{q} = \dfrac{6}{2} = 3$.
3. Zdaj izračunaj vsoto sam, nato preveri:

:::premisli
Koliko je $S_6$ pri $a_1 = 3$ in $q = 2$?
---
$S_6 = 3 \cdot \dfrac{2^6 - 1}{2 - 1} = 3 \cdot 63 = 189$. Preizkus: $3 + 6 + 12 + 24 + 48 + 96 = 189$.
:::

## Pogoste napake

- **$a_n = a_1 + n \cdot d$.** Učenec misli, da do $n$-tega člena prišteje $d$ $n$-krat. Prvi člen pa že ima, korakov je le $n - 1$. Preveri pri $n = 1$: formula mora dati $a_1$, kar velja le za $a_1 + (n-1)\,d$.
- **$a_n = a_1 \cdot q^n$.** Ista napaka pri geometrijskem zaporedju: eksponent je $n - 1$, ker je množenj eno manj kot členov. Tudi tu preveri pri $n = 1$: $q^0 = 1$.
- **Vrsta zaporedja iz prvih dveh členov.** Iz $2, 4$ ne moreš vedeti, ali je naslednji člen $6$ (aritmetično) ali $8$ (geometrijsko). Prav tako zaporedje $1, 2, 4, 8$ ni aritmetično, čeprav je $2 - 1 = 1$. Razliko oziroma količnik preveri pri vseh danih parih.
- **Gaussova formula za geometrijsko vsoto.** Formula $S_n = \dfrac{n}{2}(a_1 + a_n)$ velja le za aritmetično zaporedje, ker so le tam vsote parov enake. Pri geometrijskem uporabi $S_n = a_1 \cdot \dfrac{q^n - 1}{q - 1}$.
- **»Geometrijsko zaporedje z velikim $|q|$ vedno narašča.«** Pri $q = -2$ členi $5, -10, 20, -40$ menjajo predznak, zato zaporedje ni monotono. Pri $a_1 > 0$ monotonost določata predznak $q$ in to, ali je $|q|$ večji ali manjši od $1$.

## Povzetek

- Aritmetično zaporedje: $a_{n+1} - a_n = d$ (diferenca).
- $a_n = a_1 + (n-1)\,d$ in $S_n = \dfrac{n}{2}(a_1 + a_n) = \dfrac{n}{2}\bigl(2a_1 + (n-1)d\bigr)$.
- Geometrijsko zaporedje: $\dfrac{a_{n+1}}{a_n} = q$ (količnik).
- $a_n = a_1 \cdot q^{\,n-1}$ in za $q \ne 1$: $S_n = a_1 \cdot \dfrac{q^n - 1}{q - 1}$; za $q = 1$: $S_n = n\,a_1$.
- Od $a_1$ do $a_n$ je $n - 1$ korakov; formulo vedno preveri pri $n = 1$.
- Vrsto zaporedja določi šele, ko preveriš razliko oziroma količnik pri vseh danih parih.

## Drugače: Na sliki

Nariši točke $(n, a_n)$. Pri aritmetičnem zaporedju ležijo vse na eni premici: ko se pomakneš za eno mesto desno, se dvigneš za $d$. Diferenca je torej naklon te premice; pri negativnem $d$ premica pada.

Pri geometrijskem zaporedju s $q > 1$ točke ležijo na krivulji, ki se vedno strmeje dviga. Vsak korak v desno ne doda stalne višine, ampak stalni *delež*: višina se pomnoži s $q$.

Gaussovo vsoto si predstavljaj kot stopnice iz kock: v prvem stolpcu je $a_1$ kock, v zadnjem $a_n$. Vzemi še ene enake stopnice, jih obrni na glavo in prisloni ob prve. Skupaj tvorijo pravokotnik z $n$ stolpci višine $a_1 + a_n$. Ena stopnica je polovica pravokotnika, zato je $S_n = \dfrac{n}{2}(a_1 + a_n)$.

## Drugače: Iz vsakdanjega življenja

Aritmetično zaporedje srečaš povsod, kjer se nekaj enakomerno povečuje. Taksi zaračuna začetnih $3\,\text{€}$ in vsak kilometer $1{,}5\,\text{€}$: cene po prvem, drugem, tretjem kilometru so $4{,}5$, $6$, $7{,}5$ evra, vsakič za isti znesek več. Tudi višine stopnic v stopnišču so aritmetično zaporedje.

Geometrijsko zaporedje srečaš, kjer se nekaj spreminja za isti delež. List papirja, debel $0{,}1\,\text{mm}$, prepogneš na pol in debelina se podvoji. Po desetih prepogibih bi bil kup debel $0{,}1 \cdot 2^{10} = 102{,}4\,\text{mm}$, kar je več kot $10\,\text{cm}$. Zato listov v resnici ne moreš prepogniti več kot nekajkrat. Podobno se razpolavlja količina radioaktivne snovi: po vsaki razpolovni dobi ostane polovica, zato je količnik $q = \dfrac{1}{2}$.

## Drugače: Korak za korakom s številkami

Seštej $1 + 2 + 4 + 8 + \ldots + 512$ brez računala.

1. Ugotovi vrsto: količniki $\frac{2}{1}, \frac{4}{2}, \frac{8}{4}$ so vsi $2$, zato je zaporedje geometrijsko s $q = 2$ in $a_1 = 1$.
2. Število členov: $512 = 2^9 = a_1 \cdot q^{\,n-1}$, torej $n - 1 = 9$ in $n = 10$.
3. Trik: vsoto $S$ podvoji, $2S = 2 + 4 + \ldots + 512 + 1024$.
4. Odštej: v $2S - S$ se vsi srednji členi odštejejo, ostane $1024 - 1 = 1023$.
5. Torej $S = 1023$. Formula da isto: $1 \cdot \dfrac{2^{10} - 1}{2 - 1} = 1023$.

Za primerjavo aritmetično: $3 + 6 + 9 + \ldots + 30$. Diferenca je $3$, členov je $10$, vsota parov $3 + 30 = 33$, zato $S = 5 \cdot 33 = 165$.

## Drugače: Bolj natančno

Pri aritmetičnem zaporedju je vsak člen (razen prvega) **aritmetična sredina** sosedov: $a_n = \dfrac{a_{n-1} + a_{n+1}}{2}$, ker je $a_{n-1} = a_n - d$ in $a_{n+1} = a_n + d$. Pri geometrijskem zaporedju s pozitivnimi členi je vsak člen **geometrijska sredina** sosedov: $a_n = \sqrt{a_{n-1}\,a_{n+1}}$, ker je $a_{n-1}\,a_{n+1} = \dfrac{a_n}{q} \cdot a_n q = a_n^2$. Od tod imeni zaporedij.

Splošni člen $a_n = a_1 + (n-1)d = d\,n + (a_1 - d)$ je linearna funkcija spremenljivke $n$, zato točke ležijo na premici. Splošni člen $a_n = a_1 q^{\,n-1} = \dfrac{a_1}{q} \cdot q^n$ je pri $q > 0$ eksponentna funkcija, zožena na naravna števila.

Formulo za vsoto dokažemo tudi s popolno indukcijo. Za $q \ne 1$ velja pri $n = 1$: $a_1 \frac{q - 1}{q - 1} = a_1$. Iz $S_n$ dobimo $S_{n+1} = S_n + a_1 q^n = a_1 \frac{q^n - 1 + q^{n+1} - q^n}{q - 1} = a_1 \frac{q^{n+1} - 1}{q - 1}$.

## Preveri se

? Kateri je splošni člen geometrijskega zaporedja?
- $a_n = a_1 \cdot q^n$
~ Pri $n = 1$ bi dobil $a_1 q$ namesto $a_1$. Množenj je eno manj kot členov.
+ $a_n = a_1 \cdot q^{\,n-1}$
- $a_n = a_1 + (n-1)\,q$
~ To je oblika aritmetičnega zaporedja. Pri geometrijskem se s $q$ množi, ne prišteva.
> Od $a_1$ do $a_n$ je $n - 1$ množenj s $q$, zato $a_n = a_1 q^{\,n-1}$.

? Prva dva člena zaporedja sta $2$ in $4$. Kaj lahko zagotovo rečemo?
- Zaporedje je aritmetično z $d = 2$.
~ Iz dveh členov ne veš, ali je naslednji $6$ ali $8$. Morda je zaporedje geometrijsko.
- Zaporedje je geometrijsko s $q = 2$.
~ Enako velja v drugo smer: naslednji člen je lahko tudi $6$.
+ Brez dodatnih podatkov vrste zaporedja ne vemo.
> Dva člena določata le en korak. Vrsto zaporedja določiš šele, ko preveriš več zaporednih parov ali je vrsta podana.

? Geometrijsko zaporedje ima $a_1 = 5$ in $q = -2$. Kakšno je?
- Strogo naraščajoče, ker je $|q| > 1$.
~ Absolutne vrednosti res rastejo, sami členi pa ne: $5, -10, 20, -40$.
- Strogo padajoče, ker je $q < 0$.
~ Že $a_3 = 20$ je večji od $a_2 = -10$, zato zaporedje ne pada.
+ Alternirajoče, zato ni monotono.
> Pri negativnem $q$ zaporedni členi menjajo predznak, zato zaporedje ne narašča in ne pada.

? Aritmetično zaporedje ima $a_1 = 4$ in $d = 3$. Koliko je $a_{15}$?
- $49$
~ To je $4 + 15 \cdot 3$. Korakov je le $14$, ker prvi člen že imaš.
+ $46$
- $4 \cdot 3^{14}$
~ Tako računaš pri geometrijskem zaporedju. Pri aritmetičnem diferenco prišteješ.
> $a_{15} = 4 + 14 \cdot 3 = 46$.

? Kolikšna je vsota prvih petih členov geometrijskega zaporedja z $a_1 = 1$ in $q = 3$?
- $205$
~ To je Gaussova formula $\frac{5}{2}(1 + 81)$, ki velja le za aritmetična zaporedja.
- $81$
~ To je peti člen $a_5 = 3^4$, ne vsota prvih petih členov.
+ $121$
> $S_5 = 1 \cdot \dfrac{3^5 - 1}{3 - 1} = \dfrac{242}{2} = 121$; preizkus: $1 + 3 + 9 + 27 + 81 = 121$.

:::simboli
a_n | splošni (n-ti) člen zaporedja | a_n = a_1 + (n-1)\,d | | geometrijsko: aₙ = a₁ · qⁿ⁻¹
a_{n+1} | člen, ki sledi členu a_n | | |
a_1 | prvi člen zaporedja | | |
d | diferenca aritmetičnega zaporedja | d = a_{n+1} - a_n | |
q | količnik geometrijskega zaporedja | q = \frac{a_{n+1}}{a_n} | | v formuli za vsoto q ≠ 1
n | zaporedna številka člena (število členov) | | |
S_n | vsota prvih n členov | S_n = \frac{n}{2}\,(a_1 + a_n) | | geometrijsko: Sₙ = a₁ · (qⁿ − 1)/(q − 1)
:::
