// ===================================
// KÉRDÉSBANK — JOG ÉS ÜGYINTÉZÉS, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban. A francia jog szabályai franciaként
// szerepelnek; egyik kérdés sem szól összegről vagy értékhatárról.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "ou-trouver-le-droit": [
            // 1. sorozat
            {
                q: "Mi a jó kiindulópont egy hétköznapi jogi kérdésnél?",
                options: [
                    "A hivatalos kormányzati portál",
                    "Egy jogi kérdésekre szakosodott fórum",
                    "Egy internetes keresés első találata"
                ],
                a: 0,
                explication: "A hivatalos magyarázat, közérthető nyelven, az ügyintézés lépéseivel és az űrlapokkal. Franciaországban ez a service-public.fr."
            },
            {
                q: "Mire való a hivatalos jogszabálytár (Franciaországban a Légifrance) a kormányzati portállal szemben?",
                options: [
                    "Az ügyek online intézésére",
                    "Kérdés feltevésére egy jogásznak",
                    "A jogszabály szövegének elolvasására és a hatályának ellenőrzésére"
                ],
                a: 2,
                explication: "Akkor hasznos, ha egy paragrafust kell idézni, vagy meg kell győződni róla, hogy egy szabály még létezik."
            },
            {
                q: "Milyen csapda leselkedik egy interneten végzett jogi keresésre?",
                options: [
                    "Az eredmények túlságosan szakmaiak egy nem jogász számára",
                    "Túl kevés az eredmény",
                    "Az eredmények jó része egy másik ország jogáról szól"
                ],
                a: 2,
                explication: "A szabályok ott gyakran hasonlóak — és néha éppen fordítottak."
            },
            // 2. sorozat
            {
                q: "Hogyan különböztethető meg egy kötelezettség egy puszta szokástól?",
                options: [
                    "A szokás mindig régebbi",
                    "Hivatkozik-e az állítás egy ellenőrizhető jogszabályra?",
                    "A kötelezettséget a jogszabály szövege mindig nagybetűvel írja"
                ],
                a: 1,
                explication: "Jogszabály nélkül gyakorlatról van szó — néha kiválóról, de senkire sem kötelezőről."
            },
            {
                q: "Egy jól megfogalmazott MI-válasz egy jogi kérdésre:",
                options: [
                    "Megbízható, ha részletes",
                    "Egyenértékű egy hivatalos forrással",
                    "Lehet tökéletesen hibás: a forma nem jelzi a megbízhatóságot"
                ],
                a: 2,
                explication: "Mielőtt döntést alapozol rá, ellenőrizd egy hivatalos forrásban."
            },
            {
                q: "Elvehet-e egy szerződés egy törvény adta jogot?",
                options: [
                    "Igen, ha aláírtad",
                    "Igen, ha a feltétel félkövérrel szerepel és elfogadtad",
                    "Nem: a feltétel aláírva is hatástalan"
                ],
                a: 2,
                explication: "Az aláírás nem lemondás. Erről szól a haladó szint."
            }
        ],

        // ---------------------------------------------------------------
        "les-delais-qui-comptent": [
            // 1. sorozat
            {
                q: "Érvényes-e az elállási jog egy üzletben vásárolt termékre?",
                options: [
                    "Igen, 14 napig",
                    "Nem: csak távértékesítésnél érvényes",
                    "Igen, ha a terméket még egyáltalán nem használták"
                ],
                a: 1,
                explication: "Az a kereskedő, aki visszavesz egy helyben vásárolt terméket, gesztust tesz, nem kötelezettséget teljesít."
            },
            {
                q: "Meddig tart Franciaországban a törvényes kellékszavatosság?",
                options: [
                    "14 nap",
                    "1 év",
                    "2 év"
                ],
                a: 2,
                explication: "Minden kereskedőtől vásárolt termékre, üzletben és online egyaránt. Az Európai Unióban ez a legrövidebb megengedett időtartam."
            },
            {
                q: "A vélelmezési időszak alatt kinek mit kell bizonyítania?",
                options: [
                    "A vevőnek kell bizonyítania a hibát, számlával alátámasztva",
                    "Az eladónak kell bizonyítania, hogy a termék hibátlan volt",
                    "Mindenki a saját bizonyítékait hozza"
                ],
                a: 1,
                explication: "Ez a leghasznosabb pont mind közül, és a legkevésbé ismert."
            },
            // 2. sorozat
            {
                q: "Az eladó azt válaszolja: „az egyéves gyártói garancia lejárt”. Mit válaszolj?",
                options: [
                    "Hogy a törvényes kellékszavatosság ettől független, és két évig tart",
                    "Hogy akkor ki kell fizetni a javítást",
                    "Hogy meg kellett volna venni a kiterjesztett garanciát"
                ],
                a: 0,
                explication: "A kellékszavatosság az eladó kötelezettsége, független a gyártóétól."
            },
            {
                q: "Mikortól számít az elállási határidő?",
                options: [
                    "Az online leadott rendeléstől",
                    "A rendelés kifizetésétől",
                    "A termék átvételétől"
                ],
                a: 2,
                explication: "Egy határidő szinte mindig egy pontos eseménytől indul: az átvételtől vagy egy hiba felfedezésétől."
            },
            {
                q: "A francia jogban mikortól számít a rejtett hiba miatti fellépés határideje?",
                options: [
                    "A termék vásárlásának napjától",
                    "A hiba felfedezésétől",
                    "A termék gyártásának dátumától"
                ],
                a: 1,
                explication: "Két év a felfedezéstől számítva, ami jóval a vásárlás után is lehet."
            }
        ],

        // ---------------------------------------------------------------
        "ecrire-pour-que-ca-compte": [
            // 1. sorozat
            {
                q: "Melyik megfogalmazással foglalkoznak a legkönnyebben egy reklamációban?",
                options: [
                    "„Egy kereskedelmi gesztus”",
                    "„149 EUR visszatérítése”",
                    "„A kárral arányos kompenzáció”"
                ],
                a: 1,
                explication: "A számszerűsített kérést feldolgozzák, a homályosat lefűzik."
            },
            {
                q: "Mitől lesz egy levélből hivatalos felszólítás?",
                options: [
                    "Attól, hogy ügyvéd írja",
                    "Egy illetékbélyegtől",
                    "A szokásos öt elemtől, és attól, hogy kimondja: hivatalos felszólítás"
                ],
                a: 2,
                explication: "Nem ünnepélyes okirat: egy közönséges, helyesen megírt levél."
            },
            {
                q: "Mit bizonyít a tértivevényes ajánlott levél, amit egy e-mail nem mindig?",
                options: [
                    "Hogy a címzett megkapta",
                    "Hogy valóban írtál az eladónak",
                    "A levél feladásának dátumát"
                ],
                a: 0,
                explication: "Első reklamációhoz e-mail, ajánlott levél, amint egy határidő elkezd futni."
            },
            // 2. sorozat
            {
                q: "Miért kerüld a jelzőket egy reklamációs levélben?",
                options: [
                    "Meghosszabbítják az ügy intézési idejét az ügyfélszolgálaton",
                    "Tilosak",
                    "Gyengítik a levelet ahelyett, hogy erősítenék"
                ],
                a: 2,
                explication: "Az ügyfélszolgálat kérést és dátumot keres. Ha nem találja, az ügy vár."
            },
            {
                q: "Mire jó írásban megadni egy válaszhatáridőt?",
                options: [
                    "Az udvariasságra",
                    "Hogy elindítson valamit; kimondatlanul semmit sem ér",
                    "Hogy részletesebb választ kapj"
                ],
                a: 1,
                explication: "Tizenöt nap észszerű és szokásos."
            },
            {
                q: "Mit kérdez majd először egy egyeztető vagy egy bíró?",
                options: [
                    "Konzultált már ügyvéddel az ügyről?",
                    "Felhívta telefonon az ügyfélszolgálatot?",
                    "Küldött hivatalos felszólítást?"
                ],
                a: 2,
                explication: "Ez az ügy kiinduló irata — és néhány euróba kerül."
            }
        ],

        // ---------------------------------------------------------------
        "conserver-ses-documents": [
            // 1. sorozat
            {
                q: "Meddig őrizd meg a bérpapírjaidat?",
                options: [
                    "3 évig, mint a számlákat",
                    "Időkorlát nélkül",
                    "10 évig, mint a munkálatokét"
                ],
                a: 1,
                explication: "A nyugdíj kiszámításához kellenek, néha évtizedekkel később."
            },
            {
                q: "Miért kell Franciaországban tíz évig megőrizni az építési munkák számláit?",
                options: [
                    "Ennyi ideig tart a tízéves építési garancia",
                    "Adózási kötelezettség, ugyanúgy, mint az adóknál",
                    "A lakás későbbi eladása miatt"
                ],
                a: 0,
                explication: "Tíz év, amely alatt bizonyos hibákra még kiterjed a fedezet."
            },
            {
                q: "Kit terhel általában a bizonyítás?",
                options: [
                    "Azt, aki követel",
                    "A kereskedőt",
                    "Mindkét felet"
                ],
                a: 0,
                explication: "Innen ered annak prózai jelentősége, hogy mit őrzöl meg."
            },
            // 2. sorozat
            {
                q: "Mennyit ér egy dokumentumról készült olvasható fénykép?",
                options: [
                    "Semmit, csak az eredeti számít",
                    "Annyit, mint egy fénymásolat: a bizonyítás kezdetének számít",
                    "Eredetinek számít"
                ],
                a: 1,
                explication: "A levélváltások döntő többségében elegendő."
            },
            {
                q: "Melyik irat teszi lehetővé a kaucióból levont összegek vitatását?",
                options: [
                    "A beköltözéskor aláírt bérleti szerződés",
                    "A beköltözési jegyzőkönyv",
                    "A legutolsó havi lakbérnyugta"
                ],
                a: 1,
                explication: "Nélküle kiköltözéskor semmit sem lehet összehasonlítani."
            },
            {
                q: "Mi a baj egy doboznyi, tíz éve rendezetlen papírral?",
                options: [
                    "Egyenértékű az archívum hiányával: semmit sem találsz meg időben",
                    "Helyet foglal",
                    "A dokumentumok megrongálódnak"
                ],
                a: 0,
                explication: "Az éves rendezés többet ér a halmozásnál."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "Ismerni a polgári törvénykönyvet",
                "Tudni, hol keress, mennyi időd maradt, és mit írj",
                "Ügyvédet találni"
            ],
            a: 1,
            explication: "Három reflex, amely a hétköznapi nehézségek többségét megoldja."
        },
        {
            q: "Mi a közös egy dátum nélküli forrásban és egy túl korán kidobott iratban?",
            options: [
                "Mindkettő tilos",
                "Mindkettő a fogyasztóvédelemhez tartozik",
                "Mindkettő védhetetlenné tesz egy álláspontot, amikor meg kell védeni"
            ],
            a: 2,
            explication: "Az a jog, amelyet sem alátámasztani, sem bizonyítani nem lehet, nem használható jog."
        },
        {
            q: "Egy három hónapja online vásárolt készülék elromlik. Melyik jogra hivatkozz?",
            options: [
                "A törvényes kellékszavatosságra",
                "Az elállási jogra",
                "Semmire, a határidő már rég lejárt"
            ],
            a: 0,
            explication: "Az elállás már rég lejárt; a kellékszavatosság még közel két évig tart."
        },
        {
            q: "Miért rossz eszköz a telefon a reklamációhoz?",
            options: [
                "Nem hagy nyomot",
                "Sok időbe kerül a várakozás",
                "Az ügyfélszolgálatok nem veszik fel"
            ],
            a: 0,
            explication: "A reklamáció, amely számít, írásos, dátumozott és megőrzött."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot alkalmazol?",
            options: [
                "Minden online olvasott szabályt ellenőrizni a hivatalos portálon",
                "A leveleket kivétel nélkül mindig tértivevényes ajánlottként küldeni",
                "Mindent korlátlanul megőrizni"
            ],
            a: 0,
            explication: "Öt perc, amely megóv a legtöbb kellemetlen meglepetéstől."
        },
        {
            q: "Egy blogon olvasott szabály 2016-os, és világosnak tűnik. Mit tegyél?",
            options: [
                "Ellenőrizd: a jog azóta változhatott, és ezt semmi sem jelzi az olvasónak",
                "Bízz benne, a világosság jó jel",
                "Keress egy második blogot, amely ugyanezt mondja"
            ],
            a: 0,
            explication: "Két elavult forrásból nem lesz egy naprakész."
        }
    ]
};
