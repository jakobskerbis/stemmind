---
stanje: osnutek
demo: linearna
avtor: AI
---

## Zakaj se tega učimo

Iz osnovne šole že poznaš koordinatni sistem, razmerja in sorazmerje ter reševanje preprostih enačb. Veš tudi, da lahko odvisnost dveh količin zapišemo s formulo in jo narišemo kot graf.

Linearna funkcija je najpreprostejši način, kako opišemo enakomerno spreminjanje: cena glede na število kupljenih kosov, pot pri enakomerni hitrosti, strošek taksija glede na prevožene kilometre. Če poznaš formulo, lahko **napovedeš vrednost, ki je še nisi izmeril**, in ugotoviš, kdaj se zgodi nekaj pomembnega (npr. kdaj bo stanje na računu enako nič). Linearna funkcija je tudi temelj za enačbe, neenačbe in sisteme enačb, ki sledijo.

## Razlaga

**1. Definicija.** Linearna funkcija je funkcija oblike

$$f(x) = kx + n, \qquad \text{oziroma} \qquad y = kx + n,$$

kjer sta $k$ in $n$ realni števili. Spremenljivka $x$ je neodvisna, $y$ pa odvisna spremenljivka.

**2. Pomen števil $k$ in $n$.**

- $k$ je **smerni koeficient**. Pove, za koliko se spremeni $y$, ko se $x$ poveča za $1$.
- $n$ je **začetna vrednost**. Pove, kolikšen je $y$ pri $x = 0$, torej kje graf seka os $y$: v točki $(0, n)$.

**3. Graf.** Graf linearne funkcije je **premica**. Za risanje zadostujeta dve točki. Najlažje vzameš točko $(0, n)$ in še eno, ki jo dobiš z vstavljanjem poljubnega $x$.

**4. Smerni koeficient in lega premice.**

- $k > 0$: funkcija je **naraščajoča** (premica gre od leve proti desni navzgor).
- $k < 0$: funkcija je **padajoča** (premica gre navzdol).
- $k = 0$: funkcija je **konstantna** $y = n$, premica je vodoravna.
- Večja ko je $|k|$, strmejša je premica.

**5. Izračun smernega koeficienta iz dveh točk.** Če poznaš točki $A(x_1, y_1)$ in $B(x_2, y_2)$, kjer je $x_1 \ne x_2$, je

$$k = \frac{y_2 - y_1}{x_2 - x_1}.$$

Ulomek pove, koliko se $y$ spremeni na enoto spremembe $x$.

**6. Ničla.** Ničla funkcije je vrednost $x$, pri kateri je $f(x) = 0$. Na grafu je to presečišče z osjo $x$, točka $(x_0, 0)$. Dobimo jo z reševanjem enačbe $kx + n = 0$:

$$x_0 = -\frac{n}{k}, \qquad k \ne 0.$$

Če je $k = 0$ in $n \ne 0$, ničle ni (premica je vzporedna osi $x$). Če je $k = 0$ in $n = 0$, je vsak $x$ ničla.

## Rešeni primeri

### Primer 1 (lažji): graf in ničla

Nariši graf funkcije $f(x) = 2x - 4$ in izračunaj njeno ničlo.

1. Preberemo: $k = 2$, $n = -4$. Ker je $k > 0$, funkcija narašča.
2. Prva točka je presečišče z osjo $y$: $(0, -4)$. Zakaj: pri $x = 0$ je $f(0) = n$.
3. Druga točka: izberemo $x = 3$, $f(3) = 2 \cdot 3 - 4 = 2$, torej $(3, 2)$.
4. Skozi točki $(0,-4)$ in $(3,2)$ potegnemo premico.
5. Ničla: $2x - 4 = 0$, torej $2x = 4$ in $x_0 = 2$. Zakaj: ničla je $x$, pri katerem je $y = 0$.
6. Preverimo: $f(2) = 2 \cdot 2 - 4 = 0$. ✓ Točka $(2, 0)$ leži na premici med izbranima točkama, kar je smiselno.

### Primer 2: funkcija iz dveh točk

Premica poteka skozi točki $A(1, 5)$ in $B(4, -1)$. Zapiši enačbo funkcije.

1. Smerni koeficient: $k = \dfrac{-1 - 5}{4 - 1} = \dfrac{-6}{3} = -2$. Zakaj: ulomek pove spremembo $y$ na enoto $x$. Ker je $k < 0$, funkcija pada, kar se ujema s tem, da $y$ od $5$ pade na $-1$.
2. Zapišemo $y = -2x + n$ in vstavimo točko $A$: $5 = -2 \cdot 1 + n$.
3. Rešimo: $n = 5 + 2 = 7$.
4. Enačba: $y = -2x + 7$.
5. Preverimo z drugo točko: $-2 \cdot 4 + 7 = -8 + 7 = -1$. ✓
6. Ničla: $-2x + 7 = 0$, $x_0 = \dfrac{7}{2} = 3{,}5$.

