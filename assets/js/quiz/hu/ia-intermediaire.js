// ===================================
// KÉRDÉSBANK — MESTERSÉGES INTELLIGENCIA, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "contexte-et-jetons": [
            // 1. sorozat
            {
                q: "Mi az a token egy nyelvi modell számára?",
                options: [
                    "Egy teljes szó",
                    "Egy egész mondat, a szöveg írásjelei szerint automatikusan felbontva",
                    "Egy szövegdarab, gyakran egy szótag vagy egy rövid szó"
                ],
                a: 2,
                explication: "Nagyságrendileg három token jut két szóra — magyar szövegnél általában több."
            },
            {
                q: "Mit tartalmaz a kontextusablak?",
                options: [
                    "Csak az utolsó feltett kérdést",
                    "Az utasítást, a dokumentumokat, az előzményt és a választ, összeadva",
                    "A modell állandó memóriáját"
                ],
                a: 1,
                explication: "Minden, amit a modellnek egyszerre el kell olvasnia vagy meg kell írnia, ebbe a plafonba számít bele."
            },
            {
                q: "Hogyan emlékszik egy modell egy beszélgetésre?",
                options: [
                    "Semmire sem emlékszik: az előzményt minden körben visszaküldik neki",
                    "Ő maga rögzíti az előzményt",
                    "Automatikus összefoglalót őriz meg"
                ],
                a: 0,
                explication: "Ez az állandó visszaküldés kelti az emlékezés illúzióját — és ez hajtja fel a költséget."
            },
            // 2. sorozat
            {
                q: "Egy tízkörös beszélgetés, körönként 500 tokennel: összesen mennyit olvas el a modell?",
                options: [
                    "5000 tokent",
                    "27 500 tokent",
                    "500 tokent"
                ],
                a: 1,
                explication: "Az egymást követő előzmények összegét, nem az utolsó váltást. Ezt az összeget számlázzák."
            },
            {
                q: "Mi történik, ha a kontextusablak megtelik?",
                options: [
                    "A modell automatikusan tömöríti a beszélgetés előzményét",
                    "A hívás meghiúsul, vagy az eleje csendben levágódik",
                    "Semmi, az ablak megnő"
                ],
                a: 1,
                explication: "A második eset az alattomosabb: a modell tovább válaszol, de „elfelejtette” a kezdeti utasításokat."
            },
            {
                q: "Egy nagyon nagy kontextusablak mindent megold?",
                options: [
                    "Nem: a figyelem minősége nagyon hosszú szövegeknél romlik",
                    "Igen, elég minden dokumentumot elküldeni",
                    "Igen, és kevesebbe is kerül"
                ],
                a: 0,
                explication: "A három releváns oldal elküldése szinte mindig jobb eredményt ad, és százszor kevesebbe kerül."
            }
        ],

        // ---------------------------------------------------------------
        "le-rag": [
            // 1. sorozat
            {
                q: "Mit csinál a RAG, egy mondatban?",
                options: [
                    "Betanítja a modellt a dokumentumaidra",
                    "Tömöríti a dokumentumokat, hogy elférjenek a memóriában",
                    "Megkeresi a releváns részeket, aztán a kérdéssel együtt odaadja őket a modellnek"
                ],
                a: 2,
                explication: "A modell ezekre a részekre támaszkodva válaszol, nem a tanítás során szerzett emlékeire."
            },
            {
                q: "Mi az a beágyazás (embedding)?",
                options: [
                    "Számok listája, amely egy darab jelentését képviseli",
                    "A dokumentum automatikus összefoglalója, amely olvasáskor készül",
                    "A szöveg tömörítése"
                ],
                a: 0,
                explication: "A kérdés ugyanezt a kezelést kapja, majd megkeresik a hozzá legközelebbi számokkal rendelkező darabokat."
            },
            {
                q: "Okosabbá teszi a RAG a modellt?",
                options: [
                    "Nem, egyszerűen a megfelelő dokumentumot teszi elé",
                    "Igen, érezhetően javítja az általános érvelési képességeit",
                    "Igen, tudást ad hozzá a súlyaihoz"
                ],
                a: 0,
                explication: "Egy jó és egy rossz válasz közötti különbség gyakran csak ezen múlik."
            },
            // 2. sorozat
            {
                q: "Mi a RAG igazi nehézsége?",
                options: [
                    "Az alkalmazott nyelvi modell kiválasztása",
                    "A dokumentumok darabokra bontása",
                    "A keresés sebessége az adatbázisban"
                ],
                a: 1,
                explication: "A túl kicsi darabok elveszítik a kontextusukat; a túl nagyok hígítják az információt, és többe kerülnek."
            },
            {
                q: "Megszünteti a RAG a kitalálásokat?",
                options: [
                    "Nem: ha a keresés semmi relevánsat nem talál, a modell akkor is válaszol",
                    "Igen, teljesen",
                    "Igen, ha a dokumentumok naprakészek"
                ],
                a: 0,
                explication: "Kifejezetten utasítani kell a modellt, hogy mondja meg, ha nem talál semmit, és meg kell jeleníteni a forrásokat az ellenőrzéshez."
            },
            {
                q: "Mit veszít egy túl kicsi darab?",
                options: [
                    "A kontextusát — az „ez a határidő tizennégy nap” nem mondja meg, melyik határidő",
                    "Az olvashatóságát",
                    "A helyét a dokumentumban"
                ],
                a: 0,
                explication: "Ezért a darabolásnak a dokumentumok valódi szerkezetét kell követnie, nem egy önkényes méretet."
            }
        ],

        // ---------------------------------------------------------------
        "outils-et-fonctions": [
            // 1. sorozat
            {
                q: "Mit csinál egy modell, amikor úgy dönt, hogy eszközt használ?",
                options: [
                    "Maga futtatja az eszközt",
                    "Hívási kérést állít elő, amelyet a programod végrehajt vagy nem",
                    "Minden művelet előtt először engedélyt kér a felhasználótól, és megvárja a választ"
                ],
                a: 1,
                explication: "A modell javasol, a kódod dönt. Egy ügynök teljes biztonsága itt dől el."
            },
            {
                q: "Mi teszi az asszisztenst ügynökké?",
                options: [
                    "Az, hogy eszközöket tud hívni",
                    "Egy érezhetően erősebb és újabb modell",
                    "Egy jóval nagyobb kontextusablak"
                ],
                a: 0,
                explication: "Egy modell önmagában csak szöveget ír."
            },
            {
                q: "Miért érdemesebb szűk eszközöket adni, mint egy általánosat?",
                options: [
                    "Gyorsabbak",
                    "Sokkal kevesebbe kerülnek a mindennapi használatban",
                    "Korlátozzák, mit tehet egy manipulált ügynök"
                ],
                a: 2,
                explication: "Egy „tetszőleges lekérdezés futtatása” eszköz olyan, mintha az adatbázis kulcsait egy általa olvasott szöveggel manipulálható rendszerre bíznád."
            },
            // 2. sorozat
            {
                q: "Egy eszközhívás menetében melyik lépés a tiéd?",
                options: [
                    "Az eszköz hívásáról szóló döntés, egyedül meghozva",
                    "A végső válasz megírása az olvasónak",
                    "A hívás ellenőrzése és végrehajtása"
                ],
                a: 2,
                explication: "A négy lépés közül a középső teljes egészében a te hatáskörödbe tartozik."
            },
            {
                q: "Hogyan kezeld a visszafordíthatatlan hatású eszközöket?",
                options: [
                    "Kapcsold ki őket éles környezetben",
                    "Válaszd külön őket az olvasó eszközöktől, és köss megerősítéshez",
                    "Bízd őket egy megbízhatóbb modellre"
                ],
                a: 1,
                explication: "Egy kétértelmű utasítás is elég egy téves művelethez, mindenféle rosszindulat nélkül."
            },
            {
                q: "Honnan tudja a modell, milyen eszközök érhetők el?",
                options: [
                    "Kipróbálással fedezi fel őket",
                    "Leírják neki: név, szerep, várt paraméterek",
                    "Benne vannak a kezdeti tanításában, egyszer s mindenkorra"
                ],
                a: 1,
                explication: "E leírások minősége nagyban meghatározza, mennyire találóak a hívások."
            }
        ],

        // ---------------------------------------------------------------
        "choisir-un-modele": [
            // 1. sorozat
            {
                q: "Általában melyik a jó modellválasztás?",
                options: [
                    "A piacon épp elérhető legerősebb és legújabb modell",
                    "A legolcsóbb, minden esetben és minden feladatra",
                    "A legkisebb, amely megoldja a feladatodat"
                ],
                a: 2,
                explication: "Egy egyszerű, ismétlődő feladatnál egy kisebb modell ugyanolyan jól válaszol, gyorsabban, az ár töredékéért."
            },
            {
                q: "Hogyan számlázzák egy modell költségét?",
                options: [
                    "Kérésenként",
                    "Használati percenként, ahogy egy régi telefon-előfizetést",
                    "Millió tokenenként, külön a bemenetre és a kimenetre"
                ],
                a: 2,
                explication: "A kimenet általában többszörösen drágább a bemenetnél."
            },
            {
                q: "Melyik szempont előz meg néha minden mást?",
                options: [
                    "A modell szolgáltatójának népszerűsége",
                    "Az, hogy hol haladnak át az adatok",
                    "A kontextusablak rendelkezésre álló mérete"
                ],
                a: 1,
                explication: "Egy nálad üzemeltetett nyílt modell semmilyen adatot nem juttat ki; egy távoli szolgáltatás igen."
            },
            // 2. sorozat
            {
                q: "Mit érnek a nyilvános modellrangsorok a projektedhez?",
                options: [
                    "Közvetlenül megadják a választ, utólagos vita és saját mérés nélkül",
                    "Semmi hasznuk",
                    "Általános képességeket mérnek, nem a te konkrét esetedet"
                ],
                a: 2,
                explication: "A modelleket ráadásul végül ezekre a tesztekre optimalizálják."
            },
            {
                q: "Hogyan válassz komolyan két modell között?",
                options: [
                    "Húsz, a valódi feladatodra jellemző példa lefuttatásával",
                    "A szolgáltatók bejelentéseinek elolvasásával",
                    "A paraméterek számának összehasonlításával"
                ],
                a: 0,
                explication: "Egy fél nap munka, és olyan válasz, amely valóban rólad szól."
            },
            {
                q: "Miért önálló szempont a válaszidő?",
                options: [
                    "Megváltoztatja a költséget",
                    "Két másodperc tíz helyett mindent megváltoztat egy felületen, ahol valaki vár",
                    "A modell minőségét jelzi"
                ],
                a: 1,
                explication: "Egy kiváló, de lassú modell használhatatlan lehet interaktív felhasználásban."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mi a közös a kontextusablakban és egy projekt költségében?",
            options: [
                "Mindkettő elsősorban a felhasználók számától és a forgalomtól függ",
                "Függetlenek egymástól, ezért külön mérik és külön kezelik őket",
                "Mindkettőt az elolvasott tokenek mennyisége határozza meg"
            ],
            a: 2,
            explication: "A tokeneket megérteni egyszerre jelenti a technikai korlát és a számla megértését."
        },
        {
            q: "Egy cég azt szeretné, hogy a modell ismerje a belső eljárásait. Mit kell tenni?",
            options: [
                "Dokumentum-visszakeresést kell kiépíteni",
                "Be kell tanítani egy modellt az összes dokumentumára",
                "Erősebb modellt kell választani"
            ],
            a: 0,
            explication: "A RAG a modell elé teszi a megfelelő dokumentumot, és azonnal frissül."
        },
        {
            q: "Mi határozza meg, mit ronthat el egy ügynök?",
            options: [
                "A kiválasztott modell nyers teljesítménye",
                "A rendelkezésére álló kontextusablak mérete",
                "A neki adott eszközök hatóköre"
            ],
            a: 2,
            explication: "Se több, se kevesebb: ezért jobbak a szűk eszközök egy általánosnál."
        },
        {
            q: "Miért ritkán jó ötlet egy egész könyvet elküldeni egy modellnek?",
            options: [
                "Romlik a figyelem, és megugrik a költség",
                "Ma még technikailag lehetetlen, bármilyen modellel",
                "A modell egyszerűen elutasítja a hosszú szövegeket"
            ],
            a: 0,
            explication: "A három releváns oldal jobb eredményt ad, százszor olcsóbban."
        },
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "A modellek túl gyorsan fejlődnek ahhoz, hogy kézben tartsuk őket",
                "Mindig a nyílt modelleket kell előnyben részesíteni",
                "Minden technikai döntés mérhető költségben és kockázatban jelentkezik"
            ],
            a: 2,
            explication: "Kontextus, visszakeresés, eszközök és modellválasztás: négy döntés, amely számszerűsíthető és mérlegelhető."
        },
        {
            q: "Modellválasztás előtt melyik előzetes munka a legkifizetődőbb?",
            options: [
                "A nyilvános modellrangsorok elolvasása",
                "Húsz jellemző teszteset megírása",
                "A kontextusablakok méretének összehasonlítása"
            ],
            a: 1,
            explication: "Utána minden verzióváltásnál hasznukat veszed — és lesznek verzióváltások."
        }
    ]
};
