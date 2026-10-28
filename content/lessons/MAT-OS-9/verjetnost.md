---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Verjetno si že metal kocko pri družabni igri, vlekel srečko ali ugibal, ali bo jutri deževalo. V 7. in 8. razredu si se srečal z deleži, odstotki in ulomki: znaš zapisati, kolikšen del celote je nek del. Verjetnost uporablja prav to znanje, le da z njo opisujemo, **kako zelo pričakujemo, da se bo nekaj zgodilo**.

Verjetnost potrebujemo povsod, kjer rezultata ne moremo vnaprej natančno napovedati: pri vremenski napovedi, zavarovalnicah, igrah na srečo, medicinskih testih in pri vsaki anketi. Če znaš verjetnost izračunati, lahko sprejemaš pametnejše odločitve in prepoznaš, kdaj ti kdo prodaja »zagotovljeno srečo«.

## Razlaga

**1. Poskus.** Poskus je dejanje, katerega izid je odvisen od naključja. Primeri: met kocke, met kovanca, izvlek kroglice iz vrečke, vrtenje kolesa sreče. Poskus lahko ponovimo.

**2. Izid.** Izid je en možen rezultat poskusa. Pri metu kocke je šest možnih izidov: $1, 2, 3, 4, 5, 6$. Pri metu kovanca sta dva izida: grb in cifra.

**3. Dogodek.** Dogodek je nabor izidov, ki nas zanimajo. Pri metu kocke je na primer dogodek $A$: »pade sodo število«. Ugodni izidi so $2, 4, 6$, torej trije.

- **Gotov dogodek**: zgodi se vedno (npr. »pade število, manjše od $7$«). Njegova verjetnost je $1$.
- **Nemogoč dogodek**: ne zgodi se nikoli (npr. »pade $7$«). Njegova verjetnost je $0$.
- **Slučajen dogodek**: lahko se zgodi ali ne.

**4. Preprosta verjetnost.** Če so vsi izidi poskusa **enako verjetni**, je verjetnost dogodka $A$:

$$P(A) = \frac{\text{število ugodnih izidov}}{\text{število vseh možnih izidov}}$$

Pri sodem številu na kocki: $P(A) = \dfrac{3}{6} = \dfrac{1}{2}$.

**5. Območje vrednosti.** Verjetnost je vedno med $0$ in $1$:

$$0 \le P(A) \le 1$$

Zapišemo jo lahko kot ulomek, decimalno število ali odstotek: $\dfrac{1}{2} = 0{,}5 = 50\,\%$.

**6. Nasprotni dogodek.** Nasprotni dogodek dogodka $A$ je »$A$ se ne zgodi«. Velja:

$$P(\text{ne } A) = 1 - P(A)$$

**7. Relativna frekvenca.** Če poskus res ponavljamo, štejemo, kolikokrat se je dogodek zgodil. Delež $\dfrac{\text{število pojavitev}}{\text{število poskusov}}$ imenujemo relativna frekvenca. Pri majhnem številu poskusov se zelo razlikuje od izračunane verjetnosti, pri velikem številu poskusov pa se ji vedno bolj približa. To lahko preizkusiš v simulaciji spodaj, kjer kroglice padajo skozi vrstice zatičev in se zbirajo v predalih. Pri majhnem številu kroglic je porazdelitev neenakomerna, pri velikem pa se oblikuje značilna zvonasta oblika.

## Rešeni primeri

### Primer 1 (lažji): met kocke

Kolikšna je verjetnost, da pri metu navadne kocke pade število, večje od $4$?

1. Vseh možnih izidov je $6$: $1, 2, 3, 4, 5, 6$. Kocka je poštena, zato so vsi enako verjetni in lahko uporabimo formulo.
2. Ugodna izida sta $5$ in $6$ (večja od $4$; število $4$ ni večje od $4$). Ugodnih izidov je $2$.
3. $P = \dfrac{2}{6} = \dfrac{1}{3}$.
4. Preverimo: rezultat je med $0$ in $1$. ✓

### Primer 2: kroglice v vrečki

V vrečki je $5$ rdečih, $3$ modre in $2$ zelene kroglice. Na slepo izvlečemo eno kroglico. Kolikšna je verjetnost, da ni rdeča?

