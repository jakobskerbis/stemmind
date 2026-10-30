---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Kolesar s $60\,\mathrm{kg}$ se postavi na pedal in nanj pritisne s silo okoli $600\,\mathrm{N}$. Ročica je dolga $17\,\mathrm{cm}$, zato os pedalov dobi navor $600\,\mathrm{N} \cdot 0{,}17\,\mathrm{m} = 102\,\mathrm{N\,m}$. Os se ne zlomi in se skoraj ne zvije. Kako debela mora biti, da je tako?

Isto vprašanje rešujejo inženirji, ki gradijo rover za Mars. Motor vsakega kolesa ga poganja prek gredi z navorom okoli $150\,\mathrm{N\,m}$. Vsak gram, ki ga izstrelimo v vesolje, stane, zato gred ne sme biti debelejša, kot je treba. Ne sme pa se niti zlomiti, saj na Marsu ni serviserja.

Gred, ki jo obremenjuje navor okoli njene osi, je obremenjena na **torzijo** (zvijanje). Izračunal boš največjo strižno napetost v okrogli gredi in kot, za katerega se gred zasuče. Enako računamo pogonske gredi, osi vijačnikov in torzijske vzmeti.

## Razlaga

Pri osni obremenitvi palico vlečemo vzdolž osi. Pri torziji jo vrtimo okoli osi: en konec zadržuje kolo ali vpetje, na drugi konec deluje motor z **navorom** $T$ (merimo ga v $\mathrm{N\,m}$). Novo idejo zgradimo iz razlik do osne obremenitve, ki jo že poznaš.

**Razlika 1: vrsta deformacije.** Na površino gredi nariši mrežo kvadratkov. Pri nategu se kvadratek podaljša. Pri torziji se poševno nagne v romb: zgornji rob se premakne vstran glede na spodnjega. To je **strižna deformacija** $\gamma$, kot, za katerega se nagne nekdaj pravi kot (v radianih). Pripada ji **strižna napetost** $\tau$, sila na ploščino, ki deluje *v ravnini* preseka. Hookov zakon za strig je $\tau = G\gamma$, kjer je $G$ **strižni modul** (jeklo $80\,\mathrm{GPa}$, titan okoli $44\,\mathrm{GPa}$, aluminij okoli $26\,\mathrm{GPa}$).

**Razlika 2: kako se napetost razporedi.** Pri nategu vsako vlakno nosi enako napetost $\sigma = F/A$. Pri torziji ne. Črta, ki jo narišeš vzdolž gredi, se zvije v vijačnico. Če se konec gredi zasuče za kot $\varphi$, se točka na razdalji $\rho$ od osi premakne po loku $\rho\varphi$. Točka na osi se sploh ne premakne. Ta premik se porazdeli po vsej dolžini $L$, zato je nagib kvadratka lok, deljen z dolžino:

$$\gamma = \frac{\rho\,\varphi}{L}, \qquad \tau = G\,\frac{\rho\,\varphi}{L}$$

Napetost raste **linearno od nič na osi do največje vrednosti na površini**.

:::premisli
V jekleni gredi s polmerom $10\,\mathrm{mm}$ je na površini $\tau = 90\,\mathrm{MPa}$. Kolikšna je strižna napetost $5\,\mathrm{mm}$ od osi? Kje bi pri preobremenitvi začela nastajati razpoka?
---
$45\,\mathrm{MPa}$, ker je $\tau$ sorazmerna z $\rho$, $5\,\mathrm{mm}$ pa je pol polmera. Razpoka nastane na površini, kjer je napetost največja.
:::

**Razlika 3: kaj meri »debelino« preseka.** Pri nategu je odločilna ploščina $A$. Pri torziji kos ploščine $\mathrm{d}A$ na razdalji $\rho$ nosi napetost, sorazmerno z $\rho$, in ima ročico $\rho$, zato šteje $\rho^2\,\mathrm{d}A$. Seštevek je **polarni vztrajnostni moment** $J$. Za poln krog s premerom $d$ in za cev z zunanjim $D$ in notranjim $d$:

$$J = \frac{\pi d^4}{32}, \qquad J_{\text{cev}} = \frac{\pi (D^4 - d^4)}{32}$$

Iz upogiba poznaš $I = \pi d^4/64$. Za krog je $J = 2I$.

Primerjava obeh obremenitev:

| | Osna obremenitev | Torzija |
|---|---|---|
| obremenitev | sila $F$ | navor $T$ |
| napetost | $\sigma = F/A$, enakomerna | $\tau = T\rho/J$, linearna |
| deformacija | $\varepsilon$ | $\gamma$ |
| modul | $E$ | $G$ |
| togost | $EA$ | $GJ$ |
| sprememba oblike | $\Delta L = \dfrac{FL}{EA}$ | $\varphi = \dfrac{TL}{GJ}$ |

Največja napetost je na površini ($\rho = d/2$):

$$\tau_{\max} = \frac{T\,d/2}{J} = \frac{16\,T}{\pi d^3}$$

Kot zasuka $\varphi$ dobimo v **radianih**. V stopinje ga pretvorimo z $180^\circ/\pi$.

:::premisli
Premer gredi podvojiš, navor ostane enak. Kolikokrat se zmanjšata $\tau_{\max}$ in $\varphi$? Primerjaj s palico, ki ji pri nategu podvojiš premer.
---
$\tau_{\max} \propto 1/d^3$ se zmanjša osemkrat, $\varphi \propto 1/d^4$ šestnajstkrat. Pri nategu se $\sigma$ in $\Delta L$ zmanjšata le štirikrat, ker je $A \propto d^2$. Premer je pri torziji veliko močnejši vzvod.
:::

Iz linearne razporeditve sledi še nekaj: snov blizu osi nosi majhno napetost in skoraj nič ne prispeva k $J$. Zato so gredi v vesoljskih napravah pogosto votle. Formule veljajo le za okrogle prereze in v elastičnem območju.

## Rešeni primeri

### Primer 1: gred kolesa roverja

Polna jeklena gred, ki poganja kolo roverja, ima premer $20\,\mathrm{mm}$ in prenaša navor $150\,\mathrm{N\,m}$. Kolikšna je največja strižna napetost? Kolikšna je napetost $5\,\mathrm{mm}$ od osi?

**Podatki:** $T = 150\,\mathrm{N\,m} = 150\,000\,\mathrm{N\,mm}$, $d = 20\,\mathrm{mm}$, $\rho = 5\,\mathrm{mm}$
**Iščemo:** $\tau_{\max}$ in $\tau$ pri $\rho = 5\,\mathrm{mm}$

:::formula
$\tau_{\max} = \dfrac{16\,T}{\pi d^3}$, $\quad \tau(\rho) = \tau_{\max}\,\dfrac{\rho}{d/2}$
:::

**Rešitev:**

1. Navor pretvorimo v $\mathrm{N\,mm}$, da dobimo napetost v $\mathrm{N/mm^2} = \mathrm{MPa}$.
2. $\tau_{\max} = \dfrac{16 \cdot 150\,000\,\mathrm{N\,mm}}{\pi \cdot (20\,\mathrm{mm})^3} \approx 95{,}5\,\mathrm{MPa}$.
3. Točka $5\,\mathrm{mm}$ od osi leži na polovici polmera, zato je $\tau \approx 95{,}5\,\mathrm{MPa} / 2 \approx 47{,}7\,\mathrm{MPa}$.
4. Odgovor: na površini je $\tau_{\max} \approx 95{,}5\,\mathrm{MPa}$, na polovici polmera pa okoli $47{,}7\,\mathrm{MPa}$.

### Primer 2: za koliko se gred zasuče

