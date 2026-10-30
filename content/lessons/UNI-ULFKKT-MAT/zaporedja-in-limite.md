---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Zaporedja srečamo povsod, kjer nekaj opazujemo v korakih: stanje na varčevalnem računu po letih, število bakterij po vsaki generaciji, količina zdravila v telesu po vsakem odmerku, približki rešitve enačbe, ki jih računalnik računa korak za korakom. Pogosto nas ne zanima toliko posamezen člen kot to, **kam se zaporedje ustali**: kolikšna bo ravnovesna količina zdravila, ali numerična metoda res pripelje do rešitve, kolikšna je meja rasti.

Limita zaporedja je najpreprostejša oblika limite. Na njej gradimo limite funkcij, zveznost, vrste in integral. Zaporedje $\left(1 + \frac{1}{n}\right)^n$ nas pripelje do števila $e$, osnove naravnega logaritma in eksponentne funkcije, ki opisuje rast, razpad in obrestovanje.

V tej lekciji se naučiš:

- kaj pomeni, da zaporedje **konvergira**, in kako računamo limite,
- zakaj **monotona in omejena** zaporedja konvergirajo,
- kaj so **Cauchyjeva zaporedja**,
- kako pridemo do **števila $e$**.

## Razlaga

**1. Zaporedje.** **Zaporedje** realnih števil je funkcija $a\colon \mathbb{N} \to \mathbb{R}$; vrednosti $a_1, a_2, a_3, \dots$ so **členi**, $a_n$ je **splošni člen**. Zaporedje je podano s formulo za splošni člen (npr. $a_n = \frac{1}{n}$) ali **rekurzivno**, z začetnim členom in pravilom za naslednjega (npr. $a_1 = 1$, $a_{n+1} = 2a_n + 1$).

Iz srednje šole poznaš dva posebna primera. **Aritmetično zaporedje** ima stalno razliko $d$ med zaporednima členoma: $a_n = a_1 + (n - 1)d$. **Geometrijsko zaporedje** ima stalen kvocient $q$: $a_n = a_1 q^{n-1}$. Geometrijsko zaporedje opisuje vsako rast ali upadanje za stalen odstotek v enakih časovnih korakih, na primer razmnoževanje bakterij ali radioaktivni razpad, merjen v razpolovnih časih. Vsota prvih $n$ členov geometrijskega zaporedja je $S_n = a_1\frac{1 - q^n}{1 - q}$ za $q \neq 1$; ker gre $q^n \to 0$ za $|q| < 1$, gre $S_n \to \frac{a_1}{1 - q}$. Tako je na primer $1 + \frac{1}{2} + \frac{1}{4} + \dots = 2$.

**2. Omejenost in monotonost.** Zaporedje je

- **navzgor omejeno**, če obstaja $M$ z $a_n \le M$ za vse $n$; **navzdol omejeno**, če obstaja $m$ z $a_n \ge m$; **omejeno**, če je oboje,
- **naraščajoče**, če je $a_{n+1} \ge a_n$ za vse $n$, in **padajoče**, če je $a_{n+1} \le a_n$; **monotono**, če je eno ali drugo.

Monotonost preverimo z razliko $a_{n+1} - a_n$ (predznak) ali pri pozitivnih členih s kvocientom $\frac{a_{n+1}}{a_n}$ (večji ali manjši od $1$). Pri rekurzivnih zaporedjih pogosto uporabimo **matematično indukcijo**.

Najmanjša zgornja meja zaporedja je **natančna zgornja meja** ali supremum $\sup a_n$, največja spodnja meja pa infimum $\inf a_n$.

**3. Limita zaporedja.** Število $L$ je **limita** zaporedja $(a_n)$, če so od nekega indeksa naprej vsi členi poljubno blizu $L$. Natančneje: za vsak $\varepsilon > 0$ obstaja indeks $N$, da je

$$|a_n - L| < \varepsilon \quad \text{za vse } n \ge N.$$

