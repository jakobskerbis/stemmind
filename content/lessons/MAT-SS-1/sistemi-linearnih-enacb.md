---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Linearne enačbe z eno neznanko že obvladaš: iz enačbe $2x + 5 = 11$ izračunaš $x = 3$. V resničnih problemih pa pogosto iščemo dve količini hkrati, med njima pa imamo dva podatka. V trgovini veš, koliko stanejo dva kilograma jabolk in trije kilogrami hrušk skupaj, pa tudi koliko stanejo trije kilogrami jabolk in dva kilograma hrušk. Cene posameznega sadja ne poznaš, dobiš pa jo, če oba podatka obravnavaš skupaj. Takemu paru enačb rečemo **sistem dveh linearnih enačb z dvema neznankama**.

Sisteme potrebuješ pri mešanicah (koliko litrov kakšne raztopine zmešati), pri cenah, hitrostih in časih, pri iskanju presečišča dveh premic in pozneje tudi v fiziki in kemiji. V tej lekciji spoznaš tri načine reševanja: **grafično**, z **zamenjavo** in z **nasprotnimi koeficienti** (imenujemo ga tudi seštevalna metoda). Naučiš se tudi, kdaj sistem nima rešitve ali jih ima neskončno mnogo.

## Razlaga

**1. Kaj je sistem.** Sistem dveh linearnih enačb z neznankama $x$ in $y$ ima splošno obliko

$$\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$$

kjer so $a_1, b_1, c_1, a_2, b_2, c_2$ znana števila. **Rešitev sistema** je urejen par števil $(x, y)$, ki hkrati ustreza prvi in drugi enačbi. Ena sama enačba ima neskončno mnogo rešitev (vsaka točka premice), sistem pa običajno natanko eno.

**2. Grafična metoda.** Vsaka linearna enačba z dvema neznankama je enačba premice v koordinatnem sistemu. Zato:

- vsako enačbo izrazimo z $y$ (če ni že tako), npr. $x + y = 5$ postane $y = 5 - x$,
- narišemo obe premici (dovolj sta po dve točki, za natančnost vzamemo tri),
- rešitev sistema so koordinate **presečišča** premic, ker je presečišče edina točka, ki leži na obeh premicah.

Grafična metoda je nazorna, a ni vedno natančna: če je presečišče pri necelih številih, ga iz risbe le ocenimo. Zato vedno naredimo **preizkus** z vstavljanjem v obe enačbi.

**3. Zamenjalna metoda.** Postopek:

1. Iz ene enačbe izrazimo eno neznanko (najraje tisto, ki nima koeficienta, s katerim bi bilo težko deliti).
2. Dobljeni izraz vstavimo v *drugo* enačbo. Nastane enačba z eno neznanko.
3. Rešimo jo.
4. Rešitev vstavimo v izraženo neznanko in izračunamo še drugo.
5. Preizkus v obeh prvotnih enačbah.

**4. Metoda nasprotnih koeficientov.** Postopek:

1. Enačbi uredimo v obliko $ax + by = c$.
2. Eno ali obe enačbi pomnožimo s takim številom (vsak člen, tudi desno stran!), da bosta imeli pri isti neznanki **nasprotna koeficienta**, npr. $+6x$ in $-6x$.
3. Enačbi seštejemo. Ta neznanka izpade.
4. Rešimo enačbo z eno neznanko.
5. Dobljeno vrednost vstavimo v katero koli od prvotnih enačb in izračunamo drugo neznanko.
6. Preizkus.

Metodi zamenjave in nasprotnih koeficientov sta enakovredni: obe dasta isto rešitev. Zamenjava je praktična, kadar je v kateri enačbi neznanka že sama (npr. $y = 2x - 1$), nasprotni koeficienti pa, kadar sta enačbi v obliki $ax + by = c$.

**5. Koliko rešitev ima sistem?** Premici v ravnini imata natanko eno od treh leg, zato so možni trije primeri:

| Lega premic | Število rešitev | Kako se pokaže pri računanju |
|---|---|---|
| sekata se | natanko ena | dobimo konkretno vrednost za $x$ in za $y$ |
| vzporedni sta | nobene | pride protislovje, npr. $0 = 5$ |
| sovpadata | neskončno mnogo | pride enakost, ki vedno velja, npr. $0 = 0$ |

Primer vzporednih premic: $x + y = 3$ in $2x + 2y = 8$. Če prvo pomnožimo z $-2$ in seštejemo, dobimo $0 = 2$, kar je nemogoče, zato rešitve ni. Primer sovpadanja: $x + y = 3$ in $2x + 2y = 6$. Druga enačba je le dvakratnik prve, zato dobimo $0 = 0$ in vsak par $(x, 3 - x)$ je rešitev.

