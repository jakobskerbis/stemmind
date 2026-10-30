---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Geometrijo poznaš že iz osnovne šole: narisal si premice, meril kote s kotomerom in prepoznal vzporedne črte na zvezku. V srednji šoli pa geometrijo začnemo graditi bolj natančno. Vsako trditev utemeljimo z že znanimi dejstvi, zato se moramo najprej natanko dogovoriti, kaj pomenijo osnovni pojmi: točka, premica, daljica, kot, vzporednost.

Ti pojmi so temelj vsega, kar sledi: pri trikotnikih, štirikotnikih in krogu bomo ves čas računali s koti in uporabljali vzporednost. Uporabljajo jih arhitekti in gradbeniki (pravi kot v steni, naklon strehe), kartografi, inženirji, programerji pri računalniški grafiki in tudi ti pri vsakdanjih rečeh, na primer pri branju ure ali načrtovanju poti. V tej lekciji se naučiš razlikovati vrste kotov, računati z njimi (tudi v stopinjah in minutah) in pravilno uporabljati lastnosti kotov ob vzporednicah.

## Razlaga

**1. Točka, premica, ravnina.** To so **osnovni (neopredeljeni) pojmi**: ne definiramo jih, ampak jih opišemo z lastnostmi. Točko označimo z veliko črko ($A$, $B$, $C$), premico z malo črko ($p$, $q$) ali z dvema njenima točkama ($AB$). Premica je ravna in neomejena na obeh straneh. Velja:

- skozi dve različni točki gre natanko ena premica,
- dve različni premici imata največ eno skupno točko.

Točke, ki ležijo na isti premici, imenujemo **kolinearne**.

**2. Poltrak in daljica.** Točka $A$ na premici jo razdeli na dva **poltraka** z izhodiščem $A$. Del premice med točkama $A$ in $B$ (z obema krajiščema) je **daljica** $AB$. Njeno dolžino označimo $|AB|$, razdalja med točkama $A$ in $B$ je prav ta dolžina. **Razpolovišče** daljice je točka na njej, ki je enako oddaljena od obeh krajišč.

**3. Medsebojna lega dveh premic v ravnini.**

| Lega | Opis | Zapis |
|---|---|---|
| sekata se | imata natanko eno skupno točko | |
| pravokotni sta | sekata se pod pravim kotom | $p \perp q$ |
| vzporedni sta | ležita v isti ravnini in nimata skupnih točk | $p \parallel q$ |
| sovpadata | imata vse točke skupne (je ista premica) | $p = q$ |

**Aksiom o vzporednici:** skozi točko, ki ne leži na dani premici, poteka natanko ena vzporednica k tej premici. Vzporednost je zamenljiva: če je $p \parallel q$, je tudi $q \parallel p$. Če sta dve premici vzporedni tretji, sta vzporedni tudi med seboj.

**4. Razdalja točke od premice.** Najkrajša pot od točke $T$ do premice $p$ je po pravokotnici na $p$ skozi $T$. Dolžini te daljice rečemo **razdalja točke od premice**. Vsaka točka premice $q \parallel p$ je od $p$ enako oddaljena, ta razdalja je **razdalja med vzporednicama**.

**5. Simetrali.** **Simetrala daljice** je premica, ki je pravokotna na daljico in gre skozi njeno razpolovišče. Vsaka njena točka je enako oddaljena od obeh krajišč. **Simetrala kota** je poltrak z izhodiščem v vrhu kota, ki kot razpolovi.

**6. Kot.** **Kot** je del ravnine, ki ga omejujeta dva poltraka s skupnim izhodiščem. Poltraka sta **kraka** kota, skupna točka je **vrh**. Kote označimo z grškimi črkami $\alpha, \beta, \gamma$ ali s tremi točkami, npr. $\angle AVB$ (vrh $V$ je v sredini). Kote merimo v **stopinjah**, polni kot meri $360^\circ$.

| Vrsta kota | Velikost |
|---|---|
| ničelni | $0^\circ$ |
| ostri | med $0^\circ$ in $90^\circ$ |
| pravi | $90^\circ$ |
| topi | med $90^\circ$ in $180^\circ$ |
| iztegnjeni | $180^\circ$ |
| izbočeni | med $180^\circ$ in $360^\circ$ |
| polni | $360^\circ$ |

