---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz 7. razreda že znaš računati z racionalnimi števili in veš, da lahko neznano število zapišemo s črko. Znaš tudi izračunati obseg in ploščino pravokotnika, npr. $o = 2a + 2b$ in $S = a \cdot b$.

Takšni zapisi so že algebrski izrazi. Z njimi na kratko zapišemo pravilo, ki velja za **veliko različnih števil hkrati**. Namesto da bi za vsak pravokotnik posebej razmišljal, kako izračunati obseg, zapišeš en izraz in v njem zamenjaš črke s števili. V tej lekciji se boš naučil:

- kako besedilo zapisati z izrazom,
- kako izračunati vrednost izraza,
- kako izraz poenostaviti, če seštevaš ali odštevaš podobne člene.

To je osnova za reševanje enačb, računanje s potenci in vse, kar sledi v algebri.

## Razlaga

**1. Spremenljivka in algebrski izraz.** Črki, ki nadomešča poljubno število, rečemo **spremenljivka** (npr. $x$, $a$, $n$). **Algebrski izraz** je zapis, v katerem so števila in spremenljivke povezana z računskimi operacijami. Primeri: $3x$, $a + 5$, $2a + 2b$, $x^2 - 4$.

**2. Dogovori o zapisu.**

- Znak za množenje med številom in črko izpustimo: namesto $3 \cdot x$ pišemo $3x$.
- Število pišemo pred črko: $5a$, ne $a5$.
- Namesto $1 \cdot x$ pišemo samo $x$, namesto $(-1) \cdot x$ pa $-x$.
- Namesto $x \cdot x$ pišemo $x^2$.
- Deljenje zapišemo z ulomkom: $a : 4 = \dfrac{a}{4}$.

**3. Zapis besedila z izrazom.** Besede preoblikujemo v računske operacije:

| Besedilo | Izraz |
|---|---|
| število $x$ povečano za $7$ | $x + 7$ |
| število $x$ zmanjšano za $7$ | $x - 7$ |
| trikratnik števila $x$ | $3x$ |
| tretjina števila $x$ | $\dfrac{x}{3}$ |
| kvadrat števila $x$ | $x^2$ |
| vsota števil $a$ in $b$ | $a + b$ |
| produkt števil $a$ in $b$ | $ab$ |
| nasprotno število števila $x$ | $-x$ |

Pozor: »število $x$ zmanjšano za $7$« je $x - 7$, »$7$ zmanjšano za $x$« pa je $7 - x$. Vrstni red pri odštevanju je pomemben.

**4. Vrednost izraza.** Če za spremenljivke vstavimo konkretna števila, dobimo **številski izraz**. Izračunana številka je **vrednost izraza** za izbrana števila. Pri računanju upoštevamo vrstni red računskih operacij: najprej potence, nato množenje in deljenje, nazadnje seštevanje in odštevanje; oklepaji imajo prednost. Kadar vstavljamo negativno število, ga vedno damo v oklepaj.

**5. Členi in podobni členi.** Izraz je sestavljen iz **členov**, ki jih ločujejo znaki $+$ in $-$. Člen ima običajno **številski faktor** (koeficient) in **črkovni del**. Pri členu $-5xy$ je koeficient $-5$, črkovni del pa $xy$.

**Podobni členi** imajo enak črkovni del (le koeficienti so lahko različni). Npr. $3x$ in $-7x$ sta podobna, $3x$ in $3x^2$ pa nista, ker je črkovni del $x$ drugačen od $x^2$. Člena brez črk (samo števili) sta tudi podobna med seboj.

**6. Poenostavljanje.** Podobne člene seštejemo tako, da seštejemo koeficiente, črkovni del pa ostane:

$$3x + 5x = (3 + 5)x = 8x$$

Nepodobnih členov ne moremo združiti: $3x + 5y$ ostane $3x + 5y$.

## Rešeni primeri

### Primer 1 (lažji): zapis z izrazom

Zapiši z izrazom: »Petkratnik števila $n$, povečan za $4$.«

1. Petkratnik števila $n$ je $5n$. Pišemo ga brez znaka za množenje.
2. »Povečan za $4$« pomeni, da prištejemo $4$.
3. Izraz: $5n + 4$.

Preverimo za $n = 2$: petkratnik števila $2$ je $10$, povečan za $4$ je $14$. Izraz da $5 \cdot 2 + 4 = 14$. ✓

### Primer 2: vrednost izraza

Izračunaj vrednost izraza $2a^2 - 3b$ za $a = -3$ in $b = 4$.

