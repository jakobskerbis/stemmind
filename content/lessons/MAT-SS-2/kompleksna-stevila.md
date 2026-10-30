---
stanje: osnutek
demo: kompleksna
avtor: AI
---

## Zakaj se tega učimo

Množice števil smo že večkrat razširili. Ker enačba $x + 5 = 2$ v naravnih številih nima rešitve, smo vpeljali cela števila. Ker $2x = 3$ v celih številih nima rešitve, smo vpeljali ulomke. Ker $\sqrt{2}$ ni ulomek, smo dobili realna števila.

Pri korenih pa si spoznal, da sodi koren negativnega števila ni realen: nobeno realno število na kvadrat ne da $-1$, zato enačba $x^2 = -1$ v realnih številih nima rešitve. Matematiki so v 16. stoletju opazili, da se jim pri reševanju enačb splača računati tudi s »korenom iz $-1$«, in tako so nastala **kompleksna števila**. Danes jih uporabljajo v elektrotehniki (izmenični tok), pri obdelavi zvoka in slike ter v kvantni fiziki. V tej lekciji se naučiš z njimi računati, spoznaš **konjugirano število** in **absolutno vrednost**. Kako so kompleksna števila razporejena v ravnini, si oglej v interaktivni simulaciji spodaj (»Kompleksna števila v ravnini«).

## Razlaga

**1. Imaginarna enota.** Vpeljemo novo število $i$, za katero velja

$$i^2 = -1.$$

Imenujemo ga **imaginarna enota**. Število $i$ ni realno, saj je kvadrat vsakega realnega števila nenegativen.

**2. Kompleksno število.** Kompleksno število zapišemo v obliki

$$z = a + bi, \qquad a, b \in \mathbb{R}.$$

Število $a$ je **realni del** ($\mathrm{Re}\,z = a$), število $b$ pa **imaginarni del** ($\mathrm{Im}\,z = b$). Pozor: imaginarni del je realno število $b$, ne $bi$. Množico kompleksnih števil označimo z $\mathbb{C}$.

- Če je $b = 0$, je $z = a$ realno število. Zato je $\mathbb{R} \subset \mathbb{C}$.
- Če je $a = 0$ in $b \ne 0$, je $z = bi$ **čisto imaginarno** število, na primer $3i$.

Kompleksni števili sta **enaki**, če imata enaka realna in enaka imaginarna dela: $a + bi = c + di$ natanko tedaj, ko je $a = c$ in $b = d$.

**3. Seštevanje in odštevanje.** Seštejemo posebej realna in posebej imaginarna dela, podobno kot podobne člene v algebrskih izrazih:

$$(a + bi) \pm (c + di) = (a \pm c) + (b \pm d)\,i.$$

**4. Množenje.** Množimo kot dvočlenika (vsak člen z vsakim) in upoštevamo $i^2 = -1$:

$$(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)\,i.$$

Formule si ni treba zapomniti, dovolj je, da množiš kot dvočlenike.

**5. Potence števila $i$.** Potence se ponavljajo s periodo $4$:

| $i^1$ | $i^2$ | $i^3$ | $i^4$ | $i^5$ | $i^6$ |
|---|---|---|---|---|---|
| $i$ | $-1$ | $-i$ | $1$ | $i$ | $-1$ |

Za izračun $i^n$ eksponent $n$ delimo s $4$ in pogledamo ostanek: $i^{27} = i^{24} \cdot i^3 = 1 \cdot (-i) = -i$, ker je $27 = 6 \cdot 4 + 3$.

**6. Konjugirano število.** Številu $z = a + bi$ je **konjugirano** število

$$\bar{z} = a - bi.$$

Spremenimo le predznak imaginarnega dela: $\overline{3 + 2i} = 3 - 2i$, $\overline{-4i} = 4i$, $\overline{5} = 5$. Velja

