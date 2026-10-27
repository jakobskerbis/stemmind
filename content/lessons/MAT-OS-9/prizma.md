---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz prejšnjih let že znaš izračunati ploščino pravokotnika, trikotnika in trapeza, obseg lika in prostornino kvadra ($V = a \cdot b \cdot c$). Poznaš tudi Pitagorov izrek.

Prizma je telo, ki ga srečaš na vsakem koraku: škatla za čevlje, opeka, kos sira ali masla, strešna konstrukcija, šotor, steklena prizma v fiziki. Če veš, kako izračunati njeno površino, veš, koliko kartona ali pločevine potrebuješ. Če veš, kako izračunati prostornino, veš, koliko vode, zraka ali betona gre vanjo. Kvader je le poseben primer prizme, zato bomo vse, kar že znaš o kvadru, posplošili na poljubno prizmo.

## Razlaga

**1. Kaj je prizma.** Prizma je geometrijsko telo z dvema **osnovnima ploskvama**. To sta skladna mnogokotnika v vzporednih ravninah. Ostale ploskve so **stranske ploskve** in so paralelogrami. Vse stranske ploskve skupaj imenujemo **plašč**.

Prizmo poimenujemo po osnovni ploskvi: trikotna, štiristrana, petstrana, šeststrana ...

**2. Pokončna prizma.** Pri **pokončni prizmi** so stranski robovi pravokotni na osnovni ploskvi. Stranske ploskve so zato pravokotniki, njihova višina pa je **višina prizme** $v$. V tej lekciji obravnavamo pokončne prizme.

Če je osnovna ploskev pravilni mnogokotnik (vse stranice in koti enaki), je prizma **pravilna**.

**3. Oznake.**

- $O$ je ploščina osnovne ploskve,
- $o$ je obseg osnovne ploskve,
- $v$ je višina prizme,
- $\mathrm{pl}$ je ploščina plašča,
- $P$ je površina,
- $V$ je prostornina.

**4. Mreža.** Če prizmo razrežemo po robovih in jo razgrnemo v ravnino, dobimo **mrežo**. Sestavljajo jo:

- dve osnovni ploskvi (skladna mnogokotnika),
- plašč: pri pokončni prizmi je to vrsta pravokotnikov, ki so zloženi drug ob drugem.

Število pravokotnikov v plašču je enako številu stranic osnovne ploskve. Trikotna prizma jih ima 3, petstrana 5.

**5. Površina.** Površina je ploščina vseh ploskev, torej ploščina mreže:

$$P = 2O + \mathrm{pl}$$

Plašč je pri pokončni prizmi en velik pravokotnik z osnovnico $o$ (obseg osnovne ploskve) in višino $v$:

$$\mathrm{pl} = o \cdot v$$

**6. Prostornina.** Prostornina je ploščina osnovne ploskve, pomnožena z višino:

$$V = O \cdot v$$

Pri kvadru je $O = a \cdot b$ in $v = c$, zato dobimo že znani $V = a \cdot b \cdot c$.

**7. Enote.** Površina je v $\text{cm}^2$, $\text{m}^2$, prostornina v $\text{cm}^3$, $\text{m}^3$. Vse dolžine moraš pred računom izraziti v isti enoti.

## Rešeni primeri

### Primer 1: štiristrana prizma (lažji)

Osnovna ploskev pokončne prizme je pravokotnik s stranicama $5\,\text{cm}$ in $3\,\text{cm}$, višina prizme je $4\,\text{cm}$. Izračunaj površino in prostornino.

1. Ploščina osnovne ploskve: $O = 5 \cdot 3 = 15\,\text{cm}^2$.
2. Obseg osnovne ploskve: $o = 2 \cdot (5 + 3) = 16\,\text{cm}$.
3. Plašč je pravokotnik z osnovnico $o$ in višino $v$: $\mathrm{pl} = 16 \cdot 4 = 64\,\text{cm}^2$.
4. Površina je dve osnovni ploskvi in plašč: $P = 2 \cdot 15 + 64 = 94\,\text{cm}^2$.
5. Prostornina: $V = O \cdot v = 15 \cdot 4 = 60\,\text{cm}^3$.
6. Preverimo s formulama za kvader: $P = 2(5 \cdot 3 + 5 \cdot 4 + 3 \cdot 4) = 2 \cdot 47 = 94\,\text{cm}^2$. ✓

### Primer 2: trikotna prizma

Osnovna ploskev pokončne prizme je pravokotni trikotnik s katetama $6\,\text{cm}$ in $8\,\text{cm}$. Višina prizme je $12\,\text{cm}$. Izračunaj površino in prostornino.

