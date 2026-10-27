---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz prejšnjih razredov že znaš izračunati ploščino kroga ($S = \pi r^2$), obseg kroga ($o = 2\pi r$), Pitagorov izrek in prostornino valja ($V = \pi r^2 v$). Vse to potrebuješ tudi pri stožcu.

Stožce srečaš vsak dan: lijak, sladoledni kornet, prometni stožec, strešna kapa stolpiča, vrh svinčnika. Pogosto nas zanima, koliko stožec drži (prostornina) ali koliko materiala potrebujemo za njegovo površino (npr. za izdelavo lijaka ali kornetov). V tej lekciji se naučiš oboje in spoznaš, da je stožec tudi **vrtenina**, torej telo, ki nastane z vrtenjem ravninskega lika.

## Razlaga

**1. Kaj je stožec.** Pokončni stožec ima:

- **osnovno ploskev**: krog s polmerom $r$,
- **plašč**: ukrivljeno ploskev, ki se zoži v vrh,
- **vrh** stožca,
- **višino** $v$: razdaljo od vrha do središča osnovne ploskve (pravokotno na osnovno ploskev),
- **stranico** $s$: razdaljo od vrha do roba osnovne ploskve, ki leži na plašču.

**2. Pravokotni trikotnik v stožcu.** Višina $v$, polmer $r$ in stranica $s$ tvorijo pravokotni trikotnik. Pravi kot je med $r$ in $v$, stranica $s$ je hipotenuza. Zato po Pitagorovem izreku velja:

$$s^2 = r^2 + v^2 \qquad \Rightarrow \qquad s = \sqrt{r^2 + v^2}$$

**3. Stožec kot vrtenina.** Če pravokotni trikotnik zavrtimo za polni krog ($360^\circ$) okoli ene od katet, dobimo pokončni stožec. Kateta, okoli katere vrtimo, je višina $v$. Druga kateta opiše osnovno ploskev, zato je ta kateta polmer $r$. Hipotenuza opiše plašč, zato je to stranica $s$.

**4. Prostornina.** Stožec ima natanko tretjino prostornine valja z enako osnovno ploskvijo in enako višino:

$$V = \frac{\pi r^2 \cdot v}{3}$$

To lahko preveriš tudi s poskusom: če stožčasto posodo trikrat napolniš z vodo in jo preliješ v valj z enakim polmerom in enako višino, se valj natanko napolni.

**5. Površina.** Površina je vsota ploščine osnovne ploskve in ploščine plašča:

$$P = \pi r^2 + \pi r s$$

Ploščina osnovne ploskve je ploščina kroga, $\pi r^2$. Ploščina plašča je $\pi r s$. Zakaj, razložimo v razdelku »Drugače: Bolj natančno«.

**6. Enote.** Dolžine merimo v $\text{cm}$, $\text{m}$ …, površine v $\text{cm}^2$, $\text{m}^2$ …, prostornine v $\text{cm}^3$, $\text{m}^3$ … Pri računu moraš imeti vse dolžine v isti enoti.

## Rešeni primeri

### Primer 1: prostornina in površina

Stožec ima polmer osnovne ploskve $r = 3\,\text{cm}$ in višino $v = 4\,\text{cm}$. Izračunaj prostornino in površino.

1. Za površino potrebujemo stranico $s$. Izračunamo jo s Pitagorovim izrekom: $s = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5\,\text{cm}$.
2. Prostornina: $V = \dfrac{\pi \cdot 3^2 \cdot 4}{3} = \dfrac{36\pi}{3} = 12\pi \approx 37{,}70\,\text{cm}^3$.
3. Osnovna ploskev: $\pi r^2 = 9\pi\,\text{cm}^2$.
4. Plašč: $\pi r s = \pi \cdot 3 \cdot 5 = 15\pi\,\text{cm}^2$.
5. Površina: $P = 9\pi + 15\pi = 24\pi \approx 75{,}40\,\text{cm}^2$.

Pazi: v formulo za prostornino vstavimo višino $v$, v formulo za plašč pa stranico $s$.

### Primer 2: iz stranice izračunamo višino

Stožec ima polmer $r = 5\,\text{cm}$ in stranico $s = 13\,\text{cm}$. Izračunaj višino, površino in prostornino.

