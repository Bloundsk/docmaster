// ===================================
// KÉRDÉSBANK — MUNKAHELYI EGÉSZSÉG, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban. Egyik kérdés sem szól tünetről vagy
// egészségi állapotról.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "regler-son-poste": [
            // 1. sorozat
            {
                q: "Hová kerüljön a képernyő teteje?",
                options: [
                    "Jóval a szemmagasság fölé, egyenes háttal",
                    "A lehető legalacsonyabbra",
                    "Szemmagasságba, vagy kicsivel alá"
                ],
                a: 2,
                explication: "A túl alacsony képernyő hét órán át előrebillenti a fejet."
            },
            {
                q: "Miért nem lehet jól elhelyezni egy asztalra tett laptopot?",
                options: [
                    "Túl kicsi",
                    "A képernyő egybe van építve a billentyűzettel: az egyik szükségszerűen rossz helyen van",
                    "Túlmelegszik"
                ],
                a: 1,
                explication: "Az állvány és a külön billentyűzet egy ellentmondást old fel, nem egy kényelmetlenséget."
            },
            {
                q: "Hogyan álljon a képernyő az ablakhoz képest?",
                options: [
                    "Szemben az ablakkal, teljes fényben",
                    "Merőlegesen",
                    "Háttal az ablaknak, a képernyő előtted"
                ],
                a: 1,
                explication: "Szemben az ablakkal ellenfényben dolgozol, háttal neki a képernyő tükröződik."
            },
            // 2. sorozat
            {
                q: "Mit jelez, ha gépelés közben megemelkedik a váll?",
                options: [
                    "Túl magas munkafelületet",
                    "A háthoz túl alacsony széket",
                    "Az asztalhoz képest túl széles billentyűzetet"
                ],
                a: 0,
                explication: "Az alkarnak vízszintesnek, a vállnak ellazultnak kell lennie."
            },
            {
                q: "Mi árt egy irodai munkahelyen?",
                options: [
                    "Az intenzív erőkifejtés",
                    "A napi billentyűleütések és egérkattintások száma",
                    "Az órákig fenntartott testhelyzet"
                ],
                a: 2,
                explication: "Ez jó hír is: egy testhelyzet beállítható."
            },
            {
                q: "Mikor kell beállítani a munkahelyet?",
                options: [
                    "Mielőtt fájna",
                    "Az első fájdalomnál",
                    "Amikor a kellemetlenség mindennapossá válik"
                ],
                a: 0,
                explication: "A jelzés eleinte gyenge, és megszokjuk, hogy ne törődjünk vele."
            }
        ],

        // ---------------------------------------------------------------
        "la-sedentarite": [
            // 1. sorozat
            {
                q: "A fizikai aktivitás és az ülő életmód ugyanaz?",
                options: [
                    "Nem: lehetsz sportos és ülő életmódú",
                    "Igen, az egyik pontosan a másik ellentéte",
                    "Igen, ha órákban számolunk"
                ],
                a: 0,
                explication: "Az egyiket erőkifejtéssel töltött percekben, a másikat üléssel töltött órákban mérik."
            },
            {
                q: "Mi a WHO támpontja felnőtteknek?",
                options: [
                    "Napi 30 perc igazán intenzív, verejtékes sport",
                    "Napi 10 000 lépés",
                    "Heti 150 perc mérsékelt intenzitású mozgás"
                ],
                a: 2,
                explication: "És ez a támpont semmit sem mond az üléssel töltött időről, amely egy második emelő."
            },
            {
                q: "Napi 9 óra ülés, heti 5 nap: mennyi egy munkaév alatt?",
                options: [
                    "Kb. 2 025 óra",
                    "Kb. 900 óra",
                    "Kb. 4 000 óra"
                ],
                a: 0,
                explication: "Heti 45 óra, negyvenöt héten át."
            },
            // 2. sorozat
            {
                q: "Mi számít leginkább az ülés megszakításában?",
                options: [
                    "A teljes időtartama, percben",
                    "Hogy megtörténjen",
                    "Az erőkifejtés valódi intenzitása"
                ],
                a: 1,
                explication: "Óránként két percre felállni semmiségnek tűnik, és elvégzi a dolgát."
            },
            {
                q: "Eltörli-e egy óra szombati sport a napi nyolc óra ülést?",
                options: [
                    "Igen, teljesen",
                    "Nem: javítja az aktivitást, de az ülő életmódon nem változtat",
                    "Igen, ha intenzív a sport"
                ],
                a: 1,
                explication: "Mindkettő számít, és a másodikat könnyebb kijavítani."
            },
            {
                q: "Melyik fogás helyez át heti több órát szervezési erőfeszítés nélkül?",
                options: [
                    "Állva vagy sétálva telefonálni",
                    "Jóval hosszabb szüneteket tartani",
                    "Széket cserélni"
                ],
                a: 0,
                explication: "Ahogy az is, ha a gyakran használt tárgyakat karnyújtáson kívülre teszed."
            }
        ],

        // ---------------------------------------------------------------
        "la-fatigue-visuelle": [
            // 1. sorozat
            {
                q: "Mit mond a „három húszas” szabály?",
                options: [
                    "20 perc szünet 20 óránként",
                    "20 percenként 6 méterre nézni 20 másodpercig",
                    "Percenként 20 pislogás 20 percen át"
                ],
                a: 1,
                explication: "A pontos számok keveset számítanak: az elv a fókuszáló izom ellazítása."
            },
            {
                q: "Mi történik a pislogással képernyő előtt?",
                options: [
                    "Idővel fokozatosan kissé gyakoribbá válik",
                    "Valójában egyáltalán nem változik",
                    "A gyakorisága jelentősen csökken"
                ],
                a: 2,
                explication: "A könnyfilm gyorsabban párolog, mint ahogy megújul — innen a száraz szem."
            },
            {
                q: "Mit mondanak a bizonyítékok a kékfény-szűrőkről?",
                options: [
                    "Jelentősen csökkentik a kék fényt",
                    "Nem sokat bizonyítottak a szemfáradtság terén",
                    "Védik a retinát"
                ],
                a: 1,
                explication: "Ami jobban megalapozott, az alvást érinti, és főleg attól függ, mikor hagyod abba."
            },
            // 2. sorozat
            {
                q: "Dolgozzunk sötétben bekapcsolt képernyővel?",
                options: [
                    "Igen, a sötétben jelentősen jobban pihen a szem a nap végén",
                    "Nem: a kontrasztot a szem hosszú távon rosszul viseli",
                    "Semmilyen hatása nincs"
                ],
                a: 1,
                explication: "Érdemes, ha a képernyő fényereje közel van a helyiségéhez."
            },
            {
                q: "Mire van szükség napokig tartó látási panasz esetén?",
                options: [
                    "Egy szoftveres szűrőre",
                    "Egy hosszabb szünetre",
                    "Egy vizsgálatra"
                ],
                a: 2,
                explication: "Gyakori ok a nem megfelelő szemüveg, és ezt semmilyen képernyőbeállítás nem javítja."
            },
            {
                q: "Miért fárad el a szem képernyő előtt?",
                options: [
                    "A képernyő túl sok hőt sugároz a szem felé",
                    "Túl élénkek a színek",
                    "Ellazulás nélkül néz egy közeli pontot"
                ],
                a: 2,
                explication: "Néhány másodpercre a távolba nézni elég a fókuszáló izom ellazításához."
            }
        ],

        // ---------------------------------------------------------------
        "les-pauses": [
            // 1. sorozat
            {
                q: "Milyen szünetet ír elő a francia törvény hat óra munka után?",
                options: [
                    "20 percet",
                    "45 percet",
                    "Egy órát"
                ],
                a: 0,
                explication: "Ez alsó határ, és semmit sem mond az elosztásról."
            },
            {
                q: "Mi véd jobban: egy blokk vagy több megszakítás?",
                options: [
                    "Egyetlen húszperces blokk",
                    "Több rövid megszakítás",
                    "A két megoldás pontosan egyenértékű"
                ],
                a: 1,
                explication: "Szokásos ergonómiai támpont: nagyjából öt perc minden ledolgozott órára."
            },
            {
                q: "Szünet-e, ha a szünetben egy hírfolyamot görgetsz?",
                options: [
                    "Igen, hiszen nem dolgozol",
                    "Nem: ugyanazt az erőforrást veszi igénybe, csak másként",
                    "Igen, ha rövid"
                ],
                a: 1,
                explication: "Tartós figyelem, közeli pont, képernyő: semmi sem változott."
            },
            // 2. sorozat
            {
                q: "Mit tesznek leggyakrabban, amikor nő a terhelés?",
                options: [
                    "Elhagyják a szüneteket, és visszaesik a teljesítmény",
                    "Meghosszabbítják őket",
                    "Jobban elosztják őket"
                ],
                a: 0,
                explication: "A „megnyert” időt hibákkal és terméketlen nap véggel fizeted meg."
            },
            {
                q: "Mi különbözteti meg a pihentető szünetet?",
                options: [
                    "Legalább tíz percig tart",
                    "Regisztert vált",
                    "Rögzített időpontban van"
                ],
                a: 1,
                explication: "Felállni, mozogni, máshová nézni, másról beszélni."
            },
            {
                q: "Megszakítja-e a napot a képernyő előtt elköltött ebéd?",
                options: [
                    "Igen, teljes értékű szünet",
                    "Igen, ha közben egyáltalán nem dolgozol és nem olvasol e-mailt",
                    "Nem: egy óráig tart, és semmit sem szakít meg"
                ],
                a: 2,
                explication: "Ugyanaz a logika, mint a telefonnál a szünetben: a regiszter nem változik."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Milyen kérdést tesz fel ez az útmutató, amelyet a Termelékenység nem?",
            options: [
                "Hogyan termeljünk naponta többet",
                "Hogyan szervezzük jobban a munkát",
                "Hogyan ne ártson nekünk a munka"
            ],
            a: 2,
            explication: "Két szomszédos téma, két különböző kérdés."
        },
        {
            q: "Mi a közös a munkahely beállításában és az ülés megszakításában?",
            options: [
                "Mindkettőt egyszer vagy automatikusan lehet megtenni, motiváció nélkül",
                "Mindkettőhöz eszköz kell",
                "Mindkettő hatása azonnal látszik"
            ],
            a: 0,
            explication: "Ettől megvalósíthatók, szemben a jó szándékú fogadalmakkal."
        },
        {
            q: "Valaki hetente háromszor fut, és naponta kilenc órát ül. Mit mondhatunk?",
            options: [
                "Minden rendben, a sport kompenzál",
                "Ebben az esetben a sport haszontalan",
                "Az aktivitás jó, az ülő életmód változatlan — két külön emelő"
            ],
            a: 2,
            explication: "Az évi 2 025 óra ülés egy jottányit sem változik."
        },
        {
            q: "Miért alkalmazzák ilyen kevesen ezeket a beállításokat?",
            options: [
                "A jelzés eleinte gyenge, és megszokjuk, hogy ne törődjünk vele",
                "Drágák",
                "Kevéssé ismertek"
            ],
            a: 0,
            explication: "Egy rossz testhelyzet nem fáj az első napon, és az első hónapban sem."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot alkalmazol?",
            options: [
                "Beállítani a képernyő magasságát",
                "Drága ergonomikus irodai széket venni",
                "Kékfény-szűrőt telepíteni a képernyőre"
            ],
            a: 0,
            explication: "Két perc, és a beállítás hónapokig kitart."
        },
        {
            q: "Egy fájdalom a csuklóban három hete tart. Mit tegyél?",
            options: [
                "Fordulj orvoshoz: ez már nem munkahely-beállítási kérdés",
                "Cserélj egeret",
                "Várd ki, hogy elmúljon"
            ],
            a: 0,
            explication: "A beállítás megelőz; nem kezeli azt, ami már kialakult."
        }
    ]
};
