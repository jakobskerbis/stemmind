---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Do zdaj si spoznal naravna števila, cela števila in ulomke oziroma decimalna števila. Znaš tudi kvadrirati in korenit: $\sqrt{49} = 7$, ker je $7^2 = 49$. Ob korenjenju pa se je morda že zgodilo, da kalkulator ob $\sqrt{2}$ pokaže dolgo število, ki se ne konča: $1{,}41421356\ldots$

Kaj je to za število? Ali ga lahko zapišemo kot ulomek? Ali ga lahko označimo na številski premici? V tej lekciji bomo ugotovili, da poleg ulomkov obstajajo še druga števila, **iracionalna**, in da skupaj z racionalnimi tvorijo **realna števila**. Ta števila potrebuješ povsod, kjer računaš s koreni ali s številom $\pi$, na primer pri obsegu in ploščini kroga.

## Razlaga

**1. Racionalna števila.** Število je **racionalno**, če ga lahko zapišemo kot ulomek $\dfrac{m}{n}$, kjer je $m$ celo število, $n$ pa naravno število. Množico racionalnih števil označimo z $\mathbb{Q}$.

Sem sodijo:

- naravna števila: $5 = \dfrac{5}{1}$,
- cela števila: $-3 = \dfrac{-3}{1}$,
- ulomki: $\dfrac{2}{3}$,
- končna decimalna števila: $0{,}75 = \dfrac{3}{4}$,
- neskončna **periodična** decimalna števila: $0{,}333\ldots = \dfrac{1}{3}$.

**2. Iracionalna števila.** Število je **iracionalno**, če ga **ni mogoče** zapisati kot ulomek. Njegov decimalni zapis je neskončen in **neperiodičen**: števke se nikoli ne začnejo ponavljati v enakem vzorcu.

Primeri: $\sqrt{2} = 1{,}41421356\ldots$, $\sqrt{3} = 1{,}7320508\ldots$, $\pi = 3{,}14159265\ldots$

**3. Kdaj je koren iracionalen?** Naj bo $n$ naravno število.

- Če je $n$ kvadrat naravnega števila (1, 4, 9, 16, 25, …), je $\sqrt{n}$ naravno število. Na primer $\sqrt{16} = 4$.
- Če $n$ ni kvadrat naravnega števila, je $\sqrt{n}$ iracionalno. Na primer $\sqrt{2}$, $\sqrt{7}$, $\sqrt{10}$.

**4. Realna števila.** Racionalna in iracionalna števila skupaj tvorijo **realna števila**, ki jih označimo z $\mathbb{R}$. Vsako število, ki ga poznaš iz šole, je realno. Velja:

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

Iracionalna števila so v $\mathbb{R}$, niso pa v $\mathbb{Q}$.

**5. Številska premica.** Vsakemu realnemu številu ustreza natanko ena točka na številski premici in vsaki točki na premici natanko eno realno število. Na premici ni »lukenj«. Iracionalna števila zapolnijo prostor med racionalnimi.

**6. Kako iracionalno število umestimo na premico?** Najprej ugotovimo, med katerima celima številoma leži, nato pa jih po potrebi približamo z decimalnimi števili. Pri $\sqrt{n}$ iščemo dva zaporedna kvadrata, med katerima leži $n$.

**7. Približki.** Iracionalnega števila ne moremo zapisati natančno z decimalkami, zato pišemo približek: $\sqrt{2} \approx 1{,}41$. Znak $\approx$ pomeni »približno enako«. Znak $=$ bi bil napačen.

## Rešeni primeri

### Primer 1: razvrščanje števil

Katera od števil $7$, $-3$, $0{,}5$, $\sqrt{9}$, $\sqrt{7}$, $\pi$, $\sqrt{\dfrac{16}{25}}$ so racionalna in katera iracionalna?

1. $7$ je naravno število, zato je racionalno ($7 = \dfrac{7}{1}$).
2. $-3$ je celo število, zato je racionalno.
3. $0{,}5 = \dfrac{1}{2}$ je racionalno.
4. $\sqrt{9} = 3$, ker je $3^2 = 9$. To je naravno število, zato je racionalno. Pozor: koren ne pomeni samodejno iracionalnega števila.
5. $\sqrt{7}$: $7$ ni kvadrat naravnega števila ($2^2 = 4$, $3^2 = 9$), zato je $\sqrt{7}$ iracionalno.
6. $\pi$ je iracionalno (to je znano dejstvo).
7. $\sqrt{\dfrac{16}{25}} = \dfrac{4}{5}$, ker je $\left(\dfrac{4}{5}\right)^2 = \dfrac{16}{25}$. To je ulomek, zato je število racionalno.

**Odgovor.** Iracionalni sta samo $\sqrt{7}$ in $\pi$. Vsa ostala števila so racionalna. Vsa so realna.

### Primer 2: položaj na številski premici

Med katerima zaporednima celima številoma ležita $\sqrt{50}$ in $-\sqrt{20}$? Katero celo število je vsakemu bližje?