1. Za obseg potrebujemo še hipotenuzo. Zakaj? Obseg je vsota vseh treh stranic. Pitagorov izrek: $c = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10\,\text{cm}$.
2. Obseg: $o = 6 + 8 + 10 = 24\,\text{cm}$.
3. Ploščina osnovne ploskve (kateti sta si pravokotni, zato je ena višina druga): $O = \dfrac{6 \cdot 8}{2} = 24\,\text{cm}^2$.
4. Plašč: $\mathrm{pl} = o \cdot v = 24 \cdot 12 = 288\,\text{cm}^2$. To so trije pravokotniki velikosti $6 \times 12$, $8 \times 12$ in $10 \times 12$. Preverimo: $72 + 96 + 120 = 288$. ✓
5. Površina: $P = 2 \cdot 24 + 288 = 48 + 288 = 336\,\text{cm}^2$.
6. Prostornina: $V = 24 \cdot 12 = 288\,\text{cm}^3$.

### Primer 3: besedilna naloga

Lopa ima obliko ležeče pokončne trikotne prizme. Osnovna ploskev (zatrep) je enakokrak trikotnik z osnovnico $6\,\text{m}$ in kraki $5\,\text{m}$. Lopa je dolga $8\,\text{m}$. Koliko $\text{m}^3$ zraka je v lopi in koliko $\text{m}^2$ pločevine potrebujemo za streho in oba zatrepa (brez tal)?

1. **Skica.** Trikotnik stoji na osnovnici. Dolžina lope $8\,\text{m}$ je višina prizme $v$, ker prizma leži na boku.
2. **Višina trikotnika.** Pravokotna višina na osnovnico razpolovi osnovnico, zato nastane pravokotni trikotnik s hipotenuzo $5\,\text{m}$ in katetama $3\,\text{m}$ ter $h$:
   $h = \sqrt{5^2 - 3^2} = \sqrt{25 - 9} = \sqrt{16} = 4\,\text{m}$.
3. **Ploščina zatrepa:** $O = \dfrac{6 \cdot 4}{2} = 12\,\text{m}^2$.
4. **Prostornina:** $V = O \cdot v = 12 \cdot 8 = 96\,\text{m}^3$.
5. **Streha** sta dva pravokotnika, ki merita $5\,\text{m} \times 8\,\text{m}$: $2 \cdot 40 = 80\,\text{m}^2$. Tretji pravokotnik plašča ($6 \times 8$) je tla, ki jih ne štejemo.
6. **Zatrepa:** $2 \cdot 12 = 24\,\text{m}^2$.
7. **Odgovor.** V lopi je $96\,\text{m}^3$ zraka, za streho in zatrepa potrebujemo $80 + 24 = 104\,\text{m}^2$ pločevine.

## Pogoste napake

- **Pozabljena ena osnovna ploskev.** Površina vsebuje *dve* osnovni ploskvi: $P = 2O + \mathrm{pl}$, ne $O + \mathrm{pl}$.
- **Zamenjava obsega in ploščine.** Pri plašču potrebuješ obseg osnovne ploskve, pri prostornini pa njeno ploščino.
- **Napačna višina.** Višina trikotnika v osnovni ploskvi ni isto kot višina prizme. Prva je potrebna za ploščino $O$, druga je razdalja med osnovnima ploskvama.
- **Mešanje enot.** Pri računu ne mešaj $\text{cm}$ in $\text{m}$. Najprej vse pretvori v isto enoto.
- **Napačne enote rezultata.** Površina je v kvadratnih enotah, prostornina v kubičnih.
- **Pozabljen koren** pri iskanju manjkajoče stranice s Pitagorovim izrekom.

## Povzetek

- Prizma ima dve skladni, vzporedni osnovni ploskvi. Stranske ploskve skupaj tvorijo plašč. Pri pokončni prizmi so pravokotniki.
- Mreža pokončne prizme: dve osnovni ploskvi in plašč (pravokotniki, ki jih je toliko, kolikor je stranic osnovne ploskve).
- Plašč: $\mathrm{pl} = o \cdot v$.
- Površina: $P = 2O + \mathrm{pl}$.
- Prostornina: $V = O \cdot v$.
- Pri nalogah najprej izračunaj $O$ in $o$ osnovne ploskve, nato šele plašč, površino in prostornino.

## Drugače: Na sliki

Predstavljaj si škatlo v obliki trikotne prizme, ki jo razrežeš po robovih in razgrneš na mizo. Dobiš:

- v sredini vrsto treh pravokotnikov, ki so zloženi drug ob drugem (plašč); njihove skupne širine so enake obsegu osnovne ploskve, njihova višina pa je višina prizme,
- zgoraj in spodaj po en trikotnik (osnovni ploskvi).

Površina je ploščina vseh teh likov skupaj. Če združiš pravokotnike plašča v en velik pravokotnik, ima ta osnovnico $o$ in višino $v$. Zato je plašč natanko $o \cdot v$.

Prostornino si predstavljaj kot **kupček plasti**. Osnovna ploskev je ena plast z majhno debelino. Prizma je kupček takih plasti do višine $v$. Večja ko je osnovna ploskev in višji ko je kupček, več prostora zavzame telo.

## Drugače: Iz vsakdanjega življenja

