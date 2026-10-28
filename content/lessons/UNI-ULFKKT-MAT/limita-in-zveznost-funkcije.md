---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Limita je temeljni pojem analize. Z njo definiramo odvod (hitrost spremembe), določeni integral (ploščino, delo, količino snovi) in vsoto neskončne vrste. Brez limite ne moremo natančno povedati, kaj pomeni »hitrost v trenutku« ali »koncentracija, ko gre čas proti neskončnosti«.

Pogosto nas zanima, kaj se dogaja s funkcijo, ko se $x$ približuje točki, v kateri funkcija sploh ni definirana. Izraz $\frac{\sin x}{x}$ pri $x = 0$ nima vrednosti, a se pri majhnih $x$ vrednosti približujejo $1$. Prav to opiše limita.

**Zveznost** pa opisuje funkcije, ki nimajo »skokov«: majhna sprememba vhoda povzroči majhno spremembo izhoda. Večina fizikalnih in kemijskih količin se spreminja zvezno, zato za zvezne funkcije veljajo močni izreki: na zaprtem intervalu dosežejo najmanjšo in največjo vrednost in vsako vmesno vrednost. Na tem temeljijo numerične metode za reševanje enačb.

V tej lekciji se naučiš:

- računati limite funkcij in razreševati **nedoločene izraze**,
- prepoznati **zvezne** funkcije in vrste nezveznosti,
- uporabljati lastnosti zveznih funkcij na **zaprtem intervalu**.

## Razlaga

**1. Limita funkcije (intuitivno).** Zapis

$$\lim_{x \to a} f(x) = L$$

pomeni: ko se $x$ poljubno približa $a$ (a $x \neq a$), se $f(x)$ poljubno približa $L$. Vrednost $f(a)$ pri tem ni pomembna; funkcija v $a$ sploh ni nujno definirana.

**Leva in desna limita.** $\lim_{x \to a^-} f(x)$ je limita, ko se $x$ približuje $a$ z leve ($x < a$), $\lim_{x \to a^+} f(x)$ pa z desne. Limita obstaja natanko tedaj, ko obstajata obe enostranski limiti in sta enaki. Primer: za $f(x) = \frac{|x|}{x}$ je leva limita v $0$ enaka $-1$, desna $1$, zato limita ne obstaja.

**Limite v neskončnosti** in **neskončne limite**: $\lim_{x \to \infty} \frac{1}{x} = 0$ pomeni, da se vrednosti za velike $x$ približujejo $0$; $\lim_{x \to 0^+} \frac{1}{x} = \infty$ pomeni, da vrednosti rastejo čez vse meje. Premica $y = L$ je **vodoravna asimptota**, če je $\lim_{x \to \pm\infty} f(x) = L$, premica $x = a$ pa **navpična asimptota**, če je vsaj ena enostranska limita v $a$ neskončna.

**2. Pravila za računanje.** Če obstajata $\lim_{x \to a} f(x) = A$ in $\lim_{x \to a} g(x) = B$, velja:

- $\lim (f \pm g) = A \pm B$, $\lim (f \cdot g) = A \cdot B$,
- $\lim \frac{f}{g} = \frac{A}{B}$, če je $B \neq 0$,
- $\lim h(f(x)) = h(A)$, če je $h$ zvezna v $A$.

Za polinome, racionalne, eksponentne, logaritemske in krožne funkcije je zato limita v točki iz definicijskega območja kar vrednost funkcije: $\lim_{x \to 2} (x^2 + 1) = 5$.

**3. Nedoločeni izrazi.** Težave nastanejo, ko pravila dajo enega od izrazov

$$\frac{0}{0},\quad \frac{\infty}{\infty},\quad \infty - \infty,\quad 0 \cdot \infty,\quad 1^\infty,\quad 0^0,\quad \infty^0.$$