1. Višino dobimo iz $s^2 = r^2 + v^2$, torej $v^2 = s^2 - r^2$. Iščemo kateto, zato odštevamo.
2. $v^2 = 13^2 - 5^2 = 169 - 25 = 144$, torej $v = 12\,\text{cm}$.
3. Plašč: $\pi r s = \pi \cdot 5 \cdot 13 = 65\pi\,\text{cm}^2$.
4. Osnovna ploskev: $\pi \cdot 5^2 = 25\pi\,\text{cm}^2$.
5. Površina: $P = 25\pi + 65\pi = 90\pi \approx 282{,}74\,\text{cm}^2$.
6. Prostornina: $V = \dfrac{\pi \cdot 25 \cdot 12}{3} = \dfrac{300\pi}{3} = 100\pi \approx 314{,}16\,\text{cm}^3$.

### Primer 3 (težji): vrtenina

Pravokotni trikotnik s katetama $6\,\text{cm}$ in $8\,\text{cm}$ zavrtimo okoli krajše in nato okoli daljše katete. V obeh primerih dobimo stožec. Primerjaj njuni prostornini.

1. Hipotenuza je $\sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10\,\text{cm}$. To je v obeh primerih stranica $s$.
2. **Vrtenje okoli krajše katete ($6\,\text{cm}$).** Ta kateta je višina, torej $v = 6\,\text{cm}$, druga kateta je polmer, $r = 8\,\text{cm}$.
   $V_1 = \dfrac{\pi \cdot 8^2 \cdot 6}{3} = \dfrac{384\pi}{3} = 128\pi \approx 402{,}12\,\text{cm}^3$.
3. **Vrtenje okoli daljše katete ($8\,\text{cm}$).** Zdaj je $v = 8\,\text{cm}$ in $r = 6\,\text{cm}$.
   $V_2 = \dfrac{\pi \cdot 6^2 \cdot 8}{3} = \dfrac{288\pi}{3} = 96\pi \approx 301{,}59\,\text{cm}^3$.
4. **Zaključek.** $V_1 > V_2$. Isti trikotnik da dva različna stožca. Večjo prostornino dobimo, če vrtimo okoli krajše katete, ker polmer v formuli nastopa v kvadratu in zato vpliva bolj kot višina.

## Pogoste napake

- **Zamenjava $v$ in $s$.** V formulo za prostornino spada višina $v$, v formulo za plašč pa stranica $s$. Višina je pravokotna na osnovno ploskev, stranica poteka po plašču.
- **Pozabljena tretjina.** $\pi r^2 v$ je prostornina valja. Stožec ima tretjino tega.
- **Napačno izračunana stranica.** Če sta znana $r$ in $v$, je $s = \sqrt{r^2 + v^2}$. Rezultat $s = r + v$ je napačen.
- **Pozabljena osnovna ploskev.** Površina stožca je plašč *in* osnovna ploskev. Samo $\pi r s$ je le plašč.
- **Različne enote.** Če je $r$ v $\text{cm}$ in $v$ v $\text{m}$, najprej pretvori v isto enoto.
- **Odštevanje pri stranici.** Pri $s$ kvadrata seštevamo. Odštevamo samo, ko iščemo $v$ ali $r$.

## Povzetek

- Pokončni stožec ima polmer osnovne ploskve $r$, višino $v$ in stranico $s$.
- Velja $s = \sqrt{r^2 + v^2}$.
- Stožec nastane z vrtenjem pravokotnega trikotnika okoli ene od katet.
- Prostornina: $V = \dfrac{\pi r^2 v}{3}$.
- Plašč: $\pi r s$. Površina: $P = \pi r^2 + \pi r s$.
- Pri nalogah najprej preveri, katere količine so znane, po potrebi izračunaj $s$ ali $v$ s Pitagorovim izrekom in šele nato uporabi formulo.

## Drugače: Na sliki

Predstavljaj si pravokotni trikotnik, ki stoji na eni kateti. Navpična kateta je višina $v$, vodoravna kateta je polmer $r$, poševna stranica je $s$.

Zdaj trikotnik hitro zavrtimo okoli navpične katete. Vodoravna kateta opiše krog, to je osnovna ploskev. Poševna stranica $s$ opiše ukrivljeno ploskev, to je plašč. Vrh stožca je točka, kjer se poševna stranica dotika osi vrtenja.

Plašč lahko tudi razgrneš. Če stožčasti kornet razrežeš po stranici in ga položiš na mizo, dobiš **krožni izsek**. Njegov polmer je $s$, dolžina njegovega loka pa je enaka obsegu osnovne ploskve, $2\pi r$.

## Drugače: Iz vsakdanjega življenja

Sladoledni kornet ima obliko stožca. Recimo, da ima $r = 3\,\text{cm}$ in $v = 10\,\text{cm}$. Koliko sladoleda gre vanj, če ga napolniš do roba?

