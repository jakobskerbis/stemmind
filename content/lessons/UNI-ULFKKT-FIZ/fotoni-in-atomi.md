---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Ob radiatorju se lahko greješ cel popoldan, pa te ne opeče; pol ure opoldanskega sonca pa lahko kožo pordeči. Radiator koži preda veliko energije, a v drobnih obrokih. Ultravijolična svetloba prinaša obroke, od katerih je vsak posebej dovolj velik, da poškoduje molekulo DNK v celici kože. Šteje torej velikost enega obroka, ne skupna moč. Ta obrok je **foton**.

Na koncu 19. stoletja se je zdelo, da klasična fizika razloži skoraj vse. Ostalo je nekaj »drobnih« ugank: zakaj svetloba iz kovine izbije elektrone le, če ima dovolj kratko valovno dolžino, zakaj razredčen vodik sveti le pri nekaj točno določenih barvah in zakaj so atomi sploh stabilni. Odgovori na ta vprašanja so vodili do **kvantne fizike**, ki je danes temelj kemije, znanosti o materialih in velikega dela biologije.

Brez kvantnih zamisli ne razumemo:

- **spektroskopije** (UV-VIS, fluorescenca, atomska absorpcija), s katero kemiki in biologi določajo snovi in njihove koncentracije,
- **fotosinteze** in vida, kjer ena sama molekula absorbira en foton določene energije,
- **elektronskega mikroskopa**, ki zaradi valovne narave elektronov vidi veliko manjše podrobnosti kot svetlobni,
- zgradbe periodnega sistema in kemijske vezi.

Pot vodi od **fotona** in **fotoefekta** prek **de Brogliejeve valovne dolžine** delcev do **energijskih nivojev** atoma na primeru vodika.

## Razlaga

### Najprej en foton: zakaj UV opeče, radiator pa ne

Vzemimo ultravijolično svetlobo UV-B z valovno dolžino $300\,\mathrm{nm}$. Njena frekvenca je $\nu = c/\lambda = 3{,}00 \cdot 10^8/3{,}00 \cdot 10^{-7}\,\mathrm{Hz} = 1{,}00 \cdot 10^{15}\,\mathrm{Hz}$, en obrok energije pa je zmnožek frekvence in Planckove konstante $h$ (natančneje jo vpeljemo spodaj): $h\nu = 6{,}626 \cdot 10^{-34} \cdot 1{,}00 \cdot 10^{15}\,\mathrm{J} \approx 6{,}6 \cdot 10^{-19}\,\mathrm{J} \approx 4{,}1\,\mathrm{eV}$. To je dovolj za prekinitev ali preureditev kemijske vezi v DNK. Infrardeče sevanje radiatorja ima valovno dolžino okoli $10\,\mu\mathrm{m}$, njegov obrok je zato več kot tridesetkrat manjši, okoli $0{,}12\,\mathrm{eV}$, in molekule le segreje. Iz tega primera sledi splošno pravilo.

**1. Foton.** Svetloba z frekvenco $\nu$ izmenjuje energijo s snovjo v obrokih, **fotonih**, z energijo

$$W_f = h\nu = \frac{hc}{\lambda},$$

kjer je $h = 6{,}626 \cdot 10^{-34}\,\mathrm{J\,s}$ **Planckova konstanta**. Foton nima mase, ima pa gibalno količino

$$p = \frac{h}{\lambda} = \frac{W_f}{c}.$$

Priročno je računati v elektronvoltih: $hc \approx 1240\,\mathrm{eV\,nm}$, zato ima foton z valovno dolžino $\lambda$ (v nanometrih) energijo $W_f \approx 1240/\lambda\,\mathrm{eV}$. Vidna svetloba ($400$ do $700\,\mathrm{nm}$) ima fotone z energijo od približno $3{,}1$ do $1{,}8\,\mathrm{eV}$, kar je ravno reda energije kemijskih vezi in elektronskih prehodov v molekulah. Svetlobni tok z močjo $P$ prinese v sekundi $P/W_f$ fotonov.

### Fotoefekt: en foton, en elektron

**2. Fotoefekt.** Ko na čisto kovinsko površino posvetimo s svetlobo, ta lahko izbije elektrone. Poskusi pokažejo:

- elektroni izstopajo le, če je frekvenca svetlobe večja od **mejne frekvence** $\nu_0$, ki je značilna za kovino; pod njo jih ni, ne glede na jakost svetlobe;
- največja kinetična energija izbitih elektronov narašča linearno s frekvenco in **ni odvisna od jakosti** svetlobe;
- jakost svetlobe določa le **število** izbitih elektronov na sekundo (tok);
- elektroni izstopijo takoj, brez zakasnitve.

