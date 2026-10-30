---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Sisteme dveh enačb z dvema neznankama že znaš reševati z vstavljanjem ali s seštevanjem enačb. V naravoslovju in tehniki pa se neznanke množijo: koncentracije več snovi v zmesi, tokovi v razvejenem vezju, sile v paličju, koeficienti pri urejanju kemijske enačbe, pretoki v cevovodu, temperature v točkah mreže pri simulaciji prevajanja toplote. Vse to so **sistemi linearnih enačb**, pogosto z desetinami ali tisoči neznank.

Potrebujemo torej postopek, ki:

- deluje za poljubno število enačb in neznank,
- je sistematičen, da ga lahko izvede tudi računalnik,
- pove ne le rešitev, ampak tudi, **ali** rešitev obstaja in **koliko** jih je.

Ta postopek je **Gaussova eliminacija**. Ključni pojem, ki pove, kaj se s sistemom dogaja, je **rang** matrike. V tej lekciji se naučiš zapisati sistem z matriko, ga rešiti z Gaussovo eliminacijo, določiti rang in z njim presoditi rešljivost.

## Razlaga

**1. Zapis sistema.** Sistem $m$ linearnih enačb z $n$ neznankami

$$a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1, \quad \dots, \quad a_{m1}x_1 + \dots + a_{mn}x_n = b_m$$

zapišemo kot $A\vec{x} = \vec{b}$, kjer je $A = [a_{ij}]$ **matrika sistema** ($m \times n$), $\vec{x}$ stolpec neznank in $\vec{b}$ stolpec desnih strani. Če $A$ dopolnimo s stolpcem $\vec{b}$, dobimo **razširjeno matriko** $[A \mid \vec{b}]$. Sistem je **homogen**, če je $\vec{b} = \vec{0}$; tak sistem ima vedno vsaj trivialno rešitev $\vec{x} = \vec{0}$.

**2. Elementarne vrstične operacije.** Množice rešitev ne spremenijo:

1. zamenjava dveh vrstic (enačb),
2. množenje vrstice s številom, **različnim od nič**,
3. prištevanje večkratnika ene vrstice drugi vrstici.

Vsaka operacija je obrnljiva (lahko jo »razveljavimo«), zato iz novega sistema dobimo natanko iste rešitve kot iz starega.

**3. Gaussova eliminacija.** Z operacijami preoblikujemo razširjeno matriko v **vrstično stopničasto obliko**:

- vse ničelne vrstice so spodaj,
- prvi neničelni element vsake vrstice (**pivot** ali vodilni element) leži desno od pivota vrstice nad njo,
- pod vsakim pivotom so same ničle.

Postopek: v prvem stolpcu izberemo neničelni element (po potrebi zamenjamo vrstici), z njim »pobrišemo« vse elemente pod njim, nato se premaknemo za eno vrstico navzdol in en stolpec desno ter ponovimo. Na koncu sistem rešimo **od spodaj navzgor** (obratno vstavljanje). Če nadaljujemo, dokler vsak pivot ni enak $1$ in nad njim niso same ničle, dobimo **reducirano stopničasto obliko** (Gauss-Jordanova metoda), iz katere rešitev preberemo neposredno.

**4. Rang.** **Rang** matrike, $\operatorname{rang} A$, je število neničelnih vrstic (pivotov) v njeni stopničasti obliki. Enakovredno: največje število linearno neodvisnih vrstic (ali stolpcev). Velja $\operatorname{rang} A \le \min(m, n)$. Za kvadratno matriko reda $n$ je $\operatorname{rang} A = n$ natanko tedaj, ko je $\det A \neq 0$.

**5. Rešljivost (Kronecker-Capellijev izrek).** Naj bo $r = \operatorname{rang} A$ in $n$ število neznank.

- Če je $\operatorname{rang}[A \mid \vec{b}] > \operatorname{rang} A$, sistem **ni rešljiv** (protisloven). V stopničasti obliki se to pokaže kot vrstica $[0 \; 0 \; \cdots \; 0 \mid c]$ s $c \neq 0$, torej enačba $0 = c$.
- Če je $\operatorname{rang}[A \mid \vec{b}] = \operatorname{rang} A = n$, ima sistem **natanko eno rešitev**.
- Če je $\operatorname{rang}[A \mid \vec{b}] = \operatorname{rang} A = r < n$, ima sistem **neskončno rešitev**, ki so odvisne od $n - r$ prostih parametrov.

