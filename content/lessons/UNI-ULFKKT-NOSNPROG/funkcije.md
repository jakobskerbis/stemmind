---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Ekipa Olimpije ima na lestvici $10$ točk in pravkar je zmagala. Napišemo kratko funkcijo, ki zmagovalcu prišteje $3$ točke:

```python
def zmaga(tocke):
    tocke = tocke + 3
    print("v funkciji:", tocke)

olimpija = 10
zmaga(olimpija)
print("na lestvici:", olimpija)
```

Program izpiše `v funkciji: 13` in takoj zatem `na lestvici: 10`. Funkcija je točke očitno prištela, lestvica pa se ni premaknila. Je Python pozabil zmago?

Ni. Program dela natanko tako, kot smo mu naročili, le da mu nismo naročili tistega, kar smo mislili. Ko razumeš, zakaj je tako, razumeš tri stvari, na katerih stoji vsaka funkcija: **parametre**, **vračanje vrednosti** in **lokalne spremenljivke**. Funkcije potrebuješ povsod, kjer bi isti kos kode sicer prepisoval večkrat: točkovanje tekem, izračun povprečja meritev, pretvorbo enot.

## Razlaga

**1. Funkcija je poimenovan kos kode.** Napišemo ga enkrat, z ukazom `def`, nato ga **pokličemo** z imenom in oklepaji, kolikokrat želimo. Sam `def` ničesar ne izračuna. Pythonu le pove: »Pod imenom `zmaga` si zapomni ta recept.« Telo funkcije (zamaknjene vrstice pod `def`) se izvede šele ob klicu.

**2. Klic odpre nov okvir.** Predstavljaj si pomnilnik kot mizo z ločenimi pladnji. Glavni program ima svoj pladenj z imeni, ki jih je ustvaril. Ob vsakem klicu funkcije Python postavi na mizo **nov, prazen pladenj**, ki mu rečemo **okvir** klica. Ko se funkcija konča, ga pospravi.

Klic `zmaga(olimpija)` iz uvoda korak za korakom:

| Korak | Pladenj glavnega programa | Pladenj klica `zmaga` |
|---|---|---|
| pred klicem | `olimpija` → 10 | (ga še ni) |
| ob klicu | `olimpija` → 10 | `tocke` → 10 |
| `tocke = tocke + 3` | `olimpija` → 10 | `tocke` → 13 |
| po klicu | `olimpija` → 10 | (pospravljen) |

V levem stolpcu se vrednost niti enkrat ne spremeni. Vse dogajanje je potekalo na desnem pladnju, ta pa je na koncu izginil skupaj s številom $13$.

**3. Parameter in argument.** Ime `tocke` v vrstici `def zmaga(tocke):` je **parameter**: ime, ki ga funkcija pričakuje in ki dobi vrednost šele ob klicu. Vrednost, ki jo ob klicu podamo v oklepaju (tu vrednost spremenljivke `olimpija`, torej $10$), je **argument**. Ob klicu Python argument priredi parametru: na novem pladnju naredi `tocke = 10`. Funkcija ima lahko več parametrov, ločenih z vejicami; argumenti se jim priredijo po vrsti, prvi prvemu, drugi drugemu.

:::premisli
V uvodu bi preimenovali spremenljivko `olimpija` v `tocke`, da bi bilo ime enako kot ime parametra. Bi lestvica potem pokazala $13$?
---
Ne. Še vedno bi bili dve spremenljivki z istim imenom, vsaka na svojem pladnju. Prirejanje `tocke = tocke + 3` v funkciji spremeni le tisto na pladnju klica. Enako ime ju ne poveže.
:::

**4. Lokalne spremenljivke.** Vsako ime, ki nastane v funkciji (parameter ali spremenljivka, ki ji v telesu priredimo vrednost), je **lokalna spremenljivka**: živi samo na pladnju svojega klica. Od zunaj je ne vidiš. Če po klicu v glavnem programu napišeš `print(tocke)`, dobiš napako `NameError: name 'tocke' is not defined`. Pri naslednjem klicu se postavi nov pladenj, zato si funkcija prejšnjih vrednosti ne zapomni.

To je prednost, ne ovira. Funkcija s svojimi pomožnimi imeni ne more po nesreči pokvariti spremenljivk glavnega programa, četudi so slučajno enako poimenovane.

**5. Vračanje vrednosti.** Kako torej spraviš rezultat s pladnja klica nazaj? Z ukazom `return`. Ta vzame vrednost izraza za seboj in jo **vrne** na mesto, kjer je stal klic. Klic se tako obnaša kot izraz z vrednostjo:

```python
def zmaga(tocke):
    return tocke + 3

olimpija = 10
olimpija = zmaga(olimpija)   # desna stran je 13
print(olimpija)              # 13
```

Desna stran prirejanja se izračuna najprej (to že poznaš): klic vrne $13$, šele nato se $13$ priredi imenu `olimpija` na glavnem pladnju.

Dve lastnosti `return` sta pomembni:

- `return` funkcijo **takoj konča**. Vrstice za njim v istem klicu se ne izvedejo. Zato lahko v funkciji z `if` napišeš več ukazov `return`, izvede se prvi, do katerega program pride.
- Funkcija brez `return` vrne posebno vrednost **`None`** (»nič«).

:::premisli
Kaj izpiše `print(zmaga(10))`, če je `zmaga` prva različica iz uvoda (s `print`, brez `return`)? Napovej obe vrstici.
---
Najprej `v funkciji: 13` (to izpiše `print` znotraj funkcije med klicem), nato `None`, ker funkcija ni vrnila ničesar in zunanji `print` izpiše vrnjeno vrednost.
:::

**6. Na videz izjema: seznami.** Če funkciji podaš seznam in ga v njej spremeniš z metodo, na primer `sez.append("Bor")`, se spremeni tudi zunaj. Parameter in zunanja spremenljivka namreč kažeta na **isti** seznam; metoda spremeni seznam sam, ne pa imena. Prirejanje `sez = [...]` v funkciji pa bi spet ustvarilo le novo lokalno ime. Pri številih in nizih, ki jih ne moremo spremeniti na mestu, ostaja edina pot ven `return`.

**7. Zapis.** Splošna oblika je:

```python
def ime(parameter1, parameter2):
    # telo: lokalne spremenljivke, pogoji, zanke
    return rezultat

vrednost = ime(argument1, argument2)
```

## Rešeni primeri

### Primer 1 (lažji): točke v ligi

V nogometni ligi prinese zmaga $3$ točke, remi $1$ točko, poraz $0$ točk. Napiši funkcijo `tocke_lige`, ki iz števila zmag, remijev in porazov vrne število točk. Koliko točk ima ekipa z $12$ zmagami, $5$ remiji in $4$ porazi?

**Podatki:** zmaga $3$ točke, remi $1$ točka, poraz $0$ točk; zmage $12$, remiji $5$, porazi $4$
**Iščemo:** funkcijo `tocke_lige` in njeno vrednost za te tri argumente

:::formula
točke $= 3 \cdot \text{zmage} + 1 \cdot \text{remiji} + 0 \cdot \text{porazi}$; rezultat vrnemo z `return`.
:::

**Rešitev:**

1. Funkcija potrebuje tri podatke, zato ima tri parametre:
   ```python
   def tocke_lige(zmage, remiji, porazi):
       return 3 * zmage + remiji
   ```
   Porazov ne prištevamo, ker prinesejo $0$ točk; parameter vseeno ostane, da je klic naraven.
2. Klic `tocke_lige(12, 5, 4)` po vrsti priredi `zmage = 12`, `remiji = 5`, `porazi = 4`.
3. Izračun: $3 \cdot 12 + 5 = 41$.
4. Odgovor: funkcija vrne $41$; ekipa ima $41$ točk. Z `print(tocke_lige(12, 5, 4))` to tudi vidimo.

### Primer 2: odstotek zadetih metov

Košarkarica je na tekmi zadela $7$ od $12$ metov. Napiši funkcijo `odstotek(zadeti, meti)`, ki vrne odstotek zadetih metov, zaokrožen na eno decimalko. Za igralko, ki ni vrgla nobenega meta, naj vrne $0$, ne napake.

**Podatki:** zadeti meti $7$, vsi meti $12$; zaokroževanje na $1$ decimalko; pri $0$ metih rezultat $0$
**Iščemo:** funkcijo in vrednost `odstotek(7, 12)`

:::formula
odstotek $= \dfrac{100 \cdot \text{zadeti}}{\text{meti}}$; pri $\text{meti} = 0$ najprej `return 0`.
:::

**Rešitev:**

1. Deljenje z nič bi sprožilo napako, zato ta primer ujamemo najprej:
   ```python
   def odstotek(zadeti, meti):
       if meti == 0:
           return 0
       return round(100 * zadeti / meti, 1)
   ```
