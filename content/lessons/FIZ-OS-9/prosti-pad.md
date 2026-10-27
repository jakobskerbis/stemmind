---
stanje: osnutek
demo: prosti-pad
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz prejšnjih tem že veš, kaj je hitrost ($v = s/t$), da se hitrost telesa spreminja, če nanj deluje sila, in da ima težnost vedno enako smer: navzdol proti tlom. Vsak dan opaziš, da stvari padajo: telefon ti zdrsne iz roke, jabolko pade z veje, kapljica z vrha strehe.

Zanima nas, **kako hitro** telo pada in **kako daleč** pade v določenem času. Odgovor je presenetljivo preprost: pri padanju brez upora zraka se hitrost vsako sekundo poveča za enako vrednost. S tem znaš oceniti, kako globoka je vodnjak (spustiš kamen in izmeriš čas do pljuska), kako hitro priletiš na tla s skoka ali kako dolgo pada predmet z balkona.

## Razlaga

**1. Kaj je prosti pad.** Prosti pad je gibanje telesa samo pod vplivom težnosti, brez drugih sil. V resnici vedno deluje tudi upor zraka, vendar je pri gostih in majhnih telesih (kamen, kovinska kroglica) na kratkih razdaljah tako majhen, da ga lahko zanemarimo. Pri peresu ali listu papirja upor ni zanemarljiv, zato padata počasi.

**2. Pospešek.** Pospešek pove, za koliko se hitrost spremeni v eni sekundi. Pri prostem padu je pospešek vedno enak. Imenujemo ga **težnostni pospešek** in ga označimo z $g$. Na Zemlji je

$$g \approx 9{,}8\,\mathrm{\frac{m}{s^2}}$$

To pomeni: vsako sekundo se hitrost padajočega telesa poveča za približno $9{,}8\,\mathrm{\frac{m}{s}}$. Za enostavnejše računanje pogosto vzamemo $g \approx 10\,\mathrm{\frac{m}{s^2}}$. V tej lekciji bomo uporabljali $g = 9{,}8\,\mathrm{\frac{m}{s^2}}$, razen kjer je zapisano drugače.

**3. Vsa telesa padajo enako.** Brez upora zraka težko in lahko telo padata z enakim pospeškom. Masa na pospešek ne vpliva. Težje telo sicer privlači večja sila, vendar ga je zaradi večje mase tudi težje pospešiti, in se to natanko izravna.

**4. Hitrost pri prostem padu.** Telo spustimo (začetna hitrost je $0$). Po času $t$ je hitrost

$$v = g\,t$$

**5. Prepotovana pot (višina padca).** Ker se hitrost enakomerno povečuje od $0$ do $g\,t$, je povprečna hitrost $\dfrac{g\,t}{2}$, pot pa je povprečna hitrost krat čas:

$$h = \frac{1}{2}\,g\,t^2$$

Pot narašča s **kvadratom** časa: če je čas dvakrat daljši, je pot štirikrat daljša.

**6. Drugi nebesni objekti.** Težnostni pospešek je odvisen od nebesnega telesa. Na Luni je približno $1{,}6\,\mathrm{\frac{m}{s^2}}$, na Marsu približno $3{,}7\,\mathrm{\frac{m}{s^2}}$. Iste formule veljajo, le $g$ je drugačen.

## Rešeni primeri

### Primer 1: hitrost po določenem času (lažji)

Kamen spustimo z roke. Kolikšna je njegova hitrost po $3\,\mathrm{s}$? Upor zraka zanemarimo.

1. Telo je spuščeno, zato velja $v = g\,t$.
2. Vstavimo: $v = 9{,}8\,\mathrm{\frac{m}{s^2}} \cdot 3\,\mathrm{s}$.
3. Izračunamo: $v = 29{,}4\,\mathrm{\frac{m}{s}}$.
4. Smiselnost: vsako sekundo se hitrost poveča za $9{,}8\,\mathrm{\frac{m}{s}}$, torej po treh sekundah za $3 \cdot 9{,}8 = 29{,}4\,\mathrm{\frac{m}{s}}$. ✓

### Primer 2: globina vodnjaka

Kamen spustimo v vodnjak in pljusk slišimo (oziroma vidimo) po $2\,\mathrm{s}$. Kako globok je vodnjak? Čas, ki ga potrebuje zvok, zanemarimo.

1. Iščemo pot pri prostem padu: $h = \dfrac{1}{2}\,g\,t^2$.
2. Najprej izračunamo kvadrat časa: $t^2 = 2^2 = 4\,\mathrm{s^2}$. (Kvadriramo čas, ne produkta $g\,t$.)
3. Vstavimo: $h = \dfrac{1}{2} \cdot 9{,}8 \cdot 4 = 19{,}6\,\mathrm{m}$.
4. Preverimo s hitrostjo: po $2\,\mathrm{s}$ je $v = 19{,}6\,\mathrm{\frac{m}{s}}$, povprečna hitrost je $9{,}8\,\mathrm{\frac{m}{s}}$, pot je $9{,}8 \cdot 2 = 19{,}6\,\mathrm{m}$. ✓

