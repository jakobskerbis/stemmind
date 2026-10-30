---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Luka, bobnar v študentskem bendu, po koncertu spušča kovček z ojačevalnikom po ukrivljeni klančini z odra. Če mu uide, s kolikšno hitrostjo prileti na tla? Z Newtonovim zakonom $\sum\vec{F} = m\vec{a}$ bi moral slediti sili na vsakem koščku klančine, pri udarcu palice ob boben pa sile med njima sploh ne bi poznal. Zato iz Newtonovega zakona izpeljemo dve novi orodji, **energijo** in **gibalno količino**, ter zakona o njuni ohranitvi: z njima povežeš začetno in končno stanje, ne da bi spremljal vse vmes. Ohranitveni zakoni so med najsplošnejšimi v naravi; energijski račun srečaš pri presnovi, kemijskih reakcijah, elektrarnah in strojih, gibalno količino pa pri trkih avtomobilov, reaktivnem pogonu, eksplozijah in trkih molekul v plinu.

## Razlaga

### Najprej en primer

Lukov kovček izračunajmo kar z ohranitvijo energije, ki jo poznaš iz gimnazije: masa $10\,\mathrm{kg}$, višina odra $0{,}80\,\mathrm{m}$, kovček zdrsne iz mirovanja, trenje zanemarimo. Normalna sila klančine je ves čas pravokotna na gibanje in ne opravi dela, zato kovček vso izgubljeno potencialno energijo $mgh = 10 \cdot 9{,}81 \cdot 0{,}80\,\mathrm{J} \approx 78{,}5\,\mathrm{J}$ dobi kot kinetično. Iz $\tfrac{1}{2}mv^2 = mgh$ sledi $v = \sqrt{2gh} = \sqrt{2 \cdot 9{,}81 \cdot 0{,}80}\,\mathrm{m/s} \approx 3{,}96\,\mathrm{m/s}$. Masa se pokrajša, oblika klančine pa v računu sploh ne nastopa. Spodaj korak za korakom posplošimo, zakaj tak račun deluje: od dela sile prek potencialne energije do ohranitve energije in nato do gibalne količine, ki ureja trke.

### Delo in moč

**1. Delo sile.** Stalna sila $\vec{F}$ na premiku $\Delta\vec{r}$ opravi delo

$$A = \vec{F}\cdot\Delta\vec{r} = F\,\Delta r\cos\varphi,$$

kjer je $\varphi$ kot med silo in premikom. Enota je joule: $1\,\mathrm{J} = 1\,\mathrm{N\,m}$. Delo je pozitivno, če ima sila komponento v smeri gibanja, negativno, če ima komponento proti gibanju (trenje), in nič, če je sila pravokotna na premik (normalna sila podlage, sila pri enakomernem kroženju). Če se sila vzdolž poti spreminja, delo zapišemo z integralom:

$$A = \int_{\vec{r}_1}^{\vec{r}_2} \vec{F}\cdot\mathrm{d}\vec{r}.$$

V eni razsežnosti je to ploščina pod grafom $F(x)$. Za vzmet s silo $F = -kx$ je delo, ki ga moramo opraviti, da jo raztegnemo za $x$, enako $\tfrac{1}{2}kx^2$.

:::premisli
Težko torbo neseš s stalno hitrostjo po vodoravnem hodniku. Ali sila tvoje roke opravi delo na torbi?
---
Ne. Roka drži torbo s silo navpično navzgor, premik pa je vodoraven, zato je $\cos\varphi = \cos 90^\circ = 0$ in $A = 0$. Utrujenost je posledica porabe kemijske energije v mišicah samih (vlakna se ves čas krčijo), ne dela na torbi.
:::

**2. Moč.** Moč je delo na časovno enoto: $P = \mathrm{d}A/\mathrm{d}t = \vec{F}\cdot\vec{v}$. Enota je watt, $1\,\mathrm{W} = 1\,\mathrm{J/s}$.

### Energija

