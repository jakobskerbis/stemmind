---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Naravna števila uporabljaš, odkar znaš šteti, cela števila pa poznaš iz temperatur pod ničlo, dolgov in nadstropij pod zemljo. V osnovni šoli si spoznal tudi deljivost, praštevila ter največji skupni delitelj in najmanjši skupni večkratnik. V prejšnji temi si spoznal jezik množic: naravna in cela števila sta primera neskončnih množic, delitelji danega števila pa so končna množica.

V srednji šoli to znanje ne ostane pri računanju po receptih, ampak ga zgradimo natančneje: z definicijo deljivosti, z deljenjem z ostankom in z Evklidovim algoritmom, ki največji skupni delitelj poišče tudi pri velikih številih, kjer je razcep na prafaktorje prezamuden. Deljivost potrebuješ pri krajšanju ulomkov in iskanju skupnega imenovalca, pri nalogah o ponavljajočih se dogodkih, pri razdeljevanju na enake dele in celo pri varnem spletnem plačevanju: šifriranje temelji na tem, da je produkt dveh velikih praštevil zelo težko spet razcepiti.

## Razlaga

**1. Naravna števila.** Množico naravnih števil pišemo $\mathbb{N} = \{1, 2, 3, \dots\}$, z ničlo pa $\mathbb{N}_0 = \{0, 1, 2, 3, \dots\}$. Vsota in produkt dveh naravnih števil sta spet naravni števili, razlika pa ne vedno: $3 - 5$ ni naravno število.

**2. Cela števila.** Množica celih števil je $\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$ in velja $\mathbb{N} \subset \mathbb{N}_0 \subset \mathbb{Z}$. Vsako celo število $a$ ima nasprotno število $-a$, za katero je $a + (-a) = 0$. **Absolutna vrednost** $|a|$ je razdalja števila $a$ od $0$ na številski premici, na primer $|-5| = 5$. V $\mathbb{Z}$ lahko vedno seštevamo, odštevamo in množimo, deliti pa ne vedno ($7 : 2$ ni celo število). Odštevanje je prištevanje nasprotnega števila: $a - (-b) = a + b$. Produkt dveh števil z enakim predznakom je pozitiven, z različnima predznakoma pa negativen.

**3. Deljivost.** Celo število $a \neq 0$ **deli** celo število $b$, zapisano $a \mid b$, če obstaja tako celo število $k$, da je $b = k \cdot a$. Pravimo tudi, da je $a$ *delitelj* števila $b$ in da je $b$ *večkratnik* števila $a$. Na primer $4 \mid 28$, ker je $28 = 7 \cdot 4$, in $-3 \mid 12$, ker je $12 = (-4) \cdot (-3)$, medtem ko $7 \nmid 30$. Veljajo naslednje lastnosti:

- $1 \mid b$ za vsak $b$, ter $a \mid a$ in $a \mid 0$ za vsak $a \neq 0$,
- če $a \mid b$ in $a \mid c$, potem $a \mid (b + c)$ in $a \mid (b - c)$ (iz $b = ka$ in $c = la$ sledi $b \pm c = (k \pm l)a$),
- če $a \mid b$ in $b \mid c$, potem $a \mid c$.

**4. Merila za deljivost.**

| Delitelj | Merilo | Primer |
|---|---|---|
| $2$ | zadnja števka je $0, 2, 4, 6$ ali $8$ | $1\,358$ |
| $3$ | vsota števk je deljiva s $3$ | $4\,521$ ($4+5+2+1=12$) |
| $4$ | zadnji dve števki tvorita število, deljivo s $4$ | $7\,316$ ($16 = 4 \cdot 4$) |
| $5$ | zadnja števka je $0$ ali $5$ | $2\,045$ |
| $6$ | deljivo z $2$ in s $3$ | $1\,332$ |
| $8$ | zadnje tri števke tvorijo število, deljivo z $8$ | $5\,120$ ($120 = 8 \cdot 15$) |
| $9$ | vsota števk je deljiva z $9$ | $6\,354$ ($6+3+5+4=18$) |
| $10$ | zadnja števka je $0$ | $830$ |

