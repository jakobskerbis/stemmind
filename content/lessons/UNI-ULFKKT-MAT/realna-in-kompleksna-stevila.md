---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Vsa matematična analiza, ki jo boš spoznal v prvem letniku, stoji na **realnih številih**. Pojmi, kot so limita, zveznost, odvod in integral, delujejo zato, ker realna števila nimajo »lukenj«: vsako zaporedje, ki se zgošča, ima limito med realnimi števili. Zato je prav, da natančneje pogledamo, kaj realna števila so in katere lastnosti uporabljamo.

Realna števila pa niso dovolj za reševanje vseh enačb. Enačba $x^2 + 1 = 0$ nima realne rešitve. Ko dodamo število $i$ z lastnostjo $i^2 = -1$, dobimo **kompleksna števila**, v katerih ima vsaka polinomska enačba rešitev. Kompleksna števila niso le matematična zanimivost: z njimi elegantno opišemo nihanje, valovanje, izmenični tok, rešitve diferencialnih enačb in kvantno mehaniko. Inženirji z njimi računajo impedanco, kemiki jih srečajo pri valovnih funkcijah in spektroskopiji.

V tej lekciji se naučiš:

- lastnosti realnih števil, ki jih potrebujemo v analizi,
- **računati s kompleksnimi števili** v algebrski obliki,
- zapisati kompleksno število v **polarni obliki** in uporabljati **Eulerjevo formulo**,
- izračunati potence in **$n$-te korene** kompleksnih števil.

## Razlaga

**1. Številske množice.** Naravna števila $\mathbb{N} = \{1, 2, 3, \dots\}$ razširimo z ničlo in negativnimi števili v cela števila $\mathbb{Z}$, nato z ulomki v racionalna števila $\mathbb{Q} = \{\frac{p}{q} : p \in \mathbb{Z},\ q \in \mathbb{N}\}$. Racionalna števila imajo končen ali periodičen decimalni zapis. Števila, kot so $\sqrt{2}$, $\pi$ in $e$, niso racionalna; skupaj z racionalnimi tvorijo **realna števila** $\mathbb{R}$. Velja $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$.

**2. Lastnosti realnih števil.** Realna števila so **urejen obseg**: seštevamo, množimo, odštevamo in delimo (razen z $0$) po znanih pravilih, poleg tega pa za vsaki dve števili velja $a < b$, $a = b$ ali $a > b$, urejenost pa je usklajena z računskimi operacijami. Ključna dodatna lastnost je **polnost** (aksiom o supremumu): vsaka neprazna navzgor omejena množica realnih števil ima **natančno zgornjo mejo** (supremum). Racionalna števila te lastnosti nimajo: množica $\{x \in \mathbb{Q} : x^2 < 2\}$ nima supremuma v $\mathbb{Q}$.

**Absolutna vrednost** $|x|$ je razdalja števila $x$ od $0$; $|a - b|$ je razdalja med $a$ in $b$. Velja **trikotniška neenakost** $|a + b| \le |a| + |b|$. Neenačbo $|x - a| < r$ rešijo natanko števila na intervalu $(a - r, a + r)$, to je **okolica** točke $a$.

**3. Kompleksna števila.** **Imaginarna enota** $i$ je število z lastnostjo $i^2 = -1$. **Kompleksno število** v **algebrski obliki** je

$$z = a + bi, \qquad a, b \in \mathbb{R}.$$

Število $a = \operatorname{Re} z$ je **realni del**, $b = \operatorname{Im} z$ pa **imaginarni del** (realno število, brez $i$). Dve kompleksni števili sta enaki, če imata enaka realna in enaka imaginarna dela. Množico vseh kompleksnih števil označimo s $\mathbb{C}$. V elektrotehniki imaginarno enoto pogosto označijo z $j$, ker je $i$ rezervirana za tok.

**Računske operacije.** Računamo kot z dvočleniki in upoštevamo $i^2 = -1$:

- $(a + bi) \pm (c + di) = (a \pm c) + (b \pm d)i$,
- $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$.

Potence enote se ponavljajo s periodo $4$: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$.

