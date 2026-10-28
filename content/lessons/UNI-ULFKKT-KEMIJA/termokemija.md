---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Vsaka kemijska reakcija spremlja energijska sprememba. Gorenje zemeljskega plina greje stanovanja, razgradnja glukoze v celicah poganja mišice, raztapljanje amonijevega nitrata v hladilnem obkladku hladi poškodovan gleženj. **Termokemija** se ukvarja s toploto, ki se pri reakcijah sprosti ali porabi, in z njenim računanjem.

Inženir potrebuje termokemijo, da izbere gorivo in dimenzionira hladilni sistem reaktorja (eksotermna reakcija lahko »pobegne«), živilski tehnolog in nutricionist pri energijski vrednosti hrane, biolog pri energijski bilanci organizmov, farmacevt pri stabilnosti in raztapljanju učinkovin. Termokemija je tudi prvi korak k termodinamiki, ki pove, ali reakcija sploh lahko poteče.

V tej lekciji se naučiš:

- kaj je **reakcijska entalpija** in kako zapišemo termokemijsko enačbo,
- uporabiti **Hessov zakon** za izračun entalpije iz drugih reakcij,
- računati reakcijsko entalpijo iz **standardnih tvorbenih entalpij**,
- izmeriti toploto v kalorimetru in razlikovati $\Delta H$ od $\Delta U$.

## Razlaga

**1. Sistem in okolica.** **Sistem** je del sveta, ki ga opazujemo (reakcijska zmes), **okolica** vse ostalo. Sistem lahko z okolico izmenjuje energijo kot **toploto** $q$ ali **delo** $w$. Dogovor o predznaku: kar sistem prejme, je pozitivno.

**2. Notranja energija in prvi zakon.** Notranja energija $U$ je vsota vseh energij delcev v sistemu. Absolutne vrednosti ne poznamo, merimo pa spremembe. **Prvi zakon termodinamike** (ohranitev energije):

$$\Delta U = q + w.$$

Pri stalni prostornini sistem ne opravlja dela razpenjanja, zato je $\Delta U = q_V$ (toplota, izmerjena v zaprti »bombi«).

**3. Entalpija.** Večina reakcij v laboratoriju in v naravi poteka pri **stalnem tlaku** (odprta posoda, celica). Tam je primerna funkcija **entalpija** $H = U + pV$, za katero velja

$$\Delta H = q_p.$$

Sprememba entalpije je torej toplota, izmenjana pri stalnem tlaku. $U$ in $H$ sta **funkciji stanja**: njuna sprememba je odvisna le od začetnega in končnega stanja, ne od poti.

- $\Delta H < 0$: **eksotermna** reakcija, sistem oddaja toploto (gorenje, nevtralizacija).
- $\Delta H > 0$: **endotermna** reakcija, sistem toploto prejema (razkroj apnenca, taljenje ledu).

**4. Termokemijska enačba.** Je urejena enačba z agregatnimi stanji in reakcijsko entalpijo:

$$\mathrm{CH_4(g) + 2\,O_2(g) \longrightarrow CO_2(g) + 2\,H_2O(l)}, \qquad \Delta_\mathrm{r}H^\circ = -890{,}3\,\mathrm{kJ/mol}.$$

Enota $\mathrm{kJ/mol}$ pomeni »na mol reakcije, kot je zapisana«: ko zreagira $1\,\mathrm{mol}$ metana in $2\,\mathrm{mol}$ kisika. Pravila:

- če enačbo pomnožimo s faktorjem, se $\Delta H$ pomnoži z istim faktorjem,
- obrnjena reakcija ima nasprotni predznak $\Delta H$,
- agregatno stanje je pomembno: $\Delta H$ za nastanek $\mathrm{H_2O(l)}$ in $\mathrm{H_2O(g)}$ se razlikujeta za izparilno entalpijo ($44\,\mathrm{kJ/mol}$ pri $25\,^\circ\mathrm{C}$).

