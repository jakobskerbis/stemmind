---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Kote že znaš meriti s kotomerom, ločiš ostre, prave, tope in iztegnjene kote ter poznaš pare kotov: sokota skupaj merita $180^\circ$, komplementarna kota $90^\circ$, sovršna kota pa sta enaka.

Do zdaj so bili koti večinoma merjeni v celih stopinjah. Ena stopinja pa je za marsikatero opravilo prevelika enota. Geodet, ki meri zemljišče, pilot, ki določa smer leta, ali mornar, ki odčitava zemljepisno širino, potrebujejo natančnejše meritve. Zato stopinjo razdelimo na manjše dele: **kotne minute**. Ljubljana na primer leži na zemljepisni širini približno $46^\circ 03'$.

V tej lekciji se boš naučil kote pretvarjati med stopinjami in minutami ter jih seštevati, odštevati, množiti in deliti z naravnim številom. Računanje je zelo podobno računanju s časom (ure in minute), ki ga že dobro poznaš.

## Razlaga

**1. Kotna minuta.** Stopinjo razdelimo na $60$ enakih delov. En tak del je **kotna minuta**, označimo jo z znakom $'$:

$$1^\circ = 60'$$

Kot, ki meri $35$ stopinj in $48$ minut, zapišemo $35^\circ 48'$ in preberemo »petintrideset stopinj in oseminštirideset minut«.

