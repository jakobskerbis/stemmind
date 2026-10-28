---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Z naravnimi in celimi števili že suvereno računaš: vsota, razlika in zmnožek dveh celih števil so spet cela števila. Pri deljenju pa se zatakne. Račun $12 : 4 = 3$ je v redu, račun $1 : 3$ pa ni celo število. Enačba $3x = 1$ v množici $\mathbb{Z}$ nima rešitve.

Takih primerov je v vsakdanjem življenju veliko. Pico razdeliš med tri prijatelje, recept zahteva tri četrtine litra mleka, termometer pokaže −2,5 °C, jogurt stane 0,59 €. Vsa ta števila ležijo med celimi števili. Potrebujemo torej širšo množico, v kateri deljenje (razen z $0$) vedno uspe. To so **racionalna števila**, označimo jih z $\mathbb{Q}$ (črka Q je iz besede *količnik*).

V tej lekciji se naučiš zapisati racionalno število kot ulomek, ga razširiti in skrajšati, računati z ulomki, ulomek pretvoriti v decimalno število in nazaj ter števila primerjati po velikosti. Brez tega ne gre naprej: potence, algebrski izrazi in ulomljeni izrazi bodo vsi gradili na računanju z ulomki.

## Razlaga

**1. Kaj je racionalno število.** Racionalno število je vsako število, ki ga lahko zapišemo kot ulomek $\dfrac{a}{b}$, kjer je $a$ celo število in $b$ naravno število:

$$\mathbb{Q} = \left\{ \frac{a}{b} \;;\; a \in \mathbb{Z},\ b \in \mathbb{N} \right\}$$

Številu $a$ rečemo **števec**, številu $b$ **imenovalec**. Ulomek $\dfrac{a}{b}$ je zapis količnika $a : b$. Imenovalec ne sme biti $0$, ker z $0$ ne delimo. Vsako celo število je tudi racionalno, saj je npr. $5 = \dfrac{5}{1}$ in $-3 = \dfrac{-3}{1}$. Zato velja veriga množic

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}.$$

**2. Razširjanje, krajšanje in enakost ulomkov.** Isto število lahko zapišemo z mnogimi ulomki: $\dfrac{1}{2} = \dfrac{2}{4} = \dfrac{3}{6}$. Ulomek **razširimo**, če števec in imenovalec pomnožimo z istim številom (različnim od $0$). Ulomek **skrajšamo**, če ju delimo z istim številom. Vrednost se pri tem ne spremeni. Dva ulomka sta enaka, kadar velja

$$\frac{a}{b} = \frac{c}{d} \iff a \cdot d = b \cdot c.$$

Ulomka $\dfrac{6}{9}$ in $\dfrac{10}{15}$ sta enaka, ker je $6 \cdot 15 = 90 = 9 \cdot 10$. Ulomek je **nekrajšljiv**, če sta števec in imenovalec tuji števili, torej če je njun največji skupni delitelj $D(a,b) = 1$. Krajšamo z največjim skupnim deliteljem: $D(18, 30) = 6$, zato je $\dfrac{18}{30} = \dfrac{3}{5}$. Predznak pišemo pred ulomek ali v števec, imenovalec naj bo pozitiven: $-\dfrac{3}{5} = \dfrac{-3}{5}$.

**3. Računanje z ulomki.**

| Operacija | Pravilo | Primer |
|---|---|---|
| Vsota in razlika | skupni imenovalec: $\dfrac{a}{b} \pm \dfrac{c}{d} = \dfrac{ad \pm bc}{bd}$ | $\dfrac{1}{2} + \dfrac{1}{3} = \dfrac{3 + 2}{6} = \dfrac{5}{6}$ |
| Zmnožek | števec s števcem, imenovalec z imenovalcem: $\dfrac{a}{b} \cdot \dfrac{c}{d} = \dfrac{ac}{bd}$ | $\dfrac{2}{3} \cdot \dfrac{3}{8} = \dfrac{6}{24} = \dfrac{1}{4}$ |
| Količnik | množimo z obratno vrednostjo: $\dfrac{a}{b} : \dfrac{c}{d} = \dfrac{a}{b} \cdot \dfrac{d}{c}$, $c \neq 0$ | $\dfrac{3}{4} : \dfrac{9}{8} = \dfrac{3}{4} \cdot \dfrac{8}{9} = \dfrac{2}{3}$ |

