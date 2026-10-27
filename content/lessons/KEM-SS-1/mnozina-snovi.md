---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz osnovne šole že veš, da so snovi zgrajene iz zelo majhnih delcev: atomov, molekul in ionov. Veš tudi, da lahko maso snovi izmeriš s tehtnico. Težava je v tem, da v kemijski reakciji delci reagirajo v določenih razmerjih, delcev pa ne moremo prešteti niti videti. En sam delec je neskončno lahek, zato bi bile številke ogromne.

Zato kemiki uporabljamo posebno količino, **množino snovi**. Z njo »štejemo« delce tako, da stehtamo snov. Ko veš, koliko molov snovi imaš, veš, koliko delcev je v njej, in lahko načrtuješ reakcije: koliko vodika potrebuješ za sintezo amoniaka, koliko apna za neutralizacijo kisline ali koliko zdravilne učinkovine je v tableti.

## Razlaga

**1. Množina snovi.** Množina snovi je fizikalna količina, ki pove, koliko delcev (atomov, molekul, ionov ...) snovi imamo. Označimo jo z $n$, enota je **mol** ($\mathrm{mol}$).

**2. Mol.** En mol je množina snovi, ki vsebuje natanko toliko delcev, kolikor jih pove Avogadrova konstanta.

**3. Avogadrova konstanta.** Število delcev v enem molu je približno

$$N_A = 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}}$$

To pomeni: v $1\,\mathrm{mol}$ vode je približno $6{,}022 \cdot 10^{23}$ molekul vode, v $1\,\mathrm{mol}$ železa približno $6{,}022 \cdot 10^{23}$ atomov železa. Mol je podoben izrazu »ducat« (12 kosov), le da je število veliko večje.

**4. Število delcev in množina.** Če je $N$ število delcev, velja:

$$N = n \cdot N_A \qquad\Longleftrightarrow\qquad n = \frac{N}{N_A}$$

**5. Molska masa.** Molska masa $M$ je masa enega mola snovi:

$$M = \frac{m}{n}, \qquad \text{enota: } \mathrm{g/mol}$$

Številska vrednost molske mase (v $\mathrm{g/mol}$) je enaka relativni atomski ali relativni molekulski masi snovi, ki jo odčitaš iz periodnega sistema.

**6. Kako izračunamo molsko maso spojine.** Seštejemo molske mase vseh atomov v formulski enoti. Za vodo $\mathrm{H_2O}$ (uporabimo $A_r(\mathrm{H}) = 1$, $A_r(\mathrm{O}) = 16$):

$$M(\mathrm{H_2O}) = 2 \cdot 1 + 16 = 18\,\mathrm{g/mol}$$

**7. Zveza med maso in množino.** Iz $M = m/n$ sledi:

$$n = \frac{m}{M} \qquad m = n \cdot M$$

Tako povežemo maso (ki jo izmerimo) s številom delcev (ki ga ne moremo prešteti):

$$m \;\longleftrightarrow\; n \;\longleftrightarrow\; N$$

## Rešeni primeri

### Primer 1: molska masa in množina

Koliko molov je v $36\,\mathrm{g}$ vode? ($A_r(\mathrm{H}) = 1$, $A_r(\mathrm{O}) = 16$)

1. Najprej potrebujemo molsko maso, ker je ta »most« med maso in množino: $M(\mathrm{H_2O}) = 2 \cdot 1 + 16 = 18\,\mathrm{g/mol}$.
2. Iščemo množino, zato uporabimo $n = \dfrac{m}{M}$.
3. Vstavimo: $n = \dfrac{36\,\mathrm{g}}{18\,\mathrm{g/mol}} = 2\,\mathrm{mol}$.
4. Preverimo enoto: gram deljen z gram na mol da mol. ✓

### Primer 2: masa iz množine

Kolikšna je masa $0{,}5\,\mathrm{mol}$ ogljikovega dioksida $\mathrm{CO_2}$? ($A_r(\mathrm{C}) = 12$, $A_r(\mathrm{O}) = 16$)

1. Molska masa: $M(\mathrm{CO_2}) = 12 + 2 \cdot 16 = 44\,\mathrm{g/mol}$. Pri kisiku množimo z 2, ker sta v formuli dva atoma.
2. Iščemo maso, zato $m = n \cdot M$.
3. Vstavimo: $m = 0{,}5\,\mathrm{mol} \cdot 44\,\mathrm{g/mol} = 22\,\mathrm{g}$.
4. Smiselnost: pol mola je polovica molske mase, torej polovica od $44\,\mathrm{g}$. ✓

