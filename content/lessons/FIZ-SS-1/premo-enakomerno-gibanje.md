---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz osnovne šole že poznaš pojma **pot** in **hitrost** ter formulo $v = \dfrac{s}{t}$. Veš tudi, da se hitrost meri v $\mathrm{m/s}$ ali $\mathrm{km/h}$ in da se pretvarja s faktorjem $3{,}6$.

V 1. letniku to znanje nadgradimo: gibanje začnemo **opisovati z grafi**. Graf pove veliko več kot ena številka. Iz njega razbereš, kje je telo ob katerem času, ali miruje, ali se giblje hitro ali počasi in v katero smer. Tako berejo podatke prometniki, športni trenerji in vsak, ki si ogleda zapis gibanja s senzorja ali telefona.

Najpreprostejše gibanje je **premo enakomerno gibanje**. Na njem se naučimo risati in brati grafa $s(t)$ in $v(t)$, ki ju bomo potrebovali pri vseh težjih gibanjih.

## Razlaga

**1. Kaj je premo enakomerno gibanje.** Telo se giblje po ravni črti (premo) in v vsakem enakem časovnem intervalu opravi enako dolgo pot (enakomerno). Hitrost je zato ves čas **stalna**.

**2. Hitrost.** Pri tem gibanju je hitrost enaka količniku prepotovane poti in časa:

$$v = \frac{s}{t}$$

Enota je $\mathrm{m/s}$. Iz formule dobimo tudi pot:

$$s = v \cdot t$$

**3. Začetni položaj.** Če telo ne začne v izhodišču, ampak pri $s_0$, je lega ob času $t$:

$$s = s_0 + v \cdot t$$

V tej lekciji večinoma vzamemo $s_0 = 0$ in $t$ merimo od začetka gibanja.

**4. Graf $s(t)$ (pot v odvisnosti od časa).** Na vodoravno os nanašamo čas $t$, na navpično pot $s$. Ker je $s = v \cdot t$, je graf **premica skozi izhodišče** (če je $s_0 = 0$).

- Naklon premice je enak hitrosti: $v = \dfrac{\Delta s}{\Delta t}$.
- Strmejša premica pomeni večjo hitrost.
- Vodoravna premica pomeni mirovanje ($v = 0$).

**5. Graf $v(t)$ (hitrost v odvisnosti od časa).** Na navpično os nanašamo hitrost. Ker je hitrost stalna, je graf **vodoravna premica** na višini $v$.

**6. Ploščina pod grafom $v(t)$.** Pod vodoravno premico je pravokotnik s stranicama $v$ in $t$. Njegova ploščina je $v \cdot t = s$. Zato velja:

> Ploščina pod grafom $v(t)$ je enaka prepotovani poti.

**7. Povprečna in trenutna hitrost.** Pri enakomernem gibanju sta enaki: hitrost je ves čas ista.

## Rešeni primeri

### Primer 1 (lažji): izračun poti in risanje grafov

Kolesar se enakomerno vozi s hitrostjo $v = 5\,\mathrm{m/s}$. Koliko poti opravi v $4\,\mathrm{s}$? Sestavi tabelo vrednosti za graf $s(t)$.

**Podatki:** $v = 5\,\mathrm{m/s}$, $t = 4\,\mathrm{s}$, začetek v izhodišču ($s_0 = 0$)
**Iščemo:** pot $s$ in tabelo vrednosti za graf $s(t)$

:::formula
$s = v \cdot t$
:::

**Rešitev:**

1. Gibanje je enakomerno, zato uporabimo $s = v \cdot t$.
2. Vstavimo: $s = 5\,\mathrm{m/s} \cdot 4\,\mathrm{s} = 20\,\mathrm{m}$.
3. Tabela vrednosti (zakaj: za premico zadoščata dve točki, tretja služi za preverjanje):

| $t\,(\mathrm{s})$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $s\,(\mathrm{m})$ | 0 | 5 | 10 | 15 | 20 |

4. Točke ležijo na premici skozi izhodišče. Graf $v(t)$ je vodoravna premica pri $5\,\mathrm{m/s}$.
5. Odgovor: kolesar v $4\,\mathrm{s}$ opravi $20\,\mathrm{m}$ poti.

