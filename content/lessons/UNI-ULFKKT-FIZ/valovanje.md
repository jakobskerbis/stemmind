---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Valovanje je način, kako se motnja ali energija širi po prostoru, ne da bi se snov premaknila z enega kraja na drugega. Tako potuje zvok po zraku, potresni sunek po Zemlji, val po vrvi in, brez snovi, tudi svetloba. Isti matematični opis velja za vse: zato ga je vredno spoznati enkrat in natančno.

Valovanje srečaš povsod v naravoslovju in tehniki. Ultrazvok uporabljamo za slikanje v medicini in za merjenje pretoka krvi, v kemiji za čiščenje in pospeševanje reakcij (sonokemija), v biologiji netopirji in delfini z odbitim zvokom »vidijo« okolico. Glasbila delujejo na podlagi **stoječega valovanja**, policijski radar in vremenski radar pa izkoriščata **Dopplerjev pojav**.

V tej lekciji zapišemo **valovno enačbo** in njeno rešitev, izračunamo hitrost valovanja na struni in v plinu, razložimo stoječe valovanje in lastna nihanja strun in piščali, opišemo **zvok** z jakostjo in ravnijo v decibelih ter nazadnje izpeljemo, kako se frekvenca spremeni, ko se izvir ali opazovalec giblje.

## Razlaga

**1. Vrste valovanja.** Pri **transverzalnem** valovanju delci nihajo pravokotno na smer širjenja (val na vrvi, svetloba). Pri **longitudinalnem** nihajo vzdolž smeri širjenja (zvok v plinih in tekočinah, kjer se izmenjujejo zgoščine in razredčine). V trdninah se lahko širita obe vrsti z različnima hitrostma.

**2. Sinusno valovanje.** Odmik delcev v valovanju, ki se širi v smeri $+x$, je

$$s(x, t) = s_0\sin(kx - \omega t).$$

Pri tem je $s_0$ amplituda, $\omega = 2\pi\nu$ krožna frekvenca, $k = 2\pi/\lambda$ **valovno število**, $\lambda$ **valovna dolžina**. Točka z enako fazo (npr. vrh vala) se premika s **hitrostjo valovanja**

$$c = \frac{\omega}{k} = \lambda\nu.$$

Valovanje v smeri $-x$ zapišemo s $\sin(kx + \omega t)$. Pozor: $c$ je hitrost širjenja motnje; hitrost delca $\partial s/\partial t$ je nekaj drugega in ima amplitudo $\omega s_0$.

**3. Valovna enačba.** Za majhen kos napete strune z dolžinsko gostoto $\mu = m/l$ in silo $F$ v struni da drugi Newtonov zakon (izpeljava v »Bolj natančno«)

$$\frac{\partial^2 s}{\partial t^2} = c^2\,\frac{\partial^2 s}{\partial x^2}, \qquad c = \sqrt{\frac{F}{\mu}}.$$

To je **valovna enačba**. Rešitev je vsaka funkcija oblike $s = f(x - ct) + g(x + ct)$: motnja poljubne oblike potuje nespremenjena v obe smeri. Za zvok v plinu velja enaka enačba za tlak ali odmik, hitrost pa je

$$c = \sqrt{\frac{\kappa RT}{M}},$$

kjer je $\kappa = c_p/c_V$ razmerje specifičnih toplot (za zrak $1{,}4$), $T$ absolutna temperatura in $M$ molska masa. V tekočini je $c = \sqrt{K/\rho}$ s stisljivostnim modulom $K$; v vodi je zvok okoli $1500\,\mathrm{m/s}$, v zraku pri $20\,^\circ\mathrm{C}$ pa okoli $343\,\mathrm{m/s}$.

**4. Energija in jakost.** Valovanje prenaša energijo. **Gostota energijskega toka** (jakost) $j$ je moč, ki preteče skozi enoto površine pravokotno na smer širjenja, $j = P/S$, enota $\mathrm{W/m^2}$. Za sinusno valovanje je $j \propto s_0^2\omega^2$. Točkast izvir z močjo $P$ seva enakomerno na vse strani, zato je na razdalji $r$

$$j = \frac{P}{4\pi r^2}.$$

