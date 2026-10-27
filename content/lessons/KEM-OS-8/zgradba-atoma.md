---
stanje: osnutek
phet: build-an-atom
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz naravoslovja in prvih ur kemije že veš, da je snov zgrajena iz drobnih delcev in da imajo različne snovi različne lastnosti. Vprašanje je: iz česa so zgrajeni sami ti delci? Zakaj je železo trdno in težko, kisik pa plin? Zakaj se nekatere snovi med seboj spajajo, druge pa ne?

Odgovor se skriva v **zgradbi atoma**. Ko veš, koliko protonov, nevtronov in elektronov ima atom, lahko:

- ugotoviš, za kateri element gre,
- razumeš, kako je razporejen periodni sistem,
- kasneje razložiš, zakaj in kako atomi tvorijo spojine.

V tej lekciji se naučiš, iz katerih delcev je atom, in kako iz dveh števil (vrstnega in masnega) razbereš sestavo atoma.

## Razlaga

**1. Atom.** Atom je osnovni gradnik snovi. Je zelo majhen, saj je njegov premer približno $10^{-10}\,\text{m}$. Atom ni nedeljiv, ampak je sestavljen iz še manjših delcev.

**2. Delci v atomu.** Atom sestavljajo trije osnovni delci:

| Delec | Oznaka | Naboj | Relativna masa | Kje je |
|---|---|---|---|---|
| proton | $p^+$ | pozitiven ($+1$) | $1$ | v jedru |
| nevtron | $n^0$ | brez naboja ($0$) | $1$ | v jedru |
| elektron | $e^-$ | negativen ($-1$) | skoraj $0$ (približno $\frac{1}{1840}$ mase protona) | v elektronski ovojnici |

**3. Zgradba.** V sredini atoma je **jedro**, v katerem so protoni in nevtroni. Skupaj jim rečemo **nukleoni**. Okoli jedra je **elektronska ovojnica**, v kateri se gibljejo elektroni. Jedro je zelo majhno, a v njem je skoraj vsa masa atoma, ker so elektroni v primerjavi s protoni in nevtroni zelo lahki.

**4. Atom je navzven električno nevtralen.** Število pozitivnih protonov je enako številu negativnih elektronov, zato se naboja izničita:

$$\text{število protonov} = \text{število elektronov}$$

**5. Vrstno (atomsko) število $Z$.** To je število protonov v jedru. Določa, za kateri element gre: vsi atomi z $Z = 6$ so ogljikovi, vsi z $Z = 8$ so kisikovi. Ker je atom nevtralen, je $Z$ tudi število elektronov.

**6. Masno (nukleonsko) število $A$.** To je število vseh delcev v jedru, torej protonov in nevtronov skupaj:

$$A = Z + N$$

kjer je $N$ število nevtronov. Od tod:

$$N = A - Z$$

**7. Zapis.** Atom elementa X zapišemo kot

$$^{A}_{Z}\mathrm{X}$$

Masno število pišemo zgoraj, vrstno spodaj. Na primer $^{23}_{11}\mathrm{Na}$ je natrij z $Z = 11$ in $A = 23$.

**8. Izotopi.** Atomi istega elementa imajo vedno enako število protonov, lahko pa se razlikujejo po številu nevtronov. Takim atomom pravimo **izotopi**. Imajo enako $Z$, različno $A$. Primer: $^{12}_{6}\mathrm{C}$ ima 6 nevtronov, $^{14}_{6}\mathrm{C}$ pa 8 nevtronov.

V simulaciji spodaj sam sestavljaj atome: dodajaj protone, nevtrone in elektrone ter opazuj, kako se spreminjata element in naboj.

## Rešeni primeri

### Primer 1 (lažji): sestava atoma iz zapisa

Določi število protonov, nevtronov in elektronov v atomu $^{19}_{9}\mathrm{F}$.

1. Vrstno število je spodaj: $Z = 9$. To je število protonov, torej $p^+ = 9$.
2. Atom je nevtralen, zato je elektronov enako kot protonov: $e^- = 9$.
3. Masno število je zgoraj: $A = 19$. Nevtrone dobimo tako, da od vseh delcev v jedru odštejemo protone: $N = A - Z = 19 - 9 = 10$.
4. Preverimo: $9 + 10 = 19$, kar je res masno število. ✓

**Odgovor:** 9 protonov, 10 nevtronov, 9 elektronov.

