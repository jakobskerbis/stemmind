---
stanje: osnutek
demo: pitagora
avtor: AI
---

## Zakaj se tega učimo

Pitagorov izrek že poznaš: v pravokotnem trikotniku velja $a^2 + b^2 = c^2$, kjer sta $a$ in $b$ kateti, $c$ pa hipotenuza. Znaš tudi izračunati kvadrat števila in ga razveljaviti s korenjenjem.

Težava je, da naloge v resničnem življenju redko prinesejo narisan pravokotni trikotnik. Namesto tega dobiš pravokotnik, v katerem iščeš diagonalo, enakokraki trikotnik, ki mu iščeš višino, ali zgodbo o lestvi, jamboru in vrvi. Pri vseh moraš **najprej sam poiskati pravokotni trikotnik** in šele nato uporabiti izrek. Prav to se učimo v tej lekciji.

## Razlaga

**1. Diagonala pravokotnika.** Diagonala pravokotnika razdeli na dva skladna pravokotna trikotnika. Kateti sta stranici pravokotnika $a$ in $b$, hipotenuza pa je diagonala $d$:

$$d = \sqrt{a^2 + b^2}$$

Za kvadrat s stranico $a$ je $d = \sqrt{a^2 + a^2} = \sqrt{2a^2}$.

**2. Višina enakokrakega trikotnika.** Enakokraki trikotnik ima osnovnico $a$ in kraka $b$. Višina na osnovnico pade v razpolovišče osnovnice in trikotnik razdeli na dva pravokotna trikotnika. V vsakem je:

- hipotenuza = krak $b$,
- ena kateta = polovica osnovnice $\dfrac{a}{2}$,
- druga kateta = višina $v$.

Zato velja

$$v^2 + \left(\frac{a}{2}\right)^2 = b^2, \qquad v = \sqrt{b^2 - \left(\frac{a}{2}\right)^2}$$

**3. Višina enakostraničnega trikotnika** s stranico $a$ je poseben primer: krak je enak osnovnici, zato je $v = \sqrt{a^2 - \left(\frac{a}{2}\right)^2}$.

**4. Besedilne naloge.** Postopek je vedno enak:

1. Preberi nalogo in nariši skico.
2. Poišči pravi kot (zid in tla, pravokotnik, višina).
3. Določi, katera stranica je hipotenuza (nasproti pravega kota) in katera sta kateti.
4. Zapiši Pitagorov izrek, vstavi podatke in izračunaj.
5. Preveri, ali je rezultat smiseln (hipotenuza je najdaljša stranica), in odgovori z besedami in enoto.

**5. Če pravokotnega trikotnika ni videti**, ga naredimo sami: narišemo višino ali diagonalo.

## Rešeni primeri

### Primer 1 (lažji): diagonala pravokotnika

Pravokotnik ima stranici $a = 12\,\text{cm}$ in $b = 5\,\text{cm}$. Kako dolga je diagonala?

1. Diagonala razdeli pravokotnik na pravokotna trikotnika, v katerih sta kateti stranici pravokotnika. Diagonala leži nasproti pravega kota, zato je hipotenuza.
2. Iščemo hipotenuzo, zato kvadrata seštevamo: $d^2 = 12^2 + 5^2 = 144 + 25 = 169$.
3. Korenimo, ker iščemo $d$, ne $d^2$: $d = \sqrt{169} = 13\,\text{cm}$.
4. Preverimo: $13$ je več kot $12$ in $5$. Diagonala je res daljša od obeh stranic. ✓

### Primer 2: višina enakokrakega trikotnika

Enakokraki trikotnik ima osnovnico $a = 16\,\text{cm}$ in krak $b = 10\,\text{cm}$. Izračunaj višino na osnovnico in ploščino trikotnika.

1. Višina razpolovi osnovnico, zato je ena kateta $\dfrac{a}{2} = 8\,\text{cm}$. Hipotenuza je krak $10\,\text{cm}$.
2. Iščemo kateto, zato odštevamo: $v^2 = 10^2 - 8^2 = 100 - 64 = 36$.
3. Korenimo: $v = \sqrt{36} = 6\,\text{cm}$.
4. Ploščina: $S = \dfrac{a \cdot v}{2} = \dfrac{16 \cdot 6}{2} = 48\,\text{cm}^2$.
5. Preverimo: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. ✓ Višina je krajša od kraka, kot mora biti, saj je kateta vedno krajša od hipotenuze.

Navada, ki te reši pred napakami: rezultat vedno preveri z vstavitvijo v $a^2 + b^2 = c^2$.

