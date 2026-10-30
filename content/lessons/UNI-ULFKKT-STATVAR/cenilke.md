---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Med drugo svetovno vojno so zavezniki želeli vedeti, koliko tankov mesečno izdela nemška industrija. Obveščevalna poročila so navajala zelo visoke številke. Statistiki so imeli drug vir: zaporedne serijske številke na delih zajetih tankov. Iz nekaj takih številk so ocenili celotno proizvodnjo. Ko so po vojni pregledali tovarniške dokumente, so bile statistične ocene precej bližje resnici kot obveščevalne.

Isto uganko poznaš iz igre. Na klubski tomboli so listki oštevilčeni od $1$ do $N$, a $N$ ne poznaš. Izvlečejo štiri listke: $17$, $52$, $38$, $61$. Koliko je vseh listkov? Ko odgovarjaš, uporabiš **cenilko**: pravilo, ki iz vzorca izračuna oceno neznanega parametra.

V varnostni statistiki je naloga ista. Iz števila nezgod, okvar ali izpadov v nekaj mesecih ocenimo pogostost, na kateri temelji ocena tveganja. Cenilko sestavimo z metodo največjega verjetja, ki jo je v začetku 20. stoletja razvil R. A. Fisher. Ali cenilka sistematično greši v eno smer, pove njena (ne)pristranskost.

## Razlaga

**Skušnjava.** Pri tomboli se ponuja odgovor: »Največja številka, ki sem jo videl, je $61$, torej je listkov $61$.« Zveni razumno, saj vsaj $61$ listkov mora biti.

:::premisli
Žrebanje si zamisli ponovljeno velikokrat. Ali ocena »$N \approx$ največja številka« kdaj **preceni** $N$? Kako pogosto ga zadene natanko? V katero smer torej greši v povprečju?
---
Večja od $N$ ne more biti nikoli, enaka $N$ pa le, če slučajno izvlečemo prav zadnji listek. Največja številka je torej vedno $\le N$ in pogosto manjša. Ocena zato v povprečju **podceni** $N$; greši sistematično v eno smer.
:::

**Cenilka in ocena.** Vzorec $X_1, \dots, X_n$ je zaporedje slučajnih spremenljivk. **Cenilka** $\hat{\theta} = T(X_1, \dots, X_n)$ je funkcija vzorca, zato je tudi sama slučajna spremenljivka: pri vsakem novem vzorcu da drugo vrednost. **Ocena** je ena konkretna vrednost, na primer $61$.

**Pristranskost** cenilke je razlika med njeno pričakovano vrednostjo in pravim parametrom:

$$b(\hat{\theta}) = E(\hat{\theta}) - \theta$$

Cenilka je **nepristranska**, če je $E(\hat{\theta}) = \theta$ za vsako možno vrednost $\theta$. To ne pomeni, da zadene pri tvojem vzorcu. Pomeni, da bi se njene ocene pri mnogo ponovitvah v povprečju ujele s $\theta$.

Za tombolo velja (preverba na majhnem primeru je v »Korak za korakom«, izpeljava v »Bolj natančno«): če izvlečemo $k$ listkov brez vračanja in je $M$ največja številka, je

$$E(M) = \frac{k(N+1)}{k+1} < N.$$

Popravljena cenilka $\hat N = M \cdot \dfrac{k+1}{k} - 1$ je nepristranska: ko vstavimo $E(M)$, dobimo $(N+1) - 1 = N$.

**Druga skušnjava: »najverjetnejši parameter«.** Kako sploh pridemo do cenilke? Ideja je izbrati vrednost parametra, pri kateri bi bili **naši podatki** najbolj verjetni. Košarkar zadene $8$ od $10$ prostih metov. Verjetnost tega izida pri deležu zadetkov $p$ je $\binom{10}{8}p^8(1-p)^2$:

| $p$ | verjetnost izida »8 od 10« |
|---|---|
| $0{,}5$ | $0{,}044$ |
| $0{,}6$ | $0{,}121$ |
| $0{,}7$ | $0{,}234$ |
| $0{,}8$ | $0{,}302$ |
| $0{,}9$ | $0{,}194$ |

