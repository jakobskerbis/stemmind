---
stanje: osnutek
demo: trikotnik
avtor: AI
---

## Zakaj se tega učimo

Trikotnik je najpreprostejši lik, ki ga omejujejo daljice, a skoraj vsa ravninska geometrija sloni nanj. Vsak večkotnik lahko razrežemo na trikotnike, zato s tem, kar izveš o trikotniku, računaš tudi s štirikotniki, peterokotniki in drugimi liki. Trikotnik je tudi »toga« oblika: če poznaš dolžine treh stranic, je oblika trikotnika natanko določena. Zato so mostovi, ogrodja streh in žerjavi grajeni iz trikotnikov, štirikotnik iz palic pa bi se zvil.

Iz osnovne šole že poznaš vrste trikotnikov, vsoto notranjih kotov in kote ob premicah. V tej lekciji to znanje poglobimo v tri smeri:

- **kdaj sta dva trikotnika enaka** (skladnost) in kako to dokažemo z minimalnim številom podatkov,
- **katere dolžine stranic sploh lahko tvorijo trikotnik** (trikotniška neenakost),
- **značilne točke trikotnika** (težišče, središči včrtane in očrtane krožnice, višinska točka), ki jih potrebuješ pri konstrukcijah, dokazih in računih.

## Razlaga

**1. Oznake.** Oglišča trikotnika označimo z $A$, $B$, $C$, stranice z $a$, $b$, $c$ in notranje kote z $\alpha$, $\beta$, $\gamma$. Stranica $a$ leži nasproti oglišča $A$ in kota $\alpha$, stranica $b$ nasproti $B$, stranica $c$ nasproti $C$. Obseg je $o = a + b + c$, polobseg pa $s = \dfrac{a+b+c}{2}$.

**2. Koti v trikotniku.** Vsota notranjih kotov je vedno $180^\circ$:

$$\alpha + \beta + \gamma = 180^\circ$$

Razlog: skozi oglišče $C$ potegnemo vzporednico stranici $c$. Pri $C$ nastaneta dva kota, ki sta kot izmenična kota ob vzporednicah enaka kotoma $\alpha$ in $\beta$, skupaj z $\gamma$ pa tvorijo iztegnjeni kot $180^\circ$.

**Zunanji kot** pri oglišču je sokot notranjega kota, na primer $\gamma' = 180^\circ - \gamma$. Velja: **zunanji kot je enak vsoti obeh nenaležnih notranjih kotov**, torej $\gamma' = \alpha + \beta$.

**3. Stranice in koti.** Nasproti večje stranice leži večji kot: $a > b \Leftrightarrow \alpha > \beta$. V enakokrakem trikotniku sta kota ob osnovnici enaka, v enakostraničnem je vsak kot $60^\circ$. V pravokotnem trikotniku sta kateti $a$, $b$ in hipotenuza $c$ (nasproti pravega kota), veljata pa Pitagorov izrek $a^2 + b^2 = c^2$ in Talesov izrek (obodni kot nad premerom je pravi).

**4. Trikotniška neenakost.** Trikotnik s stranicami $a$, $b$, $c$ obstaja natanko tedaj, ko je vsaka stranica manjša od vsote drugih dveh:

$$a < b + c, \qquad b < a + c, \qquad c < a + b$$

Če poznamo dve stranici $a$ in $b$, za tretjo velja $|a - b| < c < a + b$. Razlog: najkrajša pot med dvema točkama je ravna daljica, zato je stranica $c$ krajša od poti prek tretjega oglišča.

**5. Skladnost.** Trikotnika sta **skladna** ($\triangle ABC \cong \triangle A_1B_1C_1$), če se ujemata v vseh stranicah in vseh kotih, torej ju lahko s premikom, vrtenjem in morda zrcaljenjem prekrijemo. Za dokaz ni treba preveriti vseh šestih podatkov. Dovolj je eden od izrekov:

