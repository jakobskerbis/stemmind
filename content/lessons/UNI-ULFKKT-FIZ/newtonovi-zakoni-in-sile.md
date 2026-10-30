---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Ko poln nakupovalni voziček potiskaš po trgovini s stalno hitrostjo, je vsota sil nanj natanko nič. Še več: voziček po tretjem zakonu potiska tebe nazaj z enako veliko silo, kot ga ti potiskaš naprej. Kako se potem sploh kaj premakne? Kinematika opiše, **kako** se telo giblje; dinamika s silami in tremi Newtonovimi zakoni pove, **zakaj**. Z njimi napoveš gibanje zrna peska v centrifugi, avtomobila v ovinku in satelita na tirnici.

Na fakulteti Newtonove zakone uporabljamo vektorsko in sistematično: narišemo vse sile, izberemo koordinatni sistem, zapišemo enačbe po komponentah in jih rešimo. Posebej natančno obravnavamo tri sile, ki jih srečaš povsod:

- **trenju**, ki zavira drsenje in hkrati omogoča hojo, vožnjo in zaviranje,
- **silam pri kroženju**, ki telo držijo na krivi poti,
- **gravitaciji**, ki drži Luno ob Zemlji in planete ob Soncu.

Enak postopek boš kasneje uporabil pri vrtenju, nihanju in gibanju tekočin, zato se ga splača dobro utrditi.

## Razlaga

### Mamljiva napačna ideja: gibanje potrebuje silo

Voziček, ki ga nehaš potiskati, se kmalu ustavi. Zato se zdi, da sila gibanje vzdržuje, in tako so po Aristotelu učili skoraj dva tisoč let. Napaka je v tem, da pozabimo na trenje in upor: tvoja sila jih le nadomesti, da je vsota sil nič. Na gladkem ledu bi voziček drsel naprej skoraj brez potiskanja. Sila ne vzdržuje hitrosti, ampak jo **spreminja**. To popravljeno sliko zapišejo Newtonovi zakoni.

**1. Newtonovi zakoni.**

- **Prvi zakon (zakon o vztrajnosti).** Če je vsota sil na telo enaka nič, telo miruje ali se giblje premo enakomerno. Zakon velja v **inercialnih opazovalnih sistemih**; za večino laboratorijskih poskusov je dovolj dober sistem, pritrjen na Zemljo.
- **Drugi zakon.** Vsota vseh zunanjih sil je enaka časovnemu odvodu gibalne količine $\vec{G} = m\vec{v}$:

$$\sum \vec{F} = \frac{\mathrm{d}\vec{G}}{\mathrm{d}t} = m\vec{a} \quad (\text{pri stalni masi}).$$

  Enota sile je newton: $1\,\mathrm{N} = 1\,\mathrm{kg\,m/s^2}$. Enačba je vektorska, zato velja po vsaki komponenti posebej: $\sum F_x = ma_x$, $\sum F_y = ma_y$.
- **Tretji zakon (zakon o vzajemnem učinku).** Če telo $A$ deluje na telo $B$ s silo $\vec{F}_{AB}$, deluje $B$ na $A$ s silo $\vec{F}_{BA} = -\vec{F}_{AB}$. Sili delujeta na **različni** telesi, zato se v enačbi gibanja enega telesa ne odštejeta.

:::premisli
Voziček te potiska nazaj z enako silo, kot ga ti potiskaš naprej. Zakaj se potem voziček in ti sploh premaknete?
---
Sili delujeta na različni telesi, zato se ne izničita. Za voziček štejejo le sile **nanj**: tvoja sila naprej in trenje nazaj; če je tvoja večja, voziček pospeši. Ti se premakneš, ker te tla z lepenjem pod podplati potiskajo naprej; ko pospešuješ, je ta sila večja od sile vozička nate.
:::

**2. Postopek reševanja.** (1) Izberi telo. (2) Nariši **diagram sil** (vse sile, ki delujejo **na** to telo). (3) Izberi osi, najbolje eno v smeri pospeška. (4) Zapiši drugi zakon po komponentah. (5) Reši in preveri enote ter mejne primere.

### Sile, ki jih rišemo v diagram

**3. Pogoste sile.**

