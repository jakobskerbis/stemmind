---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Skoraj vsak zakon v naravoslovju govori o **spreminjanju**: hitrost je sprememba lege s časom, pospešek sprememba hitrosti, hitrost reakcije sprememba koncentracije, tok sprememba naboja, hitrost rasti populacije sprememba števila osebkov. Vse to opiše isti matematični pojem, **odvod**.

Povprečno hitrost spreminjanja na intervalu izračunamo kot kvocient »sprememba količine / sprememba časa«. Odvod je limita tega kvocienta, ko interval krčimo proti nič: dobimo **trenutno** hitrost spreminjanja. Geometrijsko je odvod **naklon tangente** na graf.

V tej lekciji se naučiš:

- definicijo odvoda in odvod v točki,
- tabelo odvodov elementarnih funkcij in **pravila odvajanja** (vsota, produkt, kvocient),
- **verižno pravilo** za odvod sestavljene funkcije,
- zapisati enačbo **tangente** in normale.

Pojem odvoda sta v 17. stoletju neodvisno razvila Isaac Newton, ki ga je potreboval za mehaniko gibanja planetov, in Gottfried Wilhelm Leibniz, ki je vpeljal zapis $\frac{dy}{dx}$, ki ga uporabljamo še danes. Odvajanje je osnova za iskanje ekstremov, risanje grafov, Taylorjeve približke in integriranje, ki pridejo na vrsto v naslednjih lekcijah.

## Razlaga

**1. Diferenčni kvocient.** Naj bo $f$ definirana na okolici točke $x_0$. Ko se $x$ spremeni iz $x_0$ v $x_0 + h$, se vrednost spremeni za $\Delta f = f(x_0 + h) - f(x_0)$. **Diferenčni kvocient**

$$\frac{f(x_0 + h) - f(x_0)}{h}$$

je povprečna hitrost spreminjanja na intervalu med $x_0$ in $x_0 + h$. Geometrijsko je to smerni koeficient **sekante** skozi točki $(x_0, f(x_0))$ in $(x_0 + h, f(x_0 + h))$.

**2. Odvod v točki.** Če obstaja limita

$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h},$$

pravimo, da je $f$ **odvedljiva** v $x_0$, in število $f'(x_0)$ imenujemo **odvod** funkcije $f$ v točki $x_0$. Uporabljamo tudi oznake $\frac{df}{dx}(x_0)$, $\frac{dy}{dx}$ in pri času $\dot{x}$. Ko se $h$ manjša, se sekanta suče okoli točke $(x_0, f(x_0))$ in se približa **tangenti**; odvod je njen smerni koeficient.

Funkcija $f'$, ki vsakemu $x$ priredi $f'(x)$, je **odvod funkcije** $f$. Odvod odvoda je **drugi odvod** $f''$ in tako naprej.

**3. Odvedljivost in zveznost.** Če je $f$ odvedljiva v $x_0$, je tam tudi zvezna. Obratno ne velja: $f(x) = |x|$ je zvezna v $0$, a leva limita diferenčnega kvocienta je $-1$, desna $1$, zato odvod ne obstaja. Graf ima v $0$ »špico«. Podobno $\sqrt[3]{x}$ v $0$ nima odvoda, ker je tangenta navpična.

**4. Tabela odvodov.**

