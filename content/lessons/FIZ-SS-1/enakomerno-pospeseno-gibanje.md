---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Pri enakomernem gibanju že znaš: hitrost je stalna, pot izračunaš kot $s = v \cdot t$. V resnici pa se le redko gibljemo s stalno hitrostjo. Avtomobil na semaforju pospešuje, kamen v prostem padu se vedno hitreje giblje, kolo pred križiščem zavira.

Najpreprostejši primer spreminjanja hitrosti je **enakomerno pospešeno gibanje**: hitrost se v vsaki sekundi spremeni za enako vrednost. Z njim opišemo zaviranje vozil (in s tem varnostno razdaljo), prosti pad, met navzdol in številne druge pojave. Z enačbami lahko vnaprej izračunaš, kako hitro se bo telo gibalo in kje bo po določenem času.

## Razlaga

**1. Pospešek.** Pospešek $a$ pove, za koliko se hitrost spremeni v eni sekundi:

$$a = \frac{\Delta v}{\Delta t} = \frac{v - v_0}{t}$$

Enota je $\mathrm{\frac{m}{s^2}}$. Pospešek $2\,\mathrm{\frac{m}{s^2}}$ pomeni, da se hitrost vsako sekundo poveča za $2\,\mathrm{\frac{m}{s}}$.

**2. Enakomerno pospešeno gibanje** je gibanje po premici s **stalnim pospeškom**. Če ima pospešek nasprotno smer kot hitrost, telo zavira (hitrost se manjša). Tedaj v računih pišemo negativen pospešek.

**3. Enačba za hitrost.** Iz definicije pospeška dobimo:

$$v = v_0 + a\,t$$

kjer je $v_0$ začetna hitrost (ob $t = 0$).

**4. Enačba za prepotovano pot.** Hitrost narašča enakomerno, zato je povprečna hitrost aritmetična sredina začetne in končne: $\bar v = \dfrac{v_0 + v}{2}$. Pot je $s = \bar v \cdot t$. Ko vstavimo $v = v_0 + at$, dobimo:

$$s = v_0\,t + \frac{a\,t^2}{2}$$

Če se telo začne gibati iz mirovanja ($v_0 = 0$), je $s = \dfrac{a t^2}{2}$.

**5. Enačba brez časa.** Iz obeh enačb izločimo $t$ in dobimo:

$$v^2 = v_0^2 + 2\,a\,s$$

Uporabna je, kadar čas ni podan ali ni zahtevan.

**6. Grafi gibanja.**

- **Graf $a(t)$:** vodoravna premica (pospešek je stalen).
- **Graf $v(t)$:** premica. Njen naklon je pospešek $a$, presečišče z navpično osjo je $v_0$. **Ploščina pod grafom** med $0$ in $t$ je prepotovana pot $s$.
- **Graf $s(t)$:** parabola (pri $a > 0$ odprta navzgor). Naklon tangente v dani točki je trenutna hitrost.

**7. Postopek reševanja.** Zapiši, kaj je podano ($v_0$, $v$, $a$, $t$, $s$), kaj iščeš, in izberi enačbo, v kateri nastopajo natanko te količine. Enote pretvori v $\mathrm{m}$ in $\mathrm{s}$ (npr. $\mathrm{km/h}$ deli s $3{,}6$).

## Rešeni primeri

### Primer 1: zagon avtomobila

Avto spelje iz mirovanja in pospešuje z $2{,}0\,\mathrm{\frac{m}{s^2}}$. Kolikšna je hitrost in prepotovana pot po $5{,}0\,\mathrm{s}$?

**Podatki:** $v_0 = 0$, $a = 2{,}0\,\mathrm{\frac{m}{s^2}}$, $t = 5{,}0\,\mathrm{s}$
**Iščemo:** hitrost $v$ in pot $s$ po $5{,}0\,\mathrm{s}$

:::formula
$v = v_0 + a\,t$, $s = v_0\,t + \dfrac{a\,t^2}{2}$
:::

**Rešitev:**

