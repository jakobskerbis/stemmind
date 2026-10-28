---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Plin v jeklenki, zrak v pljučih, para v turbini in pline, ki nastajajo pri kemijski reakciji, opišemo z istimi tremi količinami: tlakom $p$, prostornino $V$ in temperaturo $T$. Pri nizkih tlakih in dovolj visokih temperaturah so med njimi preproste zveze, ki jih združuje **plinska enačba** $pV = nRT$.

Kinetična teorija gre korak dlje: pokaže, **zakaj** plinska enačba velja. Plin si predstavljamo kot ogromno število drobnih molekul, ki se naključno gibljejo in prožno trkajo ob stene. Iz Newtonovih zakonov za posamezne molekule dobimo tlak in temperaturo celotnega plina. Tako izvemo, kaj temperatura sploh je, koliko **notranje energije** ima plin in zakaj imajo različni plini različne **toplotne kapacitete**. Ta znanja potrebuješ pri termodinamiki, kemijski kinetiki, difuziji, fiziologiji dihanja in povsod, kjer računaš s plini.

## Razlaga

**1. Model idealnega plina.** Idealni plin je model, v katerem:

- so molekule zelo majhne v primerjavi z razdaljami med njimi (njihova lastna prostornina je zanemarljiva),
- med molekulami ni privlačnih ali odbojnih sil, razen ob trkih,
- so trki med molekulami in s stenami prožni,
- je gibanje molekul naključno, vse smeri so enakovredne.

Model dobro opiše realne pline pri tlakih do nekaj barov in temperaturah daleč nad vreliščem.

**2. Množina snovi in temperatura.** Množina $n$ (enota $\mathrm{mol}$) je povezana s številom molekul $N$ prek Avogadrove konstante: $N = nN_A$, $N_A = 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}}$. Masa je $m = nM$, kjer je $M$ molska masa. V plinskih enačbah je temperatura vedno **absolutna**, v kelvinih: $T/\mathrm{K} = t/{}^\circ\mathrm{C} + 273{,}15$.

**3. Plinska enačba.** Za idealni plin velja

$$pV = nRT = Nk_BT,$$

kjer je $R = 8{,}314\,\mathrm{J/(mol\,K)}$ splošna plinska konstanta in $k_B = R/N_A = 1{,}381 \cdot 10^{-23}\,\mathrm{J/K}$ Boltzmannova konstanta. Za stalno množino plina, ki preide iz stanja 1 v stanje 2, velja $\dfrac{p_1V_1}{T_1} = \dfrac{p_2V_2}{T_2}$. Posebni primeri so:

- **izotermna** sprememba ($T$ stalna): $pV = \text{konst.}$ (Boyle-Mariotte),
- **izobarna** sprememba ($p$ stalen): $V/T = \text{konst.}$ (Gay-Lussac),
- **izohorna** sprememba ($V$ stalna): $p/T = \text{konst.}$

Pri $0\,^\circ\mathrm{C}$ in $101{,}325\,\mathrm{kPa}$ zavzame $1\,\mathrm{mol}$ idealnega plina $22{,}4\,\mathrm{L}$. Iz plinske enačbe sledi tudi gostota plina $\rho = pM/(RT)$.

**4. Tlak iz kinetične teorije.** Molekula z maso $m_0$, ki s hitrostjo $v_x$ zadene steno, se odbije z $-v_x$ in steni preda gibalno količino $2m_0v_x$. Ko seštejemo sunke vseh molekul na enoto ploščine in časa (izpeljava je v razdelku »Bolj natančno«), dobimo

$$p = \frac{1}{3}\frac{N}{V}m_0\langle v^2\rangle = \frac{2}{3}\frac{N}{V}\langle W_k\rangle,$$

kjer je $\langle W_k\rangle = \tfrac{1}{2}m_0\langle v^2\rangle$ povprečna kinetična energija translacijskega gibanja ene molekule.

**5. Pomen temperature.** Primerjamo izraz za tlak s plinsko enačbo $pV = Nk_BT$ in dobimo

$$\langle W_k\rangle = \tfrac{3}{2}k_BT.$$

**Absolutna temperatura je mera za povprečno kinetično energijo naključnega gibanja molekul.** Pri isti temperaturi imajo molekule vseh plinov enako povprečno kinetično energijo, lažje molekule pa se zato gibljejo hitreje. Koren povprečnega kvadrata hitrosti je