Kos masla v obliki ležeče trikotne prizme ima pravokotno trikotno osnovno ploskev s katetama $3\,\text{cm}$ in $4\,\text{cm}$ in je dolg $10\,\text{cm}$. Koliko masla je v njem?

Ploščina osnovne ploskve je $\dfrac{3 \cdot 4}{2} = 6\,\text{cm}^2$, torej $V = 6 \cdot 10 = 60\,\text{cm}^3$.

Če ga zavijaš v alu folijo, potrebuješ toliko folije, kolikor je površina. Hipotenuza je $\sqrt{9 + 16} = 5\,\text{cm}$, zato je obseg $12\,\text{cm}$, plašč $12 \cdot 10 = 120\,\text{cm}^2$ in $P = 2 \cdot 6 + 120 = 132\,\text{cm}^2$. Folija mora biti vsaj tako velika, v praksi pa še nekoliko večja, da se prepogne čez robove.

Še en primer: opeka je kvader, torej prizma. Zidar iz njene prostornine in števila opek izračuna, koliko materiala potrebuje za zid.

## Drugače: Korak za korakom s številkami

Recept za vsako pokončno prizmo. Primer: osnovna ploskev je enakokraki trapez z vzporednima stranicama $8\,\text{cm}$ in $4\,\text{cm}$, kraka sta $5\,\text{cm}$, višina trapeza je $4\,\text{cm}$ in višina prizme $10\,\text{cm}$.

| Korak | Kaj računam | Račun | Rezultat |
|---|---|---|---|
| 1 | Ploščina osnovne ploskve (trapez) | $O = \dfrac{(8 + 4) \cdot 4}{2}$ | $24\,\text{cm}^2$ |
| 2 | Obseg osnovne ploskve | $o = 8 + 4 + 5 + 5$ | $22\,\text{cm}$ |
| 3 | Plašč | $\mathrm{pl} = 22 \cdot 10$ | $220\,\text{cm}^2$ |
| 4 | Površina | $P = 2 \cdot 24 + 220$ | $268\,\text{cm}^2$ |
| 5 | Prostornina | $V = 24 \cdot 10$ | $240\,\text{cm}^3$ |

Na koncu preveri enote in smiselnost: površina je v $\text{cm}^2$, prostornina v $\text{cm}^3$.

## Drugače: Bolj natančno

**Zakaj je plašč $o \cdot v$?** Plašč pokončne prizme sestavljajo pravokotniki z isto višino $v$ in širinami $a_1, a_2, \dots, a_n$, ki so stranice osnovne ploskve. Njihova skupna ploščina je

$$a_1 v + a_2 v + \dots + a_n v = (a_1 + a_2 + \dots + a_n)\, v = o \cdot v.$$

**Zakaj je prostornina $O \cdot v$?** Pri kvadru z osnovno ploskvijo $a \times b$ in višino $c$ že veš, da je $V = (a \cdot b) \cdot c = O \cdot v$. Prizmo lahko razdelimo na zelo tanke plasti, ki so vzporedne z osnovno ploskvijo. Vsaka plast je skladna z osnovno ploskvijo, zato ima enako ploščino $O$. Pri kvadru je prostornina vsaka plast krat število plasti. Pri poljubni prizmi z isto ploščino osnove in isto višino so plasti enako velike, zato je prostornina enaka. To je ideja Cavalierijevega načela: telesi z enako višino, ki imata na vsaki višini enak presek, imata enako prostornino.

## Preveri se

? Osnovna ploskev pokončne prizme je pravokotnik $4\,\text{cm} \times 3\,\text{cm}$, višina prizme je $5\,\text{cm}$. Kolikšna je prostornina?
- $12\,\text{cm}^3$
- $94\,\text{cm}^3$
+ $60\,\text{cm}^3$
- $47\,\text{cm}^3$
> $V = O \cdot v = (4 \cdot 3) \cdot 5 = 60\,\text{cm}^3$. Število $12$ je le ploščina osnovne ploskve, $94$ pa površina.

? Osnovna ploskev pokončne prizme je enakostranični trikotnik s stranico $5\,\text{cm}$, višina prizme je $10\,\text{cm}$. Kolikšna je ploščina plašča?
- $50\,\text{cm}^2$
- $75\,\text{cm}^2$
+ $150\,\text{cm}^2$
> Obseg osnovne ploskve je $3 \cdot 5 = 15\,\text{cm}$, zato $\mathrm{pl} = o \cdot v = 15 \cdot 10 = 150\,\text{cm}^2$. Število $50$ je ploščina le ene stranske ploskve.

? Pri pokončni prizmi se višina podvoji, osnovna ploskev pa ostane enaka. Kaj se zgodi s prostornino?
- Ostane enaka.
+ Podvoji se.
- Poveča se na štirikratnik.
> Prostornina je $V = O \cdot v$. Če se $v$ podvoji, $O$ pa ostane, se podvoji tudi $V$.