$$z + \bar{z} = 2a, \qquad z \cdot \bar{z} = (a + bi)(a - bi) = a^2 - b^2 i^2 = a^2 + b^2.$$

Produkt števila s konjugiranim je vedno **realno nenegativno** število.

**7. Deljenje.** Ulomek $\dfrac{z_1}{z_2}$ razširimo s številom, konjugiranim **imenovalcu**. Imenovalec postane realen, nato razdelimo na realni in imaginarni del:

$$\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{(a + bi)(c - di)}{c^2 + d^2}.$$

To je isti postopek kot racionalizacija imenovalca s konjugiranim izrazom pri korenih.

**8. Kompleksna ravnina.** Število $z = a + bi$ predstavimo s točko $(a, b)$ v ravnini. Vodoravna os je **realna os**, navpična **imaginarna os**. Tej ravnini rečemo **kompleksna** ali **Gaussova ravnina**.

**9. Absolutna vrednost.** Absolutna vrednost kompleksnega števila je razdalja njegove točke od izhodišča. Po Pitagorovem izreku je

$$|z| = |a + bi| = \sqrt{a^2 + b^2} = \sqrt{z \cdot \bar{z}}.$$

Na primer $|3 - 4i| = \sqrt{9 + 16} = 5$. Za realna števila se ujema z znano absolutno vrednostjo: $|-7| = \sqrt{49} = 7$. Velja še $|z_1 \cdot z_2| = |z_1| \cdot |z_2|$ in $\left|\dfrac{z_1}{z_2}\right| = \dfrac{|z_1|}{|z_2|}$ ter $|\bar{z}| = |z|$.

## Rešeni primeri

### Primer 1 (lažji)

Dani sta števili $z_1 = 3 + 2i$ in $z_2 = 1 - 4i$. Izračunaj $z_1 + z_2$, $z_1 - z_2$ in $z_1 \cdot z_2$.

**Podatki:** $z_1 = 3 + 2i$, $z_2 = 1 - 4i$
**Iščemo:** vsoto $z_1 + z_2$, razliko $z_1 - z_2$ in produkt $z_1 \cdot z_2$

:::formula
$(a + bi) \pm (c + di) = (a \pm c) + (b \pm d)i$; množimo kot dvočlenika in upoštevamo $i^2 = -1$
:::

**Rešitev:**

1. Vsota: $(3 + 2i) + (1 - 4i) = (3 + 1) + (2 - 4)i = 4 - 2i$.
2. Razlika: $(3 + 2i) - (1 - 4i) = (3 - 1) + (2 + 4)i = 2 + 6i$.
3. Produkt: $(3 + 2i)(1 - 4i) = 3 - 12i + 2i - 8i^2 = 3 - 10i + 8 = 11 - 10i$.
4. Odgovor: $z_1 + z_2 = 4 - 2i$, $z_1 - z_2 = 2 + 6i$ in $z_1 \cdot z_2 = 11 - 10i$.

### Primer 2 (srednji)

Izračunaj količnik $w = \dfrac{1 + 8i}{2 + i}$ in nato njegovo absolutno vrednost $|w|$.

**Podatki:** števec $1 + 8i$, imenovalec $2 + i$
**Iščemo:** količnik $w$ v obliki $a + bi$ in $|w|$

:::formula
$\dfrac{z_1}{z_2} = \dfrac{z_1 \cdot \bar{z}_2}{z_2 \cdot \bar{z}_2}$, $\;(c + di)(c - di) = c^2 + d^2$, $\;|a + bi| = \sqrt{a^2 + b^2}$
:::

**Rešitev:**

