---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Gibanje opazuješ vsak dan: avtomobil na cesti, kolesar, pešec, vlak. Že veš, da se telesa gibljejo hitreje ali počasneje in da se pot meri v metrih ali kilometrih, čas pa v sekundah, minutah ali urah. Iz matematike znaš tudi računati z razmerji in brati preproste grafe.

V tej lekciji zapišemo gibanje s fizikalnimi količinami. Naučil se boš izračunati, **kako hitro** se telo giblje, **kako daleč** pride v določenem času in **koliko časa** potrebuje za neko pot. To potrebuješ, ko načrtuješ pot (kdaj pridem na cilj?), ko razumeš prometne predpise ali ko prebereš podatke z grafa.

## Razlaga

**1. Pot in čas.** **Pot** ($s$) je dolžina, ki jo telo prepotuje. Enota je meter ($\mathrm{m}$), pri daljših poteh kilometer ($\mathrm{km}$). **Čas** ($t$) je trajanje gibanja. Enota je sekunda ($\mathrm{s}$), tudi minuta ($\mathrm{min}$) ali ura ($\mathrm{h}$).

**2. Enakomerno gibanje.** Telo se giblje **enakomerno**, kadar v enakih časovnih razmikih prepotuje enake poti. Njegova hitrost se ne spreminja. V tej lekciji obravnavamo gibanje po ravni črti (premo enakomerno gibanje).

**3. Hitrost.** **Hitrost** ($v$) pove, kolikšno pot telo prepotuje v enoti časa:

$$v = \frac{s}{t}$$

Enota je $\dfrac{\mathrm{m}}{\mathrm{s}}$ ali $\dfrac{\mathrm{km}}{\mathrm{h}}$. Hitrost $5\,\dfrac{\mathrm{m}}{\mathrm{s}}$ pomeni, da telo vsako sekundo prepotuje $5\,\mathrm{m}$.

**4. Preoblikovanje formule.** Iz $v = \dfrac{s}{t}$ dobimo:

$$s = v \cdot t \qquad\qquad t = \frac{s}{v}$$

**5. Pretvarjanje enot.** Velja:

$$1\,\frac{\mathrm{m}}{\mathrm{s}} = 3{,}6\,\frac{\mathrm{km}}{\mathrm{h}}$$

Zakaj? $1\,\mathrm{m} = 0{,}001\,\mathrm{km}$ in $1\,\mathrm{s} = \dfrac{1}{3600}\,\mathrm{h}$, zato je $1\,\dfrac{\mathrm{m}}{\mathrm{s}} = 0{,}001 \cdot 3600\,\dfrac{\mathrm{km}}{\mathrm{h}} = 3{,}6\,\dfrac{\mathrm{km}}{\mathrm{h}}$. Pri pretvorbi iz $\dfrac{\mathrm{m}}{\mathrm{s}}$ v $\dfrac{\mathrm{km}}{\mathrm{h}}$ **množimo** s $3{,}6$, v obratni smeri **delimo** s $3{,}6$.

**6. Graf poti $s(t)$.** Na vodoravno os nanesemo čas, na navpično pot. Pri enakomernem gibanju je graf **premica skozi izhodišče** (če ob času $0$ začnemo pri poti $0$). Večja ko je hitrost, bolj strma je premica. Strmina premice je enaka hitrosti.

**7. Graf hitrosti $v(t)$.** Na vodoravno os nanesemo čas, na navpično hitrost. Ker se hitrost ne spreminja, je graf **vodoravna črta**. Ploščina pod to črto (pravokotnik z višino $v$ in širino $t$) je enaka prepotovani poti: $v \cdot t = s$.

## Rešeni primeri

### Primer 1: hitrost

Kolesar v $20\,\mathrm{s}$ prevozi $100\,\mathrm{m}$. Kolikšna je njegova hitrost?

**Podatki:** $t = 20\,\mathrm{s}$, $s = 100\,\mathrm{m}$
**Iščemo:** hitrost $v$

:::formula
$v = \dfrac{s}{t}$; za pretvorbo velja $1\,\dfrac{\mathrm{m}}{\mathrm{s}} = 3{,}6\,\dfrac{\mathrm{km}}{\mathrm{h}}$
:::

**Rešitev:**

