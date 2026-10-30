---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Nobena meritev ni popolnoma natančna. Če petkrat stehtaš isti vzorec, dobiš pet malo različnih vrednosti. Če posadiš deset semen, jih ne vzklije vedno enako število. Dve laboratorijski meritvi se razlikujeta, ker na rezultat vpliva veliko drobnih, nenadzorovanih vzrokov. Takšne pojave imenujemo **slučajni**, orodji za njihov opis pa sta **verjetnostni račun** in **statistika**.

Verjetnostni račun iz znanega modela napove, kako pogosti bodo posamezni izidi. Statistika gre v obratno smer: iz izmerjenih podatkov (**vzorca**) sklepa o lastnostih celotne **populacije** in pove, kako zanesljiv je ta sklep.

V tej lekciji spoznamo:

- slučajne spremenljivke in njihove **porazdelitve** (binomsko, Poissonovo, normalno),
- **povprečje**, **varianco** in **standardni odklon** vzorca,
- **linearno regresijo**: kako skozi meritve položimo najboljšo premico in kako dobro se jim prilega.

To znanje potrebuješ pri vsaki laboratorijski vaji, pri umeritvenih krivuljah, pri poskusih v biologiji in pri kontroli kakovosti.

## Razlaga

**1. Dogodki in verjetnost.** **Poskus** je postopek z negotovim izidom (met kocke, kalitev semena, meritev). Množico vseh izidov označimo z $\Omega$, **dogodek** je podmnožica $\Omega$. **Verjetnost** $P(A)$ je število med $0$ in $1$, za katero velja $P(\Omega) = 1$ in $P(A \cup B) = P(A) + P(B)$ za nezdružljiva dogodka. Iz tega sledi $P(\bar A) = 1 - P(A)$ za nasprotni dogodek. Pri enako verjetnih izidih je **klasična** verjetnost $P(A) = \frac{\text{število ugodnih izidov}}{\text{število vseh izidov}}$. Dogodka sta **neodvisna**, če je $P(A \cap B) = P(A)\,P(B)$.

**2. Slučajna spremenljivka.** **Slučajna spremenljivka** $X$ vsakemu izidu priredi število: število vzklilih semen, maso tablete, število razpadov v eni sekundi. Je **diskretna**, če zavzame le števne vrednosti $x_1, x_2, \dots$ z verjetnostmi $p_i = P(X = x_i)$, $\sum p_i = 1$. Je **zvezna**, če jo opiše **gostota** $f(x) \ge 0$ z $\int_{-\infty}^{\infty} f(x)\,dx = 1$; tedaj je $P(a \le X \le b) = \int_a^b f(x)\,dx$.

**3. Pričakovana vrednost in varianca.** **Pričakovana vrednost** je teoretično povprečje:

$$E(X) = \sum_i x_i\, p_i \quad\text{oziroma}\quad E(X) = \int_{-\infty}^{\infty} x f(x)\, dx.$$

Označimo jo tudi z $\mu$. **Varianca** meri razpršenost okoli $\mu$, **standardni odklon** je njen koren:

$$D(X) = \sigma^2 = E\big((X - \mu)^2\big) = E(X^2) - \mu^2, \qquad \sigma = \sqrt{D(X)}.$$

Standardni odklon ima isto enoto kot $X$, zato ga lažje razložimo.

**4. Pomembne porazdelitve.**

- **Binomska porazdelitev** $B(n, p)$: poskus z dvema izidoma (uspeh z verjetnostjo $p$) ponovimo $n$-krat neodvisno, $X$ je število uspehov.
$$P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}, \qquad E(X) = np, \qquad \sigma^2 = np(1 - p).$$
- **Poissonova porazdelitev** s parametrom $\lambda > 0$: število redkih dogodkov v danem času ali prostoru (razpadi jeder, mutacije, klici v centrali).
$$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots, \qquad E(X) = \sigma^2 = \lambda.$$
- **Normalna (Gaussova) porazdelitev** $N(\mu, \sigma)$ z gostoto
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x - \mu)^2}{2\sigma^2}}.$$
Graf je zvonasta krivulja, simetrična okoli $\mu$. Z **standardizacijo** $Z = \frac{X - \mu}{\sigma}$ dobimo standardno normalno porazdelitev $N(0, 1)$, katere porazdelitvena funkcija $\Phi(z) = P(Z \le z)$ je tabelirana. Velja **pravilo 68–95–99,7**: na intervalu $\mu \pm \sigma$ leži približno $68\,\%$, na $\mu \pm 2\sigma$ približno $95\,\%$ in na $\mu \pm 3\sigma$ približno $99{,}7\,\%$ vrednosti.

