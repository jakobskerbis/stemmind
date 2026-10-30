---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz osnovne šole že znaš izračunati ploščino likov (kvadrat, trikotnik, krog) in prostornino kocke ter kvadra. V gimnaziji to znanje razširimo na vsa pomembna geometrijska telesa: prizmo, piramido, valj, stožec in kroglo.

Površina pove, koliko materiala potrebuješ, da telo oblečeš: pločevine za konzervo, platna za šotor, barve za steno. Prostornina pove, koliko telo "drži": koliko vode gre v bazen, koliko sladoleda v kornet. Inženir, arhitekt in kuhar te količine računajo vsak dan.

## Razlaga

**1. Osnovni pojmi.**

- **Površina** $P$ telesa je vsota ploščin vseh mejnih ploskev. Merimo jo v $\text{cm}^2$, $\text{m}^2$, ...
- **Prostornina** $V$ pove, koliko prostora telo zavzema. Merimo jo v $\text{cm}^3$, $\text{m}^3$, ... ($1\,\text{dm}^3 = 1\,\text{l}$).
- Pri prizmi, piramidi, valju in stožcu ločimo **osnovno ploskev** (ploščina $S$), **plašč** (ploščina $S_p$) in **višino** $v$.

**2. Prizma.** Dve skladni vzporedni osnovni ploskvi (mnogokotnika) povezujejo stranski pravokotniki (pri pokončni prizmi).

$$P = 2S + S_p \qquad V = S \cdot v$$

Plašč pokončne prizme je sestavljen iz pravokotnikov, visokih $v$. Njegova ploščina je $S_p = o \cdot v$, kjer je $o$ obseg osnovne ploskve.

**3. Piramida.** Ena osnovna ploskev (mnogokotnik) in stranske ploskve (trikotniki), ki se stikajo v vrhu.

$$P = S + S_p \qquad V = \frac{S \cdot v}{3}$$

Pri pravilni piramidi so stranske ploskve skladni enakokraki trikotniki. Njihova višina je **višina stranske ploskve** $v_s$. Povezuje jo z višino piramide Pitagorov izrek: pri pravilni štiristrani piramidi z osnovnim robom $a$ je $v_s^2 = v^2 + \left(\frac{a}{2}\right)^2$.

**4. Valj.** Osnovni ploskvi sta kroga s polmerom $r$. Plašč je, razvit v ravnino, pravokotnik s stranicama $2\pi r$ in $v$.

$$P = 2\pi r^2 + 2\pi r v = 2\pi r(r + v) \qquad V = \pi r^2 v$$

**5. Stožec.** Osnovna ploskev je krog s polmerom $r$. Plašč je, razvit v ravnino, krožni izsek s polmerom $s$ (**stranica stožca**). Velja $s^2 = r^2 + v^2$.

$$P = \pi r^2 + \pi r s \qquad V = \frac{\pi r^2 v}{3}$$

**6. Krogla.**

$$P = 4\pi r^2 \qquad V = \frac{4\pi r^3}{3}$$

**7. Vzorec za pomnjenje.** Piramida ima tretjino prostornine prizme z isto osnovno ploskvijo in višino. Stožec ima tretjino prostornine valja z istim polmerom in višino.

## Rešeni primeri

### Primer 1 (lažji): pravilna štiristrana piramida

Osnovni rob pravilne štiristrane piramide meri $a = 6\,\text{cm}$, višina $v = 4\,\text{cm}$. Izračunaj prostornino in površino.

1. **Osnovna ploskev** je kvadrat: $S = 6^2 = 36\,\text{cm}^2$.
2. **Prostornina:** $V = \dfrac{S \cdot v}{3} = \dfrac{36 \cdot 4}{3} = 48\,\text{cm}^3$.
3. Za površino potrebujemo plašč, torej višino stranske ploskve. Pravokotni trikotnik s katetama $v = 4$ in $\frac{a}{2} = 3$ ima hipotenuzo $v_s$: $v_s = \sqrt{4^2 + 3^2} = \sqrt{25} = 5\,\text{cm}$. Zakaj polovica roba? Višina piramide pade v središče kvadrata, kjer je od sredine roba oddaljena za $\frac{a}{2}$.
4. Ena stranska ploskev je trikotnik: $\dfrac{a \cdot v_s}{2} = \dfrac{6 \cdot 5}{2} = 15\,\text{cm}^2$. Plašč ima 4 takšne ploskve: $S_p = 60\,\text{cm}^2$.
5. **Površina:** $P = S + S_p = 36 + 60 = 96\,\text{cm}^2$.