**Konjugirano število** k $z = a + bi$ je $\bar z = a - bi$. Velja $z \bar z = a^2 + b^2$, kar je realno in nenegativno. **Absolutna vrednost** (modul) je $|z| = \sqrt{a^2 + b^2} = \sqrt{z \bar z}$. Pri **deljenju** ulomek razširimo s konjugiranim imenovalcem:

$$\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{c^2 + d^2}.$$

**Kompleksna ravnina.** Število $z = a + bi$ predstavimo s točko $(a, b)$ v **kompleksni (Gaussovi) ravnini**: vodoravna os je realna, navpična imaginarna. Seštevanje ustreza seštevanju vektorjev, konjugiranje zrcaljenju čez realno os, $|z|$ pa razdalji od izhodišča.

**Množice v kompleksni ravnini.** Ker je $|z - w|$ razdalja med točkama $z$ in $w$, lahko z enačbami in neenačbami opišemo like. Enačba $|z - i| = 2$ opisuje krožnico s središčem v točki $i$ in polmerom $2$, neenačba $|z - i| < 2$ pa notranjost tega kroga. Enačba $|z - 1| = |z + 1|$ opisuje točke, ki so enako oddaljene od $1$ in $-1$, torej imaginarno os. Pogoj $\operatorname{Re} z > 0$ pomeni desno polravnino. Takšen geometrijski pogled pogosto prihrani dolgo računanje.

**4. Polarni zapis.** Točko $(a, b)$ lahko podamo tudi z razdaljo $r = |z|$ od izhodišča in kotom $\varphi$, ki ga daljica od izhodišča do $z$ oklepa s pozitivno realno osjo. Kot $\varphi$ je **argument** števila $z$, $\varphi = \arg z$. Ker je $a = r\cos\varphi$ in $b = r\sin\varphi$, je

$$z = r(\cos\varphi + i\sin\varphi).$$

Argument je določen do večkratnika $2\pi$ natančno; **glavno vrednost** izberemo na intervalu $(-\pi, \pi]$ ali $[0, 2\pi)$. Izračunamo ga iz $\cos\varphi = \frac{a}{r}$, $\sin\varphi = \frac{b}{r}$. Formula $\tan\varphi = \frac{b}{a}$ sama ne zadošča: kvadrant moramo določiti iz predznakov $a$ in $b$.

**5. Eulerjeva formula.** Za vsak realni $\varphi$ velja

$$e^{i\varphi} = \cos\varphi + i\sin\varphi.$$

Zato je polarni zapis krajše $z = r e^{i\varphi}$ (eksponentna oblika). Za $\varphi = \pi$ dobimo znamenito enakost $e^{i\pi} + 1 = 0$. Število $e^{i\varphi}$ leži na enotski krožnici; ko $\varphi$ narašča, kroži okoli izhodišča.

**Množenje in deljenje v polarni obliki.** Iz pravil za potence sledi

$$r_1 e^{i\varphi_1} \cdot r_2 e^{i\varphi_2} = r_1 r_2\, e^{i(\varphi_1 + \varphi_2)}, \qquad \frac{r_1 e^{i\varphi_1}}{r_2 e^{i\varphi_2}} = \frac{r_1}{r_2}\, e^{i(\varphi_1 - \varphi_2)}.$$

Pri množenju se absolutni vrednosti pomnožita, argumenta pa seštejeta. Množenje z $i = e^{i\pi/2}$ je vrtenje za $90^\circ$ v pozitivni smeri.

**6. Potence (de Moivrova formula).** Za naravni $n$ je

$$z^n = r^n e^{in\varphi} = r^n(\cos n\varphi + i\sin n\varphi).$$

**7. Koreni.** Enačba $w^n = z$ za $z = r e^{i\varphi} \neq 0$ ima natanko $n$ različnih rešitev

$$w_k = \sqrt[n]{r}\, e^{i\frac{\varphi + 2k\pi}{n}}, \qquad k = 0, 1, \dots, n - 1.$$

Vsi koreni ležijo na krožnici s polmerom $\sqrt[n]{r}$ in tvorijo oglišča pravilnega $n$-kotnika. Posebej imajo **$n$-ti koreni enote** ($w^n = 1$) argumente $\frac{2k\pi}{n}$.