1. Iščemo hitrost, zato uporabimo $v = \dfrac{s}{t}$.
2. Vstavimo: $v = \dfrac{100\,\mathrm{m}}{20\,\mathrm{s}} = 5\,\dfrac{\mathrm{m}}{\mathrm{s}}$.
3. Pretvorimo v $\dfrac{\mathrm{km}}{\mathrm{h}}$: $5 \cdot 3{,}6 = 18\,\dfrac{\mathrm{km}}{\mathrm{h}}$.
4. Smiselnost: $18\,\dfrac{\mathrm{km}}{\mathrm{h}}$ je običajna hitrost kolesarja.

### Primer 2: pot in čas

Avtomobil se enakomerno giblje s hitrostjo $90\,\dfrac{\mathrm{km}}{\mathrm{h}}$.

a) Kolikšno pot prevozi v $2{,}5\,\mathrm{h}$?
b) Koliko časa potrebuje za $45\,\mathrm{km}$?

**Podatki:** $v = 90\,\dfrac{\mathrm{km}}{\mathrm{h}}$; a) $t = 2{,}5\,\mathrm{h}$; b) $s = 45\,\mathrm{km}$
**Iščemo:** a) pot $s$, b) čas $t$

:::formula
a) $s = v \cdot t$, b) $t = \dfrac{s}{v}$
:::

**Rešitev:**

**a)**
1. Iščemo pot: $s = v \cdot t$.
2. $s = 90\,\dfrac{\mathrm{km}}{\mathrm{h}} \cdot 2{,}5\,\mathrm{h} = 225\,\mathrm{km}$.
3. Enota $\mathrm{h}$ se pokrajša, ostane $\mathrm{km}$, kar je prava enota za pot.

**b)**
1. Iščemo čas: $t = \dfrac{s}{v}$.
2. $t = \dfrac{45\,\mathrm{km}}{90\,\frac{\mathrm{km}}{\mathrm{h}}} = 0{,}5\,\mathrm{h}$.
3. To je $30\,\mathrm{min}$. Preverimo: v pol ure pri $90\,\dfrac{\mathrm{km}}{\mathrm{h}}$ prevozimo polovico od $90\,\mathrm{km}$, torej $45\,\mathrm{km}$. ✓

### Primer 3: dve telesi in grafa

Pešec hodi enakomerno in je po $10\,\mathrm{s}$ prehodil $15\,\mathrm{m}$. Kolesar začne ob istem času na istem mestu in vozi v isti smeri s hitrostjo $5\,\dfrac{\mathrm{m}}{\mathrm{s}}$. Izračunaj hitrost pešca, primerjaj njuni hitrosti in poti po $10\,\mathrm{s}$, opiši grafa $s(t)$ in $v(t)$ ter izračunaj, kako daleč sta narazen po $10\,\mathrm{s}$.

**Podatki:** pešec: $t = 10\,\mathrm{s}$, $s_1 = 15\,\mathrm{m}$; kolesar: $v_2 = 5\,\dfrac{\mathrm{m}}{\mathrm{s}}$; oba začneta ob istem času na istem mestu in se gibljeta v isti smeri
**Iščemo:** hitrost pešca $v_1$, primerjavo hitrosti in poti po $10\,\mathrm{s}$, grafa $s(t)$ in $v(t)$ ter razdaljo med njima

:::formula
$v = \dfrac{s}{t}$ in $s = v \cdot t$
:::

**Rešitev:**

1. **Hitrost pešca:** $v_1 = \dfrac{15\,\mathrm{m}}{10\,\mathrm{s}} = 1{,}5\,\dfrac{\mathrm{m}}{\mathrm{s}}$.
2. **Primerjava:** $5\,\dfrac{\mathrm{m}}{\mathrm{s}} > 1{,}5\,\dfrac{\mathrm{m}}{\mathrm{s}}$, zato je kolesar hitrejši.
3. **Poti po $10\,\mathrm{s}$:** pešec $15\,\mathrm{m}$, kolesar $s_2 = 5 \cdot 10 = 50\,\mathrm{m}$.
4. **Graf $s(t)$:** obe premici gresta skozi izhodišče. Premica kolesarja je strmejša, ker je njegova hitrost večja. Pri $t = 10\,\mathrm{s}$ je ena točka pri $15\,\mathrm{m}$, druga pri $50\,\mathrm{m}$.
5. **Graf $v(t)$:** obe sta vodoravni črti, kolesarjeva na višini $5\,\dfrac{\mathrm{m}}{\mathrm{s}}$, pešceva na višini $1{,}5\,\dfrac{\mathrm{m}}{\mathrm{s}}$.
6. **Razdalja med njima po $10\,\mathrm{s}$:** $50\,\mathrm{m} - 15\,\mathrm{m} = 35\,\mathrm{m}$.

