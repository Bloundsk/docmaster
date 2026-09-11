// ===================================
// KÉRDÉSBANK — DIGITÁLIS MARKETING, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "seo-référencement-naturel": [
            // 1. sorozat
            {
                q: "Mi a keresőoptimalizálás három pillére?",
                options: [
                    "A költségkeret, a hirdetés és a közösségi média",
                    "A tartalom, a technika és a népszerűség",
                    "A domainnév, a logó és az arculati kézikönyv"
                ],
                a: 1,
                explication: "A tartalom a munka nagyjából 70%-a: valóban válaszolni a feltett kérdésre."
            },
            {
                q: "Mit jelent a keresési szándék?",
                options: [
                    "A keresés mögötti valódi elvárást: megérteni, összehasonlítani vagy cselekedni",
                    "Azt, hogy egy adott szót havonta pontosan hányszor írnak be a Google keresőjébe",
                    "A találatok között megcélzott pozíciót"
                ],
                a: 0,
                explication: "Ha annak, aki megérteni akar, értékesítési oldalt mutatunk, elmenekül, és a Google méri ezt a távozást."
            },
            {
                q: "Egy induló oldalnak az „autóbiztosítás” kifejezést kell céloznia (havi 100 000 keresés)?",
                options: [
                    "Igen, ott van a mennyiség",
                    "Igen, ha minden nap publikál",
                    "Nem: a verseny elérhetetlen, jobbak a hosszú és pontos keresések"
                ],
                a: 2,
                explication: "90 minősített látogató végtelenül többet ér, mint 0 látogató egy elérhetetlen kulcsszón."
            },
            // 2. sorozat
            {
                q: "Mit eredményez ma egy kulcsszó mesterséges ismételgetése?",
                options: [
                    "Jobb helyezést",
                    "Büntetést: ezeket a technikákat felismerik",
                    "Semmilyen különösebb hatást, egyik irányban sem"
                ],
                a: 1,
                explication: "A mérce, ami megmaradt: megtalálja-e a látogató a választ, és elégedetten távozik-e?"
            },
            {
                q: "Mennyi idő kell komoly SEO-eredményekhez?",
                options: ["Nagyjából 2–4 hét", "6–12 hónap", "Legalább 2–3 év"],
                a: 1,
                explication: "Ha egy szolgáltató három hét alatt az első helyet ígéri, a kérdés el van döntve."
            },
            {
                q: "Mi a keresőoptimalizálás fő ereje?",
                options: [
                    "Azonnali eredményeket hoz",
                    "Nem igényel tartalmi munkát, rendszeres írást és folyamatos odafigyelést",
                    "A megszerzett forgalom nem áll le, amikor abbahagyjuk a fizetést"
                ],
                a: 2,
                explication: "A gyengesége szimmetrikus: hónapokba telik, mire bármi látszik belőle."
            }
        ],

        // ---------------------------------------------------------------
        "publicité-en-ligne-sea": [
            // 1. sorozat
            {
                q: "Egy hirdetési platformon mindig a legtöbbet ajánló nyer?",
                options: [
                    "Igen, ez a hirdetési aukció lényege: aki többet fizet, előrébb kerül",
                    "Nem: az ajánlatot egy minőségi pontszámmal kombinálják",
                    "Igen, kivéve hétvégén"
                ],
                a: 1,
                explication: "Azonos pozícióban egy jól megtervezett hirdetés olcsóbb, mint egy közepes."
            },
            {
                q: "1000 euró költségkeret, 1,20 euró kattintásonként, 2% konverzió. Mennyi az ügyfelenkénti költség?",
                options: ["12 euró", "nagyjából 59 euró", "nagyjából 120 euró"],
                a: 1,
                explication: "833 látogató, 17 ügyfél, azaz 1000 / 17 ≈ 59 euró. Csak akkor nyereséges, ha egy ügyfél ennél többet hoz."
            },
            {
                q: "Melyik emelő csökkenti leghatékonyabban az ügyfélszerzési költséget?",
                options: [
                    "Az oldal konverziós arányának javítása",
                    "Minden egyes megvásárolt kattintás árának csökkentése",
                    "A kampány napi költségkeretének emelése"
                ],
                a: 0,
                explication: "2%-ról 3%-ra lépve a költség 59-ről 39 euróra csökken, egy euróval több hirdetési költés nélkül."
            },
            // 2. sorozat
            {
                q: "Mi a különbség a keresőben és a közösségi médiában futó hirdetés között?",
                options: [
                    "Semmi, csak a felület más",
                    "A keresőben az ember már kifejezett egy igényt; a közösségi médiában megszakítjuk",
                    "A közösségi média mindig jobban konvertál"
                ],
                a: 1,
                explication: "Ezért jobb a konverzió a keresésnél, de magasabb a kattintásonkénti költség."
            },
            {
                q: "Milyen oldalra vezessen egy hirdetés?",
                options: [
                    "A kezdőlapra, amely a látogatónak bemutatja az oldal teljes kínálatát",
                    "Egy olyan oldalra, amely pontosan betartja a hirdetés ígéretét",
                    "A kapcsolatfelvételi oldalra"
                ],
                a: 1,
                explication: "Ez a legolcsóbb és legjövedelmezőbb javítás az online hirdetésben."
            },
            {
                q: "Mi lesz egy hirdetési kampánnyal, amikor elfogy a költségkeret?",
                options: [
                    "Hirtelen leáll",
                    "Csökkentett eléréssel folytatódik",
                    "Automatikusan keresőoptimalizálásra vált"
                ],
                a: 0,
                explication: "Ez a SEO pontos kiegészítője: azonnali és mérhető, de nincs utóhatása."
            }
        ],

        // ---------------------------------------------------------------
        "réseaux-sociaux": [
            // 1. sorozat
            {
                q: "Melyik platformot részesítsd előnyben vállalatoknak szóló értékesítésnél?",
                options: ["TikTok", "LinkedIn", "Instagram"],
                a: 1,
                explication: "Az Instagram a látványos termékekhez illik, a TikTok a széles közönséghez, a YouTube az összetett témákhoz."
            },
            {
                q: "Jobb mindenhol jelen lenni, vagy egyetlen platformon?",
                options: [
                    "Mindenhol egyszerre, hogy maximális legyen az elérés",
                    "Legalább hármon, és soha nem kevesebben",
                    "Egyetlen, jól vitt platform többet hoz"
                ],
                a: 2,
                explication: "Ha mindenhol ugyanazt a tartalmat hasznosítod újra, mindenhol közepes lesz a jelenléted."
            },
            {
                q: "Miért csökken minden platformon az ingyenes elérés?",
                options: [
                    "Mert csökkentik az ingyenes láthatóságot, hogy hirdetést adjanak el",
                    "Mert a felhasználók kevesebbet posztolnak",
                    "Tárolási, technikai okokból"
                ],
                a: 0,
                explication: "Induláskor nagy láthatóság az alkotók vonzására, aztán fokozatos csökkentés."
            },
            // 2. sorozat
            {
                q: "Milyen stratégiai következményt vonj le az elérés csökkenéséből?",
                options: [
                    "Sokkal gyakrabban posztolni",
                    "A közönséget saját csatornává alakítani, például e-mail-listává",
                    "Minden bejegyzésért rendszeresen fizetni"
                ],
                a: 1,
                explication: "Egy fiókot fel lehet függeszteni, egy elérés összeomolhat; egy feliratkozói lista megmarad."
            },
            {
                q: "Mit ér egy 50 000 inaktív követővel rendelkező fiók?",
                options: [
                    "Sokat: a nagy szám lenyűgözi az új látogatókat",
                    "Ugyanannyit, mint egy aktív közönségű fiók",
                    "Kevesebbet, mint egy 800 aktív követős fiók"
                ],
                a: 2,
                explication: "A nyereményjátékok a nyereményért érkezőket vonzzák, akik lerontják az aktivitási arányt."
            },
            {
                q: "Mi működik a legjobban hosszú távon?",
                options: [
                    "Heti két bejegyzés hat hónapon át",
                    "Tíz bejegyzés egy hét alatt, aztán semmi",
                    "Egy tökéletes bejegyzés negyedévente"
                ],
                a: 0,
                explication: "A hozzászólásokra adott válasz is számít: a platformok értékelik a párbeszédet."
            }
        ],

        // ---------------------------------------------------------------
        "email-marketing": [
            // 1. sorozat
            {
                q: "Miért marad az e-mail a legjobb megtérülésű csatorna?",
                options: [
                    "Mert ingyenes",
                    "Mert a lista a tiéd, és nincs algoritmus közted és a feliratkozóid között",
                    "Mert az emberek minden üzenetüket elolvassák"
                ],
                a: 1,
                explication: "Ez az egyetlen valóban a tiéd lévő érték, szemben egy platformtól bérelt közönséggel."
            },
            {
                q: "Mit eredményez egy megvásárolt címlista?",
                options: [
                    "Jelentős időmegtakarítást",
                    "Ugyanazt, mint egy felépített lista",
                    "Tömeges spambejelentéseket, amelyek tartósan tönkreteszik a feladói hírnevedet"
                ],
                a: 2,
                explication: "A kifejezett hozzájárulás jogi kötelezettség, és mindenekelőtt a hatékonyság feltétele."
            },
            {
                q: "Melyik mutató a legmegbízhatóbb ma?",
                options: [
                    "A megnyitási arány",
                    "A feliratkozók száma",
                    "A kattintási arány"
                ],
                a: 2,
                explication: "A megnyitási arány torzul, mióta egyes szolgáltatások előre betöltik a képeket."
            },
            // 2. sorozat
            {
                q: "Egy 5000 fős lista kattintási aránya 1,8%-ról 4%-ra nő. Mit változtattak?",
                options: [
                    "Szegmentálták a listát, és minden csoporthoz igazították az üzenetet",
                    "Megduplázták a küldési gyakoriságot",
                    "Egy megbízhatóbb, jobb kézbesítési arányú küldőszolgáltatásra váltottak"
                ],
                a: 0,
                explication: "Ugyanaz a lista, ugyanaz a termék, egy kicsit több szövegírás: az eredmény megduplázódik."
            },
            {
                q: "Melyik jel a legsúlyosabb egy feladó számára?",
                options: [
                    "A csökkenő megnyitási arány",
                    "Az egymást követő leiratkozások",
                    "A spambejelentések"
                ],
                a: 2,
                explication: "Néhány bejelentés is elég, hogy rontsa az összes következő küldésed kézbesíthetőségét."
            },
            {
                q: "Jól láthatóvá kell tenni a leiratkozási linket?",
                options: [
                    "Nem, az ösztönzi a távozást",
                    "Mindegy, apróság",
                    "Igen: aki nem találja, a „spam” gombra kattint, ami sokkal többe kerül"
                ],
                a: 2,
                explication: "Egy leiratkozás egy kapcsolat elvesztése; egy bejelentés az egész listádat rontja."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Milyen sajátosság különbözteti meg a digitális marketinget a plakáttól vagy a rádiótól?",
            options: [
                "Szinte minden mérhető benne: egy ügyfél költsége összevethető azzal, amit hoz",
                "Mindig olcsóbb",
                "Szélesebb közönséget ér el"
            ],
            a: 0,
            explication: "Ez az egyetlen érvényes mérce — és paradox módon sokan éppen ezt kerülik."
        },
        {
            q: "Mit kell tudni egy fizetett kampány indítása előtt?",
            options: [
                "A versenytársak nevét",
                "Hogy mennyit ér egy ügyfél az élettartama alatt",
                "A nap és a hét legjobb időpontját a posztoláshoz"
            ],
            a: 1,
            explication: "E szám nélkül nem irányítasz semmit: csak költesz."
        },
        {
            q: "Melyik csatorna a tiéd valójában?",
            options: [
                "Az e-mail-listád",
                "Az Instagram-fiókod és a követői",
                "A céges Facebook-oldalad"
            ],
            a: 0,
            explication: "A közönségedet a platformoktól bérled. A belőle kinyert lista az egyetlen tartós érték."
        },
        {
            q: "Azon gondolkodsz, hogy megduplázd a hirdetési költségkeretet, vagy javítsd az értékesítési oldaladat. Mit tegyél először?",
            options: [
                "A konverziót javítani: a nyereség utána minden csatornádnak jót tesz",
                "Megduplázni a költségkeretet, a hatás azonnali",
                "Mindkettőt egyszerre"
            ],
            a: 0,
            explication: "A konverziós arány megduplázása gyakran olcsóbb, mint a forgalom megduplázása."
        },
        {
            q: "Egy szolgáltató egy hónapon belüli első helyet garantál a Google-ben. Hogyan értelmezd?",
            options: [
                "Merész, de hihető, ha a szolgáltató már tapasztalt",
                "Egy új oldalnál ez normális",
                "Figyelmeztető jel: a SEO 6–12 hónapot igényel"
            ],
            a: 2,
            explication: "Senki sem irányítja a Google rangsorát, főleg nem ilyen határidővel."
        },
        {
            q: "SEO és fizetett hirdetés: hogyan viszonyulnak egymáshoz?",
            options: [
                "A SEO lassú, de tartós, a hirdetés azonnali, de leáll a költségkerettel",
                "Felcserélhetők",
                "A hirdetés előnyösen helyettesíti a SEO-t"
            ],
            a: 0,
            explication: "Kiegészítik egymást: az egyik értéket épít, a másik láthatóságot vásárol."
        }
    ]
};
