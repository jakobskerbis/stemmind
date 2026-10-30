---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Že znaš zapisati razmerje dveh količin ($3 : 2$), rešiti sorazmerje (npr. $3 : 9 = 4 : x$) in veš, kaj pomeni, da sta premici vzporedni. V tem sklopu se učiš o podobnosti, to je o likih, ki imajo isto obliko, a različno velikost.

**Talesov izrek** poveže vzporednice in razmerja dolžin. Z njim lahko:

- izračunaš dolžino odseka, ki ga ne moreš izmeriti (višina drevesa, širina reke),
- daljico natančno razdeliš na enake dele ali v danem razmerju, samo s šestilom in trikotnikom (geometrijsko orodje),
- rešiš veliko nalog s trikotniki, ki jih sekajo vzporednice.

Pozor: v učbenikih se imenuje Talesov izrek tudi izrek o kotu v polkrogu. V tej lekciji govorimo o izreku o **vzporednicah in razmerjih odsekov**.

## Razlaga

**1. Postavitev.** Imamo kot z vrhom $S$. Na enem kraku sta točki $A$ in $C$, na drugem kraku točki $B$ in $D$ (točki $A$ in $B$ sta bližje vrhu). Daljici $AB$ in $CD$ sta **vzporedni**.

**2. Izrek.** Vzporednici na krakih kota odrezujeta sorazmerne odseke. Velja:

$$SA : SC = SB : SD$$

$$SA : AC = SB : BD$$

Prvo sorazmerje primerja odsek od vrha s *celim* odsekom do druge vzporednice. Drugo primerja odsek od vrha z odsekom *med* vzporednicama.

**3. Še tretje sorazmerje.** Če sta vzporednici daljici, velja tudi

$$SA : SC = AB : CD,$$

saj sta trikotnika $SAB$ in $SCD$ podobna (enaki oblike, različne velikosti).

**4. Več vzporednic.** Če več vzporednih premic seka dve premici, so odseki na eni premici v istem razmerju kot ustrezni odseki na drugi.

**5. Obrat izreka.** Če je $SA : SC = SB : SD$, sta $AB$ in $CD$ vzporedni. Tako lahko preveriš vzporednost.

**6. Deljenje daljice na enake dele.** Daljico $AB$ želiš razdeliti na $5$ enakih delov.

1. Iz $A$ nariši poljuben poltrak, ki ni na $AB$.
2. Na poltrak s šestilom zaporedoma nanesi $5$ enakih odsekov (poljubne dolžine): točke $P_1, P_2, \dots, P_5$.
3. Poveži $P_5$ z $B$.
4. Skozi $P_1, P_2, P_3, P_4$ nariši vzporednice k $P_5B$.

Ker te vzporednice po Talesovem izreku odrežejo na $AB$ sorazmerne odseke, je $AB$ razdeljena na $5$ enakih delov.

**7. Deljenje v danem razmerju.** Za razmerje $m : n$ nanesi na poltrak $m + n$ enakih odsekov, zadnjo točko poveži z $B$ in vzporednico potegni skozi točko $P_m$. Presečišče z $AB$ je iskana točka $T$, za katero velja $AT : TB = m : n$.

## Rešeni primeri

### Primer 1: odsek od vrha (lažji)

Daljici $AB$ in $CD$ sta vzporedni. Znano je $SA = 3\,\text{cm}$, $SC = 9\,\text{cm}$, $SB = 4\,\text{cm}$. Izračunaj $SD$.

1. Vzporednici odrezujeta odseke na obeh krakih, zato: $SA : SC = SB : SD$.
2. Vstavimo: $3 : 9 = 4 : SD$.
3. Sorazmerje rešimo (zmnožek zunanjih členov je enak zmnožku notranjih): $3 \cdot SD = 9 \cdot 4 = 36$.
4. $SD = 36 : 3 = 12\,\text{cm}$.
5. Preverimo: $3 : 9 = \dfrac{1}{3}$ in $4 : 12 = \dfrac{1}{3}$. ✓

### Primer 2: odsek med vzporednicama

Daljici $AB$ in $CD$ sta vzporedni. Znano je $SA = 6\,\text{cm}$, $AC = 4\,\text{cm}$, $SB = 9\,\text{cm}$. Izračunaj $BD$.

1. Znana sta $SA$ in $AC$ na prvem kraku, iščemo $BD$ na drugem. Uporabimo $SA : AC = SB : BD$.
2. Vstavimo: $6 : 4 = 9 : BD$.
3. $6 \cdot BD = 4 \cdot 9 = 36$.
4. $BD = 36 : 6 = 6\,\text{cm}$.
5. Preverimo: $6 : 4 = 1{,}5$ in $9 : 6 = 1{,}5$. ✓

