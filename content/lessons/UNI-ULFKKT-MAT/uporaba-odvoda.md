---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Ko znamo odvajati, odvod postane orodje za odgovore na zelo praktična vprašanja. Kdaj je koncentracija zdravila v krvi največja? Kakšne mere naj ima pločevinka, da porabimo čim manj materiala? Pri kateri temperaturi je hitrost encimske reakcije največja? Kako izračunati $\sin(0{,}1)$ ali $\ln(1{,}2)$ brez kalkulatorja? Kolikšna je limita izraza, ki da $\frac{0}{0}$, ko nobena algebrska poenostavitev ne pomaga?

Vsa ta vprašanja rešimo z odvodom. Predznak odvoda pove, kje funkcija narašča in pada, ničle odvoda pa kažejo na **ekstreme**. Drugi odvod pove, kako je graf ukrivljen. Odvodi višjih redov dajo **Taylorjev polinom**, ki funkcijo lokalno nadomesti s preprostim polinomom.

V tej lekciji se naučiš:

- **Lagrangeov izrek** in kaj iz njega sledi za monotonost,
- iskati lokalne in globalne **ekstreme** ter reševati optimizacijske naloge,
- narisati **potek funkcije**,
- računati limite z **L'Hospitalovim pravilom**,
- funkcijo približati s **Taylorjevim polinomom** in oceniti napako.

## Razlaga

**1. Rollov in Lagrangeov izrek.** Naj bo $f$ zvezna na $[a, b]$ in odvedljiva na $(a, b)$.

- **Rollov izrek:** če je $f(a) = f(b)$, obstaja $\xi \in (a, b)$ z $f'(\xi) = 0$.
- **Lagrangeov izrek (izrek o srednji vrednosti):** obstaja $\xi \in (a, b)$, da je

$$f'(\xi) = \frac{f(b) - f(a)}{b - a}.$$

Na nekem mestu je tangenta vzporedna sekanti skozi krajišči grafa. Fizikalno: če je povprečna hitrost avtomobila na odseku $90\,\mathrm{km/h}$, je v nekem trenutku tudi trenutna hitrost točno $90\,\mathrm{km/h}$.

**Posledice za monotonost.** Na intervalu $I$:

- če je $f' > 0$, je $f$ strogo naraščajoča,
- če je $f' < 0$, je $f$ strogo padajoča,
- če je $f' = 0$, je $f$ konstantna.

Iz Lagrangeovega izreka sledi tudi ocena $|f(b) - f(a)| \le M |b - a|$, kjer je $M$ zgornja meja za $|f'|$.

**2. Lokalni ekstremi.** Funkcija ima v $x_0$ **lokalni maksimum**, če je $f(x) \le f(x_0)$ za vse $x$ blizu $x_0$, in **lokalni minimum**, če je $f(x) \ge f(x_0)$. **Fermatov izrek:** če ima odvedljiva funkcija v notranji točki $x_0$ lokalni ekstrem, je $f'(x_0) = 0$. Točke z $f'(x_0) = 0$ so **stacionarne točke**. Ekstrem je lahko tudi tam, kjer odvod ne obstaja (na primer $|x|$ v $0$).

Ničla odvoda še ne pomeni ekstrema: $f(x) = x^3$ ima $f'(0) = 0$, a v $0$ nima ekstrema. Stacionarno točko zato preverimo:

- **s prvim odvodom:** če $f'$ v $x_0$ spremeni predznak iz $+$ v $-$, je tam maksimum; iz $-$ v $+$ minimum; če predznaka ne spremeni, ekstrema ni,
- **z drugim odvodom:** če je $f'(x_0) = 0$ in $f''(x_0) < 0$, je tam lokalni maksimum; če je $f''(x_0) > 0$, lokalni minimum; pri $f''(x_0) = 0$ test ne odloči.

