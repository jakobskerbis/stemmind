---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Že poznaš dele trikotnika: oglišča $A$, $B$, $C$, stranice $a$, $b$, $c$ in notranje kote $\alpha$, $\beta$, $\gamma$. Veš, da stranica $a$ leži nasproti oglišča $A$ in da je vsota notranjih kotov $180^\circ$. Z ravnilom, šestilom in kotomerom znaš narisati daljico dane dolžine, prenesti kot, narisati pravokotnico in simetralo kota.

Zdaj vse to združimo. Iz nekaj podatkov bomo **natančno načrtali trikotnik**. Pri tem se bomo vprašali: koliko podatkov sploh potrebujemo, da je trikotnik določen? Odgovor dajo **izreki o skladnosti**. Načrtovanje trikotnikov potrebujejo tesarji, ki sestavljajo ostrešje, inženirji pri gradnji mostov in geodeti, ki merijo zemljišča: če poznajo tri prave podatke, lahko trikotnik prenesejo na papir ali na teren.

## Razlaga

**1. Skladna trikotnika.** Trikotnika sta **skladna**, če se dasta natančno prekriti (s premikom, zasukom ali prezrcaljenjem). Skladna trikotnika imata enako dolge istoležne stranice in enako velike istoležne kote. Zapišemo $\triangle ABC \cong \triangle A'B'C'$.

**2. Izreki o skladnosti.** Ni treba primerjati vseh šestih podatkov. Dovolj so trije, če so pravi:

| Izrek | Trikotnika se ujemata v … | Primer podatkov |
|---|---|---|
| **sss** | vseh treh stranicah | $a$, $b$, $c$ |
| **sks** | dveh stranicah in kotu **med njima** | $b$, $c$, $\alpha$ |
| **ksk** | eni stranici in **obeh priležnih kotih** | $c$, $\alpha$, $\beta$ |
| **ssk** | dveh stranicah in kotu, ki leži **nasproti daljše** od njiju | $a$, $b$, $\alpha$, kjer je $a > b$ |

Če se trikotnika ujemata v takih treh podatkih, sta skladna. Zato ti trije podatki **določajo** trikotnik: vsak trikotnik, ki ga načrtaš iz njih, je enak (skladen) vsem drugim.

Pozor: trije koti ne določajo trikotnika. Trikotnik s koti $60^\circ$, $60^\circ$, $60^\circ$ je lahko majhen ali velik.

**3. Kdaj trikotnik obstaja.** Ni vsaka trojica podatkov primerna.

- **Trikotniška neenakost:** vsota dolžin poljubnih dveh stranic je večja od dolžine tretje stranice. Dovolj je preveriti, ali sta krajši stranici skupaj daljši od najdaljše.
- **Vsota kotov:** dva dana kota morata skupaj meriti manj kot $180^\circ$.

**4. Če kota nista priležna dani stranici.** Če je dana na primer stranica $c$ in kota $\alpha$ in $\gamma$, najprej izračunaš tretji kot: $\beta = 180^\circ - \alpha - \gamma$. Tako dobiš stranico $c$ in oba priležna kota ($\alpha$ in $\beta$) in uporabiš izrek ksk.

**5. Kako se lotimo načrtovalne naloge.**

1. **Skica.** Prostoročno nariši poljuben trikotnik, označi oglišča v nasprotni smeri urnega kazalca ($A$, $B$, $C$) in z barvo poudari dane podatke.
2. **Analiza.** Ugotovi, kateri izrek o skladnosti uporabiš in s katerim podatkom začneš (navadno z dano stranico).
3. **Preverjanje obstoja.** Preveri trikotniško neenakost ali vsoto kotov.
4. **Opis konstrukcije.** Po korakih zapiši, kaj boš naredil.
5. **Konstrukcija.** Z ostrim svinčnikom, ravnilom in šestilom (po potrebi s kotomerom) natančno načrtaj trikotnik. Pomožnih črt ne briši.
6. **Diskusija.** Koliko rešitev ima naloga? Kadar so podatki po enem od izrekov, je rešitev ena (trikotnik, ki ga dobiš na drugi strani dane stranice, je z njim skladen).

