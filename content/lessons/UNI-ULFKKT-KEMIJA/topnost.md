---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Ko v raztopino srebrovega nitrata kanemo nekaj kapljic raztopine natrijevega klorida, se takoj pojavi bela oborina srebrovega klorida. Nekatere soli so v vodi zelo dobro topne, druge skoraj netopne. A tudi »netopna« sol se raztaplja vsaj malo, in prav ta majhna topnost je pomembna: določa, ali bo iz raztopine nastala oborina, koliko snovi bo ostalo raztopljene in kako natančno lahko z obarjanjem določimo vsebnost iona.

Topnostna ravnotežja so povsod. Ledvični kamni so oborine kalcijevega oksalata in fosfata, zobna sklenina je hidroksiapatit, ki ga kisline raztapljajo, kapniki in školjke so kalcijev karbonat. V čistilnih napravah fosfate in težke kovine odstranjujemo z obarjanjem, v analizni kemiji pa z **gravimetrijo** natančno določamo maso iona prek mase oborine. Barijev sulfat, ki ga bolniki popijejo pred rentgenskim slikanjem, je kljub strupenosti barijevih ionov varen ravno zaradi izjemno majhne topnosti.

V tej lekciji se naučiš:

- zapisati **topnostni produkt** $K_\mathrm{sp}$ in ga povezati s **topnostjo**,
- napovedati **obarjanje** s primerjavo ionskega produkta in $K_\mathrm{sp}$,
- razložiti vpliv **skupnega iona** in pH na topnost,
- izračunati rezultat **gravimetrične analize**.

## Razlaga

**1. Topnost.** **Topnost** je največja množina (ali masa) snovi, ki se pri dani temperaturi raztopi v danem volumnu raztopine; raztopina je takrat **nasičena**. Množinsko topnost označimo s $s$ in izrazimo v $\mathrm{mol/L}$, masno v $\mathrm{g/L}$. Za orientacijo: snov s topnostjo pod približno $0{,}01\,\mathrm{mol/L}$ imenujemo **težko topna**.

**2. Topnostni produkt.** V nasičeni raztopini težko topne ionske snovi je vzpostavljeno heterogeno ravnotežje med trdno snovjo in ioni v raztopini. Za splošno sol $\mathrm{A}_m\mathrm{B}_n$:

$$\mathrm{A}_m\mathrm{B}_n\mathrm{(s)} \rightleftharpoons m\,\mathrm{A}^{z_+}\mathrm{(aq)} + n\,\mathrm{B}^{z_-}\mathrm{(aq)}, \qquad K_\mathrm{sp} = [\mathrm{A}^{z_+}]^m\,[\mathrm{B}^{z_-}]^n.$$

Trdna snov v izrazu ne nastopa (aktivnost $1$). $K_\mathrm{sp}$ je konstanta ravnotežja in je odvisna le od temperature. Primeri:

- $\mathrm{AgCl(s) \rightleftharpoons Ag^+ + Cl^-}$: $K_\mathrm{sp} = [\mathrm{Ag^+}][\mathrm{Cl^-}] = 1{,}8 \cdot 10^{-10}$,
- $\mathrm{CaF_2(s) \rightleftharpoons Ca^{2+} + 2\,F^-}$: $K_\mathrm{sp} = [\mathrm{Ca^{2+}}][\mathrm{F^-}]^2 = 3{,}9 \cdot 10^{-11}$,
- $\mathrm{Ag_2CrO_4(s) \rightleftharpoons 2\,Ag^+ + CrO_4^{2-}}$: $K_\mathrm{sp} = [\mathrm{Ag^+}]^2[\mathrm{CrO_4^{2-}}] = 1{,}1 \cdot 10^{-12}$,
- $\mathrm{BaSO_4}$: $K_\mathrm{sp} = 1{,}1 \cdot 10^{-10}$ (vse vrednosti pri $25\,^\circ\mathrm{C}$).

