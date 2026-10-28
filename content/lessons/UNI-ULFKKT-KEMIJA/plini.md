---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Plini so povsod: zrak, ki ga dihamo, kisik v jeklenki v bolnišnici, $\mathrm{CO_2}$, ki ga proizvajajo kvasovke pri fermentaciji, vodik pri elektrolizi, dušik za inertno atmosfero v laboratoriju, zemeljski plin v kurilni napravi. Pri plinih ne tehtamo, ampak merimo **tlak**, **prostornino** in **temperaturo**, iz njih pa izračunamo **množino** snovi.

Zakaj je to mogoče? Ker se razredčeni plini obnašajo skoraj enako, ne glede na to, iz katerih molekul so. To opisuje **splošna plinska enačba**. Za zmesi plinov (zrak, izdihani zrak, izpušni plini, plini v bioreaktorju) potrebujemo še pojem **parcialnega tlaka** in **Daltonov zakon**.

V tej lekciji se naučiš:

- uporabljati splošno plinsko enačbo $pV = nRT$ in pravilno pretvarjati enote,
- iz gostote plina določiti molsko maso,
- računati parcialne tlake in množinske deleže v zmeseh,
- upoštevati vodno paro pri plinu, zbranem nad vodo,
- presoditi, kdaj model idealnega plina ni več dober.

## Razlaga

**1. Stanje plina.** Stanje dane množine plina opišemo s štirimi količinami:

- **tlak** $p$ v paskalih ($1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$; $1\,\mathrm{bar} = 10^5\,\mathrm{Pa}$; $1\,\mathrm{atm} = 101\,325\,\mathrm{Pa}$),
- **prostornina** $V$ v $\mathrm{m^3}$ ($1\,\mathrm{L} = 1\,\mathrm{dm^3} = 10^{-3}\,\mathrm{m^3}$),
- **absolutna temperatura** $T$ v kelvinih, $T/\mathrm{K} = t/^\circ\mathrm{C} + 273{,}15$,
- **množina** $n$ v molih.

**2. Plinski zakoni.** Zgodovinsko so jih odkrili posamično:

- **Boylov zakon:** pri stalnih $T$ in $n$ je $pV = \text{konst.}$ (če tlak podvojimo, se prostornina razpolovi),
- **Gay-Lussacov (Charlesov) zakon:** pri stalnih $p$ in $n$ je $V/T = \text{konst.}$,
- **Amontonsov zakon:** pri stalnih $V$ in $n$ je $p/T = \text{konst.}$,
- **Avogadrov zakon:** pri stalnih $p$ in $T$ je $V/n = \text{konst.}$ (enake prostornine plinov pri enakih pogojih vsebujejo enako število molekul).

**3. Splošna plinska enačba.** Vsi zakoni so posebni primeri enačbe

$$pV = nRT, \qquad R = 8{,}314\,\mathrm{J/(mol\,K)}.$$

Ker je $1\,\mathrm{J} = 1\,\mathrm{Pa\,m^3}$, moramo vstaviti tlak v $\mathrm{Pa}$ in prostornino v $\mathrm{m^3}$. Priročno je tudi $R = 8{,}314\,\mathrm{kPa\,L/(mol\,K)}$ (tlak v $\mathrm{kPa}$, prostornina v $\mathrm{L}$). Za stalno množino plina, ki preide iz stanja 1 v stanje 2, velja

$$\frac{p_1V_1}{T_1} = \frac{p_2V_2}{T_2}.$$

**Molska prostornina** idealnega plina pri $0\,^\circ\mathrm{C}$ in $101{,}325\,\mathrm{kPa}$ je $V_m = RT/p \approx 22{,}4\,\mathrm{L/mol}$. (Pri standardnem tlaku $100\,\mathrm{kPa}$ in $0\,^\circ\mathrm{C}$ je $22{,}7\,\mathrm{L/mol}$, pri $25\,^\circ\mathrm{C}$ in $101{,}325\,\mathrm{kPa}$ pa $24{,}5\,\mathrm{L/mol}$; vedno preveri, katere pogoje navaja naloga.)

**4. Gostota in molska masa.** Z $n = m/M$ in $\rho = m/V$ dobimo

$$pM = \rho RT \quad\Rightarrow\quad M = \frac{\rho RT}{p}, \qquad \rho = \frac{pM}{RT}.$$

