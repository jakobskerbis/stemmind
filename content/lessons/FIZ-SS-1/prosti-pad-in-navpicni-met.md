---
stanje: osnutek
demo: prosti-pad
phet: projectile-motion
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Pri kinematiki si spoznal enakomerno pospešeno gibanje: hitrost se spreminja enakomerno, pospešek $a$ je stalen, veljajo pa enačbe $v = v_0 + at$ in $s = v_0 t + \dfrac{at^2}{2}$. Prosti pad in navpični met sta najpomembnejša primera takega gibanja, saj je pospešek v njiju kar težni pospešek $g$.

S temi enačbami lahko izračunaš, kako globoko je vodnjak, če poslušaš, kdaj kamen pade v vodo, kako visoko poleti žoga ali kako hitro pade predmet z balkona. Isti račun uporabljajo tudi pri načrtovanju pristankov na Luni in Marsu. Tam je $g$ drugačen, enačbe pa ostanejo enake.

## Razlaga

**1. Prosti pad.** Prosti pad je gibanje telesa, ki ga spustimo (začetna hitrost je $0$) in nanj deluje samo teža. Zračni upor zanemarimo.

**2. Težni pospešek.** Pri prostem padu se hitrost vsako sekundo poveča za enako vrednost. Ta pospešek imenujemo **težni pospešek** $g$. Na Zemlji je

$$g \approx 9{,}81\,\mathrm{\frac{m}{s^2}}.$$

Pospešek je enak za vsa telesa, težka in lahka, če zanemarimo zračni upor. Brez zraka bi kamen in pero padla enako hitro.

**3. Enačbe prostega pada.** Os $y$ usmerimo navzdol. Iz enačb za enakomerno pospešeno gibanje z $v_0 = 0$ in $a = g$ dobimo:

$$v = g\,t \qquad h = \frac{g\,t^2}{2} \qquad v^2 = 2\,g\,h$$

Tretja enačba nastane z izločitvijo časa. Uporabimo jo, kadar čas ni znan ali ni zanimiv.

**4. Navpični met navzgor.** Telo vržemo navzgor z začetno hitrostjo $v_0$. Os $y$ zdaj usmerimo **navzgor**. Pospešek kaže navzdol, zato je $a = -g$:

$$v = v_0 - g\,t \qquad y = v_0\,t - \frac{g\,t^2}{2}$$

Hitrost se najprej zmanjšuje, v vrhu postane $0$, nato pa telo pada nazaj (hitrost je negativna).

**5. Najvišja točka.** V vrhu je $v = 0$. Iz tega sledi:

$$t_\text{vrh} = \frac{v_0}{g} \qquad h_\text{max} = \frac{v_0^2}{2g}$$

Čas vzpona je enak času padanja nazaj na isto višino. Celoten let do vrnitve na izhodišče traja $\dfrac{2v_0}{g}$. Ob vrnitvi je hitrost po velikosti enaka $v_0$, usmerjena pa je navzdol.

**6. Pomembno o pospešku.** Na poti navzgor, v vrhu in na poti navzdol je pospešek ves čas enak: $g$, usmerjen navzdol. V vrhu ima telo hitrost nič, pospešek pa ne.

**7. Predznaki.** Pred računom izberi smer osi in jo upoštevaj pri vseh količinah. Pri metu navzgor sta $v_0$ in višina pozitivni, $g$ pa vstavljaš v enačbe s predznakom, ki ga določa izbrana smer.

## Rešeni primeri

### Primer 1: kamen z mostu (lažji)

Kamen spustimo z mostu in v vodo pade čez $3{,}0\,\text{s}$. Kako visoko je most nad vodo in kolikšna je hitrost kamna tik pred udarcem? Zračni upor zanemari.

1. Gre za prosti pad (začetna hitrost je $0$), zato uporabimo $h = \dfrac{g t^2}{2}$.
2. Vstavimo: $h = \dfrac{9{,}81 \cdot 3{,}0^2}{2} = \dfrac{9{,}81 \cdot 9}{2} = 44{,}145\,\text{m} \approx 44\,\text{m}$.
3. Hitrost dobimo iz $v = g t$: $v = 9{,}81 \cdot 3{,}0 = 29{,}43\,\mathrm{m/s} \approx 29\,\mathrm{m/s}$.
4. Preverimo z drugo enačbo: $v^2 = 2 g h = 2 \cdot 9{,}81 \cdot 44{,}145 \approx 866$, $\sqrt{866} \approx 29{,}4\,\mathrm{m/s}$. ✓

