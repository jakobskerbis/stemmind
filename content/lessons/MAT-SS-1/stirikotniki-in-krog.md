---
stanje: osnutek
demo: stirikotnik
avtor: AI
---

## Zakaj se tega učimo

Okoli sebe vidiš pravokotnike (zaslon, vrata, list papirja), paralelograme (škarjasti mehanizmi), trapeze (obliko mnogih streh in nasipov) in kroge (kolesa, kovanci, krožniki). Za vsak lik moraš znati povedati, **katere lastnosti ima** in **kako izračunaš njegovo ploščino**. Koliko ploščic potrebuješ za tla, koliko barve za zid, koliko pice dobiš v večji pici? Na vsa ta vprašanja odgovarjajo ploščine in obsegi.

V tej lekciji nadaljujemo s tem, kar že veš o trikotniku: vsak štirikotnik lahko z diagonalo razrežemo na dva trikotnika, zato se njegove lastnosti povežejo z lastnostmi trikotnika. Pri krogu pa dodamo še kote v krogu: središčni in obodni kot ter Talesov izrek. Z njimi boš rešil marsikatero geometrijsko nalogo na tekmovanjih in pri maturi.

## Razlaga

**1. Štirikotnik.** Štirikotnik $ABCD$ ima štiri oglišča, štiri stranice in dve **diagonali** ($e = AC$, $f = BD$). Diagonala ga razdeli na dva trikotnika, zato je vsota notranjih kotov enaka $2 \cdot 180^\circ$:

$$\alpha + \beta + \gamma + \delta = 360^\circ$$

**2. Vrste štirikotnikov in njihove lastnosti.**

| Lik | Definicija | Lastnosti |
|---|---|---|
| **paralelogram** | oba para nasprotnih stranic vzporedna | nasprotni stranici sta enaki, nasprotna kota enaka, sosednja kota se dopolnjujeta do $180^\circ$, diagonali se razpolavljata |
| **pravokotnik** | paralelogram s pravimi koti | diagonali sta enako dolgi |
| **romb** | paralelogram z enakimi stranicami | diagonali sta pravokotni in razpolavljata kote |
| **kvadrat** | pravokotnik z enakimi stranicami (hkrati romb) | ima vse lastnosti pravokotnika in romba |
| **trapez** | en par vzporednih stranic (osnovnici $a$, $c$, kraka $b$, $d$) | srednjica je vzporedna osnovnicama |
| **deltoid** | dva para sosednjih enakih stranic | diagonali sta pravokotni, ena diagonala je simetrala druge |

Lastnosti so »podedovane«: vsak kvadrat je romb, vsak romb je paralelogram, paralelogram pa ni nujno pravokotnik. Če si nalogo ogledaš s te strani, pogosto prihraniš dokaz.

**3. Ploščine in obsegi štirikotnikov.**

| Lik | Ploščina | Obseg |
|---|---|---|
| pravokotnik | $S = a \cdot b$ | $o = 2(a + b)$ |
| kvadrat | $S = a^2$ | $o = 4a$ |
| paralelogram | $S = a \cdot v_a$ | $o = 2(a + b)$ |
| romb | $S = \dfrac{e \cdot f}{2}$ ali $a \cdot v$ | $o = 4a$ |
| trapez | $S = \dfrac{(a + c)\, v}{2}$ | $o = a + b + c + d$ |
| deltoid | $S = \dfrac{e \cdot f}{2}$ | $o = 2(a + b)$ |

Višina $v$ je pravokotna razdalja med nasprotnima stranicama (osnovnicama), ne dolžina kraka. Srednjica trapeza je $m = \dfrac{a + c}{2}$, zato je $S = m \cdot v$. Diagonala kvadrata je $d = a\sqrt{2}$, diagonala pravokotnika $d = \sqrt{a^2 + b^2}$ (Pitagorov izrek). V rombu se diagonali sekata pod pravim kotom in razpolavljata, zato s Pitagorovim izrekom iz $\dfrac{e}{2}$ in $\dfrac{f}{2}$ izračunaš stranico: $a^2 = \left(\dfrac{e}{2}\right)^2 + \left(\dfrac{f}{2}\right)^2$.