Toplota pri dani množini snovi: $q = n \cdot \dfrac{|\Delta_\mathrm{r}H|}{\nu}$, kjer je $\nu$ koeficient te snovi v enačbi.

**5. Standardno stanje.** Oznaka $^\circ$ pomeni standardne pogoje: tlak $p^\circ = 1\,\mathrm{bar}$, za raztopine $c^\circ = 1\,\mathrm{mol/L}$, snov v najstabilnejši obliki pri dani temperaturi (tabelirano običajno pri $298{,}15\,\mathrm{K}$).

**6. Hessov zakon.** Ker je entalpija funkcija stanja, je reakcijska entalpija enaka ne glede na to, ali reakcija poteče v enem ali v več korakih:

$$\Delta H_\text{celotna} = \Delta H_1 + \Delta H_2 + \dots$$

Termokemijske enačbe torej lahko seštevamo, odštevamo in množimo kot algebrske enačbe. Tako izračunamo entalpije reakcij, ki jih ne moremo neposredno izmeriti (npr. nastanek $\mathrm{CO}$ iz ogljika, ker pri gorenju vedno nastane tudi nekaj $\mathrm{CO_2}$).

**7. Standardna tvorbena entalpija** $\Delta_\mathrm{f}H^\circ$ je reakcijska entalpija nastanka $1\,\mathrm{mol}$ spojine iz **elementov v standardnem stanju**. Za $\mathrm{H_2O(l)}$: $\mathrm{H_2(g) + \tfrac12\,O_2(g) \to H_2O(l)}$, $\Delta_\mathrm{f}H^\circ = -285{,}8\,\mathrm{kJ/mol}$. Za elemente v standardnem stanju ($\mathrm{O_2(g)}$, $\mathrm{C}$(grafit), $\mathrm{Fe(s)}$) je po definiciji $\Delta_\mathrm{f}H^\circ = 0$. Iz Hessovega zakona sledi

$$\Delta_\mathrm{r}H^\circ = \sum \nu\,\Delta_\mathrm{f}H^\circ(\text{produkti}) - \sum \nu\,\Delta_\mathrm{f}H^\circ(\text{reaktanti}).$$

Nekaj vrednosti pri $298\,\mathrm{K}$ ($\mathrm{kJ/mol}$):

| snov | $\Delta_\mathrm{f}H^\circ$ | snov | $\Delta_\mathrm{f}H^\circ$ |
|---|---|---|---|
| $\mathrm{CO_2(g)}$ | $-393{,}5$ | $\mathrm{CH_4(g)}$ | $-74{,}8$ |
| $\mathrm{CO(g)}$ | $-110{,}5$ | $\mathrm{C_2H_5OH(l)}$ | $-277{,}7$ |
| $\mathrm{H_2O(l)}$ | $-285{,}8$ | $\mathrm{C_6H_{12}O_6(s)}$ | $-1273{,}3$ |
| $\mathrm{H_2O(g)}$ | $-241{,}8$ | $\mathrm{CaCO_3(s)}$ | $-1206{,}9$ |
| $\mathrm{NH_3(g)}$ | $-46{,}1$ | $\mathrm{CaO(s)}$ | $-635{,}1$ |

**8. Kalorimetrija.** Toploto merimo s **kalorimetrom**. V preprostem kalorimetru (izolirana posoda z raztopino) je toplota, ki jo sprejme raztopina,

$$q = m\,c_p\,\Delta T,$$

kjer je $c_p$ specifična toplota (za vodo in razredčene raztopine $4{,}18\,\mathrm{J\,g^{-1}\,K^{-1}}$). Če reakcija toploto sprosti, se raztopina segreje, zato je $\Delta H$ reakcije $-q/n$. Pri natančnejših meritvah upoštevamo še toplotno kapaciteto kalorimetra $C$: $q = C\,\Delta T$.

