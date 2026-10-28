---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih razredov že znaš izračunati obseg in ploščino pravokotnika ($o = 2a + 2b$, $S = a \cdot b$). V 7. razredu si spoznal(a) trikotnik, njegove stranice, kote in višine.

Obseg in ploščina trikotnika se uporabljata povsod: koliko ograje potrebuješ za trikotno vrtno gredo, koliko barve za trikotno jadro, koliko pločevine za trikotni opozorilni znak. Z enim obrazcem boš lahko to izračunal(a) iz le nekaj izmerjenih podatkov.

## Razlaga

**1. Obseg trikotnika.** Obseg je dolžina poti okoli lika, torej vsota dolžin vseh treh stranic:

$$o = a + b + c$$

Obseg merimo v enotah dolžine ($\text{mm}$, $\text{cm}$, $\text{m}$, ...).

**2. Višina trikotnika.** Višina na stranico je daljica, ki gre iz nasprotnega oglišča pravokotno na to stranico (ali na njen podaljšek). Stranici, na katero višina pada, rečemo **osnovnica**. Višino na stranico $a$ označimo z $v_a$, na stranico $b$ z $v_b$, na stranico $c$ z $v_c$. Pri topokotnem trikotniku leži višina lahko zunaj trikotnika.

**3. Ploščina trikotnika.** Ploščina je enaka polovici zmnožka osnovnice in pripadajoče višine:

$$S = \frac{a \cdot v_a}{2}$$

Enako velja za drugi dve stranici: $S = \dfrac{b \cdot v_b}{2} = \dfrac{c \cdot v_c}{2}$. Ploščino merimo v enotah za ploščino ($\text{cm}^2$, $\text{m}^2$, ...).

**4. Pomembno.** V obrazcu morata biti stranica in višina **pripadajoči**: višina mora pasti pravokotno prav na tisto stranico, ki jo vzameš za osnovnico.

**5. Pravokotni trikotnik.** Kateti sta med seboj pravokotni, zato je ena kateta višina na drugo. Ploščina je kar

$$S = \frac{a \cdot b}{2}$$

**6. Pretvarjanje enot.** Pred računanjem vse mere izrazi v isti enoti. Pri ploščini pazi: $1\,\text{m}^2 = 100\,\text{dm}^2 = 10\,000\,\text{cm}^2$.

## Rešeni primeri

### Primer 1 (lažji): obseg in ploščina

Trikotnik ima stranice $a = 7\,\text{cm}$, $b = 5\,\text{cm}$, $c = 6\,\text{cm}$. Višina na stranico $a$ je $v_a = 4\,\text{cm}$. Izračunaj obseg in ploščino.

1. Obseg je vsota stranic: $o = 7 + 5 + 6 = 18\,\text{cm}$.
2. Za ploščino vzamemo osnovnico $a = 7\,\text{cm}$, ker poznamo njeno višino $v_a = 4\,\text{cm}$.
3. Vstavimo: $S = \dfrac{7 \cdot 4}{2} = \dfrac{28}{2} = 14\,\text{cm}^2$.
4. Enota ploščine je $\text{cm}^2$, ker množimo dve dolžini.

### Primer 2: iskanje manjkajoče višine

Ploščina trikotnika je $30\,\text{cm}^2$, osnovnica $c = 12\,\text{cm}$. Kolikšna je višina $v_c$?

1. Zapišemo obrazec: $S = \dfrac{c \cdot v_c}{2}$.
2. Vstavimo znane podatke: $30 = \dfrac{12 \cdot v_c}{2}$.
3. Desno stran poenostavimo: $30 = 6 \cdot v_c$.
4. Obe strani delimo s $6$: $v_c = \dfrac{30}{6} = 5\,\text{cm}$.
5. Preverimo: $\dfrac{12 \cdot 5}{2} = \dfrac{60}{2} = 30$. ✓

### Primer 3 (težji): besedilna naloga

