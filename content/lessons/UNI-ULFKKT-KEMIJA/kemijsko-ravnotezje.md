---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

V gimnaziji reakcije pogosto zapišemo s puščico v eno smer, kot da reaktanti povsem preidejo v produkte. Mnogo reakcij pa se ustavi prej: v zaprti posodi nastane zmes reaktantov in produktov, katere sestava se ne spreminja več. Pravimo, da je sistem v **kemijskem ravnotežju**. Koliko produkta je v ravnotežni zmesi, pove **konstanta ravnotežja**, kako se ravnotežje odzove na spremembe, pa **Le Chatelierovo načelo**.

To znanje potrebuje vsak, ki želi reakcijo voditi: inženir pri sintezi amoniaka, biokemik pri vezavi kisika na hemoglobin, farmacevt pri stabilnosti zdravila, okoljevarstvenik pri raztapljanju $\mathrm{CO_2}$ v morju. Na ravnotežju temeljijo tudi naslednja poglavja: kisline in baze, pufri, topnost in elektrokemija.

V tej lekciji se naučiš:

- zapisati izraz za **konstanto ravnotežja** $K_c$ in $K_p$ ter ju povezati,
- s **kvocientom reakcije** $Q$ napovedati smer reakcije,
- izračunati ravnotežne koncentracije s preglednico »začetek, sprememba, ravnotežje«,
- uporabiti **Le Chatelierovo načelo** pri spremembi koncentracije, tlaka in temperature.

## Razlaga

**1. Dinamično ravnotežje.** Reakcija $\mathrm{A + B \rightleftharpoons C + D}$ teče v obe smeri. Na začetku je hitrost reakcije v desno velika, v levo majhna. Ko se koncentracije reaktantov zmanjšujejo in produktov povečujejo, se hitrosti izenačita. Takrat se sestava ne spreminja več, čeprav obe reakciji tečeta naprej: ravnotežje je **dinamično**. Do istega ravnotežja pridemo iz reaktantov ali iz produktov.

**2. Zakon o vplivu koncentracij.** Za splošno reakcijo

$$a\,\mathrm{A} + b\,\mathrm{B} \rightleftharpoons c\,\mathrm{C} + d\,\mathrm{D}$$

velja v ravnotežju pri dani temperaturi

$$K_c = \frac{[\mathrm{C}]^c\,[\mathrm{D}]^d}{[\mathrm{A}]^a\,[\mathrm{B}]^b},$$

kjer oglati oklepaji pomenijo **ravnotežne** množinske koncentracije. Produkti so v števcu, reaktanti v imenovalcu, koeficienti so eksponenti. $K_c$ je odvisna le od temperature, ne od začetnih koncentracij.

**3. Heterogena ravnotežja.** Čiste trdne snovi in čiste tekočine (tudi topilo voda v razredčenih raztopinah) v izrazu za $K$ **ne nastopajo**, ker je njihova aktivnost $1$. Za $\mathrm{CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)}$ je $K_c = [\mathrm{CO_2}]$.

**4. Ravnotežje plinov.** Za pline pogosto pišemo konstanto s parcialnimi tlaki, $K_p = \dfrac{p_\mathrm{C}^c\,p_\mathrm{D}^d}{p_\mathrm{A}^a\,p_\mathrm{B}^b}$. Ker je $p = cRT$, velja

$$K_p = K_c\,(RT)^{\Delta n}, \qquad \Delta n = (c + d) - (a + b),$$

kjer $\Delta n$ šteje le plinaste snovi. Če so tlaki v barih in koncentracije v $\mathrm{mol/L}$, je $R = 0{,}083\,14\,\mathrm{L\,bar\,mol^{-1}\,K^{-1}}$.

**5. Pomen velikosti $K$.** Če je $K \gg 1$ (npr. $10^{10}$), je v ravnotežju skoraj vse v obliki produktov in reakcija poteče »do konca«. Če je $K \ll 1$, skoraj ne poteče. Pri $K$ okoli $1$ so v ravnotežju pomembne količine reaktantov in produktov.

**6. Računanje s konstantami.** Konstanta je vezana na zapis enačbe:

- obrnjena reakcija: $K' = 1/K$,
- enačba, pomnožena z $m$: $K' = K^m$ (npr. z $\tfrac12$ dobimo $\sqrt K$),
- vsota dveh reakcij: $K = K_1 \cdot K_2$.

**7. Kvocient reakcije.** $Q$ ima enako obliko kot $K$, le da vanj vstavimo **trenutne** koncentracije. Primerjava pove smer:

- $Q < K$: produktov je premalo, reakcija teče v desno (nastajajo produkti),
- $Q > K$: produktov je preveč, reakcija teče v levo,
- $Q = K$: sistem je v ravnotežju.

**8. Preglednica »začetek, sprememba, ravnotežje«.** Pri računanju ravnotežnih koncentracij zapišemo za vsako snov začetno koncentracijo, spremembo (z neznanko $x$, pomnoženo s koeficientom) in ravnotežno koncentracijo. Ravnotežne izraze vstavimo v $K$ in rešimo enačbo za $x$. Na koncu preverimo, da nobena koncentracija ni negativna.

**9. Le Chatelierovo načelo.** Če sistem v ravnotežju zmotimo, se ravnotežje premakne v smer, ki motnjo delno izniči.

- **Koncentracija:** dodatek reaktanta ali odstranjevanje produkta premakne ravnotežje v desno; $K$ ostane enaka, spremeni se $Q$.
- **Tlak (prostornina):** zmanjšanje prostornine (povečanje tlaka) premakne ravnotežje na stran z **manj molekulami plina**. Pri $\Delta n = 0$ tlak nima vpliva. Dodatek inertnega plina pri stalni prostornini ne spremeni parcialnih tlakov in ne premakne ravnotežja.
- **Temperatura:** je edina sprememba, ki spremeni $K$. Pri **eksotermni** reakciji ($\Delta H < 0$) višja temperatura zmanjša $K$ (premik v levo), pri **endotermni** jo poveča.
- **Katalizator** pospeši obe smeri enako, zato se ravnotežje doseže hitreje, njegova lega pa se ne spremeni.

## Rešeni primeri

### Primer 1 (lažji)

V zaprti posodi pri stalni temperaturi je v ravnotežju $\mathrm{N_2O_4(g) \rightleftharpoons 2\,NO_2(g)}$. Ravnotežni koncentraciji sta $[\mathrm{N_2O_4}] = 0{,}0400\,\mathrm{mol/L}$ in $[\mathrm{NO_2}] = 0{,}0120\,\mathrm{mol/L}$. Izračunaj $K_c$.

**Podatki:** reakcija $\mathrm{N_2O_4 \rightleftharpoons 2\,NO_2}$, $[\mathrm{N_2O_4}] = 0{,}0400\,\mathrm{mol/L}$, $[\mathrm{NO_2}] = 0{,}0120\,\mathrm{mol/L}$ (ravnotežni vrednosti)
**Iščemo:** konstanto $K_c$

:::formula
$K_c = \dfrac{[\mathrm{NO_2}]^2}{[\mathrm{N_2O_4}]}$
:::

**Rešitev:**

1. Izraz: produkt $\mathrm{NO_2}$ ima koeficient $2$, zato je v števcu na kvadrat.
2. Vstavimo: $K_c = \dfrac{(0{,}0120)^2}{0{,}0400} = \dfrac{1{,}44 \cdot 10^{-4}}{0{,}0400} = 3{,}6 \cdot 10^{-3}$.
3. Odgovor: $K_c = 3{,}6 \cdot 10^{-3}$ (izraženo v $\mathrm{mol/L}$, glej »Bolj natančno«); ker je $K_c \ll 1$, je pri tej temperaturi v ravnotežju večinoma $\mathrm{N_2O_4}$.

### Primer 2

V posodo s prostornino $2{,}00\,\mathrm{L}$ damo $1{,}00\,\mathrm{mol}$ vodika in $1{,}00\,\mathrm{mol}$ joda. Pri temperaturi poskusa je za reakcijo $\mathrm{H_2(g) + I_2(g) \rightleftharpoons 2\,HI(g)}$ konstanta $K_c = 49{,}0$. Izračunaj ravnotežne koncentracije.

**Podatki:** $V = 2{,}00\,\mathrm{L}$, $n_0(\mathrm{H_2}) = 1{,}00\,\mathrm{mol}$, $n_0(\mathrm{I_2}) = 1{,}00\,\mathrm{mol}$, $n_0(\mathrm{HI}) = 0$, $K_c = 49{,}0$
**Iščemo:** $[\mathrm{H_2}]$, $[\mathrm{I_2}]$, $[\mathrm{HI}]$ v ravnotežju

:::formula
$K_c = \dfrac{[\mathrm{HI}]^2}{[\mathrm{H_2}][\mathrm{I_2}]}$; preglednica: začetek, sprememba ($-x$, $-x$, $+2x$), ravnotežje
:::

