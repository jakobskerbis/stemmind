---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Že znaš uravnotežiti kemijsko enačbo in izračunati množino snovi iz mase: $n = \dfrac{m}{M}$. Znaš tudi, da koeficienti v enačbi povedo, v kakšnem razmerju delci reagirajo.

Stehiometrija združi vse troje in odgovori na praktična vprašanja:

- Koliko produkta nastane iz dane količine reaktanta?
- Koliko reaktanta moram odtehtati, da dobim želeno količino produkta?
- Kaj, če reaktantov ne vzamem v pravem razmerju? Kateri se porabi prej in koliko drugega ostane?

Brez teh izračunov ne gre v laboratoriju, v farmaciji ali v industriji gnojil. Vedno je treba vedeti, koliko česa odmeriti, da ne zavržemo dragih surovin.

V simulaciji spodaj lahko sam spreminjaš količine reaktantov in opazuješ, koliko produkta nastane in kaj ostane.

## Razlaga

**1. Kaj pove enačba.** Koeficienti v uravnoteženi enačbi povedo razmerje **množin** (ne mas!). Za enačbo

$$2\,\mathrm{H_2} + \mathrm{O_2} \rightarrow 2\,\mathrm{H_2O}$$

velja: $2\,\text{mol}$ vodika reagira z $1\,\text{mol}$ kisika in nastaneta $2\,\text{mol}$ vode. Razmerje množin je $n(\mathrm{H_2}) : n(\mathrm{O_2}) : n(\mathrm{H_2O}) = 2 : 1 : 2$.

**2. Splošno pravilo.** Za snov A (znana) in snov B (iskana) z koeficientoma $\nu(\mathrm{A})$ in $\nu(\mathrm{B})$:

$$\frac{n(\mathrm{B})}{n(\mathrm{A})} = \frac{\nu(\mathrm{B})}{\nu(\mathrm{A})}$$

**3. Postopek računanja iz enačbe** (vedno enak):

1. Zapiši **uravnoteženo** enačbo.
2. Podano maso pretvori v množino: $n = m / M$.
3. Z razmerjem koeficientov izračunaj množino iskane snovi.
4. Množino pretvori v maso: $m = n \cdot M$.

Maso ene snovi torej nikoli ne pretvarjaš neposredno v maso druge. Vmes je vedno množina.

**4. Prebitni reaktant in omejitveni reaktant.** Pogosto reaktantov ne vzamemo v točno stehiometrijskem razmerju. Tisti, ki se porabi do konca, je **omejitveni reaktant** (omeji, koliko produkta nastane). Tisti, ki ga ostane, je **prebitni reaktant**.

**Kako ugotoviš omejitveni reaktant:** za vsak reaktant izračunaj $\dfrac{n}{\nu}$ (množino, deljeno s koeficientom). Reaktant z **manjšim** količnikom je omejitveni.

**5. Količino produkta vedno računaš iz omejitvenega reaktanta.** Prebitni reaktant ima »preveč«, zato po njem ne moreš računati. Koliko prebitnega reaktanta ostane, dobiš tako, da od začetne množine odšteješ porabljeno.

**Uporabljene relativne atomske mase** (zaokrožene): $\mathrm{H} = 1$, $\mathrm{C} = 12$, $\mathrm{O} = 16$, $\mathrm{Na} = 23$, $\mathrm{Mg} = 24$, $\mathrm{Ca} = 40$, $\mathrm{Cl} = 35{,}5$.

## Rešeni primeri

### Primer 1: masa produkta iz mase reaktanta

Koliko gramov vode nastane pri popolnem zgorevanju $4{,}0\,\text{g}$ vodika?

$$2\,\mathrm{H_2} + \mathrm{O_2} \rightarrow 2\,\mathrm{H_2O}$$

1. Enačba je že uravnotežena. Brez tega razmerja ne bi bilo pravilno.
2. Maso vodika pretvorimo v množino, ker enačba govori o množinah: $M(\mathrm{H_2}) = 2\,\text{g/mol}$, zato $n(\mathrm{H_2}) = \dfrac{4{,}0\,\text{g}}{2\,\text{g/mol}} = 2{,}0\,\text{mol}$.
3. Razmerje koeficientov $\mathrm{H_2} : \mathrm{H_2O} = 2 : 2$, zato je $n(\mathrm{H_2O}) = 2{,}0\,\text{mol}$.
4. Množino pretvorimo v maso, ker nas zanima masa: $M(\mathrm{H_2O}) = 2 \cdot 1 + 16 = 18\,\text{g/mol}$, zato $m(\mathrm{H_2O}) = 2{,}0\,\text{mol} \cdot 18\,\text{g/mol} = 36\,\text{g}$.
5. **Odgovor:** nastane $36\,\text{g}$ vode.

