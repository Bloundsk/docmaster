// ===================================
// KÉRDÉSBANK — WEBFEJLESZTÉS, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "performance-et-cache": [
            // 1. sorozat
            {
                q: "Mivel kezdd egy oldal optimalizálását?",
                options: [
                    "Mérni, és a leghosszabb sávval kezdeni",
                    "Minifikálni a JavaScriptet és a stíluslapokat",
                    "Keretrendszert váltani"
                ],
                a: 0,
                explication: "Mérés nélkül optimalizálni találgatás. Az ok szinte soha nem az, amit gondolunk."
            },
            {
                q: "Miért különleges emelő a gyorsítótár?",
                options: [
                    "Csökkenti a böngészőnek átvitt fájlok méretét, így kevesebb adat utazik",
                    "Felgyorsítja a szervert",
                    "Javítja a teljesítményt anélkül, hogy bármit könnyítenénk"
                ],
                a: 2,
                explication: "Egy konfigurációs sor teljesen megszünteti a letöltést a visszatérő látogatóknál."
            },
            {
                q: "Hogyan módosíts egy erősen gyorsítótárazott fájlt?",
                options: [
                    "A nevének megváltoztatásával: style.a3f9.css",
                    "A látogatók gyorsítótárának távoli ürítésével",
                    "A megadott gyorsítótár-időtartam csökkentésével"
                ],
                a: 0,
                explication: "Egy módosítás megváltoztatja a nevet, tehát a címet, így a gyorsítótár magától kikerül."
            },
            // 2. sorozat
            {
                q: "Mi nyom a legtöbbet az esetek túlnyomó többségében?",
                options: [
                    "Maga az alkalmazás kódja",
                    "A rossz méretű képek",
                    "A stíluslapok és a betűkészletek"
                ],
                a: 1,
                explication: "Utána a külső szkriptek — statisztika, widgetek, sávok —, végül az alkalmazás kódja."
            },
            {
                q: "Egy 1800 kB-os oldal, amelyből 1500 gyorsítótárazható, 60% visszatérő látogatással: mekkora az átlagos adatmennyiség?",
                options: ["1800 kB", "900 kB", "300 kB"],
                a: 1,
                explication: "Feleannyi, anélkül hogy bármit könnyítettünk volna."
            },
            {
                q: "Mit okoz egy megadott méretek nélküli kép?",
                options: [
                    "A tartalom elcsúszását betöltés közben",
                    "Az egész oldal jóval lassabb betöltését",
                    "Minőségromlást"
                ],
                a: 0,
                explication: "A felhasználó mellékattint. A méretek megadása megszünteti ezt a hibát, anélkül hogy bármit gyorsítana."
            }
        ],

        // ---------------------------------------------------------------
        "securite-applicative": [
            // 1. sorozat
            {
                q: "Milyen elv intézi el az alkalmazásbiztonság lényegét?",
                options: [
                    "Minden adatot titkosítani, átvitel közben és a lemezen tárolva egyaránt, kivétel nélkül",
                    "Minden kívülről érkező adat ellenséges, amíg az ellenkezője be nem bizonyosodik",
                    "Az adatbázis minden egyes felhasználójának jogait a feltétlenül szükségesre korlátozni"
                ],
                a: 1,
                explication: "Űrlap, cím, fejléc, feltöltött fájl, egy külső API válasza."
            },
            {
                q: "Mi ellen védenek az előkészített lekérdezések?",
                options: [
                    "A befecskendezett szkript ellen",
                    "A más oldalról hamisított kérés ellen",
                    "Az SQL-befecskendezés ellen"
                ],
                a: 2,
                explication: "Az értékek a lekérdezés szövegétől külön kerülnek átadásra."
            },
            {
                q: "Mi a „bemenetkor ellenőrizni” és a „kimenetkor kódolni”?",
                options: [
                    "Ugyanannak a műveletnek két neve",
                    "A titkosítás két lépése",
                    "Két külön mozdulat: elutasítani, aminek nem a várt formája van, és hatástalanítani, ami megjelenik"
                ],
                a: 2,
                explication: "Az egyik nem helyettesíti a másikat."
            },
            // 2. sorozat
            {
                q: "Elég egy böngészőoldali ellenőrzés?",
                options: [
                    "Nem: három másodperc alatt megkerülhető, csak a szerver számít",
                    "Igen, ha jól van megírva",
                    "Igen, azoknál az egyszerű űrlapoknál, amelyek nem tartalmaznak érzékeny adatot"
                ],
                a: 0,
                explication: "A kényelmet javítja. Semmit sem véd."
            },
            {
                q: "Min keresztül történik a behatolások többsége?",
                options: [
                    "Újonnan felfedezett, a gyártók előtt ismeretlen réseken",
                    "Egy ismert, de nem frissített könyvtáron",
                    "Jelszavak elleni, nyers erőt alkalmazó támadásokon"
                ],
                a: 1,
                explication: "A függőségek frissítése a legjobb erőfeszítés–eredmény arányú védekezés."
            },
            {
                q: "Mit kezdj a hibaüzenetekkel éles üzemben?",
                options: [
                    "Részletesen megjeleníteni őket, hogy könnyebb legyen a támogatás",
                    "Általános üzenet a látogatónak, a részletek a naplókba",
                    "Teljesen kikapcsolni őket"
                ],
                a: 1,
                explication: "Egy oldal, amely kiírja az SQL-lekérdezést vagy a szerver verzióját, ingyen térképet ad."
            }
        ],

        // ---------------------------------------------------------------
        "tests-automatises": [
            // 1. sorozat
            {
                q: "Mire valók az automatizált tesztek?",
                options: [
                    "Hogy félelem nélkül módosíthasd a kódot",
                    "Hogy bebizonyítsák a kód helyességét",
                    "Hogy megfeleljenek egy minőségi követelménynek"
                ],
                a: 0,
                explication: "Egy tesztek nélküli projektből olyan projekt lesz, amelyhez senki sem mer hozzányúlni, és így hal meg."
            },
            {
                q: "Milyen arányban álljon a tesztek három szintje?",
                options: [
                    "Mindegyikből ugyanannyi",
                    "Sok egységteszt, néhány integrációs, nagyon kevés végponttól végpontig tartó",
                    "Főleg végponttól végpontig tartó, mert közelebb van a valósághoz"
                ],
                a: 1,
                explication: "A fordítottja lassú tesztsort eredményez, amelyet már senki sem vár ki."
            },
            {
                q: "Mit kell elsősorban tesztelni?",
                options: [
                    "Az üzleti logikát és a kritikus folyamatokat",
                    "A képernyők megjelenését",
                    "Az általad használt külső könyvtárak teljes kódját"
                ],
                a: 0,
                explication: "Számítások, szabályok, határesetek, aztán regisztráció, fizetés, küldés."
            },
            // 2. sorozat
            {
                q: "Mit kezdj egy teszttel, amely minden tizedik futáskor ok nélkül elbukik?",
                options: [
                    "Újraindítani, amíg át nem megy",
                    "Ideiglenesen kikapcsolni",
                    "Megjavítani vagy törölni"
                ],
                a: 2,
                explication: "Megtanítja a csapatot figyelmen kívül hagyni a riasztásokat. Amikor valódi hibát talál, senki sem hisz neki."
            },
            {
                q: "400 egységteszt 5 ms-mal, 60 integrációs 200 ms-mal, 12 végponttól végpontig tartó 8 mp-cel: az idő mekkora része jut az utóbbiakra?",
                options: ["Nagyjából 25%", "Nagyjából 50%", "Nagyjából 87%"],
                a: 2,
                explication: "A tesztek 2,5%-ára. Ez a maroknyi teszt dönti el, hogy a tesztsor minden módosításkor lefut-e."
            },
            {
                q: "Mi nem érdemel tesztet?",
                options: [
                    "Egy számítás határesetei, amint a számítás bonyolulttá válik",
                    "A triviális getterek és egy képernyő pontos megjelenése",
                    "A fizetési folyamat"
                ],
                a: 1,
                explication: "A megjelenés úgyis változni fog, a könyvtárakat pedig a szerzőik tesztelik."
            }
        ],

        // ---------------------------------------------------------------
        "dette-technique": [
            // 1. sorozat
            {
                q: "Mit mond pontosan a technikai adósság hasonlata?",
                options: [
                    "A kód rosszul van megírva",
                    "A projekt késésben van",
                    "Ma időt kölcsönzünk, és később fizetjük vissza, kamatostul"
                ],
                a: 2,
                explication: "Nem a kölcsönvétel a gond, hanem az, ha soha nem fizetjük vissza."
            },
            {
                q: "Mi különbözteti meg a vállalt adósságot az elszenvedettől?",
                options: [
                    "A vállalt adósság tudatos, dokumentált és dátumozott",
                    "Az összege",
                    "Az elszenvedett adósságot a végén mindig olcsóbb kijavítani"
                ],
                a: 0,
                explication: "Az első kezelhető. A második csendben halmozódik."
            },
            {
                q: "Heti 3 elvesztett óra mennyi egy évben?",
                options: [
                    "Nagyjából 36 óra",
                    "Nagyjából 144 óra, azaz közel négy hét",
                    "Nagyjából 300 óra"
                ],
                a: 1,
                explication: "Ha a kijavítása 40 órát igényel, a művelet kevesebb mint négy hónap alatt megtérül."
            },
            // 2. sorozat
            {
                q: "Miért vall gyakran kudarcot egy teljes újraírás?",
                options: [
                    "A meglévő kód évek alatt felgyűlt, egyedi esetekre írt javításokat tartalmaz, amelyekre senki sem emlékszik",
                    "Túl drága",
                    "A csapatoknak nincs elég motivációjuk"
                ],
                a: 0,
                explication: "A fokozatos átdolgozás kevésbé hálás, és sokkal biztonságosabb."
            },
            {
                q: "Mi lesz egy két évig nem frissített könyvtárral?",
                options: [
                    "Továbbra is gond nélkül működik",
                    "Automatikusan lecserélődik",
                    "Nehéz lesz továbbfejleszteni: felhalmozódnak a törések"
                ],
                a: 2,
                explication: "Kis lépésekben frissíteni sokkal kevesebbe kerül, mint háromévente egy nagy ugrás."
            },
            {
                q: "Hogyan kaphatsz időt egy technikai adósság kijavítására?",
                options: [
                    "Elmagyarázva, hogy a kód rosszul megírt és olvashatatlan",
                    "Kivárva egy leállást",
                    "Kiszámolva a heti elvesztett órákat"
                ],
                a: 2,
                explication: "Így megfogalmazva a döntés már nem ízlés, hanem megtérülési idő kérdése."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Miről szól ez a szint az előzőhöz képest?",
            options: [
                "Az alkalmazott technológiák megválasztásáról",
                "Az alkalmazás élettartamáról",
                "A fejlesztőcsapatok szervezéséről"
            ],
            a: 1,
            explication: "Bírni a terhelést, ellenállni a támadásoknak, félelem nélkül módosíthatónak lenni, olvashatatlanná válás nélkül öregedni."
        },
        {
            q: "Mi a közös a tesztekben és a függőségek frissítésében?",
            options: [
                "Mindkettő lehetővé teszi a későbbi változtatást",
                "Mindkettőt kifejezetten előírják a hatályos szabályok",
                "Mindkettő lassítja a fejlesztést"
            ],
            a: 0,
            explication: "Bármelyik elhanyagolása ugyanoda vezet: egy projekthez, amelyhez senki sem mer hozzányúlni."
        },
        {
            q: "Egy oldal lassú, és egy 4 MB-os kép van a tetején. Mit tegyél?",
            options: [
                "Először a képpel foglalkozni",
                "Először az alkalmazás kódját optimalizálni",
                "Gyorsítótárat tenni a képekre"
            ],
            a: 0,
            explication: "Gyakori prioritási hiba a saját kóddal kezdeni, miközben egy óriási kép vár."
        },
        {
            q: "Milyen gondolkodásmód érvényes egyszerre a biztonságra és a tesztekre?",
            options: [
                "Mindent automatizálni, ami automatizálható az előállítási láncban",
                "Feltételezni, hogy baj lesz, és ennek megfelelően tervezni",
                "Minden döntést dokumentálni"
            ],
            a: 1,
            explication: "Soha ne bízz a külső adatokban; soha ne feltételezd, hogy egy változtatásnak nincs hatása."
        },
        {
            q: "Miért kényszerít a gyorsítótár a fájlnevek verziózására?",
            options: [
                "Hogy tárhelyet takarítsunk meg az oldalt kiszolgáló, gyakran szűkös szerveren",
                "Hogy megfeleljünk a HTTP-szabványoknak és a modern böngészők hivatalos ajánlásainak",
                "Mert egy erősen gyorsítótárazott fájlt nem lehet többé helyben módosítani"
            ],
            a: 2,
            explication: "A név megváltoztatása megváltoztatja a címet, ami magától megkerüli a gyorsítótárat."
        },
        {
            q: "Melyik mutató változtat egy átdolgozási kérést döntéssé?",
            options: [
                "A projektben felgyűlt kódsorok teljes száma",
                "A mostani kód miatt hetente elvesztett órák",
                "A projekt kora, a legelső kódsortól számítva"
            ],
            a: 1,
            explication: "A szám megváltoztatja a beszélgetést, mert összevethető a javítás költségével."
        }
    ]
};
