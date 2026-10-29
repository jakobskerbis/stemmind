---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Pri eksponentnih enačbah si reševal naloge, kot je $2^x = 32$: desno stran si zapisal kot $2^5$ in prebral $x = 5$. Kaj pa enačba $2^x = 5$? Število $5$ ni potenca števila $2$ s celim eksponentom, rešitev pa vseeno obstaja, saj graf funkcije $y = 2^x$ seka premico $y = 5$ nekje med $x = 2$ in $x = 3$. To število potrebuje svoje ime in svoj zapis. Imenujemo ga **logaritem** in pišemo $\log_2 5$.

Logaritem odgovarja na vprašanje: **»Na katero potenco moram dvigniti osnovo, da dobim dano število?«** Z njim merimo kislost raztopin (pH), glasnost zvoka (decibeli) in moč potresov, izračunamo, kdaj se vloga v banki podvoji, ali koliko let mine, da se število prebivalcev podeseteri. V tej lekciji spoznaš definicijo logaritma, **pravila za računanje** z logaritmi in **prehod na novo osnovo**, s katerim izračunaš logaritem s poljubno osnovo na žepnem računalu.

## Razlaga

**1. Definicija.** Naj bo $a > 0$, $a \ne 1$ in $b > 0$. **Logaritem** števila $b$ z osnovo $a$ je eksponent, na katerega moramo potencirati $a$, da dobimo $b$:

$$\log_a b = x \iff a^x = b.$$

Število $a$ imenujemo **osnova**, število $b$ pa **logaritmand**. Na primer $\log_2 32 = 5$, ker je $2^5 = 32$, in $\log_3 \dfrac{1}{9} = -2$, ker je $3^{-2} = \dfrac{1}{9}$. Logaritem je torej **eksponent**; to si zapomni, ker iz tega sledi vse ostalo.

**2. Pogoji.** Osnova mora biti pozitivna in različna od $1$, sicer potenca $a^x$ ne zavzame vseh pozitivnih vrednosti natanko enkrat. Logaritmand mora biti **pozitiven**, ker je $a^x > 0$ za vsak $x$. Izrazi $\log_2 0$, $\log_2 (-4)$ in $\log_1 5$ niso definirani. Logaritem sam pa je lahko negativen, nič ali pozitiven.

**3. Posebni vrednosti in osnovni zvezi.** Iz definicije neposredno sledi:

$$\log_a 1 = 0, \qquad \log_a a = 1, \qquad \log_a a^x = x, \qquad a^{\log_a b} = b.$$

Zadnji dve zvezi povesta, da potenciranje z osnovo $a$ in logaritmiranje z osnovo $a$ »izničita« drugo drugo.

**4. Posebni osnovi.** Logaritem z osnovo $10$ imenujemo **desetiški logaritem** in ga pišemo brez osnove: $\log b = \log_{10} b$. Velja $\log 1000 = 3$, $\log 1 = 0$, $\log 0{,}01 = -2$. Logaritem z osnovo $\mathrm{e} \approx 2{,}718$ je **naravni logaritem**, pišemo $\ln b = \log_{\mathrm{e}} b$. Za ti dve osnovi ima vsako žepno računalo tipki »log« in »ln«.

**5. Pravila za računanje.** Za $a > 0$, $a \ne 1$, $x, y > 0$ in realno število $n$ velja:

| Pravilo | Z besedami | Primer |
|---|---|---|
| $\log_a (x \cdot y) = \log_a x + \log_a y$ | logaritem produkta je vsota logaritmov | $\log_2 (4 \cdot 8) = 2 + 3 = 5$ |
| $\log_a \dfrac{x}{y} = \log_a x - \log_a y$ | logaritem kvocienta je razlika logaritmov | $\log 50 - \log 5 = \log 10 = 1$ |
| $\log_a x^n = n \cdot \log_a x$ | eksponent gre pred logaritem | $\log_3 9^5 = 5 \cdot 2 = 10$ |
| $\log_a \sqrt[n]{x} = \dfrac{1}{n} \log_a x$ | posebni primer prejšnjega | $\log_2 \sqrt{8} = \dfrac{3}{2}$ |

