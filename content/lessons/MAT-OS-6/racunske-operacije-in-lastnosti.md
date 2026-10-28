---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Seštevati, odštevati, množiti in deliti že znaš. Doslej so bili računi večinoma kratki: ena operacija, morda dve. Kaj pa, ko se v enem računu srečajo vse štiri?

Poglej račun $2 + 3 \cdot 4$. Anja ga računa od leve proti desni: $2 + 3 = 5$, nato $5 \cdot 4 = 20$. Luka najprej pomnoži, $3 \cdot 4 = 12$, nato prišteje $2$ in dobi $14$. Kdo ima prav? Če bi vsak računal po svoje, bi isti zapis pomenil različne stvari in se ne bi razumeli ne ljudje ne kalkulatorji. Zato so matematiki sprejeli **dogovor o vrstnem redu računskih operacij**. Po tem dogovoru ima prav Luka: vrednost izraza je $14$.

Drugi del lekcije so **računski zakoni**. To so lastnosti računanja, ki ti dovolijo, da račun preurediš in ga izračunaš hitreje ter z manj napakami. Račun $4 \cdot 37 \cdot 25$ je po vrsti neroden, z računskimi zakoni pa ga v glavi izračunaš v nekaj sekundah. To ti bo prav prišlo v trgovini, pri šolskih nalogah in pri vsem, kar se boš učil naprej.

## Razlaga

**1. Imena v računskih operacijah.** Vsaka računska operacija ima svoja imena za števila, ki v njej nastopajo:

| Operacija | Zapis | Imena |
|---|---|---|
| seštevanje | $a + b = c$ | $a$ in $b$ sta seštevanca, $c$ je vsota |
| odštevanje | $a - b = c$ | $a$ je zmanjševanec, $b$ je odštevanec, $c$ je razlika |
| množenje | $a \cdot b = c$ | $a$ in $b$ sta faktorja, $c$ je produkt (zmnožek) |
| deljenje | $a : b = c$ | $a$ je deljenec, $b$ je delitelj, $c$ je količnik |

Seštevanje in odštevanje sta si obratni operaciji, prav tako množenje in deljenje. Zato lahko vsak račun preizkusiš z obratno operacijo: iz $17 + 8 = 25$ sledi $25 - 8 = 17$, iz $6 \cdot 7 = 42$ sledi $42 : 7 = 6$.

Zaenkrat računamo z naravnimi števili in ničlo. Razliko $a - b$ zato lahko izračunamo le, če je $a \ge b$, količnik $a : b$ pa je naravno število le, če se deljenje izide brez ostanka.

**2. Številski izraz.** Zapis, sestavljen iz števil, računskih znakov in oklepajev, imenujemo **številski izraz**, na primer $5 + 6 \cdot 4 - 18 : 3$. Število, ki ga dobimo, ko izraz izračunamo, je **vrednost izraza**.

**3. Vrstni red računskih operacij.** Dogovorjeno je takole:

1. Najprej računamo v **oklepajih**. Če so oklepaji v oklepajih, začnemo z notranjimi.
2. Nato računamo **množenje in deljenje**.
3. Nazadnje računamo **seštevanje in odštevanje**.
4. Operacije iste stopnje (množenje in deljenje ali seštevanje in odštevanje) računamo **od leve proti desni**.

Poglej, kako to deluje:

- $2 + 3 \cdot 4 = 2 + 12 = 14$ (najprej množenje).
- $(2 + 3) \cdot 4 = 5 \cdot 4 = 20$ (oklepaj nas prisili, da najprej seštejemo).
- $24 : 6 \cdot 2 = 4 \cdot 2 = 8$ (množenje in deljenje sta enakovredna, zato gremo od leve).
- $20 - 8 + 3 = 12 + 3 = 15$ (tudi tu gremo od leve).

Zapomni si: množenje nima prednosti pred deljenjem, prav tako seštevanje ne pred odštevanjem. Vrstni red lahko spremenimo samo z oklepaji.

