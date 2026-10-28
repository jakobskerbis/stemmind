---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Že veš, da električni tok $I$ teče po sklenjenem krogu, da baterija daje napetost $U$ in da upor $R$ ovira tok. Poznaš tudi Ohmov zakon: $U = I \cdot R$.

Prava električna naprava pa ni en sam upornik z baterijo. V telefonu, avtu in hiši je veliko elementov, povezanih na različne načine. Zakaj ena pokvarjena žarnica na stari novoletni lučki ugasne celoten niz, v stanovanju pa ugasne samo ena svetilka? Kako izračunamo, koliko toka teče po posamezni veji? Koliko energije porabi grelnik na sekundo? Na ta vprašanja odgovorimo s **Kirchhoffovima zakonoma**, z znanjem o **zaporedni in vzporedni vezavi** ter z računom **električne moči**.

V interaktivni simulaciji spodaj lahko vezja tudi sam sestaviš in preveriš meritve z ampermetrom in voltmetrom.

## Razlaga

**1. Osnovni pojmi.**

- **Vozlišče** je točka, kjer se stikajo vsaj trije vodniki.
- **Veja** je del vezja med dvema vozliščema.
- **Zanka** je poljubna sklenjena pot po vejah vezja.

**2. Prvi Kirchhoffov zakon (zakon o vozliščih).** Naboj se v vozlišču ne nabira in ne izgineva, zato je vsota tokov, ki vtekajo v vozlišče, enaka vsoti tokov, ki iz njega iztekajo:

$$\sum I_{\text{vtekajoči}} = \sum I_{\text{iztekajoči}}$$

**3. Drugi Kirchhoffov zakon (zakon o zankah).** Ko pri obhodu zanke pridemo nazaj v začetno točko, je vsota napetosti na virih enaka vsoti padcev napetosti na porabnikih:

$$U_{\text{vira}} = U_1 + U_2 + \dots$$

To je zakon o ohranitvi energije: vsak naboj dobi na viru toliko energije, kot jo odda na porabnikih.

**4. Zaporedna vezava.** Upori so vezani drug za drugim, med njimi ni vozlišča.

- Tok je povsod enak: $I = I_1 = I_2$.
- Napetosti se seštevajo: $U = U_1 + U_2$.
- Skupni upor: $R = R_1 + R_2 + \dots$

Če en element odpove (prekine vezje), tok ne teče nikjer.

**5. Vzporedna vezava.** Upori so vezani na isti dve vozlišči.

- Napetost je na vseh vejah enaka: $U = U_1 = U_2$.
- Tokovi se seštevajo: $I = I_1 + I_2$.
- Skupni upor: $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2} + \dots$

Skupni upor je manjši od najmanjšega posameznega upora. Če ena veja odpove, druge delujejo naprej.

Za dva upora velja tudi $R = \dfrac{R_1 \cdot R_2}{R_1 + R_2}$.

**6. Električna moč.** Moč pove, koliko električnega dela se opravi (energije pretvori) v eni sekundi:

$$P = U \cdot I$$

Z Ohmovim zakonom dobimo še obliki

$$P = I^2 R \qquad P = \frac{U^2}{R}$$

Enota je vat: $1\,\text{W} = 1\,\text{V} \cdot 1\,\text{A}$. Opravljeno delo (porabljena energija) je $A = P \cdot t$.

**7. Načrt reševanja nalog.** Najprej izračunaj nadomestni upor, nato skupni tok iz Ohmovega zakona, nato pa po korakih napetosti in tokove na posameznih delih.

## Rešeni primeri

### Primer 1 (lažji): zaporedna vezava

Upornika $R_1 = 20\,\Omega$ in $R_2 = 40\,\Omega$ sta zaporedno vezana na baterijo z napetostjo $12\,\text{V}$. Kolikšen je tok in kolikšni sta napetosti na upornikih?

**Podatki:** $R_1 = 20\,\Omega$, $R_2 = 40\,\Omega$ (zaporedna vezava), $U = 12\,\text{V}$
**Iščemo:** tok $I$ ter napetosti $U_1$ in $U_2$

:::formula
Zaporedna vezava: $R = R_1 + R_2$, $I = \dfrac{U}{R}$, $U_1 = I R_1$, $U_2 = I R_2$
:::

**Rešitev:**