Gostota plina je sorazmerna z molsko maso: pri enakih pogojih je $\mathrm{CO_2}$ ($44\,\mathrm{g/mol}$) gostejši od zraka (povprečno $29\,\mathrm{g/mol}$), helij ($4\,\mathrm{g/mol}$) pa redkejši.

**5. Zmesi plinov in Daltonov zakon.** **Parcialni tlak** $p_i$ komponente $i$ je tlak, ki bi ga ta komponenta imela, če bi sama zavzemala vso prostornino zmesi pri isti temperaturi:

$$p_i = \frac{n_iRT}{V}.$$

**Daltonov zakon:** skupni tlak zmesi idealnih plinov je vsota parcialnih tlakov,

$$p = p_1 + p_2 + \dots = \sum_i p_i.$$

Iz tega sledi zveza z **množinskim deležem** $x_i = n_i/n_{\text{skupna}}$:

$$p_i = x_i\,p, \qquad \sum_i x_i = 1.$$

Pri idealnih plinih je množinski delež enak prostorninskemu deležu: zrak ima okoli $21\,\%$ kisika po prostornini, zato $x(\mathrm{O_2}) \approx 0{,}21$.

**6. Plin, zbran nad vodo.** Ko plin (npr. $\mathrm{H_2}$ ali $\mathrm{O_2}$) zbiramo z izpodrivanjem vode, je v posodi poleg plina še nasičena vodna para. Izmerjeni tlak je vsota: $p = p(\text{plin}) + p(\mathrm{H_2O})$. Nasičeni parni tlak vode je odvisen le od temperature (pri $25\,^\circ\mathrm{C}$ približno $3{,}17\,\mathrm{kPa}$) in ga odčitamo iz tabel.

**7. Meje idealnega plina.** Model predpostavlja, da molekule nimajo lastne prostornine in se med seboj ne privlačijo. Dober je pri nizkih tlakih in visokih temperaturah. Pri visokih tlakih in nizkih temperaturah (blizu utekočinjenja) uporabimo realne modele, npr. van der Waalsovo enačbo (glej »Bolj natančno«).

## Rešeni primeri

### Primer 1 (lažji)

V jeklenki s prostornino $5{,}00\,\mathrm{L}$ je dušik pri tlaku $200\,\mathrm{kPa}$ in temperaturi $25\,^\circ\mathrm{C}$. Kolikšna je množina in kolikšna masa dušika? Molska masa $\mathrm{N_2}$ je $28{,}02\,\mathrm{g/mol}$.

**Podatki:** $V = 5{,}00\,\mathrm{L}$, $p = 200\,\mathrm{kPa}$, $t = 25\,^\circ\mathrm{C}$, $M(\mathrm{N_2}) = 28{,}02\,\mathrm{g/mol}$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$
**Iščemo:** množino $n$ in maso $m$ dušika

:::formula
$n = \dfrac{pV}{RT}$, $T = t + 273{,}15\,\mathrm{K}$, $m = nM$
:::

**Rešitev:**

1. Pretvorbe: $p = 2{,}00 \cdot 10^5\,\mathrm{Pa}$, $V = 5{,}00 \cdot 10^{-3}\,\mathrm{m^3}$, $T = 298{,}15\,\mathrm{K}$.
2. $n = \dfrac{2{,}00 \cdot 10^5\,\mathrm{Pa} \cdot 5{,}00 \cdot 10^{-3}\,\mathrm{m^3}}{8{,}314\,\mathrm{J/(mol\,K)} \cdot 298{,}15\,\mathrm{K}} = \dfrac{1000\,\mathrm{J}}{2479\,\mathrm{J/mol}} \approx 0{,}403\,\mathrm{mol}$.
3. $m = 0{,}403\,\mathrm{mol} \cdot 28{,}02\,\mathrm{g/mol} \approx 11{,}3\,\mathrm{g}$.
4. Odgovor: v jeklenki je približno $0{,}403\,\mathrm{mol}$ oziroma $11{,}3\,\mathrm{g}$ dušika.

### Primer 2

Neznan plin ima pri $0\,^\circ\mathrm{C}$ in $101{,}325\,\mathrm{kPa}$ gostoto $1{,}25\,\mathrm{g/L}$. Izračunaj njegovo molsko maso in predlagaj, kateri plin bi to lahko bil.

