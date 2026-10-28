---
stanje: osnutek
demo: linearna
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

V 8. razredu si spoznal premo sorazmerje in koordinatni sistem: znaš narisati točke $(x, y)$ in veš, da pri premem sorazmerju graf leži na premici skozi izhodišče. V tem letniku to znanje razširimo: funkcijo $y = kx + n$ narišemo, iz grafa preberemo, kje seka osi, in poiščemo ničlo.

Linearne funkcije srečaš povsod, kjer se nekaj spreminja enakomerno. Taksi ima osnovno ceno in ceno na kilometer. Telefonski paket ima mesečno naročnino in ceno na minuto. Graf ti takoj pokaže, koliko bo stalo $10$ kilometrov, in tudi, koliko kilometrov dobiš za določen znesek.

## Razlaga

**1. Linearna funkcija.** Linearna funkcija je funkcija s predpisom

$$y = kx + n,$$

kjer sta $k$ in $n$ realni števili. Spremenljivka $x$ je neodvisna, $y$ je odvisna.

**2. Pomen števil $k$ in $n$.**

- $k$ je **smerni koeficient**. Pove, za koliko se $y$ spremeni, ko se $x$ poveča za $1$. Če je $k > 0$, funkcija narašča. Če je $k < 0$, pada. Če je $k = 0$, je funkcija konstantna ($y = n$) in graf je vodoravna premica.
- $n$ je **začetna vrednost**. To je vrednost $y$ pri $x = 0$, torej graf seka os $y$ v točki $(0, n)$.

**3. Graf je premica.** Graf linearne funkcije je vedno premica. Za risanje zato zadoščata dve točki, tretja služi za preverjanje.

**4. Risanje grafa.**

1. Izračunaj dve (ali tri) točke: izberi vrednosti $x$ in izračunaj $y$.
2. Točke vrišemo v koordinatni sistem.
3. Skoznje potegnemo premico z ravnilom in jo podaljšamo čez točki.

Hiter način: začni v točki $(0, n)$ na osi $y$. Nato se za $1$ premakni v desno in za $k$ navzgor (če je $k$ negativen, navzdol).

**5. Presečišče z osjo $y$.** Pri $x = 0$ je $y = k \cdot 0 + n = n$. Presečišče je $(0, n)$.

**6. Ničla funkcije.** Ničla je vrednost $x$, pri kateri je $y = 0$. Graf tam seka os $x$. Dobimo jo z reševanjem enačbe $kx + n = 0$:

$$x = -\frac{n}{k} \quad (k \neq 0).$$

Presečišče z osjo $x$ je torej točka $\left(-\dfrac{n}{k},\, 0\right)$.

**7. Posebni primeri.** Če je $k = 0$ in $n \neq 0$, graf je vodoravna premica in ničle ni. Če je $n = 0$, graf poteka skozi izhodišče in je ničla $x = 0$.

## Rešeni primeri

### Primer 1 (lažji): narišimo $y = 2x + 1$

1. Iz predpisa preberemo $k = 2$, $n = 1$. Ker je $k > 0$, funkcija narašča.
2. Izračunamo tabelo točk:

| $x$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $y = 2x + 1$ | $1$ | $3$ | $5$ |

3. Točke $(0, 1)$, $(1, 3)$, $(2, 5)$ vrišemo in skoznje potegnemo premico.
4. Preverimo s smernim koeficientom: od $(0,1)$ se za $1$ v desno premaknemo za $2$ navzgor in pridemo v $(1, 3)$. ✓

### Primer 2: ničla in presečišči z osema za $y = -\dfrac{1}{2}x + 3$

1. **Presečišče z osjo $y$:** $x = 0$ da $y = 3$. Točka je $(0, 3)$.
2. **Ničla:** postavimo $y = 0$.
   $$-\frac{1}{2}x + 3 = 0$$
   Odštejemo $3$: $-\dfrac{1}{2}x = -3$. Pomnožimo z $-2$ (da se znebimo koeficienta pri $x$): $x = 6$.
