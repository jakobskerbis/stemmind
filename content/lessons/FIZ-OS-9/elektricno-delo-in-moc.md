---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih lekcij o električnem toku že veš, da električni tok $I$ merimo v amperih ($\mathrm{A}$) in električno napetost $U$ v voltih ($\mathrm{V}$). Veš tudi, da imajo porabniki (žarnica, grelnik, motor) različne lastnosti: nekateri svetijo močneje, drugi šibkeje, nekateri hitro segrejejo vodo, drugi počasi.

Na vsakem gospodinjskem aparatu je napisana številka v vatih ($\mathrm{W}$), na računu za elektriko pa so kilovatne ure ($\mathrm{kWh}$). Ti dve količini sta povezani z **električno močjo** in **električnim delom**. Ko ju razumeš, lahko izračunaš, koliko energije porabi aparat, koliko stane njegovo delovanje in kateri aparati največ obremenjujejo tvojo domačo denarnico.

## Razlaga

**1. Električno delo.** Ko teče tok skozi porabnik, se električna energija pretvarja v druge oblike: v svetlobo, toploto, gibanje. Koliko energije se pretvori, pove **električno delo** $A$. Merimo ga v joulih ($\mathrm{J}$).

**2. Električna moč.** Moč pove, **kako hitro** se električna energija pretvarja. Večja ko je moč, več energije se pretvori v vsaki sekundi. Moč označimo s $P$, merimo jo v vatih ($\mathrm{W}$).

$$P = U \cdot I$$

Moč je enaka produktu napetosti in toka. Torej: $1\,\mathrm{W} = 1\,\mathrm{V} \cdot 1\,\mathrm{A}$.

Pogosto uporabljamo tudi večjo enoto: $1\,\mathrm{kW} = 1000\,\mathrm{W}$.

**3. Zveza med delom in močjo.** Če porabnik deluje čas $t$ z močjo $P$, je opravljeno električno delo:

$$A = P \cdot t$$

Če je moč v vatih in čas v sekundah, je delo v joulih: $1\,\mathrm{J} = 1\,\mathrm{W} \cdot 1\,\mathrm{s}$.

Ker je $A = P \cdot t$ in $P = U \cdot I$, velja tudi:

$$A = U \cdot I \cdot t$$

**4. Kilovatna ura.** Joule je zelo majhna enota, zato elektrodistributerji merijo porabo v **kilovatnih urah** ($\mathrm{kWh}$). To je delo, ki ga opravi porabnik z močjo $1\,\mathrm{kW}$ v eni uri:

$$1\,\mathrm{kWh} = 1000\,\mathrm{W} \cdot 3600\,\mathrm{s} = 3\,600\,000\,\mathrm{J}$$

Pri računanju porabe doma navadno vstavimo moč v $\mathrm{kW}$ in čas v $\mathrm{h}$, delo dobimo neposredno v $\mathrm{kWh}$.

**5. Strošek.** Če poznaš ceno ene kilovatne ure, je strošek:

$$\text{strošek} = \text{delo v kWh} \cdot \text{cena na kWh}$$

**6. Kako izbrati enote.** Pazi, da so enote usklajene:

- delo v $\mathrm{J}$: moč v $\mathrm{W}$, čas v $\mathrm{s}$,
- delo v $\mathrm{kWh}$: moč v $\mathrm{kW}$, čas v $\mathrm{h}$.

## Rešeni primeri

### Primer 1: moč porabnika

Žarnica je priključena na napetost $230\,\mathrm{V}$ in skozi njo teče tok $0{,}1\,\mathrm{A}$. Kolikšna je njena moč?

**Podatki:** $U = 230\,\mathrm{V}$, $I = 0{,}1\,\mathrm{A}$
**Iščemo:** moč $P$

:::formula
$P = U \cdot I$
:::

**Rešitev:**

1. Poznamo napetost in tok, iščemo moč, zato uporabimo $P = U \cdot I$.
2. Vstavimo: $P = 230\,\mathrm{V} \cdot 0{,}1\,\mathrm{A} = 23\,\mathrm{W}$.
3. Preverimo smiselnost: $23\,\mathrm{W}$ je moč varčne svetilke, kar je realno.
4. Odgovor: moč žarnice je $23\,\mathrm{W}$.

