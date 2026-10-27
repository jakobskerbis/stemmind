---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Ulomke že poznaš iz nižjih razredov: ulomek $\frac{3}{4}$ pomeni tri četrtine celote. Znaš jih tudi krajšati in razširjati ter poiskati skupni večkratnik dveh števil.

Seštevanje in odštevanje ulomkov potrebuješ pri vsakdanjih stvareh: pri receptih (pol skodelice moke in še tri četrtine skodelice), pri merjenju časa (tričetrt ure in še pol ure), pri delitvi pice ali čokolade. Brez tega znanja ne moreš naprej k enačbam z ulomki, odstotkom in verjetnosti.

## Razlaga

**1. Imenovalec pove velikost delov.** V ulomku $\frac{a}{b}$ imenovalec $b$ pove, na koliko enakih delov je razdeljena celota, števec $a$ pa pove, koliko delov vzamemo.

**2. Enaka imenovalca.** Če imata ulomka enak imenovalec, so deli enako veliki, zato jih samo preštejemo. Seštejemo (ali odštejemo) števca, imenovalec ostane:

$$\frac{a}{c}+\frac{b}{c}=\frac{a+b}{c}, \qquad \frac{a}{c}-\frac{b}{c}=\frac{a-b}{c}$$

Na primer $\frac{2}{7}+\frac{3}{7}=\frac{5}{7}$. Imenovalca ne seštevamo: sedmine ostanejo sedmine.

**3. Različna imenovalca.** Če so deli različno veliki, jih ne moremo kar prešteti. Ulomka najprej **razširimo na skupni imenovalec**. Najprimernejši je **najmanjši skupni večkratnik** imenovalcev.

Postopek:

1. Poišči najmanjši skupni večkratnik imenovalcev.
2. Vsak ulomek razširi na ta imenovalec (števec in imenovalec pomnožiš z istim številom).
3. Seštej ali odštej števca, imenovalec prepiši.
4. Rezultat, če se da, okrajšaj.

**4. Mešano število.** Število, kot je $2\frac{3}{5}$, je vsota celega dela in ulomka: $2+\frac{3}{5}$. Pretvorba v nepravi ulomek: celi del pomnožiš z imenovalcem in prišteješ števec:

$$2\frac{3}{5}=\frac{2\cdot 5+3}{5}=\frac{13}{5}$$

Pretvorba nazaj: števec delimo z imenovalcem. Količnik je celi del, ostanek je novi števec. Na primer $\frac{17}{5}$: $17:5=3$, ostanek $2$, torej $3\frac{2}{5}$.

**5. Seštevanje in odštevanje mešanih števil.** Dva načina:

- **Pretvorba v nepravi ulomek**, nato računamo kot običajno.
- **Posebej cele dele in posebej ulomke.** Pri odštevanju se lahko zgodi, da je ulomek, ki ga odštevamo, večji od ulomka, od katerega odštevamo. Takrat si od celega dela »sposodimo« eno celoto, razbito na dele z ustreznim imenovalcem.

## Rešeni primeri

### Primer 1 (lažji): različna imenovalca

Izračunaj $\frac{1}{2}+\frac{1}{3}$.

1. Imenovalca sta različna ($2$ in $3$), zato ju moramo izenačiti.
2. Najmanjši skupni večkratnik $2$ in $3$ je $6$.
3. Razširimo: $\frac{1}{2}=\frac{3}{6}$ (pomnožili smo z $3$) in $\frac{1}{3}=\frac{2}{6}$ (pomnožili smo z $2$). Zakaj? Da sta oba ulomka izražena v šestinah.
4. Seštejemo števca: $\frac{3}{6}+\frac{2}{6}=\frac{5}{6}$.
5. Ulomka $\frac{5}{6}$ ne moremo krajšati, ker sta $5$ in $6$ tuji si števili.

### Primer 2: odštevanje s krajšanjem

Izračunaj $\frac{7}{10}-\frac{3}{20}$.

1. Najmanjši skupni večkratnik $10$ in $20$ je $20$.
2. Prvi ulomek razširimo z $2$: $\frac{7}{10}=\frac{14}{20}$. Drugi ostane.
3. Odštejemo: $\frac{14}{20}-\frac{3}{20}=\frac{11}{20}$.
4. $11$ je praštevilo in ne deli $20$, zato krajšanje ni mogoče.

Drug primer s krajšanjem: $\frac{5}{6}-\frac{1}{3}=\frac{5}{6}-\frac{2}{6}=\frac{3}{6}=\frac{1}{2}$. Rezultat smo okrajšali s $3$.

