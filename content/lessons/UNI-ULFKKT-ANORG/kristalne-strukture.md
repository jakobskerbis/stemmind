---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Kovček za let ima prostornino $40\,\mathrm{L}$. Recimo, da ga napolniš z enakimi frnikolami. Če jih samo stresaš, zasedejo okoli $64\,\%$ prostora, torej približno $25{,}6\,\mathrm{L}$. Če jih skrbno zložiš v plasti, kot so zložene pomaranče na stojnici, zasedejo največ $74\,\%$, to je $29{,}6\,\mathrm{L}$. Več ne gre, pa naj se še tako trudiš. Da je to res meja, je slutil že astronom Johannes Kepler, dokazali pa so jo šele s pomočjo računalnika.

Atomi v kovini imajo isto težavo. Železni meteorit je večinoma iz zlitine železa in niklja. Z rentgensko difrakcijo izmerimo razdalje med atomi v njem, ne da bi ga tehtali. Iz teh razdalj lahko izračunamo gostoto, polmer atoma in delež praznega prostora. Pri ionskih snoveh, kot je halit ($\mathrm{NaCl}$), ki so ga našli tudi v meteoritih, pa iz razdalj sklepamo na velikost ionov.

## Razlaga

**Molekula proti kristalu.** Molekula $\mathrm{CH_4}$ ima točno določeno število atomov: pet. Kristal diamanta ali železa pa nima »končne« formule. Isti vzorec atomov se ponavlja v treh smereh, dokler se kristal ne konča. Zato kristala ne opišemo atom za atomom, ampak opišemo najmanjši del, ki se ponavlja.

**Osnovna celica.** To je paralelepiped, iz katerega z zlaganjem (brez vrtenja) zgradimo cel kristal. Izberemo najmanjšega, ki še kaže vso simetrijo kristala; pri kubičnih celicah spodaj je to kocka, čeprav bi obstajala še manjša, poševna celica. Pri kubičnih celicah jo opiše ena dolžina, **mrežni parameter** $a$ (rob kocke). Tipične vrednosti so nekaj sto pikometrov ($1\,\mathrm{pm} = 10^{-12}\,\mathrm{m}$).

**Kdo si deli atome.** Atom v oglišču si deli osem celic, zato pripada eni celici le $\tfrac18$ atoma. Na ploskvi si atom delita dve celici, na robu štiri.

| položaj atoma | delež v eni celici |
|---|---|
| oglišče | $\tfrac18$ |
| rob | $\tfrac14$ |
| ploskev | $\tfrac12$ |
| notranjost | $1$ |

Številu atomov (ali formulskih enot), ki v celoti pripadajo eni celici, rečemo $Z$.

**Tri kubične celice, zgrajene iz razlik.** Začnimo s **preprosto kubično** (sc): atomi le v ogliščih. $Z = 8 \cdot \tfrac18 = 1$. Atomi se dotikajo vzdolž roba, zato $a = 2r$. Vsak atom ima 6 najbližjih sosedov; temu številu rečemo **koordinacijsko število** (KŠ).

Zdaj dodajmo en atom v središče kocke. To je **telesno centrirana kubična** celica (bcc), $Z = 8 \cdot \tfrac18 + 1 = 2$. Stik je zdaj vzdolž **telesne diagonale** (dolga $a\sqrt3$), na kateri ležijo polmer, premer in polmer: $a\sqrt3 = 4r$. KŠ je 8.

Namesto središča lahko zapolnimo središča ploskev. To je **ploskovno centrirana kubična** celica (fcc): $Z = 8 \cdot \tfrac18 + 6 \cdot \tfrac12 = 4$. Stik je zdaj vzdolž **ploskovne diagonale**: $a\sqrt2 = 4r$. KŠ je 12. Enako gost je heksagonalni gost zlog (hcp); razlikujeta se le v zaporedju gosto zloženih plasti, kot so plasti pomaranč na stojnici (ABCABC proti ABAB).

