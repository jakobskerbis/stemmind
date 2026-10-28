---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Že veš, da je snov zgrajena iz atomov in da se atomi različnih elementov med seboj razlikujejo. V periodnem sistemu so elementi razporejeni po vrstnem (atomskem) številu in na videz urejeno: v isti skupini so elementi s podobnimi lastnostmi. Zakaj je tako?

Odgovor je v zgradbi atoma. Število protonov določa, za kateri element gre, razporeditev elektronov pa določa, kako se bo atom vezal z drugimi atomi in kako bo reagiral. Zato je razumevanje zgradbe atoma temelj skoraj vsega, kar boš v kemiji spoznal: kemijskih vezi, reakcij, lastnosti snovi. Izotopi pa pojasnijo, zakaj imajo atomi istega elementa lahko različno maso, in jih uporabljamo na primer pri določanju starosti najdb (ogljik-14) ali v medicini.

## Razlaga

**1. Delci v atomu.** Atom sestavljajo trije osnovni delci:

| Delec | Oznaka | Naboj | Kje je |
|---|---|---|---|
| proton | $p^+$ | $+1$ | jedro |
| nevtron | $n^0$ | $0$ | jedro |
| elektron | $e^-$ | $-1$ | elektronska ovojnica |

Protoni in nevtroni so v **jedru**, elektroni pa se gibljejo okoli jedra v **elektronski ovojnici**. Skoraj vsa masa atoma je v jedru, saj sta proton in nevtron približno $1840$-krat težja od elektrona. Masi protona in nevtrona sta približno enaki, zato ju štejemo kot eno **relativno atomsko enoto mase** vsakega.

**2. Atomsko in masno število.**

- **Atomsko (vrstno) število** $Z$ je število protonov v jedru. Določa element.
- **Masno (nukleonsko) število** $A$ je vsota protonov in nevtronov: $A = Z + N$, kjer je $N$ število nevtronov.

Zapis atoma elementa X:

$$^{A}_{Z}\mathrm{X}$$

Število nevtronov torej izračunaš kot $N = A - Z$.

**3. Električna nevtralnost.** Atom je navzven nevtralen, zato je število elektronov enako številu protonov. Pri atomu je torej število elektronov enako $Z$. Če atom elektron odda ali sprejme, nastane **ion**: pozitivni (kation) ali negativni (anion).

**4. Izotopi.** **Izotopi** so atomi istega elementa (enako $Z$), ki imajo različno število nevtronov (različen $A$). Ker imajo enako število elektronov, so njihove kemijske lastnosti praktično enake. Razlikujejo se po masi.

Primer vodika: $^{1}_{1}\mathrm{H}$ (brez nevtrona), $^{2}_{1}\mathrm{H}$ (devterij, en nevtron) in $^{3}_{1}\mathrm{H}$ (tritij, dva nevtrona).

Relativna atomska masa elementa v periodnem sistemu je **povprečje** mas vseh naravnih izotopov, uteženo z njihovo pogostnostjo. Zato ni celo število.

**5. Elektronska ovojnica.** Elektroni so razporejeni v **lupine** (energijske nivoje), označene z glavnim kvantnim številom $n = 1, 2, 3, \dots$. Lupina z manjšim $n$ je bliže jedru in ima nižjo energijo. Lupine se delijo na **podlupine** $s$, $p$, $d$, $f$. Vsaka podlupina ima več **orbital** (območij, kjer je verjetnost za elektron velika):

| Podlupina | Število orbital | Največ elektronov |
|---|---|---|
| $s$ | 1 | 2 |
| $p$ | 3 | 6 |
| $d$ | 5 | 10 |

V eni orbitali sta lahko največ **dva** elektrona. Lupina $n$ vsebuje največ $2n^2$ elektronov: $2$, $8$, $18$, …

**6. Elektronska konfiguracija.** Pove, kako so elektroni razporejeni po podlupinah. Zapis: $1s^2$ pomeni, da sta v podlupini $s$ prve lupine dva elektrona.

