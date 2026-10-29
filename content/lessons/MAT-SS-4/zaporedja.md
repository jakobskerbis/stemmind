---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Žogo spustiš z višine $2\,\text{m}$. Vsakič se odbije do polovice prejšnje višine: $2$, $1$, $0{,}5$, $0{,}25$ … metra. Višine so urejene po vrsti: prvi odboj, drugi, tretji. Vsaka je manjša od prejšnje, nobena ni negativna, in čim dlje čakaš, tem bližje so ničli.

Tri opažanja, ki jih nosi ta primer, so natanko teme te lekcije: **monotonost** (višine se zmanjšujejo), **omejenost** (vse so med $0$ in $2$) in **limita** (približujejo se $0$). Zaporedja srečaš povsod, kjer se nekaj ponavlja v korakih: mesečni prihranki, število bakterij po urah, približki števila $\pi$ ali $\sqrt{2}$ na računalu. Limita zaporedja je tudi vrata v višjo matematiko: na njej stojita limita funkcije in odvod.

## Razlaga

**1. Kaj je zaporedje.** **Zaporedje** je funkcija, ki vsakemu naravnemu številu $n = 1, 2, 3, \ldots$ priredi realno število $a_n$. Številu $a_n$ rečemo **$n$-ti člen**, številu $n$ pa **indeks** (mesto člena). Zaporedje zapišemo kot $a_1, a_2, a_3, \ldots$ ali na kratko $(a_n)$.

**2. Kako podamo zaporedje.** Najpogosteje s **splošnim členom**, to je s formulo za $a_n$, na primer $a_n = 2 - \dfrac{1}{n}$. Člen izračunaš tako, da vstaviš indeks: $a_1 = 1$, $a_2 = 1{,}5$, $a_3 \approx 1{,}667$.

Zaporedje lahko podamo tudi **rekurzivno**: povemo prvi člen in pravilo, kako iz prejšnjega člena dobimo naslednjega. Za žogo velja $a_1 = 2$ in $a_{n+1} = \dfrac{a_n}{2}$.

**3. Tabela in graf.** Zaporedje $a_n = 2 - \dfrac{1}{n}$ prikažemo s tabelo:

| $n$ | $a_n$ | razdalja do $2$ |
|---|---|---|
| 1 | $1$ | $1$ |
| 2 | $1{,}5$ | $0{,}5$ |
| 5 | $1{,}8$ | $0{,}2$ |
| 10 | $1{,}9$ | $0{,}1$ |
| 100 | $1{,}99$ | $0{,}01$ |

**Graf zaporedja** so posamezne točke $(n, a_n)$, ne neprekinjena črta, saj $n$ zavzame le naravne vrednosti. Pri našem zaporedju točke od leve proti desni rastejo in se stiskajo k vodoravni premici $y = 2$, ki je nikoli ne dosežejo.

**4. Monotonost.** Zaporedje je **naraščajoče**, če je vsak člen večji ali enak prejšnjemu: $a_{n+1} \ge a_n$ za vsak $n$. Če velja $a_{n+1} > a_n$, je **strogo naraščajoče**. Podobno je **padajoče**, če je $a_{n+1} \le a_n$, in **strogo padajoče**, če je $a_{n+1} < a_n$. Zaporedje, ki je naraščajoče ali padajoče, je **monotono**.

Monotonost preverimo z razliko dveh zaporednih členov. Za $a_n = 2 - \dfrac{1}{n}$:

$$a_{n+1} - a_n = \frac{1}{n} - \frac{1}{n+1} = \frac{1}{n(n+1)} > 0,$$

zato je zaporedje strogo naraščajoče. Pri zaporedju s samimi pozitivnimi členi lahko namesto razlike pogledamo količnik $\dfrac{a_{n+1}}{a_n}$ in ga primerjamo z $1$.

**5. Omejenost.** Zaporedje je **navzgor omejeno**, če obstaja število $M$, da je $a_n \le M$ za vsak $n$. Takemu $M$ rečemo **zgornja meja**. Zaporedje je **navzdol omejeno**, če obstaja **spodnja meja** $m$, da je $a_n \ge m$ za vsak $n$. Zaporedje, ki je omejeno navzgor in navzdol, je **omejeno**: vsi njegovi členi ležijo v pasu med $m$ in $M$. Pri našem zaporedju velja $1 \le a_n < 2$.