:::premisli
Pri sc velja $a = 2r$. Napovej, zakaj ta zveza pri bcc ne velja več, čeprav so v ogliščih isti atomi.
---
Ker sredinski atom stoji med oglišči in jih razmakne. Atoma v sosednjih ogliščih se ne dotikata, razdalja med njima je večja od $2r$. Dotikajo se le atomi na telesni diagonali, zato velja $a\sqrt3 = 4r$.
:::

**Gostota zloga.** To je delež prostornine celice, ki ga zasedajo atomi:

$$f = \frac{Z \cdot \tfrac43 \pi r^3}{a^3}$$

Ko vstavimo zvezo med $a$ in $r$, se $r$ pokrajša. Gostota zloga je odvisna le od vrste celice, ne od velikosti atomov:

| celica | $Z$ | KŠ | $f$ |
|---|---|---|---|
| sc | 1 | 6 | $0{,}524$ |
| bcc | 2 | 8 | $0{,}680$ |
| fcc, hcp | 4 | 12 | $0{,}740$ |

Vrednost $0{,}74$ je natanko meja s frnikolami iz uvoda.

**Gostota snovi.** Masa ene celice je $Z \cdot M / N_\mathrm{A}$, njena prostornina $a^3$. Zato

$$\rho = \frac{Z \cdot M}{N_\mathrm{A} \cdot a^3}$$

Ker je $a$ v pikometrih, ga pred kubiranjem pretvori v centimetre: $1\,\mathrm{pm} = 10^{-10}\,\mathrm{cm}$.

**Ionski kristal proti kovini.** V kovini so vsi delci enaki. V ionskem kristalu sta dve vrsti delcev z nasprotnim nabojem in pogosto različno velikostjo. Večji anioni tvorijo ogrodje, manjši kationi sedijo v praznih prostorih (**luknjah** oziroma prazninah) med njimi. Kateri sosedje so okoli iona, določa razmerje polmerov $r_+/r_-$:

| $r_+/r_-$ | KŠ | primer |
|---|---|---|
| $0{,}225$ do $0{,}414$ | 4 | $\mathrm{ZnS}$ (sfalerit) |
| $0{,}414$ do $0{,}732$ | 6 | $\mathrm{NaCl}$, $\mathrm{MgO}$ |
| nad $0{,}732$ | 8 | $\mathrm{CsCl}$ |

V **strukturi NaCl** ioni $\mathrm{Cl^-}$ tvorijo fcc, ioni $\mathrm{Na^+}$ pa zapolnijo vse **oktaedrske luknje** (vsako obdaja šest anionov v ogliščih oktaedra): središča robov in središče kocke. Ionov $\mathrm{Na^+}$ je $12 \cdot \tfrac14 + 1 = 4$, ionov $\mathrm{Cl^-}$ prav tako 4. Torej $Z = 4$ formulske enote. Kation in anion se dotikata vzdolž roba: $a = 2(r_+ + r_-)$.

V **strukturi CsCl** so ioni $\mathrm{Cl^-}$ v ogliščih, en $\mathrm{Cs^+}$ pa v središču. $Z = 1$, KŠ je 8, stik vzdolž telesne diagonale: $a\sqrt3 = 2(r_+ + r_-)$.

:::premisli
Celica CsCl je na pogled enaka celici bcc. Zakaj kristalografi pravijo, da CsCl **ni** telesno centriran?
---
Pri bcc mora biti delec v središču enak delcem v ogliščih, da celico premaknemo za pol diagonale in dobimo isto sliko. V CsCl je v središču $\mathrm{Cs^+}$, v ogliščih $\mathrm{Cl^-}$. Mreža je zato preprosta kubična z dvema ionoma na mrežno točko.
:::

## Rešeni primeri

### Primer 1 (lažji): polmer atoma v meteoritu

Kamacit, glavni mineral železnih meteoritov, ima strukturo $\alpha$-železa: bcc z $a = 286{,}6\,\mathrm{pm}$. Koliko atomov je v osnovni celici in kolikšen je polmer atoma?

**Podatki:** bcc, $a = 286{,}6\,\mathrm{pm}$
**Iščemo:** $Z$ in polmer $r$