| Izrek | Ujemanje v | Opomba |
|---|---|---|
| SSS | vseh treh stranicah | |
| SKS | dveh stranicah in kotu med njima | kot mora biti med stranicama |
| KSK | stranici in obeh kotih ob njej | |
| SsK | dveh stranicah in kotu nasproti **daljše** od njiju | kot nasproti krajše stranice ne zadošča |

Pri ujemanju moramo paziti, katera oglišča si ustrezajo. Skladnost zapišemo tako, da so oglišča v istem vrstnem redu.

**6. Značilne točke trikotnika.**

| Daljica oziroma premica | Presečišče | Lastnost presečišča |
|---|---|---|
| simetrale stranic | središče $O$ očrtane krožnice | enako oddaljeno od vseh treh oglišč, razdalja je polmer $R$ |
| simetrale kotov | središče $I$ včrtane krožnice | enako oddaljeno od vseh treh stranic, razdalja je polmer $r$ |
| težiščnice (oglišče do sredine nasprotne stranice) | težišče $T$ | deli vsako težiščnico v razmerju $2:1$ od oglišča |
| višine (pravokotnice iz oglišča na nasprotno stranico) | višinska točka $V$ | |

Presečišča so res ena sama točka, ker se tri premice vsake vrste vedno sekajo v skupni točki. Lega se spreminja z obliko trikotnika:

- Težišče $T$ in središče $I$ sta vedno znotraj trikotnika.
- Pri ostrokotnem trikotniku sta $O$ in $V$ znotraj, pri pravokotnem je $O$ na sredini hipotenuze, $V$ pa v oglišču pravega kota, pri topokotnem sta oba zunaj.

**7. Ploščina in včrtana krožnica.** Ploščina trikotnika je $S = \dfrac{a \cdot v_a}{2}$. Središče $I$ včrtane krožnice je od vseh stranic oddaljeno za $r$, zato trikotnik razpade na tri manjše trikotnike z višinami $r$ in osnovnicami $a$, $b$, $c$:

$$S = \frac{a r}{2} + \frac{b r}{2} + \frac{c r}{2} = r \cdot s$$

Od tod $r = \dfrac{S}{s}$.

## Rešeni primeri

### Primer 1 (lažji)

V trikotniku $ABC$ je kot $\alpha = 48^\circ$ in kot $\beta = 75^\circ$. Izračunaj kot $\gamma$ in zunanji kot pri oglišču $C$.

**Podatki:** $\alpha = 48^\circ$, $\beta = 75^\circ$
**Iščemo:** notranji kot $\gamma$ in zunanji kot $\gamma'$ pri $C$

:::formula
$\alpha + \beta + \gamma = 180^\circ$, zunanji kot $\gamma' = 180^\circ - \gamma = \alpha + \beta$
:::

**Rešitev:**

1. Notranji kot: $\gamma = 180^\circ - 48^\circ - 75^\circ = 57^\circ$.
2. Zunanji kot: $\gamma' = 180^\circ - 57^\circ = 123^\circ$.
3. Preverimo z drugim izrazom: $\alpha + \beta = 48^\circ + 75^\circ = 123^\circ$, kar se ujema.
4. Odgovor: $\gamma = 57^\circ$, zunanji kot pri $C$ je $123^\circ$.

### Primer 2 (srednji)

Trikotnik $ABC$ ima stranici $a = 5\,\text{cm}$ in $b = 7\,\text{cm}$ ter kot $\gamma = 50^\circ$ med njima. Trikotnik $DEF$ ima stranici $d = 7\,\text{cm}$ in $f = 5\,\text{cm}$ ter kot $\varepsilon = 50^\circ$ med njima. V trikotniku $ABC$ je $\beta = 62^\circ$. Ali sta trikotnika skladna? Če sta, zapiši, katera oglišča si ustrezajo, in izračunaj kote $\delta$, $\varphi$ ter $\alpha$.

**Podatki:** $ABC$: $a = 5\,\text{cm}$, $b = 7\,\text{cm}$, $\gamma = 50^\circ$, $\beta = 62^\circ$; $DEF$: $d = 7\,\text{cm}$, $f = 5\,\text{cm}$, $\varepsilon = 50^\circ$
**Iščemo:** ali je $\triangle ABC \cong \triangle DEF$, ujemajoča se oglišča, kote $\delta$, $\varphi$, $\alpha$

