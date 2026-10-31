---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Sošolec Žan je prepričan: »Računalnik je samo hiter kalkulator. Če napišem `"4" + "2"`, dobim `6`.« Python mu vrne `'42'`.

Žan se ni zatipkal. Računalniku je dal dva kosa besedila, ne dve števili, in `+` je besedili zlepil. Enako se godi v vsaki aplikaciji na telefonu: kar natipkaš v polje »Število kav«, pride v program kot besedilo, iz katerega mora program šele narediti število. Zato vsak program za vsak podatek hrani dvoje: **ime**, pod katerim ga najde, in **tip**, ki pove, kaj z njim sme početi. Na koncu boš Žanu znal natančno pokazati, kje se je zmotil. Primeri so v Pythonu; ideje veljajo tudi v drugih jezikih.

## Razlaga

### Blok 1: ime in vrednost

Spremenljivka je **ime**, ki kaže na neko **vrednost** v pomnilniku. Ustvarimo jo s **prirejanjem**:

```python
starost = 19
```

Beri od desne proti levi: »vrednost `19` shrani pod ime `starost`«. Znak `=` tu ne pomeni enakosti kot v matematiki, ampak ukaz »priredi«. Zato je vrstica `starost = starost + 1` smiselna: vzemi staro vrednost, prištej $1$ in rezultat shrani pod isto ime.

Predstavljaj si nalepko z imenom, prilepljeno na škatlo z vrednostjo:

```
starost  ──►  [ 19 ]
po starost = starost + 1:
starost  ──►  [ 20 ]
```

Ime se začne s črko ali podčrtajem, vsebuje črke, števke in `_`, brez presledkov. Velike in male črke se razlikujejo: `Starost` in `starost` sta dve različni imeni. Dobra imena povedo, kaj hranijo: `cena`, ne `x7`.

*Preveri v eni vrstici:* sta `baterija` in `Baterija` isto ime? (Ne, velike in male črke se razlikujejo.)

### Blok 2: vsaka vrednost ima tip

Vsaka vrednost ima **tip**, ki pove, kaj vrednost je in kaj lahko z njo delamo. Tip izveš s funkcijo `type`. V interaktivni lupini Python (vrstice z `>>>`) vtipkaš izraz in takoj vidiš rezultat:

```python
>>> type(19)
<class 'int'>
>>> type(3.5)
<class 'float'>
>>> type("19")
<class 'str'>
>>> type(True)
<class 'bool'>
```

Štirje osnovni tipi:

| Tip | Kaj hrani | Primeri | Opomba |
|---|---|---|---|
| `int` | cela števila | `19`, `-4`, `0` | poljubno velika |
| `float` | decimalna števila | `3.5`, `-0.25`, `2.0` | decimalna **pika** |
| `str` | nizi (besedilo) | `"19"`, `'Ana'`, `""` | v narekovajih |
| `bool` | logične vrednosti | `True`, `False` | z veliko začetnico |

*Preveri v eni vrstici:* kakšen tip ima `"True"`? (`str`, ker je v narekovajih.)

### Blok 3: števila

Cela števila so tipa `int`, števila z decimalno piko pa tipa `float`. Pri `+`, `-` in `*` dveh celih števil dobiš celo število. Če je v računu vsaj en `float`, je rezultat `float`.

Deljenje z `/` vedno vrne `float`, tudi kadar se deli brez ostanka:

```python
>>> 7 / 2
3.5
>>> 6 / 2
3.0
```

Števila tipa `float` so shranjena v dvojiškem zapisu, zato so nekatera le približna. Zato `0.1 + 0.2` ni točno `0.3`, ampak `0.30000000000000004`. Za šolske račune je to dovolj natančno, decimalnih števil pa ne primerjaj na zadnjo decimalko.

:::premisli
Kakšen tip ima rezultat `4 * 2.5`? In rezultat `8 / 4`? Napovej, preden pogledaš.
---
Oba sta `float`: `4 * 2.5` je `10.0`, ker je en operand `float`, `8 / 4` pa je `2.0`, ker deljenje z `/` vedno vrne `float`.
:::

### Blok 4: nizi

**Niz** (angl. *string*, tip `str`) je zaporedje znakov med narekovaji: `"Ljubljana"`, `'a'`, `"19"`, ali prazen niz `""`. Enojni in dvojni narekovaji pomenijo isto.

Pri nizih ima `+` drug pomen: **stakne** (zlepi) dva niza. Znak `*` z nizom in celim številom niz ponovi:

```python
>>> "Dober " + "dan"
'Dober dan'
>>> "4" + "2"
'42'
>>> "ab" * 3
'ababab'
```

Funkcija `len` vrne dolžino niza: `len("Ana")` je `3`.

