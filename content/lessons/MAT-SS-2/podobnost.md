---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz osnovne šole že znaš, kaj je razmerje in kako rešiš sorazmerje, na primer $\dfrac{x}{12} = \dfrac{3}{4}$. Znaš tudi, da je vsota notranjih kotov trikotnika $180^\circ$, in poznaš Pitagorov izrek.

Podobnost razširi to znanje. Dva lika sta podobna, če imata enako obliko, velikost pa je lahko različna. S podobnostjo izračunaš višino drevesa ali stolpa, ne da bi ju izmeril, bere pa se tudi zemljevid ali načrt. Iz podobnih trikotnikov izpeljemo še dva izreka o pravokotnem trikotniku, **Evklidov** in **višinski izrek**. Z njima računamo odseke hipotenuze in višino, Pitagorov izrek pa dobimo kot posledico.

## Razlaga

**1. Podobna trikotnika.** Trikotnika $ABC$ in $A'B'C'$ sta **podobna**, kar zapišemo $\triangle ABC \sim \triangle A'B'C'$, če velja:

- ustrezni koti so enaki: $\alpha = \alpha'$, $\beta = \beta'$, $\gamma = \gamma'$,
- razmerja ustreznih stranic so enaka:
$$\frac{a'}{a} = \frac{b'}{b} = \frac{c'}{c} = k$$

Število $k$ je **koeficient podobnosti**. Če je $k > 1$, je drugi trikotnik večji, če je $k < 1$, je manjši. Pri $k = 1$ sta trikotnika skladna.

**2. Ustrezne stranice.** Ustrezni stranici ležita nasproti enakih kotov. Najkrajša stranica prvega trikotnika ustreza najkrajši stranici drugega.

**3. Izreki o podobnosti trikotnikov.** Ni treba preverjati vsega. Trikotnika sta podobna že, če velja eno od naslednjega:

- **KK:** ujemata se v dveh kotih. Tretji kot je potem samodejno enak, saj je vsota kotov $180^\circ$.
- **SSS:** razmerja vseh treh parov ustreznih stranic so enaka.
- **SKS:** razmerje dveh parov ustreznih stranic je enako in kota med njima sta enaka.
- **SSK:** razmerje dveh parov ustreznih stranic je enako in enaka sta kota, ki ležita nasproti daljše od teh dveh stranic.

**4. Ploščine.** Če je razmerje dolžin $k$, je razmerje ploščin $k^2$.

**5. Pravokotni trikotnik in višina na hipotenuzo.** Trikotnik $ABC$ ima pravi kot pri $C$. Hipotenuza je $c = |AB|$, kateti sta $a = |BC|$ in $b = |AC|$. Višina iz $C$ seka hipotenuzo v točki $D$ in je dolga $v_c = |CD|$. Točka $D$ razdeli hipotenuzo na dva odseka:

- $c_a = |DB|$ je odsek ob kateti $a$,
- $c_b = |AD|$ je odsek ob kateti $b$,

zato je $c = c_a + c_b$. Višina razdeli trikotnik na dva manjša pravokotna trikotnika, ki sta podobna drug drugemu in tudi velikemu trikotniku. Dokaz je spodaj v razdelku »Drugače: Bolj natančno«.

**6. Evklidov izrek.** Kvadrat katete je enak zmnožku hipotenuze in odseka, ki leži ob tej kateti:

$$a^2 = c \cdot c_a, \qquad b^2 = c \cdot c_b$$

**7. Višinski izrek.** Kvadrat višine na hipotenuzo je enak zmnožku obeh odsekov hipotenuze:

$$v_c^2 = c_a \cdot c_b$$

## Rešeni primeri

### Primer 1: koeficient podobnosti in neznane stranice

Trikotnik $ABC$ ima stranice $a = 4\,\text{cm}$, $b = 6\,\text{cm}$, $c = 8\,\text{cm}$. Trikotnik $A'B'C'$ je njemu podoben in ima stranico $a' = 10\,\text{cm}$, ki ustreza stranici $a$. Izračunaj $b'$ in $c'$.

1. Ustrezni stranici sta $a$ in $a'$, zato je $k = \dfrac{a'}{a} = \dfrac{10}{4} = 2{,}5$.
2. Vse stranice se povečajo z istim faktorjem: $b' = k \cdot b = 2{,}5 \cdot 6 = 15\,\text{cm}$.
3. Podobno $c' = 2{,}5 \cdot 8 = 20\,\text{cm}$.
4. Preverimo: $\dfrac{15}{6} = 2{,}5$ in $\dfrac{20}{8} = 2{,}5$. ✓