**4. Več oklepajev.** Račun z oklepaji v oklepajih rešuješ od znotraj navzven:

$$50 - (12 + 3 \cdot (7 - 4)) = 50 - (12 + 3 \cdot 3) = 50 - (12 + 9) = 50 - 21 = 29$$

V vsakem koraku izračunaj le en del in prepiši ostalo. Tako se najmanj zmotiš.

**5. Zamenjalni in združevalni zakon.** Za seštevanje in množenje veljata dva zakona:

| Zakon | Seštevanje | Množenje |
|---|---|---|
| zamenjalni (komutativnost) | $a + b = b + a$ | $a \cdot b = b \cdot a$ |
| združevalni (asociativnost) | $(a + b) + c = a + (b + c)$ | $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ |

Zamenjalni zakon pove, da vrstni red dveh števil ni pomemben: $8 + 5 = 5 + 8 = 13$. Združevalni zakon pove, da lahko pri treh členih ali faktorjih poljubno združimo sosednja dva: $(7 + 5) + 15 = 7 + (5 + 15) = 7 + 20 = 27$ in $(5 \cdot 4) \cdot 9 = 5 \cdot (4 \cdot 9) = 5 \cdot 36 = 180$. Skupaj torej dovoljujeta, da v računu, ki ima samo seštevanja ali samo množenja, števila poljubno zamenjaš in združiš.

**6. Razčlenjevalni zakon.** Množenje se »razčleni« po seštevanju in odštevanju (distributivnost):

$$a \cdot (b + c) = a \cdot b + a \cdot c \qquad a \cdot (b - c) = a \cdot b - a \cdot c$$

Drugi zapis velja, če je $b \ge c$. Primer: $6 \cdot (10 + 3) = 6 \cdot 10 + 6 \cdot 3 = 60 + 18 = 78$. Zakon lahko beremo tudi v obratni smeri. Temu pravimo **izpostavljanje skupnega faktorja**: $37 \cdot 8 + 37 \cdot 2 = 37 \cdot (8 + 2) = 37 \cdot 10 = 370$.

**7. Odštevanje in deljenje.** Za odštevanje in deljenje zamenjalni in združevalni zakon **ne veljata**:

- $8 - 3 = 5$, vendar $3 - 8$ med naravnimi števili ni mogoče. Prav tako je $12 : 4 = 3$, a $4 : 12$ ni naravno število.
- $(20 - 8) - 4 = 12 - 4 = 8$, vendar $20 - (8 - 4) = 20 - 4 = 16$.
- $(24 : 6) : 2 = 4 : 2 = 2$, vendar $24 : (6 : 2) = 24 : 3 = 8$.

**8. Števili 0 in 1.** Imata posebni vlogi:

- $a + 0 = a$ in $a - 0 = a$: ničla pri seštevanju in odštevanju ničesar ne spremeni.
- $a \cdot 1 = a$ in $a : 1 = a$: enica pri množenju in deljenju ničesar ne spremeni.
- $a \cdot 0 = 0$ in $0 : a = 0$ (kadar je $a \ne 0$).
- **Z ničlo ne delimo.** Izraz $a : 0$ nima pomena.

**9. Računanje na pamet.** Zakoni so zato, da jih uporabljaš. Dva pogosta prijema: (1) najprej pomnoži števila, ki dasta okroglo število, na primer $25 \cdot 4 = 100$; (2) število razbij na okroglo število in majhen ostanek: $12 \cdot 15 = 12 \cdot (10 + 5) = 120 + 60 = 180$ ali $6 \cdot 99 = 6 \cdot (100 - 1) = 600 - 6 = 594$.

## Rešeni primeri

### Primer 1 (lažji)

Izračunaj vrednost izraza $5 + 6 \cdot 4 - 18 : 3$.

**Podatki:** izraz $5 + 6 \cdot 4 - 18 : 3$ (števila $5$, $6$, $4$, $18$, $3$, znaki $+$, $\cdot$, $-$, $:$, brez oklepajev)
**Iščemo:** vrednost izraza

