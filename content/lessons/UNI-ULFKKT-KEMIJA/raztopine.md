---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Večina kemijskih reakcij v laboratoriju, v industriji in v živih organizmih poteka v **raztopinah**. Fiziološka raztopina za infuzijo, gojišče za bakterije, reagent za titracijo, škropivo za vinograd, zdravilo v sirupu: povsod moramo vedeti, **koliko** snovi je raztopljene, in znati raztopino pripraviti ali razredčiti na želeno koncentracijo. Napaka za faktor deset pri pripravi raztopine je v laboratoriju in v lekarni lahko usodna.

Raztopine imajo tudi lastnosti, ki jih čisto topilo nima: zmrzujejo pri nižji temperaturi, vrejo pri višji, imajo nižji parni tlak in povzročajo osmozo. Te **koligativne lastnosti** so odvisne le od števila raztopljenih delcev, ne od njihove vrste. Zato posipamo ceste s soljo, zato morajo biti infuzijske raztopine izotonične s krvjo in zato lahko iz znižanja tališča določimo molsko maso neznane snovi.

V tej lekciji se naučiš:

- izražati sestavo raztopine z različnimi koncentracijami in jih pretvarjati,
- pripraviti raztopino iz trdne snovi in z redčenjem,
- računati znižanje tališča, zvišanje vrelišča in osmozni tlak.

## Razlaga

**1. Osnovni pojmi.** **Raztopina** je homogena zmes; snov, ki je je več (običajno voda), je **topilo**, raztopljena snov je **topljenec**. **Nasičena** raztopina vsebuje največjo množino topljenca, ki se pri dani temperaturi še raztopi; to je **topnost**.

**2. Načini izražanja sestave.**

- **Množinska koncentracija** (molarnost): $c = \dfrac{n(\text{topljenca})}{V(\text{raztopine})}$, enota $\mathrm{mol/L}$ (oznaka $\mathrm{M}$). Odvisna je od temperature, ker se prostornina s temperaturo spreminja.
- **Masna koncentracija:** $\gamma = \dfrac{m(\text{topljenca})}{V(\text{raztopine})}$, enota $\mathrm{g/L}$.
- **Masni delež:** $w = \dfrac{m(\text{topljenca})}{m(\text{raztopine})}$, brez enote, pogosto v $\%$.
- **Molalnost:** $b = \dfrac{n(\text{topljenca})}{m(\text{topila})}$, enota $\mathrm{mol/kg}$. Ni odvisna od temperature, zato jo uporabljamo pri koligativnih lastnostih.
- **Množinski delež:** $x_i = \dfrac{n_i}{n_{\text{skupna}}}$, vsota vseh deležev je $1$.

Pozor na imenovalce: pri $c$ in $\gamma$ je to prostornina **raztopine**, pri $w$ masa **raztopine**, pri $b$ pa masa **topila**.

**3. Pretvarjanje.** Most med maso in prostornino raztopine je **gostota** $\rho = m(\text{raztopine})/V(\text{raztopine})$. Iz masnega deleža izračunamo množinsko koncentracijo z

$$c = \frac{w\,\rho}{M}.$$

(Pri $\rho$ v $\mathrm{g/L}$ in $M$ v $\mathrm{g/mol}$ dobimo $c$ v $\mathrm{mol/L}$; gostota $1{,}18\,\mathrm{g/mL}$ je $1180\,\mathrm{g/L}$.) Varna pot pri vsaki pretvorbi: izberi preprosto osnovo (npr. $1\,\mathrm{L}$ ali $100\,\mathrm{g}$ raztopine), izračunaj maso, množino in prostornino vsake komponente, nato sestavi želeno koncentracijo.

**4. Priprava raztopine iz trdne snovi.** Za prostornino $V$ s koncentracijo $c$ potrebujemo $n = cV$ in $m = cVM$. Snov natehtamo, raztopimo v manj topila, prenesemo v **merilno bučko** in dopolnimo do oznake. (Ne dodajamo $V$ topila, ker se prostornina pri raztapljanju spremeni.)

**5. Redčenje.** Pri redčenju dodamo topilo, množina topljenca pa ostane enaka:

$$c_1 V_1 = c_2 V_2.$$