Pravila so »prevod« pravil za potence: pri množenju potenc se eksponenti seštejejo, pri deljenju odštejejo, pri potenciranju pomnožijo. Logaritem je eksponent, zato se logaritmi obnašajo enako. Dokaz prvega pravila: označimo $u = \log_a x$ in $v = \log_a y$, torej $x = a^u$, $y = a^v$. Potem je $x \cdot y = a^{u+v}$ in po definiciji $\log_a (xy) = u + v$.

Pravila uporabljamo v obe smeri: izraz **razčlenimo** (logaritem produkta zapišemo kot vsoto) ali **združimo** (vsoto logaritmov zapišemo kot en logaritem).

**6. Prehod na novo osnovo.** Logaritem z osnovo $a$ lahko izrazimo z logaritmi s katerokoli drugo osnovo $c$ ($c > 0$, $c \ne 1$):

$$\log_a b = \frac{\log_c b}{\log_c a}.$$

Izpeljava: naj bo $x = \log_a b$, torej $a^x = b$. Obe strani logaritmiramo z osnovo $c$ in uporabimo pravilo za potenco: $x \cdot \log_c a = \log_c b$. Delimo z $\log_c a$ (ki ni $0$, ker je $a \ne 1$) in dobimo formulo. V praksi najpogosteje vzamemo $c = 10$ ali $c = \mathrm{e}$:

$$\log_a b = \frac{\log b}{\log a} = \frac{\ln b}{\ln a}.$$

Tako izračunamo tudi število z začetka: $\log_2 5 = \dfrac{\log 5}{\log 2} \approx \dfrac{0{,}69897}{0{,}30103} \approx 2{,}3219$. Preizkus: $2^{2{,}3219} \approx 5{,}000$. Posledica formule je še zveza $\log_a b \cdot \log_b a = 1$, na primer $\log_2 8 \cdot \log_8 2 = 3 \cdot \dfrac{1}{3} = 1$.

## Rešeni primeri

### Primer 1 (lažji)

Po definiciji izračunaj: a) $\log_2 32$, b) $\log_3 \dfrac{1}{9}$, c) $\log_4 8$, d) $\log 0{,}001$.

**Podatki:** logaritmi $\log_2 32$, $\log_3 \dfrac{1}{9}$, $\log_4 8$ in $\log 0{,}001$ (desetiški)
**Iščemo:** vrednost vsakega logaritma

:::formula
$\log_a b = x \iff a^x = b$; $\;\dfrac{1}{a^n} = a^{-n}$, $\;a^{\frac{m}{n}} = \sqrt[n]{a^m}$
:::

**Rešitev:**

1. a) Iščemo $x$, za katerega je $2^x = 32$. Ker je $32 = 2^5$, je $\log_2 32 = 5$.
2. b) Iščemo $x$, za katerega je $3^x = \dfrac{1}{9}$. Ker je $\dfrac{1}{9} = 3^{-2}$, je $\log_3 \dfrac{1}{9} = -2$.
3. c) Iščemo $x$, za katerega je $4^x = 8$. Obe števili zapišemo s potenco števila $2$: $2^{2x} = 2^3$, zato je $2x = 3$ in $x = \dfrac{3}{2}$. Preizkus: $4^{\frac{3}{2}} = \left(\sqrt{4}\right)^3 = 2^3 = 8$.
4. d) Iščemo $x$, za katerega je $10^x = 0{,}001 = \dfrac{1}{1000} = 10^{-3}$, torej $\log 0{,}001 = -3$.
5. Odgovor: $\log_2 32 = 5$, $\log_3 \dfrac{1}{9} = -2$, $\log_4 8 = \dfrac{3}{2}$ in $\log 0{,}001 = -3$.

### Primer 2 (srednji)

Brez računala izračunaj: a) $\log_6 9 + \log_6 4$, b) $2\log_3 6 - \log_3 4$.

**Podatki:** izraza $\log_6 9 + \log_6 4$ in $2\log_3 6 - \log_3 4$
**Iščemo:** vrednost vsakega izraza

:::formula
$\log_a x + \log_a y = \log_a (xy)$, $\;\log_a x - \log_a y = \log_a \dfrac{x}{y}$, $\;n \log_a x = \log_a x^n$
:::

