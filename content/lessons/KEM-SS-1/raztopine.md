---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Pri kemiji so snovi pogosto raztopljene v vodi: fiziološka raztopina, kis, razkužilo, sok, krvna plazma. Iz prejšnjih ur že znaš izračunati množino snovi ($n = \dfrac{m}{M}$) in veš, da je molska masa $M$ v $\text{g/mol}$.

Pri raztopinah pa nas običajno ne zanima samo, *koliko* snovi imamo, ampak *kako močna* je raztopina, torej koliko topljenca je v določeni količini raztopine. Za to uporabljamo **masni delež** in **množinsko koncentracijo**. Kadar iz bolj koncentrirane raztopine (z več topljenca v isti prostornini) pripravimo bolj razredčeno, temu postopku rečemo **redčenje**. To počnejo v laboratoriju, v lekarni in doma, ko razredčiš sirup.

## Razlaga

**1. Osnovni pojmi.**

- **Topljenec** je snov, ki se raztaplja (npr. sol).
- **Topilo** je snov, v kateri se raztaplja (npr. voda).
- **Raztopina** je zmes topljenca in topila.

Masa raztopine je vsota mas topljenca in topila:

$$m(\text{raztopina}) = m(\text{topljenec}) + m(\text{topilo})$$

**2. Masni delež.** Pove, kolikšen del mase raztopine je topljenec:

$$w = \frac{m(\text{topljenec})}{m(\text{raztopina})}$$

Masni delež nima enote. Lahko ga zapišemo kot decimalno število ($0{,}10$) ali v odstotkih ($10\,\%$). Za pretvorbo v odstotke ga pomnožimo s $100$.

:::premisli
V $100\,\text{g}$ vode raztopiš $10\,\text{g}$ soli. Ali je raztopina $10$-odstotna?
---
Ne. Masa raztopine je $110\,\text{g}$, zato je $w = \dfrac{10\,\text{g}}{110\,\text{g}} \approx 0{,}091 = 9{,}1\,\%$. Deliš z maso cele raztopine, ne z maso vode.
:::

**3. Množinska koncentracija.** Pove, koliko molov topljenca je v enem litru *raztopine*:

$$c = \frac{n}{V}$$

Enota je $\text{mol/L}$. Prostornina $V$ je prostornina **cele raztopine** in mora biti v litrih. Ker je $n = \dfrac{m}{M}$, lahko zapišemo tudi:

$$c = \frac{m}{M \cdot V}$$

**4. Redčenje.** Ko raztopini dodamo vodo, se količina topljenca ne spremeni, spremeni se le prostornina raztopine. Množina topljenca pred redčenjem in po njem je enaka:

$$n_1 = n_2 \quad\Rightarrow\quad c_1 \cdot V_1 = c_2 \cdot V_2$$

Oznaka $1$ pomeni začetno (bolj koncentrirano) raztopino, oznaka $2$ končno (bolj razredčeno). Enota za $V$ je na obeh straneh enaka, zato lahko tu uporabiš tudi $\text{mL}$, če sta obe prostornini v istih enotah.

:::premisli
$100\,\text{mL}$ raztopine dopolniš z vodo do $400\,\text{mL}$. Kaj se zgodi z množino topljenca in kaj s koncentracijo?
---
Množina topljenca ostane enaka, ker smo dodali samo vodo. Koncentracija se zmanjša na četrtino, ker je prostornina štirikrat večja: $c_2 = c_1 \cdot \dfrac{100}{400}$.
:::

**5. Simulacija.** V simulaciji spodaj (»Koncentracija raztopine«) nastavi množino topljenca $0{,}050\,\text{mol}$ in prostornino $250\,\text{mL}$. Napovej koncentracijo, nato preveri ($0{,}20\,\text{mol/L}$). Potem prostornino povečaj na $500\,\text{mL}$ in opazuj: množina ostane enaka, koncentracija se prepolovi, barva raztopine pa postane svetlejša.

## Rešeni primeri

### Primer 1: masni delež

V $180\,\text{g}$ vode raztopimo $20\,\text{g}$ kuhinjske soli. Kolikšen je masni delež soli v raztopini?

1. Najprej izračunamo maso raztopine, ker v imenovalcu ni mase vode, ampak mase *cele raztopine*: $m(\text{raztopina}) = 20\,\text{g} + 180\,\text{g} = 200\,\text{g}$.
2. Vstavimo v enačbo: $w = \dfrac{20\,\text{g}}{200\,\text{g}} = 0{,}10$.
3. V odstotkih: $w = 10\,\%$.
4. Preverimo smiselnost: masni delež mora biti med $0$ in $1$. ✓

### Primer 2: množinska koncentracija

V merilni bučki raztopimo $11{,}7\,\text{g}$ NaCl in dopolnimo z vodo do $500\,\text{mL}$ raztopine. Kolikšna je množinska koncentracija?

