---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Nina je fizioterapevtka v nogometnem klubu. Novembra imajo trije igralci gnojne rane na kolenih po padcih na umetni travi. Zdravnik predpiše antibiotik, ki je pri takih okužbah lani deloval v nekaj dneh. Tokrat ne zaleže. Brisi pokažejo bakterijo *Staphylococcus aureus*, odporno proti meticilinu (MRSA).

Kapetan ekipe je prepričan: »Bakterije so se na antibiotik navadile, tako kot se mi navadimo na napor.« Nina mora odločiti, kaj storiti z brisačami, kadmi za ledeno kopel in skupnimi mazili. Če ima kapetan prav, bi bilo dovolj zamenjati antibiotik. Če nima, je težava v tem, *katere* bakterije so v slačilnici preživele.

Odgovor da evolucija z naravnim izborom. Ista razlaga pojasni tudi, kako nastanejo nove vrste in kako iz zaporedij DNA narišemo sorodstvena drevesa. Na tem stoji vsa nadaljnja biologija raznolikosti.

## Razlaga

**Kapetanova razlaga.** Zveni smiselno. Mišice športnika se ob treningu okrepijo, torej se je morda vsaka bakterija ob antibiotiku »okrepila«. Takemu pogledu rečemo dedovanje pridobljenih lastnosti (po Lamarcku). Težava je v dedovanju. Sin maratonca se ne rodi z boljšo kondicijo, ker je oče treniral. Iz poglavja o Mendlu veš, da se dedujejo aleli v DNA, ne pa spremembe, ki jih telo pridobi med življenjem.

**Kaj se je res zgodilo.** Že pred zdravljenjem je bila v populaciji bakterij peščica celic z dedno različico, zaradi katere antibiotik nanje ne deluje. Nastala je naključno: z mutacijo ob podvojevanju DNA ali s prevzemom gena od druge bakterije. Nastala bi tudi brez antibiotika. Antibiotik je občutljive celice pobil, odporne pa so se delile naprej. Nobena bakterija se ni spremenila. Spremenil se je **delež** odpornih v populaciji.

**Naravni izbor.** Opisani proces je **naravni izbor** (selekcija). Deluje, kadar hkrati veljajo tri stvari:

1. **Variabilnost.** Osebki v populaciji se razlikujejo.
2. **Dednost.** Del razlik je zapisan v genih in preide na potomce.
3. **Različen razmnoževalni uspeh.** Nekatere različice imajo v danem okolju več plodnih potomcev kot druge.

Če velja vse troje, se pogostost ugodnih alelov iz generacije v generacijo veča. **Evolucija** je prav to: sprememba pogostosti alelov v populaciji skozi generacije. Evolvira populacija, ne posameznik.

**Fitnes ni kondicija.** Mera, ki odloča, je **biološki fitnes**: koliko plodnih potomcev pusti nosilec neke različice v primerjavi z drugimi. Šibka, a hitro deleča se bakterija ima lahko večji fitnes od močne, ki se deli počasi. Fitnes je vedno vezan na okolje. Brez antibiotika odpornost pogosto nič ne prinese, celo stane.

:::premisli
Klub preneha uporabljati antibiotik. Odporni sevi se delijo malo počasneje kot občutljivi. Kaj napoveš za delež odpornih čez nekaj mesecev?
---
Delež bo počasi padal. Brez antibiotika imajo občutljive celice večji fitnes, ker se hitreje delijo. Izbor ni usmerjen »naprej«, ampak vedno k temu, kar v trenutnem okolju pusti več potomcev.
:::

**Od populacije do vrste.** Biološka **vrsta** je skupina populacij, katerih osebki se lahko med seboj križajo in imajo plodne potomce. Od drugih vrst jih loči **razmnoževalna izolacija**. Pregrade so dveh vrst:

| Pregrada | Kdaj deluje | Primer |
|---|---|---|
| prezigotna | pred oploditvijo | drugačen čas parjenja, drugačno dvorjenje |
| postzigotna | po oploditvi | potomec propade ali je neploden (mula) |

Proces nastajanja novih vrst je **speciacija**. Najpogostejša je **alopatrična**: fizična ovira (gorovje, morje, reka) razdeli populacijo. Med delama ni več pretoka genov. Mutacije, izbor in naključje (genski zdrs) ju vodijo vsakega po svoje. Po dovolj generacijah se osebki obeh delov ob ponovnem srečanju ne morejo več uspešno križati.