**8. Osnovni izrek algebre.** Vsak nekonstanten polinom s kompleksnimi koeficienti ima v $\mathbb{C}$ vsaj eno ničlo, zato se polinom stopnje $n$ razcepi na $n$ linearnih faktorjev. Pri polinomih z realnimi koeficienti nastopajo nerealne ničle v konjugiranih parih. Kvadratna enačba z negativno diskriminanto ima rešitvi $z = \frac{-b \pm i\sqrt{-D}}{2a}$; na primer $z^2 + 2z + 5 = 0$ ima $D = -16$ in rešitvi $z = -1 \pm 2i$.

## Rešeni primeri

### Primer 1 (lažji)

Dani sta števili $z = 3 + 4i$ in $w = 1 - 2i$. Izračunaj $z + w$, $z \cdot w$, $\frac{z}{w}$ in $|z|$.

**Podatki:** $z = 3 + 4i$, $w = 1 - 2i$
**Iščemo:** $z + w$, $zw$, $\frac{z}{w}$, $|z|$

:::formula
$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$; $\dfrac{z}{w} = \dfrac{z \bar w}{|w|^2}$; $|a + bi| = \sqrt{a^2 + b^2}$.
:::

**Rešitev:**

1. Vsota: $z + w = (3 + 1) + (4 - 2)i = 4 + 2i$.
2. Produkt: $zw = 3 - 6i + 4i - 8i^2 = 3 - 2i + 8 = 11 - 2i$.
3. Kvocient: $\bar w = 1 + 2i$, $|w|^2 = 1 + 4 = 5$. Števec: $(3 + 4i)(1 + 2i) = 3 + 6i + 4i + 8i^2 = -5 + 10i$. Torej $\frac{z}{w} = \frac{-5 + 10i}{5} = -1 + 2i$.
4. Preizkus kvocienta: $(-1 + 2i)(1 - 2i) = -1 + 2i + 2i - 4i^2 = 3 + 4i = z$.
5. Absolutna vrednost: $|z| = \sqrt{9 + 16} = 5$.
6. Odgovor: $z + w = 4 + 2i$, $zw = 11 - 2i$, $\frac{z}{w} = -1 + 2i$, $|z| = 5$.

### Primer 2

Zapiši $z = 1 + i\sqrt{3}$ v polarni in eksponentni obliki ter izračunaj $z^6$.

**Podatki:** $z = 1 + i\sqrt{3}$, eksponent $n = 6$
**Iščemo:** $r$, $\varphi$ in $z^6$

:::formula
$r = \sqrt{a^2 + b^2}$, $\cos\varphi = \dfrac{a}{r}$, $\sin\varphi = \dfrac{b}{r}$; de Moivre: $z^n = r^n e^{in\varphi}$.
:::

**Rešitev:**

1. $r = \sqrt{1 + 3} = 2$.
2. $\cos\varphi = \frac{1}{2}$, $\sin\varphi = \frac{\sqrt{3}}{2}$; obe vrednosti sta pozitivni, zato je $\varphi$ v prvem kvadrantu: $\varphi = \frac{\pi}{3}$.
3. Polarna oblika: $z = 2\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = 2e^{i\pi/3}$.
4. Potenca: $z^6 = 2^6 e^{i \cdot 6 \cdot \pi/3} = 64\, e^{2\pi i}$.
5. Ker je $e^{2\pi i} = \cos 2\pi + i\sin 2\pi = 1$, je $z^6 = 64$.
6. Odgovor: $z = 2e^{i\pi/3}$ in $z^6 = 64$. Računanje z binomsko formulo bi bilo precej daljše.

### Primer 3 (težji)

Reši enačbo $z^3 = -8$ v kompleksnih številih in rešitve nariši v kompleksni ravnini.

**Podatki:** enačba $z^3 = -8$, stopnja $n = 3$
**Iščemo:** vse tri rešitve $z_0$, $z_1$, $z_2$

:::formula
$w_k = \sqrt[n]{r}\, e^{i\frac{\varphi + 2k\pi}{n}}$, $k = 0, 1, \dots, n - 1$, kjer je $z = r e^{i\varphi}$.
:::

**Rešitev:**

