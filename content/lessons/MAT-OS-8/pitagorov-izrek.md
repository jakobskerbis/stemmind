---
stanje: osnutek
demo: pitagora
avtor: AI (vzorčna lekcija za pregled)
---

## Zakaj se tega učimo

Iz 7. razreda že znaš, da ima pravokotni trikotnik en pravi kot ($90^\circ$) in da je vsota notranjih kotov $180^\circ$. Znaš tudi kvadrirati število in izračunati ploščino kvadrata ($a \cdot a = a^2$).

Pitagorov izrek poveže te stvari: če poznaš dve stranici pravokotnega trikotnika, lahko **izračunaš tretjo, ne da bi jo izmeril**. Tako mizar preveri, ali je okvir res pravokoten, gradbinec izračuna dolžino strešnega tramu, ti pa ugotoviš, kako dolga je diagonala zaslona ali kako daleč je bližnjica čez travnik.

## Razlaga

**1. Imena stranic.** V pravokotnem trikotniku stranicama, ki oklepata pravi kot, rečemo **kateti** (običajno $a$ in $b$). Stranica nasproti pravega kota je **hipotenuza** ($c$). Hipotenuza je vedno najdaljša stranica.

**2. Izrek.** V vsakem pravokotnem trikotniku je vsota kvadratov katet enaka kvadratu hipotenuze:

$$a^2 + b^2 = c^2$$

**3. Kaj to pomeni na sliki.** Nad vsako stranico nariši kvadrat. Ploščina kvadrata nad hipotenuzo je natanko tolikšna, kot sta skupaj ploščini kvadratov nad katetama. Pri trikotniku s stranicami 3, 4 in 5 je to $9 + 16 = 25$. To lahko preveriš spodaj v poskusu, kjer lahko kvadratke tudi prešteješ.

**4. Kako računamo.**

- Če iščeš **hipotenuzo**, kvadrata katet *sešteješ* in koreniš: $c = \sqrt{a^2 + b^2}$.
- Če iščeš **kateto**, od kvadrata hipotenuze *odšteješ* kvadrat znane katete in koreniš: $a = \sqrt{c^2 - b^2}$.

**5. Izrek deluje tudi obratno.** Če za tri dolžine velja $a^2 + b^2 = c^2$, je trikotnik pravokoten. Tako lahko preveriš, ali je kot res pravi.

**6. Kdaj izrek ne velja.** Samo za pravokotne trikotnike. Pri drugih trikotnikih $a^2 + b^2$ ni enako $c^2$.

## Rešeni primeri

### Primer 1: hipotenuza

Kateti merita $a = 6\,\text{cm}$ in $b = 8\,\text{cm}$. Kolikšna je hipotenuza?

1. Iščemo hipotenuzo, zato seštevamo: $c^2 = a^2 + b^2$.
2. Vstavimo: $c^2 = 6^2 + 8^2 = 36 + 64 = 100$.
3. Korenimo, ker iščemo $c$, ne $c^2$: $c = \sqrt{100} = 10\,\text{cm}$.
4. Preverimo smiselnost: $10$ je večje od $6$ in $8$, kar mora veljati za hipotenuzo. ✓

### Primer 2: kateta

Hipotenuza meri $13\,\text{cm}$, ena kateta $5\,\text{cm}$. Kolikšna je druga kateta?

1. Iščemo kateto, zato odštevamo: $b^2 = c^2 - a^2$.
2. Vstavimo: $b^2 = 13^2 - 5^2 = 169 - 25 = 144$.
3. Korenimo: $b = \sqrt{144} = 12\,\text{cm}$.
4. Preverimo: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. ✓

### Primer 3: besedilna naloga

Lestev, dolga $2{,}5\,\text{m}$, je prislonjena ob zid. Njeno spodnje krajišče je $0{,}7\,\text{m}$ od zida. Kako visoko na zidu sega lestev?

1. **Skica.** Zid, tla in lestev tvorijo pravokotni trikotnik. Pravi kot je med zidom in tlemi.
2. **Kaj je kaj.** Lestev leži nasproti pravega kota, zato je hipotenuza: $c = 2{,}5\,\text{m}$. Razdalja do zida je kateta $a = 0{,}7\,\text{m}$. Iščemo višino, ki je druga kateta $b$.
3. **Račun.** $b^2 = 2{,}5^2 - 0{,}7^2 = 6{,}25 - 0{,}49 = 5{,}76$.
4. $b = \sqrt{5{,}76} = 2{,}4\,\text{m}$.
5. **Odgovor.** Lestev sega $2{,}4\,\text{m}$ visoko.

## Pogoste napake

- **Hipotenuza ni na pravem mestu.** Preden računaš, poišči pravi kot. Hipotenuza je stranica *nasproti* njega, ne katera koli stranica, ki je narisana poševno.
- **Pozabljen koren.** $a^2 + b^2$ da $c^2$. Na koncu moraš še koreniti, sicer je rezultat (npr. $100$ namesto $10$) veliko prevelik.
- **Seštevanje pri kateti.** Ko iščeš kateto, kvadrate *odšteješ*. Če dobiš kateto, daljšo od hipotenuze, si se zmotil.
- **$\sqrt{a^2 + b^2} \ne a + b$.** Korena vsote ne smeš razbiti: $\sqrt{9 + 16} = 5$, $3 + 4 = 7$.

## Povzetek