Vrtna greda ima obliko trikotnika s stranicami $3\,\text{m}$, $4\,\text{m}$ in $5\,\text{m}$. Med stranicama $3\,\text{m}$ in $4\,\text{m}$ je pravi kot. Okoli grede postaviš ograjo, v zemljo pa posadiš solato. Za vsak $\text{m}^2$ potrebuješ $20$ sadik. Koliko metrov ograje in koliko sadik potrebuješ?

1. **Ograja** pokrije celoten rob grede, zato računamo obseg: $o = 3 + 4 + 5 = 12\,\text{m}$.
2. **Sadike** so odvisne od površine, zato računamo ploščino.
3. Pravi kot je med stranicama $3\,\text{m}$ in $4\,\text{m}$, torej sta to kateti. Ena kateta je višina na drugo, zato: $S = \dfrac{3 \cdot 4}{2} = \dfrac{12}{2} = 6\,\text{m}^2$.
4. Število sadik: $6 \cdot 20 = 120$.
5. **Odgovor.** Potrebuješ $12\,\text{m}$ ograje in $120$ sadik.

## Pogoste napake

- **Pozabljeno deljenje z 2.** Zmnožek $a \cdot v_a$ je ploščina pravokotnika. Trikotnik je polovica tega.
- **Napačna višina.** V obrazec ne vstaviš poljubne stranice, ampak tisto, ki pripada dani višini. Poševna stranica ni višina (razen pri katetah pravokotnega trikotnika).
- **Napačna enota.** Obseg je v $\text{cm}$, ploščina v $\text{cm}^2$. Ploščine ne zapiši v $\text{cm}$.
- **Mešanje enot.** Če je ena mera v $\text{m}$ in druga v $\text{cm}$, ju moraš najprej izraziti v isti enoti.
- **Zamenjava obsega in ploščine.** Ograja, rob, okvir: obseg. Barva, trava, pločevina, tlak: ploščina.

## Povzetek

- Obseg trikotnika: $o = a + b + c$.
- Višina je pravokotnica iz oglišča na nasprotno stranico (ali njen podaljšek).
- Ploščina trikotnika: $S = \dfrac{a \cdot v_a}{2}$, enako za druge stranice z njihovimi višinami.
- Pri pravokotnem trikotniku: $S = \dfrac{a \cdot b}{2}$ (kateti).
- Pred računom izrazi vse mere v isti enoti. Ploščina je v kvadratnih enotah.
- Pri besedilnih nalogah razmisli, ali naloga sprašuje po robu (obseg) ali po površini (ploščina).

## Drugače: Na sliki

Nariši pravokotnik z dolžino $a$ in višino $v$. Njegova ploščina je $a \cdot v$. Vzemi diagonalo in pravokotnik razreži na dva skladna trikotnika. Vsak ima osnovnico $a$ in višino $v$ ter natanko polovico ploščine pravokotnika:

$$S = \frac{a \cdot v}{2}$$

Ta slika deluje za pravokotni trikotnik. Pri poljubnem trikotniku višina razdeli trikotnik na dva pravokotna trikotnika. Vsak od njiju je polovica svojega pravokotnika, skupaj pa spet dasta polovico pravokotnika z osnovnico $a$ in višino $v_a$.

Pomembno je tudi, da ima trikotnik tri višine. Če jih narišeš vse, vidiš, da vsaka pade pravokotno na svojo stranico, in da je ploščina pri vseh treh računih ista.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si trikotno jadro, ki je visoko $6\,\text{m}$, spodnji rob (osnovnica) pa meri $3\,\text{m}$. Jadrnico bi radi opremili z novim platnom. Jadro je trikotnik, zato je potrebno platno:

$$S = \frac{3 \cdot 6}{2} = 9\,\text{m}^2$$

Če bi jadro obšili z vrvico, bi potrebovali njegov obseg, za katerega bi morali poznati še dolžini preostalih dveh robov.

Podoben primer je trikotna streha hiše (zatrep). Da veš, koliko barve potrebuješ za pleskanje, računaš ploščino. Da veš, koliko letev postaviš ob robove, računaš obseg.

