---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih lekcij že veš, da sila, ki premakne telo po poti, opravi **delo** ($A = F \cdot s$), in da se delo meri v joulih ($\mathrm{J}$). Veš tudi, da je teža telesa sila, ki ga vleče proti tlom: $F_g = m \cdot g$, pri čemer je $g \approx 10\,\frac{\text{N}}{\text{kg}}$.

Energija je zmožnost telesa, da opravi delo. Kadar telo miruje na vrhu klanca, ima »zalogo« energije zaradi višine. Ko se spusti, ta zaloga postane gibanje. Tako delujejo tobogan, gugalnica, rolkarski park, hidroelektrarna in tudi kolo, ki se spušča po klancu. Če znaš izračunati kinetično in potencialno energijo, lahko brez merjenja napoveš, kako hitro bo telo na dnu klanca ali kako visoko bo prišlo.

## Razlaga

**1. Kinetična energija.** To je energija, ki jo ima telo zaradi **gibanja**. Odvisna je od mase in hitrosti:

$$W_k = \frac{m v^2}{2}$$

Masa $m$ je v $\mathrm{kg}$, hitrost $v$ v $\frac{\mathrm{m}}{\mathrm{s}}$, energija pa v $\mathrm{J}$. Telo, ki miruje ($v = 0$), nima kinetične energije.

Pomembno: hitrost je **kvadrirana**. Če se hitrost podvoji, se kinetična energija početveri.

**2. Potencialna (težnostna) energija.** To je energija, ki jo ima telo zaradi **višine** nad izbrano ničelno ravnjo (npr. tlemi):

$$W_p = m \cdot g \cdot h$$

Višina $h$ je v $\mathrm{m}$. Višje ko je telo, več potencialne energije ima. Ničelno raven izberemo sami, običajno tla ali najnižjo točko gibanja.

**3. Zakaj ta formula?** Da telo z maso $m$ dvigneš za višino $h$, moraš premagati težo $m g$ po poti $h$. Opravljeno delo je $A = m g \cdot h$. To delo se »shrani« kot potencialna energija.

**4. Pretvarjanje energije.** Ko telo prosto pada ali drsi po gladkem klancu, se potencialna energija zmanjšuje, kinetična pa povečuje. Če lahko trenje in upor zanemarimo, njuna vsota ostane enaka:

$$W_k + W_p = \text{konstanta}$$

To je **izrek o ohranitvi mehanske energije**. Energija se ne izgubi, samo se pretvarja iz ene oblike v drugo.

**5. Kaj pa trenje?** Pri trenju se del mehanske energije pretvori v notranjo energijo (telo in podlaga se segrejeta). Mehanska energija se zato zmanjša, celotna energija pa se še vedno ohrani.

**6. Uporaba pri nalogah.** Ko telo spustimo z višine $h$ iz mirovanja, je na vrhu $W_k = 0$, spodaj pa $W_p = 0$. Vsa potencialna energija se pretvori v kinetično:

$$m g h = \frac{m v^2}{2}$$

Masa se pokrajša, zato je hitrost na dnu $v = \sqrt{2 g h}$ in ni odvisna od mase.

V interaktivni simulaciji spodaj izberi skejterja in opazuj stolpčni prikaz energij. Ko skejter drsi, se stolpca kinetične in potencialne energije spreminjata, skupna energija pa ostaja enaka (če je trenje izklopljeno).

## Rešeni primeri

### Primer 1: kinetična energija

Kolesar z maso (skupaj s kolesom) $80\,\text{kg}$ vozi s hitrostjo $5\,\frac{\text{m}}{\text{s}}$. Kolikšna je njegova kinetična energija?

**Podatki:** $m = 80\,\text{kg}$ (kolesar skupaj s kolesom), $v = 5\,\frac{\text{m}}{\text{s}}$
**Iščemo:** kinetično energijo $W_k$

:::formula
$W_k = \dfrac{m v^2}{2}$
:::

**Rešitev:**