Elektrone polnimo po naraščajoči energiji podlupin. Vrstni red polnjenja:

$$1s,\ 2s,\ 2p,\ 3s,\ 3p,\ 4s,\ 3d,\ 4p,\ \dots$$

Pozoren bodi: podlupina $4s$ se napolni **pred** $3d$.

**7. Valenčni elektroni** so elektroni v zadnji (zunanji) lupini. Ti sodelujejo pri nastajanju kemijskih vezi. Pri elementih glavnih skupin je število valenčnih elektronov enako številu skupine (za skupine 1, 2 in 13–18 je to enako zadnji števki številke skupine).

## Rešeni primeri

### Primer 1 (lažji): delci v atomu

Koliko protonov, nevtronov in elektronov ima atom $^{23}_{11}\mathrm{Na}$?

1. Spodnje število je atomsko število: $Z = 11$, torej je v jedru $11$ protonov.
2. Atom je nevtralen, zato je elektronov prav toliko kot protonov: $11$.
3. Nevtrone dobimo iz razlike: $N = A - Z = 23 - 11 = 12$.
4. Preverimo: $11 + 12 = 23$, kar je masno število. ✓

**Odgovor:** $11$ protonov, $12$ nevtronov, $11$ elektronov.

### Primer 2: izotopi in relativna atomska masa

Klor ima dva pogosta naravna izotopa: $^{35}\mathrm{Cl}$ z deležem $75\,\%$ in $^{37}\mathrm{Cl}$ z deležem $25\,\%$. Koliko nevtronov imata izotopa in kolikšna je povprečna relativna atomska masa?

1. Klor ima $Z = 17$ (to je njegovo mesto v periodnem sistemu).
2. Nevtroni: $^{35}\mathrm{Cl}$ ima $35 - 17 = 18$ nevtronov, $^{37}\mathrm{Cl}$ ima $37 - 17 = 20$ nevtronov. Oba imata $17$ protonov, zato sta izotopa istega elementa.
3. Povprečje utežimo z deleži (ker je lažjega izotopa več, mora biti povprečje bliže $35$):
$$A_r = 0{,}75 \cdot 35 + 0{,}25 \cdot 37 = 26{,}25 + 9{,}25 = 35{,}5$$
4. Preverimo: $35{,}5$ je med $35$ in $37$ in bliže $35$. ✓ To se ujema z vrednostjo v periodnem sistemu.

**Odgovor:** $18$ in $20$ nevtronov; povprečna relativna atomska masa je $35{,}5$.

### Primer 3 (težji): elektronska konfiguracija

Zapiši elektronsko konfiguracijo atoma žvepla ($Z = 16$) in kalcija ($Z = 20$) ter določi število valenčnih elektronov.

**Žveplo, $Z = 16$** (16 elektronov):

1. Polnimo po vrsti: $1s^2$ (skupaj $2$), $2s^2$ ($4$), $2p^6$ ($10$), $3s^2$ ($12$).
2. Do $16$ manjka še $16 - 12 = 4$ elektrone, ki gredo v $3p$ (ta sprejme do $6$).
3. Konfiguracija: $1s^2\,2s^2\,2p^6\,3s^2\,3p^4$.
4. Preverimo vsoto: $2 + 2 + 6 + 2 + 4 = 16$. ✓
5. Zadnja lupina je $n = 3$: $2 + 4 = 6$ valenčnih elektronov. To se ujema s skupino 16.

**Kalcij, $Z = 20$** (20 elektronov):

1. Do $3p$ pridemo z $1s^2\,2s^2\,2p^6\,3s^2\,3p^6$, to je $18$ elektronov.
2. Preostala $2$ elektrona gresta v $4s$, ne v $3d$, ker je $4s$ nižje po energiji.
3. Konfiguracija: $1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2$.
4. Preverimo vsoto: $2 + 2 + 6 + 2 + 6 + 2 = 20$. ✓
5. Zadnja lupina je $n = 4$ z $2$ elektronoma: $2$ valenčna elektrona (skupina 2).

