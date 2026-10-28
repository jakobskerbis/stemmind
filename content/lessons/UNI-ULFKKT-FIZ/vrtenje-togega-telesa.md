---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Doslej smo telesa obravnavali kot točke: zanimalo nas je le, kam se premakne njihovo masno središče. Kolo, vrata, rotor centrifuge, vijačni ključ ali podlaket pa se tudi **vrtijo**, in pri tem ni vseeno, kje in v kateri smeri prijemlje sila. Za opis vrtenja potrebujemo tri nove količine: **navor** (vrtilni učinek sile), **vztrajnostni moment** (vztrajnost pri vrtenju) in **vrtilno količino** (vrtilni »dvojček« gibalne količine).

Ugotovili bomo, da je vrtenje okoli stalne osi matematično enako prememu gibanju, le z drugimi črkami. Z istimi zamislimi razložimo delovanje vzvodov v telesu, stabilnost žiroskopa, pirueto drsalke, kotaljenje koles in vrtenje molekul, ki prispeva k toplotni kapaciteti plinov.

## Razlaga

**1. Togo telo in vrtenje okoli stalne osi.** Togo telo je idealizacija, pri kateri se razdalje med deli telesa ne spreminjajo. Pri vrtenju okoli stalne osi se vse točke zavrtijo za enak kot $\varphi$, zato imajo enako kotno hitrost $\omega = \mathrm{d}\varphi/\mathrm{d}t$ in enak kotni pospešek $\alpha = \mathrm{d}\omega/\mathrm{d}t$. Točka na razdalji $r$ od osi ima obodno hitrost $v = \omega r$.

**2. Navor.** Navor sile $\vec{F}$, ki prijemlje v točki s krajevnim vektorjem $\vec{r}$ glede na os (ali izbrano točko), je

$$\vec{M} = \vec{r} \times \vec{F}, \qquad M = rF\sin\varphi = r_\perp F.$$

Tu je $\varphi$ kot med $\vec{r}$ in $\vec{F}$, $r_\perp = r\sin\varphi$ pa **ročica**: pravokotna razdalja od osi do nosilke sile. Enota je $\mathrm{N\,m}$ (ne pišemo J, čeprav je enota enaka). Sila, katere nosilka gre skozi os, nima navora. Smer vektorja $\vec{M}$ določa pravilo desne roke: prsti v smeri vrtenja, palec v smeri navora.

**3. Vztrajnostni moment.** Kinetična energija vrtečega se telesa je vsota prispevkov posameznih delov: $W_k = \sum\tfrac{1}{2}m_iv_i^2 = \tfrac{1}{2}\left(\sum m_ir_i^2\right)\omega^2$. Izraz v oklepaju je **vztrajnostni moment** glede na izbrano os:

$$J = \sum_i m_ir_i^2 \quad\text{oziroma}\quad J = \int r^2\,\mathrm{d}m.$$

Enota je $\mathrm{kg\,m^2}$. Vztrajnostni moment ni odvisen le od mase, ampak tudi od tega, kako daleč od osi je masa razporejena. Nekaj vrednosti za homogena telesa z maso $m$:

| telo | os | $J$ |
|---|---|---|
| tanek obroč, polmer $R$ | skozi središče, pravokotno | $mR^2$ |
| poln valj (kolut), polmer $R$ | geometrijska os | $\tfrac{1}{2}mR^2$ |
| polna krogla, polmer $R$ | skozi središče | $\tfrac{2}{5}mR^2$ |
| tanka palica, dolžina $l$ | skozi središče, pravokotno | $\tfrac{1}{12}ml^2$ |
| tanka palica, dolžina $l$ | skozi krajišče, pravokotno | $\tfrac{1}{3}ml^2$ |

**Steinerjev izrek:** če poznamo $J_{ms}$ glede na os skozi masno središče, je vztrajnostni moment glede na vzporedno os na razdalji $d$ enak $J = J_{ms} + md^2$.

**4. Osnovni zakon vrtenja.** Za vrtenje okoli stalne osi velja analog drugega Newtonovega zakona:

$$\sum M = J\alpha.$$

Primerjava z gibanjem naravnost: sila $\leftrightarrow$ navor, masa $\leftrightarrow$ vztrajnostni moment, pospešek $\leftrightarrow$ kotni pospešek.

