---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih let že znaš izračunati ploščino kroga ($S = \pi r^2$), obseg kroga ($o = 2\pi r$) ter površino in prostornino valja in stožca. Znaš tudi potencirati, na primer $r^2 = r \cdot r$ in $r^3 = r \cdot r \cdot r$.

Krogla je telo, ki ga srečaš na vsakem koraku: žoga, kroglica ležaja, biser, milni mehurček, kapljica vode. Pogosto te zanima, koliko zraka gre v žogo (prostornina) ali koliko usnja ali barve potrebuješ za njeno prevleko (površina). V tej lekciji se naučiš obe količini izračunati samo iz polmera.

## Razlaga

**1. Kaj je krogla.** Krogla je telo, katerega vse točke na površini so enako oddaljene od središča $S$. Razdalji od središča do površine rečemo **polmer** $r$. Premer je dvakrat daljši: $d = 2r$. Kroglina površina je ukrivljena, zato je ne moremo razgrniti v ravnino brez raztegovanja, kot to lahko storimo pri valju.

**2. Površina krogle.**

$$P = 4\pi r^2$$

Površina krogle je natanko štirikrat večja od ploščine njenega največjega kroga ($\pi r^2$). Če bi lupino pomaranče olupil in jo prekril s krogi enakega polmera, kot ga ima pomaranča, bi jih potreboval natanko štiri.

**3. Prostornina krogle.**

$$V = \frac{4}{3}\pi r^3$$

Pri prostornini je polmer na **tretjo** potenco, ker merimo v treh dimenzijah. Pri površini je na drugo, ker merimo v dveh.

**4. Enote.** Površino merimo v kvadratnih enotah ($\text{cm}^2$, $\text{m}^2$), prostornino v kubičnih ($\text{cm}^3$, $\text{m}^3$). Spomni se: $1\,\text{dm}^3 = 1\,\text{l}$.

**5. Kako računamo.**

1. Preveri, ali imaš podan polmer ali premer. Če imaš premer, ga najprej razpolovi: $r = d : 2$.
2. Vstavi $r$ v ustrezno formulo.
3. Najprej izračunaj potenco ($r^2$ ali $r^3$), šele nato množi s $4\pi$ oziroma $\frac{4}{3}\pi$.
4. Rezultat lahko pustiš v obliki z $\pi$ (natančno) ali ga zaokrožiš ($\pi \approx 3{,}14159$).
5. Zapiši pravilno enoto.

**6. Obratna naloga.** Če poznaš površino ali prostornino, iz formule izraziš $r^2$ ali $r^3$ in nato koreniš (kvadratni oziroma kubični koren).

## Rešeni primeri

### Primer 1 (lažji): polmer je podan

Krogla ima polmer $r = 6\,\text{cm}$. Izračunaj njeno površino in prostornino.

1. **Površina:** $P = 4\pi r^2 = 4\pi \cdot 6^2$.
2. Najprej potenca, ker ima prednost pred množenjem: $6^2 = 36$. Torej $P = 4\pi \cdot 36 = 144\pi\,\text{cm}^2$.
3. Zaokrožimo: $P \approx 452{,}39\,\text{cm}^2$.
4. **Prostornina:** $V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi \cdot 6^3$.
5. $6^3 = 6 \cdot 6 \cdot 6 = 216$. Velja $\frac{4}{3} \cdot 216 = 4 \cdot 72 = 288$. Torej $V = 288\pi\,\text{cm}^3 \approx 904{,}78\,\text{cm}^3$.
6. Preverimo smiselnost: kocka s stranico $12\,\text{cm}$ ($= 2r$), ki krogli ravno ustreza, ima prostornino $12^3 = 1728\,\text{cm}^3$. Krogla ima manj, $904{,}78\,\text{cm}^3$, in to je približno polovica. ✓

### Primer 2: podan je premer

Nogometna žoga ima premer $22\,\text{cm}$. Koliko materiala je potrebnega za njeno prevleko (površina) in koliko zraka gre vanjo (prostornina)? Privzemi, da je žoga popolna krogla.

1. Podan je premer, zato najprej izračunamo polmer: $r = 22 : 2 = 11\,\text{cm}$. To je pogosta past: če bi vstavili $22$, bi dobili napačen rezultat.
2. **Površina:** $P = 4\pi \cdot 11^2 = 4\pi \cdot 121 = 484\pi\,\text{cm}^2 \approx 1520{,}53\,\text{cm}^2$.
3. **Prostornina:** $11^3 = 1331$, zato $V = \frac{4}{3}\pi \cdot 1331 = \frac{5324}{3}\pi\,\text{cm}^3 \approx 5575{,}28\,\text{cm}^3$.
4. Pretvorba: $5575{,}28\,\text{cm}^3 \approx 5{,}58\,\text{dm}^3 \approx 5{,}58\,\text{l}$.
5. **Odgovor.** Za prevleko potrebujemo približno $1520{,}5\,\text{cm}^2$ materiala, v žogo gre približno $5{,}6\,\text{l}$ zraka.