Pri seštevanju in odštevanju je najbolje vzeti **najmanjši skupni večkratnik** imenovalcev $v(b,d)$, da so števila manjša. Rezultat vedno skrajšaj. Ulomek z večjim števcem od imenovalca lahko zapišemo kot **mešano število**: $\dfrac{19}{12} = 1\dfrac{7}{12}$, kar pomeni $1 + \dfrac{7}{12}$ (ne zmnožek!). Pomembno je tole: vsota, razlika, zmnožek in količnik dveh racionalnih števil (pri količniku delitelj ni $0$) so spet racionalna števila. V $\mathbb{Q}$ torej deljenje vedno uspe, v $\mathbb{Z}$ ne.

**4. Decimalni zapis.** Ulomek pretvorimo v decimalno število tako, da števec delimo z imenovalcem. Dobimo dve vrsti zapisov:

- **končen** decimalni zapis: $\dfrac{3}{8} = 0{,}375$,
- **periodičen** decimalni zapis, kjer se skupina števk ponavlja v neskončnost: $\dfrac{1}{3} = 0{,}333\ldots = 0{,}\overline{3}$ in $\dfrac{5}{11} = 0{,}\overline{45}$. Črta označuje **periodo**. Če se perioda ne začne takoj za vejico, števke pred njo imenujemo predperioda: $\dfrac{1}{6} = 0{,}1\overline{6}$.

Vsako racionalno število ima končen ali periodičen decimalni zapis. Kdaj je zapis končen? Takrat, ko ima **nekrajšljiv** ulomek v imenovalcu samo praštevili $2$ in $5$ (ali nobene). Tako je $\dfrac{7}{20}$ končen, saj je $20 = 2 \cdot 2 \cdot 5$, in je $0{,}35$. Ulomek $\dfrac{5}{12}$ je periodičen, ker je $12 = 2 \cdot 2 \cdot 3$ in nastopa praštevilo $3$. Pozor: ulomek $\dfrac{9}{15}$ ima v imenovalcu faktor $3$, a ga lahko skrajšamo v $\dfrac{3}{5} = 0{,}6$, zato je končen. Najprej vedno skrajšaj.

**5. Od decimalnega zapisa nazaj k ulomku.** Velja tudi obratno: vsako končno ali periodično decimalno število je racionalno. Tako ga pretvorimo v ulomek:

- Končno število: $0{,}35 = \dfrac{35}{100} = \dfrac{7}{20}$.
- Čisto periodično število, npr. $x = 2{,}\overline{18}$: perioda ima dve števki, zato pomnožimo s $100$, da se »repa« ujemata: $100x = 218{,}\overline{18}$. Odštejemo $x$: $99x = 216$, torej $x = \dfrac{216}{99} = \dfrac{24}{11}$.
- Mešano periodično število, npr. $x = 0{,}1\overline{6}$: pomnožimo z $10$ in s $100$: $10x = 1{,}\overline{6}$ in $100x = 16{,}\overline{6}$. Odštejemo: $90x = 15$, torej $x = \dfrac{15}{90} = \dfrac{1}{6}$.

Splošno pravilo: pomnožimo z $10$, $100$, $1000$, … (toliko ničel, kolikor je mest periode), tako da se neskončna »repa« ujemata, in ju odštejemo.

**6. Urejenost.** Za poljubni racionalni števili velja natanko ena od možnosti: $a < b$, $a = b$ ali $a > b$. Na številski premici je manjše število levo od večjega. Kako primerjamo?

