---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Okrogle oblike so povsod: kolo, kovanec, pladenj, ura, krožnik, pokrov na loncu, vrtiljak na igrišču. Že znaš narisati kvadrat in pravokotnik, krog pa je drugačen: nima oglišč in nima ravnih stranic. Kako torej natančno povemo, kaj je krog? In kako ga narišemo, da bo res okrogel, ne samo »približno okrogel«?

Odgovor je preprost: vse točke na robu kroga so enako daleč od ene same točke, **središča**. Na tej ideji temeljita šestilo in kolo. Če bi bila kolesa narejena drugače, bi se vozila tresla. V tej lekciji se naučiš poimenovati dele kroga in krožnice (**središče, polmer, premer, tetiva**), jih med seboj povezati in jih uporabiti pri računanju z dolžinami. Potrebovali jih boš pri konstrukcijah in pri vsem, kar vsebuje okrogle oblike.

## Razlaga

**1. Krožnica.** Na list zapičimo iglo šestila, svinčnik pa zavrtimo okrog nje, tako da se razmik med iglo in svinčnikom ne spremeni. Nastane črta, na kateri so vse točke enako oddaljene od točke, kjer je igla. Takšni črti pravimo **krožnica**.

> **Krožnica** je množica vseh točk v ravnini, ki so od dane točke $S$ enako oddaljene. Točka $S$ je **središče** krožnice, razdalja $r$ je **polmer**.

Krožnico s središčem $S$ in polmerom $r$ zapišemo $k(S, r)$. Na primer $k(S, 3\,\text{cm})$ je krožnica s središčem $S$ in polmerom $3\,\text{cm}$.

**2. Krog.** Krožnica je samo črta (rob). Če ji dodamo še vse točke znotraj nje, dobimo **krog**. Krog je torej ploskev, krožnica pa njen rob. Ploščatemu kolutu iz kartona rečemo krog, njegovemu robu krožnica.

**3. Polmer.** **Polmer** je daljica, ki povezuje središče s točko na krožnici (njeno dolžino prav tako imenujemo polmer). Vsi polmeri iste krožnice so enako dolgi. Dolžino polmera označimo z $r$. Če je $A$ točka na krožnici, je $|SA| = r$.

**4. Tetiva in premer.** **Tetiva** je daljica, ki povezuje dve točki na krožnici. **Premer** je tetiva, ki poteka skozi središče. Njegovo dolžino označimo z $d$. Premer je sestavljen iz dveh polmerov, zato velja:

$$d = 2r \qquad r = \frac{d}{2}$$

Premer je ob tem **najdaljša tetiva** v krogu. Vsaka druga tetiva, ki ne gre skozi središče, je krajša od premera.

| Pojem | Opis | Oznaka |
|---|---|---|
| središče | točka, enako oddaljena od vseh točk krožnice | $S$ |
| polmer | daljica od središča do točke na krožnici | $r$ |
| tetiva | daljica med dvema točkama na krožnici | npr. $AB$ |
| premer | tetiva skozi središče, $d = 2r$ | $d$ |

Dve točki na krožnici razdelita krožnico na dva dela, ki ju imenujemo **krožna loka**.

**5. Lega točke glede na krožnico.** Točko $T$ primerjamo s krožnico $k(S, r)$ tako, da izmerimo razdaljo $|ST|$ in jo primerjamo s polmerom:

| Razdalja | Lega točke $T$ |
|---|---|
| $\lvert ST\rvert < r$ | v notranjosti kroga |
| $\lvert ST\rvert = r$ | na krožnici |
| $\lvert ST\rvert > r$ | zunaj kroga |

**6. Risanje s šestilom.** Za krožnico $k(S, 3\,\text{cm})$ razmik med iglo in svinčnikom nastavimo na polmer $3\,\text{cm}$ (z ravnilom). Iglo zapičimo v točko $S$ in svinčnik zavrtimo okrog igle. Če poznamo premer, najprej izračunamo polmer, saj šestilo nastavimo na **polmer**, ne na premer.

## Rešeni primeri

### Primer 1 (lažji)

Polmer krožnice meri $4{,}5\,\text{cm}$. Kolikšen je njen premer?

