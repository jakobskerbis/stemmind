---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

»Paglavci izločajo amonijak, odrasle žabe sečnino,« pravi sošolec ob mlaki, ki se je v poletni suši skrčila na lužo. »Pri transaminaciji aminokislina izgubi amino skupino, zato se sprosti amonijak. Ledvice ga potem predelajo v sečnino.«

V tej trditvi sta dve napaki, in obe sta pomembni. Amonijak ($\mathrm{NH_3}$, v celici večinoma $\mathrm{NH_4^+}$) je strupen že v majhnih koncentracijah, posebej za živčevje. Paglavec v vodi ga brez težav izplakne skozi škrge. Žaba na kopnem ga ne more, saj bi za redčenje porabila preveč vode. Zato ga v jetrih pretvori v sečnino, ki je manj strupena in se lahko izloči v bolj koncentriranem urinu.

Ko boš razumel, kje se amino skupina sprosti in kje nastane sečnina, boš znal sošolcu odgovoriti. Hkrati boš videl, zakaj sesalci za izločanje dušika plačujejo z ATP.

## Razlaga

Beljakovine v telesu se stalno razgrajujejo in obnavljajo. Aminokislin ne moremo shraniti kot rezervo, kot shranimo glukozo v glikogen ali maščobne kisline v trigliceride. Odvečne aminokisline zato razgradimo. Ogljikov skelet je uporabno gorivo, dušik pa moramo varno odstraniti.

**1. Transaminacija: prenos, ne odstranitev.** Spomni se kinaze. Heksokinaza prenese fosfatno skupino z ATP na glukozo, a prost fosfat se ob tem ne pojavi. Fosfat samo zamenja nosilca.

Transaminacija dela enako z amino skupino. **Aminotransferaza** (transaminaza) prenese amino skupino z aminokisline na **α-ketokislino**, najpogosteje na α-ketoglutarat:

$$\text{aminokislina} + \alpha\text{-ketoglutarat} \rightleftharpoons \text{α-ketokislina} + \text{glutamat}$$

Razlika od heksokinaze: ta porabi ATP in reakcija je praktično nepovratna. Transaminacija ne porabi ATP in je povratna, ker se ena C–N vez pretrga, enaka pa nastane drugje.

Amino skupino med prenosom začasno drži koencim **piridoksal-5'-fosfat** (PLP), ki nastane iz vitamina $\mathrm{B_6}$. PLP sprejme amino skupino in postane piridoksamin fosfat; ta jo nato odda α-ketokislini.

:::premisli
Celica ima 100 molekul alanina in 100 molekul α-ketoglutarata. Koliko amino skupin je v celici po popolni transaminaciji?
---
Še vedno 100. Transaminacija amino skupine samo premesti z alanina na glutamat. Za odstranitev dušika je potreben drug korak.
:::

**2. Oksidativna deaminacija: tu se amonijak res sprosti.** Glutamat zbere amino skupine skoraj vseh aminokislin. V mitohondrijih jetrnih celic **glutamat dehidrogenaza** odcepi amino skupino kot $\mathrm{NH_4^+}$:

$$\text{glutamat} + \mathrm{NAD^+} + \mathrm{H_2O} \to \alpha\text{-ketoglutarat} + \mathrm{NH_4^+} + \mathrm{NADH} + \mathrm{H^+}$$

Primerjava obeh korakov:

| Lastnost | transaminacija | oksidativna deaminacija |
|---|---|---|
| encim | aminotransferaze, PLP | glutamat dehidrogenaza |
| kaj se zgodi z $\mathrm{NH_2}$ | prenese se | odcepi se kot $\mathrm{NH_4^+}$ |
| oksidacija | ne | da, nastane NADH |
| kje | skoraj vsa tkiva | predvsem mitohondriji jeter |

Sošolčeva prva napaka je zdaj jasna: amonijak se ne sprosti pri transaminaciji, ampak pri deaminaciji glutamata.

**3. Cikel sečnine ob citratnem ciklu.** Citratni cikel že poznaš: nosilec oksaloacetat sprejme acetilno skupino, po krogu reakcij pa se oksaloacetat obnovi. Cikel sečnine (Krebs in Henseleit, 1932) deluje po istem načelu. Nosilec je tu **ornitin**, ki sprejme skupino z dušikom, na koncu pa se obnovi.

Koraki potekajo v jetrih, prva dva v mitohondriju, ostali v citosolu:

1. **Karbamoil fosfat sintetaza I:** $\mathrm{NH_4^+} + \mathrm{HCO_3^-} + 2\,\mathrm{ATP} \to$ karbamoil fosfat $+ 2\,\mathrm{ADP} + \mathrm{P_i}$. Prvi dušik vstopi.
2. **Ornitin transkarbamoilaza:** karbamoil fosfat + ornitin → citrulin. Citrulin zapusti mitohondrij.
3. **Argininosukcinat sintetaza:** citrulin + aspartat + ATP → argininosukcinat + AMP + $\mathrm{PP_i}$. Drugi dušik vstopi z **aspartatom**.
4. **Argininosukcinat liaza:** argininosukcinat → arginin + fumarat.
5. **Arginaza:** arginin + $\mathrm{H_2O}$ → **sečnina** + ornitin. Ornitin se vrne v mitohondrij.

Skica v besedah:

```
   NH4+ + HCO3- (2 ATP)
          |
   karbamoil fosfat
          |
ornitin --> citrulin
   ^          |  + aspartat (ATP)
   |          v
arginin <- argininosukcinat
   |                 |
 sečnina          fumarat
```

| Lastnost | citratni cikel | cikel sečnine |
|---|---|---|
| obnovljeni nosilec | oksaloacetat | ornitin |
| kaj vstopi | acetil-CoA | $\mathrm{NH_4^+}$, $\mathrm{HCO_3^-}$, aspartat |
| energija | nastaja (NADH, $\mathrm{FADH_2}$, GTP) | porabi se (3 ATP) |
| kje | mitohondrij | mitohondrij in citosol |

Za eno molekulo sečnine celica porabi 3 molekule ATP, vendar kar 4 visokoenergijske vezi, ker se ATP v koraku 3 razgradi do AMP. Sečnina, $\mathrm{CO(NH_2)_2}$, nosi **dva** atoma dušika: enega iz $\mathrm{NH_4^+}$ in enega iz aspartata.

Cikla sta povezana. Fumarat se pretvori v malat in oksaloacetat, ta pa s transaminacijo spet v aspartat. Druga sošolčeva napaka: sečnina nastaja v **jetrih**, ledvice jo le izločijo.

:::premisli
Sošolec sklepa: za 1000 molekul sečnine morajo jetra dobiti 1000 molekul ornitina iz hrane. Koliko ornitina se v resnici neto porabi?
---
Nič. Ornitin se v vsakem obratu obnovi, tako kot oksaloacetat v citratnem ciklu. Zato ga zadošča majhna količina.
:::

**4. Kam gre ogljikov skelet.** Po transaminaciji ostane α-ketokislina. Iz alanina nastane piruvat, iz aspartata oksaloacetat, iz glutamata α-ketoglutarat. Takim aminokislinam pravimo **glukogene**, ker iz njih lahko nastane glukoza. Levcin in lizin dajeta le acetil-CoA ali acetoacetat. Iz njiju lahko nastanejo ketonska telesa, glukoza pa ne, zato sta **ketogeni**.

## Rešeni primeri

### Primer 1: transaminacija alanina

V jetrih alanin reagira z α-ketoglutaratom ob encimu alanin aminotransferazi (ALT). Kateri produkti nastanejo?

**Podatki:** alanin (stranska veriga $\mathrm{-CH_3}$), α-ketoglutarat, encim ALT s koencimom PLP
**Iščemo:** oba produkta

:::formula
aminokislina$_1$ + α-ketokislina$_2$ $\rightleftharpoons$ α-ketokislina$_1$ + aminokislina$_2$
:::

**Rešitev:**

1. Alanin odda amino skupino; na njenem mestu ostane keto skupina. Ogljikov skelet s tremi C-atomi je **piruvat**.
2. α-ketoglutarat sprejme amino skupino in postane **glutamat**.
3. Odgovor: alanin + α-ketoglutarat $\rightleftharpoons$ piruvat + glutamat. Amonijak ne nastane.

### Primer 2: pljučarica v suši

Afriška pljučarica med sušnim obdobjem obmiruje, zakopana v posušenem blatu. Vode za izplakovanje amonijaka ni, zato dušik shranjuje kot sečnino. Recimo, da v enem dnevu iz aminokislin odstrani $0{,}84\,\mathrm{g}$ dušika. Koliko sečnine nastane in koliko ATP porabi?

