---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Elektrostatika opisuje sile med mirujočimi naboji. To so sile, ki držijo skupaj atome, molekule in kristale: ionska vez v kuhinjski soli, vodikova vez v vodi, zvijanje beljakovine in vezava zdravila na receptor so v jedru električne interakcije. Kemija je na neki način uporabna elektrostatika.

Iste zakonitosti uporabljamo v tehniki in laboratoriju: kondenzatorji v elektroniki, elektroforeza, ki ločuje DNK in beljakovine po naboju, elektrostatični filtri v dimnikih, fotokopirni stroji, masni spektrometer in elektronski mikroskop, kjer električno polje pospeši nabite delce.

V tej lekciji spoznaš:

- **Coulombov zakon** za silo med točkastima nabojema in vpliv snovi med njima,
- **električno polje** kot lastnost prostora okoli nabojev in kako ga seštevamo iz več nabojev,
- **električni potencial** in napetost ter zvezo med delom in energijo naboja,
- **kondenzator**, njegovo kapaciteto in energijo, ki jo shrani.

## Razlaga

**1. Naboj.** Naboj je lastnost delcev; obstaja pozitiven in negativen. Enoimenska naboja se odbijata, raznoimenska privlačita. Naboj je **kvantiziran**: vsak naboj je celoštevilski večkratnik osnovnega naboja $e_0 = 1{,}602 \cdot 10^{-19}\,\mathrm{C}$ (elektron ima $-e_0$, proton $+e_0$). Naboj se **ohranja**: v zaprtem sistemu je vsota nabojev stalna. Enota je **coulomb**, $1\,\mathrm{C} = 1\,\mathrm{A\,s}$.

**2. Coulombov zakon.** Točkasta naboja $q_1$ in $q_2$ na razdalji $r$ v praznem prostoru delujeta drug na drugega s silo z velikostjo

$$F = \frac{1}{4\pi\varepsilon_0}\,\frac{|q_1q_2|}{r^2}, \qquad \frac{1}{4\pi\varepsilon_0} = 8{,}99 \cdot 10^9\,\mathrm{\frac{V\,m}{A\,s}}.$$

Sila leži na zveznici nabojev; $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{A\,s/(V\,m)}$ je **influenčna konstanta**. Če sta naboja v snovi z **dielektričnostjo** $\varepsilon$ (voda: $\varepsilon \approx 80$), je sila $\varepsilon$-krat manjša. Zato se soli v vodi raztapljajo: privlak med ioni je tam okoli osemdesetkrat šibkejši.

:::premisli
Oba naboja podvojimo in hkrati podvojimo tudi razdaljo med njima. Kaj se zgodi s silo?
---
Ostane enaka: produkt nabojev se poveča štirikrat, kvadrat razdalje pa tudi štirikrat, $2 \cdot 2/2^2 = 1$.
:::

**3. Električno polje.** Naboj spremeni prostor okoli sebe: v vsaki točki je **električna poljska jakost**

$$\vec{E} = \frac{\vec{F}}{q},$$

kjer je $\vec{F}$ sila na majhen poskusni naboj $q$. Enota je $\mathrm{N/C} = \mathrm{V/m}$. Polje točkastega naboja $Q$ kaže radialno navzven (za $Q > 0$) ali navznoter (za $Q < 0$) in ima velikost

$$E = \frac{1}{4\pi\varepsilon_0}\,\frac{|Q|}{r^2}.$$

Za več nabojev velja **načelo superpozicije**: polje je **vektorska** vsota polj posameznih nabojev. Polje ponazorimo s **silnicami**, ki se začnejo na pozitivnih in končajo na negativnih nabojih; gostota silnic kaže velikost polja.

**4. Gaussov zakon in homogeno polje.** Električni pretok skozi zaprto ploskev je sorazmeren z nabojem v njej, $\oint\vec{E} \cdot \mathrm{d}\vec{S} = Q/\varepsilon_0$. Iz njega sledi, da je polje med dvema velikima vzporednima ploščama z nasprotnima nabojema $\pm Q$ in površino $S$ **homogeno**:

$$E = \frac{\sigma}{\varepsilon_0}, \qquad \sigma = \frac{Q}{S}.$$

