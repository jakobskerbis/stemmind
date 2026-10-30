---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Večina količin v naravi je odvisna od več spremenljivk hkrati. Tlak idealnega plina je odvisen od temperature in prostornine, $p = nRT/V$. Hitrost kemijske reakcije je odvisna od koncentracij več snovi in od temperature. Temperatura v kosu kovine je odvisna od lege $(x, y, z)$ in časa. Pridelek je odvisen od količine vode in gnojila.

Pri funkciji ene spremenljivke odvod pove, kako hitro se funkcija spreminja. Pri funkciji več spremenljivk pa se lahko vprašamo: kako hitro se spreminja, če spremenimo **samo eno** spremenljivko, druge pa držimo pri miru? Odgovor je **parcialni odvod**. Iz parcialnih odvodov sestavimo še:

- **totalni diferencial**, s katerim ocenimo spremembo funkcije, ko se spremenijo vse spremenljivke hkrati, in izračunamo, kako se napake meritev prenesejo v rezultat,
- **gradient**, vektor, ki kaže smer najhitrejšega naraščanja (npr. smer, v kateri se snov najhitreje segreva ali v katero difundira),
- **verižno pravilo**, ko so spremenljivke same odvisne od drugih spremenljivk, na primer od časa.

Parcialni odvodi so jezik termodinamike, fizikalne kemije, transportnih pojavov in optimizacije.

## Razlaga

**1. Funkcije dveh spremenljivk.** Funkcija $f\colon D \to \mathbb{R}$, $D \subseteq \mathbb{R}^2$, vsaki točki $(x, y)$ iz definicijskega območja priredi število $z = f(x, y)$. Njen **graf** je ploskev v prostoru. **Nivojnica** za vrednost $c$ je krivulja $f(x, y) = c$ v ravnini $xy$: izobare na vremenski karti in plastnice na zemljevidu so nivojnice.

**2. Parcialni odvod.** Parcialni odvod funkcije $f$ po $x$ v točki $(a, b)$ je

$$\frac{\partial f}{\partial x}(a, b) = f_x(a, b) = \lim_{h \to 0}\frac{f(a + h, b) - f(a, b)}{h},$$

če limita obstaja. Spremenljivko $y$ smo držali pri vrednosti $b$, torej smo odvajali funkcijo ene spremenljivke $x \mapsto f(x, b)$. Podobno je $f_y(a, b) = \lim_{h \to 0}\frac{f(a, b + h) - f(a, b)}{h}$.

**Praktično pravilo:** pri $\partial f/\partial x$ obravnavamo vse druge spremenljivke kot **konstante** in odvajamo po $x$ z vsemi znanimi pravili (za vsoto, produkt, kvocient, verižno pravilo). Primer: za $f(x, y) = x^2\sin y$ je $f_x = 2x\sin y$ in $f_y = x^2\cos y$.

**Geometrijski pomen:** $f_x(a, b)$ je naklon krivulje, ki jo na grafu izreže ravnina $y = b$, v točki nad $(a, b)$. Pri funkciji več spremenljivk $f(x_1, \dots, x_n)$ je parcialnih odvodov $n$.

**3. Višji odvodi.** Parcialne odvode lahko spet parcialno odvajamo: $f_{xx} = \frac{\partial^2f}{\partial x^2}$, $f_{yy}$, ter **mešana** odvoda $f_{xy} = \frac{\partial}{\partial y}\frac{\partial f}{\partial x}$ in $f_{yx}$. **Schwarzev izrek:** če sta mešana odvoda zvezna, sta enaka, $f_{xy} = f_{yx}$. V termodinamiki iz tega sledijo Maxwellove relacije.

**4. Diferenciabilnost in tangentna ravnina.** Pri eni spremenljivki obstoj odvoda pomeni, da graf lahko lokalno nadomestimo s tangento. Pri dveh spremenljivkah obstoj obeh parcialnih odvodov tega **ne** zagotavlja, ker gledamo le dve smeri. Funkcija $f$ je **diferenciabilna** v $(a, b)$, če jo lahko blizu te točke dobro približamo z linearno funkcijo:

$$f(a + h, b + k) = f(a, b) + f_x(a, b)\,h + f_y(a, b)\,k + o\!\left(\sqrt{h^2 + k^2}\right),$$

kjer gre ostanek proti $0$ hitreje kot razdalja $\sqrt{h^2 + k^2}$. Diferenciabilna funkcija je zvezna in ima parcialne odvode. **Zadosten pogoj:** če parcialna odvoda obstajata v okolici točke in sta v njej zvezna, je $f$ diferenciabilna. Pri funkcijah, sestavljenih iz elementarnih, je to skoraj vedno izpolnjeno.

Graf diferenciabilne funkcije ima v točki $(a, b, f(a, b))$ **tangentno ravnino**

$$z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b).$$

**5. Totalni diferencial.** Linearni del spremembe imenujemo **totalni diferencial**:

$$\mathrm{d}f = \frac{\partial f}{\partial x}\,\mathrm{d}x + \frac{\partial f}{\partial y}\,\mathrm{d}y.$$

Za majhne spremembe $\Delta x$, $\Delta y$ je $\Delta f \approx f_x\,\Delta x + f_y\,\Delta y$. Ocena **največje absolutne napake** rezultata iz napak meritev $\Delta x$, $\Delta y$ je

$$\Delta f \le |f_x|\,\Delta x + |f_y|\,\Delta y.$$

Za produkte in kvociente potenc, $f = Cx^my^n$, iz tega sledi pravilo za relativne napake: $\frac{\Delta f}{|f|} \le |m|\frac{\Delta x}{|x|} + |n|\frac{\Delta y}{|y|}$.

**6. Gradient in smerni odvod.** **Gradient** funkcije $f$ je vektor parcialnih odvodov:

$$\nabla f = \operatorname{grad} f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}\right).$$

Hitrost spreminjanja v poljubni smeri, podani z **enotskim** vektorjem $\vec{u}$, je **smerni odvod**

$$\frac{\partial f}{\partial\vec{u}} = \nabla f \cdot \vec{u} = |\nabla f|\cos\varphi,$$

kjer je $\varphi$ kot med $\nabla f$ in $\vec{u}$. Od tod sledijo tri pomembne lastnosti:

- gradient kaže v smer **najhitrejšega naraščanja** funkcije, hitrost naraščanja v tej smeri je $|\nabla f|$;
- v smeri $-\nabla f$ funkcija najhitreje pada (na tem temelji gradientni spust pri optimizaciji);
- gradient je **pravokoten na nivojnico** skozi dano točko, ker je v smeri nivojnice sprememba nič.

**7. Verižno pravilo.** Naj bo $z = f(x, y)$ diferenciabilna, $x = x(t)$ in $y = y(t)$ pa odvedljivi funkciji. Tedaj je $z(t) = f(x(t), y(t))$ in

$$\frac{\mathrm{d}z}{\mathrm{d}t} = \frac{\partial f}{\partial x}\frac{\mathrm{d}x}{\mathrm{d}t} + \frac{\partial f}{\partial y}\frac{\mathrm{d}y}{\mathrm{d}t} = \nabla f \cdot (\dot{x}, \dot{y}).$$

Če sta $x = x(u, v)$ in $y = y(u, v)$ funkciji dveh spremenljivk, velja za vsako spremenljivko posebej

$$\frac{\partial z}{\partial u} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial u}, \qquad \frac{\partial z}{\partial v} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial v} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial v}.$$

Pravilo si zapomniš tako: za vsako »pot« od $z$ do končne spremenljivke zmnožiš odvode po poti in vse poti sešteješ.

**8. Implicitno odvajanje.** Če je krivulja podana z enačbo $F(x, y) = 0$ in je $F_y \ne 0$, verižno pravilo za $F(x, y(x)) = 0$ da $F_x + F_y\,y' = 0$, torej

$$y' = -\frac{F_x}{F_y}.$$

## Rešeni primeri

### Primer 1 (lažji)