:::formula
$Z = 8 \cdot \tfrac18 + 1$, $\quad a\sqrt3 = 4r \Rightarrow r = \dfrac{a\sqrt3}{4}$
:::

**Rešitev:**

1. Oglišča prispevajo $8 \cdot \tfrac18 = 1$ atom, središče še enega: $Z = 2$.
2. Atomi se dotikajo na telesni diagonali, zato vzamemo $a\sqrt3 = 4r$.
3. $r = \dfrac{286{,}6\,\mathrm{pm} \cdot \sqrt3}{4} \approx 124{,}1\,\mathrm{pm}$.
4. Odgovor: v celici sta 2 atoma železa, polmer atoma je približno $124\,\mathrm{pm}$.

### Primer 2: gostota iz mrežnega parametra

Izračunaj gostoto kamacita iz primera 1, če ga obravnavamo kot čisto železo.

**Podatki:** $Z = 2$, $a = 286{,}6\,\mathrm{pm}$, $M(\mathrm{Fe}) = 55{,}85\,\mathrm{g/mol}$, $N_\mathrm{A} = 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}}$
**Iščemo:** gostoto $\rho$

:::formula
$\rho = \dfrac{Z \cdot M}{N_\mathrm{A} \cdot a^3}$
:::

**Rešitev:**

1. Pretvorimo: $a = 286{,}6 \cdot 10^{-10}\,\mathrm{cm} = 2{,}866 \cdot 10^{-8}\,\mathrm{cm}$.
2. Prostornina celice: $a^3 \approx 2{,}354 \cdot 10^{-23}\,\mathrm{cm^3}$.
3. Masa v celici: $Z \cdot M = 2 \cdot 55{,}85 = 111{,}7\,\mathrm{g/mol}$.
4. Imenovalec: $6{,}022 \cdot 2{,}354 \approx 14{,}18$ (potenci $10^{23}$ in $10^{-23}$ se pokrajšata).
5. $\rho \approx \dfrac{111{,}7}{14{,}18}\,\mathrm{g/cm^3} \approx 7{,}88\,\mathrm{g/cm^3}$.
6. Odgovor: gostota je približno $7{,}88\,\mathrm{g/cm^3}$, kar se ujema s tabelirano gostoto železa ($7{,}87\,\mathrm{g/cm^3}$).

### Primer 3 (težji): velikost iona iz gostote

Halit iz meteorita ima gostoto $2{,}165\,\mathrm{g/cm^3}$ in strukturo NaCl. Polmer iona $\mathrm{Cl^-}$ je $181\,\mathrm{pm}$. Kolikšen je mrežni parameter in kolikšen polmer iona $\mathrm{Na^+}$? Ali razmerje polmerov ustreza KŠ 6?

**Podatki:** $\rho = 2{,}165\,\mathrm{g/cm^3}$, $M(\mathrm{NaCl}) = 58{,}44\,\mathrm{g/mol}$, $Z = 4$, $r_- = 181\,\mathrm{pm}$, $N_\mathrm{A} = 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}}$
**Iščemo:** $a$, $r_+$ in $r_+/r_-$

:::formula
$a^3 = \dfrac{Z \cdot M}{N_\mathrm{A} \cdot \rho}$, $\quad a = 2(r_+ + r_-)$
:::

**Rešitev:**

1. Obrnemo enačbo za gostoto: $a^3 = \dfrac{4 \cdot 58{,}44}{6{,}022 \cdot 10^{23} \cdot 2{,}165}\,\mathrm{cm^3} \approx 1{,}793 \cdot 10^{-22}\,\mathrm{cm^3}$.
2. Kubični koren: $a \approx 5{,}639 \cdot 10^{-8}\,\mathrm{cm} = 563{,}9\,\mathrm{pm}$.
3. Ioni se dotikajo vzdolž roba, zato $r_+ + r_- = \dfrac{a}{2} \approx 281{,}9\,\mathrm{pm}$.
4. $r_+ = 281{,}9\,\mathrm{pm} - 181\,\mathrm{pm} = 100{,}9\,\mathrm{pm}$.
5. Razmerje: $\dfrac{r_+}{r_-} \approx \dfrac{101}{181} \approx 0{,}56$; leži med $0{,}414$ in $0{,}732$.
6. Odgovor: $a \approx 564\,\mathrm{pm}$, $r(\mathrm{Na^+}) \approx 101\,\mathrm{pm}$; razmerje $0{,}56$ res ustreza KŠ 6.