Ti izrazi niso števila: rezultat je odvisen od tega, kako hitro gresta posamezna dela proti svojim limitam. Izraz moramo najprej preoblikovati. Najpogostejši prijemi:

- **Razstavljanje in krajšanje** (pri $\frac{0}{0}$ za racionalne funkcije): skupni faktor $(x - a)$ okrajšamo.
- **Racionalizacija** (pri korenih): pomnožimo s konjugiranim izrazom, npr. $\sqrt{u} - \sqrt{v} = \frac{u - v}{\sqrt{u} + \sqrt{v}}$.
- **Deljenje z najvišjo potenco** (pri $\frac{\infty}{\infty}$ in $x \to \infty$): za racionalno funkcijo je limita kvocient vodilnih koeficientov, če sta stopnji enaki, $0$, če ima imenovalec višjo stopnjo, in $\pm\infty$, če ima višjo stopnjo števec.
- **Znane limite:**

$$\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad \lim_{x \to 0} \frac{e^x - 1}{x} = 1, \quad \lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1, \quad \lim_{x \to \infty}\left(1 + \frac{1}{x}\right)^x = e.$$

Pri $1^\infty$, $0^0$ in $\infty^0$ zapišemo $f^g = e^{g \ln f}$ in izračunamo limito eksponenta. Kasneje bomo spoznali še L'Hospitalovo pravilo, ki uporablja odvode.

**Izrek o sendviču.** Če je $g(x) \le f(x) \le h(x)$ blizu $a$ in je $\lim g = \lim h = L$, je tudi $\lim f = L$. Tako dokažemo $\lim_{x \to 0} x \sin \frac{1}{x} = 0$, saj je $-|x| \le x \sin\frac{1}{x} \le |x|$.

**4. Zveznost.** Funkcija $f$ je **zvezna v točki** $a \in D_f$, če je

$$\lim_{x \to a} f(x) = f(a).$$

V tem so skriti trije pogoji: $f(a)$ obstaja, limita obstaja in obe sta enaki. Funkcija je zvezna na intervalu, če je zvezna v vsaki njegovi točki. Vse elementarne funkcije so zvezne na svojem definicijskem območju. Vsota, produkt, kvocient (kjer imenovalec ni $0$) in kompozitum zveznih funkcij so zvezne.

**Vrste nezveznosti** v točki $a$:

- **odpravljiva nezveznost:** limita obstaja, a je različna od $f(a)$ ali $f(a)$ ni definirana; funkcijo popravimo tako, da za $f(a)$ vzamemo limito (primer: $\frac{\sin x}{x}$ v $0$),
- **skok:** obe enostranski limiti obstajata, a sta različni (primer: $\frac{|x|}{x}$ v $0$),
- **pol** ali druga neskončna nezveznost: vsaj ena enostranska limita je neskončna (primer: $\frac{1}{x}$ v $0$).

**5. Zvezne funkcije na zaprtem intervalu.** Naj bo $f$ zvezna na $[a, b]$. Tedaj velja:

- **Omejenost:** $f$ je na $[a, b]$ omejena.
- **Weierstrassov izrek:** $f$ na $[a, b]$ doseže najmanjšo in največjo vrednost.
- **Bolzanov izrek:** če imata $f(a)$ in $f(b)$ različna predznaka, obstaja $c \in (a, b)$ z $f(c) = 0$.
- **Izrek o vmesni vrednosti:** $f$ zavzame vsako vrednost med $f(a)$ in $f(b)$.

Vsi pogoji so nujni. Funkcija $\frac{1}{x}$ je na $(0, 1]$ zvezna, a ni omejena (interval ni zaprt). Funkcija s skokom lahko preskoči ničlo.

**Bisekcija.** Bolzanov izrek da preprosto numerično metodo: interval z ničlo razpolovimo, izračunamo vrednost v sredini in obdržimo polovico, na kateri funkcija menja predznak. Po $n$ korakih je ničla določena na $\frac{b - a}{2^n}$ natančno.