Normalna porazdelitev je tako pomembna zaradi **centralnega limitnega izreka**: vsota (in povprečje) mnogih neodvisnih slučajnih vplivov je približno normalno porazdeljena, ne glede na porazdelitev posameznih vplivov. Zato so meritve pogosto normalno razpršene okoli prave vrednosti.

**5. Vzorec in opisna statistika.** Iz populacije izberemo **vzorec** $x_1, x_2, \dots, x_n$. Populacijskih $\mu$ in $\sigma$ ne poznamo, ocenimo ju z vzorčnimi količinami:

$$\bar x = \frac{1}{n}\sum_{i=1}^n x_i, \qquad s^2 = \frac{1}{n - 1}\sum_{i=1}^n (x_i - \bar x)^2, \qquad s = \sqrt{s^2}.$$

$\bar x$ je **vzorčno povprečje**, $s$ **vzorčni standardni odklon**. Delimo z $n - 1$, ne z $n$, ker so odmiki merjeni od $\bar x$, ki je sam izračunan iz istih podatkov: vsota odmikov je vedno $0$, zato je neodvisnih odmikov le $n - 1$ (**prostostne stopnje**). Delitev z $n - 1$ da nepristransko oceno $\sigma^2$.

Natančnost povprečja opisuje **standardna napaka povprečja** $s_{\bar x} = \frac{s}{\sqrt n}$: več meritev naredimo, bolj zanesljivo je povprečje. Sredino podatkov lahko opišemo tudi z **mediano** (srednjo vrednostjo urejenih podatkov), ki je manj občutljiva za osamelce, razpršenost pa še z **razponom** $x_{\max} - x_{\min}$.

**6. Linearna regresija.** Merimo pare $(x_i, y_i)$, na primer koncentracijo in absorbanco. Če točke ležijo približno na premici, iščemo premico $y = kx + n$, za katero je vsota kvadratov navpičnih odstopanj najmanjša (**metoda najmanjših kvadratov**):

$$F(k, n) = \sum_{i=1}^n (y_i - kx_i - n)^2 \to \min.$$

Iz $F_k = 0$ in $F_n = 0$ dobimo:

$$k = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2} = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - \left(\sum x_i\right)^2}, \qquad n = \bar y - k\bar x.$$

Premica gre vedno skozi **težišče** podatkov $(\bar x, \bar y)$. (Pozor: črka $n$ tu pomeni začetno vrednost premice, v vsotah pa število meritev. V tabelah pogosto pišejo $y = a + bx$.)

Kako dobro premica opisuje podatke, pove **Pearsonov korelacijski koeficient**

$$r = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sqrt{\sum (x_i - \bar x)^2 \sum (y_i - \bar y)^2}}, \qquad -1 \le r \le 1.$$

Pri $r = \pm 1$ ležijo vse točke na premici, pri $r \approx 0$ linearne povezave ni. Predznak $r$ je enak predznaku naklona. Kvadrat $r^2$ (**determinacijski koeficient**) pove, kolikšen delež razpršenosti $y$ pojasni premica. Korelacija ne pomeni vzročnosti: dve količini lahko naraščata skupaj, ker obe povzroča tretja.

## Rešeni primeri

### Primer 1 (lažji)

Študent je petkrat stehtal isto tableto in dobil $4{,}8\,\mathrm{g}$, $5{,}1\,\mathrm{g}$, $5{,}0\,\mathrm{g}$, $4{,}9\,\mathrm{g}$ in $5{,}2\,\mathrm{g}$. Izračunaj povprečje, vzorčni standardni odklon in standardno napako povprečja.

**Podatki:** $n = 5$; $x_1 = 4{,}8\,\mathrm{g}$, $x_2 = 5{,}1\,\mathrm{g}$, $x_3 = 5{,}0\,\mathrm{g}$, $x_4 = 4{,}9\,\mathrm{g}$, $x_5 = 5{,}2\,\mathrm{g}$
**Iščemo:** povprečje $\bar x$, standardni odklon $s$ in standardno napako $s_{\bar x}$

