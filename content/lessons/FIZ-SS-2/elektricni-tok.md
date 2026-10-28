---
stanje: osnutek
demo: ohm
avtor: AI
---

## Zakaj se tega učimo

Iz osnovne šole in 1. letnika že poznaš nekaj stvari, ki jih bomo tu povezali. Veš, da je snov zgrajena iz atomov, da so v kovinah prosti elektroni in da se telesa lahko naelektrijo. Znaš tudi uporabljati enačbe in računati z enotami, na primer pri hitrosti $v = \dfrac{s}{t}$.

Električni tok je osnova skoraj vsega, kar uporabljaš: telefona, svetilke, polnilnika, štedilnika. Če razumeš tok, upor in Ohmov zakon, lahko izračunaš, koliko toka steče skozi žarnico, zakaj se polnilnik segreje ali zakaj se tanek kabel pri velikem toku pregreje. To je tudi temelj za vse nadaljnje učenje o električnih vezjih.

## Razlaga

**1. Električni tok.** Električni tok je urejeno gibanje nabitih delcev. V kovinskem vodniku se gibljejo prosti elektroni. Električni tok $I$ je enak naboju, ki steče skozi presek vodnika v določenem času:

$$I = \frac{e}{t}$$

Pri tem je $e$ naboj, ki steče skozi presek vodnika v času $t$. Enota za tok je **amper** ($\text{A}$). Velja $1\,\text{A} = 1\,\dfrac{\text{As}}{\text{s}}$, torej $1\,\text{A}$ pomeni, da v vsaki sekundi steče $1\,\text{As}$ naboja. Enota za naboj je amperska sekunda ($\text{As}$).

**2. Smer toka.** Po dogovoru je smer toka od plusa proti minusu vira. Elektroni se v resnici gibljejo v nasprotno smer, vendar to za računanje ni pomembno.

**3. Napetost.** Da steče tok, mora vir (baterija, vtičnica) ustvariti **električno napetost** $U$. Napetost si lahko predstavljaš kot »potisk«, ki žene naboje po krogu. Enota je **volt** ($\text{V}$). Napetost merimo z voltmetrom, ki ga vežemo **vzporedno** k porabniku. Tok merimo z ampermetrom, ki ga vežemo **zaporedno**, torej v isto vejo vezja.

**4. Električni upor.** Vodnik se toku upira, ker se elektroni na poti zaletavajo v ione kristalne mreže. Ta lastnost se imenuje **električni upor** $R$. Enota je **ohm** ($\Omega$). Večji ko je upor, manjši tok steče pri isti napetosti.

**5. Ohmov zakon.** Pri kovinskih vodnikih pri stalni temperaturi je tok sorazmeren z napetostjo:

$$U = I \cdot R \qquad \Rightarrow \qquad I = \frac{U}{R}, \quad R = \frac{U}{I}$$

Velja $1\,\Omega = 1\,\dfrac{\text{V}}{\text{A}}$. Če napetost podvojimo, se pri enakem uporu podvoji tudi tok. Če pri enaki napetosti podvojimo upor, se tok razpolovi.

**6. Od česa je odvisen upor žice.** Upor je večji, če je žica daljša, in manjši, če je debelejša. Odvisen je tudi od snovi (baker prevaja bolje kot železo) in od temperature.

**7. Grafična predstavitev.** Če za kovinski upornik narišemo graf $I(U)$, dobimo premico skozi koordinatno izhodišče. Strmejša ko je premica, manjši je upor.

## Rešeni primeri

### Primer 1: tok iz naboja in časa

Skozi presek vodnika steče v $20\,\text{s}$ naboj $60\,\text{As}$. Kolikšen je tok?

**Podatki:** $t = 20\,\text{s}$, $e = 60\,\text{As}$
**Iščemo:** tok $I$

:::formula
$I = \dfrac{e}{t}$
:::

**Rešitev:**

1. Uporabimo definicijo toka: $I = \dfrac{e}{t}$. Zakaj: tok pove, koliko naboja steče v eni sekundi.
2. Vstavimo: $I = \dfrac{60\,\text{As}}{20\,\text{s}} = 3\,\text{A}$.
3. Preverimo enote: $\dfrac{\text{As}}{\text{s}} = \text{A}$. ✓
4. Odgovor: tok je $3\,\text{A}$.

### Primer 2: Ohmov zakon

Na žarnico z uporom $R = 46\,\Omega$ priključimo napetost $U = 230\,\text{V}$. Kolikšen tok teče skozi njo?

**Podatki:** $R = 46\,\Omega$, $U = 230\,\text{V}$
**Iščemo:** tok $I$

:::formula
Ohmov zakon v obliki z $I$ na levi: $I = \dfrac{U}{R}$
:::

**Rešitev:**