1. Hitrost: $v = v_0 + at = 0 + 2{,}0 \cdot 5{,}0 = 10\,\mathrm{\frac{m}{s}}$.
2. Pot (ker je $v_0 = 0$): $s = \dfrac{a t^2}{2} = \dfrac{2{,}0 \cdot 25}{2} = 25\,\mathrm{m}$.
3. Preverimo s povprečno hitrostjo: $\bar v = \dfrac{0 + 10}{2} = 5\,\mathrm{\frac{m}{s}}$, $s = 5 \cdot 5{,}0 = 25\,\mathrm{m}$. ✓
4. Odgovor: po $5{,}0\,\mathrm{s}$ ima avto hitrost $10\,\mathrm{\frac{m}{s}}$ in prevozi $25\,\mathrm{m}$.

### Primer 2: zaviranje

Kolesar vozi s hitrostjo $36\,\mathrm{\frac{km}{h}}$ in enakomerno zavira, dokler se ne ustavi po $4{,}0\,\mathrm{s}$. Kolikšen je pospešek in kolikšna je zavorna pot?

**Podatki:** $v_0 = 36\,\mathrm{\frac{km}{h}}$, $v = 0$ (ustavi se), $t = 4{,}0\,\mathrm{s}$
**Iščemo:** pospešek $a$ in zavorno pot $s$

:::formula
$a = \dfrac{v - v_0}{t}$, $s = v_0\,t + \dfrac{a\,t^2}{2}$ (hitrost najprej pretvorimo iz $\mathrm{km/h}$ v $\mathrm{m/s}$: delimo s $3{,}6$)
:::

**Rešitev:**

1. Pretvorba: $36\,\mathrm{km/h} = 36 : 3{,}6 = 10\,\mathrm{\frac{m}{s}}$. Torej $v_0 = 10\,\mathrm{\frac{m}{s}}$, $v = 0$, $t = 4{,}0\,\mathrm{s}$.
2. Pospešek: $a = \dfrac{v - v_0}{t} = \dfrac{0 - 10}{4{,}0} = -2{,}5\,\mathrm{\frac{m}{s^2}}$. Predznak je negativen, ker kolesar zavira.
3. Pot: $s = v_0 t + \dfrac{a t^2}{2} = 10 \cdot 4{,}0 + \dfrac{(-2{,}5)\cdot 16}{2} = 40 - 20 = 20\,\mathrm{m}$.
4. Preverimo s povprečno hitrostjo: $\bar v = \dfrac{10 + 0}{2} = 5\,\mathrm{\frac{m}{s}}$, $s = 5 \cdot 4{,}0 = 20\,\mathrm{m}$. ✓
5. Odgovor: pospešek je $-2{,}5\,\mathrm{\frac{m}{s^2}}$ (kolesar zavira), zavorna pot pa $20\,\mathrm{m}$.

### Primer 3: pot brez podanega časa

Vlak se pelje s hitrostjo $20\,\mathrm{\frac{m}{s}}$ in na razdalji $100\,\mathrm{m}$ pospeši na $30\,\mathrm{\frac{m}{s}}$. Kolikšen je pospešek in koliko časa traja pospeševanje?

**Podatki:** $v_0 = 20\,\mathrm{\frac{m}{s}}$, $v = 30\,\mathrm{\frac{m}{s}}$, $s = 100\,\mathrm{m}$
**Iščemo:** pospešek $a$ in čas pospeševanja $t$

:::formula
Enačba brez časa $v^2 = v_0^2 + 2\,a\,s$, nato $t = \dfrac{v - v_0}{a}$
:::

**Rešitev:**

1. Časa ne poznamo, zato izberemo enačbo brez $t$.
2. Iz $v^2 = v_0^2 + 2as$ izrazimo: $a = \dfrac{v^2 - v_0^2}{2s} = \dfrac{900 - 400}{200} = 2{,}5\,\mathrm{\frac{m}{s^2}}$.
3. Čas iz enačbe za hitrost: $t = \dfrac{v - v_0}{a} = \dfrac{30 - 20}{2{,}5} = 4{,}0\,\mathrm{s}$.
4. Preverimo s potjo: $s = \dfrac{v_0 + v}{2}\, t = 25 \cdot 4{,}0 = 100\,\mathrm{m}$. ✓
5. Odgovor: vlak pospešuje z $2{,}5\,\mathrm{\frac{m}{s^2}}$, pospeševanje traja $4{,}0\,\mathrm{s}$.

## Pogoste napake