Pri **simpatrični** speciaciji ovire ni. Pri rastlinah je pogosta pot **poliploidija**. Napaka pri mejozi da diploidno gameto ($2n$). Iz dveh takih gamet nastane tetraploidna rastlina ($4n$). Ta je plodna s sabo, s starševsko vrsto pa da triploidne ($3n$) potomce.

:::premisli
Zakaj so triploidni potomci skoraj vedno neplodni? Pomagaj si z mejozo.
---
V mejozi I se homologni kromosomi združijo v pare. Pri treh kopijah vsakega kromosoma ostane eden brez para in naključno odide na eno stran. Gamete dobijo neuravnoteženo število kromosomov in večinoma niso sposobne za oploditev. Tetraploid in diploid sta zato v eni generaciji ločeni vrsti.
:::

**Filogenija.** Ker vse vrste izvirajo iz skupnih prednikov, njihovo sorodnost narišemo kot **filogenetsko drevo**. Vrhovi vej so današnje vrste. Vsako **vozlišče** je skupni prednik vrst nad njim. Koren je najstarejši skupni prednik vseh vrst na drevesu.

```
        ┌──── zebra
     ┌──┤
  ┌──┤  └──── osel
  │  └─────── konj
──┤
  └────────── nosorog
```

Sorodnost bereš po vozliščih, ne po vrstnem redu vrhov. Zebra in osel imata najmlajšega skupnega prednika, zato sta si najbližja. Vejo pri vozlišču lahko zasukaš (osla narišeš nad zebro) in drevo ostane isto. Skupina, ki obsega prednika in *vse* njegove potomce, je **klad** (monofiletska skupina).

Drevesa danes rišemo predvsem iz zaporedij DNA. Več razlik pomeni daljši čas od razcepa. Če se razlike nabirajo približno enakomerno, govorimo o **molekulski uri**: razdalja je sorazmerna s časom od skupnega prednika.

## Rešeni primeri

### Primer 1 (lažji): brisače v slačilnici

Na brisači v slačilnici je $1\,000\,000$ celic stafilokoka. Med njimi je $0{,}1\,\%$ odpornih proti antibiotiku. Antibiotik pobije $99{,}9\,\%$ občutljivih celic, odpornih pa ne. Kolikšen delež preživelih celic je odporen?

**Podatki:** $N = 1\,000\,000$ celic, delež odpornih pred zdravljenjem $0{,}1\,\%$, antibiotik pobije $99{,}9\,\%$ občutljivih in $0\,\%$ odpornih
**Iščemo:** delež odpornih med preživelimi

:::formula
$\text{delež odpornih} = \dfrac{N_\text{odp}}{N_\text{odp} + N_\text{obč}}$, štejemo le preživele
:::

**Rešitev:**

1. Odpornih je $0{,}1\,\%$ od $1\,000\,000$, torej $1000$ celic. Vse preživijo, ker antibiotik nanje ne deluje.
2. Občutljivih je $1\,000\,000 - 1000 = 999\,000$.
3. Preživi jih $0{,}1\,\%$: $999\,000 \cdot 0{,}001 = 999$.
4. Preživelih je skupaj $1000 + 999 = 1999$.
5. Delež odpornih: $\dfrac{1000}{1999} \approx 0{,}500$.
6. Odgovor: delež odpornih je po enem zdravljenju zrasel z $0{,}1\,\%$ na približno $50\,\%$, čeprav se ni spremenila nobena celica.

### Primer 2: izbor skozi generacije

Pri nizki koncentraciji antibiotika preživi in se razmnoži vsaka odporna celica, od občutljivih pa le polovica. Relativni fitnes odpornih je zato $w_R = 1$, občutljivih $w_S = 0{,}5$. Na začetku je delež odpornih $p_0 = 0{,}1$. Kolikšen je po dveh generacijah?

**Podatki:** $w_R = 1$, $w_S = 0{,}5$, $p_0 = 0{,}1$, število generacij $2$
**Iščemo:** delež odpornih $p_2$

:::formula
$p' = \dfrac{p \cdot w_R}{p \cdot w_R + (1 - p) \cdot w_S}$
:::

**Rešitev:**