3. **Presečišče z osjo $x$:** $(6, 0)$.
4. **Preverimo:** $-\dfrac{1}{2} \cdot 6 + 3 = -3 + 3 = 0$. ✓
5. Ker je $k = -\dfrac{1}{2} < 0$, funkcija pada. Res: od $(0, 3)$ do $(6, 0)$ gremo navzdol. Za risanje povežemo ti dve točki.

### Primer 3 (težji): besedilna naloga

Taksi zaračuna osnovno ceno $3\,\text{€}$ in $1{,}5\,\text{€}$ za vsak prevožen kilometer. Zapiši funkcijo cene, jo nariši in odgovori: koliko stane vožnja $8\,\text{km}$ in koliko kilometrov se pelješ za $15\,\text{€}$?

1. **Predpis.** Naj bo $x$ število prevoženih kilometrov in $y$ cena v evrih. Cena na kilometer je $k = 1{,}5$, osnovna cena je $n = 3$:
   $$y = 1{,}5x + 3.$$
2. **Točke za graf** ($x \geq 0$, saj kilometri ne morejo biti negativni):

| $x$ (km) | $0$ | $4$ | $8$ |
|---|---|---|---|
| $y$ (€) | $3$ | $9$ | $15$ |

   Račun: $1{,}5 \cdot 4 + 3 = 6 + 3 = 9$ in $1{,}5 \cdot 8 + 3 = 12 + 3 = 15$.
3. **Cena za $8\,\text{km}$:** iz tabele $15\,\text{€}$.
4. **Kilometri za $15\,\text{€}$:** rešimo $1{,}5x + 3 = 15$. Odštejemo $3$: $1{,}5x = 12$. Delimo: $x = 8$.
5. Odgovor: vožnja $8\,\text{km}$ stane $15\,\text{€}$. Za $15\,\text{€}$ se pelješ $8\,\text{km}$. Obe vprašanji sta isti podatek, ker je $(8, 15)$ ena točka na grafu.
6. Graf je tu le **poltrak** z začetkom v $(0, 3)$, ker $x < 0$ nima pomena.

## Pogoste napake

- **Zamenjana $k$ in $n$.** Pri $y = 3x + 5$ je $k = 3$ in $n = 5$. Presečišče z osjo $y$ je $(0, 5)$, ne $(0, 3)$.
- **Napačen predznak pri ničli.** Pri $y = 2x - 6$ iz $2x - 6 = 0$ sledi $x = 3$, ne $x = -3$. Pri $y = 2x + 6$ je ničla $-3$.
- **Zamenjani koordinati.** Točka $(6, 0)$ leži na osi $x$, točka $(0, 6)$ pa na osi $y$.
- **Narisana krivulja ali samo daljica.** Graf je premica, zato jo potegnemo z ravnilom in podaljšamo čez izračunani točki.
- **Napačen premik po smernem koeficientu.** Pri $k = -2$ se za $1$ v desno premakni za $2$ *navzdol*, ne navzgor.

## Povzetek

- Linearna funkcija: $y = kx + n$, graf je premica.
- $k$ je smerni koeficient: $k > 0$ narašča, $k < 0$ pada, $k = 0$ je vodoravna premica.
- Presečišče z osjo $y$: $(0, n)$.
- Ničla: $x = -\dfrac{n}{k}$, presečišče z osjo $x$: $\left(-\dfrac{n}{k}, 0\right)$.
- Za risanje zadoščata dve točki, tretja je preverjanje.

## Drugače: Na sliki

V interaktivni demonstraciji »Graf funkcije $y = kx + n$« spreminjaj $k$ in $n$ ter opazuj premico.

- Ko spreminjaš $n$, se premica premika navzgor in navzdol, njen naklon pa ostane enak. Vedno seka os $y$ pri vrednosti $n$.
- Ko spreminjaš $k$, se premica vrti okoli točke $(0, n)$. Večji kot je $k$, strmejša je. Pri negativnem $k$ premica pada.
- Poišči točko, kjer premica seka os $x$. Njena prva koordinata je ničla. Preveri, ali se ujema z $-\dfrac{n}{k}$.