### Primer 2: razmerje ni 1 : 1

Pri segrevanju apnenca razpade kalcijev karbonat:

$$\mathrm{CaCO_3} \rightarrow \mathrm{CaO} + \mathrm{CO_2}$$

Koliko gramov žganega apna ($\mathrm{CaO}$) in koliko gramov $\mathrm{CO_2}$ nastane iz $50\,\text{g}$ $\mathrm{CaCO_3}$?

1. Molska masa reaktanta: $M(\mathrm{CaCO_3}) = 40 + 12 + 3 \cdot 16 = 100\,\text{g/mol}$.
2. Množina: $n(\mathrm{CaCO_3}) = \dfrac{50\,\text{g}}{100\,\text{g/mol}} = 0{,}50\,\text{mol}$.
3. Vsi koeficienti so 1, zato nastane po $0{,}50\,\text{mol}$ vsakega produkta.
4. Mase: $M(\mathrm{CaO}) = 40 + 16 = 56\,\text{g/mol}$, torej $m(\mathrm{CaO}) = 0{,}50 \cdot 56 = 28\,\text{g}$. $M(\mathrm{CO_2}) = 12 + 32 = 44\,\text{g/mol}$, torej $m(\mathrm{CO_2}) = 0{,}50 \cdot 44 = 22\,\text{g}$.
5. **Preverimo z masnim ohranitvenim zakonom:** $28\,\text{g} + 22\,\text{g} = 50\,\text{g}$, kar je enako začetni masi.

### Primer 3 (težji): prebitni reaktant

Zmešamo $12\,\text{g}$ magnezija in $10\,\text{g}$ kisika in magnezij zgori:

$$2\,\mathrm{Mg} + \mathrm{O_2} \rightarrow 2\,\mathrm{MgO}$$

Koliko gramov $\mathrm{MgO}$ nastane in koliko katerega reaktanta ostane?

1. **Množini reaktantov.** $n(\mathrm{Mg}) = \dfrac{12\,\text{g}}{24\,\text{g/mol}} = 0{,}50\,\text{mol}$. $M(\mathrm{O_2}) = 32\,\text{g/mol}$, zato $n(\mathrm{O_2}) = \dfrac{10\,\text{g}}{32\,\text{g/mol}} = 0{,}3125\,\text{mol}$.
2. **Omejitveni reaktant.** Primerjamo $\dfrac{n}{\nu}$: za Mg je $\dfrac{0{,}50}{2} = 0{,}25$, za $\mathrm{O_2}$ je $\dfrac{0{,}3125}{1} = 0{,}3125$. Manjši količnik ima magnezij, zato je **magnezij omejitveni**, kisik pa prebitni.
3. **Produkt iz omejitvenega reaktanta.** $\mathrm{Mg} : \mathrm{MgO} = 2 : 2$, torej $n(\mathrm{MgO}) = 0{,}50\,\text{mol}$. $M(\mathrm{MgO}) = 24 + 16 = 40\,\text{g/mol}$, zato $m(\mathrm{MgO}) = 0{,}50 \cdot 40 = 20\,\text{g}$.
4. **Porabljeni kisik.** $\mathrm{Mg} : \mathrm{O_2} = 2 : 1$, zato se porabi $n(\mathrm{O_2}) = 0{,}25\,\text{mol}$.
5. **Ostanek kisika.** $0{,}3125 - 0{,}25 = 0{,}0625\,\text{mol}$, kar je $m = 0{,}0625 \cdot 32 = 2{,}0\,\text{g}$.
6. **Preverimo:** pred reakcijo $12 + 10 = 22\,\text{g}$, po reakciji $20\,\text{g}$ $\mathrm{MgO}$ in $2\,\text{g}$ $\mathrm{O_2}$, skupaj $22\,\text{g}$.
7. **Odgovor:** nastane $20\,\text{g}$ $\mathrm{MgO}$, ostane $2{,}0\,\text{g}$ kisika.

## Pogoste napake

