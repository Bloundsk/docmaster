// ===================================
// KÉRDÉSBANK — UX/UI DESIGN, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "performance-percue": [
            // 1. sorozat
            {
                q: "Mekkora késés alatt tűnik azonnalinak egy reakció?",
                options: ["0,1 másodperc", "1 másodperc", "3 másodperc"],
                a: 0,
                explication: "Ez alatt a felhasználónak az az érzése, hogy közvetlenül a tárgyat mozgatja."
            },
            {
                q: "Mekkora késéstől kell haladást jelezni?",
                options: [
                    "1 másodperctől",
                    "10 másodperctől, a figyelem határától",
                    "30 másodperctől"
                ],
                a: 1,
                explication: "Ezen túl az ember másba kezd."
            },
            {
                q: "Milyennek tűnik egy üres várakozás egy ugyanolyan hosszú, de kitöltött várakozáshoz képest?",
                options: [
                    "Rövidebbnek, mert nem kell elszenvedni",
                    "Nagyjából kétszer olyan hosszúnak",
                    "Ugyanolyannak, hiszen az időtartam azonos"
                ],
                a: 1,
                explication: "Ezért hasznosak a tartalomvázak és a kattintásra adott azonnali visszajelzés."
            },
            // 2. sorozat
            {
                q: "Mi az optimista megjelenítés?",
                options: [
                    "Elrejteni a hibákat a felhasználó elől, hogy ne nyugtalankodjon",
                    "Az oldal összes lapjának előzetes betöltése",
                    "A várt eredményt megmutatni a szerver megerősítése előtt"
                ],
                a: 2,
                explication: "Hiba esetén javítunk. Ettől olyan gördülékenyek a modern üzenetküldő alkalmazások."
            },
            {
                q: "Mi a baj a haladás jelzése nélküli betöltési animációval?",
                options: [
                    "Akkumulátort és megjelenítési erőforrást fogyaszt, és semmit sem ad az olvasónak",
                    "Semmiről sem tájékoztat, és minél határozatlanabb, annál hosszabbnak tűnik",
                    "Nem akadálymentes a képernyőolvasóknak, amelyek nem tudják bemondani"
                ],
                a: 1,
                explication: "Rövid műveletnél a tartalomváz jobb a pörgettyűnél."
            },
            {
                q: "Mennyi ideig tart egy 2500 kB-os oldal 10 Mb/s-os kapcsolaton?",
                options: [
                    "0,2 másodperc letöltés",
                    "2 másodperc letöltés",
                    "20 másodperc letöltés"
                ],
                a: 1,
                explication: "Ehhez jön még a késleltetés és a megjelenítés ideje."
            }
        ],

        // ---------------------------------------------------------------
        "charge-cognitive": [
            // 1. sorozat
            {
                q: "Hogyan nő a döntési idő Hick törvénye szerint?",
                options: [
                    "Lineárisan a felkínált lehetőségek számával",
                    "Exponenciálisan a lehetőségek számával",
                    "A lehetőségek számának logaritmusával"
                ],
                a: 2,
                explication: "2-ről 4 választásra lépni ugyanannyiba kerül, mint 4-ről 8-ra. Egy már hosszú listához újabb lehetőségeket adni szinte semmibe sem kerül."
            },
            {
                q: "Szó szerint alkalmazva mit mond ki Hick törvénye az almenükről?",
                options: [
                    "Hogy mindig gyorsítják a navigációt, függetlenül attól, hány menüpont és alszint van benne",
                    "Hogy egy lapos lista jobb egy kétszintű navigációnál, mert csak egyszer kell dönteni",
                    "Hogy nincs mérhető hatásuk arra, mennyi idő alatt találja meg a látogató azt, amit éppen keres"
                ],
                a: 1,
                explication: "Ez ellentmond annak, amit általában olvasni — és mégis ezt mondja a képlet."
            },
            {
                q: "Mi teszi akkor nyerővé a csoportosítást?",
                options: [
                    "Hick törvénye, amely a lehetőségek számát veszi figyelembe",
                    "A vizuális pásztázás: megtalálni olvasás nélkül",
                    "A felhasználók megszokása, akik ismerik az oldalt"
                ],
                a: 1,
                explication: "Aki most ismerkedik egy menüvel, nem választ, hanem keres — és ennek költsége nagyjából lineáris."
            },
            // 2. sorozat
            {
                q: "Fitts törvénye szerint mitől függ egy célpont eléréséhez szükséges idő?",
                options: [
                    "A távolságától és a méretétől",
                    "A színétől és a kontrasztjától",
                    "A képernyőn lévő elemek számától"
                ],
                a: 0,
                explication: "Ezért értékesek a szélek és a sarkok: a kurzor magától megáll ott."
            },
            {
                q: "Hány elemet tart meg egyszerre a munkamemória?",
                options: ["Pontosan hetet", "Nagyjából négyet", "Tizenöt körül"],
                a: 1,
                explication: "Ez a ma általánosan elfogadott nagyságrend, nem a sokáig idézett hét."
            },
            {
                q: "Mi az a hiba, amely összetéveszti az egyszerűt a minimalistával?",
                options: [
                    "Túl sok magyarázatot adni, egészen addig, hogy a felhasználó teljesen elvész a szövegben",
                    "Túl sok színt használni, egészen addig, hogy semmi sem emelkedik ki igazán a képernyőn",
                    "Feliratokat és támpontokat elhagyni: a képernyő letisztul, a mentális terhelés nő"
                ],
                a: 2,
                explication: "Az egyszerű felület nem az, amelyik a legkevesebbet mutatja, hanem az, amelyik a legkevesebb erőfeszítést kívánja."
            }
        ],

        // ---------------------------------------------------------------
        "schemas-sombres": [
            // 1. sorozat
            {
                q: "Mi a sötét minta?",
                options: [
                    "Éjszakai módú felület",
                    "Olyan felület, amelyet arra terveztek, hogy olyasmit csikarjon ki, amit a felhasználó tájékozottan nem választott volna",
                    "Ergonómiai hiba"
                ],
                a: 1,
                explication: "Ezek nem ügyetlenségek: szándékos, gyakran tesztelt és optimalizált döntések."
            },
            {
                q: "Mit mond az európai jog a hozzájárulásról?",
                options: [
                    "Ugyanolyan könnyű legyen megtagadni, mint megadni",
                    "Elég, ha valahol az oldalon van egy elutasító hivatkozás",
                    "Ezt a kérdést nem szabályozza"
                ],
                a: 0,
                explication: "Az a sütisáv, amelyen nincs „összes elutasítása” gomb ugyanazon a szinten, mint az „összes elfogadása”, nem felel meg az előírásoknak."
            },
            {
                q: "Mit várnak el a fogyasztóvédelmi szabályok a lemondásnál?",
                options: [
                    "Harmincnapos felmondási időt",
                    "Ugyanolyan egyszerű módot, mint a feliratkozásnál",
                    "Írásbeli megerősítést tértivevényes ajánlott levélben"
                ],
                a: 1,
                explication: "Harminc másodperc alatt feliratkozni, aztán egy elrejtett oldalt keresni a távozáshoz: ez nem felel meg az elvárásoknak."
            },
            // 2. sorozat
            {
                q: "Miért rossz számítás a sötét minta?",
                options: [
                    "A nyereség azonnali és mért, a költség késleltetett és szétszórt",
                    "Nem működik",
                    "Technikailag bonyolult bevezetni és karbantartani, ezért nem éri meg a fáradságot"
                ],
                a: 0,
                explication: "A lemondások, a visszatérítések, a negatív értékelések és a bizalmatlanság nem jelennek meg a konverziós irányítópulton."
            },
            {
                q: "Melyik próbával ismerhető fel egy nem szándékos sötét minta?",
                options: [
                    "Ha a felhasználó rájönne erre a mechanizmusra, becsapva érezné magát?",
                    "Ellenőrizni a jogi megfelelést",
                    "Kikérni az értékesítési csapat véleményét, amely a legjobban ismeri a célokat"
                ],
                a: 0,
                explication: "A szándék semmin sem változtat a felhasználó számára."
            },
            {
                q: "Mi a „Nem, köszönöm, inkább többet fizetek”?",
                options: [
                    "Vállalt márkahangnem",
                    "Hasznos pontosítás, amely megóvja a felhasználót attól, hogy figyelmetlenségből, véletlenül utasítson el",
                    "A visszautasítás szégyene: úgy megfogalmazott felirat, hogy kellemetlen legyen rákattintani"
                ],
                a: 2,
                explication: "Ez az egyik legelterjedtebb sötét minta, és az egyik legkönnyebben javítható."
            }
        ],

        // ---------------------------------------------------------------
        "mesurer-le-design": [
            // 1. sorozat
            {
                q: "Mi a használhatósági teszt legfontosabb mérése?",
                options: [
                    "A sikerességi arány",
                    "A feladattal töltött idő",
                    "A bevallott elégedettség"
                ],
                a: 0,
                explication: "És ezt felejtik el a leggyakrabban."
            },
            {
                q: "Miért kell óvatosan értelmezni a feladatidőt?",
                options: [
                    "A gyorsabb nem mindig jobb, főleg egy fontos döntésnél",
                    "Nehéz tisztán mérni, valós használati körülmények között",
                    "Túlságosan eltér résztvevőnként ahhoz, hogy tesztek között összehasonlítható legyen"
                ],
                a: 0,
                explication: "Egy komoly vásárlásnál a hosszabb idő figyelmes olvasást is jelezhet."
            },
            {
                q: "Mit mutat meg elsősorban egy használhatósági teszt?",
                options: [
                    "Részletesen azt, hogy miért buknak el az emberek egy feladaton",
                    "Azt, mit szeretnek jobban az emberek",
                    "Azt, hol buknak el az emberek, ritkán azt, miért"
                ],
                a: 2,
                explication: "A miértet a megfigyelés és az utólag feltett kérdések adják."
            },
            // 2. sorozat
            {
                q: "Mit ér egy magában álló szám a design terén?",
                options: [
                    "Elég, ha szigorúan, rendszeresen és mindig ugyanúgy mérik",
                    "Többet a semminél",
                    "Semmit: az összehasonlítás hozza létre az információt"
                ],
                a: 2,
                explication: "Előtte és utána, A és B változat: viszonyítási pont nélkül egy pontszám semmit sem mond."
            },
            {
                q: "Miért rossz mutató az oldalon töltött idő?",
                options: [
                    "Nehéz megbízhatóan és pontosan összegyűjteni",
                    "Kétértelmű: érdeklődés vagy zavarodottság?",
                    "Böngészőnként és eszközönként is jelentősen eltér"
                ],
                a: 1,
                explication: "Egy kényelmes, de értelmezhetetlen mutató rosszabb, mint ha semmit sem mérnénk: azt az érzést kelti, hogy tudunk valamit."
            },
            {
                q: "Hogyan alakíts egy javítást költségvetési érvvé?",
                options: [
                    "Az ágazat bevált gyakorlataira és a legtöbbet idézett tanulmányokra hivatkozva",
                    "Előtte–utána terveket mutatva",
                    "Kiszámolva, hány órát takarít meg évente az összes felhasználónál"
                ],
                a: 2,
                explication: "Öt másodperc napi három feladaton, kétszáz embernél: nagyjából évi 183 óra."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Miről szól ez a szint az előzőekhez képest?",
            options: [
                "Arról, ami a veled szemben álló emberben zajlik",
                "A tervezőeszközökről",
                "Az integrációs technikáról és a ténylegesen megírt kódról"
            ],
            a: 0,
            explication: "Mennyi ideig hiszi, hogy vár, hány lehetőséget bír el a figyelme, és mi készteti feladásra."
        },
        {
            q: "Milyen etikai kérdést vet fel ez a szint?",
            options: [
                "Szabad-e mérni a felhasználók viselkedését?",
                "Segítésre használjuk ezt a tudást, vagy manipulálásra?",
                "Tájékoztatni kell-e a felhasználókat a lélektani törvényekről?"
            ],
            a: 1,
            explication: "Ugyanazok a mechanizmusok gördülékenyebbé tehetnek egy folyamatot, vagy csapdába ejthetnek egy hozzájárulást."
        },
        {
            q: "Két emelő hat az észlelt várakozásra. Melyek?",
            options: [
                "A súly csökkentése és a várakozás kitöltése",
                "A sávszélesség növelése és a hibák elrejtése",
                "Az előtöltés és a tömörítés"
            ],
            a: 0,
            explication: "Az első a valós időre hat, a második az érzett időre. Mindkettő számít."
        },
        {
            q: "Miért hangsúlyozza ez a szint a mérést?",
            options: [
                "Mert a szabályozás előírja",
                "Mert az eszközök ma könnyűvé, gyorssá és olcsóvá teszik",
                "Mert mérés nélkül a design nem javul: csak változik"
            ],
            a: 2,
            explication: "Az, hogy „szebb”, nem elfogadható érv, az pedig, hogy „az ügyfélnek jobban tetszik”, még kevésbé."
        },
        {
            q: "Mi különbözteti meg az egyszerű felületet a minimalistától?",
            options: [
                "Az egyszerű kevés erőfeszítést kíván, a minimalista kevés dolgot mutat",
                "Semmi, két szó ugyanarra",
                "A minimalista akadálymentesebb"
            ],
            a: 0,
            explication: "A támpontok elhagyása letisztítja a képernyőt és növeli a mentális terhelést: a felhasználónak találgatnia kell."
        },
        {
            q: "Mi az a visszaszámláló, amely minden látogatáskor újraindul?",
            options: [
                "A szakmában elfogadott konverziós technika",
                "Technikai hiba",
                "Hamis sürgetés, vagyis sötét minta"
            ],
            a: 2,
            explication: "Akárcsak a „3 ember nézi ezt a terméket” minden alap nélkül."
        }
    ]
};
