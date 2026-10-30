---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz 1. letnika že poznaš energijo, delo in zakon o ohranitvi energije. Veš tudi, da se pri trenju mehanska energija »izgubi«, telesa pa se segrejejo. Tudi iz vsakdanjega življenja veš, da se voda v loncu na štedilniku segreva, led v kozarcu pa se tali.

V tej lekciji bomo ugotovili, **kam se ta energija porabi** in kako jo izračunamo. Odgovorimo lahko na vprašanja: koliko energije potrebuje kotliček, da zavre vodo? Zakaj se pesek na plaži poleti segreje hitreje kot morje? Zakaj je pri taljenju ledu temperatura ves čas $0\,^\circ\text{C}$, čeprav ledu dovajamo energijo?

## Razlaga

**1. Notranja energija.** Snov je zgrajena iz delcev (atomov, molekul), ki se neprestano gibljejo in med seboj delujejo. **Notranja energija** $W_n$ telesa je vsota kinetičnih energij vseh delcev (zaradi gibanja) in potencialnih energij zaradi medsebojnih sil med delci. Višja ko je temperatura, hitreje se v povprečju gibljejo delci in večja je notranja energija.

**2. Toplota.** **Toplota** $Q$ je energija, ki se zaradi temperaturne razlike prenese z enega telesa na drugo (ali z okolice na telo). Toplota ni »shranjena« v telesu: telo ima notranjo energijo, toplota pa je energija, ki se *prenaša*. Merimo jo v joulih ($\text{J}$). Toplota sama od sebe teče vedno z toplejšega telesa na hladnejše.

Notranjo energijo lahko spremenimo tudi z delom (npr. drgnjenje dlani, stiskanje zraka s tlačilko). Če se mehansko delo ne opravlja, velja: dovedena toplota poveča notranjo energijo, odvedena jo zmanjša:

$$\Delta W_n = Q$$

**3. Specifična toplota.** Različne snovi za enako segrevanje potrebujejo različno toploto. **Specifična toplota** $c$ pove, koliko toplote potrebuje $1\,\text{kg}$ snovi, da se segreje za $1\,\text{K}$ (ali $1\,^\circ\text{C}$):

$$c = \frac{Q}{m\,\Delta T}, \qquad \text{enota: } \frac{\text{J}}{\text{kg\,K}}$$

Iz tega sledi osnovna enačba za segrevanje ali ohlajanje:

$$Q = m\,c\,\Delta T$$

kjer je $\Delta T = T_{\text{končna}} - T_{\text{začetna}}$. Pri segrevanju je $Q>0$, pri ohlajanju $Q<0$ (telo toploto oddaja).

Nekaj približnih vrednosti: voda $c \approx 4200\,\dfrac{\text{J}}{\text{kg\,K}}$, led približno $2100\,\dfrac{\text{J}}{\text{kg\,K}}$, železo približno $450\,\dfrac{\text{J}}{\text{kg\,K}}$. Voda ima za snov zelo veliko specifično toploto: težko se segreje in težko ohladi.

**4. Temperaturna razlika.** Razlika $1\,\text{K}$ je enaka razliki $1\,^\circ\text{C}$, zato pri $\Delta T$ ni treba pretvarjati stopinj Celzija v kelvine.

**5. Fazni prehodi.** Snov je lahko v trdnem, tekočem ali plinastem agregatnem stanju. Prehodi so:

- taljenje (trdno $\to$ tekoče) in obratno strjevanje,
- izparevanje oziroma vrenje (tekoče $\to$ plinasto) in obratno kondenzacija,
- sublimacija (trdno $\to$ plinasto) in obratno desublimacija.

Med faznim prehodom se temperatura snovi **ne spreminja**, čeprav ji dovajamo toploto. Dovedena energija se porabi za spremembo medsebojne lege in vezi med delci (poveča se potencialna energija delcev), ne pa za hitrejše gibanje.

**6. Specifična talilna in izparilna toplota.** Toplota, potrebna za taljenje mase $m$ pri tališču:

$$Q = m\,q_t$$

Toplota, potrebna za izparevanje pri vrelišču:

$$Q = m\,q_i$$

