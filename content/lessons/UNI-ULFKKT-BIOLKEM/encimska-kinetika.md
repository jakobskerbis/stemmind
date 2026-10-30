---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Na cestninski postaji s štirimi kabinami ob redkem prometu dvakrat več avtov pomeni dvakrat več prehodov na uro. V poletni koloni so vse kabine ves čas zasedene in daljša kolona ne pospeši ničesar. Encim v epruveti se vede enako: z več substrata reakcija sprva teče hitreje, nato se hitrost ustali, čeprav substrata ni zmanjkalo.

Skupna ideja je omejeno število »kabin«, pri encimu aktivnih mest. Michaelis-Mentenova enačba iz tega pove, kako hitro encim dela, kako močno veže substrat in kako ga zdravila zavirajo, npr. statini encim v sintezi holesterola, aspirin pa ciklooksigenazo.

## Razlaga

### Kaj merimo

Encim $E$ veže substrat $S$ v kompleks $ES$, ta pa razpade v produkt $P$ in prost encim:

$$E + S \rightleftharpoons ES \rightarrow E + P$$

Merimo **začetno hitrost** $v_0$. To je hitrost nastajanja produkta takoj po začetku, ko je porabljenega še zelo malo substrata in produkta skoraj ni. Tako vemo, da je $[S]$ enaka koncentraciji, ki smo jo dodali.

### En encim, štiri meritve

Encimu z največjo hitrostjo $V_\mathrm{max} = 120\,\mu\mathrm{mol/min}$ dajemo vedno več substrata:

| $[S]$ [mM] | $[S]/(2\,\mathrm{mM})$ | $v_0$ [µmol/min] | delež $V_\mathrm{max}$ |
|---|---|---|---|
| 0,5 | 0,25 | 24 | 20 % |
| 2 | 1 | 60 | 50 % |
| 6 | 3 | 90 | 75 % |
| 18 | 9 | 108 | 90 % |

Iz tabele preberemo tri stvari:

1. Pri $[S] = 2\,\mathrm{mM}$ encim dela s polovično hitrostjo. To koncentracijo imenujemo $K_\mathrm{M}$; tu je $K_\mathrm{M} = 2\,\mathrm{mM}$.
2. Od $50\,\%$ do $90\,\%$ hitrosti potrebuješ devetkrat več substrata. Krivulja se zelo počasi približuje $V_\mathrm{max}$.
3. Delež $V_\mathrm{max}$ je odvisen le od razmerja $[S]/K_\mathrm{M}$ (drugi stolpec): pri razmerju $1$ je delež $50\,\%$, pri $3$ je $75\,\%$, pri $9$ je $90\,\%$.

### Posplošitev: nasičenje in Michaelis-Mentenova enačba

Pri majhni $[S]$ je večina encima prosta, zato dvojna količina substrata da skoraj dvojno hitrost. Pri veliki $[S]$ so skoraj vsa aktivna mesta zasedena. Encim je **nasičen** in dela z **največjo hitrostjo** $V_\mathrm{max}$, tako kot cestninska postaja, ko so vse kabine zasedene.

Vse tri ugotovitve iz tabele zajame ena hiperbola $v_0([S])$:

$$v_0 = \frac{V_\mathrm{max}\,[S]}{K_\mathrm{M} + [S]}$$

**Michaelisova konstanta** $K_\mathrm{M}$ je koncentracija substrata, pri kateri je $v_0 = \tfrac{1}{2}V_\mathrm{max}$. Ima enoto koncentracije (npr. mM). Manjša $K_\mathrm{M}$ pomeni, da encim doseže polovico največje hitrosti že pri nizki $[S]$.

:::premisli
Kolikšen delež $V_\mathrm{max}$ doseže encim pri $[S] = 99\,K_\mathrm{M}$? Napovej, preden izračunaš.
---
$99\,\%$: $\dfrac{99\,K_\mathrm{M}}{K_\mathrm{M} + 99\,K_\mathrm{M}} = \dfrac{99}{100}$. Do $V_\mathrm{max}$ encim pri končni $[S]$ nikoli ne pride, le približuje se ji.
:::

### Dva skrajna primera

Pri $[S] \ll K_\mathrm{M}$ v imenovalcu ostane le $K_\mathrm{M}$: $v_0 \approx \dfrac{V_\mathrm{max}}{K_\mathrm{M}}[S]$. Hitrost je premo sorazmerna z $[S]$ (reakcija prvega reda). Pri $[S] \gg K_\mathrm{M}$ je $v_0 \approx V_\mathrm{max}$, neodvisno od $[S]$ (ničti red).

