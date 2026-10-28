---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Pri delu si spoznal, da sila, ki deluje vzdolž poti, opravi delo: $A = F s \cos\alpha$. Znaš tudi izračunati hitrost iz poti in časa ter veš, da na telesa blizu Zemlje deluje teža $F_g = mg$.

Energija je eden najpomembnejših pojmov v fiziki. Z njo lahko veliko problemov rešiš **brez podrobnega spremljanja gibanja**. Če poznaš višino, s katere se spustijo sani, lahko izračunaš njihovo hitrost na dnu, ne da bi poznal obliko pobočja. Enako velja za konstruktorja toboganov, za voznika, ki mora vedeti, koliko daljšo zavorno pot potrebuje avto pri dvakrat večji hitrosti, in za kolesarja, ki prosto drvi po klancu navzdol.

## Razlaga

**1. Kaj je energija.** Energija je merilo za to, koliko dela lahko telo opravi oziroma koliko dela je bilo nad njim opravljenega. Označimo jo z $W$, enota je **joule**:

$$1\,\mathrm{J} = 1\,\mathrm{N\,m} = 1\,\mathrm{kg\,m^2/s^2}$$

Delo in energija sta povezana: **opravljeno delo je enako spremembi energije**, $A = \Delta W$.

**2. Kinetična energija** je energija gibanja. Telo z maso $m$ in hitrostjo $v$ ima:

$$W_k = \frac{mv^2}{2}$$

Hitrost nastopa v *kvadratu*. Pri dvakrat večji hitrosti je kinetična energija štirikrat večja.

**3. Potencialna (težna) energija** je energija zaradi lege telesa v težnostnem polju. Telo z maso $m$ na višini $h$ nad izbrano ničelno ravnjo ima:

$$W_p = mgh$$

Pri tem je $g = 9{,}8\,\mathrm{m/s^2}$. Ničelno raven si izbereš sam (tla, miza, dno doline). Pomembne so le **spremembe** potencialne energije, zato ni treba, da je izbira ničle vedno enaka, v isti nalogi pa jo uporabljaj dosledno.

**4. Prožnostna energija** je energija raztegnjene ali stisnjene vzmeti. Če ima vzmet prožnostni koeficient $k$ in je raztegnjena ali stisnjena za $x$ glede na ravnovesno lego, velja:

$$W_{pr} = \frac{kx^2}{2}$$

Enota za $k$ je $\mathrm{N/m}$, za $x$ pa $\mathrm{m}$. Spet nastopa kvadrat: pri dvakrat večjem raztezku je energija štirikrat večja.

**5. Ohranitev energije.** Energije ni mogoče ustvariti ali uničiti, mogoče jo je le pretvarjati iz ene oblike v drugo ali prenašati med telesi. V sistemu, kjer ni trenja in upora, se **mehanska energija** ohranja:

$$W_k + W_p + W_{pr} = \text{konst.}$$

Če so v začetnem stanju (1) in končnem stanju (2) prisotni vsi trije členi:

$$W_{k1} + W_{p1} + W_{pr1} = W_{k2} + W_{p2} + W_{pr2}$$

**6. Kaj pa trenje?** Če deluje trenje ali zračni upor, se mehanska energija zmanjšuje. Ta energija pa **ni izginila**: pretvori se v notranjo energijo (telesa in okolica se nekoliko segrejejo). Skupna energija se še vedno ohranja.

**7. Kako rešuješ naloge z energijo.**

1. Določi začetno in končno stanje.
2. Izberi ničelno raven za potencialno energijo.
3. Za vsako stanje zapiši, katere oblike energije so prisotne.
4. Izenači skupni energiji in izrazi neznanko.

V interaktivni simulaciji spodaj lahko opazuješ, kako se pri drsalcu na klancu energija neprestano pretvarja med kinetično in potencialno, in kaj se zgodi, ko vklopiš trenje.

## Rešeni primeri

### Primer 1: kinetična energija avtomobila

