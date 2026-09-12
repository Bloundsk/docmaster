// ===================================
// KÉRDÉSBANK — MUNKAHELYI EGÉSZSÉG, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban. Egyik kérdés sem szól tünetről vagy
// egészségi állapotról: jogokról, szereplőkről és teendőkről szólnak, a francia
// szabályok franciaként.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "la-medecine-du-travail": [
            // 1. sorozat
            {
                q: "Köti-e az orvosi titoktartás a foglalkozás-egészségügyi orvost?",
                options: [
                    "Nem, beszámol a munkáltatónak",
                    "Csak ha a munkavállaló kéri",
                    "Igen, mint minden orvost"
                ],
                a: 2,
                explication: "Franciaországban a munkáltató csak az alkalmassági következtetéseket ismerheti meg, a tartalmat soha."
            },
            {
                q: "Franciaországban kérhet-e látogatást a munkavállaló a munkáltató megkerülésével?",
                options: [
                    "Igen, bármikor és indoklás nélkül",
                    "Nem, a kérés a HR-en keresztül megy",
                    "Igen, de csak legfeljebb évente egyszer"
                ],
                a: 0,
                explication: "A munkáltató nem tiltakozhat, és nem ismerheti meg az okát."
            },
            {
                q: "Mekkora súlya van Franciaországban egy munkakör-átalakítási javaslatnak?",
                options: [
                    "Egyszerű tanácsadó vélemény",
                    "Csak egy hosszú, több hónapos betegállomány után ér igazán valamit",
                    "Kötelezi a munkáltatót, kivéve igazolt lehetetlenség esetén"
                ],
                a: 2,
                explication: "Kérheti a munkakör és a munkakörülmények vizsgálatát is."
            },
            // 2. sorozat
            {
                q: "Mi a foglalkozás-egészségügyi orvos szerepe?",
                options: [
                    "A munkavállalók gyógyítása",
                    "Kizárólag megelőző: megakadályozni, hogy a munka rontsa az egészséget",
                    "A vállalat munkavállalói által bejelentett betegállományok ellenőrzése"
                ],
                a: 1,
                explication: "Nem gyógyít. Ez gyakori félreértés."
            },
            {
                q: "Mi a visszatérés előtti látogatás?",
                options: [
                    "Hosszú betegállomány alatt kért látogatás a visszatérés előkészítésére",
                    "A felvételi vizsgálat",
                    "A munkáltató által előírt ellenőrzés a visszatérés előtt"
                ],
                a: 0,
                explication: "Munkakör-átalakítás, terápiás részmunkaidő, áthelyezés: ezt előre kell előkészíteni."
            },
            {
                q: "Franciaországban mikor zajlik a munkavállaló kérésére tett látogatás?",
                options: [
                    "Munkaidőben",
                    "A munkavállaló fizetett szabadsága terhére",
                    "Munkaidőn kívül"
                ],
                a: 0,
                explication: "Sem pénzbe, sem szabadnapba nem kerül."
            }
        ],

        // ---------------------------------------------------------------
        "les-obligations-de-lemployeur": [
            // 1. sorozat
            {
                q: "Mire vonatkozik a munkáltató biztonsági kötelezettsége?",
                options: [
                    "A már bekövetkezett munkahelyi balesetek kártalanítására",
                    "A megelőzésre, nem csak a helyreállításra",
                    "A szükséges egyéni védőeszközök beszerzésére és biztosítására"
                ],
                a: 1,
                explication: "Felmérni a kockázatokat, a forrásuknál elkerülni őket, a munkát az emberhez igazítani."
            },
            {
                q: "Kiterjed-e ez a kötelezettség a lelki egészségre?",
                options: [
                    "Nem, csak a testi egészségre",
                    "Csak a nagyvállalatoknál, egy bizonyos létszámküszöb felett",
                    "Igen, a francia munka törvénykönyve kifejezetten említi"
                ],
                a: 2,
                explication: "Az egységes dokumentumnak ezért a pszichoszociális kockázatokat is tartalmaznia kell."
            },
            {
                q: "Hány munkavállalótól kötelező Franciaországban az egységes dokumentum?",
                options: [
                    "Tizenegy munkavállalótól",
                    "Ötven munkavállalótól",
                    "Már az elsőtől"
                ],
                a: 2,
                explication: "A munkavállalók hozzáférhetnek, és jogos elkérni."
            },
            // 2. sorozat
            {
                q: "Mi a munkavégzéstől való kivonulás két feltétele a francia jogban?",
                options: [
                    "A CSE hozzájárulása és előzetes írásbeli értesítés",
                    "Súlyos és közvetlen veszély, és hogy a kivonulás ne veszélyeztessen másokat",
                    "A munkaügyi felügyelet engedélye"
                ],
                a: 1,
                explication: "Emiatt önmagában semmilyen szankció vagy bérlevonás nem alkalmazható."
            },
            {
                q: "Mit tehetsz, ha nincs CSE a vállalatnál?",
                options: [
                    "Képviselők nélkül semmi sem lehetséges",
                    "Előbb választani kell egyet",
                    "A foglalkozás-egészségügyi szolgálat és a munkaügyi felügyelet közvetlenül elérhető marad"
                ],
                a: 2,
                explication: "A biztonsági kötelezettség a vállalat méretétől függetlenül létezik."
            },
            {
                q: "A munkaügyi felügyelethez fordulás:",
                options: [
                    "Ingyenes, és kérésre bizalmas",
                    "Díjköteles, és nyilvános a vállalaton belül",
                    "Csak a munkavállalói képviselőknek fenntartott"
                ],
                a: 0,
                explication: "Ez a jogorvoslat, ha belül semmi sem mozdul."
            }
        ],

        // ---------------------------------------------------------------
        "lepuisement-professionnel": [
            // 1. sorozat
            {
                q: "Melyik a szakirodalomban leírt három dimenzió?",
                options: [
                    "Kimerültség, távolságtartás, a hatékonyságérzés elvesztése",
                    "Fáradtság, stressz, depresszió",
                    "Túlterhelés, társas elszigeteltség és tartós motiválatlanság"
                ],
                a: 0,
                explication: "Összekapcsolódnak, és inkább megnevezésre valók, mint következtetésre."
            },
            {
                q: "Szerepel-e a kiégés önálló betegségként a nemzetközi osztályozásokban?",
                options: [
                    "Igen, 2019 óta",
                    "Nem: munkával összefüggő jelenségként írják le",
                    "Igen, jól körülírt szorongásos zavarként szerepel"
                ],
                a: 1,
                explication: "Ez semmit sem von le a valóságából és a súlyosságából."
            },
            {
                q: "Miért nem megfelelő egyetlen online teszt sem?",
                options: [
                    "Mert komoly, tudományosan validált kérdőívek erre a célra egyszerűen nem léteznek",
                    "Egy keret nélküli pontszám tévesen megnyugtathat vagy tartósan aggaszthat",
                    "Mert tilos"
                ],
                a: 1,
                explication: "Léteznek validált kérdőívek, de keretek között, beszélgetéssel és értelmezéssel."
            },
            // 2. sorozat
            {
                q: "Mi különbözteti meg a kiégést egy nehéz időszaktól?",
                options: [
                    "A naponta elviselt munkaterhelés intenzitása és mennyisége",
                    "Az ágazat",
                    "Az időtartam, a regenerálódás hiánya és a beállandósulás"
                ],
                a: 2,
                explication: "Már nem reakció egy eseményre, hanem alapállapottá vált."
            },
            {
                q: "Melyik jel tér vissza állandóan a beszámolókban?",
                options: [
                    "A környezet előbb vette észre, mint az érintett",
                    "Egy korai testi fájdalom",
                    "Az elért eredmények egészen látható romlása"
                ],
                a: 0,
                explication: "A fokozatos alkalmazkodás eltörli az összehasonlítási pontokat."
            },
            {
                q: "Mi a baj azzal, ha a kérdést személyes ellenálló képesség hiányaként kezeljük?",
                options: [
                    "Semmilyen következménye nincs",
                    "Az ok a helyén marad, és az emberre hárul az, ami a szervezethez tartozik",
                    "Késlelteti az orvosi diagnózist"
                ],
                a: 1,
                explication: "Tartós túlterhelés, a mozgástér hiánya, az elismerés hiánya, értékkonfliktusok: dokumentált tényezők."
            }
        ],

        // ---------------------------------------------------------------
        "les-situations-graves": [
            // 1. sorozat
            {
                q: "A francia jogban kell-e ártó szándék a lelki zaklatás megállapításához?",
                options: [
                    "Igen, bizonyítani kell",
                    "Nem: elég a hatás",
                    "Igen, kivéve a kollégák között"
                ],
                a: 1,
                explication: "Hierarchikus viszony sem szükséges."
            },
            {
                q: "Mi az első lépés?",
                options: [
                    "Rögtön, egyenesen a munkaügyi bírósághoz fordulni",
                    "Előbb a legközelebbi kollégákkal beszélni róla",
                    "Folyamatosan, dátummal leírni a tényeket"
                ],
                a: 2,
                explication: "Ez az első, amit minden kapcsolattartó kérni fog, és a legnehezebb utólag rekonstruálni."
            },
            {
                q: "Mit indít el egy munkáltatónak küldött írásos jelzés?",
                options: [
                    "A cselekvési kötelezettségét",
                    "A munkaügyi felügyelet automatikus vizsgálatát",
                    "A munkaszerződés azonnali felfüggesztését"
                ],
                a: 0,
                explication: "Az a tájékoztatott munkáltató, amely semmit sem tesz, felelősséggel tartozik."
            },
            // 2. sorozat
            {
                q: "Franciaországban hogyan oszlik meg a bizonyítási teher zaklatási ügyekben?",
                options: [
                    "A munkavállalónak mindent bizonyítania kell",
                    "A munkavállaló tényeket mutat be, a munkáltatónak kell bizonyítania, hogy azok másként magyarázhatók",
                    "A munkáltatónak egyedül kell mindent bizonyítania"
                ],
                a: 1,
                explication: "Ez jelentős eltérés a szokásos szabálytól."
            },
            {
                q: "Szankcionálható-e emiatt az a munkavállaló, aki zaklatásról számol be?",
                options: [
                    "Igen, ha a beszámolt tények nem bizonyítottak",
                    "Igen, ha nyilvánosan feljelenti a tényeket",
                    "Nem: az erre alapozott elbocsátás semmis"
                ],
                a: 2,
                explication: "A védelem a tanúkra is kiterjed."
            },
            {
                q: "Biztosnak kell-e lenni a jogi minősítésben, mielőtt jelzel?",
                options: [
                    "Nem: elég dátumozott tényeket leírni egy illetékes kapcsolattartónak",
                    "Igen, különben a jelzés elfogadhatatlan",
                    "Igen, feltétlenül meg kell jelölni az esetre vonatkozó jogszabályhelyet"
                ],
                a: 0,
                explication: "Nem a munkavállaló dolga minősíteni a helyzetet."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "A stresszkezelési technikák",
                "Ami egyedül nem oldható meg: a szereplők, a kötelezettségek, a jogorvoslatok",
                "A munkahely kialakítása"
            ],
            a: 1,
            explication: "Ezt a szintet a leghasznosabb azelőtt elolvasni, hogy szükség lenne rá."
        },
        {
            q: "Mi a közös a kérésre tett látogatásban és a tények dátumozott leírásában?",
            options: [
                "Mindkettőhöz a munkáltató hozzájárulása kell",
                "Mindkettő ingyenes, a munkavállaló kezdeményezi, és nagyon kevesen élnek vele",
                "Mindkettőhöz ügyvéd kell"
            ],
            a: 1,
            explication: "És mindkettő lehetővé tesz minden további lépést."
        },
        {
            q: "Miért nem kínál ez az útmutató kiégéstesztet?",
            options: [
                "Egy weboldal által adott pontszám tévesen megnyugtathat vagy tartósan aggaszthat",
                "Mert ezek a tesztek fizetősek",
                "Mert csak foglalkozás-egészségügyi orvosok használhatják"
            ],
            a: 0,
            explication: "Egyik hiba sem elfogadható."
        },
        {
            q: "Egy munkáltató azt állítja, CSE hiányában semmilyen kötelezettsége nincs. Mit válaszolj?",
            options: [
                "A biztonsági kötelezettség és az egységes dokumentum a mérettől függetlenül létezik",
                "Tizenegy munkavállaló alatt ez igaz",
                "Ez a kollektív szerződéstől függ"
            ],
            a: 0,
            explication: "Franciaországban az egységes dokumentum már az első munkavállalótól kötelező."
        },
        {
            q: "Melyik lépést érdemes előkészíteni, mielőtt szükség lenne rá?",
            options: [
                "Előre megírni egy mintalevelet a saját felmondásodhoz, minden eshetőségre",
                "Munkaügyi pert előkészítő dossziét összeállítani",
                "Feljegyezni a foglalkozás-egészségügyi szolgálat elérhetőségét"
            ],
            a: 2,
            explication: "Nem akkor lesz energiád megkeresni, amikor szükséged van rá."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot jegyzel meg?",
            options: [
                "A legkisebb problémánál a munkaügyi felügyelethez kell fordulni",
                "A munkavégzéstől való kivonulás szabadon gyakorolható",
                "A foglalkozás-egészségügyi orvosnál tett látogatás jog, bizalmas, a munkáltató megkerülésével"
            ],
            a: 2,
            explication: "Ez a terület legerősebb emelője, és az egyik legkevésbé értett."
        }
    ]
};
