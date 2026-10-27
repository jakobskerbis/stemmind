---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Že znaš, kdaj je število deljivo z drugim (na primer $12$ je deljivo s $3$), in znaš razcepiti število na prafaktorje. Iz prejšnjih let poznaš tudi krajšanje ulomkov ter seštevanje ulomkov z različnima imenovalcema.

Pri ulomkih sta se verjetno kdaj vprašal: *Z največ katerim številom lahko ulomek skrajšam naenkrat? Kateri skupni imenovalec je najmanjši?* Odgovor sta dva pojma iz te lekcije:

- **največji skupni delitelj** pove, s katerim številom lahko ulomek skrajšamo naenkrat do konca,
- **najmanjši skupni večkratnik** pove, kateri je najmanjši skupni imenovalec pri seštevanju in odštevanju ulomkov.

Uporabna sta tudi v vsakdanjih nalogah. Z enim razdeliš stvari na enake skupine, z drugim ugotoviš, kdaj se dva ponavljajoča se dogodka spet zgodita hkrati (na primer odhodi dveh avtobusov).

## Razlaga

**1. Delitelji in večkratniki.** Število $d$ je **delitelj** števila $a$, če $a$ lahko delimo z $d$ brez ostanka. Število $v$ je **večkratnik** števila $a$, če ga dobimo kot $a \cdot 1$, $a \cdot 2$, $a \cdot 3$, …

- Delitelji števila $12$: $D(12) = \{1, 2, 3, 4, 6, 12\}$. Končno veliko jih je.
- Večkratniki števila $12$: $12, 24, 36, 48, \dots$ Neskončno jih je.

**2. Največji skupni delitelj.** Število, ki deli obe števili $a$ in $b$, je njun **skupni delitelj**. Največjemu rečemo **največji skupni delitelj** in ga zapišemo $D(a, b)$.

**3. Najmanjši skupni večkratnik.** Število, ki je večkratnik obeh števil $a$ in $b$, je njun **skupni večkratnik**. Najmanjšemu (ki je večji od $0$) rečemo **najmanjši skupni večkratnik** in ga zapišemo $v(a, b)$.

**4. Tuja števila.** Če je $D(a, b) = 1$, sta števili **tuji** (si nista deljivi z nobenim skupnim številom razen z $1$). Na primer $D(8, 15) = 1$.

**5. Računanje z naštevanjem.** Pri majhnih številih napišemo delitelje ali večkratnike in poiščemo skupne. To je preprosto, vendar pri večjih številih počasno.

**6. Računanje s prafaktorji.** Obe števili razcepimo na prafaktorje in zapišemo s potencami.

- **$D(a, b)$:** vzamemo samo prafaktorje, ki nastopajo v *obeh* številih, vsakega z *manjšim* eksponentom.
- **$v(a, b)$:** vzamemo *vse* prafaktorje, ki nastopajo v *vsaj enem* številu, vsakega z *večjim* eksponentom.

**7. Uporaba pri ulomkih.**

- **Krajšanje.** Ulomek $\dfrac{a}{b}$ do konca skrajšamo tako, da števec in imenovalec delimo z $D(a, b)$.
- **Seštevanje in odštevanje.** Najmanjši skupni imenovalec ulomkov z imenovaloma $b$ in $c$ je $v(b, c)$.

**8. Uporaba pri besedilnih nalogah.** Pomagaj si z ključnimi besedami:

- »razdeli na **enake** skupine, največ skupin, največja možna velikost« pomeni **največji skupni delitelj**,
- »spet **hkrati**, čez koliko časa se ponovi, najmanjše število, ki je deljivo z obema« pomeni **najmanjši skupni večkratnik**.

## Rešeni primeri

### Primer 1: naštevanje

Določi $D(12, 18)$ in $v(12, 18)$.

1. Napišemo delitelje obeh števil:
   $D(12) = \{1, 2, 3, 4, 6, 12\}$, $D(18) = \{1, 2, 3, 6, 9, 18\}$.
2. Skupni delitelji so $1, 2, 3, 6$. Največji je $6$, torej $D(12, 18) = 6$.
3. Napišemo večkratnike, dokler se ne pojavi skupni:
   večkratniki števila $12$: $12, 24, 36, 48, \dots$
   večkratniki števila $18$: $18, 36, 54, \dots$