Največja je pri $p = 0{,}8$. Tabela pa **ne** pove, da je $p = 0{,}8$ »najverjetnejši«. Podatki so fiksni, spreminjamo $p$; vrednosti v stolpcu se ne seštejejo v $1$.

**Funkcija verjetja.** Za neodvisne podatke $x_1, \dots, x_n$ z gostoto ali verjetnostno funkcijo $f(x;\theta)$ je

$$L(\theta) = \prod_{i=1}^{n} f(x_i;\theta).$$

**Cenilka največjega verjetja** (MLE, angl. *maximum likelihood estimator*) je $\hat{\theta}$, pri kateri je $L$ največja. Ker je logaritem naraščajoč, je laže maksimizirati $\ell(\theta) = \ln L(\theta)$: produkt postane vsota. Recept:

1. zapiši $L(\theta)$ in $\ell(\theta)$,
2. reši $\ell'(\theta) = 0$,
3. preveri, da gre za maksimum, in poglej tudi robove dovoljenih $\theta$.

**MLE ni nujno nepristranska.** Za normalno porazdelitev metoda da $\hat{\mu} = \bar X$ in

$$\hat{\sigma}^2 = \frac1n \sum_{i=1}^{n} (X_i - \bar X)^2.$$

$\bar X$ je nepristranska, $\hat{\sigma}^2$ pa ne: $E(\hat{\sigma}^2) = \dfrac{n-1}{n}\sigma^2$. Nepristranska je **vzorčna disperzija** z delitvijo z $n-1$:

$$s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar X)^2.$$

:::premisli
Zakaj deljenje z $n$ disperzijo v povprečju podceni? Namig: od katere točke so podatki v povprečju najmanj oddaljeni?
---
Vsota $\sum (x_i - c)^2$ je najmanjša prav pri $c = \bar x$. Ker $\mu$ ne poznamo, merimo odmike od $\bar x$, ki je podatkom bližje kot pravi $\mu$. Odmiki so zato premajhni, vsota tudi. Delitev z $n-1$ to natanko popravi.
:::

Pristranskost $\hat{\sigma}^2$ je $-\sigma^2/n$ in gre proti $0$, ko $n$ raste. Taki cenilki rečemo **asimptotično nepristranska**. Pri velikih vzorcih je razlika med $n$ in $n-1$ zanemarljiva, pri petih meritvah pa ne.

## Rešeni primeri

### Primer 1 (lažji): prosti meti

Košarkarka zadene $34$ od $40$ prostih metov. Meti so neodvisni, vsak z enako verjetnostjo zadetka $p$. Poišči MLE za $p$ in povej, ali je nepristranska.

**Podatki:** $n = 40$ metov, $k = 34$ zadetkov, neodvisni poskusi z verjetnostjo $p$
**Iščemo:** $\hat p$ in $E(\hat p)$

:::formula
$\ell(p) = k \ln p + (n-k)\ln(1-p)$
:::

**Rešitev:**

1. Verjetje (brez konstante $\binom{n}{k}$, ki ne premakne maksimuma): $L(p) = p^{k}(1-p)^{n-k}$.
2. Odvod: $\ell'(p) = \dfrac{k}{p} - \dfrac{n-k}{1-p} = 0$.
3. Pomnožimo s $p(1-p)$: $k(1-p) = (n-k)p$, torej $\hat p = \dfrac{k}{n}$.
4. $\hat p = \dfrac{34}{40} = 0{,}85$.
5. Število zadetkov $K$ je binomsko, $E(K) = np$, zato $E(\hat p) = \dfrac{np}{n} = p$: cenilka je nepristranska.
6. Odgovor: $\hat p = 0{,}85$; cenilka $K/n$ je nepristranska.

### Primer 2: goli na tekmo

Ekipa je na desetih tekmah dosegla $2, 0, 3, 1, 1, 4, 2, 0, 1, 2$ gola. Število golov na tekmo modeliramo s Poissonovo porazdelitvijo s parametrom $\lambda$. Poišči MLE za $\lambda$ in z njim oceni verjetnost, da ekipa na tekmi ne zadene.