- **Teža** $\vec{F}_g = m\vec{g}$, $g \approx 9{,}81\,\mathrm{m/s^2}$ ob površju Zemlje.
- **Normalna sila podlage** $\vec{F}_N$ je pravokotna na podlago. Ni vedno enaka $mg$: na klancu je $F_N = mg\cos\alpha$, v dvigalu, ki pospešuje navzgor, $F_N = m(g + a)$.
- **Sila vrvi** (napetost) deluje vzdolž vrvi.
- **Sila vzmeti** $F = -kx$ (Hookov zakon).

**4. Trenje.** Trenje deluje vzporedno s stično ploskvijo in nasprotuje (dejanskemu ali nameravanemu) relativnemu gibanju.

- **Lepenje (statično trenje):** dokler telo ne drsi, je sila lepenja natanko tolikšna, kot je treba za ravnovesje, a največ $F_{l,\max} = k_l F_N$. Velja torej neenačba $F_l \le k_l F_N$.
- **Kinetično trenje (drsno trenje):** ko telo drsi, je $F_{tr} = k_t F_N$, približno neodvisno od hitrosti in velikosti stične ploskve.

Koeficienta $k_l$ in $k_t$ sta brezdimenzijska in odvisna od para materialov; običajno je $k_t < k_l$. Zato je težje premakniti omaro kot jo potem potiskati. Na klancu telo začne drseti, ko $\tan\alpha > k_l$.

### Kroženje in gravitacija

**5. Sile pri kroženju.** Pri enakomernem kroženju s polmerom $r$ in obodno hitrostjo $v$ (kotno hitrostjo $\omega = v/r$) se smer hitrosti stalno spreminja. Telo ima **radialni (centripetalni) pospešek** proti središču:

$$a_r = \frac{v^2}{r} = \omega^2 r.$$

Po drugem zakonu mora vsota sil v radialni smeri kazati proti središču in biti $F_r = m v^2/r$.

:::premisli
Kovanec leži na vrteči se plošči in kroži z njo. Mnogi rečejo, da ga »centrifugalna sila vleče navzven«. Katera sila ga v resnici drži na krožnici in kaj se zgodi, ko ploščo zavrtiš hitreje?
---
Lepenje med kovancem in ploščo, usmerjeno proti središču. Potrebna sila $m\omega^2 r$ narašča s kvadratom kotne hitrosti; ko preseže največje lepenje $k_l mg$, kovanec zdrsne in odleti približno po tangenti, ne radialno navzven.
:::

To ni nova vrsta sile, ampak **vloga**, ki jo opravlja neka znana sila: napetost vrvi pri vrtenju kamna, lepenje med gumo in cesto v ovinku, gravitacija pri satelitu, električna sila pri elektronu v klasičnem modelu atoma. Če ta sila izgine, telo nadaljuje po tangenti. »Centrifugalna sila« nastopa le v vrtečem se (neinercialnem) sistemu, v inercialnem sistemu je ne pišemo.

**6. Gravitacija.** Newtonov gravitacijski zakon: točkasti (ali krogelno simetrični) telesi z masama $m_1$ in $m_2$ na razdalji $r$ se privlačita s silo

$$F = G\frac{m_1 m_2}{r^2}, \qquad G = 6{,}674 \cdot 10^{-11}\,\mathrm{N\,m^2/kg^2}.$$

Ob površju Zemlje je teža ravno gravitacijska sila: $mg = G\frac{mM_Z}{R_Z^2}$, zato $g = GM_Z/R_Z^2 \approx 9{,}8\,\mathrm{m/s^2}$. Z višino $g$ pojema s kvadratom razdalje od središča. Pri **krožnem tiru** satelita gravitacija opravlja vlogo radialne sile:

$$G\frac{mM}{r^2} = m\frac{v^2}{r} \quad\Rightarrow\quad v = \sqrt{\frac{GM}{r}}, \qquad T^2 = \frac{4\pi^2}{GM}\,r^3.$$

Druga enačba je tretji Keplerjev zakon. Masa satelita se pokrajša, zato vsa telesa na isti višini krožijo z enako hitrostjo.

## Rešeni primeri

### Primer 1 (lažji)