Neznanke, ki ustrezajo stolpcem s pivoti, so **vezane**, ostale so **proste**: prostim damo poljubne vrednosti (parametre $t$, $s$, …), vezane pa izrazimo z njimi.

**6. Kvadratni sistemi.** Če je $m = n$ in $\det A \neq 0$, ima sistem natanko eno rešitev $\vec{x} = A^{-1}\vec{b}$. Če je $\det A = 0$, sistem nima rešitve ali pa jih ima neskončno; kaj od tega velja, odloči primerjava rangov. Homogen kvadratni sistem ima netrivialno rešitev natanko tedaj, ko je $\det A = 0$.

**7. Geometrijska slika.** Enačba s tremi neznankami predstavlja ravnino v prostoru. Tri ravnine se lahko sekajo v eni točki (ena rešitev), v skupni premici (neskončno rešitev, en parameter), lahko pa nimajo skupne točke (npr. dve sta vzporedni; ni rešitve).

## Rešeni primeri

### Primer 1 (lažji)

Laborant želi pripraviti $600\,\mathrm{g}$ raztopine z masnim deležem soli $20\,\%$ tako, da zmeša raztopino z masnim deležem $10\,\%$ in raztopino z masnim deležem $40\,\%$. Koliko vsake potrebuje? Sistem reši z Gaussovo eliminacijo razširjene matrike.

**Podatki:** skupna masa $600\,\mathrm{g}$, ciljni masni delež $20\,\%$, masna deleža izhodnih raztopin $10\,\%$ in $40\,\%$
**Iščemo:** masi $x$ (raztopina $10\,\%$) in $y$ (raztopina $40\,\%$)

:::formula
Bilanca mase: $x + y = 600$; bilanca soli: $0{,}10\,x + 0{,}40\,y = 0{,}20 \cdot 600$. Razširjena matrika $[A \mid \vec{b}]$ in vrstične operacije.
:::

**Rešitev:**

1. Masa soli v zmesi: $0{,}20 \cdot 600\,\mathrm{g} = 120\,\mathrm{g}$. Sistem: $x + y = 600$, $0{,}1x + 0{,}4y = 120$.
2. Razširjena matrika: $\left[\begin{array}{cc|c} 1 & 1 & 600 \\ 0{,}1 & 0{,}4 & 120 \end{array}\right]$.
3. Drugo vrstico pomnožimo z $10$: $\left[\begin{array}{cc|c} 1 & 1 & 600 \\ 1 & 4 & 1200 \end{array}\right]$.
4. Od druge vrstice odštejemo prvo: $\left[\begin{array}{cc|c} 1 & 1 & 600 \\ 0 & 3 & 600 \end{array}\right]$, torej $3y = 600$ in $y = 200$.
5. Obratno vstavljanje: $x = 600 - 200 = 400$.
6. Preizkus: $0{,}1 \cdot 400 + 0{,}4 \cdot 200 = 40 + 80 = 120$.
7. Odgovor: zmešati mora $400\,\mathrm{g}$ raztopine z $10\,\%$ in $200\,\mathrm{g}$ raztopine s $40\,\%$ soli.

### Primer 2

Z Gaussovo eliminacijo reši sistem in določi rang matrike sistema:
$x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$.

**Podatki:** enačbe $x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$ (tri enačbe, tri neznanke)
**Iščemo:** rešitev $(x, y, z)$ in $\operatorname{rang} A$

:::formula
Stopničasta oblika z vrstičnimi operacijami, nato obratno vstavljanje. Ena rešitev, če $\operatorname{rang} A = \operatorname{rang}[A \mid \vec{b}] = n$.
:::

**Rešitev:**

1. $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & -1 & 1 & 3 \\ 1 & 2 & -1 & 2 \end{array}\right]$
2. $V_2 - 2V_1$ in $V_3 - V_1$: $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 1 & -2 & -4 \end{array}\right]$.
3. Zamenjamo $V_2$ in $V_3$ (pivot $1$ je prijaznejši): $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & -2 & -4 \\ 0 & -3 & -1 & -9 \end{array}\right]$.
4. $V_3 + 3V_2$: $\left[\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & 1 & -2 & -4 \\ 0 & 0 & -7 & -21 \end{array}\right]$. Trije pivoti, zato $\operatorname{rang} A = \operatorname{rang}[A \mid \vec{b}] = 3 = n$.
5. Obratno vstavljanje: $-7z = -21$, $z = 3$; $y - 2 \cdot 3 = -4$, $y = 2$; $x + 2 + 3 = 6$, $x = 1$.
6. Preizkus: $2 \cdot 1 - 2 + 3 = 3$ in $1 + 4 - 3 = 2$.
7. Odgovor: rang matrike sistema je $3$, sistem ima natanko eno rešitev $x = 1$, $y = 2$, $z = 3$.

