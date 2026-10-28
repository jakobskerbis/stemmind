---
stanje: osnutek
avtor: AI
---

## Zakaj se tega učimo

Iz prejšnjih razredov že poznaš kote: pravi kot ima $90^\circ$, ostri kot je manjši od $90^\circ$, topi kot pa večji od $90^\circ$ (a manjši od $180^\circ$). Znaš tudi meriti kot s kotomerom in veš, da iztegnjeni kot meri $180^\circ$.

Trikotnik je najpreprostejši lik z ravnimi stranicami in ga srečuješ povsod: v strehah, mostovih, žerjavih, kolesarskih okvirjih. Če poznaš dva kota trikotnika, lahko **tretjega izračunaš, ne da bi ga merila**. Tako geodet iz dveh izmerjenih kotov določi tretjega, ti pa boš s tem znanjem reševala naloge s koti v likih, ki jih sestavljajo trikotniki.

## Razlaga

**1. Trikotnik in njegovi deli.** Trikotnik ima tri oglišča ($A$, $B$, $C$), tri stranice ($a$, $b$, $c$) in tri notranje kote ($\alpha$, $\beta$, $\gamma$). Stranica $a$ leži nasproti oglišča $A$, kot $\alpha$ pa je pri oglišču $A$.

**2. Vrste trikotnikov glede na stranice.**

- **Raznostranični**: vse tri stranice so različno dolge.
- **Enakokraki**: dve stranici (kraka) sta enako dolgi. Tretji stranici rečemo osnovnica. Kota ob osnovnici sta enaka.
- **Enakostranični**: vse tri stranice so enako dolge. Vsi trije koti so enaki.

**3. Vrste trikotnikov glede na kote.**

- **Ostrokotni**: vsi trije koti so ostri.
- **Pravokotni**: en kot je pravi.
- **Topokotni**: en kot je top.

Trikotnik ima lahko največ en pravi ali en top kot (zakaj, boš videla spodaj).

**4. Vsota notranjih kotov.** V vsakem trikotniku je vsota notranjih kotov enaka $180^\circ$:

$$\alpha + \beta + \gamma = 180^\circ$$

Iz tega sledi: če poznaš dva kota, tretjega dobiš z odštevanjem, $\gamma = 180^\circ - \alpha - \beta$.

**5. Posledice.**

- Enakostranični trikotnik: $3\cdot\alpha = 180^\circ$, zato ima vsak kot $60^\circ$.
- Enakokraki trikotnik: kota ob osnovnici sta enaka, zato iz enega kota izračunaš ostala dva.
- Pravokotni trikotnik: ostra kota skupaj merita $90^\circ$.