### Primer 3 (težji): besedilna naloga

Taksist zaračuna osnovno ceno $3\,\text{€}$ in $1{,}20\,\text{€}$ za vsak prevožen kilometer. (a) Zapiši funkcijo cene. (b) Kolikšna je cena vožnje $15\,\text{km}$? (c) Koliko kilometrov smo prevozili, če smo plačali $27\,\text{€}$?

1. **Spremenljivki.** Naj bo $x$ število prevoženih kilometrov in $y$ cena v evrih.
2. **(a)** Cena ob začetku ($x = 0$) je $3$, zato je $n = 3$. Na vsak kilometer se cena poveča za $1{,}20$, zato je $k = 1{,}2$. Funkcija: $y = 1{,}2x + 3$.
3. **(b)** $y = 1{,}2 \cdot 15 + 3 = 18 + 3 = 21$. Cena je $21\,\text{€}$.
4. **(c)** Rešimo enačbo $1{,}2x + 3 = 27$. Odštejemo $3$: $1{,}2x = 24$. Delimo z $1{,}2$: $x = 20$.
5. **Preverimo:** $1{,}2 \cdot 20 + 3 = 24 + 3 = 27$. ✓
6. **Odgovor:** vožnja $15\,\text{km}$ stane $21\,\text{€}$, za $27\,\text{€}$ smo prevozili $20\,\text{km}$.

## Pogoste napake

- **Zamenjava $k$ in $n$.** V zapisu $y = kx + n$ je $k$ ob $x$ (naklon), $n$ je prosti člen (presečišče z osjo $y$). Pri $y = 3x - 5$ je $k = 3$, $n = -5$.
- **Napačen predznak ničle.** Iz $2x - 4 = 0$ sledi $x = 2$, ne $x = -2$. Ničlo vedno izračunaj z reševanjem enačbe in jo preveri z vstavljanjem.
- **Obrnjen ulomek za $k$.** Velja $k = \dfrac{y_2 - y_1}{x_2 - x_1}$: razlika $y$ je v števcu. Pazi tudi, da obe razliki odšteješ v istem vrstnem redu.
- **Ničla kot točka $(0, n)$.** Točka $(0, n)$ je presečišče z osjo $y$, ničla pa je presečišče z osjo $x$.
- **Premalo natančen graf.** Točke narišeš natančno po koordinatah in šele nato potegneš premico z ravnilom. Če tri točke niso na isti premici, je v računu napaka.
- **Pri padajoči funkciji $k$ brez minusa.** Če $y$ z večanjem $x$ pada, je $k$ negativen.

## Povzetek

- Linearna funkcija: $f(x) = kx + n$, graf je premica.
- $k$ je smerni koeficient: $k > 0$ narašča, $k < 0$ pada, $k = 0$ je konstantna funkcija.
- $n$ je začetna vrednost: premica seka os $y$ v točki $(0, n)$.
- Iz dveh točk: $k = \dfrac{y_2 - y_1}{x_2 - x_1}$, nato $n$ dobimo z vstavitvijo ene točke.
- Ničla: $x_0 = -\dfrac{n}{k}$ (za $k \ne 0$), presečišče z osjo $x$.
- Vedno preveri z vstavljanjem v funkcijo.

## Drugače: Na sliki

V demonstraciji »Graf funkcije $y = kx + n$« zgoraj spreminjaj drsnika za $k$ in $n$ ter opazuj premico.

- Ko spreminjaš **$n$**, se premica premika gor in dol, njen naklon pa ostane enak. Vedno gre skozi točko $(0, n)$ na osi $y$.
- Ko spreminjaš **$k$**, se premica vrti okoli točke $(0, n)$. Pri pozitivnem $k$ gre navzgor, pri negativnem navzdol, pri $k = 0$ je vodoravna.
- Poišči točko, kjer premica seka os $x$. Njena prva koordinata je ničla. Opazuj, da se ničla premakne, ko spremeniš $k$ ali $n$.

Smerni koeficient lahko na sliki vidiš kot »stopnico«: ko greš za $1$ v desno, se premica dvigne (ali spusti) za $k$. Pri $k = 2$ greš $1$ desno in $2$ gor, pri $k = -\tfrac{1}{2}$ greš $2$ desno in $1$ dol.