Klasična valovna slika tega ne razloži. Einstein je predlagal, da en foton preda vso energijo enemu elektronu. Del energije porabi elektron, da zapusti kovino (**izstopno delo** $A_i$), preostanek je njegova kinetična energija:

$$W_{k,\max} = h\nu - A_i.$$

Mejna frekvenca je $\nu_0 = A_i/h$, mejna valovna dolžina $\lambda_0 = hc/A_i$. Za tipične kovine je izstopno delo $2$ do $5\,\mathrm{eV}$. Največjo kinetično energijo merimo z **zaporno napetostjo** $U_z$: to je napetost, pri kateri tudi najhitrejši elektroni ne dosežejo nasprotne elektrode, $e_0U_z = W_{k,\max}$. Graf $U_z$ v odvisnosti od $\nu$ je premica z naklonom $h/e_0$, kar je bil eden prvih natančnih načinov za merjenje Planckove konstante.

:::premisli
Kovino z mejno valovno dolžino $550\,\mathrm{nm}$ osvetlimo enkrat z zelo šibko modro svetlobo, drugič z zelo močno rdečo. V katerem primeru izstopajo elektroni?
---
Le pri šibki modri svetlobi. En foton preda energijo enemu elektronu; modri foton ima dovolj energije, rdeči ne. Še tako veliko rdečih fotonov ne pomaga, ker energij več fotonov elektron ne sešteje.
:::

### Delci kot valovi

**3. De Brogliejeva valovna dolžina.** Če ima svetloba lastnosti delcev, imajo morda delci lastnosti valovanja. De Broglie je predlagal, da delcu z gibalno količino $p$ pripada valovna dolžina

$$\lambda = \frac{h}{p} = \frac{h}{mv}.$$

Za nerelativističen delec s kinetično energijo $W_k$ je $p = \sqrt{2mW_k}$. Elektron, ki ga pospešimo iz mirovanja z napetostjo $U$, ima $W_k = e_0U$ in

$$\lambda = \frac{h}{\sqrt{2m_ee_0U}} \approx \frac{1{,}23\,\mathrm{nm}}{\sqrt{U/\mathrm{V}}}.$$

Pri $U = 100\,\mathrm{V}$ je $\lambda \approx 0{,}12\,\mathrm{nm}$, kar je primerljivo z razdaljami med atomi v kristalu. Davisson in Germer sta to potrdila z uklonom elektronov na kristalu niklja. Pri telesih iz vsakdanjega življenja je valovna dolžina neizmerno majhna, zato valovnih lastnosti ne opazimo.

:::premisli
Proton in elektron imata enako kinetično energijo. Kateri ima daljšo de Brogliejevo valovno dolžino?
---
Elektron. Pri enaki kinetični energiji je $p = \sqrt{2mW_k}$ manjša pri manjši masi, $\lambda = h/p$ pa zato daljša. Proton je okoli $1836$-krat težji, zato je njegova valovna dolžina okoli $\sqrt{1836} \approx 43$-krat krajša.
:::

### Od črt v spektru do nivojev atoma

**4. Energijski nivoji atoma.** Ko skozi razredčen vodik v stekleni cevi steče električni tok, plin ne zasveti v mavrici barv, ampak le v nekaj ostrih črtah; najmočnejša vidna je rdeča pri $656\,\mathrm{nm}$. Tako se vedejo vsi atomi plina: oddajajo in absorbirajo svetlobo le pri določenih valovnih dolžinah, zato je spekter **črtast**. Razlaga je, da ima elektron v atomu lahko le določene energije, **energijske nivoje** $W_1 < W_2 < W_3 < \dots$ Ko elektron preide z višjega nivoja $W_m$ na nižji $W_n$, atom izseva foton z energijo

$$h\nu = W_m - W_n.$$

Pri absorpciji je obratno: atom absorbira le foton z energijo, ki je točno enaka razliki dveh nivojev.

**5. Vodikov atom.** Za vodik so nivoji

$$W_n = -\frac{13{,}6\,\mathrm{eV}}{n^2}, \qquad n = 1, 2, 3, \dots$$

Število $n$ je **glavno kvantno število**. Pri ionih z enim elektronom (npr. $\mathrm{He^+}$) in vrstnim številom $Z$ je energija nivojev $Z^2$-krat večja po absolutni vrednosti. Nivo $n = 1$ je **osnovno stanje**; energija $13{,}6\,\mathrm{eV}$ je **ionizacijska energija** vodika iz osnovnega stanja. Valovne dolžine črt podaja Rydbergova formula