- Pravokotni trikotnik: kateti $a$, $b$ oklepata pravi kot, hipotenuza $c$ mu leži nasproti in je najdaljša.
- Pitagorov izrek: $a^2 + b^2 = c^2$.
- Hipotenuza: $c = \sqrt{a^2 + b^2}$. Kateta: $a = \sqrt{c^2 - b^2}$.
- Če za tri dolžine velja $a^2 + b^2 = c^2$, je trikotnik pravokoten.
- Pri besedilnih nalogah najprej nariši skico in označi pravi kot.

## Drugače: Na sliki

Predstavljaj si, da so kvadrati nad stranicami ploščice. Nad kateto $3$ je kvadrat iz $3 \cdot 3 = 9$ ploščic, nad kateto $4$ kvadrat iz $16$ ploščic. Če vse te ploščice ($25$) preložiš, lahko z njimi natanko tlakuješ kvadrat nad hipotenuzo, ki ima stranico $5$.

Pitagorov izrek torej ne govori o dolžinah, ampak o **ploščinah**: dva manjša kvadrata skupaj sta tako velika kot veliki kvadrat. Šele ko hočemo dolžino stranice, ploščino korenimo.

V poskusu zgoraj premikaj drsnika in opazuj: oranžni in zeleni kvadrat skupaj imata vedno toliko kvadratkov kot vijolični.

## Drugače: Iz vsakdanjega življenja

Na pravokotnem igrišču ($40\,\text{m} \times 30\,\text{m}$) greš iz enega kota v nasprotnega. Ob robu prehodiš $40 + 30 = 70\,\text{m}$. Če greš poševno čez, je pot hipotenuza:

$$\sqrt{40^2 + 30^2} = \sqrt{1600 + 900} = \sqrt{2500} = 50\,\text{m}$$

Bližnjica je $20\,\text{m}$ krajša. Zato v parkih nastanejo shojene poti čez travo.

Še en primer: televizor z diagonalo 55 palcev. Proizvajalec pove diagonalo, ker je ta največja številka. Iz širine in višine zaslona jo izračunaš s Pitagorovim izrekom.

## Drugače: Korak za korakom s številkami

Recept, ki deluje pri vsaki nalogi:

1. Nariši trikotnik in označi pravi kot s kvadratkom.
2. Stranico nasproti pravega kota označi s $c$.
3. Vprašaj se: *ali iščem $c$ ali eno od katet?*
4. Iščem $c$: **plus**. $c^2 = a^2 + b^2$.
   Iščem kateto: **minus**. $a^2 = c^2 - b^2$.
5. Izračunaj kvadrate posebej, npr. $7^2 = 49$, $24^2 = 576$.
6. Seštej ali odštej: $49 + 576 = 625$.
7. Koreni: $\sqrt{625} = 25$.
8. Preveri: je $c$ največja stranica?

Pomnilnik za pogoste trojice (celoštevilske rešitve): $3, 4, 5$; $5, 12, 13$; $8, 15, 17$; $7, 24, 25$ ter njihovi večkratniki, npr. $6, 8, 10$.

## Drugače: Bolj natančno (dokaz)

Zakaj izrek drži? Vzemi velik kvadrat s stranico $a + b$. Vanj postavi štiri enake pravokotne trikotnike s katetama $a$ in $b$ tako, da njihove hipotenuze v sredini oklepajo kvadrat s stranico $c$.

Ploščino velikega kvadrata izračunaš na dva načina:

- kot kvadrat: $(a + b)^2 = a^2 + 2ab + b^2$,
- kot vsoto delov: štirje trikotniki in notranji kvadrat, $4 \cdot \dfrac{ab}{2} + c^2 = 2ab + c^2$.

Obe ploščini sta enaki, zato $a^2 + 2ab + b^2 = 2ab + c^2$. Na obeh straneh odštejemo $2ab$ in dobimo $a^2 + b^2 = c^2$.

## Preveri se

? Kateti merita $9\,\text{cm}$ in $12\,\text{cm}$. Kolikšna je hipotenuza?
- $21\,\text{cm}$
+ $15\,\text{cm}$
- $225\,\text{cm}$
- $\sqrt{63}\,\text{cm}$
> $9^2 + 12^2 = 81 + 144 = 225$, $\sqrt{225} = 15$. Odgovor $225$ pozabi koren, $21$ pa je vsota katet.

? Hipotenuza meri $10\,\text{cm}$, kateta $6\,\text{cm}$. Kolikšna je druga kateta?
- $\sqrt{136}\,\text{cm}$
- $4\,\text{cm}$
+ $8\,\text{cm}$
> Ker iščemo kateto, odštevamo: $10^2 - 6^2 = 100 - 36 = 64$, $\sqrt{64} = 8$.

? Ali je trikotnik s stranicami $5$, $6$ in $8$ pravokoten?
- Da, ker je $8$ najdaljša stranica.
+ Ne, ker $5^2 + 6^2 = 61$, $8^2 = 64$.
- Da, ker $5 + 6 > 8$.
> Trikotnik je pravokoten samo, če je vsota kvadratov krajših stranic enaka kvadratu najdaljše. $61 \ne 64$.

:::simboli
a, b | kateti pravokotnega trikotnika | | | oklepata pravi kot
c | hipotenuza | c = \sqrt{a^2 + b^2} | | leži nasproti pravega kota, najdaljša stranica
:::