- Pozitivno število je večje od $0$, negativno manjše od $0$.
- Pri istem pozitivnem imenovalcu je večji ulomek tisti z večjim števcem: $\dfrac{3}{7} < \dfrac{5}{7}$.
- Pri istem pozitivnem števcu je večji ulomek tisti z manjšim imenovalcem: $\dfrac{1}{8} < \dfrac{1}{5}$.
- Splošno za $b, d > 0$: $\dfrac{a}{b} < \dfrac{c}{d} \iff a \cdot d < b \cdot c$.
- Decimalna števila primerjamo od leve: najprej izenačimo število decimalk ($0{,}4 = 0{,}40$), nato primerjamo.
- Pri negativnih številih velja obratno kot pri pozitivnih: $-\dfrac{1}{2} < -\dfrac{1}{3}$, saj je $-\dfrac{1}{2}$ bolj levo.

Racionalna števila so **gosta**: med poljubnima različnima racionalnima številoma $p < q$ leži še njuno povprečje $\dfrac{p+q}{2}$. Med $\dfrac{1}{3}$ in $\dfrac{1}{2}$ je na primer $\dfrac{5}{12}$. Zato ni »naslednjega« racionalnega števila, kakor je pri celih številih za $4$ naslednje $5$.

## Rešeni primeri

### Primer 1 (lažji)

Pri receptu za palačinke potrebuješ $\dfrac{3}{4}$ litra mleka za testo in $\dfrac{5}{6}$ litra mleka za nadev. Koliko litrov mleka potrebuješ skupaj? Rezultat zapiši kot ulomek in kot mešano število.

**Podatki:** mleko za testo $\dfrac{3}{4}\,\text{l}$, mleko za nadev $\dfrac{5}{6}\,\text{l}$
**Iščemo:** skupno količino mleka $V$ (ulomek in mešano število)

:::formula
Ulomka razširimo na skupni imenovalec $v$ (najmanjši skupni večkratnik imenovalcev) in seštejemo števca: $\dfrac{a}{b} + \dfrac{c}{d} = \dfrac{a' + c'}{v}$, kjer sta $a'$ in $c'$ števca razširjenih ulomkov
:::

**Rešitev:**

1. Najmanjši skupni večkratnik števil $4$ in $6$ je $v(4,6) = 12$.
2. Razširimo: $\dfrac{3}{4} = \dfrac{3 \cdot 3}{4 \cdot 3} = \dfrac{9}{12}$ in $\dfrac{5}{6} = \dfrac{5 \cdot 2}{6 \cdot 2} = \dfrac{10}{12}$.
3. Seštejemo: $V = \dfrac{9}{12} + \dfrac{10}{12} = \dfrac{19}{12}$. Ulomek je nekrajšljiv, ker je $19$ praštevilo.
4. Mešano število: $19 = 1 \cdot 12 + 7$, torej $\dfrac{19}{12} = 1\dfrac{7}{12}$.
5. Preverba z decimalnimi števili: $0{,}75 + 0{,}8\overline{3} = 1{,}58\overline{3}$, kar se ujema z $1\dfrac{7}{12}$, saj je $\dfrac{7}{12} \approx 0{,}58$.
6. Odgovor: skupaj potrebuješ $\dfrac{19}{12}\,\text{l} = 1\dfrac{7}{12}\,\text{l}$ mleka, to je približno $1{,}58\,\text{l}$.

### Primer 2 (srednji)

Ulomek $\dfrac{7}{12}$ zapiši kot decimalno število. Najprej utemelji, ali bo zapis končen ali periodičen, nato izvedi deljenje.

**Podatki:** ulomek $\dfrac{7}{12}$
**Iščemo:** decimalni zapis števila $\dfrac{7}{12}$ in vrsto zapisa (končen ali periodičen)

