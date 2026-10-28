---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Pri deljivosti si spoznal, da se nekatera deljenja izidejo brez ostanka, druga pa ne, in kako to hitro ugotoviš. Zdaj to znanje uporabimo za dve vprašanji iz vsakdana.

Prvo: *med koliko otrok lahko pravično razdeliš 24 bonbonov, da nič ne ostane?* Odgovori so **delitelji** števila $24$. Drugo: *ob katerih urah odpelje avtobus, ki vozi vsakih 15 minut?* Odgovori so **večkratniki** števila $15$. Večkratnike si že neštetokrat izgovoril v poštevanki, zdaj jim bomo dali ime in jih znali uporabiti.

Tretji del lekcije je zapis, ki skrajša dolge produkte. Število milijon je $10 \cdot 10 \cdot 10 \cdot 10 \cdot 10 \cdot 10$, kar je naporno pisati in brati. Matematiki to zapišejo krajše, kot **potenco** $10^6$. Potence boš srečal v matematiki, naravoslovju in računalništvu, povsod tam, kjer se enaki faktorji ponavljajo.

## Razlaga

**1. Večkratniki.** Število $a$ je **večkratnik** števila $b$, če ga dobimo, ko $b$ pomnožimo z naravnim številom: $a = b \cdot n$. Večkratniki števila $b$ so torej $b \cdot 1$, $b \cdot 2$, $b \cdot 3$, … To je natanko to, kar poznaš iz poštevanke. Množico večkratnikov števila $b$ zapišemo z $V_b$:

$$V_6 = \{6, 12, 18, 24, 30, 36, \dots\}$$

Večkratnikov je **neskončno mnogo**, saj lahko vedno pomnožimo z večjim številom. Najmanjši večkratnik števila $b$ je število $b$ samo.

**2. Delitelji.** Število $b$ je **delitelj** števila $a$, če je $a$ deljivo z $b$, torej če se $a : b$ izide brez ostanka. Množico deliteljev števila $a$ zapišemo z $D_a$:

$$D_{12} = \{1, 2, 3, 4, 6, 12\}$$

Deliteljev je **končno mnogo**. Vsako število ima vsaj delitelja $1$ in samega sebe, noben delitelj pa ni večji od števila.

**3. Dve strani iste zadeve.** Enakost $12 = 6 \cdot 2$ pove dvoje hkrati: $12$ je večkratnik števila $6$ in $6$ je delitelj števila $12$. Večkratnike števila $b$ dobimo z množenjem in so večji ali enaki $b$, delitelje števila $a$ dobimo z deljenjem in so manjši ali enaki $a$.

Ali je $a$ večkratnik števila $b$, preveriš z deljenjem: če se $a : b$ izide brez ostanka, je odgovor da. Na primer $252 : 12 = 21$, zato je $252$ večkratnik števila $12$. Pri $250 : 12$ pa dobiš $20$ in ostanek $10$, zato $250$ ni večkratnik števila $12$. Pravila deljivosti za $2$, $3$, $5$, $9$ in $10$ ti pri tem prihranijo veliko dela.

**4. Kako poiščemo vse delitelje.** Delitelji nastopajo v parih, saj je vsak delitelj en faktor v zapisu števila kot produkta dveh faktorjev. Preizkušamo $1, 2, 3, \dots$ in vsakič, ko se deljenje izide, zapišemo oba faktorja. Za $36$:

$$36 = 1 \cdot 36 = 2 \cdot 18 = 3 \cdot 12 = 4 \cdot 9 = 6 \cdot 6$$

Pri $6 \cdot 6$ se faktorja srečata, zato smo končali: $D_{36} = \{1, 2, 3, 4, 6, 9, 12, 18, 36\}$. Števila $5$, $7$ in $8$ ne delijo števila $36$, saj se deljenje ne izide.

**5. Potenca kot zapis produkta.** Produkt enakih faktorjev zapišemo kratko s potenco:

$$\underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ faktorjev}} = a^n$$

Število $a$ je **osnova**, število $n$ je **eksponent** in pove, koliko enakih faktorjev množimo. Na primer $2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 2^5 = 32$, beremo »dva na peto«. Potenco $a^2$ beremo tudi kot kvadrat števila $a$, potenco $a^3$ pa kot kub števila $a$. Za eksponent $1$ velja $a^1 = a$.

| $n$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| $n^2$ | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 |
| $n^3$ | 1 | 8 | 27 | 64 | 125 | 216 | 343 | 512 | 729 | $1\,000$ |

