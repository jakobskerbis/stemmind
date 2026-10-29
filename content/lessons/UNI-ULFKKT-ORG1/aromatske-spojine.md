---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz poglavja o alkenih veš, da cikloheksen v trenutku razbarva bromovico: brom se adira na dvojno vez. Benzen ima na papirju kar tri dvojne vezi, pa bromovice ne razbarva. Z bromom reagira šele ob dodatku katalizatorja $\text{FeBr}_3$, in še takrat ne nastane adicijski produkt, ampak bromobenzen, v katerem je obroč ostal cel.

Zakaj se benzen tako »upira«? Odgovor je **aromatičnost**: posebna stabilnost nekaterih cikličnih sistemov z delokaliziranimi elektroni $\pi$. Aromatski obroči so v zdravilih, barvilih in biomolekulah (fenilalanin, baze DNA). Da jih znaš izdelati in spreminjati, moraš poznati njihovo glavno reakcijo: **elektrofilno aromatsko substitucijo**.

## Razlaga

**1. Benzen je bolj stabilen, kot bi pričakovali.** Pri hidrogenaciji cikloheksena (ena dvojna vez) se sprosti približno $120\,\text{kJ/mol}$. Za »cikloheksatrien« s tremi ločenimi dvojnimi vezmi bi pričakovali trikrat toliko, $3 \cdot 120 = 360\,\text{kJ/mol}$. Izmerimo pa le $208\,\text{kJ/mol}$. Razlika, $360 - 208 = 152\,\text{kJ/mol}$, je **resonančna (aromatska) stabilizacija**: za toliko je benzen nižje na energijski lestvici.

**2. Zgradba benzena.** Vseh šest ogljikov je hibridiziranih $sp^2$, obroč je raven, koti so $120^\circ$. Vsak ogljik ima eno nehibridizirano orbitalo $p$, pravokotno na ravnino obroča. Šest orbital $p$ se prekriva v sklenjen krog nad in pod ravnino, v katerem je šest elektronov $\pi$. Vse vezi C–C so enako dolge ($139\,\text{pm}$), med enojno ($154\,\text{pm}$) in dvojno ($134\,\text{pm}$). Dve Kekuléjevi strukturi sta le resonančni strukturi; prava molekula je hibrid, zato benzen pogosto rišemo kot šestkotnik s krogom.

**3. Hücklovo pravilo.** Spojina je **aromatska**, če hkrati velja:

- je ciklična in ravna,
- vsak atom v obroču ima orbitalo $p$ (sklenjen, nepretrgan sistem $\pi$),
- v sistemu $\pi$ je $4n + 2$ elektronov ($n = 0, 1, 2, \ldots$), torej $2$, $6$, $10$, $14$ …

Če so prvi dve točki izpolnjeni, elektronov $\pi$ pa je $4n$ ($4$, $8$ …), je spojina **antiaromatska** in posebno nestabilna. Molekule, ki prvih dveh točk ne izpolnijo, so **nearomatske**: obnašajo se kot navadni polieni.

**4. Štetje elektronov $\pi$.** Dvojna vez v obroču prispeva $2$ elektrona. Nevezni par na atomu v obroču prispeva $2$ elektrona le, če je v orbitali $p$, ki je del kroga. Pozitivni naboj na ogljiku $sp^2$ pomeni prazno orbitalo $p$ ($0$ elektronov), negativni naboj par v orbitali $p$ ($2$ elektrona).

| Spojina | Elektroni $\pi$ | Raven, sklenjen $p$? | Vrsta |
|---|---|---|---|
| benzen | $6$ | da | aromatska |
| ciklooktatetraen | $8$ | ne (oblika kadi) | nearomatska |
| pirol | $4 + 2$ (par N) | da | aromatska |
| piridin | $6$ (par N ne šteje) | da | aromatska |