## Rešeni primeri

### Primer 1 (lažji)

Izračunaj $\displaystyle \lim_{x \to 3} \frac{x^2 - 9}{x^2 - x - 6}$.

**Podatki:** $f(x) = \dfrac{x^2 - 9}{x^2 - x - 6}$, $x \to 3$
**Iščemo:** limito $\lim_{x \to 3} f(x)$

:::formula
Pri $\frac{0}{0}$ za racionalno funkcijo števec in imenovalec razstavimo in okrajšamo skupni faktor $(x - a)$. Nato vstavimo $x = a$.
:::

**Rešitev:**

1. Vstavimo $x = 3$: števec $9 - 9 = 0$, imenovalec $9 - 3 - 6 = 0$. Dobimo nedoločeni izraz $\frac{0}{0}$.
2. Razstavimo: $x^2 - 9 = (x - 3)(x + 3)$ in $x^2 - x - 6 = (x - 3)(x + 2)$.
3. Za $x \neq 3$ okrajšamo: $f(x) = \dfrac{x + 3}{x + 2}$.
4. Ta funkcija je zvezna v $3$, zato je limita $\dfrac{3 + 3}{3 + 2} = \dfrac{6}{5} = 1{,}2$.
5. Odgovor: limita je enaka $\frac{6}{5} = 1{,}2$. Funkcija ima v $x = 3$ odpravljivo nezveznost.

### Primer 2

Dana je funkcija
$f(x) = \dfrac{e^{2x} - 1}{x}$ za $x < 0$ in $f(x) = x^2 + a$ za $x \ge 0$.
Določi parameter $a$, da bo $f$ zvezna na vsem $\mathbb{R}$.

**Podatki:** $f(x) = \dfrac{e^{2x} - 1}{x}$ za $x < 0$, $f(x) = x^2 + a$ za $x \ge 0$
**Iščemo:** vrednost parametra $a$

:::formula
$f$ je zvezna v $0$, če je $\lim_{x \to 0^-} f(x) = \lim_{x \to 0^+} f(x) = f(0)$. Znana limita: $\lim_{u \to 0} \dfrac{e^u - 1}{u} = 1$.
:::

**Rešitev:**

1. Za $x < 0$ in za $x > 0$ je $f$ elementarna funkcija, ki je tam definirana, zato je tam zvezna. Preveriti moramo le točko $0$.
2. Leva limita: $\dfrac{e^{2x} - 1}{x} = 2 \cdot \dfrac{e^{2x} - 1}{2x}$. Z $u = 2x \to 0$ dobimo $\lim_{x \to 0^-} f(x) = 2 \cdot 1 = 2$.
3. Desna limita in vrednost: $\lim_{x \to 0^+} (x^2 + a) = a = f(0)$.
4. Pogoj za zveznost: $a = 2$.
5. Odgovor: za $a = 2$ je funkcija zvezna na vsem $\mathbb{R}$; za vsak drug $a$ ima v $0$ skok.

### Primer 3 (težji)

Pokaži, da ima enačba $x^3 + x - 1 = 0$ rešitev na intervalu $[0, 1]$, in jo z bisekcijo v treh korakih zameji na interval dolžine $0{,}125$. Ali je rešitev ena sama?

**Podatki:** $f(x) = x^3 + x - 1$, interval $[0, 1]$, število korakov bisekcije $3$, končna dolžina intervala $0{,}125$
**Iščemo:** dokaz obstoja ničle, interval dolžine $0{,}125$, ki jo vsebuje, in ali je ničla enolična

:::formula
Bolzanov izrek: $f$ zvezna na $[a, b]$ in $f(a) f(b) < 0 \Rightarrow$ obstaja $c \in (a, b)$ z $f(c) = 0$. Bisekcija: $m = \frac{a + b}{2}$, obdržimo polovico, kjer $f$ menja predznak.
:::

**Rešitev:**

