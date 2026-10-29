---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Poglej svoji roki. Imata enake prste v enakem vrstnem redu, pa vendar leve rokavice ne moreš udobno obleči na desno roko. Leva roka je zrcalna slika desne, a ju ne moreš prekriti.

Enako velja za mnoge molekule. Karvon ima eno samo formulo $\mathrm{C_{10}H_{14}O}$ in enako vezane atome. Ena oblika diši po meti, njena zrcalna slika po kumini. Nosni receptorji so iz kiralnih proteinov, zato ju ločijo, kot rokavica loči roki.

Pri zdravilih je razlika lahko usodna: ena oblika zdravi, zrcalna je neučinkovita ali škodljiva.

## Razlaga

**1. Vrste izomerov.** Izomeri imajo enako molekulsko formulo. **Konstitucijski izomeri** imajo atome povezane v drugačnem vrstnem redu (butan-1-ol in butan-2-ol). **Stereoizomeri** imajo enako povezane atome, razlikujejo pa se v razporeditvi v prostoru. Delimo jih na enantiomere in diastereomere.

**2. Kiralnost.** Predmet je **kiralen**, če ga ne moremo prekriti z njegovo zrcalno sliko (roka, vijak). **Akiralen** predmet se s svojo zrcalno sliko prekrije (žlica, kozarec). Akiralna molekula ima navadno **zrcalno ravnino**, ki jo deli na dve zrcalni polovici.

**3. Stereocenter.** Iz prejšnjih poglavij veš, da ima ogljik $sp^3$ štiri vezi v tetraedru. Če so na tak ogljik vezane **štiri različne skupine**, je ogljik **stereocenter** (kiralni center). Molekula z enim stereocentrom je vedno kiralna.

Primer: v butan-2-olu $\mathrm{CH_3CH(OH)CH_2CH_3}$ ima C2 skupine $-\mathrm{H}$, $-\mathrm{OH}$, $-\mathrm{CH_3}$ in $-\mathrm{CH_2CH_3}$. Vse štiri so različne, zato je C2 stereocenter. V propan-2-olu sta na C2 dve skupini $-\mathrm{CH_3}$, zato C2 ni stereocenter in molekula je akiralna.

**4. Enantiomera.** Dve molekuli, ki sta zrcalni sliki in se ne prekrijeta, sta **enantiomera**. Imata enako tališče, vrelišče, topnost in gostoto. Razlikujeta se v dveh stvareh:

- vrtita ravnino **linearno polarizirane svetlobe** za enak kot v nasprotni smeri; to je **optična aktivnost**;
- drugače reagirata z drugimi kiralnimi molekulami (encimi, receptorji).

Zmes enakih količin obeh enantiomerov je **racemat**. Je optično neaktivna, ker se vrtenji izničita.

**5. Specifična rotacija.** Kot zasuka $\alpha$ merimo s polarimetrom. Odvisen je od dolžine kivete $l$ (v dm) in masne koncentracije $c$ (v g/mL). Lastnost snovi je **specifična rotacija**:

$$[\alpha] = \frac{\alpha}{l \cdot c}$$

Predznak $(+)$ pomeni vrtenje v desno, $(-)$ v levo. Ta predznak se meri, ne razbere se iz formule.

**6. Pravila CIP za prioriteto.** Da konfiguracijo poimenujemo, skupinam na stereocentru najprej določimo prioriteto (pravila Cahna, Ingolda in Preloga):

1. Primerjamo atome, ki so **neposredno** vezani na stereocenter. Višje vrstno število pomeni višjo prioriteto: $\mathrm{Br} > \mathrm{Cl} > \mathrm{O} > \mathrm{N} > \mathrm{C} > \mathrm{H}$.
2. Če sta atoma enaka, primerjamo **trojici atomov**, vezanih nanju, urejeni od najvišjega. Odločilna je prva razlika. $-\mathrm{CH_2OH}$ ima trojico (O, H, H), $-\mathrm{CH(CH_3)_2}$ pa (C, C, H). Ker je O $>$ C, zmaga $-\mathrm{CH_2OH}$, čeprav je manjša skupina.
3. Dvojna vez šteje, kot da je atom podvojen: $-\mathrm{CH{=}O}$ šteje kot (O, O, H).

