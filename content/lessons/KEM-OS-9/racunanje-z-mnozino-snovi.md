---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Že znaš, da so snovi zgrajene iz atomov in molekul, da ima vsak element v periodnem sistemu svojo relativno atomsko maso in da kemijska formula (npr. $\mathrm{H_2O}$) pove, iz katerih atomov je zgrajena molekula.

Težava: atomi in molekule so tako majhni, da jih ne moremo prešteti niti stehtati posamično. V kapljici vode jih je več milijard milijard. Kemiki zato uporabljajo veličino, ki jo imenujemo **množina snovi**. Povezuje maso, ki jo lahko stehtamo, s številom delcev, ki jih ne moremo videti. Z njo izračunaš, koliko gramov snovi je treba odtehtati za reakcijo, koliko molekul je v vzorcu in koliko snovi nastane.

## Razlaga

**1. Množina snovi.** Množina snovi ima oznako $n$, enota je **mol** ($\mathrm{mol}$). Mol je enota, ki pomeni določeno število delcev, podobno kot ducat pomeni 12 kosov, le da je delcev v molu veliko več.

**2. Avogadrova konstanta.** En mol vsebuje vedno enako število delcev (atomov, molekul ali formulskih enot):

$$N_A = 6{,}02 \cdot 10^{23}\,\frac{1}{\text{mol}}$$

Število delcev $N$ izračunamo takole:

$$N = n \cdot N_A$$

**3. Molska masa.** Molska masa $M$ pove, koliko gramov tehta en mol snovi. Enota je $\dfrac{\text{g}}{\text{mol}}$. Številsko je enaka relativni atomski masi elementa (iz periodnega sistema) oziroma relativni molekulski masi spojine:

- $M(\mathrm{H}) = 1\,\dfrac{\text{g}}{\text{mol}}$, $M(\mathrm{O}) = 16\,\dfrac{\text{g}}{\text{mol}}$, $M(\mathrm{C}) = 12\,\dfrac{\text{g}}{\text{mol}}$
- Pri spojinah molske mase atomov seštejemo z upoštevanjem indeksov: $M(\mathrm{H_2O}) = 2 \cdot 1 + 16 = 18\,\dfrac{\text{g}}{\text{mol}}$.

**4. Zveza med maso in množino.**

$$n = \frac{m}{M} \qquad m = n \cdot M$$

kjer je $m$ masa vzorca v gramih.

**5. Pot do števila delcev.** Masa in število delcev sta povezana prek množine:

$$m \;\longleftrightarrow\; n \;\longleftrightarrow\; N$$

Pri nalogah, kjer iz mase iščeš število delcev, najprej izračunaš $n$, nato $N$.

**6. Podatki za vaje.** Uporabljali bomo: $M(\mathrm{H}) = 1$, $M(\mathrm{C}) = 12$, $M(\mathrm{N}) = 14$, $M(\mathrm{O}) = 16$, $M(\mathrm{Na}) = 23$, $M(\mathrm{Mg}) = 24$, $M(\mathrm{Cl}) = 35{,}5$ (vse v $\dfrac{\text{g}}{\text{mol}}$).

## Rešeni primeri

### Primer 1: iz mase v množino

Kolikšna je množina $36\,\text{g}$ vode $\mathrm{H_2O}$? Uporabi $M(\mathrm{H}) = 1\,\dfrac{\text{g}}{\text{mol}}$ in $M(\mathrm{O}) = 16\,\dfrac{\text{g}}{\text{mol}}$.

**Podatki:** $m = 36\,\text{g}$, formula $\mathrm{H_2O}$, $M(\mathrm{H}) = 1\,\dfrac{\text{g}}{\text{mol}}$, $M(\mathrm{O}) = 16\,\dfrac{\text{g}}{\text{mol}}$
**Iščemo:** množino snovi $n$

:::formula
$n = \dfrac{m}{M}$
:::

**Rešitev:**

