---
stanje: osnutek
phet: density
avtor: AI
---

## Zakaj se tega učimo

Iz 7. razreda že znaš, da ima vsako telo maso, ki jo izmeriš s tehtnico, in da ima prostornino, ki jo izražamo v $\text{cm}^3$, $\text{dm}^3$ ali $\text{m}^3$. Veš tudi, da je $1\,\text{dm}^3 = 1\,\text{l}$ in da je $1\,\text{cm}^3 = 1\,\text{ml}$.

Verjetno si že opazil, da sta lahko dve telesi enako veliki, a zelo različno težki: kos stiropora in kos železa iste oblike. Ali pa da nekatera telesa plavajo, druga pa potonejo. Fizikalna količina, ki to opiše, je **gostota**. Povezuje maso in prostornino in nam pove, koliko snovi je »natlačene« v določeni prostornini.

Gostota je uporabna povsod: zlatar z njo preveri, ali je predmet iz pravega zlata, ladjar načrtuje, da ladja ne bo potonila, meteorolog razlaga, zakaj topel zrak plava navzgor. Je tudi uvod v naslednji temi, tlak in vzgon.

## Razlaga

**1. Kaj je gostota.** Gostota pove, kolikšna je masa snovi v enoti prostornine. Označimo jo z grško črko $\rho$ (ro).

$$\rho = \frac{m}{V}$$

pri čemer je $m$ masa telesa in $V$ njegova prostornina.

**2. Enote.** Enota SI za gostoto je $\mathrm{kg/m^3}$. V praksi pogosto uporabljamo tudi $\mathrm{g/cm^3}$. Zveza med njima:

$$1\,\frac{\text{g}}{\text{cm}^3} = 1000\,\frac{\text{kg}}{\text{m}^3}$$

Gostota vode je približno $1\,\text{g/cm}^3 = 1000\,\text{kg/m}^3$.

**3. Izražanje mase in prostornine.** Iz enačbe $\rho = \dfrac{m}{V}$ dobimo še:

$$m = \rho \cdot V \qquad\qquad V = \frac{m}{\rho}$$

**4. Gostota je lastnost snovi.** Če imamo dva kosa iste snovi (npr. železa), je lahko eden večji in težji, a razmerje $m/V$ je enako. Zato lahko po gostoti sklepamo, iz katere snovi je telo.

**5. Nekaj približnih gostot** (pri sobni temperaturi):

| Snov | $\rho$ v $\mathrm{g/cm^3}$ |
|---|---|
| zrak | $0{,}0012$ |
| les (smreka) | okoli $0{,}5$ |
| led | $0{,}92$ |
| voda | $1{,}0$ |
| aluminij | $2{,}7$ |
| železo | $7{,}9$ |
| baker | $8{,}96$ |
| svinec | $11{,}3$ |

**6. Merjenje gostote.** Gostote navadno ne merimo neposredno: izmerimo $m$ in $V$ ter jo izračunamo:

- **Masa:** stehtamo s tehtnico.
- **Prostornina pravilnega telesa** (kvader, valj): izmerimo dolžine in izračunamo prostornino, npr. $V = a \cdot b \cdot c$.
- **Prostornina nepravilnega telesa** (kamen): v merilni valj nalijemo vodo in odčitamo začetno prostornino $V_1$. Telo potopimo, odčitamo $V_2$. Prostornina telesa je $V = V_2 - V_1$.
- **Gostota tekočine:** stehtamo prazno posodo, nato posodo z znano prostornino tekočine. Razlika mas je masa tekočine.

**7. Plavanje.** Primerjava gostot pove, ali telo v tekočini plava ali potone: če je gostota telesa manjša od gostote tekočine, telo plava, če je večja, potone. Zakaj je tako, se bomo natančneje naučili pri vzgonu.

## Rešeni primeri

### Primer 1: izračun gostote