| $f(x)$ | $f'(x)$ |
|---|---|
| $c$ (konstanta) | $0$ |
| $x^r$ ($r \in \mathbb{R}$) | $r x^{r-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\log_a x$ | $\frac{1}{x \ln a}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\frac{1}{\cos^2 x}$ |
| $\arcsin x$ | $\frac{1}{\sqrt{1 - x^2}}$ |
| $\arccos x$ | $-\frac{1}{\sqrt{1 - x^2}}$ |
| $\arctan x$ | $\frac{1}{1 + x^2}$ |

Posebej: $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$ in $\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$.

**5. Pravila odvajanja.** Za odvedljivi funkciji $f$ in $g$ ter konstanto $c$ velja:

- $(c f)' = c f'$ in $(f \pm g)' = f' \pm g'$,
- **produkt:** $(f g)' = f' g + f g'$,
- **kvocient:** $\left(\dfrac{f}{g}\right)' = \dfrac{f' g - f g'}{g^2}$, kjer je $g \neq 0$.

**6. Verižno pravilo.** Za sestavljeno funkcijo $h(x) = f(g(x))$ velja

$$h'(x) = f'(g(x)) \cdot g'(x).$$

Odvajamo »od zunaj navznoter«: odvod zunanje funkcije, izračunan pri notranji, pomnožimo z odvodom notranje. V Leibnizovem zapisu z $u = g(x)$: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$. Primeri:

- $\left((3x^2 + 1)^4\right)' = 4(3x^2 + 1)^3 \cdot 6x = 24x(3x^2 + 1)^3$,
- $\left(e^{-x^2}\right)' = e^{-x^2} \cdot (-2x)$,
- $\left(\sin(\omega t)\right)' = \omega \cos(\omega t)$, kjer odvajamo po $t$.

Pri več gnezdenih funkcijah verigo podaljšamo: $\left(\ln(\cos 2x)\right)' = \frac{1}{\cos 2x} \cdot (-\sin 2x) \cdot 2 = -2\tan 2x$.

**7. Odvod inverzne funkcije.** Če je $f$ strogo monotona in odvedljiva z $f'(x) \neq 0$, je $(f^{-1})'(y) = \frac{1}{f'(x)}$, kjer je $y = f(x)$. Tako iz $(e^x)' = e^x$ dobimo $(\ln y)' = \frac{1}{e^x} = \frac{1}{y}$.

**Logaritemsko odvajanje.** Pri funkcijah oblike $u(x)^{v(x)}$ najprej logaritmiramo: za $y = x^x$ je $\ln y = x \ln x$, odvajamo $\frac{y'}{y} = \ln x + 1$, torej $(x^x)' = x^x(\ln x + 1)$.

**Enote odvoda.** Odvod ima enoto »enota funkcije na enoto spremenljivke«. Če je $c(t)$ koncentracija v $\mathrm{mol/L}$ in $t$ čas v $\mathrm{s}$, ima $\frac{dc}{dt}$ enoto $\mathrm{mol/(L\,s)}$. Če je $V(T)$ prostornina plina v $\mathrm{m^3}$ v odvisnosti od temperature v $\mathrm{K}$, ima $\frac{dV}{dT}$ enoto $\mathrm{m^3/K}$. Preverjanje enot je dober preizkus pravilnosti modela.

**Implicitno odvajanje.** Včasih je zveza med $x$ in $y$ podana z enačbo, iz katere $y$ ne izrazimo zlahka, na primer krožnica $x^2 + y^2 = 25$. Obe strani odvajamo po $x$, pri čemer je $y$ funkcija $x$ in uporabimo verižno pravilo: $2x + 2y\, y' = 0$, torej $y' = -\frac{x}{y}$. V točki $(3, 4)$ je naklon tangente $-\frac{3}{4}$.

**Višji odvodi.** Drugi odvod $f''$ pove, kako se spreminja naklon. Če je $f'' > 0$, naklon tangente narašča in graf je **konveksen** (zavija navzgor); če je $f'' < 0$, je **konkaven**. V mehaniki je drugi odvod lege pospešek. Primer: za $f(x) = x^4$ je $f'(x) = 4x^3$, $f''(x) = 12x^2$, $f'''(x) = 24x$, $f^{(4)}(x) = 24$, vsi nadaljnji odvodi pa so $0$. Pri $e^x$ so vsi odvodi enaki $e^x$, pri $\sin x$ pa se ponavljajo s periodo $4$: $\cos x$, $-\sin x$, $-\cos x$, $\sin x$.

**8. Tangenta in normala.** Tangenta na graf $f$ v točki $(x_0, f(x_0))$ ima enačbo

$$y = f(x_0) + f'(x_0)(x - x_0).$$

**Normala** je pravokotna na tangento; za $f'(x_0) \neq 0$ ima smerni koeficient $-\frac{1}{f'(x_0)}$. Kot $\alpha$ med tangento in osjo $x$ dobimo iz $\tan\alpha = f'(x_0)$.

**9. Diferencial in linearni približek.** Blizu $x_0$ je graf skoraj enak tangenti, zato je

$$f(x_0 + h) \approx f(x_0) + f'(x_0)\, h.$$

Izraz $df = f'(x_0)\, dx$ je **diferencial**. Z njim ocenjujemo majhne spremembe in širjenje merskih napak.

## Rešeni primeri

### Primer 1 (lažji)

Po definiciji izračunaj odvod funkcije $f(x) = 2x^2 - x$ v točki $x_0 = 1$. Rezultat preveri s pravili.

**Podatki:** $f(x) = 2x^2 - x$, $x_0 = 1$
**Iščemo:** $f'(1)$

:::formula
$f'(x_0) = \lim_{h \to 0} \dfrac{f(x_0 + h) - f(x_0)}{h}$
:::

**Rešitev:**

1. $f(1) = 2 - 1 = 1$.
2. $f(1 + h) = 2(1 + h)^2 - (1 + h) = 2 + 4h + 2h^2 - 1 - h = 1 + 3h + 2h^2$.
3. Diferenčni kvocient: $\dfrac{(1 + 3h + 2h^2) - 1}{h} = \dfrac{3h + 2h^2}{h} = 3 + 2h$ za $h \neq 0$.
4. Limita: $\lim_{h \to 0} (3 + 2h) = 3$.
5. Preizkus s pravili: $f'(x) = 4x - 1$, $f'(1) = 3$.
6. Odgovor: $f'(1) = 3$; tangenta na graf v točki $(1, 1)$ ima smerni koeficient $3$.

### Primer 2

Odvajaj funkciji $f(x) = x^2 \sin(3x)$ in $g(x) = \dfrac{\ln x}{x}$ ter izračunaj $g'(1)$.

**Podatki:** $f(x) = x^2 \sin(3x)$, $g(x) = \dfrac{\ln x}{x}$ za $x > 0$, točka $x = 1$
**Iščemo:** $f'(x)$, $g'(x)$ in $g'(1)$

:::formula
$(uv)' = u'v + uv'$, $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$, verižno pravilo $(\sin(3x))' = 3\cos(3x)$.
:::

**Rešitev:**

1. Za $f$: $u = x^2$, $u' = 2x$; $v = \sin(3x)$, $v' = 3\cos(3x)$ (verižno pravilo).
2. $f'(x) = 2x\sin(3x) + 3x^2\cos(3x)$.
3. Za $g$: $u = \ln x$, $u' = \frac{1}{x}$; $v = x$, $v' = 1$.
4. $g'(x) = \dfrac{\frac{1}{x} \cdot x - \ln x \cdot 1}{x^2} = \dfrac{1 - \ln x}{x^2}$.
5. $g'(1) = \dfrac{1 - 0}{1} = 1$.
6. Odgovor: $f'(x) = 2x\sin 3x + 3x^2\cos 3x$, $g'(x) = \frac{1 - \ln x}{x^2}$ in $g'(1) = 1$.

### Primer 3 (težji)

Zapiši enačbi tangente in normale na graf funkcije $f(x) = \sqrt{x^2 + 9}$ v točki z absciso $x_0 = 4$. Izračunaj kot med tangento in osjo $x$ ter z linearnim približkom oceni $f(4{,}1)$.

**Podatki:** $f(x) = \sqrt{x^2 + 9}$, $x_0 = 4$, točka za oceno $x = 4{,}1$
**Iščemo:** enačbi tangente in normale, kot $\alpha$, približek $f(4{,}1)$

:::formula
Tangenta: $y = f(x_0) + f'(x_0)(x - x_0)$. Normala: $y = f(x_0) - \dfrac{1}{f'(x_0)}(x - x_0)$. Kot: $\tan\alpha = f'(x_0)$. Verižno pravilo: $\left(\sqrt{u}\right)' = \dfrac{u'}{2\sqrt{u}}$.
:::

**Rešitev:**

1. $f(4) = \sqrt{16 + 9} = 5$; točka je $(4, 5)$.
2. Odvod po verižnem pravilu: $f'(x) = \dfrac{2x}{2\sqrt{x^2 + 9}} = \dfrac{x}{\sqrt{x^2 + 9}}$, torej $f'(4) = \frac{4}{5} = 0{,}8$.
3. Tangenta: $y = 5 + 0{,}8(x - 4) = 0{,}8x + 1{,}8$.
4. Normala: smerni koeficient $-\frac{1}{0{,}8} = -1{,}25$, torej $y = 5 - 1{,}25(x - 4) = -1{,}25x + 10$.
5. Kot: $\alpha = \arctan 0{,}8 \approx 38{,}7^\circ$.
6. Približek: $f(4{,}1) \approx 5 + 0{,}8 \cdot 0{,}1 = 5{,}08$. Natančna vrednost je $\sqrt{25{,}81} \approx 5{,}0804$.
7. Odgovor: tangenta $y = 0{,}8x + 1{,}8$, normala $y = -1{,}25x + 10$, kot z osjo $x$ je približno $38{,}7^\circ$, $f(4{,}1) \approx 5{,}08$.

## Pogoste napake

- **Odvod produkta kot produkt odvodov.** $(x^2 \sin x)' \neq 2x \cos x$. Pravilo za produkt ima dva člena: $2x\sin x + x^2\cos x$.
- **Pozabljen odvod notranje funkcije.** $(\sin 3x)' \neq \cos 3x$; pravilno je $3\cos 3x$. Prav tako $(e^{-2x})' = -2e^{-2x}$.
- **Napačen vrstni red pri kvocientu.** V števcu je $f'g - fg'$, ne $fg' - f'g$; zamenjava spremeni predznak.
- **$(a^x)' = x a^{x-1}$.** Pravilo za potence velja, ko je spremenljivka v osnovi. Pri eksponentni funkciji je $(a^x)' = a^x \ln a$.
- **Odvod v točki pred odvajanjem.** Študent najprej vstavi $x_0$ in nato odvaja konstanto, kar da $0$. Najprej odvajaj, nato vstavi.
- **Tangenta z napačno točko.** V enačbo tangente vstavi $f(x_0)$, ne $f'(x_0)$, kot ordinato točke.
- **Koti v stopinjah.** $(\sin x)' = \cos x$ velja samo, če je $x$ v radianih.
- **Odvod konstante z $\pi$ ali $e$.** Študent napiše $(e^2)' = 2e$ ali $(\pi^3)' = 3\pi^2$. Števili $e^2$ in $\pi^3$ sta konstanti, zato je njun odvod $0$.
- **Napačna spremenljivka.** Pri $f(t) = e^{-kt}$ odvajamo po $t$, $k$ je konstanta: $f'(t) = -k e^{-kt}$. Vedno preveri, po kateri spremenljivki odvajaš.

## Povzetek

- $f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$ je trenutna hitrost spreminjanja in naklon tangente.
- Odvedljiva funkcija je zvezna; obratno ne velja ($|x|$ v $0$).
- $(x^r)' = r x^{r-1}$, $(e^x)' = e^x$, $(\ln x)' = \frac{1}{x}$, $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$, $(\arctan x)' = \frac{1}{1 + x^2}$.
- $(fg)' = f'g + fg'$, $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$.
- Verižno pravilo: $(f(g(x)))' = f'(g(x))\, g'(x)$.
- Tangenta: $y = f(x_0) + f'(x_0)(x - x_0)$; normala ima smerni koeficient $-\frac{1}{f'(x_0)}$.
- Linearni približek: $f(x_0 + h) \approx f(x_0) + f'(x_0) h$.

## Drugače: Na sliki

Nariši parabolo $y = x^2$ in točko $T(3, 9)$. Skozi $T$ in točko $(4, 16)$ potegni sekanto; njen naklon je $\frac{16 - 9}{1} = 7$. Nato izberi točko bližje, $(3{,}5;\ 12{,}25)$: naklon sekante je $\frac{12{,}25 - 9}{0{,}5} = 6{,}5$. Ko drugo točko pomikaš proti $T$, se sekanta vrti in se ustali v tangenti z naklonom $6$.

Predstavljaj si tudi, da z zelo močno lupo gledaš graf odvedljive funkcije okoli točke $T$. Bolj ko povečuješ, bolj je kos grafa podoben ravni črti: to je tangenta. Odvedljiva funkcija je »lokalno linearna«. Pri $|x|$ pa ostane v izhodišču špica, ne glede na povečavo, zato tam odvoda ni.

Kjer graf strmo narašča, je odvod velik in pozitiven. Kjer je graf vodoraven (vrh ali dno), je odvod $0$. Kjer pada, je odvod negativen. Iz grafa $f$ lahko zato grobo skiciraš graf $f'$: nad intervali naraščanja leži nad osjo $x$, nad intervali padanja pod njo.

## Drugače: Iz vsakdanjega življenja

**Hitrost reakcije.** Pri reakciji prvega reda je $c(t) = c_0 e^{-kt}$. Hitrost porabe reaktanta je $-\frac{dc}{dt} = k c_0 e^{-kt} = k\, c(t)$; to je diferencialni zakon hitrosti. Za $c_0 = 0{,}80\,\mathrm{mol/L}$ in $k = 0{,}046\,\mathrm{min^{-1}}$ je začetna hitrost $0{,}046 \cdot 0{,}80 \approx 0{,}037\,\mathrm{mol/(L\,min)}$, po $10\,\mathrm{min}$ pa le še približno $0{,}023\,\mathrm{mol/(L\,min)}$.

**Hitrost in pospešek.** Če je lega telesa $x(t)$, je hitrost $v = \dot x$ in pospešek $a = \dot v = \ddot x$. Pri nihanju $x(t) = A\sin(\omega t)$ je po verižnem pravilu $v = A\omega\cos(\omega t)$ in $a = -A\omega^2\sin(\omega t) = -\omega^2 x$.

**Rast populacije.** Če je $N(t)$ število bakterij v kulturi, je $N'(t)$ hitrost rasti (osebki na uro), kvocient $\frac{N'(t)}{N(t)}$ pa **specifična hitrost rasti**. Pri eksponentni rasti $N(t) = N_0 e^{rt}$ je ta kvocient konstanten in enak $r$, kar je eden od načinov, kako biologi iz meritev prepoznajo eksponentno fazo rasti.