**5. Zvok in decibeli.** Uho zazna jakosti od približno $j_0 = 10^{-12}\,\mathrm{W/m^2}$ (prag slišnosti pri $1\,\mathrm{kHz}$) do približno $1\,\mathrm{W/m^2}$ (prag bolečine). Ker je razpon tako velik, uporabljamo logaritemsko **raven jakosti zvoka**

$$L = 10\,\mathrm{dB} \cdot \log_{10}\frac{j}{j_0}.$$

Desetkrat večja jakost pomeni $10\,\mathrm{dB}$ več, dvakrat večja pa okoli $3\,\mathrm{dB}$ več. Slišimo frekvence od okoli $20\,\mathrm{Hz}$ do $20\,\mathrm{kHz}$; nad tem je **ultrazvok**, pod tem **infrazvok**.

**6. Superpozicija in odboj.** Ker je valovna enačba linearna, se odmika dveh valovanj seštejeta. Na trdno vpetem koncu strune se val odbije z obrnjeno fazo (odmik mora biti tam nič), na prostem koncu pa brez spremembe faze.

**7. Stoječe valovanje.** Seštejmo dve enaki valovanji, ki potujeta v nasprotnih smereh:

$$s = s_0\sin(kx - \omega t) + s_0\sin(kx + \omega t) = 2s_0\sin(kx)\cos(\omega t).$$

To ni več potujoče valovanje: vsak delec niha z amplitudo $2s_0|\sin kx|$. V **vozlih** ($\sin kx = 0$, vsako polovico valovne dolžine) delci mirujejo, v **hrbtih** pa nihajo z največjo amplitudo. Razdalja med sosednjima vozloma je $\lambda/2$.

**8. Lastna nihanja.** Struna z dolžino $l$, vpeta na obeh koncih, ima vozla na obeh koncih. Na dolžino mora iti celo število polovic valovne dolžine, $l = n\lambda_n/2$, zato so **lastne frekvence**

$$\nu_n = n\,\frac{c}{2l}, \qquad n = 1, 2, 3, \dots$$

Frekvenca $\nu_1$ je **osnovna**, višje so **višje harmonične frekvence**. Enako velja za piščal, odprto na obeh koncih (na odprtih koncih so hrbti). Piščal, zaprta na enem koncu, ima na zaprtem koncu vozel, na odprtem hrbet, zato je $l = (2n - 1)\lambda/4$ in

$$\nu_n = (2n - 1)\,\frac{c}{4l},$$

torej le lihi večkratniki osnovne frekvence.

**9. Dopplerjev pojav.** Izvir oddaja zvok s frekvenco $\nu$, hitrost zvoka glede na zrak je $c$. Če se opazovalec giblje proti izviru s hitrostjo $v_o$, se izvir pa proti opazovalcu s hitrostjo $v_i$ (obe glede na zrak), opazovalec sliši frekvenco

$$\nu' = \nu\,\frac{c + v_o}{c - v_i}.$$

Pri oddaljevanju vstavimo negativni hitrosti. Gibanje izvira zgosti ali razredči valovne fronte (spremeni valovno dolžino), gibanje opazovalca pa spremeni, kako pogosto fronte srečuje. Ko je hitrost izvira večja od $c$, nastane udarni val (Machov stožec, pok letala).

## Rešeni primeri

### Primer 1 (lažji)

Kitarska struna ima med vpetiščema dolžino $0{,}65\,\mathrm{m}$, njena dolžinska gostota je $4{,}0\,\mathrm{g/m}$, napeta pa je s silo $120\,\mathrm{N}$. Kolikšna je hitrost valovanja na struni, kolikšna je osnovna frekvenca in kolikšna frekvenca drugega lastnega nihanja?

**Podatki:** $l = 0{,}65\,\mathrm{m}$, $\mu = 4{,}0\,\mathrm{g/m} = 4{,}0 \cdot 10^{-3}\,\mathrm{kg/m}$, $F = 120\,\mathrm{N}$, struna vpeta na obeh koncih
**Iščemo:** hitrost $c$, frekvenci $\nu_1$ in $\nu_2$

:::formula
$c = \sqrt{F/\mu}$, $\nu_n = n\,\dfrac{c}{2l}$
:::

**Rešitev:**