1. Števec je delež odpornih, utežen s fitnesom. Imenovalec je povprečni fitnes populacije, da se deleži seštejejo v $1$.
2. Prva generacija: $p_1 = \dfrac{0{,}1}{0{,}1 + 0{,}9 \cdot 0{,}5} = \dfrac{0{,}1}{0{,}55} \approx 0{,}182$.
3. Druga generacija: $p_2 = \dfrac{0{,}182}{0{,}182 + 0{,}818 \cdot 0{,}5} = \dfrac{0{,}182}{0{,}591} \approx 0{,}308$.
4. Odgovor: po dveh generacijah je odpornih približno $31\,\%$ celic. Delež se je v samo dveh generacijah približno potrojil.

### Primer 3 (težji): drevo iz razlik in molekulska ura

V istem odseku DNA so našteli razlike med štirimi vrstami (zaokroženi podatki za vajo): zebra–osel $4$, konj–zebra $8$, konj–osel $8$, nosorog–vsaka od ostalih treh $112$. Razcep med nosorogovo in konjevo linijo je star približno $56$ milijonov let. Nariši drevo in oceni, kdaj sta se ločili zebra in osel.

**Podatki:** razdalje $d(\text{zebra}, \text{osel}) = 4$, $d(\text{konj}, \text{zebra}) = d(\text{konj}, \text{osel}) = 8$, $d(\text{nosorog}, \cdot) = 112$; $t_\text{ref} = 56$ milijonov let za razdaljo $112$
**Iščemo:** obliko drevesa in čas razcepa zebra–osel $t$

:::formula
Najprej združi najbližji par. Molekulska ura: $t = t_\text{ref} \cdot \dfrac{d}{d_\text{ref}}$
:::

**Rešitev:**

1. Najmanjša razdalja je $4$, zato zebro in osla združimo v prvem vozlišču. Imata najmlajšega skupnega prednika.
2. Konj je od obeh enako oddaljen ($8$), zato se pridruži paru zebra–osel v naslednjem vozlišču.
3. Nosorog je od vseh daleč ($112$). Je zunanja skupina in se veže pri korenu. Dobimo drevo, narisano v razlagi.
4. Molekulska ura: $t = 56 \cdot \dfrac{4}{112} = 2$ milijona let.
5. Odgovor: drevo ima obliko ((zebra, osel), konj), nosorog. Zebra in osel sta se ločila pred približno $2$ milijonoma let.

### Primer 4: zdaj ti

Po zdravljenju je v slačilnici delež odpornih $p = 0{,}5$. Klub antibiotik ukine. Brez njega imajo odporne celice fitnes $w_R = 0{,}8$, občutljive pa $w_S = 1$. Kolikšen bo delež odpornih v naslednji generaciji?

**Podatki:** $p = 0{,}5$, $w_R = 0{,}8$, $w_S = 1$
**Iščemo:** delež odpornih $p'$

:::formula
$p' = \dfrac{p \cdot w_R}{p \cdot w_R + (1 - p) \cdot w_S}$
:::

**Rešitev:**

1. Števec: $0{,}5 \cdot 0{,}8 = 0{,}4$.
2. Imenovalec in količnik izračunaj sam, nato preveri:

:::premisli
Koliko je $p'$? Ali delež raste ali pada?
---
Imenovalec je $0{,}4 + 0{,}5 \cdot 1 = 0{,}9$, zato $p' = \dfrac{0{,}4}{0{,}9} \approx 0{,}444$. Delež pada, ker je v okolju brez antibiotika fitnes odpornih manjši.
:::

## Pogoste napake

- **»Organizem se spremeni, ker mora.«** Študent misli, da antibiotik v bakteriji sproži odpornost. Mutacije nastajajo naključno, ne glede na potrebe organizma. Okolje jih ne naroči, le izbere med obstoječimi. Pravilno: različica je obstajala že prej, izbor je povečal njen delež.
- **»Posameznik evolvira.«** Bakterija, ki je preživela, je ista kot prej. Spreminja se sestava populacije. Pravilno: evolucija je sprememba pogostosti alelov v populaciji skozi generacije.
- **»Preživi najmočnejši.«** Fitnes ni moč ali vzdržljivost, ampak število plodnih potomcev v danem okolju. Pravilno: vprašaj, kdo pusti več potomcev, ne kdo je močnejši.
- **Branje drevesa po vrstnem redu vrhov.** Dve vrsti, narisani druga ob drugi, nista nujno najbližji sorodnici. Pravilno: poišči najmlajše skupno vozlišče.
- **»Človek izvira iz šimpanza.«** Današnje vrste so na vrhovih vej, ne na deblu. Pravilno: človek in šimpanz imata skupnega prednika, ki ni bil ne eno ne drugo.

