// ===================================
// KÉRDÉSBANK — UX/UI DESIGN, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "accessibilite": [
            // 1. sorozat
            {
                q: "Kinek hasznos az akadálymentesség?",
                options: [
                    "Egy szűk, fogyatékossággal élő kisebbségnek",
                    "Mindenkinek: a fogyatékosság gyakran átmeneti vagy helyzeti",
                    "Csak a közszolgáltatásoknak, amelyeknek kötelező"
                ],
                a: 1,
                explication: "Egy gipszelt kar, egy napsütötte képernyő, egy gyerek a karodban: mind olyan helyzet, amellyel az akadálymentesség számol."
            },
            {
                q: "Milyen kontrasztarány szükséges normál méretű szövegnél?",
                options: ["3:1", "4,5:1", "7:1"],
                a: 1,
                explication: "A 3:1 a nagy címeknek elég. A világosszürke fehéren rendszeresen elbukik."
            },
            {
                q: "Mit nem szabad soha eltávolítani egy billentyűzettel aktív elemről?",
                options: [
                    "A fókuszkeretét",
                    "A mellette látható feliratát",
                    "A rámutatási animációját"
                ],
                a: 0,
                explication: "Ha eltávolítják, mert csúnyának tartják, az oldal használhatatlan annak, aki nem tud egérrel célozni."
            },
            // 2. sorozat
            {
                q: "Mekkora legyen legalább egy érintési célpont?",
                options: [
                    "24 CSS-képpont",
                    "44 CSS-képpont, azaz nagyjából 9–11 milliméter",
                    "64 CSS-képpont"
                ],
                a: 1,
                explication: "Ez nagyjából akkora felület, amekkorát egy ujj lefed."
            },
            {
                q: "Mit kell tenni egy tisztán díszítő képpel?",
                options: [
                    "Részletesen leírni, pontosan úgy, mint az összes többi képet",
                    "Díszítőként megjelölni, hogy fölöslegesen ne olvassák fel",
                    "Törölni az oldalról, hiszen semmilyen információt nem hordoz"
                ],
                a: 1,
                explication: "Csak az információt hordozó képeknek kell leírás."
            },
            {
                q: "Mikor kell foglalkozni az akadálymentességgel?",
                options: [
                    "A végén, az átvételi tesztelésnél",
                    "Az élesítés után, ha egy felhasználó panaszt tesz",
                    "Már a terveknél"
                ],
                a: 2,
                explication: "A végén pótolva újratervezés lesz belőle: kontraszt, arculat, jelölőkód. Kezdettől figyelembe véve szinte semmibe sem kerül."
            }
        ],

        // ---------------------------------------------------------------
        "architecture-information": [
            // 1. sorozat
            {
                q: "Mire kell épülnie a navigációnak?",
                options: [
                    "A szervezet szervezeti ábrájára",
                    "A tartalmak időrendi sorrendjére",
                    "A felhasználók feladataira"
                ],
                a: 2,
                explication: "A látogató nem a „tagnyilvántartási osztályt” keresi, hanem azt, hogy „hogyan regisztrálhatok”."
            },
            {
                q: "Miből áll a kártyarendezés?",
                options: [
                    "Az oldalak látogatottság szerinti rangsorolásából",
                    "Résztvevőket kérünk meg, hogy csoportosítsák a tartalmakat, és nevezzék el a csoportokat",
                    "A tartalmak közzétételi dátum szerinti rendezéséből"
                ],
                a: 1,
                explication: "A legtöbb résztvevőnél visszatérő csoportok mutatják az elvárt szerkezetet."
            },
            {
                q: "Hogyan ítélj meg egy menüfeliratot?",
                options: [
                    "A tömörsége alapján, és aszerint, hogy elfér-e egyetlen sorban a menüben",
                    "Aszerint, mennyire illik a márka szóhasználatát rögzítő szerkesztési irányelvekhez",
                    "Aki most ismerkedik az oldallal, tudja-e, mit talál mögötte?"
                ],
                a: 2,
                explication: "A belső szóhasználat ezen a próbán szinte mindig elbukik."
            },
            // 2. sorozat
            {
                q: "Mi a baj a „Megoldásaink” menüponttal?",
                options: [
                    "Túl hosszú egy menüponthoz, amelynek egy-két szóból kellene állnia",
                    "Túl kereskedelmi hangvételű egy közintézményi oldalhoz",
                    "Semmit sem árul el arról, mit találunk mögötte"
                ],
                a: 2,
                explication: "Az „Árak” egyetlen szóval mindent elmond."
            },
            {
                q: "Mit okoz, ha az „Ügyfélfelület” és a „Fiókom” egyszerre szerepel?",
                options: [
                    "Minden látogatáskor tétovázást: a látogatónak találgatnia kell",
                    "Jobban lefedi az egyes látogatók különböző igényeit, mert mindenki megtalálja a sajátját",
                    "Semmit, mindkettő érthető"
                ],
                a: 0,
                explication: "Két összetéveszthető menüpont többe kerül, mint amennyit hoz."
            },
            {
                q: "Hány első szintű menüpont felett kell csoportosítani?",
                options: [
                    "Legfeljebb három pont felett",
                    "Tizenöt pontig csoportosítás nélkül",
                    "Nagyjából hét felett"
                ],
                a: 2,
                explication: "És a csoportosításnak a felhasználóktól kell jönnie, nem belső alkuból."
            }
        ],

        // ---------------------------------------------------------------
        "mobile-dabord": [
            // 1. sorozat
            {
                q: "Miért érdemes először a kis képernyőre tervezni?",
                options: [
                    "Mert sokkal gyorsabb megrajzolni, mint a több oszlopos asztali változatot",
                    "Mert az eszközök ezt ajánlják",
                    "Mert a megkötés rákényszerít, hogy azonosítsd, mi számít igazán"
                ],
                a: 2,
                explication: "Utána bővíteni könnyű; kapkodva elvenni megcsonkított mobilváltozatokat szül."
            },
            {
                q: "Mihez kell igazítani a töréspontokat?",
                options: [
                    "A projekt idején legkelendőbb, legelterjedtebb telefonmodellekhez",
                    "A tartalomhoz: oda, ahol az elrendezés kezd rosszul kinézni",
                    "Egyetemes szabványértékekhez"
                ],
                a: 1,
                explication: "A modellek évente változnak, és több százféle létezik."
            },
            {
                q: "Mit ér, ha mobilon az elemek felét egy menü mögé rejtjük?",
                options: [
                    "Ez a reszponzív tervezés bevált gyakorlata",
                    "Csak elhalasztja a döntést: ha egy tartalomnak nincs itt helye, máshol megérdemli?",
                    "Az elemek számától függ"
                ],
                a: 1,
                explication: "A kis képernyő nem kicsinyíti a felületet: megmutatja, mi nem volt odavaló."
            },
            // 2. sorozat
            {
                q: "Nagyjából mekkora felületet fed le egy ujj?",
                options: ["3 millimétert", "9 millimétert", "20 millimétert"],
                a: 1,
                explication: "Ezért ajánlanak 44 CSS-képpontot egy érintési célpontra."
            },
            {
                q: "Mit okoz egy 24 képpontos hivatkozás, szorosan más hivatkozások között?",
                options: [
                    "Téves koppintásokat, amelyeket a felhasználó magának tulajdonít",
                    "Tömör és hatékony felületet",
                    "Csak a legkisebb telefonokon okoz gondot, tehát a gyakorlatban elhanyagolható"
                ],
                a: 0,
                explication: "A felhasználó azt fogja hinni, hogy ő hibázott. Pedig a tervező tévedett."
            },
            {
                q: "Mit kell a célpont méretén kívül még ellenőrizni?",
                options: [
                    "A színét, hogy jól kiemelkedjen a háttérből",
                    "A szomszédos célpontoktól való távolságot",
                    "A rámutatási animációját az érintőképernyőn"
                ],
                a: 1,
                explication: "Két egymáshoz tapadó nagy célpont annyi hibát okoz, mint egy kicsi."
            }
        ],

        // ---------------------------------------------------------------
        "systeme-de-design": [
            // 1. sorozat
            {
                q: "Mi a design-rendszer lényegében?",
                options: [
                    "Újrahasznosítható komponensek könyvtára",
                    "Egyszer meghozott döntések összessége",
                    "Arculati kézikönyv a színeivel és a betűtípusaival"
                ],
                a: 1,
                explication: "A komponensek csak ezeknek a döntéseknek a megtestesülései."
            },
            {
                q: "Mire jó elsősorban egy design-rendszer?",
                options: [
                    "Hogy szebb legyen",
                    "Hogy gyorsítsa a fejlesztést, mert így nem kell minden egyes képernyőt újrarajzolni",
                    "Hogy lezárjon kérdéseket, és ne kelljen minden képernyőnél újra feltenni őket"
                ],
                a: 2,
                explication: "Valahányszor egy tervező azt kérdezi: „mekkora legyen ez a cím?”, a rendszernek már előtte meg kellett válaszolnia."
            },
            {
                q: "Miért jobb egy térközskála a szabad értékeknél?",
                options: [
                    "A megkötés csökkenti a döntések számát, és magától adódik a következetesség",
                    "A szabad értékek technikailag nehezebbek",
                    "A skálát a böngészők írják elő"
                ],
                a: 0,
                explication: "Skála nélkül a térközök 12, 15, 18, 20, 24 képpontosak, képernyőtől és naptól függően. Semmi sem hibás, az egész összecsapottnak hat."
            },
            // 2. sorozat
            {
                q: "Mi a design-adósság?",
                options: [
                    "A rendszer létrehozásának költsége",
                    "A „csak ennél a képernyőnél” elfogadott apró kivételek felhalmozódása",
                    "A dokumentáció lemaradása"
                ],
                a: 1,
                explication: "Mindegyik ártalmatlannak tűnik; az összegük használhatatlanná teszi a rendszert, hiszen már nem a valódi terméket írja le."
            },
            {
                q: "Mit kezdj egy elfogadott kivétellel?",
                options: [
                    "Építsd be a rendszerbe, vagy javítsd ki",
                    "Dokumentáld vállalt, tudatos egyedi esetként",
                    "Hagyd élni: úgyis marginális marad a termékben"
                ],
                a: 0,
                explication: "Ha hagyjuk a rendszer mellett élni, az a vég kezdete."
            },
            {
                q: "Mi lesz egy gazda nélküli design-rendszerrel?",
                options: [
                    "Magától stabilizálódik",
                    "Tovább működik, ha jó a dokumentáció",
                    "Néhány hónap alatt hamissá válik, és a csapatok abbahagyják a használatát"
                ],
                a: 2,
                explication: "A design-rendszer önálló termék. Ha nincs, aki döntsön róla, nem marad életben."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Milyen közös problémával foglalkozik ez a négy téma?",
            options: [
                "A felületek esztétikájával",
                "Azzal, ami akkor jelenik meg, amikor egy projekt túlnő egy magányos terven",
                "A technikai teljesítménnyel"
            ],
            a: 1,
            explication: "Felhasználók, akik nem hasonlítanak rád, több tucat képernyő, amelynek együtt kell működnie, nagyon különböző képernyőméretek."
        },
        {
            q: "Melyik próba tárja fel öt perc alatt a legtöbb akadálymentességi problémát?",
            options: [
                "Végigjárni a saját oldaladat csak billentyűzettel",
                "Ellenőrizni a színkontrasztokat az egész oldalon, elemről elemre",
                "Elolvasni a forráskódot"
            ],
            a: 0,
            explication: "Egér nélkül a blokkoló akadályok azonnal szembeötlenek."
        },
        {
            q: "Mi a közös egy szervezeti ábrára épülő menüben és egy gazda nélküli rendszerben?",
            options: [
                "Mindkettő drága előállítani",
                "Mindkettőt tiltják a szabályok",
                "Mindkettő tökéletesen világos belülről, és használhatatlan kívülről"
            ],
            a: 2,
            explication: "A belső nézőpont ennek a szintnek a közös csapdája."
        },
        {
            q: "Egy gomb oldala 32 képpont. Mit gondolj róla?",
            options: [
                "A 44 képpontos ajánlás alatt van",
                "Megfelelő",
                "A méret nem számít, ha jó a kontraszt"
            ],
            a: 0,
            explication: "Nagyjából 8,5 mm a képernyőn, szemben az ujj által lefedett 9 mm-rel: a hibák előre láthatók."
        },
        {
            q: "Miért kell az akadálymentességre már a terveknél gondolni?",
            options: [
                "Mert utána át kell dolgozni az arculatot és a jelölőkódot: az újratervezés",
                "Hogy tartsuk a határidőket",
                "Mert az eszközök előírják"
            ],
            a: 0,
            explication: "Kezdetben főleg arról van szó, hogy a jó színeket és a jó méreteket választjuk."
        },
        {
            q: "Milyen hozzáállás köti össze a kártyarendezést és a billentyűzetes próbát?",
            options: [
                "A valósággal ellenőrizni, ahelyett hogy az íróasztal mögül okoskodnánk",
                "Automatizálni az ellenőrzéseket",
                "Dokumentálni a döntéseket"
            ],
            a: 0,
            explication: "Mindkettő kilép a saját nézőpontunkból, ami éppen a tervező torzítása."
        }
    ]
};
