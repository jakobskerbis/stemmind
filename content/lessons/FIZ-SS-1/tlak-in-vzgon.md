---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz osnovne šole že poznaš tlak kot količnik sile in ploščine ($p = F/S$) ter gostoto snovi ($\rho = m/V$). Veš tudi, da se pri potapljanju v globino ušesa »zamašijo« in da les plava, kamen pa potone.

V tej lekciji ti dve opažanji razložimo s fiziko. Zakaj tlak v vodi narašča z globino? Zakaj mora imeti jez pri dnu debelejši zid kot zgoraj? Zakaj težka ladja iz jekla plava, majhna jeklena kroglica pa potone? Odgovora sta **hidrostatični tlak** in **Arhimedov zakon**. Brez njiju ne bi znali načrtovati podmornic, ladij, balonov ali merilnikov globine.

## Razlaga

**1. Tlak.** Tlak je količnik pravokotne sile na ploskev in ploščine te ploskve:

$$p = \frac{F}{S}$$

Enota je paskal: $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$. Pogosto uporabljamo tudi $1\,\mathrm{bar} = 100\,000\,\mathrm{Pa}$. Zračni tlak ob morju je približno $1\,\mathrm{bar}$.

**2. Hidrostatični tlak.** V mirujoči tekočini tlak narašča z globino, ker spodnje plasti tekočine nosijo težo zgornjih. Pomisli na navpičen stolpec tekočine s ploščino preseka $S$ in višino $h$:

- prostornina: $V = S\,h$,
- masa: $m = \rho\,V = \rho\,S\,h$,
- teža: $F_g = m g = \rho\,S\,h\,g$.

Ta teža pritiska na ploščino $S$, zato je tlak, ki ga povzroča tekočina:

$$p_h = \frac{F_g}{S} = \rho\,g\,h$$

Tu je $\rho$ gostota tekočine, $g \approx 9{,}8\,\mathrm{m/s^2}$ težni pospešek in $h$ globina pod gladino.

**3. Skupni tlak.** Če je gladina odprta v ozračje, na tekočino pritiska še zrak. Skupni tlak v globini $h$ je

$$p = p_0 + \rho\,g\,h$$

kjer je $p_0$ zunanji (zračni) tlak.

**4. Lastnosti hidrostatičnega tlaka.**

- Odvisen je samo od globine, gostote tekočine in $g$, **ne** od oblike posode ali količine tekočine.
- Na isti globini je tlak v tekočini povsod enak (v vseh smereh).
- Tlak deluje pravokotno na stene posode.

**5. Vzgon.** Telo, potopljeno v tekočino, doživlja s strani tekočine silo navzgor. Vzrok je razlika tlakov: na spodnjo ploskev telesa deluje večji tlak (večja globina) kot na zgornjo, zato je sila navzgor večja od sile navzdol.

**6. Arhimedov zakon.** Vzgon je enak teži izpodrinjene tekočine:

$$F_v = \rho_t\,g\,V_i$$

Tu je $\rho_t$ gostota **tekočine** in $V_i$ prostornina **potopljenega dela** telesa (to je prostornina izpodrinjene tekočine).

**7. Plavanje, lebdenje, potop.** Primerjamo gostoto telesa $\rho$ in gostoto tekočine $\rho_t$ (za telo, ki je v celoti potopljeno):

- $\rho < \rho_t$: vzgon je večji od teže, telo priplava na površje in plava,
- $\rho = \rho_t$: vzgon je enak teži, telo lebdi,
- $\rho > \rho_t$: vzgon je manjši od teže, telo potone.

Pri plavajočem telesu je vzgon enak teži telesa: $F_v = F_g$.

## Rešeni primeri

### Primer 1: tlak v vodi (lažji)

Kolikšen je hidrostatični tlak v jezeru na globini $5{,}0\,\mathrm{m}$? Gostota vode je $1000\,\mathrm{kg/m^3}$.

1. Iščemo tlak zaradi vode, zato uporabimo $p_h = \rho\,g\,h$.
2. Vstavimo: $p_h = 1000 \cdot 9{,}8 \cdot 5{,}0 = 49\,000\,\mathrm{Pa}$.
3. To je $49\,\mathrm{kPa}$, približno pol bara.
4. Če želimo skupni tlak, prištejemo še zračni tlak: $p = 100\,000 + 49\,000 = 149\,000\,\mathrm{Pa}$.

Za vsakih približno $10\,\mathrm{m}$ globine v vodi tlak naraste za okoli $1\,\mathrm{bar}$.

### Primer 2: vzgon na kocko (srednji)

Kocka z robom $10\,\mathrm{cm}$ je v celoti potopljena v vodo. Kolikšen je vzgon?

1. Robove pretvorimo v metre: $a = 0{,}10\,\mathrm{m}$.
2. Prostornina kocke: $V = a^3 = 0{,}10^3 = 0{,}001\,\mathrm{m^3}$.
3. Ker je kocka povsem pod vodo, je izpodrinjena prostornina enaka prostornini kocke: $V_i = 0{,}001\,\mathrm{m^3}$.
4. Vzgon: $F_v = \rho_t\,g\,V_i = 1000 \cdot 9{,}8 \cdot 0{,}001 = 9{,}8\,\mathrm{N}$.
5. Smiselnost: izpodrinjena voda ima maso $1\,\mathrm{kg}$ (1 liter je $1\,\mathrm{kg}$), njena teža je $9{,}8\,\mathrm{N}$. To se ujema.