$$\frac{1}{\lambda} = R_\infty\left(\frac{1}{n^2} - \frac{1}{m^2}\right), \qquad R_\infty = 1{,}097 \cdot 10^7\,\mathrm{m^{-1}}.$$

Prehodi na $n = 1$ tvorijo **Lymanovo serijo** (ultravijolično), na $n = 2$ **Balmerjevo** (vidno: rdeča črta $656\,\mathrm{nm}$, modrozelena $486\,\mathrm{nm}$, vijolični $434$ in $410\,\mathrm{nm}$), na $n = 3$ **Paschenovo** (infrardečo).

**6. Bohrov model in kaj je pravilno.** Bohr je nivoje izpeljal s predpostavko, da elektron kroži okoli jedra le po krožnicah, na katere gre celo število de Brogliejevih valovnih dolžin. Dobil je pravilne energije in polmere $r_n = n^2r_1$ z $r_1 = 0{,}0529\,\mathrm{nm}$. Sodobna kvantna mehanika (Schrödingerjeva enačba) da iste energije, a elektrona ne opiše s tirom, temveč z **orbitalo**, ki pove verjetnost, kje ga najdemo. Pri atomih z več elektroni so nivoji odvisni še od drugih kvantnih števil, kar razloži zgradbo periodnega sistema.

## Rešeni primeri

### Primer 1 (lažji)

Laserski kazalnik, s katerim predavateljica kaže strukturne formule na prosojnici, oddaja zeleno svetlobo z valovno dolžino $500\,\mathrm{nm}$ in močjo $1{,}0\,\mathrm{mW}$. Kolikšna sta energija in gibalna količina enega fotona? Koliko fotonov odda laser v eni sekundi?

**Podatki:** $\lambda = 500\,\mathrm{nm} = 5{,}00 \cdot 10^{-7}\,\mathrm{m}$, $P = 1{,}0\,\mathrm{mW} = 1{,}0 \cdot 10^{-3}\,\mathrm{W}$, $t = 1{,}0\,\mathrm{s}$, $h = 6{,}626 \cdot 10^{-34}\,\mathrm{J\,s}$, $c = 3{,}00 \cdot 10^8\,\mathrm{m/s}$, $e_0 = 1{,}602 \cdot 10^{-19}\,\mathrm{C}$
**Iščemo:** energijo fotona $W_f$, gibalno količino $p$, število fotonov $N$ v eni sekundi

:::formula
$W_f = hc/\lambda$, $p = h/\lambda$, $N = Pt/W_f$
:::

**Rešitev:**

1. $W_f = 6{,}626 \cdot 10^{-34} \cdot 3{,}00 \cdot 10^8/5{,}00 \cdot 10^{-7}\,\mathrm{J} \approx 3{,}97 \cdot 10^{-19}\,\mathrm{J}$; to je energija enega obroka svetlobe dane valovne dolžine.
2. V elektronvoltih: $W_f = 3{,}97 \cdot 10^{-19}/1{,}602 \cdot 10^{-19}\,\mathrm{eV} \approx 2{,}48\,\mathrm{eV}$ (preizkus: $1240/500 = 2{,}48$ ✓).
3. $p = 6{,}626 \cdot 10^{-34}/5{,}00 \cdot 10^{-7}\,\mathrm{kg\,m/s} \approx 1{,}33 \cdot 10^{-27}\,\mathrm{kg\,m/s}$.
4. $N = 1{,}0 \cdot 10^{-3}\,\mathrm{J}/3{,}97 \cdot 10^{-19}\,\mathrm{J} \approx 2{,}5 \cdot 10^{15}$, ker laser v sekundi odda energijo $Pt$ v obrokih po $W_f$.
5. Odgovor: foton ima energijo okoli $2{,}5\,\mathrm{eV}$ ($4{,}0 \cdot 10^{-19}\,\mathrm{J}$) in gibalno količino $1{,}3 \cdot 10^{-27}\,\mathrm{kg\,m/s}$; laser odda okoli $2{,}5 \cdot 10^{15}$ fotonov na sekundo.

### Primer 2

Natrijevo površino osvetlimo z vijolično svetlobo z valovno dolžino $400\,\mathrm{nm}$. Izstopno delo natrija je $2{,}28\,\mathrm{eV}$. Kolikšni so največja kinetična energija izbitih elektronov, zaporna napetost, njihova največja hitrost in njihova de Brogliejeva valovna dolžina? Kolikšna je mejna valovna dolžina za natrij?