1. Pri zaporedni vezavi se upori seštevajo: $R = 20 + 40 = 60\,\Omega$.
2. Skupni tok: $I = \dfrac{U}{R} = \dfrac{12}{60} = 0{,}2\,\text{A}$. Tok je v celotnem vezju enak.
3. Napetosti: $U_1 = I R_1 = 0{,}2 \cdot 20 = 4\,\text{V}$ in $U_2 = I R_2 = 0{,}2 \cdot 40 = 8\,\text{V}$.
4. Preverimo z drugim Kirchhoffovim zakonom: $U_1 + U_2 = 4 + 8 = 12\,\text{V}$, kar je enako napetosti vira. ✓
5. Odgovor: tok je $0{,}2\,\text{A}$, napetosti na upornikih sta $4\,\text{V}$ in $8\,\text{V}$. Večji upornik ima večji padec napetosti.

### Primer 2: vzporedna vezava in moč

Upornika $R_1 = 30\,\Omega$ in $R_2 = 60\,\Omega$ sta vzporedno vezana na vir z napetostjo $12\,\text{V}$. Izračunaj tokova po vejah, skupni tok, nadomestni upor in skupno moč.

**Podatki:** $R_1 = 30\,\Omega$, $R_2 = 60\,\Omega$ (vzporedna vezava), $U = 12\,\text{V}$
**Iščemo:** tokova $I_1$ in $I_2$, skupni tok $I$, nadomestni upor $R$, skupno moč $P$

:::formula
Vzporedna vezava: $U = U_1 = U_2$, $I_k = \dfrac{U}{R_k}$, $I = I_1 + I_2$, $R = \dfrac{U}{I}$, $P = U I$
:::

**Rešitev:**

1. Pri vzporedni vezavi je na obeh upornikih celotna napetost $12\,\text{V}$.
2. Tokova: $I_1 = \dfrac{12}{30} = 0{,}4\,\text{A}$ in $I_2 = \dfrac{12}{60} = 0{,}2\,\text{A}$.
3. Po prvem Kirchhoffovem zakonu se tokova v vozlišču seštejeta: $I = 0{,}4 + 0{,}2 = 0{,}6\,\text{A}$.
4. Nadomestni upor: $R = \dfrac{U}{I} = \dfrac{12}{0{,}6} = 20\,\Omega$. Preverimo s formulo: $\dfrac{30 \cdot 60}{30 + 60} = \dfrac{1800}{90} = 20\,\Omega$. ✓ Manjši je od $30\,\Omega$, kot mora biti.
5. Moči: $P_1 = U I_1 = 12 \cdot 0{,}4 = 4{,}8\,\text{W}$, $P_2 = 12 \cdot 0{,}2 = 2{,}4\,\text{W}$. Skupna moč: $P = 7{,}2\,\text{W}$. Preverimo: $U I = 12 \cdot 0{,}6 = 7{,}2\,\text{W}$. ✓
6. Odgovor: $I_1 = 0{,}4\,\text{A}$, $I_2 = 0{,}2\,\text{A}$, $I = 0{,}6\,\text{A}$, $R = 20\,\Omega$, $P = 7{,}2\,\text{W}$.

### Primer 3 (težji): mešana vezava

Upornik $R_1 = 10\,\Omega$ je zaporedno vezan z vzporedno vezavo upornikov $R_2 = 30\,\Omega$ in $R_3 = 60\,\Omega$. Vir ima napetost $24\,\text{V}$. Izračunaj tok skozi vsak upornik in moč na $R_1$.

**Podatki:** $R_1 = 10\,\Omega$ (zaporedno z vzporedno vezavo), $R_2 = 30\,\Omega$, $R_3 = 60\,\Omega$ (vzporedno), $U = 24\,\text{V}$
**Iščemo:** tokove $I_1$, $I_2$, $I_3$ in moč $P_1$ na $R_1$

:::formula
Vzporedni del: $R_{23} = \dfrac{R_2 R_3}{R_2 + R_3}$; celoten upor $R = R_1 + R_{23}$; $I = \dfrac{U}{R}$; $P_1 = I^2 R_1$
:::

**Rešitev:**