1. Ohmov zakon povezuje vse tri količine, zato ga preoblikujemo za tok: $I = \dfrac{U}{R}$.
2. Vstavimo: $I = \dfrac{230\,\text{V}}{46\,\Omega} = 5\,\text{A}$.
3. Preverimo smiselnost: pri $230\,\text{V}$ in $5\,\text{A}$ bi bil upor res $\dfrac{230}{5} = 46\,\Omega$. ✓
4. Odgovor: skozi žarnico teče tok $5\,\text{A}$.

### Primer 3: izračun upora in vpliv napetosti (težji)

Skozi upornik teče tok $0{,}40\,\text{A}$, ko je priključen na napetost $12\,\text{V}$. a) Kolikšen je upor? b) Kolikšen tok bo tekel, če napetost povečamo na $18\,\text{V}$ (upor se ne spremeni)?

**Podatki:** $I_1 = 0{,}40\,\text{A}$, $U_1 = 12\,\text{V}$, $U_2 = 18\,\text{V}$, upor $R$ se ne spremeni
**Iščemo:** a) upor $R$, b) tok $I_2$ pri napetosti $U_2$

:::formula
$R = \dfrac{U_1}{I_1}$, nato $I_2 = \dfrac{U_2}{R}$
:::

**Rešitev:**

**a)**
1. Iščemo upor: $R = \dfrac{U_1}{I_1}$. Zakaj: upor je razmerje med napetostjo in tokom.
2. $R = \dfrac{12\,\text{V}}{0{,}40\,\text{A}} = 30\,\Omega$.

**b)**
1. Upor je ostal $30\,\Omega$, zato spet uporabimo $I_2 = \dfrac{U_2}{R}$. Zakaj: upor je lastnost upornika in se pri spremembi napetosti ne spremeni.
2. $I_2 = \dfrac{18\,\text{V}}{30\,\Omega} = 0{,}60\,\text{A}$.
3. Preverimo: napetost se je povečala za faktor $\dfrac{18}{12} = 1{,}5$, tok pa tudi: $0{,}40 \cdot 1{,}5 = 0{,}60\,\text{A}$. ✓ To je sorazmernost iz Ohmovega zakona.
4. Odgovor: upor je $30\,\Omega$; pri $18\,\text{V}$ teče tok $0{,}60\,\text{A}$.

## Pogoste napake

- **Zamenjava formul.** Napačno zapišeš $I = R/U$ ali $R = I/U$. Pomagaj si s trikotnikom: $U$ je zgoraj, $I$ in $R$ spodaj. Prekrij količino, ki jo iščeš.
- **Upor ni odvisen od napetosti in toka.** Če napetost podvojimo, se upor kovinskega upornika ne spremeni. Spremeni se tok.
- **Zamenjane meritve.** Ampermeter vežeš vzporedno ali voltmeter zaporedno. Pravilo: ampermeter zaporedno, voltmeter vzporedno.
- **Enote.** Pri računanju ne pozabi na pretvorbo, npr. $250\,\text{mA} = 0{,}25\,\text{A}$ in $2\,\text{k}\Omega = 2000\,\Omega$.
- **Smer toka.** Mislimo, da tok teče od minusa proti plusu. Dogovorjena smer toka je od plusa proti minusu, čeprav elektroni potujejo v nasprotno smer.

## Povzetek

- Električni tok je urejeno gibanje nabojev: $I = \dfrac{e}{t}$, enota amper ($\text{A}$).
- Napetost ($\text{V}$) žene tok, upor ($\Omega$) mu nasprotuje.
- Ohmov zakon: $U = I \cdot R$, torej $I = \dfrac{U}{R}$ in $R = \dfrac{U}{I}$.
- Pri kovinskih upornikih je tok sorazmeren z napetostjo, graf $I(U)$ je premica skozi izhodišče.
- Ampermeter vežemo zaporedno, voltmeter vzporedno.

## Drugače: Na sliki

V interaktivni simulaciji spodaj (»Električni tok in Ohmov zakon«) lahko spreminjaš napetost vira in upor ter opazuješ, kako se spremeni tok.

Poskusi tole:

- Upor ohrani stalen, napetost povečuj. Tok raste v enakem razmerju. Če napetost podvojiš, se podvoji tudi tok.
- Napetost ohrani stalno, upor povečuj. Tok se zmanjšuje. Če upor podvojiš, se tok razpolovi.

Predstavljaj si krog kot vodno cev. Črpalka je baterija (potisk je napetost), voda je naboj, ozek del cevi pa je upor. Ožja ko je cev, manj vode steče pri enakem potisku.

Če narišeš graf $I(U)$ za upornik, dobiš premico skozi izhodišče. Pri večjem uporu je premica položnejša, ker pri isti napetosti steče manjši tok.

## Drugače: Iz vsakdanjega življenja

**Polnilnik.** Na ohišju polnilnikov piše napetost in največji tok, na primer $5\,\text{V}$ in $2\,\text{A}$. Naprava, ki jo polniš, določi, koliko toka dejansko vzame, polnilnik pa ga lahko da največ toliko, kot piše na ohišju.

