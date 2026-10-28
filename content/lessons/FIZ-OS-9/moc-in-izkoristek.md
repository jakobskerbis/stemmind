---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih lekcij že veš, da opravimo **delo**, kadar sila premika telo, in da delo izračunamo kot $A = F \cdot s$ (kadar sila kaže v smeri gibanja). Delo merimo v joulih ($\mathrm{J}$). Veš tudi, da se delo porabi za spremembo energije telesa.

Vendar delo samo še ne pove vsega. Če dvigneš vrečo moke na polico v $2\,\text{s}$ ali v $20\,\text{s}$, opraviš enako delo, a v prvem primeru si bil veliko »hitrejši«. Hitrost opravljanja dela opiše fizikalna količina **moč**. Moč uporabljamo pri žarnicah, motorjih avtomobilov, gospodinjskih aparatih in električnih računih. Poleg tega se nikoli ne izkoristi vsa dovedena energija. Kolikšen del je koristno uporabljen, pove **izkoristek**.

## Razlaga

**1. Moč.** Moč pove, koliko dela opravimo v eni sekundi:

$$P = \frac{A}{t}$$

kjer je $P$ moč, $A$ opravljeno delo in $t$ čas, v katerem je bilo delo opravljeno.

**2. Enota za moč.** Enota je **vat** ($\mathrm{W}$):

$$1\,\mathrm{W} = 1\,\frac{\mathrm{J}}{\mathrm{s}}$$

Moč $1\,\mathrm{W}$ pomeni, da v eni sekundi opravimo $1\,\mathrm{J}$ dela. Uporabljamo tudi večji enoti: $1\,\mathrm{kW} = 1000\,\mathrm{W}$ in $1\,\mathrm{MW} = 1\,000\,000\,\mathrm{W}$.

**3. Preoblikovanje formule.** Iz $P = \dfrac{A}{t}$ dobimo:

- delo: $A = P \cdot t$,
- čas: $t = \dfrac{A}{P}$.

**4. Moč in energija.** Delo je enako spremembi energije, zato lahko moč zapišemo tudi kot $P = \dfrac{\Delta W}{t}$. Moč torej pove tudi, koliko energije se v eni sekundi pretvori ali prenese.

**5. Izkoristek.** Naprava vedno dobi več energije (ali dela), kot je koristno uporabi, ker se del energije izgubi, npr. kot toplota zaradi trenja. **Izkoristek** $\eta$ (grška črka eta) je razmerje med koristnim in dovedenim:

$$\eta = \frac{A_\text{koristno}}{A_\text{dovedeno}}$$

Izražamo ga kot decimalno število ali v odstotkih. Izkoristek je vedno manjši od $1$ (manjši od $100\,\%$), ker se energija nikoli ne ustvari iz nič. Enake zveze veljajo tudi za moči: $\eta = \dfrac{P_\text{koristna}}{P_\text{dovedena}}$.

## Rešeni primeri

### Primer 1: izračun moči

Dvigalo v $5\,\text{s}$ opravi $2000\,\mathrm{J}$ dela. Kolikšna je njegova moč?

**Podatki:** $A = 2000\,\mathrm{J}$, $t = 5\,\mathrm{s}$
**Iščemo:** moč $P$

:::formula
$P = \dfrac{A}{t}$
:::

**Rešitev:**

1. Iščemo moč, zato uporabimo $P = \dfrac{A}{t}$.
2. Vstavimo: $P = \dfrac{2000\,\mathrm{J}}{5\,\mathrm{s}}$.
3. Izračunamo: $P = 400\,\mathrm{W}$.
4. Smiselnost: v vsaki sekundi dvigalo opravi $400\,\mathrm{J}$ dela, in $400 \cdot 5 = 2000$. ✓

### Primer 2: delo iz moči in časa

Električni grelnik ima moč $1500\,\mathrm{W}$. Koliko energije porabi v $2\,\text{min}$?

**Podatki:** $P = 1500\,\mathrm{W}$, $t = 2\,\text{min}$
**Iščemo:** porabljeno energijo (električno delo) $A$

:::formula
Iz $P = \dfrac{A}{t}$ sledi $A = P \cdot t$ (čas v sekundah)
:::

**Rešitev:**

1. Iščemo delo (energijo): $A = P \cdot t$.
2. **Čas pretvorimo v sekunde**, ker je vat definiran z jouli na sekundo: $t = 2\,\text{min} = 120\,\mathrm{s}$.
3. Vstavimo: $A = 1500\,\mathrm{W} \cdot 120\,\mathrm{s} = 180\,000\,\mathrm{J}$.
4. Zapišemo lahko tudi $A = 180\,\mathrm{kJ}$.
5. Smiselnost: v vsaki sekundi $1500\,\mathrm{J}$, v $120$ sekundah $120$-krat toliko. ✓