1. Vstavimo števila, negativno v oklepaju: $2 \cdot (-3)^2 - 3 \cdot 4$.
2. Najprej potenca: $(-3)^2 = 9$ (negativno število na sodo potenco je pozitivno).
3. Nato množenje: $2 \cdot 9 = 18$ in $3 \cdot 4 = 12$.
4. Nazadnje odštevanje: $18 - 12 = 6$.

Vrednost izraza je $6$.

### Primer 3 (težji): poenostavljanje in uporaba

Poenostavi izraz $4x + 3y - 7x + 5 - y + 2$ in izračunaj njegovo vrednost za $x = 2$ in $y = -1$.

1. **Razvrstimo člene** po črkovnem delu (znak pred členom gre z njim):
   - člena z $x$: $4x$ in $-7x$,
   - člena z $y$: $3y$ in $-y$ (koeficient je $-1$),
   - števili: $5$ in $2$.
2. **Seštejemo koeficiente:**
   - $4x - 7x = (4 - 7)x = -3x$,
   - $3y - y = (3 - 1)y = 2y$,
   - $5 + 2 = 7$.
3. **Poenostavljen izraz:** $-3x + 2y + 7$.
4. **Vstavimo** $x = 2$, $y = -1$: $-3 \cdot 2 + 2 \cdot (-1) + 7 = -6 - 2 + 7 = -1$.
5. **Preverimo** z začetnim izrazom: $4 \cdot 2 + 3 \cdot (-1) - 7 \cdot 2 + 5 - (-1) + 2 = 8 - 3 - 14 + 5 + 1 + 2 = -1$. ✓

Vrednost je $-1$ in se ujema v obeh primerih, kar potrjuje, da je poenostavitev pravilna.

## Pogoste napake

- **Združevanje nepodobnih členov.** $3x + 2y$ ni $5xy$ in ne $5x$. Črkovna dela sta različna, zato izraz ostane tak, kot je.
- **Mešanje $x$ in $x^2$.** $x + x = 2x$, vendar $x \cdot x = x^2$. Pri seštevanju se potenca ne spremeni: $3x^2 + 2x^2 = 5x^2$, ne $5x^4$.
- **Pozabljen koeficient $1$.** Člen $y$ ima koeficient $1$, člen $-y$ pa $-1$. Zato je $3y - y = 2y$, ne $3y$.
- **Negativno število brez oklepaja.** Za $a = -3$ je $a^2 = (-3)^2 = 9$, ne $-3^2 = -9$.
- **Napačen vrstni red pri odštevanju.** »$7$ zmanjšano za $x$« je $7 - x$, ne $x - 7$.
- **Izgubljen znak.** Pri izrazu $4x - 7x$ gre znak $-$ skupaj s členom $7x$.

## Povzetek

- Algebrski izraz sestavljajo števila, spremenljivke in računske operacije.
- Znak za množenje med številom in črko izpustimo: $3 \cdot x = 3x$; $x \cdot x = x^2$.
- Vrednost izraza dobimo tako, da spremenljivke nadomestimo s števili in upoštevamo vrstni red operacij; negativna števila damo v oklepaj.
- Podobni členi imajo enak črkovni del. Seštejemo jih tako, da seštejemo koeficiente: $3x + 5x = 8x$.
- Nepodobnih členov ne združujemo.

## Drugače: Na sliki

Predstavljaj si, da je $x$ škatla z neznanim številom bombonov, vsaka škatla pa ima enako število.

- $3x$ pomeni tri takšne škatle, $5x$ pet škatel. Če jih daš skupaj, imaš osem škatel: $3x + 5x = 8x$.
- Če imaš poleg tega še dve posamezni bombon (člen $2$), sta to drugačna "predmeta" kot škatla. Zato $8x + 2$ ne moreš zapisati kot eno samo vrsto stvari.

Podobno si lahko predstavljaš pravokotnik s stranicama $x$ in $3$. Njegova ploščina je $3x$. Če ob njem postaviš še en pravokotnik $x$ in $5$ (ploščina $5x$), imata skupaj ploščino $8x$, ker imata enako stranico $x$.

Podobni členi so torej "enake vrste škatle": seštevamo lahko samo enake.

## Drugače: Iz vsakdanjega življenja

V trgovini kupiš $n$ kosov sadja po $0{,}80\,\text{€}$ in pol kilograma kruha za $1{,}50\,\text{€}$. Skupni znesek je:

$$0{,}80\,n + 1{,}50$$

Če kupiš $5$ kosov sadja, vstaviš $n = 5$: $0{,}80 \cdot 5 + 1{,}50 = 4 + 1{,}50 = 5{,}50\,\text{€}$. Isti izraz uporabiš za $3$ kose, $10$ kosov ali poljubno število, ne da bi razmišljal znova.