Zunaj plošč je polje (skoraj) nič. V notranjosti prevodnika v ravnovesju je polje nič, naboj pa se zbere na površini. Če prevodnik postavimo v zunanje polje, se prosti elektroni v njem premaknejo, dokler njihovo polje v notranjosti ne izniči zunanjega (**influenca**). Na tem temelji Faradayeva kletka: kovinsko ohišje zaščiti občutljive merilne naprave pred zunanjimi električnimi motnjami, avtomobil pa potnike ob udaru strele.

**5. Potencialna energija in potencial.** Električna sila je konservativna: delo pri premiku naboja ni odvisno od poti. Zato lahko vpeljemo **električni potencial** $\varphi$, potencialno energijo na enoto naboja: $W_p = q\varphi$. **Napetost** med točkama je razlika potencialov, $U_{AB} = \varphi_A - \varphi_B$; enota je volt, $1\,\mathrm{V} = 1\,\mathrm{J/C}$. Ko se naboj $q$ premakne iz $A$ v $B$, električna sila opravi delo

$$A = qU_{AB}.$$

Potencial točkastega naboja $Q$ (z ničlo v neskončnosti) je

$$\varphi = \frac{1}{4\pi\varepsilon_0}\,\frac{Q}{r}.$$

Potencial je **skalar**, zato potenciale več nabojev preprosto seštejemo, s predznaki. Polje in potencial povezuje

$$E_x = -\frac{\mathrm{d}\varphi}{\mathrm{d}x},$$

v homogenem polju preprosto $E = U/d$. Polje kaže v smer najhitrejšega padanja potenciala; ploskve z enakim potencialom (**ekvipotencialne ploskve**) so pravokotne na silnice.

:::premisli
Elektron spustimo iz mirovanja v električnem polju. Ali se začne gibati proti višjemu ali proti nižjemu potencialu? Zakaj?
---
Proti višjemu. Sila naboj vedno vleče tja, kjer je njegova potencialna energija $W_p = q\varphi$ manjša. Ker je $q = -e_0$ negativen, je $W_p$ manjša tam, kjer je $\varphi$ večji. Pozitiven naboj bi se gibal proti nižjemu potencialu.
:::

**6. Elektronvolt.** V atomski in molekulski fiziki energijo pogosto merimo v **elektronvoltih**: $1\,\mathrm{eV}$ je energija, ki jo dobi osnovni naboj, ko preleti napetost $1\,\mathrm{V}$, torej $1\,\mathrm{eV} = 1{,}602 \cdot 10^{-19}\,\mathrm{J}$.

**7. Kondenzator.** Kondenzator sta dva prevodnika (plošči), ki nosita nasprotna naboja $\pm Q$. Med njima je napetost $U$, sorazmerna z nabojem. **Kapaciteta** je

$$C = \frac{Q}{U}, \qquad [C] = \mathrm{F} = \mathrm{A\,s/V}.$$

Za ploščati kondenzator s površino plošč $S$ in razmikom $d$, med ploščama pa je snov z dielektričnostjo $\varepsilon$, velja

$$C = \frac{\varepsilon\varepsilon_0S}{d}.$$

Dielektrik poveča kapaciteto $\varepsilon$-krat, ker se njegove molekule polarizirajo in delno izničijo polje plošč.

**8. Vezava kondenzatorjev.** Pri **vzporedni** vezavi je na vseh ista napetost, naboji se seštejejo: $C = C_1 + C_2 + \dots$ Pri **zaporedni** vezavi imajo vsi enak naboj, napetosti se seštejejo: $1/C = 1/C_1 + 1/C_2 + \dots$ (obratno kot pri uporih).

**9. Energija kondenzatorja.** Za polnjenje moramo opraviti delo proti električni sili. Shranjena energija je

$$W = \frac{1}{2}QU = \frac{1}{2}CU^2 = \frac{Q^2}{2C}.$$

Energija je shranjena v električnem polju; njena gostota je $w = \tfrac{1}{2}\varepsilon\varepsilon_0E^2$.

## Rešeni primeri

### Primer 1 (lažji)