**3. Globalni ekstremi na zaprtem intervalu.** Zvezna funkcija na $[a, b]$ doseže največjo in najmanjšo vrednost (Weierstrassov izrek). Najdemo ju tako, da izračunamo vrednosti v stacionarnih točkah v $(a, b)$, v točkah, kjer odvod ne obstaja, in v **krajiščih** $a$ in $b$. Največja od teh vrednosti je globalni maksimum, najmanjša globalni minimum.

**Optimizacija.** Pri besedilnih nalogah (1) izberemo spremenljivko, (2) zapišemo količino, ki jo optimiziramo, kot funkcijo ene spremenljivke s pomočjo pogojev naloge, (3) določimo smiselno definicijsko območje, (4) poiščemo stacionarne točke in preverimo, da gre za iskani ekstrem.

**4. Konveksnost in prevoji.** Če je $f'' > 0$ na intervalu, je $f$ tam **konveksna** (graf leži nad tangentami, »skodelica«); če je $f'' < 0$, je **konkavna** (»kapa«). Točka, v kateri se konveksnost spremeni, je **prevoj**; v njej je $f'' = 0$ (če obstaja).

**5. Potek funkcije.** Graf funkcije narišemo po korakih:

1. definicijsko območje, sodost ali lihost, periodičnost,
2. ničle in začetna vrednost $f(0)$,
3. poli in navpične asimptote, obnašanje pri $x \to \pm\infty$ (vodoravne ali poševne asimptote),
4. prvi odvod: stacionarne točke, intervali naraščanja in padanja, ekstremi,
5. drugi odvod: intervali konveksnosti in konkavnosti, prevoji,
6. skica grafa, ki se ujema z vsemi ugotovitvami.

**6. L'Hospitalovo pravilo.** Naj bosta $f$ in $g$ odvedljivi blizu $a$, $g'(x) \neq 0$, in naj bo $\lim f = \lim g = 0$ ali $\lim |g| = \infty$. Če obstaja limita $\lim_{x \to a} \frac{f'(x)}{g'(x)}$, je

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}.$$

Pravilo velja tudi za $a = \pm\infty$ in za enostranske limite. Števec in imenovalec odvajamo **ločeno**, ne kot kvocient. Pravilo lahko uporabimo večkrat zapored. Druge nedoločene izraze najprej prevedemo na $\frac{0}{0}$ ali $\frac{\infty}{\infty}$: $0 \cdot \infty$ zapišemo kot $\frac{f}{1/g}$, pri $1^\infty$, $0^0$, $\infty^0$ pa logaritmiramo. Primer: $\lim_{x \to 0^+} x \ln x = \lim \frac{\ln x}{1/x} = \lim \frac{1/x}{-1/x^2} = \lim (-x) = 0$.

**7. Taylorjev polinom.** Naj ima $f$ v točki $a$ odvode do reda $n$. **Taylorjev polinom** stopnje $n$ okoli $a$ je

$$T_n(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x - a)^n.$$

To je edini polinom stopnje največ $n$, ki ima v $a$ enako vrednost in enake odvode do reda $n$ kot $f$. Za $n = 1$ je to tangenta. Okoli $a = 0$ (Maclaurinov polinom) so najpomembnejši:

$$e^x \approx 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!}, \quad \sin x \approx x - \frac{x^3}{3!}, \quad \cos x \approx 1 - \frac{x^2}{2!}, \quad \ln(1 + x) \approx x - \frac{x^2}{2} + \frac{x^3}{3}.$$

**Taylorjeva formula z ostankom.** Če ima $f$ odvode do reda $n + 1$, je $f(x) = T_n(x) + R_n(x)$, kjer je ostanek v **Lagrangeovi obliki**

$$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n + 1)!}(x - a)^{n+1}$$

za neki $\xi$ med $a$ in $x$. Če je $|f^{(n+1)}| \le M$, je napaka največ $\frac{M}{(n + 1)!}|x - a|^{n+1}$. Za $n = 0$ je to ravno Lagrangeov izrek.

## Rešeni primeri

### Primer 1 (lažji)

Poišči lokalne ekstreme in prevoj funkcije $f(x) = x^3 - 3x^2 - 9x + 5$ ter določi intervale naraščanja in padanja.

