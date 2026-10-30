# Tedenske posodobitve kozmetike

j, 30. 10. 2026: »naj kozmetika in sorodni aspekti dobivajo tedenske update«, usklajeno s povratnimi
informacijami uporabnikov. Nove vrste iger vsak teden doda nit IGRE (docs/igre-smernice.md), dve uri za to
posodobitvijo. Ta dokument velja za avatarje, trgovino, Zbirke in lestvice.

## Kdaj

Vsako sredo ob 02:13 UTC (samodejni tedenski zagon v niti »kozmetika«). Igre pridejo okoli 04:13 UTC.

## Iz česa izhajamo

1. **Želje otrok** iz trgovine (»Kaj si želiš v trgovini?«). Shranijo se v tabelo `feedback` z `kind = "cosmetics"`
   in v `data/povratne-informacije.json` na računalniku, kjer teče Evklid. Povzetek ima razdelek »Želje za trgovino
   z avatarji« (`/api/feedback/export?format=md`, samo lokalno). Želje so prosto besedilo: nikoli jih ne objavi
   in ne prepiši imen v repozitorij.
2. **Kaj otroci nosijo in kupujejo**: `data/kozmetika-trendi.json` (strežnik ga zapiše ob zagonu in vsakih 6 h)
   ali `GET /api/avatar/trends`. Samo števila, pod 3 učenci nič.
3. Splošne povratne informacije (docs/povratne-informacije.md), kadar se dotikajo avatarja, lig ali Zbirk.

Če podatkov ni (j-jev računalnik ni dosegljiv ali še ni želja), naredi posodobitev po spodnjem ravnovesju in
v poročilu povej, da podatkov ni bilo.

## Kaj dodamo vsak teden

- 4 do 6 novih predmetov, od tega:
  - vsaj 2 za kovance v trgovini (public/avatar.js, `it(...)` + risba; cena določi redkost),
  - vsaj 1 za znanje ali igre (public/zbirke.js: Pot znanja, zbirka predmeta ali `igre`; nikoli cena),
  - kadar želje to kažejo, nov lik (predal `kind`, odklene se samo z igrami).
- Če se izide, še eno manjšo izboljšavo (npr. nova kombinacija, popravek risbe, ki so jo otroci omenili).
- Vsak nov predmet dobi vrstico v `ADDED` (public/avatar.js) z datumom posodobitve: teden dni nosi oznako
  »Novo« in je v vrstici »Novo ta teden« v trgovini.

## Pravila, ki ostanejo

- Brez naključja (škatle presenečenja), brez časovno omejene ponudbe in odštevanja, brez pravega denarja.
  Predmet, ki pride, ostane za vedno (EU pravila za otroke, dokument o kozmetiki).
- Kozmični in večni predmeti samo za znanje in igre. Mitični v trgovini nad 1000 kovancev.
- Izvirne risbe, brez znamk in likov iz drugih iger. Risba v viewBox 0 0 100 100, unikatni `id` s `${u}`.
- Vsako novo besedilo vmesnika gre v public/i18n/sl.js in vseh 32 public/i18n/ui/*.json (imena predmetov
  imajo `sl` in `en` kar v vrstici).
- Trikratni pregled (docs/pregled.md): `npm test` + `node scripts/preveri-aplikacijo.cjs`, nato pregledovalec.
  Za pogled pokaži slike novih predmetov (Playwright) v svetli in temni temi.
- Največ 2 agenta hkrati (docs/token-rules.md).

## Poročilo j-ju

Kratko, v slovenščini: kaj je novega (s sliko), katere želje otrok so bile upoštevane in koliko jih je bilo.
