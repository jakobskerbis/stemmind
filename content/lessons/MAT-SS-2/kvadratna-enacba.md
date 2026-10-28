---
stanje: osnutek
demo: graf
avtor: AI
---

## Zakaj se tega učimo

Pri kvadratni funkciji si ničle iskal tako, da si jo zapisal v temenski obliki ali razstavil tričlenik. To ne gre vedno lepo: tričlenika $x^2 - 7x + 3$ ne razstaviš na pamet, pretvorba v temensko obliko pa je pri vsakem zgledu znova dolga. Zato potrebujemo splošen postopek, ki deluje za vsako kvadratno enačbo.

V tej lekciji spoznaš **obrazec za rešitve kvadratne enačbe**, **diskriminanto**, ki brez reševanja pove, koliko in kakšne rešitve ima enačba, ter **Vietovi formuli**, ki povezujeta rešitvi s koeficienti. Kvadratne enačbe srečaš povsod: pri ploščinah in prostorninah, pri gibanju v fiziki, pri obrestih in pri iskanju presečišč parabole s premico. Kako se z diskriminanto spreminja lega parabole glede na os $x$, si oglej v interaktivni simulaciji spodaj (»Kvadratna enačba in diskriminanta«).

## Razlaga

**1. Definicija.** Kvadratna enačba je enačba, ki jo lahko zapišemo v **splošni obliki**

$$ax^2 + bx + c = 0, \qquad a, b, c \in \mathbb{R},\ a \ne 0.$$

Rešitve enačbe so natanko ničle kvadratne funkcije $f(x) = ax^2 + bx + c$. Preden prebereš koeficiente, enačbo vedno preoblikuj tako, da je na desni strani $0$.

**2. Nepopolne kvadratne enačbe.** Če je $b = 0$ ali $c = 0$, obrazca ne potrebuješ.

- $c = 0$: izpostavimo $x$. Iz $ax^2 + bx = 0$ sledi $x(ax + b) = 0$, torej $x_1 = 0$ in $x_2 = -\dfrac{b}{a}$.
- $b = 0$: iz $ax^2 + c = 0$ sledi $x^2 = -\dfrac{c}{a}$ in korenimo, na primer $x^2 = 9$ da $x_{1,2} = \pm 3$.

**3. Diskriminanta in obrazec.** Za splošno enačbo izračunamo **diskriminanto**

$$D = b^2 - 4ac$$

in rešitve po obrazcu

$$x_{1,2} = \frac{-b \pm \sqrt{D}}{2a}.$$

Ulomkova črta je pod celotnim števcem $-b \pm \sqrt{D}$. Od kod obrazec izhaja, si preberi v razdelku »Bolj natančno«.

**4. Kaj pove diskriminanta.**

| Diskriminanta | Rešitve | Graf $f(x) = ax^2 + bx + c$ |
|---|---|---|
| $D > 0$ | dve različni realni rešitvi | parabola seka os $x$ v dveh točkah |
| $D = 0$ | ena dvojna realna rešitev $x_1 = x_2 = -\dfrac{b}{2a}$ | teme leži na osi $x$ |
| $D < 0$ | dve konjugirano kompleksni rešitvi | parabola ne seka osi $x$ |

Pri $D < 0$ v realnih številih rešitev ni, v kompleksnih pa sta dve. Ker je $\sqrt{D} = \sqrt{-1 \cdot |D|} = i\sqrt{|D|}$, velja

$$x_{1,2} = \frac{-b \pm i\sqrt{-D}}{2a},$$

rešitvi sta torej konjugirani kompleksni števili.

**5. Vietovi formuli.** Za rešitvi $x_1$ in $x_2$ enačbe $ax^2 + bx + c = 0$ velja

$$x_1 + x_2 = -\frac{b}{a}, \qquad x_1 \cdot x_2 = \frac{c}{a}.$$

Formuli veljata tudi za dvojno in za kompleksni rešitvi. Uporabljamo ju za:

- **preverjanje** rešitev,
- **sestavljanje enačbe** z danima rešitvama: $x^2 - (x_1 + x_2)x + x_1 x_2 = 0$,
- **razcep tričlenika**: $ax^2 + bx + c = a(x - x_1)(x - x_2)$, kar je ničelna oblika kvadratne funkcije,
- računanje izrazov, kot sta $x_1^2 + x_2^2$ ali $\dfrac{1}{x_1} + \dfrac{1}{x_2}$, brez reševanja enačbe.

**6. Postopek reševanja.** Enačbo preoblikuj v splošno obliko, preberi $a$, $b$, $c$, izračunaj $D$, iz predznaka $D$ ugotovi vrsto rešitev, uporabi obrazec in preveri z Vietovima formulama.

## Rešeni primeri

### Primer 1 (lažji)

Reši enačbo $x^2 - 2x - 15 = 0$ in rešitvi preveri z Vietovima formulama.

**Podatki:** enačba $x^2 - 2x - 15 = 0$, torej $a = 1$, $b = -2$, $c = -15$
**Iščemo:** rešitvi $x_1$ in $x_2$

:::formula
$D = b^2 - 4ac$, $\; x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a}$, $\; x_1 + x_2 = -\dfrac{b}{a}$, $\; x_1 x_2 = \dfrac{c}{a}$
:::

**Rešitev:**

1. Diskriminanta: $D = (-2)^2 - 4 \cdot 1 \cdot (-15) = 4 + 60 = 64$. Ker je $D > 0$, sta rešitvi dve realni.
2. $\sqrt{D} = 8$, zato $x_{1,2} = \dfrac{2 \pm 8}{2}$.
3. $x_1 = \dfrac{2 + 8}{2} = 5$ in $x_2 = \dfrac{2 - 8}{2} = -3$.
4. Preverjanje: $x_1 + x_2 = 2 = -\dfrac{-2}{1}$ in $x_1 x_2 = -15 = \dfrac{-15}{1}$.
5. Odgovor: rešitvi enačbe sta $x_1 = 5$ in $x_2 = -3$.

### Primer 2 (srednji)

Ugotovi, kakšne rešitve ima enačba $2x^2 + 4x + 5 = 0$, in jih izračunaj v množici kompleksnih števil. Kaj to pomeni za graf funkcije $f(x) = 2x^2 + 4x + 5$?

**Podatki:** enačba $2x^2 + 4x + 5 = 0$, torej $a = 2$, $b = 4$, $c = 5$; funkcija $f(x) = 2x^2 + 4x + 5$
**Iščemo:** vrsto rešitev, rešitvi $x_1$ in $x_2$ v $\mathbb{C}$, lego grafa glede na os $x$

:::formula
$D = b^2 - 4ac$; pri $D < 0$: $\; x_{1,2} = \dfrac{-b \pm i\sqrt{-D}}{2a}$
:::

**Rešitev:**

1. $D = 4^2 - 4 \cdot 2 \cdot 5 = 16 - 40 = -24 < 0$. Realnih rešitev ni, v $\mathbb{C}$ sta dve konjugirano kompleksni.
2. $\sqrt{-D} = \sqrt{24} = \sqrt{4 \cdot 6} = 2\sqrt{6}$.
3. $x_{1,2} = \dfrac{-4 \pm 2\sqrt{6}\, i}{4} = -1 \pm \dfrac{\sqrt{6}}{2}\, i$.
4. Preverjanje z Vietovima formulama: vsota je $-1 + (-1) = -2 = -\dfrac{4}{2}$; produkt je $(-1)^2 + \left(\dfrac{\sqrt{6}}{2}\right)^2 = 1 + \dfrac{6}{4} = \dfrac{5}{2}$, kar je $\dfrac{c}{a}$.
5. Graf: $a = 2 > 0$, teme je pri $x = -\dfrac{4}{4} = -1$, $f(-1) = 2 - 4 + 5 = 3 > 0$. Parabola je odprta navzgor in v celoti leži nad osjo $x$.
6. Odgovor: rešitvi sta $x_{1,2} = -1 \pm \dfrac{\sqrt{6}}{2}\, i$; ker sta nerealni, graf funkcije $f$ ne seka osi $x$.

### Primer 3 (težji)