:::formula
Izrek SKS: trikotnika sta skladna, če se ujemata v dveh stranicah in kotu med njima. Vsota kotov: $\alpha + \beta + \gamma = 180^\circ$.
:::

**Rešitev:**

1. Kot $\gamma$ leži med stranicama $a$ in $b$ (to sta stranici, ki se stikata v $C$). Kot $\varepsilon$ leži med stranicama $d$ in $f$ (stikata se v $E$).
2. Stranici se ujemata: $a = 5\,\text{cm} = f$ in $b = 7\,\text{cm} = d$, kota med njima pa sta enaka: $\gamma = 50^\circ = \varepsilon$. Po izreku SKS sta trikotnika skladna.
3. Ujemanje oglišč: $A \leftrightarrow F$ (nasproti obeh je stranica $5\,\text{cm}$), $B \leftrightarrow D$ (nasproti obeh $7\,\text{cm}$), $C \leftrightarrow E$. Zapišemo $\triangle ABC \cong \triangle FDE$.
4. Ujemajoči se koti so enaki: $\delta = \beta = 62^\circ$.
5. V trikotniku $ABC$: $\alpha = 180^\circ - 50^\circ - 62^\circ = 68^\circ$, zato je $\varphi = \alpha = 68^\circ$.
6. Preverimo v $DEF$: $\delta + \varepsilon + \varphi = 62^\circ + 50^\circ + 68^\circ = 180^\circ$.
7. Odgovor: trikotnika sta skladna po izreku SKS, $\delta = 62^\circ$, $\varphi = 68^\circ$, $\alpha = 68^\circ$.

### Primer 3 (težji)

Pravokotni trikotnik ima kateti $a = 6\,\text{cm}$ in $b = 8\,\text{cm}$. Izračunaj hipotenuzo $c$, polmer $R$ očrtane krožnice, polmer $r$ včrtane krožnice in razdaljo težišča $T$ od oglišča $C$ s pravim kotom.

**Podatki:** pravokotni trikotnik, $a = 6\,\text{cm}$, $b = 8\,\text{cm}$, pravi kot pri $C$
**Iščemo:** hipotenuzo $c$, polmera $R$ in $r$, razdaljo $|TC|$

:::formula
$c^2 = a^2 + b^2$, $\;R = \dfrac{c}{2}$ (Talesov izrek), $\;S = \dfrac{a b}{2}$, $\;S = r \cdot s$, $\;|TC| = \dfrac{2}{3}\, t_c$
:::

**Rešitev:**

1. Hipotenuza: $c = \sqrt{6^2 + 8^2} = \sqrt{100} = 10\,\text{cm}$.
2. Po Talesovem izreku leži $C$ na krožnici s premerom $AB$, zato je središče $O$ očrtane krožnice na sredini hipotenuze: $R = \dfrac{c}{2} = 5\,\text{cm}$.
3. Ploščina: $S = \dfrac{6 \cdot 8}{2} = 24\,\text{cm}^2$, polobseg $s = \dfrac{6 + 8 + 10}{2} = 12\,\text{cm}$.
4. Polmer včrtane krožnice: $r = \dfrac{S}{s} = \dfrac{24}{12} = 2\,\text{cm}$.
5. Težiščnica $t_c$ iz oglišča $C$ vodi do sredine hipotenuze, torej do središča $O$, zato je $t_c = R = 5\,\text{cm}$.
6. Težišče deli težiščnico v razmerju $2:1$ od oglišča: $|TC| = \dfrac{2}{3} \cdot 5\,\text{cm} = \dfrac{10}{3}\,\text{cm} \approx 3{,}33\,\text{cm}$.
7. Odgovor: $c = 10\,\text{cm}$, $R = 5\,\text{cm}$, $r = 2\,\text{cm}$, $|TC| = \dfrac{10}{3}\,\text{cm} \approx 3{,}33\,\text{cm}$.

