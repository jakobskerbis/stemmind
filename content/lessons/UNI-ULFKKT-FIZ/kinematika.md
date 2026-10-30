---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Nejc kupuje rabljen avto. Prodajalec hvali, da pospeši od $0$ do $100\,\mathrm{km/h}$ v $8{,}0\,\mathrm{s}$, Nejca pa zanima nekaj drugega: ali mu bo kratek pospeševalni pas pred avtocesto dovolj, da se varno vključi. Potrebuje torej pot, ne čas, in prav to iz podatka o pospešku izračuna kinematika.

Kinematika opiše gibanje, ne da bi spraševala po vzroku: kje je telo, kako hitro se giblje in kako se mu hitrost spreminja. Na fakulteti to zapišemo **vektorsko** in z **odvodi**: lega je funkcija časa $\vec{r}(t)$, hitrost njen odvod, pospešek odvod hitrosti. En zapis zajame vožnjo po premici, poševni met in kroženje rotorja centrifuge; v istem jeziku boš pozneje pisal Newtonove zakone, nihanje in tok tekočin ter sledil celicam pod mikroskopom.

## Razlaga

### En primer najprej

Nejčev avto stoji, nato $8{,}0\,\mathrm{s}$ enakomerno pospešuje. Graf hitrosti v odvisnosti od časa je premica: njen naklon je pospešek, ploščina trikotnika pod njo pa prevožena pot. V tej sliki so že vsi pojmi kinematike; spodaj jih posplošimo na vektorje, krivo gibanje in kroženje.

### Lega, hitrost in pospešek kot vektorji

**1. Lega, premik in pot.** Lego točkastega telesa opišemo s krajevnim vektorjem $\vec{r}(t) = x(t)\,\vec{i} + y(t)\,\vec{j} + z(t)\,\vec{k}$ glede na izbrano izhodišče. **Premik** v časovnem intervalu je $\Delta\vec{r} = \vec{r}(t_2) - \vec{r}(t_1)$, **pot** $s$ pa dolžina krivulje, ki jo telo opiše. Premik je vektor, pot je skalar in je vedno vsaj tolikšna kot $|\Delta\vec{r}|$.

**2. Hitrost.** Povprečna hitrost je $\bar{\vec{v}} = \Delta\vec{r}/\Delta t$, **trenutna hitrost** pa limita, ko gre $\Delta t \to 0$:

$$\vec{v} = \frac{\mathrm{d}\vec{r}}{\mathrm{d}t} = \dot{x}\,\vec{i} + \dot{y}\,\vec{j} + \dot{z}\,\vec{k}.$$

Hitrost je vedno **tangentna** na tir. Njena velikost $v = |\vec{v}| = \mathrm{d}s/\mathrm{d}t$ je hitrost, ki jo kaže merilnik v avtomobilu.

**3. Pospešek.** Pospešek je odvod hitrosti po času:

$$\vec{a} = \frac{\mathrm{d}\vec{v}}{\mathrm{d}t} = \frac{\mathrm{d}^2\vec{r}}{\mathrm{d}t^2}.$$

Pospešek ni nič, kadar se spreminja velikost **ali** smer hitrosti. Zato ima pospešek tudi telo, ki enakomerno kroži.

:::premisli
Avto vozi po krožnem priključku avtoceste, merilnik ves čas kaže $60\,\mathrm{km/h}$. Ali avto pospešuje?
---
Da. Velikost hitrosti je stalna, smer pa se ves čas spreminja, zato je $\mathrm{d}\vec{v}/\mathrm{d}t \neq 0$. Pospešek kaže proti središču priključka; potnik ga čuti kot potisk proti zunanji strani.
:::

**4. Obratna pot: integriranje.** Če poznamo pospešek, hitrost in lego dobimo z integriranjem:

$$\vec{v}(t) = \vec{v}_0 + \int_0^t \vec{a}\,\mathrm{d}t', \qquad \vec{r}(t) = \vec{r}_0 + \int_0^t \vec{v}\,\mathrm{d}t'.$$

Začetna lega $\vec{r}_0$ in začetna hitrost $\vec{v}_0$ sta integracijski konstanti. Brez njih gibanje ni določeno.

### Premo in krivo gibanje

**5. Premo gibanje.** Pri premem gibanju zadošča ena koordinata $x(t)$.

- **Enakomerno gibanje** ($a = 0$): $x = x_0 + vt$.
- **Enakomerno pospešeno gibanje** ($a$ stalen):

$$v = v_0 + at, \qquad x = x_0 + v_0 t + \tfrac{1}{2}at^2, \qquad v^2 = v_0^2 + 2a(x - x_0).$$