1. Najprej potrebujemo molsko maso: $M(\mathrm{H_2O}) = 2 \cdot 1 + 16 = 18\,\dfrac{\text{g}}{\text{mol}}$. Voda ima dva atoma vodika, zato vodik štejemo dvakrat.
2. Uporabimo $n = \dfrac{m}{M}$, ker iščemo množino iz mase.
3. Vstavimo: $n = \dfrac{36\,\text{g}}{18\,\text{g/mol}} = 2\,\text{mol}$.
4. Preverimo smiselnost: $36$ je dvakrat več kot $18$, zato sta dva mola. ✓
5. Odgovor: množina $36\,\text{g}$ vode je $2\,\text{mol}$.

### Primer 2: iz množine v maso

Kolikšna je masa $0{,}5\,\text{mol}$ ogljikovega dioksida $\mathrm{CO_2}$? Uporabi $M(\mathrm{C}) = 12\,\dfrac{\text{g}}{\text{mol}}$ in $M(\mathrm{O}) = 16\,\dfrac{\text{g}}{\text{mol}}$.

**Podatki:** $n = 0{,}5\,\text{mol}$, formula $\mathrm{CO_2}$, $M(\mathrm{C}) = 12\,\dfrac{\text{g}}{\text{mol}}$, $M(\mathrm{O}) = 16\,\dfrac{\text{g}}{\text{mol}}$
**Iščemo:** maso $m$

:::formula
$m = n \cdot M$
:::

**Rešitev:**

1. Molska masa: $M(\mathrm{CO_2}) = 12 + 2 \cdot 16 = 44\,\dfrac{\text{g}}{\text{mol}}$.
2. Iščemo maso, zato $m = n \cdot M$.
3. $m = 0{,}5\,\text{mol} \cdot 44\,\dfrac{\text{g}}{\text{mol}} = 22\,\text{g}$.
4. Preverimo: pol mola mora tehtati polovico molske mase, torej polovico od $44$, kar je $22$. ✓
5. Odgovor: $0{,}5\,\text{mol}$ ogljikovega dioksida ima maso $22\,\text{g}$.

### Primer 3: iz mase v število delcev

Koliko molekul vode in koliko atomov vodika je v $9\,\text{g}$ vode $\mathrm{H_2O}$? Uporabi $M(\mathrm{H_2O}) = 18\,\dfrac{\text{g}}{\text{mol}}$ (iz primera 1) in $N_A = 6{,}02 \cdot 10^{23}\,\frac{1}{\text{mol}}$.

**Podatki:** $m = 9\,\text{g}$, formula $\mathrm{H_2O}$ (2 atoma vodika v molekuli), $M(\mathrm{H_2O}) = 18\,\dfrac{\text{g}}{\text{mol}}$ (iz primera 1), $N_A = 6{,}02 \cdot 10^{23}\,\frac{1}{\text{mol}}$
**Iščemo:** število molekul vode $N(\mathrm{H_2O})$ in število atomov vodika $N(\mathrm{H})$

:::formula
$n = \dfrac{m}{M}$, nato $N = n \cdot N_A$; atomov vodika je $2$-krat več kot molekul vode.
:::

**Rešitev:**

1. Molska masa vode je $18\,\dfrac{\text{g}}{\text{mol}}$ (kot v primeru 1).
2. **Množina:** $n = \dfrac{9\,\text{g}}{18\,\text{g/mol}} = 0{,}5\,\text{mol}$.
3. **Število molekul:** $N = n \cdot N_A = 0{,}5 \cdot 6{,}02 \cdot 10^{23} = 3{,}01 \cdot 10^{23}$ molekul.
4. **Atomi vodika:** vsaka molekula $\mathrm{H_2O}$ ima 2 atoma vodika, zato $2 \cdot 3{,}01 \cdot 10^{23} = 6{,}02 \cdot 10^{23}$ atomov vodika.
5. Preverimo: $0{,}5\,\text{mol}$ vode vsebuje $1\,\text{mol}$ atomov vodika, to je ravno $6{,}02 \cdot 10^{23}$ atomov. ✓
6. Odgovor: v $9\,\text{g}$ vode je $3{,}01 \cdot 10^{23}$ molekul vode in $6{,}02 \cdot 10^{23}$ atomov vodika.

## Pogoste napake