:::formula
$\bar x = \frac{1}{n}\sum x_i$, $s = \sqrt{\frac{1}{n - 1}\sum (x_i - \bar x)^2}$, $s_{\bar x} = \frac{s}{\sqrt n}$
:::

**Rešitev:**

1. Vsota: $4{,}8 + 5{,}1 + 5{,}0 + 4{,}9 + 5{,}2 = 25{,}0\,\mathrm{g}$, povprečje $\bar x = \frac{25{,}0\,\mathrm{g}}{5} = 5{,}00\,\mathrm{g}$.
2. Odmiki od povprečja: $-0{,}2$; $0{,}1$; $0$; $-0{,}1$; $0{,}2$ (v gramih). Njihova vsota je $0$, kar je preizkus.
3. Kvadrati odmikov: $0{,}04 + 0{,}01 + 0 + 0{,}01 + 0{,}04 = 0{,}10\,\mathrm{g^2}$.
4. Varianca: $s^2 = \frac{0{,}10\,\mathrm{g^2}}{5 - 1} = 0{,}025\,\mathrm{g^2}$, standardni odklon $s = \sqrt{0{,}025}\,\mathrm{g} = 0{,}158\,\mathrm{g}$.
5. Standardna napaka: $s_{\bar x} = \frac{0{,}158\,\mathrm{g}}{\sqrt 5} = 0{,}071\,\mathrm{g}$.
6. Odgovor: povprečna masa je $5{,}00\,\mathrm{g}$, standardni odklon posamezne meritve $0{,}16\,\mathrm{g}$, standardna napaka povprečja $0{,}07\,\mathrm{g}$; rezultat zapišemo kot $(5{,}00 \pm 0{,}07)\,\mathrm{g}$.

### Primer 2

Verjetnost, da seme vzklije, je $0{,}8$, semena kalijo neodvisno. Posadimo $10$ semen. Kolikšna je verjetnost, da jih vzklije natanko $8$, in kolikšna, da jih vzklije vsaj $9$? Koliko semen v povprečju vzklije in kolikšen je standardni odklon?

**Podatki:** $n = 10$ semen, verjetnost kalitve $p = 0{,}8$, neodvisnost
**Iščemo:** $P(X = 8)$, $P(X \ge 9)$, pričakovano vrednost $E(X)$ in standardni odklon $\sigma$

:::formula
$X \sim B(n, p)$: $P(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}$, $E(X) = np$, $\sigma = \sqrt{np(1 - p)}$
:::

**Rešitev:**

1. Število vzklilih semen je binomsko porazdeljeno, $X \sim B(10;\ 0{,}8)$.
2. $P(X = 8) = \binom{10}{8} \cdot 0{,}8^8 \cdot 0{,}2^2 = 45 \cdot 0{,}16777 \cdot 0{,}04 = 0{,}302$.
3. $P(X = 9) = \binom{10}{9} \cdot 0{,}8^9 \cdot 0{,}2 = 10 \cdot 0{,}13422 \cdot 0{,}2 = 0{,}268$.
4. $P(X = 10) = 0{,}8^{10} = 0{,}107$.
5. $P(X \ge 9) = 0{,}268 + 0{,}107 = 0{,}376$.
6. $E(X) = 10 \cdot 0{,}8 = 8$ semen, $\sigma = \sqrt{10 \cdot 0{,}8 \cdot 0{,}2} = \sqrt{1{,}6} = 1{,}26$ semena.
7. Odgovor: natanko $8$ semen vzklije z verjetnostjo $0{,}302$, vsaj $9$ z verjetnostjo $0{,}376$; v povprečju vzklije $8$ semen s standardnim odklonom $1{,}26$.

### Primer 3 (težji)

Za umeritveno premico smo izmerili absorbanco $A$ raztopin z masnimi koncentracijami $\gamma = 0$, $1$, $2$, $3$ in $4\,\mathrm{mg/L}$ in dobili $A = 0{,}02$; $0{,}21$; $0{,}39$; $0{,}62$; $0{,}80$. Določi regresijsko premico $A = k\gamma + n$, korelacijski koeficient in koncentracijo neznanega vzorca z absorbanco $0{,}50$.

**Podatki:** $\gamma_i = 0;\ 1;\ 2;\ 3;\ 4\,\mathrm{mg/L}$, $A_i = 0{,}02;\ 0{,}21;\ 0{,}39;\ 0{,}62;\ 0{,}80$, $A_\mathrm{vz} = 0{,}50$, število meritev $5$
**Iščemo:** naklon $k$, začetno vrednost $n$, korelacijski koeficient $r$ in koncentracijo $\gamma_\mathrm{vz}$

