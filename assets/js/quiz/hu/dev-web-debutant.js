// ===================================
// KÉRDÉSBANK — WEBFEJLESZTÉS, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "html-css": [
            // 1. sorozat
            {
                q: "Mit ír le egy HTML-címke?",
                options: [
                    "Egy elem vizuális megjelenését a képernyőn",
                    "Az elem pontos helyzetét és méretét a képernyőn",
                    "Egy tartalom természetét és szerepét"
                ],
                a: 2,
                // A kacsacsőrök úgy maradnak, ahogy vannak: a motor textContenttel
                // jeleníti meg őket, kockázat nélkül.
                explication: "A <h1> nem azt jelenti, hogy „nagy szöveg”, hanem hogy „az oldal fő címe”."
            },
            {
                q: "Mi a különbség a <div class=\"nagy-cim\"> és a <h2> között?",
                options: [
                    "Semmi: csak a képernyőn látható stílus változik, a tartalom jelentése nem",
                    "A <div> gyorsabban jelenik meg, mert egyszerűbb a böngészőnek",
                    "A <h2>-t a Google és a képernyőolvasók címként értelmezik"
                ],
                a: 2,
                explication: "Néhány sor CSS után vizuálisan azonosak. Funkcionálisan összemérhetetlenek."
            },
            {
                q: "Ha két CSS-szabály vonatkozik ugyanarra az elemre, melyik nyer?",
                options: [
                    "Amelyiket utoljára írták",
                    "Amelyiknek a szelektora a legspecifikusabb",
                    "Amelyik a legtöbb deklarált tulajdonságot tartalmazza"
                ],
                a: 1,
                explication: "Egy azonosító legyőz egy osztályt, az osztály egy címkét. A legtöbb „nem működik ez a CSS” innen ered."
            },
            // 2. sorozat
            {
                q: "Melyik CSS-eszközt válaszd, ha elemeket egyetlen sorba akarsz igazítani?",
                options: ["A Gridet, két dimenzióban", "A táblázatokat", "A Flexboxot"],
                a: 2,
                explication: "Flexbox egy dimenzióhoz, Grid kétdimenziós rácshoz."
            },
            {
                q: "Mire valók az olyan CSS-változók, mint a --primary?",
                options: [
                    "Hogy az ismétlődő értékek egy helyen legyenek",
                    "Hogy gyorsabban töltődjön be az oldal",
                    "Hogy elrejtsék a színeket a böngészőnek küldött forráskódban"
                ],
                a: 0,
                explication: "Az oldal arculatának megváltoztatása így egyetlen sor módosítása, ahelyett hogy negyven fájlban keresnél egy kódot."
            },
            {
                q: "Miért kerüld, hogy a stílust közvetlenül a HTML-be írd?",
                options: [
                    "Mert nem működik",
                    "Mert utána minden módosításhoz újra meg kell nyitni az összes fájlt",
                    "Mert a modern böngészők már néhány éve tiltják, és figyelmen kívül hagyják"
                ],
                a: 1,
                explication: "Ez a fegyelem az elején öt percbe kerül, utána napokat takarít meg."
            }
        ],

        // ---------------------------------------------------------------
        "javascript": [
            // 1. sorozat
            {
                q: "Mi a DOM?",
                options: [
                    "A lemezre mentett HTML-fájl",
                    "Az oldal memóriabeli ábrázolása, amelyet a JavaScript módosít",
                    "Egy programozási nyelv"
                ],
                a: 1,
                explication: "Az eredeti fájl nem változik: az oldal frissítése minden módosítást visszavon."
            },
            {
                q: "Hogyan őrizhetsz meg egy információt az oldal újratöltése után?",
                options: [
                    "A localStorage vagy egy szerver használatával",
                    "A DOM-ban tárolva, egy rejtett HTML-attribútumban",
                    "JavaScriptben nem lehetséges, ehhez szerver kell"
                ],
                a: 0,
                explication: "A DOM minden betöltéskor újraépül: ami bele van írva, eltűnik."
            },
            {
                q: "Mi az az alapséma, amelyből egy oldal JavaScriptjének többsége áll?",
                options: [
                    "Kiválasztani egy elemet, figyelni egy eseményt, módosítani egy osztályt",
                    "Kiszámolni egy értéket, megjeleníteni, majd elmenteni a kapott eredményt",
                    "Betölteni, lefordítani, végrehajtani"
                ],
                a: 0,
                explication: "A stílus a CSS-ben marad: a JavaScript csak hozzáadja vagy elveszi az osztályt."
            },
            // 2. sorozat
            {
                q: "Mit jelent az await kulcsszó?",
                options: [
                    "Szüneteltesd az egész programot nagyjából egy másodpercre",
                    "Várd meg az eredményt, mielőtt folytatod ezt a függvényt",
                    "Ismételd a műveletet, amíg sikerül"
                ],
                a: 1,
                explication: "Nélküle olyan válasszal dolgozunk, amely még meg sem érkezett — ez gyakori oka az érthetetlen hibáknak."
            },
            {
                q: "Egy <head>-be tett szkript elbukik, mert a getElementById null-t ad vissza. Miért?",
                options: [
                    "A szkript azelőtt fut le, hogy a HTML létezne",
                    "Az azonosító el van írva",
                    "A böngésző letiltja a <head>-be tett szkripteket"
                ],
                a: 0,
                explication: "Két megoldás: a szkriptet közvetlenül a </body> elé tenni, vagy megadni a defer attribútumot."
            },
            {
                q: "A fejlesztői eszközök melyik lapja mutatja a 404-es hibás fájlokat?",
                options: ["Hálózat (Network)", "Konzol (Console)", "Elemek (Elements)"],
                a: 0,
                explication: "A Konzol a JavaScript-hibákat mutatja, az Elemek a DOM-ot és a ténylegesen alkalmazott CSS-t."
            }
        ],

        // ---------------------------------------------------------------
        "frontend-vs-backend": [
            // 1. sorozat
            {
                q: "Melyik kérdés dönti el, frontendről vagy backendről van szó?",
                options: [
                    "JavaScriptben írták a kódot?",
                    "A kód a látogatónál fut, vagy egy szerveren?",
                    "Látszik-e a kód a böngésző eszközeiben, vagy sem?"
                ],
                a: 1,
                explication: "Minden, ami a böngészőbe kerül, olvasható a látogató számára, a kódot és a megjegyzéseket is beleértve."
            },
            {
                q: "Hová tegyél egy API-kulcsot, hogy titokban maradjon?",
                options: [
                    "Csak a szerveroldalra",
                    "Egy JavaScript-fájlba, átnevezve",
                    "Egy HTML-megjegyzésbe"
                ],
                a: 0,
                explication: "Robotok folyamatosan pásztázzák a nyilvános oldalakat ilyen kulcsok után; a kihasználásig gyakran csak percek telnek el."
            },
            {
                q: "Mit ér egy böngészőoldalon, JavaScriptben végzett hozzáférés-ellenőrzés?",
                options: [
                    "Elég, ha a kód jól minifikált és nehezen olvasható",
                    "Ugyanolyan biztonságos, mint a szerveroldali",
                    "Néhány másodperc alatt megkerülhető"
                ],
                a: 2,
                explication: "A böngészőoldali ellenőrzés csak a kényelmet szolgálja. Ami számít, azt a szerver ellenőrzi."
            },
            // 2. sorozat
            {
                q: "Milyen projektnek nincs szüksége backendre?",
                options: [
                    "Egy dokumentációs oldalnak vagy egy portfóliónak",
                    "Egy webáruháznak online fizetéssel és szállítással",
                    "Egy felhasználói fiókokat és jelszavakat kezelő alkalmazásnak"
                ],
                a: 0,
                explication: "Gyorsabb, ingyen tárhelyezhető, és gyakorlatilag feltörhetetlen: nincs feltörhető adatbázis."
            },
            {
                q: "Milyen problémát old meg a React, a Vue vagy az Angular?",
                options: [
                    "Az oldal helyezését a piac legtöbbet használt keresőmotorjainak találati listáiban",
                    "A kompatibilitást a különböző böngészők és egymást követő verzióik között",
                    "Egy összetett felület szinkronban tartását folyton változó adatokkal"
                ],
                a: 2,
                explication: "Egy tízoldalas weboldalon főleg bonyolultságot és súlyt adnak hozzá."
            },
            {
                q: "Milyen tanulási sorrend ajánlott?",
                options: [
                    "Egy keretrendszerrel kezdeni, mert modernebb",
                    "Elsajátítani a JavaScriptet, beleütközni a korlátjába, aztán kiválasztani az eszközt, amely feloldja",
                    "A kettőt párhuzamosan tanulni"
                ],
                a: 1,
                explication: "Minden keretrendszer végül HTML-t, CSS-t és JavaScriptet állít elő."
            }
        ],

        // ---------------------------------------------------------------
        "responsive-design": [
            // 1. sorozat
            {
                q: "Mi történik, ha hiányzik a viewport címke?",
                options: [
                    "A mobil az oldal 980 px széles, kicsinyített változatát mutatja",
                    "Az oldal egyáltalán nem jelenik meg az újabb, nagy felbontású telefonokon",
                    "Eltűnnek a képek"
                ],
                a: 0,
                explication: "Ez az első, amit ellenőrizni kell, ha egy oldal apróra zsugorodik a telefonon."
            },
            {
                q: "Miért kerüld a képpontban rögzített szélességeket?",
                options: [
                    "Lassítják a megjelenítést",
                    "Egy keskenyebb képernyőn biztosan kilógnak",
                    "A webes szabványok ma már kifejezetten tiltják őket"
                ],
                a: 1,
                explication: "Használd inkább a %, rem, fr és max-width egységeket, amelyek alkalmazkodnak a rendelkezésre álló helyhez."
            },
            {
                q: "Miből áll a mobile-first megközelítés?",
                options: [
                    "Először a kis képernyő stílusát írjuk meg, aztán hozzáadunk a nagyokhoz",
                    "Mobilalkalmazást készíteni a weboldal előtt",
                    "Mobilon tesztelni, miután elkészült az asztali változat"
                ],
                a: 0,
                explication: "Egy keskeny képernyő rangsorolásra kényszerít: csak a lényegnek jut hely."
            },
            // 2. sorozat
            {
                q: "Mekkora legyen legalább egy ujjal kattintható elem?",
                options: ["16 képpont", "44 képpont", "80 képpont"],
                a: 1,
                explication: "Egy ujj nem kurzor: ez alatt megsokszorozódnak a téves koppintások."
            },
            {
                q: "Miért gond egy rámutatásra nyíló menü?",
                options: [
                    "Érintőképernyőn nincs rámutatás",
                    "Túl lassan nyílik ki egy telefonon",
                    "Túl sok memóriát fogyaszt a kis eszközökön"
                ],
                a: 0,
                explication: "A menü ekkor a látogatók többsége számára elérhetetlen."
            },
            {
                q: "Hogyan akadályozd meg, hogy egy táblázat kilógjon mobilon?",
                options: [
                    "Addig csökkenteni a betűméretet, amíg elfér",
                    "Egy overflow-x: auto tárolóba tenni",
                    "Oszlopokat törölni"
                ],
                a: 1,
                explication: "A táblázat ekkor a saját keretében görgethető, és nem az egész oldal görög vízszintesen."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Mi egy weboldal három alapja?",
            options: [
                "React, Node.js és egy adatbázis",
                "Egy szerver, egy domain és egy tanúsítvány",
                "HTML a szerkezethez, CSS a megjelenéshez, JavaScript az interaktivitáshoz"
            ],
            a: 2,
            explication: "Húsz éve nem változtak, és minden keretrendszer végül ezt a hármat állítja elő."
        },
        {
            q: "Az oldalad nem azt csinálja, amit vársz. Mi az első reflex?",
            options: [
                "Újraírni a kódot az elejétől",
                "Megnyitni a konzolt az F12-vel: a hiba szinte mindig ott áll, a sorával",
                "Fórumon keresni a választ"
            ],
            a: 1,
            explication: "Konzol a JavaScript-hibákhoz, Hálózat a hiányzó fájlokhoz, Elemek az alkalmazott CSS-hez."
        },
        {
            q: "Melyik állítás igaz egy oldal biztonságáról?",
            options: [
                "Egy minifikált kód elég jól védett a kíváncsi szemektől",
                "A HTTPS megakadályozza a forráskód elolvasását",
                "Minden, ami a böngészőbe kerül, nyilvános"
            ],
            a: 2,
            explication: "A biztonságot soha nem a frontendbe írjuk: egy jobb kattintással minden elolvasható."
        },
        {
            q: "Tízoldalas portfóliót kell készítened. Milyen megközelítést válassz?",
            options: [
                "Egy modern keretrendszert, hogy naprakész maradj, és könnyebben találj munkát",
                "Egy tartalomkezelőt adatbázissal",
                "Egyszerű HTML-, CSS- és JavaScript-fájlokat, változtatás nélkül kiszolgálva"
            ],
            a: 2,
            explication: "Gyorsabb, ingyen tárhelyezhető, és nincs feltörhető adatbázis."
        },
        {
            q: "Mi a legjobb módja a fejlődésnek a webfejlesztésben?",
            options: [
                "Egymás után végezni az oktatóanyagokat, hetente egyet",
                "Egy valódi, számodra fontos projektet vinni",
                "A keretrendszereket a nyelv alapjai előtt megtanulni"
            ],
            a: 1,
            explication: "Egy valódi oldal valódi problémákkal szembesít — és azokat megoldva jegyzünk meg a legtöbbet."
        },
        {
            q: "Egy oldal mindenhol <div class=\"nagy-cim\">-et használ <h1> és <h2> helyett. Mi a következmény?",
            options: [
                "Az oldal rosszul jelenik meg a régi böngészőkön és a mobilokon",
                "Az oldal jóval lassabban töltődik be egy lassú mobilkapcsolaton",
                "A Google és a képernyőolvasók már nem értik a szerkezetét"
            ],
            a: 2,
            explication: "A megjelenés lehet azonos; a jelentés viszont eltűnt."
        }
    ]
};