### Primer 2: višina drevesa iz sence

Navpična palica, visoka $1{,}5\,\text{m}$, meče senco dolžine $2\,\text{m}$. V istem trenutku meče drevo senco dolžine $12\,\text{m}$. Kako visoko je drevo?

1. **Skica.** Palica, njena senca in sončni žarek tvorijo pravokoten trikotnik. Drevo, njegova senca in sončni žarek tvorijo drugega.
2. **Zakaj sta podobna?** Oba imata pravi kot (navpičnica na tla). Sonce je v istem trenutku pod istim kotom, zato imata tudi kot med žarkom in tlemi enak. Po izreku KK sta trikotnika podobna.
3. **Sorazmerje.** Višina drevesa $x$ ustreza višini palice, senca drevesa pa senci palice:
$$\frac{x}{12} = \frac{1{,}5}{2}$$
4. **Račun.** $x = \dfrac{1{,}5 \cdot 12}{2} = \dfrac{18}{2} = 9\,\text{m}$.
5. **Odgovor.** Drevo je visoko $9\,\text{m}$. Smiselno je, saj je senca drevesa $6$-krat daljša od sence palice, zato je tudi drevo $6$-krat višje od palice: $6 \cdot 1{,}5 = 9$. ✓

### Primer 3: Evklidov in višinski izrek

V pravokotnem trikotniku višina na hipotenuzo razdeli hipotenuzo na odseka $c_a = 9\,\text{cm}$ in $c_b = 16\,\text{cm}$. Izračunaj višino $v_c$ ter kateti $a$ in $b$.

1. **Hipotenuza.** $c = c_a + c_b = 9 + 16 = 25\,\text{cm}$.
2. **Višina.** Uporabimo višinski izrek: $v_c^2 = c_a \cdot c_b = 9 \cdot 16 = 144$, zato $v_c = \sqrt{144} = 12\,\text{cm}$.
3. **Kateta $a$.** Odsek $c_a$ leži ob kateti $a$, zato $a^2 = c \cdot c_a = 25 \cdot 9 = 225$ in $a = 15\,\text{cm}$.
4. **Kateta $b$.** $b^2 = c \cdot c_b = 25 \cdot 16 = 400$ in $b = 20\,\text{cm}$.
5. **Preverimo s Pitagorovim izrekom:** $15^2 + 20^2 = 225 + 400 = 625 = 25^2$. ✓

## Pogoste napake

- **Napačno povezane stranice.** Razmerje mora povezovati *ustrezni* stranici, torej tisti, ki ležita nasproti enakih kotov. Preden zapišeš sorazmerje, označi enake kote.
- **Obrnjeno razmerje na eni strani.** Če na levi strani deliš večji trikotnik z manjšim, moraš tako početi tudi na desni. Zapis $\dfrac{x}{12} = \dfrac{2}{1{,}5}$ je napačen.
- **Seštevanje namesto množenja s $k$.** Pri podobnih trikotnikih stranice *množimo* z istim faktorjem, ne prištevamo istega števila.
- **Ploščina raste s $k$ namesto s $k^2$.** Če so dolžine dvakrat večje, je ploščina štirikrat večja.
- **Zamenjana odseka pri Evklidovem izreku.** Kvadrat katete $a$ je enak $c \cdot c_a$, kjer je $c_a$ odsek *ob* kateti $a$ (med $B$ in vznožjem višine). Ne uporabi odseka ob drugi kateti.
- **Višinski izrek brez kvadrata.** Velja $v_c^2 = c_a \cdot c_b$. Na koncu moraš še koreniti. Višina ni enaka zmnožku odsekov.
- **Podobnost ni skladnost.** Podobna trikotnika imata enake kote, stranice pa so različno dolge. Pri skladnih trikotnikih so enake tudi stranice.

## Povzetek