Pri vodi je pri normalnem tlaku $q_t \approx 334\,\dfrac{\text{kJ}}{\text{kg}}$ ($0\,^\circ\text{C}$) in $q_i \approx 2260\,\dfrac{\text{kJ}}{\text{kg}}$ ($100\,^\circ\text{C}$). Pri strjevanju in kondenzaciji se ista toplota sprosti.

**7. Kako računamo, če so v nalogi vmes fazni prehodi.** Račun razdelimo na odseke: segrevanje v eni fazi ($Q = mc\Delta T$), nato fazni prehod ($Q = mq$), nato spet segrevanje, in na koncu toplote seštejemo.

## Rešeni primeri

### Primer 1: segrevanje vode (lažji)

Koliko toplote potrebujemo, da $2\,\text{kg}$ vode segrejemo z $20\,^\circ\text{C}$ na $70\,^\circ\text{C}$? Uporabi $c = 4200\,\dfrac{\text{J}}{\text{kg\,K}}$.

**Podatki:** $m = 2\,\text{kg}$, $T_1 = 20\,^\circ\text{C}$, $T_2 = 70\,^\circ\text{C}$, $c = 4200\,\dfrac{\text{J}}{\text{kg\,K}}$
**Iščemo:** toploto $Q$

:::formula
$Q = m\,c\,\Delta T$, kjer je $\Delta T = T_2 - T_1$
:::

**Rešitev:**

1. Voda se samo segreva (ostaja tekoča), zato uporabimo $Q = mc\Delta T$.
2. Temperaturna razlika: $\Delta T = 70\,^\circ\text{C} - 20\,^\circ\text{C} = 50\,\text{K}$. Razliko lahko zapišemo v kelvinih, ker sta razliki v $^\circ\text{C}$ in K enaki.
3. Vstavimo: $Q = 2\,\text{kg} \cdot 4200\,\dfrac{\text{J}}{\text{kg\,K}} \cdot 50\,\text{K} = 420\,000\,\text{J}$.
4. Odgovor: $Q = 420\,\text{kJ}$. Preverimo smiselnost: $Q$ je pozitiven, kar ustreza segrevanju.

### Primer 2: iskanje specifične toplote

Kos kovine z maso $0{,}50\,\text{kg}$ segrejemo s $20\,^\circ\text{C}$ na $60\,^\circ\text{C}$. Pri tem mu dovedemo $9000\,\text{J}$ toplote. Kolikšna je specifična toplota kovine?

**Podatki:** $m = 0{,}50\,\text{kg}$, $T_1 = 20\,^\circ\text{C}$, $T_2 = 60\,^\circ\text{C}$, $Q = 9000\,\text{J}$
**Iščemo:** specifično toploto $c$

:::formula
$c = \dfrac{Q}{m\,\Delta T}$, kjer je $\Delta T = T_2 - T_1$
:::

**Rešitev:**

1. Izhajamo iz $Q = mc\Delta T$ in izrazimo $c$: $c = \dfrac{Q}{m\,\Delta T}$.
2. $\Delta T = 60\,^\circ\text{C} - 20\,^\circ\text{C} = 40\,\text{K}$.
3. Vstavimo: $c = \dfrac{9000\,\text{J}}{0{,}50\,\text{kg} \cdot 40\,\text{K}} = \dfrac{9000}{20}\,\dfrac{\text{J}}{\text{kg\,K}} = 450\,\dfrac{\text{J}}{\text{kg\,K}}$.
4. Odgovor: $c = 450\,\dfrac{\text{J}}{\text{kg\,K}}$. Ta vrednost se ujema z vrednostjo za železo, zato je kovina lahko železo. Zanesljivo tega iz ene same vrednosti ne moremo trditi, ker imajo tudi druge snovi podobno $c$.

### Primer 3: led, ki ga segrejemo do vode (težji)

Koliko toplote potrebujemo, da $0{,}20\,\text{kg}$ ledu s temperaturo $-10\,^\circ\text{C}$ spremenimo v vodo s temperaturo $20\,^\circ\text{C}$? Uporabi: $c_{\text{led}} = 2100\,\dfrac{\text{J}}{\text{kg\,K}}$, $c_{\text{voda}} = 4200\,\dfrac{\text{J}}{\text{kg\,K}}$, $q_t = 334\,000\,\dfrac{\text{J}}{\text{kg}}$.