**6. Koti brez kotomera.** Kot $60^\circ$ dobiš tako, da okoli temena zarišeš lok, ki seka krak v točki $T$, nato pa okoli $T$ z istim polmerom še en lok. Poltrak iz temena skozi presečišče obeh lokov oklepa s krakom kot $60^\circ$ (teme, $T$ in presečišče lokov so oglišča enakostraničnega trikotnika). Z razpolavljanjem dobiš $30^\circ$ iz $60^\circ$ in $45^\circ$ iz pravega kota.

V interaktivni simulaciji spodaj (**Konstrukcije trikotnikov**) si lahko konstrukcije sss, sks in ksk ogledaš korak za korakom in spreminjaš podatke.

## Rešeni primeri

### Primer 1 (lažji)

Načrtaj trikotnik $ABC$ s stranicami $a = 5\,\text{cm}$, $b = 4\,\text{cm}$ in $c = 6\,\text{cm}$.

**Podatki:** $a = 5\,\text{cm}$, $b = 4\,\text{cm}$, $c = 6\,\text{cm}$
**Iščemo:** konstrukcijo trikotnika $ABC$ (izrek sss)

:::formula
Trikotniška neenakost: krajši stranici skupaj morata biti daljši od najdaljše, $a + b > c$.
:::

**Rešitev:**

1. Preverimo obstoj: najdaljša stranica je $c = 6\,\text{cm}$; $a + b = 5\,\text{cm} + 4\,\text{cm} = 9\,\text{cm} > 6\,\text{cm}$. Trikotnik obstaja.
2. Izrek: dane so tri stranice, zato je to izrek sss in rešitev je ena.
3. Načrtamo stranico $c = AB = 6\,\text{cm}$.
4. Okoli oglišča $A$ zarišemo lok s polmerom $b = 4\,\text{cm}$, ker je $b = AC$.
5. Okoli oglišča $B$ zarišemo lok s polmerom $a = 5\,\text{cm}$, ker je $a = BC$.
6. Presečišče lokov nad daljico $AB$ je oglišče $C$. Povežemo $C$ z $A$ in z $B$.
7. Odgovor: dobimo en trikotnik $ABC$ (presečišče pod daljico da skladen, prezrcaljen trikotnik).

### Primer 2 (srednji)

Načrtaj trikotnik $ABC$, v katerem je $b = 4\,\text{cm}$, $c = 5\,\text{cm}$ in $\alpha = 60^\circ$. Kot konstruiraj s šestilom.

**Podatki:** $b = 4\,\text{cm}$, $c = 5\,\text{cm}$, $\alpha = 60^\circ$, kot konstruiramo s šestilom
**Iščemo:** konstrukcijo trikotnika $ABC$

:::formula
Izrek sks: dve stranici in kot med njima določajo trikotnik. Kot $\alpha$ leži pri oglišču $A$, med stranicama $b = AC$ in $c = AB$.
:::

**Rešitev:**

1. Analiza: kot $\alpha$ je pri oglišču $A$, kjer se stikata stranici $b$ in $c$. Je torej kot med danima stranicama, uporabimo izrek sks. Ker je $\alpha < 180^\circ$, trikotnik obstaja.
2. Načrtamo $c = AB = 5\,\text{cm}$.
3. V oglišču $A$ konstruiramo kot $60^\circ$: lok okoli $A$ seka $AB$ v točki $T$; lok z istim polmerom okoli $T$ seka prvi lok v točki $S$. Poltrak $AS$ je krak kota $\alpha = 60^\circ$.
4. Na krak od $A$ nanesemo $b = 4\,\text{cm}$ (lok okoli $A$ s polmerom $4\,\text{cm}$) in dobimo oglišče $C$.
5. Povežemo $C$ z $B$.
6. Preverimo z merjenjem: stranica $a$ meri približno $4{,}6\,\text{cm}$.
7. Odgovor: naloga ima eno rešitev, trikotnik $ABC$ s stranicama $4\,\text{cm}$ in $5\,\text{cm}$ ter vmesnim kotom $60^\circ$.