Pišemo $\lim_{n \to \infty} a_n = L$ ali $a_n \to L$. Zaporedje z limito je **konvergentno**, sicer je **divergentno**. Interval $(L - \varepsilon, L + \varepsilon)$ je **$\varepsilon$-okolica** limite: zunaj nje je le končno mnogo členov.

Primeri divergence: $a_n = n$ gre čez vse meje (pišemo $a_n \to \infty$, a to ni konvergenca), $a_n = (-1)^n$ skače med $-1$ in $1$.

Limita je **enolična**: zaporedje ima največ eno limito. Sprememba končno mnogo členov limite ne spremeni.

**4. Pravila za računanje.** Če $a_n \to A$ in $b_n \to B$, je

$$a_n \pm b_n \to A \pm B, \quad a_n b_n \to AB, \quad \frac{a_n}{b_n} \to \frac{A}{B} \ (B \neq 0).$$

Za racionalne izraze v $n$ delimo z najvišjo potenco $n$ v imenovalcu, ker gre $\frac{1}{n^k} \to 0$ za $k > 0$. **Izrek o sendviču:** če je $b_n \le a_n \le c_n$ in $b_n, c_n \to L$, je tudi $a_n \to L$.

**Pomembne limite:**

- $q^n \to 0$ za $|q| < 1$; $q^n \to \infty$ za $q > 1$; za $q \le -1$ divergira,
- $\sqrt[n]{a} \to 1$ za $a > 0$ in $\sqrt[n]{n} \to 1$,
- $\frac{n^k}{a^n} \to 0$ za $a > 1$ (eksponentna funkcija raste hitreje od vsake potence),
- $\frac{a^n}{n!} \to 0$ (fakulteta raste hitreje od eksponentne).

**5. Konvergentna zaporedja so omejena.** Vsako konvergentno zaporedje je omejeno. Obratno ne velja: $(-1)^n$ je omejeno, a ne konvergira.

**6. Monotona in omejena zaporedja.** **Izrek:** naraščajoče in navzgor omejeno zaporedje konvergira, njegova limita je $\sup a_n$. Padajoče in navzdol omejeno zaporedje konvergira proti $\inf a_n$.

Izrek je zelo uporaben pri rekurzivnih zaporedjih: najprej pokažemo, da limita obstaja (monotonost in omejenost), nato jo izračunamo iz enačbe, ki jo dobimo, ko v rekurzivni formuli vse člene nadomestimo z $L$.

**7. Število $e$.** Zaporedje $e_n = \left(1 + \frac{1}{n}\right)^n$ je naraščajoče in navzgor omejeno s $3$, zato konvergira. Njegova limita je **Eulerjevo število**

$$e = \lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n \approx 2{,}718\,28.$$

Velja tudi $\lim_{n \to \infty}\left(1 + \frac{x}{n}\right)^n = e^x$ za vsak realni $x$. Pri izrazih oblike $1^\infty$ zato poskusimo dobiti obliko $\left(1 + \frac{1}{m}\right)^m$.

**8. Podzaporedja in stekališča.** Če iz zaporedja izberemo neskončno mnogo členov v prvotnem vrstnem redu, dobimo **podzaporedje** $(a_{n_k})$. Vsako podzaporedje konvergentnega zaporedja ima isto limito. Število $s$ je **stekališče**, če je limita nekega podzaporedja. Zaporedje $(-1)^n$ ima stekališči $-1$ in $1$. **Bolzano-Weierstrassov izrek:** vsako omejeno zaporedje ima konvergentno podzaporedje.

**9. Cauchyjeva zaporedja.** Zaporedje je **Cauchyjevo**, če so njegovi členi od nekega indeksa naprej poljubno blizu drug drugemu: za vsak $\varepsilon > 0$ obstaja $N$, da je

$$|a_m - a_n| < \varepsilon \quad \text{za vse } m, n \ge N.$$