- **Enota km/h namesto m/s.** Enačbe delujejo v osnovnih enotah. Najprej pretvori ($\mathrm{km/h} : 3{,}6 = \mathrm{m/s}$).
- **Pozabljen predznak pospeška.** Pri zaviranju je $a$ negativen. Če vstaviš pozitivnega, dobiš hitrost, ki ob zaviranju raste.
- **Napačna formula za pot.** $s = v_0 t + \dfrac{a t^2}{2}$ ima polovico pri drugem členu. Napaka je $s = v_0 t + a t^2$ ali $s = a t$.
- **Kvadriranje.** V $\dfrac{a t^2}{2}$ se kvadrira samo $t$, ne produkt $a t$.
- **Mešanje grafov.** Naklon grafa $v(t)$ je pospešek, ne hitrost. Graf $s(t)$ ni premica, ampak parabola.
- **Pot ni ploščina pod grafom $s(t)$.** Ploščina pod grafom velja za graf $v(t)$.

## Povzetek

- Enakomerno pospešeno gibanje ima stalen pospešek $a = \dfrac{\Delta v}{\Delta t}$, enota $\mathrm{\frac{m}{s^2}}$.
- Hitrost: $v = v_0 + at$.
- Pot: $s = v_0 t + \dfrac{a t^2}{2}$, pri $v_0 = 0$ je $s = \dfrac{a t^2}{2}$.
- Brez časa: $v^2 = v_0^2 + 2as$.
- Graf $a(t)$ je vodoravna premica, $v(t)$ je premica z naklonom $a$, $s(t)$ je parabola.
- Ploščina pod grafom $v(t)$ je prepotovana pot.
- Pri zaviranju je pospešek negativen.

## Drugače: Na sliki

Predstavljaj si graf $v(t)$ za avto, ki spelje iz mirovanja z $2\,\mathrm{\frac{m}{s^2}}$. Premica gre iz izhodišča navzgor: pri $1\,\mathrm{s}$ je $2\,\mathrm{\frac{m}{s}}$, pri $2\,\mathrm{s}$ je $4\,\mathrm{\frac{m}{s}}$, pri $5\,\mathrm{s}$ je $10\,\mathrm{\frac{m}{s}}$.

- **Naklon** premice je $\dfrac{10}{5} = 2\,\mathrm{\frac{m}{s^2}}$, torej pospešek.
- **Ploščina** pod premico od $0$ do $5\,\mathrm{s}$ je pravokotni trikotnik s katetama $5\,\mathrm{s}$ in $10\,\mathrm{\frac{m}{s}}$: $\dfrac{5 \cdot 10}{2} = 25\,\mathrm{m}$. To je ravno prepotovana pot.

Če ima telo začetno hitrost $v_0$, je lik pod premico trapez: pravokotnik višine $v_0$ in trikotnik nad njim. Zato pot sestavljata dva člena: $v_0 t$ (pravokotnik) in $\dfrac{a t^2}{2}$ (trikotnik).

Graf $s(t)$ je parabola: v prvi sekundi telo prepotuje malo, v naslednjih vedno več, zato se krivulja vse bolj strmo dviguje.

## Drugače: Iz vsakdanjega življenja

Ko na semaforju zelena zasveti, voznik pospeši. Vozilo, ki pospešuje z $2\,\mathrm{\frac{m}{s^2}}$, ima po prvi sekundi $2\,\mathrm{\frac{m}{s}}$ (približno $7\,\mathrm{km/h}$), po drugi $4\,\mathrm{\frac{m}{s}}$ in tako naprej. Hitrost raste enakomerno, pot pa vse hitreje, saj vsako naslednjo sekundo vozilo prevozi več kot prejšnjo.

Zaviranje je enak pojav v obratni smeri. Zato ima pot zaviranja pomembno posledico: pri dvakratni začetni hitrosti in enakem pojemku je zavorna pot **štirikrat** daljša, ker je zavorna pot $s = \dfrac{v_0^2}{2|a|}$ in v njej začetna hitrost nastopa kvadratno. Če kolesar zavira z $2{,}5\,\mathrm{\frac{m}{s^2}}$ iz $10\,\mathrm{\frac{m}{s}}$, potrebuje $20\,\mathrm{m}$; iz $20\,\mathrm{\frac{m}{s}}$ pa $80\,\mathrm{m}$. Zato je pri večji hitrosti varnostna razdalja tako pomembna.

