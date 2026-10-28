---
stanje: osnutek
demo: simetrija
avtor: AI
---

## Zakaj se tega učimo

Poglej se v ogledalo. Tvoja leva roka v ogledalu je videti kot desna, vendar je slika enako velika kot ti in je enako daleč za ogledalom, kot si ti pred njim. Ogledalo naredi točno to, čemur v matematiki pravimo **zrcaljenje**.

Simetrijo srečaš na vsakem koraku: metulj ima obe krili enaki, črka A je na levi enaka kot na desni, odsev dreves v mirnem jezeru je skoraj kot prava krošnja. Arhitekti, oblikovalci in obrtniki jo uporabljajo, da so stvari lepe in uravnotežene. Tudi v naravi je pogosta.

V tej lekciji se naučiš, kako točko in lik **zrcalimo čez premico**, in kako prepoznamo **simetrične like**. Pri tem boš uporabljal tisto, kar že znaš iz konstrukcij: pravokotnico in simetralo daljice.

## Razlaga

**1. Zrcaljenje točke čez premico.** Izberemo premico $o$, ki ji rečemo **os zrcaljenja** (ogledalo). Točki $A$ priredimo točko $A'$ (beremo »A črtica«), imenujemo jo **zrcalna slika** točke $A$, tako da je $o$ **simetrala daljice** $AA'$. To pomeni:

- daljica $AA'$ je **pravokotna** na os $o$,
- os $o$ razpolovi daljico $AA'$, zato sta $A$ in $A'$ **enako oddaljeni od osi**, vsaka na svoji strani.

Če točka $A$ leži na osi, se zrcali sama vase: $A' = A$.

Če je razdalja točke od osi enaka $d$, je razdalja med točko in njeno sliko enaka dvojni razdalji od osi:

$$\lvert AA'\rvert = 2d$$

**2. Kako točko zrcalimo, korak za korakom.**

1. Skozi $A$ konstruiraj pravokotnico na os $o$. Presečišče z osjo označi $F$.
2. Z ravnilom ali šestilom odmeri razdaljo $\lvert FA\rvert$.
3. Isto razdaljo nanesi od $F$ po pravokotnici na **drugo stran** osi. Dobiš točko $A'$.

Namesto merjenja lahko uporabiš šestilo: zapiči ga v $F$, razpon nastavi do točke $A$ in nariši lok na drugi strani osi. Kjer lok seka pravokotnico, je $A'$.

**3. Zrcaljenje lika.** Lik sestavljajo točke. Če ima lik oglišča, zrcalimo vsako oglišče posebej in nato slike povežemo v enakem vrstnem redu. Na primer za trikotnik $ABC$ dobimo $A'B'C'$. Najprej zrcalimo $A$ v $A'$, nato $B$ v $B'$ in $C$ v $C'$, na koncu narišemo stranice $A'B'$, $B'C'$ in $C'A'$.

**4. Kaj se pri zrcaljenju ohrani.** Zrcalna slika lika je lik, ki je enak izvirniku, torej *skladen*. Ohranijo se:

- dolžine daljic: $\lvert A'B'\rvert = \lvert AB\rvert$,
- velikosti kotov,
- obseg in ploščina lika.

Spremeni se samo **položaj** in **smer obhoda**: če oglišča $A, B, C$ izvirnika sledijo drug drugemu v smeri urnega kazalca, slika sledi v nasprotni smeri. Zato je zrcalna slika leve rokavice desna rokavica, ki je ne moremo preprosto »zasukati« v levo.

**5. Simetrični liki.** Lik je **osno simetričen** (zrcalno simetričen), če obstaja premica, ki ga zrcali nazaj vase. Tej premici pravimo **simetrijska os**. Če lik po osi prepogneš, se obe polovici natančno prekrijeta.

Lik ima lahko več simetrijskih osi, ali pa nobene:

| Lik | Število simetrijskih osi |
|---|---|
| raznostranični trikotnik (vse stranice različne) | $0$ |
| enakokraki trikotnik | $1$ |
| enakostranični trikotnik | $3$ |
| pravokotnik (ki ni kvadrat) | $2$ |
| kvadrat | $4$ |
| krog | neskončno mnogo (vsaka premica skozi središče) |

Primeri črk (pisanih brez okraskov): črka **A** ima $1$ os (navpična), črka **H** ima $2$ osi, črka **F** nima nobene.

Osi pravokotnika sta premici skozi sredini nasprotnih stranic. Diagonali pravokotnika nista osi. Osi kvadrata so ti dve ter obe diagonali.

**6. Os je lahko poljubno obrnjena.** Do zdaj smo si osi predstavljali kot navpične ali vodoravne črte. Os je lahko tudi poševna in zrcaljenje deluje enako: zmeraj merimo razdaljo *pravokotno* na os.

