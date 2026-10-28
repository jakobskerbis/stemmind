---
stanje: osnutek
demo: konstrukcija
avtor: AI
---

## Zakaj se tega učimo

Že znaš narisati daljico z ravnilom in izmeriti kot s kotomerom. Merjenje pa ima težavo: vedno je malo nenatančno. Včasih tudi sploh ne vemo, kaj bi merili. Kako na primer najdeš sredino deske, ne da bi poznal njeno dolžino? Kako zakoličiš vogal vrta, da bo res pravokoten?

Odgovor je **konstrukcija**: risanje samo s šestilom in ravnilom, brez merjenja. Šestilo ti pomaga, da dobiš enake razdalje, ravnilo pa, da potegneš ravno črto. Tako dobiš zelo natančne rezultate, in to z zelo malo orodja. Konstrukcije so že več kot 2000 let osnova geometrije. Uporabljajo jih arhitekti, mizarji in inženirji. Pri pouku jih boš potreboval še pri risanju trikotnikov in drugih likov.

V tej lekciji se naučiš tri osnovne konstrukcije: **simetralo daljice**, **pravokotnico** in **simetralo kota**. Poskusi jih sproti narisati na list papirja.

## Razlaga

**1. Orodje in pravila.** Pri konstrukciji uporabljaš:

- **šestilo**, s katerim narišeš krožni lok z izbranim središčem in polmerom,
- **ravnilo** (brez merjenja, samo za risanje premic),
- **svinčnik**, ki ga ostriš, da so črte tanke.

Pravila: razpona šestila med enim korakom ne spreminjaj, pomožne loke in črte pusti na listu (ne briši jih), končni rezultat pa potegni močneje, da ga je lahko videti.

**2. Ključna zamisel: krožni lok.** Že veš, da so vse točke krožnice enako oddaljene od njenega središča. Torej so vse točke loka s središčem $A$ in polmerom $r$ oddaljene od točke $A$ za $r$. Če narišemo dva loka z istim polmerom, enega s središčem $A$ in drugega s središčem $B$, je vsako njuno presečišče enako oddaljeno od $A$ in od $B$. Na tem temelji skoraj vsaka konstrukcija.

**3. Simetrala daljice.** Daljica $AB$ ima krajišči $A$ in $B$. Njeno sredino imenujemo **razpolovišče**. **Simetrala daljice** je premica, ki poteka skozi razpolovišče in je pravokotna na daljico.

Postopek:

1. Nastavi šestilo na polmer $r$, ki je **večji od polovice dolžine daljice** $AB$.
2. Zapiči šestilo v $A$ in nariši lok nad daljico in pod njo.
3. Brez spremembe razpona zapiči šestilo v $B$ in nariši lok, ki prvega seka v dveh točkah.
4. Presečišči povežeš z ravnilom. Dobljena premica je simetrala daljice.

Premica seka daljico v razpolovišču. Razpolovišče je od vsakega krajišča oddaljeno za polovico dolžine: $\dfrac{|AB|}{2}$. Pomembna lastnost: **vsaka točka simetrale je enako oddaljena od $A$ in $B$**.

Primeri dolžin:

| $\lvert AB\rvert$ | Razpolovišče je od $A$ oddaljeno | Polmer šestila mora biti |
|---|---|---|
| $6\,\text{cm}$ | $3\,\text{cm}$ | večji od $3\,\text{cm}$ |
| $7\,\text{cm}$ | $3{,}5\,\text{cm}$ | večji od $3{,}5\,\text{cm}$ |
| $10\,\text{cm}$ | $5\,\text{cm}$ | večji od $5\,\text{cm}$ |

**4. Pravokotnica.** Dve premici sta **pravokotni**, če se sekata pod kotom $90^\circ$. Zapišemo $a \perp b$. Pravokotnico skozi dano točko $T$ na dano premico $p$ konstruiramo v dveh primerih.

*Točka $T$ leži na premici $p$.*

1. Zapiči šestilo v $T$ in nariši lok, ki premico $p$ seka na obeh straneh točke $T$, v točkah $A$ in $B$. Točka $T$ je zdaj razpolovišče daljice $AB$.
2. Konstruiraj simetralo daljice $AB$. Ta poteka skozi $T$ in je iskana pravokotnica.

*Točka $T$ leži zunaj premice $p$.*