**Odgovor:** most je približno $44\,\text{m}$ nad vodo, kamen pa udari s hitrostjo približno $29\,\mathrm{m/s}$ (to je okoli $106\,\mathrm{km/h}$).

### Primer 2: žoga navzgor

Žogo vržemo navpično navzgor s hitrostjo $14{,}0\,\mathrm{m/s}$. Kako visoko poleti, kdaj doseže vrh in kdaj pade nazaj v roko?

1. V vrhu je $v = 0$. Čas vzpona: $t_\text{vrh} = \dfrac{v_0}{g} = \dfrac{14{,}0}{9{,}81} \approx 1{,}43\,\text{s}$.
2. Višina: $h_\text{max} = \dfrac{v_0^2}{2g} = \dfrac{14{,}0^2}{2 \cdot 9{,}81} = \dfrac{196}{19{,}62} \approx 9{,}99\,\text{m}$.
3. Čas padanja nazaj je enak času vzpona, zato je skupni čas $2 \cdot 1{,}43 \approx 2{,}85\,\text{s}$.
4. Preverimo z enačbo za višino ob $t = 2{,}85\,\text{s}$: $14{,}0 \cdot 2{,}85 - 4{,}905 \cdot 2{,}85^2 \approx 39{,}9 - 39{,}8 \approx 0$. ✓ (majhno odstopanje je zaradi zaokroževanja)

**Odgovor:** žoga poleti približno $10{,}0\,\text{m}$ visoko, vrh doseže po $1{,}43\,\text{s}$ in se vrne po $2{,}85\,\text{s}$.

### Primer 3: met z roba stavbe (težji)

Z roba stavbe, ki je $25\,\text{m}$ visoka, vržemo kamen navpično navzgor s hitrostjo $10\,\mathrm{m/s}$. Čez koliko časa pade na tla in s kolikšno hitrostjo?

1. **Izbira osi.** Os $y$ usmerimo navzgor, izhodišče postavimo na tla. Začetni položaj je $y_0 = 25\,\text{m}$, začetna hitrost $v_0 = +10\,\mathrm{m/s}$.
2. **Enačba gibanja.** $y = y_0 + v_0 t - \dfrac{g t^2}{2}$. Ob padcu na tla je $y = 0$:
 $$0 = 25 + 10\,t - 4{,}905\,t^2$$
3. **Kvadratna enačba.** Zapišemo jo kot $4{,}905\,t^2 - 10\,t - 25 = 0$. Rešitev:
 $$t = \frac{10 \pm \sqrt{100 + 4 \cdot 4{,}905 \cdot 25}}{2 \cdot 4{,}905} = \frac{10 \pm \sqrt{590{,}5}}{9{,}81} = \frac{10 \pm 24{,}30}{9{,}81}$$
4. **Izbira rešitve.** Negativni čas ($t \approx -1{,}46\,\text{s}$) je pred metom in zato ni smiseln. Ostane $t = \dfrac{34{,}30}{9{,}81} \approx 3{,}50\,\text{s}$.
5. **Hitrost.** $v = v_0 - g t = 10 - 9{,}81 \cdot 3{,}50 \approx -24{,}3\,\mathrm{m/s}$. Minus pomeni, da kamen leti navzdol.
6. **Preverimo brez časa:** $v^2 = v_0^2 + 2 g \cdot 25 = 100 + 490{,}5 = 590{,}5$, $v \approx 24{,}3\,\mathrm{m/s}$. ✓

**Odgovor:** kamen pade na tla po približno $3{,}5\,\text{s}$ s hitrostjo približno $24\,\mathrm{m/s}$.

## Pogoste napake

- **Pospešek v vrhu je nič.** Ni res. V vrhu je nič samo hitrost, pospešek je še vedno $g$ navzdol. Če bi bil pospešek nič, bi telo obvisilo v zraku.
- **Mešanje predznakov.** Če os usmeriš navzgor, mora imeti $g$ v enačbah nasprotno smer od $v_0$. Izberi smer in je ne spreminjaj sredi naloge.
- **Pozabljen faktor $\tfrac{1}{2}$ ali kvadrat časa.** Pravilno je $h = \dfrac{g t^2}{2}$. Ne piši $h = g t$ in ne $h = \dfrac{g t}{2}$.
- **»Težja telesa padajo hitreje.«** Brez zračnega upora vsa telesa padajo z istim pospeškom. V resnici razliko povzroča zračni upor.
- **Poravnava časa pri kvadratni enačbi.** Pri kvadratni enačbi dobiš dve rešitvi za čas. Negativna ali nesmiselna rešitev ne ustreza nalogi.
- **Enote.** Pospešek je v $\mathrm{m/s^2}$, ne v $\mathrm{m/s}$. Pred računom pretvori vse v osnovne enote.