## Pogoste napake

- **Mešanje enot.** Če je hitrost v $\dfrac{\mathrm{km}}{\mathrm{h}}$, mora biti čas v urah, ne v minutah ali sekundah. Pred računom enote uskladi.
- **Napačna pretvorba $\dfrac{\mathrm{m}}{\mathrm{s}} \leftrightarrow \dfrac{\mathrm{km}}{\mathrm{h}}$.** Iz $\dfrac{\mathrm{m}}{\mathrm{s}}$ v $\dfrac{\mathrm{km}}{\mathrm{h}}$ množimo s $3{,}6$ (število se poveča), obratno delimo.
- **Minute kot decimalke.** $1{,}5\,\mathrm{h}$ je $90\,\mathrm{min}$, ne $150\,\mathrm{min}$. Ura ima $60$ minut, ne $100$.
- **Napačna formula.** Pot dobiš z množenjem $s = v \cdot t$, čas pa z deljenjem $t = \dfrac{s}{v}$. Pomaga preveriti enote.
- **Vodoravna črta v grafu $s(t)$.** To ne pomeni gibanja s stalno hitrostjo, ampak mirovanje: pot se ne spreminja. Enakomerno gibanje je v grafu $s(t)$ poševna premica.

## Povzetek

- Enakomerno gibanje: v enakih časih telo prepotuje enake poti, hitrost je stalna.
- Hitrost: $v = \dfrac{s}{t}$. Pot: $s = v \cdot t$. Čas: $t = \dfrac{s}{v}$.
- $1\,\dfrac{\mathrm{m}}{\mathrm{s}} = 3{,}6\,\dfrac{\mathrm{km}}{\mathrm{h}}$.
- Graf $s(t)$ je premica skozi izhodišče, strmina je hitrost.
- Graf $v(t)$ je vodoravna črta, ploščina pod njo je pot.

## Drugače: Na sliki

Predstavljaj si graf $s(t)$ kot pot po klancu. Čas gre v desno, pot navzgor. Pri hitrosti $2\,\dfrac{\mathrm{m}}{\mathrm{s}}$ se vsako sekundo dvignemo za $2\,\mathrm{m}$: po $1\,\mathrm{s}$ smo na $2\,\mathrm{m}$, po $2\,\mathrm{s}$ na $4\,\mathrm{m}$, po $3\,\mathrm{s}$ na $6\,\mathrm{m}$. Točke ležijo na ravni črti. Če je hitrost večja, je klanec strmejši.

V grafu $v(t)$ narišemo vodoravno črto na višini $2\,\dfrac{\mathrm{m}}{\mathrm{s}}$. Do časa $3\,\mathrm{s}$ je pod njo pravokotnik z višino $2$ in širino $3$. Njegova ploščina je $2 \cdot 3 = 6$, kar je ravno pot $6\,\mathrm{m}$. Ploščina pod grafom hitrosti torej pove prepotovano pot.

## Drugače: Iz vsakdanjega življenja

Na avtocesti vidiš kažipot: »Ljubljana 60 km«. Če avtomobil vozi s stalno hitrostjo $90\,\dfrac{\mathrm{km}}{\mathrm{h}}$, hitro oceniš čas: v eni uri prevozi $90\,\mathrm{km}$, torej bo $60\,\mathrm{km}$ prevozil v manj kot uri. Natančno: $t = \dfrac{60}{90}\,\mathrm{h} = \dfrac{2}{3}\,\mathrm{h} = 40\,\mathrm{min}$.

Podobno razmišljamo pri hoji. Odrasel človek hodi približno $5\,\dfrac{\mathrm{km}}{\mathrm{h}}$ (običajna ocena). Za $2\,\mathrm{km}$ do šole potrebuje $\dfrac{2}{5}\,\mathrm{h} = 0{,}4\,\mathrm{h} = 24\,\mathrm{min}$.