4. Prvi skupni večkratnik je $36$, torej $v(12, 18) = 36$.
5. Preverimo smiselnost: $D$ ni večji od manjšega števila ($6 \le 12$), $v$ ni manjši od večjega števila ($36 \ge 18$). ✓

### Primer 2: prafaktorji in ulomki

a) Določi $D(72, 108)$ in $v(72, 108)$.
b) Skrajšaj $\dfrac{72}{108}$.
c) Izračunaj $\dfrac{5}{72} + \dfrac{7}{108}$.

**a)**

1. Razcepimo: $72 = 2^3 \cdot 3^2$ (ker $8 \cdot 9 = 72$) in $108 = 2^2 \cdot 3^3$ (ker $4 \cdot 27 = 108$).
2. **Največji skupni delitelj:** pri vsakem prafaktorju vzamemo *manjši* eksponent. Pri $2$ je to $2^2$, pri $3$ je to $3^2$. Torej $D(72, 108) = 2^2 \cdot 3^2 = 4 \cdot 9 = 36$.
3. **Najmanjši skupni večkratnik:** pri vsakem prafaktorju vzamemo *večji* eksponent: $2^3$ in $3^3$. Torej $v(72, 108) = 2^3 \cdot 3^3 = 8 \cdot 27 = 216$.
4. Preverimo: $72 : 36 = 2$, $108 : 36 = 3$ (ostanka ni) in $216 : 72 = 3$, $216 : 108 = 2$. ✓

**b)**

1. Za krajšanje do konca uporabimo $D(72, 108) = 36$.
2. $\dfrac{72}{108} = \dfrac{72 : 36}{108 : 36} = \dfrac{2}{3}$.
3. Ulomek $\dfrac{2}{3}$ se ne da več krajšati, ker sta $2$ in $3$ tuji števili.

**c)**

1. Najmanjši skupni imenovalec je $v(72, 108) = 216$.
2. Prvi ulomek razširimo: $216 : 72 = 3$, zato $\dfrac{5}{72} = \dfrac{5 \cdot 3}{216} = \dfrac{15}{216}$.
3. Drugi ulomek razširimo: $216 : 108 = 2$, zato $\dfrac{7}{108} = \dfrac{7 \cdot 2}{216} = \dfrac{14}{216}$.
4. Seštejemo števca, imenovalec ostane: $\dfrac{15}{216} + \dfrac{14}{216} = \dfrac{29}{216}$.
5. Ulomek ni krajšljiv, ker je $29$ praštevilo in $216$ ni deljivo z $29$.

### Primer 3: besedilni nalogi

a) Trgovec ima $48$ jabolk in $60$ hrušk. Iz njih želi narediti čim več enakih paketov, v katerih so vsa jabolka in vse hruške razdeljene. Koliko paketov lahko naredi in kaj je v vsakem?

b) Avtobusa A in B odpeljeta ob 6:00 hkrati s postaje. Avtobus A odpelje vsakih $12$ minut, avtobus B vsakih $18$ minut. Ob kateri uri spet odpeljeta hkrati?

**a)**

1. **Kaj iščemo.** »Čim več enakih paketov«, ki jih naredimo brez ostanka, pomeni največji skupni delitelj števil $48$ in $60$.
2. Razcepimo: $48 = 2^4 \cdot 3$, $60 = 2^2 \cdot 3 \cdot 5$.
3. Manjši eksponenti: $2^2$ in $3$ (petica nastopa samo v $60$, zato je ne vzamemo). $D(48, 60) = 2^2 \cdot 3 = 12$.
4. Paketov je $12$. V vsakem je $48 : 12 = 4$ jabolka in $60 : 12 = 5$ hrušk.
5. Preverimo: $12 \cdot 4 = 48$ in $12 \cdot 5 = 60$. ✓

**b)**

1. **Kaj iščemo.** Avtobusa odpeljeta hkrati ob časih, ki so hkrati večkratnika števil $12$ in $18$. Prvi tak čas je najmanjši skupni večkratnik.
2. Iz primera 1 že vemo, da je $v(12, 18) = 36$.
3. Spet odpeljeta hkrati čez $36$ minut, torej ob **6:36**.
4. Preverimo: avtobus A je v tem času odpeljal $36 : 12 = 3$-krat, avtobus B pa $36 : 18 = 2$-krat, vsak celo število krat. ✓