Pravilo za pomnjenje: **obseg je pot okoli lika (hodiš po robu), ploščina je površina, ki jo pokriješ (barvaš, tlakuješ).**

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo:

1. Preberi, kaj je dano in kaj iščeš. Podčrtaj številke z enotami.
2. Če so enote različne, jih pretvori v isto enoto.
3. Ugotovi, ali iščeš obseg ali ploščino.
4. Obseg: seštej vse tri stranice. Ploščina: izberi stranico in njeno višino.
5. Vstavi v obrazec in računaj po korakih.
6. Zapiši odgovor z enoto.

Številčni primer: trikotnik ima osnovnico $c = 80\,\text{cm}$ in višino $v_c = 0{,}5\,\text{m}$.

| Korak | Račun |
|---|---|
| Enaka enota | $0{,}5\,\text{m} = 50\,\text{cm}$ |
| Obrazec | $S = \dfrac{c \cdot v_c}{2}$ |
| Vstavimo | $S = \dfrac{80 \cdot 50}{2}$ |
| Zmnožek | $80 \cdot 50 = 4000$ |
| Delimo z 2 | $S = 2000\,\text{cm}^2$ |

Če bi pozabil(a) pretvoriti in računal(a) $80 \cdot 0{,}5 : 2 = 20$, bi dobil(a) napačen rezultat.

## Drugače: Bolj natančno

Zakaj je ploščina trikotnika polovica zmnožka osnovnice in višine? Vzemimo trikotnik z osnovnico $a$ in višino $v_a$. Ob njem postavimo njegovo natančno kopijo, zasukano za $180^\circ$ okoli središča ene od stranic. Dva skladna trikotnika skupaj tvorita paralelogram z osnovnico $a$ in višino $v_a$.

Ploščina paralelograma je $a \cdot v_a$. Ker ga sestavljata dva skladna trikotnika (z enako ploščino), je ploščina enega trikotnika:

$$S = \frac{a \cdot v_a}{2}$$

Obrazec velja pri vsaki izbiri osnovnice, torej mora veljati $\dfrac{a \cdot v_a}{2} = \dfrac{b \cdot v_b}{2}$. Iz tega sledi $a \cdot v_a = b \cdot v_b$: daljša kot je stranica, manjša je pripadajoča višina.

## Preveri se

? Trikotnik ima stranice $8\,\text{cm}$, $6\,\text{cm}$ in $5\,\text{cm}$. Kolikšen je njegov obseg?
- $19\,\text{cm}^2$
+ $19\,\text{cm}$
- $240\,\text{cm}$
- $9{,}5\,\text{cm}$
> Obseg je vsota vseh treh stranic: $8 + 6 + 5 = 19\,\text{cm}$. Odgovor v $\text{cm}^2$ ima napačno enoto, $240$ je zmnožek stranic, $9{,}5$ pa je polovica obsega.

? Osnovnica trikotnika je $10\,\text{cm}$, pripadajoča višina pa $7\,\text{cm}$. Kolikšna je ploščina?
- $70\,\text{cm}^2$
- $17\,\text{cm}^2$
+ $35\,\text{cm}^2$
> $S = \dfrac{10 \cdot 7}{2} = \dfrac{70}{2} = 35\,\text{cm}^2$. Odgovor $70$ pozabi deliti z $2$, $17$ pa je vsota namesto zmnožka.

? Trikotnik ima ploščino $24\,\text{cm}^2$ in osnovnico $8\,\text{cm}$. Kolikšna je pripadajoča višina?
- $3\,\text{cm}$
- $12\,\text{cm}$
+ $6\,\text{cm}$
- $24\,\text{cm}$
> Iz $24 = \dfrac{8 \cdot v}{2}$ dobimo $24 = 4 \cdot v$, torej $v = 6\,\text{cm}$. Odgovor $3$ dobiš, če ploščino deliš z $8$, ne da bi upošteval(a) polovico, $12$ pa, če deliš z $2$ namesto s $4$.
