---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

V pravokotnem trikotniku s Pitagorovim izrekom izračunaš tretjo stranico, če poznaš drugi dve. Kaj pa, če poznaš le eno stranico in en ostri kot? Ali če poznaš dve stranici, zanima pa te kot? Pitagorov izrek tu ne pomaga, saj v njem kotov sploh ni.

Pri podobnosti si spoznal, da imajo podobni trikotniki enaka razmerja ustreznih stranic. Vsi pravokotni trikotniki z istim ostrim kotom $\alpha$ so podobni (ujemajo se v dveh kotih), zato je razmerje dveh njihovih stranic odvisno **samo od kota**. Tem razmerjem rečemo **kotne funkcije**: sinus, kosinus in tangens. Z njimi izračunaš višino stolpa, ne da bi splezal nanj, naklon klanca, dolžino lestve ali razdaljo do ladje na morju. Uporabljajo jih geodeti, gradbeniki, piloti in fiziki pri razstavljanju sil. Kako se razmerja spreminjajo, ko spreminjaš kot, si oglej v interaktivni simulaciji spodaj (»Kotne funkcije v pravokotnem trikotniku«).

## Razlaga

**1. Oznake.** Pravokotni trikotnik $ABC$ ima pravi kot pri oglišču $C$, torej $\gamma = 90^\circ$. Hipotenuza je $c$, kateti sta $a$ (nasproti kota $\alpha$) in $b$ (nasproti kota $\beta$). Ostra kota sta komplementarna: $\alpha + \beta = 90^\circ$.

Glede na ostri kot $\alpha$ imata kateti posebni imeni:

- **nasprotna kateta** kota $\alpha$ leži nasproti kota, to je $a$,
- **priležna kateta** kota $\alpha$ je krak kota, to je $b$.

Za kot $\beta$ se vlogi zamenjata: zanj je $b$ nasprotna, $a$ pa priležna kateta. Hipotenuza ni nikoli kateta.

**2. Definicije.** Za ostri kot $\alpha$ v pravokotnem trikotniku definiramo:

$$\sin \alpha = \frac{\text{nasprotna kateta}}{\text{hipotenuza}} = \frac{a}{c}, \qquad \cos \alpha = \frac{\text{priležna kateta}}{\text{hipotenuza}} = \frac{b}{c},$$

$$\tan \alpha = \frac{\text{nasprotna kateta}}{\text{priležna kateta}} = \frac{a}{b}.$$

Za kot $\beta$ velja $\sin \beta = \dfrac{b}{c}$, $\cos \beta = \dfrac{a}{c}$, $\tan \beta = \dfrac{b}{a}$. Tangens ponekod pišejo tudi $\operatorname{tg} \alpha$. Obratna vrednost tangensa je **kotangens**, $\cot \alpha = \dfrac{b}{a}$.

**3. Vrednosti so med $0$ in $1$.** Kateta je vedno krajša od hipotenuze, zato za ostri kot velja $0 < \sin \alpha < 1$ in $0 < \cos \alpha < 1$. Tangens je lahko poljubno pozitivno število: pri $45^\circ$ sta kateti enaki in je $\tan 45^\circ = 1$, pri kotih blizu $90^\circ$ je tangens zelo velik.

**4. Zveze med kotnimi funkcijami istega kota.** Iz definicij in Pitagorovega izreka $a^2 + b^2 = c^2$ sledi:

$$\sin^2 \alpha + \cos^2 \alpha = 1, \qquad \tan \alpha = \frac{\sin \alpha}{\cos \alpha}.$$

Zapis $\sin^2 \alpha$ pomeni $(\sin \alpha)^2$. Prvo zvezo dobimo tako, da Pitagorov izrek delimo s $c^2$: $\left(\dfrac{a}{c}\right)^2 + \left(\dfrac{b}{c}\right)^2 = 1$.

**5. Komplementarna kota.** Ker je nasprotna kateta kota $\alpha$ priležna kateta kota $\beta = 90^\circ - \alpha$, velja