*Preveri v eni vrstici:* kaj vrne `"ha" * 2 + "!"`? (`'haha!'`.)

### Blok 5: logične vrednosti

Tip `bool` ima le dve vrednosti: `True` (resnično) in `False` (neresnično). Dobimo jih največkrat iz **primerjav**:

```python
>>> starost = 19
>>> starost >= 18
True
>>> starost == 20
False
```

Dvojni `==` sprašuje »ali sta enaka?«, enojni `=` pa prireja. Logične vrednosti boš potreboval pri pogojnih stavkih in zankah.

*Preveri v eni vrstici:* kaj vrne `len("Ana") == 3`? (`True`.)

### Blok 6: pretvorbe

Tip lahko pretvoriš s funkcijo, ki se imenuje kot ciljni tip:

| Klic | Rezultat | Kaj se zgodi |
|---|---|---|
| `int("42")` | `42` | niz s celim številom v `int` |
| `float("2.5")` | `2.5` | niz z decimalnim številom v `float` |
| `int(3.9)` | `3` | decimalke se **odrežejo** |
| `str(14.0)` | `'14.0'` | število v niz |

Pretvorba deluje le, če ima niz pravo obliko. `int("3.5")` in `float("3,5")` javita napako `ValueError`.

Ko boš podatke bral s tipkovnice, jih Python vedno prebere kot niz, zato jih boš moral pretvoriti v število, preden z njimi računaš.

Tudi v `bool` lahko pretvoriš. Število $0$ in prazen niz `""` postaneta `False`, vse drugo postane `True`.

:::premisli
Kaj vrne `bool("0")`? Zakaj ne `False`?
---
Vrne `True`. Funkcija `bool` pri nizu ne gleda, kaj piše v njem, ampak le, ali je prazen. Niz `"0"` ima en znak, zato ni prazen.
:::

## Rešeni primeri

### Primer 1 (lažji): tipi spremenljivk

Program vsebuje vrstice:

```python
a = 17
b = 2.5
c = "17"
d = a > 10
```

Kakšen tip in kakšno vrednost ima vsaka spremenljivka?

**Podatki:** prirejanja `a = 17`, `b = 2.5`, `c = "17"`, `d = a > 10`
**Iščemo:** tip in vrednost spremenljivk `a`, `b`, `c`, `d`

:::formula
Celo število brez pike je `int`, število s piko `float`, vse v narekovajih `str`, rezultat primerjave pa `bool`.
:::

**Rešitev:**

1. `a = 17`: celo število brez pike, torej `int` z vrednostjo `17`.
2. `b = 2.5`: ima decimalno piko, torej `float` z vrednostjo `2.5`.
3. `c = "17"`: v narekovajih je, torej `str`, niz z znakoma `1` in `7`, ne število.
4. `d = a > 10`: najprej se izračuna primerjava `17 > 10`, ki je resnična, zato `d` dobi `True`, tip `bool`.
5. Odgovor: `a` je `int` (`17`), `b` je `float` (`2.5`), `c` je `str` (`"17"`), `d` je `bool` (`True`).

### Primer 2: račun za kavo

Kava stane $3{,}5$ €, naročimo $4$ kave. Program naj izračuna znesek in ga zapiše v niz `"Skupaj: ... EUR"`.

**Podatki:** cena kave $3{,}5$ € (`cena = 3.5`), število kav $4$ (`kolicina = 4`)
**Iščemo:** vrednost in tip zneska `skupaj` ter besedilo za izpis

:::formula
`skupaj = cena * kolicina`, nato `"Skupaj: " + str(skupaj) + " EUR"` (niz lahko stakneš le z nizom).
:::

**Rešitev:**

1. `skupaj = cena * kolicina` da `3.5 * 4`, kar je `14.0`. Tip je `float`, ker je `cena` decimalno število.
2. Izraz `"Skupaj: " + skupaj` bi javil napako `TypeError`, ker `+` ne zna sešteti niza in števila.
3. Zato število pretvorimo v niz: `str(skupaj)` je `"14.0"`.
4. `"Skupaj: " + "14.0" + " EUR"` je niz `"Skupaj: 14.0 EUR"`.
5. Odgovor: znesek je `14.0` (tip `float`), besedilo pa `"Skupaj: 14.0 EUR"`.

### Primer 3 (težji): podatki iz obrazca

Obrazec za registracijo v aplikaciji na telefonu vrne podatke kot niza: `starost = "23"` in `visina = "1.75"` (v metrih). Izračunaj starost čez $5$ let in višino v celih centimetrih (tip `int`).

**Podatki:** `starost = "23"` (niz), `visina = "1.75"` (niz, v metrih), čez $5$ let, $1\,\mathrm{m} = 100\,\mathrm{cm}$
**Iščemo:** starost čez $5$ let (število) in višino v centimetrih kot `int`