**3. Kinetična energija in izrek o kinetični energiji.** Kinetična energija telesa z maso $m$ in hitrostjo $v$ je $W_k = \tfrac{1}{2}mv^2$. **Izrek o kinetični energiji** pravi:

$$A_{\text{vseh sil}} = \Delta W_k = \tfrac{1}{2}mv_2^2 - \tfrac{1}{2}mv_1^2.$$

Delo **vseh** sil (rezultante) je enako spremembi kinetične energije. Izrek sledi neposredno iz drugega Newtonovega zakona (izpeljava je v razdelku »Bolj natančno«).

**4. Konservativne sile in potencialna energija.** Sila je **konservativna**, če njeno delo ni odvisno od poti, ampak le od začetne in končne lege (teža, sila vzmeti, gravitacija, električna sila). Za takšno silo vpeljemo potencialno energijo $W_p$, tako da je $A_{\text{kons}} = -\Delta W_p$:

- teža ob površju: $W_p = mgh$,
- prožnostna energija vzmeti: $W_p = \tfrac{1}{2}kx^2$,
- gravitacija: $W_p = -G\dfrac{mM}{r}$.

Trenje in upor nista konservativna: njuno delo je odvisno od dolžine poti in je pri drsenju po mirujoči podlagi negativno.

**5. Ohranitev mehanske energije.** Razdelimo delo na delo konservativnih sil in delo ostalih sil $A'$. Iz izreka o kinetični energiji sledi

$$\Delta W_k + \Delta W_p = A'.$$