1. Zapiči šestilo v $T$ in nariši lok z dovolj velikim polmerom, da seka premico $p$ v dveh točkah $A$ in $B$.
2. Konstruiraj simetralo daljice $AB$. Ker je $T$ enako oddaljena od $A$ in $B$, leži simetrala skozi $T$ in je pravokotna na $p$.

Pravokotnica je torej le poseben primer simetrale daljice. Dolžini daljice od točke $T$ do pravokotne črte na $p$ pravimo **razdalja točke od premice**. To je najkrajša pot od točke do premice.

**5. Simetrala kota.** Kot ima **vrh** $V$ in dva **kraka** (poltraka iz vrha). **Simetrala kota** je poltrak iz vrha, ki kot razdeli na dva enaka dela.

Postopek:

1. Zapiči šestilo v vrh $V$ in nariši lok, ki seka oba kraka, v točkah $A$ in $B$.
2. Zapiči šestilo v $A$ in nariši lok znotraj kota. Polmer naj bo večji od polovice razdalje $AB$.
3. Brez spremembe razpona zapiči šestilo v $B$ in nariši lok, ki prvega seka v točki $S$.
4. Potegni poltrak iz $V$ skozi $S$. To je simetrala kota.

Če je kot enak $\alpha$, je vsak od obeh delov enak $\dfrac{\alpha}{2}$. Točke simetrale so enako oddaljene od obeh krakov.

| Kot $\alpha$ | $70^\circ$ | $90^\circ$ | $120^\circ$ |
|---|---|---|---|
| vsak del $\dfrac{\alpha}{2}$ | $35^\circ$ | $45^\circ$ | $60^\circ$ |

**6. Preverjanje.** Rezultat lahko preveriš z merjenjem. Pri simetrali daljice izmeri obe polovici, pri pravokotnici uporabi kotomer ali geotrikotnik, pri simetrali kota izmeri oba dela kota. Pri natančni konstrukciji se bosta rezultata razlikovala le za malo. Korake lahko po vrsti prikažeš tudi v interaktivni simulaciji spodaj.

## Rešeni primeri

### Primer 1 (lažji)

Dana je daljica $AB$ dolžine $7\,\text{cm}$. Konstruiraj njeno simetralo. Kolikšna je razdalja razpolovišča od krajišča $A$ in kakšen polmer šestila izbereš?

**Podatki:** $\lvert AB\rvert = 7\,\text{cm}$
**Iščemo:** razdaljo razpolovišča od $A$ in primeren polmer šestila $r$

:::formula
Razpolovišče: $\dfrac{\lvert AB\rvert}{2}$. Polmer šestila: $r > \dfrac{\lvert AB\rvert}{2}$.
:::

**Rešitev:**

1. Razdalja razpolovišča od krajišča: $7\,\text{cm} : 2 = 3{,}5\,\text{cm}$.
2. Polmer mora biti večji od $3{,}5\,\text{cm}$. Izberemo na primer $r = 5\,\text{cm}$.
3. Zapičimo šestilo v $A$ in narišemo lok nad daljico in pod njo s polmerom $5\,\text{cm}$. Enako naredimo v $B$ z istim polmerom. Loka se sekata v dveh točkah.
4. Presečišči povežemo z ravnilom. To je simetrala daljice.
5. Odgovor: razpolovišče je od $A$ oddaljeno $3{,}5\,\text{cm}$, polmer šestila je lahko $5\,\text{cm}$ (vsak polmer, večji od $3{,}5\,\text{cm}$), simetrala poteka skozi razpolovišče in je pravokotna na $AB$.

### Primer 2 (srednji)

Točka $T$ je od premice $p$ oddaljena $4\,\text{cm}$. Konstruiraj pravokotnico skozi $T$ na $p$. Prvi lok s središčem $T$ nariši s polmerom $5\,\text{cm}$; premico $p$ seka v točkah $A$ in $B$. Pri simetrali daljice $AB$ tudi uporabi polmer $5\,\text{cm}$. Loka se sekata v točki $T$ in še v drugi točki $T'$. Kje leži $T'$ in kolikšna je razdalja $\lvert TT'\rvert$?

**Podatki:** razdalja $T$ od $p$ je $4\,\text{cm}$; polmer prvega loka (središče $T$) je $5\,\text{cm}$; polmer lokov s središčema $A$ in $B$ je $5\,\text{cm}$
**Iščemo:** pravokotnico skozi $T$, položaj točke $T'$ in dolžino $\lvert TT'\rvert$