V realnih številih je zaporedje konvergentno natanko tedaj, ko je Cauchyjevo (**Cauchyjev kriterij**). Prednost: konvergenco lahko dokažemo, ne da bi poznali limito. V racionalnih številih to ne velja: približki $1$; $1{,}4$; $1{,}41$; $1{,}414$; ... za $\sqrt{2}$ so Cauchyjevo zaporedje racionalnih števil, njihova limita pa ni racionalna.

## Rešeni primeri

### Primer 1 (lažji)

Izračunaj $\displaystyle \lim_{n \to \infty} \frac{3n^2 - n + 2}{5n^2 + 4}$.

**Podatki:** $a_n = \dfrac{3n^2 - n + 2}{5n^2 + 4}$
**Iščemo:** $\lim_{n \to \infty} a_n$

:::formula
Števec in imenovalec delimo z najvišjo potenco v imenovalcu ($n^2$) in uporabimo $\frac{1}{n^k} \to 0$ za $k > 0$.
:::

**Rešitev:**

1. Delimo z $n^2$: $a_n = \dfrac{3 - \frac{1}{n} + \frac{2}{n^2}}{5 + \frac{4}{n^2}}$.
2. Ko $n \to \infty$, gredo $\frac{1}{n}$, $\frac{2}{n^2}$ in $\frac{4}{n^2}$ proti $0$.
3. Po pravilih za limite: $a_n \to \dfrac{3 - 0 + 0}{5 + 0} = \dfrac{3}{5}$.
4. Preizkus: za $n = 10^6$ je $a_n \approx 0{,}5999998$.
5. Odgovor: limita je $\frac{3}{5} = 0{,}6$.

### Primer 2

Dokaži po definiciji, da je $\displaystyle \lim_{n \to \infty} \frac{2n + 1}{n + 3} = 2$, in poišči najmanjši $N$, od katerega naprej je $|a_n - 2| < 0{,}01$.

**Podatki:** $a_n = \dfrac{2n + 1}{n + 3}$, domnevna limita $L = 2$, $\varepsilon = 0{,}01$
**Iščemo:** dokaz konvergence in najmanjši indeks $N$

:::formula
$a_n \to L \iff \forall \varepsilon > 0\ \exists N:\ n \ge N \Rightarrow |a_n - L| < \varepsilon$
:::

**Rešitev:**

1. Razlika: $a_n - 2 = \dfrac{2n + 1 - 2(n + 3)}{n + 3} = \dfrac{-5}{n + 3}$, torej $|a_n - 2| = \dfrac{5}{n + 3}$.
2. Splošno: $\frac{5}{n + 3} < \varepsilon \iff n > \frac{5}{\varepsilon} - 3$. Za vsak $\varepsilon > 0$ torej obstaja ustrezen $N$, zato je limita $2$.
3. Za $\varepsilon = 0{,}01$: $n > \frac{5}{0{,}01} - 3 = 500 - 3 = 497$.
4. Preizkus: za $n = 497$ je $|a_n - 2| = \frac{5}{500} = 0{,}01$, kar ni strogo manjše od $0{,}01$; za $n = 498$ je $\frac{5}{501} \approx 0{,}00998 < 0{,}01$. Ker $\frac{5}{n + 3}$ pada, velja neenakost tudi za vse večje $n$.
5. Odgovor: limita je $2$; od indeksa $N = 498$ naprej so vsi členi za manj kot $0{,}01$ oddaljeni od $2$.

### Primer 3 (težji)

Zaporedje je podano rekurzivno z $a_1 = 1$ in $a_{n+1} = \sqrt{2 + a_n}$. Dokaži, da konvergira, in izračunaj limito.

**Podatki:** $a_1 = 1$, $a_{n+1} = \sqrt{2 + a_n}$
**Iščemo:** dokaz konvergence in $L = \lim_{n \to \infty} a_n$

:::formula
Naraščajoče in navzgor omejeno zaporedje konvergira. Limito dobimo iz enačbe $L = \sqrt{2 + L}$.
:::

**Rešitev:**