**4. Krog in krožnica.** Krožnica je množica točk v ravnini, ki so od središča $S$ oddaljene za polmer $r$; krog je del ravnine, ki ga krožnica omejuje. Tetiva je daljica med dvema točkama krožnice, premer je najdaljša tetiva ($d = 2r$). Za krog velja:

$$o = 2\pi r, \qquad S = \pi r^2$$

Tangenta se krožnice dotika v eni točki in je pravokotna na polmer, ki gre v dotikališče.

**5. Krožni lok in izsek.** Središčni kot $\alpha$ določa krožni lok in izsek. Lok je delež $\dfrac{\alpha}{360^\circ}$ krožnice, izsek pa enak delež kroga:

$$l = \frac{\pi r \alpha}{180^\circ}, \qquad S_{\text{izs}} = \frac{\pi r^2 \alpha}{360^\circ}$$

**6. Središčni in obodni kot.** Središčni kot ima oglišče v središču krožnice, obodni kot pa na krožnici. Če oba stojita nad istim lokom:

- **obodni kot je polovica središčnega:** $\varphi = \dfrac{\alpha}{2}$,
- vsi obodni koti nad istim lokom so enaki,
- **Talesov izrek:** obodni kot nad premerom je pravi ($\alpha = 180^\circ$, zato $\varphi = 90^\circ$).

**7. Tetivni štirikotnik.** Štirikotnik, ki mu lahko očrtamo krožnico, je **tetivni**. Nasprotna kota imata vsoto $180^\circ$:

$$\alpha + \gamma = 180^\circ, \qquad \beta + \delta = 180^\circ$$

Pravokotnik in enakokraki trapez sta tetivna, romb (razen kvadrata) in neenakokraki trapez nista. **Tangentni** štirikotnik ima včrtano krožnico, v njem velja $a + c = b + d$ (vsota nasprotnih stranic je enaka).

## Rešeni primeri

### Primer 1 (lažji)

Romb ima diagonali $e = 12\,\text{cm}$ in $f = 16\,\text{cm}$. Izračunaj stranico, obseg in ploščino romba.

**Podatki:** romb, $e = 12\,\text{cm}$, $f = 16\,\text{cm}$
**Iščemo:** stranico $a$, obseg $o$, ploščino $S$

:::formula
$a^2 = \left(\dfrac{e}{2}\right)^2 + \left(\dfrac{f}{2}\right)^2$, $\;o = 4a$, $\;S = \dfrac{e \cdot f}{2}$
:::

**Rešitev:**

1. Diagonali se v rombu razpolavljata in sta pravokotni, zato nastane pravokotni trikotnik s katetama $\dfrac{e}{2} = 6\,\text{cm}$ in $\dfrac{f}{2} = 8\,\text{cm}$, njegova hipotenuza je stranica romba.
2. $a = \sqrt{6^2 + 8^2} = \sqrt{100} = 10\,\text{cm}$.
3. Obseg: $o = 4 \cdot 10\,\text{cm} = 40\,\text{cm}$.
4. Ploščina: $S = \dfrac{12\,\text{cm} \cdot 16\,\text{cm}}{2} = 96\,\text{cm}^2$.
5. Odgovor: stranica je $10\,\text{cm}$, obseg $40\,\text{cm}$, ploščina $96\,\text{cm}^2$.

### Primer 2 (srednji)

Enakokraki trapez ima osnovnici $a = 14\,\text{cm}$ in $c = 8\,\text{cm}$ ter kraka $b = d = 5\,\text{cm}$. Izračunaj višino, ploščino in obseg trapeza.

**Podatki:** enakokraki trapez, $a = 14\,\text{cm}$, $c = 8\,\text{cm}$, $b = d = 5\,\text{cm}$
**Iščemo:** višino $v$, ploščino $S$, obseg $o$

