// ===================================
// KÉRDÉSBANK — MUNKAHELYI EGÉSZSÉG, KÖZÉPHALADÓ SZINT
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
        "aigu-ou-chronique": [
            // 1. sorozat
            {
                q: "Betegség-e a stressz?",
                options: [
                    "Igen, attól a pillanattól, hogy megjelenik az érintettnél",
                    "Nem: alkalmazkodási válasz, hasznos és normális",
                    "Igen, ha gyakori"
                ],
                a: 1,
                explication: "Nem az a baj, hogy beindul, hanem hogy már nem áll le."
            },
            {
                q: "Mi különbözteti meg a krónikus stresszt az akuttól?",
                options: [
                    "Az intenzitása abban a pillanatban, amikor jelentkezik",
                    "Az elsődleges kiváltó oka, bármi legyen is az",
                    "A normális állapot visszatérésének hiánya"
                ],
                a: 2,
                explication: "Nem „sok akut stressz”: egy másik állapot."
            },
            {
                q: "Mi a jó támpont a helyzet megítéléséhez?",
                options: [
                    "A regenerálódás, nem az intenzitás",
                    "A héten ledolgozott órák teljes száma",
                    "A munkakörben betöltött felelősségi szint"
                ],
                a: 0,
                explication: "Egy zsúfolt időszak, amelyet pihentető hétvége követ, a várt működés."
            },
            // 2. sorozat
            {
                q: "Miért nehéz magadon észrevenni a krónikus stressz kialakulását?",
                options: [
                    "Mert nem akarjuk beismerni",
                    "Az alkalmazkodás fokozatos, és eltolja az összehasonlítási pontot",
                    "A tünetek láthatatlanok"
                ],
                a: 1,
                explication: "Innen a nyolc hónapon át ismételt „semmi baj, csak egy nehezebb időszak”."
            },
            {
                q: "Ki veszi észre gyakran elsőként a helyzetet?",
                options: [
                    "Maga az érintett",
                    "A környezete",
                    "Maga a munkáltató"
                ],
                a: 1,
                explication: "Kívülről jobban látszik, mint belülről."
            },
            {
                q: "Mit feltételez a „rosszul kezelem a stresszt” mondat?",
                options: [
                    "Hogy az illetőnek nincs módszere",
                    "Hogy a munkakör rosszul van meghatározva",
                    "Hogy a terhelés adottság, az alkalmazkodás pedig készség"
                ],
                a: 2,
                explication: "Pedig a szervezeti tényezők dokumentáltak, és a munkáltatóra tartoznak."
            }
        ],

        // ---------------------------------------------------------------
        "exigence-et-latitude": [
            // 1. sorozat
            {
                q: "Melyik kombináció függ össze leginkább a kockázattal?",
                options: [
                    "Magas követelmény és kicsi mozgástér",
                    "Magas követelmény és nagy mozgástér",
                    "Alacsony követelmény és kicsi mozgástér"
                ],
                a: 0,
                explication: "A kombináció számít, nem a követelmény önmagában."
            },
            {
                q: "Mit nevezünk mozgástérnek?",
                options: [
                    "A követelményre való válaszhoz hagyott szabadságot",
                    "A hét során ténylegesen ledolgozott munkaórák számát",
                    "A havonta kapott fizetés és az egyéb juttatások szintjét"
                ],
                a: 0,
                explication: "Dönteni a sorrendről, a módszerről, az időpontról; hatással lenni arra, ami történik."
            },
            {
                q: "Mi a szociális támogatás hatása ebben a modellben?",
                options: [
                    "Az egészségre eddig semmilyen mért hatása nincs",
                    "Egyszerűen helyettesíti a mozgásteret",
                    "Minden más hatását megváltoztatja"
                ],
                a: 2,
                explication: "A legkedvezőtlenebb helyzet a magas követelmény, a kicsi mozgástér és a kevés támogatás halmozódása."
            },
            // 2. sorozat
            {
                q: "Egy „aktív” munkakör ebben a modellben:",
                options: [
                    "Kevés követelménnyel jár, és a mindennapokban teljesen önálló",
                    "Megterhelő, mozgástérrel",
                    "Nagyon megterhelő, és a mindennapokban erősen kötött"
                ],
                a: 1,
                explication: "Megterhelő, de elviselhető, gyakran ösztönző."
            },
            {
                q: "Kényelmes-e egy „passzív” munkakör?",
                options: [
                    "Nem: régóta leírt helyzet, amelyben az unalom koptat",
                    "Igen, ez a legirigylésreméltóbb",
                    "Igen, ha jól fizet"
                ],
                a: 0,
                explication: "Az elköteleződés elvesztése, a képességek leépülése, egyre nehezebb kilábalni belőle."
            },
            {
                q: "Mire jó leginkább a modell a gyakorlatban?",
                options: [
                    "Megnevezni, ami hiányzik, hogy kérni lehessen",
                    "Beskatulyázni magunkat",
                    "Két vállalatot összehasonlítani, mielőtt választunk"
                ],
                a: 0,
                explication: "A „kevés beleszólásom van a prioritások sorrendjébe” konkrét beszélgetést nyit."
            }
        ],

        // ---------------------------------------------------------------
        "la-recuperation": [
            // 1. sorozat
            {
                q: "Mennyi a minimális napi pihenőidő két munkanap között az Európai Unióban?",
                options: [
                    "8 egybefüggő óra",
                    "11 egybefüggő óra",
                    "9 egybefüggő óra"
                ],
                a: 1,
                explication: "Hetente ezen felül legalább 24 óra, összesen 35 egybefüggő óra."
            },
            {
                q: "Háromszor két óra ér-e annyit, mint hat óra regenerálódás?",
                options: [
                    "Nem: a regenerálódáshoz összefüggő idő kell",
                    "Igen, hiszen az órák összege pontosan ugyanaz",
                    "Igen, ha a megszakítások jól oszlanak el a héten"
                ],
                a: 0,
                explication: "Feldarabolva nem következik be."
            },
            {
                q: "Melyik a valódi regenerálódás három feltétele?",
                options: [
                    "Lelki elszakadás, kontroll, regiszterváltás",
                    "Alvás, sport, táplálkozás",
                    "Csend, sötétség, mozdulatlanság"
                ],
                a: 0,
                explication: "Egy semmittevéssel, de rágódva töltött este egyiket sem teljesíti."
            },
            // 2. sorozat
            {
                q: "Mit jelent, hogy kötelező minimumok?",
                options: [
                    "Hogy ajánlottak",
                    "Nem kényelmi ajánlások: kötelezőek",
                    "Hogy vállalatonként eltérnek"
                ],
                a: 1,
                explication: "Franciaországban a rendszeres alulmaradás a munkáltató felelősségét veti fel."
            },
            {
                q: "Meddig tartanak a szabadság jótékony hatásai?",
                options: [
                    "A visszatérés után néhány héten belül elhalványulnak",
                    "Egész évben",
                    "A következő szabadságig, sőt gyakran azon túl is"
                ],
                a: 0,
                explication: "A szabadság kijavítja a fáradtságot; a szervezetet, amely termeli, nem."
            },
            {
                q: "Mi a lelki elszakadás?",
                options: [
                    "Távolságot tartani a munkatársaktól és a vezetőktől",
                    "Csökkenteni a munkahelyi elköteleződést",
                    "Nem gondolni rá, és nem csak nem csinálni"
                ],
                a: 2,
                explication: "Ez a leggyakrabban hiányzó feltétel a három közül."
            }
        ],

        // ---------------------------------------------------------------
        "la-deconnexion": [
            // 1. sorozat
            {
                q: "Franciaországban a szemedre vethetik-e, ha munkaidőn kívül nem válaszolsz?",
                options: [
                    "Nem: éppen ez a lekapcsolódás jogának lényege",
                    "Igen, ha sürgős",
                    "Igen, ha erről nincs külön vállalati megállapodás"
                ],
                a: 0,
                explication: "A jog Franciaországban 2017 óta létezik."
            },
            {
                q: "Milyen hatása van egy 23 órakor elküldött munkahelyi üzenetnek?",
                options: [
                    "Semmilyen, ha jól jelezzük, hogy nem kell rögtön válaszolni",
                    "Jelzi a címzetteknek, mit várnak tőlük",
                    "Könnyít a másnapon"
                ],
                a: 1,
                explication: "Ezért változtat többet a szokásokon az időzített küldés, mint egy kifüggesztett szabályzat."
            },
            {
                q: "Mi az ára, ha „hátha” elérhető maradsz, és semmi sem jön?",
                options: [
                    "Semmi, ha ez idő alatt valóban senki sem keres, és nem érkezik üzenet",
                    "Csak a telefon okozta fáradtság",
                    "A várakozás megakadályozza az elszakadást, így a regenerálódást"
                ],
                a: 2,
                explication: "Nem a kapott üzenetek száma nyom, hanem annak lehetősége, hogy jöhet egy."
            },
            // 2. sorozat
            {
                q: "Mit kell a francia vállalatoknak meghatározniuk ebben a kérdésben?",
                options: [
                    "A szerverek lekapcsolásának időpontját",
                    "Semmit, ez egyéni ügy",
                    "A lekapcsolódás jogának gyakorlási módját, megállapodásban vagy szabályzatban"
                ],
                a: 2,
                explication: "A megoldások az este nem kötelező válaszadástól az időzített küldésig terjednek."
            },
            {
                q: "Mi helyettesíti otthoni munkavégzésnél a hely szerinti elválasztást?",
                options: [
                    "Egy teljesen külön szoba, enélkül semmi sem működik",
                    "Jelzők: befejezési időpont, kijelölt hely, záró rituálé",
                    "A munkáltató által előírt munkaidő"
                ],
                a: 1,
                explication: "Ezek mesterséges jelek, és működnek: az agy a környezetből tudja, mikor váltson üzemmódot."
            },
            {
                q: "Pusztán egyéni ügy-e a lekapcsolódás?",
                options: [
                    "Igen, mindenki maga kezeli a határait",
                    "Nem: nagyrészt azon múlik, ki mit küld",
                    "Igen, kivéve megállapodás esetén"
                ],
                a: 1,
                explication: "Amit este elküldesz, az szabja meg, mit hisznek mások, hogy tenniük kell."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "Hogyan csökkentsük a munkaterhelést",
                "Hogyan álljunk jobban ellen a stressznek",
                "Mitől marad elviselhető egy terhelés, vagy mitől szűnik meg annak lenni"
            ],
            a: 2,
            explication: "A különbség nem a stresszes és a nem stresszes között van."
        },
        {
            q: "Mi a közös a mozgástérben és a támogatásban?",
            options: [
                "Mindkettő a munkavállalótól függ",
                "Mindkettő megváltoztatja ugyanannak a terhelésnek a hatását",
                "Mindkettőt a hetente az irodában bent töltött órák számában mérik"
            ],
            a: 1,
            explication: "Két egyformán terhelt munkakörnek nem ugyanaz a hatása."
        },
        {
            q: "Valaki heti 45 órát dolgozik, két munkanap között 10 óra szünettel. Mit mondhatunk?",
            options: [
                "A minimális 11 órás napi pihenőidő nem teljesül",
                "Minden szabályos",
                "Ez kizárólag a vállalat ágazatától és a kollektív szerződéstől függ"
            ],
            a: 0,
            explication: "Egy óra eltérés, egész évben ismételve, amely semmilyen kimutatásban nem jelenik meg."
        },
        {
            q: "Miért érdemes dátummal leírni, hogyan érzed magad ma a munkában?",
            options: [
                "Hogy egy későbbi jogvita esetén felhasználható bizonyíték legyen",
                "Hogy megmutasd a munkáltatódnak",
                "Mert az alkalmazkodás eltörli az összehasonlítási pontokat"
            ],
            a: 2,
            explication: "Hat hónap múlva újraolvasva megmondja, amit az emlékezet nem."
        },
        {
            q: "Melyik intézkedés kerül a legkevesebbe, és változtat a legtöbbet egy csapatnál?",
            options: [
                "Csökkenteni a heti értekezletek számát",
                "Lekapcsolódási szabályzatot csatolni a megállapodáshoz",
                "Időzíteni a késői üzenetek küldését"
            ],
            a: 2,
            explication: "Egy kattintás, és mindenki elvárásait megváltoztatja."
        },
        {
            q: "Egy kolléga azt mondja, hetek óta nem tudott regenerálódni. Mi a hasznos válasz?",
            options: [
                "Azt tanácsolni neki, hogy kezelje jobban a stresszt",
                "Azt javasolni, hogy menjen szabadságra",
                "Orvoshoz vagy a foglalkozás-egészségügyi orvoshoz irányítani, akiket köt a titoktartás"
            ],
            a: 2,
            explication: "Sem ez az útmutató, sem egy közeli ember nem mehet tovább a megnevezésnél és az irányításnál."
        }
    ]
};
