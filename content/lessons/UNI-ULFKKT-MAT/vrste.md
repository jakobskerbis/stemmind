---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Ali lahko seštejemo neskončno mnogo števil in dobimo končen rezultat? Že v gimnaziji si videl, da je $0{,}\overline{3} = 0{,}3 + 0{,}03 + 0{,}003 + \dots = \tfrac13$. Tak neskončen seštevek imenujemo **vrsta**. Vrste so eno osrednjih orodij matematične analize in njenih uporab: z njimi računamo vrednosti funkcij, kot so $\mathrm{e}^x$, $\sin x$ in $\ln x$ (tako to počne kalkulator), rešujemo diferencialne enačbe, približno računamo integrale, ki jih ne znamo izračunati natančno, in opisujemo periodične pojave.

V uporabi vrste srečaš na vsakem koraku: pri kopičenju zdravila v telesu ob rednem jemanju, pri obrestnem računu, pri populacijskih modelih v biologiji, pri približkih v fiziki in kemiji (»za majhne $x$ je $\ln(1 + x) \approx x$«) in pri ocenjevanju napake numeričnih metod. Ključno vprašanje je vedno isto: ali vrsta **konvergira** in koliko je njena vsota.

V tej lekciji se naučiš:

- kaj je **številska vrsta**, njene **delne vsote** in kdaj **konvergira**,
- sešteti **geometrijsko vrsto**,
- uporabljati **kriterije konvergence** (potrebni pogoj, primerjalni, kvocientni, korenski, integralski, Leibnizov),
- ločiti **absolutno** in **pogojno konvergenco**,
- določiti **konvergenčni polmer** in območje **potenčne vrste**.

## Razlaga

**1. Številska vrsta in delne vsote.** Naj bo $(a_n)_{n \ge 1}$ zaporedje realnih števil. Izraz

$$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \dots$$

imenujemo **številska vrsta**, $a_n$ je njen **splošni člen**. Za vsak $n$ definiramo **delno vsoto** $S_n = a_1 + a_2 + \dots + a_n$. Vrsta **konvergira**, če zaporedje delnih vsot $(S_n)$ konvergira; limito $S = \lim_{n \to \infty} S_n$ imenujemo **vsota vrste** in pišemo $\sum a_n = S$. Če limita ne obstaja (ali je neskončna), vrsta **divergira**.

Vrsta je torej le drug zapis za zaporedje delnih vsot. Vsota vrste ni »seštevek neskončno členov«, ampak limita.

**2. Geometrijska vrsta.** Za $a \ne 0$ in količnik $q$ je

$$\sum_{n=0}^{\infty} a\,q^n = a + aq + aq^2 + \dots$$

Delna vsota (za $q \ne 1$) je $S_n = a\,\dfrac{1 - q^{n+1}}{1 - q}$. Če je $|q| < 1$, gre $q^{n+1} \to 0$ in

$$\sum_{n=0}^{\infty} a\,q^n = \frac{a}{1 - q}, \qquad |q| < 1.$$

Če je $|q| \ge 1$, vrsta divergira. Pravilo »vsota = prvi člen deljeno z $(1 - q)$« velja ne glede na to, pri katerem indeksu se vrsta začne.

**3. Lastnosti.** Če konvergirata $\sum a_n$ in $\sum b_n$, konvergira tudi $\sum(\alpha a_n + \beta b_n) = \alpha\sum a_n + \beta\sum b_n$. Konvergenca se ne spremeni, če spremenimo, dodamo ali odvzamemo končno mnogo členov (vsota se seveda spremeni).

**4. Potrebni pogoj.** Če vrsta $\sum a_n$ konvergira, potem je $\lim_{n \to \infty} a_n = 0$. Obratno ne velja: **harmonična vrsta** $\sum \dfrac1n$ ima $a_n \to 0$, pa vendar divergira. Pogoj zato uporabljamo le za dokaz divergence: če $a_n \not\to 0$, vrsta divergira.