1. Iščemo kinetično energijo, zato uporabimo $W_k = \dfrac{m v^2}{2}$.
2. Najprej kvadriramo hitrost (kvadrirana je samo hitrost, ne masa): $v^2 = 5^2 = 25$.
3. Vstavimo: $W_k = \dfrac{80 \cdot 25}{2} = \dfrac{2000}{2} = 1000\,\text{J}$.
4. Odgovor: kinetična energija je $1000\,\text{J}$ ($1\,\text{kJ}$).

### Primer 2: potencialna energija

Opeka z maso $2\,\text{kg}$ leži na odru, ki je $3\,\text{m}$ nad tlemi. Kolikšna je njena potencialna energija glede na tla? Vzemi $g = 10\,\frac{\text{N}}{\text{kg}}$.

**Podatki:** $m = 2\,\text{kg}$, $h = 3\,\text{m}$ (tla so ničelna raven), $g = 10\,\frac{\text{N}}{\text{kg}}$
**Iščemo:** potencialno energijo $W_p$

:::formula
$W_p = m g h$
:::

**Rešitev:**

1. Uporabimo $W_p = m g h$.
2. Vstavimo: $W_p = 2 \cdot 10 \cdot 3 = 60\,\text{J}$.
3. Preverimo enote: $\text{kg} \cdot \frac{\text{N}}{\text{kg}} \cdot \text{m} = \text{N} \cdot \text{m} = \text{J}$. ✓
4. Odgovor: $60\,\text{J}$. Če bi opeka padla na tla, bi se ta energija pretvorila v kinetično (in nekaj v toploto ter zvok ob trku).

### Primer 3: pretvarjanje energije

Otrok z maso $30\,\text{kg}$ se spusti po toboganu z višine $2\,\text{m}$ iz mirovanja. Trenje zanemarimo. Kolikšna je njegova hitrost na dnu? ($g = 10\,\frac{\text{N}}{\text{kg}}$)

**Podatki:** $m = 30\,\text{kg}$, $h = 2\,\text{m}$, začetna hitrost $v_0 = 0$ (iz mirovanja), trenje zanemarimo, $g = 10\,\frac{\text{N}}{\text{kg}}$
**Iščemo:** hitrost $v$ na dnu tobogana

:::formula
Ohranitev mehanske energije: $m g h = \dfrac{m v^2}{2}$, torej $v = \sqrt{2 g h}$
:::

**Rešitev:**

1. **Energija na vrhu.** Miruje, zato je $W_k = 0$. $W_p = 30 \cdot 10 \cdot 2 = 600\,\text{J}$.
2. **Energija na dnu.** Višina je $0$, zato je $W_p = 0$. Zaradi ohranitve mehanske energije je $W_k = 600\,\text{J}$.
3. **Hitrost.** Iz $W_k = \dfrac{m v^2}{2}$ sledi $v^2 = \dfrac{2 W_k}{m} = \dfrac{2 \cdot 600}{30} = \dfrac{1200}{30} = 40$.
4. Korenimo, ker iščemo $v$, ne $v^2$: $v = \sqrt{40} \approx 6{,}3\,\frac{\text{m}}{\text{s}}$.
5. **Preverimo s formulo** $v = \sqrt{2 g h} = \sqrt{2 \cdot 10 \cdot 2} = \sqrt{40}$. ✓ Masa res ni potrebna.
6. Odgovor: hitrost otroka na dnu tobogana je približno $6{,}3\,\frac{\text{m}}{\text{s}}$.

## Pogoste napake

