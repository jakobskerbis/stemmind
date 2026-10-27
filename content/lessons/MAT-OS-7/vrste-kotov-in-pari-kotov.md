---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz nižjih razredov že znaš narisati kot, ga izmeriti s kotomerom in veš, da je vsota notranjih kotov trikotnika $180^\circ$. Znaš tudi odštevati in reševati preproste enačbe.

Kote srečaš povsod: pri odpiranju vrat, pri škarjah, na križišču cest, pri strešnih tramovih. Pogosto ne moreš (ali ne želiš) vsakega kota meriti posebej. Če pa poznaš **zakonitosti med pari kotov**, iz enega znanega kota izračunaš več drugih. To je osnova za računanje s koti v trikotnikih in štirikotnikih, ki ga boš potreboval v naslednjih temah.

## Razlaga

**1. Kaj je kot.** Kot nastane, kadar iz iste točke (**temena**) izhajata dva poltraka (**kraka**). Kote označujemo z grškimi črkami $\alpha$, $\beta$, $\gamma$, $\delta$ in merimo v stopinjah ($^\circ$).

**2. Vrste kotov po velikosti.**

| Vrsta | Velikost |
|---|---|
| ničelni kot | $0^\circ$ |
| ostri kot | med $0^\circ$ in $90^\circ$ |
| pravi kot | $90^\circ$ |
| topi kot | med $90^\circ$ in $180^\circ$ |
| iztegnjeni kot | $180^\circ$ |
| izbočeni kot | med $180^\circ$ in $360^\circ$ |
| polni kot | $360^\circ$ |

**3. Sosednja kota.** Sosednja kota imata skupno teme in en skupen krak, drugače pa se ne prekrivata.

**4. Sokota.** Sokota sta sosednja kota, katerih drugi (nezdruženi) kraka ležita na isti premici. Skupaj tvorita iztegnjeni kot, zato je

$$\alpha + \beta = 180^\circ.$$

Torej: $\beta = 180^\circ - \alpha$.

Za primerjavo: kota, ki skupaj dasta $90^\circ$, sta **komplementarna** kota (dopolnjujeta se do pravega kota). Ne zamenjaj ju s sokotoma.

**5. Sovršna kota.** Ko se sekata dve premici, nastanejo štirje koti. Kota, ki si ležita nasproti drug drugemu (imata skupno teme, kraka enega sta podaljška krakov drugega), sta **sovršna kota**. Sovršna kota sta **enaka**:

$$\alpha = \gamma.$$

Ob preseku dveh premic sta torej dva para enakih sovršnih kotov, vsak kot pa je sokot svojima sosednjima kotoma.

**6. Kota z vzporednimi kraki.** Kota imata vzporedne krake, če je vsak krak prvega kota vzporeden z ustreznim krakom drugega kota. Takrat velja:

- če sta **oba ostra** ali **oba topa**, sta kota **enaka**: $\alpha = \beta$;
- če je **en ostri, drugi topi**, sta kota **sokota**: $\alpha + \beta = 180^\circ$.

Pri nalogah si torej vedno najprej odgovori: *je kot ostri ali topi?* Šele potem veš, ali sta enaka ali se dopolnita do $180^\circ$.

## Rešeni primeri

### Primer 1: vrste kotov in sokot

a) Določi vrsto kotov: $35^\circ$, $90^\circ$, $120^\circ$, $180^\circ$, $250^\circ$.

1. $35^\circ$ je manj od $90^\circ$, torej **ostri**.
2. $90^\circ$ je **pravi**.
3. $120^\circ$ je med $90^\circ$ in $180^\circ$, torej **topi**.
4. $180^\circ$ je **iztegnjeni**.
5. $250^\circ$ je med $180^\circ$ in $360^\circ$, torej **izbočeni**.

b) Kot $\alpha = 112^\circ$ ima sokot $\beta$. Koliko meri $\beta$?

1. Sokota skupaj dasta iztegnjeni kot, zato je $\alpha + \beta = 180^\circ$.
2. Izrazimo: $\beta = 180^\circ - 112^\circ = 68^\circ$.
3. Preverimo: $112^\circ + 68^\circ = 180^\circ$. ✓ Ker je $\alpha$ topi, mora biti njegov sokot ostri, in $68^\circ$ je res ostri.

### Primer 2: dve premici se sekata

Premici se sekata. Eden od kotov meri $54^\circ$. Koliko merijo ostali trije koti?

