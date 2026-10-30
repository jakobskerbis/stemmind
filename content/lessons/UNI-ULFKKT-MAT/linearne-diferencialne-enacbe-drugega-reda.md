---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Drugi Newtonov zakon $ma = F$ povezuje silo z **drugim odvodom** lege, $a = \ddot x$. Če je sila odvisna od lege (vzmet) in hitrosti (trenje, upor), dobimo enačbo z drugim odvodom: **diferencialno enačbo drugega reda**. Takšne enačbe opisujejo nihanje uteži na vzmeti, nihanje atomov v molekuli (osnova infrardeče spektroskopije), tok in napetost v električnem krogu z uporom, tuljavo in kondenzatorjem, upogib nosilca, nihanje stavbe med potresom ali vzmetenje avtomobila.

Najpomembnejše med njimi so **linearne enačbe s konstantnimi koeficienti**:

$$y'' + a\,y' + b\,y = f(x).$$

Za njih imamo popoln recept. Homogeno enačbo ($f = 0$) prevedemo na kvadratno **karakteristično enačbo**, za nehomogeno pa partikularno rešitev uganemo z ustreznim **nastavkom**. Naučili se bomo:

- rešiti homogeno enačbo v vseh treh primerih (dve realni ničli, dvojna ničla, kompleksni ničli),
- poiskati partikularno rešitev z nastavkom, tudi v primeru **resonance**,
- iz začetnih pogojev določiti obe konstanti.

Potrebuješ odvod, eksponentno funkcijo, kompleksna števila in diferencialne enačbe prvega reda.

## Razlaga

**1. Linearna enačba drugega reda.** Splošna linearna enačba drugega reda je

$$y'' + p(x)\, y' + q(x)\, y = f(x).$$

Je **homogena**, če je $f \equiv 0$, sicer **nehomogena**. Neznana funkcija in njena odvoda nastopajo le linearno; členi, kot so $y^2$, $y\,y'$ ali $\sin y$, niso dovoljeni.

Za enolično rešitev potrebujemo **dva** začetna pogoja, lego in hitrost:

$$y(x_0) = y_0, \qquad y'(x_0) = y_1.$$

Če sta $p$, $q$ in $f$ zvezne na intervalu $I$, ima tak začetni problem natanko eno rešitev na celem $I$.

**2. Zgradba rešitev homogene enačbe.** Velja **načelo superpozicije**: če sta $y_1$ in $y_2$ rešitvi homogene enačbe, je rešitev tudi vsaka linearna kombinacija $C_1y_1 + C_2y_2$. Če sta $y_1$ in $y_2$ **linearno neodvisni** (nobena ni konstantni večkratnik druge), je to že **splošna rešitev**:

$$y_h = C_1 y_1 + C_2 y_2.$$

Par $y_1$, $y_2$ imenujemo **fundamentalni sistem**. Neodvisnost preverimo z **Wronskijevo determinanto**

$$W(x) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_1' y_2 \neq 0.$$

**3. Homogena enačba s konstantnimi koeficienti.** Za $y'' + ay' + by = 0$ z realnima $a$ in $b$ poskusimo z $y = e^{\lambda x}$. Ker je $y' = \lambda e^{\lambda x}$ in $y'' = \lambda^2 e^{\lambda x}$, dobimo $(\lambda^2 + a\lambda + b)\, e^{\lambda x} = 0$. Eksponentna funkcija ni nikoli nič, zato mora veljati **karakteristična enačba**

$$\lambda^2 + a\lambda + b = 0.$$

Glede na diskriminanto $D = a^2 - 4b$ ločimo tri primere:

| ničli karakteristične enačbe | fundamentalni sistem | splošna rešitev |
|---|---|---|
| $D > 0$: realni $\lambda_1 \neq \lambda_2$ | $e^{\lambda_1 x}$, $e^{\lambda_2 x}$ | $C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$ |
| $D = 0$: dvojna $\lambda$ | $e^{\lambda x}$, $x e^{\lambda x}$ | $(C_1 + C_2 x)\, e^{\lambda x}$ |
| $D < 0$: $\lambda = \alpha \pm i\beta$ | $e^{\alpha x}\cos\beta x$, $e^{\alpha x}\sin\beta x$ | $e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$ |

