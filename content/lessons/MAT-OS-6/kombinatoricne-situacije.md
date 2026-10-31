---
stanje: osnutek
demo: kombinatorika
avtor: AI
---

## Zakaj se tega učimo

Vsak dan izbiraš: katero majico boš oblekel k katerim hlačam, kateri sendvič in kateri sok boš vzel za malico, v kakšnem vrstnem redu boš naredil domače naloge. Pogosto se ob tem vprašamo: **koliko različnih možnosti sploh imam?**

Pri temi Prikazi podatkov si podatke urejal v preglednice in jih prikazal z diagrami. Zdaj boš z istimi orodji, preglednico in posebno sliko, ki ji rečemo **drevesni prikaz** (drevo), urejeno preštel vse možnosti. Ko možnosti naštevaš na pamet, hitro kakšno pozabiš ali pa isto našteješ dvakrat. Z drevesom ali preglednico tega ne narediš, ker vsaka možnost dobi svoje mesto.

Takšnim nalogam rečemo **kombinatorične situacije**. Srečaš jih pri sestavljanju jedilnika, gesel in kod za ključavnice, pri razporedu tekem na turnirju in kasneje pri verjetnosti, ko boš računal, kako verjetno je, da se nekaj zgodi.

## Razlaga

**1. Kaj je možnost.** V kombinatorični situaciji izbiramo v več **korakih**. Na primer: najprej izberemo majico, nato hlače. Ena **možnost** (izid) je en celoten izbor, na primer *rdeča majica in kavbojke*.

**2. Sistematično naštevanje.** Možnosti naštevamo po vrstnem redu, nikoli na slepo. Najprej določimo prvo izbiro in ob njej naštejemo vse druge izbire, nato vzamemo naslednjo prvo izbiro in ponovimo. Tako nobene možnosti ne izpustimo in nobene ne ponovimo.

**3. Drevesni prikaz.** Drevo rišemo od leve proti desni (ali od zgoraj navzdol):

- iz začetne točke narišemo toliko vej, kolikor je možnosti v prvem koraku,
- iz konca vsake veje narišemo nove veje za vse možnosti v drugem koraku,
- tako nadaljujemo za vsak korak.

Vsaka pot od začetka do konca zadnje veje je **ena možnost**. Možnosti preštejemo tako, da preštejemo konce zadnjih vej.

**4. Preglednica.** Kadar izbiramo v **dveh** korakih, lahko namesto drevesa narišemo preglednico. V vrstice napišemo možnosti prvega koraka, v stolpce možnosti drugega koraka. Vsako polje v preglednici je ena možnost. Na primer za 2 vrsti kruha in 3 vrste namaza:

| kruh \ namaz | maslo (M) | med (D) | marmelada (R) |
|---|---|---|---|
| beli (B) | BM | BD | BR |
| črni (Č) | ČM | ČD | ČR |

Polj je $2 \cdot 3 = 6$, torej je 6 različnih malic.

**5. Bližnjica z množenjem.** Če ima vsak korak enako število izbir ne glede na to, kaj smo izbrali prej, iz vsake veje zraste enako število novih vej. Zato število vseh možnosti dobimo z **množenjem**:

$$\text{število možnosti} = (\text{izbire v 1. koraku}) \cdot (\text{izbire v 2. koraku}) \cdot \ldots$$

Bližnjico uporabi šele, ko razumeš, kako je narisano drevo. Če ne veš, ali smeš množiti, nariši drevo.

**6. Ali se izbira lahko ponovi?** Pomembno je prebrati, ali smemo isto stvar izbrati večkrat.

- Pri kodi za ključavnico se števka lahko ponovi (koda $3\,3$ je dovoljena).
- Pri razporedu tekmovalcev na stopničke se ne more: isti tekmovalec ne more biti hkrati prvi in drugi. V vsakem naslednjem koraku je zato ena izbira manj.

**7. Ali je vrstni red pomemben?** Pri dvomestnem številu je $12$ drugo število kot $21$, zato štejemo obe. Pri rokovanju pa je »Ana se rokuje z Borom« isto kot »Bor se rokuje z Ano«, zato tak par štejemo samo enkrat.

V interaktivni simulaciji spodaj (**Drevesni prikaz možnosti**) lahko sam izbiraš število izbir v posameznih korakih in opazuješ, kako drevo raste.

## Rešeni primeri

### Primer 1 (lažji)

Nika ima 3 majice: rdečo, modro in zeleno. Ima tudi 2 para hlač: kavbojke in kratke hlače. Na koliko različnih načinov se lahko obleče, če obleče eno majico in ene hlače?

