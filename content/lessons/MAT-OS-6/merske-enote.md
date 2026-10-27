---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz nižjih razredov že poznaš centimetre, metre, kilograme, litre in ure. Pri računanju z decimalnimi števili si spoznal, da množenje z $10$, $100$ in $1000$ premakne decimalno vejico.

Merske enote srečaš vsak dan. Recept zahteva $250\,\text{g}$ moke, na embalaži pa piše $0{,}5\,\text{kg}$. Pot v šolo je dolga $1{,}2\,\text{km}$, v telovadnici pa merijo igrišče v metrih. Film traja $105$ minut, ti pa želiš vedeti, koliko je to ur. Da lahko take podatke primerjaš in računaš z njimi, jih moraš znati **pretvoriti** iz ene enote v drugo.

## Razlaga

**1. Kaj je pretvarjanje.** Pri pretvarjanju isto količino zapišemo z drugo enoto. Količina se ne spremeni, spremeni se samo zapis. Na primer $1\,\text{m}$ in $100\,\text{cm}$ sta enaka dolžina.

**2. Dolžina.** Osnovna enota je meter ($\text{m}$).

$$1\,\text{km} = 1000\,\text{m},\quad 1\,\text{m} = 10\,\text{dm} = 100\,\text{cm} = 1000\,\text{mm}$$
$$1\,\text{dm} = 10\,\text{cm},\quad 1\,\text{cm} = 10\,\text{mm}$$

**3. Masa.** Osnovna enota je kilogram ($\text{kg}$).

$$1\,\text{t} = 1000\,\text{kg},\quad 1\,\text{kg} = 100\,\text{dag} = 1000\,\text{g},\quad 1\,\text{dag} = 10\,\text{g}$$

**4. Prostornina tekočin.** Osnovna enota je liter ($\text{l}$).

$$1\,\text{hl} = 100\,\text{l},\quad 1\,\text{l} = 10\,\text{dl} = 100\,\text{cl} = 1000\,\text{ml},\quad 1\,\text{dl} = 100\,\text{ml}$$

Liter je enako kot kubični decimeter, mililiter pa enako kot kubični centimeter: $1\,\text{l} = 1\,\text{dm}^3$ in $1\,\text{ml} = 1\,\text{cm}^3$.

**5. Čas.** Pri času **ne** množimo z $10$ ali $100$.

$$1\,\text{h} = 60\,\text{min},\quad 1\,\text{min} = 60\,\text{s},\quad 1\,\text{h} = 3600\,\text{s},\quad 1\,\text{dan} = 24\,\text{h}$$

**6. Pravilo za pretvarjanje.**

- **Iz večje enote v manjšo** (npr. $\text{km} \to \text{m}$): število je večje, zato **množimo**.
- **Iz manjše enote v večjo** (npr. $\text{g} \to \text{kg}$): število je manjše, zato **delimo**.

Pri dolžini, masi in prostornini je faktor potenca števila $10$ ($10$, $100$ ali $1000$), zato je dovolj, da **premakneš decimalno vejico**. Pri času množiš ali deliš s $60$ oziroma $24$.

**7. Preverjanje.** Pomisli, ali je rezultat smiseln. Manjša enota pomeni več kosov, večja enota pa manj.

## Rešeni primeri

### Primer 1: dolžina

a) Pretvori $3{,}5\,\text{km}$ v metre.
b) Pretvori $4200\,\text{cm}$ v metre.

**a)**
1. Iz večje enote (km) gremo v manjšo (m), zato množimo.
2. $1\,\text{km} = 1000\,\text{m}$, zato množimo s $1000$.
3. $3{,}5 \cdot 1000 = 3500$, torej $3{,}5\,\text{km} = 3500\,\text{m}$.
4. Preverimo: metrov je več kot kilometrov, kar je prav.

**b)**
1. Iz manjše enote (cm) gremo v večjo (m), zato delimo.
2. $1\,\text{m} = 100\,\text{cm}$, zato delimo s $100$.
3. $4200 : 100 = 42$, torej $4200\,\text{cm} = 42\,\text{m}$.
4. Preverimo: $42 \cdot 100 = 4200$. ✓

### Primer 2: masa in čas

a) Pretvori $750\,\text{g}$ v kilograme.
b) Zapiši $3\,\text{kg}\,40\,\text{dag}$ v dekagramih.
c) Pretvori $2\,\text{h}\,15\,\text{min}$ v minute.
d) Pretvori $5400\,\text{s}$ v ure in minute.

**a)**
1. Iz grama v kilogram gremo v večjo enoto, zato delimo.
2. $750 : 1000 = 0{,}75$, torej $750\,\text{g} = 0{,}75\,\text{kg}$.

**b)**
1. Najprej pretvorimo kilograme: $3\,\text{kg} = 3 \cdot 100 = 300\,\text{dag}$, ker je $1\,\text{kg} = 100\,\text{dag}$.
2. Prištejemo preostanek: $300 + 40 = 340\,\text{dag}$.