Če opravljajo delo le konservativne sile ($A' = 0$), se **mehanska energija** $W_k + W_p$ ohranja. Trenje mehansko energijo zmanjša ($A' < 0$), motor ali mišice jo povečajo ($A' > 0$). Celotna energija, ki vključuje tudi notranjo energijo, pa se ohrani vedno: »izgubljena« mehanska energija se pretvori v notranjo energijo (segrevanje).

### Gibalna količina in trki

**6. Gibalna količina in sunek sile.** Gibalna količina je vektor $\vec{G} = m\vec{v}$, enota $\mathrm{kg\,m/s}$. Drugi Newtonov zakon v splošni obliki je $\sum\vec{F} = \mathrm{d}\vec{G}/\mathrm{d}t$. Z integriranjem dobimo **izrek o gibalni količini**:

$$\Delta\vec{G} = \int_{t_1}^{t_2}\sum\vec{F}\,\mathrm{d}t.$$

Integral na desni je **sunek sile**. Enak sunek lahko dosežemo z veliko silo v kratkem času ali z majhno silo v dolgem času.

**7. Ohranitev gibalne količine.** V sistemu več teles se notranje sile po tretjem Newtonovem zakonu pojavljajo v parih $\vec{F}_{AB} = -\vec{F}_{BA}$ in se pri seštevanju odštejejo. Zato je sprememba celotne gibalne količine enaka le sunku **zunanjih** sil. Če je vsota zunanjih sil nič (ali je med kratkim trkom zanemarljiva), se celotna gibalna količina ohranja:

$$\sum_i m_i\vec{v}_i = \sum_i m_i\vec{v}_i\,'.$$

Enačba je vektorska, zato velja po vsaki komponenti posebej.

**8. Trki.** Pri vsakem trku (ko so zunanje sile zanemarljive) se ohranja gibalna količina. Vrste trkov se razlikujejo po tem, kaj se zgodi s kinetično energijo:

| Trk | Gibalna količina | Kinetična energija | Primer |
|---|---|---|---|
| prožni | se ohrani | se ohrani | biljardne krogle, molekule plina |
| neprožni | se ohrani | del preide v notranjo energijo in deformacijo | žoga, ki odskoči nižje, kot je padla |
| popolnoma neprožni | se ohrani | izguba je največja možna; telesi se po trku gibljeta skupaj | balistično nihalo, sprijeta vozička |

Pri popolnoma neprožnem trku je skupna hitrost $\vec{v}\,' = \dfrac{m_1\vec{v}_1 + m_2\vec{v}_2}{m_1 + m_2}$.

Za čelni prožni trk, pri katerem drugo telo pred trkom miruje, iz obeh ohranitvenih zakonov sledi:

$$v_1' = \frac{m_1 - m_2}{m_1 + m_2}\,v_1, \qquad v_2' = \frac{2m_1}{m_1 + m_2}\,v_1.$$

Pri enakih masah si telesi zamenjata hitrosti. Lahko telo se od težkega odbije skoraj z nespremenjeno hitrostjo, težko telo pa lahkega odnese naprej s skoraj dvakratno svojo hitrostjo.

:::premisli
Ali se lahko pri trku dveh teles v notranjo energijo pretvori **vsa** kinetična energija? Kdaj?
---
Le če je celotna gibalna količina pred trkom nič, na primer ko se dve enaki telesi z enako velikima nasprotnima hitrostma zaletita in sprimeta. Ker se gibalna količina ohrani, se morata telesi po trku gibati, če je bila pred trkom različna od nič, in del kinetične energije ostane.
:::

**9. Masno središče.** Za sistem teles definiramo masno središče $\vec{r}_{ms} = \sum m_i\vec{r}_i / \sum m_i$. Celotna gibalna količina je $\vec{G} = m_{\text{cel}}\vec{v}_{ms}$, zato se masno središče sistema brez zunanjih sil giblje premo enakomerno, kar koli se dogaja med telesi.

## Rešeni primeri

### Primer 1 (lažji)

Tehnik po gladkem odru potiska kovček z efekti za kitaro. Kovček ima maso $2{,}0\,\mathrm{kg}$ in na začetku miruje, tehnik pa nanj na razdalji $3{,}0\,\mathrm{m}$ deluje z vodoravno silo $10\,\mathrm{N}$. Trenje zanemarimo. Kolikšno hitrost doseže kovček?

**Podatki:** $m = 2{,}0\,\mathrm{kg}$, $v_1 = 0$, $F = 10\,\mathrm{N}$ (vzporedno s premikom), $s = 3{,}0\,\mathrm{m}$, trenja ni
**Iščemo:** končno hitrost $v_2$

:::formula
$A = Fs$, $A = \Delta W_k = \tfrac{1}{2}mv_2^2 - \tfrac{1}{2}mv_1^2$
:::

**Rešitev:**

1. Teža in normalna sila sta pravokotni na premik in ne opravita dela. Delo opravi le sila potiskanja: $A = 10\,\mathrm{N} \cdot 3{,}0\,\mathrm{m} = 30\,\mathrm{J}$.
2. Po izreku o kinetični energiji je $\tfrac{1}{2}mv_2^2 = 30\,\mathrm{J}$ (ker kovček na začetku miruje, je vse delo kar končna kinetična energija).
3. $v_2 = \sqrt{2A/m} = \sqrt{2 \cdot 30\,\mathrm{J} / 2{,}0\,\mathrm{kg}} = \sqrt{30}\,\mathrm{m/s} \approx 5{,}48\,\mathrm{m/s}$.
4. Odgovor: kovček doseže hitrost približno $5{,}48\,\mathrm{m/s}$.

### Primer 2

Otrok s sankami (skupna masa $20\,\mathrm{kg}$) se iz mirovanja spusti po hribu, visokem $10\,\mathrm{m}$, in doseže ob vznožju hitrost $12\,\mathrm{m/s}$. Koliko dela je opravilo trenje? Kolikšna bi bila hitrost brez trenja? Vzemi $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $m = 20\,\mathrm{kg}$, $h = 10\,\mathrm{m}$, $v_1 = 0$, $v_2 = 12\,\mathrm{m/s}$, $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** delo trenja $A_{tr}$ in hitrost $v_0$ brez trenja

:::formula
$\Delta W_k + \Delta W_p = A_{tr}$; brez trenja $\tfrac{1}{2}mv_0^2 = mgh$
:::

**Rešitev:**

1. Sprememba potencialne energije je negativna, ker se sani spustijo: $\Delta W_p = -mgh = -20 \cdot 9{,}81 \cdot 10\,\mathrm{J} = -1962\,\mathrm{J}$.
2. Sprememba kinetične energije: $\Delta W_k = \tfrac{1}{2} \cdot 20\,\mathrm{kg} \cdot (12\,\mathrm{m/s})^2 = 1440\,\mathrm{J}$.
3. Trenje je edina nekonservativna sila, ki opravi delo, zato iz $\Delta W_k + \Delta W_p = A_{tr}$ sledi: $A_{tr} = 1440\,\mathrm{J} - 1962\,\mathrm{J} = -522\,\mathrm{J}$.
4. Brez trenja se mehanska energija ohranja, zato $\tfrac{1}{2}mv_0^2 = mgh$ in masa se pokrajša: $v_0 = \sqrt{2gh} = \sqrt{2 \cdot 9{,}81 \cdot 10}\,\mathrm{m/s} \approx 14{,}0\,\mathrm{m/s}$.
5. Odgovor: trenje je opravilo delo $-522\,\mathrm{J}$ (toliko mehanske energije je prešlo v notranjo energijo snega in sani); brez trenja bi bila hitrost približno $14{,}0\,\mathrm{m/s}$.

### Primer 3 (težji)

Izstrelek z maso $10\,\mathrm{g}$ prileti vodoravno s hitrostjo $400\,\mathrm{m/s}$ v leseno klado z maso $2{,}0\,\mathrm{kg}$, ki visi na dolgih vrvicah (balistično nihalo), in obtiči v njej. Kolikšna je hitrost klade takoj po trku, za koliko se klada dvigne in kolikšen delež kinetične energije se pri trku pretvori v notranjo energijo? Vzemi $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $m = 10\,\mathrm{g} = 0{,}010\,\mathrm{kg}$, $v = 400\,\mathrm{m/s}$, $M = 2{,}0\,\mathrm{kg}$ (na začetku miruje), trk je popolnoma neprožen, $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** hitrost $v'$ po trku, dvig $h$, delež izgubljene kinetične energije

:::formula
Trk: $mv = (m + M)v'$. Nihanje po trku: $\tfrac{1}{2}(m + M)v'^2 = (m + M)gh$.
:::

**Rešitev:**

1. Med kratkim trkom vrvici ostaneta navpični, zato so vodoravne zunanje sile nič in se vodoravna gibalna količina ohranja. Energija se pri trku ne ohranja.
2. Pred trkom ima gibalno količino le izstrelek, po trku pa se izstrelek in klada gibljeta skupaj: $v' = \dfrac{mv}{m + M} = \dfrac{0{,}010 \cdot 400}{2{,}010}\,\mathrm{m/s} \approx 1{,}99\,\mathrm{m/s}$.
3. Po trku se ohranja mehanska energija (vrvici ne opravljata dela): $h = \dfrac{v'^2}{2g} = \dfrac{1{,}990^2}{2 \cdot 9{,}81}\,\mathrm{m} \approx 0{,}202\,\mathrm{m}$.
4. Kinetična energija pred trkom: $\tfrac{1}{2} \cdot 0{,}010 \cdot 400^2\,\mathrm{J} = 800\,\mathrm{J}$; po trku: $\tfrac{1}{2} \cdot 2{,}010 \cdot 1{,}990^2\,\mathrm{J} \approx 3{,}98\,\mathrm{J}$.
5. Delež izgube: $1 - 3{,}98/800 \approx 0{,}995$. Splošno je ta delež $M/(m + M) = 2{,}0/2{,}010 \approx 99{,}5\,\%$.
6. Odgovor: klada se po trku giblje s hitrostjo približno $1{,}99\,\mathrm{m/s}$, dvigne se za približno $20\,\mathrm{cm}$, v notranjo energijo pa preide približno $99{,}5\,\%$ začetne kinetične energije.

### Primer 4 – zdaj ti

Klado z maso $0{,}50\,\mathrm{kg}$ potisnemo ob vzmet s koeficientom $200\,\mathrm{N/m}$, vzmet stisnemo za $10\,\mathrm{cm}$ in klado spustimo. Podlaga je gladka. S kolikšno hitrostjo klada odleti od vzmeti?

**Podatki:** $m = 0{,}50\,\mathrm{kg}$, $k = 200\,\mathrm{N/m}$, $x = 10\,\mathrm{cm} = 0{,}10\,\mathrm{m}$, $v_1 = 0$, trenja ni
**Iščemo:** hitrost $v$, ko klada zapusti vzmet

:::formula
$\tfrac{1}{2}kx^2 = \tfrac{1}{2}mv^2$
:::

**Rešitev:**

1. Podlaga je gladka, teža in normalna sila pa sta pravokotni na premik in ne opravita dela. Zato se mehanska energija ohranja: prožnostna energija vzmeti se v celoti pretvori v kinetično energijo klade.
2. Prožnostna energija stisnjene vzmeti: $W_p = \tfrac{1}{2} \cdot 200\,\mathrm{N/m} \cdot (0{,}10\,\mathrm{m})^2 = 1{,}0\,\mathrm{J}$.
3. Zdaj ti: zapiši $\tfrac{1}{2}mv^2 = W_p$, izrazi $v$ in vstavi podatke.

:::premisli
Kolikšna je hitrost klade, ko zapusti vzmet?
---
$v = \sqrt{2W_p/m} = \sqrt{2 \cdot 1{,}0\,\mathrm{J}/0{,}50\,\mathrm{kg}} = 2{,}0\,\mathrm{m/s}$.
:::

## Pogoste napake

- **Ohranitev energije pri neprožnem trku.** Pri trku se vedno ohranja gibalna količina, kinetična energija pa le pri prožnem trku. Pri balističnem nihalu je treba trk in nihanje obravnavati ločeno.
- **Gibalna količina kot skalar.** $\vec{G}$ je vektor. Žoga z $5\,\mathrm{m/s}$, ki se odbije nazaj z $5\,\mathrm{m/s}$, spremeni gibalno količino za $2mv$, ne za nič.
- **Delo normalne sile ali radialne sile.** Sila, pravokotna na premik, ne opravi dela, četudi je velika.
- **Pozabljeno delo trenja.** Trenje opravi delo $-F_{tr}s$, odvisno od dolžine poti, ne od višinske razlike.
- **Izrek o kinetični energiji le z eno silo.** V izrek gre delo **vseh** sil na telo (ali delo rezultante), ne le delo sile, ki jo omenja naloga.
- **Ničla potencialne energije.** Izbira, kje je $W_p = 0$, je poljubna, a ves račun mora uporabljati isto izbiro; fizikalno pomembne so le razlike.
- **Grami.** Pred računanjem maso pretvori v kilograme ($10\,\mathrm{g} = 0{,}010\,\mathrm{kg}$).

## Povzetek

- Delo: $A = \int\vec{F}\cdot\mathrm{d}\vec{r}$, pri stalni sili $A = Fs\cos\varphi$; moč $P = \vec{F}\cdot\vec{v}$.
- Izrek o kinetični energiji: $A_{\text{vseh sil}} = \Delta(\tfrac{1}{2}mv^2)$.
- Konservativne sile imajo potencialno energijo ($mgh$, $\tfrac{1}{2}kx^2$, $-GmM/r$); $\Delta W_k + \Delta W_p = A'$, brez nekonservativnih sil se mehanska energija ohranja.
- $\vec{G} = m\vec{v}$, $\Delta\vec{G} = \int\vec{F}\,\mathrm{d}t$; brez zunanjih sil se celotna gibalna količina ohranja.
- Trki: gibalna količina se ohrani vedno, kinetična energija le pri prožnem trku; popolnoma neprožni trk: skupna hitrost $\sum m_i v_i / \sum m_i$.

## Drugače: Na sliki

Predstavljaj si energijo kot vodo v posodah. Na vrhu hriba je vsa v posodi »potencialna«, med spustom se pretaka v posodo »kinetična«. Trenje je luknja, skozi katero voda odteka v tretjo posodo »notranja energija«. Skupna količina vode v vseh treh posodah je ves čas enaka.

Pri trku nariši puščice gibalnih količin pred trkom in po njem. Vektorska vsota puščic pred trkom mora biti enaka vsoti po trku:

```
pred:   [m1] ---->            [m2]           G = m1 v1
po:          [m1+m2] -->                     G = (m1+m2) v'
```

Pri poševnem trku (biljard) puščice sestavljaš kot vektorje: vsota ostane enaka, krogli pa se po trku razletita pod kotom.

Graf $F(t)$ med trkom je ozek vrh. Ploščina pod vrhom je sunek sile, ki je enak spremembi gibalne količine. Blazina naredi vrh nižji in širši pri enaki ploščini.

## Drugače: Iz vsakdanjega življenja

**Zračna blazina in čelada.** Potnik z maso $70\,\mathrm{kg}$ se pri $50\,\mathrm{km/h}$ ($13{,}9\,\mathrm{m/s}$) ustavi. Sprememba gibalne količine je ista, sila pa je odvisna od časa ustavljanja: pri $0{,}10\,\mathrm{s}$ (blazina) je povprečna sila okoli $9{,}7\,\mathrm{kN}$, pri $0{,}010\,\mathrm{s}$ (udarec v trdo) pa okoli $97\,\mathrm{kN}$.

**Hoja po stopnicah in presnova.** Človek z maso $70\,\mathrm{kg}$, ki se povzpne za eno nadstropje ($3\,\mathrm{m}$), opravi koristno delo okoli $2{,}1\,\mathrm{kJ}$. Ker je izkoristek mišic le okoli $25\,\%$, porabi približno $8\,\mathrm{kJ}$ kemijske energije iz hrane; preostanek se sprosti kot toplota.

**Reaktivni pogon.** Raketa, lignji in meduze se poganjajo tako, da izvržejo snov nazaj. Gibalna količina sistema se ohranja, zato telo dobi gibalno količino naprej.

**Trki molekul.** V kinetični teoriji plinov so trki molekul s steno posode prožni: molekula se odbije in spremeni gibalno količino za $2mv_x$. Vsota teh sunkov na enoto ploščine in časa je tlak plina.

**Elektrarne.** Pri hidroelektrarni se potencialna energija vode pretvarja v kinetično, nato v delo turbine in v električno energijo. Moč je $P = \eta\,\Phi_m g h$, kjer je $\Phi_m$ masni pretok.

## Drugače: Korak za korakom s številkami

Kroglica z maso $1{,}0\,\mathrm{kg}$ in hitrostjo $6{,}0\,\mathrm{m/s}$ čelno prožno trči v mirujočo kroglico z maso $2{,}0\,\mathrm{kg}$. Kolikšni sta hitrosti po trku?

1. **Ohranitev gibalne količine:** $1{,}0 \cdot 6{,}0 = 1{,}0\,v_1' + 2{,}0\,v_2'$.
2. **Ohranitev kinetične energije:** $\tfrac{1}{2} \cdot 1{,}0 \cdot 36 = \tfrac{1}{2} \cdot 1{,}0\,v_1'^2 + \tfrac{1}{2} \cdot 2{,}0\,v_2'^2$.
3. **Formula za prožni trk:** $v_1' = \frac{1{,}0 - 2{,}0}{3{,}0} \cdot 6{,}0\,\mathrm{m/s} = -2{,}0\,\mathrm{m/s}$.
4. **Druga kroglica:** $v_2' = \frac{2 \cdot 1{,}0}{3{,}0} \cdot 6{,}0\,\mathrm{m/s} = 4{,}0\,\mathrm{m/s}$.
5. **Preizkus gibalne količine:** $1{,}0 \cdot (-2{,}0) + 2{,}0 \cdot 4{,}0 = 6{,}0\,\mathrm{kg\,m/s}$. ✓
6. **Preizkus energije:** $\tfrac{1}{2} \cdot 1{,}0 \cdot 4{,}0 + \tfrac{1}{2} \cdot 2{,}0 \cdot 16 = 2{,}0 + 16 = 18\,\mathrm{J}$, enako kot pred trkom. ✓
7. **Pomen:** lažja kroglica se odbije nazaj s $2{,}0\,\mathrm{m/s}$, težja odleti naprej s $4{,}0\,\mathrm{m/s}$.

## Drugače: Bolj natančno

**Izpeljava izreka o kinetični energiji.** Iz $\vec{F} = m\,\mathrm{d}\vec{v}/\mathrm{d}t$ in $\mathrm{d}\vec{r} = \vec{v}\,\mathrm{d}t$ sledi

$$\int_1^2\vec{F}\cdot\mathrm{d}\vec{r} = \int_{t_1}^{t_2} m\frac{\mathrm{d}\vec{v}}{\mathrm{d}t}\cdot\vec{v}\,\mathrm{d}t = \int_{t_1}^{t_2}\frac{\mathrm{d}}{\mathrm{d}t}\left(\tfrac{1}{2}m\,\vec{v}\cdot\vec{v}\right)\mathrm{d}t = \tfrac{1}{2}mv_2^2 - \tfrac{1}{2}mv_1^2.$$

**Konservativna sila in gradient.** Sila je konservativna natanko tedaj, ko je njen krivuljni integral po vsaki sklenjeni poti nič, $\oint\vec{F}\cdot\mathrm{d}\vec{r} = 0$. Takrat obstaja funkcija $W_p(\vec{r})$, da je $\vec{F} = -\nabla W_p$; v eni razsežnosti $F = -\mathrm{d}W_p/\mathrm{d}x$. Na primer iz $W_p = \tfrac{1}{2}kx^2$ dobimo $F = -kx$. Ravnovesne lege so v točkah, kjer je $\mathrm{d}W_p/\mathrm{d}x = 0$; minimum je stabilno ravnovesje.

**Ohranitev gibalne količine za sistem.** Za $N$ teles je $\frac{\mathrm{d}}{\mathrm{d}t}\sum_i\vec{G}_i = \sum_i\vec{F}_i^{\text{zun}} + \sum_i\sum_{j\neq i}\vec{F}_{ij}$. Dvojna vsota je nič, ker je $\vec{F}_{ij} = -\vec{F}_{ji}$. Ostane $\mathrm{d}\vec{G}/\mathrm{d}t = \sum\vec{F}^{\text{zun}}$.

**Izpeljava prožnega trka.** Ohranitvena zakona zapišemo kot $m_1(v_1 - v_1') = m_2v_2'$ in $m_1(v_1^2 - v_1'^2) = m_2v_2'^2$. Drugo enačbo delimo s prvo (za $v_1 \neq v_1'$) in dobimo $v_1 + v_1' = v_2'$: relativna hitrost pri prožnem čelnem trku le spremeni predznak. Od tod sledita formuli iz razlage.

**Sistem masnega središča.** Kinetično energijo sistema lahko zapišemo kot $W_k = \tfrac{1}{2}m_{\text{cel}}v_{ms}^2 + W_k'$, kjer je $W_k'$ kinetična energija glede na masno središče. Pri trku se prvi člen ohrani (ker se ohrani $\vec{G}$), zato se lahko v notranjo energijo pretvori največ $W_k'$. Pri popolnoma neprožnem trku se pretvori ves $W_k'$.

## Preveri se

? Kolikšna je kinetična energija telesa z maso $2{,}0\,\mathrm{kg}$, ki se giblje s hitrostjo $3{,}0\,\mathrm{m/s}$?
- $6{,}0\,\mathrm{J}$
~ To je $mv = 6{,}0\,\mathrm{kg\,m/s}$, gibalna količina, ne energija; v kinetični energiji je hitrost na kvadrat.
+ $9{,}0\,\mathrm{J}$
- $18\,\mathrm{J}$
~ To je $mv^2$: pozabil si faktor $\tfrac{1}{2}$.
> $W_k = \tfrac{1}{2}mv^2 = \tfrac{1}{2} \cdot 2{,}0 \cdot 9{,}0\,\mathrm{J} = 9{,}0\,\mathrm{J}$. $18\,\mathrm{J}$ dobiš, če pozabiš na faktor $\tfrac{1}{2}$, $6{,}0$ pa je gibalna količina v $\mathrm{kg\,m/s}$.

? Voziček z maso $1{,}0\,\mathrm{kg}$ in hitrostjo $4{,}0\,\mathrm{m/s}$ se zaleti v mirujoč voziček z maso $3{,}0\,\mathrm{kg}$ in se z njim sprime. Kolikšna je skupna hitrost?
+ $1{,}0\,\mathrm{m/s}$
- $1{,}3\,\mathrm{m/s}$
~ Gibalno količino $4{,}0\,\mathrm{kg\,m/s}$ si delil le z maso mirujočega vozička; po trku se gibljeta oba, skupaj $4{,}0\,\mathrm{kg}$.
- $2{,}0\,\mathrm{m/s}$
~ To dobiš, če ohraniš kinetično energijo; pri trku, pri katerem se vozička sprimeta, del kinetične energije preide v notranjo.
> $v' = \frac{1{,}0 \cdot 4{,}0}{4{,}0}\,\mathrm{m/s} = 1{,}0\,\mathrm{m/s}$. Ohranja se gibalna količina, ne kinetična energija.

? Kaj se zgodi pri čelnem prožnem trku dveh enakih krogel, če druga pred trkom miruje?
- Obe se gibljeta naprej s polovično hitrostjo.
~ Tako se konča popolnoma neprožen trk; pri prožnem trku se mora ohraniti tudi kinetična energija, tu pa bi se prepolovila.
- Prva se odbije nazaj z nespremenjeno hitrostjo.
~ Tako se lahka krogla odbije od zelo težke. Pri enakih masah bi morala druga krogla tedaj dobiti hitrost $2v$, da se ohrani gibalna količina, kinetična energija pa bi se povečala, kar ni mogoče.
+ Prva obstane, druga nadaljuje s hitrostjo prve.
> Pri $m_1 = m_2$ je $v_1' = 0$ in $v_2' = v_1$: krogli si zamenjata hitrosti. Prvi odgovor bi bil popolnoma neprožen trk, pri katerem se izgubi polovica kinetične energije.

? Dvigalo dvigne tovor z maso $500\,\mathrm{kg}$ za $20\,\mathrm{m}$ v $25\,\mathrm{s}$ s stalno hitrostjo. Kolikšna je povprečna moč za dviganje ($g = 9{,}81\,\mathrm{m/s^2}$)?
- $400\,\mathrm{W}$
~ Računal si z maso namesto s težo: dvigalo mora premagati silo $mg$, zato manjka faktor $g$.
- $98\,\mathrm{kW}$
~ To je številka opravljenega dela $mgh \approx 98\,\mathrm{kJ}$; za moč ga moraš deliti še s časom.
+ $3{,}9\,\mathrm{kW}$
> $P = mgh/t = 500 \cdot 9{,}81 \cdot 20 / 25\,\mathrm{W} \approx 3924\,\mathrm{W} \approx 3{,}9\,\mathrm{kW}$. $98\,\mathrm{kW}$ je opravljeno delo v $\mathrm{kJ}$, ne moč.

? Žoga z maso $m$ pade navpično na tla s hitrostjo $v$ in se odbije navzgor z enako veliko hitrostjo. Kolikšna je sprememba njene gibalne količine?
- Nič, ker je hitrost po odboju enako velika kot pred njim.
~ Gibalna količina je vektor: velikost je res enaka, smer pa se obrne, zato $\Delta\vec{G} = m\vec{v}\,' - m\vec{v} \neq 0$.
+ $2mv$, usmerjena navzgor.
- $mv$, usmerjena navzgor.
~ Upošteval si le gibalno količino po odboju; odšteti moraš še začetno, ki kaže navzdol, zato se njeni velikosti seštejeta.
> Navzgor vzemimo za pozitivno smer: $\Delta G = mv - (-mv) = 2mv$. Ta sunek žogi dajo tla, zato je sila tal med odbojem velika.
