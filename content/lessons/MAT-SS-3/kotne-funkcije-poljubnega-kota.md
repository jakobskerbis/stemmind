---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Predstavljaj si panoramsko kolo. Sedež začne na višini osi kolesa, na desni strani, in se dviga. Dokler se kolo zavrti za manj kot $90^\circ$, višino sedeža izračunaš s sinusom iz pravokotnega trikotnika, ki ga že poznaš. Kaj pa, ko se kolo zavrti za $150^\circ$, $210^\circ$ ali za dva cela obrata? Takega kota ni v nobenem pravokotnem trikotniku.

Zato kotne funkcije razširimo na **poljuben kot**: na tope kote, kote nad $360^\circ$ in tudi na negativne kote. Pri tem si pomagamo z **enotsko krožnico**. Hkrati spoznaš novo enoto za kote, **radian**, ki jo uporabljajo fizika, tehnika in vsa nadaljnja matematika.

## Razlaga

**1. Kot pomeni zasuk.** Kot si predstavljaj kot vrtenje kraka. **Nepremični krak** leži na pozitivnem poltraku osi $x$. **Gibljivi krak** se zavrti okoli izhodišča. Če se vrti v nasprotni smeri urinega kazalca, je kot **pozitiven**, v smeri urinega kazalca pa **negativen**. Tako ima smisel tudi kot $400^\circ$ (en obrat in še $40^\circ$) ali kot $-90^\circ$.

**2. Enotska krožnica.** **Enotska krožnica** je krožnica s središčem v izhodišču in polmerom $1$. Gibljivi krak kota $\alpha$ jo seka v točki $T(x, y)$. Definiramo:

$$\cos\alpha = x, \qquad \sin\alpha = y$$

$$\tan\alpha = \frac{y}{x} = \frac{\sin\alpha}{\cos\alpha}, \quad x \neq 0$$

Kosinus je torej vodoravna koordinata točke $T$, sinus pa navpična. Za ostre kote se to ujema s staro definicijo: iz točke $T$ spustimo pravokotnico na os $x$ in dobimo pravokotni trikotnik s hipotenuzo $1$. Priležna kateta je $x$, nasprotna kateta je $y$.

**3. Posebni koti.** Na oseh točko $T$ preberemo kar iz slike:

| kot $\alpha$ | točka $T$ | $\cos\alpha$ | $\sin\alpha$ |
|---|---|---|---|
| $0^\circ$ | $(1, 0)$ | $1$ | $0$ |
| $90^\circ$ | $(0, 1)$ | $0$ | $1$ |
| $180^\circ$ | $(-1, 0)$ | $-1$ | $0$ |
| $270^\circ$ | $(0, -1)$ | $0$ | $-1$ |

Pri $90^\circ$ in $270^\circ$ je $x = 0$, zato $\tan\alpha$ tam **ni definiran**.

:::premisli
Kot $\alpha = 120^\circ$ leži v II. kvadrantu. Brez računanja napovej predznaka $\cos 120^\circ$ in $\sin 120^\circ$.
---
Točka $T$ leži levo od osi $y$ in nad osjo $x$. Zato je $\cos 120^\circ < 0$ in $\sin 120^\circ > 0$.
:::

**4. Predznaki po kvadrantih.** **Kvadrant** je četrtina ravnine med osema. Predznak funkcije je predznak ustrezne koordinate:

| kvadrant | $\sin$ | $\cos$ | $\tan$ |
|---|---|---|---|
| I. ($0^\circ$ do $90^\circ$) | $+$ | $+$ | $+$ |
| II. ($90^\circ$ do $180^\circ$) | $+$ | $-$ | $-$ |
| III. ($180^\circ$ do $270^\circ$) | $-$ | $-$ | $+$ |
| IV. ($270^\circ$ do $360^\circ$) | $-$ | $+$ | $-$ |

**5. Pripadajoči ostri kot.** Kot $150^\circ$ je za $30^\circ$ oddaljen od negativnega poltraka osi $x$. Točka za $150^\circ$ je zrcalna slika točke za $30^\circ$ čez os $y$. Zato je $\sin 150^\circ = \sin 30^\circ = \frac12$ in $\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt3}{2}$. Velja splošno: **absolutno vrednost** dobiš iz pripadajočega ostrega kota, **predznak** pa iz kvadranta.

V simulaciji spodaj (»Enotska krožnica«) nastavi kot najprej na $30^\circ$, nato na $150^\circ$. Opazi, da ostane navpična koordinata točke enaka, vodoravna pa spremeni predznak. Potem poskusi še $210^\circ$ in $330^\circ$.