Zaboj pijače z maso $10\,\mathrm{kg}$ vlečemo po vodoravnih tleh skladišča trgovine z vodoravno silo $50\,\mathrm{N}$. Koeficient kinetičnega trenja med zabojem in tlemi je $0{,}30$. Kolikšen je pospešek zaboja? Vzemi $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $m = 10\,\mathrm{kg}$, $F = 50\,\mathrm{N}$ (vodoravno), $k_t = 0{,}30$, $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** pospešek $a$

:::formula
$F_N = mg$, $F_{tr} = k_t F_N$, $\sum F_x = F - F_{tr} = ma$
:::

**Rešitev:**

1. Navpično ni pospeška: $F_N = mg = 10\,\mathrm{kg} \cdot 9{,}81\,\mathrm{m/s^2} = 98{,}1\,\mathrm{N}$.
2. Zaboj drsi, zato velja kinetično trenje: $F_{tr} = 0{,}30 \cdot 98{,}1\,\mathrm{N} = 29{,}4\,\mathrm{N}$.
3. Vodoravno trenje kaže nasproti vlečni sili: $ma = 50\,\mathrm{N} - 29{,}4\,\mathrm{N} = 20{,}6\,\mathrm{N}$.
4. $a = 20{,}6\,\mathrm{N} / 10\,\mathrm{kg} \approx 2{,}06\,\mathrm{m/s^2}$.
5. Odgovor: zaboj se giblje s pospeškom približno $2{,}06\,\mathrm{m/s^2}$ v smeri vlečne sile.

### Primer 2

Klada z maso $5{,}0\,\mathrm{kg}$ je na klancu z naklonom $30^\circ$. Koeficient lepenja je $0{,}25$, koeficient kinetičnega trenja $0{,}20$. Ali klada zdrsne? Če zdrsne, kolikšen je njen pospešek in kolikšno hitrost doseže, ko iz mirovanja zdrsi $2{,}0\,\mathrm{m}$? Vzemi $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $m = 5{,}0\,\mathrm{kg}$, $\alpha = 30^\circ$, $k_l = 0{,}25$, $k_t = 0{,}20$, $s = 2{,}0\,\mathrm{m}$, $v_0 = 0$, $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** ali zdrsne, pospešek $a$ in hitrost $v$ po $2{,}0\,\mathrm{m}$

:::formula
Zdrsne, če $\tan\alpha > k_l$. Vzdolž klanca: $ma = mg\sin\alpha - k_t\,mg\cos\alpha$, torej $a = g(\sin\alpha - k_t\cos\alpha)$; $v^2 = v_0^2 + 2as$
:::

**Rešitev:**

1. $\tan 30^\circ \approx 0{,}577 > 0{,}25$, zato lepenje klade ne more zadržati: klada zdrsne.
2. Komponenta teže vzdolž klanca vleče klado navzdol: $mg\sin\alpha = 5{,}0 \cdot 9{,}81 \cdot 0{,}5\,\mathrm{N} \approx 24{,}5\,\mathrm{N}$.
3. Pravokotno na klanec ni pospeška, zato je normalna sila $F_N = mg\cos\alpha = 5{,}0 \cdot 9{,}81 \cdot 0{,}866\,\mathrm{N} \approx 42{,}5\,\mathrm{N}$; trenje $F_{tr} = 0{,}20 \cdot 42{,}5\,\mathrm{N} \approx 8{,}50\,\mathrm{N}$.
4. Rezultanta vzdolž klanca: $24{,}5\,\mathrm{N} - 8{,}50\,\mathrm{N} \approx 16{,}0\,\mathrm{N}$, pospešek $a = 16{,}0\,\mathrm{N} / 5{,}0\,\mathrm{kg} \approx 3{,}21\,\mathrm{m/s^2}$.
5. Klada začne iz mirovanja ($v_0 = 0$), zato $v = \sqrt{2as} = \sqrt{2 \cdot 3{,}21\,\mathrm{m/s^2} \cdot 2{,}0\,\mathrm{m}} \approx 3{,}58\,\mathrm{m/s}$.
6. Odgovor: klada zdrsne s pospeškom približno $3{,}21\,\mathrm{m/s^2}$ in po $2{,}0\,\mathrm{m}$ doseže hitrost približno $3{,}58\,\mathrm{m/s}$.