**Podatki:** majice: rdeča (R), modra (M), zelena (Z), to so 3 majice; hlače: kavbojke (K), kratke hlače (H), to sta 2 para hlač; izbere eno majico in ene hlače
**Iščemo:** število različnih načinov oblačenja (parov majica in hlače)

:::formula
Drevesni prikaz: iz začetka 3 veje (majice), iz vsake 2 veji (hlače). Število možnosti $= 3 \cdot 2$.
:::

**Rešitev:**

1. Narišemo drevo. Iz začetne točke vodijo 3 veje: R, M, Z.
2. Iz vsake majice vodita 2 veji: K in H.
3. Poti naštejemo po vrsti: RK, RH, MK, MH, ZK, ZH.
4. Preštejemo konce vej: $6$.
5. Preverimo z množenjem: $3 \cdot 2 = 6$. ✓
6. Odgovor: Nika se lahko obleče na $6$ različnih načinov.

### Primer 2 (srednji)

Koliko različnih dvomestnih števil lahko sestaviš iz števk $0$, $1$, $2$ in $3$, če se števka v istem številu ne sme ponoviti? Vsa števila tudi zapiši.

**Podatki:** števke $0$, $1$, $2$, $3$ (4 števke); število je dvomestno; števka se v istem številu ne ponovi
**Iščemo:** število vseh takih dvomestnih števil in njihov seznam

:::formula
Dvomestno število se ne začne z $0$. Pri drugi števki ostanejo vse števke razen tiste, ki smo jo že porabili. Število možnosti $=$ (izbire za desetice) $\cdot$ (izbire za enice).
:::

**Rešitev:**

1. Mesto desetic: števka $0$ ne pride v poštev, ker na primer $03$ ni dvomestno število. Ostanejo $1$, $2$, $3$, torej $3$ izbire.
2. Mesto enic: lahko je katera koli od štirih števk, razen tiste, ki je že na mestu desetic. Ostanejo $3$ izbire (tu je $0$ dovoljena).
3. Drevo ima torej 3 veje in iz vsake 3 nove veje. Števila po vrsti:
   - desetica $1$: $10$, $12$, $13$,
   - desetica $2$: $20$, $21$, $23$,
   - desetica $3$: $30$, $31$, $32$.
4. Preštejemo: $3 + 3 + 3 = 9$.
5. Preverimo z množenjem: $3 \cdot 3 = 9$. ✓
6. Odgovor: sestavimo lahko $9$ dvomestnih števil: $10, 12, 13, 20, 21, 23, 30, 31, 32$.

### Primer 3 (težji)

Pet prijateljev, Ana, Bor, Cene, Dana in Eva, se sreča. Vsak se z vsakim rokuje natanko enkrat. Koliko rokovanj je bilo?

**Podatki:** 5 prijateljev: Ana (A), Bor (B), Cene (C), Dana (D), Eva (E); vsak se z vsakim rokuje natanko enkrat
**Iščemo:** število vseh rokovanj

:::formula
Rokovanje je par dveh različnih oseb. Vrstni red ni pomemben: par AB je isti kot BA, zato ga štejemo samo enkrat.
:::

**Rešitev:**

1. Naredimo preglednico. V vrstice in stolpce napišemo A, B, C, D, E. Polje na presečišču pomeni rokovanje teh dveh oseb.
2. Polj na diagonali (AA, BB, …) ne štejemo, ker se nihče ne rokuje sam s sabo. Polje BA je isto rokovanje kot AB, zato štejemo samo polja nad diagonalo:

| | A | B | C | D | E |
|---|---|---|---|---|---|
| **A** | – | AB | AC | AD | AE |
| **B** | – | – | BC | BD | BE |
| **C** | – | – | – | CD | CE |
| **D** | – | – | – | – | DE |
| **E** | – | – | – | – | – |

3. Preštejemo po vrsticah: Ana se rokuje s 4 prijatelji, Bor še s 3 (z Ano je že štet), Cene še z 2, Dana še z 1, Eva z nikomer novim.
4. Seštejemo: $4 + 3 + 2 + 1 = 10$.
5. Preverimo drugače: vsak od 5 prijateljev stisne roko 4 drugim, to je $5 \cdot 4 = 20$. Vsako rokovanje smo tako šteli dvakrat (enkrat pri vsakem od obeh), zato je rokovanj $20 : 2 = 10$. ✓
6. Odgovor: bilo je $10$ rokovanj.

## Pogoste napake

