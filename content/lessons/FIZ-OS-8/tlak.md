---
stanje: osnutek
phet: under-pressure
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih lekcij že poznaš silo (merimo jo v newtonih, $\mathrm{N}$), ploščino ($\mathrm{m^2}$, $\mathrm{cm^2}$) in gostoto ($\rho = \dfrac{m}{V}$). Veš tudi, da na telo z maso $m$ deluje teža $F_g = m \cdot g$, kjer za $g$ vzamemo približno $10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$.

Vprašaj se: zakaj se z ostrim nožem režemo lažje kot s topim, čeprav pritiskamo z enako silo? Zakaj se v snegu z navadnimi čevlji pogrezneš, s smučmi pa ne? Zakaj te v globokem bazenu bolijo ušesa? Odgovor je v novi količini, **tlaku**. Ni pomembna samo sila, ampak tudi to, **na kako veliki površini** deluje. Tlak razloži delovanje žebljev, smuči, gum, potapljaških odprav in vodnih stolpov.

## Razlaga

**1. Tlak trdnih teles.** Sila, ki deluje pravokotno na površino, povzroča tlak. **Tlak** je količnik med pravokotno silo in ploščino površine, na katero sila deluje:

$$p = \frac{F}{S}$$

- $p$ je tlak,
- $F$ je sila, ki deluje pravokotno na površino,
- $S$ je ploščina te površine.

**2. Enota.** Če je sila v $\mathrm{N}$ in ploščina v $\mathrm{m^2}$, je tlak v paskalih:

$$1\,\mathrm{Pa} = 1\,\frac{\mathrm{N}}{\mathrm{m^2}}$$

Paskal je zelo majhna enota (približno tlak lista papirja na mizi), zato uporabljamo tudi $1\,\mathrm{kPa} = 1000\,\mathrm{Pa}$ in $1\,\mathrm{bar} = 100\,000\,\mathrm{Pa}$. Zračni tlak ob morju je približno $100\,000\,\mathrm{Pa} = 1\,\mathrm{bar}$.

**3. Kaj pomeni formula.**

- Večja sila pri isti ploščini pomeni večji tlak.
- Manjša ploščina pri isti sili pomeni večji tlak (konica žeblja, rezilo noža).
- Večja ploščina pri isti sili pomeni manjši tlak (smuči, široke gume traktorja).

**4. Tlak v tekočinah.** Tekočina (voda, olje) zaradi svoje teže pritiska na dno in stene posode. Pomembno:

- Tlak v tekočini deluje **v vseh smereh** (navzdol, navzgor, vstran) in vedno pravokotno na steno ali predmet, ki ga tekočina obdaja.
- Na isti globini je tlak povsod enak.
- Tlak z globino narašča.

**5. Hidrostatični tlak.** Tlak, ki ga povzroča teža tekočine, imenujemo **hidrostatični tlak**. Zamislimo si valj tekočine nad ploščino $S$ do globine $h$. Njegova teža je $F_g = m g = \rho V g = \rho S h g$. Ko delimo s ploščino $S$, se ta krajša:

$$p = \frac{F_g}{S} = \rho \, g \, h$$

- $\rho$ je gostota tekočine ($\dfrac{\mathrm{kg}}{\mathrm{m^3}}$),
- $g \approx 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$,
- $h$ je globina pod gladino ($\mathrm{m}$).

Hidrostatični tlak je odvisen od gostote tekočine in globine, **ne pa od oblike posode ali od količine vode**. Jezero in ozka cev, obe globoki $5\,\mathrm{m}$, imata na dnu enak hidrostatični tlak.

**6. Skupni tlak.** Na gladino tekočine pritiska še zrak. Če nas zanima celotni tlak v odprti posodi, mu prištejemo zračni tlak $p_0$: $p = p_0 + \rho g h$. V tej lekciji večinoma računamo samo hidrostatični del.

## Rešeni primeri

### Primer 1: tlak trdnega telesa