Naj bosta $x_1$ in $x_2$ rešitvi enačbe $x^2 - 7x + 3 = 0$. Brez reševanja enačbe izračunaj $x_1^2 + x_2^2$ in sestavi kvadratno enačbo (z vodilnim koeficientom $1$), katere rešitvi sta $x_1^2$ in $x_2^2$.

**Podatki:** enačba $x^2 - 7x + 3 = 0$, torej $a = 1$, $b = -7$, $c = 3$; nova enačba ima vodilni koeficient $1$ in rešitvi $x_1^2$, $x_2^2$
**Iščemo:** vrednost $x_1^2 + x_2^2$ in novo enačbo

:::formula
$x_1 + x_2 = -\dfrac{b}{a}$, $\; x_1 x_2 = \dfrac{c}{a}$, $\; x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2$; enačba z rešitvama $y_1$, $y_2$: $\; y^2 - (y_1 + y_2)y + y_1 y_2 = 0$
:::

**Rešitev:**

1. Vietovi formuli: $x_1 + x_2 = 7$, $x_1 x_2 = 3$. (Ker je $D = 49 - 12 = 37 > 0$, sta rešitvi realni.)
2. Iz $(x_1 + x_2)^2 = x_1^2 + 2x_1 x_2 + x_2^2$ sledi $x_1^2 + x_2^2 = 7^2 - 2 \cdot 3 = 49 - 6 = 43$.
3. Produkt novih rešitev: $x_1^2 \cdot x_2^2 = (x_1 x_2)^2 = 3^2 = 9$.
4. Nova enačba: $y^2 - 43y + 9 = 0$.
5. Preverjanje s približki: $x_{1,2} = \dfrac{7 \pm \sqrt{37}}{2}$, torej $x_1 \approx 6{,}5414$ in $x_2 \approx 0{,}4586$. Tedaj $x_1^2 \approx 42{,}790$ in $x_2^2 \approx 0{,}210$; vsota je $43$, produkt $9$.
6. Odgovor: $x_1^2 + x_2^2 = 43$, iskana enačba je $y^2 - 43y + 9 = 0$.

## Pogoste napake

- **Koeficienti iz enačbe, ki ni v splošni obliki.** Pri $x^2 = 3x + 4$ ni $c = 4$. Razlog: obrazec velja le za obliko $ax^2 + bx + c = 0$. Pravilno: najprej prenesi vse na levo, $x^2 - 3x - 4 = 0$, šele nato preberi $a = 1$, $b = -3$, $c = -4$.
- **Napaka s predznakom pri $b^2$ in $-b$.** Pri $b = -3$ je $b^2 = (-3)^2 = 9$, ne $-9$, in $-b = 3$. Razlog: kvadrat negativnega števila je pozitiven. Pravilno: negativen $b$ vedno vstavi v oklepaj.
- **Ulomkova črta le pod korenom.** Zapis $-b \pm \dfrac{\sqrt{D}}{2a}$ je napačen. Razlog: z $2a$ delimo celoten števec. Pravilno: $x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a}$.
- **Deljenje z neznanko.** Iz $x^2 = 3x$ nekateri delijo z $x$ in dobijo samo $x = 3$. Razlog: z $x$ smemo deliti le, če $x \ne 0$, zato rešitev $x = 0$ izgubiš. Pravilno: $x^2 - 3x = 0$, $x(x - 3) = 0$, $x_1 = 0$, $x_2 = 3$.
- **Vietova formula brez minusa** in sklep »ni rešitve«. Vsota rešitev je $-\dfrac{b}{a}$, ne $\dfrac{b}{a}$. Pri $D < 0$ pa ni res, da enačba nima rešitev: v $\mathbb{R}$ jih nima, v $\mathbb{C}$ ima dve konjugirani.

## Povzetek

- Kvadratna enačba: $ax^2 + bx + c = 0$, $a \ne 0$; rešitve so ničle funkcije $f(x) = ax^2 + bx + c$.
- Diskriminanta $D = b^2 - 4ac$; rešitve $x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a}$.
- $D > 0$: dve različni realni rešitvi; $D = 0$: ena dvojna realna; $D < 0$: dve konjugirano kompleksni.
- Nepopolne enačbe rešuj z izpostavljanjem ($c = 0$) ali s korenjenjem ($b = 0$), ne deli z $x$.
- Vietovi formuli: $x_1 + x_2 = -\dfrac{b}{a}$, $x_1 x_2 = \dfrac{c}{a}$.
- Razcep: $ax^2 + bx + c = a(x - x_1)(x - x_2)$; enačba z rešitvama $x_1$, $x_2$: $x^2 - (x_1 + x_2)x + x_1 x_2 = 0$.