1. Prvi členi: $a_2 = \sqrt{3} \approx 1{,}7321$, $a_3 = \sqrt{3{,}7321} \approx 1{,}9319$, $a_4 \approx 1{,}9829$, $a_5 \approx 1{,}9957$. Slutimo, da zaporedje narašča proti $2$.
2. Omejenost (indukcija): $a_1 = 1 < 2$. Če je $a_n < 2$, je $a_{n+1} = \sqrt{2 + a_n} < \sqrt{4} = 2$. Torej $a_n < 2$ za vse $n$.
3. Monotonost: $a_{n+1} > a_n \iff 2 + a_n > a_n^2 \iff (2 - a_n)(1 + a_n) > 0$, kar velja, ker je $0 < a_n < 2$.
4. Zaporedje je naraščajoče in navzgor omejeno, zato konvergira k nekemu $L$ z $1 \le L \le 2$.
5. V rekurzivni formuli preidemo k limiti: $L = \sqrt{2 + L}$, torej $L^2 - L - 2 = 0$, $(L - 2)(L + 1) = 0$.
6. Rešitev $L = -1$ ni mogoča, ker so vsi členi pozitivni. Ostane $L = 2$.
7. Odgovor: zaporedje je naraščajoče, omejeno z $2$ in konvergira k $L = 2$.

## Pogoste napake

- **Računanje limite, preden vemo, da obstaja.** Pri $a_1 = 1$, $a_{n+1} = 2a_n + 1$ enačba $L = 2L + 1$ da $L = -1$, a zaporedje $1, 3, 7, 15, \dots$ gre proti $\infty$. Najprej dokaži konvergenco.
- **$1^\infty = 1$.** $\left(1 + \frac{1}{n}\right)^n \to e \approx 2{,}718$, ne $1$. Osnova gre proti $1$, eksponent pa raste, in oba učinka sta pomembna.
- **Omejenost zadošča za konvergenco.** $(-1)^n$ je omejeno, a divergira. Potrebna je še monotonost (ali drug argument).
- **$N$, ki je odvisen od $n$.** V definiciji limite je $N$ lahko odvisen od $\varepsilon$, nikakor pa ne od $n$.
- **Deljenje z napačno potenco.** Pri $\frac{n^2 + 1}{2n^3 - n}$ delimo z $n^3$ (najvišja potenca v imenovalcu); limita je $0$, ne $\frac{1}{2}$.
- **$\sqrt[n]{n} \to \infty$.** Čeprav $n$ raste, koren $n$-te stopnje raste počasneje; limita je $1$.

## Povzetek

- $a_n \to L$: za vsak $\varepsilon > 0$ obstaja $N$, da je $|a_n - L| < \varepsilon$ za $n \ge N$.
- Konvergentno zaporedje je omejeno; limita je enolična.
- Pravila za vsoto, produkt in kvocient; deljenje z najvišjo potenco; sendvič.
- Pomembne limite: $q^n \to 0$ ($|q| < 1$), $\sqrt[n]{n} \to 1$, $\frac{n^k}{a^n} \to 0$ ($a > 1$).
- Monotono in omejeno zaporedje konvergira; limito rekurzivnega zaporedja dobimo iz $L = f(L)$.
- $e = \lim \left(1 + \frac{1}{n}\right)^n \approx 2{,}718$, $\left(1 + \frac{x}{n}\right)^n \to e^x$.
- Cauchyjevo zaporedje: členi so poljubno blizu drug drugemu; v $\mathbb{R}$ je to enakovredno konvergenci.

## Drugače: Na sliki

Člene zaporedja nariši kot točke $(n, a_n)$ v ravnini. Za $a_n = \frac{2n + 1}{n + 3}$ dobiš točke $(1;\ 0{,}75)$, $(2;\ 1)$, $(3;\ 1{,}17)$, $(10;\ 1{,}62)$, ki se od spodaj približujejo vodoravni premici $y = 2$. Okoli te premice nariši pas širine $2\varepsilon$. Definicija limite pravi: ne glede na to, kako ozek pas izbereš, od nekega $N$ naprej vse točke ležijo v pasu.

