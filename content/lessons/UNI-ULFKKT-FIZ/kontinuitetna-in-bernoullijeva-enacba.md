---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Na počitnicah se potopiš $15\,\mathrm{m}$ globoko: kolikokrat večji tlak pritiska na bobniče kot na plaži? Skoraj dvainpolkrat, kot pokaže Primer 1. Astronavti vadijo vesoljske sprehode v $12\,\mathrm{m}$ globokem bazenu, kjer jih vzgon drži v lebdenju kot v breztežnosti. Ko na vrtni cevi s palcem pokriješ del odprtine, curek brizgne dlje. Ker tekočina nima stalne oblike, jo opišemo s **tlakom**, **gostoto** in **hitrostjo toka** v vsaki točki.

Najprej mirujoča tekočina (**hidrostatika**: tlak z globino, Pascalov zakon, vzgon), nato tok **idealne tekočine**: **kontinuitetna enačba** izraža ohranitev mase, **Bernoullijeva enačba** ohranitev energije. Z njima izračunaš tlak v vodovodu v drugem nadstropju, pretok v cevi kemijskega obrata in hitrost iztekanja iz rezervoarja, tudi na Marsu.

## Razlaga

### Tekočina v mirovanju

**1. Tlak in gostota.** Tlak je sila na enoto ploščine, ki deluje pravokotno na ploskev: $p = F/S$. Enota je pascal, $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$; pogosto uporabljamo tudi $1\,\mathrm{bar} = 10^5\,\mathrm{Pa}$, normalni zračni tlak je $p_0 \approx 1{,}013 \cdot 10^5\,\mathrm{Pa}$. Gostota je $\rho = m/V$, za vodo $\rho \approx 1000\,\mathrm{kg/m^3}$, za zrak pri sobnih pogojih okoli $1{,}2\,\mathrm{kg/m^3}$. Kapljevine so skoraj nestisljive, zato je njihova gostota praktično stalna.

**2. Hidrostatski tlak.** V mirujoči tekočini tlak z globino narašča, ker mora vsaka plast nositi težo tekočine nad seboj. Za nestisljivo tekočino velja

$$p(h) = p_0 + \rho g h,$$

kjer je $h$ globina pod gladino, na kateri je tlak $p_0$. Tlak je odvisen le od globine, ne od oblike posode (hidrostatski paradoks). Razliko $p - p_0$ imenujemo nadtlak; manometri običajno kažejo nadtlak, barometri pa absolutni tlak.

*Hiter preizkus:* je tlak na dnu ozke, $10\,\mathrm{m}$ visoke cevi z vodo manjši kot na dnu $10\,\mathrm{m}$ globokega jezera? *(Ne, enak je: šteje le globina.)*

**3. Pascalov zakon.** Tlak, ki ga od zunaj povečamo na zaprto tekočino, se prenese nespremenjen na vse dele tekočine in na stene posode. Na tem temeljijo hidravlične stiskalnice in zavore: pri ploščinah batov $S_1$ in $S_2$ je $F_2 = F_1 S_2/S_1$.

*Hiter preizkus:* veliki bat ima $50$-krat večjo ploščino od malega, na mali pritisneš s $100\,\mathrm{N}$. Kolikšna je sila velikega bata? *($5000\,\mathrm{N}$.)*

**4. Vzgon (Arhimedov zakon).** Na telo, potopljeno v tekočino, deluje navzgor sila, enaka teži izpodrinjene tekočine:

$$F_{vz} = \rho_{\text{tek}}\,g\,V_{\text{pot}}.$$

Vzgon nastane, ker je tlak na spodnjo ploskev telesa večji kot na zgornjo. Telo plava, če je njegova povprečna gostota manjša od gostote tekočine; takrat je potopljeni delež prostornine enak $\rho_{\text{telo}}/\rho_{\text{tek}}$.

:::premisli
Železna in lesena kocka enake prostornine sta v vodi popolnoma potopljeni (leseno držiš pod gladino). Na katero deluje večji vzgon?
---
Na obe enak. Vzgon je teža izpodrinjene vode, ta pa je odvisna le od potopljene prostornine in gostote vode, ne od snovi kocke. Železna potone, ker je njena teža večja od vzgona.
:::

