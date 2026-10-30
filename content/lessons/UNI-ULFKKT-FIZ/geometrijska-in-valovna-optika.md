---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Pri gastroskopiji zdravnik skozi upogljivo cevko vidi steno želodca, čeprav cevka med potjo večkrat zavije. Ko se v bazenu potopiš in pogledaš poševno navzgor proti gladini, ne vidiš neba, temveč srebrno ogledalo, v katerem se zrcali dno. Prvo je medicinska naprava, drugo igra na počitnicah, a za obema stoji isti pojav. Svetloba, ki iz gostejše snovi pod dovolj poševnim kotom zadene mejo z redkejšo, ne more ven in se v celoti odbije: to je **totalni odboj**.

Svetloba je glavni vir informacij o svetu okoli nas in eno najpomembnejših orodij v laboratoriju. Mikroskop, spektrofotometer, refraktometer, optično vlakno, laser in fotoaparat delujejo na podlagi nekaj preprostih zakonov optike. Biolog z mikroskopom opazuje celice, kemik z refraktometrom meri koncentracijo sladkorja, inženir po optičnem vlaknu prenaša podatke, farmacevt s polarimetrom in spektrometrom preverja čistost zdravila.

Optiko obravnavamo na dva načina:

- **Geometrijska optika** opisuje svetlobo kot žarke, ki se širijo premočrtno, se odbijajo in lomijo. Z njo razložimo leče, prizme, totalni odboj in nastanek slike. Velja, kadar so ovire in odprtine veliko večje od valovne dolžine.
- **Valovna optika** upošteva, da je svetloba elektromagnetno valovanje z valovno dolžino nekaj sto nanometrov. Z njo razložimo **interferenco** (barve milnih mehurčkov, uklonska mrežica v spektrometru) in **uklon**, ki postavlja mejo, kako drobne podrobnosti lahko vidimo z mikroskopom.

## Razlaga

Mikavna predstava je, da je svetloba le snop ravnih žarkov in da je ločljivost mikroskopa omejena samo s tem, kako dobro so brušene leče: z dovolj popolnim steklom bi videli poljubno drobne podrobnosti. Prvi del te predstave je zelo uporaben in z njim razložimo lom, totalni odboj in leče. Drugi del je napačen; popravi ga šele valovna narava svetlobe.

### Žarki: lom, odboj in leče

**1. Lomni količnik.** Svetloba ima v praznem prostoru hitrost $c_0 = 3{,}00 \cdot 10^8\,\mathrm{m/s}$, v snovi pa manjšo hitrost $c$. **Lomni količnik** snovi je

$$n = \frac{c_0}{c} \ge 1.$$

Za zrak je $n \approx 1{,}00$, za vodo $1{,}33$, za navadno steklo okoli $1{,}5$. Pri prehodu v drugo snov se frekvenca ne spremeni, valovna dolžina pa je v snovi $\lambda = \lambda_0/n$.

:::premisli
Rdeča svetloba z valovno dolžino $650\,\mathrm{nm}$ preide iz zraka v vodo. Ali je v vodi še vedno rdeča?
---
Da. Barvo določa frekvenca, ta pa se pri prehodu ne spremeni. Valovna dolžina se v vodi sicer skrajša na $650/1{,}33 \approx 489\,\mathrm{nm}$, a to ni »modra« svetloba, saj ima nespremenjeno frekvenco rdeče.
:::

**2. Odbojni in lomni zakon.** Kote merimo od **vpadne pravokotnice** (normale na mejno ploskev). Pri odboju je odbojni kot enak vpadnemu. Pri lomu velja **lomni zakon** (Snellov zakon):

$$n_1\sin\alpha = n_2\sin\beta.$$

Pri prehodu v optično gostejšo snov ($n_2 > n_1$) se žarek lomi **k pravokotnici**, pri prehodu v redkejšo pa **od nje**.

**3. Totalni odboj.** Pri prehodu iz gostejše v redkejšo snov lomni kot doseže $90^\circ$ pri **mejnem kotu**

$$\sin\alpha_m = \frac{n_2}{n_1}.$$

