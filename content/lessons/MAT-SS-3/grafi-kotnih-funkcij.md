---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Na morju gladina dvakrat na dan naraste in dvakrat upade. Sedež na panoramskem kolesu se dviga in spušča, vsak obrat enako. Dnevna temperatura je čez dan višja, ponoči nižja, in tako dan za dnem. Vsi ti pojavi se **ponavljajo**.

Iz prejšnje lekcije veš, da se vrednosti sinusa in kosinusa ponovijo po vsakem polnem obratu. Če jih narišemo kot graf, dobimo val. Ko znaš ta val raztegniti, skrčiti in premakniti, lahko z eno formulo opišeš plimo, kolo ali nihanje vzmeti.

## Razlaga

**1. Od krožnice do grafa.** Točka $T$ kroži po enotski krožnici. Njena navpična koordinata je $\sin x$, kjer je $x$ kot v radianih. Na vodoravno os nanašamo kot $x$, na navpično pa višino točke. Nekaj vrednosti:

| $x$ | $0$ | $\frac{\pi}{2}$ | $\pi$ | $\frac{3\pi}{2}$ | $2\pi$ |
|---|---|---|---|---|---|
| $\sin x$ | $0$ | $1$ | $0$ | $-1$ | $0$ |
| $\cos x$ | $1$ | $0$ | $-1$ | $0$ | $1$ |

Točke povežemo z gladko krivuljo. Dobimo **sinusoido**: val, ki se dvigne do $1$, pade do $-1$ in se vrne na $0$.

V simulaciji spodaj (»Od enotske krožnice do grafa«) počasi povečuj kot od $0$ do $2\pi$. Opazuj, kako višina točke na krožnici sproti riše graf. Pri katerem kotu je graf najvišje?

**2. Perioda.** Funkcija je **periodična**, če se njene vrednosti ponavljajo: obstaja število $T > 0$, da je $f(x + T) = f(x)$ za vsak $x$. Najmanjše tako število je **osnovna perioda**. Za sinus in kosinus je osnovna perioda $2\pi$, ker je to en poln obrat.

**3. Lastnosti osnovnih grafov.**

| | $\sin x$ | $\cos x$ |
|---|---|---|
| zaloga vrednosti | $[-1, 1]$ | $[-1, 1]$ |
| ničle | $k\pi$ | $\frac{\pi}{2} + k\pi$ |
| maksimum $1$ pri | $\frac{\pi}{2} + 2k\pi$ | $2k\pi$ |

Tu je $k$ poljubno celo število. Graf kosinusa ima enako obliko kot graf sinusa, le premaknjen je za $\frac{\pi}{2}$ v levo.

Graf **tangensa** je drugačen. Tangens ni definiran tam, kjer je $\cos x = 0$, torej pri $x = \frac{\pi}{2} + k\pi$. Tam ima graf **navpične asimptote**: premice, ki se jim graf vse bolj približuje, a jih ne doseže. Zaloga vrednosti tangensa so vsa realna števila, osnovna perioda pa je $\pi$.

:::premisli
Ali je $\sin 4$ pozitiven ali negativen? Pomagaj si z grafom, ne s kalkulatorjem.
---
Negativen. Velja $\pi \approx 3{,}14 < 4 < \frac{3\pi}{2} \approx 4{,}71$, na tem delu pa je graf sinusa pod osjo $x$ (padajoč proti $-1$).
:::

**4. Splošna sinusna funkcija.** Graf lahko spreminjamo s štirimi parametri:

$$f(x) = A\sin\big(b(x - c)\big) + d$$

| parameter | kaj naredi | pravilo |
|---|---|---|
| $A$ | raztegne v smeri osi $y$ | amplituda $\lvert A\rvert$ |
| $b$ | skrči ali raztegne v smeri osi $x$ | $T = \frac{2\pi}{\lvert b\rvert}$ |
| $c$ | premakne levo ali desno | za $c$ v smeri osi $x$ |
| $d$ | premakne gor ali dol | srednja črta $y = d$ |

**Amplituda** je razdalja od srednje črte do vrha vala, torej $|A|$. Če je $A < 0$, se graf še zrcali čez srednjo črto. Največja vrednost funkcije je $d + |A|$, najmanjša $d - |A|$.

Premik $c$ preberi previdno. Pri $\sin(x - c)$ se graf premakne **v desno** za $c$, če je $c > 0$. Razlog: vrednost, ki jo je $\sin$ imel pri $0$, ima zdaj $f$ pri $x = c$.