### Tekočina v toku

**5. Opis toka.** Pri **stacionarnem toku** se hitrost v vsaki točki s časom ne spreminja. Črte, ki so v vsaki točki tangentne na hitrost, so **tokovnice**; snop tokovnic tvori **tokovno cev**. **Idealna tekočina** je nestisljiva in brez notranjega trenja (neviskozna). Ta model dobro opiše vodo in zrak pri zmernih hitrostih, kadar nas ne zanimajo izgube ob stenah.

**6. Kontinuitetna enačba.** **Prostorninski pretok** je prostornina, ki v enoti časa steče skozi presek: $\Phi_V = \mathrm{d}V/\mathrm{d}t = Sv$ (enota $\mathrm{m^3/s}$), masni pretok pa $\Phi_m = \rho S v$. Ker se masa ne izgublja in ne nastaja, mora skozi vsak presek tokovne cevi steči enaka masa:

$$\rho_1 S_1 v_1 = \rho_2 S_2 v_2, \qquad \text{za nestisljivo tekočino } S_1v_1 = S_2v_2.$$

Kjer se cev zoži, se tok pospeši. Pri okroglem preseku je $S = \pi d^2/4$, zato je hitrost obratno sorazmerna s **kvadratom** premera. Če se cev razveja, je pretok v glavni cevi enak vsoti pretokov v vejah.

:::premisli
V ožjem delu vodoravne cevi voda teče hitreje. Napovej: je tlak tam večji ali manjši kot v širšem delu? Zakaj?
---
Manjši. Voda se pri vstopu v zožitev pospeši, za pospešek pa mora nanjo delovati rezultanta tlačnih sil v smeri toka. Tlak za njo (v širšem delu) mora biti torej večji od tlaka pred njo (v ožjem delu). Bernoullijeva enačba to pove kvantitativno.
:::

**7. Bernoullijeva enačba.** Za stacionaren tok idealne tekočine vzdolž tokovnice velja

$$p + \tfrac{1}{2}\rho v^2 + \rho g z = \text{konst.},$$

kjer je $z$ višina nad izbrano ravnino. Členi imajo enoto tlaka in pomenijo energijo na enoto prostornine: $p$ je »tlačna« energija (delo tlačnih sil), $\tfrac{1}{2}\rho v^2$ kinetična in $\rho g z$ potencialna energija na enoto prostornine. Kjer je hitrost večja, je tlak manjši (na isti višini). Pri $v = 0$ se enačba prevede na hidrostatsko $p + \rho g z = \text{konst.}$

**8. Posledice Bernoullijeve enačbe.**

- **Torricellijev izrek:** voda izteka iz odprtine na globini $h$ pod gladino velikega odprtega rezervoarja s hitrostjo $v = \sqrt{2gh}$, enako kot pri prostem padu z višine $h$ (tlak je na gladini in v curku enak $p_0$, gladina se skoraj ne premika).
- **Venturijev merilnik:** v vodoravni zoženi cevi izmerimo razliko tlakov $\Delta p = p_1 - p_2 = \tfrac{1}{2}\rho(v_2^2 - v_1^2)$ in s kontinuitetno enačbo izračunamo pretok.
- **Dinamični vzgon:** nad ukrivljenim krilom se zrak giblje hitreje kot pod njim, zato je tlak zgoraj manjši.

*Hiter preizkus:* s kolikšno hitrostjo izteka voda iz odprtine $20\,\mathrm{m}$ pod gladino? *(Okoli $19{,}8\,\mathrm{m/s}$, kot kamen po padcu z $20\,\mathrm{m}$.)*

**9. Postopek reševanja.** (1) Izberi dve točki na isti tokovnici, kjer poznaš čim več količin. (2) Iz kontinuitetne enačbe poveži hitrosti. (3) Zapiši Bernoullijevo enačbo med točkama. (4) Reši za neznanko in preveri, ali je tlak smiseln (absolutni tlak ne more biti negativen).

## Rešeni primeri

### Primer 1 (lažji)