**Podatki:** $\lambda = 400\,\mathrm{nm}$, $A_i = 2{,}28\,\mathrm{eV}$, $hc = 1240\,\mathrm{eV\,nm}$, $h = 6{,}626 \cdot 10^{-34}\,\mathrm{J\,s}$, $m_e = 9{,}11 \cdot 10^{-31}\,\mathrm{kg}$, $e_0 = 1{,}602 \cdot 10^{-19}\,\mathrm{C}$
**Iščemo:** $W_{k,\max}$, $U_z$, $v_{\max}$, valovno dolžino elektrona $\lambda_e$, mejno valovno dolžino $\lambda_0$

:::formula
$W_{k,\max} = \dfrac{hc}{\lambda} - A_i$, $e_0U_z = W_{k,\max}$, $v = \sqrt{2W_k/m_e}$, $\lambda_e = \dfrac{h}{m_ev}$, $\lambda_0 = \dfrac{hc}{A_i}$
:::

**Rešitev:**

1. Energija fotona: $W_f = 1240\,\mathrm{eV\,nm}/400\,\mathrm{nm} = 3{,}10\,\mathrm{eV}$.
2. $W_{k,\max} = 3{,}10 - 2{,}28 = 0{,}82\,\mathrm{eV} = 0{,}82 \cdot 1{,}602 \cdot 10^{-19}\,\mathrm{J} \approx 1{,}31 \cdot 10^{-19}\,\mathrm{J}$; del energije fotona elektron porabi za izstop iz kovine.
3. Zaporna napetost: $U_z = W_{k,\max}/e_0 = 0{,}82\,\mathrm{V}$, ker mora ustaviti ravno najhitrejše elektrone.
4. $v_{\max} = \sqrt{2 \cdot 1{,}31 \cdot 10^{-19}/9{,}11 \cdot 10^{-31}}\,\mathrm{m/s} \approx 5{,}4 \cdot 10^5\,\mathrm{m/s}$; energijo vstavimo v joulih, ker je masa v kilogramih.
5. $\lambda_e = 6{,}626 \cdot 10^{-34}/(9{,}11 \cdot 10^{-31} \cdot 5{,}37 \cdot 10^5)\,\mathrm{m} \approx 1{,}35 \cdot 10^{-9}\,\mathrm{m} = 1{,}35\,\mathrm{nm}$; nerelativistična formula zadošča, ker je $v \ll c$.
6. Mejna valovna dolžina: $\lambda_0 = 1240/2{,}28\,\mathrm{nm} \approx 544\,\mathrm{nm}$; svetloba z daljšo valovno dolžino (rumena, rdeča) elektronov iz natrija ne izbije.
7. Odgovor: najhitrejši elektroni imajo kinetično energijo $0{,}82\,\mathrm{eV}$, zaporna napetost je $0{,}82\,\mathrm{V}$, hitrost okoli $5{,}4 \cdot 10^5\,\mathrm{m/s}$ in de Brogliejeva valovna dolžina okoli $1{,}35\,\mathrm{nm}$; mejna valovna dolžina natrija je okoli $544\,\mathrm{nm}$.

### Primer 3 (težji)

Vodikov atom je vzbujen v stanje $n = 3$. Kolikšna je valovna dolžina fotona, ki ga izseva pri prehodu na $n = 2$, in kateri seriji pripada? Kolikšna je najmanjša energija, ki iz stanja $n = 2$ ionizira atom, in katera je najkrajša valovna dolžina v Balmerjevi seriji? Rezultat za prvo črto preveri z Rydbergovo formulo.

**Podatki:** $W_n = -13{,}6\,\mathrm{eV}/n^2$, začetno stanje $n = 3$, končno stanje $n = 2$, $hc = 1240\,\mathrm{eV\,nm}$, $R_\infty = 1{,}097 \cdot 10^7\,\mathrm{m^{-1}}$
**Iščemo:** valovno dolžino $\lambda_{32}$, serijo, ionizacijsko energijo iz $n = 2$, najkrajšo valovno dolžino Balmerjeve serije $\lambda_{\infty 2}$

:::formula
$h\nu = W_m - W_n = 13{,}6\,\mathrm{eV}\left(\dfrac{1}{n^2} - \dfrac{1}{m^2}\right)$, $\lambda = \dfrac{hc}{h\nu}$
:::

**Rešitev:**