1. **Vzporedni del.** $R_{23} = \dfrac{30 \cdot 60}{30 + 60} = 20\,\Omega$.
2. **Celoten upor.** Ta del je zaporedno z $R_1$: $R = 10 + 20 = 30\,\Omega$.
3. **Skupni tok.** $I = \dfrac{24}{30} = 0{,}8\,\text{A}$. Ta tok teče skozi $R_1$, ker je v zaporedju z ostalim.
4. **Napetost na $R_1$.** $U_1 = 0{,}8 \cdot 10 = 8\,\text{V}$.
5. **Napetost na vzporednem delu.** Po drugem Kirchhoffovem zakonu: $U_{23} = 24 - 8 = 16\,\text{V}$. Preverimo: $0{,}8 \cdot 20 = 16\,\text{V}$. ✓
6. **Tokova po vejah.** $I_2 = \dfrac{16}{30} \approx 0{,}53\,\text{A}$ in $I_3 = \dfrac{16}{60} \approx 0{,}27\,\text{A}$. Vsota je $0{,}8\,\text{A}$, kar ustreza prvemu Kirchhoffovemu zakonu. ✓
7. **Moč na $R_1$.** $P_1 = I^2 R_1 = 0{,}8^2 \cdot 10 = 0{,}64 \cdot 10 = 6{,}4\,\text{W}$.
8. **Odgovor.** Skozi $R_1$ teče $0{,}8\,\text{A}$, skozi $R_2$ približno $0{,}53\,\text{A}$, skozi $R_3$ približno $0{,}27\,\text{A}$. Moč na $R_1$ je $6{,}4\,\text{W}$.

## Pogoste napake

- **Vzporedni upor kot vsota.** Pri vzporedni vezavi se seštevajo *recipročne vrednosti*. Če dobiš rezultat, večji od najmanjšega upora, si se zmotil.
- **Pozabljeno obračanje.** Ko izračunaš $\dfrac{1}{R}$, moraš na koncu še obrniti ulomek.
- **Enak tok pri vzporedni vezavi.** Pri vzporedni vezavi je enaka *napetost*, tokovi pa se delijo (več teče po veji z manjšim uporom).
- **Enaka napetost pri zaporedni vezavi.** Pri zaporedni vezavi je enak *tok*, napetost se razdeli.
- **Napačna formula za moč.** $P = U \cdot I$, ne $U / I$. Pri izračunu z uporom pazi na kvadrat: $P = I^2 R$.
- **Mešanje enot.** Moč merimo v vatih ($\text{W}$), delo v džulih ($\text{J}$): $1\,\text{J} = 1\,\text{W}\cdot\text{s}$.

## Povzetek

- Prvi Kirchhoffov zakon: vsota vtekajočih tokov v vozlišče je enaka vsoti iztekajočih.
- Drugi Kirchhoffov zakon: v sklenjeni zanki je napetost vira enaka vsoti padcev napetosti.
- Zaporedno: enak tok, $U = U_1 + U_2$, $R = R_1 + R_2$.
- Vzporedno: enaka napetost, $I = I_1 + I_2$, $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$.
- Moč: $P = UI = I^2 R = \dfrac{U^2}{R}$, delo $A = Pt$.
- Mešana vezava: najprej poenostavi na nadomestni upor, nato računaj nazaj proti posameznim delom.

## Drugače: Na sliki

Predstavljaj si tok kot vodo v ceveh.

**Zaporedna vezava** je ena sama cev z več zožitvami zaporedoma. Skozi vsako zožitev teče enaka količina vode na sekundo (enak tok), tlak (napetost) pa se pri vsaki zožitvi zmanjša. Več zožitev pomeni večji skupni upor.

**Vzporedna vezava** je cev, ki se razcepi na dve poti in se spet združi. Pretok se razdeli (tokovi se seštevajo), tlačna razlika med razcepom in sotočjem je za obe poti enaka (enaka napetost). Več poti pomeni lažji pretok, zato je skupni upor manjši.

**Prvi Kirchhoffov zakon:** v razcepu ne izgine in ne nastane voda, kolikor je priteče, toliko je odteče.

V interaktivni simulaciji spodaj (»Zaporedna in vzporedna vezava upornikov«) lahko sestaviš vezje in z ampermetrom ter voltmetrom preveriš, da se vsota tokov v vozlišču ujema.

## Drugače: Iz vsakdanjega življenja

**Novoletne lučke.** Starejši nizi imajo žarnice vezane zaporedno. Ko ena pregori, se tokokrog prekine in ugasnejo vse. Vsaka žarnica dobi le del napetosti vira.

**Električna napeljava v stanovanju.** Porabniki so vezani vzporedno, vsak je priključen na isto napetost vtičnice ($230\,\text{V}$). Zato lahko ugasneš eno svetilko, druge pa svetijo naprej. Hkrati pa velja: več naprav vklopiš, večji je skupni tok, ker se tokovi seštevajo. Zato varovalka prekine tokokrog, če priključiš preveč močnih porabnikov.

**Moč grelnika.** Grelnik z močjo $2000\,\text{W}$ na $230\,\text{V}$ vleče tok $I = \dfrac{2000}{230} \approx 8{,}7\,\text{A}$. Če deluje eno uro ($3600\,\text{s}$), porabi $2000 \cdot 3600 = 7\,200\,000\,\text{J}$, kar je $2\,\text{kWh}$ (tisto, kar vidiš na računu za elektriko).