### Primer 3 (težji): besedilna naloga

Jambor ladje je visok $12\,\text{m}$. Z vrha jambora do točke na palubi, ki je $5\,\text{m}$ od vznožja jambora, je napeta vrv. Kako dolga je vrv, če za vozle in pritrditev ne dodamo nič? Nato izračunaj, koliko daljša je vrv od jambora.

1. **Skica.** Jambor stoji pravokotno na palubo. Jambor, paluba in vrv tvorijo pravokotni trikotnik. Pravi kot je ob vznožju jambora.
2. **Kaj je kaj.** Kateti sta jambor $a = 12\,\text{m}$ in razdalja po palubi $b = 5\,\text{m}$. Vrv leži nasproti pravega kota, zato je hipotenuza $c$.
3. **Račun.** $c^2 = 12^2 + 5^2 = 144 + 25 = 169$, torej $c = \sqrt{169} = 13\,\text{m}$.
4. **Razlika.** $13 - 12 = 1\,\text{m}$.
5. **Odgovor.** Vrv je dolga $13\,\text{m}$ in je za $1\,\text{m}$ daljša od jambora.

## Pogoste napake

- **Pozabljena polovica osnovnice.** Pri višini enakokrakega trikotnika je kateta $\dfrac{a}{2}$, ne $a$. Celotna osnovnica ni stranica pravokotnega trikotnika.
- **Napačna hipotenuza.** Pri diagonali in lestvi je hipotenuza poševna stranica, pri višini pa krak trikotnika. Vedno poišči pravi kot.
- **Seštevanje namesto odštevanja.** Pri višini iščemo kateto, zato kvadrate odštevamo. Če dobiš višino, večjo od kraka, si se zmotil.
- **Pozabljen koren ali enota.** $v^2 = 36$ še ni višina. Na koncu zapiši $v = 6\,\text{cm}$.
- **Brez skice.** Pri besedilnih nalogah brez skice hitro zamenjaš kateto in hipotenuzo.

## Povzetek

- Diagonala pravokotnika: $d = \sqrt{a^2 + b^2}$.
- Višina enakokrakega trikotnika: $v = \sqrt{b^2 - \left(\frac{a}{2}\right)^2}$, kjer je $a$ osnovnica in $b$ krak.
- Pri vsaki nalogi najprej poišči ali nariši pravokotni trikotnik in določi hipotenuzo.
- Hipotenuzo dobiš s seštevanjem kvadratov, kateto z odštevanjem.
- Rezultat vedno preveri z vstavitvijo v $a^2 + b^2 = c^2$ in odgovori z besedami in enoto.

## Drugače: Na sliki

V demonstraciji »Pitagorov izrek s kvadrati« si oglej kvadrate nad stranicami pravokotnega trikotnika. Ploščina kvadrata nad hipotenuzo je vedno enaka vsoti ploščin kvadratov nad katetama.

Ko rešuješ nalogo o diagonali, si predstavljaj: kvadrat nad stranico $12$ ima $144$ kvadratkov, kvadrat nad stranico $5$ jih ima $25$. Skupaj je $169$ kvadratkov, kolikor jih ima kvadrat nad diagonalo. Njegova stranica je $13$, ker je $13 \cdot 13 = 169$.

Pri višini enakokrakega trikotnika razmišljaj obratno: kvadrat nad krakom ima $100$ kvadratkov, kvadrat nad polovico osnovnice $64$, zato mora imeti kvadrat nad višino preostalih $36$ kvadratkov. Zato je višina $6$.

## Drugače: Iz vsakdanjega življenja

**Zaslon.** Telefon ima zaslon širok $7\,\text{cm}$ in visok $24\,\text{cm}$. Diagonala je $\sqrt{49 + 576} = \sqrt{625} = 25\,\text{cm}$. Zato proizvajalci navajajo diagonalo: je največja mera in jo izračunajo iz stranic.

**Lestev.** Če lestev, dolga $2{,}5\,\text{m}$, stoji $0{,}7\,\text{m}$ od zidu, sega $2{,}4\,\text{m}$ visoko. Gasilci in zidarji tako preverijo, ali lestev doseže okno, ne da bi jo prislonili.

**Streha.** Streha ima obliko enakokrakega trikotnika. Če poznaš širino hiše in dolžino škarnika (krak), z izrekom izračunaš višino slemena, ne da bi splezal gor.

Ideja je vedno ista: ena mera je težko dosegljiva (poševna ali navpična), druge dve pa lahko izmeriš na tleh.

## Drugače: Korak za korakom s številkami

