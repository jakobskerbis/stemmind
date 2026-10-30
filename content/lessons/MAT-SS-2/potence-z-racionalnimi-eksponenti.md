---
stanje: osnutek
demo: graf
avtor: AI
---

## Zakaj se tega učimo

S potencami s celimi eksponenti že znaš računati: $2^3 = 8$, $5^0 = 1$, $2^{-3} = \dfrac{1}{8}$. Pri korenih pa si spoznal $\sqrt{a}$, $\sqrt[3]{a}$ in pravila za računanje z njimi. Do zdaj sta bili to dve ločeni zgodbi z ločenimi pravili.

V tej lekciji ju združimo. Pokazali bomo, da je koren v resnici **potenca z ulomkom v eksponentu**: $\sqrt{a} = a^{\frac{1}{2}}$ in $\sqrt[3]{a} = a^{\frac{1}{3}}$. Zakaj je to koristno? Ker potem za korene ne potrebuješ posebnih pravil. Izraz, kot je $\dfrac{\sqrt{a}\cdot\sqrt[3]{a^2}}{\sqrt[4]{a^3}}$, s pravili za korene poenostaviš zelo težko, s potencami pa le sešteješ in odšteješ nekaj ulomkov. Tak zapis uporabljajo tudi kalkulatorji in računalniški programi, v fiziki pa ga srečaš pri formulah, kot je tretji Keplerjev zakon. Kako se graf potenčne funkcije spreminja z eksponentom, si lahko ogledaš v interaktivni simulaciji spodaj (»Potenčna funkcija z racionalnim eksponentom«).

## Razlaga

**1. Ponovitev pravil za potence.** Za $a, b \ne 0$ in cela števila $m, n$ velja:

$$a^m \cdot a^n = a^{m+n}, \qquad a^m : a^n = a^{m-n}, \qquad \left(a^m\right)^n = a^{m \cdot n},$$
$$(a \cdot b)^n = a^n \cdot b^n, \qquad a^0 = 1, \qquad a^{-n} = \frac{1}{a^n}.$$

**2. Kaj naj pomeni $a^{\frac{1}{2}}$?** Želimo, da pravila veljajo tudi za ulomke v eksponentu. Če velja pravilo $\left(a^m\right)^n = a^{m \cdot n}$, potem je

$$\left(a^{\frac{1}{2}}\right)^2 = a^{\frac{1}{2} \cdot 2} = a^1 = a.$$

Število $a^{\frac{1}{2}}$ je torej število, katerega kvadrat je $a$. To je ravno $\sqrt{a}$. Enako razmislimo za $\left(a^{\frac{1}{n}}\right)^n = a$, zato je $a^{\frac{1}{n}} = \sqrt[n]{a}$.

**3. Definicija.** Naj bo $a > 0$, $m$ celo število in $n$ naravno število ($n \ge 2$). Potem je

$$a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m.$$

Imenovalec ulomka pove **stopnjo korena**, števec pa **eksponent potence**. Obe obliki na desni dasta isto število. Pri računanju na pamet je navadno lažje najprej koreniti in nato potencirati, ker so števila manjša: $8^{\frac{2}{3}} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$.

Za osnovo $0$ in pozitiven eksponent je $0^{\frac{m}{n}} = 0$.

**4. Negativni eksponent.** Kot pri celih eksponentih velja

$$a^{-\frac{m}{n}} = \frac{1}{a^{\frac{m}{n}}}.$$

Na primer $25^{-\frac{1}{2}} = \dfrac{1}{\sqrt{25}} = \dfrac{1}{5}$. Negativni eksponent ne pomeni negativnega rezultata, temveč obratno vrednost.

**5. Zakaj zahtevamo $a > 0$?** Ulomek lahko zapišemo na več načinov: $\dfrac{1}{3} = \dfrac{2}{6}$. Za pozitivno osnovo to ne povzroča težav. Za negativno osnovo pa bi dobili protislovje: po prvem zapisu bi bilo $(-8)^{\frac{1}{3}} = \sqrt[3]{-8} = -2$, po drugem pa $(-8)^{\frac{2}{6}} = \sqrt[6]{(-8)^2} = \sqrt[6]{64} = 2$. Zato potenc z racionalnim eksponentom in negativno osnovo ne uporabljamo. Kubični koren $\sqrt[3]{-8} = -2$ seveda obstaja, le kot potenco ga ne pišemo.

**6. Pravila veljajo naprej.** Za $a, b > 0$ in racionalni števili $r, s$ veljajo enaka pravila kot pri celih eksponentih:

| Pravilo | Primer |
|---|---|
| $a^r \cdot a^s = a^{r+s}$ | $a^{\frac{1}{2}} \cdot a^{\frac{1}{3}} = a^{\frac{5}{6}}$ |
| $a^r : a^s = a^{r-s}$ | $a^{\frac{3}{4}} : a^{\frac{1}{4}} = a^{\frac{1}{2}}$ |
| $\left(a^r\right)^s = a^{r \cdot s}$ | $\left(a^{\frac{2}{3}}\right)^{\frac{3}{4}} = a^{\frac{1}{2}}$ |
| $(a \cdot b)^r = a^r \cdot b^r$ | $(4x)^{\frac{1}{2}} = 2x^{\frac{1}{2}}$ |
| $\left(\dfrac{a}{b}\right)^r = \dfrac{a^r}{b^r}$ | $\left(\dfrac{8}{27}\right)^{\frac{1}{3}} = \dfrac{2}{3}$ |

**7. Prevajanje med koreni in potencami.** Postopek je vedno enak: koren prepišemo v potenco, uporabimo pravila za potence in rezultat po želji spet zapišemo s korenom. Tako dobimo tudi pravila za korene, ki si jih spoznal prej, na primer $\sqrt[m]{\sqrt[n]{a}} = \left(a^{\frac{1}{n}}\right)^{\frac{1}{m}} = a^{\frac{1}{mn}} = \sqrt[mn]{a}$. Novo pa je, da lahko množimo korene **različnih stopenj**: $\sqrt{a} \cdot \sqrt[3]{a} = a^{\frac{1}{2}+\frac{1}{3}} = a^{\frac{5}{6}} = \sqrt[6]{a^5}$.

## Rešeni primeri

### Primer 1 (lažji)

Izračunaj vrednosti potenc: a) $27^{\frac{2}{3}}$, b) $16^{-\frac{3}{4}}$, c) $\left(\dfrac{4}{9}\right)^{\frac{3}{2}}$.

**Podatki:** potence $27^{\frac{2}{3}}$, $16^{-\frac{3}{4}}$ in $\left(\dfrac{4}{9}\right)^{\frac{3}{2}}$
**Iščemo:** vrednost vsake potence

:::formula
$a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m$ in $\;a^{-r} = \dfrac{1}{a^r}$
:::

**Rešitev:**

1. a) $27^{\frac{2}{3}} = \left(\sqrt[3]{27}\right)^2 = 3^2 = 9$.
2. b) Najprej negativni eksponent: $16^{-\frac{3}{4}} = \dfrac{1}{16^{\frac{3}{4}}}$. Nato $16^{\frac{3}{4}} = \left(\sqrt[4]{16}\right)^3 = 2^3 = 8$. Torej je $16^{-\frac{3}{4}} = \dfrac{1}{8}$.
3. c) Potenciramo števec in imenovalec: $\left(\dfrac{4}{9}\right)^{\frac{3}{2}} = \dfrac{\left(\sqrt{4}\right)^3}{\left(\sqrt{9}\right)^3} = \dfrac{2^3}{3^3} = \dfrac{8}{27}$.
4. Odgovor: $27^{\frac{2}{3}} = 9$, $16^{-\frac{3}{4}} = \dfrac{1}{8}$ in $\left(\dfrac{4}{9}\right)^{\frac{3}{2}} = \dfrac{8}{27}$.

### Primer 2 (srednji)

Poenostavi izraz $\dfrac{\sqrt{a} \cdot \sqrt[3]{a^2}}{\sqrt[4]{a^3}}$ za $a > 0$ in rezultat zapiši s korenom.

**Podatki:** izraz $\dfrac{\sqrt{a} \cdot \sqrt[3]{a^2}}{\sqrt[4]{a^3}}$, pogoj $a > 0$
**Iščemo:** izraz v obliki enega korena

:::formula
$\sqrt[n]{a^m} = a^{\frac{m}{n}}$, $\;a^r \cdot a^s = a^{r+s}$, $\;a^r : a^s = a^{r-s}$
:::

**Rešitev:**

1. Korene zapišemo kot potence: $\sqrt{a} = a^{\frac{1}{2}}$, $\sqrt[3]{a^2} = a^{\frac{2}{3}}$, $\sqrt[4]{a^3} = a^{\frac{3}{4}}$.
2. Eksponent rezultata: $\dfrac{1}{2} + \dfrac{2}{3} - \dfrac{3}{4}$. Skupni imenovalec je $12$: $\dfrac{6}{12} + \dfrac{8}{12} - \dfrac{9}{12} = \dfrac{5}{12}$.
3. Izraz je enak $a^{\frac{5}{12}} = \sqrt[12]{a^5}$.
4. Preverjanje za $a = 2$: $\dfrac{1{,}4142 \cdot 1{,}5874}{1{,}6818} \approx 1{,}3348$ in $2^{\frac{5}{12}} \approx 1{,}3348$.
5. Odgovor: izraz je enak $\sqrt[12]{a^5}$.