**3. Povezava $K_\mathrm{sp}$ in topnosti.** Če se v čisti vodi raztopi $s$ mol soli na liter, je $[\mathrm{A}] = ms$ in $[\mathrm{B}] = ns$:

$$K_\mathrm{sp} = (ms)^m(ns)^n = m^m n^n\,s^{m+n}.$$

| tip soli | primer | $K_\mathrm{sp}$ | $s$ |
|---|---|---|---|
| $\mathrm{AB}$ | $\mathrm{AgCl}$, $\mathrm{BaSO_4}$ | $s^2$ | $\sqrt{K_\mathrm{sp}}$ |
| $\mathrm{AB_2}$ ali $\mathrm{A_2B}$ | $\mathrm{CaF_2}$, $\mathrm{Ag_2CrO_4}$ | $4s^3$ | $\sqrt[3]{K_\mathrm{sp}/4}$ |
| $\mathrm{A_3B_2}$ | $\mathrm{Ca_3(PO_4)_2}$ | $108\,s^5$ | $\sqrt[5]{K_\mathrm{sp}/108}$ |

Pomembno: topnosti soli **različnih tipov** ne moremo primerjati le po $K_\mathrm{sp}$. $\mathrm{Ag_2CrO_4}$ ima manjši $K_\mathrm{sp}$ ($1{,}1 \cdot 10^{-12}$) kot $\mathrm{AgCl}$ ($1{,}8 \cdot 10^{-10}$), a je bolj topen ($s = 6{,}5 \cdot 10^{-5}$ proti $1{,}3 \cdot 10^{-5}\,\mathrm{mol/L}$).

**4. Ionski produkt in obarjanje.** **Ionski produkt** $Q$ ima enako obliko kot $K_\mathrm{sp}$, vanj pa vstavimo trenutne koncentracije ionov (npr. takoj po mešanju raztopin, a **po razredčenju** zaradi mešanja):

- $Q < K_\mathrm{sp}$: raztopina je nenasičena, oborina ne nastane (oziroma se raztaplja),
- $Q = K_\mathrm{sp}$: nasičena raztopina, ravnotežje,
- $Q > K_\mathrm{sp}$: prenasičena raztopina, nastaja **oborina**, dokler ni $Q = K_\mathrm{sp}$.

**5. Vpliv skupnega iona.** Če raztopina že vsebuje enega od ionov soli (»skupni ion«), se ravnotežje po Le Chatelierju premakne v levo in **topnost se zmanjša**. V raztopini $\mathrm{NaCl}$ je $\mathrm{AgCl}$ veliko manj topen kot v čisti vodi. Zato oborine v gravimetriji obarjamo s presežkom obarjalnega reagenta in jih spiramo z razredčeno raztopino skupnega iona, ne s čisto vodo.

**6. Vpliv pH in kompleksov.** Če je anion soli baza (npr. $\mathrm{OH^-}$, $\mathrm{CO_3^{2-}}$, $\mathrm{PO_4^{3-}}$, $\mathrm{F^-}$, oksalat), ga kislina veže in odstrani iz ravnotežja, zato se topnost v kislem **poveča**. Hidroksidi kovin se zato obarjajo šele nad določenim pH. Topnost poveča tudi tvorba kompleksov: $\mathrm{AgCl}$ se raztopi v amoniaku, ker nastane $\mathrm{[Ag(NH_3)_2]^+}$.

**7. Selektivno obarjanje.** Če raztopina vsebuje več ionov, ki z istim reagentom tvorijo oborine, se najprej obori tista sol, pri kateri ionski produkt najprej doseže $K_\mathrm{sp}$. S postopnim dodajanjem reagenta lahko ione ločimo.

**8. Gravimetrija.** Gravimetrična analiza je določanje snovi s tehtanjem. Postopek:

1. vzorec natančno natehtamo in raztopimo,
2. iskani ion **kvantitativno oborimo** (praktično v celoti, npr. sulfat kot $\mathrm{BaSO_4}$, klorid kot $\mathrm{AgCl}$, nikelj z dimetilglioksimom) s presežkom reagenta,
3. oborino pustimo **zoreti** (nastanejo večji kristali, ki jih lažje filtriramo, in manj nečistot),
4. **filtriramo** in **spiramo**,
5. **sušimo** ali **žarimo** do stalne mase in tehtamo **tehtalno obliko**,
6. iz mase tehtalne oblike izračunamo maso iskane snovi z **gravimetričnim faktorjem**:

$$m(\text{iskane snovi}) = m(\text{tehtalne oblike}) \cdot \frac{a\,M(\text{iskane snovi})}{b\,M(\text{tehtalne oblike})},$$

kjer sta $a$ in $b$ števili, ki uravnata število atomov ključnega elementa (pri sulfatu kot $\mathrm{BaSO_4}$ je $a = b = 1$).

Dobra oborina za gravimetrijo je zelo slabo topna, čista, lahko filtrabilna in ima znano, stalno sestavo.

## Rešeni primeri

### Primer 1 (lažji)

Izračunaj množinsko in masno topnost srebrovega klorida v čisti vodi pri $25\,^\circ\mathrm{C}$. $K_\mathrm{sp}(\mathrm{AgCl}) = 1{,}8 \cdot 10^{-10}$, $M(\mathrm{AgCl}) = 143{,}32\,\mathrm{g/mol}$.

**Podatki:** $K_\mathrm{sp} = 1{,}8 \cdot 10^{-10}$, $M(\mathrm{AgCl}) = 143{,}32\,\mathrm{g/mol}$, topilo čista voda, $T = 25\,^\circ\mathrm{C}$
**Iščemo:** topnost $s$ v $\mathrm{mol/L}$ in v $\mathrm{g/L}$

:::formula
$K_\mathrm{sp} = [\mathrm{Ag^+}][\mathrm{Cl^-}] = s^2$, $\quad s = \sqrt{K_\mathrm{sp}}$, $\quad \gamma = s\,M$
:::

**Rešitev:**

1. Raztopi se $s$ mol AgCl na liter, torej $[\mathrm{Ag^+}] = [\mathrm{Cl^-}] = s$.
2. $s^2 = 1{,}8 \cdot 10^{-10}$, $s = \sqrt{1{,}8 \cdot 10^{-10}} = 1{,}34 \cdot 10^{-5}\,\mathrm{mol/L}$.
3. Masna topnost: $\gamma = 1{,}34 \cdot 10^{-5}\,\mathrm{mol/L} \cdot 143{,}32\,\mathrm{g/mol} = 1{,}92 \cdot 10^{-3}\,\mathrm{g/L}$.
4. Odgovor: topnost AgCl v vodi je $1{,}34 \cdot 10^{-5}\,\mathrm{mol/L}$ oziroma približno $1{,}9\,\mathrm{mg}$ na liter.

### Primer 2

Izračunaj topnost kalcijevega fluorida v čisti vodi in v raztopini natrijevega fluorida s koncentracijo $0{,}010\,\mathrm{mol/L}$. Kolikokrat se topnost zmanjša? $K_\mathrm{sp}(\mathrm{CaF_2}) = 3{,}9 \cdot 10^{-11}$.

**Podatki:** $K_\mathrm{sp}(\mathrm{CaF_2}) = 3{,}9 \cdot 10^{-11}$, $c(\mathrm{NaF}) = 0{,}010\,\mathrm{mol/L}$ (popolnoma disociiran, $[\mathrm{F^-}]_0 = 0{,}010\,\mathrm{mol/L}$)
**Iščemo:** topnost $s_1$ v vodi, topnost $s_2$ v raztopini NaF in razmerje $s_1/s_2$

:::formula
$K_\mathrm{sp} = [\mathrm{Ca^{2+}}][\mathrm{F^-}]^2$; v vodi $K_\mathrm{sp} = s(2s)^2 = 4s^3$; s skupnim ionom $K_\mathrm{sp} = s\,(0{,}010 + 2s)^2 \approx s \cdot 0{,}010^2$
:::