Še en primer: mobilni paket stane $5\,\text{€}$ na mesec in $0{,}10\,\text{€}$ za vsako minuto pogovora. Za $m$ minut je račun $5 + 0{,}1m$. Za $30$ minut: $5 + 0{,}1 \cdot 30 = 5 + 3 = 8\,\text{€}$.

Če imaš dva paketa, ki jih zapišeš z $5 + 0{,}1m$ in $3 + 0{,}2m$, lahko skupni strošek izračunaš kot $8 + 0{,}3m$. Tu si združil podobne člene: števila ($5 + 3$) in člene z $m$ ($0{,}1m + 0{,}2m$).

## Drugače: Korak za korakom s številkami

Recept za poenostavljanje izraza, npr. $6a - 2b + 3 - 4a + 5b - 8$:

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Poišči člene z $a$ | $6a$, $-4a$ |
| 2 | Poišči člene z $b$ | $-2b$, $5b$ |
| 3 | Poišči števila | $3$, $-8$ |
| 4 | Seštej koeficiente pri $a$ | $6 - 4 = 2$, torej $2a$ |
| 5 | Seštej koeficiente pri $b$ | $-2 + 5 = 3$, torej $3b$ |
| 6 | Seštej števili | $3 - 8 = -5$ |
| 7 | Zapiši rezultat | $2a + 3b - 5$ |

Preveri za $a = 1$, $b = 1$: začetni izraz je $6 - 2 + 3 - 4 + 5 - 8 = 0$, poenostavljeni $2 + 3 - 5 = 0$. ✓

Nasvet: med računanjem si podobne člene označi z različnimi podčrtavami (npr. enojno za $a$, dvojno za $b$), da noben ne ostane neupoštevan.

## Drugače: Bolj natančno

Zakaj lahko podobne člene seštejemo tako, da seštejemo koeficiente? Zaradi **distributivnosti** množenja glede na seštevanje, ki velja za vsa števila:

$$ma + na = (m + n)a$$

Tako je npr. $3x + 5x = (3 + 5)x = 8x$. Spremenljivka $x$ je lahko poljubno število, zato enakost velja za vse vrednosti $x$. Preveri za $x = 4$: leva stran $3 \cdot 4 + 5 \cdot 4 = 12 + 20 = 32$, desna stran $8 \cdot 4 = 32$.

Enakost, ki velja za vse vrednosti spremenljivk, pomeni, da sta izraza **enakovredna**: $3x + 5x$ in $8x$ imata pri vsaki vrednosti $x$ isto vrednost, le zapisana sta različno.

Za nepodobna člena takšnega pravila ni. Ugotovimo to s protiprimerom: za $x = 2$ je $x + x^2 = 2 + 4 = 6$, medtem ko bi $2x^2$ dalo $8$, $x^3$ pa tudi $8$. Zato $x + x^2$ ne moremo zapisati z enim členom.

## Preveri se

? Kateri izraz ustreza besedilu »tretjina števila $x$, zmanjšana za $5$«?
- $3x - 5$
+ $\dfrac{x}{3} - 5$
- $5 - \dfrac{x}{3}$
- $\dfrac{x - 5}{3}$
> Tretjina števila $x$ je $\frac{x}{3}$, zmanjšana za $5$ pomeni, da odštejemo $5$: $\frac{x}{3} - 5$. Izraz $3x$ je trikratnik, ne tretjina, izraz $5 - \frac{x}{3}$ ima obrnjen vrstni red, v zadnjem izrazu pa bi najprej odšteli $5$ in šele nato delili.

? Kolikšna je vrednost izraza $3x^2 - 2x$ za $x = -2$?
- $-8$
- $8$
+ $16$
- $20$
> Vstavimo: $3 \cdot (-2)^2 - 2 \cdot (-2) = 3 \cdot 4 + 4 = 12 + 4 = 16$. Odgovor $8$ dobimo, če $(-2)^2$ napačno izračunamo kot $-4$ ali pozabimo, da je $-2 \cdot (-2) = +4$.

? Katera poenostavitev izraza $5a + 2b - 3a + b$ je pravilna?
- $2a + 2b$
- $8a + 3b$
+ $2a + 3b$
- $5ab$
> Člena z $a$: $5a - 3a = 2a$. Člena z $b$: $2b + b = 3b$ (ker je $b = 1b$). Rezultat je $2a + 3b$. Odgovor $2a + 2b$ pozabi koeficient $1$ pri $b$, odgovor $5ab$ pa napačno združi nepodobna člena.