V kristalu kuhinjske soli je razdalja med sosednjima ionoma $\mathrm{Na^+}$ in $\mathrm{Cl^-}$ enaka $0{,}282\,\mathrm{nm}$. Kolikšna je električna sila med ionoma, če ju obravnavamo kot točkasta naboja v praznem prostoru? Kolikšna bi bila sila na isti razdalji v vodi z dielektričnostjo $80$? Kolikšna je potencialna energija para v praznem prostoru, izražena v elektronvoltih?

**Podatki:** $q_1 = +e_0$, $q_2 = -e_0$, $e_0 = 1{,}602 \cdot 10^{-19}\,\mathrm{C}$, $r = 0{,}282\,\mathrm{nm} = 2{,}82 \cdot 10^{-10}\,\mathrm{m}$, $\varepsilon = 80$ (voda), $1/(4\pi\varepsilon_0) = 8{,}99 \cdot 10^9\,\mathrm{V\,m/(A\,s)}$
**Iščemo:** silo $F$ v praznem prostoru, silo $F_\mathrm{v}$ v vodi, potencialno energijo $W_p$ v $\mathrm{eV}$

:::formula
$F = \dfrac{1}{4\pi\varepsilon\varepsilon_0}\dfrac{|q_1q_2|}{r^2}$, $W_p = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r}$
:::

**Rešitev:**

1. $F = 8{,}99 \cdot 10^9 \cdot (1{,}602 \cdot 10^{-19})^2/(2{,}82 \cdot 10^{-10})^2\,\mathrm{N} \approx 2{,}90 \cdot 10^{-9}\,\mathrm{N}$; sila je privlačna, ker sta naboja raznoimenska.
2. V vodi: $F_\mathrm{v} = F/80 \approx 3{,}6 \cdot 10^{-11}\,\mathrm{N}$, ker je v snovi z dielektričnostjo $\varepsilon$ sila $\varepsilon$-krat manjša.
3. $W_p = -8{,}99 \cdot 10^9 \cdot (1{,}602 \cdot 10^{-19})^2/2{,}82 \cdot 10^{-10}\,\mathrm{J} \approx -8{,}18 \cdot 10^{-19}\,\mathrm{J}$. Tu predznaka nabojev ohranimo, ker je energija skalar s predznakom, ne velikost kot pri sili.
4. V elektronvoltih: $W_p = -8{,}18 \cdot 10^{-19}/1{,}602 \cdot 10^{-19}\,\mathrm{eV} \approx -5{,}1\,\mathrm{eV}$. Negativna energija pomeni vezano stanje.
5. Odgovor: ion deluje na ion s privlačno silo približno $2{,}9\,\mathrm{nN}$, v vodi pa le okoli $0{,}036\,\mathrm{nN}$; potencialna energija para je okoli $-5{,}1\,\mathrm{eV}$.

### Primer 2

Naboj $+4{,}0\,\mathrm{nC}$ je v točki $(-3{,}0\,\mathrm{cm}, 0)$, naboj $-4{,}0\,\mathrm{nC}$ pa v točki $(3{,}0\,\mathrm{cm}, 0)$. Kolikšna sta električna poljska jakost (velikost in smer) in potencial v točki $P = (0, 4{,}0\,\mathrm{cm})$?

**Podatki:** $Q_1 = +4{,}0\,\mathrm{nC}$ v $(-0{,}030\,\mathrm{m}, 0)$, $Q_2 = -4{,}0\,\mathrm{nC}$ v $(0{,}030\,\mathrm{m}, 0)$, točka $P = (0, 0{,}040\,\mathrm{m})$, $1/(4\pi\varepsilon_0) = 8{,}99 \cdot 10^9\,\mathrm{V\,m/(A\,s)}$
**Iščemo:** vektor $\vec{E}$ v točki $P$ in potencial $\varphi_P$

:::formula
$E_k = \dfrac{1}{4\pi\varepsilon_0}\dfrac{|Q_k|}{r_k^2}$, $\vec{E} = \vec{E}_1 + \vec{E}_2$, $\varphi = \dfrac{1}{4\pi\varepsilon_0}\sum_k\dfrac{Q_k}{r_k}$
:::

