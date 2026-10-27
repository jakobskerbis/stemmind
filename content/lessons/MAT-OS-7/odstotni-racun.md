---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Odstotke že poznaš iz vsakdanjega življenja: na izdelkih vidiš napise »−20 %«, baterija telefona kaže »75 %«, v šoli dobiš rezultat testa v odstotkih. Iz prejšnjih lekcij znaš tudi ulomke, decimalna števila in sorazmerja.

Odstotni račun je le poseben način primerjanja: vse primerjamo s številom $100$. Zato lahko različne stvari med seboj lahko primerjamo. Tako ugotoviš, ali je bolj ugoden popust $20\,\%$ na majico ali $15\,\%$ na hlače, koliko plačaš po podražitvi in koliko točk moraš zbrati za oceno.

## Razlaga

**1. Kaj je odstotek.** Odstotek pomeni »stotinko celote«. Zapišemo ga z znakom $\%$:

$$1\,\% = \dfrac{1}{100} = 0{,}01$$

Zato je npr. $25\,\% = \dfrac{25}{100} = 0{,}25 = \dfrac{1}{4}$.

**2. Tri količine odstotnega računa.**

- **Osnova** ($Z$): celota, ki je $100\,\%$. Pogosto je to prvotna cena ali celotno število.
- **Odstotek** ($p\,\%$): kolikšen del osnove nas zanima.
- **Delež** ($D$): rezultat, to je del osnove, ki ustreza odstotku.

Primer: od $200$ učencev jih je $30\,\%$ šlo na izlet. Osnova je $200$, odstotek je $30\,\%$, delež je število učencev na izletu ($60$).

**3. Tri vrste nalog.**

*a) Iščemo delež* (poznamo osnovo in odstotek):

$$D = Z \cdot \dfrac{p}{100}$$

*b) Iščemo odstotek* (poznamo delež in osnovo):

$$p = \dfrac{D}{Z} \cdot 100$$

*c) Iščemo osnovo* (poznamo delež in odstotek):

$$Z = \dfrac{D}{p} \cdot 100$$

Te tri formule niso tri različne stvari. Vse izhajajo iz ene same sorazmerne zveze: $D : Z = p : 100$.

**4. Popust in podražitev.**

- **Popust** zmanjša ceno. Če je popust $p\,\%$, plačamo $(100 - p)\,\%$ prvotne cene.
- **Podražitev** poveča ceno. Če je podražitev $p\,\%$, nova cena je $(100 + p)\,\%$ prvotne cene.

Nova cena pri popustu $20\,\%$ je torej $80\,\%$ stare cene, kar je $0{,}8 \cdot$ stara cena. Pri podražitvi za $20\,\%$ je nova cena $120\,\%$ stare, kar je $1{,}2 \cdot$ stara cena.

## Rešeni primeri

### Primer 1: izračun deleža

V razredu je $25$ učencev. $40\,\%$ jih trenira nogomet. Koliko učencev trenira nogomet?

1. Osnova je celoten razred: $Z = 25$. Odstotek je $p = 40\,\%$. Iščemo delež.
2. Uporabimo $D = Z \cdot \dfrac{p}{100}$:
 $D = 25 \cdot \dfrac{40}{100} = 25 \cdot 0{,}4 = 10$.
3. Odgovor: nogomet trenira $10$ učencev.
4. Preverimo: $10$ od $25$ je $\dfrac{10}{25} = \dfrac{40}{100} = 40\,\%$.

### Primer 2: popust

Majica stane $30\,\text{€}$. Na razprodaji je popust $20\,\%$. Koliko plačamo?

**Prvi način (izračunamo popust):**

1. Osnova je prvotna cena: $Z = 30\,\text{€}$.
2. Popust: $D = 30 \cdot 0{,}2 = 6\,\text{€}$.
3. Nova cena: $30 - 6 = 24\,\text{€}$.

**Drugi način (neposredno):**

1. Plačamo $100\,\% - 20\,\% = 80\,\%$ prvotne cene.
2. $30 \cdot 0{,}8 = 24\,\text{€}$.

