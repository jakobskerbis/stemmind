# Stroški AI na učenca

Ocena: `node scripts/ocena-stroska.js` (z `--db` še dejanska poraba iz `data/stemmind.db`). Skript ne kliče modela. Cene (oktober 2026, USD na milijon žetonov): Haiku 5.5 0,10 vhod / 0,50 izhod / 0,01 branje predpomnilnika; Opus 5.5 4 / 20 / 0,20.

## Kje je bil strošek

En odgovor Haikuja stane okoli 0,0004 €, en odgovor Opusa okoli 0,07 €, torej skoraj 200-krat več. Pri tipičnem učencu je bila večina stroška v gumbu »Razloži podrobneje«, pri programu Tekmovanja pa je vsak odgovor šel prek Opusa.

| Učenec na mesec | Prej | Zdaj |
|---|---|---|
| Tipičen (20 dni × 10 vprašanj, 10 % podrobne razlage) | 1,51 € | 0,82 € |
| Zelo aktiven (25 dni × 30 vprašanj, 25 % podrobne razlage) | 13,72 € | 0,98 € |
| Tekmovalec (20 dni × 15 vprašanj) | 21,58 € | 0,86 € |

Številke so ocena iz velikosti prompta in predpostavk o dolžini odgovorov (v skriptu). Prave številke pokaže Nastavitve → Poraba AI, ko aplikacija teče s ključem.

## Kaj je spremenjeno

- **»Razloži podrobneje« je vedno na voljo (tudi po ponovni razlagi), čim ceneje** (j, 2026-10-29): prva ponovna razlaga je Haiku z več razmisleka (`think`, novi pristop iz prompta, predpomnjena zgodovina), Opus šele ob drugi prošnji zapored (števec `conversations.deep`, običajno sporočilo ga ponastavi). Prej je vsak pritisk šel k Opusu.
- **Opus samo za ponovno prošnjo zapored**, pri `effort: low` (druga razlaga snovi ne potrebuje dolgega razmišljanja), z zadnjimi 3 izmenjavami namesto 10 in z enourno hrambo stalnega dela prompta v predpomnilniku.
- **Tekmovanja**: Haiku z več razmisleka (`effort: high`); Opus na gumb. `STEMMIND_COMPETITION_DEEP=1` vrne prejšnje vedenje.
- **Omejitve na učenca**: Opus največ 5× na dan; nad 1 $ na mesec podrobne razlage pripravi Haiku z več razmisleka (učenec vidi kratko opombo); nad 3 $ na mesec inštruktor počaka do 1. v mesecu, Vadnica deluje naprej.
- **Brez klica modela**: pri »Vprašaj STEMMind« iz Vadnice prvi odgovor sestavi koda iz generatorja (podatki, iskano, namig, vprašanje; formula ostane skrita). Začetek teme z učne poti (»Začniva s temo …«) se shrani in ponovno uporabi pri učencih z enakimi nastavitvami in šibkimi točkami.
- **Krajši odgovori**: zgornja meja žetonov po načinu (3000, lahki način 1200, Opus 6000) namesto 8000 za vse.
- **Branje rokopisa in anketa**: brez razmišljanja (samo prepis oz. kratko vprašanje).
- **Prompt**: razlage možnih vrednosti nastavitev so v stalnem (predpomnjenem) delu, v delu za učenca ostanejo samo vrednosti.
- **Pregled**: Nastavitve → Poraba AI kaže strošek v €, povprečje na učenca, na odgovor, oceno za mesec, število odgovorov brez AI in porabo po modelih. Starš v zavihku Račun vidi delež mesečne omejitve za vsakega otroka (brez zneskov).

## Števec porabe za skrbnika (2026-10-29)

- V zgornji vrstici je števec porabe AI (€ danes) za vse profile. Vidi ga samo skrbnik: na računalniku, kjer teče STEMMind, ali račun z e-naslovom v `STEMMIND_ADMIN_EMAILS`. Na računalniku lahko v števcu z gumbom »Pokaži števec tudi na mojem telefonu« svoj račun označiš kot skrbniški.
- Prek povezave za telefon (ngrok) ga drugi ne vidijo; `/api/usage` jim vrne 403.
- Klik odpre pregled: danes, ta mesec, ocena za mesec, po profilih z vrstico do mesečne meje, ter predlog meje in cene (`server/advice.js`). Predlog ničesar ne spremeni sam: meja je `STEMMIND_STUDENT_MONTHLY_USD`, cena `server/accounts/plans.js`.
- Pravila predloga: najprej kakovost (če je ≥ 5 % učencev pri meji ali blizu nje, dvigni mejo do višine, pri kateri učenec še prinese 4 €), nato dobiček (cilj 6 € na naročnino). Cena po zanimanju iz končanih 7-dnevnih preizkusov (vsaj 10): ≥ 35 % naročnin → preizkusi +20 % za nove, ≤ 8 % → najprej izboljšaj prvi teden.