:::premisli
Ali obstaja člen zaporedja $a_n = 2 - \dfrac{1}{n}$, ki je enak $2$? Zakaj?
---
Ne. Ulomek $\dfrac{1}{n}$ je za vsak naravni $n$ pozitiven, zato je $a_n$ vedno strogo manjši od $2$. Število $2$ je zgornja meja, a ga noben člen ne doseže.
:::

**6. Okolica.** Za opis limite potrebujemo pojem okolice. **Okolica** števila $L$ s polmerom $\varepsilon > 0$ je odprti interval $(L - \varepsilon, L + \varepsilon)$: vsa števila, ki so od $L$ oddaljena manj kot $\varepsilon$. Grška črka $\varepsilon$ (epsilon) pomeni majhno pozitivno število.

**7. Limita.** Število $L$ je **limita** zaporedja $(a_n)$, če v *vsaki* okolici števila $L$ ležijo vsi členi od nekega indeksa naprej. Drugače povedano: zunaj poljubne okolice števila $L$ je le končno mnogo členov. Pišemo

$$\lim_{n \to \infty} a_n = L.$$

Zaporedje, ki ima limito, je **konvergentno**; zaporedje brez limite je **divergentno**. Zaporedje $a_n = (-1)^n$, ki skače med $-1$ in $1$, je divergentno.

:::premisli
Koliko členov zaporedja $a_n = 2 - \dfrac{1}{n}$ leži zunaj okolice števila $2$ s polmerom $\varepsilon = 0{,}01$? Napovej, preden pogledaš.
---
Natanko $100$. Razdalja do $2$ je $\dfrac{1}{n}$, ta je manjša od $0{,}01$ šele pri $n > 100$. Členi $a_1, \ldots, a_{100}$ so zunaj okolice (člen $a_{100} = 1{,}99$ je ravno na robu, ki ne spada v odprti interval), vsi od $a_{101}$ naprej pa znotraj.
:::

V simulaciji spodaj (»Zaporedja: monotonost, omejenost, limita«) si oglej graf zaporedja, ki ima limito. Naloga: sledi točkam od leve proti desni in poišči indeks, od katerega naprej vse točke ostanejo v ozkem pasu okrog premice $y = L$. Opazi, da pri ožjem pasu ta indeks pride kasneje, a vedno obstaja.

**8. Dve pomembni zvezi.**

- Vsako konvergentno zaporedje je omejeno. Obratno ne velja: $(-1)^n$ je omejeno, pa ni konvergentno.
- Vsako **monotono in omejeno** zaporedje je konvergentno. Višine žoge padajo in so navzdol omejene z $0$, zato imajo limito.

**9. Računanje limit.** Uporabljamo znane limite, na primer $\lim\limits_{n \to \infty} \dfrac{1}{n} = 0$ in $\lim\limits_{n \to \infty} c = c$ za konstanto $c$. Za konvergentni zaporedji velja: limita vsote je vsota limit, limita produkta je produkt limit, limita količnika je količnik limit (če limita imenovalca ni $0$). Pri ulomku, v katerem števec in imenovalec rasteta čez vse meje, števec in imenovalec delimo z najvišjo potenco $n$ v imenovalcu.

## Rešeni primeri

### Primer 1 (lažji)

Dano je zaporedje s splošnim členom $a_n = \dfrac{n+2}{2n}$. Zapiši prve štiri člene in ugotovi, ali je zaporedje monotono.

**Podatki:** $a_n = \dfrac{n+2}{2n}$, zanimajo nas členi $a_1$ do $a_4$
**Iščemo:** $a_1, a_2, a_3, a_4$ in monotonost

:::formula
Zaporedje je strogo padajoče, če je $a_{n+1} - a_n < 0$ za vsak $n$.
:::

**Rešitev:**

