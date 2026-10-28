---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz vsakdanjega življenja že veš, da je nekaj težko ali lahko. V trgovini kupiš kilogram moke, na tehtnici pa vidiš številko v kilogramih. Pogosto rečemo, da je »teža moke en kilogram«. V fiziki pa to ni povsem pravilno: kilogram je enota za **maso**, **teža** pa je nekaj drugega.

Že iz prejšnjih tem veš, da sila spremeni gibanje ali obliko telesa in da jo merimo v newtonih ($\text{N}$). Zdaj bomo spoznali eno najpogostejših sil, to je težo, ter razumeli, zakaj ni isto kot masa. To je pomembno, ker:

- astronavt na Luni ni »lažji« v smislu mase, vendar je njegova teža manjša,
- inženir mora vedeti, kolikšno silo prenese most ali vrv,
- pri vsakem tehtanju moraš vedeti, kaj dejansko meriš.

## Razlaga

**1. Masa.** Masa ($m$) pove, **koliko snovi** ima telo. Merimo jo v kilogramih ($\text{kg}$). Masa telesa je povsod enaka: na Zemlji, na Luni ali v vesolju. Masa je skalar, torej ima samo velikost.

**2. Gravitacijska sila.** Zemlja vsa telesa privlači proti svojemu središču. Tej sili rečemo **gravitacijska sila** (težnost). Deluje na vsa telesa v bližini Zemlje, tudi če se jih ne dotika.

**3. Teža.** **Teža** ($F_g$) je sila, s katero Zemlja privlači telo. Merimo jo v newtonih ($\text{N}$). Ker je teža sila, ima **velikost in smer**: kaže navpično navzdol, proti središču Zemlje.

**4. Povezava med težo in maso.** Teža je sorazmerna z maso. Dvakrat večja masa pomeni dvakrat večjo težo. Faktor sorazmernosti je **gravitacijski pospešek** $g$:

$$F_g = m \cdot g$$

Na Zemlji je

$$g = 9{,}81\,\dfrac{\text{N}}{\text{kg}}$$

To pomeni: Zemlja privlači vsak kilogram mase s silo $9{,}81\,\text{N}$. Za silo $1\,\text{N}$ je dovolj telo z maso približno $100\,\text{g}$ (natančneje $0{,}102\,\text{kg}$).

**5. Izražanje mase iz teže.** Če poznaš težo, lahko izračunaš maso:

$$m = \dfrac{F_g}{g}$$

**6. Teža ni povsod enaka.** Na Luni je $g$ približno šestkrat manjši kot na Zemlji, zato je tam teža istega telesa manjša, masa pa ostane enaka.

**7. Tehtnica in merjenje.** Domača tehtnica meri silo, s katero pritiskaš nanjo, in jo preračuna v kilograme. Zato kaže maso, če jo uporabljaš na Zemlji. Silomer (vzmetna tehtnica) neposredno meri težo v newtonih.

**8. Pogosto zaokrožanje.** Pri računih v šoli včasih uporabljamo $g \approx 10\,\dfrac{\text{N}}{\text{kg}}$. V tej lekciji računamo z $9{,}81\,\dfrac{\text{N}}{\text{kg}}$, razen kjer je napisano drugače.

## Rešeni primeri

### Primer 1: teža iz mase

Kolikšna je teža telesa z maso $5\,\text{kg}$?

**Podatki:** $m = 5\,\text{kg}$, $g = 9{,}81\,\dfrac{\text{N}}{\text{kg}}$
**Iščemo:** težo $F_g$

:::formula
$F_g = m \cdot g$
:::

**Rešitev:**

1. Iščemo težo, poznamo maso: uporabimo $F_g = m \cdot g$.
2. Vstavimo: $F_g = 5\,\text{kg} \cdot 9{,}81\,\dfrac{\text{N}}{\text{kg}}$.
3. Enota kg se pokrajša, ostane newton: $F_g = 49{,}05\,\text{N}$.
4. Preverimo smiselnost: teža v newtonih je približno desetkrat večja od mase v kilogramih ($5 \cdot 10 = 50$). ✓
5. Odgovor: teža telesa je $49{,}05\,\text{N}$.

### Primer 2: masa iz teže

Silomer pokaže, da je teža nekega telesa $24{,}525\,\text{N}$. Kolikšna je masa telesa?

**Podatki:** $F_g = 24{,}525\,\text{N}$, $g = 9{,}81\,\dfrac{\text{N}}{\text{kg}}$
**Iščemo:** maso $m$

:::formula
$m = \dfrac{F_g}{g}$
:::

**Rešitev:**

1. Iščemo maso, poznamo težo: $m = \dfrac{F_g}{g}$.
2. Vstavimo: $m = \dfrac{24{,}525\,\text{N}}{9{,}81\,\text{N/kg}}$.
3. Izračunamo: $m = 2{,}5\,\text{kg}$.
4. Preverimo: $2{,}5 \cdot 9{,}81 = 24{,}525$. ✓
5. Odgovor: masa telesa je $2{,}5\,\text{kg}$.