- **Zamenjava $m$ in $M$.** Masa vzorca $m$ (v $\text{g}$) in molska masa $M$ (v $\dfrac{\text{g}}{\text{mol}}$) nista isto. $M$ je lastnost snovi, $m$ je količina, ki jo stehtaš.
- **Obrnjena formula.** Če dobiš $n = M/m$, preveri enote: rezultat mora biti v $\text{mol}$. Pravilno je $n = m/M$.
- **Pozabljeni indeksi.** Pri $\mathrm{CO_2}$ je $M = 12 + 2 \cdot 16$, ne $12 + 16$.
- **Mešanje molekul in atomov.** Mol molekul $\mathrm{H_2O}$ vsebuje dva mola atomov vodika in en mol atomov kisika. Vedno preveri, česa delce šteješ.
- **Napake pri potencah.** $0{,}5 \cdot 6{,}02 \cdot 10^{23} = 3{,}01 \cdot 10^{23}$, potenca ostane enaka. Rezultat ni $3{,}01 \cdot 10^{22}$ ali $3{,}01 \cdot 10^{24}$.

## Povzetek

- Množina snovi $n$ se meri v molih. En mol vsebuje $N_A = 6{,}02 \cdot 10^{23}$ delcev.
- Molska masa $M$ ($\dfrac{\text{g}}{\text{mol}}$) je številsko enaka relativni atomski oziroma molekulski masi, pri spojinah jo dobimo s seštevanjem mas atomov z upoštevanjem indeksov.
- $n = \dfrac{m}{M}$, $m = n \cdot M$, $N = n \cdot N_A$.
- Od mase do števila delcev greš prek množine: $m \to n \to N$.
- Pri vsaki nalogi najprej zapiši formulo snovi in izračunaj molsko maso.

## Drugače: Na sliki

Predstavljaj si tri »posode« v vrsti:

$$\boxed{m\ (\text{g})} \xrightarrow{\ :M\ } \boxed{n\ (\text{mol})} \xrightarrow{\ \cdot N_A\ } \boxed{N\ (\text{delcev})}$$

Pot nazaj gre v obratni smeri:

$$\boxed{N} \xrightarrow{\ :N_A\ } \boxed{n} \xrightarrow{\ \cdot M\ } \boxed{m}$$

Množina $n$ je v sredini, ker je most med svetom, ki ga stehtamo, in svetom delcev. Iz mase se ne da skočiti naravnost v število delcev. Vedno greš prek mola. Ko greš v desno, deliš z $M$ in množiš z $N_A$, ko greš v levo, narediš obratno.

## Drugače: Iz vsakdanjega življenja

V trgovini jajca kupuješ po ducatih: ducat je 12 kosov, pol ducata je 6 kosov. Za polovico ducata ne potrebuješ šteti vsakega jajca, ker veš, da je to 6.

Mol je »kemijski ducat«, le da ne vsebuje 12, ampak $6{,}02 \cdot 10^{23}$ delcev. Tako kot ducat jajc tehta več kot ducat češenj, ima tudi mol različnih snovi različno maso:

- 1 mol vode ($\mathrm{H_2O}$): $18\,\text{g}$, to je nekaj več kot ena jušna žlica vode,
- 1 mol kuhinjske soli ($\mathrm{NaCl}$): $58{,}5\,\text{g}$,
- 1 mol železa ($\mathrm{Fe}$): $56\,\text{g}$.

V vseh teh vzorcih je enako število delcev, le da so delci različno težki.

## Drugače: Korak za korakom s številkami

Naloga: Koliko formulskih enot $\mathrm{NaCl}$ je v $117\,\text{g}$ kuhinjske soli?

| Korak | Kaj naredim | Račun |
|---|---|---|
| 1 | Zapišem formulo | $\mathrm{NaCl}$ |
| 2 | Izračunam molsko maso | $M = 23 + 35{,}5 = 58{,}5\,\dfrac{\text{g}}{\text{mol}}$ |
| 3 | Izračunam množino | $n = \dfrac{117}{58{,}5} = 2\,\text{mol}$ |
| 4 | Izračunam število delcev | $N = 2 \cdot 6{,}02 \cdot 10^{23} = 12{,}04 \cdot 10^{23}$ |
| 5 | Zapišem v znanstvenem zapisu (število pred potenco med 1 in 10) | $N = 1{,}204 \cdot 10^{24}$ formulskih enot |