1. Vstavimo indekse: $a_1 = \dfrac{3}{2}$, $a_2 = 1$, $a_3 = \dfrac{5}{6}$, $a_4 = \dfrac{3}{4}$. Členi se manjšajo, a štirje členi še niso dokaz.
2. Splošni člen preoblikujemo, da bo razlika preprostejša: $a_n = \dfrac{n}{2n} + \dfrac{2}{2n} = \dfrac{1}{2} + \dfrac{1}{n}$.
3. Razlika zaporednih členov: $a_{n+1} - a_n = \dfrac{1}{n+1} - \dfrac{1}{n} = -\dfrac{1}{n(n+1)}$.
4. Imenovalec $n(n+1)$ je pozitiven, zato je razlika za vsak $n$ negativna.
5. Odgovor: prvi štirje členi so $\dfrac{3}{2}$, $1$, $\dfrac{5}{6}$ in $\dfrac{3}{4}$; zaporedje je strogo padajoče.

### Primer 2 (srednji)

Dano je zaporedje $a_n = \dfrac{3n+1}{n+2}$. Izračunaj njegovo limito in ugotovi, od katerega indeksa naprej ležijo vsi členi v okolici limite s polmerom $\varepsilon = 0{,}1$.

**Podatki:** $a_n = \dfrac{3n+1}{n+2}$, $\varepsilon = 0{,}1$
**Iščemo:** limito $L$ in najmanjši indeks, od katerega so vsi členi v okolici

:::formula
$\lim\limits_{n \to \infty} \dfrac{1}{n} = 0$; člen je v okolici, če je $|a_n - L| < \varepsilon$.
:::

**Rešitev:**

1. Števec in imenovalec delimo z $n$, ker je to najvišja potenca v imenovalcu: $a_n = \dfrac{3 + \frac{1}{n}}{1 + \frac{2}{n}}$.
2. Ker gresta $\dfrac{1}{n}$ in $\dfrac{2}{n}$ proti $0$, je $L = \dfrac{3 + 0}{1 + 0} = 3$.
3. Razdalja do limite: $a_n - 3 = \dfrac{3n + 1 - 3(n+2)}{n+2} = \dfrac{-5}{n+2}$, torej $|a_n - 3| = \dfrac{5}{n+2}$.
4. Pogoj $\dfrac{5}{n+2} < 0{,}1$ pomeni $n + 2 > 50$, torej $n > 48$. Ker so vsi izrazi pozitivni, smemo množiti brez obračanja neenačaja.
5. Preverimo mejo: $a_{48} = \dfrac{145}{50} = 2{,}9$ je ravno na robu (ni v odprti okolici), $a_{49} = \dfrac{148}{51} \approx 2{,}902$ pa je že znotraj.
6. Odgovor: limita je $3$; vsi členi od $a_{49}$ naprej ležijo v okolici $(2{,}9;\ 3{,}1)$.

### Primer 3 (težji)

Bolnik vsak dan zjutraj vzame $100\,\text{mg}$ zdravila. Do naslednjega jutra telo izloči polovico zdravila, ki je v telesu. Naj bo $a_n$ količina zdravila v telesu takoj po $n$-tem odmerku. Pokaži, da se količina ustali, in izračunaj, pri kateri vrednosti.

**Podatki:** odmerek $100\,\text{mg}$ na dan, čez dan se izloči polovica, $a_1 = 100\,\text{mg}$
**Iščemo:** rekurzivno pravilo, monotonost, omejenost in limito $L$

:::formula
$a_{n+1} = \dfrac{a_n}{2} + 100$; monotono in omejeno zaporedje je konvergentno; za limito velja $L = \dfrac{L}{2} + 100$.
:::

**Rešitev:**