Pomembno: v resničnem življenju je hitrost redko popolnoma stalna (semaforji, ovinki). Račun z enakomernim gibanjem zato da **povprečno** oceno.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo:

1. Izpiši, kaj je podano in kaj iščeš (npr. $s = 180\,\mathrm{m}$, $t = 30\,\mathrm{s}$, iščem $v$).
2. Preveri enote. Če so mešane, jih uskladi.
3. Izberi formulo: iščem $v$ → $\dfrac{s}{t}$, iščem $s$ → $v \cdot t$, iščem $t$ → $\dfrac{s}{v}$.
4. Vstavi in izračunaj z enotami.
5. Preveri, ali je rezultat smiseln.

Primer s tabelo: vlak vozi s stalno hitrostjo $20\,\dfrac{\mathrm{m}}{\mathrm{s}}$.

| čas $t$ (s) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| pot $s$ (m) | 0 | 20 | 40 | 60 | 80 |

Vsako sekundo se pot poveča za $20\,\mathrm{m}$. Količnik $\dfrac{s}{t}$ je v vsakem stolpcu enak: $\dfrac{80}{4} = 20$, $\dfrac{60}{3} = 20$. To je znak enakomernega gibanja.

## Drugače: Bolj natančno

Pri enakomernem gibanju sta pot in čas **premo sorazmerna**: če se čas podvoji, se podvoji tudi pot. Količnik $\dfrac{s}{t}$ je stalen in ga imenujemo hitrost. Zato je graf $s(t)$ premica skozi izhodišče, enačba te premice pa je $s = v \cdot t$ (kakor $y = k \cdot x$ iz matematike, kjer je smerni koeficient $k$ enak hitrosti).

Če telo začne gibanje na razdalji $s_0$ od izhodišča, je $s = s_0 + v \cdot t$. Graf je še vedno premica z enako strmino, le premaknjena navzgor.

Ploščina pod grafom $v(t)$ od časa $0$ do $t$ je pravokotnik s ploščino $v \cdot t$. To je enako poti $s$. Ta ugotovitev velja tudi za zahtevnejša gibanja, kjer hitrost ni stalna, vendar tam ploščine ne računamo več kot enostaven pravokotnik.

## Preveri se

? Rolkar v $8\,\mathrm{s}$ prevozi $40\,\mathrm{m}$ s stalno hitrostjo. Kolikšna je njegova hitrost?
- $320\,\dfrac{\mathrm{m}}{\mathrm{s}}$
+ $5\,\dfrac{\mathrm{m}}{\mathrm{s}}$
- $0{,}2\,\dfrac{\mathrm{m}}{\mathrm{s}}$
- $48\,\dfrac{\mathrm{m}}{\mathrm{s}}$
> $v = \dfrac{s}{t} = \dfrac{40}{8} = 5\,\dfrac{\mathrm{m}}{\mathrm{s}}$. Odgovor $320$ dobiš z množenjem, $0{,}2$ pa z obrnjenim deljenjem $\dfrac{t}{s}$.

? Avtobus vozi s stalno hitrostjo $60\,\dfrac{\mathrm{km}}{\mathrm{h}}$. Koliko časa potrebuje za $150\,\mathrm{km}$?
- $90\,\mathrm{h}$
- $2{,}5\,\mathrm{min}$
+ $2{,}5\,\mathrm{h}$
- $9000\,\mathrm{h}$
> $t = \dfrac{s}{v} = \dfrac{150\,\mathrm{km}}{60\,\frac{\mathrm{km}}{\mathrm{h}}} = 2{,}5\,\mathrm{h}$, kar je $2$ uri in $30$ minut. Če bi množili, bi dobili napačno enoto in nesmiselno veliko število.

? Kakšen je graf $s(t)$ za telo, ki se giblje enakomerno s hitrostjo $3\,\dfrac{\mathrm{m}}{\mathrm{s}}$ in začne v izhodišču?
- Vodoravna črta na višini $3$.
- Navpična črta pri času $3\,\mathrm{s}$.
+ Poševna premica skozi izhodišče.
> Pot je $s = 3 \cdot t$, pot narašča sorazmerno s časom, zato je graf poševna premica skozi izhodišče. Vodoravna črta je graf $v(t)$ (ali mirovanje v grafu $s(t)$).