### Katalitska konstanta

$V_\mathrm{max}$ je odvisna od količine encima: $V_\mathrm{max} = k_\mathrm{cat}[E]_\mathrm{t}$, kjer je $[E]_\mathrm{t}$ skupna koncentracija encima. **Katalitska konstanta** ali **obratno število** $k_\mathrm{cat}$ pove, koliko molekul substrata eno aktivno mesto v sekundi pretvori v produkt. Količnik $k_\mathrm{cat}/K_\mathrm{M}$ je **katalitska učinkovitost**: z njo primerjamo, kateri substrat encim pretvarja raje.

### Dvojni recipročni diagram

Iz hiperbole je težko natančno odčitati $V_\mathrm{max}$. Zato enačbo obrnemo (Lineweaver-Burkova oblika):

$$\frac{1}{v_0} = \frac{K_\mathrm{M}}{V_\mathrm{max}}\cdot\frac{1}{[S]} + \frac{1}{V_\mathrm{max}}$$

Na osi $x$ je $1/[S]$, na osi $y$ je $1/v_0$. Točke ležijo na premici. Odsek na osi $y$ je $1/V_\mathrm{max}$, naklon je $K_\mathrm{M}/V_\mathrm{max}$, presečišče z osjo $x$ pa je pri $-1/K_\mathrm{M}$.

### Reverzibilna inhibicija

**Inhibitor** $I$ je molekula, ki zmanjša hitrost encimske reakcije. Reverzibilni inhibitor se veže nekovalentno in lahko odstopi. Kako močno se veže, pove **inhibicijska konstanta** $K_\mathrm{i}$ (manjša $K_\mathrm{i}$ pomeni močnejšo vezavo). Vpliv zapišemo s faktorjem

$$\alpha = 1 + \frac{[I]}{K_\mathrm{i}}$$

Glede na to, kam se inhibitor veže, ločimo:

| vrsta | kam se veže $I$ | $K_\mathrm{M}$ (navidezna) | $V_\mathrm{max}$ (navidezna) |
|---|---|---|---|
| kompetitivna | na prost $E$, v aktivno mesto | $\alpha K_\mathrm{M}$ (raste) | ostane |
| nekompetitivna | na $E$ in $ES$ enako, drugje | ostane | $V_\mathrm{max}/\alpha$ (pada) |
| akompetitivna | samo na $ES$ | $K_\mathrm{M}/\alpha'$ (pada) | $V_\mathrm{max}/\alpha'$ (pada) |

Pri akompetitivni inhibiciji je $\alpha' = 1 + [I]/K_\mathrm{i}'$, kjer $K_\mathrm{i}'$ opisuje vezavo na $ES$. Če se inhibitor na $E$ in $ES$ veže različno močno, govorimo o **mešani inhibiciji**.

Na dvojnem recipročnem diagramu se ločijo takole. Pri kompetitivni se premice z inhibitorjem in brez njega sekajo na osi $y$ (enak $1/V_\mathrm{max}$). Pri nekompetitivni se sekajo na osi $x$ (enak $-1/K_\mathrm{M}$). Pri akompetitivni so vzporedne (enak naklon).

:::premisli
Zakaj lahko učinek kompetitivnega inhibitorja premagamo z zelo veliko $[S]$, nekompetitivnega pa ne?
---
Kompetitivni inhibitor in substrat tekmujeta za isto aktivno mesto. Pri zelo veliki $[S]$ substrat izpodrine inhibitor, zato encim spet doseže $V_\mathrm{max}$. Nekompetitivni inhibitor se veže drugje in deaktivira tudi kompleks $ES$. Del encima je zato vedno izklopljen, ne glede na $[S]$, in $V_\mathrm{max}$ ostane nižja.
:::

### Ireverzibilna inhibicija

Nekateri inhibitorji se na encim vežejo kovalentno in ga trajno uničijo. Tako deluje aspirin, ki acetilira serin v aktivnem mestu ciklooksigenaze. Takšnega inhibitorja z več substrata ne izpodrinemo.

## Rešeni primeri

### Primer 1 (lažji): hitrost iz enačbe