Tretjo enačbo dobimo, če iz prvih dveh izločimo čas. Prosti pad je poseben primer z $a = g \approx 9{,}81\,\mathrm{m/s^2}$ navzdol. V grafu $v(t)$ je pospešek naklon, ploščina pod krivuljo pa premik.

:::premisli
Avto z istimi zavorami enkrat zavira s $50\,\mathrm{km/h}$, drugič s $100\,\mathrm{km/h}$. Kolikokrat daljša je zavorna pot v drugem primeru in zakaj?
---
Štirikrat. Iz $v^2 = v_0^2 + 2a(x - x_0)$ pri končni hitrosti nič sledi $\Delta x = v_0^2/(2|a|)$: pot je sorazmerna s kvadratom začetne hitrosti, ker avto pri dvakratni hitrosti zavira dvakrat toliko časa in pri tem vozi v povprečju dvakrat hitreje.
:::

**6. Krivo gibanje v ravnini.** Ker je enačba $\vec{a} = \mathrm{d}\vec{v}/\mathrm{d}t$ vektorska, velja po komponentah. Pri stalnem pospešku je vsaka komponenta posebej enakomerno pospešeno gibanje. Pospešek pri krivem gibanju pogosto razstavimo na:

- **tangentni pospešek** $a_t = \mathrm{d}v/\mathrm{d}t$ (vzdolž hitrosti, spreminja velikost hitrosti),
- **radialni (normalni) pospešek** $a_r = v^2/R$ (pravokotno na hitrost, proti središču ukrivljenosti s polmerom $R$, spreminja smer).

Velikost celotnega pospeška je $a = \sqrt{a_t^2 + a_r^2}$.

**7. Poševni met.** Telo vržemo z začetno hitrostjo $v_0$ pod kotom $\alpha$ glede na vodoravnico. Zračni upor zanemarimo, os $y$ kaže navzgor, pospešek je $\vec{a} = (0, -g)$. Komponenti gibanja sta neodvisni:

$$x = v_0\cos\alpha\,t, \qquad y = v_0\sin\alpha\,t - \tfrac{1}{2}gt^2,$$
$$v_x = v_0\cos\alpha, \qquad v_y = v_0\sin\alpha - gt.$$

Vodoravno je gibanje enakomerno, navpično enakomerno pospešeno. Če iz $x(t)$ izrazimo $t$ in ga vstavimo v $y(t)$, dobimo parabolo. Za met z vodoravnih tal in pristanek na isti višini veljajo:

$$t_{\text{let}} = \frac{2v_0\sin\alpha}{g}, \qquad h_{\max} = \frac{v_0^2\sin^2\alpha}{2g}, \qquad D = \frac{v_0^2\sin 2\alpha}{g}.$$

Domet je največji pri $\alpha = 45^\circ$, koti $\alpha$ in $90^\circ - \alpha$ pa dasta enak domet. V najvišji točki je $v_y = 0$, hitrost pa ni nič: ostane $v_x$.

### Kroženje in relativno gibanje

**8. Kroženje.** Pri gibanju po krožnici s polmerom $r$ lego opišemo s kotom $\varphi(t)$. Vpeljemo:

- **kotno hitrost** $\omega = \mathrm{d}\varphi/\mathrm{d}t$ (enota $\mathrm{s^{-1}}$ oziroma $\mathrm{rad/s}$),
- **kotni pospešek** $\alpha = \mathrm{d}\omega/\mathrm{d}t$ (enota $\mathrm{s^{-2}}$).

Zveze med obodnimi in kotnimi količinami so $s = r\varphi$, $v = \omega r$, $a_t = \alpha r$, $a_r = v^2/r = \omega^2 r$. Pri **enakomernem kroženju** je $\omega$ stalna, obhodni čas je $t_0 = 2\pi/\omega$, frekvenca $\nu = 1/t_0$. Pri **enakomerno pospešenem kroženju** veljajo enačbe, analogne prememu gibanju: $\omega = \omega_0 + \alpha t$, $\varphi = \omega_0 t + \tfrac{1}{2}\alpha t^2$.

Pazi na dve različni oznaki: $\alpha$ za kot meta in $\alpha$ za kotni pospešek. Iz okoliščin je vedno jasno, katera je mišljena, v lastnih zapiskih pa ju lahko ločiš z indeksom.

**9. Relativno gibanje.** Lega, hitrost in pospešek so odvisni od opazovalca. Če se opazovalni sistem $S'$ glede na sistem $S$ giblje premo s hitrostjo $\vec{u}$, velja