### Primer 2: valj in stožec

a) Valj ima polmer $r = 3\,\text{cm}$ in višino $v = 8\,\text{cm}$. Izračunaj $V$ in $P$.

1. $V = \pi r^2 v = \pi \cdot 9 \cdot 8 = 72\pi \approx 226{,}19\,\text{cm}^3$.
2. $P = 2\pi r(r + v) = 2\pi \cdot 3 \cdot 11 = 66\pi \approx 207{,}35\,\text{cm}^2$.

b) Stožec ima $r = 3\,\text{cm}$ in $v = 4\,\text{cm}$. Izračunaj $V$ in $P$.

1. Najprej stranica: $s = \sqrt{r^2 + v^2} = \sqrt{9 + 16} = 5\,\text{cm}$. Potrebujemo jo za plašč, ker ta leži "poševno".
2. $V = \dfrac{\pi \cdot 9 \cdot 4}{3} = 12\pi \approx 37{,}70\,\text{cm}^3$.
3. $P = \pi r^2 + \pi r s = 9\pi + 15\pi = 24\pi \approx 75{,}40\,\text{cm}^2$.

Opazi: stožec ima enak polmer kot valj, a manjšo višino. Zato tu ne moreš neposredno primerjati prostornin $V_{\text{stožca}} = \frac13 V_{\text{valja}}$. To velja šele pri enaki višini.

### Primer 3 (težji): kornet sladoleda

Kornet je stožec s polmerom $r = 3\,\text{cm}$ in višino $v = 4\,\text{cm}$. Na vrhu je polkrogla sladoleda z enakim polmerom. Kolikšna je skupna prostornina in kolikšna je površina, ki jo vidiš od zunaj (plašč stožca in površina polkrogle)?

1. **Skica.** Polkrogla leži na krožni osnovni ploskvi stožca, zato se njuna kroga ujemata.
2. **Prostornina stožca:** $12\pi\,\text{cm}^3$ (iz primera 2).
3. **Prostornina polkrogle:** polovica krogle, $\dfrac12 \cdot \dfrac{4\pi \cdot 27}{3} = \dfrac12 \cdot 36\pi = 18\pi\,\text{cm}^3$.
4. **Skupaj:** $V = 12\pi + 18\pi = 30\pi \approx 94{,}25\,\text{cm}^3$.
5. **Površina od zunaj.** Plašč stožca je $\pi r s = \pi \cdot 3 \cdot 5 = 15\pi$. Površina polkrogle (brez kroga spodaj) je polovica površine krogle: $\dfrac12 \cdot 4\pi \cdot 9 = 18\pi$.
6. Skupaj: $15\pi + 18\pi = 33\pi \approx 103{,}67\,\text{cm}^2$. Krožne osnovne ploskve stožca ne štejemo, ker je prekrita s sladoledom.

## Pogoste napake

- **Pozabljen faktor $\frac13$** pri piramidi in stožcu. Prostornina je tretjina prizme oziroma valja.
- **Višina namesto stranice stožca (ali višine stranske ploskve).** Pri plašču stožca vedno uporabi $s$, ne $v$. Pri plašču piramide vedno uporabi $v_s$, ne $v$.
- **Zamenjava $r$ in $d$.** Če je dan premer, ga najprej razpolovi.
- **Napačna potenca.** $r^2$ je v prostornini valja, v prostornini krogle pa $r^3$. Pri $r = 6$ je $r^3 = 216$, ne $36$.
- **Pozabljena osnovna ploskev** pri površini: valj ima dve osnovni ploskvi, stožec in piramida eno.
- **Mešanje enot.** Če je rob v $\text{cm}$ in višina v $\text{m}$, ju pred računom pretvori v isto enoto.