2. Pri `odstotek(0, 0)` je pogoj resničen, prvi `return` vrne $0$ in funkcijo konča. Do deljenja sploh ne pride.
3. Pri `odstotek(7, 12)` je pogoj neresničen, zato se izvede druga vrstica z `return`: $\dfrac{100 \cdot 7}{12} \approx 58{,}33$.
4. `round(..., 1)` zaokroži na eno decimalko: $58{,}3$. Python izpiše `58.3` (s piko).
5. Odgovor: košarkarica je zadela $58{,}3\,\%$ metov.

### Primer 3 (težji): pikado 501

V pikadu igralec začne s $501$ točko in od nje odšteva dosežene točke. Če bi met stanje spravil pod nič, ne šteje in stanje ostane, kot je bilo. Spodnji program uporablja funkcijo `preostanek`. Kakšno je stanje po vseh metih in kaj se zgodi, če na koncu dodamo `print(novo)`?

```python
def preostanek(stanje, met):
    novo = stanje - met
    if novo < 0:
        return stanje
    return novo

stanje = 501
for met in [180, 140, 100, 60, 40]:
    stanje = preostanek(stanje, met)
print(stanje)
```

**Podatki:** začetno stanje $501$; meti $180$, $140$, $100$, $60$, $40$; met, ki bi dal negativno stanje, ne šteje
**Iščemo:** izpisano končno stanje in učinek vrstice `print(novo)` na koncu

:::formula
Vsak klic vrne `stanje - met` ali, če bi bilo to manj kot $0$, nespremenjeno `stanje`. Vrnjena vrednost se v zanki priredi zunanji spremenljivki `stanje`.
:::

**Rešitev:**

1. Prvi klic: lokalni `stanje` je $501$, `met` je $180$; $501 - 180 = 321$. Ni negativno, vrne $321$, zunanji `stanje` postane $321$.
2. Drugi klic dobi kot argument novo zunanje stanje: $321 - 140 = 181$.
3. Tretji: $181 - 100 = 81$. Četrti: $81 - 60 = 21$.
4. Peti: $21 - 40 = -19$, kar je manj kot $0$. Izvede se `return stanje` in vrne $21$; met ne šteje.
5. Program izpiše `21`. Zunanji `stanje` se je spreminjal samo zato, ker smo vrnjeno vrednost vsakič priredili nazaj, ne zato, ker ima parameter isto ime.
6. `novo` je lokalna spremenljivka, ki je obstajala le med posameznim klicem. Po zanki je ni več, zato `print(novo)` sproži `NameError`.
7. Odgovor: končno stanje je $21$; dodatna vrstica bi končala program z napako, ker `novo` zunaj funkcije ne obstaja.

### Primer 4: zdaj ti

Pri igri s kockami se met podvoji, če pade šestica. Kaj izpiše program?

```python
def podvoji(t):
    t = t * 2
    return t

t = 6
skupaj = podvoji(t) + t
print(skupaj, t)
```

**Podatki:** zunanji `t` je $6$; funkcija svoj parameter pomnoži z $2$ in ga vrne
**Iščemo:** vrednosti `skupaj` in `t`, ki ju izpiše `print`

:::formula
`skupaj` $=$ (vrnjena vrednost klica) $+$ (zunanji `t`)
:::

**Rešitev:**

1. Ob klicu dobi lokalni `t` vrednost $6$; v funkciji postane $12$ in funkcija vrne $12$.
2. Zunanji `t` je na drugem pladnju in ga prirejanje v funkciji ni spremenilo.
3. Izračunaj `skupaj` in napiši, kaj izpiše `print`, nato preveri:

:::premisli
Koliko je `skupaj` in kaj izpiše zadnja vrstica?
---
`skupaj` $= 12 + 6 = 18$. Izpiše se `18 6`: zunanji `t` je ostal $6$, ker je `t = t * 2` spremenil le lokalno ime.
:::

## Pogoste napake