$$\sin \alpha = \cos (90^\circ - \alpha), \qquad \cos \alpha = \sin (90^\circ - \alpha).$$

Na primer $\sin 30^\circ = \cos 60^\circ$.

**6. Posebne vrednosti.** Za kote $30^\circ$, $45^\circ$ in $60^\circ$ poznamo natančne vrednosti (izpeljava je v razdelku »Drugače: Korak za korakom s številkami«):

| $\alpha$ | $30^\circ$ | $45^\circ$ | $60^\circ$ |
|---|---|---|---|
| $\sin \alpha$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ |
| $\cos \alpha$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ |
| $\tan \alpha$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ |

**7. Računalo.** Za druge kote vrednosti izračunamo z računalom, ki mora biti nastavljeno na **stopinje** (način DEG). Če poznamo vrednost kotne funkcije in iščemo kot, uporabimo tipko $\sin^{-1}$, $\cos^{-1}$ ali $\tan^{-1}$ (pogosto s tipko SHIFT). Na primer iz $\sin \alpha = 0{,}5$ dobimo $\alpha = 30^\circ$. Kote zapisujemo v stopinjah in minutah: $1^\circ = 60'$, zato je $22{,}62^\circ \approx 22^\circ 37'$.

**8. Reševanje pravokotnega trikotnika.** Trikotnik je določen, če poznamo dve stranici ali eno stranico in en ostri kot. Postopek:

- skiciraj trikotnik in označi dane količine,
- za iskano količino izberi kotno funkcijo, ki povezuje **dano** količino in **iskano** količino,
- izrazi neznanko in izračunaj; drugi ostri kot dobiš iz $\beta = 90^\circ - \alpha$, tretjo stranico tudi s Pitagorovim izrekom.

## Rešeni primeri

### Primer 1 (lažji)

Pravokotni trikotnik ima kateti $a = 5\,\text{cm}$ in $b = 12\,\text{cm}$. Izračunaj hipotenuzo, vrednosti $\sin \alpha$, $\cos \alpha$ in $\tan \alpha$ ter kot $\alpha$ na stotinko stopinje natančno.

**Podatki:** $a = 5\,\text{cm}$, $b = 12\,\text{cm}$, $\gamma = 90^\circ$; kot zaokrožimo na stotinko stopinje
**Iščemo:** hipotenuzo $c$, $\sin \alpha$, $\cos \alpha$, $\tan \alpha$ in kot $\alpha$

:::formula
$c^2 = a^2 + b^2$; $\;\sin \alpha = \dfrac{a}{c}$, $\;\cos \alpha = \dfrac{b}{c}$, $\;\tan \alpha = \dfrac{a}{b}$
:::

**Rešitev:**

