---
stanje: osnutek
demo: ohm
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz osnovne šole in 1. letnika že poznaš nekaj stvari, ki jih bomo tu povezali. Veš, da se snov sestoji iz atomov, da so v kovinah prosti elektroni in da se telesa lahko naelektrijo. Znaš tudi uporabljati enačbe in računati z enotami, na primer pri hitrosti $v = \dfrac{s}{t}$.

Električni tok je osnova skoraj vsega, kar uporabljaš: telefona, svetilke, polnilnika, štedilnika. Če razumeš tok, upor in Ohmov zakon, lahko izračunaš, koliko toka steče skozi žarnico, zakaj se polnilnik segreje ali zakaj mora biti pri istem aparatu upor ustrezen, da se ne pokvari. To je tudi temelj za vse nadaljnje učenje o električnih vezjih.

## Razlaga

**1. Električni tok.** Električni tok je urejeno gibanje nabitih delcev. V kovinskem vodniku se gibljejo prosti elektroni. Električni tok $I$ povemo s tem, koliko naboja steče skozi presek vodnika v določenem času:

$$I = \frac{e}{t}$$

Pri tem je $e$ naboj, ki steče skozi presek vodnika v času $t$. Enota za tok je **amper** ($\mathrm{A}$). Velja $1\,\mathrm{A} = 1\,\dfrac{\mathrm{As}}{\mathrm{s}}$, torej $1\,\mathrm{A}$ pomeni, da v vsaki sekundi steče $1\,\mathrm{As}$ naboja. Enota za naboj je amperska sekunda ($\mathrm{As}$).

**2. Smer toka.** Po dogovoru je smer toka od plusa proti minusu vira. Elektroni se v resnici gibljejo v nasprotno smer, vendar to za računanje ni pomembno.

**3. Napetost.** Da steče tok, mora vir (baterija, vtičnica) ustvariti **električno napetost** $U$. Napetost si lahko predstavljaš kot »potisk«, ki žene naboje po krogu. Enota je **volt** ($\mathrm{V}$). Napetost merimo z voltmetrom, ki ga vežemo **vzporedno** k porabniku. Tok merimo z ampermetrom, ki ga vežemo **zaporedno**, torej v isto vejo vezja.

**4. Električni upor.** Vodnik se toku upira, ker se elektroni na poti zaletavajo v atome. Ta lastnost se imenuje **električni upor** $R$. Enota je **ohm** ($\Omega$). Večji ko je upor, manjši tok steče pri isti napetosti.

**5. Ohmov zakon.** Pri kovinskih vodnikih pri stalni temperaturi je tok sorazmeren z napetostjo:

$$U = I \cdot R \qquad \Rightarrow \qquad I = \frac{U}{R}, \quad R = \frac{U}{I}$$

Velja $1\,\Omega = 1\,\dfrac{\mathrm{V}}{\mathrm{A}}$. Če napetost podvojimo, se pri enakem uporu podvoji tudi tok. Če pri enaki napetosti podvojimo upor, se tok razpolovi.

**6. Od česa je odvisen upor žice.** Upor je večji, če je žica daljša, in manjši, če je debelejša. Odvisen je tudi od snovi (baker prevaja bolje kot železo).

**7. Grafična predstavitev.** Če za kovinski upornik narišemo graf $I(U)$, dobimo premico skozi koordinatno izhodišče. Strmejša ko je premica, manjši je upor.

## Rešeni primeri

### Primer 1: tok iz naboja in časa

Skozi presek vodnika steče v $20\,\mathrm{s}$ naboj $60\,\mathrm{As}$. Kolikšen je tok?

1. Uporabimo definicijo toka: $I = \dfrac{e}{t}$. Zakaj: tok pove, koliko naboja steče v eni sekundi.
2. Vstavimo: $I = \dfrac{60\,\mathrm{As}}{20\,\mathrm{s}} = 3\,\mathrm{A}$.
3. Preverimo enote: $\dfrac{\mathrm{As}}{\mathrm{s}} = \mathrm{A}$. ✓

### Primer 2: Ohmov zakon

