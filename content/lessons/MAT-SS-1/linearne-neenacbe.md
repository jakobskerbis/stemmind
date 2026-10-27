---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz osnovne šole znaš reševati linearne enačbe, na primer $2x + 3 = 11$. Znaš tudi primerjati števila na številski premici: $-3 < 2$. Pogosto pa nas ne zanima ena sama vrednost, ampak **območje vrednosti**, ki ustreza nekemu pogoju.

- Telefonski paket stane $5\,\text{€}$ na mesec in $0{,}10\,\text{€}$ za vsako minuto. Koliko minut lahko govoriš, da račun ne preseže $15\,\text{€}$?
- Dvigalo prenese največ $600\,\text{kg}$. Koliko škatel po $45\,\text{kg}$ lahko naložiš poleg sebe, če tehtaš $70\,\text{kg}$?

Odgovor na taka vprašanja ni eno število, ampak **množica rešitev**, ki jo zapišemo kot **interval**. Pri linearni funkciji to pomeni: za katere $x$ je graf nad ali pod določeno vrednostjo.

## Razlaga

**1. Linearna neenačba.** To je neenačba, v kateri se neznanka $x$ pojavlja samo v prvi potenci, npr. $3x - 5 < 7$. Namesto znaka $=$ so znaki:

- $<$ manjše,
- $>$ večje,
- $\le$ manjše ali enako,
- $\ge$ večje ali enako.

**2. Rešitev** je vsako število, ki neenačbo spremeni v resničen izrek. Pri $x + 1 > 3$ so rešitve $2{,}5$; $3$; $10$ … in sicer vsa števila, večja od $2$. Rešitev je torej neskončno mnogo.

**3. Ekvivalentne preoblikovanja.** Neenačbo rešujemo podobno kot enačbo:

- na obeh straneh lahko **prištejemo ali odštejemo** isto število, znak ostane enak;
- obe strani lahko **pomnožimo ali delimo s pozitivnim** številom, znak ostane enak;
- obe strani **pomnožimo ali delimo z negativnim** številom, znak pa se **obrne** ($<$ postane $>$ in obratno).

Zakaj se obrne? $2 < 5$ drži. Če pomnožimo z $-1$, dobimo $-2$ in $-5$, na številski premici pa je $-5$ levo od $-2$, torej $-2 > -5$.

**4. Zapis rešitve kot interval.** Množico rešitev zapišemo na številski premici in z intervalom:

| Neenačba | Interval | Pomen |
|---|---|---|
| $x > a$ | $(a, \infty)$ | od $a$ naprej, brez $a$ |
| $x \ge a$ | $[a, \infty)$ | od $a$ naprej, z $a$ |
| $x < a$ | $(-\infty, a)$ | do $a$, brez $a$ |
| $x \le a$ | $(-\infty, a]$ | do $a$, z $a$ |

- **Oklepaj** $($ ali $)$ pomeni, da krajišče **ni** v množici (pri strogih znakih $<$, $>$). Na številski premici ga narišemo kot **prazen krožec**.
- **Oglati oklepaj** $[$ ali $]$ pomeni, da krajišče **je** v množici (pri $\le$, $\ge$). Narišemo ga kot **poln krožec**.
- Pri $\infty$ in $-\infty$ je oklepaj vedno okrogel, saj to nista števili.

**5. Poseben primer.** Pri neenačbi $0 \cdot x < 5$ ali $0 \cdot x > 5$ po poenostavitvi nastane neenačba brez $x$. Če je resnična, je rešitev vsako realno število $(-\infty, \infty)$; če ni, rešitev ni (prazna množica).

## Rešeni primeri

### Primer 1: osnovna neenačba

Reši neenačbo $2x + 3 < 11$ in zapiši rešitev kot interval.

1. Odštejemo $3$ na obeh straneh, da ločimo člen z $x$: $2x < 8$.
2. Delimo z $2$. Ker je $2$ pozitivno število, se znak **ne** obrne: $x < 4$.
3. Interval: $(-\infty, 4)$. Krajišče $4$ ni rešitev, ker je znak strog (prazen krožec).
4. Preizkus: $x = 0$ da $3 < 11$ ✓. $x = 4$ da $11 < 11$, kar ne drži, zato $4$ ni rešitev ✓.