**7. Konfiguracija R ali S.** Molekulo zavrtimo tako, da skupina z najnižjo prioriteto (4) kaže **stran od nas**. Nato sledimo skupinam $1 \to 2 \to 3$:

- v smeri urinega kazalca: **R** (lat. *rectus*, desno);
- v nasprotni smeri: **S** (lat. *sinister*, levo).

Na risbi s klini pomeni poln klin vez proti nam, črtkana vez pa vez stran od nas. Če je skupina 4 na črtkani vezi, smer odčitaš kar z risbe. Če je na klinu, odčitaš in rezultat **obrneš**.

:::premisli
Na modelu (R)-spojine zamenjaš mesti dveh skupin na stereocentru. Kakšno konfiguracijo dobiš? Kaj pa, če potem zamenjaš še drugi dve?
---
Ena zamenjava da (S), torej enantiomer. Druga zamenjava vrne (R). Vsaka zamenjava dveh skupin obrne smer $1 \to 2 \to 3$.
:::

**8. Diastereomeri.** Če ima molekula več stereocentrov, lahko nastanejo stereoizomeri, ki **niso** zrcalne slike. To so **diastereomeri**. Imajo različne fizikalne lastnosti: tališče, topnost, $R_f$ pri kromatografiji.

Pri $n$ stereocentrih je stereoizomerov največ $2^n$. Za dva stereocentra (npr. v 2-bromo-3-klorobutanu) so štiri kombinacije:

| | (2R,3R) | (2S,3S) | (2R,3S) |
|---|---|---|---|
| (2R,3R) | ista | enantiomer | diastereomer |
| (2S,3S) | enantiomer | ista | diastereomer |
| (2S,3R) | diastereomer | diastereomer | enantiomer |

Pravilo: če se obrnejo **vsi** stereocentri, dobiš enantiomer. Če se obrne le **del** njih, dobiš diastereomer.

:::premisli
Zmes dveh enantiomerov hočeš ločiti z destilacijo ali kristalizacijo. Ali bo šlo? Kaj pa zmes dveh diastereomerov?
---
Enantiomerov ne ločiš, ker imata enako vrelišče in topnost. Diastereomere ločiš, ker imajo različne fizikalne lastnosti. Zato enantiomere s kiralnim reagentom pretvorimo v diastereomere.
:::

**9. Spojine mezo.** Kadar sta oba konca molekule enaka, ima ena od kombinacij notranjo zrcalno ravnino. Taka **spojina mezo** ima stereocentre, a je akiralna in optično neaktivna. Zato je stereoizomerov manj kot $2^n$.

**10. Cis in trans.** Iz poglavja o vezeh veš, da okoli dvojne vezi ni prostega vrtenja. Zato sta *cis*- in *trans*-but-2-en dva stereoizomera, ki nista zrcalni sliki. Tudi to sta diastereomera: imata različno vrelišče.

## Rešeni primeri

### Primer 1 (lažji): iskanje stereocentrov

Katere od spojin 2-klorobutan, propan-2-ol in 3-metilheksan imajo stereocenter? Koliko stereoizomerov ima vsaka?

**Podatki:** 2-klorobutan $\mathrm{CH_3CHClCH_2CH_3}$, propan-2-ol $\mathrm{(CH_3)_2CHOH}$, 3-metilheksan $\mathrm{CH_3CH_2CH(CH_3)CH_2CH_2CH_3}$
**Iščemo:** stereocentre in število stereoizomerov

