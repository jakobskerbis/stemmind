---
stanje: osnutek
phet: number-line-integers
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Že od nižjih razredov poznaš naravna števila ($1, 2, 3, \dots$) in število $0$. Z njimi štejemo in računamo, vendar se hitro pokaže, da ne zadoščajo. Kako zapišeš temperaturo $5$ stopinj pod ničlo? Kako zapišeš dolg $20$ evrov ali globino potapljača pod morsko gladino? Za take primere potrebujemo **cela števila**.

V 8. razredu cela števila vključimo v širši sklop racionalnih števil. Če dobro razumeš številsko premico, nasprotna števila in absolutno vrednost, boš zlahka računal z negativnimi števili, reševal enačbe in kasneje risal grafe v koordinatnem sistemu.

## Razlaga

**1. Cela števila.** Množico celih števil sestavljajo naravna števila, število $0$ in nasprotna števila naravnih števil:

$$\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$$

Števila večja od $0$ so **pozitivna**, števila manjša od $0$ so **negativna**. Število $0$ ni ne pozitivno ne negativno.

**2. Številska premica.** Narišemo premico, na njej izberemo točko za $0$ in enotsko razdaljo. Pozitivna števila nanesemo na desno, negativna na levo od ničle. Razmik med sosednjima celima številoma je povsod enak.

- Večje število leži bolj **desno**.
- Manjše število leži bolj **levo**.

Zato je $-2 > -5$, saj je $-2$ na številski premici desno od $-5$. Vsako negativno število je manjše od vsakega pozitivnega in od $0$.

**3. Nasprotno število.** Nasprotno število števila $a$ zapišemo $-a$. Na številski premici ležita $a$ in $-a$ na **enaki razdalji od ničle**, vendar na nasprotnih straneh.

- Nasprotno število od $7$ je $-7$.
- Nasprotno število od $-4$ je $4$, saj velja $-(-4) = 4$.
- Nasprotno število od $0$ je $0$.

Vsota števila in njegovega nasprotnega je vedno $0$: $a + (-a) = 0$.

**4. Absolutna vrednost.** Absolutna vrednost števila $a$, zapisana $|a|$, je **razdalja števila $a$ od ničle** na številski premici. Razdalja ni nikoli negativna, zato je $|a| \ge 0$.

$$|a| = \begin{cases} a, & a \ge 0 \\ -a, & a < 0 \end{cases}$$

Primeri: $|5| = 5$, $|-5| = 5$, $|0| = 0$.

Nasprotni števili imata enako absolutno vrednost: $|a| = |-a|$.

**5. Primerjanje celih števil.**

- Pozitivno število je večje od negativnega.
- Od dveh pozitivnih števil je večje tisto z večjo absolutno vrednostjo.
- Od dveh negativnih števil je večje tisto z **manjšo** absolutno vrednostjo (je bližje ničli).

## Rešeni primeri

### Primer 1: številska premica in primerjanje

Razvrsti števila $3, -6, 0, -1, 5$ od najmanjšega do največjega.

1. Negativna števila so manjša od $0$ in od pozitivnih. To sta $-6$ in $-1$.
2. Med negativnima je večje tisto, ki je bližje ničli. $|-1| = 1$ je manj kot $|-6| = 6$, zato je $-6 < -1$.
3. Pozitivni števili: $3 < 5$.
4. Združimo: $-6 < -1 < 0 < 3 < 5$.
5. Preverimo: na številski premici gre vrstni red od leve proti desni. ✓

### Primer 2: nasprotno število in absolutna vrednost

Določi nasprotno število in absolutno vrednost za števili $-9$ in $12$.

1. Za $-9$: nasprotno število je $-(-9) = 9$ (zamenjamo predznak). Absolutna vrednost je razdalja od ničle: $|-9| = 9$.
2. Za $12$: nasprotno število je $-12$. Absolutna vrednost je $|12| = 12$.
3. Opazimo: $|-9| = |9| = 9$ in $|12| = |-12| = 12$. Nasprotni števili imata res enako absolutno vrednost. ✓

### Primer 3: besedilna naloga

Zjutraj je bila temperatura $-4\,^\circ\text{C}$, opoldne $3\,^\circ\text{C}$, zvečer pa $-7\,^\circ\text{C}$. (a) Kdaj je bilo najhladneje? (b) Za koliko stopinj se je temperatura od jutra do opoldneva dvignila?

1. **(a)** Primerjamo $-4$, $3$ in $-7$. Negativni sta $-4$ in $-7$. Ker je $|-7| = 7 > 4 = |-4|$, je $-7 < -4$. Najmanjše število je $-7$, zato je bilo najhladneje zvečer.
2. **(b)** Razliko izračunamo kot razdaljo na številski premici. Od $-4$ do $0$ je $4$ enote, od $0$ do $3$ so še $3$ enote.
3. Skupaj: $4 + 3 = 7$. Temperatura se je dvignila za $7\,^\circ\text{C}$.
4. Preverimo: $-4 + 7 = 3$. ✓

## Pogoste napake