1. $f$ je polinom, torej zvezna. $f(0) = -1 < 0$ in $f(1) = 1 + 1 - 1 = 1 > 0$. Po Bolzanovem izreku obstaja ničla v $(0, 1)$.
2. Prvi korak: $m = 0{,}5$, $f(0{,}5) = 0{,}125 + 0{,}5 - 1 = -0{,}375 < 0$. Ničla je v $(0{,}5;\ 1)$.
3. Drugi korak: $m = 0{,}75$, $f(0{,}75) = 0{,}421875 + 0{,}75 - 1 = 0{,}171875 > 0$. Ničla je v $(0{,}5;\ 0{,}75)$.
4. Tretji korak: $m = 0{,}625$, $f(0{,}625) = 0{,}244140625 + 0{,}625 - 1 \approx -0{,}1309 < 0$. Ničla je v $(0{,}625;\ 0{,}75)$, ki ima dolžino $0{,}125$.
5. Enoličnost: $x^3$ in $x$ sta strogo naraščajoči, zato je $f$ strogo naraščajoča in ima največ eno ničlo.
6. Odgovor: enačba ima natanko eno realno rešitev, ki leži na intervalu $(0{,}625;\ 0{,}75)$ (natančneje $x \approx 0{,}682$).

## Pogoste napake

- **Vstavljanje v nedoločeni izraz.** Študent pri $\frac{0}{0}$ napiše, da je limita $0$ ali $1$. Izraz $\frac{0}{0}$ ni število; najprej ga preoblikuj.
- **$\infty - \infty = 0$ in $1^\infty = 1$.** Oba izraza sta nedoločena. Na primer $\lim_{x \to \infty} (1 + \frac{1}{x})^x = e$, ne $1$.
- **Zamenjava $\frac{\sin x}{x}$ za $x \to \infty$.** Znana limita $1$ velja za $x \to 0$. Za $x \to \infty$ je $\lim \frac{\sin x}{x} = 0$ (izrek o sendviču).
- **Spregledana enostranska limita.** Pri funkcijah s $|x|$, korenom ali s predpisom po kosih vedno preveri levo in desno limito posebej.
- **»Zvezna« pomeni »definirana«.** Funkcija $\frac{1}{x}$ je zvezna na svojem definicijskem območju $\mathbb{R} \setminus \{0\}$, a je na $[-1, 1]$ ne moremo obravnavati kot zvezne, saj v $0$ ni definirana. Bolzanovega izreka zato ne smemo uporabiti: $\frac{1}{x}$ menja predznak, a ničle nima.
- **Pozabljeni pogoji izrekov.** Weierstrassov in Bolzanov izrek potrebujeta zaprt interval in zveznost na vsem intervalu.

## Povzetek

- $\lim_{x \to a} f(x) = L$: ko gre $x \to a$ ($x \neq a$), gre $f(x) \to L$. Limita obstaja, če sta leva in desna limita enaki.
- Pravila za vsoto, produkt in kvocient veljajo, če ne nastane nedoločeni izraz ($\frac{0}{0}$, $\frac{\infty}{\infty}$, $\infty - \infty$, $0 \cdot \infty$, $1^\infty$, $0^0$, $\infty^0$).
- Prijemi: krajšanje, racionalizacija, deljenje z najvišjo potenco, znane limite ($\frac{\sin x}{x}$, $\frac{e^x - 1}{x}$, $(1 + \frac{1}{x})^x$), sendvič.
- $f$ je zvezna v $a$, če je $\lim_{x \to a} f(x) = f(a)$. Elementarne funkcije so zvezne na svojem $D_f$.
- Nezveznosti: odpravljiva, skok, pol.
- Zvezna funkcija na $[a, b]$ je omejena, doseže min in max ter vse vmesne vrednosti (Bolzano: ničla ob menjavi predznaka).

## Drugače: Na sliki