**Rešitev:**

1. Začetne koncentracije: $c_0(\mathrm{H_2}) = c_0(\mathrm{I_2}) = 1{,}00/2{,}00 = 0{,}500\,\mathrm{mol/L}$.
2. Preglednica ($\mathrm{mol/L}$):

| | $\mathrm{H_2}$ | $\mathrm{I_2}$ | $\mathrm{HI}$ |
|---|---|---|---|
| začetek | $0{,}500$ | $0{,}500$ | $0$ |
| sprememba | $-x$ | $-x$ | $+2x$ |
| ravnotežje | $0{,}500 - x$ | $0{,}500 - x$ | $2x$ |

3. Vstavimo: $49{,}0 = \dfrac{(2x)^2}{(0{,}500 - x)^2}$. Obe strani sta kvadrata, zato korenimo: $7{,}00 = \dfrac{2x}{0{,}500 - x}$.
4. $3{,}50 - 7{,}00x = 2x$, $9{,}00x = 3{,}50$, $x = 0{,}389\,\mathrm{mol/L}$.
5. Ravnotežje: $[\mathrm{H_2}] = [\mathrm{I_2}] = 0{,}500 - 0{,}389 = 0{,}111\,\mathrm{mol/L}$, $[\mathrm{HI}] = 2 \cdot 0{,}389 = 0{,}778\,\mathrm{mol/L}$.
6. Preizkus: $0{,}778^2/0{,}111^2 \approx 49{,}0$.
7. Odgovor: v ravnotežju je $[\mathrm{H_2}] = [\mathrm{I_2}] = 0{,}111\,\mathrm{mol/L}$ in $[\mathrm{HI}] = 0{,}778\,\mathrm{mol/L}$; zreagiralo je $78\,\%$ vodika.

### Primer 3 (težji)

Za razpad $\mathrm{PCl_5(g) \rightleftharpoons PCl_3(g) + Cl_2(g)}$ je pri $250\,^\circ\mathrm{C}$ konstanta $K_c = 0{,}0420$. V posodi so trenutno $[\mathrm{PCl_5}] = 0{,}100\,\mathrm{mol/L}$, $[\mathrm{PCl_3}] = 0{,}0500\,\mathrm{mol/L}$ in $[\mathrm{Cl_2}] = 0{,}0500\,\mathrm{mol/L}$. V katero smer bo tekla reakcija? Izračunaj ravnotežne koncentracije in $K_p$. Kam se premakne ravnotežje, če prostornino posode povečamo?

**Podatki:** $K_c = 0{,}0420$, $T = 250\,^\circ\mathrm{C} = 523{,}15\,\mathrm{K}$, $[\mathrm{PCl_5}]_0 = 0{,}100\,\mathrm{mol/L}$, $[\mathrm{PCl_3}]_0 = 0{,}0500\,\mathrm{mol/L}$, $[\mathrm{Cl_2}]_0 = 0{,}0500\,\mathrm{mol/L}$, $R = 0{,}083\,14\,\mathrm{L\,bar\,mol^{-1}\,K^{-1}}$
**Iščemo:** smer reakcije, ravnotežne koncentracije, $K_p$, vpliv povečanja prostornine

:::formula
$Q = \dfrac{[\mathrm{PCl_3}][\mathrm{Cl_2}]}{[\mathrm{PCl_5}]}$, primerjava $Q$ s $K$; $\quad K_p = K_c\,(RT)^{\Delta n}$
:::

**Rešitev:**