Simulacija spodaj (»Graf funkcije y = kx + n«) ti omogoča, da premice raziskuješ še naprej: spreminjaš naklon in začetno vrednost ter opazuješ, kako se spremeni enačba.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si, da imaš na prepaidni kartici $10\,\text{€}$ in vsak dan porabiš $2\,\text{€}$. Stanje po $x$ dneh je

$$y = -2x + 10.$$

- $n = 10$: začetno stanje.
- $k = -2$: stanje pada za $2\,\text{€}$ na dan.
- Ničla: $-2x + 10 = 0$, torej $x = 5$. Čez $5$ dni bo kartica prazna.

Podobno je pri hoji z enakomerno hitrostjo: če začneš $100\,\text{m}$ od doma in hodiš stran s hitrostjo $1{,}5\,\text{m/s}$, je razdalja $y = 1{,}5x + 100$ (v metrih, $x$ v sekundah). Hitrost je smerni koeficient.

Vsakič, ko se nekaj spreminja **za enako količino na enoto**, je to linearna funkcija. Če se spreminja vedno hitreje ali počasneje, ni linearna.

## Drugače: Korak za korakom s številkami

Recept za risanje grafa in iskanje ničle pri $f(x) = -\tfrac{1}{2}x + 3$.

1. Preberi $k = -\tfrac{1}{2}$ in $n = 3$.
2. Tabela vrednosti:

| $x$ | $-2$ | $0$ | $2$ | $6$ |
|---|---|---|---|---|
| $y = -\tfrac{1}{2}x + 3$ | $4$ | $3$ | $2$ | $0$ |

3. Preveri izračune: $-\tfrac{1}{2}\cdot(-2) + 3 = 1 + 3 = 4$; $-\tfrac{1}{2}\cdot 2 + 3 = -1 + 3 = 2$; $-\tfrac{1}{2}\cdot 6 + 3 = -3 + 3 = 0$.
4. Opaziš: ko se $x$ poveča za $2$, se $y$ zmanjša za $1$. Razmerje je $\dfrac{-1}{2} = -\dfrac{1}{2} = k$. Vrednosti v tabeli so torej skladne s smernim koeficientom.
5. Ničla: $-\tfrac{1}{2}x + 3 = 0$, $x = 6$. Res, v tabeli je $y = 0$ pri $x = 6$.
6. Točke nariši v koordinatni sistem in jih poveži s premico.

## Drugače: Bolj natančno

**Zakaj je graf premica in zakaj $k$ ne zavisi od izbire točk?**

Vzemimo dve poljubni točki na grafu: $A(x_1, kx_1 + n)$ in $B(x_2, kx_2 + n)$. Izračunajmo količnik sprememb:

$$\frac{y_2 - y_1}{x_2 - x_1} = \frac{(kx_2 + n) - (kx_1 + n)}{x_2 - x_1} = \frac{k(x_2 - x_1)}{x_2 - x_1} = k.$$

Razmerje je za **vsak** par točk enako $k$. To je prav lastnost premice: konstanten naklon. Zato lahko $k$ izračunamo iz katerih koli dveh točk.

**Ničla.** Iz $kx + n = 0$ dobimo $kx = -n$. Če je $k \neq 0$, lahko delimo s $k$ in dobimo $x_0 = -\dfrac{n}{k}$. Če je $k = 0$, enačba postane $n = 0$, ki je ali vedno resnična (če je $n = 0$) ali nikoli (če je $n \ne 0$). Zato konstantna funkcija nima ene same ničle.

## Preveri se

? Katera je ničla funkcije $f(x) = 3x - 12$?
- $x = -4$
+ $x = 4$
- $x = -12$
- $x = 12$
> Rešimo $3x - 12 = 0$, torej $3x = 12$ in $x = 4$. Vrednost $-12$ je presečišče z osjo $y$ ($f(0) = -12$), ne ničla.

? Premica poteka skozi točki $(2, 1)$ in $(5, 7)$. Kolikšen je smerni koeficient?
- $k = \dfrac{1}{2}$
- $k = 3$
+ $k = 2$
- $k = -2$
> $k = \dfrac{7 - 1}{5 - 2} = \dfrac{6}{3} = 2$. Odgovor $\dfrac12$ je obrnjen ulomek, $-2$ pa bi veljal za padajočo funkcijo.

? Kaj lahko rečeš o funkciji $y = -4x + 1$?
- Pada in seka os $y$ v točki $(0, -4)$.
- Narašča in seka os $y$ v točki $(0, 1)$.
+ Pada in seka os $y$ v točki $(0, 1)$.
> Smerni koeficient $k = -4$ je negativen, zato funkcija pada. Prosti člen $n = 1$ pove, da premica seka os $y$ v točki $(0, 1)$.