Preverjanje: $117$ je dvakrat $58{,}5$, zato sta dva mola, delcev pa dvakrat $N_A$. ✓

## Drugače: Bolj natančno

Mol je bil dolgo definiran kot množina snovi, ki vsebuje toliko delcev, kot je atomov v $12\,\text{g}$ izotopa ogljik-12. Poskusi so pokazali, da je to približno $6{,}02 \cdot 10^{23}$ atomov. Od leta 2019 je mol definiran neposredno s tem številom: en mol vsebuje natanko $6{,}02214076 \cdot 10^{23}$ delcev. Avogadrova konstanta je zato natanko $N_A = 6{,}02214076 \cdot 10^{23}\,\frac{1}{\text{mol}}$, pri računih pa uporabljamo zaokroženo vrednost $6{,}02 \cdot 10^{23}\,\frac{1}{\text{mol}}$.

Zakaj je molska masa številsko enaka relativni atomski masi? Atom ogljika-12 ima relativno atomsko maso $12$. Če vzamemo $N_A$ takih atomov, imajo skupaj maso $12\,\text{g}$ (po definiciji iz leta 2019 to ne velja več povsem točno, a zelo natančno). Torej je

$$M(\mathrm{C}) = 12\,\frac{\text{g}}{\text{mol}}.$$

Enako velja za vse druge atome: kolikorkrat je atom težji od ogljikovega, toliko težji je tudi mol teh atomov. Pri spojinah masi atomov preprosto seštejemo, ker mol molekul vsebuje mol atomov vsake vrste, pomnožen z indeksom. Za $\mathrm{H_2O}$ je to dva mola vodika in en mol kisika: $2 \cdot 1 + 16 = 18\,\dfrac{\text{g}}{\text{mol}}$.

## Preveri se

? Kolikšna je množina $80\,\text{g}$ natrijevega hidroksida $\mathrm{NaOH}$? ($M(\mathrm{Na}) = 23$, $M(\mathrm{O}) = 16$, $M(\mathrm{H}) = 1$ v $\dfrac{\text{g}}{\text{mol}}$)
- $0{,}5\,\text{mol}$
+ $2\,\text{mol}$
- $3200\,\text{mol}$
- $40\,\text{mol}$
> $M(\mathrm{NaOH}) = 23 + 16 + 1 = 40\,\dfrac{\text{g}}{\text{mol}}$, zato $n = \dfrac{80}{40} = 2\,\text{mol}$. Rezultat $0{,}5$ dobiš z obrnjeno formulo, $3200$ z množenjem namesto deljenja, $40$ pa je molska masa, ne množina.

? Kolikšna je masa $3\,\text{mol}$ kisika $\mathrm{O_2}$? ($M(\mathrm{O}) = 16\,\dfrac{\text{g}}{\text{mol}}$)
- $48\,\text{g}$
- $10{,}7\,\text{g}$
+ $96\,\text{g}$
- $35\,\text{g}$
> Molekula kisika ima dva atoma, zato $M(\mathrm{O_2}) = 2 \cdot 16 = 32\,\dfrac{\text{g}}{\text{mol}}$. Masa je $m = 3 \cdot 32 = 96\,\text{g}$. Odgovor $48$ pozabi indeks $2$, $10{,}7$ dobiš z deljenjem namesto množenja, $35$ pa s seštevanjem $3 + 32$.

? Koliko atomov magnezija je v $2\,\text{mol}$ magnezija?
- $3{,}01 \cdot 10^{23}$
- $6{,}02 \cdot 10^{23}$
+ $1{,}204 \cdot 10^{24}$
> $N = n \cdot N_A = 2 \cdot 6{,}02 \cdot 10^{23} = 12{,}04 \cdot 10^{23} = 1{,}204 \cdot 10^{24}$. Odgovor $6{,}02 \cdot 10^{23}$ ustreza enemu molu, $3{,}01 \cdot 10^{23}$ pa bi dobili z deljenjem z $2$.