**6. Osnovna zveza.** Točka $T(x, y)$ leži na krožnici s polmerom $1$, zato po Pitagorovem izreku velja $x^2 + y^2 = 1$:

$$\sin^2\alpha + \cos^2\alpha = 1$$

Od tod sledi tudi, da sta sinus in kosinus vedno med $-1$ in $1$.

**7. Koti nad $360^\circ$ in negativni koti.** Kota $\alpha$ in $\alpha + 360^\circ$ imata isti gibljivi krak, zato imata enake vrednosti kotnih funkcij. Tako je $\sin 390^\circ = \sin 30^\circ$ in $\cos(-60^\circ) = \cos 300^\circ$.

**8. Radian.** Kot lahko merimo tudi z **dolžino loka** na enotski krožnici. **Radian** (rad) je kot, pri katerem je lok enak polmeru. Obseg enotske krožnice je $2\pi$, zato je polni kot $2\pi$ radianov:

$$360^\circ = 2\pi\,\text{rad}, \qquad 180^\circ = \pi\,\text{rad}$$

En radian je $\frac{180^\circ}{\pi} \approx 57{,}3^\circ$. Pogoste kote si zapomni:

| stopinje | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ |
|---|---|---|---|---|
| radiani | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ |

Ko je kot podan v radianih, enoto rad navadno izpustimo: $\sin\frac{\pi}{2} = 1$.

:::premisli
V katerem kvadrantu leži kot $3$ (radiani)? Najprej oceni, nato pomisli, koliko je $\pi$.
---
V II. kvadrantu. Velja $\frac{\pi}{2} \approx 1{,}57 < 3 < \pi \approx 3{,}14$, torej je kot nekaj manjši od iztegnjenega ($3\,\text{rad} \approx 171{,}9^\circ$).
:::

## Rešeni primeri

### Primer 1 (lažji)

Pretvori kot $150^\circ$ v radiane in kot $\frac{5\pi}{4}$ v stopinje.

**Podatki:** $\alpha = 150^\circ$, $\beta = \frac{5\pi}{4}\,\text{rad}$
**Iščemo:** $\alpha$ v radianih, $\beta$ v stopinjah

:::formula
$\pi\,\text{rad} = 180^\circ$, torej $\alpha_{\text{rad}} = \alpha^\circ \cdot \dfrac{\pi}{180^\circ}$ in $\beta^\circ = \beta_{\text{rad}} \cdot \dfrac{180^\circ}{\pi}$
:::

**Rešitev:**

1. Stopinje v radiane: $150^\circ \cdot \frac{\pi}{180^\circ} = \frac{5\pi}{6}$, ker se $\frac{150}{180}$ okrajša v $\frac56$.
2. Radiane v stopinje: $\frac{5\pi}{4} \cdot \frac{180^\circ}{\pi} = 5 \cdot 45^\circ = 225^\circ$, ker se $\pi$ pokrajša.
3. Odgovor: $150^\circ = \frac{5\pi}{6}$ in $\frac{5\pi}{4} = 225^\circ$.

### Primer 2 (srednji)

Izračunaj natančne vrednosti $\sin\alpha$, $\cos\alpha$ in $\tan\alpha$ za $\alpha = \frac{4\pi}{3}$.

**Podatki:** $\alpha = \frac{4\pi}{3}$
**Iščemo:** $\sin\alpha$, $\cos\alpha$, $\tan\alpha$

:::formula
Absolutna vrednost iz pripadajočega ostrega kota, predznak iz kvadranta; $\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha}$
:::

**Rešitev:**

1. Pretvorimo v stopinje, da kot laže narišemo: $\frac{4\pi}{3} = 240^\circ$.
2. Kot je med $180^\circ$ in $270^\circ$, torej v III. kvadrantu, kjer sta sinus in kosinus negativna.
3. Pripadajoči ostri kot je $240^\circ - 180^\circ = 60^\circ$, ker merimo odmik od negativnega poltraka osi $x$.
4. $\sin 240^\circ = -\sin 60^\circ = -\frac{\sqrt3}{2}$ in $\cos 240^\circ = -\cos 60^\circ = -\frac12$.
5. $\tan 240^\circ = \dfrac{-\sqrt3/2}{-1/2} = \sqrt3$, kar je pozitivno, kot mora biti v III. kvadrantu.
6. Odgovor: $\sin\frac{4\pi}{3} = -\frac{\sqrt3}{2}$, $\cos\frac{4\pi}{3} = -\frac12$ in $\tan\frac{4\pi}{3} = \sqrt3$.

