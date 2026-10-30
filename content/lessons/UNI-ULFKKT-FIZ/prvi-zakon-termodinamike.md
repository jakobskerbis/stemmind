---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Pol minute žagaj suho desko z ročno žago, nato previdno potipaj list: topel je, čeprav ga nisi držal nad ognjem. Enako se segrejeta sveder po vrtanju v beton in brusni papir po brušenju lesa. List žage je energijo dobil z **delom** tvojih rok; enako segretje bi dosegel s **toploto**, če bi ga za hip položil na grelno ploščo. Oboje spremeni **notranjo energijo** telesa in nič energije se pri tem ne izgubi. Prvi zakon termodinamike je ta ohranitev energije, razširjena na toploto. Z njim računamo energijsko bilanco kompresorjev, motorjev, hladilnikov, kemijskih reakcij (kalorimetrija, entalpije), organizmov in dvigajočega se zraka, iz katerega nastanejo oblaki.

## Razlaga

### Od mehanske energije k notranji

Iz mehanike poznaš izrek o kinetični in potencialni energiji: delo zunanjih sil spremeni mehansko energijo telesa, pri trenju pa se zdi, da energija »izgine«. Prvi zakon pokaže, kam gre: v notranjo energijo. Razlike med starim in novim zakonom:

| | mehanika | termodinamika |
|---|---|---|
| katera energija | $W_k + W_p$ telesa kot celote | notranja energija $W_n$ (gibanje in vezi delcev) |
| kako jo spremenimo | z delom | z delom **in** s toploto |
| trenje | energija se »izgubi« | energija ostane, poveča $W_n$ |
| zakon | $A = \Delta W_k + \Delta W_p$ | $\Delta W_n = Q + A$ |

### Pojmi in delo plina

**1. Sistem in okolica.** Sistem je del sveta, ki ga opazujemo (plin v valju, reakcijska zmes, organizem), vse drugo je okolica. **Zaprt** sistem z okolico izmenjuje energijo, ne pa snovi; **izoliran** sistem ne izmenjuje ničesar. Stanje sistema opišejo **spremenljivke stanja** ($p$, $V$, $T$, $n$). Količina, ki je odvisna le od stanja, ne pa od tega, kako smo do stanja prišli, je **funkcija stanja**. Notranja energija je funkcija stanja, delo in toplota pa nista: odvisna sta od poti.

**2. Notranja energija.** Notranja energija $W_n$ (v kemiji in tehniki $U$) je vsota kinetičnih energij naključnega gibanja delcev in potencialnih energij njihovih medsebojnih vezi. Za idealni plin je odvisna le od temperature: $W_n = nC_VT$ (do konstante), torej

$$\Delta W_n = nC_V\Delta T \quad\text{za vsako spremembo idealnega plina.}$$

**3. Delo pri spremembi prostornine.** Plin v valju z batom s ploščino $S$ deluje na bat s silo $pS$. Ko se bat premakne za $\mathrm{d}x$, plin opravi delo $pS\,\mathrm{d}x = p\,\mathrm{d}V$. Delo, ki ga **plin prejme** od okolice, je zato

$$A = -\int_{V_1}^{V_2} p\,\mathrm{d}V.$$

Pri stiskanju ($\mathrm{d}V < 0$) plin delo prejme ($A > 0$), pri razširjanju ga odda ($A < 0$). Delo, ki ga plin opravi, je $A' = -A = \int p\,\mathrm{d}V$, in je enako **ploščini pod krivuljo** v diagramu $p(V)$. Pri stalnem tlaku je $A = -p\,\Delta V$.

:::premisli
Plin se razširi z $1\,\mathrm{L}$ na $3\,\mathrm{L}$. Kdaj opravi več dela: če tlak ves čas ostane $2\,\mathrm{bar}$ ali če med razširjanjem enakomerno pade z $2\,\mathrm{bar}$ na $1\,\mathrm{bar}$?
---
Pri stalnem tlaku: ploščina pod krivuljo v diagramu $p(V)$ je večja, ker tlak ves čas ostane pri najvišji vrednosti. Delo torej ni odvisno le od začetne in končne prostornine, temveč od poti, zato delo ni funkcija stanja.
:::

