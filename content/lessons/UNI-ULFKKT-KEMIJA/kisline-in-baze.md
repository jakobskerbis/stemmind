---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Eva na zemljevidu riše pot po Andih: drugi dan prenoči v Cuscu na $3400\,\mathrm{m}$. Zdravnica jo opozori, da bo tam dihala hitreje in z izdihom izgubljala več $\mathrm{CO_2}$, zato se ji bo pH krvi dvignil. Kri ima pH med $7{,}35$ in $7{,}45$; že odmik za nekaj desetink je življenjsko nevaren. Eva bi rada vedela, za koliko se pH premakne in zakaj telo zdrži prve dni. Odgovor da račun z ravnotežjem šibke kisline in njene konjugirane baze. Enak račun odloča, ali encim deluje, kje se zdravilo absorbira, ali rastlina v tleh dobi fosfor in ali v jezeru preživijo ribe.

V gimnaziji si spoznal pH in ločil močne in šibke kisline. Na fakulteti se naučimo **računati**:

- pH raztopin močnih kislin in baz,
- pH raztopin šibkih kislin in baz iz konstante kislosti $K_a$ oziroma bazičnosti $K_b$,
- pH **pufrov** (blažilnih raztopin) in kako se pH spremeni, ko pufru dodamo kislino ali bazo.

Enaka logika ravnotežja, ki jo boš tu uporabil, se ponovi pri topnosti, kompleksih in v analizni kemiji pri titracijah.

## Razlaga

### Najprej skušnjava

Zelo mamljiva je misel: kislina s koncentracijo $0{,}10\,\mathrm{mol/L}$ ima pH $1$, ne glede na to, katera kislina je. Za $\mathrm{HCl}$ to drži, za ocetno kislino enake koncentracije pa dobimo pH okoli $2{,}9$ (Primer 2). Razlika ni v koncentraciji, ampak v tem, kolikšen delež molekul proton res odda. Za popravek potrebujemo tri stvari: kaj sploh je kislina, kako merimo kislost in kako opišemo kislino, ki proton odda le delno.

### Brønsted-Lowryjeva definicija

**Kislina** je donor protona ($\mathrm{H^+}$), **baza** je akceptor protona. Ko kislina $\mathrm{HA}$ odda proton, nastane njena **konjugirana baza** $\mathrm{A^-}$:

$$\mathrm{HA + H_2O \rightleftharpoons H_3O^+ + A^-}.$$

Pare $\mathrm{HA/A^-}$, $\mathrm{NH_4^+/NH_3}$, $\mathrm{H_3O^+/H_2O}$ imenujemo **konjugirani pari**. Voda je **amfoterna**: je kislina in baza.

### Avtoprotoliza vode in pH

V čisti vodi poteka $\mathrm{2\,H_2O \rightleftharpoons H_3O^+ + OH^-}$ z **ionskim produktom vode**

$$K_w = [\mathrm{H_3O^+}][\mathrm{OH^-}] = 1{,}0 \cdot 10^{-14} \quad (\text{pri } 25\,^\circ\mathrm{C}).$$

Definiramo $\mathrm{pH} = -\log [\mathrm{H_3O^+}]$ in $\mathrm{pOH} = -\log [\mathrm{OH^-}]$, kjer koncentracijo vstavimo v $\mathrm{mol/L}$ brez enote. Pri $25\,^\circ\mathrm{C}$ velja $\mathrm{pH} + \mathrm{pOH} = 14{,}00$. Raztopina je nevtralna pri $\mathrm{pH} = 7$, kisla pri $\mathrm{pH} < 7$ in bazična pri $\mathrm{pH} > 7$. Ker je lestvica logaritemska, pomeni razlika ene enote pH desetkratno razliko v koncentraciji $\mathrm{H_3O^+}$.

### Močne kisline in baze

Močne kisline ($\mathrm{HCl}$, $\mathrm{HBr}$, $\mathrm{HI}$, $\mathrm{HNO_3}$, $\mathrm{HClO_4}$, prva stopnja $\mathrm{H_2SO_4}$) in močne baze (hidroksidi alkalijskih kovin, $\mathrm{Ca(OH)_2}$, $\mathrm{Ba(OH)_2}$) so v razredčenih raztopinah praktično popolnoma protolizirane oziroma disociirane. Zato:

$$[\mathrm{H_3O^+}] = c_{\text{kisline}}, \qquad [\mathrm{OH^-}] = z \cdot c_{\text{baze}},$$

kjer je $z$ število ionov $\mathrm{OH^-}$ na formulsko enoto (za $\mathrm{Ba(OH)_2}$ je $z = 2$).

