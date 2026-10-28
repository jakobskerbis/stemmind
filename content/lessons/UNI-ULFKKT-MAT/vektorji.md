---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Nekatere količine so povsem določene z enim številom: masa, temperatura, množina snovi. To so **skalarji**. Pri drugih pa je pomembna tudi smer: sila, hitrost, električno polje, premik atoma v molekuli, dipolni moment. To so **vektorji**. V gimnaziji si vektorje seštevali in jih razstavljal na komponente v ravnini; na fakulteti z njimi računamo v prostoru in jih med seboj množimo na tri načine.

- **Skalarni produkt** meri, koliko vektorja kažeta v isto smer. Z njim izračunamo kot med vezema v molekuli, delo sile ali projekcijo.
- **Vektorski produkt** da vektor, pravokoten na oba. Z njim izračunamo ploščino, navor, Lorentzovo silo in normalo ravnine.
- **Mešani produkt** da prostornino paralelepipeda; z njim preverimo, ali so trije vektorji v isti ravnini, in izračunamo prostornino osnovne celice kristala.

S temi orodji opišemo tudi **premice** in **ravnine** v prostoru, kar je osnova analitične geometrije, računalniške grafike in kristalografije.

## Razlaga

**1. Vektorji v koordinatah.** V pravokotnem koordinatnem sistemu z enotskimi vektorji $\vec{i}$, $\vec{j}$, $\vec{k}$ zapišemo $\vec{a} = a_1\vec{i} + a_2\vec{j} + a_3\vec{k} = (a_1, a_2, a_3)$. Vektor od točke $A$ do točke $B$ je $\overrightarrow{AB} = (b_1 - a_1, b_2 - a_2, b_3 - a_3)$ (»konec minus začetek«). Seštevamo in množimo s skalarjem po komponentah. **Dolžina** (norma) je

$$|\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}.$$

Vektor dolžine $1$ je **enotski**; iz neničelnega vektorja ga dobimo kot $\vec{a}/|\vec{a}|$.

**2. Skalarni produkt.**

$$\vec{a} \cdot \vec{b} = |\vec{a}|\,|\vec{b}| \cos\varphi = a_1b_1 + a_2b_2 + a_3b_3,$$

kjer je $\varphi \in [0, \pi]$ kot med vektorjema. Rezultat je **število**. Lastnosti: $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$, $\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}$, $\vec{a} \cdot \vec{a} = |\vec{a}|^2$. Neničelna vektorja sta **pravokotna** natanko tedaj, ko je $\vec{a} \cdot \vec{b} = 0$. Kot med vektorjema:

$$\cos\varphi = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}|\,|\vec{b}|}.$$

Predznak pove, ali je kot oster ($\vec{a} \cdot \vec{b} > 0$) ali top ($< 0$). **Pravokotna projekcija** vektorja $\vec{a}$ na smer $\vec{b}$ je $\dfrac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\,\vec{b}$.

**3. Vektorski produkt.** Vektorski produkt $\vec{a} \times \vec{b}$ je **vektor**, ki je:

- pravokoten na $\vec{a}$ in na $\vec{b}$,
- dolg $|\vec{a} \times \vec{b}| = |\vec{a}|\,|\vec{b}| \sin\varphi$, kar je ploščina paralelograma, napetega na $\vec{a}$ in $\vec{b}$,
- usmerjen po pravilu desne roke ($\vec{a}$, $\vec{b}$, $\vec{a} \times \vec{b}$ tvorijo desnosučno trojico).

V koordinatah ga izračunamo s simbolično determinanto:

$$\vec{a} \times \vec{b} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = (a_2b_3 - a_3b_2,\ a_3b_1 - a_1b_3,\ a_1b_2 - a_2b_1).$$

Lastnosti: $\vec{b} \times \vec{a} = -\vec{a} \times \vec{b}$ (**antikomutativnost**), $\vec{a} \times \vec{a} = \vec{0}$, distributivnost velja, asociativnost pa **ne**. Neničelna vektorja sta vzporedna natanko tedaj, ko je $\vec{a} \times \vec{b} = \vec{0}$. Ploščina trikotnika $ABC$ je $\frac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}|$.

**4. Mešani produkt.**