## Pogoste napake

- **Kot, ki ni med stranicama, pri SKS.** Učenci ugotovijo, da se trikotnika ujemata v dveh stranicah in nekem kotu, in zaključijo na skladnost. Razlog napake: kot nasproti ene od stranic ne določa trikotnika enolično. Pravilno: pri SKS mora biti kot natanko med znanima stranicama. Če kot leži nasproti ene od njiju, uporabi SsK in preveri, da leži nasproti **daljše** od obeh stranic.
- **Preverjanje neenakosti le za eno stranico.** Za trojico $4$, $5$, $10$ nekdo preveri samo $5 < 4 + 10$ in sklene, da trikotnik obstaja. Razlog: trikotniška neenakost mora veljati za vse tri stranice hkrati. Pravilno: primerjaj **najdaljšo** stranico z vsoto drugih dveh. Če je ta vsota večja, so izpolnjeni vsi pogoji.
- **Zamenjava višine in težiščnice.** Višina je pravokotna na nasprotno stranico, težiščnica pa gre do njene sredine. Razlog: obe potegnemo iz oglišča in sta pogosto podobni. Pravilno: pri težiščnici pomeni »sredina«, pri višini »pravi kot«. Sovpadata le v enakokrakem trikotniku za osnovnico.
- **Težišče deli težiščnico v razmerju 1:1.** Razlog: iz sredine prenesemo vtis, da je težišče »na polovici«. Pravilno: od oglišča do $T$ je dve tretjini težiščnice, od $T$ do sredine stranice pa ena tretjina. Za težiščnico dolžine $9\,\text{cm}$ je $|AT| = 6\,\text{cm}$.
- **Višinska točka vedno znotraj trikotnika.** Razlog: pri ostrokotnih trikotnikih, ki jih najpogosteje rišemo, to drži. Pravilno: pri topokotnem trikotniku se nosilke višin sekajo zunaj trikotnika, pri pravokotnem je $V$ v oglišču pravega kota.

## Povzetek

- Vsota notranjih kotov: $\alpha + \beta + \gamma = 180^\circ$; zunanji kot je enak vsoti nenaležnih notranjih.
- Trikotniška neenakost: $|a - b| < c < a + b$ (za vse tri stranice).
- Skladnost: SSS, SKS, KSK, SsK (kot nasproti daljše stranice).
- Simetrale stranic dajo središče očrtane krožnice, simetrale kotov središče včrtane krožnice.
- Težiščnice se sekajo v težišču, ki deli težiščnico $2:1$ od oglišča; višine se sekajo v višinski točki.
- Včrtana krožnica: $r = \dfrac{S}{s}$; v pravokotnem trikotniku je $R = \dfrac{c}{2}$.
- Pitagorov izrek v pravokotnem trikotniku: $a^2 + b^2 = c^2$.

## Drugače: Na sliki

Odpri simulacijo spodaj »Trikotnik: stranice in koti« in v njej premikaj oglišča trikotnika. Opazuj, kaj se spremeni in kaj ostane enako.

- Pri premikanju oglišč se posamezni koti spreminjajo, njihova vsota pa ves čas kaže $180^\circ$. Če oglišče $C$ potegneš skoraj na premico $AB$, se $\gamma$ približuje $180^\circ$, $\alpha$ in $\beta$ pa $0^\circ$.
- Zunanji kot pri $C$ je vedno enak vsoti kotov pri $A$ in $B$.
- V simulaciji spodaj »Značilne točke trikotnika« opazuj, kje so štiri točke. Pri ostrokotnem trikotniku so vse znotraj. Ko trikotnik »odpreš« v topokotnega, se središče očrtane krožnice in višinska točka premakneta ven, težišče in središče včrtane krožnice pa ostaneta znotraj.
- Ko oglišče poravnaš v pravokotni trikotnik, središče očrtane krožnice pristane na sredini najdaljše stranice, višinska točka pa na pravem kotu.