1. Molska masa: $M(\mathrm{NaCl}) = 23 + 35{,}5 = 58{,}5\,\text{g/mol}$.
2. Množina: $n = \dfrac{11{,}7\,\text{g}}{58{,}5\,\text{g/mol}} = 0{,}20\,\text{mol}$.
3. Prostornino pretvorimo v litre, ker je koncentracija v $\text{mol/L}$: $V = 500\,\text{mL} = 0{,}500\,\text{L}$.
4. Koncentracija: $c = \dfrac{0{,}20\,\text{mol}}{0{,}500\,\text{L}} = 0{,}40\,\text{mol/L}$.
5. Preverimo: v $1\,\text{L}$ bi bilo $0{,}40\,\text{mol}$ NaCl, v pol litra pa polovico, $0{,}20\,\text{mol}$. ✓

### Primer 3: redčenje

Na voljo imamo raztopino s koncentracijo $2{,}0\,\text{mol/L}$. Pripraviti moramo $250\,\text{mL}$ raztopine s koncentracijo $0{,}50\,\text{mol/L}$. Koliko začetne raztopine potrebujemo?

1. Zapišemo znano: $c_1 = 2{,}0\,\text{mol/L}$, $c_2 = 0{,}50\,\text{mol/L}$, $V_2 = 250\,\text{mL}$. Iščemo $V_1$.
2. Uporabimo $c_1 V_1 = c_2 V_2$ in izrazimo: $V_1 = \dfrac{c_2 \cdot V_2}{c_1}$.
3. Vstavimo: $V_1 = \dfrac{0{,}50\,\text{mol/L} \cdot 250\,\text{mL}}{2{,}0\,\text{mol/L}} = 62{,}5\,\text{mL}$.
4. **Postopek.** Odmerimo $62{,}5\,\text{mL}$ začetne raztopine v bučko in dolijemo vodo do oznake $250\,\text{mL}$. Ne dodamo $250\,\text{mL}$ vode, ampak dopolnimo do skupne prostornine $250\,\text{mL}$.
5. Preverimo: začetna raztopina je $4$-krat močnejša kot končna ($2{,}0 : 0{,}50 = 4$), zato moramo vzeti $\dfrac{1}{4}$ končne prostornine: $\dfrac{250}{4} = 62{,}5\,\text{mL}$. ✓

## Pogoste napake

- **Masa vode namesto mase raztopine.** Pri masnem deležu v imenovalec sodi masa topljenca *in* topila skupaj. V primeru 1 bi z $\dfrac{20}{180}$ dobili napačen rezultat.
- **Mililitri namesto litrov.** Pri $c = \dfrac{n}{V}$ mora biti $V$ v litrih. Če vstaviš $500$ namesto $0{,}500$, je koncentracija tisočkrat premajhna.
- **Prostornina topila namesto prostornine raztopine.** Koncentracija se nanaša na prostornino cele raztopine. Zato raztopino v bučki dopolnimo do oznake, ne dodamo kar določene količine vode.
- **Seštevanje pri redčenju.** Pri redčenju z vodo ne smeš koncentracij ali prostornin enostavno seštevati. Velja $c_1 V_1 = c_2 V_2$.
- **Pozabljen odstotek.** Masni delež $0{,}10$ in $10\,\%$ sta isto. Napaka je, če v račun vstaviš $10$ namesto $0{,}10$.
- **Napačna molska masa.** Pred računom množine preveri, da si pravilno sešteval relativne atomske mase iz periodnega sistema.

## Povzetek

- Raztopina = topljenec + topilo; $m(\text{raztopina}) = m(\text{topljenec}) + m(\text{topilo})$.
- Masni delež: $w = \dfrac{m(\text{topljenec})}{m(\text{raztopina})}$, brez enote, v odstotkih pomnožimo s $100$.
- Množinska koncentracija: $c = \dfrac{n}{V}$ v $\text{mol/L}$, pri čemer je $V$ prostornina raztopine v litrih.
- Pri redčenju se množina topljenca ne spremeni: $c_1 V_1 = c_2 V_2$.
- Pri nalogah najprej izpiši znane podatke, preveri enote in šele nato računaj.

## Drugače: Na sliki

Predstavljaj si bučko z vodo, v kateri plavajo modre pikice. Vsaka pikica je delec topljenca.

- Če v isto prostornino dodaš več pikic, je raztopina **močnejša** (koncentracija se poveča).
- Če pikice pustiš in dodaš vodo, se razporedijo po večji prostornini. Je jih enako veliko kot prej, vendar so bolj razredčene (koncentracija se zmanjša).

V simulaciji zgoraj lahko to opaziš: spreminjaj količino topljenca in prostornino raztopine ter opazuj prikazano koncentracijo. Ko prostornino podvojiš, se koncentracija prepolovi. Ko podvojiš količino topljenca pri isti prostornini, se podvoji tudi koncentracija.

## Drugače: Iz vsakdanjega življenja

Razmisli o sadnem sirupu. Na embalaži piše: *1 del sirupa in 4 deli vode*.

- Skupaj dobiš $1 + 4 = 5$ delov pijače.
- Sirup, ki je bil prej v steklenici sam, je zdaj le še en del od petih. Koncentracija sirupa v pijači je torej petkrat manjša kot v steklenici.
- Če bi vzel samo $1$ del sirupa in $2$ dela vode, bi bila pijača slajša, ker je sirup en del od treh.