### Primer 2: negativen koeficient

Reši neenačbo $5 - 3x \le 14$.

1. Odštejemo $5$: $-3x \le 9$.
2. Delimo z $-3$. Ker delimo z negativnim številom, se znak **obrne**: $x \ge -3$.
3. Interval: $[-3, \infty)$. Znak je $\ge$, zato je $-3$ rešitev (poln krožec).
4. Preizkus: $x = -3$ da $5 + 9 = 14 \le 14$ ✓. $x = 0$ da $5 \le 14$ ✓. $x = -4$ da $5 + 12 = 17 \le 14$ ne drži, zato $-4$ ni rešitev ✓.

### Primer 3: besedilna naloga

Telefonski paket stane $5\,\text{€}$ mesečno in $0{,}10\,\text{€}$ za vsako minuto. Koliko minut lahko govoriš, da račun ne preseže $15\,\text{€}$?

1. **Neznanka.** Naj bo $x$ število minut. Velja $x \ge 0$.
2. **Neenačba.** Račun je $5 + 0{,}10x$ in ne sme presegati $15$, torej $5 + 0{,}10x \le 15$.
3. Odštejemo $5$: $0{,}10x \le 10$.
4. Delimo z $0{,}10$ (pozitivno): $x \le 100$.
5. Upoštevamo še $x \ge 0$: rešitev je interval $[0, 100]$.
6. **Odgovor.** Govoriš lahko od $0$ do $100$ minut. Pri natanko $100$ minutah je račun $5 + 10 = 15\,\text{€}$, kar še ustreza pogoju.

## Pogoste napake

- **Pozabljena obrnitev znaka.** Pri množenju ali deljenju z negativnim številom se znak obrne. Iz $-2x < 6$ sledi $x > -3$, ne $x < -3$.
- **Napačen oklepaj.** Pri $<$ in $>$ krajišče ni rešitev, zato okrogel oklepaj; pri $\le$ in $\ge$ oglati. Pri $\infty$ je oklepaj vedno okrogel.
- **Napačna smer intervala.** Pri $x > 4$ rešitev ni $(-\infty, 4)$. Interval se vedno zapiše od manjšega števila k večjemu: $(4, \infty)$.
- **Obravnavanje kot enačbe.** Rešitev ni eno število, ampak množica. Zapis $x = 4$ pri neenačbi je napačen.
- **Pozabljen dodaten pogoj** pri besedilnih nalogah, na primer da število minut ne more biti negativno.

## Povzetek

- Linearna neenačba ima obliko $ax + b < c$ (ali z znakom $>$, $\le$, $\ge$).
- Reševanje: prištevanje in odštevanje ne spremeni znaka, množenje in deljenje s pozitivnim številom tudi ne.
- Pri množenju ali deljenju z **negativnim** številom se znak **obrne**.
- Rešitev zapišemo kot interval: okrogel oklepaj pri strogi neenačbi in pri $\pm\infty$, oglati oklepaj pri $\le$, $\ge$.
- Pri besedilnih nalogah upoštevamo še smiselnost rešitve (npr. $x \ge 0$).

## Drugače: Na sliki

Na številski premici je rešitev neenačbe **del premice**, ki ga pobarvamo.

Za $x < 4$ pobarvamo vse levo od $4$ in v $4$ narišemo prazen krožec, ker $4$ ni rešitev. Za $x \ge -3$ pobarvamo vse desno od $-3$ in v $-3$ narišemo poln krožec.

Pomaga tudi graf funkcije. Pri $f(x) = 2x + 3$ neenačba $2x + 3 < 11$ sprašuje: **pri katerih $x$ je graf pod vodoravno premico $y = 11$?** Graf in premica se sekata pri $x = 4$. Ker je graf naraščajoč, je pod premico levo od presečišča, torej za $x < 4$.

Če je funkcija padajoča, kot pri $5 - 3x$, je ravno obratno: graf je pod vrednostjo $14$ desno od presečišča. To je slikovna razlaga, zakaj se pri negativnem koeficientu znak obrne.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si dvigalo z napisom »največ $600\,\text{kg}$«. Ti tehtaš $70\,\text{kg}$, vsaka škatla $45\,\text{kg}$. Koliko škatel $x$ lahko naložiš?