**Rešitev:**

1. V vodi: $[\mathrm{Ca^{2+}}] = s_1$, $[\mathrm{F^-}] = 2s_1$, $4s_1^3 = 3{,}9 \cdot 10^{-11}$.
2. $s_1 = \sqrt[3]{3{,}9 \cdot 10^{-11}/4} = \sqrt[3]{9{,}75 \cdot 10^{-12}} = 2{,}14 \cdot 10^{-4}\,\mathrm{mol/L}$.
3. V raztopini NaF: $[\mathrm{Ca^{2+}}] = s_2$, $[\mathrm{F^-}] = 0{,}010 + 2s_2 \approx 0{,}010\,\mathrm{mol/L}$ (ker bo $s_2$ zelo majhna).
4. $s_2 = \dfrac{3{,}9 \cdot 10^{-11}}{(0{,}010)^2} = 3{,}9 \cdot 10^{-7}\,\mathrm{mol/L}$.
5. Preizkus približka: $2s_2 = 7{,}8 \cdot 10^{-7} \ll 0{,}010$, približek velja.
6. Razmerje: $s_1/s_2 = 2{,}14 \cdot 10^{-4}/3{,}9 \cdot 10^{-7} \approx 550$.
7. Odgovor: v čisti vodi je topnost $2{,}1 \cdot 10^{-4}\,\mathrm{mol/L}$, v raztopini NaF $3{,}9 \cdot 10^{-7}\,\mathrm{mol/L}$; skupni ion zmanjša topnost približno $550$-krat.

### Primer 3 (težji)

Vsebnost amonijevega sulfata v gnojilu določamo gravimetrično. $0{,}5000\,\mathrm{g}$ vzorca raztopimo, sulfat oborimo s presežkom $\mathrm{BaCl_2}$, oborino filtriramo, speremo, žarimo in stehtamo $0{,}8250\,\mathrm{g}$ $\mathrm{BaSO_4}$. Izračunaj masni delež sulfata in amonijevega sulfata v vzorcu. Oceni še, koliko oborine bi izgubili, če bi jo sprali z $200\,\mathrm{mL}$ čiste vode, ki se nasiti z $\mathrm{BaSO_4}$. $M(\mathrm{BaSO_4}) = 233{,}39$, $M(\mathrm{SO_4^{2-}}) = 96{,}06$, $M(\mathrm{(NH_4)_2SO_4}) = 132{,}14\,\mathrm{g/mol}$, $K_\mathrm{sp}(\mathrm{BaSO_4}) = 1{,}1 \cdot 10^{-10}$.

**Podatki:** $m(\text{vzorca}) = 0{,}5000\,\mathrm{g}$, $m(\mathrm{BaSO_4}) = 0{,}8250\,\mathrm{g}$, $V(\text{vode za spiranje}) = 200\,\mathrm{mL}$, $M(\mathrm{BaSO_4}) = 233{,}39\,\mathrm{g/mol}$, $M(\mathrm{SO_4^{2-}}) = 96{,}06\,\mathrm{g/mol}$, $M(\mathrm{(NH_4)_2SO_4}) = 132{,}14\,\mathrm{g/mol}$, $K_\mathrm{sp}(\mathrm{BaSO_4}) = 1{,}1 \cdot 10^{-10}$
**Iščemo:** $w(\mathrm{SO_4^{2-}})$, $w(\mathrm{(NH_4)_2SO_4})$ in izgubo mase pri spiranju

:::formula
$n(\mathrm{SO_4^{2-}}) = n(\mathrm{BaSO_4}) = \dfrac{m(\mathrm{BaSO_4})}{M(\mathrm{BaSO_4})}$, $\quad w = \dfrac{m(\text{iskane snovi})}{m(\text{vzorca})}$, $\quad s = \sqrt{K_\mathrm{sp}}$
:::

**Rešitev:**