### Primer 3 (težji)

Geostacionarni satelit kroži nad ekvatorjem z enakim obhodnim časom, kot se Zemlja zavrti okoli svoje osi, $T = 86\,164\,\mathrm{s}$. Kolikšen je polmer njegovega tira, kolikšna je višina nad površjem in kolikšna obodna hitrost? Masa Zemlje je $5{,}972 \cdot 10^{24}\,\mathrm{kg}$, njen polmer $6371\,\mathrm{km}$, $G = 6{,}674 \cdot 10^{-11}\,\mathrm{N\,m^2/kg^2}$.

**Podatki:** $T = 86\,164\,\mathrm{s}$, $M_Z = 5{,}972 \cdot 10^{24}\,\mathrm{kg}$, $R_Z = 6371\,\mathrm{km}$, $G = 6{,}674 \cdot 10^{-11}\,\mathrm{N\,m^2/kg^2}$
**Iščemo:** polmer tira $r$, višino $h = r - R_Z$, hitrost $v$

:::formula
$G\dfrac{mM_Z}{r^2} = m\omega^2 r$, $\omega = \dfrac{2\pi}{T}$ $\Rightarrow$ $r = \sqrt[3]{\dfrac{GM_Z T^2}{4\pi^2}}$, $v = \dfrac{2\pi r}{T}$
:::

**Rešitev:**

1. Gravitacija je edina sila in opravlja vlogo radialne sile; masa satelita se pokrajša.
2. $GM_Z = 6{,}674 \cdot 10^{-11} \cdot 5{,}972 \cdot 10^{24}\,\mathrm{m^3/s^2} \approx 3{,}986 \cdot 10^{14}\,\mathrm{m^3/s^2}$.
3. $r^3 = \dfrac{3{,}986 \cdot 10^{14} \cdot (86\,164)^2}{4\pi^2}\,\mathrm{m^3} \approx 7{,}50 \cdot 10^{22}\,\mathrm{m^3}$.
4. $r = \sqrt[3]{7{,}50 \cdot 10^{22}}\,\mathrm{m} \approx 4{,}216 \cdot 10^{7}\,\mathrm{m} \approx 42\,160\,\mathrm{km}$.
5. Višina: $h = 42\,160\,\mathrm{km} - 6371\,\mathrm{km} \approx 35\,790\,\mathrm{km}$.
6. Hitrost: $v = \dfrac{2\pi \cdot 4{,}216 \cdot 10^7\,\mathrm{m}}{86\,164\,\mathrm{s}} \approx 3{,}07 \cdot 10^3\,\mathrm{m/s}$. Preizkus: $\sqrt{GM_Z/r} = \sqrt{3{,}986 \cdot 10^{14} / 4{,}216 \cdot 10^7}\,\mathrm{m/s} \approx 3{,}07 \cdot 10^3\,\mathrm{m/s}$.
7. Odgovor: tir ima polmer približno $42\,160\,\mathrm{km}$, satelit je približno $35\,790\,\mathrm{km}$ nad površjem in se giblje s hitrostjo približno $3{,}07\,\mathrm{km/s}$.

### Primer 4 – zdaj ti

Na tekočem traku pri blagajni leži paket mleka z maso $1{,}0\,\mathrm{kg}$. Blagajničarka zažene trak, ki enakomerno pospešuje in v $0{,}50\,\mathrm{s}$ doseže hitrost $0{,}40\,\mathrm{m/s}$. Koeficient lepenja med embalažo in trakom je $0{,}35$. Kolikšna sila lepenja deluje na paket in ali paket na traku zdrsne? Vzemi $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $m = 1{,}0\,\mathrm{kg}$, $v_0 = 0$, $v = 0{,}40\,\mathrm{m/s}$, $\Delta t = 0{,}50\,\mathrm{s}$, $k_l = 0{,}35$, $g = 9{,}81\,\mathrm{m/s^2}$, trak je vodoraven
**Iščemo:** potrebno silo lepenja $F_l$, ali paket zdrsne, največji pospešek traku brez zdrsa

:::formula
$a = \dfrac{\Delta v}{\Delta t}$, $F_l = ma$, $F_{l,\max} = k_l mg$
:::

**Rešitev:**

