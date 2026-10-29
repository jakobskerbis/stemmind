---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnje lekcije že znaš, da je logaritem eksponent: $\log_a b = x$ pomeni $a^x = b$. Znaš tudi računati z logaritmi in poznaš eksponentno funkcijo $f(x) = a^x$ z njenim grafom. Zdaj bomo logaritem obravnavali kot **funkcijo**: vsakemu pozitivnemu številu $x$ priredimo število $\log_a x$.

Logaritemska funkcija je **obratna (inverzna) funkcija** eksponentne funkcije. Eksponentna funkcija pove, koliko bakterij bo v posodi po $x$ urah, logaritemska pa obratno: po koliko urah jih bo toliko, kot jih želimo. Ker logaritem stisne zelo velika števila na pregledno lestvico, ga srečaš pri pH, decibelih in magnitudi potresov. V tej lekciji spoznaš **graf** in **lastnosti** logaritemske funkcije, se naučiš določiti njeno **definicijsko območje** in rešiti **logaritemske enačbe**. Kako osnova in premiki spremenijo graf, si oglej v interaktivni simulaciji spodaj (»Logaritemska funkcija«).

## Razlaga

**1. Definicija.** Naj bo $a > 0$ in $a \ne 1$. Funkcijo

$$f(x) = \log_a x$$

imenujemo **logaritemska funkcija** z osnovo $a$. Ker je logaritem definiran le za pozitivna števila, je njeno **definicijsko območje** $D_f = (0, \infty)$. Njena **zaloga vrednosti** je $Z_f = \mathbb{R}$: logaritem je lahko poljubno realno število.

**2. Obratna funkcija eksponentne.** Velja $\log_a a^x = x$ in $a^{\log_a x} = x$ za $x > 0$. Funkciji $y = a^x$ in $y = \log_a x$ torej »izničita« druga drugo. Zato se v tabeli vrednosti zamenjata vlogi $x$ in $y$:

| $x$ | $\frac{1}{4}$ | $\frac{1}{2}$ | $1$ | $2$ | $4$ | $8$ |
|---|---|---|---|---|---|---|
| $\log_2 x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |

Graf funkcije $y = \log_a x$ dobimo tako, da graf funkcije $y = a^x$ **prezrcalimo čez premico** $y = x$ (simetralo lihih kvadrantov). Točka $(2, 4)$ na grafu $y = 2^x$ preide v točko $(4, 2)$ na grafu $y = \log_2 x$.

**3. Lastnosti.** Lastnosti so odvisne od tega, ali je osnova večja ali manjša od $1$:

| lastnost | $a > 1$ | $0 < a < 1$ |
|---|---|---|
| definicijsko območje | $(0, \infty)$ | $(0, \infty)$ |
| zaloga vrednosti | $\mathbb{R}$ | $\mathbb{R}$ |
| monotonost | strogo narašča | strogo pada |
| ničla | $x = 1$ | $x = 1$ |
| skozi točko | $(a, 1)$ | $(a, 1)$ |
| asimptota | navpična, os $y$ ($x = 0$) | navpična, os $y$ ($x = 0$) |
| predznak | negativna na $(0, 1)$, pozitivna na $(1, \infty)$ | pozitivna na $(0, 1)$, negativna na $(1, \infty)$ |

Graf vsake logaritemske funkcije gre skozi točko $(1, 0)$, ker je $\log_a 1 = 0$. Os $y$ je **navpična asimptota**: pri $a > 1$ se graf, ko gre $x$ proti $0$, spušča neomejeno navzdol in se osi $y$ približuje, a je nikoli ne doseže. Osi $y$ graf ne seka, ker $0$ ni v definicijskem območju. Za $x > 1$ graf pri $a > 1$ narašča vse počasneje, a ni navzgor omejen: $\log_2 x = 10$ doseže šele pri $x = 1024$.

Grafa funkcij $y = \log_a x$ in $y = \log_{\frac{1}{a}} x$ sta simetrična glede na os $x$, ker je $\log_{\frac{1}{a}} x = -\log_a x$.

**4. Premiki grafa.** Funkcijo $g(x) = \log_a (x - p) + q$ dobimo iz $y = \log_a x$ s premikom za $p$ v smeri osi $x$ in za $q$ v smeri osi $y$:

- asimptota je premica $x = p$,
- definicijsko območje je $(p, \infty)$, ker mora veljati $x - p > 0$,
- točka $(1, 0)$ preide v $(1 + p, q)$.

Pazi na znak: pri $\log_2 (x - 3)$ se graf premakne za $3$ **v desno**, pri $\log_2 (x + 3)$ pa za $3$ **v levo**.

**5. Definicijsko območje sestavljene funkcije.** Če je pod logaritmom izraz, zahtevamo, da je ta izraz **strogo pozitiven**. Za $f(x) = \log_3 (6 - 2x)$ rešimo neenačbo $6 - 2x > 0$ in dobimo $x < 3$, torej $D_f = (-\infty, 3)$. Če je pod logaritmom kvadratni izraz, rešimo kvadratno neenačbo.

**6. Logaritemske enačbe.** V logaritemski enačbi je neznanka v logaritmandu (ali v osnovi). Ker je logaritemska funkcija **injektivna** (strogo monotona), iz enakosti logaritmov z isto osnovo sledi enakost logaritmandov. Glavni tipi:

- $\log_a A = c$: po definiciji zapišemo $A = a^c$.
- $\log_a A = \log_a B$: sklepamo $A = B$.
- Več logaritmov z isto osnovo: s pravili jih **združimo** v en logaritem, na primer $\log_a A + \log_a B = \log_a (A \cdot B)$, nato nadaljujemo kot zgoraj.
- V enačbi nastopata $\log_a x$ in $(\log_a x)^2$: uvedemo **novo neznanko** $t = \log_a x$ in rešimo kvadratno enačbo.

**7. Preizkus je obvezen.** Pri združevanju logaritmov se definicijsko območje lahko razširi, zato lahko dobimo »rešitev«, pri kateri prvotni logaritmi niso definirani. Zato **pred** reševanjem zapišemo pogoje (vsi logaritmandi so pozitivni), **po** reševanju pa vsako rešitev preverimo.

## Rešeni primeri

### Primer 1 (lažji)

Dana je funkcija $f(x) = \log_3 (x - 2) + 1$. Določi njeno definicijsko območje, enačbo asimptote, ničlo in presečišče z osjo $y$ ter izračunaj vrednosti v točkah $x = 3$, $x = 5$ in $x = 11$.

**Podatki:** $f(x) = \log_3 (x - 2) + 1$; osnova $a = 3$, premik $p = 2$ v smeri osi $x$, $q = 1$ v smeri osi $y$; točke $x = 3$, $x = 5$, $x = 11$
**Iščemo:** $D_f$, asimptoto, ničlo, presečišče z osjo $y$ ter $f(3)$, $f(5)$, $f(11)$

:::formula
$g(x) = \log_a (x - p) + q$: $\;D_g = (p, \infty)$, asimptota $x = p$; $\;\log_a A = c \iff A = a^c$
:::

**Rešitev:**

1. Logaritmand mora biti pozitiven: $x - 2 > 0$, torej $x > 2$ in $D_f = (2, \infty)$.
2. Asimptota je navpična premica $x = 2$.
3. Ničla: $\log_3 (x - 2) + 1 = 0$, torej $\log_3 (x - 2) = -1$. Po definiciji je $x - 2 = 3^{-1} = \dfrac{1}{3}$ in $x = \dfrac{7}{3}$.
4. Presečišča z osjo $y$ ni, ker $x = 0$ ni v definicijskem območju.
5. Vrednosti: $f(3) = \log_3 1 + 1 = 1$, $f(5) = \log_3 3 + 1 = 2$, $f(11) = \log_3 9 + 1 = 3$.
6. Ker je $a = 3 > 1$, funkcija strogo narašča.
7. Odgovor: $D_f = (2, \infty)$, asimptota je $x = 2$, ničla je $x = \dfrac{7}{3}$, presečišča z osjo $y$ ni; $f(3) = 1$, $f(5) = 2$ in $f(11) = 3$.

### Primer 2 (srednji)

Reši enačbo $\log_2 (x + 3) + \log_2 (x - 1) = 5$.

**Podatki:** enačba $\log_2 (x + 3) + \log_2 (x - 1) = 5$, osnova $a = 2$
**Iščemo:** vse realne rešitve $x$

