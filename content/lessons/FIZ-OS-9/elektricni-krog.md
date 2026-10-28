---
stanje: osnutek
phet: circuit-construction-kit-dc
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih ur že veš, da električni tok teče po prevodnikih, če je krog sklenjen, in da vir napetosti (baterija) požene naboje po krogu. Poznaš tudi osnovne elemente kroga: vir, žarnico, stikalo in vodnike.

V vsakdanjem življenju pa skoraj nikoli nimamo samo ene žarnice ali enega porabnika. V stanovanju hkrati svetijo luči, deluje hladilnik in polni se telefon. Zakaj, ko ugasneš eno luč, druge še vedno svetijo? Zakaj pa pri nekaterih božičnih lučkah ugasne cela veriga, če pregori ena sama? Odgovor je v tem, **kako so porabniki povezani med seboj**. Tej povezavi rečemo vezava. Spoznali bomo zaporedno in vzporedno vezavo.

## Razlaga

**1. Električni krog.** Električni krog je sklenjena pot, po kateri lahko teče električni tok. Sestavljajo ga:

- vir napetosti (baterija, akumulator),
- porabniki (žarnica, upornik, motorček),
- stikalo,
- vodniki, ki vse povežejo.

Tok teče samo, če je krog **sklenjen**. Če ga kjer koli prekinemo (odpremo stikalo, pregori žarnica), tok v tem delu kroga preneha.

**2. Električni načrt.** Krog narišemo s simboli: baterija, žarnica, stikalo, upornik in črte za vodnike. Pri risanju vodnike rišemo kot ravne črte s pravimi koti.

**3. Zaporedna vezava.** Porabniki so vezani **eden za drugim** v isti veji, tako da ima tok samo eno pot.

- Skozi vse porabnike teče **enak tok**: $I = I_1 = I_2$.
- Napetost vira se **porazdeli** med porabnike: $U = U_1 + U_2$.
- Če en porabnik izpade (pregori, odklopimo ga), se prekine **celoten** krog in vsi porabniki ugasnejo.
- Več ko je porabnikov, manjši je tok (skupni upor je večji), zato žarnice svetijo šibkeje.

**4. Vzporedna vezava.** Porabniki so vezani v **ločenih vejah**, ki se razcepijo v vozlišču in spet združijo. Tok ima več poti.

- Na vsakem porabniku je **enaka napetost**, enaka napetosti vira: $U = U_1 = U_2$.
- Skupni tok se **razdeli** po vejah: $I = I_1 + I_2$.
- Če en porabnik izpade, drugi **še naprej delujejo**, ker imajo svojo vejo.
- Vsak porabnik dobi polno napetost vira, zato svetijo enako močno, kot bi svetili sami.

**5. Primerjava.**

| | Zaporedna vezava | Vzporedna vezava |
|---|---|---|
| Tok | enak povsod | se razdeli po vejah |
| Napetost | se porazdeli | enaka na vsaki veji |
| Če en porabnik izpade | vsi ugasnejo | drugi delujejo |

**6. Merilnika.** Z ampermetrom merimo tok; vežemo ga **zaporedno** s porabnikom (tok mora teči skozi njega). Z voltmetrom merimo napetost; vežemo ga **vzporedno** s porabnikom (meri napetost med dvema točkama).

**7. Uporaba simulacije.** V interaktivni simulaciji spodaj sestavi krog z baterijo in dvema žarnicama. Najprej ju veži zaporedno, nato vzporedno. Opazuj svetlost žarnic in kazalce merilnikov, nato obe vezavi primerjaj.

## Rešeni primeri

### Primer 1 (lažji): zaporedna vezava

Dve žarnici sta zaporedno vezani na baterijo z napetostjo $6\,\text{V}$. Ampermeter pokaže $0{,}2\,\text{A}$. Na prvi žarnici izmerimo $2\,\text{V}$. Kolikšen je tok skozi drugo žarnico in kolikšna je napetost na njej?

**Podatki:** zaporedna vezava dveh žarnic, $U = 6\,\text{V}$, $I = 0{,}2\,\text{A}$ (kaže ampermeter), $U_1 = 2\,\text{V}$
**Iščemo:** tok $I_2$ skozi drugo žarnico in napetost $U_2$ na njej

