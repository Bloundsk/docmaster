// ===================================
// KÉRDÉSBANK — TERMELÉKENYSÉG, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "energie-plutot-que-temps": [
            // 1. sorozat
            {
                q: "Milyen figyelmi ritmus figyelhető meg a leggyakrabban egy nap során?",
                options: [
                    "Folyamatos emelkedés estig",
                    "Délelőtti csúcs, kora délutáni mélypont, részleges visszaemelkedés",
                    "Állandó szint, amíg kipihent vagy"
                ],
                a: 1,
                explication: "A szakaszok pontos helye nagyon változó, de a létezésük állandó."
            },
            {
                q: "Hogyan ismerd fel a saját ritmusodat?",
                options: [
                    "Az általános benyomásodra hagyatkozva",
                    "Két héten át naponta háromszor felírva a koncentrációs szintedet",
                    "A kollégák átlagával összevetve"
                ],
                a: 1,
                explication: "A minta általában tíz nap után rajzolódik ki — és nem mindig az, amire számítottál."
            },
            {
                q: "Mit eredményez, ha egy már teli naphoz este két órát hozzáteszel?",
                options: [
                    "Két óra tiszta többletmunkát",
                    "Tiszta többletet, feltéve, hogy a hétvégén rendesen kipihened",
                    "Alacsony hatékonyságú órákat, és rosszabb másnapot"
                ],
                a: 2,
                explication: "Egy hét alatt az összteljesítmény csökken. Ez bőségesen dokumentált."
            },
            // 2. sorozat
            {
                q: "Mitől hatékony egy szünet?",
                options: [
                    "A teljes hosszától, egész percekben mérve",
                    "Attól, hogy rögzített időpontban tartod",
                    "Attól, hogy egészen mást csinálsz közben"
                ],
                a: 2,
                explication: "A telefon nézegetése nem pihenés a figyelemnek: ugyanazt az erőforrást veszi igénybe, csak másképp."
            },
            {
                q: "Mi a napi ritmus ritkán alkalmazott gyakorlati következménye?",
                options: [
                    "Korábban kezdeni reggel",
                    "Az elmélyült munkát a csúcsra, a gépies feladatokat a mélypontra tenni",
                    "A feladatokat egyenletesen elosztani"
                ],
                a: 1,
                explication: "A csúcsot pedig nagyon gyakran üzenetekre és értekezletekre fordítjuk."
            },
            {
                q: "Miért marad észrevétlen a szünetek hiánya miatti teljesítménycsökkenés?",
                options: [
                    "Mert csekély, és könnyen belefér a napba",
                    "Mert csak több egymást követő hét után jelentkezik, és addigra megszokjuk",
                    "Mert továbbra is el vagyunk foglalva, csak kevesebbet hozunk létre"
                ],
                a: 2,
                explication: "A tevékenység látható marad; az eredmény az, ami csökken."
            }
        ],

        // ---------------------------------------------------------------
        "systemes-plutot-que-volonte": [
            // 1. sorozat
            {
                q: "Miért adja fel végül egy módszer, amelyre minden nap gondolni kell?",
                options: [
                    "Mert rosszul tervezték",
                    "Mert túl sok időt kíván",
                    "Mert az akaraterő korlátozott erőforrás, amely már nagyrészt elfogyott"
                ],
                a: 2,
                explication: "Ez nem személyes gyengeség kérdése."
            },
            {
                q: "Milyen hatása van, ha húsz másodpercnyi erőfeszítést teszel egy mozdulat elé?",
                options: [
                    "Semmilyen, ez teljesen elhanyagolható",
                    "Erősen csökkenti a gyakoriságát",
                    "Épp ellenkezőleg, jutalmazóbbá teszi"
                ],
                a: 1,
                explication: "Húsz másodperc elvétele pedig ugyanennyivel növeli. Ez a terület legerősebb eszköze."
            },
            {
                q: "Mit jelent egy szokás lehorgonyzása?",
                options: [
                    "Nagyon gondosan beírni a naptárba",
                    "Nyilvánosan vállalni, hogy minden nap tartod",
                    "Egy már automatikus cselekvéshez kötni"
                ],
                a: 2,
                explication: "A kiváltó jel már megvan: nincs mit megjegyezni."
            },
            // 2. sorozat
            {
                q: "Milyen folytatási szabály különbözteti meg a tartós szokást a kudarcba fulladt próbálkozástól?",
                options: [
                    "Soha ne hagyd ki kétszer egymás után",
                    "Másnap pótold, amit kihagytál",
                    "Kezdd újra az egész sorozatot a nulláról"
                ],
                a: 0,
                explication: "Egy kihagyott nap baleset; kettő egy feladás kezdete."
            },
            {
                q: "Mire jó egy szokás „minimális változata”?",
                options: [
                    "Hogy már az első héten gyors eredményt érj el",
                    "Hogy mérd az előrehaladásodat",
                    "Hogy soha ne szakadjon meg a sorozat"
                ],
                a: 2,
                explication: "„Írj egy mondatot”, „nyisd meg a fájlt”: a cél nem az eredmény."
            },
            {
                q: "Miért ne vezess be öt új szokást ugyanazon a hétfőn?",
                options: [
                    "Mert kimeríti az akaraterő-tartalékot, és mind együtt buknak el",
                    "Mert túl sok időt kíván",
                    "Mert ellentmondanának egymásnak"
                ],
                a: 0,
                explication: "Egyszerre egy szokás, hat-nyolc hétig, aztán a következő."
            }
        ],

        // ---------------------------------------------------------------
        "productivite-collective": [
            // 1. sorozat
            {
                q: "Mibe kerül valójában egy értekezlet?",
                options: [
                    "A teljes hosszába, jelenléti órákban mérve",
                    "A hosszának és a résztvevők számának szorzatába",
                    "A levezető felkészülési idejébe, amely gyakran a leghosszabb"
                ],
                a: 1,
                explication: "Egy óra nyolc emberrel egy teljes munkanap."
            },
            {
                q: "Mi a hasznos értekezlet három, egyszerre szükséges feltétele?",
                options: [
                    "Egy eldöntendő kérdés, a megfelelő emberek, előre elolvasott előkészítő anyag",
                    "Napirend, emlékeztető, rögzített időpont",
                    "Egy terem, egy levezető, korlátozott időtartam"
                ],
                a: 0,
                explication: "Egy tájékoztató értekezlet lehet egy üzenet is."
            },
            {
                q: "Miért kerül kevesebbe az írásos kommunikáció, mint a szinkron?",
                options: [
                    "Mert sokkal gyorsabb megírni és továbbítani, mint összehívni egy megbeszélést",
                    "Mert kevésbé köti a szerzőt",
                    "Mert mindenki akkor olvas, amikor tud, a napja szétszabdalása nélkül"
                ],
                a: 2,
                explication: "Többe kerül a küldőnek, és sokkal kevesebbe az összes címzettnek."
            },
            // 2. sorozat
            {
                q: "Heti 1,5 órás értekezlet 7 emberrel, 45 EUR/óra járulékokkal számolt költséggel: mennyi a költség alkalmanként?",
                options: [
                    "68 EUR",
                    "315 EUR",
                    "473 EUR"
                ],
                a: 2,
                explication: "Alkalmanként 10,5 munkaóra, vagyis évente nagyjából 22 700 EUR."
            },
            {
                q: "Mit ér egy értekezlet, amely döntés és kiosztott feladat nélkül ér véget?",
                options: [
                    "Fenntartotta az egész csapat összetartását",
                    "Nem is volt: csak lefoglalta az időt",
                    "Közvetlenül előkészíti a következő heti értekezletet"
                ],
                a: 1,
                explication: "Az eldöntendő kérdés a három feltétel közül az első."
            },
            {
                q: "Mit eredményez egy olyan kultúra, amelyben minden üzenetre néhány percen belül válasz jár?",
                options: [
                    "Gyorsabban reagáló csapatot",
                    "Azt, hogy mindenki számára egyszerre lehetetlen az elmélyült munka",
                    "Jobb információáramlást az egész csapaton belül, mert mindenki mindenről tud"
                ],
                a: 1,
                explication: "A határidőkről szóló kifejezett megállapodás az egész csapatot egy csapásra felszabadítja."
            }
        ],

        // ---------------------------------------------------------------
        "recul-regulier": [
            // 1. sorozat
            {
                q: "Mi történik rendszeres visszatekintés nélkül?",
                options: [
                    "Az elcsúszás addig halmozódik, amíg a rendszert egyben el nem hagyják",
                    "A rendszer végül mindig magától stabilizálódik, ha elég ideig türelmes vagy",
                    "A feladatok idővel természetes módon, maguktól rangsorolódnak a fontosságuk szerint"
                ],
                a: 0,
                explication: "A hat hónapja vállalt kötelezettségeknek már nincs értelme, és senki sem dönt úgy, hogy elhagyja őket."
            },
            {
                q: "Milyen kérdést tegyél fel minden folyamatban lévő projektnél?",
                options: [
                    "Ha még nem létezne, belekezdenék ma?",
                    "Mennyi időt fektettem már bele?",
                    "Ki más vehetné át?"
                ],
                a: 0,
                explication: "Ha a válasz nem, a projekt csak a tehetetlenség miatt él tovább."
            },
            {
                q: "Mit tegyél, ha egy szervezési rendszer szétesik?",
                options: [
                    "Vezess be azonnal egy újat, amely jobban illik hozzád",
                    "Állítsd vissza a rendszeres áttekintést",
                    "Csökkentsd érezhetően a követett projektek számát"
                ],
                a: 1,
                explication: "Az eszközváltás csak egy negyedévvel tolja el a gondot."
            },
            // 2. sorozat
            {
                q: "Mit foglal magában a heti harmincperces áttekintés?",
                options: [
                    "A gyűjtőhelyek kiürítését, a projektek átnézését, a hét megtervezését",
                    "Az éves célok felülvizsgálatát",
                    "A piacon épp elérhető szervezési eszközök és alkalmazások összehasonlítását"
                ],
                a: 0,
                explication: "Ez az áttekintés akadályozza meg a felhalmozódást."
            },
            {
                q: "Mire kényszerít a „semmi új anélkül, hogy valamit elvennél” szabály?",
                options: [
                    "A terhelés állandó csökkentésére",
                    "Arra, hogy a hozzáadás pillanatában dönts, ne hat hónappal később, kapkodva",
                    "A rendszeres feladatátadásra"
                ],
                a: 1,
                explication: "Hozzáadni könnyű és jólesik; abbahagyni azt kívánja, hogy vállald a lemondást."
            },
            {
                q: "Miért ne indokolja egy projekt folytatását a már belefektetett idő?",
                options: [
                    "Mert nem jön vissza, bármit teszünk is utána",
                    "Mert rosszul használták fel",
                    "Mert egy másik projekt mindig kifizetődőbb ennél"
                ],
                a: 0,
                explication: "Csak annak az értéke számít, ami még hátravan, nem annak, amit már elköltöttünk."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "A legszigorúbb módszerek mindig a leghatékonyabbak",
                "Az eszköz dönti el egy rendszer sikerét",
                "Ami évekig kitart, az nem a motiváción múlik"
            ],
            a: 2,
            explication: "A test ritmusa, a környezet, a közös szabályok, a rendszeres áttekintés: egyik sem igényel napi akaraterőt."
        },
        {
            q: "Mi a közös a környezet kialakításában és az aszinkron kommunikációra való áttérésben?",
            options: [
                "Mindkettőhöz külön szoftver kell",
                "Mindkettő csak csapatban működik, egyetlen embernél soha, bármilyen fegyelmezett is",
                "Mindkettő megszüntet egy erőfeszítést, ahelyett hogy több fegyelmet kívánna"
            ],
            a: 2,
            explication: "Az egyik az egyénnek, a másik a közösségnek csökkenti a súrlódást."
        },
        {
            q: "Miért éri el hamar a határát az egyéni szervezettség?",
            options: [
                "Mert a megszakítások és az elvesztegetett idő nagy része közös",
                "Mert az egyéni módszerek megbízhatatlanok",
                "Mert túl sok kitartást kíván"
            ],
            a: 0,
            explication: "Egy rosszul szervezett csapat mindenki szervezettségét semmissé teszi."
        },
        {
            q: "Valakinek harmadszor sem sikerül megtartania egy szokást. Melyik a legvalószínűbb magyarázat?",
            options: [
                "A szokás a motiváción múlik, nem a környezeten",
                "Hiányzik belőle a fegyelem",
                "Egyszerűen rossz szokást választott az elején, ennyi az egész"
            ],
            a: 0,
            explication: "Lehorgonyzás, minimális változat, csökkentett súrlódás, folytatási szabály: szinte mindig ezek hiányoznak."
        },
        {
            q: "Miért működik egy új rendszer néhány hétig, mielőtt az is elcsúszik?",
            options: [
                "Mert az újdonság tartósan motivál",
                "Mert épp mindent újrarendeztél, nem azért, mert jobb",
                "Mert eleve jobban illik hozzád"
            ],
            a: 1,
            explication: "Nem a módszer hiányzott, hanem az áttekintés."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot alkalmazol?",
            options: [
                "A nehéz munkát a legjobb idősávodba tenni",
                "Erősen csökkenteni a csapat heti értekezleteinek számát",
                "Egyetlen eszközt bevezetni"
            ],
            a: 0,
            explication: "Két óra a megfelelő időben annyit ér, mint négy a rosszban — és ez semmibe sem kerül."
        }
    ]
};