1. Hipotenuza: $c = \sqrt{5^2 + 12^2}\,\text{cm} = \sqrt{169}\,\text{cm} = 13\,\text{cm}$.
2. $\sin \alpha = \dfrac{5}{13} \approx 0{,}3846$, $\;\cos \alpha = \dfrac{12}{13} \approx 0{,}9231$, $\;\tan \alpha = \dfrac{5}{12} \approx 0{,}4167$.
3. Kot izračunamo iz tangensa, ker vsebuje dani količini: $\alpha = \tan^{-1} \dfrac{5}{12} \approx 22{,}62^\circ$.
4. Preverjanje: $\sin^2 \alpha + \cos^2 \alpha = \dfrac{25}{169} + \dfrac{144}{169} = 1$. ✓
5. Odgovor: hipotenuza meri $13\,\text{cm}$, $\sin \alpha = \dfrac{5}{13}$, $\cos \alpha = \dfrac{12}{13}$, $\tan \alpha = \dfrac{5}{12}$ in $\alpha \approx 22{,}62^\circ$ (približno $22^\circ 37'$).

### Primer 2 (srednji)

V pravokotnem trikotniku je hipotenuza $c = 8\,\text{cm}$, ostri kot pa $\alpha = 35^\circ$. Izračunaj kateti, drugi ostri kot in ploščino. Dolžini zaokroži na stotinko centimetra.

**Podatki:** $c = 8\,\text{cm}$, $\alpha = 35^\circ$, $\gamma = 90^\circ$; zaokrožimo na stotinke
**Iščemo:** kateti $a$ in $b$, kot $\beta$ in ploščino $S$

:::formula
$a = c \cdot \sin \alpha$, $\;b = c \cdot \cos \alpha$, $\;\beta = 90^\circ - \alpha$, $\;S = \dfrac{a \cdot b}{2}$
:::

**Rešitev:**

1. Kateta $a$ je nasprotna kotu $\alpha$, dana je hipotenuza, zato uporabimo sinus: $\sin \alpha = \dfrac{a}{c}$, torej $a = c \sin \alpha = 8\,\text{cm} \cdot \sin 35^\circ \approx 8\,\text{cm} \cdot 0{,}5736 \approx 4{,}59\,\text{cm}$.
2. Kateta $b$ je priležna, zato kosinus: $b = c \cos \alpha = 8\,\text{cm} \cdot \cos 35^\circ \approx 8\,\text{cm} \cdot 0{,}8192 \approx 6{,}55\,\text{cm}$.
3. Drugi ostri kot: $\beta = 90^\circ - 35^\circ = 55^\circ$.
4. Ploščina (računamo z nezaokroženima katetama): $S = \dfrac{a \cdot b}{2} \approx \dfrac{4{,}5886 \cdot 6{,}5532}{2}\,\text{cm}^2 \approx 15{,}04\,\text{cm}^2$.
5. Preverjanje s Pitagorovim izrekom: $4{,}5886^2 + 6{,}5532^2 \approx 21{,}06 + 42{,}94 = 64 = 8^2$. ✓
6. Odgovor: kateti merita približno $4{,}59\,\text{cm}$ in $6{,}55\,\text{cm}$, drugi ostri kot je $55^\circ$, ploščina pa je približno $15{,}04\,\text{cm}^2$.

### Primer 3 (težji)

Z ravnega terena opazujemo vrh navpičnega stolpa pod kotom $30^\circ$ glede na vodoravnico. Ko se stolpu po ravnem približamo za $20\,\text{m}$, vidimo vrh pod kotom $45^\circ$. Kako visok je stolp? Višino oči zanemari, rezultat zapiši natančno in na centimeter natančno.

**Podatki:** prvi kot $\alpha_1 = 30^\circ$, drugi kot $\alpha_2 = 45^\circ$, premik $20\,\text{m}$ proti stolpu, teren je raven, višino oči zanemarimo; rezultat natančno in na centimeter natančno
**Iščemo:** višino stolpa $h$

:::formula
$\tan \alpha = \dfrac{\text{nasprotna kateta}}{\text{priležna kateta}}$; $\;\tan 45^\circ = 1$, $\;\tan 30^\circ = \dfrac{\sqrt{3}}{3} = \dfrac{1}{\sqrt{3}}$
:::

**Rešitev:**

1. Naj bo $d$ razdalja od bližjega opazovališča do vznožja stolpa. Daljše opazovališče je od vznožja oddaljeno $d + 20\,\text{m}$. Nastaneta dva pravokotna trikotnika s skupno kateto $h$.
2. Iz bližjega mesta: $\tan 45^\circ = \dfrac{h}{d}$, torej $h = d$.
3. Iz daljšega mesta: $\tan 30^\circ = \dfrac{h}{d + 20}$, torej $h = \dfrac{d + 20}{\sqrt{3}}$.
4. Ker je $h = d$, dobimo $\sqrt{3}\,h = h + 20$, torej $h(\sqrt{3} - 1) = 20$ in $h = \dfrac{20}{\sqrt{3} - 1}\,\text{m}$.
5. Racionaliziramo imenovalec: $h = \dfrac{20(\sqrt{3} + 1)}{3 - 1}\,\text{m} = 10(\sqrt{3} + 1)\,\text{m} \approx 27{,}32\,\text{m}$.
6. Preverjanje: daljše opazovališče je od vznožja oddaljeno $47{,}32\,\text{m}$, $\;47{,}32 \cdot \tan 30^\circ \approx 47{,}32 \cdot 0{,}5774 \approx 27{,}32$. ✓
7. Odgovor: stolp je visok $10(\sqrt{3} + 1)\,\text{m}$, to je približno $27{,}32\,\text{m}$.

## Pogoste napake

- **Zamenjana nasprotna in priležna kateta.** Ime katete je odvisno od kota, ki ga opazuješ. Za kot $\alpha$ je $a$ nasprotna, za kot $\beta$ pa priležna. Pravilno: najprej v skici označi kot, nato poišči kateto, ki **leži nasproti** kota, in kateto, ki je **krak** kota.
- **Računalo v radianih.** Če dobiš $\sin 30^\circ \approx -0{,}988$, je računalo nastavljeno na radiane (RAD). Nastavi ga na stopinje (DEG) in preveri: $\sin 30^\circ = 0{,}5$.
- **$\sin^{-1}$ ni obratna vrednost.** Tipka $\sin^{-1}$ iz vrednosti vrne **kot**, ne pa $\dfrac{1}{\sin \alpha}$. Iz $\sin \alpha = 0{,}5$ dobiš $\alpha = 30^\circ$, medtem ko je $\dfrac{1}{\sin 30^\circ} = 2$.
- **Deljenje namesto množenja.** Iz $\sin \alpha = \dfrac{a}{c}$ sledi $a = c \cdot \sin \alpha$, ne $a = \dfrac{c}{\sin \alpha}$. Preveri smiselnost: kateta mora biti krajša od hipotenuze, pri $c = 8\,\text{cm}$ in $\alpha = 35^\circ$ bi napačna formula dala $13{,}95\,\text{cm}$.
- **Definicije v trikotniku, ki ni pravokoten.** Razmerja $\dfrac{a}{c}$ in $\dfrac{b}{c}$ veljajo le v pravokotnem trikotniku, kjer je $c$ hipotenuza. V drugih trikotnikih najprej poišči ali nariši višino, ki razdeli lik na pravokotne trikotnike.

## Povzetek

- Pravokotni trikotnik: $\gamma = 90^\circ$, hipotenuza $c$, kateti $a$ in $b$, $\alpha + \beta = 90^\circ$.
- $\sin \alpha = \dfrac{a}{c}$ (nasprotna/hipotenuza), $\cos \alpha = \dfrac{b}{c}$ (priležna/hipotenuza), $\tan \alpha = \dfrac{a}{b}$ (nasprotna/priležna).
- $\sin^2 \alpha + \cos^2 \alpha = 1$, $\;\tan \alpha = \dfrac{\sin \alpha}{\cos \alpha}$, $\;\sin \alpha = \cos (90^\circ - \alpha)$.
- Posebne vrednosti: $\sin 30^\circ = \cos 60^\circ = \dfrac{1}{2}$, $\sin 45^\circ = \cos 45^\circ = \dfrac{\sqrt{2}}{2}$, $\tan 45^\circ = 1$, $\tan 60^\circ = \sqrt{3}$.
- Za ostri kot je $0 < \sin \alpha, \cos \alpha < 1$, $\tan \alpha > 0$.
- Iz stranice in kota: $a = c \sin \alpha$, $b = c \cos \alpha$, $a = b \tan \alpha$; kot iz razmerja s $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$ (računalo v stopinjah).

## Drugače: Na sliki

Nariši pravokotni trikotnik, katerega hipotenuza meri natanko $1$ (na primer $1\,\text{dm}$). Ostri kot $\alpha$ naj bo v levem spodnjem oglišču, priležna kateta naj leži vodoravno, nasprotna pa navpično. Ker je $c = 1$, velja $\sin \alpha = \dfrac{a}{1} = a$ in $\cos \alpha = b$. Sinus je torej kar **višina** trikotnika, kosinus pa njegova **dolžina** po tleh.

Zdaj si predstavljaj, da hipotenuzo vrtiš okoli levega oglišča kot kazalec. Ko se kot $\alpha$ veča, se višina (sinus) veča, dolžina po tleh (kosinus) pa manjša. Pri $45^\circ$ sta enaki, pri kotu blizu $90^\circ$ je trikotnik skoraj navpična črta: sinus je skoraj $1$, kosinus skoraj $0$. Tangens si predstavljaj kot strmino hipotenuze: za koliko se dvigne, ko gre za $1$ v vodoravni smeri. V interaktivni simulaciji spodaj spreminjaj kot in opazuj, kako se dolžine stranic in vrednosti kotnih funkcij spreminjajo skupaj.

## Drugače: Iz vsakdanjega življenja

Na prometnem znaku pred klancem piše $10\,\%$. To pomeni, da se cesta na $100\,\text{m}$ vodoravne razdalje dvigne za $10\,\text{m}$. Odstotek naklona je torej **tangens** kota, pod katerim se cesta vzpenja: $\tan \alpha = \dfrac{10}{100} = 0{,}1$, zato je $\alpha = \tan^{-1} 0{,}1 \approx 5{,}71^\circ$. Klanec z $10\,\%$ je torej precej položnejši, kot bi mislil po občutku, ko ga prevoziš s kolesom.

Druga vsakdanja uporaba je lestev. Varno postavljena lestev naj s tlemi oklepa kot približno $70^\circ$ do $75^\circ$. Lestev, dolga $5\,\text{m}$, pod kotom $70^\circ$ seže do višine $5\,\text{m} \cdot \sin 70^\circ \approx 4{,}70\,\text{m}$, njeno vznožje pa je od stene oddaljeno $5\,\text{m} \cdot \cos 70^\circ \approx 1{,}71\,\text{m}$. Lestev je hipotenuza, stena in tla pa sta kateti. Podobno računajo tesarji pri strehah, kjer je naklon strehe kot med strešino in vodoravnico.

## Drugače: Korak za korakom s številkami

**Od kod vrednosti za $45^\circ$.**

1. Vzemi kvadrat s stranico $1$ in nariši diagonalo. Nastane enakokraki pravokotni trikotnik s kotoma $45^\circ$.
2. Kateti merita $1$, hipotenuza po Pitagorovem izreku $\sqrt{1 + 1} = \sqrt{2}$.
3. $\sin 45^\circ = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2} \approx 0{,}7071$, enako $\cos 45^\circ$, $\tan 45^\circ = \dfrac{1}{1} = 1$.