1. Imenovalcu konjugirano število je $2 - i$. Ulomek razširimo z njim.
2. Imenovalec: $(2 + i)(2 - i) = 2^2 + 1^2 = 5$.
3. Števec: $(1 + 8i)(2 - i) = 2 - i + 16i - 8i^2 = 2 + 15i + 8 = 10 + 15i$.
4. Količnik: $w = \dfrac{10 + 15i}{5} = 2 + 3i$.
5. Preverjanje: $(2 + 3i)(2 + i) = 4 + 2i + 6i + 3i^2 = 1 + 8i$. Ujema se.
6. Absolutna vrednost: $|w| = \sqrt{2^2 + 3^2} = \sqrt{13} \approx 3{,}61$. Drugače: $\dfrac{|1 + 8i|}{|2 + i|} = \dfrac{\sqrt{65}}{\sqrt{5}} = \sqrt{13}$.
7. Odgovor: $w = 2 + 3i$ in $|w| = \sqrt{13}$.

### Primer 3 (težji)

Poišči kompleksno število $z$, za katero velja $(1 + i)\,z + 3\bar{z} = 10 - i$. Izračunaj še $|z|$.

**Podatki:** enačba $(1 + i)\,z + 3\bar{z} = 10 - i$
**Iščemo:** število $z$ in njegovo absolutno vrednost $|z|$

:::formula
$z = a + bi$, $\;\bar{z} = a - bi$; kompleksni števili sta enaki, ko se ujemata realna in imaginarna dela
:::

**Rešitev:**

1. Pišemo $z = a + bi$, kjer sta $a$ in $b$ realni neznanki. Potem je $\bar{z} = a - bi$.
2. $(1 + i)(a + bi) = a + bi + ai + bi^2 = (a - b) + (a + b)i$.
3. $3\bar{z} = 3a - 3bi$.
4. Vsota leve strani: $(a - b + 3a) + (a + b - 3b)i = (4a - b) + (a - 2b)i$.
5. Izenačimo z desno stranjo $10 - i$: realna dela $4a - b = 10$, imaginarna dela $a - 2b = -1$.
6. Iz druge enačbe je $a = 2b - 1$. Vstavimo v prvo: $4(2b - 1) - b = 10$, torej $7b = 14$ in $b = 2$. Nato $a = 2 \cdot 2 - 1 = 3$.
7. Preverjanje: $(1 + i)(3 + 2i) = 3 + 2i + 3i - 2 = 1 + 5i$ in $3(3 - 2i) = 9 - 6i$, vsota je $10 - i$. Ujema se.
8. $|z| = \sqrt{3^2 + 2^2} = \sqrt{13}$.
9. Odgovor: $z = 3 + 2i$ in $|z| = \sqrt{13} \approx 3{,}61$.

## Pogoste napake

- **$i^2 = 1$.** Ko množiš, rad pozabiš, da je $i^2 = -1$. Napačno: $(3 + 2i)(1 - 4i) = 3 - 10i - 8$. Pravilno: $-8i^2 = -8 \cdot (-1) = +8$, zato je rezultat $11 - 10i$.
- **Imaginarni del z $i$.** Za $z = 4 - 7i$ je $\mathrm{Im}\,z = -7$, ne $-7i$. Imaginarni del je realno število pred $i$, s predznakom vred.
- **Konjugiranje realnega dela.** $\overline{3 + 2i} = -3 - 2i$ je napačno. Spremeni se samo predznak imaginarnega dela: $\overline{3 + 2i} = 3 - 2i$. Število $-3 - 2i$ je nasprotno število.
- **Absolutna vrednost brez kvadratov ali z $i$.** $|3 - 4i| = 3 - 4 = -1$ ali $|3 - 4i| = \sqrt{9 + 16i^2} = 3$ sta napačna. V formulo vstaviš realni števili $a = 3$ in $b = -4$: $|3 - 4i| = \sqrt{3^2 + (-4)^2} = 5$. Absolutna vrednost je razdalja, zato nikoli ni negativna.
- **Pravilo za korene pri negativnih številih.** »$i^2 = \sqrt{-1} \cdot \sqrt{-1} = \sqrt{(-1)(-1)} = \sqrt{1} = 1$« je napačen sklep. Pravilo $\sqrt{a}\sqrt{b} = \sqrt{ab}$ velja le za $a, b \ge 0$. Raje računaj z $i$ in upoštevaj $i^2 = -1$.

