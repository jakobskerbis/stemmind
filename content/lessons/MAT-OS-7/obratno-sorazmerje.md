---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Že znaš, da sta količini **premo sorazmerni**, kadar se z večanjem ene za določeno število krat poveča tudi druga. Če $1\,\text{kg}$ jabolk stane $2\,\text{€}$, potem $3\,\text{kg}$ stanejo $6\,\text{€}$. Znaš tudi računati s sorazmerji in uporabljati enačbo $\dfrac{a}{b} = \dfrac{c}{d}$.

Včasih pa se zgodi nasprotno: ko ena količina narašča, druga pada. Več ko je delavcev na gradbišču, manj časa potrebujejo za isto delo. Hitreje ko se voziš, prej prispeš. Pri takih nalogah premo sorazmerje ne deluje in bi dobil napačen rezultat. Obratno sorazmerje ti pove, kako pravilno izračunati, koliko časa, koliko delavcev ali kako hitro potrebuješ.

## Razlaga

**1. Definicija.** Dve količini sta **obratno sorazmerni**, če se ob $k$-kratnem povečanju ene druga $k$-krat **zmanjša** (je $k$-krat manjša). Če se ena količina podvoji, se druga razpolovi. Če se ena potroji, se druga zmanjša na tretjino.

**2. Pravilo produkta.** Pri obratnem sorazmerju je **zmnožek** obeh količin vedno enak:

$$x \cdot y = k$$

Število $k$ imenujemo **konstanta** obratnega sorazmerja. Pri premem sorazmerju je stalen *količnik*, pri obratnem pa stalen *zmnožek*.

**3. Primer iz tabele.** Delo opravi več delavcev:

| število delavcev | 1 | 2 | 3 | 6 |
|---|---|---|---|---|
| število dni | 12 | 6 | 4 | 2 |

Preveri zmnožke: $1 \cdot 12 = 12$, $2 \cdot 6 = 12$, $3 \cdot 4 = 12$, $6 \cdot 2 = 12$. Zmnožek je povsod enak $12$, zato sta količini obratno sorazmerni. Konstanta $12$ pomeni, da bi delo en delavec opravil v $12$ dneh.

**4. Kako računamo.** Če sta pari $(x_1, y_1)$ in $(x_2, y_2)$ obratno sorazmerni, velja:

$$x_1 \cdot y_1 = x_2 \cdot y_2$$

Iz te enačbe izračunamo neznanko.

**5. Kako prepoznamo obratno sorazmerje.** Vprašaj se: *ali ob večanju ene količine druga pada in to v enakem razmerju?* Če da, je obratno sorazmerje. Pazi: vsako padanje še ni obratno sorazmerje. Dvakrat več delavcev mora pomeniti natanko dvakrat manj časa.

**6. Predpostavka.** Naloge o delavcih in času veljajo pod pogojem, da vsi delajo enako hitro in da se ne ovirajo.

## Rešeni primeri

### Primer 1: tabela

Ali sta količini v tabeli obratno sorazmerni?

| $x$ | 2 | 4 | 5 | 10 |
|---|---|---|---|---|
| $y$ | 20 | 10 | 8 | 4 |

1. Pri obratnem sorazmerju mora biti zmnožek $x \cdot y$ stalen, zato izračunamo zmnožke.
2. $2 \cdot 20 = 40$, $4 \cdot 10 = 40$, $5 \cdot 8 = 40$, $10 \cdot 4 = 40$.
3. Vsi zmnožki so enaki $40$, zato sta količini obratno sorazmerni s konstanto $k = 40$.

### Primer 2: delavci in dnevi

Štirje delavci pobarvajo ograjo v $6$ dneh. V koliko dneh jo pobarva $8$ delavcev, če delajo enako hitro?

1. **Prepoznava.** Več delavcev pomeni manj dni, zato je obratno sorazmerje.
2. **Konstanta.** $4 \cdot 6 = 24$. To je "delo, izraženo v delavec-dnevih".
3. **Enačba.** $8 \cdot y = 24$.
4. **Račun.** $y = 24 : 8 = 3$.
5. **Preveri smiselnost.** Delavcev je dvakrat več, dni dvakrat manj ($6 : 2 = 3$). ✓

Odgovor: $8$ delavcev ograjo pobarva v $3$ dneh.

