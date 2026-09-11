// ===================================
// KÉRDÉSBANK — PÉNZÜGYEK, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "construire-son-allocation": [
            // 1. sorozat
            {
                q: "Mire épül mindenekelőtt egy allokáció megválasztása?",
                options: [
                    "Az időtávra, vagyis arra, mikor kell a pénz",
                    "A befektető vérmérsékletére és kockázatvállalási kedvére",
                    "A piacok jelenlegi szintjére"
                ],
                a: 0,
                explication: "A vérmérséklet nem változtat azon, mennyi idő alatt épül fel egy piac egy zuhanásból. A pénz szükségességének dátuma határozza meg, mit bírsz el."
            },
            {
                q: "Lehet egy embernek egyszerre több allokációja?",
                options: [
                    "Nem, személyenként csak egy",
                    "Igen, de csak 50 éves kor után",
                    "Igen: tárcánként egy, minden terv határideje szerint"
                ],
                a: 2,
                explication: "Egy 2 év múlva esedékes vásárlás és egy 25 év múlva esedékes nyugdíj nem ugyanakkora kitettséget kíván. Ugyanannak az embernek több tárcája van, mindegyik a saját határidejével."
            },
            {
                q: "Mit javasol a „100 mínusz az életkor” szabály?",
                options: [
                    "Hogy a részvényarány 100 mínusz az életkor legyen",
                    "Havi 100 EUR megtakarítást a nyugdíjkorhatárig",
                    "Legfeljebb 100 tételt a portfólióban"
                ],
                a: 0,
                explication: "30 évesen 70% részvény, 60 évesen 40%. A pénz szükségességéhez közeledve csökkenti a kockázatot, de összekeveri az életkort a valódi időtávval."
            },
            // 2. sorozat
            {
                q: "Mi a „100 mínusz az életkor” szabály fő korlátja?",
                options: [
                    "Túl bonyolult kiszámolni",
                    "Összekeveri az életkort a befektetési időtávval",
                    "Csak államkötvényekre alkalmazható"
                ],
                a: 1,
                explication: "Egy 60 éves ember, aki csak 80 évesen nyúl a tőkéjéhez, még húsz év időtávval rendelkezik, nem nullával."
            },
            {
                q: "Egy 8 év múlva esedékes lakásvásárlási önerőhöz milyen kitettség következetes?",
                options: [
                    "0% részvény, mert az igény biztos",
                    "Kb. 40% részvény",
                    "100% részvény, nyolc év hosszú idő"
                ],
                a: 1,
                explication: "Nyolc év alatt egy esés részben eltűnhet, de nem teljesen. Egy közepes időtávhoz közepes kitettség illik."
            },
            {
                q: "Mikor kell felülvizsgálni az allokációt?",
                options: [
                    "Amikor a piacok erősen emelkednek vagy esnek",
                    "Havonta, hogy reagálni tudj a piacokra",
                    "Amikor a tervek határideje megváltozik"
                ],
                a: 2,
                explication: "Az allokációt hideg fejjel, ismert dátumok alapján rögzítjük. A hírek szerint módosítani annyi, mint drágán venni és olcsón eladni."
            }
        ],

        // ---------------------------------------------------------------
        "les-frais": [
            // 1. sorozat
            {
                q: "Mi különbözteti meg a költségeket a hozamtól?",
                options: [
                    "A költségek biztosak, a hozam feltevés",
                    "A költségek változnak, a hozam stabil",
                    "Semmi, mindkettő kiszámíthatatlan"
                ],
                a: 0,
                explication: "A költségeket bármi történjék levonják, jó és rossz években egyaránt. Ez a hozam egyetlen előre ismert eleme."
            },
            {
                q: "30 év és 20 000 EUR, 6%-on: mibe kerül egy további százalékpont éves költség?",
                options: [
                    "Kb. 2 000 EUR-ba",
                    "Kb. 6 000 EUR-ba",
                    "Kb. 29 000 EUR-ba, az eredmény negyedébe"
                ],
                a: 2,
                explication: "113 000 EUR 0,2%-os költséggel, szemben 84 000 EUR-val 1,2%-nál. A különbség meghaladja az eredetileg befektetett tőkét."
            },
            {
                q: "Hogyan vonják le egy alap kezelési költségeit?",
                options: [
                    "Az ügyfélnek küldött éves számlával",
                    "Csak az eladás pillanatában",
                    "Csendben, az állományból, a kimutatott hozamból levonva"
                ],
                a: 2,
                explication: "Soha nem jelennek meg terhelési tételként. Pontosan ettől nehéz észrevenni őket."
            },
            // 2. sorozat
            {
                q: "Miért olyan erős a költségek hatása hosszú távon?",
                options: [
                    "Mert a szerződés állományával együtt évről évre nőnek",
                    "Mert az elveszett hozam által termelt kamatoktól is megfosztanak",
                    "Mert kétszer vonják le őket"
                ],
                a: 1,
                explication: "Ez a visszafelé működő kamatos kamat: minden euró költség egy olyan euró, amely a következő években soha nem termel kamatot."
            },
            {
                q: "Két egyenértékű eszköz közül mit hasonlíts össze először?",
                options: [
                    "A tavalyi teljesítményüket",
                    "Az összehasonlító oldalakon kapott csillagaikat",
                    "Az éves költségeiket"
                ],
                a: 2,
                explication: "A múltbeli teljesítmény nem ismétlődik megbízhatóan; a költségek viszont minden évben ugyanúgy."
            },
            {
                q: "Milyen költségek adódnak hozzá az eszközéihez egy francia assurance-vie szerződésben?",
                options: [
                    "Éves keretköltségek a befektetési egységeken",
                    "Semmilyen, az eszköz mindent tartalmaz",
                    "2%-os állami adó"
                ],
                a: 0,
                explication: "A költségek egymásra rakódnak: az alapé, a szerződésé, néha belépési díj minden befizetésen. A teljes összeget kell kérni."
            }
        ],

        // ---------------------------------------------------------------
        "choisir-son-enveloppe": [
            // 1. sorozat
            {
                q: "Mit jelent a befektetési „keret”?",
                options: [
                    "A tárolót: PEA, értékpapírszámla, assurance-vie",
                    "A befektethető maximális összeget",
                    "A számlanyitáskor aláírt szerződéses dokumentumot"
                ],
                a: 0,
                explication: "A tartalom — részvények, ETF-ek — ugyanaz lehet. Az adózás és a kivét feltételei változnak."
            },
            {
                q: "Öt év után milyen levonás marad egy PEA nyereségén?",
                options: [
                    "Semmilyen, sem szociális, sem adó",
                    "Csak a szociális hozzájárulás",
                    "Csak a jövedelemadó"
                ],
                a: 1,
                explication: "A mentesség a jövedelemadóra vonatkozik. A 17,2%-os szociális hozzájárulás fizetendő marad."
            },
            {
                q: "10 000 EUR nyereségen mekkora a különbség egy értékpapírszámla és egy 5 évnél régebbi PEA között?",
                options: [
                    "Semennyi, az adózás teljesen azonos",
                    "Kb. 1 280 EUR a PEA javára",
                    "Kb. 5 000 EUR a PEA javára"
                ],
                a: 1,
                explication: "3 000 EUR levonás értékpapírszámlán (30%), szemben kb. 1 720 EUR-val PEA-n (17,2%). Ugyanaz az eszköz, ugyanaz a hozam: csak a keret más."
            },
            // 2. sorozat
            {
                q: "Mikor indul a PEA ötéves órája?",
                options: [
                    "Az első jelentős befizetéskor",
                    "Az első értékpapír-vásárláskor",
                    "A terv megnyitásakor"
                ],
                a: 2,
                explication: "Ha szerény összeggel nyitsz PEA-t, elindul az óra. Aki várja, hogy „legyen elég”, ingyen megszerezhető éveket veszít el."
            },
            {
                q: "Mi a PEA fő korlátja?",
                options: [
                    "Csak európai részvényeket és alapokat fogad be",
                    "40 év felettieknek szól",
                    "Nyugdíjig egyetlen eurót sem lehet kivenni belőle"
                ],
                a: 0,
                explication: "Az értékpapírszámlának nincs földrajzi korlátja — de az adózás az első euró nyereségtől érvényes."
            },
            {
                q: "Melyik keret „a legjobb”?",
                options: [
                    "A PEA, minden esetben",
                    "Az assurance-vie, minden esetben",
                    "Rossz a kérdés: más-más igényre felelnek"
                ],
                a: 2,
                explication: "Azt választjuk, amelyik a határidőhöz és a tervezett tartalomhoz illik, nem azt, amelyik abszolút értelemben jobb."
            }
        ],

        // ---------------------------------------------------------------
        "investir-dans-la-duree": [
            // 1. sorozat
            {
                q: "Mit hoznak valójában a rendszeres befizetések?",
                options: [
                    "Magasabb átlagos hozamot",
                    "Garanciát a veszteségek ellen esés esetén",
                    "Megszüntetik a belépési pillanat kérdését"
                ],
                a: 2,
                explication: "Átlagosan még kicsit kevesebbet is hoznak, mint egy egyösszegű befektetés. Az előnyük, hogy elviselhetővé teszik a várakozást, és megakadályozzák a végtelen halogatást."
            },
            {
                q: "Havi 200 EUR 6%-on: mekkora a tőke 20 év után, 48 000 EUR befizetésre?",
                options: [
                    "Kb. 55 000 EUR",
                    "Kb. 92 000 EUR",
                    "Kb. 150 000 EUR"
                ],
                a: 1,
                explication: "A kamatok végül meghaladják a befizetéseket. Csak 10 év alatt ugyanez az erőfeszítés kb. 33 000 EUR-t hoz."
            },
            {
                q: "Miből áll az újrasúlyozás?",
                options: [
                    "Eladni, ami esik, hogy korlátozd a veszteséget",
                    "Évente egyszer visszaállni a célallokációra",
                    "A gazdasági előrejelzések szerint allokációt váltani"
                ],
                a: 1,
                explication: "Újrasúlyozás nélkül a leginkább növő tárca egyre nagyobb teret kap: a kockázat úgy nő, hogy senki sem döntött róla."
            },
            // 2. sorozat
            {
                q: "Miért ellentmondásos az újrasúlyozás?",
                options: [
                    "Azt kívánja, hogy azt erősítsd, ami a legrosszabbul teljesített",
                    "Arra kötelez, hogy évente mindent eladj",
                    "Többe kerül, mint amennyit hoz"
                ],
                a: 0,
                explication: "Pontosan ez a kényelmetlenség tartja meg az eredetileg választott kockázati szintet."
            },
            {
                q: "Egy 60% részvényre tervezett allokáció jó évek után 75%-ra csúszik. Mi történt?",
                options: [
                    "A közvetítő hibája",
                    "A kockázat tudatos döntés nélkül nőtt",
                    "Semmi rendkívüli, hagyni kell futni a nyereséget"
                ],
                a: 1,
                explication: "A csúszás mechanikus. Nagyobb kitettséget jelent, mint amit elfogadtál, éppen akkor, amikor a piacok magasan vannak."
            },
            {
                q: "Milyen gyakran nézz rá egy hosszú távú portfólióra?",
                options: [
                    "Naponta, hogy reagálni tudj",
                    "Egy éves időpont elég",
                    "Soha, már nem szabad hozzányúlni"
                ],
                a: 1,
                explication: "A napi figyelés megsokszorozza az alkalmakat, hogy pirosat láss, és így a kísértést is, hogy érzelmi alapon cselekedj."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        // 1. sorozat
        {
            q: "Melyik döntés magyarázza az eredmények ingadozásának legnagyobb részét?",
            options: [
                "Az egyes eszközök kiválasztása",
                "A vásárlás pontos pillanata",
                "A kockázatos és stabil eszközök közötti allokáció"
            ],
            a: 2,
            explication: "Az allokáció a legmeghatározóbb döntés, jóval megelőzve egy-egy alap kiválasztását."
        },
        {
            q: "Két befektető ugyanazt a bruttó hozamot éri el. Mi nyitja szét köztük a különbséget?",
            options: [
                "A költségek és a választott adózási keret",
                "A portfólióban tartott tételek pontos száma",
                "Az értékpapírszámlát vezető bank"
            ],
            a: 0,
            explication: "A költségek és az adózás minden évben és minden kivétnél érvényesül. Ez a két igazán irányítható emelő."
        },
        {
            q: "Miért számít többet az idő, mint a befektetett összeg?",
            options: [
                "Mert a kamatok maguk is kamatot termelnek",
                "Mert a költségek idővel csökkennek",
                "Mert a piacok mindig emelkednek"
            ],
            a: 0,
            explication: "A kétszeres idő nem kétszeres tőkét hoz: az útmutató példájában majdnem háromszorosat."
        },
        // 2. sorozat
        {
            q: "Egy tanácsadó nem tudja megmondani egy szerződés éves költségeinek teljes összegét. Mit szűrj le ebből?",
            options: [
                "Normális, ezek a költségek évről évre változnak",
                "A válasz hiánya önmagában is információ",
                "Helyette inkább a múltbeli hozamot kell kérni"
            ],
            a: 1,
            explication: "A költségek teljes összege ismert és dokumentált adat, a kiemelt információkat tartalmazó dokumentumban szerepel. Ha nem adják meg, az jelzés."
        },
        {
            q: "Mi a közös az allokációban, a költségekben, a keretben és a rendszerességben?",
            options: [
                "Mindegyiket valóban a befektető irányítja",
                "Mindegyik a gazdasági helyzettől függ",
                "Csak nagy vagyonokat érintenek"
            ],
            a: 0,
            explication: "Egyikhez sem kell előre látni a piacokat. Ettől döntőek, ott, ahol az előrejelzés nem az."
        },
        {
            q: "Miért bukik el a legtöbb befektetési terv?",
            options: [
                "Egy kezdeti számítási hiba miatt",
                "Menet közbeni feladás miatt",
                "Mert a választott eszközök rosszak"
            ],
            a: 1,
            explication: "Allokációt választani könnyű; nem változtatni rajta, amikor próbára teszik, sokkal nehezebb."
        }
    ]
};