1. Označimo kote po krogu: $\alpha = 54^\circ$, $\beta$, $\gamma$, $\delta$.
2. Kot $\gamma$ je sovršen kotu $\alpha$, zato je $\gamma = 54^\circ$ (sovršna kota sta enaka).
3. Kot $\beta$ je sokot kota $\alpha$: $\beta = 180^\circ - 54^\circ = 126^\circ$.
4. Kot $\delta$ je sovršen kotu $\beta$, zato je $\delta = 126^\circ$.
5. Preverimo: vsota vseh štirih kotov mora biti polni kot: $54^\circ + 126^\circ + 54^\circ + 126^\circ = 360^\circ$. ✓

### Primer 3 (težji): kota z vzporednimi kraki in enačba

Kota $\alpha$ in $\beta$ imata vzporedne krake. Kot $\alpha = (4x - 10)^\circ$ je ostri, kot $\beta = (5x + 10)^\circ$ je topi. Določi $x$ in oba kota.

1. **Katera zveza velja?** En kot je ostri, drugi topi, zato sta kota sokota: $\alpha + \beta = 180^\circ$.
2. **Enačba:** $(4x - 10) + (5x + 10) = 180$.
3. **Poenostavimo:** $9x = 180$, torej $x = 20$.
4. **Kota:** $\alpha = 4 \cdot 20 - 10 = 70^\circ$, $\beta = 5 \cdot 20 + 10 = 110^\circ$.
5. **Preverimo:** $70^\circ$ je res ostri, $110^\circ$ res topi in $70^\circ + 110^\circ = 180^\circ$. ✓

## Pogoste napake

- **Zamenjava sokotov in komplementarnih kotov.** Sokota dasta $180^\circ$, komplementarna kota $90^\circ$. Pred računanjem preveri, ali sta kota na premici ali v pravem kotu.
- **Sovršna kota proglasiš za sokota.** Sovršna kota sta *enaka*, sokota pa se *seštevata* v $180^\circ$.
- **Kota z vzporednimi kraki sta vedno enaka.** Ni res. Enaka sta samo, če sta oba ostra ali oba topa. Če je en ostri in drugi topi, sta sokota.
- **Odčitavanje kota s slike brez preverjanja.** Slika ni natančna. Vrsto kota določaš po številu, ne po videzu.
- **Pozabljena preveritev.** Pri sokotih vedno sešteješ in preveriš, da je vsota $180^\circ$. Pri štirih kotih ob preseku dveh premic mora biti vsota $360^\circ$.

## Povzetek

- Vrste kotov: ostri ($<90^\circ$), pravi ($90^\circ$), topi ($90^\circ$ do $180^\circ$), iztegnjeni ($180^\circ$), izbočeni ($180^\circ$ do $360^\circ$), polni ($360^\circ$).
- **Sokota**: sosednja kota na premici, $\alpha + \beta = 180^\circ$.
- **Sovršna kota**: nasprotna kota ob preseku dveh premic, sta enaka.
- **Kota z vzporednimi kraki**: oba ostra ali oba topa, potem sta enaka. En ostri in en topi, potem je $\alpha + \beta = 180^\circ$.
- Komplementarna kota se dopolnjujeta do $90^\circ$.

## Drugače: Na sliki

Predstavljaj si dve dolgi ravni cesti, ki se križata. Na križišču nastanejo štirje koti, kot štiri "rezine" okoli središča.

- Rezini, ki si ležita **nasproti** (čez središče), sta enako veliki. To sta sovršna kota.
- Rezini, ki sta **druga ob drugi**, skupaj zapolnita polovico kroga. To sta sokota ($180^\circ$).

Pri kotih z vzporednimi kraki si predstavljaj, da isti kot nekdo "prestavi" po ravnini, ne da bi ga zavrtel. Njegovi kraki ostanejo vzporedni prvotnim, kot pa se ne spremeni, torej sta enaka. Če kot "obrneš čez glavo" (zrcalno), je dobljeni kot sokot prvotnega.

## Drugače: Iz vsakdanjega življenja

