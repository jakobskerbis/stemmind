---
stanje: osnutek
demo: ph
phet: ph-scale
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Pri sklopu o kislinah in bazah si spoznal, da kisline v vodi oddajajo vodikove ione ($\mathrm{H^+}$, natančneje oksonijeve ione $\mathrm{H_3O^+}$), baze pa hidroksidne ione ($\mathrm{OH^-}$). Znaš tudi izračunati množinsko koncentracijo raztopine ($c = n / V$) in poznaš zapis z desetiškimi potencami, npr. $10^{-3} = 0{,}001$.

Koncentracije ionov v raztopinah so zelo majhne in se razlikujejo za več velikostnih razredov: od $1\,\text{mol/L}$ do $0{,}00000000000001\,\text{mol/L}$. Z njimi je nerodno računati. Zato so kemiki uvedli **pH**, preprosto število, ki pove, kako kisla ali bazična je raztopina. Z njim se srečaš pri bazenski vodi, kozmetiki, zemlji v vrtu, v laboratoriju in v želodcu.

## Razlaga

**1. Definicija pH.** pH je negativni desetiški logaritem množinske koncentracije oksonijevih (vodikovih) ionov:

$$\mathrm{pH} = -\log\,[\mathrm{H^+}]$$

Pri tem je $[\mathrm{H^+}]$ koncentracija v $\text{mol/L}$. Če je koncentracija potenca števila 10, je račun preprost: pri $[\mathrm{H^+}] = 10^{-x}$ je $\mathrm{pH} = x$.

**2. Podobno pOH.** Za hidroksidne ione definiramo:

$$\mathrm{pOH} = -\log\,[\mathrm{OH^-}]$$

**3. Ionski produkt vode.** Pri $25\,^\circ\mathrm{C}$ v vsaki vodni raztopini velja:

$$[\mathrm{H^+}]\cdot[\mathrm{OH^-}] = 10^{-14}$$

Iz tega sledi:

$$\mathrm{pH} + \mathrm{pOH} = 14$$

**4. Lestvica.**

- $\mathrm{pH} < 7$: kisla raztopina ($[\mathrm{H^+}] > 10^{-7}\,\text{mol/L}$),
- $\mathrm{pH} = 7$: nevtralna raztopina (čista voda),
- $\mathrm{pH} > 7$: bazična raztopina.

Sprememba pH za 1 pomeni **desetkratno** spremembo koncentracije $\mathrm{H^+}$.

**5. Močne kisline in baze.** Močne kisline (npr. $\mathrm{HCl}$, $\mathrm{HNO_3}$, $\mathrm{H_2SO_4}$ v prvi stopnji) in močne baze (npr. $\mathrm{NaOH}$, $\mathrm{KOH}$) v vodi **popolnoma disociirajo**. Zato velja:

- enoprotonska močna kislina $\mathrm{HA}$: $[\mathrm{H^+}] = c(\mathrm{HA})$,
- baza z eno hidroksidno skupino ($\mathrm{NaOH}$, $\mathrm{KOH}$): $[\mathrm{OH^-}] = c(\text{baze})$.

**6. Postopek.**

*Za kislino:* $[\mathrm{H^+}] = c$ in nato $\mathrm{pH} = -\log[\mathrm{H^+}]$.

*Za bazo:* $[\mathrm{OH^-}] = c$, nato $\mathrm{pOH} = -\log[\mathrm{OH^-}]$ in končno $\mathrm{pH} = 14 - \mathrm{pOH}$.

**7. Obratni račun.** Iz pH dobiš koncentracijo: $[\mathrm{H^+}] = 10^{-\mathrm{pH}}\,\text{mol/L}$.

## Rešeni primeri

### Primer 1: močna kislina

Kolikšen je pH raztopine $\mathrm{HCl}$ s koncentracijo $0{,}001\,\text{mol/L}$?

1. $\mathrm{HCl}$ je močna enoprotonska kislina, popolnoma disociira: $\mathrm{HCl \rightarrow H^+ + Cl^-}$.
2. Zato je $[\mathrm{H^+}] = c(\mathrm{HCl}) = 0{,}001\,\text{mol/L} = 10^{-3}\,\text{mol/L}$.
3. $\mathrm{pH} = -\log 10^{-3} = 3$.
4. Preverimo: pH je manjši od 7, raztopina je kisla. ✓

### Primer 2: močna baza

Kolikšen je pH raztopine $\mathrm{NaOH}$ s koncentracijo $0{,}01\,\text{mol/L}$?

1. $\mathrm{NaOH}$ je močna baza: $\mathrm{NaOH \rightarrow Na^+ + OH^-}$.
2. Zato je $[\mathrm{OH^-}] = 0{,}01\,\text{mol/L} = 10^{-2}\,\text{mol/L}$.
3. $\mathrm{pOH} = -\log 10^{-2} = 2$.
4. Zaradi $\mathrm{pH} + \mathrm{pOH} = 14$ je $\mathrm{pH} = 14 - 2 = 12$.
5. Preverimo: pH je večji od 7, raztopina je bazična. ✓