$$(\vec{a}, \vec{b}, \vec{c}) = (\vec{a} \times \vec{b}) \cdot \vec{c} = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}.$$

Absolutna vrednost je prostornina paralelepipeda, napetega na $\vec{a}$, $\vec{b}$, $\vec{c}$; prostornina tetraedra s temi robovi je $\frac{1}{6}$ tega. Predznak je pozitiven, če je trojica desnosučna. Vektorji so **koplanarni** (ležijo v isti ravnini) natanko tedaj, ko je $(\vec{a}, \vec{b}, \vec{c}) = 0$. Ciklična zamenjava vrstnega reda ne spremeni vrednosti: $(\vec{a}, \vec{b}, \vec{c}) = (\vec{b}, \vec{c}, \vec{a})$.

**5. Premica v prostoru.** Premico določata točka $T_0$ s krajevnim vektorjem $\vec{r}_0$ in **smerni vektor** $\vec{s}$:

$$\vec{r} = \vec{r}_0 + t\,\vec{s}, \quad t \in \mathbb{R}, \qquad \text{oziroma} \qquad \frac{x - x_0}{s_1} = \frac{y - y_0}{s_2} = \frac{z - z_0}{s_3}.$$

Prvi zapis je **parametrični** (vektorski), drugi **kanonični**. Premica skozi točki $A$ in $B$ ima smerni vektor $\overrightarrow{AB}$.

**6. Ravnina.** Ravnino določata točka $T_0$ in **normala** $\vec{n} = (a, b, c)$, pravokotna na ravnino. Za vsako točko $T$ ravnine je $\vec{n} \cdot (\vec{r} - \vec{r}_0) = 0$, kar da

$$ax + by + cz = d, \qquad d = \vec{n} \cdot \vec{r}_0.$$

Koeficienti pred $x$, $y$, $z$ so torej komponente normale. Ravnina skozi tri nekolinearne točke $A$, $B$, $C$ ima normalo $\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC}$. **Razdalja** točke $T_1$ do ravnine je

$$d(T_1, \Sigma) = \frac{|ax_1 + by_1 + cz_1 - d|}{\sqrt{a^2 + b^2 + c^2}}.$$

Kot med dvema ravninama je kot med normalama; kot $\alpha$ med premico in ravnino izračunamo iz $\sin\alpha = \dfrac{|\vec{s} \cdot \vec{n}|}{|\vec{s}|\,|\vec{n}|}$.

**7. Medsebojna lega premic in razdalja točke do premice.** Premici s smernima vektorjema $\vec{s}_1$ in $\vec{s}_2$ skozi točki $T_1$ in $T_2$ so lahko:

- **vzporedni** (ali sovpadata), če je $\vec{s}_1 \times \vec{s}_2 = \vec{0}$,
- **sekajoči se**, če nista vzporedni in je mešani produkt $(\vec{s}_1, \vec{s}_2, \overrightarrow{T_1T_2}) = 0$ (vsi trije vektorji ležijo v isti ravnini),
- **mimobežni**, če nista vzporedni in je $(\vec{s}_1, \vec{s}_2, \overrightarrow{T_1T_2}) \neq 0$; take premice v ravnini ne obstajajo, v prostoru pa so pogoste (npr. dva nevzporedna robova kocke, ki se ne stikata).

Razdalja točke $T$ do premice skozi $T_0$ s smerjo $\vec{s}$ je višina paralelograma, napetega na $\vec{s}$ in $\overrightarrow{T_0T}$:

$$d = \frac{|\vec{s} \times \overrightarrow{T_0T}|}{|\vec{s}|}.$$

Razdalja med mimobežnicama pa je višina paralelepipeda: $d = \dfrac{|(\vec{s}_1, \vec{s}_2, \overrightarrow{T_1T_2})|}{|\vec{s}_1 \times \vec{s}_2|}$. Vse tri produkte torej uporabljamo skupaj: skalarni za kote, vektorski za ploščine in normale, mešani za prostornine in koplanarnost.

## Rešeni primeri

### Primer 1 (lažji)

Dana sta vektorja $\vec{a} = (1, 2, 2)$ in $\vec{b} = (3, 0, 4)$. Izračunaj njuni dolžini, skalarni produkt in kot med njima.