**Podatki:** $n = 10$, $\sum x_i = 16$, $X_i \sim \mathrm{Poisson}(\lambda)$, neodvisni
**Iščemo:** $\hat\lambda$ in oceno $P(X = 0)$

:::formula
$\ell(\lambda) = -n\lambda + \Big(\sum x_i\Big)\ln\lambda - \sum \ln(x_i!)$
:::

**Rešitev:**

1. $f(x;\lambda) = e^{-\lambda}\lambda^x / x!$, zato po logaritmiranju produkta dobimo $\ell(\lambda)$ zgoraj.
2. $\ell'(\lambda) = -n + \dfrac{\sum x_i}{\lambda} = 0$ da $\hat\lambda = \dfrac{\sum x_i}{n} = \bar x$.
3. $\ell''(\lambda) = -\sum x_i / \lambda^2 < 0$, torej je to maksimum.
4. $\hat\lambda = \dfrac{16}{10} = 1{,}6$ gola na tekmo.
5. $P(X=0) = e^{-\lambda}$. MLE za $e^{-\lambda}$ dobimo tako, da vstavimo $\hat\lambda$: $e^{-1{,}6} \approx 0{,}202$.
6. Ker je $E(\bar X) = \lambda$, je $\hat\lambda$ nepristranska.
7. Odgovor: $\hat\lambda = 1{,}6$; ekipa ostane brez gola na približno $20\,\%$ tekem.

### Primer 3 (težji): tombola

Listki so oštevilčeni od $1$ do $N$. Brez vračanja izvlečemo $k = 4$ listke: $17$, $52$, $38$, $61$. Poišči MLE za $N$ in nato nepristransko oceno.

**Podatki:** $k = 4$, izvlečeno $17, 52, 38, 61$, največja številka $m = 61$, vsaka četverica je enako verjetna
**Iščemo:** $\hat N_\mathrm{ML}$ in nepristransko $\hat N$

:::formula
$L(N) = \dfrac{1}{\binom{N}{k}}$ za $N \ge m$, sicer $0$; $\quad \hat N = m \cdot \dfrac{k+1}{k} - 1$
:::

**Rešitev:**

1. Pri $N < 61$ listka $61$ ne bi mogli izvleči, zato $L(N) = 0$.
2. Za $N \ge 61$ je $L(N) = 1/\binom{N}{4}$; ko $N$ raste, $\binom{N}{4}$ raste, $L$ pada.
3. Odvoda ne izenačimo z $0$: maksimum je na robu, pri najmanjšem dovoljenem $N$. Torej $\hat N_\mathrm{ML} = 61$.
4. Iz razlage vemo, da je $E(M) < N$, zato ta cenilka podcenjuje.
5. Popravek: $\hat N = 61 \cdot \dfrac{5}{4} - 1 = 75{,}25$.
6. Odgovor: MLE da $61$, nepristranska ocena pa približno $75$ listkov.

### Primer 4 – zdaj ti

Sprinter je v štirih tekih na $100\,\mathrm{m}$ dosegel $11{,}2$, $11{,}5$, $11{,}0$ in $11{,}3\,\mathrm{s}$. Čase modeliramo z normalno porazdelitvijo. Izračunaj $\hat{\sigma}^2$ (MLE) in nepristransko $s^2$.

**Podatki:** $n = 4$, časi $11{,}2$; $11{,}5$; $11{,}0$; $11{,}3\,\mathrm{s}$
**Iščemo:** $\hat{\sigma}^2$ in $s^2$

:::formula
$\hat{\sigma}^2 = \dfrac{1}{n}\sum (x_i - \bar x)^2$, $\quad s^2 = \dfrac{1}{n-1}\sum (x_i - \bar x)^2$
:::

**Rešitev:**

