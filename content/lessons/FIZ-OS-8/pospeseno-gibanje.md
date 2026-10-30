---
stanje: osnutek
demo: prosti-pad
avtor: AI
---

## Zakaj se tega učimo

Že znaš, da je hitrost podatek o tem, kako hitro se telo giblje: $v = \dfrac{s}{t}$. Pri enakomernem gibanju je hitrost ves čas enaka. V resnici pa se skoraj nič ne giblje tako. Avto ob semaforju spelje iz mirovanja in hitrost postopoma povečuje, kolesar pred ovinkom zavira, kamen, ki ga spustiš, pada vedno hitreje.

Zato potrebujemo novo količino, ki pove, **kako hitro se spreminja hitrost**. Imenujemo jo **pospešek**. Z njim lahko napovemo, kako hitra bo vožnja po nekaj sekundah, kako daleč bo telo prišlo in kako dolgo bo padal predmet, ki ga spustimo z balkona.

## Razlaga

**1. Pospešeno gibanje.** Gibanje, pri katerem se hitrost telesa spreminja, je **pospešeno gibanje**. V tej lekciji obravnavamo telesa, ki se gibljejo po premi črti in začnejo iz mirovanja.

**2. Pospešek.** Pospešek pove, za koliko se hitrost spremeni v eni sekundi:

$$a = \frac{\Delta v}{\Delta t}$$

Pri tem je $\Delta v$ sprememba hitrosti, $\Delta t$ pa čas, v katerem se hitrost spremeni. Enota pospeška je $\dfrac{\text{m/s}}{\text{s}} = \dfrac{\text{m}}{\text{s}^2}$, zapišemo $\mathrm{m/s^2}$.

*Primer pomena:* pospešek $3\,\mathrm{m/s^2}$ pomeni, da se hitrost vsako sekundo poveča za $3\,\mathrm{m/s}$.

**3. Enakomerno pospešeno gibanje.** To je gibanje, pri katerem je pospešek ves čas **enak**. Hitrost torej narašča enakomerno: v vsaki sekundi za enak prirastek.

**4. Hitrost po času $t$.** Če telo začne iz mirovanja ($v_0 = 0$), velja:

$$v = a \cdot t$$

**5. Prevožena pot.** Pri gibanju iz mirovanja velja:

$$s = \frac{a \cdot t^2}{2}$$

Pot ne narašča sorazmerno s časom, ampak s **kvadratom časa**. Če je čas dvakrat daljši, je pot štirikrat daljša.

**6. Prosti pad.** Telo, ki ga spustimo in nanj deluje samo težnost (zanemarimo zračni upor), pada enakomerno pospešeno. Ta pospešek imenujemo **težnostni pospešek** $g$. Na Zemlji je približno $g \approx 10\,\mathrm{m/s^2}$ (natančneje $9{,}8\,\mathrm{m/s^2}$), na Luni približno $1{,}6\,\mathrm{m/s^2}$, na Marsu približno $3{,}7\,\mathrm{m/s^2}$. Pri prostem padu v formule namesto $a$ vstavimo $g$.

## Rešeni primeri

### Primer 1: izračun pospeška

Avto se iz mirovanja v $5\,\text{s}$ zapelje do hitrosti $20\,\mathrm{m/s}$. Kolikšen je pospešek?

**Podatki:** $v_0 = 0$ (iz mirovanja), $v = 20\,\mathrm{m/s}$, $\Delta t = 5\,\text{s}$
**Iščemo:** pospešek $a$

:::formula
$a = \dfrac{\Delta v}{\Delta t}$, kjer je $\Delta v = v - v_0$
:::

**Rešitev:**

1. Hitrost se je spremenila od $0$ do $20\,\mathrm{m/s}$, torej $\Delta v = 20\,\mathrm{m/s}$.
2. Čas spremembe je $\Delta t = 5\,\text{s}$.
3. Uporabimo definicijo pospeška: $a = \dfrac{\Delta v}{\Delta t} = \dfrac{20\,\mathrm{m/s}}{5\,\text{s}} = 4\,\mathrm{m/s^2}$.
4. Smiselnost: vsako sekundo se hitrost poveča za $4\,\mathrm{m/s}$. Po $5$ sekundah je to $5 \cdot 4 = 20\,\mathrm{m/s}$. ✓

