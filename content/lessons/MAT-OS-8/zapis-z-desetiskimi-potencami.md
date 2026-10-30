---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih tem o potencah že znaš, da $a^n$ pomeni produkt $n$ enakih faktorjev $a$, in da je $10^3 = 10 \cdot 10 \cdot 10 = 1000$. Znaš tudi množiti in deliti z $10$, $100$, $1000$ (premik decimalne vejice) ter računati z decimalnimi števili.

V naravoslovju srečamo števila, ki so tako velika ali tako majhna, da jih je v običajnem zapisu težko brati in primerjati. Razdalja od Zemlje do Sonca je približno $150\,000\,000\,\text{km}$, debelina lista papirja pa približno $0{,}0001\,\text{m}$. Pri takih številkah se zelo hitro zmotiš pri štetju ničel. Zapis z desetiškimi potencami je krajši, pregleden in omogoča hitro primerjavo velikosti števil. Uporabljajo ga tudi kalkulatorji in znanstveniki po vsem svetu.

## Razlaga

**1. Potence števila 10 z naravnim eksponentom.** Eksponent pove, koliko ničel ima število:

$$10^1 = 10,\quad 10^2 = 100,\quad 10^3 = 1000,\quad 10^6 = 1\,000\,000$$

**2. Potence števila 10 z negativnim eksponentom.** Spomni se, da je $10^{-n} = \dfrac{1}{10^n}$. Zato:

$$10^{-1} = 0{,}1,\quad 10^{-2} = 0{,}01,\quad 10^{-3} = 0{,}001$$

Eksponent $-n$ pove, da je enica na $n$-tem decimalnem mestu (za vejico).

**3. Znanstveni zapis.** Vsako pozitivno število lahko zapišemo kot

$$a \cdot 10^n,\qquad 1 \le a < 10,\quad n \in \mathbb{Z}$$

Število $a$ ima pred vejico natanko eno števko, ki ni $0$. Eksponent $n$ je celo število.

**4. Zapis velikega števila.** Decimalno vejico premaknemo tako, da dobimo število med $1$ in $10$. Število premikov (v levo) je eksponent:

$$4\,500\,000 = 4{,}5 \cdot 10^6$$

Vejico smo premaknili za $6$ mest v levo, zato je $n = 6$.

**5. Zapis majhnega števila.** Vejico premaknemo v desno, dokler ne dobimo števila med $1$ in $10$. Eksponent je negativen, njegova absolutna vrednost pa je enaka številu premikov:

$$0{,}0032 = 3{,}2 \cdot 10^{-3}$$

Vejico smo premaknili za $3$ mesta v desno, zato je $n = -3$.

**6. Pretvorba nazaj.** Pri $a \cdot 10^n$ za pozitiven $n$ vejico premaknemo za $n$ mest v desno, za negativen $n$ pa za $|n|$ mest v levo. Manjkajoča mesta zapolnimo z ničlami.

**7. Primerjava.** Najprej primerjamo eksponenta: večji eksponent pomeni večje število (če sta števili pozitivni). Če sta eksponenta enaka, primerjamo $a$.

## Rešeni primeri

### Primer 1: veliko število

Zapiši $72\,000\,000$ v znanstvenem zapisu.

1. Iščemo število med $1$ in $10$. Vejica je na koncu števila (za zadnjo ničlo). Premaknemo jo, da dobimo $7{,}2$.
2. Od $72\,000\,000$ do $7{,}2$ premaknemo vejico za $7$ mest v levo. Število ima namreč $8$ števk, prva števka pa je pred vejico, zato je $7$ števk za njo.
3. Zato je eksponent $7$ (pozitiven, ker je število večje od $10$).
4. Zapis: $72\,000\,000 = 7{,}2 \cdot 10^7$.
5. Preverimo: $7{,}2 \cdot 10^7 = 7{,}2 \cdot 10\,000\,000 = 72\,000\,000$. ✓

### Primer 2: majhno število

Zapiši $0{,}00045$ v znanstvenem zapisu.