1. $\bar x = \dfrac{45}{4} = 11{,}25\,\mathrm{s}$.
2. Kvadrati odmikov: $0{,}0025$; $0{,}0625$; $0{,}0625$; $0{,}0025$; vsota $0{,}13\,\mathrm{s^2}$.
3. Zdaj deli sam, nato preveri:

:::premisli
Katera od obeh ocen je večja in za koliko? Izračunaj $\hat{\sigma}^2$ in $s^2$.
---
$\hat{\sigma}^2 = 0{,}13/4 = 0{,}0325\,\mathrm{s^2}$, $s^2 = 0{,}13/3 \approx 0{,}0433\,\mathrm{s^2}$. Pri $n = 4$ je razlika kar tretjina.
:::

## Pogoste napake

- **Verjetje je verjetnost parametra.** »$L(0{,}8) = 0{,}30$, torej je $p = 0{,}8$ s $30\,\%$ verjetnostjo.« Napačno: $L$ je verjetnost **podatkov** pri danem $p$; po $p$ se ne sešteje v $1$. Prav: MLE je vrednost, pri kateri so podatki najbolj verjetni.
- **Nepristranska pomeni točna.** »Moja ocena je nepristranska, torej je prava vrednost.« Napačno: nepristranskost je lastnost povprečja čez vse možne vzorce. Prav: posamezna ocena lahko zgreši; o natančnosti govori disperzija cenilke.
- **MLE je vedno nepristranska.** Protiprimera sta $\hat{\sigma}^2$ z delitvijo z $n$ in največja številka pri tomboli. Prav: pristranskost vedno preveri z $E(\hat{\theta})$.
- **Vedno iščem ničlo odvoda.** Pri tomboli $L(N)$ pada, odvod nima ničle. Prav: maksimum je lahko na robu dovoljenih vrednosti; preveri robove.

## Povzetek

- Cenilka $\hat{\theta} = T(X_1,\dots,X_n)$ je slučajna spremenljivka; ocena je njena vrednost pri danem vzorcu.
- Pristranskost $b = E(\hat{\theta}) - \theta$; nepristranska, če $E(\hat{\theta}) = \theta$ za vsak $\theta$.
- MLE: maksimiziraj $L(\theta) = \prod f(x_i;\theta)$ oziroma $\ell = \ln L$; reši $\ell' = 0$ in preveri robove.
- Bernoulli: $\hat p = k/n$; Poisson: $\hat\lambda = \bar x$; normalna: $\hat{\mu} = \bar x$, $\hat{\sigma}^2 = \frac1n\sum(x_i-\bar x)^2$.
- $\hat{\sigma}^2$ je pristranska ($E = \frac{n-1}{n}\sigma^2$); nepristranska je $s^2$ z $n-1$.
- Tombola: MLE $= M$ podcenjuje; nepristranska je $M\frac{k+1}{k} - 1$.

## Drugače: Kot zgodba

Ana in Bor ugibata, koliko listkov je v bobnu tombole. Vsak večer izvlečejo štiri, vsak večer bobna ne poznata. Ana vedno reče največjo številko, ki jo vidi. Bor vzame največjo, prišteje četrtino in odšteje ena.

Po mesecu pogledata zapisnik. Anine ocene niso bile nikoli previsoke, skoraj vedno pa prenizke. Borove so bile včasih previsoke, včasih prenizke, v povprečju pa so se ujele s pravim številom. Ana je ravnala po verjetju: njena številka je bila vsak večer tista, pri kateri je bil izvlečeni izid najbolj verjeten. Bor je ravnal nepristransko. Nobeden ni zadel vsak večer. Razlika je bila v tem, ali je napaka imela smer.

## Drugače: Korak za korakom s številkami

Vzemimo majhen boben: $N = 5$ listkov, izvlečemo $k = 2$. Možnih parov je $\binom{5}{2} = 10$, vsi enako verjetni.

| največja $M$ | št. parov | $\hat N = 1{,}5M - 1$ |
|---|---|---|
| $2$ | $1$ | $2$ |
| $3$ | $2$ | $3{,}5$ |
| $4$ | $3$ | $5$ |
| $5$ | $4$ | $6{,}5$ |