$$\vec{r} = \vec{r}\,' + \vec{u}t, \qquad \vec{v} = \vec{v}\,' + \vec{u}, \qquad \vec{a} = \vec{a}\,' \quad (\text{pri stalnem } \vec{u}).$$

Hitrosti se seštevajo vektorsko. Čoln, ki pluje s hitrostjo $3{,}0\,\mathrm{m/s}$ glede na vodo pravokotno na tok s hitrostjo $4{,}0\,\mathrm{m/s}$, ima glede na breg hitrost $5{,}0\,\mathrm{m/s}$. Pospešek je v obeh sistemih enak, dokler se $S'$ giblje enakomerno; zato v vseh takih (inercialnih) sistemih veljajo isti zakoni gibanja.

**10. Kako se lotiti naloge.** (1) Nariši skico in izberi izhodišče ter smeri osi. (2) Zapiši začetne pogoje: $\vec{r}_0$, $\vec{v}_0$. (3) Ugotovi, ali je pospešek stalen; če je, uporabi enačbe za stalni pospešek po komponentah, sicer integriraj. (4) Poišči pogoj, ki določa iskani trenutek (pristanek: $y = 0$; vrh: $v_y = 0$; srečanje: enaki legi). (5) Preveri enote in smiselnost rezultata.

## Rešeni primeri

### Primer 1 (lažji)

Nejčev izbrani avtomobil iz mirovanja enakomerno pospešuje in v $8{,}0\,\mathrm{s}$ doseže hitrost $100\,\mathrm{km/h}$. Kolikšen je njegov pospešek in kolikšno pot pri tem prevozi?

**Podatki:** $v_0 = 0$, $v = 100\,\mathrm{km/h}$, $t = 8{,}0\,\mathrm{s}$
**Iščemo:** pospešek $a$ in pot $s$

:::formula
$v = v_0 + at$, $s = v_0 t + \tfrac{1}{2}at^2$
:::

**Rešitev:**

1. Hitrost pretvorimo v $\mathrm{m/s}$, ker je čas v sekundah: $v = 100\,\mathrm{km/h} = 100/3{,}6\,\mathrm{m/s} \approx 27{,}8\,\mathrm{m/s}$.
2. Pospešek je stalen, zato iz $v = v_0 + at$ sledi $a = (v - v_0)/t = 27{,}8\,\mathrm{m/s} / 8{,}0\,\mathrm{s} \approx 3{,}47\,\mathrm{m/s^2}$.
3. Ker je $v_0 = 0$, ostane le člen s pospeškom: $s = \tfrac{1}{2}at^2 = \tfrac{1}{2} \cdot 3{,}47\,\mathrm{m/s^2} \cdot (8{,}0\,\mathrm{s})^2 \approx 111\,\mathrm{m}$.
4. Preizkus s povprečno hitrostjo: $s = \tfrac{v_0 + v}{2}\,t = 13{,}9\,\mathrm{m/s} \cdot 8{,}0\,\mathrm{s} \approx 111\,\mathrm{m}$.
5. Odgovor: pospešek je približno $3{,}47\,\mathrm{m/s^2}$, avtomobil pa prevozi približno $111\,\mathrm{m}$.

### Primer 2

Žogo z vodoravnih tal vržemo s hitrostjo $20\,\mathrm{m/s}$ pod kotom $35^\circ$ glede na vodoravnico. Kako dolgo je žoga v zraku, kako visoko se dvigne in kako daleč pade? Zračni upor zanemari, $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $v_0 = 20\,\mathrm{m/s}$, $\alpha = 35^\circ$, začetna in končna višina sta enaki, $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** čas leta $t_{\text{let}}$, največjo višino $h_{\max}$, domet $D$

:::formula
$v_x = v_0\cos\alpha$, $v_{0y} = v_0\sin\alpha$; $t_{\text{let}} = \dfrac{2v_{0y}}{g}$, $h_{\max} = \dfrac{v_{0y}^2}{2g}$, $D = v_x\,t_{\text{let}}$
:::

**Rešitev:**