:::formula
`int(niz)` za cela števila, `float(niz)` za decimalna; `int(x)` odreže decimalke števila `x`.
:::

**Rešitev:**

1. `starost + 5` bi javilo `TypeError`, ker je `starost` niz. Najprej pretvorimo: `int(starost)` je `23`.
2. `int(starost) + 5` je `28`.
3. `int(visina)` bi javilo `ValueError`, ker niz `"1.75"` ni celo število. Zato uporabimo `float(visina)`, kar je `1.75`.
4. V centimetre: `float(visina) * 100` je `175.0`, še vedno `float`.
5. `int(175.0)` je `175`, tip `int`.
6. Odgovor: čez $5$ let bo star $28$ let; visok je $175\,\mathrm{cm}$, v programu `int(float(visina) * 100)` z vrednostjo `175`.

### Primer 4: zdaj ti

Pametni termostat pošlje aplikaciji na telefonu temperaturo kot niz `t = "21.5"`. Ogrevanje jo dvigne za $3$ stopinje. Sestavi niz z novo temperaturo in enoto, na primer `"... °C"`.

**Podatki:** `t = "21.5"` (niz), dvig za $3$ stopinje
**Iščemo:** niz z novo temperaturo in enoto `°C`

:::formula
`float(t) + 3`, nato `str(...) + " °C"`.
:::

**Rešitev:**

1. Niz `"21.5"` ima decimalno piko, zato ga pretvorimo s `float(t)` v `21.5`.
2. Nova temperatura je `float(t) + 3`. Izračunaj jo sam, jo pretvori v niz in dodaj enoto, nato preveri:

:::premisli
Kakšna je nova temperatura in kakšen niz dobiš?
---
`float(t) + 3` je `24.5` (tip `float`). `str(24.5) + " °C"` je niz `"24.5 °C"`.
:::

## Pogoste napake

- **Niz in število sta isto.** Na zaslonu sta `"5"` in `5` videti enaka. Toda `"5" + 3` javi `TypeError`, `"5" + "3"` pa je `"53"`, ne `8`. Narekovaji pomenijo besedilo. Preden računaš s podatkom, preveri tip s `type` in ga po potrebi pretvori z `int` ali `float`.
- **Decimalna vejica v kodi.** Iz matematike si navajen $3{,}5$. Python pa `x = 3,5` ne razume kot eno število, ampak kot par dveh števil, `3` in `5`. V kodi vedno piši decimalno piko: `3.5`.
- **`int` zaokroži.** Marsikdo pričakuje, da je `int(3.9)` enako `4`. V resnici `int` decimalke odreže in vrne `3`. Za zaokroževanje obstaja ločena funkcija `round`.
- **Deljenje celih števil da celo število.** Ker je $6 : 2 = 3$, se zdi, da bo rezultat `3`. Python vrne `3.0`, tip `float`, ker `/` vedno vrne decimalno število.
- **`=` je enačba.** Kdor bere `x = x + 1` kot enačbo, reče, da nima rešitve. V programu je to ukaz: izračunaj desno stran in jo shrani v `x`. Za vprašanje »ali sta enaka?« uporabi `==`.

## Povzetek

- Spremenljivka je ime, ki kaže na vrednost; ustvarimo jo s prirejanjem `ime = vrednost` (desna stran se izračuna najprej).
- Osnovni tipi: `int` (cela števila), `float` (decimalna, s piko), `str` (nizi v narekovajih), `bool` (`True`, `False`).
- `/` vedno vrne `float`; `float` je včasih le približen (`0.1 + 0.2`).
- Pri nizih `+` stika, `*` ponavlja; niza in števila ne moreš sešteti.
- Pretvorbe: `int()`, `float()`, `str()`, `bool()`; `int(3.9)` je `3`; `int("3.5")` javi napako.
- `bool` da `False` le za $0$ in prazen niz, za vse drugo `True`.

## Drugače: Na sliki

Pomnilnik si predstavljaj kot polico s škatlami. Na vsaki škatli piše tip, na nalepki ob njej pa ime:

```
ime        tip      vrednost
cena   ──► float  [ 3.5 ]
kolicina ► int    [ 4 ]
napis  ──► str    [ "4" ]
placano ─► bool   [ False ]
```

Operacija pogleda tip škatle. `kolicina + kolicina` seže v dve škatli `int` in sešteje: `8`. `napis + napis` seže v dve škatli `str` in zlepi: `"44"`. `kolicina + napis` ne ve, kaj naj naredi, zato javi napako. Pretvorba `int(napis)` ne spremeni stare škatle, ampak naredi novo škatlo tipa `int` z vrednostjo `4`.