**9. $\Delta H$ in $\Delta U$.** Razlika izhaja iz dela razpenjanja plinov: $\Delta H = \Delta U + \Delta(pV)$. Za idealne pline je

$$\Delta H = \Delta U + \Delta n_\mathrm{g}\,RT,$$

kjer je $\Delta n_\mathrm{g}$ sprememba množine plinov. Pri $298\,\mathrm{K}$ je $RT = 2{,}48\,\mathrm{kJ/mol}$, zato je razlika majhna v primerjavi z reakcijskimi entalpijami, a pri natančni kalorimetriji (bomba meri $\Delta U$) pomembna.

## Rešeni primeri

### Primer 1 (lažji)

Pri gorenju metana velja $\mathrm{CH_4(g) + 2\,O_2(g) \to CO_2(g) + 2\,H_2O(l)}$, $\Delta_\mathrm{r}H^\circ = -890{,}3\,\mathrm{kJ/mol}$. Koliko toplote se sprosti pri sežigu $8{,}00\,\mathrm{g}$ metana? $M(\mathrm{CH_4}) = 16{,}04\,\mathrm{g/mol}$.

**Podatki:** $m(\mathrm{CH_4}) = 8{,}00\,\mathrm{g}$, $M(\mathrm{CH_4}) = 16{,}04\,\mathrm{g/mol}$, $\Delta_\mathrm{r}H^\circ = -890{,}3\,\mathrm{kJ/mol}$ (na $1\,\mathrm{mol}$ $\mathrm{CH_4}$)
**Iščemo:** sproščeno toploto $q$

:::formula
$n = \dfrac{m}{M}$, $\quad q = n \cdot |\Delta_\mathrm{r}H^\circ|$ (koeficient metana je $1$)
:::

**Rešitev:**

1. $n(\mathrm{CH_4}) = 8{,}00\,\mathrm{g} / 16{,}04\,\mathrm{g/mol} = 0{,}4988\,\mathrm{mol}$.
2. $\Delta H = 0{,}4988\,\mathrm{mol} \cdot (-890{,}3\,\mathrm{kJ/mol}) = -444\,\mathrm{kJ}$.
3. Negativni predznak pomeni, da sistem toploto odda okolici.
4. Odgovor: pri sežigu $8{,}00\,\mathrm{g}$ metana se sprosti približno $444\,\mathrm{kJ}$ toplote.

### Primer 2

Izračunaj reakcijsko entalpijo za $\mathrm{C(s) + \tfrac12\,O_2(g) \to CO(g)}$ iz entalpij reakcij:
(a) $\mathrm{C(s) + O_2(g) \to CO_2(g)}$, $\Delta H_a = -393{,}5\,\mathrm{kJ/mol}$;
(b) $\mathrm{CO(g) + \tfrac12\,O_2(g) \to CO_2(g)}$, $\Delta H_b = -283{,}0\,\mathrm{kJ/mol}$.

**Podatki:** $\Delta H_a = -393{,}5\,\mathrm{kJ/mol}$ za (a), $\Delta H_b = -283{,}0\,\mathrm{kJ/mol}$ za (b); iskana reakcija $\mathrm{C(s) + \tfrac12\,O_2(g) \to CO(g)}$
**Iščemo:** $\Delta H$ iskane reakcije

:::formula
Hessov zakon: enačbe seštevamo in obračamo kot algebrske; obrnjena reakcija ima $-\Delta H$.
:::

**Rešitev:**