### Primer 3 (težji)

Za katere vrednosti parametra $a$ je sistem
$x + 2y - z = 1$, $2x + 5y + z = 4$, $x + 3y + 2z = a$
rešljiv? Kadar je rešljiv, zapiši vse rešitve.

**Podatki:** enačbe $x + 2y - z = 1$, $2x + 5y + z = 4$, $x + 3y + 2z = a$, parameter $a \in \mathbb{R}$
**Iščemo:** vrednosti $a$, pri katerih je sistem rešljiv, in splošno rešitev

:::formula
Kronecker-Capelli: rešljiv $\iff \operatorname{rang} A = \operatorname{rang}[A \mid \vec{b}]$; število prostih parametrov je $n - r$.
:::

**Rešitev:**

1. $\left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 2 & 5 & 1 & 4 \\ 1 & 3 & 2 & a \end{array}\right]$
2. $V_2 - 2V_1$ in $V_3 - V_1$: $\left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 1 & 3 & 2 \\ 0 & 1 & 3 & a - 1 \end{array}\right]$.
3. $V_3 - V_2$: $\left[\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 1 & 3 & 2 \\ 0 & 0 & 0 & a - 3 \end{array}\right]$.
4. Matrika sistema ima dva pivota, zato $\operatorname{rang} A = 2$ (in $\det A = 0$).
5. Če je $a \neq 3$, zadnja vrstica pomeni $0 = a - 3 \neq 0$; $\operatorname{rang}[A \mid \vec{b}] = 3 > 2$, sistem ni rešljiv.
6. Če je $a = 3$, sta ranga enaka $2 < 3$: en prost parameter. Vzamemo $z = t$. Iz druge vrstice $y = 2 - 3t$, iz prve $x = 1 - 2y + z = 1 - 4 + 6t + t = -3 + 7t$.
7. Preizkus v tretji enačbi ($a = 3$): $(-3 + 7t) + 3(2 - 3t) + 2t = -3 + 6 + 7t - 9t + 2t = 3$, za vsak $t$.
8. Odgovor: sistem je rešljiv samo za $a = 3$; tedaj ima neskončno rešitev $(x, y, z) = (-3 + 7t,\ 2 - 3t,\ t)$, $t \in \mathbb{R}$. Geometrijsko se tri ravnine sekajo v premici.

## Pogoste napake

- **Množenje vrstice z $0$.** To ni dovoljena operacija, ker izbriše enačbo in spremeni množico rešitev. Dovoljeno je množenje le z neničelnim številom.
- **Pozabljen desni stolpec.** Operacijo izvedemo na levi strani, desno stran pa pozabimo spremeniti. Vedno delaj z razširjeno matriko $[A \mid \vec{b}]$ in računaj celo vrstico.
- **Vrstica $[0 \; 0 \; 0 \mid 0]$ pomeni »ni rešitve«.** Ne: to je le odvečna enačba ($0 = 0$). Protislovje pomeni samo vrstica $[0 \; 0 \; 0 \mid c]$ s $c \neq 0$.
- **Napačno štetje prostih parametrov.** Število parametrov je $n - r$ (neznanke minus rang), ne število ničelnih vrstic.
- **»Več enačb kot neznank, torej ni rešitve.«** Število enačb samo po sebi ne odloča; nekatere enačbe so lahko odvisne. Odloča primerjava rangov.
- **Deljenje s parametrom brez preverjanja.** Če pri parametričnem sistemu deliš z $a - 3$, moraš primer $a = 3$ obravnavati posebej.

## Povzetek

- Sistem zapišemo kot $A\vec{x} = \vec{b}$ in delamo z razširjeno matriko $[A \mid \vec{b}]$.
- Elementarne vrstične operacije (zamenjava, množenje z $\lambda \neq 0$, prištevanje večkratnika) ne spremenijo rešitev.
- Gaussova eliminacija: stopničasta oblika, nato obratno vstavljanje; Gauss-Jordan: reducirana oblika.
- Rang je število pivotov v stopničasti obliki.
- Kronecker-Capelli: rešljiv $\iff \operatorname{rang} A = \operatorname{rang}[A \mid \vec{b}] = r$; pri $r = n$ ena rešitev, pri $r < n$ neskončno rešitev z $n - r$ parametri.
- Kvadratni sistem z $\det A \neq 0$ ima natanko eno rešitev.