**Podatki:** $\rho = 1{,}25\,\mathrm{g/L}$, $t = 0\,^\circ\mathrm{C}$, $p = 101{,}325\,\mathrm{kPa}$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$
**Iščemo:** molsko maso $M$ in možen plin

:::formula
$M = \dfrac{\rho RT}{p}$
:::

**Rešitev:**

1. Pretvorbe: $\rho = 1{,}25\,\mathrm{g/L} = 1{,}25\,\mathrm{kg/m^3}$, $T = 273{,}15\,\mathrm{K}$, $p = 101\,325\,\mathrm{Pa}$.
2. $M = \dfrac{1{,}25\,\mathrm{kg/m^3} \cdot 8{,}314\,\mathrm{J/(mol\,K)} \cdot 273{,}15\,\mathrm{K}}{101\,325\,\mathrm{Pa}} \approx 0{,}0280\,\mathrm{kg/mol} = 28{,}0\,\mathrm{g/mol}$.
3. Preizkus z molsko prostornino: $1{,}25\,\mathrm{g/L} \cdot 22{,}4\,\mathrm{L/mol} = 28{,}0\,\mathrm{g/mol}$.
4. Molsko maso $28\,\mathrm{g/mol}$ imajo $\mathrm{N_2}$, $\mathrm{CO}$ in $\mathrm{C_2H_4}$; za odločitev bi potrebovali še kemijski preizkus.
5. Odgovor: molska masa plina je približno $28{,}0\,\mathrm{g/mol}$; to je lahko dušik, ogljikov monoksid ali eten.

### Primer 3 (težji)

V posodo s prostornino $10{,}0\,\mathrm{L}$ pri $27\,^\circ\mathrm{C}$ uvedemo $4{,}00\,\mathrm{g}$ helija in $16{,}0\,\mathrm{g}$ kisika. Izračunaj množinska deleža, parcialna tlaka in skupni tlak. Molski masi: $M(\mathrm{He}) = 4{,}003\,\mathrm{g/mol}$, $M(\mathrm{O_2}) = 32{,}00\,\mathrm{g/mol}$.

**Podatki:** $V = 10{,}0\,\mathrm{L}$, $t = 27\,^\circ\mathrm{C}$, $m(\mathrm{He}) = 4{,}00\,\mathrm{g}$, $m(\mathrm{O_2}) = 16{,}0\,\mathrm{g}$, $M(\mathrm{He}) = 4{,}003\,\mathrm{g/mol}$, $M(\mathrm{O_2}) = 32{,}00\,\mathrm{g/mol}$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$
**Iščemo:** $x(\mathrm{He})$, $x(\mathrm{O_2})$, $p(\mathrm{He})$, $p(\mathrm{O_2})$, skupni tlak $p$

:::formula
$n_i = m_i/M_i$, $x_i = n_i/n$, $p = \dfrac{nRT}{V}$, $p_i = x_i\,p = \dfrac{n_iRT}{V}$ (Daltonov zakon $p = \sum p_i$)
:::

**Rešitev:**

1. Množini: $n(\mathrm{He}) = 4{,}00 / 4{,}003\,\mathrm{mol} \approx 0{,}999\,\mathrm{mol}$, $n(\mathrm{O_2}) = 16{,}0 / 32{,}00\,\mathrm{mol} = 0{,}500\,\mathrm{mol}$; skupaj $n \approx 1{,}499\,\mathrm{mol}$.
2. Množinska deleža: $x(\mathrm{He}) = 0{,}999 / 1{,}499 \approx 0{,}667$, $x(\mathrm{O_2}) \approx 0{,}333$. Čeprav je kisika po masi štirikrat več, je helija po množini dvakrat več.
3. Skupni tlak: $T = 300{,}15\,\mathrm{K}$, $V = 1{,}00 \cdot 10^{-2}\,\mathrm{m^3}$, $p = \dfrac{1{,}499 \cdot 8{,}314 \cdot 300{,}15}{1{,}00 \cdot 10^{-2}}\,\mathrm{Pa} \approx 3{,}74 \cdot 10^5\,\mathrm{Pa} = 374\,\mathrm{kPa}$.
4. Parcialna tlaka: $p(\mathrm{He}) = 0{,}667 \cdot 374\,\mathrm{kPa} \approx 249\,\mathrm{kPa}$, $p(\mathrm{O_2}) = 0{,}333 \cdot 374\,\mathrm{kPa} \approx 125\,\mathrm{kPa}$.
5. Preizkus: $p(\mathrm{O_2}) = \dfrac{0{,}500 \cdot 8{,}314 \cdot 300{,}15}{1{,}00 \cdot 10^{-2}}\,\mathrm{Pa} \approx 125\,\mathrm{kPa}$ in $249 + 125 = 374\,\mathrm{kPa}$.
6. Odgovor: $x(\mathrm{He}) \approx 0{,}667$ in $x(\mathrm{O_2}) \approx 0{,}333$, parcialna tlaka sta približno $249\,\mathrm{kPa}$ in $125\,\mathrm{kPa}$, skupni tlak pa $374\,\mathrm{kPa}$.