### Primer 3 (težji)

Načrtaj trikotnik $ABC$, v katerem je $c = 6\,\text{cm}$, $\alpha = 45^\circ$ in $\gamma = 75^\circ$. Kota konstruiraj s šestilom.

**Podatki:** $c = 6\,\text{cm}$, $\alpha = 45^\circ$, $\gamma = 75^\circ$, kota konstruiramo s šestilom
**Iščemo:** kot $\beta$ in konstrukcijo trikotnika $ABC$

:::formula
$\alpha + \beta + \gamma = 180^\circ \;\Rightarrow\; \beta = 180^\circ - \alpha - \gamma$; nato izrek ksk (stranica $c$ in priležna kota $\alpha$, $\beta$).
:::

**Rešitev:**

1. Analiza: stranici $c = AB$ sta priležna kota $\alpha$ (pri $A$) in $\beta$ (pri $B$). Kot $\gamma$ leži nasproti stranice $c$, zato ga ne moremo neposredno nanesti na $AB$.
2. Izračunamo $\beta$: $\beta = 180^\circ - 45^\circ - 75^\circ = 60^\circ$.
3. Preverimo obstoj: $\alpha + \beta = 45^\circ + 60^\circ = 105^\circ < 180^\circ$. Trikotnik obstaja.
4. Načrtamo $c = AB = 6\,\text{cm}$.
5. V oglišču $A$ konstruiramo pravokotnico na $AB$ in pravi kot razpolovimo: dobimo krak kota $\alpha = 45^\circ$.
6. V oglišču $B$ konstruiramo kot $\beta = 60^\circ$ na isto stran daljice $AB$.
7. Kraka se sekata v oglišču $C$.
8. Preverimo s kotomerom: kot pri $C$ meri $75^\circ$. Z merjenjem dobimo še $a \approx 4{,}4\,\text{cm}$ in $b \approx 5{,}4\,\text{cm}$.
9. Odgovor: $\beta = 60^\circ$; naloga ima po izreku ksk eno rešitev.

## Pogoste napake

- **Stranica na napačnem mestu.** Učenec pri sss okoli $A$ zariše lok s polmerom $a$. Razlog: zamenja oznake, saj je $a$ »pri« črki $A$. Pravilno: stranica $a$ leži **nasproti** oglišča $A$, torej $a = BC$ in $b = AC$. Lok okoli $A$ ima polmer $b$, lok okoli $B$ pa polmer $a$.
- **Kot ni med danima stranicama.** Pri podatkih $b$, $c$, $\alpha$ učenec nanese kot $\alpha$ v oglišče $B$. Razlog: ne pogleda na skico. Pravilno: kot $\alpha$ je vedno pri oglišču $A$, kjer se stikata $b$ in $c$. Najprej nariši skico in nanjo vpiši podatke.
- **Neobstoječ trikotnik.** Učenec poskuša načrtati trikotnik s stranicami $3\,\text{cm}$, $4\,\text{cm}$ in $8\,\text{cm}$ in loka se ne sekata. Razlog: ni preveril trikotniške neenakosti. Pravilno: $3 + 4 = 7 < 8$, zato trikotnik ne obstaja. Preverjanje naredi pred risanjem.
- **Kot nasproti dane stranice.** Pri $c$, $\alpha$, $\gamma$ učenec poskuša nanesti $\gamma$ v oglišče $B$. Razlog: nanese kot, ki ni priležen stranici $c$. Pravilno: najprej izračunaj $\beta = 180^\circ - \alpha - \gamma$, nato uporabi izrek ksk s $c$, $\alpha$ in $\beta$.
- **Trije koti kot podatek.** Učenec misli, da koti $50^\circ$, $60^\circ$, $70^\circ$ določajo en sam trikotnik. Razlog: tri podatke zameša z izreki o skladnosti. Pravilno: brez vsaj ene stranice je takih trikotnikov neskončno mnogo (različno velikih).