1. $W_3 = -13{,}6/9 \approx -1{,}51\,\mathrm{eV}$, $W_2 = -13{,}6/4 = -3{,}40\,\mathrm{eV}$.
2. Energija fotona: $W_3 - W_2 = 13{,}6\,(1/4 - 1/9)\,\mathrm{eV} \approx 1{,}89\,\mathrm{eV}$, ker foton odnese ravno razliko energij nivojev.
3. $\lambda_{32} = 1240/1{,}889\,\mathrm{nm} \approx 656\,\mathrm{nm}$: rdeča črta Balmerjeve serije (končno stanje $n = 2$).
4. Preizkus: $1/\lambda = 1{,}097 \cdot 10^7 \cdot (1/4 - 1/9)\,\mathrm{m^{-1}}$, $\lambda \approx 6{,}56 \cdot 10^{-7}\,\mathrm{m}$ ✓.
5. Ionizacija iz $n = 2$: elektron mora iz $W_2 = -3{,}40\,\mathrm{eV}$ na $W_\infty = 0$, torej potrebuje $3{,}40\,\mathrm{eV}$.
6. Najkrajša valovna dolžina Balmerjeve serije ustreza prehodu z $n \to \infty$ na $n = 2$: $\lambda_{\infty 2} = 1240/3{,}40\,\mathrm{nm} \approx 365\,\mathrm{nm}$ (meja serije v bližnjem UV).
7. Odgovor: pri prehodu $3 \to 2$ atom izseva rdečo svetlobo z valovno dolžino okoli $656\,\mathrm{nm}$ (Balmerjeva serija); za ionizacijo iz $n = 2$ je potrebnih $3{,}40\,\mathrm{eV}$, najkrajša valovna dolžina Balmerjeve serije pa je okoli $365\,\mathrm{nm}$.

### Primer 4 – zdaj ti

Neznano kovino osvetlimo z ultravijolično svetlobo z valovno dolžino $300\,\mathrm{nm}$. Tok izbitih elektronov preneha pri zaporni napetosti $2{,}00\,\mathrm{V}$. Kolikšna sta izstopno delo kovine in njena mejna valovna dolžina? Ali bi elektrone izbijala tudi rdeča svetloba z valovno dolžino $650\,\mathrm{nm}$?

**Podatki:** $\lambda = 300\,\mathrm{nm}$, $U_z = 2{,}00\,\mathrm{V}$, $hc = 1240\,\mathrm{eV\,nm}$, rdeča svetloba $\lambda_r = 650\,\mathrm{nm}$
**Iščemo:** izstopno delo $A_i$, mejno valovno dolžino $\lambda_0$, ali rdeča svetloba izbija elektrone

:::formula
$W_{k,\max} = \dfrac{hc}{\lambda} - A_i$, $e_0U_z = W_{k,\max}$, $\lambda_0 = \dfrac{hc}{A_i}$
:::

**Rešitev:**

1. Energija fotona: $W_f = 1240\,\mathrm{eV\,nm}/300\,\mathrm{nm} \approx 4{,}13\,\mathrm{eV}$; valovno dolžino pustimo v nanometrih, ker je $hc$ v $\mathrm{eV\,nm}$.
2. Največja kinetična energija: $W_{k,\max} = e_0U_z = 2{,}00\,\mathrm{eV}$, ker zaporna napetost ravno ustavi najhitrejše elektrone (naboj $e_0$ pri napetosti $2{,}00\,\mathrm{V}$ da $2{,}00\,\mathrm{eV}$).
3. Izračunaj sam izstopno delo in mejno valovno dolžino ter ju primerjaj z $650\,\mathrm{nm}$.

:::premisli
Kolikšna sta $A_i$ in $\lambda_0$ in ali rdeča svetloba izbija elektrone?
---
$A_i = W_f - W_{k,\max} \approx 4{,}13 - 2{,}00 = 2{,}13\,\mathrm{eV}$, $\lambda_0 = 1240/2{,}133\,\mathrm{nm} \approx 581\,\mathrm{nm}$. Rdeča svetloba ima daljšo valovno dolžino od mejne, njeni fotoni imajo premalo energije ($1240/650 \approx 1{,}9\,\mathrm{eV}$), zato elektronov ne izbija, ne glede na jakost.
:::

## Pogoste napake