1. Komponenti gibanja sta neodvisni, zato začetno hitrost razstavimo: $v_x = 20 \cdot \cos 35^\circ\,\mathrm{m/s} \approx 16{,}4\,\mathrm{m/s}$, $v_{0y} = 20 \cdot \sin 35^\circ\,\mathrm{m/s} \approx 11{,}5\,\mathrm{m/s}$.
2. Žoga pristane, ko je spet $y = 0$: $v_{0y}t - \tfrac{1}{2}gt^2 = 0$, torej $t_{\text{let}} = 2v_{0y}/g = 2 \cdot 11{,}47 / 9{,}81\,\mathrm{s} \approx 2{,}34\,\mathrm{s}$.
3. V najvišji točki je $v_y = 0$: $h_{\max} = v_{0y}^2/(2g) = 11{,}47^2 / (2 \cdot 9{,}81)\,\mathrm{m} \approx 6{,}71\,\mathrm{m}$.
4. Vodoravno je gibanje enakomerno: $D = v_x t_{\text{let}} = 16{,}38\,\mathrm{m/s} \cdot 2{,}339\,\mathrm{s} \approx 38{,}3\,\mathrm{m}$.
5. Preizkus: $D = v_0^2\sin 70^\circ / g = 400 \cdot 0{,}940 / 9{,}81\,\mathrm{m} \approx 38{,}3\,\mathrm{m}$.
6. Odgovor: žoga je v zraku približno $2{,}34\,\mathrm{s}$, dvigne se do višine približno $6{,}71\,\mathrm{m}$ in pade približno $38{,}3\,\mathrm{m}$ daleč.

### Primer 3 (težji)

Rotor centrifuge s polmerom $0{,}30\,\mathrm{m}$ začne iz mirovanja enakomerno pospeševati in v $4{,}0\,\mathrm{s}$ doseže kotno hitrost $20\,\mathrm{s^{-1}}$. Za točko na obodu izračunaj tangentni, radialni in celotni pospešek ob koncu pospeševanja ter število obratov, ki jih rotor pri tem naredi.

**Podatki:** $r = 0{,}30\,\mathrm{m}$, $\omega_0 = 0$, $\omega = 20\,\mathrm{s^{-1}}$, $t = 4{,}0\,\mathrm{s}$, kotni pospešek je stalen
**Iščemo:** $a_t$, $a_r$, $a$ ob $t = 4{,}0\,\mathrm{s}$ in število obratov $N$

:::formula
$\alpha = \dfrac{\omega - \omega_0}{t}$, $a_t = \alpha r$, $a_r = \omega^2 r$, $a = \sqrt{a_t^2 + a_r^2}$, $\varphi = \tfrac{1}{2}\alpha t^2$, $N = \dfrac{\varphi}{2\pi}$
:::

**Rešitev:**

1. Kotni pospešek je stalen, zato $\alpha = 20\,\mathrm{s^{-1}} / 4{,}0\,\mathrm{s} = 5{,}0\,\mathrm{s^{-2}}$.
2. Tangentni pospešek: $a_t = \alpha r = 5{,}0\,\mathrm{s^{-2}} \cdot 0{,}30\,\mathrm{m} = 1{,}5\,\mathrm{m/s^2}$. Ves čas pospeševanja je enak.
3. Radialni pospešek na koncu: $a_r = \omega^2 r = (20\,\mathrm{s^{-1}})^2 \cdot 0{,}30\,\mathrm{m} = 120\,\mathrm{m/s^2}$.
4. Celotni pospešek: $a = \sqrt{1{,}5^2 + 120^2}\,\mathrm{m/s^2} \approx 120\,\mathrm{m/s^2}$; radialni del močno prevlada.
5. Zasučni kot (enačba kot pri premem gibanju, le s kotnimi količinami): $\varphi = \tfrac{1}{2} \cdot 5{,}0\,\mathrm{s^{-2}} \cdot (4{,}0\,\mathrm{s})^2 = 40\,\mathrm{rad}$.
6. Število obratov: $N = 40 / (2\pi) \approx 6{,}4$.
7. Odgovor: ob koncu je $a_t = 1{,}5\,\mathrm{m/s^2}$, $a_r = 120\,\mathrm{m/s^2}$ in $a \approx 120\,\mathrm{m/s^2}$ (približno $12\,g$); rotor pri pospeševanju naredi približno $6{,}4$ obrata.

### Primer 4 – zdaj ti

Dostavni dron s paketom iz spletne trgovine leti vodoravno s hitrostjo $10\,\mathrm{m/s}$ na višini $20\,\mathrm{m}$ nad dvoriščem. Koliko metrov pred ciljem (vodoravno) mora spustiti paket, da pade točno na cilj? S kolikšno hitrostjo paket zadene tla? Zračni upor zanemari, $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $v_x = 10\,\mathrm{m/s}$, $v_{0y} = 0$, $h = 20\,\mathrm{m}$, $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** vodoravno razdaljo $D$, hitrost ob pristanku $v$

:::formula
$h = \tfrac{1}{2}gt^2$, $D = v_x t$, $v_y = gt$, $v = \sqrt{v_x^2 + v_y^2}$
:::

**Rešitev:**

