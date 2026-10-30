---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz kinematike že znaš opisati gibanje: poznaš hitrost, pospešek in enakomerno pospešeno gibanje. Nisi pa še odgovoril na vprašanje, **zakaj** se telo giblje tako, kot se. Zakaj se avto ob zaviranju ustavi, zakaj te ob nenadnem speljevanju avtobusa potisne nazaj in zakaj je težje pospešiti poln voziček kot praznega?

Odgovor dajo **Newtonovi zakoni**. Povezujejo silo, maso in pospešek, zato lahko vnaprej izračunaš, kako se bo telo gibalo. Uporabljajo jih inženirji pri načrtovanju vozil, dvigal in mostov, športniki pri analizi skoka ali meta, ti pa jih boš uporabljal pri vseh nadaljnjih poglavjih fizike.

## Razlaga

**1. Sila.** Sila $F$ je merilo za medsebojno delovanje teles. Je **vektor**: ima velikost in smer. Enota je newton: $1\,\mathrm{N} = 1\,\mathrm{kg\,m/s^2}$.

**2. Rezultanta sil.** Če na telo deluje več sil, jih seštejemo kot vektorje. Vsoti rečemo **rezultanta** (skupna sila) $F_\mathrm{r}$. Pri gibanju po premici sile v eni smeri seštevamo, sile v nasprotni smeri odštevamo.

**3. Prvi Newtonov zakon (zakon o vztrajnosti).** Telo miruje ali se enakomerno giblje po premici, dokler je rezultanta sil nanj enaka nič:

$$F_\mathrm{r} = 0 \;\Rightarrow\; \vec v = \text{konstantna}$$

Lastnosti telesa, da se upira spremembi gibanja, pravimo **vztrajnost**. Večja ko je masa, večja je vztrajnost.

**4. Drugi Newtonov zakon (osnovni zakon dinamike).** Rezultanta sil na telo je enaka produktu mase in pospeška:

$$F_\mathrm{r} = m\,a$$

Pospešek ima enako smer kot rezultanta. Večja kot je rezultanta, večji je pospešek; večja kot je masa, manjši je pospešek pri isti sili.

**5. Tretji Newtonov zakon (zakon o vzajemnem delovanju).** Če prvo telo deluje na drugo s silo $\vec F_{12}$, drugo deluje na prvo z enako veliko, nasprotno usmerjeno silo:

$$\vec F_{21} = -\vec F_{12}$$

Pomembno: sili delujeta na **različni telesi**, zato se med seboj ne izničita.

**6. Teža in podlaga.** Teža telesa je sila Zemlje na telo: $F_\mathrm{g} = m\,g$, kjer je $g \approx 9{,}8\,\mathrm{m/s^2}$. Če telo leži na vodoravni podlagi in miruje, podlaga deluje nanj s silo podlage (pravokotno na podlago), ki je po velikosti enaka teži.

**7. Trenje.** Sila trenja nasprotuje gibanju (ali poskusu gibanja) in leži vzporedno s podlago. Pri drsenju je njena velikost $F_\mathrm{tr} = k_\mathrm{tr}\,F_\mathrm{p}$, kjer je $F_\mathrm{p}$ sila podlage in $k_\mathrm{tr}$ koeficient trenja.

**8. Postopek reševanja nalog.**

1. Nariši skico in vsa telesa, ki delujejo na obravnavano telo.
2. Vriši vse sile na telo (teža, sila podlage, vlečna sila, trenje).
3. Izberi pozitivno smer (običajno smer gibanja).
4. Zapiši $F_\mathrm{r} = m\,a$ s predznaki.
5. Izračunaj neznanko in preveri enote ter smiselnost.

## Rešeni primeri

### Primer 1 (lažji): pospeševanje vozička

Voziček z maso $20\,\mathrm{kg}$ potiskamo po vodoravnih tleh s silo $60\,\mathrm{N}$. Trenje zanemarimo. Kolikšen je pospešek?

