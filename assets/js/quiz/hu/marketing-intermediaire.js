// ===================================
// KÉRDÉSBANK — DIGITÁLIS MARKETING, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "parcours-achat": [
            // 1. sorozat
            {
                q: "Mennyi marad a végén négy lépés után, ha mindegyik a látogatók 50%-át tartja meg?",
                options: ["6,25%", "50%", "12,5%"],
                a: 0,
                explication: "Az arányok összeszorzódnak. Ezt a pontot az intuíció rendszeresen elvéti."
            },
            {
                q: "Mit kezdj egy 20%-os lépéssel az út közepén?",
                options: [
                    "Kijavítani: mindent korlátoz, ami előtte van",
                    "Több forgalmat hozni az ellensúlyozására",
                    "Figyelmen kívül hagyni, ha a többi lépés rendben van"
                ],
                a: 0,
                explication: "A szűk keresztmetszet szűk keresztmetszet marad, bármekkora mennyiség érkezik rá."
            },
            {
                q: "Mi történik, ha 1000 látogatónál a kosárba helyezést 25-ről 35%-ra emeled?",
                options: [
                    "Szinte semmi hatása a rendelések számára",
                    "Megduplázódnak a rendelések",
                    "30-ról 42 rendelésre nő, azaz +40%"
                ],
                a: 2,
                explication: "Egyetlen euró további hirdetés nélkül."
            },
            // 2. sorozat
            {
                q: "Melyek a vásárlás végén történő lemorzsolódás gyakori okai?",
                options: [
                    "Egy elavult dizájn",
                    "Későn kiderülő ár, kötelező regisztráció, hosszú űrlap, el nem oszlatott kétely",
                    "A választék hiánya"
                ],
                a: 1,
                explication: "Ezt a négy pontot kell elsőként ellenőrizni egy szivárgó tölcséren."
            },
            {
                q: "Mit eredményez a hirdetési költségkeret megduplázása egy 1%-os tölcséren?",
                options: [
                    "A konverziós arány javulását",
                    "Az ügyfelenkénti költség csökkenését",
                    "A költség megduplázódását arányos eredménnyel, anélkül hogy bármit kijavítana"
                ],
                a: 2,
                explication: "Ugyanez a költségkeret arra fordítva, hogy megértsük, miért távozik 99%, tartós hatást ér el."
            },
            {
                q: "Miért tesz jót minden csatornának az út kijavítása?",
                options: [
                    "Mert nő a forgalom",
                    "Mert a keresők értékelik",
                    "Mert minden látogató, bárhonnan érkezik, ugyanazokon a lépéseken megy át"
                ],
                a: 2,
                explication: "A nyereség utána mindenre rászorzódik, ami érkezik."
            }
        ],

        // ---------------------------------------------------------------
        "intention-de-recherche": [
            // 1. sorozat
            {
                q: "Hány keresési szándékot szokás megkülönböztetni?",
                options: [
                    "Kettőt",
                    "Négyet: információkereső, navigációs, kereskedelmi, tranzakciós",
                    "Hatot"
                ],
                a: 1,
                explication: "Mindegyik más tartalomformátumot kíván."
            },
            {
                q: "Hogyan ellenőrizd harminc másodperc alatt a keresés mögötti szándékot?",
                options: [
                    "Megnézni egy havi keresési mennyiséget mutató eszközt és a görbéit",
                    "Megkérdezni az ügyfeleket",
                    "Beírni a keresést, és megnézni, mi van már rangsorolva"
                ],
                a: 2,
                explication: "Ha az első tíz találat cikk, egy termékoldalnak semmi esélye."
            },
            {
                q: "Milyen szándékot fejez ki a „hogyan válasszunk elektromos kerékpárt” keresés?",
                options: [
                    "Tranzakciósat",
                    "Információkeresőt",
                    "Navigációsat"
                ],
                a: 1,
                explication: "Egy összehasonlító útmutató illik hozzá; egy termékoldal elriasztja a látogatót."
            },
            // 2. sorozat
            {
                q: "Mi a baj egy olyan oldallal, amely egyszerre tájékoztat, összehasonlít és elad?",
                options: [
                    "Ritkán sikeres mindháromban",
                    "Túlságosan hosszú elolvasni",
                    "A keresők nagyon rossz szemmel nézik"
                ],
                a: 0,
                explication: "Jobb egy tájékoztató útmutató, amely a termékoldalra irányít, és mindegyik végzi a maga dolgát."
            },
            {
                q: "Miért érdemes az „összecsukható elektromos kerékpár munkába járáshoz” kifejezést célozni az „elektromos kerékpár” helyett?",
                options: [
                    "Világos a szándék, reális a verseny, és összemérhetetlen a konverzió",
                    "Rövidebb leírni",
                    "A keresők a hosszú mondatokat szeretik"
                ],
                a: 0,
                explication: "Százszor kevesebb keresés, de olyanoktól, akik tudják, mit akarnak."
            },
            {
                q: "Elérhet helyezést egy kiváló tartalom olyan keresésre, amelynek a szándékát nem elégíti ki?",
                options: [
                    "Igen, ha elég teljes",
                    "Nem: a kereső már eldöntötte, milyen választ vár",
                    "Igen, ha elég külső hivatkozás mutat erre az oldalra"
                ],
                a: 1,
                explication: "A világ legjobb tartalma sem ér el helyezést, ha más kérdésre válaszol."
            }
        ],

        // ---------------------------------------------------------------
        "mesurer-ses-actions": [
            // 1. sorozat
            {
                q: "Melyik kérdéssel lehet válogatni a mutatók között?",
                options: [
                    "Könnyű megszerezni?",
                    "Milyen döntést változtathat meg ez a szám?",
                    "Összevethető az ágazatban megfigyelt átlaggal?"
                ],
                a: 1,
                explication: "A megjelenések, megtekintések és követők a költségkerettel nőnek, és semmilyen döntést nem váltanak ki."
            },
            {
                q: "Mire valók a hivatkozásokba tett nyomkövető paraméterek?",
                options: [
                    "Megkülönböztetni, honnan jönnek a látogatók",
                    "Felgyorsítani az oldal összes lapjának betöltését",
                    "Javítani az egyes lapok keresőoptimalizálását"
                ],
                a: 0,
                explication: "Nélkülük minden összekeveredik a „közvetlen” forgalomban."
            },
            {
                q: "Mi a helyzet a „source=hirlevel” és a „Source=Hirlevel” paraméterrel?",
                options: [
                    "Az eszköz számára teljesen egyenértékűek",
                    "Két külön sort hoznak létre",
                    "Mindkettő érvénytelen, és figyelmen kívül marad"
                ],
                a: 1,
                explication: "Egy egyszerű és betartott konvenció többet ér, mint egy kifinomult, de találomra alkalmazott rendszer."
            },
            // 2. sorozat
            {
                q: "Egy csatorna 40 látogatón 8%-os, egy másik 5000-en 3%-os: melyik hoz többet?",
                options: [
                    "A második: 150 ügyfél 3 ellenében",
                    "Az első, mert sokkal hatékonyabban konvertál",
                    "Tökéletesen egyenértékűek egymással"
                ],
                a: 0,
                explication: "Az arány a hatékonyságot méri, a mennyiség a hozzájárulást. A kettő együtt, soha csak az egyik."
            },
            {
                q: "Valaki lát egy bejegyzést, beszél róla egy barátjának, aki három héttel később vásárol. Minek tulajdonítja az eszköz az eladást?",
                options: [
                    "A márkanévre való keresésnek, vagyis semmi hasznosíthatónak",
                    "A bejegyzésnek",
                    "Egyáltalán nem rögzíti a szokásos havi jelentéseiben, sehol sem"
                ],
                a: 0,
                explication: "A marketing egy része láthatatlan marad az eszközök számára. Ha ezt elismerjük, két irányítási hibát kerülünk el."
            },
            {
                q: "Mely mutatók érintik valóban az utat?",
                options: [
                    "Megjelenések és elérés",
                    "Követők, említések és megosztások havi száma, platformonként összesítve",
                    "Lépésenkénti konverzió, ügyfelenkénti költség, az új ügyfelek aránya"
                ],
                a: 2,
                explication: "Ezek mutatják meg, hol kell beavatkozni."
            }
        ],

        // ---------------------------------------------------------------
        "email-et-automatisation": [
            // 1. sorozat
            {
                q: "Milyen előnyét őrzi meg az e-mail a közösségi médiával szemben?",
                options: [
                    "Garantáltan jobb konverziós arány",
                    "Nulla költség",
                    "A lista a tiéd: egyetlen algoritmus sem veheti el a közönségedet"
                ],
                a: 2,
                explication: "Ez az a csatorna, ahol a legkevésbé függünk egy platformtól."
            },
            {
                q: "4000 fős lista, 32% megnyitás, 12% kattintás, 6% konverzió: hány eladás?",
                options: ["9", "48", "154"],
                a: 0,
                explication: "Három egymást követő arány, amelyek összeszorzódnak. A tölcsér szűkebb, mint amilyennek látszik."
            },
            {
                q: "Melyik a három legjövedelmezőbb automatikus sorozat?",
                options: [
                    "Születésnap, akciók és szezonális újdonságok",
                    "Üdvözlő, elhagyott kosár, újraaktiváló",
                    "Heti, havi vagy negyedéves hírlevélküldés"
                ],
                a: 1,
                explication: "Egyszer kell megírni őket, utána maguktól dolgoznak."
            },
            // 2. sorozat
            {
                q: "Mit ér egy tízezer megvásárolt címből álló lista?",
                options: [
                    "Kevesebbet, mint ezer hozzájáruló ember listája: panaszok, romló hírnév, jogi kockázat",
                    "Tízszer annyit, mint egy ezres lista",
                    "A szolgáltatótól függ"
                ],
                a: 0,
                explication: "A hozzájárulásra épülő lista érték. A megvásárolt lista teher."
            },
            {
                q: "Miért kell eltávolítani a hat hónapja inaktív címeket?",
                options: [
                    "Hogy csökkenjen az eszköz költsége",
                    "Mert a törvény előírja",
                    "Mert ez javítja az összes többi küldés kézbesíthetőségét"
                ],
                a: 2,
                explication: "A rendszeres tisztítás a munka része."
            },
            {
                q: "Hozzájárulás-e egy hírlevélhez előre bejelölt négyzet?",
                options: [
                    "Igen, ha látható",
                    "Nem, a GDPR értelmében ez nem érvényes hozzájárulás",
                    "Igen, azoknál a meglévő ügyfeleknél, akik már rendeltek nálad"
                ],
                a: 1,
                explication: "A jogi kockázaton túl olyan emberekkel tölti meg a listát, akik semmit sem kértek."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Mi köti össze ennek a szintnek a négy témáját?",
            options: [
                "Az év minden hónapjában elköltött hirdetési keretek optimalizálása",
                "A tartalomgyártás",
                "Az átmenet az „akciók végzésétől” a „rendszer megértéséig”"
            ],
            a: 2,
            explication: "Az út, a szándék, a mérés és a kapcsolat összefüggő egészet alkot."
        },
        {
            q: "Mi a közös a vásárlási útban és az e-mail tölcsérében?",
            options: [
                "Mindkettő kizárólag az elköltött költségkerettől függ",
                "Egymást követő arányok, amelyek összeszorzódnak",
                "Mindkettőt évente egyszer mérik, az üzleti év végén"
            ],
            a: 1,
            explication: "Mindkét esetben az első lépés nyom a legtöbbet a végeredményben."
        },
        {
            q: "Van 1000 eurod és egy 1%-on konvertáló tölcséred. Mit tegyél?",
            options: [
                "Megérteni, miért távozik 99%",
                "Több fizetett forgalmat vásárolni",
                "Új ügyfélszerzési csatornát nyitni"
            ],
            a: 0,
            explication: "A nyereség utána minden csatornának jót tesz, azoknak is, amelyeket később nyitsz."
        },
        {
            q: "Melyik lépés ellenőrzi egyszerre egy tartalom szándékát és megvalósíthatóságát?",
            options: [
                "Megnézni a keresési mennyiséget",
                "Elemezni a versenytársakat",
                "Beírni a megcélzott keresést, és megnézni az első tíz találatot"
            ],
            a: 2,
            explication: "Egy perc, és tudod, milyen formátumot vár a kereső."
        },
        {
            q: "Mi a közös a hiúsági mutatókban és a megvásárolt listákban?",
            options: [
                "Mindkettő drága",
                "Mindkettő egy érték illúzióját kelti anélkül, hogy az lenne",
                "Mindkettőt kifejezetten tiltják a hatályos európai szabályok"
            ],
            a: 1,
            explication: "Egy nagy, megnyugtató szám, semmilyen lehetséges döntés, és egyetlen ügyfél sincs mögötte."
        },
        {
            q: "Miért marketingkérdés a hozzájárulás, és nem csak jogi?",
            options: [
                "Mert a kézbesíthetőséget és a kapcsolat minőségét határozza meg",
                "Mert növeli a lista méretét",
                "Mert javítja a keresőoptimalizálást"
            ],
            a: 0,
            explication: "A panaszok és a leiratkozások minden következő küldésnél rontják a feladói hírnevet."
        }
    ]
};
