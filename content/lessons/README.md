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
Besedilo naloge (vsi podatki so v besedilu).

**Podatki:** $v = 9\,\mathrm{m/s}$, $t = 45\,\mathrm{s}$
**Iščemo:** pot $s$

:::formula
$s = v \cdot t$
:::

**Rešitev:**

1. $s = 9\,\mathrm{m/s} \cdot 45\,\mathrm{s} = 405\,\mathrm{m}$
2. Odgovor: kolesar prevozi $405\,\mathrm{m}$.

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

Pravila za rešene primere (vsak `### Primer`):

- **Podatki:** vedno izpiši *vse* podatke iz besedila naloge (z oznakami in
  enotami), tudi če je naloga brez računanja (napiši, kaj je dano).
- **Iščemo:** kaj naloga sprašuje.
- Blok `:::formula … :::` z formulo oziroma pravilom, ki ga potrebujemo. V
  aplikaciji je skrit za gumbom »Pokaži formulo«, da učenec najprej poskusi
  sam; v PDF-ju je izpisan. Vsebina bloka je navaden Markdown z LaTeX.
- **Rešitev:** koraki z vmesnimi rezultati in odgovor v stavku.

Obliko preveriš z `node scripts/check-lesson.js content/lessons/<pot>/<slug>.md`
(brez argumentov preveri vse lekcije). Simulacijo v besedilu omeni kot
»interaktivna simulacija spodaj«, ne z imenom ponudnika.

Demonstracija se pokaže za razdelkom »Rešeni primeri«. Formule piši v LaTeX z
decimalno vejico (`$3{,}5$`).