### Primer 3: število delcev (težji)

Koliko molekul vode in koliko atomov vodika je v $9\,\mathrm{g}$ vode? ($M(\mathrm{H_2O}) = 18\,\mathrm{g/mol}$)

1. **Množina vode:** $n = \dfrac{m}{M} = \dfrac{9\,\mathrm{g}}{18\,\mathrm{g/mol}} = 0{,}5\,\mathrm{mol}$.
2. **Število molekul:** $N = n \cdot N_A = 0{,}5\,\mathrm{mol} \cdot 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}} = 3{,}011 \cdot 10^{23}$ molekul.
3. **Atomi vodika:** vsaka molekula $\mathrm{H_2O}$ vsebuje 2 atoma vodika, zato je atomov dvakrat toliko: $2 \cdot 3{,}011 \cdot 10^{23} = 6{,}022 \cdot 10^{23}$ atomov vodika.
4. **Preverimo:** $0{,}5\,\mathrm{mol}$ vode vsebuje $1\,\mathrm{mol}$ atomov vodika, kar je natanko $6{,}022 \cdot 10^{23}$ atomov. ✓

## Pogoste napake

- **Mešanje mase in množine.** Masa $m$ je v gramih, množina $n$ v molih. $36\,\mathrm{g}$ vode ni $36\,\mathrm{mol}$ vode.
- **Pozabljeno upoštevanje indeksov v formuli.** Pri $\mathrm{CO_2}$ je $M = 12 + 2 \cdot 16$, ne $12 + 16$.
- **Obrnjena formula.** $n = m/M$, ne $n = M/m$. Preveri enote: rezultat mora biti v molih.
- **Mol delcev ni mol atomov.** En mol molekul $\mathrm{H_2O}$ vsebuje $1\,\mathrm{mol}$ molekul, a $2\,\mathrm{mol}$ atomov vodika in $1\,\mathrm{mol}$ atomov kisika.
- **Napačno računanje s potencami.** Pri $n \cdot N_A$ pomnožiš števili ($0{,}5 \cdot 6{,}022$) in potenco $10^{23}$ pustiš.

## Povzetek

- Množina snovi $n$ pove, koliko delcev je v vzorcu; enota je mol.
- En mol vsebuje $N_A = 6{,}022 \cdot 10^{23}$ delcev.
- $N = n \cdot N_A$.
- Molska masa $M = m/n$ ima enoto $\mathrm{g/mol}$ in je številsko enaka relativni atomski ali molekulski masi.
- $n = \dfrac{m}{M}$ povezuje maso z množino, $n = \dfrac{N}{N_A}$ pa število delcev z množino.
- Pri računu molske mase upoštevaj vse atome v formuli.

## Drugače: Na sliki

Predstavljaj si tri »vrečke«, ki jih povezujejo puščice:

- **masa** $m$ (v gramih), ki jo stehtaš,
- **množina** $n$ (v molih), ki je v sredini,
- **število delcev** $N$, ki ga ne vidiš.

Množina je vedno v sredini. Od mase do množine greš z deljenjem z $M$, od množine do števila delcev z množenjem z $N_A$. Nazaj greš z obratnimi operacijami: z $n$ množiš z $M$ (dobiš $m$) ali deliš z $N_A$ (dobiš $n$ iz $N$).

Če hočeš iz mase priti do števila delcev, vedno narediš dva koraka: $m \to n \to N$. Neposredne bližnjice ni.

## Drugače: Iz vsakdanjega življenja

Pomisli na ducat jajc. Ne rečeš »dvanajst jajc«, ampak »ducat«. Ducat je samo ime za število 12. Mol je ime za število $6{,}022 \cdot 10^{23}$. Ker so atomi in molekule tako majhni, potrebujemo »ducat«, ki je neizmerno večji.

Še ena primerjava: v trgovini ne šteješ posameznih zrn riža, ampak kupiš kilogram. Če veš, koliko tehta eno zrno, iz mase izračunaš število zrn. Prav tako kemik iz mase snovi in molske mase izračuna množino delcev.

Primer: žlička kuhinjske soli ($\mathrm{NaCl}$), ki tehta približno $6\,\mathrm{g}$, vsebuje približno $0{,}1\,\mathrm{mol}$ formulskih enot, saj je $M(\mathrm{NaCl}) \approx 58{,}5\,\mathrm{g/mol}$ in $6/58{,}5 \approx 0{,}1$.

