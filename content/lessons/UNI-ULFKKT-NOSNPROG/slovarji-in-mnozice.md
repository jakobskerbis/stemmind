---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Na transfuzijski postaji v enem dopoldnevu daruje kri $9$ ljudi. Medicinska sestra zapiše njihove krvne skupine v seznam z devetimi elementi. Nato ukaz `len(set(skupine))` vrne $4$. Kam je izginilo pet darovalcev?

Nikamor. Python je odgovoril na drugo vprašanje: **koliko različnih** krvnih skupin je bilo. In še ena nenavadnost: če iz zbirke `{"A": 4, "0": 3}` hočeš »prvi element« z `[0]`, Python ne vrne $4$, ampak javi napako, čeprav podatki tam so.

Oboje postane logično, ko spoznaš dve novi zbirki. **Slovar** hrani pare »ime: podatek« in iščeš po imenu, ne po mestu. **Množica** hrani vsak element samo enkrat. Z njima hitro prešteješ, kolikokrat se kaj pojavi (diagnoze, nukleotidi v DNK, krvne skupine), in primerjaš skupine, na primer simptome dveh bolezni.

## Razlaga

**Najprej en primer na papirju.** Seznam krvnih skupin z dopoldneva je:

```python
skupine = ["A", "0", "A", "B", "0", "A", "AB", "0", "A"]
```

Sestra bi na list napisala štiri vrstice in ob vsaki delala črtice: A ||||, 0 |||, B |, AB |. Na levi je **oznaka**, na desni **število**. Natanko tako je zgrajen slovar:

```python
stevec = {"A": 4, "0": 3, "B": 1, "AB": 1}
```

Vsak par ima **ključ** (levo od dvopičja) in **vrednost** (desno). Ključ je kot naslov predalčka, vrednost je tisto, kar je v njem.

**Branje in pisanje.** Do vrednosti prideš s ključem v oglatih oklepajih: `stevec["0"]` je `3`. Z enakim zapisom vrednost spremeniš ali dodaš nov par: `stevec["A"] = 5` prepiše staro vrednost, `stevec["A2"] = 1` doda nov ključ. Ključi so **edinstveni**: isti ključ ne more biti v slovarju dvakrat. `len(stevec)` pove število ključev, ne vsote vrednosti.

Ker slovar išče po ključu, `stevec[0]` ne pomeni »prvi par«. Python išče ključ `0` (število), ga ne najde in javi napako `KeyError`. Enako se zgodi pri ključu, ki ga ni: `stevec["C"]`. Zato pred branjem preveri `if "C" in stevec:` (operator `in` pri slovarju gleda ključe) ali uporabi `stevec.get("C", 0)`, ki vrne `0`, če ključa ni.

:::premisli
Slovar je na začetku prazen: `stevec = {}`. Kaj se zgodi, če takoj izvedeš `stevec["A"] = stevec["A"] + 1`? Zakaj?
---
Python javi `KeyError`. Desna stran se izračuna najprej, ključa `"A"` pa še ni, zato ga ni mogoče prebrati. Prvo pojavitev moraš zapisati z `stevec["A"] = 1`.
:::

**Od primera do postopka.** Črtice na papirju pretvorimo v zanko. Za vsak element vprašamo isto, kar se je spraševala sestra: »Ali vrstico za to skupino že imam?«

```python
stevec = {}
for s in skupine:
    if s in stevec:
        stevec[s] += 1
    else:
        stevec[s] = 1
```

Zapis `stevec[s] += 1` je okrajšava za `stevec[s] = stevec[s] + 1`. Krajše celoten `if` naredi `stevec[s] = stevec.get(s, 0) + 1`. Postopek deluje za vsak seznam ali niz: za diagnoze v kartoteki, za črke v zaporedju DNK, za besede v izvidu. Po slovarju se sprehodiš z `for k in stevec:`; zanka da ključe, vrednost dobiš s `stevec[k]`.

