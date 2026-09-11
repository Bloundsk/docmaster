// ===================================
// KÉRDÉSBANK — TÁRGYALÁS ÉS KOMMUNIKÁCIÓ, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "preparer-avant-de-parler": [
            // 1. sorozat
            {
                q: "Melyik a leginkább elhanyagolt kérdés egy tárgyalás előtt?",
                options: [
                    "Mit teszek, ha nem kapom meg?",
                    "Mi a legjobb érv, amelyet felhozhatok?",
                    "Hogyan kezdem a beszélgetést?"
                ],
                a: 0,
                explication: "Ez határozza meg a valódi pozíciódat, nem a hangoztatottat."
            },
            {
                q: "Mit ér egy olyan kérés, mint a „nagyobb elismerés”?",
                options: [
                    "Nem tárgyalható: nem ellenőrizhető",
                    "Hasznos mozgásteret hagy a beszélgetés további részére",
                    "Diplomatikusabb"
                ],
                a: 0,
                explication: "Az „5%-os béremelés január 1-jétől” megvitatható."
            },
            {
                q: "Mit kezdj a saját ügyed gyenge pontjával?",
                options: [
                    "Remélni, hogy az aláírásig senki sem veszi észre",
                    "Tagadni, ha felhozzák",
                    "Magad mondod ki, vagy előkészíted a választ"
                ],
                a: 2,
                explication: "A másik úgyis megtalálja: jobb, ha előre látod."
            },
            // 2. sorozat
            {
                q: "Miért kell tudni, miről vagy hajlandó lemondani?",
                options: [
                    "Ellentételezés nélküli kérésnél a másik mindent elutasíthat vagy mindent megadhat",
                    "Hogy észszerűnek tűnj",
                    "Hogy rövidebb legyen a beszélgetés"
                ],
                a: 0,
                explication: "Ez a négy felkészülési kérdés közül a második."
            },
            {
                q: "Mit jelent, hogy „ne a keretek diktáljanak”?",
                options: [
                    "Te választod meg az időpontot és a csatornát, nem csak elfogadod",
                    "Elutasítani a rád kényszerített értekezleteket",
                    "Rákényszeríteni a saját napirendedet"
                ],
                a: 0,
                explication: "Az értekezlet végére becsempészett kérés a tartalmától független hátránnyal indul."
            },
            {
                q: "Melyik a klasszikus felkészülés legkevésbé hasznos része?",
                options: [
                    "Megbecsülni, mit akar a másik",
                    "Listázni, mit fogsz mondani",
                    "Pontosan számszerűsíteni a célodat"
                ],
                a: 1,
                explication: "Azt feltételezi, hogy a beszélgetésben az győz, aki több érvet halmoz fel."
            }
        ],

        // ---------------------------------------------------------------
        "ecouter-vraiment": [
            // 1. sorozat
            {
                q: "Mire szolgál elsősorban az átfogalmazás?",
                options: [
                    "Hogy ellenőrizd, jól értetted-e — és a másik gyakran kijavít",
                    "Hogy mutasd, figyelsz",
                    "Hogy időt nyerj"
                ],
                a: 0,
                explication: "Ilyenkor derül ki, hogy tíz perce két különböző dologról beszéltetek."
            },
            {
                q: "Mit eredményez három másodperc csend egy válasz után?",
                options: [
                    "Fölösleges feszengést",
                    "Visszatérést az előző témához, érdemben semmi újjal",
                    "Nagyon gyakran egy második, pontosabb választ"
                ],
                a: 2,
                explication: "Kellemetlen kivárni: ezért működik, és ezért használják olyan ritkán."
            },
            {
                q: "Melyik a terület legjövedelmezőbb kérdése?",
                options: [
                    "„Egyetért?”",
                    "„Miért fontos ez Önnek?”",
                    "„Mekkora költségvetéssel számolnak az Önök oldalán?”"
                ],
                a: 1,
                explication: "Arról, amit a másik kér, átvezet ahhoz, hogy miért kéri."
            },
            // 2. sorozat
            {
                q: "Milyen mechanikus ellenszer akadályozza meg, hogy a válaszodat fogalmazd, amíg a másik beszél?",
                options: [
                    "Fejben ismételgetni, hogy figyelj a másikra",
                    "Jegyzetelni, amit mond",
                    "Tovább várni a válasz előtt"
                ],
                a: 1,
                explication: "Az írással elfoglalt kéz nem tudja közben megfogalmazni a választ."
            },
            {
                q: "Mi a különbség a nyitott és a zárt kérdés között?",
                options: [
                    "A nyitott udvariasabb",
                    "A zárt kérdés a kettő közül egyértelműen hatékonyabb",
                    "A nyitott magyarázatot vár, a zárt egy szót"
                ],
                a: 2,
                explication: "És a magyarázat az, ami hasznos."
            },
            {
                q: "A meghallgatást erkölcsi erényként mutatják be. Mi az elsősorban?",
                options: [
                    "Egyszerű tiszteletadás a másik felé",
                    "Udvarias módja annak, hogy egy kis időt nyerj",
                    "Információgyűjtési technika"
                ],
                a: 2,
                explication: "A hasznos információk többségét kimondják, csak nem hallják meg."
            }
        ],

        // ---------------------------------------------------------------
        "structurer-un-message": [
            // 1. sorozat
            {
                q: "Hová kerüljön egy üzenet konklúziója?",
                options: [
                    "Az elejére",
                    "A végére, az érvelés után",
                    "Valahová középre"
                ],
                a: 0,
                explication: "A háttér–elemzés–konklúzió szerkezet a felfedezés sorrendje, nem a megértésé."
            },
            {
                q: "Valójában mivel foglalkoztak Mehrabian kísérletei?",
                options: [
                    "Különálló szavakkal, a jelentésüknek ellentmondó hangsúllyal kimondva, egy attitűd mérésére",
                    "Általában a munkahelyi kommunikációval",
                    "A szóbeli előadásokkal"
                ],
                a: 0,
                explication: "Maga Mehrabian is többször elmondta, hogy az általánosítás téves."
            },
            {
                q: "Milyen gyakorlati következményt vonj le ebből a helyesbítésből?",
                options: [
                    "Mindenekelőtt a gesztusaidon kell dolgoznod",
                    "A hangsúly mindig fontosabb a szavaknál",
                    "A tartalom számít, és sokat számít"
                ],
                a: 2,
                explication: "Ez az ellenkezője annak, amit a 93%-os számból le szoktak vonni."
            },
            // 2. sorozat
            {
                q: "Milyen mellékhatása van annak, ha a konklúzióval kezdesz?",
                options: [
                    "Érezhetően rövidebb lesz az elküldött üzenet",
                    "Rákényszerít, hogy tudd, mit akarsz mondani",
                    "Megelőzi az olvasó későbbi visszakérdezéseit"
                ],
                a: 1,
                explication: "Sok előadásnak, amely homályos konklúzióval ér véget, nem is volt konklúziója."
            },
            {
                q: "Mi jelzi, hogy egy mondat túl hosszú?",
                options: [
                    "Harminc szónál hosszabb",
                    "Nem lehet egy lélegzettel kimondani",
                    "Kettőnél több egymást követő vessző van benne"
                ],
                a: 1,
                explication: "Ilyenkor valószínűleg két gondolatot tartalmaz."
            },
            {
                q: "Egy jól megfogalmazott üzenet semmit sem ér el: mi a valószínű ok?",
                options: [
                    "Túl rövid",
                    "Túl közvetlen a hangneme",
                    "A kérés feloldódik az udvariasságban, vagy a végére kerül"
                ],
                a: 2,
                explication: "Az udvariasság elfér egy formulában; a kérésnek szembeötlőnek kell lennie."
            }
        ],

        // ---------------------------------------------------------------
        "ecrire-pour-etre-lu": [
            // 1. sorozat
            {
                q: "Mit mondjon meg egy jó e-mail-tárgysor?",
                options: [
                    "Az üzenet témáját, egyetlen szóban összefoglalva",
                    "Miről van szó, ÉS mit várnak",
                    "A sürgősség fokát"
                ],
                a: 1,
                explication: "A „2027-es költségvetés — jóváhagyás péntekig” elintéződik; a „Költségvetés” elhalasztódik."
            },
            {
                q: "Mennyi időt köt le egy 8 embernek elküldött 400 szavas üzenet?",
                options: [
                    "Kb. 1,6 percet",
                    "Kb. 13 percet",
                    "Kb. 3 percet"
                ],
                a: 1,
                explication: "200 szóra rövidítve: 6,4 perc. Hét perc megtakarítás, minden üzenetnél."
            },
            {
                q: "Milyen hossz felett futja át a legtöbb olvasó a szöveget ahelyett, hogy elolvasná?",
                options: [
                    "Kb. 150 szó",
                    "Kb. 500 szó",
                    "Kb. 1000 szó"
                ],
                a: 0,
                explication: "Egy 400 szavas üzenetet tehát nem olvasnak el kétszer annyira, mint egy 200 szavasat: rosszabbul olvassák el."
            },
            // 2. sorozat
            {
                q: "Miért nem ér el semmit egy üzenet, amelynek hat címzettje van a „Címzett” mezőben?",
                options: [
                    "Mindenki azt feltételezi, hogy valaki más intézi",
                    "A szerver tömeges küldésként kiszűri, és el sem jut a címzettekhez",
                    "Jóval később érkezik meg a vártnál, amikor már nem aktuális"
                ],
                a: 0,
                explication: "Egyetlen ember a „Címzett” mezőben, a többiek másolatban."
            },
            {
                q: "Mi jelzi, hogy egy témát nem kellett volna írásban intézni?",
                options: [
                    "Egy oldalnál hosszabb",
                    "Harmadszor olvasod újra az üzenetet, hogy a hangnemén igazíts",
                    "Dokumentumot kell csatolni"
                ],
                a: 1,
                explication: "Az írás utána jön, hogy rögzítse, amit megbeszéltek."
            },
            {
                q: "Hová kerüljön a háttér egy munkahelyi üzenetben?",
                options: [
                    "A kérés után",
                    "A kérés elé",
                    "Mellékletbe"
                ],
                a: 0,
                explication: "Az olvasó azt keresi, mit kérnek tőle és mikorra. Minden, ami ezek előtt áll, késlelteti a választ."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "Megtanulni meggyőzni",
                "Uralni a testbeszédet",
                "Felkészülni, meghallgatni és szerkezetet adni — minden tárgyalási technika előtt"
            ],
            a: 2,
            explication: "A középhaladó szint a tárgyalásról szól; ez azt rakja le, ami nélkül az semmit sem ér."
        },
        {
            q: "Mi a közös az átfogalmazásban és az elejére tett konklúzióban?",
            options: [
                "Mindkettő rövidíti a beszélgetést",
                "Mindkettő az udvariasság része",
                "Mindkettő megakadályozza, hogy két különböző dologról beszéljetek"
            ],
            a: 2,
            explication: "Az egyik ellenőrzi a megértést, a másik eleve biztosítja."
        },
        {
            q: "Valaki azt állítja, hogy „a nonverbális az üzenet 93%-a”. Mit válaszolj?",
            options: [
                "Igaz, de csak szóban",
                "A kutatás különálló szavakkal foglalkozott, amelyek hangsúlya ellentmondott a jelentésüknek",
                "A szám 70%"
            ],
            a: 1,
            explication: "Egy attitűd észlelését mérte, nem egy információ átadását."
        },
        {
            q: "Miért tart tovább röviden írni?",
            options: [
                "Többet kell újraolvasni",
                "Ez mítosz: épp ellenkezőleg, gyorsabb",
                "Válogatni kell, és a válogatás munka"
            ],
            a: 2,
            explication: "Mindenki másnak viszont időt spórol — a mérlegelés szinte mindig rossz irányba dől el."
        },
        {
            q: "Mi marad, ha ennek a szintnek csak egyetlen dolgát alkalmazod?",
            options: [
                "Előre több érvet és számot készíteni, hogy minden kérdésre legyen válasz",
                "Egyszer átfogalmazni, aztán három másodpercig hallgatni",
                "Minden üzenetet lerövidíteni"
            ],
            a: 1,
            explication: "Az útmutató egyetlen technikája sem kíván kevesebb erőfeszítést, és egyik sem hoz ennyit."
        },
        {
            q: "Egy kolléga a véleményedet kéri egy e-mailben rendezendő nézeteltérésről. Mit tanácsolsz?",
            options: [
                "Hogy szóban intézze: a nézeteltérések rosszul mutatnak írásban, az írás utána jön a rögzítéshez",
                "Hogy különösen ügyeljen az üzenet hangnemére",
                "Hogy tegyen több címzettet másolatba"
            ],
            a: 0,
            explication: "Egy ötperces beszélgetésből három nap lesz, amint írásba kerül."
        }
    ]
};