Avto z maso $1000\,\mathrm{kg}$ vozi s hitrostjo $72\,\mathrm{km/h}$. Kolikšna je njegova kinetična energija? Kolikšna bi bila pri dvakrat večji hitrosti?

**Podatki:** $m = 1000\,\mathrm{kg}$, $v = 72\,\mathrm{km/h}$; v drugem delu dvakrat večja hitrost $2v$
**Iščemo:** kinetično energijo $W_k$ pri hitrosti $v$ in pri hitrosti $2v$

:::formula
$W_k = \dfrac{mv^2}{2}$ (hitrost mora biti v $\mathrm{m/s}$: $\mathrm{km/h}$ delimo s $3{,}6$)
:::

**Rešitev:**

1. **Pretvorba enot.** Formula zahteva $\mathrm{m/s}$: $72\,\mathrm{km/h} = 72 : 3{,}6 = 20\,\mathrm{m/s}$.
2. **Vstavimo:** $W_k = \dfrac{mv^2}{2} = \dfrac{1000 \cdot 20^2}{2} = \dfrac{1000 \cdot 400}{2} = 200\,000\,\mathrm{J} = 200\,\mathrm{kJ}$.
3. **Dvojna hitrost:** $v = 40\,\mathrm{m/s}$, $W_k = \dfrac{1000 \cdot 1600}{2} = 800\,000\,\mathrm{J} = 800\,\mathrm{kJ}$.
4. **Preverimo:** $800 : 200 = 4$, torej je energija res štirikrat večja. Zato je zaviranje pri veliki hitrosti tako dolgo: zavore morajo odvzeti štirikrat več energije.

### Primer 2: padec kamna

Kamen spustimo z višine $5{,}0\,\mathrm{m}$ (začetna hitrost je $0$). S kolikšno hitrostjo zadene tla? Zanemari upor zraka.

**Podatki:** $h = 5{,}0\,\mathrm{m}$, $v_0 = 0$, $g = 9{,}8\,\mathrm{m/s^2}$, upor zraka zanemarimo
**Iščemo:** hitrost $v$ tik nad tlemi

:::formula
Ohranitev mehanske energije: $W_{p1} = W_{k2}$, torej $mgh = \dfrac{mv^2}{2}$
:::

**Rešitev:**

1. **Stanji.** (1) Kamen miruje na višini $h$. (2) Kamen je tik nad tlemi. Ničelno raven izberemo pri tleh.
2. **Energija v stanju 1:** $W_{k1} = 0$ (miruje), $W_{p1} = mgh$.
3. **Energija v stanju 2:** $W_{p2} = 0$ (višina je $0$), $W_{k2} = \dfrac{mv^2}{2}$.
4. **Ohranitev:** $mgh = \dfrac{mv^2}{2}$. Maso lahko krajšamo, zato hitrost ni odvisna od mase kamna.
5. **Izrazimo hitrost:** $v^2 = 2gh = 2 \cdot 9{,}8 \cdot 5{,}0 = 98\,\mathrm{m^2/s^2}$, torej $v = \sqrt{98} \approx 9{,}9\,\mathrm{m/s}$.
6. **Preverimo:** $9{,}9\,\mathrm{m/s}$ je približno $36\,\mathrm{km/h}$, kar je smiselno za padec s približno petih metrov.

### Primer 3: vzmet izstreli telo

Vzmet s prožnostnim koeficientom $k = 200\,\mathrm{N/m}$ stisnemo za $x = 0{,}10\,\mathrm{m}$. Pred njo leži telo z maso $m = 0{,}050\,\mathrm{kg}$ na gladki vodoravni podlagi (brez trenja). Ko vzmet spustimo, izstreli telo.
a) S kolikšno hitrostjo telo zapusti vzmet?
b) Telo nato zdrsi po gladkem klancu navzgor. Do katere višine se dvigne?