- **»$-7$ je večje od $-4$, ker je $7 > 4$.«** Pri negativnih številih je ravno obratno. Večje je tisto, ki je bolj desno, torej $-4 > -7$.
- **Absolutna vrednost ni »odstranitev minusa« pri vsakem številu.** $|-5| = 5$, vendar $|5| = 5$ in $|0| = 0$. Pomni: gre za razdaljo od ničle.
- **Nasprotno število ni vedno negativno.** Nasprotno število od $-3$ je $3$, pozitivno.
- **Napačen zapis $-(-4) = -4$.** Pravilno je $-(-4) = 4$.
- **Pozabljena ničla.** Ničla je celo število in je nasprotna sama sebi.

## Povzetek

- Cela števila: $\dots, -2, -1, 0, 1, 2, \dots$ (oznaka $\mathbb{Z}$).
- Na številski premici je večje število vedno bolj desno.
- Nasprotni števili $a$ in $-a$ ležita simetrično glede na $0$ in imata vsoto $0$.
- Absolutna vrednost $|a|$ je razdalja števila od ničle in ni nikoli negativna.
- Med dvema negativnima številoma je večje tisto z manjšo absolutno vrednostjo.

## Drugače: Na sliki

Predstavljaj si vodoravno ravnilo, ki se razteza v obe smeri. Na sredini je oznaka $0$ kot ogledalo. Število $4$ leži štiri korake desno od ogledala, njegovo nasprotno število $-4$ pa štiri korake levo.

```
 -5  -4  -3  -2  -1   0   1   2   3   4   5
  |---|---|---|---|---|---|---|---|---|---|
```

Absolutna vrednost je dolžina poti od ničle do števila, ne glede na smer. Od $0$ do $-4$ je $4$ korakov, od $0$ do $4$ tudi $4$ korake, zato $|-4| = |4| = 4$. V simulaciji premikaj točko po številski premici in opazuj, kako se spreminjata število in njegova razdalja od ničle.

## Drugače: Iz vsakdanjega življenja

**Dvigalo v stolpnici s kletjo.** Pritličje je nadstropje $0$, višja nadstropja so pozitivna, kleti negativne. Nadstropje $-2$ je dve nadstropji pod pritličjem. Nasprotno število od $3$ je $-3$: tretje nadstropje navzgor in tretja klet navzdol sta enako daleč od pritličja. To je absolutna vrednost: pot, ki jo prevozi dvigalo, ne glede na smer.

**Bančni račun.** Stanje $-30\,\text{€}$ pomeni dolg. Dolg $30\,\text{€}$ je »manj« kot dolg $10\,\text{€}$, torej $-30 < -10$, čeprav je $30$ večje od $10$. Absolutna vrednost $|-30| = 30$ pove, koliko evrov je v igri, ne glede na to, ali jih imaš ali dolguješ.

## Drugače: Korak za korakom s številkami

Primerjaj $-8$ in $-3$ po postopku:

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Ali sta števili različnih predznakov? | Ne, obe sta negativni |
| 2 | Izračunamo absolutni vrednosti | $\lvert -8\rvert = 8$, $\lvert -3\rvert = 3$ |
| 3 | Pri negativnih velja obrat: večja absolutna vrednost pomeni manjše število | $8 > 3$, zato $-8 < -3$ |
| 4 | Preverimo na premici | $-8$ je bolj levo kot $-3$ ✓ |

Za iskanje razdalje med dvema številoma na premici uporabi: večje število minus manjše. Razdalja med $-8$ in $-3$ je $-3 - (-8) = 5$. Prešteješ lahko tudi korake: $-8, -7, -6, -5, -4, -3$ je $5$ korakov.

## Drugače: Bolj natančno

Absolutno vrednost definiramo po primerih:

$$|a| = \begin{cases} a, & a \ge 0 \\ -a, & a < 0 \end{cases}$$

Ta definicija je skladna z razdaljo od ničle. Če je $a < 0$, je $-a > 0$, torej je $|a|$ res nenegativna. Na primer $a = -6$: $|-6| = -(-6) = 6$.

Iz definicije sledi: $|a| \ge 0$ za vsak $a$, $|a| = 0$ natanko tedaj, ko je $a = 0$, in $|a| = |-a|$.

Če je $|x| = 5$, imamo dve rešitvi, $x = 5$ ali $x = -5$, saj sta na razdalji $5$ od ničle natanko ti dve števili. Enačba $|x| = -2$ nima rešitve, ker razdalja ne more biti negativna.

## Preveri se

? Katera trditev o številih $-9$ in $-2$ je pravilna?
- $-9 > -2$, ker je $9 > 2$
+ $-9 < -2$, ker je $-9$ bolj levo na številski premici
- $-9 = -2$, ker sta obe negativni
> Večje število je vedno bolj desno. $-9$ je levo od $-2$, zato je $-9 < -2$. Napaka je v primerjanju samo števk, ne upoštevaš pa predznaka.

? Koliko je $|-11| + |4|$?
- $-7$
- $7$
+ $15$
- $-15$
> Absolutni vrednosti sta $|-11| = 11$ in $|4| = 4$, vsota je $11 + 4 = 15$. Odgovor $7$ dobiš, če števila seštevaš kar s predznaki ($11 - 4$).

? Katero število je nasprotno številu $-6$?
- $-6$
- $\frac{1}{6}$
+ $6$
> Nasprotno število ima enako absolutno vrednost, a nasprotni predznak: $-(-6) = 6$. Število $\frac{1}{6}$ je obratna vrednost, ne nasprotno število.
