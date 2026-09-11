// ===================================
// KÉRDÉSBANK — WEBFEJLESZTÉS, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "api-et-json": [
            // 1. sorozat
            {
                q: "Mit határoz meg egy jól megtervezett API?",
                options: [
                    "Csak a hívandó címet",
                    "Csak az adatok formátumát",
                    "A címet, azt, amit küldünk, azt, amit kapunk, és azt, ami hiba esetén történik"
                ],
                a: 2,
                explication: "Az utolsót szokás elfelejteni, és éppen ez dönti le az alkalmazásokat éles üzemben."
            },
            {
                q: "Mit jelent a 401-es válaszkód?",
                options: [
                    "Az erőforrás nem létezik",
                    "A szerver a saját oldalán hibázott",
                    "Azonosítás szükséges"
                ],
                a: 2,
                explication: "404 a hiányzó erőforráshoz, 500 a szerverhibához, 400 a hibásan formázott kéréshez."
            },
            {
                q: "8 hívás, egyenként 150 ms: mennyi idő sorban?",
                options: ["1200 ms", "150 ms", "600 ms"],
                a: 0,
                explication: "Párhuzamosan, ha a hívások függetlenek, nagyjából 150 ms. A szerver nem gyorsabb: a szervezés változik."
            },
            // 2. sorozat
            {
                q: "Mi a baj egy API-val, amely 200-at ad vissza hibaüzenettel a törzsben?",
                options: [
                    "Semmi, így egyszerűbb",
                    "A szükségesnél több sávszélességet fogyaszt, fölöslegesen",
                    "Minden kliensnek ki kell találnia, hogy hiba történt"
                ],
                a: 2,
                explication: "A válaszkódok éppen ennek a kétértelműségnek az elkerülésére léteznek."
            },
            {
                q: "Hová tegyél egy titkos API-kulcsot?",
                options: [
                    "A JavaScript-kódba, minifikálva és átnevezve",
                    "A szerveredre, amely továbbítja a kérést",
                    "Egy böngészőben tárolt változóba, a kódon kívül"
                ],
                a: 1,
                explication: "Minden, amit a böngésző megkap, olvasható: kód, változók, fejlécek. Az oda tett kulcs nyilvános."
            },
            {
                q: "Mi határozza meg leginkább egy API-t hívó oldal betöltési idejét?",
                options: [
                    "Az oda-vissza utak száma",
                    "A hívott szerver sebessége",
                    "A kapott válaszok mérete"
                ],
                a: 0,
                explication: "Ezért változtat meg mindent a független hívások párhuzamosítása."
            }
        ],

        // ---------------------------------------------------------------
        "bases-de-donnees": [
            // 1. sorozat
            {
                q: "Mit ad egy relációs adatbázis egy dokumentumalapúhoz képest?",
                options: [
                    "Nagyobb sebességet",
                    "Kevesebb beállítást",
                    "A konzisztencia garanciáját: nem lehet rendelést rögzíteni létező ügyfél nélkül"
                ],
                a: 2,
                explication: "Az adatok szinte mindig kapcsolatokat alakítanak ki, és jobb, ha ezeket az adatbázis tartatja be."
            },
            {
                q: "50 cikk megjelenítése szerzőnként egy lekérdezéssel, 4 ms-mal: mennyi idő?",
                options: ["4 ms", "50 ms", "204 ms"],
                a: 2,
                explication: "Szemben a nagyjából 6 ms-mal egyetlen, összekapcsolást használó lekérdezésnél. 34 az 1-hez arány."
            },
            {
                q: "Mire jó egy index?",
                options: [
                    "Tömöríteni a tárolt adatokat, hogy értékes helyet takarítsunk meg a lemezeken",
                    "Egyenesen a jó helyre ugrani ahelyett, hogy végigolvasnánk az összes sort",
                    "Garantálni a táblában lévő összes rekord egyediségét, hogy ne legyenek ismétlődések"
                ],
                a: 1,
                explication: "Az ára: kicsit lassítja az írást, és helyet foglal."
            },
            // 2. sorozat
            {
                q: "Mely oszlopokat kell indexelni?",
                options: [
                    "Mindet, a biztonság kedvéért",
                    "Egyiket sem: az adatbázis magától optimalizálja a lekérdezéseit",
                    "A szűrésekben és összekapcsolásokban használtakat"
                ],
                a: 2,
                explication: "Minden indexnek ára van írásban és tárhelyben."
            },
            {
                q: "Hogyan védekezünk az SQL-befecskendezés ellen?",
                options: [
                    "Előkészített lekérdezésekkel, amelyekben az értékek külön kerülnek átadásra",
                    "A speciális karakterek szűrésével",
                    "Az adatbázis titkosításával"
                ],
                a: 0,
                explication: "Az ellenszer egyszerű és rendszeres. Soha nincs ok másképp csinálni."
            },
            {
                q: "Miért nehéz észrevenni a ciklusba tett lekérdezések problémáját?",
                options: [
                    "Csak nagy adatbázisokon jelentkezik",
                    "Olvasáskor a kód ugyanolyannak tűnik: csak a lekérdezésszámláló mutatja a különbséget",
                    "Az eszközök nem mérik"
                ],
                a: 1,
                explication: "Ez a leggyakoribb és leginkább láthatatlan teljesítményhiba."
            }
        ],

        // ---------------------------------------------------------------
        "mettre-en-ligne": [
            // 1. sorozat
            {
                q: "Mi az élesítés négy eleme?",
                options: [
                    "Szerver, adatbázis, gyorsítótár-rendszer és rendszeres mentés",
                    "Kód, tesztek, dokumentáció, monitorozás",
                    "Domainnév, tárhely, tanúsítvány, telepítési mód"
                ],
                a: 2,
                explication: "Szerveroldali kód nélküli oldalhoz elég a statikus tárhely — gyakran ingyenes és nagyon gyors."
            },
            {
                q: "Mi az első élesítés leggyakoribb hibája?",
                options: [
                    "Tanúsítványprobléma: lejárt, vagy rosszul telepítették az éles szerveren, és a böngésző letiltja",
                    "A fájlnevek kis- és nagybetűi: a szerver megkülönbözteti az Image.png-t az image.png-től",
                    "A tárhely kvótájának túllépése, amely félúton megakadályozza a fájlok feltöltését a szerverre"
                ],
                a: 1,
                explication: "A Windows nem tesz ilyen különbséget, a szerver igen."
            },
            {
                q: "Hová kerüljenek a titkok éles környezetben?",
                options: [
                    "Egy verziókezelt beállítási fájlba",
                    "Környezeti változókba",
                    "Az adatbázisba, nyíltan vagy titkosítva"
                ],
                a: 1,
                explication: "Amint a projektet megosztják, már nem lehetnek a kódban."
            },
            // 2. sorozat
            {
                q: "Mi a baj a néhány fájl kézi másolásával végzett telepítéssel?",
                options: [
                    "Túlságosan lassú, amint sok fájlt kell átvinni egy lassú kapcsolaton",
                    "Egyáltalán nem működik, ha az oldalt HTTPS-en szolgálják ki",
                    "Előbb-utóbb kimarad egy, és az oldal mindenkinél elromlik"
                ],
                a: 2,
                explication: "Mindig az egészet telepítsd, egyetlen forrásból — ideális esetben automatikusan."
            },
            {
                q: "Miért tűnhet hiányzónak egy módosítás a telepítés után?",
                options: [
                    "A gyorsítótár miatt",
                    "A telepítés nem sikerült",
                    "A tanúsítvány nem aktív"
                ],
                a: 0,
                explication: "Ha privát ablakban nyitod meg az oldalt, azt látod, amit mások."
            },
            {
                q: "Bonyolult ma beállítani a HTTPS-t?",
                options: [
                    "Nem, a legtöbb tárhelyszolgáltatónál ingyenes és automatikus",
                    "Igen, tanúsítványt kell vásárolni",
                    "Csak webáruházaknak és bankoknak igazán szükséges, ahol pénz mozog"
                ],
                a: 0,
                explication: "Már semmi ok nincs nélküle maradni."
            }
        ],

        // ---------------------------------------------------------------
        "travail-a-plusieurs": [
            // 1. sorozat
            {
                q: "Mire való lényegében a Git?",
                options: [
                    "Hogy a nap folyamán, lépésről lépésre elmentsd az összes munkafájlodat egy biztos helyre",
                    "Hogy vissza lehessen lépni, és többen dolgozhassanak egymás zavarása nélkül",
                    "Hogy a kódot egy, az egész projektcsapat számára mindig elérhető központi szerveren tárold"
                ],
                a: 1,
                explication: "Ha mentési eszközként mutatjuk be, rosszul fogjuk használni."
            },
            {
                q: "Mit kell elmagyaráznia egy commitüzenetnek?",
                options: [
                    "A mit: a módosított fájlok listáját",
                    "A miért: a változtatás okát",
                    "A szerző nevét és a változtatás dátumát"
                ],
                a: 1,
                explication: "Az „Áfaszámítás javítása részleges visszatérítéseknél” végtelenül többet ér a „fix”-nél."
            },
            {
                q: "Mi az ágak elve?",
                options: [
                    "Minden fejlesztőnek megvan a saját állandó ága",
                    "Módosított fájlonként egy ág",
                    "A fő ág mindig működőképes marad"
                ],
                a: 2,
                explication: "Minden munka mellette él, amíg el nem készül."
            },
            // 2. sorozat
            {
                q: "Miért gond egy három hétig élő ág?",
                options: [
                    "Lemezterületet foglal",
                    "Közben minden más megváltozott, a visszaolvasztás nehéz lesz",
                    "A Git magától néhány hétre korlátozza az ágak lehetséges élettartamát"
                ],
                a: 1,
                explication: "A rövid, gyakran összefésült ágak megelőzik a konfliktusok nagy részét."
            },
            {
                q: "Biztonságban van egy commitolt, majd törölt jelszó?",
                options: [
                    "Nem: az előzményekben marad, és kompromittáltnak kell tekinteni",
                    "Igen: a fájl törlése véglegesen és nyomtalanul eltávolítja az egész kódtárból",
                    "Igen, ha a kódtár privát marad, és soha senki más nem fért hozzá"
                ],
                a: 0,
                explication: "Meg kell változtatni, nem elég eltávolítani."
            },
            {
                q: "Mi a baj egy committal, amely javítást, új funkciót és átformázást kever?",
                options: [
                    "Nem lehet az egyiket visszavonni a többi nélkül",
                    "Túl hosszú átnézni egy siető, más feladatokkal elfoglalt kollégának",
                    "Megnöveli a kódtár méretét"
                ],
                a: 0,
                explication: "Egy commit, egy szándék. Ettől használható az előzménytörténet."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Mi tesz egy oldalt alkalmazássá?",
            options: [
                "Egy modern, jól dokumentált és a szakmában ma széles körben elterjedt keretrendszer",
                "Kommunikáló darabok, megmaradó adatok, egy telepítés",
                "Elegendő mennyiségű JavaScript, több külön fájlba szétosztva"
            ],
            a: 1,
            explication: "Ez az a négy téma, amelyen egy hobbiprojektből valódi projekt lesz."
        },
        {
            q: "Egy oldal lassú. Mivel kezdd?",
            options: [
                "Megszámolni, hány kérést indít",
                "Először a kiszolgáló szerverkódját optimalizálni",
                "Tárhelyszolgáltatót váltani egy gyorsabbnak tartott szolgáltatásra"
            ],
            a: 0,
            explication: "Az API-hívások oda-vissza útjai és a ciklusba tett lekérdezések magyarázzák a lassúságok többségét."
        },
        {
            q: "Milyen elv köti össze az API-kulcsot és az űrlapok ellenőrzését?",
            options: [
                "Ami a böngészőben van, az a felhasználóé",
                "Titkosítani kell az adatforgalmat",
                "A lehető legkevesebb JavaScriptet kell a böngészőnek küldeni"
            ],
            a: 0,
            explication: "Minden, amit a böngésző megkap, olvasható és módosítható. Az az ellenőrzés számít, amelyet a szerver végez."
        },
        {
            q: "Miért számít kevésbé a relációs és a dokumentumalapú adatbázis közötti választás, mint mondani szokás?",
            options: [
                "A kettő pontosan ugyanazt a teljesítményt nyújtja, olvasásban és írásban is",
                "Az adatbázis lekérdezésének módja dönt a teljesítményről",
                "A dokumentumalapú adatbázisok eltűntek"
            ],
            a: 1,
            explication: "Egy ciklusba tett lekérdezés bármilyen adatbázistípusnál tönkreteszi a teljesítményt."
        },
        {
            q: "Milyen szokás véd egyszerre a rosszul sikerült telepítéstől és a Git-konfliktustól?",
            options: [
                "Kis lépésekben, gyakran dolgozni",
                "Minden lépést bővebben dokumentálni",
                "Újabb és jobban integrált eszközöket használni"
            ],
            a: 0,
            explication: "Az egészet egyetlen forrásból telepíteni, rövid ágakat összefésülni: ugyanaz a logika."
        },
        {
            q: "Mit kell ellenőrizni minden telepítés után?",
            options: [
                "A szerver naplóit",
                "A feltöltött fájlok teljes méretét, az előző változathoz viszonyítva",
                "Az oldalt egy privát ablakban, a gyorsítótár megkerülésével"
            ],
            a: 2,
            explication: "Csak így látod azt, amit a látogatók valóban látnak."
        }
    ]
};