### Prvi zakon in posebne spremembe

**4. Toplota.** Toplota $Q$ je energija, ki preide med telesoma zaradi temperaturne razlike. Je pozitivna, kadar jo sistem **prejme**. Toplota ni nekaj, kar telo »vsebuje«; telo ima notranjo energijo, toplota pa je le način njenega prenosa.

**5. Prvi zakon termodinamike.** Sprememba notranje energije sistema je enaka vsoti prejetega dela in prejete toplote:

$$\Delta W_n = Q + A.$$

To je dogovor o predznakih, ki ga uporabljata tudi IUPAC in kemija ($\Delta U = q + w$). V strojništvu pogosto pišejo $\Delta U = Q - W$, kjer je $W$ delo, ki ga **opravi** sistem; fizika je enaka, le predznak dela je obrnjen. Pri vsaki nalogi najprej ugotovi, kateri dogovor uporabljaš.

**6. Posebne spremembe idealnega plina.** Za $n$ molov idealnega plina:

- **Izohorna** ($V$ stalna): $A = 0$, $Q = \Delta W_n = nC_V\Delta T$.
- **Izobarna** ($p$ stalen): $A = -p\Delta V = -nR\Delta T$, $Q = nC_p\Delta T$, $\Delta W_n = nC_V\Delta T$.
- **Izotermna** ($T$ stalna): $\Delta W_n = 0$, zato $Q = -A$. Iz $p = nRT/V$ z integriranjem dobimo

$$A = -nRT\ln\frac{V_2}{V_1}.$$

  Pri izotermnem razširjanju plin vso prejeto toploto pretvori v delo.
- **Adiabatna** (brez izmenjave toplote, $Q = 0$): $\Delta W_n = A$. Pri stiskanju se plin segreje, pri razširjanju ohladi. Za počasno (reverzibilno) adiabatno spremembo velja

$$pV^\kappa = \text{konst.}, \qquad TV^{\kappa - 1} = \text{konst.}, \qquad \kappa = \frac{C_p}{C_V}.$$

  Delo je $A = nC_V(T_2 - T_1) = \dfrac{p_2V_2 - p_1V_1}{\kappa - 1}$.

Adiabatna sprememba je dober model za hitre procese, pri katerih toplota ne utegne steči (stiskanje v motorju, širjenje zvoka, dvigajoči se zrak), ali za dobro izolirane sisteme. Ker je $\kappa > 1$, je adiabata v diagramu $p(V)$ bolj strma od izoterme skozi isto točko.

:::premisli
Da plin segrejemo za isti $\Delta T$, potrebujemo pri stalnem tlaku več toplote kot pri stalni prostornini. Zakaj?
---
Pri stalnem tlaku se plin med segrevanjem razširja in opravlja delo na okolico ($nR\Delta T$). Toplota mora pokriti enako povečanje notranje energije $nC_V\Delta T$ in še to delo, zato je $C_p = C_V + R$.
:::

### Entalpija in krožne spremembe

**7. Entalpija.** Pri kemijskih reakcijah, ki potekajo pri stalnem tlaku (odprta čaša), je priročna funkcija stanja **entalpija** $H = W_n + pV$. Pri stalnem tlaku je $\Delta H = \Delta W_n + p\Delta V = Q_p$: sprememba entalpije je kar izmenjana toplota. Zato tabele v kemiji navajajo reakcijske entalpije.

**8. Krožna sprememba.** Pri krožni spremembi se sistem vrne v začetno stanje, zato je $\Delta W_n = 0$ in $Q_{\text{cel}} = -A_{\text{cel}}$. Delo, ki ga plin opravi v enem ciklu, je ploščina, ki jo cikel obkroža v diagramu $p(V)$. Na tem temeljijo toplotni stroji (več v lekciji o drugem zakonu termodinamike).

## Rešeni primeri

### Primer 1 (lažji)