**Podatki:** $f(x) = x^3 - 3x^2 - 9x + 5$, $D_f = \mathbb{R}$
**Iščemo:** stacionarne točke, vrsto ekstremov, intervale monotonosti in prevoj

:::formula
Stacionarne točke: $f'(x) = 0$. Test z drugim odvodom: $f''(x_0) < 0$ maksimum, $f''(x_0) > 0$ minimum. Prevoj: $f''$ spremeni predznak.
:::

**Rešitev:**

1. $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)$; stacionarni točki sta $x = -1$ in $x = 3$.
2. Predznak $f'$: pozitiven za $x < -1$, negativen za $-1 < x < 3$, pozitiven za $x > 3$. Funkcija narašča na $(-\infty, -1)$ in $(3, \infty)$, pada na $(-1, 3)$.
3. $f''(x) = 6x - 6$; $f''(-1) = -12 < 0$, zato je v $x = -1$ lokalni maksimum $f(-1) = -1 - 3 + 9 + 5 = 10$.
4. $f''(3) = 12 > 0$, zato je v $x = 3$ lokalni minimum $f(3) = 27 - 27 - 27 + 5 = -22$.
5. $f''(x) = 0$ pri $x = 1$, kjer $f''$ spremeni predznak; prevoj je v točki $(1, f(1)) = (1, -6)$.
6. Odgovor: lokalni maksimum $T_{\max}(-1, 10)$, lokalni minimum $T_{\min}(3, -22)$, prevoj $P(1, -6)$; funkcija pada na $(-1, 3)$ in drugod narašča.

### Primer 2

Izračunaj $\displaystyle \lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$.

**Podatki:** $f(x) = e^x - 1 - x$, $g(x) = x^2$, $x \to 0$
**Iščemo:** limito $\lim_{x \to 0} \frac{f(x)}{g(x)}$