1. Desna stran v polarni obliki: $-8$ leži na negativni realni osi, zato $r = 8$, $\varphi = \pi$, torej $-8 = 8e^{i\pi}$.
2. Absolutna vrednost rešitev: $\sqrt[3]{8} = 2$.
3. $k = 0$: $z_0 = 2e^{i\pi/3} = 2\left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = 1 + i\sqrt{3}$.
4. $k = 1$: $z_1 = 2e^{i\pi} = -2$.
5. $k = 2$: $z_2 = 2e^{i5\pi/3} = 2\left(\frac{1}{2} - i\frac{\sqrt{3}}{2}\right) = 1 - i\sqrt{3}$.
6. Preizkus: $(-2)^3 = -8$; iz Primera 2 je $(1 + i\sqrt{3})^3 = 2^3 e^{i\pi} = -8$.
7. Na sliki so rešitve oglišča enakostraničnega trikotnika, včrtanega v krožnico s polmerom $2$; $z_0$ in $z_2$ sta konjugirani par, kot mora biti pri realni enačbi.
8. Odgovor: rešitve so $z_0 = 1 + i\sqrt{3}$, $z_1 = -2$ in $z_2 = 1 - i\sqrt{3}$.

## Pogoste napake

- **$\operatorname{Im}(a + bi) = bi$.** Imaginarni del je realno število $b$, brez $i$. Za $z = 3 - 4i$ je $\operatorname{Im} z = -4$.
- **$|a + bi| = a + b$ ali $\sqrt{a^2 - b^2}$.** Pravilno je $\sqrt{a^2 + b^2}$. Za $-5 + 12i$ je $|z| = 13$.
- **Napačen kvadrant argumenta.** Za $z = -1 - i$ je $\arctan\frac{-1}{-1} = \frac{\pi}{4}$, a število leži v tretjem kvadrantu: $\arg z = -\frac{3\pi}{4}$ (ali $\frac{5\pi}{4}$).
- **Pozabljeni koreni.** Enačba $z^4 = 16$ nima le rešitev $\pm 2$, temveč še $\pm 2i$. Enačba $z^n = w$ ima vedno $n$ različnih rešitev, ko je $w \neq 0$.
- **$\sqrt{-4}\sqrt{-9} = \sqrt{36} = 6$.** Pravilo $\sqrt{a}\sqrt{b} = \sqrt{ab}$ v kompleksnem ne velja: $\sqrt{-4} = 2i$, $\sqrt{-9} = 3i$, produkt je $6i^2 = -6$.
- **Deljenje brez konjugiranja.** $\frac{1}{a + bi} \neq \frac{1}{a} + \frac{1}{bi}$. Razširi s konjugiranim imenovalcem.
- **Kompleksna števila urejamo po velikosti.** Izraz $2 + i < 3$ nima smisla; primerjamo lahko le absolutne vrednosti.

## Povzetek

- $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$; $\mathbb{R}$ je poln urejen obseg (aksiom o supremumu).
- $z = a + bi$, $i^2 = -1$, $\operatorname{Re} z = a$, $\operatorname{Im} z = b$, $\bar z = a - bi$, $|z| = \sqrt{a^2 + b^2}$, $z\bar z = |z|^2$.
- Deljenje: razširimo s konjugiranim imenovalcem.
- Polarni zapis: $z = r(\cos\varphi + i\sin\varphi) = re^{i\varphi}$; Eulerjeva formula $e^{i\varphi} = \cos\varphi + i\sin\varphi$.
- Pri množenju se absolutni vrednosti množita, argumenta seštevata; $z^n = r^n e^{in\varphi}$.
- $n$-ti koreni: $\sqrt[n]{r}\, e^{i(\varphi + 2k\pi)/n}$, $k = 0, \dots, n - 1$; oglišča pravilnega $n$-kotnika.

## Drugače: Na sliki

Nariši kompleksno ravnino z realno osjo vodoravno in imaginarno navpično. Število $3 + 4i$ je točka $(3, 4)$; njena razdalja od izhodišča je $5$ (pravokotni trikotnik s katetama $3$ in $4$). Konjugirano število $3 - 4i$ je zrcalna slika čez realno os.