Za funkcijo $f(x, y) = x^2y^3 - 4xy + 5$ izračunaj oba parcialna odvoda prvega reda in vse parcialne odvode drugega reda v točki $(1, -1)$. Zapiši enačbo tangentne ravnine na graf v tej točki in z njo oceni $f(1{,}1;\,-0{,}9)$.

**Podatki:** $f(x, y) = x^2y^3 - 4xy + 5$, točka $(a, b) = (1, -1)$, ocena v točki $(1{,}1;\,-0{,}9)$
**Iščemo:** $f_x$, $f_y$, $f_{xx}$, $f_{yy}$, $f_{xy}$, $f_{yx}$ v $(1, -1)$, tangentno ravnino, približek za $f(1{,}1;\,-0{,}9)$

:::formula
Pri $\partial/\partial x$ je $y$ konstanta in obratno. Tangentna ravnina: $z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b)$.
:::

**Rešitev:**

1. $f_x = 2xy^3 - 4y$, $f_y = 3x^2y^2 - 4x$.
2. V točki $(1, -1)$: $f_x = 2 \cdot 1 \cdot (-1) - 4 \cdot (-1) = 2$, $f_y = 3 \cdot 1 \cdot 1 - 4 = -1$.
3. Drugi odvodi: $f_{xx} = 2y^3 = -2$, $f_{yy} = 6x^2y = -6$, $f_{xy} = \frac{\partial}{\partial y}(2xy^3 - 4y) = 6xy^2 - 4 = 2$, $f_{yx} = \frac{\partial}{\partial x}(3x^2y^2 - 4x) = 6xy^2 - 4 = 2$. Mešana odvoda sta enaka, kot pravi Schwarzev izrek.
4. $f(1, -1) = 1 \cdot (-1) - 4 \cdot (-1) + 5 = 8$. Tangentna ravnina: $z = 8 + 2(x - 1) - (y + 1)$, torej $z = 2x - y + 5$.
5. Ocena: $f(1{,}1;\,-0{,}9) \approx 2 \cdot 1{,}1 + 0{,}9 + 5 = 8{,}1$. Natančna vrednost je $8{,}078$, napaka približka je okoli $0{,}02$.
6. Odgovor: v točki $(1, -1)$ je $f_x = 2$, $f_y = -1$, $f_{xx} = -2$, $f_{yy} = -6$, $f_{xy} = f_{yx} = 2$; tangentna ravnina je $z = 2x - y + 5$, ocena je $f(1{,}1;\,-0{,}9) \approx 8{,}1$.

### Primer 2

Temperatura na tanki kovinski plošči je $T(x, y) = 100 - x^2 - 2y^2$ (v $^\circ\mathrm{C}$, koordinati v centimetrih). Mravlja je v točki $(1, 2)$. V kateri smeri naj se premakne, da se bo najhitreje segrevala, in kako hitro se temperatura spreminja v tej smeri? Kolikšna je sprememba temperature na centimeter, če gre v smeri vektorja $(3, 4)$? V kateri smeri se temperatura ne spreminja?

**Podatki:** $T(x, y) = 100 - x^2 - 2y^2$ ($^\circ\mathrm{C}$, $x$ in $y$ v $\mathrm{cm}$), točka $(1, 2)$, smer $(3, 4)$
**Iščemo:** smer najhitrejšega naraščanja in $|\nabla T|$, smerni odvod v smeri $(3, 4)$, smer nivojnice

:::formula
$\nabla T = (T_x, T_y)$, $\dfrac{\partial T}{\partial\vec{u}} = \nabla T \cdot \vec{u}$ z $|\vec{u}| = 1$; nivojnica je pravokotna na $\nabla T$
:::

**Rešitev:**

