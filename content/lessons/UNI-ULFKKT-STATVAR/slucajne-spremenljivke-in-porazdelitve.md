---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Na petdnevnem terenskem delu moraš vsaj en deževen dan preizkusiti nov merilnik padavin. Napoved pravi, da je verjetnost dežja vsak dan naslednjega tedna $0{,}2$, dnevi pa so med seboj neodvisni. Kako zanesljivo ti bo uspelo: gotovo, z verjetnostjo okoli dve tretjini ali komaj vsak drugi teden? Preden bereš naprej, oceni sam.

Mamljiv račun $5 \cdot 0{,}2 = 1$ bi obljubljal gotovost, a je napačen. Verjetnost, da je dan suh, je $0{,}8$, da je suhih vseh pet, pa $0{,}8^5 \approx 0{,}328$. Vsaj en deževen dan bo torej z verjetnostjo $1 - 0{,}328 = 0{,}672$, ne z gotovostjo.

Iz klasične verjetnosti že znaš izračunati verjetnost enega dogodka. Pri vremenu, nesrečah ali okvarah pa nas zanima *število*: koliko deževnih dni, koliko udarov strele, koliko minut do naslednjega sunka vetra. Za taka vprašanja potrebujemo slučajne spremenljivke in nekaj tipičnih porazdelitev, ki se v naravi ponavljajo.

## Razlaga

**Od dogodka do števila.** V klasični verjetnosti vprašaš »Ali bo v ponedeljek deževalo?« in dobiš eno verjetnost. Zdaj vprašaš »Koliko dni v tednu bo deževalo?«. Odgovor je število, ki ga ne poznamo vnaprej. Takemu številu, ki je odvisno od izida poskusa, rečemo **slučajna spremenljivka** in jo označimo z veliko črko, npr. $X$.

**Porazdelitev** pove, katere vrednosti $X$ zavzame in s kolikšnimi verjetnostmi. Vsota vseh teh verjetnosti je $1$.

**Diskretna proti zvezni.** Število deževnih dni zavzame le vrednosti $0, 1, 2, \ldots$ To je **diskretna** spremenljivka: vsaki vrednosti pripada verjetnost $P(X = k)$. Čas do naslednjega udara strele pa je lahko $3{,}2$ ali $3{,}21$ minute, torej katero koli realno število. To je **zvezna** spremenljivka. Pri njej $P(X = a) = 0$ za vsak posamezen $a$; smiselno je le vprašanje, ali $X$ pade na *interval*. Opišemo jo z **gostoto** $f(x)$: verjetnost intervala je ploščina pod grafom gostote nad tem intervalom.

| | diskretna | zvezna |
|---|---|---|
| vrednosti | $0, 1, 2, \ldots$ | interval realnih števil |
| opis | $P(X = k)$ | gostota $f(x)$ |
| verjetnost | vsota | ploščina pod $f$ |

:::premisli
Zakaj pri zvezni spremenljivki velja $P(X = 28) = 0$, čeprav temperatura $28\,^\circ\mathrm{C}$ ni nemogoča?
---
Pas nad eno samo točko je širok $0$, zato je ploščina pod gostoto nad njim $0$. Pozitivno verjetnost dobi le interval, npr. $27{,}5 \le X \le 28{,}5$.
:::

**Binomska porazdelitev: štejemo uspehe v $n$ poskusih.** Imamo $n$ neodvisnih ponovitev, vsaka »uspe« z verjetnostjo $p$ (npr. dan je nevihten). $X$ je število uspehov. En določen vrstni red s $k$ uspehi ima verjetnost $p^k(1-p)^{n-k}$, takih vrstnih redov pa je $\binom{n}{k}$. Zato
$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, \ldots, n.$$
Pišemo $X \sim \mathrm{Bin}(n, p)$. Največja možna vrednost je $n$.

**Poissonova porazdelitev: štejemo dogodke v času.** Udarov strele v eni uri nevihte ne moremo razdeliti na »poskuse«. Poznamo le povprečno število v intervalu, $\lambda$. V primerjavi z binomsko ni zgornje meje in ni števila poskusov. Poissonova je meja binomske, ko je poskusov zelo veliko, vsak pa ima zelo majhno verjetnost:
$$P(X = k) = \frac{\lambda^k}{k!}\, e^{-\lambda}, \quad k = 0, 1, 2, \ldots$$