Množenje z $i$ zavrti točko za $90^\circ$ v nasprotni smeri urinega kazalca: $i(3 + 4i) = -4 + 3i$, točka se iz prvega kvadranta premakne v drugi. Množenje z $2e^{i\pi/3}$ točko zavrti za $60^\circ$ in jo oddalji od izhodišča na dvojno razdaljo.

Rešitve enačbe $z^6 = 1$ so oglišča pravilnega šestkotnika na enotski krožnici, z oglišči pri kotih $0^\circ$, $60^\circ$, $120^\circ$, $180^\circ$, $240^\circ$ in $300^\circ$. Eno oglišče je vedno pri $1$.

## Drugače: Iz vsakdanjega življenja

**Izmenični tok in impedanca.** V tokokrogu z izmenično napetostjo upornik, tuljava in kondenzator povzročajo različne fazne zamike. Inženirji jih združijo v kompleksno **impedanco** $Z = R + iX$. Za upornik z $R = 30\,\Omega$ in tuljavo z reaktanco $X_L = 40\,\Omega$ je $Z = (30 + 40i)\,\Omega$, njena absolutna vrednost $|Z| = 50\,\Omega$ in fazni kot $\varphi = \arctan\frac{40}{30} \approx 53{,}1^\circ$. Pri efektivni napetosti $230\,\mathrm{V}$ teče tok $\frac{230\,\mathrm{V}}{50\,\Omega} = 4{,}6\,\mathrm{A}$, ki za napetostjo zaostaja za $53{,}1^\circ$.

**Nihanje in valovanje.** Nihanje $A\cos(\omega t + \delta)$ je realni del kompleksne funkcije $A e^{i(\omega t + \delta)}$. Računanje z eksponentno funkcijo je preprostejše kot s produkti kosinusov in sinusov, zato fiziki in kemiki (npr. pri spektroskopiji in Fourierovi analizi) računajo kompleksno in na koncu vzamejo realni del.

**Diferencialne enačbe.** Pri dušenem nihanju dobimo karakteristično enačbo, na primer $\lambda^2 + 2\lambda + 5 = 0$ z rešitvama $\lambda = -1 \pm 2i$. Realni del $-1$ pove, kako hitro nihanje zamira, imaginarni del $2$ pa kotno frekvenco nihanja.

## Drugače: Korak za korakom s številkami

Pretvorimo $z = -2 + 2i$ v polarno obliko in izračunajmo $z^4$.

1. **Absolutna vrednost.** $r = \sqrt{(-2)^2 + 2^2} = \sqrt{8} = 2\sqrt{2} \approx 2{,}828$.
2. **Kvadrant.** Realni del je negativen, imaginarni pozitiven: drugi kvadrant.
3. **Argument.** $\cos\varphi = \frac{-2}{2\sqrt{2}} = -\frac{\sqrt{2}}{2}$, $\sin\varphi = \frac{\sqrt{2}}{2}$, torej $\varphi = \frac{3\pi}{4}$ (to je $135^\circ$).
4. **Polarna oblika.** $z = 2\sqrt{2}\, e^{i3\pi/4}$.
5. **Potenca.** $z^4 = (2\sqrt{2})^4 e^{i \cdot 3\pi} = 64\, e^{i3\pi}$.
6. **Poenostavitev.** $e^{i3\pi} = e^{i\pi} = -1$, ker se kot razlikuje za $2\pi$. Torej $z^4 = -64$.
7. **Preizkus algebrsko.** $z^2 = (-2 + 2i)^2 = 4 - 8i + 4i^2 = -8i$, $z^4 = (-8i)^2 = 64i^2 = -64$.

## Drugače: Bolj natančno

**Konstrukcija $\mathbb{C}$.** Kompleksna števila lahko vpeljemo brez »skrivnostnega« $i$: so urejeni pari realnih števil $(a, b)$ z operacijama $(a, b) + (c, d) = (a + c, b + d)$ in $(a, b)(c, d) = (ac - bd, ad + bc)$. Preverimo lahko, da je to obseg; par $(a, 0)$ identificiramo z realnim številom $a$, par $(0, 1)$ pa označimo z $i$. Tedaj je $i^2 = (0, 1)(0, 1) = (-1, 0) = -1$. Obseg $\mathbb{C}$ ni urejen: v urejenem obsegu je vsak kvadrat nenegativen, zato bi bilo $-1 = i^2 \ge 0$, kar je protislovje.

