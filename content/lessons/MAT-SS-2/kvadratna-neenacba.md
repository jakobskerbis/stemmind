---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Linearne neenačbe, kot je $2x - 3 > 5$, že znaš reševati, pri kvadratni funkciji pa si se naučil poiskati ničle in narisati parabolo. Kvadratno enačbo $ax^2 + bx + c = 0$ rešiš z diskriminanto in obrazcem za rešitve. Zdaj ta znanja združimo.

Pogosto nas ne zanima, kdaj je neka količina **natanko enaka** določeni vrednosti, ampak kdaj je **večja** ali **manjša** od nje. Kdaj je žoga, vržena navpično navzgor, više kot $15\,\text{m}$? Pri kateri količini izdelkov podjetje posluje z dobičkom? Za katere $x$ je izraz pod kvadratnim korenom nenegativen, da koren sploh obstaja? Na vsa ta vprašanja odgovori **kvadratna neenačba**. Rešili jo bomo **z grafom**: parabola nam pokaže, kje je kvadratna funkcija pozitivna in kje negativna. Kako se rešitev spreminja, ko premikaš parabolo, si oglej v interaktivni simulaciji spodaj (»Kvadratna neenačba«).

## Razlaga

**1. Definicija.** Kvadratna neenačba je neenačba, ki jo lahko preoblikujemo v eno od oblik

$$ax^2 + bx + c > 0, \quad ax^2 + bx + c \ge 0, \quad ax^2 + bx + c < 0, \quad ax^2 + bx + c \le 0,$$

kjer so $a, b, c$ realna števila in $a \ne 0$. **Rešitev** neenačbe je množica vseh realnih števil $x$, za katera neenačba velja. Navadno jo zapišemo z intervali ali z unijo intervalov.

**2. Ključna ideja.** Označimo $f(x) = ax^2 + bx + c$. Neenačba $f(x) > 0$ sprašuje, kje je graf funkcije $f$ **nad osjo $x$**, neenačba $f(x) < 0$ pa, kje je graf **pod osjo $x$**. Pri neenačbah z $\ge$ in $\le$ dodamo še točke, kjer graf os $x$ seka ali se je dotakne, torej ničle.

**3. Postopek reševanja z grafom.**

1. Neenačbo preoblikuj tako, da je na desni strani $0$: vse člene prenesi na levo in jih uredi.
2. Poišči ničle funkcije $f(x) = ax^2 + bx + c$ (diskriminanta $D = b^2 - 4ac$ in obrazec $x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a}$).
3. Nariši skico parabole: ničle označi na osi $x$, po predznaku $a$ ugotovi, ali je parabola odprta navzgor ($a > 0$) ali navzdol ($a < 0$). Teme in natančna oblika niso potrebni.
4. Na skici preberi, kje je parabola nad osjo $x$ oziroma pod njo.
5. Rešitev zapiši z intervali. Pri ostrem neenačaju ($>$, $<$) ničle **niso** del rešitve (okrogli oklepaj), pri neostrem ($\ge$, $\le$) **so** (oglati oklepaj).

**4. Primer $a > 0$ in $D > 0$.** Parabola je odprta navzgor in seka os $x$ v ničlah $x_1 < x_2$. Med ničlama je pod osjo, zunaj njiju pa nad osjo:

| Neenačba | Rešitev |
|---|---|
| $f(x) > 0$ | $(-\infty, x_1) \cup (x_2, \infty)$ |
| $f(x) \ge 0$ | $(-\infty, x_1] \cup [x_2, \infty)$ |
| $f(x) < 0$ | $(x_1, x_2)$ |
| $f(x) \le 0$ | $[x_1, x_2]$ |

**5. Primer $D = 0$.** Parabola se osi $x$ le dotakne v eni točki (teme leži na osi). Za $a > 0$ je graf povsod drugje nad osjo. Za $f(x) = (x - 2)^2$ dobimo: $f(x) > 0$ za $x \in \mathbb{R} \setminus \{2\}$, $f(x) \ge 0$ za vse $x \in \mathbb{R}$, $f(x) < 0$ nima rešitve ($\emptyset$), $f(x) \le 0$ pa velja le za $x = 2$, torej je rešitev $\{2\}$.