- **Škarje.** Ko odpreš škarje, sta kraka na enem koncu pod kotom $\alpha$. Kot med drugima dvema deloma (ročajema) je s tem sovršen in zato enak. Spremeniš $\alpha$, se spremeni tudi kot med ročajema, a vedno za toliko.
- **Odprta vrata.** Vrata se odpirajo med zaprtim položajem in steno. Kot odprtosti in preostali kot do ravnine stene sta sokota: skupaj dasta $180^\circ$.
- **Prometni znak ali stolp.** Če je na eni strani ulice kot med ulico in stavbo $50^\circ$, sta po preseku dve ulici v križišču pod tem kotom na nasprotnih straneh križišča enaka ($50^\circ$), sosednja pa $130^\circ$.

## Drugače: Korak za korakom s številkami

Recept za naloge s kotoma:

1. Nariši skico in označi znani kot.
2. Vprašaj se: **Kakšna je zveza med kotoma?**

| Položaj | Zveza | Račun |
|---|---|---|
| nasproti ob preseku dveh premic | sovršna | $\beta = \alpha$ |
| drug ob drugem na premici | sokota | $\beta = 180^\circ - \alpha$ |
| skupaj sestavljata pravi kot | komplementarna | $\beta = 90^\circ - \alpha$ |
| vzporedni kraki, oba ostra ali oba topa | enaka | $\beta = \alpha$ |
| vzporedni kraki, en ostri, drugi topi | sokota | $\beta = 180^\circ - \alpha$ |

Primer s številkami: $\alpha = 37^\circ$.

- Sovršni kot: $37^\circ$.
- Sokot: $180^\circ - 37^\circ = 143^\circ$.
- Komplementarni kot: $90^\circ - 37^\circ = 53^\circ$.
- Kot z vzporednimi kraki, ki je topi: $180^\circ - 37^\circ = 143^\circ$.

3. Na koncu preveri vsoto: kota na premici ($180^\circ$), štirje koti okoli točke ($360^\circ$).

## Drugače: Bolj natančno

**Zakaj sta sovršna kota enaka?** Naj se premici sekata in naj bodo $\alpha$, $\beta$, $\gamma$ trije zaporedni koti ob preseku, pri čemer sta $\alpha$ in $\gamma$ sovršna.

- Kota $\alpha$ in $\beta$ sta sokota: $\alpha + \beta = 180^\circ$.
- Kota $\beta$ in $\gamma$ sta sokota: $\beta + \gamma = 180^\circ$.

Obe vsoti sta enaki $180^\circ$, zato je $\alpha + \beta = \beta + \gamma$. Od obeh strani odštejemo $\beta$ in dobimo $\alpha = \gamma$.

**Zakaj se kota z vzporednimi kraki obnašata tako?** Če sta kota enako obrnjena (oba ostra ali oba topa), lahko enega premaknemo vzporedno na drugega in se kraka prekrijeta. Pri tem se velikost kota ne spremeni, zato sta enaka. Če pa je en ostri in drugi topi, je drugi kot enak sokotu prvega (kraka prvega kota podaljšamo čez teme in dobimo ustrezni sokot), zato je njuna vsota $180^\circ$. Strog dokaz bi zahteval še kote ob vzporednicah, ki jih boš spoznal pozneje.

## Preveri se

? Kot $\alpha = 123^\circ$. Koliko meri njegov sokot?
- $67^\circ$
- $237^\circ$
+ $57^\circ$
- $123^\circ$
> Sokota skupaj dasta $180^\circ$: $180^\circ - 123^\circ = 57^\circ$. Rezultat $67^\circ$ dobiš, če računaš z $90^\circ$ (komplementarni kot bi bil tudi nemogoč, saj je $\alpha$ večji od $90^\circ$). $237^\circ$ dobiš z računom $360^\circ - 123^\circ$, $123^\circ$ pa bi bil sovršni kot.

? Premici se sekata. Eden od kotov meri $48^\circ$. Koliko meri njegov sovršni kot?
- $132^\circ$
- $42^\circ$
+ $48^\circ$
> Sovršna kota ob preseku dveh premic sta enaka, zato je odgovor $48^\circ$. Kot $132^\circ$ je sokot, $42^\circ$ pa komplementarni kot.

? Kota $\alpha$ in $\beta$ imata vzporedne krake. Kot $\alpha = 70^\circ$ je ostri, kot $\beta$ je topi. Koliko meri $\beta$?
- $70^\circ$
- $20^\circ$
+ $110^\circ$
- $290^\circ$
> Ker je en kot ostri in drugi topi, sta kota sokota: $\beta = 180^\circ - 70^\circ = 110^\circ$. Odgovor $70^\circ$ bi veljal, če bi bila oba kota ostra ali oba topa.