**Podatki:** $\vec{a} = (1, 2, 2)$, $\vec{b} = (3, 0, 4)$
**Iščemo:** $|\vec{a}|$, $|\vec{b}|$, $\vec{a} \cdot \vec{b}$ in kot $\varphi$

:::formula
$|\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$, $\vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3$, $\cos\varphi = \dfrac{\vec{a} \cdot \vec{b}}{|\vec{a}|\,|\vec{b}|}$
:::

**Rešitev:**

1. $|\vec{a}| = \sqrt{1 + 4 + 4} = \sqrt{9} = 3$, $|\vec{b}| = \sqrt{9 + 0 + 16} = 5$.
2. $\vec{a} \cdot \vec{b} = 1 \cdot 3 + 2 \cdot 0 + 2 \cdot 4 = 11$.
3. $\cos\varphi = \dfrac{11}{3 \cdot 5} = \dfrac{11}{15} \approx 0{,}733$.
4. $\varphi = \arccos 0{,}733 \approx 42{,}8^\circ$ (v radianih $\approx 0{,}748$).
5. Odgovor: $|\vec{a}| = 3$, $|\vec{b}| = 5$, $\vec{a} \cdot \vec{b} = 11$, vektorja oklepata kot približno $42{,}8^\circ$.

### Primer 2

Točke $A(1, 0, 0)$, $B(0, 2, 0)$ in $C(0, 0, 3)$ določajo trikotnik. Izračunaj njegovo ploščino in zapiši enačbo ravnine, v kateri leži.

**Podatki:** $A(1, 0, 0)$, $B(0, 2, 0)$, $C(0, 0, 3)$
**Iščemo:** ploščino $S$ trikotnika $ABC$ in enačbo ravnine $ABC$

:::formula
$S = \frac{1}{2}\,|\overrightarrow{AB} \times \overrightarrow{AC}|$, $\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC}$, ravnina $\vec{n} \cdot (\vec{r} - \vec{r}_A) = 0$
:::

**Rešitev:**

1. $\overrightarrow{AB} = (0 - 1, 2 - 0, 0 - 0) = (-1, 2, 0)$, $\overrightarrow{AC} = (-1, 0, 3)$.
2. $\overrightarrow{AB} \times \overrightarrow{AC} = (2 \cdot 3 - 0 \cdot 0,\ 0 \cdot (-1) - (-1) \cdot 3,\ (-1) \cdot 0 - 2 \cdot (-1)) = (6, 3, 2)$.
3. Preizkus pravokotnosti: $(6, 3, 2) \cdot (-1, 2, 0) = -6 + 6 + 0 = 0$ in $(6, 3, 2) \cdot (-1, 0, 3) = -6 + 0 + 6 = 0$.
4. $|(6, 3, 2)| = \sqrt{36 + 9 + 4} = \sqrt{49} = 7$, zato $S = \frac{7}{2} = 3{,}5$.
5. Ravnina: $6x + 3y + 2z = d$, z vstavljeno točko $A$ dobimo $d = 6$. Preizkus: $B$ da $3 \cdot 2 = 6$, $C$ da $2 \cdot 3 = 6$.
6. Odgovor: ploščina trikotnika je $3{,}5$ (kvadratnih enot), ravnina ima enačbo $6x + 3y + 2z = 6$.

### Primer 3 (težji)

Dane so točke $A(1, 1, 0)$, $B(3, 1, 1)$, $C(1, 4, 1)$ in $D(2, 2, 5)$. Izračunaj prostornino tetraedra $ABCD$ in višino iz oglišča $D$ na ploskev $ABC$. Zapiši še enačbo premice skozi $D$, ki je pravokotna na ravnino $ABC$.

**Podatki:** $A(1, 1, 0)$, $B(3, 1, 1)$, $C(1, 4, 1)$, $D(2, 2, 5)$
**Iščemo:** prostornino $V$, višino $v$ in premico skozi $D$, pravokotno na $ABC$

:::formula
$V = \frac{1}{6}\,|(\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{AD})|$, $\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC}$, $v = \dfrac{|\vec{n} \cdot \overrightarrow{AD}|}{|\vec{n}|}$, premica $\vec{r} = \vec{r}_D + t\,\vec{n}$
:::