### Primer 3 (težji): iz površine do prostornine

Površina krogle je $100\pi\,\text{cm}^2$. Kolikšna je njena prostornina?

1. Prostornino lahko izračunamo samo iz polmera, zato ga najprej poiščemo iz površine.
2. Zapišemo: $4\pi r^2 = 100\pi$.
3. Obe strani delimo s $4\pi$: $r^2 = \dfrac{100\pi}{4\pi} = 25$. Število $\pi$ se pokrajša.
4. Korenimo: $r = \sqrt{25} = 5\,\text{cm}$. Polmer je pozitiven, zato negativne rešitve ne upoštevamo.
5. Zdaj izračunamo prostornino: $V = \frac{4}{3}\pi \cdot 5^3 = \frac{4}{3}\pi \cdot 125 = \frac{500}{3}\pi\,\text{cm}^3$.
6. Zaokrožimo: $V \approx 523{,}60\,\text{cm}^3$.
7. Preverimo: $4\pi \cdot 5^2 = 4\pi \cdot 25 = 100\pi$. ✓

## Pogoste napake

- **Vstavljanje premera namesto polmera.** Če je podan premer, ga vedno najprej razpolovi. Napaka v $r$ se pri $r^3$ še močno poveča.
- **Zamenjava formul.** Površina ima $r^2$ in faktor $4$, prostornina ima $r^3$ in faktor $\frac{4}{3}$. Pomagaj si z enotami: $\text{cm}^2$ gre s $r^2$, $\text{cm}^3$ z $r^3$.
- **Napačen vrstni red računanja.** $4\pi r^2$ ni $(4\pi r)^2$. Najprej potenciraš samo $r$, nato množiš.
- **Pozabljeno deljenje s $3$.** V $V = \frac{4}{3}\pi r^3$ je ulomek del formule. Če ga izpustiš, dobiš $3$-krat preveliko prostornino.
- **Napačna enota.** Površina v $\text{cm}^3$ ali prostornina v $\text{cm}^2$ ni pravilen odgovor.
- **Pozabljen koren pri obratni nalogi.** Iz $r^2 = 25$ moraš dobiti $r = 5$, ne $r = 25$.

## Povzetek

- Krogla ima vse točke površine enako oddaljene od središča; polmer $r$, premer $d = 2r$.
- Površina: $P = 4\pi r^2$ (štirikratnik ploščine največjega kroga).
- Prostornina: $V = \dfrac{4}{3}\pi r^3$.
- Če je podan premer, najprej izračunaj $r = d : 2$.
- Pri obratnih nalogah iz $P$ ali $V$ izrazi $r^2$ oziroma $r^3$ in koreni.
- Prostornina krogle je $\frac{2}{3}$ prostornine valja z enakim polmerom in višino $2r$.

## Drugače: Na sliki

Predstavljaj si kroglo, ki se natanko prilega v valj: valj ima polmer osnovne ploskve $r$ in višino $2r$ (premer krogle).

- Plašč tega valja ima ploščino $2\pi r \cdot 2r = 4\pi r^2$. To je **natanko enaka površina kot pri krogli**.
- Prostornina valja je $\pi r^2 \cdot 2r = 2\pi r^3$. Krogla zavzame $\frac{4}{3}\pi r^3$, to je dve tretjini valja, saj $\dfrac{\frac{4}{3}\pi r^3}{2\pi r^3} = \dfrac{2}{3}$.

Ko si torej predstavljaš kroglo v škatli v obliki valja, je ena tretjina valja prazna.

Pri površini si lahko predstavljaš še olupljeno pomarančo: lupino bi lahko razrezano pokril s štirimi krogi, ki imajo enak polmer kot pomaranča.

## Drugače: Iz vsakdanjega življenja

**Konzerva s tremi teniškimi žogicami** je znan primer: žogice se prilegajo valju, ki ima polmer enak polmeru žogice. Ena žogica zavzame $\frac{2}{3}$ prostornine valja z višino $2r$. Račun za $r = 3\,\text{cm}$: valj ima $V = \pi \cdot 3^2 \cdot 6 = 54\pi\,\text{cm}^3$, krogla $V = \frac{4}{3}\pi \cdot 27 = 36\pi\,\text{cm}^3$, in res $\dfrac{36\pi}{54\pi} = \dfrac{2}{3}$.

**Milni mehurček** je skoraj popolna krogla. To ni naključje: od vseh teles z isto prostornino ima krogla najmanjšo površino, zato mehurček z napeto opno težnji po čim manjši površini sledi.

**Primerjava velikosti.** Če polmer povečaš, se površina in prostornina ne povečata v istem razmerju. Zato je žoga z dvakrat večjim polmerom veliko težja za napihniti, kot bi pričakoval: potrebuje osemkrat več zraka (glej tabelo spodaj).

