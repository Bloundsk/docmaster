// ===================================
// KÉRDÉSBANK — A TANULÁS TANULÁSA, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban : aki nyelvet vált, ugyanazt a
// kérdést találja ugyanabban a sorrendben.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "la-courbe-de-loubli": [
            // 1. sorozat
            {
                q: "Milyen alakú a felejtési görbe?",
                options: [
                    "Egyenletesen csökkenő",
                    "Eleinte nagyon gyors, aztán egyre lassabb",
                    "Eleinte lassú, aztán hirtelen"
                ],
                a: 1,
                explication: "Ez a forma, és nem az átlagos sebesség szabja meg, mikor kell ismételni."
            },
            {
                q: "Ha ma megtanulsz 40 kifejezést, és soha nem nézed át őket, mennyi marad meg egy hét után?",
                options: [
                    "Nagyjából 8",
                    "Nagyjából 24",
                    "Nagyjából 30"
                ],
                a: 0,
                explication: "Másnapra 24, két nap után 18, egy hét után 8."
            },
            {
                q: "Mikor éri meg a legjobban egy ismétlés?",
                options: [
                    "Három hét múlva, amikor minden leülepedett",
                    "Korán, amikor a veszteség a leggyorsabb",
                    "Az időpont nem számít"
                ],
                a: 1,
                explication: "A másnapi ismétlés ugyanannyi idő alatt több anyagot ment meg, mint egy késői."
            },
            // 2. sorozat
            {
                q: "Miért működik a vizsga előtti esti magolás a vizsgán?",
                options: [
                    "Mert tartósan rögzíti az anyagot",
                    "Mert a stressz javítja az emlékezetet",
                    "Mert a görbe magasról indul, és a vizsga előbb jön, mint hogy leereszkedne"
                ],
                a: 2,
                explication: "Utána ugyanúgy leereszkedik: három héttel később szinte semmi sem marad."
            },
            {
                q: "Minek a jele, ha elfelejtjük, amit csak egyszer láttunk?",
                options: [
                    "Rosszul végzett tanulásnak vagy alkalmatlan módszernek",
                    "Figyelemhiánynak",
                    "Az emlékezet normális működésének"
                ],
                a: 2,
                explication: "A hasznos kérdés nem az, hogy „hogyan tanuljak jobban elsőre”, hanem hogy „mikor térjek vissza rá”."
            },
            {
                q: "A teljes veszteség mekkora része történik az első két napban?",
                options: [
                    "Nagyjából egytizede",
                    "Több mint a fele",
                    "Egyenletesen oszlik el a hónapon át"
                ],
                a: 1,
                explication: "Aki hétvégéig vár az ismétléssel, a csata után érkezik."
            }
        ],

        // ---------------------------------------------------------------
        "la-repetition-espacee": [
            // 1. sorozat
            {
                q: "Mit tesz egy sikeres ismétlés a felejtési görbével?",
                options: [
                    "Visszaemeli, a meredekségén nem változtat",
                    "Nem változtat rajta, csak késlelteti",
                    "Visszaemeli és laposabbá teszi"
                ],
                a: 2,
                explication: "Ami egy napig tartott, utána három napig tart, aztán egy hétig, aztán háromig."
            },
            {
                q: "Milyen elv szabja meg az időközöket?",
                options: [
                    "Állandó időközönként ismételni",
                    "Közvetlenül a felejtés előtt visszatérni",
                    "Akkor ismételni, amikor épp jut rá idő"
                ],
                a: 1,
                explication: "Túl korán: pazarlás arra, amit még tudsz; túl későn: újratanulás."
            },
            {
                q: "60 kifejezés hat hónapra, kifejezésenként 8 másodperccel: mennyibe kerül a térközös ismétlés?",
                options: [
                    "Összesen 48 perc",
                    "Összesen 3 óra 20 perc, hat hónapra elosztva",
                    "Heti egy óra"
                ],
                a: 0,
                explication: "Szemben a heti teljes újraolvasás 3 óra 20 percével: négyszer kevesebb idő."
            },
            // 2. sorozat
            {
                q: "Mitől nehéz kitartani a térközös ismétlés mellett?",
                options: [
                    "Az erőfeszítéstől, amelyet minden alkalommal kíván",
                    "Az ütemtervtől, amelyet feltételez",
                    "A hozzá szükséges eszközöktől"
                ],
                a: 1,
                explication: "Senki sem tartja fejben, hogy az egyik kifejezést 21 nap múlva, a másikat 3 nap múlva kell átnézni."
            },
            {
                q: "Mit csinálnak az olyan tanulókártya-programok, mint az Anki?",
                options: [
                    "Helyetted jegyeznek meg, a tartalom ismételgetésével",
                    "Megírják a kártyákat",
                    "Vezetik az ismétlések ütemtervét"
                ],
                a: 2,
                explication: "Egy kartotékdoboz öt elválasztólappal ugyanezt végzi, képernyő nélkül."
            },
            {
                q: "Mit jelez egy olyan ismétlés, amelyben minden elsőre sikerül?",
                options: [
                    "Hogy túl rövidek az időközök",
                    "Hogy a téma megvan",
                    "Hogy jók a kérdések, és jó a tananyag"
                ],
                a: 0,
                explication: "Az a jó ismétlés, amelyben rendszeresen tévedsz."
            }
        ],

        // ---------------------------------------------------------------
        "se-tester-plutot-que-relire": [
            // 1. sorozat
            {
                q: "Mi a számonkérés szerepe a tanulásban?",
                options: [
                    "Maga a tanulás",
                    "Azt ellenőrzi, amit korábban megtanultunk",
                    "Főleg osztályozásra és rangsorolásra szolgál"
                ],
                a: 0,
                explication: "Ha egy választ az emlékezetedben keresel, az sokkal jobban megerősíti az emléket, mint az újraolvasás."
            },
            {
                q: "Egy héttel később tesztelve milyen eredményt érnek el az újraolvasók és az önmagukat kikérdezők?",
                options: [
                    "Egyforma eredményt",
                    "Nagyjából 61%-ot, szemben nagyjából 40%-kal",
                    "Nagyjából 40%-ot, szemben nagyjából 61%-kal"
                ],
                a: 2,
                explication: "Azonos tanulási idővel. Azonnal tesztelve fordított az arány — innen az illúzió."
            },
            {
                q: "Miért nem működik, ha nyitott anyaggal kérdezed ki magad?",
                options: [
                    "Mert több időt vesz igénybe",
                    "Mert fárasztóbb",
                    "Mert megszünteti az előhívás erőfeszítését, amely hat"
                ],
                a: 2,
                explication: "Felismerni egy választ és előhívni két különböző művelet."
            },
            // 2. sorozat
            {
                q: "Mit érdemes kezdeni egy fejezetcímmel, ha ki akarod kérdezni magad?",
                options: [
                    "Kérdéssé alakítani",
                    "Kiemelni, hogy később visszatérj rá",
                    "Szépen átmásolni a jegyzeteidbe"
                ],
                a: 0,
                explication: "„A felejtési görbe” így lesz: „milyen alakú, és mit változtat ez?”."
            },
            {
                q: "Jobb tévedve válaszolni, vagy rögtön elolvasni a helyes választ?",
                options: [
                    "Rögtön elolvasni, hogy ne rögzüljön a hiba",
                    "Előbb válaszolni, akár tévedve is",
                    "A kettő egyformán jó"
                ],
                a: 1,
                explication: "Ha tévedsz, majd látod a javítást, az jobban megmarad, mint ha rögtön a helyes választ olvasnád."
            },
            {
                q: "Mit jelez egy kényelmes ismétlés?",
                options: [
                    "Hogy valószínűleg nem sokat ér",
                    "Hogy jól választottad meg a témát és a tempót",
                    "Hogy jó formában vagy"
                ],
                a: 0,
                explication: "Az a kellemetlen pillanat, amikor keresel és nem találsz, nem kudarc: maga a módszer."
            }
        ],

        // ---------------------------------------------------------------
        "les-illusions-de-maitrise": [
            // 1. sorozat
            {
                q: "Mit mér, ha könnyen olvasol egy négyszer már elolvasott szöveget?",
                options: [
                    "A tartalom ismeretét",
                    "A szöveg minőségét",
                    "Mennyire ismerős a tördelése és a megfogalmazása"
                ],
                a: 2,
                explication: "Az agy ezt a folyékonyságot a tudás jelének veszi. Ez a központi csapda."
            },
            {
                q: "Miért olyan elterjedt még mindig a kiemelés?",
                options: [
                    "Mert hatékony, és gyorsan végig lehet érni",
                    "Mert abban a pillanatban jutalmazó",
                    "Mert a tanulási kutatások is ezt ajánlják"
                ],
                a: 1,
                explication: "A számonkérés később jön, amikor a szöveg nélkül kell teljesíteni."
            },
            {
                q: "Melyik teszt dönti el, hogy tudsz-e valamit, vagy csak felismered?",
                options: [
                    "Még egyszer figyelmesen átolvasni, aláhúzva a lényeget",
                    "Mindent becsukni, és tíz sort írni emlékezetből",
                    "Azt mondani magadnak, hogy megértetted"
                ],
                a: 1,
                explication: "Ami kijön, azt tudod. A többit csak egy listában ismerted volna fel."
            },
            // 2. sorozat
            {
                q: "Mi a közös a térközökben, az önellenőrzésben és a keverésben?",
                options: [
                    "Mindhárom gyorsabbá teszi a tanulást",
                    "Mindhárom programot igényel",
                    "Mindhárom rontja az azonnali teljesítményt, és javítja a későbbit"
                ],
                a: 2,
                explication: "Ez a hasznos nehézségek paradoxona, és ezért hagyjuk el őket."
            },
            {
                q: "Mikor kell megítélni egy tanulási módszert?",
                options: [
                    "Az alkalom végén",
                    "Egy héttel később, azon, ami megmaradt",
                    "Már az első napokban, a könnyedség érzése alapján"
                ],
                a: 1,
                explication: "„Ez a módszer nem nekem való” — ezt akkor mondjuk, amikor minden jó módszer kevésbé hatékonynak tűnik."
            },
            {
                q: "Megbízhatóak a saját tudásunkról alkotott ítéleteink?",
                options: [
                    "Nem: közvetlenül a tanulás után rendszeresen túl optimisták",
                    "Igen, mindenki tudja, mit tud",
                    "Igen, ha figyelmesek vagyunk"
                ],
                a: 0,
                explication: "Az igazi akadály nem a tanulás nehézsége, hanem annak nehézsége, hogy tudjuk, mit tudunk."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "A legelterjedtebb módszerek a legkevésbé hatékonyak közé tartoznak",
                "Többet kell tanulni",
                "Mindenki a maga módján tanul"
            ],
            a: 0,
            explication: "Újraolvasás, kiemelés, jegyzetek újraírása: szokások, amelyek a haladás érzését keltik."
        },
        {
            q: "Mi a közös a térközös ismétlésben és a tesztelési hatásban?",
            options: [
                "Mindkettő több időt kíván",
                "Mindkettő csak írásban működik, szóban és fejben soha",
                "Mindkettő az előhívás erőfeszítését használja ki"
            ],
            a: 2,
            explication: "Az emlékezetben keresni, közvetlenül a felejtés előtt: ugyanaz a mechanizmus két szemszögből."
        },
        {
            q: "Egy diák négyszer újraolvassa az anyagot, és felkészültnek érzi magát. Mit jósol ez az útmutató?",
            options: [
                "Másnap sikeres dolgozatot ír, és három hét múlva mindent elfelejt",
                "Tartósan megjegyzi",
                "Már másnap megbukik"
            ],
            a: 0,
            explication: "Az újraolvasás nyeri az azonnali tesztet, és elveszíti a későbbit. Ezért ilyen makacs."
        },
        {
            q: "Miért nem elég tudni, hogy az újraolvasás megtéveszt, ahhoz, hogy lemondjunk róla?",
            options: [
                "Mert nincs alternatívája",
                "Mert a folyékonyság illúziója akkor is megmarad, ha tudunk a létezéséről",
                "Mert a többi módszer túl sok időt vesz igénybe"
            ],
            a: 1,
            explication: "Csak a mérés korrigálja: kikérdezni magad később, és az eredményt nézni, nem a benyomást."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot alkalmazol?",
            options: [
                "Becsukni az anyagot, és leírni emlékezetből, amire emlékszel",
                "Lassabban újraolvasni",
                "Jobb jegyzeteket készíteni"
            ],
            a: 0,
            explication: "Ez egyszerre a legmegbízhatóbb teszt és teljes értékű ismétlés."
        },
        {
            q: "Ma reggel megtanultál valamit. Mikor hozza a legtöbbet az ismétlés?",
            options: [
                "Ma vagy holnap",
                "Két hét múlva, amikor a felejtés már megtette a magáét",
                "Közvetlenül azelőtt, hogy szükséged lesz rá"
            ],
            a: 0,
            explication: "A veszteség nagy része az első 48 órában történik."
        }
    ]
};