**5. Energija in delo pri vrtenju.** Kinetična energija vrtenja je $W_k = \tfrac{1}{2}J\omega^2$, delo navora $A = \int M\,\mathrm{d}\varphi$ (pri stalnem navoru $A = M\varphi$), moč $P = M\omega$. Telo, ki se **kotali** brez spodrsavanja, ima obe vrsti kinetične energije:

$$W_k = \tfrac{1}{2}mv_{ms}^2 + \tfrac{1}{2}J_{ms}\omega^2, \qquad v_{ms} = \omega R.$$

**6. Vrtilna količina.** Za točkasto telo je vrtilna količina $\vec{\Gamma} = \vec{r} \times m\vec{v}$, za togo telo, ki se vrti okoli simetrijske osi, pa $\vec{\Gamma} = J\vec{\omega}$. Enota je $\mathrm{kg\,m^2/s}$. Splošni zakon vrtenja je

$$\sum\vec{M} = \frac{\mathrm{d}\vec{\Gamma}}{\mathrm{d}t}.$$

Če je vsota zunanjih navorov nič, se vrtilna količina **ohranja**: $J_1\omega_1 = J_2\omega_2$. Telo, ki zmanjša vztrajnostni moment (drsalka pritegne roke), se zavrti hitreje.

**7. Ravnovesje togega telesa.** Togo telo miruje, če sta izpolnjena oba pogoja:

$$\sum\vec{F} = 0, \qquad \sum\vec{M} = 0.$$

Navore lahko računamo glede na katero koli točko; najbolje je izbrati točko, skozi katero gre neznana sila, ker ta potem nima navora.

**8. Postopek.** (1) Nariši telo in vse sile z njihovimi prijemališči. (2) Izberi os in pozitivno smer vrtenja. (3) Za vsako silo določi ročico in predznak navora. (4) Za telesa, ki se gibljejo naravnost, zapiši $\sum F = ma$, za vrteča se $\sum M = J\alpha$. (5) Poveži enačbe s kinematično vezjo, na primer $a = \alpha R$ za vrv, ki ne drsi po kolutu.

## Rešeni primeri

### Primer 1 (lažji)

Matico privijamo z vijačnim ključem, dolgim $25\,\mathrm{cm}$. Na konec ključa delujemo s silo $80\,\mathrm{N}$ pod kotom $60^\circ$ glede na ročaj. Kolikšen je navor na matico?

**Podatki:** $r = 25\,\mathrm{cm} = 0{,}25\,\mathrm{m}$, $F = 80\,\mathrm{N}$, $\varphi = 60^\circ$ (med ročajem in silo)
**Iščemo:** navor $M$

:::formula
$M = rF\sin\varphi$
:::

**Rešitev:**

1. Ročica je $r_\perp = r\sin\varphi = 0{,}25\,\mathrm{m} \cdot \sin 60^\circ \approx 0{,}217\,\mathrm{m}$.
2. Navor: $M = r_\perp F = 0{,}217\,\mathrm{m} \cdot 80\,\mathrm{N} \approx 17{,}3\,\mathrm{N\,m}$.
3. Pri pravokotni sili bi bil navor $0{,}25 \cdot 80\,\mathrm{N\,m} = 20\,\mathrm{N\,m}$, kar je največ, kar lahko s to silo dosežemo.
4. Odgovor: navor na matico je približno $17{,}3\,\mathrm{N\,m}$.

### Primer 2

Na kolut (poln homogen valj) z maso $3{,}0\,\mathrm{kg}$ in polmerom $10\,\mathrm{cm}$, ki se lahko brez trenja vrti okoli vodoravne osi, je navita lahka vrvica. Na njej visi utež z maso $0{,}50\,\mathrm{kg}$. Utež spustimo iz mirovanja. Kolikšen je njen pospešek, kolikšna je sila vrvice in kolikšno hitrost ima utež, ko se spusti za $1{,}0\,\mathrm{m}$? Vzemi $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $M_k = 3{,}0\,\mathrm{kg}$, $R = 10\,\mathrm{cm} = 0{,}10\,\mathrm{m}$, $J = \tfrac{1}{2}M_kR^2$, $m = 0{,}50\,\mathrm{kg}$, $v_0 = 0$, $h = 1{,}0\,\mathrm{m}$, $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** pospešek $a$, silo vrvice $F_v$, hitrost $v$ po $1{,}0\,\mathrm{m}$