:::formula
Vrstni red: najprej $\cdot$ in $:$ (od leve proti desni), nato $+$ in $-$ (od leve proti desni).
:::

**Rešitev:**

1. Izraz nima oklepajev, zato najprej izračunamo množenje in deljenje: $6 \cdot 4 = 24$ in $18 : 3 = 6$.
2. Izraz je zdaj $5 + 24 - 6$.
3. Seštevamo in odštevamo od leve proti desni: $5 + 24 = 29$, nato $29 - 6 = 23$.
4. Odgovor: vrednost izraza je $23$.
5. Opomba: če bi računal samo od leve proti desni, bi dobil $((5 + 6) \cdot 4 - 18) : 3 = 26 : 3$, kar ni niti naravno število. Takšen rezultat je opozorilo, da je vrstni red napačen.

### Primer 2 (srednji)

Izračunaj vrednost izraza $(48 - 3 \cdot 6) : 5 + 2 \cdot (9 - 4)$.

**Podatki:** izraz $(48 - 3 \cdot 6) : 5 + 2 \cdot (9 - 4)$ z dvema oklepajema
**Iščemo:** vrednost izraza

:::formula
Vrstni red: oklepaji (v njih spet po vrstnem redu), nato $\cdot$ in $:$, nazadnje $+$ in $-$.
:::

**Rešitev:**

1. Prvi oklepaj: najprej množenje, $3 \cdot 6 = 18$, nato odštevanje, $48 - 18 = 30$.
2. Drugi oklepaj: $9 - 4 = 5$.
3. Izraz je zdaj $30 : 5 + 2 \cdot 5$.
4. Množenje in deljenje: $30 : 5 = 6$ in $2 \cdot 5 = 10$.
5. Seštevanje: $6 + 10 = 16$.
6. Odgovor: vrednost izraza je $16$. Preizkus deljenja: $6 \cdot 5 = 30$.

### Primer 3 (težji)

Brez kalkulatorja izračunaj na pamet s pomočjo računskih zakonov: a) $4 \cdot 37 \cdot 25$, b) $99 \cdot 6$, c) $64 \cdot 17 + 64 \cdot 3$. Pri vsaki nalogi povej, katere zakone si uporabil.

**Podatki:** a) $4 \cdot 37 \cdot 25$, b) $99 \cdot 6$, c) $64 \cdot 17 + 64 \cdot 3$ (računamo na pamet, brez kalkulatorja)
**Iščemo:** vrednosti treh izrazov in imena uporabljenih zakonov

:::formula
$a \cdot b = b \cdot a$, $\quad (a \cdot b) \cdot c = a \cdot (b \cdot c)$, $\quad a \cdot (b - c) = a \cdot b - a \cdot c$, $\quad a \cdot b + a \cdot c = a \cdot (b + c)$
:::

**Rešitev:**

1. a) Faktorja $4$ in $25$ dasta okroglo število. Z zamenjalnim in združevalnim zakonom zapišemo $4 \cdot 37 \cdot 25 = 37 \cdot (4 \cdot 25) = 37 \cdot 100 = 3\,700$.
2. b) Število $99$ je blizu $100$. Z zamenjalnim in razčlenjevalnim zakonom (za odštevanje): $99 \cdot 6 = 6 \cdot (100 - 1) = 6 \cdot 100 - 6 \cdot 1 = 600 - 6 = 594$.
3. c) Faktor $64$ nastopa v obeh členih, zato ga izpostavimo (razčlenjevalni zakon v obratni smeri): $64 \cdot 17 + 64 \cdot 3 = 64 \cdot (17 + 3) = 64 \cdot 20 = 1\,280$.
4. Preizkus za c): $64 \cdot 17 = 1\,088$, $64 \cdot 3 = 192$ in $1\,088 + 192 = 1\,280$.
5. Odgovor: a) $3\,700$, b) $594$, c) $1\,280$.

## Pogoste napake