:::formula
$S = \dfrac{(a + c)\, v}{2}$, $\;o = a + b + c + d$, višina iz Pitagorovega izreka: $v^2 = b^2 - \left(\dfrac{a - c}{2}\right)^2$
:::

**Rešitev:**

1. Iz oglišč krajše osnovnice spustimo višini na daljšo. Nastane pravokotnik s stranico $c = 8\,\text{cm}$ in dva skladna pravokotna trikotnika. Vsak ima vodoravno kateto $x = \dfrac{a - c}{2} = \dfrac{14 - 8}{2} = 3\,\text{cm}$ in hipotenuzo $b = 5\,\text{cm}$.
2. Višina: $v = \sqrt{5^2 - 3^2} = \sqrt{16} = 4\,\text{cm}$.
3. Ploščina: $S = \dfrac{(14 + 8)\,\text{cm} \cdot 4\,\text{cm}}{2} = 44\,\text{cm}^2$.
4. Obseg: $o = 14 + 5 + 8 + 5 = 32\,\text{cm}$.
5. Odgovor: višina je $4\,\text{cm}$, ploščina $44\,\text{cm}^2$, obseg $32\,\text{cm}$.

### Primer 3 (težji)

V krogu s polmerom $r = 9\,\text{cm}$ je središčni kot nad lokom $AB$ enak $80^\circ$. Točka $C$ leži na večjem loku $AB$, točka $D$ pa na manjšem loku $AB$. Izračunaj obodni kot $\varphi$ pri $C$, kot pri $D$, dolžino manjšega loka $AB$ in ploščino pripadajočega izseka.

**Podatki:** $r = 9\,\text{cm}$, središčni kot $\alpha = 80^\circ$ nad lokom $AB$, $C$ na večjem loku $AB$, $D$ na manjšem loku $AB$
**Iščemo:** obodni kot $\varphi$ pri $C$, kot $\angle ADB$, dolžino loka $l$, ploščino izseka $S_{\text{izs}}$

:::formula
$\varphi = \dfrac{\alpha}{2}$, $\;\varphi + \angle ADB = 180^\circ$, $\;l = \dfrac{\pi r \alpha}{180^\circ}$, $\;S_{\text{izs}} = \dfrac{\pi r^2 \alpha}{360^\circ}$
:::

**Rešitev:**

1. Obodni kot nad manjšim lokom je polovica središčnega: $\varphi = \dfrac{80^\circ}{2} = 40^\circ$.
2. Štirikotnik $ACBD$ je tetivni, zato sta nasprotna kota pri $C$ in $D$ suplementarna (vsota $180^\circ$): $\angle ADB = 180^\circ - 40^\circ = 140^\circ$.
3. Dolžina loka: $l = \dfrac{\pi \cdot 9\,\text{cm} \cdot 80^\circ}{180^\circ} = 4\pi\,\text{cm} \approx 12{,}57\,\text{cm}$.
4. Ploščina izseka: $S_{\text{izs}} = \dfrac{\pi \cdot (9\,\text{cm})^2 \cdot 80^\circ}{360^\circ} = 18\pi\,\text{cm}^2 \approx 56{,}55\,\text{cm}^2$.
5. Odgovor: $\varphi = 40^\circ$, $\angle ADB = 140^\circ$, $l = 4\pi\,\text{cm} \approx 12{,}57\,\text{cm}$, $S_{\text{izs}} = 18\pi\,\text{cm}^2 \approx 56{,}55\,\text{cm}^2$.

## Pogoste napake

