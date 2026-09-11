// ===================================
// KÉRDÉSBANK — TERMELÉKENYSÉG, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "la-méthode-pomodoro": [
            // 1. sorozat
            {
                q: "Mi a Pomodoro-technika alapritmusa?",
                options: [
                    "50 perc munka, utána 10 perc teljes, képernyő nélküli szünet",
                    "90 perc munka, 20 perc szünet",
                    "25 perc megszakítás nélkül, aztán 5 perc szünet"
                ],
                a: 2,
                explication: "Négy kör után 15–30 perces hosszú szünet jön."
            },
            {
                q: "Mi ellen hat elsősorban a módszer?",
                options: [
                    "A nap végi fáradtság ellen, amely minden feladatot nehezebbé tesz",
                    "A hiányzó készségek ellen",
                    "A halogatás ellen: egy rövid vállalást könnyű megtenni"
                ],
                a: 2,
                explication: "„Dolgozni ezen az ügyön” homályos és szorongató; „25 percet szánni rá” megvalósítható."
            },
            {
                q: "Mit kezdj egy ötlettel, amely egy pomodoro közben bukkan fel?",
                options: [
                    "Foglalkozz vele azonnal, ne várj vele",
                    "Írd fel egy papírra, és folytasd",
                    "Szándékosan felejtsd el, és folytasd"
                ],
                a: 1,
                explication: "Egy megszakítás után több percbe telik, mire újra felveszed a fonalat."
            },
            // 2. sorozat
            {
                q: "Honnan származik valójában a módszer nyeresége?",
                options: [
                    "Abból, hogy nem vész el idő az újrakezdésre minden megszakítás után",
                    "A nagyobb munkatempóból",
                    "A veleszületett jobb koncentrációból"
                ],
                a: 0,
                explication: "Egy óránként hatszor megszakított munka nem lassan halad: el sem indul igazán."
            },
            {
                q: "Folytasd szünet nélkül, ha jól halad a munka?",
                options: [
                    "Nem: a szünetek a módszer részei, és ettől lesz a negyedik blokk ugyanolyan jó, mint az első",
                    "Igen, ki kell használni a lendületet",
                    "Igen, feltéve, hogy két óra előtt megállsz"
                ],
                a: 0,
                explication: "Ettől leszel kimerült a nap végére."
            },
            {
                q: "Megváltoztathatatlan a 25 perces időtartam?",
                options: [
                    "Igen, ez a módszer tudományos alapja",
                    "Nem: egyes kreatív feladatokba 50 perc kell, hogy belemelegedj",
                    "Igen, különben a módszer nem működik"
                ],
                a: 1,
                explication: "Igazítsd az időtartamot, az elvet tartsd meg: egy valóban folyamatos blokk."
            }
        ],

        // ---------------------------------------------------------------
        "la-méthode-gtd": [
            // 1. sorozat
            {
                q: "Milyen megfigyelésre épül a GTD-módszer?",
                options: [
                    "Az emlékezet kiválóan alkalmas a feladatok tartós tárolására",
                    "Hosszabban kell dolgozni",
                    "Az emlékezet jó a gondolkodásra, és rossz a tárolásra"
                ],
                a: 2,
                explication: "Amíg egy feladat sehol sincs leírva, az elme folyton visszatér hozzá, hogy ellenőrizze, nem felejtette-e el."
            },
            {
                q: "Mi a GTD öt lépése?",
                options: [
                    "Tervezés, átadás, végrehajtás, ellenőrzés, archiválás",
                    "Listázás, rangsorolás, felbontás, elvégzés, végül az eredmény megünneplése",
                    "Gyűjtés, tisztázás, rendszerezés, áttekintés, cselekvés"
                ],
                a: 2,
                explication: "A tisztázás azt jelenti, hogy minden tételnél meghatározod a következő konkrét, fizikai lépést."
            },
            {
                q: "Mit mond a kétperces szabály?",
                options: [
                    "Gondolkodj két percet, mielőtt belekezdesz",
                    "Ha egy lépés két percnél rövidebb, csináld meg azonnal",
                    "Minden feladatot korlátozz két percre"
                ],
                a: 1,
                explication: "Felírni, besorolni, újraolvasni és megkeresni többe kerülne, mint elvégezni."
            },
            // 2. sorozat
            {
                q: "A „Megszervezni a szemináriumot” hetek óta halasztódik. Miért?",
                options: [
                    "Nem lépés, hanem projekt: az agy nem tudja, hol kezdje",
                    "Mert hiányzik hozzá a motiváció",
                    "Mert a határidő még messze van"
                ],
                a: 0,
                explication: "A „Felhívni a catering céget a 06 1 234 5678-as számon, és árajánlatot kérni 30 főre” gondolkodás nélkül megy."
            },
            {
                q: "Melyik lépést hagyja el mindenki elsőként, pedig az tartja egyben a rendszert?",
                options: [
                    "A napi gyűjtést",
                    "A heti áttekintést",
                    "A környezet szerinti rendszerezést"
                ],
                a: 1,
                explication: "Nélküle a lista megtelik elavult tételekkel, nem bízunk benne többé, és visszatérünk az emlékezethez."
            },
            {
                q: "Mi a GTD valódi célja?",
                options: [
                    "Mindent ugyanazon a napon elvégezni, halogatás nélkül",
                    "Hogy semmit ne kelljen fejben tartani",
                    "Jelentősen gyorsabban dolgozni, mint korábban"
                ],
                a: 1,
                explication: "A tehermentesített elme jobban gondolkodik. A módszer a mentális terhelést célozza, nem a sebességet."
            }
        ],

        // ---------------------------------------------------------------
        "la-matrice-deisenhower": [
            // 1. sorozat
            {
                q: "Milyen két szempontra épül az Eisenhower-mátrix?",
                options: [
                    "A sürgősségre és a fontosságra",
                    "A nehézségre és az időtartamra",
                    "A költségre és a haszonra"
                ],
                a: 0,
                explication: "Négy mező: csináld most, tervezd be, add át, hagyd el."
            },
            {
                q: "Melyik negyednek a legtartósabb a hatása?",
                options: [
                    "Ami egyszerre sürgős és fontos",
                    "Ami fontos, de nem sürgős",
                    "Ami sürgős, de nem igazán fontos"
                ],
                a: 1,
                explication: "Tanulni, megelőzni, ápolni a kapcsolatokat: ezeknek nincs határidejük, ezért soha nem követelik ki a helyüket."
            },
            {
                q: "Honnan jön a legtöbb mai sürgős ügy?",
                options: [
                    "Előre nem látható eseményekből",
                    "A hat hónapja elhanyagolt, fontos, de nem sürgős feladatokból",
                    "A szomszéd csapat munkatársainak rossz szervezéséből"
                ],
                a: 1,
                explication: "A karban nem tartott tudásból sürgős pályaváltás lesz; az elhalasztott vizsgából meghibásodás."
            },
            // 2. sorozat
            {
                q: "Milyen kérdést tegyél fel egy sürgősként bemutatott feladatnál?",
                options: [
                    "Kinek sürgős?",
                    "Mennyi időbe fog telni?",
                    "Ki kérte elsőként?"
                ],
                a: 0,
                explication: "Sok sürgős ügy valaki másé, egy erőszakos üzenettel áttolva."
            },
            {
                q: "Hogyan védd meg a gyakorlatban a fontos, de nem sürgős negyedet?",
                options: [
                    "Egy ismétlődő idősáv lefoglalásával a naptárban, találkozóként kezelve",
                    "Úgy, hogy minden reggel gondolsz rá",
                    "Úgy, hogy a feladatlistád élére teszed"
                ],
                a: 0,
                explication: "Ami nincs a naptárban, azt mindig elnyeli valami sürgős."
            },
            {
                q: "Mit jelent, ha az „elhagyandó” negyed üres maradt?",
                options: [
                    "Hogy jól szervezett vagy",
                    "Hogy minden feladatod valóban hasznos a futó projekt és a csapat számára",
                    "Hogy semmiről sem mondtál le: a gyakorlat nem töltötte be a szerepét"
                ],
                a: 2,
                explication: "A mátrix választásra kényszerít, és a választás azt jelenti, hogy bizonyos dolgok nem készülnek el."
            }
        ],

        // ---------------------------------------------------------------
        "les-outils-de-gestion-de-tâches": [
            // 1. sorozat
            {
                q: "Mit ad valójában egy feladatkezelő eszköz?",
                options: [
                    "Láthatóvá teszi a már létező szervezettséget, vagy annak hiányát",
                    "Szervezetté tesz",
                    "Teljesen helyettesíti annak a munkamódszerét, aki telepíti és beállítja"
                ],
                a: 0,
                explication: "Egyetlen eszköz sem pótolja a rendszer hiányát."
            },
            {
                q: "Melyik szempont a legfontosabb egy eszköz kiválasztásánál?",
                options: [
                    "A funkciók száma",
                    "Az integráció más szoftverekkel",
                    "A rögzítés sebessége: öt másodperc felett abbahagyod a felírást"
                ],
                a: 2,
                explication: "A rendszer abban a pillanatban omlik össze, amikor a felírás kényelmetlenné válik."
            },
            {
                q: "Mit eredményez három párhuzamosan használt feladatkezelő alkalmazás?",
                options: [
                    "Azt, hogy biztosan egyik sem naprakész",
                    "Sokkal teljesebb lefedettséget, mert semmi sem vész el",
                    "Jobb felosztást környezetek és projektek szerint"
                ],
                a: 0,
                explication: "Egy tökéletlen, de egyetlen rendszer jobb három tökéletesnél."
            },
            // 2. sorozat
            {
                q: "Mi egy új eszköz valódi próbája?",
                options: [
                    "A használat első napjai, amikor minden új",
                    "A harmadik hét, amikor alábbhagyott a lelkesedés",
                    "Az első hónapban felvett és elvégzett feladatok száma"
                ],
                a: 1,
                explication: "Minden eszköz csodálatosnak tűnik az elején: az újdonság tetszik, nem az eszköz."
            },
            {
                q: "Mi a Notion fő korlátja a feladatkezelésben?",
                options: [
                    "Fizetős, és elég drága",
                    "Egyáltalán nem működik, amikor épp nincs internetkapcsolat a gépen",
                    "A rugalmassága csapda: rendezgetjük ahelyett, hogy csinálnánk"
                ],
                a: 2,
                explication: "A listák átrendezése munkának látszik, pedig nem az."
            },
            {
                q: "Idén háromszor váltottál eszközt. Mit jelez ez?",
                options: [
                    "Idővel finomítod a munkamódszeredet",
                    "Az eszközök piaca tényleg nagyon gyorsan változik",
                    "A gond valószínűleg nem az eszközzel van"
                ],
                a: 2,
                explication: "Az alkalmazások összehasonlítása a halogatás különösen kényelmes formája."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mit akarnak csökkenteni a bemutatott termelékenységi módszerek?",
            options: [
                "A teljes munkaidőt",
                "Ami költséggel jár, de semmit sem hoz: megszakításokat, ismétlődő döntéseket, mentális terhelést",
                "Az egyszerre futó projektek számát"
            ],
            a: 1,
            explication: "Egyik sem akar gyorsabb munkára rávenni."
        },
        {
            q: "Hány módszert vezess be egyszerre?",
            options: [
                "Mindet, hiszen tökéletesen kiegészítik egymást",
                "Egyet, és adj neki három hetet",
                "Legalább kettőt, hogy jól össze tudd hasonlítani őket"
            ],
            a: 1,
            explication: "Négy rendszer egymásra halmozása annyi, mint egy sem."
        },
        {
            q: "Mi maga a termelékenység területének fő kockázata?",
            options: [
                "Több időt töltünk a módszer kiválasztásával, mint a munkával",
                "A módszerek ellentmondanak egymásnak",
                "Az eszközök drágák"
            ],
            a: 0,
            explication: "Egy új eszköz telepítése olyan elégedettséget ad, mintha haladtunk volna — pedig nem haladtunk."
        },
        {
            q: "Két órád van egy megerőltető feladatra, és rengeteg az értesítés. Mit tegyél először?",
            options: [
                "Kezdj bele azonnal, hogy ne veszíts időt",
                "Kapcsold ki az értesítéseket, aztán indíts egy folyamatos munkablokkot",
                "Intézd el az értesítéseket, hogy szabad legyen a fejed"
            ],
            a: 1,
            explication: "E lépés nélkül a Pomodoro-technikának nincs értelme."
        },
        {
            q: "Egy feladat egy hónapja ott van a listádon. Mi a legvalószínűbb oka?",
            options: [
                "A motiváció hiánya",
                "Nem elég fontos számodra éppen ebben a pillanatban",
                "Rosszul van megfogalmazva: nem konkrét lépés"
            ],
            a: 2,
            explication: "Gyakran elég következő fizikai lépésként újrafogalmazni, hogy elinduljon."
        },
        {
            q: "Melyik a legjobb feladatkezelő eszköz?",
            options: [
                "Amelyet három hét múlva is megnyitsz",
                "Amelyiknek a legtöbb funkciója van",
                "Amelyet a szakma összes képviselője használ"
            ],
            a: 0,
            explication: "Minden más szempont messze lemarad. Egy komolyan vezetett papírlap jobb egy feladott rendszernél."
        }
    ]
};
