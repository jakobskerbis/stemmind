---
stanje: osnutek
avtor: AI (claude-sonnet-5-5)
---

## Zakaj se tega učimo

Iz prejšnjih razredov že znaš izračunati obseg in ploščino pravokotnika in kvadrata ter veš, kaj je krog, središče in polmer. Znaš tudi kvadrirati število ($r^2 = r \cdot r$).

Krog je povsod okoli nas: kolesa, kovanci, pice, krožniki, okrogle mize, cevi. Če hočeš vedeti, koliko traku potrebuješ za obrobo okroglega zapestja ali koliko barve za okroglo ploskev, moraš znati izračunati **obseg** in **ploščino kroga**. Pri tem se prvič srečaš s posebnim številom $\pi$, ki se pojavi pri vseh krogih.

## Razlaga

**1. Poimenovanja.**

- **Središče** $S$ je točka, od katere so vse točke na krožnici enako oddaljene.
- **Polmer** $r$ je razdalja od središča do krožnice.
- **Premer** $d$ je daljica skozi središče, ki povezuje dve točki na krožnici. Velja $d = 2r$.
- **Krožnica** je množica točk, ki so od središča oddaljene za $r$. **Krog** je krožnica skupaj z vsemi točkami v njeni notranjosti.
- **Obseg kroga** $o$ je dolžina krožnice.

**2. Število $\pi$.** Če izmeriš obseg in premer poljubnega kroga (kolesa, kozarca, kovanca) in obseg deliš s premerom, dobiš vedno približno enako število:

$$\frac{o}{d} \approx 3{,}14$$

To število imenujemo **$\pi$** (pi). Velja $\pi = 3{,}14159\ldots$ Ima neskončno mnogo decimalk, ki se ne ponavljajo, zato ga ne moremo zapisati natančno z decimalnim številom ali ulomkom. Pri računanju uporabljamo približek $3{,}14$, ali pa pustimo $\pi$ v rezultatu (to je natančen odgovor).

**3. Obseg kroga.** Ker je $\dfrac{o}{d} = \pi$, je $o = \pi \cdot d$. Ker je $d = 2r$:

$$o = \pi d = 2\pi r$$

**4. Ploščina kroga.** Ploščina kroga s polmerom $r$ je:

$$p = \pi r^2$$

Pozor: najprej kvadriramo polmer, šele nato množimo s $\pi$.

**5. Kako izbrati obrazec.**

- Iščeš dolžino (obod, ograja, trak, pot enega obrata): **obseg**, enota je $\text{cm}$, $\text{m}$ ...
- Iščeš površino (koliko prekrije, koliko barve): **ploščina**, enota je $\text{cm}^2$, $\text{m}^2$ ...

**6. Obrnjene naloge.** Če poznaš obseg ali ploščino, lahko izračunaš polmer:

$$r = \frac{o}{2\pi}, \qquad r = \sqrt{\frac{p}{\pi}}$$

## Rešeni primeri

### Primer 1: obseg in ploščina iz polmera

Krog ima polmer $r = 5\,\text{cm}$. Izračunaj obseg in ploščino (uporabi $\pi \approx 3{,}14$).

1. **Obseg:** $o = 2\pi r$, ker poznamo polmer.
2. $o = 2 \cdot 3{,}14 \cdot 5 = 31{,}4\,\text{cm}$.
3. **Ploščina:** $p = \pi r^2$. Najprej kvadriramo: $r^2 = 5^2 = 25$.
4. $p = 3{,}14 \cdot 25 = 78{,}5\,\text{cm}^2$.
5. Preverimo smiselnost: krog s polmerom $5\,\text{cm}$ je manjši od kvadrata s stranico $10\,\text{cm}$ (ploščina $100\,\text{cm}^2$) in večji od kvadrata s stranico $5\,\text{cm}$ ($25\,\text{cm}^2$). Število $78{,}5$ leži vmes. ✓

### Primer 2: iz premera

Okrogla miza ima premer $d = 1{,}2\,\text{m}$. Kolikšna je ploščina mize? Rezultat zaokroži na dve decimalki ($\pi \approx 3{,}14$).

1. Obrazec za ploščino zahteva polmer. Iz premera: $r = d : 2 = 1{,}2 : 2 = 0{,}6\,\text{m}$.
2. Kvadriramo: $r^2 = 0{,}6^2 = 0{,}36$.
3. $p = 3{,}14 \cdot 0{,}36 = 1{,}1304\,\text{m}^2$.
4. Zaokrožimo: $p \approx 1{,}13\,\text{m}^2$.

### Primer 3: obrnjena naloga

Obseg kroga je $62{,}8\,\text{cm}$. Kolikšna je ploščina kroga? ($\pi \approx 3{,}14$)