**Podatki:** $m = 0{,}20\,\text{kg}$, začetna temperatura ledu $T_1 = -10\,^\circ\text{C}$, končna temperatura vode $T_2 = 20\,^\circ\text{C}$, $c_{\text{led}} = 2100\,\dfrac{\text{J}}{\text{kg\,K}}$, $c_{\text{voda}} = 4200\,\dfrac{\text{J}}{\text{kg\,K}}$, $q_t = 334\,000\,\dfrac{\text{J}}{\text{kg}}$ (tališče ledu je $0\,^\circ\text{C}$)
**Iščemo:** skupno toploto $Q$

:::formula
$Q = m c_{\text{led}} \Delta T_1 + m q_t + m c_{\text{voda}} \Delta T_2$, kjer je $\Delta T_1 = 0\,^\circ\text{C} - T_1$ in $\Delta T_2 = T_2 - 0\,^\circ\text{C}$
:::

**Rešitev:**

Proces ima tri odseke, ker je vmes fazni prehod pri $0\,^\circ\text{C}$.

1. **Segrevanje ledu od $-10\,^\circ\text{C}$ do $0\,^\circ\text{C}$.** $\Delta T = 10\,\text{K}$.
   $Q_1 = 0{,}20 \cdot 2100 \cdot 10\,\text{J} = 4200\,\text{J}$.
2. **Taljenje ledu pri $0\,^\circ\text{C}$.** Temperatura se ne spreminja, zato uporabimo $q_t$.
   $Q_2 = m q_t = 0{,}20 \cdot 334\,000\,\text{J} = 66\,800\,\text{J}$.
3. **Segrevanje vode od $0\,^\circ\text{C}$ do $20\,^\circ\text{C}$.** $\Delta T = 20\,\text{K}$.
   $Q_3 = 0{,}20 \cdot 4200 \cdot 20\,\text{J} = 16\,800\,\text{J}$.
4. **Skupaj.** $Q = Q_1 + Q_2 + Q_3 = 4200 + 66\,800 + 16\,800 = 87\,800\,\text{J}$.
5. Odgovor: potrebujemo približno $87{,}8\,\text{kJ}$. Opazimo, da je za taljenje potrebnega največ ($66{,}8\,\text{kJ}$), čeprav se temperatura pri tem ne spremeni.

## Pogoste napake

- **Mešanje pojmov toplota in temperatura.** Temperatura je merilo za povprečno kinetično energijo delcev, toplota je prenesena energija. Telo ne »vsebuje toplote«, ima notranjo energijo.
- **Uporaba $Q = mc\Delta T$ med faznim prehodom.** Pri taljenju ali vrenju se temperatura ne spreminja ($\Delta T = 0$), zato moraš uporabiti $Q = mq$.
- **Pozabljen odsek.** Pri nalogi, kjer led segrevaš do vode, moraš seštevati vse odseke: segrevanje ledu, taljenje, segrevanje vode.
- **Napačna $c$.** Led in voda imata različni specifični toploti. Uporabi vrednost za tisto fazo, v kateri je snov.
- **Napačna enota mase.** Specifična toplota je podana na $\text{kg}$, zato maso v gramih najprej pretvori v kilograme.
- **Predznak $\Delta T$.** Računaj vedno končna minus začetna temperatura; pri ohlajanju je rezultat negativen.

## Povzetek

- Notranja energija je vsota kinetičnih in potencialnih energij delcev telesa; z naraščajočo temperaturo se povečuje.
- Toplota $Q$ je energija, ki se zaradi temperaturne razlike prenaša s toplejšega na hladnejše telo; merimo jo v $\text{J}$.
- Segrevanje in ohlajanje: $Q = mc\Delta T$, specifična toplota $c$ ima enoto $\dfrac{\text{J}}{\text{kg\,K}}$.
- Voda ima $c \approx 4200\,\dfrac{\text{J}}{\text{kg\,K}}$.
- Med faznim prehodom se temperatura ne spreminja; toplota je $Q = mq_t$ (taljenje) ali $Q = mq_i$ (izparevanje).
- Pri večstopenjskih nalogah račun razdelimo na odseke in toplote seštejemo.