:::formula
$\log_a A + \log_a B = \log_a (A \cdot B)$; $\;\log_a C = c \iff C = a^c$
:::

**Rešitev:**

1. Pogoja: $x + 3 > 0$ in $x - 1 > 0$. Oba hkrati veljata za $x > 1$.
2. Logaritma združimo: $\log_2 \big((x + 3)(x - 1)\big) = 5$.
3. Po definiciji: $(x + 3)(x - 1) = 2^5 = 32$.
4. Odpravimo oklepaje: $x^2 + 2x - 3 = 32$, torej $x^2 + 2x - 35 = 0$.
5. Razcepimo: $(x + 7)(x - 5) = 0$, zato je $x_1 = 5$ in $x_2 = -7$.
6. Pogoj $x > 1$ izpolnjuje le $x = 5$. Pri $x = -7$ bi bil $\log_2 (-4)$, ki ni definiran.
7. Preizkus: $\log_2 8 + \log_2 4 = 3 + 2 = 5$. ✓
8. Odgovor: enačba ima eno rešitev, $x = 5$.

### Primer 3 (težji)

Reši enačbo $(\log x)^2 - \log x^3 + 2 = 0$.

**Podatki:** enačba $(\log x)^2 - \log x^3 + 2 = 0$ z desetiškim logaritmom
**Iščemo:** vse realne rešitve $x$

:::formula
$\log_a x^n = n \log_a x$ (za $x > 0$); nova neznanka $t = \log x$; $\;\log x = c \iff x = 10^c$
:::

**Rešitev:**

1. Pogoj: $x > 0$ (tedaj je tudi $x^3 > 0$).
2. Drugi člen preoblikujemo: $\log x^3 = 3 \log x$. Enačba se glasi $(\log x)^2 - 3\log x + 2 = 0$.
3. Uvedemo novo neznanko $t = \log x$: $t^2 - 3t + 2 = 0$.
4. Razcepimo: $(t - 1)(t - 2) = 0$, zato je $t_1 = 1$ in $t_2 = 2$.
5. Vrnemo se k $x$: iz $\log x = 1$ sledi $x = 10^1 = 10$, iz $\log x = 2$ pa $x = 10^2 = 100$.
6. Obe rešitvi sta pozitivni, zato ustrezata pogoju.
7. Preizkus za $x = 10$: $1^2 - \log 1000 + 2 = 1 - 3 + 2 = 0$. ✓ Za $x = 100$: $2^2 - \log 10^6 + 2 = 4 - 6 + 2 = 0$. ✓
8. Odgovor: rešitvi enačbe sta $x = 10$ in $x = 100$.

## Pogoste napake

- **Rešitev brez preizkusa.** V Primeru 2 kvadratna enačba da tudi $x = -7$. Ko logaritme združimo, izraz $\log_2 \big((x + 3)(x - 1)\big)$ obstaja tudi pri $x = -7$, prvotna enačba pa ne. Pravilno: na začetku zapiši pogoje in na koncu vsako rešitev preveri v **prvotni** enačbi.
- **Logaritem vsote razbit na vsoto.** $\log_2 (x + 3) = \log_2 x + \log_2 3$ ne velja; za logaritem vsote ni pravila. Pravilo $\log_a A + \log_a B = \log_a (AB)$ velja le v smeri »vsota logaritmov je logaritem produkta«.
- **Napačna pot od logaritma do potence.** Iz $\log_3 (2x + 1) = 2$ ne sledi $2x + 1 = 3 \cdot 2$ ali $2x + 1 = 2^3$. Osnova se potencira, desna stran je eksponent: $2x + 1 = 3^2 = 9$, torej $x = 4$.
- **Premik v napačno smer.** Graf $y = \log_2 (x + 3)$ ni premaknjen v desno. Asimptoto najdeš tako, da logaritmand izenačiš z nič: $x + 3 = 0$, torej $x = -3$; graf je premaknjen za $3$ v levo in $D = (-3, \infty)$.
- **Kvadrat logaritma zamenjan z logaritmom kvadrata.** $(\log x)^2$ ni enako $\log x^2 = 2\log x$. Pri substituciji $t = \log x$ je $(\log x)^2 = t^2$, $\log x^3$ pa je $3t$.

