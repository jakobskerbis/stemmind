# Lekcije učbenika

Vsaka tema učne poti ima lahko lekcijo v `content/lessons/<pot>/<slug-teme>.md`,
npr. `MAT-OS-8/pitagorov-izrek.md`. Id teme (pot + slug) je v `server/curriculum-data.js`
oz. se izpiše z `node scripts/generate-lessons.js --list`.

Lekcije se berejo brez stroškov AI. Datoteko lahko učitelj popravi kar tukaj;
aplikacija spremembo pobere ob naslednjem odprtju lekcije.

## Oblika

```markdown
---
stanje: osnutek        # osnutek | pregledano (osnutek pokaže opozorilo učencu)
demo: pitagora         # neobvezno: lastna demonstracija (glej DEMOS v server/textbook.js)
phet: pendulum-lab     # neobvezno: simulacija PhET (ime mape na phet.colorado.edu)
avtor: učitelj / AI    # neobvezno, za evidenco
---

## Zakaj se tega učimo
Navezava na znano in zakaj je tema uporabna.

## Razlaga
Definicije in razlaga po korakih.

## Rešeni primeri
### Primer 1 (lažji)
### Primer 2
### Primer 3 (težji)

## Pogoste napake

## Povzetek
Nekaj vrstic. Tutor ga dobi v kontekst, da razlaga skladno z učbenikom.

## Drugače: Na sliki
## Drugače: Iz vsakdanjega življenja
## Drugače: Korak za korakom s številkami
## Drugače: Bolj natančno
Razdelki, ki se začnejo z »Drugače:«, se pokažejo pod gumbom »Razloži drugače«.

## Preveri se
? Vprašanje (Markdown in $LaTeX$ sta dovoljena)
- napačen odgovor
+ pravilen odgovor
- napačen odgovor
> Pojasnilo, ki se pokaže po pravilnem odgovoru.
```

Demonstracija se pokaže za razdelkom »Rešeni primeri«. Formule piši v LaTeX z
decimalno vejico (`$3{,}5$`).
