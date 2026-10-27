---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Že znaš deliti in veš, da se nekatera deljenja izidejo brez ostanka, druga pa ne. Na primer $12 : 3 = 4$ se izide, $13 : 3$ pa ne (ostane $1$).

Pogosto se moramo hitro odločiti, ali se deljenje izide, pa nimamo časa za dolgo deljenje. Ali lahko $45$ bonbonov pravično razdeliš med $9$ otrok? Ali je hišna številka soda ali liha? Ali lahko $120$ evrov plačaš samo z bankovci za $10$ evrov? **Pravila deljivosti** ti omogočajo, da to ugotoviš samo z ogledom števk števila, brez deljenja.

## Razlaga

**1. Kaj pomeni »deljivo«.** Število $a$ je **deljivo** s številom $b$, če pri deljenju $a : b$ ni ostanka. Na primer $18$ je deljivo z $6$, ker je $18 : 6 = 3$. Pravimo tudi, da je $18$ **večkratnik** števila $6$.

**2. Soda in liha števila.**

- **Soda števila** so deljiva z $2$. Končajo se na $0, 2, 4, 6$ ali $8$.
- **Liha števila** niso deljiva z $2$ (pri deljenju z $2$ ostane $1$). Končajo se na $1, 3, 5, 7$ ali $9$.
- Število $0$ je sodo.

**3. Deljivost z 2.** Število je deljivo z $2$, če je njegova **zadnja števka** soda (0, 2, 4, 6 ali 8). Primer: $3\,478$ je deljivo z $2$, $3\,479$ pa ne.

**4. Deljivost s 5.** Število je deljivo s $5$, če se konča na **0 ali 5**. Primer: $265$ in $340$ sta deljiva s $5$, $342$ pa ne.

**5. Deljivost z 10.** Število je deljivo z $10$, če se konča na **0**. Primer: $570$ je deljivo z $10$, $575$ pa ne (je deljivo s $5$, z $10$ pa ne).

**6. Deljivost s 3.** Število je deljivo s $3$, če je **vsota njegovih števk** deljiva s $3$. Primer: pri $1\,245$ je $1 + 2 + 4 + 5 = 12$, to je deljivo s $3$, zato je tudi $1\,245$ deljivo s $3$.

**7. Deljivost z 9.** Število je deljivo z $9$, če je **vsota njegovih števk** deljiva z $9$. Primer: pri $2\,718$ je $2 + 7 + 1 + 8 = 18$, to je deljivo z $9$, zato je tudi $2\,718$ deljivo z $9$.

**8. Povezava.** Vsako število, ki je deljivo z $9$, je deljivo tudi s $3$. Obratno ne velja: $12$ je deljivo s $3$, z $9$ pa ne. Podobno je vsako število, deljivo z $10$, deljivo tudi z $2$ in s $5$.

## Rešeni primeri

### Primer 1 (lažji): zadnja števka

Katera od števil $348$, $1\,275$, $4\,090$ in $7\,913$ so deljiva z $2$, s $5$ oziroma z $10$?

1. Za $2$, $5$ in $10$ je pomembna samo **zadnja števka**, zato gledamo samo njo.
2. $348$ se konča na $8$ (soda števka): deljivo z $2$. Ne konča se na $0$ ali $5$, zato ni deljivo s $5$ in z $10$.
3. $1\,275$ se konča na $5$: deljivo s $5$. Zadnja števka ni soda, zato ni deljivo z $2$. Ne konča se na $0$, zato ni deljivo z $10$.
4. $4\,090$ se konča na $0$: deljivo z $2$, s $5$ in z $10$.
5. $7\,913$ se konča na $3$: ni deljivo z $2$, s $5$ ali z $10$.

### Primer 2: vsota števk

Ali so števila $5\,241$, $7\,326$ in $4\,805$ deljiva s $3$ oziroma z $9$?

1. Za $3$ in $9$ seštejemo vse števke.
2. $5\,241$: $5 + 2 + 4 + 1 = 12$. Število $12$ je deljivo s $3$ ($12 = 3 \cdot 4$), z $9$ pa ne. Torej je $5\,241$ deljivo s $3$, z $9$ ne.
3. $7\,326$: $7 + 3 + 2 + 6 = 18$. Število $18$ je deljivo s $3$ in z $9$. Torej je $7\,326$ deljivo s $3$ in z $9$.
4. $4\,805$: $4 + 8 + 0 + 5 = 17$. Število $17$ ni deljivo ne s $3$ ne z $9$. Torej $4\,805$ ni deljivo ne s $3$ ne z $9$.
5. Preverimo z deljenjem: $7\,326 : 9 = 814$, ker je $9 \cdot 814 = 7\,326$.