V piridinu je dušik $sp^2$ in že sodeluje v dvojni vezi; njegov nevezni par leži v ravnini obroča, pravokotno na orbitale $p$, zato ga ne štejemo. Ker ostane prost, je piridin bazičen. V pirolu dušik nima dvojne vezi, zato njegov par napolni orbitalo $p$ in zaključi sekstet.

:::premisli
Ciklopentadien ($\text{C}_5\text{H}_6$) ni aromatski. Kaj se zgodi z aromatičnostjo, ko mu močna baza odvzame proton s skupine $\text{CH}_2$? Napovej, preden pogledaš.
---
Nastane ciklopentadienidni anion, ki je aromatski. Ogljik, ki je bil $sp^3$, postane $sp^2$, njegov nevezni par preide v orbitalo $p$, krog je sklenjen in ima $4 + 2 = 6$ elektronov $\pi$. Zato je ciklopentadien za ogljikovodik nenavadno kisel.
:::

**5. Zakaj substitucija in ne adicija.** Elektrofil $\text{E}^+$ napade oblak $\pi$ benzena podobno kot pri alkenih. Pri tem nastane karbokation, imenovan **areniumski ion** (kompleks $\sigma$). Pozitivni naboj je delokaliziran na treh ogljikih (orto, para glede na mesto napada), a aromatičnost je izgubljena, zato je ta korak počasen in določa hitrost. Nato ima ion dve možnosti:

- adira nukleofil, kot pri alkenih: produkt ni več aromatski, kar bi stalo okoli $150\,\text{kJ/mol}$;
- odda proton z ogljika, na katerega se je vezal E: aromatski obroč se obnovi.

Narava izbere drugo pot. Shematsko:

$$\text{ArH} + \text{E}^+ \xrightarrow{\text{počasi}} [\text{Ar(H)E}]^+ \xrightarrow{-\text{H}^+} \text{ArE}$$

**6. Pet osnovnih reakcij.** Benzen je šibek nukleofil, zato potrebuje močan elektrofil, ki ga ustvari katalizator ali kislina:

| Reakcija | Reagenti | Elektrofil | Produkt |
|---|---|---|---|
| halogeniranje | $\text{Br}_2$, $\text{FeBr}_3$ | $\text{Br}^{\delta+}\cdots\text{FeBr}_4^{\delta-}$ | $\text{ArBr}$ |
| nitriranje | $\text{HNO}_3$, $\text{H}_2\text{SO}_4$ | $\text{NO}_2^+$ | $\text{ArNO}_2$ |
| sulfoniranje | $\text{SO}_3$, $\text{H}_2\text{SO}_4$ | $\text{SO}_3$ ($\text{HSO}_3^+$) | $\text{ArSO}_3\text{H}$ |
| alkiliranje F.–C. | $\text{RCl}$, $\text{AlCl}_3$ | $\text{R}^+$ | $\text{ArR}$ |
| aciliranje F.–C. | $\text{RCOCl}$, $\text{AlCl}_3$ | $\text{RCO}^+$ | $\text{ArCOR}$ |

Pri Friedel-Craftsovem alkiliranju nastane karbokation, ki se lahko premesti v stabilnejšega, tako kot pri $\text{S}_\text{N}1$ in E1. Acilijev ion je stabiliziran z resonanco in se ne premešča.

**7. Usmerjanje drugega substituenta.** Skupina, ki je že na obroču, odloči, kako hitro poteče naslednja substitucija in kam gre nova skupina. Odloča stabilnost areniumskega iona:

- **Aktivirajoče skupine** ($-\text{OH}$, $-\text{OR}$, $-\text{NH}_2$, alkil) dajejo obroču elektrone. Pri napadu na orto ali para mesto pride pozitivni naboj na ogljik s to skupino, ki ga stabilizira (pri $-\text{OH}$ celo z neveznim parom kisika). Usmerjajo **orto/para**, reakcija je hitrejša kot pri benzenu.
- **Deaktivirajoče skupine** ($-\text{NO}_2$, $-\text{CN}$, $-\text{CHO}$, $-\text{COR}$, $-\text{COOH}$, $-\text{SO}_3\text{H}$) elektrone odvzemajo. Pri orto/para napadu bi pozitivni naboj sedel tik ob skupini, ki ga ne prenese. Ostane **meta**, reakcija je počasnejša.
- **Halogeni** so izjema: z induktivnim učinkom obroč deaktivirajo, z neveznim parom pa stabilizirajo orto/para ion. Usmerjajo **orto/para**, a so počasnejši od benzena.