1. $c = \sqrt{120\,\mathrm{N}/4{,}0 \cdot 10^{-3}\,\mathrm{kg/m}} = \sqrt{30\,000}\,\mathrm{m/s} \approx 173\,\mathrm{m/s}$.
2. $\nu_1 = 173{,}2\,\mathrm{m/s}/(2 \cdot 0{,}65\,\mathrm{m}) \approx 133\,\mathrm{Hz}$; valovna dolžina je $\lambda_1 = 2l = 1{,}30\,\mathrm{m}$.
3. $\nu_2 = 2\nu_1 \approx 266\,\mathrm{Hz}$; struna ima takrat vozel tudi na sredini.
4. Odgovor: valovanje potuje po struni s hitrostjo okoli $173\,\mathrm{m/s}$, osnovna frekvenca je približno $133\,\mathrm{Hz}$, drugo lastno nihanje pa ima frekvenco približno $266\,\mathrm{Hz}$.

### Primer 2

Piščal z dolžino $0{,}50\,\mathrm{m}$ je zaprta na enem koncu. Zrak v njej ima temperaturo $20\,^\circ\mathrm{C}$. Kolikšna je hitrost zvoka v zraku, kolikšna je osnovna frekvenca piščali in kolikšna naslednja lastna frekvenca? Za zrak vzemi $\kappa = 1{,}4$, $M = 29\,\mathrm{g/mol}$ in $R = 8{,}314\,\mathrm{J/(mol\,K)}$.

**Podatki:** $l = 0{,}50\,\mathrm{m}$, en konec zaprt, $T = 20\,^\circ\mathrm{C} = 293{,}15\,\mathrm{K}$, $\kappa = 1{,}4$, $M = 0{,}029\,\mathrm{kg/mol}$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$
**Iščemo:** hitrost zvoka $c$, frekvenci $\nu_1$ in $\nu_2$

:::formula
$c = \sqrt{\kappa RT/M}$, zaprta piščal: $\nu_n = (2n - 1)\,\dfrac{c}{4l}$
:::

**Rešitev:**

1. $c = \sqrt{1{,}4 \cdot 8{,}314 \cdot 293{,}15/0{,}029}\,\mathrm{m/s} \approx 343\,\mathrm{m/s}$.
2. Osnovno nihanje: na dolžino gre četrtina valovne dolžine, $\lambda_1 = 4l = 2{,}0\,\mathrm{m}$, zato $\nu_1 = 343\,\mathrm{m/s}/2{,}0\,\mathrm{m} \approx 172\,\mathrm{Hz}$.
3. Naslednje lastno nihanje ima $l = 3\lambda/4$, torej $\nu_2 = 3\nu_1 \approx 515\,\mathrm{Hz}$. Frekvence $2\nu_1$ zaprta piščal nima.
4. Odgovor: zvok ima hitrost okoli $343\,\mathrm{m/s}$, osnovna frekvenca piščali je okoli $172\,\mathrm{Hz}$, naslednja lastna frekvenca pa okoli $515\,\mathrm{Hz}$ (trikratnik osnovne).

### Primer 3 (težji)

Mimo opazovalca, ki stoji ob cesti, pelje rešilni avto s sireno. Ko se avto približuje, opazovalec sliši frekvenco $760\,\mathrm{Hz}$, ko se oddaljuje, pa $650\,\mathrm{Hz}$. Hitrost zvoka je $340\,\mathrm{m/s}$, zrak miruje. S kolikšno hitrostjo pelje avto in kolikšno frekvenco oddaja sirena?

**Podatki:** $\nu_\mathrm{p} = 760\,\mathrm{Hz}$ (približevanje), $\nu_\mathrm{o} = 650\,\mathrm{Hz}$ (oddaljevanje), $c = 340\,\mathrm{m/s}$, opazovalec miruje ($v_o = 0$), zrak miruje
**Iščemo:** hitrost avtomobila $v_i$ in frekvenco sirene $\nu$

:::formula
Mirujoč opazovalec: $\nu_\mathrm{p} = \nu\,\dfrac{c}{c - v_i}$, $\nu_\mathrm{o} = \nu\,\dfrac{c}{c + v_i}$
:::

**Rešitev:**