### Primer 3 (težji): manjkajoča števka

Pri številu $47*$ je zadnja števka zamazana. Katere števke lahko vstavimo namesto $*$, da je število deljivo s $3$? Katera od teh števk da tudi sodo število?

1. Vsota znanih števk je $4 + 7 = 11$. Skupna vsota je $11 + *$.
2. Ta vsota mora biti deljiva s $3$. Prvi večkratniki števila $3$ nad $11$ so $12$, $15$ in $18$ ($21$ je že preveliko, saj bi bilo $* = 10$, to pa ni števka).
3. Iz $11 + * = 12$ dobimo $* = 1$, iz $11 + * = 15$ dobimo $* = 4$, iz $11 + * = 18$ dobimo $* = 7$.
4. Števila so torej $471$, $474$ in $477$.
5. Sodo je tisto z zadnjo števko $4$, zato je rešitev $474$.
6. Preverimo: $474 : 3 = 158$, ker je $3 \cdot 158 = 474$. Zadnja števka je $4$, zato je število tudi sodo.

## Pogoste napake

- **Vsota števk za 2, 5 in 10.** Pri teh številih gledamo samo zadnjo števko. Vsota števk je pomembna samo za $3$ in $9$.
- **Zadnja števka za 3 in 9.** Število $1\,243$ se konča na $3$, a to še ne pomeni, da je deljivo s $3$. Pri $3$ in $9$ moramo seštevati *vse* števke.
- **Zamenjava $5$ in $10$.** Deljivost z $10$ zahteva zadnjo števko $0$. Število $45$ je deljivo s $5$, z $10$ pa ne.
- **Mešanje $3$ in $9$.** Vsota števk $12$ je deljiva s $3$, ne pa z $9$. Število z vsoto števk $12$ je torej deljivo s $3$, z $9$ ne.
- **Število $0$.** Pogosto mislimo, da $0$ ni sodo. Je sodo, ker je $0 : 2 = 0$ brez ostanka.

## Povzetek

- Število je deljivo s številom $b$, če pri deljenju ni ostanka.
- Soda števila se končajo na $0, 2, 4, 6, 8$, liha na $1, 3, 5, 7, 9$.
- Deljivo z $2$: zadnja števka je soda.
- Deljivo s $5$: zadnja števka je $0$ ali $5$.
- Deljivo z $10$: zadnja števka je $0$.
- Deljivo s $3$: vsota števk je deljiva s $3$.
- Deljivo z $9$: vsota števk je deljiva z $9$.
- Vsako število, deljivo z $9$, je deljivo s $3$, obratno ne velja.

## Drugače: Na sliki

Predstavljaj si kroglice, ki jih razporejaš v vrste.

- **Soda števila:** kroglice lahko razporediš v pare in nobena ne ostane sama. Pri $8$ kroglicah dobiš $4$ pare. Pri $7$ kroglicah ena ostane brez para, zato je $7$ liho število.
- **Deljivost s $5$:** kroglice razporediš v skupine po $5$. Pri $15$ kroglicah dobiš natanko $3$ skupine, pri $17$ kroglicah pa ostaneta $2$ kroglici.
- **Deljivost z $10$:** kroglice razporediš v skupine po $10$. Pri $30$ kroglicah dobiš $3$ polne skupine.

Pri pravilu za $3$ in $9$ si predstavljaj, da števke »zbereš« in seštevaš. Pri $7\,326$ zbereš $7 + 3 + 2 + 6 = 18$ in pogledaš, ali lahko $18$ kroglic razdeliš v skupine po $3$ ali po $9$. Lahko: $18 = 6 \cdot 3$ in $18 = 2 \cdot 9$.

## Drugače: Iz vsakdanjega življenja

- **Hišne številke.** Na eni strani ulice so pogosto soda števila ($2, 4, 6, \dots$), na drugi liha ($1, 3, 5, \dots$). Po zadnji števki takoj veš, na kateri strani je hiša.
- **Denar.** Znesek $120$ evrov lahko plačaš samo z bankovci za $10$ evrov, ker se konča na $0$. Znesek $125$ evrov lahko plačaš z bankovci za $5$ evrov, ker se konča na $5$, z desetimi pa ne.
- **Pravična delitev.** Imaš $45$ bonbonov in $9$ prijateljev. Ker je $4 + 5 = 9$, je $45$ deljivo z $9$. Vsak dobi $5$ bonbonov in nič ne ostane.
- **Pari.** Za igro v parih potrebuješ sodo število igralcev. Pri $23$ otrocih en otrok ostane brez para.