1. Paket ima ob spustu hitrost drona, zato je $v_x = 10\,\mathrm{m/s}$ in $v_{0y} = 0$; vodoravno se giblje enakomerno, navpično prosto pada.
2. Čas padca določa le navpično gibanje: $t = \sqrt{2h/g} = \sqrt{2 \cdot 20/9{,}81}\,\mathrm{s} \approx 2{,}02\,\mathrm{s}$.
3. Izračunaj $D$ in $v$ sam, nato preveri:

:::premisli
Kolikšna sta $D$ in hitrost paketa ob pristanku?
---
$D = 10\,\mathrm{m/s} \cdot 2{,}02\,\mathrm{s} \approx 20{,}2\,\mathrm{m}$. Navpična hitrost je $v_y = 9{,}81 \cdot 2{,}02\,\mathrm{m/s} \approx 19{,}8\,\mathrm{m/s}$, zato $v = \sqrt{10^2 + 19{,}8^2}\,\mathrm{m/s} \approx 22{,}2\,\mathrm{m/s}$.
:::

## Pogoste napake

- **Mešanje poti in premika.** Tekač, ki preteče krog na stadionu, ima pot $400\,\mathrm{m}$, premik pa nič. Povprečna hitrost (vektor) je zato nič, povprečna velikost hitrosti pa ne.
- **»V najvišji točki je hitrost nič.«** Pri poševnem metu je nič le navpična komponenta, vodoravna ostane $v_0\cos\alpha$. Pospešek je v najvišji točki še vedno $g$ navzdol.
- **Enakomerno kroženje brez pospeška.** Velikost hitrosti je stalna, smer pa se spreminja, zato je $a_r = v^2/r \neq 0$.
- **Formule za stalni pospešek povsod.** $x = x_0 + v_0 t + \tfrac{1}{2}at^2$ velja le pri stalnem $a$. Če je pospešek odvisen od časa, je treba integrirati.
- **Predznaki.** Izberi smer osi in se je drži. Če os $y$ kaže navzgor, je pospešek prostega pada $-g$.
- **Stopinje in radiani.** V $s = r\varphi$ in $v = \omega r$ mora biti kot v radianih. Obrate na minuto pretvoriš v kotno hitrost z $\omega = 2\pi \nu$, kjer je $\nu$ v obratih na sekundo (deli s $60$).
- **Kilometri na uro.** Pred računanjem pretvori v $\mathrm{m/s}$: deli s $3{,}6$.

## Povzetek

- $\vec{v} = \mathrm{d}\vec{r}/\mathrm{d}t$ je tangentna na tir, $\vec{a} = \mathrm{d}\vec{v}/\mathrm{d}t$; obratno lego in hitrost dobimo z integriranjem ob znanih začetnih pogojih.
- Stalni pospešek: $v = v_0 + at$, $x = x_0 + v_0t + \tfrac{1}{2}at^2$, $v^2 = v_0^2 + 2a\Delta x$.
- Krivo gibanje: komponente so neodvisne; $a_t = \mathrm{d}v/\mathrm{d}t$, $a_r = v^2/R$.
- Poševni met: vodoravno enakomerno, navpično pospešeno z $-g$; $D = v_0^2\sin 2\alpha/g$, največji pri $45^\circ$.
- Kroženje: $\omega = \mathrm{d}\varphi/\mathrm{d}t$, $v = \omega r$, $a_t = \alpha r$, $a_r = \omega^2 r$, $t_0 = 2\pi/\omega$.

## Drugače: Na sliki

Tir poševnega meta je parabola. Na vsaki točki nariši vektor hitrosti kot puščico, tangentno na tir:

```
              v_x (v najvišji točki ostane samo vodoravna komponenta)
             ---->
          .         .
       .               .
     .  ^ v             .
   .   /                  .
  .   /  alfa              .
 ------------------------------
 |<----------- D ------------>|
```

Vodoravna komponenta puščice je povsod enako dolga, navpična se enakomerno krajša, v vrhu izgine in nato raste navzdol. Pospešek $\vec{g}$ je v vsaki točki enak: kratka puščica navpično navzdol.

Pri kroženju nariši krožnico, vektor hitrosti kot tangento in radialni pospešek kot puščico proti središču. Če kroženje pospešuje, dodaj tangentni pospešek v smeri hitrosti. Vsota obeh puščic je celotni pospešek, ki ni več usmerjen točno proti središču.

V grafu $v(t)$ za enakomerno pospešeno gibanje je premica. Naklon je pospešek, ploščina trikotnika (ali trapeza) pod premico pa prevožena pot.

## Drugače: Iz vsakdanjega življenja

