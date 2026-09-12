// ===================================
// KÉRDÉSBANK — JOG ÉS ÜGYINTÉZÉS, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban. A francia jog szabályai franciaként
// szerepelnek; egyik kérdés sem szól összegről vagy értékhatárról.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "louer-un-logement": [
            // 1. sorozat
            {
                q: "Mi történik, ha nincs beköltözési jegyzőkönyv?",
                options: [
                    "A bérleti szerződés semmis",
                    "Úgy vélelmezik, hogy a lakást jó állapotban adták át",
                    "A kauciót kiköltözéskor automatikusan, levonás nélkül visszaadják"
                ],
                a: 1,
                explication: "A teher a bérlőre fordul, aki már semmit sem tud összehasonlítani."
            },
            {
                q: "Érvényes-e a bérleti szerződés olyan feltétele, amely megtiltja egy hozzátartozó befogadását?",
                options: [
                    "Igen, ha mindkét fél aláírta",
                    "Nem: nem írottnak tekintendő",
                    "Igen, de csak bútorozott lakásoknál"
                ],
                a: 1,
                explication: "Bizonyos feltételek tiltottak és hatástalanok, bármi legyen is az aláírás."
            },
            {
                q: "Franciaországban mennyivel nő a késve visszaadott kaució?",
                options: [
                    "A rezsi nélküli havi lakbér 10%-ával minden megkezdett hónapra",
                    "A kaució 5%-ával havonta",
                    "A törvény semmilyen növelést nem ír elő, ez a bérbeadó jóindulatán múlik"
                ],
                a: 0,
                explication: "Törvény erejénél fogva jár. Nem alku tárgya: követelni kell."
            },
            // 2. sorozat
            {
                q: "Franciaországban mennyi a kaució visszaadásának határideje?",
                options: [
                    "1 hónap, ha a kiköltözési jegyzőkönyv megegyezik a beköltözésivel, különben 2 hónap",
                    "Minden esetben 2 hónap",
                    "3 hónap"
                ],
                a: 0,
                explication: "Ezért éri meg egy olyan kiköltözési jegyzőkönyv, amely semmi újat nem rögzít."
            },
            {
                q: "Visszatarthat-e a bérbeadó összeget igazoló irat nélkül?",
                options: [
                    "Igen, ha előtte egy kellően indokolt levélben bejelenti",
                    "Nem: árajánlat, számla vagy közös jegyzőkönyv kell",
                    "Igen, a kaució összegéig"
                ],
                a: 1,
                explication: "„Helyreállítás: 400 EUR” csatolt irat nélkül nem elég."
            },
            {
                q: "Mit kell figyelembe vennie a bérbeadónak, mielőtt helyreállítást számláz?",
                options: [
                    "Az új termék teljes bolti árát",
                    "Csak a bérleti szerződés időtartamát",
                    "A természetes elhasználódást"
                ],
                a: 2,
                explication: "Egy tízéves padlószőnyeg nem számlázható az új áráért."
            }
        ],

        // ---------------------------------------------------------------
        "donner-conge": [
            // 1. sorozat
            {
                q: "Franciaországban mennyi a felmondási idő bútorozott bérletnél?",
                options: [
                    "1 hónap",
                    "2 hónap",
                    "3 hónap"
                ],
                a: 0,
                explication: "Szemben a bútorozatlan bérlet három hónapjával, a csökkentett esetektől eltekintve."
            },
            {
                q: "Mikortól fut a felmondási idő?",
                options: [
                    "Az ajánlott levél postai feladásától",
                    "A levélben általad megadott dátumtól",
                    "Attól, hogy a bérbeadó megkapta"
                ],
                a: 2,
                explication: "Két nap postai út eltolhatja a kiköltözést, és vele egy teljes havi lakbért."
            },
            {
                q: "Mi történik, ha csökkentett felmondási időre hivatkozol, de nem írod meg az okát?",
                options: [
                    "Az ok később szóban is megadható a bérbeadónak",
                    "A felmondás semmis, és újra kell kezdeni",
                    "A felmondási idő három hónap marad"
                ],
                a: 2,
                explication: "A hiányzó mondat két havi lakbérbe kerül, még ha a feltétel teljesült is."
            },
            // 2. sorozat
            {
                q: "Érvényes-e az e-mailben közölt felmondás?",
                options: [
                    "Nem: tértivevényes ajánlott levél, bírósági végrehajtó vagy aláírás ellenében személyes átadás kell",
                    "Igen, ha visszaigazolják az átvételét",
                    "Igen, de csak bútorozott lakásnál"
                ],
                a: 0,
                explication: "A forma nem formalitás: ettől lesz a dátum a másik féllel szemben érvényesíthető."
            },
            {
                q: "A teljes felmondási idő alatt jár a lakbér?",
                options: [
                    "Nem, a felmondás elküldésével megszűnik",
                    "Igen, kivétel nélkül",
                    "Igen, kivéve ha a lakást a bérbeadó beleegyezésével előbb újra kiadják"
                ],
                a: 2,
                explication: "Ebben az esetben az új bérlet kezdetétől már nem jár."
            },
            {
                q: "Miért add meg az új címedet a felmondó levélben?",
                options: [
                    "A bérleti szerződés szerinti törvényes kötelezettség",
                    "A levelek nyomon követése miatt",
                    "Oda kell visszaadni a kauciót"
                ],
                a: 2,
                explication: "Nélküle a visszaadás elakad."
            }
        ],

        // ---------------------------------------------------------------
        "le-contrat-de-travail": [
            // 1. sorozat
            {
                q: "Franciaországban mi a munkaszerződés normál formája?",
                options: [
                    "A határozatlan idejű (CDI)",
                    "A határozott idejű (CDD), mert rugalmasabb",
                    "A kettő teljesen egyenrangú a törvény előtt"
                ],
                a: 0,
                explication: "A határozott idejű szerződés kivétel: csak felsorolt esetekben lehetséges, és az okát írásban kell rögzíteni."
            },
            {
                q: "Mit kockáztat egy írásba nem foglalt vagy érvényes ok nélküli határozott idejű szerződés?",
                options: [
                    "Átminősítést határozatlan idejűvé",
                    "Bírságot a vétkes munkavállalónak",
                    "Semmi különöset, a szerződés érvényes marad"
                ],
                a: 0,
                explication: "Ez az egyik leggyakoribb munkaügyi per."
            },
            {
                q: "Meghosszabbodhat-e hallgatólagosan a próbaidő?",
                options: [
                    "Igen, ha a munkáltató így dönt",
                    "Nem: ágazati megállapodás, szerződési kikötés és a te írásos beleegyezésed kell",
                    "Igen, egyszer"
                ],
                a: 1,
                explication: "E három feltétel nélkül az eredeti időtartam végén lejár."
            },
            // 2. sorozat
            {
                q: "Mi az értesítési határidő?",
                options: [
                    "A próbaidő megszüntetésekor betartandó határidő, amely a munkában töltött idővel nő",
                    "A felmondási idő lemondáskor",
                    "Az első fizetésig tartó idő"
                ],
                a: 0,
                explication: "24 óra 8 nap előtt, 48 óra egy hónapig, 2 hét egy hónap után, 1 hónap három hónap után."
            },
            {
                q: "Hol találod a kollektív szerződésed nevét?",
                options: [
                    "A munkavállaló társadalombiztosítási kártyáján",
                    "A bérpapíron",
                    "Sehol, külön kell kérni"
                ],
                a: 1,
                explication: "Nagyon gyakran kedvezőbb a munka törvénykönyvénél: felmondási idő, pótlékok, besorolás."
            },
            {
                q: "Az anyagi ellentételezés nélküli versenytilalmi kikötés:",
                options: [
                    "Érvényes, ha időben korlátozott",
                    "Semmis",
                    "Érvényes, hiszen aláírták"
                ],
                a: 1,
                explication: "Sok szerződés még ma is tartalmaz ilyet."
            }
        ],

        // ---------------------------------------------------------------
        "declarer-une-activite": [
            // 1. sorozat
            {
                q: "Van-e olyan összeg, amely alatt egy rendszeres tevékenységet nem kell bejelenteni?",
                options: [
                    "Igen, egy éves értékhatár",
                    "Igen, ha a tevékenység teljesen alkalmi marad",
                    "Nem: a nulla árbevételt is be kell vallani"
                ],
                a: 2,
                explication: "Ami létezik, azok az összegtől függő egyszerűbb rendszerek — innen a zavar."
            },
            {
                q: "Hogyan kezelik a tényleges költségeket a francia micro-entreprise rendszerben?",
                options: [
                    "Igazolás alapján levonhatók",
                    "Nem vonhatók le: a levonás átalányos",
                    "Az éves árbevétel feléig igazolás nélkül levonhatók"
                ],
                a: 1,
                explication: "Egy nagy kiadású tevékenység hátrányba kerül, bármekkora is az árbevétele."
            },
            {
                q: "Melyik kérdés dönt a micro és a tényleges költségelszámolás között?",
                options: [
                    "Hány ügyfelem van?",
                    "Mióta végzem ezt a tevékenységet, és mennyi tapasztalatom van?",
                    "A bevételeim mekkora része megy el kiadásokra?"
                ],
                a: 2,
                explication: "Ez az egyetlen, ami a választás pillanatában számít."
            },
            // 2. sorozat
            {
                q: "Hol ellenőrizd a micro-entreprise értékhatárait és kulcsait?",
                options: [
                    "A hivatalos francia oldalakon (service-public.fr, URSSAF)",
                    "Egy friss, a keresőben jól rangsorolt blogcikkben a témáról",
                    "Egy ugyanabban az ágazatban dolgozó, tapasztalt másik vállalkozónál"
                ],
                a: 0,
                explication: "Rendszeresen módosítják őket: egy máshonnan átmásolt érték szó nélkül elavul."
            },
            {
                q: "Mit ad egy egyszemélyes társaság (EURL, SASU) az egyéni vállalkozáshoz képest?",
                options: [
                    "A vagyon elkülönítését és a későbbi tagfelvétel lehetőségét",
                    "Kevesebb adminisztrációt",
                    "Járulékmentességet"
                ],
                a: 0,
                explication: "Cserébe nehezebb működtetni."
            },
            {
                q: "Lehetővé teszi-e egy egyesület, hogy egy nyereségszerző tevékenység kikerüljön az adószabályok alól?",
                options: [
                    "Igen, ez a fő előnye",
                    "Igen, egy bizonyos összeg alatt",
                    "Nem: ha a tevékenység valójában nyereségszerző, úgy is adózik"
                ],
                a: 2,
                explication: "Az egyesület nyereségfelosztás nélküli tevékenységre való, nem adómentességre."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi a közös ennek a szintnek a három helyzetében?",
            options: [
                "Minden az aláíráskor dől el, és bizonyíték nélkül semmi sem hozható helyre",
                "Mindegyik ugyanabba a törvénykönyvbe tartozik",
                "Mindegyikhez ügyvéd kell"
            ],
            a: 0,
            explication: "Lakhatás, munka, tevékenység bejelentése: ugyanaz a reflex érvényes."
        },
        {
            q: "Mi a közös a beköltözési jegyzőkönyvben és a kollektív szerződésben?",
            options: [
                "Mindkettő elhagyható",
                "Mindkettő már létezik, csak nem törődnek vele",
                "Mindkettőt az illetékes hivataltól kell külön kérni"
            ],
            a: 1,
            explication: "A leghasznosabb jogok gyakran azok, amelyekre nem gondolunk."
        },
        {
            q: "Egy bérlő úgy költözik el, hogy nem követeli a késve visszaadott kaucióra járó növelést. Mit veszít?",
            options: [
                "Egy törvény erejénél fogva járó összeget, amelyet senki sem fizet ki magától",
                "Semmit, automatikusan kifizetik",
                "A levonások vitatásának jogát"
            ],
            a: 0,
            explication: "A növelés nem alku tárgya: követelni kell."
        },
        {
            q: "A munkaszerződés egy feltétele kedvezőtlenebb a kollektív szerződésnél. Melyik érvényes?",
            options: [
                "A kollektív szerződés",
                "A munkaszerződés, hiszen aláírták",
                "Elvből a kettő közül a későbbi"
            ],
            a: 0,
            explication: "Ami a szerződésben kedvezőtlenebb a törvénynél vagy a kollektív szerződésnél, nem érvényes."
        },
        {
            q: "Melyik egyszer elvégzett ellenőrzés hozza a legtöbbet ezen a szinten?",
            options: [
                "Évente újraolvasni a bérleti szerződést",
                "Elolvasni a kollektív szerződésed felmondási időről és besorolásról szóló cikkeit",
                "Jogi formát váltani"
            ],
            a: 1,
            explication: "Tíz perc, amely gyakran ismeretlen jogokat tár fel."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot alkalmazol?",
            options: [
                "Gyorsabban aláírni",
                "Alapból a micro-entreprise-t választani",
                "Időt szánni a beköltözési jegyzőkönyvre, és lefényképezni a lakást"
            ],
            a: 2,
            explication: "Húsz perc beköltözéskor több száz eurót ér kiköltözéskor."
        }
    ]
};