:::formula
Zaporedna vezava: $I = I_1 = I_2$, $U = U_1 + U_2$
:::

**Rešitev:**

1. Vezava je zaporedna, zato je tok povsod enak: $I_2 = I = 0{,}2\,\text{A}$.
2. Napetosti se seštevajo: $U = U_1 + U_2$.
3. Izrazimo: $U_2 = U - U_1 = 6\,\text{V} - 2\,\text{V} = 4\,\text{V}$.
4. Preverimo: $2\,\text{V} + 4\,\text{V} = 6\,\text{V}$, kar je enako napetosti baterije.

**Odgovor:** skozi drugo žarnico teče $0{,}2\,\text{A}$, napetost na njej je $4\,\text{V}$.

### Primer 2: vzporedna vezava

Dve žarnici sta vzporedno vezani na baterijo z napetostjo $4{,}5\,\text{V}$. Skozi prvo teče $0{,}3\,\text{A}$, skozi drugo $0{,}2\,\text{A}$. Kolikšna je napetost na vsaki žarnici in kolikšen tok teče skozi baterijo?

**Podatki:** vzporedna vezava dveh žarnic, $U = 4{,}5\,\text{V}$, $I_1 = 0{,}3\,\text{A}$, $I_2 = 0{,}2\,\text{A}$
**Iščemo:** napetosti $U_1$ in $U_2$ na žarnicah ter tok $I$ skozi baterijo

:::formula
Vzporedna vezava: $U = U_1 = U_2$, $I = I_1 + I_2$
:::

**Rešitev:**

1. Vezava je vzporedna, zato je na vsaki veji enaka napetost kot na viru: $U_1 = U_2 = 4{,}5\,\text{V}$.
2. Tok se v vozlišču razdeli, skozi baterijo pa teče vsota tokov po vejah: $I = I_1 + I_2$.
3. Vstavimo: $I = 0{,}3\,\text{A} + 0{,}2\,\text{A} = 0{,}5\,\text{A}$.
4. Preverimo smiselnost: skupni tok je večji od toka v vsaki veji posebej, kar mora veljati.

**Odgovor:** na vsaki žarnici je $4{,}5\,\text{V}$, skozi baterijo teče $0{,}5\,\text{A}$.

### Primer 3 (težji): kaj se zgodi, če ena žarnica pregori

Tri enake žarnice so vezane na baterijo. Najprej so vezane zaporedno, nato vzporedno. V obeh primerih odvijemo eno žarnico. Kaj se zgodi z ostalima dvema?

**Podatki:** tri enake žarnice na bateriji; najprej so vezane zaporedno, nato vzporedno; v obeh primerih odvijemo eno žarnico (številskih podatkov ni)
**Iščemo:** ali ostali dve žarnici še svetita in kako močno

:::formula
Zaporedna vezava: tok ima eno samo pot, zato prekinitev kjer koli ustavi tok v celotnem krogu. Vzporedna vezava: vsaka veja je samostojna in na vsaki je polna napetost vira ($U = U_1 = U_2 = U_3$).
:::

**Rešitev:**

1. **Zaporedna vezava.** Vse tri žarnice so v isti veji. Če eno odvijemo, je krog na tistem mestu prekinjen. Tok nima več sklenjene poti, zato **ugasneta tudi ostali dve**.
2. **Vzporedna vezava.** Vsaka žarnica je v svoji veji. Odvitje ene prekine samo to vejo. Ostali dve veji sta še vedno sklenjeni, zato obe **svetita naprej**.
3. **Svetlost ostalih dveh.** Pri vzporedni vezavi je na vsaki preostali žarnici še vedno polna napetost vira, zato svetita enako kot prej.
4. **Zakaj.** To je tudi razlog, da v stanovanju ugasnitev ene luči ne vpliva na druge: vsi porabniki so vezani vzporedno na omrežno napetost.

**Odgovor:** pri zaporedni vezavi ugasnejo vse, pri vzporedni ostali dve svetita naprej z enako svetlostjo.

## Pogoste napake