Encim ima $V_\mathrm{max} = 120\,\mu\mathrm{mol/min}$ in $K_\mathrm{M} = 2\,\mathrm{mM}$. Kolikšna je začetna hitrost pri $[S] = 3\,\mathrm{mM}$?

**Podatki:** $V_\mathrm{max} = 120\,\mu\mathrm{mol/min}$, $K_\mathrm{M} = 2\,\mathrm{mM}$, $[S] = 3\,\mathrm{mM}$
**Iščemo:** začetno hitrost $v_0$

:::formula
$v_0 = \dfrac{V_\mathrm{max}\,[S]}{K_\mathrm{M} + [S]}$
:::

**Rešitev:**

1. Koncentraciji imata isto enoto (mM), zato pretvarjanje ni potrebno.
2. Imenovalec: $K_\mathrm{M} + [S] = 2 + 3 = 5\,\mathrm{mM}$.
3. $v_0 = \dfrac{120 \cdot 3}{5}\,\mu\mathrm{mol/min} = 72\,\mu\mathrm{mol/min}$.
4. Preverimo smiselnost: $[S] > K_\mathrm{M}$, zato mora biti $v_0$ več kot polovica $V_\mathrm{max}$. Res, $72$ je $60\,\%$ od $120$.
5. Odgovor: začetna hitrost je $72\,\mu\mathrm{mol/min}$.

### Primer 2: $K_\mathrm{M}$ in $V_\mathrm{max}$ iz meritev

Ana je na poletni šoli v Piranu dobila encim iz morskih bakterij in prenosni spektrofotometer. Pri $[S] = 1\,\mathrm{mM}$ izmeri $v_0 = 50\,\mu\mathrm{M/s}$, pri $[S] = 4\,\mathrm{mM}$ pa $v_0 = 80\,\mu\mathrm{M/s}$. Z dvojnim recipročnim diagramom določi $V_\mathrm{max}$ in $K_\mathrm{M}$.

**Podatki:** $[S]_1 = 1\,\mathrm{mM}$, $v_1 = 50\,\mu\mathrm{M/s}$; $[S]_2 = 4\,\mathrm{mM}$, $v_2 = 80\,\mu\mathrm{M/s}$
**Iščemo:** $V_\mathrm{max}$ in $K_\mathrm{M}$

:::formula
$\dfrac{1}{v_0} = \dfrac{K_\mathrm{M}}{V_\mathrm{max}}\cdot\dfrac{1}{[S]} + \dfrac{1}{V_\mathrm{max}}$
:::

**Rešitev:**

1. Recipročne vrednosti: $1/[S]_1 = 1\,\mathrm{mM^{-1}}$, $1/v_1 = 0{,}02\,\mathrm{s/\mu M}$; $1/[S]_2 = 0{,}25\,\mathrm{mM^{-1}}$, $1/v_2 = 0{,}0125\,\mathrm{s/\mu M}$.
2. Naklon premice skozi obe točki: $\dfrac{0{,}02 - 0{,}0125}{1 - 0{,}25} = \dfrac{0{,}0075}{0{,}75} = 0{,}01\,\mathrm{mM\cdot s/\mu M}$.
3. Odsek na osi $y$: $0{,}02 - 0{,}01 \cdot 1 = 0{,}01\,\mathrm{s/\mu M}$. To je $1/V_\mathrm{max}$, zato $V_\mathrm{max} = 100\,\mu\mathrm{M/s}$.
4. Naklon je $K_\mathrm{M}/V_\mathrm{max}$, zato $K_\mathrm{M} = 0{,}01 \cdot 100 = 1\,\mathrm{mM}$.
5. Preverimo: pri $[S] = K_\mathrm{M} = 1\,\mathrm{mM}$ smo izmerili $50\,\mu\mathrm{M/s}$, kar je res polovica od $100\,\mu\mathrm{M/s}$.
6. Odgovor: $V_\mathrm{max} = 100\,\mu\mathrm{M/s}$ in $K_\mathrm{M} = 1\,\mathrm{mM}$.

### Primer 3 (težji): kompetitivni inhibitor in obratno vprašanje

Encimu iz primera 1 ($V_\mathrm{max} = 120\,\mu\mathrm{mol/min}$, $K_\mathrm{M} = 2\,\mathrm{mM}$, $[S] = 3\,\mathrm{mM}$) dodamo kompetitivni inhibitor s koncentracijo $[I] = 0{,}5\,\mathrm{mM}$ in $K_\mathrm{i} = 0{,}25\,\mathrm{mM}$. Kolikšna je zdaj začetna hitrost? Kolikšno $[S]$ bi potrebovali, da bi encim ob inhibitorju spet dosegel $72\,\mu\mathrm{mol/min}$?