Zrcaljenje si oglej v interaktivni simulaciji spodaj (**Zrcaljenje čez os in središčna simetrija**): premikaj oglišča trikotnika in opazuj, kako se premikajo oglišča slike. Preklopiš lahko tudi na poševno os.

## Rešeni primeri

### Primer 1 (lažji)

Točka $A$ je od osi zrcaljenja $o$ oddaljena $3\,\text{cm}$. Kje leži njena zrcalna slika $A'$ in kolikšna je razdalja $\lvert AA'\rvert$?

**Podatki:** razdalja točke $A$ od osi $o$ je $d = 3\,\text{cm}$
**Iščemo:** položaj točke $A'$ in dolžino $\lvert AA'\rvert$

:::formula
Razdalja slike od osi je enaka razdalji izvirnika: $d' = d$. Razdalja med točko in sliko: $\lvert AA'\rvert = 2d$.
:::

**Rešitev:**

1. Točka $A'$ leži na pravokotnici skozi $A$ na os, na drugi strani osi.
2. Razdalja $A'$ od osi je enaka kot pri $A$, torej $3\,\text{cm}$.
3. $\lvert AA'\rvert = 3\,\text{cm} + 3\,\text{cm} = 6\,\text{cm}$. Z drugim računom: $2 \cdot 3\,\text{cm} = 6\,\text{cm}$.
4. Odgovor: slika $A'$ je na drugi strani osi, $3\,\text{cm}$ od nje; razdalja $\lvert AA'\rvert$ je $6\,\text{cm}$.

### Primer 2 (srednji)

Trikotnik $ABC$ leži na levi strani navpične osi $o$. Točka $A$ je od osi oddaljena $2\,\text{cm}$, točka $B$ $5\,\text{cm}$, točka $C$ $2\,\text{cm}$. Stranice merijo $\lvert AB\rvert = 3\,\text{cm}$, $\lvert AC\rvert = 4\,\text{cm}$ in $\lvert BC\rvert = 5\,\text{cm}$. Stranica $AC$ je vzporedna z osjo, stranica $AB$ je pravokotna nanjo. Trikotnik prezrcalimo čez os $o$. Kje ležijo oglišča slike $A'B'C'$ in kolikšen je obseg slike?

**Podatki:** razdalje od osi: $d_A = 2\,\text{cm}$, $d_B = 5\,\text{cm}$, $d_C = 2\,\text{cm}$; stranice $\lvert AB\rvert = 3\,\text{cm}$, $\lvert AC\rvert = 4\,\text{cm}$, $\lvert BC\rvert = 5\,\text{cm}$; $AC$ je vzporedna z osjo, $AB$ je pravokotna nanjo; os $o$ je navpična, trikotnik je na levi strani osi
**Iščemo:** razdalje oglišč slike od osi, dolžine $\lvert AA'\rvert$, $\lvert BB'\rvert$, $\lvert CC'\rvert$ in obseg trikotnika $A'B'C'$

:::formula
$d' = d$, $\lvert XX'\rvert = 2d$, $\lvert A'B'\rvert = \lvert AB\rvert$ (zrcaljenje ohranja dolžine)
:::

**Rešitev:**

1. Slike oglišč ležijo na desni strani osi, vsaka enako daleč od osi kot izvirnik: $A'$ in $C'$ po $2\,\text{cm}$, $B'$ $5\,\text{cm}$.
2. Razdalje med točko in sliko: $\lvert AA'\rvert = 2 \cdot 2\,\text{cm} = 4\,\text{cm}$, $\lvert BB'\rvert = 2 \cdot 5\,\text{cm} = 10\,\text{cm}$, $\lvert CC'\rvert = 2 \cdot 2\,\text{cm} = 4\,\text{cm}$.
3. Zrcaljenje ohranja dolžine, zato: $\lvert A'B'\rvert = 3\,\text{cm}$, $\lvert A'C'\rvert = 4\,\text{cm}$, $\lvert B'C'\rvert = 5\,\text{cm}$.
4. Obseg slike: $3\,\text{cm} + 4\,\text{cm} + 5\,\text{cm} = 12\,\text{cm}$. Obseg izvirnika je prav tako $12\,\text{cm}$.
5. Odgovor: oglišča slike so na desni strani osi, $A'$ in $C'$ po $2\,\text{cm}$ ter $B'$ $5\,\text{cm}$ od nje; $\lvert AA'\rvert = 4\,\text{cm}$, $\lvert BB'\rvert = 10\,\text{cm}$, $\lvert CC'\rvert = 4\,\text{cm}$; obseg slike je $12\,\text{cm}$.

### Primer 3 (težji)