### Primer 3 (težji): koncentracija, ki ni potenca števila 10

Raztopimo $0{,}40\,\text{g}$ $\mathrm{NaOH}$ v vodi in dopolnimo do $500\,\text{mL}$ raztopine. Kolikšen je pH? ($M(\mathrm{NaOH}) = 40\,\text{g/mol}$)

1. **Množina:** $n = \dfrac{m}{M} = \dfrac{0{,}40\,\text{g}}{40\,\text{g/mol}} = 0{,}010\,\text{mol}$.
2. **Prostornina v litrih:** $V = 500\,\text{mL} = 0{,}500\,\text{L}$.
3. **Koncentracija:** $c = \dfrac{n}{V} = \dfrac{0{,}010\,\text{mol}}{0{,}500\,\text{L}} = 0{,}020\,\text{mol/L}$.
4. Močna baza popolnoma disociira: $[\mathrm{OH^-}] = 0{,}020\,\text{mol/L} = 2{,}0\cdot 10^{-2}\,\text{mol/L}$.
5. $\mathrm{pOH} = -\log(2{,}0\cdot 10^{-2}) = -(\log 2{,}0 + \log 10^{-2}) = -(0{,}30 - 2) = 1{,}70$.
6. $\mathrm{pH} = 14 - 1{,}70 = 12{,}30$.
7. Preverimo: koncentracija je med $10^{-2}$ in $10^{-1}$, zato mora biti pOH med 1 in 2, pH pa med 12 in 13. ✓

## Pogoste napake

- **Pozabljen minus v definiciji.** $\log 10^{-3} = -3$, pH pa je $+3$. Pri $\mathrm{pH} = -\log[\mathrm{H^+}]$ se negativni predznak odpravi.
- **Za bazo se izračuna pH kot $-\log[\mathrm{OH^-}]$.** To je pOH. Za pH moraš še odšteti od 14.
- **Koncentracija v napačnih enotah.** Pri računu mora biti prostornina v litrih, ne v mililitrih.
- **Zamenjava kisle in bazične raztopine.** Pri kislini je pH manjši od 7, pri bazi večji. Vedno preveri smiselnost rezultata.
- **Mislimo, da je razlika 1 v pH majhna.** Razlika 1 pomeni desetkratno razliko koncentracije, razlika 3 pa tisočkratno.

## Povzetek

- $\mathrm{pH} = -\log[\mathrm{H^+}]$, $\mathrm{pOH} = -\log[\mathrm{OH^-}]$, pri $25\,^\circ\mathrm{C}$ velja $\mathrm{pH} + \mathrm{pOH} = 14$.
- $\mathrm{pH} < 7$ kislo, $\mathrm{pH} = 7$ nevtralno, $\mathrm{pH} > 7$ bazično.
- Močna enoprotonska kislina: $[\mathrm{H^+}] = c$. Močna baza z eno skupino $\mathrm{OH}$: $[\mathrm{OH^-}] = c$.
- Pri bazi najprej izračunaj pOH, nato $\mathrm{pH} = 14 - \mathrm{pOH}$.
- Sprememba pH za 1 pomeni desetkratno spremembo $[\mathrm{H^+}]$.

## Drugače: Na sliki

V interaktivni demonstraciji »pH lestvica« zgoraj vidiš lestvico od 0 do 14. Na levi je kislo območje, na sredini nevtralna točka pri 7, na desni bazično območje. Premikaj se po lestvici in opazuj, kako se s pH spreminja koncentracija ionov $\mathrm{H^+}$.

Pomembna ugotovitev: lestvica je **logaritemska**. Vsak korak v desno pomeni desetkrat manj $\mathrm{H^+}$ ionov. Raztopina s pH 3 ima torej $100$-krat več $\mathrm{H^+}$ kot raztopina s pH 5. Zato je lestvica videti enakomerna, čeprav so razlike v koncentracijah ogromne.

Preizkusi še simulacijo PhET »pH lestvica«. Tam lahko merilnik pH potopiš v različne tekočine, spreminjaš količino in koncentracijo ter opazuješ števila ionov $\mathrm{H_3O^+}$ in $\mathrm{OH^-}$.

## Drugače: Iz vsakdanjega življenja

Primerjaj pH z lestvico potresov ali glasnosti: vsak korak pomeni večkratnik, ne prištevanje enake količine.

Primer: kis ima pH okoli 3, kuhinjska voda okoli 7. Razlika je 4 stopnje, torej ima kis približno $10^4 = 10\,000$-krat več $\mathrm{H^+}$ ionov na liter. Zato kis čutimo kot kislo, vodo pa ne.

Če razredčiš kislo raztopino, se pH poveča in približuje 7. Če $\mathrm{HCl}$ s pH 2 razredčiš v desetkratni prostornini, dobiš pH 3. To je isti princip kot pri razredčenem soku: manj ionov na liter.