:::formula
Utež: $mg - F_v = ma$. Kolut: $F_vR = J\alpha$. Vez: $a = \alpha R$. Sledi $a = \dfrac{mg}{m + J/R^2}$; $v^2 = 2ah$.
:::

**Rešitev:**

1. Vztrajnostni moment koluta: $J = \tfrac{1}{2} \cdot 3{,}0\,\mathrm{kg} \cdot (0{,}10\,\mathrm{m})^2 = 0{,}015\,\mathrm{kg\,m^2}$, torej $J/R^2 = 1{,}5\,\mathrm{kg}$.
2. Iz enačbe za kolut in vezi: $F_v = J\alpha/R = (J/R^2)\,a$. Vstavimo v enačbo za utež: $mg = (m + J/R^2)\,a$.
3. Pospešek: $a = \dfrac{0{,}50 \cdot 9{,}81}{0{,}50 + 1{,}5}\,\mathrm{m/s^2} \approx 2{,}45\,\mathrm{m/s^2}$.
4. Sila vrvice: $F_v = m(g - a) = 0{,}50\,\mathrm{kg} \cdot (9{,}81 - 2{,}45)\,\mathrm{m/s^2} \approx 3{,}68\,\mathrm{N}$, kar je manj od teže uteži ($4{,}91\,\mathrm{N}$).
5. Hitrost po $1{,}0\,\mathrm{m}$: $v = \sqrt{2ah} = \sqrt{2 \cdot 2{,}45 \cdot 1{,}0}\,\mathrm{m/s} \approx 2{,}21\,\mathrm{m/s}$.
6. Preizkus z energijo: $mgh = 4{,}905\,\mathrm{J}$; $\tfrac{1}{2}mv^2 + \tfrac{1}{2}J(v/R)^2 \approx 1{,}23\,\mathrm{J} + 3{,}68\,\mathrm{J} = 4{,}91\,\mathrm{J}$. ✓
7. Odgovor: utež pada s pospeškom približno $2{,}45\,\mathrm{m/s^2}$, sila vrvice je približno $3{,}68\,\mathrm{N}$, po $1{,}0\,\mathrm{m}$ pa ima utež hitrost približno $2{,}21\,\mathrm{m/s}$.

### Primer 3 (težji)

Študent sedi na vrtljivem stolu z utežema v iztegnjenih rokah. Skupni vztrajnostni moment je $6{,}0\,\mathrm{kg\,m^2}$, stol se vrti s $0{,}50$ obrata na sekundo. Študent pritegne roke k telesu, s čimer se vztrajnostni moment zmanjša na $2{,}0\,\mathrm{kg\,m^2}$. Kolikšna je nova frekvenca vrtenja? Kako se spremeni kinetična energija in od kod razlika? Trenje v ležaju zanemari.

**Podatki:** $J_1 = 6{,}0\,\mathrm{kg\,m^2}$, $\nu_1 = 0{,}50\,\mathrm{s^{-1}}$, $J_2 = 2{,}0\,\mathrm{kg\,m^2}$, zunanjih navorov ni
**Iščemo:** $\nu_2$, $W_{k1}$, $W_{k2}$ in delo študenta

:::formula
$J_1\omega_1 = J_2\omega_2$, $\omega = 2\pi\nu$, $W_k = \tfrac{1}{2}J\omega^2$
:::

**Rešitev:**