Zrak v pnevmatskem valju mizarske stiskalnice se pri stalnem tlaku $1{,}0 \cdot 10^5\,\mathrm{Pa}$ razširi z $2{,}0\,\mathrm{L}$ na $5{,}0\,\mathrm{L}$ in pri tem prejme $800\,\mathrm{J}$ toplote. Koliko dela prejme zrak in za koliko se mu spremeni notranja energija?

**Podatki:** $p = 1{,}0 \cdot 10^5\,\mathrm{Pa}$, $V_1 = 2{,}0\,\mathrm{L}$, $V_2 = 5{,}0\,\mathrm{L}$, $Q = +800\,\mathrm{J}$
**Iščemo:** delo $A$ in spremembo notranje energije $\Delta W_n$

:::formula
$A = -p\,\Delta V$, $\Delta W_n = Q + A$
:::

**Rešitev:**

1. $\Delta V = 3{,}0\,\mathrm{L} = 3{,}0 \cdot 10^{-3}\,\mathrm{m^3}$; v kubičnih metrih, da bo delo v joulih.
2. $A = -1{,}0 \cdot 10^5\,\mathrm{Pa} \cdot 3{,}0 \cdot 10^{-3}\,\mathrm{m^3} = -300\,\mathrm{J}$; plin opravi $300\,\mathrm{J}$ dela na okolico.
3. Po prvem zakonu sešteješ prejeto toploto in prejeto delo: $\Delta W_n = 800\,\mathrm{J} - 300\,\mathrm{J} = 500\,\mathrm{J}$.
4. Odgovor: plin prejme delo $-300\,\mathrm{J}$ (sam opravi $300\,\mathrm{J}$ dela), njegova notranja energija se poveča za $500\,\mathrm{J}$.

### Primer 2

$0{,}50\,\mathrm{mol}$ idealnega plina se pri stalni temperaturi $300\,\mathrm{K}$ počasi razširi z $10\,\mathrm{L}$ na $30\,\mathrm{L}$. Koliko dela opravi plin, koliko toplote prejme in kolikšna je sprememba notranje energije? Kolikšen je končni tlak?

**Podatki:** $n = 0{,}50\,\mathrm{mol}$, $T = 300\,\mathrm{K}$ (stalna), $V_1 = 10\,\mathrm{L}$, $V_2 = 30\,\mathrm{L}$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$
**Iščemo:** delo plina $A' = -A$, toploto $Q$, $\Delta W_n$, končni tlak $p_2$

:::formula
$A = -nRT\ln\dfrac{V_2}{V_1}$, $\Delta W_n = 0$, $Q = -A$, $p = \dfrac{nRT}{V}$
:::

**Rešitev:**

1. $nRT = 0{,}50 \cdot 8{,}314 \cdot 300\,\mathrm{J} \approx 1247\,\mathrm{J}$; ta produkt nastopa v delu in v tlaku, zato ga izračunamo najprej.
2. $A = -1247\,\mathrm{J} \cdot \ln 3 = -1247\,\mathrm{J} \cdot 1{,}099 \approx -1370\,\mathrm{J}$; plin opravi $A' \approx 1370\,\mathrm{J}$ dela.
3. Temperatura je stalna, zato je $\Delta W_n = 0$ in $Q = -A \approx +1370\,\mathrm{J}$.
4. Končni tlak iz plinske enačbe: $p_2 = 1247\,\mathrm{J} / 0{,}030\,\mathrm{m^3} \approx 4{,}16 \cdot 10^4\,\mathrm{Pa}$ (tretjina začetnega $1{,}25 \cdot 10^5\,\mathrm{Pa}$).
5. Odgovor: plin opravi približno $1{,}37\,\mathrm{kJ}$ dela in prejme prav toliko toplote; notranja energija se ne spremeni, končni tlak je približno $41{,}6\,\mathrm{kPa}$.

### Primer 3 (težji)