- **`print` namesto `return`.** Misel: »Funkcija je izpisala $13$, torej ima rezultat.« Izpis je le slika na zaslonu, ki je program ne more uporabiti naprej. Brez `return` funkcija vrne `None`, zato `x = f(10)` da `x = None`, `f(10) + 1` pa napako. Popravek: rezultat vrni z `return`, izpiši ga zunaj, če ga želiš videti.
- **Sprememba parametra naj bi spremenila argument.** Misel: »Spremenil sem `tocke` v funkciji, torej se je spremenila spremenljivka, ki sem jo podal.« Parameter je novo, lokalno ime; prirejanje mu da novo vrednost samo na pladnju klica. Popravek: `olimpija = zmaga(olimpija)`.
- **Lokalna spremenljivka zunaj funkcije.** Misel: »V funkciji sem izračunal `novo`, zdaj ga bom izpisal.« Ko se klic konča, njegov okvir izgine; zunaj dobiš `NameError`. Popravek: vrni vrednost in jo shrani v zunanjo spremenljivko.
- **Koda za `return` naj bi se še izvedla.** Misel: »`return` je v prvi vrstici, `print` v drugi, izpisalo se bo oboje.« `return` klic takoj konča. Popravek: vse, kar mora funkcija še narediti, postavi pred `return`.
- **`def` naj bi funkcijo že pognal.** Misel: »Vrstica `def` je višje v programu, zato se njen `print` izpiše prvi.« `def` le shrani recept; telo se izvede šele ob klicu, in to vsakič znova.

## Povzetek

- `def ime(parametri):` shrani funkcijo; telo se izvede šele ob klicu `ime(argumenti)`.
- Parametri so lokalna imena, ki ob klicu dobijo vrednosti argumentov, po vrsti.
- Vsak klic ima svoj okvir: spremenljivke, nastale v funkciji, so lokalne, zunaj jih ni, ob naslednjem klicu začnejo znova.
- Prirejanje parametru ne spremeni zunanje spremenljivke, tudi če ima isto ime. Rezultat spraviš ven z `return` in ga priredi: `x = f(x)`.
- `return` vrne vrednost na mesto klica in funkcijo takoj konča; brez njega funkcija vrne `None`.
- Seznam, spremenjen z metodo (npr. `append`), se spremeni tudi zunaj, ker oba imena kažeta nanj.

## Drugače: Z analogijo

Funkcija je kot **kalkulator z zaprtim ohišjem**, ki ga ima vsak zapisnikar ob igrišču. Na ohišju so reže z napisi, na primer »zmage«, »remiji«, »porazi«: to so parametri. Ko vanje vstaviš listke s števili $12$, $5$ in $4$ (argumente), kalkulator v notranjosti računa na svoji tabli. Ta tabla so lokalne spremenljivke. Na koncu iz okenca pade en sam listek z rezultatom: to je `return`.

Tri posledice so v analogiji očitne:

- Kar napiše na notranjo tablo, ostane notri. Ko kalkulator konča, tablo pobriše. Zato lokalnih spremenljivk zunaj ni in zato si kalkulator prejšnjega klica ne zapomni.
- Listek, ki si ga vstavil, je **kopija** tvoje številke. Če kalkulator nanjo nekaj pripiše, tvoja številka v zvezku ostane enaka.
- Če kalkulator rezultat le pokaže na zaslonu (`print`), iz okenca pa ne pade nič (`None`), si moraš rezultat prepisati na roko; program tega ne zna.

Meja analogije: pri seznamu ne vstaviš kopije, ampak pokažeš, kje stoji tvoj seznam. Če ga kalkulator popravi (`append`), je popravljen tudi tvoj.

## Drugače: Iz vsakdanjega življenja

Na tekmi rokometa trener s klopi ne razlaga vsake akcije posebej. Akcije so vadili na treningu in vsaka ima ime, na primer »križanje«. Med tekmo trener zakliče »križanje, levo krilo«.

- Ime akcije, ki so jo vadili na treningu, je `def`: opis, ki ga ekipa pozna, a ga s tem še ne izvede.
- Zaklic med tekmo je klic funkcije. Ista akcija se lahko na tekmi izvede desetkrat.
- »Levo krilo« je argument. V opisu akcije piše le »krilo« (parameter); vsakič se dopolni, katero.
- Gibanje igralcev med akcijo in dogovori, ki jih izrečejo na igrišču, so lokalne spremenljivke: ko je akcija končana, ne veljajo več.
- Izid akcije, ki se vpiše v zapisnik (gol ali ne), je vrnjena vrednost. Za tekmo šteje le ta, ne pa vse, kar se je vmes govorilo na igrišču.

## Preveri se