V simulaciji spodaj (»Graf A sin(b(x − c)) + d«) nastavi $A = 1$, $b = 1$, $c = 0$, $d = 0$. Nato spremeni $b$ na $2$. Preštej, koliko celih valov je zdaj med $0$ in $2\pi$. Potem nastavi $c = 1$ in opazi, v katero smer se val premakne.

:::premisli
Zakaj ima $\sin 2x$ periodo $\pi$ in ne $4\pi$?
---
Ker kot $2x$ teče dvakrat hitreje kot $x$. Ko $x$ naraste za $\pi$, naraste $2x$ že za $2\pi$, kar je cel obrat. Graf se zato v smeri osi $x$ skrči na polovico: $T = \frac{2\pi}{2} = \pi$.
:::

**5. Pazi na obliko.** Če je funkcija zapisana kot $\sin(2x - \frac{\pi}{2})$, najprej izpostavi $b$: $2x - \frac{\pi}{2} = 2\left(x - \frac{\pi}{4}\right)$. Premik je $c = \frac{\pi}{4}$, ne $\frac{\pi}{2}$.

Enako velja za kosinus: $f(x) = A\cos\big(b(x - c)\big) + d$ ima amplitudo $|A|$, periodo $\frac{2\pi}{|b|}$ in enaka premika.

## Rešeni primeri

### Primer 1 (lažji)

Dana je funkcija $f(x) = 3\sin x - 1$. Določi amplitudo, osnovno periodo in zalogo vrednosti. Kje na intervalu $[0, 2\pi]$ doseže največjo vrednost?

**Podatki:** $f(x) = 3\sin x - 1$, interval $[0, 2\pi]$
**Iščemo:** amplitudo, periodo $T$, zalogo vrednosti $Z_f$, mesto maksimuma

:::formula
$f(x) = A\sin\big(b(x - c)\big) + d$: amplituda $|A|$, $T = \dfrac{2\pi}{|b|}$, $Z_f = [d - |A|,\ d + |A|]$
:::

**Rešitev:**

1. Primerjamo s splošno obliko: $A = 3$, $b = 1$, $c = 0$, $d = -1$.
2. Amplituda je $|A| = 3$, ker je val trikrat višji od osnovnega.
3. $T = \frac{2\pi}{1} = 2\pi$, ker $b$ grafa ne skrči.
4. $Z_f = [-1 - 3,\ -1 + 3] = [-4, 2]$, ker je srednja črta pri $y = -1$.
5. $\sin x$ je največji pri $x = \frac{\pi}{2}$, zato tam tudi $f$: $f\left(\frac{\pi}{2}\right) = 3 \cdot 1 - 1 = 2$.
6. Odgovor: amplituda je $3$, perioda $2\pi$, $Z_f = [-4, 2]$; največjo vrednost $2$ doseže pri $x = \frac{\pi}{2}$.

### Primer 2 (srednji)

Za funkcijo $f(x) = 2\sin\left(2x - \frac{\pi}{2}\right) + 1$ določi amplitudo, osnovno periodo, premika in zalogo vrednosti. Pri katerem najmanjšem pozitivnem $x$ ima maksimum?

**Podatki:** $f(x) = 2\sin\left(2x - \frac{\pi}{2}\right) + 1$
**Iščemo:** amplitudo, $T$, premik v smeri osi $x$ in $y$, $Z_f$, prvi maksimum

:::formula
$f(x) = A\sin\big(b(x - c)\big) + d$, $\quad T = \dfrac{2\pi}{|b|}$; $\sin u = 1$ pri $u = \dfrac{\pi}{2} + 2k\pi$
:::

**Rešitev:**

1. Izpostavimo $2$: $2x - \frac{\pi}{2} = 2\left(x - \frac{\pi}{4}\right)$, da dobimo splošno obliko.
2. Preberemo $A = 2$, $b = 2$, $c = \frac{\pi}{4}$, $d = 1$.
3. Amplituda je $2$; perioda $T = \frac{2\pi}{2} = \pi$.
4. Graf je premaknjen za $\frac{\pi}{4}$ v desno in za $1$ navzgor.
5. $Z_f = [1 - 2,\ 1 + 2] = [-1, 3]$.
6. Maksimum je tam, kjer je $\sin$ enak $1$: $2\left(x - \frac{\pi}{4}\right) = \frac{\pi}{2}$, torej $x - \frac{\pi}{4} = \frac{\pi}{4}$ in $x = \frac{\pi}{2}$.
7. Preverimo: $f\left(\frac{\pi}{2}\right) = 2\sin\frac{\pi}{2} + 1 = 3$, kar je res zgornja meja $Z_f$.
8. Odgovor: amplituda $2$, perioda $\pi$, premik $\frac{\pi}{4}$ desno in $1$ gor, $Z_f = [-1, 3]$; prvi maksimum je pri $x = \frac{\pi}{2}$.