**Rešitev:**

1. a) Posamezna logaritma nista »lepi« števili, vsota pa je: $\log_6 9 + \log_6 4 = \log_6 (9 \cdot 4) = \log_6 36$.
2. Ker je $6^2 = 36$, je $\log_6 36 = 2$.
3. b) Najprej koeficient $2$ prenesemo v eksponent: $2\log_3 6 = \log_3 6^2 = \log_3 36$.
4. Nato uporabimo pravilo za razliko: $\log_3 36 - \log_3 4 = \log_3 \dfrac{36}{4} = \log_3 9 = 2$.
5. Preverjanje z računalom: $\log_6 9 \approx 1{,}2263$ in $\log_6 4 \approx 0{,}7737$, vsota je $2{,}0000$.
6. Odgovor: vrednost obeh izrazov je $2$.

### Primer 3 (težji)

Znano je $\log 2 \approx 0{,}3010$ in $\log 3 \approx 0{,}4771$. Brez tipke »log« na računalu izračunaj a) $\log 72$ in b) $\log_6 24$. Rezultat b) zaokroži na tri decimalke.

**Podatki:** $\log 2 \approx 0{,}3010$, $\log 3 \approx 0{,}4771$; izraza $\log 72$ in $\log_6 24$; zaokrožimo na tri decimalke
**Iščemo:** približni vrednosti $\log 72$ in $\log_6 24$

:::formula
$\log (xy) = \log x + \log y$, $\;\log x^n = n \log x$, $\;\log_a b = \dfrac{\log b}{\log a}$
:::

**Rešitev:**

1. a) Število $72$ razcepimo na prafaktorje: $72 = 8 \cdot 9 = 2^3 \cdot 3^2$.
2. $\log 72 = \log 2^3 + \log 3^2 = 3\log 2 + 2\log 3 \approx 3 \cdot 0{,}3010 + 2 \cdot 0{,}4771 = 0{,}9030 + 0{,}9542 = 1{,}8572$.
3. b) Prehod na desetiški logaritem: $\log_6 24 = \dfrac{\log 24}{\log 6}$.
4. Razcepimo: $24 = 2^3 \cdot 3$ in $6 = 2 \cdot 3$. Zato je $\log 24 = 3\log 2 + \log 3 \approx 0{,}9030 + 0{,}4771 = 1{,}3801$ in $\log 6 = \log 2 + \log 3 \approx 0{,}7781$.
5. $\log_6 24 \approx \dfrac{1{,}3801}{0{,}7781} \approx 1{,}7737$, zaokroženo $1{,}774$.
6. Smiselnost: $6^1 = 6$ in $6^2 = 36$, število $24$ leži vmes, zato mora biti $\log_6 24$ med $1$ in $2$. Ujema se.
7. Odgovor: $\log 72 \approx 1{,}857$ in $\log_6 24 \approx 1{,}774$.

## Pogoste napake

- **Logaritem vsote.** $\log (x + y) = \log x + \log y$ ne velja. Pravilo za vsoto logaritmov govori o **produktu**: $\log x + \log y = \log (xy)$. Preizkus: $\log (10 + 10) = \log 20 \approx 1{,}30$, $\log 10 + \log 10 = 2$. Za logaritem vsote ni posebnega pravila.
- **Kvocient logaritmov namesto logaritma kvocienta.** $\dfrac{\log x}{\log y}$ ni enako $\log \dfrac{x}{y}$. Prvi izraz je po prehodu na novo osnovo $\log_y x$, drugi pa $\log x - \log y$. Primer: $\dfrac{\log 100}{\log 10} = 2$, a $\log \dfrac{100}{10} = 1$.
- **Zamenjana števec in imenovalec pri prehodu.** $\log_2 8 = \dfrac{\log 2}{\log 8} = \dfrac{1}{3}$ je napačno. Logaritmand gre v števec, osnova v imenovalec: $\log_2 8 = \dfrac{\log 8}{\log 2} = 3$. Hitri preizkus smiselnosti: $2^3 = 8$.
- **Kvadrat logaritma in logaritem kvadrata.** $\left(\log x\right)^2$ ni isto kot $\log x^2$. Pravilo $\log x^2 = 2\log x$ velja le, ko je eksponent na logaritmandu. Za $x = 1000$: $\left(\log 1000\right)^2 = 9$, $\log 1000^2 = 6$.
- **Logaritem ničle ali negativnega števila.** $\log_2 0 = 0$ ali $\log_3 (-9) = -2$ ni res. Logaritmand mora biti pozitiven, ker nobena potenca s pozitivno osnovo ni $0$ ali negativna. Pazi tudi: $\log_a 1 = 0$, ne $1$, ker je $a^0 = 1$.