1. Pravilo: do jutra ostane $\dfrac{a_n}{2}$, nato bolnik doda $100\,\text{mg}$, zato $a_{n+1} = \dfrac{a_n}{2} + 100$.
2. Prvi členi: $100$, $150$, $175$, $187{,}5$, $193{,}75$ (v mg). Rastejo, a vedno počasneje, kar namiguje na limito.
3. Omejenost: če je $a_n < 200$, je $a_{n+1} < \dfrac{200}{2} + 100 = 200$. Ker je $a_1 = 100 < 200$, so po tem sklepu vsi členi manjši od $200$.
4. Monotonost: $a_{n+1} - a_n = 100 - \dfrac{a_n}{2}$, kar je pozitivno, ker je $a_n < 200$. Zaporedje strogo narašča.
5. Zaporedje je naraščajoče in navzgor omejeno, zato je konvergentno. Ker gresta $a_n$ in $a_{n+1}$ proti isti limiti $L$, iz pravila dobimo $L = \dfrac{L}{2} + 100$.
6. Rešimo: $\dfrac{L}{2} = 100$, torej $L = 200$.
7. Odgovor: količina zdravila po odmerku narašča in se ustali pri $200\,\text{mg}$, ki jih nikoli ne preseže.

### Primer 4: zdaj ti

Izračunaj limito zaporedja $a_n = \dfrac{2n^2 - n}{n^2 + 3}$.

**Podatki:** $a_n = \dfrac{2n^2 - n}{n^2 + 3}$
**Iščemo:** $\lim\limits_{n \to \infty} a_n$

:::formula
Števec in imenovalec deli z najvišjo potenco $n$ v imenovalcu; $\lim\limits_{n \to \infty} \dfrac{1}{n} = 0$.
:::

**Rešitev:**

1. Najvišja potenca v imenovalcu je $n^2$, zato z njo delimo števec in imenovalec.
2. Dobimo $a_n = \dfrac{2 - \frac{1}{n}}{1 + \frac{3}{n^2}}$.
3. Zdaj izračunaj limito sam, nato preveri:

:::premisli
Proti čemu gredo $\dfrac{1}{n}$, $\dfrac{3}{n^2}$ in kolikšna je limita?
---
Oba ulomka gresta proti $0$, zato je $\lim\limits_{n \to \infty} a_n = \dfrac{2 - 0}{1 + 0} = 2$.
:::

## Pogoste napake

- **»Limita je število, ki se mu členi približujejo.«** Členi $\dfrac{1}{n}$ so z vsakim korakom bližje tudi številu $-1$, pa $-1$ ni limita. Približevanje ni dovolj: členi morajo priti *poljubno blizu* in tam ostati. Preveri definicijo z okolico: v vsaki okolici morajo biti vsi členi od nekega indeksa naprej.
- **»Zaporedje limite nikoli ne doseže« ali »limita mora biti člen«.** Obe trditvi sta napačni. Zaporedje $\dfrac{1}{n}$ ima limito $0$, ki ni noben člen; konstantno zaporedje $5, 5, 5, \ldots$ pa ima limito $5$, ki je vsak člen. Limita govori o tem, kaj se dogaja daleč v zaporedju, ne o tem, ali je dosežena.
- **»Omejeno zaporedje ima limito.«** Zaporedje $(-1)^n$ je omejeno, a skače med $-1$ in $1$, zato limite nima. Za zanesljiv sklep potrebuješ omejenost *in* monotonost.
- **Monotonost iz prvih nekaj členov.** Pri $a_n = (n-3)^2$ so prvi členi $4, 1, 0$, kar je videti padajoče, nato pa $1, 4, 9$ rastejo. Monotonost dokažeš z razliko $a_{n+1} - a_n$ za *vsak* $n$.
- **»Neskončno deljeno z neskončno je $1$.«** Pri $\dfrac{2n+1}{n+3}$ rasteta števec in imenovalec, a limita je $2$, ne $1$. Najprej deli z najvišjo potenco $n$ v imenovalcu.

## Povzetek

- Zaporedje priredi vsakemu naravnemu $n$ člen $a_n$; podamo ga s splošnim členom ali rekurzivno.
- Strogo naraščajoče: $a_{n+1} > a_n$; strogo padajoče: $a_{n+1} < a_n$ za vsak $n$. Preverimo z razliko $a_{n+1} - a_n$.
- Omejeno: obstajata $m$ in $M$, da je $m \le a_n \le M$ za vsak $n$.
- $\lim\limits_{n \to \infty} a_n = L$: v vsaki okolici $(L - \varepsilon, L + \varepsilon)$ so vsi členi od nekega indeksa naprej.
- Konvergentno zaporedje je omejeno; monotono in omejeno zaporedje je konvergentno.
- $\lim\limits_{n \to \infty} \dfrac{1}{n} = 0$; pri ulomkih deli z najvišjo potenco $n$ v imenovalcu.