**Podatki:** $r = 4{,}5\,\text{cm}$
**Iščemo:** premer $d$

:::formula
$d = 2r$
:::

**Rešitev:**

1. Vstavimo polmer: $d = 2 \cdot 4{,}5\,\text{cm} = 9\,\text{cm}$.
2. Preizkus: polovica premera je $9\,\text{cm} : 2 = 4{,}5\,\text{cm}$, kar je res polmer.
3. Odgovor: premer krožnice je $9\,\text{cm}$.

### Primer 2 (srednji)

Okrogla miza ima premer $1{,}2\,\text{m}$. Kolikšen je njen polmer v centimetrih? Kolikšna je dolžina najdaljše tetive, ki povezuje dve točki na robu mize?

**Podatki:** $d = 1{,}2\,\text{m}$
**Iščemo:** polmer $r$ v $\text{cm}$ in dolžino najdaljše tetive

:::formula
$1\,\text{m} = 100\,\text{cm}$; $r = \dfrac{d}{2}$; najdaljša tetiva je premer
:::

**Rešitev:**

1. Pretvorimo enote: $1{,}2\,\text{m} = 120\,\text{cm}$ (množimo s $100$).
2. Polmer: $r = \dfrac{120\,\text{cm}}{2} = 60\,\text{cm}$.
3. Najdaljša tetiva je premer, torej meri $120\,\text{cm}$ (to je $1{,}2\,\text{m}$).
4. Preizkus: $2 \cdot 60\,\text{cm} = 120\,\text{cm}$.
5. Odgovor: polmer mize je $60\,\text{cm}$, najdaljša tetiva meri $120\,\text{cm}$.

### Primer 3 (težji)

Krožnica $k$ ima premer $10\,\text{cm}$. Točka $A$ je od središča $S$ oddaljena $3{,}2\,\text{cm}$, točka $B$ je od njega oddaljena $5\,\text{cm}$, točka $C$ pa $6{,}4\,\text{cm}$. Kje leži vsaka točka glede na krožnico? Ali ima ta krog lahko tetivo dolžine $10{,}4\,\text{cm}$?

**Podatki:** $d = 10\,\text{cm}$, $|SA| = 3{,}2\,\text{cm}$, $|SB| = 5\,\text{cm}$, $|SC| = 6{,}4\,\text{cm}$, tetiva dolžine $10{,}4\,\text{cm}$ (vprašanje, ali obstaja)
**Iščemo:** lego točk $A$, $B$, $C$ in ali tetiva dolžine $10{,}4\,\text{cm}$ obstaja

:::formula
$r = \dfrac{d}{2}$; primerjava $\lvert ST\rvert$ z $r$ (manj: znotraj, enako: na krožnici, več: zunaj); vsaka tetiva je $\le d$
:::

**Rešitev:**

1. Polmer: $r = \dfrac{10\,\text{cm}}{2} = 5\,\text{cm}$.
2. Točka $A$: $3{,}2\,\text{cm} < 5\,\text{cm}$, zato leži v notranjosti kroga.
3. Točka $B$: $5\,\text{cm} = 5\,\text{cm}$, zato leži na krožnici.
4. Točka $C$: $6{,}4\,\text{cm} > 5\,\text{cm}$, zato leži zunaj kroga.
5. Najdaljša tetiva je premer, ki meri $10\,\text{cm}$. Ker je $10{,}4\,\text{cm} > 10\,\text{cm}$, tako dolga tetiva ne obstaja.
6. Odgovor: $A$ je v krogu, $B$ na krožnici, $C$ zunaj kroga; tetive dolžine $10{,}4\,\text{cm}$ ni, ker je premer najdaljša tetiva in meri le $10\,\text{cm}$.

## Pogoste napake

