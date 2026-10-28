---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Kvadrat in kub že poznaš: ploščina kvadrata s stranico $a$ je $a \cdot a = a^2$, prostornina kocke z robom $a$ pa $a \cdot a \cdot a = a^3$. V tej temi zapis razširimo na poljubno mnogo enakih faktorjev. Zmnožek enakih faktorjev skrajšano zapišemo kot **potenco**. Z ulomki in racionalnimi števili že računaš, zato veš, kaj je ulomek in kaj je obratna vrednost števila. Oboje boš tukaj potreboval.

Potence uporabljamo povsod, kjer se nekaj ponavlja ali narašča z množenjem. Bakterija se na primer vsakih dvajset minut razdeli na dve, število bakterij pa se zato vsakič podvoji. Razdalja od Zemlje do Sonca je približno $150\,000\,000\,000\,\text{m}$, premer atoma pa približno $0{,}0000000001\,\text{m}$. Take zapise je težko brati in še težje z njimi računati. Z zapisom $1{,}5 \cdot 10^{11}\,\text{m}$ in $10^{-10}\,\text{m}$ pa sta števili kratki in pregledni.

V tej lekciji se naučiš, kaj pomenita osnova in eksponent, kako računaš s potencami ter zakaj je $a^0 = 1$ in kaj pomeni negativni eksponent. Pravila, ki jih spoznaš, boš v naslednjih temah vsak dan uporabljal: pri algebrskih izrazih, pri razstavljanju in pri ulomljenih izrazih.

## Razlaga

**1. Potenca z naravnim eksponentom.** Če število $a$ pomnožimo samo s seboj, zmnožek skrajšano zapišemo takole:

$$a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n\ \text{faktorjev}}$$

Število $a$ je **osnova**, naravno število $n$ je **eksponent**, rezultat pa je **vrednost potence**. Beremo »$a$ na $n$«. Posebej velja $a^1 = a$. Primeri: $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$, $\left(\dfrac{2}{3}\right)^3 = \dfrac{2}{3} \cdot \dfrac{2}{3} \cdot \dfrac{2}{3} = \dfrac{8}{27}$ in $0{,}1^2 = 0{,}1 \cdot 0{,}1 = 0{,}01$.

**2. Predznak potence.** Predznak vrednosti potence določita osnova in eksponent:

| Osnova | Eksponent | Predznak potence | Primer |
|---|---|---|---|
| pozitivna | poljuben | pozitiven | $2^3 = 8$ |
| negativna | sod | pozitiven | $(-2)^4 = 16$ |
| negativna | lih | negativen | $(-2)^3 = -8$ |

Pazi na oklepaje. Pri $(-2)^4$ je osnova $-2$ in rezultat je $16$. Pri $-2^4$ potenciramo samo število $2$, minus pa je predznak rezultata: $-2^4 = -(2^4) = -16$. Vrstni red računskih operacij je: oklepaji, potenciranje, množenje in deljenje, nazadnje seštevanje in odštevanje. Na primer $3 + 2 \cdot 4^2 = 3 + 2 \cdot 16 = 35$.

**3. Pravila za naravne eksponente.** Poglej zmnožek $2^3 \cdot 2^2$. Prva potenca ima tri faktorje, druga dva, skupaj jih je pet: $(2 \cdot 2 \cdot 2) \cdot (2 \cdot 2) = 2^5$. Eksponenta sta se seštela. Na podoben način izpeljemo ostala pravila. Za $a \neq 0$, $b \neq 0$ ter naravni števili $m$ in $n$ velja:

| Pravilo | Zapis | Primer |
|---|---|---|
| množenje potenc z isto osnovo | $a^m \cdot a^n = a^{m+n}$ | $3^4 \cdot 3^2 = 3^6$ |
| deljenje potenc z isto osnovo ($m > n$) | $a^m : a^n = a^{m-n}$ | $5^7 : 5^4 = 5^3$ |
| potenca potence | $(a^m)^n = a^{m \cdot n}$ | $(2^3)^2 = 2^6$ |
| potenca zmnožka | $(a \cdot b)^n = a^n \cdot b^n$ | $(2 \cdot 5)^3 = 2^3 \cdot 5^3$ |
| potenca količnika | $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$ | $\left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4}$ |

Pravili za množenje in deljenje veljata samo, kadar imata potenci **isto osnovo**. Če osnovi nista enaki, ju najprej zapišemo kot potenci iste osnove, na primer $4 = 2^2$, $8 = 2^3$, $9 = 3^2$, $27 = 3^3$. Za vsoto in razliko potenc takega pravila ni: $a^m + a^n$ ne moremo zapisati kot eno potenco, $(a + b)^n$ pa ni enako $a^n + b^n$.