### Primer 3: deljenje daljice v razmerju (težji)

Daljico $AB$ dolžine $10\,\text{cm}$ razdeli s točko $T$ v razmerju $AT : TB = 2 : 3$.

1. **Konstrukcija.** Iz $A$ nariši poljuben poltrak in nanj nanesi $2 + 3 = 5$ enakih odsekov. Dobiš točke $P_1, \dots, P_5$. Poveži $P_5$ z $B$. Skozi $P_2$ nariši vzporednico k $P_5B$. Presečišče z $AB$ je $T$.
2. **Zakaj deluje.** $P_2T \parallel P_5B$, zato po Talesovem izreku velja $AT : TB = AP_2 : P_2P_5$. Na poltraku je $AP_2 = 2$ odseka in $P_2P_5 = 3$ odseke, torej $AT : TB = 2 : 3$.
3. **Račun dolžin.** Vseh delov je $2 + 3 = 5$. En del meri $10 : 5 = 2\,\text{cm}$.
4. $AT = 2 \cdot 2 = 4\,\text{cm}$ in $TB = 3 \cdot 2 = 6\,\text{cm}$.
5. Preverimo: $4 + 6 = 10$ in $4 : 6 = 2 : 3$. ✓

## Pogoste napake

- **Mešanje celega odseka in dela.** $SA : SC$ in $SA : AC$ nista isto. Pri prvem je v imenovalcu odsek od vrha do druge vzporednice, pri drugem samo odsek med vzporednicama.
- **Neustrezni odseki.** Na obeh krakih primerjaj *ustrezna* odseka (prvi z drugim od vrha), ne poljubnih.
- **Premice niso vzporedne.** Izrek velja samo, če sta $AB$ in $CD$ vzporedni. Brez vzporednosti razmerja ne držijo.
- **Obrnjeno sorazmerje.** Če na eni strani pišeš "manjši : večji", moraš tako tudi na drugi strani. Napačno: $SA : SC = SD : SB$.
- **Deljenje v razmerju $m : n$ s $m$ deli.** Daljico moraš razdeliti na $m + n$ enakih delov, ne na $m$ ali $n$.
- **Različne enote.** Preden računaš, vse odseke pretvori v isto enoto.

## Povzetek

- Če sta $AB$ in $CD$ vzporedni ter $A, C$ na enem kraku kota in $B, D$ na drugem, velja $SA : SC = SB : SD$ in $SA : AC = SB : BD$.
- Za daljici $AB$ in $CD$ velja tudi $SA : SC = AB : CD$.
- Obrat: če so razmerja enaka, sta premici vzporedni.
- Daljico razdelimo na $n$ enakih delov ali v razmerju $m : n$ s pomožnim poltrakom, ki ga razdelimo na enake odseke, in z vzporednicami.
- Vedno preveri, ali sta premici res vzporedni in ali primerjaš ustrezne odseke.

## Drugače: Na sliki

Predstavljaj si kot kot "lijak" z vrhom $S$. Če ga prerežeš z vzporednicami, dobiš vedno manjše ali večje "kopije" istega trikotnika: $SAB$ in $SCD$ imata iste kote, le stranice so enako povečane. Če je $SC$ trikrat daljša od $SA$, je tudi $SD$ trikrat daljša od $SB$ in $CD$ trikrat daljša od $AB$.

To je bistvo: vzporednice ohranijo obliko, zato so vsa razmerja ustreznih dolžin enaka. Pri deljenju daljice vzporednice "prenesejo" enake odseke z enega kraka na drugega.

## Drugače: Iz vsakdanjega življenja

**Višina drevesa.** Sonce je zelo daleč, zato so sončni žarki praktično vzporedni. Palica visoka $1{,}5\,\text{m}$ meče senco dolgo $2\,\text{m}$. Senca drevesa je v istem trenutku dolga $10\,\text{m}$. Palica in drevo oklepata s senco enak kot, žarka sta vzporedna, zato:

$$1{,}5 : h = 2 : 10$$

$$2h = 1{,}5 \cdot 10 = 15 \Rightarrow h = 7{,}5\,\text{m}$$

**Policijski trik z listom.** Ko list papirja razdeliš na tri enake trakove brez merjenja, uporabiš isti trik: na list položiš ravnilo poševno tako, da na njem zlahka označiš tri enake odseke, in potegneš vzporednice.

## Drugače: Korak za korakom s številkami