### Šibke kisline

Tu se skušnjava z začetka razreši: šibka kislina je le delno protolizirana. Ravnotežje opisuje **konstanta kislosti**

$$K_a = \frac{[\mathrm{H_3O^+}][\mathrm{A^-}]}{[\mathrm{HA}]}, \qquad \mathrm{p}K_a = -\log K_a.$$

Manjši $K_a$ (večji $\mathrm{p}K_a$) pomeni šibkejšo kislino. Za raztopino s **začetno** koncentracijo $c$ naredimo tabelo začetek-sprememba-ravnotežje: $[\mathrm{H_3O^+}] = [\mathrm{A^-}] = x$, $[\mathrm{HA}] = c - x$, zato

$$K_a = \frac{x^2}{c - x}.$$

Če je kislina dovolj šibka in ne preveč razredčena ($x \ll c$, v praksi pod $5\,\%$ od $c$), smemo $c - x \approx c$ in dobimo

$$[\mathrm{H_3O^+}] \approx \sqrt{K_a c}, \qquad \mathrm{pH} \approx \tfrac{1}{2}(\mathrm{p}K_a - \log c).$$

Na koncu približek vedno preverimo; če ne velja, rešimo kvadratno enačbo $x^2 + K_a x - K_a c = 0$. Delež protoliziranih molekul $\alpha = x/c$ imenujemo **stopnja protolize**; z redčenjem narašča.

:::premisli
Raztopino $\mathrm{HCl}$ razredčiš desetkrat in pH se dvigne za $1$. Za koliko se dvigne pH ocetne kisline, če jo razredčiš desetkrat?
---
Le za približno $0{,}5$: iz $\mathrm{pH} \approx \tfrac{1}{2}(\mathrm{p}K_a - \log c)$ se $\log c$ zmanjša za $1$, pH pa zraste za polovico tega. Pri redčenju se namreč protolizira večji delež molekul in to delno nadomesti izgubo kisline.
:::

### Šibke baze

Za bazo $\mathrm{B + H_2O \rightleftharpoons BH^+ + OH^-}$ je $K_b = \frac{[\mathrm{BH^+}][\mathrm{OH^-}]}{[\mathrm{B}]}$ in analogno $[\mathrm{OH^-}] \approx \sqrt{K_b c}$. Iz $\mathrm{pOH}$ izračunamo $\mathrm{pH} = 14 - \mathrm{pOH}$. Za konjugirani par velja

$$K_a \cdot K_b = K_w, \qquad \mathrm{p}K_a + \mathrm{p}K_b = 14{,}00.$$

Močnejša kot je kislina, šibkejša je njena konjugirana baza.

### Pufri

Tudi tu je skušnjava: pufer naj bi pH »zaklenil«. V resnici ga le blaži. **Pufer** (blažilna raztopina) vsebuje šibko kislino in njeno konjugirano bazo v primerljivih množinah (npr. $\mathrm{CH_3COOH}$ in $\mathrm{CH_3COONa}$ ali $\mathrm{NH_3}$ in $\mathrm{NH_4Cl}$). Dodana kislina reagira z bazo pufra, dodana baza s kislino pufra, zato se pH le malo spremeni. pH pufra izračunamo s **Henderson-Hasselbalchovo enačbo**:

$$\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A^-}]}{[\mathrm{HA}]} = \mathrm{p}K_a + \log\frac{n(\mathrm{A^-})}{n(\mathrm{HA})}.$$

Ker sta obe snovi v isti prostornini, smemo vstaviti kar razmerje množin. Pufer je najučinkovitejši pri $\mathrm{pH} \approx \mathrm{p}K_a$ (razmerje $1 : 1$); uporaben je približno v območju $\mathrm{p}K_a \pm 1$. **Kapaciteta pufra** je tem večja, čim večji sta koncentraciji obeh komponent.

Ko pufru dodamo močno bazo $\mathrm{OH^-}$, poteče $\mathrm{HA + OH^- \to A^- + H_2O}$: $n(\mathrm{HA})$ se zmanjša, $n(\mathrm{A^-})$ pa poveča za enako množino. Pri dodatku močne kisline je obratno.

:::premisli
Pufer razredčiš z vodo na desetkratno prostornino. Kaj se zgodi s pH in kaj s kapaciteto?
---
pH ostane skoraj enak, ker je odvisen le od razmerja $n(\mathrm{A^-})/n(\mathrm{HA})$, ki se z redčenjem ne spremeni. Kapaciteta pa pade približno desetkrat, ker sta koncentraciji obeh komponent desetkrat manjši: enak dodatek $\mathrm{NaOH}$ zdaj porabi veliko večji delež kisline pufra.
:::