## Povzetek

- Prosti pad: začetna hitrost $0$, pospešek $g \approx 9{,}81\,\mathrm{m/s^2}$ navzdol.
- Enačbe: $v = g t$, $h = \dfrac{g t^2}{2}$, $v^2 = 2 g h$.
- Navpični met navzgor (os navzgor): $v = v_0 - g t$, $y = v_0 t - \dfrac{g t^2}{2}$.
- Vrh: $v = 0$, $t_\text{vrh} = \dfrac{v_0}{g}$, $h_\text{max} = \dfrac{v_0^2}{2g}$.
- Čas vzpona je enak času padanja nazaj na isto višino, hitrost ob vrnitvi pa je po velikosti enaka začetni.
- Pospešek je ves čas $g$ navzdol, tudi v vrhu.
- Na drugih nebesnih telesih je $g$ drugačen, enačbe pa ostanejo enake.

## Drugače: Na sliki

V demonstraciji »Prosti pad na Zemlji, Luni in Marsu« spustiš telo na treh nebesnih telesih in opazuješ, kako hitro pada. Pozorno spremljaj, kako se razmaki med zaporednimi položaji večajo. To je znak, da se hitrost povečuje, saj telo v enakih časovnih razmikih preleti vedno daljše poti.

Opaziš lahko:

- Na Zemlji ($g \approx 9{,}81\,\mathrm{m/s^2}$) telo pade najhitreje.
- Na Marsu ($g \approx 3{,}71\,\mathrm{m/s^2}$) isto višino prepada počasneje.
- Na Luni ($g \approx 1{,}62\,\mathrm{m/s^2}$) je padanje najpočasnejše.

Če narišeš graf hitrosti v odvisnosti od časa, dobiš premico skozi izhodišče, njen naklon pa je $g$. Strmejša premica pomeni večji težni pospešek. Pot je ploščina pod to premico: pri času $t$ je to trikotnik s ploščino $\dfrac{1}{2}\, t \cdot g t = \dfrac{g t^2}{2}$.

Za vajo odpri še simulacijo PhET »Projectile Motion«. Žogo izstreli navpično navzgor (kot $90^\circ$) in opazuj, kako se vektor hitrosti krajša do vrha in nato spet daljša v nasprotni smeri.

## Drugače: Iz vsakdanjega življenja

**Skok v vodo.** Skakalec skoči z deskice, ki je $3\,\text{m}$ nad vodo, in pri tem začetna hitrost v navpični smeri skoraj izgine. Čas padanja je $t = \sqrt{\dfrac{2h}{g}} = \sqrt{\dfrac{6}{9{,}81}} \approx 0{,}78\,\text{s}$. V manj kot sekundi mora izvesti vse, kar želi pokazati.

**Globina vodnjaka.** Spustiš kamen in šteješ sekunde do pljuska. Če se pljusk sliši po $2{,}0\,\text{s}$ (in zvok zanemariš), je globina približno $\dfrac{9{,}81 \cdot 4}{2} \approx 19{,}6\,\text{m}$. Pri večjih globinah ta približek postane slab, ker zvok potrebuje čas, da pride do tebe.

**Skok pri košarki.** Igralec se z mesta odrine navzgor in je v zraku okoli $0{,}8\,\text{s}$. Zdi se, da obvisi, a v resnici zgolj sledi enačbam metov. Približno polovico časa se vzpenja, polovico pada.

Skupno vsem primerom: čas in višina sta povezana s kvadratom, zato pri dvakratni višini čas ni dvakratni, ampak le $\sqrt{2} \approx 1{,}41$-krat daljši.

## Drugače: Korak za korakom s številkami

Postopek za vsako nalogo o prostem padu in metih:

1. Preberi, katere količine so znane ($h$, $t$, $v_0$, $v$) in katero iščeš.
2. Izberi smer osi (navzgor ali navzdol) in označi izhodišče.
3. Zapiši podatke s predznaki. Pospešek je vedno usmerjen navzdol.
4. Izberi enačbo, ki vsebuje iskano količino in samo znane količine.
5. Izračunaj in preveri smiselnost (enote, predznak, velikost).

**Primerjava časov padanja z višine $10\,\text{m}$** ($t = \sqrt{2h/g}$):