- **Računanje strogo od leve proti desni.** Pri $7 + 3 \cdot 5$ nekdo izračuna $10 \cdot 5 = 50$. To je napaka, ker ima množenje prednost pred seštevanjem. Pravilno: najprej $3 \cdot 5 = 15$, nato $7 + 15 = 22$.
- **Napačen vrstni red pri enakovrednih operacijah.** Pri $24 : 6 \cdot 2$ nekdo najprej izračuna $6 \cdot 2 = 12$ in dobi $24 : 12 = 2$. Množenje in deljenje sta enakovredna, zato gremo od leve: $24 : 6 = 4$, nato $4 \cdot 2 = 8$. Enako pri $20 - 8 + 3$: pravilno je $12 + 3 = 15$, ne $20 - 11 = 9$.
- **Zakoni za odštevanje in deljenje.** »Saj je $15 - 9$ isto kot $9 - 15$« ali »oklepaj lahko prestavim, kamor hočem«. Zamenjalni in združevalni zakon veljata samo za seštevanje in množenje. Preveri: $(20 - 8) - 4 = 8$, a $20 - (8 - 4) = 16$.
- **Razčlenjevanje samo prvega člena.** Pri $3 \cdot (4 + 5)$ nekdo zapiše $3 \cdot 4 + 5 = 17$. S faktorjem moramo pomnožiti **vsak** člen v oklepaju: $3 \cdot 4 + 3 \cdot 5 = 12 + 15 = 27$. Preizkus: $3 \cdot 9 = 27$.
- **Napake z ničlo.** »$7 \cdot 0 = 7$« ali »$7 : 0 = 0$«. Vsak produkt z ničlo je $0$, torej $7 \cdot 0 = 0$. Deljenje z ničlo ni mogoče, ker ne obstaja število, ki bi ga pomnožil z $0$ in dobil $7$. Pravilno velja samo $0 : 7 = 0$.

## Povzetek

- Imena: seštevanca, vsota; zmanjševanec, odštevanec, razlika; faktorja, produkt; deljenec, delitelj, količnik.
- Vrstni red: najprej oklepaji (od znotraj navzven), nato $\cdot$ in $:$, nazadnje $+$ in $-$; enakovredne operacije od leve proti desni.
- Zamenjalni zakon: $a + b = b + a$ in $a \cdot b = b \cdot a$ (samo za seštevanje in množenje).
- Združevalni zakon: $(a + b) + c = a + (b + c)$ in $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
- Razčlenjevalni zakon: $a \cdot (b + c) = a \cdot b + a \cdot c$ in $a \cdot (b - c) = a \cdot b - a \cdot c$.
- Posebni števili: $a + 0 = a$, $a \cdot 1 = a$, $a \cdot 0 = 0$; z ničlo ne delimo.
- Rezultat preizkusiš z obratno operacijo in z oceno, ali je smiseln.

## Drugače: Na sliki

**Ploščice v pravokotniku.** Račun $3 \cdot (4 + 5)$ si predstavljaj kot ploščice, razporejene v 3 vrstice. V vsaki vrstici je 4 modre (■) in 5 rdečih (□) ploščic:

| | 4 modre | 5 rdečih |
|---|---|---|
| 1. vrstica | ■ ■ ■ ■ | □ □ □ □ □ |
| 2. vrstica | ■ ■ ■ ■ | □ □ □ □ □ |
| 3. vrstica | ■ ■ ■ ■ | □ □ □ □ □ |

Vseh ploščic je $3 \cdot 9 = 27$. Preštejemo jih lahko tudi posebej: modrih je $3 \cdot 4 = 12$, rdečih $3 \cdot 5 = 15$, skupaj $12 + 15 = 27$. To je razčlenjevalni zakon. Če si pravokotnik predstavljaš obrnjen na bok, dobiš 9 vrstic po 3 ploščice: $9 \cdot 3 = 3 \cdot 9$. To je zamenjalni zakon.