:::premisli
Zakaj nitrobenzen pri nadaljnjem nitriranju da skoraj samo meta produkt, čeprav je tudi meta napad počasnejši kot pri benzenu?
---
Ker je meta napad »najmanj slab«. Pri orto in para napadu ena resonančna struktura areniumskega iona postavi pozitivni naboj na ogljik, vezan na $-\text{NO}_2$, ki ima tudi sam pozitivni dušik. Pri meta napadu se tej strukturi izogne, zato je meta ion najmanj nestabilen in nastaja najhitreje.
:::

## Rešeni primeri

### Primer 1 (lažji): ali je aromatski?

Za tri ciklične, ravne molekule s sklenjenim sistemom orbital $p$ odloči, ali so aromatske ali antiaromatske: ciklobutadien ($2$ dvojni vezi), tropilijev kation $\text{C}_7\text{H}_7^+$ ($3$ dvojne vezi in en ogljik s pozitivnim nabojem) in naftalen ($5$ dvojnih vezi v dveh zlitih obročih).

**Podatki:** vse tri molekule so ciklične, ravne in s sklenjenim sistemom $p$; ciklobutadien: $2$ vezi C=C; tropilij: $3$ vezi C=C in $1$ ogljik $\text{C}^+$; naftalen: $5$ vezi C=C
**Iščemo:** število elektronov $\pi$ in vrsto (aromatska, antiaromatska)

:::formula
Hücklovo pravilo: aromatska pri $4n + 2$ elektronih $\pi$, antiaromatska pri $4n$; dvojna vez $= 2$, $\text{C}^+ = 0$.
:::

**Rešitev:**

1. Ciklobutadien: $2 \cdot 2 = 4$ elektroni. To je $4n$ z $n = 1$, zato je antiaromatski (in obstaja le pri zelo nizki temperaturi).
2. Tropilijev kation: $3 \cdot 2 + 0 = 6$ elektronov, ker je orbitala $p$ na $\text{C}^+$ prazna. To je $4 \cdot 1 + 2$, zato je aromatski, kar pojasni, zakaj je ta karbokation nenavadno stabilen.
3. Naftalen: $5 \cdot 2 = 10$ elektronov, kar je $4 \cdot 2 + 2$. Aromatski.
4. Odgovor: ciklobutadien je antiaromatski, tropilijev kation in naftalen sta aromatska.

### Primer 2: mehanizem bromiranja

Benzen segrevamo z bromom ob dodatku $\text{FeBr}_3$. Zapiši korake mehanizma in produkt.

**Podatki:** substrat benzen, reagent $\text{Br}_2$, katalizator $\text{FeBr}_3$ (Lewisova kislina)
**Iščemo:** korake mehanizma in produkt

:::formula
$\text{ArH} + \text{E}^+ \to [\text{Ar(H)E}]^+ \to \text{ArE} + \text{H}^+$
:::

**Rešitev:**

1. Nastanek elektrofila: $\text{FeBr}_3$ sprejme par z enega broma. Vez Br–Br se polarizira, zunanji brom postane $\text{Br}^{\delta+}$, ker je sam brom za benzen prešibak elektrofil.
2. Napad: par $\pi$ benzena napade $\text{Br}^{\delta+}$, nastaneta areniumski ion in $\text{FeBr}_4^-$. Aromatičnost se začasno izgubi, zato je to počasni korak.
3. Deprotonacija: $\text{FeBr}_4^-$ odvzame proton z ogljika, ki nosi brom. Obroč je spet aromatski, nastaneta $\text{HBr}$ in spet $\text{FeBr}_3$, torej je ta res katalizator.
4. Odgovor: nastane bromobenzen ($\text{C}_6\text{H}_5\text{Br}$) in $\text{HBr}$; obroč ostane aromatski.