### Primer 3 (težji)

Poenostavi izraz $\left(\dfrac{x^{\frac{3}{4}} \cdot y^{-\frac{1}{2}}}{x^{-\frac{1}{4}} \cdot y^{\frac{1}{6}}}\right)^{\frac{3}{2}}$ za $x, y > 0$. Nato izračunaj njegovo vrednost za $x = 4$ in $y = 8$.

**Podatki:** izraz $\left(\dfrac{x^{\frac{3}{4}} \cdot y^{-\frac{1}{2}}}{x^{-\frac{1}{4}} \cdot y^{\frac{1}{6}}}\right)^{\frac{3}{2}}$, pogoj $x, y > 0$, vrednosti $x = 4$, $y = 8$
**Iščemo:** poenostavljen izraz in njegovo vrednost

:::formula
$a^r : a^s = a^{r-s}$, $\;(a^r)^s = a^{r \cdot s}$, $\;(a \cdot b)^r = a^r \cdot b^r$
:::

**Rešitev:**

1. Najprej uredimo ulomek v oklepaju. Pri $x$: $\dfrac{3}{4} - \left(-\dfrac{1}{4}\right) = \dfrac{4}{4} = 1$. Pri $y$: $-\dfrac{1}{2} - \dfrac{1}{6} = -\dfrac{3}{6} - \dfrac{1}{6} = -\dfrac{2}{3}$.
2. V oklepaju je torej $x^1 \cdot y^{-\frac{2}{3}}$.
3. Potenciramo z $\dfrac{3}{2}$: $x^{1 \cdot \frac{3}{2}} \cdot y^{-\frac{2}{3} \cdot \frac{3}{2}} = x^{\frac{3}{2}} \cdot y^{-1} = \dfrac{x^{\frac{3}{2}}}{y}$.
4. S korenom: $x^{\frac{3}{2}} = x^{1 + \frac{1}{2}} = x\sqrt{x}$, zato je izraz enak $\dfrac{x\sqrt{x}}{y}$.
5. Za $x = 4$ in $y = 8$: $\dfrac{4 \cdot \sqrt{4}}{8} = \dfrac{4 \cdot 2}{8} = 1$.
6. Preverjanje v prvotnem izrazu: $4^{\frac{3}{4}} \cdot 8^{-\frac{1}{2}} \approx 2{,}8284 \cdot 0{,}3536 \approx 1{,}000$ in $4^{-\frac{1}{4}} \cdot 8^{\frac{1}{6}} \approx 0{,}7071 \cdot 1{,}4142 \approx 1{,}000$. Ulomek je $1$, potenca $1^{\frac{3}{2}} = 1$. Ujema se.
7. Odgovor: izraz je enak $\dfrac{x\sqrt{x}}{y}$, za $x = 4$ in $y = 8$ pa ima vrednost $1$.

## Pogoste napake

- **Ulomek v eksponentu kot deljenje.** $8^{\frac{1}{3}} = \dfrac{8}{3}$ je napačno. Eksponent $\dfrac{1}{3}$ pomeni kubični koren, zato je $8^{\frac{1}{3}} = \sqrt[3]{8} = 2$.
- **Negativni eksponent kot negativno število.** $25^{-\frac{1}{2}} = -5$ ni res. Minus v eksponentu pomeni obratno vrednost: $25^{-\frac{1}{2}} = \dfrac{1}{25^{\frac{1}{2}}} = \dfrac{1}{5}$. Potenca s pozitivno osnovo je vedno pozitivna.
- **Zamenjava števca in imenovalca.** $a^{\frac{2}{3}} = \sqrt{a^3}$ je napačno. Imenovalec je stopnja korena, števec eksponent: $a^{\frac{2}{3}} = \sqrt[3]{a^2}$. Preizkus z $a = 8$: $\sqrt[3]{64} = 4$, toda $\sqrt{512} \approx 22{,}6$.
- **Seštevanje potenc kot množenje.** $a^{\frac{1}{2}} + a^{\frac{1}{3}} = a^{\frac{5}{6}}$ ni res. Eksponente seštevamo le pri **množenju** potenc z isto osnovo. Vsote $\sqrt{a} + \sqrt[3]{a}$ ne moremo zapisati kot eno potenco.
- **Negativna osnova.** Zapis $(-27)^{\frac{1}{3}}$ ni definiran, ker bi zapis z drugim ulomkom, na primer $(-27)^{\frac{2}{6}}$, dal drug rezultat. Kadar potrebuješ kubični koren negativnega števila, ga piši s korenom: $\sqrt[3]{-27} = -3$.