- **Jakost in energija elektronov.** Močnejša svetloba iste barve izbije **več** elektronov, ne hitrejših. Kinetično energijo določa le frekvenca.
- **Kinetična energija in izstopno delo.** Ne pozabi odšteti izstopnega dela. Ko je $h\nu < A_i$, fotoefekta ni, kinetična energija ne more biti negativna.
- **Mešanje enot eV in J.** Pri $v = \sqrt{2W_k/m}$ in $\lambda = h/p$ mora biti energija v joulih. Pretvornik: $1\,\mathrm{eV} = 1{,}602 \cdot 10^{-19}\,\mathrm{J}$.
- **De Broglie s svetlobno hitrostjo.** Za delec z maso velja $\lambda = h/(mv)$, ne $\lambda = c/\nu$. Formula $W = hc/\lambda$ velja le za fotone.
- **Predznak energijskih nivojev.** Nivoji vodika so negativni, ker je energija prostega mirujočega elektrona nič. Višji nivo (večji $n$) ima energijo bližje nič, torej je večja.
- **Absorpcijski spekter je enak emisijskemu.** V hladnem plinu so skoraj vsi atomi v osnovnem stanju, zato absorbirajo le fotone z energijo $W_m - W_1$ (pri vodiku Lymanova serija). Vroč plin pa seva tudi pri prehodih med vzbujenimi stanji, na primer v Balmerjevi seriji.

## Povzetek

- Foton: $W_f = h\nu = hc/\lambda$, $p = h/\lambda$; $hc \approx 1240\,\mathrm{eV\,nm}$.
- Fotoefekt: $W_{k,\max} = h\nu - A_i$, mejna frekvenca $\nu_0 = A_i/h$, zaporna napetost $e_0U_z = W_{k,\max}$; jakost svetlobe vpliva le na število elektronov.
- De Brogliejeva valovna dolžina: $\lambda = h/p = h/\sqrt{2mW_k}$; elektron pri napetosti $U$: $\lambda \approx 1{,}23\,\mathrm{nm}/\sqrt{U/\mathrm{V}}$.
- Energijski nivoji: atom seva ali absorbira foton z $h\nu = W_m - W_n$; spekter je črtast.
- Vodik: $W_n = -13{,}6\,\mathrm{eV}/n^2$; Lymanova serija ($n = 1$, UV), Balmerjeva ($n = 2$, vidna), Paschenova ($n = 3$, IR).

## Drugače: Na sliki

Energijski nivoji vodika (ne v merilu):

```
  0,00 eV  ----------------------  n = ∞  (ionizacija)
 -0,85 eV  ----------------------  n = 4
 -1,51 eV  ----------------------  n = 3
               |        |
               | 656 nm | 486 nm (s 4 na 2)
               v        v
 -3,40 eV  ----------------------  n = 2   ← Balmerjeva serija
               |
               | 122 nm (Lyman α)
               v
-13,6 eV   ----------------------  n = 1   ← osnovno stanje
```

Nivoji se z večanjem $n$ zgoščujejo proti nič. Puščica navzdol pomeni sevanje fotona, navzgor absorpcijo; dolžina puščice je energija fotona.

Fotoefekt na grafu: kinetična energija najhitrejših elektronov v odvisnosti od frekvence je premica z naklonom $h$, ki seka vodoravno os pri mejni frekvenci $\nu_0$. Podaljšek premice seka navpično os pri $-A_i$. Za različne kovine dobimo vzporedne premice, zamaknjene glede na izstopno delo.

## Drugače: Iz vsakdanjega življenja

**Spektrofotometer v laboratoriju.** Raztopina absorbira fotone le tistih energij, ki ustrezajo prehodom v njenih molekulah. Raztopina bakrovega(II) sulfata absorbira rdečo svetlobo, zato je modra. Ker je vsak absorbiran foton en prehod v eni molekuli, je absorbanca sorazmerna s številom molekul na poti žarka, torej s koncentracijo (Beer-Lambertov zakon).

**Plamenska spektroskopija in ognjemet.** V plamenu se atomi natrija vzbudijo in pri prehodu nazaj sevajo rumeno svetlobo okoli $589\,\mathrm{nm}$. Vsak element ima svoj »prstni odtis« črt, zato iz barve plamena prepoznamo elemente: litij rdeče, baker zeleno. Ulične svetilke z natrijevimi parami so rumene iz istega razloga.

**Elektronski mikroskop.** Elektroni, pospešeni z napetostjo $100\,\mathrm{kV}$, imajo de Brogliejevo valovno dolžino nekaj tisočink nanometra (pri tej napetosti je potreben že relativistični popravek). Ker uklon omejuje ločljivost na velikostni red valovne dolžine, lahko elektronski mikroskop v načelu loči podrobnosti, manjše od nanometra, kar je dovolj za viruse in celo za zgradbo beljakovin.