Vodnjak je globok približno $19{,}6\,\mathrm{m}$.

### Primer 3: čas padanja in končna hitrost (težji)

Predmet pade z balkona na višini $20\,\mathrm{m}$. Izračunaj, kako dolgo pada in s kolikšno hitrostjo zadene tla. Vzemi $g = 10\,\mathrm{\frac{m}{s^2}}$.

1. **Kaj iščemo.** Najprej čas $t$, potem hitrost $v$.
2. **Čas iz poti.** Iz $h = \dfrac{1}{2}\,g\,t^2$ izrazimo $t^2$: množimo z $2$ in delimo z $g$:
 $$t^2 = \frac{2h}{g} = \frac{2 \cdot 20}{10} = 4\,\mathrm{s^2}$$
3. **Koren.** Iščemo $t$, ne $t^2$: $t = \sqrt{4} = 2\,\mathrm{s}$.
4. **Hitrost.** $v = g\,t = 10 \cdot 2 = 20\,\mathrm{\frac{m}{s}}$.
5. **Preverimo.** $\dfrac{1}{2} \cdot 10 \cdot 2^2 = 20\,\mathrm{m}$, kar je res višina balkona. ✓
6. **Občutek.** $20\,\mathrm{\frac{m}{s}} = 72\,\mathrm{\frac{km}{h}}$, saj $20 \cdot 3{,}6 = 72$. Predmet torej tla zadene s hitrostjo avtomobila v naselju.

**Odgovor:** pada $2\,\mathrm{s}$ in zadene tla s hitrostjo $20\,\mathrm{\frac{m}{s}}$.

## Pogoste napake

- **Mislimo, da težja telesa padajo hitreje.** Brez upora zraka vsa telesa padajo z enakim pospeškom. Masa v formulah $v = g\,t$ in $h = \frac{1}{2} g t^2$ sploh ne nastopa.
- **Pozabljeno kvadriranje časa.** Pri $h = \frac{1}{2} g t^2$ kvadriramo samo čas. Pri $t = 3\,\mathrm{s}$ je $t^2 = 9$, ne $6$.
- **Pozabljen faktor $\frac{1}{2}$.** Če izračunaš $g\,t^2$, dobiš dvakrat preveliko pot.
- **Pozabljen koren.** Ko iz višine računaš čas, dobiš najprej $t^2$. Na koncu moraš koreniti.
- **Mešanje pospeška in hitrosti.** $g$ ni hitrost telesa, ampak pove, kako hitro se hitrost spreminja. Enota $\mathrm{\frac{m}{s^2}}$ je drugačna od enote za hitrost $\mathrm{\frac{m}{s}}$.
- **Pot je sorazmerna s časom.** Ni res: po dvakrat daljšem času je pot štirikrat daljša.

## Povzetek

- Prosti pad je gibanje samo pod vplivom težnosti (upor zraka zanemarimo).
- Težnostni pospešek na Zemlji je $g \approx 9{,}8\,\mathrm{\frac{m}{s^2}}$ (približno $10\,\mathrm{\frac{m}{s^2}}$); na Luni približno $1{,}6$, na Marsu približno $3{,}7\,\mathrm{\frac{m}{s^2}}$.
- Vsa telesa padajo z enakim pospeškom, ne glede na maso.
- Hitrost: $v = g\,t$. Pot: $h = \frac{1}{2}\,g\,t^2$.
- Pot narašča s kvadratom časa.

## Drugače: Na sliki

V demonstraciji »Prosti pad na Zemlji, Luni in Marsu« spusti telo in opazuj, kje je v posameznih trenutkih. Opaziš, da so razmaki med zaporednimi položaji vedno večji: telo se v vsaki naslednji sekundi premakne za daljšo pot, ker je hitrejše.

Primerjaj še nebesna telesa. Na Zemlji telo v isti sekundi pade veliko globlje kot na Luni, kjer je $g$ manjši. Na Marsu je padanje počasnejše kot na Zemlji, a hitrejše kot na Luni. Oblika poti je povsod enaka, spremeni se le $g$.

Če narišeš graf hitrosti v odvisnosti od časa, dobiš **premico skozi izhodišče**: hitrost narašča enakomerno. Pot je ploščina pod to premico, to je trikotnik s ploščino $\frac{1}{2}\,t \cdot g\,t = \frac{1}{2}\,g\,t^2$.

## Drugače: Iz vsakdanjega življenja

Pomisli na skok z vrha 1-metrskega zidu in skok z vrha stavbe. Pri nizkem skoku pade telo le delček sekunde in hitrost ob pristanku je majhna. Pri velikem skoku pa je čas padanja daljši in hitrost večja, zato je pristanek nevaren.