1. Za ploščino potrebujemo polmer, zato ga najprej izračunamo iz obsega: $o = 2\pi r$, torej $r = \dfrac{o}{2\pi}$.
2. $r = \dfrac{62{,}8}{2 \cdot 3{,}14} = \dfrac{62{,}8}{6{,}28} = 10\,\text{cm}$.
3. Ploščina: $p = \pi r^2 = 3{,}14 \cdot 10^2 = 3{,}14 \cdot 100 = 314\,\text{cm}^2$.
4. Preverimo: obseg z $r = 10$: $2 \cdot 3{,}14 \cdot 10 = 62{,}8$. ✓

## Pogoste napake

- **Premer namesto polmera v $\pi r^2$.** Če je podan premer $d$, ga moraš najprej razpoloviti. Če vstaviš $d$ namesto $r$, dobiš štirikrat preveliko ploščino.
- **$\pi r^2$ ni $(\pi r)^2$ in ni $\pi \cdot 2r$.** Kvadrira se samo polmer.
- **Zamenjava obrazcev.** $2\pi r$ je dolžina (obseg), $\pi r^2$ je ploščina. Če dobiš $\text{cm}^2$ pri obsegu, si uporabil napačen obrazec.
- **Napačna enota.** Obseg v $\text{cm}$, ploščina v $\text{cm}^2$.
- **$\pi = 3$ ali $\pi = \frac{22}{7}$ kot natančna vrednost.** To sta samo približka. Natančne vrednosti $\pi$ ne moremo zapisati kot ulomek ali končno decimalko.
- **Zaokrožanje $\pi$ med računom na eno decimalko**, kar povzroči velike napake v rezultatu.

## Povzetek

- Polmer $r$, premer $d = 2r$.
- Razmerje $\dfrac{o}{d}$ je pri vseh krogih enako in ga imenujemo $\pi \approx 3{,}14$.
- Obseg kroga: $o = 2\pi r = \pi d$.
- Ploščina kroga: $p = \pi r^2$.
- Če poznaš obseg ali ploščino, polmer dobiš z $r = \dfrac{o}{2\pi}$ oziroma $r = \sqrt{\dfrac{p}{\pi}}$.
- Obseg merimo v dolžinskih enotah, ploščino v kvadratnih.

## Drugače: Na sliki

Predstavljaj si kolo, ki se zakotali po tleh za en polni obrat. Pot, ki jo prevozi, je natanko enaka obsegu kolesa. Če premer kolesa položiš ob to pot, ga lahko nanjo naneseš nekaj več kot trikrat: trikrat gre cel, ostane še majhen košček (približno $0{,}14$ premera). To je $\pi \approx 3{,}14$.

Za ploščino si predstavljaj, da krog razrežeš na veliko tankih izsekov (kot kos pice) in jih zložiš izmenično druge ob druge. Dobiš skoraj pravokotnik z višino približno $r$ in osnovnico približno polovico obsega, to je $\pi r$. Njegova ploščina je $\pi r \cdot r = \pi r^2$. Več ko je izsekov, bolj je lik podoben pravokotniku.

Še ena slikovna primerjava: kvadrat s stranico $r$ ima ploščino $r^2$. Krog s polmerom $r$ ima ploščino malo več kot trikrat toliko ($\pi r^2$), torej se vanj ne ujemajo niti štirje taki kvadrati, ujamejo pa se skoraj trije.

## Drugače: Iz vsakdanjega življenja

**Pica.** Pica s premerom $30\,\text{cm}$ ima polmer $15\,\text{cm}$ in ploščino $3{,}14 \cdot 15^2 = 3{,}14 \cdot 225 = 706{,}5\,\text{cm}^2$. Pica s premerom $40\,\text{cm}$ ima polmer $20\,\text{cm}$ in ploščino $3{,}14 \cdot 400 = 1256\,\text{cm}^2$. Premer je večji le za tretjino, ploščina pa skoraj za $80\,\%$. Zato je večja pica pogosto bolj ugodna, kot se zdi.

**Kolo.** Kolo s premerom $60\,\text{cm}$ ima obseg $3{,}14 \cdot 60 = 188{,}4\,\text{cm}$. Pri enem obratu kolesa se kolo premakne za približno $1{,}88\,\text{m}$. Za $1\,\text{km}$ ($100\,000\,\text{cm}$) potrebuje okoli $531$ obratov, saj je $100\,000 : 188{,}4 \approx 530{,}8$.

**Krožni vrt.** Za ograjo okrog okroglega vrta potrebuješ obseg (dolžino), za travo ali semena pa ploščino.

## Drugače: Korak za korakom s številkami