## Povzetek

- Površina je vsota ploščin mejnih ploskev, prostornina pove, koliko prostora telo zavzema.
- Prizma: $P = 2S + S_p$, $V = S\,v$.
- Piramida: $P = S + S_p$, $V = \dfrac{S\,v}{3}$.
- Valj: $P = 2\pi r(r+v)$, $V = \pi r^2 v$.
- Stožec: $P = \pi r(r+s)$, $V = \dfrac{\pi r^2 v}{3}$, $s = \sqrt{r^2+v^2}$.
- Krogla: $P = 4\pi r^2$, $V = \dfrac{4\pi r^3}{3}$.
- Pri sestavljenih telesih računaj posebej vsak del in pazi, katere ploskve so res zunaj.

## Drugače: Na sliki

Razreži telo in ga razgrni v ravnino, dobiš **mrežo**.

- **Valj:** dva kroga in pravokotnik. Eno stranico pravokotnika ($2\pi r$) dobiš tako, da ovijaš plašč okoli roba kroga, druga stranica je višina $v$. Zato je ploščina plašča $2\pi r \cdot v$.
- **Stožec:** en krog in krožni izsek s polmerom $s$. Lok izseka ima dolžino $2\pi r$ (obseg osnovnega kroga). Ploščina izseka je $\dfrac12 \cdot s \cdot 2\pi r = \pi r s$.
- **Prizma in piramida:** mnogokotniki in pravokotniki oziroma trikotniki. Ploščine preprosto seštej.

Prostornino si predstavljaj kot plasti: prizma in valj sta zloženi iz enakih plasti ($S$) do višine $v$, zato $V = S\,v$. Pri piramidi in stožcu se plasti proti vrhu manjšajo, zato je prostornina manjša, natanko tretjina.

## Drugače: Iz vsakdanjega življenja

- **Pločevinka** je valj. Površina pove, koliko pločevine potrebuješ (dva pokrova in ovoj), prostornina pa, koliko pijače gre vanjo. Pločevinka z $r = 3\,\text{cm}$ in $v = 8\,\text{cm}$ ima $V \approx 226\,\text{cm}^3$, torej okoli $0{,}23\,\text{l}$.
- **Šotor** v obliki stožca ali piramide: platno pokriva samo plašč, ker je tla že na tleh. Zato pri šotoru računaš samo $S_p$.
- **Žoga** je krogla. Če ji polmer podvojiš, se površina poveča $4$-krat ($r^2$), prostornina pa $8$-krat ($r^3$). Zato je velika žoga veliko težja od male, čeprav je le malo večja.
- **Silos, rezervoar, strešnik:** vedno vprašanje, koliko vsebuje (prostornina) in koliko materiala je potrebnega (površina).

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo s telesi:

1. Ugotovi, katero telo je. Če je sestavljeno, ga razdeli.
2. Zapiši vse podatke in jih pretvori v isto enoto.
3. Zapiši, kaj iščeš: $V$ ali $P$.
4. Če rabiš $s$ ali $v_s$, ju izračunaj s Pitagorovim izrekom.
5. Vstavi v formulo in šele na koncu zaokroži.

Zgled za valj $r = 3\,\text{cm}$, $v = 8\,\text{cm}$:

| Količina | Formula | Račun | Rezultat |
|---|---|---|---|
| Osnovna ploskev $S$ | $\pi r^2$ | $\pi \cdot 9$ | $9\pi\,\text{cm}^2$ |
| Plašč $S_p$ | $2\pi r v$ | $2\pi \cdot 3 \cdot 8$ | $48\pi\,\text{cm}^2$ |
| Površina $P$ | $2S + S_p$ | $18\pi + 48\pi$ | $66\pi\,\text{cm}^2$ |
| Prostornina $V$ | $S\,v$ | $9\pi \cdot 8$ | $72\pi\,\text{cm}^3$ |

Rezultat je lepše pustiti v obliki $66\pi$ in šele na koncu zapisati približek $\approx 207{,}35\,\text{cm}^2$.