**Enakomerna porazdelitev: nobena točka ni prednostna.** Če vemo le, da se bo ploha začela nekje med 14.00 in 15.00, in noben trenutek ni verjetnejši, je čas začetka enakomerno porazdeljen na $[a, b]$. Gostota je konstantna, $f(x) = \frac{1}{b-a}$, in verjetnost je kar delež dolžine: verjetnost začetka med 14.40 in 14.55 je $\frac{15}{60} = 0{,}25$.

**Eksponentna porazdelitev: čakamo na naslednji dogodek.** Poissonova šteje, *koliko* udarov bo; eksponentna meri, *kdaj* bo naslednji. Če udari prihajajo s povprečjem $\lambda$ na časovno enoto, je čas čakanja $T$ eksponentno porazdeljen:
$$f(t) = \lambda e^{-\lambda t}, \qquad P(T > t) = e^{-\lambda t}, \quad t \ge 0.$$
Druga formula sledi iz Poissonove: število udarov $X$ v času $t$ ima povprečje $\lambda t$, »čakamo dlje od $t$« pa pomeni »v času $t$ ni bilo nobenega udara«, $P(X = 0) = e^{-\lambda t}$.

:::premisli
Strele že $20$ minut ni bilo. Ali je zdaj verjetnost, da udari v naslednji minuti, večja kot na začetku?
---
Ne. Udari so neodvisni, zato preteklo čakanje nič ne »nabira«. Eksponentna porazdelitev je **brez spomina**: $P(T > s + t \mid T > s) = P(T > t)$.
:::

**Normalna porazdelitev: vsota mnogih majhnih vplivov.** Najvišja dnevna temperatura v juliju je posledica sonca, vetra, vlage in še mnogo drugega. Take količine so pogosto približno normalno porazdeljene: gostota je zvonasta, simetrična okoli središča $\mu$, širino pa določa $\sigma$. Pišemo $X \sim N(\mu, \sigma)$.
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
Verjetnosti beremo iz tabele standardne normalne porazdelitve $\Phi(z)$, potem ko vrednost **standardiziramo**: $z = \frac{x - \mu}{\sigma}$. Za grobo oceno: znotraj $\mu \pm \sigma$ leži približno $68\,\%$, znotraj $\mu \pm 2\sigma$ približno $95\,\%$ in znotraj $\mu \pm 3\sigma$ približno $99{,}7\,\%$ vrednosti.

## Rešeni primeri

### Primer 1: nevihtni dnevi

Verjetnost, da je julijski dan nevihten, je $0{,}3$, dnevi so neodvisni. Kolikšna je verjetnost, da sta v tednu natanko dva nevihtna dneva?

**Podatki:** $n = 7$ dni, $p = 0{,}3$, $k = 2$
**Iščemo:** $P(X = 2)$ za $X \sim \mathrm{Bin}(7; 0{,}3)$

:::formula
$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$
:::

**Rešitev:**

1. Fiksno število neodvisnih dni z isto verjetnostjo, zato binomska.
2. Izbira dveh dni izmed sedmih: $\binom{7}{2} = 21$.
3. Verjetnost enega vrstnega reda: $0{,}3^2 \cdot 0{,}7^5 = 0{,}09 \cdot 0{,}16807 \approx 0{,}01513$.
4. $P(X = 2) = 21 \cdot 0{,}01513 \approx 0{,}318$.
5. Odgovor: natanko dva nevihtna dneva bosta z verjetnostjo približno $0{,}32$.

### Primer 2: potresi na območju

Na nekem območju v povprečju zabeležijo $2$ močnejša potresa na leto, potresi so med seboj neodvisni. Kolikšna je verjetnost, da bosta v naslednjem letu vsaj dva?

**Podatki:** $\lambda = 2$ na leto, interval $1$ leto
**Iščemo:** $P(X \ge 2)$

:::formula
$P(X = k) = \dfrac{\lambda^k}{k!} e^{-\lambda}$, $\quad P(X \ge 2) = 1 - P(X = 0) - P(X = 1)$
:::