### Primer 2: iskanje masnega števila

Atom ima 15 protonov in 16 nevtronov. Za kateri element gre in kolikšno je njegovo masno število?

1. Število protonov je vrstno število: $Z = 15$. Element poiščemo v periodnem sistemu po vrstnem številu: to je fosfor (P).
2. Masno število je vsota protonov in nevtronov: $A = Z + N = 15 + 16 = 31$.
3. Zapis: $^{31}_{15}\mathrm{P}$.
4. Elektronov je 15, ker je atom nevtralen.

**Odgovor:** fosfor, $A = 31$, zapis $^{31}_{15}\mathrm{P}$.

### Primer 3 (težji): dva izotopa

Klor ima dva pogosta izotopa: $^{35}_{17}\mathrm{Cl}$ in $^{37}_{17}\mathrm{Cl}$. Primerjaj njuno sestavo in razloži, zakaj sta oba klor.

1. **Prvi izotop:** $Z = 17$, torej 17 protonov in 17 elektronov. $N = 35 - 17 = 18$ nevtronov.
2. **Drugi izotop:** $Z = 17$, torej 17 protonov in 17 elektronov. $N = 37 - 17 = 20$ nevtronov.
3. **Primerjava:** Število protonov in elektronov je enako, število nevtronov se razlikuje za $20 - 18 = 2$, zato se razlikujeta tudi masni števili ($37 - 35 = 2$).
4. **Zakaj sta oba klor?** Element določa število protonov. Obema atomoma je $Z = 17$, zato sta oba klorova atoma. Različno število nevtronov spremeni le maso, ne pa elementa.

**Odgovor:** izotopa se razlikujeta le po številu nevtronov (18 in 20), oba imata 17 protonov in 17 elektronov.

## Pogoste napake

- **Zamenjava vrstnega in masnega števila.** Vrstno število $Z$ (spodaj) je število protonov, masno število $A$ (zgoraj) je protoni plus nevtroni. Masno število je vedno večje ali enako vrstnemu.
- **Število nevtronov ni enako masnemu številu.** Nevtrone dobiš z odštevanjem: $N = A - Z$.
- **Elektroni v masnem številu.** Elektroni se v masno število ne štejejo, ker je njihova masa zanemarljivo majhna.
- **Mešanje jedra in ovojnice.** Protoni in nevtroni so v jedru, elektroni v ovojnici.
- **Mislimo, da različno število nevtronov pomeni drug element.** Element določa samo število protonov.

## Povzetek

- Atom je sestavljen iz jedra (protoni $p^+$ in nevtroni $n^0$) in elektronske ovojnice (elektroni $e^-$).
- Proton ima naboj $+1$, elektron $-1$, nevtron je brez naboja. Atom je navzven nevtralen: število protonov je enako številu elektronov.
- Vrstno število $Z$ je število protonov (in elektronov v nevtralnem atomu); določa element.
- Masno število $A = Z + N$ je število protonov in nevtronov skupaj; $N = A - Z$.
- Zapis atoma: $^{A}_{Z}\mathrm{X}$.
- Izotopi so atomi istega elementa z različnim številom nevtronov.

## Drugače: Na sliki

Predstavljaj si atom kot majhno sončno sistemu podobno sliko, čeprav je prava slika bolj zapletena. V sredini je drobno jedro, ki ga narišemo kot kupček rdečih krogcev (protoni, $+$) in sivih krogcev (nevtroni). Okoli jedra krožijo majhni modri krogci (elektroni, $-$).

Primer za helij $^{4}_{2}\mathrm{He}$:

- v jedru sta 2 rdeča krogca (protona) in 2 siva (nevtrona),
- zunaj sta 2 modra krogca (elektrona).

Če narišeš samo jedro, preštej vse krogce v njem: $2 + 2 = 4$ in to je masno število. Rdeče krogce preštej posebej: 2 je vrstno število.

Pomembno: slika ni v merilu. Če bi bilo jedro velikosti graha, bi bila elektronska ovojnica velika kot nogometno igrišče. Večina atoma je prazen prostor.

V simulaciji spodaj to opazuj: ko dodaš proton, se spremeni element, ko dodaš nevtron, se spremeni samo masa, ko dodaš ali odvzameš elektron, pa se spremeni naboj.

## Drugače: Iz vsakdanjega življenja

Poskusi si zamisliti atom z analogijo s sestavljanko iz kock.

