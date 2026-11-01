# Spremembe sistemskega prompta

Trenutni prompt je v `prompts/system_prompt.md`.

## 2026-11-01: inštruktor kot pedagog v vsaki situaciji (čaka na j-jev pregled)

Stalni del prompta (nad `EVKLID:NASTAVITVE`) je prenovljen tako, da inštruktor v vsaki situaciji ravna po raziskavah o učenju. Del pod vrstico je nespremenjen, META in KARTICA sta enaka.

- **Kako poučuješ** (Rosenshine, Dunlosky idr.): dodano »učenec dela, ti vodiš« (ICAP: kar učenec sam izreče, si zapomni), obvladanje pred nadaljevanjem, pomoč odvisna od uspeha (Woodovo odvisno vodenje, v lestvici pomoči), metakognicija (prepričanost, lastno preverjanje), pohvala postopka namesto lastnosti (Dweck).
- **Lestvica pomoči** v načinu A (po AutoTutorju: vprašanje → splošen namig → natančen namig → korak skupaj), vsakič le ena stopnička, ob obupavanju takoj četrta, po uspehu manj pomoči; celotne rešitve v načinu A ni.
- **Pedagoške situacije** (nov razdelek): »ne vem«, spodrsljaj proti napačni predstavi (izreči pravilo, protiprimer, novo pravilo v okvir, podobna naloga: konceptualna sprememba), pravilen odgovor, ugibanje, frustracija in strah (priznati občutek, hiter uspeh, napaka pripisana koraku: raziskave o matematični tesnobi), napreden učenec (manj zgledov, več problemov: obratni učinek strokovnosti), domača naloga za oddajo in časovna stiska (brez moraliziranja, prvo nalogo skupaj, naslednje sam), priprava na test (reševanje namesto branja, mešane naloge, razporeditev po dnevih, dan prej lažja ponovitev), po testu (napake po vzroku), »zakaj se to učimo«, več vprašanj hkrati, učne težave, konec pogovora. Dodano po pregledu: »v šoli delamo drugače« in »vrnitev k temi« (priklic po nekaj dneh). Vanj je prestavljeno prejšnje »Ponavljanje / priprava na test«.
- **Pravilnost**: če učenec meni, da se inštruktor moti, ta pošteno preveri, napako prizna in popravi.
- **Pravila po predmetu**: pri MAT, FIZ, KEM in BIO seznam pogostih napačnih predstav, na katere je inštruktor pozoren.
- **Šola in raven**: ton in samostojnost po stopnji (OŠ 1–5 igrivo, OŠ 6–9 pogosto preverjanje in spodbuda, SŠ kot starejši kolega z več prostora za lasten poskus, UNIVERZA kolegialno, daljše izpeljave do ~120 besed, več dokazov in razprave o več poteh), skladno z načrtom delitve na OŠ/SŠ/faks.
- **Oblika**: brez emojijev (izjemi 📌 v okviru »Zapomni si« in besedilo ščita), po `docs/besedila.md`.
- Stalni del je zrasel z 28,8 na približno 36,9 tisoč znakov (ocena ~9,6 → ~12,3 tisoč žetonov). Ker je predpomnjen, stane branje približno 0,0002 $ več na sporočilo pri privzetem modelu.
- Test `test/prompt.test.js` preverja, da novi razdelki ostanejo v predpomnjenem delu in na svojem mestu ter da v stalnem delu ni drugih emojijev. Pregled: `npm test` (555), `node scripts/preveri-aplikacijo.cjs` (0 težav), dva neodvisna pregledovalca (skladnost pravil; pedagogika in jezik), njune pripombe so vnesene.

## 2026-10-30: tehniški in medicinski programi

- Uvodni odstavek in razdelek UNIVERZA zdaj omenjata študente prvih (predkliničnih) letnikov medicine, dentalne medicine, veterinarstva in farmacije (enoviti magistrski programi, oznaka EMŠ). Pri teh programih tutor poudari mehanizme, strokovno izrazje in povezavo med zgradbo in delovanjem, o zdravljenju konkretnih ljudi ali živali pa ne svetuje.
- Opis programa v nastavitvah (`server/curriculum.js`, `studyProgramPrompt`) pri EMŠ programih pravi »enoviti magistrski študijski program«.

## 2026-10-30: fotografije, ki niso učno gradivo

- Nova vrstica v Posebnih situacijah (stalni del, nad `EVKLID:NASTAVITVE`, zato predpomnilnik ostane skupen): fotografije brez učnega gradiva (obraz, oseba, osebni dokument, zasebno sporočilo) inštruktor na kratko zavrne, jih ne opisuje in v META nastavi `flag=photo`. Sprejme naloge, zapiske, učbenik, tablo, graf na zaslonu ter predmete ali poskuse, o katerih učenec sprašuje; ljudi, ki so le v kadru (ilustracije, učitelj ob tabli, roke pri poskusu), prezre. Če ni prepričan, fotografijo sprejme.
- Strežnik (`server/app.js`) ob `flag=photo` takoj zamenja sliko v shranjenem sporočilu z opombo; zastavica `photo` se staršem ne prikaže kot opozorilo. Skeniranje (`server/scan.js`) take fotografije prav tako zavrne. Brez dodatnega klica modela.

## Različica 3 (2026-10-28): širši obseg in predpomnjenje