- **Mešanje tokov in napetosti.** Pri zaporedni vezavi je enak **tok**, pri vzporedni pa enaka **napetost**. Pomagaj si s tabelo zgoraj.
- **Napačna vezava merilnikov.** Ampermeter gre zaporedno, voltmeter vzporedno. Če ampermeter vežeš vzporedno, lahko dobiš zelo velik tok in merilnik poškoduješ.
- **»Pri vzporedni vezavi se napetost deli.«** Ne deli se. Vsak porabnik je priključen na polno napetost vira. Deli se tok.
- **Seštevanje napačnih količin.** Pri zaporedni vezavi seštevamo napetosti, pri vzporedni tokove. Ne seštevaj tokov v zaporedni vezavi.
- **Nesklenjen krog.** Če žarnica ne sveti, najprej preveri, ali je krog povsod sklenjen (stikalo, stiki vodnikov).

## Povzetek

- Električni krog je sklenjena pot za tok: vir, porabniki, stikalo, vodniki.
- **Zaporedna vezava:** ena pot za tok, $I = I_1 = I_2$, $U = U_1 + U_2$. Če en porabnik izpade, ugasnejo vsi.
- **Vzporedna vezava:** več vej, $U = U_1 = U_2$, $I = I_1 + I_2$. Če en porabnik izpade, drugi delujejo naprej.
- Ampermeter vežemo zaporedno, voltmeter vzporedno.
- Gospodinjske porabnike vežemo vzporedno.

## Drugače: Na sliki

Predstavljaj si krog kot zaprto krožno cesto.

**Zaporedna vezava** je ena sama cesta, na kateri je zapored več cestninskih postaj (porabnikov). Vsi avtomobili (naboji) morajo skozi vse postaje, zato v vsakem trenutku skozi vsako postajo pelje enako število avtomobilov na sekundo. To je enak tok. Če je ena postaja zaprta, se promet ustavi povsod.

**Vzporedna vezava** je cesta, ki se razcepi na dva pasova in se kasneje spet združi. Avtomobili se razdelijo po pasovih, skupno število avtomobilov pa je vsota po obeh pasovih. Če je en pas zaprt, promet po drugem teče naprej.

Na skici kroga pri vzporedni vezavi poišči dve vozlišči: v prvem se tok razcepi, v drugem se združi. Med njima je na obeh vejah enaka napetost.

V interaktivni simulaciji spodaj lahko merilnike postaviš na različna mesta in to sam preveriš.

## Drugače: Iz vsakdanjega življenja

**Božične lučke.** Pri starejših verigah so bile žarnice vezane zaporedno. Ko je ena pregorela, je ugasnila cela veriga in iskati si moral pokvarjeno. Pri novejših so žarnice ali skupine žarnic vezane tako, da izpad ene ne ugasne vseh.

**Stanovanje.** Vse vtičnice in luči so vezane vzporedno na omrežno napetost. Zato vsaka naprava dobi polno napetost in deluje neodvisno od drugih. Če ugasneš luč v kuhinji, hladilnik teče naprej.

**Baterije v svetilki.** Baterije v svetilki so pogosto vezane zaporedno. Napetosti se seštevajo, zato dve bateriji skupaj dasta večjo napetost kot ena. (To velja za baterije enake vrste, ki so pravilno obrnjene.)

**Varovalka.** Varovalka je vezana zaporedno z napravo. Ko je tok prevelik, se prekine in prekine tudi celoten krog, kar je zaželeno kot zaščita.

## Drugače: Korak za korakom s številkami

Primerjajmo dve enaki žarnici na bateriji $6\,\text{V}$. Vsaka žarnica ima, kadar je sama priključena na $6\,\text{V}$, tok $0{,}4\,\text{A}$.

**A) Ena sama žarnica:**

- napetost na žarnici: $6\,\text{V}$,
- tok: $0{,}4\,\text{A}$.

**B) Dve enaki žarnici vzporedno:**

1. Na vsaki žarnici je $6\,\text{V}$ (enaka napetost vira).
2. Skozi vsako teče $0{,}4\,\text{A}$, ker je to enako, kot če bi bila sama.
3. Skozi baterijo teče: $I = 0{,}4\,\text{A} + 0{,}4\,\text{A} = 0{,}8\,\text{A}$.
4. Baterija je bolj obremenjena (večji tok), žarnici pa svetita normalno.

**C) Dve enaki žarnici zaporedno:**