1. $T_x = -2x$, $T_y = -4y$, zato $\nabla T(1, 2) = (-2, -8)$, v $^\circ\mathrm{C/cm}$.
2. Smer najhitrejšega segrevanja je $\nabla T$, enotski vektor $(-2, -8)/\sqrt{68} \approx (-0{,}24;\,-0{,}97)$: mravlja naj gre proti izhodišču, predvsem v smeri $-y$.
3. Hitrost spreminjanja v tej smeri: $|\nabla T| = \sqrt{4 + 64} = \sqrt{68} \approx 8{,}25\,^\circ\mathrm{C/cm}$.
4. Smer $(3, 4)$ ima dolžino $5$, enotski vektor $\vec{u} = (0{,}6;\,0{,}8)$. Smerni odvod: $\nabla T \cdot \vec{u} = -2 \cdot 0{,}6 - 8 \cdot 0{,}8 = -7{,}6\,^\circ\mathrm{C/cm}$.
5. Temperatura se ne spreminja v smeri, pravokotni na gradient, na primer $(8, -2)$ oziroma $(4, -1)$: $(-2) \cdot 4 + (-8) \cdot (-1) = 0$ ✓.
6. Odgovor: najhitreje se segreva v smeri $(-2, -8)$, s hitrostjo okoli $8{,}2\,^\circ\mathrm{C}$ na centimeter; v smeri $(3, 4)$ se ohlaja za $7{,}6\,^\circ\mathrm{C}$ na centimeter; vzdolž smeri $(4, -1)$ (tangenta na nivojnico) se temperatura v prvem približku ne spreminja.

### Primer 3 (težji)

V posodi je $1{,}00\,\mathrm{mol}$ idealnega plina. Plin segrevamo tako, da temperatura narašča s hitrostjo $2{,}0\,\mathrm{K/s}$, hkrati pa se prostornina povečuje s hitrostjo $1{,}0 \cdot 10^{-4}\,\mathrm{m^3/s}$. V trenutku, ko je temperatura $300\,\mathrm{K}$ in prostornina $0{,}0250\,\mathrm{m^3}$, izračunaj tlak, oba parcialna odvoda tlaka in hitrost spreminjanja tlaka. Plinska konstanta je $8{,}314\,\mathrm{J/(mol\,K)}$.

**Podatki:** $n = 1{,}00\,\mathrm{mol}$, $\dot{T} = 2{,}0\,\mathrm{K/s}$, $\dot{V} = 1{,}0 \cdot 10^{-4}\,\mathrm{m^3/s}$, $T = 300\,\mathrm{K}$, $V = 0{,}0250\,\mathrm{m^3}$, $R = 8{,}314\,\mathrm{J/(mol\,K)}$, $p = nRT/V$
**Iščemo:** $p$, $\partial p/\partial T$, $\partial p/\partial V$, $\mathrm{d}p/\mathrm{d}t$

:::formula
$\dfrac{\mathrm{d}p}{\mathrm{d}t} = \dfrac{\partial p}{\partial T}\dfrac{\mathrm{d}T}{\mathrm{d}t} + \dfrac{\partial p}{\partial V}\dfrac{\mathrm{d}V}{\mathrm{d}t}$, $\dfrac{\partial p}{\partial T} = \dfrac{nR}{V}$, $\dfrac{\partial p}{\partial V} = -\dfrac{nRT}{V^2}$
:::

**Rešitev:**