## Povzetek

- Skladna trikotnika se dasta prekriti: $\triangle ABC \cong \triangle A'B'C'$.
- Izreki o skladnosti: **sss**, **sks** (kot med stranicama), **ksk** (oba priležna kota), **ssk** (kot nasproti daljše stranice).
- Stranica $a$ leži nasproti oglišča $A$: $a = BC$, $b = AC$, $c = AB$.
- Trikotniška neenakost: $a + b > c$, $a + c > b$, $b + c > a$.
- Vsota kotov: $\alpha + \beta + \gamma = 180^\circ$; manjkajoči kot izračunaj pred konstrukcijo.
- Postopek: skica, analiza, preverjanje obstoja, opis konstrukcije, konstrukcija, diskusija.

## Drugače: Na sliki

Predstavljaj si konstrukcijo sss kot igro dveh krožnic. Na list položiš najdaljšo stranico, daljico $AB$ dolžine $c$. Okoli oglišča $A$ zarišeš krožnico s polmerom $b$: vse točke na njej so od $A$ oddaljene točno $b$. Okoli oglišča $B$ zarišeš krožnico s polmerom $a$. Oglišče $C$ mora biti na obeh krožnicah hkrati, zato ga najdeš v njunem presečišču.

Če sta polmera premajhna, se krožnici ne sekata: trikotnik ne obstaja. Če sta ravno tako dolga, da se krožnici le dotikata na daljici $AB$, je $a + b = c$ in »trikotnik« se splošči v daljico. Šele ko je $a + b > c$, se krožnici sekata v dveh točkah, ena nad daljico in ena pod njo. Oba trikotnika sta zrcalni sliki in sta skladna. V interaktivni simulaciji spodaj lahko podatke spreminjaš in opazuješ, kdaj se loka nehata sekati.

## Drugače: Iz vsakdanjega življenja

Vzemi tri slamice ali palčke različnih dolžin in jih z vrvico poveži v trikotnik. Ko ga sestaviš, ga ne moreš več »zviti« v drugačno obliko: trikotnik s tremi danimi stranicami je **tog**. Prav zato so ostrešja, žerjavi, mostovi in kolesarski okvirji sestavljeni iz trikotnikov. Štirikotnik iz štirih palčk pa se brez težav nagne in spremeni obliko.

Izrek sks srečaš pri šestilu: kraka imata stalno dolžino, in ko nastaviš kot med njima, je razdalja med konicama natanko določena. Isti kot vedno da isto razdaljo. Izrek ksk uporabljajo geodeti: če poznajo razdaljo med dvema točkama in z obeh točk izmerijo kot proti oddaljenemu stolpu, natančno vedo, kje stolp stoji, ne da bi do njega hodili.

## Drugače: Korak za korakom s številkami

Vzemimo podatke $a = 7\,\text{cm}$, $\beta = 50^\circ$, $\gamma = 70^\circ$ in pojdimo po receptu.

1. **Skica:** nariši poljuben trikotnik, označi $A$, $B$, $C$ v nasprotni smeri urnega kazalca. Stranica $a$ je $BC$, kota $\beta$ in $\gamma$ sta pri ogliščih $B$ in $C$.
2. **Analiza:** stranici $a$ sta priležna prav kota $\beta$ in $\gamma$. To je izrek ksk.
3. **Obstoj:** $\beta + \gamma = 50^\circ + 70^\circ = 120^\circ < 180^\circ$. ✓ (Tretji kot bo $\alpha = 60^\circ$.)
4. **Opis konstrukcije:**
   - načrtaj $a = BC = 7\,\text{cm}$,
   - v $B$ nanesi kot $50^\circ$,
   - v $C$ na isto stran nanesi kot $70^\circ$,
   - presečišče krakov je oglišče $A$.
5. **Konstrukcija:** izvedi korake s kotomerom in ravnilom.
6. **Diskusija:** podatki ustrezajo izreku ksk, rešitev je ena.