## Povzetek

- $\log_a b = x \iff a^x = b$; pogoji: $a > 0$, $a \ne 1$, $b > 0$. Logaritem je eksponent.
- $\log_a 1 = 0$, $\log_a a = 1$, $\log_a a^x = x$, $a^{\log_a b} = b$.
- $\log b = \log_{10} b$ (desetiški), $\ln b = \log_{\mathrm{e}} b$ (naravni).
- $\log_a (xy) = \log_a x + \log_a y$, $\;\log_a \dfrac{x}{y} = \log_a x - \log_a y$.
- $\log_a x^n = n \log_a x$, posebej $\log_a \sqrt[n]{x} = \dfrac{1}{n}\log_a x$.
- Prehod na novo osnovo: $\log_a b = \dfrac{\log_c b}{\log_c a} = \dfrac{\log b}{\log a}$.
- Za logaritem vsote ali razlike ni pravila.

## Drugače: Na sliki

Nariši tabelo potenc števila $2$ in jo beri v obe smeri:

| eksponent $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|---|---|
| potenca $2^x$ | $\frac{1}{4}$ | $\frac{1}{2}$ | $1$ | $2$ | $4$ | $8$ | $16$ | $32$ |

Če bereš od zgoraj navzdol, potenciraš. Če bereš od spodaj navzgor, logaritmiraš: nad $16$ piše eksponent $4$, zato je $\log_2 16 = 4$. Število $5$ v spodnji vrstici manjka, leži med $4$ in $8$, zato je $\log_2 5$ med $2$ in $3$.

Enako lahko narediš na grafu funkcije $y = 2^x$: namesto da od osi $x$ greš navpično do krivulje, greš z osi $y$ (pri višini $5$) vodoravno do krivulje in nato navpično navzdol na os $x$. Prebrana abscisa, približno $2{,}32$, je $\log_2 5$. Če graf prezrcališ čez simetralo lihih kvadrantov $y = x$, dobiš krivuljo, s katere logaritme bereš kar navpično. To pokaže interaktivna simulacija spodaj (»Logaritem kot obratna funkcija«).

## Drugače: Iz vsakdanjega življenja

**Kislost (pH).** Kemiki kislost raztopine opišejo s številom $\mathrm{pH} = -\log c$, kjer je $c$ množinska koncentracija oksonijevih ionov $\mathrm{H_3O^+}$ v $\text{mol/L}$. Pri $c = 0{,}001\,\text{mol/L} = 10^{-3}\,\text{mol/L}$ je $\mathrm{pH} = -(-3) = 3$, kar je približno kislost kisa. Čista voda ima $c = 10^{-7}\,\text{mol/L}$ in $\mathrm{pH} = 7$. Ker je lestvica logaritemska, je raztopina s $\mathrm{pH} = 3$ **desetkrat** bolj kisla od raztopine s $\mathrm{pH} = 4$, ne le malo bolj.

**Decibeli.** Glasnost zvoka v decibelih izračunamo po $L = 10 \log \dfrac{I}{I_0}$, kjer je $I$ jakost zvoka, $I_0$ pa jakost na pragu slišnosti. Če jakost podvojiš (na primer dva enaka zvočnika namesto enega), se glasnost poveča za $10 \log 2 \approx 3\,\text{dB}$, ne za dvakrat. Tu deluje pravilo za logaritem produkta: $\log (2 \cdot I) = \log 2 + \log I$.

Logaritme uporabljamo povsod, kjer se količine razlikujejo za veliko velikostnih redov, saj jih stisnejo na pregledno lestvico.

## Drugače: Korak za korakom s številkami

**Razčleni $\log_a \dfrac{x^3 \sqrt{y}}{z^2}$ za $x, y, z > 0$.**