**6. Ekvivalentna preoblikovanja.** Rešitve sistema ne spremenimo, če eno enačbo pomnožimo s številom, različnim od $0$, ali če ji prištejemo drugo enačbo. Na tem temelji metoda nasprotnih koeficientov.

## Rešeni primeri

### Primer 1 (lažji)

Grafično reši sistem enačb $y = x + 1$ in $x + y = 5$.

**Podatki:** prva enačba $y = x + 1$, druga enačba $x + y = 5$

**Iščemo:** par $(x, y)$, ki ustreza obema enačbama (presečišče premic)

:::formula
Rešitev sistema so koordinate presečišča premic, ki ju določata enačbi.
:::

**Rešitev:**

1. Drugo enačbo izrazimo z $y$: $y = 5 - x$.
2. Tabela točk za prvo premico $y = x + 1$: pri $x = 0$ je $y = 1$, pri $x = 2$ je $y = 3$, pri $x = 3$ je $y = 4$.
3. Tabela točk za drugo premico $y = 5 - x$: pri $x = 0$ je $y = 5$, pri $x = 2$ je $y = 3$, pri $x = 5$ je $y = 0$.
4. Obe premici narišemo. Prva narašča, druga pada, zato se sekata. Skupna točka obeh tabel in presečišče na risbi je $(2, 3)$: pri $x = 2$ je $x + 1 = 3$ in $5 - x = 3$.
5. Preizkus: $y = x + 1$ da $3 = 2 + 1$, kar velja. $x + y = 5$ da $2 + 3 = 5$, kar velja.
6. Odgovor: rešitev sistema je $x = 2$, $y = 3$, torej par $(2, 3)$.

### Primer 2 (srednji)

Z zamenjalno metodo reši sistem $2x + y = 11$ in $3x - 2y = 6$.

**Podatki:** prva enačba $2x + y = 11$, druga enačba $3x - 2y = 6$

**Iščemo:** števili $x$ in $y$, ki ustrezata obema enačbama

:::formula
Iz ene enačbe izrazimo neznanko (npr. $y = 11 - 2x$) in jo vstavimo v drugo enačbo.
:::

**Rešitev:**

1. Iz prve enačbe izrazimo $y$: $y = 11 - 2x$.
2. Vstavimo v drugo enačbo: $3x - 2(11 - 2x) = 6$.
3. Odpremo oklepaj: $3x - 22 + 4x = 6$, torej $7x - 22 = 6$.
4. $7x = 28$, od tod $x = 4$.
5. Vstavimo v izraz za $y$: $y = 11 - 2 \cdot 4 = 11 - 8 = 3$.
6. Preizkus: $2 \cdot 4 + 3 = 11$ velja, $3 \cdot 4 - 2 \cdot 3 = 12 - 6 = 6$ velja.
7. Odgovor: $x = 4$, $y = 3$.

### Primer 3 (težji)

Dva kilograma jabolk in trije kilogrami hrušk stanejo skupaj $8{,}10\,\text{€}$. Trije kilogrami jabolk in dva kilograma hrušk stanejo skupaj $7{,}90\,\text{€}$. Kolikšna je cena kilograma jabolk in kolikšna cena kilograma hrušk?

**Podatki:** $2\,\text{kg}$ jabolk + $3\,\text{kg}$ hrušk = $8{,}10\,\text{€}$; $3\,\text{kg}$ jabolk + $2\,\text{kg}$ hrušk = $7{,}90\,\text{€}$

**Iščemo:** ceno kilograma jabolk $a$ in ceno kilograma hrušk $b$ (v evrih)

:::formula
Sistem: $2a + 3b = 8{,}10$ in $3a + 2b = 7{,}90$. Rešimo ga z nasprotnimi koeficienti: prvo enačbo pomnožimo s $3$, drugo z $-2$.
:::

**Rešitev:**

1. Zapišemo sistem: $2a + 3b = 8{,}10$ in $3a + 2b = 7{,}90$.
2. Prvo enačbo pomnožimo s $3$: $6a + 9b = 24{,}30$.
3. Drugo enačbo pomnožimo z $-2$: $-6a - 4b = -15{,}80$.
4. Enačbi seštejemo, $a$ izpade: $5b = 8{,}50$, torej $b = 1{,}70$.
5. Vstavimo v prvo enačbo: $2a + 3 \cdot 1{,}70 = 8{,}10$, to je $2a + 5{,}10 = 8{,}10$, torej $2a = 3{,}00$ in $a = 1{,}50$.
6. Preizkus v drugi enačbi: $3 \cdot 1{,}50 + 2 \cdot 1{,}70 = 4{,}50 + 3{,}40 = 7{,}90$, kar velja.
7. Odgovor: kilogram jabolk stane $1{,}50\,\text{€}$, kilogram hrušk pa $1{,}70\,\text{€}$.