1. Ogljik mora biti na levi kot v (a): reakcijo (a) vzamemo nespremenjeno.
2. $\mathrm{CO}$ mora biti na desni, v (b) pa je na levi: reakcijo (b) obrnemo, $\mathrm{CO_2(g) \to CO(g) + \tfrac12\,O_2(g)}$, $\Delta H = +283{,}0\,\mathrm{kJ/mol}$.
3. Seštejemo: $\mathrm{C + O_2 + CO_2 \to CO_2 + CO + \tfrac12\,O_2}$. Okrajšamo $\mathrm{CO_2}$ in $\tfrac12\,\mathrm{O_2}$: $\mathrm{C + \tfrac12\,O_2 \to CO}$.
4. $\Delta H = -393{,}5 + 283{,}0 = -110{,}5\,\mathrm{kJ/mol}$.
5. Odgovor: reakcijska entalpija nastanka $\mathrm{CO}$ iz ogljika je $-110{,}5\,\mathrm{kJ/mol}$; to je hkrati standardna tvorbena entalpija $\mathrm{CO(g)}$.

### Primer 3 (težji)

Iz standardnih tvorbenih entalpij izračunaj standardno reakcijsko entalpijo sežiga tekočega etanola, $\mathrm{C_2H_5OH(l) + 3\,O_2(g) \to 2\,CO_2(g) + 3\,H_2O(l)}$, toploto, ki se sprosti pri sežigu $10{,}0\,\mathrm{g}$ etanola, in spremembo notranje energije $\Delta_\mathrm{r}U^\circ$ pri $298\,\mathrm{K}$. $\Delta_\mathrm{f}H^\circ$: $\mathrm{C_2H_5OH(l)}$ $-277{,}7$, $\mathrm{CO_2(g)}$ $-393{,}5$, $\mathrm{H_2O(l)}$ $-285{,}8\,\mathrm{kJ/mol}$; $M(\mathrm{C_2H_5OH}) = 46{,}07\,\mathrm{g/mol}$; $R = 8{,}314\,\mathrm{J\,mol^{-1}\,K^{-1}}$.

**Podatki:** $\Delta_\mathrm{f}H^\circ(\mathrm{C_2H_5OH, l}) = -277{,}7\,\mathrm{kJ/mol}$, $\Delta_\mathrm{f}H^\circ(\mathrm{CO_2, g}) = -393{,}5\,\mathrm{kJ/mol}$, $\Delta_\mathrm{f}H^\circ(\mathrm{H_2O, l}) = -285{,}8\,\mathrm{kJ/mol}$, $\Delta_\mathrm{f}H^\circ(\mathrm{O_2, g}) = 0$, $m = 10{,}0\,\mathrm{g}$, $M = 46{,}07\,\mathrm{g/mol}$, $T = 298\,\mathrm{K}$, $R = 8{,}314\,\mathrm{J\,mol^{-1}\,K^{-1}}$
**Iščemo:** $\Delta_\mathrm{r}H^\circ$, toploto $q$ za $10{,}0\,\mathrm{g}$, $\Delta_\mathrm{r}U^\circ$

:::formula
$\Delta_\mathrm{r}H^\circ = \sum \nu\,\Delta_\mathrm{f}H^\circ(\text{prod.}) - \sum \nu\,\Delta_\mathrm{f}H^\circ(\text{reakt.})$, $\quad \Delta U = \Delta H - \Delta n_\mathrm{g}RT$
:::

**Rešitev:**