| Vrsta trikotnika | $O$ (očrtana) | $V$ (višinska točka) |
|---|---|---|
| ostrokotni | znotraj | znotraj |
| pravokotni | sredina hipotenuze | oglišče pravega kota |
| topokotni | zunaj | zunaj |

## Drugače: Iz vsakdanjega življenja

**Težišče** je točka, v kateri lahko trikotnik iz kartona uravnovesiš na konici svinčnika. Najdeš ga tako, da trikotnik prepogneš (da dobiš sredine stranic) in potegneš težiščnice.

**Središče očrtane krožnice** potrebuješ, ko iščeš točko, enako oddaljeno od treh krajev. Predstavljaj si tri vasi: kjer bi postavili skupni zvonik ali oddajnik, da bi bil enako daleč od vseh, je središče očrtane krožnice. Najdeš ga s simetralama dveh povezav med vasmi.

**Središče včrtane krožnice** je točka, enako oddaljena od treh cest, ki tvorijo trikotnik. Tam bi bil najboljši položaj za fontano na trikotnem trgu, ki naj bo od vseh robov enako daleč. Največji okrogel vodnjak, ki ga lahko postaviš na trg, ima polmer $r$.

**Togost trikotnika** vidiš pri kolesu in pri ogrodju strehe. Okvir kolesa je sestavljen iz trikotnikov, ker se jih ne da deformirati, ne da bi se spremenila dolžina kakšne palice. Če trikotnik zamenjaš s štirikotnikom iz palic, se bo vsak vogal zvil.

## Drugače: Korak za korakom s številkami

Vzemimo trikotnik s stranicami $a = 13\,\text{cm}$, $b = 14\,\text{cm}$, $c = 15\,\text{cm}$ in sledimo korakom.

1. **Ali trikotnik obstaja?** Najdaljša stranica je $15\,\text{cm}$, vsota drugih dveh je $13 + 14 = 27\,\text{cm}$. Ker je $15 < 27$, trikotnik obstaja.
2. **Obseg in polobseg:** $o = 13 + 14 + 15 = 42\,\text{cm}$, $s = 21\,\text{cm}$.
3. **Ploščina** (Heronov obrazec, tu le za ilustracijo): $S = \sqrt{21 \cdot (21-13)(21-14)(21-15)} = \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = \sqrt{7056} = 84\,\text{cm}^2$.
4. **Polmer včrtane krožnice:** $r = \dfrac{S}{s} = \dfrac{84}{21} = 4\,\text{cm}$.
5. **Višina na stranico $b$:** iz $S = \dfrac{b \cdot v_b}{2}$ sledi $v_b = \dfrac{2 \cdot 84}{14} = 12\,\text{cm}$.
6. **Kota ne poznamo, a vemo, da leži največji kot nasproti najdaljše stranice**, to je pri oglišču $C$ nasproti $c = 15\,\text{cm}$, najmanjši pa nasproti $a = 13\,\text{cm}$.

Pri vsakem koraku preveri enote ($\text{cm}$ in $\text{cm}^2$) in smiselnost: polmer včrtane krožnice mora biti manjši od vsake višine.

## Drugače: Bolj natančno

**Zakaj se simetrale stranic sekajo v eni točki?** Točke simetrale daljice $AB$ so natanko tiste, ki so enako oddaljene od $A$ in $B$. Presečišče simetral stranic $AB$ in $BC$ je zato točka $O$ z $|OA| = |OB|$ in $|OB| = |OC|$, torej tudi $|OA| = |OC|$. Točka $O$ leži zato tudi na simetrali stranice $AC$. Enako dokažemo za simetrale kotov, kjer so točke simetrale kota natanko tiste, ki so enako oddaljene od obeh krakov.