$$v_{\text{ef}} = \sqrt{\langle v^2\rangle} = \sqrt{\frac{3k_BT}{m_0}} = \sqrt{\frac{3RT}{M}}.$$

**6. Notranja energija in ekviparticijski izrek.** Notranja energija $W_n$ (v kemiji in tehniki $U$) idealnega plina je vsota energij vseh molekul. Ker med molekulami ni sil, je odvisna le od temperature. **Ekviparticijski izrek** pravi, da vsaka prostostna stopnja, ki v energiji nastopa s kvadratnim členom, prispeva v povprečju $\tfrac{1}{2}k_BT$ na molekulo:

- **enoatomni plin** (He, Ne, Ar): 3 translacijske prostostne stopnje, $W_n = \tfrac{3}{2}nRT$;
- **dvoatomni plin** ($\mathrm{N_2}$, $\mathrm{O_2}$, zrak) pri sobni temperaturi: 3 translacijske in 2 rotacijski, $W_n = \tfrac{5}{2}nRT$;
- **večatomne nelinearne molekule** ($\mathrm{H_2O}$, $\mathrm{CH_4}$): 3 translacijske in 3 rotacijske, $W_n \approx 3nRT$.

Splošno je $W_n = \tfrac{f}{2}nRT$, kjer je $f$ število prostostnih stopenj. Nihanje vezi pri sobni temperaturi večinoma še ni vzbujeno (kvantni pojav), pri visokih temperaturah pa prispeva dodatno.

**7. Toplotne kapacitete.** Toplotna kapaciteta pove, koliko toplote potrebujemo, da telo segrejemo za $1\,\mathrm{K}$. Za pline je pomembno, pri kakšnih pogojih segrevamo:

- pri **stalni prostornini** plin ne opravlja dela, vsa toplota gre v notranjo energijo: $Q_V = nC_V\Delta T$, $C_V = \tfrac{f}{2}R$;
- pri **stalnem tlaku** se plin razteza in opravi delo $p\Delta V = nR\Delta T$, zato potrebuje več toplote: $Q_p = nC_p\Delta T$.

Za idealni plin velja **Mayerjeva enačba**

$$C_p = C_V + R.$$

Razmerje $\kappa = C_p/C_V$ (adiabatni eksponent) je $5/3 \approx 1{,}67$ za enoatomne in $7/5 = 1{,}40$ za dvoatomne pline. Tu sta $C_V$ in $C_p$ molski toplotni kapaciteti v $\mathrm{J/(mol\,K)}$; specifični toplotni kapaciteti (na kilogram) dobimo z deljenjem z molsko maso: $c = C/M$.

**8. Realni plini (na kratko).** Pri visokih tlakih ali nizkih temperaturah postanejo pomembni lastna prostornina molekul in privlak med njimi. Van der Waalsova enačba $\left(p + \dfrac{an^2}{V^2}\right)(V - nb) = nRT$ ju upošteva s konstantama $a$ in $b$, ki sta značilni za plin.

## Rešeni primeri

### Primer 1 (lažji)

Jeklenka s prostornino $20\,\mathrm{L}$ vsebuje kisik pod tlakom $150\,\mathrm{bar}$ pri temperaturi $20\,^\circ\mathrm{C}$. Kolikšna sta množina in masa kisika? Kolikšno prostornino bi ta kisik zavzel pri $0\,^\circ\mathrm{C}$ in $101{,}325\,\mathrm{kPa}$? Kisik obravnavaj kot idealni plin.

**Podatki:** $V = 20\,\mathrm{L} = 0{,}020\,\mathrm{m^3}$, $p = 150\,\mathrm{bar} = 1{,}50 \cdot 10^7\,\mathrm{Pa}$, $T = 293{,}15\,\mathrm{K}$, $M(\mathrm{O_2}) = 32\,\mathrm{g/mol}$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$; normalni pogoji $T_0 = 273{,}15\,\mathrm{K}$, $p_0 = 101\,325\,\mathrm{Pa}$
**Iščemo:** množino $n$, maso $m$, prostornino $V_0$ pri normalnih pogojih

:::formula
$pV = nRT \Rightarrow n = \dfrac{pV}{RT}$, $m = nM$, $V_0 = \dfrac{nRT_0}{p_0}$
:::

**Rešitev:**