Daljici $AB$ in $CD$ sta vzporedni. Znano je $SA = 5\,\text{cm}$, $AC = 3\,\text{cm}$, $SB = 7{,}5\,\text{cm}$. Poišči $BD$, $SD$ in preveri.

| Korak | Kaj naredimo | Račun |
|---|---|---|
| 1 | Zapišemo sorazmerje z odsekom med vzporednicama | $SA : AC = SB : BD$ |
| 2 | Vstavimo | $5 : 3 = 7{,}5 : BD$ |
| 3 | Rešimo | $5 \cdot BD = 3 \cdot 7{,}5 = 22{,}5$ |
| 4 | Izračunamo $BD$ | $BD = 22{,}5 : 5 = 4{,}5\,\text{cm}$ |
| 5 | Izračunamo $SD$ | $SD = SB + BD = 7{,}5 + 4{,}5 = 12\,\text{cm}$ |
| 6 | Izračunamo $SC$ | $SC = SA + AC = 5 + 3 = 8\,\text{cm}$ |
| 7 | Preverimo drugo sorazmerje | $SA : SC = 5 : 8 = 0{,}625$ in $SB : SD = 7{,}5 : 12 = 0{,}625$ ✓ |

## Drugače: Bolj natančno (dokaz)

Dokažimo, da iz $AB \parallel CD$ sledi $SA : SC = SB : SD$ (uporabimo ploščine; $P$ pomeni ploščino).

1. Trikotnika $ACD$ in $BCD$ imata skupno osnovnico $CD$. Ker je $AB \parallel CD$, imata tudi enaki višini (razdalja med vzporednicama). Zato je $P(ACD) = P(BCD)$.
2. Od trikotnika $SCD$ odštejemo vsakega od teh dveh:
 $P(SAD) = P(SCD) - P(ACD)$ in $P(SBC) = P(SCD) - P(BCD)$. Zato je $P(SAD) = P(SBC)$.
3. Trikotnika $SAB$ in $SAD$ imata skupno oglišče $A$, osnovnici ležita na isti premici ($SB$ in $SD$). Imata isto višino, zato je razmerje ploščin enako razmerju osnovnic: $\dfrac{P(SAB)}{P(SAD)} = \dfrac{SB}{SD}$.
4. Podobno imata trikotnika $SAB$ in $SBC$ skupno oglišče $B$ in osnovnici $SA$, $SC$ na isti premici: $\dfrac{P(SAB)}{P(SBC)} = \dfrac{SA}{SC}$.
5. Ker je $P(SAD) = P(SBC)$, sta leva strani enaki, zato $\dfrac{SB}{SD} = \dfrac{SA}{SC}$. S tem je izrek dokazan.

## Preveri se

? Daljici $AB$ in $CD$ sta vzporedni. Velja $SA = 2\,\text{cm}$, $SC = 8\,\text{cm}$, $SB = 3\,\text{cm}$. Kolikšna je dolžina $SD$?
- $9\,\text{cm}$
+ $12\,\text{cm}$
- $0{,}75\,\text{cm}$
> Uporabimo $SA : SC = SB : SD$, torej $2 : 8 = 3 : SD$ in $2 \cdot SD = 24$, zato $SD = 12\,\text{cm}$. Odgovor $9$ dobiš, če namesto množenja s faktorjem $4$ k $SB$ prišteješ razliko $SC - SA = 6$. Odgovor $0{,}75$ je posledica obrnjenega sorazmerja.

? Daljico $AB$ dolžine $12\,\text{cm}$ razdelimo s točko $T$ v razmerju $AT : TB = 1 : 3$. Kolikšna je dolžina $AT$?
- $4\,\text{cm}$
- $6\,\text{cm}$
+ $3\,\text{cm}$
- $9\,\text{cm}$
> Delov je $1 + 3 = 4$, en del meri $12 : 4 = 3\,\text{cm}$. Zato je $AT = 3\,\text{cm}$ in $TB = 9\,\text{cm}$. Odgovor $9$ je dolžina $TB$.

? Kdaj lahko uporabimo Talesov izrek $SA : SC = SB : SD$ za točke na krakih kota z vrhom $S$?
- Ko sta kraka kota pravokotna.
+ Ko sta daljici $AB$ in $CD$ vzporedni.
- Ko je $SA = SB$.
> Izrek velja samo, če sta premici, ki sekata kraka kota, vzporedni. Pravokotnost krakov ali enakost $SA$ in $SB$ ni pogoj.

:::simboli
S | vrh kota | | |
A, C | točki na prvem kraku | | | A je bližje vrhu
B, D | točki na drugem kraku | | | B je bližje vrhu; AB ∥ CD
h | višina drevesa | | |
:::
