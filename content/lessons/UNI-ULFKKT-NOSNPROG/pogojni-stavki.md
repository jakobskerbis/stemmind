---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Naredi majhen poskus. Postavi se ob steno, iztegni roko in označi, kako visoko sežeš. Nato poskoči in označi še najvišjo točko. Razlika je višina tvojega skoka, recimo $40\,\mathrm{cm}$.

Na Luni je težni pospešek približno $1{,}62\,\mathrm{m/s^2}$, na Zemlji $9{,}81\,\mathrm{m/s^2}$. Ista odrivna hitrost te tam ponese približno šestkrat višje. Ali bi na Luni preskočil skalo, visoko $2\,\mathrm{m}$?

Račun že znaš napisati v Pythonu. Program pa naj ne izpiše samo števila, ampak **odločitev**: »Preskočiš« ali »Ne preskočiš«. Za to mora program izbrati, katero vrstico izvede. Temu služijo **pogojni stavki**. Brez njih vsak program naredi vedno isto, z njimi se odziva na podatke.

## Razlaga

**1. Poskus v konzoli.** V interaktivno okno Pythona (konzolo, kjer ukaz vtipkaš za `>>>`) vtipkaj nekaj primerjav in zapiši, kaj vrne:

| izraz | rezultat |
|---|---|
| `242.2 > 200` | `True` |
| `181.7 > 200` | `False` |
| `5.7 <= 6` | `True` |
| `"Mars" == "mars"` | `False` |

Opaziš vzorec: vsaka primerjava vrne logično vrednost tipa `bool`, ki je lahko le `True` ali `False`. Primerjalni operatorji so `<`, `>`, `<=`, `>=`, `==` (enako) in `!=` (različno). Pozor: `==` primerja, en sam `=` pa prireja vrednost spremenljivki.

**2. Stavek `if`.** Zdaj napišimo program za skok:

```python
h = float(input("Višina skoka na Zemlji (cm): "))
h_luna = h * 9.81 / 1.62
if h_luna > 200:
    print("Na Luni preskočiš skalo!")
print("Konec.")
```

Poženi ga dvakrat: z vnosom `40` in z vnosom `30`. Pri $40$ dobiš $h_\text{luna} \approx 242{,}2$ in program izpiše obe vrstici. Pri $30$ dobiš $h_\text{luna} \approx 181{,}7$ in izpiše le »Konec.«.

Pravilo, ki ga razbereš: za `if` stoji **pogoj** (izraz, ki da `True` ali `False`) in dvopičje. Vrstice pod njim so **zamaknjene** za štiri presledke. Ta zamaknjeni **blok** se izvede le, če je pogoj `True`. Prva nezamaknjena vrstica ni več del bloka, zato se izvede vedno.

:::premisli
Kaj izpiše program, če vrstico `print("Konec.")` zamakneš za štiri presledke in vneseš `30`?
---
Razen vprašanja za vnos ne izpiše ničesar. Zamaknjena vrstica postane del bloka `if`, pogoj $181{,}7 > 200$ pa je `False`, zato se celoten blok preskoči.
:::

**3. Stavek `else`.** Pri $30$ bi radi slišali tudi slabo novico. Dodamo `else:` (brez pogoja), poravnan z `if`:

```python
if h_luna > 200:
    print("Preskočiš skalo!")
else:
    print("Skala je previsoka.")
```

Zdaj se izvede **natanko eden** od dveh blokov.

**4. Veriga `elif`.** Astronomi svetlost zvezd merijo z **navidezno magnitudo** $m$: manjše število pomeni svetlejši objekt. Do $m = 6$ objekt vidiš s prostim očesom, pod $m = 0$ pa je zelo svetel (Venera ima okoli $-4{,}4$). Treh možnosti z enim `if` in `else` ne zajameš, zato vmes dodamo `elif` (»else if«):

```python
if m < 0:
    print("Zelo svetel")
elif m <= 6:
    print("Viden s prostim očesom")
else:
    print("Potrebuješ daljnogled")
```

Python preverja pogoje od zgoraj navzdol in izvede **prvi** blok, katerega pogoj je `True`. Ostale preskoči, tudi če bi bili resnični. Za Venero sta resnična oba prva pogoja, izpiše pa se le »Zelo svetel«.

:::premisli
Prva dva pogoja zamenjaš: najprej `if m <= 6:`, nato `elif m < 0:`. Kaj izpiše program za Venero ($m = -4{,}4$)? Ali sploh obstaja $m$, pri katerem bi izpisal »Zelo svetel«?
---
»Viden s prostim očesom«. Pogoj $-4{,}4 \le 6$ je resničen in pride prvi, zato se izvede njegov blok, `elif` pa se sploh ne preveri. Tak $m$ ne obstaja: vsak $m < 0$ ujame že prvi pogoj. Pri verigi `elif` gre ožji pogoj pred širšega.
:::