## Pogoste napake

- **Zamenjava $D$ in $v$.** Če je rezultat pri $D$ večji od manjšega števila ali pri $v$ manjši od večjega števila, si zamenjal pojma. $D(a, b)$ je največ tako velik kot manjše število, $v(a, b)$ je vsaj tako velik kot večje število.
- **Napačni eksponenti pri prafaktorjih.** Pri $D$ vzameš *manjši* eksponent, pri $v$ *večji*. Pri $D$ prafaktor, ki ga drugo število nima, izpustiš.
- **Skupni imenovalec je produkt.** Pri $\dfrac{5}{12} + \dfrac{3}{8}$ lahko vzameš $12 \cdot 8 = 96$, vendar je račun potem težji. Najmanjši skupni imenovalec je $v(12, 8) = 24$.
- **Seštevanje imenovalcev.** $\dfrac{1}{4} + \dfrac{1}{6} \neq \dfrac{2}{10}$. Ulomka moraš najprej razširiti na skupni imenovalec, seštejeta se samo števca.
- **Napačen pojem pri besedilni nalogi.** Pred računom se vprašaj: *delim na enake dele* (potem $D$) ali *čakam, da se nekaj spet zgodi hkrati* (potem $v$)?
- **Pozabljeno končno krajšanje.** Če ulomek krajšaš z manjšim številom, kot je $D$, moraš krajšati še enkrat. Z $D$ ga skrajšaš naenkrat.

## Povzetek

- $D(a, b)$ je največje število, ki deli $a$ in $b$. $v(a, b)$ je najmanjše število, ki je večkratnik obeh.
- Pri prafaktorjih: $D$ vzame skupne prafaktorje z manjšim eksponentom, $v$ vse prafaktorje z večjim eksponentom.
- Števili sta tuji, če je $D(a, b) = 1$.
- Ulomek do konca skrajšamo tako, da števec in imenovalec delimo z $D$ števca in imenovalca.
- Najmanjši skupni imenovalec pri seštevanju in odštevanju ulomkov je $v$ imenovalcev.
- Besedilne naloge: »enake skupine, čim večje« pomeni $D$, »spet hkrati« pomeni $v$.

## Drugače: Na sliki

Predstavljaj si pravokotnik z dolžino $18\,\text{cm}$ in širino $12\,\text{cm}$. Pokriti ga želiš s kvadratnimi ploščicami brez vrzeli in brez rezanja. Stranica ploščice mora deliti $18$ in $12$, torej mora biti skupni delitelj. Največja možna ploščica ima stranico $D(12, 18) = 6\,\text{cm}$. Potrebuješ $18 : 6 = 3$ ploščice v vrsti in $12 : 6 = 2$ vrsti, skupaj $6$ ploščic.

Za najmanjši skupni večkratnik si predstavljaj dve vrsti ploščic na ravni črti. Ene so dolge $12\,\text{cm}$, druge $18\,\text{cm}$. Obe vrsti polagaš od iste začetne črte. Stiki ploščic se prvič poravnajo pri $36\,\text{cm}$, torej $v(12, 18) = 36$. Do takrat potrebuješ $3$ ploščice prve vrste ($3 \cdot 12 = 36$) in $2$ ploščici druge vrste ($2 \cdot 18 = 36$).

## Drugače: Iz vsakdanjega življenja

**Največji skupni delitelj: skupine.** Razred ima $18$ dečkov in $12$ deklic. Učitelj jih želi razdeliti v čim več enakih skupin, v vsaki naj bo enako dečkov in enako deklic. Skupin je lahko največ $D(12, 18) = 6$. V vsaki skupini so $3$ dečki in $2$ deklici. Z manj skupinami (na primer $3$) bi bile skupine večje, lahko pa bi jih tudi razdelil na $2$ ali $1$, vendar ne na več kot $6$.

**Najmanjši skupni večkratnik: ponavljanje.** Luč na svetilniku bliska vsakih $12$ sekund, druga pa vsakih $18$ sekund. Če sta se zdaj prižgali hkrati, se bosta spet hkrati čez $v(12, 18) = 36$ sekund. Vmes sta se prižgali ob različnih časih, na primer ob $12$ s, $18$ s, $24$ s, $36$ s.

Podobno je z urniki avtobusov, ko se nekaj ponavlja na vsakih nekaj minut ali dni.