## Pogoste napake

- **Temperatura v stopinjah Celzija.** V $pV = nRT$ in $p_1V_1/T_1 = p_2V_2/T_2$ vedno vstavimo kelvine. Pri $0\,^\circ\mathrm{C}$ bi sicer delili z nič.
- **Mešanje enot.** $R = 8{,}314\,\mathrm{J/(mol\,K)}$ zahteva $\mathrm{Pa}$ in $\mathrm{m^3}$. Če vstaviš $\mathrm{kPa}$ in $\mathrm{L}$, je rezultat pravilen (faktorja $10^3$ in $10^{-3}$ se izničita), če pa $\mathrm{kPa}$ in $\mathrm{m^3}$, se zmotiš za faktor $1000$.
- **Parcialni tlak iz masnega deleža.** $p_i = x_i\,p$ velja za **množinski** delež, ne za masnega. V Primeru 3 je kisika po masi $80\,\%$, njegov parcialni tlak pa je le tretjina skupnega.
- **22,4 L/mol pri vseh pogojih.** Ta vrednost velja le pri $0\,^\circ\mathrm{C}$ in $101{,}325\,\mathrm{kPa}$.
- **Pozabljena vodna para.** Pri plinu, zbranem nad vodo, je tlak suhega plina manjši od izmerjenega za parni tlak vode.
- **Idealni plin pri visokem tlaku.** Pri več deset barih ali blizu vrelišča se realni plini lahko opazno razlikujejo od $pV = nRT$.

## Povzetek

- $pV = nRT$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$; tlak v $\mathrm{Pa}$, prostornina v $\mathrm{m^3}$, temperatura v $\mathrm{K}$.
- Za stalno množino: $p_1V_1/T_1 = p_2V_2/T_2$ (Boyle, Gay-Lussac, Amontons kot posebni primeri).
- $V_m \approx 22{,}4\,\mathrm{L/mol}$ pri $0\,^\circ\mathrm{C}$ in $101{,}325\,\mathrm{kPa}$; $M = \rho RT/p$.
- Daltonov zakon: $p = \sum p_i$, $p_i = x_i\,p = n_iRT/V$.
- Plin nad vodo: $p(\text{plin}) = p - p(\mathrm{H_2O})$.
- Model idealnega plina velja pri nizkih tlakih in visokih temperaturah.

## Drugače: Na sliki

Predstavljaj si posodo iz Primera 3 kot škatlo z dvema vrstama kroglic:

```
 +-----------------------------+
 |  o   o    .   o    o   .    |    o  helij  (0,999 mol, 2/3 molekul)
 |    o    .    o   o    o     |    .  kisik  (0,500 mol, 1/3 molekul)
 |  .   o    o     .   o    o  |
 |    o   .    o   o    .      |    p(He) = 249 kPa
 +-----------------------------+    p(O2) = 125 kPa
                                     p     = 374 kPa
```

Tlak nastane zaradi trkov molekul s stenami. Ker se pri idealnem plinu molekule ne zmenijo druga za drugo, vsaka vrsta »tolče« po stenah, kot da bi bila sama. Helijevih molekul je dvakrat več, zato prispevajo dve tretjini tlaka, ne glede na to, da je vsaka od njih osemkrat lažja od molekule kisika: lažje molekule so hitrejše, in pri isti temperaturi imajo vse molekule enako povprečno kinetično energijo.