**Kemijska termodinamika.** Mnoge snovne lastnosti so odvodi. Toplotna kapaciteta pri stalnem tlaku je odvod entalpije po temperaturi, $C_p = \left(\frac{\partial H}{\partial T}\right)_p$; temperaturni koeficient prostorninskega raztezka je $\frac{1}{V}\frac{dV}{dT}$. Ko v tabelah vidiš take količine, gre vedno za hitrost spreminjanja ene količine glede na drugo.

**Električni tok** je odvod naboja po času, $I = \frac{dQ}{dt}$. Napetost na tuljavi je sorazmerna z odvodom toka, $U = L\frac{dI}{dt}$.

**Širjenje napake.** Polmer krogle izmerimo kot $r = 2{,}00\,\mathrm{cm}$ z napako $\Delta r = 0{,}02\,\mathrm{cm}$. Prostornina $V = \frac{4}{3}\pi r^3$ ima odvod $4\pi r^2$, zato je $\Delta V \approx 4\pi r^2 \Delta r = 4\pi \cdot 4 \cdot 0{,}02\,\mathrm{cm^3} \approx 1{,}0\,\mathrm{cm^3}$. Relativna napaka prostornine je trikratnik relativne napake polmera.

## Drugače: Korak za korakom s številkami

Izračunajmo diferenčne kvociente funkcije $f(x) = x^2$ v točki $x_0 = 3$ za vse manjše $h$.