**6. Primer $D < 0$.** Parabola nima realnih ničel in osi $x$ ne doseže. Pri $a > 0$ je ves graf nad osjo, zato je $f(x) > 0$ (in $f(x) \ge 0$) izpolnjena za vse $x \in \mathbb{R}$, neenačbi $f(x) < 0$ in $f(x) \le 0$ pa nimata rešitve. Pri $a < 0$ je ravno obratno.

**7. Ko je $a < 0$.** Parabola je odprta navzdol, zato je **med** ničlama nad osjo, zunaj njiju pod osjo. Lahko pa neenačbo najprej pomnožiš z $-1$ in dobiš pozitiven vodilni koeficient. Pri tem **obrni neenačaj**: iz $-x^2 + 4 > 0$ dobiš $x^2 - 4 < 0$.

## Rešeni primeri

### Primer 1 (lažji)

Reši neenačbo $x^2 - x - 6 < 0$.

**Podatki:** neenačba $x^2 - x - 6 < 0$; koeficienti $a = 1$, $b = -1$, $c = -6$
**Iščemo:** množico vseh $x$, za katere neenačba velja

:::formula
$D = b^2 - 4ac$, $\; x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a}$; pri $a > 0$ je $f(x) < 0$ med ničlama.
:::

**Rešitev:**

1. Desna stran je že $0$. Diskriminanta: $D = (-1)^2 - 4 \cdot 1 \cdot (-6) = 1 + 24 = 25$.
2. Ničli: $x_{1,2} = \dfrac{1 \pm 5}{2}$, torej $x_1 = -2$ in $x_2 = 3$.
3. Ker je $a = 1 > 0$, je parabola odprta navzgor. Pod osjo $x$ je med ničlama.
4. Neenačaj je oster, zato ničel ne vključimo.
5. Preizkus s številom iz intervala, na primer $x = 0$: $0 - 0 - 6 = -6 < 0$. Velja. Za $x = 4$: $16 - 4 - 6 = 6$, kar ni manjše od $0$, in $4$ res ni v rešitvi.
6. Odgovor: rešitev neenačbe je interval $(-2, 3)$.

### Primer 2 (srednji)

Reši neenačbo $-2x^2 + 5x + 3 \ge 0$. Koliko celih števil zadošča neenačbi?

**Podatki:** neenačba $-2x^2 + 5x + 3 \ge 0$; koeficienti $a = -2$, $b = 5$, $c = 3$
**Iščemo:** rešitev neenačbe in število celih rešitev

:::formula
$D = b^2 - 4ac$, $\; x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a}$; pri $a < 0$ je $f(x) \ge 0$ med ničlama, vključno z ničlama.
:::

**Rešitev:**

1. Diskriminanta: $D = 5^2 - 4 \cdot (-2) \cdot 3 = 25 + 24 = 49$.
2. Ničli: $x_{1,2} = \dfrac{-5 \pm 7}{2 \cdot (-2)} = \dfrac{-5 \pm 7}{-4}$. Torej $x_1 = \dfrac{2}{-4} = -\dfrac{1}{2}$ in $x_2 = \dfrac{-12}{-4} = 3$.
3. Ker je $a = -2 < 0$, je parabola odprta navzdol. Nad osjo $x$ je med ničlama.
4. Neenačaj je neoster, zato ničli spadata v rešitev: $x \in \left[-\dfrac{1}{2}, 3\right]$.
5. Cela števila v tem intervalu so $0$, $1$, $2$ in $3$ (število $-1$ je manjše od $-\dfrac{1}{2}$).
6. Preizkus: za $x = 3$ je $-18 + 15 + 3 = 0 \ge 0$, za $x = -1$ pa $-2 - 5 + 3 = -4 < 0$, zato $-1$ res ni rešitev.
7. Odgovor: rešitev je interval $\left[-\dfrac{1}{2}, 3\right]$, v njem so štiri cela števila: $0$, $1$, $2$ in $3$.