### Primer 4 – zdaj ti

$\mathrm{CsCl}$ ima mrežni parameter $a = 412{,}3\,\mathrm{pm}$, polmer $\mathrm{Cl^-}$ je $181\,\mathrm{pm}$. Kolikšen je polmer $\mathrm{Cs^+}$ in ali razmerje polmerov ustreza KŠ 8?

**Podatki:** struktura CsCl, $a = 412{,}3\,\mathrm{pm}$, $r_- = 181\,\mathrm{pm}$
**Iščemo:** $r_+$ in $r_+/r_-$

:::formula
$a\sqrt3 = 2(r_+ + r_-)$
:::

**Rešitev:**

1. Stik je vzdolž telesne diagonale, ker je $\mathrm{Cs^+}$ v središču kocke.
2. $r_+ + r_- = \dfrac{a\sqrt3}{2} \approx 357{,}1\,\mathrm{pm}$.
3. Izračunaj $r_+$ in razmerje sam, nato preveri:

:::premisli
Koliko je $r_+$ in kakšno je razmerje $r_+/r_-$?
---
$r_+ \approx 357{,}1 - 181 = 176\,\mathrm{pm}$, razmerje $\approx 0{,}97$. To je nad $0{,}732$, zato KŠ 8 ustreza.
:::

## Pogoste napake

- **Štetje narisanih krogel.** Na sliki fcc je 14 krogel, zato »$Z = 14$«. Napaka: oglišča in ploskve si celica deli s sosedi. Prav: utež vsakega položaja ($\tfrac18$, $\tfrac14$, $\tfrac12$, $1$), za fcc $Z = 4$.
- **Povsod $a = 2r$.** Velja le za sc. Pri bcc in fcc se oglišča ne dotikajo. Prav: najprej poišči premico, na kateri se krogle res dotikajo (rob, ploskovna ali telesna diagonala).
- **CsCl je bcc.** Slika je podobna, a v središču je drug ion. Prav: mreža je preprosta kubična, $Z = 1$ formulska enota.
- **Pikometri naravnost v formulo.** Kdor vstavi $a = 286{,}6$ in deli z $a^3$ brez pretvorbe, dobi gostoto, napačno za faktor $10^{30}$. Prav: $1\,\mathrm{pm} = 10^{-10}\,\mathrm{cm}$, šele nato kubiraj.
- **Večji atomi, gostejši zlog.** Napačno: $r$ se v $f$ pokrajša. Prav: $f$ določa le geometrija celice; velikost atomov vpliva na gostoto $\rho$, ne na $f$.

## Povzetek

- Osnovna celica je najmanjši del s polno simetrijo kristala, ki z zlaganjem da cel kristal; kubično opiše rob $a$.
- Deleži: oglišče $\tfrac18$, rob $\tfrac14$, ploskev $\tfrac12$, notranjost $1$.
- sc: $Z=1$, $a=2r$, KŠ 6, $f=0{,}524$. bcc: $Z=2$, $a\sqrt3=4r$, KŠ 8, $f=0{,}680$. fcc/hcp: $Z=4$, $a\sqrt2=4r$, KŠ 12, $f=0{,}740$.
- Gostota: $\rho = Z M/(N_\mathrm{A} a^3)$, $a$ v cm.
- Ionski kristali: razmerje $r_+/r_-$ določa KŠ (4, 6, 8). NaCl: fcc anionov, kationi v oktaedrskih luknjah, $Z=4$, $a = 2(r_+ + r_-)$. CsCl: preprosta kubična, $Z=1$, $a\sqrt3 = 2(r_+ + r_-)$.