Kos kovine ima maso $270\,\text{g}$ in prostornino $100\,\text{cm}^3$. Kolikšna je njegova gostota? Iz katere kovine je verjetno?

**Podatki:** $m = 270\,\text{g}$, $V = 100\,\text{cm}^3$
**Iščemo:** gostoto $\rho$ in iz katere kovine je kos

:::formula
$\rho = \dfrac{m}{V}$, nato primerjava s tabelo gostot
:::

**Rešitev:**

1. Iščemo gostoto, zato uporabimo $\rho = \dfrac{m}{V}$.
2. Vstavimo: $\rho = \dfrac{270\,\text{g}}{100\,\text{cm}^3} = 2{,}7\,\dfrac{\text{g}}{\text{cm}^3}$.
3. Primerjamo s tabelo: gostota $2{,}7\,\text{g/cm}^3$ ustreza aluminiju.
4. V $\mathrm{kg/m^3}$: $2{,}7 \cdot 1000 = 2700\,\text{kg/m}^3$.

### Primer 2: masa iz gostote

Kolikšna je masa železne kocke z robom $5\,\text{cm}$? Gostota železa je $7{,}9\,\text{g/cm}^3$.

**Podatki:** rob kocke $a = 5\,\text{cm}$, $\rho = 7{,}9\,\text{g/cm}^3$
**Iščemo:** maso $m$

:::formula
$V = a^3$, nato $m = \rho \cdot V$
:::

**Rešitev:**

1. Najprej potrebujemo prostornino, saj masa ni podana: $V = a^3 = 5^3 = 125\,\text{cm}^3$.
2. Iščemo maso, zato uporabimo $m = \rho \cdot V$.
3. Vstavimo: $m = 7{,}9\,\dfrac{\text{g}}{\text{cm}^3} \cdot 125\,\text{cm}^3 = 987{,}5\,\text{g}$.
4. Enote se skrajšajo: $\text{cm}^3$ se pokrajšajo, ostane $\text{g}$. To je znak, da je račun smiseln.
5. Odgovor: masa kocke je $987{,}5\,\text{g}$, torej približno $0{,}99\,\text{kg}$.

### Primer 3: merjenje nepravilnega telesa

Učenec stehta kamen in dobi $m = 130\,\text{g}$. V merilnem valju je voda do oznake $200\,\text{ml}$. Ko vanj potopi kamen, voda naraste do oznake $250\,\text{ml}$. Kolikšna je gostota kamna? Ali kamen v vodi plava?

**Podatki:** $m = 130\,\text{g}$, $V_1 = 200\,\text{ml}$ (voda), $V_2 = 250\,\text{ml}$ (voda s kamnom); gostota vode $\rho_{\text{vode}} = 1\,\text{g/cm}^3$ (iz tabele)
**Iščemo:** gostoto kamna $\rho$ in ali kamen plava

:::formula
$V = V_2 - V_1$, $\rho = \dfrac{m}{V}$; telo plava, če je $\rho < \rho_{\text{vode}}$
:::

**Rešitev:**

1. **Prostornina kamna** je enaka povečanju gladine: $V = 250\,\text{ml} - 200\,\text{ml} = 50\,\text{ml}$. Ker je $1\,\text{ml} = 1\,\text{cm}^3$, je $V = 50\,\text{cm}^3$.
2. **Gostota:** $\rho = \dfrac{m}{V} = \dfrac{130\,\text{g}}{50\,\text{cm}^3} = 2{,}6\,\dfrac{\text{g}}{\text{cm}^3}$.
3. **Plavanje:** gostota kamna ($2{,}6\,\text{g/cm}^3$) je večja od gostote vode ($1\,\text{g/cm}^3$), zato kamen v vodi **potone**.

## Pogoste napake