Potapljač se potopi $15\,\mathrm{m}$ globoko v morje z gostoto $1025\,\mathrm{kg/m^3}$. Zračni tlak nad gladino je $1{,}013 \cdot 10^5\,\mathrm{Pa}$. Kolikšna sta nadtlak in absolutni tlak na tej globini? Vzemi $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $h = 15\,\mathrm{m}$, $\rho = 1025\,\mathrm{kg/m^3}$, $p_0 = 1{,}013 \cdot 10^5\,\mathrm{Pa}$, $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** nadtlak $p - p_0$ in absolutni tlak $p$

:::formula
$p = p_0 + \rho g h$
:::

**Rešitev:**

1. Nadtlak nastane zaradi teže vode nad potapljačem: $\rho g h = 1025\,\mathrm{kg/m^3} \cdot 9{,}81\,\mathrm{m/s^2} \cdot 15\,\mathrm{m} \approx 1{,}508 \cdot 10^5\,\mathrm{Pa}$.
2. Na gladino pritiska še zrak, zato mu nadtlak prištejemo: $p = 1{,}013 \cdot 10^5\,\mathrm{Pa} + 1{,}508 \cdot 10^5\,\mathrm{Pa} \approx 2{,}52 \cdot 10^5\,\mathrm{Pa}$.
3. Odgovor: nadtlak je približno $1{,}51 \cdot 10^5\,\mathrm{Pa}$ (okoli $1{,}5\,\mathrm{bar}$), absolutni tlak pa približno $2{,}52 \cdot 10^5\,\mathrm{Pa}$, kar je dva in pol krat več kot na gladini.

### Primer 2

Voda teče po cevi z notranjim premerom $2{,}0\,\mathrm{cm}$ s hitrostjo $1{,}5\,\mathrm{m/s}$. Na koncu je šoba z notranjim premerom $1{,}0\,\mathrm{cm}$. Kolikšen je prostorninski pretok in s kolikšno hitrostjo voda izteka iz šobe?

**Podatki:** $d_1 = 2{,}0\,\mathrm{cm} = 0{,}020\,\mathrm{m}$, $v_1 = 1{,}5\,\mathrm{m/s}$, $d_2 = 1{,}0\,\mathrm{cm} = 0{,}010\,\mathrm{m}$, voda je nestisljiva
**Iščemo:** prostorninski pretok $\Phi_V$ in hitrost $v_2$

:::formula
$\Phi_V = S_1v_1$, $S = \dfrac{\pi d^2}{4}$, $S_1v_1 = S_2v_2 \Rightarrow v_2 = v_1\left(\dfrac{d_1}{d_2}\right)^2$
:::

**Rešitev:**

1. Presek cevi (premer v metrih, da dobimo $\mathrm{m^2}$): $S_1 = \pi (0{,}020\,\mathrm{m})^2/4 \approx 3{,}14 \cdot 10^{-4}\,\mathrm{m^2}$.
2. Pretok: $\Phi_V = 3{,}14 \cdot 10^{-4}\,\mathrm{m^2} \cdot 1{,}5\,\mathrm{m/s} \approx 4{,}71 \cdot 10^{-4}\,\mathrm{m^3/s} = 0{,}471\,\mathrm{L/s}$.
3. Razmerje premerov je $2$, razmerje presekov $4$, zato $v_2 = 4 \cdot 1{,}5\,\mathrm{m/s} = 6{,}0\,\mathrm{m/s}$.
4. Odgovor: pretok je približno $0{,}47\,\mathrm{L/s}$, voda pa iz šobe izteka s hitrostjo $6{,}0\,\mathrm{m/s}$.

### Primer 3 (težji)

Vodovodna cev v pritličju ima notranji premer $3{,}0\,\mathrm{cm}$, voda v njej teče s hitrostjo $0{,}80\,\mathrm{m/s}$ pri absolutnem tlaku $3{,}0 \cdot 10^5\,\mathrm{Pa}$. Cev se vzpne v drugo nadstropje, $6{,}0\,\mathrm{m}$ višje, kjer se zoži na premer $1{,}5\,\mathrm{cm}$. Kolikšna sta hitrost in tlak vode v zgornji cevi? Vodo obravnavaj kot idealno tekočino z gostoto $1000\,\mathrm{kg/m^3}$, $g = 9{,}81\,\mathrm{m/s^2}$.