- **Protoni so kot vrsta kock, ki določa, kaj gradiš.** Če imaš 6 rdečih kock, je to »ogljik«, pri 8 rdečih pa »kisik«. Tako kot ime izdelka določa osnovni sestavni del, ime elementa določa število protonov.
- **Nevtroni so kot dodatna teža v škatli.** Škatlo naredijo težjo, a ne spremenijo njene vrste. Dva atoma ogljika z različnim številom nevtronov sta še vedno ogljik, le težja ali lažja.
- **Elektroni so kot mravlje okoli mravljišča.** Mravljišče (jedro) je v središču, mravlje (elektroni) so zelo lahke in se gibljejo okoli, skoraj nič ne prispevajo k teži celotnega mravljišča.

Še en primer: poštni naslov. Vrstno število je kot hišna številka, ki enolično določa naslov (element). Masno število pa je kot skupno število oseb in živali v hiši, torej več podatkov o tem, kaj je »notri«.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo o sestavi atoma:

1. Poišči vrstno število $Z$ (v zapisu spodaj ali v periodnem sistemu).
2. Zapiši: protoni $= Z$.
3. Zapiši: elektroni $= Z$ (za nevtralen atom).
4. Poišči masno število $A$ (v zapisu zgoraj).
5. Izračunaj nevtrone: $N = A - Z$.

Primer za $^{27}_{13}\mathrm{Al}$:

| Podatek | Vrednost | Račun |
|---|---|---|
| protoni | $13$ | $Z = 13$ |
| elektroni | $13$ | enako kot protoni |
| masno število | $27$ | podano |
| nevtroni | $14$ | $27 - 13 = 14$ |

Preverjanje: $13 + 14 = 27$. ✓

Še drugi primer, $^{56}_{26}\mathrm{Fe}$ (železo): protonov $26$, elektronov $26$, nevtronov $56 - 26 = 30$.

## Drugače: Bolj natančno

**Kako so odkrili delce?** Zgradbo atoma so odkrivali postopoma. Elektron je odkril J. J. Thomson (1897), jedro je pokazal Ernest Rutherford s poskusom, pri katerem je tanko zlato folijo obstreljeval z delci. Večina delcev je šla skozi folijo, nekaj pa se jih je močno odklonilo. Iz tega je sklepal, da je večina atoma prazen prostor, v središču pa je majhno, gosto, pozitivno nabito jedro. Nevtron je kasneje odkril James Chadwick (1932).

**Relativna atomska masa.** Mase atomov so zelo majhne, zato jih izražamo relativno glede na maso protona (približno $1$). Zato je masno število približno enako masi atoma v tej enoti. Točna atomska masa elementa v periodnem sistemu ni celo število, ker je to povprečje po vseh izotopih, glede na njihovo pogostost. Pri kloru je zato vrednost približno $35{,}5$, ker v naravi prevladuje izotop $^{35}\mathrm{Cl}$, vendar je prisoten tudi $^{37}\mathrm{Cl}$.

**Naboj iona.** Če atom izgubi ali pridobi elektron, ni več nevtralen. Število protonov se ne spremeni, zato ostane isti element. Na primer, atom natrija ($Z = 11$) ima 11 elektronov. Če izgubi enega, ima 10 elektronov in 11 protonov, torej naboj $+1$ in ga zapišemo kot $\mathrm{Na^+}$.

## Preveri se

? Atom ima vrstno število $Z = 11$ in masno število $A = 23$. Koliko nevtronov ima?
- $11$
- $23$
+ $12$
- $34$
> Število nevtronov je razlika masnega in vrstnega števila: $N = A - Z = 23 - 11 = 12$. Odgovor $34$ dobimo, če števili po napaki seštejemo.

? Kaj določa, za kateri element gre?
- število nevtronov
- število elektronov v ovojnici, ki ga lahko atom izgubi
+ število protonov v jedru
> Element določa število protonov, torej vrstno število. Atomi istega elementa imajo lahko različno število nevtronov (izotopi), število elektronov pa se lahko spremeni, ko atom tvori ion.

? Kateri par delcev skupaj tvori jedro atoma?
- protoni in elektroni
+ protoni in nevtroni
- nevtroni in elektroni
> V jedru sta protona in nevtrona, ki ju skupaj imenujemo nukleona. Elektroni so zunaj jedra, v elektronski ovojnici.
