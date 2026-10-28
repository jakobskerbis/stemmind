---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz naravoslovja in prejšnje teme že poznaš temperaturo (merimo jo v stopinjah Celzija) in veš, da se snovi pri segrevanju raztezajo. Poznaš tudi pojma masa ($m$, v kilogramih) in energija (v joulih).

Zdaj se vprašamo: **koliko energije moramo dovesti, da se nekaj segreje?** Zakaj se voda v loncu segreva dlje kot kovinska žlica? Zakaj je pesek na plaži opoldne vroč, morje pa precej hladnejše? Zakaj za polno skodelico čaja porabimo več energije kot za pol skodelice? Odgovore da enačba $Q = m \cdot c \cdot \Delta T$, ki jo spoznaš v tej lekciji.

## Razlaga

**1. Toplota.** Toplota $Q$ je energija, ki se zaradi temperaturne razlike prenese s toplejšega telesa na hladnejše. Merimo jo v joulih ($\mathrm{J}$), pogosto tudi v kilojoulih ($1\,\text{kJ} = 1000\,\text{J}$).

**2. Od česa je odvisna toplota za segrevanje?** Od treh stvari:

- **mase** $m$: dvakrat več snovi potrebuje dvakrat več toplote,
- **spremembe temperature** $\Delta T$: dvakrat večji dvig temperature potrebuje dvakrat več toplote,
- **vrste snovi**: različne snovi se ob enaki dovedeni toploti segrejejo različno.

**3. Sprememba temperature.** $\Delta T = T_{\text{konč}} - T_{\text{zač}}$. Pri segrevanju je pozitivna, pri ohlajanju negativna. Razlika temperatur je enaka v stopinjah Celzija in v kelvinih, zato lahko $\Delta T$ računamo kar v $^\circ\text{C}$.

**4. Specifična toplota.** Specifična toplota $c$ pove, koliko toplote potrebuje $1\,\text{kg}$ snovi, da se segreje za $1\,^\circ\text{C}$. Enota je $\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$. Nekaj vrednosti:

| Snov | $c$ v $\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$ |
|---|---|
| voda | $4200$ |
| led | $2100$ |
| aluminij | $900$ |
| železo | $450$ |
| baker | $390$ |

(Vrednosti so zaokrožene, kot v tabelah za osnovno šolo.) Voda ima velik $c$, kovine majhnega: voda se segreva počasi, kovine hitro.

**5. Enačba.**

$$Q = m \cdot c \cdot \Delta T$$

Pri ohlajanju je $\Delta T < 0$, zato je $Q < 0$: telo toploto oddaja. Pogosto računamo samo z absolutno vrednostjo oddane toplote.

**6. Izražanje drugih količin.**

$$c = \frac{Q}{m \cdot \Delta T}, \qquad m = \frac{Q}{c \cdot \Delta T}, \qquad \Delta T = \frac{Q}{m \cdot c}$$

**7. Pazi na enote.** Masa mora biti v kilogramih. Če je podana v gramih, jo pretvoriš: $500\,\text{g} = 0{,}5\,\text{kg}$.

## Rešeni primeri

### Primer 1: segrevanje vode

Koliko toplote potrebuje $2\,\text{kg}$ vode, da se segreje z $20\,^\circ\text{C}$ na $50\,^\circ\text{C}$?

**Podatki:** $m = 2\,\text{kg}$, $T_{\text{zač}} = 20\,^\circ\text{C}$, $T_{\text{konč}} = 50\,^\circ\text{C}$, $c = 4200\,\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$ (voda, iz tabele)
**Iščemo:** toplota $Q$

:::formula
$Q = m \cdot c \cdot \Delta T$, kjer je $\Delta T = T_{\text{konč}} - T_{\text{zač}}$
:::

**Rešitev:**

1. Sprememba temperature: $\Delta T = 50 - 20 = 30\,^\circ\text{C}$. Zakaj? Ker enačba potrebuje razliko, ne končne temperature.
2. Račun: $Q = 2 \cdot 4200 \cdot 30 = 252\,000\,\text{J}$.
3. Odgovor: voda potrebuje $Q = 252\,000\,\text{J} = 252\,\text{kJ}$ toplote.

### Primer 2: ohlajanje kovine

Aluminijast kos mase $500\,\text{g}$ se ohladi s $100\,^\circ\text{C}$ na $20\,^\circ\text{C}$. Koliko toplote odda okolici?