## Povzetek

- $f(x) = \log_a x$, $a > 0$, $a \ne 1$; $D_f = (0, \infty)$, $Z_f = \mathbb{R}$.
- Graf je zrcalna slika grafa $y = a^x$ čez premico $y = x$; gre skozi $(1, 0)$ in $(a, 1)$, os $y$ je navpična asimptota.
- Za $a > 1$ funkcija strogo narašča, za $0 < a < 1$ strogo pada.
- $g(x) = \log_a (x - p) + q$: asimptota $x = p$, $D_g = (p, \infty)$.
- Definicijsko območje: izraz pod logaritmom mora biti strogo pozitiven.
- Enačbe: $\log_a A = c \Rightarrow A = a^c$; $\;\log_a A = \log_a B \Rightarrow A = B$; po potrebi $t = \log_a x$.
- Na začetku zapiši pogoje, na koncu naredi preizkus.

## Drugače: Na sliki

Predstavljaj si koordinatni sistem, v katerem je s črtkano črto narisana premica $y = x$. Nad njo leži graf $y = 2^x$: gre skozi točke $(0, 1)$, $(1, 2)$, $(2, 4)$ in se na levi približuje osi $x$. Zdaj si predstavljaj, da list prepogneš po črtkani premici. Graf $y = 2^x$ se odtisne na drugo stran in nastane graf $y = \log_2 x$ skozi točke $(1, 0)$, $(2, 1)$, $(4, 2)$.

Pri prepogibu se vse zamenja: os $x$ postane os $y$, zato se vodoravna asimptota $y = 0$ eksponentne funkcije spremeni v navpično asimptoto $x = 0$ logaritemske. Zaloga vrednosti $(0, \infty)$ eksponentne funkcije postane definicijsko območje logaritemske. Zato graf logaritemske funkcije v celoti leži desno od osi $y$. V interaktivni simulaciji spodaj spreminjaj osnovo $a$ in opazuj: pri $a > 1$ graf narašča, pri $0 < a < 1$ pada. Graf za osnovo $\frac{1}{2}$ je zrcalna slika grafa za osnovo $2$ čez os $x$. Točka $(1, 0)$ pa ostane na mestu pri vsaki osnovi.

## Drugače: Iz vsakdanjega življenja

Zamisli si igro: prijatelj si izmisli celo število med $1$ in $1\,000\,000$, ti pa ugibaš, on pa odgovarja le »več« ali »manj«. Najboljša strategija je, da vsakič vprašaš po sredini intervala in tako število možnosti razpoloviš. Po $n$ vprašanjih ostane približno $\dfrac{1\,000\,000}{2^n}$ možnosti. Igra je končana, ko ostane ena, torej ko je $2^n \ge 1\,000\,000$. Rešitev je $n \ge \log_2 1\,000\,000 \approx 19{,}93$, torej zadošča $20$ vprašanj.

Pri $1000$ številih zadošča $10$ vprašanj, pri milijardi pa le $30$. To je značilnost logaritemske funkcije: ko se $x$ tisočkrat poveča, se $\log_2 x$ poveča le za približno $10$. Graf narašča, a vse bolj položno. Na tem počasnem naraščanju temeljijo iskanje po slovarju, iskanje po urejenih podatkih v računalniku in logaritemske lestvice, kot je magnituda potresa, kjer potres z magnitudo za $1$ večjo pomeni desetkrat večjo amplitudo nihanja tal.

## Drugače: Korak za korakom s številkami

**Določi definicijsko območje funkcije $f(x) = \log (x^2 - x - 6)$.**

1. Zapišemo pogoj: logaritmand mora biti strogo pozitiven, $x^2 - x - 6 > 0$.
2. Poiščemo ničle kvadratnega izraza: $x^2 - x - 6 = (x - 3)(x + 2)$, ničli sta $x = -2$ in $x = 3$.
3. Vodilni koeficient je $1 > 0$, zato je parabola odprta navzgor in je izraz pozitiven **zunaj** ničel.
4. Preverimo s testnimi točkami: pri $x = 0$ je $-6 < 0$ (ne ustreza), pri $x = 4$ je $16 - 4 - 6 = 6 > 0$ (ustreza), pri $x = -3$ je $9 + 3 - 6 = 6 > 0$ (ustreza).
5. Ničli nista vključeni, ker je neenačba stroga.
6. Odgovor: $D_f = (-\infty, -2) \cup (3, \infty)$.