:::formula
$k = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2}$, $n = \bar y - k\bar x$, $r = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sqrt{\sum (x_i - \bar x)^2 \sum (y_i - \bar y)^2}}$
:::

**Rešitev:**

1. Povprečji: $\bar\gamma = \frac{0 + 1 + 2 + 3 + 4}{5} = 2\,\mathrm{mg/L}$, $\bar A = \frac{2{,}04}{5} = 0{,}408$.
2. Odmiki $\gamma_i - \bar\gamma$: $-2, -1, 0, 1, 2$; vsota kvadratov $S_{xx} = 4 + 1 + 0 + 1 + 4 = 10$.
3. Odmiki $A_i - \bar A$: $-0{,}388$; $-0{,}198$; $-0{,}018$; $0{,}212$; $0{,}392$.
4. Mešana vsota: $S_{xy} = (-2)(-0{,}388) + (-1)(-0{,}198) + 0 + 1 \cdot 0{,}212 + 2 \cdot 0{,}392 = 0{,}776 + 0{,}198 + 0{,}212 + 0{,}784 = 1{,}970$.
5. Naklon: $k = \frac{1{,}970}{10} = 0{,}197\,\mathrm{L/mg}$; začetna vrednost: $n = 0{,}408 - 0{,}197 \cdot 2 = 0{,}014$.
6. Vsota kvadratov odmikov $A$: $S_{yy} = 0{,}150544 + 0{,}039204 + 0{,}000324 + 0{,}044944 + 0{,}153664 = 0{,}38868$.
7. Korelacijski koeficient: $r = \frac{1{,}970}{\sqrt{10 \cdot 0{,}38868}} = \frac{1{,}970}{1{,}9715} = 0{,}9992$.
8. Neznani vzorec: $\gamma_\mathrm{vz} = \frac{A_\mathrm{vz} - n}{k} = \frac{0{,}50 - 0{,}014}{0{,}197\,\mathrm{L/mg}} = 2{,}47\,\mathrm{mg/L}$.
9. Odgovor: premica je $A = 0{,}197\,\mathrm{L/mg} \cdot \gamma + 0{,}014$, $r = 0{,}9992$ (zelo dobra linearnost), neznani vzorec ima masno koncentracijo $2{,}47\,\mathrm{mg/L}$.

## Pogoste napake

- **Deljenje z $n$ namesto z $n - 1$.** Pri vzorčnem standardnem odklonu delimo z $n - 1$. V Primeru 1 bi deljenje s $5$ dalo $0{,}141\,\mathrm{g}$ namesto $0{,}158\,\mathrm{g}$. Na kalkulatorju sta to tipki $\sigma_{n-1}$ (ali $s_x$) in $\sigma_n$.
- **Zamenjava standardnega odklona in standardne napake.** $s$ opisuje razpršenost posameznih meritev, $s/\sqrt n$ pa negotovost povprečja.
- **Binomska porazdelitev brez binomskega koeficienta.** $P(X = 8) \neq 0{,}8^8 \cdot 0{,}2^2$, ker je osem uspehov med desetimi poskusi mogoče razporediti na $\binom{10}{8} = 45$ načinov.
- **»Vsaj« izračunan kot »natanko«.** $P(X \ge 9) = P(X = 9) + P(X = 10)$. Pri »vsaj en« je hitreje $1 - P(X = 0)$.
- **Verjetnost točke pri zvezni spremenljivki.** Za zvezno $X$ je $P(X = a) = 0$; smiselna je le verjetnost intervala.
- **Napovedovanje zunaj območja meritev.** Umeritvena premica velja le med najmanjšo in največjo umeritveno koncentracijo; pri večjih koncentracijah odvisnost pogosto ni več linearna.
- **Velik $r$ pomeni vzročnost.** Število štorkelj in rojstev v regijah sta lahko korelirana, ker oboje raste z velikostjo regije.

## Povzetek

