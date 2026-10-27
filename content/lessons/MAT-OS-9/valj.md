---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz prejšnjih razredov že znaš izračunati obseg in ploščino kroga ($o = 2\pi r$, $S = \pi r^2$) ter prostornino in površino kvadra. Valj je naravno nadaljevanje: spodaj in zgoraj ima krog, vmes pa "ovito" ploskev.

Valje srečuješ povsod: pločevinke, kozarci, baterije, cevi, sodi, stebri, vedra. Pri vsakem se lahko vprašaš, koliko vanj gre (prostornina) ali koliko pločevine, papirja ali barve potrebuješ za njegovo prevleko (površina). V tej lekciji se naučiš oboje izračunati. Spoznal boš tudi, da valj nastane z **vrtenjem pravokotnika**.

## Razlaga

**1. Kaj je valj.** Valj je geometrijsko telo z dvema skladnima vzporednima krožnima ploskvama (osnovnima ploskvama) in ukrivljeno ploskvijo med njima, ki ji pravimo **plašč**. V tej lekciji obravnavamo pokončni valj, kjer je os pravokotna na osnovni ploskvi.

Oznake:

- $r$ je polmer osnovne ploskve,
- $v$ je višina valja (razdalja med osnovnima ploskvama).

**2. Valj kot vrtenina.** Pravokotnik zavrtimo za polni obrat okoli ene njegove stranice. Ta stranica postane os valja. Stranica, ki je pravokotna na os, opiše krog, zato je njena dolžina polmer $r$. Stranica, ki je vzporedna z osjo, je višina $v$.

**3. Osni presek.** Če valj prerežemo z ravnino skozi os, dobimo pravokotnik s stranicama $2r$ in $v$.

**4. Razvit plašč.** Če plašč razrežemo vzdolž višine in ga razgrnemo, dobimo pravokotnik. Ena stranica je višina $v$, druga je obseg osnovne ploskve $2\pi r$. Ploščina plašča je torej

$$S_{pl} = 2\pi r \cdot v$$

**5. Površina valja.** Sestavljajo jo dve osnovni ploskvi in plašč:

$$P = 2\pi r^2 + 2\pi r v = 2\pi r\,(r + v)$$

**6. Prostornina valja.** Kot pri prizmi: prostornina je ploščina osnovne ploskve krat višina.

$$V = \pi r^2 \cdot v$$

**7. Enakostranični valj.** Valj, katerega osni presek je kvadrat, torej $v = 2r$, imenujemo enakostranični valj.

**8. Enote.** Površina je v kvadratnih enotah ($\text{cm}^2$), prostornina v kubičnih ($\text{cm}^3$). Velja $1\,\text{dm}^3 = 1\,\text{l}$ in $1\,\text{l} = 1000\,\text{cm}^3$.

## Rešeni primeri

### Primer 1: prostornina in površina iz polmera in višine

Valj ima polmer $r = 3\,\text{cm}$ in višino $v = 5\,\text{cm}$. Izračunaj prostornino in površino.

1. **Prostornina.** Uporabimo $V = \pi r^2 v$, saj je to ploščina osnovne ploskve krat višina.
2. $V = \pi \cdot 3^2 \cdot 5 = \pi \cdot 9 \cdot 5 = 45\pi\,\text{cm}^3 \approx 141{,}37\,\text{cm}^3$.
3. **Površina.** Dve osnovni ploskvi: $2\pi r^2 = 2\pi \cdot 9 = 18\pi$.
4. Plašč: $2\pi r v = 2\pi \cdot 3 \cdot 5 = 30\pi$.
5. Seštejemo: $P = 18\pi + 30\pi = 48\pi\,\text{cm}^2 \approx 150{,}80\,\text{cm}^2$.

### Primer 2: iskanje polmera iz prostornine

Valj ima višino $v = 8\,\text{cm}$ in prostornino $V = 288\pi\,\text{cm}^3$. Izračunaj polmer in površino.

1. Zapišemo enačbo: $\pi r^2 \cdot 8 = 288\pi$.
2. Obe strani delimo z $8\pi$: $r^2 = \dfrac{288\pi}{8\pi} = 36$.
3. Korenimo: $r = 6\,\text{cm}$ (polmer je pozitivno število).
4. Površina: $P = 2\pi r (r + v) = 2\pi \cdot 6 \cdot (6 + 8) = 12\pi \cdot 14 = 168\pi\,\text{cm}^2 \approx 527{,}79\,\text{cm}^2$.
5. Preverimo: $\pi \cdot 36 \cdot 8 = 288\pi$. ✓