1. Če paket ne drsi, ima enak pospešek kot trak: $a = 0{,}40\,\mathrm{m/s} / 0{,}50\,\mathrm{s} = 0{,}80\,\mathrm{m/s^2}$.
2. Lepenje je edina vodoravna sila na paket, zato mora dati ves pospešek: $F_l = 1{,}0\,\mathrm{kg} \cdot 0{,}80\,\mathrm{m/s^2} = 0{,}80\,\mathrm{N}$.
3. Navpično ni pospeška, zato $F_N = mg = 9{,}81\,\mathrm{N}$ in $F_{l,\max} = 0{,}35 \cdot 9{,}81\,\mathrm{N} \approx 3{,}43\,\mathrm{N}$.
4. Primerjaj sili in sklepaj sam, nato preveri:

:::premisli
Ali paket zdrsne? Kolikšen je največji pospešek traku, pri katerem paket še ne zdrsne, in ali je odvisen od mase paketa?
---
Ne zdrsne, ker je potrebna sila $0{,}80\,\mathrm{N}$ manjša od največjega lepenja $3{,}43\,\mathrm{N}$. Iz $ma_{\max} = k_l mg$ je $a_{\max} = k_l g \approx 3{,}43\,\mathrm{m/s^2}$; masa se pokrajša, zato velja enako za lahek in težek paket.
:::

## Pogoste napake

- **Gibanje potrebuje silo.** Sila ne vzdržuje hitrosti, ampak jo spreminja. Pri enakomernem gibanju je vsota sil nič; potiskanje le uravnoteži trenje.
- **$F_N = mg$ vedno.** Na klancu je $F_N = mg\cos\alpha$, če vlečemo poševno navzgor ali smo v pospešenem dvigalu, pa je drugačna. Normalno silo vedno izračunaj iz ravnovesja pravokotno na podlago.
- **Lepenje kot $k_l F_N$ tudi v mirovanju.** $k_l F_N$ je le **največja** sila lepenja. Če omaro potiskamo s $20\,\mathrm{N}$ in se ne premakne, je sila lepenja $20\,\mathrm{N}$, ne $k_l F_N$.
- **Centripetalna ali centrifugalna sila kot dodatna sila v diagramu.** V diagram sil rišemo le prave sile (teža, vrv, trenje, gravitacija). Njihova radialna rezultanta je $mv^2/r$. Telo v ovinku ne »vleče navzven«; ko sila proti središču popusti, telo nadaljuje po tangenti.
- **Par sil po tretjem zakonu se odšteje.** Sili $\vec{F}_{AB}$ in $\vec{F}_{BA}$ delujeta na različni telesi, zato ne moreta biti v ravnovesju na istem telesu.
- **Razdalja pri gravitaciji od površja.** V $G\frac{m_1 m_2}{r^2}$ je $r$ razdalja med središčema, ne višina nad tlemi. Razdalje pretvori v metre pred vstavljanjem v $G$, pri klancih pa preveri, da je kalkulator v stopinjah.

## Povzetek

- $\sum \vec{F} = \mathrm{d}\vec{G}/\mathrm{d}t = m\vec{a}$; sila in nasprotna sila delujeta na različni telesi.
- Postopek: telo, diagram sil, osi, enačbe po komponentah, rešitev, preizkus.
- Lepenje: $F_l \le k_l F_N$; kinetično trenje: $F_{tr} = k_t F_N$; na klancu zdrs, ko $\tan\alpha > k_l$.
- Kroženje: $a_r = v^2/r = \omega^2 r$, radialna rezultanta $F_r = mv^2/r$ kaže proti središču.
- Gravitacija: $F = Gm_1m_2/r^2$; $g = GM/R^2$; krožni tir: $v = \sqrt{GM/r}$, $T^2 = 4\pi^2 r^3/(GM)$.

## Drugače: Na sliki

Diagram sil za klado na klancu (Primer 2):

```
                 F_N
                  ^
                   \        F_tr (navzgor po klancu)
                    \     /
                     [klada]
                    /  |
      smer gibanja v   |
                       v  F_g = mg
   _________________________
   \  alfa
```

