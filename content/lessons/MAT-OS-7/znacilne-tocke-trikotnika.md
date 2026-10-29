---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Trikotnik že dobro poznaš: veš, da ima oglišča $A$, $B$, $C$, stranice $a$, $b$, $c$ in notranje kote $\alpha$, $\beta$, $\gamma$, katerih vsota je $180^\circ$. Znaš ga razvrstiti glede na stranice in kote ter ga načrtati iz treh podatkov. Iz 6. razreda znaš z ravnilom in šestilom narisati **pravokotnico**, **simetralo daljice** in **simetralo kota**.

Zdaj bomo v trikotnik narisali po tri posebne črte iste vrste in odkrili presenečenje: vse tri se vedno sekajo **v eni sami točki**. Tako dobimo **značilne točke trikotnika**. Uporabne so v vsakdanjem življenju:

- **Težišče** je točka, v kateri lahko trikotno ploščo uravnotežiš na konici svinčnika.
- **Središče očrtane krožnice** je enako oddaljeno od vseh treh oglišč, na primer od treh vasi, med katere želimo postaviti skupni vodnjak.
- **Središče včrtane krožnice** je enako oddaljeno od vseh treh stranic, na primer od treh cest, ki omejujejo trikotno parcelo.

## Razlaga

**1. Višina trikotnika.** Višina je daljica, ki jo potegnemo iz oglišča **pravokotno** na nasprotno stranico (ali na njen podaljšek). Višino na stranico $a$ označimo z $v_a$, na stranico $b$ z $v_b$ in na stranico $c$ z $v_c$. Vsak trikotnik ima tri višine.

Premice, na katerih ležijo višine (nosilke višin), se sekajo v eni točki. Imenujemo jo **višinska točka** in jo označimo z $V$.

**2. Težiščnica.** Težiščnica je daljica, ki povezuje oglišče s **središčem (razpoloviščem) nasprotne stranice**. Težiščnico iz oglišča $A$ označimo s $t_a$, ker gre do sredine stranice $a$; podobno $t_b$ in $t_c$. Razpolovišče stranice najdemo s simetralo te stranice.

Vse tri težiščnice se sekajo v **težišču** $T$. Težišče deli vsako težiščnico v razmerju $2 : 1$, merjeno od oglišča. Od oglišča do težišča sta torej dve tretjini težiščnice, od težišča do sredine stranice pa ena tretjina:

$$|AT| = \frac{2}{3}\, t_a, \qquad |TA_1| = \frac{1}{3}\, t_a,$$

kjer je $A_1$ razpolovišče stranice $a$.

**3. Simetrale stranic in očrtana krožnica.** Vsaka točka na simetrali daljice je **enako oddaljena od obeh krajišč** daljice. Narišemo simetrale vseh treh stranic. Sekajo se v točki $O$, ki je enako oddaljena od vseh treh oglišč:

$$|OA| = |OB| = |OC| = R$$

Zato lahko okoli $O$ s polmerom $R$ narišemo krožnico, ki gre skozi vsa tri oglišča. To je **trikotniku očrtana krožnica**, $O$ je njeno središče, $R$ pa njen polmer.

**4. Simetrale kotov in včrtana krožnica.** Vsaka točka na simetrali kota je **enako oddaljena od obeh krakov** kota. Simetrale vseh treh notranjih kotov se sekajo v točki $S$, ki je enako oddaljena od vseh treh stranic. Razdalja $r$ od $S$ do stranice je polmer **trikotniku včrtane krožnice**, ki se dotika vseh treh stranic.

Pozor: razdalja od točke do stranice je dolžina **pravokotnice** iz točke na stranico. Polmer $r$ zato dobiš tako, da iz $S$ narišeš pravokotnico na eno od stranic; njeno vznožje je **dotikališče** krožnice s stranico.

**5. Kje ležijo značilne točke.** Lega težišča in središča včrtane krožnice je vedno enaka, lega višinske točke in središča očrtane krožnice pa je odvisna od vrste trikotnika glede na kote:

| Točka | ostrokotni | pravokotni | topokotni |
|---|---|---|---|
| težišče $T$ | znotraj | znotraj | znotraj |
| središče včrtane krožnice $S$ | znotraj | znotraj | znotraj |
| središče očrtane krožnice $O$ | znotraj | na razpolovišču hipotenuze | zunaj |
| višinska točka $V$ | znotraj | v oglišču pravega kota | zunaj |

Pri pravokotnem trikotniku sta kateti hkrati višini (kateta $a$ je višina na kateto $b$ in obratno), zato se višine sekajo v oglišču pravega kota.

**6. Posebni trikotniki.**

- V **enakostraničnem** trikotniku je vsaka višina hkrati težiščnica, simetrala stranice in simetrala kota. Vse štiri značilne točke sovpadajo v eni točki.
- V **enakokrakem** trikotniku je višina na osnovnico hkrati težiščnica, simetrala osnovnice in simetrala kota ob vrhu. Vse štiri značilne točke zato ležijo na tej daljici oziroma na njeni nosilki, ki je os simetrije trikotnika.

V interaktivni simulaciji spodaj (**Značilne točke trikotnika**) premikaj oglišča in opazuj, kako se točke premikajo in kdaj kakšna izstopi iz trikotnika.

## Rešeni primeri

### Primer 1 (lažji)

Težiščnica $t_a$ trikotnika $ABC$ je dolga $15\,\text{cm}$. Kako daleč je težišče $T$ od oglišča $A$ in kako daleč od razpolovišča $A_1$ stranice $a$?

**Podatki:** $t_a = 15\,\text{cm}$, $A_1$ je razpolovišče stranice $a$
**Iščemo:** razdalji $|AT|$ in $|TA_1|$

:::formula
Težišče deli težiščnico v razmerju $2 : 1$ od oglišča: $|AT| = \dfrac{2}{3}\, t_a$, $|TA_1| = \dfrac{1}{3}\, t_a$
:::

**Rešitev:**

1. Težiščnico razdelimo na $2 + 1 = 3$ enake dele: $15\,\text{cm} : 3 = 5\,\text{cm}$.
2. Od oglišča do težišča sta dva dela: $|AT| = 2 \cdot 5\,\text{cm} = 10\,\text{cm}$.
3. Od težišča do sredine stranice je en del: $|TA_1| = 5\,\text{cm}$.
4. Preverimo: $10\,\text{cm} + 5\,\text{cm} = 15\,\text{cm}$ in $10 : 5 = 2 : 1$. ✓
5. Odgovor: težišče je od oglišča $A$ oddaljeno $10\,\text{cm}$, od razpolovišča stranice $a$ pa $5\,\text{cm}$.

### Primer 2 (srednji)

V trikotniku $ABC$ meri kot $\alpha = 35^\circ$ in kot $\beta = 25^\circ$. Ugotovi, ali ležijo težišče $T$, središče včrtane krožnice $S$, središče očrtane krožnice $O$ in višinska točka $V$ znotraj ali zunaj trikotnika.

**Podatki:** $\alpha = 35^\circ$, $\beta = 25^\circ$
**Iščemo:** kot $\gamma$, vrsto trikotnika glede na kote in lego točk $T$, $S$, $O$, $V$

:::formula
$\gamma = 180^\circ - \alpha - \beta$; pri topokotnem trikotniku ležita $O$ in $V$ zunaj trikotnika, $T$ in $S$ pa sta vedno znotraj.
:::

**Rešitev:**

1. Izračunamo tretji kot: $\gamma = 180^\circ - 35^\circ - 25^\circ = 180^\circ - 60^\circ = 120^\circ$.
2. Ker je $\gamma = 120^\circ > 90^\circ$, je trikotnik **topokotni**.
3. Težišče $T$ in središče včrtane krožnice $S$ sta vedno znotraj trikotnika.
4. Pri topokotnem trikotniku se simetrale stranic sekajo zunaj trikotnika, in sicer onkraj najdaljše stranice $c$, ki leži nasproti topega kota.
5. Nosilke višin se pri topokotnem trikotniku sekajo zunaj trikotnika, za ogliščem $C$ s topim kotom. Višini $v_a$ in $v_b$ padeta na podaljška stranic, zato ju moramo podaljšati.
6. Odgovor: $\gamma = 120^\circ$, trikotnik je topokotni; $T$ in $S$ ležita znotraj, $O$ in $V$ pa zunaj trikotnika.