## Povzetek

- Za $a > 0$, $m \in \mathbb{Z}$, $n \in \mathbb{N}$: $a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m$; posebej $a^{\frac{1}{n}} = \sqrt[n]{a}$ in $a^{\frac{1}{2}} = \sqrt{a}$.
- Imenovalec eksponenta je stopnja korena, števec je eksponent potence.
- $a^{-\frac{m}{n}} = \dfrac{1}{a^{\frac{m}{n}}}$: negativni eksponent pomeni obratno vrednost.
- Osnova mora biti pozitivna (pri osnovi $0$ eksponent pozitiven); potenc z negativno osnovo in racionalnim eksponentom ne pišemo.
- Pravila: $a^r a^s = a^{r+s}$, $a^r : a^s = a^{r-s}$, $(a^r)^s = a^{rs}$, $(ab)^r = a^r b^r$.
- Korene pretvori v potence, uporabi pravila in rezultat zapiši nazaj s korenom.

## Drugače: Na sliki

Nariši grafe funkcij $y = x^{\frac{1}{2}}$, $y = x^1$ in $y = x^{\frac{3}{2}}$ za $x \ge 0$. Nekaj vrednosti:

| $x$ | $0$ | $1$ | $4$ | $9$ |
|---|---|---|---|---|
| $y = x^{\frac{1}{2}} = \sqrt{x}$ | $0$ | $1$ | $2$ | $3$ |
| $y = x^1$ | $0$ | $1$ | $4$ | $9$ |
| $y = x^{\frac{3}{2}} = x\sqrt{x}$ | $0$ | $1$ | $8$ | $27$ |

Vsi trije grafi gredo skozi točki $(0, 0)$ in $(1, 1)$, ker je $1^r = 1$ za vsak eksponent. Za $x > 1$ je graf višje, čim večji je eksponent. Med $0$ in $1$ je ravno obratno: tam je $\sqrt{x}$ nad premico $y = x$, $x\sqrt{x}$ pa pod njo. Pri eksponentu med $0$ in $1$ graf raste vedno počasneje in se upogiba navzdol, pri eksponentu nad $1$ pa raste vedno hitreje. Premica $y = x$ loči ti dve skupini. V interaktivni simulaciji spodaj premikaj eksponent in opazuj, kako se graf zvezno preoblikuje iz ene oblike v drugo.

## Drugače: Iz vsakdanjega življenja

**Glasba.** Pri klavirju je oktava razdeljena na $12$ poltonov. Ton, ki je za oktavo višji, ima dvakrat večjo frekvenco. Ker so vsi poltoni enaki koraki, se frekvenca pri vsakem poltonu pomnoži z istim faktorjem $q$, za katerega velja $q^{12} = 2$. Torej je $q = 2^{\frac{1}{12}} = \sqrt[12]{2} \approx 1{,}0595$. Če ima ton A frekvenco $440\,\text{Hz}$, ima ton pol tona višje frekvenco približno $440\,\text{Hz} \cdot 1{,}0595 \approx 466{,}2\,\text{Hz}$. Kvinta je $7$ poltonov, zato je razmerje frekvenc $2^{\frac{7}{12}} \approx 1{,}498$, kar je zelo blizu razmerja $\dfrac{3}{2}$, ki ga uho zazna kot ubrano.

**Planeti.** Po tretjem Keplerjevem zakonu je kvadrat obhodnega časa planeta (v letih) enak kubu njegove povprečne oddaljenosti od Sonca (v astronomskih enotah): $T^2 = a^3$. Od tod je $a = T^{\frac{2}{3}}$. Mars obkroži Sonce v $1{,}88$ leta, zato je od Sonca oddaljen približno $1{,}88^{\frac{2}{3}} \approx 1{,}52$ astronomske enote.

## Drugače: Korak za korakom s številkami

**Izračunaj $32^{-\frac{3}{5}}$.**

1. Minus v eksponentu pomeni obratno vrednost: $32^{-\frac{3}{5}} = \dfrac{1}{32^{\frac{3}{5}}}$.
2. Imenovalec ulomka v eksponentu je $5$, zato potrebujemo peti koren: $\sqrt[5]{32} = 2$, ker je $2^5 = 32$.
3. Števec je $3$, zato rezultat korena potenciramo na tretjo: $2^3 = 8$.
4. Torej je $32^{\frac{3}{5}} = 8$ in $32^{-\frac{3}{5}} = \dfrac{1}{8} = 0{,}125$.

