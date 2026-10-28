---
stanje: osnutek
phet: forces-and-motion-basics
avtor: AI
---

## Zakaj se tega učimo

Že veš, da je **sila** merilo za medsebojno delovanje teles, da jo merimo v newtonih ($\text{N}$) in da jo narišemo kot puščico, ki ima velikost, smer in prijemališče. Veš tudi, da je teža sila, s katero Zemlja privlači telesa, in da trenje deluje proti gibanju.

Zdaj se vprašamo: **kaj sila sploh naredi s telesom?** Zakaj se žoga na tleh ustavi, vesoljska sonda pa se brez motorja giblje milijone kilometrov? Zakaj je težje pospešiti poln nakupovalni voziček kot prazen? Zakaj te ob odrivu od zidu odnese nazaj?

Na ta vprašanja odgovarjajo **trije Newtonovi zakoni**. Z njimi razložimo vožnjo avtomobila, skok v vodo, izstrelitev rakete in tudi, zakaj moraš v avtu pripeti pas.

## Razlaga

**1. Prvi zakon: zakon o ravnovesju (vztrajnostni zakon).**
Telo miruje ali se enakomerno giblje po premici, dokler je vsota vseh sil nanj enaka nič.

To pomeni:

- Če je **rezultanta** (vsota vseh sil) enaka nič, se hitrost telesa ne spreminja. Telo, ki je mirovalo, še naprej miruje. Telo, ki se je gibalo, se še naprej giblje z enako hitrostjo v enako smer.
- Pravimo, da so sile v **ravnovesju**.
- Lastnosti telesa, da se upira spremembi gibanja, pravimo **vztrajnost** (tromost). Večja ko je masa, večja je vztrajnost.

Pogosta zmota je, da za gibanje vedno potrebujemo silo. Ni res: za *enakomerno gibanje* sila ni potrebna, potrebna je za *spremembo* gibanja. Predmet na ledu zdrsi daleč, ker je trenje majhno. Na grobih tleh se hitro ustavi, ker ga zavira trenje.

**2. Drugi zakon: $F = m \cdot a$.**
Če je rezultanta sil na telo različna od nič, telo pospešuje. Pospešek je premo sorazmeren rezultanti in obratno sorazmeren masi:

$$a = \frac{F}{m} \qquad\text{oziroma}\qquad F = m \cdot a$$

- $F$ je rezultanta sil v newtonih ($\text{N}$),
- $m$ je masa v kilogramih ($\text{kg}$),
- $a$ je pospešek v $\dfrac{\text{m}}{\text{s}^2}$.

Pospešek ima **isto smer kot rezultanta**. Velja $1\,\text{N} = 1\,\dfrac{\text{kg}\cdot\text{m}}{\text{s}^2}$: sila $1\,\text{N}$ telesu z maso $1\,\text{kg}$ da pospešek $1\,\dfrac{\text{m}}{\text{s}^2}$.

Iz tega sledi:

- dvakrat večja sila na isto telo da dvakrat večji pospešek,
- dvakrat večja masa pri isti sili da dvakrat manjši pospešek.

**3. Teža.** Pri prosto padajočem telesu je edina sila teža $F_g$, pospešek pa je težni pospešek $g \approx 10\,\dfrac{\text{m}}{\text{s}^2}$. Iz $F = m \cdot a$ sledi

$$F_g = m \cdot g.$$

Telo z maso $1\,\text{kg}$ ima težo približno $10\,\text{N}$.

**4. Rezultanta.** Sile v isti smeri seštejemo, sile v nasprotnih smereh odštejemo. Če vlečeš škatlo z $30\,\text{N}$ v desno, trenje pa jo zavira s $10\,\text{N}$ v levo, je rezultanta $20\,\text{N}$ v desno.

**5. Tretji zakon: zakon o vzajemnem učinku.**
Če prvo telo deluje na drugo telo s silo, drugo telo deluje na prvo z **enako veliko, a nasprotno usmerjeno silo**:

$$\vec F_{1\to 2} = -\vec F_{2\to 1}$$

Pomembno:

- Sili sta vedno **par**: nastaneta in izgineta hkrati.
- Sili sta enako veliki, nasprotno usmerjeni in ležita na isti premici.
- Prijemališči imata na **različnih telesih**. Zato se med seboj ne izničita, saj ju ne seštevamo za isto telo.