**Rešitev:**

1. Razdalja od vsakega naboja do $P$: $r = \sqrt{0{,}030^2 + 0{,}040^2}\,\mathrm{m} = 0{,}050\,\mathrm{m}$ (Pitagorov izrek, ker naboja in $P$ tvorijo pravokotna trikotnika).
2. Velikost vsakega polja: $E_1 = E_2 = 8{,}99 \cdot 10^9 \cdot 4{,}0 \cdot 10^{-9}/0{,}050^2\,\mathrm{V/m} \approx 1{,}44 \cdot 10^4\,\mathrm{V/m}$; velikosti sta enaki, ker sta naboja enako velika in enako oddaljena.
3. Smeri: $\vec{E}_1$ kaže od $Q_1$ proti $P$, enotski vektor $(0{,}6;\,0{,}8)$. $\vec{E}_2$ kaže od $P$ proti $Q_2$, enotski vektor $(0{,}6;\,-0{,}8)$, ker polje kaže stran od pozitivnega in k negativnemu naboju.
4. Vsota: $\vec{E} = 1{,}44 \cdot 10^4\,\mathrm{V/m} \cdot (1{,}2;\,0) \approx (1{,}73 \cdot 10^4\,\mathrm{V/m};\,0)$. Navpični komponenti se odštejeta.
5. Potencial: $\varphi_P = 8{,}99 \cdot 10^9\,(4{,}0 \cdot 10^{-9} - 4{,}0 \cdot 10^{-9})/0{,}050\,\mathrm{V} = 0$; potencial je skalar, zato se prispevka nasprotnih predznakov odštejeta.
6. Odgovor: polje v točki $P$ ima velikost približno $1{,}7 \cdot 10^4\,\mathrm{V/m}$ in kaže vzporedno z zveznico nabojev, od pozitivnega proti negativnemu; potencial v $P$ je nič. Ničeln potencial ne pomeni ničelnega polja.

### Primer 3 (težji)

Ploščati kondenzator ima plošči s površino $0{,}020\,\mathrm{m^2}$ na razmiku $1{,}0\,\mathrm{mm}$, vmes je zrak. Priključimo ga na napetost $100\,\mathrm{V}$. Kolikšni so kapaciteta, naboj, poljska jakost in shranjena energija? Nato kondenzator odklopimo in prostor med ploščama zapolnimo s snovjo z dielektričnostjo $4{,}0$. Kolikšni sta zdaj napetost in energija?

**Podatki:** $S = 0{,}020\,\mathrm{m^2}$, $d = 1{,}0\,\mathrm{mm} = 1{,}0 \cdot 10^{-3}\,\mathrm{m}$, $\varepsilon_\mathrm{zrak} = 1{,}0$, $U = 100\,\mathrm{V}$, $\varepsilon = 4{,}0$, $\varepsilon_0 = 8{,}85 \cdot 10^{-12}\,\mathrm{A\,s/(V\,m)}$, po odklopu je naboj stalen
**Iščemo:** $C$, $Q$, $E$, $W$ pred vstavitvijo, $U'$ in $W'$ po vstavitvi dielektrika

:::formula
$C = \dfrac{\varepsilon\varepsilon_0S}{d}$, $Q = CU$, $E = U/d$, $W = \tfrac{1}{2}CU^2 = \dfrac{Q^2}{2C}$
:::

**Rešitev:**