:::formula
Nekrajšljiv ulomek ima končen decimalni zapis natanko tedaj, ko ima imenovalec samo praštevili $2$ in $5$; sicer je zapis periodičen. Zapis dobimo z deljenjem $a : b$.
:::

**Rešitev:**

1. Števili $7$ in $12$ sta tuji, torej je ulomek nekrajšljiv.
2. Razcep imenovalca: $12 = 2 \cdot 2 \cdot 3$. Nastopa praštevilo $3$, zato bo zapis **periodičen**.
3. Delimo (pisno): $7 : 12 = 0{,}\ldots$ Pri vsakem koraku pripišemo ničlo ostanku.
   - $70 : 12 = 5$, ostanek $70 - 60 = 10$,
   - $100 : 12 = 8$, ostanek $100 - 96 = 4$,
   - $40 : 12 = 3$, ostanek $40 - 36 = 4$.
4. Ostanek $4$ se je ponovil, zato se bo števka $3$ ponavljala v neskončnost.
5. Zapis: $\dfrac{7}{12} = 0{,}58333\ldots = 0{,}58\overline{3}$.
6. Smiselnost: $\dfrac{7}{12}$ je malo več kot $\dfrac{6}{12} = 0{,}5$, zato mora biti decimalno število malo večje od $0{,}5$. Res je.
7. Odgovor: $\dfrac{7}{12} = 0{,}58\overline{3}$. Zapis je periodičen s predperiodo $58$ in periodo $3$.

### Primer 3 (težji)

Števila $\dfrac{3}{5}$, $-\dfrac{2}{3}$, $0{,}\overline{6}$, $-0{,}7$ in $\dfrac{5}{8}$ razvrsti po velikosti od najmanjšega do največjega.

**Podatki:** števila $\dfrac{3}{5}$, $-\dfrac{2}{3}$, $0{,}\overline{6}$, $-0{,}7$, $\dfrac{5}{8}$
**Iščemo:** vrstni red od najmanjšega do največjega števila

:::formula
Periodično število pretvorimo v ulomek, vsa števila zapišemo na skupnem imenovalcu $v > 0$; pri istem pozitivnem imenovalcu je večje število tisto z večjim števcem.
:::

**Rešitev:**

1. Pretvorimo $x = 0{,}\overline{6}$: $10x = 6{,}\overline{6}$, odštejemo $x$ in dobimo $9x = 6$, torej $x = \dfrac{6}{9} = \dfrac{2}{3}$.
2. Zapišemo $-0{,}7 = -\dfrac{7}{10}$.
3. Imenovalci so $5$, $3$, $3$, $10$ in $8$. Njihov najmanjši skupni večkratnik je $v = 120$.
4. Razširimo vsa števila na imenovalec $120$:
   - $\dfrac{3}{5} = \dfrac{72}{120}$,
   - $-\dfrac{2}{3} = -\dfrac{80}{120}$,
   - $0{,}\overline{6} = \dfrac{2}{3} = \dfrac{80}{120}$,
   - $-0{,}7 = -\dfrac{7}{10} = -\dfrac{84}{120}$,
   - $\dfrac{5}{8} = \dfrac{75}{120}$.
5. Števci po velikosti: $-84 < -80 < 72 < 75 < 80$.
6. Preverba z decimalnimi približki: $-0{,}7 < -0{,}667 < 0{,}6 < 0{,}625 < 0{,}667$. Ujema se.
7. Odgovor: $-0{,}7 < -\dfrac{2}{3} < \dfrac{3}{5} < \dfrac{5}{8} < 0{,}\overline{6}$.

## Pogoste napake