Na žarnico z uporom $R = 46\,\Omega$ priključimo napetost $U = 230\,\mathrm{V}$. Kolikšen tok teče skozi njo?

1. Poznamo $U$ in $R$, iščemo $I$. Zakaj: Ohmov zakon povezuje vse tri količine, zato ga preoblikujemo za tok: $I = \dfrac{U}{R}$.
2. Vstavimo: $I = \dfrac{230\,\mathrm{V}}{46\,\Omega} = 5\,\mathrm{A}$.
3. Preverimo smiselnost: pri $230\,\mathrm{V}$ in $5\,\mathrm{A}$ bi bil upor res $\dfrac{230}{5} = 46\,\Omega$. ✓

### Primer 3: izračun upora in vpliv napetosti (težji)

Skozi upornik teče tok $0{,}40\,\mathrm{A}$, ko je priključen na napetost $12\,\mathrm{V}$. a) Kolikšen je upor? b) Kolikšen tok bo tekel, če napetost povečamo na $18\,\mathrm{V}$ (upor se ne spremeni)?

**a)**
1. Iščemo upor: $R = \dfrac{U}{I}$. Zakaj: upor je razmerje med napetostjo in tokom.
2. $R = \dfrac{12\,\mathrm{V}}{0{,}40\,\mathrm{A}} = 30\,\Omega$.

**b)**
1. Upor je ostal $30\,\Omega$, zato spet uporabimo $I = \dfrac{U}{R}$. Zakaj: upor je lastnost upornika in se pri spremembi napetosti ne spremeni.
2. $I = \dfrac{18\,\mathrm{V}}{30\,\Omega} = 0{,}60\,\mathrm{A}$.
3. Preverimo: napetost se je povečala za faktor $\dfrac{18}{12} = 1{,}5$, tok pa tudi: $0{,}40 \cdot 1{,}5 = 0{,}60\,\mathrm{A}$. ✓ To je sorazmernost iz Ohmovega zakona.

## Pogoste napake

- **Zamenjava formul.** Napačno zapišeš $I = R/U$ ali $R = I/U$. Pomagaj si s trikotnikom: $U$ je zgoraj, $I$ in $R$ spodaj. Prekrij količino, ki jo iščeš.
- **Upor ni odvisen od napetosti in toka.** Če napetost podvojimo, se upor kovinskega upornika ne spremeni. Spremeni se tok.
- **Zamenjane meritve.** Ampermeter vežeš vzporedno ali voltmeter zaporedno. Pravilo: ampermeter zaporedno, voltmeter vzporedno.
- **Enote.** Pri računanju ne pozabi na pretvorbo, npr. $250\,\mathrm{mA} = 0{,}25\,\mathrm{A}$ in $2\,\mathrm{k\Omega} = 2000\,\Omega$.
- **Smer toka.** Mislimo, da tok teče od minusa proti plusu. Dogovorjena smer toka je od plusa proti minusu, čeprav elektroni potujejo v nasprotno smer.

## Povzetek

- Električni tok je urejeno gibanje nabojev: $I = \dfrac{e}{t}$, enota amper ($\mathrm{A}$).
- Napetost ($\mathrm{V}$) žene tok, upor ($\Omega$) mu nasprotuje.
- Ohmov zakon: $U = I \cdot R$, torej $I = \dfrac{U}{R}$ in $R = \dfrac{U}{I}$.
- Pri kovinskih upornikih je tok sorazmeren z napetostjo, graf $I(U)$ je premica skozi izhodišče.
- Ampermeter vežemo zaporedno, voltmeter vzporedno.

## Drugače: Na sliki

V demonstraciji »Ohmov zakon v električnem krogu« zgoraj lahko spreminjaš napetost vira in upor ter opazuješ, kako se spremeni tok.

Poskusi tole:

- Upor ohrani stalen, napetost povečuj. Tok raste v enakem razmerju. Če napetost podvojiš, se podvoji tudi tok.
- Napetost ohrani stalno, upor povečuj. Tok se zmanjšuje. Če upor podvojiš, se tok razpolovi.

Predstavljaj si krog kot vodno cev. Črpalka je baterija (potisk je napetost), voda je naboj, ozek del cevi pa je upor. Ožja ko je cev, manj vode steče pri enakem potisku.