- **Ploščina romba oziroma paralelograma s stranico namesto višine.** Če za paralelogram s stranicama $10\,\text{cm}$ in $6\,\text{cm}$ izračunaš $S = 10 \cdot 6$, dobiš ploščino pravokotnika. Razlog: pri pravokotniku sta stranici hkrati višina in osnovnica, pri poševnem liku pa ne. Pravilno: $S = a \cdot v_a$, kjer je $v_a$ pravokotna razdalja med osnovnicama in nikoli večja od kraka.
- **Za višino trapeza vzameš krak.** Razlog: krak je pri poševnem trapezu na sliki »videti« kot višina. Pravilno: višina je pravokotna na osnovnici. Če poznaš kraka in osnovnici, jo dobiš s Pitagorovim izrekom, kot v primeru 2.
- **Pozabiš deliti z $2$ pri ploščini romba ali deltoida.** $S = e \cdot f$ je ploščina pravokotnika, ki lik oklepa. Razlog: lik zavzame natanko polovico tega pravokotnika. Pravilno: $S = \dfrac{e \cdot f}{2}$.
- **Zamenjava $2\pi r$ in $\pi r^2$.** Razlog: obe formuli vsebujeta $\pi$ in $r$. Pravilno: obseg je dolžina in ima enoto $\text{cm}$ ($o = 2\pi r$), ploščina ima enoto $\text{cm}^2$ ($S = \pi r^2$). Preveri enoto rezultata.
- **Obodni kot enak središčnemu.** Razlog: oba stojita nad istim lokom. Pravilno: središčni kot je dvakrat večji od obodnega. Za lok, ki ustreza kotu $100^\circ$ v središču, je obodni kot $50^\circ$.

## Povzetek

- Vsota kotov v štirikotniku: $360^\circ$. Paralelogram: $S = a \cdot v_a$; diagonali se razpolavljata.
- Romb in deltoid: $S = \dfrac{e \cdot f}{2}$, diagonali sta pravokotni. Trapez: $S = \dfrac{(a + c)\, v}{2}$.
- Diagonala kvadrata $a\sqrt{2}$, pravokotnika $\sqrt{a^2 + b^2}$.
- Krog: $o = 2\pi r$, $S = \pi r^2$. Lok $l = \dfrac{\pi r \alpha}{180^\circ}$, izsek $S = \dfrac{\pi r^2 \alpha}{360^\circ}$.
- Obodni kot je polovica središčnega; obodni kot nad premerom je pravi (Talesov izrek).
- Tetivni štirikotnik: vsota nasprotnih kotov je $180^\circ$. Tangentni: $a + c = b + d$.

## Drugače: Na sliki

Odpri simulacijo spodaj »Štirikotniki« in izberi eno od vrst štirikotnikov.

- Premikaj oglišča paralelograma in opazuj diagonali: vedno se sekata v skupni sredini. Ko postaneta enako dolgi, je paralelogram pravokotnik. Ko se sekata pod pravim kotom, je romb. Ko velja oboje, dobiš kvadrat.
- Pri trapezu opazuj višino, ki jo kaže pravokotna črta med osnovnicama. Če krak bolj nagneš, se višina in s tem ploščina zmanjšata, čeprav je krak enako dolg.
- V simulaciji spodaj »Obodni in središčni kot« premikaj točko po krožnici: obodni kot nad izbranim lokom ostane ves čas enak, središčni pa je dvakrat večji. Ko izbrani lok postane polkrožnica (tetiva je premer), je obodni kot pravi.
- Ko premakneš točko na drugo stran tetive (na drugi lok), se kot spremeni v $180^\circ$ minus prejšnja vrednost.

| Lik | Kaj spremeniš | Kaj ostane enako |
|---|---|---|
| paralelogram | naklon stranic | nasprotne stranice, razpolavljanje diagonal |
| trapez | krak | osnovnici |
| obodni kot | položaj točke na istem loku | velikost obodnega kota |

## Drugače: Iz vsakdanjega življenja