V valju dizelskega motorja zrak (idealni dvoatomni plin, $\kappa = 1{,}40$) s prostornino $1{,}0\,\mathrm{L}$, tlakom $1{,}0 \cdot 10^5\,\mathrm{Pa}$ in temperaturo $300\,\mathrm{K}$ hitro (adiabatno) stisnemo na $0{,}10\,\mathrm{L}$. Kolikšna sta končna temperatura in tlak? Koliko dela prejme zrak? Primerjaj z izotermnim stiskanjem na isto prostornino.

**Podatki:** $V_1 = 1{,}0\,\mathrm{L}$, $p_1 = 1{,}0 \cdot 10^5\,\mathrm{Pa}$, $T_1 = 300\,\mathrm{K}$, $V_2 = 0{,}10\,\mathrm{L}$, $\kappa = 1{,}40$, $Q = 0$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$
**Iščemo:** $T_2$, $p_2$, delo $A$; za primerjavo $p_2$ in $A$ pri izotermnem stiskanju

:::formula
$T_2 = T_1\left(\dfrac{V_1}{V_2}\right)^{\kappa - 1}$, $p_2 = p_1\left(\dfrac{V_1}{V_2}\right)^{\kappa}$, $A = \Delta W_n = \dfrac{p_2V_2 - p_1V_1}{\kappa - 1}$; izotermno $A = nRT\ln\dfrac{V_1}{V_2}$
:::

**Rešitev:**

1. Kompresijsko razmerje je $V_1/V_2 = 10$; nastopa v obeh adiabatnih enačbah.
2. Iz $TV^{\kappa-1} = \text{konst.}$: $T_2 = 300\,\mathrm{K} \cdot 10^{0{,}40} \approx 300\,\mathrm{K} \cdot 2{,}512 \approx 754\,\mathrm{K}$ (okoli $480\,^\circ\mathrm{C}$).
3. Iz $pV^\kappa = \text{konst.}$: $p_2 = 1{,}0 \cdot 10^5\,\mathrm{Pa} \cdot 10^{1{,}40} \approx 2{,}51 \cdot 10^6\,\mathrm{Pa}$ (okoli $25\,\mathrm{bar}$).
4. $p_1V_1 = 100\,\mathrm{J}$, $p_2V_2 = 2{,}512 \cdot 10^6 \cdot 1{,}0 \cdot 10^{-4}\,\mathrm{J} \approx 251\,\mathrm{J}$, zato $A = (251 - 100)/0{,}40\,\mathrm{J} \approx 378\,\mathrm{J}$; ker je $Q = 0$, je vse to delo enako $\Delta W_n$.
5. Preizkus: $n = p_1V_1/(RT_1) \approx 0{,}0401\,\mathrm{mol}$, $\Delta W_n = n\cdot\tfrac{5}{2}R\cdot(754 - 300)\,\mathrm{K} \approx 378\,\mathrm{J}$. ✓
6. Izotermno: $p_2 = 10\,p_1 = 1{,}0 \cdot 10^6\,\mathrm{Pa}$, $A = p_1V_1\ln 10 = 100\,\mathrm{J} \cdot 2{,}303 \approx 230\,\mathrm{J}$; plin bi to energijo sproti oddal kot toploto.
7. Odgovor: pri adiabatnem stiskanju se zrak segreje na približno $754\,\mathrm{K}$, tlak naraste na približno $2{,}5 \cdot 10^6\,\mathrm{Pa}$, zrak pa prejme približno $378\,\mathrm{J}$ dela, ki se v celoti shrani v notranji energiji. Izotermno stiskanje bi zahtevalo le $230\,\mathrm{J}$ in dalo $10\,\mathrm{bar}$. Visoka temperatura po adiabatnem stiskanju vžge vbrizgano gorivo.

### Primer 4 – zdaj ti

Pnevmatski valj stiskalnice v delavnici stoji ob peči. Zrak v njem ($0{,}40\,\mathrm{mol}$, idealni dvoatomni plin) se pri stalnem tlaku segreje za $50\,\mathrm{K}$. Koliko toplote prejme, za koliko se mu poveča notranja energija in koliko dela prejme?

