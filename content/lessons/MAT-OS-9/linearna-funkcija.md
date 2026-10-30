---
stanje: osnutek
demo: linearna
avtor: AI
---

## Zakaj se tega učimo

Iz 8. razreda že poznaš koordinatni sistem, premo sorazmerje ($y = k \cdot x$) in razmislek, da se pri enakomernem naraščanju količina vsakič poveča za enak znesek. Znaš tudi izračunati vrednost izraza, ko vstaviš število namesto črke.

Linearna funkcija je naslednji korak: opisuje vse situacije, kjer se nekaj spreminja **enakomerno**, a začnemo lahko pri neki vrednosti, ki ni nič. Taksi ima začetno ceno in nato plačaš za vsak prevožen kilometer, telefonski paket ima mesečno naročnino in ceno za dodatne minute, voda v bazenu se polni z nekim pretokom, pa je bil bazen na začetku že delno poln. Z enim samim predpisom lahko napoveš rezultat za poljubno vrednost.

## Razlaga

**1. Kaj je funkcija.** Funkcija vsakemu številu $x$ priredi natanko eno število $y$. Pravimo, da je $x$ **neodvisna spremenljivka**, $y$ pa **odvisna spremenljivka**, ker je njena vrednost odvisna od $x$.

**2. Linearna funkcija.** Linearna funkcija ima predpis

$$y = kx + n,$$

kjer sta $k$ in $n$ dani števili (realni števili). Pogosto pišemo tudi $f(x) = kx + n$.

**3. Graf je premica.** Če v koordinatni sistem narišemo vse pare $(x, y)$, ki ustrezajo predpisu, dobimo **premico**. Zato funkciji rečemo *linearna* (iz besede linija).

**4. Začetna vrednost $n$.** Če v predpis vstavimo $x = 0$, dobimo $y = k \cdot 0 + n = n$. Število $n$ je torej vrednost funkcije pri $x = 0$: premica prečka os $y$ v točki $(0, n)$. Imenujemo ga **začetna vrednost**.

**5. Smerni koeficient $k$.** Število $k$ pove, **za koliko se spremeni $y$, ko se $x$ poveča za $1$**. Imenujemo ga **smerni koeficient**.

- Če je $k > 0$, funkcija **narašča** (premica gre navzgor, ko gledaš od leve proti desni).
- Če je $k < 0$, funkcija **pada** (premica gre navzdol).
- Če je $k = 0$, je $y = n$ vedno enak: premica je **vodoravna**, funkcija je konstantna.

Večja kot je vrednost $|k|$, bolj strma je premica.

**6. Računanje $k$ iz dveh točk.** Če poznaš dve točki na premici, $A(x_1, y_1)$ in $B(x_2, y_2)$, je

$$k = \frac{y_2 - y_1}{x_2 - x_1}.$$

Pri tem je $x_2 \ne x_1$. Števec pove, za koliko se spremeni $y$, imenovalec pa, za koliko se spremeni $x$.

**7. Poseben primer.** Če je $n = 0$, dobimo $y = kx$, torej premo sorazmerje. Njegov graf je premica skozi izhodišče $(0, 0)$.

**8. Ničla funkcije.** Ničla je tisti $x$, pri katerem je $y = 0$. Graf v tej točki seka os $x$. Rešimo enačbo $kx + n = 0$, od koder je $x = -\dfrac{n}{k}$ (če je $k \ne 0$).

## Rešeni primeri

### Primer 1: branje predpisa in izračun vrednosti

Dana je funkcija $y = 2x + 3$. Določi $k$ in $n$ ter izračunaj vrednosti pri $x = 0$, $x = 1$ in $x = 4$.

1. Predpis primerjamo z $y = kx + n$. Število ob $x$ je $k$, samostojno število je $n$. Torej $k = 2$ in $n = 3$.
2. Pri $x = 0$: $y = 2 \cdot 0 + 3 = 3$. To je ravno $n$, kar mora biti.
3. Pri $x = 1$: $y = 2 \cdot 1 + 3 = 5$.
4. Pri $x = 4$: $y = 2 \cdot 4 + 3 = 8 + 3 = 11$.
5. Preverimo: ko se $x$ poveča z $0$ na $1$, se $y$ poveča s $3$ na $5$, torej za $2 = k$. ✓

### Primer 2: predpis iz besedila

Taksi zaračuna začetno ceno $2\,€$ in nato $1{,}5\,€$ za vsak prevožen kilometer. Zapiši funkcijo, ki opisuje ceno $y$ v odvisnosti od prevoženih kilometrov $x$, in izračunaj ceno vožnje dolge $10\,\text{km}$.