### Primer 3 (težji)

Trikotnik $ABC$ ima pravi kot pri oglišču $C$, hipotenuza $c = |AB|$ je dolga $12\,\text{cm}$. Kje leži višinska točka $V$? Kolikšen je polmer $R$ očrtane krožnice? Kako daleč je težišče $T$ od oglišča $C$?

**Podatki:** $\gamma = 90^\circ$, $c = 12\,\text{cm}$
**Iščemo:** lego točke $V$, polmer $R$ in razdaljo $|CT|$

:::formula
Pri pravokotnem trikotniku je $V$ v oglišču pravega kota, $O$ na razpolovišču hipotenuze, zato $R = \dfrac{c}{2}$. Težišče: $|CT| = \dfrac{2}{3}\, t_c$.
:::

**Rešitev:**

1. Kateti $a$ in $b$ sta pravokotni druga na drugo, zato je vsaka od njiju višina na drugo. Obe gresta skozi $C$, zato je višinska točka $V = C$.
2. Središče očrtane krožnice $O$ leži na razpolovišču hipotenuze, označimo ga z $C_1$. Zato je $R = |OA| = \dfrac{c}{2} = \dfrac{12\,\text{cm}}{2} = 6\,\text{cm}$.
3. Tudi oglišče $C$ leži na očrtani krožnici, zato je $|OC| = R = 6\,\text{cm}$.
4. Težiščnica $t_c$ povezuje oglišče $C$ z razpoloviščem $C_1$ hipotenuze, ki je ravno točka $O$. Torej je $t_c = |CO| = 6\,\text{cm}$.
5. Težišče deli težiščnico v razmerju $2 : 1$: $|CT| = \dfrac{2}{3} \cdot 6\,\text{cm} = 4\,\text{cm}$ in $|TC_1| = \dfrac{1}{3} \cdot 6\,\text{cm} = 2\,\text{cm}$.
6. Odgovor: višinska točka je v oglišču $C$, polmer očrtane krožnice je $6\,\text{cm}$, težišče pa je od oglišča $C$ oddaljeno $4\,\text{cm}$.

## Pogoste napake

- **Zamenjava višine in težiščnice.** Obe potegnemo iz oglišča na nasprotno stranico, zato sta si na skici podobni. Pravilno: višina je na stranico **pravokotna**, težiščnica pa gre do **sredine** stranice. Sovpadata le v enakokrakem trikotniku (za osnovnico) in v enakostraničnem trikotniku.
- **Zamenjava simetrale stranice in simetrale kota.** Obe sta »simetrali«, zato ju učenci pogosto pomešajo. Pravilno: simetrale **stranic** dajo središče **očrtane** krožnice (enaka razdalja do oglišč), simetrale **kotov** pa središče **včrtane** krožnice (enaka razdalja do stranic). Pomni: stranice – očrtana, koti – včrtana.
- **Napačen polmer včrtane krožnice.** Nekateri šestilo nastavijo od $S$ do oglišča, ker se jim zdi, da mora krožnica »doseči« oglišča. Takšna krožnica gre čez stranice. Pravilno: iz $S$ nariši pravokotnico na stranico; razdalja od $S$ do vznožja pravokotnice je polmer $r$.
- **Težišče na polovici težiščnice.** Ker težiščnica gre do sredine stranice, se zdi, da je tudi težišče »na sredini«. Pravilno: od oglišča do težišča sta **dve tretjini** težiščnice. Pri $t_a = 9\,\text{cm}$ je $|AT| = 6\,\text{cm}$, ne $4{,}5\,\text{cm}$.
- **Višine pri topokotnem trikotniku »ne obstajajo«.** Ko višina ne pade na stranico, jo učenci izpustijo. Pravilno: stranico podaljšaj in nanjo nariši pravokotnico iz oglišča. Za višinsko točko podaljšaj tudi višine; sekajo se zunaj trikotnika.