Drugi način je številska premica: člene označi na osi. Pri konvergentnem zaporedju se točke kopičijo ob $L$. Pri $(-1)^n$ pa skačejo med dvema točkama, $-1$ in $1$, in se ne zberejo pri nobeni.

Rekurzivno zaporedje $a_{n+1} = \sqrt{2 + a_n}$ si predstavljaj kot »pajkovo mrežo«: nariši $y = \sqrt{2 + x}$ in $y = x$. Od $a_1$ pojdi navpično do krivulje, nato vodoravno do premice, pa spet navpično. Stopnice se vzpenjajo proti presečišču $(2, 2)$.

## Drugače: Iz vsakdanjega življenja

**Zdravilo z večkratnimi odmerki.** Bolnik vsakih $12\,\mathrm{h}$ vzame $100\,\mathrm{mg}$ zdravila, med odmerkoma pa telo izloči polovico. Količina takoj po odmerku je $a_1 = 100\,\mathrm{mg}$, $a_{n+1} = 0{,}5 a_n + 100\,\mathrm{mg}$: $100$, $150$, $175$, $187{,}5$, $193{,}75$ ... Zaporedje je naraščajoče in omejeno z $200$, limita iz $L = 0{,}5L + 100$ je $L = 200\,\mathrm{mg}$. To je **stacionarno stanje**, ki ga farmakologi upoštevajo pri določanju odmerka.

**Obrestovanje.** Glavnica $1000\,€$ z letno obrestno mero $5\,\%$ ima po enem letu pri letnem pripisu $1050\,€$, pri mesečnem $1000 \cdot \left(1 + \frac{0{,}05}{12}\right)^{12} \approx 1051{,}16\,€$, pri zveznem pripisu pa $1000 \cdot e^{0{,}05} \approx 1051{,}27\,€$. Število $e$ je limita, ki jo dobimo, ko obresti pripisujemo vse pogosteje.

**Numerične metode.** Računalnik reši enačbo tako, da računa zaporedje približkov, na primer z Newtonovo metodo. Ker limite ne pozna, ustavi računanje, ko sta zaporedna približka dovolj blizu: to je praktična oblika Cauchyjevega kriterija.

## Drugače: Korak za korakom s številkami

Izračunajmo nekaj členov zaporedja $e_n = \left(1 + \frac{1}{n}\right)^n$.

1. $n = 1$: $(1 + 1)^1 = 2$.
2. $n = 2$: $1{,}5^2 = 2{,}25$.
3. $n = 5$: $1{,}2^5 = 2{,}48832$.
4. $n = 10$: $1{,}1^{10} \approx 2{,}59374$.
5. $n = 100$: $1{,}01^{100} \approx 2{,}70481$.
6. $n = 1000$: $1{,}001^{1000} \approx 2{,}71692$.
7. **Opažanje.** Členi naraščajo, vendar vse počasneje, in ostajajo pod $3$. Približujejo se $e \approx 2{,}71828$.
8. **Hitrost konvergence.** Pri $n = 1000$ je razlika do $e$ še približno $0{,}00136$. Za natančno računanje števila $e$ je zato veliko boljša vrsta $1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \dots$, ki že po desetih členih da šest pravilnih decimalk (napaka je približno $3 \cdot 10^{-7}$).

## Drugače: Bolj natančno

**Trditev.** Konvergentno zaporedje je omejeno.

*Dokaz.* Naj bo $a_n \to L$. Za $\varepsilon = 1$ obstaja $N$, da je $|a_n - L| < 1$ za $n \ge N$, torej $|a_n| < |L| + 1$. Tedaj je $|a_n| \le M = \max\{|a_1|, \dots, |a_{N-1}|, |L| + 1\}$ za vse $n$. $\square$

**Izrek.** Naraščajoče in navzgor omejeno zaporedje konvergira k $s = \sup_n a_n$.