- Verjetnost: $0 \le P(A) \le 1$, $P(\bar A) = 1 - P(A)$, neodvisnost $P(A \cap B) = P(A)P(B)$.
- Pričakovana vrednost $\mu = E(X)$, varianca $\sigma^2 = E(X^2) - \mu^2$, standardni odklon $\sigma$.
- Binomska $B(n, p)$: $E = np$, $\sigma^2 = np(1 - p)$. Poissonova: $E = \sigma^2 = \lambda$. Normalna $N(\mu, \sigma)$: standardizacija $Z = \frac{X - \mu}{\sigma}$, pravilo $68$–$95$–$99{,}7$.
- Vzorec: $\bar x = \frac{1}{n}\sum x_i$, $s = \sqrt{\frac{1}{n - 1}\sum (x_i - \bar x)^2}$, standardna napaka $\frac{s}{\sqrt n}$.
- Linearna regresija: $k = \frac{S_{xy}}{S_{xx}}$, $n = \bar y - k\bar x$; premica gre skozi $(\bar x, \bar y)$; kakovost opisuje $r$ oziroma $r^2$.

## Drugače: Na sliki

**Histogram.** Če velikokrat izmerimo isto količino in meritve razvrstimo v razrede, dobimo histogram. Pri mnogo meritvah se njegovi stolpci približajo zvonasti krivulji normalne porazdelitve. Vrh zvona je pri $\mu$, prevojni točki krivulje pa sta natanko pri $\mu - \sigma$ in $\mu + \sigma$. Večji $\sigma$ pomeni nižji in širši zvon; ploščina pod krivuljo je vedno $1$.

**Binomska porazdelitev** $B(10;\ 0{,}8)$ je narisana s stolpci pri $k = 0, 1, \dots, 10$. Najvišji stolpec je pri $k = 8$ ($0{,}302$), sosednja pri $k = 7$ ($0{,}201$) in $k = 9$ ($0{,}268$). Porazdelitev je nagnjena v levo, ker $p$ ni $\frac{1}{2}$.

**Razsevni diagram.** Pri regresiji narišemo točke $(x_i, y_i)$ in premico skozi njih. Navpične daljice od točk do premice so **ostanki**; metoda najmanjših kvadratov poišče premico, pri kateri je vsota kvadratov dolžin teh daljic najmanjša. Če ostanki kažejo vzorec (na primer najprej pozitivni, nato negativni, nato spet pozitivni), odvisnost ni linearna, četudi je $r$ blizu $1$.

## Drugače: Iz vsakdanjega življenja

**Kontrola kakovosti.** Tovarna polni tablete z nazivno maso. Če je masa normalno porazdeljena, pravilo $\pm 3\sigma$ pove, da bo le približno $0{,}3\,\%$ tablet zunaj tega pasu. Kontrolne karte v proizvodnji opozorijo, ko meritev pade zunaj $\mu \pm 3\sigma$.

**Radioaktivnost.** Števec v eni sekundi v povprečju zazna $3$ razpade. Število razpadov je Poissonovo porazdeljeno z $\lambda = 3$, zato je verjetnost, da v neki sekundi ne zazna nobenega, $e^{-3} = 0{,}050$, verjetnost za natanko en razpad pa $3e^{-3} = 0{,}149$.

**Genetika.** Pri križanju dveh heterozigotov $Aa \times Aa$ je verjetnost recesivnega fenotipa $\frac{1}{4}$. Število recesivnih potomcev med $20$ je binomsko porazdeljeno z $E = 5$. Če jih dobimo $12$, je to sumljivo in nakazuje, da model ne velja.

**Gozdarstvo in ekologija.** Iz premerov dreves na vzorčnih ploskvah ocenimo povprečni premer in njegovo standardno napako za cel sestoj. Z regresijo povežemo premer debla in višino drevesa.

**Kemijska analiza.** Vsaka spektrofotometrična, kromatografska ali elektrokemijska metoda temelji na umeritveni premici, kot v Primeru 3.

## Drugače: Korak za korakom s številkami

Masa tablet je normalno porazdeljena s $\mu = 500\,\mathrm{mg}$ in $\sigma = 10\,\mathrm{mg}$. Kolikšen delež tablet ima maso nad $520\,\mathrm{mg}$ in kolikšen med $480\,\mathrm{mg}$ in $520\,\mathrm{mg}$?