Če sta števili $m$ in $n$ tuji (nimata skupnega delitelja razen $1$) in obe delita $b$, potem tudi njun produkt $m \cdot n$ deli $b$. Zato je število deljivo s $6$, če je deljivo z $2$ in s $3$, ter s $36$, če je deljivo s $4$ in z $9$. Za števili, ki nista tuji, to ne velja: $2$ in $4$ delita $12$, število $8$ pa ne.

**5. Deljenje z ostankom.** Za celo število $a$ in naravno število $b$ obstajata natanko določeni celi števili $q$ (količnik) in $r$ (ostanek), da velja

$$a = q \cdot b + r, \qquad 0 \le r < b.$$

Na primer $47 = 9 \cdot 5 + 2$ in $-17 = (-4) \cdot 5 + 3$. Ostanek je vedno nenegativen in manjši od delitelja. Število $b$ deli $a$ natanko tedaj, ko je ostanek $r = 0$.

**6. Praštevila in razcep.** Naravno število $p > 1$ je **praštevilo**, če ima natanko dva pozitivna delitelja, $1$ in $p$. Naravno število, večje od $1$, ki ni praštevilo, je **sestavljeno**. Število $1$ ni ne praštevilo ne sestavljeno število. Število $2$ je edino sodo praštevilo. Praštevila do $50$ so: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$.

Ali je $n$ praštevilo, preveriš tako, da poskusiš deliti s praštevili $p$, za katera je $p^2 \le n$. Če je namreč $n = a \cdot b$ in $a \le b$, je $a^2 \le n$, zato ima sestavljeno število najmanjši delitelj, večji od $1$, ki ni večji od $\sqrt{n}$. Na tem temelji tudi Eratostenovo sito: izmed števil od $2$ do $n$ prečrtaš večkratnike vsakega praštevila $p$ z $p^2 \le n$ (razen samega $p$); neprečrtana števila so praštevila.

**Osnovni izrek aritmetike:** vsako naravno število $n > 1$ je produkt praštevil, in to na en sam način (do vrstnega reda faktorjev). Na primer $360 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 = 2^3 \cdot 3^2 \cdot 5$. Praštevil je neskončno mnogo.

**7. Največji skupni delitelj in najmanjši skupni večkratnik.** Največji skupni delitelj $D(a, b)$ je največje naravno število, ki deli $a$ in $b$. Najmanjši skupni večkratnik $v(a, b)$ je najmanjše naravno število, ki ga delita $a$ in $b$. V jeziku množic: $D(a, b)$ je največji element preseka množic deliteljev, $v(a, b)$ pa najmanjši element preseka množic naravnih večkratnikov. Če je $D(a, b) = 1$, sta števili **tuji**.

Iz razcepa na prafaktorje dobiš:

- $D(a, b)$ je produkt prafaktorjev, ki nastopajo v *obeh* številih, vsakega z *manjšim* eksponentom,
- $v(a, b)$ je produkt *vseh* prafaktorjev, ki nastopajo v vsaj enem številu, vsakega z *večjim* eksponentom,
- za naravni števili $a$ in $b$ velja $D(a, b) \cdot v(a, b) = a \cdot b$.

**8. Evklidov algoritem.** Če je $a = q \cdot b + r$, je $D(a, b) = D(b, r)$. Deljenje z ostankom zato ponavljamo, dokler ne dobimo ostanka $0$. Zadnji ostanek, ki ni $0$, je $D(a, b)$. Na primer: $48 = 2 \cdot 18 + 12$, $18 = 1 \cdot 12 + 6$, $12 = 2 \cdot 6 + 0$, zato je $D(48, 18) = 6$.

## Rešeni primeri

### Primer 1 (lažji)

S merili za deljivost ugotovi, s katerimi od števil $2$, $3$, $4$, $5$ in $9$ je deljivo število $4\,536$.

**Podatki:** število $4\,536$; preverjamo delitelje $2$, $3$, $4$, $5$ in $9$
**Iščemo:** katera od števil $2$, $3$, $4$, $5$, $9$ delijo število $4\,536$