## Rešeni primeri

### Primer 1 (lažji)

Izračunaj pH raztopine $\mathrm{HCl}$ s koncentracijo $0{,}020\,\mathrm{mol/L}$ in pH raztopine $\mathrm{Ba(OH)_2}$ s koncentracijo $0{,}0050\,\mathrm{mol/L}$ pri $25\,^\circ\mathrm{C}$.

**Podatki:** $c(\mathrm{HCl}) = 0{,}020\,\mathrm{mol/L}$, $c(\mathrm{Ba(OH)_2}) = 0{,}0050\,\mathrm{mol/L}$, $T = 25\,^\circ\mathrm{C}$, $K_w = 1{,}0 \cdot 10^{-14}$
**Iščemo:** pH obeh raztopin

:::formula
Močna kislina: $[\mathrm{H_3O^+}] = c$, $\mathrm{pH} = -\log[\mathrm{H_3O^+}]$. Močna baza: $[\mathrm{OH^-}] = z\,c$, $\mathrm{pH} = 14 - \mathrm{pOH}$
:::

**Rešitev:**

1. $\mathrm{HCl}$ je popolnoma protolizirana: $[\mathrm{H_3O^+}] = 0{,}020\,\mathrm{mol/L}$.
2. $\mathrm{pH} = -\log 0{,}020 \approx 1{,}70$.
3. $\mathrm{Ba(OH)_2 \to Ba^{2+} + 2\,OH^-}$, zato $[\mathrm{OH^-}] = 2 \cdot 0{,}0050\,\mathrm{mol/L} = 0{,}010\,\mathrm{mol/L}$.
4. $\mathrm{pOH} = -\log 0{,}010 = 2{,}00$, $\mathrm{pH} = 14{,}00 - 2{,}00 = 12{,}00$.
5. Odgovor: raztopina $\mathrm{HCl}$ ima pH približno $1{,}70$, raztopina $\mathrm{Ba(OH)_2}$ pa pH $12{,}00$.

### Primer 2

Izračunaj pH in stopnjo protolize v raztopini ocetne kisline s koncentracijo $0{,}10\,\mathrm{mol/L}$. Konstanta kislosti ocetne kisline je $K_a = 1{,}8 \cdot 10^{-5}$.

**Podatki:** $c(\mathrm{CH_3COOH}) = 0{,}10\,\mathrm{mol/L}$, $K_a = 1{,}8 \cdot 10^{-5}$
**Iščemo:** pH in stopnjo protolize $\alpha$

:::formula
$K_a = \dfrac{x^2}{c - x}$; pri $x \ll c$: $x = [\mathrm{H_3O^+}] \approx \sqrt{K_a c}$; $\alpha = x/c$
:::

**Rešitev:**

1. Ravnotežje: $\mathrm{CH_3COOH + H_2O \rightleftharpoons H_3O^+ + CH_3COO^-}$; $[\mathrm{H_3O^+}] = [\mathrm{CH_3COO^-}] = x$, $[\mathrm{CH_3COOH}] = 0{,}10 - x$.
2. Približek: $x \approx \sqrt{1{,}8 \cdot 10^{-5} \cdot 0{,}10} = \sqrt{1{,}8 \cdot 10^{-6}} \approx 1{,}34 \cdot 10^{-3}\,\mathrm{mol/L}$.
3. Preverimo približek: $\alpha = \dfrac{1{,}34 \cdot 10^{-3}}{0{,}10} \approx 0{,}013 = 1{,}3\,\% < 5\,\%$, približek je upravičen.
4. $\mathrm{pH} = -\log(1{,}34 \cdot 10^{-3}) \approx 2{,}87$. (Natančna rešitev kvadratne enačbe da $x \approx 1{,}33 \cdot 10^{-3}\,\mathrm{mol/L}$ in $\mathrm{pH} \approx 2{,}88$.)
5. Primerjava: enako koncentrirana $\mathrm{HCl}$ bi imela $\mathrm{pH} = 1{,}00$.
6. Odgovor: pH raztopine ocetne kisline je približno $2{,}87$, protoliziranih je le okoli $1{,}3\,\%$ molekul.

### Primer 3 (težji)

Pufer pripravimo tako, da v vodi raztopimo $0{,}100\,\mathrm{mol}$ ocetne kisline in $0{,}080\,\mathrm{mol}$ natrijevega acetata ter dopolnimo do $1{,}00\,\mathrm{L}$. Kolikšen je pH pufra? Kolikšen je pH po dodatku $0{,}010\,\mathrm{mol}$ trdnega $\mathrm{NaOH}$ (prostornina se ne spremeni)? Primerjaj s spremembo pH, če isto množino $\mathrm{NaOH}$ dodamo $1{,}00\,\mathrm{L}$ čiste vode. $K_a = 1{,}8 \cdot 10^{-5}$.