**Podatki:** $k = 200\,\mathrm{N/m}$, $x = 0{,}10\,\mathrm{m}$, $m = 0{,}050\,\mathrm{kg}$, $g = 9{,}8\,\mathrm{m/s^2}$, podlaga in klanec sta brez trenja
**Iščemo:** a) hitrost $v$, s katero telo zapusti vzmet; b) višino $h$, do katere se dvigne

:::formula
Ohranitev mehanske energije: $W_{pr} = \dfrac{kx^2}{2}$, $\dfrac{kx^2}{2} = \dfrac{mv^2}{2}$ (a) in $\dfrac{mv^2}{2} = mgh$ (b)
:::

**Rešitev:**

1. **Začetna energija (stisnjena vzmet):** $W_{pr} = \dfrac{kx^2}{2} = \dfrac{200 \cdot 0{,}10^2}{2} = \dfrac{200 \cdot 0{,}01}{2} = 1{,}0\,\mathrm{J}$.
2. **a) Vsa prožnostna energija se pretvori v kinetično:** $\dfrac{mv^2}{2} = 1{,}0\,\mathrm{J}$.
3. $v^2 = \dfrac{2 \cdot 1{,}0}{0{,}050} = 40\,\mathrm{m^2/s^2}$, zato $v = \sqrt{40} \approx 6{,}3\,\mathrm{m/s}$.
4. **b) Na vrhu se telo za trenutek ustavi,** vsa kinetična energija je postala potencialna: $mgh = 1{,}0\,\mathrm{J}$.
5. $h = \dfrac{1{,}0}{0{,}050 \cdot 9{,}8} = \dfrac{1{,}0}{0{,}49} \approx 2{,}0\,\mathrm{m}$.
6. **Preverimo:** pri obeh delih je skupna energija ves čas $1{,}0\,\mathrm{J}$, spremenila se je le njena oblika: prožnostna, kinetična, potencialna.

## Pogoste napake

- **Pozabljena pretvorba enot.** Hitrost v $\mathrm{km/h}$ moraš pred uporabo formule pretvoriti v $\mathrm{m/s}$ (deli s $3{,}6$).
- **Pozabljen kvadrat ali faktor $\tfrac12$.** Pri $W_k$ in $W_{pr}$ je kvadrat na $v$ oziroma $x$, ne na celotnem izrazu. Pri $W_k = mv^2/2$ ne pozabi na deljenje z $2$.
- **Raztezek $x$ zamenjaš z dolžino vzmeti.** V formuli je $x$ sprememba dolžine glede na ravnovesno lego, ne celotna dolžina vzmeti.
- **Nejasna ničelna raven.** Če pri začetnem stanju računaš višino od tal, jo moraš tako računati tudi pri končnem.
- **»Energija se izgubi.«** Pri trenju se mehanska energija zmanjša, vendar se spremeni v notranjo energijo. Skupna energija se ohranja.
- **Misliš, da je hitrost pri prostem padu odvisna od mase.** V primeru 2 se masa pokrajša: težji kamen pade z enako hitrostjo kot lažji (če zanemarimo upor zraka).

## Povzetek

- Energija ima enoto joule ($\mathrm{J}$). Opravljeno delo je enako spremembi energije: $A = \Delta W$.
- Kinetična energija: $W_k = \dfrac{mv^2}{2}$.
- Potencialna (težna) energija: $W_p = mgh$, višino merimo od izbrane ničelne ravni.
- Prožnostna energija: $W_{pr} = \dfrac{kx^2}{2}$.
- Brez trenja in upora se mehanska energija ohranja: $W_k + W_p + W_{pr} = \text{konst.}$ Pri trenju se del energije spremeni v notranjo, skupna energija se ohranja.
- Pri nalogah: določi stanji, izberi ničelno raven, zapiši energije in jih izenači.

## Drugače: Na sliki

Predstavljaj si energijo kot stolpčni diagram z več barvami: en stolpec za kinetično, drugi za potencialno, tretji za prožnostno energijo. Skupna višina vseh stolpcev (skupna energija) ostane enaka, spreminja se le razmerje barv.