**Podatki:** $d_1 = 3{,}0\,\mathrm{cm}$, $v_1 = 0{,}80\,\mathrm{m/s}$, $p_1 = 3{,}0 \cdot 10^5\,\mathrm{Pa}$, $z_2 - z_1 = 6{,}0\,\mathrm{m}$, $d_2 = 1{,}5\,\mathrm{cm}$, $\rho = 1000\,\mathrm{kg/m^3}$, $g = 9{,}81\,\mathrm{m/s^2}$
**Iščemo:** hitrost $v_2$ in tlak $p_2$

:::formula
$v_2 = v_1\left(\dfrac{d_1}{d_2}\right)^2$; $p_1 + \tfrac{1}{2}\rho v_1^2 + \rho g z_1 = p_2 + \tfrac{1}{2}\rho v_2^2 + \rho g z_2$
:::

**Rešitev:**

1. Kontinuiteta (presek je štirikrat manjši, pretok pa enak): $v_2 = 0{,}80\,\mathrm{m/s} \cdot (3{,}0/1{,}5)^2 = 3{,}2\,\mathrm{m/s}$.
2. Iz Bernoullijeve enačbe: $p_2 = p_1 + \tfrac{1}{2}\rho(v_1^2 - v_2^2) - \rho g(z_2 - z_1)$.
3. Kinetični člen je negativen, ker voda zgoraj teče hitreje: $\tfrac{1}{2} \cdot 1000 \cdot (0{,}64 - 10{,}24)\,\mathrm{Pa} = -4800\,\mathrm{Pa}$.
4. Višinski člen (delo za dvig vode za $6{,}0\,\mathrm{m}$ na enoto prostornine): $1000 \cdot 9{,}81 \cdot 6{,}0\,\mathrm{Pa} = 58\,860\,\mathrm{Pa}$.
5. $p_2 = 300\,000\,\mathrm{Pa} - 4800\,\mathrm{Pa} - 58\,860\,\mathrm{Pa} \approx 2{,}36 \cdot 10^5\,\mathrm{Pa}$.
6. Odgovor: v zgornji cevi voda teče s hitrostjo $3{,}2\,\mathrm{m/s}$ pri tlaku približno $2{,}36 \cdot 10^5\,\mathrm{Pa}$; tlak se zmanjša predvsem zaradi višinske razlike, manj zaradi večje hitrosti.

### Primer 4 – zdaj ti

V rastlinjaku marsovske baze stoji velik odprt rezervoar za zalivanje. Na dnu, $1{,}8\,\mathrm{m}$ pod gladino, je majhna odprtina s premerom $1{,}0\,\mathrm{cm}$. Težni pospešek na Marsu je $3{,}71\,\mathrm{m/s^2}$, zrak v bazi ima povsod enak tlak. S kolikšno hitrostjo in s kolikšnim pretokom izteka voda?

**Podatki:** $h = 1{,}8\,\mathrm{m}$, $d = 1{,}0\,\mathrm{cm} = 0{,}010\,\mathrm{m}$, $g_M = 3{,}71\,\mathrm{m/s^2}$, rezervoar je velik in odprt, tlak zraka nad gladino in ob curku je enak
**Iščemo:** hitrost iztekanja $v$ in prostorninski pretok $\Phi_V$

:::formula
$v = \sqrt{2g_Mh}$, $S = \dfrac{\pi d^2}{4}$, $\Phi_V = Sv$
:::

**Rešitev:**

1. Velja Torricellijev izrek, ker se zračni tlak na gladini in v curku pokrajša, gladina velikega rezervoarja pa se skoraj ne premika.
2. Hitrost: $v = \sqrt{2 \cdot 3{,}71\,\mathrm{m/s^2} \cdot 1{,}8\,\mathrm{m}} \approx 3{,}65\,\mathrm{m/s}$.
3. Presek odprtine (premer v metrih): $S = \pi(0{,}010\,\mathrm{m})^2/4 \approx 7{,}85 \cdot 10^{-5}\,\mathrm{m^2}$.
4. Pretok izračunaj sam, nato preveri:

:::premisli
Kolikšen je pretok v litrih na sekundo? Kolikokrat hitreje bi ista voda iztekala na Zemlji?
---
$\Phi_V = 7{,}85 \cdot 10^{-5}\,\mathrm{m^2} \cdot 3{,}65\,\mathrm{m/s} \approx 2{,}87 \cdot 10^{-4}\,\mathrm{m^3/s} \approx 0{,}29\,\mathrm{L/s}$. Ker je $v \propto \sqrt{g}$, bi bila hitrost na Zemlji $\sqrt{9{,}81/3{,}71} \approx 1{,}63$-krat večja, okoli $5{,}9\,\mathrm{m/s}$.
:::

## Pogoste napake

- **Hitrost sorazmerna s premerom.** Pri zožitvi na polovico premera se presek zmanjša na četrtino, hitrost pa se **početveri**, ne podvoji. Premere pred računanjem ploščin pretvori v metre ($1\,\mathrm{cm^2} = 10^{-4}\,\mathrm{m^2}$).
- **Mešanje absolutnega tlaka in nadtlaka.** V Bernoullijevi enačbi sme biti na obeh straneh le ena vrsta tlaka. Pri odprtih posodah in curkih v zrak je tlak na prostih površinah $p_0$ in se pokrajša.
- **Večja hitrost, večji tlak.** Pogosta intuicija je napačna: v ožjem delu vodoravne cevi je hitrost večja, tlak pa **manjši**. Curek iz šobe je hiter, ker ga poganja razlika tlakov.
- **Bernoulli za viskozen tok v dolgi cevi.** V tankih ceveh (kapilare, injekcijske igle) in pri zelo viskoznih tekočinah prevladajo izgube zaradi notranjega trenja; idealni model tam ne zadošča.
- **Vzgon odvisen od gostote telesa.** Vzgon je odvisen od gostote **tekočine** in potopljene prostornine, ne od snovi telesa. Železna in lesena kocka enake prostornine, obe popolnoma potopljeni, imata enak vzgon.

## Povzetek

- Hidrostatika: $p = p_0 + \rho g h$; Pascalov zakon; vzgon $F_{vz} = \rho_{\text{tek}} g V_{\text{pot}}$.
- Pretok: $\Phi_V = Sv$, $\Phi_m = \rho S v$.
- Kontinuitetna enačba (ohranitev mase): $S_1v_1 = S_2v_2$ za nestisljivo tekočino; $v \propto 1/d^2$.
- Bernoullijeva enačba (ohranitev energije, idealna tekočina, stacionaren tok, vzdolž tokovnice): $p + \tfrac{1}{2}\rho v^2 + \rho g z = \text{konst.}$
- Posledice: Torricelli $v = \sqrt{2gh}$; v zožitvi večja hitrost in manjši tlak (Venturi).

## Drugače: Na sliki

Vodoravna cev z zožitvijo in tremi navpičnimi cevkami (manometri):

```
   |#|          |#|          |#|      <- višina vode v cevkah = tlak
   |#|          | |          |#|
   |#|          | |          |#|
 ==|#|==========| |==========|#|==
   ->  v1      ---> v2       ->  v1
 ==================================
   široko       ozko         široko
```

V ozkem delu so tokovnice gostejše (hitrost večja), voda v cevki pa se dvigne manj (tlak manjši). Ko se cev spet razširi, se hitrost zmanjša in tlak naraste, idealno spet na začetno vrednost.

Pri hidrostatiki si predstavljaj stolpec vode nad vsakim kvadratnim metrom dna: v globini $10\,\mathrm{m}$ tehta ta stolpec okoli $98\,\mathrm{kN}$, kar je približno toliko kot ves zračni stolpec nad nami. Zato se pri potapljanju tlak na vsakih $10\,\mathrm{m}$ poveča za približno $1\,\mathrm{bar}$.

## Drugače: Iz vsakdanjega življenja