### Primer 3 (težji): mešana števila

Izračunaj $3\frac{1}{4}-1\frac{5}{6}$.

**Način A: nepravi ulomki.**

1. Pretvorimo: $3\frac{1}{4}=\frac{3\cdot 4+1}{4}=\frac{13}{4}$ in $1\frac{5}{6}=\frac{1\cdot 6+5}{6}=\frac{11}{6}$.
2. Najmanjši skupni večkratnik $4$ in $6$ je $12$.
3. Razširimo: $\frac{13}{4}=\frac{39}{12}$ (z $3$) in $\frac{11}{6}=\frac{22}{12}$ (z $2$).
4. Odštejemo: $\frac{39}{12}-\frac{22}{12}=\frac{17}{12}$.
5. Pretvorimo nazaj: $17:12=1$, ostanek $5$, torej $1\frac{5}{12}$.

**Način B: celi deli in ulomki posebej.**

1. Ulomka razširimo na imenovalec $12$: $3\frac{3}{12}-1\frac{10}{12}$.
2. $\frac{3}{12}$ je manj kot $\frac{10}{12}$, zato si sposodimo eno celoto: $3\frac{3}{12}=2+1+\frac{3}{12}=2\frac{15}{12}$.
3. Odštejemo cele dele: $2-1=1$. Odštejemo ulomka: $\frac{15}{12}-\frac{10}{12}=\frac{5}{12}$.
4. Rezultat: $1\frac{5}{12}$. Oba načina dasta enak rezultat, kar je dobro preverjanje.

**Preverjanje:** $1\frac{5}{12}+1\frac{10}{12}=2\frac{15}{12}=3\frac{3}{12}=3\frac{1}{4}$. ✓

## Pogoste napake

- **Seštevanje imenovalcev.** $\frac{1}{2}+\frac{1}{3}\neq\frac{2}{5}$. Imenovalec pove velikost delov in se pri seštevanju ne spremeni. Pravilno je $\frac{5}{6}$.
- **Razširjanje samo imenovalca.** Če imenovalec pomnožiš z $3$, moraš z $3$ pomnožiti tudi števec, sicer ulomek spremeniš.
- **Seštevanje števcev in imenovalcev pri različnih imenovalcih.** Najprej izenači imenovalca.
- **Mešana števila kot množenje.** $2\frac{3}{5}$ pomeni $2+\frac{3}{5}$, ne $2\cdot\frac{3}{5}$.
- **Napačno odštevanje pri mešanih številih.** Ne odštej kar manjšega ulomka od večjega, da dobiš pozitiven rezultat. Namesto $\frac{3}{12}-\frac{10}{12}$ ne računaj $\frac{10}{12}-\frac{3}{12}$. Raje si sposodi celoto.
- **Pozabljeno krajšanje.** Rezultat vedno preveri, ali ga lahko okrajšaš.

## Povzetek

- Pri enakih imenovalcih seštejemo ali odštejemo števca, imenovalec ostane.
- Pri različnih imenovalcih ulomka najprej razširimo na skupni imenovalec (najbolje najmanjši skupni večkratnik).
- Razširjamo vedno števec in imenovalec z istim številom.
- Mešano število $a\frac{b}{c}=\frac{a\cdot c+b}{c}$.
- Pri mešanih številih lahko pretvorimo v nepravi ulomek ali računamo celi del in ulomek posebej (pri odštevanju si po potrebi sposodimo celoto).
- Rezultat po možnosti okrajšamo in nepravi ulomek zapišemo kot mešano število.

## Drugače: Na sliki

Predstavljaj si čokolado s $12$ kockami. Ulomek $\frac{1}{4}$ je $3$ kocke, ulomek $\frac{1}{3}$ je $4$ kocke.

Če hočeš sešteti $\frac{1}{4}+\frac{1}{3}$, ne moreš kar prešteti »kosov«, ker so četrtine in tretjine različno veliki kosi. Zato obe količini izrazimo v kockah, torej v dvanajstinah: $3$ kocke in $4$ kocke je skupaj $7$ kock, torej $\frac{7}{12}$ čokolade.

Skupni imenovalec je torej enota, s katero merimo oba kosa. Pri mešanih številih si predstavljaj cele čokolade in še en načet kos: $2\frac{1}{4}$ sta dve celi čokoladi in četrtina tretje.

## Drugače: Iz vsakdanjega življenja

Pri peki potrebuješ $1\frac{1}{2}$ skodelice moke za testo in še $\frac{3}{4}$ skodelice za posip. Koliko moke potrebuješ skupaj?