:::formula
Pravokotnica skozi $T$ je simetrala daljice $AB$, kjer sta $A$, $B$ presečišči loka s središčem $T$ s premico $p$.
:::

**Rešitev:**

1. Zapičimo šestilo v $T$ in z razponom $5\,\text{cm}$ narišemo lok, ki seka $p$ v $A$ in $B$. Točki sta od $T$ oddaljeni po $5\,\text{cm}$, točka $T$ je torej enako oddaljena od obeh.
2. Zapičimo šestilo v $A$, nastavimo $5\,\text{cm}$ in narišemo lok. Isti razpon uporabimo v $B$.
3. Loka s polmerom $5\,\text{cm}$ se sekata v točki $T$, saj je $T$ od $A$ in od $B$ oddaljena ravno $5\,\text{cm}$. Drugo presečišče $T'$ leži na drugi strani premice $p$.
4. Premica $TT'$ je simetrala daljice $AB$, zato je pravokotna na $p$. Točka $T'$ je od $p$ oddaljena prav tako $4\,\text{cm}$ kot $T$.
5. Odgovor: pravokotnica je premica $TT'$; točka $T'$ leži na drugi strani premice $p$, $4\,\text{cm}$ od nje. Velja $\lvert TT'\rvert = 4\,\text{cm} + 4\,\text{cm} = 8\,\text{cm}$.

### Primer 3 (težji)

Konstruiraj kot $135^\circ$, ne da bi uporabil kotomer. Namig: iztegnjeni kot (kot ob premici) meri $180^\circ$, pravokotnica pa tvori pravi kot.

**Podatki:** iskani kot meri $135^\circ$; dovoljeno orodje je samo šestilo in ravnilo; iztegnjeni kot je $180^\circ$
**Iščemo:** postopek konstrukcije kota $135^\circ$

:::formula
$90^\circ : 2 = 45^\circ$ in $180^\circ - 45^\circ = 135^\circ$
:::

**Rešitev:**

1. Narišemo premico $p$ in na njej točko $V$. Konstruiramo pravokotnico na $p$ skozi $V$. Dobimo kot $90^\circ$ med premico in pravokotnico.
2. Pravi kot razpolovimo s konstrukcijo simetrale kota. Vsak del meri $90^\circ : 2 = 45^\circ$.
3. Kot med eno polovico premice $p$ in simetralo je $45^\circ$. Kot na drugi strani je $180^\circ - 45^\circ = 135^\circ$.
4. Preverimo z drugim računom: kot $135^\circ$ je sestavljen iz pravega kota in polovice pravega kota, $90^\circ + 45^\circ = 135^\circ$.
5. Odgovor: kot $135^\circ$ je kot med simetralo pravega kota in tistim krakom premice $p$, ki leži na drugi strani pravokotnice; z isto konstrukcijo dobiš tudi kot $45^\circ$.

## Pogoste napake

- **Razpon šestila se med korakom spremeni.** Če pri loku v $A$ uporabiš en polmer, pri loku v $B$ pa drugega, presečišči nista enako oddaljeni od $A$ in $B$ in premica ni simetrala. Pravilno: polmer nastavi enkrat, pri lokih v $A$ in $B$ ga ne spreminjaj, šestilo pa drži za ročaj in ne za krake.
- **Polmer je premajhen.** Če je polmer manjši ali enak polovici daljice $AB$, se loka ne sekata. Pravilno: polmer vedno izberi večji od $\dfrac{\lvert AB\rvert}{2}$. Pri daljici $6\,\text{cm}$ vzemi na primer $4\,\text{cm}$.
- **Zamenjava simetrale in pravokotnice skozi krajišče.** Simetrala daljice gre skozi *razpolovišče*, ne skozi krajišče. Pravilno: preveri, da sta obe polovici daljice enako dolgi, vsaka $\dfrac{\lvert AB\rvert}{2}$, in da je kot $90^\circ$.
- **Središče loka pri simetrali kota.** Prvi lok mora imeti središče v *vrhu* kota $V$, ne v katerem koli drugem krajišču. Pravilno: najprej zapiči šestilo v $V$, šele nato iz točk $A$ in $B$ na krakih nadaljuj.
- **Brisanje pomožnih lokov.** Če loke pobrišeš, ne moreš preveriti, ali je konstrukcija prava. Pravilno: pusti jih na papirju, končni rezultat pa poudari z močnejšo črto.