Nariši graf $f(x) = \frac{x^2 - 9}{x^2 - x - 6}$ iz Primera 1. Po krajšanju je to $\frac{x + 3}{x + 2}$, hiperbola z navpično asimptoto $x = -2$ in vodoravno $y = 1$. V točki $(3;\ 1{,}2)$ pa je **luknja**: prazen krožec, ker prvotna funkcija tam ni definirana. Limita gleda, kam »kaže« krivulja ob luknji, zato je $1{,}2$.

Pri **skoku** se graf pretrga: leva veja se konča na eni višini, desna se začne na drugi. Pri **polu** gre graf ob navpični asimptoti proti $+\infty$ ali $-\infty$.

Bolzanov izrek si predstavljaj kot reko: če je ena točka pod gladino ($f(a) < 0$), druga nad njo ($f(b) > 0$), moraš z neprekinjeno potjo vmes vsaj enkrat prečkati gladino $y = 0$.

## Drugače: Iz vsakdanjega življenja

**Koncentracija v neskončnosti.** Pri dovajanju zdravila s stalno hitrostjo je koncentracija v krvi pogosto $c(t) = c_\infty (1 - e^{-kt})$. Ker je $\lim_{t \to \infty} e^{-kt} = 0$, je $\lim_{t \to \infty} c(t) = c_\infty$: to je **ravnovesna koncentracija**, h kateri se približujemo, a je nikoli povsem ne dosežemo.

**Michaelis-Mentenina kinetika.** Hitrost encimske reakcije je $v(S) = \frac{v_{\max} S}{K_M + S}$. Delimo z $S$: $v = \frac{v_{\max}}{K_M / S + 1} \to v_{\max}$, ko $S \to \infty$. Vodoravna asimptota je največja hitrost, ki je pri še tako veliki koncentraciji substrata ne presežemo.

**Skok v tehniki.** Ko vklopimo stikalo, se napetost iz $0\,\mathrm{V}$ v trenutku poveča na $12\,\mathrm{V}$; idealiziran model je funkcija s skokom. Fazni prehod, kot je vrenje vode pri $100\,^\circ\mathrm{C}$, pa povzroči skok gostote v odvisnosti od temperature.

**Iskanje ničle.** Kalkulatorji in programi za računanje ravnotežnih koncentracij pogosto rešujejo enačbe tipa $f(x) = 0$ prav z bisekcijo ali njenimi izboljšavami. Zveznost zagotavlja, da metoda ne zgreši rešitve.

## Drugače: Korak za korakom s številkami

Izračunajmo $\lim_{x \to \infty} \left(\sqrt{x^2 + 4x} - x\right)$.

1. **Vrsta izraza.** Za velike $x$ gresta oba člena proti $\infty$: nedoločeni izraz $\infty - \infty$.
2. **Številčni občutek.** Za $x = 100$: $\sqrt{10\,400} - 100 \approx 101{,}980 - 100 = 1{,}980$. Za $x = 10\,000$: $\sqrt{100\,040\,000} - 10\,000 \approx 1{,}9998$. Slutimo limito $2$.
3. **Racionalizacija.** Pomnožimo in delimo s $\sqrt{x^2 + 4x} + x$:
$$\sqrt{x^2 + 4x} - x = \frac{(x^2 + 4x) - x^2}{\sqrt{x^2 + 4x} + x} = \frac{4x}{\sqrt{x^2 + 4x} + x}.$$
4. **Deljenje z $x$** (za $x > 0$ je $\sqrt{x^2} = x$): $\dfrac{4}{\sqrt{1 + \frac{4}{x}} + 1}$.
5. **Limita.** $\frac{4}{x} \to 0$, zato izraz gre proti $\frac{4}{\sqrt{1} + 1} = \frac{4}{2} = 2$.
6. **Preizkus.** Rezultat se ujema s številčno oceno iz koraka 2.

## Drugače: Bolj natančno