### Primer 3 (težji)

Sedež na panoramskem kolesu se giblje med višino $2\,\text{m}$ in $42\,\text{m}$. En obrat traja $20\,\text{min}$. Ob času $t = 0$ je sedež na višini osi kolesa in se dviga. Zapiši višino $h(t)$ v obliki $h(t) = A\sin(bt) + d$ in izračunaj višino po $5\,\text{min}$.

**Podatki:** $h_{\min} = 2\,\text{m}$, $h_{\max} = 42\,\text{m}$, $T = 20\,\text{min}$, ob $t = 0$ višina osi in dviganje
**Iščemo:** $A$, $b$, $d$ in $h(5\,\text{min})$

:::formula
$A = \dfrac{h_{\max} - h_{\min}}{2}$, $\quad d = \dfrac{h_{\max} + h_{\min}}{2}$, $\quad b = \dfrac{2\pi}{T}$
:::

**Rešitev:**

1. Srednja črta je na sredini med skrajnima legama: $d = \frac{42 + 2}{2} = 22\,\text{m}$. To je višina osi.
2. Amplituda je polovica razlike: $A = \frac{42 - 2}{2} = 20\,\text{m}$. To je polmer kolesa.
3. Iz periode: $b = \frac{2\pi}{20} = \frac{\pi}{10}$ (na minuto).
4. Premika $c$ ne potrebujemo: $\sin$ pri $0$ je na srednji črti in narašča, tako kot sedež.
5. Torej $h(t) = 20\sin\left(\frac{\pi}{10}t\right) + 22$.
6. $h(5) = 20\sin\frac{\pi}{2} + 22 = 42$, ker je po četrtini obrata sedež na vrhu.
7. Odgovor: $h(t) = 20\sin\left(\frac{\pi}{10}t\right) + 22$ (v metrih, $t$ v minutah); po $5\,\text{min}$ je sedež na višini $42\,\text{m}$.

### Primer 4: zdaj ti

Graf funkcije $f(x) = A\sin(bx) + d$ ima največjo vrednost $5$, najmanjšo $-1$ in osnovno periodo $4\pi$. Velja $A > 0$ in $b > 0$. Določi $A$, $b$ in $d$.

**Podatki:** $f_{\max} = 5$, $f_{\min} = -1$, $T = 4\pi$, $A > 0$, $b > 0$
**Iščemo:** $A$, $b$, $d$

:::formula
$A = \dfrac{f_{\max} - f_{\min}}{2}$, $\quad d = \dfrac{f_{\max} + f_{\min}}{2}$, $\quad b = \dfrac{2\pi}{T}$
:::

**Rešitev:**

1. $A = \frac{5 - (-1)}{2} = 3$, ker je amplituda polovica razdalje med vrhom in dnom.
2. $d = \frac{5 + (-1)}{2} = 2$, ker je srednja črta na sredini.
3. Izračunaj še $b$ in zapiši funkcijo:

:::premisli
Koliko je $b$ in kako se glasi $f(x)$?
---
$b = \frac{2\pi}{4\pi} = \frac12$, torej $f(x) = 3\sin\frac{x}{2} + 2$. Perioda je daljša od $2\pi$, zato je $b < 1$: graf je raztegnjen.
:::

## Pogoste napake

- **Perioda pomnožena namesto deljena.** »Pri $\sin 2x$ je perioda $2 \cdot 2\pi = 4\pi$.« Večji $b$ pomeni hitrejše ponavljanje, torej krajšo periodo. Pravilno: $T = \frac{2\pi}{|b|}$, pri $\sin 2x$ je $T = \pi$.
- **Napačna smer premika.** »$\sin\left(x - \frac{\pi}{3}\right)$ je premaknjen v levo, ker je tam minus.« Vrednost, ki jo ima $\sin$ pri $0$, ima nova funkcija pri $x = \frac{\pi}{3}$, torej desno. Minus v oklepaju pomeni premik v desno.
- **Premik brez izpostavljanja.** »Pri $\sin\left(2x - \frac{\pi}{3}\right)$ je premik $\frac{\pi}{3}$.« Najprej izpostavi $b$: $2\left(x - \frac{\pi}{6}\right)$. Premik je $\frac{\pi}{6}$.
- **Amplituda je največja vrednost.** »Pri $3\sin x - 1$ je amplituda $2$, ker je največja vrednost $2$.« Amplituda se meri od srednje črte $y = d$, ne od osi $x$. Amplituda je $3$, največja vrednost pa $d + |A| = 2$.
- **Premik $d$ prezrt.** »$Z_f$ funkcije $4\cos x + 1$ je $[-4, 4]$.« Ves graf je dvignjen za $1$, zato $Z_f = [-3, 5]$.