## Drugače: Korak za korakom s številkami

Recept za nalogo: *Koliko atomov je v $12\,\mathrm{g}$ ogljika?* ($A_r(\mathrm{C}) = 12$)

| Korak | Kaj naredimo | Račun |
|---|---|---|
| 1 | Zapišemo, kaj je dano in kaj iščemo | $m = 12\,\mathrm{g}$, iščemo $N$ |
| 2 | Molska masa | $M(\mathrm{C}) = 12\,\mathrm{g/mol}$ |
| 3 | Množina | $n = \dfrac{12\,\mathrm{g}}{12\,\mathrm{g/mol}} = 1\,\mathrm{mol}$ |
| 4 | Število delcev | $N = 1\,\mathrm{mol} \cdot 6{,}022 \cdot 10^{23}\,\mathrm{mol^{-1}}$ |
| 5 | Rezultat | $N = 6{,}022 \cdot 10^{23}$ atomov |
| 6 | Preverimo smiselnost | masa je enaka številu v periodnem sistemu, torej je to točno 1 mol ✓ |

Za drugo primerjavo: $24\,\mathrm{g}$ ogljika je $2\,\mathrm{mol}$, torej $1{,}2044 \cdot 10^{24}$ atomov.

## Drugače: Bolj natančno

Mol je enota SI za množino snovi. Pri njeni definiciji se izhaja iz dogovora, da ima en mol natanko toliko delcev, kot jih pove Avogadrova konstanta; zato je $N_A$ konstanta z enoto $\mathrm{mol^{-1}}$ in ni brezdimenzijsko število.

Zakaj je molska masa v $\mathrm{g/mol}$ številsko enaka relativni atomski masi? Relativna atomska masa pove, kolikokrat je masa atoma večja od določene atomske enote mase. Ker mol vsebuje $N_A$ delcev, je masa enega mola enaka masi enega atoma, pomnoženi z $N_A$. Ta množitelj je izbran tako, da dobimo vrednost v gramih, ki je enaka relativni atomski masi. Zato npr. za ogljik ($A_r = 12$) velja $M = 12\,\mathrm{g/mol}$.

Dimenzijski preizkus formul:

$$n = \frac{m}{M}: \quad \frac{\mathrm{g}}{\mathrm{g/mol}} = \mathrm{mol}, \qquad N = n \cdot N_A: \quad \mathrm{mol} \cdot \mathrm{mol^{-1}} = 1$$

Število delcev je čisto število, zato se enote ujemajo.

## Preveri se

? Kolikšna je molska masa $\mathrm{CO_2}$? ($A_r(\mathrm{C}) = 12$, $A_r(\mathrm{O}) = 16$)
- $28\,\mathrm{g/mol}$
- $60\,\mathrm{g/mol}$
+ $44\,\mathrm{g/mol}$
- $56\,\mathrm{g/mol}$
> $M(\mathrm{CO_2}) = 12 + 2 \cdot 16 = 44\,\mathrm{g/mol}$. Odgovor $28$ pozabi en kisikov atom, $60$ in $56$ pa ne ustrezata seštevku.

? Koliko molov je v $20\,\mathrm{g}$ natrijevega hidroksida $\mathrm{NaOH}$? ($M(\mathrm{NaOH}) = 40\,\mathrm{g/mol}$)
- $2\,\mathrm{mol}$
+ $0{,}5\,\mathrm{mol}$
- $800\,\mathrm{mol}$
> $n = m/M = 20\,\mathrm{g} / 40\,\mathrm{g/mol} = 0{,}5\,\mathrm{mol}$. Odgovor $2$ dobiš, če obrneš ulomek, $800$ pa, če masi množiš.

? Koliko molekul je v $2\,\mathrm{mol}$ snovi?
- $3{,}011 \cdot 10^{23}$
- $6{,}022 \cdot 10^{23}$
+ $1{,}2044 \cdot 10^{24}$
> $N = n \cdot N_A = 2 \cdot 6{,}022 \cdot 10^{23} = 12{,}044 \cdot 10^{23} = 1{,}2044 \cdot 10^{24}$. Odgovor $6{,}022 \cdot 10^{23}$ je število za $1\,\mathrm{mol}$, odgovor $3{,}011 \cdot 10^{23}$ pa za $0{,}5\,\mathrm{mol}$.