Primer: ko stojiš na tleh, na tla pritiskaš s silo (enako veliko, kot je tvoja teža), tla pa nate delujejo z enako veliko silo navzgor.

## Rešeni primeri

### Primer 1 (lažji): pospešek vozička

Na voziček z maso $4\,\text{kg}$ deluje vodoravna rezultanta $12\,\text{N}$. Kolikšen je pospešek?

**Podatki:** $m = 4\,\text{kg}$, $F = 12\,\text{N}$ (vodoravna rezultanta)
**Iščemo:** pospešek $a$

:::formula
Drugi Newtonov zakon: $a = \dfrac{F}{m}$
:::

**Rešitev:**

1. Uporabimo drugi zakon, ker nas zanima pospešek zaradi sile: $a = \dfrac{F}{m}$.
2. Vstavimo: $a = \dfrac{12\,\text{N}}{4\,\text{kg}} = 3\,\dfrac{\text{m}}{\text{s}^2}$.
3. Smiselnost: pospešek ima smer sile in je v številčni vrednosti manjši od sile, ker je masa večja od $1\,\text{kg}$. ✓
4. Odgovor: voziček pospešuje s $3\,\dfrac{\text{m}}{\text{s}^2}$ v smeri rezultante.

### Primer 2: rezultanta s trenjem

Škatlo z maso $5\,\text{kg}$ vlečeš po tleh z vodoravno silo $35\,\text{N}$. Trenje je $10\,\text{N}$. Kolikšen je pospešek škatle?

**Podatki:** $m = 5\,\text{kg}$, vlečna sila $F_1 = 35\,\text{N}$ (vodoravna), trenje $F_{\text{tr}} = 10\,\text{N}$
**Iščemo:** pospešek škatle $a$

:::formula
Rezultanta nasprotno usmerjenih sil: $F = F_1 - F_{\text{tr}}$, nato drugi Newtonov zakon: $a = \dfrac{F}{m}$
:::

**Rešitev:**

1. **Sile v vodoravni smeri:** vlečna sila $35\,\text{N}$ naprej, trenje $10\,\text{N}$ nazaj.
2. **Rezultanta:** sili sta nasprotni, zato odštejemo: $F = 35\,\text{N} - 10\,\text{N} = 25\,\text{N}$.
3. **Navpična smer:** teža in sila podlage se izničita, zato škatla ne pospešuje navpično in ju ne potrebujemo.
4. **Drugi zakon:** $a = \dfrac{F}{m} = \dfrac{25\,\text{N}}{5\,\text{kg}} = 5\,\dfrac{\text{m}}{\text{s}^2}$.
5. **Preverimo:** če bi uporabili samo $35\,\text{N}$, bi dobili $7\,\dfrac{\text{m}}{\text{s}^2}$, kar je preveč, saj trenje zavira.
6. **Odgovor:** škatla pospešuje s $5\,\dfrac{\text{m}}{\text{s}^2}$ v smeri vlečne sile.

### Primer 3 (težji): sila in gibanje iz mirovanja

Avto z maso $1000\,\text{kg}$ miruje. Motor ga potiska naprej s silo $2500\,\text{N}$, upor in trenje skupaj zavirata s silo $500\,\text{N}$. Kolikšno hitrost ima avto po $6\,\text{s}$?

**Podatki:** $m = 1000\,\text{kg}$, začetna hitrost $v_0 = 0$ (avto miruje), sila motorja $F_1 = 2500\,\text{N}$, zaviralna sila (upor in trenje) $F_2 = 500\,\text{N}$, $t = 6\,\text{s}$
**Iščemo:** hitrost $v$ po $6\,\text{s}$

:::formula
Rezultanta: $F = F_1 - F_2$, pospešek: $a = \dfrac{F}{m}$, hitrost pri gibanju iz mirovanja: $v = a \cdot t$
:::

**Rešitev:**