1. Vseh kroglic je $5 + 3 + 2 = 10$, torej je $10$ možnih izidov, vsi enako verjetni.
2. **Prvi način.** Ugodne so modre in zelene: $3 + 2 = 5$. $P = \dfrac{5}{10} = \dfrac{1}{2}$.
3. **Drugi način (nasprotni dogodek).** $P(\text{rdeča}) = \dfrac{5}{10} = \dfrac{1}{2}$, zato $P(\text{ni rdeča}) = 1 - \dfrac{1}{2} = \dfrac{1}{2}$.
4. Oba načina dasta enak rezultat, zato sta potrjena. Verjetnost je $\dfrac{1}{2} = 50\,\%$.

### Primer 3 (težji): meta dveh kovancev in relativna frekvenca

Vržemo dva kovanca. Kolikšna je verjetnost, da pade natanko en grb?

1. **Naštejemo vse izide.** Označimo G = grb, C = cifra. Možni izidi so: GG, GC, CG, CC. Vseh je $4$.
2. **Zakaj štiri in ne tri?** GC in CG sta različna izida (prvi kovanec pade drugače), zato ju štejemo posebej. Vsi štirje izidi so enako verjetni.
3. **Ugodni izidi** (natanko en grb): GC in CG, torej $2$.
4. $P = \dfrac{2}{4} = \dfrac{1}{2}$.

Zdaj poskus res izvedemo: dva kovanca vržemo $40$-krat in natanko en grb pade $23$-krat. Relativna frekvenca je $\dfrac{23}{40} = 0{,}575$. To ni natanko $0{,}5$, a je blizu. Če bi poskus ponovili še mnogokrat, bi se relativna frekvenca približevala $0{,}5$.

## Pogoste napake

- **Štetje izidov, ki niso enako verjetni.** Pri dveh kovancih ne rečemo »$3$ izidi: nič grbov, en grb, dva grba«, saj en grb pride na dva načina (GC, CG). Izide vedno naštej posamično.
- **Ulomek narobe obrnjen.** Verjetnost je ugodni deleno vsi, ne obratno. Če dobiš več kot $1$, si se zmotil.
- **»Zdaj je na vrsti.«** Če je kovanec petkrat zapored padel na grb, je verjetnost grba pri naslednjem metu še vedno $\dfrac{1}{2}$. Kovanec si prejšnjih metov ne zapomni.
- **Mešanje relativne frekvence in verjetnosti.** Relativna frekvenca je rezultat dejanskih poskusov in se spreminja, verjetnost je izračunana vrednost.
- **Pozabljeno, da so izidi enako verjetni.** Formula velja samo takrat. Pri »poštenem« kolesu sreče z neenakimi odseki jo moraš uporabiti previdno.

## Povzetek

- Poskus je naključno dejanje, izid je en možen rezultat, dogodek je nabor izidov, ki nas zanimajo.
- Pri enako verjetnih izidih: $P(A) = \dfrac{\text{ugodni izidi}}{\text{vsi izidi}}$.
- Verjetnost je vedno med $0$ in $1$: gotov dogodek ima $1$, nemogoč $0$.
- Nasprotni dogodek: $P(\text{ne } A) = 1 - P(A)$.
- Relativna frekvenca pri velikem številu poskusov se približuje verjetnosti.

## Drugače: Na sliki

Predstavljaj si številsko premico od $0$ do $1$.

- Na levem koncu ($0$) stoji »nemogoče«, na desnem ($1$) »gotovo«.
- Na sredini ($0{,}5$) je »enako možno, da se zgodi ali ne«, kot pri metu kovanca.
- Čim bližje desnemu koncu je dogodek, tem verjetnejši je.

Drug način je kolo sreče, razdeljeno na enake dele. Če je kolo razdeljeno na $8$ enakih izsekov in so $3$ obarvani rdeče, je verjetnost rdeče $\dfrac{3}{8}$: to je kar delež rdečega dela kolesa.

V simulaciji Plinko kroglica pada skozi vrstice zatičev in se pri vsakem zatiču odbije levo ali desno. Spusti najprej nekaj kroglic in opazuj, kako neenakomerno se porazdelijo. Nato jih spusti veliko: stolpci bodo najvišji v sredini in nižji proti robovoma. To je slikovni prikaz tega, da se z več poskusi pokaže pravilnost.

## Drugače: Iz vsakdanjega življenja

**Vreme.** Če napoved pravi »verjetnost padavin $30\,\%$«, to pomeni $P = 0{,}3$. Dež je manj verjeten kot ne, vendar možen. Verjetnost, da dežja ne bo, je $1 - 0{,}3 = 0{,}7$.

**Razred.** V razredu je $24$ učencev, $9$ jih ima rado jabolka. Učitelj na slepo izbere enega. Verjetnost, da izbere nekoga, ki ima rad jabolka, je $\dfrac{9}{24} = \dfrac{3}{8}$.