Točka $A$ in njena zrcalna slika $A'$ sta oddaljeni $10\,\text{cm}$. Osi zrcaljenja ne vidimo. Kako jo najdemo? Kolikšna je razdalja točke $A$ od osi? Na osi leži točka $T$, ki je od $A$ oddaljena $6\,\text{cm}$. Kolikšna je razdalja $\lvert TA'\rvert$?

**Podatki:** $\lvert AA'\rvert = 10\,\text{cm}$; točka $T$ leži na osi; $\lvert TA\rvert = 6\,\text{cm}$
**Iščemo:** konstrukcijo osi, razdaljo $A$ od osi in dolžino $\lvert TA'\rvert$

:::formula
Os zrcaljenja je simetrala daljice $AA'$. Vsaka točka simetrale je enako oddaljena od $A$ in $A'$.
:::

**Rešitev:**

1. Os je simetrala daljice $AA'$. Konstruiramo jo s šestilom: polmer izberemo večji od $10\,\text{cm} : 2 = 5\,\text{cm}$, npr. $7\,\text{cm}$, narišemo loka okoli $A$ in $A'$ ter povežemo presečišči.
2. Razpolovišče daljice $AA'$ leži na osi. Razdalja točke $A$ od osi je $10\,\text{cm} : 2 = 5\,\text{cm}$ (preveri: $5\,\text{cm} + 5\,\text{cm} = 10\,\text{cm}$).
3. Točka $T$ leži na simetrali, torej je enako oddaljena od $A$ in $A'$. Zato je $\lvert TA'\rvert = \lvert TA\rvert = 6\,\text{cm}$.
4. Odgovor: os je simetrala daljice $AA'$; točka $A$ je od nje oddaljena $5\,\text{cm}$; $\lvert TA'\rvert = 6\,\text{cm}$.

## Pogoste napake

- **Razdaljo do osi merimo poševno.** Če od točke do osi merimo pod drugim kotom kot $90^\circ$, slika ne leži na pravem mestu. Pravilno: razdaljo vedno merimo vzdolž *pravokotnice* na os, ki jo najprej konstruiramo.
- **Slika ostane na isti strani osi.** Če narišeš sliko na isti strani, nisi zrcalil, ampak si lik le premaknil. Pravilno: slika leži na *drugi* strani osi, enako daleč kot izvirnik. Če točka leži na osi, ostane na mestu.
- **Mislimo, da je vsak lik simetričen.** Raznostranični trikotnik nima nobene osi. Pri pravokotniku, ki ni kvadrat, diagonali nista osi, ker se lik po diagonali ne prekrije. Pravilno: preskusi s prepogibom; polovici se morata natančno ujeti. Pravokotnik ima dve osi (skozi sredini nasprotnih stranic).
- **Napačno štetje osi.** Kvadrat ima $4$ osi, ne $2$: poleg dveh premic skozi sredine stranic sta osi tudi obe diagonali. Pravilno: preveri vse možne premice, ki gredo skozi središče lika.
- **Zrcalno sliko zamenjamo z zasukom.** Pri zrcaljenju se zamenja smer obhoda, pri zasuku pa ne. Pravilno: črka F, zrcaljena čez navpično os, je »obrnjena«, ne samo zasukana.

## Povzetek

- Zrcaljenje čez premico $o$: točki $A$ priredimo $A'$, tako da je $o$ simetrala daljice $AA'$.
- Daljica $AA'$ je pravokotna na os, $A$ in $A'$ sta enako oddaljeni od osi: $d' = d$, $\lvert AA'\rvert = 2d$.
- Točka na osi se preslika sama vase.
- Zrcalna slika lika je skladna izvirniku: ohrani dolžine, kote, obseg in ploščino. Spremeni se smer obhoda.
- Lik je osno simetričen, če ima simetrijsko os, to je premico, ki ga zrcali vase.
- Število osi: enakostranični trikotnik $3$, kvadrat $4$, pravokotnik $2$, enakokraki trikotnik $1$, raznostranični trikotnik $0$, krog neskončno.

## Drugače: Na sliki

Predstavljaj si vodoravno črto na sredini lista, to je os $o$. Nad njo je narisan trikotnik s tremi oglišči. Pod črto je njegov odsev, kot da bi gledal v mirno vodo.

Opazuj tri stvari:

- Vsako oglišče nad črto ima pod črto svojega »dvojčka«. Če ju povežeš z navpično daljico, ta seka os pod pravim kotom, sredina daljice pa leži točno na osi.
- Oglišče, ki je najvišje nad osjo, je v odsevu najgloblje pod njo.
- Če oglišče leži na črti, nima dvojčka, ker ostane na mestu.

V interaktivni simulaciji spodaj premikaš oglišča trikotnika, slika pa se ves čas premika z njimi. Poskusi povleči oglišče na os: njegova slika se mu pridruži.

Pri simetričnem liku, na primer metulju, se slika prekrije z izvirnikom: leva polovica je odsev desne.