**Podatki:** $n(\mathrm{CH_3COOH}) = 0{,}100\,\mathrm{mol}$, $n(\mathrm{CH_3COO^-}) = 0{,}080\,\mathrm{mol}$, $V = 1{,}00\,\mathrm{L}$, $n(\mathrm{NaOH}) = 0{,}010\,\mathrm{mol}$, $K_a = 1{,}8 \cdot 10^{-5}$
**Iščemo:** pH pufra, pH po dodatku $\mathrm{NaOH}$ in pH vode z enakim dodatkom

:::formula
$\mathrm{pH} = \mathrm{p}K_a + \log\dfrac{n(\mathrm{A^-})}{n(\mathrm{HA})}$; po dodatku baze: $n(\mathrm{HA}) - n(\mathrm{OH^-})$, $n(\mathrm{A^-}) + n(\mathrm{OH^-})$
:::

**Rešitev:**

1. $\mathrm{p}K_a = -\log(1{,}8 \cdot 10^{-5}) \approx 4{,}74$.
2. Pufer: $\mathrm{pH} = 4{,}74 + \log\dfrac{0{,}080}{0{,}100} = 4{,}74 - 0{,}097 \approx 4{,}65$ (baze je manj kot kisline, zato je pH pod $\mathrm{p}K_a$).
3. $\mathrm{NaOH}$ zreagira s kislino: $\mathrm{CH_3COOH + OH^- \to CH_3COO^- + H_2O}$. Nove množine: $n(\mathrm{CH_3COOH}) = 0{,}100 - 0{,}010 = 0{,}090\,\mathrm{mol}$, $n(\mathrm{CH_3COO^-}) = 0{,}080 + 0{,}010 = 0{,}090\,\mathrm{mol}$.
4. $\mathrm{pH} = 4{,}74 + \log\dfrac{0{,}090}{0{,}090} = 4{,}74$. Sprememba je le okoli $+0{,}10$.
5. V čisti vodi: $[\mathrm{OH^-}] = 0{,}010\,\mathrm{mol/L}$, $\mathrm{pOH} = 2{,}00$, $\mathrm{pH} = 12{,}00$. Sprememba od $7{,}00$ je $+5{,}00$.
6. Odgovor: pufer ima pH približno $4{,}65$, po dodatku $\mathrm{NaOH}$ pa $4{,}74$; v čisti vodi bi enak dodatek dvignil pH s $7{,}00$ na $12{,}00$.

### Primer 4 – zdaj ti

Evina kri ima ob morju pH, ki ga določa pufer $\mathrm{H_2CO_3/HCO_3^-}$ s $\mathrm{p}K_a = 6{,}1$ in razmerjem $[\mathrm{HCO_3^-}] : [\mathrm{H_2CO_3}] = 20 : 1$. Na $3400\,\mathrm{m}$ diha hitreje, zato $[\mathrm{H_2CO_3}]$ v prvih urah pade na $80\,\%$ prejšnje vrednosti, $[\mathrm{HCO_3^-}]$ pa ostane enaka. Kolikšen je pH krvi ob morju in na višini?

**Podatki:** $\mathrm{p}K_a = 6{,}1$, $[\mathrm{HCO_3^-}] : [\mathrm{H_2CO_3}] = 20 : 1$ ob morju, na višini $[\mathrm{H_2CO_3}] = 0{,}80$ prejšnje vrednosti, $[\mathrm{HCO_3^-}]$ nespremenjena
**Iščemo:** pH ob morju in na višini

:::formula
$\mathrm{pH} = \mathrm{p}K_a + \log\dfrac{[\mathrm{HCO_3^-}]}{[\mathrm{H_2CO_3}]}$
:::

**Rešitev:**

1. Ob morju: $\mathrm{pH} = 6{,}1 + \log 20 = 6{,}1 + 1{,}30 = 7{,}40$, kar je sredina normalnega območja.
2. Na višini ostane števec enak, imenovalec pa se zmanjša, zato razmerje zraste: $\dfrac{20}{0{,}80} = 25$.
3. Izračunaj pH na višini sam in presodi, ali je še v normalnem območju, nato preveri:

:::premisli
Kolikšen je pH Evine krvi na $3400\,\mathrm{m}$ in kaj to pomeni?
---
$\mathrm{pH} = 6{,}1 + \log 25 \approx 6{,}1 + 1{,}40 = 7{,}50$, kar je nad zgornjo mejo $7{,}45$ (blaga alkaloza). Ker je pH odvisen od razmerja, ledvice v nekaj dneh izločijo del $\mathrm{HCO_3^-}$ in razmerje se vrne proti $20 : 1$; zato je postopno vzpenjanje pametno.
:::

## Pogoste napake

- **Šibka kislina kot močna.** Študent za $0{,}10\,\mathrm{mol/L}$ ocetno kislino zapiše $\mathrm{pH} = 1$. Ocetna kislina je le delno protolizirana, zato je treba uporabiti $K_a$.
- **Pozabljen faktor pri bazah z več $\mathrm{OH^-}$.** Za $\mathrm{Ba(OH)_2}$ in $\mathrm{Ca(OH)_2}$ je $[\mathrm{OH^-}] = 2c$.
- **pH baze kar iz $-\log c$.** Pri bazi dobimo najprej $\mathrm{pOH}$, nato $\mathrm{pH} = 14 - \mathrm{pOH}$.
- **Približek brez preverjanja.** $\sqrt{K_a c}$ velja le, če je $x$ pod približno $5\,\%$ od $c$. Pri zelo razredčenih ali razmeroma močnih šibkih kislinah reši kvadratno enačbo.
- **Napačna smer razmerja v Henderson-Hasselbalchovi enačbi.** V števcu je **baza** $\mathrm{A^-}$, v imenovalcu **kislina** $\mathrm{HA}$. Če je baze več, je $\mathrm{pH} > \mathrm{p}K_a$.
- **»Pufer je nevtralen.«** Šibka kislina in njena konjugirana baza v pufru ne reagirata med seboj; pH pufra je blizu $\mathrm{p}K_a$, ne $7$.
- **Pufer iz močne kisline in njene soli.** $\mathrm{HCl}$ in $\mathrm{NaCl}$ nista pufer: $\mathrm{Cl^-}$ je zanemarljivo šibka baza in ne veže dodane kisline.
- **Konstanta $K_w = 10^{-14}$ pri vsaki temperaturi.** $K_w$ narašča s temperaturo; pri $37\,^\circ\mathrm{C}$ je nevtralni pH okoli $6{,}8$.

## Povzetek

- Kislina je donor, baza akceptor protona; $\mathrm{HA/A^-}$ je konjugirani par.
- $\mathrm{pH} = -\log[\mathrm{H_3O^+}]$, $K_w = [\mathrm{H_3O^+}][\mathrm{OH^-}] = 1{,}0 \cdot 10^{-14}$, $\mathrm{pH} + \mathrm{pOH} = 14$ (pri $25\,^\circ\mathrm{C}$).
- Močna kislina: $[\mathrm{H_3O^+}] = c$; močna baza: $[\mathrm{OH^-}] = zc$.
- Šibka kislina: $K_a = x^2/(c - x)$, pri $x \ll c$ je $[\mathrm{H_3O^+}] \approx \sqrt{K_a c}$; šibka baza analogno s $K_b$; $K_aK_b = K_w$.
- Pufer: šibka kislina in njena konjugirana baza; $\mathrm{pH} = \mathrm{p}K_a + \log(n(\mathrm{A^-})/n(\mathrm{HA}))$; najboljši pri $\mathrm{pH} \approx \mathrm{p}K_a$.
- Dodana močna baza pretvori $\mathrm{HA}$ v $\mathrm{A^-}$, dodana kislina $\mathrm{A^-}$ v $\mathrm{HA}$; pH se spremeni malo.

## Drugače: Na sliki

Lestvica pH z znanimi snovmi (vsak korak v levo pomeni desetkrat več $\mathrm{H_3O^+}$):

```
 0    1    2    3    4    5    6    7    8    9   10   11   12   13   14
 |----|----|----|----|----|----|----|----|----|----|----|----|----|----|
 <---------- kislo -------------->  7  <------------ bazično ----------->
```

| Snov | pH (okvirno) |
|---|---|
| želodčni sok | $1{,}5$ do $2$ |
| ocetna kislina $0{,}10\,\mathrm{mol/L}$ (Primer 2) | $2{,}9$ |
| kisel dež | $4$ do $4{,}5$ |
| čista voda pri $25\,^\circ\mathrm{C}$ | $7{,}0$ |
| kri | $7{,}35$ do $7{,}45$ |
| amoniak $0{,}050\,\mathrm{mol/L}$ | $11{,}0$ |
| $\mathrm{NaOH}$ $0{,}10\,\mathrm{mol/L}$ | $13{,}0$ |