**Podatki:** $m(\mathrm{N}) = 0{,}84\,\mathrm{g}$, $M(\mathrm{N}) = 14\,\mathrm{g/mol}$, $M(\text{sečnina}) = 60\,\mathrm{g/mol}$, 3 ATP na molekulo sečnine
**Iščemo:** maso sečnine in množino ATP

:::formula
$n(\mathrm{N}) = \dfrac{m(\mathrm{N})}{M(\mathrm{N})}$, $n(\text{sečnina}) = \dfrac{n(\mathrm{N})}{2}$, $n(\mathrm{ATP}) = 3 \cdot n(\text{sečnina})$
:::

**Rešitev:**

1. Množina dušika: $\dfrac{0{,}84\,\mathrm{g}}{14\,\mathrm{g/mol}} = 0{,}06\,\mathrm{mol}$.
2. Vsaka sečnina nosi dva dušika: $\dfrac{0{,}06\,\mathrm{mol}}{2} = 0{,}03\,\mathrm{mol}$ sečnine.
3. Masa: $0{,}03\,\mathrm{mol} \cdot 60\,\mathrm{g/mol} = 1{,}8\,\mathrm{g}$.
4. ATP: $3 \cdot 0{,}03\,\mathrm{mol} = 0{,}09\,\mathrm{mol}$.
5. Odgovor: nastane $1{,}8\,\mathrm{g}$ sečnine, pljučarica za to porabi $0{,}09\,\mathrm{mol}$ ATP. To je cena za preživetje brez vode.

### Primer 3: od sečnine nazaj do beljakovin

Odrasel človek v 24 urah izloči $30\,\mathrm{g}$ sečnine. Beljakovine vsebujejo povprečno $16\,\%$ dušika. Koliko beljakovin se je razgradilo, če ves dušik izhaja iz njih?

**Podatki:** $m(\text{sečnina}) = 30\,\mathrm{g}$, $M(\text{sečnina}) = 60\,\mathrm{g/mol}$, $M(\mathrm{N}) = 14\,\mathrm{g/mol}$, delež N v beljakovinah $16\,\%$
**Iščemo:** maso razgrajenih beljakovin

:::formula
$m(\mathrm{N}) = 2 \cdot \dfrac{m(\text{sečnina})}{M(\text{sečnina})} \cdot M(\mathrm{N})$, $m(\text{beljakovine}) = \dfrac{m(\mathrm{N})}{0{,}16}$
:::

**Rešitev:**

1. Množina sečnine: $\dfrac{30\,\mathrm{g}}{60\,\mathrm{g/mol}} = 0{,}5\,\mathrm{mol}$.
2. Dušika je dvakrat več, ker ima sečnina dva N: $1\,\mathrm{mol}$, to je $14\,\mathrm{g}$.
3. Beljakovine: $\dfrac{14\,\mathrm{g}}{0{,}16} = 87{,}5\,\mathrm{g}$ (deljenje z $0{,}16$ je isto kot množenje s $6{,}25$).
4. Odgovor: razgradilo se je približno $88\,\mathrm{g}$ beljakovin (dve veljavni mesti, kot podatki).

### Primer 4: zdaj ti

Raziskovalci podgani dajo alanin, ki ima v amino skupini težki izotop $^{15}\mathrm{N}$. Ali lahko v sečnini najdejo molekule, ki imajo $^{15}\mathrm{N}$ na obeh dušikih?

**Podatki:** alanin z $^{15}\mathrm{N}$, encimi ALT, AST (aspartat aminotransferaza), glutamat dehidrogenaza in cikel sečnine
**Iščemo:** pot $^{15}\mathrm{N}$ do obeh dušikov sečnine

:::formula
ALT: alanin + α-ketoglutarat → piruvat + glutamat; AST: glutamat + oksaloacetat → α-ketoglutarat + aspartat
:::

**Rešitev:**

1. ALT prenese $^{15}\mathrm{N}$ z alanina na glutamat.
2. Pot do prvega dušika: glutamat dehidrogenaza sprosti $^{15}\mathrm{NH_4^+}$, ta vstopi v karbamoil fosfat.
3. Poišči sam še pot do drugega dušika, nato preveri:

:::premisli
Kako pride $^{15}\mathrm{N}$ na drugi dušik sečnine?
---
Z AST: označeni glutamat preda amino skupino oksaloacetatu, nastane aspartat s $^{15}\mathrm{N}$. Ta v koraku 3 cikla vnese drugi dušik. Ker oba dušika izhajata iz glutamata, so molekule z dvema $^{15}\mathrm{N}$ možne.
:::