- **Zamenjava mase in prostornine v enačbi.** Gostota je masa *deljena s* prostornino, ne obratno. Preveri enote: dobiti moraš $\text{g/cm}^3$ ali $\text{kg/m}^3$.
- **Mešanje enot.** Če je masa v $\text{kg}$, prostornina pa v $\text{cm}^3$, rezultat ne bo v običajni enoti. Pred računom vse pretvori v enake enote.
- **Napačna pretvorba enot.** $1\,\text{g/cm}^3$ je $1000\,\text{kg/m}^3$, ne $100$ in ne $10$.
- **Gostota ni teža.** Težko telo ni nujno gostejše: velik kos lesa je težji od majhnega kosa svinca, a ima manjšo gostoto.
- **Prostornina nepravilnega telesa.** Pri merilnem valju ne smeš za prostornino vzeti končnega odčitka, ampak razliko $V_2 - V_1$.
- **»Večje telo ima večjo gostoto.«** Gostota je lastnost snovi, ne velikosti. Če kos snovi prerežemo na pol, se gostota ne spremeni.

## Povzetek

- Gostota pove, kolikšna je masa snovi v enoti prostornine: $\rho = \dfrac{m}{V}$.
- Enoti: $\mathrm{kg/m^3}$ in $\mathrm{g/cm^3}$; $1\,\text{g/cm}^3 = 1000\,\text{kg/m}^3$.
- Iz formule: $m = \rho \cdot V$ in $V = \dfrac{m}{\rho}$.
- Gostota je lastnost snovi; vsaka snov ima svojo značilno gostoto.
- Merimo maso (tehtnica) in prostornino (računsko ali z merilnim valjem), nato izračunamo $\rho$.
- Telo, ki ima manjšo gostoto od tekočine, v njej plava; telo z večjo gostoto potone.

## Drugače: Na sliki

Predstavljaj si dve enaki škatli, vsaka s prostornino $1\,\text{dm}^3$. V prvo spraviš kroglice iz stiropora, v drugo kroglice iz svinca; vse kroglice so enako velike. Obe škatli sta napolnjeni do vrha, prostornina je enaka, a druga škatla je veliko težja. Razlog: v isti prostornini je v svincu »več snovi« (težji in tesneje zloženi delci).

Gostota je torej kot **»natlačenost«** snovi. Večja ko je gostota, več mase je v isti prostornini.

V interaktivni simulaciji spodaj lahko izbiraš različne snovi in jih potapljaš v vodo. Opazuj: pri enaki prostornini ima gostejši blok večjo maso. Ko spreminjaš maso in prostornino, opazuj, kdaj blok plava in kdaj potone ter kako se to ujema z gostoto.

## Drugače: Iz vsakdanjega življenja

**Olje in voda.** Če v kozarec vode vliješ olje, se olje zbere na vrhu. Olje ima gostoto okoli $0{,}9\,\text{g/cm}^3$, torej manjšo od vode, zato plava nad njo.

**Balon.** Balon, napolnjen s helijem, se dvigne, ker je helij redkejši (manj gost) od zraka. Navaden balon, napolnjen z izdihanim zrakom, pade na tla.

**Ladja iz jekla.** Jeklo ima gostoto okoli $7{,}8\,\text{g/cm}^3$, torej veliko večjo od vode, pa ladje vseeno plavajo. Ladja ni polna jekla: v njej je veliko zraka, zato je *povprečna* gostota celotne ladje manjša od gostote vode. Natančneje to razložimo pri vzgonu.

**Pakiranje.** Kilogram perja zavzame veliko več prostora kot kilogram svinca. Masa je enaka, prostornina različna, zato je gostota različna.

## Drugače: Korak za korakom s številkami

Recept za nalogo z gostoto:

1. Izpiši, kaj je podano ($m$, $V$ ali $\rho$) in kaj iščeš.
2. Preveri enote. Če je treba, pretvori (npr. $1\,\text{kg} = 1000\,\text{g}$, $1\,\text{l} = 1000\,\text{cm}^3$).
3. Izberi obliko formule: $\rho = \dfrac{m}{V}$, $m = \rho V$ ali $V = \dfrac{m}{\rho}$.
4. Vstavi številke z enotami in izračunaj.
5. Preveri, ali je rezultat smiseln (npr. gostota kovine ne more biti $0{,}001\,\text{g/cm}^3$).