## Pogoste napake

- **Zamenjava $Z$ in $A$.** Število protonov je $Z$ (spodaj), ne $A$ (zgoraj). Nevtroni so $A - Z$.
- **Izotopi z različnim številom protonov.** Če se spremeni število protonov, ni več isti element. Izotopi se razlikujejo samo po nevtronih.
- **Napačno število elektronov pri ionu.** Atom $\mathrm{Na}$ ima $11$ elektronov, ion $\mathrm{Na^+}$ pa $10$. Naboj ioni spremeni število elektronov, ne protonov.
- **Vrstni red polnjenja.** Po $3p$ sledi $4s$, šele nato $3d$.
- **Preseženo največje število elektronov.** Podlupina $p$ sprejme največ $6$, ne $8$. Osem jih je v lupini $n=2$ skupaj ($2s^2\,2p^6$).
- **Relativna atomska masa kot navadno povprečje.** Pri izotopih moraš povprečje utežiti z deleži, ne le sešteti in deliti z dva.

## Povzetek

- Atom sestavljajo protoni ($+$) in nevtroni ($0$) v jedru ter elektroni ($-$) v ovojnici.
- $Z$ = število protonov (= število elektronov v nevtralnem atomu); $A = Z + N$.
- Izotopi so atomi istega elementa z različnim številom nevtronov; kemijsko so enaki, razlikujejo se po masi.
- Relativna atomska masa je uteženo povprečje mas naravnih izotopov.
- Elektrone polnimo po podlupinah: $1s, 2s, 2p, 3s, 3p, 4s, 3d, \dots$; $s$ sprejme $2$, $p$ $6$, $d$ $10$ elektronov.
- Valenčni elektroni so v zunanji lupini in določajo kemijsko vedenje atoma.

## Drugače: Na sliki

Predstavljaj si atom kot majhno sončno okolico, a s pomembno razliko. V sredini je drobno **jedro** (protoni in nevtroni), okoli njega pa so **lupine** kot koncentrični krogi, ki so vedno bolj oddaljeni od jedra.

Prva lupina ima prostor za $2$ elektrona, druga za $8$, tretja za $18$. Elektroni najprej zasedejo notranje lupine, nato zunanje. Pri natriju ($11$ elektronov) narišemo $2$ elektrona v prvi lupini, $8$ v drugi in $1$ v tretji. Ta zadnji, osamljeni elektron je valenčni in ga natrij zlahka odda.

Pri izotopih si predstavljaj dve jedri z enakim številom rdečih kroglic (protonov) in različnim številom sivih kroglic (nevtronov). Ovojnica je pri obeh enaka, zato se kemijsko obnašata enako, le jedro je težje.

V simulaciji spodaj (»Atom, ioni in izotopi«) lahko sam dodajaš in odvzemaš delce ter opazuješ, kako se spreminjajo element, naboj in masno število.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si **večnadstropno stavbo** z gledališčem. Atomsko število je kot število vstopnic, ki določa, katera predstava se igra (kateri element je). Nadstropja so lupine: v spodnjih je manj sedežev in so bliže odru (jedru), v višjih jih je več. Gledalci (elektroni) najprej zasedejo najboljše sedeže, torej tiste z najnižjo energijo.

Izotopi so kot dve skupini enakih gledalcev, od katerih ima ena s seboj težke nahrbtnike (dodatni nevtroni). Oba obiskovalca gresta na isto predstavo in sedeta na enaka mesta, a eden je težji.

Praktičen primer izotopa je **ogljik-14** ($^{14}_{6}\mathrm{C}$). V živem organizmu ga je majhen, stalen delež. Po smrti se ne dopolnjuje več in se počasi razpada, zato iz njegovega deleža arheologi ocenijo starost lesenih ali kostnih najdb.