**7. Stopinje, minute, sekunde.** Stopinjo delimo na $60$ kotnih minut, minuto na $60$ kotnih sekund: $1^\circ = 60'$, $1' = 60''$. To ni decimalni zapis: kot $37^\circ 42'$ je $37^\circ$ in še $42$ minut, torej $37{,}7^\circ$, ne $37{,}42^\circ$. Pri seštevanju minute, ki preseže $60$, prenesemo v stopinje: $48^\circ 35' + 27^\circ 40' = 75^\circ 75' = 76^\circ 15'$. Pri odštevanju si po potrebi »izposodimo« stopinjo: $90^\circ = 89^\circ 60'$.

**8. Pari kotov.**

- **Sovršna kota** nastaneta ob presečišču dveh premic in ležita nasproti. Sta *enaka*.
- **Sokota** (sosednja kota na premici) imata skupen krak, druga dva kraka pa tvorita premico. Njuna vsota je $180^\circ$.
- **Komplementarna (dopolnilna) kota** imata vsoto $90^\circ$: $\alpha + \beta = 90^\circ$.
- **Suplementarna kota** imata vsoto $180^\circ$ (sokota sta torej suplementarna).

Če se dve premici sekata in je en kot $\alpha$, sta dva kota enaka $\alpha$, druga dva pa $180^\circ - \alpha$.

**9. Koti ob prečnici vzporednic.** Premica $t$, ki seka vzporednici $p$ in $q$, je njuna **prečnica**. Nastane osem kotov, ki so samo dveh velikosti. Pari:

| Par kotov | Lega | Odnos pri $p \parallel q$ |
|---|---|---|
| **istoležna** | na isti strani prečnice, oba nad ali oba pod svojo premico | enaka |
| **izmenična** | med vzporednicama, na nasprotnih straneh prečnice | enaka |
| **notranja na isti strani prečnice** | med vzporednicama, na isti strani prečnice | vsota $180^\circ$ |

Velja tudi **obrat**: če sta istoležna ali izmenična kota enaka (ali kota na isti strani prečnice suplementarna), sta premici vzporedni. Pazi: ta pravila veljajo *samo*, če sta premici vzporedni.

## Rešeni primeri

### Primer 1 (lažji)

Dve premici se sekata in tvorita štiri kote. Eden od njih meri $54^\circ$. Koliko merijo ostali trije koti?

**Podatki:** en kot je $\alpha = 54^\circ$; premici se sekata

**Iščemo:** velikosti ostalih treh kotov

:::formula
Sovršna kota sta enaka. Sokota imata vsoto $180^\circ$: $\beta = 180^\circ - \alpha$.
:::

**Rešitev:**

1. Sovršni kot kota $\alpha$ je enak: $\gamma = \alpha = 54^\circ$.
2. Sokot kota $\alpha$: $\beta = 180^\circ - 54^\circ = 126^\circ$.
3. Četrti kot je sovršen kotu $\beta$: $\delta = \beta = 126^\circ$.
4. Preizkus: vsota vseh štirih kotov je $54^\circ + 126^\circ + 54^\circ + 126^\circ = 360^\circ$, kot mora biti okoli točke.
5. Odgovor: ostali trije koti merijo $54^\circ$, $126^\circ$ in $126^\circ$.

### Primer 2 (srednji)

Kot $\alpha$ meri $37^\circ 42'$. Izračunaj kot, ki ga $\alpha$ dopolni do pravega kota (komplementarni kot), in sokot kota $\alpha$.

**Podatki:** $\alpha = 37^\circ 42'$

**Iščemo:** komplementarni kot $\beta$ in sokot $\gamma$ kota $\alpha$

:::formula
$\beta = 90^\circ - \alpha$ in $\gamma = 180^\circ - \alpha$, pri čemer $1^\circ = 60'$.
:::

**Rešitev:**