**Igra.** Pri igri »Človek, ne jezi se« potrebuješ šesterico, da prideš iz hiše. Verjetnost šestice pri enem metu je $\dfrac{1}{6}$. Zato pogosto čakaš več metov. Ni krivica, tako pač deluje naključje.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo z verjetnostjo:

1. Ugotovi, kaj je poskus (npr. met kocke).
2. Naštej vse možne izide in jih preštej. Preveri, ali so enako verjetni.
3. Zapiši dogodek in poišči izide, ki ga izpolnjujejo.
4. Izračunaj $P = \dfrac{\text{ugodni}}{\text{vsi}}$ in okrajšaj ulomek.
5. Preveri, ali je rezultat med $0$ in $1$.

**Primer s tabelo.** Kocka, dogodek »pade praštevilo«:

| Izid | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Praštevilo? | ne | da | da | ne | da | ne |

Ugodni izidi: $2, 3, 5$, torej $3$. Vseh je $6$. $P = \dfrac{3}{6} = \dfrac{1}{2}$.

**Relativna frekvenca v tabeli.** Kocko vržemo $60$-krat in šestica pade $13$-krat.

| Število metov | Šestice | Relativna frekvenca |
|---|---|---|
| 60 | 13 | $\dfrac{13}{60} \approx 0{,}217$ |

Izračunana verjetnost je $\dfrac{1}{6} \approx 0{,}167$. Razlika je običajna pri omejenem številu metov.

## Drugače: Bolj natančno

Matematično poskus opišemo z množico vseh izidov $\Omega$ (za kocko $\Omega = \{1,2,3,4,5,6\}$). Dogodek $A$ je podmnožica množice $\Omega$. Če je $\Omega$ končna in so vsi izidi enako verjetni, je

$$P(A) = \frac{|A|}{|\Omega|},$$

kjer $|A|$ označuje število elementov.

Iz tega sledi več lastnosti:

- Ker je $0 \le |A| \le |\Omega|$, je $0 \le P(A) \le 1$.
- Za gotov dogodek $A = \Omega$ je $P = \dfrac{|\Omega|}{|\Omega|} = 1$. Za nemogoč dogodek $A = \emptyset$ je $P = 0$.
- Nasprotni dogodek ima $|\Omega| - |A|$ izidov, zato
$$P(\text{ne } A) = \frac{|\Omega| - |A|}{|\Omega|} = 1 - \frac{|A|}{|\Omega|} = 1 - P(A).$$

Povezava z relativno frekvenco: če poskus ponovimo $n$-krat in se dogodek zgodi $k$-krat, je relativna frekvenca $\dfrac{k}{n}$. Pri vse večjem $n$ se običajno približuje $P(A)$. Zato verjetnost razumemo kot vrednost, okoli katere se relativne frekvence umirijo.

## Preveri se

? Kolikšna je verjetnost, da pri metu navadne kocke pade liho število?
- $\dfrac{1}{6}$
+ $\dfrac{1}{2}$
- $\dfrac{1}{3}$
- $3$
> Liha števila so $1, 3, 5$, torej so $3$ ugodni izidi od $6$ možnih: $\dfrac{3}{6} = \dfrac{1}{2}$. Odgovor $3$ je število ugodnih izidov, ne verjetnost, saj verjetnost ne more biti večja od $1$.

? V vrečki je $4$ rdeče in $6$ belih kroglic. Kolikšna je verjetnost, da na slepo izvlečemo belo kroglico?
- $\dfrac{6}{4}$
- $\dfrac{2}{5}$
+ $\dfrac{3}{5}$
> Vseh kroglic je $10$, belih je $6$, zato $P = \dfrac{6}{10} = \dfrac{3}{5}$. Ulomek $\dfrac{2}{5}$ je verjetnost rdeče kroglice, $\dfrac{6}{4}$ pa je obrnjeno razmerje belih proti rdečim in je večje od $1$.

? Kovanec je petkrat zapored padel na grb. Kolikšna je verjetnost, da pade grb tudi pri šestem metu?
- Manjša od $\dfrac{1}{2}$, ker je cifra »na vrsti«.
- Večja od $\dfrac{1}{2}$, ker je kovanec očitno nagnjen h grbu.
+ Enaka $\dfrac{1}{2}$
> Pri poštenem kovancu so meti med seboj neodvisni, zato je verjetnost grba pri vsakem metu $\dfrac{1}{2}$, ne glede na prejšnje izide.