### Primer 3: plavajoč les (težji)

Lesen kvader ima gostoto $600\,\mathrm{kg/m^3}$ in prostornino $0{,}020\,\mathrm{m^3}$. Plava na vodi. Kolikšen del kvadra je potopljen?

1. **Teža kvadra.** Masa: $m = \rho\,V = 600 \cdot 0{,}020 = 12\,\mathrm{kg}$. Teža: $F_g = 12 \cdot 9{,}8 = 117{,}6\,\mathrm{N}$.
2. **Pogoj plavanja.** Kvader miruje, zato je vzgon enak teži: $F_v = F_g$, torej $\rho_t\,g\,V_i = \rho\,g\,V$.
3. **Krajšamo $g$:** $\rho_t\,V_i = \rho\,V$.
4. **Izrazimo delež:** $\dfrac{V_i}{V} = \dfrac{\rho}{\rho_t} = \dfrac{600}{1000} = 0{,}6$.
5. **Odgovor.** Potopljenih je $60\,\%$ kvadra. Prostornina potopljenega dela je $V_i = 0{,}6 \cdot 0{,}020 = 0{,}012\,\mathrm{m^3}$.
6. **Preverimo:** vzgon $= 1000 \cdot 9{,}8 \cdot 0{,}012 = 117{,}6\,\mathrm{N}$, kar je enako teži. ✓

## Pogoste napake

- **Mešanje gostot.** V formuli za vzgon je $\rho_t$ gostota *tekočine*, ne telesa. Gostota telesa je potrebna samo za njegovo težo.
- **Napačna prostornina.** Pri vzgonu štejemo samo *potopljeni* del telesa, ne celotne prostornine, če telo plava.
- **Tlak ni odvisen od oblike posode.** Širša ali ožja posoda pri enaki globini da enak hidrostatični tlak.
- **Pozabljeno pretvarjanje enot.** $\mathrm{cm}$ in $\mathrm{l}$ moraš pred računanjem pretvoriti v $\mathrm{m}$ in $\mathrm{m^3}$ ($1\,\mathrm{l} = 0{,}001\,\mathrm{m^3}$).
- **»Težka stvar vedno potone.«** Pomembna je gostota, ne teža. Ogromna ladja plava, ker je njena povprečna gostota (skupaj z zrakom v njej) manjša od gostote vode.
- **Vzgon ni odvisen od globine.** Dokler je telo v celoti potopljeno, je vzgon enak na vsaki globini.

## Povzetek

- Tlak: $p = F/S$, enota $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$.
- Hidrostatični tlak: $p_h = \rho\,g\,h$. Narašča z globino, ni odvisen od oblike posode.
- Skupni tlak v tekočini z odprto gladino: $p = p_0 + \rho\,g\,h$.
- Arhimedov zakon: vzgon je enak teži izpodrinjene tekočine, $F_v = \rho_t\,g\,V_i$.
- Telo plava, če je $\rho < \rho_t$, lebdi pri $\rho = \rho_t$ in potone pri $\rho > \rho_t$.
- Pri plavajočem telesu velja $F_v = F_g$.

## Drugače: Na sliki

Predstavljaj si navpičen stolp iz škatel, naloženih ena na drugo. Spodnja škatla nosi vse nad seboj, zgornja skoraj nič. Voda deluje podobno: plast na dnu »nosi« vso vodo nad seboj, zato je tlak tam največji. Tlak torej na grafu v odvisnosti od globine nariše **premico**, ki se začne pri $p_0$ na gladini in raste za $\rho g$ na vsak meter.

Vzgon si predstavljaj kot puščice. Na spodnjo ploskev potopljene kocke kažejo puščice tlaka navzgor in so daljše, na zgornjo ploskev kažejo navzdol in so krajše. Stranske puščice se izničijo. Ostane razlika, ki kaže navzgor, in to je vzgon.

V simulaciji spodaj (»Hidrostatični tlak«) spreminjaj globino in opazuj, kako se tlak spreminja. Primerjaj tudi tekočine z različno gostoto. Tlak na isti globini je odvisen samo od globine in gostote tekočine, ne od oblike posode.

## Drugače: Iz vsakdanjega življenja

**Potapljanje.** Potapljač na globini $10\,\mathrm{m}$ čuti približno dvojni tlak v primerjavi s površjem: $1\,\mathrm{bar}$ zraka in dodatni približno $1\,\mathrm{bar}$ vode. Zato ga ušesa bolijo, če ne izenači tlaka.

**Jez.** Zid jezu je pri dnu debelejši, ker je tam tlak največji. Tlak ne ve, kako velik je zbiralnik: pri enaki globini je enak v majhnem ribniku in v velikem jezeru.