:::formula
Stereocenter: ogljik $sp^3$ s štirimi različnimi skupinami. Število stereoizomerov $\le 2^n$.
:::

**Rešitev:**

1. 2-klorobutan, C2: $-\mathrm{H}$, $-\mathrm{Cl}$, $-\mathrm{CH_3}$, $-\mathrm{CH_2CH_3}$. Štiri različne, torej stereocenter; $n = 1$, stereoizomera sta $2^1 = 2$.
2. Propan-2-ol, C2: $-\mathrm{H}$, $-\mathrm{OH}$ in dve $-\mathrm{CH_3}$. Dve skupini sta enaki, torej ni stereocentra in molekula je akiralna.
3. 3-metilheksan, C3: $-\mathrm{H}$, metil, etil, propil. Ogljikovodik, a vse štiri skupine so različne, zato je C3 stereocenter; stereoizomera sta $2$.
4. Odgovor: 2-klorobutan in 3-metilheksan imata po en stereocenter in obstajata kot dva enantiomera; propan-2-ol je akiralen.

### Primer 2: določanje konfiguracije

Na risbi butan-2-ola je C2 na sredini. Skupina $-\mathrm{OH}$ je zgoraj, $-\mathrm{CH_2CH_3}$ spodaj desno, $-\mathrm{CH_3}$ spodaj levo na polnem klinu, $-\mathrm{H}$ pa na črtkani vezi. Ali je to (R)- ali (S)-butan-2-ol?

**Podatki:** stereocenter C2; $-\mathrm{OH}$ zgoraj, $-\mathrm{CH_2CH_3}$ spodaj desno, $-\mathrm{CH_3}$ spodaj levo (klin), $-\mathrm{H}$ črtkano (stran od nas)
**Iščemo:** konfiguracijo R ali S

:::formula
Pravila CIP za prioriteto; skupina 4 stran od opazovalca; $1 \to 2 \to 3$ v smeri urinega kazalca je R, v nasprotni S.
:::

**Rešitev:**

1. Neposredno vezani atomi: O, C, C, H. Zato je $-\mathrm{OH}$ prva, $-\mathrm{H}$ četrta.
2. Med $-\mathrm{CH_2CH_3}$ (C, H, H) in $-\mathrm{CH_3}$ (H, H, H) odloči prvi atom v trojici: C $>$ H. Etil je druga, metil tretja skupina.
3. $-\mathrm{H}$ je na črtkani vezi, kaže stran od nas, zato smer beremo kar z risbe.
4. Od zgoraj ($-\mathrm{OH}$) do spodaj desno (etil) do spodaj levo (metil): to je smer urinega kazalca.
5. Odgovor: na risbi je (R)-butan-2-ol.

### Primer 3 (težji): vinska kislina in spojina mezo

Vinska kislina je 2,3-dihidroksibutandiojska kislina, $\mathrm{HOOC{-}CH(OH){-}CH(OH){-}COOH}$. Koliko stereoizomerov ima? Kateri je enantiomer in kateri diastereomer (2R,3R)-vinske kisline?

**Podatki:** $\mathrm{HOOC{-}CH(OH){-}CH(OH){-}COOH}$; stereocentra C2 in C3; konca molekule sta enaka
**Iščemo:** število stereoizomerov, enantiomer in diastereomer oblike (2R,3R)

:::formula
Največ $2^n$ stereoizomerov; mezo oblika (notranja zrcalna ravnina) zmanjša število. Obrat vseh centrov da enantiomer, obrat dela diastereomer.
:::

**Rešitev:**