**Številska premica.** Odštevanje je premik v levo. Račun $(20 - 8) - 4$ pomeni: začni pri $20$, skoči $8$ nazaj na $12$, nato še $4$ nazaj na $8$. Račun $20 - (8 - 4)$ pomeni: najprej ugotovi, da je $8 - 4 = 4$, nato od $20$ skoči le $4$ nazaj, na $16$. Oklepaj spremeni pot skokov in cilj. Zato pri odštevanju združevalni zakon ne velja.

## Drugače: Iz vsakdanjega življenja

**Nakup.** Kupiš 3 sladolede po 2 € in 2 pijači po 3 €. Račun je $3 \cdot 2 + 2 \cdot 3$. Množenje ima prednost, zato je znesek $6 + 6 = 12$ €. Če bi računal strogo od leve proti desni, bi dobil $3 \cdot 2 = 6$, $6 + 2 = 8$, $8 \cdot 3 = 24$, torej dvakrat več, kot moraš v resnici plačati.

**Vračilo denarja.** Z bankovcem za 20 € plačaš kruh za 3 € in mleko za 2 €. Vrnejo ti $20 - (3 + 2) = 20 - 5 = 15$ €. Isto dobiš, če odštevaš po vrsti: $20 - 3 - 2 = 15$. Če pa napišeš $20 - (3 - 2)$, dobiš 19 €, kar bi pomenilo, da si porabil samo 1 €. Oklepaji torej nikoli niso okras.

**Hitro računanje na tržnici.** Prodajalec ima 5 zabojev po 24 jabolk. Namesto da bi množil težko, število razbije: $5 \cdot 24 = 5 \cdot (20 + 4) = 100 + 20 = 120$ jabolk.

**Kalkulator.** Nekateri preprosti žepni kalkulatorji računajo operacije v vrstnem redu, kot jih tipkaš, in bi pri $2 + 3 \cdot 4$ pokazali $20$. Znanstveni kalkulatorji upoštevajo dogovor in pokažejo $14$. Preizkusi svojega in si po potrebi pomagaj z oklepaji.

## Drugače: Korak za korakom s številkami

Izračunajmo $60 - (4 + 2 \cdot 5) \cdot 3 + 24 : 6$ in v vsakem koraku spremenimo samo en del izraza:

| Korak | Izraz | Kaj smo izračunali |
|---|---|---|
| 0 | $60 - (4 + 2 \cdot 5) \cdot 3 + 24 : 6$ | začetni izraz, poiščemo oklepaj |
| 1 | $60 - (4 + 10) \cdot 3 + 24 : 6$ | v oklepaju množenje: $2 \cdot 5 = 10$ |
| 2 | $60 - 14 \cdot 3 + 24 : 6$ | v oklepaju seštevanje: $4 + 10 = 14$ |
| 3 | $60 - 42 + 4$ | zunaj oklepaja: $14 \cdot 3 = 42$ in $24 : 6 = 4$ |
| 4 | $18 + 4$ | odštevanje: $60 - 42 = 18$ |
| 5 | $22$ | seštevanje: $18 + 4 = 22$ |

Postopek za vsak izraz:

1. Označi oklepaje in začni pri notranjih.
2. V vsakem oklepaju (in nato zunaj njih) podčrtaj množenja in deljenja ter jih izračunaj od leve proti desni.
3. Nato izračunaj seštevanja in odštevanja od leve proti desni.
4. Izraz v vsaki vrstici prepiši v celoti, spremeni pa samo en del.
5. Na koncu preveri, ali je rezultat smiseln.

Še en primer z zakoni: $8 \cdot 43 \cdot 125$. Faktorja $8$ in $125$ dasta okroglo število, zato izraz preuredimo: $43 \cdot (8 \cdot 125) = 43 \cdot 1\,000 = 43\,000$.

## Drugače: Bolj natančno

**Zakaj ima množenje prednost?** Množenje je skrajšan zapis za ponavljano seštevanje: $3 \cdot 4 = 4 + 4 + 4$. Zato je $2 + 3 \cdot 4 = 2 + (4 + 4 + 4) = 14$ in dogovor se ujema z vsakdanjim pomenom. Vrstni red operacij ni zakon narave, ampak dogovor, ki ga spoštujejo vsi, da se pri računih razumemo.