**Podatki:** $m = 500\,\text{g}$, $T_{\text{zač}} = 100\,^\circ\text{C}$, $T_{\text{konč}} = 20\,^\circ\text{C}$, $c = 900\,\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$ (aluminij, iz tabele)
**Iščemo:** oddana toplota $Q$

:::formula
$Q = m \cdot c \cdot \Delta T$, kjer je $\Delta T = T_{\text{konč}} - T_{\text{zač}}$; masa mora biti v $\text{kg}$
:::

**Rešitev:**

1. Pretvorimo maso: $m = 500\,\text{g} = 0{,}5\,\text{kg}$. Zakaj? Ker je enota $c$ vezana na kilograme.
2. Sprememba temperature: $\Delta T = 20 - 100 = -80\,^\circ\text{C}$.
3. Račun: $Q = 0{,}5 \cdot 900 \cdot (-80) = -36\,000\,\text{J}$.
4. Odgovor: telo odda $36\,000\,\text{J} = 36\,\text{kJ}$ toplote (minus pomeni oddajanje).

### Primer 3: iskanje specifične toplote

Kos neznane kovine z maso $2\,\text{kg}$ segrejemo z $15\,^\circ\text{C}$ na $35\,^\circ\text{C}$. Dovedemo mu $18\,000\,\text{J}$ toplote. Katera kovina je to?

**Podatki:** $m = 2\,\text{kg}$, $T_{\text{zač}} = 15\,^\circ\text{C}$, $T_{\text{konč}} = 35\,^\circ\text{C}$, $Q = 18\,000\,\text{J}$
**Iščemo:** specifična toplota $c$ in po tabeli vrsta kovine

:::formula
Iz $Q = m \cdot c \cdot \Delta T$ izrazimo $c = \dfrac{Q}{m \cdot \Delta T}$
:::

**Rešitev:**

1. Iščemo $c$, zato enačbo preoblikujemo: $c = \dfrac{Q}{m \cdot \Delta T}$.
2. $\Delta T = 35 - 15 = 20\,^\circ\text{C}$.
3. Račun: $c = \dfrac{18\,000}{2 \cdot 20} = \dfrac{18\,000}{40} = 450\,\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$.
4. Primerjava s tabelo: to je vrednost za železo.
5. Odgovor: kovina je verjetno železo.

## Pogoste napake

- **Masa v gramih.** Če v enačbo vstaviš $500$ namesto $0{,}5$, je rezultat tisočkrat prevelik.
- **Vstavljanje končne temperature namesto razlike.** V enačbo ne gre $50\,^\circ\text{C}$, ampak $\Delta T = 50 - 20$.
- **Zamenjava zaporedja pri $\Delta T$.** Vedno je končna minus začetna. Če zamenjaš, dobiš napačen predznak.
- **Mešanje pojmov temperatura in toplota.** Temperatura pove, kako je telo toplo (v $^\circ\text{C}$), toplota je energija (v $\mathrm{J}$).
- **Napačna enota za $c$.** Specifična toplota ni v $\mathrm{J}$, ampak v $\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$.

## Povzetek

- Toplota $Q$ je energija, ki se prenese zaradi temperaturne razlike; enota je $\mathrm{J}$.
- Specifična toplota $c$ pove, koliko toplote potrebuje $1\,\text{kg}$ snovi za segretje za $1\,^\circ\text{C}$.
- $Q = m \cdot c \cdot \Delta T$, pri čemer je $\Delta T = T_{\text{konč}} - T_{\text{zač}}$.
- Voda ima veliko specifično toploto ($4200\,\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$), zato se segreva in ohlaja počasi.
- Maso vedno pretvori v kilograme.

## Drugače: Na sliki

Predstavljaj si dve enaki posodi nad enakima gorilnikoma. V eni je $1\,\text{kg}$ vode, v drugi $1\,\text{kg}$ železa. Po eni minuti je železo že zelo vroče, voda pa komaj topla.

Sliko si lahko narišeš kot graf: na vodoravni osi je dovedena toplota $Q$, na navpični temperatura $T$. Za vsako snov dobiš premico. Premica za železo je strma (že majhna toplota močno dvigne temperaturo), premica za vodo pa položna. **Naklon premice je odvisen od $m \cdot c$**: večji kot je ta zmnožek, bolj položna je premica.

## Drugače: Iz vsakdanjega življenja