**Podatki:** $n = 0{,}40\,\mathrm{mol}$, $\Delta T = 50\,\mathrm{K}$, $p$ stalen, $C_V = \tfrac{5}{2}R$, $C_p = \tfrac{7}{2}R$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$
**Iščemo:** toploto $Q$, spremembo notranje energije $\Delta W_n$, delo $A$

:::formula
$Q = nC_p\Delta T$, $\Delta W_n = nC_V\Delta T$, $A = -p\Delta V = -nR\Delta T$
:::

**Rešitev:**

1. Molski toploti dvoatomnega plina: $C_p \approx 29{,}1\,\mathrm{J/(mol\,K)}$, $C_V \approx 20{,}8\,\mathrm{J/(mol\,K)}$.
2. Tlak je stalen, zato toploto računamo s $C_p$: $Q = 0{,}40 \cdot 29{,}1 \cdot 50\,\mathrm{J} = 582\,\mathrm{J}$.
3. Notranja energija idealnega plina se vedno spremeni za $nC_V\Delta T$: $\Delta W_n = 0{,}40 \cdot 20{,}8 \cdot 50\,\mathrm{J} = 416\,\mathrm{J}$.
4. Zdaj ti: izračunaj delo $A$, ki ga zrak prejme, in preveri, ali velja $\Delta W_n = Q + A$.

:::premisli
Koliko dela prejme zrak in ali se energijska bilanca ujema?
---
$A = -nR\Delta T = -0{,}40 \cdot 8{,}314 \cdot 50\,\mathrm{J} \approx -166\,\mathrm{J}$: zrak opravi okoli $166\,\mathrm{J}$ dela na bat. Preizkus: $Q + A \approx 582\,\mathrm{J} - 166\,\mathrm{J} = 416\,\mathrm{J} = \Delta W_n$. ✓ Okoli $29\,\%$ prejete toplote gre v delo, ostanek ostane v zraku kot notranja energija.
:::

## Pogoste napake

- **Mešanje predznakov dela.** Odloči se za en dogovor. Tu je $A$ delo, ki ga sistem **prejme**: pri razširjanju je negativno.
- **Toplota in temperatura.** Pri adiabatnem stiskanju se plin segreje, čeprav ne prejme nobene toplote. Pri izotermnem razširjanju plin prejema toploto, temperatura pa se ne spremeni.
- **$\Delta W_n = nC_p\Delta T$ pri izobarni spremembi.** Notranja energija idealnega plina se vedno spremeni za $nC_V\Delta T$. $nC_p\Delta T$ je toplota pri stalnem tlaku.
- **Uporaba $pV^\kappa$ pri izotermni spremembi.** Pri izotermni velja $pV = \text{konst.}$, pri adiabatni $pV^\kappa = \text{konst.}$ Zamenjava da napačen tlak.
- **Temperatura v $^\circ\mathrm{C}$ v $TV^{\kappa-1}$.** V vseh plinskih enačbah je $T$ v kelvinih.
- **Litri v $p\Delta V$.** $1\,\mathrm{L} = 10^{-3}\,\mathrm{m^3}$; $\mathrm{Pa} \cdot \mathrm{m^3} = \mathrm{J}$.
- **Logaritem.** V $nRT\ln(V_2/V_1)$ je naravni logaritem, ne desetiški.

## Povzetek

- $\Delta W_n = Q + A$; $Q$ in $A$ sta pozitivna, kadar ju sistem prejme. $W_n$ je funkcija stanja, $Q$ in $A$ nista.
- Delo plina: $A = -\int p\,\mathrm{d}V$; ploščina pod krivuljo v diagramu $p(V)$.
- Idealni plin: $\Delta W_n = nC_V\Delta T$ vedno.
- Izohorna: $A = 0$; izobarna: $A = -p\Delta V$, $Q = nC_p\Delta T$; izotermna: $\Delta W_n = 0$, $A = -nRT\ln(V_2/V_1)$; adiabatna: $Q = 0$, $pV^\kappa = \text{konst.}$, $TV^{\kappa-1} = \text{konst.}$
- Entalpija $H = W_n + pV$, pri stalnem tlaku $\Delta H = Q_p$.