1. $E(M) = \dfrac{2 \cdot 1 + 3 \cdot 2 + 4 \cdot 3 + 5 \cdot 4}{10} = 4$, manj kot $N = 5$.
2. Preveri s formulo: $\dfrac{k(N+1)}{k+1} = \dfrac{2 \cdot 6}{3} = 4$.
3. Popravljena: $E(\hat N) = \dfrac{2 \cdot 1 + 3{,}5 \cdot 2 + 5 \cdot 3 + 6{,}5 \cdot 4}{10} = 5$. Natanko $N$.

## Drugače: Bolj natančno

Dokaz, da je $E(\hat{\sigma}^2) = \frac{n-1}{n}\sigma^2$. Naj bo $E(X_i) = \mu$, $D(X_i) = \sigma^2$, neodvisni. Razpišemo:

$$\sum (X_i - \bar X)^2 = \sum (X_i - \mu)^2 - n(\bar X - \mu)^2.$$

Prvi člen ima pričakovano vrednost $n\sigma^2$. Ker je $D(\bar X) = \sigma^2/n$, ima drugi pričakovano vrednost $n \cdot \sigma^2/n = \sigma^2$. Skupaj $(n-1)\sigma^2$; deljeno z $n$ da $\frac{n-1}{n}\sigma^2$, deljeno z $n-1$ pa $\sigma^2$.

Za tombolo: $P(M \le j) = \binom{j}{k}/\binom{N}{k}$, torej $P(M = j) = \binom{j-1}{k-1}/\binom{N}{k}$. Z identiteto $\sum_{j=k}^{N} j\binom{j-1}{k-1} = k\binom{N+1}{k+1}$ dobimo $E(M) = \frac{k(N+1)}{k+1}$.

## Preveri se

? Tri od spodnjih trditev opisujejo nepristransko cenilko $\hat{\theta}$. Katera ne sodi zraven?
- Njena pričakovana vrednost je $\theta$ za vsako vrednost $\theta$.
~ To je sama definicija nepristranskosti, zato sodi zraven.
- Njena pristranskost $E(\hat{\theta}) - \theta$ je enaka $0$.
~ To je ista definicija, zapisana z razliko; sodi zraven.
+ Pri vsakem vzorcu da natanko vrednost $\theta$.
- Pri mnogo ponovitvah se njene ocene v povprečju ujamejo s $\theta$.
~ To je pomen pričakovane vrednosti z besedami; sodi zraven.
> Nepristranskost govori o povprečju čez vzorce. Posamezna ocena se od $\theta$ skoraj vedno razlikuje.

? Strelec na tekmi zadene $18$ od $24$ strelov. Kolikšna je MLE za verjetnost zadetka $p$?
- $0{,}25$
~ To je delež zgrešenih strelov, $6/24$. Verjetje za $p$ ima $p^{18}$, zato šteje zadetke.
+ $0{,}75$
- $1{,}33$
~ To je $24/18$, obrnjen ulomek; verjetnost ne more biti večja od $1$.
- $0{,}5$
~ $0{,}5$ je »pošten« kovanec, a podatkov ne upošteva. MLE izbere $p$, pri katerem so podatki najbolj verjetni.
> $\hat p = k/n = 18/24 = 0{,}75$.

? Kaj se zgodi s pristranskostjo cenilke $\hat{\sigma}^2 = \frac1n\sum(X_i - \bar X)^2$, ko velikost vzorca $n$ raste?
- Raste, ker seštejemo več kvadratov.
~ Več kvadratov delimo tudi z večjim $n$; pristranskost je $-\sigma^2/n$.
- Ostane enaka, ker je cenilka pristranska ne glede na $n$.
~ Res je pristranska za vsak končen $n$, a velikost pristranskosti se manjša.
+ Gre proti $0$: cenilka je asimptotično nepristranska.
> $E(\hat{\sigma}^2) - \sigma^2 = -\sigma^2/n \to 0$, ko $n \to \infty$.