## Povzetek

- Imaginarna enota: $i^2 = -1$; kompleksno število $z = a + bi$, $\mathrm{Re}\,z = a$, $\mathrm{Im}\,z = b$ ($a, b \in \mathbb{R}$).
- Seštevamo in odštevamo ločeno realna in imaginarna dela; množimo kot dvočlenika in upoštevamo $i^2 = -1$.
- Potence $i$ se ponavljajo s periodo $4$: $i, -1, -i, 1$.
- Konjugirano število: $\bar{z} = a - bi$; $z \cdot \bar{z} = a^2 + b^2$.
- Deljenje: ulomek razširimo s številom, konjugiranim imenovalcu.
- Absolutna vrednost: $|z| = \sqrt{a^2 + b^2}$ je razdalja točke $(a, b)$ od izhodišča v kompleksni ravnini.
- Enakost: $a + bi = c + di$ natanko tedaj, ko je $a = c$ in $b = d$.

## Drugače: Na sliki

Vsako kompleksno število je točka v kompleksni ravnini: $3 + 2i$ je točka tri enote desno in dve gor. Lahko ga narišeš tudi kot puščico iz izhodišča do te točke.

- **Seštevanje** je seštevanje puščic: puščico za $z_2$ prestaviš na konec puščice za $z_1$. Rezultat je diagonala paralelograma, ki ga oklepata puščici.
- **Konjugiranje** je zrcaljenje čez realno os: $3 + 2i$ in $3 - 2i$ sta simetrični točki.
- **Absolutna vrednost** je dolžina puščice. Vsa števila z $|z| = 5$, na primer $5$, $5i$, $3 + 4i$ in $-4 - 3i$, ležijo na krožnici s središčem v izhodišču in polmerom $5$.
- **Množenje z $i$** zavrti točko za pravi kot v pozitivni smeri (nasproti urinemu kazalcu): $i(3 + 2i) = -2 + 3i$. Dvakratni zasuk za $90^\circ$ je zasuk za $180^\circ$, zato je $i^2 = -1$.

V interaktivni simulaciji spodaj premikaj točke in opazuj, kako se spreminjajo vsota, konjugirano število in absolutna vrednost.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si zemljevid mesta, kjer je vzhod realna os, sever pa imaginarna. Navodilo »pojdi $3$ ulice proti vzhodu in $4$ proti severu« je število $3 + 4i$. Če potem greš še $1$ ulico proti zahodu in $2$ proti severu ($-1 + 2i$), je tvoj skupni premik vsota $2 + 6i$. Zračna razdalja od izhodišča je absolutna vrednost: za premik $3 + 4i$ je $\sqrt{9 + 16} = 5$ ulic.

Elektrotehniki kompleksna števila uporabljajo vsak dan. Pri izmeničnem toku ima porabnik **impedanco**, ki jo zapišejo kot kompleksno število: realni del je navadni upor, imaginarni del pa opisuje vpliv tuljav in kondenzatorjev. Ker črko $i$ uporabljajo za tok, imaginarno enoto pišejo z $j$. Za upor $30\,\Omega$ in imaginarni del $40\,\Omega$ je velikost impedance $\sqrt{30^2 + 40^2}\,\Omega = 50\,\Omega$, torej ravno absolutna vrednost.

## Drugače: Korak za korakom s številkami

**Izračunaj $\dfrac{3 + 4i}{1 - 2i}$.**