**Od kod vrednosti za $30^\circ$ in $60^\circ$.**

1. Vzemi enakostranični trikotnik s stranico $2$. Vsi njegovi koti merijo $60^\circ$.
2. Nariši višino na osnovnico. Razdeli trikotnik na dva pravokotna trikotnika s koti $30^\circ$, $60^\circ$ in $90^\circ$.
3. V vsakem je hipotenuza $2$, krajša kateta (polovica osnovnice) $1$, višina pa $\sqrt{4 - 1} = \sqrt{3}$.
4. Krajša kateta leži nasproti kota $30^\circ$: $\sin 30^\circ = \dfrac{1}{2}$, $\cos 30^\circ = \dfrac{\sqrt{3}}{2} \approx 0{,}8660$, $\tan 30^\circ = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3} \approx 0{,}5774$.
5. Za kot $60^\circ$ se kateti zamenjata: $\sin 60^\circ = \dfrac{\sqrt{3}}{2}$, $\cos 60^\circ = \dfrac{1}{2}$, $\tan 60^\circ = \sqrt{3} \approx 1{,}7321$.

## Drugače: Bolj natančno

**Zakaj so kotne funkcije sploh funkcije kota.** Naj imata pravokotna trikotnika $ABC$ in $A'B'C'$ enak ostri kot $\alpha$. Ker se ujemata še v pravem kotu, sta po izreku KK podobna, zato je $\dfrac{a'}{a} = \dfrac{c'}{c} = k$. Sledi $\dfrac{a'}{c'} = \dfrac{k a}{k c} = \dfrac{a}{c}$. Razmerje torej ni odvisno od velikosti trikotnika, ampak le od kota, in vsakemu ostremu kotu priredi natanko eno število. Brez podobnosti definicija ne bi bila smiselna.

**Iz ene vrednosti vse ostale.** Če za ostri kot poznamo eno kotno funkcijo, druge izračunamo brez računanja kota. Iz $\sin \alpha = \dfrac{3}{5}$ sledi $\cos \alpha = \sqrt{1 - \dfrac{9}{25}} = \dfrac{4}{5}$ (pozitivni koren, ker je kot oster) in $\tan \alpha = \dfrac{3/5}{4/5} = \dfrac{3}{4}$. Iz zvez sledi še $1 + \tan^2 \alpha = \dfrac{1}{\cos^2 \alpha}$: prvo zvezo delimo s $\cos^2 \alpha$.

**Monotonost.** Pri stalni hipotenuzi se z večanjem kota $\alpha$ nasprotna kateta veča, priležna manjša. Zato na intervalu $(0^\circ, 90^\circ)$ sinus in tangens naraščata, kosinus pa pada. Zaradi tega iz vrednosti kotne funkcije ostri kot določimo enolično.

## Preveri se

? Pravokotni trikotnik ima kateti $a = 3$, $b = 4$ in hipotenuzo $c = 5$. Koliko je $\sin \alpha$?
+ $\dfrac{3}{5}$
- $\dfrac{4}{5}$
- $\dfrac{3}{4}$
- $\dfrac{4}{3}$
> Sinus je razmerje med nasprotno kateto in hipotenuzo: $\sin \alpha = \dfrac{a}{c} = \dfrac{3}{5}$. Vrednost $\dfrac{4}{5}$ je $\cos \alpha$, $\dfrac{3}{4}$ pa $\tan \alpha$.

? Koliko je $\cos 60^\circ$?
- $\dfrac{\sqrt{3}}{2}$
+ $\dfrac{1}{2}$
- $\dfrac{\sqrt{2}}{2}$
- $\sqrt{3}$
> $\cos 60^\circ = \sin 30^\circ = \dfrac{1}{2}$. V trikotniku s koti $30^\circ$, $60^\circ$, $90^\circ$ je priležna kateta kota $60^\circ$ polovica hipotenuze.

? Lestev, dolga $5\,\text{m}$, je naslonjena na steno in s tlemi oklepa kot $70^\circ$. Kako visoko seže?
- približno $1{,}71\,\text{m}$
+ približno $4{,}70\,\text{m}$
- približno $13{,}74\,\text{m}$
> Lestev je hipotenuza, višina je nasprotna kateta kota ob tleh: $h = 5\,\text{m} \cdot \sin 70^\circ \approx 4{,}70\,\text{m}$. Vrednost $1{,}71\,\text{m}$ je razdalja vznožja od stene (kosinus).

? Za ostri kot $\alpha$ velja $\sin \alpha = 0{,}6$. Koliko je $\cos \alpha$?
- $0{,}4$
- $0{,}75$
+ $0{,}8$
- $0{,}36$
> Iz $\sin^2 \alpha + \cos^2 \alpha = 1$ sledi $\cos \alpha = \sqrt{1 - 0{,}36} = \sqrt{0{,}64} = 0{,}8$. Napaka $0{,}4$ nastane, če pozabiš kvadrirati.