## Pogoste napake

- **Pomnožiš le del enačbe.** Če enačbo $5x - 4y = -3$ pomnožiš z $2$ in zapišeš $10x - 4y = -3$, si pomnožil samo prvi člen. Razlog: pozabil si, da množimo *obe strani* enačbe, torej vsak člen. Pravilno: $10x - 8y = -6$.
- **Napačen predznak pri odštevanju enačb.** Pri odštevanju $(6x + 4y) - (5x - 4y)$ pogosto zapišeš $x + 0y$, pravilno pa je $x + 8y$, ker odštevaš tudi negativni člen. Razlog: minus pred oklepajem spremeni predznak vsakemu členu. Zato raje množi z negativnim številom in enačbi **seštej**.
- **Vstaviš v isto enačbo, iz katere si izrazil neznanko.** Če iz $y = 2x - 1$ vstaviš nazaj v isto enačbo, dobiš $0 = 0$ in nič ne izveš. Razlog: izraz že vsebuje vso informacijo prve enačbe. Pravilno: izraženo neznanko vstavi v *drugo* enačbo.
- **Izračunaš samo eno neznanko.** Rešitev sistema je par $(x, y)$. Ko dobiš $x$, moraš izračunati še $y$ in na koncu preveriti, ali par ustreza *obema* enačbama. Preizkus samo v eni enačbi ne zadošča.
- **Iz risbe odčitaš le približno.** Pri grafični metodi lahko točko $(2{,}1; 2{,}9)$ zamenjaš z $(2, 3)$. Razlog: premici ne narišemo popolnoma natančno. Zato odčitano rešitev vedno vstavi v obe enačbi.

## Povzetek

- Sistem dveh linearnih enačb: $\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$. Rešitev je par $(x, y)$, ki ustreza obema enačbama.
- Grafično: vsaka enačba je premica, rešitev je presečišče. Vedno naredi preizkus.
- Zamenjava: izrazi eno neznanko, vstavi v drugo enačbo, reši, izračunaj še drugo neznanko.
- Nasprotni koeficienti: pomnoži (vse člene), da dobiš $+k$ in $-k$ pri isti neznanki, seštej, reši, vstavi nazaj.
- Premici se sekata (ena rešitev), sta vzporedni (nobene rešitve, npr. $0 = 2$) ali sovpadata (neskončno rešitev, $0 = 0$).
- Preizkus: rešitev vstavi v obe prvotni enačbi.

## Drugače: Na sliki

Predstavljaj si koordinatni sistem, v katerega narišeš dve premici. Vsaka točka na prvi premici ustreza prvi enačbi, vsaka točka na drugi premici pa drugi. Rešitev sistema je točka, ki leži na obeh premicah hkrati, torej presečišče.

Poglejmo sistem $y = x + 1$ in $y = 5 - x$. Prva premica gre skozi $(0, 1)$ in se dviga za $1$ navzgor na vsak korak v desno. Druga gre skozi $(0, 5)$ in pada za $1$ na vsak korak v desno. Na začetku je druga višje: pri $x = 0$ je $5 > 1$. Prva se dviga, druga pada, zato se premici srečata. To se zgodi pri $x = 2$, ko sta obe na višini $3$.

Če sta premici vzporedni, imata isti naklon in se nikoli ne srečata: sistem nima rešitve. Če sta ena in ista premica, se prekrivata po vsej dolžini in vsaka točka je rešitev.

## Drugače: Iz vsakdanjega življenja

V pekarni dva kroasana in ena kava stanejo $5\,\text{€}$, en kroasan in dve kavi pa $5{,}50\,\text{€}$. Koliko stane kroasan in koliko kava?

Razmišljaj brez črk. Če bi kupil dvakrat več drugega naročila, bi naročil dva kroasana in štiri kave za $11\,\text{€}$. Primerjaj to s prvim naročilom (dva kroasana in ena kava za $5\,\text{€}$). Kroasanov je enako, kav pa je v dvojnem naročilu tri več. Naročili se razlikujeta za $11 - 5 = 6\,\text{€}$, torej tri kave stanejo $6\,\text{€}$ in ena kava $2\,\text{€}$. Potem dva kroasana stanejo $5 - 2 = 3\,\text{€}$, en kroasan $1{,}50\,\text{€}$.