1. $C = 8{,}85 \cdot 10^{-12} \cdot 0{,}020/1{,}0 \cdot 10^{-3}\,\mathrm{F} \approx 1{,}77 \cdot 10^{-10}\,\mathrm{F} = 177\,\mathrm{pF}$; faktor $\varepsilon$ je $1{,}0$, ker je vmes zrak.
2. $Q = 1{,}77 \cdot 10^{-10}\,\mathrm{F} \cdot 100\,\mathrm{V} \approx 1{,}77 \cdot 10^{-8}\,\mathrm{C}$.
3. $E = 100\,\mathrm{V}/1{,}0 \cdot 10^{-3}\,\mathrm{m} = 1{,}0 \cdot 10^5\,\mathrm{V/m}$, ker je polje med ploščama homogeno.
4. $W = \tfrac{1}{2} \cdot 1{,}77 \cdot 10^{-10}\,\mathrm{F} \cdot (100\,\mathrm{V})^2 \approx 8{,}85 \cdot 10^{-7}\,\mathrm{J}$.
5. Po odklopu je naboj stalen, kapaciteta pa se poveča na $C' = 4{,}0\,C \approx 708\,\mathrm{pF}$. Napetost: $U' = Q/C' = U/4{,}0 = 25\,\mathrm{V}$.
6. Energija: $W' = Q^2/(2C') = W/4{,}0 \approx 2{,}2 \cdot 10^{-7}\,\mathrm{J}$; obliko $Q^2/(2C)$ izberemo, ker je naboj stalen.
7. Odgovor: kapaciteta je $177\,\mathrm{pF}$, naboj $17{,}7\,\mathrm{nC}$, poljska jakost $1{,}0 \cdot 10^5\,\mathrm{V/m}$, energija $0{,}89\,\mu\mathrm{J}$. Z dielektrikom napetost pade na $25\,\mathrm{V}$, energija pa na $0{,}22\,\mu\mathrm{J}$; razliko je opravilo polje, ki je dielektrik vleklo med plošči.

### Primer 4 – zdaj ti

Celična membrana deluje kot kondenzator s specifično kapaciteto $1{,}0\,\mu\mathrm{F/cm^2}$. Pri mirovni napetosti $70\,\mathrm{mV}$ je na vsaki strani membrane presežek nabojev. Koliko enkrat nabitih ionov presežka je na vsakem kvadratnem mikrometru membrane?

**Podatki:** $C_s = 1{,}0\,\mu\mathrm{F/cm^2}$ (kapaciteta na enoto površine), $U = 70\,\mathrm{mV} = 0{,}070\,\mathrm{V}$, $S = 1{,}0\,\mu\mathrm{m^2} = 1{,}0 \cdot 10^{-12}\,\mathrm{m^2}$, naboj iona $e_0 = 1{,}602 \cdot 10^{-19}\,\mathrm{C}$
**Iščemo:** število ionov $N$ na $1\,\mu\mathrm{m^2}$

:::formula
$Q = CU$, za del membrane $C = C_sS$; $N = Q/e_0$
:::

**Rešitev:**

1. Pretvorba v enote SI: $C_s = 1{,}0 \cdot 10^{-6}\,\mathrm{F}/10^{-4}\,\mathrm{m^2} = 1{,}0 \cdot 10^{-2}\,\mathrm{F/m^2}$, ker je $1\,\mathrm{cm^2} = 10^{-4}\,\mathrm{m^2}$.
2. Naboj na enoto površine: $\sigma = C_sU = 1{,}0 \cdot 10^{-2} \cdot 0{,}070\,\mathrm{C/m^2} = 7{,}0 \cdot 10^{-4}\,\mathrm{C/m^2}$, ker zveza $Q = CU$ velja za vsak kos membrane posebej.
3. Izračunaj sam naboj na $1\,\mu\mathrm{m^2}$ in iz njega število ionov.

:::premisli
Koliko ionov presežka je na kvadratnem mikrometru?
---
$Q = \sigma S = 7{,}0 \cdot 10^{-4} \cdot 1{,}0 \cdot 10^{-12}\,\mathrm{C} = 7{,}0 \cdot 10^{-16}\,\mathrm{C}$, torej $N = Q/e_0 = 7{,}0 \cdot 10^{-16}/1{,}602 \cdot 10^{-19} \approx 4{,}4 \cdot 10^3$ ionov. To je drobcen delež vseh ionov v celici, zato se koncentracija pri nastanku napetosti skoraj ne spremeni.
:::

## Pogoste napake

