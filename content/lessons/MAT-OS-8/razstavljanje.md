---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih ur že znaš množiti mnogočlen z enočlenikom, npr. $3(2x + 5) = 6x + 15$. To imenujemo **razčlenjevanje** ali odpravljanje oklepaja. Uporabljaš pravilo o razdeljevanju (distributivnost): $a(b + c) = ab + ac$.

Danes pot obrnemo. Iz izraza $6x + 15$ bomo spet naredili $3(2x + 5)$. Temu pravimo **razstavljanje**. Ime je smiselno: vsoto razstavimo na faktorje, torej jo zapišemo kot produkt.

Razstavljanje je uporabno, ker:

- so izrazi v obliki produkta krajši in preglednejši,
- lahko krajšamo ulomke z izrazi (to boš potreboval kmalu),
- bomo kasneje reševali enačbe, v katerih bo razstavljanje ključni korak,
- olajša tudi računanje na pamet, npr. $37 \cdot 15 + 37 \cdot 85 = 37 \cdot 100 = 3700$.

## Razlaga

**1. Faktor in produkt.** Faktorji so števila ali izrazi, ki jih med seboj množimo. V zapisu $3 \cdot (2x + 5)$ sta faktorja $3$ in $(2x + 5)$. Rezultatu množenja pravimo produkt.

**2. Razstaviti izraz** pomeni zapisati ga kot produkt dveh ali več faktorjev.

**3. Izpostavljanje skupnega faktorja.** Če ima vsak člen vsote isti faktor, ga zapišemo pred oklepaj, v oklepaju pa ostane, kar ostane po deljenju:

$$ab + ac = a(b + c)$$

Faktorju $a$ pravimo **skupni faktor**. To je ravno pravilo o razdeljevanju, prebrano od desne proti levi.

**4. Kako poiščemo skupni faktor.** Pri izrazih s števili in spremenljivkami gledamo dvoje:

- **Števila (koeficienti):** poiščemo največji skupni delitelj (NSD) koeficientov. Za $12$ in $18$ je to $6$.
- **Spremenljivke:** vzamemo tisto, ki se pojavi v **vseh** členih, in sicer z **najmanjšo** potenco. Za $x^3$ in $x^2$ je to $x^2$.

Skupni faktor je produkt obojega.

**5. Postopek v korakih.**

1. Poišči največji skupni faktor vseh členov.
2. Zapiši ga pred oklepaj.
3. V oklepaj zapiši rezultat deljenja vsakega člena s skupnim faktorjem.
4. **Preveri** tako, da oklepaj spet pomnožiš. Dobiti moraš začetni izraz.

**6. Izpostavljanje negativnega predznaka.** Včasih je lepše izpostaviti negativen faktor, npr. ko je prvi člen negativen. Takrat se predznaki vseh členov v oklepaju obrnejo:

$$-4x^2 - 10x = -2x(2x + 5)$$

Preveri: $-2x \cdot 2x = -4x^2$ in $-2x \cdot 5 = -10x$. ✓

## Rešeni primeri

### Primer 1: samo števila

Razstavi izraz $6x + 9$.

1. Poiščemo NSD koeficientov: $\text{NSD}(6, 9) = 3$. Spremenljivke $x$ drugi člen nima, zato je ne izpostavimo.
2. Skupni faktor je $3$. Zapišemo ga pred oklepaj.
3. Vsak člen delimo s $3$: $6x : 3 = 2x$ in $9 : 3 = 3$.
4. Rezultat: $6x + 9 = 3(2x + 3)$.
5. Preverimo: $3 \cdot 2x + 3 \cdot 3 = 6x + 9$. ✓

### Primer 2: števila in več spremenljivk

Razstavi izraz $12a^2b - 18ab^2 + 6ab$.

1. **Števila.** $\text{NSD}(12, 18, 6) = 6$.
2. **Spremenljivka $a$.** Nastopa v vseh treh členih, z eksponenti $2$, $1$, $1$. Najmanjši je $1$, zato izpostavimo $a$.
3. **Spremenljivka $b$.** Eksponenti so $1$, $2$, $1$. Najmanjši je $1$, zato izpostavimo $b$.
4. Skupni faktor je $6ab$.
5. **Deljenje členov:**
   - $12a^2b : 6ab = 2a$,
   - $18ab^2 : 6ab = 3b$,
   - $6ab : 6ab = 1$. Tu ne smemo pozabiti enice.