**Množica: samo različni.** Včasih število ni pomembno, zanima te le, *kaj vse* se pojavi. Takrat uporabiš množico. `set(skupine)` naredi množico `{"A", "0", "B", "AB"}`: ponovitve izginejo, zato je `len` enak $4$. Množica nima vrstnega reda in nima indeksov; Python jo lahko izpiše v kateremkoli zaporedju. Prazno množico ustvariš s `set()`, ker je `{}` prazen slovar. Element dodaš z `.add(x)`, z `x in m` pa preveriš, ali je v množici.

**Dve množici skupaj.** Vzemimo simptome dveh bolezni:

```python
gripa = {"vročina", "kašelj", "bolečine v mišicah", "utrujenost"}
prehlad = {"kašelj", "izcedek iz nosu", "kihanje", "utrujenost"}
```

Nariši dva kroga, ki se delno prekrivata. V prekrivanju sta kašelj in utrujenost, v levem delu le gripa (vročina, bolečine v mišicah), v desnem le prehlad (izcedek, kihanje).

| Operacija | Zapis | Pomen | Rezultat |
|---|---|---|---|
| unija | `gripa \| prehlad` | v vsaj eni | $6$ simptomov |
| presek | `gripa & prehlad` | v obeh | kašelj, utrujenost |
| razlika | `gripa - prehlad` | le v prvi | vročina, bolečine v mišicah |

**Unija** združi oba kroga, **presek** vzame le prekrivanje.

:::premisli
Gripa ima $4$ simptome, prehlad tudi $4$. Zakaj ima unija le $6$ elementov in ne $8$? Kako bi število elementov unije izračunal iz velikosti preseka?
---
Kašelj in utrujenost sta v obeh, množica pa vsak element hrani le enkrat. Velja $4 + 4 - 2 = 6$: velikost unije je vsota velikosti, zmanjšana za velikost preseka.
:::

## Rešeni primeri

### Primer 1: telesne temperature

Na oddelku so izmerili temperature: `temp = {"Ana": 37.2, "Bor": 38.5, "Cene": 36.8}`. Zvečer sprejmejo Dano s $39{,}1\,^\circ\mathrm{C}$ in jo zapišejo z `temp["Dana"] = 39.1`. Koliko je `temp["Bor"]`, koliko je potem `len(temp)` in kdo ima vročino ($38\,^\circ\mathrm{C}$ ali več)?

**Podatki:** Ana $37{,}2\,^\circ\mathrm{C}$, Bor $38{,}5\,^\circ\mathrm{C}$, Cene $36{,}8\,^\circ\mathrm{C}$, nova Dana $39{,}1\,^\circ\mathrm{C}$; meja za vročino $38\,^\circ\mathrm{C}$
**Iščemo:** `temp["Bor"]`, `len(temp)` in imena bolnikov z vročino

:::formula
`slovar[ključ]` vrne vrednost; `slovar[nov_ključ] = vrednost` doda par; `for k in slovar:` da ključe
:::

**Rešitev:**

1. Ključ `"Bor"` obstaja, zato `temp["Bor"]` vrne `38.5`.
2. Ključa `"Dana"` še ni bilo, zato prirejanje doda nov par: slovar ima $3 + 1 = 4$ ključe.
3. Zanka `for k in temp:` z `if temp[k] >= 38:` preveri vsakega: Ana ne, Bor da, Cene ne, Dana da.
4. Odgovor: `temp["Bor"]` je `38.5`, `len(temp)` je $4$, vročino imata Bor in Dana.

### Primer 2: štetje krvnih skupin

Iz seznama `skupine = ["A", "0", "A", "B", "0", "A", "AB", "0", "A"]` naredi slovar pojavitev. Koliko je `stevec["A"]` in koliko `len(stevec)`?

**Podatki:** seznam $9$ krvnih skupin: A, 0, A, B, 0, A, AB, 0, A
**Iščemo:** `stevec["A"]` in število ključev `len(stevec)`