**5. Gnezdenje.** Blok lahko vsebuje nov pogojni stavek. Temu rečemo **gnezdenje**. Opazovanje neba je smiselno le ponoči, in še to le, če ni preveč oblačno:

```python
if je_noc:
    if oblacnost < 30:
        print("Opazuj!")
    else:
        print("Preveč oblačno.")
else:
    print("Počakaj na noč.")
```

Kot drevo:

```
je_noc?
├─ False → "Počakaj na noč."
└─ True → oblacnost < 30?
          ├─ True  → "Opazuj!"
          └─ False → "Preveč oblačno."
```

Notranji `if` je zamaknjen za štiri presledke, ker je znotraj zunanjega bloka, njegov blok pa za osem. Zamik pove, kateremu `if` pripada kateri `else`. Če potrebuješ le en izid »Opazuj!«, lahko pogoja združiš z `and` (oba morata biti `True`): `if je_noc and oblacnost < 30:`.

## Rešeni primeri

### Primer 1 (lažji): ali Uran vidimo?

Uran ima navidezno magnitudo $m = 5{,}7$. Napiši program, ki za dano magnitudo izpiše »Vidno« ali »Nevidno« s prostim očesom (meja je $m \le 6$), in ugotovi izpis za Uran.

**Podatki:** $m = 5{,}7$, meja vidnosti $m \le 6$
**Iščemo:** program in njegov izpis

:::formula
`if pogoj:` blok1 `else:` blok2 — izvede se natanko eden od blokov
:::

**Rešitev:**

1. Pogoj zapišemo kot primerjavo: `m <= 6`.
2. Program:

```python
m = 5.7
if m <= 6:
    print("Vidno")
else:
    print("Nevidno")
```

3. Python izračuna `5.7 <= 6`, kar je `True`, zato izvede prvi blok.
4. Odgovor: program izpiše »Vidno«; Uran je ob temnem nebu na meji vidnosti.

### Primer 2: razvrščanje objektov

Za Venero ($m = -4{,}4$), Severnico ($m = 2{,}0$) in Neptun ($m = 7{,}8$) ugotovi, kaj izpiše program z verigo `elif` iz razlage (meje $m < 0$, $m \le 6$).

**Podatki:** $m_1 = -4{,}4$, $m_2 = 2{,}0$, $m_3 = 7{,}8$; program iz točke 4 razlage
**Iščemo:** izpis za vsak objekt

:::formula
`if` / `elif` / `else`: izvede se prvi blok z resničnim pogojem, sicer `else`
:::

**Rešitev:**

1. Venera: `-4.4 < 0` je `True`. Izpis »Zelo svetel«, nadaljnjih pogojev Python ne preverja.
2. Severnica: `2.0 < 0` je `False`, zato preveri `2.0 <= 6`, kar je `True`. Izpis »Viden s prostim očesom«.
3. Neptun: `7.8 < 0` je `False` in `7.8 <= 6` je `False`. Ostane `else`: »Potrebuješ daljnogled«.
4. Odgovor: Venera je zelo svetla, Severnico vidiš s prostim očesom, za Neptun potrebuješ daljnogled.

### Primer 3 (težji): start rakete z vnosom

Raketa sme vzleteti le, če je hitrost vetra manjša od $15\,\mathrm{m/s}$. Če veter dovoljuje, mora biti temperatura vsaj $-5\,^\circ\mathrm{C}$, sicer start prestavijo zaradi zmrzali. Program prebere obe vrednosti z `input()`. Kaj izpiše pri vnosih `12` in `-8`?

**Podatki:** meja vetra $15\,\mathrm{m/s}$ (strogo manj), meja temperature $-5\,^\circ\mathrm{C}$ (vsaj), vnos $v = 12$, $T = -8$
**Iščemo:** program in izpis

:::formula
Gnezden `if`: notranji pogoj se preveri le, če je zunanji `True`; `input()` vrne niz, zato `float(...)`
:::

**Rešitev:**

1. `input()` vrne niz. Primerjava `"12" < 15` bi javila napako, zato vrednost pretvorimo s `float()`.
2. Program:

```python
v = float(input("Veter (m/s): "))
T = float(input("Temperatura (°C): "))
if v < 15:
    if T >= -5:
        print("Start!")
    else:
        print("Prestavljeno: zmrzal.")
else:
    print("Prestavljeno: veter.")
```

3. Zunanji pogoj: `12.0 < 15` je `True`, zato gremo v zunanji blok.
4. Notranji pogoj: `-8.0 >= -5` je `False`, ker je $-8$ manjše od $-5$. Izvede se notranji `else`.
5. Odgovor: program izpiše »Prestavljeno: zmrzal.«.