Pufer si predstavljaj kot posodo z dvema rezervoarjema: v enem je kislina $\mathrm{HA}$, ki »požre« dodane ione $\mathrm{OH^-}$, v drugem baza $\mathrm{A^-}$, ki »požre« dodane ione $\mathrm{H_3O^+}$. Dokler sta oba rezervoarja dovolj polna, se pH skoraj ne premakne. Ko se eden izprazni, je kapaciteta pufra izčrpana in pH skoči.

## Drugače: Iz vsakdanjega življenja

**Pufer v krvi.** Glavni pufer krvi je par $\mathrm{H_2CO_3/HCO_3^-}$ s $\mathrm{p}K_a \approx 6{,}1$ (pri telesni temperaturi, vključno z raztopljenim $\mathrm{CO_2}$). Pri $\mathrm{pH} = 7{,}4$ iz Henderson-Hasselbalchove enačbe sledi $\log\frac{[\mathrm{HCO_3^-}]}{[\mathrm{H_2CO_3}]} = 1{,}3$, torej razmerje približno $20 : 1$. Pljuča uravnavajo $\mathrm{CO_2}$, ledvice pa $\mathrm{HCO_3^-}$; ob hiperventilaciji izdihamo preveč $\mathrm{CO_2}$ in pH krvi naraste.

**Zdravila in prebava.** Acetilsalicilna kislina ($\mathrm{p}K_a \approx 3{,}5$) je v kislem želodcu ($\mathrm{pH} \approx 1{,}5$ do $2$) večinoma nedisociirana in zato lažje prehaja skozi lipidne membrane. Z razmerjem $[\mathrm{A^-}]/[\mathrm{HA}] = 10^{\mathrm{pH} - \mathrm{p}K_a}$ farmacevti ocenijo, kje se učinkovina absorbira.

**Tla in kmetijstvo.** V kislih tleh ($\mathrm{pH} < 5$) se sprošča strupen aluminij, fosfor pa se veže v netopne spojine. Kmetje zato tla apnijo ($\mathrm{CaCO_3}$ nevtralizira kislino). Kisel dež s pH okoli $4$ do $4{,}5$ nastane zaradi $\mathrm{SO_2}$ in dušikovih oksidov iz zgorevanja.

**Laboratorij.** Encimske reakcije, gojenje celic in elektroforezo vedno izvajamo v pufrih (fosfatni, Tris, HEPES), ker bi se brez njih pH med reakcijo spreminjal.

## Drugače: Korak za korakom s številkami

Izračunaj pH raztopine amoniaka s koncentracijo $0{,}050\,\mathrm{mol/L}$, $K_b = 1{,}8 \cdot 10^{-5}$.

1. **Ravnotežje:** $\mathrm{NH_3 + H_2O \rightleftharpoons NH_4^+ + OH^-}$.
2. **Tabela:** začetek $c = 0{,}050$, sprememba $-x$, $+x$, $+x$; ravnotežje $0{,}050 - x$, $x$, $x$.
3. **Konstanta:** $K_b = \dfrac{x^2}{0{,}050 - x}$.
4. **Približek:** $x \approx \sqrt{1{,}8 \cdot 10^{-5} \cdot 0{,}050} = \sqrt{9{,}0 \cdot 10^{-7}} \approx 9{,}49 \cdot 10^{-4}\,\mathrm{mol/L}$.
5. **Preverimo:** $\dfrac{9{,}49 \cdot 10^{-4}}{0{,}050} \approx 1{,}9\,\% < 5\,\%$, približek drži.
6. **pOH:** $-\log(9{,}49 \cdot 10^{-4}) \approx 3{,}02$.
7. **pH:** $14{,}00 - 3{,}02 = 10{,}98$.

Dodatno: konjugirana kislina $\mathrm{NH_4^+}$ ima $K_a = K_w/K_b = 1{,}0 \cdot 10^{-14}/1{,}8 \cdot 10^{-5} \approx 5{,}6 \cdot 10^{-10}$, $\mathrm{p}K_a \approx 9{,}26$. Pufer $\mathrm{NH_3/NH_4Cl}$ je zato uporaben okoli $\mathrm{pH} \approx 9$ do $10$.

## Drugače: Bolj natančno

**Izpeljava Henderson-Hasselbalchove enačbe.** Iz $K_a = \frac{[\mathrm{H_3O^+}][\mathrm{A^-}]}{[\mathrm{HA}]}$ sledi $[\mathrm{H_3O^+}] = K_a\frac{[\mathrm{HA}]}{[\mathrm{A^-}]}$. Logaritmiramo in pomnožimo z $-1$: $\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A^-}]}{[\mathrm{HA}]}$. Ravnotežni koncentraciji nadomestimo z vnesenima (analitičnima), kar je upravičeno, ker prisotnost $\mathrm{A^-}$ skoraj povsem zatre protolizo $\mathrm{HA}$ (učinek skupnega iona). Približek odpove pri zelo razredčenih pufrih in pri razmerjih, daleč od $1$.