## Drugače: Na sliki

Nariši kvadrat, to je ena ploskev kocke fcc. V vsak vogal nariši četrtino kroga, v sredino cel krog. Vse se dotikajo vzdolž diagonale:

```
◔─────────◕
│ \     / │
│   (●)   │
│ /     \ │
◕─────────◔
```

Na diagonali naštej: polmer (vogal), premer (sredina), polmer (vogal). Skupaj $4r$, diagonala pa je $a\sqrt2$. Pri bcc isto naredi v prerezu skozi telesno diagonalo: pravokotnik s stranicama $a$ in $a\sqrt2$, njegova diagonala je $a\sqrt3$.

Za NaCl si predstavljaj šahovnico v treh razsežnostih: polja se izmenjujejo, $\mathrm{Na^+}$ in $\mathrm{Cl^-}$, v vseh smereh. Vsak ion ima tako 6 sosedov druge vrste: levo, desno, spredaj, zadaj, zgoraj, spodaj.

## Drugače: Iz vsakdanjega življenja

Na tržnici so pomaranče v spodnji plasti zložene v šestkotniški vzorec. Vsaka pomaranča druge plasti leži v jamici med tremi spodnjimi. Ko tretja plast ne leži točno nad prvo, dobiš fcc; ko leži točno nad njo, hcp. V obeh primerih ima vsaka pomaranča 12 sosedov: 6 v svoji plasti, 3 zgoraj in 3 spodaj.

Če bi pomaranče postavil v ravne vrste, eno natanko nad drugo (sc), bi vsaka imela le 6 sosedov in med njimi bi ostalo skoraj pol zaboja praznega. Atomi kovine »zlagajo« podobno, ker več sosedov pomeni več vezi in nižjo energijo.

Ionski kristal je kot zaboj z dvema vrstama sadja, velikimi grenivkami in majhnimi mandarinami. Mandarine se skrijejo v vrzeli med grenivkami. Kako velika vrzel je potrebna, je odvisno od razmerja velikosti, natanko kot pri $r_+/r_-$.

## Drugače: Bolj natančno

Izpeljava gostote zloga: v $f = Z \cdot \tfrac43\pi r^3 / a^3$ vstavimo $r$, izražen z $a$.

- sc: $r = a/2$, $f = 1 \cdot \tfrac43\pi \tfrac{a^3}{8} / a^3 = \tfrac{\pi}{6} \approx 0{,}524$.
- bcc: $r = a\sqrt3/4$, $f = 2 \cdot \tfrac43\pi \tfrac{3\sqrt3\,a^3}{64} / a^3 = \tfrac{\pi\sqrt3}{8} \approx 0{,}680$.
- fcc: $r = a\sqrt2/4$, $f = 4 \cdot \tfrac43\pi \tfrac{2\sqrt2\,a^3}{64} / a^3 = \tfrac{\pi}{3\sqrt2} \approx 0{,}740$.

V vsaki vrstici se $a^3$ pokrajša, zato $f$ ni odvisna od velikosti atomov.

## Preveri se

? Katera vrstica opisuje ploskovno centrirano kubično celico (fcc)?
- $Z = 14$, KŠ 12, $f = 0{,}74$
~ 14 je število narisanih krogel. Oglišča in ploskve si celica deli s sosedi, zato je $Z = 4$.
- $Z = 2$, KŠ 8, $f = 0{,}68$
~ To je telesno centrirana celica (bcc), z atomom v središču kocke.
+ $Z = 4$, KŠ 12, $f = 0{,}74$
- $Z = 4$, KŠ 6, $f = 0{,}52$
~ KŠ 6 in $f = 0{,}52$ sodita k preprosti kubični celici, kjer se atomi dotikajo le vzdolž robov.
> fcc: $8 \cdot \tfrac18 + 6 \cdot \tfrac12 = 4$ atomi, vsak ima 12 najbližjih sosedov, zasedenega je $74\,\%$ prostora.