**Rešitev:**

1. $\overrightarrow{AB} = (2, 0, 1)$, $\overrightarrow{AC} = (0, 3, 1)$, $\overrightarrow{AD} = (1, 1, 5)$.
2. Mešani produkt: $\begin{vmatrix} 2 & 0 & 1 \\ 0 & 3 & 1 \\ 1 & 1 & 5 \end{vmatrix} = 2(15 - 1) - 0 + 1(0 - 3) = 28 - 3 = 25$.
3. $V = \frac{25}{6} \approx 4{,}17$.
4. Normala: $\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC} = (0 \cdot 1 - 1 \cdot 3,\ 1 \cdot 0 - 2 \cdot 1,\ 2 \cdot 3 - 0 \cdot 0) = (-3, -2, 6)$, $|\vec{n}| = \sqrt{9 + 4 + 36} = 7$.
5. Višina: $v = \dfrac{|\vec{n} \cdot \overrightarrow{AD}|}{|\vec{n}|} = \dfrac{|-3 - 2 + 30|}{7} = \dfrac{25}{7} \approx 3{,}57$.
6. Preizkus: ploščina osnovne ploskve je $\frac{1}{2} \cdot 7 = 3{,}5$ in $V = \frac{1}{3} \cdot 3{,}5 \cdot \frac{25}{7} = \frac{25}{6}$.
7. Premica skozi $D$ s smerjo normale: $\vec{r} = (2, 2, 5) + t(-3, -2, 6)$, oziroma $\dfrac{x - 2}{-3} = \dfrac{y - 2}{-2} = \dfrac{z - 5}{6}$.
8. Odgovor: tetraeder ima prostornino $\frac{25}{6} \approx 4{,}17$, višina iz $D$ je $\frac{25}{7} \approx 3{,}57$, pravokotnica skozi $D$ je $\vec{r} = (2, 2, 5) + t(-3, -2, 6)$.

## Pogoste napake

- **Skalarni produkt kot vektor.** Študent zapiše $\vec{a} \cdot \vec{b} = (a_1b_1, a_2b_2, a_3b_3)$. Pravilno: komponentne produkte seštejemo; rezultat je število.
- **Vrstni red pri vektorskem produktu.** $\vec{b} \times \vec{a} = -\vec{a} \times \vec{b}$. Pri ploščini to ni pomembno, pri smeri navora ali normale pa je.
- **Predznak srednje komponente.** Pri razvoju simbolične determinante se pozabi minus pri $\vec{j}$. Vedno preveri, da je rezultat pravokoten na oba vektorja (skalarni produkt mora biti $0$).
- **Pozabljena $\frac{1}{2}$ ali $\frac{1}{6}$.** $|\vec{a} \times \vec{b}|$ je ploščina paralelograma (trikotnik je polovica), mešani produkt pa prostornina paralelepipeda (tetraeder je šestina).
- **Normala namesto smernega vektorja.** V enačbi ravnine $ax + by + cz = d$ je $(a, b, c)$ pravokoten na ravnino, ne leži v njej.
- **Kot med premico in ravnino s kosinusom.** Ker je $\vec{n}$ pravokoten na ravnino, uporabimo $\sin\alpha$, ne $\cos\alpha$.
- **Absolutna vrednost.** Prostornina in razdalja sta nenegativni; negativni mešani produkt pomeni le levosučno trojico.

## Povzetek

- $\vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3 = |\vec{a}||\vec{b}|\cos\varphi$; pravokotnost $\iff \vec{a} \cdot \vec{b} = 0$.
- $\vec{a} \times \vec{b}$ je pravokoten na oba, dolg kot ploščina paralelograma, $\vec{b} \times \vec{a} = -\vec{a} \times \vec{b}$; vzporednost $\iff \vec{a} \times \vec{b} = \vec{0}$.
- $(\vec{a}, \vec{b}, \vec{c}) = (\vec{a} \times \vec{b}) \cdot \vec{c}$ je determinanta komponent; absolutna vrednost je prostornina paralelepipeda; koplanarnost $\iff (\vec{a}, \vec{b}, \vec{c}) = 0$.
- Premica: $\vec{r} = \vec{r}_0 + t\vec{s}$. Ravnina: $ax + by + cz = d$ z normalo $(a, b, c)$.
- Razdalja točke do ravnine: $\frac{|ax_1 + by_1 + cz_1 - d|}{\sqrt{a^2 + b^2 + c^2}}$.