**5. Vrste s pozitivnimi členi.** Če je $a_n \ge 0$, so delne vsote naraščajoče; vrsta konvergira natanko tedaj, ko so delne vsote omejene. Za takšne vrste imamo kriterije:

- **Primerjalni kriterij.** Naj bo $0 \le a_n \le b_n$ za vse dovolj velike $n$. Če $\sum b_n$ konvergira, konvergira tudi $\sum a_n$. Če $\sum a_n$ divergira, divergira tudi $\sum b_n$.
- **Limitni primerjalni kriterij.** Če je $a_n, b_n > 0$ in $\lim a_n/b_n = L$ z $0 < L < \infty$, vrsti hkrati konvergirata ali divergirata.
- **Kvocientni (d'Alembertov) kriterij.** Naj bo $L = \lim \dfrac{a_{n+1}}{a_n}$. Pri $L < 1$ vrsta konvergira, pri $L > 1$ divergira, pri $L = 1$ kriterij ne odloči.
- **Korenski (Cauchyjev) kriterij.** Naj bo $L = \lim \sqrt[n]{a_n}$. Pri $L < 1$ konvergira, pri $L > 1$ divergira, pri $L = 1$ ne odloči.
- **Integralski kriterij.** Če je $f$ pozitivna in padajoča na $[1, \infty)$ in $a_n = f(n)$, potem $\sum a_n$ konvergira natanko tedaj, ko konvergira posplošeni integral $\int_1^\infty f(x)\,\mathrm{d}x$.

Iz integralskega kriterija dobimo pomembno družino za primerjanje: **posplošena harmonična vrsta**

$$\sum_{n=1}^{\infty} \frac{1}{n^p} \quad \text{konvergira natanko tedaj, ko je } p > 1.$$

Tako $\sum \frac{1}{n^2}$ konvergira (vsota je $\pi^2/6$), $\sum \frac{1}{\sqrt n}$ pa divergira.

**Kako izbrati kriterij.** Pri racionalnih izrazih v $n$ (npr. $\frac{n}{n^3 + 1}$) primerjaj s $\frac{1}{n^p}$, kjer je $p$ razlika stopenj imenovalca in števca. Pri potencah $c^n$ in fakultetah $n!$ uporabi kvocientni kriterij, pri izrazih oblike $(\dots)^n$ korenskega.

**6. Alternirajoče vrste.** Vrsta oblike $\sum (-1)^{n+1} b_n$ z $b_n > 0$ je **alternirajoča**. **Leibnizov kriterij:** če $b_n$ monotono pada in $\lim b_n = 0$, vrsta konvergira. Za napako velja ocena $|S - S_n| \le b_{n+1}$. Primer: $1 - \frac12 + \frac13 - \frac14 + \dots$ konvergira (vsota je $\ln 2$).

**7. Absolutna in pogojna konvergenca.** Vrsta $\sum a_n$ **absolutno konvergira**, če konvergira $\sum |a_n|$. Velja: **absolutna konvergenca implicira konvergenco**. Vrsta, ki konvergira, a ne absolutno, **pogojno konvergira**; primer je $\sum \frac{(-1)^{n+1}}{n}$. Pri absolutno konvergentnih vrstah lahko člene poljubno prerazporedimo in vsota ostane enaka, pri pogojno konvergentnih pa ne.

**8. Potenčne vrste.** Vrsta oblike

$$\sum_{n=0}^{\infty} c_n\,(x - x_0)^n$$

je **potenčna vrsta** s središčem $x_0$. Za vsako potenčno vrsto obstaja **konvergenčni polmer** $R \in [0, \infty]$: vrsta absolutno konvergira za $|x - x_0| < R$ in divergira za $|x - x_0| > R$. Na robu ($|x - x_0| = R$) lahko konvergira ali divergira, zato robni točki preverimo posebej. Polmer pogosto izračunamo s

$$R = \lim_{n \to \infty}\left|\frac{c_n}{c_{n+1}}\right| \qquad \text{ali} \qquad \frac1R = \lim_{n \to \infty}\sqrt[n]{|c_n|},$$

če limiti obstajata. Znane potenčne (Taylorjeve) vrste:

$$\frac{1}{1 - x} = \sum_{n=0}^\infty x^n\ (|x| < 1), \quad \mathrm{e}^x = \sum_{n=0}^\infty \frac{x^n}{n!}\ (x \in \mathbb{R}), \quad \ln(1 + x) = \sum_{n=1}^\infty \frac{(-1)^{n+1}x^n}{n}\ (-1 < x \le 1).$$

Znotraj konvergenčnega intervala lahko potenčno vrsto členoma odvajamo in integriramo; polmer se pri tem ne spremeni.

## Rešeni primeri

### Primer 1 (lažji)

Izračunaj vsoto vrste $\displaystyle\sum_{n=1}^{\infty} \frac{2^{n+1}}{3^n}$.

**Podatki:** splošni člen $a_n = \dfrac{2^{n+1}}{3^n}$, seštevamo od $n = 1$ do $\infty$
**Iščemo:** vsoto vrste $S$

:::formula
Geometrijska vrsta: $\displaystyle\sum a\,q^{k} = \frac{\text{prvi člen}}{1 - q}$ za $|q| < 1$.
:::

**Rešitev:**

1. Zapišemo člen kot potenco: $\dfrac{2^{n+1}}{3^n} = 2 \cdot \left(\dfrac23\right)^n$.
2. To je geometrijska vrsta s količnikom $q = \frac23$; ker je $|q| < 1$, konvergira.
3. Prvi člen ($n = 1$): $a_1 = 2 \cdot \frac23 = \frac43$.
4. Vsota: $S = \dfrac{4/3}{1 - 2/3} = \dfrac{4/3}{1/3} = 4$.
5. Preizkus z delnimi vsotami: $S_1 = 1{,}333$, $S_2 = 1{,}333 + 0{,}889 = 2{,}222$, $S_3 = 2{,}815$; vrednosti se bližajo $4$.
6. Odgovor: vrsta konvergira in njena vsota je $4$.

### Primer 2

Ugotovi, ali konvergirata vrsti (a) $\displaystyle\sum_{n=1}^{\infty} \frac{n}{n^2 + 1}$ in (b) $\displaystyle\sum_{n=1}^{\infty} \frac{n^2}{2^n}$.

**Podatki:** (a) $a_n = \dfrac{n}{n^2 + 1}$, (b) $a_n = \dfrac{n^2}{2^n}$; obe vrsti imata pozitivne člene, $n \ge 1$
**Iščemo:** konvergenco ali divergenco vsake vrste

:::formula
Limitni primerjalni kriterij: $\lim \dfrac{a_n}{b_n} = L \in (0, \infty)$ ⇒ $\sum a_n$ in $\sum b_n$ se obnašata enako. $\quad$ Kvocientni kriterij: $L = \lim \dfrac{a_{n+1}}{a_n} < 1$ ⇒ konvergenca.
:::

**Rešitev:**

1. (a) Za velike $n$ je $\dfrac{n}{n^2 + 1} \approx \dfrac{n}{n^2} = \dfrac1n$, zato primerjamo z $b_n = \frac1n$.
2. $\dfrac{a_n}{b_n} = \dfrac{n^2}{n^2 + 1} \to 1$, kar je med $0$ in $\infty$.
3. Harmonična vrsta $\sum \frac1n$ divergira, zato divergira tudi vrsta (a), čeprav $a_n \to 0$.
4. (b) Zaradi potence $2^n$ uporabimo kvocientni kriterij: $\dfrac{a_{n+1}}{a_n} = \dfrac{(n+1)^2}{2^{n+1}} \cdot \dfrac{2^n}{n^2} = \dfrac12\left(1 + \dfrac1n\right)^2$.
5. Limita: $L = \frac12 \cdot 1 = \frac12 < 1$, zato vrsta (b) konvergira.
6. Odgovor: vrsta (a) divergira, vrsta (b) konvergira (njena vsota je, kot lahko pokažemo z odvajanjem geometrijske vrste, enaka $6$).

### Primer 3 (težji)

Določi konvergenčni polmer in konvergenčno območje potenčne vrste $\displaystyle\sum_{n=1}^{\infty} \frac{(x - 2)^n}{n \cdot 3^n}$. V katerih točkah vrsta konvergira absolutno in v katerih pogojno?

**Podatki:** potenčna vrsta s koeficienti $c_n = \dfrac{1}{n \cdot 3^n}$ in središčem $x_0 = 2$, $n \ge 1$
**Iščemo:** konvergenčni polmer $R$, konvergenčno območje, vrsto konvergence v robnih točkah

:::formula
$R = \lim\limits_{n \to \infty}\left|\dfrac{c_n}{c_{n+1}}\right|$; robni točki $x_0 \pm R$ preverimo posebej (posplošena harmonična vrsta, Leibnizov kriterij).
:::

**Rešitev:**

1. $\dfrac{c_n}{c_{n+1}} = \dfrac{(n+1)\,3^{n+1}}{n\,3^n} = 3 \cdot \dfrac{n+1}{n} \to 3$, torej $R = 3$.
2. Vrsta absolutno konvergira za $|x - 2| < 3$, tj. za $-1 < x < 5$, in divergira za $|x - 2| > 3$.
3. Rob $x = 5$: $(x - 2)^n = 3^n$, vrsta je $\sum \dfrac{3^n}{n\,3^n} = \sum \dfrac1n$, harmonična vrsta, ki divergira.
4. Rob $x = -1$: $(x - 2)^n = (-3)^n$, vrsta je $\sum \dfrac{(-1)^n}{n}$. Ker $\frac1n$ monotono pada proti $0$, po Leibnizovem kriteriju konvergira; vrsta absolutnih vrednosti $\sum \frac1n$ pa divergira, zato je konvergenca pogojna.
5. Odgovor: $R = 3$; vrsta konvergira na intervalu $[-1, 5)$, absolutno na $(-1, 5)$, v točki $x = -1$ pogojno, v $x = 5$ in zunaj intervala divergira.

## Pogoste napake

- **»Členi gredo proti nič, torej vrsta konvergira.«** Napačno: harmonična vrsta je protiprimer. Pogoj $a_n \to 0$ je le potreben.
- **Zamenjava zaporedja in vrste.** Zaporedje $a_n = \frac1n$ konvergira (proti $0$), vrsta $\sum \frac1n$ pa divergira. Pri vrsti nas zanima limita delnih vsot.
- **Geometrijska vrsta z napačnim prvim členom.** Pri $\sum_{n=1}^\infty q^n$ je prvi člen $q$, ne $1$, zato je vsota $\dfrac{q}{1 - q}$.
- **Kvocientni kriterij pri $L = 1$.** Pri $L = 1$ ne moremo sklepati nič; tako $\sum \frac1n$ kot $\sum \frac1{n^2}$ imata $L = 1$, prva divergira, druga konvergira.
- **Pozabljeni robovi potenčne vrste.** Kvocientni kriterij da le odprti interval. Robni točki je treba preveriti z drugimi kriteriji.
- **Primerjalni kriterij v napačno smer.** Če je $a_n \le b_n$ in $\sum b_n$ **divergira**, o $\sum a_n$ ne vemo nič. Manjša vrsta podeduje konvergenco, večja divergenco.
- **Primerjalni kriteriji za vrste z negativnimi členi.** Kriteriji iz točke 5 veljajo za vrste s pozitivnimi členi. Za druge vrste jih uporabi na $\sum |a_n|$ (absolutna konvergenca).

## Povzetek

- $\sum a_n$ konvergira, če konvergirajo delne vsote $S_n = a_1 + \dots + a_n$; vsota je $\lim S_n$.
- Geometrijska vrsta: $\sum_{n=0}^\infty aq^n = \dfrac{a}{1 - q}$ za $|q| < 1$, sicer divergira.
- Potrebni pogoj: konvergenca ⇒ $a_n \to 0$ (obratno ne velja).
- $\sum \frac{1}{n^p}$ konvergira natanko za $p > 1$; harmonična vrsta divergira.
- Kriteriji za pozitivne vrste: primerjalni, limitni primerjalni, kvocientni, korenski ($L < 1$ konv., $L > 1$ div., $L = 1$ ne odloči), integralski. Alternirajoče: Leibnizov.
- Absolutna konvergenca ($\sum |a_n|$ konv.) ⇒ konvergenca; konvergentna, a ne absolutno: pogojna.
- Potenčna vrsta $\sum c_n(x - x_0)^n$ ima polmer $R$ ($R = \lim |c_n/c_{n+1}|$); robne točke preveri posebej.

## Drugače: Na sliki

Vrsto $\sum_{n=1}^\infty \frac{1}{2^n} = \frac12 + \frac14 + \frac18 + \dots$ si predstavljaj kot daljico z dolžino $1$. Najprej pobarvaš polovico, nato polovico preostanka, nato spet polovico preostanka:

```
|<------------------- 1 ------------------->|
[################||########||####||##||#|...]
       1/2            1/4      1/8  1/16
```

Pobarvani del se bliža celi daljici, a je nikoli ne preseže: delne vsote $0{,}5$; $0{,}75$; $0{,}875$; $0{,}9375$ se bližajo $1$.

Delne vsote si lahko narišeš tudi kot točke $(n, S_n)$. Pri konvergentni vrsti se točke bližajo vodoravni premici $y = S$. Pri harmonični vrsti točke rastejo vse počasneje (kot $\ln n$), a ne obstanejo: po milijonu členov je $S_n \approx 14{,}4$, po milijardi približno $21$, in tako naprej brez meje.

## Drugače: Iz vsakdanjega življenja

**Kopičenje zdravila.** Bolnik vsakih $12\,\mathrm{h}$ vzame $100\,\mathrm{mg}$ zdravila. V $12$ urah se izloči toliko, da ostane $25\,\%$ prejšnje količine. Tik po $n$-tem odmerku je v telesu $100 + 100 \cdot 0{,}25 + 100 \cdot 0{,}25^2 + \dots + 100 \cdot 0{,}25^{n-1}\,\mathrm{mg}$. Po dolgem času je to geometrijska vrsta z vsoto $\dfrac{100}{1 - 0{,}25} \approx 133\,\mathrm{mg}$ (največja količina), tik pred odmerkom pa $133 - 100 = 33\,\mathrm{mg}$ (najmanjša). Farmakologi tako določajo odmerke, da je stacionarna koncentracija v terapevtskem območju.

**Odskakujoča žoga.** Žogo spustimo z višine $2\,\mathrm{m}$, vsakič odskoči do $60\,\%$ prejšnje višine. Skupna pot je $2 + 2 \cdot (1{,}2 + 0{,}72 + \dots) = 2 + 2 \cdot \dfrac{1{,}2}{1 - 0{,}6} = 8\,\mathrm{m}$, čeprav odskokov teoretično ni konec.

**Periodična decimalna števila.** $0{,}\overline{36} = 0{,}36 + 0{,}0036 + \dots = \dfrac{0{,}36}{1 - 0{,}01} = \dfrac{36}{99} = \dfrac{4}{11}$.

**Približki v naravoslovju.** Iz $\ln(1 + x) = x - \frac{x^2}{2} + \dots$ dobimo za majhne $x$ približek $\ln(1 + x) \approx x$, ki ga kemiki uporabljajo pri razredčenih raztopinah, fiziki pa pri majhnih odmikih (npr. $\sin x \approx x$ pri nihalu). Vrsta tudi pove, kako velika je napaka: pri $x = 0{,}01$ je naslednji člen $5 \cdot 10^{-5}$.

## Drugače: Korak za korakom s številkami

Seštej vrsto $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$ prek delnih vsot.

1. **Razstavimo člen** na delne ulomke: $\dfrac{1}{n(n+1)} = \dfrac1n - \dfrac{1}{n+1}$ (preizkus: $\dfrac{(n+1) - n}{n(n+1)}$).
2. **Prve delne vsote numerično:** $S_1 = 0{,}5$, $S_2 = 0{,}5 + 0{,}1667 = 0{,}6667$, $S_3 = 0{,}75$, $S_4 = 0{,}8$.
3. **Splošna delna vsota:** $S_n = \left(1 - \tfrac12\right) + \left(\tfrac12 - \tfrac13\right) + \dots + \left(\tfrac1n - \tfrac{1}{n+1}\right)$. Notranji členi se odštejejo (**teleskopska vsota**), ostane $S_n = 1 - \dfrac{1}{n+1} = \dfrac{n}{n+1}$.
4. **Preizkus:** $S_4 = \frac45 = 0{,}8$ in $S_{10} = \frac{10}{11} = 0{,}9091$.
5. **Limita:** $S = \lim_{n \to \infty} \dfrac{n}{n+1} = 1$.
6. **Primerjava:** ker je $\frac{1}{n(n+1)} \le \frac{1}{n^2}$ in obratno $\frac{1}{n^2} \le \frac{2}{n(n+1)}$, iz te vrste po primerjalnem kriteriju sledi tudi konvergenca $\sum \frac{1}{n^2}$.

## Drugače: Bolj natančno

**Cauchyjev pogoj.** Ker je $\mathbb{R}$ poln, zaporedje konvergira natanko tedaj, ko je Cauchyjevo. Za vrste: $\sum a_n$ konvergira natanko tedaj, ko za vsak $\varepsilon > 0$ obstaja $N$, da je

$$\left|a_{n+1} + a_{n+2} + \dots + a_{m}\right| < \varepsilon \qquad \text{za vse } m > n \ge N.$$

Za $m = n + 1$ dobimo $|a_{n+1}| < \varepsilon$, kar je dokaz potrebnega pogoja $a_n \to 0$.

**Harmonična vrsta divergira.** Združimo člene v skupine dolžine $2^k$:

$$S_{2^k} = 1 + \tfrac12 + \left(\tfrac13 + \tfrac14\right) + \left(\tfrac15 + \dots + \tfrac18\right) + \dots \ge 1 + \tfrac12 + \tfrac12 + \dots + \tfrac12 = 1 + \tfrac{k}{2}.$$

Delne vsote torej niso omejene. Pri $\sum \frac{1}{n^p}$ s $p > 1$ isti način (skupine od $2^k$ do $2^{k+1} - 1$) da zgornjo mejo z geometrijsko vrsto s količnikom $2^{1-p} < 1$.

**Absolutna konvergenca ⇒ konvergenca.** Če $\sum |a_n|$ konvergira, je za $m > n \ge N$: $\left|\sum_{k=n+1}^m a_k\right| \le \sum_{k=n+1}^m |a_k| < \varepsilon$ (trikotniška neenakost in Cauchyjev pogoj za $\sum |a_n|$). Torej $\sum a_n$ zadošča Cauchyjevemu pogoju.

**Dokaz kvocientnega kriterija.** Naj bo $\lim a_{n+1}/a_n = L < 1$ in izberimo $q$ z $L < q < 1$. Od nekega $N$ naprej je $a_{n+1} \le q\,a_n$, torej $a_{N+k} \le a_N q^k$. Vrsta je od $N$ naprej omejena z geometrijsko vrsto $a_N\sum q^k$, ki konvergira. Pri $L > 1$ členi od nekod naraščajo, zato $a_n \not\to 0$.

**Riemannov izrek o prerazporeditvi.** Če vrsta pogojno konvergira, lahko njene člene prerazporedimo tako, da vsota postane katerokoli vnaprej izbrano realno število ali pa vrsta divergira. Pogojno konvergentnih vrst zato ne smemo obravnavati kot končnih vsot.

**Cauchy-Hadamardova formula.** Konvergenčni polmer potenčne vrste je vedno

$$\frac{1}{R} = \limsup_{n \to \infty} \sqrt[n]{|c_n|}$$

(z dogovorom $1/0 = \infty$, $1/\infty = 0$), tudi kadar navadna limita ne obstaja. Na vsakem zaprtem intervalu $[x_0 - r, x_0 + r]$ z $r < R$ vrsta konvergira **enakomerno** (Weierstrassov kriterij s primerjalno vrsto $\sum |c_n| r^n$). Zato je vsota potenčne vrste zvezna in jo smemo znotraj $(x_0 - R, x_0 + R)$ členoma odvajati in integrirati.

## Preveri se

? Koliko je vsota vrste $\displaystyle\sum_{n=0}^{\infty} \left(\frac13\right)^n$?
- $\dfrac12$
+ $\dfrac32$
- $3$
> Geometrijska vrsta s prvim členom $1$ in $q = \frac13$: $\dfrac{1}{1 - 1/3} = \dfrac32$. $\frac12$ bi dobil, če bi seštevanje začel pri $n = 1$.

? Katera vrsta divergira?
+ $\displaystyle\sum_{n=1}^{\infty} \frac{1}{\sqrt n}$
- $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2}$
- $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$
> $\sum \frac{1}{n^p}$ konvergira le za $p > 1$; pri $\frac{1}{\sqrt n}$ je $p = \frac12$. Vrsta $\sum \frac{1}{n^2}$ konvergira ($p = 2$), alternirajoča harmonična pa po Leibnizu (pogojno).