Opeka teži $40\,\mathrm{N}$. Njena ploskev, s katero leži na tleh, ima ploščino $200\,\mathrm{cm^2}$. Kolikšen tlak povzroča na tla?

**Podatki:** $F = F_g = 40\,\mathrm{N}$, $S = 200\,\mathrm{cm^2}$
**Iščemo:** tlak $p$ na tla

:::formula
$p = \dfrac{F}{S}$, pri čemer ploščino najprej pretvorimo: $1\,\mathrm{m^2} = 10\,000\,\mathrm{cm^2}$
:::

**Rešitev:**

1. Ploščino pretvorimo v $\mathrm{m^2}$, ker je enota paskal definirana z $\mathrm{m^2}$. $1\,\mathrm{m^2} = 10\,000\,\mathrm{cm^2}$, zato $S = 200 : 10\,000 = 0{,}02\,\mathrm{m^2}$.
2. Sila na podlago je teža opeke: $F = 40\,\mathrm{N}$.
3. Vstavimo: $p = \dfrac{F}{S} = \dfrac{40\,\mathrm{N}}{0{,}02\,\mathrm{m^2}} = 2000\,\mathrm{Pa}$.
4. Odgovor: tlak je $2000\,\mathrm{Pa} = 2\,\mathrm{kPa}$.

### Primer 2: hidrostatični tlak

Kolikšen je hidrostatični tlak v globini $12\,\mathrm{m}$ pod gladino jezera? Gostota vode je $1000\,\dfrac{\mathrm{kg}}{\mathrm{m^3}}$.

**Podatki:** $h = 12\,\mathrm{m}$, $\rho = 1000\,\dfrac{\mathrm{kg}}{\mathrm{m^3}}$, $g = 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$
**Iščemo:** hidrostatični tlak $p$

:::formula
$p = \rho \, g \, h$
:::

**Rešitev:**

1. Uporabimo $p = \rho g h$.
2. Vstavimo: $p = 1000 \cdot 10 \cdot 12 = 120\,000\,\mathrm{Pa}$.
3. Odgovor: $p = 120\,000\,\mathrm{Pa} = 120\,\mathrm{kPa} = 1{,}2\,\mathrm{bar}$.
4. Smiselnost: vsakih $10\,\mathrm{m}$ vode doda približno $100\,000\,\mathrm{Pa}$, kar je približno en zračni tlak. Za $12\,\mathrm{m}$ je $120\,000\,\mathrm{Pa}$, torej prav.

### Primer 3: sila na steklo maske (težji)

Potapljač ima na globini $20\,\mathrm{m}$ v morju na potapljaški maski steklo s ploščino $150\,\mathrm{cm^2}$. Gostota morske vode je $1030\,\dfrac{\mathrm{kg}}{\mathrm{m^3}}$. S kolikšno silo pritiska voda na steklo (brez zračnega tlaka)?

**Podatki:** $h = 20\,\mathrm{m}$, $S = 150\,\mathrm{cm^2}$, $\rho = 1030\,\dfrac{\mathrm{kg}}{\mathrm{m^3}}$, $g = 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$; zračnega tlaka ne upoštevamo
**Iščemo:** silo $F$, s katero voda pritiska na steklo

:::formula
Najprej $p = \rho \, g \, h$, nato iz $p = \dfrac{F}{S}$ sledi $F = p \cdot S$ (ploščina v $\mathrm{m^2}$)
:::

**Rešitev:**

1. Najprej hidrostatični tlak: $p = \rho g h = 1030 \cdot 10 \cdot 20 = 206\,000\,\mathrm{Pa}$.
2. Ploščina v $\mathrm{m^2}$: $S = 150 : 10\,000 = 0{,}015\,\mathrm{m^2}$.
3. Formulo $p = \dfrac{F}{S}$ preoblikujemo v $F = p \cdot S$, ker iščemo silo.
4. Vstavimo: $F = 206\,000 \cdot 0{,}015 = 3090\,\mathrm{N}$.
5. Odgovor: voda pritiska na steklo s silo približno $3090\,\mathrm{N}$. To je sila, ki bi jo imela teža telesa z maso približno $309\,\mathrm{kg}$. Steklo zdrži, ker na njegovo notranjo stran pritiska zrak v maski: potapljač med spuščanjem skozi nos izdihuje zrak v masko in tako izenači tlak na obeh straneh stekla.