**c)**
1. Ure pretvorimo v minute: $2\,\text{h} = 2 \cdot 60 = 120\,\text{min}$, ker ura traja $60$ minut.
2. Prištejemo minute: $120 + 15 = 135\,\text{min}$.

**d)**
1. Sekunde pretvorimo v minute, ker je minuta večja enota: $5400 : 60 = 90\,\text{min}$.
2. Minute pretvorimo v ure: $90\,\text{min} = 60\,\text{min} + 30\,\text{min} = 1\,\text{h}\,30\,\text{min}$.
3. Preverimo: $1\,\text{h}\,30\,\text{min} = 90\,\text{min} = 90 \cdot 60\,\text{s} = 5400\,\text{s}$. ✓

### Primer 3: besedilni nalogi

a) Ana na stadionu pretečе $12$ krogov, vsak krog meri $400\,\text{m}$. Koliko kilometrov je pretekla?

b) V vrču je $3{,}5\,\text{l}$ soka. Vanj želimo natočiti kozarce po $2\,\text{dl}$. Koliko polnih kozarcev napolnimo?

**a)**
1. Skupna pot: $12 \cdot 400 = 4800\,\text{m}$.
2. Vprašanje je v kilometrih, zato delimo s $1000$: $4800 : 1000 = 4{,}8\,\text{km}$.
3. **Odgovor:** Ana je pretekla $4{,}8\,\text{km}$.

**b)**
1. Količini morata biti v isti enoti. Litre pretvorimo v decilitre: $3{,}5\,\text{l} = 3{,}5 \cdot 10 = 35\,\text{dl}$.
2. Delimo: $35 : 2 = 17{,}5$.
3. Polnih kozarcev je $17$, ostane pa še polovica kozarca ($1\,\text{dl}$).
4. Preverimo: $17 \cdot 2 = 34\,\text{dl}$, ostane $35 - 34 = 1\,\text{dl}$. ✓
5. **Odgovor:** Napolnimo $17$ polnih kozarcev.

## Pogoste napake

- **Množenje namesto deljenja (ali obratno).** Pred računom se vprašaj, ali bo število večje ali manjše. $2\,\text{m}$ je $200\,\text{cm}$, ne $0{,}02\,\text{cm}$.
- **Napačen faktor.** Med $\text{m}$ in $\text{cm}$ je faktor $100$, med $\text{m}$ in $\text{mm}$ pa $1000$. Preštej korake po lestvici enot.
- **Čas računamo kot decimalno število.** $1\,\text{h}\,30\,\text{min}$ ni $1{,}30\,\text{h}$. Ura ima $60$ minut, zato je $30\,\text{min} = 0{,}5\,\text{h}$ in $1\,\text{h}\,30\,\text{min} = 1{,}5\,\text{h}$.
- **Seštevanje različnih enot.** Ne smeš sešteti $2\,\text{m} + 50\,\text{cm}$ kot $52$. Najprej obe količini zapiši v isti enoti: $200\,\text{cm} + 50\,\text{cm} = 250\,\text{cm}$.
- **Zamenjava $\text{dag}$ in $\text{dg}$.** Dekagram ($\text{dag}$) je $10\,\text{g}$. Z desetinko grama ($\text{dg}$) se v šoli ne ukvarjamo.

## Povzetek

- Pretvarjanje spremeni zapis količine, ne količine same.
- Večja enota v manjšo: **množimo**. Manjša enota v večjo: **delimo**.
- Dolžina: $1\,\text{km} = 1000\,\text{m}$, $1\,\text{m} = 100\,\text{cm}$, $1\,\text{cm} = 10\,\text{mm}$.
- Masa: $1\,\text{t} = 1000\,\text{kg}$, $1\,\text{kg} = 1000\,\text{g}$, $1\,\text{kg} = 100\,\text{dag}$.
- Prostornina: $1\,\text{l} = 10\,\text{dl} = 1000\,\text{ml}$, $1\,\text{hl} = 100\,\text{l}$.
- Čas: $1\,\text{h} = 60\,\text{min}$, $1\,\text{min} = 60\,\text{s}$, $1\,\text{dan} = 24\,\text{h}$.
- Pri računanju moramo imeti vse količine v isti enoti.

## Drugače: Na sliki

Predstavljaj si stopnice. Na vrhu je največja enota, na dnu najmanjša:

$$\text{km} \to \text{m} \to \text{dm} \to \text{cm} \to \text{mm}$$

Vsaka stopnica navzdol pomeni, da je enot več. Od $\text{m}$ do $\text{dm}$ je faktor $10$, do $\text{cm}$ je faktor $100$, do $\text{mm}$ pa $1000$.