**Podatki:** $m = 20\,\mathrm{kg}$, $F = 60\,\mathrm{N}$ (vodoravna potisna sila), trenje zanemarimo ($F_\mathrm{tr} = 0$)
**Iščemo:** pospešek $a$

:::formula
Drugi Newtonov zakon: $F_\mathrm{r} = m\,a$, torej $a = \dfrac{F_\mathrm{r}}{m}$
:::

**Rešitev:**

1. V vodoravni smeri deluje samo potisna sila. Navpični sili (teža in sila podlage) se izničita, zato ne vplivata na gibanje v vodoravni smeri.
2. Zapišemo drugi zakon: $F_\mathrm{r} = m\,a$, torej $a = \dfrac{F_\mathrm{r}}{m}$.
3. Vstavimo: $a = \dfrac{60\,\mathrm{N}}{20\,\mathrm{kg}} = 3\,\mathrm{m/s^2}$.
4. Smiselnost: enota $\mathrm{N/kg} = \mathrm{m/s^2}$ je enota pospeška, vrednost pa ni nenavadno velika.
5. Odgovor: voziček pospešuje s pospeškom $3\,\mathrm{m/s^2}$.

### Primer 2: trenje in pot

Škatla z maso $10\,\mathrm{kg}$ se giblje po vodoravni podlagi. Vlečemo jo z vodoravno silo $50\,\mathrm{N}$, sila trenja je $20\,\mathrm{N}$. Škatla na začetku miruje. Kolikšen je pospešek in kolikšno pot prepotuje v $4\,\mathrm{s}$?

**Podatki:** $m = 10\,\mathrm{kg}$, $F = 50\,\mathrm{N}$ (vodoravna vlečna sila), $F_\mathrm{tr} = 20\,\mathrm{N}$, $v_0 = 0$, $t = 4\,\mathrm{s}$
**Iščemo:** pospešek $a$ in pot $s$

:::formula
$F_\mathrm{r} = F - F_\mathrm{tr} = m\,a$, nato pot pri $v_0 = 0$: $s = \dfrac{1}{2}a t^2$
:::

**Rešitev:**

1. Izberemo pozitivno smer v smeri vlečne sile. Trenje kaže nasprotno, zato je negativno.
2. Rezultanta: $F_\mathrm{r} = 50\,\mathrm{N} - 20\,\mathrm{N} = 30\,\mathrm{N}$.
3. Pospešek: $a = \dfrac{30\,\mathrm{N}}{10\,\mathrm{kg}} = 3\,\mathrm{m/s^2}$.
4. Ker je pospešek stalen in je začetna hitrost nič, uporabimo znano formulo iz kinematike: $s = \dfrac{1}{2}a t^2$.
5. Vstavimo: $s = \dfrac{1}{2}\cdot 3\,\mathrm{m/s^2}\cdot (4\,\mathrm{s})^2 = \dfrac{1}{2}\cdot 3 \cdot 16\,\mathrm{m} = 24\,\mathrm{m}$.
6. Odgovor: pospešek je $3\,\mathrm{m/s^2}$, pot pa $24\,\mathrm{m}$.

### Primer 3 (težji): dvigalo

Oseba z maso $70\,\mathrm{kg}$ stoji v dvigalu na tehtnici. Dvigalo se začne gibati navzgor s pospeškom $1{,}2\,\mathrm{m/s^2}$. Kolikšno silo kaže tehtnica? Vzemi $g = 9{,}8\,\mathrm{m/s^2}$.

**Podatki:** $m = 70\,\mathrm{kg}$, $a = 1{,}2\,\mathrm{m/s^2}$ (navzgor), $g = 9{,}8\,\mathrm{m/s^2}$
**Iščemo:** silo podlage $F_\mathrm{p}$, ki jo kaže tehtnica

:::formula
Drugi Newtonov zakon s pozitivno smerjo navzgor: $F_\mathrm{p} - F_\mathrm{g} = m\,a$, kjer je $F_\mathrm{g} = m\,g$
:::