? Kalij kristalizira v bcc. Približno kolikšen del prostornine kristala je prazen?
- Približno $26\,\%$
~ To velja za najgostejši zlog (fcc, hcp). bcc je manj gost.
+ Približno $32\,\%$
- Približno $68\,\%$
~ $68\,\%$ je delež, ki ga atomi **zasedajo**, ne prazen del.
- Odvisno od polmera atoma kalija, brez njega ne moremo oceniti.
~ Polmer se v gostoti zloga pokrajša; $f$ je odvisna le od vrste celice.
> Za bcc je $f \approx 0{,}68$, prazen je torej $1 - 0{,}68 = 0{,}32$, približno tretjina prostora.

? Zakaj v osnovni celici bcc atomi v sosednjih ogliščih niso v stiku?
- Ker se atomi v kovini med seboj odbijajo in vedno ohranjajo razmik.
~ V kovinah so atomi tesno skupaj; razmik med oglišči je posledica geometrije, ne odboja.
+ Ker jih atom v središču razmakne: dotikajo se le vzdolž telesne diagonale.
- Ker je mrežni parameter vedno enak $2r$, kar je premalo za stik.
~ $a = 2r$ velja za preprosto kubično celico, kjer se oglišča **dotikajo**. Pri bcc je $a = 4r/\sqrt3 > 2r$.
> Na telesni diagonali ležijo polmer, premer in polmer: $a\sqrt3 = 4r$. Zato je $a > 2r$ in oglišča se ne dotikajo.

? Baker ima celico fcc z $a = 361{,}5\,\mathrm{pm}$. Kolikšen je polmer atoma bakra?
- $180{,}8\,\mathrm{pm}$
~ To je $a/2$, kot da bi se atomi dotikali vzdolž roba (sc). Pri fcc je stik na ploskovni diagonali.
- $156{,}5\,\mathrm{pm}$
~ To je $a\sqrt3/4$, formula za bcc. Baker ima fcc.
+ $127{,}8\,\mathrm{pm}$
- $255{,}6\,\mathrm{pm}$
~ To je $a\sqrt2/2$, polovica ploskovne diagonale. Na diagonali so štirje polmeri, ne dva.
> $a\sqrt2 = 4r$, zato $r = \dfrac{361{,}5\,\mathrm{pm} \cdot \sqrt2}{4} \approx 127{,}8\,\mathrm{pm}$.

? Na površju Marsa so našli minerale, med njimi okside. $\mathrm{MgO}$ ima strukturo NaCl. Koliko ionov $\mathrm{Mg^{2+}}$ in koliko $\mathrm{O^{2-}}$ pripada eni osnovni celici?
- 14 in 13
~ To so vse narisane krogle. Oglišča, robovi in ploskve si celica deli s sosednjimi celicami.
- 6 in 6
~ 6 je koordinacijsko število (sosedje enega iona), ne število ionov v celici.
+ 4 in 4
- 1 in 1
~ En par ionov na celico ima struktura CsCl. NaCl temelji na fcc, ki ima 4 mrežne točke.
> Anioni: $8 \cdot \tfrac18 + 6 \cdot \tfrac12 = 4$. Kationi: $12 \cdot \tfrac14 + 1 = 4$. Torej $Z = 4$ formulske enote $\mathrm{MgO}$.

:::simboli
f | gostota zloga (delež zapolnjene prostornine) | f = \frac{Z \cdot \tfrac43 \pi r^3}{a^3} | – | odvisna le od vrste celice
Z | število atomov (formulskih enot) v celici | | – | npr. telesno centrirana kocka: Z = 2
r | polmer atoma | | pm | bcc: a√3 = 4r
r_+ | polmer kationa | | pm
r_- | polmer aniona | | pm
a | mrežni parameter (rob kocke) | | pm | 1 pm = 10⁻¹⁰ cm
\rho | gostota snovi | \rho = \dfrac{Z \cdot M}{N_\mathrm{A} \cdot a^3} | g/cm^3
M | molska masa | | g/mol
N_\mathrm{A} | Avogadrova konstanta | | 1/mol | 6,022 · 10²³ mol⁻¹
:::