## Povzetek

- Naravni izbor deluje, če obstajajo variabilnost, dednost in različen razmnoževalni uspeh.
- Evolucija je sprememba pogostosti alelov v populaciji; posameznik ne evolvira, pridobljene lastnosti se ne dedujejo.
- Biološki fitnes je relativno število plodnih potomcev in je odvisen od okolja.
- Vrsta je skupina populacij, ki se plodno križajo; ločuje jo razmnoževalna izolacija (prezigotne in postzigotne pregrade).
- Speciacija je alopatrična (ločitev z oviro) ali simpatrična (npr. poliploidija pri rastlinah).
- Filogenetsko drevo beremo po vozliščih (skupni predniki); klad je prednik z vsemi potomci; molekulska ura pretvori število razlik v čas.

## Drugače: Kot zgodba

Predstavljaj si ligo, v kateri vsako sezono igra $100$ ekip. Ekipe ne trenirajo in se ne izboljšujejo. Ob koncu sezone najboljša polovica »dobi potomce«: vsaka ustanovi dve novi ekipi z enako taktiko, z redkimi naključnimi spremembami. Slabša polovica razpade.

Po nekaj sezonah liga igra drugače. Prevladajo taktike, ki so bile uspešne pri tem sodniku, na tej podlagi in s temi pravili. Nobena ekipa se ni spremenila. Spremenila se je sestava lige.

Zdaj liga razpade na dve regiji, ki več ne igrata skupaj. Pravila in podlage se razlikujejo. Po dolgem času se ekipe iz različnih regij ne morejo več pomeriti, ker igrajo po nezdružljivih pravilih. To je speciacija.

Če zapisuješ, katera ekipa je ustanovila katero, dobiš rodovnik ekip. To je filogenetsko drevo.

## Drugače: Korak za korakom s številkami

Primer 2 lahko rešiš tudi brez računanja po generacijah. Zapiši razmerje odpornih proti občutljivim: $\dfrac{p}{1-p}$.

1. Na začetku: $\dfrac{0{,}1}{0{,}9} \approx 0{,}111$.
2. Vsaka generacija pomnoži razmerje z $\dfrac{w_R}{w_S} = \dfrac{1}{0{,}5} = 2$.
3. Po dveh generacijah: $0{,}111 \cdot 2 \cdot 2 \approx 0{,}444$.
4. Nazaj v delež: $p = \dfrac{0{,}444}{1 + 0{,}444} \approx 0{,}308$.

Rezultat je enak kot v primeru 2. Pri $w_R/w_S = 2$ se razmerje vsako generacijo podvoji, zato izbor sprva deluje počasi, nato pa zelo hitro.

## Drugače: Bolj natančno

Iz $p' = \dfrac{p w_R}{\bar w}$ in $q' = \dfrac{q w_S}{\bar w}$, kjer je $\bar w = p w_R + q w_S$, sledi $\dfrac{p'}{q'} = \dfrac{p}{q} \cdot \dfrac{w_R}{w_S}$. Po $t$ generacijah je zato

$$\frac{p_t}{q_t} = \frac{p_0}{q_0} \left(\frac{w_R}{w_S}\right)^t.$$

Model velja za haploidne organizme (bakterije) z ločenimi generacijami in brez novih mutacij. Pri diploidnih organizmih je fitnes vezan na genotip ($AA$, $Aa$, $aa$), zato je izbor proti recesivnemu alelu zelo počasen, ko je ta redek: večinoma se skriva v heterozigotih.

## Preveri se

? Kateri od naštetih pogojev **ni** potreben za delovanje naravnega izbora?
- Osebki se med seboj razlikujejo.
~ Brez variabilnosti izbor nima med čim izbirati, zato je ta pogoj nujen.
- Razlike se vsaj delno dedujejo.
~ Če se razlike ne dedujejo, se uspeh staršev ne prenese na potomce in pogostost alelov se ne spremeni.
+ Organizem potrebuje spremembo, da preživi.
- Nekatere različice imajo več plodnih potomcev.
~ Prav različen razmnoževalni uspeh je jedro izbora.
> Potreba organizma ne povzroči mutacij. Izbor deluje na variabilnost, ki že obstaja.