**Rešitev:**

1. Na osebo delujeta dve sili: teža $F_\mathrm{g}$ navzdol in sila podlage $F_\mathrm{p}$ navzgor. Tehtnica kaže prav silo podlage (po tretjem zakonu je enaka sili, s katero oseba pritiska na tehtnico).
2. Pozitivna smer naj bo navzgor, saj v to smer pospešujemo.
3. Zapišemo drugi zakon: $F_\mathrm{p} - F_\mathrm{g} = m\,a$.
4. Izrazimo: $F_\mathrm{p} = m\,g + m\,a = m\,(g + a)$.
5. Vstavimo: $F_\mathrm{p} = 70\,\mathrm{kg}\cdot(9{,}8 + 1{,}2)\,\mathrm{m/s^2} = 70\cdot 11\,\mathrm{N} = 770\,\mathrm{N}$.
6. Primerjava: teža je $70\cdot 9{,}8 = 686\,\mathrm{N}$. Tehtnica kaže več, ker moramo osebo ne le držati, ampak tudi pospeševati navzgor. To se ujema z občutkom, da te ob speljevanju dvigala pritisne k tlom.
7. Odgovor: tehtnica kaže silo $770\,\mathrm{N}$.

## Pogoste napake

- **»Sila je potrebna za gibanje.«** Po prvem zakonu telo brez rezultante sil nadaljuje enakomerno gibanje. Sila je potrebna za *spremembo* gibanja (pospešek), ne za enakomerno gibanje.
- **Seštevanje vseh sil brez predznakov.** V $F_\mathrm{r} = m\,a$ nastopa rezultanta, ne ena sama sila. Sile v nasprotnih smereh odštevamo.
- **Sili akcije in reakcije se »izničita«.** Delujeta na različni telesi, zato ju ne seštevamo pri istem telesu. Zato se npr. voziček, ki ga potiskaš, lahko giblje, čeprav on tebe potiska nazaj z enako veliko silo.
- **Mešanje mase in teže.** Masa se meri v $\mathrm{kg}$, teža je sila in se meri v $\mathrm{N}$. Teža je $F_\mathrm{g} = m\,g$.
- **Napačna enota.** Sila mora biti v $\mathrm{N}$, masa v $\mathrm{kg}$, pospešek v $\mathrm{m/s^2}$. Pred računom pretvori, npr. $500\,\mathrm{g} = 0{,}5\,\mathrm{kg}$.
- **Trenje v napačno smer.** Trenje vedno nasprotuje gibanju (ali poskusu gibanja).

## Povzetek

- Sila je vektor, enota je $1\,\mathrm{N} = 1\,\mathrm{kg\,m/s^2}$. Več sil seštejemo v rezultanto.
- **1. zakon:** če je $F_\mathrm{r} = 0$, telo miruje ali se enakomerno giblje po premici.
- **2. zakon:** $F_\mathrm{r} = m\,a$; pospešek ima smer rezultante.
- **3. zakon:** sili vzajemnega delovanja sta enako veliki, nasprotno usmerjeni in delujeta na različni telesi.
- Teža: $F_\mathrm{g} = m\,g$; trenje drsenja: $F_\mathrm{tr} = k_\mathrm{tr}\,F_\mathrm{p}$.
- Pri nalogah: skica, vse sile, izbira smeri, $F_\mathrm{r} = m\,a$ s predznaki.

## Drugače: Na sliki

Nariši škatlo kot kvadrat in iz njenega središča puščice za sile:

- navzdol puščica za težo $F_\mathrm{g}$,
- navzgor puščica za silo podlage $F_\mathrm{p}$,
- desno puščica za vlečno silo $F_\mathrm{v}$,
- levo puščica za trenje $F_\mathrm{tr}$.

Dolžina puščice kaže velikost sile. Če sta navpični puščici enako dolgi, se izničita in škatla se ne giblje navpično. Če je desna puščica daljša od leve, je rezultanta usmerjena desno in škatla pospešuje v desno. Če sta enako dolgi, je rezultanta nič in škatla miruje ali drsi enakomerno.