**Rešitev:**

1. Štejemo dogodke v času brez zgornje meje, zato Poissonova.
2. $P(X = 0) = e^{-2} \approx 0{,}1353$.
3. $P(X = 1) = 2 e^{-2} \approx 0{,}2707$.
4. Komplement, ker je »vsaj dva« neskončno mnogo vrednosti: $P(X \ge 2) \approx 1 - 0{,}1353 - 0{,}2707 = 0{,}594$.
5. Odgovor: vsaj dva potresa bosta z verjetnostjo približno $0{,}59$.

### Primer 3: čakanje na strelo

Med nevihto strele v okolici merilne postaje udarijo v povprečju $6$-krat na uro, neodvisno. (a) Kolikšna je verjetnost, da na naslednji udar čakamo več kot $15$ minut? (b) Kako dolgo mora meritev trajati, da bo vsaj en udar zabeležen z verjetnostjo $0{,}9$?

**Podatki:** $\lambda = 6\,\mathrm{h^{-1}}$, $t_a = 15\,\mathrm{min}$, iskana verjetnost $0{,}9$
**Iščemo:** $P(T > 15\,\mathrm{min})$ in čas $t$, pri katerem je $P(T \le t) = 0{,}9$

:::formula
$P(T > t) = e^{-\lambda t}$, $\quad P(T \le t) = 1 - e^{-\lambda t}$
:::

**Rešitev:**

1. Enote izenačimo: $\lambda = \frac{6}{60\,\mathrm{min}} = 0{,}1\,\mathrm{min^{-1}}$.
2. (a) $\lambda t = 0{,}1 \cdot 15 = 1{,}5$, zato $P(T > 15) = e^{-1{,}5} \approx 0{,}223$.
3. (b) Zahtevamo $1 - e^{-0{,}1 t} = 0{,}9$, torej $e^{-0{,}1 t} = 0{,}1$.
4. Logaritmiramo: $0{,}1\, t = \ln 10 \approx 2{,}303$, zato $t \approx 23{,}0\,\mathrm{min}$.
5. Odgovor: več kot $15$ minut čakamo z verjetnostjo približno $0{,}22$; meritev mora trajati vsaj približno $23$ minut.

### Primer 4: zdaj ti

Najvišja julijska dnevna temperatura v nekem kraju je približno normalno porazdeljena s središčem $28\,^\circ\mathrm{C}$ in $\sigma = 3\,^\circ\mathrm{C}$. Kolikšna je verjetnost, da izbrani julijski dan preseže $34\,^\circ\mathrm{C}$? Iz tabele: $\Phi(2) = 0{,}9772$.

**Podatki:** $\mu = 28\,^\circ\mathrm{C}$, $\sigma = 3\,^\circ\mathrm{C}$, meja $x = 34\,^\circ\mathrm{C}$, $\Phi(2) = 0{,}9772$
**Iščemo:** $P(X > 34)$

:::formula
$z = \dfrac{x - \mu}{\sigma}$, $\quad P(X > x) = 1 - \Phi(z)$
:::

**Rešitev:**

1. Standardiziramo: $z = \frac{34 - 28}{3} = 2$.
2. Tabela da verjetnost *pod* mejo, nas zanima verjetnost *nad* njo.
3. Izračunaj sam, nato preveri:

:::premisli
Koliko je $1 - \Phi(2)$ in kaj pove?
---
$1 - 0{,}9772 = 0{,}0228$. Približno $2{,}3\,\%$ julijskih dni, torej v povprečju manj kot en dan na mesec, preseže $34\,^\circ\mathrm{C}$.
:::

## Pogoste napake