### Primer 3: moč pri dvigovanju in izkoristek

Motor dvigne breme z maso $50\,\text{kg}$ na višino $12\,\text{m}$ v $10\,\text{s}$. Motor ima dovedeno moč $1000\,\mathrm{W}$. Vzemi $g = 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$. Izračunaj koristno moč in izkoristek motorja.

**Podatki:** $m = 50\,\text{kg}$, $h = 12\,\text{m}$, $t = 10\,\text{s}$, $P_\text{dovedena} = 1000\,\mathrm{W}$, $g = 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$
**Iščemo:** koristno moč $P_\text{koristna}$ in izkoristek $\eta$

:::formula
$F = m \cdot g$, $A = F \cdot h$, $P_\text{koristna} = \dfrac{A}{t}$, $\eta = \dfrac{P_\text{koristna}}{P_\text{dovedena}}$
:::

**Rešitev:**

1. **Sila.** Breme dvigamo enakomerno, zato je potrebna sila enaka teži: $F = m \cdot g = 50\,\text{kg} \cdot 10\,\dfrac{\mathrm{N}}{\mathrm{kg}} = 500\,\mathrm{N}$.
2. **Koristno delo.** $A = F \cdot s = 500\,\mathrm{N} \cdot 12\,\mathrm{m} = 6000\,\mathrm{J}$.
3. **Koristna moč.** $P_\text{koristna} = \dfrac{A}{t} = \dfrac{6000\,\mathrm{J}}{10\,\mathrm{s}} = 600\,\mathrm{W}$.
4. **Izkoristek.** $\eta = \dfrac{P_\text{koristna}}{P_\text{dovedena}} = \dfrac{600\,\mathrm{W}}{1000\,\mathrm{W}} = 0{,}6 = 60\,\%$.
5. **Smiselnost.** Izkoristek je manjši od $100\,\%$, kar mora veljati. Preostalih $400\,\mathrm{W}$ se izgubi, večinoma kot toplota.

## Pogoste napake

- **Čas ni v sekundah.** Če je čas podan v minutah ali urah, ga pred računom pretvori v sekunde, sicer rezultat ni v vatih. ($1\,\text{min} = 60\,\mathrm{s}$, $1\,\text{h} = 3600\,\mathrm{s}$.)
- **Zamenjava moči in dela.** Delo merimo v $\mathrm{J}$, moč v $\mathrm{W}$. Moč je delo na enoto časa, ne delo samo.
- **Obrnjeno razmerje pri izkoristku.** Koristno delimo z dovedenim, ne obratno. Če dobiš izkoristek nad $100\,\%$, si zamenjal(a) števca in imenovalca.
- **Pozabljena pretvorba enot.** $1\,\mathrm{kW}$ je $1000\,\mathrm{W}$, ne $100\,\mathrm{W}$.
- **Mešanje dovedenega in koristnega.** Pri izkoristku je v imenovalcu vedno tisto, kar smo napravi dali, ne tisto, kar smo dobili.

## Povzetek

- Moč pove, kako hitro se opravlja delo: $P = \dfrac{A}{t}$.
- Enota za moč je vat: $1\,\mathrm{W} = 1\,\dfrac{\mathrm{J}}{\mathrm{s}}$.
- Iz formule: $A = P \cdot t$ in $t = \dfrac{A}{P}$.
- Čas pred računom pretvori v sekunde.
- Izkoristek: $\eta = \dfrac{A_\text{koristno}}{A_\text{dovedeno}}$, vedno manjši od $1$ ($100\,\%$).

## Drugače: Na sliki

Predstavljaj si dve osebi, ki prenašata opeke iz kupa na vozilo. Obe preneseta $100$ opek, ki zahtevajo enako delo $A$. Prva oseba to opravi v $10$ minutah, druga v $5$ minutah. Delo je enako, druga oseba pa ima **dvakrat večjo moč**, ker delo opravi v pol krajšem času.

Če narišeš graf dela v odvisnosti od časa, je graf v enem primeru strmejša premica, v drugem položnejša. **Strmina premice je moč**: bolj strma kot je premica, več dela se opravi v sekundi.

Izkoristek si predstavljaj kot škatlo: v njo vstopi $100$ enot energije, ven pride npr. $60$ koristnih, preostalih $40$ uide kot toplota. Izkoristek je $\dfrac{60}{100} = 60\,\%$.

## Drugače: Iz vsakdanjega življenja

Žarnica z napisom $60\,\mathrm{W}$ v vsaki sekundi pretvori $60\,\mathrm{J}$ električne energije v svetlobo in toploto. Žarnica z napisom $10\,\mathrm{W}$ porabi le $10\,\mathrm{J}$ v sekundi. Pri enakem času gorenja prva porabi šestkrat več energije, zato je električni račun višji.