Pri kompleksnih ničlah izhajamo iz Eulerjeve formule $e^{(\alpha + i\beta)x} = e^{\alpha x}(\cos\beta x + i\sin\beta x)$. Realni in imaginarni del kompleksne rešitve sta realni rešitvi. Pri dvojni ničli nam ena eksponentna funkcija ne zadošča; drugo rešitev dobimo z množenjem z $x$.

Poseben primer je $y'' + \omega^2 y = 0$ z ničlama $\pm i\omega$ in rešitvijo $y = C_1\cos\omega x + C_2\sin\omega x$: to je **harmonično nihanje** s krožno frekvenco $\omega$.

**4. Nehomogena enačba.** Kot pri enačbah prvega reda velja:

$$y = y_h + y_p,$$

kjer je $y_h$ splošna rešitev homogene enačbe, $y_p$ pa ena (katerakoli) **partikularna rešitev** nehomogene. Začetne pogoje vstavimo šele v celotno rešitev $y_h + y_p$.

**5. Metoda nastavka (nedoločenih koeficientov).** Kadar je desna stran polinom, eksponentna funkcija, sinus, kosinus ali njihov produkt, ima $y_p$ enako obliko z neznanimi koeficienti. Koeficiente določimo tako, da nastavek vstavimo v enačbo in primerjamo koeficiente.

| desna stran $f(x)$ | nastavek za $y_p$ |
|---|---|
| polinom $P_n(x)$ stopnje $n$ | $x^k\, Q_n(x)$ |
| $e^{\mu x} P_n(x)$ | $x^k\, e^{\mu x} Q_n(x)$ |
| $e^{\alpha x}\big(P(x)\cos\beta x + R(x)\sin\beta x\big)$ | $x^k\, e^{\alpha x}\big(Q(x)\cos\beta x + S(x)\sin\beta x\big)$ |

Tu so $Q_n$, $Q$, $S$ polinomi z neznanimi koeficienti (v zadnji vrstici stopnje $\max(\deg P, \deg R)$), število $k$ pa je **večkratnost** števila $\mu$ (oziroma $0$ pri polinomu, $\alpha + i\beta$ pri zadnji vrstici) kot ničle karakteristične enačbe: $k = 0$, če ni ničla, $k = 1$ pri enojni in $k = 2$ pri dvojni ničli.

Faktor $x^k$ je pomemben. Če bi bil nastavek že rešitev homogene enačbe, bi ga enačba »požrla« in na levi bi dobili $0$. To je **resonanca**. Tudi pri $\sin\beta x$ na desni moramo v nastavek vzeti oba, sinus in kosinus.

Če je desna stran vsota, na primer $f = f_1 + f_2$, poiščemo partikularni rešitvi za vsak del posebej in ju seštejemo (superpozicija).

**6. Mehansko nihanje.** Utež z maso $m$ na vzmeti s koeficientom $k$, z dušenjem $b\dot x$ in zunanjo silo $F(t)$:

$$m\ddot x + b\dot x + kx = F(t).$$

Brez zunanje sile je karakteristična enačba $m\lambda^2 + b\lambda + k = 0$. Lastna krožna frekvenca nedušenega nihala je $\omega_0 = \sqrt{k/m}$. Glede na dušenje ločimo:

- **podkritično dušenje** ($b^2 < 4mk$): kompleksni ničli, dušeno nihanje $x = e^{-\delta t}(C_1\cos\omega t + C_2\sin\omega t)$ z $\delta = \frac{b}{2m}$ in $\omega = \sqrt{\omega_0^2 - \delta^2}$,
- **kritično dušenje** ($b^2 = 4mk$): dvojna ničla, najhitrejša vrnitev v ravnovesje brez nihanja,
- **nadkritično dušenje** ($b^2 > 4mk$): dve negativni realni ničli, počasno »lezenje« v ravnovesje.

Pri periodični zunanji sili $F_0\cos\Omega t$ in šibkem dušenju postane amplituda zelo velika, ko je $\Omega$ blizu $\omega_0$. Brez dušenja in pri $\Omega = \omega_0$ amplituda raste linearno s časom (nastavek s faktorjem $t$).

## Rešeni primeri

### Primer 1 (lažji)

Reši začetni problem $y'' - 5y' + 6y = 0$, $y(0) = 1$, $y'(0) = 0$.

