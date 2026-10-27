---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz prejšnjih tem že znaš izračunati obseg kroga $o = 2\pi r$ in ploščino kroga $S = \pi r^2$. Znaš tudi, da ima polni kot $360^\circ$.

Kaj pa, če te zanima samo del kroga? Kos pice, vejica na urnem kazalcu, ki prepotuje del kroga, ali pot tekača na ovinku stadiona so deli kroga. Pri vsakem od njih nas zanima, kako dolg je rob ali kako velika je ploha. Za to potrebuješ **dolžino krožnega loka** in **ploščino krožnega izseka**. Pomagal ti bo preprost miselni vzorec: del kroga je v istem razmerju s celim krogom kot njegov središčni kot s polnim kotom.

## Razlaga

**1. Pojmi.** Naj bo dan krog s središčem $S$ in polmerom $r$. Dve točki $A$ in $B$ na krožnici razdelita krožnico na dva **krožna loka**. Kot $\alpha$ med polmeroma $SA$ in $SB$ je **središčni kot** tega loka.

**Krožni izsek** je del krožne ploskve, ki ga omejujeta dva polmera in krožni lok med njima.

**2. Ideja: delež kroga.** Središčni kot $\alpha$ je del polnega kota $360^\circ$. Ta delež je

$$\frac{\alpha}{360^\circ}$$

Na primer: kot $90^\circ$ je $\dfrac{90}{360} = \dfrac{1}{4}$ polnega kota, zato lok dolži četrtino obsega, izsek pa je četrtina kroga.

**3. Dolžina krožnega loka.** Dolžina loka je ustrezen delež obsega:

$$l = \frac{\alpha}{360^\circ} \cdot 2\pi r$$

**4. Ploščina krožnega izseka.** Ploščina izseka je ustrezen delež ploščine kroga:

$$S_i = \frac{\alpha}{360^\circ} \cdot \pi r^2$$

**5. Kako računamo.**

- Najprej zapiši delež $\dfrac{\alpha}{360^\circ}$ in ga po možnosti okrajšaj.
- Nato izračunaj obseg ali ploščino celega kroga.
- Na koncu ju pomnoži z deležem.
- Dolžino loka podamo v enotah dolžine ($\text{cm}$, $\text{m}$), ploščino izseka v enotah ploščine ($\text{cm}^2$, $\text{m}^2$).

**6. Iskanje kota ali polmera.** Formule lahko obrneš. Če poznaš dolžino loka in polmer, je $\alpha = \dfrac{l \cdot 360^\circ}{2\pi r}$.

**7. Povezava med obema formulama.** Ker je $l = \dfrac{\alpha}{360^\circ} \cdot 2\pi r$, velja tudi $S_i = \dfrac{l \cdot r}{2}$. To je uporabno, kadar poznaš $l$ in $r$, kota pa ne.

## Rešeni primeri

### Primer 1: dolžina loka

Krog ima polmer $r = 6\,\text{cm}$. Kolikšna je dolžina loka s središčnim kotom $60^\circ$? Rezultat zapiši s točnostjo $\pi$ in nato zaokroži na eno decimalko.

1. Delež kroga: $\dfrac{60^\circ}{360^\circ} = \dfrac{1}{6}$. To pomeni, da je lok šestina krožnice.
2. Obseg celega kroga: $o = 2\pi r = 2\pi \cdot 6 = 12\pi\,\text{cm}$.
3. Dolžina loka: $l = \dfrac{1}{6} \cdot 12\pi = 2\pi\,\text{cm}$.
4. Približno: $2 \cdot 3{,}14 = 6{,}28$, torej $l \approx 6{,}3\,\text{cm}$.
5. Preverimo smiselnost: lok je krajši od celega obsega ($12\pi \approx 37{,}7\,\text{cm}$), kar mora držati. ✓

### Primer 2: ploščina izseka

Krog ima polmer $r = 10\,\text{cm}$. Kolikšna je ploščina izseka s središčnim kotom $90^\circ$?

1. Delež: $\dfrac{90^\circ}{360^\circ} = \dfrac{1}{4}$.
2. Ploščina celega kroga: $S = \pi r^2 = \pi \cdot 10^2 = 100\pi\,\text{cm}^2$. Pozor: kvadriramo samo polmer.
3. Ploščina izseka: $S_i = \dfrac{1}{4} \cdot 100\pi = 25\pi\,\text{cm}^2$.
4. Približno: $25 \cdot 3{,}14 = 78{,}5\,\text{cm}^2$.
5. Preverimo: četrtina kroga mora imeti četrtino ploščine. ✓

### Primer 3: obratna naloga