**Zakaj razčlenjevalni zakon velja?** Poglej $3 \cdot (4 + 5)$. To je $(4 + 5) + (4 + 5) + (4 + 5)$. Z zamenjalnim in združevalnim zakonom to preuredimo v $4 + 4 + 4 + 5 + 5 + 5 = 3 \cdot 4 + 3 \cdot 5$. Isti razmislek deluje za poljubna števila.

**Odštevanje vsote in razlike.** Če od $a$ odštejemo vsoto, odštejemo vsak člen posebej: $a - (b + c) = a - b - c$ (če je $a \ge b + c$). Na primer $20 - (8 + 5) = 20 - 13 = 7$ in $20 - 8 - 5 = 12 - 5 = 7$. Če odštejemo razliko, odštejemo manj, kot kaže prvi člen, zato se drugi člen vrne: $20 - (8 - 5) = 20 - 3 = 17$ in $20 - 8 + 5 = 12 + 5 = 17$.

**Zakaj ne delimo z ničlo?** Deljenje je obratno od množenja: $12 : 3 = 4$ pomeni, da je $4 \cdot 3 = 12$. Če bi bilo $12 : 0 = x$, bi moralo veljati $x \cdot 0 = 12$. Ampak vsak produkt z ničlo je $0$, zato takšnega števila $x$ ni. Zato izraz $12 : 0$ nima pomena.

**Kje se zakoni ustavijo?** Zamenjalni in združevalni zakon veljata za seštevanje in množenje, ne pa za odštevanje in deljenje. Pri odštevanju in deljenju imata števili različni vlogi (zmanjševanec in odštevanec, deljenec in delitelj), zato njuna zamenjava spremeni rezultat: $8 - 3 = 5$, a $3 - 8$ med naravnimi števili ni mogoče, in $12 : 4 = 3$, a $4 : 12$ ni naravno število.

## Preveri se

? Kolikšna je vrednost izraza $7 + 3 \cdot 5$?
- $50$
+ $22$
- $15$
> Najprej množimo: $3 \cdot 5 = 15$, nato $7 + 15 = 22$. Odgovor $50$ dobiš, če računaš strogo od leve proti desni ($10 \cdot 5$), odgovor $15$ pa, če pozabiš na seštevanje s $7$.

? Kolikšna je vrednost izraza $24 : 4 \cdot 3$?
- $2$
+ $18$
- $8$
> Deljenje in množenje sta enakovredna, zato računamo od leve proti desni: $24 : 4 = 6$, nato $6 \cdot 3 = 18$. Odgovor $2$ dobiš, če najprej pomnožiš $4 \cdot 3 = 12$, odgovor $8$ pa, če deliš s $3$ namesto z $4$.

? Kolikšna je vrednost izraza $(14 - 2 \cdot 3) \cdot 5 - 6$?
- $40$
+ $34$
- $174$
> V oklepaju najprej množimo: $2 \cdot 3 = 6$, nato $14 - 6 = 8$. Sledi $8 \cdot 5 = 40$ in na koncu $40 - 6 = 34$. Odgovor $40$ je brez zadnjega odštevanja, odgovor $174$ pa dobiš, če v oklepaju najprej odšteješ ($12 \cdot 3 \cdot 5 - 6$).

? Kateri od zapisov je pravilen?
- $18 : 6 = 6 : 18$
- $(20 - 8) - 4 = 20 - (8 - 4)$
+ $7 \cdot (3 + 4) = 7 \cdot 3 + 7 \cdot 4$
- $7 \cdot (3 + 4) = 7 \cdot 3 + 4$
> Razčlenjevalni zakon: $7 \cdot 7 = 49$ in $21 + 28 = 49$. Pri deljenju zamenjava števil ne velja ($18 : 6 = 3$, a $6 : 18$ ni naravno število), pri odštevanju prestavitev oklepaja spremeni rezultat ($8 \ne 16$), pri četrtem zapisu pa je s $7$ pomnožen samo prvi člen ($25 \ne 49$).