## Drugače: Na sliki

Reševanje kvadratne enačbe si lahko predstavljaš kot vprašanje: **kje parabola $y = ax^2 + bx + c$ prečka os $x$?** Diskriminanta je takrat kot napoved, ki jo izrečeš, še preden pogledaš graf.

Predstavljaj si parabolo, odprto navzgor, ki jo počasi dvigaš (povečuješ $c$). Dokler je njeno teme pod osjo $x$, jo kraka sekata v dveh točkah, $D > 0$. Ko dvigaš naprej, se presečišči bližata simetrijski osi, dokler se ne zlijeta v eno točko: teme se osi ravno dotakne, $D = 0$. Če parabolo dvigneš še više, lebdi nad osjo in presečišč ni več, $D < 0$. Rešitvi takrat »zbežita« iz realne premice v kompleksno ravnino, kjer ležita simetrično nad in pod realno osjo, saj sta konjugirani.

Na grafu vidiš tudi Vietovo formulo za vsoto: ničli sta simetrični glede na os $x = -\dfrac{b}{2a}$, zato je njuna vsota dvakratnik te vrednosti, $-\dfrac{b}{a}$. V interaktivni simulaciji spodaj spreminjaj samo $c$ in opazuj, kdaj postane $D = 0$.

## Drugače: Iz vsakdanjega življenja

Pravokotna gredica ima obseg $34\,\text{m}$ in ploščino $60\,\text{m}^2$. Kako dolgi sta stranici?

Polovica obsega je $17\,\text{m}$, zato sta stranici $x$ in $17 - x$. Ploščina da enačbo $x(17 - x) = 60$, torej $x^2 - 17x + 60 = 0$. Diskriminanta je $D = 289 - 240 = 49$, rešitvi sta $x_{1,2} = \dfrac{17 \pm 7}{2}$, torej $12$ in $5$. Gredica meri $12\,\text{m}$ krat $5\,\text{m}$.

Opazi, da je to natanko Vietova situacija: iščemo dve števili, ki imata vsoto $17$ (polovica obsega) in produkt $60$ (ploščina). Kvadratna enačba $x^2 - 17x + 60 = 0$ je »stroj«, ki iz vsote in produkta vrne obe števili.

Podobno rešujemo naloge o gibanju: kdaj je v zrak vržena žoga na dani višini? Ker je višina kvadratna funkcija časa, dobimo kvadratno enačbo. Dve pozitivni rešitvi pomenita, da je žoga na tej višini dvakrat (gor in dol), $D = 0$ pomeni, da je to ravno najvišja točka, $D < 0$ pa, da žoga te višine sploh ne doseže.

## Drugače: Korak za korakom s številkami

Reši enačbo $x(3x + 4) = 2 - x$.

1. **Odpravi oklepaje:** $3x^2 + 4x = 2 - x$.
2. **Vse na levo stran:** $3x^2 + 4x + x - 2 = 0$, torej $3x^2 + 5x - 2 = 0$.
3. **Preberi koeficiente:** $a = 3$, $b = 5$, $c = -2$.
4. **Diskriminanta:** $D = 5^2 - 4 \cdot 3 \cdot (-2) = 25 + 24 = 49$. Ker je $D > 0$, pričakujemo dve realni rešitvi. Ker je $49 = 7^2$, bosta racionalni.
5. **Obrazec:** $x_{1,2} = \dfrac{-5 \pm 7}{6}$, torej $x_1 = \dfrac{2}{6} = \dfrac{1}{3}$ in $x_2 = \dfrac{-12}{6} = -2$.
6. **Preverjanje z Vietom:** $x_1 + x_2 = \dfrac{1}{3} - 2 = -\dfrac{5}{3} = -\dfrac{b}{a}$ in $x_1 x_2 = -\dfrac{2}{3} = \dfrac{c}{a}$.
7. **Preverjanje v prvotni enačbi** za $x = -2$: v oklepaju je $3 \cdot (-2) + 4 = -2$, leva stran je $-2 \cdot (-2) = 4$, desna $2 - (-2) = 4$. Za $x = \dfrac{1}{3}$: leva stran $\dfrac{1}{3} \cdot 5 = \dfrac{5}{3}$, desna $2 - \dfrac{1}{3} = \dfrac{5}{3}$. Obe rešitvi ustrezata.
8. **Razcep:** $3x^2 + 5x - 2 = 3\left(x - \dfrac{1}{3}\right)(x + 2) = (3x - 1)(x + 2)$.