Ista gred je med motorjem in kolesom dolga $300\,\mathrm{mm}$. Za koliko stopinj se zasuče kolo glede na motor, ko gred prenaša $150\,\mathrm{N\,m}$?

**Podatki:** $T = 150\,000\,\mathrm{N\,mm}$, $L = 300\,\mathrm{mm}$, $d = 20\,\mathrm{mm}$, $G = 80\,000\,\mathrm{MPa}$
**Iščemo:** kot zasuka $\varphi$

:::formula
$J = \dfrac{\pi d^4}{32}$, $\quad \varphi = \dfrac{TL}{GJ}$
:::

**Rešitev:**

1. $J = \dfrac{\pi \cdot (20\,\mathrm{mm})^4}{32} \approx 15\,708\,\mathrm{mm^4}$.
2. Torzijska togost: $GJ \approx 80\,000\,\mathrm{MPa} \cdot 15\,708\,\mathrm{mm^4} \approx 1{,}257 \cdot 10^9\,\mathrm{N\,mm^2}$.
3. $\varphi = \dfrac{150\,000\,\mathrm{N\,mm} \cdot 300\,\mathrm{mm}}{1{,}257 \cdot 10^9\,\mathrm{N\,mm^2}} \approx 0{,}0358\,\mathrm{rad}$.
4. V stopinjah: $0{,}0358 \cdot 180^\circ / \pi \approx 2{,}05^\circ$.
5. Odgovor: kolo zaostane za motorjem za približno $2^\circ$.

### Primer 3: votla gred je lažja in močnejša

Inženirji polno gred iz primerov 1 in 2 zamenjajo z votlo jekleno cevjo z zunanjim premerom $24\,\mathrm{mm}$ in notranjim $18\,\mathrm{mm}$. Navor je še vedno $150\,\mathrm{N\,m}$. Je cev lažja? Kolikšna je v njej največja strižna napetost?

**Podatki:** $D = 24\,\mathrm{mm}$, $d = 18\,\mathrm{mm}$, $T = 150\,000\,\mathrm{N\,mm}$; polna gred: $d_0 = 20\,\mathrm{mm}$, $\tau_{\max,0} \approx 95{,}5\,\mathrm{MPa}$
**Iščemo:** razmerje mas (pri enaki dolžini in snovi) in $\tau_{\max}$ v cevi

:::formula
$A = \dfrac{\pi (D^2 - d^2)}{4}$, $\quad J = \dfrac{\pi (D^4 - d^4)}{32}$, $\quad \tau_{\max} = \dfrac{T\,D/2}{J}$
:::

**Rešitev:**

1. Masa je sorazmerna s ploščino preseka. Razmerje: $\dfrac{D^2 - d^2}{d_0^2} = \dfrac{576 - 324}{400} = 0{,}63$.
2. Cev ima torej le $63\,\%$ mase polne gredi, je za $37\,\%$ lažja.
3. $J = \dfrac{\pi \cdot (331\,776 - 104\,976)\,\mathrm{mm^4}}{32} \approx 22\,266\,\mathrm{mm^4}$, več kot pri polni gredi ($15\,708\,\mathrm{mm^4}$).
4. Napetost na zunanji površini: $\tau_{\max} = \dfrac{150\,000\,\mathrm{N\,mm} \cdot 12\,\mathrm{mm}}{22\,266\,\mathrm{mm^4}} \approx 80{,}8\,\mathrm{MPa}$.
5. Odgovor: cev je za $37\,\%$ lažja, največja napetost pa se zniža s $95{,}5$ na približno $80{,}8\,\mathrm{MPa}$. Snov smo premaknili tja, kjer nosi največ.

### Primer 4: zdaj ti

Sveder, ki na Marsu vrta vzorce kamnin, poganja polna titanova gred. Prenaša navor $40\,\mathrm{N\,m}$, dovoljena strižna napetost je $60\,\mathrm{MPa}$. Kolikšen mora biti najmanj premer gredi?