:::formula
Merila: z $2$ (zadnja števka soda), s $5$ (zadnja števka $0$ ali $5$), s $3$ ali z $9$ (vsota števk deljiva s $3$ oziroma z $9$), s $4$ (zadnji dve števki tvorita število, deljivo s $4$).
:::

**Rešitev:**

1. Zadnja števka je $6$. Je soda, zato je število deljivo z $2$. Ni $0$ ali $5$, zato ni deljivo s $5$.
2. Vsota števk je $4 + 5 + 3 + 6 = 18$. Število $18$ je deljivo s $3$ in z $9$, zato je tudi $4\,536$ deljivo s $3$ in z $9$.
3. Zadnji dve števki tvorita število $36 = 4 \cdot 9$, zato je $4\,536$ deljivo s $4$.
4. Preverimo z deljenjem: $4\,536 : 4 = 1\,134$ in $4\,536 : 9 = 504$.
5. Odgovor: število $4\,536$ je deljivo z $2$, $3$, $4$ in $9$, s $5$ pa ni deljivo. Ker sta $4$ in $9$ tuji števili, je deljivo tudi s $36$: $4\,536 = 36 \cdot 126$.

### Primer 2 (srednji)

Določi $D(252, 420)$ in $v(252, 420)$ s pomočjo razcepa na prafaktorje. Rezultat preveri z zvezo $D(a, b) \cdot v(a, b) = a \cdot b$.

**Podatki:** $a = 252$, $b = 420$
**Iščemo:** $D(252, 420)$ in $v(252, 420)$

:::formula
$D$: skupni prafaktorji z manjšim eksponentom. $v$: vsi prafaktorji z večjim eksponentom. Preizkus: $D(a, b) \cdot v(a, b) = a \cdot b$.
:::

**Rešitev:**

1. Razcep prvega števila: $252 = 2 \cdot 126 = 2 \cdot 2 \cdot 63 = 2 \cdot 2 \cdot 3 \cdot 3 \cdot 7 = 2^2 \cdot 3^2 \cdot 7$.
2. Razcep drugega števila: $420 = 2 \cdot 210 = 2 \cdot 2 \cdot 105 = 2 \cdot 2 \cdot 3 \cdot 5 \cdot 7 = 2^2 \cdot 3 \cdot 5 \cdot 7$.
3. Največji skupni delitelj: skupni prafaktorji so $2$, $3$ in $7$. Manjši eksponent je pri $2$ enak $2$, pri $3$ enak $1$ in pri $7$ enak $1$. Torej $D = 2^2 \cdot 3 \cdot 7 = 4 \cdot 3 \cdot 7 = 84$.
4. Najmanjši skupni večkratnik: vzamemo vse prafaktorje z večjim eksponentom, to so $2^2$, $3^2$, $5$ in $7$. Torej $v = 4 \cdot 9 \cdot 5 \cdot 7 = 1\,260$.
5. Preizkus: $D \cdot v = 84 \cdot 1\,260 = 105\,840$ in $a \cdot b = 252 \cdot 420 = 105\,840$. Produkta sta enaka.
6. Odgovor: $D(252, 420) = 84$ in $v(252, 420) = 1\,260$. Res je $252 = 3 \cdot 84$ in $420 = 5 \cdot 84$, kjer sta $3$ in $5$ tuji števili.

### Primer 3 (težji)

Poišči najmanjše trimestno število, ki pri deljenju s $4$, s $5$ in s $6$ da ostanek $3$.

**Podatki:** delitelji $4$, $5$ in $6$; pri vsakem deljenju je ostanek $3$; število je trimestno, torej $100 \le n \le 999$
**Iščemo:** najmanjše tako število $n$

:::formula
Če je $n = q \cdot d + 3$, je $d \mid (n - 3)$. Število $n - 3$ je zato skupni večkratnik števil $4$, $5$ in $6$, torej večkratnik njihovega najmanjšega skupnega večkratnika $v(4, 5, 6)$.
:::

**Rešitev:**