Količina sladkorja iz sirupa se pri redčenju ni spremenila, le porazdelila se je po večji prostornini. Enako velja v laboratoriju: $n_1 = n_2$.

## Drugače: Korak za korakom s številkami

Primer: pripraviti moramo $250\,\text{mL}$ raztopine NaOH s koncentracijo $0{,}10\,\text{mol/L}$. Koliko trdnega NaOH moramo natehtati?

| Korak | Kaj naredimo | Račun |
|---|---|---|
| 1 | Prostornina v litre | $250\,\text{mL} = 0{,}250\,\text{L}$ |
| 2 | Množina iz koncentracije | $n = c \cdot V = 0{,}10\,\text{mol/L} \cdot 0{,}250\,\text{L} = 0{,}025\,\text{mol}$ |
| 3 | Molska masa | $M(\mathrm{NaOH}) = 23 + 16 + 1 = 40\,\text{g/mol}$ |
| 4 | Masa iz množine | $m = n \cdot M = 0{,}025\,\text{mol} \cdot 40\,\text{g/mol} = 1{,}0\,\text{g}$ |
| 5 | Preverjanje | $\dfrac{1{,}0\,\text{g}}{40\,\text{g/mol} \cdot 0{,}250\,\text{L}} = 0{,}10\,\text{mol/L}$ ✓ |

Natehtamo torej $1{,}0\,\text{g}$ NaOH, ga raztopimo in dopolnimo z vodo do $250\,\text{mL}$.

Še primer za masni delež: kolikšna je masa soli v $250\,\text{g}$ raztopine z masnim deležem $5\,\%$?

$$m(\text{topljenec}) = w \cdot m(\text{raztopina}) = 0{,}05 \cdot 250\,\text{g} = 12{,}5\,\text{g}$$

## Drugače: Bolj natančno

**Izpeljava enačbe za redčenje.** Množina topljenca v raztopini je $n = c \cdot V$. Pred redčenjem velja $n_1 = c_1 V_1$. Pri redčenju dodamo samo topilo (vodo), topljenca ne dodamo in ga tudi ne odvzamemo, zato je po redčenju množina topljenca enaka: $n_2 = n_1$. Po redčenju je $n_2 = c_2 V_2$. Iz $n_1 = n_2$ sledi:

$$c_1 V_1 = c_2 V_2$$

**Prostornine se ne seštevajo vedno natančno.** Pri redčenju razredčenih vodnih raztopin je $V_2 \approx V_1 + V(\text{dodana voda})$. Pri močno koncentriranih raztopinah ali mešanju različnih tekočin ta približek ni dober. Zato v laboratoriju končno prostornino vedno nastavimo z oznako na merilni bučki, ne z računanjem.

**Masni delež in masa.** Masa je vedno aditivna (seštevajo se mase), zato pri masnem deležu velja $m(\text{raztopina}) = m(\text{topljenec}) + m(\text{topilo})$. Pri prostornini temu ni vedno tako, zato so naloge z masnim deležem in koncentracijo različne vrste računov.

## Preveri se

? V $120\,\text{g}$ vode raztopimo $30\,\text{g}$ soli. Kolikšen je masni delež soli v raztopini?
- $25\,\%$
+ $20\,\%$
- $30\,\%$
> Masa raztopine je $30\,\text{g} + 120\,\text{g} = 150\,\text{g}$, zato je $w = \dfrac{30}{150} = 0{,}20 = 20\,\%$. Odgovor $25\,\%$ dobiš, če deliš z maso vode ($\dfrac{30}{120}$).

? V $250\,\text{mL}$ raztopine je raztopljeno $0{,}5\,\text{mol}$ topljenca. Kolikšna je množinska koncentracija?
- $125\,\text{mol/L}$
- $0{,}002\,\text{mol/L}$
+ $2\,\text{mol/L}$
> Prostornino moramo pretvoriti v litre: $250\,\text{mL} = 0{,}25\,\text{L}$. Nato je $c = \dfrac{0{,}5\,\text{mol}}{0{,}25\,\text{L}} = 2\,\text{mol/L}$. Odgovora $125$ in $0{,}002$ sta posledica napačnega množenja ali deljenja z $250$ namesto z $0{,}25$.

? $100\,\text{mL}$ raztopine s koncentracijo $1{,}0\,\text{mol/L}$ razredčimo z vodo do skupne prostornine $500\,\text{mL}$. Kolikšna je nova koncentracija?
- $5{,}0\,\text{mol/L}$
- $0{,}17\,\text{mol/L}$
+ $0{,}20\,\text{mol/L}$
> Iz $c_1 V_1 = c_2 V_2$ sledi $c_2 = \dfrac{1{,}0 \cdot 100}{500} = 0{,}20\,\text{mol/L}$. Odgovor $0{,}17\,\text{mol/L}$ bi dobil, če bi $500\,\text{mL}$ vode *dodal* ($V_2 = 600\,\text{mL}$), naloga pa pravi, da je končna prostornina $500\,\text{mL}$.