## Drugače: Na sliki

Predstavljaj si graf temperature v odvisnosti od dovedene toplote za led, ki ga enakomerno segrevamo. Graf ima pet delov:

1. **Poševna črta navzgor** (led se segreva do $0\,^\circ\text{C}$).
2. **Vodoravna črta pri $0\,^\circ\text{C}$** (taljenje; temperatura ostaja enaka).
3. **Poševna črta navzgor** (voda se segreva do $100\,^\circ\text{C}$).
4. **Vodoravna črta pri $100\,^\circ\text{C}$** (vrenje).
5. **Poševna črta navzgor** (vodna para se segreva).

Naklon poševnih delov je odvisen od specifične toplote: večja ko je $c$, več toplote potrebuješ za isto zvišanje temperature, zato je graf položnejši. Vodoravna dela sta daljša ali krajša glede na $q_t$ in $q_i$. Vodoravni del pri vrenju je veliko daljši kot pri taljenju, ker je $q_i$ precej večja od $q_t$.

V simulaciji spodaj (»Toplotna bilanca pri mešanju«) zmešaš dve snovi z različnima temperaturama in opazuješ, kakšna je končna temperatura. Toploto, ki jo odda toplejša snov, prejme hladnejša. Poskusi spreminjati mase in snovi ter napovej rezultat, preden ga preveriš.

## Drugače: Iz vsakdanjega življenja

**Morje in pesek.** Poleti je pesek na plaži opoldne vroč, morje pa le toplo. Voda ima veliko specifično toploto, zato potrebuje veliko več energije za isto zvišanje temperature kot pesek. Zvečer se pesek hitro ohladi, morje pa počasi. Zato je podnebje ob morju bolj uravnoteženo.

**Led v pijači.** Če v pijačo daš led, se pijača ohladi, ne le zato, ker je led hladen, ampak predvsem zato, ker led za taljenje porablja energijo iz pijače ($334\,\text{kJ}$ na kilogram). Led pri $0\,^\circ\text{C}$ ohladi pijačo bolje kot enaka masa hladne vode pri $0\,^\circ\text{C}$.

**Kuhanje.** Ko voda v loncu zavre, se temperatura ne dvigne več, čeprav ogenj gori močno naprej. Dodatna toplota se porabi za izparevanje, zato je pri kuhanju ob vrenju bolje zmanjšati ogenj: voda ne bo nič bolj vroča, le hitreje bo izparevala.

## Drugače: Korak za korakom s številkami

Primer: koliko toplote odda $0{,}5\,\text{kg}$ vode, ko se ohladi z $80\,^\circ\text{C}$ na $30\,^\circ\text{C}$?

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Je prišlo do faznega prehoda? | Ne, voda ostane tekoča |
| 2 | Izberemo enačbo | $Q = mc\Delta T$ |
| 3 | Izračunamo $\Delta T$ | $30 - 80 = -50\,\text{K}$ |
| 4 | Vstavimo | $Q = 0{,}5 \cdot 4200 \cdot (-50)$ |
| 5 | Izračunamo | $Q = -105\,000\,\text{J}$ |
| 6 | Razlaga predznaka | Negativen $Q$: voda toploto oddaja |

Odgovor: voda odda $105\,\text{kJ}$ toplote.

Za naloge s faznimi prehodi si pripravi preglednico odsekov:

| Odsek | Enačba | Opomba |
|---|---|---|
| Segrevanje trdne snovi | $m c_{\text{trdno}} \Delta T$ | do tališča |
| Taljenje | $m q_t$ | $T$ konstantna |
| Segrevanje tekočine | $m c_{\text{tekoče}} \Delta T$ | do vrelišča |
| Izparevanje | $m q_i$ | $T$ konstantna |

Uporabi samo tiste vrstice, ki jih proces res zajame, in rezultate seštej.

## Drugače: Bolj natančno

**Zakaj se temperatura med taljenjem ne spremeni?** Temperatura je povezana s povprečno kinetično energijo delcev. V ledu so molekule vode vezane v urejeno kristalno strukturo. Ko ledu dovajamo toploto pri tališču, ta energija ne poveča hitrosti delcev, ampak oslabi in prekine vezi med molekulami, zato se poveča potencialna energija delcev. Ko je ves led staljen, dodana energija spet poveča kinetično energijo delcev in temperatura začne naraščati.