1. Teža in sila ležaja imata nosilke vzdolž osi ali skozi njo, zato nimata navora okoli navpične osi. Vrtilna količina se ohranja.
2. $\nu_2 = \nu_1 J_1/J_2 = 0{,}50\,\mathrm{s^{-1}} \cdot 6{,}0/2{,}0 = 1{,}5\,\mathrm{s^{-1}}$.
3. Kotni hitrosti: $\omega_1 = 2\pi \cdot 0{,}50\,\mathrm{s^{-1}} = \pi\,\mathrm{s^{-1}} \approx 3{,}14\,\mathrm{s^{-1}}$, $\omega_2 = 3\pi\,\mathrm{s^{-1}} \approx 9{,}42\,\mathrm{s^{-1}}$.
4. $W_{k1} = \tfrac{1}{2} \cdot 6{,}0 \cdot 3{,}14^2\,\mathrm{J} \approx 29{,}6\,\mathrm{J}$, $W_{k2} = \tfrac{1}{2} \cdot 2{,}0 \cdot 9{,}42^2\,\mathrm{J} \approx 88{,}8\,\mathrm{J}$.
5. Kinetična energija se je povečala za približno $59{,}2\,\mathrm{J}$. Ker je $W_k = \Gamma^2/(2J)$ in se $\Gamma$ ohranja, se energija poveča za faktor $J_1/J_2 = 3$.
6. Odgovor: stol se vrti s $1{,}5$ obrata na sekundo, kinetična energija naraste s $29{,}6\,\mathrm{J}$ na $88{,}8\,\mathrm{J}$; razliko, približno $59\,\mathrm{J}$, opravijo študentove mišice, ko vlečejo uteži proti osi.

## Pogoste napake

- **Navor kot $rF$ brez kota.** Pomembna je pravokotna razdalja do nosilke sile. Sila vzdolž ročaja ključa nima navora.
- **Vztrajnostni moment kot lastnost telesa.** $J$ je odvisen od izbire osi. Palica ima okoli krajišča štirikrat večji $J$ kot okoli središča.
- **Pozabljen vztrajnostni moment koluta.** Pri uteži na vrvici, navito na kolut, pospešek ni $g$ in sila vrvice ni $mg$; del energije gre v vrtenje koluta.
- **Kotaljenje brez energije vrtenja.** Pri kotaljenju je $W_k = \tfrac{1}{2}mv^2 + \tfrac{1}{2}J\omega^2$, zato se valj po klancu spusti počasneje kot klada, ki drsi brez trenja.
- **Ohranitev kinetične energije namesto vrtilne količine.** Ko se $J$ spremeni zaradi notranjih sil, se ohranja $\Gamma = J\omega$, kinetična energija pa se spremeni.
- **Obrati in radiani.** V $W_k = \tfrac{1}{2}J\omega^2$ in $v = \omega R$ vstavi $\omega$ v $\mathrm{s^{-1}}$ (rad/s), ne frekvence v obratih na sekundo.

## Povzetek

- Navor $\vec{M} = \vec{r}\times\vec{F}$, $M = r_\perp F$; enota $\mathrm{N\,m}$.
- Vztrajnostni moment $J = \sum m_ir_i^2 = \int r^2\,\mathrm{d}m$; obroč $mR^2$, valj $\tfrac{1}{2}mR^2$, krogla $\tfrac{2}{5}mR^2$, palica $\tfrac{1}{12}ml^2$; Steiner $J = J_{ms} + md^2$.
- Zakon vrtenja: $\sum M = J\alpha$, splošno $\sum\vec{M} = \mathrm{d}\vec{\Gamma}/\mathrm{d}t$.
- Energija vrtenja $\tfrac{1}{2}J\omega^2$, delo $M\varphi$, moč $M\omega$; kotaljenje: $\tfrac{1}{2}mv^2 + \tfrac{1}{2}J\omega^2$.
- Vrtilna količina $\Gamma = J\omega$ se brez zunanjih navorov ohranja: $J_1\omega_1 = J_2\omega_2$.
- Ravnovesje: $\sum\vec{F} = 0$ in $\sum\vec{M} = 0$.

## Drugače: Na sliki

Vrata gledamo od zgoraj. Tečaji so os, sila deluje na kljuko:

```
  os (tečaji)
   O=========================[kljuka]
   |<------------- r -------------->|
                                    ^
                                    | F (pravokotno: največji navor)
```

Če silo nagnemo proti tečajem, se ročica (pravokotna razdalja od osi do nosilke sile) skrajša in vrata se odpirajo težje. Če pritisnemo ob tečajih, je ročica skoraj nič in vrata se ne premaknejo.