- Trikotnika sta podobna, če imata enake ustrezne kote in enaka razmerja ustreznih stranic. Razmerje je koeficient podobnosti $k$.
- Dovolj je ujemanje v dveh kotih (KK) ali eden od izrekov SSS, SKS, SSK.
- Razmerje dolžin je $k$, razmerje ploščin je $k^2$.
- V pravokotnem trikotniku višina na hipotenuzo razdeli hipotenuzo na odseka $c_a$ in $c_b$ ter trikotnik na dva podobna trikotnika.
- Evklidov izrek: $a^2 = c \cdot c_a$, $b^2 = c \cdot c_b$.
- Višinski izrek: $v_c^2 = c_a \cdot c_b$.
- Pri nalogah najprej nariši skico, označi enake kote in šele nato zapiši sorazmerje.

## Drugače: Na sliki

Predstavljaj si fotografijo, ki jo povečaš na fotokopirnem stroju. Vsi kosi na sliki se povečajo za isti faktor, kotov pa stroj ne spremeni. Povečani trikotnik je podoben prvotnemu, faktor povečave je $k$.

Pri pravokotnem trikotniku nariši višino na hipotenuzo. Dobiš tri pravokotne trikotnike:

- veliki trikotnik $ABC$ s hipotenuzo $c$,
- trikotnik $CBD$ s hipotenuzo $a$ (v njem leži odsek $c_a$),
- trikotnik $ACD$ s hipotenuzo $b$ (v njem leži odsek $c_b$).

Vsi trije imajo enake kote $\alpha$, $\beta$ in $90^\circ$, le različno velikost. Če si manjša trikotnika zamisliš zavrtena in povečana, se prilegata velikemu. Iz tega izhajajo vsa razmerja v Evklidovem in višinskem izreku.

## Drugače: Iz vsakdanjega življenja

**Zemljevid.** Na zemljevidu z merilom $1 : 50\,000$ je razdalja med dvema krajema $6\,\text{cm}$. V naravi je to $6 \cdot 50\,000 = 300\,000\,\text{cm} = 3\,\text{km}$. Zemljevid je podoben terenu s koeficientom $k = \dfrac{1}{50\,000}$. Kotov med potmi zemljevid ne spremeni.

**Dolga senca, visok stolp.** Ko sonce zahaja, so sence dolge. Razmerje med višino predmeta in dolžino njegove sence pa je v istem trenutku za vse predmete enako. Zato lahko višino stolpa izračunaš s palico in metrom.

**Načrt hiše.** Arhitekt nariše načrt v merilu $1 : 100$. Dolžina $5\,\text{cm}$ na načrtu je $5\,\text{m}$ v resnici, ploščina $1\,\text{cm}^2$ na načrtu pa je $10\,000\,\text{cm}^2 = 1\,\text{m}^2$ v resnici. Ploščine se torej množijo s $k^2$, dolžine s $k$.

## Drugače: Korak za korakom s številkami

Vzemimo pravokotni trikotnik s katetama $a = 6\,\text{cm}$ in $b = 8\,\text{cm}$. Hipotenuza je $c = 10\,\text{cm}$, saj $36 + 64 = 100$. Izračunajmo vse s podobnostjo.

| Korak | Račun | Rezultat |
|---|---|---|
| Odsek ob $a$ iz Evklida: $a^2 = c \cdot c_a$ | $c_a = \dfrac{36}{10}$ | $c_a = 3{,}6\,\text{cm}$ |
| Odsek ob $b$ iz Evklida: $b^2 = c \cdot c_b$ | $c_b = \dfrac{64}{10}$ | $c_b = 6{,}4\,\text{cm}$ |
| Preverimo vsoto | $3{,}6 + 6{,}4$ | $10 = c$ ✓ |
| Višina iz višinskega izreka | $v_c^2 = 3{,}6 \cdot 6{,}4 = 23{,}04$ | $v_c = 4{,}8\,\text{cm}$ |

Preverimo višino še s ploščino. Ploščina je $\dfrac{a \cdot b}{2} = \dfrac{6 \cdot 8}{2} = 24\,\text{cm}^2$ in tudi $\dfrac{c \cdot v_c}{2} = \dfrac{10 \cdot 4{,}8}{2} = 24\,\text{cm}^2$. ✓

## Drugače: Bolj natančno (dokaz)

**Podobnost trikotnikov.** V pravokotnem trikotniku $ABC$ (pravi kot pri $C$) naj bo $D$ vznožje višine iz $C$. Označimo kota $\alpha$ pri $A$ in $\beta$ pri $B$, pri čemer $\alpha + \beta = 90^\circ$.