**Podatki:** $V_\mathrm{max} = 120\,\mu\mathrm{mol/min}$, $K_\mathrm{M} = 2\,\mathrm{mM}$, $[S] = 3\,\mathrm{mM}$, $[I] = 0{,}5\,\mathrm{mM}$, $K_\mathrm{i} = 0{,}25\,\mathrm{mM}$, ciljna hitrost $v_0 = 72\,\mu\mathrm{mol/min}$
**Iščemo:** $v_0$ z inhibitorjem in potrebno $[S]$

:::formula
$\alpha = 1 + \dfrac{[I]}{K_\mathrm{i}}$, $\quad v_0 = \dfrac{V_\mathrm{max}\,[S]}{\alpha K_\mathrm{M} + [S]}$

Obrnjena oblika: $[S] = \dfrac{\alpha K_\mathrm{M}\,v_0}{V_\mathrm{max} - v_0}$
:::

**Rešitev:**

1. Faktor: $\alpha = 1 + \dfrac{0{,}5}{0{,}25} = 3$.
2. Navidezna $K_\mathrm{M}$: $\alpha K_\mathrm{M} = 3 \cdot 2 = 6\,\mathrm{mM}$. $V_\mathrm{max}$ ostane, ker je inhibicija kompetitivna.
3. $v_0 = \dfrac{120 \cdot 3}{6 + 3}\,\mu\mathrm{mol/min} = 40\,\mu\mathrm{mol/min}$. Hitrost je padla s $72$ na $40\,\mu\mathrm{mol/min}$.
4. Za obratno vprašanje enačbo rešimo na $[S]$: $v_0(\alpha K_\mathrm{M} + [S]) = V_\mathrm{max}[S]$, od tod $[S] = \dfrac{\alpha K_\mathrm{M}\,v_0}{V_\mathrm{max} - v_0}$.
5. $[S] = \dfrac{6 \cdot 72}{120 - 72}\,\mathrm{mM} = 9\,\mathrm{mM}$.
6. Odgovor: z inhibitorjem je $v_0 = 40\,\mu\mathrm{mol/min}$. Za prvotnih $72\,\mu\mathrm{mol/min}$ potrebujemo $[S] = 9\,\mathrm{mM}$, trikrat več kot brez inhibitorja (kar je ravno $\alpha$).

### Primer 4: zdaj ti

Isti encim ($V_\mathrm{max} = 120\,\mu\mathrm{mol/min}$, $K_\mathrm{M} = 2\,\mathrm{mM}$, $[S] = 3\,\mathrm{mM}$) namesto tega zavira nekompetitivni inhibitor s koncentracijo $[I] = K_\mathrm{i}$. Kolikšna je začetna hitrost?

**Podatki:** $V_\mathrm{max} = 120\,\mu\mathrm{mol/min}$, $K_\mathrm{M} = 2\,\mathrm{mM}$, $[S] = 3\,\mathrm{mM}$, $[I] = K_\mathrm{i}$, inhibicija nekompetitivna
**Iščemo:** začetno hitrost $v_0$

:::formula
$\alpha = 1 + \dfrac{[I]}{K_\mathrm{i}}$, $\quad v_0 = \dfrac{(V_\mathrm{max}/\alpha)\,[S]}{K_\mathrm{M} + [S]}$
:::

**Rešitev:**

1. Ker je $[I] = K_\mathrm{i}$, je $\alpha = 1 + 1 = 2$.
2. Pri nekompetitivni inhibiciji $K_\mathrm{M}$ ostane $2\,\mathrm{mM}$, navidezna $V_\mathrm{max}$ pa je $120/2 = 60\,\mu\mathrm{mol/min}$.
3. Vstavi v enačbo in izračunaj sam, nato preveri:

:::premisli
Koliko je $v_0 = \dfrac{60 \cdot 3}{2 + 3}\,\mu\mathrm{mol/min}$? Ali bi pomagalo, če bi $[S]$ potrojili?
---
$v_0 = 36\,\mu\mathrm{mol/min}$, natanko polovica od $72$. Potrojena $[S]$ bi hitrost le malo dvignila (na $\approx 49\,\mu\mathrm{mol/min}$), škode pa ne bi popravila: tudi pri zelo veliki $[S]$ bi encim dosegel le $60\,\mu\mathrm{mol/min}$.
:::