:::formula
L'Hospitalovo pravilo: pri $\frac{0}{0}$ ali $\frac{\infty}{\infty}$ je $\lim \frac{f}{g} = \lim \frac{f'}{g'}$, če desna limita obstaja.
:::

**Rešitev:**

1. Pri $x = 0$: $f(0) = 1 - 1 - 0 = 0$ in $g(0) = 0$. Nedoločeni izraz $\frac{0}{0}$.
2. Prvič odvajamo števec in imenovalec: $\frac{f'(x)}{g'(x)} = \frac{e^x - 1}{2x}$. Pri $x = 0$ je spet $\frac{0}{0}$.
3. Drugič: $\frac{e^x}{2}$, kar je zvezno v $0$ in ima vrednost $\frac{1}{2}$.
4. Ker obstaja zadnja limita, obstajajo tudi prejšnji in so enake.
5. Preizkus s Taylorjevim polinomom: $e^x - 1 - x = \frac{x^2}{2} + \frac{x^3}{6} + \dots$, deljeno z $x^2$ gre proti $\frac{1}{2}$.
6. Odgovor: limita je $\frac{1}{2}$.

### Primer 3 (težji)

Zapiši Taylorjev polinom tretje stopnje funkcije $f(x) = \ln(1 + x)$ okoli $a = 0$, z njim približno izračunaj $\ln 1{,}2$ in z Lagrangeovo obliko ostanka oceni napako.

**Podatki:** $f(x) = \ln(1 + x)$, $a = 0$, stopnja $n = 3$, točka $x = 0{,}2$
**Iščemo:** $T_3(x)$, približek $T_3(0{,}2)$ in zgornjo mejo napake $|R_3(0{,}2)|$

:::formula
$T_n(x) = \sum_{k=0}^{n} \dfrac{f^{(k)}(0)}{k!} x^k$, $\quad R_n(x) = \dfrac{f^{(n+1)}(\xi)}{(n + 1)!} x^{n+1}$, $\xi$ med $0$ in $x$.
:::

**Rešitev:**

1. Odvodi: $f'(x) = \frac{1}{1 + x}$, $f''(x) = -\frac{1}{(1 + x)^2}$, $f'''(x) = \frac{2}{(1 + x)^3}$, $f^{(4)}(x) = -\frac{6}{(1 + x)^4}$.
2. Vrednosti v $0$: $f(0) = 0$, $f'(0) = 1$, $f''(0) = -1$, $f'''(0) = 2$.
3. $T_3(x) = 0 + x - \frac{1}{2!}x^2 + \frac{2}{3!}x^3 = x - \frac{x^2}{2} + \frac{x^3}{3}$.
4. $T_3(0{,}2) = 0{,}2 - 0{,}02 + \frac{0{,}008}{3} \approx 0{,}2 - 0{,}02 + 0{,}002667 = 0{,}182667$.
5. Ocena ostanka: $|R_3(0{,}2)| = \frac{6}{(1 + \xi)^4 \cdot 4!} \cdot 0{,}2^4 \le \frac{6}{24} \cdot 0{,}0016 = 0{,}0004$, ker je $(1 + \xi)^4 \ge 1$ za $\xi \in (0;\ 0{,}2)$.
6. Primerjava: natančno je $\ln 1{,}2 \approx 0{,}182322$; dejanska napaka je približno $0{,}000345$, kar je pod oceno $0{,}0004$.
7. Odgovor: $T_3(x) = x - \frac{x^2}{2} + \frac{x^3}{3}$, $\ln 1{,}2 \approx 0{,}1827$ z napako največ $0{,}0004$.

## Pogoste napake

- **Ničla odvoda = ekstrem.** Pri $x^3$ je $f'(0) = 0$, a ekstrema ni. Vedno preveri spremembo predznaka $f'$ ali predznak $f''$.
- **Pozabljena krajišča.** Pri globalnem ekstremu na $[a, b]$ je največja vrednost pogosto v krajišču, kjer odvod ni $0$.
- **L'Hospital na kvocientu.** Študent odvaja $\frac{f}{g}$ po pravilu za kvocient. Pravilno: posebej odvajaj števec in posebej imenovalec.
- **L'Hospital brez nedoločenega izraza.** Pri $\lim_{x \to 0} \frac{\cos x}{x + 1} = 1$ pravila ne smemo uporabiti; odvajanje bi dalo napačno vrednost $\frac{-\sin 0}{1} = 0$.
- **Pozabljene fakultete v Taylorjevem polinomu.** Koeficient pri $(x - a)^k$ je $\frac{f^{(k)}(a)}{k!}$, ne $f^{(k)}(a)$.
- **Taylorjev približek daleč od točke razvoja.** Polinom je dober le blizu $a$. Za $\ln(1 + x)$ pri $x = 2$ polinomi okoli $0$ sploh ne konvergirajo k pravi vrednosti.
- **Prevoj samo iz $f'' = 0$.** Pri $x^4$ je $f''(0) = 0$, a prevoja ni, ker $f''$ ne spremeni predznaka.

## Povzetek

- Lagrange: $f'(\xi) = \frac{f(b) - f(a)}{b - a}$ za neki $\xi \in (a, b)$; od tod $f' > 0 \Rightarrow$ narašča, $f' < 0 \Rightarrow$ pada.
- Stacionarne točke: $f'(x_0) = 0$; maksimum pri $f''(x_0) < 0$, minimum pri $f''(x_0) > 0$.
- Globalni ekstremi na $[a, b]$: primerjaj vrednosti v stacionarnih točkah in krajiščih.
- $f'' > 0$ konveksna, $f'' < 0$ konkavna; prevoj, kjer $f''$ spremeni predznak.
- L'Hospital: pri $\frac{0}{0}$ ali $\frac{\infty}{\infty}$ je $\lim \frac{f}{g} = \lim \frac{f'}{g'}$.
- Taylor: $T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k$, napaka $R_n = \frac{f^{(n+1)}(\xi)}{(n + 1)!}(x - a)^{n+1}$.

## Drugače: Na sliki

Nariši graf iz Primera 1. Pri velikih negativnih $x$ je globoko spodaj, nato se dviga do vrha $(-1, 10)$, kjer je tangenta vodoravna. Od tam pada skozi prevoj $(1, -6)$, kjer je padanje najstrmejše, do dna $(3, -22)$, kjer je tangenta spet vodoravna, in nato spet raste proti $+\infty$. Levo od prevoja je graf »kapa« (konkaven), desno »skodelica« (konveksen).

Lagrangeov izrek na sliki: poveži krajišči grafa na $[a, b]$ s sekanto. Če sekanto vzporedno premikaš, se bo vsaj enkrat dotaknila grafa kot tangenta; tam je $f'(\xi)$ enak naklonu sekante.

Taylorjevi polinomi za $e^x$ okoli $0$: tangenta $1 + x$ se ujema z grafom le v okolici točke $(0, 1)$; parabola $1 + x + \frac{x^2}{2}$ se prilega na širšem območju; vsak naslednji polinom se oprime grafa še dlje.

## Drugače: Iz vsakdanjega življenja

**Koncentracija zdravila.** Pri peroralnem jemanju je koncentracija v krvi pogosto opisana s $c(t) = A t e^{-kt}$. Odvod $c'(t) = A e^{-kt}(1 - kt)$ je enak $0$ pri $t = \frac{1}{k}$. Pred tem časom koncentracija raste, potem pada, zato je pri $t_{\max} = \frac{1}{k}$ največja. Za $k = 0{,}25\,\mathrm{h^{-1}}$ je vrh po $4\,\mathrm{h}$.

**Najcenejša pločevinka.** Valjasta pločevinka naj ima prostornino $V$ in čim manjšo površino. Iz $V = \pi r^2 h$ izrazimo $h$ in dobimo površino $S(r) = 2\pi r^2 + \frac{2V}{r}$. Iz $S'(r) = 4\pi r - \frac{2V}{r^2} = 0$ sledi $r = \sqrt[3]{\frac{V}{2\pi}}$ in $h = 2r$: optimalna pločevinka je enako visoka kot široka. Izračun s števili je v razdelku »Korak za korakom«.

**Fizikalni približki.** Pri nihalu z majhnim odmikom nadomestimo $\sin\varphi \approx \varphi$ (Taylorjev polinom prve stopnje), kar da harmonično nihanje. Pri relativistični energiji $\frac{mc^2}{\sqrt{1 - v^2/c^2}} \approx mc^2 + \frac{1}{2}mv^2$ za majhne hitrosti dobimo klasično kinetično energijo.

## Drugače: Korak za korakom s številkami

Pločevinka naj ima prostornino $V = 1\,\mathrm{L} = 1000\,\mathrm{cm^3}$. Kakšna naj bosta polmer in višina, da je površina najmanjša?

1. **Spremenljivka.** Polmer $r > 0$ v $\mathrm{cm}$.
2. **Višina iz pogoja.** $h = \frac{V}{\pi r^2} = \frac{1000}{\pi r^2}$.
3. **Površina.** $S(r) = 2\pi r^2 + 2\pi r h = 2\pi r^2 + \frac{2000}{r}$.
4. **Odvod.** $S'(r) = 4\pi r - \frac{2000}{r^2}$.
5. **Stacionarna točka.** $4\pi r^3 = 2000$, $r^3 = \frac{500}{\pi} \approx 159{,}15$, $r \approx 5{,}42\,\mathrm{cm}$.
6. **Vrsta ekstrema.** $S''(r) = 4\pi + \frac{4000}{r^3} > 0$, zato je to minimum.
7. **Višina.** $h = \frac{1000}{\pi \cdot 5{,}419^2} \approx 10{,}84\,\mathrm{cm} = 2r$.
8. **Površina.** $S \approx 2\pi \cdot 5{,}419^2 + \frac{2000}{5{,}419} \approx 184{,}5 + 369{,}1 \approx 553{,}6\,\mathrm{cm^2}$.

Prave pločevinke so pogosto višje, ker sta dno in pokrov debelejša in dražja od plašča.

## Drugače: Bolj natančno

**Dokaz Rollovega izreka.** Po Weierstrassovem izreku $f$ na $[a, b]$ doseže maksimum in minimum. Če sta oba v krajiščih, je zaradi $f(a) = f(b)$ funkcija konstantna in $f' = 0$ povsod. Sicer je vsaj en ekstrem v notranji točki $\xi$. Tam je diferenčni kvocient z ene strani $\ge 0$, z druge $\le 0$ (na primer pri maksimumu), zato je $f'(\xi) = 0$. $\square$

**Dokaz Lagrangeovega izreka.** Pomožna funkcija $\varphi(x) = f(x) - \frac{f(b) - f(a)}{b - a}(x - a)$ izpolnjuje $\varphi(a) = \varphi(b) = f(a)$. Po Rollovem izreku obstaja $\xi$ z $\varphi'(\xi) = 0$, kar je natanko trditev izreka. $\square$

**Cauchyjev izrek in L'Hospital.** Posplošitev: obstaja $\xi \in (a, b)$ z $\big(f(b) - f(a)\big)g'(\xi) = \big(g(b) - g(a)\big)f'(\xi)$; dokaz z $\psi = f - \frac{f(b) - f(a)}{g(b) - g(a)} g$. Za L'Hospitalovo pravilo pri $\frac{0}{0}$ definiramo $f(a) = g(a) = 0$ in dobimo $\frac{f(x)}{g(x)} = \frac{f'(\xi_x)}{g'(\xi_x)}$ za $\xi_x$ med $a$ in $x$. Ko gre $x \to a$, gre tudi $\xi_x \to a$.

**Taylorjeva vrsta.** Če gre $R_n(x) \to 0$, ko $n \to \infty$, je $f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(a)}{k!}(x - a)^k$. Za $e^x$ je $|R_n(x)| \le \frac{e^{|x|}|x|^{n+1}}{(n + 1)!} \to 0$ za vsak $x$, zato vrsta konvergira na vsem $\mathbb{R}$. Za $\ln(1 + x)$ konvergira samo za $-1 < x \le 1$. Obstajajo tudi funkcije, kot je $e^{-1/x^2}$ (z vrednostjo $0$ v $0$), ki imajo vse odvode v $0$ enake $0$, a niso ničelne: Taylorjeva vrsta ne predstavlja vedno funkcije.