1. $Q = \dfrac{0{,}0500 \cdot 0{,}0500}{0{,}100} = 0{,}0250$. Ker je $Q < K_c$, reakcija teče v desno (razpada $\mathrm{PCl_5}$).
2. Ravnotežje: $[\mathrm{PCl_5}] = 0{,}100 - x$, $[\mathrm{PCl_3}] = [\mathrm{Cl_2}] = 0{,}0500 + x$.
3. Enačba: $\dfrac{(0{,}0500 + x)^2}{0{,}100 - x} = 0{,}0420$, kar uredimo v $x^2 + 0{,}142\,x - 0{,}001\,70 = 0$.
4. $x = \dfrac{-0{,}142 + \sqrt{0{,}142^2 + 4 \cdot 0{,}001\,70}}{2} = \dfrac{-0{,}142 + 0{,}1642}{2} = 0{,}0111\,\mathrm{mol/L}$ (negativna rešitev nima pomena).
5. Ravnotežje: $[\mathrm{PCl_5}] = 0{,}0889\,\mathrm{mol/L}$, $[\mathrm{PCl_3}] = [\mathrm{Cl_2}] = 0{,}0611\,\mathrm{mol/L}$. Preizkus: $0{,}0611^2/0{,}0889 \approx 0{,}0420$.
6. $\Delta n = 2 - 1 = 1$, $K_p = 0{,}0420 \cdot 0{,}083\,14 \cdot 523{,}15 \approx 1{,}83$.
7. Povečanje prostornine zniža tlak; ravnotežje se premakne na stran z več molekulami plina, torej v desno.
8. Odgovor: reakcija teče v desno do $[\mathrm{PCl_5}] = 0{,}0889\,\mathrm{mol/L}$ in $[\mathrm{PCl_3}] = [\mathrm{Cl_2}] = 0{,}0611\,\mathrm{mol/L}$; $K_p \approx 1{,}83$; večja prostornina še poveča razpad $\mathrm{PCl_5}$.

## Pogoste napake

- **Začetne namesto ravnotežnih koncentracij.** V $K$ vstavljamo le ravnotežne vrednosti. Začetne koncentracije vstavimo v $Q$.
- **Trdne snovi in voda v izrazu.** $[\mathrm{CaCO_3(s)}]$ ali $[\mathrm{H_2O(l)}]$ ne pišemo v $K$.
- **Pozabljeni koeficienti.** Pri $\mathrm{2\,NO_2}$ je v izrazu $[\mathrm{NO_2}]^2$, v preglednici pa sprememba $+2x$, ne $+x$.
- **»Dodatek reaktanta spremeni $K$.«** Ne. $K$ se spremeni le s temperaturo. Dodatek snovi spremeni $Q$, sistem pa se vrne k isti $K$.
- **Katalizator premakne ravnotežje.** Ne, le pospeši doseganje ravnotežja.
- **Tlak in snovi v različnih fazah.** Pri $\Delta n$ štejemo le pline. V reakciji $\mathrm{C(s) + CO_2(g) \rightleftharpoons 2\,CO(g)}$ je $\Delta n = 2 - 1 = 1$.
- **Napačna rešitev kvadratne enačbe.** Rešitev, ki da negativno koncentracijo ali porabi več snovi, kot je je na voljo, zavrzi.

## Povzetek

- Ravnotežje je dinamično: hitrosti v obe smeri sta enaki, sestava se ne spreminja.
- $K_c = \prod[\text{produkti}]^{\nu} / \prod[\text{reaktanti}]^{\nu}$ z ravnotežnimi koncentracijami; trdnih snovi in čistih tekočin ne pišemo.
- $K_p = K_c\,(RT)^{\Delta n}$; obrnjena reakcija $1/K$, pomnožena z $m$: $K^m$, vsota reakcij: $K_1K_2$.
- $Q < K$: v desno, $Q > K$: v levo, $Q = K$: ravnotežje.
- Ravnotežne koncentracije iz preglednice »začetek, sprememba, ravnotežje«.
- Le Chatelier: sistem delno izniči motnjo; manjša prostornina premakne k manj molekulam plina; višja temperatura premakne v endotermno smer in je edina sprememba, ki spremeni $K$.

## Drugače: Na sliki

Predstavljaj si graf koncentracij v odvisnosti od časa za Primer 2:

```
 c [mol/L]
 0,8 |               .................  HI (0,778)
     |          ..''
 0,5 |*      .''
     |  *  .'
     |   .*
     |  .   *
 0,1 | .       **********************  H2 = I2 (0,111)
   0 |'_______________________________ čas
      ^ začetek      ^ ravnotežje (vodoravne črte)
```

Krivulje se po določenem času zravnajo. To ne pomeni, da se reakcija ustavi, ampak da sta hitrosti v obe smeri enaki.

Le Chatelierovo načelo si predstavljaj kot tehtnico z vzmetjo: če na eno stran dodaš utež (reaktant), se tehtnica nagne, sistem pa del uteži »prestavi« na drugo stran (nastane nekaj produkta). Popolnoma se ne vrne v prvotno lego, saj je nova ravnotežna zmes drugačna, razmerje v izrazu za $K$ pa spet enako.

## Drugače: Iz vsakdanjega življenja