1. C2 in C3 imata vsak $-\mathrm{H}$, $-\mathrm{OH}$, $-\mathrm{COOH}$ in preostanek molekule, torej $n = 2$.
2. Največje število kombinacij: $2^2 = 4$, torej (R,R), (S,S), (R,S), (S,R).
3. Ker sta konca enaka, ima (2R,3S) zrcalno ravnino med C2 in C3. Njena zrcalna slika (2S,3R) je ista molekula, zato je to ena sama oblika mezo.
4. Število različnih stereoizomerov: $4 - 1 = 3$.
5. Enantiomer (2R,3R) dobimo z obratom obeh centrov: (2S,3S). Diastereomer dobimo z obratom enega: oblika mezo.
6. Odgovor: vinska kislina ima tri stereoizomere. Enantiomer (2R,3R) je (2S,3S), diastereomer pa mezo-vinska kislina, ki je akiralna.

### Primer 4: zdaj ti

Raztopina vzorca kiralne spojine s koncentracijo $0{,}100\,\text{g/mL}$ v kiveti dolžine $1{,}00\,\text{dm}$ zasuka ravnino polarizirane svetlobe za $+2{,}40^\circ$. Čisti (S)-enantiomer ima $[\alpha] = +30{,}0^\circ$. Kolikšna je specifična rotacija vzorca, kolikšen je enantiomerni presežek $ee$ in kakšna je sestava zmesi?

**Podatki:** $\alpha = +2{,}40^\circ$, $l = 1{,}00\,\text{dm}$, $c = 0{,}100\,\text{g/mL}$, čisti (S): $[\alpha]_{\text{čist}} = +30{,}0^\circ$
**Iščemo:** $[\alpha]$ vzorca, $ee$ in deleža (S) in (R)

:::formula
$[\alpha] = \dfrac{\alpha}{l \cdot c}$, $\quad ee = \dfrac{[\alpha]}{[\alpha]_{\text{čist}}} \cdot 100\,\%$, $\quad x_S = \dfrac{100\,\% + ee}{2}$
:::

**Rešitev:**

1. Specifična rotacija: $[\alpha] = \dfrac{2{,}40^\circ}{1{,}00 \cdot 0{,}100} = +24{,}0^\circ$.
2. Vzorec vrti manj kot čisti (S), torej je delno racemiziran; preostanek (R) izniči del vrtenja.
3. Izračunaj $ee$ in sestavo sam.

:::premisli
Koliko sta $ee$ in deleža (S) in (R)?
---
$ee = \dfrac{24{,}0}{30{,}0} \cdot 100\,\% = 80\,\%$. Delež (S) je $\dfrac{100 + 80}{2} = 90\,\%$, delež (R) je $10\,\%$. Preveri: $90 - 10 = 80$.
:::

## Pogoste napake

- **Predznak vrtenja = R ali S.** »(R) pomeni $(+)$, torej desno.« Napačno: R/S je dogovor o risanju, $(+)/(-)$ pa meritev. (R)-glicerinaldehid je $(+)$, (R)-mlečna kislina pa $(-)$. Predznak vedno izmeriš.
- **Pozabljen obrat, ko je H spredaj.** Smer prebereš z risbe, čeprav je skupina 4 na klinu. Dobiš ravno nasprotno konfiguracijo. Preveri, kam kaže skupina 4; če kaže proti tebi, rezultat obrni.
- **Prioriteta po velikosti skupine.** »Propil je večji od $-\mathrm{CH_2OH}$, zato ima višjo prioriteto.« Pravila CIP ne gledajo mase cele skupine, ampak prvo razliko po atomih: (O, H, H) premaga (C, H, H).
- **Vsak stereocenter pomeni kiralno molekulo.** Spojina mezo ima dva stereocentra, a je akiralna zaradi notranje zrcalne ravnine. Zato $2^n$ velja le kot zgornja meja.
- **Vsaka dva stereoizomera sta enantiomera.** (2R,3R) in (2R,3S) nista zrcalni sliki, saj se je obrnil le en center. Sta diastereomera in imata različne fizikalne lastnosti.

## Povzetek