- **Seštevanje velikosti polj.** Polja so vektorji. V Primeru 2 bi seštevanje velikosti dalo $2{,}9 \cdot 10^4\,\mathrm{V/m}$ namesto $1{,}7 \cdot 10^4\,\mathrm{V/m}$. Razstavi na komponente.
- **Potencial kot vektor.** Potencial je skalar; seštevamo ga s predznaki nabojev, brez smeri. Ničeln potencial ne pomeni, da je polje nič, in obratno.
- **Kvadrat razdalje pri potencialu.** Sila in polje točkastega naboja padata z $1/r^2$, potencial in potencialna energija pa z $1/r$.
- **Enote kapacitete.** $1\,\mathrm{F}$ je ogromna kapaciteta. Navadne vrednosti so $\mathrm{pF}$, $\mathrm{nF}$ in $\mu\mathrm{F}$; pazi na predpone in razmik v metrih.
- **Vezava kondenzatorjev kot vezava uporov.** Pri kondenzatorjih se pri vzporedni vezavi seštejejo kapacitete, pri zaporedni pa obratne vrednosti; pri uporih je obratno.
- **Odklopljen ali priključen kondenzator.** Odklopljen kondenzator ohrani naboj, priključen ohrani napetost. Od tega je odvisno, kako se spremenita napetost in energija, ko spremenimo $C$.

## Povzetek

- Coulombov zakon: $F = \dfrac{|q_1q_2|}{4\pi\varepsilon\varepsilon_0r^2}$; v snovi z dielektričnostjo $\varepsilon$ je sila $\varepsilon$-krat manjša.
- Poljska jakost $\vec{E} = \vec{F}/q$; točkasti naboj $E = Q/(4\pi\varepsilon_0r^2)$; polja seštevamo vektorsko.
- Potencial $\varphi = Q/(4\pi\varepsilon_0r)$ je skalar; napetost $U = \varphi_A - \varphi_B$, delo $A = qU$; $E_x = -\mathrm{d}\varphi/\mathrm{d}x$, homogeno polje $E = U/d$.
- Kondenzator: $C = Q/U$, ploščati $C = \varepsilon\varepsilon_0S/d$; vzporedno $C = \sum C_k$, zaporedno $1/C = \sum 1/C_k$.
- Energija $W = \tfrac{1}{2}CU^2 = Q^2/(2C)$, gostota energije $w = \tfrac{1}{2}\varepsilon\varepsilon_0E^2$.

## Drugače: Na sliki

Polje dipola iz Primera 2 ($+$ levo, $-$ desno, točka $P$ zgoraj na simetrali):

```
                 P
              ↗  →  ↘
            /    |    \
          /      |      \
     (+)--------+--------(-)
   -3 cm         0        3 cm
```

Polje naboja $+$ kaže od njega (puščica gor-desno), polje naboja $-$ kaže k njemu (puščica dol-desno). Navpični komponenti se izničita, vodoravni seštejeta: v $P$ polje kaže vodoravno v desno. Simetrala dipola je ekvipotencialna ploskev s potencialom nič.

Silnice ploščatega kondenzatorja so vzporedne, enakomerno razmaknjene črte od pozitivne k negativni plošči. Ekvipotencialne ploskve so ravnine, vzporedne s ploščama; potencial med njima pada linearno, za $E\,\mathrm{d}x$ na vsak $\mathrm{d}x$.

## Drugače: Iz vsakdanjega življenja

**Topnost soli v vodi.** Molekule vode so dipoli, ki obkrožijo ione (hidratacija), velika dielektričnost vode pa oslabi privlak med ioni. Zato se ionske spojine raztapljajo v vodi, ne pa v nepolarnih topilih z dielektričnostjo okoli $2$, kot je heksan.

**Gelska elektroforeza.** V gelu ustvarimo homogeno polje, na primer $100\,\mathrm{V}$ na $10\,\mathrm{cm}$, torej $1000\,\mathrm{V/m}$. Molekule DNK so zaradi fosfatnih skupin negativno nabite in potujejo proti pozitivni elektrodi. Gel deluje kot sito, zato krajši odseki potujejo hitreje in se po velikosti ločijo v pasove.

**Celična membrana.** Membrana z debelino okoli $5\,\mathrm{nm}$ ima mirovno napetost okoli $70\,\mathrm{mV}$. Polje v njej je $E = U/d \approx 0{,}070/5 \cdot 10^{-9}\,\mathrm{V/m} = 1{,}4 \cdot 10^7\,\mathrm{V/m}$, kar je več kot polje, pri katerem v zraku nastane iskra. Membrana je tudi kondenzator s specifično kapaciteto okoli $1\,\mu\mathrm{F/cm^2}$.