1. **Rezultanta:** $F = 2500\,\text{N} - 500\,\text{N} = 2000\,\text{N}$.
2. **Pospešek:** $a = \dfrac{F}{m} = \dfrac{2000\,\text{N}}{1000\,\text{kg}} = 2\,\dfrac{\text{m}}{\text{s}^2}$.
3. **Pomen pospeška:** hitrost se vsako sekundo poveča za $2\,\dfrac{\text{m}}{\text{s}}$.
4. **Hitrost:** $v = a \cdot t = 2\,\dfrac{\text{m}}{\text{s}^2}\cdot 6\,\text{s} = 12\,\dfrac{\text{m}}{\text{s}}$ (začetna hitrost je nič).
5. **Odgovor:** po $6\,\text{s}$ je hitrost $12\,\dfrac{\text{m}}{\text{s}}$, kar je $43{,}2\,\dfrac{\text{km}}{\text{h}}$.

## Pogoste napake

- **»Brez sile ni gibanja.«** Narobe. Brez rezultante se telo giblje enakomerno naprej. Sila je potrebna za spremembo hitrosti.
- **Ravnovesje pomeni mirovanje.** Ne nujno. Ravnovesje pomeni, da je rezultanta nič; telo lahko miruje ali se enakomerno giblje.
- **Pozabljeno trenje.** V $F = m \cdot a$ vstavljamo **rezultanto**, ne le ene sile.
- **Sili akcije in reakcije se izničita.** Ne, ker delujeta na različni telesi. Izničita se lahko le sili na isto telo (npr. teža in sila podlage pri knjigi na mizi, a to ni par po tretjem zakonu).
- **Mešanje mase in teže.** Masa je v $\text{kg}$, teža pa sila v $\text{N}$: $F_g = m \cdot g$.
- **Enote.** Pred računom pretvori vse v $\text{kg}$, $\text{m}$, $\text{s}$.

## Povzetek

- **1. zakon:** če je rezultanta sil nič, telo miruje ali se enakomerno giblje po premici. Vztrajnost je lastnost telesa, da se upira spremembi gibanja.
- **2. zakon:** $F = m \cdot a$, pospešek ima smer rezultante. $1\,\text{N} = 1\,\dfrac{\text{kg}\cdot\text{m}}{\text{s}^2}$.
- **Teža:** $F_g = m \cdot g$, $g \approx 10\,\dfrac{\text{m}}{\text{s}^2}$.
- **3. zakon:** sili vzajemnega učinka sta enako veliki, nasprotno usmerjeni in delujeta na različni telesi.
- Pri nalogah najprej določi vse sile, nato rezultanto, nato uporabi $a = F/m$.

## Drugače: Na sliki

Nariši škatlo kot kvadrat in vse sile kot puščice, ki izhajajo iz njega:

- teža $F_g$ navzdol,
- sila podlage navzgor,
- vlečna sila v desno,
- trenje v levo.

Dolžina puščice pove velikost sile. Če sta navpični puščici enako dolgi, se škatla v navpični smeri ne giblje. Če je puščica v desno daljša od puščice v levo, je rezultanta v desno in škatla pospešuje v desno.

V interaktivni simulaciji spodaj postavi na vrv dve enako močni ekipi: sili se izravnata in voziček miruje (1. zakon). Če eni ekipi dodaš člana, rezultanta ni več nič in voziček začne pospeševati (2. zakon). V zavihku »Pospešek« opaziš, da večja masa pri isti sili pomeni manjši pospešek.

## Drugače: Iz vsakdanjega življenja

- **Avto in pas:** ko avto močno zavre, tvoje telo zaradi vztrajnosti nadaljuje gibanje naprej. Pas ti da silo, ki te ustavi. Brez pasu bi te ustavilo šele vetrobransko steklo.
- **Voziček v trgovini:** prazen voziček pospešiš z majhno silo, poln pa potrebuje veliko večjo, če hočeš enak pospešek. To je $F = m \cdot a$.
- **Plavanje:** z rokami potiskaš vodo nazaj, voda pa potiska tebe naprej. To je tretji zakon.
- **Balon:** izpuščen napihnjen balon odleti, ker zrak izhaja nazaj, balon pa dobi silo naprej.
- **Poskok:** ko poskočiš, odrineš tla navzdol, tla pa odrinejo tebe navzgor.

## Drugače: Korak za korakom s številkami

Primerjajmo pospešek pri različnih silah in masah z enačbo $a = F/m$:

| Masa $m$ | Rezultanta $F$ | Pospešek $a$ |
|---|---|---|
| $2\,\text{kg}$ | $10\,\text{N}$ | $5\,\dfrac{\text{m}}{\text{s}^2}$ |
| $2\,\text{kg}$ | $20\,\text{N}$ | $10\,\dfrac{\text{m}}{\text{s}^2}$ |
| $4\,\text{kg}$ | $20\,\text{N}$ | $5\,\dfrac{\text{m}}{\text{s}^2}$ |
| $4\,\text{kg}$ | $0\,\text{N}$ | $0\,\dfrac{\text{m}}{\text{s}^2}$ |

Preberi tabelo:

- Vrstica 1 in 2: sila se podvoji, pospešek se podvoji.
- Vrstica 2 in 3: masa se podvoji, pospešek se prepolovi.
- Zadnja vrstica: rezultanta nič pomeni pospešek nič (1. zakon).

Recept za naloge:

1. Nariši telo in vse sile.
2. Določi rezultanto v smeri gibanja (seštej, odštej).
3. Pretvori enote.
4. Izračunaj $a = F/m$.
5. Preveri smer in velikost.

## Drugače: Bolj natančno

Prvi zakon je poseben primer drugega: če je $F = 0$, je $a = 0$, torej se hitrost ne spreminja. Vendar ima samostojno vlogo, ker pove, da sploh obstajajo sistemi (inercialni), v katerih zakoni veljajo v tej obliki.

Drugi zakon je v splošni obliki zapisan z gibalno količino $p = m \cdot v$: rezultanta je enaka časovni spremembi gibalne količine. Če je masa stalna, se to poenostavi v $F = m \cdot a$. Tega zapisa v 9. razredu ne potrebuješ.

Pri tretjem zakonu je ključno vprašanje, na katero telo delujeta sili. Knjiga miruje na mizi. Sili na **knjigo** sta teža (Zemlja deluje na knjigo) in sila mize navzgor. Ti sili se izničita, ker delujeta na isto telo, vendar nista par po tretjem zakonu, saj ju povzročata različni telesi. Pravi par teže je sila, s katero knjiga privlači Zemljo. Pravi par sile mize na knjigo je sila, s katero knjiga pritiska na mizo.

Ker je masa Zemlje ogromna, enaka sila Zemlji da zanemarljiv pospešek, žogi pa velik pospešek. Zato opazimo padanje žoge, ne pa premikanja Zemlje.

## Preveri se

? Škatla se po ravnih tleh giblje s stalno hitrostjo $2\,\dfrac{\text{m}}{\text{s}}$. Kaj lahko rečemo o silah na škatlo v vodoravni smeri?
- Vlečna sila je večja od trenja.
- Na škatlo v vodoravni smeri ne deluje nobena sila.
+ Rezultanta sil je enaka nič.
- Trenje je večje od vlečne sile.
> Pri stalni hitrosti je pospešek nič, zato je po prvem zakonu rezultanta nič. Sili (vlečna in trenje) sta lahko obe prisotni, le enako veliki in nasprotni.

? Na telo z maso $3\,\text{kg}$ deluje rezultanta $12\,\text{N}$. Kolikšen je pospešek?
- $36\,\dfrac{\text{m}}{\text{s}^2}$
- $0{,}25\,\dfrac{\text{m}}{\text{s}^2}$
+ $4\,\dfrac{\text{m}}{\text{s}^2}$
- $9\,\dfrac{\text{m}}{\text{s}^2}$
> $a = \dfrac{F}{m} = \dfrac{12\,\text{N}}{3\,\text{kg}} = 4\,\dfrac{\text{m}}{\text{s}^2}$. Odgovor $36$ dobiš, če pomnožiš namesto deliš, odgovor $0{,}25$ pa, če deliš narobe obrnjeno.

? Odrineš se od zidu in zdrsneš nazaj. Katera trditev pravilno razloži pojav?
- Zid deluje na tebe z manjšo silo, kot ti nanj.
+ Zid deluje na tebe z enako veliko, nasprotno usmerjeno silo, kot ti nanj.
- Zid ne deluje na tebe s silo, ker miruje.
> Po tretjem zakonu sta sili vzajemnega učinka vedno enako veliki in nasprotno usmerjeni. Zid miruje, a vseeno deluje s silo na tvoje roke.