**Krvni obtok.** Aorta s polmerom okoli $1{,}0\,\mathrm{cm}$ in povprečno hitrostjo krvi $0{,}30\,\mathrm{m/s}$ prenese okoli $9{,}4 \cdot 10^{-5}\,\mathrm{m^3/s}$, kar je približno $5{,}7\,\mathrm{L}$ na minuto. Kapilare so posamezno zelo tanke, a jih je toliko, da je njihov skupni presek nekaj stokrat večji od preseka aorte. Po kontinuitetni enačbi kri v njih teče zelo počasi, kar omogoča izmenjavo snovi.

**Krvni tlak in drža.** Pri stoječem človeku je razlika hidrostatskega tlaka krvi med srcem in stopali $\rho g h \approx 1060 \cdot 9{,}81 \cdot 1{,}3\,\mathrm{Pa} \approx 13{,}5\,\mathrm{kPa}$, kar je skoraj toliko kot sistolični tlak ($120\,\mathrm{mmHg} \approx 16\,\mathrm{kPa}$). Zato krvni tlak merimo na nadlakti, v višini srca.

**Merjenje pretoka v obratu.** V kemijskem inženirstvu z Venturijevimi cevmi in zaslonkami merijo pretok kapljevin in plinov: izmerijo razliko tlakov in iz Bernoullijeve in kontinuitetne enačbe izračunajo pretok, popravljen z empiričnim koeficientom za izgube.

**Krilo in streha.** Če nad krilom teče zrak s hitrostjo $70\,\mathrm{m/s}$ in pod njim s $60\,\mathrm{m/s}$, je razlika tlakov $\tfrac{1}{2} \cdot 1{,}2 \cdot (70^2 - 60^2)\,\mathrm{Pa} = 780\,\mathrm{Pa}$, kar na $20\,\mathrm{m^2}$ krila da silo okoli $15{,}6\,\mathrm{kN}$. Iz istega razloga veter nad ravno streho zmanjša tlak nad njo in jo lahko dvigne.

**Razpršilci.** Hiter tok zraka čez vrh cevke zniža tlak, zato atmosferski tlak potisne kapljevino iz posode navzgor in jo razprši (razpršilci parfuma, nekdanji uplinjači, laboratorijske vodne črpalke).

## Drugače: Korak za korakom s številkami

Venturijev merilnik: vodoravna cev s premerom $5{,}0\,\mathrm{cm}$ se zoži na $2{,}5\,\mathrm{cm}$. Razlika tlakov med širokim in ozkim delom je $3000\,\mathrm{Pa}$. Kolikšen je pretok vode?

1. **Razmerje hitrosti:** premer se razpolovi, zato $v_2 = 4v_1$.
2. **Bernoulli (vodoravno):** $\Delta p = \tfrac{1}{2}\rho(v_2^2 - v_1^2) = \tfrac{1}{2}\rho(16 - 1)v_1^2 = 7{,}5\,\rho v_1^2$.
3. **Hitrost v širokem delu:** $v_1 = \sqrt{3000/(7{,}5 \cdot 1000)}\,\mathrm{m/s} = \sqrt{0{,}40}\,\mathrm{m/s} \approx 0{,}632\,\mathrm{m/s}$.
4. **Hitrost v ozkem delu:** $v_2 = 4 \cdot 0{,}632\,\mathrm{m/s} \approx 2{,}53\,\mathrm{m/s}$.
5. **Presek širokega dela:** $S_1 = \pi(0{,}025\,\mathrm{m})^2 \approx 1{,}96 \cdot 10^{-3}\,\mathrm{m^2}$.
6. **Pretok:** $\Phi_V = S_1v_1 \approx 1{,}96 \cdot 10^{-3} \cdot 0{,}632\,\mathrm{m^3/s} \approx 1{,}24 \cdot 10^{-3}\,\mathrm{m^3/s} = 1{,}24\,\mathrm{L/s}$.

## Drugače: Bolj natančno

**Hidrostatska enačba.** Opazujmo tanek vodoraven sloj tekočine s ploščino $S$ in debelino $\mathrm{d}z$. Ravnovesje sil v navpični smeri da $p(z)S - p(z + \mathrm{d}z)S - \rho g S\,\mathrm{d}z = 0$, torej

$$\frac{\mathrm{d}p}{\mathrm{d}z} = -\rho g.$$