## Drugače: Iz vsakdanjega življenja

**Dihanje na višini.** Zrak ima na vseh višinah okoli $21\,\%$ kisika, a skupni tlak z višino pada. Ob morju je $p(\mathrm{O_2}) \approx 0{,}21 \cdot 101\,\mathrm{kPa} \approx 21\,\mathrm{kPa}$, na vrhu Everesta pri približno $34\,\mathrm{kPa}$ pa le okoli $7\,\mathrm{kPa}$. Ker prehod kisika v kri določa parcialni tlak, ne delež, alpinisti brez dodatnega kisika težko dihajo.

**Potapljanje.** Na vsakih $10\,\mathrm{m}$ globine se tlak poveča za približno $100\,\mathrm{kPa}$. Na $40\,\mathrm{m}$ je tlak okoli $500\,\mathrm{kPa}$, parcialni tlak dušika pa že tako velik, da povzroča dušikovo omamo; zato potapljači za globoke potope uporabljajo zmesi s helijem. Ob prehitrem dviganju se raztopljeni plini iz krvi sproščajo v mehurčkih (dekompresijska bolezen).

**Fermentacija in bioreaktorji.** Pri vrenju mošta kvasovke proizvajajo $\mathrm{CO_2}$. Iz izmerjene prostornine sproščenega plina in splošne plinske enačbe izračunamo množino $\mathrm{CO_2}$ in s tem, koliko sladkorja je že pretvorjenega. V bioreaktorjih z merjenjem parcialnih tlakov $\mathrm{O_2}$ in $\mathrm{CO_2}$ v izstopnem plinu spremljamo dihanje celic.

**Pnevmatike.** Tlak v pnevmatikah izmerimo zjutraj, ker se med vožnjo segrejejo. Pri stalni prostornini je $p \propto T$: segretje z $20\,^\circ\mathrm{C}$ na $50\,^\circ\mathrm{C}$ poveča absolutni tlak za faktor $323/293 \approx 1{,}10$.

## Drugače: Korak za korakom s številkami

Pri reakciji cinka s klorovodikovo kislino zberemo vodik nad vodo. Pri $25\,^\circ\mathrm{C}$ in zunanjem tlaku $101{,}0\,\mathrm{kPa}$ je zbranega plina $250\,\mathrm{mL}$. Nasičeni parni tlak vode pri $25\,^\circ\mathrm{C}$ je $3{,}17\,\mathrm{kPa}$. Koliko vodika smo zbrali?

1. **Tlak suhega vodika:** $p(\mathrm{H_2}) = 101{,}0\,\mathrm{kPa} - 3{,}17\,\mathrm{kPa} = 97{,}83\,\mathrm{kPa}$.
2. **Enote:** $p = 9{,}783 \cdot 10^4\,\mathrm{Pa}$, $V = 2{,}50 \cdot 10^{-4}\,\mathrm{m^3}$, $T = 298{,}15\,\mathrm{K}$.
3. **Produkt $pV$:** $9{,}783 \cdot 10^4 \cdot 2{,}50 \cdot 10^{-4} \approx 24{,}46\,\mathrm{J}$.
4. **Produkt $RT$:** $8{,}314 \cdot 298{,}15 \approx 2479\,\mathrm{J/mol}$.
5. **Množina:** $n = 24{,}46 / 2479\,\mathrm{mol} \approx 9{,}87 \cdot 10^{-3}\,\mathrm{mol}$.
6. **Masa:** $m = 9{,}87 \cdot 10^{-3}\,\mathrm{mol} \cdot 2{,}016\,\mathrm{g/mol} \approx 0{,}0199\,\mathrm{g}$.
7. **Primerjava:** če vodne pare ne bi upoštevali, bi dobili $1{,}019 \cdot 10^{-2}\,\mathrm{mol}$, kar je približno $3\,\%$ preveč.

## Drugače: Bolj natančno

**Kinetična teorija plinov.** Iz trkov molekul s steno (sprememba gibalne količine $2mv_x$ pri vsakem trku) sledi

$$pV = \tfrac{1}{3}Nm\langle v^2 \rangle,$$