Drsalec na vrhu klanca ima visok stolpec potencialne energije in nič kinetične. Ko drsi navzdol, se potencialni stolpec zmanjšuje, kinetični pa raste. Na dnu je skoraj vsa energija kinetična. Ko se vzpenja po nasprotnem pobočju, se vse zgodi v obratnem vrstnem redu.

Če v interaktivni simulaciji spodaj vklopiš trenje, se pojavi še četrti stolpec: notranja (toplotna) energija. Ta stolpec raste, skupna višina vseh stolpcev pa še vedno ostaja nespremenjena.

Podobno velja za vzmet: stisnjena vzmet ima visok stolpec prožnostne energije. Ko jo spustimo, se ta stolpec zmanjšuje, kinetični pa raste.

## Drugače: Iz vsakdanjega življenja

**Vlakec smrti.** Verige vlečejo voziček na prvi, najvišji vrh, kjer mu dovedejo potencialno energijo. Od tam naprej motorja ni več: voziček se giblje samo zaradi pretvorbe potencialne energije v kinetično in nazaj. Zato noben naslednji hrib ne sme biti višji od prvega. Če bi bil, vozičku ne bi zadostovala energija, ki jo je dobil na začetku.

**Analogija z denarjem.** Energijo si lahko predstavljaš kot denar v več denarnicah (kinetična, potencialna, prožnostna). Denar prelagaš iz denarnice v denarnico, skupna vsota se ne spremeni. Trenje je kot provizija: denar gre v »denarnico« notranje energije, ni pa izginil.

**Zaviranje avta.** Kinetična energija avta se pri zaviranju pretvori v notranjo energijo zavor (te se segrejejo). Ker je kinetična energija sorazmerna s $v^2$, potrebuje avto pri dvakrat večji hitrosti štirikrat daljšo zavorno pot.

**Lok in puščica.** Napeta vrvica loka hrani prožnostno energijo. Ko jo spustimo, se ta energija pretvori v kinetično energijo puščice.

## Drugače: Korak za korakom s številkami

Telo z maso $m = 1{,}0\,\mathrm{kg}$ spustimo z višine $10\,\mathrm{m}$. Ničelna raven je pri tleh. Računamo $W_p = mgh$ in kinetično energijo iz ohranitve: $W_k = W_{\text{skupna}} - W_p$.

Skupna energija je na začetku: $W = 1{,}0 \cdot 9{,}8 \cdot 10 = 98\,\mathrm{J}$.

| Višina $h$ | $W_p = mgh$ | $W_k = 98\,\mathrm{J} - W_p$ | Skupaj |
|---|---|---|---|
| $10\,\mathrm{m}$ | $98\,\mathrm{J}$ | $0\,\mathrm{J}$ | $98\,\mathrm{J}$ |
| $7{,}5\,\mathrm{m}$ | $73{,}5\,\mathrm{J}$ | $24{,}5\,\mathrm{J}$ | $98\,\mathrm{J}$ |
| $5\,\mathrm{m}$ | $49\,\mathrm{J}$ | $49\,\mathrm{J}$ | $98\,\mathrm{J}$ |
| $2{,}5\,\mathrm{m}$ | $24{,}5\,\mathrm{J}$ | $73{,}5\,\mathrm{J}$ | $98\,\mathrm{J}$ |
| $0\,\mathrm{m}$ | $0\,\mathrm{J}$ | $98\,\mathrm{J}$ | $98\,\mathrm{J}$ |

Opaziš lahko:

- Skupna energija je v vsaki vrstici enaka.
- Na polovični višini ($5\,\mathrm{m}$) sta kinetična in potencialna energija enaki.
- Hitrost na tleh dobiš iz $\dfrac{mv^2}{2} = 98\,\mathrm{J}$: $v^2 = 196$, $v = 14\,\mathrm{m/s}$.

## Drugače: Bolj natančno

Zakaj imata kinetična in potencialna energija ravno takšni obliki? Izpeljemo ju iz dela.