**4. Ničta potenca.** Za $a \neq 0$ definiramo $a^0 = 1$. Zakaj prav tako? Pravilo za deljenje želimo ohraniti tudi za enaka eksponenta: $a^3 : a^3 = a^{3-3} = a^0$. Količnik dveh enakih števil pa je $1$, zato mora biti $a^0 = 1$. Torej $7^0 = 1$, $(-4)^0 = 1$ in $\left(\dfrac{2}{3}\right)^0 = 1$. Izraz $0^0$ ni definiran.

**5. Negativni eksponent.** Za $a \neq 0$ in naravno število $n$ definiramo

$$a^{-n} = \frac{1}{a^n}.$$

Razlog: izračunajmo $a^2 : a^5$. Po pravilu za deljenje je rezultat $a^{2-5} = a^{-3}$. Če pa ulomek $\dfrac{a \cdot a}{a \cdot a \cdot a \cdot a \cdot a}$ skrajšamo, dobimo $\dfrac{1}{a^3}$. Obe poti se ujemata, če je $a^{-3} = \dfrac{1}{a^3}$. Negativni eksponent torej **ne naredi števila negativnega**, ampak vzame obratno vrednost. Primeri: $2^{-3} = \dfrac{1}{8}$, $10^{-2} = \dfrac{1}{100} = 0{,}01$ in $(-2)^{-3} = \dfrac{1}{(-2)^3} = -\dfrac{1}{8}$.

Pri ulomku osnovo obrnemo: $\left(\dfrac{a}{b}\right)^{-n} = \left(\dfrac{b}{a}\right)^n$, na primer $\left(\dfrac{2}{3}\right)^{-2} = \left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4}$. Faktor z negativnim eksponentom lahko prestaviš iz števca v imenovalec (ali obratno), če eksponentu spremeniš predznak: $\dfrac{1}{a^{-n}} = a^n$ in $\dfrac{a^{-n}}{b^{-m}} = \dfrac{b^m}{a^n}$.

**6. Vsa pravila za cele eksponente.** Z ničto potenco in negativnimi eksponenti je potenca $a^n$ definirana za vsako celo število $n$ (pri $a \neq 0$). Vsa pravila iz tretje točke zdaj veljajo za poljubna cela eksponenta $m$ in $n$. Rezultat deljenja tako lahko zapišemo tudi, ko je $m < n$: $5^4 : 5^7 = 5^{-3} = \dfrac{1}{125}$. Pa še en primer: $3^5 \cdot 3^{-7} = 3^{5-7} = 3^{-2} = \dfrac{1}{9}$.

**7. Potence števila 10 in znanstveni zapis.** Potence števila $10$ so zelo preproste: $10^3 = 1000$ (tri ničle), $10^{-3} = \dfrac{1}{1000} = 0{,}001$ (tri decimalna mesta). **Znanstveni zapis** števila je oblika

$$a \cdot 10^n, \qquad 1 \le a < 10, \quad n \in \mathbb{Z}.$$

Na primer $3\,500\,000 = 3{,}5 \cdot 10^6$ in $0{,}00042 = 4{,}2 \cdot 10^{-4}$. Pri množenju ločeno množimo števila in ločeno potence števila $10$: $(3 \cdot 10^5) \cdot (2 \cdot 10^{-2}) = 6 \cdot 10^3$. Če dobimo $a \ge 10$, popravimo zapis: $12 \cdot 10^3 = 1{,}2 \cdot 10^4$.

**8. Postopek poenostavljanja.** Zapomni si zaporedje korakov: (1) vse osnove zapiši kot potence iste osnove, (2) uporabi pravili za potenco potence in potenco zmnožka, (3) pri množenju eksponente seštej, pri deljenju odštej, (4) po potrebi rezultat zapiši brez negativnih eksponentov, (5) preizkusi z majhnim številom.

## Rešeni primeri

### Primer 1 (lažji)

Izračunaj vrednosti potenc $(-2)^3$, $-2^4$, $4^{-2}$ in $\left(\dfrac{2}{3}\right)^{-2}$.

**Podatki:** osnove in eksponenti: $(-2)^3$, $-2^4$, $4^{-2}$, $\left(\dfrac{2}{3}\right)^{-2}$
**Iščemo:** vrednosti vseh štirih potenc