Recept za vsako nalogo s krogom:

1. Preberi, kaj je podano: polmer, premer, obseg ali ploščina?
2. Če je podan premer, izračunaj polmer: $r = d : 2$.
3. Ugotovi, ali iščeš dolžino (obseg) ali površino (ploščino).
4. Vstavi v obrazec.

Primer s tabelo (uporabi $\pi \approx 3{,}14$):

| $r$ | $d$ | $o = 2\pi r$ | $p = \pi r^2$ |
|---|---|---|---|
| $1\,\text{cm}$ | $2\,\text{cm}$ | $6{,}28\,\text{cm}$ | $3{,}14\,\text{cm}^2$ |
| $2\,\text{cm}$ | $4\,\text{cm}$ | $12{,}56\,\text{cm}$ | $12{,}56\,\text{cm}^2$ |
| $3\,\text{cm}$ | $6\,\text{cm}$ | $18{,}84\,\text{cm}$ | $28{,}26\,\text{cm}^2$ |
| $10\,\text{cm}$ | $20\,\text{cm}$ | $62{,}8\,\text{cm}$ | $314\,\text{cm}^2$ |

Opazi: ko se polmer podvoji (z $1$ na $2$), se obseg podvoji ($6{,}28 \to 12{,}56$), ploščina pa početveri ($3{,}14 \to 12{,}56$). Ko se polmer potroji (z $1$ na $3$), se obseg potroji, ploščina pa pomnoži z $9$ ($3{,}14 \cdot 9 = 28{,}26$).

## Drugače: Bolj natančno

**Zakaj je $o = \pi d$ za vsak krog?** Vsi krogi so med seboj podobni: vsak je povečava ali pomanjšava drugega. Če polmer povečamo $k$-krat, se vse dolžine povečajo $k$-krat, tudi obseg. Zato je razmerje $\dfrac{o}{d}$ pri vseh krogih enako. To stalno razmerje poimenujemo $\pi$. Dokazati, da je $\pi$ iracionalno število (ni ulomek), presega osnovnošolsko matematiko.

**Izpeljava ploščine.** Krog razrežemo na $2n$ enakih izsekov in jih zložimo izmenično v obliko, podobno pravokotniku. Njegova višina je približno $r$, osnovnica pa polovica obsega:

$$\frac{o}{2} = \frac{2\pi r}{2} = \pi r$$

Ploščina je približno $\pi r \cdot r = \pi r^2$. Ko je izsekov več, je ujemanje boljše, in natančna ploščina kroga je $p = \pi r^2$. (Strogi dokaz s tem postopkom sodi v višje razrede.)

**Povezava med obrazcema.** Če si ploščino predstavljaš kot vsoto tankih obročev, ima vsak obroč ploščino približno »obseg krat debelina«. Seštevanje obsegov $2\pi x$ po $x$ od $0$ do $r$ vodi do $\pi r^2$. To je ozadje, ki ga boš spoznal(a) pozneje.

## Preveri se

? Krog ima premer $d = 10\,\text{cm}$. Kolikšna je njegova ploščina? (Uporabi $\pi \approx 3{,}14$.)
- $314\,\text{cm}^2$
+ $78{,}5\,\text{cm}^2$
- $31{,}4\,\text{cm}^2$
- $62{,}8\,\text{cm}^2$
> Premer je $10\,\text{cm}$, zato je polmer $r = 5\,\text{cm}$. Ploščina je $3{,}14 \cdot 5^2 = 3{,}14 \cdot 25 = 78{,}5\,\text{cm}^2$. Odgovor $314$ dobiš, če namesto polmera vstaviš premer, $31{,}4$ je obseg, $62{,}8$ pa obseg kroga s polmerom $10\,\text{cm}$.

? Kolikšen je obseg kroga s polmerom $r = 3\,\text{cm}$? (Uporabi $\pi \approx 3{,}14$.)
- $28{,}26\,\text{cm}$
- $9{,}42\,\text{cm}$
+ $18{,}84\,\text{cm}$
> Obseg je $o = 2\pi r = 2 \cdot 3{,}14 \cdot 3 = 18{,}84\,\text{cm}$. Odgovor $28{,}26$ je ploščina ($\pi r^2$), $9{,}42$ pa dobiš, če pozabiš faktor $2$.

? Polmer kroga se podvoji. Kaj se zgodi s ploščino kroga?
- Podvoji se.
- Poveča se za $\pi$.
+ Početveri se.
- Ostane enaka.
> Ploščina je $\pi r^2$. Če je nov polmer $2r$, je nova ploščina $\pi (2r)^2 = 4\pi r^2$, torej štirikrat večja. Obseg bi se podvojil, ploščina pa se poveča s kvadratom.