Uporaba: bazenska voda mora imeti pH med približno 7 in 8, da ne draži oči. Tudi čistila in šamponi so prilagojeni pH kože.

## Drugače: Korak za korakom s številkami

Primerjajmo tri raztopine in sledimo istemu receptu:

| Raztopina | $c$ (mol/L) | Ioni | Račun | pH |
|---|---|---|---|---|
| $\mathrm{HCl}$ | $10^{-1}$ | $[\mathrm{H^+}] = 10^{-1}$ | $-\log 10^{-1}$ | $1$ |
| $\mathrm{HNO_3}$ | $10^{-4}$ | $[\mathrm{H^+}] = 10^{-4}$ | $-\log 10^{-4}$ | $4$ |
| $\mathrm{KOH}$ | $10^{-3}$ | $[\mathrm{OH^-}] = 10^{-3}$, pOH $=3$ | $14 - 3$ | $11$ |

Recept:

1. Ugotovi, ali je snov močna kislina ali močna baza.
2. Zapiši koncentracijo ustreznih ionov ($\mathrm{H^+}$ pri kislini, $\mathrm{OH^-}$ pri bazi).
3. Izračunaj $-\log$ te koncentracije (pH oziroma pOH).
4. Pri bazi odštej: $\mathrm{pH} = 14 - \mathrm{pOH}$.
5. Preveri: kislina mora imeti $\mathrm{pH} < 7$, baza $\mathrm{pH} > 7$.

Primer s koncentracijo, ki ni potenca števila 10: pri $c = 0{,}050\,\text{mol/L}$ $\mathrm{HCl}$ je $[\mathrm{H^+}] = 5{,}0\cdot 10^{-2}$ in $\mathrm{pH} = -(\log 5{,}0 - 2) = -(0{,}70 - 2) = 1{,}30$.

## Drugače: Bolj natančno

**Zakaj logaritem?** Logaritem pri osnovi 10 pove, na katero potenco moramo dvigniti 10, da dobimo dano število: $\log 10^{x} = x$. Zato iz zelo majhnih števil (npr. $10^{-9}$) dobimo obvladljiva števila (9).

**Od kod $\mathrm{pH} + \mathrm{pOH} = 14$?** Voda se rahlo razpade (avtoprotoliza): $\mathrm{2H_2O \rightleftharpoons H_3O^+ + OH^-}$. Pri $25\,^\circ\mathrm{C}$ je ravnotežni ionski produkt vode $K_w = [\mathrm{H^+}][\mathrm{OH^-}] = 10^{-14}$. Če enačbo logaritmiramo in pomnožimo z $-1$:

$$-\log[\mathrm{H^+}] - \log[\mathrm{OH^-}] = 14 \;\Rightarrow\; \mathrm{pH} + \mathrm{pOH} = 14$$

V čisti vodi sta koncentraciji ionov enaki: $[\mathrm{H^+}] = [\mathrm{OH^-}] = 10^{-7}\,\text{mol/L}$, zato je pH enak 7.

**Omejitve.** Ta račun velja za močne kisline in baze pri običajnih koncentracijah (približno med $10^{-6}$ in $1\,\text{mol/L}$) in pri $25\,^\circ\mathrm{C}$. Pri zelo razredčenih raztopinah ($\approx 10^{-7}\,\text{mol/L}$ ali manj) moramo upoštevati še ione iz vode. Pri šibkih kislinah in bazah popolna disociacija ne velja, to obravnavamo posebej.

## Preveri se

? Kolikšen je pH raztopine $\mathrm{HCl}$ s koncentracijo $10^{-2}\,\text{mol/L}$?
- $-2$
- $12$
+ $2$
- $7$
> $\mathrm{HCl}$ je močna kislina, zato je $[\mathrm{H^+}] = 10^{-2}\,\text{mol/L}$ in $\mathrm{pH} = -\log 10^{-2} = 2$. Rezultat $-2$ pozabi minus v definiciji, $12$ pa bi dobil, če bi kislino obravnaval kot bazo.

? Kolikšen je pH raztopine $\mathrm{KOH}$ s koncentracijo $10^{-3}\,\text{mol/L}$?
- $3$
+ $11$
- $-3$
- $10^{-11}$
> $[\mathrm{OH^-}] = 10^{-3}\,\text{mol/L}$, torej $\mathrm{pOH} = 3$ in $\mathrm{pH} = 14 - 3 = 11$. Odgovor $3$ je pOH, ne pH.

? Za koliko se razlikujeta koncentraciji $\mathrm{H^+}$ v raztopinah s pH 2 in pH 4?
- Raztopina s pH 4 ima dvakrat več $\mathrm{H^+}$.
- Raztopina s pH 2 ima dvakrat več $\mathrm{H^+}$.
+ Raztopina s pH 2 ima $100$-krat več $\mathrm{H^+}$.
> Razlika dveh enot pH pomeni $10^2 = 100$-kratno razliko koncentracije. Nižji pH pomeni več $\mathrm{H^+}$ ionov: $10^{-2}$ proti $10^{-4}\,\text{mol/L}$.