**Zakaj se podaljški segrevajo.** Dolga tanka žica ima večji upor kot kratka debela. Pri velikem toku se zato bolj segreje. Zato so kabli za štedilnik debelejši kot kabli za svetilko.

**Električna varnost.** Človeško telo ima velik upor, vendar pri visoki napetosti steče skozi telo lahko nevaren tok. Ohmov zakon pove, da je tok pri enakem uporu večji, če je napetost večja. Zato je omrežna napetost nevarnejša kot napetost baterije v svetilki.

**Vodna analogija.** Napetost je višinska razlika vode (razlika tlakov), tok je količina vode, ki steče v sekundi, upor pa ozka ali zamašena cev.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo z Ohmovim zakonom:

1. Izpiši, kaj poznaš in kaj iščeš: npr. $U = 9\,\text{V}$, $R = 30\,\Omega$, iščemo $I$.
2. Pretvori enote v $\text{V}$, $\text{A}$, $\Omega$.
3. Izberi obliko enačbe: iščeš tok, uporabi $I = \dfrac{U}{R}$.
4. Vstavi številke z enotami: $I = \dfrac{9\,\text{V}}{30\,\Omega} = 0{,}30\,\text{A}$.
5. Preveri smiselnost: pri večjem uporu mora biti tok manjši.

Tabela za stalno napetost $U = 12\,\text{V}$:

| $R\,[\Omega]$ | $I = U/R\,[\text{A}]$ |
|---|---|
| 6 | 2 |
| 12 | 1 |
| 24 | 0,5 |
| 48 | 0,25 |

Upor se vsakič podvoji, tok pa se vsakič razpolovi. To je obratna sorazmernost med $I$ in $R$ pri stalni napetosti.

Tabela za stalen upor $R = 10\,\Omega$:

| $U\,[\text{V}]$ | $I = U/R\,[\text{A}]$ |
|---|---|
| 2 | 0,2 |
| 4 | 0,4 |
| 8 | 0,8 |
| 16 | 1,6 |

Napetost se podvoji, tok se podvoji. To je premo sorazmerje.

## Drugače: Bolj natančno

**Zakaj ima upor žice določeno vrednost.** Prosti elektroni se v kovini pod vplivom električnega polja pospešujejo, vendar se pogosto zaletavajo v ione kovinske kristalne mreže in pri tem oddajo del energije. Zaradi tega se v povprečju gibljejo s približno stalno hitrostjo, ki je sorazmerna z jakostjo polja, torej z napetostjo. Posledica je sorazmerje $I \sim U$ in zato $\dfrac{U}{I} = R = \text{konst.}$

**Upor žice.** Za homogeno žico dolžine $l$ in preseka $S$ velja

$$R = \rho \cdot \frac{l}{S},$$

kjer je $\rho$ **specifični upor** snovi. Dvakrat daljša žica ima dvakrat večji upor, dvakrat večji presek pa polovični upor.

**Meje Ohmovega zakona.** Ohmov zakon ne velja za vse snovi in naprave. Pri žarnici z žarilno nitko se upor poveča, ko se nitka segreje, zato graf $I(U)$ ni premica. Upornike, pri katerih velja Ohmov zakon, imenujemo ohmski. Pomembno je razlikovati med zakonom ($I \sim U$ pri stalni temperaturi) in definicijo upora ($R = U/I$), ki jo lahko izračunamo za vsak porabnik.

## Preveri se

? Skozi žarnico steče v $5\,\text{s}$ naboj $10\,\text{As}$. Kolikšen je tok?
- $50\,\text{A}$
+ $2\,\text{A}$
- $0{,}5\,\text{A}$
- $15\,\text{A}$
> Tok je naboj na enoto časa: $I = \dfrac{10\,\text{As}}{5\,\text{s}} = 2\,\text{A}$. Odgovor $50\,\text{A}$ dobiš, če naboj in čas pomnožiš, $0{,}5\,\text{A}$ pa, če ju deliš narobe.

? Upornik z uporom $20\,\Omega$ je priključen na napetost $10\,\text{V}$. Kolikšen tok teče skozi njega?
- $200\,\text{A}$
- $2\,\text{A}$
+ $0{,}5\,\text{A}$
> $I = \dfrac{U}{R} = \dfrac{10\,\text{V}}{20\,\Omega} = 0{,}5\,\text{A}$. Odgovora $200\,\text{A}$ in $2\,\text{A}$ dobiš, če množiš ali če deliš v napačnem vrstnem redu.

? Pri stalnem uporu napetost na kovinskem uporniku podvojimo. Kaj se zgodi s tokom?
- Tok se razpolovi.
- Tok ostane enak.
+ Tok se podvoji.
> Po Ohmovem zakonu je $I = \dfrac{U}{R}$. Pri stalnem $R$ je tok premo sorazmeren z napetostjo, zato se z napetostjo podvoji tudi tok.