1. $n = \dfrac{1{,}50 \cdot 10^7\,\mathrm{Pa} \cdot 0{,}020\,\mathrm{m^3}}{8{,}314\,\mathrm{J/(mol\,K)} \cdot 293{,}15\,\mathrm{K}} = \dfrac{3{,}00 \cdot 10^5\,\mathrm{J}}{2437\,\mathrm{J/mol}} \approx 123\,\mathrm{mol}$.
2. $m = 123{,}1\,\mathrm{mol} \cdot 32\,\mathrm{g/mol} \approx 3{,}94 \cdot 10^3\,\mathrm{g} = 3{,}94\,\mathrm{kg}$.
3. $V_0 = \dfrac{123{,}1 \cdot 8{,}314 \cdot 273{,}15}{101\,325}\,\mathrm{m^3} \approx 2{,}76\,\mathrm{m^3}$.
4. Odgovor: v jeklenki je približno $123\,\mathrm{mol}$ oziroma $3{,}94\,\mathrm{kg}$ kisika, ki bi pri normalnih pogojih zavzel približno $2{,}76\,\mathrm{m^3}$. (Pri $150\,\mathrm{bar}$ je model idealnega plina le približek; napaka je nekaj odstotkov.)

### Primer 2

Kolikšna je povprečna translacijska kinetična energija molekule plina pri $300\,\mathrm{K}$? Kolikšna je pri tej temperaturi efektivna hitrost $v_{\text{ef}}$ molekul dušika in atomov helija?

**Podatki:** $T = 300\,\mathrm{K}$, $k_B = 1{,}381 \cdot 10^{-23}\,\mathrm{J/K}$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$, $M(\mathrm{N_2}) = 28\,\mathrm{g/mol}$, $M(\mathrm{He}) = 4{,}0\,\mathrm{g/mol}$
**Iščemo:** $\langle W_k\rangle$, $v_{\text{ef}}(\mathrm{N_2})$, $v_{\text{ef}}(\mathrm{He})$

:::formula
$\langle W_k\rangle = \tfrac{3}{2}k_BT$, $v_{\text{ef}} = \sqrt{\dfrac{3RT}{M}}$
:::

**Rešitev:**

1. $\langle W_k\rangle = 1{,}5 \cdot 1{,}381 \cdot 10^{-23}\,\mathrm{J/K} \cdot 300\,\mathrm{K} \approx 6{,}21 \cdot 10^{-21}\,\mathrm{J}$. Velja za vse pline.
2. Dušik: $v_{\text{ef}} = \sqrt{\dfrac{3 \cdot 8{,}314 \cdot 300}{0{,}028}}\,\mathrm{m/s} \approx 517\,\mathrm{m/s}$ (molska masa v $\mathrm{kg/mol}$!).
3. Helij: $v_{\text{ef}} = \sqrt{\dfrac{3 \cdot 8{,}314 \cdot 300}{0{,}0040}}\,\mathrm{m/s} \approx 1{,}37 \cdot 10^3\,\mathrm{m/s}$.
4. Razmerje hitrosti je $\sqrt{28/4{,}0} = \sqrt{7} \approx 2{,}65$.
5. Odgovor: povprečna kinetična energija je približno $6{,}21 \cdot 10^{-21}\,\mathrm{J}$; molekule dušika imajo efektivno hitrost približno $517\,\mathrm{m/s}$, atomi helija pa približno $1370\,\mathrm{m/s}$.

### Primer 3 (težji)

$2{,}0\,\mathrm{mol}$ dušika segrejemo s $300\,\mathrm{K}$ na $400\,\mathrm{K}$, enkrat pri stalni prostornini in enkrat pri stalnem tlaku. Koliko toplote potrebujemo v vsakem primeru? Kolikšna je sprememba notranje energije in koliko dela opravi plin pri stalnem tlaku? Dušik obravnavaj kot idealni dvoatomni plin.

**Podatki:** $n = 2{,}0\,\mathrm{mol}$, $T_1 = 300\,\mathrm{K}$, $T_2 = 400\,\mathrm{K}$, dvoatomni plin ($f = 5$), $R = 8{,}314\,\mathrm{J/(mol\,K)}$
**Iščemo:** $Q_V$, $Q_p$, $\Delta W_n$, delo plina pri stalnem tlaku $A'$

:::formula
$C_V = \tfrac{5}{2}R$, $C_p = C_V + R = \tfrac{7}{2}R$; $Q_V = nC_V\Delta T$, $Q_p = nC_p\Delta T$, $\Delta W_n = nC_V\Delta T$, $A' = p\Delta V = nR\Delta T$
:::

**Rešitev:**