## Pogoste napake

- **»$K_\mathrm{M}$ je polovica $V_\mathrm{max}$.«** $K_\mathrm{M}$ ni hitrost, ampak koncentracija substrata, pri kateri je $v_0 = V_\mathrm{max}/2$. Enota je mM, ne µmol/min. Preveri enoto, preden zapišeš rezultat.
- **»Več encima poveča $K_\mathrm{M}$.«** Količina encima spremeni le $V_\mathrm{max} = k_\mathrm{cat}[E]_\mathrm{t}$. $K_\mathrm{M}$ je lastnost para encim–substrat in je od $[E]_\mathrm{t}$ neodvisna.
- **»Velika $K_\mathrm{M}$ pomeni močno vezavo.«** Ravno obratno: pri veliki $K_\mathrm{M}$ potrebuješ veliko substrata za polovično hitrost, kar pomeni šibkejšo (navidezno) afiniteto. Majhna $K_\mathrm{M}$ pomeni močnejšo vezavo.
- **Zamenjava vrst inhibicije.** Kompetitivni inhibitor ne zniža $V_\mathrm{max}$, ampak poveča navidezno $K_\mathrm{M}$. Nekompetitivni pa zniža $V_\mathrm{max}$ in $K_\mathrm{M}$ pusti. Pomagaj si z vprašanjem: ali ga velika $[S]$ izpodrine?
- **Napačno branje dvojnega recipročnega diagrama.** Odsek na osi $y$ je $1/V_\mathrm{max}$, ne $V_\mathrm{max}$. Presečišče z osjo $x$ je $-1/K_\mathrm{M}$. Vedno izračunaj obratno vrednost.

## Povzetek

- Michaelis-Mentenova enačba: $v_0 = \dfrac{V_\mathrm{max}[S]}{K_\mathrm{M} + [S]}$; graf je hiperbola, ki se približuje $V_\mathrm{max}$.
- $K_\mathrm{M}$ je $[S]$, pri kateri je $v_0 = V_\mathrm{max}/2$; manjša $K_\mathrm{M}$ pomeni večjo afiniteto.
- $V_\mathrm{max} = k_\mathrm{cat}[E]_\mathrm{t}$; katalitska učinkovitost je $k_\mathrm{cat}/K_\mathrm{M}$.
- Dvojni recipročni diagram: odsek na osi $y$ je $1/V_\mathrm{max}$, naklon $K_\mathrm{M}/V_\mathrm{max}$.
- $\alpha = 1 + [I]/K_\mathrm{i}$. Kompetitivna: $K_\mathrm{M} \to \alpha K_\mathrm{M}$, $V_\mathrm{max}$ ostane. Nekompetitivna: $V_\mathrm{max} \to V_\mathrm{max}/\alpha$, $K_\mathrm{M}$ ostane. Akompetitivna: oba padeta za $\alpha'$.
- Ireverzibilni inhibitorji se vežejo kovalentno in trajno izklopijo encim.

## Drugače: Na sliki

Nariši graf $v_0$ (os $y$) v odvisnosti od $[S]$ (os $x$). Na višini $V_\mathrm{max}$ potegni vodoravno črtkano črto. Krivulja se od izhodišča najprej dviga strmo, skoraj kot premica, nato se upogne in se počasi bliža črtkani črti.

Na polovici višine, pri $V_\mathrm{max}/2$, potegni vodoravno črto do krivulje in od tam navpično navzdol. Kjer zadeneš os $x$, odčitaš $K_\mathrm{M}$.

Dodaj kompetitivni inhibitor: krivulja se raztegne v desno (polovico višine doseže kasneje), a na daleč se bliža isti črtkani črti. Pri nekompetitivnem inhibitorju se celotna krivulja stisne navzdol k nižji črti, polovico svoje višine pa doseže pri isti $[S]$.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si avtopralnico z nekaj boksi. Boks je aktivno mesto, avto je substrat, oprani avto je produkt.