## Drugače: Na sliki

Predstavljaj si dva vektorja, ki izhajata iz iste točke:

```
            a x b  (kaže iz ravnine, pravilo desne roke)
              ^
              |
              |      b
              |     /
              |    /  ploščina = |a x b|
              |   /___________
              |  /           /
              | /  phi      /
              O-----------> a
```

- **Skalarni produkt** je dolžina sence vektorja $\vec{a}$ na smeri $\vec{b}$, pomnožena z $|\vec{b}|$. Če svetimo pravokotno na $\vec{b}$ in sence ni, sta vektorja pravokotna.
- **Vektorski produkt** je puščica, pravokotna na »list«, na katerem ležita $\vec{a}$ in $\vec{b}$; njena dolžina je ploščina paralelograma. Prste desne roke ukrivi od $\vec{a}$ proti $\vec{b}$, palec kaže smer $\vec{a} \times \vec{b}$.
- **Mešani produkt**: na paralelogram postavimo še tretji vektor $\vec{c}$. Nastane »poševna škatla«; njena prostornina je ploščina osnovne ploskve krat višina, višina pa je projekcija $\vec{c}$ na normalo $\vec{a} \times \vec{b}$.

## Drugače: Iz vsakdanjega življenja

**Kot v molekuli metana.** Postavimo ogljik v izhodišče, dva vodikova atoma pa v smeri $(1, 1, 1)$ in $(1, -1, -1)$ (oglišča kocke, ki tvorijo tetraeder). Skalarni produkt je $1 - 1 - 1 = -1$, dolžini sta $\sqrt{3}$, zato $\cos\varphi = -\frac{1}{3}$ in $\varphi \approx 109{,}5^\circ$. To je znani tetraedrski kot iz kemije.

**Delo in navor.** Delo stalne sile pri premiku je $A = \vec{F} \cdot \vec{s}$: šteje le komponenta sile v smeri premika. Navor pri odvijanju vijaka je $\vec{M} = \vec{r} \times \vec{F}$; zato daljši ključ (večji $|\vec{r}|$) in sila pravokotno na ključ ($\sin\varphi = 1$) dasta največji učinek.

**Kristalografija.** Osnovno celico kristala napenjajo trije vektorji mreže $\vec{a}$, $\vec{b}$, $\vec{c}$. Prostornina celice je $|(\vec{a}, \vec{b}, \vec{c})|$; iz nje in iz mase atomov v celici izračunamo gostoto kristala.

**Gradbeništvo in geodezija.** Naklon strehe ali pobočja je kot med ravnino in vodoravno ravnino, torej kot med njunima normalama.

## Drugače: Korak za korakom s številkami

Poišči presečišče premice $\vec{r} = (1, 1, 1) + t(1, -1, 2)$ z ravnino $2x + y - z = 5$ in kot med njima.

1. **Točka na premici:** $x = 1 + t$, $y = 1 - t$, $z = 1 + 2t$.
2. **Vstavimo v ravnino:** $2(1 + t) + (1 - t) - (1 + 2t) = 5$.
3. **Poenostavimo:** $2 + 2t + 1 - t - 1 - 2t = 2 - t = 5$, torej $t = -3$.
4. **Presečišče:** $x = -2$, $y = 4$, $z = -5$. Preizkus: $2 \cdot (-2) + 4 - (-5) = 5$.
5. **Smerni vektor in normala:** $\vec{s} = (1, -1, 2)$, $\vec{n} = (2, 1, -1)$.
6. **Skalarni produkt:** $\vec{s} \cdot \vec{n} = 2 - 1 - 2 = -1$; dolžini $|\vec{s}| = |\vec{n}| = \sqrt{6}$.
7. **Kot:** $\sin\alpha = \dfrac{|-1|}{\sqrt{6} \cdot \sqrt{6}} = \dfrac{1}{6}$, zato $\alpha \approx 9{,}6^\circ$.