Za še natančnejše meritve minuto razdelimo na $60$ **kotnih sekund** ($1' = 60''$). V tej lekciji bomo računali samo s stopinjami in minutami.

**2. Pravilen zapis.** V pravilnem zapisu je število minut vedno med $0$ in $59$. Če dobiš $60$ ali več minut, jih pretvoriš v stopinje:

$$62^\circ 73' = 62^\circ + 60' + 13' = 63^\circ 13'$$

**3. Pretvarjanje stopinj v minute.** Stopinje množimo s $60$:

- $3^\circ = 3 \cdot 60' = 180'$,
- $12^\circ 25' = 12 \cdot 60' + 25' = 720' + 25' = 745'$.

**4. Pretvarjanje minut v stopinje.** Minute delimo s $60$; količnik so stopinje, ostanek so minute:

- $150' = 2^\circ 30'$, ker je $150 : 60 = 2$, ostanek $30$.

**5. Decimalni zapis stopinj.** Kot je lahko zapisan tudi z decimalnim številom, npr. $15{,}4^\circ$. Decimalni del množimo s $60$:

- $15{,}4^\circ = 15^\circ + 0{,}4 \cdot 60' = 15^\circ 24'$,
- $0{,}5^\circ = 30'$, $\;0{,}25^\circ = 15'$, $\;0{,}75^\circ = 45'$.

Obratno: $45' = \dfrac{45}{60}{}^\circ = 0{,}75^\circ$.

**6. Seštevanje.** Seštejemo posebej stopinje in posebej minute. Če je minut $60$ ali več, $60'$ zamenjamo z $1^\circ$.

**7. Odštevanje.** Odštejemo posebej stopinje in posebej minute. Če je minut v zmanjševancu premalo, si »izposodimo« eno stopinjo in jo spremenimo v $60'$. Pogost primer: $90^\circ = 89^\circ 60'$ in $180^\circ = 179^\circ 60'$.

**8. Množenje z naravnim številom.** Z istim številom pomnožimo stopinje in minute, nato zapis uredimo.

**9. Deljenje z naravnim številom.** Najprej delimo stopinje. Ostanek stopinj pretvorimo v minute in jih prištejemo minutam, nato delimo še minute.

| Operacija | Primer | Postopek |
|---|---|---|
| seštevanje | $20^\circ 40' + 10^\circ 30'$ | $30^\circ 70' = 31^\circ 10'$ |
| odštevanje | $50^\circ 10' - 20^\circ 40'$ | $49^\circ 70' - 20^\circ 40' = 29^\circ 30'$ |
| množenje | $2 \cdot 15^\circ 40'$ | $30^\circ 80' = 31^\circ 20'$ |
| deljenje | $25^\circ 30' : 3$ | $24^\circ 90' : 3 = 8^\circ 30'$ |

V interaktivni simulaciji spodaj (**Seštevanje kotov v stopinjah in minutah**) z drsniki nastaviš stopinje in minute dveh kotov ter opazuješ, kdaj se $60$ minut prelije v novo stopinjo.

## Rešeni primeri

### Primer 1 (lažji)

Kot $\alpha$ meri $35^\circ 48'$, kot $\beta$ pa $27^\circ 25'$. Koliko meri vsota $\alpha + \beta$?

**Podatki:** $\alpha = 35^\circ 48'$, $\beta = 27^\circ 25'$
**Iščemo:** vsoto $\alpha + \beta$

:::formula
Stopinje seštejemo s stopinjami, minute z minutami; nato uporabimo $60' = 1^\circ$.
:::

**Rešitev:**

1. Seštejemo stopinje: $35^\circ + 27^\circ = 62^\circ$.
2. Seštejemo minute: $48' + 25' = 73'$.
3. Vmesni rezultat je $62^\circ 73'$. Minut je več kot $60$, zato $73' = 60' + 13' = 1^\circ 13'$.
4. $62^\circ 73' = 63^\circ 13'$.
5. Preverimo v minutah: $35^\circ 48' = 2148'$, $27^\circ 25' = 1645'$, vsota $3793'$; $3793 : 60 = 63$, ostanek $13$. ✓
6. Odgovor: vsota kotov meri $63^\circ 13'$.

### Primer 2 (srednji)

Kot $\alpha$ meri $52^\circ 17'$. Izračunaj njegov sokot $\beta$ in njegov komplementarni kot $\gamma$.

**Podatki:** $\alpha = 52^\circ 17'$
**Iščemo:** sokot $\beta$ in komplementarni kot $\gamma$

:::formula
$\beta = 180^\circ - \alpha$, $\quad \gamma = 90^\circ - \alpha$; pri odštevanju uporabi $180^\circ = 179^\circ 60'$ in $90^\circ = 89^\circ 60'$.
:::

**Rešitev:**

1. Pri $180^\circ$ ni minut, zato si izposodimo eno stopinjo: $180^\circ = 179^\circ 60'$.
2. $\beta = 179^\circ 60' - 52^\circ 17' = 127^\circ 43'$.
3. Enako za komplementarni kot: $90^\circ = 89^\circ 60'$.
4. $\gamma = 89^\circ 60' - 52^\circ 17' = 37^\circ 43'$.
5. Preverimo: $52^\circ 17' + 127^\circ 43' = 179^\circ 60' = 180^\circ$ ✓ in $52^\circ 17' + 37^\circ 43' = 89^\circ 60' = 90^\circ$ ✓.
6. Odgovor: sokot meri $127^\circ 43'$, komplementarni kot pa $37^\circ 43'$. Opazi, da se razlikujeta natanko za $90^\circ$.

### Primer 3 (težji)

Kot $\alpha$ meri $24^\circ 38'$. Kot $\beta$ je trikrat tolikšen kot $\alpha$. Kot $\gamma$ je sokot kota $\beta$. Izračunaj $\beta$, $\gamma$ in tretjino kota $\gamma$.

**Podatki:** $\alpha = 24^\circ 38'$, $\beta = 3 \cdot \alpha$, $\gamma$ je sokot kota $\beta$
**Iščemo:** $\beta$, $\gamma$ in $\gamma : 3$

:::formula
$\beta = 3 \cdot \alpha$, $\quad \gamma = 180^\circ - \beta$; pri deljenju ostanek stopinj pretvori v minute ($1^\circ = 60'$).
:::

**Rešitev:**

1. Množenje: $3 \cdot 24^\circ 38' = 72^\circ 114'$.
2. Uredimo: $114' = 60' + 54' = 1^\circ 54'$, zato $\beta = 73^\circ 54'$.
3. Sokot: $\gamma = 179^\circ 60' - 73^\circ 54' = 106^\circ 6'$.
4. Deljenje stopinj: $106 : 3 = 35$, ostanek $1$ (ker $3 \cdot 35 = 105$).
5. Ostanek $1^\circ = 60'$ prištejemo minutam: $60' + 6' = 66'$.
6. Deljenje minut: $66' : 3 = 22'$. Torej $\gamma : 3 = 35^\circ 22'$.
7. Preverimo: $3 \cdot 35^\circ 22' = 105^\circ 66' = 106^\circ 6'$. ✓
8. Odgovor: $\beta = 73^\circ 54'$, $\gamma = 106^\circ 6'$, tretjina kota $\gamma$ pa meri $35^\circ 22'$.

## Pogoste napake

- **Računanje, kot da ima stopinja 100 minut.** Učenec zapiše $62^\circ 73'$ kot končni rezultat ali pa misli, da je $0{,}5^\circ = 50'$. Razlog: navada iz desetiškega sistema. Pravilno: stopinja ima $60'$, zato je $0{,}5^\circ = 30'$ in $62^\circ 73' = 63^\circ 13'$.
- **Pozabljeno izposojanje pri odštevanju.** Pri $90^\circ - 34^\circ 25'$ učenec zapiše $56^\circ 25'$ ali $56^\circ 35'$. Razlog: pri $90^\circ$ ni minut, zato minute »izginejo«. Pravilno: $90^\circ = 89^\circ 60'$, torej $89^\circ 60' - 34^\circ 25' = 55^\circ 35'$.
- **Pri izposojanju dodaš 100 namesto 60.** Pri $50^\circ 10' - 20^\circ 40'$ učenec piše $49^\circ 110'$. Razlog: postopek pisnega odštevanja z desetiškimi enotami. Pravilno: $1^\circ = 60'$, zato $50^\circ 10' = 49^\circ 70'$ in rezultat je $29^\circ 30'$.
- **Pri deljenju zavržeš ostanek stopinj.** Pri $25^\circ 30' : 3$ učenec deli $25 : 3 = 8$ in $30' : 3 = 10'$ ter dobi $8^\circ 10'$. Razlog: ostanek $1^\circ$ je ostal neupoštevan. Pravilno: $25^\circ 30' = 24^\circ 90'$, zato $24^\circ 90' : 3 = 8^\circ 30'$.
- **Decimalni zapis prepišeš kot minute.** $15{,}4^\circ$ ni $15^\circ 4'$ niti $15^\circ 40'$. Razlog: decimalke so desetinke stopinje, ne minute. Pravilno: $0{,}4 \cdot 60' = 24'$, zato $15{,}4^\circ = 15^\circ 24'$.

## Povzetek

- $1^\circ = 60'$ (in $1' = 60''$); kot zapišemo kot $35^\circ 48'$.
- V pravilnem zapisu je minut od $0$ do $59$; $60'$ zamenjamo z $1^\circ$.
- Stopinje v minute: množimo s $60$; minute v stopinje: delimo s $60$ (ostanek so minute).
- Decimalni del stopinje pomnožimo s $60$: $15{,}4^\circ = 15^\circ 24'$.
- Seštevamo in odštevamo posebej stopinje in posebej minute; pri odštevanju po potrebi $1^\circ \to 60'$, npr. $180^\circ = 179^\circ 60'$.
- Pri množenju pomnožimo oba dela in uredimo; pri deljenju ostanek stopinj pretvorimo v minute.
- Sokot: $180^\circ - \alpha$, komplementarni kot: $90^\circ - \alpha$.

## Drugače: Na sliki

Predstavljaj si kotomer, ki ga povečaš pod lupo. Med dvema sosednjima črticama za stopinjo, recimo med $35^\circ$ in $36^\circ$, bi pod lupo zagledal še $60$ drobnih črtic. Vsaka predstavlja eno minuto. Kot $35^\circ 48'$ torej sega čez črtico za $35^\circ$ in še $48$ drobnih črtic naprej, malo čez tri četrtine poti do $36^\circ$.

Ko seštevaš dva kota, si predstavljaj, da ju položiš drug ob drugega s skupnim temenom in skupnim krakom. Najprej se »zložijo« stopinje, nato drobne minute. Ko našteješ $60$ drobnih črtic, si prišel do naslednje cele stopinje. Tako $62^\circ 73'$ na kotomeru pomeni $63$ celih stopinj in še $13$ drobnih črtic. Prav to pokaže tudi interaktivna simulacija spodaj: ko vsota minut doseže $60$ ali več, izpiše pretvorbo $60' = 1^\circ$.

## Drugače: Iz vsakdanjega življenja

Najbolj podobna stvar kotom so **ure in minute**. Ena ura ima $60$ minut, tako kot ima ena stopinja $60'$. Če film traja $1$ uro $48$ minut, drugi pa $1$ uro $25$ minut, skupaj trajata $2$ uri $73$ minut, kar je $3$ ure $13$ minut. Natanko enako računamo s koti.

Tudi izposojanje poznaš: od $10{:}15$ do $11{:}40$ mine $1$ ura $25$ minut, od $10{:}40$ do $12{:}15$ pa moraš eno uro »razbiti« na $60$ minut in dobiš $1$ uro $35$ minut.

Kotne minute srečaš na zemljevidih. Zemljepisno lego krajev pišemo v stopinjah in minutah: Ljubljana leži približno na $46^\circ 03'$ severne zemljepisne širine in $14^\circ 30'$ vzhodne zemljepisne dolžine. Pomorščaki in piloti še danes računajo smer in lego v stopinjah in minutah.

## Drugače: Korak za korakom s številkami

Vsako nalogo lahko rešiš po istem receptu. Vzemimo $47^\circ 38' + 25^\circ 42'$ in $90^\circ - 34^\circ 25'$.

**Seštevanje:**

1. Podpiši stopinje pod stopinje, minute pod minute.
2. Stopinje: $47 + 25 = 72$.
3. Minute: $38 + 42 = 80$.
4. Vmesni rezultat: $72^\circ 80'$.
5. Ali je minut $60$ ali več? Da: $80' = 1^\circ 20'$.
6. Rezultat: $73^\circ 20'$.

**Odštevanje:**

1. Ali ima zmanjševanec dovolj minut? $90^\circ$ ima $0'$, odštevamo $25'$, torej ne.
2. Izposodi si eno stopinjo: $90^\circ = 89^\circ 60'$.
3. Stopinje: $89 - 34 = 55$.
4. Minute: $60 - 25 = 35$.
5. Rezultat: $55^\circ 35'$.
6. Preizkus: $55^\circ 35' + 34^\circ 25' = 89^\circ 60' = 90^\circ$. ✓

**Pretvorba decimalnega zapisa:** $28{,}75^\circ$: cele stopinje so $28$, decimalni del $0{,}75 \cdot 60 = 45$, torej $28^\circ 45'$.

## Drugače: Bolj natančno

Zakaj ravno $60$ in ne $100$? Delitev na $60$ delov izvira od starih Babiloncev, ki so računali v **šestdesetiškem številskem sistemu**. Število $60$ ima veliko deliteljev: $1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60$. Zato se stopinja brez ostanka razdeli na polovice, tretjine, četrtine, petine, šestine in še več delov, kar je zelo priročno.

Celotni sistem enot za kote je:

$$1^\circ = 60' = 3600'' \qquad 1' = 60''$$

Pri pretvarjanju minut v decimalni zapis bodi previden. $45' = 0{,}75^\circ$ je končno decimalno število, $20' = \dfrac{20}{60}{}^\circ = \dfrac{1}{3}{}^\circ = 0{,}333\ldots^\circ$ pa ni. Zato je zapis v stopinjah in minutah pogosto bolj natančen od zaokroženega decimalnega zapisa. Če računaš z žepnim računalom, ima ta pogosto posebno tipko za vnos stopinj, minut in sekund.

Zanimivost: ena kotna minuta zemljepisne širine ustreza na zemeljskem površju razdalji približno $1{,}85\,\text{km}$. Iz tega je nastala **navtična milja** ($1852\,\text{m}$), ki jo uporabljajo v pomorstvu in letalstvu.

## Preveri se

? Koliko kotnih minut meri $1^\circ$?
- $10'$
- $100'$
+ $60'$
- $360'$
> Stopinjo razdelimo na $60$ enakih delov: $1^\circ = 60'$.

? Koliko je $47^\circ 38' + 25^\circ 42'$?
- $72^\circ 20'$
+ $73^\circ 20'$
- $74^\circ 20'$
- $73^\circ 8'$
> $72^\circ 80'$ uredimo: $80' = 1^\circ 20'$, zato je vsota $73^\circ 20'$. Odgovor $72^\circ 20'$ dobiš, če pozabiš prenesti stopinjo.

? Koliko meri komplementarni kot kota $34^\circ 25'$?
- $56^\circ 25'$
+ $55^\circ 35'$
- $56^\circ 35'$
> $90^\circ - 34^\circ 25' = 89^\circ 60' - 34^\circ 25' = 55^\circ 35'$.

? Kako zapišeš $15{,}4^\circ$ v stopinjah in minutah?
- $15^\circ 4'$
- $15^\circ 40'$
+ $15^\circ 24'$
> Decimalni del pomnožimo s $60$: $0{,}4 \cdot 60' = 24'$, torej $15{,}4^\circ = 15^\circ 24'$.