- Ko pride malo avtov, je pralnica napol prazna. Dvakrat več avtov pomeni dvakrat več opranih na uro.
- Ko je vrsta dolga, so vsi boksi ves čas polni. Pralnica pere s polno zmogljivostjo $V_\mathrm{max}$; daljša vrsta tega ne spremeni.
- **Kompetitivni inhibitor** je avto, ki se zapelje v boks, a se ne pere. Če je pravih avtov ogromno, ga hitro preženejo.
- **Nekompetitivni inhibitor** je pokvarjena krtača v nekaterih boksih. Ne glede na dolžino vrste ti boksi perejo počasneje ali sploh ne.

## Drugače: Bolj natančno

**Izpeljava (stacionarno stanje, Briggs in Haldane).** Za $E + S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES \overset{k_2}{\rightarrow} E + P$ predpostavimo, da se $[ES]$ kmalu po začetku ne spreminja:

$$k_1[E][S] = (k_{-1} + k_2)[ES]$$

Z bilanco encima $[E] = [E]_\mathrm{t} - [ES]$ dobimo

$$[ES] = \frac{[E]_\mathrm{t}[S]}{K_\mathrm{M} + [S]}, \qquad K_\mathrm{M} = \frac{k_{-1} + k_2}{k_1}$$

Hitrost je $v_0 = k_2[ES]$, zato je $V_\mathrm{max} = k_2[E]_\mathrm{t}$ in $k_\mathrm{cat} = k_2$. Le kadar je $k_2 \ll k_{-1}$, je $K_\mathrm{M} \approx k_{-1}/k_1 = K_\mathrm{d}$, tj. disociacijska konstanta kompleksa $ES$. Zato je $K_\mathrm{M}$ v splošnem le *navidezna* mera afinitete.

**Meja učinkovitosti.** Pri $[S] \ll K_\mathrm{M}$ je $v_0 = \dfrac{k_\mathrm{cat}}{K_\mathrm{M}}[E][S]$. Konstanta $k_\mathrm{cat}/K_\mathrm{M}$ ne more preseči hitrosti difuzijskega trčenja, približno $10^8$ do $10^9\,\mathrm{M^{-1}s^{-1}}$. Encimi blizu te meje (npr. karboanhidraza) so »katalitsko popolni«.

**Splošna reverzibilna inhibicija.** Če se $I$ veže na $E$ s $K_\mathrm{i}$ in na $ES$ s $K_\mathrm{i}'$, velja

