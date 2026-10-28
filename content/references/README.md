# Referenčni material za fakultetne predmete

Študent fakultete v Učbeniku → **Moj študij** → **Referenčni material** vidi pri vsakem predmetu svojega
programa seznam prosto in zakonito dostopnih virov: odprte učbenike, zapiske predavanj, posnetke, zbirke nalog
in spletne tečaje. Aplikacija samo pokaže povezave; nič se ne prenaša in nič ne stane.

## Datoteke

Vsaka datoteka `*.json` v tej mapi ima obliko:

```json
{
  "themes": {
    "kem-organska": {
      "title": "Organska kemija",
      "items": [
        {
          "title": "Organic Chemistry",
          "url": "https://openstax.org/details/books/organic-chemistry",
          "source": "OpenStax",
          "author": "John McMurry",
          "lang": "en",
          "type": "ucbenik",
          "desc": "En stavek v slovenščini: kaj študent tam najde.",
          "license": "CC BY-NC-SA 4.0"
        }
      ]
    }
  },
  "courses": { "UNI-ULFKKT-ORG1": ["kem-organska"] },
  "courseItems": { "UNI-ULFKKT-ORG1": [] }
}
```

- `themes`: tematska področja; id ima predpono skupine (`mat-`, `rac-`, `fiz-`, `kem-`, `bio-`, `geo-`, `eko-`).
- `courses`: predmet (ključ poti `UNI-…` iz `server/university-data.js`) → 1–3 teme.
- `courseItems`: gradivo, objavljeno prav za ta predmet (skripta fakultete, e-knjiga za predmet). Prikaže se prvo,
  z oznako »Gradivo fakultete«.
- `type`: `ucbenik`, `zapiski`, `video`, `naloge`, `tecaj` ali `prirocnik`.
- `lang`: koda jezika (`sl`, `en`, `hr` …). `license`: kot piše na strani vira (npr. `CC BY 4.0`); gradivo brez
  odprte licence, ki ga založnik uradno ponuja brezplačno, ima `prost dostop`.

## Pravila

1. Samo zakoniti, prosto dostopni viri na uradnih straneh založnikov, univerz, fakultet ali avtorjev.
   Nikoli piratske knjižnice, naloženi tuji PDF-ji (Scribd, Studocu …) ali vsebine za plačilo/prijavo.
2. Vsaka povezava mora delovati: `node scripts/preveri-reference.js` (curl, HTTP 200). Pred objavo in občasno
   (povezave se sčasoma spremenijo).
3. Nobenega vira ne dodaj iz spomina: naslov, avtor in licenca morajo biti prepisani s strani vira.
4. Slovenski viri imajo prednost (Založba UL, Univerzitetna založba UM, Repozitorij UL, DKUM, dLib, fakultete).

Zbrano 28. 10. 2026 (spletne knjižnice: OpenStax, LibreTexts, MIT OpenCourseWare, DOAB/OAPEN, Založba UL,
Univerzitetna založba UM, DKUM, Repozitorij UL, dLib, strani fakultet in drugo). Teste za obliko in pokritost
ima `test/references.test.js`.