### Primer 3 (težji)

Panoramsko kolo ima polmer $20\,\text{m}$, njegova os je $22\,\text{m}$ nad tlemi. Sedež je na začetku desno, na višini osi. Kolo se zavrti v pozitivni smeri za kot $\frac{7\pi}{6}$. Na kateri višini je sedež in kako daleč je vodoravno od osi?

**Podatki:** $r = 20\,\text{m}$, višina osi $h_0 = 22\,\text{m}$, kot $\varphi = \frac{7\pi}{6}$, začetna lega: desno na višini osi
**Iščemo:** višino sedeža $h$ in vodoravno razdaljo $d$ od osi

:::formula
Točka na krožnici s polmerom $r$: $x = r\cos\varphi$, $y = r\sin\varphi$
:::

**Rešitev:**

1. Postavimo izhodišče v os kolesa. Krožnica s polmerom $20$ je enotska krožnica, povečana $20$-krat, zato se obe koordinati pomnožita z $r$.
2. Kot pretvorimo: $\frac{7\pi}{6} = 210^\circ$, kar je III. kvadrant s pripadajočim ostrim kotom $30^\circ$.
3. $\sin 210^\circ = -\frac12$ in $\cos 210^\circ = -\frac{\sqrt3}{2}$, ker sta v III. kvadrantu obe negativni.
4. $y = 20\,\text{m} \cdot \left(-\frac12\right) = -10\,\text{m}$: sedež je $10\,\text{m}$ pod osjo.
5. $h = 22\,\text{m} - 10\,\text{m} = 12\,\text{m}$, ker višino merimo od tal.
6. $x = 20\,\text{m} \cdot \left(-\frac{\sqrt3}{2}\right) = -10\sqrt3\,\text{m} \approx -17{,}3\,\text{m}$, kar pomeni levo od osi.
7. Odgovor: sedež je na višini $12\,\text{m}$ in približno $17{,}3\,\text{m}$ levo od osi kolesa.

### Primer 4: zdaj ti

Kot $\alpha$ leži v II. kvadrantu in velja $\sin\alpha = \frac35$. Izračunaj $\cos\alpha$ in $\tan\alpha$.

**Podatki:** $\sin\alpha = \frac35$, $\alpha$ v II. kvadrantu
**Iščemo:** $\cos\alpha$, $\tan\alpha$

:::formula
$\sin^2\alpha + \cos^2\alpha = 1$, $\quad \tan\alpha = \dfrac{\sin\alpha}{\cos\alpha}$
:::

**Rešitev:**

1. Iz osnovne zveze: $\cos^2\alpha = 1 - \frac{9}{25} = \frac{16}{25}$.
2. Zato je $\cos\alpha = \frac45$ ali $\cos\alpha = -\frac45$; korenjenje da dve možnosti.
3. Izberi pravi predznak in izračunaj še tangens:

:::premisli
Kolikšna sta $\cos\alpha$ in $\tan\alpha$?
---
V II. kvadrantu je kosinus negativen, zato $\cos\alpha = -\frac45$. Potem je $\tan\alpha = \dfrac{3/5}{-4/5} = -\frac34$.
:::

## Pogoste napake

- **Pozabljen predznak.** »$\cos 120^\circ = \cos 60^\circ = \frac12$.« Pripadajoči ostri kot da le absolutno vrednost. Točka za $120^\circ$ leži levo od osi $y$, zato je $\cos 120^\circ = -\frac12$. Najprej vedno določi kvadrant.
- **Radian je majhen kot stopinja.** »Kot $2$ je skoraj nič, torej je v I. kvadrantu.« En radian je približno $57{,}3^\circ$, ne $1^\circ$. Kot $2$ je približno $114{,}6^\circ$, torej v II. kvadrantu. Primerjaj z $\frac{\pi}{2} \approx 1{,}57$ in $\pi \approx 3{,}14$.
- **Kalkulator v napačnem načinu.** »$\sin 30 = -0{,}988$, torej je sinus $30^\circ$ negativen.« Kalkulator je bil nastavljen na radiane (RAD) in je izračunal sinus $30$ radianov. Za stopinje preklopi na DEG; sicer kot pretvori.
- **Tangens pravega kota.** »$\tan 90^\circ = 0$« ali »$\tan 90^\circ = 1$«. Pri $90^\circ$ je $x = \cos 90^\circ = 0$, z ničlo pa ne delimo. Zato $\tan 90^\circ$ ni definiran.
- **Zamenjana koordinata.** »Sinus je vodoravna koordinata.« Kosinus je $x$ (vodoravno), sinus je $y$ (navpično). Pomaga abeceda: $x$ je pred $y$ in $\cos$ pred $\sin$, kot v paru $(\cos\alpha, \sin\alpha)$.