1. $f(3) = 9$.
2. $h = 0{,}1$: $\frac{3{,}1^2 - 9}{0{,}1} = \frac{9{,}61 - 9}{0{,}1} = 6{,}1$.
3. $h = 0{,}01$: $\frac{3{,}01^2 - 9}{0{,}01} = \frac{9{,}0601 - 9}{0{,}01} = 6{,}01$.
4. $h = 0{,}001$: $\frac{3{,}001^2 - 9}{0{,}001} = \frac{9{,}006001 - 9}{0{,}001} = 6{,}001$.
5. **Vzorec.** Kvocient je $6 + h$. Splošno: $\frac{(3 + h)^2 - 9}{h} = \frac{6h + h^2}{h} = 6 + h \to 6$.
6. **S pravilom:** $f'(x) = 2x$, $f'(3) = 6$.

Enako za verižno pravilo: odvajajmo $h(x) = \sqrt{1 + x^2}$ v $x = 1$.

1. Notranja funkcija $u = 1 + x^2$, $u' = 2x$; pri $x = 1$ je $u = 2$, $u' = 2$.
2. Zunanja $\sqrt{u}$ ima odvod $\frac{1}{2\sqrt{u}}$; pri $u = 2$ je to $\frac{1}{2\sqrt{2}} \approx 0{,}354$.
3. Produkt: $h'(1) = \frac{1}{2\sqrt{2}} \cdot 2 = \frac{1}{\sqrt{2}} \approx 0{,}707$.