1. $n(\mathrm{BaSO_4}) = 0{,}8250/233{,}39 = 3{,}535 \cdot 10^{-3}\,\mathrm{mol}$; vsak sulfatni ion da eno formulsko enoto $\mathrm{BaSO_4}$.
2. $m(\mathrm{SO_4^{2-}}) = 3{,}535 \cdot 10^{-3} \cdot 96{,}06 = 0{,}3396\,\mathrm{g}$ (gravimetrični faktor $96{,}06/233{,}39 = 0{,}4116$).
3. $w(\mathrm{SO_4^{2-}}) = 0{,}3396/0{,}5000 = 0{,}679 = 67{,}9\,\%$.
4. Amonijev sulfat: $m = 3{,}535 \cdot 10^{-3} \cdot 132{,}14 = 0{,}4671\,\mathrm{g}$, $w = 0{,}4671/0{,}5000 = 93{,}4\,\%$ (ob predpostavki, da je ves sulfat v obliki amonijevega sulfata).
5. Izguba pri spiranju: $s(\mathrm{BaSO_4}) = \sqrt{1{,}1 \cdot 10^{-10}} = 1{,}05 \cdot 10^{-5}\,\mathrm{mol/L}$; v $0{,}200\,\mathrm{L}$ se raztopi $2{,}10 \cdot 10^{-6}\,\mathrm{mol}$, kar je $2{,}10 \cdot 10^{-6} \cdot 233{,}39\,\mathrm{g} = 0{,}49\,\mathrm{mg}$.
6. Relativna napaka: $0{,}49\,\mathrm{mg}/825\,\mathrm{mg} \approx 0{,}06\,\%$, kar je manj od običajne natančnosti gravimetrične analize (okoli $0{,}1\,\%$); pri bolj topnih oborinah bi bila napaka večja.
7. Odgovor: vzorec vsebuje $67{,}9\,\%$ sulfata oziroma $93{,}4\,\%$ amonijevega sulfata; spiranje z $200\,\mathrm{mL}$ vode bi raztopilo največ okoli $0{,}5\,\mathrm{mg}$ oborine ($0{,}06\,\%$).

## Pogoste napake

- **Pozabljeni koeficienti v $K_\mathrm{sp}$.** Za $\mathrm{CaF_2}$ je $K_\mathrm{sp} = s \cdot (2s)^2 = 4s^3$, ne $s \cdot 2s = 2s^2$ in ne $s^3$.
- **Primerjava topnosti le po $K_\mathrm{sp}$.** Pri solih različnih tipov ($\mathrm{AB}$ in $\mathrm{AB_2}$) izračunaj $s$; manjši $K_\mathrm{sp}$ ne pomeni nujno manjše topnosti.
- **Mešanje raztopin brez razredčenja.** Ko zmešamo $100\,\mathrm{mL}$ in $100\,\mathrm{mL}$, se koncentraciji obeh raztopin razpolovita. $Q$ računamo z razredčenimi koncentracijami.
- **$K_\mathrm{sp}$ se ne spremeni s skupnim ionom.** Spremeni se topnost, $K_\mathrm{sp}$ ostane enak (odvisen je le od temperature).
- **Spiranje z vodo.** Oborine v gravimetriji ne spiramo s preveč čiste vode; uporabimo malo tekočine z elektrolitom ali skupnim ionom, sicer del oborine izgubimo ali pa preide v koloidno stanje in gre skozi filter.
- **Gravimetrični faktor.** Pri izračunu mase iskane snovi pomnožimo maso oborine z razmerjem molskih mas, ne le z masnim deležem, in upoštevamo število atomov (npr. $\mathrm{Fe_2O_3}$ vsebuje dva atoma Fe: $m(\mathrm{Fe}) = m(\mathrm{Fe_2O_3}) \cdot 2M(\mathrm{Fe})/M(\mathrm{Fe_2O_3})$).

## Povzetek