## Drugače: Korak za korakom s številkami

Primer: vir $9\,\text{V}$, zaporedno upornika $R_1 = 100\,\Omega$ in $R_2 = 200\,\Omega$ ter vzporedno temu paru upornik $R_3 = 300\,\Omega$ (obe veji sta priključeni na isti vir).

| Korak | Izračun | Rezultat |
|---|---|---|
| Zaporedna veja | $100 + 200$ | $300\,\Omega$ |
| Tok po tej veji | $9 / 300$ | $0{,}03\,\text{A}$ |
| Tok po $R_3$ | $9 / 300$ | $0{,}03\,\text{A}$ |
| Skupni tok | $0{,}03 + 0{,}03$ | $0{,}06\,\text{A}$ |
| Nadomestni upor | $9 / 0{,}06$ | $150\,\Omega$ |
| Skupna moč | $9 \cdot 0{,}06$ | $0{,}54\,\text{W}$ |

Preverjanje nadomestnega upora: dve enaki veji po $300\,\Omega$ vzporedno dasta polovico, $150\,\Omega$. ✓

Napetosti v zaporedni veji: $U_1 = 0{,}03 \cdot 100 = 3\,\text{V}$, $U_2 = 0{,}03 \cdot 200 = 6\,\text{V}$, skupaj $9\,\text{V}$. ✓

## Drugače: Bolj natančno

**Izpeljava nadomestnega upora pri zaporedni vezavi.** Po drugem Kirchhoffovem zakonu je $U = U_1 + U_2 = I R_1 + I R_2 = I (R_1 + R_2)$. Ker je $U = I R$, sledi $R = R_1 + R_2$.

**Izpeljava pri vzporedni vezavi.** Po prvem Kirchhoffovem zakonu je $I = I_1 + I_2 = \dfrac{U}{R_1} + \dfrac{U}{R_2} = U\left(\dfrac{1}{R_1} + \dfrac{1}{R_2}\right)$. Ker je $I = \dfrac{U}{R}$, sledi $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$.

**Izvor moči.** Električna napetost je delo na enoto naboja: $U = \dfrac{A}{e}$ (tukaj $e$ označuje naboj, ki preteče). Tok je $I = \dfrac{e}{t}$. Moč je delo na čas: $P = \dfrac{A}{t} = \dfrac{U e}{t} = U I$.

**Ohranitev energije.** Moč, ki jo da vir, je vsota moči na vseh porabnikih. Pri zaporedni vezavi: $UI = U_1 I + U_2 I$, kar je ravno drugi Kirchhoffov zakon, pomnožen s tokom.

## Preveri se

? Upornika $15\,\Omega$ in $45\,\Omega$ sta zaporedno vezana na $12\,\text{V}$. Kolikšen je tok?
- $0{,}8\,\text{A}$
+ $0{,}2\,\text{A}$
- $5\,\text{A}$
- $3{,}75\,\text{A}$
> Zaporedno se upori seštevajo: $R = 15 + 45 = 60\,\Omega$, torej $I = 12 / 60 = 0{,}2\,\text{A}$. Odgovor $0{,}8\,\text{A}$ dobiš, če upoštevaš samo $15\,\Omega$, odgovor $5\,\text{A}$ pa, če deliš narobe (obrnjeno razmerje).

? Upornika $20\,\Omega$ in $30\,\Omega$ sta vezana vzporedno. Kolikšen je nadomestni upor?
- $50\,\Omega$
- $25\,\Omega$
+ $12\,\Omega$
> $R = \dfrac{20 \cdot 30}{20 + 30} = \dfrac{600}{50} = 12\,\Omega$. Pri vzporedni vezavi je nadomestni upor vedno manjši od najmanjšega posameznega upora, zato $25\,\Omega$ (povprečje) in $50\,\Omega$ (vsota) ne moreta biti pravilna.

? Grelec ima upor $50\,\Omega$ in je priključen na napetost $100\,\text{V}$. Kolikšna je njegova moč?
- $2\,\text{W}$
- $5000\,\text{W}$
+ $200\,\text{W}$
- $50\,\text{W}$
> $P = \dfrac{U^2}{R} = \dfrac{100^2}{50} = \dfrac{10\,000}{50} = 200\,\text{W}$. Odgovor $2\,\text{W}$ dobiš, če izračunaš samo tok ($I = U/R = 2\,\text{A}$) in ga zamenjaš z močjo, $5000\,\text{W}$ pa, če napetost pomnožiš z uporom ($100 \cdot 50$).