## Drugače: Na sliki

Nariši koordinatni sistem: na vodoravno os nanašaš indekse $1, 2, 3, \ldots$, na navpično vrednosti členov. Vsak člen je ena sama pika nad svojim indeksom.

- **Monotono naraščajoče** zaporedje je kot stopnišče, ki gre samo navzgor: vsaka naslednja pika je višje ali enako visoko.
- **Omejeno** zaporedje v celoti leži v vodoravnem pasu med dvema premicama, $y = m$ spodaj in $y = M$ zgoraj; nobena pika ne uide iz pasu.
- **Limita** $L$ je vodoravna premica $y = L$. Okoli nje si nariši ozek pas širine $2\varepsilon$. Če ima zaporedje limito $L$, bodo od neke pike naprej *vse* pike v pasu, ne glede na to, kako ozek pas izbereš. Pred tem je lahko zunaj le končno mnogo pik.
- Pri $(-1)^n$ pike skačejo med dvema višinama; nobenega ozkega pasu ne moreš postaviti tako, da bi bile vse pike od nekod naprej v njem.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si, da s kalkulatorjem iščeš $\sqrt{2}$ po korakih: $1{,}4$, nato $1{,}41$, $1{,}414$, $1{,}4142$ … To je zaporedje približkov. Je naraščajoče, saj vsakič dodaš števko. Je navzgor omejeno, saj noben približek ne preseže $1{,}5$. Zato ima limito, in ta limita je natanko $\sqrt{2}$, ki ga z nobenim končnim decimalnim zapisom ne zapišeš.

Podobno je pri ohlajanju čaja. Če temperaturo merimo vsako minuto, dobimo padajoče zaporedje, ki je navzdol omejeno s temperaturo sobe. Temperatura se sobni bliža in je praktično ne preseže navzdol, zato se zaporedje meritev ustali. Okolica s polmerom $\varepsilon$ je kot natančnost termometra: od neke minute naprej termometer kaže »sobno temperaturo«, pa naj bo še tako natančen.

## Drugače: Korak za korakom s številkami

Vzemimo $a_n = \dfrac{n+1}{n}$ in ga raziščimo s številkami.

1. Členi: $a_1 = 2$, $a_2 = 1{,}5$, $a_3 \approx 1{,}333$, $a_{10} = 1{,}1$, $a_{100} = 1{,}01$, $a_{1000} = 1{,}001$.
2. Monotonost: $a_n = 1 + \dfrac{1}{n}$. Ko $n$ raste, $\dfrac{1}{n}$ pada, zato zaporedje strogo pada.
3. Omejenost: ker je $\dfrac{1}{n}$ med $0$ in $1$, je $1 < a_n \le 2$. Zaporedje je omejeno.
4. Kandidat za limito: številke kažejo proti $1$.
5. Preizkus z okolico $\varepsilon = 0{,}001$: $|a_n - 1| = \dfrac{1}{n} < 0{,}001$ velja za $n > 1000$, torej od $a_{1001}$ naprej.
6. Preizkus z $\varepsilon = 0{,}000001$: velja za $n > 1\,000\,000$. Indeks je ogromen, a obstaja.
7. Ker za vsak $\varepsilon$ najdemo tak indeks, je $\lim\limits_{n \to \infty} a_n = 1$.

## Drugače: Bolj natančno

Definicija limite s simboli: $\lim\limits_{n \to \infty} a_n = L$ natanko tedaj, ko za vsak $\varepsilon > 0$ obstaja tak $n_0 \in \mathbb{N}$, da za vse $n > n_0$ velja $|a_n - L| < \varepsilon$. Vrstni red je pomemben: najprej nasprotnik izbere $\varepsilon$, nato ti poiščeš $n_0$, ki je smeše odvisen od $\varepsilon$.