Če bi bil dan kot $\beta = 120^\circ$ in $\gamma = 70^\circ$, bi bila vsota $190^\circ$ in kraka se ne bi sekala. Naloga ne bi imela rešitve.

## Drugače: Bolj natančno

Zakaj pri izreku ssk zahtevamo, da kot leži **nasproti daljše** stranice? Poglejmo dva primera.

Naj bo $c = 6\,\text{cm}$ in $\alpha = 30^\circ$. Načrtamo $AB$, v $A$ nanesemo kot $30^\circ$ in okoli $B$ zarišemo lok s polmerom $a$. Kjer lok seka krak, je oglišče $C$.

- Če je $a = 7\,\text{cm}$, torej daljša od $c$, lok seka krak samo v eni točki. Trikotnik je en sam.
- Če je $a = 4\,\text{cm}$, torej krajša od $c$, lok seka krak v **dveh** točkah. Dobimo dva različna trikotnika, ki **nista** skladna: eden ima pri $C$ ostri kot, drugi topi.
- Če bi bila $a$ še krajša (manjša od $3\,\text{cm}$, kolikor je oddaljena točka $B$ od kraka), lok kraka sploh ne bi dosegel in trikotnik ne bi obstajal.

Ker lahko dve stranici in kot nasproti krajše od njiju dajo dva različna trikotnika, taka trojica podatkov ne določa trikotnika. Zato izrek ssk velja le, ko kot leži nasproti daljše od obeh danih stranic.

## Preveri se

? Iz katerih treh daljic lahko sestaviš trikotnik?
- $3\,\text{cm}$, $4\,\text{cm}$, $8\,\text{cm}$
- $2\,\text{cm}$, $5\,\text{cm}$, $7\,\text{cm}$
+ $4\,\text{cm}$, $5\,\text{cm}$, $8\,\text{cm}$
- $1\,\text{cm}$, $2\,\text{cm}$, $4\,\text{cm}$
> Krajši stranici morata biti skupaj daljši od najdaljše: $4 + 5 = 9 > 8$. Pri $2 + 5 = 7$ je vsota enaka tretji stranici, zato se trikotnik splošči v daljico.

? Dani so $a$, $b$ in $\gamma$. Po katerem izreku načrtaš trikotnik?
- sss
+ sks
- ksk
> Kot $\gamma$ leži pri oglišču $C$, med stranicama $a = BC$ in $b = AC$. To je kot med danima stranicama, torej izrek sks.

? Koliko trikotnikov lahko načrtaš s podatki $c = 4\,\text{cm}$, $\alpha = 100^\circ$, $\beta = 90^\circ$?
+ nobenega
- enega
- dva
- neskončno mnogo
> $\alpha + \beta = 190^\circ$, kar je več od $180^\circ$. Kraka kotov se ne sekata, zato trikotnik ne obstaja.

? Pri katerih podatkih je trikotnik po izreku ssk natanko določen?
+ $a = 6\,\text{cm}$, $b = 4\,\text{cm}$, $\alpha = 50^\circ$
- $a = 4\,\text{cm}$, $b = 6\,\text{cm}$, $\alpha = 30^\circ$
- $a = 3\,\text{cm}$, $b = 6\,\text{cm}$, $\alpha = 40^\circ$
> Kot $\alpha$ leži nasproti stranice $a$. Samo v prvem primeru je $a$ daljša od $b$. V drugem primeru obstajata dva neskladna trikotnika, v tretjem pa nobeden.

:::simboli
A, B, C | oglišča trikotnika | |
a | stranica nasproti oglišča A | | | a = BC
b | stranica nasproti oglišča B | | | b = AC
c | stranica nasproti oglišča C | | | c = AB; vedno a + b > c
\alpha | notranji kot pri oglišču A | | °
\beta | notranji kot pri oglišču B | \beta = 180^\circ - \alpha - \gamma | °
\gamma | notranji kot pri oglišču C | | °
:::