1. Prva neničelna števka je $4$. Vejico moramo premakniti tako, da stoji takoj za njo: $4{,}5$.
2. Premik: $0{,}00045 \to 4{,}5$. Vejico premaknemo za $4$ mesta v desno (čez štiri števke: $0, 0, 0, 4$).
3. Število je manjše od $1$, zato je eksponent negativen: $-4$.
4. Zapis: $0{,}00045 = 4{,}5 \cdot 10^{-4}$.
5. Preverimo: $4{,}5 \cdot 10^{-4} = 4{,}5 \cdot 0{,}0001 = 0{,}00045$. ✓

### Primer 3: besedilna naloga in primerjava

Svetloba v eni sekundi preleti približno $3 \cdot 10^8\,\text{m}$. Debelina človeškega lasu je približno $8 \cdot 10^{-5}\,\text{m}$. Zapiši obe vrednosti v običajnem zapisu in ugotovi, katera je večja.

1. **Svetloba:** $3 \cdot 10^8$. Eksponent je pozitiven, vejico premaknemo za $8$ mest v desno: $3 \cdot 10^8 = 300\,000\,000\,\text{m}$.
2. **Las:** $8 \cdot 10^{-5}$. Eksponent je negativen, vejico premaknemo za $5$ mest v levo: $8 \cdot 10^{-5} = 0{,}00008\,\text{m}$.
3. **Primerjava:** Eksponent $8$ je večji od $-5$, zato je $3 \cdot 10^8$ večje od $8 \cdot 10^{-5}$. To je razvidno tudi iz običajnega zapisa: $300\,000\,000 > 0{,}00008$.
4. **Odgovor:** Večja je razdalja, ki jo preleti svetloba v eni sekundi.

## Pogoste napake

- **Napačno štetje mest.** Pri $0{,}00045$ je eksponent $-4$, ne $-5$. Vejico premikaš, dokler ne stoji za prvo neničelno števko, in šteješ premike, ne ničel.
- **Napačen predznak eksponenta.** Veliko število ($\ge 10$) ima pozitiven eksponent, majhno število ($<1$) pa negativnega. Eksponent $-3$ ne pomeni negativnega števila, ampak število $0{,}001$.
- **Predpona $a$ izven območja.** Zapis $25 \cdot 10^5$ ni znanstveni zapis, ker $a = 25$ ni med $1$ in $10$. Pravilno: $2{,}5 \cdot 10^6$.
- **Pozabljene ničle pri pretvorbi nazaj.** $3 \cdot 10^4$ je $30\,000$, ne $34$ in ne $3000$.
- **Mešanje $10^{-n}$ z $-10^n$.** $10^{-2} = 0{,}01$, medtem ko je $-10^2 = -100$.

## Povzetek

- $10^n$ za naravni $n$ je enica z $n$ ničlami; $10^{-n} = \dfrac{1}{10^n}$ je enica na $n$-tem decimalnem mestu.
- Znanstveni zapis: $a \cdot 10^n$, kjer je $1 \le a < 10$ in $n$ celo število.
- Veliko število: vejica se premakne v levo, eksponent je pozitiven.
- Majhno število: vejica se premakne v desno, eksponent je negativen.
- Pri primerjavi najprej primerjamo eksponenta, nato šele $a$.

## Drugače: Na sliki

Predstavljaj si številsko premico z merilom v potencah števila $10$. Vsak korak v desno pomeni množenje z $10$, vsak korak v levo pa deljenje z $10$:

$$\dots \;\; 10^{-2} \to 10^{-1} \to 10^0 \to 10^1 \to 10^2 \;\; \dots$$

To so števila $0{,}01$, $0{,}1$, $1$, $10$, $100$. Eksponent je kot nadstropje v stavbi: pritličje je $10^0 = 1$, nad njim so velika števila, v kleti pa majhna.

Pri znanstvenem zapisu torej število postaviš v pravo »nadstropje« (eksponent), število $a$ pa pove, kje v tem nadstropju stoji (med $1$ in $10$). Zato se na sliki števili $3 \cdot 10^8$ in $8 \cdot 10^{-5}$ takoj razlikujeta: prvo je visoko v stavbi, drugo globoko v kleti.

## Drugače: Iz vsakdanjega življenja

Pomisli, kako opisujemo velikosti v življenju:

- Pomnilnik pametnega telefona ima na primer $64\,\text{GB}$. Predpona »giga« pomeni $10^9$, torej je to $64 \cdot 10^9$ bajtov.
- Predpona »kilo« je $10^3$ (1 km = $10^3$ m), »milimeter« je $10^{-3}$ m, »mikrometer« pa $10^{-6}$ m.
- Dolžina $5\,\text{mm}$ je $5 \cdot 10^{-3}\,\text{m} = 0{,}005\,\text{m}$.

Merske predpone so torej nekakšni skriti zapisi z desetiškimi potencami. Zapis $a \cdot 10^n$ samo izrazi isto idejo splošneje. Podobno kalkulator na zaslonu pokaže rezultat kot npr. $3\text{E}8$, kar pomeni $3 \cdot 10^8$.

## Drugače: Korak za korakom s številkami

Recept za pretvorbo v znanstveni zapis:

1. Poišči prvo neničelno števko.
2. Vejico postavi takoj za njo. Tako dobiš $a$.
3. Preštej, za koliko mest si premaknil vejico.
4. Če je bilo število večje od $10$, je eksponent pozitiven; če je manjše od $1$, negativen.

Preglednica:

| Običajni zapis | Premik vejice | Znanstveni zapis |
|---|---|---|
| $6\,300$ | $3$ mesta levo | $6{,}3 \cdot 10^3$ |
| $520\,000$ | $5$ mest levo | $5{,}2 \cdot 10^5$ |
| $0{,}07$ | $2$ mesti desno | $7 \cdot 10^{-2}$ |
| $0{,}000091$ | $5$ mest desno | $9{,}1 \cdot 10^{-5}$ |
| $4{,}8$ | $0$ mest | $4{,}8 \cdot 10^0$ |

Zadnja vrstica pokaže, da je za števila med $1$ in $10$ eksponent $0$, ker je $10^0 = 1$.

## Drugače: Bolj natančno

Zakaj premik vejice ustreza množenju z desetiško potenco? Vsako mesto v desetiškem zapisu ima vrednost potence števila $10$. Na primer:

$$4\,500\,000 = 4 \cdot 10^6 + 5 \cdot 10^5$$

Izpostavimo $10^6$:

$$4 \cdot 10^6 + 5 \cdot 10^5 = (4 + 0{,}5) \cdot 10^6 = 4{,}5 \cdot 10^6$$

Pri majhnih številih velja podobno:

$$0{,}0032 = 3 \cdot 10^{-3} + 2 \cdot 10^{-4} = (3 + 0{,}2) \cdot 10^{-3} = 3{,}2 \cdot 10^{-3}$$

Pri tem smo uporabili $10^{-4} = 0{,}1 \cdot 10^{-3}$, saj je $10^{-3} \cdot 10^{-1} = 10^{-4}$. Vsak premik vejice za eno mesto torej število pomnoži ali deli z $10$, kar eksponent popravi za $1$. Zato je zapis $a \cdot 10^n$ enak prvotnemu številu.

## Preveri se

? Kako zapišemo $3\,400\,000$ v znanstvenem zapisu?
- $34 \cdot 10^5$
- $3{,}4 \cdot 10^5$
+ $3{,}4 \cdot 10^6$
- $3{,}4 \cdot 10^{-6}$
> Vejico premaknemo za $6$ mest v levo, da dobimo $3{,}4$, zato je eksponent $6$. Zapis $34 \cdot 10^5$ ni znanstveni, ker $34$ ni med $1$ in $10$, eksponent $5$ pa bi pomenil premalo premikov.

? Katero število je enako $5 \cdot 10^{-3}$?
- $0{,}05$
- $-5000$
+ $0{,}005$
- $5000$
> $10^{-3} = 0{,}001$, zato je $5 \cdot 0{,}001 = 0{,}005$. Negativen eksponent ne naredi števila negativnega, ampak ga naredi majhnega.

? Katero od števil je največje?
- $9 \cdot 10^{3}$
- $7{,}5 \cdot 10^{-2}$
+ $1{,}2 \cdot 10^{5}$
> Najprej primerjamo eksponente: $5$ je največji, zato je največje število $1{,}2 \cdot 10^5 = 120\,000$. Število $9 \cdot 10^3 = 9000$ je manjše, čeprav ima večji $a$.