6. Rezultat: $12a^2b - 18ab^2 + 6ab = 6ab(2a - 3b + 1)$.
7. Preverimo: $6ab \cdot 2a = 12a^2b$, $6ab \cdot 3b = 18ab^2$, $6ab \cdot 1 = 6ab$. Predznak pri drugem členu ostane minus. ✓

### Primer 3: besedilna naloga

Ploščina pravokotnika je $S = 8x^2 + 12x$. Zapiši ploščino kot produkt dolžin stranic. Preveri za $x = 5$.

1. Ploščina pravokotnika je produkt stranic, zato iščemo zapis $S = \text{(stranica)} \cdot \text{(stranica)}$. To je ravno razstavljanje.
2. NSD$(8, 12) = 4$, spremenljivka $x$ je v obeh členih, najmanjši eksponent je $1$. Skupni faktor je $4x$.
3. Delimo: $8x^2 : 4x = 2x$ in $12x : 4x = 3$.
4. $S = 4x(2x + 3)$. Stranici sta $4x$ in $2x + 3$.
5. **Preverimo s številom.** Za $x = 5$ je $8 \cdot 25 + 12 \cdot 5 = 200 + 60 = 260$. Po razstavljenem zapisu je $4 \cdot 5 \cdot (2 \cdot 5 + 3) = 20 \cdot 13 = 260$. Rezultata sta enaka. ✓

## Pogoste napake

- **Pozabljena enica.** Ko je člen enak skupnemu faktorju, v oklepaju ostane $1$, ne nič. Pravilno je $3x + 3 = 3(x + 1)$, napačno je $3(x)$.
- **Nepopolno izpostavljanje.** Zapis $12x + 18 = 2(6x + 9)$ ni končan, ker imata $6x$ in $9$ še skupni faktor $3$. Izpostaviti moraš **največji** skupni faktor: $12x + 18 = 6(2x + 3)$.
- **Napačni predznaki pri negativnem faktorju.** Pravilno je $-2x - 6 = -2(x + 3)$. Napačno je $-2(x - 3)$, ker bi po množenju dobil $-2x + 6$.
- **Izpostavljena spremenljivka, ki je ni v vseh členih.** Pri $3x^2 + 5y$ skupne spremenljivke ni. Izpostavimo lahko le tisto, kar nastopa v vseh členih.
- **Brez preverjanja.** Oklepaj pomnoži nazaj. Če ne dobiš začetnega izraza, je v razstavljanju napaka.

## Povzetek

- Razstaviti izraz pomeni zapisati ga kot produkt faktorjev.
- Izpostavljanje skupnega faktorja je obrnjeno pravilo o razdeljevanju: $ab + ac = a(b + c)$.
- Skupni faktor sestavljata NSD koeficientov in vsaka skupna spremenljivka z najmanjšo potenco.
- V oklepaj zapišemo količnike členov in skupnega faktorja. Pazi na enico, kadar je člen enak faktorju.
- Pri izpostavljanju negativnega faktorja se predznaki v oklepaju obrnejo.
- Vedno preveri z množenjem oklepaja.

## Drugače: Na sliki

Pravokotnik z višino $4x$ razdelimo na dva dela. Levi del je širok $2x$ in ima ploščino $4x \cdot 2x = 8x^2$. Desni del je širok $3$ in ima ploščino $4x \cdot 3 = 12x$.

Skupna ploščina je $8x^2 + 12x$. Isti lik pa lahko opišemo tudi kot **en velik pravokotnik** z višino $4x$ in širino $2x + 3$. Ploščina je $4x(2x + 3)$.

Izpostavljanje skupnega faktorja je torej to, da dva pravokotnika z enako višino zlepimo v enega. Skupni faktor je stranica, ki jo imata oba pravokotnika enako dolgo.

## Drugače: Iz vsakdanjega življenja

V trgovini kupiš $7$ zvezkov po $3{,}20\,€$ in $7$ svinčnikov po $1{,}80\,€$. Račun je:

$$7 \cdot 3{,}20 + 7 \cdot 1{,}80$$

Število $7$ nastopa v obeh členih, zato ga izpostavimo:

$$7 \cdot (3{,}20 + 1{,}80) = 7 \cdot 5 = 35\,€$$

Na pamet je to precej lažje kot množiti vsak del posebej. Razmišljaš takole: *vsak izdelek pride sedemkrat, zato je ceni zvezka in svinčnika skupaj, to je $5\,€$, treba pomnožiti s $7$.*

Enako deluje pri $37 \cdot 15 + 37 \cdot 85 = 37 \cdot (15 + 85) = 37 \cdot 100 = 3700$.

## Drugače: Korak za korakom s številkami

Razstavimo $20x^3 - 30x^2 + 10x$. Vse zapišimo v tabelo:

| | $20x^3$ | $-30x^2$ | $10x$ | skupno |
|---|---|---|---|---|
| koeficient | $20$ | $30$ | $10$ | $\text{NSD} = 10$ |
| potenca $x$ | $3$ | $2$ | $1$ | najmanjša: $x^1$ |

Skupni faktor je $10x$. Zdaj vsak člen delimo z njim:

| člen | količnik |
|---|---|
| $20x^3 : 10x$ | $2x^2$ |
| $-30x^2 : 10x$ | $-3x$ |
| $10x : 10x$ | $1$ |

Rezultat: $20x^3 - 30x^2 + 10x = 10x(2x^2 - 3x + 1)$.

Preverjanje: $10x \cdot 2x^2 = 20x^3$, $10x \cdot (-3x) = -30x^2$, $10x \cdot 1 = 10x$. ✓

## Drugače: Bolj natančno

Pravilo o razdeljevanju pravi, da za poljubna števila ali izraze velja $a(b + c) = ab + ac$. Enakost lahko beremo v obe smeri. Od leve proti desni odpravljamo oklepaj (razčlenjujemo), od desne proti levi izpostavljamo skupni faktor (razstavljamo).

**Zakaj izpostavimo največji skupni faktor?** Vzemimo $12x + 18$. Izpostavimo lahko $2$:

$$12x + 18 = 2(6x + 9)$$

Vendar sta tudi $6x$ in $9$ deljiva s $3$, torej $6x + 9 = 3(2x + 3)$. Skupaj:

$$12x + 18 = 2 \cdot 3 \cdot (2x + 3) = 6(2x + 3)$$

Če izpostavimo manjši faktor, v oklepaju ostane še skupni faktor in razstavljanje ni končano. Zato vzamemo NSD, ki ga tako ne moremo več povečati.

Zanimivost pri računanju s števili: $37 \cdot 15 + 37 \cdot 85 = 37 \cdot 100 = 3700$. Če bi množil posebej, bi dobil $555 + 3145 = 3700$. Rezultat je isti, račun pa precej krajši.

## Preveri se

? Razstavi izraz $15x^2 - 10x$.
- $5(3x^2 - 2x)$
- $5x(3x + 2)$
+ $5x(3x - 2)$
> $\text{NSD}(15, 10) = 5$, najmanjša potenca $x$ je $1$, zato je skupni faktor $5x$. Delimo: $15x^2 : 5x = 3x$ in $-10x : 5x = -2$. Zapis $5(3x^2 - 2x)$ ni končan, ker v oklepaju ostane skupni faktor $x$.

? Razstavi izraz $8a^2b + 12ab^2$.
- $2ab(4a + 6b)$
+ $4ab(2a + 3b)$
- $4ab(2a + 3)$
> Skupni faktor je $4ab$ (NSD je $4$, $a$ in $b$ imata najmanjšo potenco $1$). Delimo: $8a^2b : 4ab = 2a$ in $12ab^2 : 4ab = 3b$. Pri $2ab(4a + 6b)$ nismo izpostavili največjega faktorja, pri $4ab(2a + 3)$ pa je drugi člen napačen.

? Razstavi izraz $-6x - 9$, tako da izpostaviš negativen faktor.
- $-3(2x - 3)$
+ $-3(2x + 3)$
- $3(-2x + 3)$
> Izpostavimo $-3$: $-6x : (-3) = 2x$ in $-9 : (-3) = 3$, zato je $-6x - 9 = -3(2x + 3)$. Preverimo: $-3 \cdot 2x = -6x$ in $-3 \cdot 3 = -9$. Ostala zapisa po množenju dasta $-6x + 9$.