## Drugače: Korak za korakom s številkami

Primer: $D(60, 84)$ in $v(60, 84)$ s tabelo prafaktorjev.

1. Razcepi: $60 = 2^2 \cdot 3 \cdot 5$ in $84 = 2^2 \cdot 3 \cdot 7$.
2. Izpiši vse prafaktorje v tabelo in pri vsakem zapiši eksponent (če ga ni, je $0$):

| prafaktor | v $60$ | v $84$ | manjši | večji |
|---|---|---|---|---|
| $2$ | $2$ | $2$ | $2$ | $2$ |
| $3$ | $1$ | $1$ | $1$ | $1$ |
| $5$ | $1$ | $0$ | $0$ | $1$ |
| $7$ | $0$ | $1$ | $0$ | $1$ |

3. **$D$** je produkt prafaktorjev z *manjšimi* eksponenti: $2^2 \cdot 3 = 4 \cdot 3 = 12$.
4. **$v$** je produkt prafaktorjev z *večjimi* eksponenti: $2^2 \cdot 3 \cdot 5 \cdot 7 = 4 \cdot 3 \cdot 35 = 420$.
5. Preveri: $60 : 12 = 5$, $84 : 12 = 7$ (deljenje brez ostanka), $420 : 60 = 7$, $420 : 84 = 5$. ✓

Uporaba pri ulomku: $\dfrac{60}{84} = \dfrac{60 : 12}{84 : 12} = \dfrac{5}{7}$.

## Drugače: Bolj natančno

**Zveza med $D$ in $v$.** Za poljubni naravni števili $a$ in $b$ velja

$$D(a, b) \cdot v(a, b) = a \cdot b.$$

Zakaj? Pri vsakem prafaktorju ima eno število eksponent $m$, drugo $n$. Pri $D$ vzamemo manjšega, pri $v$ večjega, torej $\min(m, n) + \max(m, n) = m + n$. Eksponenti pri produktu $D \cdot v$ so zato isti kot pri produktu $a \cdot b$.

Preizkus: $D(12, 18) \cdot v(12, 18) = 6 \cdot 36 = 216 = 12 \cdot 18$. ✓

Iz tega sledi uporaben trik: če poznaš $D$, lahko dobiš $v = \dfrac{a \cdot b}{D}$. Za tuji števili ($D = 1$) je $v(a, b) = a \cdot b$. Na primer $v(8, 15) = 120$.

**Zakaj je pri seštevanju ulomkov dovolj $v$ imenovalcev?** Skupni imenovalec mora biti večkratnik obeh imenovalcev, da ulomka lahko razširimo na isti imenovalec. Najmanjši tak imenovalec je po definiciji $v$. Računanje z najmanjšim imenovalcem pomeni manjša števila in manj krajšanja na koncu.

## Preveri se

? Koliko je $D(24, 36)$?
- $6$
+ $12$
- $72$
> $24 = 2^3 \cdot 3$ in $36 = 2^2 \cdot 3^2$. Pri $D$ vzamemo manjše eksponente: $2^2 \cdot 3 = 12$. Število $72$ je $v(24, 36)$, število $6$ pa je skupni delitelj, vendar ni največji.

? Koliko je $\dfrac{5}{12} + \dfrac{3}{8}$?
- $\dfrac{8}{20}$
- $\dfrac{8}{24}$
+ $\dfrac{19}{24}$
> $v(12, 8) = 24$. Razširimo: $\dfrac{5}{12} = \dfrac{10}{24}$ in $\dfrac{3}{8} = \dfrac{9}{24}$, vsota je $\dfrac{19}{24}$. Odgovor $\dfrac{8}{20}$ nastane s seštevanjem števcev in imenovalcev, odgovor $\dfrac{8}{24}$ pa s seštevanjem števcev brez razširjanja.

? Ana hodi v knjižnico vsakih $6$ dni, Blaž vsakih $8$ dni. Danes sta bila tam oba. Čez koliko dni bosta spet skupaj v knjižnici?
- Čez $2$ dni.
+ Čez $24$ dni.
- Čez $48$ dni.
> Iščemo najmanjši skupni večkratnik: $v(6, 8) = 24$. Število $2$ je $D(6, 8)$, število $48$ pa je produkt $6 \cdot 8$, ki je skupni večkratnik, vendar ne najmanjši.