- **Neuravnotežena enačba.** Če koeficientov ne uskladiš, je razmerje množin napačno in s tem ves račun.
- **Računanje z masami namesto z množinami.** Razmerje $2 : 1$ velja za mole, ne za grame. $2\,\text{g}$ vodika ne reagira z $1\,\text{g}$ kisika.
- **Pozabljeni koeficienti.** Če je razmerje $2 : 1$, ni nujno, da je iskane množine enako kot znane. Vedno pomnoži z $\nu(\mathrm{B}) / \nu(\mathrm{A})$.
- **Omejitveni reaktant iz mase.** Reaktant z manjšo maso ni nujno omejitveni. Primerjaj $n/\nu$.
- **Računanje produkta iz prebitnega reaktanta.** Količino produkta določa omejitveni reaktant.
- **Napačna molska masa.** Pri $\mathrm{O_2}$ je $32\,\text{g/mol}$, ne $16\,\text{g/mol}$. Pri $\mathrm{H_2}$ je $2\,\text{g/mol}$.

## Povzetek

- Koeficienti v enačbi so razmerje **množin** snovi.
- Postopek: uravnotežena enačba, $m \to n$, razmerje koeficientov, $n \to m$.
- Omejitveni reaktant ima najmanjši količnik $n/\nu$ in določa količino produkta.
- Prebitni reaktant se ne porabi do konca. Ostanek je začetna množina minus porabljena.
- Preveri z ohranitvijo mase: masa reaktantov (porabljenih in ostanka) je enaka masi produktov (in ostanka).

## Drugače: Na sliki

Predstavljaj si molekule kot kroglice. Za $2\,\mathrm{Mg} + \mathrm{O_2} \rightarrow 2\,\mathrm{MgO}$ narišeš:

- na levi: 5 atomov Mg in 4 molekule $\mathrm{O_2}$,
- vsaka molekula $\mathrm{O_2}$ »poje« dva atoma Mg in naredi dve enoti MgO.

Z 5 atomi Mg lahko tvorimo samo 2 polna para in en atom ostane brez para. Torej reagirata 4 atomi Mg z 2 molekulama $\mathrm{O_2}$, nastanejo 4 enote MgO, ostane pa 1 atom Mg in 2 molekuli $\mathrm{O_2}$. Magnezij je tu omejitveni, kisik prebitni.

V simulaciji lahko to isto preizkusiš. Spreminjaj število molekul reaktantov in opazuj, kateri se prej porabi, koliko produkta nastane in kaj ostane. Poskusi najti primer, ko ne ostane nič.

## Drugače: Iz vsakdanjega življenja

Sendvič naredimo iz 2 rezin kruha in 1 rezine sira. Receptu rečemo »enačba«:

$$2\,\text{kruh} + 1\,\text{sir} \rightarrow 1\,\text{sendvič}$$

Imaš 7 rezin kruha in 5 rezin sira. Koliko sendvičev lahko narediš?

- Iz kruha: $7 / 2 = 3{,}5$, torej 3 cele sendviče.
- Iz sira: $5 / 1 = 5$ sendvičev.

Manjše število določa rezultat. Kruh je omejitveni »reaktant«, zato naredimo 3 sendviče. Porabimo 6 rezin kruha in 3 rezine sira. Ostane 1 rezina kruha in 2 rezini sira. Sir je torej prebitni »reaktant«.

V kemiji je enako, le da namesto rezin štejemo mole.

## Drugače: Korak za korakom s številkami

Primer: $\mathrm{N_2} + 3\,\mathrm{H_2} \rightarrow 2\,\mathrm{NH_3}$. Imamo $2\,\text{mol}$ $\mathrm{N_2}$ in $3\,\text{mol}$ $\mathrm{H_2}$.

**Korak 1.** Izračunamo $n/\nu$:

| Snov | $n$ (mol) | $\nu$ | $n/\nu$ |
|---|---|---|---|
| $\mathrm{N_2}$ | 2 | 1 | 2 |
| $\mathrm{H_2}$ | 3 | 3 | 1 |

**Korak 2.** Manjši količnik ima $\mathrm{H_2}$, torej je omejitveni.

**Korak 3.** Iz njega izračunamo produkt: $n(\mathrm{NH_3}) = 3 \cdot \dfrac{2}{3} = 2\,\text{mol}$.

**Korak 4.** Porabljeni $\mathrm{N_2}$: $3 \cdot \dfrac{1}{3} = 1\,\text{mol}$. Ostane $2 - 1 = 1\,\text{mol}$ $\mathrm{N_2}$.