1. Pri deljenju s $4$, $5$ in $6$ je ostanek $3$, zato je $n = q_1 \cdot 4 + 3 = q_2 \cdot 5 + 3 = q_3 \cdot 6 + 3$. Torej števila $4$, $5$ in $6$ delijo $n - 3$. (Ostanek $3$ je manjši od vseh treh deliteljev, kar mora biti.)
2. Najmanjši skupni večkratnik: $4 = 2^2$, $5$ in $6 = 2 \cdot 3$. Vzamemo vse prafaktorje z največjimi eksponenti: $v(4, 5, 6) = 2^2 \cdot 3 \cdot 5 = 60$.
3. Vsak skupni večkratnik je večkratnik števila $60$, zato je $n - 3 = 60k$ in $n = 60k + 3$.
4. Trimestno število mora biti vsaj $100$, torej $60k + 3 \ge 100$ in $60k \ge 97$, zato je $k \ge 2$. Pri $k = 1$ dobimo $63$, kar je dvomestno število, pri $k = 2$ pa $n = 123$.
5. Preverimo: $123 = 30 \cdot 4 + 3$, $123 = 24 \cdot 5 + 3$, $123 = 20 \cdot 6 + 3$.
6. Odgovor: iskano število je $123$.

## Pogoste napake

- **»Število 1 je praštevilo« in »vsa liha števila so praštevila«.** Razlog: praštevilo mora imeti natanko dva pozitivna delitelja, število $1$ pa ima en sam delitelj, število $9$ pa tri ($1$, $3$ in $9$). Pravilno: preštej delitelje. Število $1$ ni praštevilo, $2$ je edino sodo praštevilo, $9$, $15$ in $21$ pa so liha sestavljena števila.
- **Napačno sestavljeno merilo.** Sklepaš: »$12$ je deljivo z $2$ in s $4$, torej tudi z $8$.« Razlog: produkt lahko uporabiš le pri tujih deliteljih, števili $2$ in $4$ pa nista tuji. Pravilno: za $8$ uporabi merilo o zadnjih treh števkah; $12 : 8$ ni celo število. Pri merilu za $4$ pa vedno preberi *zadnji dve* števki: $14$ ni deljivo s $4$, čeprav se konča s $4$.
- **Zamenjana eksponenta pri $D$ in $v$.** Pri $D$ vzameš večji eksponent ali pa pri $v$ izpustiš prafaktor, ki je le v enem številu. Razlog: $D$ ne sme biti večji od nobenega od števil, $v$ pa ne manjši od nobenega. Pravilno: $D$ iz skupnih prafaktorjev z *manjšim* eksponentom, $v$ iz *vseh* prafaktorjev z *večjim* eksponentom. Na koncu preveri $D \cdot v = a \cdot b$.
- **Napačen predznak pri odštevanju negativnega števila.** Izračunaš $-3 - (-5) = -8$. Razlog: odštevanje negativnega števila je prištevanje nasprotnega števila. Pravilno: $-3 - (-5) = -3 + 5 = 2$.
- **Negativen ostanek ali ostanek, večji od delitelja.** Zapišeš $47 = 8 \cdot 5 + 7$ ali $-17 = (-3) \cdot 5 - 2$. Razlog: ostanek mora ležati v območju $0 \le r < b$. Pravilno: $47 = 9 \cdot 5 + 2$ in $-17 = (-4) \cdot 5 + 3$.

## Povzetek

- $\mathbb{N} = \{1, 2, 3, \dots\}$, $\mathbb{N}_0 = \mathbb{N} \cup \{0\}$, $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ in $\mathbb{N} \subset \mathbb{N}_0 \subset \mathbb{Z}$.
- $a \mid b$ pomeni, da obstaja celo število $k$ z $b = k \cdot a$. Če $a \mid b$ in $a \mid c$, potem $a \mid (b \pm c)$.
- Merila: $2$ (zadnja števka), $3$ in $9$ (vsota števk), $4$ (zadnji dve števki), $5$ (zadnja števka), $8$ (zadnje tri števke). Sestavljeno merilo (npr. za $6$) velja le za tuja delitelja.
- Deljenje z ostankom: $a = q \cdot b + r$ z $0 \le r < b$.
- Praštevilo ima natanko dva pozitivna delitelja; $1$ ni praštevilo. Vsako število $n > 1$ je na en sam način produkt praštevil.
- $D(a, b)$: skupni prafaktorji z manjšim eksponentom. $v(a, b)$: vsi prafaktorji z večjim eksponentom. Velja $D(a, b) \cdot v(a, b) = a \cdot b$.
- Evklidov algoritem: $D(a, b) = D(b, r)$, ponavljamo do ostanka $0$.