Poskusi še simulacijo spodaj (»Graf funkcije y = kx + n«): spreminjaj $k$ in $n$ ter opazuj, kako se spreminjata naklon in presečišče z osjo $y$.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si bazen, ki ga polniš. Na začetku je v njem že $20\,\text{l}$ vode ($n = 20$), vsako minuto pa priteče še $5\,\text{l}$ ($k = 5$):

$$y = 5x + 20.$$

Smerni koeficient je »hitrost« spreminjanja, začetna vrednost je stanje, ko začneš meriti. Če pa bazen prazniš s hitrostjo $4\,\text{l}$ na minuto in je v njem $20\,\text{l}$, velja $y = -4x + 20$. Ničla je tedaj trenutek, ko je bazen prazen: $-4x + 20 = 0$, torej $x = 5$ minut.

Zato je ničla pogosto odgovor na vprašanje »kdaj bo zmanjkalo?« ali »kdaj bo dosežena ničelna vrednost?«.

## Drugače: Korak za korakom s številkami

Recept za $y = -2x + 4$:

1. Preberi $k = -2$, $n = 4$. Funkcija pada.
2. Presečišče z osjo $y$: $(0, 4)$.
3. Ničla: $-2x + 4 = 0$, zato $-2x = -4$, torej $x = 2$. Presečišče z osjo $x$: $(2, 0)$.
4. Tabela za preverjanje:

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|
| $y$ | $6$ | $4$ | $2$ | $0$ | $-2$ |

5. Opaziš: ko se $x$ poveča za $1$, se $y$ zmanjša za $2$. To je ravno $k = -2$.
6. Vrišemo točki $(0, 4)$ in $(2, 0)$, potegnemo premico in preverimo, da gre skozi $(3, -2)$.

## Drugače: Bolj natančno

Zakaj je graf linearne funkcije premica in zakaj $k$ pomeni naklon? Vzemimo dve poljubni točki na grafu, $(x_1, y_1)$ in $(x_2, y_2)$, kjer je $y_1 = kx_1 + n$ in $y_2 = kx_2 + n$. Njuna razlika je

$$y_2 - y_1 = k x_2 + n - kx_1 - n = k(x_2 - x_1).$$

Torej je

$$k = \frac{y_2 - y_1}{x_2 - x_1}$$

za vsak par točk na grafu. Razmerje med spremembo $y$ in spremembo $x$ je vedno enako, in prav ta stalnost pomeni, da točke ležijo na premici.

Ničlo dobimo tako: $kx + n = 0$ pomeni $kx = -n$. Če je $k \neq 0$, delimo s $k$ in dobimo $x = -\dfrac{n}{k}$. Če je $k = 0$, je $y = n$ povsod enak: pri $n \neq 0$ ničle ni, pri $n = 0$ pa je vsak $x$ ničla.

## Preveri se

? Katera točka je presečišče grafa funkcije $y = 3x - 6$ z osjo $y$?
- $(-6, 0)$
+ $(0, -6)$
- $(0, 3)$
- $(2, 0)$
> Pri $x = 0$ je $y = 3 \cdot 0 - 6 = -6$, zato je presečišče $(0, -6)$. Točka $(2, 0)$ je presečišče z osjo $x$, točka $(0, 3)$ pa je nastala z zamenjavo $k$ in $n$.

? Kolikšna je ničla funkcije $y = 4x + 8$?
- $x = 2$
- $x = 8$
+ $x = -2$
- $x = 4$
> Rešimo $4x + 8 = 0$, torej $4x = -8$ in $x = -2$. Odgovor $x = 2$ pozabi predznak, $x = 8$ je vrednost $n$.

? Kaj velja za graf funkcije $y = -3x + 5$?
- Narašča in seka os $y$ pri $-3$.
+ Pada in seka os $y$ pri $5$.
- Narašča in seka os $y$ pri $5$.
> Smerni koeficient je $k = -3 < 0$, zato funkcija pada. Začetna vrednost je $n = 5$, zato graf seka os $y$ v točki $(0, 5)$.