**6. Pozor pri računanju s potencami.** Potenca ni produkt osnove in eksponenta: $2^3 = 2 \cdot 2 \cdot 2 = 8$, ne $2 \cdot 3 = 6$. Osnova in eksponent tudi nista zamenljiva: $2^3 = 8$, a $3^2 = 9$. V vrstnem redu operacij se potenca računa **pred množenjem**, torej: oklepaji, potence, množenje in deljenje, seštevanje in odštevanje. Primer: $3 \cdot 2^3 = 3 \cdot 8 = 24$. Če želimo najprej pomnožiti, potrebujemo oklepaj: $(3 \cdot 2)^3 = 6^3 = 216$.

**7. Potence števila 10.** Pri zapisu velikih števil si videl, da so mestne vrednosti desetice, stotice, tisočice … Zdaj jih znaš zapisati s potencami:

| potenca | produkt | vrednost |
|---|---|---|
| $10^1$ | $10$ | $10$ |
| $10^2$ | $10 \cdot 10$ | $100$ |
| $10^3$ | $10 \cdot 10 \cdot 10$ | $1\,000$ |
| $10^6$ | $10 \cdot 10 \cdot 10 \cdot 10 \cdot 10 \cdot 10$ | $1\,000\,000$ |

Potenca $10^n$ je torej enica z $n$ ničlami. Zato lahko število zapišemo razširjeno s potencami: $4\,305 = 4 \cdot 10^3 + 3 \cdot 10^2 + 5$.

## Rešeni primeri

### Primer 1 (lažji)

Zapiši prvih šest večkratnikov števila $7$ in vse delitelje števila $28$.

**Podatki:** število $7$ (iščemo prvih šest večkratnikov), število $28$ (iščemo vse delitelje)
**Iščemo:** prvih šest elementov množice $V_7$ in množico $D_{28}$

:::formula
Večkratniki števila $b$: $b \cdot 1,\ b \cdot 2,\ b \cdot 3,\ \dots$. Število $b$ je delitelj števila $a$, če se $a : b$ izide brez ostanka, kar najdemo kot par faktorjev $a = b \cdot c$.
:::

**Rešitev:**

1. Večkratnike dobimo z množenjem s $1, 2, 3, 4, 5, 6$: $7, 14, 21, 28, 35, 42$. Torej $V_7 = \{7, 14, 21, 28, 35, 42, \dots\}$.
2. Delitelje števila $28$ iščemo kot pare faktorjev: $28 = 1 \cdot 28$, $28 = 2 \cdot 14$, $28 = 4 \cdot 7$.
3. Števili $3$ in $5$ ne delita $28$ (ostanka sta $1$ in $3$). Pri $6$ bi bil količnik že manjši od $6$, zato smo končali.
4. Odgovor: $D_{28} = \{1, 2, 4, 7, 14, 28\}$, torej ima $28$ šest deliteljev. Opaziš lahko, da je $28$ hkrati večkratnik števila $7$ in $7$ je delitelj števila $28$.

### Primer 2 (srednji)

a) Produkt $7 \cdot 7 \cdot 7 \cdot 7$ zapiši s potenco in izračunaj njegovo vrednost. b) Izračunaj $2^5$, $5^2$ in $3 \cdot 2^3$. c) Število $4\,305$ zapiši razširjeno s potencami števila $10$.

**Podatki:** a) produkt $7 \cdot 7 \cdot 7 \cdot 7$; b) potenci $2^5$ in $5^2$ ter izraz $3 \cdot 2^3$; c) število $4\,305$
**Iščemo:** a) zapis s potenco in njeno vrednost; b) vrednosti treh izrazov; c) razširjeni zapis s potencami števila $10$

:::formula
$a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ faktorjev}}$; potenco računamo pred množenjem; $10^n$ je enica z $n$ ničlami.
:::

**Rešitev:**

1. a) Faktor $7$ se ponovi štirikrat, torej je osnova $7$ in eksponent $4$: $7 \cdot 7 \cdot 7 \cdot 7 = 7^4$. Vrednost: $7 \cdot 7 = 49$, $49 \cdot 7 = 343$, $343 \cdot 7 = 2\,401$.
2. b) $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$ (zaporedoma $2, 4, 8, 16, 32$). Nato $5^2 = 5 \cdot 5 = 25$. Opazi, da $2^5 \ne 5^2$.
3. b) V izrazu $3 \cdot 2^3$ potenca stoji pred množenjem: $2^3 = 8$, nato $3 \cdot 8 = 24$.
4. c) $4\,305 = 4\,000 + 300 + 5 = 4 \cdot 1\,000 + 3 \cdot 100 + 5 = 4 \cdot 10^3 + 3 \cdot 10^2 + 5$. Desetic ni, zato ta člen izpustimo.
5. Odgovor: a) $7^4 = 2\,401$; b) $32$, $25$ in $24$; c) $4 \cdot 10^3 + 3 \cdot 10^2 + 5$.