1. **Za $\sqrt{50}$** poiščemo kvadrata, med katerima leži $50$: $7^2 = 49$ in $8^2 = 64$, torej $49 < 50 < 64$.
2. Ker koren pri pozitivnih številih ohranja vrstni red, je $7 < \sqrt{50} < 8$.
3. $50$ je zelo blizu $49$, zato je $\sqrt{50}$ blizu $7$. Preverimo: $7{,}07^2 = 49{,}9849$ in $7{,}08^2 = 50{,}1264$, torej $\sqrt{50} \approx 7{,}07$.
4. **Za $\sqrt{20}$:** $4^2 = 16$ in $5^2 = 25$, torej $4 < \sqrt{20} < 5$. Preverimo: $4{,}47^2 = 19{,}9809$ in $4{,}48^2 = 20{,}0704$, zato je $\sqrt{20} \approx 4{,}47$.
5. Število $-\sqrt{20}$ je nasprotno število, zato leži zrcalno čez $0$: $-5 < -\sqrt{20} < -4$, približno pri $-4{,}47$. Bližje je celemu številu $-4$.

**Odgovor.** $\sqrt{50}$ leži med $7$ in $8$ (bližje $7$), $-\sqrt{20}$ pa med $-5$ in $-4$ (bližje $-4$).

### Primer 3: urejanje po velikosti

Uredi po velikosti od najmanjšega do največjega: $\sqrt{10}$, $3{,}1$, $\pi$, $\dfrac{22}{7}$.

1. Vsako število zapišemo z decimalkami:
   - $\sqrt{10}$: $3{,}16^2 = 9{,}9856$ in $3{,}17^2 = 10{,}0489$, torej $\sqrt{10} \approx 3{,}16$ (natančneje $3{,}1623\ldots$),
   - $3{,}1$,
   - $\pi \approx 3{,}14159$,
   - $\dfrac{22}{7} = 22 : 7 = 3{,}142857\ldots$
2. Primerjamo po decimalkah: $3{,}1 < 3{,}14159 < 3{,}142857 < 3{,}1623$.
3. **Odgovor.** $3{,}1 < \pi < \dfrac{22}{7} < \sqrt{10}$.
4. Opaziš lahko, da je $\dfrac{22}{7}$ le dober približek za $\pi$, ni pa enak $\pi$. Ulomek je racionalno število, $\pi$ pa je iracionalno.

## Pogoste napake

- **»Vsak koren je iracionalen.«** Ni res: $\sqrt{16} = 4$ in $\sqrt{\dfrac{1}{4}} = \dfrac{1}{2}$ sta racionalni. Iracionalen je koren, ki ni enak nobenemu ulomku, na primer $\sqrt{2}$.
- **»Dolgo decimalno število je iracionalno.«** Ne. Število $0{,}125$ je racionalno ($\dfrac{1}{8}$). Tudi $0{,}333\ldots$ je racionalno, saj se števka ponavlja. Iracionalno je le število, ki je neskončno **in** neperiodično.
- **$\pi = 3{,}14$ ali $\pi = \dfrac{22}{7}$.** To sta samo približka. Pravilno je $\pi \approx 3{,}14$.
- **$\sqrt{2} = 1{,}41$.** To je zaokrožen približek. Natančno sta enaki le vrednosti, ki ju zapišemo z $\sqrt{2}$.
- **Napačna lega negativnih korenov.** Število $-\sqrt{5}$ je levo od $0$ (približno pri $-2{,}24$), ne desno.
- **Mešanje korena in kvadrata.** $\sqrt{9} = 3$, ne $81$ in ne $4{,}5$.

## Povzetek

- Racionalna števila ($\mathbb{Q}$) so tista, ki jih lahko zapišemo kot ulomek. Njihov decimalni zapis je končen ali neskončen periodičen.
- Iracionalna števila nimajo zapisa v obliki ulomka. Njihov decimalni zapis je neskončen in neperiodičen. Primeri: $\sqrt{2}$, $\sqrt{3}$, $\pi$.
- $\sqrt{n}$ za naravno število $n$ je naravno število, če je $n$ kvadrat naravnega števila, sicer je iracionalno.
- Racionalna in iracionalna števila skupaj so realna števila ($\mathbb{R}$). Vsakemu ustreza natanko ena točka na številski premici in obratno.
- Položaj korena določimo z bližnjima kvadratoma. Iracionalna števila zapisujemo z znakom $\approx$.

## Drugače: Na sliki

Predstavljaj si številsko premico in pod njo povečevalno steklo.

- Na običajni premici vidiš celi števili $1$ in $2$. Število $\sqrt{2}$ leži nekje med njima.
- Če povečaš razdelek med $1$ in $2$ na deset delov, vidiš $1{,}1$; $1{,}2$; …; $1{,}4$; $1{,}5$. Število $\sqrt{2}$ je med $1{,}4$ in $1{,}5$.
- Če povečaš še razdelek med $1{,}4$ in $1{,}5$, vidiš, da je $\sqrt{2}$ med $1{,}41$ in $1{,}42$.
- Tako lahko nadaljuješ v nedogled. Vsako povečavo dobiš eno števko več, a točka nikoli ne pade natanko na eno od decimalnih oznak.