**Podatki:** enačba $y'' - 5y' + 6y = 0$, začetna pogoja $y(0) = 1$, $y'(0) = 0$
**Iščemo:** rešitev začetnega problema $y(x)$

:::formula
Karakteristična enačba $\lambda^2 + a\lambda + b = 0$; pri realnih $\lambda_1 \neq \lambda_2$ je $y = C_1 e^{\lambda_1 x} + C_2 e^{\lambda_2 x}$.
:::

**Rešitev:**

1. Karakteristična enačba: $\lambda^2 - 5\lambda + 6 = 0$, $(\lambda - 2)(\lambda - 3) = 0$, ničli $\lambda_1 = 2$, $\lambda_2 = 3$.
2. Splošna rešitev: $y = C_1 e^{2x} + C_2 e^{3x}$, odvod $y' = 2C_1 e^{2x} + 3C_2 e^{3x}$.
3. Začetna pogoja: $y(0) = C_1 + C_2 = 1$ in $y'(0) = 2C_1 + 3C_2 = 0$.
4. Iz prve $C_1 = 1 - C_2$, vstavimo: $2 - 2C_2 + 3C_2 = 0$, $C_2 = -2$, $C_1 = 3$.
5. Preizkus: $y(0) = 3 - 2 = 1$, $y'(0) = 6 - 6 = 0$.
6. Odgovor: $y = 3e^{2x} - 2e^{3x}$.

### Primer 2

Utež z maso $m = 1\,\mathrm{kg}$ visi na vzmeti s koeficientom $k = 13\,\mathrm{N/m}$, dušenje je $b = 4\,\mathrm{kg/s}$. Ob času $t = 0$ je utež odmaknjena za $x_0 = 0{,}02\,\mathrm{m}$ in ima hitrost $v_0 = -0{,}01\,\mathrm{m/s}$. Določi $x(t)$, nihajni čas dušenega nihanja in za kolikšen faktor se ovojnica amplitude zmanjša v enem nihaju.

**Podatki:** $m = 1\,\mathrm{kg}$, $k = 13\,\mathrm{N/m}$, $b = 4\,\mathrm{kg/s}$, $x(0) = 0{,}02\,\mathrm{m}$, $\dot x(0) = -0{,}01\,\mathrm{m/s}$
**Iščemo:** odmik $x(t)$, nihajni čas $T$ in razmerje ovojnice po enem nihaju

:::formula
$m\ddot x + b\dot x + kx = 0$; pri $\lambda = \alpha \pm i\beta$ je $x = e^{\alpha t}(C_1\cos\beta t + C_2\sin\beta t)$; $T = \frac{2\pi}{\beta}$.
:::

**Rešitev:**

1. Enačba: $\ddot x + 4\dot x + 13x = 0$ (enote: $t$ v sekundah, $x$ v metrih).
2. Karakteristična enačba: $\lambda^2 + 4\lambda + 13 = 0$, $D = 16 - 52 = -36$, $\lambda = \frac{-4 \pm 6i}{2} = -2 \pm 3i$.
3. Splošna rešitev: $x = e^{-2t}(C_1\cos 3t + C_2\sin 3t)$; dušenje je podkritično.
4. Iz $x(0) = C_1 = 0{,}02$.
5. Odvod: $\dot x = e^{-2t}\big((-2C_1 + 3C_2)\cos 3t + (-2C_2 - 3C_1)\sin 3t\big)$, torej $\dot x(0) = -2C_1 + 3C_2 = -0{,}01$, $3C_2 = -0{,}01 + 0{,}04 = 0{,}03$, $C_2 = 0{,}01$.
6. Nihajni čas: $T = \frac{2\pi}{3\,\mathrm{s^{-1}}} = 2{,}09\,\mathrm{s}$.
7. Ovojnica $e^{-2t}$ se v času $T$ zmanjša za faktor $e^{-2 \cdot 2{,}094} = e^{-4{,}19} = 0{,}015$.
8. Odgovor: $x(t) = e^{-2t}\big(0{,}02\cos 3t + 0{,}01\sin 3t\big)\,\mathrm{m}$; nihajni čas je $2{,}09\,\mathrm{s}$, po enem nihaju ovojnica pade na $1{,}5\,\%$ prejšnje vrednosti (dušenje je močno).

### Primer 3 (težji)