## Povzetek

- Sinus in kosinus imata osnovno periodo $2\pi$ in zalogo vrednosti $[-1, 1]$; tangens ima periodo $\pi$ in asimptote pri $x = \frac{\pi}{2} + k\pi$.
- Ničle: $\sin x = 0$ pri $x = k\pi$, $\cos x = 0$ pri $x = \frac{\pi}{2} + k\pi$.
- $f(x) = A\sin\big(b(x - c)\big) + d$: amplituda $|A|$, perioda $T = \dfrac{2\pi}{|b|}$.
- $c > 0$: premik v desno za $c$; $d > 0$: premik navzgor za $d$.
- Zaloga vrednosti: $[d - |A|,\ d + |A|]$.
- Pred branjem premika izpostavi $b$: $\sin(bx - p) = \sin\big(b(x - \frac{p}{b})\big)$.

## Drugače: Na sliki

Graf sinusa si predstavljaj kot val, ki ga narišeš s petimi točkami na eno periodo: **ničla, vrh, ničla, dno, ničla**. Razdalja med zaporednima točkama je vedno četrtina periode.

Zdaj si nariši vodoravno črtkano črto, **srednjo črto**. Val niha okoli nje: vrh je $|A|$ nad njo, dno $|A|$ pod njo.

- Če spremeniš $d$, premakneš srednjo črto gor ali dol, val gre z njo.
- Če spremeniš $A$, se val raztegne ali stisne v višino.
- Če spremeniš $b$, se pet točk stisne skupaj ali razmakne.
- Če spremeniš $c$, se cel val zdrsne levo ali desno.

Kosinus je isti val, le da se začne na vrhu: **vrh, ničla, dno, ničla, vrh**. Tangens nima vrhov: med dvema navpičnima asimptotama raste od zelo negativnih do zelo pozitivnih vrednosti.

## Drugače: Iz vsakdanjega življenja

Vzemi zvok kitare. Struna niha in potiska zrak sem ter tja; tlak zraka se spreminja približno kot sinusoida.

- **Amplituda** je glasnost. Močneje udariš po struni, večji je odklon, glasnejši je ton. Višina tona ostane enaka.
- **Perioda** določa višino tona. Krajša struna niha hitreje, perioda je krajša, ton je višji. To ustreza večjemu $b$.
- **Premik $c$** pomeni, da je drug zvok enak, le začne kasneje, kot odmev.

Še plima: gladina morja niha okoli povprečne gladine (to je $d$), razlika med plimo in oseko je dvakratna amplituda. Ker se gladina ponovi v približno $12{,}4$ urah, je to perioda. Tako lahko z eno formulo napoveš, kdaj bo voda dovolj visoka za ladjo.

## Drugače: Korak za korakom s številkami

Narišimo $f(x) = 2\sin\big(2(x - \frac{\pi}{4})\big) + 1$ iz Primera 2 s tabelo.

1. Perioda je $\pi$, četrtina periode je $\frac{\pi}{4}$.
2. Val se začne pri $x = c = \frac{\pi}{4}$, ker je tam argument sinusa enak $0$.
3. Od tam dodajamo po $\frac{\pi}{4}$ in računamo:

| $x$ | argument $2(x - \frac{\pi}{4})$ | $\sin$ | $f(x)$ |
|---|---|---|---|
| $\frac{\pi}{4}$ | $0$ | $0$ | $1$ |
| $\frac{\pi}{2}$ | $\frac{\pi}{2}$ | $1$ | $3$ |
| $\frac{3\pi}{4}$ | $\pi$ | $0$ | $1$ |
| $\pi$ | $\frac{3\pi}{2}$ | $-1$ | $-1$ |
| $\frac{5\pi}{4}$ | $2\pi$ | $0$ | $1$ |

4. Točke povežemo z gladkim valom in ga ponavljamo levo in desno na vsak $\pi$.

Iz tabele vidiš vse: srednja črta $y = 1$, vrh $3$, dno $-1$, en val od $\frac{\pi}{4}$ do $\frac{5\pi}{4}$.

## Drugače: Bolj natančno