1. Delimo enačbi, da se znebimo neznane $\nu$: $\dfrac{\nu_\mathrm{p}}{\nu_\mathrm{o}} = \dfrac{c + v_i}{c - v_i}$.
2. Rešimo za $v_i$: $\nu_\mathrm{p}(c - v_i) = \nu_\mathrm{o}(c + v_i)$, torej $v_i = c\,\dfrac{\nu_\mathrm{p} - \nu_\mathrm{o}}{\nu_\mathrm{p} + \nu_\mathrm{o}} = 340\,\mathrm{m/s} \cdot \dfrac{110}{1410} \approx 26{,}5\,\mathrm{m/s}$.
3. Frekvenca sirene: $\nu = \nu_\mathrm{p}\,(c - v_i)/c = 760\,\mathrm{Hz} \cdot 313{,}5/340 \approx 701\,\mathrm{Hz}$.
4. Preizkus z drugo enačbo: $\nu = \nu_\mathrm{o}\,(c + v_i)/c = 650\,\mathrm{Hz} \cdot 366{,}5/340 \approx 701\,\mathrm{Hz}$ ✓.
5. Odgovor: avto pelje s hitrostjo približno $26{,}5\,\mathrm{m/s}$ (okoli $95\,\mathrm{km/h}$), sirena pa oddaja frekvenco približno $700\,\mathrm{Hz}$.

## Pogoste napake

- **Hitrost valovanja in hitrost delcev.** $c = \lambda\nu$ je hitrost širjenja motnje; delci le nihajo okoli svojih leg. Pri zvoku zrak ne »potuje« od izvira do ušesa.
- **Frekvenca se pri prehodu spremeni.** Ko gre valovanje v drugo snov, ostane frekvenca enaka (določa jo izvir), spremenita se hitrost in valovna dolžina.
- **Decibeli se seštevajo.** Dva enako glasna izvira po $60\,\mathrm{dB}$ ne dasta $120\,\mathrm{dB}$, ampak približno $63\,\mathrm{dB}$: sešteti moramo jakosti, ne ravni.
- **Razdalja med vozloma.** Sosednja vozla sta narazen $\lambda/2$, ne $\lambda$. Zato je pri struni osnovna valovna dolžina $2l$.
- **Zaprta piščal in sode harmonične frekvence.** Piščal, zaprta na enem koncu, ima le lihe večkratnike osnovne frekvence.
- **Predznaki pri Dopplerjevem pojavu.** Preveri s pametjo: pri približevanju mora biti frekvenca višja, pri oddaljevanju nižja. Gibanje izvira in gibanje opazovalca z isto hitrostjo ne dasta enakega rezultata.

## Povzetek

- Sinusno valovanje: $s = s_0\sin(kx - \omega t)$, $k = 2\pi/\lambda$, $\omega = 2\pi\nu$, $c = \lambda\nu = \omega/k$.
- Valovna enačba $\partial^2s/\partial t^2 = c^2\,\partial^2s/\partial x^2$; struna $c = \sqrt{F/\mu}$, plin $c = \sqrt{\kappa RT/M}$.
- Jakost $j = P/S$, točkast izvir $j = P/(4\pi r^2)$; raven $L = 10\,\mathrm{dB}\log_{10}(j/j_0)$, $j_0 = 10^{-12}\,\mathrm{W/m^2}$.
- Stoječe valovanje $2s_0\sin kx\cos\omega t$: vozli na razmiku $\lambda/2$; struna in odprta piščal $\nu_n = nc/(2l)$, zaprta piščal $\nu_n = (2n - 1)c/(4l)$.
- Dopplerjev pojav: $\nu' = \nu(c + v_o)/(c - v_i)$, hitrosti pozitivne pri približevanju.

## Drugače: Na sliki

Prva tri lastna nihanja strune, vpete na obeh koncih (V = vozel, H = hrbet):

```
n = 1:   V~~~~~~~~H~~~~~~~~V          l = λ/2
n = 2:   V~~~~H~~~~V~~~~H~~~~V        l = λ
n = 3:   V~~H~~V~~H~~V~~H~~V          l = 3λ/2
```

Zaprta piščal (zaprto levo, odprto desno):

```
n = 1:   V~~~~~~~~~~~~H               l = λ/4
n = 2:   V~~~~H~~~~V~~~~H             l = 3λ/4
```