### Primer 2: hitrost in pot

Kolesar se iz mirovanja pospešuje s pospeškom $0{,}5\,\mathrm{m/s^2}$. Kolikšna je njegova hitrost in kolikšno pot prevozi v $8\,\text{s}$?

**Podatki:** $v_0 = 0$ (iz mirovanja), $a = 0{,}5\,\mathrm{m/s^2}$, $t = 8\,\text{s}$
**Iščemo:** hitrost $v$ in pot $s$ po $8\,\text{s}$

:::formula
$v = a \cdot t$, $s = \dfrac{a \cdot t^2}{2}$
:::

**Rešitev:**

1. **Hitrost.** Začel je iz mirovanja, zato $v = a \cdot t = 0{,}5 \cdot 8 = 4\,\mathrm{m/s}$.
2. **Pot.** $s = \dfrac{a t^2}{2} = \dfrac{0{,}5 \cdot 8^2}{2} = \dfrac{0{,}5 \cdot 64}{2} = \dfrac{32}{2} = 16\,\text{m}$.
3. **Preverimo.** Hitrost je rasla od $0$ do $4\,\mathrm{m/s}$, zato je bila povprečna hitrost $\dfrac{0 + 4}{2} = 2\,\mathrm{m/s}$. Pot je $2 \cdot 8 = 16\,\text{m}$. ✓
4. **Odgovor.** Po $8\,\text{s}$ ima hitrost $4\,\mathrm{m/s}$ in prevozi $16\,\text{m}$.

### Primer 3: prosti pad na Zemlji in Luni

Astronavt spusti kladivo z višine $20\,\text{m}$. Kako dolgo pada in s kolikšno hitrostjo zadene tla, če je to (a) na Zemlji ($g = 10\,\mathrm{m/s^2}$), (b) na Luni ($g = 1{,}6\,\mathrm{m/s^2}$)? Zračni upor zanemari.

**Podatki:** višina $s = 20\,\text{m}$, $v_0 = 0$ (kladivo spusti); a) Zemlja $g = 10\,\mathrm{m/s^2}$, b) Luna $g = 1{,}6\,\mathrm{m/s^2}$; zračni upor zanemarimo
**Iščemo:** čas padanja $t$ in hitrost ob tleh $v$ na Zemlji in na Luni

:::formula
$s = \dfrac{g \cdot t^2}{2}$, od tod $t^2 = \dfrac{2s}{g}$; nato $v = g \cdot t$
:::

**Rešitev:**

1. **Preoblikujemo formulo za pot.** Iz $s = \dfrac{g t^2}{2}$ sledi $t^2 = \dfrac{2s}{g}$. To storimo, ker poznamo pot, iščemo pa čas.
2. **(a) Zemlja.** $t^2 = \dfrac{2 \cdot 20}{10} = 4$, zato $t = \sqrt{4} = 2\,\text{s}$. Hitrost ob tleh: $v = g t = 10 \cdot 2 = 20\,\mathrm{m/s}$.
3. **(b) Luna.** $t^2 = \dfrac{2 \cdot 20}{1{,}6} = \dfrac{40}{1{,}6} = 25$, zato $t = \sqrt{25} = 5\,\text{s}$. Hitrost ob tleh: $v = g t = 1{,}6 \cdot 5 = 8\,\mathrm{m/s}$.
4. **Odgovor.** Na Zemlji pada $2\,\text{s}$ in zadene tla z $20\,\mathrm{m/s}$, na Luni pada $5\,\text{s}$ in zadene tla z $8\,\mathrm{m/s}$. Ker je težnostni pospešek na Luni manjši, pada počasneje in pristane z manjšo hitrostjo.

## Pogoste napake

- **Mešanje hitrosti in pospeška.** Hitrost ($\mathrm{m/s}$) pove, kako hitro se telo giblje. Pospešek ($\mathrm{m/s^2}$) pove, kako hitro se spreminja hitrost. Telo z veliko hitrostjo ima lahko pospešek $0$.
- **Pozabljeno deljenje z $2$ pri poti.** Formula je $s = \dfrac{a t^2}{2}$. Brez deljenja z $2$ je pot dvakrat prevelika.
- **Kvadrat samo pri času ali pri celem produktu.** V formuli za pot se kvadrira samo čas: $t^2$, ne $(a t)^2$.
- **Napačna enota.** Pospešek ni v $\mathrm{m/s}$, ampak v $\mathrm{m/s^2}$. Čas moraš imeti v sekundah, ne v minutah.
- **Misel, da težja telesa v vakuumu padajo hitreje.** Pri prostem padu je pospešek $g$ enak za vsa telesa. Razlike v resničnem življenju povzroča zračni upor.