- **Pozabljeno kvadriranje hitrosti.** $W_k = \frac{m v^2}{2}$, ne $\frac{m v}{2}$. Pri $m = 80\,\text{kg}$ in $v = 5\,\frac{\text{m}}{\text{s}}$ bi napačno dobil $200\,\text{J}$ namesto $1000\,\text{J}$.
- **Kvadriranje produkta $m v$.** Kvadrira se samo $v$, ne $m \cdot v$.
- **Pozabljeno deljenje z 2.** Brez delitve z $2$ je kinetična energija dvakrat prevelika.
- **Napačne enote.** Masa mora biti v $\mathrm{kg}$ (ne v $\mathrm{g}$), višina v $\mathrm{m}$ (ne v $\mathrm{cm}$), hitrost v $\frac{\mathrm{m}}{\mathrm{s}}$ (ne v $\frac{\mathrm{km}}{\mathrm{h}}$). Najprej pretvori.
- **Potencialna energija brez ničelne ravni.** Višina se vedno meri od izbrane ničelne ravni. Če jo spremeniš, se spremeni $W_p$, a razlika energij ostane.
- **Ohranitev energije brez premisleka.** Vsota $W_k + W_p$ je konstantna le, če trenje in upor zanemarimo. Pri trenju se mehanska energija zmanjša.

## Povzetek

- Energija je zmožnost telesa, da opravi delo; merimo jo v joulih ($\mathrm{J}$).
- Kinetična energija (zaradi gibanja): $W_k = \dfrac{m v^2}{2}$.
- Potencialna (težnostna) energija (zaradi višine): $W_p = m g h$.
- Pri prostem padu ali drsenju brez trenja se $W_p$ pretvarja v $W_k$ in obratno, vsota ostane enaka.
- Hitrost telesa, spuščenega z višine $h$ iz mirovanja: $v = \sqrt{2 g h}$, neodvisna od mase.
- Pri trenju se del mehanske energije pretvori v notranjo energijo.

## Drugače: Na sliki

Predstavljaj si skejterja v rampi v obliki črke U. Na levem robu, ko za trenutek miruje, je na največji višini: stolpec potencialne energije je visok, stolpec kinetične je prazen.

Ko drsi navzdol, potencialni stolpec pada, kinetični raste. Na dnu je potencialni stolpec skoraj prazen, kinetični pa je najvišji, saj je skejter tam najhitrejši. Potem se na drugi strani vse zgodi v obratnem vrstnem redu.

Če narišeš še tretji stolpec, vsoto obeh, bo ta ves čas **enako visok**. To je ohranitev mehanske energije, narisana kot slika. V simulaciji vklopi prikaz stolpcev in opazuj to. Nato dodaj trenje: vsota se bo začela zmanjševati, ker se energija pretvarja v toploto.

## Drugače: Iz vsakdanjega življenja

**Gugalnica.** Na najvišji točki se za hip ustavi: tam ima največ potencialne in nič kinetične energije. Pri dnu je najhitrejša: tam ima največ kinetične energije. Brez dodatnega odriva se zaradi upora zraka vsako nihanje nekoliko zmanjša, ker se del energije pretvori v toploto.

**Avtomobil in zavorna pot.** Če se hitrost podvoji, se kinetična energija početveri. Zato je pri dvakrat večji hitrosti zavorna pot približno štirikrat daljša. Pri $30\,\frac{\text{km}}{\text{h}}$ je trk precej manj nevaren kot pri $60\,\frac{\text{km}}{\text{h}}$, saj ima vozilo pri $60\,\frac{\text{km}}{\text{h}}$ štirikrat več energije.

**Hidroelektrarna.** Voda v zajezitvi ima potencialno energijo zaradi višine. Ko pada skozi cevi, se ta pretvori v kinetično, ta pa zavrti turbino in v generatorju nastane električna energija.

## Drugače: Korak za korakom s številkami

Primer: žogica z maso $0{,}5\,\text{kg}$ pade iz višine $20\,\text{m}$. Kolikšna je njena hitrost tik pred tlemi? ($g = 10\,\frac{\text{N}}{\text{kg}}$, upor zraka zanemarimo.)

| Položaj | Višina $h$ | $W_p = m g h$ | $W_k$ | Vsota |
|---|---|---|---|---|
| Na vrhu | $20\,\text{m}$ | $0{,}5 \cdot 10 \cdot 20 = 100\,\text{J}$ | $0\,\text{J}$ | $100\,\text{J}$ |
| Na polovici | $10\,\text{m}$ | $0{,}5 \cdot 10 \cdot 10 = 50\,\text{J}$ | $50\,\text{J}$ | $100\,\text{J}$ |
| Tik nad tlemi | $0\,\text{m}$ | $0\,\text{J}$ | $100\,\text{J}$ | $100\,\text{J}$ |