### Primer 3 (težji)

Žogo vržemo navpično navzgor. Njena višina nad tlemi po $t$ sekundah je $h(t) = 20t - 5t^2$ (v metrih). V katerem časovnem intervalu je žoga više kot $15\,\text{m}$? Ali žoga kdaj doseže višino več kot $25\,\text{m}$?

**Podatki:** $h(t) = 20t - 5t^2$ ($h$ v metrih, $t$ v sekundah), prva meja $15\,\text{m}$, druga meja $25\,\text{m}$
**Iščemo:** časovni interval, v katerem je $h(t) > 15$, in odgovor, ali ima $h(t) > 25$ kakšno rešitev

:::formula
Neenačbo preoblikuj v $at^2 + bt + c > 0$; pri deljenju z negativnim številom obrni neenačaj. $D = b^2 - 4ac$
:::

**Rešitev:**

1. Prva neenačba: $20t - 5t^2 > 15$. Vse prenesemo na levo: $-5t^2 + 20t - 15 > 0$.
2. Delimo z $-5$ in obrnemo neenačaj: $t^2 - 4t + 3 < 0$.
3. Diskriminanta: $D = 16 - 12 = 4$, ničli $t_{1,2} = \dfrac{4 \pm 2}{2}$, torej $t_1 = 1$ in $t_2 = 3$.
4. Parabola $t^2 - 4t + 3$ je odprta navzgor, pod osjo je med ničlama: $t \in (1, 3)$.
5. Preizkus za $t = 2$: $h(2) = 40 - 20 = 20\,\text{m} > 15\,\text{m}$. Velja.
6. Druga neenačba: $20t - 5t^2 > 25$, torej $-5t^2 + 20t - 25 > 0$. Delimo z $-5$: $t^2 - 4t + 5 < 0$.
7. Diskriminanta: $D = 16 - 20 = -4 < 0$. Parabola $t^2 - 4t + 5$ je odprta navzgor in nima ničel, zato je ves graf nad osjo. Neenačba $t^2 - 4t + 5 < 0$ nima rešitve.
8. Odgovor: žoga je više kot $15\,\text{m}$ med prvo in tretjo sekundo, torej za $t \in (1, 3)$. Više kot $25\,\text{m}$ ne pride nikoli (njena največja višina je $20\,\text{m}$, pri $t = 2\,\text{s}$).

## Pogoste napake

- **Deljenje z negativnim številom brez obrata neenačaja.** Iz $-x^2 + 9 > 0$ ne dobiš $x^2 - 9 > 0$. Pri množenju ali deljenju z negativnim številom se neenačaj obrne: $x^2 - 9 < 0$, rešitev je $(-3, 3)$. Če nisi prepričan, nariši parabolo kar za prvotno funkcijo, odprto navzdol.
- **»Korenjenje« neenačbe.** Iz $x^2 > 9$ ni res, da je $x > 3$. Pozabil si na negativna števila: tudi $(-4)^2 = 16 > 9$. Pravilno: $x^2 - 9 > 0$, ničli $-3$ in $3$, rešitev $(-\infty, -3) \cup (3, \infty)$.
- **Deljenje z $x$.** Iz $x^2 > 2x$ ne smeš dobiti $x > 2$, saj ne veš, ali je $x$ pozitiven, in izgubiš rešitve. Pravilno: $x^2 - 2x > 0$, ničli $0$ in $2$, rešitev $(-\infty, 0) \cup (2, \infty)$. Na primer $x = -1$: $1 > -2$ velja.
- **Napačno izbrano področje.** Učenci pogosto vedno zapišejo interval med ničlama. Ali je rešitev med ničlama ali zunaj njiju, je odvisno od predznaka $a$ in od neenačaja. Nariši skico in preveri z enim številom.
- **»$D < 0$ pomeni, da ni rešitve.«** Pri kvadratni enačbi to drži (v realnih številih), pri neenačbi pa ne. Neenačba $x^2 + x + 1 > 0$ ima $D = -3$, a velja za **vse** realne $x$, ker je parabola ves čas nad osjo.