- **Seštevanje verjetnosti neodvisnih dni.** »Pet dni po $0{,}2$ je $1$« bi pomenilo, da se dogodki ne morejo zgoditi skupaj. Seštevamo le nezdružljive dogodke. Za »vsaj enkrat« vzemi komplement: $1 - (1-p)^n$.
- **Brez binomskega koeficienta.** Kdor za dva nevihtna dneva v tednu izračuna le $0{,}3^2 \cdot 0{,}7^5$, upošteva en sam vrstni red (npr. ponedeljek in torek). Dni lahko izberemo na $\binom{7}{2} = 21$ načinov.
- **Gostota ni verjetnost.** $f(28)$ ni $P(X = 28)$; ta je pri zvezni spremenljivki $0$. Gostota je lahko celo večja od $1$. Verjetnost je šele ploščina pod $f$ nad intervalom.
- **»Strela je že na vrsti.«** Dolgo čakanje ne poveča verjetnosti udara v naslednji minuti; eksponentna porazdelitev je brez spomina.
- **Mešanje enot ali $\sigma$.** Pri $\lambda$ na uro in $t$ v minutah najprej izenači enote. Pri normalni delimo s $\sigma$, ne s $\sigma^2$.

## Povzetek

- Slučajna spremenljivka je število, ki ga določi izid poskusa; porazdelitev pove, s kolikšnimi verjetnostmi zavzame vrednosti.
- Diskretna: $P(X = k)$, verjetnosti seštevamo. Zvezna: gostota $f$, verjetnost je ploščina pod njo; $P(X = a) = 0$.
- Binomska $\mathrm{Bin}(n, p)$: število uspehov v $n$ neodvisnih poskusih, $P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}$.
- Poissonova s parametrom $\lambda$: število dogodkov v intervalu, $P(X=k) = \frac{\lambda^k}{k!}e^{-\lambda}$.
- Enakomerna na $[a,b]$: $f = \frac{1}{b-a}$, verjetnost je delež dolžine.
- Eksponentna: čas do naslednjega dogodka, $P(T > t) = e^{-\lambda t}$, brez spomina.
- Normalna $N(\mu, \sigma)$: zvonasta krivulja; standardiziraj $z = \frac{x-\mu}{\sigma}$ in beri $\Phi(z)$.

## Drugače: Na sliki

Nariši stolpčni diagram za $\mathrm{Bin}(7; 0{,}3)$:

| $k$ | $P(X = k)$ | stolpec |
|---|---|---|
| 0 | 0,082 | ▇▇ |
| 1 | 0,247 | ▇▇▇▇▇▇ |
| 2 | 0,318 | ▇▇▇▇▇▇▇▇ |
| 3 | 0,227 | ▇▇▇▇▇▇ |
| 4 | 0,097 | ▇▇ |
| 5–7 | 0,029 | ▇ |

Višine stolpcev se seštejejo v $1$. Pri zvezni porazdelitvi si predstavljaj, da stolpce zožiš in jih je neskončno: dobiš gladko krivuljo, gostoto. Eksponentna gostota pada od največje vrednosti pri $t = 0$ kot smučarska skakalnica; normalna je zvon s vrhom pri $\mu$; enakomerna je vodoraven pravokotnik nad $[a, b]$ z višino $\frac{1}{b-a}$, da je njegova ploščina $1$.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si eno poletno nevihto in pet vprašanj o njej.

- »Koliko dni od sedmih bo nevihtnih?« Fiksno število dni, vsak da ali ne: **binomska**.
- »Koliko strel bo udarilo v naslednji uri?« Štejemo brez zgornje meje: **Poissonova**.
- »Ob kateri minuti med 14.00 in 15.00 se bo začelo?« Vse minute enako verjetne: **enakomerna**.
- »Koliko minut do naslednje strele?« Čakamo: **eksponentna**.
- »Kolikšna bo najvišja temperatura?« Seštevek mnogih vplivov: **normalna**.

Ko pri nalogi ne veš, katero porazdelitev uporabiti, najprej odgovori: ali štejem ali merim? Če štejem, ali imam fiksno število poskusov?

## Drugače: Bolj natančno

Poissonova kot meja binomske: naj bo $p = \frac{\lambda}{n}$. Tedaj
$$\binom{n}{k}\Big(\frac{\lambda}{n}\Big)^k\Big(1 - \frac{\lambda}{n}\Big)^{n-k}$$
lahko zapišemo kot
$$\frac{\lambda^k}{k!} \cdot \frac{n(n-1)\cdots(n-k+1)}{n^k} \cdot \Big(1 - \frac{\lambda}{n}\Big)^{n-k}.$$
Ko gre $n \to \infty$, gre srednji ulomek proti $1$, zadnji faktor pa proti $e^{-\lambda}$.

