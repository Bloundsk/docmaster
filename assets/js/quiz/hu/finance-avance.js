// ===================================
// KÉRDÉSBANK — PÉNZÜGYEK, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "ordre-de-retrait": [
            // 1. sorozat
            {
                q: "Mire vonatkozik az adózás egy kivétnél?",
                options: [
                    "Csak a kivétben lévő nyereségrészre",
                    "A teljes kivett összegre, nyereségre és tőkére együtt",
                    "Az eredetileg befizetett tőkére"
                ],
                a: 0,
                explication: "Egy kivét tőkéből — amely soha nem adózik — és nyereségből áll. Egy 20% nyereséget tartalmazó szerződésnél csak az összeg ötödére keletkezik adó."
            },
            {
                q: "Mi lesz az assurance-vie éves adómentes keretével, ha nem használod ki?",
                options: [
                    "Végleg elvész",
                    "Átkerül a következő évre",
                    "Adócsökkentéssé alakul"
                ],
                a: 0,
                explication: "Minden évben megújul, de nem vihető át. Ha egyszerre szünteted meg a szerződést, az összes következő évi keretet elpazarolod."
            },
            {
                q: "Miért változtatja meg a kivétek sorrendje a nettó összeget?",
                options: [
                    "Mert a bankok eltérő díjakat számolnak fel",
                    "Mert az adókulcs a hónap napjától függően változik",
                    "Mert minden keretnek saját kivétkori adózása van"
                ],
                a: 2,
                explication: "Azonos tőke és hozam mellett az egyik keretből kivenni a másik helyett megváltoztatja a levonást — néha több mint 1 200 EUR-val 20 000 EUR kivétnél."
            },
            // 2. sorozat
            {
                q: "Mi értelme van egy kivétet két naptári évre elosztani?",
                options: [
                    "Kétszer kihasználni az éves adómentes keretet",
                    "Csökkenteni a kivétkor levont brókeri és banki díjakat",
                    "Elkerülni a szociális hozzájárulást a nyereségen"
                ],
                a: 0,
                explication: "Ha a nyereséget egyetlen adóévbe sűríted, túllépi a keretet, és ami túllép, teljes kulccsal adózik."
            },
            {
                q: "Mi terheli egy 5 évnél régebbi PEA-ból történő kivétet?",
                options: [
                    "A szociális hozzájárulás, de a jövedelemadó nem",
                    "Semmi",
                    "A jövedelemadó, de a szociális hozzájárulás nem"
                ],
                a: 0,
                explication: "Az előny a jövedelemadóra vonatkozik. A 17,2%-os szociális hozzájárulás minden esetben fizetendő."
            },
            {
                q: "A befektetés melyik szakaszát hanyagolják el a leggyakrabban?",
                options: [
                    "Az eszközök kiválasztását",
                    "A kiszállást, vagyis a kivét módját",
                    "A számla megnyitását"
                ],
                a: 1,
                explication: "Sokat gondolkodunk azon, hogyan fektessünk be. Pedig az adózás valójában a kivétnél jelenik meg."
            }
        ],

        // ---------------------------------------------------------------
        "obligations-et-taux": [
            // 1. sorozat
            {
                q: "Mi történik egy már birtokolt kötvénnyel, amikor a kamatok emelkednek?",
                options: [
                    "Az ára azonnal emelkedik",
                    "Az ára csökken",
                    "Az ára nem mozdul"
                ],
                a: 1,
                explication: "Egy 1%-ot fizető papír eredeti áron eladhatatlanná válik, ha az új kibocsátások 3%-ot hoznak. Az ára addig csökken, amíg a hozama összemérhető nem lesz."
            },
            {
                q: "Mit mér egy kötvény durationje?",
                options: [
                    "A kamatváltozásokra való érzékenységét",
                    "A kötvény visszafizetéséig hátralévő időt",
                    "A kölcsönvevő állam vagy vállalat pénzügyi szilárdságát"
                ],
                a: 0,
                explication: "Közelítő szabály: 1 százalékpontos kamatemelkedés duration-évenként nagyjából 1%-kal csökkenti az árat."
            },
            {
                q: "+1 százalékpont kamat: mekkora nagyjából az esés egy 10 éves durationű kötvénynél?",
                options: [
                    "Kb. 1%",
                    "Kb. 10%",
                    "Kb. 100%"
                ],
                a: 1,
                explication: "Szemben a 2 éves duration melletti alig 2%-kal. Egy az ötszöröshöz arány két, „nemfizetési kockázat nélküli” befektetés között."
            },
            // 2. sorozat
            {
                q: "Mire vonatkozik egy államkötvény biztonsága?",
                options: [
                    "Az ára stabilitására a teljes futamidő alatt",
                    "A kölcsönvevő nemfizetési kockázatára",
                    "Mindkettőre egyszerre"
                ],
                a: 1,
                explication: "Egy hosszú durationű államkötvényalap egy év alatt több mint 15%-ot is veszíthet anélkül, hogy bármely állam fizetésképtelen lett volna."
            },
            {
                q: "Mi a különbség a közvetlenül birtokolt kötvény és a kötvényalap között?",
                options: [
                    "Az alap garantálja a tőkét, a kötvény nem",
                    "Semmi: a gyakorlatban két különböző szó pontosan ugyanarra a dologra",
                    "Az alapnak nincs lejárata, és folyamatosan megújítja a papírjait"
                ],
                a: 2,
                explication: "A lejáratig tartott kötvény visszafizeti a névértéket: az esés eltűnik. Egy alapban valódi, és a durationjéhez közeli idő alatt kompenzálódik."
            },
            {
                q: "Hová tedd azt az összeget, amelyre két év múlva szükséged lesz?",
                options: [
                    "Hosszú lejáratú kötvényekbe, mert jóval jövedelmezőbbek",
                    "Rövid durationű vagy árkockázat nélküli eszközökbe",
                    "Mindegy, a kötvények biztonságosak"
                ],
                a: 1,
                explication: "Egy közeli igény nem bír el egy olyan áresést, amely tíz év alatt tűnne el."
            }
        ],

        // ---------------------------------------------------------------
        "diversification-reelle": [
            // 1. sorozat
            {
                q: "Mi jellemzi a valódi diverzifikációt?",
                options: [
                    "A birtokolt tételek száma",
                    "Legalább tíz különböző alap jelenléte a portfólióban",
                    "Hogy az eszközök nem esnek egyszerre"
                ],
                a: 2,
                explication: "Húsz részvény ugyanabból az országból és ágazatból egyetlen pozíció, húsz darabra vágva."
            },
            {
                q: "Mekkora súlyt képvisel Franciaország a világ tőzsdei kapitalizációjában?",
                options: [
                    "Kb. 3%",
                    "Kb. 15%",
                    "Kb. 30%"
                ],
                a: 0,
                explication: "A francia megtakarítók mégis jellemzően részvényeik több mint felét hazai papírokban tartják — tizenhatszoros túlsúly. A minta minden országban hasonló."
            },
            {
                q: "Mi lesz a korrelációkkal egy válság idején?",
                options: [
                    "Nőnek, az eszközök inkább együtt esnek",
                    "Csökkennek, így a diverzifikáció jobban véd",
                    "A válság elejétől a végéig teljesen stabilak maradnak"
                ],
                a: 0,
                explication: "Éppen akkor működik rosszabbul a diverzifikáció, amikor számítunk rá. Tompít, de nem véd."
            },
            // 2. sorozat
            {
                q: "Mi a hazai torzítás?",
                options: [
                    "Otthonról, bank vagy közvetítő nélkül, egyedül befektetni",
                    "A saját ország vállalatainak túlsúlyozására való hajlam",
                    "Egy adó a külföldi befektetésekre"
                ],
                a: 1,
                explication: "A megtakarító így vagyonát arra a gazdaságra összpontosítja, amelytől már az állása és gyakran a lakása is függ."
            },
            {
                q: "Egy amerikai index dollárban 10%-ot emelkedik. Mit kap egy euróban számoló befektető?",
                options: [
                    "10%-ot, a devizának nincs hatása a végeredményre",
                    "Mindig kevesebbet 10%-nál, bármilyen időszakot nézünk",
                    "A dollár euróhoz viszonyított alakulásától függ"
                ],
                a: 2,
                explication: "Ha a dollár ugyanennyit gyengült, az euróban mért nyereség nulla. Néhány év alatt ez a hatás uralhatja az eredményt."
            },
            {
                q: "Hogyan ellenőrizd, hogy az alapok nem fedik-e egymást?",
                options: [
                    "A múltbeli teljesítményük összehasonlításával",
                    "Annak ellenőrzésével, hogy különbözik a nevük",
                    "A legnagyobb tételeik összehasonlításával"
                ],
                a: 2,
                explication: "Egy „világ”, egy „észak-amerikai” és egy „technológiai” alap gyakran háromszor ugyanazokat a nagy papírokat tartalmazza."
            }
        ],

        // ---------------------------------------------------------------
        "facteur-comportemental": [
            // 1. sorozat
            {
                q: "Mit látunk, ha egy alap teljesítményét a befektetőiével vetjük össze?",
                options: [
                    "A befektetők átlagosan kevesebbet érnek el, mint az alap",
                    "A befektetők átlagosan jóval többet érnek el, mint maga az alap",
                    "A kettő eleve azonos"
                ],
                a: 0,
                explication: "A közzétett teljesítmény azt feltételezi, hogy az elejétől a végéig befektetve maradtunk. A befizetések viszont emelkedések után, a kivétek esések után érkeznek."
            },
            {
                q: "Mi lesz 10 000 EUR-ból, ha kimarad a 20 legjobb tőzsdenap, szemben a folyamatos befektetéssel elért 60 000 EUR-val?",
                options: [
                    "Kb. 50 000 EUR",
                    "Kb. 18 000 EUR",
                    "Kb. 5 000 EUR"
                ],
                a: 1,
                explication: "Nagyjából húsz nap, több ezerből, magyarázza az eredmény kétharmadát. Senki sem tudja őket előre azonosítani."
            },
            {
                q: "Hol vannak leggyakrabban a legjobb tőzsdenapok?",
                options: [
                    "Nyugodt, emelkedő időszakokban",
                    "Egyenletesen elosztva az egész évben",
                    "Közvetlenül a legrosszabbak mellett, a zűrzavar közepén"
                ],
                a: 2,
                explication: "Ezért a kiszállás, hogy „kivárjuk, míg lecsillapodik”, szinte mindig a fellendülés kihagyását jelenti."
            },
            // 2. sorozat
            {
                q: "Hogyan nyilvánul meg a veszteségkerülés?",
                options: [
                    "Elvből és végleg elutasítunk minden kockázatos befektetést, még nagyon hosszú időtávon is",
                    "Gyorsan elfelejtjük a veszteségeket, és ugyanazokat a hibákat követjük el",
                    "A veszteséget nagyjából kétszer olyan erősen éljük meg, mint egy azonos nyereséget"
                ],
                a: 2,
                explication: "Ez az aszimmetria magyarázza, hogy egy 20%-os esés eladásra késztet, egy 20%-os emelkedés viszont nem késztet vásárlásra."
            },
            {
                q: "Milyen ellenszert javasol az útmutató a hirtelen hozott döntések ellen?",
                options: [
                    "Hideg fejjel leírni az allokációt és a zuhanás esetére tervezett lépést",
                    "Jobban bízni a saját megérzésünkben, pontosan a vétel vagy az eladás pillanatában",
                    "Harmadik félre bízni a kezelést, aki érzelmek nélkül dönt"
                ],
                a: 0,
                explication: "Az ellenszer nem a jellemerő: a hideg fejjel írt dokumentum jobban kitart, mint a hirtelen hozott elhatározás."
            },
            {
                q: "Miért becsüljük túl, mekkora esést bírunk el?",
                options: [
                    "Mert az esések nagyobbak a vártnál",
                    "Mert a statisztikák félrevezetők",
                    "Mert a valódi próbatételt szorongató körülmények kísérik, amelyek az elméleti gyakorlatból hiányoznak"
                ],
                a: 2,
                explication: "Riasztó címek, aggódó környezet, néha veszélybe kerülő állás: ezek egyike sem létezik, amikor elképzeljük a helyzetet."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        // 1. sorozat
        {
            q: "Mi köti össze ennek a szintnek a mechanizmusait?",
            options: [
                "Magyarázat előtt ellentmondanak az intuíciónak",
                "Csak a már felhalmozott nagy vagyonokat érintik",
                "Mindegyik a gazdasági helyzettől függ"
            ],
            a: 0,
            explication: "Kötvény, amely esik, amikor a kamatok emelkednek, bőséges portfólió, amely semmit sem diverzifikál, befektető, aki kevesebbet keres, mint az alapja: mindegyik abszurdnak tűnik, aztán magától értetődőnek."
        },
        {
            q: "Két embernek ugyanaz a portfóliója, és ugyanannyit vesznek ki. Mitől térhet el a nettó összegük?",
            options: [
                "A bankjuktól és az általa minden egyes kivétkor felszámított díjaktól",
                "Attól, melyik keretből vesznek ki, és hogyan osztják el a kivétet",
                "Semmitől, a nettó összeg mindkét esetben pontosan ugyanakkora marad"
            ],
            a: 1,
            explication: "A kivétek sorrendje önálló emelő, és azon kevesek egyike, amely többletkockázat nélkül működik."
        },
        {
            q: "Milyen információt nézz meg, mielőtt kötvényalapot adsz a portfólióhoz?",
            options: [
                "A tavalyi teljesítményét",
                "A benne lévő kötvények számát",
                "A durationjét"
            ],
            a: 2,
            explication: "Megmutatja, mekkora esésre számíthatsz, ha a kamatok emelkednek — ez a leghasznosabb információ a kimutatott hozam előtt."
        },
        // 2. sorozat
        {
            q: "Egy portfólióban húsz alap van. Mit mondhatunk ebből a diverzifikációjáról?",
            options: [
                "Hogy nagyon diverzifikált, már a portfólió felépítéséből adódóan",
                "Semmit: minden attól függ, mennyire fedik egymást az alapok",
                "Hogy a tételek nagy száma miatt túl drága a tartása és a követése"
            ],
            a: 1,
            explication: "A tételek száma semmit sem mér. Csak az számít, mi esik egyszerre."
        },
        {
            q: "Melyik hiba kerül statisztikailag a legtöbbe egy hosszú távú befektetőnek?",
            options: [
                "Egy kicsit drágább alapot választani",
                "Esés idején kiszállni a piacról",
                "Túl gyakran újrasúlyozni"
            ],
            a: 1,
            explication: "A legjobb napok kihagyása többe kerül, mint amennyit a legrosszabbak elkerülése hoz, és a kettő egyszerre történik."
        },
        {
            q: "Mit kell megjegyezni egy alap és befektetői teljesítménye közötti különbségből?",
            options: [
                "Hogy az alapok évek óta hamis vagy rosszul számolt adatokat közölnek",
                "Hogy a közben hozott döntéseknek mérhető ára van",
                "Hogy a költségek egymagukban megmagyarázzák a teljes különbséget"
            ],
            a: 1,
            explication: "Ez a különbség sem az alapból, sem a költségekből nem jön: azokból az időpontokból, amikor be- és kiszálltunk."
        }
    ]
};