$$V = \frac{\pi \cdot 3^2 \cdot 10}{3} = \frac{90\pi}{3} = 30\pi \approx 94{,}25\,\text{cm}^3$$

Ker je $1\,\text{cm}^3 = 1\,\text{ml}$, gre v kornet približno $94\,\text{ml}$.

Podobno velja za lijak: če poznamo njegovo prostornino, vemo, koliko tekočine gre vanj. Če pa ga izdelujemo iz pločevine, nas zanima plašč $\pi r s$, saj lijak nima osnovne ploskve, kjer bi bil pokrit. Zato je v praksi pomembno vedeti, katero količino (prostornino, plašč ali celotno površino) v nalogi res iščemo.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo:

1. Zapiši, kaj je znano ($r$, $v$ ali $s$) in kaj iščeš.
2. Če manjka tretja količina, jo izračunaj s Pitagorovim izrekom.
3. Izberi formulo: prostornina, plašč ali površina.
4. Vstavi in izračunaj. Najprej račun z $\pi$, šele nato približek.
5. Preveri enote in smiselnost.

Primer: $r = 4\,\text{cm}$, $v = 3\,\text{cm}$.

| Korak | Račun | Rezultat |
|---|---|---|
| Stranica | $s = \sqrt{4^2 + 3^2} = \sqrt{25}$ | $5\,\text{cm}$ |
| Prostornina | $V = \dfrac{\pi \cdot 16 \cdot 3}{3}$ | $16\pi \approx 50{,}27\,\text{cm}^3$ |
| Osnovna ploskev | $\pi \cdot 4^2$ | $16\pi\,\text{cm}^2$ |
| Plašč | $\pi \cdot 4 \cdot 5$ | $20\pi\,\text{cm}^2$ |
| Površina | $16\pi + 20\pi$ | $36\pi \approx 113{,}10\,\text{cm}^2$ |

Preverjanje: $s = 5$ je večja od $r = 4$ in od $v = 3$, kar mora veljati, ker je $s$ hipotenuza.

## Drugače: Bolj natančno

**Zakaj je plašč $\pi r s$?** Razgrnjen plašč je krožni izsek s polmerom $s$. Cel krog s polmerom $s$ ima ploščino $\pi s^2$ in obseg $2\pi s$. Dolžina loka izseka je enaka obsegu osnovne ploskve, $2\pi r$. Izsek je torej del celega kroga:

$$\frac{2\pi r}{2\pi s} = \frac{r}{s}$$

Njegova ploščina je prav ta del ploščine celega kroga:

$$\frac{r}{s} \cdot \pi s^2 = \pi r s$$

Središčni kot izseka je $\alpha = 360^\circ \cdot \dfrac{r}{s}$. Pri $r = 3\,\text{cm}$ in $s = 5\,\text{cm}$ dobimo $\alpha = 360^\circ \cdot \dfrac{3}{5} = 216^\circ$.

**Zakaj je v formuli $\dfrac{1}{3}$?** Primerjava s poskusom prelivanja pokaže, da stožec drži tretjino valja z enako osnovno ploskvijo in višino. Strogi dokaz tega v 9. razredu še ne obravnavamo, formulo pa lahko v praksi vedno preveriš s prelivanjem.

## Preveri se

? Stožec ima $r = 6\,\text{cm}$ in $v = 8\,\text{cm}$. Kolikšna je njegova prostornina?
- $288\pi\,\text{cm}^3$
- $48\pi\,\text{cm}^3$
+ $96\pi\,\text{cm}^3$
- $60\pi\,\text{cm}^3$
> $V = \dfrac{\pi \cdot 6^2 \cdot 8}{3} = \dfrac{288\pi}{3} = 96\pi$. Odgovor $288\pi$ je prostornina valja, ker pozabimo na tretjino.

? Stožec ima $r = 5\,\text{cm}$ in $s = 13\,\text{cm}$. Kolikšna je ploščina plašča?
- $130\pi\,\text{cm}^2$
- $60\pi\,\text{cm}^2$
+ $65\pi\,\text{cm}^2$
- $90\pi\,\text{cm}^2$
> Plašč je $\pi r s = \pi \cdot 5 \cdot 13 = 65\pi$. Odgovor $90\pi$ je cela površina, saj vsebuje tudi osnovno ploskev $25\pi$.

? Katero telo nastane, če pravokotni trikotnik zavrtimo za polni krog okoli ene od njegovih katet?
+ stožec
- valj
- krogla
- kocka
> Kateta, okoli katere vrtimo, je višina, druga kateta opiše osnovno ploskev, hipotenuza pa plašč. Valj dobimo z vrtenjem pravokotnika, kroglo z vrtenjem polkroga.