## Drugače: Iz vsakdanjega življenja

Simetrijo preskusiš kar s papirjem.

- **Prepogib:** list prepogni na pol, nariši polovico srca ali metulja in izreži. Ko razgrneš, dobiš simetričen lik, pregib pa je simetrijska os.
- **Ogledalo:** ogledalo postavi na os lika, pravokotno na list, in poglej. Če je lik simetričen, v ogledalu vidiš celoten lik.
- **Jezero:** gore v jezeru imajo odsev. Gladina vode je os, odsev je zrcalna slika, enako velik, a obrnjen na glavo.

Pomisli še na napis na reševalnem vozilu: črke so zrcaljene čez navpično os, da jih voznik pred njim v vzvratnem ogledalu prebere pravilno.

Pri tem velja: zrcaljenje ne spremeni velikosti. Tvoj odsev v ogledalu ni večji ali manjši od tebe, le leva in desna stran sta zamenjani.

## Drugače: Korak za korakom s številkami

Prezrcalimo trikotnik $ABC$ čez navpično os $o$. Oglišča so na levi, razdalje od osi so:

| Oglišče | Razdalja od osi | Razdalja slike od osi | $\lvert XX'\rvert$ |
|---|---|---|---|
| $A$ | $1\,\text{cm}$ | $1\,\text{cm}$ | $2\,\text{cm}$ |
| $B$ | $3\,\text{cm}$ | $3\,\text{cm}$ | $6\,\text{cm}$ |
| $C$ | $2\,\text{cm}$ | $2\,\text{cm}$ | $4\,\text{cm}$ |

Postopek za vsako oglišče:

1. Skozi oglišče konstruiraj pravokotnico na os.
2. Odmeri razdaljo do osi, npr. za $B$: $3\,\text{cm}$.
3. Isto razdaljo nanesi na drugo stran, dobiš $B'$.
4. Preveri: $\lvert BB'\rvert = 3\,\text{cm} + 3\,\text{cm} = 6\,\text{cm}$.

Ko imaš $A'$, $B'$ in $C'$, jih poveži. Preveri še z merjenjem, da je $\lvert A'B'\rvert = \lvert AB\rvert$. Če se dolžini ne ujemata, si se nekje zmotil pri merjenju razdalj od osi.

## Drugače: Bolj natančno

Zrcaljenje je **preslikava**: vsaki točki ravnine priredi natanko eno točko. Dvakratno zrcaljenje čez isto os vrne točko na izhodišče: če je $A'$ slika točke $A$, je slika točke $A'$ spet točka $A$.

Zrcaljenje ohranja razdalje med točkami, zato je slika lika skladna izvirniku. Zaradi tega ohrani tudi kote, obseg in ploščino.

Osno simetričen lik pomeni natančno to: njegova zrcalna slika čez neko premico $s$ je ta isti lik. Simetrijska os je torej premica, ki jo lik »sprejme«.

**Za radovedne.** Interaktivna simulacija spodaj prikazuje tudi **središčno simetrijo**: točko $A$ zrcalimo čez točko $O$ tako, da je $O$ razpolovišče daljice $AA'$. Lik je središčno simetričen, če se po zasuku za $180^\circ$ okoli središča $O$ prekrije sam s seboj. Takšna je na primer črka H ali kvadrat. Podrobneje se je boš učil kasneje.

## Preveri se

? Točka je od osi zrcaljenja oddaljena $4{,}5\,\text{cm}$. Kako daleč je od svoje zrcalne slike?
- $4{,}5\,\text{cm}$
- $2{,}25\,\text{cm}$
+ $9\,\text{cm}$
> Slika je na drugi strani osi, prav tako $4{,}5\,\text{cm}$ od nje. Razdalja med njima je $4{,}5\,\text{cm} + 4{,}5\,\text{cm} = 9\,\text{cm}$.

? Koliko simetrijskih osi ima kvadrat?
- $1$
- $2$
+ $4$
> Kvadrat ima dve osi skozi sredine nasprotnih stranic in še obe diagonali, skupaj $4$.

? Kateri lik nima nobene simetrijske osi?
- enakostranični trikotnik
- krog
+ raznostranični trikotnik (vse tri stranice različno dolge)
> Pri raznostraničnem trikotniku se po nobeni premici ne moreta prekriti obe polovici. Enakostranični trikotnik ima $3$ osi, krog jih ima neskončno mnogo.

? Točka $A'$ je zrcalna slika točke $A$ čez os $o$. Katera trditev drži?
+ Os $o$ je simetrala daljice $AA'$.
- Os $o$ je vzporedna z daljico $AA'$.
- Točka $A'$ leži na isti strani osi kot $A$.
> Daljica $AA'$ je pravokotna na os in os jo razpolovi. Točka $A'$ je zato na drugi strani osi, enako daleč kot $A$.