## Povzetek

- Pospešek pove, za koliko se hitrost spremeni v eni sekundi: $a = \dfrac{\Delta v}{\Delta t}$, enota $\mathrm{m/s^2}$.
- Pri enakomerno pospešenem gibanju je pospešek stalen, hitrost pa narašča enakomerno.
- Iz mirovanja velja $v = a t$ in $s = \dfrac{a t^2}{2}$.
- Prosti pad je enakomerno pospešeno gibanje s pospeškom $g$: približno $10\,\mathrm{m/s^2}$ na Zemlji, $1{,}6\,\mathrm{m/s^2}$ na Luni in $3{,}7\,\mathrm{m/s^2}$ na Marsu.
- Če je čas dvakrat daljši, je pot štirikrat daljša.

## Drugače: Na sliki

V simulaciji »Prosti pad na Zemlji, Luni in Marsu« spodaj spustiš telo na Zemlji, Luni in Marsu ter opazuješ, kako pada. Na vseh treh nebesnih telesih začne telo iz mirovanja, a se hitrost povečuje različno hitro. Na Zemlji (največji $g$) telo pade najhitreje, na Marsu počasneje, na Luni najpočasneje.

Opazuj dvoje:

- **Razmaki med položaji** v enakih časovnih presledkih so vedno večji. To pomeni, da je telo vse hitrejše: v vsaki naslednji sekundi prepotuje daljšo pot kot v prejšnji.
- **Isti čas, različna pot.** Po enakem času je telo na Zemlji padlo veliko niže kot na Luni. Pot je sorazmerna z $g$, zato se razmerje med potmi ujema z razmerjem težnostnih pospeškov.

Če narišeš graf hitrosti v odvisnosti od časa ($v$–$t$ graf), dobiš **premico, ki gre iz izhodišča**. Večji ko je pospešek, bolj strma je ta premica.

## Drugače: Iz vsakdanjega življenja

**Semafor.** Ko se prižge zelena, voznik pritisne na plin. Po $1\,\text{s}$ ima avto majhno hitrost, po $2\,\text{s}$ večjo, po $3\,\text{s}$ še večjo. Če je pospešek $2\,\mathrm{m/s^2}$, ima avto po $1\,\text{s}$ hitrost $2\,\mathrm{m/s}$, po $2\,\text{s}$ $4\,\mathrm{m/s}$, po $3\,\text{s}$ $6\,\mathrm{m/s}$. Vsako sekundo hitrost naraste za enako vrednost. To je enakomerno pospešeno gibanje.

**Skok v vodo.** Skakalec s trimetrske skakalne deske zadene vodo z večjo hitrostjo kot otrok, ki skoči z roba bazena. Pada namreč dlje časa, hitrost pa med padanjem ves čas narašča.

**Primerjava.** Pospešek je za hitrost to, kar je hitrost za pot. Hitrost pove, koliko poti telo prepotuje v eni sekundi, pospešek pa, koliko hitrosti se doda v eni sekundi.

## Drugače: Korak za korakom s številkami

Telo se iz mirovanja pospešuje s pospeškom $a = 2\,\mathrm{m/s^2}$. Poglejmo, kako se spreminjata hitrost in pot:

| čas $t$ (s) | hitrost $v = a t$ (m/s) | pot $s = \dfrac{a t^2}{2}$ (m) |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 2 | 1 |
| 2 | 4 | 4 |
| 3 | 6 | 9 |
| 4 | 8 | 16 |

Kaj opaziš?

1. Hitrost raste za $2\,\mathrm{m/s}$ vsako sekundo, torej enakomerno.
2. Pot raste vse hitreje: $1,\ 4,\ 9,\ 16$ so kvadrati časa. To pomeni, da je $s = t^2$ (pri $a = 2$ velja $\dfrac{2 t^2}{2} = t^2$).
3. V posamezni sekundi telo prepotuje vse več: v 1. sekundi $1\,\text{m}$, v 2. sekundi $4 - 1 = 3\,\text{m}$, v 3. sekundi $9 - 4 = 5\,\text{m}$, v 4. sekundi $16 - 9 = 7\,\text{m}$.