## Preveri se

? Kje ima funkcija $f(x) = x^2 - 4x + 1$ lokalni minimum?
+ pri $x = 2$
- pri $x = -2$
- pri $x = 4$
> $f'(x) = 2x - 4 = 0$ pri $x = 2$, $f''(x) = 2 > 0$. Minimalna vrednost je $f(2) = -3$.

? Koliko je $\displaystyle \lim_{x \to 0} \frac{\sin x - x}{x^3}$?
+ $-\frac{1}{6}$
- $0$
- $\frac{1}{6}$
> Trikrat L'Hospital: $\frac{\cos x - 1}{3x^2} \to \frac{-\sin x}{6x} \to \frac{-\cos x}{6} \to -\frac{1}{6}$. Enako iz $\sin x = x - \frac{x^3}{6} + \dots$.

? Kateri je Taylorjev polinom druge stopnje funkcije $e^x$ okoli $0$?
+ $1 + x + \frac{x^2}{2}$
- $1 + x + x^2$
- $x + \frac{x^2}{2}$
> Vsi odvodi $e^x$ so v $0$ enaki $1$, koeficienti so $\frac{1}{k!}$: $1$, $1$, $\frac{1}{2}$.

? Za funkcijo $f$ velja $f'(x_0) = 0$ in $f''(x_0) = -3$. Kaj ima $f$ v točki $x_0$?
+ lokalni maksimum
- lokalni minimum
- prevoj
> Stacionarna točka z negativnim drugim odvodom je lokalni maksimum: graf je tam konkaven.