Oba načina dasta enak rezultat: majica stane $24\,\text{€}$. Drugi način je krajši, ker takoj dobimo končno ceno.

### Primer 3: iskanje osnove (težji)

Po podražitvi za $10\,\%$ stane knjiga $22\,\text{€}$. Koliko je stala pred podražitvijo?

1. **Kaj je osnova?** Podražitev se računa od stare cene, zato je stara cena osnova ($100\,\%$). Nove cene ne smemo vzeti za osnovo.
2. Nova cena je $100\,\% + 10\,\% = 110\,\%$ stare cene. Torej je delež $D = 22\,\text{€}$ in ustreza $p = 110\,\%$.
3. Iščemo osnovo: $Z = \dfrac{D}{p} \cdot 100 = \dfrac{22}{110} \cdot 100$.
4. $\dfrac{22}{110} = 0{,}2$, zato $Z = 0{,}2 \cdot 100 = 20\,\text{€}$.
5. Odgovor: knjiga je prej stala $20\,\text{€}$.
6. Preverimo: $10\,\%$ od $20$ je $2$, in $20 + 2 = 22$. ✓

## Pogoste napake

- **Napačna osnova.** Najprej vedno vprašaj: »Od česa računam odstotek?« Pri popustu in podražitvi je osnova prvotna cena.
- **Odštevanje odstotkov od števila.** Pri popustu $20\,\%$ na $30\,\text{€}$ ne smeš računati $30 - 20 = 10$. Odstotek je delež osnove, ne evri.
- **Pozabljeno delitev s $100$.** $20\,\%$ od $30$ ni $20 \cdot 30 = 600$, temveč $30 \cdot \dfrac{20}{100} = 6$.
- **Podražitev in popust se ne izničita.** Če izdelek podražimo za $10\,\%$ in nato pocenimo za $10\,\%$, ne dobimo prvotne cene, ker je osnova pri drugi spremembi drugačna. Primer: $100 \to 110 \to 99$.
- **Ob iskanju osnove za novo ceno vzeti $100\,\%$.** Če je cena po podražitvi $22\,\text{€}$, to ni $100\,\%$, ampak $110\,\%$ (v primeru $10\,\%$ podražitve).

## Povzetek

- $1\,\% = \dfrac{1}{100}$. Odstotek pove, koliko stotink osnove vzamemo.
- Osnova $Z$ je celota ($100\,\%$), delež $D$ je njen del, $p$ je odstotek.
- Delež: $D = Z \cdot \dfrac{p}{100}$. Odstotek: $p = \dfrac{D}{Z} \cdot 100$. Osnova: $Z = \dfrac{D}{p} \cdot 100$.
- Popust $p\,\%$: nova cena je $(100 - p)\,\%$ stare. Podražitev $p\,\%$: nova cena je $(100 + p)\,\%$ stare.
- Pri vsaki nalogi najprej določi osnovo.

## Drugače: Na sliki

Predstavljaj si trak, razdeljen na $100$ enakih koščkov. Cel trak je osnova ($100\,\%$), vsak košček je $1\,\%$.

Če je trak dolg $200\,\text{cm}$, je en košček dolg $2\,\text{cm}$. Potem je:

- $10\,\%$ traku $= 10 \cdot 2 = 20\,\text{cm}$,
- $50\,\%$ traku $= 50 \cdot 2 = 100\,\text{cm}$, kar je polovica.

Pri popustu $20\,\%$ pobarvaš $20$ koščkov kot »odvzete«, ostane $80$ koščkov, ki jih plačaš. Pri podražitvi $20\,\%$ traku dodaš še $20$ koščkov, skupaj jih je $120$.

## Drugače: Iz vsakdanjega življenja

Pomisli na pico, razrezano na $10$ enakih kosov. Vsak kos je $10\,\%$ pice. Če poješ $3$ kose, si pojedel $30\,\%$ pice. Ostane $70\,\%$, to je $7$ kosov.