**Eulerjeva premica.** V vsakem trikotniku, ki ni enakostraničen, ležijo $O$, $T$ in $V$ na isti premici in velja $|VT| = 2\,|TO|$. Preizkus na trikotniku s katetama $6$ in $8$: postavimo $C = (0,0)$, $B = (6,0)$, $A = (0,8)$. Tedaj je $O = (3,4)$ (sredina hipotenuze), $T = \left(2, \tfrac{8}{3}\right)$ in $V = (0,0)$. Vse tri točke ležijo na premici $y = \tfrac{4}{3}x$ (preveri: $\tfrac{4}{3} \cdot 3 = 4$, $\tfrac{4}{3} \cdot 2 = \tfrac{8}{3}$), $T$ leži med $V$ in $O$, razdalji pa sta $|VT| = \sqrt{2^2 + \left(\tfrac{8}{3}\right)^2} = \tfrac{10}{3}$ in $|TO| = \sqrt{1^2 + \left(\tfrac{4}{3}\right)^2} = \tfrac{5}{3}$, torej res $|VT| = 2\,|TO|$.

**Težišče kot povprečje.** Koordinate težišča so povprečje koordinat oglišč, $T = \dfrac{A + B + C}{3}$, kar se ujema s številkami zgoraj: $\dfrac{0 + 6 + 0}{3} = 2$ in $\dfrac{0 + 0 + 8}{3} = \dfrac{8}{3}$. Zato je težišče tudi fizično težišče homogene trikotne plošče.

**Skladnost in izrek SsK.** Če sta znani stranici $a$ in $b$ ter kot $\alpha$ nasproti $a$ in je $a < b$, lahko obstajata dva različna trikotnika (kar vidiš na konstrukciji s šestilom). Zato SsK zahteva, da kot leži nasproti daljše stranice, takrat je rešitev ena sama.

## Preveri se

? V trikotniku sta dva kota $50^\circ$ in $70^\circ$. Kolikšen je tretji kot?
- $120^\circ$
+ $60^\circ$
- $40^\circ$
> Vsota kotov je $180^\circ$, zato je tretji kot $180^\circ - 50^\circ - 70^\circ = 60^\circ$. Vrednost $120^\circ$ je vsota prvih dveh kotov, torej zunanji kot ob tretjem kotu.

? Ali obstaja trikotnik s stranicami $4\,\text{cm}$, $5\,\text{cm}$ in $10\,\text{cm}$?
- Da, ker so vse stranice pozitivne.
+ Ne, ker je $4 + 5 < 10$.
- Da, ker je $4 + 10 > 5$.
> Najdaljša stranica ($10\,\text{cm}$) mora biti krajša od vsote drugih dveh ($9\,\text{cm}$), kar ne drži, zato trikotnik ne obstaja.

? Težiščnica trikotnika je dolga $9\,\text{cm}$. Kako daleč od oglišča je težišče?
- $3\,\text{cm}$
- $4{,}5\,\text{cm}$
+ $6\,\text{cm}$
> Težišče deli težiščnico v razmerju $2:1$ od oglišča, torej je od oglišča oddaljeno $\dfrac{2}{3} \cdot 9\,\text{cm} = 6\,\text{cm}$.

? Katere premice se sekajo v središču očrtane krožnice trikotnika?
- simetrale kotov
- težiščnice
- višine
+ simetrale stranic
> Središče očrtane krožnice je enako oddaljeno od vseh treh oglišč, torej leži na simetralah stranic. Simetrale kotov se sekajo v središču včrtane krožnice.

:::simboli
\alpha, \beta, \gamma | notranji koti trikotnika | | |
\gamma' | zunanji kot pri oglišču C | \gamma' = 180^\circ - \gamma = \alpha + \beta | |
a, b, c | stranice trikotnika | | | v pravokotnem trikotniku je c hipotenuza
S | ploščina trikotnika | S = r \cdot s | |
r | polmer včrtane krožnice | r = \frac{S}{s} | |
s | polobseg | s = \frac{a + b + c}{2} | |
R | polmer očrtane krožnice | | | v pravokotnem trikotniku R = c/2
T | težišče | | | deli težiščnico v razmerju 2 : 1
C | oglišče trikotnika | | | v primeru oglišče s pravim kotom
t_c | težiščnica iz oglišča C | | |
:::
