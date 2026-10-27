---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz 8. razreda že znaš uporabljati Pitagorov izrek, iz prejšnjih lekcij pa poznaš prizmo in njeno prostornino $V = O \cdot v$. Znaš tudi izračunati ploščino kvadrata in trikotnika.

Piramida je telo, ki ga srečaš na vsakem koraku: strehe s štirimi poševnimi ploskvami, šotori, egipčanske piramide, embalaža za čaj ali čokolado. Če želiš vedeti, koliko kritine potrebuješ za streho (plašč) ali koliko peska stane v obliki piramide (prostornina), moraš znati izračunati njeno površino in prostornino. Pri tem boš zelo pogosto uporabil Pitagorov izrek, saj se v piramidi skriva več pravokotnih trikotnikov.

## Razlaga

**1. Kaj je piramida.** Piramida je geometrijsko telo z eno **osnovno ploskvijo** (mnogokotnik) in **stranskimi ploskvami**, ki so vse trikotniki. Ti trikotniki se stikajo v eni točki, imenovani **vrh**. Po obliki osnovne ploskve poimenujemo piramido: tristrana, štiristrana (kvadratna, pravokotna), petstrana ...

**2. Plašč.** Vse stranske ploskve skupaj tvorijo **plašč** piramide. Osnovna ploskev v plašč ne spada.

**3. Pokončna piramida.** V tej lekciji obravnavamo **pravilno pokončno piramido**: osnovna ploskev je pravilni mnogokotnik (npr. kvadrat), vrh pa leži točno nad središčem osnovne ploskve. Takrat so vse stranske ploskve skladni enakokraki trikotniki.

**4. Dve različni višini.** Pozor, pri piramidi ju je treba ločiti:

- **višina piramide** $v$: razdalja od vrha do osnovne ploskve, pravokotno nanjo (»navpično navzdol«),
- **višina stranske ploskve** $v_s$: višina stranskega trikotnika, narisana na osnovni rob (po poševni ploskvi).

Višina stranske ploskve je vedno večja od višine piramide.

**5. Površina.** Površina je vsota osnovne ploskve in plašča:

$$P = O + pl$$

Plašč je vsota ploščin stranskih trikotnikov. Za pokončno piramido z osnovnim robom $a$ in $n$ stranskimi ploskvami je

$$pl = n \cdot \frac{a \cdot v_s}{2}$$

Pri kvadratni piramidi je $n = 4$, zato $pl = 4 \cdot \dfrac{a \cdot v_s}{2} = 2 a v_s$.

**6. Prostornina.** Prostornina piramide je tretjina prostornine prizme z isto osnovno ploskvijo in višino:

$$V = \frac{O \cdot v}{3}$$

**7. Pitagorov izrek v piramidi.** Pri kvadratni pokončni piramidi je višina $v$, polovica osnovnega roba $\dfrac{a}{2}$ in višina stranske ploskve $v_s$ stranice pravokotnega trikotnika. Hipotenuza je $v_s$:

$$v_s^2 = v^2 + \left(\frac{a}{2}\right)^2$$

## Rešeni primeri

### Primer 1: prostornina in površina

Kvadratna pokončna piramida ima osnovni rob $a = 6\,\text{cm}$ in višino $v = 4\,\text{cm}$. Izračunaj prostornino in površino.

1. **Osnovna ploskev:** $O = a^2 = 6^2 = 36\,\text{cm}^2$.
2. **Prostornina:** $V = \dfrac{O \cdot v}{3} = \dfrac{36 \cdot 4}{3} = \dfrac{144}{3} = 48\,\text{cm}^3$.
3. **Za plašč potrebujemo $v_s$**, ki ga nimamo podanega. Uporabimo Pitagorov izrek v trikotniku s stranicama $v = 4$ in $\dfrac{a}{2} = 3$: $v_s^2 = 4^2 + 3^2 = 16 + 9 = 25$, torej $v_s = 5\,\text{cm}$.
4. **Plašč:** $pl = 4 \cdot \dfrac{6 \cdot 5}{2} = 4 \cdot 15 = 60\,\text{cm}^2$.
5. **Površina:** $P = O + pl = 36 + 60 = 96\,\text{cm}^2$.
6. **Smiselnost:** $v_s = 5 > v = 4$, kar mora veljati.

### Primer 2: iskanje višine iz stranske višine

Kvadratna pokončna piramida ima osnovni rob $a = 10\,\text{cm}$ in višino stranske ploskve $v_s = 13\,\text{cm}$. Izračunaj njeno višino in prostornino.