Zdaj iz $W_k = 100\,\text{J}$ izračunamo hitrost:

1. $100 = \dfrac{0{,}5 \cdot v^2}{2} = 0{,}25 \cdot v^2$.
2. $v^2 = \dfrac{100}{0{,}25} = 400$.
3. $v = \sqrt{400} = 20\,\frac{\text{m}}{\text{s}}$.

Preverimo: $\sqrt{2 \cdot 10 \cdot 20} = \sqrt{400} = 20$. ✓

## Drugače: Bolj natančno

**Izpeljava kinetične energije.** Telo z maso $m$ pospešimo iz mirovanja s stalno silo $F$ na poti $s$. Opravljeno delo je $A = F s$. Po drugem Newtonovem zakonu je $F = m a$. Pri enakomerno pospešenem gibanju iz mirovanja velja $s = \dfrac{a t^2}{2}$ in $v = a t$. Zato

$$A = m a \cdot \frac{a t^2}{2} = \frac{m (a t)^2}{2} = \frac{m v^2}{2}.$$

Opravljeno delo se torej shrani kot kinetična energija.

**Izpeljava ohranitve.** Pri prostem padu z višine $h_1$ na $h_2$ je hitrost na koncu $v^2 = 2 g (h_1 - h_2)$ (enakomerno pospešeno gibanje s pospeškom $g$). Če to pomnožimo z $\dfrac{m}{2}$, dobimo $\dfrac{m v^2}{2} = m g h_1 - m g h_2$, torej

$$m g h_2 + \frac{m v^2}{2} = m g h_1.$$

Vsota $W_p + W_k$ je na koncu enaka vsoti na začetku.

**Opomba o enotah.** $1\,\text{J} = 1\,\text{N} \cdot \text{m} = 1\,\frac{\text{kg} \cdot \text{m}^2}{\text{s}^2}$. Zato je enota $\text{kg} \cdot \frac{\text{m}^2}{\text{s}^2}$ pri $\frac{m v^2}{2}$ res joul.

## Preveri se

? Kolikšna je kinetična energija telesa z maso $4\,\text{kg}$, ki se giblje s hitrostjo $3\,\frac{\text{m}}{\text{s}}$?
- $6\,\text{J}$
- $36\,\text{J}$
+ $18\,\text{J}$
- $12\,\text{J}$
> $W_k = \dfrac{m v^2}{2} = \dfrac{4 \cdot 9}{2} = 18\,\text{J}$. Odgovor $6\,\text{J}$ dobiš, če hitrosti ne kvadriraš, $36\,\text{J}$, če pozabiš deliti z $2$.

? Telo z maso $5\,\text{kg}$ dvignemo na višino $4\,\text{m}$. Kolikšna je njegova potencialna energija glede na izhodišče? ($g = 10\,\frac{\text{N}}{\text{kg}}$)
- $20\,\text{J}$
- $40\,\text{J}$
+ $200\,\text{J}$
> $W_p = m g h = 5 \cdot 10 \cdot 4 = 200\,\text{J}$. Odgovora $20\,\text{J}$ in $40\,\text{J}$ dobiš, če izpustiš kakšen faktor v produktu.

? Žogico spustimo iz višine $5\,\text{m}$ in upor zraka zanemarimo. Kaj velja tik pred tlemi?
- Žogica nima več nobene energije.
- Njena potencialna energija je največja.
+ Vsa začetna potencialna energija se je pretvorila v kinetično.
- Kinetična energija je enaka nič.
> Zaradi ohranitve mehanske energije se brez trenja in upora vsa potencialna energija z vrha pretvori v kinetično. Tik pred tlemi je višina skoraj nič, zato je $W_p$ skoraj nič, žogica pa je najhitrejša.