- Topnost $s$ je koncentracija nasičene raztopine; za težko topne soli velja ravnotežje $\mathrm{A}_m\mathrm{B}_n\mathrm{(s)} \rightleftharpoons m\,\mathrm{A} + n\,\mathrm{B}$.
- $K_\mathrm{sp} = [\mathrm{A}]^m[\mathrm{B}]^n$; za $\mathrm{AB}$ je $K_\mathrm{sp} = s^2$, za $\mathrm{AB_2}$ $4s^3$, za $\mathrm{A_3B_2}$ $108\,s^5$.
- $Q > K_\mathrm{sp}$: obarjanje; $Q < K_\mathrm{sp}$: ni oborine; $Q$ po razredčenju zaradi mešanja.
- Skupni ion topnost zmanjša; kislina poveča topnost soli bazičnih anionov; kompleksi povečajo topnost.
- Pri več ionih se najprej obori sol, ki prva doseže $K_\mathrm{sp}$ (selektivno obarjanje).
- Gravimetrija: kvantitativno obarjanje, filtriranje, spiranje, sušenje ali žarjenje, tehtanje; $m(\text{snovi}) = m(\text{oborine}) \cdot$ gravimetrični faktor.

## Drugače: Na sliki

Nasičeno raztopino si predstavljaj kot kristal na dnu čaše, iz katerega ioni stalno odhajajo v raztopino, iz raztopine pa se enako hitro vračajo nanj:

```
        raztopina:   Ag+    Cl-      Ag+
                        Cl-     Ag+     Cl-
                     ↑ raztapljanje   ↓ obarjanje
        ===============[ AgCl(s) ]===============
```

Pri $Q < K_\mathrm{sp}$ je »odhajanje« hitrejše in kristal se manjša. Pri $Q > K_\mathrm{sp}$ je »vračanje« hitrejše in kristal raste (nastaja oborina).

Vpliv skupnega iona: če v čašo dodaš veliko ionov $\mathrm{Cl^-}$ (kuhinjsko sol), se ioni $\mathrm{Ag^+}$ veliko pogosteje srečajo s kloridom in se vrnejo v kristal. V raztopini ostane manj srebra.

## Drugače: Iz vsakdanjega življenja

**Ledvični kamni.** Kalcijev oksalat ima $K_\mathrm{sp}$ okoli $10^{-9}$. Če je v urinu veliko kalcija in oksalata (špinača, rabarbara, premalo tekočine), ionski produkt preseže $K_\mathrm{sp}$ in nastajajo kristali. Zdravniki zato svetujejo veliko pitja: večji volumen urina zniža koncentraciji in s tem $Q$.

**Zobje in fluor.** Sklenina je hidroksiapatit $\mathrm{Ca_5(PO_4)_3OH}$. Kisline iz bakterij vežejo $\mathrm{OH^-}$ in fosfat, zato se sklenina raztaplja (vpliv pH na topnost). Fluorid nadomesti $\mathrm{OH^-}$ in nastane fluorapatit, ki je manj topen in odpornejši proti kislinam.

**Barijev obrok.** Ioni $\mathrm{Ba^{2+}}$ so strupeni, a $\mathrm{BaSO_4}$ je tako slabo topen ($s \approx 10^{-5}\,\mathrm{mol/L}$), da se ga raztopi premalo za zastrupitev; hkrati močno absorbira rentgenske žarke in zato lepo pokaže prebavila na slikanju.

**Trda voda in čistilne naprave.** Kotlovec je $\mathrm{CaCO_3}$, ki se izloča, ko pri segrevanju iz vode uhaja $\mathrm{CO_2}$ in se poveča koncentracija karbonata. V čistilnih napravah fosfat odstranjujejo z dodatkom železovih ali aluminijevih soli, ki tvorijo netopne fosfate, težke kovine pa z obarjanjem hidroksidov ali sulfidov pri primernem pH.

## Drugače: Korak za korakom s številkami