1. **Kaj je $n$?** To je vrednost pri $x = 0$, torej cena, ko še nismo prevozili nič: $n = 2$.
2. **Kaj je $k$?** To je sprememba cene za vsak dodatni kilometer: $k = 1{,}5$.
3. **Predpis:** $y = 1{,}5x + 2$.
4. **Račun za $x = 10$:** $y = 1{,}5 \cdot 10 + 2 = 15 + 2 = 17$.
5. **Odgovor.** Vožnja dolga $10\,\text{km}$ stane $17\,€$.

### Primer 3: predpis iz dveh točk

Premica poteka skozi točki $A(1, 5)$ in $B(4, 14)$. Zapiši predpis linearne funkcije.

1. **Smerni koeficient** izračunamo iz razlik: $k = \dfrac{14 - 5}{4 - 1} = \dfrac{9}{3} = 3$.
2. Predpis je torej $y = 3x + n$. Še $n$ neznan.
3. **Določimo $n$:** točka $A$ leži na premici, zato njeni koordinati ustrezata predpisu. Vstavimo $x = 1$, $y = 5$: $5 = 3 \cdot 1 + n$, od tod $n = 5 - 3 = 2$.
4. **Predpis:** $y = 3x + 2$.
5. **Preizkus s točko $B$:** $3 \cdot 4 + 2 = 12 + 2 = 14$. ✓ Predpis velja tudi za drugo točko.
6. **Ničla:** $3x + 2 = 0$, $x = -\dfrac{2}{3}$. Premica seka os $x$ v točki $\left(-\dfrac{2}{3}, 0\right)$.

## Pogoste napake

- **Zamenjana $k$ in $n$.** V $y = 5x + 1$ je $k = 5$ (ob $x$), $n = 1$ (samostojno število). Začetna vrednost je tista, ki jo dobiš pri $x = 0$.
- **Napačen predznak.** V $y = 4 - 3x$ je $k = -3$, ne $3$. Preden prebereš $k$ in $n$, predpis uredi v obliko $y = kx + n$: $y = -3x + 4$.
- **Obrnjen kvocient.** Pri $k = \dfrac{y_2 - y_1}{x_2 - x_1}$ je v števcu razlika $y$-ov, ne $x$-ov. Prav tako moraš odštevati v enakem vrstnem redu zgoraj in spodaj: $\dfrac{14-5}{4-1}$, ne $\dfrac{14-5}{1-4}$.
- **Pozabljeno, da $n$ ni vedno pozitiven.** Pri $y = 2x - 5$ je $n = -5$ in premica seka os $y$ pod osjo $x$, v točki $(0, -5)$.
- **Mešanje naraščanja in strmine.** Predznak $k$ pove, ali funkcija narašča ali pada, velikost $|k|$ pa, kako strma je premica. Premica s $k = -4$ je strmejša od premice s $k = 2$, a pada.

## Povzetek

- Linearna funkcija ima predpis $y = kx + n$, njen graf je premica.
- $k$ je smerni koeficient: pove, za koliko se spremeni $y$, ko se $x$ poveča za $1$. Pri $k > 0$ funkcija narašča, pri $k < 0$ pada, pri $k = 0$ je konstantna.
- $n$ je začetna vrednost: $y$ pri $x = 0$, premica seka os $y$ v točki $(0, n)$.
- Iz dveh točk: $k = \dfrac{y_2 - y_1}{x_2 - x_1}$, nato $n$ dobiš z vstavitvijo ene točke.
- Ničla: $x = -\dfrac{n}{k}$, kjer premica seka os $x$.

## Drugače: Na sliki

Spodaj odpri interaktivno demonstracijo »Graf funkcije $y = kx + n$« in premikaj drsnika za $k$ in $n$.

- Ko spreminjaš **$n$**, se premica premika gor in dol, njen naklon pa ostane enak. Vedno seka os $y$ pri vrednosti $n$.
- Ko spreminjaš **$k$**, se premica vrti okoli točke na osi $y$. Pri večjem $k$ je strmejša, pri $k = 0$ je vodoravna, pri negativnem $k$ pada.

Smerni koeficient si predstavljaj kot **stopnico**: z začetne točke se premakneš $1$ v desno in nato za $k$ navzgor (če je $k$ negativen, navzdol). Pri $k = 2$ je to $1$ desno, $2$ gor. Pri $k = \dfrac{1}{2}$ je to $2$ desno in $1$ gor.