### Primer 3: hitrost in čas (težji)

Avtomobil prevozi razdaljo med dvema krajema s povprečno hitrostjo $60\,\text{km/h}$ v $3\,\text{h}$. Koliko časa bi potreboval pri hitrosti $90\,\text{km/h}$? Koliko časa bi potreboval pri hitrosti $40\,\text{km/h}$?

1. **Prepoznava.** Pri isti poti večja hitrost pomeni krajši čas, zato je obratno sorazmerje. Zmnožek hitrosti in časa je pot.
2. **Konstanta.** $60 \cdot 3 = 180$, kar je pot v $\text{km}$.
3. **Hitrost $90\,\text{km/h}$:** $90 \cdot t = 180$, torej $t = 180 : 90 = 2\,\text{h}$.
4. **Hitrost $40\,\text{km/h}$:** $40 \cdot t = 180$, torej $t = 180 : 40 = 4{,}5\,\text{h}$.
5. **Preveri.** Pri večji hitrosti ($90 > 60$) je čas krajši ($2 < 3$). Pri manjši hitrosti ($40 < 60$) je čas daljši ($4{,}5 > 3$). ✓

Odgovor: pri $90\,\text{km/h}$ potrebuje $2\,\text{h}$, pri $40\,\text{km/h}$ pa $4{,}5\,\text{h}$ (to je $4\,\text{h}$ in $30\,\text{min}$).

## Pogoste napake

- **Uporaba premega sorazmerja.** Pri $4$ delavcih in $6$ dneh bi napačno računal $8$ delavcev $\Rightarrow$ $12$ dni. Vprašaj se vedno: ali se z večanjem ene količine druga veča ali manjša?
- **Deljenje namesto množenja pri konstanti.** Pri obratnem sorazmerju je stalen zmnožek, ne količnik. Za $4$ in $6$ je $k = 24$, ne $4 : 6$.
- **Ne preveriš smiselnosti.** Če je rezultat pri več delavcih daljši čas, si se zmotil.
- **Misliš, da vsako padanje pomeni obratno sorazmerje.** Če iz tabele zmnožki niso enaki, količini nista obratno sorazmerni.
- **Pozabiš na enote.** Če je čas v minutah in urah hkrati, najprej pretvori v isto enoto.

## Povzetek

- Količini sta obratno sorazmerni, če se ob večanju ene za $k$-krat druga za $k$-krat zmanjša.
- Pri obratnem sorazmerju je **zmnožek** $x \cdot y$ stalen.
- Za dva para velja $x_1 \cdot y_1 = x_2 \cdot y_2$.
- Pri premem sorazmerju je stalen količnik, pri obratnem pa zmnožek.
- Tipični primeri: število delavcev in čas, hitrost in čas pri isti poti.
- Vedno preveri smiselnost: ali je smer spremembe pravilna?

## Drugače: Na sliki

Predstavljaj si pravokotnik s ploščino $24\,\text{cm}^2$. Če je ena stranica $x$ in druga $y$, velja $x \cdot y = 24$.

- $x = 2$, $y = 12$: širok in nizek ali ozek in visok.
- $x = 4$, $y = 6$.
- $x = 6$, $y = 4$.
- $x = 12$, $y = 2$.

Ko eno stranico podaljšaš, se druga skrajša, da ploščina ostane enaka. Ploščina pravokotnika je tukaj stalni zmnožek $k$.

Če točke $(x, y)$ narišeš v koordinatni sistem, ne ležijo na premici (kot pri premem sorazmerju), ampak na ukrivljeni črti, ki pada: čim večji $x$, tem manjši $y$. Črta se nikoli ne dotakne osi.

## Drugače: Iz vsakdanjega življenja

**Pica.** Pica je razrezana na enake kose in jo razdelimo med prijatelje. Ko je prijateljev več, dobi vsak manjši delež. Če jo razdelijo med $2$, dobi vsak polovico. Med $4$ dobi vsak četrtino. Dvakrat več ljudi pomeni dvakrat manjši kos. Število ljudi in velikost kosa sta obratno sorazmerni količini.

**Zalogi hrane.** Hrana za $10$ dni zadošča $3$ osebam. Če se pridruži več oseb, zadošča manj dni. Za $6$ oseb zadošča $5$ dni, ker je $3 \cdot 10 = 30$ in $6 \cdot 5 = 30$.