V interaktivni simulaciji spodaj postavi različne osebe na vrv in opazuj puščice sil. Ko je vsota sil na eni strani večja, se vozel pomakne v to smer. Ko sta strani izenačeni, miruje. Preizkusi tudi premikanje škatle s trenjem in opazuj, kako se spreminja pospešek.

## Drugače: Iz vsakdanjega življenja

**Avtobus.** Ko avtobus nenadoma spelje, se ti zdi, da te potegne nazaj. V resnici se sedež pospeši naprej, tvoje telo pa zaradi vztrajnosti (1. zakon) skuša ostati pri miru. Ko avtobus zavira, te "vrže" naprej, ker telo nadaljuje prvotno gibanje.

**Prazen in poln nakupovalni voziček.** Z isto silo prazen voziček pospešiš bolj kot poln. Po $a = F/m$ je pri enaki sili pospešek obratno sorazmeren z maso.

**Plavanje.** Ko se odrineš od roba bazena, z rokami potisneš steno, stena pa po 3. zakonu potisne tebe v nasprotno smer. Obe sili sta enako veliki, a delujeta na različni telesi: ti se premakneš, ker si veliko lažji od stene (ta je pritrjena na Zemljo).

**Rakete.** Raketa izpihuje plin nazaj, plin pa po 3. zakonu potiska raketo naprej. Zato raketa deluje tudi v praznem prostoru, kjer ni zraka, na katerega bi se "naslonila".

## Drugače: Korak za korakom s številkami

Naloga: Avto z maso $1000\,\mathrm{kg}$ se ob zaviranju ustavlja z zaviralno silo (trenje) $4000\,\mathrm{N}$. Kolikšen je pojemek in kolikšna zavorna pot, če je začetna hitrost $20\,\mathrm{m/s}$?

| Korak | Kaj naredimo | Račun |
|---|---|---|
| 1 | Izberemo pozitivno smer v smeri gibanja | zaviralna sila je negativna: $F_\mathrm{r} = -4000\,\mathrm{N}$ |
| 2 | Drugi zakon | $a = \dfrac{F_\mathrm{r}}{m} = \dfrac{-4000\,\mathrm{N}}{1000\,\mathrm{kg}} = -4\,\mathrm{m/s^2}$ |
| 3 | Čas ustavljanja iz $v = v_0 + a t$, $v = 0$ | $t = \dfrac{20\,\mathrm{m/s}}{4\,\mathrm{m/s^2}} = 5\,\mathrm{s}$ |
| 4 | Pot: $s = v_0 t + \dfrac{1}{2} a t^2$ | $s = 20\cdot 5 - \dfrac{1}{2}\cdot 4\cdot 25 = 100 - 50 = 50\,\mathrm{m}$ |
| 5 | Preverimo | povprečna hitrost $10\,\mathrm{m/s}$ krat $5\,\mathrm{s}$ je $50\,\mathrm{m}$ |

Pojemek je $4\,\mathrm{m/s^2}$ (negativen pospešek pomeni zaviranje), zavorna pot je $50\,\mathrm{m}$.

## Drugače: Bolj natančno

**Drugi zakon in enota.** Iz $F = m\,a$ sledi enota: $1\,\mathrm{N}$ je sila, ki telesu z maso $1\,\mathrm{kg}$ da pospešek $1\,\mathrm{m/s^2}$.

**Prvi zakon kot poseben primer drugega.** Če je $F_\mathrm{r} = 0$, je $a = 0$, torej se hitrost ne spreminja. Prvi zakon hkrati določa, kdaj zakoni sploh veljajo: v **inercialnih opazovalnih sistemih**, to so sistemi, ki mirujejo ali se enakomerno gibljejo po premici. V pospešenem sistemu (npr. v zavijajočem avtobusu) se zdi, da na telesa delujejo dodatne sile, ki jih v inercialnem sistemu ni.

