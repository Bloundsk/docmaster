// ===================================
// KÉRDÉSBANK — ADATOK ÉS ELEMZÉS, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "nettoyer-les-donnees": [
            // 1. sorozat
            {
                q: "Egy elemzés idejének mekkora részét viszi el általában a tisztítás?",
                options: [
                    "Elhanyagolható részét",
                    "A nagy részét",
                    "Nagyjából 10%-át"
                ],
                a: 1,
                explication: "Ez nem előzetes robot: itt dől el, hogy az eredménynek lesz-e értelme."
            },
            {
                q: "Egy 50 000 soros fájl 8% ismétlődéssel, majd 12% hiányzó értékkel: mennyi marad?",
                options: [
                    "40 480 sor",
                    "44 000 sor",
                    "46 000 sor"
                ],
                a: 0,
                explication: "Vagyis a kiinduló fájl 81%-a. Az lenne a baj, ha az eredményt úgy mutatnánk be, mintha 50 000-re vonatkozna."
            },
            {
                q: "Mit kezdj egy 4 millió eurós rendeléssel egy 80 eurós rendelésekből álló fájlban?",
                options: [
                    "Töröld: ekkora eltérésnél ez biztosan csak elírás lehet",
                    "Ellenőrizd: vagy elírás, vagy a legnagyobb ügyfél",
                    "Helyettesítsd az átlaggal"
                ],
                a: 1,
                explication: "Ez nem technikai kérdés. Ismerni kell hozzá a szakmát."
            },
            // 2. sorozat
            {
                q: "Miért kockázatos törölni a hiányos sorokat?",
                options: [
                    "Túlságosan lecsökkenti a fájl méretét",
                    "Torzítja az átlagszámításokat",
                    "A hiányzó értékek ritkán oszlanak el véletlenszerűen"
                ],
                a: 2,
                explication: "Egy nem kötelező jövedelemmezőt főleg azok töltenek ki, akiket nem zavar a kérdés."
            },
            {
                q: "Mi a három lehetséges eljárás egy hiányzó értéknél?",
                options: [
                    "Törölni a sort, figyelmen kívül hagyni a hiányt, vagy teljesen újrakezdeni az adatgyűjtést",
                    "Törölni a sort, megbecsülni az értéket, vagy magát a hiányt információként kezelni",
                    "Nullát, az oszlop átlagát vagy ugyanazon szegmens mediánját beírni a hiányzó cella helyére"
                ],
                a: 1,
                explication: "A választás megváltoztatja az eredményt, és valahol le kell írni."
            },
            {
                q: "Miért kell dokumentálni a tisztítási döntéseket?",
                options: [
                    "Mert a GDPR előírja",
                    "Hogy felgyorsuljanak a következő feldolgozások, amelyek a tiszta fájlból indulnak",
                    "Mert enélkül az elemzés ellenőrizhetetlenné válik, még a szerzője számára is"
                ],
                a: 2,
                explication: "Három hónap múlva senki sem emlékszik, mit töröltek és miért."
            }
        ],

        // ---------------------------------------------------------------
        "segmenter-et-comparer": [
            // 1. sorozat
            {
                q: "Mit csinál egy összesített átlag egy heterogén sokaságnál?",
                options: [
                    "Összekeveri az eltérő viselkedéseket, és senkit sem ír le",
                    "Jó áttekintést ad, amely teljesen elég a napi irányításhoz és a jelentésekhez",
                    "Rendszeresen felülbecsül, mert a nagy tételek felé húzza az eredményt"
                ],
                a: 0,
                explication: "A szám nem hamis, csak haszontalan."
            },
            {
                q: "Egy 3%-os összesített arány, amely 5,2%-ot rejt számítógépen és 1,4%-ot mobilon: mire következtess?",
                options: [
                    "Elrejt egy mobilos problémát, pedig a mobil adja a forgalom kétharmadát",
                    "Az összesített arány hibás",
                    "Fel kell hagyni az összesített arány követésével"
                ],
                a: 0,
                explication: "Szegmentálni annyi, mint keresni azokat a helyeket, ahol két csoport eltérően viselkedik."
            },
            {
                q: "Mit kell mindig feltüntetni egy százalék mellett?",
                options: [
                    "A számítás dátumát",
                    "Az elemszámot",
                    "Az adatok forrását"
                ],
                a: 1,
                explication: "Öt emberből „40%” két embert jelent."
            },
            // 2. sorozat
            {
                q: "Mi a szegmensekre bontás korlátja?",
                options: [
                    "A túl kicsi csoportok zajt termelnek, amelyet jelnek nézünk",
                    "Az eszközök nem bírják",
                    "Három szegmens felett olvashatatlanná válik, és senki sem olvassa a táblázatot"
                ],
                a: 0,
                explication: "Egy tizenöt fős csoportban egyetlen egyedi eset hét százalékponttal mozdítja el az arányt."
            },
            {
                q: "„Az eladások 12%-kal nőttek a megújítás után.” Mi hiányzik?",
                options: [
                    "Egy viszonyítási pont: azonos időszak vagy kontrollcsoport",
                    "Az összeg euróban",
                    "A felelős neve"
                ],
                a: 0,
                explication: "Viszonyítás nélkül egy változás nem különböztethető meg egy szokásos ingadozástól."
            },
            {
                q: "Mi a szegmentálás célja?",
                options: [
                    "Részletesebb táblázatokat gyártani, amelyeket minden osztály tetszése szerint szűrhet",
                    "Az adatokat azonos méretű csoportokra osztani, hogy egyenlő feltételekkel hasonlítsunk",
                    "Megtalálni, hol változik a viselkedés, mert ott rejtőznek a döntések"
                ],
                a: 2,
                explication: "Az a felosztás, amely semmilyen különbséget nem tár fel, semmit sem ad."
            }
        ],

        // ---------------------------------------------------------------
        "correlation-et-causalite": [
            // 1. sorozat
            {
                q: "Hány magyarázata lehet egy korrelációnak?",
                options: [
                    "Négy: A okozza B-t, B okozza A-t, egy harmadik változó okozza mindkettőt, vagy a véletlen",
                    "Csak egy: A okozza B-t",
                    "Csak kettő: vagy A okozza B-t, vagy véletlen egybeesés, és a józan ész dönt"
                ],
                a: 0,
                explication: "A harmadik a leggyakoribb, és erre gondolunk a legkevésbé."
            },
            {
                q: "Mi a zavaró változó?",
                options: [
                    "Egy harmadik változó, amely A-t és B-t is okozza",
                    "Egy rosszul mért változó",
                    "Egy ok nélkül ingadozó változó"
                ],
                a: 0,
                explication: "A hűség okozza az alkalmazás telepítését és a nagy kosárértéket is."
            },
            {
                q: "Az alkalmazás felhasználóinak kosárértéke kétszer akkora. Mire következtess?",
                options: [
                    "Népszerűsíteni kell az alkalmazás telepítését, hogy nőjön a kosárérték",
                    "Még semmire: talán a már hűséges ügyfelek telepítik",
                    "Az alkalmazás javítja a vásárlási élményt, így a kosárérték is követi"
                ],
                a: 1,
                explication: "Ha alkalmi vásárlóknak népszerűsítjük, a hatás nem ismétlődik meg, a költségvetés viszont elfogy."
            },
            // 2. sorozat
            {
                q: "Melyik módszer igazolja valóban az ok-okozatiságot?",
                options: [
                    "A kísérlet, véletlenszerű besorolással",
                    "Egy 0,9 feletti korreláció",
                    "Egy meggyőző szakmai érvelés, amelyet a csapatok jóváhagytak"
                ],
                a: 0,
                explication: "Minden más hipotézis marad, még ha nagyon hihető is."
            },
            {
                q: "Melyik korreláció a legveszélyesebb?",
                options: [
                    "Az abszurd",
                    "Amelyre hihető magyarázatot lehet adni",
                    "A gyenge"
                ],
                a: 1,
                explication: "Egy hihető magyarázat nem bizonyíték. Csak megnehezíti a többi lehetőség végiggondolását."
            },
            {
                q: "Miért hoz létre néha korrelációt a véletlen?",
                options: [
                    "Az adatokat rosszul gyűjtötték, és a felgyülemlett zaj a végén már jelnek látszik",
                    "Több száz összehasonlított mutató közül néhány kapcsolat nélkül is egybeesik",
                    "A statisztikai eszközök egyre pontatlanabbak, amint nagyon nagy lesz az adatmennyiség"
                ],
                a: 1,
                explication: "Ezért kell ismerni a tesztelt hipotézisek számát, mielőtt értelmezünk egy eredményt."
            }
        ],

        // ---------------------------------------------------------------
        "tableau-de-bord": [
            // 1. sorozat
            {
                q: "Melyik próbával tudhatod meg, hogy egy mutató megérdemli-e a helyét?",
                options: [
                    "Könnyű kiszámolni?",
                    "Kéri a vezetés, amely minden héten figyelmesen ránéz a számokra?",
                    "Ha ez a szám holnap megduplázódna, mit csinálnék másképp?"
                ],
                a: 2,
                explication: "Ha a válasz „semmit”, a mutató szétszórja a figyelmet, és az irányítás illúzióját kelti."
            },
            {
                q: "Miért hagynak fel a legtöbb irányítópulttal?",
                options: [
                    "Túl lassúak",
                    "A „mit lehet megjeleníteni?” kérdésre válaszolnak a „milyen döntést hozzunk?” helyett",
                    "Az adatok nem megbízhatók"
                ],
                a: 1,
                explication: "A gond ritkán technikai."
            },
            {
                q: "Mi a cselekvésre ösztönző mutató?",
                options: [
                    "Valós időben frissülő, a cégen belül mindenki számára látható mutató",
                    "Olyan mutató, amelyről tudjuk, mit kell tenni, ha elmozdul",
                    "Automatikusan, mindenféle emberi beavatkozás nélkül kiszámolt mutató"
                ],
                a: 1,
                explication: "Ez a jó mutató négy feltétele közül az első."
            },
            // 2. sorozat
            {
                q: "Mit rejt egy „1,2 mp-es átlagos válaszidő”?",
                options: [
                    "Semmit: megbízható mérőszám, az összes hívásra kiszámolva",
                    "Hogy a mérés torzított",
                    "Hogy a felhasználók 5%-a talán nyolc másodpercet vár"
                ],
                a: 2,
                explication: "Pedig ők azok, akik elmennek. A szolgáltatás minőségénél egy szélsőérték többet mond az átlagnál."
            },
            {
                q: "Mi történik, ha egy mutató definíciója menet közben változik?",
                options: [
                    "Semmi baj, amíg rendesen dokumentálják",
                    "Újra kell számolni az előzményeket",
                    "Az idősor használhatatlanná válik"
                ],
                a: 2,
                explication: "A definíció stabilitása a jó mutató feltételei közé tartozik."
            },
            {
                q: "Milyen gyakorisággal kövess egy mutatót?",
                options: [
                    "Amilyen gyorsan változik",
                    "A lehető leggyakrabban, hogy késlekedés nélkül reagálhass",
                    "Havonta egyszer, a szokásos jelentések ütemében"
                ],
                a: 0,
                explication: "Egy negyedévente mozduló adat napi figyelése csak zajt termel."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Hol siklik félre a legtöbb elemzés?",
            options: [
                "A számításokban",
                "Az eszközök kiválasztásában",
                "Az adatok feldolgozásában és a gondolkodásban"
            ],
            a: 2,
            explication: "Ez a szint vezérfonala: mit kell tenni az adatokkal, mielőtt hinni lehet nekik, és melyek azok a hibák, amelyek egy helyes számot hamis következtetéssé alakítanak."
        },
        {
            q: "Mi a közös a túl kicsi szegmensben és a szélsőértékben?",
            options: [
                "Mindkettő egy korábban könnyen elkerülhető adatgyűjtési hibából fakad",
                "Mindkettő úgy javítható, hogy az érintett adatokat kivesszük a végső számításból",
                "Kevés megfigyelés aránytalanul nagy súllyal nyom az eredményben"
            ],
            a: 2,
            explication: "Ezért kell feltüntetni az elemszámot, és elnyúló eloszlásnál a mediánt választani."
        },
        {
            q: "Egy elemzés szerint az alkalmazás növeli a kosárértéket. Mit kérdezz elsőként?",
            options: [
                "Milyen harmadik változó okozhatja mindkettőt",
                "A minta nagyságát, és megoszlását a két csoport között",
                "A használt eszköz nevét"
            ],
            a: 0,
            explication: "A zavaró változó a leggyakoribb magyarázat, és erre gondolnak a legkevésbé."
        },
        {
            q: "Miért határozza meg a tisztítás egy elemzés érvényességét?",
            options: [
                "Mert a számítások sebessége függ tőle",
                "Mert az eszközök megkövetelik",
                "Mert a meghozott döntések megváltoztatják az eredményt, és ritkán dokumentálják őket"
            ],
            a: 2,
            explication: "Egy hiányzó érték törlése, becslése vagy megtartása három különböző eredményhez vezet."
        },
        {
            q: "Mi különbözteti meg a hasznos irányítópultot a dekoratívtól?",
            options: [
                "Az általa kiváltott döntések száma",
                "A benne bemutatott diagramok és mutatók száma",
                "A frissítés gyakorisága, ideális esetben naponta"
            ],
            a: 0,
            explication: "Minden mutatónak ki kell állnia a „ha ez a szám megduplázódna, mit tennék?” próbát."
        },
        {
            q: "Mit kell minden bemutatott százalék mellé tenni?",
            options: [
                "A számítási képletet",
                "Az elemszámot és egy viszonyítási pontot",
                "Az elemző nevét"
            ],
            a: 1,
            explication: "Elemszám nélkül a százalék benyomás; viszonyítás nélkül semmit sem mond."
        }
    ]
};