Vztrajnostni moment si predstavljaj z dvema enako težkima kolesoma: pri prvem je masa v obroču daleč od osi, pri drugem zbrana v pestu. Prvo je težje zavrteti in težje ustaviti, ker vsak del mase prispeva sorazmerno s $r^2$.

Tabela analogij: $x \leftrightarrow \varphi$, $v \leftrightarrow \omega$, $a \leftrightarrow \alpha$, $m \leftrightarrow J$, $F \leftrightarrow M$, $G = mv \leftrightarrow \Gamma = J\omega$, $\tfrac{1}{2}mv^2 \leftrightarrow \tfrac{1}{2}J\omega^2$.

## Drugače: Iz vsakdanjega življenja

**Podlaket kot vzvod.** Ko v dlani držimo utež z maso $5{,}0\,\mathrm{kg}$ na razdalji $35\,\mathrm{cm}$ od komolca, biceps pa je pripet $4{,}0\,\mathrm{cm}$ od komolca, iz ravnovesja navorov dobimo silo mišice $F = 5{,}0 \cdot 9{,}81 \cdot 0{,}35/0{,}040\,\mathrm{N} \approx 430\,\mathrm{N}$ (težo podlakti zanemarimo). Mišica mora delovati s skoraj devetkrat večjo silo od teže uteži, zato pa se dlan premakne devetkrat dlje kot kita.

**Kotaljenje po klancu.** S klanca, visokega $1{,}0\,\mathrm{m}$, spustimo polno kroglo in poln valj. Na dnu ima krogla hitrost $\sqrt{10gh/7} \approx 3{,}74\,\mathrm{m/s}$, valj $\sqrt{4gh/3} \approx 3{,}62\,\mathrm{m/s}$, klada, ki bi drsela brez trenja, pa $\sqrt{2gh} \approx 4{,}43\,\mathrm{m/s}$. Masa in polmer se pokrajšata, pomembna je le oblika.

**Pirueta in skok v vodo.** Drsalka in skakalec v vodo pritegneta roke in noge k telesu, da se zavrtita hitreje, ter jih iztegneta, da se upočasnita. Vrtilna količina se med skokom ohranja.

**Vrtenje molekul.** Dvoatomna molekula, na primer $\mathrm{N_2}$, se lahko vrti okoli dveh osi, pravokotnih na vez. Energija vrtenja prispeva k notranji energiji plina, zato imajo dvoatomni plini večjo toplotno kapaciteto kot enoatomni. Vztrajnostni moment molekule določimo iz rotacijskih spektrov.

## Drugače: Korak za korakom s številkami

Kolikšen je vztrajnostni moment palice z maso $1{,}2\,\mathrm{kg}$ in dolžino $1{,}0\,\mathrm{m}$ okoli osi skozi krajišče?

1. **Okoli središča:** $J_{ms} = \tfrac{1}{12}ml^2 = \tfrac{1}{12} \cdot 1{,}2 \cdot 1{,}0^2\,\mathrm{kg\,m^2} = 0{,}10\,\mathrm{kg\,m^2}$.
2. **Razdalja med osema:** $d = l/2 = 0{,}50\,\mathrm{m}$.
3. **Steinerjev izrek:** $J = J_{ms} + md^2 = 0{,}10 + 1{,}2 \cdot 0{,}25 = 0{,}10 + 0{,}30 = 0{,}40\,\mathrm{kg\,m^2}$.
4. **Preizkus s formulo:** $\tfrac{1}{3}ml^2 = 0{,}40\,\mathrm{kg\,m^2}$. ✓
5. **Pomen:** isto palico je okoli krajišča štirikrat težje pospešiti kot okoli središča, ker je masa v povprečju dlje od osi.

## Drugače: Bolj natančno

**Izpeljava $\sum M = J\alpha$.** Za delec $i$ togega telesa velja tangentno $F_{i,t} = m_ia_{i,t} = m_ir_i\alpha$. Pomnožimo z $r_i$ in seštejemo: $\sum r_iF_{i,t} = \left(\sum m_ir_i^2\right)\alpha$. Na levi so navori zunanjih in notranjih sil; notranje sile delujejo v parih vzdolž zveznice, zato se njihovi navori odštejejo. Ostane $\sum M^{\text{zun}} = J\alpha$.