1. Poišči število, konjugirano imenovalcu: $\overline{1 - 2i} = 1 + 2i$.
2. Imenovalec pomnoži s konjugiranim: $(1 - 2i)(1 + 2i) = 1^2 + 2^2 = 5$.
3. Števec pomnoži z istim številom: $(3 + 4i)(1 + 2i) = 3 + 6i + 4i + 8i^2$.
4. Upoštevaj $i^2 = -1$: $3 + 10i - 8 = -5 + 10i$.
5. Deli z imenovalcem: $\dfrac{-5 + 10i}{5} = -1 + 2i$.
6. Preveri z množenjem: $(-1 + 2i)(1 - 2i) = -1 + 2i + 2i - 4i^2 = -1 + 4i + 4 = 3 + 4i$. Ujema se.

**Izračunaj $i^{2026}$.**

1. Deli eksponent s $4$: $2026 = 506 \cdot 4 + 2$, ostanek je $2$.
2. Ker je $i^4 = 1$, je $i^{2026} = \left(i^4\right)^{506} \cdot i^2 = 1 \cdot i^2$.
3. Rezultat: $i^{2026} = -1$.

## Drugače: Bolj natančno

Kompleksno število lahko strogo definiramo kot **urejeni par** realnih števil $(a, b)$, kjer seštevamo po komponentah, množimo pa po pravilu

$$(a, b) \cdot (c, d) = (ac - bd,\ ad + bc).$$

Pari oblike $(a, 0)$ se obnašajo natanko kot realna števila, par $(0, 1)$ pa označimo z $i$. Po pravilu je $(0, 1) \cdot (0, 1) = (-1, 0)$, torej $i^2 = -1$. Tako »skrivnostni« $i$ ni nič drugega kot točka $(0, 1)$ in vsa pravila računanja izpeljemo iz definicije.

**Lastnosti konjugiranja.** Z računom preveriš, da velja $\overline{z_1 + z_2} = \bar{z}_1 + \bar{z}_2$ in $\overline{z_1 \cdot z_2} = \bar{z}_1 \cdot \bar{z}_2$. Od tod sledi pravilo za absolutno vrednost produkta: $|z_1 z_2|^2 = z_1 z_2 \cdot \bar{z}_1 \bar{z}_2 = \left(z_1 \bar{z}_1\right)\left(z_2 \bar{z}_2\right) = |z_1|^2 |z_2|^2$.

**Kompleksnih števil ne urejamo.** Za realna števila velja: kvadrat neničelnega števila je pozitiven. Če bi kompleksna števila uredili z enakimi pravili, bi moral biti $i^2 = -1$ pozitiven, kar ni mogoče. Zato zapis $3 + i < 2 + 5i$ nima smisla. Primerjamo lahko le absolutne vrednosti, ki so realna števila.

## Preveri se

? Koliko je $(2 - i)^2$?
- $4 - i^2 = 5$
- $5 - 4i$
+ $3 - 4i$
- $3 + 4i$
> $(2 - i)^2 = 4 - 4i + i^2 = 4 - 4i - 1 = 3 - 4i$. Pri kvadriranju dvočlenika ne smeš izpustiti mešanega člena.

? Katero število je konjugirano številu $-5 + 2i$?
- $5 - 2i$
+ $-5 - 2i$
- $5 + 2i$
> Pri konjugiranju spremenimo le predznak imaginarnega dela, realni del $-5$ ostane enak.

? Kolikšna je absolutna vrednost števila $-6 + 8i$?
- $2$
- $14$
+ $10$
- $\sqrt{-28}$
> $|-6 + 8i| = \sqrt{(-6)^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$.

? Koliko je $i^{27}$?
- $1$
- $i$
- $-1$
+ $-i$
> $27 = 6 \cdot 4 + 3$, zato je $i^{27} = i^3 = -i$.

:::simboli
i | imaginarna enota | i^2 = -1 | |
z | kompleksno število | z = a + bi | | z̄ = a − bi je konjugirano število
a | realni del | | | Re z = a
b | imaginarni del | | | Im z = b je realno število, ne bi
c | realni del drugega kompleksnega števila | | |
d | imaginarni del drugega kompleksnega števila | | |
z_1, z_2 | kompleksni števili (deljenec in delitelj) | | | z₂ ≠ 0
:::