Lok dolžine $l = 15{,}7\,\text{cm}$ pripada krogu s polmerom $r = 10\,\text{cm}$. Izračunaj središčni kot in ploščino izseka. Uporabi $\pi \approx 3{,}14$.

1. **Obseg kroga:** $o = 2 \cdot 3{,}14 \cdot 10 = 62{,}8\,\text{cm}$.
2. **Delež:** lok je del obsega, torej $\dfrac{15{,}7}{62{,}8} = \dfrac{1}{4}$, saj je $4 \cdot 15{,}7 = 62{,}8$.
3. **Kot:** $\alpha = \dfrac{1}{4} \cdot 360^\circ = 90^\circ$.
4. **Ploščina izseka:** izsek je četrtina kroga, ki ima ploščino $3{,}14 \cdot 10^2 = 314\,\text{cm}^2$. Zato $S_i = \dfrac{314}{4} = 78{,}5\,\text{cm}^2$.
5. **Preverimo z drugo formulo:** $S_i = \dfrac{l \cdot r}{2} = \dfrac{15{,}7 \cdot 10}{2} = \dfrac{157}{2} = 78{,}5\,\text{cm}^2$. ✓

## Pogoste napake

- **Pozabljeno deljenje s $360^\circ$.** Dolžina loka ni $\alpha \cdot 2\pi r$. Vedno najprej določi delež $\dfrac{\alpha}{360^\circ}$.
- **Zamenjava obsega in ploščine.** Za lok uporabljaš $2\pi r$, za izsek $\pi r^2$. Če dobiš ploščino v $\text{cm}$ ali dolžino v $\text{cm}^2$, si se zmotil.
- **Kvadriranje $2r$ ali $\pi r$.** V $\pi r^2$ kvadriraš samo $r$, ne $\pi r$. Torej $\pi \cdot 10^2 = 100\pi$, ne $(10\pi)^2$.
- **Premer namesto polmera.** Če je podan premer $d$, je $r = d : 2$.
- **Enote.** Ploščina izseka je v kvadratnih enotah, na primer $\text{cm}^2$.

## Povzetek

- Središčni kot $\alpha$ določa, kolikšen del kroga je lok oziroma izsek: delež je $\dfrac{\alpha}{360^\circ}$.
- Dolžina loka: $l = \dfrac{\alpha}{360^\circ} \cdot 2\pi r$.
- Ploščina izseka: $S_i = \dfrac{\alpha}{360^\circ} \cdot \pi r^2$.
- Če poznaš $l$ in $r$: $S_i = \dfrac{l \cdot r}{2}$.
- Rezultat mora biti manjši od obsega oziroma ploščine celega kroga, če je $\alpha < 360^\circ$.

## Drugače: Na sliki

Predstavljaj si krog, razrezan na enake izseke kot pica.

- Če ga razrežeš na $4$ enake dele, ima vsak središčni kot $360^\circ : 4 = 90^\circ$.
- Pri $8$ delih ima vsak $360^\circ : 8 = 45^\circ$.

Vsak kos ima **svoj lok** (skorjo) in **svojo ploščino** (sir). Če imaš $8$ kosov, je lok enega kosa osmina obsega, njegova ploščina pa osmina ploščine pice.

Ko povečuješ kot, se izsek »odpira«, njegov lok in ploščina pa rasteta natanko sorazmerno. Dvakrat večji kot pomeni dvakrat daljši lok in dvakrat večjo ploščino. Pri polnem kotu $360^\circ$ dobiš cel obseg in celo ploščino kroga.

## Drugače: Iz vsakdanjega življenja

**Urni kazalci.** Minutni kazalec je dolg $10\,\text{cm}$. V $15$ minutah opravi četrtino kroga, torej kot $90^\circ$. Konica kazalca prepotuje lok:

$$l = \frac{1}{4} \cdot 2\pi \cdot 10 = 5\pi \approx 15{,}7\,\text{cm}$$

Del številčnice, ki ga je kazalec v tem času prebrisal, je izsek s ploščino $\dfrac{1}{4} \cdot \pi \cdot 10^2 = 25\pi \approx 78{,}5\,\text{cm}^2$.

**Brisalec avtomobila.** Brisalec, ki se zavrti za določen kot, pobriše izsek stekla. Daljši kot pomeni večjo pobrisano ploščino, daljši brisalec (večji $r$) pa še veliko več, ker je v formuli $r^2$.

**Pica.** Izrežeš kos s kotom $45^\circ$ iz pice s polmerom $15\,\text{cm}$. Ploščina kosa je $\dfrac{1}{8} \cdot \pi \cdot 15^2 = \dfrac{225\pi}{8}\,\text{cm}^2 \approx 88{,}4\,\text{cm}^2$.

## Drugače: Korak za korakom s številkami