Točka za $\sqrt{2}$ torej na premici **obstaja**, a je ne moremo zapisati z nobenim končnim decimalnim številom ali ulomkom. Prav to pomeni, da je iracionalno število.

## Drugače: Iz vsakdanjega življenja

**Kalkulator.** Ko na kalkulatorju natipkaš $\sqrt{2}$, dobiš na primer $1{,}414213562$. Zaslon ima le omejeno število mest, zato pokaže **približek**. Če števec pomnožiš sam s seboj, ne dobiš natanko $2$, ampak število, ki je zelo blizu $2$.

**Tlakovanje.** Predstavljaj si kvadratno ploščo s ploščino $2\,\text{m}^2$. Njena stranica je $\sqrt{2}\,\text{m}$. Če jo hočeš izmeriti z metrom, boš odčital približno $1{,}41\,\text{m}$ ali s finejšim merilom $1{,}414\,\text{m}$. Natančne mere pa ne dobiš nikoli, ker je število iracionalno. V praksi to ni težava: obrtniku zadostuje na milimeter natančen približek.

**Krog.** Pri koles z obsegom $o = 2\pi r$ vedno računamo s približkom števila $\pi$. Za večino nalog zadostuje $3{,}14$. Izračun je tako le približek, ne natančna vrednost.

## Drugače: Korak za korakom s številkami

Kako najdemo decimalni približek za $\sqrt{2}$ samo s kvadriranjem? Iščemo število, katerega kvadrat je blizu $2$.

| Poskus | Kvadrat | Primerjava z 2 |
|---|---|---|
| $1^2$ | $1$ | premalo |
| $2^2$ | $4$ | preveč |
| $1{,}4^2$ | $1{,}96$ | premalo |
| $1{,}5^2$ | $2{,}25$ | preveč |
| $1{,}41^2$ | $1{,}9881$ | premalo |
| $1{,}42^2$ | $2{,}0164$ | preveč |
| $1{,}414^2$ | $1{,}999396$ | premalo |
| $1{,}415^2$ | $2{,}002225$ | preveč |

Iz tabele sledi $1{,}414 < \sqrt{2} < 1{,}415$.

Postopek je vedno enak:

1. Poišči dve zaporedni celi števili, med katerima leži rezultat.
2. Preizkusi desetinke in poišči par, kjer kvadrat preskoči iskano število.
3. Isto naredi za stotinke, tisočinke in tako naprej.
4. Ustavi se, ko je približek dovolj natančen.

Ta postopek se nikoli ne konča z natančnim kvadratom $2$. To je še en pokazatelj, da je $\sqrt{2}$ iracionalno.

## Drugače: Bolj natančno

**Zakaj $\sqrt{2}$ ni racionalno število?** Dokažemo s protislovjem.

Recimo, da je $\sqrt{2}$ racionalno. Potem ga lahko zapišemo kot **okrajšan** ulomek $\sqrt{2} = \dfrac{m}{n}$, kjer $m$ in $n$ nimata skupnega delitelja razen $1$.

1. Obe strani kvadriramo: $2 = \dfrac{m^2}{n^2}$, torej $m^2 = 2n^2$.
2. Zato je $m^2$ sodo število. Kvadrat lihega števila je liho, zato mora biti sodo tudi $m$. Zapišemo $m = 2k$.
3. Vstavimo: $(2k)^2 = 2n^2$, torej $4k^2 = 2n^2$, in po deljenju z $2$ dobimo $n^2 = 2k^2$.
4. Zato je $n^2$ sodo, torej je sodo tudi $n$.
5. Sedaj sta $m$ in $n$ oba soda, torej imata skupni delitelj $2$. To je v nasprotju s predpostavko, da je ulomek okrajšan.

Predpostavka je napačna, torej $\sqrt{2}$ **ni** racionalno število. Je iracionalno.

## Preveri se

? Katero od naslednjih števil je iracionalno?
- $\sqrt{25}$
- $\sqrt{0{,}49}$
+ $\sqrt{13}$
> $\sqrt{25} = 5$ in $\sqrt{0{,}49} = 0{,}7$ sta racionalni. Število $13$ ni kvadrat naravnega števila, zato je $\sqrt{13}$ iracionalno.

? Med katerima zaporednima celima številoma leži $\sqrt{70}$?
- med $7$ in $8$
+ med $8$ in $9$
- med $34$ in $36$
- med $35$ in $36$
> $8^2 = 64$ in $9^2 = 81$, torej $64 < 70 < 81$ in zato $8 < \sqrt{70} < 9$. Pri drugih odgovorih si pomešal koren s kvadriranjem ali z deljenjem z $2$.

? Katera trditev je pravilna?
- Število $\pi$ je enako $\dfrac{22}{7}$.
- Vsako realno število je racionalno.
+ Vsako racionalno število je tudi realno.
- Število z neskončnim decimalnim zapisom je vedno iracionalno.
> Racionalna števila so del realnih števil, zato je vsako racionalno število tudi realno. $\dfrac{22}{7}$ je le približek za $\pi$, iracionalna števila pa so realna, a niso racionalna. Tudi $0{,}333\ldots$ ima neskončen zapis, a je racionalno, ker je periodičen.
