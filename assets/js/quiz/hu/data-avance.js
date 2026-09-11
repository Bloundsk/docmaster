// ===================================
// KÉRDÉSBANK — ADATOK ÉS ELEMZÉS, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "incertitude-dune-mesure": [
            // 1. sorozat
            {
                q: "Mitől függ elsősorban egy közvélemény-kutatás hibahatára?",
                options: [
                    "A minta nagyságától",
                    "A sokaság nagyságától",
                    "A feltett kérdések számától"
                ],
                a: 0,
                explication: "Ettől lehetségesek a közvélemény-kutatások: 1000 ember ugyanakkora pontosságot ad egy városra, mint egy országra."
            },
            {
                q: "400 megfigyelésnél egy 50%-os arány hibahatára nagyjából:",
                options: [
                    "± 1 százalékpont",
                    "± 5 százalékpont",
                    "± 15 százalékpont"
                ],
                a: 1,
                explication: "A valódi érték tehát 45% és 55% között van."
            },
            {
                q: "Mi kell a hibahatár megfelezéséhez?",
                options: [
                    "Megduplázni a mintát",
                    "Megtízszerezni a mintát",
                    "Megnégyszerezni a mintát"
                ],
                a: 2,
                explication: "Ezért állnak meg az országos közvélemény-kutatások nagyjából 1000 főnél: továbbmenni sokba kerül, és nagyon keveset hoz."
            },
            // 2. sorozat
            {
                q: "A változat 42%, B változat 45%, ± 5 pontos hibahatár. Mire következtess?",
                options: [
                    "Semmire: az eltérés kisebb a hibahatárnál",
                    "B jobb",
                    "Újra kell mérni"
                ],
                a: 0,
                explication: "Ha kijelentenénk, hogy B nyert, zajt mutatnánk be eredményként."
            },
            {
                q: "Mit nem fed le a hibahatár?",
                options: [
                    "A mintavétel véletlenszerűségét, amelyet pedig a képlete pontosan számszerűsít",
                    "A minta nagyságát, amelytől pedig a hibahatár a képlet szerint közvetlenül függ",
                    "Egy rosszul megfogalmazott kérdőívet vagy egy rosszul kiválasztott sokaságot"
                ],
                a: 2,
                explication: "Ezek a torzítások nem csökkennek attól, hogy több embert kérdezünk: felerősödnek."
            },
            {
                q: "Mi hiányzik abból, hogy „a felhasználók 42%-a a B változatot szereti jobban”?",
                options: [
                    "A mérés dátuma és a lefedett időszak",
                    "Az elemszám és az adatgyűjtés módszere",
                    "Az eszköz neve"
                ],
                a: 1,
                explication: "Ezen információk nélkül a szám nem hamis: ellenőrizhetetlen."
            }
        ],

        // ---------------------------------------------------------------
        "tests-ab": [
            // 1. sorozat
            {
                q: "Mitől ok-okozati módszer az A/B teszt?",
                options: [
                    "A minták méretétől, amely a szokásos teszteknél mindig elég nagy ahhoz, hogy elnyomja a véletlent",
                    "A csoportok véletlenszerű kialakításától és attól, hogy egyetlen eltérést tesztel",
                    "A teszt időtartamától, amely elég hosszú ahhoz, hogy a hét minden napját teljesen lefedje"
                ],
                a: 1,
                explication: "Ez az egyetlen elterjedt módszer, amely ok-okozatiságot igazol, nem csak korrelációt."
            },
            {
                q: "Mikor kell kiszámolni a szükséges mintanagyságot?",
                options: [
                    "Amikor megjönnek az első eredmények",
                    "A végén, ellenőrzésként",
                    "A teszt indítása előtt"
                ],
                a: 2,
                explication: "Utána már késő azon gondolkodni, hogy a teszt adhatott-e eredményt."
            },
            {
                q: "3%-os kiinduló arány, 20%-os relatív célzott javulás: hány látogató kell csoportonként?",
                options: [
                    "Nagyjából 1400",
                    "Nagyjából 14 000",
                    "Nagyjából 140 000"
                ],
                a: 1,
                explication: "Napi 1000 látogatónál, az összes csoportot együtt számolva, ez nagyjából négy hét tesztet jelent."
            },
            // 2. sorozat
            {
                q: "Miért hiba minden nap ránézni egy A/B tesztre?",
                options: [
                    "Lassítja a tesztet, amelynek minden megtekintéskor újra kell számolnia",
                    "Torzítja az adatgyűjtést, mert az eszköz minden egyes megtekintést is rögzít",
                    "Ha elég sokszor nézünk rá, az eltérés véletlenül átlépi a küszöböt"
                ],
                a: 2,
                explication: "Az a teszt, amelyet akkor állítunk le, amikor igazat ad, már semmit sem tesztel."
            },
            {
                q: "Egy feleakkora hatás kimutatásához kell:",
                options: [
                    "Négyszer akkora forgalom",
                    "Kétszer akkora forgalom",
                    "Ugyanakkora forgalom, hosszabb ideig"
                ],
                a: 0,
                explication: "Ezért olyan drága a kis nyereségeket bizonyítani."
            },
            {
                q: "Miért ne változtass meg több elemet ugyanabban a B változatban?",
                options: [
                    "Nem fogod tudni, melyik hatott, és azt sem, hogy nem ront-e valamelyik",
                    "Túl hosszú lesz a teszt",
                    "A legtöbb tesztelőeszköz nem teszi lehetővé két változtatás egyidejű tesztelését"
                ],
                a: 0,
                explication: "A teszt ekkor arra válaszol, hogy „az egész jobb-e?”, és semmi másra."
            }
        ],

        // ---------------------------------------------------------------
        "pieges-dinterpretation": [
            // 1. sorozat
            {
                q: "Mi a Simpson-paradoxon?",
                options: [
                    "Egy korreláció, amely idővel fokozatosan eltűnik, ahogy egyre több adat gyűlik össze",
                    "Egy minden csoportban meglévő tendencia megfordulhat, ha a csoportokat összevonjuk",
                    "A minta nagyságából fakadó torzítás, amikor a minta túl kicsi a sokaság képviseletéhez"
                ],
                a: 1,
                explication: "Akkor fordul elő, amikor a csoportok mérete nagyon eltérő."
            },
            {
                q: "Mi a túlélési torzítás?",
                options: [
                    "A szélsőértékek túlbecsülése",
                    "A régi adatok túl hosszú megőrzése, amelyek végül torzítják az átlagot",
                    "Csak azok elemzése, akik maradtak, pedig a távozók tudják a választ"
                ],
                a: 2,
                explication: "A jelenlegi ügyfelek elemzése annak megértésére, miért maradnak az emberek, a tipikus eset."
            },
            {
                q: "Mi a visszatérés az átlaghoz?",
                options: [
                    "Egy kivételesen rossz hónapot általában egy jobb követ, beavatkozás nélkül is",
                    "Egy trendszámítás, amely egy idősort fokozatosan a középértéke felé húz vissza",
                    "Két adatsor összetartása ugyanazon átlagérték felé, az ismételt mérések során"
                ],
                a: 0,
                explication: "Ezért minden mélypont után hozott intézkedés hatékonynak fog tűnni."
            },
            // 2. sorozat
            {
                q: "Hogyan lehet észrevenni egy Simpson-paradoxont?",
                options: [
                    "Szegmentálással, és az összehasonlított csoportok összetételének ellenőrzésével",
                    "A minta fokozatos növelésével, egészen addig, amíg a két csoport közötti eltérés stabilizálódik",
                    "Az átlagok újraszámolásával"
                ],
                a: 0,
                explication: "Ha az összesített eredmény minden szegmensnek ellentmond, az megoszlási egyensúlytalanságot jelez, nem felfedezést."
            },
            {
                q: "Feltételez ez a három csapda számítási hibát?",
                options: [
                    "Igen, a számításkor rosszul alkalmazott képletekből fakadnak",
                    "Nem: az adatok helyesek, az olvasatuk téveszt meg",
                    "Igen, adatgyűjtési hibákból fakadnak"
                ],
                a: 1,
                explication: "Ettől olyan nehéz észrevenni őket: a számokban semmi sem hamis."
            },
            {
                q: "Egy katasztrofális hónapot korrekciós intézkedés követ, és a következő hónap javul. Mire következtess?",
                options: [
                    "Semmire: a javulás valószínűleg beavatkozás nélkül is bekövetkezett volna",
                    "Az intézkedés működött, és ezt a következő havi fellendülés egyértelműen bizonyítja",
                    "Az intézkedés kevés volt: már a jövő hónaptól érezhetően erősíteni és bővíteni kell"
                ],
                a: 0,
                explication: "Ez a leggyakoribb illúzió a korrekciós intézkedések értékelésében."
            }
        ],

        // ---------------------------------------------------------------
        "chaine-de-donnees": [
            // 1. sorozat
            {
                q: "Mi az adatlánc négy figyelendő tulajdonsága?",
                options: [
                    "Sebesség, mennyiség, változatosság, valódiság",
                    "Költség, biztonság, teljesítmény, elérhetőség",
                    "Frissesség, teljesség, következetesség, visszakövethetőség"
                ],
                a: 2,
                explication: "Bármelyik láncszemen fellépő hiba kifogástalanul tálalt, de hamis irányítópultot eredményez."
            },
            {
                q: "Miért veszélyesebb egy befagyott adat egy hiányzónál?",
                options: [
                    "Tárhelyet foglal",
                    "Senki sem veszi észre, hogy már nem mozdul",
                    "Megakadályozza az új számításokat"
                ],
                a: 1,
                explication: "Minden normálisnak tűnik, a számok hihetők, és elavultak."
            },
            {
                q: "Melyik egyszerű ellenőrzés észleli a valódi incidensek többségét?",
                options: [
                    "Egy heti kézi ellenőrzés, amelyet az adatokat előállító csapat végez",
                    "Riasztás, ha a sorok száma erősen eltér a szokásostól",
                    "A jogosultságok ellenőrzése, hogy senki ne írjon felül semmit"
                ],
                a: 1,
                explication: "Megszakadt forrás, tömeges ismétlődés, formátumváltás egy korábbi lépésben: ez a triviális teszt mindet elkapja."
            },
            // 2. sorozat
            {
                q: "Két irányítópult két különböző számot mutat „az ügyfelek számára”. Honnan ered a gond?",
                options: [
                    "Számítási hibából",
                    "Frissítési eltolódásból",
                    "Eltérő, soha le nem írt definíciókból"
                ],
                a: 2,
                explication: "És ez mindkét irányítópultba vetett bizalmat egyszerre rombolja le."
            },
            {
                q: "Mi egy szám visszakövethetősége?",
                options: [
                    "Az értékeinek teljes, dátumozott előzménye, amelyet a hónapok egymással való összehasonlításához őrzünk meg",
                    "Annak lehetősége, hogy visszajussunk a forrásáig és ahhoz az átalakításhoz, amely előállította",
                    "A megtekintések részletes naplója, amely pontosan megmondja, ki és mikor nézte meg a számot az irányítópulton"
                ],
                a: 1,
                explication: "Enélkül egy rendellenességet nem lehet diagnosztizálni."
            },
            {
                q: "Mi a legolcsóbb védelem a csendes meghibásodás ellen?",
                options: [
                    "A feldolgozások megduplázása",
                    "A nyers adatok mentése, hogy szükség esetén mindent újra lehessen számolni",
                    "Az utolsó frissítés dátumának megjelenítése a számok mellett"
                ],
                a: 2,
                explication: "Különben egy sikertelen feldolgozás után az irányítópult az utolsó ismert értékeket mutatja."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Milyen kérdés feltevésére tanít ez a szint?",
            options: [
                "Mennyire bízhatunk a kapott számban?",
                "Milyen eszközt használjunk?",
                "Hogyan mutassuk be az eredményeket?"
            ],
            a: 0,
            explication: "Egy 2%-os eltérés eredmény vagy zaj? Hány megfigyelés kellene a döntéshez?"
        },
        {
            q: "Egy A/B teszt két nap után +3%-ot mutat. Mit tegyél?",
            options: [
                "Várd ki a tervezett elemszámot, mielőtt következtetsz",
                "Élesítsd a nyertes változatot",
                "Állítsd le a tesztet, a hatás bizonyított"
            ],
            a: 0,
            explication: "Ha elég sokszor nézünk rá, az eltérés véletlenül átlépi a küszöböt, aztán visszaesik."
        },
        {
            q: "Mi a közös a hibahatárban és egy A/B teszt méretében?",
            options: [
                "Mindkettő a teljes sokaságtól függ",
                "Mindkettő az elemszám négyzetgyökével változik",
                "Mindkettőt megállapodás rögzíti"
            ],
            a: 1,
            explication: "Ugyanaz a következmény: a bizonytalanság vagy a kimutatható hatás megfelezése négyszer annyi megfigyelésbe kerül."
        },
        {
            q: "Az összesített eredmény ellentmond annak, amit minden alcsoportban látunk. Minek higgy?",
            options: [
                "Az alcsoportoknak, és ellenőrizd a megoszlást",
                "Az összegnek, amely több megfigyelésen alapul",
                "Egyiknek sem, gyűjtsd újra az adatokat"
            ],
            a: 0,
            explication: "Ha az összeg épp az ellenkezőjét mondja, mint minden része, nem az összegnek kell hinni."
        },
        {
            q: "Mi korlátozza egy elemzés minőségét?",
            options: [
                "Az elemző szakértelme, amelytől a lánc minden más része függ",
                "A lánc leggyengébb láncszeme, amely ritkán maga az elemzés",
                "Az eszközök teljesítménye, amely meghatározza, mit és mennyi idő alatt lehet kiszámolni"
            ],
            a: 1,
            explication: "Gyűjtés, továbbítás, tárolás, átalakítás: egy korábbi lépés hibája tökéletesen tálalt és hamis eredményt ad."
        },
        {
            q: "Melyik dokumentum véd meg egy teszttel kapcsolatos elhamarkodott következtetéstől?",
            options: [
                "A zárójelentés, amelyet gondosan megírnak, amikor minden eredmény ismert",
                "A tesztelőeszköz dokumentációja, amely leírja az alapértelmezett küszöböket",
                "Az indítás előtt leírt feltevések: időtartam, elemszám, küszöb"
            ],
            a: 2,
            explication: "Ez a dokumentum három nap múlva megvéd saját magadtól."
        }
    ]
};