1. $\Delta T = 100\,\mathrm{K}$, $C_V = 2{,}5 \cdot 8{,}314 \approx 20{,}8\,\mathrm{J/(mol\,K)}$, $C_p \approx 29{,}1\,\mathrm{J/(mol\,K)}$.
2. Pri stalni prostornini: $Q_V = 2{,}0 \cdot 20{,}785 \cdot 100\,\mathrm{J} \approx 4{,}16\,\mathrm{kJ}$.
3. Pri stalnem tlaku: $Q_p = 2{,}0 \cdot 29{,}10 \cdot 100\,\mathrm{J} \approx 5{,}82\,\mathrm{kJ}$.
4. Notranja energija idealnega plina je odvisna le od temperature, zato je v obeh primerih $\Delta W_n = nC_V\Delta T \approx 4{,}16\,\mathrm{kJ}$.
5. Delo plina pri stalnem tlaku: $A' = nR\Delta T = 2{,}0 \cdot 8{,}314 \cdot 100\,\mathrm{J} \approx 1{,}66\,\mathrm{kJ}$. Preizkus: $Q_p - \Delta W_n = 5{,}82 - 4{,}16 = 1{,}66\,\mathrm{kJ}$. ✓
6. Odgovor: pri stalni prostornini potrebujemo približno $4{,}16\,\mathrm{kJ}$, pri stalnem tlaku približno $5{,}82\,\mathrm{kJ}$ toplote. Notranja energija se v obeh primerih poveča za $4{,}16\,\mathrm{kJ}$; pri stalnem tlaku gre razlika, $1{,}66\,\mathrm{kJ}$, v delo, ki ga plin opravi pri razširjanju.

## Pogoste napake

- **Temperatura v stopinjah Celzija.** V $pV = nRT$, $\tfrac{3}{2}k_BT$ in $v_{\text{ef}}$ mora biti $T$ v kelvinih. Segrevanje zaprte posode s $27\,^\circ\mathrm{C}$ na $127\,^\circ\mathrm{C}$ poveča tlak za faktor $400/300$, ne $127/27$.
- **Molska masa v g/mol.** V $\sqrt{3RT/M}$ vstavi $M$ v $\mathrm{kg/mol}$, sicer dobiš hitrost, ki je $\sqrt{1000} \approx 32$-krat premajhna.
- **Mešanje enot tlaka in prostornine.** Z $R = 8{,}314\,\mathrm{J/(mol\,K)}$ uporabljaj $\mathrm{Pa}$ in $\mathrm{m^3}$ (ali dosledno $\mathrm{kPa}$ in $\mathrm{L}$). $1\,\mathrm{bar} = 10^5\,\mathrm{Pa}$, $1\,\mathrm{L} = 10^{-3}\,\mathrm{m^3}$.
- **Ena toplotna kapaciteta za plin.** Plin ima različno toplotno kapaciteto pri stalnem tlaku in pri stalni prostornini; $C_p > C_V$, ker pri stalnem tlaku plin opravlja delo.
- **$\tfrac{3}{2}nRT$ za vse pline.** Ta izraz je le translacijski del. Dvoatomni plini imajo pri sobni temperaturi $W_n = \tfrac{5}{2}nRT$.
- **Povprečna hitrost in efektivna hitrost.** $v_{\text{ef}} = \sqrt{\langle v^2\rangle}$ ni enaka povprečni velikosti hitrosti $\langle v\rangle$; razlikujeta se za nekaj odstotkov.

## Povzetek

- Idealni plin: $pV = nRT = Nk_BT$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$, $k_B = 1{,}381 \cdot 10^{-23}\,\mathrm{J/K}$; $T$ v kelvinih.
- Kinetična teorija: $p = \tfrac{1}{3}\tfrac{N}{V}m_0\langle v^2\rangle$, $\langle W_k\rangle = \tfrac{3}{2}k_BT$, $v_{\text{ef}} = \sqrt{3RT/M}$.
- Notranja energija idealnega plina je odvisna le od $T$: $W_n = \tfrac{f}{2}nRT$ ($f = 3$ enoatomni, $f = 5$ dvoatomni).
- $C_V = \tfrac{f}{2}R$, $C_p = C_V + R$, $\kappa = C_p/C_V$ ($1{,}67$ oziroma $1{,}40$).

## Drugače: Na sliki

Predstavljaj si škatlo, polno drobnih kroglic, ki letijo v vse smeri in se odbijajo od sten. Vsak odboj je majhen sunek na steno; milijarde sunkov na sekundo se zlijejo v enakomeren tlak.