Reši začetni problem $y'' - 3y' + 2y = 4e^{2x}$, $y(0) = 0$, $y'(0) = 0$.

**Podatki:** enačba $y'' - 3y' + 2y = 4e^{2x}$, začetna pogoja $y(0) = 0$, $y'(0) = 0$
**Iščemo:** rešitev začetnega problema

:::formula
$y = y_h + y_p$. Za $f = Ae^{\mu x}$ je nastavek $y_p = x^k B e^{\mu x}$, kjer je $k$ večkratnost $\mu$ kot ničle karakteristične enačbe.
:::

**Rešitev:**

1. Karakteristična enačba: $\lambda^2 - 3\lambda + 2 = 0$, $(\lambda - 1)(\lambda - 2) = 0$, ničli $1$ in $2$. Homogena rešitev: $y_h = C_1 e^x + C_2 e^{2x}$.
2. Na desni je $e^{2x}$, $\mu = 2$ je enojna ničla, zato $k = 1$ (resonanca). Nastavek: $y_p = Bxe^{2x}$.
3. Odvoda: $y_p' = Be^{2x}(1 + 2x)$, $y_p'' = Be^{2x}(4 + 4x)$.
4. Vstavimo: $Be^{2x}\big[(4 + 4x) - 3(1 + 2x) + 2x\big] = Be^{2x}\big[1 + 0 \cdot x\big] = Be^{2x}$. Členi z $x$ se odštejejo, kot morajo.
5. Iz $Be^{2x} = 4e^{2x}$ sledi $B = 4$, $y_p = 4xe^{2x}$.
6. Splošna rešitev: $y = C_1 e^x + C_2 e^{2x} + 4xe^{2x}$, odvod $y' = C_1 e^x + 2C_2 e^{2x} + 4e^{2x} + 8xe^{2x}$.
7. Začetna pogoja: $C_1 + C_2 = 0$ in $C_1 + 2C_2 + 4 = 0$. Odštejemo: $C_2 = -4$, $C_1 = 4$.
8. Preizkus: $y(0) = 4 - 4 + 0 = 0$, $y'(0) = 4 - 8 + 4 = 0$.
9. Odgovor: $y = 4e^x - 4e^{2x} + 4xe^{2x}$.

## Pogoste napake

- **En sam začetni pogoj.** Enačba drugega reda ima dve konstanti, zato potrebujemo dva pogoja: $y(x_0)$ in $y'(x_0)$ (ali dve vrednosti na robu intervala).
- **Pri dvojni ničli le $Ce^{\lambda x}$.** Pri $y'' - 4y' + 4y = 0$ je $\lambda = 2$ dvojna, splošna rešitev pa $(C_1 + C_2x)e^{2x}$. Ena sama eksponentna funkcija ne more zadostiti dvema poljubnima pogojema.
- **Kompleksne rešitve brez prevoda v realne.** Pri $\lambda = -2 \pm 3i$ pišemo $e^{-2x}(C_1\cos 3x + C_2\sin 3x)$, ne $e^{-2x}\cos 3x$ samo in ne $e^{3x}(\dots)$. Realni del ničle je v eksponentu, imaginarni v argumentu kotnih funkcij.
- **Nastavek brez faktorja $x$ pri resonanci.** V Primeru 3 nastavek $Be^{2x}$ da $B(4 - 6 + 2)e^{2x} = 0$, kar nikoli ni $4e^{2x}$. Vedno najprej preveri, ali je $\mu$ ničla karakteristične enačbe.
- **Pri $\sin$ na desni le $A\sin$ v nastavku.** Pri $y'' + y' = \sin x$ odvajanje ustvari kosinus, zato potrebujemo $A\cos x + B\sin x$.
- **Začetni pogoji v $y_h$ namesto v $y_h + y_p$.** Konstanti določimo šele v celotni rešitvi; drugače dobimo napačne vrednosti.
- **Napačni predznaki v karakteristični enačbi.** Enačba $y'' + 2y' - 3y = 0$ ima karakteristično enačbo $\lambda^2 + 2\lambda - 3 = 0$; predznaki koeficientov ostanejo.

## Povzetek