$$v_0 = \frac{V_\mathrm{max}[S]}{\alpha K_\mathrm{M} + \alpha'[S]}$$

z $\alpha = 1 + [I]/K_\mathrm{i}$ in $\alpha' = 1 + [I]/K_\mathrm{i}'$. Posebni primeri: $\alpha' = 1$ kompetitivna, $\alpha = 1$ akompetitivna, $\alpha = \alpha'$ nekompetitivna. Dvojni recipročni diagram je pri natančnem delu le pregled, saj močno poudari napake meritev pri majhni $[S]$; parametre danes določamo z nelinearno regresijo.

## Preveri se

? Kaj je Michaelisova konstanta $K_\mathrm{M}$?
- Polovica največje hitrosti, $V_\mathrm{max}/2$.
~ $V_\mathrm{max}/2$ je hitrost. $K_\mathrm{M}$ je koncentracija substrata, pri kateri encim doseže to hitrost.
+ Koncentracija substrata, pri kateri je $v_0 = V_\mathrm{max}/2$.
- Koncentracija substrata, pri kateri encim doseže $V_\mathrm{max}$.
~ $V_\mathrm{max}$ je limita, ki je encim pri končni $[S]$ ne doseže. $K_\mathrm{M}$ je določena s polovico hitrosti.
> Pri $[S] = K_\mathrm{M}$ je $v_0 = \dfrac{V_\mathrm{max}K_\mathrm{M}}{2K_\mathrm{M}} = \dfrac{V_\mathrm{max}}{2}$.

? Kako kompetitivni inhibitor vpliva na navidezni $K_\mathrm{M}$ in $V_\mathrm{max}$?
- $K_\mathrm{M}$ ostane, $V_\mathrm{max}$ se zmanjša.
~ To velja za nekompetitivno inhibicijo, kjer se $I$ veže drugje kot substrat.
+ $K_\mathrm{M}$ se poveča, $V_\mathrm{max}$ ostane.
- Oba se zmanjšata.
~ Tako deluje akompetitivni inhibitor, ki se veže samo na kompleks $ES$.
> Kompetitivni inhibitor tekmuje s substratom za aktivno mesto: za polovično hitrost je treba več substrata ($\alpha K_\mathrm{M}$), pri zelo veliki $[S]$ pa ga substrat izpodrine in encim doseže isto $V_\mathrm{max}$.

? V reakcijsko zmes dodamo dvakrat več encima, vse drugo ostane enako. Kaj se zgodi?
- $V_\mathrm{max}$ in $K_\mathrm{M}$ se podvojita.
~ $K_\mathrm{M}$ je lastnost para encim–substrat in ni odvisna od količine encima.
- $K_\mathrm{M}$ se razpolovi, $V_\mathrm{max}$ ostane.
~ Več encima ne spremeni afinitete do substrata, pač pa število aktivnih mest in s tem $V_\mathrm{max}$.
+ $V_\mathrm{max}$ se podvoji, $K_\mathrm{M}$ ostane.
> $V_\mathrm{max} = k_\mathrm{cat}[E]_\mathrm{t}$ je premo sorazmerna s količino encima, $K_\mathrm{M}$ pa ne.

? Encim ima $V_\mathrm{max} = 80\,\mu\mathrm{mol/min}$ in $K_\mathrm{M} = 4\,\mathrm{mM}$. Kolikšna je $v_0$ pri $[S] = 12\,\mathrm{mM}$?
- $240\,\mu\mathrm{mol/min}$
~ To je $\dfrac{80 \cdot 12}{4}$: v imenovalcu manjka $[S]$. Pravilno je $K_\mathrm{M} + [S]$.
+ $60\,\mu\mathrm{mol/min}$
- $40\,\mu\mathrm{mol/min}$
~ $40$ je $V_\mathrm{max}/2$, kar velja le pri $[S] = K_\mathrm{M}$. Tu je $[S]$ trikrat večja.
> $v_0 = \dfrac{80 \cdot 12}{4 + 12} = \dfrac{960}{16} = 60\,\mu\mathrm{mol/min}$.

? Nekompetitivni inhibitor s koncentracijo $0{,}6\,\mathrm{mM}$ zniža $V_\mathrm{max}$ s $100$ na $25\,\mu\mathrm{M/s}$. Kolikšna je $K_\mathrm{i}$?
- $0{,}15\,\mathrm{mM}$
~ Tako dobiš, če vzameš $\alpha = 4$ in deliš $[I]/\alpha$. Velja pa $\alpha = 1 + [I]/K_\mathrm{i}$, zato je $[I]/K_\mathrm{i} = \alpha - 1$.
+ $0{,}2\,\mathrm{mM}$
- $2{,}4\,\mathrm{mM}$
~ To je $[I] \cdot \alpha$. $K_\mathrm{i}$ dobiš z deljenjem: $K_\mathrm{i} = \dfrac{[I]}{\alpha - 1}$.
> $\alpha = \dfrac{100}{25} = 4$, torej $\dfrac{[I]}{K_\mathrm{i}} = 3$ in $K_\mathrm{i} = \dfrac{0{,}6\,\mathrm{mM}}{3} = 0{,}2\,\mathrm{mM}$.

:::simboli
E | encim | | | [E]_t: skupna koncentracija encima
S | substrat | | | [S]: koncentracija substrata
P | produkt | | |
v_0 | začetna hitrost reakcije | v_0 = \frac{V_\mathrm{max}\,[S]}{K_\mathrm{M} + [S]} | µmol/min | Michaelis-Mentenova enačba
V_\mathrm{max} | največja hitrost reakcije | | µmol/min | pri nasičenju encima s substratom
K_\mathrm{M} | Michaelisova konstanta | K_\mathrm{M} = \frac{k_{-1} + k_2}{k_1} | mM | [S], pri kateri je v₀ = V_max/2
I | inhibitor | | | [I]: koncentracija inhibitorja
K_\mathrm{i} | inhibicijska konstanta | | mM | manjša K_i pomeni močnejšo vezavo
\alpha | faktor inhibicije | \alpha = 1 + \frac{[I]}{K_\mathrm{i}} | – | za vezavo inhibitorja na prost encim
\alpha' | faktor inhibicije za vezavo na ES | \alpha' = 1 + \frac{[I]}{K_\mathrm{i}'} | – | pri akompetitivni in mešani inhibiciji
k_1 | konstanta hitrosti nastanka ES | | 1/(mM s)
k_{-1} | konstanta hitrosti razpada ES nazaj v E in S | | 1/s
k_2 | konstanta hitrosti nastanka produkta | | 1/s | k_cat = k₂
:::