## Drugače: Korak za korakom s številkami

Preverimo število $6\,354$:

| Korak | Kaj gledamo | Rezultat |
|---|---|---|
| 1 | Zadnja števka je $4$ | Sodo: deljivo z $2$ |
| 2 | Zadnja števka ni $0$ ali $5$ | Ni deljivo s $5$ in z $10$ |
| 3 | Vsota števk: $6 + 3 + 5 + 4 = 18$ | |
| 4 | Je $18$ deljivo s $3$? Da ($18 = 3 \cdot 6$) | Deljivo s $3$ |
| 5 | Je $18$ deljivo z $9$? Da ($18 = 9 \cdot 2$) | Deljivo z $9$ |

Preverimo še število $2\,970$:

| Korak | Kaj gledamo | Rezultat |
|---|---|---|
| 1 | Zadnja števka je $0$ | Deljivo z $2$, s $5$ in z $10$ |
| 2 | Vsota števk: $2 + 9 + 7 + 0 = 18$ | Deljivo s $3$ in z $9$ |

Preverjanje: $6\,354 : 9 = 706$, ker je $9 \cdot 706 = 6\,354$. Prav tako je $2\,970 : 9 = 330$, ker je $9 \cdot 330 = 2\,970$.

## Drugače: Bolj natančno

**Zakaj za $2$, $5$ in $10$ štejeta samo zadnja števka?** Število $10$ je deljivo z $2$, s $5$ in z $10$. Zato so deljivi tudi vsi večkratniki števila $10$, torej desetice, stotice, tisočice in tako naprej. Na primer $3\,478 = 3\,470 + 8$. Del $3\,470$ je vedno deljiv z $2$, s $5$ in z $10$, zato odloča samo še zadnja števka $8$.

**Zakaj za $3$ in $9$ štejemo vsoto števk?** Števila $10$, $100$, $1\,000$ in tako naprej so za $1$ večja od števil $9$, $99$, $999$, ki so deljiva z $9$ (in s $3$). Vzemimo $348$:

$$348 = 3 \cdot 100 + 4 \cdot 10 + 8 = 3 \cdot (99 + 1) + 4 \cdot (9 + 1) + 8$$

$$= \underbrace{3 \cdot 99 + 4 \cdot 9}_{\text{deljivo z } 9} + \underbrace{(3 + 4 + 8)}_{\text{vsota števk}}$$

Prvi del ($297 + 36 = 333$) je vedno deljiv z $9$ in s $3$. Zato je število deljivo z $9$ (ali s $3$) natanko tedaj, ko je z $9$ (ali s $3$) deljiva vsota števk. Pri $348$ je vsota števk $15$, to je deljivo s $3$, ne pa z $9$. Zato je $348$ deljivo s $3$, z $9$ ne: $348 : 3 = 116$.

## Preveri se

? Katero od števil je deljivo s $5$, ni pa deljivo z $10$?
- $340$
+ $275$
- $128$
- $1\,090$
> Število je deljivo s $5$, če se konča na $0$ ali $5$, z $10$ pa le, če se konča na $0$. Število $275$ se konča na $5$, zato je deljivo s $5$, z $10$ pa ne. Števili $340$ in $1\,090$ sta deljivi z $10$, število $128$ pa ni deljivo s $5$.

? Katero od števil je deljivo z $9$?
- $3\,126$
+ $4\,563$
- $2\,134$
- $1\,090$
> Pri $4\,563$ je vsota števk $4 + 5 + 6 + 3 = 18$, kar je deljivo z $9$. Pri $3\,126$ je vsota $12$ (deljivo s $3$, z $9$ ne), pri $2\,134$ je $10$, pri $1\,090$ pa $10$.

? Katero števko moramo vstaviti namesto $*$, da bo število $52*$ deljivo z $9$?
- $7$
- $9$
+ $2$
- $4$
> Vsota znanih števk je $5 + 2 = 7$. Skupna vsota mora biti deljiva z $9$, najbližja možnost je $9$, zato je $* = 2$. Preverimo: $522 : 9 = 58$.