**Podatki:** $T = 40\,\mathrm{N\,m} = 40\,000\,\mathrm{N\,mm}$, $\tau_{\text{dop}} = 60\,\mathrm{MPa}$
**Iščemo:** najmanjši premer $d$

:::formula
$\tau_{\max} = \dfrac{16\,T}{\pi d^3} \le \tau_{\text{dop}}$ $\;\Rightarrow\;$ $d \ge \sqrt[3]{\dfrac{16\,T}{\pi\,\tau_{\text{dop}}}}$
:::

**Rešitev:**

1. Neznanka je premer, zato enačbo za $\tau_{\max}$ obrnemo: $d^3 = \dfrac{16\,T}{\pi\,\tau_{\text{dop}}}$.
2. Vstavi: $d^3 = \dfrac{16 \cdot 40\,000\,\mathrm{N\,mm}}{\pi \cdot 60\,\mathrm{N/mm^2}}$. Izračunaj sam, nato preveri:

:::premisli
Koliko je $d^3$ in koliko $d$?
---
$d^3 \approx 3395\,\mathrm{mm^3}$, $d = \sqrt[3]{3395}\,\mathrm{mm} \approx 15{,}0\,\mathrm{mm}$. Snov ($G$) pri trdnosti ne nastopa; vpliva le na kot zasuka.
:::

## Pogoste napake

- **»Napetost je po preseku enaka, kot pri nategu.«** Pri torziji je na osi nič in linearno raste do površine. Zato $\tau = T/A$ ne velja; prava formula je $\tau = T\rho/J$.
- **Kot v stopinjah v formuli.** $\varphi = TL/(GJ)$ in $\gamma = \rho\varphi/L$ zahtevata radiane. Izmerjen kot v stopinjah najprej pomnoži s $\pi/180^\circ$.
- **Zamenjava $J$ in $I$.** Iz upogiba poznaš $I = \pi d^4/64$. Pri torziji je potreben polarni $J = \pi d^4/32 = 2I$. Kdor vzame $I$, dobi dvakrat preveliko napetost in zasuk.
- **Polmer namesto premera.** V $\tau_{\max} = 16T/(\pi d^3)$ je $d$ premer. Kdor vstavi polmer, dobi osemkrat preveliko napetost. V $\tau = T\rho/J$ pa je $\rho$ razdalja od osi, na površini $d/2$.
- **$E$ namesto $G$.** Za strig šteje strižni modul. Jeklo ima $E = 200\,\mathrm{GPa}$, a $G = 80\,\mathrm{GPa}$; z $E$ dobiš $2{,}5$-krat premajhen zasuk.

## Povzetek

- Torzija: navor $T$ okoli osi gredi. Nastanejo strižne napetosti $\tau$ in strižne deformacije $\gamma$, $\tau = G\gamma$.
- V okrogli gredi $\tau = T\rho/J$ raste linearno od $0$ na osi do $\tau_{\max} = \dfrac{16T}{\pi d^3}$ na površini.
- Polarni vztrajnostni moment: $J = \pi d^4/32$ (poln krog), $J = \pi(D^4 - d^4)/32$ (cev); $J = 2I$.
- Kot zasuka v radianih: $\varphi = \dfrac{TL}{GJ}$, analogno $\Delta L = \dfrac{FL}{EA}$.
- $\tau_{\max} \propto 1/d^3$, $\varphi \propto 1/d^4$. Votla gred pri isti masi prenese več.
- Računaj v $\mathrm{N\,mm}$, $\mathrm{mm}$, $\mathrm{MPa}$; jeklo $G = 80\,\mathrm{GPa}$.

## Drugače: Na sliki

Predstavljaj si gred kot snop tankih cevi, vtaknjenih druga v drugo, kot letnice v deblu.