## Drugače: Na sliki

Najprej številska premica. Ničla je v sredini, naravna števila $1, 2, 3, \dots$ so desno od nje, nasprotna števila $-1, -2, -3, \dots$ pa levo, vsako na enaki razdalji od ničle kot njeno nasprotno število. Absolutna vrednost $|a|$ je ta razdalja. V sliki množic so naravna števila ovalček znotraj večjega ovalčka celih števil, ki dodatno vsebuje še ničlo in negativna števila.

Zdaj še Vennov diagram za delitelje števil $12$ in $18$. Levi krog (delitelji števila $12$) vsebuje le $4$ in $12$. Desni krog (delitelji števila $18$) vsebuje le $9$ in $18$. V prekrivanju so skupni delitelji $1, 2, 3, 6$. Največji element prekrivanja je $D(12, 18) = 6$. Podobno velja pri večkratnikih: večkratniki števila $12$ so $12, 24, 36, 48, \dots$, večkratniki števila $18$ pa $18, 36, 54, 72, \dots$ Prvi skupni večkratnik je $36$, torej $v(12, 18) = 36$. Preverimo še: $6 \cdot 36 = 216 = 12 \cdot 18$.

## Drugače: Iz vsakdanjega življenja

Za vsako besedilno nalogo se vprašaj, kaj se dogaja: *delimo na enake dele* ali *čakamo, da se dogodka spet ujameta*.

**Avtobusa.** Avtobus A odpelje s postaje vsakih $12$ minut, avtobus B vsakih $18$ minut. Ob 6.00 odpeljeta hkrati. Spet odpeljeta hkrati čez $v(12, 18) = 36$ minut, torej ob 6.36. Tu iščemo najmanjši skupni večkratnik.

**Ploščice.** Teraso z dolžino $540\,\text{cm}$ in širino $378\,\text{cm}$ želiš pokriti s skladnimi kvadratnimi ploščicami brez rezanja. Stranica ploščice mora deliti obe meri, največja možna je $D(540, 378) = 54\,\text{cm}$. Po dolžini jih je $540 : 54 = 10$, po širini $378 : 54 = 7$, skupaj $70$. Tu iščemo največji skupni delitelj.

**Temperatura.** Če temperatura pade s $3\,^\circ\text{C}$ na $-5\,^\circ\text{C}$, je padla za začetno minus končno vrednost: $3 - (-5) = 3 + 5 = 8$ stopinj. Tu odštevanje negativnega števila pomeni prištevanje nasprotnega.

## Drugače: Korak za korakom s številkami

Evklidov algoritem za $D(1071, 462)$. Vsakič delimo z ostankom in nadaljujemo z manjšim številom ter ostankom:

| Korak | Deljenje z ostankom | Račun | Nadaljujemo z |
|---|---|---|---|
| 1 | $1\,071 = 2 \cdot 462 + 147$ | $2 \cdot 462 = 924$, $1\,071 - 924 = 147$ | $462$ in $147$ |
| 2 | $462 = 3 \cdot 147 + 21$ | $3 \cdot 147 = 441$, $462 - 441 = 21$ | $147$ in $21$ |
| 3 | $147 = 7 \cdot 21 + 0$ | $7 \cdot 21 = 147$ | ostanek je $0$ |

Zadnji ostanek, ki ni $0$, je $21$, torej $D(1071, 462) = 21$. Preverimo: $1\,071 = 21 \cdot 51$ in $462 = 21 \cdot 22$, števili $51 = 3 \cdot 17$ in $22 = 2 \cdot 11$ pa nimata skupnega prafaktorja, torej sta tuji.