Pri večjih vpadnih kotih se svetloba v celoti odbije. Totalni odboj ni odboj od posebej gladke ali zrcalne ploskve: zgodi se na povsem prozorni meji, a le pri prehodu iz optično gostejše v optično redkejšo snov. Na tem delujejo optična vlakna, prizme v daljnogledih in refraktometri.

**4. Disperzija.** Lomni količnik je odvisen od valovne dolžine; v steklu je za modro svetlobo večji kot za rdečo. Zato prizma razkloni belo svetlobo v spekter in zato nastane mavrica.

**5. Tanke leče.** Zbiralna leča zbere vzporedne žarke v **gorišču** na razdalji $f$ (**goriščna razdalja**) za lečo; razpršilna leča jih razprši, kot da prihajajo iz navideznega gorišča pred njo, zato ji pripišemo $f < 0$. Če je predmet na razdalji $a$ pred lečo, nastane slika na razdalji $b$ za njo, pri čemer velja **enačba leče**

$$\frac{1}{a} + \frac{1}{b} = \frac{1}{f}.$$

Če dobimo $b > 0$, je slika **realna** (lahko jo ujamemo na zaslon) in obrnjena; če je $b < 0$, je slika **navidezna**, pokončna in na isti strani kot predmet. **Povečava** je