:::formula
Za vsak element `s`: `stevec[s] = stevec.get(s, 0) + 1`
:::

**Rešitev:**

1. Začnemo s praznim slovarjem `{}`, ker še nismo videli nobene skupine.
2. Sledimo zanki: A → `{"A": 1}`, 0 → `{"A": 1, "0": 1}`, A → `"A": 2`, B → nov ključ, 0 → `"0": 2`, A → `"A": 3`, AB → nov ključ, 0 → `"0": 3`, A → `"A": 4`.
3. Končni slovar: `{"A": 4, "0": 3, "B": 1, "AB": 1}`.
4. Preizkus: vsota vrednosti mora biti enaka dolžini seznama, $4 + 3 + 1 + 1 = 9$.
5. Odgovor: `stevec["A"]` je $4$, slovar ima $4$ ključe (toliko je različnih skupin).

### Primer 3: kateri bolezni ustreza bolnik

Bolnik navaja simptome `bolnik = {"kašelj", "kihanje", "izcedek iz nosu"}`. Množici `gripa` in `prehlad` sta iz razlage. Kateri bolezni se bolnik bolj ujema (več skupnih simptomov)? Koliko različnih simptomov skupaj pokrivata obe bolezni?

**Podatki:** `gripa` = {vročina, kašelj, bolečine v mišicah, utrujenost}; `prehlad` = {kašelj, izcedek iz nosu, kihanje, utrujenost}; `bolnik` = {kašelj, kihanje, izcedek iz nosu}
**Iščemo:** `len(gripa & bolnik)`, `len(prehlad & bolnik)` in `len(gripa | prehlad)`

:::formula
Skupni elementi: `a & b`; vsi elementi: `a | b`; $|a \cup b| = |a| + |b| - |a \cap b|$, kjer $|a|$ pomeni `len(a)`
:::

**Rešitev:**

1. Ujemanje merimo s skupnimi simptomi, torej s presekom. `gripa & bolnik` je {kašelj}, dolžina $1$.
2. `prehlad & bolnik` je {kašelj, kihanje, izcedek iz nosu}, dolžina $3$.
3. $3 > 1$, zato se bolnik bolj ujema s prehladom.
4. Unija bolezni: $4 + 4 - 2 = 6$, ker sta kašelj in utrujenost v obeh.
5. Odgovor: bolnik se bolj ujema s prehladom ($3$ skupni simptomi proti $1$); bolezni skupaj pokrivata $6$ različnih simptomov.

Pozor: tak izračun je le vaja s podatki, ne diagnoza.

### Primer 4: zdaj ti

Odsek DNK je zapisan kot niz `dnk = "GATTACAGA"`. Preštej, kolikokrat se pojavi vsak nukleotid.

**Podatki:** niz `"GATTACAGA"` z $9$ znaki (nukleotidi A, C, G, T)
**Iščemo:** slovar pojavitev in število različnih nukleotidov

:::formula
`for z in dnk:` in `stevec[z] = stevec.get(z, 0) + 1`; različni: `len(set(dnk))`
:::

**Rešitev:**

1. Zanka `for` po nizu da znak za znakom, tako kot po seznamu.
2. Za vsak znak povečamo njegov števec; prvič ga `.get` začne pri $0$.
3. Sledi zanki sam, nato preveri:

:::premisli
Kakšen je končni slovar in koliko je `len(set(dnk))`?
---
`{"G": 2, "A": 4, "T": 2, "C": 1}`; vsota $2 + 4 + 2 + 1 = 9$ se ujema z dolžino niza. Različni so $4$ nukleotidi, zato je `len(set(dnk))` enak $4$.
:::

## Pogoste napake