**Trikotniška neenakost** velja tudi v $\mathbb{C}$: $|z + w| \le |z| + |w|$. Dokaz: $|z + w|^2 = (z + w)(\bar z + \bar w) = |z|^2 + |w|^2 + 2\operatorname{Re}(z\bar w) \le |z|^2 + |w|^2 + 2|z||w| = (|z| + |w|)^2$.

**Utemeljitev Eulerjeve formule.** Eksponentno funkcijo za kompleksne argumente definiramo z vrsto $e^z = \sum_{n \ge 0} \frac{z^n}{n!}$. Vstavimo $z = i\varphi$ in ločimo sode in lihe potence; ker je $i^{2k} = (-1)^k$, dobimo

$$e^{i\varphi} = \sum_{k \ge 0} \frac{(-1)^k \varphi^{2k}}{(2k)!} + i\sum_{k \ge 0} \frac{(-1)^k \varphi^{2k+1}}{(2k + 1)!} = \cos\varphi + i\sin\varphi,$$

kjer smo prepoznali Taylorjevi vrsti kosinusa in sinusa. Iz $e^{z + w} = e^z e^w$ sledi pravilo o seštevanju argumentov pri množenju, iz tega pa adicijska izreka za sinus in kosinus.

**Formula za korene.** Iz $w = \rho e^{i\psi}$ in $w^n = re^{i\varphi}$ sledi $\rho^n = r$ in $n\psi = \varphi + 2k\pi$ za neki $k \in \mathbb{Z}$. Torej $\rho = \sqrt[n]{r}$ in $\psi = \frac{\varphi + 2k\pi}{n}$. Vrednosti $k$ in $k + n$ dajo isti $w$, zato je različnih rešitev natanko $n$.

## Preveri se

? Koliko je $i^{2026}$?
+ $-1$
- $1$
- $i$
- $-i$
> Potence $i$ se ponavljajo s periodo $4$. Ker je $2026 = 4 \cdot 506 + 2$, je $i^{2026} = i^2 = -1$.

? Kolikšna je absolutna vrednost števila $z = -5 + 12i$?
- $7$
+ $13$
- $\sqrt{119}$
> $|z| = \sqrt{(-5)^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$.

? Koliko je $e^{i\pi/2}$?
+ $i$
- $-1$
- $1$
> Po Eulerjevi formuli je $e^{i\pi/2} = \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} = 0 + i \cdot 1 = i$.

? Koliko različnih kompleksnih rešitev ima enačba $z^4 = 16$?
- $1$
- $2$
+ $4$
> Enačba $z^n = w$ z $w \neq 0$ ima $n$ različnih rešitev; tu so to $2$, $2i$, $-2$ in $-2i$.

:::simboli
z | kompleksno število | z = a + bi | |
a | realni del števila z | a = \operatorname{Re} z | |
b | imaginarni del števila z | b = \operatorname{Im} z | | realno število, brez i
i | imaginarna enota | i^2 = -1 | |
c | realni del drugega števila c + di | | |
d | imaginarni del drugega števila c + di | | | pri deljenju c + di ≠ 0
r | absolutna vrednost (modul) števila z | r = \sqrt{a^2 + b^2} | | razdalja od izhodišča, r = |z|
\varphi | argument števila z | \cos\varphi = \frac{a}{r} | | kot s pozitivnim delom realne osi
e | Eulerjevo število | | | e ≈ 2,718
r_1, r_2 | absolutni vrednosti obeh faktorjev | | |
\varphi_1, \varphi_2 | argumenta obeh faktorjev | | | pri množenju se seštejeta
n | stopnja potence oziroma korena | | | naravno število
w_k | k-ti izmed n-tih korenov števila z | w_k = \sqrt[n]{r}\, e^{i\frac{\varphi + 2k\pi}{n}} | | ležijo na krožnici s polmerom ⁿ√r
k | zaporedna številka korena | | | k = 0, 1, …, n − 1
w | kompleksno število (delitelj) | | | w ≠ 0
\bar w | konjugirano število k w | \bar w = c - di | | za w = c + di; imaginarnemu delu spremenimo predznak
:::