**Sinteza amoniaka.** Reakcija $\mathrm{N_2 + 3\,H_2 \rightleftharpoons 2\,NH_3}$ je eksotermna in zmanjša število molekul plina ($\Delta n = -2$). Po Le Chatelierju bi bili ugodni nizka temperatura in visok tlak. Pri nizki temperaturi pa je reakcija prepočasna, zato v industriji delajo pri okoli $450\,^\circ\mathrm{C}$ s katalizatorjem na osnovi železa, pri tlaku $150$ do $300\,\mathrm{bar}$, amoniak pa sproti utekočinjajo in odstranjujejo, kar ravnotežje vleče v desno. Tako dobijo dušik za gnojila, ki hranijo približno polovico svetovnega prebivalstva.

**Kisik v krvi.** Hemoglobin veže kisik v ravnotežju $\mathrm{Hb + 4\,O_2 \rightleftharpoons Hb(O_2)_4}$. V pljučih je parcialni tlak kisika velik in ravnotežje je v desno, v tkivih majhen in kisik se sprosti. Na visoki nadmorski višini je tlak kisika nižji, zato telo v nekaj tednih tvori več hemoglobina; to izkoriščajo športniki z višinskimi pripravami.

**Gazirane pijače.** V zaprti steklenici je $\mathrm{CO_2(g) \rightleftharpoons CO_2(aq)}$ v ravnotežju pri povišanem tlaku. Ko steklenico odpremo, tlak pade in ravnotežje se premakne v levo: plin uhaja v obliki mehurčkov. Topla pijača se »izpuhti« hitreje, ker je raztapljanje $\mathrm{CO_2}$ eksotermno.

**Kapniki.** $\mathrm{CaCO_3(s) + CO_2 + H_2O \rightleftharpoons Ca^{2+} + 2\,HCO_3^-}$: deževnica z raztopljenim $\mathrm{CO_2}$ raztaplja apnenec. V jami $\mathrm{CO_2}$ uhaja iz kapljice, ravnotežje se premakne v levo in kalcijev karbonat se izloči kot kapnik.

## Drugače: Korak za korakom s številkami

Ravnotežno zmes iz Primera 1 ($[\mathrm{N_2O_4}] = 0{,}0400\,\mathrm{mol/L}$, $[\mathrm{NO_2}] = 0{,}0120\,\mathrm{mol/L}$, $K_c = 3{,}6 \cdot 10^{-3}$) pri stalni temperaturi stisnemo na polovico prostornine. Kaj se zgodi?

1. **Takoj po stiskanju** se koncentraciji podvojita: $[\mathrm{N_2O_4}] = 0{,}0800\,\mathrm{mol/L}$, $[\mathrm{NO_2}] = 0{,}0240\,\mathrm{mol/L}$.
2. **Kvocient:** $Q = 0{,}0240^2/0{,}0800 = 7{,}2 \cdot 10^{-3} = 2K_c$. Ker je $Q > K_c$, teče reakcija v levo (k manj molekulam plina), kot napove Le Chatelier.
3. **Preglednica:** $[\mathrm{NO_2}] = 0{,}0240 - 2z$, $[\mathrm{N_2O_4}] = 0{,}0800 + z$.
4. **Enačba:** $(0{,}0240 - 2z)^2 = 3{,}6 \cdot 10^{-3}\,(0{,}0800 + z)$ oziroma $4z^2 - 0{,}0996\,z + 2{,}88 \cdot 10^{-4} = 0$.
5. **Rešitev:** $z = 0{,}003\,34\,\mathrm{mol/L}$ (druga rešitev, $z \approx 0{,}0215$, bi dala negativno $[\mathrm{NO_2}]$).
6. **Novo ravnotežje:** $[\mathrm{NO_2}] = 0{,}0173\,\mathrm{mol/L}$, $[\mathrm{N_2O_4}] = 0{,}0833\,\mathrm{mol/L}$. Preizkus: $0{,}0173^2/0{,}0833 \approx 3{,}6 \cdot 10^{-3}$.
7. **Stopnja disociacije** $\mathrm{N_2O_4}$ pade s $0{,}006/0{,}046 = 13{,}0\,\%$ na približno $9{,}4\,\%$. Koncentracija $\mathrm{NO_2}$ je sicer večja kot pred stiskanjem ($0{,}0173 > 0{,}0120$), a manjša kot takoj po njem ($0{,}0240$): motnja je le delno izničena.

## Drugače: Bolj natančno