1. Kvocient: $\log_a \left(x^3 \sqrt{y}\right) - \log_a z^2$.
2. Produkt v števcu: $\log_a x^3 + \log_a \sqrt{y} - \log_a z^2$.
3. Potence: $\sqrt{y} = y^{\frac{1}{2}}$, zato dobimo $3\log_a x + \dfrac{1}{2}\log_a y - 2\log_a z$.

**Izračunaj $\log_3 20$ z računalom.**

1. Če ima računalo le »log« in »ln«, uporabimo prehod na novo osnovo: $\log_3 20 = \dfrac{\log 20}{\log 3}$.
2. $\log 20 \approx 1{,}30103$ in $\log 3 \approx 0{,}47712$.
3. Delimo: $\dfrac{1{,}30103}{0{,}47712} \approx 2{,}7268$.
4. Preverimo smiselnost: $3^2 = 9 < 20 < 27 = 3^3$, zato mora biti rezultat med $2$ in $3$.
5. Z naravnim logaritmom dobimo isto: $\dfrac{\ln 20}{\ln 3} \approx \dfrac{2{,}99573}{1{,}09861} \approx 2{,}7268$.

## Drugače: Bolj natančno

**Logaritem je dobro definiran.** Za $a > 0$, $a \ne 1$ je funkcija $x \mapsto a^x$ strogo monotona in njena zaloga vrednosti je interval $(0, \infty)$. Zato za vsak $b > 0$ obstaja **natanko en** $x$, da je $a^x = b$. Prav to število označimo z $\log_a b$. Obstoj zagotavlja zaloga vrednosti, enoličnost pa monotonost. Za $a = 1$ bi bila enačba $1^x = b$ rešljiva le pri $b = 1$, in to s poljubnim $x$, zato osnova $1$ ni dovoljena.

**Dokaz pravila za potenco.** Naj bo $u = \log_a x$, torej $x = a^u$. Potem je $x^n = \left(a^u\right)^n = a^{nu}$, zato je $\log_a x^n = nu = n\log_a x$. Pravilo za kvocient dobimo iz pravil za produkt in potenco: $\log_a \dfrac{x}{y} = \log_a \left(x \cdot y^{-1}\right) = \log_a x - \log_a y$.

**Posledice prehoda na novo osnovo.** Če v formuli vzamemo $c = b$ (za $b \ne 1$), dobimo $\log_a b = \dfrac{1}{\log_b a}$. Prav tako velja $\log_{a^k} b = \dfrac{1}{k}\log_a b$, na primer $\log_4 8 = \dfrac{1}{2}\log_2 8 = \dfrac{3}{2}$, kar se ujema s Primerom 1. Ker so logaritmi z osnovo $a$ sorazmerni logaritmom z osnovo $c$ ($\log_a b = \dfrac{1}{\log_c a} \cdot \log_c b$ za vsak $b > 0$), je na računalu dovolj ena sama osnova.

## Preveri se

? Koliko je $\log_3 81$?
- $27$
+ $4$
- $3$
- $\dfrac{1}{4}$
> $3^4 = 81$, zato je $\log_3 81 = 4$. Logaritem je eksponent, ne kvocient.

? Koliko je $\log_2 12 - \log_2 3$?
- $\log_2 9$
+ $2$
- $4$
- $\log_2 36$
> Razlika logaritmov je logaritem kvocienta: $\log_2 \dfrac{12}{3} = \log_2 4 = 2$.

? Kateri izraz je enak $\log_5 7$?
+ $\dfrac{\log 7}{\log 5}$
- $\dfrac{\log 5}{\log 7}$
- $\log 7 - \log 5$
- $\log \dfrac{7}{5}$
> Pri prehodu na novo osnovo gre logaritmand v števec, osnova v imenovalec: $\log_5 7 = \dfrac{\log 7}{\log 5} \approx 1{,}209$.

? Koliko je $\log 1000 + \log 0{,}01$?
+ $1$
- $5$
- $-6$
- $10$
> $\log 1000 = 3$ in $\log 0{,}01 = -2$, vsota je $1$. Isto dobiš kot $\log (1000 \cdot 0{,}01) = \log 10 = 1$.
