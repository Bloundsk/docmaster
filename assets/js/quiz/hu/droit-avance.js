// ===================================
// KÉRDÉSBANK — JOG ÉS ÜGYINTÉZÉS, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban. Az elévülési idők franciák, és a
// kérdés ezt kimondja; a GDPR szerinti jogok az egész Európai Unióban érvényesek.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lire-un-contrat": [
            // 1. sorozat
            {
                q: "Mi lesz egy aláírt szerződés tisztességtelen feltételével?",
                options: [
                    "Érvényes, hiszen gondosan elolvasták és elfogadták",
                    "Nem írottnak tekintendő: nem alkalmazható",
                    "Az egész szerződést érvényteleníti"
                ],
                a: 1,
                explication: "A szerződés többi része továbbra is érvényes."
            },
            {
                q: "Mi jellemzi a tisztességtelen feltételt?",
                options: [
                    "Jelentős egyenlőtlenség a felek jogai és kötelezettségei között",
                    "Túl magas ár",
                    "Túl szakmai megfogalmazás"
                ],
                a: 0,
                explication: "A francia fogyasztóvédelmi törvénykönyv két listát állít fel, a vélelem erőssége szerint."
            },
            {
                q: "Az a feltétel, amely megtiltja a bírósághoz fordulást:",
                options: [
                    "Tisztességtelen, ezért hatástalan",
                    "Érvényes, ha választottbíráskodást ír elő",
                    "Érvényes kereskedők és fogyasztók között"
                ],
                a: 0,
                explication: "Akárcsak az, amely egy távoli bíróságot jelöl ki."
            },
            // 2. sorozat
            {
                q: "Mit olvass el először egy szerződésben aláírás előtt?",
                options: [
                    "A preambulumot",
                    "Az időtartamot és a felmondás feltételeit",
                    "A szerződő felek pontos azonosító adatait és címét"
                ],
                a: 1,
                explication: "Hogyan lehet kilépni, milyen felmondási idővel, mennyiért: itt vannak a meglepetések."
            },
            {
                q: "Részei-e a szerződésnek az általános szerződési feltételek?",
                options: [
                    "Igen, amennyiben megismerhetted őket",
                    "Nem, kivéve ha külön aláírták",
                    "Csak ha a papír alapú szerződéshez csatolták"
                ],
                a: 0,
                explication: "Ezért fontos, mire utal a szerződés."
            },
            {
                q: "Elfogadható érv-e az „Ön aláírta” a törvényes kellékszavatosság kizárására?",
                options: [
                    "Nem: amit a szerződés elvesz a törvénytől, azt a törvény visszaveszi",
                    "Igen, az aláírás a szerződés minden egyes feltételének elfogadását jelenti",
                    "Igen, ha a feltétel félkövér volt"
                ],
                a: 0,
                explication: "Az aláírás arra kötelez, ami alku tárgya, arra nem, ami nem az."
            }
        ],

        // ---------------------------------------------------------------
        "la-prescription": [
            // 1. sorozat
            {
                q: "Mennyi az általános elévülési idő a francia jogban?",
                options: [
                    "2 év",
                    "5 év",
                    "10 év"
                ],
                a: 1,
                explication: "Attól a naptól, amikor a tényekről tudomást szereztél vagy szerezhettél volna."
            },
            {
                q: "A francia jogban megszakítja-e az elévülést egy hivatalos felszólítás?",
                options: [
                    "Igen, hiszen éppen ez a fő célja",
                    "Nem, ajánlott levélben sem",
                    "Igen, ha egy ügyvéd írta alá"
                ],
                a: 1,
                explication: "Ez a terület legdrágább hibája: azt az érzést kelti, hogy cselekedtél."
            },
            {
                q: "Mi szakítja meg az elévülést a francia jogban?",
                options: [
                    "Egy emlékeztető e-mail",
                    "Egy rögzített telefonhívás",
                    "Keresetindítás, végrehajtási intézkedés vagy a tartozás elismerése"
                ],
                a: 2,
                explication: "A megszakítás után egy teljes új határidő indul nulláról."
            },
            // 2. sorozat
            {
                q: "Franciaországban milyen határidő vonatkozik egy fogyasztótól pénzt követelő kereskedőre?",
                options: [
                    "5 év",
                    "2 év",
                    "3 év"
                ],
                a: 1,
                explication: "A határidő attól függ, ki követel kitől, és ez mindent megváltoztat."
            },
            {
                q: "Mi a különbség az elévülés nyugvása és megszakítása között?",
                options: [
                    "Két szó ugyanarra",
                    "A nyugvás szünetelteti a határidőt; a megszakítás nulláról indítja újra",
                    "A nyugvás megszünteti a határidőt"
                ],
                a: 1,
                explication: "Egy közvetítői kérelem nyugvást okoz; egy keresetindítás megszakítást."
            },
            {
                q: "Melyik napon kell megítélni az elévülést?",
                options: [
                    "Azon a napon, amikor először írsz az ellenfélnek",
                    "Azon a napon, amikor először ügyvédhez fordulsz",
                    "Azon a napon, amikor a bírósághoz fordulsz"
                ],
                a: 2,
                explication: "A határidőig tartó alkudozás a jóhiszemű és a rosszhiszemű ellenfélnek egyaránt kedvez."
            }
        ],

        // ---------------------------------------------------------------
        "regler-sans-juge": [
            // 1. sorozat
            {
                q: "Franciaországban mennyibe kerül a bírósági egyeztető (conciliateur de justice)?",
                options: [
                    "Semmibe: önkéntes és ingyenes",
                    "Egy szerény, a bíróság által megállapított átalányba",
                    "A ténylegesen vitatott összeg egy százalékába"
                ],
                a: 0,
                explication: "Egyszerű kérelemmel lehet hozzá fordulni, és az elért megállapodást a bíró jóváhagyhatja."
            },
            {
                q: "Hol találod egy vállalkozás fogyasztói vitarendező fórumának elérhetőségét?",
                options: [
                    "A lakóhelyed szerint illetékes helyi bíróságon",
                    "Az adatvédelmi hatóságtól kell külön kérni",
                    "Az általános szerződési feltételeiben"
                ],
                a: 2,
                explication: "A kereskedőknek kötelező felkínálniuk, és a fogyasztónak ingyenes."
            },
            {
                q: "Franciaországban mit kockáztatsz, ha egy kis értékű vitában békés rendezési kísérlet nélkül fordulsz bírósághoz?",
                options: [
                    "Hogy a keresetet elfogadhatatlannak nyilvánítják",
                    "Bírságot rosszhiszemű, visszaélésszerű pereskedésért",
                    "Semmi különöset, a bíró majd egyszerűen dönt az ügyben"
                ],
                a: 0,
                explication: "Kis értékű vitáknál ez a kísérlet elvben kötelező."
            },
            // 2. sorozat
            {
                q: "1 500 EUR követelés, 1 200 EUR költség, 60% esély: mit mond a számítás?",
                options: [
                    "Pozitív várható nyereséget",
                    "Negatív átlagos várható eredményt: a békés megállapodás többet hoz",
                    "Nulla eredményt"
                ],
                a: 1,
                explication: "És ebben nincsenek benne a várakozással töltött hónapok és a ráfordított idő."
            },
            {
                q: "Mi a költségmentesség (a francia aide juridictionnelle)?",
                options: [
                    "Ingyenes tanácsadás a városházán",
                    "A költségek egészének vagy egy részének átvállalása a jövedelemtől függően",
                    "Egy a per után visszafizetendő kölcsön"
                ],
                a: 1,
                explication: "A jövedelemhatárokat évente felülvizsgálják: ellenőrizd a hivatalos portálon."
            },
            {
                q: "Milyen kérdést tegyél fel, mielőtt eljárást indítasz?",
                options: [
                    "Erkölcsileg nekem van-e igazam ebben a vitában?",
                    "Közel van-e az illetékes bíróság a lakásomhoz?",
                    "Van-e a másik oldalon miből fizetni?"
                ],
                a: 2,
                explication: "Nyerni és pénzhez jutni két külön lépés, és a végrehajtásnak saját költsége van."
            }
        ],

        // ---------------------------------------------------------------
        "vos-donnees-personnelles": [
            // 1. sorozat
            {
                q: "Mennyi ideje van egy szervezetnek válaszolni egy hozzáférési kérelemre?",
                options: [
                    "Egy hét, pontosan úgy, mint bármely közönséges ügyfélszolgálati reklamációnál",
                    "Hat hónap",
                    "Egy hónap, amely bonyolult kérelemnél kettővel meghosszabbítható"
                ],
                a: 2,
                explication: "Ha meghosszabbítja, erről tájékoztatnia kell."
            },
            {
                q: "Meg kell-e indokolni az adataidhoz való hozzáférés iránti kérelmet?",
                options: [
                    "Igen, egy jogos érdekre kell hivatkozni",
                    "Nem, semmilyen okot nem kell megadni",
                    "Igen, de csak egy folyamatban lévő jogvita esetén"
                ],
                a: 1,
                explication: "Egy háromsoros e-mail elég."
            },
            {
                q: "Mit tesz lehetővé az adathordozhatósághoz való jog?",
                options: [
                    "Visszakapni az adataidat újrafelhasználható formátumban",
                    "Töröltetni az adataidat",
                    "Ingyen, azonnal és bármilyen határidő nélkül szolgáltatót váltani"
                ],
                a: 0,
                explication: "Az egyik legkevésbé ismert, és a leghasznosabb jog."
            },
            // 2. sorozat
            {
                q: "Abszolút-e a törléshez való jog?",
                options: [
                    "Igen, kivétel nélkül",
                    "Igen, kivéve a bankokat",
                    "Nem: enged a törvényes megőrzési kötelezettségnek"
                ],
                a: 2,
                explication: "A közvetlen üzletszerzés elleni tiltakozás viszont nem ismer kivételt."
            },
            {
                q: "Mit tegyél, ha a szervezet nem válaszol a határidőn belül?",
                options: [
                    "Közvetlenül forduljak az illetékes bírósághoz",
                    "Várjak még egy hónapot",
                    "Tegyek ingyenes panaszt az adatvédelmi hatóságnál"
                ],
                a: 2,
                explication: "A hallgatás maga is elfogadható ok. Magyarországon a NAIH-hoz lehet fordulni."
            },
            {
                q: "Kiharcolhat-e neked kártérítést az adatvédelmi hatóság?",
                options: [
                    "Nem: felügyeleti hatóság, nem bíróság",
                    "Igen, ő állapítja meg az összeget",
                    "Igen, az általad bejelentett kárral arányosan"
                ],
                a: 0,
                explication: "Közbelép a szervezetnél, és ez az esetek nagy részében elég."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "Kerülni minden írásos szerződést",
                "Fejből tudni a törvénykönyveket",
                "Érvényesíteni a jogaidat, és tudni, mikor éri meg"
            ],
            a: 2,
            explication: "Ez az a szint, ahol szembenézünk egy kérdéssel, amelyet a jog soha nem tesz fel."
        },
        {
            q: "Mi a közös a francia bírósági egyeztetőben és az adatvédelmi hatóságban?",
            options: [
                "Mindkettő ingyenes, és alig veszik igénybe",
                "Mindkettő a felekre kötelező ítéletet hoz",
                "Mindkettőhöz ügyvéd kell"
            ],
            a: 0,
            explication: "A legolcsóbb utakon járnak a legkevesebben."
        },
        {
            q: "Két hónapnyi levélváltás az ellenféllel: mi a kockázat?",
            options: [
                "Az ellenfél visszaléphet",
                "A levelek elveszítik az értéküket",
                "Az elévülési idő közben tovább fut"
            ],
            a: 2,
            explication: "Ha közeleg a határidő, bírósághoz kell fordulni, vagy hivatalosan közvetítői eljárást indítani."
        },
        {
            q: "Egy szerződés a törvényes kellékszavatosságot kizáró feltételt tartalmaz. Mit tegyél?",
            options: [
                "Kérd a bíróságtól a megsemmisítését",
                "Semmi különöset: nem írottnak tekintendő, és nem alkalmazható",
                "Ne írd alá, különben érvényes lesz"
            ],
            a: 1,
            explication: "Nincs mit megsemmisíttetni — jogilag soha nem létezett."
        },
        {
            q: "Melyik két kérdés dönt gyakrabban, mint az ügy érdeme?",
            options: [
                "Melyik bíróság illetékes, és melyik ügyvédet válasszam?",
                "Határidőn belül vagyok-e még, és van-e az ellenfélnek miből fizetnie?",
                "Van-e írásos szerződésem, és alá van-e írva?"
            ],
            a: 1,
            explication: "Ezeket minden más előtt kell feltenni."
        },
        {
            q: "Mi marad, ha ebből a szintből csak egyetlen dolgot alkalmazol?",
            options: [
                "Mindenekelőtt ellenőrizni az elévülési időt",
                "Aláírás előtt végigolvasni az általános szerződési feltételeket",
                "Minden esetben bírósághoz fordulni"
            ],
            a: 0,
            explication: "Ezen a ponton egy hiba jóvátehetetlen, bármilyen erős is az ügy."
        }
    ]
};