## Povzetek

- Enotska krožnica: središče v izhodišču, polmer $1$; kot merimo od pozitivnega poltraka osi $x$, pozitivno v nasprotni smeri urinega kazalca.
- Gibljivi krak seka krožnico v $T(\cos\alpha, \sin\alpha)$; $\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha}$ za $\cos\alpha \neq 0$.
- Predznak dobiš iz kvadranta, absolutno vrednost iz pripadajočega ostrega kota.
- $\sin^2\alpha + \cos^2\alpha = 1$; zato $-1 \le \sin\alpha \le 1$ in $-1 \le \cos\alpha \le 1$.
- Kota $\alpha$ in $\alpha + 360^\circ$ imata enake vrednosti kotnih funkcij.
- $\pi\,\text{rad} = 180^\circ$, $1\,\text{rad} \approx 57{,}3^\circ$; pretvorba z $\dfrac{\pi}{180^\circ}$ oziroma $\dfrac{180^\circ}{\pi}$.

## Drugače: Na sliki

Nariši koordinatni sistem in krožnico s polmerom $1$. Iz točke $T$ na krožnici spusti dve senci: eno navpično na os $x$ in eno vodoravno na os $y$.

- Senca na osi $x$ je **kosinus**. Ko je $T$ desno od osi $y$, je senca na pozitivnem delu, levo pa na negativnem.
- Senca na osi $y$ je **sinus**. Ko je $T$ nad osjo $x$, je pozitivna, pod njo negativna.

Zdaj počasi obkroži krožnico. Na vrhu ($90^\circ$) je senca na osi $x$ dolga nič, senca na osi $y$ pa največja, $1$. Na levi ($180^\circ$) je ravno obratno, le da je senca na osi $x$ zdaj $-1$. Senci nikoli ne zrasteta čez $1$, ker točka ne more iz krožnice. Dve točki, ki sta zrcalni čez os $y$ (npr. $30^\circ$ in $150^\circ$), imata isto senco na osi $y$ in nasprotni senci na osi $x$.

## Drugače: Iz vsakdanjega življenja

Pomisli na ventil na kolesu, ko kolo stoji na stojalu in ga vrtiš. Gledaš ga od strani, os kolesa je izhodišče.

- Višina ventila nad osjo je $r \cdot \sin\alpha$. Ko je ventil spodaj, je ta višina negativna: ventil je pod osjo.
- Odmik ventila naprej ali nazaj od osi je $r \cdot \cos\alpha$. Negativen pomeni nazaj.

Ko kolo naredi cel obrat, je ventil tam, kjer je bil. Zato kot $400^\circ$ da isto lego kot $40^\circ$.

Radiane si predstavljaj z vrvico: odreži vrvico, dolgo kot polmer kolesa, in jo napni po obodu. Kot, ki ga ta lok oklepa v središču, je $1$ radian. Po obodu zložiš malo več kot šest takih vrvic ($2\pi \approx 6{,}28$), da prideš okoli.

## Drugače: Korak za korakom s številkami

Za vsak kot ponovi iste štiri korake: kvadrant, pripadajoči ostri kot, predznaka, vrednosti.

| kot | kvadrant | ostri kot | $(\cos, \sin)$ |
|---|---|---|---|
| $30^\circ$ | I. | $30^\circ$ | $(\frac{\sqrt3}{2}, \frac12)$ |
| $150^\circ$ | II. | $30^\circ$ | $(-\frac{\sqrt3}{2}, \frac12)$ |
| $210^\circ$ | III. | $30^\circ$ | $(-\frac{\sqrt3}{2}, -\frac12)$ |
| $330^\circ$ | IV. | $30^\circ$ | $(\frac{\sqrt3}{2}, -\frac12)$ |

Pripadajoči ostri kot dobiš tako: v II. kvadrantu $180^\circ - \alpha$, v III. $\alpha - 180^\circ$, v IV. $360^\circ - \alpha$.