**6. Zunanji kot.** Zunanji kot trikotnika dobimo tako, da eno stranico podaljšamo čez oglišče. Zunanji kot ($\alpha'$, $\beta'$, $\gamma'$) je kot med podaljškom stranice in sosednjo stranico. Z notranjim kotom pri istem oglišču skupaj tvorita iztegnjeni kot:

$$\alpha + \alpha' = 180^\circ$$

**7. Izrek o zunanjem kotu.** Zunanji kot je enak vsoti obeh notranjih kotov, ki **nista** pri istem oglišču:

$$\alpha' = \beta + \gamma$$

**8. Vsota zunanjih kotov.** Če pri vsakem oglišču vzamemo po en zunanji kot (v isti smeri obhoda), je njihova vsota $360^\circ$.

## Rešeni primeri

### Primer 1: manjkajoči kot

V trikotniku je $\alpha = 55^\circ$ in $\beta = 70^\circ$. Izračunaj $\gamma$ in določi vrsto trikotnika glede na kote.

1. Vsota kotov je $180^\circ$, zato $\gamma = 180^\circ - \alpha - \beta$.
2. Vstavimo: $\gamma = 180^\circ - 55^\circ - 70^\circ = 180^\circ - 125^\circ = 55^\circ$.
3. Vsi koti ($55^\circ$, $70^\circ$, $55^\circ$) so ostri, zato je trikotnik ostrokotni.
4. Ker je $\alpha = \gamma$, sta stranici nasproti teh kotov enaki, zato je trikotnik tudi enakokrak.
5. Preverimo: $55^\circ + 70^\circ + 55^\circ = 180^\circ$. ✓

### Primer 2: enakokraki trikotnik

V enakokrakem trikotniku meri kot ob vrhu (med kraka) $\gamma = 40^\circ$. Izračunaj kota ob osnovnici.

1. Kota ob osnovnici sta enaka, zato ju označimo z $\alpha = \beta$.
2. Zapišemo vsoto kotov: $\alpha + \alpha + 40^\circ = 180^\circ$.
3. Odštejemo $40^\circ$: $2\alpha = 140^\circ$.
4. Delimo z $2$: $\alpha = 70^\circ$.
5. Odgovor: $\alpha = \beta = 70^\circ$.
6. Preverimo: $70^\circ + 70^\circ + 40^\circ = 180^\circ$. ✓

### Primer 3: zunanji kot

V trikotniku $ABC$ je $\alpha = 48^\circ$ in $\beta = 67^\circ$. Izračunaj zunanji kot $\gamma'$ pri oglišču $C$ na dva načina.

**1. način (prek notranjega kota).**

1. Notranji kot: $\gamma = 180^\circ - 48^\circ - 67^\circ = 65^\circ$.
2. Zunanji in notranji kot pri $C$ sta skupaj iztegnjeni kot: $\gamma' = 180^\circ - \gamma = 180^\circ - 65^\circ = 115^\circ$.

**2. način (izrek o zunanjem kotu).**

1. Zunanji kot pri $C$ je enak vsoti notranjih kotov pri $A$ in $B$.
2. $\gamma' = \alpha + \beta = 48^\circ + 67^\circ = 115^\circ$.

Oba načina dasta isti rezultat. ✓ Drugi je krajši, ker nam ni treba računati $\gamma$.

## Pogoste napake

- **Vsota kotov ni $180^\circ$.** Ne zamenjuj z $360^\circ$ (to je vsota zunanjih kotov, pozneje tudi vsota kotov v štirikotniku). Vedno preveri: $\alpha + \beta + \gamma = 180^\circ$.
- **Zunanji kot ni enak notranjemu.** Zunanji in notranji kot pri istem oglišču skupaj merita $180^\circ$, ne sta enaka.
- **Napačna kota v izreku o zunanjem kotu.** Zunanji kot pri $C$ je vsota kotov pri $A$ in $B$, ne vsota z notranjim kotom pri $C$.
- **Enakokraki trikotnik: napačna kota.** Enaka sta kota ob osnovnici, ne kot ob vrhu.
- **Pozabljeno deljenje z 2.** Pri enakokrakem trikotniku po odštevanju dobiš $2\alpha$, ne $\alpha$.

## Povzetek

- Glede na stranice so trikotniki raznostranični, enakokraki in enakostranični.
- Glede na kote so ostrokotni, pravokotni in topokotni.
- Vsota notranjih kotov trikotnika je $180^\circ$: $\alpha + \beta + \gamma = 180^\circ$.
- Enakostranični trikotnik ima vse kote $60^\circ$. Enakokraki ima enaka kota ob osnovnici.
- Zunanji kot in sosednji notranji kot skupaj merita $180^\circ$.
- Zunanji kot je enak vsoti dveh nesosednjih notranjih kotov: $\alpha' = \beta + \gamma$.
- Vsota zunanjih kotov (po en pri vsakem oglišču) je $360^\circ$.

## Drugače: Na sliki

Nariši poljuben trikotnik na papir in ga izreži. Pobarvaj vsak kot z drugo barvo ali ga označi z lokom. Nato vsa tri oglišča odtrgaj (ali odreži) in jih zloži skupaj tako, da se vrhovi stikajo v eni točki, kota pa se dotikata s krakoma. Trije koti se postavijo drug ob drugega in skupaj tvorijo **ravno črto**, torej iztegnjeni kot $180^\circ$.

Zunanji kot si predstavljaj takole: stranico $AB$ podaljšaš čez oglišče $B$. Podaljšek in stranica $BC$ oklepata zunanji kot. Skupaj z notranjim kotom $\beta$ ležita na isti premici, zato je $\beta + \beta' = 180^\circ$.

## Drugače: Iz vsakdanjega življenja

Predstavljaj si, da stojiš na vogalu trikotnega parka in se na vsakem oglišču obrneš, da nadaljuješ po naslednji stranici. Ko obhodiš park in prideš nazaj na začetek, si se obrnila za en cel krog, torej za $360^\circ$. Vsak obrat je ravno zunanji kot trikotnika. Zato je vsota zunanjih kotov $360^\circ$.

Še en primer: strešno ogrodje ima obliko enakokrakega trikotnika. Če je kot na vrhu $100^\circ$, tesar ve, da mora biti kot ob vsakem tramu na osnovnici $(180^\circ - 100^\circ) : 2 = 40^\circ$, in tako nastavi žago brez dodatnega merjenja.

## Drugače: Korak za korakom s številkami

Recept za naloge z manjkajočim kotom:

1. Nariši skico in označi znane kote.
2. Vprašaj se: kaj še vem o trikotniku? Je enakokrak (dva enaka kota)? Je pravokoten (en kot je $90^\circ$)? Je enakostraničen (vsi koti $60^\circ$)?
3. Zapiši enačbo: $\alpha + \beta + \gamma = 180^\circ$.
4. Vstavi znane vrednosti. Primer: $\alpha = 35^\circ$, $\beta = 90^\circ$.
5. Seštej znane kote: $35^\circ + 90^\circ = 125^\circ$.
6. Odštej od $180^\circ$: $\gamma = 180^\circ - 125^\circ = 55^\circ$.
7. Preveri: $35^\circ + 90^\circ + 55^\circ = 180^\circ$.

Za zunanji kot: najprej ugotovi, pri katerem oglišču je. Nato izberi krajšo pot: ali $180^\circ$ minus notranji kot pri tem ogliščil, ali vsota drugih dveh notranjih kotov.

Primer: $\alpha = 35^\circ$, $\gamma = 55^\circ$. Zunanji kot pri $B$: $\beta' = \alpha + \gamma = 35^\circ + 55^\circ = 90^\circ$.

## Drugače: Bolj natančno

**Zakaj je vsota kotov $180^\circ$?** Skozi oglišče $C$ potegni premico $p$, ki je vzporedna s stranico $AB$. Na premici $p$ ob oglišču $C$ nastanejo trije koti, ki skupaj tvorijo iztegnjeni kot $180^\circ$: eden je $\gamma$, druga dva pa sta po vrsti enaka kotoma $\alpha$ in $\beta$.

Zakaj sta enaka? Premica $AC$ seka vzporednici $p$ in $AB$, zato sta izmenična kota enaka. Podobno velja za premico $BC$. Tako dobimo:

$$\alpha + \gamma + \beta = 180^\circ$$

**Izrek o zunanjem kotu.** Zunanji kot pri $C$ je $\gamma' = 180^\circ - \gamma$. Ker je $\alpha + \beta = 180^\circ - \gamma$, sledi $\gamma' = \alpha + \beta$.

**Vsota zunanjih kotov.** Seštejemo tri zunanje kote:

$$\alpha' + \beta' + \gamma' = (180^\circ - \alpha) + (180^\circ - \beta) + (180^\circ - \gamma) = 540^\circ - 180^\circ = 360^\circ$$

**Zakaj največ en pravi ali top kot?** Če bi imela dva kota, vsaj $90^\circ$ vsak, bi bila njuna vsota že vsaj $180^\circ$, tretji kot pa bi moral biti $0^\circ$ ali manj, kar ni mogoče.

## Preveri se

? V trikotniku je $\alpha = 80^\circ$ in $\beta = 45^\circ$. Koliko meri $\gamma$?
- $125^\circ$
+ $55^\circ$
- $135^\circ$
- $65^\circ$
> $\gamma = 180^\circ - 80^\circ - 45^\circ = 55^\circ$. Odgovor $125^\circ$ je vsota znanih kotov, ki je nismo odšteli od $180^\circ$.

? Enakokraki trikotnik ima kot ob vrhu $50^\circ$. Koliko meri vsak kot ob osnovnici?
- $130^\circ$
- $50^\circ$
+ $65^\circ$
> Kota ob osnovnici sta enaka in skupaj merita $180^\circ - 50^\circ = 130^\circ$, zato je vsak $130^\circ : 2 = 65^\circ$.

? V trikotniku $ABC$ je $\alpha = 30^\circ$ in $\beta = 85^\circ$. Koliko meri zunanji kot pri oglišču $C$?
- $65^\circ$
- $55^\circ$
+ $115^\circ$
- $150^\circ$
> Zunanji kot pri $C$ je vsota nesosednjih notranjih kotov: $30^\circ + 85^\circ = 115^\circ$. Preverimo: $\gamma = 65^\circ$, zato je $\gamma' = 180^\circ - 65^\circ = 115^\circ$. Odgovor $65^\circ$ je notranji kot $\gamma$.