### Primer 3 (težji): vrstni red korakov v sintezi

Iz benzena želimo pripraviti 1-bromo-3-nitrobenzen (meta izomer). Na voljo imamo $\text{Br}_2/\text{FeBr}_3$ in $\text{HNO}_3/\text{H}_2\text{SO}_4$. V kakšnem vrstnem redu izvedemo reakciji?

**Podatki:** izhodna snov benzen; cilj 1-bromo-3-nitrobenzen; reagenta $\text{Br}_2/\text{FeBr}_3$ in $\text{HNO}_3/\text{H}_2\text{SO}_4$
**Iščemo:** vrstni red obeh substitucij

:::formula
Skupina na obroču usmerja: $-\text{Br}$ orto/para, $-\text{NO}_2$ meta.
:::

**Rešitev:**

1. Substituenta sta v meta položaju. Meta usmerja le $-\text{NO}_2$, zato mora ta skupina na obroč prva.
2. Korak 1: nitriranje benzena da nitrobenzen.
3. Korak 2: bromiranje nitrobenzena. Nitro skupina usmeri brom na meta mesto. Reakcija je počasnejša kot pri benzenu, zato potrebujemo nekoliko ostrejše pogoje.
4. Kontrola: obraten vrstni red bi dal bromobenzen, ta pa bi nitro skupino usmeril v orto in para položaj, ne v meta.
5. Odgovor: najprej nitriramo, nato bromiramo.

### Primer 4: zdaj ti

Anizol (metoksibenzen, $\text{C}_6\text{H}_5\text{OCH}_3$) nitriramo z $\text{HNO}_3/\text{H}_2\text{SO}_4$. Katera produkta nastaneta in ali je reakcija hitrejša ali počasnejša kot pri benzenu?

**Podatki:** substrat anizol (skupina $-\text{OCH}_3$), reagenta $\text{HNO}_3$, $\text{H}_2\text{SO}_4$
**Iščemo:** glavna produkta in hitrost glede na benzen

:::formula
$-\text{OR}$: aktivirajoča skupina, usmerja orto/para.
:::

**Rešitev:**

1. Elektrofil je nitronijev ion $\text{NO}_2^+$, ki nastane iz $\text{HNO}_3$ v močni kislini.
2. Kisik skupine $-\text{OCH}_3$ ima nevezni par, ki stabilizira areniumski ion pri orto in para napadu.
3. Zapiši produkta in hitrost sam, nato preveri:

:::premisli
Katera produkta nastaneta in kako hitra je reakcija?
---
Nastaneta 2-nitroanizol (orto) in 4-nitroanizol (para); para pogosto prevladuje, ker je orto mesto sterično bolj oviran. Reakcija je hitrejša kot pri benzenu, ker je $-\text{OCH}_3$ aktivirajoča skupina.
:::

## Pogoste napake

- **»Tri dvojne vezi v obroču pomenijo aromatičnost.«** Šteje število elektronov $\pi$ v sklenjenem, ravnem sistemu, ne število vezi. Ciklooktatetraen ima štiri dvojne vezi in $8$ elektronov, je upognjen in nearomatski. Vedno preveri vse tri pogoje Hücklovega pravila.
- **»Benzen reagira kot alken.«** Benzen brez katalizatorja ne adira broma, s katalizatorjem pa da substitucijski produkt, ker se tako aromatičnost obnovi. Adicija bi stala okoli $150\,\text{kJ/mol}$ stabilizacije.
- **»Halogeni deaktivirajo, torej usmerjajo meta.«** Hitrost in usmerjanje sta dve različni vprašanji. Halogeni zmanjšajo hitrost (induktivno), a z neveznim parom stabilizirajo orto/para ion. Rezultat: počasneje, a orto/para.
- **Alkiliranje z 1-kloropropanom da propilbenzen.** Primarni karbokation se premesti v sekundarnega, zato nastane predvsem izopropilbenzen (kumen). Ravno verigo dobiš z aciliranjem in nato z redukcijo karbonilne skupine.