## Pogoste napake

- **»Pri transaminaciji se sprosti amonijak.«** Transaminacija amino skupino le prenese na α-ketokislino; število amino skupin se ne spremeni. $\mathrm{NH_4^+}$ se sprosti pri oksidativni deaminaciji glutamata.
- **»Sečnina nastaja v ledvicah.«** Ker jo najdemo v urinu, jo pripišemo ledvicam. Cikel sečnine poteka v jetrih; kri jo nato prinese v ledvice.
- **»Oba dušika sečnine sta iz prostega amonijaka.«** Prvi pride iz $\mathrm{NH_4^+}$ prek karbamoil fosfata, drugi iz aspartata. Pri računanju šteje, da sečnina nosi dva N.
- **»Cikel sečnine daje energijo kot citratni cikel.«** Ker sta oba cikla, ju zamešamo. Cikel sečnine porabi 3 ATP (4 visokoenergijske vezi) na molekulo sečnine.
- **»Z dušikom se izloči cela aminokislina.«** Izloči se le dušik; ogljikov skelet postane piruvat, oksaloacetat, α-ketoglutarat ali acetil-CoA in se porabi za energijo ali glukozo.

## Povzetek

- Aminokislin ne skladiščimo; odvečne razgradimo, dušik izločimo, ogljikov skelet porabimo.
- Transaminacija (aminotransferaze, koencim PLP iz vitamina $\mathrm{B_6}$) prenese amino skupino na α-ketoglutarat, nastane glutamat; reakcija je povratna in ne sprosti $\mathrm{NH_4^+}$.
- Glutamat dehidrogenaza v jetrnih mitohondrijih sprosti $\mathrm{NH_4^+}$ (oksidativna deaminacija).
- Cikel sečnine v jetrih: karbamoil fosfat + ornitin → citrulin; + aspartat → argininosukcinat → arginin + fumarat; arginaza → sečnina + ornitin. Porabi 3 ATP (4 visokoenergijske vezi).
- Sečnina ima dva N: iz $\mathrm{NH_4^+}$ in iz aspartata. Ornitin se obnovi kot oksaloacetat v citratnem ciklu.
- Mnoge vodne živali (ribe kostnice, paglavci) izločajo amonijak, kopenski sesalci in odrasle dvoživke sečnino.

## Drugače: Na sliki

Nariši dve kolesi, ki se dotikata, kot pri kolesu z dvema zobnikoma.

- **Levo kolo** je cikel sečnine. Na vrhu ornitin. Ob desnem robu dve puščici navznoter: zgoraj karbamoil fosfat (prvi N), spodaj aspartat (drugi N). Na dnu puščica navzven: **sečnina**.
- **Desno kolo** je citratni cikel. Na mestu, kjer se kolesi dotikata, izstopi fumarat iz levega kolesa in vstopi v desno. Desno kolo iz njega naredi oksaloacetat.
- Oksaloacetat s transaminacijo postane aspartat in se vrne v levo kolo.

Slika pokaže, zakaj se cikla imenujeta tudi »Krebsovo dvokolo«: ogljik kroži med njima, dušik pa vstopa le v levo kolo in ga zapušča kot sečnina.

## Drugače: Iz vsakdanjega življenja

**Štafeta.** Transaminacija je predaja štafetne palice. Palica (amino skupina) gre iz roke v roko, a nikoli ne pade na tla. Pade šele na cilju, pri glutamat dehidrogenazi, kjer jo pobere cikel sečnine.

**Hlev in plenice.** V hlevu ali pri polni plenici zadiši po amonijaku. Bakterije z encimom ureazo razgradijo sečnino nazaj v $\mathrm{NH_3}$ in $\mathrm{CO_2}$. To je obratno od tistega, kar so naredila jetra, a brez povrnitve porabljenega ATP.

**Gnojilo.** Sečnina je eno najpogostejših dušikovih gnojil. V tleh jo bakterije spet spremenijo v amonij, ki ga rastline vgradijo v svoje aminokisline. Dušik tako kroži med živalmi, tlemi in rastlinami.

## Preveri se