## Drugače: Na sliki

V diagramu $p(V)$ nariši izotermo in adiabato skozi isto začetno točko:

```
 p
 |  \
 |   \ adiabata (bolj strma)
 |    \.
 |     \ '.
 |      \   '. izoterma
 |       \     ' - .
 |        \           ' - - .
 +---------------------------------> V
```

Pri razširjanju adiabata pade hitreje kot izoterma, ker se plin hkrati ohlaja. Ploščina pod krivuljo je delo, ki ga opravi plin: pri adiabatnem razširjanju je manjša kot pri izotermnem, ker plin ne dobiva toplote.

Prvi zakon si predstavljaj kot bančni račun: notranja energija je stanje na računu, toplota in delo sta dva načina pologa ali dviga. Stanje na računu ni odvisno od tega, ali si denar položil z gotovino ali z nakazilom; enako je $\Delta W_n$ odvisna le od začetnega in končnega stanja.

## Drugače: Iz vsakdanjega življenja

**Tlačilka za kolo.** Ko hitro napihuješ zračnico, se tlačilka ob ventilu segreje. Stiskanje je skoraj adiabatno: delo, ki ga opraviš, poveča notranjo energijo zraka.

**Oblaki in gorski vetrovi.** Zrak, ki se dviga, pride v območje nižjega tlaka in se razširi skoraj adiabatno, zato se ohlaja za okoli $10\,\mathrm{K}$ na kilometer višine. Ko se ohladi do rosišča, vodna para kondenzira in nastane oblak. Na drugi strani gore se spuščajoči zrak adiabatno stiska in segreva (fen).

**Kalorimetrija in reakcijske entalpije.** V kalorimetru pri stalnem tlaku izmerimo toploto reakcije, ki je enaka $\Delta H$. V bombnem kalorimetru (stalna prostornina) pa izmerimo $\Delta W_n$. Za reakcije s plini se razlikujeta za $\Delta(pV) \approx \Delta n_{\text{plin}}RT$.

**Energijska bilanca organizma.** Človek s hrano prejme kemijsko energijo, odda pa delo (gibanje) in toploto. Pri mirovanju odrasel človek odda okoli $100\,\mathrm{W}$ toplote. Če prejema več energije, kot je odda, se razlika shrani (maščobe), kar je prvi zakon v biologiji.

**Hladilni spreji.** Plin, ki hitro izteka iz jeklenke ali spreja, se razširja skoraj adiabatno in ohladi, zato se jeklenka ohladi in lahko celo orosi.

## Drugače: Korak za korakom s številkami

Idealni plin opravi krožno spremembo, ki je v diagramu $p(V)$ pravokotnik: $p$ med $1{,}0 \cdot 10^5\,\mathrm{Pa}$ in $3{,}0 \cdot 10^5\,\mathrm{Pa}$, $V$ med $1{,}0\,\mathrm{L}$ in $4{,}0\,\mathrm{L}$. Cikel teče v smeri urinega kazalca (zgornja izobara pri razširjanju).

1. **Razširjanje pri $3{,}0 \cdot 10^5\,\mathrm{Pa}$:** plin opravi $3{,}0 \cdot 10^5 \cdot 3{,}0 \cdot 10^{-3}\,\mathrm{J} = 900\,\mathrm{J}$.
2. **Izohorno ohlajanje:** $\Delta V = 0$, ni dela.
3. **Stiskanje pri $1{,}0 \cdot 10^5\,\mathrm{Pa}$:** plin prejme $1{,}0 \cdot 10^5 \cdot 3{,}0 \cdot 10^{-3}\,\mathrm{J} = 300\,\mathrm{J}$.
4. **Izohorno segrevanje:** spet ni dela.
5. **Celotno delo plina:** $900\,\mathrm{J} - 300\,\mathrm{J} = 600\,\mathrm{J}$, kar je ploščina pravokotnika: $2{,}0 \cdot 10^5\,\mathrm{Pa} \cdot 3{,}0 \cdot 10^{-3}\,\mathrm{m^3} = 600\,\mathrm{J}$.
6. **Prvi zakon za cikel:** $\Delta W_n = 0$, zato je neto prejeta toplota $Q = 600\,\mathrm{J}$. Plin je $600\,\mathrm{J}$ toplote pretvoril v delo; toploto je moral pri tem prejemati in del je tudi oddati.