- **Mešanje kroga in krožnice.** Razlog: v vsakdanjem govoru obe besedi uporabljamo za »okroglo stvar«. Pravilno: krožnica je samo črta (rob), krog je rob skupaj z notranjostjo. Točka znotraj kroga ni na krožnici.
- **Zamenjava polmera in premera.** Razlog: obe daljici sta pri krožnici, zato ju zlahka zamenjaš. Pravilno: premer je dvakrat daljši od polmera, $d = 2r$. Če poznaš premer, polmer dobiš z deljenjem z $2$, če poznaš polmer, premer dobiš z množenjem z $2$. Šestilo vedno nastavi na polmer.
- **»Vsaka tetiva je premer.«** Razlog: tetiva in premer sta obe daljici med točkama na krožnici. Pravilno: premer je samo tista tetiva, ki gre skozi središče. Vsaka druga tetiva je krajša od premera.
- **»Polmer je daljica od roba do roba.«** Razlog: pogled ti ostane na robu, središče pa spregledaš. Pravilno: polmer se vedno začne v središču in konča na krožnici. Daljica od roba do roba je tetiva, in samo če gre skozi središče, je premer.
- **Premikanje igle med risanjem.** Razlog: igla se zmuzne ali pa šestilo popusti. Pravilno: igla ostane na mestu, razmik šestila se ne spremeni. Sicer črta ni krožnica, ker točke niso več enako oddaljene od središča.

## Povzetek

- **Krožnica** $k(S, r)$ je množica točk, ki so od središča $S$ oddaljene za polmer $r$.
- **Krog** je krožnica skupaj z notranjostjo.
- **Polmer** je daljica od središča do točke na krožnici; vsi polmeri so enako dolgi.
- **Tetiva** je daljica med dvema točkama na krožnici, **premer** je tetiva skozi središče.
- Veljata zvezi $d = 2r$ in $r = \dfrac{d}{2}$.
- Premer je najdaljša tetiva.
- Lega točke $T$: $\lvert ST\rvert < r$ v krogu, $\lvert ST\rvert = r$ na krožnici, $\lvert ST\rvert > r$ zunaj kroga.
- Šestilo nastavimo na polmer.

## Drugače: Na sliki

Predstavljaj si krožnico, narisano s šestilom, z majhno piko v sredini. Pika je središče $S$. Na robu označi tri točke: $A$ (zgoraj), $B$ (spodaj, ravno nasproti $A$) in $C$ (desno).

| Kaj narišeš | Kaj dobiš | Kako se imenuje |
|---|---|---|
| črta od pike v sredini do $C$ | kratka daljica | polmer $SC$ |
| črta od $A$ do $B$ skozi piko | najdaljša daljica v krogu | premer $AB$ |
| črta od $A$ do $C$ mimo pike | krajša daljica kot premer | tetiva $AC$ |
| celoten rob | zaključena črta | krožnica |
| rob in vse znotraj | obarvana ploskev | krog |

Če v krog narišeš še več polmerov, se zvezdasto razpršijo od središča in so vsi enako dolgi, kot špice na kolesu. Premer vedno razreže krog na dva enaka dela, tetiva, ki ne gre skozi središče, pa na večji in manjši del.

## Drugače: Iz vsakdanjega življenja

- **Kolo.** Os kolesa je središče, vsaka špica je polmer, rob pnevmatike je krožnica. Kolo se vrti mirno, ker je rob povsod enako daleč od osi.
- **Ruter z dosegom.** Predstavljaj si ruter, ki ima doseg $15\,\text{m}$. Telefon na razdalji $12\,\text{m}$ je v krogu dosega, na $15\,\text{m}$ je na robu, na $20\,\text{m}$ pa zunaj. To je natanko lega točke glede na krožnico.
- **Koza na vrvi.** Koza je privezana na količek z vrvjo dolžine $3\,\text{m}$. Pase lahko na krogu s polmerom $3\,\text{m}$, najdlje pa seže do krožnice.
- **Pica ali torta.** Rez čez sredino je premer, rez, ki sredine ne zadene, pa tetiva. Premer je vedno daljši od katerega koli drugega reza.
- **Vrtiljak.** Sedež na robu je na krožnici, sedež bliže sredini je v notranjosti kroga. Oba krožita okoli iste osi, a sedež na robu prepotuje daljšo pot.

## Drugače: Korak za korakom s številkami

**Naloga: nariši krožnico $k(S, 3\,\text{cm})$ in vanjo dele.**