## Drugače: Korak za korakom s številkami

Telo ima $v_0 = 3\,\mathrm{\frac{m}{s}}$ in $a = 2\,\mathrm{\frac{m}{s^2}}$. Poglejmo tabelo za prve 4 sekunde:

| $t\,(\mathrm{s})$ | $v = 3 + 2t\,(\mathrm{\frac{m}{s}})$ | $s = 3t + t^2\,(\mathrm{m})$ |
|---|---|---|
| 0 | 3 | 0 |
| 1 | 5 | 4 |
| 2 | 7 | 10 |
| 3 | 9 | 18 |
| 4 | 11 | 28 |

(Pot: $s = v_0 t + \dfrac{a t^2}{2} = 3t + t^2$.)

Opazuj:

- Hitrost narašča za $2\,\mathrm{\frac{m}{s}}$ v vsaki sekundi (stalen pospešek).
- Poti v posameznih sekundah so $4$, $6$, $8$, $10\,\mathrm{m}$. Povečujejo se za $2\,\mathrm{m}$, ker hitrost raste.
- Preveri za $t = 4\,\mathrm{s}$ s povprečno hitrostjo: $\bar v = \dfrac{3 + 11}{2} = 7\,\mathrm{\frac{m}{s}}$, $s = 7 \cdot 4 = 28\,\mathrm{m}$. ✓

## Drugače: Bolj natančno

Enačbo za pot lahko izpeljemo iz grafa $v(t)$. Pot je ploščina pod grafom med $0$ in $t$. Lik je trapez z osnovnicama $v_0$ in $v$ ter višino $t$:

$$s = \frac{v_0 + v}{2}\, t$$

Vstavimo $v = v_0 + at$:

$$s = \frac{v_0 + v_0 + at}{2}\, t = v_0 t + \frac{a t^2}{2}$$

Enačbo brez časa dobimo tako, da iz $v = v_0 + at$ izrazimo $t = \dfrac{v - v_0}{a}$ in vstavimo v $s = \dfrac{v_0 + v}{2}\, t$:

$$s = \frac{(v_0 + v)(v - v_0)}{2a} = \frac{v^2 - v_0^2}{2a}$$

Od tod $v^2 = v_0^2 + 2as$.

Pri tej izpeljavi smo privzeli, da je gibanje po premici in da se smer gibanja ne obrne. Če se telo ustavi in nato vrne (npr. met navzgor), $s$ pomeni **premik** (spremembo lege), ne celotne prepotovane poti.

## Preveri se

? Avto spelje iz mirovanja in pospešuje s $3\,\mathrm{\frac{m}{s^2}}$. Kolikšna je njegova hitrost po $4\,\mathrm{s}$?
- $7\,\mathrm{\frac{m}{s}}$
+ $12\,\mathrm{\frac{m}{s}}$
- $24\,\mathrm{\frac{m}{s}}$
- $0{,}75\,\mathrm{\frac{m}{s}}$
> $v = v_0 + at = 0 + 3 \cdot 4 = 12\,\mathrm{\frac{m}{s}}$. Odgovor $7$ je vsota, $24$ je prepotovana pot v metrih ($a t^2/2$), ne hitrost, $0{,}75$ pa je količnik $a/t$.

? Telo se začne gibati iz mirovanja s pospeškom $2\,\mathrm{\frac{m}{s^2}}$. Kolikšno pot prepotuje v $6\,\mathrm{s}$?
- $12\,\mathrm{m}$
- $72\,\mathrm{m}$
+ $36\,\mathrm{m}$
- $6\,\mathrm{m}$
> $s = \dfrac{a t^2}{2} = \dfrac{2 \cdot 36}{2} = 36\,\mathrm{m}$. Odgovor $12$ je $a t$, $72$ je $a t^2$ brez deljenja z 2.

? Kaj pri enakomerno pospešenem gibanju predstavlja ploščina pod grafom $v(t)$?
- pospešek
- hitrost
+ prepotovano pot
- čas gibanja
> Hitrost krat čas daje pot, zato je ploščina pod grafom $v(t)$ prepotovana pot. Pospešek je naklon grafa $v(t)$, ne njegova ploščina.