## Drugače: Korak za korakom s številkami

Poglejmo, kako se spreminjata površina in prostornina, ko polmer povečujemo:

| $r$ | $P = 4\pi r^2$ | $V = \frac{4}{3}\pi r^3$ |
|---|---|---|
| $1\,\text{cm}$ | $4\pi \approx 12{,}57\,\text{cm}^2$ | $\frac{4}{3}\pi \approx 4{,}19\,\text{cm}^3$ |
| $2\,\text{cm}$ | $16\pi \approx 50{,}27\,\text{cm}^2$ | $\frac{32}{3}\pi \approx 33{,}51\,\text{cm}^3$ |
| $4\,\text{cm}$ | $64\pi \approx 201{,}06\,\text{cm}^2$ | $\frac{256}{3}\pi \approx 268{,}08\,\text{cm}^3$ |

Opazuj: ko polmer podvojimo ($1 \to 2$), se površina poveča $4$-krat ($4\pi \to 16\pi$), prostornina pa $8$-krat ($\frac{4}{3}\pi \to \frac{32}{3}\pi$). To sledi iz formul: $(2r)^2 = 4r^2$ in $(2r)^3 = 8r^3$.

Splošno pravilo: če polmer pomnožimo s $k$, se površina pomnoži s $k^2$, prostornina pa s $k^3$.

## Drugače: Bolj natančno

Zakaj je prostornina krogle $\frac{4}{3}\pi r^3$? Pokažimo, kako je to ugotovil Arhimed, in sicer za **polkroglo**.

Vzemimo tri telesa, vsa z višino $r$ in polmerom osnovne ploskve $r$:

- polkroglo s polmerom $r$ (ravna ploskev leži na tleh),
- valj s polmerom $r$ in višino $r$,
- stožec (s konico navzdol, vrhom v središču spodnje ploskve valja), ki ima polmer $r$ in višino $r$. Izdolben je iz valja.

Na višini $h$ od tal presekamo vsa telesa z vodoravno ravnino.

- Presek polkrogle je krog s polmerom $\sqrt{r^2 - h^2}$ (Pitagorov izrek), torej s ploščino $\pi(r^2 - h^2)$.
- Presek valja brez stožca je kolobar. Zunanji krog ima ploščino $\pi r^2$, notranji (presek stožca) ima polmer $h$ in ploščino $\pi h^2$. Ploščina kolobarja je $\pi r^2 - \pi h^2 = \pi(r^2 - h^2)$.

Na **vsaki višini** sta preseka enako velika. Zato imata polkrogla in »valj minus stožec« enako prostornino:

$$V_{\text{polkrogle}} = \pi r^2 \cdot r - \frac{1}{3}\pi r^2 \cdot r = \pi r^3 - \frac{1}{3}\pi r^3 = \frac{2}{3}\pi r^3.$$

Cela krogla je dvakratnik: $V = 2 \cdot \frac{2}{3}\pi r^3 = \frac{4}{3}\pi r^3$.

Formula za površino ne sledi enako preprosto. V osnovni šoli jo sprejmemo kot znan rezultat; zanimivo je, da ima kroglina površina $4\pi r^2$ enako vrednost kot plašč valja, v katerega se krogla prilega.

## Preveri se

? Krogla ima polmer $5\,\text{cm}$. Kolikšna je njena površina?
- $25\pi\,\text{cm}^2$
+ $100\pi\,\text{cm}^2$
- $20\pi\,\text{cm}^2$
- $\dfrac{500}{3}\pi\,\text{cm}^2$
> $P = 4\pi r^2 = 4\pi \cdot 25 = 100\pi\,\text{cm}^2$. Odgovor $25\pi$ je ploščina kroga brez faktorja $4$, $20\pi$ je $4\pi r$ (pozabljena potenca), $\frac{500}{3}\pi$ pa je prostornina.

? Kolikšna je prostornina krogle s polmerom $3\,\text{cm}$?
- $108\pi\,\text{cm}^3$
- $12\pi\,\text{cm}^3$
+ $36\pi\,\text{cm}^3$
> $V = \frac{4}{3}\pi \cdot 3^3 = \frac{4}{3}\pi \cdot 27 = 36\pi\,\text{cm}^3$. Odgovor $108\pi$ dobiš, če pozabiš deliti s $3$, odgovor $12\pi$ pa, če polmer kvadriraš namesto kubiraš.

? Polmer krogle povečamo na dvakratnik. Kolikokrat se poveča njena prostornina?
- $2$-krat
- $4$-krat
+ $8$-krat
- $6$-krat
> Prostornina je sorazmerna s $r^3$. Ko polmer podvojimo, dobimo $(2r)^3 = 8r^3$, torej se prostornina poveča $8$-krat. Štirikratno povečanje velja za površino.