? Katera trditev o transaminaciji je pravilna?
- Pri transaminaciji se sprosti $\mathrm{NH_4^+}$.
~ Amino skupina se samo prenese na α-ketokislino; $\mathrm{NH_4^+}$ se sprosti šele pri deaminaciji glutamata.
- Transaminacija porabi ATP, zato je nepovratna.
~ To velja za heksokinazo, ne za transaminaze: ena C–N vez se pretrga, enaka nastane, zato je reakcija povratna.
+ Koencim je piridoksal-5'-fosfat, ki začasno sprejme amino skupino.
- Transaminacija poteka le v ledvicah.
~ Aminotransferaze so v skoraj vseh tkivih, največ v jetrih in mišicah.
> PLP iz vitamina $\mathrm{B_6}$ prevzame amino skupino (postane piridoksamin fosfat) in jo preda α-ketokislini.

? Koliko molov ATP porabijo jetra, ko v sečnino pretvorijo $4\,\mathrm{mol}$ dušika?
- $12\,\mathrm{mol}$
~ To je 3 ATP na vsak dušik. Ena sečnina nosi dva N, zato je sečnine le $2\,\mathrm{mol}$.
+ $6\,\mathrm{mol}$
- $3\,\mathrm{mol}$
~ Tako dobiš, če računaš le eno sečnino. Iz $4\,\mathrm{mol}$ N nastaneta $2\,\mathrm{mol}$ sečnine.
- $4\,\mathrm{mol}$
~ Število ATP ni enako številu dušikov; vsaka sečnina stane 3 ATP.
> $4\,\mathrm{mol}$ N da $2\,\mathrm{mol}$ sečnine, vsaka porabi 3 ATP: $2 \cdot 3 = 6\,\mathrm{mol}$ ATP.

? Študentka računa beljakovine iz $24\,\mathrm{g}$ sečnine: (1) $n = \dfrac{24\,\mathrm{g}}{60\,\mathrm{g/mol}} = 0{,}4\,\mathrm{mol}$. (2) Dušika je $0{,}4\,\mathrm{mol}$, torej $5{,}6\,\mathrm{g}$. (3) Beljakovin je $\dfrac{5{,}6\,\mathrm{g}}{0{,}16} = 35\,\mathrm{g}$. Kje je napaka?
- V koraku 1: molska masa sečnine ni $60\,\mathrm{g/mol}$.
~ $M(\mathrm{CO(NH_2)_2}) = 12 + 16 + 2 \cdot (14 + 2) = 60\,\mathrm{g/mol}$; korak je pravilen.
+ V koraku 2: sečnina ima dva dušika, zato je N $0{,}8\,\mathrm{mol}$.
- V koraku 3: deliti bi morala s $16$, ne z $0{,}16$.
~ Delež $16\,\%$ je $0{,}16$; deljenje s $16$ bi dalo stokrat premalo.
> Pravilno: $0{,}8\,\mathrm{mol}$ N $= 11{,}2\,\mathrm{g}$, beljakovin $\dfrac{11{,}2\,\mathrm{g}}{0{,}16} = 70\,\mathrm{g}$.

? Kaj je skupno citratnemu ciklu in ciklu sečnine?
- Oba proizvajata ATP.
~ Citratni cikel daje NADH, $\mathrm{FADH_2}$ in GTP; cikel sečnine ATP porablja.
- Oba v celoti potekata v mitohondriju.
~ Citratni cikel da, cikel sečnine le deloma; trije koraki so v citosolu.
+ V obeh se nosilna molekula na koncu obnovi.
- Oba sprejmeta dušik.
~ Dušik sprejema le cikel sečnine; v citratni cikel vstopa acetil-CoA.
> Oksaloacetat oziroma ornitin se v vsakem obratu obnovi, zato zadošča majhna količina nosilca.

? Paglavec izloča amonijak, odrasla žaba na kopnem sečnino. Zakaj se izločanje spremeni?
- Ker paglavec še nima jeter.
~ Paglavec jetra ima; spremeni se izražanje encimov cikla sečnine.
+ Ker je amonijak strupen in ga je treba močno redčiti z vodo, ki je na kopnem primanjkuje.
- Ker odrasla žaba jé manj beljakovin.
~ Količina beljakovin vpliva na količino dušika, ne na obliko, v kateri se izloča.
- Ker iz sečnine žaba pridobi energijo.
~ Pretvorba v sečnino energijo porabi (3 ATP na molekulo), ne daje je.
> Sečnina je manj strupena in jo lahko izločimo z manj vode. Žaba za to plača z ATP, prihrani pa vodo.