1. **Standardizacija:** $z = \frac{520 - 500}{10} = 2$ in $z = \frac{480 - 500}{10} = -2$.
2. **Tabela:** $\Phi(2) = 0{,}9772$.
3. **Nad $520\,\mathrm{mg}$:** $P(X > 520) = 1 - \Phi(2) = 1 - 0{,}9772 = 0{,}0228$, to je $2{,}3\,\%$.
4. **Simetrija:** $\Phi(-2) = 1 - \Phi(2) = 0{,}0228$.
5. **Med mejama:** $P(480 < X < 520) = \Phi(2) - \Phi(-2) = 0{,}9772 - 0{,}0228 = 0{,}9544$, to je $95{,}4\,\%$.
6. **Preizkus s pravilom:** na intervalu $\mu \pm 2\sigma$ je približno $95\,\%$ vrednosti, kar se ujema.

## Drugače: Bolj natančno

**Aksiomi verjetnosti (Kolmogorov).** Verjetnostni prostor je trojica $(\Omega, \mathcal F, P)$, kjer je $\mathcal F$ družina dogodkov ($\sigma$-algebra), $P\colon \mathcal F \to [0, 1]$ pa zadošča $P(\Omega) = 1$ in $P\left(\bigcup_i A_i\right) = \sum_i P(A_i)$ za vsako zaporedje paroma nezdružljivih dogodkov. Slučajna spremenljivka je merljiva funkcija $X\colon \Omega \to \mathbb R$, njena porazdelitvena funkcija pa $F(x) = P(X \le x)$.

**Zakaj $n - 1$.** Naj bodo $X_1, \dots, X_n$ neodvisne z $E(X_i) = \mu$ in $D(X_i) = \sigma^2$. Tedaj je $E(\bar X) = \mu$ in $D(\bar X) = \frac{\sigma^2}{n}$, od koder sledi standardna napaka $\frac{\sigma}{\sqrt n}$. Iz razčlenitve $\sum (X_i - \mu)^2 = \sum (X_i - \bar X)^2 + n(\bar X - \mu)^2$ dobimo
$$E\left(\sum (X_i - \bar X)^2\right) = n\sigma^2 - n \cdot \frac{\sigma^2}{n} = (n - 1)\sigma^2,$$
zato je $E(S^2) = \sigma^2$ natanko pri deljenju z $n - 1$.

**Izpeljava regresije.** Normalni enačbi $F_n = -2\sum (y_i - kx_i - n) = 0$ in $F_k = -2\sum x_i(y_i - kx_i - n) = 0$ dasta $n = \bar y - k\bar x$ (premica gre skozi težišče) in po vstavljanju $k = \frac{S_{xy}}{S_{xx}}$. Hessejeva matrika funkcije $F$ je $2\begin{bmatrix} \sum x_i^2 & \sum x_i \\ \sum x_i & n \end{bmatrix}$ z determinanto $4nS_{xx} > 0$, če niso vsi $x_i$ enaki, zato je najdena točka minimum. Pri tem velja $r^2 = 1 - \frac{\sum (y_i - \hat y_i)^2}{S_{yy}}$, kjer je $\hat y_i = kx_i + n$; v Primeru 3 je $r^2 = 0{,}9985$.

**Binomska in Poissonova.** Če gre $n \to \infty$ in $p \to 0$ tako, da je $np = \lambda$ konstanten, gre $\binom{n}{k} p^k (1 - p)^{n - k} \to \frac{\lambda^k e^{-\lambda}}{k!}$. Zato Poissonova porazdelitev opisuje redke dogodke med zelo mnogimi priložnostmi. Pri velikem $np(1 - p)$ (praktično nad $9$) pa binomsko porazdelitev dobro aproksimira normalna z $\mu = np$ in $\sigma = \sqrt{np(1 - p)}$ (Moivre-Laplaceov izrek, poseben primer centralnega limitnega izreka).

**Intervali zaupanja.** Za normalno populacijo z neznanim $\sigma$ je $\frac{\bar X - \mu}{S/\sqrt n}$ porazdeljena po Studentovi porazdelitvi $t$ z $n - 1$ prostostnimi stopnjami. Interval zaupanja za $\mu$ je $\bar x \pm t_{n-1}\, \frac{s}{\sqrt n}$, kjer je $t_{n-1}$ tabelirana vrednost (pri $95\,\%$ in $n = 5$ je $t_4 = 2{,}78$).

## Preveri se

? Vzorec meritev je $2$, $4$, $4$, $6$. Kolikšen je vzorčni standardni odklon (z deljenjem z $n - 1$)?
- $1{,}41$
+ $1{,}63$
- $2{,}67$
- $4{,}00$
> $\bar x = 4$, odmiki $-2, 0, 0, 2$, vsota kvadratov $8$, $s^2 = \frac{8}{3} = 2{,}67$, $s = 1{,}63$. Vrednost $1{,}41$ dobimo z deljenjem s $4$, $2{,}67$ je varianca, ne standardni odklon.