Težo razstavimo na komponento vzdolž klanca $mg\sin\alpha$ (vleče klado navzdol) in komponento pravokotno na klanec $mg\cos\alpha$ (pritiska klado ob podlago). Pravokotno se $F_N$ in $mg\cos\alpha$ izničita; vzdolž klanca se $mg\sin\alpha$ in $F_{tr}$ ne izničita in dasta pospešek.

Pri kroženju si predstavljaj kamen na vrvici, ki ga vrtiš nad glavo. Hitrost je vedno tangentna na krožnico, sila vrvice pa kaže proti tvoji roki. Ko vrvico spustiš, kamen odleti po tangenti, ne radialno navzven.

## Drugače: Iz vsakdanjega življenja

**Centrifuga v laboratoriju.** Epruveta se vrti s $10\,000$ obrati na minuto pri polmeru $10\,\mathrm{cm}$. Kotna hitrost je $\omega = 2\pi \cdot 10\,000 / 60\,\mathrm{s^{-1}} \approx 1047\,\mathrm{s^{-1}}$, radialni pospešek $\omega^2 r \approx 1{,}1 \cdot 10^5\,\mathrm{m/s^2}$, kar je okoli $11\,000\,g$. Zaradi tako velikega pospeška se delci z večjo gostoto (celice, beljakovine) hitro posedejo.

**Zavore in ABS.** Ker je $k_t < k_l$, kolo, ki se kotali brez zdrsa, prenese večjo silo kot blokirano kolo, ki drsi. Sistem ABS zato zavore sproti popušča, da kolesa ne zdrsnejo, in tako skrajša zavorno pot.

**Hoja in plezanje.** Pri hoji se odrinemo nazaj, tla pa nas po tretjem zakonu z lepenjem potisnejo naprej. Na ledu je $k_l$ majhen, zato zdrsnemo. Plezalci uporabljajo magnezijo (magnezijev karbonat) in čevlje z mehko gumo, da povečajo trenje.

**Teža na drugih telesih.** Na Luni ($M = 7{,}35 \cdot 10^{22}\,\mathrm{kg}$, $R = 1737\,\mathrm{km}$) je $g = GM/R^2 \approx 1{,}6\,\mathrm{m/s^2}$, približno šestina zemeljske. Masa astronavta je enaka, teža pa šestkrat manjša.

## Drugače: Korak za korakom s številkami

Kolikšna je največja hitrost, s katero avtomobil še varno pelje skozi vodoraven ovinek s polmerom $50\,\mathrm{m}$, če je koeficient lepenja med gumami in suho cesto $0{,}80$?

1. **Sile:** teža $mg$ navzdol, normalna sila $F_N$ navzgor, lepenje $F_l$ vodoravno proti središču ovinka.
2. **Navpično:** $F_N = mg$.
3. **Radialno:** lepenje opravlja vlogo radialne sile: $F_l = mv^2/r$.
4. **Pogoj, da ne zdrsne:** $F_l \le k_l F_N$, torej $mv^2/r \le k_l mg$.
5. **Masa se pokrajša:** $v^2 \le k_l g r = 0{,}80 \cdot 9{,}81 \cdot 50\,\mathrm{m^2/s^2} = 392{,}4\,\mathrm{m^2/s^2}$.
6. **Največja hitrost:** $v_{\max} = \sqrt{392{,}4}\,\mathrm{m/s} \approx 19{,}8\,\mathrm{m/s}$.
7. **V km/h:** $19{,}8 \cdot 3{,}6 \approx 71\,\mathrm{km/h}$.

Na mokri cesti je $k_l$ lahko le okoli $0{,}4$; ker je $v_{\max} \propto \sqrt{k_l}$, se največja hitrost zmanjša za faktor $\sqrt{2}$, na približno $50\,\mathrm{km/h}$.

## Drugače: Bolj natančno

**Drugi zakon z gibalno količino.** Splošna oblika $\sum \vec{F} = \mathrm{d}\vec{G}/\mathrm{d}t$ je uporabna tudi pri telesih s spremenljivo maso (raketa, tekoči trak, na katerega pada pesek), če jo zapišemo za celoten sistem, skupaj z izvrženo ali dodano snovjo. Iz nje sledi **izrek o gibalni količini** $\Delta\vec{G} = \int \vec{F}\,\mathrm{d}t$ (sunek sile) in za zaprt sistem brez zunanjih sil, skupaj s tretjim zakonom, **ohranitev gibalne količine**: notranje sile se v parih odštejejo.