Za stalno $\rho$ integracija da $p = p_0 + \rho g h$. Za idealni plin pri stalni temperaturi je $\rho = pM/(RT)$ in rešitev je barometrska enačba $p(z) = p_0\,e^{-Mgz/(RT)}$.

**Izpeljava Bernoullijeve enačbe.** Opazujmo del tekočine v tokovni cevi med presekoma 1 in 2. V kratkem času $\mathrm{d}t$ se prednja meja premakne za $v_2\,\mathrm{d}t$, zadnja za $v_1\,\mathrm{d}t$; zaradi nestisljivosti je premaknjena prostornina $\mathrm{d}V = S_1v_1\,\mathrm{d}t = S_2v_2\,\mathrm{d}t$ na obeh koncih enaka. Tlačne sile opravijo delo $(p_1 - p_2)\,\mathrm{d}V$. Ker je tok stacionaren, se spremeni le energija na koncih: kinetična za $\tfrac{1}{2}\rho\,\mathrm{d}V(v_2^2 - v_1^2)$, potencialna za $\rho\,\mathrm{d}V\,g(z_2 - z_1)$. Izrek o kinetični energiji (delo tlačnih sil in teže je enako spremembi kinetične energije) da po deljenju z $\mathrm{d}V$ Bernoullijevo enačbo.

**Kontinuitetna enačba v diferencialni obliki.** Splošno za stisljivo tekočino velja $\frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\vec{v}) = 0$; za nestisljivo $\nabla\cdot\vec{v} = 0$. Bernoullijeva enačba sledi iz Eulerjeve enačbe $\rho\left(\frac{\partial\vec{v}}{\partial t} + (\vec{v}\cdot\nabla)\vec{v}\right) = -\nabla p + \rho\vec{g}$ za stacionaren tok, integrirane vzdolž tokovnice.

**Meje modela.** Realne tekočine so viskozne. V tanki cevi s polmerom $r$ in dolžino $l$ je pri laminarnem toku pretok $\Phi_V = \frac{\pi r^4\Delta p}{8\eta l}$ (Poiseuillov zakon), kjer je $\eta$ viskoznost. Ali je tok laminaren ali turbulenten, pove Reynoldsovo število $Re = \rho v d/\eta$; v okroglih ceveh je tok običajno laminaren pri $Re \lesssim 2000$.

## Preveri se

? Kolikšen je nadtlak v vodi ($\rho = 1000\,\mathrm{kg/m^3}$) na globini $10\,\mathrm{m}$ ($g = 9{,}81\,\mathrm{m/s^2}$)?
- $9{,}81\,\mathrm{kPa}$
~ Za faktor $10$ premalo: to je nadtlak na globini $1\,\mathrm{m}$. Preveri, ali si globino res vstavil v metrih.
+ $98{,}1\,\mathrm{kPa}$
- $199\,\mathrm{kPa}$
~ To je absolutni tlak: nadtlaku si prištel še zračni tlak $p_0$, vprašanje pa sprašuje le po $\rho g h$.
> $\rho g h = 1000 \cdot 9{,}81 \cdot 10\,\mathrm{Pa} = 98{,}1\,\mathrm{kPa}$. $199\,\mathrm{kPa}$ je absolutni tlak (nadtlak, prištet zračnemu tlaku), ne nadtlak.

? Cev se zoži na polovico premera. Kako se spremeni hitrost idealne tekočine?
- Podvoji se.
~ Hitrost si povezal s premerom namesto s ploščino preseka; ta pade na četrtino, ker je $S \propto d^2$.
+ Poveča se za faktor $4$.
- Zmanjša se na polovico.
~ Ožja cev toka ne zavira: skozi manjši presek mora v sekundi steči enaka prostornina, zato se tok pospeši.
> Iz $S_1v_1 = S_2v_2$ in $S \propto d^2$ sledi $v_2/v_1 = (d_1/d_2)^2 = 4$.