```
 +---------------------------+
 |  o->      <-o     o       |
 |      o          ^         |  <- vsak odboj od stene
 |   v    o->      o     <-o |     prenese 2 m0 v_x
 |         o          o      |
 +---------------------------+
```

- Če škatlo stisnemo na polovico (enaka $T$), kroglice zadenejo vsako steno dvakrat pogosteje: tlak se podvoji.
- Če plin segrejemo, se kroglice gibljejo hitreje: udarci so močnejši **in** pogostejši, zato je $p \propto \langle v^2\rangle \propto T$.

V diagramu $p(V)$ so izoterme hiperbole $p = nRT/V$; izoterma pri višji temperaturi leži više in bolj desno.

## Drugače: Iz vsakdanjega življenja

**Gostota zraka.** Zrak ima molsko maso okoli $29\,\mathrm{g/mol}$. Pri $20\,^\circ\mathrm{C}$ in $101\,\mathrm{kPa}$ je njegova gostota $\rho = pM/(RT) \approx 1{,}20\,\mathrm{kg/m^3}$. Topel zrak je redkejši, zato se dviga; na tem temeljijo balon na vroč zrak, vlek v dimniku in naravno prezračevanje.

**Dihanje in potapljanje.** Na globini $10\,\mathrm{m}$ je tlak dvakrat večji kot na površju, zato se zrak v pljučih potapljača, ki zadrži dih, stisne na polovico. Potapljač z jeklenko pa vdihuje zrak pri tlaku okolice; če bi med dvigom zadržal dih, bi se zrak v pljučih razširil in jih poškodoval.

**Osmozni tlak.** Za razredčene raztopine velja van 't Hoffova enačba $\Pi = cRT$, ki ima enako obliko kot plinska enačba ($p = \frac{n}{V}RT$). Raztopljeni delci se obnašajo podobno kot molekule plina v posodi.

**Hitrost molekul in difuzija.** Molekule zraka se pri sobni temperaturi gibljejo s hitrostmi okoli $500\,\mathrm{m/s}$, a vonj se po sobi širi počasi, ker vsaka molekula že po povprečno okoli $70\,\mathrm{nm}$ poti trči z drugo in spremeni smer. Lahki plini (vodik, helij) difundirajo in uhajajo skozi tanke stene hitreje kot težki.

## Drugače: Korak za korakom s številkami

Koliko molekul je v $1\,\mathrm{cm^3}$ zraka pri $20\,^\circ\mathrm{C}$ in $101\,325\,\mathrm{Pa}$?

1. **Enote:** $V = 1\,\mathrm{cm^3} = 1{,}0 \cdot 10^{-6}\,\mathrm{m^3}$, $T = 293{,}15\,\mathrm{K}$.
2. **Plinska enačba z molekulami:** $N = \dfrac{pV}{k_BT}$.
3. **Števec:** $pV = 101\,325 \cdot 1{,}0 \cdot 10^{-6}\,\mathrm{J} \approx 0{,}101\,\mathrm{J}$.
4. **Imenovalec:** $k_BT = 1{,}381 \cdot 10^{-23} \cdot 293{,}15\,\mathrm{J} \approx 4{,}05 \cdot 10^{-21}\,\mathrm{J}$.
5. **Rezultat:** $N \approx 0{,}101 / 4{,}05 \cdot 10^{-21} \approx 2{,}5 \cdot 10^{19}$ molekul.
6. **Preizkus z molsko prostornino:** pri $20\,^\circ\mathrm{C}$ zavzame mol plina okoli $24{,}1\,\mathrm{L}$; $N_A/24{,}1 \cdot 10^{3}\,\mathrm{cm^3} \approx 2{,}5 \cdot 10^{19}\,\mathrm{cm^{-3}}$. ✓

## Drugače: Bolj natančno

**Izpeljava tlaka.** Opazujmo steno s ploščino $S$, pravokotno na os $x$. V času $\Delta t$ steno zadenejo tiste molekule s komponento hitrosti $v_x > 0$, ki so od nje oddaljene manj kot $v_x\Delta t$; teh je $\tfrac{N}{V}Sv_x\Delta t$ (če štejemo le molekule s to $v_x$). Vsaka preda gibalno količino $2m_0v_x$. Povprečimo po vseh molekulah, pri čemer upoštevamo, da se proti steni giblje le polovica:

$$p = \frac{F}{S} = \frac{1}{S\Delta t}\cdot\frac{1}{2}\frac{N}{V}S\Delta t\cdot 2m_0\langle v_x^2\rangle = \frac{N}{V}m_0\langle v_x^2\rangle.$$

Ker so vse smeri enakovredne, je $\langle v_x^2\rangle = \langle v_y^2\rangle = \langle v_z^2\rangle = \tfrac{1}{3}\langle v^2\rangle$ in dobimo $p = \tfrac{1}{3}\tfrac{N}{V}m_0\langle v^2\rangle$. Trki med molekulami rezultata ne spremenijo, ker se pri njih ohranjata gibalna količina in energija.

**Maxwellova porazdelitev.** Hitrosti molekul niso enake, ampak porazdeljene po Maxwellovi porazdelitvi

$$f(v) = 4\pi\left(\frac{m_0}{2\pi k_BT}\right)^{3/2}v^2\,e^{-m_0v^2/(2k_BT)}.$$

Iz nje sledijo najverjetnejša hitrost $\sqrt{2k_BT/m_0}$, povprečna $\sqrt{8k_BT/(\pi m_0)}$ in efektivna $\sqrt{3k_BT/m_0}$, v razmerju približno $1 : 1{,}13 : 1{,}22$. Delež molekul z energijo nad pragom $E_a$ je sorazmeren z Boltzmannovim faktorjem $e^{-E_a/(k_BT)}$, kar razloži Arrheniusovo odvisnost hitrosti kemijskih reakcij od temperature.

**Mayerjeva enačba.** Iz $\Delta W_n = Q - p\Delta V$ (prvi zakon termodinamike) pri stalnem tlaku in $p\Delta V = nR\Delta T$ sledi $nC_p\Delta T = nC_V\Delta T + nR\Delta T$, torej $C_p - C_V = R$. Ker je $W_n$ idealnega plina odvisna le od $T$, je $\Delta W_n = nC_V\Delta T$ pri **vsaki** spremembi, ne le pri izohorni.

**Meje ekviparticije.** Vrtenje in nihanje molekul sta kvantizirana. Prostostna stopnja prispeva $\tfrac{1}{2}k_BT$ šele, ko je $k_BT$ velik v primerjavi z razmikom med njenimi energijskimi nivoji. Za vrtenje $\mathrm{N_2}$ je to izpolnjeno že pri nizkih temperaturah, za nihanje šele pri več tisoč kelvinih; zato je $C_V(\mathrm{N_2}) \approx \tfrac{5}{2}R$ pri sobni temperaturi in narašča pri zelo visokih.

## Preveri se

? Idealnemu plinu pri stalni temperaturi zmanjšamo prostornino na polovico. Kaj se zgodi s tlakom?
- Zmanjša se na polovico.
+ Podvoji se.
- Ostane enak.
> Pri izotermni spremembi je $pV = \text{konst.}$, zato pri polovični prostornini tlak naraste na dvakratno vrednost.

? Absolutno temperaturo plina podvojimo. Kako se spremeni efektivna hitrost molekul?
- Podvoji se.
- Poveča se štirikrat.
+ Poveča se za faktor $\sqrt{2}$.
> $v_{\text{ef}} = \sqrt{3RT/M} \propto \sqrt{T}$, zato se pri dvakratni temperaturi hitrost poveča za $\sqrt{2} \approx 1{,}41$. Dvakrat se poveča povprečna kinetična energija.

? Kolikšna je molska toplotna kapaciteta pri stalni prostornini za enoatomni idealni plin?
+ $12{,}5\,\mathrm{J/(mol\,K)}$
- $20{,}8\,\mathrm{J/(mol\,K)}$
- $8{,}31\,\mathrm{J/(mol\,K)}$
> $C_V = \tfrac{3}{2}R = 1{,}5 \cdot 8{,}314\,\mathrm{J/(mol\,K)} \approx 12{,}5\,\mathrm{J/(mol\,K)}$. $20{,}8$ velja za $C_p$ enoatomnega ali $C_V$ dvoatomnega plina.

? Zaprto jeklenko s plinom segrejemo s $27\,^\circ\mathrm{C}$ na $127\,^\circ\mathrm{C}$. Za kolikšen faktor se poveča tlak?
- $4{,}7$
+ $1{,}33$
- $1{,}10$
> Pri stalni prostornini je $p \propto T$ v kelvinih: $400{,}15/300{,}15 \approx 1{,}33$. Faktor $4{,}7$ dobiš, če napačno deliš temperaturi v stopinjah Celzija.