### Primer 3 (težji)

a) Razred ima 36 učencev. Učiteljica jih želi razdeliti v enako velike skupine, nihče ne sme ostati brez skupine. V vsaki skupini naj bo vsaj 3 in največ 12 učencev. Kolikšne so lahko skupine in koliko skupin je v vsakem primeru? b) Mestni avtobus odpelje s postaje prvič ob 6.00, nato pa vsakih 15 minut. Ali odpelje ob 7.30? Ali ob 7.40? Koliko odhodov je od 6.00 do 8.00, če štejemo tudi prvega in zadnjega?

**Podatki:** a) 36 učencev, enake skupine, velikost skupine od 3 do 12 učencev; b) prvi odhod ob 6.00, razmik med odhodi 15 minut, vprašanje o odhodih ob 7.30, ob 7.40 in o številu odhodov od 6.00 do 8.00 (vključno z obema)
**Iščemo:** a) možne velikosti skupin in število skupin; b) ali avtobus odpelje ob 7.30 in ob 7.40 ter število odhodov

:::formula
Delitelj: $b$ deli $a$, če se $a : b$ izide brez ostanka. Večkratnik: $a = b \cdot n$ za naravno število $n$.
:::

**Rešitev:**

1. a) Velikost skupine mora deliti $36$, sicer bi kdo ostal. Poiščemo delitelje: $36 = 1 \cdot 36 = 2 \cdot 18 = 3 \cdot 12 = 4 \cdot 9 = 6 \cdot 6$, torej $D_{36} = \{1, 2, 3, 4, 6, 9, 12, 18, 36\}$.
2. a) Med $3$ in $12$ so delitelji $3, 4, 6, 9, 12$. Število skupin je količnik: $36 : 3 = 12$, $36 : 4 = 9$, $36 : 6 = 6$, $36 : 9 = 4$, $36 : 12 = 3$.
3. a) Odgovor: skupine so lahko velike $3, 4, 6, 9$ ali $12$ učencev, skupin je potem $12, 9, 6, 4$ oziroma $3$.
4. b) Avtobus odpelje, ko je čas od $6.00$ večkratnik števila $15$ (v minutah). Ob $7.30$ je minilo $90$ minut. Ker je $90 : 15 = 6$ brez ostanka, avtobus ob $7.30$ odpelje.
5. b) Ob $7.40$ je minilo $100$ minut. Velja $100 : 15 = 6$ in ostanek $10$, zato $100$ ni večkratnik števila $15$ (sosednja večkratnika sta $90$ in $105$). Ob $7.40$ avtobus ne odpelje.
6. b) Od $6.00$ do $8.00$ mine $120$ minut. Ker je $120 = 15 \cdot 8$, so odhodi po $15, 30, \dots, 120$ minutah, torej osem odhodov, in zraven še prvi ob $6.00$. Odgovor: v tem času je $9$ odhodov.

## Pogoste napake

- **Pozabljena delitelja 1 in število samo.** Pri številu $20$ nekdo zapiše $\{2, 4, 5, 10\}$. Število $1$ deli vsako število in vsako število deli samo sebe. Pravilno: $20 = 1 \cdot 20 = 2 \cdot 10 = 4 \cdot 5$, torej $D_{20} = \{1, 2, 4, 5, 10, 20\}$.
- **Zamenjava večkratnikov in deliteljev.** »Večkratniki števila $6$ so $1, 2, 3, 6$.« To so delitelji. Večkratnike števila $6$ dobiš z množenjem in so večji ali enaki $6$: $6, 12, 18, 24, \dots$. Delitelje dobiš z deljenjem in so manjši ali enaki $6$. Hiter test: večkratnik je v poštevanki števila, delitelj je faktor.
- **Pozabljen par delitelja.** Pri $36$ nekdo najde $1, 2, 3, 4, 6$ in se ustavi. Vsak delitelj ima partnerja: iz $36 : 4 = 9$ sledi, da je tudi $9$ delitelj. Pri vsakem najdenem delitelju zato izračunaj še količnik: $36 : 2 = 18$, $36 : 3 = 12$, $36 : 4 = 9$.
- **Potenca kot produkt osnove in eksponenta.** »$2^3 = 2 \cdot 3 = 6$.« Eksponent pove, **koliko enakih faktorjev** pišemo: $2^3 = 2 \cdot 2 \cdot 2 = 8$.
- **Napačen vrstni red pri potencah.** »$3 \cdot 2^3 = 6^3 = 216$.« Potenca se računa pred množenjem: $3 \cdot 2^3 = 3 \cdot 8 = 24$. Če res želiš najprej pomnožiti, moraš zapisati oklepaj: $(3 \cdot 2)^3 = 216$.