Raztopina vsebuje $0{,}010\,\mathrm{mol/L}$ $\mathrm{Cl^-}$ in $0{,}010\,\mathrm{mol/L}$ $\mathrm{CrO_4^{2-}}$. Počasi dodajamo $\mathrm{AgNO_3}$ (prostornino zanemarimo). Katera oborina nastane prva in koliko klorida je še v raztopini, ko se začne obarjati druga? $K_\mathrm{sp}(\mathrm{AgCl}) = 1{,}8 \cdot 10^{-10}$, $K_\mathrm{sp}(\mathrm{Ag_2CrO_4}) = 1{,}1 \cdot 10^{-12}$.

1. **Začetek obarjanja AgCl:** $[\mathrm{Ag^+}] = K_\mathrm{sp}/[\mathrm{Cl^-}] = 1{,}8 \cdot 10^{-10}/0{,}010 = 1{,}8 \cdot 10^{-8}\,\mathrm{mol/L}$.
2. **Začetek obarjanja $\mathrm{Ag_2CrO_4}$:** $[\mathrm{Ag^+}] = \sqrt{K_\mathrm{sp}/[\mathrm{CrO_4^{2-}}]} = \sqrt{1{,}1 \cdot 10^{-12}/0{,}010} = 1{,}05 \cdot 10^{-5}\,\mathrm{mol/L}$.
3. **Primerjava:** za AgCl zadošča veliko manjša koncentracija srebra, zato se najprej obarja **AgCl**, čeprav ima $\mathrm{Ag_2CrO_4}$ manjši $K_\mathrm{sp}$.
4. **Klorid ob začetku obarjanja kromata:** $[\mathrm{Cl^-}] = 1{,}8 \cdot 10^{-10}/1{,}05 \cdot 10^{-5} = 1{,}7 \cdot 10^{-5}\,\mathrm{mol/L}$.
5. **Delež oborjenega klorida:** $1 - 1{,}7 \cdot 10^{-5}/0{,}010 = 0{,}9983$, torej $99{,}83\,\%$.
6. **Uporaba:** na tem temelji **Mohrova titracija** klorida s srebrovim nitratom. Kromat je indikator: ko se ves klorid praktično obori, se pojavi rdečerjava oborina $\mathrm{Ag_2CrO_4}$, ki pokaže končno točko.

## Drugače: Bolj natančno

**Aktivnosti in ionska moč.** Natančno je $K_\mathrm{sp} = a(\mathrm{A})^m\,a(\mathrm{B})^n$, kjer je aktivnost $a_i = \gamma_i\,c_i/c^\circ$. V raztopinah z veliko ioni (večja ionska moč $I = \tfrac12\sum c_i z_i^2$) so aktivnostni koeficienti $\gamma_i < 1$, zato morajo biti koncentracije večje, da je produkt aktivnosti enak $K_\mathrm{sp}$. Topnost težko topne soli se zato v raztopini inertnega elektrolita (npr. $\mathrm{KNO_3}$) nekoliko **poveča**: to je **solni učinek**, nasproten učinku skupnega iona. Za razredčene raztopine $\gamma_i$ ocenimo z Debye-Hücklovim limitnim zakonom $\log\gamma_i = -0{,}509\,z_i^2\sqrt{I}$ (voda, $25\,^\circ\mathrm{C}$).

**Odvisnost topnosti od pH, kvantitativno.** Za hidrokside: iz $K_\mathrm{sp}(\mathrm{Mg(OH)_2}) = 5{,}6 \cdot 10^{-12}$ in $[\mathrm{Mg^{2+}}] = 0{,}010\,\mathrm{mol/L}$ se oborina začne tvoriti pri $[\mathrm{OH^-}] = \sqrt{5{,}6 \cdot 10^{-12}/0{,}010} = 2{,}4 \cdot 10^{-5}\,\mathrm{mol/L}$, torej pri $\mathrm{pH} \approx 9{,}4$. Za sol šibke kisline $\mathrm{MA}$ s konstanto $K_\mathrm{a}$ kisline $\mathrm{HA}$ je skupna topnost

