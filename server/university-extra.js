// Dodatne naravoslovne fakultete in strokovni predmeti.
// Ustvarjeno s scripts/uvozi-fakultete.py iz zbranih predmetnikov (docs/predmetniki-naravoslovne-fakultete.md).
// Predmet: [ime, predmet, [imena blokov iz university-data.js], [[sklop, ["Tema | cilji", …]], …]].
// Popravke lahko vnašaš kar tukaj.
export const EXTRA_FACULTIES = [
  {
    "id": "UL-BF",
    "name": "UL Biotehniška fakulteta",
    "short": "UL BF",
    "courses": {
      "ABIOCEL": [
        "Biologija celice in histologija",
        "BIO",
        [],
        [
          [
            "Zgradba celice",
            [
              "Prokariontska in evkariontska celica | primerjava zgradbe, velikost celic, endosimbiontska teorija",
              "Biološke membrane | model tekočega mozaika, membranski transport, osmoza",
              "Celični organeli | jedro, endoplazemski retikulum, Golgijev aparat, lizosomi, mitohondriji, kloroplasti"
            ]
          ],
          [
            "Celični procesi",
            [
              "Citoskelet in gibanje celic | mikrotubuli, aktinski filamenti, intermediarni filamenti",
              "Celični cikel in mitoza | faze celičnega cikla, kontrolne točke, citokineza",
              "Mejoza | rekombinacija, redukcijska delitev, pomen za spolno razmnoževanje",
              "Celična signalizacija in apoptoza | receptorji, sekundarni obveščevalci, programirana celična smrt"
            ]
          ],
          [
            "Histologija",
            [
              "Epitelno in vezivno tkivo | tipi epitelov, zunajcelični matriks, hrustanec, kost",
              "Mišično in živčno tkivo | gladka, progasta in srčna mišičnina, nevroni in glija",
              "Mikroskopske metode | svetlobna in elektronska mikroskopija, priprava preparatov, barvanje"
            ]
          ]
        ]
      ],
      "AFIZ": [
        "Fizika",
        "FIZ",
        [
          "FIZ_1",
          "FIZ_2"
        ],
        []
      ],
      "AMAT": [
        "Izbrana poglavja iz matematike",
        "MAT",
        [
          "MAT_1"
        ],
        [
          [
            "Diferencialne enačbe",
            [
              "Diferencialne enačbe prvega reda | ločljive in linearne enačbe, začetni problem, modeli rasti in razpada"
            ]
          ]
        ]
      ],
      "AMIKRO": [
        "Mikrobiologija",
        "BIO",
        [],
        [
          [
            "Uvod in zgradba mikroorganizmov",
            [
              "Zgodovina in področja mikrobiologije | Pasteur, Koch, Kochovi postulati",
              "Zgradba prokariontske celice | celična stena po Gramu, membrana, bički, endospore"
            ]
          ],
          [
            "Rast in metabolizem",
            [
              "Mikrobna rast | rastna krivulja, generacijski čas, vplivi okolja",
              "Mikrobni metabolizem | fermentacija, aerobno in anaerobno dihanje, kemolitotrofija, fotosinteza",
              "Nadzor mikrobne rasti | sterilizacija, dezinfekcija, antibiotiki in odpornost"
            ]
          ],
          [
            "Genetika mikroorganizmov",
            [
              "Genetika prokariontov | mutacije, konjugacija, transformacija, transdukcija, plazmidi"
            ]
          ],
          [
            "Raznolikost in ekologija",
            [
              "Mikrobna raznolikost | bakterije, arheje, glive, protisti, filogenija na osnovi 16S rRNA",
              "Virusi | zgradba, razmnoževanje, bakteriofagi",
              "Mikrobna ekologija | biogeokemijski cikli, simbioze, mikrobiom"
            ]
          ]
        ]
      ],
      "ASPLKEM": [
        "Splošna kemija",
        "KEM",
        [
          "SPL_KEM"
        ],
        []
      ],
      "AANAT": [
        "Anatomija človeka",
        "BIO",
        [],
        [
          [
            "Uvod in gibalni sistem",
            [
              "Anatomsko izrazoslovje | ravnine, smeri, telesne votline",
              "Okostje in sklepi | zgradba kosti, aksialni in apendikularni skelet, tipi sklepov",
              "Skeletne mišice | glavne mišične skupine, izvor in narastišče"
            ]
          ],
          [
            "Notranji organi",
            [
              "Srce in ožilje | zgradba srca, krvni obtok, glavne arterije in vene",
              "Dihala | zgornja in spodnja dihalna pot, pljuča",
              "Prebavila | prebavna cev, jetra, trebušna slinavka"
            ]
          ],
          [
            "Sečila, spolovila in uravnavanje",
            [
              "Sečila in spolovila | ledvice, sečevod, moški in ženski spolni organi",
              "Živčevje | osrednje in obkrajno živčevje, možgani, hrbtenjača",
              "Žleze z notranjim izločanjem in čutila | hipofiza, ščitnica, nadledvična žleza, oko, uho"
            ]
          ]
        ]
      ],
      "AMIKROPR": [
        "Mikrobiologija – praktikum",
        "BIO",
        [],
        [
          [
            "Varno delo in aseptika",
            [
              "Varno delo v mikrobiološkem laboratoriju | biološka varnost, aseptične tehnike, odpadki",
              "Gojišča in sterilizacija | priprava gojišč, avtoklaviranje, selektivna in diferencialna gojišča"
            ]
          ],
          [
            "Osamitev in opazovanje",
            [
              "Izolacija čistih kultur | razmaz, precepljanje, kolonije",
              "Mikroskopiranje in barvanje | barvanje po Gramu, barvanje endospor, nativni preparat"
            ]
          ],
          [
            "Kvantifikacija in identifikacija",
            [
              "Določanje števila mikroorganizmov | redčitvena vrsta, štetje kolonij (CFU), optična gostota",
              "Biokemijska identifikacija bakterij | katalaza, oksidaza, fermentacijski testi",
              "Protimikrobna občutljivost | difuzijski test, minimalna inhibitorna koncentracija"
            ]
          ]
        ]
      ],
      "AORGKEM": [
        "Organska kemija",
        "KEM",
        [
          "ORG_1_2"
        ],
        []
      ],
      "ASPLBOT": [
        "Splošna botanika",
        "BIO",
        [],
        [
          [
            "Rastlinska celica",
            [
              "Rastlinska celica | celična stena, vakuola, plastidi",
              "Celični cikel in delitev rastlinske celice | mitoza, fragmoplast, nastanek celične plošče"
            ]
          ],
          [
            "Tkiva",
            [
              "Tvorna tkiva | apikalni in lateralni meristemi, kambij",
              "Trajna tkiva | krovno, osnovno, mehansko in prevajalno tkivo, ksilem in floem"
            ]
          ],
          [
            "Organi",
            [
              "Korenina | primarna in sekundarna zgradba, metamorfoze",
              "Steblo | primarna zgradba, sekundarna rast, les in skorja",
              "List | zgradba lista, listne reže, prilagoditve na okolje"
            ]
          ],
          [
            "Razmnoževanje",
            [
              "Razmnoževanje rastlin | menjava generacij, cvet, opraševanje, dvojna oploditev",
              "Seme in plod | nastanek semena, kalitev, tipi plodov"
            ]
          ]
        ]
      ],
      "ASPLZOO": [
        "Splošna zoologija",
        "BIO",
        [],
        [
          [
            "Osnove",
            [
              "Načela evolucije in sistematike živali | naravni izbor, filogenija, taksonomske kategorije",
              "Telesna zgradba živali | simetrija, zarodni listi, telesna votlina, segmentacija"
            ]
          ],
          [
            "Razvoj",
            [
              "Razmnoževanje in razvoj živali | gametogeneza, oploditev, brazdanje, gastrulacija"
            ]
          ],
          [
            "Organski sistemi",
            [
              "Gibala in ogrodje | hidrostatski, zunanji in notranji skelet, mišičje",
              "Prebavila in dihala | prebava, škrge, vzdušnice, pljuča",
              "Obtočila in izločala | odprt in zaprt krvni obtok, nefridiji, ledvice, osmoregulacija",
              "Živčevje in čutila | razvoj živčevja pri živalih, čutilne celice"
            ]
          ],
          [
            "Raznolikost živali",
            [
              "Pregled živalskih debel | spužve, ožigalkarji, kolobarniki, mehkužci, členonožci, iglokožci, strunarji"
            ]
          ]
        ]
      ],
      "ABIOKEM": [
        "Biokemija",
        "KEM",
        [
          "BIOKEM"
        ],
        [
          [
            "Ogljikovi hidrati, lipidi in presnova",
            [
              "Ogljikovi hidrati in lipidi | zgradba, vloga v celici",
              "Presnova maščobnih kislin | β-oksidacija, sinteza maščobnih kislin, ketonska telesa",
              "Presnova aminokislin | transaminacija, cikel sečnine",
              "Regulacija presnove | hormonska regulacija, glukoneogeneza, presnova glikogena"
            ]
          ]
        ]
      ],
      "AGEN": [
        "Genetika",
        "BIO",
        [],
        [
          [
            "Klasična genetika",
            [
              "Mendlova dedovanja | monohibridno in dihibridno križanje, Punnettov kvadrat",
              "Razširitve Mendlove genetike | nepopolna dominanca, kodominanca, multipli aleli, epistaza",
              "Spolno vezano dedovanje | določanje spola, rodovniki, X-vezane lastnosti"
            ]
          ],
          [
            "Kromosomi in kartiranje",
            [
              "Vezani geni in genske karte | rekombinacijska frekvenca, centimorgan, trotočkovno križanje",
              "Kromosomske mutacije | spremembe števila in zgradbe kromosomov, aneuploidija"
            ]
          ],
          [
            "Molekularna genetika",
            [
              "Zgradba genoma | geni, nekodirajoča DNA, organizacija kromatina",
              "Izražanje genov | transkripcija, translacija, genski kod",
              "Uravnavanje izražanja genov | operon lac, transkripcijski dejavniki, epigenetika",
              "Mutacije in popravljanje DNA | točkovne mutacije, mutageni, popravljalni mehanizmi"
            ]
          ],
          [
            "Populacijska in kvantitativna genetika",
            [
              "Populacijska genetika | Hardy-Weinbergovo ravnotežje, frekvence alelov",
              "Kvantitativne lastnosti | poligeno dedovanje, heritabiliteta"
            ]
          ]
        ]
      ],
      "ASISTBOT": [
        "Sistematska botanika",
        "BIO",
        [],
        [
          [
            "Osnove sistematike",
            [
              "Načela sistematike rastlin | taksonomske kategorije, binarna nomenklatura, filogenetska klasifikacija",
              "Določanje rastlin | določevalni ključi, herbarij, morfološki znaki"
            ]
          ],
          [
            "Alge in mahovi",
            [
              "Alge | zelene, rdeče in rjave alge, zgradba steljke, razmnoževanje",
              "Mahovi | jetrenjaki, listnati mahovi, menjava generacij"
            ]
          ],
          [
            "Praprotnice in golosemenke",
            [
              "Praprotnice | lisičjaki, preslice, praproti, razvojni krog",
              "Golosemenke | iglavci, cikasi, ginko, zgradba storžev"
            ]
          ],
          [
            "Kritosemenke",
            [
              "Zgradba cveta in socvetja | cvetna formula in diagram, tipi socvetij",
              "Pomembne družine dvokaličnic | križnice, metuljnice, ustnatice, košarnice, rožnice",
              "Pomembne družine enokaličnic | trave, kukavičevke, lilijevke, ostrice"
            ]
          ]
        ]
      ],
      "AZOONEV": [
        "Zoologija nevretenčarjev",
        "BIO",
        [],
        [
          [
            "Uvod",
            [
              "Filogenija nevretenčarjev | prvoustnice in drugoustnice, Ecdysozoa in Lophotrochozoa",
              "Določanje nevretenčarjev | določevalni ključi, morfološki znaki"
            ]
          ],
          [
            "Nižji nevretenčarji",
            [
              "Spužve in ožigalkarji | zgradba, knidociti, menjava generacij",
              "Ploski in valjasti črvi | zgradba, zajedavski razvojni krogi"
            ]
          ],
          [
            "Mehkužci in kolobarniki",
            [
              "Mehkužci | polži, školjke, glavonožci, zgradba in prilagoditve",
              "Kolobarniki | mnogoščetinci, maloščetinci, pijavke, segmentacija"
            ]
          ],
          [
            "Členonožci in iglokožci",
            [
              "Členonožci | pajkovci, raki, stonoge, eksoskelet in levitev",
              "Žuželke | zgradba, preobrazba, glavni redovi",
              "Iglokožci | petžarna simetrija, vodožilni sistem"
            ]
          ]
        ]
      ],
      "ADIVVRET": [
        "Diverziteta vretenčarjev",
        "BIO",
        [],
        [
          [
            "Strunarji in vretenčarji",
            [
              "Značilnosti strunarjev | horda, škržne reže, plaščarji, kopjaste ribice",
              "Filogenija vretenčarjev | brezčeljustnice, čeljustnice, prehod na kopno"
            ]
          ],
          [
            "Vodni vretenčarji in dvoživke",
            [
              "Ribe | hrustančnice, kostnice, prilagoditve na vodno okolje",
              "Dvoživke | metamorfoza, dihanje, ogroženost"
            ]
          ],
          [
            "Amnioti",
            [
              "Plazilci | amniotsko jajce, termoregulacija, glavne skupine",
              "Ptiči | prilagoditve za letenje, perje, selitve",
              "Sesalci | značilnosti, stočnice, vrečarji, placentalci, glavni redovi"
            ]
          ],
          [
            "Varstvo vretenčarjev",
            [
              "Vretenčarji Slovenije in njihovo varstvo | ogrožene vrste, Natura 2000"
            ]
          ]
        ]
      ],
      "AEKOL": [
        "Ekologija",
        "BIO",
        [],
        [
          [
            "Osnove ekologije",
            [
              "Ekološki dejavniki | abiotski in biotski dejavniki, toleranca, ekološka niša"
            ]
          ],
          [
            "Populacije",
            [
              "Rast populacij | eksponentna in logistična rast, nosilna kapaciteta",
              "Medvrstni odnosi | kompeticija, plenilstvo, parazitizem, mutualizem, Lotka-Volterrove enačbe"
            ]
          ],
          [
            "Združbe in ekosistemi",
            [
              "Združbe | biodiverziteta, indeksi raznolikosti, sukcesija",
              "Pretok energije | prehranjevalne verige, trofične ravni, primarna produkcija",
              "Kroženje snovi | ogljikov, dušikov in fosforjev cikel"
            ]
          ],
          [
            "Biomi in človek",
            [
              "Biomi in vodni ekosistemi | kopenski biomi, jezera, reke, morje",
              "Človek in okolje | podnebne spremembe, onesnaževanje, varstvo narave"
            ]
          ]
        ]
      ],
      "AEVOL": [
        "Evolucija",
        "BIO",
        [],
        [
          [
            "Osnove evolucije",
            [
              "Zgodovina evolucijske misli | Lamarck, Darwin, sodobna sinteza",
              "Dokazi za evolucijo | fosili, homologija, molekularni dokazi"
            ]
          ],
          [
            "Mikroevolucija",
            [
              "Populacijska genetika | Hardy-Weinbergovo ravnotežje, frekvence alelov",
              "Naravni izbor | tipi selekcije, fitnes, prilagoditve",
              "Genski zdrs, mutacije in migracije | učinek ustanovitelja, ozko grlo, genski pretok",
              "Spolna selekcija | intra- in interseksualna selekcija"
            ]
          ],
          [
            "Makroevolucija",
            [
              "Speciacija | koncepti vrste, alopatrična in simpatrična speciacija, izolacijski mehanizmi",
              "Filogenetika | kladistika, filogenetska drevesa, molekularna ura",
              "Zgodovina življenja na Zemlji | izvor življenja, kambrijska eksplozija, množična izumrtja"
            ]
          ]
        ]
      ],
      "AETOL": [
        "Etologija",
        "BIO",
        [],
        [
          [
            "Osnove etologije",
            [
              "Temeljni etološki pojmi | Tinbergenova vprašanja, prirojeno in naučeno vedenje",
              "Fiziologija vedenja | čutila, živčni in hormonski nadzor vedenja"
            ]
          ],
          [
            "Učenje in komunikacija",
            [
              "Učenje | vtisnjenje, klasično in operantno pogojevanje",
              "Komunikacija živali | signali, kemična, zvočna in vidna komunikacija"
            ]
          ],
          [
            "Vedenjska ekologija",
            [
              "Iskanje hrane | optimalno prehranjevanje, teritorialnost",
              "Razmnoževalno vedenje | sistemi parjenja, starševska skrb",
              "Socialno vedenje | altruizem, sorodstvena selekcija, evsocialnost"
            ]
          ]
        ]
      ],
      "AFIZROST": [
        "Fiziologija rastlin",
        "BIO",
        [],
        [
          [
            "Voda in mineralna prehrana",
            [
              "Vodni režim rastlin | vodni potencial, transpiracija, transport po ksilemu",
              "Mineralna prehrana | makro- in mikrohranila, privzem ionov, znaki pomanjkanja"
            ]
          ],
          [
            "Fotosinteza in dihanje",
            [
              "Fotosinteza | svetlobne reakcije, Calvinov cikel, fotorespiracija",
              "Rastline C4 in CAM | prilagoditve, primerjava z rastlinami C3",
              "Celično dihanje rastlin | glikoliza, mitohondrijsko dihanje, alternativna oksidaza",
              "Transport asimilatov | floemski transport, izvor in ponor"
            ]
          ],
          [
            "Rast, razvoj in odzivi",
            [
              "Rastlinski hormoni | avksini, citokinini, giberelini, abscizinska kislina, etilen",
              "Odzivi na svetlobo in tropizmi | fitokromi, fotoperiodizem, fototropizem, gravitropizem",
              "Stres pri rastlinah | suša, mraz, slanost, obrambni odzivi"
            ]
          ]
        ]
      ],
      "AFIZZIV": [
        "Fiziologija živali",
        "BIO",
        [],
        [
          [
            "Vzdražnost in živčevje",
            [
              "Membranski potencial | mirovni potencial, akcijski potencial, ionski kanali",
              "Sinapse in živčni sistem | kemična sinapsa, nevrotransmitorji, refleksni lok",
              "Čutila | receptorji, transdukcija dražljaja"
            ]
          ],
          [
            "Mišice in hormoni",
            [
              "Mišično krčenje | drsenje filamentov, sklopitev vzburjenja in krčenja",
              "Endokrini sistem | hormoni, povratne zanke, hipotalamus in hipofiza"
            ]
          ],
          [
            "Homeostaza",
            [
              "Krvni obtok | delovanje srca, krvni tlak, primerjava med živalmi",
              "Dihanje | izmenjava plinov, transport kisika, hemoglobin",
              "Osmoregulacija in izločanje | delovanje ledvic, dušikovi odpadki",
              "Termoregulacija in metabolizem | endotermija, ektotermija, bazalni metabolizem"
            ]
          ]
        ]
      ],
      "ABIOINF": [
        "Bioinformatika",
        "RAC",
        [],
        [
          [
            "Biološke podatkovne zbirke",
            [
              "Biološke podatkovne zbirke | GenBank, UniProt, PDB, formati zapisa",
              "Iskanje po podatkovnih zbirkah | ključne besede, Entrez, ontologije"
            ]
          ],
          [
            "Poravnave zaporedij",
            [
              "Poravnava parov zaporedij | globalna in lokalna poravnava, substitucijske matrike",
              "Iskanje podobnih zaporedij | BLAST, E-vrednost",
              "Večkratna poravnava | progresivna poravnava, ohranjena mesta"
            ]
          ],
          [
            "Filogenija in genomika",
            [
              "Filogenetska analiza | metode razdalj, največja verjetnost, zanesljivost dreves",
              "Anotacija genomov | iskanje genov, odprti bralni okvirji",
              "Napovedovanje zgradbe proteinov | domene, homologno modeliranje"
            ]
          ]
        ]
      ],
      "AGEOPAL": [
        "Geologija s paleontologijo",
        "GEO",
        [],
        [
          [
            "Zgradba Zemlje",
            [
              "Zgradba Zemlje in tektonika plošč | plašč, skorja, gorotvorni procesi",
              "Minerali in kamnine | magmatske, sedimentne in metamorfne kamnine, kamninski krog"
            ]
          ],
          [
            "Geološki čas",
            [
              "Geološki čas | relativno in absolutno datiranje, stratigrafija, geološka časovna lestvica"
            ]
          ],
          [
            "Paleontologija",
            [
              "Fosilizacija | tafonomija, vrste fosilov",
              "Zgodovina življenja v fosilnem zapisu | paleozoik, mezozoik, kenozoik, izumrtja",
              "Geologija Slovenije | kras, glavne geološke enote"
            ]
          ]
        ]
      ],
      "AEVOLCL": [
        "Evolucija človeka",
        "BIO",
        [],
        [
          [
            "Primati",
            [
              "Primati | značilnosti, filogenija, človeku podobne opice"
            ]
          ],
          [
            "Hominini",
            [
              "Zgodnji hominini | avstralopiteki, dvonožnost",
              "Rod Homo | Homo habilis, Homo erectus, neandertalci",
              "Izvor sodobnega človeka | hipoteza izvora iz Afrike, selitve, mešanje z neandertalci"
            ]
          ],
          [
            "Biološka in kulturna evolucija",
            [
              "Genetska raznolikost človeka | mitohondrijska DNA, populacijska zgodovina",
              "Kulturna evolucija | orodja, jezik, kmetijstvo"
            ]
          ]
        ]
      ],
      "ASTAT": [
        "Statistika",
        "MAT",
        [
          "VERJ_STAT"
        ],
        [
          [
            "Statistične metode v biologiji",
            [
              "Analiza variance | enosmerna ANOVA, predpostavke, post-hoc primerjave",
              "Test hi-kvadrat | kontingenčne tabele, preizkus prileganja",
              "Neparametrični testi | Mann-Whitneyjev test, Spearmanov koeficient korelacije"
            ]
          ]
        ]
      ],
      "AUVMIKRO": [
        "Uvod v mikrobiologijo",
        "BIO",
        [],
        [
          [
            "Mikrobiologija kot veda",
            [
              "Zgodovina in področja mikrobiologije | Pasteur, Koch, Kochovi postulati",
              "Mesto mikroorganizmov v drevesu življenja | bakterije, arheje, evkarionti, virusi",
              "Zgradba prokariontske celice | celična stena po Gramu, membrana, bički, endospore"
            ]
          ],
          [
            "Mikroorganizmi in človek",
            [
              "Mikroorganizmi v okolju in industriji | biogeokemijski cikli, biotehnologija, živila",
              "Mikroorganizmi in zdravje | mikrobiom, patogeni, cepiva in antibiotiki"
            ]
          ],
          [
            "Metode",
            [
              "Pregled mikrobioloških metod | mikroskopija, gojenje, molekularne metode"
            ]
          ]
        ]
      ],
      "AMIKPRAK": [
        "Mikrobiološki praktikum",
        "BIO",
        [],
        [
          [
            "Varno delo in aseptika",
            [
              "Varno delo v mikrobiološkem laboratoriju | biološka varnost, aseptične tehnike, odpadki",
              "Gojišča in sterilizacija | priprava gojišč, avtoklaviranje, selektivna in diferencialna gojišča"
            ]
          ],
          [
            "Osamitev in opazovanje",
            [
              "Izolacija čistih kultur | razmaz, precepljanje, kolonije",
              "Mikroskopiranje in barvanje | barvanje po Gramu, barvanje endospor, nativni preparat"
            ]
          ],
          [
            "Kvantifikacija in identifikacija",
            [
              "Določanje števila mikroorganizmov | redčitvena vrsta, štetje kolonij (CFU), optična gostota",
              "Biokemijska identifikacija bakterij | katalaza, oksidaza, fermentacijski testi",
              "Protimikrobna občutljivost | difuzijski test, minimalna inhibitorna koncentracija"
            ]
          ]
        ]
      ],
      "AKEM": [
        "Kemija",
        "KEM",
        [
          "SPL_KEM"
        ],
        []
      ],
      "AMATMET": [
        "Matematične metode",
        "MAT",
        [
          "MAT_1",
          "VERJETNOST_1"
        ],
        []
      ],
      "ABIOKEMMB": [
        "Biokemija",
        "KEM",
        [
          "BIOKEM_TEMELJI"
        ],
        [
          [
            "Bioenergetika in presnova",
            [
              "Bioenergetika | ATP, redoks potenciali v celici, sklopljene reakcije",
              "Presnova | glikoliza, citratni cikel, oksidativna fosforilacija",
              "Presnova maščobnih kislin | β-oksidacija, sinteza maščobnih kislin, ketonska telesa",
              "Presnova aminokislin | transaminacija, cikel sečnine",
              "Regulacija presnove | hormonska regulacija, glukoneogeneza, presnova glikogena"
            ]
          ],
          [
            "Inhibicija encimov",
            [
              "Inhibicija encimov | kompetitivna in nekompetitivna inhibicija, Lineweaver-Burkov diagram"
            ]
          ]
        ]
      ],
      "ABIOCELM": [
        "Biologija celice",
        "BIO",
        [],
        [
          [
            "Zgradba celice",
            [
              "Prokariontska in evkariontska celica | primerjava zgradbe, velikost celic, endosimbiontska teorija",
              "Biološke membrane | model tekočega mozaika, membranski transport, osmoza",
              "Celični organeli | jedro, endoplazemski retikulum, Golgijev aparat, lizosomi, mitohondriji, kloroplasti"
            ]
          ],
          [
            "Celični procesi",
            [
              "Celični transport in sekrecija | endocitoza, eksocitoza, sortiranje proteinov",
              "Citoskelet in gibanje celic | mikrotubuli, aktinski filamenti, intermediarni filamenti",
              "Celični cikel in mitoza | faze celičnega cikla, kontrolne točke, citokineza",
              "Mejoza | rekombinacija, redukcijska delitev, pomen za spolno razmnoževanje",
              "Celična signalizacija in apoptoza | receptorji, sekundarni obveščevalci, programirana celična smrt"
            ]
          ]
        ]
      ],
      "ABIOVEC": [
        "Biologija večceličnih organizmov",
        "BIO",
        [],
        [
          [
            "Večceličnost in razvoj",
            [
              "Nastanek večceličnosti | celična diferenciacija, medcelični stiki, zunajcelični matriks",
              "Razvojna biologija | oploditev, brazdanje, gastrulacija, zarodni listi"
            ]
          ],
          [
            "Rastline",
            [
              "Zgradba in delovanje rastlin | tkiva, organi, fotosinteza, transport vode",
              "Razmnoževanje rastlin | menjava generacij, cvet, opraševanje, dvojna oploditev"
            ]
          ],
          [
            "Živali in človek",
            [
              "Organski sistemi živali | prebavila, dihala, obtočila, izločala",
              "Živčni in hormonski sistem | nevroni, sinapse, hormoni, homeostaza",
              "Imunski sistem | prirojena in pridobljena imunost, protitelesa"
            ]
          ]
        ]
      ],
      "AMOLBIO": [
        "Molekularna biologija",
        "BIO",
        [],
        [
          [
            "Nukleinske kisline in genom",
            [
              "Nukleinske kisline | zgradba DNA in RNA, podvajanje",
              "Zgradba genoma | geni, nekodirajoča DNA, organizacija kromatina"
            ]
          ],
          [
            "Izražanje genov",
            [
              "Izražanje genov | transkripcija, translacija, genski kod",
              "Uravnavanje izražanja genov | operon lac, transkripcijski dejavniki, epigenetika",
              "Mutacije in popravljanje DNA | točkovne mutacije, mutageni, popravljalni mehanizmi"
            ]
          ],
          [
            "Metode molekularne biologije",
            [
              "Verižna reakcija s polimerazo | načrtovanje začetnih oligonukleotidov, kvantitativni PCR",
              "Kloniranje DNA | restrikcijski encimi, vektorji, transformacija",
              "Elektroforeza in hibridizacija | agarozna in poliakrilamidna elektroforeza, prenos po Southernu in western",
              "Določanje nukleotidnega zaporedja | Sangerjeva metoda, sekvenciranje naslednje generacije"
            ]
          ]
        ]
      ],
      "AIMUN": [
        "Imunologija",
        "BIO",
        [],
        [
          [
            "Prirojena imunost",
            [
              "Organi in celice imunskega sistema | primarni in sekundarni limfatični organi, levkociti",
              "Prirojena imunost | fagocitoza, vnetje, komplement, receptorji PRR"
            ]
          ],
          [
            "Pridobljena imunost",
            [
              "Antigeni in protitelesa | zgradba protiteles, razredi imunoglobulinov",
              "Predstavljanje antigenov | molekule MHC, dendritične celice",
              "Limfociti T in B | aktivacija, celični in humoralni odziv, imunski spomin"
            ]
          ],
          [
            "Uporabna imunologija",
            [
              "Cepiva in imunizacija | aktivna in pasivna imunizacija, tipi cepiv",
              "Motnje imunskega sistema | preobčutljivost, avtoimunost, imunske pomanjkljivosti",
              "Imunološke metode | ELISA, pretočna citometrija, aglutinacija"
            ]
          ]
        ]
      ],
      "AVIROL": [
        "Virologija",
        "BIO",
        [],
        [
          [
            "Zgradba in razvrščanje virusov",
            [
              "Zgradba virusov | kapsida, ovojnica, genom, simetrija",
              "Razvrščanje virusov | Baltimorova klasifikacija, taksonomija ICTV"
            ]
          ],
          [
            "Razmnoževanje virusov",
            [
              "Razmnoževanje virusov | pritrditev, vstop, replikacija, sestavljanje, sprostitev",
              "Bakteriofagi | litični in lizogeni cikel, fagna terapija"
            ]
          ],
          [
            "Virusi in gostitelj",
            [
              "Patogeneza virusnih okužb | tropizem, perzistentne okužbe, onkogeni virusi",
              "Protivirusni ukrepi | cepiva, protivirusna zdravila, interferoni",
              "Virološke metode | gojenje virusov, plakni test, molekularna diagnostika"
            ]
          ]
        ]
      ],
      "AMIKFIZ": [
        "Mikrobna fiziologija",
        "BIO",
        [],
        [
          [
            "Zgradba in transport",
            [
              "Zgradba prokariontske celice | celična stena po Gramu, membrana, bički, endospore",
              "Transport skozi membrano pri mikroorganizmih | pasivni in aktivni transport, fosfotransferazni sistem"
            ]
          ],
          [
            "Rast",
            [
              "Mikrobna rast | rastna krivulja, generacijski čas, vplivi okolja",
              "Kontinuirne kulture | kemostat, specifična hitrost rasti, Monodova enačba"
            ]
          ],
          [
            "Metabolizem",
            [
              "Mikrobni metabolizem | fermentacija, aerobno in anaerobno dihanje, kemolitotrofija, fotosinteza",
              "Biosinteza celičnih gradnikov | vezava dušika, sinteza aminokislin in peptidoglikana"
            ]
          ],
          [
            "Regulacija in odziv na stres",
            [
              "Uravnavanje metabolizma | operoni, katabolna represija, dvokomponentni sistemi",
              "Odziv na stres in medcelična komunikacija | odziv na toploto in stradanje, zaznavanje kvoruma, biofilmi"
            ]
          ]
        ]
      ],
      "AMEDMIK": [
        "Osnove medicinske mikrobiologije",
        "BIO",
        [],
        [
          [
            "Patogeneza in epidemiologija",
            [
              "Odnos med mikrobom in gostiteljem | normalna mikrobiota, virulenčni dejavniki, toksini",
              "Epidemiologija okužb | prenos, rezervoarji, bolnišnične okužbe"
            ]
          ],
          [
            "Okužbe po organskih sistemih",
            [
              "Okužbe dihal | streptokoki, Mycobacterium tuberculosis, respiratorni virusi",
              "Okužbe prebavil in sečil | Escherichia coli, Salmonella, Helicobacter pylori",
              "Okužbe kože, osrednjega živčevja in spolno prenosljive okužbe | stafilokoki, meningitis, klamidije"
            ]
          ],
          [
            "Diagnostika in zdravljenje",
            [
              "Mikrobiološka diagnostika | vzorčenje, kultivacija, serologija, molekularne metode",
              "Protimikrobna zdravila in odpornost | mehanizmi delovanja in odpornosti, antibiogram",
              "Glive in paraziti kot povzročitelji bolezni | kandide, aspergili, protozoji, helminti"
            ]
          ]
        ]
      ],
      "AMIKRAZ": [
        "Mikrobna raznolikost in identifikacija",
        "BIO",
        [],
        [
          [
            "Taksonomija",
            [
              "Taksonomija prokariontov | koncept vrste, polifazna taksonomija, nomenklatura",
              "Molekularna filogenija mikroorganizmov | 16S rRNA, ANI, filogenetska drevesa"
            ]
          ],
          [
            "Pregled skupin",
            [
              "Glavne skupine bakterij | proteobakterije, firmikuti, aktinobakterije, cianobakterije",
              "Arheje | metanogeni, ekstremofili, posebnosti zgradbe",
              "Glive in kvasovke | zgradba, razmnoževanje, glavne skupine"
            ]
          ],
          [
            "Identifikacija",
            [
              "Fenotipska identifikacija | morfologija, biokemijski testi, sistemi API",
              "Molekularna identifikacija | sekvenciranje 16S rRNA, masna spektrometrija MALDI-TOF"
            ]
          ]
        ]
      ],
      "AANMET": [
        "Analitske metode v mikrobiologiji",
        "BIO",
        [],
        [
          [
            "Mikroskopija in citometrija",
            [
              "Napredne mikroskopske tehnike | fluorescenčna, konfokalna in elektronska mikroskopija",
              "Pretočna citometrija | fluorescenčno označevanje, štetje in sortiranje celic"
            ]
          ],
          [
            "Spektroskopske metode",
            [
              "Spektrometrične metode | Beer-Lambertov zakon, UV-VIS, atomska absorpcijska spektrometrija",
              "Fluorescenca in cirkularni dikroizem | kvantni izkoristek, sekundarna struktura"
            ]
          ],
          [
            "Ločevanje in molekularne metode",
            [
              "Kromatografske metode | plinska in tekočinska kromatografija, ločljivost, umeritvena krivulja",
              "Kvantitativni PCR | standardna krivulja, učinkovitost, relativna kvantifikacija",
              "Metagenomika | sekvenciranje okoljske DNA, analiza mikrobnih združb"
            ]
          ]
        ]
      ],
      "AMIKEKO": [
        "Mikrobna ekologija",
        "BIO",
        [],
        [
          [
            "Mikroorganizmi v okolju",
            [
              "Mikrobni habitati | tla, voda, sedimenti, ekstremna okolja",
              "Mikrobne populacije in združbe | raznolikost, interakcije, biofilmi"
            ]
          ],
          [
            "Procesi",
            [
              "Biogeokemijski cikli | kroženje ogljika, dušika, žvepla in železa",
              "Mikrobne interakcije z rastlinami in živalmi | simbioze, rizosfera, vamp prežvekovalcev"
            ]
          ],
          [
            "Metode in uporaba",
            [
              "Metode mikrobne ekologije | gojitvene in negojitvene metode, metagenomika",
              "Bioremediacija | razgradnja onesnažil, čiščenje odpadnih voda"
            ]
          ]
        ]
      ],
      "AZIVMIK": [
        "Živilska mikrobiologija",
        "BIO",
        [],
        [
          [
            "Mikroorganizmi v živilih",
            [
              "Uvod v živilsko mikrobiologijo | dejavniki rasti v živilih, aktivnost vode, pH",
              "Kvarjenje živil | kvarljivci, kvarjenje mesa, mleka in sadja"
            ]
          ],
          [
            "Varnost živil",
            [
              "Patogeni v živilih | Salmonella, Listeria, Campylobacter, toksini",
              "Konzerviranje živil | toplotna obdelava, hlajenje, kemijski konzervansi, koncept ovir",
              "HACCP in mikrobiološki kriteriji | kritične kontrolne točke, vzorčenje"
            ]
          ],
          [
            "Koristni mikroorganizmi",
            [
              "Fermentirana živila | mlečnokislinske bakterije, kvasovke, probiotiki"
            ]
          ]
        ]
      ],
      "APORPAT": [
        "Porajajoči se patogeni mikroorganizmi",
        "BIO",
        [],
        [
          [
            "Pojav novih okužb",
            [
              "Dejavniki pojavljanja novih okužb | zoonoze, globalizacija, podnebne spremembe",
              "Evolucija patogenov | horizontalni prenos genov, antigenski zdrs in premik"
            ]
          ],
          [
            "Primeri",
            [
              "Porajajoči se virusi | koronavirusi, gripa, virusi, ki jih prenašajo komarji",
              "Večkratno odporne bakterije | MRSA, ESBL, karbapenemaze"
            ]
          ],
          [
            "Nadzor",
            [
              "Spremljanje in obvladovanje izbruhov | epidemiološki nadzor, pristop Eno zdravje"
            ]
          ]
        ]
      ],
      "BBIOL": [
        "Biologija",
        "BIO",
        [],
        [
          [
            "Celica",
            [
              "Zgradba prokariontske in evkariontske celice | organeli, biološke membrane, citoskelet, primerjava celic",
              "Transport skozi membrane | difuzija, osmoza, olajšani in aktivni transport, endocitoza",
              "Celični cikel in delitev | mitoza, mejoza, regulacija celičnega cikla"
            ]
          ],
          [
            "Rastline",
            [
              "Zgradba rastlin | rastlinska celica, tkiva, korenina, steblo, list",
              "Razmnoževanje rastlin | menjava generacij, cvet, seme in plod"
            ]
          ],
          [
            "Živali",
            [
              "Živalska tkiva | epitelno, vezivno, mišično in živčno tkivo",
              "Organski sistemi živali | pregled zgradbe in delovanja pri vretenčarjih"
            ]
          ],
          [
            "Raznolikost in evolucija",
            [
              "Sistematika organizmov | domene, kraljestva, binomska nomenklatura, filogenetsko drevo",
              "Evolucija | naravni izbor, prilagoditve, speciacija"
            ]
          ],
          [
            "Ekologija",
            [
              "Osnove ekologije | populacije, združbe, ekosistemi, kroženje snovi in pretok energije"
            ]
          ]
        ]
      ],
      "BKEM": [
        "Kemija",
        "KEM",
        [
          "SPL_KEM",
          "ORG_1"
        ],
        []
      ],
      "BMATMET": [
        "Matematične metode",
        "MAT",
        [
          "MAT_A"
        ],
        [
          [
            "Linearna algebra in diferencialne enačbe",
            [
              "Matrike in determinante | računanje z matrikami, inverzna matrika, determinanta",
              "Sistemi linearnih enačb | Gaussova eliminacija, rang, rešljivost",
              "Diferencialne enačbe prvega reda | ločljive in linearne enačbe, začetni problem, modeli rasti in razpada"
            ]
          ]
        ]
      ],
      "BSTAT": [
        "Statistične metode",
        "MAT",
        [
          "VERJ_STAT"
        ],
        [
          [
            "Statistične metode v bioznanostih",
            [
              "Analiza variance | enofaktorska ANOVA, F-test, mnogoterne primerjave povprečij",
              "Test hi-kvadrat | kontingenčne tabele, preizkus neodvisnosti in prileganja",
              "Korelacija | Pearsonov in Spearmanov koeficient, determinacijski koeficient",
              "Načrtovanje poskusov | ponovitve, slučajni bloki, velikost vzorca"
            ]
          ]
        ]
      ],
      "BFIZBT": [
        "Izbrana poglavja iz fizike",
        "FIZ",
        [],
        [
          [
            "Mehanika in tekočine",
            [
              "Newtonovi zakoni in sile | trenje, sile pri kroženju, gravitacija",
              "Kontinuitetna in Bernoullijeva enačba | hidrostatika, tok idealne tekočine",
              "Viskoznost in Reynoldsovo število | laminarni in turbulentni tok"
            ]
          ],
          [
            "Toplota",
            [
              "Idealni plin in kinetična teorija | plinska enačba, notranja energija, toplotne kapacitete",
              "Prvi zakon termodinamike | delo, toplota, notranja energija, izotermne in adiabatne spremembe",
              "Drugi zakon termodinamike | entropija, toplotni stroji, Carnotov izkoristek"
            ]
          ],
          [
            "Elektrika in svetloba",
            [
              "Elektrostatika | Coulombov zakon, električno polje, potencial, kondenzator",
              "Električni tok in vezja | Ohmov zakon, Kirchhoffova zakona, RC vezje",
              "Geometrijska in valovna optika | lom, leče, interferenca, uklon"
            ]
          ],
          [
            "Fizika v biotehnologiji",
            [
              "Difuzija in sedimentacija | Fickov zakon, Stokesov zakon, centrifugiranje",
              "Mikroskopija | ločljivost, numerična apertura, fluorescenčna mikroskopija",
              "Fotoni in atomi | fotoefekt, de Brogliejeva valovna dolžina, energijski nivoji"
            ]
          ]
        ]
      ],
      "BUVBT": [
        "Uvod v biotehnologijo",
        "BIO",
        [],
        [
          [
            "Kaj je biotehnologija",
            [
              "Zgodovina in področja biotehnologije | tradicionalna in moderna biotehnologija, rdeča, zelena, bela biotehnologija",
              "Biološki sistemi v biotehnologiji | mikroorganizmi, rastlinske in živalske celice, encimi"
            ]
          ],
          [
            "Bioprocesi in produkti",
            [
              "Bioprocesi | gojenje, bioreaktor, izolacija produkta",
              "Biotehnološki produkti | antibiotiki, rekombinantni proteini, cepiva, biogoriva"
            ]
          ],
          [
            "Biotehnologija in družba",
            [
              "Biotehnologija in družba | gensko spremenjeni organizmi, varnost, etična vprašanja",
              "Biotehnološka industrija | razvoj produkta, patenti, trg"
            ]
          ]
        ]
      ],
      "BGEN1": [
        "Genetika 1",
        "BIO",
        [],
        [
          [
            "Klasična genetika",
            [
              "Mendelsko dedovanje | monohibridno in dihibridno križanje, Punnettov kvadrat, testno križanje",
              "Interakcije alelov in genov | nepopolna dominanca, kodominanca, epistaza",
              "Vezanost genov in rekombinacija | crossing-over, genetske karte, centimorgan"
            ]
          ],
          [
            "Kromosomi in mutacije",
            [
              "Kromosomi | kariotip, spolni kromosomi, spolno vezano dedovanje",
              "Mutacije | genske, kromosomske in genomske mutacije, mutageni, popravljanje DNA"
            ]
          ],
          [
            "Molekularne osnove dedovanja",
            [
              "Nukleinske kisline | zgradba DNA in RNA, podvajanje",
              "Izražanje genov | transkripcija, translacija, genetski kod",
              "Regulacija izražanja genov pri prokariontih | operon lac in trp, represorji, aktivatorji"
            ]
          ],
          [
            "Populacijska genetika",
            [
              "Populacijska genetika | frekvence alelov, Hardy-Weinbergovo ravnotežje, genetski zdrs"
            ]
          ]
        ]
      ],
      "BBIOKEM": [
        "Biokemija",
        "KEM",
        [
          "BIOKEM_UVOD"
        ],
        [
          [
            "Presnova in njena regulacija",
            [
              "Inhibicija encimov | kompetitivna in nekompetitivna inhibicija, Lineweaver-Burkov diagram",
              "Glukoneogeneza in presnova glikogena | regulacija, hormonski nadzor",
              "Presnova lipidov | β-oksidacija, sinteza maščobnih kislin, ketonska telesa",
              "Presnova aminokislin | transaminacija, deaminacija, cikel sečnine"
            ]
          ]
        ]
      ],
      "BMMP": [
        "Mikrobiološko-molekularni praktikum",
        "BIO",
        [],
        [
          [
            "Mikrobiološke tehnike",
            [
              "Aseptično delo in sterilizacija | avtoklaviranje, filtracija, delo v brezprašni komori",
              "Gojišča in čiste kulture | trdna in tekoča gojišča, izolacija čiste kulture, selektivna gojišča",
              "Štetje mikroorganizmov | razredčitvena vrsta, CFU, mikroskopsko štetje",
              "Barvanje po Gramu in mikroskopija | priprava preparata, po Gramu pozitivne in negativne bakterije"
            ]
          ],
          [
            "Rast mikroorganizmov",
            [
              "Rast bakterij | rastna krivulja, generacijski čas, optična gostota"
            ]
          ],
          [
            "Molekularne tehnike",
            [
              "Izolacija DNA | liza celic, čiščenje, merjenje koncentracije in čistosti",
              "PCR | princip, načrtovanje začetnih oligonukleotidov, optimizacija reakcije",
              "Agarozna gelska elektroforeza | ločevanje fragmentov DNA, velikostni standard"
            ]
          ]
        ]
      ],
      "BGEN2": [
        "Genetika 2",
        "BIO",
        [],
        [
          [
            "Molekularna genetika evkariontov",
            [
              "Regulacija izražanja genov pri evkariontih | kromatin, transkripcijski dejavniki, epigenetika",
              "Zgradba genomov | geni, introni, ponovljena zaporedja, mobilni elementi"
            ]
          ],
          [
            "Metode molekularne genetike",
            [
              "Rekombinantna DNA | restrikcijski encimi, vektorji, kloniranje",
              "PCR | princip, načrtovanje začetnih oligonukleotidov, kvantitativni PCR",
              "Sekvenciranje DNA | Sangerjeva metoda, sekvenciranje naslednje generacije"
            ]
          ],
          [
            "Genetika v biotehnologiji",
            [
              "Genetski markerji | SNP, mikrosateliti, genotipizacija",
              "Kvantitativna genetika | kvantitativne lastnosti, heritabiliteta, aditivni učinki",
              "Transgeneza in urejanje genoma | CRISPR/Cas9, transgeni organizmi"
            ]
          ]
        ]
      ],
      "BFIZIOL": [
        "Fiziologija",
        "BIO",
        [],
        [
          [
            "Živalska fiziologija",
            [
              "Membranski potencial in živčni impulz | mirovni potencial, akcijski potencial, sinapsa",
              "Mišično krčenje | drsenje filamentov, vloga kalcija in ATP",
              "Krvožilje in dihanje | delovanje srca, krvni tlak, izmenjava plinov",
              "Hormonska regulacija | endokrine žleze, povratna zanka, homeostaza"
            ]
          ],
          [
            "Rastlinska fiziologija",
            [
              "Fotosinteza | svetlobne reakcije, Calvinov cikel, C4 in CAM rastline",
              "Vodni režim rastlin | vodni potencial, transpiracija, prevajanje po ksilemu",
              "Mineralna prehrana rastlin | makro- in mikrohranila, privzem ionov",
              "Rastlinski hormoni | avksini, citokinini, giberelini, etilen, abscizinska kislina"
            ]
          ],
          [
            "Mikrobna fiziologija",
            [
              "Rast bakterij | rastna krivulja, generacijski čas, optična gostota",
              "Mikrobni metabolizem | fermentacija, aerobno in anaerobno dihanje, kemolitotrofija",
              "Odziv mikroorganizmov na okolje | stresni odziv, zaznavanje kvoruma, biofilmi"
            ]
          ]
        ]
      ],
      "BBTTEH": [
        "Biotehnološki tehnikum",
        "FIZ",
        [
          "OSN_INZ"
        ],
        [
          [
            "Kinetika bioprocesov",
            [
              "Kinetika rasti mikroorganizmov | specifična hitrost rasti, Monodova enačba, izkoristek biomase",
              "Encimska kinetika | Michaelis-Mentenova enačba, inhibicija"
            ]
          ],
          [
            "Bioreaktorji",
            [
              "Načini gojenja | šaržno, šaržno z dohranjevanjem, kontinuirno gojenje (kemostat)",
              "Prenos kisika | topnost kisika, koeficient kLa, mešanje in prezračevanje",
              "Sterilizacija gojišč | kinetika odmiranja, decimalni redukcijski čas"
            ]
          ],
          [
            "Izolacija in čiščenje produktov",
            [
              "Ločevanje celic | centrifugiranje, filtracija, razbijanje celic",
              "Čiščenje produktov | obarjanje, kromatografija, membranska filtracija"
            ]
          ]
        ]
      ],
      "BVARREG": [
        "Varnost in regulativa v biotehnologiji",
        "BIO",
        [],
        [
          [
            "Biološka varnost",
            [
              "Biološka varnost | razredi tveganja, stopnje zadrževanja, varno delo v laboratoriju",
              "Ocena tveganja GSO | zaprti sistemi, namerno sproščanje v okolje"
            ]
          ],
          [
            "Regulativa",
            [
              "Zakonodaja o GSO | evropske direktive in uredbe, slovenska zakonodaja, označevanje",
              "Dobra laboratorijska in proizvodna praksa | GLP, GMP, sledljivost",
              "Intelektualna lastnina v biotehnologiji | patenti, varstvo sort, licence"
            ]
          ]
        ]
      ],
      "BBIOINF": [
        "Osnove bioinformatike",
        "RAC",
        [],
        [
          [
            "Biološki podatki",
            [
              "Biološke podatkovne zbirke | GenBank, UniProt, PDB, formati FASTA in GenBank",
              "Programiranje za bioinformatiko | osnove Pythona ali R, branje in obdelava zaporedij"
            ]
          ],
          [
            "Primerjava zaporedij",
            [
              "Poravnava zaporedij | globalna in lokalna poravnava, dinamično programiranje, substitucijske matrike",
              "BLAST | iskanje podobnih zaporedij, E-vrednost, interpretacija zadetkov",
              "Večkratna poravnava in filogenija | ClustalW, filogenetska drevesa, metoda združevanja sosedov"
            ]
          ],
          [
            "Analiza genomov in proteinov",
            [
              "Napovedovanje genov | odprti bralni okvirji, anotacija genomov",
              "Napovedovanje strukture proteinov | domene, motivi, homologno modeliranje"
            ]
          ]
        ]
      ],
      "BRTK": [
        "Rastlinske tkivne kulture",
        "BIO",
        [],
        [
          [
            "Osnove gojenja in vitro",
            [
              "Gojišča za rastlinske tkivne kulture | sestava, rastni regulatorji, sterilizacija izsadkov",
              "Totipotentnost in diferenciacija | kalus, organogeneza, razmerje avksin/citokinin"
            ]
          ],
          [
            "Razmnoževanje in vitro",
            [
              "Mikropropagacija | faze, aklimatizacija, uporaba v praksi",
              "Somatska embriogeneza | indukcija, sintetična semena"
            ]
          ],
          [
            "Uporaba v biotehnologiji",
            [
              "Haploidi in protoplasti | kultura prašnikov, fuzija protoplastov",
              "Ohranjanje genskih virov | počasna rast, krioprezervacija",
              "Sekundarni metaboliti iz celičnih kultur | suspenzijske kulture, elicitacija"
            ]
          ]
        ]
      ],
      "BZTK": [
        "Živalske tkivne kulture",
        "BIO",
        [],
        [
          [
            "Osnove gojenja živalskih celic",
            [
              "Primarne kulture in celične linije | izolacija celic, kontinuirne linije, imortalizacija",
              "Gojišča in pogoji gojenja | serum, CO2 in pH, inkubacija, adherentne in suspenzijske kulture",
              "Rast in štetje celic | rastna krivulja, viabilnost, hemocitometer"
            ]
          ],
          [
            "Kakovost in varnost",
            [
              "Kontaminacije celičnih kultur | mikoplazme, navzkrižna kontaminacija, avtentikacija linij",
              "Shranjevanje celic | zamrzovanje, krioprotektanti, celične banke"
            ]
          ],
          [
            "Uporaba",
            [
              "Matične celice | embrionalne in odrasle matične celice, diferenciacija",
              "Uporaba celičnih kultur | proizvodnja rekombinantnih proteinov, toksikološki testi, tkivno inženirstvo"
            ]
          ]
        ]
      ],
      "BIMUN": [
        "Imunologija",
        "BIO",
        [],
        [
          [
            "Prirojena imunost",
            [
              "Prirojena imunost | fagociti, komplement, vnetje, receptorji za prepoznavanje vzorcev"
            ]
          ],
          [
            "Pridobljena imunost",
            [
              "Limfociti B in T | razvoj, aktivacija, klonska selekcija",
              "Protitelesa | zgradba, razredi, nastanek raznolikosti",
              "MHC in predstavljanje antigenov | molekule MHC I in II, celice, ki predstavljajo antigen"
            ]
          ],
          [
            "Imunski odziv",
            [
              "Imunski spomin in cepljenje | primarni in sekundarni odziv, vrste cepiv",
              "Motnje imunskega sistema | preobčutljivost, avtoimunost, imunske pomanjkljivosti"
            ]
          ],
          [
            "Imunske metode",
            [
              "Imunske metode | ELISA, prenos western, pretočna citometrija, monoklonska protitelesa"
            ]
          ]
        ]
      ],
      "BBTRAST": [
        "Biotehnologija rastlin",
        "BIO",
        [],
        [
          [
            "Genska transformacija rastlin",
            [
              "Transformacija rastlin | Agrobacterium tumefaciens, biolistika, selekcijski markerji",
              "Urejanje genoma rastlin | CRISPR/Cas9, cisgeneza"
            ]
          ],
          [
            "Biotehnologija v žlahtnjenju",
            [
              "Molekularni markerji v žlahtnjenju | selekcija z markerji, kartiranje QTL",
              "Gensko spremenjene rastline | odpornost na škodljivce in herbicide, izboljšana hranilna vrednost"
            ]
          ],
          [
            "Rastline kot vir produktov",
            [
              "Rastline kot bioreaktorji | rekombinantni proteini, cepiva iz rastlin",
              "Rastlinski sekundarni metaboliti | biosinteza, pridobivanje z biotehnološkimi postopki"
            ]
          ]
        ]
      ],
      "BBTZIV": [
        "Biotehnologija živali",
        "BIO",
        [],
        [
          [
            "Reprodukcijske biotehnologije",
            [
              "Umetno osemenjevanje in prenos zarodkov | superovulacija, sinhronizacija, shranjevanje semena",
              "Oploditev in vitro | zorenje jajčnih celic, gojenje zarodkov",
              "Kloniranje živali | prenos jedra somatske celice, reprogramiranje"
            ]
          ],
          [
            "Genetske spremembe živali",
            [
              "Transgene živali | mikroinjiciranje, lentivirusni vektorji, urejanje genoma",
              "Živalski modeli | izbitje genov, modeli bolezni človeka"
            ]
          ],
          [
            "Genomika in selekcija",
            [
              "Genomska selekcija | genomske plemenske vrednosti, SNP čipi",
              "Sledljivost in identifikacija živali | DNA profiliranje, določanje porekla"
            ]
          ]
        ]
      ],
      "BBTGLIV": [
        "Biotehnologija višjih gliv",
        "BIO",
        [],
        [
          [
            "Biologija višjih gliv",
            [
              "Zgradba in razmnoževanje višjih gliv | hife, micelij, trosnjaki, življenjski krog",
              "Ekologija gliv | saprotrofi, mikoriza, paraziti"
            ]
          ],
          [
            "Gojenje in uporaba",
            [
              "Gojenje užitnih gob | substrati, pogoji gojenja, šampinjon, bukov ostrigar",
              "Glive in razkroj lesa | lignocelulolitični encimi, bela in rjava trohnoba",
              "Glive kot vir učinkovin | polisaharidi, zdravilne gobe, biomateriali iz micelija"
            ]
          ]
        ]
      ],
      "BBTMIKRO": [
        "Biotehnologija mikroorganizmov",
        "BIO",
        [],
        [
          [
            "Industrijski mikroorganizmi",
            [
              "Industrijski mikroorganizmi | izbor in ohranjanje sevov, kvasovke, aktinomicete, filamentozne glive",
              "Izboljševanje sevov | mutageneza, metabolno inženirstvo, sintezna biologija"
            ]
          ],
          [
            "Mikrobni produkti",
            [
              "Primarni in sekundarni metaboliti | organske kisline, aminokisline, antibiotiki",
              "Rekombinantni proteini | ekspresijski sistemi E. coli in kvasovk, izločanje proteinov",
              "Fermentacijski procesi | priprava inokuluma, vodenje procesa, povečevanje merila"
            ]
          ],
          [
            "Okoljska biotehnologija",
            [
              "Mikroorganizmi v varstvu okolja | čiščenje odpadnih voda, bioremediacija, bioplin"
            ]
          ]
        ]
      ],
      "BBIOETIKA": [
        "Bioetika",
        "BIO",
        [],
        [
          [
            "Etična načela",
            [
              "Temelji bioetike | etične teorije, načela avtonomije, dobronamernosti in pravičnosti",
              "Previdnostno načelo | tveganje, negotovost, odločanje"
            ]
          ],
          [
            "Etika v biotehnologiji",
            [
              "Etika poskusov na živalih | načelo 3R, dobrobit živali, zakonodaja",
              "Etična vprašanja GSO in urejanja genoma | sprejemljivost, družbeni vidiki",
              "Etika v biomedicini | matične celice, genska terapija, genetsko testiranje"
            ]
          ]
        ]
      ],
      "BUVEKON": [
        "Uvod v ekonomiko",
        "EKO",
        [],
        [
          [
            "Mikroekonomija",
            [
              "Povpraševanje in ponudba | tržno ravnovesje, cenovna elastičnost",
              "Proizvodnja in stroški | proizvodna funkcija, fiksni in variabilni stroški, mejni stroški",
              "Tržne strukture | popolna konkurenca, monopol, oligopol"
            ]
          ],
          [
            "Makroekonomija",
            [
              "Makroekonomski kazalniki | BDP, inflacija, brezposelnost",
              "Denar in ekonomska politika | denarna in fiskalna politika"
            ]
          ],
          [
            "Agroživilsko gospodarstvo",
            [
              "Agroživilska veriga | pridelava, predelava, trgovina, porabnik",
              "Kmetijska politika | skupna kmetijska politika EU, subvencije"
            ]
          ]
        ]
      ],
      "BUPENCIM": [
        "Uporabna encimologija",
        "KEM",
        [
          "ENCIMATIKA"
        ],
        [
          [
            "Industrijska uporaba encimov",
            [
              "Imobilizacija encimov | adsorpcija, kovalentna vezava, ujetje, stabilnost",
              "Encimi v industriji | detergenti, živilska industrija, biokataliza v sintezi"
            ]
          ]
        ]
      ],
      "BREJLAB": [
        "Reja laboratorijskih živali",
        "BIO",
        [],
        [
          [
            "Laboratorijske živali",
            [
              "Vrste laboratorijskih živali | miš, podgana, kunec, genetsko definirani sevi",
              "Reja in oskrba | prostori, prehrana, mikrobiološki status, obogatitev okolja"
            ]
          ],
          [
            "Poskusi na živalih",
            [
              "Zakonodaja in etika poskusov na živalih | načelo 3R, dovoljenja, ocena trpljenja",
              "Postopki z živalmi | rokovanje, aplikacija snovi, anestezija, humane končne točke"
            ]
          ]
        ]
      ],
      "BFIZ": [
        "Fizika",
        "FIZ",
        [],
        [
          [
            "Mehanika",
            [
              "Kinematika | premo in krivo gibanje, poševni met, kroženje",
              "Newtonovi zakoni in sile | trenje, sile pri kroženju, gravitacija",
              "Delo, energija in gibalna količina | izrek o kinetični energiji, ohranitveni zakoni, trki"
            ]
          ],
          [
            "Tekočine",
            [
              "Hidrostatika | tlak v tekočini, sile na ploskve, vzgon",
              "Kontinuitetna in Bernoullijeva enačba | hidrostatika, tok idealne tekočine",
              "Viskoznost in Reynoldsovo število | laminarni in turbulentni tok"
            ]
          ],
          [
            "Toplota",
            [
              "Idealni plin in kinetična teorija | plinska enačba, notranja energija, toplotne kapacitete",
              "Prvi zakon termodinamike | delo, toplota, notranja energija, izotermne in adiabatne spremembe",
              "Prevod toplote | Fourierov zakon, večplastne stene, toplotni upor"
            ]
          ],
          [
            "Elektrika, valovanje in optika",
            [
              "Električni tok in vezja | Ohmov zakon, Kirchhoffova zakona, RC vezje",
              "Valovanje | valovna enačba, stoječe valovanje, zvok, Dopplerjev pojav",
              "Geometrijska in valovna optika | lom, leče, interferenca, uklon"
            ]
          ]
        ]
      ],
      "BUVZIV": [
        "Uvod v živilstvo",
        "BIO",
        [],
        [
          [
            "Živila",
            [
              "Sestava živil | voda, makrohranila, mikrohranila, bioaktivne snovi",
              "Skupine živil | živila rastlinskega in živalskega izvora, predelana živila"
            ]
          ],
          [
            "Kvarjenje in ohranjanje živil",
            [
              "Kvarjenje živil | mikrobiološki, kemijski in fizikalni vzroki",
              "Postopki konzerviranja | toplotna obdelava, hlajenje, sušenje, dodatki, fermentacija"
            ]
          ],
          [
            "Živilstvo kot veda in panoga",
            [
              "Živilska veriga | od njive do mize, varnost in kakovost živil",
              "Živilska industrija v Sloveniji | panoge, poklici, trendi"
            ]
          ]
        ]
      ],
      "BANALZIV": [
        "Analizne metode v živilstvu",
        "KEM",
        [
          "ANAL_1",
          "ANAL_2"
        ],
        [
          [
            "Analiza živil",
            [
              "Določanje vode in pepela | sušenje, Karl Fischerjeva titracija, sežig",
              "Določanje beljakovin | metoda po Kjeldahlu, pretvorbeni faktor",
              "Določanje maščob | ekstrakcija po Soxhletu, kislinska hidroliza",
              "Vzorčenje in priprava vzorca | reprezentativen vzorec, homogenizacija"
            ]
          ]
        ]
      ],
      "BANATHIS": [
        "Osnove anatomije s histologijo",
        "BIO",
        [],
        [
          [
            "Histologija",
            [
              "Epitelno in vezivno tkivo | vrste epitelov, kolagen, hrustanec, kost",
              "Mišično tkivo | skeletna, srčna in gladka mišičnina, zgradba mišičnega vlakna",
              "Živčno tkivo | nevron, glija, sinapsa"
            ]
          ],
          [
            "Anatomija organskih sistemov",
            [
              "Prebavila | zgradba prebavne cevi, jetra, trebušna slinavka",
              "Krvožilje in dihala | srce, žilje, kri, pljuča",
              "Sečila, razmnoževala in endokrine žleze | ledvica, spolni organi, hormonske žleze"
            ]
          ],
          [
            "Anatomija klavnih živali",
            [
              "Zgradba trupa klavnih živali | mišice, maščobno tkivo, kosti, deli trupa"
            ]
          ]
        ]
      ],
      "BOSMIKRO": [
        "Osnove mikrobiologije",
        "BIO",
        [],
        [
          [
            "Mikrobna celica",
            [
              "Zgradba bakterijske celice | celična stena, membrana, bički, endospore",
              "Glive in kvasovke | zgradba, razmnoževanje, pomen v živilstvu",
              "Virusi in bakteriofagi | zgradba, litični in lizogeni cikel"
            ]
          ],
          [
            "Rast in metabolizem",
            [
              "Rast bakterij | rastna krivulja, generacijski čas, optična gostota",
              "Mikrobni metabolizem | fermentacija, aerobno in anaerobno dihanje, kemolitotrofija",
              "Vpliv okolja na mikroorganizme | temperatura, pH, aktivnost vode, kisik"
            ]
          ],
          [
            "Mikrobiološke metode",
            [
              "Štetje mikroorganizmov | razredčitvena vrsta, CFU, mikroskopsko štetje",
              "Aseptično delo in sterilizacija | avtoklaviranje, filtracija, delo v brezprašni komori"
            ]
          ]
        ]
      ],
      "BOSPRED": [
        "Osnove predelave živil",
        "BIO",
        [],
        [
          [
            "Surovine in mehanski postopki",
            [
              "Surovine za predelavo | kakovost, skladiščenje, priprava surovin",
              "Mehanski postopki | čiščenje, mletje, mešanje, ločevanje faz"
            ]
          ],
          [
            "Toplotni postopki",
            [
              "Toplotna obdelava živil | blanširanje, pasterizacija, sterilizacija, D- in z-vrednost",
              "Hlajenje in zamrzovanje | hitrost zamrzovanja, kristali ledu, hladna veriga"
            ]
          ],
          [
            "Odstranjevanje vode in drugi postopki",
            [
              "Sušenje in koncentriranje živil | sušilne krivulje, uparjanje, liofilizacija",
              "Fermentacija živil | mlečnokislinska in alkoholna fermentacija, starterske kulture",
              "Netermični postopki | visok tlak, obsevanje, pulzno električno polje"
            ]
          ]
        ]
      ],
      "BPRIDHR": [
        "Pridelava in prireja hrane",
        "BIO",
        [],
        [
          [
            "Rastlinska pridelava",
            [
              "Poljedelstvo | žita, oljnice, okopavine, kolobar",
              "Sadjarstvo in vrtnarstvo | sadne vrste, zelenjadnice, obiranje in skladiščenje",
              "Vinogradništvo | sorte, rast trte, kakovost grozdja"
            ]
          ],
          [
            "Živinoreja",
            [
              "Prireja mleka in mesa | govedoreja, prašičereja, reja drobnice",
              "Perutninarstvo in ribogojstvo | prireja jajc in perutninskega mesa, gojenje rib"
            ]
          ],
          [
            "Kakovost in trajnost",
            [
              "Dejavniki kakovosti surovin | sorta, pasma, prehrana živali, agrotehnika",
              "Trajnostna in ekološka pridelava | ekološko kmetijstvo, integrirana pridelava, vpliv na okolje"
            ]
          ]
        ]
      ],
      "BFIZPRES": [
        "Fiziologija presnove",
        "BIO",
        [],
        [
          [
            "Prebava",
            [
              "Prebava in absorpcija | prebavni encimi, absorpcija hranil v tankem črevesu, črevesna mikrobiota"
            ]
          ],
          [
            "Presnova v organizmu",
            [
              "Presnova hranil v telesu | presnova ogljikovih hidratov, maščob in beljakovin v jetrih, mišicah in maščevju",
              "Energijsko ravnovesje | bazalni metabolizem, poraba energije, termogeneza",
              "Hormonska regulacija presnove | inzulin, glukagon, stanje sitosti in stradanja"
            ]
          ]
        ]
      ],
      "BHIGIENA": [
        "Higiena živil",
        "BIO",
        [],
        [
          [
            "Mikrobiološka tveganja",
            [
              "Patogeni mikroorganizmi v živilih | Salmonella, Listeria, Campylobacter, E. coli, Clostridium",
              "Zastrupitve s hrano | okužbe in toksikoze, inkubacijska doba, preprečevanje"
            ]
          ],
          [
            "Sistemi zagotavljanja varnosti",
            [
              "HACCP | analiza tveganj, kritične kontrolne točke, kritične meje, nadzor",
              "Dobra higienska praksa | osebna higiena, higiena prostorov in opreme"
            ]
          ],
          [
            "Čiščenje in razkuževanje",
            [
              "Čiščenje in razkuževanje | čistila, razkužila, CIP sistemi, preverjanje učinkovitosti",
              "Nadzor škodljivcev in ravnanje z odpadki | glodavci, žuželke, odpadki živalskega izvora"
            ]
          ]
        ]
      ],
      "BKAKZAK": [
        "Kakovost živil in zakonodaja",
        "EKO",
        [],
        [
          [
            "Živilska zakonodaja",
            [
              "Živilska zakonodaja EU in Slovenije | splošna živilska zakonodaja, odgovornost nosilca dejavnosti, uradni nadzor",
              "Označevanje živil | obvezni podatki, alergeni, prehranske in zdravstvene trditve",
              "Sheme kakovosti | zaščitena označba porekla, geografska označba, ekološka živila"
            ]
          ],
          [
            "Sistemi kakovosti",
            [
              "Standardi kakovosti | ISO 9001, ISO 22000, IFS, BRC",
              "Statistična kontrola kakovosti | vzorčenje, kontrolne karte, sposobnost procesa"
            ]
          ],
          [
            "Vrednotenje kakovosti",
            [
              "Senzorična analiza živil | senzorične lastnosti, preskuševalci, razlikovalni in opisni testi",
              "Kakovost živil | parametri kakovosti, ponarejanje živil, avtentičnost"
            ]
          ]
        ]
      ],
      "BOSPREH": [
        "Osnove prehrane",
        "BIO",
        [],
        [
          [
            "Hranila",
            [
              "Makrohranila | ogljikovi hidrati, maščobe, beljakovine, prehranska vlaknina",
              "Vitamini | topni v vodi in maščobah, vloga, pomanjkanje",
              "Minerali in voda | makro- in mikroelementi, vodno ravnovesje"
            ]
          ],
          [
            "Potrebe in priporočila",
            [
              "Energijske potrebe | energijska vrednost hranil, izračun dnevnih potreb",
              "Prehranska priporočila | referenčne vrednosti za vnos hranil, prehranski krožnik",
              "Prehrana v različnih življenjskih obdobjih | nosečnost, otroci, starostniki, športniki"
            ]
          ],
          [
            "Vrednotenje prehrane",
            [
              "Vrednotenje prehranskega stanja | indeks telesne mase, prehranski vprašalniki, tabele sestave živil"
            ]
          ]
        ]
      ],
      "BTEHPROC": [
        "Tehnološko procesništvo",
        "FIZ",
        [
          "OSN_INZ",
          "MEH_TEKOCIN",
          "PRENOS_TOPLOTE"
        ],
        [
          [
            "Separacijske operacije",
            [
              "Filtracija in sedimentacija | Stokesov zakon",
              "Kristalizacija in sušenje | bilance, ravnotežja",
              "Membranski procesi | pretok, selektivnost"
            ]
          ]
        ]
      ],
      "BZIVKEM": [
        "Živilska kemija",
        "KEM",
        [],
        [
          [
            "Voda in ogljikovi hidrati",
            [
              "Voda v živilih | aktivnost vode, sorpcijske izoterme, vezana voda",
              "Ogljikovi hidrati v živilih | škrob, želiranje, pektini, Maillardova reakcija, karamelizacija"
            ]
          ],
          [
            "Lipidi in beljakovine",
            [
              "Lipidi v živilih | maščobne kisline, oksidacija lipidov, žarkost, antioksidanti",
              "Beljakovine v živilih | denaturacija, funkcionalne lastnosti, emulgiranje in penjenje",
              "Encimi v živilih | encimsko porjavenje, lipaze, proteaze"
            ]
          ],
          [
            "Mikrohranila, aditivi in kontaminanti",
            [
              "Vitamini in minerali v živilih | stabilnost med predelavo in skladiščenjem",
              "Aditivi v živilih | barvila, konzervansi, emulgatorji, E-številke",
              "Kontaminanti v živilih | mikotoksini, ostanki pesticidov, akrilamid, težke kovine"
            ]
          ]
        ]
      ],
      "BZIVMIKRO": [
        "Živilska mikrobiologija",
        "BIO",
        [],
        [
          [
            "Mikrobna ekologija živil",
            [
              "Dejavniki rasti mikroorganizmov v živilih | notranji in zunanji dejavniki, ovirni princip",
              "Kvarljivci živil | psihrotrofi, plesni, kvasovke, kvar posameznih skupin živil"
            ]
          ],
          [
            "Koristni mikroorganizmi",
            [
              "Mikroorganizmi v fermentiranih živilih | mlečnokislinske bakterije, kvasovke, plesni",
              "Probiotiki | definicija, mehanizmi delovanja, zahteve"
            ]
          ],
          [
            "Obvladovanje mikroorganizmov",
            [
              "Kinetika inaktivacije mikroorganizmov | D-vrednost, z-vrednost, F-vrednost",
              "Mikrobiološka merila za živila | merila varnosti in higiene procesa, vzorčni načrti",
              "Hitre metode v živilski mikrobiologiji | PCR, imunske metode, ATP bioluminiscenca"
            ]
          ]
        ]
      ],
      "BTPRAST": [
        "Tehnologije predelave sadja, vrtnin, poljščin in grozdja",
        "BIO",
        [],
        [
          [
            "Sadje in vrtnine",
            [
              "Predelava sadja in vrtnin | sokovi, kompoti, marmelade, sušeno in zamrznjeno sadje",
              "Skladiščenje sadja in vrtnin | dihanje, zorenje, kontrolirana atmosfera"
            ]
          ],
          [
            "Žita in oljnice",
            [
              "Mlinarstvo in pekarstvo | mletje žit, lastnosti moke, testo, kruh",
              "Tehnologija rastlinskih olj | stiskanje, ekstrakcija, rafinacija"
            ]
          ],
          [
            "Vino in pivo",
            [
              "Tehnologija vina | predelava grozdja, alkoholna fermentacija, nega in stabilizacija vina",
              "Tehnologija piva | slad, drozganje, hmeljenje, fermentacija"
            ]
          ]
        ]
      ],
      "BTPMESML": [
        "Tehnologije predelave mesa in mleka",
        "BIO",
        [],
        [
          [
            "Meso",
            [
              "Meso kot surovina | zgradba mišice, posmrtne spremembe, zorenje mesa, kakovost",
              "Mesni izdelki | soljenje, razsoljevanje, klobase, suhomesnati izdelki, toplotna obdelava"
            ]
          ],
          [
            "Mleko",
            [
              "Sestava in lastnosti mleka | beljakovine, maščoba, laktoza, mikroflora surovega mleka",
              "Toplotna obdelava mleka | pasterizacija, UVT, homogenizacija, standardizacija",
              "Fermentirani mlečni izdelki | jogurt, kefir, starterske kulture",
              "Tehnologija sira | koagulacija, obdelava gruše, zorenje sira"
            ]
          ]
        ]
      ],
      "BOSBIOT": [
        "Osnove biotehnologij",
        "BIO",
        [],
        [
          [
            "Biotehnologija v živilstvu",
            [
              "Biotehnološki postopki v živilstvu | fermentacija, encimska predelava, starterske kulture",
              "Encimi v živilski industriji | amilaze, proteaze, pektinaze, laktaza"
            ]
          ],
          [
            "Mikrobni bioprocesi",
            [
              "Fermentacijski procesi | priprava inokuluma, vodenje procesa, povečevanje merila",
              "Pridobivanje mikrobnih produktov | organske kisline, aminokisline, mikrobna biomasa"
            ]
          ],
          [
            "Sodobna biotehnologija",
            [
              "Gensko spremenjeni organizmi v prehrani | metode, ocena tveganja, označevanje",
              "Nova živila | alternativni viri beljakovin, gojeno meso, mikroalge"
            ]
          ]
        ]
      ],
      "BODPO": [
        "Organizacija in delovanje prehranskih obratov",
        "EKO",
        [],
        [
          [
            "Prehranski obrati",
            [
              "Vrste prehranskih obratov | javna prehrana, gostinstvo, obratna prehrana, temeljne funkcije",
              "Organizacijski modeli | tradicionalni sistem, sistem kuhaj-hladi, centralne kuhinje"
            ]
          ],
          [
            "Načrtovanje in delovanje",
            [
              "Načrtovanje jedilnikov | normativi, prehranska priporočila, stroški obroka",
              "Organizacija prostorov in dela | tokovi živil, oprema, kadri",
              "Higiena v velikih kuhinjah | HACCP v obratu prehrane, temperaturni režimi"
            ]
          ],
          [
            "Poslovanje",
            [
              "Poslovanje prehranskega obrata | nabava, stroški, kalkulacije, javna naročila"
            ]
          ]
        ]
      ],
      "BKLINDIET": [
        "Klinična dietetika in epidemiologija prehrane",
        "BIO",
        [],
        [
          [
            "Epidemiologija prehrane",
            [
              "Epidemiološke raziskave v prehrani | presečne, kohortne in intervencijske raziskave, relativno tveganje",
              "Metode ocenjevanja prehranskega vnosa | jedilniki, vprašalniki o pogostosti uživanja, biomarkerji"
            ]
          ],
          [
            "Prehrana in bolezni",
            [
              "Prehrana in kronične bolezni | debelost, sladkorna bolezen tipa 2, bolezni srca in ožilja",
              "Podhranjenost | presejanje prehranske ogroženosti, kaheksija"
            ]
          ],
          [
            "Klinična dietetika",
            [
              "Dietoterapija | diete pri boleznih prebavil, ledvic in jeter, prehranske alergije",
              "Prehranska podpora | enteralna in parenteralna prehrana"
            ]
          ]
        ]
      ],
      "BPAKIR": [
        "Pakiranje živil",
        "KEM",
        [],
        [
          [
            "Embalažni materiali",
            [
              "Embalažni materiali | papir, steklo, kovine, polimeri, biorazgradljivi materiali",
              "Pregradne lastnosti embalaže | prepustnost za kisik in vodno paro, svetloba"
            ]
          ],
          [
            "Tehnike pakiranja",
            [
              "Pakiranje v modificirani atmosferi | sestava plinov, vakuumsko pakiranje",
              "Aktivna in inteligentna embalaža | absorberji kisika, indikatorji svežine"
            ]
          ],
          [
            "Varnost embalaže",
            [
              "Migracija iz embalaže | celotna in specifična migracija, zakonodaja za materiale v stiku z živili",
              "Embalaža in okolje | recikliranje, ravnanje z odpadno embalažo"
            ]
          ]
        ]
      ],
      "CMAT": [
        "Matematika",
        "MAT",
        [
          "MAT_1"
        ],
        []
      ],
      "CKEMBIO": [
        "Kemija z biokemijo",
        "KEM",
        [
          "SPL_KEM"
        ],
        [
          [
            "Osnove organske kemije",
            [
              "Zgradba in vezi organskih molekul | hibridizacija, resonanca, funkcionalne skupine",
              "Nomenklatura organskih spojin | pravila IUPAC v slovenščini"
            ]
          ],
          [
            "Biomolekule",
            [
              "Aminokisline in proteini | kislinsko-bazne lastnosti, zgradba proteinov",
              "Ogljikovi hidrati in lipidi | zgradba, vloga v celici",
              "Nukleinske kisline | zgradba DNA in RNA, podvajanje"
            ]
          ],
          [
            "Encimi in presnova",
            [
              "Encimska kinetika | Michaelis-Mentenova enačba, inhibicija",
              "Presnova | glikoliza, citratni cikel, oksidativna fosforilacija",
              "Fotosinteza | svetlobne reakcije, Calvinov cikel, C3 in C4 rastline"
            ]
          ]
        ]
      ],
      "CBOT": [
        "Botanika",
        "BIO",
        [],
        [
          [
            "Rastlinska celica in tkiva",
            [
              "Rastlinska celica | celična stena, plastidi, vakuola, primerjava z živalsko celico",
              "Rastlinska tkiva | tvorna, krovna, prevajalna in mehanska tkiva"
            ]
          ],
          [
            "Vegetativni organi",
            [
              "Korenina | zgradba, primarna in sekundarna rast, metamorfoze",
              "Steblo | zgradba, sekundarna debelitev, metamorfoze",
              "List | zgradba, listna razvrstitev, prilagoditve na okolje"
            ]
          ],
          [
            "Razmnoževanje semenk",
            [
              "Cvet in socvetja | zgradba cveta, cvetna formula, socvetja",
              "Opraševanje in oploditev | dvojna oploditev, razvoj semena",
              "Plodovi in semena | tipi plodov, razširjanje, kalitev"
            ]
          ],
          [
            "Sistematika rastlin",
            [
              "Načela sistematike rastlin | binarna nomenklatura, taksonomske kategorije, določevalni ključi",
              "Pomembne družine kulturnih rastlin | trave, metuljnice, križnice, rožnice, razhudnikovke, kobulnice",
              "Pleveli in travniške rastline | prepoznavanje, ekološke značilnosti"
            ]
          ]
        ]
      ],
      "CAGRMET": [
        "Agrometeorologija z osnovami fizike",
        "FIZ",
        [],
        [
          [
            "Osnove mehanike",
            [
              "Kinematika | premo in krivo gibanje, poševni met, kroženje",
              "Newtonovi zakoni in sile | trenje, sile pri kroženju, gravitacija",
              "Kontinuitetna in Bernoullijeva enačba | hidrostatika, tok idealne tekočine"
            ]
          ],
          [
            "Toplota",
            [
              "Idealni plin in kinetična teorija | plinska enačba, notranja energija, toplotne kapacitete",
              "Prenos toplote v naravi | prevajanje, konvekcija, sevanje, toplotni tok v tla"
            ]
          ],
          [
            "Sevanje in energijska bilanca",
            [
              "Sončno sevanje | spekter, zakoni sevanja, globalno sevanje, albedo",
              "Energijska bilanca površja | neto sevanje, zaznavna in latentna toplota"
            ]
          ],
          [
            "Ozračje in vreme",
            [
              "Temperatura zraka in tal | dnevni in letni hod, temperaturne vsote, pozeba",
              "Vlaga v zraku in padavine | parni tlak, relativna vlaga, rosišče, nastanek padavin",
              "Veter in zračni tlak | gradient tlaka, lokalni vetrovi, vpliv na rastline"
            ]
          ],
          [
            "Uporabna agrometeorologija",
            [
              "Evapotranspiracija | Penman-Monteithova enačba, referenčna evapotranspiracija, vodna bilanca",
              "Fenologija in agroklimatske razmere | fenološke faze, rastna doba, podnebne spremembe in kmetijstvo"
            ]
          ]
        ]
      ],
      "CBTINF": [
        "Biotehniška informatika",
        "RAC",
        [],
        [
          [
            "Osnove računalništva",
            [
              "Zapis podatkov v računalniku | biti, zlogi, številski sistemi, datotečni formati",
              "Računalniška omrežja in internet | splet, iskanje virov, varnost"
            ]
          ],
          [
            "Preglednice",
            [
              "Delo s preglednicami | formule, funkcije, sklici, grafi",
              "Urejanje in analiza podatkov | filtriranje, vrtilne tabele, osnovna statistika"
            ]
          ],
          [
            "Podatkovne baze",
            [
              "Relacijske podatkovne baze | tabele, ključi, relacije",
              "Poizvedbe SQL | SELECT, WHERE, JOIN, združevanje"
            ]
          ],
          [
            "Programiranje",
            [
              "Osnove algoritmov | spremenljivke, pogoji, zanke, funkcije",
              "Obdelava podatkov s programom | branje datotek, izračuni, izris grafov"
            ]
          ],
          [
            "Informatika v kmetijstvu",
            [
              "Geografski informacijski sistemi | prostorski podatki, sloji, karte rabe tal",
              "Digitalno kmetijstvo | senzorji, precizno kmetijstvo, kmetijske evidence"
            ]
          ]
        ]
      ],
      "CPEDO": [
        "Pedologija",
        "GEO",
        [],
        [
          [
            "Nastanek tal",
            [
              "Pedogenetski dejavniki | matična podlaga, podnebje, organizmi, relief, čas",
              "Preperevanje | fizikalno, kemijsko in biološko preperevanje, glineni minerali"
            ]
          ],
          [
            "Fizikalne lastnosti tal",
            [
              "Tekstura in struktura tal | teksturni razredi, agregati, gostota, poroznost",
              "Voda v tleh | vodni potencial, poljska kapaciteta, točka venenja, rastlinam dostopna voda",
              "Zrak in temperatura tal | prezračenost, toplotne lastnosti tal"
            ]
          ],
          [
            "Kemijske lastnosti tal",
            [
              "Kationska izmenjalna kapaciteta | koloidi, izmenljivi kationi, nasičenost z bazami",
              "Reakcija tal | pH, kisla in alkalna tla, apnjenje",
              "Organska snov tal | humus, humifikacija, mineralizacija, razmerje C/N"
            ]
          ],
          [
            "Klasifikacija tal",
            [
              "Talni profil in horizonti | opis profila, diagnostični horizonti",
              "Klasifikacija tal | slovenska klasifikacija, WRB, pedološka karta Slovenije"
            ]
          ]
        ]
      ],
      "CMIKRO": [
        "Mikrobiologija",
        "BIO",
        [],
        [
          [
            "Mikrobna celica",
            [
              "Zgradba prokariontske celice | celična stena, membrana, bički, endospore, barvanje po Gramu",
              "Glive, alge in virusi | zgradba, razmnoževanje, bakteriofagi"
            ]
          ],
          [
            "Rast mikroorganizmov",
            [
              "Mikrobna rast | rastna krivulja, generacijski čas, vpliv okolja",
              "Gojenje in sterilizacija | gojišča, aseptično delo, sterilizacija, dezinfekcija"
            ]
          ],
          [
            "Metabolizem in genetika",
            [
              "Mikrobni metabolizem | fermentacija, aerobno in anaerobno dihanje, kemolitotrofija",
              "Genetika mikroorganizmov | mutacije, transformacija, konjugacija, transdukcija"
            ]
          ],
          [
            "Mikrobna ekologija v kmetijstvu",
            [
              "Mikroorganizmi v tleh | kroženje ogljika in dušika, nitrifikacija, rizosfera",
              "Vezava dušika | simbioza z metuljnicami, gomoljne bakterije",
              "Mikroorganizmi v kmetijstvu | silaža, kompostiranje, rastlinski patogeni"
            ]
          ]
        ]
      ],
      "CEKONVK": [
        "Ekonomika večnamenskega kmetijstva",
        "EKO",
        [],
        [
          [
            "Osnove",
            [
              "Večnamensko kmetijstvo | tržne in netržne funkcije, javne dobrine, razvoj podeželja",
              "Ponudba in povpraševanje | tržno ravnovesje, cenovna elastičnost, kmetijski trgi"
            ]
          ],
          [
            "Kmetijsko gospodarstvo",
            [
              "Proizvodni dejavniki | zemlja, delo, kapital, proizvodna funkcija",
              "Stroški in prihodki | fiksni in variabilni stroški, pokritje, kalkulacije"
            ]
          ],
          [
            "Odločanje na kmetiji",
            [
              "Analiza proizvodnih odločitev | mejni prihodek in mejni strošek, optimalna intenzivnost",
              "Investicije v kmetijstvu | časovna vrednost denarja, neto sedanja vrednost"
            ]
          ],
          [
            "Kmetijska politika in trženje",
            [
              "Skupna kmetijska politika EU | neposredna plačila, ukrepi razvoja podeželja",
              "Dopolnilne dejavnosti in trženje | predelava na kmetiji, kratke verige, turizem na kmetiji"
            ]
          ]
        ]
      ],
      "CUREJZ": [
        "Urejanje kmetijskih zemljišč",
        "GEO",
        [],
        [
          [
            "Zemljišča in prostor",
            [
              "Kmetijska zemljišča in prostorsko načrtovanje | raba tal, varovanje zemljišč, zemljiški kataster",
              "Bonitiranje zemljišč | talno število, ocenjevanje pridelovalnega potenciala"
            ]
          ],
          [
            "Agrarne operacije",
            [
              "Komasacije | razdrobljenost posesti, postopek, učinki",
              "Agromelioracije | izravnave, odstranjevanje kamnov, poljske poti"
            ]
          ],
          [
            "Vodni režim zemljišč",
            [
              "Osuševanje | vzroki zamočvirjenja, drenaža, odvodni jarki",
              "Namakanje | potrebe rastlin po vodi, namakalni sistemi, namakalni obrok",
              "Erozija tal | vodna in vetrna erozija, protierozijski ukrepi"
            ]
          ],
          [
            "Urejanje zemljišč in okolje",
            [
              "Varovanje okolja pri urejanju zemljišč | biotska raznovrstnost, krajinski elementi, varstvo voda"
            ]
          ]
        ]
      ],
      "CSTAT": [
        "Statistika",
        "MAT",
        [
          "STATISTIKA"
        ],
        [
          [
            "Porazdelitve",
            [
              "Slučajne spremenljivke in porazdelitve | binomska, Poissonova, enakomerna, eksponentna, normalna",
              "Vzorčne porazdelitve | t-, hi-kvadrat in F-porazdelitev"
            ]
          ],
          [
            "Primerjave skupin",
            [
              "Primerjava dveh povprečij | t-test za neodvisna in odvisna vzorca",
              "Analiza variance | enosmerna ANOVA, F-test, mnogoterne primerjave",
              "Hi-kvadrat test | kontingenčne tabele, preizkus neodvisnosti"
            ]
          ],
          [
            "Odvisnost spremenljivk",
            [
              "Korelacija | Pearsonov in Spearmanov koeficient",
              "Linearna regresija | metoda najmanjših kvadratov, determinacijski koeficient"
            ]
          ],
          [
            "Poskusi v kmetijstvu",
            [
              "Načrtovanje poskusov | ponovitve, randomizacija, bločni poskus"
            ]
          ]
        ]
      ],
      "CFIZRAS": [
        "Fiziologija rastlin",
        "BIO",
        [],
        [
          [
            "Vodni režim",
            [
              "Voda v rastlini | vodni potencial, osmoza, privzem vode",
              "Transpiracija in transport | listne reže, ksilem, floem, kohezijska teorija"
            ]
          ],
          [
            "Mineralna prehrana",
            [
              "Mineralna prehrana rastlin | makro- in mikrohranila, znaki pomanjkanja",
              "Privzem ionov | membranski transport, mikoriza"
            ]
          ],
          [
            "Fotosinteza in dihanje",
            [
              "Fotosinteza | svetlobne reakcije, Calvinov cikel, C3 in C4 rastline",
              "Dihanje rastlin | glikoliza, mitohondrijsko dihanje, fotorespiracija"
            ]
          ],
          [
            "Rast in razvoj",
            [
              "Rastlinski hormoni | avksini, citokinini, giberelini, abscizinska kislina, etilen",
              "Fotomorfogeneza in cvetenje | fitokromi, fotoperiodizem, vernalizacija",
              "Kalitev in dormanca | mirovanje semen, pogoji kalitve"
            ]
          ],
          [
            "Stresna fiziologija",
            [
              "Odziv rastlin na stres | suša, mraz, slanost, oksidativni stres"
            ]
          ]
        ]
      ],
      "CGENRAS": [
        "Rastlinska genetika",
        "BIO",
        [],
        [
          [
            "Molekularna osnova dedovanja",
            [
              "Nukleinske kisline | zgradba DNA in RNA, podvajanje",
              "Izražanje genov | transkripcija, translacija, genetski kod, regulacija",
              "Mitoza in mejoza | kromosomi, celični cikel, nastanek gamet"
            ]
          ],
          [
            "Mendelska genetika",
            [
              "Mendlovi zakoni | monohibridno in dihibridno križanje, dominanca",
              "Interakcije genov | epistaza, nepopolna dominanca, multipli aleli",
              "Vezanost genov | crossing-over, genetske karte"
            ]
          ],
          [
            "Kvantitativna in populacijska genetika",
            [
              "Kvantitativne lastnosti | poligeni, heritabilnost, varianca",
              "Populacijska genetika | Hardy-Weinbergovo ravnotežje, selekcija, genetski zdrs"
            ]
          ],
          [
            "Spremembe genoma",
            [
              "Mutacije in poliploidija | genske in kromosomske mutacije, avto- in alopoliploidi",
              "Molekulski markerji | PCR, SSR, SNP, uporaba pri rastlinah"
            ]
          ]
        ]
      ],
      "CZLAHT": [
        "Osnove žlahtnjenja rastlin",
        "BIO",
        [],
        [
          [
            "Osnove žlahtnjenja",
            [
              "Cilji in zgodovina žlahtnjenja | domestikacija, genski viri, sorta",
              "Načini razmnoževanja in žlahtnjenje | samoprašnice, tujeprašnice, vegetativno razmnoževanje"
            ]
          ],
          [
            "Metode žlahtnjenja",
            [
              "Žlahtnjenje samoprašnic | linijska selekcija, pedigrejska metoda, povratno križanje",
              "Žlahtnjenje tujeprašnic | masovna selekcija, rekurentna selekcija, sintetične sorte",
              "Heterozis in hibridi | inbriding, moška sterilnost, F1 hibridi"
            ]
          ],
          [
            "Sodobni pristopi",
            [
              "Selekcija z markerji | MAS, genomska selekcija",
              "Rastlinska biotehnologija | tkivne kulture, gensko spremenjene rastline, urejanje genoma"
            ]
          ],
          [
            "Sorte in semenarstvo",
            [
              "Sortne lastnosti in preizkušanje | preizkušanje RIN in VCU, sortna lista, semenarstvo",
              "Žlahtniteljske pravice | varstvo sort, zakonodaja"
            ]
          ]
        ]
      ],
      "CSPLVRT": [
        "Splošno vrtnarstvo",
        "BIO",
        [],
        [
          [
            "Uvod v vrtnarstvo",
            [
              "Vrtnarstvo in njegove panoge | zelenjadarstvo, okrasne rastline, pridelava v Sloveniji",
              "Razvrstitev vrtnin | botanična in pridelovalna razvrstitev"
            ]
          ],
          [
            "Rastni dejavniki",
            [
              "Rastni dejavniki pri vrtninah | svetloba, temperatura, voda, hranila",
              "Kolobar in kombinirani posevki | plodored, kolobarne skupine"
            ]
          ],
          [
            "Razmnoževanje",
            [
              "Setev in vzgoja sadik | kakovost semena, setvene tehnike, vzgoja v ploščah",
              "Vegetativno razmnoževanje okrasnih rastlin | potaknjenci, delitev, cepljenje"
            ]
          ],
          [
            "Zavarovani prostori",
            [
              "Rastlinjaki in oprema | tipi, ogrevanje, zračenje, senčenje",
              "Hidroponika | substrati, hranilne raztopine, NFT"
            ]
          ],
          [
            "Tehnologija pridelave",
            [
              "Načini pridelave | integrirana, ekološka in konvencionalna pridelava",
              "Spravilo in skladiščenje vrtnin | zrelost, spravilo, hladilniško skladiščenje"
            ]
          ]
        ]
      ],
      "CSPLSAD": [
        "Splošno sadjarstvo",
        "BIO",
        [],
        [
          [
            "Uvod v sadjarstvo",
            [
              "Sadjarstvo v svetu in Sloveniji | pridelava, sadne vrste, zgodovina",
              "Razvrstitev sadnih rastlin | pečkarji, koščičarji, lupinarji, jagodičje"
            ]
          ],
          [
            "Biologija sadnih rastlin",
            [
              "Rast in razvoj sadnih rastlin | razvojne faze, rodni in vegetativni organi",
              "Cvetenje in oploditev | brstenje, opraševanje, opraševalne sorte, zaroditev",
              "Rast plodov in zorenje | rast plodu, zrelost, redčenje"
            ]
          ],
          [
            "Tehnologija pridelave",
            [
              "Podlage in razmnoževanje | cepljenje, vegetativne in generativne podlage",
              "Sadilne razdalje in gojitvene oblike | vitko vreteno, rez, sadovnjak",
              "Oskrba tal in prehrana | gnojenje, namakanje, zatravljanje"
            ]
          ],
          [
            "Kakovost sadja",
            [
              "Obiranje in skladiščenje sadja | kakovost, skladiščenje v kontrolirani atmosferi (ULO)"
            ]
          ]
        ]
      ],
      "CKMTEH": [
        "Kmetijska tehnika",
        "FIZ",
        [],
        [
          [
            "Osnove",
            [
              "Mehanika strojev | sila, navor, moč, izkoristek",
              "Motorji z notranjim zgorevanjem | štiritaktni proces, dizelski motor, poraba goriva"
            ]
          ],
          [
            "Traktor",
            [
              "Traktor | zgradba, prenos moči, priključna gred, hidravlika",
              "Vlečna sila in oprijem | zdrs, kotalni upor, zbijanje tal"
            ]
          ],
          [
            "Stroji v rastlinski pridelavi",
            [
              "Stroji za obdelavo tal | plug, brana, kultivator, konzervirajoča obdelava",
              "Stroji za setev, gnojenje in varstvo | sejalnice, trosilniki, škropilnice, umerjanje",
              "Stroji za spravilo | kombajn, stroji za spravilo krme"
            ]
          ],
          [
            "Tehnika v živinoreji",
            [
              "Tehnika v hlevu | molzni stroji, krmljenje, odstranjevanje gnoja"
            ]
          ],
          [
            "Energija in digitalizacija",
            [
              "Obnovljivi viri energije v kmetijstvu | bioplin, sončna energija",
              "Precizno kmetijstvo | GNSS, samodejno vodenje, spremenljivo odmerjanje"
            ]
          ]
        ]
      ],
      "CFITOM1": [
        "Fitomedicina I",
        "BIO",
        [],
        [
          [
            "Osnove fitopatologije",
            [
              "Bolezni rastlin in povzročitelji | glive, bakterije, virusi, fitoplazme",
              "Bolezenski krog | okužba, inkubacija, širjenje, epidemiologija",
              "Diagnostika bolezni | simptomi, znaki, laboratorijske metode"
            ]
          ],
          [
            "Osnove entomologije",
            [
              "Žuželke kot škodljivci | zgradba, razvoj, preobrazba, tipi ustnega aparata",
              "Drugi škodljivci | pršice, ogorčice, polži, glodavci"
            ]
          ],
          [
            "Bolezni in škodljivci poljščin",
            [
              "Bolezni poljščin | rje, sneti, plesni, fuzarioze",
              "Škodljivci poljščin | koruzni hrošč, listne uši, strune"
            ]
          ],
          [
            "Varstvo rastlin",
            [
              "Načela integriranega varstva | prag škodljivosti, napovedovanje, kolobar",
              "Fitofarmacevtska sredstva | delovanje, karenca, varna raba",
              "Biotično varstvo | koristni organizmi, entomopatogeni, feromoni"
            ]
          ]
        ]
      ],
      "CTRAVN": [
        "Travništvo",
        "BIO",
        [],
        [
          [
            "Travinje",
            [
              "Travinje v Sloveniji in svetu | trajno in sejano travinje, pomen",
              "Travniške rastline | trave, metuljnice, zeli, prepoznavanje"
            ]
          ],
          [
            "Ekologija travinja",
            [
              "Ruša in rastišče | botanična sestava, vpliv rabe, gnojenja in košnje",
              "Tipi travinja | ekstenzivni in intenzivni travniki, pašniki"
            ]
          ],
          [
            "Pridelava in raba",
            [
              "Gnojenje travinja | živinska gnojila, dušik, fosfor, kalij",
              "Košnja in raba | razvojni stadij, število košenj, kakovost krme",
              "Paša | kolobarjenje pašnikov, obtežba, pašni sistemi"
            ]
          ],
          [
            "Konzerviranje krme",
            [
              "Seno in silaža | sušenje, siliranje, kakovost konzervirane krme",
              "Hranilna vrednost krme | surove beljakovine, vlaknina, energijska vrednost"
            ]
          ],
          [
            "Obnova travinja",
            [
              "Obnova in dosejevanje | travno-deteljne mešanice, zatiranje plevelov"
            ]
          ]
        ]
      ],
      "CKLIM": [
        "Klimatologija",
        "FIZ",
        [],
        [
          [
            "Podnebni sistem",
            [
              "Podnebni sistem | atmosfera, hidrosfera, kriosfera, biosfera, povratne zanke",
              "Splošna cirkulacija ozračja | cirkulacijske celice, zračne mase, fronte"
            ]
          ],
          [
            "Podnebje",
            [
              "Klimatski elementi in dejavniki | temperatura, padavine, geografska širina, relief",
              "Klasifikacija podnebij | Köppnova klasifikacija, podnebje Slovenije"
            ]
          ],
          [
            "Podnebne spremembe",
            [
              "Toplogredni učinek | sevalna bilanca, toplogredni plini",
              "Podnebni scenariji | podnebni modeli, IPCC, projekcije",
              "Prilagajanje kmetijstva | suša, vročinski stres, prilagoditveni ukrepi"
            ]
          ]
        ]
      ],
      "CRODTAL": [
        "Rodovitnost tal in gnojenje",
        "GEO",
        [],
        [
          [
            "Rodovitnost tal",
            [
              "Rodovitnost tal | dejavniki rodovitnosti, analiza tal",
              "Kroženje hranil | dušik, fosfor in kalij v tleh"
            ]
          ],
          [
            "Gnojila",
            [
              "Mineralna gnojila | vrste, vsebnost hranil, uporaba",
              "Organska gnojila | hlevski gnoj, gnojevka, kompost",
              "Apnjenje | potreba po apnu, vpliv na pH tal",
              "Mikrohranila | bor, cink, mangan, foliarno gnojenje"
            ]
          ],
          [
            "Gnojilni načrt",
            [
              "Gnojilni načrt | odvzem hranil, bilanca, priporočila",
              "Gnojenje in okolje | izpiranje nitrata, nitratna direktiva, dobra kmetijska praksa"
            ]
          ]
        ]
      ],
      "CEKOTAL": [
        "Ekologija tal",
        "GEO",
        [],
        [
          [
            "Talni organizmi",
            [
              "Talna biota | mikroorganizmi, mezofavna, deževniki",
              "Rizosfera | koreninski izločki, mikoriza, interakcije"
            ]
          ],
          [
            "Procesi v tleh",
            [
              "Razgradnja organske snovi | dekompozicija, humifikacija",
              "Kroženje dušika v tleh | mineralizacija, nitrifikacija, denitrifikacija"
            ]
          ],
          [
            "Kakovost tal",
            [
              "Biološki kazalniki kakovosti tal | mikrobna biomasa, dihanje tal, encimska aktivnost",
              "Vpliv rabe na talne organizme | obdelava tal, pesticidi, onesnaženje"
            ]
          ],
          [
            "Tla in podnebje",
            [
              "Ogljik v tleh | zaloge ogljika, vezava ogljika, toplogredni plini iz tal",
              "Varovanje tal | degradacija, erozija, zbijanje"
            ]
          ]
        ]
      ],
      "CZDRAR": [
        "Zdravilne in aromatične rastline",
        "BIO",
        [],
        [
          [
            "Uvod",
            [
              "Zdravilne in aromatične rastline | opredelitve, pomen, zakonodaja",
              "Sekundarni metaboliti | eterična olja, alkaloidi, flavonoidi, čreslovine"
            ]
          ],
          [
            "Vrste",
            [
              "Pomembne vrste | kamilica, poprova meta, ameriški slamnik, ognjič, šetraj",
              "Samonikle zdravilne rastline | nabiranje, zavarovane vrste"
            ]
          ],
          [
            "Pridelava",
            [
              "Tehnologija pridelave | setev, oskrba, ekološka pridelava",
              "Spravilo in sušenje | čas spravila, sušenje, shranjevanje"
            ]
          ],
          [
            "Kakovost in uporaba",
            [
              "Kakovost droge | vsebnost učinkovin, destilacija eteričnih olj, standardi",
              "Uporaba zdravilnih rastlin | fitoterapija, prehrana, kozmetika"
            ]
          ]
        ]
      ],
      "CBIODZ": [
        "Biologija domačih živali",
        "BIO",
        [],
        [
          [
            "Celica in tkiva",
            [
              "Živalska celica | organeli, membrana, celični cikel",
              "Živalska tkiva | epitelno, vezivno, mišično, živčno tkivo"
            ]
          ],
          [
            "Izvor domačih živali",
            [
              "Udomačitev | izvor domačih živali, divji predniki",
              "Sistematika domačih živali | vretenčarji, sesalci, ptiči, pasme"
            ]
          ],
          [
            "Razmnoževanje in razvoj",
            [
              "Razmnoževanje | gametogeneza, oploditev, spolni cikel",
              "Embrionalni razvoj | brazdanje, klični listi, organogeneza"
            ]
          ],
          [
            "Genetske osnove",
            [
              "Mendlovi zakoni | monohibridno in dihibridno križanje, dominanca",
              "Dedovanje spola in spolno vezane lastnosti | spolni kromosomi, barva perja"
            ]
          ],
          [
            "Organski sistemi",
            [
              "Pregled organskih sistemov | prebavila, dihala, obtočila, izločala"
            ]
          ]
        ]
      ],
      "CETOL": [
        "Etologija",
        "BIO",
        [],
        [
          [
            "Osnove etologije",
            [
              "Etologija kot veda | Tinbergenova vprašanja, metode opazovanja",
              "Prirojeno in naučeno vedenje | nagoni, vtisnjenje, učenje"
            ]
          ],
          [
            "Vedenje domačih živali",
            [
              "Socialno vedenje | hierarhija, komunikacija, agresija",
              "Prehranjevalno in spolno vedenje | paša, prežvekovanje, dvorjenje, materinsko vedenje"
            ]
          ],
          [
            "Dobrobit živali",
            [
              "Dobrobit živali | pet svoboščin, kazalniki dobrobiti",
              "Stres in nenormalno vedenje | stereotipije, grizenje repov"
            ]
          ],
          [
            "Uporabna etologija",
            [
              "Okolje in reja | obogatitev okolja, prostor, hlevska tehnologija",
              "Ravnanje z živalmi | rokovanje, prevoz, zakol"
            ]
          ]
        ]
      ],
      "CMIKIMU": [
        "Mikrobiologija z imunologijo",
        "BIO",
        [],
        [
          [
            "Mikroorganizmi",
            [
              "Zgradba prokariontske celice | celična stena, membrana, bički, endospore, barvanje po Gramu",
              "Glive, alge in virusi | zgradba, razmnoževanje, bakteriofagi"
            ]
          ],
          [
            "Rast in nadzor mikroorganizmov",
            [
              "Mikrobna rast | rastna krivulja, generacijski čas, vpliv okolja",
              "Gojenje in sterilizacija | gojišča, aseptično delo, sterilizacija, dezinfekcija"
            ]
          ],
          [
            "Mikrobiologija v živinoreji",
            [
              "Mikroorganizmi v prebavilih | vamp, mikrobna fermentacija",
              "Mikrobiologija krme in živil | silaža, mleko, kvarljivci"
            ]
          ],
          [
            "Imunologija",
            [
              "Prirojena imunost | fagocitoza, vnetje, komplement",
              "Pridobljena imunost | limfociti B in T, protitelesa, imunski spomin",
              "Cepljenje in imunizacija | aktivna in pasivna imunizacija, kolostrum"
            ]
          ]
        ]
      ],
      "COSPEDGN": [
        "Osnove pedologije in gnojenje",
        "GEO",
        [],
        [
          [
            "Nastanek tal",
            [
              "Pedogenetski dejavniki | matična podlaga, podnebje, organizmi, relief, čas",
              "Talni profil in horizonti | opis profila, diagnostični horizonti"
            ]
          ],
          [
            "Lastnosti tal",
            [
              "Tekstura in struktura tal | teksturni razredi, agregati, gostota, poroznost",
              "Voda v tleh | vodni potencial, poljska kapaciteta, točka venenja, rastlinam dostopna voda",
              "Reakcija tal | pH, kisla in alkalna tla, apnjenje",
              "Organska snov tal | humus, humifikacija, mineralizacija, razmerje C/N"
            ]
          ],
          [
            "Gnojenje",
            [
              "Mineralna gnojila | vrste, vsebnost hranil, uporaba",
              "Organska gnojila | hlevski gnoj, gnojevka, kompost",
              "Gnojilni načrt | odvzem hranil, bilanca, priporočila",
              "Gnojenje in okolje | izpiranje nitrata, nitratna direktiva, dobra kmetijska praksa"
            ]
          ]
        ]
      ],
      "CSPLZIV": [
        "Splošna živinoreja",
        "BIO",
        [],
        [
          [
            "Živinoreja",
            [
              "Pomen živinoreje | vrste in pasme domačih živali, reja v Sloveniji",
              "Rejni sistemi | intenzivna, ekstenzivna in ekološka reja"
            ]
          ],
          [
            "Lastnosti živali",
            [
              "Proizvodne lastnosti | mleko, meso, jajca, volna, merjenje",
              "Ocenjevanje zunanjosti | telesne mere, linearno ocenjevanje"
            ]
          ],
          [
            "Selekcija",
            [
              "Izboljševanje lastnosti | fenotip, genotip, okolje, heritabilnost",
              "Plemenska vrednost | kontrola proizvodnje, rodovnik, selekcijski indeks"
            ]
          ],
          [
            "Pleme in reprodukcija",
            [
              "Metode parjenja | čistopasemska reja, križanje, parjenje v sorodstvu",
              "Reprodukcija | spolni cikel, osemenjevanje, plodnost"
            ]
          ]
        ]
      ],
      "CSPLPOLJ": [
        "Splošno poljedelstvo",
        "BIO",
        [],
        [
          [
            "Poljedelstvo",
            [
              "Poljščine in njihov pomen | žita, okopavine, krmne rastline, industrijske rastline",
              "Rastni dejavniki | tla, voda, svetloba, toplota"
            ]
          ],
          [
            "Agrotehnika",
            [
              "Obdelava tal | osnovna in dopolnilna obdelava, konzervirajoča obdelava",
              "Setev | kakovost semena, setvena norma, gostota sklopa",
              "Kolobar | kolobarni členi, predposevki, podsevki, strniščni posevki"
            ]
          ],
          [
            "Oskrba posevkov",
            [
              "Gnojenje poljščin | potrebe po hranilih, dognojevanje",
              "Zatiranje plevelov | mehanski in kemični ukrepi, herbicidi"
            ]
          ],
          [
            "Pridelava",
            [
              "Žita | pšenica, koruza, ječmen, tehnologija pridelave",
              "Pridelava krme na njivi | silažna koruza, deteljno-travne mešanice"
            ]
          ]
        ]
      ],
      "CVARRAS": [
        "Varstvo rastlin",
        "BIO",
        [],
        [
          [
            "Škodljivi organizmi",
            [
              "Bolezni rastlin in povzročitelji | glive, bakterije, virusi, fitoplazme",
              "Žuželke kot škodljivci | zgradba, razvoj, preobrazba, tipi ustnega aparata",
              "Pleveli | biologija plevelov, škodljivost"
            ]
          ],
          [
            "Načini varstva",
            [
              "Načela integriranega varstva | prag škodljivosti, napovedovanje, kolobar",
              "Fitofarmacevtska sredstva | delovanje, karenca, varna raba",
              "Biotično varstvo | koristni organizmi, entomopatogeni, feromoni"
            ]
          ],
          [
            "Varstvo krmnih rastlin",
            [
              "Bolezni in škodljivci koruze in travinja | koruzni hrošč, rje, ogorčice",
              "Skladiščni škodljivci | škodljivci zrnja, mikotoksini"
            ]
          ]
        ]
      ],
      "CFIZANA": [
        "Fiziologija z anatomijo domačih živali",
        "BIO",
        [],
        [
          [
            "Gibala in živčevje",
            [
              "Okostje in mišice | kosti, sklepi, zgradba in krčenje mišic",
              "Živčni sistem | nevron, akcijski potencial, avtonomno živčevje",
              "Endokrini sistem | hipofiza, ščitnica, nadledvična žleza, rastni hormon"
            ]
          ],
          [
            "Obtočila in dihala",
            [
              "Kri in krvni obtok | srce, krvni tlak, krvne celice",
              "Dihala | izmenjava plinov, dihanje pri pticah"
            ]
          ],
          [
            "Prebavila",
            [
              "Prebavila prežvekovalcev | vamp, kapica, prebiralnik, siriščnik, prežvekovanje",
              "Prebavila enoželodčnih živali in perutnine | prašič, kokoš, absorpcija hranil"
            ]
          ],
          [
            "Razmnoževanje in laktacija",
            [
              "Spolni organi in spolni cikel | jajčnik, mod, estrusni cikel, brejost",
              "Mlečna žleza in laktacija | zgradba vimena, sinteza mleka, molža"
            ]
          ],
          [
            "Izločala in termoregulacija",
            [
              "Ledvice in termoregulacija | nastanek seča, vodna bilanca, uravnavanje telesne temperature"
            ]
          ]
        ]
      ],
      "COSPREH": [
        "Osnove prehrane živali",
        "BIO",
        [],
        [
          [
            "Hranljive snovi",
            [
              "Sestava krme | Weendska analiza, voda, surove beljakovine, maščobe, vlaknina",
              "Ogljikovi hidrati in maščobe v prehrani | škrob, celuloza, maščobne kisline",
              "Beljakovine in aminokisline | esencialne aminokisline, biološka vrednost, razgradljivost v vampu"
            ]
          ],
          [
            "Minerali in vitamini",
            [
              "Minerali | makro- in mikroelementi, pomanjkanje",
              "Vitamini | v maščobah in v vodi topni vitamini"
            ]
          ],
          [
            "Energija in prebavljivost",
            [
              "Energijska vrednost krme | bruto, prebavljiva, presnovljiva, neto energija",
              "Prebavljivost | metode določanja, dejavniki prebavljivosti"
            ]
          ],
          [
            "Potrebe in obroki",
            [
              "Potrebe živali | vzdrževanje, rast, laktacija, brejost",
              "Sestavljanje obrokov | normativi, izračun obroka"
            ]
          ]
        ]
      ],
      "CSADVIN": [
        "Sadjarstvo in vinogradništvo",
        "BIO",
        [],
        [
          [
            "Sadjarstvo",
            [
              "Sadjarstvo v svetu in Sloveniji | pridelava, sadne vrste, zgodovina",
              "Razvrstitev sadnih rastlin | pečkarji, koščičarji, lupinarji, jagodičje",
              "Tehnologija pridelave sadja | podlage, gojitvene oblike, rez"
            ]
          ],
          [
            "Vinogradništvo",
            [
              "Vinska trta | botanika, sorte, podlage",
              "Vinorodni okoliši Slovenije | rajonizacija, priporočene sorte",
              "Tehnologija pridelave grozdja | gojitvene oblike, rez, zelena dela"
            ]
          ],
          [
            "Spravilo in kakovost",
            [
              "Zorenje in trgatev | sladkorji, kisline, čas trgatve",
              "Obiranje in skladiščenje sadja | kakovost, skladiščenje v kontrolirani atmosferi (ULO)"
            ]
          ]
        ]
      ],
      "DMAT": [
        "Matematika",
        "MAT",
        [
          "MAT_1"
        ],
        [
          [
            "Funkcije več spremenljivk in diferencialne enačbe",
            [
              "Parcialni odvodi | parcialni odvodi, totalni diferencial, gradient, verižno pravilo",
              "Diferencialne enačbe prvega reda | ločljive in linearne enačbe, začetni problem, modeli rasti in razpada"
            ]
          ],
          [
            "Verjetnost in statistika",
            [
              "Klasična verjetnost | kombinatorika, pogojna verjetnost, neodvisnost, Bayesova formula",
              "Verjetnost in statistika | porazdelitve, povprečje, standardni odklon, linearna regresija"
            ]
          ]
        ]
      ],
      "DSPLKEM": [
        "Splošna kemija",
        "KEM",
        [
          "SPL_KEM"
        ],
        []
      ],
      "DBOTFIZ": [
        "Botanika s fiziologijo rastlin",
        "BIO",
        [],
        [
          [
            "Rastlinska celica in tkiva",
            [
              "Rastlinska celica | celična stena, plastidi, vakuola, razlike z živalsko celico",
              "Rastlinska tkiva | tvorna, krovna, prevajalna in mehanska tkiva"
            ]
          ],
          [
            "Zgradba rastlinskih organov",
            [
              "Koren, steblo in list | zgradba, primarna in sekundarna rast, prilagoditve",
              "Razmnoževanje semenk | cvet, oprašitev, oploditev, seme in plod"
            ]
          ],
          [
            "Sistematika rastlin",
            [
              "Pregled rastlinskega sistema | mahovi, praprotnice, golosemenke, kritosemenke",
              "Določanje rastlin | določevalni ključi, znanstvena imena, herbarij"
            ]
          ],
          [
            "Fiziologija rastlin",
            [
              "Vodni režim rastlin | vodni potencial, transpiracija, prevajanje vode",
              "Fotosinteza in dihanje | svetlobne reakcije, Calvinov cikel, C3 in C4 rastline, celično dihanje",
              "Mineralna prehrana in rast | makro- in mikrohranila, rastlinski hormoni, odziv na stres"
            ]
          ]
        ]
      ],
      "DDENDRO": [
        "Dendrologija z žlahtnjenjem gozdnega drevja",
        "BIO",
        [],
        [
          [
            "Uvod v dendrologijo",
            [
              "Dendrologija kot biološka disciplina | lesnate rastline, taksonomske kategorije, nomenklatura",
              "Biogeografija drevesnih vrst | areali, vegetacijski pasovi, poledenodobne migracije"
            ]
          ],
          [
            "Iglavci",
            [
              "Golosemenke slovenskih gozdov | smreka, jelka, bori, macesen, tisa – prepoznavanje in ekologija"
            ]
          ],
          [
            "Listavci",
            [
              "Bukovke in brezovke | bukev, hrasti, pravi kostanj, gaber, breza, jelša",
              "Drugi domači listavci | javorji, jeseni, lipe, bresti, divje sadno drevje, grmovne vrste",
              "Tujerodne drevesne vrste | duglazija, robinija, pajesen, invazivnost"
            ]
          ],
          [
            "Žlahtnjenje gozdnega drevja",
            [
              "Genetska variabilnost gozdnega drevja | provenience, genetska pestrost, prilagojenost",
              "Gozdni reprodukcijski material | semenski objekti, seme in sadike, zakonodaja",
              "Žlahtnjenje in ohranjanje genskih virov | selekcija, semenske plantaže, genske banke"
            ]
          ]
        ]
      ],
      "DGOZZOO": [
        "Gozdna zoologija z zooekologijo",
        "BIO",
        [],
        [
          [
            "Pregled živalskega sistema",
            [
              "Sistematika živali | nevretenčarji, vretenčarji, ključne skupine v gozdu",
              "Gozdne žuželke | zgradba, razvoj, podlubniki, defoliatorji, koristne vrste"
            ]
          ],
          [
            "Vretenčarji gozda",
            [
              "Gozdni ptiči | duplarji, ujede, vloga v gozdnem ekosistemu",
              "Sesalci v gozdu | parkljarji, zveri, mali sesalci, prepoznavanje sledov"
            ]
          ],
          [
            "Zooekologija",
            [
              "Populacijska ekologija | rast populacije, gostota, nosilna zmogljivost okolja",
              "Interakcije med vrstami | plenjenje, tekmovanje, herbivorija, vpliv parkljarjev na pomlajevanje",
              "Upravljanje prostoživečih živali | velike zveri, konflikti s človekom, varstvo vrst"
            ]
          ]
        ]
      ],
      "DRACPRAK": [
        "Praktikum iz računalništva",
        "RAC",
        [],
        [
          [
            "Osnove računalništva",
            [
              "Računalniški sistemi in datoteke | strojna in programska oprema, datotečni sistem, varnost podatkov"
            ]
          ],
          [
            "Preglednice",
            [
              "Delo s preglednicami | formule, relativni in absolutni sklici, funkcije, grafi",
              "Statistična obdelava rezultatov | povprečje, standardni odklon, interval zaupanja, značilne števke",
              "Urejanje in analiza podatkov | filtriranje, razvrščanje, vrtilne tabele, uvoz podatkov"
            ]
          ],
          [
            "Podatkovne baze in programiranje",
            [
              "Osnove podatkovnih baz | tabele, ključi, relacije, poizvedbe",
              "Osnove programiranja | spremenljivke, pogojni stavki, zanke, makri"
            ]
          ]
        ]
      ],
      "DGEODEZ": [
        "Geodezija in kartografija",
        "GEO",
        [],
        [
          [
            "Osnove geodezije",
            [
              "Oblika Zemlje in koordinatni sistemi | geoid, elipsoid, državni koordinatni sistem D96/TM",
              "Napake merjenj | grobe, sistematične in slučajne napake, natančnost"
            ]
          ],
          [
            "Geodetske meritve",
            [
              "Merjenje razdalj in kotov | busola, totalna postaja, redukcija dolžin",
              "Višinomerstvo | geometrični nivelman, trigonometrično višinomerstvo",
              "Satelitska določitev položaja | GNSS, natančnost v gozdu"
            ]
          ],
          [
            "Kartografija",
            [
              "Karte in kartografske projekcije | merilo, projekcije, topografske karte",
              "Prikaz reliefa | plastnice, digitalni model reliefa, naklon in ekspozicija"
            ]
          ],
          [
            "Uporaba v gozdarstvu",
            [
              "Izmera v gozdu | poligonski vlak, izračun površin, gozdne meje",
              "Geografski informacijski sistemi | vektorski in rastrski podatki, ortofoto, lidar"
            ]
          ]
        ]
      ],
      "DMETEO": [
        "Meteorologija",
        "FIZ",
        [],
        [
          [
            "Atmosfera in sevanje",
            [
              "Sestava in zgradba atmosfere | plasti, tlak z višino, standardna atmosfera",
              "Sevanje in energijska bilanca | sončno in zemeljsko sevanje, albedo, učinek tople grede"
            ]
          ],
          [
            "Temperatura in vlaga",
            [
              "Temperatura zraka in tal | dnevni in letni hod, temperaturne inverzije, pozebe",
              "Vlažen zrak | absolutna in relativna vlažnost, Mollierov diagram",
              "Oblaki in padavine | kondenzacija, nastanek padavin, merjenje padavin"
            ]
          ],
          [
            "Gibanje zraka",
            [
              "Veter in zračni tlak | gradient tlaka, Coriolisova sila, lokalni vetrovi",
              "Vremenski sistemi | zračne mase, fronte, cikloni in anticikloni"
            ]
          ],
          [
            "Podnebje",
            [
              "Podnebje in mikroklima gozda | podnebni tipi, mikroklima sestoja, vpliv gozda na klimo",
              "Podnebne spremembe | opazovani trendi, scenariji, posledice za gozd"
            ]
          ]
        ]
      ],
      "DPEDOL": [
        "Pedologija z geologijo in mikrobiologijo tal",
        "GEO",
        [],
        [
          [
            "Geologija",
            [
              "Minerali in kamnine | magmatske, sedimentne in metamorfne kamnine, prepoznavanje",
              "Geološka podlaga Slovenije | karbonatne in silikatne kamnine, preperevanje"
            ]
          ],
          [
            "Nastanek in lastnosti tal",
            [
              "Nastanek tal | pedogenetski dejavniki in procesi, talni horizonti",
              "Fizikalne lastnosti tal | tekstura, struktura, poroznost, voda v tleh",
              "Kemijske lastnosti tal | pH, kationska izmenjalna kapaciteta, organska snov, hranila"
            ]
          ],
          [
            "Sistematika tal",
            [
              "Tipi gozdnih tal v Sloveniji | rendzine, rjava tla, izprana tla, psevdoglej, opis talnega profila"
            ]
          ],
          [
            "Mikrobiologija tal",
            [
              "Mikroorganizmi v tleh | bakterije, glive, mikoriza",
              "Kroženje hranil v tleh | razgradnja organske snovi, humifikacija, kroženje dušika"
            ]
          ]
        ]
      ],
      "DFITOCEN": [
        "Gozdna fitocenologija",
        "BIO",
        [],
        [
          [
            "Osnove fitocenologije",
            [
              "Rastlinska združba in rastišče | ekološki dejavniki, kazalne rastline",
              "Metode popisa vegetacije | Braun-Blanquetova metoda, fitocenološki popis, fitocenološke tabele"
            ]
          ],
          [
            "Klasifikacija vegetacije",
            [
              "Sintaksonomija | asociacija, zveza, red, razred, nomenklatura",
              "Gozdne združbe Slovenije | bukovi, jelovo-bukovi, hrastovi, borovi in obrečni gozdovi"
            ]
          ],
          [
            "Uporaba v gozdarstvu",
            [
              "Rastiščni tipi in kartiranje vegetacije | gozdnovegetacijske karte, rastiščni koeficient",
              "Dinamika vegetacije | sukcesija, potencialna naravna vegetacija, degradacijski stadiji"
            ]
          ]
        ]
      ],
      "DEKORAST": [
        "Ekologija rastlin",
        "BIO",
        [],
        [
          [
            "Rastline in dejavniki okolja",
            [
              "Rastlina in okolje | ekološki dejavniki, toleranca, ekološka niša",
              "Svetloba in temperatura | sencovzdržne in svetloljubne vrste, fotoperiodizem, mraz in vročina",
              "Voda in hranila | sušni stres, vodna bilanca, prehranske strategije"
            ]
          ],
          [
            "Populacije in združbe",
            [
              "Populacije rastlin | rast populacije, strategije razmnoževanja, tekmovanje",
              "Rastlinske združbe in ekosistemi | primarna produkcija, kroženje snovi, biodiverziteta"
            ]
          ],
          [
            "Rastline v spreminjajočem se okolju",
            [
              "Globalne spremembe in rastline | dvig CO2, segrevanje, premiki arealov",
              "Motnje in obnova vegetacije | požari, vetrolomi, sukcesija po motnji"
            ]
          ]
        ]
      ],
      "DGOZPODJ": [
        "Gozdno podjetništvo",
        "EKO",
        [],
        [
          [
            "Podjetje in trg",
            [
              "Podjetništvo in podjetje | pravne oblike, podjetniška ideja, poslovni načrt",
              "Gozdna posest in trg lesa | lastništvo gozdov v Sloveniji, ponudba in povpraševanje, cene lesa"
            ]
          ],
          [
            "Ekonomika poslovanja",
            [
              "Stroški in kalkulacije | stalni in spremenljivi stroški, stroški sečnje in spravila, prelomna točka",
              "Investicije v gozdarstvu | časovna vrednost denarja, neto sedanja vrednost, donosnost"
            ]
          ],
          [
            "Trženje in organizacija",
            [
              "Trženje gozdnih proizvodov | lesni in nelesni gozdni proizvodi, certificiranje FSC in PEFC",
              "Izvajanje gozdnih del | izvajalci, pogodbe, varnost pri delu, predpisi"
            ]
          ]
        ]
      ],
      "DPRIDLES": [
        "Pridobivanje lesa",
        "BIO",
        [],
        [
          [
            "Sistemi pridobivanja lesa",
            [
              "Tehnološki proces pridobivanja lesa | sečnja, izdelava, spravilo, prevoz, sistemi dela",
              "Gozdni lesni sortimenti | hlodi, prostorninski les, merjenje in izračun prostornine"
            ]
          ],
          [
            "Sečnja in izdelava",
            [
              "Ročno-strojna sečnja | motorna žaga, tehnika podiranja, krojenje",
              "Strojna sečnja | harvester, zmogljivost, primernost terena"
            ]
          ],
          [
            "Spravilo in prevoz",
            [
              "Spravilo lesa | traktorsko in žičniško spravilo, forwarder, zmogljivost",
              "Gozdne prometnice | gozdne ceste in vlake, odprtost gozdov"
            ]
          ],
          [
            "Delo in okolje",
            [
              "Varnost in ergonomija | obremenitve delavca, zaščitna oprema, nezgode",
              "Vplivi na sestoj in tla | poškodbe drevja in tal, sonaravno pridobivanje lesa"
            ]
          ]
        ]
      ],
      "DGOZEKN": [
        "Gozdna ekologija in nega",
        "BIO",
        [],
        [
          [
            "Ekologija gozda",
            [
              "Gozd kot ekosistem | zgradba sestoja, svetlobne razmere, kroženje snovi",
              "Razvojne faze in dinamika gozda | naravna dinamika, motnje, pragozd"
            ]
          ],
          [
            "Nega gozda",
            [
              "Nega mladja in gošče | čiščenje, izbira, uravnavanje zmesi",
              "Nega drogovnjaka in debeljaka | redčenje, izbiralno redčenje, drevje prihodnosti"
            ]
          ],
          [
            "Posebne oblike gozdov",
            [
              "Prebiralni gozd | prebiralna zgradba, ravnotežje, prebiralna sečnja",
              "Gozdni rob in obrežni gozdovi | zgradba, funkcije, nega"
            ]
          ],
          [
            "Obnova gozda",
            [
              "Naravna in umetna obnova | pomladitveni postopki, sadnja, zaščita pomladka"
            ]
          ]
        ]
      ],
      "DUREJ": [
        "Osnove urejanja gozdov",
        "BIO",
        [],
        [
          [
            "Merjenje gozda",
            [
              "Merjenje dreves | prsni premer, višina, volumenske tablice",
              "Gozdna inventura | stalne vzorčne ploskve, lesna zaloga, prirastek"
            ]
          ],
          [
            "Načela gospodarjenja",
            [
              "Funkcije gozdov | ekološke, socialne in proizvodne funkcije, poudarjenost",
              "Trajnostno gospodarjenje | trajnost donosov, normalni gozd, možni posek"
            ]
          ],
          [
            "Gozdnogospodarsko načrtovanje",
            [
              "Sistem načrtovanja v Sloveniji | območja, enote, oddelki, načrtovalske ravni",
              "Prostorski podatki pri urejanju | sestojna karta, GIS, daljinsko zaznavanje"
            ]
          ]
        ]
      ],
      "DGLOBSPR": [
        "Globalne spremembe in gozdni ekosistemi",
        "BIO",
        [],
        [
          [
            "Globalne spremembe",
            [
              "Podnebne spremembe | toplogredni plini, scenariji, regionalni vplivi",
              "Druge globalne spremembe | onesnaževanje, depozicija dušika, tujerodne vrste"
            ]
          ],
          [
            "Odziv gozdov",
            [
              "Vplivi na gozdne ekosisteme | suša, motnje, premiki vrst, ogljik v gozdu",
              "Prilagajanje gospodarjenja | izbira vrst, odpornost in prožnost gozdov"
            ]
          ]
        ]
      ],
      "DKEMLES": [
        "Kemija lesa",
        "KEM",
        [],
        [
          [
            "Kemijska sestava lesa",
            [
              "Kemijska sestava lesa | glavne in akcesorne sestavine, razlike med iglavci in listavci"
            ]
          ],
          [
            "Polisaharidi",
            [
              "Celuloza | zgradba, stopnja polimerizacije, kristaliničnost, reakcije",
              "Hemiceluloze | zgradba, razlike med vrstami lesa, hidroliza"
            ]
          ],
          [
            "Lignin in ekstraktivi",
            [
              "Lignin | fenilpropanske enote, vezi, delignifikacija",
              "Ekstraktivi | terpeni, fenolne spojine, vpliv na lastnosti lesa",
              "Skorja | kemijska sestava, uporaba"
            ]
          ],
          [
            "Analiza in spremembe lesa",
            [
              "Kemijska analiza lesa | določanje sestavin, spektroskopske in kromatografske metode",
              "Kemijske spremembe lesa | razgradnja, staranje, toplotna razgradnja"
            ]
          ]
        ]
      ],
      "DFIZ": [
        "Fizika",
        "FIZ",
        [
          "FIZ_1",
          "FIZ_2"
        ],
        []
      ],
      "DLESSKOD": [
        "Lesni škodljivci",
        "BIO",
        [],
        [
          [
            "Razkroj lesa",
            [
              "Dejavniki razkroja lesa | abiotski in biotski dejavniki, naravna odpornost lesa"
            ]
          ],
          [
            "Glive",
            [
              "Glive razkrojevalke | rjava, bela in mehka trohnoba, pogoji za razvoj",
              "Glive modrivke in plesni | obarvanje lesa, vpliv na uporabnost"
            ]
          ],
          [
            "Živalski škodljivci",
            [
              "Lesni insekti | hišni kozliček, trdoglavci, termiti, razvojni krog",
              "Morski škodljivci in bakterije | ladijske svedrovke, bakterijski razkroj"
            ]
          ],
          [
            "Prepoznavanje in zaščita",
            [
              "Prepoznavanje poškodb | diagnostika, ocena stanja lesa v objektih",
              "Zaščita lesa | konstrukcijska zaščita, zaščitna sredstva, razredi uporabe"
            ]
          ]
        ]
      ],
      "DMEH": [
        "Mehanika",
        "FIZ",
        [
          "STATIKA",
          "TRDNOST"
        ],
        [
          [
            "Dinamika",
            [
              "Newtonovi zakoni in sile | trenje, sile pri kroženju, gravitacija",
              "Delo, energija in gibalna količina | izrek o kinetični energiji, ohranitveni zakoni, trki"
            ]
          ]
        ]
      ],
      "DMATER": [
        "Osnove znanosti o materialih za lesarsko inženirstvo",
        "KEM",
        [
          "NEKOV_MAT"
        ],
        [
          [
            "Zgradba materialov",
            [
              "Atomska zgradba in vezi v materialih | kovinska, ionska in kovalentna vez, sekundarne vezi",
              "Kristalna zgradba kovin | kristalne mreže, napake v kristalih"
            ]
          ],
          [
            "Lastnosti materialov",
            [
              "Mehanske lastnosti materialov | natezni preizkus, trdota, žilavost",
              "Napetosti in deformacije | Hookov zakon, natezni preizkus, dopustna napetost",
              "Fizikalne lastnosti materialov | gostota, toplotna prevodnost, toplotno raztezanje"
            ]
          ],
          [
            "Les med materiali",
            [
              "Les kot naravni kompozit | celična stena, anizotropija, primerjava z drugimi materiali",
              "Izbira materialov | Ashbyjevi diagrami, specifična trdnost in togost"
            ]
          ]
        ]
      ],
      "DSTROJ": [
        "Stroji za mehansko obdelavo lesa",
        "FIZ",
        [],
        [
          [
            "Osnove odrezavanja",
            [
              "Rezalni klin in odrezavanje | koti rezila, rezalne sile, rezalna hitrost",
              "Pogoni in prenosi | elektromotorji, jermenski prenos, vrtilna frekvenca"
            ]
          ],
          [
            "Obdelovalni stroji",
            [
              "Žage | tračne, krožne in jarmenične žage, rezalna moč",
              "Stroji za skobljanje in rezkanje | poravnalni in debelinski skobeljni stroj, rezkarji",
              "Brusilni in vrtalni stroji | brusni trakovi, granulacija, vrtanje"
            ]
          ],
          [
            "Sodobni stroji in varnost",
            [
              "CNC stroji | krmiljenje, koordinatne osi, osnove programiranja",
              "Varnost in vzdrževanje | zaščitne naprave, hrup, prah, ostrenje orodij"
            ]
          ]
        ]
      ],
      "DTEHRIS": [
        "Tehnično risanje in opisna geometrija",
        "MAT",
        [],
        [
          [
            "Opisna geometrija",
            [
              "Pravokotna projekcija | Mongeov postopek, točka, premica, ravnina",
              "Prava velikost in transformacije | prava dolžina daljice, prava oblika lika, rotacija",
              "Preseki teles | presek prizme, piramide in valja z ravnino"
            ]
          ],
          [
            "Prostorski prikazi",
            [
              "Aksonometrija | izometrija, dimetrija, poševna projekcija"
            ]
          ],
          [
            "Tehnično risanje",
            [
              "Standardi tehničnega risanja | formati, merila, vrste črt, tehnična pisava",
              "Pogledi, prerezi in kotiranje | razporeditev pogledov, prerezi, kotiranje",
              "Risbe lesnih izdelkov | sestavne in delavniške risbe, lesne zveze, tolerance"
            ]
          ]
        ]
      ],
      "DZGLES1": [
        "Zgradba lesa I",
        "BIO",
        [],
        [
          [
            "Nastanek lesa",
            [
              "Nastanek lesa | kambij, ksilem, branika, rani in kasni les",
              "Ravnine lesa | prečni, radialni in tangencialni prerez"
            ]
          ],
          [
            "Mikroskopska zgradba",
            [
              "Les iglavcev | traheide, trakovi, smolni kanali",
              "Les listavcev | traheje, vlakna, aksialni parenhim, venčasto in difuzno porozen les",
              "Celična stena | plasti, mikrofibrile, piknje"
            ]
          ],
          [
            "Določanje lesa",
            [
              "Makroskopska identifikacija lesa | barva, beljava in jedrovina, določevalni ključi",
              "Mikroskopska identifikacija lesa | priprava preparatov, diagnostični znaki",
              "Napake lesa | grče, reakcijski les, zavitost vlaken"
            ]
          ]
        ]
      ],
      "DTEHLES": [
        "Tehnologija lesa",
        "FIZ",
        [],
        [
          [
            "Les in voda",
            [
              "Vlažnost lesa | vrste vode v lesu, točka nasičenja celičnih sten, merjenje vlažnosti",
              "Sorpcija | sorpcijske izoterme, ravnovesna vlažnost, histereza",
              "Krčenje in nabrekanje | anizotropija, koeficienti krčenja, dimenzijska stabilnost"
            ]
          ],
          [
            "Fizikalne lastnosti",
            [
              "Gostota lesa | normalna in nominalna gostota, vpliv vlažnosti",
              "Toplotne in električne lastnosti lesa | toplotna prevodnost, specifična toplota, električna upornost"
            ]
          ],
          [
            "Mehanske lastnosti",
            [
              "Mehanske lastnosti lesa | modul elastičnosti, upogibna, natezna in tlačna trdnost",
              "Napetosti in deformacije | Hookov zakon, natezni preizkus, dopustna napetost",
              "Reologija lesa | lezenje, relaksacija, vpliv vlage in temperature"
            ]
          ],
          [
            "Hidrotermična obdelava",
            [
              "Sušenje lesa | sušilni režimi, napake sušenja, hidrotermična obdelava"
            ]
          ]
        ]
      ],
      "DMEHOBD": [
        "Tehnologije mehanske obdelave lesa in lesnih tvoriv",
        "FIZ",
        [],
        [
          [
            "Primarna predelava",
            [
              "Žagarstvo | razrez hlodovine, izkoristek, žagan les",
              "Furnir in vezan les | luščenje in rezanje furnirja, izdelava vezanega lesa"
            ]
          ],
          [
            "Obdelava z odrezavanjem",
            [
              "Kakovost obdelane površine | hrapavost, vpliv parametrov odrezavanja",
              "Obdelovalni postopki | žaganje, skobljanje, rezkanje, brušenje"
            ]
          ],
          [
            "Lesna tvoriva",
            [
              "Lepljenje lesa | lepila, priprava površin, lepilni spoji",
              "Lesni ploščni kompoziti | iverne, vlaknene in OSB plošče, postopki izdelave"
            ]
          ]
        ]
      ],
      "DRACKON": [
        "Računalniško podprto konstruiranje",
        "RAC",
        [],
        [
          [
            "CAD",
            [
              "Osnove CAD | 2D-risanje, plasti, kotiranje",
              "3D-modeliranje | parametrično modeliranje, sestavi, tehnična dokumentacija"
            ]
          ],
          [
            "Konstruiranje izdelkov",
            [
              "Konstruiranje pohištva | lesne zveze, okovje, kosovnica",
              "Od modela do proizvodnje | priprava za CNC, izvoz podatkov"
            ]
          ]
        ]
      ],
      "DBIOTLES": [
        "Biotehnologija v lesarstvu",
        "BIO",
        [],
        [
          [
            "Biotehnološki postopki",
            [
              "Encimi in mikroorganizmi v lesarstvu | razgradnja lignoceluloze, biološka obdelava lesa",
              "Biološka zaščita lesa | antagonistični organizmi, naravna zaščitna sredstva"
            ]
          ],
          [
            "Uporaba",
            [
              "Biorafinerija lesne biomase | biogoriva, kemikalije iz lesa",
              "Bioremediacija odsluženega lesa | razgradnja zaščitnih sredstev, recikliranje"
            ]
          ]
        ]
      ]
    },
    "programs": {
      "UL-BF-BIO": {
        "name": "Biologija",
        "source": "https://www.bf.uni-lj.si/sl/studij/studijski-programi/predmetnik/2020091015345656/biologija",
        "sourceYear": "2025/26; 1. letnik po predmetniku BF, 2. in 3. letnik iz urnikov BIUN in iskalnih izvlečkov – ni v celoti preverjen",
        "years": [
          [
            "ABIOCEL",
            "AFIZ",
            "AMAT",
            "AMIKRO",
            "ASPLKEM",
            "AANAT",
            "AMIKROPR",
            "AORGKEM",
            "ASPLBOT",
            "ASPLZOO"
          ],
          [
            "ABIOKEM",
            "AGEN",
            "ASISTBOT",
            "AZOONEV",
            "ADIVVRET"
          ],
          [
            "AEKOL",
            "AEVOL",
            "AETOL",
            "AFIZROST",
            "AFIZZIV",
            "ABIOINF"
          ]
        ],
        "electives": [
          "AGEOPAL",
          "AEVOLCL",
          "ASTAT"
        ]
      },
      "UL-BF-MIKRO": {
        "name": "Mikrobiologija",
        "source": "https://www.bf.uni-lj.si/sl/studij/studijski-programi/predmetnik/2020091415102933/mikrobiologija",
        "sourceYear": "2025/26; 2. letnik le delno preverjen",
        "years": [
          [
            "AUVMIKRO",
            "AMIKPRAK",
            "AKEM",
            "AMATMET",
            "ABIOKEMMB",
            "ABIOCELM",
            "ABIOVEC",
            "AMOLBIO"
          ],
          [
            "AIMUN",
            "AVIROL",
            "AMIKFIZ"
          ],
          [
            "AMEDMIK",
            "AMIKRAZ",
            "AANMET",
            "AMIKEKO"
          ]
        ],
        "electives": [
          "AZIVMIK",
          "APORPAT"
        ]
      },
      "UL-BF-BT": {
        "name": "Biotehnologija (UN)",
        "source": "https://www.bf.uni-lj.si/mma/1000090_Biotehnologija.pdf/2025012111432069/?m=1737456200",
        "sourceYear": "2024/25 (verzija programa 2024-2); 3. letnik ni v celoti preverjen",
        "years": [
          [
            "BBIOL",
            "BKEM",
            "BMATMET",
            "BSTAT",
            "BUVBT",
            "BGEN1",
            "BBIOKEM",
            "BMMP",
            "BFIZBT"
          ],
          [
            "BGEN2",
            "BFIZIOL",
            "BBTTEH",
            "BVARREG",
            "BBIOINF",
            "BRTK",
            "BZTK",
            "BIMUN"
          ],
          [
            "BBTRAST",
            "BBTZIV",
            "BBTGLIV",
            "BBTMIKRO",
            "BBIOETIKA",
            "BUVEKON"
          ]
        ],
        "electives": [
          "BUPENCIM",
          "BREJLAB"
        ]
      },
      "UL-BF-ZP": {
        "name": "Živilstvo in prehrana (UN)",
        "source": "https://www.bf.uni-lj.si/sl/studij/studijski-programi/predmetnik/2020091415110841/zivilstvo-in-prehrana",
        "sourceYear": "2024/25; 2. in 3. letnik nista v celoti preverjena",
        "years": [
          [
            "BBIOL",
            "BFIZ",
            "BKEM",
            "BMATMET",
            "BUVZIV",
            "BANALZIV",
            "BANATHIS",
            "BOSMIKRO",
            "BOSPRED",
            "BPRIDHR",
            "BUVEKON"
          ],
          [
            "BBIOKEM",
            "BFIZPRES",
            "BHIGIENA",
            "BKAKZAK",
            "BOSPREH",
            "BTEHPROC",
            "BZIVKEM",
            "BZIVMIKRO"
          ],
          [
            "BTPRAST",
            "BTPMESML",
            "BOSBIOT",
            "BODPO",
            "BKLINDIET"
          ]
        ],
        "electives": [
          "BPAKIR"
        ]
      },
      "UL-BF-AGR": {
        "name": "Kmetijstvo – agronomija",
        "source": "https://www.bf.uni-lj.si/sl/studij/studijski-programi/predmetnik/2020091415054283/kmetijstvo--agronomija",
        "sourceYear": "2025/26 (1. letnik); 2. in 3. letnik ni v celoti preverjen",
        "years": [
          [
            "CMAT",
            "CKEMBIO",
            "CBOT",
            "CAGRMET",
            "CPEDO",
            "CBTINF",
            "CMIKRO",
            "CEKONVK",
            "CUREJZ"
          ],
          [
            "CSTAT",
            "CFIZRAS",
            "CGENRAS",
            "CZLAHT",
            "CSPLVRT",
            "CSPLSAD",
            "CKMTEH"
          ],
          [
            "CFITOM1",
            "CTRAVN"
          ]
        ],
        "electives": [
          "CKLIM",
          "CRODTAL",
          "CEKOTAL",
          "CZDRAR"
        ]
      },
      "UL-BF-ZOO": {
        "name": "Kmetijstvo – zootehnika",
        "source": "https://www.bf.uni-lj.si/sl/studij/studijski-programi/predmetnik/2020091415073424/kmetijstvo--zootehnika",
        "sourceYear": "2025/26 (1. letnik); 2. letnik ni v celoti preverjen; 3. letnik ni preverjen",
        "years": [
          [
            "CMAT",
            "CKEMBIO",
            "CBOT",
            "CBIODZ",
            "CETOL",
            "CEKONVK",
            "CMIKIMU",
            "COSPEDGN",
            "CSPLZIV",
            "CSPLPOLJ",
            "CVARRAS"
          ],
          [
            "CFIZANA",
            "COSPREH",
            "CKMTEH"
          ],
          []
        ],
        "electives": [
          "CSADVIN"
        ]
      },
      "UL-BF-GOZD": {
        "name": "Gozdarstvo in obnovljivi gozdni viri",
        "source": "https://www.bf.uni-lj.si/sl/studij/studijski-programi/predmetnik/2020091415050778/gozdarstvo-in-obnovljivi-gozdni-viri",
        "sourceYear": "2025/26; 2. in 3. letnik nista v celoti preverjena",
        "years": [
          [
            "DBOTFIZ",
            "DDENDRO",
            "DGOZZOO",
            "DMAT",
            "DRACPRAK",
            "DSPLKEM",
            "DGEODEZ",
            "DMETEO",
            "DPEDOL"
          ],
          [
            "DGOZPODJ",
            "DFITOCEN",
            "DPRIDLES",
            "DEKORAST"
          ],
          [
            "DGOZEKN",
            "DUREJ"
          ]
        ],
        "electives": [
          "DGLOBSPR"
        ]
      },
      "UL-BF-LES": {
        "name": "Lesarstvo",
        "source": "https://www.bf.uni-lj.si/sl/studij/studijski-programi/predmetnik/2020091415093487/lesarstvo",
        "sourceYear": "2025/26; 2. letnik le delno, 3. letnik ni preverjen",
        "years": [
          [
            "DMAT",
            "DKEMLES",
            "DFIZ",
            "DLESSKOD",
            "DMEH",
            "DMATER",
            "DSTROJ",
            "DTEHRIS",
            "DZGLES1"
          ],
          [
            "DTEHLES",
            "DMEHOBD"
          ],
          []
        ],
        "electives": [
          "DRACKON",
          "DBIOTLES"
        ]
      }
    }
  },
  {
    "id": "UL-NTF",
    "name": "UL Naravoslovnotehniška fakulteta",
    "short": "UL NTF",
    "courses": {
      "GMAT1": [
        "Matematika 1",
        "MAT",
        [
          "MAT_1"
        ],
        []
      ],
      "GMAT2": [
        "Matematika 2",
        "MAT",
        [
          "MAT_2"
        ],
        []
      ],
      "GFIZ1": [
        "Fizika 1",
        "FIZ",
        [
          "FIZ_1"
        ],
        []
      ],
      "GOSNGEO": [
        "Osnove geologije",
        "GEO",
        [],
        [
          [
            "Zemlja kot sistem",
            [
              "Zgradba Zemlje | jedro, plašč, skorja, litosfera in astenosfera, seizmični dokazi",
              "Tektonika plošč | divergentne, konvergentne in transformne meje, mehanizmi gibanja plošč, kamninski krog"
            ]
          ],
          [
            "Minerali in kamnine",
            [
              "Kamninotvorni minerali | silikati, karbonati, prepoznavanje v vzorcu",
              "Magmatske kamnine | nastanek magme, globočnine in predornine, osnovna razvrstitev",
              "Sedimentne kamnine | preperevanje, transport, diageneza, klastične in karbonatne kamnine",
              "Metamorfne kamnine | dejavniki metamorfoze, foliacija, metamorfne facije"
            ]
          ],
          [
            "Geološki čas",
            [
              "Relativno datiranje | načela stratigrafije, superpozicija, prečni odnosi",
              "Absolutno datiranje | radioaktivni razpad, razpolovni čas, radiometrične metode",
              "Geološka časovna lestvica | eoni, ere, periode, ključni dogodki"
            ]
          ],
          [
            "Geološke zgradbe in površinski procesi",
            [
              "Gube in prelomi | vpad in smer, tipi prelomov, gubanje",
              "Površinski procesi | rečna, ledeniška, eolska in obalna erozija, kras"
            ]
          ],
          [
            "Življenje in podnebje",
            [
              "Fosili in razvoj življenja | fosilizacija, razvoj življenja, množična izumrtja",
              "Paleoklima | podnebna nihanja, ledene dobe, kazalci paleoklime"
            ]
          ]
        ]
      ],
      "GKRIST": [
        "Kristalografija",
        "GEO",
        [],
        [
          [
            "Kristalna zgradba",
            [
              "Kristalna mreža in osnovna celica | translacija, mrežni parametri, Bravaisove mreže",
              "Millerjevi indeksi | indeksiranje ploskev in smeri, kristalne oblike"
            ]
          ],
          [
            "Simetrija",
            [
              "Elementi simetrije | rotacijske osi, zrcalne ravnine, center simetrije, inverzijske osi",
              "Kristalni razredi in sistemi | 32 točkovnih grup, sedem kristalnih sistemov",
              "Prostorske grupe | vijačne osi, drsne ravnine, Hermann-Mauguinove oznake"
            ]
          ],
          [
            "Projekcije in morfologija",
            [
              "Stereografska projekcija | Wulffova mreža, prikaz ploskev in osi",
              "Kristalna morfologija | habitus, dvojčki, rast kristalov"
            ]
          ],
          [
            "Kristalokemija in difrakcija",
            [
              "Kristalokemija | ionski polmeri, koordinacijsko število, Paulingova pravila, polimorfizem, izomorfizem",
              "Rentgenska praškovna difrakcija | Braggov zakon, difraktogram, identifikacija faz"
            ]
          ]
        ]
      ],
      "GMINER": [
        "Mineralogija",
        "GEO",
        [],
        [
          [
            "Lastnosti mineralov",
            [
              "Makroskopske lastnosti mineralov | trdota, razkolnost, lom, barva, raza, sijaj, gostota",
              "Optične lastnosti mineralov | lomni količnik, dvolomnost, polarizacijski mikroskop"
            ]
          ],
          [
            "Sistematika mineralov",
            [
              "Samorodne prvine, sulfidi in oksidi | zgradba, predstavniki, nahajališča",
              "Karbonati, sulfati in halogenidi | kalcit, dolomit, sadra, halit",
              "Silikati | tetraeder SiO4, nezosilikati, inosilikati, filosilikati, tektosilikati"
            ]
          ],
          [
            "Nastanek mineralov",
            [
              "Geneza mineralov | magmatski, hidrotermalni, sedimentni in metamorfni nastanek",
              "Trdne raztopine in stabilnost mineralov | izomorfne zamenjave, stabilnostna polja"
            ]
          ],
          [
            "Določevanje mineralov",
            [
              "Kemijska formula minerala | preračun kemijske analize v formulo, zamenjave ionov",
              "Metode določanja mineralov | rentgenska difrakcija, elektronska mikroanaliza, determinacijski ključi"
            ]
          ]
        ]
      ],
      "GPALEO": [
        "Paleontologija",
        "GEO",
        [],
        [
          [
            "Osnove paleontologije",
            [
              "Fosilizacija in tafonomija | tipi ohranitve, nepopolnost fosilnega zapisa",
              "Taksonomija in sistematika | binomska nomenklatura, vrsta v paleontologiji",
              "Evolucija in fosilni zapis | naravni izbor, makroevolucija, množična izumrtja"
            ]
          ],
          [
            "Fosilni nevretenčarji",
            [
              "Protisti in spužve | foraminifere, radiolariji, arheociati",
              "Korale in mahovnjaki | zgradba skeleta, grebeni skozi čas",
              "Brahiopodi in mehkužci | školjke, polži, glavonožci, amoniti",
              "Členonožci in iglokožci | trilobiti, krinoidi, morski ježki"
            ]
          ],
          [
            "Vretenčarji in rastline",
            [
              "Fosilni vretenčarji | ribe, prehod na kopno, dinozavri, razvoj sesalcev",
              "Paleobotanika | razvoj kopenskih rastlin, pelod in spore"
            ]
          ],
          [
            "Uporaba fosilov",
            [
              "Biostratigrafija | vodilni fosili, biocone, korelacija",
              "Paleoekologija | okolje življenja, faciesi, paleogeografija"
            ]
          ]
        ]
      ],
      "GGIS": [
        "GIS v geologiji",
        "RAC",
        [],
        [
          [
            "Osnove GIS",
            [
              "Prostorski podatki | vektorski in rastrski model, atributne tabele",
              "Koordinatni sistemi | geodetski datum, kartografske projekcije, D96/TM"
            ]
          ],
          [
            "Zajem in analiza podatkov",
            [
              "Zajem prostorskih podatkov | digitalizacija, georeferenciranje, GNSS",
              "Prostorske analize | prekrivanje slojev, vplivna območja, prostorske poizvedbe"
            ]
          ],
          [
            "Geološke karte v GIS",
            [
              "Digitalni model reliefa | naklon, ekspozicija, senčenje",
              "Izdelava geološke karte v GIS | simbologija, legenda, postavitev karte"
            ]
          ]
        ]
      ],
      "GSTAT": [
        "Statistika v geologiji",
        "MAT",
        [
          "STATISTIKA"
        ],
        [
          [
            "Opisna statistika in porazdelitve",
            [
              "Opisna statistika geoloških podatkov | histogram, mediana, kvartili, škatla z brki",
              "Porazdelitve v geologiji | normalna in lognormalna porazdelitev, transformacija podatkov"
            ]
          ],
          [
            "Korelacija in multivariatne metode",
            [
              "Korelacija in regresija | Pearsonov in Spearmanov koeficient, linearni model, ostanki",
              "Multivariatne metode | analiza glavnih komponent, razvrščanje v skupine"
            ]
          ],
          [
            "Prostorska statistika",
            [
              "Geostatistika | variogram, kriging, prostorska interpolacija"
            ]
          ]
        ]
      ],
      "GZGOD": [
        "Zgodovina geologije",
        "GEO",
        [],
        [
          [
            "Od antike do 18. stoletja",
            [
              "Antični in srednjeveški pogledi na Zemljo | Aristotel, Plinij, Agricola",
              "Neptunisti in plutonisti | Werner, Hutton, aktualizem"
            ]
          ],
          [
            "19. in 20. stoletje",
            [
              "Razvoj stratigrafije in paleontologije | Smith, Cuvier, nastanek geološke lestvice",
              "Uniformitarizem in starost Zemlje | Lyell, Kelvin, radiometrično datiranje",
              "Od premikanja celin do tektonike plošč | Wegener, širjenje oceanskega dna, paleomagnetizem"
            ]
          ],
          [
            "Geologija na Slovenskem",
            [
              "Razvoj geologije v Sloveniji | Hacquet, rudnik Idrija, geološko kartiranje Slovenije"
            ]
          ]
        ]
      ],
      "GPETMAG": [
        "Petrologija magmatskih kamnin",
        "GEO",
        [],
        [
          [
            "Magma",
            [
              "Nastanek magme | delno taljenje, dekompresija, dodajanje vode",
              "Fizikalne lastnosti magme | viskoznost, temperatura, raztopljeni plini"
            ]
          ],
          [
            "Kristalizacija magme",
            [
              "Bowenova reakcijska vrsta | frakcionirana kristalizacija, magmatska diferenciacija",
              "Fazni diagrami magmatskih sistemov | binarni evtektik, trdna raztopina plagioklazov"
            ]
          ],
          [
            "Klasifikacija in teksture",
            [
              "Klasifikacija magmatskih kamnin | diagram QAPF, diagram TAS, modalna in kemična sestava",
              "Teksture magmatskih kamnin | zrnatost, porfirska in steklasta tekstura"
            ]
          ],
          [
            "Magmatizem in tektonika",
            [
              "Magmatizem na mejah plošč | bazalti srednjeoceanskih hrbtov, otočni loki, riftovi, vroče točke",
              "Intruzivna in vulkanska telesa | batoliti, dajki, sili, lave, piroklastiti"
            ]
          ]
        ]
      ],
      "GPETMET": [
        "Petrologija metamorfnih kamnin",
        "GEO",
        [],
        [
          [
            "Metamorfoza",
            [
              "Dejavniki metamorfoze | temperatura, tlak, fluidi, deformacija",
              "Tipi metamorfoze | regionalna, kontaktna, dinamična, udarna"
            ]
          ],
          [
            "Mineralne parageneze",
            [
              "Metamorfne reakcije | dehidratacijske reakcije, izogradi, indeksni minerali",
              "Metamorfne facije | zelenih skrilavcev, amfibolitna, granulitna, eklogitna, modrih skrilavcev"
            ]
          ],
          [
            "Klasifikacija in teksture",
            [
              "Klasifikacija metamorfnih kamnin | skrilavec, filit, gnajs, marmor, kvarcit",
              "Metamorfne teksture | foliacija, lineacija, porfiroblasti"
            ]
          ],
          [
            "Metamorfoza in tektonika",
            [
              "Poti P-T-t | geotermobarometrija, ekshumacija",
              "Metamorfni pasovi | subdukcija, kolizija, metamorfoza v Alpah"
            ]
          ]
        ]
      ],
      "GSEDPET": [
        "Sedimentna petrologija",
        "GEO",
        [],
        [
          [
            "Sedimentni procesi",
            [
              "Preperevanje | fizikalno, kemično in biološko preperevanje",
              "Transport in odlaganje | vlečenje, suspenzija, sedimentne strukture"
            ]
          ],
          [
            "Klastične kamnine",
            [
              "Granulometrija | velikost zrn, sortiranost, zaobljenost",
              "Peščenjaki in konglomerati | klasifikacija, modalna sestava, provenienca",
              "Glinavci in meljevci | glineni minerali, laminacija"
            ]
          ],
          [
            "Karbonatne in druge kamnine",
            [
              "Karbonatne kamnine | alokemi, Folkova in Dunhamova klasifikacija",
              "Evaporiti in silicijeve kamnine | nastanek, roženec"
            ]
          ],
          [
            "Diageneza",
            [
              "Diageneza | kompakcija, cementacija, dolomitizacija, poroznost"
            ]
          ]
        ]
      ],
      "GGEOKEM": [
        "Geokemija",
        "GEO",
        [],
        [
          [
            "Kemijska zgradba Zemlje",
            [
              "Razširjenost elementov | kozmična razširjenost, Goldschmidtova razvrstitev",
              "Sestava geosfer | skorja, plašč, hidrosfera, atmosfera"
            ]
          ],
          [
            "Geokemija procesov",
            [
              "Vodne raztopine in ravnotežja | topnost mineralov, karbonatni sistem, diagrami Eh-pH",
              "Geokemija magmatskih procesov | glavni in sledni elementi, porazdelitveni koeficient"
            ]
          ],
          [
            "Izotopska geokemija",
            [
              "Stabilni izotopi | zapis delta, frakcionacija kisika in ogljika",
              "Radiogeni izotopi | metodi Rb-Sr in U-Pb, izohrone"
            ]
          ],
          [
            "Cikli in metode",
            [
              "Geokemični cikli | kroženje ogljika, žvepla in dušika",
              "Analitske metode v geokemiji | XRF, ICP-MS, priprava vzorcev"
            ]
          ]
        ]
      ],
      "GSTRAT": [
        "Stratigrafija",
        "GEO",
        [],
        [
          [
            "Načela in enote",
            [
              "Načela stratigrafije | superpozicija, prvotna horizontalnost, lateralna kontinuiteta",
              "Stratigrafske enote | litostratigrafske, biostratigrafske in kronostratigrafske enote"
            ]
          ],
          [
            "Stratigrafske metode",
            [
              "Litostratigrafija | formacija, člen, plast, korelacija profilov",
              "Biostratigrafija | vodilni fosili, biocone, korelacija",
              "Magnetostratigrafija in kemostratigrafija | inverzije magnetnega polja, izotopske krivulje"
            ]
          ],
          [
            "Sekvenčna stratigrafija in faciesi",
            [
              "Sekvenčna stratigrafija | relativna gladina morja, sistemski trakti, sekvenčne meje",
              "Faciesi in Waltherjev zakon | faciesne asociacije, sedimentacijska okolja"
            ]
          ],
          [
            "Geokronologija",
            [
              "Mednarodna kronostratigrafska lestvica | GSSP, meje period, numerične starosti"
            ]
          ]
        ]
      ],
      "GSTRUKT": [
        "Strukturna geologija",
        "GEO",
        [],
        [
          [
            "Napetost in deformacija",
            [
              "Napetost v kamninah | tenzor napetosti, glavne napetosti, Mohrov krog",
              "Deformacija | homogena deformacija, elipsoid deformacije, kinematska analiza"
            ]
          ],
          [
            "Krhka deformacija",
            [
              "Razpoke in prelomi | Andersonova teorija, normalni, reverzni in zmični prelomi",
              "Narivi | narivne strukture, odlepne ploskve"
            ]
          ],
          [
            "Duktilna deformacija",
            [
              "Gube | geometrija in klasifikacija gub, mehanizmi gubanja",
              "Foliacija, lineacija in strižne cone | klivaž, milonit, kinematski indikatorji"
            ]
          ],
          [
            "Strukturne meritve",
            [
              "Stereografska analiza struktur | vpad in smer vpada, Schmidtova mreža, rožni diagrami",
              "Geološki prerezi | konstrukcija prereza, uravnoteženi prerezi"
            ]
          ]
        ]
      ],
      "GMIKRO": [
        "Osnove mikroskopije",
        "GEO",
        [],
        [
          [
            "Polarizacijski mikroskop",
            [
              "Zgradba polarizacijskega mikroskopa | osvetlitev, polarizator, analizator, objektivi",
              "Priprava zbruskov | debelina zbruska, impregnacija, poliranje"
            ]
          ],
          [
            "Optične lastnosti v zbrusku",
            [
              "Opazovanje pri vzporednih nikolih | relief, barva, pleohroizem, razkolnost",
              "Opazovanje pri navzkrižnih nikolih | interferenčne barve, potemnitev, dvojčični zraščanje"
            ]
          ],
          [
            "Prepoznavanje mineralov",
            [
              "Določevanje kamninotvornih mineralov v zbrusku | kremen, glinenci, sljude, amfiboli, pirokseni"
            ]
          ]
        ]
      ],
      "GKVART": [
        "Geologija kvartarja",
        "GEO",
        [],
        [
          [
            "Kvartarno podnebje",
            [
              "Ledene dobe | Milankovićevi cikli, glacialni in interglacialni stadiji",
              "Kazalci paleoklime | izotopi kisika, pelod, ledene vrtine"
            ]
          ],
          [
            "Kvartarni sedimenti",
            [
              "Ledeniški sedimenti | morene, till, fluvioglacialni zasipi",
              "Rečni in jezerski sedimenti | terase, aluvij, jezerska kreda"
            ]
          ],
          [
            "Datiranje in kvartar Slovenije",
            [
              "Datiranje kvartarnih sedimentov | radiokarbonska metoda, luminiscenca",
              "Kvartar v Sloveniji | poledenitve Alp, Ljubljansko barje, kraške jame"
            ]
          ]
        ]
      ],
      "GGEOSLO": [
        "Geologija Slovenije",
        "GEO",
        [],
        [
          [
            "Tektonske enote",
            [
              "Tektonske enote Slovenije | Južne Alpe, Vzhodne Alpe, Dinaridi, Panonski bazen",
              "Periadriatski prelom in aktivna tektonika | zmični prelomi, potresna dejavnost"
            ]
          ],
          [
            "Geološki razvoj ozemlja",
            [
              "Paleozoik v Sloveniji | karbonske in permske plasti, variscična orogeneza",
              "Mezozoik v Sloveniji | Jadranska karbonatna platforma, Slovenski bazen, Julijska karbonatna platforma",
              "Kenozoik v Sloveniji | flišni bazeni, Paratetida, kvartarni sedimenti"
            ]
          ],
          [
            "Naravni viri Slovenije",
            [
              "Mineralne surovine Slovenije | Idrija, Mežica, premog, naravni kamen",
              "Podzemne vode Slovenije | kraški in medzrnski vodonosniki, termalne vode"
            ]
          ]
        ]
      ],
      "GHIDRO": [
        "Hidrogeologija",
        "GEO",
        [],
        [
          [
            "Voda v podzemlju",
            [
              "Hidrološki krog | padavine, izhlapevanje, odtok, napajanje vodonosnika",
              "Vodonosniki | medzrnski, razpoklinski in kraški vodonosniki, poroznost, specifična izdatnost"
            ]
          ],
          [
            "Tok podzemne vode",
            [
              "Darcyjev zakon | hidravlična prevodnost, hidravlični gradient, prepustnost",
              "Karte hidroizohips | ekvipotencialke, tokovnice, smer toka",
              "Hidravlika vodnjakov | Thiemova in Theisova enačba, črpalni poskus"
            ]
          ],
          [
            "Kakovost in varovanje",
            [
              "Hidrogeokemija podzemne vode | glavni ioni, Piperjev diagram, tipi vod",
              "Onesnaženje podzemne vode | advekcija, disperzija, vodovarstvena območja"
            ]
          ]
        ]
      ],
      "GINZGEO": [
        "Inženirska geologija",
        "GEO",
        [],
        [
          [
            "Inženirskogeološke lastnosti",
            [
              "Fizikalne lastnosti zemljin | granulometrija, Atterbergove meje, klasifikacija zemljin",
              "Lastnosti kamnin in hribin | trdnost, diskontinuitete, klasifikaciji RMR in GSI"
            ]
          ],
          [
            "Raziskave in kartiranje",
            [
              "Inženirskogeološke raziskave | vrtanje, jedrovanje, terenski preizkusi",
              "Inženirskogeološko kartiranje | karte, prerezi, poročilo"
            ]
          ],
          [
            "Geološki procesi in objekti",
            [
              "Pobočni procesi | plazovi, podori, drobirski tokovi, stabilnost pobočij",
              "Geologija in gradbeni objekti | temeljenje, predori, pregrade, nasipi"
            ]
          ]
        ]
      ],
      "GOKOLJE": [
        "Geologija okolja",
        "GEO",
        [],
        [
          [
            "Geološko okolje in človek",
            [
              "Geogeni in antropogeni vplivi | naravno geokemično ozadje, onesnaženje tal",
              "Geokemija tal in sedimentov | potencialno strupeni elementi, mobilnost, biodostopnost"
            ]
          ],
          [
            "Naravne nevarnosti",
            [
              "Naravne nesreče | potresi, plazovi, poplave, ocena ogroženosti"
            ]
          ],
          [
            "Odpadki in sanacija",
            [
              "Odlagališča odpadkov | geološka bariera, izcedne vode, izbira lokacije",
              "Sanacija onesnaženih območij | rudniška območja, remediacijske metode"
            ]
          ],
          [
            "Viri in trajnost",
            [
              "Upravljanje naravnih virov | mineralne surovine, podzemna voda, geotermalna energija"
            ]
          ]
        ]
      ],
      "GREGGEO": [
        "Regionalna geologija",
        "GEO",
        [],
        [
          [
            "Alpidski orogeni sistem",
            [
              "Alpidski orogeni sistem | Alpe, Karpati, Dinaridi, Helenidi",
              "Razvoj Tetide | odpiranje in zapiranje oceana, paleogeografija"
            ]
          ],
          [
            "Regionalne enote Evrope",
            [
              "Prekambrijski ščiti in platforme | Baltski ščit, Vzhodnoevropska platforma",
              "Variscični orogen | kolizija Gondvane in Lavrusije"
            ]
          ],
          [
            "Regionalna sinteza",
            [
              "Regionalna geološka sinteza | korelacija enot, tektonske karte"
            ]
          ]
        ]
      ],
      "GUVKART": [
        "Uvod v geološko kartiranje",
        "GEO",
        [],
        [
          [
            "Topografska in geološka karta",
            [
              "Topografska karta | merilo, plastnice, koordinate",
              "Geološka karta | litološke enote, simboli, starost enot"
            ]
          ],
          [
            "Geometrija plasti na karti",
            [
              "Pravilo V | presečišče plasti z reliefom, potek meja na karti",
              "Problem treh točk | določanje smeri in vpada plasti"
            ]
          ],
          [
            "Profili s karte",
            [
              "Geološki profil s karte | navidezni vpad, prava debelina plasti"
            ]
          ]
        ]
      ],
      "GTERKART": [
        "Terensko kartiranje",
        "GEO",
        [],
        [
          [
            "Delo na terenu",
            [
              "Terenska oprema in varnost | geološki kompas, kladivo, GNSS, terenski dnevnik",
              "Merjenje strukturnih elementov | vpad plasti, prelomne ploskve, osi gub"
            ]
          ],
          [
            "Kartiranje",
            [
              "Opis izdanka | litologija, fosili, sedimentne strukture",
              "Izdelava geološke karte | meje enot, legenda, merilo"
            ]
          ],
          [
            "Interpretacija",
            [
              "Konstrukcija geološkega profila | prenos podatkov, interpretacija v globino",
              "Geološko poročilo | geološki razvoj ozemlja, zapis ugotovitev"
            ]
          ]
        ]
      ],
      "GGEOFIZ": [
        "Geofizika",
        "FIZ",
        [],
        [
          [
            "Potencialne metode",
            [
              "Gravimetrija | težnostni pospešek, popravki, Bouguerjeva anomalija",
              "Magnetometrija | geomagnetno polje, magnetna susceptibilnost, anomalije"
            ]
          ],
          [
            "Seizmika",
            [
              "Seizmični valovi | valovi P in S, hitrosti, lom in odboj",
              "Refrakcijska in refleksijska seizmika | potovalni časi, hitrostni modeli"
            ]
          ],
          [
            "Električne in druge metode",
            [
              "Geoelektrične metode | specifična upornost, Wennerjeva razvrstitev, električna tomografija",
              "Georadar in karotaža | elektromagnetni valovi, meritve v vrtinah"
            ]
          ],
          [
            "Toplota Zemlje",
            [
              "Toplotni tok | geotermični gradient, toplotna prevodnost kamnin"
            ]
          ]
        ]
      ],
      "GKRAS": [
        "Geologija krasa",
        "GEO",
        [],
        [
          [
            "Zakrasevanje",
            [
              "Kemija raztapljanja karbonatov | CO2, ravnotežje kalcita, korozija mešanice",
              "Dejavniki zakrasevanja | litologija, tektonika, podnebje"
            ]
          ],
          [
            "Kraške oblike",
            [
              "Površinske kraške oblike | škraplje, vrtače, uvale, kraška polja",
              "Podzemne kraške oblike | jame, brezna, sigove tvorbe"
            ]
          ],
          [
            "Kraška hidrogeologija",
            [
              "Kraški vodonosniki | epikras, ponori, kraški izviri",
              "Sledenje kraških voda | sledila, hitrosti toka, zaledje izvirov"
            ]
          ],
          [
            "Varstvo krasa",
            [
              "Ranljivost krasa | onesnaženje, varovanje kraških voda"
            ]
          ]
        ]
      ],
      "GRUDISC": [
        "Geologija rudišč",
        "GEO",
        [],
        [
          [
            "Osnove",
            [
              "Rudišča in mineralne surovine | ruda, vsebnost, viri in zaloge",
              "Rudni minerali | sulfidi, oksidi, rudna mikroskopija"
            ]
          ],
          [
            "Genetski tipi rudišč",
            [
              "Magmatska rudišča | ortomagmatska, porfirska rudišča, pegmatiti",
              "Hidrotermalna rudišča | žilna, skarnska, epitermalna, masivni sulfidi",
              "Sedimentna rudišča | rudni zasipi, lateriti, evaporiti, rudišča tipa MVT"
            ]
          ],
          [
            "Raziskave in primeri",
            [
              "Raziskovanje rudišč | geokemična prospekcija, ocena zalog",
              "Rudišča Slovenije | Idrija, Mežica, Litija"
            ]
          ]
        ]
      ],
      "GVULK": [
        "Vulkanologija",
        "GEO",
        [],
        [
          [
            "Vulkanski procesi",
            [
              "Vrste vulkanskih izbruhov | efuzivni in eksplozivni izbruhi, havajski, strombolski, plinijski",
              "Razplinjevanje in fragmentacija magme | vulkanski plini, mehurčki, fragmentacija"
            ]
          ],
          [
            "Vulkanski produkti in oblike",
            [
              "Lave in piroklastiti | tefra, ignimbriti, piroklastični tokovi",
              "Vulkanske oblike | ščitasti vulkani, stratovulkani, kaldere"
            ]
          ],
          [
            "Vulkanske nevarnosti",
            [
              "Vulkanske nevarnosti in spremljanje | lahari, pepel, napovedovanje izbruhov"
            ]
          ]
        ]
      ],
      "GOMAT1": [
        "Matematika I",
        "MAT",
        [
          "MAT_1"
        ],
        []
      ],
      "GOMAT2": [
        "Matematika II",
        "MAT",
        [
          "MAT_2"
        ],
        []
      ],
      "GOFIZ1": [
        "Fizika I",
        "FIZ",
        [
          "FIZ_1"
        ],
        []
      ],
      "GOFIZ2": [
        "Fizika II",
        "FIZ",
        [
          "FIZ_2"
        ],
        []
      ],
      "GOKEM1": [
        "Kemija I",
        "KEM",
        [
          "SPL_KEM"
        ],
        []
      ],
      "GOKEM2": [
        "Kemija II",
        "KEM",
        [
          "ANORG"
        ],
        [
          [
            "Kemija okolja",
            [
              "Kemija vode | trdota vode, karbonatno ravnotežje, onesnaževala",
              "Kemija tal in kamnin | kemično preperevanje, ionska izmenjava",
              "Kemija ozračja | ozon, kisli dež, toplogredni plini"
            ]
          ]
        ]
      ],
      "GOMEH1": [
        "Mehanika I",
        "FIZ",
        [
          "STATIKA"
        ],
        []
      ],
      "GOMEH2": [
        "Mehanika II",
        "FIZ",
        [
          "TRDNOST"
        ],
        []
      ],
      "GOGEOM": [
        "Geometrija v inženirstvu I",
        "MAT",
        [],
        [
          [
            "Pravokotna projekcija",
            [
              "Mongeov postopek | tloris in naris, prikaz točke, premice in ravnine",
              "Prave velikosti in lege | transformacija, rotacija, prava dolžina daljice"
            ]
          ],
          [
            "Ravnine in telesa",
            [
              "Ravnine in presečišča | prebodišče premice, presečnica ravnin",
              "Telesa in preseki | prizme, piramide, valj, stožec, mreža telesa"
            ]
          ],
          [
            "Kotirana projekcija",
            [
              "Kotirana projekcija | kote, padnice, naklon ravnine",
              "Teren, izkopi in nasipi | plastnice, brežine izkopov in nasipov na terenu"
            ]
          ]
        ]
      ],
      "GORI": [
        "Računalništvo in informatika",
        "RAC",
        [],
        [
          [
            "Osnove računalništva",
            [
              "Zgradba računalnika | procesor, pomnilnik, operacijski sistem",
              "Predstavitev podatkov | dvojiški sistem, kodiranje znakov, datoteke"
            ]
          ],
          [
            "Programiranje",
            [
              "Osnove programiranja | spremenljivke, pogojni stavki, zanke",
              "Funkcije in podatkovne strukture | seznami, tabele, branje datotek"
            ]
          ],
          [
            "Uporabna informatika",
            [
              "Preglednice in obdelava podatkov | formule, grafi, filtri",
              "Podatkovne baze | relacijski model, poizvedbe SQL"
            ]
          ]
        ]
      ],
      "GOEKON": [
        "Ekonomika in organizacija dela v geotehnologiji in rudarstvu",
        "EKO",
        [],
        [
          [
            "Ekonomika podjetja",
            [
              "Stroški in kalkulacije | stalni in spremenljivi stroški, prag rentabilnosti",
              "Investicije | denarni tok, neto sedanja vrednost, notranja stopnja donosa"
            ]
          ],
          [
            "Ekonomika mineralnih surovin",
            [
              "Vrednotenje nahajališč | cena surovine, rudarska renta, zaloge",
              "Trg mineralnih surovin | ponudba in povpraševanje, cene kovin in gradbenih surovin"
            ]
          ],
          [
            "Organizacija dela",
            [
              "Organizacija proizvodnje | delovni procesi, normiranje dela, planiranje",
              "Varnost in zakonodaja | rudarski zakon, varnost in zdravje pri delu, koncesije"
            ]
          ]
        ]
      ],
      "GOMEHT": [
        "Mehanika tal I",
        "GEO",
        [],
        [
          [
            "Lastnosti zemljin",
            [
              "Fazni sestav zemljin | vlažnost, poroznost, količnik por, gostota",
              "Klasifikacija zemljin | granulometrija, Atterbergove meje, plastičnost"
            ]
          ],
          [
            "Voda v tleh",
            [
              "Prepustnost zemljin | Darcyjev zakon, laboratorijski preizkusi prepustnosti",
              "Efektivne napetosti | Terzaghijevo načelo, porni tlak"
            ]
          ],
          [
            "Deformacije in trdnost",
            [
              "Stisljivost in konsolidacija | edometrski preizkus, posedki, Terzaghijeva teorija konsolidacije",
              "Strižna trdnost zemljin | Mohr-Coulombov kriterij, triosni preizkus",
              "Zgoščevanje zemljin | Proctorjev preizkus, optimalna vlažnost"
            ]
          ]
        ]
      ],
      "GOGEOD": [
        "Nižja geodezija I",
        "GEO",
        [],
        [
          [
            "Osnove geodezije",
            [
              "Koordinatni sistemi in karte | državni koordinatni sistem, merilo",
              "Merske napake | grobe, sistematične in slučajne napake, srednji pogrešek"
            ]
          ],
          [
            "Geodetske meritve",
            [
              "Merjenje dolžin | merski trak, elektronski razdaljemer",
              "Merjenje kotov | teodolit, horizontalni in vertikalni koti",
              "Nivelman | geometrični nivelman, višinske razlike"
            ]
          ],
          [
            "Izmera",
            [
              "Poligonometrija | poligonski vlak, računanje koordinat",
              "Detajlna izmera | polarna metoda, tahimetrija"
            ]
          ]
        ]
      ],
      "GOVRT": [
        "Globinsko vrtanje I",
        "GEO",
        [],
        [
          [
            "Vrtalne metode in oprema",
            [
              "Metode vrtanja | udarno in rotacijsko vrtanje, jedrovanje",
              "Vrtalna oprema | vrtalna garnitura, drogovje, krone in dleta"
            ]
          ],
          [
            "Izplaka",
            [
              "Izplaka | funkcije, gostota, viskoznost, hidrostatični tlak",
              "Hidravlika vrtine | pretok izplake, tlačne izgube"
            ]
          ],
          [
            "Izdelava vrtine",
            [
              "Zacevitev in cementacija | zaščitne cevi, cementiranje",
              "Režimi vrtanja | obremenitev krone, vrtilna hitrost, hitrost napredovanja"
            ]
          ]
        ]
      ],
      "GOINZHG": [
        "Inženirska geologija in hidrogeologija",
        "GEO",
        [],
        [
          [
            "Inženirska geologija",
            [
              "Lastnosti kamnin in hribin | trdnost, diskontinuitete, klasifikaciji RMR in GSI",
              "Pobočni procesi | plazovi, podori, drobirski tokovi, stabilnost pobočij",
              "Inženirskogeološke raziskave | vrtanje, jedrovanje, terenski preizkusi"
            ]
          ],
          [
            "Hidrogeologija",
            [
              "Vodonosniki | medzrnski, razpoklinski in kraški vodonosniki, poroznost, specifična izdatnost",
              "Darcyjev zakon | hidravlična prevodnost, hidravlični gradient, prepustnost",
              "Hidravlika vodnjakov | Thiemova in Theisova enačba, črpalni poskus",
              "Onesnaženje podzemne vode | advekcija, disperzija, vodovarstvena območja"
            ]
          ]
        ]
      ],
      "MMAT1": [
        "Matematika 1",
        "MAT",
        [
          "MAT_1"
        ],
        []
      ],
      "MMAT2": [
        "Matematika 2",
        "MAT",
        [
          "MAT_2"
        ],
        []
      ],
      "MFIZ1": [
        "Fizika 1",
        "FIZ",
        [
          "FIZ_1"
        ],
        []
      ],
      "MFIZ2": [
        "Fizika 2",
        "FIZ",
        [
          "FIZ_2"
        ],
        []
      ],
      "MKEM1": [
        "Kemija 1",
        "KEM",
        [
          "SPL_KEM"
        ],
        []
      ],
      "MKEM2": [
        "Kemija 2",
        "KEM",
        [
          "ANORG"
        ],
        [
          [
            "Elektrokemija",
            [
              "Elektrokemija | galvanski členi, Nernstova enačba, elektroliza",
              "Redoks reakcije in elektrokemija | oksidacijska števila, urejanje redoks enačb, elektrodni potenciali"
            ]
          ],
          [
            "Osnove organske kemije",
            [
              "Zgradba in vezi organskih molekul | hibridizacija, resonanca, funkcionalne skupine",
              "Nomenklatura organskih spojin | pravila IUPAC v slovenščini",
              "Polimeri | zgradba, termoplasti in duromeri, lastnosti"
            ]
          ]
        ]
      ],
      "MOSNMEH": [
        "Osnove mehanike",
        "FIZ",
        [
          "STATIKA"
        ],
        [
          [
            "Dinamika",
            [
              "Newtonovi zakoni in sile | trenje, sile pri kroženju, gravitacija",
              "Delo, energija in gibalna količina | izrek o kinetični energiji, ohranitveni zakoni, trki",
              "Vrtenje togega telesa | navor, vztrajnostni moment, vrtilna količina"
            ]
          ]
        ]
      ],
      "MOSNINZ": [
        "Osnove inženirstva",
        "FIZ",
        [
          "OSN_INZ"
        ],
        [
          [
            "Tehnična dokumentacija",
            [
              "Tehnično risanje | pravokotne projekcije, prerezi, kotiranje, tolerance in ujeme",
              "Standardi in označevanje materialov | standardi SIST EN, označevanje jekel, litin in neželeznih zlitin"
            ]
          ],
          [
            "Proizvodni procesi in kakovost",
            [
              "Pregled tehnologij izdelave | litje, preoblikovanje, spajanje, odrezavanje, prašna metalurgija",
              "Merjenje in merilna negotovost | merilni pogreški, ponovljivost, kontrola kakovosti"
            ]
          ]
        ]
      ],
      "MRACPR": [
        "Računalniški praktikum",
        "RAC",
        [],
        [
          [
            "Osnove programiranja",
            [
              "Spremenljivke in podatkovni tipi | števila, nizi, seznami, vhod in izhod",
              "Pogojni stavki in zanke | if, for, while, sledenje izvajanju programa",
              "Funkcije | parametri, vrnjena vrednost, razčlenitev problema na podprobleme"
            ]
          ],
          [
            "Obdelava podatkov",
            [
              "Delo s preglednicami | formule, sklici, grafi, osnovna statistika meritev",
              "Branje in prikaz merilnih podatkov | datoteke CSV, risanje grafov, prilagajanje premice"
            ]
          ],
          [
            "Računanje v inženirstvu",
            [
              "Reševanje nelinearnih enačb | bisekcija, Newtonova metoda, konvergenca",
              "Interpolacija in aproksimacija | Lagrangeov polinom, metoda najmanjših kvadratov"
            ]
          ]
        ]
      ],
      "MZGRADBA": [
        "Zgradba materialov",
        "KEM",
        [
          "TRDNINE"
        ],
        [
          [
            "Mikrostruktura",
            [
              "Zrna in meje zrn | velikost zrn, meje zrn, tekstura, vpliv na lastnosti",
              "Amorfne snovi in polimeri | steklo, temperatura steklastega prehoda, kristaliničnost polimerov"
            ]
          ],
          [
            "Karakterizacija",
            [
              "Metalografija | priprava vzorcev, svetlobna mikroskopija, kvantitativna analiza mikrostrukture",
              "Elektronska mikroskopija | SEM, TEM, energijsko disperzijska spektroskopija (EDS)"
            ]
          ]
        ]
      ],
      "MMATLAST": [
        "Materiali in lastnosti",
        "KEM",
        [
          "MATERIALI"
        ],
        [
          [
            "Fizikalne lastnosti in obstojnost",
            [
              "Električne in magnetne lastnosti | električna prevodnost, dielektriki, feromagnetizem",
              "Toplotne lastnosti | toplotna razteznost, toplotna prevodnost, toplotna kapaciteta",
              "Korozija in degradacija | elektrokemijska korozija, pasivacija, protikorozijska zaščita"
            ]
          ]
        ]
      ],
      "MTERMO": [
        "Termodinamika materialov",
        "KEM",
        [
          "KEM_TERMO"
        ],
        [
          [
            "Raztopine in fazni diagrami",
            [
              "Termodinamika raztopin | aktivnost, idealne in regularne raztopine, Gibbsova energija mešanja",
              "Fazni diagrami | binarni diagrami, vzvodno pravilo, diagram Fe-C"
            ]
          ],
          [
            "Kinetika in elektrokemija",
            [
              "Kemijska kinetika | hitrostni zakoni, red reakcije, razpolovni čas",
              "Arrheniusova enačba | aktivacijska energija, teorija trkov",
              "Elektrokemija | galvanski členi, Nernstova enačba, elektroliza"
            ]
          ]
        ]
      ],
      "MTERMOPR": [
        "Termodinamski praktikum",
        "KEM",
        [],
        [
          [
            "Termodinamski izračuni",
            [
              "Gibbsova energija in kemijsko ravnotežje | ΔG = ΔH − TΔS, zveza med ΔG° in K, van 't Hoffova enačba",
              "Ellinghamov diagram | stabilnost oksidov, redukcija z ogljikom in CO, parcialni tlak kisika",
              "Ravnotežna sestava pri visokih temperaturah | aktivnosti v talinah in žlindrah, izračun ravnotežja"
            ]
          ],
          [
            "Fazni diagrami v praksi",
            [
              "Termična analiza | ohlajevalne krivulje, DTA in DSC, določanje temperatur premen",
              "Metoda CALPHAD | termodinamske podatkovne baze, računanje faznih diagramov"
            ]
          ],
          [
            "Meritve",
            [
              "Kalorimetrija | merjenje toplotne kapacitete in entalpij faznih prehodov",
              "Merjenje temperature | termočleni, uporovni termometri, pirometri, umerjanje"
            ]
          ]
        ]
      ],
      "MMEHMAT": [
        "Mehanika materialov",
        "FIZ",
        [
          "TRDNOST"
        ],
        [
          [
            "Elastičnost",
            [
              "Napetostno in deformacijsko stanje | tenzor napetosti, glavne napetosti, Mohrov krog",
              "Posplošeni Hookov zakon | elastične konstante, Poissonovo število, anizotropija"
            ]
          ],
          [
            "Plastičnost in porušitev",
            [
              "Kriteriji tečenja | Trescov in von Misesov kriterij, deformacijsko utrjevanje",
              "Lomna mehanika | faktor intenzitete napetosti, lomna žilavost, krhki in duktilni lom",
              "Utrujanje in lezenje | Wöhlerjeva krivulja, lezenje pri povišanih temperaturah"
            ]
          ]
        ]
      ],
      "MFIZMET1": [
        "Fizikalna metalurgija 1",
        "KEM",
        [],
        [
          [
            "Kristalne napake",
            [
              "Kristalna zgradba kovin | kristalne mreže, napake v kristalih",
              "Dislokacije | Burgersov vektor, drsni sistemi, mehanizmi utrjevanja"
            ]
          ],
          [
            "Difuzija",
            [
              "Difuzija v trdnem | Fickova zakona, mehanizmi difuzije, temperaturna odvisnost difuzijskega koeficienta"
            ]
          ],
          [
            "Strjevanje",
            [
              "Nukleacija in rast | homogena in heterogena nukleacija, podhladitev, kritični radij",
              "Strjevanje zlitin | izcejanje, dendritna rast, evtektično strjevanje"
            ]
          ],
          [
            "Fazne premene",
            [
              "Fazni diagrami | binarni diagrami, vzvodno pravilo, diagram Fe-C",
              "Fazne premene v trdnem | izločanje, diagrami TTT in CCT, martenzitna premena",
              "Toplotna obdelava jekel | kaljenje, popuščanje, žarjenje"
            ]
          ],
          [
            "Deformacija in žarjenje",
            [
              "Poprava in rekristalizacija | hladna deformacija, rekristalizacijska temperatura, rast zrn"
            ]
          ]
        ]
      ]
    },
    "programs": {
      "UL-NTF-GEO": {
        "name": "Geologija (UN)",
        "source": "https://www.ntf.uni-lj.si/og/en/study/geology-un/curriculum/",
        "sourceYear": "2025/26 (iz iskalnih povzetkov); 1. in 2. letnik nista v celoti preverjena",
        "years": [
          [
            "GMAT1",
            "GFIZ1",
            "GOSNGEO",
            "GKRIST",
            "GMINER",
            "GPALEO",
            "GGIS",
            "GSTAT"
          ],
          [
            "GPETMAG",
            "GPETMET",
            "GSEDPET",
            "GGEOKEM",
            "GSTRAT",
            "GSTRUKT"
          ],
          [
            "GGEOSLO",
            "GHIDRO",
            "GINZGEO",
            "GOKOLJE",
            "GREGGEO",
            "GUVKART",
            "GTERKART",
            "GGEOFIZ",
            "GKRAS"
          ]
        ],
        "electives": [
          "GZGOD",
          "GMAT2",
          "GMIKRO",
          "GKVART",
          "GRUDISC",
          "GVULK"
        ]
      },
      "UL-NTF-GIO": {
        "name": "Geotehnologija in okolje (UN)",
        "source": "https://www.ntf.uni-lj.si/ogro/studij/1-stopnja/geotehnologija-in-okolje-un/predmetnik/1-letnik/",
        "sourceYear": "2025/26; 2. in 3. letnik nista preverjena (le posamezni predmeti)",
        "years": [
          [
            "GOMAT1",
            "GOFIZ1",
            "GOKEM1",
            "GOMEH1",
            "GOGEOM",
            "GORI",
            "GOMAT2",
            "GOFIZ2",
            "GOKEM2",
            "GOMEH2"
          ],
          [
            "GOEKON",
            "GOMEHT",
            "GOGEOD"
          ],
          [
            "GOVRT",
            "GOINZHG"
          ]
        ]
      },
      "UL-NTF-IM": {
        "name": "Inženirstvo materialov",
        "source": "https://www.ntf.uni-lj.si/omm/en/study/bachelors-degree/materials-engineering-un/curriculum/",
        "sourceYear": "nedatirana (verjetno starejša) angleška stran predmetnika OMM; 1. letnik preverjen, 2. letnik le delno (3. semester), 3. letnik ni preverjen",
        "years": [
          [
            "MMAT1",
            "MFIZ1",
            "MKEM1",
            "MOSNMEH",
            "MOSNINZ",
            "MRACPR",
            "MZGRADBA",
            "MMAT2",
            "MFIZ2",
            "MKEM2",
            "MMATLAST"
          ],
          [
            "MTERMO",
            "MTERMOPR",
            "MMEHMAT",
            "MFIZMET1"
          ],
          []
        ]
      }
    }
  },
  {
    "id": "UL-FKKT",
    "name": "UL Fakulteta za kemijo in kemijsko tehnologijo",
    "short": "UL FKKT",
    "courses": {
      "NPRSAK": [
        "Praktikum iz splošne in anorganske kemije",
        "KEM",
        [],
        [
          [
            "Varno delo v laboratoriju",
            [
              "Varnost in nevarne snovi | piktogrami CLP, varnostni listi, osebna varovalna oprema, ravnanje z odpadki",
              "Osnovne laboratorijske tehnike | tehtanje, merjenje volumna, filtracija, prekristalizacija"
            ]
          ],
          [
            "Priprava raztopin in računi",
            [
              "Raztopine | koncentracije, redčenje, koligativne lastnosti",
              "Stehiometrija | množina snovi, omejujoči reaktant, izkoristek, empirična formula"
            ]
          ],
          [
            "Ravnotežja v poskusih",
            [
              "Kemijsko ravnotežje | konstanta ravnotežja, Le Chatelierovo načelo",
              "Kisline in baze | pH močnih in šibkih kislin in baz, pufri",
              "Topnost | topnostni produkt, obarjanje"
            ]
          ],
          [
            "Sinteze anorganskih spojin",
            [
              "Sinteza in čiščenje anorganskih soli | kristalizacija, izkoristek, identifikacija produkta",
              "Koordinacijske spojine | ligandi, nomenklatura, izomerija, teorija kristalnega polja",
              "Redoks reakcije in elektrokemija | oksidacijska števila, urejanje redoks enačb, elektrodni potenciali"
            ]
          ],
          [
            "Laboratorijsko poročilo",
            [
              "Zapis meritev in poročilo | struktura poročila, značilne števke, tabele in grafi"
            ]
          ]
        ]
      ],
      "NMOVZ": [
        "Molekularne osnove ved o življenju",
        "BIO",
        [],
        [
          [
            "Celica in biomolekule",
            [
              "Zgradba celice | prokariontska in evkariontska celica, organeli, membrane",
              "Aminokisline in proteini | kislinsko-bazne lastnosti, zgradba proteinov",
              "Ogljikovi hidrati in lipidi | zgradba, vloga v celici",
              "Nukleinske kisline | zgradba DNA in RNA, podvajanje"
            ]
          ],
          [
            "Pretok genetske informacije",
            [
              "Prepisovanje in prevajanje | RNA-polimeraza, genetski kod, ribosomi",
              "Uravnavanje izražanja genov | operon, transkripcijski dejavniki"
            ]
          ],
          [
            "Energija in presnova",
            [
              "Bioenergetika | ATP, redoks potenciali v celici, sklopljene reakcije",
              "Encimi kot biokatalizatorji | aktivno mesto, specifičnost, kofaktorji"
            ]
          ],
          [
            "Celični procesi",
            [
              "Celični cikel in delitev | mitoza, mejoza, kontrolne točke",
              "Membranski transport in signalizacija | difuzija, prenašalci, receptorji"
            ]
          ],
          [
            "Biotehnologija in zdravje",
            [
              "Sodobna biotehnologija | rekombinantna DNA, PCR, gensko spremenjeni organizmi"
            ]
          ]
        ]
      ],
      "NPRAK": [
        "Praktikum iz analizne kemije",
        "KEM",
        [
          "ANAL_1"
        ],
        [
          [
            "Laboratorijske tehnike kvantitativne analize",
            [
              "Volumetrične tehnike | umerjanje birete in pipete, standardizacija raztopin",
              "Vzorčenje in priprava vzorca | reprezentativnost, raztapljanje, razklop"
            ]
          ],
          [
            "Kvalitativna analiza",
            [
              "Dokazne reakcije ionov | ločevanje kationov in anionov po skupinah"
            ]
          ]
        ]
      ],
      "NOSNPROG": [
        "Osnove programiranja",
        "RAC",
        [],
        [
          [
            "Uvod v programiranje",
            [
              "Spremenljivke in podatkovni tipi | števila, nizi, logične vrednosti, pretvorbe",
              "Izrazi in vhod/izhod | aritmetični in logični operatorji, izpis, branje podatkov"
            ]
          ],
          [
            "Kontrolne strukture",
            [
              "Pogojni stavki | if, elif, else, gnezdenje",
              "Zanke | for, while, break, štetje in seštevanje"
            ]
          ],
          [
            "Podatkovne strukture",
            [
              "Seznami in nizi | indeksiranje, rezine, metode, iteracija",
              "Slovarji in množice | ključi, štetje pojavitev, unija in presek"
            ]
          ],
          [
            "Funkcije in moduli",
            [
              "Funkcije | parametri, vračanje vrednosti, lokalne spremenljivke",
              "Moduli in knjižnice | import, math, numpy, matplotlib"
            ]
          ],
          [
            "Delo z datotekami in podatki",
            [
              "Branje in pisanje datotek | besedilne in CSV datoteke, obdelava meritev",
              "Grafični prikaz in obdelava podatkov | risanje grafov, prilagajanje premice"
            ]
          ]
        ]
      ],
      "NPROK": [
        "Praktikum iz organske kemije",
        "KEM",
        [],
        [
          [
            "Tehnike dela",
            [
              "Tehnike čiščenja organskih spojin | destilacija, prekristalizacija, ekstrakcija, sublimacija",
              "Kromatografija na tankem sloju in koloni | Rf vrednost, izbira mobilne faze"
            ]
          ],
          [
            "Karakterizacija produktov",
            [
              "Tališče in čistost | določanje tališča, mešano tališče",
              "Spektroskopija organskih spojin | IR, NMR, masna spektrometrija"
            ]
          ],
          [
            "Sinteze",
            [
              "Nukleofilne substitucije in eliminacije | mehanizmi SN1, SN2, E1, E2",
              "Aromatske spojine | aromatičnost, elektrofilna aromatska substitucija",
              "Karbonilne spojine | aldehidi in ketoni, nukleofilna adicija, aldolna reakcija",
              "Karboksilne kisline in derivati | estri, amidi, nukleofilna acilna substitucija"
            ]
          ],
          [
            "Računanje izkoristka",
            [
              "Stehiometrija | množina snovi, omejujoči reaktant, izkoristek, empirična formula"
            ]
          ]
        ]
      ],
      "NPRFK": [
        "Praktikum iz fizikalne kemije",
        "KEM",
        [],
        [
          [
            "Obdelava meritev",
            [
              "Statistična obdelava rezultatov | povprečje, standardni odklon, interval zaupanja, značilne števke",
              "Napake in prilagajanje | propagacija napak, linearna regresija"
            ]
          ],
          [
            "Termodinamske meritve",
            [
              "Termokemija | reakcijska entalpija, Hessov zakon, Kirchhoffov zakon",
              "Kalorimetrija | toplotna kapaciteta kalorimetra, sežigna entalpija",
              "Fazna ravnotežja | fazni diagrami, Clausius-Clapeyronova enačba"
            ]
          ],
          [
            "Kinetika in elektrokemija",
            [
              "Kemijska kinetika | hitrostni zakoni, red reakcije, razpolovni čas",
              "Arrheniusova enačba | aktivacijska energija, teorija trkov",
              "Elektrokemija | galvanski členi, Nernstova enačba, elektroliza"
            ]
          ],
          [
            "Lastnosti raztopin",
            [
              "Prevodnost elektrolitov | molska prevodnost, Kohlrauschev zakon",
              "Raztopine | koncentracije, redčenje, koligativne lastnosti"
            ]
          ]
        ]
      ],
      "NINSTRAN": [
        "Instrumentalna analiza",
        "KEM",
        [
          "ANAL_2"
        ],
        [
          [
            "Atomska spektrometrija",
            [
              "Atomska emisijska spektrometrija | ICP-OES, plamenska emisija, motnje"
            ]
          ],
          [
            "Masna spektrometrija in sklopljene tehnike",
            [
              "Masna spektrometrija | ionizacija, masni analizatorji, ICP-MS",
              "Sklopljene tehnike | GC-MS, LC-MS"
            ]
          ],
          [
            "Validacija analiznih metod",
            [
              "Validacija metode | meja zaznave, linearnost, točnost, natančnost",
              "Umerjanje | metoda standardnega dodatka, notranji standard"
            ]
          ]
        ]
      ],
      "NPRINSTR": [
        "Praktikum iz instrumentalnih metod in instrumentalne analize",
        "KEM",
        [],
        [
          [
            "Spektrometrija v praksi",
            [
              "Spektrometrične metode | Beer-Lambertov zakon, UV-VIS, atomska absorpcijska spektrometrija",
              "Umerjanje | metoda standardnega dodatka, notranji standard"
            ]
          ],
          [
            "Kromatografija v praksi",
            [
              "Kromatografske metode | plinska in tekočinska kromatografija, ločljivost, umeritvena krivulja",
              "Priprava vzorca za kromatografijo | ekstrakcija na trdni fazi, filtracija, redčenje"
            ]
          ],
          [
            "Elektroanaliza v praksi",
            [
              "Elektroanalizne metode | potenciometrija, Nernstova enačba, ionoselektivne elektrode"
            ]
          ],
          [
            "Vrednotenje rezultatov",
            [
              "Statistična obdelava rezultatov | povprečje, standardni odklon, interval zaupanja, značilne števke",
              "Validacija metode | meja zaznave, linearnost, točnost, natančnost"
            ]
          ]
        ]
      ],
      "NKEMPRAK": [
        "Kemijski praktikum",
        "KEM",
        [],
        [
          [
            "Varno delo v laboratoriju",
            [
              "Varnost in nevarne snovi | piktogrami CLP, varnostni listi, osebna varovalna oprema, ravnanje z odpadki",
              "Osnovne laboratorijske tehnike | tehtanje, merjenje volumna, filtracija, prekristalizacija"
            ]
          ],
          [
            "Raztopine in titracije",
            [
              "Raztopine | koncentracije, redčenje, koligativne lastnosti",
              "Kisline in baze | pH močnih in šibkih kislin in baz, pufri",
              "Kislinsko-bazne titracije | titracijske krivulje, ekvivalentna točka, indikatorji"
            ]
          ],
          [
            "Reakcije in ravnotežja",
            [
              "Kemijsko ravnotežje | konstanta ravnotežja, Le Chatelierovo načelo",
              "Topnost | topnostni produkt, obarjanje",
              "Redoks reakcije in elektrokemija | oksidacijska števila, urejanje redoks enačb, elektrodni potenciali"
            ]
          ],
          [
            "Zapis meritev",
            [
              "Zapis meritev in poročilo | struktura poročila, značilne števke, tabele in grafi"
            ]
          ]
        ]
      ],
      "NSPLBIO": [
        "Splošna biologija",
        "BIO",
        [],
        [
          [
            "Življenje in celica",
            [
              "Značilnosti živega | ravni organizacije, celična teorija, izvor življenja",
              "Zgradba celice | prokariontska in evkariontska celica, organeli, membrane"
            ]
          ],
          [
            "Dedovanje",
            [
              "Mendlovo dedovanje | dominantnost, križanja, rodovniki",
              "Celični cikel in delitev | mitoza, mejoza, kontrolne točke"
            ]
          ],
          [
            "Evolucija in raznolikost",
            [
              "Evolucija | naravni izbor, speciacija, filogenija",
              "Raznolikost organizmov | domene življenja, sistematika, nomenklatura"
            ]
          ],
          [
            "Zgradba in delovanje organizmov",
            [
              "Rastline | fotosinteza, zgradba in transport v rastlinah",
              "Živali in človek | organski sistemi, homeostaza"
            ]
          ],
          [
            "Ekologija",
            [
              "Populacije in ekosistemi | rast populacij, prehranjevalni spleti, kroženje snovi"
            ]
          ]
        ]
      ],
      "NBIOKPRAK": [
        "Biokemijski praktikum",
        "KEM",
        [],
        [
          [
            "Delo z biološkimi vzorci",
            [
              "Pufri in pH | priprava pufrov, Henderson-Hasselbalchova enačba",
              "Spektrometrične metode | Beer-Lambertov zakon, UV-VIS, atomska absorpcijska spektrometrija"
            ]
          ],
          [
            "Proteini",
            [
              "Določanje koncentracije proteinov | Bradfordova metoda, umeritvena krivulja",
              "Elektroforeza proteinov | SDS-PAGE, določanje molekulske mase"
            ]
          ],
          [
            "Encimi",
            [
              "Encimska kinetika | Michaelis-Mentenova enačba, inhibicija",
              "Merjenje encimske aktivnosti | začetna hitrost, enote aktivnosti, specifična aktivnost"
            ]
          ],
          [
            "Nukleinske kisline in ogljikovi hidrati",
            [
              "Izolacija DNA | liza celic, obarjanje, čistost A260/A280",
              "Dokazovanje ogljikovih hidratov | reducirajoči sladkorji, encimsko določanje glukoze"
            ]
          ]
        ]
      ],
      "NBIOCEL": [
        "Biologija celice",
        "BIO",
        [],
        [
          [
            "Membrane",
            [
              "Zgradba bioloških membran | lipidni dvosloj, membranski proteini, fluidnost",
              "Membranski transport in signalizacija | difuzija, prenašalci, receptorji"
            ]
          ],
          [
            "Organeli in endomembranski sistem",
            [
              "Endomembranski sistem | ER, Golgijev aparat, vezikularni transport",
              "Mitohondriji in kloroplasti | zgradba, celično dihanje, endosimbioza"
            ]
          ],
          [
            "Citoskelet",
            [
              "Citoskelet | aktinski filamenti, mikrotubuli, intermediarni filamenti, motorni proteini"
            ]
          ],
          [
            "Celični cikel in smrt",
            [
              "Celični cikel in delitev | mitoza, mejoza, kontrolne točke",
              "Apoptoza | kaspaze, notranja in zunanja pot"
            ]
          ],
          [
            "Celična signalizacija in stiki",
            [
              "Signalne poti | receptorji, sklopljeni z G-proteini, kinaze, sekundarni obveščevalci",
              "Medcelični stiki | tesni stiki, dezmosomi, zunajcelični matriks"
            ]
          ]
        ]
      ],
      "NMOLBIO": [
        "Molekularna biologija",
        "BIO",
        [],
        [
          [
            "Genom",
            [
              "Organizacija genoma | kromatin, nukleosomi, geni in nekodirajoča DNA",
              "Nukleinske kisline | zgradba DNA in RNA, podvajanje"
            ]
          ],
          [
            "Podvajanje in popravljanje DNA",
            [
              "Replikacija DNA | DNA-polimeraze, replikacijske vilice, telomere",
              "Popravljanje DNA in mutacije | vrste mutacij, mehanizmi popravljanja, rekombinacija"
            ]
          ],
          [
            "Izražanje genov",
            [
              "Prepisovanje in prevajanje | RNA-polimeraza, genetski kod, ribosomi",
              "Procesiranje RNA | izrezovanje intronov, kapa, poliadenilacija"
            ]
          ],
          [
            "Uravnavanje izražanja",
            [
              "Uravnavanje izražanja genov | operon, transkripcijski dejavniki",
              "Epigenetika in nekodirajoče RNA | metilacija DNA, modifikacije histonov, miRNA"
            ]
          ],
          [
            "Metode",
            [
              "Metode molekularne biologije | PCR, elektroforeza DNA, sekvenciranje"
            ]
          ]
        ]
      ],
      "NSTRBIO": [
        "Strukturna biologija",
        "BIO",
        [],
        [
          [
            "Zgradba proteinov",
            [
              "Zgradba proteinov | sekundarne strukture, Ramachandranov diagram, zvijanje",
              "Terciarna in kvartarna struktura | domene, motivi, stabilizacijske interakcije"
            ]
          ],
          [
            "Metode določanja strukture",
            [
              "Rentgenska difrakcija | Braggov zakon, recipročna mreža",
              "Jedrska magnetna resonanca proteinov | kemijski premiki, NOE, struktura v raztopini",
              "Krioelektronska mikroskopija | priprava vzorca, rekonstrukcija, ločljivost"
            ]
          ],
          [
            "Struktura in funkcija",
            [
              "Membranski proteini | transmembranske vijačnice, kanalčki, prenašalci",
              "Interakcije protein-ligand | vezavna konstanta, prepoznavanje, alosterija"
            ]
          ],
          [
            "Podatkovne zbirke in vizualizacija",
            [
              "Proteinska podatkovna banka | format PDB, kakovost modela, vizualizacija"
            ]
          ]
        ]
      ],
      "NBIOKINF": [
        "Biokemijska informatika",
        "RAC",
        [],
        [
          [
            "Biološke podatkovne zbirke",
            [
              "Podatkovne zbirke zaporedij | GenBank, UniProt, format FASTA",
              "Iskanje po podatkovnih zbirkah | BLAST, E-vrednost, homologija"
            ]
          ],
          [
            "Poravnave zaporedij",
            [
              "Poravnava dveh zaporedij | dinamično programiranje, substitucijske matrike, vrzeli",
              "Večkratne poravnave | progresivna poravnava, ohranjena mesta"
            ]
          ],
          [
            "Filogenija",
            [
              "Filogenetska drevesa | razdaljne metode, UPGMA, združevanje sosedov"
            ]
          ],
          [
            "Strukturna bioinformatika",
            [
              "Napovedovanje strukture proteinov | homologno modeliranje, AlphaFold, ocena kakovosti",
              "Molekulska vizualizacija in sidranje | PyMOL, molekulsko sidranje"
            ]
          ],
          [
            "Programiranje za biokemike",
            [
              "Obdelava bioloških podatkov s Pythonom | Biopython, branje FASTA, štetje nukleotidov"
            ]
          ]
        ]
      ],
      "NMIKRO": [
        "Mikrobiologija",
        "BIO",
        [],
        [
          [
            "Mikrobna celica",
            [
              "Zgradba bakterijske celice | celična stena, barvanje po Gramu, bički, endospore",
              "Raznolikost mikroorganizmov | bakterije, arheje, glive, virusi"
            ]
          ],
          [
            "Rast mikroorganizmov",
            [
              "Mikrobna rast | rastna krivulja, generacijski čas, gojišča",
              "Vpliv okolja na rast | temperatura, pH, kisik, sterilizacija"
            ]
          ],
          [
            "Presnova mikroorganizmov",
            [
              "Mikrobna presnova | fermentacija, aerobno in anaerobno dihanje, avtotrofija"
            ]
          ],
          [
            "Genetika mikroorganizmov",
            [
              "Prenos genov pri bakterijah | transformacija, konjugacija, transdukcija, plazmidi"
            ]
          ],
          [
            "Mikroorganizmi in človek",
            [
              "Patogeni in protimikrobna sredstva | virulenca, antibiotiki, odpornost",
              "Uporabna mikrobiologija | industrijska mikrobiologija, mikroorganizmi v okolju"
            ]
          ]
        ]
      ],
      "NKLON": [
        "Molekulsko kloniranje",
        "BIO",
        [],
        [
          [
            "Orodja kloniranja",
            [
              "Restrikcijski encimi in ligacija | prepoznavna mesta, lepljivi in topi konci, DNA-ligaza",
              "Vektorji | plazmidi, selekcijski označevalci, ekspresijski vektorji"
            ]
          ],
          [
            "Pomnoževanje DNA",
            [
              "Verižna reakcija s polimerazo | začetni oligonukleotidi, temperaturni program, qPCR",
              "Mutageneza | usmerjena mutageneza, načrtovanje oligonukleotidov"
            ]
          ],
          [
            "Transformacija in selekcija",
            [
              "Transformacija bakterij | kompetentne celice, selekcija, modro-bela selekcija",
              "Preverjanje klonov | PCR na kolonijah, restrikcijska analiza, sekvenciranje"
            ]
          ],
          [
            "Izražanje rekombinantnih proteinov",
            [
              "Ekspresijski sistemi | E. coli, kvasovke, celične kulture, indukcija",
              "Čiščenje rekombinantnih proteinov | afinitetna kromatografija, histidinska oznaka"
            ]
          ],
          [
            "Sodobne metode",
            [
              "Urejanje genoma | CRISPR-Cas9, Gibsonovo sestavljanje"
            ]
          ]
        ]
      ],
      "NIMUNO": [
        "Celična in molekularna imunologija",
        "BIO",
        [],
        [
          [
            "Prirojena imunost",
            [
              "Prirojena imunost | fagociti, receptorji PRR, vnetje, komplement"
            ]
          ],
          [
            "Pridobljena imunost",
            [
              "Limfociti B in protitelesa | zgradba protiteles, razredi, klonska selekcija",
              "Limfociti T in MHC | predstavitev antigena, celice T pomagalke in citotoksične celice T",
              "Raznolikost receptorjev | rekombinacija V(D)J, toleranca"
            ]
          ],
          [
            "Uravnavanje imunskega odziva",
            [
              "Citokini | interlevkini, interferoni, kemokini",
              "Imunski spomin in cepljenje | primarni in sekundarni odziv, vrste cepiv"
            ]
          ],
          [
            "Imunske motnje in metode",
            [
              "Preobčutljivost in avtoimunost | tipi preobčutljivosti, avtoimunske bolezni",
              "Imunske metode | ELISA, pretočna citometrija, monoklonska protitelesa"
            ]
          ]
        ]
      ],
      "NGENET": [
        "Osnove genetike",
        "BIO",
        [],
        [
          [
            "Klasična genetika",
            [
              "Mendlovo dedovanje | dominantnost, križanja, rodovniki",
              "Razširitve Mendlovega dedovanja | nepopolna dominantnost, kodominantnost, epistaza",
              "Spolno vezano dedovanje | kromosoma X in Y, rodovniki"
            ]
          ],
          [
            "Kromosomi in vezava genov",
            [
              "Vezava genov in kartiranje | rekombinacijska frekvenca, genetske karte",
              "Kromosomske spremembe | aneuploidija, poliploidija, strukturne spremembe"
            ]
          ],
          [
            "Molekularna genetika",
            [
              "Popravljanje DNA in mutacije | vrste mutacij, mehanizmi popravljanja, rekombinacija",
              "Genetika bakterij in virusov | konjugacija, transdukcija, bakteriofagi"
            ]
          ],
          [
            "Populacijska genetika",
            [
              "Hardy-Weinbergovo ravnovesje | frekvence alelov, genotipske frekvence",
              "Dejavniki evolucije | selekcija, genski zdrs, migracije"
            ]
          ]
        ]
      ],
      "NFIZIOL": [
        "Temelji fiziologije",
        "BIO",
        [],
        [
          [
            "Homeostaza in vzdražnost",
            [
              "Homeostaza | povratne zanke, notranje okolje",
              "Membranski potencial in akcijski potencial | ionski kanali, Nernstova enačba, prevajanje"
            ]
          ],
          [
            "Živčni in mišični sistem",
            [
              "Sinapse in živčni sistem | nevrotransmiterji, refleksi",
              "Krčenje mišic | drsenje filamentov, sklopitev vzburjenja in krčenja"
            ]
          ],
          [
            "Krvožilje in dihanje",
            [
              "Srce in krvni obtok | srčni cikel, krvni tlak",
              "Dihanje | izmenjava plinov, prenos kisika, hemoglobin"
            ]
          ],
          [
            "Ledvice, prebava in hormoni",
            [
              "Ledvice | filtracija, reabsorpcija, uravnavanje vode in ionov",
              "Prebava in presnova | prebavni encimi, absorpcija",
              "Endokrini sistem | hormoni, hipotalamus in hipofiza, inzulin"
            ]
          ]
        ]
      ],
      "NPRFIZ": [
        "Praktikum iz fizike",
        "FIZ",
        [],
        [
          [
            "Merjenje in napake",
            [
              "Statistična obdelava rezultatov | povprečje, standardni odklon, interval zaupanja, značilne števke",
              "Napake in prilagajanje | propagacija napak, linearna regresija"
            ]
          ],
          [
            "Mehanika",
            [
              "Harmonično nihanje | nihajni čas, nihalo na vijačni vzmeti, matematično nihalo, dušenje",
              "Vrtenje togega telesa | navor, vztrajnostni moment, vrtilna količina"
            ]
          ],
          [
            "Toplota in tekočine",
            [
              "Viskoznost in Reynoldsovo število | laminarni in turbulentni tok",
              "Idealni plin in kinetična teorija | plinska enačba, notranja energija, toplotne kapacitete"
            ]
          ],
          [
            "Elektrika in optika",
            [
              "Električni tok in vezja | Ohmov zakon, Kirchhoffova zakona, RC vezje",
              "Geometrijska in valovna optika | lom, leče, interferenca, uklon"
            ]
          ]
        ]
      ],
      "NPRIMA": [
        "Praktikum iz instrumentalnih metod analize",
        "KEM",
        [
          "ANAL_2"
        ],
        [
          [
            "Priprava vzorca",
            [
              "Vzorčenje in priprava vzorca | reprezentativnost, raztapljanje, razklop",
              "Priprava vzorca za kromatografijo | ekstrakcija na trdni fazi, filtracija, redčenje"
            ]
          ],
          [
            "Vrednotenje rezultatov",
            [
              "Statistična obdelava rezultatov | povprečje, standardni odklon, interval zaupanja, značilne števke",
              "Umerjanje | metoda standardnega dodatka, notranji standard"
            ]
          ]
        ]
      ],
      "NKPVAR": [
        "Kemijska in procesna varnost",
        "KEM",
        [],
        [
          [
            "Nevarne snovi",
            [
              "Razvrščanje nevarnih snovi | uredba CLP, piktogrami, varnostni list",
              "Toksikologija | poti vnosa, mejne vrednosti, LD50"
            ]
          ],
          [
            "Požari in eksplozije",
            [
              "Meje eksplozivnosti in plamenišče | koncentracijske meje, Le Chatelierova formula",
              "Ubežne reakcije | toplotna bilanca reaktorja, Semjonova teorija, adiabatni dvig temperature"
            ]
          ],
          [
            "Izpusti in razširjanje",
            [
              "Modeli izpustov | iztekanje kapljevine in plina skozi odprtino",
              "Disperzija v ozračju | Gaussov model, stabilnostni razredi"
            ]
          ],
          [
            "Analiza tveganja v procesih",
            [
              "Metode prepoznavanja nevarnosti | HAZOP, FMEA, kontrolni seznami",
              "Drevo napak in drevo dogodkov | verjetnost odpovedi, minimalni preseki",
              "Varnostne naprave | varnostni ventili, razbremenitev tlaka, direktiva Seveso"
            ]
          ]
        ]
      ],
      "NPRKI": [
        "Praktikum iz kemijskega inženirstva",
        "KEM",
        [],
        [
          [
            "Mehanika tekočin",
            [
              "Tlačne izgube v ceveh | Darcy-Weisbachova enačba, lokalne izgube",
              "Viskoznost in Reynoldsovo število | laminarni in turbulentni tok"
            ]
          ],
          [
            "Prenos toplote in snovi",
            [
              "Toplotni prenosniki | logaritemska srednja temperaturna razlika",
              "Difuzija in prenos snovi | Fickov zakon, snovna prestopnost"
            ]
          ],
          [
            "Reaktorji",
            [
              "Šaržni reaktor | čas reakcije za dano konverzijo",
              "Pretočni reaktorji | idealni mešalni (CSTR) in cevni reaktor, zadrževalni čas",
              "Porazdelitev zadrževalnih časov | sledilni poskus, E-krivulja"
            ]
          ],
          [
            "Separacije",
            [
              "Destilacija | ravnotežne stopnje, McCabe-Thiele",
              "Absorpcija in ekstrakcija | porazdelitveni koeficient, bilance"
            ]
          ],
          [
            "Poročanje",
            [
              "Inženirsko poročilo | bilance meritev, ocena napak, primerjava z modelom"
            ]
          ]
        ]
      ],
      "NVARGRAD": [
        "Varnost v gradbeništvu",
        "FIZ",
        [],
        [
          [
            "Gradbišče in predpisi",
            [
              "Organizacija varnega gradbišča | načrt varnosti in zdravja, koordinator za varnost",
              "Nevarnosti na gradbišču | padci z višine, zasutje, udarci"
            ]
          ],
          [
            "Gradbeni elementi in obtežbe",
            [
              "Obtežbe konstrukcij | lastna teža, koristna obtežba, sneg, veter",
              "Sile in momenti | rezultanta sil, moment sile, dvojica sil",
              "Ravnotežje togega telesa | reakcije podpor, prostoležeči nosilec, konzola"
            ]
          ],
          [
            "Delo na višini in izkopi",
            [
              "Odri in zaščitne ograje | vrste odrov, sidranje, varovanje pred padci",
              "Gradbene jame | stabilnost brežin, opaži, razpiranje"
            ]
          ],
          [
            "Gradbena mehanizacija",
            [
              "Dvigala in gradbeni stroji | stabilnost proti prevrnitvi, nosilnost, varna raba"
            ]
          ]
        ]
      ],
      "NOSNVAR": [
        "Osnove tehniške in požarne varnosti",
        "FIZ",
        [],
        [
          [
            "Pojmi varnosti",
            [
              "Nevarnost, tveganje in škoda | definicije, hierarhija varnostnih ukrepov",
              "Sistem varnosti in zdravja pri delu | akterji, izjava o varnosti z oceno tveganja"
            ]
          ],
          [
            "Tehniški viri nevarnosti",
            [
              "Mehanske nevarnosti | gibljivi deli, zaščitne naprave",
              "Električne nevarnosti | učinki toka na telo, zaščita pred električnim udarom",
              "Nevarnosti tlačne opreme | tlačne posode, jeklenke s plini"
            ]
          ],
          [
            "Osnove gorenja",
            [
              "Trikotnik gorenja | gorivo, oksidant, vžig, načini prekinitve gorenja",
              "Stehiometrija gorenja | potreba po zraku, sestava dimnih plinov, kurilnost"
            ]
          ],
          [
            "Požarna zaščita",
            [
              "Gasilna sredstva | voda, pena, prah, CO2, razredi požarov",
              "Požarna preventiva | požarni red, evakuacija, javljanje požara"
            ]
          ]
        ]
      ],
      "NVARSTROJ": [
        "Varnost v strojništvu",
        "FIZ",
        [],
        [
          [
            "Varnost strojev",
            [
              "Direktiva o strojih in ocena tveganja | bistvene zahteve, oznaka CE",
              "Mehanske nevarnosti | gibljivi deli, zaščitne naprave"
            ]
          ],
          [
            "Varovala in krmilja",
            [
              "Varovala in varnostne naprave | pomična in fiksna varovala, svetlobne zavese, dvoročni vklop",
              "Varnostne funkcije krmilij | zasilni izklop, raven zmogljivosti PL"
            ]
          ],
          [
            "Trdnost in odpovedi",
            [
              "Napetosti in deformacije | Hookov zakon, natezni preizkus, dopustna napetost",
              "Utrujanje in lom | Wöhlerjeva krivulja, varnostni faktor"
            ]
          ],
          [
            "Delovna oprema",
            [
              "Dvigala in transportna sredstva | nosilnost, pregledi, vrvi in verige",
              "Ročna orodja in obdelovalni stroji | nevarnosti, varno delo"
            ]
          ]
        ]
      ],
      "NPRAVVAR": [
        "Pravne osnove varnosti",
        "EKO",
        [],
        [
          [
            "Osnove prava",
            [
              "Pravni red in viri prava | ustava, zakoni, podzakonski akti, pravo EU",
              "Pravna razmerja | pravne in fizične osebe, pravice in obveznosti"
            ]
          ],
          [
            "Varnost in zdravje pri delu",
            [
              "Zakon o varnosti in zdravju pri delu | obveznosti delodajalca in delavca, ocena tveganja",
              "Delovna razmerja | pogodba o zaposlitvi, delovni čas, varstvo posebnih skupin"
            ]
          ],
          [
            "Požarno in okoljsko pravo",
            [
              "Zakon o varstvu pred požarom | požarni red, požarna študija",
              "Okoljska in kemikalijska zakonodaja | okoljevarstvena dovoljenja, Seveso, REACH"
            ]
          ],
          [
            "Odgovornost in nadzor",
            [
              "Pravna odgovornost | odškodninska, prekrškovna in kazenska odgovornost",
              "Inšpekcijski nadzor | pristojnosti inšpekcije, ukrepi"
            ]
          ]
        ]
      ],
      "NDELOK": [
        "Delovno okolje",
        "FIZ",
        [],
        [
          [
            "Mikroklima",
            [
              "Toplotno ugodje | temperatura, vlažnost, hitrost zraka, indeksa PMV in PPD",
              "Vlažen zrak | absolutna in relativna vlažnost, Mollierov diagram"
            ]
          ],
          [
            "Hrup in vibracije",
            [
              "Hrup | raven zvočnega tlaka, decibeli, seštevanje ravni, dnevna izpostavljenost",
              "Vibracije | vibracije dlan-roka in celotnega telesa, ukrepi"
            ]
          ],
          [
            "Razsvetljava in sevanja",
            [
              "Razsvetljava | svetlobni tok, osvetljenost, bleščanje",
              "Sevanja | ionizirajoča in neionizirajoča sevanja, doza, zaščita"
            ]
          ],
          [
            "Kemijski in biološki dejavniki",
            [
              "Kemijske snovi v zraku | mejne vrednosti, izpostavljenost, prezračevanje",
              "Biološki dejavniki | skupine bioloških dejavnikov, zaščitni ukrepi"
            ]
          ]
        ]
      ],
      "NVAROK": [
        "Varstvo okolja I",
        "GEO",
        [],
        [
          [
            "Okolje in trajnostni razvoj",
            [
              "Okolje in ekosistemi | sfere Zemlje, kroženje snovi, trajnostni razvoj"
            ]
          ],
          [
            "Zrak",
            [
              "Onesnaževanje zraka | viri, SO2, NOx, delci, ozon, smog",
              "Podnebne spremembe | toplogredni plini, ogljični odtis"
            ]
          ],
          [
            "Voda",
            [
              "Onesnaževanje voda | kazalnika BPK in KPK, evtrofikacija",
              "Čiščenje odpadnih voda | mehansko, biološko in kemijsko čiščenje"
            ]
          ],
          [
            "Tla in odpadki",
            [
              "Ravnanje z odpadki | hierarhija ravnanja, recikliranje, odlagališča",
              "Onesnaženje tal | težke kovine, pesticidi, sanacija"
            ]
          ],
          [
            "Varstvo okolja v praksi",
            [
              "Presoja vplivov na okolje | postopek, okoljski management ISO 14001"
            ]
          ]
        ]
      ],
      "NMEDDELA": [
        "Medicina dela",
        "BIO",
        [],
        [
          [
            "Človek in delo",
            [
              "Fiziologija dela | energijska poraba, utrujenost, izmensko delo",
              "Ocena zmožnosti za delo | preventivni zdravstveni pregledi"
            ]
          ],
          [
            "Poklicne bolezni",
            [
              "Poklicne bolezni | definicija, kemični, fizikalni in biološki vzroki",
              "Poklicne zastrupitve | svinec, organska topila, mehanizmi toksičnosti"
            ]
          ],
          [
            "Poškodbe pri delu",
            [
              "Poškodbe pri delu | mehanizmi, statistika, preprečevanje",
              "Prva pomoč | oživljanje, opekline, kemijske poškodbe"
            ]
          ],
          [
            "Varovanje zdravja",
            [
              "Promocija zdravja na delovnem mestu | stres, mišično-skeletne bolezni, programi"
            ]
          ]
        ]
      ],
      "NTVEGANJE": [
        "Analize tveganja",
        "MAT",
        [],
        [
          [
            "Osnove",
            [
              "Tveganje kot verjetnost in posledica | matrika tveganja, sprejemljivo tveganje",
              "Klasična verjetnost | kombinatorika, pogojna verjetnost, neodvisnost, Bayesova formula"
            ]
          ],
          [
            "Zanesljivost",
            [
              "Zanesljivost sistemov | intenzivnost odpovedi, eksponentna porazdelitev, MTBF",
              "Zaporedna in vzporedna vezava | zanesljivost sestavljenih sistemov, redundanca"
            ]
          ],
          [
            "Metode analize",
            [
              "Drevo napak in drevo dogodkov | verjetnost odpovedi, minimalni preseki",
              "Metode prepoznavanja nevarnosti | HAZOP, FMEA, kontrolni seznami",
              "Analiza posledic | modeli požara, eksplozije in izpusta"
            ]
          ],
          [
            "Ocena tveganja na delovnem mestu",
            [
              "Ocena tveganja | postopek, metode ocenjevanja, ukrepi"
            ]
          ]
        ]
      ],
      "NNEVSNOV": [
        "Nevarne snovi",
        "KEM",
        [],
        [
          [
            "Razvrščanje",
            [
              "Razvrščanje nevarnih snovi | uredba CLP, piktogrami, varnostni list",
              "Zakonodaja o kemikalijah | REACH, ADR prevoz nevarnega blaga"
            ]
          ],
          [
            "Lastnosti nevarnih snovi",
            [
              "Vnetljive snovi | plamenišče, vnetišče, temperatura samovžiga",
              "Meje eksplozivnosti in plamenišče | koncentracijske meje, Le Chatelierova formula",
              "Oksidanti in reaktivne snovi | nezdružljivost snovi, peroksidi",
              "Strupene in jedke snovi | kisline in baze, strupeni plini"
            ]
          ],
          [
            "Toksikologija",
            [
              "Toksikologija | poti vnosa, mejne vrednosti, LD50",
              "Rakotvorne snovi | snovi CMR, mehanizmi delovanja"
            ]
          ],
          [
            "Ravnanje",
            [
              "Skladiščenje in ravnanje | ločeno skladiščenje, lovilne sklede, osebna varovalna oprema",
              "Ukrepanje ob razlitju | nevtralizacija, absorbenti, dekontaminacija"
            ]
          ]
        ]
      ],
      "NPSIHDEL": [
        "Psihologija dela",
        "EKO",
        [],
        [
          [
            "Psihologija in delo",
            [
              "Psihološki procesi pri delu | zaznavanje, pozornost, spomin, odločanje"
            ]
          ],
          [
            "Človeški dejavnik",
            [
              "Človeška napaka | vrste napak, Reasonov model švicarskega sira",
              "Varnostno vedenje | odnos do tveganja, varnostna kultura"
            ]
          ],
          [
            "Obremenitve",
            [
              "Stres in izgorelost | stresorji, odziv na stres, obvladovanje",
              "Utrujenost in izmensko delo | cirkadiani ritem, odmori"
            ]
          ],
          [
            "Organizacija in motivacija",
            [
              "Motivacija za delo | Maslow, Herzberg, nagrajevanje",
              "Komunikacija in vodenje | stili vodenja, delo v skupini, usposabljanje"
            ]
          ]
        ]
      ],
      "NERGO": [
        "Ergonomija in ergonomske meritve",
        "BIO",
        [],
        [
          [
            "Osnove ergonomije",
            [
              "Ergonomija | sistem človek-stroj-okolje, cilji ergonomije",
              "Antropometrija | telesne mere, percentili, oblikovanje delovnega mesta"
            ]
          ],
          [
            "Biomehanika",
            [
              "Ročno premeščanje bremen | enačba NIOSH, obremenitev hrbtenice",
              "Drža in ponavljajoče se delo | metodi RULA in REBA"
            ]
          ],
          [
            "Fiziološke obremenitve",
            [
              "Energijska poraba pri delu | srčni utrip, poraba kisika, težavnost dela"
            ]
          ],
          [
            "Ergonomske meritve",
            [
              "Meritve osvetljenosti in hrupa | merilniki, merilni postopki",
              "Meritve mikroklime | temperatura, vlažnost, hitrost zraka",
              "Delo z zasloni | oblikovanje delovnega mesta, odmori"
            ]
          ]
        ]
      ],
      "NGASENJE": [
        "Odkrivanje in gašenje požarov",
        "KEM",
        [],
        [
          [
            "Odkrivanje požara",
            [
              "Požarni javljalniki | dimni, toplotni in plamenski javljalniki, princip delovanja",
              "Sistemi za javljanje požara | centrala, alarmiranje, načrtovanje"
            ]
          ],
          [
            "Gašenje",
            [
              "Mehanizmi gašenja | ohlajanje, dušenje, inhibicija, odstranitev goriva",
              "Gasilna sredstva | voda, pena, prah, CO2, razredi požarov"
            ]
          ],
          [
            "Gasilni sistemi",
            [
              "Šprinklerski sistemi | delovanje, hidravlični izračun, gostota zalivanja",
              "Sistemi s plinskimi gasili | inertni plini, koncentracija za gašenje",
              "Hidrantno omrežje | pretok, tlak, oskrba z gasilno vodo"
            ]
          ],
          [
            "Gorenje",
            [
              "Stehiometrija gorenja | potreba po zraku, sestava dimnih plinov, kurilnost"
            ]
          ]
        ]
      ],
      "NKEMOK": [
        "Kemija okolja",
        "KEM",
        [],
        [
          [
            "Kemija atmosfere",
            [
              "Sestava in plasti atmosfere | troposfera, stratosfera, ozonska plast",
              "Fotokemijski smog in kisli dež | NOx, hlapne organske spojine, SO2"
            ]
          ],
          [
            "Kemija voda",
            [
              "Karbonatni sistem v vodah | CO2, pH, alkaliteta, trdota vode",
              "Onesnaževala v vodah | težke kovine, hranila, mikroonesnaževala"
            ]
          ],
          [
            "Kemija tal",
            [
              "Tla in sorpcija | organska snov, ionska izmenjava, porazdelitveni koeficient"
            ]
          ],
          [
            "Usoda onesnaževal",
            [
              "Obstojna organska onesnaževala | bioakumulacija, Kow, razgradnja",
              "Kisline in baze | pH močnih in šibkih kislin in baz, pufri"
            ]
          ]
        ]
      ],
      "NZELENA": [
        "Principi zelene kemije",
        "KEM",
        [],
        [
          [
            "Načela",
            [
              "Dvanajst načel zelene kemije | preprečevanje odpadkov, varnejše kemikalije"
            ]
          ],
          [
            "Metrike",
            [
              "Atomska ekonomičnost in E-faktor | izračun, primerjava sintez",
              "Stehiometrija | množina snovi, omejujoči reaktant, izkoristek, empirična formula"
            ]
          ],
          [
            "Zelena topila in kataliza",
            [
              "Alternativna topila | voda, superkritični CO2, ionske tekočine",
              "Kataliza v zeleni kemiji | homogena, heterogena in biokataliza"
            ]
          ],
          [
            "Obnovljivi viri",
            [
              "Obnovljive surovine | biomasa, bioplastika, biorafinerije",
              "Ocena življenjskega cikla | LCA, okoljski odtis"
            ]
          ]
        ]
      ],
      "NVIROL": [
        "Virologija",
        "BIO",
        [],
        [
          [
            "Zgradba virusov",
            [
              "Zgradba virusov | kapsida, ovojnica, genom",
              "Razvrščanje virusov | Baltimorova klasifikacija"
            ]
          ],
          [
            "Razmnoževanje",
            [
              "Razmnoževalni cikel virusov | pritrditev, vstop, podvajanje, sestavljanje, sprostitev",
              "Bakteriofagi | litični in lizogeni cikel"
            ]
          ],
          [
            "Virusi in gostitelj",
            [
              "Patogeneza virusnih okužb | tropizem, perzistentne okužbe, onkogeni virusi",
              "Protivirusna obramba | interferoni, cepiva, protivirusna zdravila"
            ]
          ],
          [
            "Metode",
            [
              "Virološke metode | gojenje virusov, plakni test, PCR"
            ]
          ]
        ]
      ],
      "NBIOTEH": [
        "Biotehnologija",
        "BIO",
        [],
        [
          [
            "Osnove",
            [
              "Biokatalizatorji | mikroorganizmi, encimi, celične kulture",
              "Mikrobna rast | rastna krivulja, generacijski čas, gojišča"
            ]
          ],
          [
            "Bioprocesi",
            [
              "Kinetika rasti in Monodova enačba | specifična hitrost rasti, izkoristek biomase",
              "Bioreaktorji | šaržni, šaržni z dohranjevanjem, kontinuirni, prenos kisika",
              "Sterilizacija | toplotna sterilizacija, kinetika odmiranja"
            ]
          ],
          [
            "Izolacija produktov",
            [
              "Izolacija in čiščenje bioproduktov | centrifugiranje, filtracija, kromatografija"
            ]
          ],
          [
            "Uporabe",
            [
              "Industrijski bioprodukti | antibiotiki, encimi, rekombinantni proteini, biogoriva"
            ]
          ]
        ]
      ],
      "NPOZOBJ": [
        "Požarna varnost v objektih",
        "FIZ",
        [],
        [
          [
            "Razvoj požara v prostoru",
            [
              "Faze požara | razvoj, preskok požara, polno razviti požar",
              "Toplotna moč požara | krivulja sproščanja toplote, požarna obremenitev"
            ]
          ],
          [
            "Prenos toplote pri požaru",
            [
              "Prevod toplote | Fourierov zakon, večplastne stene, toplotni upor",
              "Sevanje | Stefan-Boltzmannov zakon, emisivnost"
            ]
          ],
          [
            "Gradbeni ukrepi",
            [
              "Požarna odpornost konstrukcij | standardna požarna krivulja, razredi REI",
              "Požarni sektorji | omejevanje širjenja ognja in dima"
            ]
          ],
          [
            "Evakuacija in dim",
            [
              "Evakuacijske poti | dolžina in širina poti, čas evakuacije",
              "Odvod dima in toplote | naravno in prisilno odvajanje"
            ]
          ]
        ]
      ]
    },
    "programs": {
      "UL-FKKT-KEM": {
        "name": "Kemija",
        "source": "https://fkkt.uni-lj.si/fileadmin/user_upload/Studentski_referat/Zborniki/2026-2027/1000373_Kemija.pdf",
        "sourceYear": "2026/27",
        "years": [
          [
            "NPRSAK",
            "NMOVZ"
          ],
          [
            "NPRAK",
            "NOSNPROG",
            "NPROK",
            "NPRFK"
          ],
          [
            "NINSTRAN",
            "NPRINSTR"
          ]
        ],
        "electives": [
          "NKEMOK",
          "NZELENA"
        ]
      },
      "UL-FKKT-BIO": {
        "name": "Biokemija",
        "source": "https://fkkt.uni-lj.si/fileadmin/user_upload/Studentski_referat/Zborniki/2026-2027/1000371_Biokemija.pdf",
        "sourceYear": "2026/27",
        "years": [
          [
            "NKEMPRAK",
            "NSPLBIO",
            "NBIOKPRAK"
          ],
          [
            "NBIOCEL",
            "NOSNPROG",
            "NMOLBIO",
            "NSTRBIO",
            "NBIOKINF",
            "NMIKRO"
          ],
          [
            "NKLON",
            "NIMUNO",
            "NGENET",
            "NFIZIOL"
          ]
        ],
        "electives": [
          "NVIROL"
        ]
      },
      "UL-FKKT-KI": {
        "name": "Kemijsko inženirstvo",
        "source": "https://fkkt.uni-lj.si/fileadmin/user_upload/Studentski_referat/Zborniki/2026-2027/1000372_Kemijsko_inzenirstvo.pdf",
        "sourceYear": "2026/27",
        "years": [
          [
            "NMOVZ",
            "NOSNPROG",
            "NPRFIZ",
            "NPRSAK"
          ],
          [
            "NPRIMA",
            "NKPVAR"
          ],
          [
            "NPRKI"
          ]
        ],
        "electives": [
          "NBIOTEH"
        ]
      },
      "UL-FKKT-TV": {
        "name": "Tehniška varnost",
        "source": "https://fkkt.uni-lj.si/fileadmin/user_upload/Studentski_referat/Zborniki/2026-2027/1000370_Tehniska_varnost.pdf",
        "sourceYear": "2026/27",
        "years": [
          [
            "NVARGRAD",
            "NOSNVAR",
            "NVARSTROJ"
          ],
          [
            "NPRAVVAR",
            "NDELOK",
            "NVAROK",
            "NMEDDELA"
          ],
          [
            "NTVEGANJE",
            "NNEVSNOV",
            "NPSIHDEL",
            "NERGO",
            "NGASENJE"
          ]
        ],
        "electives": [
          "NPOZOBJ"
        ]
      }
    }
  },
  {
    "id": "UL-FS",
    "name": "UL Fakulteta za strojništvo",
    "short": "UL FS",
    "courses": {
      "NMERITVE": [
        "Meritve v strojništvu",
        "FIZ",
        [],
        [
          [
            "Osnove meroslovja",
            [
              "Merilni sistem | zgradba, statične in dinamične lastnosti, umerjanje",
              "Merilna negotovost | tip A in tip B, sestavljena in razširjena negotovost"
            ]
          ],
          [
            "Obdelava meritev",
            [
              "Statistična obdelava rezultatov | povprečje, standardni odklon, interval zaupanja, značilne števke",
              "Interpolacija in aproksimacija | Lagrangeov polinom, metoda najmanjših kvadratov"
            ]
          ],
          [
            "Merjenje mehanskih veličin",
            [
              "Merjenje dolžin in pomikov | kljunasto merilo, mikrometer, induktivna zaznavala",
              "Merjenje sil in deformacij | uporovni merilni lističi, Wheatstonov mostič"
            ]
          ],
          [
            "Merjenje termofluidnih veličin",
            [
              "Merjenje temperature | termočleni, uporovni termometri, termografija",
              "Merjenje tlaka in pretoka | manometri, Pitotova cev, zaslonka"
            ]
          ],
          [
            "Zajem podatkov",
            [
              "Zajem in vzorčenje signalov | AD-pretvornik, vzorčni teorem, filtriranje"
            ]
          ]
        ]
      ],
      "NTEHRIS": [
        "Tehnično risanje in računalniško modeliranje geometrije",
        "FIZ",
        [],
        [
          [
            "Tehnična dokumentacija",
            [
              "Standardi tehničnega risanja | formati, merila, črte, pisava",
              "Pravokotne projekcije | pogledi, razporeditev pogledov, aksonometrija"
            ]
          ],
          [
            "Prikaz predmetov",
            [
              "Prerezi in izrezi | vrste prerezov, šrafura",
              "Kotiranje | sistemi kotiranja, kotne mere"
            ]
          ],
          [
            "Natančnost izdelave",
            [
              "Tolerance in ujemi | sistem ISO, ujem z ohlapom in z nadmero",
              "Geometrijske tolerance in hrapavost | oblika, lega, oznake površin"
            ]
          ],
          [
            "Računalniško modeliranje",
            [
              "3D modeliranje teles | skice, izvleki, rotacije, parametri",
              "Sestavi in delavniške risbe | vezi med deli, kosovnica, risbe iz modela"
            ]
          ],
          [
            "Standardni elementi",
            [
              "Risanje standardnih elementov | navoji, vijačne zveze, zvari"
            ]
          ]
        ]
      ],
      "NSTROJEL2": [
        "Strojni elementi 2 – RRP",
        "FIZ",
        [],
        [
          [
            "Zveze gred-pesto",
            [
              "Zveze gred-pesto | moznik, utorna gred, stisnjeni spoj"
            ]
          ],
          [
            "Ležaji",
            [
              "Kotalni ležaji | dinamična nosilnost, življenjska doba L10",
              "Drsni ležaji | hidrodinamično mazanje, nosilnost"
            ]
          ],
          [
            "Gonila",
            [
              "Zobniki | prestavno razmerje, modul, sile na zobu",
              "Zobniška gonila | stopnje, izkoristek, poševni in stožčasti zobniki",
              "Jermenska in verižna gonila | sile v jermenu, Eytelweinova enačba"
            ]
          ],
          [
            "Sklopke, zavore in vzmeti",
            [
              "Sklopke in zavore | torni moment, toplotna obremenitev",
              "Vzmeti | togost, vijačne vzmeti, napetosti"
            ]
          ],
          [
            "Dimenzioniranje",
            [
              "Utrujanje in lom | Wöhlerjeva krivulja, varnostni faktor"
            ]
          ]
        ]
      ],
      "NIZDTEH1": [
        "Izdelovalne tehnologije 1",
        "FIZ",
        [],
        [
          [
            "Pregled",
            [
              "Izdelovalni procesi | razvrstitev, izbira tehnologije, stroški"
            ]
          ],
          [
            "Litje",
            [
              "Litje | peščeni kalupi, tlačno litje, livarske napake"
            ]
          ],
          [
            "Preoblikovanje",
            [
              "Plastično preoblikovanje | preoblikovalna trdnost, sila kovanja, valjanje",
              "Preoblikovanje pločevine | striženje, upogibanje, globoki vlek"
            ]
          ],
          [
            "Odrezavanje",
            [
              "Odrezavanje | struženje, frezanje, vrtanje, rezalni parametri",
              "Rezalna orodja in obraba | materiali orodij, Taylorjeva enačba obstojnosti"
            ]
          ],
          [
            "Spajanje",
            [
              "Varjenje | obločno varjenje, vnos toplote, zvarne napake",
              "Lepljenje in spajkanje | priprava površin, trdnost spojev"
            ]
          ]
        ]
      ],
      "NKRMIL": [
        "Krmilna tehnika",
        "RAC",
        [],
        [
          [
            "Logične osnove",
            [
              "Boolova algebra | logične funkcije, pravilnostne tabele, poenostavljanje",
              "Kombinacijska in sekvenčna vezja | pomnilne celice, števci"
            ]
          ],
          [
            "Pnevmatska in elektropnevmatska krmilja",
            [
              "Pnevmatski elementi | valji, ventili, shema krmilja",
              "Elektropnevmatika | releji, elektromagnetni ventili, končna stikala"
            ]
          ],
          [
            "Programirljivi logični krmilniki",
            [
              "Zgradba PLK | vhodi, izhodi, cikel izvajanja",
              "Programiranje PLK | lestvični diagram, časovniki, števci, IEC 61131-3",
              "Sekvenčna krmilja | Grafcet, stanja in prehodi"
            ]
          ],
          [
            "Senzorji in aktuatorji",
            [
              "Senzorji v avtomatizaciji | induktivni, kapacitivni, optični senzorji"
            ]
          ]
        ]
      ],
      "NKONSTR": [
        "Metodika konstruiranja – RRP",
        "FIZ",
        [],
        [
          [
            "Konstrukcijski proces",
            [
              "Faze konstruiranja | naloga, zasnova, osnutek, izdelava dokumentacije",
              "Zahtevnik | zahteve in želje, funkcijska struktura"
            ]
          ],
          [
            "Iskanje rešitev",
            [
              "Metode iskanja rešitev | morfološka matrika, viharjenje možganov",
              "Vrednotenje variant | tehnično-ekonomsko vrednotenje, uteženi kriteriji"
            ]
          ],
          [
            "Konstruiranje za izdelavo",
            [
              "Konstruiranje za izdelavo in montažo | DFM, DFA, standardizacija",
              "Izbira materiala | Ashbyjevi diagrami, indeksi materialov"
            ]
          ],
          [
            "Zanesljivost in varnost",
            [
              "Analiza možnih napak | FMEA, prioriteta tveganja",
              "Dimenzioniranje in varnostni faktor | dopustne napetosti, preverjanje"
            ]
          ]
        ]
      ],
      "NTRIBO": [
        "Tribologija",
        "FIZ",
        [],
        [
          [
            "Površine in kontakt",
            [
              "Topografija površin | hrapavost, parametra Ra in Rz, dejanska kontaktna površina",
              "Kontaktna mehanika | Hertzov kontakt, kontaktni tlak"
            ]
          ],
          [
            "Trenje",
            [
              "Trenje | Coulombovo trenje, lepenje",
              "Mehanizmi trenja | adhezija, deformacija, Stribeckova krivulja"
            ]
          ],
          [
            "Obraba",
            [
              "Mehanizmi obrabe | adhezijska, abrazijska, utrujenostna obraba, Archardov zakon"
            ]
          ],
          [
            "Mazanje",
            [
              "Maziva | olja, masti, viskoznost in indeks viskoznosti",
              "Režimi mazanja | hidrodinamično, elastohidrodinamično, mejno mazanje"
            ]
          ],
          [
            "Tribološki sistemi",
            [
              "Površinske obdelave in prevleke | trde prevleke, nitriranje, tribološko preskušanje"
            ]
          ]
        ]
      ],
      "NIZDTEH2": [
        "Izdelovalne tehnologije 2",
        "FIZ",
        [],
        [
          [
            "Nekonvencionalne tehnologije",
            [
              "Elektroerozija | žična in potopna erozija, odvzem materiala",
              "Laserska obdelava | rezanje, varjenje, interakcija s snovjo"
            ]
          ],
          [
            "Dodajalne tehnologije",
            [
              "Dodajalne tehnologije | FDM, SLM, SLA, konstruiranje za 3D-tisk"
            ]
          ],
          [
            "Obdelava polimerov",
            [
              "Brizganje polimerov | cikel brizganja, orodja, napake"
            ]
          ],
          [
            "Avtomatizacija izdelave",
            [
              "CNC-obdelava | koordinatni sistemi, G-koda, CAM",
              "Proizvodni sistemi | fleksibilni sistemi, industrija 4.0"
            ]
          ],
          [
            "Kakovost",
            [
              "Kontrola kakovosti | merjenje izdelkov, statistična kontrola procesa, sposobnost procesa"
            ]
          ]
        ]
      ],
      "NPOGONI": [
        "Pogoni",
        "FIZ",
        [],
        [
          [
            "Osnove pogonov",
            [
              "Pogonski sistem | motor, prenosnik, delovni stroj, karakteristike",
              "Delovna točka pogona | momentna karakteristika, zagon, reducirani vztrajnostni moment"
            ]
          ],
          [
            "Elektromotorni pogoni",
            [
              "Električni stroji | transformator, enosmerni in asinhronski motor",
              "Regulacija hitrosti | frekvenčni pretvornik, servopogoni"
            ]
          ],
          [
            "Mehanski prenosniki",
            [
              "Zobniška gonila | stopnje, izkoristek, poševni in stožčasti zobniki",
              "Jermenska in verižna gonila | sile v jermenu, Eytelweinova enačba"
            ]
          ],
          [
            "Motorji z notranjim zgorevanjem",
            [
              "Krožni procesi | Ottov, Dieslov, Jouleov in Rankinov proces",
              "Motorji z notranjim zgorevanjem | moč, navor, specifična poraba goriva"
            ]
          ]
        ]
      ],
      "NMEHATR": [
        "Mehatronika in laserske tehnologije",
        "FIZ",
        [],
        [
          [
            "Mehatronski sistemi",
            [
              "Mehatronski sistem | senzorji, aktuatorji, krmilnik, povratna zanka",
              "Senzorji v avtomatizaciji | induktivni, kapacitivni, optični senzorji"
            ]
          ],
          [
            "Modeliranje in vodenje",
            [
              "Prenosne funkcije | odziv linearnega sistema, poli in stabilnost",
              "Regulacija | PID regulator, stabilnost zaprte zanke"
            ]
          ],
          [
            "Aktuatorji",
            [
              "Elektromotorji v mehatroniki | koračni in servomotorji, piezoaktuatorji"
            ]
          ],
          [
            "Laserji",
            [
              "Delovanje laserja | stimulirana emisija, obrnjena zasedenost, resonator",
              "Lastnosti laserske svetlobe | koherenca, divergenca, fokusiranje snopa",
              "Laserska obdelava | rezanje, varjenje, interakcija s snovjo"
            ]
          ]
        ]
      ]
    },
    "programs": {
      "UL-FS-RRP": {
        "name": "Strojništvo – razvojno raziskovalni program",
        "source": "https://www.fs.uni-lj.si/studij/studij-1-stopnje/un/predmetnik-2023-2024/",
        "sourceYear": "2023/24; 1. letnik potrjen z zbornikom 2026/27",
        "years": [
          [
            "NMERITVE",
            "NTEHRIS"
          ],
          [
            "NSTROJEL2",
            "NIZDTEH1",
            "NKRMIL",
            "NKONSTR"
          ],
          [
            "NTRIBO",
            "NIZDTEH2",
            "NPOGONI",
            "NMEHATR"
          ]
        ]
      }
    }
  },
  {
    "id": "UL-FMF",
    "name": "UL Fakulteta za matematiko in fiziko",
    "short": "UL FMF",
    "courses": {
      "NRACPRAK": [
        "Računalniški praktikum",
        "RAC",
        [],
        [
          [
            "Računalniško okolje",
            [
              "Datotečni sistem in ukazna vrstica | imeniki, osnovni ukazi, skripte"
            ]
          ],
          [
            "Matematično besedilo",
            [
              "LaTeX | zgradba dokumenta, matematične formule, okolja, slike"
            ]
          ],
          [
            "Simbolno računanje",
            [
              "Sistemi za simbolno računanje | odvajanje, integriranje, reševanje enačb",
              "Grafi funkcij | risanje grafov, parametrične krivulje"
            ]
          ],
          [
            "Numerično računanje",
            [
              "Delo z matrikami v računalniku | linearni sistemi, lastne vrednosti",
              "Preglednice | formule, grafi, osnovna statistika"
            ]
          ],
          [
            "Prvi programi",
            [
              "Prvi programi v Pythonu | spremenljivke, zanke, funkcije"
            ]
          ]
        ]
      ],
      "NUVPROG": [
        "Uvod v programiranje",
        "RAC",
        [],
        [
          [
            "Osnove",
            [
              "Spremenljivke in podatkovni tipi | števila, nizi, logične vrednosti, pretvorbe",
              "Pogojni stavki | if, elif, else, gnezdenje",
              "Zanke | for, while, break, štetje in seštevanje"
            ]
          ],
          [
            "Funkcije",
            [
              "Funkcije | parametri, vračanje vrednosti, lokalne spremenljivke",
              "Rekurzija | robni primer, rekurzivni klic, Fibonaccijeva števila"
            ]
          ],
          [
            "Podatkovne strukture",
            [
              "Seznami in nizi | indeksiranje, rezine, metode, iteracija",
              "Slovarji in množice | ključi, štetje pojavitev, unija in presek"
            ]
          ],
          [
            "Objekti in datoteke",
            [
              "Razredi in objekti | atributi, metode, konstruktor",
              "Branje in pisanje datotek | besedilne in CSV datoteke, obdelava meritev"
            ]
          ],
          [
            "Algoritmi",
            [
              "Iskanje in urejanje | linearno in bisekcijsko iskanje, urejanje z vstavljanjem"
            ]
          ]
        ]
      ],
      "NPROG1": [
        "Programiranje 1",
        "RAC",
        [],
        [
          [
            "Funkcijsko programiranje",
            [
              "Funkcijsko programiranje | funkcije višjega reda, map, filter, fold",
              "Tipi in ujemanje vzorcev | algebrski podatkovni tipi, polimorfizem"
            ]
          ],
          [
            "Rekurzija in podatkovne strukture",
            [
              "Rekurzija | robni primer, rekurzivni klic, Fibonaccijeva števila",
              "Seznami in drevesa | rekurzivne podatkovne strukture, iskalna drevesa"
            ]
          ],
          [
            "Algoritmi",
            [
              "Časovna zahtevnost | notacija O, analiza zank in rekurzije",
              "Urejanje | urejanje z zlivanjem, hitro urejanje",
              "Dinamično programiranje | memoizacija, problem nahrbtnika"
            ]
          ],
          [
            "Imperativno in objektno programiranje",
            [
              "Objekti in moduli | razredi, enkapsulacija, testiranje"
            ]
          ]
        ]
      ],
      "NMIKROEK": [
        "Mikroekonomija",
        "EKO",
        [],
        [
          [
            "Trg",
            [
              "Ponudba in povpraševanje | tržno ravnovesje, premiki krivulj",
              "Elastičnost | cenovna, dohodkovna in križna elastičnost"
            ]
          ],
          [
            "Potrošnik",
            [
              "Teorija potrošnika | funkcija koristnosti, indiferenčne krivulje, proračunska omejitev",
              "Optimalna izbira potrošnika | Lagrangeova metoda, Slutskyjeva enačba"
            ]
          ],
          [
            "Proizvajalec",
            [
              "Proizvodnja | produkcijska funkcija, mejni produkt, donosi obsega",
              "Stroški | fiksni, variabilni, mejni in povprečni stroški"
            ]
          ],
          [
            "Tržne strukture",
            [
              "Popolna konkurenca | ravnovesje podjetja in panoge",
              "Monopol in oligopol | maksimizacija dobička, Cournotov model",
              "Tržne nepopolnosti | eksternalije, javne dobrine, asimetrične informacije"
            ]
          ]
        ]
      ],
      "NMAKROEK": [
        "Makroekonomija",
        "EKO",
        [],
        [
          [
            "Merjenje gospodarstva",
            [
              "Bruto domači proizvod | proizvodna, dohodkovna in izdatkovna metoda, realni BDP",
              "Inflacija in brezposelnost | indeks cen, stopnja brezposelnosti"
            ]
          ],
          [
            "Kratki rok",
            [
              "Model IS-LM | trg blaga in trg denarja, ravnovesje",
              "Agregatna ponudba in povpraševanje | šoki, Phillipsova krivulja"
            ]
          ],
          [
            "Dolgi rok",
            [
              "Gospodarska rast | Solowov model, stacionarno stanje, tehnološki napredek"
            ]
          ],
          [
            "Ekonomska politika",
            [
              "Fiskalna politika | javni izdatki, davki, multiplikator, javni dolg",
              "Denarna politika | centralna banka, obrestne mere, transmisijski mehanizem"
            ]
          ],
          [
            "Odprto gospodarstvo",
            [
              "Odprto gospodarstvo | plačilna bilanca, devizni tečaj, model Mundell-Fleming"
            ]
          ]
        ]
      ],
      "NANALR": [
        "Analiza podatkov s programom R",
        "RAC",
        [],
        [
          [
            "Osnove R",
            [
              "Osnove jezika R | vektorji, podatkovni okvirji, funkcije, paketi",
              "Uvoz in čiščenje podatkov | branje datotek, manjkajoče vrednosti, preoblikovanje"
            ]
          ],
          [
            "Opisna statistika",
            [
              "Verjetnost in statistika | vzorec, povprečje, standardni odklon, linearna regresija",
              "Grafični prikazi | histogram, škatla z brki, razsevni diagram, ggplot2"
            ]
          ],
          [
            "Statistično sklepanje",
            [
              "Statistično sklepanje | intervali zaupanja, preizkušanje domnev",
              "Test hi-kvadrat in t-test | izvedba v R, interpretacija"
            ]
          ],
          [
            "Modeli in poročila",
            [
              "Linearna regresija v R | funkcija lm, ostanki, koeficient determinacije",
              "Ponovljiva analiza | R Markdown, poročila"
            ]
          ]
        ]
      ],
      "NDENAR": [
        "Denar in finance",
        "EKO",
        [],
        [
          [
            "Denar",
            [
              "Funkcije in oblike denarja | denarni agregati, ponudba denarja, multiplikator"
            ]
          ],
          [
            "Finančni sistem",
            [
              "Finančni sistem | finančni trgi, posredniki, vloga bank",
              "Centralna banka | ECB, instrumenti denarne politike"
            ]
          ],
          [
            "Obrestne mere",
            [
              "Obrestni račun | navadno in obrestno obrestovanje, efektivna obrestna mera, zvezno obrestovanje",
              "Struktura obrestnih mer | časovna struktura, krivulja donosnosti, tveganje"
            ]
          ],
          [
            "Vrednotenje",
            [
              "Obveznice in donosnost | cena obveznice, donosnost do dospetja, trajanje",
              "Delnice | model diskontiranih dividend, tveganje in donos"
            ]
          ],
          [
            "Inflacija",
            [
              "Inflacija in denar | kvantitativna teorija denarja, Fisherjev učinek"
            ]
          ]
        ]
      ],
      "NFINPRAK": [
        "Finančni praktikum",
        "MAT",
        [],
        [
          [
            "Orodja",
            [
              "Finančni izračuni v programu | Python ali R, časovne vrste cen"
            ]
          ],
          [
            "Obrestni račun v praksi",
            [
              "Rente in amortizacija | sedanja in končna vrednost rente, anuiteta, amortizacijski načrt",
              "Obveznice in donosnost | cena obveznice, donosnost do dospetja, trajanje"
            ]
          ],
          [
            "Portfelji",
            [
              "Donosnost in tveganje | logaritemski donosi, volatilnost, kovarianca",
              "Markowitzev model | učinkovita meja, optimalni portfelj"
            ]
          ],
          [
            "Opcije",
            [
              "Binomski model vrednotenja opcij | brezarbitražna cena, replikacija",
              "Black-Scholesova formula | vrednotenje evropskih opcij, grški parametri",
              "Simulacija Monte Carlo | simulacija cen, ocena vrednosti izvedenih instrumentov"
            ]
          ]
        ]
      ],
      "NFINTRG": [
        "Finančni trgi in inštitucije",
        "EKO",
        [],
        [
          [
            "Finančni trgi",
            [
              "Vrste finančnih trgov | denarni, kapitalski in devizni trg, primarni in sekundarni trg",
              "Delovanje borze | naročila, likvidnost, borzni indeksi"
            ]
          ],
          [
            "Finančni instrumenti",
            [
              "Izvedeni finančni instrumenti | terminske pogodbe, opcije, zamenjave",
              "Obveznice in donosnost | cena obveznice, donosnost do dospetja, trajanje"
            ]
          ],
          [
            "Finančne institucije",
            [
              "Banke | bilanca banke, kreditno in likvidnostno tveganje",
              "Zavarovalnice in investicijski skladi | vloga, upravljanje premoženja"
            ]
          ],
          [
            "Regulacija",
            [
              "Regulacija finančnega sistema | Basel, nadzor, finančne krize"
            ]
          ]
        ]
      ],
      "NRACPRAKF": [
        "Računalniški praktikum (Fizika)",
        "RAC",
        [],
        [
          [
            "Okolje",
            [
              "Datotečni sistem in ukazna vrstica | imeniki, osnovni ukazi, skripte",
              "LaTeX | zgradba dokumenta, matematične formule, okolja, slike"
            ]
          ],
          [
            "Python za fizike",
            [
              "Prvi programi v Pythonu | spremenljivke, zanke, funkcije",
              "Numerično računanje z NumPy | tabele, vektorizacija, linearna algebra"
            ]
          ],
          [
            "Obdelava meritev",
            [
              "Grafični prikaz in obdelava podatkov | risanje grafov, prilagajanje premice",
              "Napake in prilagajanje | propagacija napak, linearna regresija"
            ]
          ],
          [
            "Simulacije",
            [
              "Numerično reševanje diferencialnih enačb | Eulerjeva metoda, metode Runge-Kutta"
            ]
          ]
        ]
      ],
      "NFIZPRAK1": [
        "Fizikalni praktikum I",
        "FIZ",
        [],
        [
          [
            "Merske napake",
            [
              "Statistična obdelava rezultatov | povprečje, standardni odklon, interval zaupanja, značilne števke",
              "Napake in prilagajanje | propagacija napak, linearna regresija"
            ]
          ],
          [
            "Mehanika",
            [
              "Newtonovi zakoni in sile | trenje, sile pri kroženju, gravitacija",
              "Vrtenje togega telesa | navor, vztrajnostni moment, vrtilna količina",
              "Harmonično nihanje | nihajni čas, nihalo na vijačni vzmeti, matematično nihalo, dušenje"
            ]
          ],
          [
            "Tekočine",
            [
              "Viskoznost in Reynoldsovo število | laminarni in turbulentni tok",
              "Kontinuitetna in Bernoullijeva enačba | hidrostatika, tok idealne tekočine"
            ]
          ],
          [
            "Poročilo",
            [
              "Zapis meritev in poročilo | struktura poročila, značilne števke, tabele in grafi"
            ]
          ]
        ]
      ],
      "NFIZPRAK2": [
        "Fizikalni praktikum II",
        "FIZ",
        [],
        [
          [
            "Toplota",
            [
              "Idealni plin in kinetična teorija | plinska enačba, notranja energija, toplotne kapacitete",
              "Prevod toplote | Fourierov zakon, večplastne stene, toplotni upor",
              "Specifična toplota in kalorimetrija | mešalni kalorimeter, fazni prehodi"
            ]
          ],
          [
            "Valovanje",
            [
              "Valovanje | valovna enačba, stoječe valovanje, zvok, Dopplerjev pojav"
            ]
          ],
          [
            "Elektrika",
            [
              "Elektrostatika | Coulombov zakon, električno polje, potencial, kondenzator",
              "Električni tok in vezja | Ohmov zakon, Kirchhoffova zakona, RC vezje"
            ]
          ],
          [
            "Obdelava meritev",
            [
              "Napake in prilagajanje | propagacija napak, linearna regresija"
            ]
          ]
        ]
      ],
      "NFIZPRAK3": [
        "Fizikalni praktikum III",
        "FIZ",
        [],
        [
          [
            "Elektromagnetizem",
            [
              "Magnetno polje in indukcija | Lorentzova sila, Amperov zakon, indukcijski zakon",
              "Izmenični tokovi | kazalci, impedanca, delovna in jalova moč",
              "Nihajni krog | resonanca, kvaliteta, dušenje"
            ]
          ],
          [
            "Optika",
            [
              "Geometrijska in valovna optika | lom, leče, interferenca, uklon",
              "Polarizacija | Malusov zakon, Brewstrov kot"
            ]
          ],
          [
            "Merilni instrumenti",
            [
              "Osciloskop in merilni instrumenti | merjenje napetosti, frekvence, faznega zamika"
            ]
          ],
          [
            "Obdelava meritev",
            [
              "Napake in prilagajanje | propagacija napak, linearna regresija"
            ]
          ]
        ]
      ],
      "NFIZPRAK4": [
        "Fizikalni praktikum IV",
        "FIZ",
        [],
        [
          [
            "Atomska fizika",
            [
              "Fotoni in atomi | fotoefekt, de Brogliejeva valovna dolžina, energijski nivoji",
              "Vodikov atom in kvantna števila | energijski nivoji, orbitale, spektri",
              "Franck-Hertzov poskus | vzbujanje atomov, energijski nivoji"
            ]
          ],
          [
            "Jedrska fizika",
            [
              "Jedrska fizika | vezavna energija, radioaktivni razpad, razpolovni čas, aktivnost",
              "Detektorji sevanja | Geiger-Müllerjev števec, scintilator, statistika štetja"
            ]
          ],
          [
            "Trdna snov",
            [
              "Pasovna struktura | prevodniki, polprevodniki, izolatorji",
              "Hallov pojav | nosilci naboja, gostota in gibljivost"
            ]
          ],
          [
            "Obdelava meritev",
            [
              "Napake in prilagajanje | propagacija napak, linearna regresija"
            ]
          ]
        ]
      ],
      "NFIZPRAK5": [
        "Fizikalni praktikum V",
        "FIZ",
        [],
        [
          [
            "Spektroskopija",
            [
              "Molekulska spektroskopija | rotacijski in vibracijski spektri",
              "Jedrska magnetna resonanca | Larmorjeva frekvenca, relaksacijska časa"
            ]
          ],
          [
            "Trdna snov",
            [
              "Rentgenska difrakcija | Braggov zakon, recipročna mreža",
              "Superprevodnost | kritična temperatura, Meissnerjev pojav"
            ]
          ],
          [
            "Optika in laserji",
            [
              "Delovanje laserja | stimulirana emisija, obrnjena zasedenost, resonator",
              "Interferometrija | Michelsonov interferometer, koherenca"
            ]
          ],
          [
            "Jedrska spektroskopija",
            [
              "Spektroskopija žarkov gama | fotoefekt, Comptonovo sipanje, energijska ločljivost"
            ]
          ]
        ]
      ],
      "NFIZMER": [
        "Fizikalna merjenja I",
        "FIZ",
        [],
        [
          [
            "Merjenje in signali",
            [
              "Merilni sistem | zgradba, statične in dinamične lastnosti, umerjanje",
              "Šum in razmerje signal-šum | termični šum, povprečenje, fazno občutljivi ojačevalnik"
            ]
          ],
          [
            "Elektronika za meritve",
            [
              "Operacijski ojačevalnik | ojačevalnik, integrator, filter",
              "Zajem in vzorčenje signalov | AD-pretvornik, vzorčni teorem, filtriranje"
            ]
          ],
          [
            "Senzorji",
            [
              "Merjenje temperature | termočleni, uporovni termometri, termografija",
              "Detektorji svetlobe | fotodiode, fotopomnoževalke, CCD"
            ]
          ],
          [
            "Analiza",
            [
              "Fourierova analiza signalov | spekter, diskretna Fourierova transformacija",
              "Napake in prilagajanje | propagacija napak, linearna regresija"
            ]
          ]
        ]
      ],
      "NJEDRA": [
        "Fizika jedra in osnovnih delcev",
        "FIZ",
        [],
        [
          [
            "Jedro",
            [
              "Jedrska fizika | vezavna energija, radioaktivni razpad, razpolovni čas, aktivnost",
              "Modeli jedra | kapljični model, Weizsäckerjeva formula, lupinski model"
            ]
          ],
          [
            "Razpadi in reakcije",
            [
              "Razpadi alfa, beta in gama | tunelski pojav, nevtrino, izbirna pravila",
              "Jedrske reakcije | presek, fisija, fuzija"
            ]
          ],
          [
            "Sevanje in snov",
            [
              "Interakcija sevanja s snovjo | ionizacijske izgube, atenuacija, detektorji"
            ]
          ],
          [
            "Osnovni delci",
            [
              "Osnovni delci | standardni model, ohranitveni zakoni",
              "Kvarki in hadroni | barvni naboj, mezoni, barioni",
              "Šibka interakcija | bozona W in Z, kršitev parnosti"
            ]
          ]
        ]
      ],
      "NMEHKONT": [
        "Mehanika kontinuov",
        "FIZ",
        [],
        [
          [
            "Deformacije in napetosti",
            [
              "Tenzor deformacij | majhne deformacije, zasuk, relativna sprememba prostornine",
              "Tenzor napetosti | Cauchyjev izrek, glavne napetosti"
            ]
          ],
          [
            "Elastičnost",
            [
              "Hookov zakon za izotropno snov | prožnostni modul, Poissonovo razmerje, Laméjevi konstanti",
              "Elastični valovi | longitudinalni in transverzalni valovi"
            ]
          ],
          [
            "Tekočine",
            [
              "Navier-Stokesova enačba | viskoznost, robni pogoji, Poiseuillov tok",
              "Viskoznost in Reynoldsovo število | laminarni in turbulentni tok",
              "Vrtinčnost in potencialni tok | cirkulacija, Bernoullijeva enačba"
            ]
          ]
        ]
      ],
      "NOSNMET": [
        "Osnove meteorologije",
        "FIZ",
        [],
        [
          [
            "Ozračje",
            [
              "Sestava in plasti atmosfere | troposfera, stratosfera, ozonska plast",
              "Sevanje v ozračju | sončno in zemeljsko sevanje, energijska bilanca, učinek tople grede"
            ]
          ],
          [
            "Termodinamika ozračja",
            [
              "Vlaga v ozračju | relativna vlažnost, rosišče, nasičeni parni tlak",
              "Stabilnost ozračja | suhoadiabatni in vlažnoadiabatni gradient, konvekcija"
            ]
          ],
          [
            "Gibanje zraka",
            [
              "Sile v ozračju | gradient tlaka, Coriolisova sila, geostrofski veter",
              "Splošna cirkulacija | Hadleyjeva celica, zahodni vetrovi"
            ]
          ],
          [
            "Vreme",
            [
              "Fronte in cikloni | hladna in topla fronta, nastanek ciklona",
              "Oblaki in padavine | nastanek oblakov, vrste padavin"
            ]
          ]
        ]
      ],
      "NASTRO1": [
        "Astronomija I",
        "FIZ",
        [],
        [
          [
            "Nebesna sfera",
            [
              "Nebesne koordinate | ekvatorski in horizontski sistem, čas"
            ]
          ],
          [
            "Gibanje nebesnih teles",
            [
              "Keplerjevi zakoni | gravitacijski zakon, tirnice, problem dveh teles"
            ]
          ],
          [
            "Zvezde",
            [
              "Sevanje zvezd | sevanje črnega telesa, magnitude, spektralni razredi",
              "Hertzsprung-Russellov diagram | razvoj zvezd, glavna veja"
            ]
          ],
          [
            "Opazovanja",
            [
              "Teleskopi | ločljivost, zbiralna moč, detektorji"
            ]
          ],
          [
            "Galaksije in vesolje",
            [
              "Galaksije | Rimska cesta, vrste galaksij",
              "Kozmologija | Hubblov zakon, prasevanje"
            ]
          ]
        ]
      ],
      "NPSA1": [
        "Podatkovne strukture in algoritmi 1",
        "RAC",
        [],
        [
          [
            "Analiza algoritmov",
            [
              "Časovna zahtevnost | notacija O, analiza zank in rekurzije",
              "Deli in vladaj | rekurzivne enačbe, krovni izrek"
            ]
          ],
          [
            "Osnovne podatkovne strukture",
            [
              "Seznami, skladi in vrste | tabele, povezani seznami, amortizirana analiza",
              "Kopice in prednostne vrste | dvojiška kopica, urejanje s kopico"
            ]
          ],
          [
            "Urejanje in iskanje",
            [
              "Urejanje | urejanje z zlivanjem, hitro urejanje",
              "Iskalna drevesa | dvojiška iskalna drevesa, drevesa AVL",
              "Zgoščene tabele | zgoščevalne funkcije, reševanje trkov"
            ]
          ],
          [
            "Algoritmi na grafih",
            [
              "Preiskovanje grafov | iskanje v širino in globino, topološko urejanje",
              "Najkrajše poti | Dijkstrov algoritem, Bellman-Fordov algoritem"
            ]
          ]
        ]
      ],
      "NKRIPTO": [
        "Teorija kodiranja in kriptografija",
        "MAT",
        [],
        [
          [
            "Kodiranje",
            [
              "Linearni kodi | generatorska in kontrolna matrika, Hammingova razdalja",
              "Hammingovi in ciklični kodi | popravljanje napak, generatorski polinom"
            ]
          ],
          [
            "Teorija števil in končni obsegi",
            [
              "Modularna aritmetika | kongruence, Evklidov algoritem, Eulerjeva funkcija",
              "Končni obsegi | praštevilski obsegi, nerazcepni polinomi"
            ]
          ],
          [
            "Kriptografija",
            [
              "Simetrična kriptografija | klasične šifre, AES, načini delovanja",
              "Kriptosistem RSA | generiranje ključev, šifriranje, digitalni podpis",
              "Diskretni logaritem | Diffie-Hellmanova izmenjava ključev, ElGamal"
            ]
          ]
        ]
      ]
    },
    "programs": {
      "UL-FMF-MAT": {
        "name": "Matematika",
        "source": "https://www.fmf.uni-lj.si/sl/studij-matematike/programi/1mate/2025/",
        "sourceYear": "2018/19; novejši predmetnik še ni preverjen",
        "years": [
          [
            "NRACPRAK",
            "NUVPROG"
          ],
          [
            "NPROG1"
          ],
          []
        ],
        "electives": [
          "NPSA1",
          "NKRIPTO"
        ]
      },
      "UL-FMF-FIMA": {
        "name": "Finančna matematika",
        "source": "https://www.fmf.uni-lj.si/documents/1414/1000403_Finan%C4%8Dna_matematika.pdf",
        "sourceYear": "2025/26",
        "years": [
          [
            "NRACPRAK",
            "NMIKROEK",
            "NUVPROG"
          ],
          [
            "NMAKROEK",
            "NANALR",
            "NDENAR"
          ],
          [
            "NFINPRAK",
            "NFINTRG"
          ]
        ],
        "electives": [
          "NPSA1",
          "NKRIPTO"
        ]
      },
      "UL-FMF-FIZ": {
        "name": "Fizika",
        "source": "https://www.fmf.uni-lj.si/documents/343/1000406_Fizika.pdf",
        "sourceYear": "smer Fizika; 1. letnik je skupen vsem smerem",
        "years": [
          [
            "NRACPRAKF",
            "NFIZPRAK1",
            "NFIZPRAK2"
          ],
          [
            "NFIZPRAK3",
            "NFIZPRAK4"
          ],
          [
            "NFIZPRAK5",
            "NFIZMER"
          ]
        ],
        "electives": [
          "NJEDRA",
          "NMEHKONT",
          "NOSNMET",
          "NASTRO1"
        ]
      }
    }
  },
  {
    "id": "UM-FKKT",
    "name": "UM Fakulteta za kemijo in kemijsko tehnologijo",
    "short": "UM FKKT",
    "courses": {
      "NRACKEM": [
        "Računalništvo v kemiji",
        "RAC",
        [],
        [
          [
            "Preglednice",
            [
              "Preglednice v kemiji | formule, grafi, regresija, obdelava meritev"
            ]
          ],
          [
            "Programiranje",
            [
              "Spremenljivke in podatkovni tipi | števila, nizi, logične vrednosti, pretvorbe",
              "Pogojni stavki | if, elif, else, gnezdenje",
              "Zanke | for, while, break, štetje in seštevanje",
              "Funkcije | parametri, vračanje vrednosti, lokalne spremenljivke"
            ]
          ],
          [
            "Numerične metode v kemiji",
            [
              "Reševanje nelinearnih enačb | bisekcija, Newtonova metoda, konvergenca",
              "Interpolacija in aproksimacija | Lagrangeov polinom, metoda najmanjših kvadratov"
            ]
          ],
          [
            "Kemijska informatika",
            [
              "Kemijske podatkovne zbirke in zapis struktur | PubChem, SMILES, risanje formul"
            ]
          ]
        ]
      ],
      "NMEROSL": [
        "Meroslovje v kemiji",
        "KEM",
        [],
        [
          [
            "Osnove meroslovja",
            [
              "Mednarodni sistem enot in sledljivost | SI, referenčni materiali, umerjanje",
              "Merilna negotovost | tip A in tip B, sestavljena in razširjena negotovost"
            ]
          ],
          [
            "Statistika meritev",
            [
              "Statistična obdelava rezultatov | povprečje, standardni odklon, interval zaupanja, značilne števke",
              "Statistično sklepanje | intervali zaupanja, preizkušanje domnev",
              "Linearna regresija in umeritvena krivulja | naklon, presečišče, napovedni interval"
            ]
          ],
          [
            "Kakovost",
            [
              "Validacija metode | meja zaznave, linearnost, točnost, natančnost",
              "Zagotavljanje kakovosti | ISO/IEC 17025, kontrolne karte, medlaboratorijske primerjave"
            ]
          ]
        ]
      ],
      "NGRADIVA": [
        "Gradiva",
        "KEM",
        [
          "MATERIALI"
        ],
        [
          [
            "Lastnosti gradiv",
            [
              "Električne in toplotne lastnosti gradiv | prevodnost, toplotna razteznost",
              "Korozija | elektrokemijski mehanizem, zaščita pred korozijo"
            ]
          ],
          [
            "Izbira gradiv",
            [
              "Izbira materiala | Ashbyjevi diagrami, indeksi materialov"
            ]
          ]
        ]
      ],
      "NNANO": [
        "Nanokemija in materiali",
        "KEM",
        [],
        [
          [
            "Nanosvet",
            [
              "Posebnosti nanomaterialov | razmerje površina/prostornina, kvantni učinki"
            ]
          ],
          [
            "Sinteza",
            [
              "Sinteza nanodelcev | od zgoraj navzdol in od spodaj navzgor, sol-gel, obarjanje",
              "Stabilizacija koloidov | elektrostatska in sterična stabilizacija, zeta potencial"
            ]
          ],
          [
            "Nanomateriali",
            [
              "Ogljikovi nanomateriali | fulereni, nanocevke, grafen",
              "Kovinski in polprevodniški nanodelci | plazmonska resonanca, kvantne pike"
            ]
          ],
          [
            "Karakterizacija",
            [
              "Karakterizacija nanomaterialov | TEM, SEM, AFM, dinamično sipanje svetlobe",
              "Rentgenska difrakcija | Braggov zakon, recipročna mreža"
            ]
          ],
          [
            "Uporaba in varnost",
            [
              "Uporaba in tveganja nanomaterialov | kataliza, medicina, nanotoksikologija"
            ]
          ]
        ]
      ],
      "NKEMOK": [
        "Kemija okolja",
        "KEM",
        [],
        [
          [
            "Kemija atmosfere",
            [
              "Sestava in plasti atmosfere | troposfera, stratosfera, ozonska plast",
              "Fotokemijski smog in kisli dež | NOx, hlapne organske spojine, SO2"
            ]
          ],
          [
            "Kemija voda",
            [
              "Karbonatni sistem v vodah | CO2, pH, alkaliteta, trdota vode",
              "Onesnaževala v vodah | težke kovine, hranila, mikroonesnaževala"
            ]
          ],
          [
            "Kemija tal",
            [
              "Tla in sorpcija | organska snov, ionska izmenjava, porazdelitveni koeficient"
            ]
          ],
          [
            "Usoda onesnaževal",
            [
              "Obstojna organska onesnaževala | bioakumulacija, Kow, razgradnja",
              "Kisline in baze | pH močnih in šibkih kislin in baz, pufri"
            ]
          ]
        ]
      ],
      "NPOLIM": [
        "Polimerna kemija",
        "KEM",
        [],
        [
          [
            "Osnove",
            [
              "Polimeri | zgradba, termoplasti in duromeri, lastnosti",
              "Molska masa polimerov | številčno in masno povprečje, disperznost"
            ]
          ],
          [
            "Polimerizacija",
            [
              "Verižna polimerizacija | radikalska, ionska, kinetika",
              "Stopenjska polimerizacija | polikondenzacija, Carothersova enačba",
              "Kopolimerizacija | vrste kopolimerov, reaktivnostni razmerji"
            ]
          ],
          [
            "Lastnosti",
            [
              "Toplotne lastnosti polimerov | steklasti prehod, kristaliničnost, tališče",
              "Raztopine polimerov | Flory-Hugginsova teorija, viskozimetrija"
            ]
          ],
          [
            "Karakterizacija",
            [
              "Karakterizacija polimerov | GPC, DSC, IR"
            ]
          ]
        ]
      ],
      "NELPROC": [
        "Elementi procesnih naprav",
        "FIZ",
        [],
        [
          [
            "Tehnična dokumentacija",
            [
              "Procesne sheme | blokovne in procesne sheme, simboli P&ID"
            ]
          ],
          [
            "Trdnost elementov",
            [
              "Napetosti in deformacije | Hookov zakon, natezni preizkus, dopustna napetost",
              "Tlačne posode | tankostenske posode, kotlovska formula"
            ]
          ],
          [
            "Cevovodi",
            [
              "Cevovodi in armature | ventili, zasuni, tesnila, dimenzioniranje cevi",
              "Tlačne izgube v ceveh | Darcy-Weisbachova enačba, lokalne izgube"
            ]
          ],
          [
            "Naprave",
            [
              "Črpalke in kompresorji | karakteristika črpalke, delovna točka",
              "Toplotni prenosniki | logaritemska srednja temperaturna razlika",
              "Mešalniki in posode | vrste mešal, moč mešanja"
            ]
          ],
          [
            "Materiali",
            [
              "Izbira materiala za procesno opremo | korozijska obstojnost, temperaturno območje"
            ]
          ]
        ]
      ],
      "NBIOKMB": [
        "Biokemija in molekularna biologija",
        "BIO",
        [
          "BIOKEM_TEMELJI"
        ],
        [
          [
            "Presnova",
            [
              "Presnova | glikoliza, citratni cikel, oksidativna fosforilacija"
            ]
          ],
          [
            "Molekularna biologija",
            [
              "Prepisovanje in prevajanje | RNA-polimeraza, genetski kod, ribosomi",
              "Uravnavanje izražanja genov | operon, transkripcijski dejavniki",
              "Metode molekularne biologije | PCR, elektroforeza DNA, sekvenciranje"
            ]
          ]
        ]
      ],
      "NORGTEH": [
        "Organska tehnologija",
        "KEM",
        [],
        [
          [
            "Surovine",
            [
              "Surovine organske industrije | nafta, zemeljski plin, premog, biomasa",
              "Predelava nafte | destilacija, kreking, reforming"
            ]
          ],
          [
            "Petrokemija",
            [
              "Osnovni petrokemični produkti | eten, propen, aromati, sintezni plin",
              "Industrijske organske sinteze | oksidacije, hidrogeniranje, hidroformilacija"
            ]
          ],
          [
            "Kataliza",
            [
              "Heterogena kataliza | adsorpcija, aktivnost, selektivnost, deaktivacija"
            ]
          ],
          [
            "Produkti",
            [
              "Polimeri | zgradba, termoplasti in duromeri, lastnosti",
              "Fina kemija in farmacevtski procesi | šaržni procesi, čistost, zelena kemija"
            ]
          ]
        ]
      ],
      "NEKOPOD": [
        "Ekonomika in podjetništvo",
        "EKO",
        [],
        [
          [
            "Podjetje",
            [
              "Podjetje in poslovno okolje | pravnoorganizacijske oblike, deležniki"
            ]
          ],
          [
            "Stroški in prihodki",
            [
              "Stroški | fiksni, variabilni, mejni in povprečni stroški",
              "Prag rentabilnosti | prispevek za kritje, točka preloma"
            ]
          ],
          [
            "Investicije",
            [
              "Ocenjevanje investicij | neto sedanja vrednost, notranja stopnja donosa, doba vračanja",
              "Obrestni račun | navadno in obrestno obrestovanje, efektivna obrestna mera, zvezno obrestovanje"
            ]
          ],
          [
            "Računovodstvo",
            [
              "Računovodski izkazi | bilanca stanja, izkaz poslovnega izida, kazalniki"
            ]
          ],
          [
            "Podjetništvo",
            [
              "Poslovni načrt | tržna analiza, poslovni model, financiranje",
              "Trženje | trženjski splet, segmentacija"
            ]
          ]
        ]
      ],
      "NBIOKTEH": [
        "Biokemijska tehnika",
        "BIO",
        [],
        [
          [
            "Biokatalizatorji",
            [
              "Encimska kinetika | Michaelis-Mentenova enačba, inhibicija",
              "Imobilizirani encimi | metode imobilizacije, difuzijske omejitve"
            ]
          ],
          [
            "Mikrobna rast",
            [
              "Kinetika rasti in Monodova enačba | specifična hitrost rasti, izkoristek biomase",
              "Sterilizacija | toplotna sterilizacija, kinetika odmiranja"
            ]
          ],
          [
            "Bioreaktorji",
            [
              "Bioreaktorji | šaržni, šaržni z dohranjevanjem, kontinuirni, prenos kisika",
              "Volumski koeficient prenosa kisika | kLa, mešanje in prezračevanje"
            ]
          ],
          [
            "Izolacija produktov",
            [
              "Izolacija in čiščenje bioproduktov | centrifugiranje, filtracija, kromatografija"
            ]
          ]
        ]
      ],
      "NINSTRAN": [
        "Instrumentalna analiza",
        "KEM",
        [
          "ANAL_2"
        ],
        [
          [
            "Atomska spektrometrija",
            [
              "Atomska emisijska spektrometrija | ICP-OES, plamenska emisija, motnje"
            ]
          ],
          [
            "Masna spektrometrija in sklopljene tehnike",
            [
              "Masna spektrometrija | ionizacija, masni analizatorji, ICP-MS",
              "Sklopljene tehnike | GC-MS, LC-MS"
            ]
          ],
          [
            "Validacija analiznih metod",
            [
              "Validacija metode | meja zaznave, linearnost, točnost, natančnost",
              "Umerjanje | metoda standardnega dodatka, notranji standard"
            ]
          ]
        ]
      ],
      "NPOVRS": [
        "Pojavi na površinah",
        "KEM",
        [],
        [
          [
            "Površinska napetost",
            [
              "Površinska napetost | Laplaceov tlak, kapilarni dvig, Youngova enačba",
              "Merjenje kontaktnega kota | omočljivost, površinska energija"
            ]
          ],
          [
            "Adsorpcija",
            [
              "Adsorpcija | Langmuirjeva in BET izoterma, fizisorpcija in kemisorpcija",
              "Površinsko aktivne snovi | micele, kritična micelna koncentracija"
            ]
          ],
          [
            "Koloidni sistemi",
            [
              "Električna dvojna plast | Gouy-Chapmanov model, Debyeva dolžina",
              "Stabilizacija koloidov | elektrostatska in sterična stabilizacija, zeta potencial",
              "Emulzije in pene | stabilnost, HLB"
            ]
          ]
        ]
      ],
      "NBIOINFG": [
        "Bioinformatika in genomika",
        "RAC",
        [],
        [
          [
            "Podatkovne zbirke",
            [
              "Podatkovne zbirke zaporedij | GenBank, UniProt, format FASTA",
              "Iskanje po podatkovnih zbirkah | BLAST, E-vrednost, homologija"
            ]
          ],
          [
            "Poravnave in filogenija",
            [
              "Poravnava dveh zaporedij | dinamično programiranje, substitucijske matrike, vrzeli",
              "Filogenetska drevesa | razdaljne metode, UPGMA, združevanje sosedov"
            ]
          ],
          [
            "Genomika",
            [
              "Sekvenciranje naslednje generacije | odčitki, kakovost, sestavljanje genoma",
              "Anotacija genoma | iskanje genov, funkcijska anotacija",
              "Transkriptomika | RNA-seq, diferencialno izražanje"
            ]
          ]
        ]
      ]
    },
    "programs": {
      "UM-FKKT-KEM": {
        "name": "Kemija",
        "source": "https://www.fkkt.um.si/wp-content/uploads/2025/09/Predmetnik-1.-stopnja-UN-KE.pdf",
        "sourceYear": "2025/26",
        "years": [
          [
            "NRACKEM"
          ],
          [
            "NMEROSL",
            "NGRADIVA",
            "NNANO"
          ],
          [
            "NKEMOK",
            "NPOLIM"
          ]
        ],
        "electives": [
          "NINSTRAN",
          "NPOVRS",
          "NBIOINFG"
        ]
      },
      "UM-FKKT-KI": {
        "name": "Kemijsko inženirstvo",
        "source": "https://www.fkkt.um.si/wp-content/uploads/2025/09/Predmetnik-1.-stopnja-UN-KI.pdf",
        "sourceYear": "2025/26; 3. letnik še ni preverjen",
        "years": [
          [
            "NRACKEM",
            "NELPROC"
          ],
          [
            "NGRADIVA"
          ],
          [
            "NBIOKMB",
            "NORGTEH",
            "NEKOPOD",
            "NBIOKTEH"
          ]
        ]
      }
    }
  }
];