Dopplerjev pojav si predstavljaj kot krožne valovne fronte, ki jih izvir odda vsako periodo. Pri mirujočem izviru so krogi koncentrični. Ko se izvir premika v desno, je središče vsakega novega kroga bolj desno, zato so krogi pred izvirom zgoščeni (krajša valovna dolžina, višja frekvenca), za njim pa razredčeni.

## Drugače: Iz vsakdanjega življenja

**Dopplerjev ultrazvok v medicini.** Ultrazvok s frekvenco $5\,\mathrm{MHz}$ se odbije od rdečih krvničk, ki se gibljejo s hitrostjo $0{,}30\,\mathrm{m/s}$ proti sondi. Krvničke so najprej gibajoči se opazovalec, nato gibajoč se izvir, zato je frekvenčni premik dvojni: $\Delta\nu \approx 2\nu v/c = 2 \cdot 5 \cdot 10^6\,\mathrm{Hz} \cdot 0{,}30/1540 \approx 1{,}9\,\mathrm{kHz}$. Ta razlika je v slišnem območju, zato jo aparat lahko predvaja kot zvok.

**Pihala in temperatura.** Ker je hitrost zvoka sorazmerna s $\sqrt{T}$, se orgle in flavte v topli dvorani uglasijo višje kot v hladni. Pri $0\,^\circ\mathrm{C}$ je hitrost zvoka okoli $331\,\mathrm{m/s}$, pri $20\,^\circ\mathrm{C}$ okoli $343\,\mathrm{m/s}$; to je razlika več kot pol poltona.

**Helijev glas.** Helij ima okoli sedemkrat manjšo molsko maso kot zrak in nekoliko večji $\kappa$, zato je hitrost zvoka v njem skoraj trikrat večja. Lastne frekvence votlin v grlu in ustih se povečajo, glas zveni višje, čeprav glasilke nihajo enako.

**Hrup.** Promet na prometni cesti je okoli $70$ do $80\,\mathrm{dB}$, rock koncert okoli $110\,\mathrm{dB}$. Pri dolgotrajni izpostavljenosti ravni nad približno $85\,\mathrm{dB}$ se sluh trajno poškoduje, zato je zaščita sluha obvezna na delovnih mestih s hrupom.

## Drugače: Korak za korakom s številkami

Zvočnik seva enakomerno na vse strani z zvočno močjo $0{,}10\,\mathrm{W}$. Kolikšna je raven jakosti zvoka na razdalji $5{,}0\,\mathrm{m}$ in na razdalji $10\,\mathrm{m}$?

1. **Površina krogle** na $5{,}0\,\mathrm{m}$: $4\pi r^2 = 4\pi \cdot 25\,\mathrm{m^2} \approx 314\,\mathrm{m^2}$.
2. **Jakost:** $j = 0{,}10\,\mathrm{W}/314\,\mathrm{m^2} \approx 3{,}2 \cdot 10^{-4}\,\mathrm{W/m^2}$.
3. **Razmerje s pragom:** $j/j_0 = 3{,}2 \cdot 10^{-4}/10^{-12} = 3{,}2 \cdot 10^{8}$.
4. **Raven:** $L = 10\,\mathrm{dB} \cdot \log_{10}(3{,}2 \cdot 10^8) \approx 10\,\mathrm{dB} \cdot 8{,}50 = 85\,\mathrm{dB}$.
5. **Na dvojni razdalji** je jakost štirikrat manjša, $j \approx 8{,}0 \cdot 10^{-5}\,\mathrm{W/m^2}$, raven pa $L \approx 79\,\mathrm{dB}$.
6. **Pravilo:** dvojna razdalja zmanjša raven za $10\,\mathrm{dB} \cdot \log_{10}4 \approx 6\,\mathrm{dB}$.

## Drugače: Bolj natančno

**Izpeljava valovne enačbe za struno.** Opazujmo kos strune med $x$ in $x + \mathrm{d}x$ z maso $\mu\,\mathrm{d}x$. Sila $F$ v struni deluje na obeh koncih v smeri tangente. Pri majhnih odmikih je navpična komponenta sile na desnem koncu $F\,\partial s/\partial x\,(x + \mathrm{d}x)$, na levem pa $-F\,\partial s/\partial x\,(x)$. Rezultanta je $F\,\frac{\partial^2s}{\partial x^2}\mathrm{d}x$, zato