## Pogoste napake

- **Pozabljena pretvorba enot.** Če ploščino pustiš v $\mathrm{cm^2}$, rezultat ni v paskalih. Pred računom pretvori v $\mathrm{m^2}$ ($1\,\mathrm{m^2} = 10\,000\,\mathrm{cm^2}$).
- **Zamenjava sile in tlaka.** Sila ($\mathrm{N}$) in tlak ($\mathrm{Pa}$) nista isto. Večja sila ne pomeni nujno večjega tlaka, če je površina velika.
- **Mislimo, da je tlak odvisen od oblike posode.** Hidrostatični tlak je odvisen le od gostote in globine, ne od širine posode ali količine vode.
- **Globino merimo narobe.** $h$ je razdalja od gladine navzdol, ne od dna posode do točke.
- **Mislimo, da tlak v tekočini deluje samo navzdol.** Deluje v vseh smereh.

## Povzetek

- Tlak je količnik pravokotne sile in ploščine: $p = \dfrac{F}{S}$. Enota je paskal, $1\,\mathrm{Pa} = 1\,\dfrac{\mathrm{N}}{\mathrm{m^2}}$.
- Večja ploščina pomeni manjši tlak, manjša ploščina večji tlak.
- Tekočina pritiska v vse smeri, pravokotno na stene; na isti globini je tlak enak.
- Hidrostatični tlak: $p = \rho g h$. Odvisen je od gostote tekočine in globine, ne od oblike posode.
- Tlak v tekočini z globino narašča; v vodi približno za $100\,000\,\mathrm{Pa}$ na vsakih $10\,\mathrm{m}$.
- Silo na ploskev izračunamo kot $F = p \cdot S$.

## Drugače: Na sliki

Predstavljaj si stolp iz zloženih vrečk vode. Spodnja vrečka nosi vse nad seboj, zgornja skoraj nič. Tako je tudi v vodi: čim globlje si, več vode je nad tabo in večji je tlak.

Zdaj si zamisli dve posodi: ozko visoko cev in široko nizko skledo, obe napolnjeni do višine $h$. V cevi je vode malo, v skledi veliko. Vendar je vsaka točka na dnu obremenjena z istim "stolpcem" vode višine $h$ nad njo, zato je tlak enak.

V interaktivni simulaciji spodaj premikaj merilnik tlaka globlje v vodo in opazuj, kako se vrednost veča. Spreminjaj obliko posode in ugotovi, da se tlak na enaki globini ne spremeni. Poskusi tudi z drugo tekočino (večja gostota pomeni večji tlak).

## Drugače: Iz vsakdanjega življenja

- **Žebelj in kladivo.** Z roko pritiskaš na glavico žeblja z enako silo, kot jo ima konica na les. Ploščina konice je mnogo manjša, zato je tlak na les mnogo večji in žebelj prodre.
- **Smuči.** Težka oseba stoji na dveh ozkih čevljih in se pogrezne v sneg. S smučmi je ista teža razporejena na veliko ploščino, tlak je manjši in se ne pogrezne.
- **Bazen.** Na dnu globokega dela čutiš pritisk na ušesa. Tam je tlak večji zaradi večje globine, ne zaradi tega, da je voda "težja".
- **Jez.** Zid jezu je ob dnu debelejši kot zgoraj, ker je tlak ob dnu večji.

## Drugače: Korak za korakom s številkami

Primerjajmo tlak pri isti sili, a različni ploščini. Sila je $F = 600\,\mathrm{N}$ (teža osebe).