? Delež odpornih bakterij je $p = 0{,}2$. Fitnes odpornih je $w_R = 1$, občutljivih $w_S = 0{,}6$. Kolikšen je delež odpornih v naslednji generaciji?
- $0{,}2$
~ Delež se spremeni, ker imata skupini različen fitnes.
- $0{,}333$
~ To je $0{,}2 / 0{,}6$. Imenovalec mora biti povprečni fitnes $0{,}2 \cdot 1 + 0{,}8 \cdot 0{,}6$.
+ $0{,}294$
- $0{,}385$
~ Tu je za občutljive uporabljen delež, ki umre ($0{,}4$), namesto deleža, ki preživi ($0{,}6$).
> $p' = \dfrac{0{,}2}{0{,}2 + 0{,}8 \cdot 0{,}6} = \dfrac{0{,}2}{0{,}68} \approx 0{,}294$.

? Reka spremeni strugo in razdeli populacijo hroščev na dva dela. Zakaj lahko čez dolgo časa nastaneta dve vrsti?
- Ker voda neposredno spremeni gene hroščev.
~ Okolje ne piše mutacij. Vpliva le na to, katere različice se uspešneje razmnožujejo.
+ Ker med deloma ni pretoka genov, zato mutacije, izbor in naključje vsak del spreminjajo po svoje.
- Ker se hrošči na vsakem bregu prilagodijo med svojim življenjem in to prenesejo na potomce.
~ Pridobljene lastnosti se ne dedujejo; spreminja se pogostost alelov v populaciji.
> To je alopatrična speciacija: ločeni populaciji kopičita razlike, dokler ne nastane razmnoževalna izolacija.

? Na drevesu se A in B združita v vozlišču X, C in D v vozlišču Y, X in Y pa v korenu. Vrhovi so narisani v vrstnem redu A, B, C, D. Študent sklepa: (1) B in C sta narisana drug ob drugem; (2) zato sta B in C najbližja sorodnika; (3) A in D imata skupnega prednika le v korenu. Kateri korak je napačen?
- Korak (1)
~ To je le opis slike in je točen.
+ Korak (2)
- Korak (3)
~ A je pod X, D pod Y, zato je njun najmlajši skupni prednik res koren.
> Sorodnost beremo po najmlajšem skupnem vozlišču. B in C se srečata šele v korenu, B in A pa že v X.

? Na golf igrišču so deset let škropili travo z istim herbicidom proti plevelu. Zdaj se enoletna latovka po škropljenju ne posuši več. Katera razlaga je najboljša?
- Latovka se je herbicida postopoma navadila, kot se športnik navadi na napor.
~ To je dedovanje pridobljenih lastnosti. Odporne rastline so obstajale že prej in jih je herbicid izbral.
+ Herbicid je vsako leto pobil občutljive rastline, odporne so se razmnožile in njihov delež je narasel.
- Herbicid je v rastlinah povzročil mutacije za odpornost.
~ Mutacije nastajajo naključno, ne zato, ker bi jih rastlina potrebovala.
> Isti mehanizem kot pri MRSA v slačilnici: isti dejavnik izbora vsako leto poveča delež odpornih.

:::simboli
p_t | delež odpornih po t generacijah | | – |
q_t | delež občutljivih po t generacijah | | – | p_t + q_t = 1
p_0 | začetni delež odpornih | | – |
q_0 | začetni delež občutljivih | | – | q_0 = 1 - p_0
w_R | relativni fitnes odpornih | | – | najbolj uspešni imajo 1
w_S | relativni fitnes občutljivih | | – |
t | število generacij | | – | pri molekulski uri čas razcepa v milijonih let
N_\text{odp} | število preživelih odpornih celic | | – |
N_\text{obč} | število preživelih občutljivih celic | | – |
p | delež odpornih v tej generaciji | | – |
p' | delež odpornih v naslednji generaciji | p' = \dfrac{p \cdot w_R}{p \cdot w_R + (1 - p) \cdot w_S} | – |
t_\text{ref} | znani čas razcepa za referenčni par | | milijon let |
d | genetska razdalja med vrstama | | – | število razlik v zaporedju
d_\text{ref} | genetska razdalja referenčnega para | | – |
:::