Vidiš vzorec: vse štiri točke so oglišča pravokotnika, ki je vrisan v krožnico. Številke so iste, spreminjajo se le predznaki. Preveri še osnovno zvezo za $150^\circ$: $\left(-\frac{\sqrt3}{2}\right)^2 + \left(\frac12\right)^2 = \frac34 + \frac14 = 1$.

## Drugače: Bolj natančno

Kotne funkcije so funkcije realne spremenljivke. Vsakemu realnemu številu $\alpha$ (kotu v radianih) priredimo točko $T$ na enotski krožnici, do katere pridemo, če iz točke $(1, 0)$ prehodimo lok dolžine $|\alpha|$, pri pozitivnem $\alpha$ v nasprotni smeri urinega kazalca. Potem je $\cos\alpha$ abscisa in $\sin\alpha$ ordinata točke $T$.

Ker je obseg enotske krožnice $2\pi$, za vsako celo število $k$ velja
$$\sin(\alpha + 2k\pi) = \sin\alpha, \quad \cos(\alpha + 2k\pi) = \cos\alpha.$$

Iz simetrije krožnice čez os $x$ sledi $\sin(-\alpha) = -\sin\alpha$ in $\cos(-\alpha) = \cos\alpha$. Iz simetrije čez os $y$ sledi $\sin(\pi - \alpha) = \sin\alpha$ in $\cos(\pi - \alpha) = -\cos\alpha$.

Radian je naravna enota: na krožnici s polmerom $r$ je dolžina loka pri središčnem kotu $\alpha$ (v radianih) preprosto $l = r\alpha$, brez faktorja $\frac{\pi}{180}$.

## Preveri se

? Koliko radianov je $180^\circ$?
- $180\,\text{rad}$
~ Število stopinj ni število radianov. En radian je približno $57{,}3^\circ$, zato je radianov veliko manj.
+ $\pi$
- $2\pi$
~ $2\pi$ je polni kot, $360^\circ$. Iztegnjeni kot je polovica tega.
- $\frac{\pi}{2}$
~ $\frac{\pi}{2}$ je pravi kot, $90^\circ$.
> Obseg enotske krožnice je $2\pi$, polovica obsega je $\pi$, zato $180^\circ = \pi\,\text{rad}$.

? Za kot $\alpha$ velja $\sin\alpha > 0$ in $\cos\alpha < 0$. V katerem kvadrantu je?
- V I. kvadrantu.
~ V I. kvadrantu sta obe koordinati pozitivni, tudi kosinus.
+ V II. kvadrantu.
- V IV. kvadrantu.
~ Tu si zamenjal koordinati: v IV. kvadrantu je $x > 0$ in $y < 0$, torej kosinus pozitiven in sinus negativen. Kosinus je $x$, sinus je $y$.
> Sinus je $y$, kosinus je $x$. Točka z $y > 0$ in $x < 0$ leži v II. kvadrantu.

? Koliko je $\tan 90^\circ$?
- $0$
~ Pri $90^\circ$ je nič kosinus, ki je v imenovalcu, ne sinus v števcu.
- $1$
~ Vrednost $1$ ima tangens pri $45^\circ$, kjer sta sinus in kosinus enaka.
+ Ni definiran.
> $\tan 90^\circ = \dfrac{\sin 90^\circ}{\cos 90^\circ} = \dfrac{1}{0}$, z ničlo pa ne delimo.

? Koliko je $\cos 120^\circ$?
- $\frac12$
~ To je $\cos 60^\circ$ brez predznaka. Kot $120^\circ$ je v II. kvadrantu, kjer je kosinus negativen.
+ $-\frac12$
- $-\frac{\sqrt3}{2}$
~ Predznak je pravilen, vrednost pa je $\sin 60^\circ$, ne $\cos 60^\circ$. Zamenjal si sinus in kosinus.
> Pripadajoči ostri kot je $60^\circ$, $\cos 60^\circ = \frac12$, v II. kvadrantu je kosinus negativen: $\cos 120^\circ = -\frac12$.

? Kje leži gibljivi krak kota $2$ (v radianih)?
- V I. kvadrantu.
~ To bi veljalo za $2^\circ$. En radian ni ena stopinja, ampak približno $57{,}3^\circ$.
+ V II. kvadrantu.
- Na negativnem poltraku osi $x$.
~ To bi veljalo, če bi bil $1\,\text{rad}$ pravi kot. Pravi kot je $\frac{\pi}{2} \approx 1{,}57\,\text{rad}$.
> $2\,\text{rad} = 2 \cdot \frac{180^\circ}{\pi} \approx 114{,}6^\circ$, kar je med $90^\circ$ in $180^\circ$.