| Podlaga | Ploščina $S$ | Tlak $p = F/S$ |
|---|---|---|
| Dva čevlja | $0{,}04\,\mathrm{m^2}$ | $600 : 0{,}04 = 15\,000\,\mathrm{Pa}$ |
| Dve smuči | $0{,}30\,\mathrm{m^2}$ | $600 : 0{,}30 = 2000\,\mathrm{Pa}$ |

Smuči imajo $7{,}5$-krat večjo ploščino, zato je tlak $7{,}5$-krat manjši ($15\,000 : 2000 = 7{,}5$).

Hidrostatični tlak v vodi ($\rho = 1000\,\dfrac{\mathrm{kg}}{\mathrm{m^3}}$, $g = 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$):

| Globina $h$ | Račun | Tlak $p$ |
|---|---|---|
| $1\,\mathrm{m}$ | $1000 \cdot 10 \cdot 1$ | $10\,000\,\mathrm{Pa}$ |
| $5\,\mathrm{m}$ | $1000 \cdot 10 \cdot 5$ | $50\,000\,\mathrm{Pa}$ |
| $10\,\mathrm{m}$ | $1000 \cdot 10 \cdot 10$ | $100\,000\,\mathrm{Pa}$ |

Dvakrat globlje pomeni dvakrat večji tlak: tlak je **premo sorazmeren** z globino.

## Drugače: Bolj natančno (izpeljava)

Zamislimo si navpičen valj tekočine s ploščino osnovne ploskve $S$ in višino $h$, ki sega od gladine do opazovane globine. Prostornina valja je $V = S \cdot h$.

Masa tekočine v njem je $m = \rho V = \rho S h$, njena teža pa

$$F_g = m g = \rho S h g.$$

Ta teža pritiska na ploskev $S$ na dnu valja, zato je tlak

$$p = \frac{F_g}{S} = \frac{\rho S h g}{S} = \rho g h.$$

Ploščina $S$ se je pokrajšala, zato tlak ni odvisen od širine valja. Zato je hidrostatični tlak odvisen le od $\rho$, $g$ in $h$.

Opomba: tekočina pritiska enako v vseh smereh, ker se delci tekočine prosto premikajo in prenašajo tlak na vse strani. Zato isti $p$ velja tudi na bočno steno in na predmet v tej globini.

## Preveri se

? Kolikšen tlak povzroča sila $500\,\mathrm{N}$, ki deluje pravokotno na ploščino $0{,}25\,\mathrm{m^2}$?
- $125\,\mathrm{Pa}$
+ $2000\,\mathrm{Pa}$
- $500\,\mathrm{Pa}$
- $0{,}0005\,\mathrm{Pa}$
> Tlak je $p = \dfrac{F}{S} = \dfrac{500}{0{,}25} = 2000\,\mathrm{Pa}$. Odgovor $125$ dobiš, če silo množiš s ploščino, namesto da bi delil.

? Kolikšen je hidrostatični tlak v olju z gostoto $800\,\dfrac{\mathrm{kg}}{\mathrm{m^3}}$ na globini $5\,\mathrm{m}$? (Vzemi $g = 10\,\dfrac{\mathrm{N}}{\mathrm{kg}}$.)
- $4000\,\mathrm{Pa}$
- $400\,000\,\mathrm{Pa}$
+ $40\,000\,\mathrm{Pa}$
> $p = \rho g h = 800 \cdot 10 \cdot 5 = 40\,000\,\mathrm{Pa}$. Pri ostalih odgovorih je napaka v množenju ali v številu ničel.

? Dve posodi različnih oblik sta napolnjeni z vodo do iste višine $h$. Ena vsebuje $2\,\mathrm{l}$ vode, druga $20\,\mathrm{l}$. Kaj velja za hidrostatični tlak na njunih dnih?
- Večji je v posodi z več vode.
+ Enak je v obeh posodah.
- Večji je v posodi z manj vode.
- V ozki posodi je enak nič.
> Hidrostatični tlak je $p = \rho g h$ in je odvisen le od gostote tekočine in globine, ne od količine vode ali oblike posode. Obe posodi imata isti $\rho$ in isti $h$, zato je tlak enak.