## Povzetek

- Večkratniki števila $b$ so $b, 2b, 3b, \dots$ (množica $V_b$) in jih je neskončno mnogo.
- Delitelji števila $a$ so števila, s katerimi se $a$ deli brez ostanka (množica $D_a$). Jih je končno mnogo, med njimi sta vedno $1$ in $a$.
- Če je $a = b \cdot n$, je $a$ večkratnik števila $b$ in $b$ je delitelj števila $a$.
- Delitelje iščemo v parih faktorjev, npr. $36 = 1 \cdot 36 = 2 \cdot 18 = 3 \cdot 12 = 4 \cdot 9 = 6 \cdot 6$.
- Potenca $a^n$ je produkt $n$ enakih faktorjev $a$ (osnova $a$, eksponent $n$), npr. $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$; $a^1 = a$.
- Potenca ni produkt osnove in eksponenta ($2^3 = 8$, ne $6$) in osnova ter eksponent nista zamenljiva ($2^3 = 8$, $3^2 = 9$).
- Vrstni red: oklepaji, potence, množenje in deljenje, seštevanje in odštevanje. Potenca $10^n$ je enica z $n$ ničlami.

## Drugače: Na sliki

**Pravokotniki iz kvadratkov.** Delitelje števila vidiš kot dolžine stranic pravokotnikov, ki jih sestaviš iz toliko kvadratkov, kolikor je število:

| Število kvadratkov | Pravokotniki, ki jih lahko sestaviš | Delitelji |
|---|---|---|
| 12 | $1 \times 12$, $2 \times 6$, $3 \times 4$ | 1, 2, 3, 4, 6, 12 |
| 13 | samo $1 \times 13$ | 1, 13 |
| 16 | $1 \times 16$, $2 \times 8$, $4 \times 4$ | 1, 2, 4, 8, 16 |

Iz 13 kvadratkov lahko sestaviš samo eno vrsto. Številom, ki imajo samo dva delitelja, pravimo praštevila; podrobneje jih spoznaš pozneje. Pri 16 kvadratkih dobiš pravi kvadrat $4 \times 4$.

**Skoki po številski premici.** Žaba skače po $6$ in začne pri $0$. Pristane na $6, 12, 18, 24, \dots$ To so večkratniki števila $6$. Na število $20$ ne pristane nikoli, ker $20$ ni večkratnik števila $6$.

**Kvadrat in kocka.** Potenca $5^2$ je 5 vrst po 5 kvadratkov, skupaj $25$ kvadratkov. Potenca $2^3$ je kocka iz $2 \cdot 2 \cdot 2 = 8$ majhnih kock. Zato potenci $a^2$ in $a^3$ imenujemo tudi kvadrat in kub števila $a$.

## Drugače: Iz vsakdanjega življenja

**Večkratniki: plačevanje.** Če imaš samo bankovce po 20 €, lahko plačaš zneske 20 €, 40 €, 60 €, … To so večkratniki števila 20. Znesek 70 € ni večkratnik števila 20, zato ga z bankovci po 20 € ne moreš plačati brez vračila.

**Delitelji: pravična delitev.** Imaš 24 bonbonov. Delitelji števila 24 so $1, 2, 3, 4, 6, 8, 12, 24$. Razdeliš jih lahko med 2, 3, 4, 6, 8, 12 ali 24 otrok, med 5 otrok pa ne: $24 : 5 = 4$ in ostanek $4$.

**Potence: hitra rast.** List papirja prepogneš: po enem pregibu sta 2 plasti, po dveh 4, po treh 8, po štirih 16, torej $2^4 = 16$. Pri verižnem sporočilu, ki ga vsak pošlje trem novim osebam, jih prvi dan prejme 3, nato 9, nato 27 in 81, torej $3^4 = 81$. Šahovnica ima $8 \cdot 8 = 8^2 = 64$ polj.

## Drugače: Korak za korakom s številkami

**A. Vsi delitelji števila 60.** Preizkušamo $d = 1, 2, 3, \dots$ in vsakič, ko se deljenje izide, zapišemo par:

| $d$ | $60 : d$ | Izide se? | Najdeni delitelji |
|---|---|---|---|
| 1 | 60 | da | $1$ in $60$ |
| 2 | 30 | da | $2$ in $30$ |
| 3 | 20 | da | $3$ in $20$ |
| 4 | 15 | da | $4$ in $15$ |
| 5 | 12 | da | $5$ in $12$ |
| 6 | 10 | da | $6$ in $10$ |
| 7 | 8, ostanek 4 | ne | |
| 8 | 7, ostanek 4 | ne | |