- Stereoizomeri: enaka povezanost atomov, različna razporeditev v prostoru; delimo jih na enantiomere in diastereomere.
- Kiralna molekula se ne prekrije s svojo zrcalno sliko; stereocenter je ogljik $sp^3$ s štirimi različnimi skupinami.
- Enantiomera imata enake fizikalne lastnosti, a nasprotno optično rotacijo; racemat je zmes $1 : 1$ in je optično neaktiven; $[\alpha] = \alpha / (l \cdot c)$.
- Pravila CIP: višje vrstno število neposredno vezanega atoma; ob izenačenju prva razlika v trojicah; dvojna vez podvoji atom.
- Skupina 4 stran od opazovalca, $1 \to 2 \to 3$ v smeri urinega kazalca je R, v nasprotni S; če je skupina 4 proti nam, obrni.
- Obrat vseh stereocentrov da enantiomer, obrat dela diastereomer; diastereomeri imajo različne fizikalne lastnosti.
- Največ $2^n$ stereoizomerov; spojine mezo so akiralne in število zmanjšajo. *Cis/trans* izomeri alkenov so diastereomeri.
- Predznak $(+)/(-)$ ni povezan z oznako R/S.

## Drugače: Na sliki

Stereocenter si predstavljaj kot **volan avtomobila**.

- Steber volana je vez do skupine 4 (najnižja prioriteta). Kaže stran od tebe, proti armaturi.
- Na obroču volana so skupine 1, 2 in 3.
- Če z roko greš od 1 do 2 do 3 tako, kot da bi obrnil volan v desno, je konfiguracija R. Če v levo, je S.

Če steber kaže proti tebi, vidiš vrtenje obrnjeno, zato rezultat obrneš.

Pri dveh stereocentrih nariši mrežo $2 \times 2$ (C2 v vrsticah, C3 v stolpcih): nasprotni kot (RR, SS) je enantiomer, sosednji kvadrat diastereomer.

## Drugače: Iz vsakdanjega življenja

- **Roke in rokavice.** Dve roki sta enantiomera: enaka teža, enaka dolžina prstov. Razliko opazi samo nekaj kiralnega, rokavica. Tako tudi encim loči enantiomera zdravila, tehtnica pa ne.

## Drugače: Korak za korakom s številkami

Postopek za R/S, ki ga lahko uporabiš pri vsaki nalogi:

1. Poišči stereocenter: ogljik s štirimi različnimi skupinami.
2. Vsaki skupini napiši vrstno število neposredno vezanega atoma, npr. O $= 8$, C $= 6$, H $= 1$.
3. Če sta dve številki enaki, pri vsaki zapiši trojico vrstnih števil sosedov, urejeno padajoče: za etil $(6, 1, 1)$, za metil $(1, 1, 1)$. Primerjaj po vrsti, prva večja številka zmaga.
4. Skupinam pripiši prioritete 1 do 4.
5. Poglej, kam kaže skupina 4: črtkano (stran) ali klin (proti tebi).
6. Sledi $1 \to 2 \to 3$: v smeri urinega kazalca R, v nasprotni S.
7. Če je bila skupina 4 na klinu, zamenjaj R in S.

Pri več stereocentrih: zapiši vse kombinacije ($2^n$), preveri, ali sta konca molekule enaka (možna oblika mezo), in vsakemu paru pripiši odnos.

## Drugače: Bolj natančno

**Kiralnost brez stereocentra.** Pogoj za kiralnost je odsotnost zrcalne ravnine in središča simetrije (strogo: zrcalno-rotacijske osi $S_n$), ne obstoj stereocentra. Aleni $\mathrm{RHC{=}C{=}CHR}$ in nekateri bifenili z oviranim vrtenjem (atropizomeri) so kiralni brez stereocentra.

**Zakaj $2^n$.** Vsak stereocenter ima neodvisno dve možnosti, zato je kombinacij $2 \cdot 2 \cdots 2 = 2^n$. Če ima molekula simetrijo (enaka konca), sta dve kombinaciji lahko ista molekula. Pri $n$ sodem in simetrični molekuli je oblik mezo $2^{n/2 - 1}$ in vseh stereoizomerov $2^{n-1} + 2^{n/2 - 1}$; za vinsko kislino ($n = 2$) je to $2 + 1 = 3$.