- Linearna enačba drugega reda $y'' + py' + qy = f$; dva začetna pogoja določita rešitev.
- Homogena: $y_h = C_1y_1 + C_2y_2$ z linearno neodvisnima $y_1$, $y_2$ ($W \neq 0$).
- Konstantni koeficienti: $\lambda^2 + a\lambda + b = 0$. Realni ničli: $C_1e^{\lambda_1x} + C_2e^{\lambda_2x}$; dvojna: $(C_1 + C_2x)e^{\lambda x}$; $\alpha \pm i\beta$: $e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$.
- Nehomogena: $y = y_h + y_p$; nastavek ima obliko desne strani, pomnožen z $x^k$, kjer je $k$ večkratnost ustrezne ničle (resonanca).
- Nihanje $m\ddot x + b\dot x + kx = F$: podkritično, kritično in nadkritično dušenje; resonanca pri $\Omega \approx \omega_0$.

## Drugače: Na sliki

Rešitve homogene enačbe s konstantnimi koeficienti imajo tri značilne oblike grafov.

- **Dve negativni realni ničli** (na primer $-1$ in $-3$): graf se brez nihanja približuje osi $x$; največ enkrat preseka os. Tako se vrača močno dušeno vzmetenje.
- **Dvojna ničla** ($-2$): podobna slika, a je to meja med nihanjem in nenihanjem. Kritično dušeno nihalo se vrne v ravnovesje najhitreje.
- **Kompleksni ničli** ($-2 \pm 3i$): graf niha med dvema eksponentnima ovojnicama $\pm Ae^{-2x}$, ki se zožujeta. Razmik med zaporednima presečiščema z osjo je polovica nihajnega časa, $\frac{\pi}{3}$.

Na kompleksni ravnini ničel: ničle na levi polravnini pomenijo pojemanje, na desni rast, ničle na imaginarni osi pa nedušeno nihanje. Oddaljenost od realne osi je krožna frekvenca, oddaljenost od imaginarne osi pa hitrost pojemanja.

## Drugače: Iz vsakdanjega življenja

**Vzmetenje avtomobila.** Blažilnik je izbran tako, da je dušenje blizu kritičnega: po luknji se avto vrne v ravnovesje hitro in ne poskakuje. Iztrošen blažilnik pomeni manjši $b$ in podkritično dušenje; avto po luknji še nekajkrat zaniha.

**Električni krog RLC.** Za naboj na kondenzatorju velja $L\ddot q + R\dot q + \frac{q}{C} = U(t)$. To je ista enačba kot pri nihalu: induktivnost $L$ ima vlogo mase, upor $R$ dušenja, $\frac{1}{C}$ pa koeficienta vzmeti. Radijski sprejemnik izbere postajo z resonanco pri $\omega_0 = \frac{1}{\sqrt{LC}}$.

**Nihanje molekul.** Dvoatomno molekulo si predstavljamo kot dve masi na vzmeti. Krožna frekvenca nihanja je $\omega = \sqrt{k/\mu}$, kjer je $\mu$ reducirana masa. V infrardečem spektru se pokaže absorpcija pri tej frekvenci; vez $\mathrm{C{=}O}$ absorbira okoli $1700\,\mathrm{cm^{-1}}$, $\mathrm{O{-}H}$ okoli $3300\,\mathrm{cm^{-1}}$.

**Gradbeništvo.** Most ali stavba ima lastne frekvence. Če vsiljevanje (veter, korakanje vojakov, potres) zadene lastno frekvenco, se nihanje močno ojača. Zato vgrajujejo dušilnike.

**Ultrazvok in glasbila.** Struna, zračni steber in kremenov kristal v uri nihajo pri lastnih frekvencah, ki jih določa enačba oblike $y'' + \omega^2 y = 0$.

## Drugače: Korak za korakom s številkami

Reši $y'' + 2y' + y = 3x + 1$ z $y(0) = 0$, $y'(0) = 0$.