? Lesena kocka z gostoto $600\,\mathrm{kg/m^3}$ plava na vodi ($1000\,\mathrm{kg/m^3}$). Kolikšen delež njene prostornine je pod gladino?
- $40\,\%$
~ To je delež nad gladino, $1 - 0{,}60$; vprašanje sprašuje po potopljenem delu.
- $100\,\%$
~ Popolnoma potopljena bi bila le kocka, gostejša od vode; les je redkejši, zato plava in del gleda iz vode.
+ $60\,\%$
> V ravnovesju je vzgon enak teži: $\rho_v g V_{\text{pot}} = \rho_l g V$, torej $V_{\text{pot}}/V = 600/1000 = 0{,}60$. $40\,\%$ je delež nad gladino.

? S kolikšno hitrostjo izteka voda iz majhne odprtine $5{,}0\,\mathrm{m}$ pod gladino velikega odprtega rezervoarja ($g = 9{,}81\,\mathrm{m/s^2}$)?
- $49\,\mathrm{m/s}$
~ Izračunal si $gh \approx 49\,\mathrm{m^2/s^2}$ in pozabil faktor $2$ ter koren; enota tega rezultata ni $\mathrm{m/s}$.
+ $9{,}9\,\mathrm{m/s}$
- $7{,}0\,\mathrm{m/s}$
~ Izpustil si faktor $2$ pod korenom: $\sqrt{gh} \approx 7{,}0\,\mathrm{m/s}$. Hitrost je enaka kot pri prostem padu, $v^2 = 2gh$.
> Po Torricelliju je $v = \sqrt{2gh} = \sqrt{2 \cdot 9{,}81 \cdot 5{,}0}\,\mathrm{m/s} \approx 9{,}9\,\mathrm{m/s}$. $7{,}0\,\mathrm{m/s}$ dobiš, če izpustiš faktor $2$ pod korenom.

? Vodoravna cev je široka, nato ozka, nato spet enako široka. Kateri opis se ujema s tokom idealne tekočine (široko – ozko – široko)?
- Hitrost: majhna – velika – majhna; tlak: majhen – velik – majhen.
~ To je intuicija »hitreje pomeni večji tlak«. Tekočino v zožitev pospeši prav razlika tlakov, zato je tlak tam manjši.
- Hitrost: velika – majhna – velika; tlak: velik – majhen – velik.
~ Ožji del ni »zamašek«, ki tok upočasni: po kontinuitetni enačbi je hitrost tam večja, ker je presek manjši.
+ Hitrost: majhna – velika – majhna; tlak: velik – majhen – velik.
> Iz $S_1v_1 = S_2v_2$ je hitrost v ozkem delu največja, iz Bernoullijeve enačbe na isti višini pa je tam tlak najmanjši. Ko se cev razširi, se hitrost in tlak vrneta na začetni vrednosti.

:::simboli
p | tlak | p = p_0 + \rho g h | Pa | v Bernoullijevi enačbi tlak v tekočini
p_0 | tlak na gladini (zračni tlak) | | Pa | normalni zračni tlak 1,013 · 10⁵ Pa
p_1, p_2 | tlak v prerezih 1 in 2 | | Pa
h | globina pod gladino | | m
\rho | gostota tekočine | \rho = \frac{m}{V} | kg/m^3 | voda: 1000 kg/m³
\rho_1, \rho_2 | gostota tekočine v prerezih 1 in 2 | | kg/m^3 | pri nestisljivi tekočini enaki
\rho_{\text{tek}} | gostota tekočine | | kg/m^3
g | težni pospešek | | m/s^2 | 9,81 m/s²
g_M | težni pospešek na Marsu | | m/s^2 | 3,71 m/s²
F_{vz} | sila vzgona | F_{vz} = \rho_{\text{tek}}\,g\,V_{\text{pot}} | N
V_{\text{pot}} | prostornina potopljenega dela telesa | | m^3
S | ploščina preseka cevi | S = \frac{\pi d^2}{4} | m^2
S_1, S_2 | ploščini presekov 1 in 2 | | m^2
v | hitrost tekočine | | m/s
v_1, v_2 | hitrost tekočine v prerezih 1 in 2 | S_1v_1 = S_2v_2 | m/s
z | višina nad izbrano ravnino | | m
z_1, z_2 | višina prerezov 1 in 2 | | m
\Phi_V | prostorninski pretok | \Phi_V = Sv | m^3/s
d | notranji premer cevi | | m
d_1, d_2 | premera cevi v prerezih 1 in 2 | | m
:::