**Izpeljava enačbe $Q = mc\Delta T$.** Iz definicije specifične toplote $c = \dfrac{Q}{m\,\Delta T}$ takoj dobimo $Q = mc\Delta T$. Enačba velja približno, če se $c$ v obravnavanem temperaturnem območju bistveno ne spreminja. To pri šolskih nalogah predpostavimo.

**Ohranitev energije.** Če dve telesi izmenjujeta toploto samo med seboj, je toplota, ki jo odda toplejše telo, enaka toploti, ki jo sprejme hladnejše:

$$Q_{\text{oddana}} = Q_{\text{sprejeta}}$$

To je poseben primer zakona o ohranitvi energije in je osnova za račun končne temperature pri mešanju.

## Preveri se

? Koliko toplote potrebujemo, da $3\,\text{kg}$ vode segrejemo za $10\,\text{K}$? Uporabi $c = 4200\,\dfrac{\text{J}}{\text{kg\,K}}$.
- $12\,600\,\text{J}$
+ $126\,000\,\text{J}$
- $1260\,\text{J}$
- $42\,000\,\text{J}$
> $Q = mc\Delta T = 3 \cdot 4200 \cdot 10 = 126\,000\,\text{J}$. Odgovor $42\,000\,\text{J}$ pozabi maso, $12\,600\,\text{J}$ in $1260\,\text{J}$ pa sta napaki v računanju potence števila deset.

? Led pri $0\,^\circ\text{C}$ enakomerno segrevamo in se taja. Kaj se dogaja s temperaturo ledu med taljenjem?
- Enakomerno narašča, ker dovajamo toploto.
- Pada, ker led porablja energijo.
+ Ostaja $0\,^\circ\text{C}$, ker se energija porablja za spremembo vezi med delci.
- Najprej narašča, nato pade.
> Med faznim prehodom se dovedena toplota porabi za prekinjanje vezi med delci, zato se temperatura ne spremeni, dokler ni ves led staljen.

? Katero enačbo uporabimo za toploto, potrebno, da $0{,}1\,\text{kg}$ vode pri $100\,^\circ\text{C}$ povsem izparimo?
- $Q = mc\Delta T$
- $Q = mq_t$
+ $Q = mq_i$
> Pri izparevanju pri vrelišču se temperatura ne spreminja ($\Delta T = 0$), zato enačba $Q = mc\Delta T$ ne pride v poštev. Za izparevanje uporabimo specifično izparilno toploto $q_i$, specifična talilna toplota $q_t$ pa je za taljenje.

:::simboli
\Delta W_n | sprememba notranje energije | \Delta W_n = Q | J | kadar telo ne opravlja dela
Q | toplota | Q = m\,c\,\Delta T | J | pri segrevanju Q > 0, pri ohlajanju Q < 0
m | masa | | kg
c | specifična toplota | c = \dfrac{Q}{m\,\Delta T} | J/(kg\,K) | voda 4200 J/(kg K)
T | temperatura | | ^\circ C | razlika 1 K je enaka razliki 1 °C
T_1 | začetna temperatura | | ^\circ C
T_2 | končna temperatura | | ^\circ C
\Delta T_1 | sprememba temperature ledu do tališča | \Delta T_1 = 0\,^\circ\text{C} - T_1 | K
\Delta T_2 | sprememba temperature vode od tališča | \Delta T_2 = T_2 - 0\,^\circ\text{C} | K
q_t | specifična talilna toplota | | J/kg | voda 334 kJ/kg
q_i | specifična izparilna toplota | | J/kg | voda 2260 kJ/kg
Q_{\text{oddana}} | toplota, ki jo toplejše telo odda | | J
Q_{\text{sprejeta}} | toplota, ki jo hladnejše telo sprejme | | J
c_{\text{led}} | specifična toplota ledu | | J/(kg\,K) | 2100 J/(kg K)
c_{\text{voda}} | specifična toplota vode | | J/(kg\,K) | 4200 J/(kg K)
:::