:::formula
$a^n = a \cdot a \cdot \ldots \cdot a$ ($n$ faktorjev), $a^{-n} = \dfrac{1}{a^n}$, $\left(\dfrac{a}{b}\right)^{-n} = \left(\dfrac{b}{a}\right)^n$
:::

**Rešitev:**

1. $(-2)^3 = (-2) \cdot (-2) \cdot (-2) = 4 \cdot (-2) = -8$. Osnova je negativna, eksponent lih, zato je rezultat negativen.
2. Pri $-2^4$ potenciramo samo število $2$: $-2^4 = -(2 \cdot 2 \cdot 2 \cdot 2) = -16$.
3. $4^{-2} = \dfrac{1}{4^2} = \dfrac{1}{16}$.
4. $\left(\dfrac{2}{3}\right)^{-2} = \left(\dfrac{3}{2}\right)^2 = \dfrac{3^2}{2^2} = \dfrac{9}{4}$.
5. Odgovor: $(-2)^3 = -8$, $-2^4 = -16$, $4^{-2} = \dfrac{1}{16}$ in $\left(\dfrac{2}{3}\right)^{-2} = \dfrac{9}{4}$.

### Primer 2 (srednji)

Poenostavi in izračunaj vrednost izraza $\dfrac{9^2 \cdot 3^{-3}}{27^{-1}}$.

**Podatki:** števec $9^2 \cdot 3^{-3}$, imenovalec $27^{-1}$; osnove $9$, $3$ in $27$, eksponenti $2$, $-3$ in $-1$
**Iščemo:** vrednost izraza

:::formula
$(a^m)^n = a^{m \cdot n}$, $a^m \cdot a^n = a^{m+n}$, $a^m : a^n = a^{m-n}$
:::

**Rešitev:**

1. Vse osnove zapišemo kot potence števila $3$: $9 = 3^2$ in $27 = 3^3$.
2. Potenca potence: $9^2 = (3^2)^2 = 3^4$ in $27^{-1} = (3^3)^{-1} = 3^{-3}$.
3. Števec: $3^4 \cdot 3^{-3} = 3^{4 + (-3)} = 3^1$.
4. Izraz je zdaj $3^1 : 3^{-3} = 3^{1 - (-3)} = 3^4 = 81$.
5. Preizkus brez pravil: $9^2 = 81$ in $3^{-3} = \dfrac{1}{27}$, zato je števec $81 \cdot \dfrac{1}{27} = 3$. Imenovalec je $27^{-1} = \dfrac{1}{27}$ in $3 : \dfrac{1}{27} = 3 \cdot 27 = 81$.
6. Odgovor: vrednost izraza je $81$.

### Primer 3 (težji)

Poenostavi izraz $\left(\dfrac{2a^3b^{-2}}{a^{-1}b}\right)^{-2}$ in ga zapiši brez negativnih eksponentov. Velja $a \neq 0$ in $b \neq 0$.

**Podatki:** izraz $\left(\dfrac{2a^3b^{-2}}{a^{-1}b}\right)^{-2}$, pogoja $a \neq 0$ in $b \neq 0$
**Iščemo:** enostavnejši izraz brez negativnih eksponentov

:::formula
$a^m : a^n = a^{m-n}$, $(a \cdot b)^n = a^n \cdot b^n$, $(a^m)^n = a^{m \cdot n}$, $a^{-n} = \dfrac{1}{a^n}$
:::

**Rešitev:**

1. Najprej poenostavimo ulomek v oklepaju, vsako osnovo posebej. Število $2$ ostane. Za $a$ je $a^3 : a^{-1} = a^{3 - (-1)} = a^4$. Za $b$ je $b^{-2} : b = b^{-2-1} = b^{-3}$. Oklepaj je enak $2a^4b^{-3}$.
2. Potenco $-2$ uporabimo na vsakem faktorju: $(2a^4b^{-3})^{-2} = 2^{-2} \cdot (a^4)^{-2} \cdot (b^{-3})^{-2}$.
3. Izračunamo: $2^{-2} = \dfrac{1}{4}$, $(a^4)^{-2} = a^{-8}$ in $(b^{-3})^{-2} = b^6$. Dobimo $\dfrac{1}{4} \cdot a^{-8} \cdot b^6$.
4. Zaradi $a^{-8} = \dfrac{1}{a^8}$ je rezultat $\dfrac{b^6}{4a^8}$.
5. Preizkus za $a = 1$ in $b = 2$: oklepaj je $\dfrac{2 \cdot 1 \cdot 2^{-2}}{1 \cdot 2} = \dfrac{2 \cdot \frac{1}{4}}{2} = \dfrac{1}{4}$, potem je $\left(\dfrac{1}{4}\right)^{-2} = 4^2 = 16$. Rezultat pa je $\dfrac{2^6}{4 \cdot 1^8} = \dfrac{64}{4} = 16$. Ujemanje potrjuje račun.
6. Odgovor: izraz je enak $\dfrac{b^6}{4a^8}$.