- **Slovar po mestu.** `stevec[0]` za »prvi par« je navada iz seznamov. Slovar nima indeksov, išče ključ `0` in javi `KeyError`. Vrednost dobiš s ključem, ključe pa našteješ z `for k in stevec:`.
- **Povečevanje ključa, ki ga še ni.** `stevec[s] += 1` je videti kot »prištej ena«, a najprej mora prebrati staro vrednost. Pri prvi pojavitvi je ni, zato `KeyError`. Uporabi `if s in stevec: … else: stevec[s] = 1` ali `.get(s, 0) + 1`.
- **Vedno `= 1`.** Kdor v zanki piše le `stevec[s] = 1`, misli, da tako »označi« pojavitev. Vsakič prepiše vrednost, zato so na koncu vse vrednosti $1$. Število mora rasti: `+ 1` k stari vrednosti.
- **Unija in presek zamenjana.** Znak `&` beremo »in«, zato se zdi, da `gripa & prehlad` pomeni »gripa in prehlad skupaj«. V resnici `&` pomeni »v obeh hkrati«, vse skupaj pa da `|`. Pomagaj si s krogoma: presek je prekrivanje, unija vse, kar je pokrito.
- **`{}` kot prazna množica.** `{}` ustvari prazen slovar, zato `.add` javi napako. Prazna množica je `set()`.

## Povzetek

- Slovar hrani pare `ključ: vrednost`; ključi so edinstveni, vrednost dobiš s `slovar[ključ]`, nov par dodaš ali staro vrednost prepišeš s `slovar[ključ] = vrednost`.
- Neobstoječ ključ da `KeyError`; preveri z `ključ in slovar` ali beri s `slovar.get(ključ, privzeto)`.
- `len(slovar)` je število ključev; `for k in slovar:` gre po ključih.
- Štetje pojavitev: prazen slovar, nato za vsak element `stevec[x] = stevec.get(x, 0) + 1`; vsota vrednosti je dolžina seznama.
- Množica hrani vsak element enkrat, brez vrstnega reda; `set(seznam)` odstrani ponovitve, prazna množica je `set()`.
- Unija `a | b` (v vsaj eni), presek `a & b` (v obeh), razlika `a - b` (le v prvi); $|a \cup b| = |a| + |b| - |a \cap b|$.

## Drugače: Z analogijo

**Slovar je kartoteka v ambulanti.** Vsaka mapa ima na hrbtu nalepko z imenom bolnika (ključ), v njej je izvid (vrednost). Sestra ne vpraša »daj mi tretjo mapo«, ampak »daj mi mapo Ane Novak«. Dveh map z enako nalepko ni; nov izvid gre v isto mapo in zamenja starega. Če mape ni, je ne more izročiti: to je `KeyError`.

**Množica je seznam alergij na kartonu.** Vseeno je, kolikokrat je bolnik povedal, da je alergičen na penicilin; na kartonu piše enkrat. Vrstni red ni pomemben, pomembno je le, ali je snov na seznamu.

**Unija in presek sta dva kartona na isti mizi.** Zdravnik, ki predpisuje zdravilo dvema bolnikoma hkrati, se mora izogniti vsem alergenom obeh: to je unija. Če želi vedeti, na kaj sta alergična oba, pogleda presek.

## Drugače: Bolj natančno

Slovar in množica sta zgrajena kot **zgoščevalna tabela** (angl. hash table). Iz ključa Python izračuna število, zgoščeno vrednost (`hash(k)`), in iz nje neposredno mesto v pomnilniku. Zato `x in mnozica` in `slovar[k]` v povprečju trajata enako dolgo ne glede na velikost zbirke. Pri seznamu mora `x in seznam` pregledati elemente enega za drugim, zato pri $n$ elementih traja sorazmerno z $n$.

Iz tega sledi pogoj za ključe: zgoščena vrednost se ne sme spremeniti. Ključ ali element množice je lahko nespremenljiv objekt (`int`, `float`, `str`, `bool`, terka), ne pa seznam ali slovar: `{[1, 2]: "x"}` javi `TypeError: unhashable type: 'list'`.