**Numerični primer:** Koliko prostornine zavzame $500\,\text{g}$ vode?

- Podano: $m = 500\,\text{g}$, $\rho = 1\,\text{g/cm}^3$. Iščemo $V$.
- Formula: $V = \dfrac{m}{\rho} = \dfrac{500\,\text{g}}{1\,\text{g/cm}^3} = 500\,\text{cm}^3$.
- To je $0{,}5\,\text{l}$. Smiselno: pol kilograma vode je pol litra.

**Pretvorba gostote:**

| $\mathrm{g/cm^3}$ | $\mathrm{kg/m^3}$ |
|---|---|
| $1$ | $1000$ |
| $2{,}7$ | $2700$ |
| $7{,}9$ | $7900$ |

## Drugače: Bolj natančno

Gostota je **intenzivna količina**: ni odvisna od količine snovi. Masa in prostornina sta **ekstenzivni** količini (odvisni od količine), a njuno razmerje je za dano snov stalno. To pomeni, da sta masa in prostornina **sorazmerni**: če se prostornina podvoji, se podvoji tudi masa.

Zato je graf $m(V)$ za eno snov **premica skozi koordinatno izhodišče**, njen naklon pa je ravno gostota:

$$\rho = \frac{m}{V} = \text{naklon premice}$$

Strmejša ko je premica, večja je gostota.

Pretvorba enot iz definicij:

$$1\,\frac{\text{g}}{\text{cm}^3} = \frac{10^{-3}\,\text{kg}}{10^{-6}\,\text{m}^3} = 10^{3}\,\frac{\text{kg}}{\text{m}^3}$$

Opomba: gostota je odvisna od temperature in pri plinih tudi od tlaka, saj se prostornina spreminja (večinoma se snovi z višjo temperaturo nekoliko razširijo). Tabelirane vrednosti veljajo za sobno temperaturo.

## Preveri se

? Telo ima maso $200\,\text{g}$ in prostornino $50\,\text{cm}^3$. Kolikšna je njegova gostota?
- $0{,}25\,\text{g/cm}^3$
+ $4\,\text{g/cm}^3$
- $10\,000\,\text{g/cm}^3$
- $250\,\text{g/cm}^3$
> $\rho = \dfrac{m}{V} = \dfrac{200\,\text{g}}{50\,\text{cm}^3} = 4\,\text{g/cm}^3$. Odgovor $0{,}25$ dobiš, če maso in prostornino zamenjaš, $10\,000$ pa, če ju množiš.

? Kolikšna je masa $2\,\text{l}$ olja z gostoto $0{,}9\,\text{g/cm}^3$?
- $1{,}8\,\text{g}$
- $2{,}2\,\text{g}$
+ $1800\,\text{g}$
> $2\,\text{l} = 2000\,\text{cm}^3$, zato $m = \rho \cdot V = 0{,}9\,\text{g/cm}^3 \cdot 2000\,\text{cm}^3 = 1800\,\text{g}$. Odgovor $1{,}8$ nastane, če pozabiš pretvoriti litre v $\text{cm}^3$.

? Kamen potopimo v merilni valj z vodo, gladina naraste od $120\,\text{ml}$ na $150\,\text{ml}$. Kolikšna je prostornina kamna?
- $150\,\text{cm}^3$
- $270\,\text{cm}^3$
+ $30\,\text{cm}^3$
- $1{,}25\,\text{cm}^3$
> Prostornina kamna je razlika odčitkov: $150\,\text{ml} - 120\,\text{ml} = 30\,\text{ml} = 30\,\text{cm}^3$. Končni odčitek je prostornina vode in kamna skupaj, vsota pa nima pomena.