? V programu iz primera 3 (pikado) nastopa ime `novo`. Kaj velja zanj?
- To je spremenljivka glavnega programa, ki jo po zanki lahko izpišeš.
~ Zamenjuješ ime, nastalo v funkciji, z imenom glavnega programa. Po koncu klica ga ni več.
- To je parameter funkcije `preostanek`.
~ Parametri so le imena v oklepaju za `def`: `stanje` in `met`. `novo` nastane šele v telesu.
+ To je lokalna spremenljivka: obstaja le med posameznim klicem funkcije.
- To je vrednost, ki jo funkcija vedno vrne.
~ Funkcija včasih vrne `stanje`, ne `novo`. Vrnjeno je tisto, kar stoji za izvedenim `return`.
> `novo` dobi vrednost v telesu funkcije, zato je lokalna. Ob vsakem klicu nastane znova in po njem izgine.

? V kakšnem vrstnem redu se izpišejo vrstice?
```python
def f(x):
    print("B")
    return x + 1

print("A")
y = f(1)
print("C", y)
```
- `B`, `A`, `C 2`
~ `def` je višje v programu, vendar telesa ne izvede; `print("B")` se zgodi šele ob klicu.
+ `A`, `B`, `C 2`
- `A`, `C 2`, `B`
~ Klic `f(1)` se mora končati, preden ima `y` vrednost; zato `B` pride pred `C 2`.
- `A`, `B`
~ `return` konča le funkcijo, ne celega programa. Zadnja vrstica se izvede.
> `def` le shrani funkcijo. Izpiše se `A`, nato klic izpiše `B` in vrne $2$, na koncu se izpiše `C 2`.

? Kaj se zgodi, če poženeš ta program?
```python
def zmaga(t):
    t = t + 3

tocke = 10
tocke = zmaga(tocke)
print(tocke)
```
- Izpiše se `13`.
~ Funkcija je izračunala $13$ le lokalno; brez `return` ga ne vrne.
- Izpiše se `10`.
~ Tako bi bilo brez prirejanja. Tu pa `tocke` dobi vrednost, ki jo klic vrne.
+ Izpiše se `None`.
- Program javi napako, ker funkcija nima `return`.
~ Funkcija brez `return` je dovoljena; vrne `None`.
> Funkcija nima `return`, zato vrne `None`. Prirejanje `tocke = zmaga(tocke)` zato zunanjemu `tocke` priredi `None`.

? Tekme so se končale 2 : 2, 3 : 1 in 0 : 4. Koliko točk skupaj izpiše program?
```python
def rezultat(doma, gost):
    if doma > gost:
        return 3
    if doma == gost:
        return 1
    return 0

print(rezultat(2, 2) + rezultat(3, 1) + rezultat(0, 4))
```
- `None`
~ Vsi trije klici pridejo do enega od ukazov `return`, zato vsak vrne število.
- `0`
~ Misliš, da velja zadnji `return` v telesu. Izvede se prvi, do katerega program pride, in klic takoj konča.
+ `4`
- `3`
~ Remi (2 : 2) ne prinese $0$: drugi pogoj je resničen, klic vrne $1$.
> Klici vrnejo $1$ (remi), $3$ (zmaga doma) in $0$ (poraz). Vsota je $1 + 3 + 0 = 4$.

? Kaj izpiše program?
```python
x = 5
def f(x):
    x = x * 3
    return x - 1

y = f(x + 1)
print(x, y)
```
+ `5 17`
- `18 17`
~ Misliš, da prirejanje parametru `x` spremeni zunanji `x`. To je drugo, lokalno ime.
- `5 14`
~ Argument ni $5$, ampak vrednost izraza `x + 1`, torej $6$.
- `6 17`
~ Izraz `x + 1` izračuna novo vrednost, ne spremeni `x`.
> Argument je $6$; lokalni `x` postane $6 \cdot 3 = 18$, vrne se $18 - 1 = 17$. Zunanji `x` ostane $5$.

:::simboli
\text{točke} | točke ekipe v ligi | \text{točke} = 3 \cdot \text{zmage} + 1 \cdot \text{remiji} + 0 \cdot \text{porazi} | – | vrne jih funkcija tocke_lige
\text{zmage} | število zmag | | – | zmaga prinese 3 točke
\text{remiji} | število remijev | | – | remi prinese 1 točko
\text{porazi} | število porazov | | – | poraz prinese 0 točk
\text{odstotek} | odstotek zadetih metov | \text{odstotek} = \dfrac{100 \cdot \text{zadeti}}{\text{meti}} | \% | zaokrožen na eno decimalko
\text{zadeti} | število zadetih metov | | – | parameter funkcije odstotek
\text{meti} | število vseh metov | | – | pri $\text{meti} = 0$ funkcija vrne 0
:::