- **Naštevanje na pamet.** Če možnosti naštevaš brez reda, kakšno izpustiš ali zapišeš dvakrat. *Pravilno:* najprej določi prvo izbiro in ob njej naštej vse druge, nato vzemi naslednjo. Še bolje: nariši drevo ali preglednico.
- **Seštevanje namesto množenja.** Pri 3 majicah in 2 parih hlač nekateri izračunajo $3 + 2 = 5$. To je le število oblačil v omari, ne število oblek. Vsako majico lahko kombiniraš z vsakimi hlačami, zato je oblek $3 \cdot 2 = 6$.
- **Prezrt pogoj, da se izbira ne ponovi.** Pri dvomestnih številih iz števk $1, 2, 3$ brez ponavljanja ni $3 \cdot 3 = 9$ števil, ampak $3 \cdot 2 = 6$, ker druga števka ne sme biti enaka prvi. *Pravilno:* pri vsakem koraku se vprašaj, katere izbire so še na voljo.
- **Ničla na prvem mestu.** Število $05$ ni dvomestno, ampak je to število $5$. Če sestavljaš števila iz števk z ničlo, ničla ne sme biti na prvem mestu.
- **Dvojno štetje parov.** Pri rokovanju ali tekmah »vsak z vsakim« sta AB in BA ista dvojica. Če ju šteješ obe, dobiš dvakrat preveč. *Pravilno:* štej samo polja nad diagonalo preglednice ali dobljeno število deli z $2$.

## Povzetek

- Kombinatorična situacija: izbiramo v več korakih; ena možnost je en celoten izbor.
- Drevesni prikaz: v vsakem koraku iz vsake veje narišemo veje za vse izbire; vsaka pot do konca je ena možnost.
- Pri dveh korakih je pregledna tudi preglednica: vsako polje je ena možnost.
- Če je v vsakem koraku enako število izbir: število možnosti $= a \cdot b \cdot c \cdot \ldots$
- Če se izbira ne sme ponoviti, je v naslednjem koraku izbir za ena manj (npr. $3 \cdot 2 \cdot 1 = 6$).
- Število se ne začne z $0$.
- Pri parih, kjer vrstni red ni pomemben (rokovanje), vsak par štejemo samo enkrat.

## Drugače: Na sliki

Predstavljaj si drevo, položeno na bok. Na levi je ena sama točka, deblo. Iz nje rastejo tri debele veje, za vsako majico ena: rdeča, modra in zelena. Na konec vsake debele veje pritrdimo dve tanjši vejici, eno za kavbojke in eno za kratke hlače. Na desnem robu slike je zdaj šest konic, ki so razporejene ena pod drugo. Ob vsako konico napišemo celotno pot, na primer »rdeča, kratke«.

Če bi Nika dobila še četrto majico, bi iz debla zrasla še ena debela veja z dvema vejicama, in konic bi bilo $8$. Če bi dobila še ene hlače, bi na vsako debelo vejo dodali po eno vejico, in konic bi bilo $3 \cdot 3 = 9$. Na sliki se torej lepo vidi, zakaj množimo: drevo ima toliko »nadstropij«, kolikor je korakov, in vsako nadstropje pomnoži število konic.

V interaktivni simulaciji spodaj lahko dodajaš in odvzemaš izbire ter opazuješ, kako se število konic spreminja.

## Drugače: Iz vsakdanjega življenja

Pomisli na malico v šolski kuhinji. Kuharica ponudi 2 vrsti kruha, 3 namaze in 2 napitka (čaj ali mleko). Koliko različnih malic je mogoče?

Za vsak kruh lahko izbereš kateri koli namaz, to je $2 \cdot 3 = 6$ sendvičev. K vsakemu od teh 6 sendvičev lahko vzameš čaj ali mleko, zato je malic $6 \cdot 2 = 12$. Če bi hotela kuharica vsak dan ponuditi drugačno kombinacijo, bi jih imela za 12 šolskih dni, torej za dva tedna in še dva dni.

Podobno je s kodno ključavnico za kolo, ki ima tri kolesca s števkami od $0$ do $9$. Na vsakem kolescu je $10$ izbir in števke se lahko ponavljajo, zato je kod $10 \cdot 10 \cdot 10 = 1000$, od $000$ do $999$. Tat, ki bi poskušal vse kode, bi imel veliko dela. Če bi ključavnica imela samo dve kolesci, bi bilo kod le $100$, zato so ključavnice z več kolesci varnejše.

## Drugače: Korak za korakom s številkami

Postopek, ki ga lahko uporabiš pri vsaki nalogi:

1. **Razdeli izbiro na korake.** Pri triomestnem številu iz števk $1, 2, 3$ brez ponavljanja so koraki: stotice, desetice, enice.
2. **Pri vsakem koraku preštej izbire.** Stotice: $3$ izbire. Desetice: ena števka je že porabljena, ostaneta $2$. Enice: ostane $1$.
3. **Nariši drevo** ali vsaj začetek drevesa: iz začetka 3 veje, iz vsake 2, iz vsake od teh 1.
4. **Naštej možnosti po vrsti:** $123, 132, 213, 231, 312, 321$.
5. **Preštej:** $6$ možnosti.
6. **Preveri z množenjem:** $3 \cdot 2 \cdot 1 = 6$. ✓
7. **Odgovori v stavku:** Sestavimo lahko $6$ različnih triomestnih števil.

Če se števke lahko ponavljajo, se spremeni samo 2. korak: pri vsakem mestu so $3$ izbire, zato je števil $3 \cdot 3 \cdot 3 = 27$. Vseh 27 števil ni treba pisati, dovolj je, da razumeš, kako drevo raste.

## Drugače: Bolj natančno

Zakaj smemo množiti, kadar je v vsakem koraku enako število izbir? V drevesu iz vsake veje prvega koraka zraste enako veliko poddrevo. Če je v prvem koraku $a$ vej in iz vsake zraste $b$ novih, imamo $a$ enakih skupin po $b$ konic, kar je po definiciji množenja $a \cdot b$ konic. Temu pravimo **pravilo produkta**.

Pravilo velja tudi, ko se izbire ne smejo ponoviti. Res se spremeni, *katere* izbire ostanejo, a *koliko* jih ostane, je pri vsaki veji enako. Pri dvomestnih številih iz $1, 2, 3$ brez ponavljanja ostaneta po izbiri $1$ števki $2$ in $3$, po izbiri $2$ pa števki $1$ in $3$, a vsakič sta $2$.

Pravilo pa ne velja, ko je število izbir odvisno od prejšnje izbire. Pri dvomestnih številih iz $0, 1, 2, 3$ s ponavljanjem je za desetice $3$ izbire ($0$ ni dovoljena), za enice pa $4$, torej $3 \cdot 4 = 12$ števil; to še gre. Če pa bi zahtevali, da je druga števka večja od prve, bi bilo po prvi števki $1$ še $2$ izbiri ($2$ ali $3$), po $2$ le $1$ izbira in po $3$ nobena. Takrat množenje ne pomaga, možnosti seštejemo po vejah: $2 + 1 + 0 = 3$ (števila $12, 13, 23$). Drevo deluje vedno, bližnjica le včasih.

## Preveri se

? V slaščičarni imajo 4 okuse sladoleda in 2 vrsti kornetov. Koliko različnih kornetov z eno kepico sladoleda lahko kupiš?
- $6$
+ $8$
- $16$
- $2$
> Vsak okus lahko daš v vsako vrsto korneta: $4 \cdot 2 = 8$. Rezultat $6$ dobiš, če števili napačno sešteješ.

? Kovanec vržemo dvakrat zapored in zapišemo, ali je padel grb (G) ali številka (Š). Koliko različnih izidov je mogočih?
- $2$
- $3$
+ $4$
> Izidi so GG, GŠ, ŠG in ŠŠ. Izida GŠ in ŠG sta različna, ker se razlikujeta po tem, kaj je padlo v prvem metu.

? Koliko različnih triomestnih števil lahko sestaviš iz števk $1$, $5$ in $7$, če se števka v istem številu ne ponovi?
- $3$
+ $6$
- $9$
- $27$
> Za stotice so $3$ izbire, za desetice $2$, za enice $1$: $3 \cdot 2 \cdot 1 = 6$. To so $157, 175, 517, 571, 715, 751$.

? Na turnirju igrajo 4 ekipe. Vsaka ekipa igra z vsako drugo natanko eno tekmo. Koliko tekem odigrajo?
- $4$
+ $6$
- $12$
- $16$
> Prva ekipa igra s tremi, druga še z dvema, tretja še z eno: $3 + 2 + 1 = 6$. Rezultat $12$ dobiš, če vsako tekmo šteješ dvakrat.

:::simboli
\text{število možnosti} | število vseh možnosti | \text{število možnosti} = a \cdot b \cdot c \cdot \ldots | | pravilo produkta, če je v vsakem koraku enako število izbir
a, \text{izbire v 1. koraku} | število izbir v 1. koraku | |
b, \text{izbire v 2. koraku} | število izbir v 2. koraku | |
c | število izbir v 3. koraku | |
:::