**Centrifuga v laboratoriju.** Proizvajalci navajajo »relativno centrifugalno silo« (RCF), ki je razmerje $\omega^2 r / g$. Pri $3000$ obratih na minuto in $r = 10\,\mathrm{cm}$ je $\omega = 2\pi \cdot 50\,\mathrm{s^{-1}} \approx 314\,\mathrm{s^{-1}}$ in $\omega^2 r \approx 9{,}9 \cdot 10^3\,\mathrm{m/s^2}$, kar je približno $1000\,g$. Zato za isti učinek pri manjšem rotorju potrebuješ več obratov.

**Zavorna pot.** Iz $v^2 = v_0^2 + 2a\Delta x$ pri $v = 0$ sledi $\Delta x = v_0^2/(2|a|)$. Zavorna pot je sorazmerna s **kvadratom** hitrosti: pri $100\,\mathrm{km/h}$ je približno dvakrat daljša kot pri $70\,\mathrm{km/h}$ ($(100/70)^2 \approx 2{,}04$).

**Skok bolhe in kobilice.** Žuželke pri skoku dosežejo veliko začetno hitrost na kratki razdalji. Kobilica, ki skoči $1\,\mathrm{m}$ daleč pod kotom okoli $45^\circ$, mora odskočiti s hitrostjo $v_0 = \sqrt{gD} \approx 3{,}1\,\mathrm{m/s}$.

**Namakanje in vodni curki.** Curek iz šobe razpršilca je približno parabola. Kmetijski razpršilci so pogosto nagnjeni nekoliko manj kot $45^\circ$, ker zračni upor in veter domet pri večjih kotih bolj zmanjšata.

## Drugače: Korak za korakom s številkami

Gibanje delca je podano s $\vec{r}(t) = (3{,}0\,\mathrm{m/s} \cdot t)\,\vec{i} + (4{,}0\,\mathrm{m/s} \cdot t - 1{,}0\,\mathrm{m/s^2} \cdot t^2)\,\vec{j}$. Kje je delec, kako hitro se giblje in kolikšen je njegov pospešek ob $t = 1{,}0\,\mathrm{s}$?

1. **Lega:** $x = 3{,}0\,\mathrm{m}$, $y = 4{,}0 - 1{,}0 = 3{,}0\,\mathrm{m}$.
2. **Hitrost po komponentah** (odvajamo): $v_x = 3{,}0\,\mathrm{m/s}$, $v_y = 4{,}0\,\mathrm{m/s} - 2{,}0\,\mathrm{m/s^2} \cdot t = 2{,}0\,\mathrm{m/s}$.
3. **Velikost hitrosti:** $v = \sqrt{3{,}0^2 + 2{,}0^2}\,\mathrm{m/s} \approx 3{,}61\,\mathrm{m/s}$.
4. **Pospešek** (še enkrat odvajamo): $a_x = 0$, $a_y = -2{,}0\,\mathrm{m/s^2}$. Pospešek je stalen, zato je tir parabola, tako kot pri poševnem metu.
5. **Najvišja točka:** $v_y = 0$ pri $t = 2{,}0\,\mathrm{s}$, takrat je $y = 8{,}0 - 4{,}0 = 4{,}0\,\mathrm{m}$.
6. **Tangentni pospešek ob $t = 1{,}0\,\mathrm{s}$:** projekcija $\vec{a}$ na smer $\vec{v}$: $a_t = \vec{a}\cdot\vec{v}/v = (-2{,}0 \cdot 2{,}0)/3{,}61\,\mathrm{m/s^2} \approx -1{,}11\,\mathrm{m/s^2}$; delec se upočasnjuje.

## Drugače: Bolj natančno

**Definicija hitrosti kot limite.** Hitrost ob času $t$ je $\vec{v}(t) = \lim_{\Delta t \to 0} \frac{\vec{r}(t + \Delta t) - \vec{r}(t)}{\Delta t}$, če limita obstaja. Odvod vektorske funkcije je vektor odvodov komponent, zato vsa pravila odvajanja veljajo po komponentah.

**Izpeljava enačb za stalni pospešek.** Iz $\dot{v} = a$ z integriranjem dobimo $v(t) = v_0 + at$, iz $\dot{x} = v$ pa $x(t) = x_0 + v_0 t + \tfrac{1}{2}at^2$. Če zapišemo $a = \frac{\mathrm{d}v}{\mathrm{d}t} = \frac{\mathrm{d}v}{\mathrm{d}x}\frac{\mathrm{d}x}{\mathrm{d}t} = v\frac{\mathrm{d}v}{\mathrm{d}x}$ in integriramo po $x$, dobimo $\tfrac{1}{2}(v^2 - v_0^2) = a(x - x_0)$.