| Kje | $g$ v $\mathrm{m/s^2}$ | $\dfrac{2h}{g}$ v $\mathrm{s^2}$ | $t$ v $\mathrm{s}$ |
|---|---|---|---|
| Zemlja | $9{,}81$ | $2{,}04$ | $1{,}43$ |
| Mars | $3{,}71$ | $5{,}39$ | $2{,}32$ |
| Luna | $1{,}62$ | $12{,}35$ | $3{,}51$ |

Na Luni je $g$ približno šestkrat manjši kot na Zemlji ($9{,}81 / 1{,}62 \approx 6{,}06$), čas padanja pa je le $2{,}5$-krat daljši ($3{,}51/1{,}43 \approx 2{,}46$). Razlog je koren: čas je sorazmeren z $1/\sqrt{g}$, ne z $1/g$.

## Drugače: Bolj natančno

**Izpeljava enačb.** Pospešek je po definiciji $a = \dfrac{\Delta v}{\Delta t}$. Če je $a = g$ stalen in je $v_0 = 0$, je $v = g t$. Graf $v(t)$ je premica skozi izhodišče. Pot je ploščina pod grafom:

$$h = \frac{1}{2}\cdot t \cdot v = \frac{1}{2}\, t \cdot g t = \frac{g t^2}{2}$$

Če iz $v = g t$ izraziš $t = v/g$ in vstaviš v izraz za $h$, dobiš

$$h = \frac{g}{2}\cdot\frac{v^2}{g^2} = \frac{v^2}{2g} \quad\Rightarrow\quad v^2 = 2 g h.$$

**Zakaj je čas vzpona enak času padanja.** Pri metu navzgor je $v = v_0 - g t$. V vrhu je $v = 0$, zato je $t_\text{vrh} = v_0/g$. Pri padanju iz vrha pa velja $h_\text{max} = \dfrac{g t^2}{2}$, torej $t = \sqrt{\dfrac{2 h_\text{max}}{g}}$. Vstavimo $h_\text{max} = \dfrac{v_0^2}{2g}$ in dobimo $t = \dfrac{v_0}{g}$. Časa sta enaka, gibanje je simetrično.

**Zakaj padajo vsa telesa enako.** Po drugem Newtonovem zakonu je $F = m a$. Sila teže je $F_g = m g$, zato je $a = \dfrac{m g}{m} = g$. Masa se pokrajša, torej je pospešek neodvisen od mase. To je tudi pokazal Galilei, ko je ugotovil, da razlike pri padanju povzroča le zračni upor.

**Omejitve modela.** Enačbe veljajo, če je zračni upor zanemarljiv in če je višina majhna v primerjavi s polmerom planeta (tako je $g$ približno stalen). Pri velikih hitrostih ali lahkih telesih z veliko površino (list, padalo) je zračni upor bistven in se telo ne giblje enakomerno pospešeno.

## Preveri se

? Telo spustimo s stolpa in pada $2{,}0\,\text{s}$. Kolikšna je njegova hitrost tik pred udarcem? (Zračni upor zanemari, $g = 9{,}81\,\mathrm{m/s^2}$.)
- $9{,}81\,\mathrm{m/s}$
- $39{,}2\,\mathrm{m/s}$
+ $19{,}6\,\mathrm{m/s}$
> Pri prostem padu je $v = g t = 9{,}81 \cdot 2{,}0 \approx 19{,}6\,\mathrm{m/s}$. Vrednost $39{,}2\,\mathrm{m/s}$ dobiš, če časa ne kvadriraš pravilno ($g t^2$), vrednost $9{,}81\,\mathrm{m/s}$ pa je kar $g$, ki je pospešek, ne hitrost.

? Kaj velja za žogo v najvišji točki navpičnega meta navzgor?
- Hitrost in pospešek sta enaka $0$.
- Pospešek je enak $0$, hitrost pa je največja.
+ Hitrost je $0$, pospešek je $g$ navzdol.
> V vrhu se smer gibanja obrne, zato je hitrost trenutno nič. Pospešek pa je ves čas enak $g$ in kaže navzdol, saj nanjo še vedno deluje teža.

? Žogo vržemo navpično navzgor z začetno hitrostjo $20\,\mathrm{m/s}$. Kako visoko poleti? ($g = 9{,}81\,\mathrm{m/s^2}$)
- $40{,}8\,\text{m}$
+ $20{,}4\,\text{m}$
- $2{,}04\,\text{m}$
> Uporabimo $h_\text{max} = \dfrac{v_0^2}{2g} = \dfrac{400}{19{,}62} \approx 20{,}4\,\text{m}$. Če pozabiš faktor $2$ v imenovalcu, dobiš $40{,}8\,\text{m}$, vrednost $2{,}04$ pa je čas vzpona v sekundah, ne višina.