Recept za nalogo:

1. Izpiši znane podatke ($a$, $t$, ali $v$, ali $s$) in preveri enote.
2. Če iščeš hitrost, uporabi $v = a t$.
3. Če iščeš pot, uporabi $s = \dfrac{a t^2}{2}$.
4. Če iščeš pospešek, uporabi $a = \dfrac{\Delta v}{\Delta t}$.
5. Preveri, ali je rezultat smiseln (npr. hitrost ni nenadoma $1000\,\mathrm{m/s}$ za kolesarja).

## Drugače: Bolj natančno

Zakaj je pot enaka $s = \dfrac{a t^2}{2}$?

Pri gibanju iz mirovanja hitrost narašča od $0$ do $v = a t$. Ker narašča enakomerno, je **povprečna hitrost** sredina med začetno in končno:

$$v_{\text{povp}} = \frac{0 + a t}{2} = \frac{a t}{2}$$

Pot je enaka povprečni hitrosti, pomnoženi s časom:

$$s = v_{\text{povp}} \cdot t = \frac{a t}{2} \cdot t = \frac{a t^2}{2}$$

Isto vidimo na grafu $v$–$t$. Pot je enaka **ploščini pod grafom**. Pod premico od $0$ do $t$ nastane pravokotni trikotnik z osnovnico $t$ in višino $v = a t$. Njegova ploščina je $\dfrac{t \cdot a t}{2} = \dfrac{a t^2}{2}$.

Ta izpeljava velja le za enakomerno pospešeno gibanje, kjer povprečna hitrost leži natanko na sredini. Pri gibanju s spreminjajočim se pospeškom tako ne moremo računati.

## Preveri se

? Kaj pomeni, da ima telo pospešek $3\,\mathrm{m/s^2}$?
- Telo se giblje s hitrostjo $3\,\mathrm{m/s}$.
- Hitrost telesa se vsako sekundo poveča $3$-krat.
+ Hitrost telesa se vsako sekundo poveča za $3\,\mathrm{m/s}$.
- Telo vsako sekundo prepotuje $3\,\text{m}$.
> Pospešek pove spremembo hitrosti v eni sekundi. Pospešek $3\,\mathrm{m/s^2}$ torej pomeni, da hitrost vsako sekundo naraste za $3\,\mathrm{m/s}$. Hitrost in prepotovana pot v sekundi sta drugi količini.

? Vlak se iz mirovanja pospešuje s pospeškom $2\,\mathrm{m/s^2}$. Kolikšna je njegova hitrost po $6\,\text{s}$?
- $3\,\mathrm{m/s}$
- $8\,\mathrm{m/s}$
- $72\,\mathrm{m/s}$
+ $12\,\mathrm{m/s}$
> $v = a t = 2 \cdot 6 = 12\,\mathrm{m/s}$. Odgovor $72$ dobiš, če čas kvadriraš ($2 \cdot 36$), kar velja za pot, ne za hitrost.

? Telo se iz mirovanja pospešuje s pospeškom $2\,\mathrm{m/s^2}$. Kolikšno pot prepotuje v $4\,\text{s}$?
- $8\,\text{m}$
- $32\,\text{m}$
+ $16\,\text{m}$
> $s = \dfrac{a t^2}{2} = \dfrac{2 \cdot 16}{2} = 16\,\text{m}$. Odgovor $8\,\text{m}$ dobiš z množenjem $a \cdot t$, odgovor $32\,\text{m}$ pa, če pozabiš deliti z $2$.

:::simboli
a | pospešek | a = \dfrac{\Delta v}{\Delta t} | m/s^2
v | hitrost | v = a \cdot t | m/s | pri prostem padu v = g · t
v_0 | začetna hitrost | | m/s | iz mirovanja je v₀ = 0
v_{\text{povp}} | povprečna hitrost | v_{\text{povp}} = \frac{a t}{2} | m/s | velja pri gibanju iz mirovanja
t | čas | | s
s | pot | s = \dfrac{a \cdot t^2}{2} | m | velja pri gibanju iz mirovanja
g | težnostni pospešek | | m/s^2 | na Zemlji približno 10 m/s²
:::
