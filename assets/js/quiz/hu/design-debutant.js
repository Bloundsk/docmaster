// ===================================
// KÉRDÉSBANK — UX/UI DESIGN, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "ux-vs-ui-quelle-différence": [
            // 1. sorozat
            {
                q: "Mivel foglalkozik az UX, szemben az UI-jal?",
                options: [
                    "A színekkel, a tipográfiával és a teljes vizuális megjelenéssel",
                    "Azzal, amit az ember átél: érti-e, és eléri-e a célját?",
                    "A betöltési sebességgel"
                ],
                a: 1,
                explication: "Az UI az, amit látunk, az UX az, amit átélünk. Az elsőt meg lehet csinálni jól úgy, hogy a második kudarcot vall."
            },
            {
                q: "Mit illusztrál egy gyönyörű vészkijárat-tábla, amely egy befalazott ajtóhoz vezet?",
                options: [
                    "Kiváló UX-et, hiszen a tábla messziről látszik",
                    "Tisztán technikai problémát, amelynek semmi köze a designhoz",
                    "Kiváló UI-t és katasztrofális UX-et"
                ],
                a: 2,
                explication: "Egy kézzel írt cetli, amely a jó kijáratot mutatja: gyenge UI, sikeres UX. A második ment életeket."
            },
            {
                q: "Hol zajlik az UX-munka nagy része?",
                options: [
                    "A színpaletta, a tipográfia és az illusztrációk gondos kiválasztásában",
                    "Előtte: kinek szól, milyen problémát old meg, milyen sorrendben?",
                    "A záró teszteknél, amikor a felület gyakorlatilag már teljesen elkészült"
                ],
                a: 1,
                explication: "Egy grafikai megújítás soha nem javít meg egy rosszul megtervezett folyamatot: csak elegánsabbá teszi a benne való eltévedést."
            },
            // 2. sorozat
            {
                q: "Mit nem lehet esztétikával helyrehozni?",
                options: [
                    "A betűtípus és a betűméret megválasztását",
                    "Egy űrlap lépéseinek számát",
                    "A szöveg körüli margók méretét"
                ],
                a: 1,
                explication: "Minden további lépés elveszíti a felhasználók egy részét. Semmilyen animáció nem ellensúlyoz tizenkét mezőt."
            },
            {
                q: "Melyik hibaüzenet hasznos?",
                options: [
                    "„Hiba történt, kérjük, próbáld újra egy kicsit később”",
                    "„500-as hiba”",
                    "„Ehhez az irányítószámhoz nem tartozik település”"
                ],
                a: 2,
                explication: "Az általános üzenet senkinek sem segít; a pontos lehetővé teszi a cselekvést."
            },
            {
                q: "Mi a jó mérce egy felület megítéléséhez?",
                options: [
                    "Jól mutat-e egy képernyőképen?",
                    "Aki most látja először, elsőre boldogul-e vele?",
                    "Megfelel-e a szakma és az ágazat mostani trendjeinek?"
                ],
                a: 1,
                explication: "A trendek rendszeresen szülnek csábító, de kínkeservesen használható felületeket."
            }
        ],

        // ---------------------------------------------------------------
        "le-wireframing": [
            // 1. sorozat
            {
                q: "Miért szándékosan csúnya egy drótváz?",
                options: [
                    "Hogy gyorsabb legyen",
                    "Mert a tervezőeszközök ehhez még túl korlátozottak és nehézkesek",
                    "Hogy a szerkezetet kritizálják, ne egy gomb színét"
                ],
                a: 2,
                explication: "Egy kész terv előtt a visszajelzések a vizuális részletekről szólnak. Szürke téglalapok előtt végre a lényegről beszélünk."
            },
            {
                q: "Mennyibe kerül egy folyamat javítása a papírvázlat szakaszában?",
                options: ["Néhány percbe", "Egy-két munkanapba", "Több hétnyi munkába"],
                a: 0,
                explication: "A grafikai terv szakaszában: egy-két nap. Fejlesztés után: hetek és egy félresikerült kompromisszum."
            },
            {
                q: "Mire jó az alacsony kidolgozottság?",
                options: [
                    "A végső ügyfélnek való bemutatásra",
                    "Közvetlen átadásra a fejlesztésnek, köztes lépés nélkül",
                    "Több irány kipróbálására és a szerkezet eldöntésére"
                ],
                a: 2,
                explication: "A magas kidolgozottság az átadásra és a bemutatásra való, nem a kísérletezésre."
            },
            // 2. sorozat
            {
                q: "Miért érdemes valódi tartalmat használni latin kitöltő szöveg helyett?",
                options: [
                    "Egy valódi terméknév néha három sor, ahol a példa egy volt",
                    "Kellemesebb olvasni, és sokkal meggyőzőbbé teszi a tervet az értekezleten",
                    "Felgyorsítja az ügyfél jóváhagyását, aki így jobban el tudja képzelni az eredményt"
                ],
                a: 0,
                explication: "Különben ezek a kilógások a fejlesztéskor derülnek ki — túl későn."
            },
            {
                q: "Mi történik, ha egy teljes napot töltesz egy drótváz csinosításával?",
                options: [
                    "Ragaszkodni kezdesz hozzá, és már nem kérdőjelezed meg",
                    "A végeredmény jobb lesz, mert alaposabban elő van készítve",
                    "A fejlesztés gyorsabban halad"
                ],
                a: 0,
                explication: "Egy drótváznak elég csúnyának kell maradnia ahhoz, hogy merd kidobni."
            },
            {
                q: "Melyik klasszikus hiba teszi semmissé a drótváz előnyét?",
                options: [
                    "Papíron készíteni képernyő helyett",
                    "Egyből a magas kidolgozottságra ugrani",
                    "Túl korán megmutatni a csapatnak, mielőtt biztos lennél"
                ],
                a: 1,
                explication: "A gyors haladás érzését nyered, és elveszíted a lehetőséget, hogy olcsón tévedj."
            }
        ],

        // ---------------------------------------------------------------
        "les-principes-de-design-visuel": [
            // 1. sorozat
            {
                q: "Hogyan közelít a szem egy oldalhoz?",
                options: [
                    "Végigpásztázza, és látszólagos fontosság szerint rangsorolja az elemeket",
                    "Balról jobbra és soronként olvas végig mindent, pontosan úgy, mint egy könyvben",
                    "Először a közepére néz"
                ],
                a: 0,
                explication: "A méret, a kontraszt, a helyzet és a környező tér egy másodperc töredéke alatt meghatározza ezt a sorrendet."
            },
            {
                q: "Mi történik, ha egy oldal minden elemét kiemelik?",
                options: [
                    "A felhasználónak több választása van, és maga döntheti el, mi az, ami igazán számít neki",
                    "Semmi sincs kiemelve: mindent el kell olvasni a döntéshez, és a legtöbben feladják",
                    "Az oldal gazdagabbnak tűnik, és azt az érzést kelti a látogatóban, hogy a kínálat bőséges"
                ],
                a: 1,
                explication: "Ha kiválasztod, mi számít, el kell fogadnod, hogy a többi visszafogott marad."
            },
            {
                q: "Miből áll a „hunyorítási próba”?",
                options: [
                    "A böngészőablak összekicsinyítéséből",
                    "Addig hunyorogni, amíg a szöveg olvashatatlan, és megnézni, mi marad kiemelve",
                    "Az oldal fekete-fehér kinyomtatásából"
                ],
                a: 1,
                explication: "Ha a fő művelet nincs köztük, a hierarchiát újra kell gondolni."
            },
            // 2. sorozat
            {
                q: "Mit jelent a közelség elve?",
                options: [
                    "Az egymáshoz közeli elemeket összetartozónak érzékeljük",
                    "Az elemeket szín szerint kell csoportosítani",
                    "A margóknak mindenhol egyformának kell lenniük"
                ],
                a: 0,
                explication: "Egy rossz mezőhöz tapadt címke olyan félreértést okoz, amelyet a legjobb felirat sem hoz helyre."
            },
            {
                q: "Milyen kontrasztarányt ajánlanak az akadálymentességi szabványok folyó szövegre?",
                options: ["2:1", "4,5:1", "10:1"],
                a: 1,
                explication: "Ez nem egy kisebbség kedvéért hozott megkötés: mindenkinek kényelmet jelent, valós körülmények között."
            },
            {
                q: "Miért ne közvetíts soha információt pusztán színnel?",
                options: [
                    "Mert a képernyők rosszul adják vissza a színeket",
                    "Mert elnehezíti a kódot",
                    "Mert egy üzenet nélkül pirosra váltó mező láthatatlan marad egy színtévesztő ember számára"
                ],
                a: 2,
                explication: "Ez nagyjából minden tizenkettedik férfit érint."
            }
        ],

        // ---------------------------------------------------------------
        "les-tests-utilisateurs": [
            // 1. sorozat
            {
                q: "Miért nem tudod megítélni a saját felületedet?",
                options: [
                    "Mert hiányzik az érzelmi tárgyilagosság",
                    "Mert tanúsítvány kell hozzá",
                    "Mert tudod, hol van minden, és ezt a tudást nem lehet elfelejteni"
                ],
                a: 2,
                explication: "Egyetlen módon tudhatod meg: ha nézed, ahogy valaki más kipróbálja."
            },
            {
                q: "Hány felhasználó elég a súlyos problémák többségének feltárásához?",
                options: ["2", "5", "30"],
                a: 1,
                explication: "A következők főleg azt erősítik meg, amit már láttunk. Jobb minden szakaszban öt teszt, mint harminc a végén."
            },
            {
                q: "Milyen utasítást adj egy résztvevőnek?",
                options: [
                    "„Keresd meg egy éves előfizetés árát, és indítsd el az előfizetést”",
                    "„Mit gondolsz erről az oldalról?”",
                    "„Böngéssz szabadon néhány percig”"
                ],
                a: 0,
                explication: "Feladatot adj, ne idegenvezetést. Amit az emberek csinálnak, többet ér annál, amit mondanak."
            },
            // 2. sorozat
            {
                q: "Melyik viselkedést a legnehezebb betartani egy teszt alatt?",
                options: ["Hallgatni", "Jegyzetelni", "Stopperrel mérni"],
                a: 0,
                explication: "Amint segítesz, a tesztnek vége: a valódi felhasználó mellett senki sem fog ülni."
            },
            {
                q: "Mikor tesztelj?",
                options: [
                    "Egy héttel az élesítés előtt",
                    "Az indulás után, valódi felhasználókkal és valódi, mérhető használati adatokkal",
                    "A drótvázon, amikor még minden költség nélkül megváltoztatható"
                ],
                a: 2,
                explication: "Egy késői teszt már nem döntéshez kell: azokat a problémákat dokumentálja, amelyeket nem lesz időd kijavítani."
            },
            {
                q: "Egy felhasználó hibázik a teszt során. Kié a hiba?",
                options: [
                    "A felületé, amely nem volt világos",
                    "A felhasználóé, aki nem olvasott végig mindent",
                    "A teszt tervezőjéé, aki rosszul fogalmazta meg az utasítást"
                ],
                a: 0,
                explication: "Ez a fordulat a szakma alapja."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Mi jellemzi a legjobb felületeket?",
            options: [
                "Tartósan megmaradnak az emlékezetben",
                "A legújabb trendeket követik",
                "Nem vesszük észre őket"
            ],
            a: 2,
            explication: "Senki sem dicsér meg egy ajtót, amiért jó irányba nyílt."
        },
        {
            q: "Ízlés kérdése a felülettervezés?",
            options: [
                "Nem: olyan szakma, amelynek szabályai a látás és a figyelem működéséből fakadnak",
                "Igen, mindenkinek megvan a maga érzéke",
                "Igen, kivéve az intézményi oldalakat"
            ],
            a: 0,
            explication: "Ezek a szabályok ellenőrizhetők, és meg lehet tanulni őket."
        },
        {
            q: "Mit tesz egy sikeres design?",
            options: [
                "Többet vesz el, mint amennyit hozzáad",
                "Jellegzetes vizuális elemeket ad hozzá",
                "Az ágazat megszokott kódjait ismétli"
            ],
            a: 0,
            explication: "Mielőtt hozzáadsz egy elemet, kérdezd meg, mit segít megérteni. Ha semmit, csak zajt ad hozzá."
        },
        {
            q: "A csapatod „egyértelműnek” tart egy gombot. Hogyan ellenőrizd?",
            options: [
                "Kikérni egy másik, a projektcsapaton kívüli tapasztalt tervező részletes véleményét",
                "Összevetni a versenytársak oldalaival",
                "Nézni, ahogy öt ember megpróbálja elvégezni a feladatot, segítség nélkül"
            ],
            a: 2,
            explication: "Ezek a problémák a projekt belsejéből nem látszanak."
        },
        {
            q: "Gyorsan kell szállítanod. Min ne spórolj?",
            options: [
                "A drótvázak csinosításán és az ügyfélnek szóló gondos, látványos bemutatásukon",
                "A felhasználói teszteken, akár informálisan, egy papírterven is",
                "A színpalettán"
            ],
            a: 1,
            explication: "Öt perc, egy feladat, egy terv, akár papíron: végtelenül jobb, mint semmit sem tesztelni."
        },
        {
            q: "Világosszürke szöveg fehér alapon, elegáns a képernyődön. Mi a gond?",
            options: [
                "Nyomtatáskor több tintát fogyaszt",
                "Napsütésben vagy egy ötven év feletti embernek olvashatatlanná válik",
                "Lassítja a betöltést"
            ],
            a: 1,
            explication: "Ingyenes ellenőrzők néhány másodperc alatt megmérik a kontrasztot."
        }
    ]
};