- **Seštevanje števcev in imenovalcev: $\dfrac{1}{2} + \dfrac{1}{3} = \dfrac{2}{5}$.** Polovica in tretjina sta kosa različnih velikosti, zato ju ne moremo kar prešteti. Da je to narobe, vidiš takoj: $\dfrac{2}{5} = 0{,}4$ je manj kot $\dfrac{1}{2}$, vsota pa ne more biti manjša od seštevanca. Pravilno: skupni imenovalec $6$, $\dfrac{3}{6} + \dfrac{2}{6} = \dfrac{5}{6}$.
- **Krajšanje seštevancev: $\dfrac{4 + 3}{4} = 3$.** Krajšamo lahko samo skupne **faktorje** celega števca in celega imenovalca, ne seštevancev. Pravilno: $\dfrac{4 + 3}{4} = \dfrac{7}{4}$. Krajšanje je dovoljeno pri zmnožku: $\dfrac{4 \cdot 3}{4} = 3$.
- **Napačna primerjava negativnih ulomkov: $-\dfrac{1}{2} > -\dfrac{1}{3}$, ker je $\dfrac{1}{2} > \dfrac{1}{3}$.** Minus obrne vrstni red. Pravilno: na številski premici je $-0{,}5$ levo od $-0{,}33\ldots$, zato je $-\dfrac{1}{2} < -\dfrac{1}{3}$.
- **Decimalna števila kot cela: $0{,}35 > 0{,}4$, ker je $35 > 4$.** Število $0{,}35$ pomeni $35$ stotink, število $0{,}4$ pa $40$ stotink, ne $4$ stotink. Pravilno: izenači število decimalk, $0{,}35$ in $0{,}40$, nato primerjaj $35 < 40$.
- **Periodično število z imenovalcem $10$: $0{,}\overline{3} = \dfrac{3}{10}$.** Ulomek $\dfrac{3}{10}$ je $0{,}3$, brez ponavljanja. Pravilno: $x = 0{,}\overline{3}$, $10x - x = 3$, torej $9x = 3$ in $x = \dfrac{1}{3}$. Imenovalec ima toliko devetk, kolikor mest ima perioda.

## Povzetek

- Racionalno število je število oblike $\dfrac{a}{b}$, $a \in \mathbb{Z}$, $b \in \mathbb{N}$; velja $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$.
- Ulomka sta enaka, če je $\dfrac{a}{b} = \dfrac{c}{d} \iff ad = bc$; krajšamo z največjim skupnim deliteljem, rezultat naj bo nekrajšljiv.
- Vsota in razlika: skupni imenovalec. Zmnožek: $\dfrac{ac}{bd}$. Količnik: množi z obratno vrednostjo.
- Decimalni zapis racionalnega števila je končen ali periodičen. Nekrajšljiv ulomek je končen natanko tedaj, ko ima v imenovalcu samo praštevili $2$ in $5$.
- Periodično število v ulomek: pomnoži z $10$, $100$, … in odštej, da neskončni »rep« izgine.
- Primerjanje: skupni imenovalec ali $\dfrac{a}{b} < \dfrac{c}{d} \iff ad < bc$ ($b, d > 0$); levo na številski premici je manjše.
- Med dvema racionalnima številoma je neskončno mnogo drugih (gostost), npr. povprečje $\dfrac{p+q}{2}$.

## Drugače: Na sliki

Predstavljaj si številsko premico in enotsko daljico od $0$ do $1$. Razdeli jo na $12$ enakih delov. Vsaka črtica je potem na razdalji $\dfrac{1}{12}$ od prejšnje. Ulomki z različnimi imenovalci pristanejo na isti točki, če so enaki: $\dfrac{1}{2}$ je na šesti črtici, $\dfrac{3}{6}$ prav tako.

| Število | V dvanajstinah | Decimalno |
|---|---|---|
| $\dfrac{1}{4}$ | $\dfrac{3}{12}$ | $0{,}25$ |
| $\dfrac{1}{3}$ | $\dfrac{4}{12}$ | $0{,}\overline{3}$ |
| $\dfrac{1}{2}$ | $\dfrac{6}{12}$ | $0{,}5$ |
| $\dfrac{2}{3}$ | $\dfrac{8}{12}$ | $0{,}\overline{6}$ |
| $\dfrac{3}{4}$ | $\dfrac{9}{12}$ | $0{,}75$ |
| $\dfrac{5}{6}$ | $\dfrac{10}{12}$ | $0{,}8\overline{3}$ |