**Izpeljava radialnega pospeška.** Pri enakomernem kroženju je $\vec{r}(t) = r(\cos\omega t, \sin\omega t)$. Odvajamo: $\vec{v} = \dot{\vec{r}} = r\omega(-\sin\omega t, \cos\omega t)$, kar je pravokotno na $\vec{r}$ in dolgo $v = \omega r$. Še enkrat odvajamo: $\vec{a} = \dot{\vec{v}} = -r\omega^2(\cos\omega t, \sin\omega t) = -\omega^2\vec{r}$. Pospešek kaže proti središču, njegova velikost je $\omega^2 r = v^2/r$. Pri neenakomernem kroženju se doda tangentni pospešek $a_t = \mathrm{d}v/\mathrm{d}t$.

**Gravitacija krogelnih teles.** Newton je pokazal (izrek o lupini), da krogelno simetrično telo zunaj sebe privlači, kot da bi bila vsa masa zbrana v središču. Zato smemo Zemljo pri $g = GM_Z/R_Z^2$ obravnavati kot točko. Vrednost $9{,}82\,\mathrm{m/s^2}$, ki jo da formula, se od izmerjene $9{,}81\,\mathrm{m/s^2}$ razlikuje zaradi vrtenja Zemlje in njene sploščenosti: na ekvatorju del gravitacije »porabimo« za radialni pospešek $\omega^2 R_Z \approx 0{,}034\,\mathrm{m/s^2}$.

**Model trenja.** Zakona $F_{tr} = k_t F_N$ in $F_l \le k_l F_N$ (Amontons-Coulomb) sta empirična. Mikroskopsko se ploskvi dotikata le v vrhovih hrapavosti, prava stična ploskev pa je sorazmerna z normalno silo; zato je trenje približno neodvisno od navidezne ploskve. Pri gibanju v tekočinah je upor odvisen od hitrosti ($F \propto v$ pri majhnih, $F \propto v^2$ pri velikih hitrostih), kar vodi v diferencialno enačbo $m\dot{v} = mg - bv$ s končno hitrostjo $v_\infty = mg/b$.

## Preveri se

? Omaro, pri kateri je največja sila lepenja $30\,\mathrm{N}$, potiskamo z vodoravno silo $20\,\mathrm{N}$ in se ne premakne. Kolikšna je sila lepenja?
- $30\,\mathrm{N}$
~ $k_l F_N$ je le največja možna sila lepenja; dokler omara miruje, je lepenje toliko, kot je treba za ravnovesje.
+ $20\,\mathrm{N}$
- $10\,\mathrm{N}$
~ Odštel si $30\,\mathrm{N} - 20\,\mathrm{N}$; lepenje ni »preostanek« do meje, ampak natanko uravnoteži potiskanje.
> Omara miruje, zato je vsota sil nič: lepenje je natanko $20\,\mathrm{N}$ in nasprotno sili potiskanja. $30\,\mathrm{N}$ je le zgornja meja.

? Telo z maso $0{,}20\,\mathrm{kg}$ kroži s hitrostjo $3{,}0\,\mathrm{m/s}$ po krožnici s polmerom $0{,}50\,\mathrm{m}$. Kolikšna je radialna rezultanta sil?
- $1{,}2\,\mathrm{N}$
~ Hitrosti nisi kvadriral: $0{,}20 \cdot 3{,}0/0{,}50 = 1{,}2$. Radialni pospešek je $v^2/r$.
- $0{,}90\,\mathrm{N}$
~ S polmerom si množil namesto delil: $0{,}20 \cdot 9{,}0 \cdot 0{,}50 = 0{,}90$. Večji polmer pri isti hitrosti pomeni manjšo silo.
+ $3{,}6\,\mathrm{N}$
> $F_r = mv^2/r = 0{,}20 \cdot 9{,}0 / 0{,}50\,\mathrm{N} = 3{,}6\,\mathrm{N}$. Odgovor $1{,}2\,\mathrm{N}$ dobiš, če hitrosti ne kvadriraš.

