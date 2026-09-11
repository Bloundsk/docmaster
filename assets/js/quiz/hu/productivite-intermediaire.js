// ===================================
// KÉRDÉSBANK — TERMELÉKENYSÉG, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "cout-du-changement": [
            // 1. sorozat
            {
                q: "Egy megszakítás után mennyi idő kell ahhoz, hogy visszatalálj a koncentrációhoz egy megerőltető feladatnál?",
                options: [
                    "Legfeljebb néhány másodperc, általában",
                    "Nagyjából tizenöt-húsz perc",
                    "Körülbelül egy óra, néha még több is"
                ],
                a: 1,
                explication: "Ezért kerül egy kétperces megszakítás húszba."
            },
            {
                q: "Mibe kerül valójában 9 háromperces megszakítás, ha mindegyik után 12 perc a visszatalálás?",
                options: [
                    "Mindössze 27 perc",
                    "1 óra 48 perc",
                    "2 óra 15 perc"
                ],
                a: 2,
                explication: "27 perc megszakítás és 108 perc visszatalálás: egy 8 órás nap közel 28%-a."
            },
            {
                q: "Feldolgoz az agy egyszerre két megerőltető feladatot?",
                options: [
                    "Nem: váltogat, és minden oda-vissza lépésnél megfizeti az átállás költségét",
                    "Igen, ha gyakorlott",
                    "Igen, feltéve, hogy különböző jellegűek"
                ],
                a: 0,
                explication: "Ami párhuzamos munkának látszik, az egymás utáni munka átállási költséggel."
            },
            // 2. sorozat
            {
                q: "Elég az értesítések kikapcsolása a koncentráció védelméhez?",
                options: [
                    "Igen, ez a döntő intézkedés",
                    "Igen, ha az egész munkanapra kikapcsolod őket, nem csak órákra",
                    "Nem, ha tízpercenként magadtól nézed meg őket"
                ],
                a: 2,
                explication: "Az önmegszakítás pontosan ugyanazt a visszatalálási költséget okozza."
            },
            {
                q: "Miért érdemes felírni, hol tartottál, mielőtt abbahagyod?",
                options: [
                    "Hogy igazold az eltöltött időt",
                    "Mert ez jelentősen lerövidíti a visszatalálást",
                    "Hogy megoszd az előrehaladást az egész csapattal"
                ],
                a: 1,
                explication: "A kontextus így papíron van, nem emlékezetből kell újraépíteni."
            },
            {
                q: "Miért érdemes bejelenteni, mikor nem vagy elérhető?",
                options: [
                    "Hogy tiszteletben tartsák a pozíciódat",
                    "Hogy másoknak ne kelljen megszakítaniuk",
                    "Hogy utána ne kelljen azonnal válaszolnod"
                ],
                a: 1,
                explication: "A megszakítás így fölöslegessé válik, nem csak visszautasítod."
            }
        ],

        // ---------------------------------------------------------------
        "blocage-de-temps": [
            // 1. sorozat
            {
                q: "Mit árul el egy feladatlista, és mit nem?",
                options: [
                    "Azt mondja meg, mikor csinálj valamit, de soha nem azt, hogy mit",
                    "Azt mondja meg, mennyi ideig tart majd egy-egy feladat",
                    "Azt mondja meg, mit csinálj, de azt nem, hogy mikor"
                ],
                a: 2,
                explication: "Egy húszelemes lista egy üres naptárral szemben leginkább bűntudatot szül."
            },
            {
                q: "Egy 8 órás napon 2 óra 30 perc értekezlettel, 1 óra 15 perc üzenettel és 1 óra váratlan üggyel mennyi marad?",
                options: [
                    "Nagyjából 5 óra",
                    "Pontosan 6 óra",
                    "3 óra 15 perc"
                ],
                a: 2,
                explication: "Hat óra termelő munkát tervezni erre a napra a számtan miatt bukik el, nem fegyelemhiányból."
            },
            {
                q: "Mit mond Parkinson törvénye?",
                options: [
                    "Egy feladat hajlamos kitölteni a rá szánt teljes időt",
                    "A munka a résztvevők számával együtt nő",
                    "A sürgős feladatok előbb-utóbb mindig kiszorítják a fontosakat"
                ],
                a: 0,
                explication: "Ezért érdemes a kezdés előtt időkeretet szabni, akár önkényesen is."
            },
            // 2. sorozat
            {
                q: "Miért tart ki jobban egy idősáv, mint egy szándék?",
                options: [
                    "Mert hosszabb",
                    "Mert a munkatársak is látják",
                    "Mert egy idősávot meg lehet védeni, egy szándékot nem"
                ],
                a: 2,
                explication: "A különbség lélektani és gyakorlati is."
            },
            {
                q: "Milyen telítettségnél áll ellen egy tervezés a váratlan eseményeknek?",
                options: [
                    "100%, hogy semmi ne vesszen el",
                    "Nagyjából 70%",
                    "Legfeljebb 50%"
                ],
                a: 1,
                explication: "Egy üres hely nélküli naptár nem éli túl az első sürgős ügyet."
            },
            {
                q: "Mit jelent, ha a feladatok nem férnek bele a naptárba?",
                options: [
                    "Hogy gyorsabban kell dolgozni",
                    "Hogy túl sok van belőlük",
                    "Hogy rosszul van felépítve a naptár"
                ],
                a: 1,
                explication: "A lista eltakarta; a naptár megmutatja. Ez a hasznos szembesítés."
            }
        ],

        // ---------------------------------------------------------------
        "traiter-les-flux": [
            // 1. sorozat
            {
                q: "Miért érdemes csoportosítva kezelni az üzeneteket, és nem folyamatosan?",
                options: [
                    "A kezelési idő ugyanaz, de nincs átállási költség",
                    "Maga a kezelés gyorsabb",
                    "Kevesebb az üzenet"
                ],
                a: 0,
                explication: "A munka ugyanaz; az átállások vittek el órákat."
            },
            {
                q: "Hogyan oldd fel a félelmet, hogy csoportos kezelésnél lemaradsz egy sürgős ügyről?",
                options: [
                    "Megállapodtok egy csatornában, amely a valóban sürgős ügyeké",
                    "Óránként azért ránézel az üzenetekre",
                    "Minden feladót egyenként, előre értesítesz a válaszadási határidőről"
                ],
                a: 0,
                explication: "Általában a telefon. Ez elég a félelem feloldásához."
            },
            {
                q: "Mi az az elv, amely valóban kiüríti a postafiókot?",
                options: [
                    "Mindenre még aznap válaszolni",
                    "Minden tételhez csak egyszer nyúlni, és azonnal dönteni",
                    "Minden pénteken mindent archiválni"
                ],
                a: 1,
                explication: "Válaszolni, betervezni, átadni, archiválni vagy törölni — de dönteni."
            },
            // 2. sorozat
            {
                q: "Mitől telik túl egy postafiók?",
                options: [
                    "Attól, hogy elolvassuk az üzeneteket, nem kezdünk velük semmit, aztán újra elolvassuk őket",
                    "A beérkező üzenetek mennyiségétől",
                    "A rendező mappák hiányától"
                ],
                a: 0,
                explication: "Nem az üzenetek száma kerül sokba, hanem az, hányszor nézünk rájuk."
            },
            {
                q: "Miért ne az üzenetekkel kezdd a napot?",
                options: [
                    "Mert a reggeli üzenetek kevésbé fontosak",
                    "Mert jobb kivárni az előző napi válaszokat",
                    "Mert így a legjobb idősávodat mások prioritásainak adod"
                ],
                a: 2,
                explication: "Az első óra általában az, amelyben a figyelem a legszabadabb."
            },
            {
                q: "Hány üzenetkezelési kör elég a legtöbb munkakörben?",
                options: [
                    "Kettő",
                    "Egyetlen, a nap végén",
                    "Óránként egy"
                ],
                a: 0,
                explication: "Napi két idősáv a helyzetek túlnyomó többségét lefedi."
            }
        ],

        // ---------------------------------------------------------------
        "prioriser-vraiment": [
            // 1. sorozat
            {
                q: "Mit jelent valójában rangsorolni?",
                options: [
                    "Fontossági sorrendbe rakni a feladatokat",
                    "Több hétre elosztani őket",
                    "Lemondani egyesekről"
                ],
                a: 2,
                explication: "Amíg egyetlen feladatot sem vetettél el, nem rangsoroltál, csak sorba rendeztél."
            },
            {
                q: "Milyen kérdést tegyél fel, mielőtt elfogadsz egy kérést?",
                options: [
                    "Mennyi ideig fog tartani?",
                    "Mit nem fogok megcsinálni, ha igent mondok?",
                    "Meg tudná csinálni helyettem valaki más is a csapatból?"
                ],
                a: 1,
                explication: "Ha a válasz „semmi fontosat”, az valódi igen."
            },
            {
                q: "Miért marad láthatatlan egy „igen” költsége?",
                options: [
                    "Mert csekély",
                    "Mert senki sem jön számon kérni azt a munkát, amely nem készült el",
                    "Mert a következő hónapra tolódik"
                ],
                a: 1,
                explication: "A nem valódi, csak csendes."
            },
            // 2. sorozat
            {
                q: "Mire jó az a megfogalmazás, hogy „meg tudom csinálni, de akkor az X projekt egy hetet csúszik”?",
                options: [
                    "Megspórolja a választ",
                    "Az elutasításból ígéretet csinál",
                    "Láthatóvá teszi a költséget, és visszaadja a döntést a kérőnek"
                ],
                a: 2,
                explication: "A kimondott választás: se kerek elutasítás, se a költséget eltakaró igen."
            },
            {
                q: "Miért nem kerül sorra soha magától a fontos a nap folyamán?",
                options: [
                    "Mert nehezebb",
                    "Mert csendben marad, a sürgőssel ellentétben",
                    "Mert főleg a hosszú távot érinti, sosem a jelent"
                ],
                a: 1,
                explication: "Időt kell foglalni neki, különben a sürgős teljesen kitölti."
            },
            {
                q: "Mit kezdj egy hat hónapja nyúló feladatlistával?",
                options: [
                    "Tedd át egészben a következő negyedévre, el sem olvasva",
                    "Nézd át, és töröld, ami soha nem fog elkészülni",
                    "Bontsd részfeladatokra"
                ],
                a: 1,
                explication: "Ezek a tételek minden átolvasáskor lekötik a figyelmet, és állandó kudarcérzést táplálnak."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "A figyelem védelme a feladatok szaporítása helyett",
                "A naptár sokkal hatékonyabb teleírása",
                "A megfelelő feladatkezelő eszköz bevezetése"
            ],
            a: 0,
            explication: "A figyelem a szűkös erőforrás; az idő csak látszólag az."
        },
        {
            q: "Mi a közös a folyamatos üzenetkezelésben és az állítólagos párhuzamos munkában?",
            options: [
                "Mindkettő hasznos munkaidőt takarít meg a nap folyamán",
                "Mindkettőhöz jó, külön erre a célra készült digitális eszköz kell",
                "Mindkettő újra és újra megfizeti az átállás költségét"
            ],
            a: 2,
            explication: "Ugyanaz a mechanizmus, egyszer az üzenetekre, egyszer a feladatokra alkalmazva."
        },
        {
            q: "Miért bukik el ugyanazért a 100%-os tervezés és a soha nem rövidülő lista?",
            options: [
                "Mindkettő elkerüli a választást",
                "Mindkettőből hiányzik a módszer",
                "Mindkettő egy jó szoftveren múlik"
            ],
            a: 0,
            explication: "Sem a naptár, sem a lista nem vet el semmit: ezt a valóság teszi meg, kapkodva."
        },
        {
            q: "Ennek a szintnek melyik lépése kerül a legkevesebbe és hozza a legtöbbet?",
            options: [
                "Egy óra elmélyült munka, mielőtt megnyitod az üzeneteidet",
                "Feladatkezelő eszközt váltani",
                "Két órával meghosszabbítani a napot"
            ],
            a: 0,
            explication: "Hatvan perc alatt semmi fontos nem vész el, és az egész nap megváltozik."
        },
        {
            q: "Egy kolléga azt mondja, a délelőttjét az üzeneteknek szenteli, „hogy utána nyugta legyen”. Mi a gond?",
            options: [
                "Túl lassan kezeli az üzeneteit reggelente, ezért elhúzódik",
                "A legjobb idősávját mások prioritásainak adja",
                "Három körben kellene kezelnie őket"
            ],
            a: 1,
            explication: "Az az idősáv, amelyben a figyelem a legszabadabb, arra megy el, ami a legkevesebbet igényli."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot alkalmazol?",
            options: [
                "Időt foglalni a naptárban a fontos munkára, és megvédeni",
                "Egy új alkalmazást telepíteni",
                "Gyorsabban válaszolni a megkeresésekre"
            ],
            a: 0,
            explication: "Ami nincs a naptárban, azt mindig elnyeli a sürgős."
        }
    ]
};