## Drugače: Bolj natančno

**Zakaj tretjina?** Kocka z robom $a$ se da razdeliti na tri skladne pravilne štiristrane piramide, katerih vrh je v enem oglišču kocke. Vsaka ima osnovno ploskev $a^2$ in višino $a$. Torej je $V_{\text{piramide}} = \dfrac{a^3}{3} = \dfrac{a^2 \cdot a}{3}$. Splošen dokaz za poljubno piramido temelji na Cavalierijevem načelu.

**Cavalierijevo načelo:** če imata dve telesi enako višino in so vsi vzporedni preseki na isti višini enako veliki, imata enaki prostornini.

**Prostornina krogle.** Primerjaj polkroglo s polmerom $r$ in valj s polmerom $r$ in višino $r$, iz katerega izrezemo stožec (vrh v središču spodnje osnovne ploskve, osnovna ploskev je zgornji krog valja). Na višini $h$ nad osnovno ploskvijo:

- presek polkrogle je krog s polmerom $\sqrt{r^2 - h^2}$, ploščina $\pi(r^2 - h^2)$,
- presek "valja brez stožca" je kolobar: velik krog $\pi r^2$ minus krog stožca s polmerom $h$ (stožec ima enako višino in polmer, zato je na višini $h$ polmer $h$): $\pi r^2 - \pi h^2$.

Preseka sta enaka, zato sta enaki tudi prostornini:

$$V_{\text{polkrogle}} = \pi r^2 \cdot r - \frac{\pi r^2 \cdot r}{3} = \frac{2\pi r^3}{3}$$

Krogla je dvakrat tolikšna: $V = \dfrac{4\pi r^3}{3}$.

## Preveri se

? Valj ima polmer $2\,\text{cm}$ in višino $5\,\text{cm}$. Kolikšna je njegova prostornina?
- $\dfrac{20\pi}{3}\,\text{cm}^3$
- $28\pi\,\text{cm}^3$
+ $20\pi\,\text{cm}^3$
- $10\pi\,\text{cm}^3$
> $V = \pi r^2 v = \pi \cdot 4 \cdot 5 = 20\pi$. Odgovor $\frac{20\pi}{3}$ je prostornina stožca z enakimi merami, $28\pi$ je površina valja, $10\pi$ pa dobiš, če $r$ ne kvadriraš.

? Krogla ima polmer $6\,\text{cm}$. Kolikšna je njena prostornina?
- $144\pi\,\text{cm}^3$
- $864\pi\,\text{cm}^3$
+ $288\pi\,\text{cm}^3$
- $48\pi\,\text{cm}^3$
> $V = \dfrac{4\pi r^3}{3} = \dfrac{4\pi \cdot 216}{3} = 288\pi$. Odgovor $144\pi$ je površina krogle, $864\pi$ pozabi delitev s $3$, $48\pi$ pa uporabi $r^2$ namesto $r^3$.

? Stožec ima polmer $5\,\text{cm}$ in višino $12\,\text{cm}$. Kolikšna je njegova površina?
- $85\pi\,\text{cm}^2$
- $65\pi\,\text{cm}^2$
+ $90\pi\,\text{cm}^2$
- $100\pi\,\text{cm}^2$
> Stranica je $s = \sqrt{25 + 144} = 13\,\text{cm}$. Potem $P = \pi r^2 + \pi r s = 25\pi + 65\pi = 90\pi$. Odgovor $85\pi$ uporabi $v$ namesto $s$, $65\pi$ je samo plašč, $100\pi$ pa je prostornina.

:::simboli
P | površina telesa | | | vsota ploščin vseh mejnih ploskev
S | ploščina osnovne ploskve | | |
S_p | ploščina plašča | | | pri pokončni prizmi S_p = o · v
V | prostornina telesa | | |
v | višina telesa | | |
r | polmer (osnovne ploskve ali krogle) | | |
s | stranica stožca | s = \sqrt{r^2 + v^2} | |
V_{\text{polkrogle}} | prostornina polkrogle | V_{\text{polkrogle}} = \frac{2\pi r^3}{3} | | valj minus stožec z višino r
:::