**Razcep pospeška.** Naj bo $\vec{e}_t = \vec{v}/v$ enotski tangentni vektor. Odvajamo $\vec{v} = v\,\vec{e}_t$:

$$\vec{a} = \frac{\mathrm{d}v}{\mathrm{d}t}\,\vec{e}_t + v\,\frac{\mathrm{d}\vec{e}_t}{\mathrm{d}t}.$$

Ker je $|\vec{e}_t| = 1$, je $\mathrm{d}\vec{e}_t/\mathrm{d}t$ pravokoten na $\vec{e}_t$; njegova velikost je $v/R$, kjer je $R$ krivinski polmer tira. Tako dobimo $\vec{a} = a_t\vec{e}_t + \frac{v^2}{R}\vec{e}_n$.

**Kroženje v polarnih koordinatah.** Za $\vec{r} = r(\cos\varphi, \sin\varphi)$ s stalnim $r$ in $\varphi(t)$ odvajamo: $\vec{v} = r\dot{\varphi}(-\sin\varphi, \cos\varphi)$ in $\vec{a} = r\ddot{\varphi}(-\sin\varphi, \cos\varphi) - r\dot{\varphi}^2(\cos\varphi, \sin\varphi)$. Prvi člen je tangentni pospešek $\alpha r$, drugi radialni $-\omega^2\vec{r}$.

**Domet poševnega meta.** Iz $y = x\tan\alpha - \frac{g x^2}{2v_0^2\cos^2\alpha}$ in $y = 0$ sledi $D = \frac{2v_0^2\sin\alpha\cos\alpha}{g} = \frac{v_0^2\sin 2\alpha}{g}$. Odvod po $\alpha$ je $\frac{2v_0^2\cos 2\alpha}{g}$, ki je nič pri $\alpha = 45^\circ$; tam je domet največji. Z zračnim uporom, sorazmernim s $v$ ali $v^2$, tir ni več parabola in najugodnejši kot je manjši od $45^\circ$.

## Preveri se

? Telo se giblje po premici z $x(t) = 2{,}0\,\mathrm{m/s^3} \cdot t^3$. Kolikšen je pospešek ob $t = 1{,}0\,\mathrm{s}$?
- $6{,}0\,\mathrm{m/s^2}$
~ To je vrednost hitrosti $\dot{x}$ ob $t = 1{,}0\,\mathrm{s}$; za pospešek moraš odvajati še enkrat.
+ $12\,\mathrm{m/s^2}$
- $2{,}0\,\mathrm{m/s^2}$
~ To je le koeficient pred $t^3$; pospešek dobiš šele z dvakratnim odvajanjem lege.
> $v = \dot{x} = 6{,}0\,\mathrm{m/s^3} \cdot t^2$, $a = \dot{v} = 12\,\mathrm{m/s^3} \cdot t$, kar je ob $t = 1{,}0\,\mathrm{s}$ enako $12\,\mathrm{m/s^2}$. $6{,}0\,\mathrm{m/s^2}$ je vrednost hitrosti (v $\mathrm{m/s}$), ne pospeška.

? Kakšna je hitrost žoge v najvišji točki poševnega meta z $v_0$ pod kotom $\alpha$?
- Nič.
~ Nič je le navpična komponenta; vodoravna komponenta se med letom ne spremeni, ker vodoravno ni pospeška.
- $v_0\sin\alpha$
~ To je začetna navpična komponenta, ki se do vrha zmanjša ravno na nič.
+ $v_0\cos\alpha$
> V najvišji točki je navpična komponenta nič, vodoravna pa je ves čas enaka $v_0\cos\alpha$.

? Pri katerem paru kotov ima poševni met z vodoravnih tal enak domet (brez upora)?
+ $30^\circ$ in $60^\circ$
- $30^\circ$ in $45^\circ$
~ Pri $45^\circ$ je domet največji in ga noben drug kot ne doseže; $\sin 60^\circ \neq \sin 90^\circ$.
- $20^\circ$ in $40^\circ$
~ Drugi kot ni dvakratnik prvega, ampak dopolnilo do $90^\circ$; $\sin 40^\circ \neq \sin 80^\circ$.
> $D \propto \sin 2\alpha$ in $\sin 60^\circ = \sin 120^\circ$. Kota, ki se seštejeta v $90^\circ$, dasta enak domet.