## Drugače: Bolj natančno

**Trditev.** Če je $f$ odvedljiva v $x_0$, je tam zvezna.

*Dokaz.* Za $x \neq x_0$ je $f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0} \cdot (x - x_0)$. Ko gre $x \to x_0$, gre prvi faktor proti $f'(x_0)$, drugi proti $0$, zato $f(x) \to f(x_0)$. $\square$

**Dokaz pravila za produkt.** Prištejemo in odštejemo $f(x + h)g(x)$:

$$\frac{f(x+h)g(x+h) - f(x)g(x)}{h} = f(x + h)\frac{g(x + h) - g(x)}{h} + g(x)\frac{f(x + h) - f(x)}{h}.$$

Ker je $f$ zvezna (odvedljiva), gre $f(x + h) \to f(x)$, kvocienta pa gresta proti $g'(x)$ in $f'(x)$. Dobimo $f g' + f' g$.

**Verižno pravilo.** Odvedljivost $g$ v $x$ pomeni $g(x + h) = g(x) + g'(x)h + o(h)$, odvedljivost $f$ v $u = g(x)$ pa $f(u + k) = f(u) + f'(u)k + o(k)$. Vstavimo $k = g(x + h) - g(x) = g'(x)h + o(h)$ in dobimo $f(g(x + h)) = f(g(x)) + f'(g(x))g'(x)h + o(h)$. Natančna izpeljava s pomožno funkcijo $\varphi(k) = \frac{f(u + k) - f(u)}{k}$ za $k \neq 0$ in $\varphi(0) = f'(u)$ se izogne deljenju z ničlo, kadar je $g(x + h) = g(x)$.