## Drugače: Bolj natančno

**Delo in toplota nista funkciji stanja.** V jeziku diferencialov je $\mathrm{d}W_n = \delta Q + \delta A$, kjer sta $\delta Q$ in $\delta A$ »nepopolna« diferenciala: integral $\int\delta A = -\int p\,\mathrm{d}V$ je odvisen od poti v ravnini $(V, p)$. Primer: med stanjema $(V_1, p_1)$ in $(V_2, p_2)$ z $V_2 > V_1$ in $p_1 > p_2$ plin opravi več dela, če se najprej razširi pri $p_1$ in nato ohladi pri $V_2$, kot če se najprej ohladi in nato razširi pri $p_2$.

**Izpeljava izotermnega dela.** Pri reverzibilni izotermni spremembi je $p = nRT/V$, zato

$$A = -\int_{V_1}^{V_2}\frac{nRT}{V}\,\mathrm{d}V = -nRT\ln\frac{V_2}{V_1}.$$

**Izpeljava adiabate.** Pri $\delta Q = 0$ je $nC_V\,\mathrm{d}T = -p\,\mathrm{d}V = -\frac{nRT}{V}\mathrm{d}V$. Ločimo spremenljivki: $\frac{C_V}{R}\frac{\mathrm{d}T}{T} = -\frac{\mathrm{d}V}{V}$. Integriramo in upoštevamo $R/C_V = (C_p - C_V)/C_V = \kappa - 1$:

$$\ln T + (\kappa - 1)\ln V = \text{konst.} \quad\Rightarrow\quad TV^{\kappa - 1} = \text{konst.}$$

S $T = pV/(nR)$ dobimo $pV^\kappa = \text{konst.}$ Naklon adiabate je $\frac{\mathrm{d}p}{\mathrm{d}V} = -\kappa\frac{p}{V}$, izoterme pa $-\frac{p}{V}$; adiabata je torej $\kappa$-krat bolj strma.

**Reverzibilnost.** Formule za $pV^\kappa$ in $nRT\ln(V_2/V_1)$ veljajo za **reverzibilne** (kvazistatične) spremembe, pri katerih je plin ves čas v notranjem ravnovesju in ima določen tlak. Pri nenadnem razširjanju v vakuum (prosta ekspanzija) plin ne opravi dela in ne izmenja toplote, zato se idealnemu plinu temperatura ne spremeni, čeprav sprememba ni izotermna v običajnem pomenu in ni reverzibilna. Prvi zakon velja vedno, posebne formule pa le pod svojimi pogoji.

## Preveri se

? Katera od teh količin je funkcija stanja?
- Toplota $Q$
~ Toplota je odvisna od poti: med istima stanjema plin prejme različno toploto, odvisno od tega, po kateri spremembi ga peljemo.
- Delo $A$
~ Delo je ploščina pod krivuljo v diagramu $p(V)$, ta pa je odvisna od poti, ne le od začetnega in končnega stanja.
+ Notranja energija $W_n$
> Notranja energija je odvisna le od stanja (pri idealnem plinu le od $T$). Toplota in delo opisujeta prenos energije med spremembo, zato sta odvisna od poti.

? Plin prejme $500\,\mathrm{J}$ toplote in pri tem opravi $200\,\mathrm{J}$ dela na okolico. Za koliko se mu spremeni notranja energija?
- $700\,\mathrm{J}$
~ Seštel si toploto in delo, kot da bi plin delo prejel. Delo, ki ga plin opravi, mu energijo odvzame.
+ $300\,\mathrm{J}$
- $-300\,\mathrm{J}$
~ Predznak je obrnjen: plin je prejel več energije ($500\,\mathrm{J}$), kot je je oddal ($200\,\mathrm{J}$), zato se mu notranja energija poveča.
> $\Delta W_n = Q + A = 500\,\mathrm{J} + (-200\,\mathrm{J}) = 300\,\mathrm{J}$. Delo, ki ga plin opravi, mu energijo zmanjša.