? Točka na obodu kolesa s polmerom $0{,}50\,\mathrm{m}$ enakomerno kroži s $2{,}0$ obrata na sekundo. Kolikšen je njen radialni pospešek?
- $6{,}3\,\mathrm{m/s^2}$
~ To je obodna hitrost $v = \omega r$ v $\mathrm{m/s}$; radialni pospešek je $\omega^2 r$.
- $2{,}0\,\mathrm{m/s^2}$
~ To je frekvenca v obratih na sekundo; najprej izračunaj $\omega = 2\pi\nu$.
+ $79\,\mathrm{m/s^2}$
> $\omega = 2\pi \cdot 2{,}0\,\mathrm{s^{-1}} \approx 12{,}6\,\mathrm{s^{-1}}$, $a_r = \omega^2 r \approx 158 \cdot 0{,}50\,\mathrm{m/s^2} \approx 79\,\mathrm{m/s^2}$. $6{,}3\,\mathrm{m/s^2}$ je napačno, ker je to obodna hitrost $v = \omega r$ v $\mathrm{m/s}$.

? Kupec gre od vhoda trgovine po vseh hodnikih do blagajne. Dve od naštetih količin njegovega gibanja sta vektorja, ena je skalar. Katera je izjema?
- Premik.
~ Premik je razlika krajevnih vektorjev $\vec{r}(t_2) - \vec{r}(t_1)$ in ima smer: od vhoda proti blagajni.
+ Pot.
- Pospešek.
~ Pospešek je odvod vektorja hitrosti in ima smer, npr. pri zavijanju okoli police kaže proti središču zavoja.
> Pot je dolžina krivulje, ki jo kupec prehodi, in nima smeri; zato je vedno vsaj tolikšna kot velikost premika.

:::simboli
\vec{r} | krajevni vektor (lega telesa) | \vec{r}(t) = x(t)\,\vec{i} + y(t)\,\vec{j} + z(t)\,\vec{k} | m
\vec{r}_0 | začetna lega (krajevni vektor ob t = 0) | | m
r | polmer krožnice | | m
\vec{v} | vektor hitrosti | \vec{v} = \frac{\mathrm{d}\vec{r}}{\mathrm{d}t} | m/s
\vec{v}_0 | vektor začetne hitrosti | | m/s
v | velikost hitrosti | v = \frac{\mathrm{d}s}{\mathrm{d}t} | m/s | kaže jo merilnik hitrosti
v_0 | začetna hitrost | | m/s
v_x | vodoravna komponenta hitrosti | v_x = v_0\cos\alpha | m/s | pri poševnem metu stalna
v_y | navpična komponenta hitrosti | v_y = v_0\sin\alpha - gt | m/s
v_{0y} | navpična komponenta začetne hitrosti | v_{0y} = v_0\sin\alpha | m/s
\vec{a} | vektor pospeška | \vec{a} = \frac{\mathrm{d}\vec{v}}{\mathrm{d}t} | m/s^2
a | pospešek pri premem gibanju | | m/s^2
a_t | tangentni pospešek | a_t = \frac{\mathrm{d}v}{\mathrm{d}t} | m/s^2 | spreminja velikost hitrosti
a_r | radialni pospešek | a_r = \frac{v^2}{R} | m/s^2 | pri kroženju a_r = ω² r
R | krivinski polmer tira | | m
t | čas | | s
t_{\text{let}} | čas leta | t_{\text{let}} = \frac{2v_0\sin\alpha}{g} | s
x, y, z | koordinate lege telesa | | m
\dot{x}, \dot{y}, \dot{z} | komponente hitrosti (odvodi koordinat po času) | | m/s
x_0 | začetna lega | | m
\vec{i}, \vec{j}, \vec{k} | enotski vektorji v smereh osi x, y, z | | – | dolžina 1, pravokotni drug na drugega
\alpha | kot meta glede na vodoravnico | | ° | pri kroženju kotni pospešek v s⁻²
g | težni pospešek | | m/s^2 | 9,81 m/s²
h | višina | | m
h_{\max} | največja višina meta | h_{\max} = \frac{v_0^2\sin^2\alpha}{2g} | m
D | domet | D = v_x\,t_{\text{let}} | m | največji pri 45°
\vec{u} | hitrost sistema S' glede na sistem S | | m/s
\vec{e}_t | enotski tangentni vektor | \vec{e}_t = \frac{\vec{v}}{v} | – | kaže v smeri hitrosti
\vec{e}_n | enotski normalni vektor | | – | kaže proti središču ukrivljenosti
s | pot | | m | dolžina krivulje, ne velikost premika
\varphi | kot zasuka pri kroženju | | rad
\omega | kotna hitrost | \omega = \frac{\mathrm{d}\varphi}{\mathrm{d}t} | s^{-1}
\omega_0 | začetna kotna hitrost | | s^{-1}
N | število obratov | N = \frac{\varphi}{2\pi} | –
:::