Limita je ena sama: če bi imelo zaporedje limiti $L_1 \ne L_2$, bi izbrali $\varepsilon$ manjši od polovice njune razdalje. Okolici se ne bi prekrivali, členi od nekod naprej pa bi morali biti v obeh hkrati, kar ni mogoče.

Med vsemi zgornjimi mejami navzgor omejenega zaporedja obstaja najmanjša, **natančna zgornja meja** ali **supremum**. Pri naraščajočem in navzgor omejenem zaporedju je limita prav supremum. Število $a$ je **stekališče** zaporedja, če je v vsaki njegovi okolici neskončno mnogo členov. Zaporedje $(-1)^n$ ima stekališči $-1$ in $1$, limite pa ne. Konvergentno zaporedje ima natanko eno stekališče, svojo limito.

## Preveri se

? Kdaj je zaporedje $(a_n)$ navzgor omejeno?
- Ko je njegov prvi člen največji.
~ To velja za padajoča zaporedja, ni pa definicija. Omejeno je lahko tudi naraščajoče zaporedje, na primer $2 - \frac{1}{n}$.
+ Ko obstaja $M$, da je $a_n \le M$ za vsak $n$.
- Ko ima limito, ki je enaka nekemu členu.
~ Doseženost limite ni povezana z omejenostjo. Omejenost pomeni, da noben člen ne preseže neke meje $M$.
> Zgornja meja $M$ mora biti nad vsemi členi hkrati; doseči je ni treba.

? Zaporedje $a_n = (-1)^n$ je omejeno. Ali je konvergentno?
- Da, ker je vsako omejeno zaporedje konvergentno.
~ Omejenost ni dovolj. Sklep velja le za zaporedje, ki je omejeno in monotono.
- Da, limita je $0$, ker je to sredina med $-1$ in $1$.
~ Noben člen ni blizu $0$: vsi so oddaljeni za $1$. Limita ni povprečje členov.
+ Ne, ker skače med $-1$ in $1$.
> Okoli nobenega števila ne moreš postaviti ozke okolice, v kateri bi bili vsi členi od nekod naprej, zato je $(-1)^n$ divergentno.

? Katera trditev o zaporedju $a_n = \dfrac{1}{n}$ je pravilna?
- Limita je tudi $-1$, ker se ji členi ves čas približujejo.
~ Približevanje ni dovolj: členi ne pridejo poljubno blizu $-1$, vedno so oddaljeni več kot $1$.
+ Limita je $0$, čeprav je noben člen ne doseže.
- Limite nima, ker noben člen ni enak $0$.
~ Limite ni treba doseči. Dovolj je, da so od nekega indeksa naprej vsi členi poljubno blizu $0$.
> Za vsak $\varepsilon > 0$ so vsi členi z $n > \frac{1}{\varepsilon}$ v okolici $0$, zato je $\lim \frac{1}{n} = 0$.

? Kolikšna je $\lim\limits_{n \to \infty} \dfrac{3n - 1}{n + 4}$?
- $1$
~ Števec in imenovalec res rasteta, a »neskončno deljeno z neskončno« ni $1$. Deli z $n$.
- $-\dfrac{1}{4}$
~ To je vrednost pri $n = 0$, limita pa opisuje zelo velike $n$.
+ $3$
> Delimo z $n$: $\dfrac{3 - \frac{1}{n}}{1 + \frac{4}{n}} \to \dfrac{3}{1} = 3$.

? Prvi členi zaporedja $a_n = (n-3)^2$ so $4, 1, 0$. Kakšno je zaporedje glede monotonosti?
- Padajoče, ker prvi trije členi padajo.
~ Prvi členi niso dokaz. Že $a_4 = 1$ in $a_5 = 4$ sta večja od $a_3 = 0$.
- Naraščajoče, ker so členi kvadrati.
~ Kvadrati niso nujno vedno večji: $a_2 = 1$ je manjši od $a_1 = 4$.
+ Ni monotono.
> Do $a_3$ pada, od $a_3$ naprej narašča, zato ni ne naraščajoče ne padajoče.