1. Tlak: $p = 1{,}00 \cdot 8{,}314 \cdot 300/0{,}0250\,\mathrm{Pa} \approx 9{,}98 \cdot 10^4\,\mathrm{Pa}$.
2. $\partial p/\partial T = nR/V = 8{,}314/0{,}0250\,\mathrm{Pa/K} \approx 333\,\mathrm{Pa/K}$: za koliko se tlak poveča na kelvin pri stalni prostornini.
3. $\partial p/\partial V = -nRT/V^2 = -8{,}314 \cdot 300/0{,}0250^2\,\mathrm{Pa/m^3} \approx -3{,}99 \cdot 10^6\,\mathrm{Pa/m^3}$: pri stalni temperaturi tlak z večanjem prostornine pada.
4. Verižno pravilo: $\dot{p} = 332{,}6 \cdot 2{,}0 + (-3{,}99 \cdot 10^6) \cdot 1{,}0 \cdot 10^{-4}\,\mathrm{Pa/s} \approx 665 - 399\,\mathrm{Pa/s} = 266\,\mathrm{Pa/s}$.
5. Preizkus z logaritemskim odvodom: $\dot{p}/p = \dot{T}/T - \dot{V}/V = 2{,}0/300 - 10^{-4}/0{,}0250 = 0{,}00667 - 0{,}00400 = 0{,}00267\,\mathrm{s^{-1}}$, in $0{,}00267 \cdot 9{,}98 \cdot 10^4 \approx 266\,\mathrm{Pa/s}$ ✓.
6. Odgovor: tlak je okoli $99{,}8\,\mathrm{kPa}$, $\partial p/\partial T \approx 333\,\mathrm{Pa/K}$, $\partial p/\partial V \approx -3{,}99 \cdot 10^6\,\mathrm{Pa/m^3}$; tlak v tem trenutku narašča s hitrostjo okoli $266\,\mathrm{Pa/s}$, ker segrevanje prevlada nad širjenjem.

## Pogoste napake

- **Druga spremenljivka ni konstanta.** Pri $\partial(x^2y^3)/\partial x$ je $y^3$ konstanten faktor: rezultat je $2xy^3$, ne $2xy^3 + 3x^2y^2$. Vsota obeh delov je (pomnožena z $\mathrm{d}x$ in $\mathrm{d}y$) šele totalni diferencial.
- **Smerni odvod z neenotskim vektorjem.** Vektor smeri moraš najprej normirati. Z vektorjem $(3, 4)$ namesto $(0{,}6;\,0{,}8)$ bi v Primeru 2 dobil $-38$ namesto $-7{,}6$.
- **Gradient kot število.** Gradient je **vektor**; njegova dolžina je največja hitrost naraščanja, smer pa smer tega naraščanja.
- **Obstoj parcialnih odvodov pomeni diferenciabilnost.** Ne: funkcija ima lahko oba parcialna odvoda in ni niti zvezna (glej »Bolj natančno«).
- **Pozabljeni člen v verižnem pravilu.** Če je $z = f(x, y)$ in sta obe spremenljivki odvisni od $t$, sta v $\mathrm{d}z/\mathrm{d}t$ **dva** člena, po eden za vsako pot.
- **Napake se odštevajo.** Pri oceni največje napake seštevamo absolutne vrednosti prispevkov, ker se napake lahko seštejejo v najslabšo smer.

## Povzetek

- Parcialni odvod $\partial f/\partial x$: odvajamo po $x$, druge spremenljivke so konstante; geometrijsko naklon grafa v smeri osi $x$.
- Schwarz: pri zveznih mešanih odvodih je $f_{xy} = f_{yx}$.
- Diferenciabilnost: $f(a + h, b + k) = f(a, b) + f_xh + f_yk + o(\sqrt{h^2 + k^2})$; zadostuje, da sta parcialna odvoda zvezna. Tangentna ravnina $z = f + f_x(x - a) + f_y(y - b)$.
- Totalni diferencial $\mathrm{d}f = f_x\,\mathrm{d}x + f_y\,\mathrm{d}y$; največja napaka $\Delta f \le |f_x|\Delta x + |f_y|\Delta y$.
- Gradient $\nabla f = (f_x, f_y)$: smer najhitrejšega naraščanja, pravokoten na nivojnice; smerni odvod $\nabla f \cdot \vec{u}$, $|\vec{u}| = 1$.
- Verižno pravilo: $\dfrac{\mathrm{d}z}{\mathrm{d}t} = f_x\dot{x} + f_y\dot{y}$; implicitno $y' = -F_x/F_y$.

## Drugače: Na sliki

Nivojnice funkcije $T(x, y) = 100 - x^2 - 2y^2$ iz Primera 2 so elipse okoli izhodišča (vrh »hriba« je v $(0, 0)$, kjer je $T = 100$):

```
                y
                |
         .-----------.        T = 91 (skozi točko (1, 2))
       /    .-----.    \
      |    (  100  )    |  --- x
       \    '-----'    /
         '-----------'
                |
```