Ob morju je čez dan pesek zelo vroč, morje pa prijetno hladno. Sonce da obema približno enako toploto na enoto površine, a ima voda veliko večjo specifično toploto kot pesek. Zato se pesek hitro segreje, voda pa le počasi.

Isto velja zvečer: pesek se hitro ohladi, voda pa dolgo zadrži toploto. Zato je podnebje ob morju bolj izenačeno kot v notranjosti celin.

Še en primer: lonec je iz kovine, ki ima majhno specifično toploto, zato se hitro segreje. Voda v njem pa se segreva počasi, saj zaradi velike specifične toplote potrebuje veliko energije. To energijo shrani in jo nato dolgo oddaja, zato čaj v skodelici dolgo ostane vroč.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo:

1. Izpiši podatke in jih pretvori v osnovne enote (kg, $^\circ\text{C}$, J).
2. Izračunaj $\Delta T = T_{\text{konč}} - T_{\text{zač}}$.
3. Izberi obliko enačbe glede na to, kaj iščeš.
4. Vstavi in izračunaj.
5. Preveri enoto in predznak.

Primer s številkami: koliko toplote potrebuje $0{,}25\,\text{kg}$ vode (skodelica čaja), da se segreje z $20\,^\circ\text{C}$ na $90\,^\circ\text{C}$?

| Korak | Vrednost |
|---|---|
| $m$ | $0{,}25\,\text{kg}$ |
| $c$ | $4200\,\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$ |
| $\Delta T$ | $90 - 20 = 70\,^\circ\text{C}$ |
| $Q = m\cdot c\cdot\Delta T$ | $0{,}25 \cdot 4200 \cdot 70 = 73\,500\,\text{J}$ |

Torej $Q = 73{,}5\,\text{kJ}$.

## Drugače: Bolj natančno

Specifična toplota je **definirana** kot količnik:

$$c = \frac{Q}{m \cdot \Delta T}$$

Iz definicije sledi enota: $\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$. Ko enačbo pomnožimo z $m \cdot \Delta T$, dobimo $Q = m \cdot c \cdot \Delta T$.

Količino $C = m \cdot c$ imenujemo **toplotna kapaciteta** telesa: pove, koliko toplote potrebuje celotno telo za segretje za $1\,^\circ\text{C}$. Enačba se tako zapiše $Q = C \cdot \Delta T$.

Pri tem velja predpostavka, da se snov ne tali in ne izhlapeva (ne spremeni agregatnega stanja) in da je $c$ približno stalna na obravnavanem temperaturnem območju. Pri spremembi agregatnega stanja se temperatura ne spreminja kljub dovajanju toplote, zato tam enačba ne velja.

## Preveri se

? Koliko toplote potrebuje $3\,\text{kg}$ vode, da se segreje z $10\,^\circ\text{C}$ na $30\,^\circ\text{C}$? ($c = 4200\,\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$)
- $126\,000\,\text{J}$
+ $252\,000\,\text{J}$
- $378\,000\,\text{J}$
- $12\,600\,\text{J}$
> $\Delta T = 30 - 10 = 20\,^\circ\text{C}$, torej $Q = 3 \cdot 4200 \cdot 20 = 252\,000\,\text{J}$. Odgovor $378\,000\,\text{J}$ bi dobili, če bi namesto $\Delta T$ vstavili $30\,^\circ\text{C}$.

? Kos bakra mase $200\,\text{g}$ se segreje za $50\,^\circ\text{C}$. Koliko toplote prejme? ($c = 390\,\dfrac{\mathrm{J}}{\mathrm{kg}\cdot{}^\circ\mathrm{C}}$)
- $3\,900\,000\,\text{J}$
+ $3900\,\text{J}$
- $19\,500\,\text{J}$
> Maso pretvorimo: $200\,\text{g} = 0{,}2\,\text{kg}$. $Q = 0{,}2 \cdot 390 \cdot 50 = 3900\,\text{J}$. Če bi vstavili $200$ namesto $0{,}2$, bi dobili tisočkrat preveliko vrednost.

? Dve telesi enake mase prejmeta enako toploto. Prvo ima večjo specifično toploto kot drugo. Katero se bolj segreje?
- Prvo, ker ima večji $c$.
- Obe se segrejeta enako, ker je masa enaka.
+ Drugo, ker ima manjši $c$.
> Iz $\Delta T = \dfrac{Q}{m \cdot c}$ sledi, da je pri enakih $Q$ in $m$ sprememba temperature večja pri manjšem $c$.