1. **Karakteristična enačba:** $\lambda^2 + 2\lambda + 1 = (\lambda + 1)^2 = 0$, dvojna ničla $\lambda = -1$.
2. **Homogena rešitev:** $y_h = (C_1 + C_2x)e^{-x}$.
3. **Nastavek:** desna stran je polinom stopnje $1$, število $0$ ni ničla, zato $k = 0$ in $y_p = Ax + B$.
4. **Vstavimo:** $y_p' = A$, $y_p'' = 0$, torej $0 + 2A + Ax + B = 3x + 1$.
5. **Primerjamo koeficiente:** pri $x$: $A = 3$; prosti člen: $2A + B = 1$, $B = 1 - 6 = -5$. Torej $y_p = 3x - 5$.
6. **Splošna rešitev:** $y = (C_1 + C_2x)e^{-x} + 3x - 5$.
7. **Prvi pogoj:** $y(0) = C_1 - 5 = 0$, $C_1 = 5$.
8. **Drugi pogoj:** $y' = (C_2 - C_1 - C_2x)e^{-x} + 3$, $y'(0) = C_2 - C_1 + 3 = 0$, $C_2 = 2$.
9. **Rešitev:** $y = (5 + 2x)e^{-x} + 3x - 5$.
10. **Preizkus:** $y(0) = 5 - 5 = 0$; $y'(0) = 2 - 5 + 3 = 0$. Za velike $x$ člen z $e^{-x}$ izgine in rešitev se približuje premici $3x - 5$.

## Drugače: Bolj natančno

**Prostor rešitev.** Naj bodo $p$, $q$ zvezne na intervalu $I$. Po izreku o obstoju in enoličnosti za linearne sisteme (enačbo prevedemo na sistem prvega reda za $(y, y')$) ima začetni problem natanko eno rešitev na celem $I$. Preslikava, ki rešitvi homogene enačbe priredi par $(y(x_0), y'(x_0)) \in \mathbb R^2$, je linearna in bijektivna, zato je **prostor rešitev dvorazsežen** vektorski prostor. Vsaka baza tega prostora je fundamentalni sistem.

**Wronskijeva determinanta.** Za rešitvi $y_1$, $y_2$ homogene enačbe velja $W' = y_1y_2'' - y_1''y_2 = -p\,W$, zato je po **Abelovi formuli** $W(x) = W(x_0)\, e^{-\int_{x_0}^x p(t)\, dt}$. Wronskijeva determinanta je torej bodisi povsod enaka nič bodisi nikjer, in rešitvi sta neodvisni natanko tedaj, ko je $W(x_0) \neq 0$ v eni sami točki.

**Dvojna ničla.** Naj bo $L[y] = y'' + ay' + by$ in $\chi(\lambda) = \lambda^2 + a\lambda + b$. Velja $L[e^{\lambda x}] = \chi(\lambda)e^{\lambda x}$. Odvajajmo po $\lambda$: $L[xe^{\lambda x}] = \big(\chi'(\lambda) + x\chi(\lambda)\big)e^{\lambda x}$. Pri dvojni ničli je $\chi(\lambda) = \chi'(\lambda) = 0$, zato je $xe^{\lambda x}$ rešitev. Isti argument utemelji faktor $x^k$ v nastavku pri resonanci.

**Variacija konstant.** Za poljubno zvezno desno stran $f$ (ne le za tiste iz tabele) iščemo $y_p = C_1(x)y_1 + C_2(x)y_2$ s pogojem $C_1'y_1 + C_2'y_2 = 0$. Tedaj $C_1'y_1' + C_2'y_2' = f$, od koder
$$C_1' = -\frac{y_2 f}{W}, \qquad C_2' = \frac{y_1 f}{W}.$$
Primer: za $y'' + y = \frac{1}{\cos x}$ na $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ je $y_1 = \cos x$, $y_2 = \sin x$, $W = 1$, $C_1' = -\tan x$, $C_2' = 1$, torej $y_p = \cos x \ln(\cos x) + x\sin x$. Nastavek tu ne bi pomagal.

**Enačbe višjega reda.** Za $y^{(n)} + a_{n-1}y^{(n-1)} + \dots + a_0y = 0$ je karakteristični polinom stopnje $n$. Vsaki ničli $\lambda$ večkratnosti $m$ pripada $m$ rešitev $e^{\lambda x}, xe^{\lambda x}, \dots, x^{m-1}e^{\lambda x}$, paru kompleksnih ničel pa ustrezne realne kombinacije s kosinusom in sinusom.

## Preveri se