1. **Kaj iščemo.** Višina piramide $v$ je kateta, $v_s$ pa hipotenuza trikotnika s katetama $v$ in $\dfrac{a}{2}$. Ker iščemo kateto, odštevamo.
2. $\dfrac{a}{2} = 5\,\text{cm}$.
3. $v^2 = v_s^2 - \left(\dfrac{a}{2}\right)^2 = 13^2 - 5^2 = 169 - 25 = 144$.
4. $v = \sqrt{144} = 12\,\text{cm}$.
5. **Osnovna ploskev:** $O = 10^2 = 100\,\text{cm}^2$.
6. **Prostornina:** $V = \dfrac{100 \cdot 12}{3} = \dfrac{1200}{3} = 400\,\text{cm}^3$.

### Primer 3 (težji): iz prostornine do površine

Kvadratna pokončna piramida ima osnovni rob $a = 8\,\text{cm}$ in prostornino $V = 64\,\text{cm}^3$. Izračunaj njeno površino.

1. **Osnovna ploskev:** $O = 8^2 = 64\,\text{cm}^2$.
2. **Višina iz prostornine.** Formulo $V = \dfrac{O \cdot v}{3}$ obrnemo: $v = \dfrac{3V}{O} = \dfrac{3 \cdot 64}{64} = 3\,\text{cm}$.
3. **Višina stranske ploskve.** Polovica osnovnega roba je $\dfrac{a}{2} = 4\,\text{cm}$. Potem je $v_s^2 = 3^2 + 4^2 = 9 + 16 = 25$, zato $v_s = 5\,\text{cm}$.
4. **Plašč:** $pl = 4 \cdot \dfrac{8 \cdot 5}{2} = 4 \cdot 20 = 80\,\text{cm}^2$.
5. **Površina:** $P = 64 + 80 = 144\,\text{cm}^2$.
6. **Preverimo prostornino:** $\dfrac{64 \cdot 3}{3} = 64$. Ujema se s podatkom.

## Pogoste napake

- **Pozabljena tretjina.** Prostornina piramide je $\dfrac{O \cdot v}{3}$, ne $O \cdot v$. Če dobiš prostornino prizme, si pozabil deliti s 3.
- **Zamenjava višin.** Za prostornino potrebuješ višino piramide $v$, za plašč pa višino stranske ploskve $v_s$. Ne uporabi ju narobe.
- **Cela osnovna stranica v Pitagorovem izreku.** V trikotniku $v$, $\dfrac{a}{2}$, $v_s$ nastopa **polovica** osnovnega roba, ne cel rob $a$.
- **Plašč s površino.** Plašč nima osnovne ploskve. Površina je $P = O + pl$.
- **Pozabljeno deljenje z 2 pri trikotniku.** Ploščina enega stranskega trikotnika je $\dfrac{a \cdot v_s}{2}$.

## Povzetek

- Piramida ima osnovno ploskev in stranske ploskve (trikotnike), ki se stikajo v vrhu. Vse stranske ploskve skupaj so plašč.
- Višina piramide $v$ je pravokotna na osnovno ploskev, višina stranske ploskve $v_s$ pa je višina stranskega trikotnika.
- Površina: $P = O + pl$, pri pokončni piramidi $pl = n \cdot \dfrac{a \cdot v_s}{2}$.
- Prostornina: $V = \dfrac{O \cdot v}{3}$.
- Pri kvadratni pokončni piramidi velja $v_s^2 = v^2 + \left(\dfrac{a}{2}\right)^2$.

## Drugače: Na sliki

Predstavljaj si kvadratno piramido in jo prereži navpično skozi vrh, vzporedno z osnovnim robom, tako da razpolovi dve nasprotni stranski ploskvi. Na preseku vidiš enakokraki trikotnik. Če ga razpoloviš po višini piramide, dobiš pravokotni trikotnik:

- ena kateta je **višina piramide** $v$ (navpična),
- druga kateta je **polovica osnovnega roba** $\dfrac{a}{2}$ (po tleh, od središča do roba),
- hipotenuza je **višina stranske ploskve** $v_s$ (po poševni ploskvi).

Če si piramido predstavljaš kot razgrnjeno mrežo, vidiš kvadrat v sredini in okoli njega štiri trikotnike. Plašč je vsota teh štirih trikotnikov. Vsak ima osnovnico $a$ in višino $v_s$.

## Drugače: Iz vsakdanjega življenja

Streha na vrtni uti ima obliko kvadratne piramide z osnovnim robom $a = 6\,\text{m}$ in višino $v = 4\,\text{m}$. Koliko kritine potrebuješ?

Kritina pokrije samo poševne ploskve, torej plašč. Najprej poiščemo višino stranske ploskve (to je dolžina, ki jo meriš po strehi od roba do vrha): $v_s = \sqrt{4^2 + 3^2} = 5\,\text{m}$.

Plašč: $pl = 4 \cdot \dfrac{6 \cdot 5}{2} = 60\,\text{m}^2$.