**Točenje vode.** Bazen se napolni prej, če odpremo več enakih cevi. Dve cevi ga napolnita v polovici časa, ki ga potrebuje ena.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo z obratnim sorazmerjem:

1. **Preberi** nalogo in zapiši znani par, npr. $5$ delavcev, $8$ dni.
2. **Odloči**, ali je obratno sorazmerje: več delavcev, manj dni, torej da.
3. **Izračunaj konstanto:** $5 \cdot 8 = 40$.
4. **Zapiši enačbo** za novi podatek, npr. za $10$ delavcev: $10 \cdot y = 40$.
5. **Reši:** $y = 40 : 10 = 4$ dni.
6. **Preveri smer:** delavcev je več, dni je manj. ✓
7. **Zapiši odgovor** z enoto.

Še en primer s tabelo. Zalogi krme zadošča $12$ konjem za $15$ dni. Za koliko dni zadošča $9$ konjem?

| konji | dnevi |
|---|---|
| 12 | 15 |
| 9 | $y$ |

$k = 12 \cdot 15 = 180$. $9 \cdot y = 180$, zato $y = 180 : 9 = 20$ dni. Konjev je manj, zato krma zadošča dlje. ✓

## Drugače: Bolj natančno

Primerjajmo obe vrsti sorazmerja:

| | premo sorazmerje | obratno sorazmerje |
|---|---|---|
| Ob podvojitvi $x$ se $y$ | podvoji | razpolovi |
| Stalna količina | količnik $\dfrac{y}{x} = k$ | zmnožek $x \cdot y = k$ |
| Zapis | $y = k \cdot x$ | $y = \dfrac{k}{x}$ |

Zakaj iz stalnega zmnožka sledi pravilo o $k$-kratniku? Naj bo $x_1 \cdot y_1 = k$. Če $x$ povečamo $n$-krat, je $x_2 = n \cdot x_1$. Iz $x_2 \cdot y_2 = k$ sledi:

$$y_2 = \frac{k}{x_2} = \frac{k}{n \cdot x_1} = \frac{1}{n} \cdot \frac{k}{x_1} = \frac{y_1}{n}$$

Torej je $y_2$ natanko $n$-krat manjši od $y_1$, kar je definicija obratnega sorazmerja.

Primer: $y = \dfrac{12}{x}$. Za $x = 3$ je $y = 4$, za $x = 6$ je $y = 2$. Ko se $x$ podvoji, se $y$ razpolovi.

## Preveri se

? Pet črpalk prečrpa vodo iz kleti v $12$ minutah. V koliko minutah jo prečrpa $10$ enakih črpalk?
- $24$ minut
+ $6$ minut
- $60$ minut
- $2$ minuti
> Več črpalk pomeni krajši čas, zato je obratno sorazmerje. Konstanta: $5 \cdot 12 = 60$. Potem $10 \cdot t = 60$, torej $t = 6$ minut. Odgovor $24$ minut bi dobil s premim sorazmerjem.

? Katera tabela prikazuje obratno sorazmerje?
- $x$: 1, 2, 3; $y$: 5, 10, 15
- $x$: 1, 2, 3; $y$: 9, 8, 7
+ $x$: 1, 2, 4; $y$: 8, 4, 2
> Pri obratnem sorazmerju je zmnožek stalen: $1 \cdot 8 = 2 \cdot 4 = 4 \cdot 2 = 8$. V prvi tabeli je stalen količnik (premo sorazmerje), v drugi $y$ sicer pada, a zmnožki $9, 16, 21$ niso enaki.

? Avtobus pelje s hitrostjo $50\,\text{km/h}$ in potrebuje $4\,\text{h}$. Koliko časa potrebuje pri hitrosti $80\,\text{km/h}$ na isti poti?
- $6{,}4\,\text{h}$
- $2\,\text{h}$
+ $2{,}5\,\text{h}$
> Pot je $50 \cdot 4 = 200\,\text{km}$. Pri $80\,\text{km/h}$ je čas $200 : 80 = 2{,}5\,\text{h}$. Odgovor $6{,}4\,\text{h}$ bi dobil s premim sorazmerjem ($4 \cdot 80 : 50$).