**Termodinamična konstanta.** Natančno je konstanta ravnotežja definirana z **aktivnostmi** $a_i$, ki so brezdimenzijske: $K = \prod_i a_i^{\nu_i}$ (koeficienti produktov pozitivni, reaktantov negativni). Za idealne raztopine je $a_i = c_i/c^\circ$ s $c^\circ = 1\,\mathrm{mol/L}$, za idealne pline $a_i = p_i/p^\circ$ s $p^\circ = 1\,\mathrm{bar}$, za čiste trdne snovi in tekočine $a = 1$. Zato je $K$ brez enote, $K_c$ iz Primera 1 pa je številsko enaka konstanti s koncentracijami, deljenimi s $c^\circ$.

**Povezava z Gibbsovo energijo.** Reakcijska Gibbsova energija pri dani sestavi je

$$\Delta_\mathrm{r}G = \Delta_\mathrm{r}G^\circ + RT\ln Q.$$

Reakcija teče spontano, dokler je $\Delta_\mathrm{r}G < 0$, torej dokler je $Q < K$. V ravnotežju je $\Delta_\mathrm{r}G = 0$ in

$$\Delta_\mathrm{r}G^\circ = -RT\ln K.$$

Od tod sledi pravilo za $Q$ in $K$ ter tudi pravila za obrnjene in seštete reakcije (Gibbsove energije se seštevajo, konstante pa množijo).

**Odvisnost od temperature.** Iz $\Delta_\mathrm{r}G^\circ = \Delta_\mathrm{r}H^\circ - T\Delta_\mathrm{r}S^\circ$ sledi van 't Hoffova enačba

$$\ln\frac{K_2}{K_1} = -\frac{\Delta_\mathrm{r}H^\circ}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right),$$

če je $\Delta_\mathrm{r}H^\circ$ v temperaturnem intervalu približno stalna. Pri $\Delta_\mathrm{r}H^\circ < 0$ in $T_2 > T_1$ je desna stran negativna, zato $K_2 < K_1$. To je kvantitativna oblika Le Chatelierovega načela za temperaturo.

**Kinetični pogled.** Za elementarno reakcijo v obe smeri je $v_\to = k_\to[\mathrm{A}][\mathrm{B}]$ in $v_\leftarrow = k_\leftarrow[\mathrm{C}][\mathrm{D}]$. V ravnotežju je $v_\to = v_\leftarrow$, torej $K_c = k_\to/k_\leftarrow$. Katalizator zniža aktivacijsko energijo v obe smeri enako, zato se razmerje $k_\to/k_\leftarrow$ ne spremeni.

## Preveri se

? Kateri je pravilni izraz za konstanto ravnotežja reakcije $\mathrm{CaCO_3(s) \rightleftharpoons CaO(s) + CO_2(g)}$?
- $K_c = \dfrac{[\mathrm{CaO}][\mathrm{CO_2}]}{[\mathrm{CaCO_3}]}$
+ $K_c = [\mathrm{CO_2}]$
- $K_c = \dfrac{1}{[\mathrm{CO_2}]}$
> Trdni snovi $\mathrm{CaCO_3}$ in $\mathrm{CaO}$ imata aktivnost $1$ in ju ne pišemo. Ostane le produkt $\mathrm{CO_2}$ v števcu.

? Za reakcijo je kvocient $Q$ večji od konstante $K$. Kaj se zgodi?
- reakcija teče v desno, nastajajo produkti
+ reakcija teče v levo, nastajajo reaktanti
- sistem je že v ravnotežju
> Pri $Q > K$ je produktov preveč glede na ravnotežje, zato se del produktov pretvori nazaj v reaktante, dokler ni $Q = K$.

? Reakcija je eksotermna. Kaj se zgodi s konstanto ravnotežja, če temperaturo povišamo?
- poveča se
+ zmanjša se
- ostane enaka
> Pri eksotermni reakciji se toplota sprošča; višja temperatura premakne ravnotežje v endotermno smer (v levo) in $K$ se zmanjša. Temperatura je edina sprememba, ki spremeni $K$.

? Za reakcijo $\mathrm{A \rightleftharpoons B}$ je $K = 4{,}0 \cdot 10^2$. Kolikšna je konstanta za reakcijo $\mathrm{B \rightleftharpoons A}$?
- $-4{,}0 \cdot 10^2$
- $4{,}0 \cdot 10^{-2}$
+ $2{,}5 \cdot 10^{-3}$
> Za obrnjeno reakcijo je $K' = 1/K = 1/400 = 2{,}5 \cdot 10^{-3}$. Konstanta ravnotežja ni nikoli negativna.