### Primer 2: delo in poraba v kWh

Električni grelnik z močjo $2\,\mathrm{kW}$ deluje $3\,\mathrm{h}$. Koliko električnega dela opravi in koliko stane, če je cena $0{,}20\,\text{€}$ za $1\,\mathrm{kWh}$?

**Podatki:** $P = 2\,\mathrm{kW}$, $t = 3\,\mathrm{h}$, cena $0{,}20\,\text{€}$ za $1\,\mathrm{kWh}$
**Iščemo:** električno delo $A$ (v $\mathrm{kWh}$) in strošek

:::formula
$A = P \cdot t$ (moč v $\mathrm{kW}$ in čas v $\mathrm{h}$ dasta delo v $\mathrm{kWh}$), strošek = delo v $\mathrm{kWh}$ $\cdot$ cena na $\mathrm{kWh}$
:::

**Rešitev:**

1. Moč je že v $\mathrm{kW}$, čas v $\mathrm{h}$, zato delo dobimo neposredno v $\mathrm{kWh}$.
2. $A = P \cdot t = 2\,\mathrm{kW} \cdot 3\,\mathrm{h} = 6\,\mathrm{kWh}$.
3. Strošek: $6\,\mathrm{kWh} \cdot 0{,}20\,\dfrac{\text{€}}{\mathrm{kWh}} = 1{,}20\,\text{€}$.
4. Za primerjavo v joulih: $6 \cdot 3\,600\,000\,\mathrm{J} = 21\,600\,000\,\mathrm{J}$. Vidiš, da je $\mathrm{kWh}$ veliko bolj priročna enota.
5. Odgovor: grelnik opravi $6\,\mathrm{kWh}$ električnega dela, kar stane $1{,}20\,\text{€}$.

### Primer 3: tok iz moči in poraba v več dneh

Kuhalnik ima moč $1500\,\mathrm{W}$ in je priključen na $230\,\mathrm{V}$. a) Kolikšen tok teče skozi njega? b) Koliko energije porabi v $30$ dneh, če dnevno deluje $40\,\text{min}$, in koliko to stane pri ceni $0{,}20\,\text{€}$ za $1\,\mathrm{kWh}$?

**Podatki:** $P = 1500\,\mathrm{W}$, $U = 230\,\mathrm{V}$, $30$ dni po $40\,\text{min}$ na dan, cena $0{,}20\,\text{€}$ za $1\,\mathrm{kWh}$
**Iščemo:** a) tok $I$; b) električno delo $A$ v $\mathrm{kWh}$ in strošek

:::formula
a) Iz $P = U \cdot I$ sledi $I = \dfrac{P}{U}$. b) $A = P \cdot t$ (moč v $\mathrm{kW}$, čas v $\mathrm{h}$), strošek = $A$ $\cdot$ cena na $\mathrm{kWh}$
:::

**Rešitev:**

**a)**

1. Iz $P = U \cdot I$ izrazimo tok: $I = \dfrac{P}{U}$.
2. $I = \dfrac{1500\,\mathrm{W}}{230\,\mathrm{V}} \approx 6{,}5\,\mathrm{A}$.

**b)**

1. Skupni čas: $30 \cdot 40\,\text{min} = 1200\,\text{min}$. To je $\dfrac{1200}{60}\,\mathrm{h} = 20\,\mathrm{h}$.
2. Moč v kilovatih: $1500\,\mathrm{W} = 1{,}5\,\mathrm{kW}$.
3. $A = P \cdot t = 1{,}5\,\mathrm{kW} \cdot 20\,\mathrm{h} = 30\,\mathrm{kWh}$.
4. Pri ceni $0{,}20\,\text{€}/\mathrm{kWh}$ je strošek $30 \cdot 0{,}20 = 6{,}00\,\text{€}$.