## Drugače: Bolj natančno

**Izpeljava obrazca.** Enačbo $ax^2 + bx + c = 0$ delimo z $a \ne 0$ in dopolnimo do popolnega kvadrata:

$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0 \;\Longrightarrow\; \left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2} = \frac{D}{4a^2}.$$

Imenovalec $4a^2$ je pozitiven, zato je predznak desne strani enak predznaku $D$. Pri $D \ge 0$ korenimo: $x + \dfrac{b}{2a} = \pm \dfrac{\sqrt{D}}{2a}$, od koder dobimo obrazec. Pri $D < 0$ korenimo v $\mathbb{C}$, kjer ima vsako negativno realno število dva kvadratna korena $\pm i\sqrt{-D}$.

**Dokaz Vietovih formul.** Seštejemo rešitvi iz obrazca: korena se odštejeta, $x_1 + x_2 = \dfrac{-2b}{2a} = -\dfrac{b}{a}$. Za produkt uporabimo razliko kvadratov:

$$x_1 x_2 = \frac{(-b)^2 - D}{4a^2} = \frac{b^2 - b^2 + 4ac}{4a^2} = \frac{c}{a}.$$

**Razcep.** Iz Vietovih formul sledi $a(x - x_1)(x - x_2) = a\left(x^2 - (x_1 + x_2)x + x_1 x_2\right) = ax^2 + bx + c$. Kvadratni tričlenik z $D \ge 0$ se torej razcepi na linearna faktorja z realnimi koeficienti, pri $D < 0$ pa samo v $\mathbb{C}$. Zato ima kvadratna enačba v $\mathbb{C}$ vedno dve rešitvi, če dvojno rešitev štejemo dvakrat.

## Preveri se

? Kakšne rešitve ima enačba $x^2 - 4x + 7 = 0$?
- dve različni realni rešitvi
- eno dvojno realno rešitev
+ dve konjugirano kompleksni rešitvi
> $D = (-4)^2 - 4 \cdot 1 \cdot 7 = 16 - 28 = -12 < 0$, zato sta rešitvi nerealni in konjugirani: $x_{1,2} = 2 \pm i\sqrt{3}$.

? Kateri sta rešitvi enačbe $x^2 - x - 12 = 0$?
- $x_1 = -4$, $x_2 = 3$
+ $x_1 = -3$, $x_2 = 4$
- $x_1 = 3$, $x_2 = 4$
- $x_1 = -3$, $x_2 = -4$
> $D = 1 + 48 = 49$, $x_{1,2} = \dfrac{1 \pm 7}{2}$, torej $4$ in $-3$. Preverjanje: vsota $1$, produkt $-12$.

? Koliko je vsota rešitev enačbe $2x^2 - 6x - 5 = 0$?
- $-3$
+ $3$
- $-\dfrac{5}{2}$
- $6$
> Po Vietovi formuli je $x_1 + x_2 = -\dfrac{b}{a} = -\dfrac{-6}{2} = 3$. Vrednost $-\dfrac{5}{2}$ je produkt rešitev.

? Katera enačba ima rešitvi $2$ in $-5$?
+ $x^2 + 3x - 10 = 0$
- $x^2 - 3x - 10 = 0$
- $x^2 + 3x + 10 = 0$
> Vsota rešitev je $-3$, produkt $-10$, zato $x^2 - (-3)x + (-10) = x^2 + 3x - 10 = 0$.