## Povzetek

- Kvadratna neenačba: $ax^2 + bx + c > 0$ (ali $\ge$, $<$, $\le$), $a \ne 0$; rešitev je množica števil, zapisana z intervali.
- Najprej vse prenesi na levo, da je na desni $0$.
- Ničle poišči z $D = b^2 - 4ac$ in $x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a}$; nariši skico parabole.
- $f(x) > 0$: graf nad osjo $x$; $f(x) < 0$: graf pod osjo $x$.
- Za $a > 0$, $D > 0$: $f(x) < 0$ za $x \in (x_1, x_2)$, $f(x) > 0$ za $x \in (-\infty, x_1) \cup (x_2, \infty)$.
- Oster neenačaj: ničle izključimo $( \;)$; neostri: vključimo $[\;]$.
- Pri $D < 0$ ima $ax^2 + bx + c$ za vse $x$ predznak koeficienta $a$.
- Pri množenju ali deljenju z negativnim številom obrni neenačaj.

## Drugače: Na sliki

Predstavljaj si, da je os $x$ gladina vode, parabola pa gorska veriga ali dolina. Vprašanje $f(x) > 0$ pomeni: kje je pokrajina **nad gladino**? Vprašanje $f(x) < 0$ pa: kje je **pod vodo**?

Parabola, odprta navzgor, je kot dolina. Če seže pod gladino, nastane jezero, ki se razteza od ene ničle do druge. Pod vodo je torej le odsek med ničlama, vse levo in desno je suho. Če dolino dvigneš tako, da se dno ravno dotakne gladine ($D = 0$), je pod vodo le ena sama točka, pa še ta je na gladini. Če jo dvigneš še više ($D < 0$), je vsa pokrajina nad vodo.

Parabola, odprta navzdol, je kot hrib. Nad gladino štrli le vrh, med ničlama, pobočja levo in desno pa izginejo pod vodo. V interaktivni simulaciji spodaj premikaj parabolo in opazuj, kako se del osi $x$, kjer je parabola nad osjo ali pod njo (rešitev), širi, krči in izginja.

## Drugače: Iz vsakdanjega življenja

Majhno podjetje izdeluje lesene igrače. Pri $x$ izdelanih igračah na teden je njegov dobiček (v evrih) približno $P(x) = -x^2 + 60x - 500$. Če izdela premalo igrač, prihodki ne pokrijejo stalnih stroškov (najemnina, stroji). Če jih izdela preveč, mora najeti dodatne delavce in plačevati nadure, zato dobiček spet pade. Pri koliko igračah posluje z dobičkom?

Rešujemo $-x^2 + 60x - 500 > 0$. Pomnožimo z $-1$ in obrnemo neenačaj: $x^2 - 60x + 500 < 0$. Diskriminanta je $D = 3600 - 2000 = 1600$, ničli sta $x_{1,2} = \dfrac{60 \pm 40}{2}$, torej $10$ in $50$. Parabola $x^2 - 60x + 500$ je pod osjo med ničlama.

Podjetje torej posluje z dobičkom, če na teden izdela več kot $10$ in manj kot $50$ igrač. Pri natanko $10$ ali $50$ igračah posluje brez dobička in brez izgube. Podobno razmišljajo inženirji, ko iščejo, pri katerih hitrostih je zavorna pot krajša od dane razdalje.

## Drugače: Korak za korakom s številkami

Reši $x^2 + 2x > 8$ in rešitev preveri s preizkusom.

1. **Na desni naj bo nič:** $x^2 + 2x - 8 > 0$.
2. **Koeficienti:** $a = 1$, $b = 2$, $c = -8$.
3. **Diskriminanta:** $D = 2^2 - 4 \cdot 1 \cdot (-8) = 4 + 32 = 36$.
4. **Ničli:** $x_{1,2} = \dfrac{-2 \pm 6}{2}$, torej $x_1 = -4$ in $x_2 = 2$.
5. **Skica:** $a > 0$, parabola odprta navzgor, nad osjo je levo od $-4$ in desno od $2$.
6. **Oklepaji:** neenačaj je oster, ničli izključimo.
7. **Rešitev:** $(-\infty, -4) \cup (2, \infty)$.