Poskusi tudi s simulacijo spodaj (»Graf funkcije y = kx + n«): spreminjaj naklon in začetno vrednost ter opazuj, kako se spreminja enačba premice.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si, da imaš v hranilniku $20\,€$ in vsak teden prihraniš še $5\,€$. Po $x$ tednih imaš

$$y = 5x + 20$$

evrov. Število $20$ je $n$, torej kolikor imaš na začetku. Število $5$ je $k$, torej kolikor se doda vsak teden. Po $4$ tednih imaš $5 \cdot 4 + 20 = 40\,€$.

Zdaj obratno: nekdo ima na računu $100\,€$ in vsak mesec porabi $15\,€$. Zapiše se $y = -15x + 100$. Smerni koeficient je **negativen**, ker znesek pada. Pri $x = 4$ je $y = -15 \cdot 4 + 100 = 40\,€$.

Vedno, ko se nekaj spreminja za enak znesek v enaki enoti časa ali razdalje, gre za linearno funkcijo.

## Drugače: Korak za korakom s številkami

Narišimo graf funkcije $y = 2x - 1$ s tabelo.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|
| $y = 2x - 1$ | $-5$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |

Račun za prvo vrednost: $2 \cdot (-2) - 1 = -4 - 1 = -5$.

Opazuj zadnjo vrstico: vsakič, ko se $x$ poveča za $1$, se $y$ poveča za $2$. To je $k = 2$. Pri $x = 0$ je $y = -1$, to je $n$.

Recept za risanje:

1. Označi točko $(0, n)$, tukaj $(0, -1)$.
2. Od te točke pojdi $1$ v desno in $k$ gor (če $k < 0$, dol): pridemo do $(1, 1)$.
3. Skozi točki potegni premico.
4. Preveri s tretjo točko, npr. $(3, 5)$: $2 \cdot 3 - 1 = 5$. ✓

## Drugače: Bolj natančno

Zakaj je razmerje $\dfrac{y_2 - y_1}{x_2 - x_1}$ pri vsakem paru točk na premici enako?

Naj bosta $(x_1, y_1)$ in $(x_2, y_2)$ točki na grafu funkcije $y = kx + n$. Potem velja

$$y_1 = kx_1 + n, \qquad y_2 = kx_2 + n.$$

Ko drugo enakost odštejemo od prve, se $n$ pokrajša:

$$y_2 - y_1 = kx_2 - kx_1 = k(x_2 - x_1).$$

Če delimo z $x_2 - x_1 \ne 0$, dobimo

$$\frac{y_2 - y_1}{x_2 - x_1} = k.$$

Razmerje je torej neodvisno od izbire točk in je enako $k$. Ravno to pomeni, da je rast enakomerna: ko se $x$ poveča za določen znesek, se $y$ vedno spremeni za $k$-kratnik tega zneska.

## Preveri se

? Katera je začetna vrednost funkcije $y = -3x + 7$?
- $-3$
+ $7$
- $3$
- $-7$
> Začetna vrednost je $y$ pri $x = 0$: $-3 \cdot 0 + 7 = 7$. Število $-3$ je smerni koeficient.

? Kolikšen je smerni koeficient premice skozi točki $A(2, 1)$ in $B(5, 10)$?
- $\dfrac{1}{3}$
- $9$
+ $3$
> $k = \dfrac{10 - 1}{5 - 2} = \dfrac{9}{3} = 3$. Odgovor $9$ je samo razlika $y$-ov brez deljenja, $\dfrac{1}{3}$ pa je obrnjen kvocient.

? Katera trditev drži za funkcijo $y = -2x + 5$?
- Funkcija narašča, ker je $n = 5$ pozitiven.
+ Funkcija pada in seka os $y$ v točki $(0, 5)$.
- Funkcija pada in seka os $y$ v točki $(0, -2)$.
> Ker je $k = -2 < 0$, funkcija pada. Pri $x = 0$ je $y = n = 5$, zato premica seka os $y$ v točki $(0, 5)$.

:::simboli
y | vrednost funkcije (odvisna spremenljivka) | y = kx + n | | pri hranilniku privarčevani znesek v €
x | neodvisna spremenljivka | | | pri hranilniku število tednov
k | smerni koeficient premice | k = \frac{y_2 - y_1}{x_2 - x_1} | | pove, za koliko se y spremeni, ko x poveča za 1
n | začetna vrednost (presečišče z osjo y) | | |
x_1, x_2 | abscisi dveh točk na premici | | | x₂ ≠ x₁
y_1, y_2 | ordinati dveh točk na premici | | |
:::