V točki $(1, 2)$ gradient $(-2, -8)$ kaže pravokotno na elipso navznoter, proti vrhu. Dolžina gradienta je velika tam, kjer so nivojnice gosto skupaj (strm breg), in majhna, kjer so redke (položen teren).

Parcialni odvod $f_x(a, b)$ si predstavljaj tako: graf prerežeš z navpično ravnino $y = b$, dobiš krivuljo in odčitaš njen naklon. Za $f_y$ prerežeš z ravnino $x = a$. Tangentna ravnina vsebuje obe tangenti teh dveh krivulj.

## Drugače: Iz vsakdanjega življenja

**Termodinamika.** Fizikalni kemiki pišejo parcialne odvode z oznako, katera spremenljivka je konstantna, na primer $\left(\frac{\partial p}{\partial T}\right)_V$. Toplotna kapaciteta pri stalni prostornini je $C_V = \left(\frac{\partial U}{\partial T}\right)_V$, termični razteznostni koeficient je $\beta = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_p$. Iz Schwarzevega izreka za mešane odvode termodinamičnih potencialov sledijo Maxwellove relacije, ki povezujejo količine, ki jih je težko izmeriti, s tistimi, ki jih izmerimo zlahka.

**Difuzija in toplotni tok.** Snov difundira v smeri, kjer koncentracija najhitreje pada: gostota difuzijskega toka je $\vec{j} = -D\,\nabla c$ (Fickov zakon). Toplota teče v smeri $-\nabla T$ (Fourierjev zakon). Tudi kemotaksa bakterij in gibanje celic proti viru hranil sledita gradientu koncentracije.

**Prenos napak v laboratoriju.** Gostoto kroglice izračunamo iz mase in premera, $\rho = 6m/(\pi d^3)$. Po pravilu za relativne napake je $\frac{\Delta\rho}{\rho} \le \frac{\Delta m}{m} + 3\frac{\Delta d}{d}$. Napaka premera šteje trikrat, zato je pomembneje natančno izmeriti premer kot maso.

**Zemljevid in pohodništvo.** Plastnice na planinski karti so nivojnice nadmorske višine. Najbolj strma pot navzgor gre pravokotno na plastnice (v smeri gradienta), vodoravna pot po pobočju pa ob plastnici. Vodni tok teče v smeri $-\nabla h$.

## Drugače: Korak za korakom s številkami

Valj ima izmerjen polmer $r = (2{,}00 \pm 0{,}02)\,\mathrm{cm}$ in višino $h = (10{,}0 \pm 0{,}1)\,\mathrm{cm}$. Kolikšna je njegova prostornina in s kolikšno največjo napako jo poznamo?

1. **Funkcija:** $V(r, h) = \pi r^2h$, $V = \pi \cdot 4{,}00 \cdot 10{,}0\,\mathrm{cm^3} \approx 125{,}7\,\mathrm{cm^3}$.
2. **Parcialna odvoda:** $\partial V/\partial r = 2\pi rh = 2\pi \cdot 2{,}00 \cdot 10{,}0\,\mathrm{cm^2} \approx 125{,}7\,\mathrm{cm^2}$, $\partial V/\partial h = \pi r^2 \approx 12{,}57\,\mathrm{cm^2}$.
3. **Prispevka napak:** zaradi polmera $125{,}7 \cdot 0{,}02 \approx 2{,}51\,\mathrm{cm^3}$, zaradi višine $12{,}57 \cdot 0{,}1 \approx 1{,}26\,\mathrm{cm^3}$.
4. **Največja napaka:** $\Delta V \approx 2{,}51 + 1{,}26 = 3{,}77\,\mathrm{cm^3}$, kar je $3{,}0\,\%$ prostornine.
5. **Preizkus z relativnimi napakami:** $\frac{\Delta V}{V} = 2\frac{\Delta r}{r} + \frac{\Delta h}{h} = 2 \cdot 1\,\% + 1\,\% = 3\,\%$ ✓.
6. **Rezultat:** $V = (126 \pm 4)\,\mathrm{cm^3}$. Natančna vrednost pri $r = 2{,}02\,\mathrm{cm}$ in $h = 10{,}1\,\mathrm{cm}$ je $129{,}5\,\mathrm{cm^3}$, kar se z oceno $125{,}7 + 3{,}8$ dobro ujema.

