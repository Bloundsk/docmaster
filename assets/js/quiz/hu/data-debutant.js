// ===================================
// KÉRDÉSBANK — ADATOK ÉS ELEMZÉS, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "les-kpi": [
            // 1. sorozat
            {
                q: "Mi egy jó mutató három feltétele?",
                options: [
                    "Pontos célhoz kapcsolódik, időben mérhető, cselekvésre ösztönöz",
                    "Lenyűgöző bemutatni, könnyű kiszámolni, és hónapról hónapra felfelé halad",
                    "Könnyen olvasható, látványos az értekezleten, és magyarázat nélkül megosztható"
                ],
                a: 0,
                explication: "A cselekvésre ösztönzés a legerősebb szűrő, és ezt felejtik el a leggyakrabban."
            },
            {
                q: "Melyik próbával ismerhető fel egy hiúsági mutató?",
                options: [
                    "Megnézni, közzéteszik-e a versenytársak: amit ők követnek, az jó támpont",
                    "Megkérdezni: ha ez a szám 20%-kal csökkenne, mit csinálnék másképp?",
                    "Megnézni, hogy minden hónapban nő-e"
                ],
                a: 1,
                explication: "Ha a válasz „semmit”, az nem mutató, hanem dísz."
            },
            {
                q: "A forgalom 100 000-ről 180 000 látogatóra nő, az eladások 1200-ról 1300-ra. Mire következtess?",
                options: [
                    "Szép fejlődés: +80% forgalom",
                    "A két mutató egyformán hasznos",
                    "A konverziós arány 40%-kal zuhan: a kampány rosszul célzott"
                ],
                a: 2,
                explication: "Mindkét szám helyes. Csak az egyik vezet döntéshez: újra kell gondolni a célzást."
            },
            // 2. sorozat
            {
                q: "Mi a különbség az eredménymutató és az előrejelző mutató között?",
                options: [
                    "Az első rögzít, a második előre jelez, és időt hagy a reagálásra",
                    "Az első a pénzügyekhez, a második az értékesítéshez tartozik: két osztály, két táblázat",
                    "Nincs különbség: ugyanannak két neve, az egyik a tanácsadásból, a másik a vezetésből jön"
                ],
                a: 0,
                explication: "Az árbevétel rögzít; az ezen a héten kiküldött árajánlatok száma a jövő havit jelzi előre."
            },
            {
                q: "Egy hasznos irányítópult tartalmaz…",
                options: [
                    "…minél több elérhető mutatót, hogy mindenki megtalálja a sajátját",
                    "…kizárólag pénzügyi mutatókat",
                    "…eredménymutatókat és előrejelző mutatókat"
                ],
                a: 2,
                explication: "Előrejelző mutató nélkül a problémákat csak akkor vesszük észre, amikor már késő cselekedni."
            },
            {
                q: "Mit tegyél, mielőtt követni kezdesz egy mutatót?",
                options: [
                    "Válaszd ki a vizualizációs eszközt",
                    "Hasonlítsd össze az ágazattal",
                    "Írd le, milyen döntés meghozatalához fog kelleni"
                ],
                a: 2,
                explication: "Nem a gyűjtés a nehéz, hanem a válogatás."
            }
        ],

        // ---------------------------------------------------------------
        "la-collecte-de-données": [
            // 1. sorozat
            {
                q: "Mire képes a mennyiségi adat, és mire nem?",
                options: [
                    "Megmondja, mennyi, hol és mikor, de azt sosem, hogy miért",
                    "Megmondja, miért cselekszenek az emberek, de azt sosem, hányan érintettek",
                    "Minden kérdésre válaszol, feltéve, hogy elég sok adat áll rendelkezésre"
                ],
                a: 0,
                explication: "A mennyiségi adat behatárolja a problémát, a minőségi megmagyarázza. Kiegészítik, nem helyettesítik egymást."
            },
            {
                q: "5000 megkeresett ügyfél, 200 válasz, 4,3/5 átlagpontszám. Mit mér ez a szám?",
                options: [
                    "Az ügyfelek elégedettségét, 5000 fős mintán mérve",
                    "A szolgáltatás minőségét",
                    "A válaszolók elégedettségét"
                ],
                a: 2,
                explication: "A 4800 hallgatag ügyfél, köztük a konkurenciához távozók, nincs benne a számításban."
            },
            {
                q: "Melyik a leggyakoribb és legnehezebben észrevehető adatgyűjtési hiba?",
                options: [
                    "Az elírások, amelyek sokáig észrevétlenek maradnak, és minden számításba beszivárognak",
                    "A kiválasztási torzítás: akik válaszolnak, nem hasonlítanak azokra, akik hallgatnak",
                    "A kis mennyiség: néhány száz megfigyelés alatt semmilyen eredmény sem igazán szilárd"
                ],
                a: 1,
                explication: "Mielőtt megbízol egy számban, kérdezd meg, kit nem számoltak bele."
            },
            // 2. sorozat
            {
                q: "Mit tegyél, ha meg akarod érteni, miért hagyják ott az ügyfelek a kosarukat?",
                options: [
                    "Elemezd részletesebben a számtáblázatot",
                    "Beszélj öt emberrel",
                    "Növeld a minta nagyságát"
                ],
                a: 1,
                explication: "Egy kosárelhagyás okát pusztán számokban keresni időpocsékolás."
            },
            {
                q: "Mit eredményez a „gyűjtsünk össze mindent, majd meglátjuk” stratégia?",
                options: [
                    "Gazdag, használható adatbázist, amelyből meríthetünk, ha a kérdések tisztázódtak",
                    "Versenyelőnyt",
                    "Óriási adatbázisokat, amelyekben semmit sem találunk, és véletlen korrelációkat"
                ],
                a: 2,
                explication: "A kérdés megelőzi az adatgyűjtést, sosem fordítva."
            },
            {
                q: "Milyen kérdéseket tegyél fel, mielőtt felhasználsz egy számot?",
                options: [
                    "Ki készítette, és mikor tették közzé?",
                    "Kit mértek meg, kit hagytak ki, hogyan, és milyen időszakban?",
                    "Egybevág-e azzal, amire számítok?"
                ],
                a: 1,
                explication: "Egy iskolai szünetes hét nem jelzi előre egy átlagos hét eredményét."
            }
        ],

        // ---------------------------------------------------------------
        "la-visualisation-de-données": [
            // 1. sorozat
            {
                q: "Mi egy diagram, alapvetően?",
                options: [
                    "Egy táblázatra tett dísz, hogy bemutathatóvá tegyük az értekezleten",
                    "Érv: irányítja az olvasást, és kiemel valamit",
                    "Az adatok semleges visszaadása, amely semmivel sem mond többet a táblázatnál"
                ],
                a: 1,
                explication: "Ugyanaz az adat a megjelenítésétől függően két ellentétes döntéshez vezethet."
            },
            {
                q: "Milyen formát válassz mennyiségek összehasonlításához?",
                options: [
                    "Rendezett vízszintes oszlopokat",
                    "Kördiagramot, amely jól mutatja az egyes részek súlyát",
                    "Vonaldiagramot"
                ],
                a: 0,
                explication: "A szem rosszul hasonlítja össze a szögeket: a kördiagram arányokhoz való, legfeljebb három résszel."
            },
            {
                q: "A = 51 eladás, B = 49. Ha a tengely 48-ról indul, mit lát az olvasó?",
                options: [
                    "A oszlopa háromszor olyan magas: a 4%-os különbség elsöprőnek tűnik",
                    "Két szinte egyforma oszlopot, ami hű kép",
                    "Egy olvashatatlan diagramot"
                ],
                a: 0,
                explication: "Egyetlen számot sem hamisítottak meg. Csak a skála változott."
            },
            // 2. sorozat
            {
                q: "Mi az első megszerzendő reflex egy diagram láttán?",
                options: [
                    "Elolvasni a jelmagyarázatot, hogy tudd, mit jelentenek az egyes színek",
                    "Megnézni, honnan indul a függőleges tengely",
                    "Ellenőrizni a forrást és a közzététel dátumát"
                ],
                a: 1,
                explication: "Sok eszköz alapból levágja a tengelyt: a manipuláció gyakran szándékolatlan."
            },
            {
                q: "Milyen címet adj egy diagramnak?",
                options: [
                    "„Eladások 2026”, egy semleges címet, amely nem irányítja az olvasást",
                    "Semmilyet, a tengelyek elegendők",
                    "„Hat hónap alatt megduplázódtak az eladások”"
                ],
                a: 2,
                explication: "Egy jó cím kimondja a következtetést. Egy jó ábra három másodperc alatt olvasható."
            },
            {
                q: "Mit árul el egy diagram, amelynek megértéséhez a jelmagyarázatot kell böngészni?",
                options: [
                    "Hogy nagyon gazdag, sokrétű információban",
                    "Hogy elsősorban szakértőknek szól",
                    "Hogy nem töltötte be a szerepét"
                ],
                a: 2,
                explication: "Egy diagramon egy gondolat, a tengelyek megnevezve a mértékegységükkel."
            }
        ],

        // ---------------------------------------------------------------
        "les-bases-des-statistiques": [
            // 1. sorozat
            {
                q: "Kilenc fizetés 600 000 Ft, egy 6 000 000 Ft. Mennyi az átlag, és mit ír le?",
                options: [
                    "600 000 Ft, és pontosan, helyesen írja le tíz emberből kilencnek a helyzetét",
                    "1 140 000 Ft, és a tíz alkalmazott egyikének a valóságát sem írja le",
                    "3 300 000 Ft, és a szélsőértékek közötti különbséget írja le"
                ],
                a: 1,
                explication: "A 600 000 Ft-os medián kilencük helyzetét írja le."
            },
            {
                q: "Mikor válaszd a mediánt az átlag helyett?",
                options: [
                    "Amint szélsőértékek vannak: fizetések, ingatlanárak, válaszidők",
                    "Ha a minta kicsi: harminc érték alatt az átlag instabillá válik",
                    "Ha az adatok régiek: a medián jobban öregszik, mint az elcsúszó átlag"
                ],
                a: 0,
                explication: "Mindkettőt közölni még jobb: a különbségük önmagában megmutatja az eloszlás egyenlőtlenségét."
            },
            {
                q: "Két változó együtt mozog. Milyen magyarázatok lehetségesek?",
                options: [
                    "A okozza B-t, feltétlenül",
                    "A okozza B-t, B okozza A-t, vagy egy harmadik okozza mindkettőt",
                    "Mindig véletlen egybeesésről van szó"
                ],
                a: 1,
                explication: "A harmadik eset a leggyakoribb és a legtöbbször elfelejtett — a fagylalt és a vízbe fulladás, amelyet a hőség okoz."
            },
            // 2. sorozat
            {
                q: "„Az alkalmazásunkat használó ügyfelek háromszor annyit vásárolnak.” Mire következtess?",
                options: [
                    "Az alkalmazás váltja ki a vásárlást: be kell fektetni, hogy mindenhol telepítsék",
                    "Kötelezővé kell tenni az alkalmazást",
                    "Semmi biztosra: talán a már hűséges ügyfelek telepítik"
                ],
                a: 2,
                explication: "Milliókat fektetni erre alapozva fogadás, nem következtetés."
            },
            {
                q: "2%-ról 3%-ra emelkedni mennyi?",
                options: [
                    "Csak +1%",
                    "Csak +50%",
                    "+1 százalékpont vagy +50%, mindkettő helyes"
                ],
                a: 2,
                explication: "A második megfogalmazás látványos, és gyakran épp ezért választják. Keresd az abszolút értéket."
            },
            {
                q: "Mit garantál, ha egy tesztet azon a napon állítasz le, amikor az eltérés kedvezővé válik?",
                options: [
                    "Hogy győztest találsz, még két azonos változat között is",
                    "Értékes időmegtakarítást, és néhány nappal korábbi döntést",
                    "Megbízhatóbb következtetést, hiszen akkor állsz meg, amikor egyértelmű az eltérés"
                ],
                a: 0,
                explication: "A teszt időtartamát az indítás előtt kell rögzíteni."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mire valók az adatok, alapvetően?",
            options: [
                "Hogy egy pontos kérdésre ismert bizonyossággal válaszoljunk",
                "Hogy olyan irányítópultokat gyártsunk, amelyek lenyűgözik a vezetőséget",
                "Hogy igazoljuk a már meghozott döntéseket"
            ],
            a: 0,
            explication: "A rosszul gyűjtött adat rosszabb, mint ha nincs adat: hamis magabiztosságot ad."
        },
        {
            q: "Melyik két kérdés szűri ki az elhamarkodott következtetések többségét?",
            options: [
                "Ki készítette az adatot, és mikor?",
                "Mekkora a minta, és származhat-e az eltérés a véletlenből?",
                "Megbízható és naprakész az eszköz?"
            ],
            a: 1,
            explication: "Néhány száz megfigyelés alatt egy néhány pontos eltérés csak zaj."
        },
        {
            q: "Egy jelentés „+50% konverziót” mutat. Mit kérdezz?",
            options: [
                "Mekkora abszolút érték áll a százalék mögött?",
                "Milyen időszakban, és milyen kiindulóponthoz képest?",
                "Ki végezte a mérést, és milyen telepített követőeszközzel?"
            ],
            a: 0,
            explication: "2-ről 3 konverzióra emelkedni is 50%-os növekedés."
        },
        {
            q: "Egy oldal két változatát kell összehasonlítanod. Mi kell a következtetés előtt?",
            options: [
                "Változatonként néhány száz látogató, két hétre elosztva",
                "Változatonként néhány száz konverzió, nem látogató",
                "Szabad szemmel látható különbség"
            ],
            a: 1,
            explication: "És előre rögzített időtartam, különben mindig találunk győztest."
        },
        {
            q: "Az eszközöd olyan diagramot készít, amelynek tengelye 0 helyett 48-ról indul. Mit tegyél?",
            options: [
                "Hagyd így: az eszköz tudja, mit csinál",
                "Javítsd a tengelyt: mesterségesen felnagyít egy 4%-os különbséget",
                "Tegyél egy megjegyzést a diagram aljára"
            ],
            a: 1,
            explication: "Ez a reflex megóv attól, hogy becsapjanak — a saját diagramjaid is."
        },
        {
            q: "Milyen sorrendet kövess egy adatalapú munkában?",
            options: [
                "Megfogalmazni a kérdést, aztán összegyűjteni, ami a megválaszolásához kell",
                "Széles körben gyűjteni, aztán megnézni, mit mondanak az adatok",
                "Kiválasztani az eszközt, aztán meghatározni a mutatókat"
            ],
            a: 0,
            explication: "Nagy adatmennyiségben mindig akad egy látványos korreláció, amelyet csak a véletlen okoz."
        }
    ]
};