Še en primer: v trgovini je športni copat za $80\,\text{€}$ s popustom $25\,\%$. Ker je $25\,\% = \dfrac{1}{4}$, popust dobiš tako, da ceno deliš s $4$: $80 : 4 = 20\,\text{€}$. Plačaš $80 - 20 = 60\,\text{€}$.

Uporabni so tudi »hitri odstotki«:

- $50\,\% = \dfrac{1}{2}$ (deli z $2$),
- $25\,\% = \dfrac{1}{4}$ (deli s $4$),
- $10\,\% = \dfrac{1}{10}$ (deli z $10$),
- $1\,\% = \dfrac{1}{100}$ (deli s $100$).

## Drugače: Korak za korakom s številkami

Recept, ki deluje pri vsaki nalogi:

1. Preberi nalogo in določi **osnovo** ($100\,\%$).
2. Zapiši, kaj poznaš (osnova, delež ali odstotek) in kaj iščeš.
3. Uporabi zvezo: $1\,\%$ osnove je $Z : 100$.

Primer: Koliko je $35\,\%$ od $240$?

| Korak | Račun |
|---|---|
| $100\,\%$ je osnova | $240$ |
| $1\,\%$ je stotinka | $240 : 100 = 2{,}4$ |
| $35\,\%$ je $35$ stotink | $35 \cdot 2{,}4 = 84$ |

Odgovor: $35\,\%$ od $240$ je $84$.

Isti postopek deluje za osnovo: če je $15\,\%$ neke količine enako $45$, je $1\,\% = 45 : 15 = 3$ in $100\,\% = 3 \cdot 100 = 300$.

## Drugače: Bolj natančno

Odstotni račun je poseben primer sorazmerja. Delež je sorazmeren osnovi, torej razmerje $\dfrac{D}{Z}$ je pri istem odstotku vedno enako:

$$\dfrac{D}{Z} = \dfrac{p}{100}$$

Iz te enačbe izpeljemo vse tri formule:

- Pomnožimo z $Z$: $D = Z \cdot \dfrac{p}{100}$.
- Pomnožimo s $100$: $p = \dfrac{D}{Z} \cdot 100$.
- Enačbo obrnemo in rešimo za $Z$: $Z = \dfrac{D \cdot 100}{p}$.

Zakaj sta popust $10\,\%$ in podražitev $10\,\%$ skupaj manj kot nič? Pri cena $100$:

- podražitev: $100 \cdot 1{,}1 = 110$,
- popust: $110 \cdot 0{,}9 = 99$.

Skupni faktor je $1{,}1 \cdot 0{,}9 = 0{,}99$, ne $1$. Odstotka se računata od različnih osnov ($100$ in $110$), zato se ne izničita.

## Preveri se

? Koliko je $15\,\%$ od $200$?
- $15$
- $3000$
+ $30$
- $185$
> $D = 200 \cdot \dfrac{15}{100} = 200 \cdot 0{,}15 = 30$. Odgovor $185$ bi dobil, če bi odštel $15\,\%$ in ne izračunal deleža.

? Jakna stane $80\,\text{€}$. Popust je $25\,\%$. Koliko plačamo?
- $20\,\text{€}$
- $55\,\text{€}$
+ $60\,\text{€}$
- $105\,\text{€}$
> Popust je $80 \cdot 0{,}25 = 20\,\text{€}$, plačamo $80 - 20 = 60\,\text{€}$. Odgovor $20\,\text{€}$ je le višina popusta, $55\,\text{€}$ pa dobiš, če odšteješ $25$ evrov namesto $25\,\%$.

? Po podražitvi za $20\,\%$ stane izdelek $60\,\text{€}$. Kolikšna je bila prvotna cena?
- $48\,\text{€}$
- $72\,\text{€}$
+ $50\,\text{€}$
> Nova cena je $120\,\%$ stare: $Z = \dfrac{60}{120} \cdot 100 = 50\,\text{€}$. Preverimo: $20\,\%$ od $50$ je $10$, $50 + 10 = 60$. Odgovor $48\,\text{€}$ dobiš, če od $60$ odšteješ $20\,\%$ nove cene, kar je napačna osnova.
