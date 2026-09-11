// ===================================
// KÉRDÉSBANK — TÁRGYALÁS ÉS KOMMUNIKÁCIÓ, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "les-conversations-difficiles": [
            // 1. sorozat
            {
                q: "Miért akasztja el a beszélgetést a „nem veszed komolyan ezt a projektet”?",
                options: [
                    "Feltételezett szándék: az egyetlen lehetséges válasz a tagadás",
                    "Túl közvetlen",
                    "Hiányoznak belőle a számszerű bizonyítékok és a pontos dátumok, amelyekre hivatkozni lehetne"
                ],
                a: 0,
                explication: "Egy tény megvitatható; egy tulajdonított szándék nem."
            },
            {
                q: "Melyik szabály segít a tényeknél maradni?",
                options: [
                    "Pontos számokat és pontos dátumokat idézni minden mondatban",
                    "Csak a legutóbbi időszak tényeinél maradni, a régebbieket kihagyva",
                    "Leírni, amit egy kamera rögzített volna"
                ],
                a: 2,
                explication: "Minden, amit nem lehetett volna felvenni, értelmezés."
            },
            {
                q: "Melyik egy hasznos kritika három lépése?",
                options: [
                    "Dicséret, kritika, dicséret",
                    "Megállapítás, érzelem, szankció",
                    "Tény, hatás, kérés"
                ],
                a: 2,
                explication: "A harmadik lépés nélkül csak szemrehányás marad."
            },
            // 2. sorozat
            {
                q: "Mit ér a dicséretbe csomagolt kritika technikája?",
                options: [
                    "Nagyrészt hatástalan: az egyikre vagy a másikra emlékeznek, és gyanakodni kezdenek a dicséretekre",
                    "Ez a legjobb megközelítés",
                    "Csak írásban működik"
                ],
                a: 0,
                explication: "Jobb egyszer, világosan kimondani, mi nem jó, a pozitívumokat pedig más alkalommal."
            },
            {
                q: "Melyik két gyakorlati feltétel nyom annyit a latban, mint a megfogalmazás?",
                options: [
                    "Írásban, és tanú jelenlétében",
                    "A hét elején, és mindenki számára a lehető legrövidebben",
                    "Négyszemközt, és időt hagyva a válaszra"
                ],
                a: 2,
                explication: "A kritikát, amelyre nincs mód válaszolni, ítéletként élik meg."
            },
            {
                q: "Mit kockáztatsz, ha egy már meghozott döntést nyitott kérdésként mutatsz be?",
                options: [
                    "Hogy fölöslegesen elhúzod a már elkezdett értekezletet",
                    "Hogy elveszíted a másik bizalmát",
                    "Semmit, ez csak egy diplomatikus fordulat"
                ],
                a: 1,
                explication: "Meg kell különböztetni, mi tárgyalható és mi nem."
            }
        ],

        // ---------------------------------------------------------------
        "les-biais": [
            // 1. sorozat
            {
                q: "Mit mond az elsüllyedt költség torzítása?",
                options: [
                    "Minél többet fektetsz egy projektbe, annál inkább ki kell tartani mellette",
                    "Meg kell térülnie a befektetett erőfeszítésnek",
                    "A már eltöltött időnek semmin sem kellene változtatnia a döntésben"
                ],
                a: 2,
                explication: "Hat hónapnyi egyeztetés nem teszi elfogadhatóvá a rossz megállapodást."
            },
            {
                q: "Melyik torzítás akadályozza meg a kreatív megállapodásokat?",
                options: [
                    "Túlzott bizalom a saját, gondosan előre előkészített érveinkben",
                    "Azt feltételezni, hogy amit az egyik nyer, a másik elveszíti",
                    "A jelen lévő másik féllel való nyílt konfliktustól való félelem"
                ],
                a: 1,
                explication: "Kizárja az aszimmetrikus cserék keresését."
            },
            {
                q: "Elég ismerni egy torzítást ahhoz, hogy védve legyél tőle?",
                options: [
                    "Igen, a torzítás puszta ismerete önmagában is tartósan megvéd tőle minden helyzetben",
                    "Igen, gyakorlás után",
                    "Nem: a horgonyzást előre tájékoztatott szakértőknél is kimérték"
                ],
                a: 2,
                explication: "Ami működik, az eljárásbeli, nem kognitív."
            },
            // 2. sorozat
            {
                q: "Melyik eljárás mérsékli a kárt?",
                options: [
                    "Kezdés előtt leírni a kiszállási pontot, és a döntéskor újraolvasni",
                    "Az értekezlet előtt átismételni a torzításokat",
                    "Kísérővel menni"
                ],
                a: 0,
                explication: "A hideg fejjel leírt szám sokkal jobban ellenáll a pillanat nyomásának."
            },
            {
                q: "Mi a következetességből fakadó elköteleződés?",
                options: [
                    "A szerződéses kötelezettségek végigvitele a legvégéig, bármi történjék is közben",
                    "Ugyanannak az érvnek az ismételgetése",
                    "Ragaszkodni egy kimondott számhoz, hogy ne tűnjünk ingadozónak"
                ],
                a: 2,
                explication: "Akkor is, ha új információk abszurddá teszik."
            },
            {
                q: "Miért becsüljük túl, mennyit tud a másik a korlátainkról?",
                options: [
                    "Mert túl sokat kommunikálunk",
                    "Nekünk nyilvánvalónak tűnnek, pedig kívülről láthatatlanok",
                    "Mert a másik utánajár"
                ],
                a: 1,
                explication: "Ezért el sem magyarázzuk őket."
            }
        ],

        // ---------------------------------------------------------------
        "reconnaitre-la-manipulation": [
            // 1. sorozat
            {
                q: "Mi a válasz egy tárgyalási fogásra?",
                options: [
                    "Nyugodtan megnevezni",
                    "Szó nélkül eltűrni, ahogy van",
                    "Tükörfogást alkalmazni"
                ],
                a: 0,
                explication: "Csak észrevétlenül működik."
            },
            {
                q: "Mi az utolsó pillanatos pluszkérés?",
                options: [
                    "Egy újabb kérés, amikor a megállapodás már majdnem kész",
                    "Egyenként, hosszú időn át kicsikart apró engedmények folyamatos sorozata",
                    "A megállapodás megtagadása"
                ],
                a: 0,
                explication: "Azt a pillanatot használja ki, amikor a visszalépés mindenbe kerülne."
            },
            {
                q: "Mi az igazi védőbástya mindezekkel a fogásokkal szemben?",
                options: [
                    "A már felhalmozott tapasztalat",
                    "Az alternatívád",
                    "Egy írásos, aláírt szerződés"
                ],
                a: 1,
                explication: "Mindegyik azt feltételezi, hogy nem tudsz felállni."
            },
            // 2. sorozat
            {
                q: "Mit árul el a „felettesem nem engedi”?",
                options: [
                    "Egy távollévő, ellenőrizhetetlen döntéshozót, amely áttolja a tárgyalást",
                    "Egy valódi, tiszteletben tartandó korlátot",
                    "Meghívást arra, hogy egy hierarchiaszinttel feljebb vigyük a beszélgetést"
                ],
                a: 0,
                explication: "A beszélgetést egy elérhetetlen személyhez tolja át."
            },
            {
                q: "Miért gyakoribbak a fogások az aszimmetrikus viszonyokban?",
                options: [
                    "Annál jobban működnek, minél kevésbé van hová mennie a másiknak",
                    "Mert nagyobb a tét",
                    "Mert a felek sokkal kevésbé ismerik egymást, és így kevésbé bíznak egymásban"
                ],
                a: 0,
                explication: "Ugyanezért az alternatíva az általános védelem."
            },
            {
                q: "Mibe kerül, ha ugyanazokkal a fegyverekkel vágsz vissza?",
                options: [
                    "Semmibe, ez szakemberek között egyszerűen a játék természetes része",
                    "Az aszimmetrikus cserék lehetőségébe, és a kapcsolatba",
                    "Csak időbe"
                ],
                a: 1,
                explication: "Az aszimmetrikus cserék hozzák a legjobb megállapodásokat."
            }
        ],

        // ---------------------------------------------------------------
        "savoir-sarreter": [
            // 1. sorozat
            {
                q: "1 500 EUR különbség, 6 hét elakadás, heti 3 óra 45 EUR/óra díjjal: mit ad a számítás?",
                options: [
                    "810 EUR ráfordított idő, a maradék különbség 54%-a",
                    "Elhanyagolható költséget",
                    "2 700 EUR-t, vagyis jóval többet a még fennálló különbségnél"
                ],
                a: 0,
                explication: "A különbség még indokolja a tárgyalást, de épphogy."
            },
            {
                q: "Ugyanez az elakadás húsz hétre nyújtva ennyibe kerül:",
                options: [
                    "810 EUR, vagyis az egésznek még szerény része",
                    "2 700 EUR, a maradék különbség 180%-a",
                    "Ugyanannyit, mert az időt nem számoljuk bele"
                ],
                a: 1,
                explication: "Ekkor már mindkét fél veszített, bármi legyen is a végső megállapodás."
            },
            {
                q: "Miért nem végzik el soha ezt a számítást?",
                options: [
                    "Túlságosan bonyolult és időigényes ahhoz, hogy végigvigyék",
                    "Általában mindkét félre nézve kínos az eredménye",
                    "A szükséges adatok a legtöbb esetben egyszerűen hiányoznak"
                ],
                a: 1,
                explication: "Pedig csak egy szorzás és egy összehasonlítás."
            },
            // 2. sorozat
            {
                q: "Melyik egy jól kivitelezett felállás három eleme?",
                options: [
                    "Megköszönni, kimondani, mi tette volna lehetővé a megállapodást, nyitva hagyni az ajtót",
                    "Bejelenteni, indokolni, távozni",
                    "Fenyegetni, várni, visszatérni"
                ],
                a: 0,
                explication: "Ez a megfogalmazás néha jobb feltételekkel indítja újra a tárgyalást."
            },
            {
                q: "Mi az, ha felállsz az asztaltól?",
                options: [
                    "A tárgyalás egyszerű kudarca",
                    "Az alternatívád gyakorlása",
                    "Tisztán taktikai, kiszámított fenyegetés"
                ],
                a: 1,
                explication: "Annak használata, ami kezdettől erőt adott."
            },
            {
                q: "Mit okoz egy hosszú tárgyalás fáradtsága?",
                options: [
                    "Az idő múlásával érezhetően egyre igényesebbek leszünk",
                    "Jobban tárgyalunk, egyszerűen a megszerzett rutin miatt",
                    "Elfogadjuk, amit az első napon elutasítottunk volna"
                ],
                a: 2,
                explication: "A megkönnyebbülés azonnali, és semmit sem mond a megállapodás minőségéről."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi a közös ennek a szintnek minden témájában?",
            options: [
                "Üzleti tárgyalásokra vonatkoznak",
                "Közvetítő harmadik felet igényelnek",
                "Azt feltételezik, hogy a beszélgetés nem jóhiszemű, vagy már nem tartható"
            ],
            a: 2,
            explication: "Az első két szint megállapodást kereső feleket feltételezett."
        },
        {
            q: "Mi a közös a leírt kiszállási pontban és a megfigyelhető tényben?",
            options: [
                "Mindkettő ellenáll a pillanat nyomásának, a fejben tartott szándékokkal ellentétben",
                "Mindkettő jogi kérdés",
                "Mindkettőt közölni kell a másik féllel"
            ],
            a: 0,
            explication: "A leírt eljárás megáll ott, ahol az akarat enged."
        },
        {
            q: "Egy eladó bejelenti, hogy az ajánlata két óra múlva lejár. Mit tegyél?",
            options: [
                "Azonnal dönteni",
                "Bejelenteni, hogy távozol",
                "Megnevezni a fogást: „Látom, hogy nagyon rövid a határidő. Lehet róla tárgyalni?”"
            ],
            a: 2,
            explication: "Ez a mondat nem vádol: láthatóvá teszi azt, aminek kimondatlannak kellett volna maradnia."
        },
        {
            q: "Miért nem ajánljuk az itt leírt fogásokat?",
            options: [
                "Mert tilosak",
                "Egy tartósnak szánt kapcsolatban többe kerülnek, mint amennyit hoznak",
                "Mert nem működnek"
            ],
            a: 1,
            explication: "Azért mutatjuk be őket, hogy felismerd, nem hogy alkalmazd."
        },
        {
            q: "Egy munkavállalót a felettese ismételten nyomás alá helyez. Ennek az útmutatónak a témája?",
            options: [
                "Igen, ez aszimmetrikus tárgyalás",
                "Nem: konkrét jogorvoslati utakat igényel, amelyek országonként eltérnek",
                "Igen, a nehéz beszélgetések módszerét kell alkalmazni"
            ],
            a: 1,
            explication: "Egyes helyzeteket nem lehet megtárgyalni."
        },
        {
            q: "Mi marad, ha ennek a szintnek csak egyetlen dolgát jegyzed meg?",
            options: [
                "Felismerni a hat fogást",
                "Soha nem felállni az asztaltól",
                "Belépés előtt leírni a kiszállási pontot, és csak a döntéskor újraolvasni"
            ],
            a: 2,
            explication: "Ez az egyetlen védelem, amely ellenáll a fáradtságnak."
        }
    ]
};