$$\mu\,\mathrm{d}x\,\frac{\partial^2s}{\partial t^2} = F\,\frac{\partial^2s}{\partial x^2}\,\mathrm{d}x \quad\Longrightarrow\quad \frac{\partial^2s}{\partial t^2} = \frac{F}{\mu}\,\frac{\partial^2s}{\partial x^2}.$$

**D'Alembertova rešitev.** Z novima spremenljivkama $\xi = x - ct$ in $\eta = x + ct$ se valovna enačba prevede v $\partial^2s/\partial\xi\,\partial\eta = 0$, katere splošna rešitev je $s = f(\xi) + g(\eta)$. Funkciji določita začetna oblika in začetna hitrost strune.

**Lastna nihanja kot robni problem.** Nastavek $s = X(x)\cos\omega t$ da $X'' + k^2X = 0$ s $k = \omega/c$. Robna pogoja $X(0) = X(l) = 0$ dopuščata le $X = \sin(n\pi x/l)$, torej $k_n = n\pi/l$ in $\nu_n = nc/(2l)$. Splošno nihanje strune je vsota (Fourierjeva vrsta) lastnih nihanj; razmerje amplitud višjih harmonik določa barvo zvoka.

**Hitrost zvoka v plinu.** Stiskanja v zvočnem valu so tako hitra, da toplota ne uteče: proces je adiabaten, $pV^\kappa = \mathrm{konst.}$ Stisljivostni modul je zato $K = \kappa p$ in $c = \sqrt{\kappa p/\rho} = \sqrt{\kappa RT/M}$. Newton je vzel izotermni modul $K = p$ in dobil približno $15\,\%$ premajhno hitrost.

**Izpeljava Dopplerjeve formule.** Mirujoč izvir odda valovne fronte z razmikom $\lambda = c/\nu$. Če se izvir giblje proti opazovalcu s hitrostjo $v_i$, se v eni periodi $1/\nu$ premakne za $v_i/\nu$, zato je razmik pred njim $\lambda' = (c - v_i)/\nu$. Opazovalec, ki se giblje proti izviru s hitrostjo $v_o$, srečuje fronte z relativno hitrostjo $c + v_o$, zato zaznava frekvenco $\nu' = (c + v_o)/\lambda' = \nu(c + v_o)/(c - v_i)$. Za svetlobo, kjer snovi ni, velja relativistična formula, ki je odvisna le od relativne hitrosti.

## Preveri se

? Zvok s frekvenco $680\,\mathrm{Hz}$ se širi s hitrostjo $340\,\mathrm{m/s}$. Kolikšna je valovna dolžina?
- $2{,}0\,\mathrm{m}$
+ $0{,}50\,\mathrm{m}$
- $0{,}25\,\mathrm{m}$
> $\lambda = c/\nu = 340/680\,\mathrm{m} = 0{,}50\,\mathrm{m}$. $2{,}0\,\mathrm{m}$ je obrnjeno razmerje.

? Silo, s katero je napeta struna, povečamo na štirikratno vrednost. Kako se spremeni osnovna frekvenca?
- Poveča se štirikrat.
+ Poveča se dvakrat.
- Ostane enaka.
> $\nu_1 = c/(2l)$ in $c = \sqrt{F/\mu}$, zato je $\nu_1 \propto \sqrt{F}$; $\sqrt{4} = 2$.

? Piščal, zaprta na enem koncu, ima osnovno frekvenco $\nu_1$. Kolikšna je njena naslednja lastna frekvenca?
- $2\nu_1$
+ $3\nu_1$
- $4\nu_1$
> Na zaprtem koncu je vozel, na odprtem hrbet, zato so možni le lihi večkratniki: $\nu_1$, $3\nu_1$, $5\nu_1$ …

? Jakost zvoka se poveča na desetkratno vrednost. Kako se spremeni raven jakosti zvoka?
+ Poveča se za $10\,\mathrm{dB}$.
- Poveča se za $1\,\mathrm{dB}$.
- Poveča se desetkrat.
> $\Delta L = 10\,\mathrm{dB} \cdot \log_{10}10 = 10\,\mathrm{dB}$. Raven je logaritemska, zato se ne pomnoži z istim faktorom kot jakost.