## Drugače: Na sliki

Pri dveh neznankah je vsaka enačba premica v ravnini. Možnosti so tri:

```
 ena rešitev          ni rešitve           neskončno rešitev
     \   /             ______              ______
      \ /              ______              ======  (premici
       X  (presečišče)  (vzporedni)                 sovpadata)
      / \
```

- Premici se sekata: $\operatorname{rang} A = \operatorname{rang}[A \mid \vec{b}] = 2$.
- Premici sta vzporedni in različni: $\operatorname{rang} A = 1$, $\operatorname{rang}[A \mid \vec{b}] = 2$.
- Premici sovpadata: oba ranga sta $1$, en prost parameter.

Pri treh neznankah so enačbe ravnine. V Primeru 3 smo dobili $\operatorname{rang} A = 2$: tri ravnine pri $a = 3$ gredo skozi isto premico (kot listi odprte knjige okoli hrbta), pri $a \neq 3$ pa se vsak par ravnin seka v svoji premici, vse tri skupaj pa nimajo skupne točke (kot tri stranice trikotne prizme).

## Drugače: Iz vsakdanjega življenja

**Urejanje kemijske enačbe.** Pri gorenju propana iščemo koeficiente v $a\,\mathrm{C_3H_8} + b\,\mathrm{O_2} \to c\,\mathrm{CO_2} + d\,\mathrm{H_2O}$. Ohranitev atomov da homogen sistem: ogljik $3a = c$, vodik $8a = 2d$, kisik $2b = 2c + d$. Neznanke so štiri, rang matrike sistema je $3$, zato je en prost parameter: rešitve so večkratniki ene same. Izberemo $a = 1$: $c = 3$, $d = 4$, $2b = 6 + 4 = 10$, $b = 5$. Enačba $\mathrm{C_3H_8} + 5\,\mathrm{O_2} \to 3\,\mathrm{CO_2} + 4\,\mathrm{H_2O}$ je urejena, prost parameter pa pove, da lahko vse koeficiente pomnožimo z istim številom.

**Električna vezja.** Kirchhoffova zakona (vsota tokov v vozlišču je nič, vsota napetosti v zanki je nič) dasta linearen sistem za neznane tokove. Če napišemo preveč enačb, so nekatere odvisne in rang to razkrije.

**Prehrana in krmne mešanice.** Agronom sestavlja krmo iz več surovin tako, da ima mešanica predpisano količino beljakovin, maščob in vlaknin. Vsaka hranilna snov da eno enačbo. Če je surovin več kot pogojev, je rešitev neskončno, in med njimi izberemo najcenejšo; to vodi v linearno programiranje.

## Drugače: Korak za korakom s številkami

Reši $3x + 2y = 7$, $x - y = -1$ z Gauss-Jordanovo metodo.

1. Razširjena matrika: $\left[\begin{array}{cc|c} 3 & 2 & 7 \\ 1 & -1 & -1 \end{array}\right]$.
2. Zamenjamo vrstici, da je pivot $1$: $\left[\begin{array}{cc|c} 1 & -1 & -1 \\ 3 & 2 & 7 \end{array}\right]$.
3. $V_2 - 3V_1$: $3 - 3 = 0$, $2 - 3 \cdot (-1) = 5$, $7 - 3 \cdot (-1) = 10$. Dobimo $\left[\begin{array}{cc|c} 1 & -1 & -1 \\ 0 & 5 & 10 \end{array}\right]$.
4. $V_2 : 5$: $\left[\begin{array}{cc|c} 1 & -1 & -1 \\ 0 & 1 & 2 \end{array}\right]$.
5. $V_1 + V_2$ (ničla nad pivotom): $\left[\begin{array}{cc|c} 1 & 0 & 1 \\ 0 & 1 & 2 \end{array}\right]$.
6. Preberemo: $x = 1$, $y = 2$.
7. Preizkus: $3 \cdot 1 + 2 \cdot 2 = 7$ in $1 - 2 = -1$. Rang je $2 = n$, rešitev je ena sama.

Enak postopek z matriko $[A \mid I]$ namesto $[A \mid \vec{b}]$ da inverzno matriko $A^{-1}$.

## Drugače: Bolj natančno