## Drugače: Iz vsakdanjega življenja

Na telefonu imaš v imeniku vpisano številko `040 123 456`. Je to število? Z njo ne računaš: nima smisla seštevati dveh telefonskih številk ali jih deliti z dva. Zato je to v resnici **besedilo**, ki je slučajno sestavljeno iz števk. V programu bi jo shranil kot niz.

Znesek na računu, na primer $14{,}00$ €, pa je **število**: seštevaš ga, množiš, mu prišteješ DDV. Shraniš ga kot `float`.

Vprašanje »Ali je račun plačan?« ima odgovor da ali ne. To je `bool`.

Pravilo: če s podatkom računaš, je število; če ga samo prikazuješ ali primerjaš črko za črko, je niz.

## Drugače: Bolj natančno

**Dinamični tipi.** V Pythonu tip pripada vrednosti, ne imenu. Ista spremenljivka lahko najprej kaže na `int`, nato na `str`: po `x = 5` in `x = "pet"` ima `x` tip `str`. V jezikih s statičnimi tipi (C, Java) tip spremenljivke določiš ob deklaraciji (`int x;`) in se ne spremeni.

**Cela števila.** `int` v Pythonu nima zgornje meje: `2 ** 100` se izračuna točno. V mnogih drugih jezikih ima celo število omejeno število bitov (pogosto $32$ ali $64$) in lahko pride do prekoračitve.

**Plavajoča vejica.** `float` je shranjen kot dvojiško število s $53$ biti mantise (standard IEEE 754). Števila, kot je $0{,}1$, v dvojiškem zapisu niso končna, zato se zaokrožijo. Posledica: `1.15 * 100` je `114.99999999999999`, zato je `int(1.15 * 100)` enako `114`, ne `115`. Kadar potrebuješ celo število iz decimalnega rezultata, uporabi `round` namesto `int`.

**Logične vrednosti so števila.** `bool` je podtip `int`: `True` se obnaša kot $1$, `False` kot $0$. Zato je `True + True` enako `2`.

## Preveri se

? Kakšen tip ima vrednost `3.0`?
- `int`
~ Vrednost je res cela, a tip določa zapis: decimalna pika pomeni `float`.
+ `float`
- `str`
~ Niz bi moral biti v narekovajih, na primer `"3.0"`.
> Vsako število, zapisano z decimalno piko, je tipa `float`, tudi če so decimalke ničle.

? Kaj vrne izraz `"4" + "2"`?
- `6`
~ Narekovaji pomenijo niz, zato `+` ne sešteva, ampak stika.
+ `'42'`
- Napako `TypeError`.
~ Napaka nastane le, če mešaš niz in število. Tu sta oba niza.
> Oba operanda sta niza, zato `+` niza zlepi v `"42"`.

? Po vrsticah `x = 5` in `x = x + 1` ima `x` vrednost:
- `5`
~ Druga vrstica ni enačba brez rešitve, ampak ukaz, ki spremeni vrednost `x`.
+ `6`
- `x + 1`
~ Python shrani izračunano vrednost, ne zapisa izraza.
- `True`
~ `=` ne primerja. Za primerjavo bi potreboval `==`.
> Desna stran `x + 1` se izračuna s staro vrednostjo $5$, rezultat $6$ pa se shrani nazaj v `x`.

? Spremenljivka `n = "7"` je niz. Kaj vrne `int(n) * 2`?
- `'77'`
~ Tako bi bilo pri `n * 2`, brez pretvorbe. `int(n)` je že število $7$.
+ `14`
- `14.0`
~ `int` in `int` pri množenju dasta `int`, ne `float`.
> `int("7")` je celo število $7$, $7 \cdot 2 = 14$, tip `int`.

? Kaj vrne `int(float("2.9")) + 1`?
- `4`
~ To bi dobil, če bi `int` zaokrožil `2.9` na `3`. `int` decimalke odreže.
+ `3`
- `3.9`
~ To bi dobil brez `int`, kot `2.9 + 1`. `int` decimalke odreže, zato je rezultat celo število.
- Napako `ValueError`.
~ Napako bi dobil pri `int("2.9")`. Tu je niz najprej pretvorjen s `float`, kar deluje.
> `float("2.9")` je `2.9`, `int(2.9)` je `2` (odreže), `2 + 1` je `3`.

:::simboli
\text{cena} | cena ene kave | | € | v programu cena = 3.5 (tip float)
\text{količina} | število kav | | – | v programu kolicina = 4 (tip int)
\text{skupaj} | znesek za vse kave | \text{skupaj} = \text{cena} \cdot \text{količina} | € | tip float, ker je cena decimalno število
:::
