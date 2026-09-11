// ===================================
// KÉRDÉSBANK — PÉNZÜGYEK, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban. A befektetési keretek franciák,
// és ezt a kérdések is kimondják.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lépargne": [
            // 1. sorozat
            {
                q: "Mit jelent a vésztartalék?",
                options: [
                    "3–6 havi nettó jövedelmet, adó előtt",
                    "Az éves fizetés 10%-át, félretéve",
                    "3–6 havi szokásos kiadást"
                ],
                a: 2,
                explication: "Valóban a kiadások, nem a jövedelem. A kettő közti különbség gyakran 30%."
            },
            {
                q: "Miért kell ezt a tartalékot a befektetés előtt képezni?",
                options: [
                    "Hogy ne kelljen rossz pillanatban eladni a befektetéseket",
                    "Mert a törvény előírja ezt a tartalékot minden befektetés előtt",
                    "Mert kicsit hosszabb távon is többet hoz, mint maga a tőzsde"
                ],
                a: 0,
                explication: "A pénzügyi meglepetések gyakran akkor jönnek, amikor rosszul megy a gazdaság, vagyis amikor a piacok lent vannak."
            },
            {
                q: "Hová tedd a vésztartalékot?",
                options: [
                    "48 órán belül elérhető, tőkekockázat nélküli helyre",
                    "Egy világrészvény-ETF-be, mert jövedelmezőbb",
                    "Egy 5 évre lekötött befektetésbe, hogy ne legyen kísértés hozzányúlni"
                ],
                a: 0,
                explication: "Ez nem befektetés, hanem biztosítás: a hozam keveset számít, az elérhetőség mindent."
            },
            // 2. sorozat
            {
                q: "Havi kiadásaid 1 600 EUR. Legalább mekkora tartalékot célozz?",
                options: ["1 600 EUR", "4 800 EUR", "16 000 EUR"],
                a: 1,
                explication: "3 hónap × 1 600 EUR = 4 800 EUR. A felső határ, 6 hónappal, 9 600 EUR lenne."
            },
            {
                q: "Melyik megtakarítási módszer bizonyul a leghatásosabbnak hosszú távon?",
                options: [
                    "Félretenni, ami a hónap végén a számlán marad",
                    "Évente egyszer egy nagy összeget megtakarítani",
                    "Automatikus átutalás a fizetésnap utáni napon"
                ],
                a: 2,
                explication: "Soha nem marad semmi: a kiadások maguktól igazodnak a rendelkezésre álló összeghez."
            },
            {
                q: "Miért nem ajánlott ennek a tartaléknak a hozamát optimalizálni?",
                options: [
                    "Mert a lehetséges nyereség elhanyagolható, a kockázat viszont nem",
                    "Mert a nyereséget ott az első eurótól 100%-ban megadóztatnák",
                    "Mert egy államilag szabályozott megtakarítási számlán ez egyszerűen tilos"
                ],
                a: 0,
                explication: "Ha kockázatot vállalsz a biztonsági párnádon, megszünteted a létjogosultságát."
            }
        ],

        // ---------------------------------------------------------------
        "linvestissement": [
            // 1. sorozat
            {
                q: "Mit jelent pénzügyi szempontból „befektetni”?",
                options: [
                    "Kockázat nélkül elhelyezni a pénzt",
                    "Egy várt hozamért cserébe elfogadni a veszteség kockázatát",
                    "Rábízni a pénzt egy szakemberre, aki gyarapítja"
                ],
                a: 1,
                explication: "A kockázat nem mellékhatás: a hozam ellentételezése."
            },
            {
                q: "Mit ígér egy magas hozamú, kockázatmentes befektetés?",
                options: [
                    "Nagy vagyonoknak fenntartott terméket",
                    "Csalást, definíció szerint",
                    "Egy klasszikus, garantált francia fonds euros-t"
                ],
                a: 1,
                explication: "A magas hozam és a kockázat hiánya összeegyeztethetetlen. Ez a legmegbízhatóbb figyelmeztető jel."
            },
            {
                q: "Mi a kamatos kamat?",
                options: [
                    "A hozam, amely maga is hozamot termel",
                    "Az árfolyamnyereség adója",
                    "Több kamatozó megtakarítási számla összege"
                ],
                a: 0,
                explication: "Néhány év alatt szerény, több évtized alatt a meghatározó tényezővé válik."
            },
            // 2. sorozat
            {
                q: "Amélie 25, Bruno 35 évesen kezd havi 200 EUR-t befektetni, mindketten 65 éves korukig, 5%-on. Mennyivel fizet be kevesebbet Bruno, és mennyit veszít?",
                options: [
                    "24 000 EUR-val kevesebbet, nagyjából 24 000 EUR-val kisebb eredményt",
                    "24 000 EUR-val kevesebbet, nagyjából 139 000 EUR-val kisebb eredményt",
                    "Semmit, nagyobb befizetéssel behozza"
                ],
                a: 1,
                explication: "Az eredmény különbsége közel hatszorosa az erőfeszítés különbségének. Ez a tíz év nem hozható be."
            },
            {
                q: "10 000 EUR 25 évre, 6% bruttó hozammal: mekkora a különbség a 0,2% és a 2% éves költség között?",
                options: ["Kb. 1 500 EUR", "Kb. 5 000 EUR", "Kb. 14 200 EUR"],
                a: 2,
                explication: "Több, mint az eredetileg befektetett tőke. A költségek az egyetlen változó, amelyet teljesen te irányítasz."
            },
            {
                q: "Miért nem kell a rendszeres befektetésnél a jó pillanatot keresni?",
                options: [
                    "Mert minimális hozamot garantál",
                    "Mert esésnél gépiesen több befektetési jegyet veszel",
                    "Mert eltörli a költségeket"
                ],
                a: 1,
                explication: "Fix összeg fix időpontban megszünteti az időzítés kérdését, amelyet senki sem ural tartósan."
            }
        ],

        // ---------------------------------------------------------------
        "les-etf": [
            // 1. sorozat
            {
                q: "Mit csinál egy ETF, azaz indexkövető alap?",
                options: [
                    "Egy alapkezelő révén próbálja megverni a piacot",
                    "Egy index teljesítményét másolja",
                    "Garantálja a befektetett tőkét"
                ],
                a: 1,
                explication: "Nem próbál jobb lenni az indexnél, és ettől nagyon kevésbe kerül."
            },
            {
                q: "Mit veszel egy MSCI World indexet követő ETF egy jegyével?",
                options: [
                    "Egy nagy nemzetközi vállalat részvényét, amelyet szilárdsága miatt választottak",
                    "Egy több ország által fedezett nemzetközi államkötvényt",
                    "Több mint 1 500 vállalat töredékét 23 fejlett országból"
                ],
                a: 2,
                explication: "Ezt a megoszlást tételenként összerakni egy magánszemély számára elérhetetlen lenne, már a költségek miatt is."
            },
            {
                q: "Megvéd-e egy ETF egy általános piaci eséstől?",
                options: [
                    "Igen, hiszen éppen ez a diverzifikáció értelme, amelyet az ETF a portfólióba hoz",
                    "Igen, nyolc év tartás után a kockázat végül eltűnik",
                    "Nem: egy vállalathoz kötődő kockázattól véd, nem a piaci kockázattól"
                ],
                a: 2,
                explication: "Egy világrészvény-ETF a korábbi válságokban több mint 30%-ot veszített. Ez a normális működése."
            },
            // 2. sorozat
            {
                q: "Mi az első szempont egy ETF kiválasztásánál?",
                options: [
                    "A teljesítménye az éppen lezárult évben, a piaci indexszel összevetve",
                    "A folyamatos költségei, amelyeket gyakran TER-ként jelölnek",
                    "A kibocsátó alapkezelő társaság neve és a székhelyének országa"
                ],
                a: 1,
                explication: "Ez az egyetlen előre ismert elem. A hozamot nem lehet megrendelni."
            },
            {
                q: "Mi a különbség a felhalmozó és az osztalékfizető ETF között?",
                options: [
                    "Az osztalékfizető kizárólag a szakmai befektetőknek szól",
                    "A felhalmozó tőkegarantált",
                    "A felhalmozó automatikusan újrabefekteti az osztalékot"
                ],
                a: 2,
                explication: "Az automatikus újrabefektetés közvetlenül a kamatos kamatot szolgálja."
            },
            {
                q: "Mit mutatnak a 10 éves időtávon aktív alapokat és indexeket összehasonlító tanulmányok?",
                options: [
                    "Az aktív alapok hosszú távon szinte mindig megverik a referenciaindexüket",
                    "A kettő pontosan egyenértékű, ha minden évet összehasonlítunk",
                    "Az aktív alapok többsége a költségek levonása után rosszabbul teljesít"
                ],
                a: 2,
                explication: "Ez nem jelenti, hogy egyetlen alapkezelő sem veri meg a piacot, csak azt, hogy előre megmondani, melyik fogja, egészen más kérdés."
            }
        ],

        // ---------------------------------------------------------------
        "la-gestion-du-risque": [
            // 1. sorozat
            {
                q: "Mit jelent a pénzügyekben a „kockázat” szó?",
                options: [
                    "Az ingadozások mértékét, felfelé és lefelé egyaránt",
                    "Annak esélyét, hogy mindent elveszítünk",
                    "A levont költségek összegét"
                ],
                a: 0,
                explication: "Minél erősebben emelkedhet egy befektetés, annál mélyebbre is eshet. A kettő mindig együtt jár."
            },
            {
                q: "Melyik kérdés határozza meg az elfogadható kockázati szintet?",
                options: [
                    "Milyen hozamot célzok ezzel a befektetéssel?",
                    "Hány éves vagyok?",
                    "Mennyi idő múlva lesz szükségem erre a pénzre?"
                ],
                a: 2,
                explication: "Az időtáv parancsol, nem a hozamra irányuló ambíció."
            },
            {
                q: "Egy 18 hónap múlva esedékes kiadásra részvénybe fektetni:",
                options: [
                    "Merész, de védhető, ha elfogadjuk, hogy a tőke mozog",
                    "Rosszul megtervezett: az időtáv semmi teret nem hagy egy esésből való felépülésre",
                    "A lehető legjobb választás egy rövid, mindössze hároméves célhoz, ha a piac emelkedik"
                ],
                a: 1,
                explication: "Két éven belül semmilyen tőkekockázat nem indokolható."
            },
            // 2. sorozat
            {
                q: "Tíz részvény ugyanabból az ágazatból: diverzifikáció ez?",
                options: [
                    "Igen, tíz jól kiválasztott tétel bőven elég egy portfólió diverzifikálásához",
                    "Igen, ha mind a tíz tétel a helyi hazai piacon kívüli",
                    "Nem: a valódi megosztás több eszközosztályon, térségen és ágazaton alapul"
                ],
                a: 2,
                explication: "Egy egész ágazat egy tömbben zuhanhat. A diverzifikáció több szinten működik."
            },
            {
                q: "Melyik próbát végezd el, mielőtt megválasztod a megosztást?",
                options: [
                    "Megkérdezni magadtól, kitartanál-e eladás nélkül egy 35%-os esés után",
                    "Megnézni az elmúlt három év hozamát",
                    "Összehasonlítani három bróker díjait"
                ],
                a: 0,
                explication: "A megfelelő kockázati szint az, amely mellett alszol, és a viharban is kitartasz a stratégiád mellett."
            },
            {
                q: "Mikor válik egy esés valódi veszteséggé?",
                options: [
                    "Az eladás pillanatában",
                    "Amint megjelenik a kivonaton",
                    "Egy teljes év esés után"
                ],
                a: 0,
                explication: "Amíg nem adsz el, az esés virtuális marad. Ezért fontos, hogy soha ne legyél eladásra kényszerítve."
            }
        ],

        // ---------------------------------------------------------------
        "la-fiscalité-de-lépargne": [
            // 1. sorozat
            {
                q: "Mit nevezünk adózási „keretnek”?",
                options: [
                    "Egy önálló befektetéstípust, a részvények és a kötvények mellett",
                    "Az adóhivatal által évente postán küldött dokumentumot",
                    "Azt a „tárolót”, amelyben a befektetéseid vannak"
                ],
                a: 2,
                explication: "Két azonos befektetés a keretétől függően nagyon eltérő összeget hagyhat."
            },
            {
                q: "Hány év után ad jövedelemadó-mentességet a francia PEA?",
                options: ["2 év", "5 év", "8 év"],
                a: 1,
                explication: "A szociális hozzájárulás fizetendő marad. 5 év előtti kivét megszünteti a tervet."
            },
            {
                q: "Hány év után ad éves adómentes keretet a francia assurance-vie?",
                options: ["5 év", "8 év", "12 év"],
                a: 1,
                explication: "Az óra a szerződés megnyitásakor indul, nem az első jelentős befizetéskor."
            },
            // 2. sorozat
            {
                q: "Mekkora az egységes átalányadó egy francia hagyományos értékpapírszámlán?",
                options: ["17,2%", "30%", "45%"],
                a: 1,
                explication: "Vagyis 12,8% jövedelemadó és 17,2% szociális hozzájárulás."
            },
            {
                q: "10 000 EUR árfolyamnyereségen mekkora a különbség egy értékpapírszámla és egy 5 évnél régebbi PEA között?",
                options: ["Kb. 1 280 EUR", "Kb. 300 EUR", "Semennyi"],
                a: 0,
                explication: "3 000 EUR adó szemben 1 720 EUR szociális hozzájárulással, pontosan ugyanazokkal a befektetésekkel."
            },
            {
                q: "Miért érdemes korán megnyitni egy PEA-t, akár kis összeggel is?",
                options: [
                    "Hogy nyitási jutalmat kapj",
                    "Mert az adózási óra a nyitáskor indul, és nem hozható be",
                    "Mert a kezelési költségek a szerződés korával csökkennek"
                ],
                a: 1,
                explication: "Ez azon ritka pénzügyi döntések egyike, amely szinte semmibe sem kerül, és később nem pótolható."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        // 1. sorozat
        {
            q: "Milyen sorrendben kezeld a pénzügyi helyzetedet?",
            options: [
                "Előbb befektetni, aztán a nyereségből megtakarítani",
                "Vésztartalékot képezni, aztán a többletet befektetni",
                "Mindenekelőtt egy PEA-t nyitni"
            ],
            a: 1,
            explication: "Biztonsági párna nélkül befektetni oda vezet, hogy a legrosszabb pillanatban kell eladni."
        },
        {
            q: "Melyik tényező nyom a legtöbbet egy nagyon hosszú távú befektetés eredményén?",
            options: ["A jó belépési pillanat megválasztása", "A birtokolt eszközök száma", "A befektetve töltött idő"],
            a: 2,
            explication: "Szerényen és korán kezdeni messze legyőzi a nagy összeggel és későn kezdést."
        },
        {
            q: "Az alábbiak közül melyiket irányítod teljesen előre?",
            options: ["A költségeket", "A várható hozamot", "Egy válság időtartamát"],
            a: 0,
            explication: "A hozamot nem lehet megrendelni, a költségeket igen. Ezért aránytalanul fontosak."
        },
        // 2. sorozat
        {
            q: "Egy barátod évi 12%-os, garantáltan kockázatmentes befektetést ajánl. Mit tegyél?",
            options: [
                "Utasítsd el: a magas hozam és a kockázat hiánya összeegyeztethetetlen",
                "Fektess be egy kis összeget, hogy kipróbáld az ígéret komolyságát",
                "Kérj magasabb hozamot"
            ],
            a: 0,
            explication: "Mindig ellenőrizd, hogy a közvetítő szerepel-e a felügyeleti hatóság nyilvántartásában."
        },
        {
            q: "18 hónap múlva 15 000 EUR önerő kell egy lakásvásárláshoz. Milyen irányt válassz?",
            options: [
                "Részvényeket, a nyereség maximalizálására",
                "Semmilyen tőkekockázatot: az időtáv túl rövid",
                "50% részvény, 50% fonds euros"
            ],
            a: 1,
            explication: "Két éven belül egy esésnek nincs ideje elnyelődni."
        },
        {
            q: "Milyen gondolkodási sorrendet kövess egy befektetés kiválasztásakor?",
            options: [
                "Az igény, aztán az időtáv, aztán a befektetés, aztán a keret",
                "Az adózási keret, aztán a befektetés, aztán az igény",
                "A feltüntetett hozam, aztán a többi"
            ],
            a: 0,
            explication: "Egy adóelőny soha nem ellensúlyozza a magas költségeket vagy egy nem megfelelő befektetést."
        }
    ]
};