- $\triangle ABC$ in $\triangle CBD$: oba imata pravi kot (pri $C$ oziroma pri $D$) in skupni kot $\beta$ pri $B$. Po izreku KK sta podobna.
- $\triangle ABC$ in $\triangle ACD$: oba imata pravi kot in skupni kot $\alpha$ pri $A$. Po izreku KK sta podobna.
- $\triangle ACD$ in $\triangle CBD$: v prvem je kot pri $C$ enak $90^\circ - \alpha = \beta$, v drugem je kot pri $C$ enak $90^\circ - \beta = \alpha$. Oba imata pravi kot pri $D$, zato sta po KK podobna. Ustrezna oglišča so $A \leftrightarrow C$, $C \leftrightarrow B$, $D \leftrightarrow D$.

**Evklidov izrek.** Iz $\triangle ABC \sim \triangle CBD$ sledi
$$\frac{|AB|}{|CB|} = \frac{|CB|}{|DB|} \;\Rightarrow\; \frac{c}{a} = \frac{a}{c_a} \;\Rightarrow\; a^2 = c \cdot c_a.$$
Iz $\triangle ABC \sim \triangle ACD$ podobno sledi $\dfrac{c}{b} = \dfrac{b}{c_b}$, torej $b^2 = c \cdot c_b$.

**Višinski izrek.** Iz $\triangle ACD \sim \triangle CBD$ sledi
$$\frac{|AD|}{|CD|} = \frac{|CD|}{|DB|} \;\Rightarrow\; \frac{c_b}{v_c} = \frac{v_c}{c_a} \;\Rightarrow\; v_c^2 = c_a \cdot c_b.$$

**Pitagorov izrek kot posledica.** Seštejemo obe obliki Evklidovega izreka:
$$a^2 + b^2 = c \cdot c_a + c \cdot c_b = c\,(c_a + c_b) = c \cdot c = c^2.$$

**Ploščine.** Če sta trikotnika podobna s koeficientom $k$, je osnovnica večjega $k$-krat daljša, višina nanjo tudi. Ploščina je zato $\dfrac{k z \cdot k v}{2} = k^2 \cdot \dfrac{z v}{2}$, torej $k^2$-krat večja.

## Preveri se

? Trikotnika sta podobna. Stranici prvega trikotnika merita $5\,\text{cm}$ in $8\,\text{cm}$, ustrezna stranica drugega ob stranici $5\,\text{cm}$ pa meri $7{,}5\,\text{cm}$. Kolikšna je stranica drugega trikotnika, ki ustreza stranici $8\,\text{cm}$?
- $10{,}5\,\text{cm}$
+ $12\,\text{cm}$
- $\dfrac{16}{3}\,\text{cm}$
> Koeficient podobnosti je $k = \dfrac{7{,}5}{5} = 1{,}5$. Stranico $8\,\text{cm}$ pomnožimo s $k$: $8 \cdot 1{,}5 = 12$. Odgovor $10{,}5$ dobiš, če prištevaš $2{,}5$ namesto množenja, $\dfrac{16}{3}$ pa, če deliš s $k$.

? V pravokotnem trikotniku je hipotenuza $c = 20\,\text{cm}$, odsek hipotenuze ob kateti $a$ pa $c_a = 5\,\text{cm}$. Kolikšna je kateta $a$?
- $100\,\text{cm}$
- $15\,\text{cm}$
+ $10\,\text{cm}$
> Po Evklidovem izreku je $a^2 = c \cdot c_a = 20 \cdot 5 = 100$, zato $a = \sqrt{100} = 10\,\text{cm}$. Odgovor $100$ pozabi koren, $15$ pa je drugi odsek $c - c_a$.

? Višina na hipotenuzo razdeli hipotenuzo na odseka $4\,\text{cm}$ in $25\,\text{cm}$. Kolikšna je višina?
- $14{,}5\,\text{cm}$
- $100\,\text{cm}$
+ $10\,\text{cm}$
> Po višinskem izreku je $v_c^2 = 4 \cdot 25 = 100$, zato $v_c = 10\,\text{cm}$. Odgovor $100$ pozabi koren, $14{,}5$ pa je aritmetična sredina odsekov, ki z višino nima zveze.