### Primer 3: valj kot vrtenina (težji)

Pravokotnik s stranicama $4\,\text{cm}$ in $7\,\text{cm}$ zavrtimo okoli daljše stranice. Nato ga zavrtimo še okoli krajše. V katerem primeru dobimo valj z večjo prostornino?

1. **Okoli daljše stranice** ($7\,\text{cm}$): ta stranica je os, torej je $v = 7\,\text{cm}$. Druga stranica opiše krog, zato je $r = 4\,\text{cm}$.
2. $V_1 = \pi \cdot 4^2 \cdot 7 = 112\pi\,\text{cm}^3 \approx 351{,}86\,\text{cm}^3$.
3. **Okoli krajše stranice** ($4\,\text{cm}$): $v = 4\,\text{cm}$, $r = 7\,\text{cm}$.
4. $V_2 = \pi \cdot 7^2 \cdot 4 = 196\pi\,\text{cm}^3 \approx 615{,}75\,\text{cm}^3$.
5. **Odgovor.** Večji valj dobimo pri vrtenju okoli krajše stranice. Polmer je v formuli kvadriran, zato vpliva bolj kot višina.

## Pogoste napake

- **Premer namesto polmera.** Če je podan premer $d$, najprej izračunaj $r = d : 2$. Pri formulah $\pi r^2 v$ in $2\pi r v$ je napaka sicer takoj velika, ker se polmer kvadrira ali podvoji.
- **Pozabljeni osnovni ploskvi.** Pri površini valja ne smeš računati le plašča. Če je valj odprt (npr. vedro brez pokrova), se ena osnovna ploskev res odšteje, a to moraš narediti zavestno.
- **Zamenjava $r^2$ in $2r$.** $\pi r^2$ je ploščina kroga, $2\pi r$ pa obseg. Prostornina vsebuje $r^2$, plašč pa $2\pi r$.
- **Napačne enote.** Površina ni v $\text{cm}^3$ in prostornina ni v $\text{cm}^2$. Pred računanjem pretvori vse mere v isto enoto.
- **Pri vrtenju pozabljena vloga stranic.** Stranica, okoli katere vrtimo, je višina. Druga stranica je polmer, ne premer.

## Povzetek

- Valj ima dve skladni krožni osnovni ploskvi (polmer $r$) in plašč. Višina je $v$.
- Valj nastane z vrtenjem pravokotnika okoli ene njegove stranice. Osni presek je pravokotnik $2r \times v$.
- Plašč: $S_{pl} = 2\pi r v$ (razvit je pravokotnik z $2\pi r$ in $v$).
- Površina: $P = 2\pi r^2 + 2\pi r v = 2\pi r (r + v)$.
- Prostornina: $V = \pi r^2 v$.
- Enakostranični valj ima $v = 2r$.
- $1\,\text{l} = 1\,\text{dm}^3 = 1000\,\text{cm}^3$.

## Drugače: Na sliki

Predstavljaj si pločevinko, ki jo razrežeš in razgrneš na mizo. Dobiš tri kose:

- dva enaka kroga (pokrov in dno), vsak s ploščino $\pi r^2$,
- en pravokotnik (ovoj), visok $v$ in dolg toliko, kolikor je obseg kroga, torej $2\pi r$.

Površina je preprosto vsota ploščin teh treh likov. Ovoj je pravokotnik, zato je njegova ploščina "dolžina krat višina" $= 2\pi r \cdot v$.

Za prostornino si valj predstavljaj kot kupček zelo tankih okroglih ploščic, zloženih drugo na drugo. Vsaka ima ploščino $\pi r^2$, skupaj pa jih je toliko, da je kupček visok $v$. Zato je prostornina $\pi r^2 \cdot v$.

Za vrtenino si predstavljaj pravokotnik, nabit na palico, ki je ena njegova stranica. Ko ga zavrtiš, se nasprotna stranica zavrti v krog in prostor, ki ga pri tem prepotuje pravokotnik, je valj.

## Drugače: Iz vsakdanjega življenja

**Nalepka na pločevinki.** Ovitek (etiketa) okoli pločevinke je pravokotnik. Njegova višina je višina pločevinke, dolžina pa obseg pokrova. Če nalepko odlepiš, dobiš plašč.

**Vedro in litri.** Vedro ima obliko valja s polmerom $r = 10\,\text{cm}$ in višino $v = 20\,\text{cm}$. Koliko vode gre vanj?

$$V = \pi \cdot 10^2 \cdot 20 = 2000\pi\,\text{cm}^3 \approx 6283\,\text{cm}^3$$