$$70 + 45x \le 600$$

Odštejemo $70$: $45x \le 530$. Delimo s $45$: $x \le 11{,}78\ldots$ Ker škatel ne moremo deliti, je največ $11$ škatel. Preveri: $70 + 45 \cdot 11 = 565 \le 600$ ✓, $70 + 45 \cdot 12 = 610 > 600$ ✗.

Iz tega se vidi, da matematična rešitev ($x \le 11{,}78\ldots$) in rešitev v resničnem svetu ($x \in \{0, 1, \dots, 11\}$) nista vedno enaki. Pri besedilnih nalogah vedno premisli, ali je rešitev smiselna.

Analogija za obrnitev znaka: če si po višini razvrščen od najnižjega do najvišjega in se obrneš na glavo (množenje z $-1$), je vrstni red obrnjen.

## Drugače: Korak za korakom s številkami

Reši $4 - 2x > 10$ in preveri z vzorčnimi števili.

| Korak | Zapis | Kaj smo naredili |
|---|---|---|
| 1 | $4 - 2x > 10$ | začetna neenačba |
| 2 | $-2x > 6$ | odšteli $4$ |
| 3 | $x < -3$ | delili z $-2$, znak se obrne |

Interval: $(-\infty, -3)$.

Preizkus z vzorčnimi števili:

| $x$ | $4 - 2x$ | Ali je $> 10$? |
|---|---|---|
| $-5$ | $14$ | da |
| $-3$ | $10$ | ne (enakost, znak je strog) |
| $0$ | $4$ | ne |

Samo števila, manjša od $-3$, ustrezajo, kar se ujema z rešitvijo. Če bi znak pozabili obrniti in zapisali $x > -3$, bi rešitev izbrali napačno. Preizkus z enim številom, na primer $x = 0$, takoj odkrije napako.

## Drugače: Bolj natančno

**Zakaj se znak obrne?** Naj bo $a < b$ in $c < 0$. Potem je $b - a > 0$. Produkt pozitivnega in negativnega števila je negativen, zato $c(b - a) < 0$, torej $cb - ca < 0$ oziroma $cb < ca$. Pri množenju z negativnim številom torej iz $a < b$ sledi $ca > cb$.

**Splošna rešitev.** Neenačba $ax + b < c$ ima za $a \ne 0$ rešitev:

- za $a > 0$: $x < \dfrac{c - b}{a}$, torej interval $\left(-\infty, \dfrac{c - b}{a}\right)$;
- za $a < 0$: $x > \dfrac{c - b}{a}$, torej interval $\left(\dfrac{c - b}{a}, \infty\right)$.

**Pomen intervalov.** Interval je množica vseh realnih števil med dvema krajiščema. Oglati oklepaj pomeni, da je krajišče element množice, okrogli, da ni. Simbol $\infty$ ni število, zato ga ne moremo vključiti in pri njem uporabljamo okrogel oklepaj.

## Preveri se

? Katera je rešitev neenačbe $3x - 4 \ge 5$?
- $(-\infty, 3]$
- $(3, \infty)$
+ $[3, \infty)$
- $[3, \infty]$
> $3x \ge 9$, torej $x \ge 3$. Znak je $\ge$, zato je $3$ rešitev (oglati oklepaj), interval gre v desno. Pri $\infty$ je oklepaj vedno okrogel.

? Reši neenačbo $-4x < 12$.
- $x < -3$
+ $x > -3$
- $x < 3$
- $x > 3$
> Delimo z $-4$, to je negativno število, zato se znak obrne: $x > -3$.

? Kateri interval je rešitev neenačbe $7 - x > 2$?
- $(5, \infty)$
- $(-\infty, 5]$
+ $(-\infty, 5)$
> Odštejemo $7$: $-x > -5$. Delimo z $-1$ in obrnemo znak: $x < 5$. Znak je strog, zato je $5$ izključen. Odgovor $(5, \infty)$ je posledica pozabljene obrnitve znaka.