Tu je $c_1$ koncentracija založne raztopine, $V_1$ prostornina, ki jo odpipetiramo, $c_2$ in $V_2$ pa koncentracija in **končna** prostornina razredčene raztopine. Pri mešanju dveh raztopin istega topljenca velja $c_1V_1 + c_2V_2 = c\,(V_1 + V_2)$, če so prostornine aditivne (približno pri razredčenih vodnih raztopinah). Pri redčenju koncentriranih kislin vedno **kislino vlivamo v vodo**, ne obratno, ker se sprošča veliko toplote.

**6. Koligativne lastnosti.** Raztopljeni delci (molekule ali ioni) zmanjšajo »delež« topila v raztopini. Posledice:

- **Znižanje parnega tlaka** (Raoultov zakon): $p = x_{\text{topila}}\,p^*$, kjer je $p^*$ parni tlak čistega topila.
- **Zvišanje vrelišča:** $\Delta T_v = i\,K_e\,b$, za vodo je ebulioskopska konstanta $K_e = 0{,}512\,\mathrm{K\,kg/mol}$.
- **Znižanje tališča (zmrzišča):** $\Delta T_t = i\,K_k\,b$, za vodo je krioskopska konstanta $K_k = 1{,}86\,\mathrm{K\,kg/mol}$.
- **Osmozni tlak:** $\Pi = i\,c\,RT$ (van 't Hoffova enačba).

**Van 't Hoffov faktor** $i$ pove, na koliko delcev razpade formulska enota: za neelektrolite (glukoza, saharoza, sečnina) je $i = 1$, za $\mathrm{NaCl}$ idealno $2$, za $\mathrm{CaCl_2}$ idealno $3$. V resnici je zaradi privlaka med ioni nekoliko manjši od idealnega.

**Osmoza** je prehajanje topila skozi polprepustno membrano iz razredčene v koncentriranejšo raztopino. Osmozni tlak je tlak, ki ga moramo pritisniti na raztopino, da osmozo ustavimo. Raztopini z enakim osmoznim tlakom sta **izotonični**.

## Rešeni primeri

### Primer 1 (lažji)

Pripraviti moramo $250\,\mathrm{mL}$ raztopine $\mathrm{NaCl}$ s koncentracijo $0{,}200\,\mathrm{mol/L}$. Koliko soli natehtamo? Molska masa $\mathrm{NaCl}$ je $58{,}44\,\mathrm{g/mol}$.

**Podatki:** $V = 250\,\mathrm{mL}$, $c = 0{,}200\,\mathrm{mol/L}$, $M(\mathrm{NaCl}) = 58{,}44\,\mathrm{g/mol}$
**Iščemo:** maso $m(\mathrm{NaCl})$

:::formula
$n = c\,V$, $m = n\,M$
:::

**Rešitev:**

1. $V = 250\,\mathrm{mL} = 0{,}250\,\mathrm{L}$.
2. $n = 0{,}200\,\mathrm{mol/L} \cdot 0{,}250\,\mathrm{L} = 0{,}0500\,\mathrm{mol}$.
3. $m = 0{,}0500\,\mathrm{mol} \cdot 58{,}44\,\mathrm{g/mol} \approx 2{,}92\,\mathrm{g}$.
4. Postopek: natehtamo $2{,}92\,\mathrm{g}$ $\mathrm{NaCl}$, raztopimo v okoli $150\,\mathrm{mL}$ vode, prenesemo v merilno bučko za $250\,\mathrm{mL}$ in dopolnimo do oznake.
5. Odgovor: natehtati moramo približno $2{,}92\,\mathrm{g}$ natrijevega klorida.

### Primer 2

Koncentrirana klorovodikova kislina ima masni delež $\mathrm{HCl}$ $37\,\%$ in gostoto $1{,}18\,\mathrm{g/mL}$. Izračunaj njeno množinsko koncentracijo in prostornino, ki jo potrebujemo za $500\,\mathrm{mL}$ raztopine s koncentracijo $0{,}100\,\mathrm{mol/L}$. $M(\mathrm{HCl}) = 36{,}46\,\mathrm{g/mol}$.

**Podatki:** $w(\mathrm{HCl}) = 0{,}37$, $\rho = 1{,}18\,\mathrm{g/mL}$, $M(\mathrm{HCl}) = 36{,}46\,\mathrm{g/mol}$, $V_2 = 500\,\mathrm{mL}$, $c_2 = 0{,}100\,\mathrm{mol/L}$
**Iščemo:** koncentracijo $c_1$ koncentrirane kisline in prostornino $V_1$

:::formula
$c = \dfrac{w\,\rho}{M}$, $c_1V_1 = c_2V_2$
:::

**Rešitev:**

1. Osnova $1\,\mathrm{L}$ koncentrirane kisline: masa $1000\,\mathrm{mL} \cdot 1{,}18\,\mathrm{g/mL} = 1180\,\mathrm{g}$.
2. Masa $\mathrm{HCl}$: $0{,}37 \cdot 1180\,\mathrm{g} \approx 437\,\mathrm{g}$; množina $437 / 36{,}46\,\mathrm{mol} \approx 11{,}97\,\mathrm{mol}$.
3. Torej $c_1 \approx 12{,}0\,\mathrm{mol/L}$.
4. Redčenje: $V_1 = \dfrac{c_2V_2}{c_1} = \dfrac{0{,}100\,\mathrm{mol/L} \cdot 500\,\mathrm{mL}}{11{,}97\,\mathrm{mol/L}} \approx 4{,}18\,\mathrm{mL}$.
5. Postopek: v merilno bučko za $500\,\mathrm{mL}$ nalijemo nekaj vode, dodamo $4{,}18\,\mathrm{mL}$ koncentrirane kisline in dopolnimo z vodo do oznake.
6. Odgovor: koncentrirana kislina ima koncentracijo približno $12{,}0\,\mathrm{mol/L}$; za pripravo potrebujemo približno $4{,}18\,\mathrm{mL}$ te kisline.

### Primer 3 (težji)

V $50{,}0\,\mathrm{g}$ vode raztopimo $2{,}50\,\mathrm{g}$ neznanega neelektrolita. Raztopina zmrzne pri $-0{,}930\,^\circ\mathrm{C}$. Izračunaj molsko maso snovi in vrelišče raztopine pri normalnem tlaku. Za vodo je $K_k = 1{,}86\,\mathrm{K\,kg/mol}$, $K_e = 0{,}512\,\mathrm{K\,kg/mol}$, tališče $0{,}00\,^\circ\mathrm{C}$ in vrelišče $100{,}00\,^\circ\mathrm{C}$.

**Podatki:** $m(\text{topljenca}) = 2{,}50\,\mathrm{g}$, $m(\text{vode}) = 50{,}0\,\mathrm{g}$, $t_t = -0{,}930\,^\circ\mathrm{C}$, $i = 1$, $K_k = 1{,}86\,\mathrm{K\,kg/mol}$, $K_e = 0{,}512\,\mathrm{K\,kg/mol}$, tališče vode $0{,}00\,^\circ\mathrm{C}$, vrelišče vode $100{,}00\,^\circ\mathrm{C}$
**Iščemo:** molsko maso $M$ in vrelišče raztopine $t_v$

:::formula
$\Delta T_t = K_k\,b$, $b = \dfrac{n}{m(\text{topila})}$, $M = \dfrac{m}{n}$, $\Delta T_v = K_e\,b$
:::

**Rešitev:**

1. Znižanje tališča: $\Delta T_t = 0{,}00 - (-0{,}930) = 0{,}930\,\mathrm{K}$.
2. Molalnost: $b = \dfrac{0{,}930\,\mathrm{K}}{1{,}86\,\mathrm{K\,kg/mol}} = 0{,}500\,\mathrm{mol/kg}$.
3. Množina topljenca: $n = 0{,}500\,\mathrm{mol/kg} \cdot 0{,}0500\,\mathrm{kg} = 0{,}0250\,\mathrm{mol}$.
4. Molska masa: $M = \dfrac{2{,}50\,\mathrm{g}}{0{,}0250\,\mathrm{mol}} = 100\,\mathrm{g/mol}$.
5. Zvišanje vrelišča: $\Delta T_v = 0{,}512 \cdot 0{,}500\,\mathrm{K} = 0{,}256\,\mathrm{K}$, torej $t_v \approx 100{,}26\,^\circ\mathrm{C}$.
6. Odgovor: molska masa snovi je $100\,\mathrm{g/mol}$, raztopina vre pri približno $100{,}26\,^\circ\mathrm{C}$. Znižanje tališča je več kot trikrat večje od zvišanja vrelišča, zato je krioskopija natančnejša metoda.

## Pogoste napake

- **Prostornina topila namesto raztopine.** Pri $c$ delimo s prostornino **raztopine**. Če $2{,}92\,\mathrm{g}$ soli stresemo v $250\,\mathrm{mL}$ vode, raztopina nima natanko $250\,\mathrm{mL}$.
- **Molarnost in molalnost.** $c$ (na liter raztopine) in $b$ (na kilogram topila) sta pri razredčenih vodnih raztopinah številsko blizu, pri koncentriranih pa ne. V formulah za $\Delta T$ nastopa $b$.
- **Pozabljen van 't Hoffov faktor.** $0{,}1\,\mathrm{mol/kg}$ $\mathrm{NaCl}$ da približno dvakrat večje znižanje tališča kot $0{,}1\,\mathrm{mol/kg}$ glukoze.
- **$V_2$ pri redčenju kot dodana prostornina.** V $c_1V_1 = c_2V_2$ je $V_2$ **končna** prostornina, ne prostornina dodane vode.
- **Masni delež v odstotkih v formuli.** Vstavi $w = 0{,}37$, ne $37$.
- **Enote gostote.** $\mathrm{g/mL}$ pomnoži s $1000$, da dobiš $\mathrm{g/L}$, sicer je $c$ tisočkrat premajhna.
- **Temperatura pri osmoznem tlaku.** V $\Pi = icRT$ je $T$ v kelvinih, $c$ pa v $\mathrm{mol/m^3}$, če hočeš $\Pi$ v paskalih.

## Povzetek

- $c = n/V_{\text{raztopine}}$, $\gamma = m/V_{\text{raztopine}}$, $w = m/m_{\text{raztopine}}$, $b = n/m_{\text{topila}}$, $x_i = n_i/n$.
- Pretvorba: $c = w\rho/M$; pri vsaki pretvorbi izberi osnovo ($1\,\mathrm{L}$ ali $100\,\mathrm{g}$).
- Priprava: $m = cVM$ v merilni bučki; redčenje: $c_1V_1 = c_2V_2$ ($V_2$ je končna prostornina).
- Koligativne lastnosti so odvisne od števila delcev: $p = x_{\text{topila}}p^*$, $\Delta T_v = iK_eb$, $\Delta T_t = iK_kb$, $\Pi = icRT$.
- Za vodo: $K_k = 1{,}86\,\mathrm{K\,kg/mol}$, $K_e = 0{,}512\,\mathrm{K\,kg/mol}$.
- Iz znižanja tališča ali osmoznega tlaka določimo molsko maso topljenca.

## Drugače: Na sliki

Redčenje si predstavljaj kot isto število »kroglic« topljenca v večji posodi:

```
   pred redčenjem          po redčenju
   +--------+              +-------------------------+
   | ****** |  + voda  ->  |  *    *     *    *   *  |
   | ****** |              |    *    *     *     *   |
   +--------+              |  *    *    *    *    *  |
   V1 = 10 mL              +-------------------------+
   c1 = 1,0 mol/L          V2 = 100 mL,  c2 = 0,10 mol/L
```

Kroglic je enako ($n = c_1V_1 = c_2V_2$), prostornina je desetkrat večja, zato je koncentracija desetkrat manjša.

Osmozo si predstavljaj kot U-cev s polprepustno membrano na dnu. Na levi je čista voda, na desni raztopina sladkorja. Molekule vode prehajajo v obe smeri, a v desno pogosteje, zato gladina na desni naraste. Višinska razlika ustvari hidrostatski tlak, ki je v ravnovesju enak osmoznemu tlaku.

## Drugače: Iz vsakdanjega življenja

**Fiziološka raztopina.** Infuzijska raztopina $\mathrm{NaCl}$ z masno koncentracijo $9\,\mathrm{g/L}$ ima $c = 9/58{,}44\,\mathrm{mol/L} \approx 0{,}154\,\mathrm{mol/L}$. Z $i \approx 2$ je pri telesni temperaturi ($310\,\mathrm{K}$) osmozni tlak $\Pi \approx 2 \cdot 154\,\mathrm{mol/m^3} \cdot 8{,}314 \cdot 310\,\mathrm{Pa} \approx 7{,}9 \cdot 10^5\,\mathrm{Pa}$, kar je približno enako kot v krvni plazmi. Raztopina je izotonična: eritrociti v njej ne nabreknejo in se ne skrčijo. V čisti vodi (hipotonični) bi popokali, v koncentrirani soli (hipertonični) bi se nagubali.

**Soljenje cest.** Sol zniža zmrzišče vode, zato se led na cesti stali tudi pod $0\,^\circ\mathrm{C}$. $\mathrm{CaCl_2}$ ($i \approx 3$) je pri nizkih temperaturah učinkovitejši od $\mathrm{NaCl}$.

**Rastline in konzerviranje.** Korenine črpajo vodo z osmozo, ker je v celicah koncentracija raztopljenih snovi večja kot v talni vodi. Zasoljena tla (npr. ob morju ali po namakanju) obrnejo smer osmoze in rastline uvenejo. Iz istega razloga sladkor v marmeladi in sol v suhem mesu odtegneta vodo mikroorganizmom in hrano konzervirata.

**Razsoljevanje morske vode.** Pri obratni osmozi na morsko vodo pritisnemo z večjim tlakom od osmoznega (za morsko vodo okoli $2{,}5$ do $3\,\mathrm{MPa}$), da voda teče skozi membrano iz slane v sladko stran.

## Drugače: Korak za korakom s številkami

V $180{,}0\,\mathrm{g}$ vode raztopimo $20{,}0\,\mathrm{g}$ $\mathrm{NaOH}$ ($M = 40{,}00\,\mathrm{g/mol}$). Gostota raztopine je $1{,}109\,\mathrm{g/mL}$. Izrazi sestavo na vse načine. $M(\mathrm{H_2O}) = 18{,}02\,\mathrm{g/mol}$.

1. **Masa raztopine:** $20{,}0 + 180{,}0 = 200{,}0\,\mathrm{g}$.
2. **Masni delež:** $w = 20{,}0 / 200{,}0 = 0{,}100 = 10{,}0\,\%$.
3. **Množina $\mathrm{NaOH}$:** $n = 20{,}0 / 40{,}00 = 0{,}500\,\mathrm{mol}$.
4. **Prostornina raztopine:** $V = 200{,}0\,\mathrm{g} / 1{,}109\,\mathrm{g/mL} \approx 180{,}3\,\mathrm{mL}$. (Opazi: skoraj enaka prostornini same vode.)
5. **Množinska koncentracija:** $c = 0{,}500\,\mathrm{mol} / 0{,}1803\,\mathrm{L} \approx 2{,}77\,\mathrm{mol/L}$. Preizkus s $c = w\rho/M = 0{,}100 \cdot 1109 / 40{,}00 \approx 2{,}77\,\mathrm{mol/L}$.
6. **Masna koncentracija:** $\gamma = 20{,}0\,\mathrm{g} / 0{,}1803\,\mathrm{L} \approx 111\,\mathrm{g/L}$.
7. **Molalnost:** $b = 0{,}500\,\mathrm{mol} / 0{,}1800\,\mathrm{kg} \approx 2{,}78\,\mathrm{mol/kg}$.
8. **Množinski delež:** $n(\mathrm{H_2O}) = 180{,}0 / 18{,}02 \approx 9{,}99\,\mathrm{mol}$, $x(\mathrm{NaOH}) = 0{,}500 / (0{,}500 + 9{,}99) \approx 0{,}0477$.

## Drugače: Bolj natančno

**Izvor koligativnih lastnosti.** V idealni raztopini je kemijski potencial topila $\mu_1 = \mu_1^* + RT\ln x_1$. Ker je $x_1 < 1$, je $\ln x_1 < 0$ in topilo v raztopini ima nižji kemijski potencial kot čisto topilo. Zato ima nižji parni tlak (Raoult), ravnotežje s trdnim topilom se premakne k nižji temperaturi (znižanje tališča), ravnotežje s paro k višji (zvišanje vrelišča), čisto topilo pa spontano prehaja v raztopino (osmoza).

**Izpeljava $\Delta T_t = K_kb$.** Za razredčeno raztopino je $\ln x_1 = \ln(1 - x_2) \approx -x_2$. Iz pogoja ravnotežja med trdnim topilom in raztopino ter Gibbs-Helmholtzove enačbe dobimo

$$\Delta T_t \approx \frac{RT_t^{*2}}{\Delta_{\mathrm{tal}}H}\,x_2 \approx \frac{RT_t^{*2}M_1}{\Delta_{\mathrm{tal}}H}\,b, \qquad K_k = \frac{RT_t^{*2}M_1}{\Delta_{\mathrm{tal}}H}.$$

Za vodo ($T_t^* = 273{,}15\,\mathrm{K}$, $M_1 = 0{,}018\,02\,\mathrm{kg/mol}$, $\Delta_{\mathrm{tal}}H = 6{,}01\,\mathrm{kJ/mol}$) to da $K_k \approx 1{,}86\,\mathrm{K\,kg/mol}$. Konstanta je torej lastnost **topila**, ne topljenca.

**Raoultov zakon s številkami.** Za raztopino $1{,}00\,\mathrm{mol}$ saharoze v $1000\,\mathrm{g}$ vode je $n(\mathrm{H_2O}) \approx 55{,}5\,\mathrm{mol}$, $x_1 \approx 55{,}5/56{,}5 \approx 0{,}982$. Pri $25\,^\circ\mathrm{C}$ ($p^* = 3{,}17\,\mathrm{kPa}$) je parni tlak $p \approx 3{,}11\,\mathrm{kPa}$; znižanje je le okoli $0{,}06\,\mathrm{kPa}$, zato je merjenje parnega tlaka manj občutljivo kot krioskopija ali osmometrija.

**Realne raztopine elektrolitov.** Izmerjeni $i$ je manjši od idealnega, ker se ioni v raztopini delno združujejo v ionske pare in ker jih obdaja ionska atmosfera (Debye-Hücklova teorija). Za $0{,}1\,\mathrm{mol/kg}$ $\mathrm{NaCl}$ je $i \approx 1{,}9$. V natančnih računih nadomestimo koncentracijo z aktivnostjo, molalnost pa z **osmolalnostjo** (število mol delcev na kilogram topila), ki jo v medicinskih laboratorijih merijo neposredno.

**Osmometrija polimerov.** Ker je $\Pi$ že pri majhnih koncentracijah merljiv (milimol na liter da nekaj kilopaskalov), z osmoznim tlakom določamo molske mase beljakovin in polimerov, pri katerih bi bilo znižanje tališča premajhno za merjenje.

## Preveri se

? V $250\,\mathrm{mL}$ raztopine je raztopljenih $0{,}50\,\mathrm{mol}$ snovi. Kolikšna je množinska koncentracija?
- $0{,}125\,\mathrm{mol/L}$
- $0{,}50\,\mathrm{mol/L}$
+ $2{,}0\,\mathrm{mol/L}$
> $c = n/V = 0{,}50\,\mathrm{mol} / 0{,}250\,\mathrm{L} = 2{,}0\,\mathrm{mol/L}$. Odgovor $0{,}125$ dobiš, če množiš namesto deliš.

? $10\,\mathrm{mL}$ raztopine s koncentracijo $1{,}0\,\mathrm{mol/L}$ razredčimo z vodo na končno prostornino $100\,\mathrm{mL}$. Kolikšna je nova koncentracija?
+ $0{,}10\,\mathrm{mol/L}$
- $0{,}090\,\mathrm{mol/L}$
- $10\,\mathrm{mol/L}$
> $c_2 = c_1V_1/V_2 = 1{,}0 \cdot 10 / 100\,\mathrm{mol/L} = 0{,}10\,\mathrm{mol/L}$. $0{,}090$ bi dobil, če bi dodal $100\,\mathrm{mL}$ vode (končna prostornina $110\,\mathrm{mL}$).

? Katera vodna raztopina z molalnostjo $0{,}10\,\mathrm{mol/kg}$ ima najnižje tališče?
- glukoza
- $\mathrm{NaCl}$
+ $\mathrm{CaCl_2}$
> Znižanje tališča je sorazmerno z $i\,b$: glukoza $i = 1$, $\mathrm{NaCl}$ $i \approx 2$, $\mathrm{CaCl_2}$ $i \approx 3$. Največ delcev da $\mathrm{CaCl_2}$.

? Kaj je molalnost?
- množina topljenca na liter raztopine
+ množina topljenca na kilogram topila
- masa topljenca na kilogram raztopine
> Molalnost je $b = n(\text{topljenca})/m(\text{topila})$ v $\mathrm{mol/kg}$; množina na liter raztopine je množinska koncentracija.