## Povzetek

- Aromatska spojina je ciklična, ravna, s sklenjenim sistemom orbital $p$ in $4n + 2$ elektroni $\pi$ ($2, 6, 10$ …); s $4n$ elektroni je antiaromatska.
- Benzen je za okoli $150\,\text{kJ/mol}$ stabilnejši od »cikloheksatriena«; vse vezi C–C so enake ($139\,\text{pm}$).
- Nevezni par šteje le, če je v orbitali $p$ kroga (pirol da, piridin ne); $\text{C}^+$ prispeva $0$, $\text{C}^-$ $2$ elektrona.
- Elektrofilna aromatska substitucija: nastanek $\text{E}^+$, počasni napad do areniumskega iona, hitra deprotonacija, ki obnovi aromatičnost.
- Reakcije: halogeniranje ($\text{FeX}_3$), nitriranje ($\text{NO}_2^+$), sulfoniranje, Friedel-Craftsovo alkiliranje (premestitve) in aciliranje.
- Aktivirajoče skupine in halogeni usmerjajo orto/para, ostale deaktivirajoče skupine meta; v sintezi je vrstni red korakov pomemben.

## Drugače: Na sliki

Predstavljaj si benzen od strani. Ravnina obroča je kot mizna plošča s šestimi ogljiki. Iz vsakega ogljika štrli orbitala $p$, kot ročka, ena polovica nad mizo in ena pod njo. Šest ročk se dotika in tvori dva obroča elektronske gostote, »krof« nad mizo in »krof« pod njo.

Elektrofil prileti od zgoraj in zgrabi par elektronov iz zgornjega krofa. En ogljik pri tem postane $sp^3$, njegova ročka izgine in krof se pretrga: preostalih pet ogljikov si deli štiri elektrone, pozitivni naboj pa tri od njih. Ko se proton odcepi, se ročka vrne in krof je spet cel.

Usmerjanje si nariši kot šestkotnik z oznakami: na skupini je položaj 1, orto sta 2 in 6, meta 3 in 5, para 4. Pri napadu na 2 ali 4 se pozitivni naboj v eni resonančni strukturi znajde na 1, pri napadu na 3 nikoli.

## Drugače: Iz vsakdanjega življenja

Aromatski obroč je kot zelo dobro uigrana ekipa šestih ljudi, ki si delijo delo. Če bi jo razbil (adicija), bi izgubil veliko. Zato obroč raje sprejme novega člana tako, da enega starega (proton) pošlje domov, ekipa pa ostane cela. To je substitucija.

Primer iz prakse: TNT (2,4,6-trinitrotoluen) nastane z zaporednim nitriranjem toluena. Metilna skupina usmerja orto/para, zato pridejo nitro skupine na položaje 2, 4 in 6.

## Drugače: Bolj natančno

Hücklovo pravilo izhaja iz teorije molekulskih orbital. Za raven cikličen sistem z $N$ orbitalami $p$ je najnižja orbitala $\pi$ nedegenerirana, nad njo pa so orbitale v degeneriranih parih. Najnižja sprejme $2$ elektrona, vsak naslednji par orbital $4$. Zaprto lupino (vse vezne orbitale polne) dobimo pri $2 + 4n$ elektronih. Pri $4n$ elektronih ostaneta dva elektrona nesparjena v degeneriranem paru, kar je energijsko neugodno: od tod antiaromatičnost.

Za benzen ($N = 6$) so energije orbital $\alpha + 2\beta$, dvakrat $\alpha + \beta$, dvakrat $\alpha - \beta$ in $\alpha - 2\beta$ ($\beta < 0$). Šest elektronov napolni tri vezne orbitale. Elektronska energija sistema $\pi$ je $6\alpha + 8\beta$, za tri izolirane etenske vezi pa $6\alpha + 6\beta$; razlika $2\beta$ je delokalizacijska energija.