Najmanjši skupni večkratnik dobimo iz zveze $v = \dfrac{a \cdot b}{D}$. Delimo najprej: $v(1071, 462) = 51 \cdot 462 = 23\,562$. Preverimo z drugo potjo: $21 \cdot 51 \cdot 22 = 21 \cdot 1\,122 = 23\,562$.

## Drugače: Bolj natančno

**Zakaj Evklidov algoritem deluje.** Naj bo $a = q \cdot b + r$. Vsak skupni delitelj števil $a$ in $b$ deli tudi $r = a - q \cdot b$. Vsak skupni delitelj števil $b$ in $r$ deli tudi $a = q \cdot b + r$. Števili $a$, $b$ in števili $b$, $r$ imata torej iste skupne delitelje, zato tudi isti največji skupni delitelj. Ostanki padajo, zato po končno mnogo korakih pridemo do $0$.

**Praštevil je neskončno mnogo.** Denimo, da jih je končno mnogo: $p_1, p_2, \dots, p_n$. Poglej število $N = p_1 \cdot p_2 \cdots p_n + 1$. Pri deljenju z vsakim $p_i$ da ostanek $1$, torej ga nobeno od njih ne deli. Toda $N > 1$ ima nek prafaktor, ki je praštevilo, a ni nobeno od $p_1, \dots, p_n$. To je protislovje.

**Merilo za $9$.** Vzemimo $4\,536 = 4 \cdot 1000 + 5 \cdot 100 + 3 \cdot 10 + 6$. Ker je $1000 = 999 + 1$, $100 = 99 + 1$ in $10 = 9 + 1$, je $4\,536 = (4 \cdot 999 + 5 \cdot 99 + 3 \cdot 9) + (4 + 5 + 3 + 6)$. Prvi oklepaj je deljiv z $9$, zato je deljivost z $9$ odvisna samo od vsote števk. Enako velja za $3$.

**Zakaj $D \cdot v = a \cdot b$.** Za vsako praštevilo, ki nastopa z eksponentoma $\alpha$ in $\beta$, v $D$ nastopa z $\min(\alpha, \beta)$, v $v$ pa z $\max(\alpha, \beta)$. Vsota teh dveh eksponentov je $\alpha + \beta$, kar je eksponent v produktu $a \cdot b$.

## Preveri se

? Katero od števil je praštevilo?
- $51$
- $57$
+ $59$
- $91$
> Število $59$ ni deljivo z $2$, $3$, $5$ ali $7$, to pa so vsa praštevila z $p^2 \le 59$, zato je praštevilo. Preostala števila so sestavljena: $51 = 3 \cdot 17$, $57 = 3 \cdot 19$, $91 = 7 \cdot 13$.

? Koliko je $-3 - (-5) \cdot 2$?
- $4$
- $-13$
+ $7$
- $-7$
> Najprej množimo: $(-5) \cdot 2 = -10$. Nato odštejemo negativno število: $-3 - (-10) = -3 + 10 = 7$. Rezultat $4$ dobiš, če najprej odšteješ, rezultat $-13$ pa, če odštevanje negativnega števila obravnavaš kot odštevanje pozitivnega.

? Koliko je $D(48, 36)$?
- $3$
- $6$
+ $12$
- $144$
> $48 = 2^4 \cdot 3$ in $36 = 2^2 \cdot 3^2$. Skupna prafaktorja z manjšima eksponentoma sta $2^2$ in $3$, zato je $D = 4 \cdot 3 = 12$. Število $144 = 2^4 \cdot 3^2$ je $v(48, 36)$, števili $3$ in $6$ pa sta skupna delitelja, ki nista največja.

? Za naravni števili $a$ in $b$ velja $D(a, b) = 6$ in $a \cdot b = 360$. Koliko je $v(a, b)$?
- $54$
+ $60$
- $66$
- $2\,160$
> Iz zveze $D(a, b) \cdot v(a, b) = a \cdot b$ sledi $v(a, b) = \dfrac{360}{6} = 60$. Rezultat $2\,160$ dobiš, če produkt pomnožiš z $D$ namesto da bi ga z njim delil. Primer takšnih števil sta $a = 12$ in $b = 30$.