1. Žarnici sta enaki, zato se napetost porazdeli enakomerno: vsaka dobi $6\,\text{V} : 2 = 3\,\text{V}$.
2. Pri manjši napetosti je tok manjši kot $0{,}4\,\text{A}$, zato žarnici svetita šibkeje.
3. Skupna napetost je $3\,\text{V} + 3\,\text{V} = 6\,\text{V}$, kar se ujema z napetostjo vira.

Točne vrednosti toka v primeru C tu še ne računamo: potrebovali bi Ohmov zakon, upor žarnice pa se poleg tega spreminja s temperaturo nitke. Pomembno je razumeti, da je tok manjši kot $0{,}4\,\text{A}$ in da je tok skozi obe žarnici enak.

| Vezava | Napetost na žarnici | Tok skozi baterijo | Svetlost žarnic |
|---|---|---|---|
| ena žarnica | $6\,\text{V}$ | $0{,}4\,\text{A}$ | normalna |
| dve vzporedno | $6\,\text{V}$ | $0{,}8\,\text{A}$ | normalna |
| dve zaporedno | $3\,\text{V}$ | manj kot $0{,}4\,\text{A}$ | šibkejša |

## Drugače: Bolj natančno

Zakaj se v vzporedni vezavi tokovi seštevajo, v zaporedni pa napetosti?

**Ohranitev naboja.** Naboj se v krogu ne izgublja in ne nastaja. V vozlišču, kjer se tok razcepi, mora priteči toliko naboja, kolikor ga odteče:

$$I = I_1 + I_2$$

Zato se v vzporedni vezavi tokovi po vejah seštevajo, v zaporedni vezavi (kjer ni razcepa) pa je tok na vsakem mestu enak.

**Ohranitev energije.** Napetost pove, koliko energije na enoto naboja prejme naboj pri prehodu skozi vir oziroma odda pri prehodu skozi porabnik. Pri zaporedni vezavi mora naboj prepotovati vse porabnike, zato se energija, ki jo je dobil na viru, porazdeli med njih:

$$U = U_1 + U_2$$

Pri vzporedni vezavi gre naboj samo skozi eno vejo. Vsaka veja povezuje isti dve točki kroga, zato je napetost med njima za vse veje enaka:

$$U = U_1 = U_2$$

**Skupni upor** (za zanimivost, v tej lekciji ga ne računamo). Pri zaporedni vezavi se upori seštevajo, zato je skupni upor večji in tok manjši. Pri vzporedni vezavi je skupni upor manjši od najmanjšega posameznega upora, zato skupni tok naraste.

## Preveri se

? Dve žarnici sta vezani zaporedno. Skozi prvo teče $0{,}5\,\text{A}$. Kolikšen je tok skozi drugo?
- $0{,}25\,\text{A}$
- $1\,\text{A}$
+ $0{,}5\,\text{A}$
- Ne moremo ugotoviti, ker ne poznamo napetosti.
> Pri zaporedni vezavi imajo naboji samo eno pot, zato je tok skozi vse porabnike enak. Tok skozi drugo žarnico je tako $0{,}5\,\text{A}$. Odgovora $0{,}25\,\text{A}$ in $1\,\text{A}$ bi dobili, če bi tok napačno delili ali seštevali.

? Dve žarnici sta vezani vzporedno na baterijo z napetostjo $9\,\text{V}$. Kolikšna je napetost na eni žarnici?
- $4{,}5\,\text{V}$
- $18\,\text{V}$
+ $9\,\text{V}$
> Pri vzporedni vezavi sta obe veji priključeni na isti dve točki kroga, zato je na vsakem porabniku enaka napetost kot na viru: $9\,\text{V}$. Napetost se deli pri zaporedni vezavi, ne pri vzporedni.

? V stanovanju ugasnemo eno luč, druge pa svetijo naprej. Zakaj?
- Ker so luči vezane zaporedno.
+ Ker so luči vezane vzporedno, vsaka v svoji veji.
- Ker se pri ugasnitvi ene luči napetost poveča na ostalih.
> Pri vzporedni vezavi ima vsak porabnik svojo vejo, zato prekinitev ene veje ne vpliva na druge. Pri zaporedni vezavi bi se z odklopom ene luči prekinil celoten krog. Pri vzporedni vezavi pa napetost na ostalih lučeh ostane enaka napetosti vira, zato se ne poveča.