### Primer 2: branje hitrosti iz grafa $s(t)$

Na grafu $s(t)$ je premica, ki gre skozi točki $(0\,\mathrm{s},\ 0\,\mathrm{m})$ in $(6\,\mathrm{s},\ 30\,\mathrm{m})$. Določi hitrost in zapiši enačbo gibanja.

**Podatki:** točki na premici grafa $s(t)$: $(0\,\mathrm{s},\ 0\,\mathrm{m})$ in $(6\,\mathrm{s},\ 30\,\mathrm{m})$; premica gre skozi izhodišče ($s_0 = 0$)
**Iščemo:** hitrost $v$ in enačbo gibanja $s(t)$

:::formula
Hitrost je naklon premice: $v = \dfrac{\Delta s}{\Delta t}$, enačba gibanja: $s = v \cdot t$
:::

**Rešitev:**

1. Hitrost je naklon premice: $v = \dfrac{\Delta s}{\Delta t}$. Zato izberemo dve točki na premici.
2. $\Delta s = 30\,\mathrm{m} - 0\,\mathrm{m} = 30\,\mathrm{m}$, $\Delta t = 6\,\mathrm{s} - 0\,\mathrm{s} = 6\,\mathrm{s}$.
3. $v = \dfrac{30\,\mathrm{m}}{6\,\mathrm{s}} = 5\,\mathrm{m/s}$.
4. Enačba gibanja: $s = 5\,\mathrm{m/s} \cdot t$.
5. Preverimo: pri $t = 6\,\mathrm{s}$ je $s = 30\,\mathrm{m}$. ✓
6. Odgovor: hitrost je $5\,\mathrm{m/s}$, enačba gibanja je $s = 5\,\mathrm{m/s} \cdot t$.

### Primer 3 (težji): gibanje z začetnim položajem in dve telesi

Pešec je ob $t = 0$ na mestu $s_0 = 20\,\mathrm{m}$ in hodi s hitrostjo $1{,}5\,\mathrm{m/s}$ v pozitivno smer. Kolesar začne ob $t = 0$ v izhodišču ($s_0 = 0$) in se vozi s hitrostjo $5\,\mathrm{m/s}$ v isto smer. Kdaj kolesar dohiti pešca in kje?

**Podatki:** pešec: $s_{0P} = 20\,\mathrm{m}$, $v_P = 1{,}5\,\mathrm{m/s}$; kolesar: $s_{0K} = 0$, $v_K = 5\,\mathrm{m/s}$; oba začneta ob $t = 0$ in se gibljeta v isto (pozitivno) smer
**Iščemo:** čas $t$ in mesto $s$, kjer kolesar dohiti pešca

:::formula
Enačba gibanja za vsako telo: $s = s_0 + v\,t$; dohitevanje pomeni $s_K = s_P$
:::

**Rešitev:**

1. **Enačbi gibanja** (zakaj: vsako telo ima svojo lego kot funkcijo časa):
   - pešec: $s_P = 20 + 1{,}5\,t$,
   - kolesar: $s_K = 5\,t$.
2. **Dohitevanje** pomeni, da sta na istem mestu: $s_K = s_P$.
3. $5\,t = 20 + 1{,}5\,t$, torej $3{,}5\,t = 20$.
4. $t = \dfrac{20}{3{,}5} \approx 5{,}71\,\mathrm{s}$.
5. Mesto: $s_K = 5 \cdot 5{,}71 \approx 28{,}6\,\mathrm{m}$.
6. **Preverimo** s pešcem: $20 + 1{,}5 \cdot 5{,}71 = 20 + 8{,}57 \approx 28{,}6\,\mathrm{m}$. ✓
7. **Na grafu $s(t)$** se premici sekata v tej točki. Kolesarjeva premica je strmejša, premica pešca pa se začne višje, pri $20\,\mathrm{m}$.
8. Odgovor: kolesar dohiti pešca po približno $5{,}7\,\mathrm{s}$, približno $28{,}6\,\mathrm{m}$ od izhodišča.

## Pogoste napake