## Pogoste napake

- **Minus in oklepaj: »$-3^2 = 9$«.** Razlog: minus pred potenco ni del osnove, če ni oklepaja, potenciranje pa je pred negacijo. Pravilno: $-3^2 = -(3 \cdot 3) = -9$, medtem ko je $(-3)^2 = (-3) \cdot (-3) = 9$.
- **Seštevanje in množenje eksponentov zamenjaš: »$2^3 \cdot 2^4 = 2^{12}$« ali »$2^3 \cdot 2^4 = 4^7$«.** Razlog: pri $2^3 \cdot 2^4$ imaš skupaj $3 + 4 = 7$ faktorjev dvojk, osnova pa ostane $2$. Pravilno: $2^3 \cdot 2^4 = 2^7 = 128$. Eksponente množiš samo pri potenci potence: $(2^3)^4 = 2^{12}$.
- **Potenca vsote: »$(a + b)^n = a^n + b^n$«.** Razlog: pravilo velja za zmnožek, za vsoto ne. Preizkus s številkami: $(2 + 3)^2 = 25$, vendar $2^2 + 3^2 = 13$. Pravilno: najprej izračunaj vsoto v oklepaju in jo šele nato potenciraj. Kako vsoto v oklepaju razviješ, se naučiš v naslednji temi.
- **Negativni eksponent da negativno število: »$2^{-3} = -8$« ali »$2^{-3} = -\dfrac{1}{8}$«.** Razlog: negativni eksponent pomeni obratno vrednost, predznaka rezultata ne spremeni. Pravilno: $2^{-3} = \dfrac{1}{2^3} = \dfrac{1}{8}$. Ničta potenca prav tako ni $0$: $5^0 = 1$.
- **Eksponent velja za več, kot mora: »$3 \cdot 2^2 = 6^2$« ali »$2a^{-3} = \dfrac{1}{2a^3}$«.** Razlog: eksponent se nanaša samo na osnovo tik pred njim. Pravilno: $3 \cdot 2^2 = 3 \cdot 4 = 12$, medtem ko je $6^2 = 36$. In $2a^{-3} = 2 \cdot \dfrac{1}{a^3} = \dfrac{2}{a^3}$.

## Povzetek

- $a^n$ je zmnožek $n$ faktorjev $a$; $a$ je osnova, $n$ je eksponent. Predznak: negativna osnova in lih eksponent dasta negativen rezultat; $-2^4 \neq (-2)^4$.
- Za $a \neq 0$ velja $a^0 = 1$ in $a^{-n} = \dfrac{1}{a^n}$; negativni eksponent pomeni obratno vrednost, ne negativnega števila. $\left(\dfrac{a}{b}\right)^{-n} = \left(\dfrac{b}{a}\right)^n$.
- Isti osnovi: $a^m \cdot a^n = a^{m+n}$ in $a^m : a^n = a^{m-n}$ (eksponente seštevamo oziroma odštevamo).
- Potenca potence: $(a^m)^n = a^{m \cdot n}$ (eksponente množimo).
- Potenca zmnožka in količnika: $(a \cdot b)^n = a^n \cdot b^n$ in $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$. Za vsoto takega pravila ni: $(a + b)^n \neq a^n + b^n$.
- Pravila veljajo za vsa cela števila $m$ in $n$, osnove pa morajo biti različne od $0$. Izraz $0^0$ ni definiran.
- Znanstveni zapis: $a \cdot 10^n$ z $1 \le a < 10$ in celim $n$.

## Drugače: Na sliki

Poglej tabelo: v zgornji vrstici je eksponent $n$ od $-3$ do $4$, pod njim pa vrednost potence $2^n$.

| $n$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|---|---|---|
| $2^n$ | $\dfrac{1}{8}$ | $\dfrac{1}{4}$ | $\dfrac{1}{2}$ | $1$ | $2$ | $4$ | $8$ | $16$ |