**Iskra pri dotiku kljuke.** S hojo po preprogi se naelektriš na nekaj tisoč voltov. Ko se približaš kovinski kljuki, je polje med prstom in kljuko dovolj veliko (okoli $3 \cdot 10^6\,\mathrm{V/m}$ v suhem zraku), da zrak preskoči iskra.

## Drugače: Korak za korakom s številkami

Elektron iz mirovanja pospešimo z napetostjo $1000\,\mathrm{V}$ (kot v starem televizorju ali elektronskem mikroskopu). Kolikšni sta njegova kinetična energija in hitrost?

1. **Delo električne sile:** $A = e_0U = 1{,}602 \cdot 10^{-19}\,\mathrm{C} \cdot 1000\,\mathrm{V} = 1{,}602 \cdot 10^{-16}\,\mathrm{J}$.
2. **V elektronvoltih:** $A = 1000\,\mathrm{eV} = 1\,\mathrm{keV}$, ker je naboj osnovni in napetost $1000\,\mathrm{V}$.
3. **Kinetična energija:** vse delo se pretvori v kinetično energijo, $W_k = 1{,}602 \cdot 10^{-16}\,\mathrm{J}$.
4. **Hitrost:** $v = \sqrt{2W_k/m_e} = \sqrt{2 \cdot 1{,}602 \cdot 10^{-16}/9{,}11 \cdot 10^{-31}}\,\mathrm{m/s} \approx 1{,}88 \cdot 10^7\,\mathrm{m/s}$.
5. **Preizkus smisla:** to je okoli $6\,\%$ svetlobne hitrosti, zato je nerelativistični račun še dovolj natančen.

## Drugače: Bolj natančno

**Gaussov zakon in polje plošče.** Okoli dela neskončne plošče z nabojem na enoto površine $\sigma$ postavimo valj z osnovno ploskvijo $S$, ki prebada ploščo. Zaradi simetrije je polje pravokotno na ploščo, zato pretok teče le skozi osnovni ploskvi: $2ES = \sigma S/\varepsilon_0$, torej $E = \sigma/(2\varepsilon_0)$ za eno ploščo. Pri dveh ploščah z nasprotnima nabojema se polji med ploščama seštejeta ($E = \sigma/\varepsilon_0$), zunaj pa odštejeta.

**Potencial iz polja.** Ker je električna sila mirujočih nabojev konservativna ($\oint\vec{E} \cdot \mathrm{d}\vec{s} = 0$), je potencial dobro definiran:

$$\varphi(\vec{r}) = -\int_{\infty}^{\vec{r}}\vec{E} \cdot \mathrm{d}\vec{s}, \qquad \vec{E} = -\nabla\varphi.$$