Zakaj je perioda funkcije $g(x) = \sin(bx)$ ravno $\frac{2\pi}{|b|}$? Iščemo najmanjši $T > 0$, za katerega velja $\sin\big(b(x + T)\big) = \sin(bx)$ za vsak $x$. Ker je $\sin(bx + bT) = \sin(bx)$ za vsak $x$ natanko takrat, ko je $bT$ večkratnik $2\pi$, je najmanjši tak $|b|T = 2\pi$, torej $T = \frac{2\pi}{|b|}$.

Vrstni red transformacij šteje. Graf $f(x) = A\sin\big(b(x - c)\big) + d$ dobiš iz grafa $\sin x$ tako:

1. skrčiš v smeri osi $x$ s faktorjem $\frac{1}{b}$,
2. premakneš za $c$ v smeri osi $x$,
3. raztegneš v smeri osi $y$ s faktorjem $A$,
4. premakneš za $d$ v smeri osi $y$.

Če bi premik naredil pred krčenjem, bi dobil napačen premik $\frac{c}{b}$ namesto $c$. Zato je pomembno, da $b$ izpostaviš.

Iz simetrije enotske krožnice velja $\sin(-x) = -\sin x$, zato je sinus **liha** funkcija (graf je simetričen glede na izhodišče). Ker je $\cos(-x) = \cos x$, je kosinus **soda** funkcija (graf je simetričen glede na os $y$).

## Preveri se

? Kolikšna je osnovna perioda funkcije $y = \sin x$?
- $\pi$
~ Na razdalji $\pi$ si sledita dve ničli, a vmes je le en vrh. Za cel val potrebuješ še dno. Periodo $\pi$ ima tangens.
+ $2\pi$
- $\frac{\pi}{2}$
~ To je razdalja od ničle do vrha, le četrtina vala.
> En cel obrat na enotski krožnici je $2\pi$; po njem se vrednosti sinusa ponovijo.

? Kolikšna je osnovna perioda funkcije $f(x) = \sin 4x$?
- $8\pi$
~ Periodo si pomnožil z $4$. Večji $b$ pomeni hitrejše ponavljanje, zato krajšo periodo.
+ $\frac{\pi}{2}$
- $2\pi$
~ Število pred $x$ v oklepaju vpliva na periodo. Amplitudo spremeni le $A$ pred sinusom, tu je $A = 1$.
> $T = \dfrac{2\pi}{|b|} = \dfrac{2\pi}{4} = \dfrac{\pi}{2}$.

? Kako iz grafa $y = \sin x$ dobiš graf $y = \sin\left(x - \frac{\pi}{3}\right)$?
- Premakneš ga za $\frac{\pi}{3}$ v levo.
~ Minus te zavede. Vrednost, ki jo ima $\sin$ pri $0$, ima nova funkcija pri $x = \frac{\pi}{3}$, torej desno.
+ Premakneš ga za $\frac{\pi}{3}$ v desno.
- Premakneš ga za $\frac{\pi}{3}$ navzdol.
~ Navpični premik je $d$, ki je zunaj sinusa. Število v oklepaju premika v smeri osi $x$.
> Pri $\sin(x - c)$ s $c > 0$ se graf premakne za $c$ v desno.

? Kolikšna sta amplituda in zaloga vrednosti funkcije $f(x) = 4\cos x + 1$?
- Amplituda $5$, $Z_f = [-5, 5]$.
~ Amplitudo si izenačil z največjo vrednostjo. Amplituda se meri od srednje črte $y = 1$.
- Amplituda $4$, $Z_f = [-4, 4]$.
~ Amplituda je prava, a si prezrl premik $d = 1$: ves graf je dvignjen za $1$.
+ Amplituda $4$, $Z_f = [-3, 5]$.
> $|A| = 4$, $d = 1$, zato $Z_f = [1 - 4,\ 1 + 4] = [-3, 5]$.

? Za koliko je graf $f(x) = \sin\left(2x - \frac{\pi}{3}\right)$ premaknjen glede na graf $y = \sin 2x$?
- Za $\frac{\pi}{3}$ v desno.
~ Pozabil si izpostaviti $b = 2$. Premik prebereš šele iz oblike $2(x - c)$.
+ Za $\frac{\pi}{6}$ v desno.
- Za $\frac{\pi}{6}$ v levo.
~ Izpostavljanje je pravo, smer pa ne: $x - \frac{\pi}{6}$ pomeni premik v desno.
> $2x - \frac{\pi}{3} = 2\left(x - \frac{\pi}{6}\right)$, torej $c = \frac{\pi}{6}$ in premik v desno.