? Kaj velja pri izotermnem razširjanju idealnega plina?
- Plin ne prejme toplote.
~ To velja za adiabatno spremembo. Brez dovedene toplote bi se plin pri razširjanju ohladil, temperatura ne bi ostala stalna.
- Notranja energija se poveča.
~ Notranja energija idealnega plina je odvisna le od temperature. Ta je stalna, zato je $\Delta W_n = 0$.
+ Prejeta toplota je enaka delu, ki ga plin opravi.
> Pri stalni temperaturi je $\Delta W_n = 0$, zato je $Q = -A$: vsa prejeta toplota se pretvori v delo plina.

? Plin hitro (adiabatno) stisnemo. Kaj se zgodi s temperaturo?
+ Naraste.
- Ostane enaka.
~ »Brez toplote« ne pomeni »brez spremembe temperature«. Plin pri stiskanju prejme delo, ki mu poveča notranjo energijo.
- Pade.
~ Temperatura pade pri adiabatnem razširjanju, ko plin delo odda. Pri stiskanju ga prejme.
> Pri $Q = 0$ je $\Delta W_n = A > 0$, ker plin pri stiskanju prejme delo. Notranja energija in s tem temperatura narasteta.

? Plin se pri stalnem tlaku $2{,}0 \cdot 10^5\,\mathrm{Pa}$ razširi za $3{,}0\,\mathrm{L}$. Koliko dela opravi?
- $6{,}0 \cdot 10^5\,\mathrm{J}$
~ Litrov nisi pretvoril v kubične metre: $1\,\mathrm{L} = 10^{-3}\,\mathrm{m^3}$.
- $60\,\mathrm{J}$
~ Pri pretvorbi si se zmotil za faktor 10: $3{,}0\,\mathrm{L} = 3{,}0 \cdot 10^{-3}\,\mathrm{m^3}$, ne $3{,}0 \cdot 10^{-4}\,\mathrm{m^3}$.
+ $600\,\mathrm{J}$
> $A' = p\Delta V = 2{,}0 \cdot 10^5\,\mathrm{Pa} \cdot 3{,}0 \cdot 10^{-3}\,\mathrm{m^3} = 600\,\mathrm{J}$. $6{,}0 \cdot 10^5\,\mathrm{J}$ dobiš, če litrov ne pretvoriš v kubične metre.

:::simboli
W_n | notranja energija | W_n = nC_VT | J | idealni plin, do aditivne konstante
\Delta W_n | sprememba notranje energije | \Delta W_n = Q + A | J | idealni plin: ΔW_n = nC_V ΔT
Q | toplota, ki jo plin prejme | Q = \Delta W_n - A | J | negativna, kadar plin toploto odda
A | delo, ki ga plin prejme | A = -\int_{V_1}^{V_2} p\,\mathrm{d}V | J | pri razširjanju negativno
A' | delo, ki ga plin odda (delo plina) | A' = -A | J
n | množina plina | | mol
C_V | molska toplotna kapaciteta pri stalni prostornini | | J/(mol K)
C_p | molska toplotna kapaciteta pri stalnem tlaku | C_p = C_V + R | J/(mol K)
R | splošna plinska konstanta | | J/(mol K) | 8,314 J/(mol K)
p | tlak plina | p = \frac{nRT}{V} | Pa
p_1, p_2 | začetni in končni tlak | | Pa
V | prostornina plina | | m^3
V_1, V_2 | začetna in končna prostornina | | m^3
T | absolutna temperatura | | K
T_1, T_2 | začetna in končna temperatura | | K | adiabatno: T₂ = T₁(V₁/V₂)^(κ−1)
\kappa | adiabatni eksponent | \kappa = \frac{C_p}{C_V} | – | enoatomni 5/3, dvoatomni 1,40
:::