? Kolikšen delež vrednosti normalno porazdeljene spremenljivke leži približno na intervalu $\mu \pm 2\sigma$?
- $68\,\%$
+ $95\,\%$
- $99{,}7\,\%$
- $50\,\%$
> Pravilo $68$–$95$–$99{,}7$: na $\mu \pm \sigma$ je $68\,\%$, na $\mu \pm 2\sigma$ $95\,\%$, na $\mu \pm 3\sigma$ $99{,}7\,\%$ vrednosti.

? Slučajna spremenljivka je porazdeljena binomsko z $n = 20$ in $p = 0{,}25$. Kolikšna je njena pričakovana vrednost?
- $4$
+ $5$
- $3{,}75$
- $15$
> $E(X) = np = 20 \cdot 0{,}25 = 5$. Število $3{,}75 = np(1 - p)$ je varianca.

? Pri regresiji smo dobili korelacijski koeficient $r = -0{,}95$. Kaj to pomeni?
- odvisnosti med količinama skoraj ni
+ med količinama je močna linearna povezava, ko $x$ narašča, $y$ pada
- sprememba $x$ dokazano povzroča spremembo $y$
- premica pojasni $5\,\%$ razpršenosti $y$
> $|r|$ blizu $1$ pomeni močno linearno povezavo, negativni predznak pomeni negativen naklon. Premica pojasni $r^2 = 0{,}9025$, torej okoli $90\,\%$ razpršenosti; vzročnosti korelacija ne dokazuje.

:::simboli
E | pričakovana vrednost | E(X) = \sum_i x_i\, p_i | |
X | slučajna spremenljivka | | | vsakemu izidu priredi število
i | indeks vrednosti oziroma meritve | | |
x_i | i-ta vrednost (podatek) | | | v regresiji neodvisna spremenljivka, npr. koncentracija
p_i | verjetnost vrednosti xᵢ | p_i = P(X = x_i) | | Σ pᵢ = 1
x | vrednost zvezne slučajne spremenljivke | | |
f | gostota verjetnosti | | | f(x) ≥ 0 in ∫ f(x) dx = 1
d | oznaka diferenciala (dx) | | |
D | varianca | D(X) = E\big((X - \mu)^2\big) = E(X^2) - \mu^2 | |
\sigma | standardni odklon | \sigma = \sqrt{D(X)} | |
\mu | pričakovana vrednost porazdelitve | \mu = E(X) | |
P | verjetnost | | | število med 0 in 1
k | število uspehov (vrednost X) | | | v regresiji y = kx + n smerni koeficient
n | število ponovitev poskusa oziroma meritev | | | v regresiji y = kx + n začetna vrednost
p | verjetnost uspeha v enem poskusu | | |
\lambda | parameter Poissonove porazdelitve | | | E(X) = σ² = λ
e | Eulerjevo število | | | e ≈ 2,718
\bar x | vzorčno povprečje | \bar x = \frac{1}{n}\sum x_i | |
s | vzorčni standardni odklon | s = \sqrt{\frac{1}{n - 1}\sum (x_i - \bar x)^2} | |
F | vsota kvadratov navpičnih odstopanj od premice | F(k, n) = \sum_{i=1}^n (y_i - kx_i - n)^2 | | drugje porazdelitvena funkcija F(x) = P(X ≤ x)
y_i | izmerjena vrednost pri xᵢ (npr. absorbanca) | | |
\bar y | povprečje vrednosti yᵢ | \bar y = \frac{1}{n}\sum y_i | |
r | korelacijski koeficient | r = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sqrt{\sum (x_i - \bar x)^2 \sum (y_i - \bar y)^2}} | | -1 ≤ r ≤ 1
X_i | neodvisne slučajne spremenljivke (posamezne meritve) | | | E(Xᵢ) = μ, D(Xᵢ) = σ²
\bar X | povprečje slučajnih spremenljivk Xᵢ | \bar X = \frac{1}{n}\sum X_i | | njegova pričakovana vrednost je μ
s_{\bar x} | standardna napaka povprečja | s_{\bar x} = \frac{s}{\sqrt n} | |
B | binomska porazdelitev B(n, p) | | | v P(A ∪ B) oznaka dogodka
:::