**Definicija limite (ε-δ).** Naj bo $f$ definirana na okolici točke $a$, razen morda v $a$. Pravimo, da je $\lim_{x \to a} f(x) = L$, če

$$\forall \varepsilon > 0 \ \exists \delta > 0 : \ 0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon.$$

Za vsako (še tako ozko) toleranco $\varepsilon$ okoli $L$ obstaja okolica točke $a$, na kateri so vse vrednosti funkcije znotraj tolerance. **Zveznost** v $a$ zapišemo enako, le da dovolimo tudi $x = a$ in je $L = f(a)$.

*Primer.* Pokažimo $\lim_{x \to 2}(3x - 1) = 5$. Velja $|(3x - 1) - 5| = 3|x - 2|$. Za dani $\varepsilon$ izberemo $\delta = \frac{\varepsilon}{3}$; iz $|x - 2| < \delta$ sledi $|f(x) - 5| < 3\delta = \varepsilon$.

**Heinejeva definicija.** Ekvivalentno: $\lim_{x \to a} f(x) = L$ natanko tedaj, ko za vsako zaporedje $x_n \to a$, $x_n \neq a$, velja $f(x_n) \to L$. S tem pokažemo, da limita ne obstaja: za $f(x) = \sin\frac{1}{x}$ dobimo z zaporedjema $x_n = \frac{1}{n\pi}$ in $y_n = \frac{1}{\pi/2 + 2n\pi}$ limiti $0$ in $1$.

**Dokaz znane limite $\frac{\sin x}{x} \to 1$.** Za $0 < x < \frac{\pi}{2}$ primerjamo ploščine v enotskem krogu: trikotnik, krožni izsek in večji trikotnik dajo $\frac{\sin x}{2} \le \frac{x}{2} \le \frac{\tan x}{2}$. Od tod $\cos x \le \frac{\sin x}{x} \le 1$. Ker gre $\cos x \to 1$, izrek o sendviču da limito $1$. Zaradi sodosti velja tudi za $x < 0$.

**Ideja dokaza Bolzanovega izreka.** Bisekcija da zaporedje vloženih intervalov $[a_n, b_n]$ z dolžinami $\frac{b - a}{2^n}$, na katerih $f$ menja predznak. Po aksiomu polnosti realnih števil imata zaporedji $(a_n)$ in $(b_n)$ skupno limito $c$. Zaradi zveznosti je $f(c) = \lim f(a_n) \le 0$ in $f(c) = \lim f(b_n) \ge 0$, torej $f(c) = 0$.

## Preveri se

? Koliko je $\displaystyle \lim_{x \to 0} \frac{\sin 5x}{x}$?
- $1$
+ $5$
- $0$
> $\frac{\sin 5x}{x} = 5 \cdot \frac{\sin 5x}{5x} \to 5 \cdot 1 = 5$.

? Koliko je $\displaystyle \lim_{x \to \infty} \frac{3x^2 - x}{2x^2 + 7}$?
+ $\frac{3}{2}$
- $0$
- $\infty$
> Stopnji števca in imenovalca sta enaki, zato je limita kvocient vodilnih koeficientov $\frac{3}{2}$.

? Kateri izraz **ni** nedoločen?
- $\frac{0}{0}$
- $1^\infty$
+ $\infty + \infty$
> Vsota dveh količin, ki rasteta čez vse meje, prav tako raste čez vse meje: $\infty + \infty = \infty$. Izraza $\frac{0}{0}$ in $1^\infty$ sta nedoločena.

? Funkcija $f(x) = \frac{x^2 - 1}{x - 1}$ v $x = 1$ ni definirana. Kakšno vrednost moramo predpisati $f(1)$, da bo $f$ zvezna?
- $0$
- $1$
+ $2$
> Za $x \neq 1$ je $f(x) = x + 1$, zato je $\lim_{x \to 1} f(x) = 2$. Nezveznost je odpravljiva.