**Pica.** Pica s premerom $30\,\text{cm}$ je krog s polmerom $15\,\text{cm}$. Razrežemo jo na $8$ enakih kosov. Vsak kos je krožni izsek s središčnim kotom $\dfrac{360^\circ}{8} = 45^\circ$ in s ploščino $\dfrac{\pi \cdot 15^2}{8} \approx 88{,}36\,\text{cm}^2$. Dolžina skorje na enem kosu je lok $\dfrac{2\pi \cdot 15}{8} \approx 11{,}78\,\text{cm}$. Dve pici s premerom $20\,\text{cm}$ imata skupaj manj pice kot ena s premerom $30\,\text{cm}$ ($2 \cdot \pi \cdot 10^2 \approx 628$ proti $\pi \cdot 15^2 \approx 707\,\text{cm}^2$), saj ploščina narašča s kvadratom polmera.

**Škarjasti dvigalni oder.** Paralelogram iz palic se lahko poševno zvije, a nasprotni stranici ostaneta enako dolgi in vzporedni. Zato se platforma dviga vodoravno. Ploščina paralelograma se pri tem spreminja, ker se višina spreminja, stranice ostanejo enake.

**Iskanje središča kroga.** Imaš okroglo ploščo, a ne veš, kje je središče. Pravi kot (kotnik) položiš z ogliščem na rob plošče in kraka narišeta tetivi. Po Talesovem izreku je daljica med presečiščema premer. Dva takšna premera se sekata v središču.

**Vrt v obliki trapeza.** Ploščina trapeza je enaka ploščini pravokotnika s širino srednjice, zato lahko vrtno gredo v obliki trapeza z osnovnicama $14\,\text{m}$ in $8\,\text{m}$ in višino $4\,\text{m}$ »izravnamo« v pravokotnik $11\,\text{m} \times 4\,\text{m}$ s ploščino $44\,\text{m}^2$.

## Drugače: Korak za korakom s številkami

Vzemimo pravokotnik s stranicama $a = 9\,\text{cm}$ in $b = 12\,\text{cm}$ ter mu očrtajmo krožnico.

1. **Ploščina in obseg pravokotnika:** $S = 9 \cdot 12 = 108\,\text{cm}^2$, $o = 2 \cdot (9 + 12) = 42\,\text{cm}$.
2. **Diagonala:** $d = \sqrt{9^2 + 12^2} = \sqrt{225} = 15\,\text{cm}$.
3. **Zakaj je pravokotnik tetiven:** vsi štirje koti so pravi, zato so nasprotni koti suplementarni ($90^\circ + 90^\circ = 180^\circ$). Obe diagonali sta premera očrtane krožnice (Talesov izrek: kot $90^\circ$ stoji nad diagonalo).
4. **Polmer očrtane krožnice:** $R = \dfrac{d}{2} = 7{,}5\,\text{cm}$.
5. **Ploščina kroga:** $S_k = \pi \cdot 7{,}5^2 = 56{,}25\pi \approx 176{,}71\,\text{cm}^2$.
6. **Delež pravokotnika v krogu:** $\dfrac{108}{176{,}71} \approx 0{,}611$, torej približno $61\,\%$.
7. **Obseg kroga:** $o = 2\pi \cdot 7{,}5 = 15\pi \approx 47{,}12\,\text{cm}$, kar je več kot obseg pravokotnika ($42\,\text{cm}$). Rezultati se ujemajo s sliko: krog pravokotnik v celoti obdaja.

## Drugače: Bolj natančno

**Dokaz, da je obodni kot polovica središčnega.** Naj bo $S$ središče krožnice, $A$ in $B$ krajišči loka in $C$ točka na krožnici, tako da središče leži znotraj kota $ACB$. Premica $CS$ naj krožnico seka še v točki $D$. Trikotnika $SAC$ in $SBC$ sta enakokraka (dva polmera), zato sta kota ob osnovnici enaka: $\angle SAC = \angle SCA = \varphi_1$ in $\angle SBC = \angle SCB = \varphi_2$. Kot $\angle ASD$ je zunanji kot trikotnika $SAC$, zato je enak vsoti nenaležnih kotov, $2\varphi_1$. Podobno je $\angle BSD = 2\varphi_2$. Središčni kot je torej $\alpha = 2(\varphi_1 + \varphi_2) = 2\varphi$. Za druge lege točke $C$ je utemeljitev podobna, a daljša.