**Natančna obravnava z bilancami.** Raztopina šibke kisline je natančno opisana s sistemom: ravnotežji $K_a$ in $K_w$, masna bilanca $c = [\mathrm{HA}] + [\mathrm{A^-}]$ in bilanca naboja $[\mathrm{H_3O^+}] = [\mathrm{A^-}] + [\mathrm{OH^-}]$. Izločanje neznank vodi v kubično enačbo za $[\mathrm{H_3O^+}]$. Vsi »šolski« obrazci so približki te enačbe.

**Zelo razredčena močna kislina.** Za $\mathrm{HCl}$ s $c = 1{,}0 \cdot 10^{-8}\,\mathrm{mol/L}$ bi naivni račun dal $\mathrm{pH} = 8$, kar je nesmisel (kislina ne more dati bazične raztopine). Bilanca naboja $[\mathrm{H_3O^+}] = c + [\mathrm{OH^-}] = c + K_w/[\mathrm{H_3O^+}]$ da kvadratno enačbo z rešitvijo

$$[\mathrm{H_3O^+}] = \frac{c + \sqrt{c^2 + 4K_w}}{2} \approx 1{,}05 \cdot 10^{-7}\,\mathrm{mol/L}, \qquad \mathrm{pH} \approx 6{,}98.$$

Pri tako majhnih koncentracijah prevlada avtoprotoliza vode.

**Aktivnosti.** Strogo je $\mathrm{pH} = -\log a(\mathrm{H_3O^+})$, kjer je $a = \gamma c/c^\circ$ aktivnost in $\gamma$ koeficient aktivnosti. V razredčenih raztopinah je $\gamma \approx 1$; pri večji ionski moči (morska voda, fiziološke raztopine) je $\gamma < 1$ in izmerjeni pH se od izračunanega iz koncentracij razlikuje za nekaj stotink do desetink.

**Kapaciteta pufra.** Definiramo jo kot $\beta = \frac{\mathrm{d}c_{\text{baze}}}{\mathrm{d}\,\mathrm{pH}}$. Za pufer s skupno koncentracijo $C = [\mathrm{HA}] + [\mathrm{A^-}]$ je $\beta \approx 2{,}303\,C\frac{K_a[\mathrm{H_3O^+}]}{(K_a + [\mathrm{H_3O^+}])^2}$, kar ima maksimum pri $[\mathrm{H_3O^+}] = K_a$, torej pri $\mathrm{pH} = \mathrm{p}K_a$.

## Preveri se

? Kolikšen je pH raztopine $\mathrm{HNO_3}$ s koncentracijo $0{,}0010\,\mathrm{mol/L}$?
- $1{,}0$
~ Ničel nisi prav preštel: $0{,}0010 = 10^{-3}$, ne $10^{-1}$.
+ $3{,}0$
- $11{,}0$
~ Od $14$ si odštel, kot da gre za bazo; pri kislini je pH kar $-\log[\mathrm{H_3O^+}]$.
> $\mathrm{HNO_3}$ je močna kislina: $[\mathrm{H_3O^+}] = 1{,}0 \cdot 10^{-3}\,\mathrm{mol/L}$, $\mathrm{pH} = 3{,}0$. Vrednost $11{,}0$ bi bil pH enako koncentrirane močne baze.

? Raztopina ima $\mathrm{pH} = 4{,}0$. Kolikšna je koncentracija $\mathrm{OH^-}$ pri $25\,^\circ\mathrm{C}$?
- $1{,}0 \cdot 10^{-4}\,\mathrm{mol/L}$
~ To je $[\mathrm{H_3O^+}]$; pH neposredno pove oksonijeve ione, za $\mathrm{OH^-}$ moraš iti prek $\mathrm{pOH}$.
+ $1{,}0 \cdot 10^{-10}\,\mathrm{mol/L}$
- $4{,}0 \cdot 10^{-10}\,\mathrm{mol/L}$
~ Vrednost pH si prepisal v število pred potenco; pH $4{,}0$ je le eksponent, $[\mathrm{H_3O^+}] = 10^{-4{,}0}$.
> $\mathrm{pOH} = 14{,}0 - 4{,}0 = 10{,}0$, zato $[\mathrm{OH^-}] = 10^{-10}\,\mathrm{mol/L}$. $1{,}0 \cdot 10^{-4}\,\mathrm{mol/L}$ je koncentracija $\mathrm{H_3O^+}$.