Brez spomina eksponentne: $P(T > s + t \mid T > s) = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t}$.

## Preveri se

? Katera trditev o zvezni slučajni spremenljivki $X$ z gostoto $f$ je pravilna?
- $f(a)$ je verjetnost, da je $X = a$.
~ Gostota ni verjetnost; lahko je celo večja od $1$. Verjetnost je ploščina pod $f$.
+ $P(X = a) = 0$ za vsak posamezen $a$.
- Vsota vseh vrednosti $f(x)$ je $1$.
~ Vrednosti je neskončno mnogo in jih ne seštevamo; enaka $1$ je ploščina pod celotnim grafom.
> Nad eno točko je ploščina $0$, zato pozitivno verjetnost dobi le interval.

? Rešitev naloge: »Verjetnost toče je vsak dan $0{,}1$, dnevi so neodvisni. Verjetnost vsaj ene toče v $10$ dneh je $10 \cdot 0{,}1 = 1$.« Kje je napaka?
- Napake ni, saj je $10 \cdot 0{,}1 = 1$.
~ Račun je pravilen, sklep ne: toča bi bila gotova, kar je nesmiselno, saj je lahko vseh $10$ dni brez nje.
- Uporabiti bi morali Poissonovo z $\lambda = 0{,}1$.
~ $\lambda = 0{,}1$ velja za en dan, ne za deset; in imamo fiksno število dni, zato je naravna binomska.
+ Verjetnosti so seštete, čeprav dogodki niso nezdružljivi; pravilno je $1 - 0{,}9^{10} \approx 0{,}65$.
> Toča se lahko zgodi več dni, zato seštevanje šteje nekatere izide večkrat. Komplement: vseh $10$ dni brez toče je $0{,}9^{10}$.

? Na postaji A strela udari v povprečju $2$-krat na uro, na postaji B $4$-krat na uro. Primerjaj verjetnosti, da v naslednjih $30$ minutah ni nobenega udara.
- Na B je verjetnost natanko polovica tiste na A.
~ Linearno sklepanje. Verjetnost $e^{-\lambda t}$ ni sorazmerna z $\lambda$.
+ Na A je $e^{-1} \approx 0{,}37$, na B $e^{-2} \approx 0{,}14$, kar je kvadrat verjetnosti na A.
- Obe sta enaki, saj gre za isti časovni interval.
~ Interval je enak, pogostost udarov pa ne; pri pogostejših udarih je mirno pol ure manj verjetno.
> $P(T > t) = e^{-\lambda t}$: na A $\lambda t = 1$, na B $\lambda t = 2$, in $e^{-2} = (e^{-1})^2$.

? Ploha se začne ob naključnem trenutku med 14.00 in 16.00, enakomerno. Kolikšna je verjetnost, da se začne med 14.30 in 15.15?
- $0{,}75$
~ To je $\frac{45}{60}$: deliš z eno uro, interval pa traja dve uri.
+ $0{,}375$
- $0{,}5$
~ Ta verjetnost bi veljala za interval dolžine ene ure; tu je dolg $45$ minut.
> Pri enakomerni je verjetnost delež dolžine: $\frac{45\,\mathrm{min}}{120\,\mathrm{min}} = 0{,}375$.

? Meteorologinja modelira število dni z nevihto v $30$ junijskih dneh. Vsak dan je nevihten z verjetnostjo $0{,}25$, neodvisno od drugih. Katera porazdelitev je prava?
- Poissonova, ker štejemo dogodke.
~ Poissonova nima zgornje meje; tu je dni natanko $30$ in vsak ima isto verjetnost, kar je binomska.
- Eksponentna, ker gre za čas.
~ Eksponentna meri čas čakanja do dogodka, tu pa štejemo dni.
+ Binomska $\mathrm{Bin}(30; 0{,}25)$.
- Normalna, ker je vreme vsota mnogih vplivov.
~ Normalna je zvezna, število dni pa je celo število od $0$ do $30$.
> Fiksno število neodvisnih poskusov z isto verjetnostjo uspeha je natanko binomska shema.