Ko greš **po stopnicah navzdol**, število **raste** in decimalna vejica gre **desno**. Ko greš **navzgor**, število **pada** in vejica gre **levo**. Na primer $2{,}5\,\text{m}$ gre dve stopnici navzdol do $\text{cm}$, vejica se premakne za dve mesti desno: $250\,\text{cm}$.

## Drugače: Iz vsakdanjega življenja

**Kuhinja.** Recept pravi $0{,}5\,\text{kg}$ moke, tehtnica pa kaže grame. Ker je $1\,\text{kg} = 1000\,\text{g}$, je $0{,}5\,\text{kg} = 500\,\text{g}$. Pol kilograma je polovica od $1000\,\text{g}$, kar je smiselno.

**Pijača.** Steklenica ima $1{,}5\,\text{l}$. Ker je $1\,\text{l} = 10\,\text{dl}$, je v njej $15\,\text{dl}$. Če popiješ kozarec ($2\,\text{dl}$), ostane $13\,\text{dl}$.

**Čas.** Tekma se začne ob $16{:}00$ in traja $90$ minut. Ker je $90\,\text{min} = 1\,\text{h}\,30\,\text{min}$, se konča ob $17{:}30$.

## Drugače: Korak za korakom s številkami

Recept za pretvarjanje:

1. Zapiši, kaj imaš in kaj iščeš (npr. $3500\,\text{m} \to \text{km}$).
2. Ugotovi, ali greš v večjo ali manjšo enoto. Iz $\text{m}$ v $\text{km}$ gremo v večjo, zato bomo delili.
3. Ugotovi faktor: $1\,\text{km} = 1000\,\text{m}$, torej $1000$.
4. Izračunaj: $3500 : 1000 = 3{,}5$.
5. Preveri: $3{,}5\,\text{km}$ je manj kot $3500\,\text{m}$ po številu, kar je prav.

Tabela za dolžino. Število zapišemo v ustrezen stolpec, vejico postavimo za enoto, v katero pretvarjamo:

| $\text{km}$ | $\text{m}$ | $\text{dm}$ | $\text{cm}$ | $\text{mm}$ |
|---|---|---|---|---|
| $0{,}0035$ | $3{,}5$ | $35$ | $350$ | $3500$ |

Vse vrednosti v vrstici so enaka dolžina: $3{,}5\,\text{m}$.

## Drugače: Bolj natančno

Predpone v imenih enot imajo stalen pomen:

- **kilo** pomeni $1000$-krat več: $1\,\text{km} = 1000\,\text{m}$, $1\,\text{kg} = 1000\,\text{g}$.
- **hekto** pomeni $100$-krat več: $1\,\text{hl} = 100\,\text{l}$.
- **deka** pomeni $10$-krat več: $1\,\text{dag} = 10\,\text{g}$.
- **deci** pomeni desetino: $1\,\text{dl} = \dfrac{1}{10}\,\text{l} = 0{,}1\,\text{l}$.
- **centi** pomeni stotino: $1\,\text{cm} = \dfrac{1}{100}\,\text{m} = 0{,}01\,\text{m}$.
- **mili** pomeni tisočino: $1\,\text{mm} = \dfrac{1}{1000}\,\text{m} = 0{,}001\,\text{m}$.

Zato je pretvarjanje med temi enotami vedno množenje ali deljenje s potenco števila $10$, kar ustreza premiku decimalne vejice.

Čas je izjema, ker temelji na staremu štetju s številom $60$ (ura, minuta, sekunda) in številom $24$ (dan). Tu decimalna vejica ne pomaga, računati moramo z deljenjem in množenjem s $60$ ali $24$.

## Preveri se

? Koliko centimetrov je $2{,}5\,\text{m}$?
- $25\,\text{cm}$
+ $250\,\text{cm}$
- $2500\,\text{cm}$
- $0{,}025\,\text{cm}$
> Iz metrov v centimetre gremo v manjšo enoto, zato množimo s $100$: $2{,}5 \cdot 100 = 250$. Odgovor $25$ bi pomenil množenje z $10$ (decimetri), $2500$ pa množenje s $1000$ (milimetri).

? Koliko minut je $3\,\text{h}\,20\,\text{min}$?
- $320\,\text{min}$
+ $200\,\text{min}$
- $80\,\text{min}$
> Ura ima $60$ minut, zato je $3\,\text{h} = 3 \cdot 60 = 180\,\text{min}$ in $180 + 20 = 200\,\text{min}$. Odgovor $320$ nastane, če številki zapišemo skupaj, kot da bi imela ura $100$ minut.

? Koliko litrov je $4500\,\text{ml}$?
- $45\,\text{l}$
- $450\,\text{l}$
+ $4{,}5\,\text{l}$
- $0{,}45\,\text{l}$
> Iz mililitrov v litre gremo v večjo enoto, zato delimo s $1000$: $4500 : 1000 = 4{,}5$. Preverimo: $4{,}5 \cdot 1000 = 4500$.