**Odvod eksponentne funkcije.** $\frac{e^{x+h} - e^x}{h} = e^x \cdot \frac{e^h - 1}{h} \to e^x \cdot 1$, kjer smo uporabili znano limito $\lim_{h \to 0} \frac{e^h - 1}{h} = 1$. Podobno $\frac{\sin(x + h) - \sin x}{h} = \sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h} \to \cos x$.

**Diferenciabilnost.** Ekvivalentno: $f$ je odvedljiva v $x_0$, če obstaja število $A$, da je $f(x_0 + h) = f(x_0) + Ah + o(h)$, kjer $\frac{o(h)}{h} \to 0$. Ta zapis (najboljši linearni približek) se posploši na funkcije več spremenljivk.

## Preveri se

? Koliko je odvod funkcije $f(x) = (x^3 + 2)^4$?
- $4(x^3 + 2)^3$
+ $12x^2(x^3 + 2)^3$
- $3x^2(x^3 + 2)^4$
> Verižno pravilo: $4(x^3 + 2)^3 \cdot 3x^2 = 12x^2(x^3 + 2)^3$. Prvi odgovor pozabi na odvod notranje funkcije.

? Kolikšen je smerni koeficient tangente na graf $f(x) = e^{2x}$ v točki $x_0 = 0$?
+ $2$
- $1$
- $e^2$
> $f'(x) = 2e^{2x}$, zato je $f'(0) = 2 \cdot 1 = 2$.

? Katera funkcija je v $x = 0$ zvezna, a ni odvedljiva?
+ $f(x) = |x|$
- $f(x) = x^2$
- $f(x) = \sin x$
> Pri $|x|$ sta leva in desna limita diferenčnega kvocienta $-1$ in $1$, zato odvod v $0$ ne obstaja. Drugi dve funkciji sta odvedljivi povsod.

? Koliko je odvod funkcije $f(x) = \ln(x^2 + 1)$ v točki $x = 1$?
+ $1$
- $\frac{1}{2}$
- $\ln 2$
> $f'(x) = \frac{2x}{x^2 + 1}$, zato je $f'(1) = \frac{2}{2} = 1$. Odgovor $\frac{1}{2}$ dobiš, če pozabiš na odvod notranje funkcije $2x$.