**Korak 5.** Končno stanje (preglednica »pred in po«):

| | $\mathrm{N_2}$ | $\mathrm{H_2}$ | $\mathrm{NH_3}$ |
|---|---|---|---|
| pred | 2 | 3 | 0 |
| sprememba | $-1$ | $-3$ | $+2$ |
| po | 1 | 0 | 2 |

## Drugače: Bolj natančno

Zakaj lahko računamo z razmerjem koeficientov? Ker je množina snovi sorazmerna s številom delcev: $N = n \cdot N_\mathrm{A}$. Enačba pove, da na vsakih $\nu(\mathrm{A})$ delcev snovi A nastane $\nu(\mathrm{B})$ delcev snovi B. Če se razmerje delcev ohranja, se ohranja tudi razmerje množin:

$$\frac{N(\mathrm{B})}{N(\mathrm{A})} = \frac{\nu(\mathrm{B})}{\nu(\mathrm{A})} \;\Rightarrow\; \frac{n(\mathrm{B})}{n(\mathrm{A})} = \frac{\nu(\mathrm{B})}{\nu(\mathrm{A})}$$

Če vse združimo v eno formulo za maso:

$$m(\mathrm{B}) = \frac{m(\mathrm{A})}{M(\mathrm{A})} \cdot \frac{\nu(\mathrm{B})}{\nu(\mathrm{A})} \cdot M(\mathrm{B})$$

Preizkus na primeru 1: $m(\mathrm{H_2O}) = \dfrac{4{,}0}{2} \cdot \dfrac{2}{2} \cdot 18 = 36\,\text{g}$, kar se ujema.

Ker se atomi pri reakciji ne ustvarjajo ne uničujejo, je vsota mas vseh snovi pred reakcijo (z ostankom vred) enaka vsoti po njej. To je zakon o ohranitvi mase, s katerim preverjamo račune.

## Preveri se

? Pri reakciji $2\,\mathrm{H_2} + \mathrm{O_2} \rightarrow 2\,\mathrm{H_2O}$ popolnoma reagira $3\,\text{mol}$ vodika (kisika je dovolj). Koliko molov vode nastane?
- $1{,}5\,\text{mol}$
+ $3\,\text{mol}$
- $6\,\text{mol}$
- $2\,\text{mol}$
> Razmerje $\mathrm{H_2} : \mathrm{H_2O}$ je $2 : 2$, torej $1 : 1$, zato nastane enako število molov vode, $3\,\text{mol}$. Odgovor $1{,}5\,\text{mol}$ je razmerje z $\mathrm{O_2}$, ne z vodo.

? Za reakcijo $2\,\mathrm{Na} + \mathrm{Cl_2} \rightarrow 2\,\mathrm{NaCl}$ imamo $4\,\text{mol}$ natrija in $3\,\text{mol}$ klora. Kateri je omejitveni reaktant in koliko prebitnega ostane?
- Cl$_2$; ostane $1\,\text{mol}$ Na
+ Na; ostane $1\,\text{mol}$ Cl$_2$
- Na; ostane $2\,\text{mol}$ Cl$_2$
> $n/\nu$: za Na $4/2 = 2$, za $\mathrm{Cl_2}$ $3/1 = 3$. Manjši količnik ima Na, ki je omejitveni. Porabi se $2\,\text{mol}$ $\mathrm{Cl_2}$, ostane $3 - 2 = 1\,\text{mol}$.

? Kalcijev karbonat razpade po enačbi $\mathrm{CaCO_3} \rightarrow \mathrm{CaO} + \mathrm{CO_2}$. Koliko gramov $\mathrm{CaO}$ nastane iz $200\,\text{g}$ $\mathrm{CaCO_3}$? ($M(\mathrm{CaCO_3}) = 100\,\text{g/mol}$, $M(\mathrm{CaO}) = 56\,\text{g/mol}$.)
- $200\,\text{g}$
- $56\,\text{g}$
- $88\,\text{g}$
+ $112\,\text{g}$
> $n(\mathrm{CaCO_3}) = 200/100 = 2{,}0\,\text{mol}$, nastane $2{,}0\,\text{mol}$ $\mathrm{CaO}$, torej $m = 2{,}0 \cdot 56 = 112\,\text{g}$. Odgovor $56\,\text{g}$ bi veljal za $1\,\text{mol}$, $88\,\text{g}$ pa je masa nastalega $\mathrm{CO_2}$.
