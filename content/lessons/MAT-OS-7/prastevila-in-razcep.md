---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz prejšnjih razredov že znaš poštevanko, veš, kaj je večkratnik in kaj delitelj števila, ter znaš uporabiti pravila za deljivost (npr. število je deljivo z $2$, če je sodo). Znaš tudi zapisati zmnožek enakih faktorjev s potenco, npr. $2 \cdot 2 \cdot 2 = 2^3$.

Zdaj gremo korak naprej: vsako naravno število večje od $1$ lahko zapišemo kot zmnožek **praštevil**. Praštevila so nekakšni »gradniki« vseh števil, tako kot so atomi gradniki snovi. Razcep na prafaktorje potrebuješ, ko iščeš **največji skupni delitelj** in **najmanjši skupni večkratnik** dveh števil, ko krajšaš ulomke in ko iščeš skupni imenovalec pri seštevanju ulomkov. Uporablja se tudi v računalništvu, na primer pri šifriranju podatkov.

## Razlaga

**1. Praštevilo.** Naravno število, večje od $1$, je **praštevilo**, če ima natanko dva delitelja: število $1$ in samega sebe.

Prva praštevila so: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \dots$

- Število $2$ je edino sodo praštevilo. Vsa druga soda števila so deljiva z $2$, zato imajo vsaj tri delitelje.
- Število $1$ **ni** praštevilo, ker ima samo en delitelj.

**2. Sestavljeno število.** Naravno število, večje od $1$, ki ni praštevilo, je **sestavljeno**. Ima vsaj tri delitelje. Na primer $12$ ima delitelje $1, 2, 3, 4, 6, 12$.

**3. Prafaktorji.** Če število zapišemo kot zmnožek praštevil, rečemo, da smo ga **razcepili na prafaktorje**. Primer: $12 = 2 \cdot 2 \cdot 3 = 2^2 \cdot 3$.

**4. Izrek o enoličnosti.** Vsako sestavljeno število ima razcep na prafaktorje, ki je (do vrstnega reda faktorjev) **en sam**. Zato je razcep »prstni odtis« števila.

**5. Kako razcepimo število.** Število zaporedoma delimo z najmanjšimi praštevili ($2, 3, 5, 7, \dots$), dokler ne dobimo $1$. Vsakič delimo z najmanjšim praštevilom, s katerim je število še deljivo.

**6. Pomoč: pravila za deljivost.**

- z $2$: zadnja števka je soda ($0, 2, 4, 6, 8$),
- s $3$: vsota števk je deljiva s $3$,
- s $5$: zadnja števka je $0$ ali $5$,
- z $10$: zadnja števka je $0$.

**7. Zapis s potencami.** Enake prafaktorje zapišemo s potenco: $2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 = 2^3 \cdot 3^2$.

## Rešeni primeri

### Primer 1 (lažji): razcep števila 60

Razcepi število $60$ na prafaktorje.

1. $60$ je sodo, zato delimo z $2$: $60 : 2 = 30$.
2. $30$ je sodo, delimo z $2$: $30 : 2 = 15$.
3. $15$ ni deljivo z $2$ (je liho). Vsota števk je $1 + 5 = 6$, deljiva s $3$, zato delimo s $3$: $15 : 3 = 5$.
4. $5$ je praštevilo, delimo s $5$: $5 : 5 = 1$.
5. Ustavimo se pri $1$. Prafaktorji so vsa števila, s katerimi smo delili:

$$60 = 2 \cdot 2 \cdot 3 \cdot 5 = 2^2 \cdot 3 \cdot 5$$

6. Preverimo: $4 \cdot 3 \cdot 5 = 60$. ✓

### Primer 2: razcep števila 252

Razcepi število $252$ na prafaktorje.

1. $252$ je sodo: $252 : 2 = 126$.
2. $126$ je sodo: $126 : 2 = 63$.
3. $63$ je liho. Vsota števk je $6 + 3 = 9$, deljiva s $3$: $63 : 3 = 21$.
4. $21$: vsota števk je $3$, deljiva s $3$: $21 : 3 = 7$.
5. $7$ je praštevilo: $7 : 7 = 1$.
6. Zapis: $252 = 2 \cdot 2 \cdot 3 \cdot 3 \cdot 7 = 2^2 \cdot 3^2 \cdot 7$.
7. Preverimo: $4 \cdot 9 = 36$, $36 \cdot 7 = 252$. ✓

### Primer 3 (težji): ali je število praštevilo in razcep večjega števila

