// ===================================
// KÉRDÉSBANK — A TANULÁS TANULÁSA, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "frequence-et-vocabulaire": [
            // 1. sorozat
            {
                q: "Egy hétköznapi szöveg mekkora részét fedi le az 1000 leggyakoribb szó?",
                options: [
                    "Nagyjából 50%-át",
                    "Nagyjából 80%-át",
                    "Nagyjából 95%-át"
                ],
                a: 1,
                explication: "A következő ezer csak öt százalékpontot tesz hozzá. A hozam nagyon gyorsan csökken."
            },
            {
                q: "2000 ismert szóval hány ismeretlen szó jut egy 250 szavas oldalra?",
                options: [
                    "Nagyjából 37",
                    "Nagyjából 10",
                    "Nagyjából 3"
                ],
                a: 0,
                explication: "85%-os lefedettség. A szöveg olvashatatlan marad, pedig úgy tűnik, szinte mindent ismerünk."
            },
            {
                q: "Mekkora lefedettség kell a folyékony olvasáshoz?",
                options: [
                    "Nagyjából 85%",
                    "Nagyjából 92%",
                    "Nagyjából 98%"
                ],
                a: 2,
                explication: "Ez nagyjából 10 000 szó — sokkal messzebb, mint amilyennek 2000 szónál gondoljuk."
            },
            // 2. sorozat
            {
                q: "Mivel kezdj, amíg 2000 szó alatt vagy?",
                options: [
                    "Egy kedvedre való téma szókincsével",
                    "A gyakorisági listákkal",
                    "Eredeti nyelvű regények olvasásával"
                ],
                a: 1,
                explication: "Az első ezer szó annyit hoz, mint az utána következő kilencezer együttvéve."
            },
            {
                q: "2000 szó felett mi lesz kifizetődőbb a listáknál?",
                options: [
                    "Hosszabb listák, egészen ötezer szóig",
                    "A nyelvtan és a ragozás, külön tanulva",
                    "Könnyen érthető szövegek olvasása"
                ],
                a: 2,
                explication: "A szavakat a szövegkörnyezetükkel együtt hozza, és a szövegkörnyezet különbözteti meg a használatukat."
            },
            {
                q: "Csak a nyelvekre érvényes ez a gyakorisági gondolatmenet?",
                options: [
                    "Igen, a szókincs sajátossága",
                    "Nem: bármely területen a fogalmak kis hányada lefedi az esetek többségét",
                    "Igen, a matematika kivételével"
                ],
                a: 1,
                explication: "Ezért érdemes megválasztani a tanulás sorrendjét, ahelyett hogy elszenvednénk."
            }
        ],

        // ---------------------------------------------------------------
        "le-transfert": [
            // 1. sorozat
            {
                q: "Mi a transzfer?",
                options: [
                    "Az átmenet a rövid távú memóriából a hosszú távúba, ismétléssel",
                    "A módszerváltás",
                    "Az a képesség, hogy máshol is használjuk, amit itt tanultunk"
                ],
                a: 2,
                explication: "Ez minden tanulás kimondatlan célja, és ritkábban valósul meg, mint feltételezzük."
            },
            {
                q: "Miért akad el egy diák fizikán egy olyan egyenletnél, amelyet matekon megold?",
                options: [
                    "Mert elfelejtette a módszert",
                    "Mert a fizika eleve nehezebb tantárgy, mint a matematika",
                    "Mert az új környezetben semmi sem hívja elő az emléket"
                ],
                a: 2,
                explication: "A tudás megvan; a jel, amely előhívná, nincs."
            },
            {
                q: "Miben lesznek jobbak valójában az agytréning-játékok játékosai?",
                options: [
                    "Főként a játékokban, és nagyon hasonló feladatokban",
                    "Általában a memóriában",
                    "A munkahelyi figyelemben, és általában a koncentrációban"
                ],
                a: 0,
                explication: "Ez nem elszigetelt eredmény: ez a transzfer általános szabálya."
            },
            // 2. sorozat
            {
                q: "Mi a legerősebb eszköz a transzfer elősegítésére?",
                options: [
                    "A környezetek változatossága",
                    "Többször megismételni ugyanazt a feladatot",
                    "Jobb jegyzeteket készíteni"
                ],
                a: 0,
                explication: "Ugyanaz a fogalom négy környezetben találkozva mindegyiktől elválik."
            },
            {
                q: "Miért érdemes az elvig visszamenni a recept helyett?",
                options: [
                    "Mert rövidebb",
                    "Mert egy recept nem vihető át, egy elv igen",
                    "Mert egy elvet könnyebb megjegyezni, mint egy receptet"
                ],
                a: 1,
                explication: "Ezért hasznos a kérdés: „minek a különleges esete ez?”"
            },
            {
                q: "Mi a gond azzal, ha egy szóbeli vizsgára fejben átolvasva készülsz?",
                options: [
                    "Sokkal több időbe telik, mint egy hangos felolvasás",
                    "Nincs vele gond",
                    "A gyakorlás mást céloz, mint amit kérni fognak"
                ],
                a: 2,
                explication: "Abban leszünk jók, amit gyakorlunk, nem abban, ami hasonlít rá."
            }
        ],

        // ---------------------------------------------------------------
        "evaluer-une-methode": [
            // 1. sorozat
            {
                q: "Mi a döntő kérdés egy tanulási módszer értékelésénél?",
                options: [
                    "Hány emberen vizsgálták?",
                    "Mennyi idővel később mérték?",
                    "Melyik folyóiratban jelent meg, és ki írta?"
                ],
                a: 1,
                explication: "Szinte minden kellemes módszer megnyeri az azonnali tesztet, és elveszíti az egy héttel későbbit."
            },
            {
                q: "Mit ér egy módszer a „semmittevéshez” képest?",
                options: [
                    "Ez az összehasonlítás elég ahhoz, hogy két módszer között döntsünk",
                    "Semmit: egy másik módszernél kell jobbnak lennie",
                    "Az időtartamtól függ"
                ],
                a: 1,
                explication: "Szinte bármi jobb a munka hiányánál. Nem ezt akarjuk megtudni."
            },
            {
                q: "Mit mond a kutatások jelenlegi állása a tanulási stílusokról?",
                options: [
                    "A 2000-es évek óta igazolták őket",
                    "Csak a gyerekekre vonatkoznak",
                    "Ha a tanítást a feltételezett stílushoz igazítjuk, nem jön létre a beharangozott hatás"
                ],
                a: 2,
                explication: "Az ötlet népszerű marad a tanárok körében; az azt helyesen tesztelő vizsgálatok nem találják."
            },
            // 2. sorozat
            {
                q: "Honnan származik a piramis: „amit olvasunk, annak 10%-át jegyezzük meg, amit tanítunk, annak 90%-át”?",
                options: [
                    "Egy 1960-as évekbeli amerikai vizsgálatból",
                    "Ebbinghaus kutatásaiból",
                    "Semmilyen azonosítható forrásból: a számokat soha nem mérték meg"
                ],
                a: 2,
                explication: "Kerek számok, amelyek évtizedek óta keringenek alátámasztás nélkül."
            },
            {
                q: "Mit mutatott valójában a „Mozart-hatás” mögött álló vizsgálat?",
                options: [
                    "Tartós IQ-növekedést",
                    "Nagyon korlátozott hatást, egy konkrét feladatban, néhány percig",
                    "Hatást csecsemőknél"
                ],
                a: 1,
                explication: "A többi médiafelhajtás."
            },
            {
                q: "Miért kényelmetlenek azok a módszerek, amelyek kiállják a vizsgálatot?",
                options: [
                    "Véletlenül",
                    "Mert rosszul tervezték őket",
                    "Mert épp az előhívás erőfeszítése erősíti meg a nyomot"
                ],
                a: 2,
                explication: "Egy módszer, amely erőfeszítés nélküli emlékezést ígér, ellentmond az ismert mechanizmusnak."
            }
        ],

        // ---------------------------------------------------------------
        "construire-son-systeme": [
            // 1. sorozat
            {
                q: "Milyen közös hibájuk van ennek az útmutatónak a technikáinak?",
                options: [
                    "Feltételezik, hogy gondolsz rájuk",
                    "Drágák, időben és eszközökben egyaránt",
                    "Külön szoftver kell hozzájuk, hogy működjenek"
                ],
                a: 0,
                explication: "A motiváció csökken, a hetek megtelnek, és egy módszer, amelyre gondolni kell, feladja."
            },
            {
                q: "Milyen formában kerüljön be a tartalom a rendszerbe?",
                options: [
                    "Gondosan megírt jegyzetek formájában",
                    "Kérdések formájában",
                    "Rövid összefoglalók formájában"
                ],
                a: 1,
                explication: "Különben a nagy napon újraolvasni fogsz ahelyett, hogy kikérdeznéd magad."
            },
            {
                q: "Mire jó az ötperces változat?",
                options: [
                    "Hogy a lehetetlen napokon se szakadjon meg a sorozat",
                    "Hogy gyorsabban haladj, mint egy hosszú, ritkább alkalommal",
                    "Hogy behozd a lemaradást"
                ],
                a: 0,
                explication: "A célja nem az, hogy előrevigyen."
            },
            // 2. sorozat
            {
                q: "Mit árul el egy kártya, amelyet tízszer egymás után elrontasz?",
                options: [
                    "Hogy nehéz megjegyezni",
                    "Hogy gyakrabban kell ismételni",
                    "Hogy rosszul van megírva"
                ],
                a: 2,
                explication: "A havi áttekintés épp arra való, hogy újrafogalmazd, ami mindig rosszul sikerül."
            },
            {
                q: "Milyen kritériumot alkalmazz, mielőtt valamit hozzáadsz a rendszerhez?",
                options: [
                    "Szükségem lesz rá fejből?",
                    "Érdekes, és érdemes feljegyezni?",
                    "Benne van az idei tananyagban?"
                ],
                a: 0,
                explication: "Ha nem, az egy visszakereshető jegyzetbe való, nem egy megjegyzendő kártyára."
            },
            {
                q: "Napi tizenöt perc vagy vasárnap két óra?",
                options: [
                    "Vasárnap délelőtt két óra, nyugalomban",
                    "Napi tizenöt perc, messze jobban",
                    "A kettő egyenértékű"
                ],
                a: 1,
                explication: "Ami nincs a naptárban, az nem történik meg; a többit a térközök végzik."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "Abbahagyni a módszerek alkalmazását, és elkezdeni értékelni őket",
                "Gyorsabban tanulni",
                "Többet megjegyezni"
            ],
            a: 0,
            explication: "Ennek az útmutatónak a módszereit is beleértve: a késleltetés kérdése rá is vonatkozik."
        },
        {
            q: "Mi a közös a szógyakoriságban és a saját gyenge pontjaid kiválasztásában?",
            options: [
                "Mindkettő a nyelvekre vonatkozik",
                "Mindkettőhöz szoftver kell",
                "Mindkettő azt mondja, hogy az erőfeszítést jó helyre kell tenni, nem csak kifejteni"
            ],
            a: 2,
            explication: "Mindkét esetben kevés elem hozza az eredmény nagy részét."
        },
        {
            q: "Egy alkalmazás azt ígéri, hogy három hét alatt erőfeszítés nélkül megjegyzel ezer szót. Milyen jelzés ez?",
            options: [
                "Az ígéret ellentmond az emlékezet ismert mechanizmusának",
                "Egy jó módszerrel ez hihető",
                "Meg kell nézni a felhasználók számát, és elolvasni a véleményeket"
            ],
            a: 0,
            explication: "Épp az előhívás erőfeszítése erősíti meg a nyomot."
        },
        {
            q: "Miért van szüksége egy tanulási rendszernek áttekintésre?",
            options: [
                "Mert a szoftverek változnak",
                "Mert elcsúszik: fölösleges kártyák, rosszul feltett kérdések, elhagyott témák",
                "Mert az emlékezet változik"
            ],
            a: 1,
            explication: "Havi negyedóra elég ahhoz, hogy ne hagyd ott az egészet egyszerre."
        },
        {
            q: "Valaki azt mondja, hogy ő „inkább vizuális típus”. Mit érdemes válaszolni?",
            options: [
                "Hogy mindenkinek vannak preferenciái, de ha a tanítást ezekhez igazítjuk, az eredmények nem javulnak",
                "Hogy részesítse előnyben az ábrákat",
                "Hogy ez genetika kérdése"
            ],
            a: 0,
            explication: "A preferencia valós; a tanulásra gyakorolt hatást nem sikerült kimutatni."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot alkalmazol?",
            options: [
                "Minden módszernél megkérdezni: „mennyi idővel később mérték?”",
                "Gyakoriság szerint tanulni a szókincset",
                "Havi áttekintést tartani"
            ],
            a: 0,
            explication: "Egyetlen kérdés elég ahhoz, hogy a terület nagy részét megszűrd."
        }
    ]
};