## Drugače: Bolj natančno

**Parcialni odvodi brez diferenciabilnosti.** Naj bo $f(x, y) = \dfrac{xy}{x^2 + y^2}$ za $(x, y) \ne (0, 0)$ in $f(0, 0) = 0$. Na obeh oseh je $f = 0$, zato je $f_x(0, 0) = \lim_{h \to 0}\frac{f(h, 0) - f(0, 0)}{h} = 0$ in prav tako $f_y(0, 0) = 0$. Vzdolž premice $y = x$ pa je $f(x, x) = 1/2$ za vsak $x \ne 0$, zato $f$ v izhodišču ni niti zvezna in ne more biti diferenciabilna.

**Zadosten pogoj za diferenciabilnost.** Naj bosta $f_x$ in $f_y$ zvezna v okolici $(a, b)$. Spremembo razdelimo na dva koraka:

$$f(a + h, b + k) - f(a, b) = [f(a + h, b + k) - f(a, b + k)] + [f(a, b + k) - f(a, b)].$$

Po Lagrangeevem izreku je prvi oklepaj $f_x(a + \theta_1h, b + k)\,h$, drugi $f_y(a, b + \theta_2k)\,k$ za neka $\theta_1, \theta_2 \in (0, 1)$. Zaradi zveznosti je $f_x(a + \theta_1h, b + k) = f_x(a, b) + \varepsilon_1$ in $f_y(a, b + \theta_2k) = f_y(a, b) + \varepsilon_2$, kjer $\varepsilon_1, \varepsilon_2 \to 0$, ko $(h, k) \to (0, 0)$. Ostanek $\varepsilon_1h + \varepsilon_2k$ po absolutni vrednosti ni večji od $(|\varepsilon_1| + |\varepsilon_2|)\sqrt{h^2 + k^2}$, torej je $o(\sqrt{h^2 + k^2})$. $\blacksquare$

**Diferenciabilnost z $\varepsilon$-$\delta$.** Natančno: $f$ je diferenciabilna v $(a, b)$, če obstajata števili $A$, $B$, da za vsak $\varepsilon > 0$ obstaja $\delta > 0$, tako da za $0 < \sqrt{h^2 + k^2} < \delta$ velja $|f(a + h, b + k) - f(a, b) - Ah - Bk| < \varepsilon\sqrt{h^2 + k^2}$. Z izbiro $k = 0$ sledi $A = f_x(a, b)$, z izbiro $h = 0$ pa $B = f_y(a, b)$.

**Dokaz verižnega pravila.** Naj bo $f$ diferenciabilna v $(x(t), y(t))$. Za prirastek $\Delta t$ označimo $h = x(t + \Delta t) - x(t)$, $k = y(t + \Delta t) - y(t)$. Iz definicije diferenciabilnosti je $\frac{z(t + \Delta t) - z(t)}{\Delta t} = f_x\frac{h}{\Delta t} + f_y\frac{k}{\Delta t} + \frac{o(\sqrt{h^2 + k^2})}{\Delta t}$. Ko $\Delta t \to 0$, gre $h/\Delta t \to \dot{x}$, $k/\Delta t \to \dot{y}$, zadnji člen pa proti $0$, ker je $\sqrt{h^2 + k^2}/|\Delta t|$ omejen.

**Zakaj gradient kaže navzgor.** Po Cauchy-Schwarzevi neenakosti je $|\nabla f \cdot \vec{u}| \le |\nabla f|\,|\vec{u}| = |\nabla f|$, enakost pa velja natanko pri $\vec{u}$, vzporednem z $\nabla f$. Največja vrednost smernega odvoda je torej $|\nabla f|$ in jo dosežemo pri $\vec{u} = \nabla f/|\nabla f|$.