? Izpeljava MLE za Poissonov $\lambda$ iz $n$ podatkov. Korak 1: $L(\lambda) = \prod e^{-\lambda}\lambda^{x_i}/x_i!$. Korak 2: $\ell(\lambda) = -\lambda + (\sum x_i)\ln\lambda - \sum\ln(x_i!)$. Korak 3: $\ell'(\lambda) = -1 + \sum x_i/\lambda$. Korak 4: $\hat\lambda = \sum x_i$. V katerem koraku je nastala napaka?
- Korak 1
~ Korak 1 je pravilen: neodvisni podatki, zato se verjetnosti zmnožijo.
+ Korak 2
- Korak 3
~ Korak 3 je pravilen odvod koraka 2; napaka je prišla prej.
- Korak 4
~ Korak 4 sledi iz koraka 3. Napačen je, a le posledica prejšnje napake.
> V koraku 2 manjka $n$: $\prod e^{-\lambda} = e^{-n\lambda}$, zato $\ell = -n\lambda + \dots$ in $\hat\lambda = \bar x$.

? V obratu pol leta ni bilo nobene nezgode. Za mesečno število nezgod velja Poissonov model. Kaj je pravilno?
- Tveganje je nič, ker je $\hat\lambda = 0$ nepristranska ocena.
~ Nepristranska ne pomeni točna. Ocena $0$ je ena vrednost slučajne spremenljivke.
+ $\hat\lambda = 0$ je MLE in nepristranska ocena, a pravi $\lambda$ je lahko večji od $0$.
- MLE ne obstaja, ker odvod $\ell'(\lambda)$ nima ničle.
~ Maksimum je na robu, pri $\lambda = 0$. Ničla odvoda ni nujna.
> Pri $\sum x_i = 0$ je $L(\lambda) = e^{-6\lambda}$, največja pri $\lambda = 0$. Majhen $\lambda$ hitro da pol leta brez nezgod, zato ocena ne dokazuje, da tveganja ni.

:::simboli
\theta | neznani parameter porazdelitve | | |
\hat{\theta} | cenilka parametra \theta | | | funkcija vzorca, zato slučajna spremenljivka
b | pristranskost cenilke | b(\hat{\theta}) = E(\hat{\theta}) - \theta | | nepristranska, če je b = 0
E | pričakovana vrednost | | |
M | največja izvlečena številka (slučajna spremenljivka) | | |
k | število izvlečenih listkov | | | pri binomskem zgledu število zadetkov
N | število vseh listkov (neznani parameter) | | |
\hat N | nepristranska cenilka za N | \hat N = m \cdot \dfrac{k+1}{k} - 1 | |
m | izmerjena največja številka | | | N ≥ m
L | funkcija verjetja | L(\theta) = \prod_{i=1}^{n} f(x_i;\theta) | | MLE je \hat{\theta}, pri kateri je L največja
i | indeks podatka | | |
n | velikost vzorca | | |
f | gostota ali verjetnostna funkcija | | |
x_i | izmerjeni podatki | | |
X_i | podatki kot slučajne spremenljivke | | | neodvisne, E(X_i) = \mu, D(X_i) = \sigma^2
\bar X | vzorčno povprečje (slučajna spremenljivka) | \bar X = \frac{1}{n}\sum X_i | | nepristranska cenilka za \mu
\bar x | povprečje izmerjenih podatkov | \bar x = \frac{1}{n}\sum x_i | |
\sigma | standardni odklon porazdelitve | | |
\hat{\sigma} | cenilka standardnega odklona po metodi največjega verjetja | \hat{\sigma}^2 = \frac1n \sum_{i=1}^{n} (X_i - \bar X)^2 | | pristranska: E(\hat{\sigma}^2) = \frac{n-1}{n}\sigma^2
s | vzorčni standardni odklon | s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar X)^2 | | s^2 je nepristranska cenilka za \sigma^2
\mu | pričakovana vrednost porazdelitve | | |
p | delež zadetkov (verjetnost uspeha) | | |
\lambda | parameter Poissonove porazdelitve | | | povprečno število dogodkov
:::