? Kako se spremeni gravitacijska sila med telesoma, če se razdalja med njunima središčema podvoji?
- Zmanjša se na polovico.
~ Silo si vzel za obratno sorazmerno z razdaljo; v gravitacijskem zakonu je v imenovalcu $r^2$.
+ Zmanjša se na četrtino.
- Ostane enaka.
~ Masi se res ne spremenita, a sila je odvisna tudi od razdalje med središčema.
> Sila je obratno sorazmerna s kvadratom razdalje: $1/2^2 = 1/4$.

? Človek z maso $60\,\mathrm{kg}$ stoji v dvigalu, ki pospešuje navzgor s $2{,}0\,\mathrm{m/s^2}$. Kolikšna je normalna sila tal nanj ($g = 9{,}81\,\mathrm{m/s^2}$)?
- $589\,\mathrm{N}$
~ To je teža $mg$. Dvigalo pospešuje, zato vsota sil ni nič in mora biti $F_N$ večja od teže.
- $469\,\mathrm{N}$
~ Pospešek si odštel, kot da bi dvigalo pospeševalo navzdol: $m(g - a)$.
+ $709\,\mathrm{N}$
> $F_N - mg = ma$, torej $F_N = m(g + a) = 60 \cdot 11{,}81\,\mathrm{N} \approx 709\,\mathrm{N}$. $589\,\mathrm{N}$ je teža, $469\,\mathrm{N}$ bi bila pri pospešku navzdol.

? Nakupovalni voziček, ki ga potiskaš, se po tleh trgovine giblje premo s stalno hitrostjo. Kaj o silah nanj pove prvi Newtonov zakon?
- Vsota sil nanj kaže v smeri gibanja, sicer bi se ustavil.
~ To je Aristotelova ideja, da gibanje vzdržuje neuravnotežena sila. Sila ne vzdržuje hitrosti, ampak jo spreminja; potiskanje le uravnoteži trenje.
- Nanj ne deluje nobena sila.
~ Sile delujejo (teža, normalna sila, potiskanje, trenje), le njihova vsota je nič.
+ Vsota vseh sil nanj je nič.
> Prvi zakon: telo se giblje premo enakomerno natanko takrat, ko je vsota sil nanj nič. Posamezne sile so lahko velike, a se uravnotežijo.

:::simboli
\vec{F} | vektor sile | \sum \vec{F} = m\vec{a} | N | vsota vseh zunanjih sil
F | velikost sile | F = G\frac{m_1 m_2}{r^2} | N | v primeru s klancem vlečna sila
F_x | komponenta sile v smeri x | | N
F_N | pravokotna sila podlage | F_N = mg | N | na klancu F_N = mg cos α
F_{tr} | sila trenja (kinetično trenje) | F_{tr} = k_t F_N | N
F_l | sila lepenja | | N | največ k_l F_N
F_{l,\max} | največja sila lepenja | F_{l,\max} = k_l F_N | N
k_t | koeficient trenja | | – | običajno manjši od k_l
k_l | koeficient lepenja | | – | telo zdrsne, ko tan α > k_l
G | gravitacijska konstanta | | N\,m^2/kg^2 | 6,674 · 10⁻¹¹ N m²/kg²
\vec{G} | gibalna količina | \vec{G} = m\vec{v} | kg\,m/s
m | masa telesa | | kg
m_1, m_2 | masi telesa, ki se privlačita | | kg
M | masa osrednjega telesa (npr. Zemlje) | | kg
M_Z | masa Zemlje | | kg | 5,972 · 10²⁴ kg
\vec{a} | vektor pospeška | | m/s^2
a | pospešek | | m/s^2
a_r | radialni (centripetalni) pospešek | a_r = \frac{v^2}{r} = \omega^2 r | m/s^2 | kaže proti središču
v | hitrost | | m/s | pri kroženju obodna hitrost
v_0 | začetna hitrost | | m/s
r | polmer kroženja (razdalja med središčema) | | m
\omega | kotna hitrost | \omega = \frac{2\pi}{T} | s^{-1}
T | obhodni čas | | s
t | čas | | s
g | težni pospešek | | m/s^2 | 9,81 m/s² ob površju Zemlje
\alpha | naklonski kot klanca | | °
s | pot po klancu | | m
:::