1. Produkti: $2 \cdot (-393{,}5) + 3 \cdot (-285{,}8) = -787{,}0 - 857{,}4 = -1644{,}4\,\mathrm{kJ/mol}$.
2. Reaktanti: $-277{,}7 + 3 \cdot 0 = -277{,}7\,\mathrm{kJ/mol}$.
3. $\Delta_\mathrm{r}H^\circ = -1644{,}4 - (-277{,}7) = -1366{,}7\,\mathrm{kJ/mol}$.
4. Množina etanola: $n = 10{,}0/46{,}07 = 0{,}2171\,\mathrm{mol}$; $q = 0{,}2171 \cdot 1366{,}7\,\mathrm{kJ} \approx 297\,\mathrm{kJ}$.
5. Plini: levo $3\,\mathrm{mol}$ $\mathrm{O_2}$, desno $2\,\mathrm{mol}$ $\mathrm{CO_2}$ (voda je tekoča), $\Delta n_\mathrm{g} = 2 - 3 = -1$.
6. $\Delta_\mathrm{r}U^\circ = -1366{,}7 - (-1) \cdot 8{,}314 \cdot 10^{-3} \cdot 298\,\mathrm{kJ/mol} = -1366{,}7 + 2{,}5 = -1364{,}2\,\mathrm{kJ/mol}$.
7. Odgovor: $\Delta_\mathrm{r}H^\circ = -1366{,}7\,\mathrm{kJ/mol}$; sežig $10{,}0\,\mathrm{g}$ etanola sprosti okoli $297\,\mathrm{kJ}$; $\Delta_\mathrm{r}U^\circ \approx -1364{,}2\,\mathrm{kJ/mol}$ (v kalorimetrični bombi bi izmerili nekoliko manj toplote).

## Pogoste napake

- **Obrnjen vrstni red.** $\Delta_\mathrm{r}H^\circ$ je »produkti minus reaktanti«, ne obratno. Pri obrnjenem vrstnem redu dobiš pravo vrednost z napačnim predznakom.
- **Pozabljeni koeficienti.** Tvorbene entalpije veljajo za $1\,\mathrm{mol}$ snovi; v Primeru 3 je treba $\Delta_\mathrm{f}H^\circ(\mathrm{H_2O})$ pomnožiti s $3$.
- **Tvorbena entalpija elementa.** $\Delta_\mathrm{f}H^\circ(\mathrm{O_2, g}) = 0$, ne pa $\Delta_\mathrm{f}H^\circ(\mathrm{O_3, g})$ ali $\Delta_\mathrm{f}H^\circ(\mathrm{H, g})$; nič velja le za najstabilnejšo obliko elementa.
- **Agregatno stanje vode.** Z $\mathrm{H_2O(g)}$ namesto $\mathrm{H_2O(l)}$ dobiš pri sežigu metana $-802\,\mathrm{kJ/mol}$ namesto $-890\,\mathrm{kJ/mol}$.
- **Predznak v kalorimetriji.** Če se raztopina segreje, je $q$ raztopine pozitiven, $\Delta H$ reakcije pa negativen.
- **Enote $R$.** $R = 8{,}314\,\mathrm{J\,mol^{-1}\,K^{-1}}$; pri seštevanju s $\mathrm{kJ/mol}$ ga pretvori v $0{,}008\,314\,\mathrm{kJ\,mol^{-1}\,K^{-1}}$.
- **Hessov zakon brez obrata predznaka.** Ko reakcijo obrneš, obrni tudi predznak $\Delta H$; ko jo pomnožiš, pomnoži tudi $\Delta H$.

## Povzetek

- $\Delta U = q + w$; pri stalnem tlaku $\Delta H = q_p$; $H$ in $U$ sta funkciji stanja.
- $\Delta H < 0$ eksotermno, $\Delta H > 0$ endotermno; obrnjena reakcija: $-\Delta H$, pomnožena: $k\,\Delta H$.
- **Hessov zakon:** entalpije zaporednih reakcij se seštevajo.
- **Tvorbena entalpija:** nastanek $1\,\mathrm{mol}$ spojine iz elementov; za elemente v standardnem stanju je $0$.
- $\Delta_\mathrm{r}H^\circ = \sum \nu\,\Delta_\mathrm{f}H^\circ(\text{prod.}) - \sum \nu\,\Delta_\mathrm{f}H^\circ(\text{reakt.})$.
- Kalorimetrija: $q = mc_p\Delta T$ ali $C\Delta T$, $\Delta H = -q/n$; $\Delta H = \Delta U + \Delta n_\mathrm{g}RT$.

## Drugače: Na sliki

Hessov zakon iz Primera 2 si predstavljaj kot entalpijski diagram z dvema potema od istega začetka do istega konca:

```
 H
 |   C(s) + O2(g)  ------------------+
 |        |                           |
 |        | -110,5 kJ                 |
 |        v                           |  -393,5 kJ
 |   CO(g) + 1/2 O2(g)                |  (neposredno)
 |        |                           |
 |        | -283,0 kJ                 |
 |        v                           v
 |   CO2(g)  <------------------------+
```

Pot čez $\mathrm{CO}$ in neposredna pot se končata na isti višini: $-110{,}5 + (-283{,}0) = -393{,}5\,\mathrm{kJ/mol}$. Tako kot pri vzponu na goro: višinska razlika med izhodiščem in vrhom ni odvisna od poti.

Tvorbene entalpije si predstavljaj kot »nadmorske višine« spojin, merjene od skupne ničle (elementov). Reakcijska entalpija je razlika višin med produkti in reaktanti.

## Drugače: Iz vsakdanjega življenja

**Energija v hrani.** Sežig glukoze, $\mathrm{C_6H_{12}O_6 + 6\,O_2 \to 6\,CO_2 + 6\,H_2O(l)}$, ima iz tvorbenih entalpij $\Delta_\mathrm{r}H^\circ = 6 \cdot (-393{,}5) + 6 \cdot (-285{,}8) - (-1273{,}3) = -2802{,}5\,\mathrm{kJ/mol}$, kar je $15{,}6\,\mathrm{kJ}$ na gram. Po Hessovem zakonu telo pri postopnem celičnem dihanju dobi enako skupno energijo kot plamen, le da jo deloma shrani v ATP. Na deklaracijah živil je za ogljikove hidrate navedeno $17\,\mathrm{kJ/g}$, za maščobe $37\,\mathrm{kJ/g}$.

**Grelni in hladilni obkladki.** Grelni obkladek vsebuje železov prah, ki ob stiku z zrakom eksotermno oksidira. Hladilni obkladek pa vsebuje amonijev nitrat in vodo v ločenih vrečkah; raztapljanje $\mathrm{NH_4NO_3}$ je endotermno (okoli $+26\,\mathrm{kJ/mol}$) in raztopina se ohladi.

**Goriva.** Primerjava toplote na kilogram: vodik okoli $142\,\mathrm{MJ/kg}$, metan $55\,\mathrm{MJ/kg}$, etanol $30\,\mathrm{MJ/kg}$ ($1366{,}7/46{,}07$), les okoli $15\,\mathrm{MJ/kg}$. Za vozila je pomembna tudi energija na liter, kjer tekoča goriva prekašajo vodik.

**Potenje.** Tudi fazni prehodi imajo entalpijo. Izparevanje vode pri koži zahteva okoli $44\,\mathrm{kJ/mol}$ oziroma $2{,}4\,\mathrm{kJ}$ na gram. Ko izhlapi $1\,\mathrm{L}$ znoja, telo odda okoli $2400\,\mathrm{kJ}$ toplote, zato je potenje tako učinkovito hlajenje. Iz istega razloga para pri $100\,^\circ\mathrm{C}$ opeče huje kot voda z enako temperaturo: pri kondenzaciji na koži sprosti še izparilno entalpijo.

**Industrijska varnost.** Pri eksotermnih reakcijah v velikih reaktorjih je treba toploto sproti odvajati. Če hlajenje odpove, temperatura naraste, reakcija se pospeši in sprosti še več toplote. Inženirji zato iz $\Delta_\mathrm{r}H$ izračunajo potrebno hlajenje in največji možni dvig temperature.

## Drugače: Korak za korakom s številkami

