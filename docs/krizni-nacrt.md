# Krizni načrt: ko se zgodi kaj neljubega

Celoten načrt (vloge, stopnje, časovnica, pripravljena sporočila za omrežja, starše, učitelje in medije):
[Evklid – krizni načrt za neljube dogodke](https://claude.ai/artifact/SDR71FXmRVsb6T5YzzQwhC).
Dogodek javi v projektni niti »Pripravi krizni načrt za neljube dogodke«. Javne objave potrdi samo j.

## Orodja v aplikaciji

- **Prijavi napako** pod vsakim odgovorom inštruktorja: učenec izbere razlog (napačen odgovor, neprimerna
  vsebina, drugo) in po želji napiše, kaj bi moralo pisati. Prijava se shrani v tabelo `message_reports`
  in odgovor se takoj izbriše iz predpomnilnika (`answer_cache`), da ga ne dobi noben drug učenec.
  Seznam: `GET /api/reports` (samo na računalniku, kjer teče Evklid).
- **Koda sporočila** (npr. `#00YA`) pod vsakim odgovorom. Če kroži posnetek zaslona, s kodo takoj najdemo
  sporočilo v bazi; če ga ni, je posnetek ponarejen ali iz druge aplikacije.
- **Opozorilo** pod poljem za pisanje: »Evklid se lahko zmoti. Pomembne rezultate preveri.«
  (preglednost po AI Act, čl. 50).
- **Stikalo** `EVKLID_CHAT_OFF=1` v `.env` (nato ponovni zagon): klepet z inštruktorjem je izklopljen za
  vse in pokaže obvestilo; Vadnica, učbenik in igre delujejo naprej.

## Ukazi

```
node scripts/najdi-sporocilo.js "#00YA"            # sporočilo s posnetka, pogovor okoli njega, oznake, predpomnilnik
node scripts/najdi-sporocilo.js --besedilo "= 54"  # iskanje po delu besedila odgovora
node scripts/najdi-sporocilo.js --prijave          # zadnje prijave napak
node scripts/najdi-sporocilo.js --odstrani "#00YA" # odstrani odgovor iz predpomnilnika
```

Ukaz samo bere bazo (razen `--odstrani`). Pregleda se samo pogovor, ki je povezan z dogodkom.

Druga stikala za nujne primere: `EVKLID_ANSWER_CACHE=0` (brez ponovne uporabe odgovorov),
`EVKLID_FREE_POOL_USD=0` (brez AI za brezplačne učence), `EVKLID_MODEL` (večji model inštruktorja).