## Drugače: Korak za korakom s številkami

Recept za elektronsko konfiguracijo, na primeru **fosforja** ($Z = 15$):

1. Število elektronov nevtralnega atoma je $Z$: $15$.
2. Polni po vrsti in sproti šteji:

| Podlupina | Dodano | Skupaj |
|---|---|---|
| $1s$ | $2$ | $2$ |
| $2s$ | $2$ | $4$ |
| $2p$ | $6$ | $10$ |
| $3s$ | $2$ | $12$ |
| $3p$ | $3$ (le toliko manjka) | $15$ |

3. Konfiguracija: $1s^2\,2s^2\,2p^6\,3s^2\,3p^3$.
4. Valenčni elektroni so v lupini $n = 3$: $2 + 3 = 5$.
5. Preveri: skupina 15, kar se ujema ($5$ valenčnih elektronov).

Recept za delce v atomu, na primeru $^{31}_{15}\mathrm{P}$: protonov $15$, elektronov $15$, nevtronov $31 - 15 = 16$.

## Drugače: Bolj natančno

**Zakaj je v lupini največ $2n^2$ elektronov?** Lupina z glavnim kvantnim številom $n$ ima $n$ podlupin: $s$, $p$, $d$, … (za $n = 3$: $s$, $p$, $d$). Podlupine imajo $1, 3, 5, \dots$ orbital, torej skupaj $n^2$ orbital. Ker je v vsaki orbitali največ $2$ elektrona (Paulijevo izključitveno načelo), je v lupini največ $2n^2$ elektronov. Za $n = 3$: $1 + 3 + 5 = 9$ orbital in $18$ elektronov.

**Zakaj se $4s$ polni pred $3d$?** Energija podlupine ni odvisna samo od $n$. Elektroni v $4s$ so v povprečju bolj »prodorni« in jih jedro močneje privlači, zato je $4s$ pri nevtralnem atomu kalija in kalcija nekoliko nižje od $3d$. Zato se najprej napolni $4s$.

**Pravilo za polnjenje orbital v isti podlupini** (Hundovo pravilo): elektroni najprej zasedejo vsako orbitalo posamično, šele nato se v njih združujejo v pare. Na primer v $2p^3$ je en elektron v vsaki od treh orbital $p$.

**Relativna atomska masa** elementa z izotopi z masami $m_i$ in deleži $w_i$ (kot decimalno število, vsota $=1$):

$$A_r = \sum_i w_i\, m_i$$

## Preveri se

? Koliko nevtronov ima atom $^{40}_{18}\mathrm{Ar}$?
- $18$
- $40$
+ $22$
- $58$
> Število nevtronov je $N = A - Z = 40 - 18 = 22$. Odgovor $18$ je število protonov, $40$ je masno število, $58$ pa dobimo z napačnim seštevanjem.

? Kaj velja za izotopa istega elementa?
- Imata različno število protonov in enako število nevtronov.
- Imata enako masno število in različno število protonov.
+ Imata enako število protonov in različno število nevtronov.
> Izotopi so atomi istega elementa, torej imajo enako $Z$ (število protonov), razlikujejo pa se po številu nevtronov in zato po masnem številu.

? Katera je pravilna elektronska konfiguracija atoma magnezija ($Z = 12$)?
- $1s^2\,2s^2\,2p^6\,3s^1\,3p^1$
- $1s^2\,2s^2\,2p^8\,3s^0$
+ $1s^2\,2s^2\,2p^6\,3s^2$
- $1s^2\,2s^2\,2p^4\,3s^2\,3p^2$
> Magnezij ima $12$ elektronov: $2 + 2 + 6 = 10$ v prvih dveh lupinah, preostala $2$ gresta v $3s$. Podlupina $p$ ne sprejme več kot $6$ elektronov, in $3p$ se ne polni, preden je $3s$ polna.