Pri $d = 8$ je količnik že manjši od $8$. To pomeni, da so se faktorji prekrižali in da smo vse pare že našli, zato nehamo. Odgovor: $D_{60} = \{1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60\}$, torej ima $60$ dvanajst deliteljev.

**B. Večkratniki števila 15 do 100.** $15 \cdot 1 = 15$, $15 \cdot 2 = 30$, $15 \cdot 3 = 45$, $15 \cdot 4 = 60$, $15 \cdot 5 = 75$, $15 \cdot 6 = 90$. Že $15 \cdot 7 = 105$ je več kot $100$. Do $100$ je šest večkratnikov števila $15$.

**C. Potence po korakih.** Vsaka potenca z osnovo $2$ je dvakrat večja od prejšnje:

| $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ | $2^7$ | $2^8$ |
|---|---|---|---|---|---|---|---|
| 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 |

Izračunajmo še $2 \cdot 3^2 + 4^2 - 10$. Najprej potenci: $3^2 = 9$ in $4^2 = 16$. Nato množenje: $2 \cdot 9 = 18$. Nazadnje seštevanje in odštevanje od leve proti desni: $18 + 16 = 34$, nato $34 - 10 = 24$.

## Drugače: Bolj natančno

**Definicija z enačbo.** Število $b$ je delitelj števila $a$, če obstaja naravno število $n$, da je $a = b \cdot n$. Tedaj pišemo tudi $b \mid a$, kar preberemo »$b$ deli $a$«. Ista enačba pove tudi, da je $a$ večkratnik števila $b$.

**Koliko večkratnikov je do neke meje?** Večkratnikov števila $b$, ki niso večji od $N$, je toliko, kolikor je celi del količnika $N : b$. Za $b = 7$ in $N = 100$: $100 : 7 = 14$ z ostankom $2$, zato je do $100$ štirinajst večkratnikov števila $7$, zadnji je $7 \cdot 14 = 98$.

**Delitelji v parih in kvadrati.** Delitelji se razporedijo v pare s produktom $a$. Če sta oba delitelja v paru enaka (kot pri $6 \cdot 6$), delitelj ostane brez para in število deliteljev je liho. Zato imajo kvadrati liho število deliteljev: $16$ jih ima 5, $25$ jih ima 3, $36$ jih ima 9. Število $12$, ki ni kvadrat, jih ima 6.

**Potence kot ponavljano množenje.** Potence definiramo po korakih: $a^1 = a$ in $a^{n+1} = a^n \cdot a$. Vsak naslednji eksponent torej pomeni še en faktor $a$. Zato potence hitro rastejo: $2^{10} = 1\,024$, že $2^{20} = 1\,048\,576$ pa je več kot milijon. Potenciranje ni zamenljivo: $2^3 = 8$, $3^2 = 9$.

## Preveri se

? Koliko deliteljev ima število $20$?
- $4$
- $5$
+ $6$
- $10$
> Delitelji so $1, 2, 4, 5, 10, 20$, torej šest. Odgovor $4$ dobiš, če pozabiš na $1$ in $20$, odgovor $5$, če pozabiš na enega od njiju, $10$ pa je samo eden od deliteljev.

? Katero od števil je večkratnik števila $14$?
- $7$
+ $28$
- $34$
- $144$
> $28 = 14 \cdot 2$. Število $7$ je delitelj števila $14$, ne večkratnik. Pri $34 : 14$ ostane $6$, pri $144 : 14$ pa ostane $4$.

? Kako s potenco zapišemo produkt $5 \cdot 5 \cdot 5 \cdot 5$?
- $4^5$
+ $5^4$
- $5 \cdot 4$
> Faktor $5$ se ponovi štirikrat, zato je osnova $5$ in eksponent $4$: $5^4 = 625$. Zapis $4^5$ bi pomenil produkt petih faktorjev $4$ ($1\,024$), $5 \cdot 4$ pa je samo $20$.

? Kolikšna je vrednost izraza $3 \cdot 2^3$?
- $18$
+ $24$
- $216$
> Potenca se računa pred množenjem: $2^3 = 8$, nato $3 \cdot 8 = 24$. Odgovor $18$ dobiš, če eksponent obravnavaš kot faktor ($3 \cdot 2 \cdot 3$), odgovor $216$ pa, če najprej pomnožiš $3 \cdot 2 = 6$ in šele nato potenciraš ($6^3$).