1. Pravi kot zapišemo v minutah: $90^\circ = 89^\circ 60'$.
2. $\beta = 89^\circ 60' - 37^\circ 42' = 52^\circ 18'$.
3. Iztegnjeni kot: $180^\circ = 179^\circ 60'$.
4. $\gamma = 179^\circ 60' - 37^\circ 42' = 142^\circ 18'$.
5. Preizkus: $37^\circ 42' + 52^\circ 18' = 89^\circ 60' = 90^\circ$ in $37^\circ 42' + 142^\circ 18' = 179^\circ 60' = 180^\circ$.
6. Odgovor: komplementarni kot meri $52^\circ 18'$, sokot pa $142^\circ 18'$.

### Primer 3 (težji)

Premici $p$ in $q$ sta vzporedni, premica $t$ ju seka. Kota $\alpha$ in $\beta$ sta notranja kota na isti strani prečnice $t$ ($\alpha$ pri premici $p$, $\beta$ pri premici $q$). Kot $\alpha$ je za $40^\circ$ večji od kota $\beta$. Izračunaj $\alpha$ in $\beta$ ter kot $\gamma$, ki je izmenični kot kota $\beta$.

**Podatki:** $p \parallel q$, prečnica $t$; $\alpha$ in $\beta$ notranja kota na isti strani prečnice; $\alpha = \beta + 40^\circ$; $\gamma$ je izmenični kot kota $\beta$

**Iščemo:** $\alpha$, $\beta$ in $\gamma$

:::formula
Notranja kota na isti strani prečnice vzporednic: $\alpha + \beta = 180^\circ$. Izmenična kota vzporednic sta enaka.
:::

**Rešitev:**

1. Iz vzporednosti sledi $\alpha + \beta = 180^\circ$. Iz besedila je $\alpha - \beta = 40^\circ$. To je sistem dveh linearnih enačb.
2. Enačbi seštejemo: $2\alpha = 220^\circ$, torej $\alpha = 110^\circ$.
3. $\beta = 180^\circ - 110^\circ = 70^\circ$.
4. Izmenična kota sta enaka, zato je $\gamma = \beta = 70^\circ$.
5. Preizkus: $110^\circ + 70^\circ = 180^\circ$ in $110^\circ - 70^\circ = 40^\circ$. Kot $\gamma$ leži pri $p$ in skupaj z $\alpha$ tvori sokota: $110^\circ + 70^\circ = 180^\circ$.
6. Odgovor: $\alpha = 110^\circ$, $\beta = 70^\circ$ in $\gamma = 70^\circ$.

## Pogoste napake

- **Zamenjaš komplementarna in suplementarna kota.** Komplementarna imata vsoto $90^\circ$, suplementarna $180^\circ$. Razlog: obe besedi zveneta podobno. Pomagaj si z abecedo: **K** je pred **S**, tako kot $90^\circ$ pred $180^\circ$. Pravilno: najprej preveri, ali iščeš dopolnilo do $90^\circ$ ali do $180^\circ$.
- **Minute obravnavaš kot decimalke.** Če zapišeš $37^\circ 42' = 37{,}42^\circ$, narediš napako, saj ima stopinja $60$ minut. Pravilno: $42' = \dfrac{42}{60}^\circ = 0{,}7^\circ$, torej $37^\circ 42' = 37{,}7^\circ$. Pri računanju z minutami po potrebi prenesi $60'$ v $1^\circ$.
- **Uporabiš lastnosti kotov na prečnici, čeprav premici nista vzporedni.** Izmenična in istoležna kota sta enaka le pri vzporednicah. Pravilno: najprej preveri, ali je v nalogi podano $p \parallel q$ ali se vzporednost da utemeljiti.
- **Sovršna kota zamenjaš s sokotoma.** Sovršna kota sta enaka, sokota imata vsoto $180^\circ$. Razlog: oboje je kot ob istem presečišču. Pravilno: sovršna ležita nasproti (skupen je le vrh), sokota se dotikata z enim krakom.
- **Daljico imaš za premico.** Premica je neomejena, daljica ima krajišči in dolžino. Pravilno: dolžino meriš le pri daljici, $|AB|$; premica $AB$ nima dolžine.

## Povzetek