**Kinetična energija.** Telo z maso $m$, ki miruje, pospešujemo s stalno silo $F$ vzdolž poti $s$. Po drugem Newtonovem zakonu je pospešek $a = F/m$. Pri enakomerno pospešenem gibanju iz mirovanja velja $v^2 = 2as$, torej $s = \dfrac{v^2}{2a}$. Opravljeno delo je:

$$A = F s = m a \cdot \frac{v^2}{2a} = \frac{mv^2}{2}$$

To delo se je shranilo kot kinetična energija telesa.

**Potencialna energija.** Telo z maso $m$ dvigamo enakomerno (brez pospeševanja), zato je sila dvigovanja enaka teži: $F = mg$. Če ga dvignemo za višino $h$, je opravljeno delo $A = F h = mgh$. Shranilo se je kot potencialna energija.

**Ohranitev pri prostem padu.** Telo pada s pospeškom $g$. Po padcu za višino $h$ iz mirovanja velja $v^2 = 2gh$. Pomnožimo z $m/2$:

$$\frac{mv^2}{2} = mgh$$

To je natanko ohranitev energije: kar telo izgubi pri potencialni energiji, pridobi pri kinetični.

**Prožnostna energija.** Sila vzmeti je sorazmerna z raztezkom: $F = kx$. Ker sila narašča od $0$ do $kx$, je njena povprečna vrednost $\dfrac{kx}{2}$. Delo pri raztegu za $x$ je zato $\dfrac{kx}{2} \cdot x = \dfrac{kx^2}{2}$. (Natančneje: delo je ploščina pod grafom $F(x)$, to je ploščina trikotnika z osnovnico $x$ in višino $kx$, torej $\dfrac{x \cdot kx}{2}$.)

## Preveri se

? Telo z maso $2\,\mathrm{kg}$ se giblje s hitrostjo $3\,\mathrm{m/s}$. Kolikšna je njegova kinetična energija?
- $18\,\mathrm{J}$
- $6\,\mathrm{J}$
+ $9\,\mathrm{J}$
> $W_k = \dfrac{mv^2}{2} = \dfrac{2 \cdot 3^2}{2} = \dfrac{18}{2} = 9\,\mathrm{J}$. Pri odgovoru $18\,\mathrm{J}$ je pozabljeno deljenje z $2$, odgovor $6\,\mathrm{J}$ pa je produkt $mv$ brez kvadrata.

? Vzmet s prožnostnim koeficientom $k = 100\,\mathrm{N/m}$ stisnemo za $0{,}20\,\mathrm{m}$. Kolikšna je njena prožnostna energija?
- $20\,\mathrm{J}$
- $4\,\mathrm{J}$
+ $2\,\mathrm{J}$
> $W_{pr} = \dfrac{kx^2}{2} = \dfrac{100 \cdot 0{,}20^2}{2} = \dfrac{100 \cdot 0{,}04}{2} = 2\,\mathrm{J}$. Odgovor $20\,\mathrm{J}$ je $kx$ brez kvadrata in brez delitve z $2$, pri odgovoru $4\,\mathrm{J}$ pa je pozabljeno deljenje z $2$.

? Telo spustimo iz mirovanja z višine $h$ nad tlemi in zanemarimo upor zraka. Na kateri višini sta kinetična in potencialna energija telesa enaki?
- Tik pred trkom ob tla
- Na višini $\dfrac{h}{4}$
+ Na višini $\dfrac{h}{2}$
> Skupna energija je $mgh$. Na višini $\dfrac{h}{2}$ je $W_p = \dfrac{mgh}{2}$, zato je $W_k = mgh - \dfrac{mgh}{2} = \dfrac{mgh}{2}$, torej sta enaki. Tik pred trkom je potencialna energija že $0$, na višini $\dfrac{h}{4}$ pa je potencialna energija le $\dfrac{mgh}{4}$, kinetična pa $\dfrac{3mgh}{4}$.