**Tabela za risanje grafa $y = \log_{\frac{1}{2}} x$.**

1. Izberemo $x$, ki so potence osnove $\frac{1}{2}$: $\frac{1}{4}$, $\frac{1}{2}$, $1$, $2$, $4$.
2. Ker je $\log_{\frac{1}{2}} x = -\log_2 x$, dobimo vrednosti $2$, $1$, $0$, $-1$, $-2$.
3. Točke povežemo z gladko krivuljo, ki pada in se ob osi $y$ dviga neomejeno navzgor.

## Drugače: Bolj natančno

**Zakaj je logaritemska funkcija dobro definirana obratna funkcija.** Za $a > 0$, $a \ne 1$ je funkcija $x \mapsto a^x$ strogo monotona, zato je injektivna, njena zaloga vrednosti pa je $(0, \infty)$. Tako je bijektivna preslikava iz $\mathbb{R}$ na $(0, \infty)$ in ima obratno funkcijo z definicijskim območjem $(0, \infty)$ in zalogo vrednosti $\mathbb{R}$. To je $\log_a x$. Ker sta grafa obratnih funkcij zrcalna glede na $y = x$, obratna funkcija podeduje monotonost: pri $a > 1$ narašča, pri $0 < a < 1$ pada.

**Injektivnost in sklep $A = B$.** Iz $\log_a A = \log_a B$ sledi $A = B$ ravno zato, ker strogo monotona funkcija nobene vrednosti ne zavzame dvakrat. Obratni sklep zahteva previdnost: iz $A = B$ sledi $\log_a A = \log_a B$ le, če sta $A$ in $B$ pozitivna.

**Pravila spremenijo definicijsko območje.** Izraz $\log x^2$ je definiran za vsak $x \ne 0$, izraz $2 \log x$ pa le za $x > 0$. Splošno velja $\log x^2 = 2 \log |x|$. Enačba $\log x^2 = 2$ ima zato rešitvi $x = 10$ in $x = -10$, enačba $2\log x = 2$ pa le $x = 10$. Če bi prvo enačbo slepo preoblikoval v drugo, bi rešitev $x = -10$ **izgubil**. Pri združevanju logaritmov (Primer 2) pa se lahko pojavi **odvečna** rešitev. Zato so pogoji in preizkus del pravilne rešitve, ne le dodatek.

## Preveri se

? Kakšno je definicijsko območje funkcije $f(x) = \log_2 (x - 5)$?
- $(-5, \infty)$
+ $(5, \infty)$
- $[5, \infty)$
- $\mathbb{R}$
> Logaritmand mora biti strogo pozitiven: $x - 5 > 0$, torej $x > 5$. Točka $x = 5$ ni vključena, ker $\log_2 0$ ne obstaja.

? Katera je rešitev enačbe $\log_3 (2x + 1) = 2$?
- $x = 2{,}5$
- $x = 1$
+ $x = 4$
- $x = 3{,}5$
> Po definiciji je $2x + 1 = 3^2 = 9$, zato je $x = 4$. Preizkus: $\log_3 9 = 2$.

? Za katere osnove $a$ je funkcija $f(x) = \log_a x$ padajoča?
- za $a > 1$
+ za $0 < a < 1$
- za $a < 0$
> Pri osnovi med $0$ in $1$ je logaritemska funkcija strogo padajoča, na primer $\log_{\frac{1}{2}} 4 = -2 < \log_{\frac{1}{2}} 2 = -1$. Negativna osnova ni dovoljena.

? Katere so rešitve enačbe $\log x + \log (x - 3) = 1$?
- $x = 5$ in $x = -2$
+ samo $x = 5$
- samo $x = -2$
- enačba nima rešitve
> Pogoj je $x > 3$. Združimo: $x(x - 3) = 10$, $x^2 - 3x - 10 = 0$, $(x - 5)(x + 2) = 0$. Pogoju ustreza le $x = 5$; preizkus: $\log 5 + \log 2 = \log 10 = 1$.