**Zakaj sta akcija in reakcija različna telesa.** Če bi imeli samo eno telo, bi bila vsota sil $\vec F + (-\vec F) = 0$ in telo se nikoli ne bi pospešilo. V resnici sili delujeta na različni telesi: sila $\vec F_{12}$ povzroči pospešek telesa 2, sila $\vec F_{21}$ pa pospešek telesa 1. Pospeška sta po velikosti $a_1 = F/m_1$ in $a_2 = F/m_2$, zato manjše telo pospeši bolj.

**Primer: dva vozička.** Dva vozička, $m_1 = 1\,\mathrm{kg}$ in $m_2 = 2\,\mathrm{kg}$, sta povezana z vzmetjo in ju spustimo. Vzmet deluje na oba z enako veliko silo, npr. $F = 4\,\mathrm{N}$. Pospeška sta $4\,\mathrm{m/s^2}$ in $2\,\mathrm{m/s^2}$. Lažji voziček pospeši dvakrat bolj.

## Preveri se

? Škatla z maso $5\,\mathrm{kg}$ drsi po vodoravni podlagi. Vlečemo jo s silo $30\,\mathrm{N}$, trenje je $10\,\mathrm{N}$. Kolikšen je pospešek?
- $6\,\mathrm{m/s^2}$
+ $4\,\mathrm{m/s^2}$
- $8\,\mathrm{m/s^2}$
- $2\,\mathrm{m/s^2}$
> Rezultanta je $30\,\mathrm{N} - 10\,\mathrm{N} = 20\,\mathrm{N}$, torej $a = 20/5 = 4\,\mathrm{m/s^2}$. Odgovor $6\,\mathrm{m/s^2}$ pozabi trenje, $8\,\mathrm{m/s^2}$ pa trenje prišteje.

? Knjiga leži na mizi. Katera sila je po tretjem Newtonovem zakonu par sile podlage, s katero miza deluje na knjigo?
- teža knjige
+ sila knjige na mizo
- sila Zemlje na mizo
> Par sil po tretjem zakonu sta sili med istima telesoma: miza deluje na knjigo, knjiga pa na mizo. Teža knjige (sila Zemlje na knjigo) ni njen par, čeprav sta pri mirujoči knjigi enako veliki, ker delujeta na isto telo.

? Telo se giblje po vodoravni gladki ledeni ploskvi s stalno hitrostjo $3\,\mathrm{m/s}$, trenje je zanemarljivo. Kaj velja za rezultanto sil na telo?
- Kaže v smeri gibanja in je večja od nič.
- Kaže nasprotno od gibanja.
+ Enaka je nič.
> Hitrost je stalna, zato je pospešek nič. Po drugem zakonu je tudi rezultanta nič. Za enakomerno gibanje sila ni potrebna.

:::simboli
F_{\mathrm{r}} | rezultanta sil | F_\mathrm{r} = m\,a | N | F_r = 0: telo miruje ali se giblje premo enakomerno
m | masa | | kg
a | pospešek | a = \dfrac{F_\mathrm{r}}{m} | m/s^2
v | hitrost | | m/s
v_0 | začetna hitrost | | m/s
F | sila (potisna ali vlečna) | | N
F_{\mathrm{tr}} | sila trenja | F_\mathrm{tr} = k_\mathrm{tr}\,F_\mathrm{p} | N
F_{12} | sila prvega telesa na drugo | \vec F_{21} = -\vec F_{12} | N | tretji Newtonov zakon
F_{21} | sila drugega telesa na prvo | | N
F_{\mathrm{p}} | sila podlage | | N | to kaže tehtnica
F_{\mathrm{g}} | teža | F_\mathrm{g} = m\,g | N
g | težni pospešek | | m/s^2 | približno 9,8 m/s²
s | pot | s = \dfrac{1}{2}a t^2 | m | velja pri v₀ = 0
t | čas | | s
:::