**Ladja.** Jeklena ploščica potone, jeklena ladja pa plava. Ladja ima obliko skodelice, ki izpodrine veliko vode. Vzgon je enak teži izpodrinjene vode, zato ladja potone le toliko, da je vzgon enak njeni teži.

**Led v pijači.** Led ima gostoto okoli $920\,\mathrm{kg/m^3}$, voda $1000\,\mathrm{kg/m^3}$, zato led plava s približno $92\,\%$ prostornine pod gladino.

## Drugače: Korak za korakom s številkami

Recept za naloge z vzgonom:

1. Nariši telo in tekočino. Vriši silo teže navzdol in vzgon navzgor.
2. Vprašaj se: je telo v celoti potopljeno ali plava?
3. Pretvori vse enote v $\mathrm{kg}$, $\mathrm{m}$, $\mathrm{m^3}$.
4. Izračunaj izpodrinjeno prostornino $V_i$ (cela prostornina ali samo potopljeni del).
5. Vstavi v $F_v = \rho_t\,g\,V_i$.
6. Če telo plava ali lebdi, postavi $F_v = F_g$.

**Številčni primer.** Železna utež ima prostornino $0{,}0005\,\mathrm{m^3}$ in maso $3{,}9\,\mathrm{kg}$. Potopimo jo v vodo.

- Gostota uteži: $\rho = 3{,}9 / 0{,}0005 = 7800\,\mathrm{kg/m^3}$.
- Primerjava: $7800 > 1000$, zato potone.
- Vzgon: $F_v = 1000 \cdot 9{,}8 \cdot 0{,}0005 = 4{,}9\,\mathrm{N}$.
- Teža: $F_g = 3{,}9 \cdot 9{,}8 = 38{,}22\,\mathrm{N}$.
- Tehtnica v vodi pokaže razliko: $38{,}22 - 4{,}9 = 33{,}32\,\mathrm{N}$, kar ustreza masi približno $3{,}4\,\mathrm{kg}$. Utež se zdi lažja.

## Drugače: Bolj natančno

**Izpeljava vzgona na kvader.** Vzemimo kvader s ploščino osnovne ploskve $S$ in višino $H$, potopljen navpično v tekočino tako, da je zgornja ploskev na globini $h_1$, spodnja pa na globini $h_2 = h_1 + H$.

- Tlak na zgornji ploskvi: $p_1 = p_0 + \rho_t g h_1$, sila navzdol: $F_1 = p_1 S$.
- Tlak na spodnji ploskvi: $p_2 = p_0 + \rho_t g h_2$, sila navzgor: $F_2 = p_2 S$.
- Stranske sile se na isti globini izničijo.

Rezultanta sil tlaka je

$$F_v = F_2 - F_1 = \rho_t\,g\,(h_2 - h_1)\,S = \rho_t\,g\,H\,S = \rho_t\,g\,V$$

Zunanji tlak $p_0$ se pokrati. Ker je $H S = V$ prostornina kvadra, dobimo Arhimedov zakon. Za telesa poljubne oblike izrek velja splošno, saj ga lahko razumemo kot vsoto veliko majhnih kvadrov.

**Zakaj tlak ni odvisen od posode?** V izpeljavi $p_h = \rho g h$ se ploščina $S$ pokrati, zato rezultat ni odvisen od preseka stolpca.

## Preveri se

? Kolikšen je hidrostatični tlak zaradi vode ($\rho = 1000\,\mathrm{kg/m^3}$) na globini $20\,\mathrm{m}$? Vzemi $g = 9{,}8\,\mathrm{m/s^2}$.
- $20\,000\,\mathrm{Pa}$
+ $196\,000\,\mathrm{Pa}$
- $9{,}8\,\mathrm{Pa}$
- $98\,000\,\mathrm{Pa}$
> $p_h = \rho g h = 1000 \cdot 9{,}8 \cdot 20 = 196\,000\,\mathrm{Pa}$. Odgovor $98\,000\,\mathrm{Pa}$ bi dobili pri globini $10\,\mathrm{m}$, $20\,000\,\mathrm{Pa}$ pa, če bi pozabili na $g$ in zmnožili samo $\rho$ in $h$.

? Telo s prostornino $0{,}002\,\mathrm{m^3}$ je v celoti potopljeno v vodo ($\rho_t = 1000\,\mathrm{kg/m^3}$). Kolikšen je vzgon? Vzemi $g = 9{,}8\,\mathrm{m/s^2}$.
- $2\,\mathrm{N}$
- $196\,\mathrm{N}$
+ $19{,}6\,\mathrm{N}$
> $F_v = \rho_t g V_i = 1000 \cdot 9{,}8 \cdot 0{,}002 = 19{,}6\,\mathrm{N}$. Vzgon je enak teži izpodrinjene vode, ne odvisen od gostote telesa.

? Zakaj lesen kvader z gostoto $600\,\mathrm{kg/m^3}$ plava na vodi?
- Ker je lahek.
+ Ker je njegova gostota manjša od gostote vode.
- Ker je vzgon vedno večji od teže.
> Telo plava, če je njegova gostota manjša od gostote tekočine. Pomembna ni teža sama, ampak gostota. Pri plavajočem telesu je vzgon enak teži, ne večji.