**a)** Ali je število $91$ praštevilo?

1. $91$ je liho, torej ni deljivo z $2$.
2. Vsota števk je $9 + 1 = 10$, ni deljiva s $3$.
3. Zadnja števka ni $0$ ali $5$, zato ni deljivo s $5$.
4. Poskusimo s $7$: $7 \cdot 13 = 91$. Torej je $91$ deljivo s $7$.
5. Odgovor: $91$ **ni** praštevilo, ampak je sestavljeno: $91 = 7 \cdot 13$. (Pozor: na videz je podobno praštevilu, a ga pravila za $2, 3, 5$ ne razkrijejo.)

**b)** Razcepi število $1\,260$.

1. $1\,260 : 2 = 630$
2. $630 : 2 = 315$
3. $315$ je liho, vsota števk je $3 + 1 + 5 = 9$, zato delimo s $3$: $315 : 3 = 105$
4. $105$: vsota števk je $6$, delimo s $3$: $105 : 3 = 35$
5. $35$ ni deljivo s $3$ (vsota števk $8$). Zadnja števka je $5$, delimo s $5$: $35 : 5 = 7$
6. $7 : 7 = 1$

$$1\,260 = 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 \cdot 7 = 2^2 \cdot 3^2 \cdot 5 \cdot 7$$

Preverimo: $4 \cdot 9 = 36$, $36 \cdot 5 = 180$, $180 \cdot 7 = 1\,260$. ✓

## Pogoste napake

- **Število $1$ imamo za praštevilo.** Ni ga, ker ima samo en delitelj.
- **Število $2$ ne štejemo med praštevila**, ker je sodo. Je pa edino sodo praštevilo.
- **Razcep ni popoln.** Zapis $60 = 4 \cdot 15$ ni razcep na prafaktorje, ker $4$ in $15$ nista praštevili. Faktorje moraš razstaviti naprej: $4 = 2 \cdot 2$, $15 = 3 \cdot 5$.
- **Pozabljen faktor.** Če pri deljenju izpustiš kakšno praštevilo, zmnožek ne da več prvotnega števila. Vedno preveri z množenjem.
- **Prehitro ustavljanje.** Pri $91$ ali $119 = 7 \cdot 17$ pravila za $2, 3, 5$ ne pomagajo, zato je treba poskusiti še $7, 11, \dots$
- **Napačno seštevanje namesto množenja.** Prafaktorje med seboj množimo, ne seštevamo: $2 + 2 + 3 + 5 = 12$, ne $60$.

## Povzetek

- Praštevilo ima natanko dva delitelja: $1$ in samega sebe. Prva so $2, 3, 5, 7, 11, 13, \dots$
- Število $1$ ni praštevilo; $2$ je edino sodo praštevilo.
- Sestavljeno število ima več kot dva delitelja.
- Vsako sestavljeno število lahko zapišemo kot zmnožek prafaktorjev, in to na en sam način (do vrstnega reda).
- Razcep dobimo z zaporednim deljenjem z najmanjšimi možnimi praštevili, dokler ne pridemo do $1$.
- Enake faktorje zapišemo s potenco, npr. $60 = 2^2 \cdot 3 \cdot 5$.
- Rezultat vedno preverimo z množenjem.

## Drugače: Na sliki

Razcep si lahko predstavljaš kot **drevo faktorjev**. Število razdeliš na dva faktorja, nato vsakega, ki še ni praštevilo, razdeliš naprej. Ko so vse veje končane s praštevili, si na koncu.

Za $60$:

```
        60
       /  \
      6    10
     / \   / \
    2   3 2   5
```

Listi drevesa (spodnja števila) so $2, 3, 2, 5$. Njihov zmnožek je $60 = 2^2 \cdot 3 \cdot 5$.

Drevo lahko začneš z drugačnim razcepom, npr. $60 = 4 \cdot 15$, pa na koncu dobiš iste liste. To je slikovni dokaz, da je razcep en sam.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si, da imaš kocke LEGO samo v petih barvah: vsaka barva je eno praštevilo. Vsako število je stolp, ki je sestavljen iz teh kock. Stolp $12$ vsebuje dve »modri« kocki ($2$) in eno »rdečo« ($3$): $12 = 2 \cdot 2 \cdot 3$.

Še ena slika: $24$ učencev se želi razporediti v enako velike skupine. Razcep $24 = 2^3 \cdot 3$ ti pove, iz katerih »koščkov« lahko sestaviš skupine: po $2$, $3$, $4 = 2 \cdot 2$, $6 = 2 \cdot 3$, $8 = 2 \cdot 2 \cdot 2$ ali $12 = 2 \cdot 2 \cdot 3$. Vsak delitelj števila $24$ je zmnožek nekaterih njegovih prafaktorjev.