Če tabelo bereš od zgoraj navzdol, se števila pomikajo po premici proti desni. Negativna števila ležijo zrcalno: $-\dfrac{3}{4}$ je od ničle toliko levo, kolikor je $\dfrac{3}{4}$ desno.

Zdaj si premico približaj z lupo na odseku med $0{,}3$ in $0{,}4$. Razdelimo ga na deset delov in dobimo $0{,}31$, $0{,}32$ in tako naprej. Med $0{,}33$ in $0{,}34$ lahko spet vstavimo deset novih točk. Postopek se nikoli ne konča. To je gostost racionalnih števil: v poljubno majhnem odseku jih je neskončno mnogo.

## Drugače: Iz vsakdanjega življenja

**Čas.** Ura ima $60$ minut, zato je $20$ minut natanko $\dfrac{1}{3}$ ure. Če zapišeš čas v urah, dobiš periodično število: $1$ ura in $20$ minut je $1\dfrac{1}{3}\,\text{h} = 1{,}\overline{3}\,\text{h}$. Zato čas raje zapišemo kot $1\,\text{h}\,20\,\text{min}$ kot z decimalnim številom.

**Denar.** En cent je $\dfrac{1}{100}$ evra, zato so vsi zneski končna decimalna števila. Težava nastane pri deljenju. Če trije prijatelji plačajo račun za $10\,\text{€}$, je vsak delež $\dfrac{10}{3} = 3{,}\overline{3}\,\text{€}$. Plačati pa je mogoče le $3{,}33\,\text{€}$ in en cent ostane. Zato pri deljenju denarja pogosto ostane cent, ki ga ni mogoče pošteno razdeliti.

**Temperatura.** Pri −2,5 °C je hladneje kot pri −1,5 °C, čeprav je $2{,}5 > 1{,}5$. Negativna števila primerjamo obratno kot pozitivna, zato je $-2{,}5 < -1{,}5$.

**Delitev pic.** Pet pic razdeliš med tri skupine. Vsaka dobi $\dfrac{5}{3} = 1\dfrac{2}{3}$ pice, torej eno celo in dve tretjini. Ulomki v kuhinji povedo, koliko je kosov in kako veliki so.

## Drugače: Korak za korakom s številkami

Izračunaj $\left(\dfrac{2}{3} - \dfrac{5}{8}\right) : \dfrac{1}{4}$ in rezultat zapiši še kot decimalno število.

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Najprej račun v oklepaju. Najmanjši skupni večkratnik $3$ in $8$ je $24$. | $\dfrac{2}{3} = \dfrac{16}{24}$, $\dfrac{5}{8} = \dfrac{15}{24}$ |
| 2 | Odštejemo števca. | $\dfrac{16}{24} - \dfrac{15}{24} = \dfrac{1}{24}$ |
| 3 | Deljenje zamenjamo z množenjem z obratno vrednostjo. | $\dfrac{1}{24} \cdot \dfrac{4}{1}$ |
| 4 | Pomnožimo in skrajšamo s $4$. | $\dfrac{4}{24} = \dfrac{1}{6}$ |
| 5 | Delimo $1 : 6$: $10 : 6 = 1$, ostanek $4$; $40 : 6 = 6$, ostanek $4$. Ostanek se ponovi, zato se števka $6$ ponavlja. | $0{,}1\overline{6}$ |
| 6 | Preverba z decimalnimi približki. | $(0{,}6667 - 0{,}625) : 0{,}25 = 0{,}0417 : 0{,}25 \approx 0{,}167$ |

Rezultat je $\dfrac{1}{6} = 0{,}1\overline{6}$.