| Razdalja od osi | Lok pri zasuku | Nagib $\gamma$ | $\tau$ |
|---|---|---|---|
| $0$ (os) | $0$ | $0$ | $0$ |
| $r/2$ | $r\varphi/2$ | $\gamma_{\max}/2$ | $\tau_{\max}/2$ |
| $r$ (površina) | $r\varphi$ | $\gamma_{\max}$ | $\tau_{\max}$ |

Ko zasučeš konec gredi za kot $\varphi$, se vse cevi zasučejo za isti kot. Zunanja cev pa mora pri tem prepotovati daljši lok, zato se njena površina najbolj nagne in je najbolj napeta. Notranje cevi se komaj nagnejo.

Črta, ki je bila narisana vzdolž gredi, se po zasuku ovije v vijačnico. Kot med vijačnico in osjo je $\gamma$ na površini. Pri dvakrat daljši gredi se ob istem navoru konec zasuče dvakrat bolj, nagib $\gamma$ pa ostane enak.

## Drugače: Iz vsakdanjega življenja

- **Ožemanje brisače.** Ko zvijaš mokro brisačo, se zunanji sloji močno nagnejo v vijačnico, sredica pa se skoraj ne premakne.
- **Lomljenje krede.** Kos krede zvij med prsti. Ne odlomi se naravnost prečno kot pri upogibu, ampak po poševni vijačnici pod okoli $45^\circ$. Strig pod $45^\circ$ deluje kot nateg, krhka snov pa poči prav zaradi natega. Lom se vedno začne na površini.
- **Izvijač.** Ročaj je debel, da ga z dlanjo zasučeš z dovolj velikim navorom. Steblo prenaša isti navor, a je iz trdnega jekla, zato zadošča tanko. Dolg tanek nastavek se pri močnem privijanju vidno zasuče, ker je $\varphi \propto L/d^4$.
- **Kolesarska os.** Os pedalov je cev, ne poln valj: kolesarski deli morajo biti lahki, tako kot deli roverja.

## Drugače: Bolj natančno

Predpostavke: prerezi ostanejo ravni in okrogli, polmeri ostanejo ravni, snov je elastična in homogena. Tedaj je $\gamma(\rho) = \rho\,\varphi/L$ in $\tau(\rho) = G\rho\,\varphi/L$. Ravnovesje med zunanjim navorom in notranjimi napetostmi:

$$T = \int_A \tau\,\rho\,\mathrm{d}A = \frac{G\varphi}{L}\int_A \rho^2\,\mathrm{d}A = \frac{G\varphi}{L}\,J$$

Od tod $\varphi = TL/(GJ)$, z vstavitvijo v $\tau$ pa $\tau = T\rho/J$. Za krog z $\mathrm{d}A = 2\pi\rho\,\mathrm{d}\rho$ je $J = \int_0^{r} 2\pi\rho^3\,\mathrm{d}\rho = \pi r^4/2 = \pi d^4/32$. Ker je $\rho^2 = y^2 + z^2$, velja $J = I_y + I_z = 2I$.

Za neokrogle prereze (pravokotnik, profil I) prerezi niso več ravni, ampak se vbočijo, in te formule ne veljajo. Zasuk po delih gredi s spremenljivim navorom ali premerom seštejemo: $\varphi = \sum_i T_i L_i/(G_i J_i)$.

## Preveri se

? Zakaj so gredi v vesoljskih napravah pogosto votle?
- Ker je pri votli gredi napetost po preseku enakomerna.
~ Tudi v cevi napetost raste z $\rho$; razlika je le, da manjka del z majhno napetostjo.
+ Ker snov blizu osi nosi majhno napetost in malo prispeva k $J$, zato jo lahko odstranimo z malo izgube trdnosti.
- Ker je votla gred pri enakem zunanjem premeru močnejša od polne.
~ Pri enakem zunanjem premeru ima cev manjši $J$ in je malo šibkejša. Prednost je v razmerju trdnosti in mase.
> Prispevek k $J$ je sorazmeren z $\rho^2$, zato sredica skoraj nič ne nosi, pa veliko tehta.