## Povzetek

- Konstrukcija je risanje s šestilom in ravnilom, brez merjenja. Razpona šestila med korakom ne spreminjaj.
- **Simetrala daljice** $AB$: loka z enakim polmerom $r > \dfrac{\lvert AB\rvert}{2}$ okrog $A$ in $B$, presečišči povežeš. Poteka skozi razpolovišče in je pravokotna na $AB$.
- Točke simetrale daljice so enako oddaljene od krajišč.
- **Pravokotnica** skozi točko $T$: lok okrog $T$ na premici $p$ izreže $A$ in $B$, nato simetrala daljice $AB$. Velja $a \perp b$, kot je $90^\circ$.
- **Simetrala kota** $\alpha$: lok okrog vrha $V$, nato loka okrog presečišč s kraki. Vsak del je $\dfrac{\alpha}{2}$.
- Ko razpolovimo pravi kot, dobimo kot $45^\circ$.

## Drugače: Na sliki

Predstavljaj si list papirja in opazuj, kaj se zgodi po korakih. Uporabi lahko tudi interaktivno simulacijo spodaj.

**Simetrala daljice.** Na vodoravni črti sta točki $A$ levo in $B$ desno. Okoli $A$ nastane lok, ki izgleda kot oklepaj »)«, saj se vije proti desni, okoli $B$ pa lok, ki izgleda kot »(«. Ob njunem stiku nastaneta dve presečišči, ena nad daljico in ena pod njo. Premica skozi obe je navpična in seka daljico točno na sredini.

**Simetrala kota.** Narisan kot je kot odprta škarje. Lok okoli vrha preseka oba kraka. Iz teh presečišč se dva manjša loka srečata v točki, ki leži točno »v sredi« med kraka. Poltrak skozi to točko škarje razdeli na dva enaka dela.

**Pravokotnica.** Ko je točka $T$ nad premico, lok izreže dve točki na premici, levo in desno od mesta, kjer bo stala pravokotnica. Navpična črta skozi $T$ je potem simetrala teh dveh točk, zato stoji pod pravim kotom.

Opazuj, da je v vseh treh primerih slika **simetrična**: leva stran izgleda kot zrcalna slika desne.

## Drugače: Iz vsakdanjega življenja

Konstrukcije lahko narediš tudi s prepogibanjem papirja.

- **Simetrala daljice:** na list nariši daljico $AB$ in papir prepogni tako, da točka $A$ pade na točko $B$. Pregib je simetrala. Poteka točno po sredini in tvori pravi kot z daljico.
- **Simetrala kota:** prepogni list tako, da en krak kota pade na drugega. Pregib poteka skozi vrh kota in ga razpolovi.
- **Pravokotnica:** prepogni list, nato pregibni rob položi nase in ponovno prepogni. Dva pregiba tvorita pravi kot, kot ga vidiš v kotu lista A4.

Tudi v življenju se te ideje pojavljajo. Dva prijatelja živita v krajih $A$ in $B$ in se želita dobiti na kraju, ki je enako daleč od obeh. Taka mesta ležijo na simetrali daljice $AB$. Mizar najde sredino deske tako, da iz vsakega konca nariše lok z istim razponom. Gradbinec uporabi pravokotnico, da zakoliči vogal.

Pri tem bodi pozoren: enaka razdalja ne pomeni, da je točka na sredini daljice. Na simetrali so tudi točke daleč od daljice. Vse so enako oddaljene od $A$ in $B$, razpolovišče pa je le ena izmed njih.

## Drugače: Korak za korakom s številkami

Vzemimo tri konkretne primere.

**A. Simetrala daljice dolžine $8\,\text{cm}$.**

1. Polovica: $8\,\text{cm} : 2 = 4\,\text{cm}$.
2. Polmer mora biti večji od $4\,\text{cm}$, izbereš $5\,\text{cm}$.
3. Preveri: $5\,\text{cm} > 4\,\text{cm}$, loka se bosta sekala.
4. Nariši loka okoli $A$ in $B$ in povežeš presečišči. Razpolovišče je od $A$ in od $B$ oddaljeno $4\,\text{cm}$. Skupaj $4\,\text{cm} + 4\,\text{cm} = 8\,\text{cm}$.

**B. Simetrala kota $50^\circ$.**

1. Nariši kot $50^\circ$ z vrhom $V$.
2. Lok okoli $V$ preseka kraka v $A$ in $B$.
3. Loka okoli $A$ in $B$ se srečata v točki $S$.
4. Poltrak $VS$ razdeli kot na dva dela po $50^\circ : 2 = 25^\circ$.
5. Preveri: $25^\circ + 25^\circ = 50^\circ$.

**C. Pravokotnica skozi točko na premici.**

1. Točka $T$ leži na $p$. Lok s polmerom $3\,\text{cm}$ izreže $A$ in $B$, kjer sta $\lvert TA\rvert = \lvert TB\rvert = 3\,\text{cm}$.
2. Daljica $AB$ je dolga $3\,\text{cm} + 3\,\text{cm} = 6\,\text{cm}$.
3. Simetrala daljice $AB$ gre skozi razpolovišče $T$ in tvori kot $90^\circ$ s premico $p$.

## Drugače: Bolj natančno

Zakaj konstrukcije res delujejo? Pri simetrali daljice narišemo dva loka z istim polmerom $r$. Njuno presečišče $C$ je od $A$ oddaljeno za $r$ in od $B$ prav tako za $r$. Enako velja za drugo presečišče $D$. Točki $C$ in $D$ sta torej obe enako oddaljeni od $A$ in $B$. Štirikotnik $ACBD$ ima vse štiri stranice enake $r$ in diagonali $AB$ in $CD$ se sekata pod pravim kotom ter se razpolavljata. Zato je premica $CD$ res simetrala daljice $AB$.

**Definicija z množico točk.** Simetralo daljice $AB$ lahko natančno definiramo tudi takole: to je množica vseh točk v ravnini, ki so od $A$ in $B$ enako oddaljene. Simetralo kota pa je množica vseh točk, ki so enako oddaljene od obeh krakov kota.

**Posebna pozornost za oznake.** Dolžino daljice zapišemo z navpičnicama $\lvert AB\rvert$ (lahko tudi $\overline{AB}$), samo oznaka $AB$ pomeni daljico kot lik. Kot zapišemo kot $\angle AVB$ ali z grško črko, npr. $\alpha$.

**Uporaba pri krogu.** Ker velja, da je središče krožnice enako oddaljeno od vsake točke na njej, leži središče na simetrali vsake tetive, to je daljice med dvema točkama krožnice. Če narišeš simetrali dveh različnih tetiv, se sekata natanko v središču. Tako lahko najdeš središče krožnice, ki je ne poznaš.

## Preveri se

? Daljica $AB$ je dolga $9\,\text{cm}$. Kateri polmer šestila je primeren za konstrukcijo njene simetrale?
- $3\,\text{cm}$
- $4\,\text{cm}$
+ $5\,\text{cm}$
> Polmer mora biti večji od polovice dolžine: $9\,\text{cm} : 2 = 4{,}5\,\text{cm}$. Samo $5\,\text{cm}$ je večji od $4{,}5\,\text{cm}$; pri $3\,\text{cm}$ in $4\,\text{cm}$ se loka ne sekata.

? Kot meri $64^\circ$. Kolikšen je vsak del, ko kot razpolovimo s simetralo?
- $16^\circ$
+ $32^\circ$
- $128^\circ$
> Vsak del je polovica kota: $64^\circ : 2 = 32^\circ$. Preveri: $32^\circ + 32^\circ = 64^\circ$.

? Katera trditev drži za simetralo daljice $AB$?
+ Poteka skozi razpolovišče daljice in je pravokotna nanjo.
- Poteka skozi krajišče $A$ in je vzporedna z daljico.
- Je enako dolga kot daljica in jo razpolovi pod kotom $45^\circ$.
> Simetrala daljice je premica skozi razpolovišče, ki oklepa z daljico kot $90^\circ$. Točke na njej so enako oddaljene od $A$ in $B$.

? Kako konstruiramo pravokotnico na premico $p$ skozi točko $T$ zunaj premice?
- Skozi $T$ potegnemo premico, ki seka $p$ pod poljubnim kotom.
+ Z lokom s središčem $T$ izrežemo točki $A$ in $B$ na $p$, nato konstruiramo simetralo daljice $AB$.
- Razpolovimo kot med premico $p$ in daljico iz $T$ do poljubne točke na $p$.
> Točka $T$ je po konstrukciji enako oddaljena od $A$ in $B$, zato leži na simetrali daljice $AB$, ta pa je pravokotna na $p$.