Po Hammondovem postulatu je prehodno stanje počasnega koraka po energiji blizu areniumskemu ionu, zato vse, kar stabilizira ion, zniža tudi aktivacijsko energijo.

## Preveri se

? Koliko elektronov $\pi$ mora imeti raven, cikličen sistem s sklenjenim krogom orbital $p$, da je aromatski?
- $4n$, na primer $4$ ali $8$
~ Tako šteje antiaromatska molekula, kot ciklobutadien; aromatska ima $4n + 2$.
+ $4n + 2$, na primer $2$, $6$ ali $10$
- Kakršnokoli sodo število
~ Sodo število ni dovolj: $4$ in $8$ sta sodi, a dajeta antiaromatičnost.
> Hücklovo pravilo: $4n + 2$ elektronov $\pi$ ($n = 0, 1, 2 \ldots$) da zaprto lupino veznih orbital.

? Zakaj benzen z $\text{Br}_2/\text{FeBr}_3$ da bromobenzen in ne dibromocikloheksadiena?
- Ker benzen nima dvojnih vezi.
~ Elektroni $\pi$ so prisotni, le delokalizirani. Napad elektrofila na oblak $\pi$ se res zgodi.
- Ker $\text{FeBr}_3$ prepreči nastanek karbokationa.
~ $\text{FeBr}_3$ ustvari elektrofil; karbokation (areniumski ion) vseeno nastane kot vmesni produkt.
+ Ker oddaja protona iz areniumskega iona obnovi aromatičnost, adicija pa bi jo trajno uničila.
> Substitucijski produkt ohrani okoli $150\,\text{kJ/mol}$ aromatske stabilizacije, zato je ta pot ugodnejša.

? Klorobenzen reagira z nitrirno zmesjo. Kaj velja?
- Reakcija je hitrejša kot pri benzenu, produkt je meta.
~ Klor obroč deaktivira (induktivno), zato je počasnejša; usmerja pa orto/para.
- Reakcija je počasnejša kot pri benzenu, produkt je predvsem meta.
~ Počasnejša res, a halogen z neveznim parom stabilizira orto/para ion, zato ne usmerja meta.
+ Reakcija je počasnejša kot pri benzenu, produkta sta predvsem orto in para.
> Halogeni so deaktivirajoči orto/para usmerjevalci: induktivni učinek zniža hitrost, resonanca neveznega para določi položaj.

? Katera od spojin je aromatska?
- ciklooktatetraen
~ Ima $8$ elektronov $\pi$ ($4n$) in se upogne v obliko kadi, zato je nearomatski.
- cikloheksa-1,3-dien
~ Ogljika $\text{CH}_2$ (C5, C6) sta $sp^3$, zato krog orbital $p$ ni sklenjen.
+ piridin
- ciklopentadien
~ Skupina $\text{CH}_2$ je $sp^3$ in prekine krog; aromatski je šele njegov anion.
> Piridin je raven, ima sklenjen krog šestih orbital $p$ in $6$ elektronov $\pi$; nevezni par dušika leži v ravnini in ne šteje.

? Benzen reagira z 1-kloropropanom in $\text{AlCl}_3$. Kaj je glavni produkt?
- propilbenzen
~ Primarni karbokation (ali kompleks z $\text{AlCl}_3$) se premesti v sekundarnega, zato ravna veriga ni glavni produkt.
+ izopropilbenzen (kumen)
- klorobenzen
~ Klor je del alkilnega halida, ki da elektrofil $\text{R}^+$; na obroč se veže alkil, ne klor.
> Friedel-Craftsovo alkiliranje poteka prek karbokationa, ki se s premikom hidrida premesti v stabilnejši sekundarni kation, zato nastane izopropilbenzen.