? Katera razporeditev strižne napetosti po polmeru ustreza polni okrogli gredi pri torziji?
- $\rho = 0;\ r/2;\ r$: $\tau = 60;\ 60;\ 60\,\mathrm{MPa}$
~ Enakomerna napetost velja pri osni obremenitvi. Pri torziji se točka na osi ne deformira.
+ $\rho = 0;\ r/2;\ r$: $\tau = 0;\ 30;\ 60\,\mathrm{MPa}$
- $\rho = 0;\ r/2;\ r$: $\tau = 60;\ 30;\ 0\,\mathrm{MPa}$
~ Obrnjeno: največ se deformira površina, ki prepotuje najdaljši lok, os pa nič.
> $\tau = T\rho/J$ je sorazmerna z razdaljo od osi: na osi $0$, na površini največ.

? Gredi podvojimo dolžino in premer, navor ostane enak. Kako se spremeni kot zasuka $\varphi$?
- Ostane enak, ker se dvojki pokrajšata.
~ Dolžina in premer ne vplivata enako močno: $\varphi \propto L/d^4$, ne $L/d$.
- Zmanjša se šestnajstkrat.
~ To je le vpliv premera. Dvakrat daljša gred se pri istem navoru zasuče dvakrat bolj.
- Zmanjša se dvakrat.
~ To bi dobil s $\varphi \propto L/d^2$, kot pri $\Delta L = FL/(EA)$. Pri torziji šteje $J \propto d^4$.
+ Zmanjša se osemkrat.
> $\varphi = TL/(GJ) \propto L/d^4$: $2/2^4 = 1/8$.

? Jeklena gred ($G = 80\,\mathrm{GPa}$) z $J = 2{,}0 \cdot 10^{-8}\,\mathrm{m^4}$ in dolžino $0{,}4\,\mathrm{m}$ se zasuče za $1{,}72^\circ$. Kolikšen navor prenaša?
- Približno $6880\,\mathrm{N\,m}$
~ Tu je kot vstavljen v stopinjah. Formula zahteva radiane: $1{,}72^\circ \approx 0{,}030\,\mathrm{rad}$.
- Približno $19\,\mathrm{N\,m}$
~ Tu je dolžina pomnožena, ne deljena. Daljša gred se pri istem navoru zasuče bolj, zato $T = GJ\varphi/L$.
+ Približno $120\,\mathrm{N\,m}$
> $\varphi = 1{,}72^\circ \cdot \pi/180^\circ \approx 0{,}030\,\mathrm{rad}$, $T = \dfrac{GJ\varphi}{L} = \dfrac{80 \cdot 10^9 \cdot 2{,}0 \cdot 10^{-8} \cdot 0{,}030}{0{,}4}\,\mathrm{N\,m} \approx 120\,\mathrm{N\,m}$.

? Astronavt pri vesoljskem sprehodu privija vijak z orodjem, ki ima polno jekleno steblo s premerom $10\,\mathrm{mm}$. Navor je $20\,\mathrm{N\,m}$. Kolikšna je največja strižna napetost v steblu?
- Približno $815\,\mathrm{MPa}$
~ To dobiš, če v $16T/(\pi d^3)$ vstaviš polmer $5\,\mathrm{mm}$ namesto premera.
- Približno $204\,\mathrm{MPa}$
~ Tu je uporabljen $I = \pi d^4/64$ iz upogiba namesto polarnega $J = \pi d^4/32$.
+ Približno $102\,\mathrm{MPa}$
- Približno $0{,}25\,\mathrm{MPa}$
~ To je $T/A$, kot pri nategu. Navor ni sila in napetost ni enakomerna.
> $\tau_{\max} = \dfrac{16 \cdot 20\,000\,\mathrm{N\,mm}}{\pi \cdot (10\,\mathrm{mm})^3} \approx 102\,\mathrm{MPa}$. V breztežnosti se navor ne spremeni: steblo napenja roka astronavta, ne teža.