? Za vrsto $\sum a_n$ vemo, da je $\lim_{n \to \infty} a_n = 0$. Kaj lahko sklepamo?
- Vrsta zagotovo konvergira.
- Vrsta zagotovo divergira.
+ Iz tega ne moremo sklepati, ali vrsta konvergira.
> Pogoj $a_n \to 0$ je potreben, ni pa zadosten: $\sum \frac1{n^2}$ konvergira, $\sum \frac1n$ divergira, pri obeh pa členi gredo proti $0$.

? Kolikšen je konvergenčni polmer potenčne vrste $\displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!}$?
- $R = 0$
- $R = 1$
+ $R = \infty$
> $\left|\dfrac{c_n}{c_{n+1}}\right| = \dfrac{(n+1)!}{n!} = n + 1 \to \infty$. Vrsta konvergira za vsak realni $x$; njena vsota je $\mathrm{e}^x$.

:::simboli
n | indeks (zaporedna številka) člena | | |
a_n | splošni člen vrste | | | potreben pogoj konvergence: aₙ → 0
a_1, a_2, a_3 | prvi, drugi in tretji člen vrste | | |
a | prvi člen geometrijske vrste | | | a ≠ 0
q | količnik geometrijske vrste | | | vrsta konvergira za |q| < 1
p | eksponent v vrsti Σ 1/nᵖ | | | konvergira natanko za p > 1
c_n | koeficienti potenčne vrste | | |
x | spremenljivka potenčne vrste | | |
x_0 | središče potenčne vrste | | |
R | konvergenčni polmer | R = \lim_{n \to \infty}\left\lvert\frac{c_n}{c_{n+1}}\right\rvert | | konvergenca za |x − x₀| < R
c_{n+1} | naslednji koeficient potenčne vrste | | |
a_{n+1}, a_{n+2}, a_m | členi vrste za indeksom n | | |
\varepsilon | poljubno majhno pozitivno število | | | ε > 0
m | indeks, večji od n (Cauchyjev pogoj) | | |
N | indeks, od katerega naprej velja ocena | | |
S_{2^k} | delna vsota prvih 2ᵏ členov harmonične vrste | | | vsaj 1 + k/2, zato vrsta divergira
k | eksponent v potenci (2ᵏ oziroma qᵏ) | | |
b_n | splošni člen primerjalne vrste | | |
L | limita kvocienta pri kriterijih | L = \lim \dfrac{a_{n+1}}{a_n} | | L < 1: konvergenca; pri limitnem primerjalnem L = lim aₙ/bₙ
:::