Premica torej prebode ravnino v točki $(-2, 4, -5)$ pod kotom približno $9{,}6^\circ$, skoraj vzporedno z njo.

## Drugače: Bolj natančno

**Izpeljava formule za skalarni produkt.** Iz kosinusnega izreka za trikotnik s stranicami $\vec{a}$, $\vec{b}$ in $\vec{a} - \vec{b}$ velja $|\vec{a} - \vec{b}|^2 = |\vec{a}|^2 + |\vec{b}|^2 - 2|\vec{a}||\vec{b}|\cos\varphi$. Leva stran v koordinatah je $\sum (a_i - b_i)^2 = |\vec{a}|^2 + |\vec{b}|^2 - 2\sum a_ib_i$. Primerjava da $\sum a_ib_i = |\vec{a}||\vec{b}|\cos\varphi$.

**Cauchy-Schwarzeva neenakost.** $|\vec{a} \cdot \vec{b}| \le |\vec{a}|\,|\vec{b}|$, z enakostjo natanko za vzporedna vektorja. Za neničelna vektorja je zato kvocient $\frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$ vedno v $[-1, 1]$ in kot je dobro definiran tudi v $\mathbb{R}^n$, kjer si ga ne moremo predstavljati.

**Lagrangeova identiteta.** $|\vec{a} \times \vec{b}|^2 = |\vec{a}|^2|\vec{b}|^2 - (\vec{a} \cdot \vec{b})^2$. Ker je desna stran enaka $|\vec{a}|^2|\vec{b}|^2(1 - \cos^2\varphi)$, sledi $|\vec{a} \times \vec{b}| = |\vec{a}||\vec{b}|\sin\varphi$. Identiteto preveriš z razpisom komponent.

**Dvojni vektorski produkt.** $\vec{a} \times (\vec{b} \times \vec{c}) = \vec{b}(\vec{a} \cdot \vec{c}) - \vec{c}(\vec{a} \cdot \vec{b})$. Iz nje vidimo, da vektorski produkt ni asociativen: za $\vec{i}$, $\vec{i}$, $\vec{j}$ je $(\vec{i} \times \vec{i}) \times \vec{j} = \vec{0}$, $\vec{i} \times (\vec{i} \times \vec{j}) = \vec{i} \times \vec{k} = -\vec{j}$.

**Formula za razdaljo.** Naj bo $T_0$ poljubna točka ravnine. Razdalja točke $T_1$ do ravnine je absolutna vrednost projekcije vektorja $\overrightarrow{T_0T_1}$ na enotsko normalo: $\frac{|\vec{n} \cdot (\vec{r}_1 - \vec{r}_0)|}{|\vec{n}|} = \frac{|ax_1 + by_1 + cz_1 - d|}{|\vec{n}|}$, ker je $\vec{n} \cdot \vec{r}_0 = d$.

## Preveri se

? Kolikšen je kot med vektorjema $\vec{a} = (1, 2, 3)$ in $\vec{b} = (2, -1, 0)$?
- $0^\circ$
- $45^\circ$
+ $90^\circ$
> $\vec{a} \cdot \vec{b} = 2 - 2 + 0 = 0$, zato je $\cos\varphi = 0$ in vektorja sta pravokotna.

? Kolikšna je ploščina paralelograma, napetega na vektorja $(2, 0, 0)$ in $(0, 3, 0)$?
- $5$
+ $6$
- $3$
> Vektorski produkt je $(0, 0, 6)$, njegova dolžina $6$ je ploščina paralelograma. Odgovor $3$ je ploščina trikotnika.

? Mešani produkt vektorjev $\vec{a}$, $\vec{b}$, $\vec{c}$ je enak $0$. Kaj to pomeni?
- Vektorji so paroma pravokotni.
+ Vektorji ležijo v isti ravnini.
- Vsi trije vektorji so ničelni.
> Prostornina paralelepipeda je nič, ker se »škatla« splošči: vektorji so koplanarni (linearno odvisni).

? Kateri vektor je normala ravnine $2x - y + 3z = 7$?
- $(2, -1, 7)$
- $(7, 2, -1)$
+ $(2, -1, 3)$
> Koeficienti pred $x$, $y$ in $z$ so komponente normale; desna stran $7$ le premakne ravnino.