Naloga: Enakostranični trikotnik ima stranico $a = 10\,\text{cm}$. Kolikšna je višina?

1. Nariši trikotnik in višino na eno stranico. Višina razpolovi osnovnico.
2. Pravokotni trikotnik: hipotenuza $= 10$, kateta $= \dfrac{10}{2} = 5$, druga kateta je višina $v$.
3. Iščemo kateto, zato odštejemo: $v^2 = 10^2 - 5^2$.
4. Kvadrata posebej: $10^2 = 100$, $5^2 = 25$.
5. Odštejemo: $100 - 25 = 75$.
6. Korenimo: $v = \sqrt{75}$. Ker $75$ ni popoln kvadrat, rezultat zaokrožimo: $8^2 = 64$, $9^2 = 81$, zato je $v$ med $8$ in $9$. Kalkulator pokaže $v \approx 8{,}66\,\text{cm}$.
7. Preverimo: višina je krajša od stranice $10\,\text{cm}$. ✓

Tabela za pogoste trojice, ki ti prihranijo račun:

| Kateta | Kateta | Hipotenuza |
|:---:|:---:|:---:|
| $3$ | $4$ | $5$ |
| $5$ | $12$ | $13$ |
| $8$ | $15$ | $17$ |
| $7$ | $24$ | $25$ |

Če vidiš dve števili iz te tabele ali njuna večkratnika (npr. $6$, $8$, $10$), je tretje že znano.

## Drugače: Bolj natančno

Zakaj višina razpolovi osnovnico enakokrakega trikotnika? Naj bo $ABC$ enakokraki trikotnik z osnovnico $AB$ in krakoma $AC = BC$. Višina iz $C$ seka osnovnico v točki $D$. Trikotnika $ADC$ in $BDC$ imata:

- skupno stranico $CD$,
- enaka kraka $AC = BC$,
- pravi kot pri $D$ (v obeh).

Pravokotna trikotnika, ki se ujemata v hipotenuzi in kateti, sta skladna. Zato je $AD = DB$, torej točka $D$ razpolovi osnovnico.

Višina enakostraničnega trikotnika s stranico $a$ je

$$v = \sqrt{a^2 - \frac{a^2}{4}} = \sqrt{\frac{3a^2}{4}} = \frac{a\sqrt{3}}{2}.$$

Preveri s prejšnjim primerom: $a = 10$ da $v = 5\sqrt{3} \approx 8{,}66$, kar se ujema.

## Preveri se

? Pravokotnik ima stranici $8\,\text{cm}$ in $15\,\text{cm}$. Kolikšna je diagonala?
- $23\,\text{cm}$
- $289\,\text{cm}$
+ $17\,\text{cm}$
- $\sqrt{161}\,\text{cm}$
> $8^2 + 15^2 = 64 + 225 = 289$, $\sqrt{289} = 17$. Odgovor $23$ je vsota stranic, $289$ pa pozabi koren. $\sqrt{161}$ dobiš, če kvadrata odšteješ.

? Enakokraki trikotnik ima osnovnico $24\,\text{cm}$ in krak $13\,\text{cm}$. Kolikšna je višina na osnovnico?
- $\sqrt{13^2 - 24^2}\,\text{cm}$
- $\sqrt{13^2 + 12^2}\,\text{cm}$
+ $5\,\text{cm}$
- $11\,\text{cm}$
> Višina razpolovi osnovnico, zato je kateta $12\,\text{cm}$. $v^2 = 13^2 - 12^2 = 169 - 144 = 25$, $v = 5\,\text{cm}$.

? Lestev je dolga $5\,\text{m}$ in sega $4\,\text{m}$ visoko na zid. Kako daleč od zidu stoji njeno spodnje krajišče?
- $1\,\text{m}$
- $9\,\text{m}$
+ $3\,\text{m}$
> Lestev je hipotenuza, zato kvadrat višine odštejemo: $5^2 - 4^2 = 25 - 16 = 9$, $\sqrt{9} = 3\,\text{m}$. Rezultat $1$ dobiš z odštevanjem dolžin namesto kvadratov, $9$ pa pozabi koren.

:::simboli
a, b | kateti (stranici pravokotnika) | | | v enakokrakem trikotniku a osnovnica, b krak
d | diagonala pravokotnika | d = \sqrt{a^2 + b^2} | | hipotenuza pravokotnega trikotnika
v | višina enakokrakega trikotnika | v = \sqrt{b^2 - \left(\frac{a}{2}\right)^2} | | enakostranični: v = a√3 : 2
:::