**Zakon vrtilne količine.** Za delec je $\vec{\Gamma} = \vec{r}\times m\vec{v}$. Odvajamo: $\dot{\vec{\Gamma}} = \dot{\vec{r}}\times m\vec{v} + \vec{r}\times m\dot{\vec{v}} = \vec{v}\times m\vec{v} + \vec{r}\times\vec{F} = \vec{M}$, ker je vektorski produkt vektorja s samim seboj nič.

**Izračun vztrajnostnega momenta z integralom.** Za palico z linearno gostoto $\lambda = m/l$ in osjo skozi krajišče je $J = \int_0^l x^2\lambda\,\mathrm{d}x = \lambda l^3/3 = \tfrac{1}{3}ml^2$. Za poln valj razdelimo telo na tanke cilindrične lupine s polmerom $r$ in maso $\mathrm{d}m = \frac{m}{\pi R^2}2\pi r\,\mathrm{d}r$; integral $\int_0^R r^2\,\mathrm{d}m$ da $\tfrac{1}{2}mR^2$.

**Dokaz Steinerjevega izreka.** Naj bo $\vec{r}_i = \vec{d} + \vec{r}_i\,'$, kjer je $\vec{r}_i\,'$ merjen od masnega središča (pravokotno na os). Potem je $\sum m_ir_i^2 = md^2 + 2\vec{d}\cdot\sum m_i\vec{r}_i\,' + \sum m_ir_i'^2$. Srednji člen je nič po definiciji masnega središča, zato $J = md^2 + J_{ms}$.

**Tenzor vztrajnostnega momenta.** V splošnem $\vec{\Gamma}$ ni vzporeden z $\vec{\omega}$: velja $\vec{\Gamma} = \underline{J}\,\vec{\omega}$, kjer je $\underline{J}$ simetrična matrika $3\times 3$. V koordinatnem sistemu glavnih osi je matrika diagonalna. Če se telo vrti okoli glavne osi, je $\vec{\Gamma} \parallel \vec{\omega}$; sicer ležaji čutijo navor, kar se kaže kot opletanje neuravnoteženih koles.

## Preveri se

? Na kljuko vrat, $0{,}50\,\mathrm{m}$ od tečajev, delujemo s silo $20\,\mathrm{N}$ pravokotno na vrata. Kolikšen je navor?
- $40\,\mathrm{N\,m}$
+ $10\,\mathrm{N\,m}$
- $5{,}0\,\mathrm{N\,m}$
> $M = rF = 0{,}50\,\mathrm{m} \cdot 20\,\mathrm{N} = 10\,\mathrm{N\,m}$. $40\,\mathrm{N\,m}$ dobiš, če silo deliš z ročico namesto množiš.

? Kolikšen je vztrajnostni moment tanke palice z maso $m$ in dolžino $l$ glede na os skozi krajišče, pravokotno na palico?
- $\tfrac{1}{12}ml^2$
- $ml^2$
+ $\tfrac{1}{3}ml^2$
> Po Steinerjevem izreku je $J = \tfrac{1}{12}ml^2 + m(l/2)^2 = \tfrac{1}{3}ml^2$. $\tfrac{1}{12}ml^2$ velja za os skozi središče.

? S klanca hkrati spustimo poln valj, polno kroglo in tanek obroč. Katero telo se, če se kotalijo brez spodrsavanja, prvo pripelje na dno?
+ Krogla.
- Obroč.
- Vsa hkrati.
> Pri kotaljenju je $v^2 = 2gh/(1 + J/(mR^2))$. Krogla ima najmanjše razmerje $J/(mR^2) = 2/5$, zato je najhitrejša; obroč z razmerjem $1$ je najpočasnejši.

? Drsalka med pirueto pritegne roke k telesu. Kaj se zgodi z njeno vrtilno količino in kinetično energijo?
- Vrtilna količina se poveča, kinetična energija ostane enaka.
+ Vrtilna količina ostane enaka, kinetična energija se poveča.
- Obe ostaneta enaki.
> Zunanjih navorov ni, zato se $\Gamma = J\omega$ ohranja. Ker je $W_k = \Gamma^2/(2J)$ in se $J$ zmanjša, se kinetična energija poveča; razliko opravijo mišice.