### Primer 4 – zdaj ti: skok na Luni

Program ima tri izide: nad $300\,\mathrm{cm}$ »Preskočiš lunarni modul«, nad $200\,\mathrm{cm}$ »Preskočiš skalo«, sicer »Ostaneš na tleh«. Kaj izpiše za skok $h = 45\,\mathrm{cm}$ na Zemlji?

**Podatki:** $h = 45\,\mathrm{cm}$, $h_\text{luna} = h \cdot 9{,}81 / 1{,}62$, meji $300\,\mathrm{cm}$ in $200\,\mathrm{cm}$
**Iščemo:** izpis programa

:::formula
`if h_luna > 300:` … `elif h_luna > 200:` … `else:` …
:::

**Rešitev:**

1. $h_\text{luna} = 45 \cdot 9{,}81 / 1{,}62 = 272{,}5\,\mathrm{cm}$.
2. Prvi pogoj: $272{,}5 > 300$ je `False`, zato Python preveri `elif`.
3. Preveri drugi pogoj sam in povej izpis.

:::premisli
Kaj program izpiše?
---
»Preskočiš skalo«. Pogoj $272{,}5 > 200$ je `True`, zato se izvede blok `elif`, `else` pa se preskoči.
:::

## Pogoste napake

- **`=` namesto `==`.** Kdor napiše `if m = 6:`, misli, da primerja. En sam `=` pomeni prirejanje, ki v pogoju ni dovoljeno, zato Python javi `SyntaxError`. Za primerjavo uporabi `==`.
- **Manjkajoče dvopičje ali napačen zamik.** Brez `:` za pogojem je napaka v skladnji. Nezamaknjena vrstica pa ni del bloka in se izvede vedno, tudi ko je pogoj `False`. Vsaka vrstica bloka mora imeti enak zamik.
- **Širši pogoj pred ožjim.** Pri `if m <= 6:` pred `elif m < 0:` se drugi blok nikoli ne izvede, ker vsak $m < 0$ izpolni že prvi pogoj. V verigi `elif` gre ožji pogoj naprej.
- **Ločeni `if` namesto `elif`.** Trije zaporedni `if` se preverijo vsi, zato lahko izpišejo več vrstic. Če želiš natanko en izid, jih poveži z `elif` in `else`.
- **Primerjava niza s številom.** `input()` vrne niz. `"12" < 15` javi `TypeError`, `"12" == 12` pa tiho vrne `False`. Vnos najprej pretvori z `int()` ali `float()`.

## Povzetek

- Primerjave (`<`, `>`, `<=`, `>=`, `==`, `!=`) vrnejo `True` ali `False`.
- `if pogoj:` in zamaknjen blok: blok se izvede le, ko je pogoj `True`.
- `else:` (brez pogoja) se izvede, ko noben pogoj prej ni bil resničen.
- `elif pogoj:` doda vmesne možnosti; izvede se prvi blok z resničnim pogojem, zato ožji pogoji gredo naprej.
- Gnezdenje: `if` znotraj bloka drugega `if`; zamik pove, kaj čemu pripada. Dva gnezdena pogoja z enim izidom lahko združiš z `and`.
- Vnos iz `input()` pretvori v število, preden ga primerjaš.

## Drugače: Korak za korakom s številkami

Sledimo programu z verigo `elif` za magnitudo vrstico za vrstico. Za vsak vnos zapišemo, kaj se zgodi s pogojema:

| $m$ | `m < 0` | `m <= 6` | izpis |
|---|---|---|---|
| $-4{,}4$ | `True` | se ne preveri | Zelo svetel |
| $0$ | `False` | `True` | Viden s prostim očesom |
| $6$ | `False` | `True` | Viden s prostim očesom |
| $6{,}1$ | `False` | `False` | Potrebuješ daljnogled |

Posebej poglej vnosa $0$ in $6$, ki sta na mejah. Pri $0$ je `0 < 0` neresnično, ker strogi neenačaj meje ne vključuje. Pri $6$ je `6 <= 6` resnično, ker jo `<=` vključuje. Ko pišeš pogoje, vedno preizkusi vrednost na meji in tik nad njo.

## Drugače: Kot zgodba

Predstavljaj si kontrolorja misije pred startom. Pred njim je seznam vprašanj, ki ga bere od vrha navzdol.

Prvo vprašanje: »Ali piha premočan veter?« Če je odgovor da, takoj razglasi preložitev in seznama ne bere naprej. To je `if` z blokom. Če je odgovor ne, preide na naslednjo vrstico: »Ali je premrzlo?« To je `elif`. Če tudi tu dobi ne, pride do zadnje vrstice brez vprašanja: »Start!« To je `else`, ki ujame vse, kar ni ustavilo nobeno vprašanje.