Od Pythona 3.7 slovar ohranja vrstni red vstavljanja ključev, zato jih zanka vrne v tem redu. Množica takega jamstva nima.

Operacije nad množicami imajo tudi metode: `a.union(b)`, `a.intersection(b)`, `a.difference(b)`; simetrična razlika `a ^ b` vsebuje elemente, ki so v natanko eni od obeh. Za velikost unije velja načelo vključitve in izključitve: elemente preseka smo v $|a| + |b|$ šteli dvakrat, zato jih enkrat odštejemo, $|a \cup b| = |a| + |b| - |a \cap b|$.

## Preveri se

? V programu je `tlak = {"Ana": 120, "Bor": 135}`. Kaj je v tem slovarju `"Ana"`?
- Vrednost, ki jo slovar hrani.
~ Vrednost je desno od dvopičja ($120$). `"Ana"` je oznaka, po kateri jo poiščeš.
+ Ključ, s katerim dobiš vrednost: `tlak["Ana"]` je $120$.
- Indeks prvega elementa.
~ Slovar nima indeksov po mestu. `tlak[0]` bi javil `KeyError`.
> Levo od dvopičja je ključ, desno vrednost. Do vrednosti prideš s ključem.

? Izvedeš `stevec = {}` in nato `stevec["A"] += 1`. Kaj se zgodi?
- `stevec` postane `{"A": 1}`.
~ Tako bi bilo, če bi Python začel pri $0$. Za `+=` mora najprej prebrati staro vrednost, ki je ni.
+ Python javi `KeyError`, ker ključa `"A"` še ni.
- `stevec` ostane prazen, napake ni.
~ Python neuspele operacije ne preskoči tiho: ustavi se z napako.
> Prvo pojavitev zapiši z `stevec["A"] = 1` ali uporabi `stevec.get("A", 0) + 1`.

? `s = ["kašelj", "vročina", "kašelj", "kašelj", "glavobol", "vročina", "kašelj"]` in `stevec` je slovar pojavitev iz `s`. Kaj izpiše `print(len(s), len(set(s)), stevec["kašelj"])`?
- `7 7 4`
~ `set` odstrani ponovitve: različni simptomi so le kašelj, vročina in glavobol, torej $3$.
+ `7 3 4`
- `3 3 4`
~ `len(s)` šteje vse elemente seznama, tudi ponovitve, teh je $7$. Različne šteje šele `len(set(s))`.
> Seznam ima $7$ elementov, različni simptomi so $3$, kašelj se pojavi $4$-krat.

? Po pravilni zanki za štetje seznama `["A", "0", "A", "AB", "0", "A"]` koliko je `stevec["0"]`?
- $6$
~ To je dolžina celega seznama, ne število pojavitev skupine 0.
- $3$
~ $3$ je število različnih skupin (`len(stevec)`) ali število pojavitev A, ne skupine 0.
+ $2$
- $1$
~ To dobiš, če v zanki vedno pišeš `stevec[s] = 1` in vrednost prepišeš namesto povečaš.
> Skupina 0 se pojavi na drugem in petem mestu, zato je `stevec["0"]` enak $2$.

? Bolnik 1 je alergičen na `{"penicilin", "aspirin", "lateks"}`, bolnik 2 na `{"aspirin", "oreščki"}`. Koliko je `len(b1 | b2)`?
- $5$
~ Aspirin je v obeh, unija pa vsak element hrani le enkrat: $3 + 2 - 1$.
- $1$
~ $1$ je velikost preseka (`b1 & b2`, le aspirin), ne unije.
+ $4$
> Unija je {penicilin, aspirin, lateks, oreščki}: $3 + 2 - 1 = 4$.

:::simboli
a | prva množica (Pythonov set) | | | \lvert a\rvert pomeni len(a)
b | druga množica (Pythonov set) | | |
:::