$$M = \frac{y'}{y} = -\frac{b}{a};$$

negativen predznak pomeni obrnjeno sliko. **Lomnost** leče je $1/f$, enota je **dioptrija**, $1\,\mathrm{dpt} = 1\,\mathrm{m^{-1}}$. Lomnosti tankih leč, ki so tesno skupaj, se seštejejo. Goriščno razdaljo določajo krivinski radiji ploskev in lomni količnik: $1/f = (n - 1)(1/r_1 + 1/r_2)$ za izbočeni ploskvi v zraku (izdolbeno ploskev vzamemo z negativnim radijem).

### Kjer žarki ne zadoščajo: svetloba kot valovanje

Žarkovna slika ne pove, zakaj se milni mehurček obarva ali zakaj dva snopa svetlobe skupaj lahko dasta temo. Za to potrebujemo valovanje.

**6. Svetloba kot valovanje: interferenca.** Ko se srečata dve **koherentni** valovanji (z enako frekvenco in stalno fazno razliko), se njuni polji seštejeta. Kjer je razlika poti $\Delta$ celoštevilski večkratnik valovne dolžine, je **ojačitev**, kjer je liha polovica valovne dolžine, je **oslabitev**:

$$\Delta = m\lambda \;\;(\text{ojačitev}), \qquad \Delta = \left(m + \tfrac{1}{2}\right)\lambda \;\;(\text{oslabitev}), \qquad m = 0, \pm1, \pm2, \dots$$

**7. Dve reži (Youngov poskus).** Reži na razdalji $d$ osvetlimo z enobarvno svetlobo. Pod kotom $\theta$ je razlika poti $d\sin\theta$, zato so svetle proge pri

$$d\sin\theta = m\lambda.$$

Na zaslonu na razdalji $L \gg d$ so proge enakomerno razmaknjene za $\Delta y = \lambda L/d$.

**8. Uklonska mrežica.** Mrežica ima veliko enako razmaknjenih rež s **konstanto mrežice** $d$ (npr. $600$ rež na milimeter pomeni $d = 1{,}67\,\mu\mathrm{m}$). Ojačitve so pri istih kotih kot pri dveh režah, $d\sin\theta = m\lambda$, a so zelo ozke in svetle. Ker je kot ojačitve odvisen od $\lambda$, mrežica razkloni svetlobo v spekter, zato je srce mnogih spektrometrov. Največji red je $m \le d/\lambda$, ker je $\sin\theta \le 1$.

**9. Interferenca na tankih plasteh.** Svetloba, odbita na zgornji in spodnji ploskvi tanke plasti z debelino $h$ in lomnim količnikom $n$, interferira. Pri pravokotnem vpadu je razlika poti $2nh$, pri odboju na optično gostejši snovi pa se faza dodatno spremeni za pol valovne dolžine. Od tod barve milnih mehurčkov in oljnih madežev ter protiodbojne plasti na lečah.

### Uklon: meja, ki je ne odpravi nobena leča

Zdaj lahko popravimo mikavno predstavo z začetka. Tudi popolna leča ima končno odprtino, svetloba pa se na vsaki odprtini ukloni.

**10. Uklon.** Valovanje se za oviro ali odprtino ukloni, torej zaide tudi v geometrijsko senco. Pri reži s širino $D$ so temne proge pri $D\sin\theta = m\lambda$ ($m = \pm1, \pm2, \dots$); osrednja svetla proga ima kotno polširino $\sin\theta \approx \lambda/D$. Pri okrogli odprtini s premerom $D$ je prvi temni kolobar pri $\sin\theta \approx 1{,}22\,\lambda/D$. Ta kot je **mejna ločljivost**: dveh točk, ki ju vidimo pod manjšim kotom, z napravo ne moremo ločiti.

:::premisli
Ali loči mikroskop drobnejše podrobnosti z modro ali z rdečo svetlobo? Zakaj?
---
Z modro. Mejni kot je sorazmeren z $\lambda/D$, zato krajša valovna dolžina pomeni manjši mejni kot in ločitev bližjih točk. Iz istega razloga elektronski mikroskop z mnogo krajšo valovno dolžino loči še veliko drobnejše podrobnosti.
:::

## Rešeni primeri

### Primer 1 (lažji)

Laserski žarek pada iz zraka na vodno gladino pod kotom $40^\circ$ glede na vpadno pravokotnico. Pod kolikšnim kotom se lomi? Kolikšen je mejni kot za totalni odboj, ko svetloba prehaja iz vode v zrak? Lomni količnik vode je $1{,}33$, zraka $1{,}00$.

**Podatki:** $\alpha = 40^\circ$, $n_1 = 1{,}00$ (zrak), $n_2 = 1{,}33$ (voda)
**Iščemo:** lomni kot $\beta$ in mejni kot $\alpha_m$ pri prehodu iz vode v zrak

:::formula
$n_1\sin\alpha = n_2\sin\beta$, $\sin\alpha_m = n_\mathrm{zrak}/n_\mathrm{voda}$
:::

**Rešitev:**

1. Iz lomnega zakona: $\sin\beta = 1{,}00 \cdot \sin 40^\circ/1{,}33 = 0{,}643/1{,}33 \approx 0{,}483$.
2. $\beta = \arcsin 0{,}483 \approx 28{,}9^\circ$. Kot je manjši od vpadnega, ker se žarek lomi k pravokotnici.
3. Mejni kot: $\sin\alpha_m = 1{,}00/1{,}33 \approx 0{,}752$, torej $\alpha_m \approx 48{,}8^\circ$; pri tem vpadnem kotu je lomni kot $90^\circ$, $\sin 90^\circ = 1$.
4. Odgovor: žarek se v vodi lomi pod kotom približno $28{,}9^\circ$; pri prehodu iz vode v zrak pride do totalnega odboja pri vpadnih kotih nad približno $48{,}8^\circ$.

### Primer 2

Na optični klopi v praktikumu postavimo predmet, visok $2{,}0\,\mathrm{cm}$, $15\,\mathrm{cm}$ pred zbiralno lečo z goriščno razdaljo $10\,\mathrm{cm}$. Kje nastane slika, kolikšna je povečava in kakšna je slika? Kaj se spremeni, če predmet premaknemo na razdaljo $6{,}0\,\mathrm{cm}$ pred lečo?

**Podatki:** $y = 2{,}0\,\mathrm{cm}$, $a_1 = 15\,\mathrm{cm}$, $a_2 = 6{,}0\,\mathrm{cm}$, $f = 10\,\mathrm{cm}$ (zbiralna leča)
**Iščemo:** razdaljo slike $b$, povečavo $M$, velikost slike $y'$ in vrsto slike za obe legi predmeta

:::formula
$\dfrac{1}{a} + \dfrac{1}{b} = \dfrac{1}{f}$, $M = -\dfrac{b}{a}$, $y' = My$
:::

**Rešitev:**

1. Prva lega, iz enačbe leče: $1/b = 1/10 - 1/15 = 1/30\,\mathrm{cm^{-1}}$, torej $b = 30\,\mathrm{cm}$; slika je za lečo, ker je predmet dlje od gorišča.
2. $M = -30/15 = -2{,}0$, $y' = -2{,}0 \cdot 2{,}0\,\mathrm{cm} = -4{,}0\,\mathrm{cm}$. Slika je realna, obrnjena (negativna povečava) in dvakrat povečana.
3. Druga lega: $1/b = 1/10 - 1/6{,}0 = -1/15\,\mathrm{cm^{-1}}$, torej $b = -15\,\mathrm{cm}$; $b$ je negativen, ker je predmet znotraj goriščne razdalje.
4. $M = -(-15)/6{,}0 = 2{,}5$, $y' = 5{,}0\,\mathrm{cm}$. Slika je navidezna, pokončna, $2{,}5$-krat povečana in leži $15\,\mathrm{cm}$ pred lečo, na strani predmeta. Tako deluje lupa.
5. Odgovor: v prvem primeru nastane realna obrnjena slika $30\,\mathrm{cm}$ za lečo, visoka $4{,}0\,\mathrm{cm}$; v drugem navidezna pokončna slika $15\,\mathrm{cm}$ pred lečo, visoka $5{,}0\,\mathrm{cm}$.

### Primer 3 (težji)

Zeleni laser z valovno dolžino $532\,\mathrm{nm}$ pravokotno osvetli uklonsko mrežico s $600$ režami na milimeter. Zaslon je $1{,}00\,\mathrm{m}$ za mrežico in vzporeden z njo. Pod kolikšnima kotoma sta ojačitvi prvega in drugega reda in kako daleč od osrednje pege sta na zaslonu? Koliko redov lahko največ opazimo na vsako stran?

**Podatki:** $\lambda = 532\,\mathrm{nm} = 5{,}32 \cdot 10^{-7}\,\mathrm{m}$, $600$ rež na $\mathrm{mm}$, $L = 1{,}00\,\mathrm{m}$, pravokoten vpad
**Iščemo:** kota $\theta_1$, $\theta_2$, odmika $y_1$, $y_2$ na zaslonu, največji red $m_{\max}$

:::formula
$d\sin\theta_m = m\lambda$, $y_m = L\tan\theta_m$, $m_{\max} \le d/\lambda$
:::

**Rešitev:**

1. Konstanta mrežice: $d = 1\,\mathrm{mm}/600 \approx 1{,}667 \cdot 10^{-6}\,\mathrm{m}$, ker je na milimetru $600$ enako razmaknjenih rež.
2. Prvi red: $\sin\theta_1 = 5{,}32 \cdot 10^{-7}/1{,}667 \cdot 10^{-6} = 0{,}319$, $\theta_1 \approx 18{,}6^\circ$.
3. Drugi red: $\sin\theta_2 = 0{,}638$, $\theta_2 \approx 39{,}7^\circ$; sinus je dvakrat večji, ker je $m = 2$, kot sam pa ni dvakrat večji.
4. Odmika: $y_1 = 1{,}00\,\mathrm{m} \cdot \tan 18{,}6^\circ \approx 0{,}337\,\mathrm{m}$, $y_2 = 1{,}00\,\mathrm{m} \cdot \tan 39{,}7^\circ \approx 0{,}829\,\mathrm{m}$. Ker kot ni majhen, približka $y = m\lambda L/d$ tu ne smemo uporabiti.
5. Največji red: $d/\lambda = 1{,}667 \cdot 10^{-6}/5{,}32 \cdot 10^{-7} \approx 3{,}13$, torej $m_{\max} = 3$ (kot $\theta_3 \approx 73{,}3^\circ$).
6. Odgovor: ojačitvi prvega in drugega reda sta pod kotoma približno $18{,}6^\circ$ in $39{,}7^\circ$, na zaslonu $33{,}7\,\mathrm{cm}$ in $82{,}9\,\mathrm{cm}$ od osrednje pege; na vsako stran opazimo največ tri rede (na dovolj velikem zaslonu).

### Primer 4 – zdaj ti

Zenica očesa ima pri dnevni svetlobi premer $3{,}0\,\mathrm{mm}$. Oko je najbolj občutljivo za svetlobo z valovno dolžino $550\,\mathrm{nm}$. Kolikšna je uklonska mejna ločljivost očesa in s kolikšne največje razdalje še ločimo dve točki, ki sta $1{,}0\,\mathrm{mm}$ narazen?

**Podatki:** $D = 3{,}0\,\mathrm{mm} = 3{,}0 \cdot 10^{-3}\,\mathrm{m}$, $\lambda = 550\,\mathrm{nm} = 5{,}50 \cdot 10^{-7}\,\mathrm{m}$, razmik točk $s = 1{,}0\,\mathrm{mm} = 1{,}0 \cdot 10^{-3}\,\mathrm{m}$
**Iščemo:** mejni kot $\theta$, največjo razdaljo $L$

:::formula
$\sin\theta \approx 1{,}22\,\lambda/D$, pri majhnih kotih $s \approx L\theta$
:::

**Rešitev:**

1. Mejni kot: $\theta \approx 1{,}22 \cdot 5{,}50 \cdot 10^{-7}/3{,}0 \cdot 10^{-3} \approx 2{,}24 \cdot 10^{-4}\,\mathrm{rad}$, ker uklon na okrogli odprtini zenice razmaže vsako točko v kolobarček.
2. Kot je tako majhen, da je $\sin\theta \approx \tan\theta \approx \theta$ v radianih, zato velja $s \approx L\theta$.
3. Izračunaj sam največjo razdaljo $L$.

:::premisli
S kolikšne razdalje še ločiš točki, ki sta $1{,}0\,\mathrm{mm}$ narazen?
---
$L = s/\theta = 1{,}0 \cdot 10^{-3}/2{,}24 \cdot 10^{-4}\,\mathrm{m} \approx 4{,}5\,\mathrm{m}$. Z večje razdalje se kolobarčka točk prekrivata in vidimo eno samo točko. V resnici je oko zaradi napak leče in gostote čepkov nekoliko slabše.
:::

## Pogoste napake

- **Kot od ploskve namesto od pravokotnice.** V lomnem zakonu sta oba kota merjena od vpadne pravokotnice. Če je dan kot med žarkom in gladino, ga najprej odštej od $90^\circ$.
- **Totalni odboj v napačni smeri.** Totalni odboj je mogoč le pri prehodu iz optično gostejše v redkejšo snov (npr. iz vode v zrak), nikoli obratno.
- **Predznaki pri lečah.** Razpršilna leča ima $f < 0$, navidezna slika $b < 0$. Kdor predznake izpusti, dobi realno sliko tam, kjer je ni.
- **Dioptrije in centimetri.** Lomnost je obratna vrednost goriščne razdalje v **metrih**: $f = 25\,\mathrm{cm}$ pomeni $4\,\mathrm{dpt}$, ne $0{,}04\,\mathrm{dpt}$.
- **Približek majhnih kotov pri mrežici.** Formula $\Delta y = \lambda L/d$ velja le, kadar je $\theta$ majhen (dve reži z velikim razmikom). Pri mrežici računaj s $\sin$ in $\tan$.
- **Uklonske ojačitve pri eni reži.** Pri eni reži pogoj $D\sin\theta = m\lambda$ da **temne** proge, pri mrežici in dveh režah pa enaka oblika pogoja da **svetle** proge.

## Povzetek

- $n = c_0/c$, $\lambda = \lambda_0/n$; lomni zakon $n_1\sin\alpha = n_2\sin\beta$; mejni kot $\sin\alpha_m = n_2/n_1$ ($n_1 > n_2$).
- Leča: $1/a + 1/b = 1/f$, $M = -b/a$; $b < 0$ navidezna slika, $f < 0$ razpršilna leča; lomnost $1/f$ v dioptrijah.
- Interferenca: ojačitev pri razliki poti $m\lambda$, oslabitev pri $(m + \tfrac{1}{2})\lambda$.
- Dve reži in mrežica: $d\sin\theta = m\lambda$; dve reži pri majhnih kotih $\Delta y = \lambda L/d$.
- Uklon na reži: temne proge pri $D\sin\theta = m\lambda$; okrogla odprtina: mejna ločljivost $\sin\theta \approx 1{,}22\lambda/D$.

## Drugače: Na sliki

Lom na meji zrak–voda (pravokotnica je navpična črta):

```
          |
   \      |        zrak  n = 1,00
     \ 40°|
       \  |
  ------\-+----------------  gladina
          |\
          | \ 28,9°    voda  n = 1,33
          |  \
```

Slika z zbiralno lečo nastane tam, kjer se sekata dva značilna žarka: žarek, vzporeden z osjo, se lomi skozi gorišče za lečo, žarek skozi središče leče pa gre naravnost. Če je predmet znotraj goriščne razdalje, se lomljena žarka razhajata; sekata se njuni podaljšavi nazaj, zato je slika navidezna.

Pri dveh režah si predstavljaj dve skupini krožnih valov, ki se širita iz rež. Kjer se srečata dva hriba, je svetlo, kjer se hrib sreča z dolino, je temno. Na zaslonu nastane vzorec enakomerno razmaknjenih svetlih in temnih prog.

## Drugače: Iz vsakdanjega življenja

**Refraktometer.** Lomni količnik raztopine narašča s koncentracijo raztopljene snovi. Ročni refraktometer meri mejni kot totalnega odboja na meji med prizmo in kapljico vzorca, skala pa je umerjena kar v masnem deležu sladkorja (stopinje Brix). Vinarji tako določijo sladkornost grozdja, laboratoriji pa čistost tekočin.

**Optično vlakno in endoskop.** Svetloba v steklenem jedru vlakna z večjim lomnim količnikom vpada na mejo s plaščem pod kotom, večjim od mejnega, zato se totalno odbija in po vlaknu potuje kilometre daleč. V medicini snop takih vlaken prenese sliko iz notranjosti telesa.

**Protiodbojne plasti.** Na leče fotoaparatov in očal nanesejo tanko plast magnezijevega fluorida ($n = 1{,}38$). Pri debelini četrt valovne dolžine v plasti, $h = \lambda_0/(4n) \approx 550\,\mathrm{nm}/(4 \cdot 1{,}38) \approx 100\,\mathrm{nm}$, se žarka, odbita na obeh ploskvah plasti, oslabita in odboj zelene svetlobe skoraj izgine.

**Meja svetlobnega mikroskopa.** Zaradi uklona svetlobni mikroskop ne loči podrobnosti, manjših od približno polovice valovne dolžine, torej okoli $0{,}2\,\mu\mathrm{m}$. Bakterije še vidimo, viruse in posamezne molekule pa ne; zanje potrebujemo elektronski mikroskop ali posebne fluorescenčne metode.

## Drugače: Korak za korakom s številkami

Rdeči laser z valovno dolžino $633\,\mathrm{nm}$ osvetli dve reži na razdalji $0{,}25\,\mathrm{mm}$. Zaslon je $2{,}0\,\mathrm{m}$ stran. Kolikšen je razmik med svetlimi progami?

1. **Podatki v enotah SI:** $\lambda = 6{,}33 \cdot 10^{-7}\,\mathrm{m}$, $d = 2{,}5 \cdot 10^{-4}\,\mathrm{m}$, $L = 2{,}0\,\mathrm{m}$.
2. **Kot prve ojačitve:** $\sin\theta_1 = \lambda/d = 2{,}53 \cdot 10^{-3}$, torej je kot zelo majhen in velja $\tan\theta \approx \sin\theta$.
3. **Razmik prog:** $\Delta y = \lambda L/d = 6{,}33 \cdot 10^{-7} \cdot 2{,}0/2{,}5 \cdot 10^{-4}\,\mathrm{m} \approx 5{,}1 \cdot 10^{-3}\,\mathrm{m}$.
4. **Preizkus smisla:** proge so nekaj milimetrov narazen, kar je dovolj, da jih vidimo s prostim očesom.
5. **Sprememba:** če reži razmaknemo na $0{,}50\,\mathrm{mm}$, se razmik prog razpolovi na približno $2{,}5\,\mathrm{mm}$; z modro svetlobo bi bile proge bliže kot z rdečo.

## Drugače: Bolj natančno

**Lomni zakon iz Fermatovega načela.** Svetloba med točkama izbere pot, za katero potrebuje najmanj časa (natančneje: pot s stacionarnim časom). Naj gre žarek iz točke $A$ na višini $h_1$ nad mejo do točke $B$ na globini $h_2$, vodoravna razdalja med njima pa je $D$. Če prečka mejo pri $x$, je čas

$$t(x) = \frac{n_1\sqrt{h_1^2 + x^2}}{c_0} + \frac{n_2\sqrt{h_2^2 + (D - x)^2}}{c_0}.$$

Pogoj $t'(x) = 0$ da $n_1\,x/\sqrt{h_1^2 + x^2} = n_2\,(D - x)/\sqrt{h_2^2 + (D - x)^2}$, kar je ravno $n_1\sin\alpha = n_2\sin\beta$.

**Jakost pri dveh režah.** Polji iz rež imata fazno razliko $\delta = 2\pi d\sin\theta/\lambda$. Vsota $E_0\cos\omega t + E_0\cos(\omega t + \delta)$ ima amplitudo $2E_0\cos(\delta/2)$, jakost pa je sorazmerna s kvadratom amplitude:

$$j(\theta) = 4j_1\cos^2\!\left(\frac{\pi d\sin\theta}{\lambda}\right).$$

Pri mrežici z $N$ režami je jakost $j \propto \sin^2(N\delta/2)/\sin^2(\delta/2)$; glavne ojačitve so $N^2$-krat svetlejše od ene reže in imajo kotno širino reda $\lambda/(Nd)$. Zato ima mrežica z več režami boljšo **ločljivost** $\lambda/\Delta\lambda = mN$.

**Uklon na reži.** Režo s širino $D$ razdelimo na dve polovici. Če je razlika poti med robovoma $D\sin\theta = \lambda$, ima vsak žarek iz zgornje polovice v spodnji partnerja s fazno razliko $\pi$, zato se vsi paroma oslabijo: dobimo prvi minimum. Natančen račun (vsota prispevkov po vsej reži) da $j(\theta) = j_0\left(\frac{\sin\beta}{\beta}\right)^2$ z $\beta = \pi D\sin\theta/\lambda$.

**Kdaj velja geometrijska optika.** Uklonski kot $\lambda/D$ je zanemarljiv, kadar je $D \gg \lambda$. Pri odprtinah in ovirah, velikih nekaj milimetrov, je uklonski kot za vidno svetlobo reda $10^{-4}\,\mathrm{rad}$ in žarki so dober model.

## Preveri se

? Kolikšen je mejni kot za totalni odboj pri prehodu svetlobe iz stekla z lomnim količnikom $1{,}50$ v zrak?
- $48{,}6^\circ$
~ To je $\arcsin 0{,}75$, mejni kot za vodo z $n \approx 1{,}33$; vzel si lomni količnik vode namesto stekla.
+ $41{,}8^\circ$
- $56{,}3^\circ$
~ To je $\arctan 1{,}50$; pri mejnem kotu velja $\sin\alpha_m = n_2/n_1$, ne tangens.
> $\sin\alpha_m = 1{,}00/1{,}50 = 0{,}667$, torej $\alpha_m \approx 41{,}8^\circ$.

? Predmet je $40\,\mathrm{cm}$ pred zbiralno lečo z goriščno razdaljo $20\,\mathrm{cm}$. Kakšna je slika?
+ Realna, obrnjena, enako velika, $40\,\mathrm{cm}$ za lečo.
- Navidezna, pokončna, dvakrat povečana, $20\,\mathrm{cm}$ pred lečo.
~ Navidezna slika nastane le, ko je predmet znotraj goriščne razdalje ($a < f$); tu je $a = 2f$.
- Realna, obrnjena, dvakrat pomanjšana, $20\,\mathrm{cm}$ za lečo.
~ Misliš, da slika nastane v gorišču; tam nastane le slika zelo oddaljenega predmeta. Enačba leče da $b = 40\,\mathrm{cm}$.
> $1/b = 1/20 - 1/40 = 1/40$, torej $b = 40\,\mathrm{cm}$ in $M = -40/40 = -1$.

? Pri poskusu z dvema režama razdaljo med režama podvojimo. Kaj se zgodi z razmikom med svetlimi progami na zaslonu?
- Podvoji se.
~ Zamenjal si sorazmernost: pri večjem razmiku rež je ista razlika poti $\lambda$ dosežena že pri manjšem kotu, zato so proge bliže.
- Ostane enak.
~ Razlika poti $d\sin\theta$ je odvisna od razmika rež, zato se spremenijo tudi koti ojačitev.
+ Razpolovi se.
> $\Delta y = \lambda L/d$ je obratno sorazmeren z $d$.

? Kolikšna je lomnost zbiralne leče z goriščno razdaljo $25\,\mathrm{cm}$?
- $0{,}04\,\mathrm{dpt}$
~ To je $1/25$ s centimetri; dioptrija je $\mathrm{m^{-1}}$, zato mora biti $f$ v metrih.
- $25\,\mathrm{dpt}$
~ Lomnost ni goriščna razdalja, temveč njena obratna vrednost v metrih.
+ $4\,\mathrm{dpt}$
> Lomnost je $1/f$ z $f$ v metrih: $1/0{,}25\,\mathrm{m} = 4\,\mathrm{m^{-1}} = 4\,\mathrm{dpt}$.

? Pri katerem prehodu svetlobe je mogoč totalni odboj?
- Iz zraka v steklo
~ Pri prehodu v optično gostejšo snov se žarek lomi k pravokotnici, zato je lomni kot vedno manjši od $90^\circ$ in lomljeni žarek vedno obstaja.
+ Iz vode v zrak
- Pri vsakem prehodu, če je vpadni kot dovolj velik
~ Misliš, da dovolj velik vpadni kot vedno zadošča; mejni kot obstaja le, če je $n_2/n_1 < 1$; pri prehodu v gostejšo snov enačba $\sin\alpha_m = n_2/n_1$ nima rešitve.
> Totalni odboj je mogoč le pri prehodu iz optično gostejše v redkejšo snov, tu pri vpadnih kotih nad $48{,}8^\circ$.

:::simboli
n | lomni količnik snovi | n = \frac{c_0}{c} | – | zrak 1,00, voda 1,33, steklo okoli 1,5
n_1 | lomni količnik snovi, iz katere svetloba prihaja | | –
n_2 | lomni količnik snovi, v katero svetloba prehaja | | –
n_\mathrm{zrak} | lomni količnik zraka | | – | 1,00
n_\mathrm{voda} | lomni količnik vode | | – | 1,33
c_0 | hitrost svetlobe v praznem prostoru | | m/s | 3,00 · 10⁸ m/s
c | hitrost svetlobe v snovi | c = \frac{c_0}{n} | m/s
\alpha | vpadni kot | | ° | merjen od pravokotnice na mejo
\beta | lomni kot | | ° | merjen od pravokotnice na mejo
\alpha_m | mejni kot totalnega odboja | \sin\alpha_m = \frac{n_2}{n_1} | ° | le pri prehodu v optično redkejšo snov
a | razdalja predmeta od leče | | m
b | razdalja slike od leče | | m | b < 0: navidezna slika
f | goriščna razdalja leče | | m | razpršilna leča: f < 0
M | povečava slike | M = \frac{y'}{y} = -\frac{b}{a} | – | negativna: slika je obrnjena
y | velikost predmeta | | m | y' je velikost slike
m | red ojačitve (interferenčni red) | | – | m = 0, ±1, ±2, …
m_{\max} | največji red ojačitve | m_{\max} \le \frac{d}{\lambda} | –
\lambda | valovna dolžina svetlobe | \lambda = \frac{\lambda_0}{n} | m | v snovi krajša kot v praznem prostoru
d | razdalja med režama (konstanta mrežice) | | m
\theta | kot uklona (smer proti progi) | | °
\theta_m | kot ojačitve m-tega reda | d\sin\theta_m = m\lambda | °
y_m | odmik m-te proge od sredine zaslona | y_m = L\tan\theta_m | m
L | razdalja do zaslona | | m
t | čas potovanja svetlobe | | s
x | mesto, kjer žarek prečka mejo | | m
h_1 | višina točke A nad mejo | | m
h_2 | globina točke B pod mejo | | m
D | širina reže ali premer odprtine | | m | v Fermatovi izpeljavi vodoravna razdalja med A in B
j | jakost svetlobe | | W/m^2
j_1 | jakost svetlobe iz ene reže | | W/m^2
s | razdalja med točkama, ki ju ločimo | s \approx L\theta | m
:::