$$s = \sqrt{K_\mathrm{sp}\left(1 + \frac{[\mathrm{H^+}]}{K_\mathrm{a}}\right)},$$

ker je le del raztopljenega aniona v obliki $\mathrm{A^-}$. Pri $[\mathrm{H^+}] \gg K_\mathrm{a}$ topnost raste s korenom koncentracije $\mathrm{H^+}$.

**Termodinamika raztapljanja.** $K_\mathrm{sp}$ je povezan s standardno Gibbsovo energijo raztapljanja, $\Delta G^\circ = -RT\ln K_\mathrm{sp}$. Za $\mathrm{AgCl}$ je $\Delta G^\circ = -8{,}314 \cdot 298 \cdot \ln(1{,}8 \cdot 10^{-10})\,\mathrm{J/mol} \approx +55{,}6\,\mathrm{kJ/mol}$. Temperaturno odvisnost opisuje van 't Hoffova enačba; večina soli je pri višji temperaturi bolj topna, ker je raztapljanje endotermno.

**Kakovost gravimetrične oborine.** Velikost delcev je odvisna od **relativne prenasičenosti** $(Q - S)/S$ (von Weimarn), kjer je $S$ ravnotežna topnost. Velika prenasičenost da veliko drobnih kristalnih jeder (koloidna oborina, težko filtrabilna), majhna pa manj večjih kristalov. Zato obarjamo iz razredčenih, vročih raztopin s počasnim dodajanjem reagenta ob mešanju in oborino pustimo zoreti (Ostwaldovo zorenje: majhni kristali se raztapljajo, veliki rastejo). Nečistote v oborini (**soobarjanje**, okluzija, adsorpcija) so glavni vir sistematskih napak gravimetrije.

## Preveri se

? Kateri je pravilni izraz za topnostni produkt srebrovega kromata $\mathrm{Ag_2CrO_4}$?
- $K_\mathrm{sp} = [\mathrm{Ag^+}][\mathrm{CrO_4^{2-}}]$
+ $K_\mathrm{sp} = [\mathrm{Ag^+}]^2[\mathrm{CrO_4^{2-}}]$
- $K_\mathrm{sp} = \dfrac{[\mathrm{Ag^+}]^2[\mathrm{CrO_4^{2-}}]}{[\mathrm{Ag_2CrO_4}]}$
> Iz $\mathrm{Ag_2CrO_4(s) \rightleftharpoons 2\,Ag^+ + CrO_4^{2-}}$ dobimo koeficient $2$ kot eksponent. Trdne snovi v izrazu ne pišemo.

? Topnost soli tipa $\mathrm{AB}$ v vodi je $2{,}0 \cdot 10^{-4}\,\mathrm{mol/L}$. Kolikšen je njen $K_\mathrm{sp}$?
- $2{,}0 \cdot 10^{-4}$
- $1{,}4 \cdot 10^{-2}$
+ $4{,}0 \cdot 10^{-8}$
> Za sol $\mathrm{AB}$ je $K_\mathrm{sp} = s^2 = (2{,}0 \cdot 10^{-4})^2 = 4{,}0 \cdot 10^{-8}$. $1{,}4 \cdot 10^{-2}$ je koren topnosti, ne kvadrat.

? Ionski produkt v raztopini je večji od $K_\mathrm{sp}$. Kaj se zgodi?
+ nastaja oborina
- sol se raztaplja
- nič, raztopina je nasičena
> Pri $Q > K_\mathrm{sp}$ je raztopina prenasičena; ioni se izločajo kot oborina, dokler ni $Q = K_\mathrm{sp}$.

? Kaj se zgodi s topnostjo srebrovega klorida, če v nasičeno raztopino dodamo kuhinjsko sol?
- poveča se
+ zmanjša se
- ostane enaka
> Dodani $\mathrm{Cl^-}$ je skupni ion; ravnotežje $\mathrm{AgCl(s) \rightleftharpoons Ag^+ + Cl^-}$ se premakne v levo, del AgCl se obori in topnost se zmanjša.