- **Graf $s(t)$ zamenjamo s potjo telesa.** Premica, ki gre navzgor, ne pomeni, da se telo vzpenja. Pomeni, da se lega s časom povečuje.
- **Vodoravna črta na $s(t)$ ne pomeni gibanja s stalno hitrostjo.** Pomeni mirovanje ($v = 0$). Vodoravna črta na $v(t)$ pa pomeni stalno hitrost, ki ni nič.
- **Zamenjava osi.** Čas je vedno na vodoravni osi. Če osi zamenjaš, naklon ne da več hitrosti.
- **Enote.** Čas v minutah in hitrost v $\mathrm{m/s}$ ne gresta skupaj. Najprej pretvori: $1\,\mathrm{min} = 60\,\mathrm{s}$.
- **Naklon računamo iz ene točke.** Za $\Delta s / \Delta t$ potrebuješ razliko dveh točk. Če premica ne gre skozi izhodišče, $s/t$ ni hitrost.
- **Pozabljen začetni položaj $s_0$.** Pri $s = s_0 + vt$ je $s_0$ lega ob $t = 0$.

## Povzetek

- Premo enakomerno gibanje: ravna črta, stalna hitrost.
- $v = \dfrac{s}{t}$, $s = v t$, z začetnim položajem $s = s_0 + v t$.
- Graf $s(t)$ je premica, njen naklon je hitrost. Strmejša premica pomeni večjo hitrost, vodoravna pomeni mirovanje.
- Graf $v(t)$ je vodoravna premica.
- Ploščina pod grafom $v(t)$ je enaka prepotovani poti.
- Srečanje dveh teles: izenačimo njuni enačbi gibanja oziroma poiščemo presečišče grafov.

## Drugače: Na sliki

Predstavljaj si dva grafa, enega pod drugim, z isto vodoravno osjo časa.

**Zgornji graf $s(t)$:** premica, ki se dviga od izhodišča. Če izbereš dve točki, narišeš pravokotni trikotnik pod premico. Navpična stranica je $\Delta s$, vodoravna $\Delta t$. Njun količnik je hitrost.

**Spodnji graf $v(t)$:** vodoravna črta na višini $v$. Med $t = 0$ in izbranim časom $t$ nastane pravokotnik s ploščino $v \cdot t$.

Iz tega vidiš povezavo: **naklon zgornjega grafa je višina spodnjega**, **ploščina spodnjega grafa je višina zgornjega**.

Če se hitrost podvoji, je premica na $s(t)$ dvakrat strmejša, črta na $v(t)$ pa dvakrat višja.

## Drugače: Iz vsakdanjega življenja

Pomisli na **tempomat** na avtocesti. Voznik nastavi $90\,\mathrm{km/h}$, to je $25\,\mathrm{m/s}$, in hitrost ostane stalna. Na grafu $v(t)$ je to vodoravna črta.

Vsako sekundo avto prevozi $25\,\mathrm{m}$. Za $10\,\mathrm{s}$ je to $250\,\mathrm{m}$, za $20\,\mathrm{s}$ pa $500\,\mathrm{m}$. Pot raste enakomerno, zato je graf $s(t)$ premica.

Podoben primer so **tekoče stopnice** v veleblagovnici, ki se premikajo s stalno hitrostjo. Če stojiš na njih, se vsako sekundo premakneš za enako razdaljo.

Pri **vožnji skozi mesto** pa hitrost ni stalna, ker se ustavljaš pri semaforjih. Gibanje takrat ni enakomerno in graf $s(t)$ ni ena sama premica.

## Drugače: Korak za korakom s številkami

**Naloga:** Gibanje je podano s tabelo. Ali je enakomerno? Kolikšna je hitrost?

| $t\,(\mathrm{s})$ | 0 | 2 | 4 | 6 |
|---|---|---|---|---|
| $s\,(\mathrm{m})$ | 10 | 16 | 22 | 28 |