## Povzetek

- Višine (pravokotnice iz oglišča na nasprotno stranico) se sekajo v višinski točki $V$.
- Težiščnice (iz oglišča do sredine nasprotne stranice) se sekajo v težišču $T$, ki jih deli v razmerju $2 : 1$ od oglišča: $|AT| = \dfrac{2}{3}\, t_a$.
- Simetrale stranic se sekajo v središču $O$ očrtane krožnice: $|OA| = |OB| = |OC| = R$.
- Simetrale kotov se sekajo v središču $S$ včrtane krožnice; polmer $r$ je razdalja od $S$ do stranice.
- $T$ in $S$ sta vedno znotraj trikotnika; $O$ in $V$ sta znotraj pri ostrokotnem, zunaj pri topokotnem trikotniku.
- Pri pravokotnem trikotniku je $V$ v oglišču pravega kota, $O$ pa na razpolovišču hipotenuze, zato $R = \dfrac{c}{2}$.
- V enakostraničnem trikotniku vse štiri točke sovpadajo.

## Drugače: Na sliki

Predstavljaj si ostrokotni trikotnik, narisan na list. Vanj s štirimi barvami narišemo štiri družine črt:

| Barva | Črte | Kje se sekajo | Kaj nariše šestilo |
|---|---|---|---|
| rdeča | višine | $V$ | nič |
| modra | težiščnice | $T$ | nič |
| zelena | simetrale stranic | $O$ | krožnico skozi oglišča |
| rumena | simetrale kotov | $S$ | krožnico, ki se dotika stranic |

Zelena krožnica trikotnik »objame« od zunaj, rumena pa je »ujeta« v njem. Zdaj v mislih povleci oglišče $C$ navzdol proti stranici $AB$, da kot $\gamma$ postane top. Rdeča in zelena točka se odlepita in odpotujeta iz trikotnika, modra in rumena pa ostaneta notri. To lahko preizkusiš v interaktivni simulaciji spodaj. Zanimivost: točke $V$, $T$ in $O$ vedno ležijo na isti premici, in to celo takrat, ko so zunaj trikotnika.

## Drugače: Iz vsakdanjega življenja

**Težišče.** Iz kartona izreži poljuben trikotnik, nanj nariši težiščnice in ga položi s težiščem na konico svinčnika. Ostane v ravnovesju! Težišče je namreč točka, v kateri si lahko predstavljamo, da je zbrana vsa teža ploščice. Na katerem koli drugem mestu se ploščica prevrne.

**Središče očrtane krožnice.** Tri vasi ležijo v ogliščih trikotnika. Občina želi postaviti gasilski dom, ki bo enako oddaljen od vseh treh vasi. Pravo mesto je središče očrtane krožnice. Če so vasi razporejene v topokotni trikotnik, je ta točka zunaj območja med vasmi, kar je včasih nepraktično.

**Središče včrtane krožnice.** Trikotno parcelo omejujejo tri ceste. Lastnik želi posaditi okroglo gredico, ki bo čim večja in se bo dotikala vseh treh robov. Njeno središče je središče včrtane krožnice, njen polmer pa razdalja od tega središča do roba.

## Drugače: Korak za korakom s številkami

Recept za iskanje središča očrtane krožnice z merjenjem in računanjem:

1. Nariši trikotnik s stranicami $a = 6\,\text{cm}$, $b = 8\,\text{cm}$, $c = 10\,\text{cm}$ (načrtaš ga po izreku sss).
2. Preveri vrsto: izmeri največji kot $\gamma$, ki leži nasproti najdaljše stranice. Dobiš $90^\circ$, trikotnik je pravokotni.
3. Nariši simetralo stranice $c$. Seka jo v razpolovišču, $5\,\text{cm}$ od $A$ in od $B$.
4. Nariši simetralo stranice $a$. Seka simetralo stranice $c$ prav v razpolovišču hipotenuze. To je $O$.
5. Izmeri $|OA|$, $|OB|$ in $|OC|$. Vse tri merijo $5\,\text{cm}$, zato je $R = 5\,\text{cm} = \dfrac{10\,\text{cm}}{2}$.
6. Nariši težiščnico $t_c$ iz $C$ do $O$; meri $5\,\text{cm}$. Težišče je na $\dfrac{2}{3}$ od oglišča: $\dfrac{2}{3} \cdot 5\,\text{cm} \approx 3{,}3\,\text{cm}$ od $C$.
7. Višinska točka je v oglišču $C$, saj sta kateti $a$ in $b$ pravokotni.

Tako si z enim trikotnikom preveril skoraj vsa pravila iz razlage.

## Drugače: Bolj natančno

**Zakaj se simetrale stranic sekajo v eni točki?** Naj se simetrali stranic $c = AB$ in $a = BC$ sekata v točki $O$. Ker je $O$ na simetrali daljice $AB$, je $|OA| = |OB|$. Ker je $O$ na simetrali daljice $BC$, je $|OB| = |OC|$. Iz tega sledi $|OA| = |OC|$, torej je $O$ enako oddaljena od krajišč daljice $AC$ in zato leži tudi na simetrali stranice $b$. Vse tri simetrale gredo skozi $O$.

**Zakaj se simetrale kotov sekajo v eni točki?** Razmislek je enak. Presečišče $S$ simetral kotov $\alpha$ in $\beta$ je enako oddaljeno od stranic $b$ in $c$ (simetrala $\alpha$) ter od stranic $c$ in $a$ (simetrala $\beta$). Torej je enako oddaljeno od $a$ in $b$ in leži na simetrali kota $\gamma$.

**Zakaj je $T$ vedno znotraj?** Vsaka težiščnica leži v celoti v trikotniku, saj povezuje oglišče s točko na nasprotni stranici. Njihovo presečišče je zato tudi znotraj. Enako velja za simetrale notranjih kotov. Višine in simetrale stranic pa lahko »uidejo« ven, zato je lega $V$ in $O$ odvisna od kotov.

## Preveri se

? Katere črte se sekajo v središču trikotniku očrtane krožnice?
- simetrale kotov
- težiščnice
+ simetrale stranic
- višine
> Točke na simetrali stranice so enako oddaljene od obeh krajišč, zato je presečišče simetral stranic enako oddaljeno od vseh treh oglišč. Simetrale kotov dajo središče včrtane krožnice.

? Težiščnica $t_b$ meri $18\,\text{cm}$. Kako daleč je težišče od oglišča $B$?
- $9\,\text{cm}$
+ $12\,\text{cm}$
- $6\,\text{cm}$
- $27\,\text{cm}$
> Težišče deli težiščnico v razmerju $2 : 1$ od oglišča: $|BT| = \dfrac{2}{3} \cdot 18\,\text{cm} = 12\,\text{cm}$. Razdalja $6\,\text{cm}$ je od težišča do sredine stranice $b$.

? Kje leži višinska točka pravokotnega trikotnika?
- na razpolovišču hipotenuze
- zunaj trikotnika
+ v oglišču pravega kota
> Kateti sta pravokotni, zato je vsaka višina na drugo; obe gresta skozi oglišče pravega kota. Na razpolovišču hipotenuze leži središče očrtane krožnice.

? Trikotnik ima kota $\alpha = 50^\circ$ in $\beta = 30^\circ$. Kje leži središče očrtane krožnice?
- znotraj trikotnika
- na stranici $c$
+ zunaj trikotnika
> $\gamma = 180^\circ - 50^\circ - 30^\circ = 100^\circ$, trikotnik je topokotni, zato je središče očrtane krožnice zunaj trikotnika.