Če narišeš graf $I(U)$ za upornik, dobiš premico skozi izhodišče. Pri večjem uporu je premica položnejša, ker pri isti napetosti steče manjši tok.

## Drugače: Iz vsakdanjega življenja

**Polnilnik in žarnica.** Na ohišju polnilnikov piše napetost in največji tok, na primer $5\,\mathrm{V}$ in $2\,\mathrm{A}$. Naprava, ki jo polniš, določi, koliko toka dejansko vzame.

**Zakaj se podaljški segrevajo.** Dolga tanka žica ima večji upor kot kratka debela. Pri velikem toku se zato bolj segreje. Zato so kabli za štedilnik debelejši kot kabli za svetilko.

**Električna varnost.** Človeško telo ima velik upor, vendar pri visoki napetosti steče skozi telo lahko nevaren tok. Ohmov zakon pove, da je tok pri enakem uporu večji, če je napetost večja. Zato je omrežna napetost nevarnejša kot napetost baterije v svetilki.

**Vodna analogija.** Napetost je višinska razlika vode (razlika tlakov), tok je količina vode, ki steče v sekundi, upor pa ozka ali zamašena cev.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo z Ohmovim zakonom:

1. Izpiši, kaj poznaš in kaj iščeš: npr. $U = 9\,\mathrm{V}$, $R = 30\,\Omega$, iščemo $I$.
2. Pretvori enote v $\mathrm{V}$, $\mathrm{A}$, $\Omega$.
3. Izberi obliko enačbe: iščeš tok, uporabi $I = \dfrac{U}{R}$.
4. Vstavi številke z enotami: $I = \dfrac{9\,\mathrm{V}}{30\,\Omega} = 0{,}30\,\mathrm{A}$.
5. Preveri smiselnost: pri večjem uporu mora biti tok manjši.

Tabela za stalno napetost $U = 12\,\mathrm{V}$:

| $R\,[\Omega]$ | $I = U/R\,[\mathrm{A}]$ |
|---|---|
| 6 | 2 |
| 12 | 1 |
| 24 | 0,5 |
| 48 | 0,25 |

Upor se vsakič podvoji, tok pa se vsakič razpolovi. To je obratna sorazmernost med $I$ in $R$ pri stalni napetosti.

Tabela za stalen upor $R = 10\,\Omega$:

| $U\,[\mathrm{V}]$ | $I = U/R\,[\mathrm{A}]$ |
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

? Skozi žarnico steče v $5\,\mathrm{s}$ naboj $10\,\mathrm{As}$. Kolikšen je tok?
- $50\,\mathrm{A}$
+ $2\,\mathrm{A}$
- $0{,}5\,\mathrm{A}$
- $15\,\mathrm{A}$
> Tok je naboj na enoto časa: $I = \dfrac{10\,\mathrm{As}}{5\,\mathrm{s}} = 2\,\mathrm{A}$. Odgovor $50\,\mathrm{A}$ dobiš, če naboj in čas pomnožiš, $0{,}5\,\mathrm{A}$ pa, če ju deliš narobe.

? Upornik z uporom $20\,\Omega$ je priključen na napetost $10\,\mathrm{V}$. Kolikšen tok teče skozi njega?
- $200\,\mathrm{A}$
- $2\,\mathrm{A}$
+ $0{,}5\,\mathrm{A}$
> $I = \dfrac{U}{R} = \dfrac{10\,\mathrm{V}}{20\,\Omega} = 0{,}5\,\mathrm{A}$. Odgovora $200\,\mathrm{A}$ in $2\,\mathrm{A}$ dobiš, če množiš ali če deliš v napačnem vrstnem redu.

? Pri stalnem uporu napetost na kovinskem uporniku podvojimo. Kaj se zgodi s tokom?
- Tok se razpolovi.
- Tok ostane enak.
+ Tok se podvoji.
> Po Ohmovem zakonu je $I = \dfrac{U}{R}$. Pri stalnem $R$ je tok premo sorazmeren z napetostjo, zato se z napetostjo podvoji tudi tok.