**Tetivni štirikotnik iz obodnih kotov.** Kota pri $C$ in $D$ stojita nad lokoma, ki skupaj sestavljata celo krožnico. Središčna kota teh lokov imata vsoto $360^\circ$, torej imata obodna kota vsoto $180^\circ$. Obratno: če imata nasprotna kota štirikotnika vsoto $180^\circ$, mu lahko očrtamo krožnico.

**Ploščina trapeza.** Trapez z osnovnicama $a$, $c$ in višino $v$ prekopiraj, kopijo zavrti za $180^\circ$ in jo prilepi ob krak prvotnega trapeza. Nastane paralelogram z osnovnico $a + c$ in višino $v$, njegova ploščina je $(a + c)\,v$. Prvotni trapez je natanko polovica, zato je $S = \dfrac{(a + c)\,v}{2}$.

**Zakaj je število $\pi$ isto za vse kroge?** Razmerje med obsegom in premerom je za vsak krog enako, $\dfrac{o}{d} = \pi \approx 3{,}14159$. Ker so vsi krogi med seboj podobni (en krog je povečava drugega), se obseg poveča toliko kot premer, ploščina pa toliko kot kvadrat polmera.

## Preveri se

? Romb ima diagonali $10\,\text{cm}$ in $24\,\text{cm}$. Kolikšna je njegova ploščina?
- $240\,\text{cm}^2$
+ $120\,\text{cm}^2$
- $34\,\text{cm}^2$
> $S = \dfrac{e \cdot f}{2} = \dfrac{10 \cdot 24}{2} = 120\,\text{cm}^2$. Rezultat $240\,\text{cm}^2$ dobiš, če pozabiš deliti z $2$.

? Središčni kot nad lokom je $90^\circ$. Kolikšen je obodni kot nad istim lokom?
- $180^\circ$
- $90^\circ$
+ $45^\circ$
> Obodni kot je polovica središčnega kota: $\dfrac{90^\circ}{2} = 45^\circ$.

? Krog ima polmer $3\,\text{cm}$. Kolikšna je njegova ploščina?
- $6\pi\,\text{cm}^2$
+ $9\pi\,\text{cm}^2$
- $3\pi\,\text{cm}^2$
> $S = \pi r^2 = \pi \cdot 3^2 = 9\pi\,\text{cm}^2$. Vrednost $6\pi$ bi bila obseg ($2\pi r$) in ima drugo enoto, $\text{cm}$.

? V tetivnem štirikotniku meri en kot $105^\circ$. Kolikšen je njemu nasprotni kot?
- $105^\circ$
- $255^\circ$
+ $75^\circ$
> V tetivnem štirikotniku imata nasprotna kota vsoto $180^\circ$, zato je iskani kot $180^\circ - 105^\circ = 75^\circ$.

:::simboli
\alpha, \beta, \gamma, \delta | notranji koti štirikotnika | | | α je drugje tudi središčni kot
o | obseg | | |
r | polmer kroga | | |
S | ploščina lika | | | krog: S = πr²; S je tudi središče krožnice
l | dolžina krožnega loka | l = \frac{\pi r \alpha}{180^\circ} | | α je središčni kot
S_{\text{izs}} | ploščina krožnega izseka | S_{\text{izs}} = \frac{\pi r^2 \alpha}{360^\circ} | |
a, c | osnovnici trapeza | | | a je tudi stranica kvadrata ali romba
b, d | kraka trapeza | | | d je drugje premer, d = 2r
e, f | diagonali štirikotnika | | | e = AC, f = BD
v | višina trapeza ali romba | v^2 = b^2 - \left(\frac{a - c}{2}\right)^2 | | zveza velja za enakokraki trapez
\varphi | obodni kot | \varphi = \frac{\alpha}{2} | | polovica središčnega kota nad istim lokom
A, B, C, D | oglišča štirikotnika ABCD | | | v nalogi s krogom točke na krožnici
:::