1. Z ravnilom nastavi šestilo na razmik $3\,\text{cm}$.
2. Iglo zapiči v točko $S$ in zavrti svinčnik. Nastane krožnica s polmerom $3\,\text{cm}$.
3. Izberi točko $A$ na krožnici. Nariši polmer $SA$ in izmeri: $\lvert SA\rvert = 3\,\text{cm}$.
4. Podaljšaj polmer $AS$ čez središče, dokler ne zadene krožnice v točki $B$. Daljica $AB$ je premer, njegova dolžina je $d = 2 \cdot 3\,\text{cm} = 6\,\text{cm}$. Preveri z ravnilom.
5. Izberi tretjo točko $C$ na krožnici in nariši tetivo $AC$. Izmeri jo: njena dolžina je vedno med $0\,\text{cm}$ in $6\,\text{cm}$ (premer je najdaljša).
6. Označi točko $T$ v razdalji $2\,\text{cm}$ od $S$: $2\,\text{cm} < 3\,\text{cm}$, zato je v krogu. Točka $U$ v razdalji $4\,\text{cm}$ je zunaj kroga, ker velja $4\,\text{cm} > 3\,\text{cm}$.

**Če je podan premer:** pri $d = 8\,\text{cm}$ je $r = 8\,\text{cm} : 2 = 4\,\text{cm}$, šestilo nastaviš na $4\,\text{cm}$.

## Drugače: Bolj natančno

**Krožnica kot množica točk.** Strogo zapišemo: krožnica je množica $k(S, r) = \{T : \lvert ST\rvert = r\}$, krog pa $\{T : \lvert ST\rvert \le r\}$, pri čemer je $r > 0$. Razlika je le v znaku: pri krožnici »natanko enako«, pri krogu »manj ali enako«.

**Ena beseda, dva pomena.** Besede *polmer*, *premer* in *tetiva* uporabljamo za daljico in tudi za njeno dolžino. Pri $d = 2r$ govorimo o dolžinah, pri zapisu »daljica $SA$ je polmer« o daljici.

**Zakaj je premer najdaljša tetiva?** Naj bosta $A$ in $B$ točki na krožnici. Pot od $A$ do $B$ mimo središča $S$ je dolga $\lvert AS\rvert + \lvert SB\rvert = r + r = 2r$. Neposredna daljica $AB$ je najkrajša pot med točkama in zato ni daljša od te poti. Torej je $\lvert AB\rvert \le 2r$, enakost pa velja le, če leži $S$ na daljici $AB$, torej če je tetiva premer.

**Povezava s kotom.** Polmera, ki ležita na istem premeru, se razhajata v nasprotnih smereh in tvorita iztegnjeni kot $180^\circ$. Tako se temi krog in kot povežeta.

**Obseg in ploščina.** Koliko meri rob kroga (obseg) in koliko je velik krog (ploščina), boš spoznal v višjih razredih. Za to potrebuješ polmer in premer, ki ju zdaj obvladaš.

## Preveri se

? Premer krožnice meri $14\,\text{cm}$. Kolikšen je njen polmer?
- $28\,\text{cm}$
- $14\,\text{cm}$
+ $7\,\text{cm}$
> Polmer je polovica premera: $r = 14\,\text{cm} : 2 = 7\,\text{cm}$. Odgovor $28\,\text{cm}$ dobiš, če premer podvojiš namesto razpoloviš.

? Katera daljica je med vsemi tetivami istega kroga vedno najdaljša?
- polmer
+ premer
- tetiva, ki ne gre skozi središče
> Premer je tetiva, ki gre skozi središče, in meri $2r$. Vsaka druga tetiva je krajša, polmer pa sploh ni tetiva, saj ima eno krajišče v središču.

? Krožnica ima polmer $6\,\text{cm}$. Točka $T$ je od središča oddaljena $6{,}5\,\text{cm}$. Kje leži?
- v notranjosti kroga
- na krožnici
+ zunaj kroga
> Ker je $6{,}5\,\text{cm} > 6\,\text{cm}$, je točka od središča dlje kot polmer, zato leži zunaj kroga.

? Katera trditev je pravilna?
- Vsaka tetiva je premer.
+ Krožnica je rob, krog pa vsebuje tudi notranjost.
- Središče krožnice leži na krožnici.
> Krožnica je samo črta, krog je krožnica skupaj z notranjostjo. Središče je v notranjosti kroga, ne na krožnici, in samo tetiva skozi središče je premer.