**Fotocelica in sončne celice.** V svetlobnem senzorju na vratih trgovine ali v fotopomnoževalki fotoni izbijajo elektrone, ki ustvarijo tok. Sončna celica deluje na podoben, notranji fotoefekt: foton z dovolj energije v polprevodniku ustvari par elektron–vrzel. Silicij potrebuje fotone z energijo nad okoli $1{,}1\,\mathrm{eV}$, torej z valovno dolžino pod okoli $1100\,\mathrm{nm}$.

## Drugače: Korak za korakom s številkami

Kolikšna je de Brogliejeva valovna dolžina elektrona, pospešenega z napetostjo $100\,\mathrm{V}$, in teniške žogice z maso $57\,\mathrm{g}$, ki leti s hitrostjo $30\,\mathrm{m/s}$?

1. **Kinetična energija elektrona:** $W_k = e_0U = 1{,}602 \cdot 10^{-19} \cdot 100\,\mathrm{J} = 1{,}602 \cdot 10^{-17}\,\mathrm{J}$.
2. **Gibalna količina:** $p = \sqrt{2m_eW_k} = \sqrt{2 \cdot 9{,}11 \cdot 10^{-31} \cdot 1{,}602 \cdot 10^{-17}}\,\mathrm{kg\,m/s} \approx 5{,}40 \cdot 10^{-24}\,\mathrm{kg\,m/s}$.
3. **Valovna dolžina elektrona:** $\lambda = h/p = 6{,}626 \cdot 10^{-34}/5{,}40 \cdot 10^{-24}\,\mathrm{m} \approx 1{,}23 \cdot 10^{-10}\,\mathrm{m} = 0{,}123\,\mathrm{nm}$.
4. **Preizkus s priročno formulo:** $1{,}23\,\mathrm{nm}/\sqrt{100} = 0{,}123\,\mathrm{nm}$ ✓.
5. **Žogica:** $p = 0{,}057 \cdot 30\,\mathrm{kg\,m/s} = 1{,}71\,\mathrm{kg\,m/s}$, $\lambda = 6{,}626 \cdot 10^{-34}/1{,}71\,\mathrm{m} \approx 3{,}9 \cdot 10^{-34}\,\mathrm{m}$.
6. **Primerjava:** valovna dolžina elektrona je reda velikosti atoma, zato elektroni na kristalih kažejo uklon. Valovna dolžina žogice je več kot $10^{18}$-krat manjša od premera protona, zato je njena valovna narava neopazna.

## Drugače: Bolj natančno

**Izpeljava Bohrovih nivojev.** Elektron z maso $m_e$ kroži okoli protona po krožnici s polmerom $r$. Coulombova sila je centripetalna, $\frac{e_0^2}{4\pi\varepsilon_0r^2} = \frac{m_ev^2}{r}$. Bohrov pogoj zahteva, da gre na obseg celo število de Brogliejevih valovnih dolžin: $2\pi r = n\lambda = nh/(m_ev)$, torej $m_evr = n\hbar$ z $\hbar = h/(2\pi)$. Iz obeh enačb sledi

$$r_n = \frac{4\pi\varepsilon_0\hbar^2}{m_ee_0^2}\,n^2 = n^2 \cdot 0{,}0529\,\mathrm{nm}, \qquad W_n = \frac{1}{2}m_ev^2 - \frac{e_0^2}{4\pi\varepsilon_0r_n} = -\frac{m_ee_0^4}{8\varepsilon_0^2h^2}\,\frac{1}{n^2} = -\frac{13{,}6\,\mathrm{eV}}{n^2}.$$

Preizkus za $n = 2$: obseg $2\pi \cdot 0{,}212\,\mathrm{nm} \approx 1{,}33\,\mathrm{nm}$, de Brogliejeva valovna dolžina elektrona s kinetično energijo $3{,}40\,\mathrm{eV}$ pa je $0{,}665\,\mathrm{nm}$: na obseg gresta točno dve.

**Nedoločenost.** Valovna narava delcev ima za posledico **Heisenbergovo načelo nedoločenosti**: $\Delta x\,\Delta p_x \ge \hbar/2$. Elektron, omejen na območje velikosti atoma ($\Delta x \approx 0{,}1\,\mathrm{nm}$), ima nedoločenost gibalne količine okoli $5 \cdot 10^{-25}\,\mathrm{kg\,m/s}$ in s tem kinetično energijo reda elektronvolta. To je razlog, da elektron ne pade v jedro.