## Drugače: Bolj natančno

**Zakaj je račun z ulomki sploh v redu?** Isto število ima mnogo zapisov, zato mora rezultat računa biti neodvisen od izbranega zapisa. Preveri: $\dfrac{1}{2} + \dfrac{1}{3} = \dfrac{5}{6}$, pa tudi $\dfrac{2}{4} + \dfrac{1}{3} = \dfrac{6}{12} + \dfrac{4}{12} = \dfrac{10}{12} = \dfrac{5}{6}$. Pravila za računanje in pogoj $ad = bc$ so izbrana tako, da je to vedno res.

**Zakaj je decimalni zapis končen ali periodičen?** Pri deljenju $a : b$ je ostanek vedno eno od števil $0, 1, \ldots, b-1$. Če ostanek postane $0$, je zapis končen. Sicer se po največ $b$ korakih ostanek ponovi, od tam naprej se ponavljajo tudi števke. Perioda je torej dolga največ $b - 1$. Pri $\dfrac{1}{7} = 0{,}\overline{142857}$ je dolga ravno $6$ števk, ker nastopijo vsi možni ostanki od $1$ do $6$.

**Zakaj imajo nekatera števila dva decimalna zapisa?** Če je $x = 0{,}\overline{9}$, velja $10x - x = 9$, torej $x = 1$. Torej je $0{,}\overline{9} = 1$ in podobno $0{,}5 = 0{,}4\overline{9}$. Običajno uporabljamo prvi, krajši zapis.

**Kaj še manjka?** Racionalna števila so gosta, a na številski premici še vedno obstajajo točke, ki jih ne moremo zapisati z ulomkom. Njihov decimalni zapis ni niti končen niti periodičen. O tem v naslednji lekciji.

## Preveri se

? Kateri ulomek je enak $\dfrac{12}{18}$?
- $\dfrac{3}{4}$
+ $\dfrac{2}{3}$
- $\dfrac{6}{12}$
> Največji skupni delitelj $D(12, 18)$ je $6$, zato je $\dfrac{12}{18} = \dfrac{2}{3}$. Pri $\dfrac{3}{4}$ ne drži $12 \cdot 4 = 18 \cdot 3$ ($48 \neq 54$), $\dfrac{6}{12}$ pa je enak $\dfrac{1}{2}$.

? Kateri od ulomkov ima končen decimalni zapis?
- $\dfrac{1}{3}$
- $\dfrac{5}{12}$
+ $\dfrac{3}{8}$
- $\dfrac{2}{7}$
> Imenovalec $8 = 2 \cdot 2 \cdot 2$ vsebuje le praštevilo $2$, zato je $\dfrac{3}{8} = 0{,}375$. Imenovalci $3$, $12$ in $7$ vsebujejo praštevilo $3$ oziroma $7$, zato so zapisi periodični: $0{,}\overline{3}$, $0{,}41\overline{6}$, $0{,}\overline{285714}$.

? Katero od števil je največje?
- $-\dfrac{1}{2}$
+ $-\dfrac{1}{3}$
- $-\dfrac{3}{4}$
- $-1$
> Na številski premici je večje število bolj desno. Decimalno: $-0{,}5$, $-0{,}33\ldots$, $-0{,}75$ in $-1$. Najbolj desno je $-\dfrac{1}{3}$.

? Število $0{,}\overline{45}$ zapiši kot nekrajšljiv ulomek.
- $\dfrac{9}{20}$
- $\dfrac{4}{9}$
+ $\dfrac{5}{11}$
> Naj bo $x = 0{,}\overline{45}$. Perioda ima dve števki, zato je $100x = 45{,}\overline{45}$. Odštejemo $x$: $99x = 45$, torej $x = \dfrac{45}{99} = \dfrac{5}{11}$. Ulomek $\dfrac{9}{20}$ je $0{,}45$ brez ponavljanja.