### Primer 3: Zemlja in Luna

Astronavt ima skupaj z opremo maso $120\,\text{kg}$. Na Luni je gravitacijski pospešek približno $1{,}6\,\dfrac{\text{N}}{\text{kg}}$. Izračunaj njegovo težo na Zemlji in na Luni ter primerjaj masi.

**Podatki:** $m = 120\,\text{kg}$, na Zemlji $g_\text{Z} = 9{,}81\,\dfrac{\text{N}}{\text{kg}}$, na Luni $g_\text{L} = 1{,}6\,\dfrac{\text{N}}{\text{kg}}$
**Iščemo:** težo na Zemlji $F_{g,\text{Z}}$, težo na Luni $F_{g,\text{L}}$ in primerjavo mas na obeh nebesnih telesih

:::formula
$F_g = m \cdot g$, pri čemer za vsako nebesno telo vstavimo njegov $g$; masa $m$ je povsod enaka
:::

**Rešitev:**

1. **Teža na Zemlji.** $F_{g,\text{Z}} = 120\,\text{kg} \cdot 9{,}81\,\dfrac{\text{N}}{\text{kg}} = 1177{,}2\,\text{N}$.
2. **Teža na Luni.** $F_{g,\text{L}} = 120\,\text{kg} \cdot 1{,}6\,\dfrac{\text{N}}{\text{kg}} = 192\,\text{N}$.
3. **Masa.** Masa je na obeh nebesnih telesih enaka: $120\,\text{kg}$. Masa je lastnost telesa in ni odvisna od kraja.
4. **Primerjava.** Teža na Luni je približno $\dfrac{1177{,}2}{192} \approx 6{,}1$-krat manjša kot na Zemlji, kar se ujema s podatkom, da je $g$ na Luni približno šestkrat manjši kot na Zemlji.
5. **Odgovor.** Teža na Zemlji je $1177{,}2\,\text{N}$, na Luni $192\,\text{N}$, masa pa je v obeh primerih $120\,\text{kg}$.

## Pogoste napake

- **Mešanje pojmov masa in teža.** Kilogram je enota mase, newton pa teže. Stavek »moja teža je 50 kg« je v fiziki napačen. Pravilno: »moja masa je 50 kg, moja teža je približno 490 N«.
- **Pozabljena enota.** Teža se piše v $\text{N}$, ne v $\text{kg}$. Rezultat brez enote ni popoln.
- **Deljenje namesto množenja.** Teža se izračuna z množenjem: $F_g = m \cdot g$. Za maso pa delimo.
- **Misel, da se masa spremeni na Luni.** Spremeni se teža, masa ostane enaka.
- **Napačna smer.** Teža kaže navpično navzdol, ne vodoravno ali navzgor.

## Povzetek

- Masa $m$ pove količino snovi, enota je $\text{kg}$. Povsod je enaka.
- Teža $F_g$ je sila, s katero Zemlja privlači telo, enota je $\text{N}$. Kaže navpično navzdol.
- $F_g = m \cdot g$ in $m = \dfrac{F_g}{g}$.
- Na Zemlji je $g = 9{,}81\,\dfrac{\text{N}}{\text{kg}}$.
- Na drugih nebesnih telesih je $g$ drugačen, zato je teža drugačna, masa pa ista.

## Drugače: Na sliki

Predstavljaj si telo kot škatlo na mizi. Iz težišča škatle nariši puščico navpično navzdol. To je teža. Dolžina puščice je sorazmerna z velikostjo sile.

Če je masa škatle dvakrat večja, narišeš puščico dvakrat daljšo. Če isto škatlo prenesemo na Luno, ostane škatla enaka (ista masa), puščica pa postane približno šestkrat krajša.

Zamisli si še graf: na vodoravno os nanesi maso v $\text{kg}$, na navpično težo v $\text{N}$. Dobiš premico skozi izhodišče. Njen naklon je prav $g = 9{,}81\,\dfrac{\text{N}}{\text{kg}}$. Za maso $1\,\text{kg}$ odčitaš približno $9{,}81\,\text{N}$, za $2\,\text{kg}$ približno $19{,}62\,\text{N}$.

## Drugače: Iz vsakdanjega življenja

Ko v trgovini kupiš vrečko sladkorja z oznako $1\,\text{kg}$, ti oznaka pove maso. Če jo držiš v roki, čutiš njeno težo, to je silo, s katero jo Zemlja vleče navzdol. Ta sila je približno $9{,}81\,\text{N}$.

Še ena primerjava: telo z maso $100\,\text{g}$, na primer manjša čokolada, ima težo približno $1\,\text{N}$. Ko torej držiš čokolado, na dlan deluješ s silo okoli enega newtona.