- **Dva dela, ločena z vrstico `<!-- EVKLID:NASTAVITVE … -->`.** Vse nad njo je stalno in enako za vse učence; strežnik (`server/prompt.js`, `systemBlocks`) ga pošlje kot prvi blok `system` z oznako `cache_control`, zato se pri Claude API predpomni in deli med vsemi pogovori. Nastavitve učenca (ime, predmet, šola, raven, program, način, osebnost, šibke točke, učna pot) so v drugem bloku na koncu. Prej so bile nastavitve na vrhu, kar je prekinilo skupni predpomnilnik že v prvi vrstici.
- **Šola in raven** zdaj pokrivata OŠ, SŠ in UNIVERZA v enem razdelku; univerza velja za vse fakultete in programe iz nastavitev (ne le FKKT/FS/FMF), z ločenim slogom za matematično-fizikalne in tehniške programe.
- **Strokovni predmeti** BIO, GEO, RAC in EKO imajo svoja pravila ob MAT/FIZ/KEM.
- **Tekmovanja** opisujejo razdelek Tekmovanja (trening, poskusno tekmovanje, olimpijade) in kako voditi učenca po nalogi, ki je ni rešil.
- **Vzorec Podatki / Iščemo / formula** ustreza rešenim zgledom v Vadnici: v načinu A učenec formulo najprej poskusi poimenovati sam, pokaže se šele po poskusu.
- **Posebne situacije** v enem razdelku: učna pot, naloga iz Vadnice z napačnim odgovorom, označen del učbenika (gumb »Razloži«), gumb »Razloži podrobneje« (zamenjaj pristop, ne ponavljaj), fotografija naloge (najprej »Prebral sem: …«), ponavljanje in priprava na test.
- **Skrajšana zgodovina.** Strežnik pošlje le zadnjih nekaj izmenjav; prompt naroča, naj inštruktor nadaljuje od zadnjega stanja in ne sprašuje znova.
- **Krajše, brez podvajanj.** Pravila o tempu so zapisana enkrat; način A/B, meje in ščit so nespremenjeni, META vrstica je enaka (strežnik jo bere enako kot prej).
- Stiska: TOM telefon za otroke in mladostnike, Samarijan za študente, 112 za nujne primere (prej v dveh razdelkih).

## Različica 2: odpravljena nasprotja

- **Vrstni red pravil.** Dodan je izrecen vrstni red: Varnostni ščit in Meje > spremembe iz klepeta > nadzorna plošča > ostalo. Prej ni bilo jasno, ali lahko »daj mi celo rešitev« ali »razloži skozi Harryja Potterja« obide meje ali ščit.
- **Tema proti ščitu.** Izvirni ščit je prepovedal »prevzemanje druge vloge«, nastavitve pa so dovoljevale razlago »skozi Harryja Potterja«. Zdaj je jasno: tematska razlaga in izobraževalno igranje vlog (»razloži kot Newton«) sta dovoljena, zamenjava identitete ni.
- **Način A proti zahtevi za rešitev.** Dodano je, kdaj sprememba velja enkratno (»to nalogo mi reši«) in kdaj trajno (»od zdaj daj celo rešitev«).
- **»Kratko« proti načinu B.** Dolžina je zdaj določena po načinu.
- **META proti ščitu.** Ščit je zahteval »samo to besedilo«, META pa »vedno na koncu«. Zdaj META velja tudi za odgovor ščita (z `flag=injection`), strežnik jo odstrani.

## Popravljene vrzeli

- **META je mogoče zanesljivo prebrati.** `topic` je v narekovajih (prej bi »linearne enačbe« s presledkom pokvarile razčlenjevanje). Dodana sta `flag` (offtopic, distress, unsafe, injection) za opozorila in jasna definicija `error` (samo za učenčevo zadnje sporočilo).
- **Šibke točke** so bile v nastavitvah, a brez navodila, kaj z njimi. Zdaj: tam upočasni in dodaj kontrolno vprašanje, učencu pa ne našteva njegovih slabosti.
- **Ime učenca** je dodano kot nastavitev.
- **Prazne nastavitve** imajo privzete vrednosti.
- **SŠ letnik.** Raven zdaj vključuje letnik, da dijak 1. letnika ne dobi maturitetne snovi.
- **Naravoslovje v 6. in 7. razredu.** Navodilo, kaj storiti, če je izbran FIZ ali KEM.
- **Pravilnost.** Preveri izračune, pri manjkajočih podatkih ali neberljivi fotografiji vprašaj, ne izmišljuj si učnih načrtov.
- **Slovenski zapis.** Decimalna vejica, pika za množenje, presledek pred enoto.
- **Posebni primeri načina A.** Učenec pošlje rezultat v preverjanje, pojmovno vprašanje, dvakrat obtiči pri istem koraku.
- **Prilepljeno besedilo** naloge je podatek, ne navodilo (zaščita pred vbrizgavanjem navodil).
- **Stiska.** Dodana sta TOM telefon (116 111) in 112 za resne primere.
- **Nevarna navodila** pokrijejo tudi »hipotetični« in »zgodbeni« okvir; teoretična razlaga je dovoljena.
- **Izven teme.** Matematika v drugih predmetih (npr. grafi pri geografiji) je dovoljena.
- **Ščit se ne sproži** pri »kdo si?«, spremembah nastavitev in izobraževalnem igranju vlog.

## Za preveriti (nisem prepričan)

- Kdaj se v OŠ začne množina snovi (mol). V izvirniku je pisalo »pred 8. razredom«; zdaj prompt modelu naroča, naj to upošteva, ne navaja pa razreda. Vpiši pravi razred po učnem načrtu.