Ko se pomakneš za en korak desno, vrednost podvojiš. Ko se pomakneš za en korak levo, jo razpoloviš. Zato mora biti pod eksponentom $0$ število $1$ (polovica od $2$) in pod $-1$ število $\dfrac{1}{2}$. Če bi točke narisal v koordinatni sistem, bi desno strmo rasle, levo pa bi se vedno bolj približevale vodoravni osi, ne da bi jo kdaj dosegle: vse vrednosti ostanejo pozitivne.

Za kvadrat in kocko pomagata geometrijski sliki. Kvadrat s stranico $3$ razdelimo na mrežo $3 \times 3$, torej na $3^2 = 9$ enotskih kvadratov. Kocko z robom $3$ razdelimo na plasti $3 \times 3 \times 3$, torej na $3^3 = 27$ enotskih kock. Če stranico podvojimo, dobi kvadrat štirikrat večjo ploščino, kocka pa osemkrat večjo prostornino: $(2a)^2 = 4a^2$ in $(2a)^3 = 8a^3$. To je pravilo $(a \cdot b)^n = a^n \cdot b^n$ z $a = 2$.

## Drugače: Iz vsakdanjega življenja

**Bakterije.** Ena bakterija se vsakih $20$ minut deli na dve. V eni uri so tri delitve, zato je bakterij $2^3 = 8$. V treh urah je devet delitev: $2^9 = 512$. V šestih urah je osemnajst delitev: $2^{18} = 262\,144$. Rast z množenjem je hitra, zato so potence pomembne pri epidemijah in obrestih. Z negativnim eksponentom pogledaš tudi v preteklost: če je zdaj $1000$ bakterij, jih je bilo pred eno uro $1000 \cdot 2^{-3} = \dfrac{1000}{8} = 125$.

**Svetloba od Sonca.** Razdalja Zemlja–Sonce je približno $1{,}5 \cdot 10^{11}\,\text{m}$, svetloba pa potuje s hitrostjo približno $3 \cdot 10^8\,\text{m/s}$. Čas je razdalja, deljena s hitrostjo:

$$t = \frac{1{,}5 \cdot 10^{11}\,\text{m}}{3 \cdot 10^{8}\,\text{m/s}} = 0{,}5 \cdot 10^{3}\,\text{s} = 5 \cdot 10^{2}\,\text{s} = 500\,\text{s}.$$

Sončna svetloba do nas potuje torej nekaj več kot osem minut. Račun je preprost, ker števila delimo posebej in potence števila $10$ posebej.

**Predpone enot.** Kilometer je $10^3\,\text{m}$, milimeter $10^{-3}\,\text{m}$, mikrometer $10^{-6}\,\text{m}$. Zato je $2{,}5\,\text{mm} = 2{,}5 \cdot 10^{-3}\,\text{m}$. Pri pretvarjanju enot se v resnici izražaš s potencami števila $10$.

## Drugače: Korak za korakom s številkami

Poenostavimo izraz $\dfrac{(2^{-1})^3 \cdot 4^2}{2^{-5}}$ po korakih in vsak korak preverimo.

| Korak | Kaj naredim | Rezultat |
|---|---|---|
| 1 | Izberem skupno osnovo $2$ in zapišem $4 = 2^2$ | $\dfrac{(2^{-1})^3 \cdot (2^2)^2}{2^{-5}}$ |
| 2 | Potenca potence: eksponente zmnožim | $\dfrac{2^{-3} \cdot 2^{4}}{2^{-5}}$ |
| 3 | Števec: eksponente seštejem, $-3 + 4 = 1$ | $\dfrac{2^{1}}{2^{-5}}$ |
| 4 | Deljenje: eksponente odštejem, $1 - (-5) = 6$ | $2^{6}$ |
| 5 | Izračunam potenco | $2^6 = 64$ |

Preizkus brez pravil: $(2^{-1})^3 = \left(\dfrac{1}{2}\right)^3 = \dfrac{1}{8}$ in $4^2 = 16$, zato je števec $\dfrac{16}{8} = 2$. Imenovalec je $2^{-5} = \dfrac{1}{32}$. Količnik je $2 : \dfrac{1}{32} = 2 \cdot 32 = 64$. Rezultata se ujemata.

Najpogostejša past je četrti korak: odštevanje negativnega eksponenta je prištevanje. Zato je $1 - (-5) = 6$ in ne $-4$. Kadar v izrazu nastopa črka, jo za preizkus nadomestiš z majhnim številom, na primer $a = 2$, in primerjaš vrednost izraza pred poenostavitvijo in po njej.