Ko stopiš na kopalniško tehtnico, se vzmet v njej stisne zaradi tvoje teže. Tehtnica je narejena tako, da to silo že preračuna v kilograme (deli z $g$). Če bi isto tehtnico odnesli na Luno, bi kazala približno šestkrat manj, čeprav je tvoja masa ista. Tehtnica bi bila namreč še vedno nastavljena za zemeljski $g$.

## Drugače: Korak za korakom s številkami

Tabela za različne mase (na Zemlji, $g = 9{,}81\,\dfrac{\text{N}}{\text{kg}}$):

| Masa $m$ | Račun | Teža $F_g$ |
|---|---|---|
| $1\,\text{kg}$ | $1 \cdot 9{,}81$ | $9{,}81\,\text{N}$ |
| $2\,\text{kg}$ | $2 \cdot 9{,}81$ | $19{,}62\,\text{N}$ |
| $5\,\text{kg}$ | $5 \cdot 9{,}81$ | $49{,}05\,\text{N}$ |
| $10\,\text{kg}$ | $10 \cdot 9{,}81$ | $98{,}1\,\text{N}$ |

Recept za nalogo:

1. Izpiši, kaj je dano in kaj iščeš ($m$, $F_g$, $g$).
2. Preveri, ali so enote v kilogramih (če je masa v gramih, pretvori: $500\,\text{g} = 0{,}5\,\text{kg}$).
3. Če iščeš težo, **množi**: $F_g = m \cdot g$.
4. Če iščeš maso, **deli**: $m = \dfrac{F_g}{g}$.
5. Zapiši rezultat z enoto ($\text{N}$ za težo, $\text{kg}$ za maso).
6. Preveri: teža v newtonih mora biti približno desetkrat večja od mase v kilogramih.

Primer s pretvorbo: telo ima maso $250\,\text{g}$. Najprej $250\,\text{g} = 0{,}25\,\text{kg}$, nato $F_g = 0{,}25 \cdot 9{,}81 = 2{,}4525\,\text{N}$.

## Drugače: Bolj natančno

Gravitacijsko silo med dvema telesoma opisuje Newtonov gravitacijski zakon. Velja, da je sila večja, če sta telesi masivnejši, in manjša, če sta bolj narazen. Zemlja ima veliko maso, zato na telesa blizu površja deluje z opazno silo.

Za telo z maso $m$ blizu površja Zemlje je ta sila približno $m \cdot g$, kjer je $g$ odvisen od mase in polmera Zemlje. Zato ima $g$ na različnih nebesnih telesih različne vrednosti. Na Luni je $g$ manjši, ker ima Luna manjšo maso.

Enota $\dfrac{\text{N}}{\text{kg}}$ pove, koliko newtonov sile deluje na vsak kilogram mase. Uporablja se tudi enota $\dfrac{\text{m}}{\text{s}^2}$ (pospešek prostega pada), ki je z njo enakovredna. Z njo se boš srečal pri obravnavi gibanja.

Pomembno je razlikovati dve količini:

- masa je **skalar** in ni odvisna od kraja,
- teža je **vektor** (sila), ki je odvisna od kraja, kjer se telo nahaja.

Vrednost $g = 9{,}81\,\dfrac{\text{N}}{\text{kg}}$ je povprečna vrednost za Zemljo. Na različnih krajih se nekoliko razlikuje, a je za šolske naloge to dovolj dober podatek.

## Preveri se

? Kolikšna je teža telesa z maso $3\,\text{kg}$ na Zemlji ($g = 9{,}81\,\dfrac{\text{N}}{\text{kg}}$)?
- $3\,\text{kg}$
- $0{,}31\,\text{N}$
+ $29{,}43\,\text{N}$
- $12{,}81\,\text{N}$
> Teža je $F_g = m \cdot g = 3 \cdot 9{,}81 = 29{,}43\,\text{N}$. Odgovor $0{,}31\,\text{N}$ dobiš, če maso deliš z $g$, $12{,}81\,\text{N}$ pa, če ju seštevaš. Kilogrami pa so enota mase, ne teže.

? Silomer pokaže težo $98{,}1\,\text{N}$. Kolikšna je masa telesa?
- $98{,}1\,\text{kg}$
- $962{,}36\,\text{kg}$
+ $10\,\text{kg}$
> Iščemo maso, zato delimo: $m = \dfrac{98{,}1}{9{,}81} = 10\,\text{kg}$. Če težo pomnožimo z $g$, dobimo napačen rezultat $962{,}36$, odgovor $98{,}1\,\text{kg}$ pa zamenja težo z maso.

? Astronavt pride z Zemlje na Luno. Kaj se zgodi z njegovo maso in težo?
- Masa se zmanjša, teža ostane enaka.
- Masa in teža se obe zmanjšata.
+ Masa ostane enaka, teža se zmanjša.
- Masa in teža ostaneta enaki.
> Masa pove količino snovi in je povsod enaka. Teža je sila, ki je odvisna od gravitacijskega pospeška, ta pa je na Luni manjši, zato je tudi teža manjša.