? Pufer vsebuje enaki množini šibke kisline ($\mathrm{p}K_a = 4{,}74$) in njene konjugirane baze. Kolikšen je njegov pH?
- $7{,}00$
~ Misliš, da se kislina in baza v enakih množinah nevtralizirata; v pufru ne reagirata med seboj in pH je blizu $\mathrm{p}K_a$.
- $2{,}37$
~ Vzel si polovico $\mathrm{p}K_a$ kot pri raztopini same šibke kisline; ker je prisotna tudi konjugirana baza, velja Henderson-Hasselbalchova enačba.
+ $4{,}74$
> Razmerje je $1$, $\log 1 = 0$, zato je $\mathrm{pH} = \mathrm{p}K_a = 4{,}74$.

? Kateri par snovi v vodi tvori pufer?
- $\mathrm{HCl}$ in $\mathrm{NaCl}$
~ Par res vsebuje kislino in njen anion, a $\mathrm{HCl}$ je močna kislina; $\mathrm{Cl^-}$ je tako šibka baza, da dodane kisline ne veže.
+ $\mathrm{NH_3}$ in $\mathrm{NH_4Cl}$
- $\mathrm{NaOH}$ in $\mathrm{NaCl}$
~ V zmesi ni šibke kisline, ki bi porabila dodano bazo, $\mathrm{NaOH}$ pa je močna baza brez konjugiranega para v raztopini.
> Pufer je šibka baza z njeno konjugirano kislino ($\mathrm{NH_3/NH_4^+}$) ali šibka kislina z njeno konjugirano bazo. $\mathrm{Cl^-}$ je zanemarljivo šibka baza.

? Katera od naštetih kislin ne spada med močne?
- $\mathrm{HNO_3}$
~ Dušikova(V) kislina je v razredčenih raztopinah popolnoma protolizirana in je na seznamu močnih kislin.
+ $\mathrm{CH_3COOH}$
- $\mathrm{HClO_4}$
~ Perklorna kislina je celo ena najmočnejših kislin; morda te zavede, da je manj znana kot $\mathrm{HCl}$.
- $\mathrm{HBr}$
~ Morda si zapomniš le $\mathrm{HCl}$; vodikov bromid je prav tako popolnoma protoliziran, saj je vez $\mathrm{H{-}Br}$ še šibkejša od $\mathrm{H{-}Cl}$.
> Ocetna kislina je šibka kislina ($K_a = 1{,}8 \cdot 10^{-5}$), v $0{,}10\,\mathrm{mol/L}$ raztopini je protoliziranih le okoli $1{,}3\,\%$ molekul. Ostale tri so močne.

:::simboli
K_w | ionski produkt vode | K_w = [\mathrm{H_3O^+}][\mathrm{OH^-}] | – | 1,0 · 10⁻¹⁴ pri 25 °C; narašča s temperaturo
c_{\text{kisline}} | koncentracija močne kisline | | mol/L
c_{\text{baze}} | koncentracija močne baze | | mol/L
z | število ionov OH⁻ na formulsko enoto baze | | – | za Ba(OH)₂ je z = 2
K_a | konstanta kislosti | K_a = \frac{[\mathrm{H_3O^+}][\mathrm{A^-}]}{[\mathrm{HA}]} | – | pKₐ = −log Kₐ; večji pKₐ pomeni šibkejšo kislino
K_b | konstanta bazičnosti | K_b = \frac{K_w}{K_a} | – | za konjugirani par kislina–baza
\mathrm{p}K_a | negativni desetiški logaritem konstante kislosti | \mathrm{p}K_a = -\log K_a | – | večji pKₐ pomeni šibkejšo kislino
\mathrm{p}K_b | negativni desetiški logaritem konstante bazičnosti | \mathrm{p}K_b = -\log K_b | – | pKₐ + pK_b = 14,00 pri 25 °C
\mathrm{pH} | pH raztopine | \mathrm{pH} = -\log[\mathrm{H_3O^+}] | – | 7 nevtralno pri 25 °C
\mathrm{pOH} | pOH raztopine | \mathrm{pOH} = -\log[\mathrm{OH^-}] | – | pH + pOH = 14,00 pri 25 °C
x | ravnotežna koncentracija ionov H₃O⁺ in A⁻ | | mol/L
c | začetna koncentracija kisline | | mol/L
n | množina snovi v pufru | | mol | n(A⁻) in n(HA)
\alpha | stopnja protolize | \alpha = \frac{x}{c} | – | z redčenjem narašča
:::