**Preizkus s po enim številom iz vsakega dela:**

| $x$ | $x^2 + 2x$ | Ali je $> 8$? |
|---|---|---|
| $-5$ | $25 - 10 = 15$ | da |
| $0$ | $0$ | ne |
| $3$ | $9 + 6 = 15$ | da |

Ničle razdelijo os $x$ na dele, v katerih ima izraz povsod enak predznak, zato je dovolj preveriti po eno število iz vsakega dela.

## Drugače: Bolj natančno

Zakaj je predznak kvadratnega izraza na celem intervalu med ničlama enak? Če ima $f(x) = ax^2 + bx + c$ realni ničli $x_1 < x_2$, ga lahko razcepimo:

$$ax^2 + bx + c = a(x - x_1)(x - x_2).$$

Predznak produkta je odvisen od predznakov treh faktorjev. Faktor $x - x_1$ je negativen za $x < x_1$ in pozitiven za $x > x_1$, podobno $x - x_2$. Za $x < x_1$ sta oba faktorja negativna, njun produkt je pozitiven; za $x_1 < x < x_2$ je produkt negativen; za $x > x_2$ je spet pozitiven. Pomnožimo z $a$: pri $a > 0$ dobimo predznake $+, -, +$, pri $a < 0$ pa $-, +, -$. To je natanko slika parabole. Tak razmislek imenujemo tudi tabela predznakov.

Če je $D < 0$, uporabimo temensko obliko:

$$ax^2 + bx + c = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{D}{4a^2}\right].$$

Izraz v oglatem oklepaju je vsota nenegativnega kvadrata in pozitivnega števila $-\dfrac{D}{4a^2}$, zato je vedno pozitiven. Predznak celotnega izraza je zato vedno enak predznaku $a$.

## Preveri se

? Rešitev neenačbe $x^2 - 9 < 0$ je:
- $(-\infty, 3)$
+ $(-3, 3)$
- $(-\infty, -3) \cup (3, \infty)$
- $(3, \infty)$
> Ničli sta $-3$ in $3$. Parabola je odprta navzgor, pod osjo je med ničlama, torej $(-3, 3)$.

? Za katere $x$ velja $x^2 + x + 1 > 0$?
- za nobenega
+ za vse realne $x$
- za $x \in (-1, 1)$
> $D = 1 - 4 = -3 < 0$ in $a = 1 > 0$, zato je parabola ves čas nad osjo $x$.

? Rešitev neenačbe $-x^2 + 6x - 8 \ge 0$ je:
- $(-\infty, 2] \cup [4, \infty)$
+ $[2, 4]$
- $(2, 4)$
> Ničli sta $2$ in $4$. Parabola je odprta navzdol, nad osjo je med ničlama; neenačaj je neoster, zato ničli vključimo.

? Rešitev neenačbe $(x - 1)^2 \le 0$ je:
- $\emptyset$
+ $\{1\}$
- $\mathbb{R}$
- $(-\infty, 1]$
> Kvadrat ni nikoli negativen, enak $0$ pa je le pri $x = 1$. Parabola se osi $x$ dotakne v eni točki.

:::simboli
a | vodilni koeficient (pri x²) | | | a ≠ 0
b | linearni koeficient (pri x) | | |
c | prosti člen | | |
x | neznanka | | |
f | kvadratna funkcija | f(x) = ax^2 + bx + c | |
D | diskriminanta | D = b^2 - 4ac | |
x_{1,2} | ničli kvadratne funkcije | x_{1,2} = \frac{-b \pm \sqrt{D}}{2a} | |
x_1, x_2 | manjša in večja ničla | | | x₁ < x₂
t | čas od meta | | s | višina h(t) = 20t − 5t² v metrih
:::