Pri $13$ učencih pa je praštevilo: razdeliš jih lahko le v $1$ skupino ali v $13$ skupin po enega učenca.

## Drugače: Korak za korakom s številkami

Razcep števila $180$ v tabeli. V levem stolpcu je trenutno število, v desnem najmanjše praštevilo, s katerim je deljivo.

| Število | Delimo s | Rezultat |
|---------|----------|----------|
| $180$ | $2$ | $90$ |
| $90$ | $2$ | $45$ |
| $45$ | $3$ | $15$ |
| $15$ | $3$ | $5$ |
| $5$ | $5$ | $1$ |

Prafaktorji so v stolpcu »Delimo s«: $2, 2, 3, 3, 5$.

$$180 = 2^2 \cdot 3^2 \cdot 5$$

Preverimo: $4 \cdot 9 \cdot 5 = 36 \cdot 5 = 180$. ✓

Postopek za vsako nalogo:

1. Preveri, ali je število deljivo z $2$. Če da, deli, in tako naprej, dokler ni več deljivo.
2. Poskusi s $3$, nato s $5$, nato s $7$, nato z $11$ ...
3. Ustaviš se, ko dobiš $1$.
4. Enake faktorje zapiši s potenco in preveri z množenjem.

## Drugače: Bolj natančno

**Zakaj je $1$ izvzeta iz praštevil?** Če bi bilo $1$ praštevilo, razcep ne bi bil en sam: $6 = 2 \cdot 3 = 1 \cdot 2 \cdot 3 = 1 \cdot 1 \cdot 2 \cdot 3$. Ker želimo, da je razcep enoličen, $1$ ne štejemo med praštevila.

**Zakaj se razcep vedno konča?** Pri vsakem deljenju z najmanjšim možnim praštevilom (vsaj $2$) se število vsaj prepolovi, zato postaja vedno manjše. Ker so naravna števila navzdol omejena z $1$, se postopek mora končati.

**Zakaj je najmanjši delitelj večji od $1$ vedno praštevilo?** Recimo, da bi bil najmanjši tak delitelj $d$ sestavljen. Potem bi imel manjši delitelj $e$, kjer je $1 < e < d$. Ta $e$ bi delil tudi dano število, kar je protislovje, ker je $d$ najmanjši. Zato je $d$ praštevilo. Zato nam pri deljenju z najmanjšim možnim številom ni treba posebej preverjati, ali je delitelj praštevilo.

**Eratostenovo rešeto.** Praštevila do $30$ najdeš tako, da izpišeš števila od $2$ do $30$, obdržiš $2$ in prečrtaš vse njegove večkratnike, nato obdržiš $3$ in prečrtaš njegove večkratnike, nato $5$ in tako naprej. Neprečrtana števila so praštevila: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.

## Preveri se

? Katero od naštetih števil je praštevilo?
- $1$
- $27$
+ $17$
- $39$
> $17$ je deljivo samo z $1$ in s $17$. Število $1$ ima en sam delitelj, $27 = 3 \cdot 9$ in $39 = 3 \cdot 13$ pa sta sestavljeni števili.

? Kako se pravilno glasi razcep števila $72$ na prafaktorje?
- $2 \cdot 4 \cdot 9$
- $2^2 \cdot 3^3$
+ $2^3 \cdot 3^2$
- $8 \cdot 9$
> $72 : 2 = 36$, $36 : 2 = 18$, $18 : 2 = 9$, $9 : 3 = 3$, $3 : 3 = 1$. Torej so trije faktorji $2$ in dva faktorja $3$: $2^3 \cdot 3^2 = 8 \cdot 9 = 72$. Zapisa $2 \cdot 4 \cdot 9$ in $8 \cdot 9$ nista razcepa na prafaktorje, ker $4$, $8$ in $9$ niso praštevila, $2^2 \cdot 3^3$ pa je $108$.

? Katero število ima razcep $2^2 \cdot 3 \cdot 5$?
- $30$
- $20$
+ $60$
- $90$
> $2^2 \cdot 3 \cdot 5 = 4 \cdot 3 \cdot 5 = 60$. Število $30$ dobiš, če pozabiš kvadrat pri $2$, število $90$ pa ustreza razcepu $2 \cdot 3^2 \cdot 5$.