Za točkasti naboj je $\varphi(r) = -\int_\infty^r \frac{Q}{4\pi\varepsilon_0r'^2}\,\mathrm{d}r' = \frac{Q}{4\pi\varepsilon_0r}$.

**Energija kondenzatorja.** Ko je na kondenzatorju naboj $q$, je napetost $q/C$; za prenos dodatnega $\mathrm{d}q$ potrebujemo delo $(q/C)\,\mathrm{d}q$. Integral od $0$ do $Q$ da $W = Q^2/(2C)$. Pri ploščatem kondenzatorju je $W = \frac{1}{2}\varepsilon\varepsilon_0\frac{S}{d}(Ed)^2 = \frac{1}{2}\varepsilon\varepsilon_0E^2 \cdot Sd$, kar je gostota energije, pomnožena s prostornino med ploščama.

**Dipol.** Par nabojev $\pm q$ na razdalji $l$ ima **dipolni moment** $\vec{p} = q\vec{l}$ (od $-$ proti $+$). Daleč od dipola potencial pada kot $1/r^2$, polje pa kot $1/r^3$. V zunanjem homogenem polju na dipol deluje navor $\vec{M} = \vec{p} \times \vec{E}$ in ima energijo $W = -\vec{p} \cdot \vec{E}$. Polarne molekule, na primer voda s $p \approx 6{,}2 \cdot 10^{-30}\,\mathrm{A\,s\,m}$, se zato v polju usmerijo, kar je mikroskopski izvor dielektričnosti.

## Preveri se

? Razdaljo med točkastima nabojema podvojimo. Kako se spremeni sila med njima?
- Razpolovi se.
~ Misliš, da sila z razdaljo pada linearno; Coulombova sila pada s kvadratom razdalje.
+ Zmanjša se na četrtino.
- Ostane enaka.
~ Naboja se res nista spremenila, a sila je odvisna tudi od razdalje med njima.
> $F \propto 1/r^2$, zato je pri dvojni razdalji sila $1/2^2 = 1/4$ prvotne.

? Med ploščama na razmiku $4{,}0\,\mathrm{mm}$ je napetost $200\,\mathrm{V}$. Kolikšna je poljska jakost?
+ $5{,}0 \cdot 10^4\,\mathrm{V/m}$
- $800\,\mathrm{V/m}$
~ To je $U \cdot d$ z razmikom v milimetrih: napetost si pomnožil z razmikom, namesto da bi jo delil.
- $50\,\mathrm{V/m}$
~ Razmik si pustil v milimetrih; v $E = U/d$ mora biti $d$ v metrih.
> $E = U/d = 200\,\mathrm{V}/0{,}0040\,\mathrm{m} = 5{,}0 \cdot 10^4\,\mathrm{V/m}$. $50\,\mathrm{V/m}$ dobiš, če razmika ne pretvoriš v metre.

? Koliko energije shrani kondenzator s kapaciteto $10\,\mu\mathrm{F}$ pri napetosti $12\,\mathrm{V}$?
- $1{,}44\,\mathrm{mJ}$
~ Izpustil si faktor $\tfrac{1}{2}$: napetost med polnjenjem narašča od nič, zato je delo le polovica $CU^2$.
+ $0{,}72\,\mathrm{mJ}$
- $0{,}06\,\mathrm{mJ}$
~ To je $\tfrac{1}{2}CU$; napetost v formuli za energijo nastopa v kvadratu.
> $W = \tfrac{1}{2}CU^2 = \tfrac{1}{2} \cdot 10 \cdot 10^{-6} \cdot 144\,\mathrm{J} = 0{,}72\,\mathrm{mJ}$. $1{,}44\,\mathrm{mJ}$ je $CU^2$ brez faktorja $\tfrac{1}{2}$.

? Kondenzatorja s kapacitetama $2{,}0\,\mu\mathrm{F}$ in $3{,}0\,\mu\mathrm{F}$ vežemo zaporedno. Kolikšna je nadomestna kapaciteta?
- $5{,}0\,\mu\mathrm{F}$
~ Kapacitete si seštel kot pri uporih v zaporedni vezavi; pri kondenzatorjih tako velja za vzporedno vezavo.
- $6{,}0\,\mu\mathrm{F}$
~ To je le števec $C_1C_2$ formule $C = C_1C_2/(C_1 + C_2)$; pozabil si deliti z vsoto.
+ $1{,}2\,\mu\mathrm{F}$
> $1/C = 1/2{,}0 + 1/3{,}0 = 5/6\,\mu\mathrm{F}^{-1}$, torej $C = 1{,}2\,\mu\mathrm{F}$. $5{,}0\,\mu\mathrm{F}$ velja za vzporedno vezavo.

? Nabit kondenzator odklopimo od vira in plošči razmaknemo na dvojno razdaljo. Kaj se zgodi z napetostjo med ploščama?
- Ostane enaka.
~ Napetost ostane enaka le, če je kondenzator priključen na vir; odklopljen ohrani naboj.
+ Podvoji se.
- Razpolovi se.
~ Razpolovi se kapaciteta, ne napetost; pri stalnem naboju je $U = Q/C$, zato manjša kapaciteta pomeni večjo napetost.
> $C = \varepsilon\varepsilon_0S/d$ se pri dvojnem razmiku razpolovi. Naboj odklopljenega kondenzatorja je stalen, zato se $U = Q/C$ podvoji; polje $E = U/d$ ostane enako.