Točno to počneš z metodo nasprotnih koeficientov: naročilo »povečaš« (pomnožiš enačbo) in dve naročili primerjaš, da ti ena količina izpade. Preizkus: $1{,}50 + 2 \cdot 2 = 5{,}50$ velja.

## Drugače: Korak za korakom s številkami

Reši sistem $3x + 2y = 7$ in $5x - 4y = -3$ z nasprotnimi koeficienti.

1. Izberemo, da bo izpadel $y$: koeficienta sta $2$ in $-4$. Prvo enačbo pomnožimo z $2$.
2. $2 \cdot (3x + 2y) = 2 \cdot 7$, torej $6x + 4y = 14$. Druge enačbe ne spreminjamo: $5x - 4y = -3$.
3. Pri $y$ imamo zdaj $+4y$ in $-4y$. Enačbi seštejemo: $6x + 5x = 11x$, $4y - 4y = 0$, $14 + (-3) = 11$.
4. Dobimo $11x = 11$, torej $x = 1$.
5. Vstavimo v prvo prvotno enačbo: $3 \cdot 1 + 2y = 7$, torej $2y = 4$ in $y = 2$.
6. Preizkus v prvi enačbi: $3 + 4 = 7$ velja. V drugi: $5 \cdot 1 - 4 \cdot 2 = 5 - 8 = -3$ velja.
7. Odgovor: $(x, y) = (1, 2)$.

Če bi izbral, da izpade $x$, bi imel več dela (prvo enačbo bi moral pomnožiti s $5$, drugo z $-3$). Zato si vedno ogledaj koeficiente in izberi neznanko, pri kateri je množenje najkrajše.

## Drugače: Bolj natančno

Sistem, zapisan v splošni obliki, lahko rešimo kar s formulama. Izračunamo tri števila:

$$D = a_1b_2 - a_2b_1, \qquad D_x = c_1b_2 - c_2b_1, \qquad D_y = a_1c_2 - a_2c_1.$$

Če je $D \neq 0$, ima sistem natanko eno rešitev: $x = \dfrac{D_x}{D}$ in $y = \dfrac{D_y}{D}$. Za sistem iz prejšnjega razdelka ($3x + 2y = 7$, $5x - 4y = -3$) dobimo $D = 3 \cdot (-4) - 5 \cdot 2 = -22$, $D_x = 7 \cdot (-4) - (-3) \cdot 2 = -22$ in $D_y = 3 \cdot (-3) - 5 \cdot 7 = -44$. Torej $x = 1$ in $y = 2$, enako kot prej.

Zakaj to deluje? Metoda nasprotnih koeficientov, izvedena na splošnih številih, privede do natanko teh izrazov. Pogoj $D \neq 0$ pomeni, da premici nista vzporedni (nista enakega naklona). Če je $D = 0$, sta premici vzporedni ali sovpadata. Takrat rešitve ni ali pa jih je neskončno mnogo. Rešitev je neskončno mnogo, če je tudi desna stran druge enačbe v istem razmerju kot koeficienta (premici sovpadata), sicer rešitve ni (premici sta vzporedni).

Pozneje boš sisteme z več neznankami reševal po enakem načelu: neznanke postopoma izločaš.

## Preveri se

? Reši sistem $x + y = 9$ in $x - y = 3$. Kolikšen je par $(x, y)$?
- $(3, 6)$
- $(5, 4)$
+ $(6, 3)$
> Enačbi seštejemo: $2x = 12$, torej $x = 6$, nato $y = 9 - 6 = 3$. Preizkus: $6 - 3 = 3$ velja.

? Kolikšna je rešitev sistema $y = 3x$ in $x + y = 12$?
- $(4, 8)$
+ $(3, 9)$
- $(9, 3)$
> Vstavimo $y = 3x$ v drugo enačbo: $x + 3x = 12$, $x = 3$, $y = 9$. Par $(9, 3)$ ne ustreza, ker bi moral veljati $y = 3x$.

? Koliko rešitev ima sistem $x + y = 3$ in $2x + 2y = 8$?
- natanko eno
- neskončno mnogo
+ nobene
> Prvo enačbo pomnožimo z $2$: $2x + 2y = 6$, druga pa pravi $2x + 2y = 8$. To je protislovje, zato rešitve ni: premici sta vzporedni in različni.

? Sistem $2x + 3y = 12$ in $4x - 3y = 6$ rešujemo z nasprotnimi koeficienti. Kolikšna je rešitev?
- $(2, 3)$
+ $(3, 2)$
- $(6, 0)$
> Pri $y$ že imamo $+3y$ in $-3y$. Seštejemo: $6x = 18$, $x = 3$. Iz prve: $6 + 3y = 12$, $y = 2$. Preizkus druge: $12 - 6 = 6$ velja.