**Odgovor:** a) skozi kuhalnik teče približno $6{,}5\,\mathrm{A}$; b) v $30$ dneh porabi $30\,\mathrm{kWh}$, kar stane $6{,}00\,\text{€}$.

## Pogoste napake

- **Zamenjava moči in dela.** Moč ($\mathrm{W}$) pove, kako hitro se energija pretvarja, delo ($\mathrm{J}$ ali $\mathrm{kWh}$) pa koliko je je skupaj. Kilovatna ura je enota za **delo**, ne za moč.
- **Neusklajene enote.** Če moč vstaviš v $\mathrm{W}$ in čas v urah, rezultat ni niti v $\mathrm{J}$ niti v $\mathrm{kWh}$. Moč v $\mathrm{W}$ pomeni čas v $\mathrm{s}$; moč v $\mathrm{kW}$ pomeni čas v $\mathrm{h}$.
- **Minute namesto ur.** $40\,\text{min}$ ni $40\,\mathrm{h}$ in tudi ne $0{,}40\,\mathrm{h}$. Pravilno: $\dfrac{40}{60}\,\mathrm{h} \approx 0{,}67\,\mathrm{h}$.
- **Pozabljena pretvorba $\mathrm{W}$ v $\mathrm{kW}$.** $1500\,\mathrm{W}$ je $1{,}5\,\mathrm{kW}$, ne $15\,\mathrm{kW}$ in ne $150\,\mathrm{kW}$.
- **Mešanje formul.** $P = U \cdot I$ ne vsebuje časa. Čas pride šele pri delu: $A = P \cdot t$.

## Povzetek

- Električna moč pove, kako hitro se električna energija pretvarja: $P = U \cdot I$, enota $\mathrm{W}$.
- Električno delo: $A = P \cdot t = U \cdot I \cdot t$, enota $\mathrm{J}$.
- $1\,\mathrm{kWh} = 3\,600\,000\,\mathrm{J}$; to je delo moči $1\,\mathrm{kW}$ v eni uri.
- Strošek = poraba v $\mathrm{kWh}$ $\cdot$ cena na $\mathrm{kWh}$.
- Pri računanju pazi na enote: $\mathrm{W}$ in $\mathrm{s}$ dasta $\mathrm{J}$; $\mathrm{kW}$ in $\mathrm{h}$ dasta $\mathrm{kWh}$.

## Drugače: Na sliki

Predstavljaj si vodo, ki teče po cevi. Napetost je kot višinska razlika (kako visoko je zbiralnik vode), tok je kot količina vode, ki steče v vsaki sekundi. Če je višinska razlika velika in teče veliko vode, je moč vodnega toka velika.

Enako je pri elektriki: večja napetost $U$ in večji tok $I$ pomenita večjo moč $P = U \cdot I$.

Moč si lahko predstavljaš tudi kot **hitrost polnjenja kozarca**. Delo je količina vode v kozarcu, moč pa to, kako hitro se kozarec polni. Močan grelnik (velik $P$) v isti uri »natoči« več energije kot šibak.

## Drugače: Iz vsakdanjega življenja

Poglej si račun za elektriko. Na njem je poraba v $\mathrm{kWh}$. To je delo, ki so ga opravili vsi aparati pri vas doma v obračunskem obdobju.

Primerjajmo dva aparata, ki oba delujeta $1\,\mathrm{h}$:

- LED žarnica $10\,\mathrm{W} = 0{,}01\,\mathrm{kW}$: $A = 0{,}01\,\mathrm{kWh}$,
- sušilnik las $2000\,\mathrm{W} = 2\,\mathrm{kW}$: $A = 2\,\mathrm{kWh}$.

Sušilnik v eni uri porabi $200$-krat več energije kot žarnica. Zato je za nizek račun pomembnejše, kako **dolgo** in **kako močni** aparati delujejo, ne le, koliko jih imaš. Aparat z veliko močjo, ki deluje le nekaj minut (sušilnik las), lahko porabi manj kot šibak aparat, ki deluje ves dan (npr. LED žarnica z $10\,\mathrm{W}$, ki v $24\,\mathrm{h}$ porabi $0{,}24\,\mathrm{kWh}$, sušilnik z $2\,\mathrm{kW}$ pa v $5\,\text{min}$ le približno $0{,}17\,\mathrm{kWh}$).