kjer je $N$ število molekul in $\langle v^2 \rangle$ povprečje kvadrata hitrosti. Primerjava s $pV = nRT = Nk_BT$ da povprečno kinetično energijo molekule $\frac{1}{2}m\langle v^2 \rangle = \frac{3}{2}k_BT$: temperatura je merilo za kinetično energijo molekul. Korenska srednja hitrost je $v_{\mathrm{rms}} = \sqrt{3RT/M}$; za dušik pri $25\,^\circ\mathrm{C}$ je $\sqrt{3 \cdot 8{,}314 \cdot 298{,}15 / 0{,}02801}\,\mathrm{m/s} \approx 515\,\mathrm{m/s}$. Daltonov zakon sledi neposredno: prispevki različnih vrst molekul k sili na steno se seštejejo.

**Van der Waalsova enačba.** Za realne pline

$$\left(p + \frac{an^2}{V^2}\right)(V - nb) = nRT.$$

Člen $an^2/V^2$ popravi tlak zaradi privlaka med molekulami (molekule ob steni »vleče« nazaj), člen $nb$ pa odšteje lastno prostornino molekul. Za $\mathrm{CO_2}$ je $a \approx 0{,}364\,\mathrm{Pa\,m^6/mol^2}$ in $b \approx 4{,}27 \cdot 10^{-5}\,\mathrm{m^3/mol}$. Za $1{,}00\,\mathrm{mol}$ $\mathrm{CO_2}$ v $1{,}00\,\mathrm{L}$ pri $300\,\mathrm{K}$ da idealni plin $p = 2{,}49\,\mathrm{MPa}$, van der Waalsova enačba pa

$$p = \frac{nRT}{V - nb} - \frac{an^2}{V^2} \approx 2{,}61\,\mathrm{MPa} - 0{,}36\,\mathrm{MPa} \approx 2{,}24\,\mathrm{MPa},$$

kar je okoli $10\,\%$ manj.

**Kompresijski faktor.** Odstop od idealnosti opišemo z $Z = pV_m/(RT)$. Za idealni plin je $Z = 1$; $Z < 1$ pomeni prevlado privlačnih sil, $Z > 1$ prevlado odbojnih (lastna prostornina). Pri zelo nizkem tlaku gre $Z \to 1$ za vse pline, kar je natančen pomen trditve, da se »vsi plini v limiti obnašajo idealno«.

## Preveri se

? Koliko kelvinov je $25\,^\circ\mathrm{C}$?
- $248{,}15\,\mathrm{K}$
+ $298{,}15\,\mathrm{K}$
- $25\,\mathrm{K}$
> $T/\mathrm{K} = t/^\circ\mathrm{C} + 273{,}15 = 298{,}15$.

? Pri stalni temperaturi in množini plina tlak podvojimo. Kaj se zgodi s prostornino?
- Podvoji se.
+ Razpolovi se.
- Ostane enaka.
> Po Boylovem zakonu je $pV$ stalen, zato se pri dvakrat večjem tlaku prostornina razpolovi.

? V zmesi je $0{,}30\,\mathrm{mol}$ $\mathrm{N_2}$ in $0{,}10\,\mathrm{mol}$ $\mathrm{O_2}$, skupni tlak je $200\,\mathrm{kPa}$. Kolikšen je parcialni tlak kisika?
- $100\,\mathrm{kPa}$
- $66{,}7\,\mathrm{kPa}$
+ $50\,\mathrm{kPa}$
> $x(\mathrm{O_2}) = 0{,}10/0{,}40 = 0{,}25$, $p(\mathrm{O_2}) = 0{,}25 \cdot 200\,\mathrm{kPa} = 50\,\mathrm{kPa}$. $66{,}7\,\mathrm{kPa}$ dobiš, če deliš z množino dušika namesto s skupno množino.

? Kolikšna je molska prostornina idealnega plina pri $0\,^\circ\mathrm{C}$ in $101{,}325\,\mathrm{kPa}$?
+ $22{,}4\,\mathrm{L/mol}$
- $24{,}5\,\mathrm{L/mol}$
- $8{,}31\,\mathrm{L/mol}$
> $V_m = RT/p = 8{,}314 \cdot 273{,}15 / 101\,325\,\mathrm{m^3/mol} \approx 0{,}0224\,\mathrm{m^3/mol}$. $24{,}5\,\mathrm{L/mol}$ velja pri $25\,^\circ\mathrm{C}$.