Pri izkoristku je dober primer klasična žarnica z žarilno nitko: večino električne energije spremeni v toploto, le majhen del v svetlobo, zato je njen izkoristek za svetlobo nizek. Sodobne LED žarnice za enako svetlobo porabijo bistveno manj energije. Zato je pri njih za enako osvetlitev potrebna manjša moč.

Tudi telo ima moč: ko hitro tečeš po stopnicah, opraviš enako delo kot pri počasni hoji, a v krajšem času, zato je tvoja moč večja in se hitreje utrudiš.

## Drugače: Korak za korakom s številkami

Recept za naloge o moči in izkoristku:

1. Izpiši, kaj je dano in kaj iščeš.
2. Vse enote pretvori v osnovne ($\mathrm{J}$, $\mathrm{s}$, $\mathrm{W}$).
3. Izberi obliko formule: $P = \dfrac{A}{t}$, $A = P \cdot t$ ali $t = \dfrac{A}{P}$.
4. Vstavi in izračunaj.
5. Preveri smiselnost (izkoristek manjši od $100\,\%$).

**Številčni primer.** Črpalka v $4\,\text{min}$ opravi $48\,000\,\mathrm{J}$ dela. Kolikšna je moč?

| Korak | Račun |
|---|---|
| Čas v sekunde | $4\,\text{min} = 240\,\mathrm{s}$ |
| Formula | $P = \dfrac{A}{t}$ |
| Vstavljanje | $P = \dfrac{48\,000\,\mathrm{J}}{240\,\mathrm{s}}$ |
| Rezultat | $P = 200\,\mathrm{W}$ |

**Izkoristek.** Naprava dobi $500\,\mathrm{J}$ energije in opravi $350\,\mathrm{J}$ koristnega dela: $\eta = \dfrac{350}{500} = 0{,}7 = 70\,\%$.

## Drugače: Bolj natančno

Enota vat sledi neposredno iz definicije. Ker je $A = F \cdot s$, velja $1\,\mathrm{J} = 1\,\mathrm{N} \cdot 1\,\mathrm{m}$, zato je

$$1\,\mathrm{W} = 1\,\frac{\mathrm{J}}{\mathrm{s}} = 1\,\frac{\mathrm{N \cdot m}}{\mathrm{s}}.$$

Če se telo giblje enakomerno s hitrostjo $v = \dfrac{s}{t}$ pod stalno silo v smeri gibanja, dobimo:

$$P = \frac{A}{t} = \frac{F \cdot s}{t} = F \cdot v$$

Moč je torej produkt sile in hitrosti. To pojasni, zakaj je za enako moč motorja pri večji sili hitrost manjša (npr. avto na klancu vozi počasneje).

Formula $P = \dfrac{A}{t}$ da **povprečno moč** v času $t$. Dejanska moč se lahko skozi čas spreminja.

Izkoristek je razmerje dveh količin z isto enoto, zato nima enote. Ker je koristna energija vedno manjša od dovedene (del se razprši kot toplota), velja $0 < \eta < 1$.

## Preveri se

? Stroj v $20\,\text{s}$ opravi $1000\,\mathrm{J}$ dela. Kolikšna je njegova moč?
- $20\,000\,\mathrm{W}$
+ $50\,\mathrm{W}$
- $0{,}02\,\mathrm{W}$
- $980\,\mathrm{W}$
> $P = \dfrac{A}{t} = \dfrac{1000\,\mathrm{J}}{20\,\mathrm{s}} = 50\,\mathrm{W}$. Odgovor $20\,000$ dobiš, če delo pomnožiš s časom, $0{,}02$ pa, če deliš čas z delom.

? Grelnik z močjo $2\,\mathrm{kW}$ deluje $30\,\mathrm{s}$. Koliko energije porabi?
- $60\,\mathrm{J}$
- $2030\,\mathrm{J}$
+ $60\,000\,\mathrm{J}$
> $2\,\mathrm{kW} = 2000\,\mathrm{W}$, zato $A = P \cdot t = 2000\,\mathrm{W} \cdot 30\,\mathrm{s} = 60\,000\,\mathrm{J}$. Rezultat $60\,\mathrm{J}$ nastane, če kilovatov ne pretvoriš v vate.

? Motor dobi $800\,\mathrm{J}$ energije, koristno delo pa je $600\,\mathrm{J}$. Kolikšen je izkoristek?
- $133\,\%$
+ $75\,\%$
- $25\,\%$
- $200\,\mathrm{J}$
> $\eta = \dfrac{A_\text{koristno}}{A_\text{dovedeno}} = \dfrac{600}{800} = 0{,}75 = 75\,\%$. Izkoristek $133\,\%$ nastane, če razmerje obrneš, kar je nemogoče, saj mora biti izkoristek manjši od $100\,\%$.