*Dokaz.* Supremum obstaja po **aksiomu o supremumu** (polnost $\mathbb{R}$). Naj bo $\varepsilon > 0$. Ker je $s$ najmanjša zgornja meja, $s - \varepsilon$ ni zgornja meja, torej obstaja $N$ z $a_N > s - \varepsilon$. Za $n \ge N$ je zaradi monotonosti $s - \varepsilon < a_N \le a_n \le s$, torej $|a_n - s| < \varepsilon$. $\square$

**Omejenost zaporedja $e_n$.** Po binomskem izreku

$$\left(1 + \frac{1}{n}\right)^n = \sum_{k=0}^{n} \binom{n}{k}\frac{1}{n^k} = \sum_{k=0}^{n} \frac{1}{k!}\cdot\frac{n(n-1)\cdots(n-k+1)}{n^k} \le \sum_{k=0}^{n} \frac{1}{k!}.$$

Ker je $k! \ge 2^{k-1}$, je to največ $1 + 1 + \frac{1}{2} + \frac{1}{4} + \dots < 3$. Naraščanje sledi iz istega zapisa: pri večjem $n$ je vsak faktor $\frac{n - j}{n} = 1 - \frac{j}{n}$ večji in členov je več.

**Cauchyjev kriterij.** Konvergentno zaporedje je Cauchyjevo: $|a_m - a_n| \le |a_m - L| + |L - a_n| < 2\varepsilon$. Obratno: Cauchyjevo zaporedje je omejeno, po Bolzano-Weierstrassovem izreku ima konvergentno podzaporedje z limito $L$, Cauchyjev pogoj pa zagotovi, da proti $L$ konvergira celo zaporedje. Polnost realnih števil je pri tem bistvena.

## Preveri se

? Koliko je $\displaystyle \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^{2n}$?
- $e$
+ $e^2$
- $1$
> $\left(1 + \frac{1}{n}\right)^{2n} = \left[\left(1 + \frac{1}{n}\right)^n\right]^2 \to e^2$. Odgovor $1$ je napačna »rešitev« nedoločenega izraza $1^\infty$.

? Koliko je $\displaystyle \lim_{n \to \infty} \frac{n^2 + 1}{2n^3 - n}$?
+ $0$
- $\frac{1}{2}$
- $\infty$
> Imenovalec ima višjo stopnjo; po deljenju z $n^3$ dobimo $\frac{1/n + 1/n^3}{2 - 1/n^2} \to \frac{0}{2} = 0$.

? Katera trditev drži za zaporedja realnih števil?
+ Vsako konvergentno zaporedje je omejeno.
- Vsako omejeno zaporedje je konvergentno.
- Vsako monotono zaporedje je konvergentno.
> Protiprimera za drugo in tretjo trditev sta $(-1)^n$ (omejeno, ne konvergira) in $a_n = n$ (monotono, ne konvergira).

? Zaporedje $a_1 = 2$, $a_{n+1} = 0{,}5\, a_n + 3$ je konvergentno. Kolikšna je njegova limita?
+ $6$
- $3$
- $1{,}5$
> Iz $L = 0{,}5L + 3$ sledi $0{,}5L = 3$, torej $L = 6$.

:::simboli
a_n | splošni (n-ti) člen zaporedja | | |
L | limita zaporedja | L = \lim_{n \to \infty} a_n | |
\varepsilon | poljubno majhno pozitivno število (polmer okolice) | | | \varepsilon > 0
n | indeks člena | | | naravno število
N | indeks, od katerega naprej so vsi členi blizu L | | | odvisen od \varepsilon
b_n | splošni člen drugega zaporedja | | |
A | limita zaporedja a_n | A = \lim_{n \to \infty} a_n | |
B | limita zaporedja b_n | B = \lim_{n \to \infty} b_n | | pri kvocientu B ≠ 0
e | Eulerjevo število | e = \lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n | | e ≈ 2,718 28
a_m | člen zaporedja z indeksom m | | |
m | drugi indeks (Cauchyjev pogoj) | | | m, n ≥ N
k | eksponent potence (tudi indeks vsote) | | | k > 0
:::