**Zakaj vrstične operacije ohranjajo rešitve.** Vsaka elementarna operacija je množenje z leve z obrnljivo **elementarno matriko** $E$. Iz $A\vec{x} = \vec{b}$ sledi $EA\vec{x} = E\vec{b}$, iz tega pa z množenjem z $E^{-1}$ spet $A\vec{x} = \vec{b}$. Sistema sta torej ekvivalentna. Gaussova eliminacija da $PA = LU$ (permutacijska, spodnje in zgornje trikotna matrika), kar je osnova numeričnih knjižnic.

**Struktura množice rešitev.** Naj bo $\vec{x}_p$ ena (partikularna) rešitev sistema $A\vec{x} = \vec{b}$. Potem je vsaka rešitev oblike $\vec{x} = \vec{x}_p + \vec{x}_h$, kjer je $\vec{x}_h$ rešitev homogenega sistema $A\vec{x} = \vec{0}$. Dokaz: $A(\vec{x} - \vec{x}_p) = \vec{b} - \vec{b} = \vec{0}$. Rešitve homogenega sistema tvorijo vektorski podprostor (jedro, $\ker A$) dimenzije $n - \operatorname{rang} A$ (izrek o rangu in ničnosti). V Primeru 3 je $\vec{x}_p = (-3, 2, 0)$, jedro pa je premica, ki jo razpenja $(7, -3, 1)$.

**Kronecker-Capellijev izrek.** $A\vec{x} = \vec{b}$ je rešljiv natanko tedaj, ko je $\vec{b}$ linearna kombinacija stolpcev matrike $A$, saj je $A\vec{x} = x_1\vec{a}_1 + \dots + x_n\vec{a}_n$. To pomeni, da dodajanje stolpca $\vec{b}$ ne poveča dimenzije prostora stolpcev, torej $\operatorname{rang}[A \mid \vec{b}] = \operatorname{rang} A$.

**Numerična opomba.** Pri računanju s plavajočo vejico izbiramo za pivot element z največjo absolutno vrednostjo v stolpcu (**delno pivotiranje**). Deljenje z zelo majhnim pivotom namreč močno poveča zaokrožitvene napake. Sistemi s skoraj singularno matriko (vrstice so skoraj linearno odvisne) so **slabo pogojeni**: majhna sprememba podatkov (npr. merska napaka) povzroči veliko spremembo rešitve. Majhna determinanta sama po sebi tega še ne pomeni: matrika $0{,}1\,I$ reda $10$ ima $\det = 10^{-10}$, pa je odlično pogojena.

## Preveri se

? Po Gaussovi eliminaciji ima sistem $\operatorname{rang} A = 2$ in $\operatorname{rang}[A \mid \vec{b}] = 3$. Kaj velja?
- Sistem ima natanko eno rešitev.
- Sistem ima neskončno rešitev z enim parametrom.
+ Sistem ni rešljiv.
> Rang razširjene matrike je večji, kar pomeni vrstico oblike $0 = c$ s $c \neq 0$, torej protislovje.

? Sistem s $4$ neznankami ima $\operatorname{rang} A = \operatorname{rang}[A \mid \vec{b}] = 2$. Koliko prostih parametrov ima splošna rešitev?
- $0$
+ $2$
- $4$
> Število prostih parametrov je $n - r = 4 - 2 = 2$.

? Katera operacija na razširjeni matriki **ni** dovoljena?
- zamenjava dveh vrstic
- prištevanje trikratnika prve vrstice drugi vrstici
+ množenje vrstice z $0$
> Množenje z $0$ izbriše enačbo in ga ni mogoče razveljaviti, zato lahko spremeni množico rešitev.

? Kaj je rešitev sistema $x + y = 5$, $x - y = 1$?
- $x = 2$, $y = 3$
+ $x = 3$, $y = 2$
- $x = 4$, $y = 1$
> Seštejemo enačbi: $2x = 6$, $x = 3$, nato $y = 5 - 3 = 2$. Preizkus: $3 - 2 = 1$.

:::simboli
a_{11}, a_{12}, a_{1n}, a_{m1}, a_{mn} | koeficienti sistema (elementi matrike A) | | | a_{ij}: i-ta enačba, j-ta neznanka
x_1, x_2, x_n | neznanke sistema | | |
b_1, b_m | desne strani enačb | | |
x | masa raztopine z deležem 10 % | | g |
y | masa raztopine z deležem 40 % | | g |
A | matrika sistema | | | razsežnost m × n
\vec{b} | stolpec desnih strani | | |
n | število neznank | | |
r | rang matrike sistema | r = \operatorname{rang} A | | n − r je število prostih parametrov
:::