## Preveri se

? Kolikšen je parcialni odvod $\partial f/\partial x$ funkcije $f(x, y) = x^2y$?
- $x^2$
+ $2xy$
- $2xy + x^2$
> Pri odvajanju po $x$ je $y$ konstanta: $\partial(x^2y)/\partial x = 2x \cdot y$. $x^2$ je odvod po $y$.

? Kolikšen je gradient funkcije $f(x, y) = x^2 + 3xy$ v točki $(1, 2)$?
- $(2, 3)$
+ $(8, 3)$
- $(8, 6)$
> $f_x = 2x + 3y = 2 + 6 = 8$, $f_y = 3x = 3$.

? Gradient funkcije v neki točki ima dolžino $5$. Kolikšna je največja možna vrednost smernega odvoda v tej točki?
- $1$
- $25$
+ $5$
> Smerni odvod je $|\nabla f|\cos\varphi$; največji je v smeri gradienta, ko je $\cos\varphi = 1$.

? Naj bo $z = x^2 + y^2$, kjer je $x = \cos t$ in $y = \sin t$. Kolikšen je $\mathrm{d}z/\mathrm{d}t$?
+ $0$
- $2$
- $4\sin t\cos t$
> $\dot{z} = 2x\dot{x} + 2y\dot{y} = -2\cos t\sin t + 2\sin t\cos t = 0$. Točka se giblje po krožnici, ki je nivojnica funkcije $z$.

:::simboli
f | funkcija dveh spremenljivk | | | z = f(x, y)
x, y | neodvisni spremenljivki (koordinati točke) | | | pri implicitnem odvajanju je y = y(x)
a, b | koordinati točke (a, b), v kateri odvajamo | | |
f_x | parcialni odvod funkcije f po x | f_x = \frac{\partial f}{\partial x} | | y držimo konstanten
f_y | parcialni odvod funkcije f po y | f_y = \frac{\partial f}{\partial y} | | x držimo konstanten
h, k | prirastka spremenljivk x in y | | |
o | ostanek, ki gre proti 0 hitreje od argumenta (mali o) | | |
z | vrednost funkcije (višina nad ravnino xy) | z = f(x, y) | |
\Delta f | največja absolutna napaka rezultata | \Delta f \le \lvert f_x\rvert\,\Delta x + \lvert f_y\rvert\,\Delta y | |
\Delta x | absolutna napaka meritve x | | |
\Delta y | absolutna napaka meritve y | | |
\vec{u} | enotski vektor smeri | | | |u| = 1
\varphi | kot med gradientom in smerjo vektorja u | | |
t | parameter, od katerega sta odvisna x in y | | | pogosto čas
\dot{x} | odvod x po t | \dot{x} = \frac{\mathrm{d}x}{\mathrm{d}t} | |
\dot{y} | odvod y po t | \dot{y} = \frac{\mathrm{d}y}{\mathrm{d}t} | |
u, v | spremenljivki, od katerih sta odvisna x in y | | | x = x(u, v), y = y(u, v)
F_x | parcialni odvod funkcije F po x | F_x = \frac{\partial F}{\partial x} | | krivulja je F(x, y) = 0
F_y | parcialni odvod funkcije F po y | F_y = \frac{\partial F}{\partial y} | | pogoj: F_y ≠ 0
y' | odvod implicitno podane funkcije y(x) | y' = -\frac{F_x}{F_y} | |
T | temperatura na plošči | | °C | v zgledu T(x, y) = 100 − x² − 2y²; pri plinu v K
T_x | parcialni odvod temperature po x | T_x = \frac{\partial T}{\partial x} | °C/cm
T_y | parcialni odvod temperature po y | T_y = \frac{\partial T}{\partial y} | °C/cm
p | tlak idealnega plina | p = \frac{nRT}{V} | Pa
V | prostornina plina | | m^3
n | množina plina | | mol | tudi število spremenljivk funkcije
R | splošna plinska konstanta | | J/(mol K) | 8,314 J/(mol K)
:::