**Zapiši $\sqrt[3]{x} \cdot \sqrt[6]{x}$ z enim korenom ($x > 0$).**

1. Prevedemo v potence: $x^{\frac{1}{3}} \cdot x^{\frac{1}{6}}$.
2. Pri množenju seštejemo eksponente: $\dfrac{1}{3} + \dfrac{1}{6} = \dfrac{2}{6} + \dfrac{1}{6} = \dfrac{3}{6} = \dfrac{1}{2}$.
3. Rezultat je $x^{\frac{1}{2}} = \sqrt{x}$.
4. Preverjanje za $x = 64$: $\sqrt[3]{64} \cdot \sqrt[6]{64} = 4 \cdot 2 = 8$ in $\sqrt{64} = 8$.

## Drugače: Bolj natančno

**Definicija je dobra.** Ker lahko isti ulomek zapišemo kot $\dfrac{m}{n}$ ali $\dfrac{mk}{nk}$, moramo preveriti, da obe obliki dasta isto število. Za $a > 0$ označimo $b = \sqrt[n]{a^m}$, torej $b > 0$ in $b^n = a^m$. Potem je $b^{nk} = \left(b^n\right)^k = a^{mk}$, zato je $b$ tudi pozitivni $nk$-ti koren števila $a^{mk}$, torej $\sqrt[nk]{a^{mk}} = b$. Pri negativni osnovi ta sklep odpove, ker sodi koren ne more biti negativen, kar smo videli pri $(-8)^{\frac{2}{6}}$.

**Pravilo za produkt potenc.** Naj bo $r = \dfrac{p}{n}$ in $s = \dfrac{q}{n}$ (ulomka vedno lahko zapišemo s skupnim imenovalcem). Število $c = a^r \cdot a^s$ je pozitivno in velja $c^n = \left(a^{\frac{p}{n}}\right)^n \cdot \left(a^{\frac{q}{n}}\right)^n = a^p \cdot a^q = a^{p+q}$. Zato je $c = \sqrt[n]{a^{p+q}} = a^{\frac{p+q}{n}} = a^{r+s}$. Podobno dokažemo ostala pravila.

**Kaj pa iracionalni eksponenti?** Potenco $2^{\sqrt{2}}$ lahko razumemo kot število, ki ga vedno bolj natančno približujejo potence $2^{1{,}4}$, $2^{1{,}41}$, $2^{1{,}414}$, … z racionalnimi eksponenti. Natančno to obravnavamo pri eksponentni funkciji.

## Preveri se

? Koliko je $64^{\frac{2}{3}}$?
- $\dfrac{128}{3}$
- $8$
+ $16$
- $512$
> $64^{\frac{2}{3}} = \left(\sqrt[3]{64}\right)^2 = 4^2 = 16$. Imenovalec $3$ je stopnja korena, števec $2$ eksponent.

? Koliko je $49^{-\frac{1}{2}}$?
- $-7$
+ $\dfrac{1}{7}$
- $-\dfrac{49}{2}$
> $49^{-\frac{1}{2}} = \dfrac{1}{\sqrt{49}} = \dfrac{1}{7}$. Negativni eksponent pomeni obratno vrednost, ne negativnega števila.

? Kateri zapis je enak $\sqrt[5]{a^3}$ za $a > 0$?
- $a^{\frac{5}{3}}$
+ $a^{\frac{3}{5}}$
- $a^{15}$
- $a^{-2}$
> Eksponent pod korenom gre v števec, stopnja korena v imenovalec: $\sqrt[5]{a^3} = a^{\frac{3}{5}}$.

? Poenostavi $\sqrt{a} \cdot \sqrt[4]{a}$ za $a > 0$.
- $\sqrt[6]{a}$
- $\sqrt[8]{a^2}$
+ $\sqrt[4]{a^3}$
> $a^{\frac{1}{2}} \cdot a^{\frac{1}{4}} = a^{\frac{2}{4} + \frac{1}{4}} = a^{\frac{3}{4}} = \sqrt[4]{a^3}$. Pri množenju potenc z isto osnovo eksponente seštejemo.

:::simboli
a | osnova potence | | | a > 0 pri racionalnih eksponentih
b | osnova druge potence | | |
m | števec eksponenta (potenca pod korenom) | | | v pravilih celo število
n | imenovalec eksponenta (korenski eksponent) | | | v pravilih celo število
r, s | racionalna eksponenta | | |
:::