Strop pod streho (osnovna ploskev) pri tem ne šteje, saj ga kritina ne prekriva. Zato je za strehe pomemben plašč, ne površina.

## Drugače: Korak za korakom s številkami

Recept za nalogo z (kvadratno) pokončno piramido:

1. Nariši skico in označi, kaj je podano: $a$, $v$, $v_s$ ali $V$.
2. Izračunaj $O = a^2$.
3. Poglej, kaj ti manjka. Če manjka $v$ ali $v_s$, uporabi trikotnik s stranicami $v$, $\dfrac{a}{2}$, $v_s$:
   - iščem $v_s$: $v_s = \sqrt{v^2 + (a/2)^2}$ (plus),
   - iščem $v$: $v = \sqrt{v_s^2 - (a/2)^2}$ (minus).
4. Prostornina: $V = \dfrac{O \cdot v}{3}$.
5. Plašč: $pl = 4 \cdot \dfrac{a \cdot v_s}{2}$. Površina: $P = O + pl$.

Primer s tabelo, $a = 6\,\text{cm}$, $v = 4\,\text{cm}$:

| Količina | Račun | Rezultat |
|---|---|---|
| $O$ | $6^2$ | $36\,\text{cm}^2$ |
| $v_s$ | $\sqrt{16 + 9}$ | $5\,\text{cm}$ |
| $pl$ | $4 \cdot 6 \cdot 5 / 2$ | $60\,\text{cm}^2$ |
| $P$ | $36 + 60$ | $96\,\text{cm}^2$ |
| $V$ | $36 \cdot 4 / 3$ | $48\,\text{cm}^3$ |

## Drugače: Bolj natančno

**Zakaj je prostornina tretjina?** Vzemimo kocko z robom $a$ in njeno središče. Če središče povežemo z vsemi oglišči, kocka razpade na **šest enakih kvadratnih piramid**. Vsaka ima za osnovno ploskev eno stranico kocke ($O = a^2$), njena višina pa je od središča do stranice, torej $\dfrac{a}{2}$.

Šest piramid skupaj da kocko, zato je prostornina ene piramide

$$V = \frac{a^3}{6}.$$

Preverimo formulo $V = \dfrac{O \cdot v}{3}$:

$$\frac{a^2 \cdot \frac{a}{2}}{3} = \frac{a^3}{6}.$$

Ujema se. To je preverjanje za poseben primer. Splošno velja, da je prostornina vsake piramide tretjina prostornine prizme z isto osnovno ploskvijo in višino. Dokaz za splošno piramido presega obseg te lekcije.

**Zakaj je ploščina stranskega trikotnika $\dfrac{a \cdot v_s}{2}$?** Ker je to ploščina trikotnika z osnovnico $a$ in pripadajočo višino $v_s$ (višina je pravokotna na osnovni rob).

## Preveri se

? Kvadratna pokončna piramida ima osnovni rob $6\,\text{cm}$ in višino $10\,\text{cm}$. Kolikšna je njena prostornina?
- $360\,\text{cm}^3$
+ $120\,\text{cm}^3$
- $60\,\text{cm}^3$
- $40\,\text{cm}^3$
> $O = 6^2 = 36\,\text{cm}^2$, $V = \dfrac{36 \cdot 10}{3} = 120\,\text{cm}^3$. Odgovor $360$ je prostornina prizme (pozabljena tretjina), $60$ pa dobiš, če osnovno ploskev zamenjaš z $a$.

? Kvadratna pokončna piramida ima osnovni rob $a = 10\,\text{cm}$ in višino $v = 12\,\text{cm}$. Kolikšna je višina stranske ploskve?
- $17\,\text{cm}$
- $11\,\text{cm}$
+ $13\,\text{cm}$
- $\sqrt{244}\,\text{cm}$
> V Pitagorovem izreku nastopa polovica osnovnega roba: $v_s = \sqrt{12^2 + 5^2} = \sqrt{169} = 13\,\text{cm}$. Odgovor $17$ je vsota $12 + 5$, $\sqrt{244}$ pa dobiš, če uporabiš cel rob $10$ namesto polovice.

? Kvadratna pokončna piramida ima osnovni rob $4\,\text{cm}$ in višino stranske ploskve $5\,\text{cm}$. Kolikšen je plašč?
- $80\,\text{cm}^2$
- $20\,\text{cm}^2$
+ $40\,\text{cm}^2$
- $56\,\text{cm}^2$
> Plašč so štirje trikotniki: $4 \cdot \dfrac{4 \cdot 5}{2} = 40\,\text{cm}^2$. Odgovor $80$ pozabi deliti z 2, $20$ je en sam trikotnik, $56$ pa je površina ($16 + 40$), ne plašč.