**Fischerjeva projekcija.** Navpične vezi kažejo stran od opazovalca, vodoravne proti njemu. Če je H na vodoravni vezi, smer $1 \to 2 \to 3$ obrnemo. Oznaka D/L pri sladkorjih in aminokislinah ni enaka R/S.

**Enantiomerni presežek.** $ee = \dfrac{n_{\text{glavni}} - n_{\text{manjši}}}{n_{\text{glavni}} + n_{\text{manjši}}}$. Ocena iz rotacije velja le, če v vzorcu ni drugih optično aktivnih snovi.

## Preveri se

? Kaj je stereocenter?
- Ogljik, na katerega so vezani štirje enaki atomi.
~ Štiri enake skupine dajo simetričen ogljik, ki ni stereocenter.
+ Ogljik $sp^3$, na katerega so vezane štiri različne skupine.
- Ogljik z dvojno vezjo.
~ Ogljik $sp^2$ ima le tri skupine v ravnini in ni stereocenter; dvojna vez daje *cis/trans* izomerijo, ne stereocentra.
> Štiri različne skupine na tetraedričnem ogljiku dajo dve razporeditvi, ki sta zrcalni sliki in se ne prekrijeta.

? Spojina ima dva stereocentra, pa je optično neaktivna, čeprav je čista. Kako je to mogoče?
- Ker je racemat.
~ Racemat je zmes dveh spojin, tu pa je vzorec čista spojina.
+ Ker je spojina mezo z notranjo zrcalno ravnino.
- Ker se vrtenji dveh stereocentrov v isti molekuli vedno izničita.
~ To velja le za obliko mezo. (2R,3R)-vinska kislina ima dva stereocentra in je optično aktivna.
> Spojina mezo ima stereocentre, a je zaradi zrcalne ravnine akiralna in enaka svoji zrcalni sliki.

? (R)-spojina vrti ravnino polarizirane svetlobe za $+15^\circ$. Kaj velja za njen (S)-enantiomer pri enakih pogojih?
- Vrti za $+15^\circ$, ker ima enake fizikalne lastnosti.
~ Enantiomera imata res enaka tališče in vrelišče, a nasprotno optično rotacijo.
+ Vrti za $-15^\circ$.
- O predznaku ne moremo reči ničesar.
~ Za samo spojino ne moremo napovedati predznaka iz R/S, za enantiomer pa vemo, da je kot enak in nasproten.
> Enantiomera vrtita za enak kot v nasprotni smeri. Iz oznake R/S same pa predznaka ne moremo napovedati.

? Katera skupina ima po pravilih CIP najvišjo prioriteto?
- $-\mathrm{CH_2CH_2CH_2CH_3}$
~ Najdaljša skupina ne zmaga samodejno: njena trojica je (C, H, H).
- $-\mathrm{CH(CH_3)_2}$
~ Trojica (C, C, H) premaga (C, H, H), a O v (O, H, H) je višji od C.
+ $-\mathrm{CH_2OH}$
> Vse tri skupine imajo na stereocentru C. Odloči prva razlika v trojicah: (O, H, H) $>$ (C, C, H) $>$ (C, H, H), ker je O $>$ C.

? Koliko stereoizomerov ima 2-bromo-3-klorobutan, $\mathrm{CH_3CHBrCHClCH_3}$?
- $2$
~ To bi veljalo za en stereocenter. Tu sta stereocentra C2 in C3.
- $3$
~ Oblika mezo je možna le, če sta konca enaka; tu sta Br in Cl različna, zato je ni.
+ $4$
> Dva stereocentra in brez simetrije: $2^2 = 4$, to sta dva para enantiomerov.
