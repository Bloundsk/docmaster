// ===================================
// KÉRDÉSBANK — A TANULÁS TANULÁSA, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lentrelacement": [
            // 1. sorozat
            {
                q: "Miért téveszt meg, ha húsz ugyanolyan típusú feladatot oldasz meg egymás után?",
                options: [
                    "Mert a feladatok túl könnyűek",
                    "Mert nem kell felismerni, milyen típusról van szó",
                    "Mert túl sok időt vesz igénybe"
                ],
                a: 1,
                explication: "Alkalmazod a módszert, amelyet épp elolvastál, és bejön. A sorozat halad."
            },
            {
                q: "Négy típusba tartozó 48 feladatnál mekkora a különbség a csoportosított és a kevert gyakorlás között a későbbi teszten?",
                options: [
                    "Elhanyagolható különbség",
                    "Nagyjából 10 sikeres, szemben nagyjából 30-cal",
                    "Nagyjából 30, szemben nagyjából 10-zel"
                ],
                a: 1,
                explication: "Ugyanannyi feladat, ugyanannyi idő. Csak a sorrend változik."
            },
            {
                q: "A munka melyik részét hagyja ki a csoportosított gyakorlás?",
                options: [
                    "A probléma típusának felismerését",
                    "A módszer alkalmazását, miután kiválasztottuk",
                    "Magát a számolást, amely a legtöbb időt viszi"
                ],
                a: 0,
                explication: "A dolgozat napján senki sem mondja meg a típust — és ez a nehéz rész."
            },
            // 2. sorozat
            {
                q: "Milyen érzést kelt a keverés gyakorlás közben?",
                options: [
                    "Hogy jobban boldogulsz, mint csoportosítva",
                    "Hogy rosszabbul boldogulsz",
                    "Abban a pillanatban nincs érezhető különbség"
                ],
                a: 1,
                explication: "Ez az érzés pontos — abban a pillanatban. A későbbi teszten megfordul."
            },
            {
                q: "Mi különbözteti meg a keverést a csapongástól?",
                options: [
                    "A keverés olyan feladatokat váltogat, amelyek eléggé hasonlók ahhoz, hogy összetévesszük őket",
                    "A keverés tízpercenként tárgyat vált",
                    "Semmi, ez két szó ugyanarra"
                ],
                a: 0,
                explication: "Épp az összetévesztés lehetősége teszi hasznossá a gyakorlatot."
            },
            {
                q: "Hogyan fogj hozzá egy épp megismert módszerhez?",
                options: [
                    "Húsz csoportosított feladattal, mielőtt másra térnél",
                    "Rögtön keverve, külön feladat nélkül",
                    "Két-három csoportosított feladattal, aztán mindannak a keverékével, amit addig láttál"
                ],
                a: 2,
                explication: "Amíg megérted a módszert, aztán versenyeztetni kezded a többivel."
            }
        ],

        // ---------------------------------------------------------------
        "lelaboration": [
            // 1. sorozat
            {
                q: "Melyik kérdés foglalja össze a mély feldolgozást?",
                options: [
                    "Mennyi időbe fog ez telni?",
                    "Benne van a vizsgaanyagban?",
                    "Miért igaz ez?"
                ],
                a: 2,
                explication: "Aztán: mennyiben illik — vagy nem illik — ahhoz, amit már tudok?"
            },
            {
                q: "Miért könnyebb előhívni egy másokhoz kapcsolt fogalmat?",
                options: [
                    "Mert rövidebb",
                    "Mert több úton is elérhetővé válik",
                    "Mert érdekesebb, ezért könnyebb megjegyezni"
                ],
                a: 1,
                explication: "Elég, ha egyetlen út működik, hogy előhívd."
            },
            {
                q: "Mit dolgoztat meg egy definíció szép lemásolása?",
                options: [
                    "A kezet",
                    "Az emlékezetet",
                    "A megértést"
                ],
                a: 0,
                explication: "A saját szavaiddal újrafogalmazni arra kényszerít, hogy felépítsd az értelmét — és kiderül, ha nem értetted meg."
            },
            // 2. sorozat
            {
                q: "Mit ér egy saját magad által talált példa?",
                options: [
                    "Kevesebbet, mint a tananyagé, amelyet szakember választott",
                    "Főleg szemléltetésre jó",
                    "Ez a bizonyítéka annak, hogy érted a fogalmat"
                ],
                a: 2,
                explication: "A tananyag példáját olvastad, az semmit sem bizonyít."
            },
            {
                q: "Milyen egy hasznos jegyzetlap?",
                options: [
                    "Válaszokat tartalmaz, szépen kiszínezve és aláhúzva",
                    "A tananyag teljes összefoglalása",
                    "Kérdéseket tartalmaz, és gyakran csúnya"
                ],
                a: 2,
                explication: "Egy tananyag színes átmásolása órákat vesz igénybe, szép tárgyat hoz létre, és kevés nyomot hagy."
            },
            {
                q: "Egy olvasás során az számít, hogy:",
                options: [
                    "mit csinálsz közben a tartalommal",
                    "mennyi időt töltesz a tartalommal, sorról sorra",
                    "hány oldalt olvasol el"
                ],
                a: 0,
                explication: "A mély feldolgozás háromszor annyi időt vesz igénybe, és tízszer annyi marad meg belőle."
            }
        ],

        // ---------------------------------------------------------------
        "la-pratique-deliberee": [
            // 1. sorozat
            {
                q: "Mi a tudatos gyakorlás három feltétele?",
                options: [
                    "Sokat, rendszeresen és csendben dolgozni",
                    "Ismételni, ismételni, ismételni",
                    "Azon dolgozni, ami nem megy, a képességeid határán maradni, gyors visszajelzést kapni"
                ],
                a: 2,
                explication: "Az első a legegyszerűbb és a legkevésbé betartott."
            },
            {
                q: "Heti 5 órában, 12 héten át mit változtat, ha az idő 20%-a helyett 60%-át fordítod a gyenge pontjaidra?",
                options: [
                    "12 hasznos óra, szemben 36-tal",
                    "Egy negyedév léptékében elhanyagolható különbség",
                    "Háromszor annyit kell dolgozni"
                ],
                a: 0,
                explication: "Háromszor nagyobb fejlődés ugyanannyi összóraszám mellett."
            },
            {
                q: "Miért lehet húsz évig vezetni úgy, hogy az ember nem vezet jobban?",
                options: [
                    "Mert a kor lassanként rontja a reflexeket és a figyelmet",
                    "Mert az utak változnak",
                    "Mert a gyakorlás önmagában nem visz előre"
                ],
                a: 2,
                explication: "Mindhárom feltétel kell hozzá: gyenge pontok, megfelelő nehézség, gyors visszajelzés."
            },
            // 2. sorozat
            {
                q: "Milyen egy jó gyakorlás?",
                options: [
                    "Hibátlanul zajlik az elejétől a végéig",
                    "Hibák nyomát hagyja",
                    "Hosszú, és az egész anyagot lefedi"
                ],
                a: 1,
                explication: "Egy hibátlan alkalom főleg azt jelzi, hogy ismert terepen maradtál."
            },
            {
                q: "Mit ér mércének az, hogy „hat órát töltöttem vele”?",
                options: [
                    "Ez a legjobb elérhető mérce, mert objektív",
                    "A témától függ",
                    "Semmit, amíg nem tudjuk, mivel"
                ],
                a: 2,
                explication: "Az órák számolása kényelmes és megtévesztő; a kijavított hibák számolása őszinte."
            },
            {
                q: "Előre visz egy túl nehéz feladat?",
                options: [
                    "Igen: minél nehezebb a feladat, annál gyorsabb a fejlődés",
                    "Igen, ha kitartasz",
                    "Nem: a túl könnyű semmit sem tanít, a túl nehéz sem"
                ],
                a: 2,
                explication: "A képességeid határa: rendszeresen tévedni, és többnyire sikerrel járni."
            }
        ],

        // ---------------------------------------------------------------
        "sommeil-et-consolidation": [
            // 1. sorozat
            {
                q: "Mikor megy végbe a rögzülés nagy része?",
                options: [
                    "A tanulást követő alvás során",
                    "Magában a tanulásban, amíg figyelsz",
                    "A másnapi ismétlés során, reggel"
                ],
                a: 0,
                explication: "A tanulást követő éjszaka nem semleges idő, hanem munkaidő."
            },
            {
                q: "Azonos idő mellett mit ér este ismételni, aztán aludni?",
                options: [
                    "Többet, mint reggel ismételni egy másnapi dolgozatra",
                    "Kevesebbet, mint a dolgozat reggelén, kipihenten ismételni",
                    "Ugyanannyit"
                ],
                a: 0,
                explication: "A tartalom azonnal átmegy azon a szakaszon, amely rögzíti."
            },
            {
                q: "Mit cserélsz el egy tanulással átvirrasztott éjszakán?",
                options: [
                    "Alvást több emlékezetért",
                    "Három óra újraolvasást az egész nap rögzüléséért",
                    "Semmit, ha utána kipihened"
                ],
                a: 1,
                explication: "Három óra a legrosszabb módszerből az egész nap rendbetételéért cserébe."
            },
            // 2. sorozat
            {
                q: "Szünet-e, ha szünetben a telefonodat nézed?",
                options: [
                    "Igen, amíg nem dolgozol",
                    "Nem: ez témaváltás, nem szünet az emlékezet számára",
                    "Igen, ha rövid"
                ],
                a: 1,
                explication: "Egy valódi szünet időt ad az agynak, hogy újrajátssza, amit épp látott."
            },
            {
                q: "Bepótolható hétvégén egy rövid éjszaka?",
                options: [
                    "Igen, teljesen",
                    "Igen, ha két órával többet alszol",
                    "Nem: ami nem rögzült, utólag sem fog"
                ],
                a: 2,
                explication: "A rendszeres napirend többet nyom a latban, mint a hetente átaludt órák összege."
            },
            {
                q: "Mi befolyásolja a legjobban a rögzülést?",
                options: [
                    "A rendszeres napirend",
                    "A hét összes alvásórája",
                    "Az ébredés időpontja, jobban, mint a lefekvésé"
                ],
                a: 0,
                explication: "Egyben ezen a legkönnyebb változtatni."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "A tanulás körüli szervezés: a sorrend, a feldolgozás, az erőfeszítés, az éjszaka",
                "Minden héten többet dolgozni",
                "A megfelelő program kiválasztása"
            ],
            a: 0,
            explication: "A kezdő szint arról szólt, mikor térj vissza; ez arról, hogyan szervezd meg a kettő közötti időt."
        },
        {
            q: "Mi a közös a kevert gyakorlásban és a tudatos gyakorlásban?",
            options: [
                "Mindkettő több órát kíván",
                "Mindkettő csak a matematikában érvényes",
                "Mindkettő rontja a gyakorlás kényelmét, és javítja a későbbi eredményt"
            ],
            a: 2,
            explication: "Ez a hasznos nehézségek ismertetőjele, amellyel már a kezdő szinten találkoztál."
        },
        {
            q: "Egy tanuló harminc ugyanolyan típusú feladatot old meg egymás után, és mind sikerül. Mire lehet ebből következtetni?",
            options: [
                "Hogy érti a témát",
                "Hogy az alkalmazást gyakorolja, nem a választást",
                "Hogy készen áll arra, hogy a következő feladattípusra lépjen"
            ],
            a: 1,
            explication: "A nehéz részt — a típus felismerését — egyszer sem gyakorolta."
        },
        {
            q: "Miért olyan népszerű a jegyzetek átmásolása?",
            options: [
                "Mert hatékony",
                "Mert munkának látszik, és látható eredményt hoz",
                "Mert gyors"
            ],
            a: 1,
            explication: "A kéz dolgozik, nem az emlékezet. A kérdésekből álló jegyzetlap csúnya, és működik."
        },
        {
            q: "Ennek a szintnek melyik lépése kerül a legkevesebbe és hozza a legtöbbet?",
            options: [
                "Este ismételni, aztán aludni",
                "Hétvégén két óra plusz munka",
                "Más jegyzetelési módszerre váltani"
            ],
            a: 0,
            explication: "A létező legolcsóbb ismétlés csukott szemmel történik."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot alkalmazol?",
            options: [
                "Gondosabban, tisztán és színesen átmásolni minden egyes jegyzetet",
                "Keverni a feladattípusokat ahelyett, hogy csoportosítanád őket",
                "Hosszabb alkalmakat tartani"
            ],
            a: 1,
            explication: "Többet fogsz tévedni. Ez annak a jele, hogy működik."
        }
    ]
};