## Drugače: Bolj natančno

**Definicija po korakih.** Potenco z naravnim eksponentom določimo rekurzivno: $a^1 = a$ in $a^{n+1} = a^n \cdot a$. Iz definicije sledi pravilo za množenje: $a^m$ ima $m$ faktorjev, $a^n$ jih ima $n$, zmnožek pa $m + n$. Pravilo $(a \cdot b)^n = a^n \cdot b^n$ sledi iz tega, da pri množenju faktorje lahko poljubno preurejamo in združujemo: v zmnožku $n$ parov $a \cdot b$ prestavimo vse $a$ naprej in vse $b$ nazaj.

**Ničta potenca in negativni eksponent nista izrek, ampak dogovor.** Dogovorimo se tako, da pravila ostanejo v veljavi. Če naj velja $a^n \cdot a^0 = a^{n+0} = a^n$, mora biti $a^0 = 1$. Če naj velja $a^n \cdot a^{-n} = a^0 = 1$, je $a^{-n}$ obratna vrednost potence $a^n$, torej $\dfrac{1}{a^n}$. Pri $a = 0$ ta dogovor odpove: $0^{-1}$ bi bilo $\dfrac{1}{0}$, deljenje z ničlo pa ni mogoče. Izraz $0^0$ je še bolj zapleten, saj bi po pravilu $a^0 = 1$ moral biti $1$, po pravilu $0^n = 0$ pa $0$, zato mu v tej temi ne pripišemo vrednosti.

**Predznak.** Splošno je $(-a)^n = (-1)^n \cdot a^n$, kjer je $(-1)^n$ enak $1$ pri sodem in $-1$ pri lihem $n$.

**Rast in padanje.** Pri osnovi $a > 1$ večji eksponent pomeni večjo potenco: $2^{-3} < 2^2$, saj je $\dfrac{1}{8} < 4$. Pri osnovi $0 < a < 1$ je ravno obratno: $\left(\dfrac{1}{2}\right)^{-3} = 8$ je večje od $\left(\dfrac{1}{2}\right)^2 = \dfrac{1}{4}$. V tej temi imamo samo cele eksponente. Potence z ulomki v eksponentu so posebna, kasnejša snov.

## Preveri se

? Koliko je $-2^4$?
- $16$
+ $-16$
- $8$
- $-8$
> Brez oklepaja potenciramo samo število $2$: $2^4 = 16$, minus pa je predznak rezultata, zato $-2^4 = -16$. Rezultat $16$ bi dobil pri $(-2)^4$, rezultata $8$ in $-8$ pa pri množenju $2 \cdot 4$ namesto potenciranja.

? Koliko je $\left(\dfrac{2}{5}\right)^{-2}$?
- $\dfrac{4}{25}$
+ $\dfrac{25}{4}$
- $-\dfrac{4}{25}$
- $\dfrac{5}{2}$
> Negativni eksponent pomeni, da osnovo obrnemo: $\left(\dfrac{2}{5}\right)^{-2} = \left(\dfrac{5}{2}\right)^2 = \dfrac{25}{4}$. Rezultat $\dfrac{4}{25}$ dobiš, če ulomka ne obrneš, rezultat $\dfrac{5}{2}$ pa, če pozabiš kvadrirati.

? Poenostavi $(2a^3)^2 \cdot a^{-4}$ za $a \neq 0$.
- $2a^2$
+ $4a^2$
- $4a^{10}$
- $4a^{-2}$
> Najprej $(2a^3)^2 = 2^2 \cdot a^{6} = 4a^6$. Nato eksponenta seštejemo: $4a^6 \cdot a^{-4} = 4a^{6-4} = 4a^2$. Rezultat $2a^2$ dobiš, če pozabiš kvadrirati število $2$, rezultat $4a^{10}$ pa, če negativni eksponent prišteješ kot pozitivnega.

? Kako se v znanstvenem zapisu glasi število $0{,}0072$?
- $7{,}2 \cdot 10^{3}$
- $7{,}2 \cdot 10^{-2}$
+ $7{,}2 \cdot 10^{-3}$
- $7{,}2 \cdot 10^{-4}$
> Vejico moramo premakniti za tri mesta v desno, da dobimo število $7{,}2$, zato je eksponent $-3$: $7{,}2 \cdot 10^{-3} = 7{,}2 \cdot 0{,}001 = 0{,}0072$. Pri drugih možnostih bi dobil $7200$, $0{,}072$ ali $0{,}00072$.
