// ===================================
// KÉRDÉSBANK — DIGITÁLIS MÉRTÉKLETESSÉG, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lire-un-chiffre-dimpact": [
            // 1. sorozat
            {
                q: "Hol rejtőznek leggyakrabban a tízszeres eltérések egy hatásszámban?",
                options: [
                    "A kerekítésben",
                    "A hatókörben: a gyártással együtt, vagy csak a használat?",
                    "A költségek és a hatások átszámításához használt pénznemben"
                ],
                a: 1,
                explication: "Ez az öt feltenni való kérdés közül az első."
            },
            {
                q: "Miért változtat meg mindent az ország?",
                options: [
                    "Mások a hálózatok",
                    "Nem ugyanazok az eszközök",
                    "A francia áram öt-tízszer kevesebbet bocsát ki, mint az európai átlag"
                ],
                a: 2,
                explication: "Ugyanaz a számítás országtól függően teljesen más eredményt ad."
            },
            {
                q: "Hogyan honosodik meg egy téves szám?",
                options: [
                    "Minden átvétel elhagyja az előző feltevéseit, amíg a forrás el nem tűnik",
                    "Egy kezdeti számítási hiba révén",
                    "Szándékos manipulációval"
                ],
                a: 0,
                explication: "Ez volt a „videóóránként 3,2 kg” útja, amelyet később nagyjából nyolcszorosan javítottak."
            },
            // 2. sorozat
            {
                q: "Mit tegyél egy számmal, amelyet nem lehet a forrásáig visszakövetni?",
                options: [
                    "Ne add tovább",
                    "Add tovább fenntartással",
                    "Add tovább, ha intézménytől származik"
                ],
                a: 0,
                explication: "Akkor sem, ha jó irányba mutat."
            },
            {
                q: "Miért érdemes óvatosnak lenni egy 2015-ös számmal ezen a területen?",
                options: [
                    "A számítási módszerek nyilvános közzététele akkoriban tilos volt",
                    "A digitális technológia energiaintenzitása gyorsan csökken",
                    "Az adatok nem voltak nyilvánosak"
                ],
                a: 1,
                explication: "Egy régi szám gyakran elavult, anélkül hogy bármi jelezné."
            },
            {
                q: "Jó javítása-e a téves számnak az, hogy „a streaming semmit sem fogyaszt”?",
                options: [
                    "Nem: ugyanolyan határozott ellenkező állítás",
                    "Igen, helyreállítja az igazságot",
                    "Igen, ha a terület elismert kutatójától származik"
                ],
                a: 0,
                explication: "A jó válasz egy nagyságrend a bizonytalanságával együtt — ami rosszul terjed."
            }
        ],

        // ---------------------------------------------------------------
        "le-cas-du-streaming": [
            // 1. sorozat
            {
                q: "Mi számolható ki biztosan a streamingnél?",
                options: [
                    "A hálózat gigabájtonkénti költsége, egy teljes évre vetítve és mérve",
                    "Az eszköz fogyasztása: a teljesítménye szorozva az idővel",
                    "Az adatközpontok részesedése"
                ],
                a: 1,
                explication: "A többi kisebb és sokkal bizonytalanabb."
            },
            {
                q: "Napi két óra videó, 100 W-os televízión 3 W-os telefonnal szemben:",
                options: [
                    "Elhanyagolható különbség, néhány százalék nagyságrendű",
                    "4,4 kg kontra 2 kg",
                    "Évi 4,4 kg kontra 0,13 kg CO₂e — 33-szoros különbség"
                ],
                a: 2,
                explication: "Pontosan ugyanarra a tartalomra és ugyanannyi időre."
            },
            {
                q: "Miért nem fogyaszt kétszer annyit a hálózaton egy kétszer nagyobb fájl?",
                options: [
                    "Mert a tömörítés ellensúlyozza",
                    "Egy hálózat főleg azért fogyaszt, mert be van kapcsolva, nem azért, mert szállít",
                    "Mert a fájlok gyorsítótárba kerülnek"
                ],
                a: 1,
                explication: "A berendezések akkor is működnek, ha nagy a forgalom, és akkor is, ha kicsi."
            },
            // 2. sorozat
            {
                q: "Milyen hatása van a videóminőség csökkentésének?",
                options: [
                    "Ez messze a legfontosabb az összes megtehető egyéni gesztus közül",
                    "Valós, de a legkisebb és legbizonytalanabb részre vonatkozik",
                    "Semmilyen"
                ],
                a: 1,
                explication: "A képernyő megválasztásának több tízszer nagyobb a hatása."
            },
            {
                q: "Miért félrevezetők a „gigabájtonkénti” számítások?",
                options: [
                    "Az egy gigabájtra jutó fogyasztás csökken, ahogy a forgalom nő",
                    "A gigabájtokat egyáltalán nem lehet megbízhatóan mérni egy hálózaton",
                    "Figyelmen kívül hagyják a tömörítést"
                ],
                a: 0,
                explication: "Ez a terület múltbeli hibáinak egy részét megmagyarázza."
            },
            {
                q: "Nagyságrendileg mennyit fogyaszt egy laptop?",
                options: [
                    "Kb. 3 W-ot",
                    "Kb. 30 W-ot",
                    "Kb. 300 W-ot"
                ],
                a: 1,
                explication: "Egy televízió 100 W-ot, egy telefon 3 W-ot fogyaszt."
            }
        ],

        // ---------------------------------------------------------------
        "qui-pese-quoi": [
            // 1. sorozat
            {
                q: "Melyik tétel dominálja a digitális technológia hatását Franciaországban?",
                options: [
                    "Az adatközpontok",
                    "A mobilhálózatok",
                    "A végeszközök"
                ],
                a: 2,
                explication: "A végeszközökön belül pedig a gyártás dominál."
            },
            {
                q: "Miért foglalják el az adatközpontok az egész teret a vitákban?",
                options: [
                    "Ők fogyasztanak a legtöbbet",
                    "Őket mérik a legtöbbet",
                    "Láthatók, koncentráltak, és megnevezhető cégekhez tartoznak"
                ],
                a: 2,
                explication: "Amire könnyű rámutatni, azt tartjuk a fő felelősnek."
            },
            {
                q: "Mindenhol érvényes ez a sorrend?",
                options: [
                    "Nem: az alacsony kibocsátású áramú országokra jellemző",
                    "Igen, egyetemes, és a világ összes országára egyformán érvényes",
                    "Igen, kivéve Ázsiában"
                ],
                a: 0,
                explication: "A hálózatok és az adatközpontok aránya ott nő, ahol az áram több kibocsátással jár."
            },
            // 2. sorozat
            {
                q: "Mi dominálja a hálózatok fogyasztását?",
                options: [
                    "A naponta a hálózaton szállított adatmennyiség",
                    "Az egyszerre csatlakozó felhasználók száma",
                    "A folyamatosan bekapcsolt berendezések"
                ],
                a: 2,
                explication: "Ettől olyan félrevezetők a „gigabájtonkénti” érvelések."
            },
            {
                q: "Mire hat egy „zöld adatközpontban üzemeltetett” szolgáltatás?",
                options: [
                    "A három tétel közül a legkisebbre",
                    "A teljes mérleg domináns tételére",
                    "Az összes felhasználója végeszközére"
                ],
                a: 0,
                explication: "Ez nem semmi, és nem változtat a sorrenden."
            },
            {
                q: "Miért haladja meg a végeszközök összege az adatközpontokét?",
                options: [
                    "A végeszközök több áramot fogyasztanak",
                    "Franciaországban kevés az adatközpont",
                    "Milliárdnyi legyártott és lecserélt apró tárgy többet nyom néhány ezer épületnél"
                ],
                a: 2,
                explication: "Ez a darabszám hatása, nem az egységnyi fogyasztásé."
            }
        ],

        // ---------------------------------------------------------------
        "le-deplacement-evite": [
            // 1. sorozat
            {
                q: "Megbeszélés 400 km-re, oda-vissza repülővel, szemben egy videóhívással:",
                options: [
                    "184 kg kontra 3,6 kg",
                    "18 kg kontra 3,6 gramm",
                    "184 kg kontra 3,6 gramm"
                ],
                a: 2,
                explication: "50 000-nél nagyobb arány. Az útmutató egyetlen más mérlegelése sem közelíti meg ezt a különbséget."
            },
            {
                q: "Melyik közlekedési mód bocsát ki a legkevesebbet utasonként és kilométerenként?",
                options: [
                    "A francia vonat",
                    "Az egy utassal közlekedő autó",
                    "A rövid távú repülőút"
                ],
                a: 0,
                explication: "Néhány grammot, ugyanazért, amiért a francia áram is keveset."
            },
            {
                q: "Milyen feltétellel áll meg az elkerült utazás érve?",
                options: [
                    "Ha az utazást valóban elkerülik",
                    "Ha a megbeszélés összesen két óránál rövidebb",
                    "Ha a videóhívás alacsony felbontású"
                ],
                a: 0,
                explication: "Egy videóhívás, amely változatlan személyes megbeszélések mellé kerül, semmit sem kerül el: hozzáad."
            },
            // 2. sorozat
            {
                q: "Mit tesz szigorúan véve a mérleggel az otthoni munka?",
                options: [
                    "Teljesen megszünteti a fogyasztást, minden ellentétel nélkül",
                    "Mindig növeli",
                    "Ugyanannyi fogyasztást helyez át, mint amennyit megszüntet"
                ],
                a: 2,
                explication: "Az otthon fűtése, a megkettőzött eszközök: a mérleg kedvező marad, de sokkal szorosabb."
            },
            {
                q: "Mi az „elkerülési” mérlegek klasszikus gyengesége?",
                options: [
                    "Rendszeresen és jelentősen alábecsülik a digitális eszközök valós környezeti súlyát",
                    "Figyelmen kívül hagyják a gyártást",
                    "Egy feltételezett forgatókönyvhöz hasonlítanak, amelyet senki sem ellenőriz"
                ],
                a: 2,
                explication: "Az őszinte kérdés a teljes összegre vonatkozik: csökkent-e az utazások száma?"
            },
            {
                q: "Mi különleges ebben az esetben az egész útmutatóban?",
                options: [
                    "Ez az egyetlen, ahol a digitális megoldás megváltoztatja a nagyságrendet, ahelyett hogy csak csipegetne belőle",
                    "Ez az egyetlen mérhető",
                    "Ez az egyetlen, amely a vállalatokat érinti"
                ],
                a: 0,
                explication: "Az arány ezrekben mérhető, nem százalékokban."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "Csökkenteni a videófogyasztást",
                "Többet ér egy rossz számot félretenni, mint tíz jó gesztust ismerni",
                "Felelős tárhelyszolgáltatót választani"
            ],
            a: 1,
            explication: "Ez a szint inkább módszertani, mint gyakorlati, és ez szándékos."
        },
        {
            q: "Mi a közös az „e-mailenként 10 g” és a „videóóránként 3,2 kg” között?",
            options: [
                "Mindkettő kitaláció volt",
                "Mindkettő éveken át keringett, mielőtt tízszeres nagyságrendben kijavították",
                "Mindkettő az adatközpontokra vonatkozott"
            ],
            a: 1,
            explication: "És mindkettő olyan becslésből jött, amelyet a feltevései nélkül vettek át."
        },
        {
            q: "Valaki egy német tanulmányt idéz a hatás megoszlásáról. Milyen fenntartásod van?",
            options: [
                "A német tanulmányok kevésbé megbízhatók",
                "Semmilyen, a módszerek egységesek",
                "A német áram sokkal szén-dioxid-intenzívebb: a megoszlás nem vihető át"
            ],
            a: 2,
            explication: "Ez az öt kérdés közül a második, és a leggyakrabban elfelejtett."
        },
        {
            q: "Egy cég bejelenti, hogy szolgáltatását szén-dioxid-mentes adatközpontban üzemelteti. Mi hiányzik?",
            options: [
                "A domináns tétel: a felhasználói végeszközei",
                "A vízfogyasztásának részletezése",
                "A tárhelyszolgáltatója hivatalos tanúsítványa"
            ],
            a: 0,
            explication: "A bejelentés a három tétel közül a legkisebbet kezeli."
        },
        {
            q: "Ennek a szintnek melyik mérlegelését érdemes minden más előtt ismerni?",
            options: [
                "A videófelbontás megválasztását",
                "Az elkerült utazást",
                "A tárhelyszolgáltató megválasztását"
            ],
            a: 1,
            explication: "Ez az egyetlen, ahol a nagyságrend megfordul."
        },
        {
            q: "Mit tegyél, ha egy hatásszám megüt?",
            options: [
                "Ellenőrizd egy második cikkben",
                "Keresd meg az eredeti forrását: az esetek felében nem létezik, vagy mást mond",
                "Add tovább azzal, hogy „egyes tanulmányok szerint”"
            ],
            a: 1,
            explication: "Két egymást idéző cikk nem két forrás."
        }
    ]
};