**Delec v škatli.** Najpreprostejši kvantni model energijskih nivojev: delec z maso $m$ v enodimenzionalni škatli z dolžino $L$ ima stoječe valovanje z $L = n\lambda/2$. Iz $p = h/\lambda$ dobimo $W_n = \frac{p^2}{2m} = \frac{n^2h^2}{8mL^2}$. Model dobro opiše absorpcijo konjugiranih barvil, kjer se elektroni $\pi$ prosto gibljejo vzdolž verige: daljša veriga pomeni manjšo razliko nivojev in absorpcijo pri daljši valovni dolžini.

**Comptonov pojav.** Pri sipanju rentgenskih žarkov na elektronih se valovna dolžina poveča za $\Delta\lambda = \frac{h}{m_ec}(1 - \cos\vartheta)$. Ta rezultat dobimo, če pri trku fotona z elektronom upoštevamo ohranitev energije in **gibalne količine** fotona $p = h/\lambda$, kar je neposreden dokaz, da ima foton gibalno količino.

## Preveri se

? Kolikšna je energija fotona z valovno dolžino $620\,\mathrm{nm}$?
- $0{,}50\,\mathrm{eV}$
~ Razmerje si obrnil: izračunal si $\lambda/(hc)$; energija fotona je $hc/\lambda$, zato je pri krajši valovni dolžini večja.
+ $2{,}0\,\mathrm{eV}$
- $1{,}24\,\mathrm{eV}$
~ To je $hc = 1{,}24\,\mathrm{eV\,\mu m}$ brez deljenja z valovno dolžino $0{,}62\,\mu\mathrm{m}$; tako energijo ima foton z valovno dolžino $1000\,\mathrm{nm}$.
> $W_f = 1240\,\mathrm{eV\,nm}/620\,\mathrm{nm} = 2{,}0\,\mathrm{eV}$.

? Pri fotoefektu povečamo jakost svetlobe, frekvenca pa ostane enaka. Kaj se zgodi?
- Izbiti elektroni so hitrejši.
~ To je klasična valovna predstava. Vsak elektron dobi energijo enega fotona, ta pa je odvisna le od frekvence.
+ Izbitih elektronov je več, njihova največja kinetična energija pa je enaka.
- Mejna frekvenca se zmanjša.
~ Mejna frekvenca $\nu_0 = A_i/h$ je lastnost kovine (izstopnega dela), ne svetlobe.
> En foton izbije en elektron, energijo elektrona določa $h\nu - A_i$. Večja jakost pomeni več fotonov in zato več elektronov.

? Hitrost elektrona podvojimo (nerelativistično). Kako se spremeni njegova de Brogliejeva valovna dolžina?
+ Razpolovi se.
- Podvoji se.
~ Zamenjal si sorazmernost: $\lambda = h/(mv)$ je obratno sorazmerna s hitrostjo, hitrejši delec ima krajšo valovno dolžino.
- Zmanjša se na četrtino.
~ Kinetična energija se res početveri, a valovna dolžina je obratno sorazmerna z gibalno količino, ne z energijo.
> $\lambda = h/(mv)$ je obratno sorazmerna s hitrostjo. Na četrtino bi se zmanjšala šele pri štirikratni hitrosti (šestnajstkratni kinetični energiji).

? Kolikšno energijo ima foton, ki ga izseva vodikov atom pri prehodu iz $n = 2$ v $n = 1$?
- $13{,}6\,\mathrm{eV}$
~ To je ionizacijska energija, prehod iz $n = 1$ v $n = \infty$; foton nosi razliko nivojev $2$ in $1$.
- $3{,}4\,\mathrm{eV}$
~ To je absolutna vrednost energije nivoja $n = 2$, ne razlika nivojev.
+ $10{,}2\,\mathrm{eV}$
> $W_2 - W_1 = -3{,}4\,\mathrm{eV} - (-13{,}6\,\mathrm{eV}) = 10{,}2\,\mathrm{eV}$, kar ustreza ultravijolični črti z valovno dolžino okoli $122\,\mathrm{nm}$.

? Katera serija črt vodikovega spektra leži v vidnem delu spektra?
- Lymanova (prehodi na $n = 1$)
~ Misliš, da je najbolj znana serija tudi vidna; prehodi na osnovno stanje imajo veliko energijo (vsaj $10{,}2\,\mathrm{eV}$), zato so njihove črte v ultravijoličnem delu.
+ Balmerjeva (prehodi na $n = 2$)
- Paschenova (prehodi na $n = 3$)
~ Misliš, da manjša energija fotona še pomeni vidno svetlobo; prehodi na $n = 3$ dajo fotone pod $1{,}6\,\mathrm{eV}$, ki so že v infrardečem delu.
> Balmerjeva serija ima črte pri $656$, $486$, $434$ in $410\,\mathrm{nm}$, torej v vidnem delu.