V kalorimetru zmešamo $50{,}0\,\mathrm{mL}$ klorovodikove kisline s koncentracijo $1{,}00\,\mathrm{mol/L}$ in $50{,}0\,\mathrm{mL}$ raztopine $\mathrm{NaOH}$ s koncentracijo $1{,}00\,\mathrm{mol/L}$. Temperatura naraste za $6{,}80\,\mathrm{K}$. Izračunaj entalpijo nevtralizacije. Gostota raztopine je $1{,}00\,\mathrm{g/mL}$, $c_p = 4{,}18\,\mathrm{J\,g^{-1}\,K^{-1}}$, toplotno kapaciteto kalorimetra zanemarimo.

1. **Masa raztopine:** $V = 100{,}0\,\mathrm{mL}$, $m = 100{,}0\,\mathrm{g}$.
2. **Toplota, ki jo sprejme raztopina:** $q = 100{,}0\,\mathrm{g} \cdot 4{,}18\,\mathrm{J\,g^{-1}\,K^{-1}} \cdot 6{,}80\,\mathrm{K} = 2842\,\mathrm{J}$.
3. **Množina reakcije:** $n(\mathrm{H^+}) = n(\mathrm{OH^-}) = 1{,}00\,\mathrm{mol/L} \cdot 0{,}0500\,\mathrm{L} = 0{,}0500\,\mathrm{mol}$; reagenta sta v stehiometričnem razmerju.
4. **Entalpija:** $\Delta H = -q/n = -2842\,\mathrm{J}/0{,}0500\,\mathrm{mol} = -56\,840\,\mathrm{J/mol} \approx -56{,}8\,\mathrm{kJ/mol}$.
5. **Predznak:** raztopina se je segrela, zato je reakcija eksotermna in $\Delta H < 0$.
6. **Primerjava:** tabelirana vrednost za $\mathrm{H^+(aq) + OH^-(aq) \to H_2O(l)}$ je $-55{,}8\,\mathrm{kJ/mol}$. Ker je izmerjena vrednost po absolutni vrednosti celo večja, je ne pojasni toplota, ki jo sprejme posoda (njeno zanemarjenje bi dalo premajhno $|\Delta H|$), ampak predvsem napaka pri merjenju $\Delta T$ in to, da ima nastala raztopina $\mathrm{NaCl}$ nekoliko manjšo specifično toploto kot voda.

## Drugače: Bolj natančno

**Izpeljava $\Delta H = q_p$.** Če sistem opravlja le delo razpenjanja proti stalnemu zunanjemu tlaku, je $w = -p\,\Delta V$. Iz prvega zakona je $q_p = \Delta U + p\,\Delta V$. Ker je $H = U + pV$, je pri stalnem $p$: $\Delta H = \Delta U + p\,\Delta V = q_p$. Toplota sama ni funkcija stanja (odvisna je od poti), pri stalnem tlaku pa je enaka spremembi funkcije stanja; zato velja Hessov zakon.

**Kirchhoffov zakon.** Reakcijska entalpija je odvisna od temperature:

$$\Delta_\mathrm{r}H^\circ(T_2) = \Delta_\mathrm{r}H^\circ(T_1) + \int_{T_1}^{T_2} \Delta_\mathrm{r}C_p^\circ\,\mathrm{d}T, \qquad \Delta_\mathrm{r}C_p^\circ = \sum \nu\,C_{p,\mathrm{m}}^\circ(\text{prod.}) - \sum \nu\,C_{p,\mathrm{m}}^\circ(\text{reakt.}).$$

Če je $\Delta_\mathrm{r}C_p^\circ$ približno stalna, je popravek $\Delta_\mathrm{r}C_p^\circ\,(T_2 - T_1)$; pri spremembi za nekaj deset kelvinov je običajno le nekaj $\mathrm{kJ/mol}$.

**Vezne entalpije.** Reakcijsko entalpijo v plinski fazi lahko ocenimo iz povprečnih veznih entalpij: $\Delta_\mathrm{r}H \approx \sum D(\text{pretrgane vezi}) - \sum D(\text{nastale vezi})$. Za $\mathrm{CH_4(g) + 2\,O_2(g) \to CO_2(g) + 2\,H_2O(g)}$ z $D(\mathrm{C{-}H}) = 413$, $D(\mathrm{O{=}O}) = 498$, $D(\mathrm{C{=}O}) = 799$ in $D(\mathrm{O{-}H}) = 463\,\mathrm{kJ/mol}$:

$$\Delta_\mathrm{r}H \approx (4 \cdot 413 + 2 \cdot 498) - (2 \cdot 799 + 4 \cdot 463) = 2648 - 3450 = -802\,\mathrm{kJ/mol},$$

kar se tu dobro ujema z vrednostjo iz tvorbenih entalpij ($-393{,}5 + 2 \cdot (-241{,}8) + 74{,}8 = -802{,}3\,\mathrm{kJ/mol}$). V splošnem so ocene iz veznih entalpij le približne (napaka nekaj deset $\mathrm{kJ/mol}$), ker je moč vezi odvisna od okolice v molekuli, in veljajo le za pline.

**Entalpija ni vse.** Endotermne reakcije, kot je raztapljanje $\mathrm{NH_4NO_3}$, potekajo spontano. O spontanosti odloča Gibbsova energija $\Delta G = \Delta H - T\Delta S$, ki upošteva tudi spremembo entropije. Termokemija da prvi člen te enačbe.

## Preveri se

? Kolikšna je standardna tvorbena entalpija $\mathrm{O_2(g)}$?
- $-249\,\mathrm{kJ/mol}$
+ $0\,\mathrm{kJ/mol}$
- $+498\,\mathrm{kJ/mol}$
> Kisik $\mathrm{O_2(g)}$ je element v standardnem stanju, zato je njegova tvorbena entalpija po definiciji enaka nič. $498\,\mathrm{kJ/mol}$ je vezna entalpija $\mathrm{O{=}O}$.

? Za reakcijo $\mathrm{A \to B}$ je $\Delta H = -50\,\mathrm{kJ/mol}$. Kolikšna je $\Delta H$ za reakcijo $\mathrm{2\,B \to 2\,A}$?
- $-100\,\mathrm{kJ/mol}$
- $+50\,\mathrm{kJ/mol}$
+ $+100\,\mathrm{kJ/mol}$
> Obrat reakcije zamenja predznak ($+50$), množenje z $2$ podvoji vrednost: $+100\,\mathrm{kJ/mol}$.

? Izračunaj $\Delta_\mathrm{r}H^\circ$ za $\mathrm{CaCO_3(s) \to CaO(s) + CO_2(g)}$. ($\Delta_\mathrm{f}H^\circ$: $\mathrm{CaCO_3}$ $-1206{,}9$, $\mathrm{CaO}$ $-635{,}1$, $\mathrm{CO_2}$ $-393{,}5\,\mathrm{kJ/mol}$)
- $-178{,}3\,\mathrm{kJ/mol}$
+ $+178{,}3\,\mathrm{kJ/mol}$
- $-2235{,}5\,\mathrm{kJ/mol}$
> $\Delta_\mathrm{r}H^\circ = (-635{,}1 - 393{,}5) - (-1206{,}9) = +178{,}3\,\mathrm{kJ/mol}$. Razkroj apnenca je endotermen, zato apnenice potrebujejo veliko toplote. $-178{,}3$ dobiš z obrnjenim odštevanjem, $-2235{,}5$ s seštevanjem vseh vrednosti.

? Kaj pravi Hessov zakon?
- Vsaka eksotermna reakcija poteče spontano.
+ Reakcijska entalpija je odvisna le od začetnega in končnega stanja, ne od poti.
- Pri stalni prostornini je toplota enaka spremembi entalpije.
> Ker je entalpija funkcija stanja, je skupna $\Delta H$ večstopenjske reakcije enaka vsoti $\Delta H$ posameznih stopenj. Pri stalni prostornini je toplota enaka $\Delta U$, ne $\Delta H$.