Primer: $r = 12\,\text{cm}$, $\alpha = 150^\circ$. Izračunaj dolžino loka in ploščino izseka.

| Korak | Kaj naredimo | Rezultat |
|---|---|---|
| 1 | Zapišemo delež | $\dfrac{150}{360}$ |
| 2 | Okrajšamo (delimo s $30$) | $\dfrac{5}{12}$ |
| 3 | Obseg kroga | $2\pi \cdot 12 = 24\pi$ |
| 4 | Dolžina loka | $\dfrac{5}{12} \cdot 24\pi = 10\pi\,\text{cm}$ |
| 5 | Ploščina kroga | $\pi \cdot 12^2 = 144\pi$ |
| 6 | Ploščina izseka | $\dfrac{5}{12} \cdot 144\pi = 60\pi\,\text{cm}^2$ |
| 7 | Približek ($\pi \approx 3{,}14$) | $l \approx 31{,}4\,\text{cm}$, $S_i \approx 188{,}4\,\text{cm}^2$ |

Preverimo: $\dfrac{l \cdot r}{2} = \dfrac{10\pi \cdot 12}{2} = 60\pi$. ✓

Nasvet: pri računanju delež okrajšaj, preden množiš. Račun je krajši in manj je možnosti za napako.

## Drugače: Bolj natančno

Zakaj je delež $\dfrac{\alpha}{360^\circ}$ pravi? Dolžina loka je **premo sorazmerna** s središčnim kotom: če kot podvojimo, se podvoji tudi lok. Če kot potrojimo, se potroji tudi lok. Za polni kot $360^\circ$ je lok cela krožnica z dolžino $2\pi r$.

Zato lahko zapišemo sorazmerje:

$$l : 2\pi r = \alpha : 360^\circ$$

Od tod dobimo $l = \dfrac{\alpha}{360^\circ} \cdot 2\pi r$.

Enako velja za ploščino izseka: ta je prav tako premo sorazmerna s kotom, polni kot pa da cel krog:

$$S_i : \pi r^2 = \alpha : 360^\circ$$

Od tod $S_i = \dfrac{\alpha}{360^\circ} \cdot \pi r^2$.

Povezava $S_i = \dfrac{l \cdot r}{2}$ sledi iz računa:

$$S_i = \frac{\alpha}{360^\circ} \cdot \pi r^2 = \left(\frac{\alpha}{360^\circ} \cdot 2\pi r\right) \cdot \frac{r}{2} = l \cdot \frac{r}{2}$$

Ta zveza je podobna formuli za ploščino trikotnika »osnovnica krat višina deljeno z $2$«: lok je tu osnovnica, polmer pa višina.

## Preveri se

? Kolikšna je dolžina loka s središčnim kotom $90^\circ$ v krogu s polmerom $8\,\text{cm}$?
- $2\pi\,\text{cm}$
+ $4\pi\,\text{cm}$
- $16\pi\,\text{cm}$
- $16\pi\,\text{cm}^2$
> Delež je $\dfrac{90}{360} = \dfrac{1}{4}$, obseg je $2\pi \cdot 8 = 16\pi$, lok pa $\dfrac{1}{4} \cdot 16\pi = 4\pi\,\text{cm}$. Odgovor $16\pi\,\text{cm}$ je obseg celega kroga, $2\pi$ dobiš, če četrtino vzameš od $8\pi$ (pozabiš faktor $2$), $16\pi\,\text{cm}^2$ pa je ploščina četrtine kroga in ni dolžina.

? Kolikšna je ploščina krožnega izseka s kotom $60^\circ$ v krogu s polmerom $6\,\text{cm}$?
- $2\pi\,\text{cm}^2$
+ $6\pi\,\text{cm}^2$
- $12\pi\,\text{cm}^2$
- $36\pi\,\text{cm}^2$
> Delež je $\dfrac{60}{360} = \dfrac{1}{6}$, ploščina kroga je $\pi \cdot 6^2 = 36\pi$, izsek pa $\dfrac{1}{6} \cdot 36\pi = 6\pi\,\text{cm}^2$. Odgovor $2\pi$ je dolžina loka, ne ploščina, $36\pi$ pa ploščina celega kroga.

? Dolžina loka je $l = 6\pi\,\text{cm}$, polmer pa $r = 9\,\text{cm}$. Kolikšna je ploščina izseka?
- $54\pi\,\text{cm}^2$
- $6\pi\,\text{cm}^2$
+ $27\pi\,\text{cm}^2$
> Uporabimo $S_i = \dfrac{l \cdot r}{2} = \dfrac{6\pi \cdot 9}{2} = 27\pi\,\text{cm}^2$. Odgovor $54\pi$ pozabi deliti z $2$.