## Drugače: Korak za korakom s številkami

Recept za nalogo o porabi energije:

1. Izpiši podatke in enote: $P$, $t$, cena.
2. Pretvori moč v $\mathrm{kW}$: deli z $1000$.
3. Pretvori čas v $\mathrm{h}$: minute deli s $60$.
4. Izračunaj $A = P \cdot t$.
5. Pomnoži s ceno.

Primer: družina gleda televizor z močjo $120\,\mathrm{W}$ po $4\,\mathrm{h}$ na dan. Koliko stane to v $30$ dneh pri ceni $0{,}20\,\text{€}/\mathrm{kWh}$?

| Korak | Račun | Rezultat |
|---|---|---|
| Moč v kW | $120 : 1000$ | $0{,}12\,\mathrm{kW}$ |
| Dnevno delo | $0{,}12 \cdot 4$ | $0{,}48\,\mathrm{kWh}$ |
| Delo v 30 dneh | $0{,}48 \cdot 30$ | $14{,}4\,\mathrm{kWh}$ |
| Strošek | $14{,}4 \cdot 0{,}20$ | $2{,}88\,\text{€}$ |

## Drugače: Bolj natančno

Zakaj je $P = U \cdot I$? Napetost $U$ pove, koliko dela opravi električno polje na enoto naboja: $U = \dfrac{A}{q}$. Električni tok pove, koliko naboja steče v enoti časa: $I = \dfrac{q}{t}$.

Iz prve zveze je delo $A = U \cdot q$. Naboj izrazimo iz toka: $q = I \cdot t$. Vstavimo:

$$A = U \cdot I \cdot t$$

Moč je delo na enoto časa:

$$P = \frac{A}{t} = U \cdot I$$

Enote se ujemajo: $1\,\mathrm{V} = 1\,\dfrac{\mathrm{J}}{\mathrm{C}}$ in $1\,\mathrm{A} = 1\,\dfrac{\mathrm{C}}{\mathrm{s}}$, zato $1\,\mathrm{V} \cdot 1\,\mathrm{A} = 1\,\dfrac{\mathrm{J}}{\mathrm{s}} = 1\,\mathrm{W}$.

## Preveri se

? Na aparatu je napisano $230\,\mathrm{V}$ in skozi njega teče tok $2\,\mathrm{A}$. Kolikšna je njegova moč?
- $115\,\mathrm{W}$
+ $460\,\mathrm{W}$
- $232\,\mathrm{W}$
- $4{,}6\,\mathrm{W}$
> Moč je $P = U \cdot I = 230\,\mathrm{V} \cdot 2\,\mathrm{A} = 460\,\mathrm{W}$. Odgovor $115\,\mathrm{W}$ dobiš, če napetost deliš s tokom namesto da ju množiš.

? Pečica z močjo $2\,\mathrm{kW}$ deluje $45\,\text{min}$. Koliko električnega dela opravi?
- $90\,\mathrm{kWh}$
- $2{,}045\,\mathrm{kWh}$
+ $1{,}5\,\mathrm{kWh}$
- $0{,}75\,\mathrm{kWh}$
> $45\,\text{min} = 0{,}75\,\mathrm{h}$, zato $A = 2\,\mathrm{kW} \cdot 0{,}75\,\mathrm{h} = 1{,}5\,\mathrm{kWh}$. Odgovor $90$ dobiš, če minute vstaviš kot ure, $0{,}75$ pa, če pozabiš pomnožiti z močjo.

? Kaj merimo v kilovatnih urah ($\mathrm{kWh}$)?
- električno moč
+ električno delo (porabljeno energijo)
- električni tok
> Kilovatna ura je enota za delo oziroma energijo, saj je to moč v $\mathrm{kW}$, pomnožena s časom v $\mathrm{h}$. Moč merimo v vatih, tok v amperih.