Včasih pa kontrolor pokliče posebno ekipo, ki ima svoj seznam. Na primer, ko je vreme dobro, inženirji preverijo še gorivo: »Je tlak v redu?« Njihov seznam je gnezden v kontrolorjevem. Inženirji začnejo delati le, če jih kontrolor pokliče.

## Preveri se

? Kaj v Pythonu pomenijo znaki `=`, `==` in `!=`?
- `=` primerja, `==` priredi, `!=` primerja različnost
~ Vlogi sta zamenjani. En znak `=` vrednost shrani v spremenljivko, primerja šele dvojni.
+ `=` priredi, `==` primerja enakost, `!=` primerja različnost
- vsi trije primerjajo, le na različne načine
~ `=` ni primerjava. `m = 6` v spremenljivko `m` zapiše $6$ in ne vrne `True` ali `False`.
> `m = 6` shrani vrednost, `m == 6` vpraša, ali je `m` enak $6$, `m != 6` pa, ali je različen.

? Program izpiše »Preskočiš«, če je `h * 9.81 / 1.62 > 300`. Približno kolikšen mora biti skok `h` na Zemlji vsaj?
- približno $300\,\mathrm{cm}$
~ To je meja na Luni. Na Zemlji je skok približno šestkrat nižji.
+ približno $50\,\mathrm{cm}$
- približno $1800\,\mathrm{cm}$
~ Tu si mejo pomnožil s $6$ namesto delil. Na Luni skočiš višje, zato je skok na Zemlji manjši.
- približno $6\,\mathrm{cm}$
~ $6$ je razmerje težnih pospeškov, ne višina skoka. Mejo $300$ deli s tem razmerjem.
> $9{,}81 / 1{,}62 \approx 6$, zato mora biti $h > 300 / 6 = 50\,\mathrm{cm}$ (natančneje $49{,}5\,\mathrm{cm}$).

? V verigi `if m <= 6:` … `elif m < 0:` … se drugi blok nikoli ne izvede. Zakaj?
- Ker `elif` deluje le z `==`.
~ `elif` sprejme poljuben pogoj, tudi `<`.
- Ker Python `elif` preveri le, če je prvi pogoj `True`.
~ Ravno obratno: `elif` se preveri le, ko je prejšnji pogoj `False`.
+ Ker vsak $m < 0$ izpolni že pogoj $m \le 6$, zato se izvede prvi blok in ostali se preskočijo.
> Izvede se le prvi resnični blok. Ožji pogoj $m < 0$ mora stati pred širšim $m \le 6$.

? Program je `if T >= -5:` `print("Start")` `else:` `print("Zmrzal")`. Pri kateri temperaturi izpiše »Zmrzal«?
- $T = -5$
~ `-5 >= -5` je `True`, ker `>=` vključuje mejo. Izpis je »Start«.
- $T = 0$
~ $0$ je večje od $-5$, zato je pogoj `True`.
+ $T = -6$
- $T = 5$
~ $5 \ge -5$ drži. Morda si $-5$ bral kot $5$.
> `else` se izvede, ko je `T >= -5` neresnično, torej pri $T < -5$; od ponujenih je to le $-6$.

? Gnezden stavek `if je_noc:` z notranjim `if oblacnost < 30:` `print("Opazuj!")` (brez `else`) želiš zapisati z enim samim `if`. Kateri pogoj je enakovreden?
- `if je_noc or oblacnost < 30:`
~ Z `or` zadošča en pogoj, zato bi program izpisal »Opazuj!« tudi podnevi ob jasnem nebu.
+ `if je_noc and oblacnost < 30:`
- `if je_noc == oblacnost < 30:`
~ To je veriga primerjav: zahteva, da je `je_noc` enak `oblacnost`, kar nima smisla. Da morata veljati oba pogoja, pove `and`.
> Notranji blok se izvede le, ko sta oba pogoja `True`; prav to pomeni `and`.

:::simboli
h | višina skoka na Zemlji | | cm | vnos v programu
h_\text{luna} | višina skoka na Luni | h_\text{luna} = h \cdot \dfrac{9{,}81}{1{,}62} | cm | približno šestkrat višje kot na Zemlji
m | navidezna magnituda | | – | manjše število pomeni svetlejši objekt
m_1, m_2, m_3 | navidezne magnitude treh objektov | | – | vnosi za verigo elif
v | hitrost vetra | | m/s | meja 15 m/s
T | temperatura | | ^\circ\mathrm{C} | meja $-5\,^\circ\mathrm{C}$
:::