Ker je $1000\,\text{cm}^3 = 1\,\text{l}$, gre v vedro približno $6{,}28\,\text{l}$.

Za površino vedra (brez pokrova) pa ne računaš ene osnovne ploskve manj, ker jo pač pri ovoju ne rabiš: $\pi r^2 + 2\pi r v$.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo z valjem:

1. Zapiši podatke: $r$ ali $d$, $v$. Če je podan premer, ga deli z $2$.
2. Pretvori vse mere v isto enoto.
3. Vprašaj se, kaj iščeš:

| Iščem | Formula |
|---|---|
| ploščina osnovne ploskve | $S_o = \pi r^2$ |
| ploščina plašča | $S_{pl} = 2\pi r v$ |
| površina | $P = 2S_o + S_{pl}$ |
| prostornina | $V = S_o \cdot v$ |

Primer s številkami: $r = 2\,\text{cm}$, $v = 10\,\text{cm}$.

- $S_o = \pi \cdot 2^2 = 4\pi$
- $S_{pl} = 2\pi \cdot 2 \cdot 10 = 40\pi$
- $P = 2 \cdot 4\pi + 40\pi = 48\pi\,\text{cm}^2$
- $V = 4\pi \cdot 10 = 40\pi\,\text{cm}^3$

Na koncu preveri, ali so enote pravilne in ali je rezultat smiseln.

## Drugače: Bolj natančno

**Zakaj je plašč pravokotnik z dolžino $2\pi r$?** Plašč je ukrivljena ploskev, ki ima na vsakem mestu enako višino $v$. Ko ga vzdolž ene višine prerežemo in razgrnemo, so zgornji in spodnji rob daljici, saj sta bila prej krožnici osnovnih ploskev. Dolžina vsake je enaka obsegu kroga, torej $2\pi r$. Dobimo pravokotnik $2\pi r \times v$.

**Zakaj je prostornina $\pi r^2 v$?** Pri pokončni prizmi je prostornina ploščina osnovne ploskve krat višina. Valj ima vse vodoravne prereze skladne s krogom ploščine $\pi r^2$, zato je njegova prostornina enaka $\pi r^2 \cdot v$. Na tem temelji tudi Cavalierijevo načelo: telesa z enako višino in enako velikimi prerezi na vsaki višini imajo enako prostornino.

**Zveza z osnim presekom.** Osni presek ima ploščino $2r \cdot v$. To ni ne prostornina ne površina, ampak ploščina preseka. Pri enakostraničnem valju je $v = 2r$, zato je to kvadrat s stranico $2r$.

## Preveri se

? Valj ima polmer $r = 3\,\text{cm}$ in višino $v = 10\,\text{cm}$. Kolikšna je njegova prostornina?
- $30\pi\,\text{cm}^3$
- $60\pi\,\text{cm}^3$
+ $90\pi\,\text{cm}^3$
> $V = \pi r^2 v = \pi \cdot 9 \cdot 10 = 90\pi\,\text{cm}^3$. Odgovor $60\pi$ je ploščina plašča ($2\pi r v$), $30\pi$ pa dobiš, če pozabiš kvadrirati polmer.

? Valj ima polmer $r = 5\,\text{cm}$ in višino $v = 4\,\text{cm}$. Kolikšna je ploščina njegovega plašča?
- $20\pi\,\text{cm}^2$
+ $40\pi\,\text{cm}^2$
- $100\pi\,\text{cm}^2$
> Plašč je pravokotnik z dolžino $2\pi r = 10\pi$ in višino $4$, torej $S_{pl} = 10\pi \cdot 4 = 40\pi\,\text{cm}^2$. Odgovor $100\pi$ je prostornina ($\pi r^2 v$), $20\pi$ pa dobiš, če pozabiš faktor $2$.

? Pravokotnik s stranicama $3\,\text{cm}$ in $5\,\text{cm}$ zavrtimo okoli stranice dolžine $5\,\text{cm}$. Kolikšna je prostornina nastalega valja?
- $75\pi\,\text{cm}^3$
- $15\pi\,\text{cm}^3$
+ $45\pi\,\text{cm}^3$
> Stranica, okoli katere vrtimo, je višina: $v = 5\,\text{cm}$. Druga stranica je polmer: $r = 3\,\text{cm}$. Torej $V = \pi \cdot 3^2 \cdot 5 = 45\pi\,\text{cm}^3$. Odgovor $75\pi$ dobiš, če zamenjaš vlogi stranic.