1. **Izračunaj spremembe lege** v enakih časovnih korakih: $16 - 10 = 6$, $22 - 16 = 6$, $28 - 22 = 6$ (vsakič v $2\,\mathrm{s}$).
2. **Primerjaj.** Spremembe so enake, zato je gibanje enakomerno. Če bi se razlikovale, ne bi bilo.
3. **Hitrost:** $v = \dfrac{6\,\mathrm{m}}{2\,\mathrm{s}} = 3\,\mathrm{m/s}$.
4. **Začetni položaj:** ob $t = 0$ je $s_0 = 10\,\mathrm{m}$.
5. **Enačba:** $s = 10 + 3\,t$.
6. **Preveri** pri $t = 6\,\mathrm{s}$: $10 + 3 \cdot 6 = 28\,\mathrm{m}$. ✓
7. **Graf $s(t)$:** premica, ki se začne pri $10\,\mathrm{m}$ na navpični osi. **Graf $v(t)$:** vodoravna črta pri $3\,\mathrm{m/s}$.

## Drugače: Bolj natančno

Hitrost telesa je v splošnem definirana kot sprememba lege v času:

$$v = \frac{\Delta s}{\Delta t} = \frac{s_2 - s_1}{t_2 - t_1}$$

Premo enakomerno gibanje je gibanje, pri katerem je ta količnik **enak za vsak izbor** $t_1$ in $t_2$. Če vzamemo $t_1 = 0$ (lega $s_0$) in poljuben $t_2 = t$ (lega $s$), dobimo:

$$v = \frac{s - s_0}{t} \quad\Rightarrow\quad s = s_0 + v\,t$$

To je enačba premice $y = k x + n$, kjer je $k = v$ (naklon) in $n = s_0$ (presečišče z navpično osjo). Zato je graf $s(t)$ res premica.

Če je $v < 0$, premica pada. Telo se giblje v negativno smer. Hitrost je torej **vektorska** količina, ki ima predznak glede na izbrano smer. Pot (dolžina prehojene poti) pa se ne more zmanjševati.

Ploščina pod $v(t)$: če je $v$ stalna, je lik med grafom, osjo $t$ in navpičnicama pri $0$ in $t$ pravokotnik s ploščino $v t$, kar je ravno $s - s_0$ (sprememba lege).

## Preveri se

? Kaj pove naklon premice na grafu $s(t)$ pri premem enakomernem gibanju?
- Prepotovano pot.
+ Hitrost telesa.
- Čas gibanja.
- Pospešek telesa.
> Naklon je $\Delta s / \Delta t$, to pa je po definiciji hitrost. Pot je navpična koordinata na grafu, ne naklon.

? Kako izgleda graf $v(t)$ pri premem enakomernem gibanju s hitrostjo $4\,\mathrm{m/s}$?
- Premica skozi izhodišče, ki narašča.
- Vodoravna črta pri $0\,\mathrm{m/s}$.
+ Vodoravna črta pri $4\,\mathrm{m/s}$.
> Hitrost je stalna, zato je graf vodoravna črta na višini $4\,\mathrm{m/s}$. Naraščajoča premica bi pomenila spreminjajočo se hitrost, črta pri $0$ pa mirovanje.

? Telo se enakomerno giblje s hitrostjo $3\,\mathrm{m/s}$ v času od $0$ do $8\,\mathrm{s}$. Kolikšna je ploščina pod grafom $v(t)$ in kaj pomeni?
- $11\,\mathrm{m}$, pomeni prepotovano pot.
- $24\,\mathrm{m/s}$, pomeni hitrost.
+ $24\,\mathrm{m}$, pomeni prepotovano pot.
- $24\,\mathrm{m}$, pomeni čas gibanja.
> Pod grafom je pravokotnik s stranicama $3\,\mathrm{m/s}$ in $8\,\mathrm{s}$, torej ploščina $3 \cdot 8 = 24\,\mathrm{m}$. To je prepotovana pot, saj je $s = v t$.

:::simboli
v | hitrost | v = \dfrac{\Delta s}{\Delta t} | m/s
s | lega (pot od izhodišča) | s = s_0 + v\,t | m
s_0 | začetna lega | | m | pogosto vzamemo s₀ = 0
t | čas | | s
s_1, s_2 | legi ob časih t₁ in t₂ | | m
t_1, t_2 | časa dveh opazovanj | | s
s_K | lega kolesarja | | m
s_P | lega pešca | | m
:::
