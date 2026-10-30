---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih razredov že poznaš skladne trikotnike: to sta trikotnika, ki sta povsem enaka po obliki in velikosti. Znaš tudi, da je vsota notranjih kotov trikotnika $180^\circ$, in računaš z razmerji.

Kaj pa, če sta dva trikotnika enake **oblike**, a različnih **velikosti**? Tak par je fotografija in njena povečava, načrt hiše in prava hiša ali zemljevid in pokrajina. Takrat govorimo o **podobnosti**. Z njo lahko izmeriš višino drevesa ali stolpa, ne da bi splezal nanj. Izmeriš samo senco in primerjaš. Naučil se boš tudi, kako s samo nekaj podatki ugotoviš, ali sta dva trikotnika podobna.

## Razlaga

**1. Kaj pomeni, da sta trikotnika podobna.** Trikotnika $ABC$ in $A'B'C'$ sta **podobna** (zapišemo $\triangle ABC \sim \triangle A'B'C'$), če veljata obe lastnosti:

- ustrezni koti so skladni: $\alpha = \alpha'$, $\beta = \beta'$, $\gamma = \gamma'$,
- ustrezne stranice so v istem razmerju:

$$\frac{a'}{a} = \frac{b'}{b} = \frac{c'}{c} = k$$

**2. Razmerje podobnosti.** Število $k$ je **razmerje podobnosti**. Pove, kolikokrat so stranice drugega trikotnika daljše od ustreznih stranic prvega.

- $k > 1$: drugi trikotnik je povečava.
- $k < 1$: drugi trikotnik je pomanjšava.
- $k = 1$: trikotnika sta skladna.

**3. Ustrezne stranice.** Ustrezni stranici ležita nasproti skladnima kotoma. Najkrajša stranica ustreza najkrajši, najdaljša najdaljši. Zato vedno najprej poišči, kateri koti so enaki, in šele nato primerjaj stranice.

**4. Izreki o podobnosti.** Za podobnost ni treba preveriti vseh treh kotov in vseh treh stranic. Dovolj je eno od naslednjega:

- **KK:** dva para ustreznih kotov sta skladna. Tretja kota sta potem samo še posledica, saj je $\gamma = 180^\circ - \alpha - \beta$.
- **SSS:** vsi trije pari ustreznih stranic so v istem razmerju: $\dfrac{a'}{a} = \dfrac{b'}{b} = \dfrac{c'}{c}$.
- **SKS:** dva para ustreznih stranic sta v istem razmerju in kota, ki ju stranici oklepata, sta skladna.
- **SsK:** dva para ustreznih stranic sta v istem razmerju in kota nasproti daljše od teh dveh stranic sta skladna.

**5. Obseg in dolžine.** Če je razmerje podobnosti $k$, so v razmerju $k$ vse ustrezne dolžine, torej tudi obsegi: $o' = k \cdot o$.

## Rešeni primeri

### Primer 1: ali sta trikotnika podobna (SSS)

Trikotnik $ABC$ ima stranice $3\,\text{cm}$, $4\,\text{cm}$, $5\,\text{cm}$. Trikotnik $A'B'C'$ ima stranice $6\,\text{cm}$, $8\,\text{cm}$, $10\,\text{cm}$. Ali sta podobna? Kolikšno je razmerje podobnosti in kolikšna sta obsega?

1. Stranice razvrstimo po velikosti in primerjamo ustrezne pare: najkrajša z najkrajšo, srednja s srednjo, najdaljša z najdaljšo.
2. Izračunamo razmerja: $\dfrac{6}{3} = 2$, $\dfrac{8}{4} = 2$, $\dfrac{10}{5} = 2$.
3. Vsa tri razmerja so enaka, zato po izreku SSS trikotnika sta podobna, razmerje podobnosti je $k = 2$.
4. Obsega: $o = 3 + 4 + 5 = 12\,\text{cm}$ in $o' = 6 + 8 + 10 = 24\,\text{cm}$. Res je $o' = 2 \cdot o$. ✓

### Primer 2: manjkajoče stranice

Trikotnika $ABC$ in $A'B'C'$ sta podobna. Trikotnik $ABC$ ima stranice $a = 4\,\text{cm}$, $b = 6\,\text{cm}$, $c = 8\,\text{cm}$. Pri trikotniku $A'B'C'$ je ustrezna stranica $a' = 10\,\text{cm}$. Izračunaj $b'$ in $c'$.

1. Najprej poiščemo razmerje podobnosti iz znanega para stranic: $k = \dfrac{a'}{a} = \dfrac{10}{4} = 2{,}5$.
2. Vse ustrezne stranice so v istem razmerju, zato vsako stranico pomnožimo s $k$: $b' = 2{,}5 \cdot 6 = 15\,\text{cm}$.
3. Podobno: $c' = 2{,}5 \cdot 8 = 20\,\text{cm}$.
4. Preverimo: $\dfrac{15}{6} = 2{,}5$ in $\dfrac{20}{8} = 2{,}5$. ✓

### Primer 3: višina drevesa iz sence

Palica, visoka $1{,}5\,\text{m}$, meče senco dolgo $2\,\text{m}$. Ob istem času drevo meče senco dolgo $12\,\text{m}$. Kako visoko je drevo?

1. **Skica.** Palica in njena senca tvorita pravokotni trikotnik. Drevo in njegova senca tvorita drugega. Pravi kot je med navpičnico in tlemi.
2. **Zakaj sta trikotnika podobna.** Sončni žarki so vzporedni, zato žarek pade na tla pod istim kotom pri palici in pri drevesu. Oba trikotnika imata pravi kot in ta skupni kot med žarkom in tlemi. Po izreku KK sta podobna.
3. **Ustrezne stranice.** Višina ustreza višini, senca senci. Zapišemo enakost razmerij:
$$\frac{h}{1{,}5} = \frac{12}{2}$$
4. Desna stran je $\dfrac{12}{2} = 6$, zato $h = 6 \cdot 1{,}5 = 9\,\text{m}$.
5. **Odgovor.** Drevo je visoko $9\,\text{m}$. Smiselno je: senca drevesa je 6-krat daljša od sence palice, zato je tudi drevo 6-krat višje od palice.

## Pogoste napake

- **Napačni pari stranic.** Primerjaš stranici, ki si ne ustrezata. Vedno poišči skladne kote in ustrezne stranice razvrsti po velikosti.
- **Obrnjeno razmerje.** Če je $k = \dfrac{a'}{a}$, potem je $a' = k \cdot a$ in $a = \dfrac{a'}{k}$. Preveri, ali je rezultat smiseln: povečava mora imeti daljše stranice.
- **Seštevanje namesto množenja.** Če se stranica $4$ poveča na $10$, to ne pomeni, da se vsaka stranica poveča za $6$. Vse stranice pomnožimo z istim številom $k$.
- **Preverjen samo en par.** Če se ujema samo eno razmerje stranic, to še ne dokazuje podobnosti. Pri SSS morajo biti enaka vsa tri razmerja.
- **Enak obseg ali enakokrakost ni podobnost.** Dva enakokraka trikotnika nista nujno podobna, ker imata lahko različne kote.

## Povzetek

- Trikotnika sta podobna, če imata skladne ustrezne kote in sorazmerne ustrezne stranice.
- Razmerje podobnosti $k = \dfrac{a'}{a} = \dfrac{b'}{b} = \dfrac{c'}{c}$.
- Podobnost dokažemo z izreki: KK, SSS, SKS, SsK.
- Ustrezne stranice ležijo nasproti skladnih kotov.
- Obseg se pomnoži z $k$, kot vsaka ustrezna dolžina.
- Podobnost uporabimo pri merjenju višin iz sence.

## Drugače: Na sliki

Predstavljaj si fotografijo in njeno povečavo na fotokopirnem stroju, nastavljeno na $200\,\%$. Vsaka daljica se podvoji, kotov pa stroj ne spremeni. Pravi kot ostane pravi, kot $40^\circ$ ostane $40^\circ$.

Podobna trikotnika imata torej **enako obliko**. Eden je le povečan ali pomanjšan. Ko trikotnik obrneš ali zrcališ, se oblika ne spremeni. Ker pa ustrezne stranice poiščemo po kotih, je pomembno, da si ju lepo poimenuješ. Nariši oba trikotnika, označi enake kote z enakimi loki in nato primerjaj stranice, ki so nasproti njih.

## Drugače: Iz vsakdanjega življenja

**Zemljevid.** Na zemljevidu z merilom $1 : 100\,000$ je $1\,\text{cm}$ v resnici $100\,000\,\text{cm} = 1\,\text{km}$. Trikotnik, ki ga na zemljevidu narišeš med tremi vasmi, je podoben pravemu trikotniku med vasmi, razmerje podobnosti pa je merilo.

**Senca.** Visoke stvari merimo s senco. Ob istem času so sence vseh predmetov proporcionalne njihovim višinam. Če je tvoja senca dvakrat daljša od tvoje višine, je tudi senca stolpa dvakrat daljša od njegove višine.

**Makete.** Model avtomobila v merilu $1 : 18$ je pomanjšava prave stvari. Vse dolžine so $18$-krat krajše, koti pa so enaki.

## Drugače: Korak za korakom s številkami

Recept za nalogo z manjkajočo stranico:

1. Nariši oba trikotnika in označi enake kote.
2. Poišči ustrezne stranice: tiste, ki ležijo nasproti enakih kotov.
3. Poišči par ustreznih stranic, ki ju poznaš obe, in izračunaj $k$.
4. Neznano stranico izračunaj z množenjem ali deljenjem s $k$.
5. Preveri, ali so razmerja pri vseh parih enaka.

Primer s tabelo (povečava s $k = 2{,}5$):

| | $a$ | $b$ | $c$ |
|---|---|---|---|
| majhen trikotnik | $4\,\text{cm}$ | $6\,\text{cm}$ | $8\,\text{cm}$ |
| velik trikotnik | $10\,\text{cm}$ | $15\,\text{cm}$ | $20\,\text{cm}$ |
| razmerje | $2{,}5$ | $2{,}5$ | $2{,}5$ |

Če bi bila v zadnji vrstici pri nekem stolpcu drugačna vrednost, trikotnika ne bi bila podobna.

## Drugače: Bolj natančno

**Zakaj zadoščata dva kota (KK)?** V trikotniku sta prva dva kota že določena, zato je tretji natanko določen: $\gamma = 180^\circ - \alpha - \beta$. Če imata dva trikotnika enaka dva kota, imata torej enake vse tri. Trikotniki z enakimi koti pa imajo isto obliko, saj je oblika trikotnika določena z njegovimi koti. Razlikujeta se lahko le v velikosti, zato so stranice sorazmerne.

**Zakaj ni dovolj, da se ujemata samo dve razmerji?** Če pri trikotniku $4, 6, 8$ ostaneta prva dva para v razmerju $1{,}5$ (torej $6$ in $9$), tretja stranica ni nujno $12$. Lahko je tudi $13$, kot v zadnjem vprašanju spodaj. Takrat trikotnika nista podobna. Zato izreka SKS in SsK zahtevata še en podatek o kotu.

**Ploščine.** Če sta trikotnika podobna z razmerjem $k$, velja:

- razmerje obsegov je $k$,
- razmerje ploščin je $k^2$.

Primer: pravokotni trikotnik s katetama $3\,\text{cm}$ in $4\,\text{cm}$ ima ploščino $\dfrac{3 \cdot 4}{2} = 6\,\text{cm}^2$. Podoben trikotnik s $k = 2$ ima kateti $6\,\text{cm}$ in $8\,\text{cm}$ in ploščino $\dfrac{6 \cdot 8}{2} = 24\,\text{cm}^2$. Res je $24 = 2^2 \cdot 6$.

## Preveri se

? Trikotnika sta podobna. Ustrezni stranici merita $5\,\text{cm}$ in $15\,\text{cm}$. Ena od stranic manjšega trikotnika meri $4\,\text{cm}$. Kolikšna je njena ustrezna stranica v večjem trikotniku?
- $14\,\text{cm}$
- $\dfrac{4}{3}\,\text{cm}$
+ $12\,\text{cm}$
> Razmerje podobnosti je $k = \dfrac{15}{5} = 3$, zato je ustrezna stranica $3 \cdot 4 = 12\,\text{cm}$. Odgovor $14$ dobiš, če stranici prišteješ razliko ($10$), kar ni pravilno, odgovor $\dfrac{4}{3}$ pa, če deliš namesto množiš.

? Kateri par trikotnikov je gotovo podoben?
- Dva enakokraka trikotnika.
- Dva trikotnika z obsegom $12\,\text{cm}$.
+ Trikotnik s koti $40^\circ$ in $70^\circ$ ter trikotnik s koti $70^\circ$ in $70^\circ$.
> Prvemu trikotniku je tretji kot $180^\circ - 40^\circ - 70^\circ = 70^\circ$, drugemu $180^\circ - 70^\circ - 70^\circ = 40^\circ$. Oba imata kote $40^\circ$, $70^\circ$, $70^\circ$, zato sta podobna po izreku KK. Enakokraka trikotnika ali enak obseg ne zagotavljata enakih kotov.

? Ali sta trikotnika s stranicami $4$, $6$, $8$ ter $6$, $9$, $13$ podobna?
- Da, ker sta dva para razmerja $1{,}5$.
- Da, ker sta oba trikotnika raznostranična.
+ Ne, ker je $\dfrac{13}{8} \neq 1{,}5$.
> Razmerja so $\dfrac{6}{4} = 1{,}5$, $\dfrac{9}{6} = 1{,}5$, a $\dfrac{13}{8} = 1{,}625$. Pri izreku SSS morajo biti enaka vsa tri razmerja.

:::simboli
a, b, c | stranice trikotnika | | | a′, b′, c′ so istoležne stranice podobnega trikotnika
k | razmerje podobnosti | k = \frac{a'}{a} | | k > 1 povečava, k < 1 pomanjšava
h | višina drevesa | | |
:::