? Kakšna je splošna rešitev enačbe $y'' + 2y' - 3y = 0$?
- $C_1e^{-x} + C_2e^{3x}$
+ $C_1e^{x} + C_2e^{-3x}$
- $(C_1 + C_2x)e^{x}$
- $e^{-x}(C_1\cos 3x + C_2\sin 3x)$
> Karakteristična enačba $\lambda^2 + 2\lambda - 3 = (\lambda - 1)(\lambda + 3) = 0$ ima ničli $1$ in $-3$.

? Kakšna je splošna rešitev enačbe $y'' + 9y = 0$?
- $C_1e^{3x} + C_2e^{-3x}$
- $(C_1 + C_2x)e^{3x}$
+ $C_1\cos 3x + C_2\sin 3x$
- $C_1\cos 9x + C_2\sin 9x$
> Iz $\lambda^2 + 9 = 0$ dobimo $\lambda = \pm 3i$, torej $\alpha = 0$ in $\beta = 3$. Krožna frekvenca je $\sqrt 9 = 3$, ne $9$.

? Kateri nastavek za partikularno rešitev je pravilen pri $y'' - y = e^{x}$?
- $y_p = Ae^{x}$
+ $y_p = Axe^{x}$
- $y_p = Ax^2e^{x}$
- $y_p = A\cos x + B\sin x$
> Ničli karakteristične enačbe $\lambda^2 - 1 = 0$ sta $\pm 1$. Število $1$ je enojna ničla, zato pomnožimo z $x^1$. Nastavek $Ae^x$ bi dal $0$.

? Kakšna je splošna rešitev enačbe $y'' - 4y' + 4y = 0$?
- $C_1e^{2x} + C_2e^{-2x}$
- $Ce^{2x}$
+ $(C_1 + C_2x)e^{2x}$
- $e^{2x}(C_1\cos 2x + C_2\sin 2x)$
> $\lambda^2 - 4\lambda + 4 = (\lambda - 2)^2$, dvojna ničla $2$. Druga neodvisna rešitev je $xe^{2x}$.

:::simboli
y | iskana funkcija (rešitev enačbe) | |
y' | prvi odvod iskane funkcije | |
y'' | drugi odvod iskane funkcije | |
x | neodvisna spremenljivka | | | pri nihanju odmik uteži od lege mirovanja
a | konstantni koeficient pri y' | | | v ma = F pospešek
b | konstantni koeficient pri y | | | pri nihanju koeficient dušenja v kg/s
f | desna stran enačbe | | | f ≡ 0: homogena enačba
p, q | koeficienta linearne enačbe (funkciji x) | |
x_0 | točka začetnih pogojev | | | pri nihanju začetni odmik
y_0 | vrednost rešitve v x₀ | |
y_1 | prva rešitev homogene enačbe | | | v pogoju y'(x₀) = y₁ vrednost odvoda
y_2 | druga, linearno neodvisna rešitev homogene enačbe | |
y_1', y_2' | odvoda rešitev y₁ in y₂ | |
y_h | splošna rešitev homogene enačbe | y_h = C_1 y_1 + C_2 y_2 |
y_p | partikularna rešitev nehomogene enačbe | |
C_1, C_2 | poljubni konstanti | | | določimo ju iz začetnih pogojev
C_1' | odvod prve spremenljive konstante | C_1' = -\frac{y_2 f}{W} | | variacija konstant
C_2' | odvod druge spremenljive konstante | C_2' = \frac{y_1 f}{W} | | variacija konstant
W | Wronskijeva determinanta | W = y_1 y_2' - y_1' y_2 | | W ≠ 0: rešitvi sta linearno neodvisni
\lambda | ničla karakteristične enačbe | | | λ² + aλ + b = 0
\lambda_1, \lambda_2 | ničli karakteristične enačbe | |
\alpha | realni del kompleksne ničle λ | |
\beta | imaginarni del kompleksne ničle λ | |
i | imaginarna enota | | | i² = −1
e | Eulerjevo število | | | e ≈ 2,718
m | masa uteži | | kg
\dot x | hitrost uteži | | m/s | odvod odmika po času
k | koeficient vzmeti | | N/m | v nastavku večkratnost ničle karakteristične enačbe
F | zunanja sila | | N
t | čas | | s
T | nihajni čas dušenega nihanja | T = \frac{2\pi}{\beta} | s
A | koeficient desne strani f = A e^{μx} | |
B | neznani koeficient v nastavku za y_p | |
\mu | eksponent v desni strani f = A e^{μx} | |
:::