- Skozi dve različni točki gre natanko ena premica; skozi točko zunaj premice gre natanko ena vzporednica.
- Premici v ravnini: sekata se, sta vzporedni ($p \parallel q$) ali sovpadata. Pravokotnost: $p \perp q$.
- Razdalja točke od premice je dolžina pravokotnice. Simetrala daljice je pravokotna na daljico skozi razpolovišče.
- Vrste kotov: ostri $<90^\circ$, pravi $90^\circ$, topi $90^\circ$ do $180^\circ$, iztegnjeni $180^\circ$, polni $360^\circ$. Veljata $1^\circ = 60'$ in $1' = 60''$.
- Sovršna kota sta enaka. Sokota: $\alpha + \beta = 180^\circ$. Komplementarna kota: $\alpha + \beta = 90^\circ$.
- Pri $p \parallel q$ in prečnici: istoležna in izmenična kota sta enaka, notranja kota na isti strani imata vsoto $180^\circ$.
- Veljajo tudi obrati teh pravil.

## Drugače: Na sliki

Predstavljaj si list, na katerem sta narisani dve vodoravni vzporedni črti, $p$ zgoraj in $q$ spodaj, ter poševna prečnica $t$, ki ju seka. Okoli vsakega presečišča so štirje koti. Oštevilčimo jih. Pri premici $p$: kot $1$ je nad $p$ desno od $t$, kot $2$ pod $p$ desno, kot $3$ pod $p$ levo, kot $4$ nad $p$ levo. Pri $q$ enako: koti $5, 6, 7, 8$ v istem vrstnem redu.

Naj bo kot $1$ enak $65^\circ$. Potem:

| Kot | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|
| Velikost | $65^\circ$ | $115^\circ$ | $65^\circ$ | $115^\circ$ | $65^\circ$ | $115^\circ$ | $65^\circ$ | $115^\circ$ |

Kota $1$ in $3$ sta sovršna, kota $1$ in $2$ sokota. Kota $1$ in $5$ sta istoležna (oba nad svojo premico, desno). Kota $3$ in $5$ sta izmenična (med premicama, na nasprotnih straneh). Kota $2$ in $5$ sta notranja na isti strani prečnice: $115^\circ + 65^\circ = 180^\circ$. Če premici ne bi bili vzporedni, bi bili koti $1$ in $5$ različni, zato lahko z merjenjem kotov preveriš vzporednost.

## Drugače: Iz vsakdanjega življenja

Ura je dober kotomer. Kazalca se vrtita okoli iste točke, zato med njima nastane kot. Minutni kazalec opravi poln krog ($360^\circ$) v $60$ minutah, torej se zasuče za $6^\circ$ na minuto. Urni kazalec opravi $30^\circ$ v eni uri, torej $0{,}5^\circ$ na minuto.

Ob štirih je minutni kazalec na $12$, urni na $4$: kot je $4 \cdot 30^\circ = 120^\circ$, topi kot. Ob devetih je kot $90^\circ$, pravi, ob šestih $180^\circ$, iztegnjeni. Ob pol štirih (3:30) je minutni kazalec na $180^\circ$, urni pa na $3 \cdot 30^\circ + 15^\circ = 105^\circ$. Kot med njima je $180^\circ - 105^\circ = 75^\circ$, ostri kot.

Še več geometrije najdeš okoli sebe: stene sobe se stikajo pod pravimi koti, tračnice so vzporedne, na križišču se sekata cesti, pasovi na prehodu za pešce so vzporedni, vogal papirja je pravi kot.

## Drugače: Korak za korakom s številkami

Naloga: seštej kota $48^\circ 35'$ in $27^\circ 40'$, nato odštej $48^\circ 35'$ od pravega kota.

Seštevanje:

1. Seštejemo minute: $35' + 40' = 75'$.
2. Seštejemo stopinje: $48^\circ + 27^\circ = 75^\circ$.
3. Skupaj $75^\circ 75'$. Ker je $75' = 60' + 15' = 1^\circ 15'$, je vsota $75^\circ + 1^\circ + 15' = 76^\circ 15'$.

Odštevanje:

1. Pravi kot $90^\circ$ zapišemo kot $89^\circ 60'$.
2. Minute: $60' - 35' = 25'$.
3. Stopinje: $89^\circ - 48^\circ = 41^\circ$.
4. Rezultat: $41^\circ 25'$.
5. Preizkus: $48^\circ 35' + 41^\circ 25' = 89^\circ 60' = 90^\circ$.

Pretvorba v decimalni zapis: $25' = \dfrac{25}{60}^\circ \approx 0{,}417^\circ$. Torej $41^\circ 25' \approx 41{,}417^\circ$. V obratni smeri: $0{,}4^\circ \cdot 60 = 24'$, zato je $41{,}4^\circ = 41^\circ 24'$.

## Drugače: Bolj natančno

V geometriji velja, da trditve dokazujemo iz že znanih. Poglejmo, zakaj sta sovršna kota enaka. Naj se premici sekata in naj bodo koti po vrsti $\alpha, \beta, \gamma, \delta$. Ker je $\alpha$ sokot kota $\beta$, je $\alpha + \beta = 180^\circ$. Ker je $\gamma$ sokot kota $\beta$, je $\gamma + \beta = 180^\circ$. Odštejemo: $\alpha = \gamma$. Torej enakost sovršnih kotov ne potrebuje nove predpostavke, izhaja iz dejstva, da je iztegnjeni kot enak $180^\circ$.

Lastnosti kotov ob prečnici izhajajo iz **aksioma o vzporednici**, ki ga je v nekoliko drugačni obliki zapisal že Evklid. V ravnini, v kateri velja, so istoležni koti ob vzporednicah enaki. Iz tega z uporabo sovršnih kotov izpeljemo izmenične in vsote notranjih kotov.

Zanimivo je tudi štetje. $n$ točk, od katerih nobene tri niso kolinearne, določa $\dfrac{n(n-1)}{2}$ premic: za $5$ točk je to $\dfrac{5 \cdot 4}{2} = 10$ premic. Podobno $n$ premic, med katerimi nobeni dve nista vzporedni in nobene tri ne gredo skozi isto točko, ima $\dfrac{n(n-1)}{2}$ presečišč, za $4$ premice $6$.

Poleg stopinj kote merimo tudi v **radianih**, ki jih boš spoznal pozneje: $180^\circ = \pi\,\text{rad}$, torej je $1\,\text{rad} \approx 57{,}3^\circ$.

## Preveri se

? Kot meri $64^\circ$. Koliko meri njegov komplementarni kot?
- $116^\circ$
+ $26^\circ$
- $154^\circ$
> Komplementarna kota imata vsoto $90^\circ$: $90^\circ - 64^\circ = 26^\circ$. Število $116^\circ = 180^\circ - 64^\circ$ je suplementarni kot.

? Dve premici se sekata. Eden od kotov meri $70^\circ$. Koliko meri njegov sokot?
- $20^\circ$
- $70^\circ$
+ $110^\circ$
> Sokota imata vsoto $180^\circ$, zato je $180^\circ - 70^\circ = 110^\circ$. Sovršni kot bi meril $70^\circ$.

? Premici $p$ in $q$ sta vzporedni, prečnica ju seka. Eden od izmeničnih kotov meri $55^\circ$. Koliko meri drugi izmenični kot?
- $35^\circ$
+ $55^\circ$
- $125^\circ$
> Izmenična kota ob vzporednicah sta enaka. Kot $125^\circ$ bi bil sokot, ne izmenični kot.

? Koliko je $2^\circ 18' + 1^\circ 52'$?
- $3^\circ 10'$
+ $4^\circ 10'$
- $4^\circ 70'$
> Minute: $18' + 52' = 70' = 1^\circ 10'$. Stopinje: $2^\circ + 1^\circ + 1^\circ = 4^\circ$. Rezultat je $4^\circ 10'$.

:::simboli
\alpha | dani kot | | |
\beta | sokot ali komplementarni kot kota α | \beta = 180^\circ - \alpha | | komplementarni kot: β = 90° − α
\gamma | sovršni kot ali sokot kota α | | | sovršni kot je enak α, sokot 180° − α
:::