Primer: skok z višine $1{,}25\,\mathrm{m}$. Čas: $t^2 = \dfrac{2 \cdot 1{,}25}{10} = 0{,}25$, torej $t = 0{,}5\,\mathrm{s}$. Hitrost ob tleh: $v = 10 \cdot 0{,}5 = 5\,\mathrm{\frac{m}{s}}$, to je $18\,\mathrm{\frac{km}{h}}$. Pri štirikrat večji višini ($5\,\mathrm{m}$) čas ni štirikrat, ampak le dvakrat daljši ($1\,\mathrm{s}$), hitrost pa je dvakrat večja ($10\,\mathrm{\frac{m}{s}}$).

Zakaj list pade počasneje kot kamen? Ker ima velik upor zraka glede na svojo težo. Če list zmečkaš v kepico, se upor zmanjša in pade skoraj kot kamen. Astronavt David Scott je na Luni, kjer zraka ni, spustil kladivo in pero in oba sta padla hkrati.

## Drugače: Korak za korakom s številkami

Poglejmo, kaj se zgodi z vsako sekundo pri $g = 10\,\mathrm{\frac{m}{s^2}}$:

| čas $t$ (s) | hitrost $v = g\,t$ (m/s) | prepotovana pot $h = 5\,t^2$ (m) |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 10 | 5 |
| 2 | 20 | 20 |
| 3 | 30 | 45 |
| 4 | 40 | 80 |

Opazuj stolpca:

- Hitrost se vsako sekundo poveča za $10\,\mathrm{\frac{m}{s}}$.
- Pot po sekundah: $5$, $20$, $45$, $80\,\mathrm{m}$. V posamezni sekundi telo preleti $5$, $15$, $25$, $35\,\mathrm{m}$, kar je vedno več.
- Ko se čas podvoji (od $1$ na $2\,\mathrm{s}$), se pot početveri (od $5$ na $20\,\mathrm{m}$).

Recept za nalogo:

1. Zapiši, kaj je dano ($t$ ali $h$) in kaj iščeš.
2. Če je dan čas: $v = g\,t$ in $h = \frac{1}{2}\,g\,t^2$.
3. Če je dana višina: najprej $t = \sqrt{\dfrac{2h}{g}}$, nato $v = g\,t$.
4. Preveri enote in smiselnost rezultata.

## Drugače: Bolj natančno

Pospešek je definiran kot sprememba hitrosti na časovni interval:

$$a = \frac{\Delta v}{\Delta t}$$

Pri prostem padu je $a = g$ stalen. Če telo spustimo ($v_0 = 0$) in je $\Delta t = t$, je $\Delta v = v$, zato $g = \dfrac{v}{t}$ oziroma $v = g\,t$.

Pot izračunamo kot ploščino pod grafom $v(t)$. Graf je premica od $(0,0)$ do $(t,\,g\,t)$, pod njo pa je pravokoten trikotnik s katetama $t$ in $g\,t$:

$$h = \frac{1}{2}\,t \cdot g\,t = \frac{1}{2}\,g\,t^2$$

Zakaj masa ne vpliva na pospešek? Po drugem Newtonovem zakonu je $a = F/m$. Težnostna sila je $F = m\,g$, zato

$$a = \frac{m\,g}{m} = g$$

Masa se pokrajša. To velja le, če upor zraka lahko zanemarimo. Pri realnem padanju z veliko hitrostjo upor naraste in lahko izenači težo, takrat se pospeševanje neha in telo pada z (približno) stalno hitrostjo.

## Preveri se

? Kamen spustimo in pada $4\,\mathrm{s}$. Kolikšna je njegova hitrost ob koncu padca? Vzemi $g = 10\,\mathrm{\frac{m}{s^2}}$ in zanemari upor zraka.
- $2{,}5\,\mathrm{\frac{m}{s}}$
- $14\,\mathrm{\frac{m}{s}}$
+ $40\,\mathrm{\frac{m}{s}}$
- $80\,\mathrm{\frac{m}{s}}$
> Pri prostem padu je $v = g\,t = 10 \cdot 4 = 40\,\mathrm{\frac{m}{s}}$. Odgovor $80$ je pot ($\frac{1}{2} \cdot 10 \cdot 16$) in ne hitrost, $2{,}5$ pa dobiš z napačnim deljenjem.

? Z balkona hkrati spustimo težko železno kroglo in lahko lesno kroglico enake velikosti. Zanemari upor zraka. Kaj velja?
- Železna krogla pade prej, ker je težja.
- Lesna kroglica pade prej, ker je lažja.
+ Obe padeta hkrati.
> Pospešek pri prostem padu je za vsa telesa enak ($g$) in ni odvisen od mase. Težnostna sila je sicer večja pri težji krogli, vendar je večja tudi masa, ki jo je treba pospešiti.

? Predmet pada $1\,\mathrm{s}$ in preleti določeno pot. Kolikokrat daljšo pot preleti po $3\,\mathrm{s}$ padanja (merjeno od začetka)?
- $3$-krat
+ $9$-krat
- $6$-krat
> Pot je $h = \frac{1}{2}\,g\,t^2$, torej narašča s kvadratom časa. Trikrat daljši čas pomeni $3^2 = 9$-krat daljšo pot.