Poldrugo skodelico in tričetrt skodelice ne moreš kar sešteti v glavi, zato si pomagaj s četrtinami: $1\frac{1}{2}=1\frac{2}{4}$. Skupaj je $1\frac{2}{4}+\frac{3}{4}=1\frac{5}{4}=2\frac{1}{4}$ skodelice.

Podobno pri času: ura in tričetrt ($1\frac{3}{4}\,\text{h}$) plus pol ure ($\frac{1}{2}\,\text{h}$) je $1\frac{3}{4}+\frac{2}{4}=1\frac{5}{4}=2\frac{1}{4}\,\text{h}$, to je $2$ uri in $15$ minut.

## Drugače: Korak za korakom s številkami

Izračunaj $2\frac{2}{3}+1\frac{3}{4}$ po receptu.

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Pretvorimo v nepravi ulomek | $\frac{8}{3}+\frac{7}{4}$ |
| 2 | Najmanjši skupni večkratnik $3$ in $4$ | $12$ |
| 3 | Razširimo (z $4$ in z $3$) | $\frac{32}{12}+\frac{21}{12}$ |
| 4 | Seštejemo števca | $\frac{53}{12}$ |
| 5 | Pretvorimo v mešano število ($53:12=4$, ostanek $5$) | $4\frac{5}{12}$ |

Preverimo z ločenim računanjem: cela dela $2+1=3$, ulomka $\frac{8}{12}+\frac{9}{12}=\frac{17}{12}=1\frac{5}{12}$. Skupaj $3+1\frac{5}{12}=4\frac{5}{12}$. ✓

## Drugače: Bolj natančno

Zakaj lahko ulomek razširimo, ne da bi spremenili njegovo vrednost? Ker razširjanje pomeni množenje z $1$ v obliki $\frac{k}{k}$:

$$\frac{a}{b}=\frac{a}{b}\cdot\frac{k}{k}=\frac{a\cdot k}{b\cdot k}$$

Zakaj lahko pri enakih imenovalcih seštejemo samo števce? Ulomek $\frac{a}{c}$ pomeni $a$ kosov velikosti $\frac{1}{c}$. Če imamo $a$ kosov in še $b$ kosov iste velikosti, imamo $a+b$ kosov te velikosti, torej $\frac{a+b}{c}$.

Skupni imenovalec ni nujno najmanjši skupni večkratnik. Lahko uporabimo tudi produkt imenovalcev: $\frac{1}{4}+\frac{1}{6}=\frac{6}{24}+\frac{4}{24}=\frac{10}{24}=\frac{5}{12}$. Račun je pravilen, a večja števila zahtevajo več krajšanja. Z najmanjšim skupnim večkratnikom ($12$) dobimo isti rezultat prej: $\frac{3}{12}+\frac{2}{12}=\frac{5}{12}$.

## Preveri se

? Koliko je $\frac{2}{5}+\frac{1}{3}$?
- $\frac{3}{8}$
- $\frac{2}{15}$
+ $\frac{11}{15}$
- $\frac{3}{15}$
> Najmanjši skupni večkratnik $5$ in $3$ je $15$. $\frac{2}{5}=\frac{6}{15}$, $\frac{1}{3}=\frac{5}{15}$, vsota je $\frac{11}{15}$. Odgovor $\frac{3}{8}$ dobiš, če seštevaš števca in imenovalca posebej.

? Koliko je $4\frac{1}{3}-2\frac{1}{2}$?
- $2\frac{1}{6}$
+ $1\frac{5}{6}$
- $2\frac{5}{6}$
- $1\frac{1}{6}$
> $4\frac{1}{3}-2\frac{1}{2}=4\frac{2}{6}-2\frac{3}{6}=3\frac{8}{6}-2\frac{3}{6}=1\frac{5}{6}$. Ker je $\frac{2}{6}$ manj kot $\frac{3}{6}$, si moramo sposoditi celoto. Napaka $2\frac{1}{6}$ nastane, če manjši ulomek odštejemo od večjega.

? Kako zapišemo $3\frac{2}{7}$ kot nepravi ulomek?
- $\frac{6}{7}$
- $\frac{12}{7}$
+ $\frac{23}{7}$
- $\frac{32}{7}$
> Celi del pomnožimo z imenovalcem in prištejemo števec: $3\cdot 7+2=23$, torej $\frac{23}{7}$. Odgovor $\frac{6}{7}$ dobiš, če celi del pomnožiš s števcem.
