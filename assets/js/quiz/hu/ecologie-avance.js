// ===================================
// KÉRDÉSBANK — DIGITÁLIS MÉRTÉKLETESSÉG, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "lecoconception": [
            // 1. sorozat
            {
                q: "Mi egy nehéz digitális szolgáltatás legrosszabb hatása?",
                options: [
                    "A hálózati sávszélesség-fogyasztása",
                    "A betöltési ideje lassú kapcsolaton",
                    "Elavulttá tesz egy működő eszközt"
                ],
                a: 2,
                explication: "Mivel a gyártás dominál, egy kikényszerített csere többe kerül, mint több évnyi adatátvitel."
            },
            {
                q: "Mi a jó tervezési kérdés?",
                options: [
                    "Hány kilobájt az oldalam?",
                    "Hány éves eszköztől válik használhatatlanná az oldalam?",
                    "Milyen pontszámot kapok a különböző online mérőeszközökben?"
                ],
                a: 1,
                explication: "A kettő összefügg, de az eszköz életkorára vonatkozó kérdés számít."
            },
            {
                q: "3 MB-os oldalak, havi 10 000 látogatás: mit hoz a méret felezése?",
                options: [
                    "Több száz kilós megtakarítást",
                    "Évi kb. 0,6 kg CO₂e-t 1,3 helyett — kevesebbet egy telefon tizedénél",
                    "Semmilyen különbséget"
                ],
                a: 1,
                explication: "Ettől a könnyítés nem haszontalan: az indoka máshol van."
            },
            // 2. sorozat
            {
                q: "Miért probléma a végtelen görgetés?",
                options: [
                    "Túl sok memóriát fogyaszt a régi, gyengébb teljesítményű eszközökön",
                    "Akadályozza a keresőoptimalizálást",
                    "A ráfordított idő meghosszabbítására tervezett mechanizmus"
                ],
                a: 2,
                explication: "Növelni a használatot anélkül, hogy bármit hozna a felhasználónak — ez a mértékletesség ellentéte."
            },
            {
                q: "Mivel esnek egybe szinte teljesen egy szolgáltatás mértékletességi szempontjai?",
                options: [
                    "A keresőoptimalizálás és a keresőmotoros láthatóság szempontjaival",
                    "Az akadálymentesség és a teljesítmény szempontjaival",
                    "Az alkalmazások és az adatok biztonsági szempontjaival"
                ],
                a: 1,
                explication: "Jó hír: egy megbeszélésen az ökológiára hivatkozás nélkül is megvédhetők."
            },
            {
                q: "Elég egy szén-dioxid-mentes tárhely bejelentése ahhoz, hogy egy szolgáltatást mértékletesnek nevezzünk?",
                options: [
                    "Nem: ez a három tétel közül a legkisebbet kezeli",
                    "Igen, ez a mértékletes szolgáltatás fő szempontja",
                    "Igen, ha a szolgáltatót egy szervezet tanúsította"
                ],
                a: 0,
                explication: "Nem haszontalan — gyakran ez minden, ami történik."
            }
        ],

        // ---------------------------------------------------------------
        "le-parc-en-entreprise": [
            // 1. sorozat
            {
                q: "100 munkaállomás 200 kg CO₂e-vel, a csere 3 helyett 5 évente:",
                options: [
                    "Egyszeri, 2 667 kg-os megtakarítás, csak egyszer",
                    "Minden évben 2 667 kg CO₂e megtakarítás",
                    "Semmilyen hatás, a hardvert már megvették"
                ],
                a: 1,
                explication: "Egy döntés, egyszer, és egy minden évben megismétlődő hatás."
            },
            {
                q: "Mi váltja ki leggyakrabban egy munkaállomás cseréjét?",
                options: [
                    "A billentyűzet, a képernyő és a csatlakozók fokozatos kopása",
                    "A gyártói garancia lejárta a hardveren, néhány év után",
                    "Az egyre igényesebb szoftver, nem a meghibásodás"
                ],
                a: 2,
                explication: "Ezért fontos olyan szoftvereket választani, amelyek nem kényszerítenek cserére."
            },
            {
                q: "Kötelez-e egy hároméves számviteli értékcsökkenés a három év utáni cserére?",
                options: [
                    "Igen, ez adóügyi kötelezettség, amely alól nem lehet kibújni",
                    "Nem: ez számviteli szabály, nem cserekötelezettség",
                    "Igen, eltérés hiányában"
                ],
                a: 1,
                explication: "Kivenni az eszközparkot az automatikus számviteli ciklusból az egyik legegyszerűbb emelő."
            },
            // 2. sorozat
            {
                q: "Mit ér egy e-mail-törlési kampány az eszközpark élettartamának növeléséhez képest?",
                options: [
                    "Egyenértékű",
                    "Hatásosabb, mert egyszerre mindenkit mozgósít a cégnél",
                    "Látványos, olcsó, és nincs mérhető hatása"
                ],
                a: 2,
                explication: "Az elsőt a második nélkül tenni kommunikáció, nem környezetvédelem."
            },
            {
                q: "Mit kezdj egy igényes felhasználótól visszakapott géppel?",
                options: [
                    "Mindig eladni egy engedélyezett felújítónak",
                    "Selejtezni",
                    "Házon belül felújítani egy másik feladatra"
                ],
                a: 2,
                explication: "Egy kevésbé igényes munkakörben nagyon jól használható."
            },
            {
                q: "Miért olyan hatásos emelő a cserék gyakorisága?",
                options: [
                    "Mert csökkenti az áramfogyasztást",
                    "Egyetlen döntés, amelyet néhány ember hoz, és az egész eszközparkra vonatkozik",
                    "Mert kötelező"
                ],
                a: 1,
                explication: "Egyetlen szemléletformáló kampánynak sincs ilyen erőfeszítés–eredmény aránya."
            }
        ],

        // ---------------------------------------------------------------
        "le-cadre-reglementaire": [
            // 1. sorozat
            {
                q: "Mit pontoz a vásárláskor feltüntetett tartóssági index?",
                options: [
                    "A javíthatóságot és a megbízhatóságot",
                    "Az éves áramfogyasztást kilowattórában mérve",
                    "A termék és alkatrészei földrajzi származását"
                ],
                a: 0,
                explication: "Franciaországban több termékkategóriában a javíthatósági indexet váltotta."
            },
            {
                q: "Mi a WEEE-rendszer?",
                options: [
                    "Az elektromos és elektronikus berendezések hulladékainak visszavétele és kezelése",
                    "Egy mértékletességi címke",
                    "Egy gyártási szabvány"
                ],
                a: 0,
                explication: "Az árba beépített hozzájárulásból finanszírozzák."
            },
            {
                q: "Mit veszítünk, ha egy élettartama végén járó eszköz semmilyen rendszerbe nem kerül?",
                options: [
                    "Csak az összes anyaga újrahasznosításának hasznát",
                    "Kétszer: a hulladék szennyezésével, és az újra elvégzendő kitermeléssel",
                    "Semmi jelentőset"
                ],
                a: 1,
                explication: "Ezek az eszközök olyan fémeket tartalmaznak, amelyek kitermelése a legsúlyosabb tétel."
            },
            // 2. sorozat
            {
                q: "Köteles-e a forgalmazó eladáskor visszavenni a régi eszközt?",
                options: [
                    "Nem, ez önkéntes kereskedelmi szolgáltatás",
                    "Igen, egy egyenértékű eszköz eladásakor — de ritkán említi",
                    "Igen, fizetés ellenében"
                ],
                a: 1,
                explication: "Uniós kötelezettség, kevéssé ismert és kevéssé alkalmazott."
            },
            {
                q: "Hol helyezkedik el az újrahasznosítás a sorrendben?",
                options: [
                    "Az első helyen",
                    "Ugyanazon a szinten, mint a javítás, a felújítás és az újrahasználat",
                    "Az utolsó helyen, a csökkentés, az újrahasználat és a javítás után"
                ],
                a: 2,
                explication: "Az anyagok egy részét nyeri vissza, soha nem az egészet, és maga is energiát fogyaszt."
            },
            {
                q: "Mit tesz egy újrahasznosításra összpontosító üzenet?",
                options: [
                    "A figyelmet a vásárlásról az élettartam végére tereli",
                    "Felelősségre vonja a gyártókat",
                    "Közvetlenül a forrásnál csökkenti a keletkező hulladékot"
                ],
                a: 0,
                explication: "Vagyis onnan, ahol minden eldől, oda, ahol már szinte semmit sem lehet megmenteni."
            }
        ],

        // ---------------------------------------------------------------
        "leffet-rebond": [
            // 1. sorozat
            {
                q: "Mi a visszapattanó hatás?",
                options: [
                    "Az egységnyi hatékonyság javul, az egységek száma pedig ennél jobban nő",
                    "Átmeneti emelkedés egy csökkenés után",
                    "Egy hardver visszatérése javítás után"
                ],
                a: 0,
                explication: "Az egységnyi nyereség valós, a teljes összeg mégis nő."
            },
            {
                q: "Mi az egyetlen kérdés, amely egy bejelentett nyereségnél számít?",
                options: [
                    "Hány százalékkal javult pontosan?",
                    "Csökkent-e a teljes összeg?",
                    "Pontosan milyen időszakra vonatkozik?"
                ],
                a: 1,
                explication: "Ritkán teszik fel, mert a válasz gyakran nem."
            },
            {
                q: "Egy kétszer hatékonyabb modell, amelyet tízszer gyakrabban használnak:",
                options: [
                    "Ötször többet fogyaszt",
                    "Feleannyit fogyaszt, mint korábban",
                    "Ugyanannyit fogyaszt, mint korábban"
                ],
                a: 0,
                explication: "Ez a visszapattanás aritmetikája, és makacs."
            },
            // 2. sorozat
            {
                q: "Azt jelenti-e a visszapattanó hatás, hogy a hatékonyság haszontalan?",
                options: [
                    "Nem: nélküle a használat növekedése sokkal többe kerülne",
                    "Igen: az ismert esetek szinte mindegyikében kontraproduktív",
                    "Igen, kivéve az informatikában"
                ],
                a: 0,
                explication: "Azt mondja, hogy nem elég, nem azt, hogy haszontalan."
            },
            {
                q: "Mit kell mérni egy környezeti irányítópulton?",
                options: [
                    "A felhasználónkénti és kérésenkénti intenzitásokat",
                    "A teljes összegeket, nem az arányokat",
                    "A javulási százalékokat, az előző évhez képest"
                ],
                a: 1,
                explication: "Egy intenzitásokat követő irányítópult a végtelenségig javul, miközben az abszolút érték nő."
            },
            {
                q: "Növelheti-e a teljes lábnyomot egy lekérdezésenként hatékony, zöld tárhelyen futó szolgáltatás?",
                options: [
                    "Igen, ha megsokszorozza a használatot vagy felgyorsítja a hardver cseréjét",
                    "Nem, eleve nem",
                    "Csak Európán kívül"
                ],
                a: 0,
                explication: "Ezek a tulajdonságok egyszerűen más kérdésre felelnek, mint amelyet feltettek."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Kihez szól ez a szint, szemben az első kettővel?",
            options: [
                "A klímaszakértőkhöz",
                "Csak a fejlesztőkhöz",
                "Azokhoz, akik döntenek: szolgáltatást terveznek, eszközparkot kezelnek, mérlegelnek"
            ],
            a: 2,
            explication: "Itt változik az emelők léptéke, és itt kerülnek a legtöbbe a téves érvelések."
        },
        {
            q: "Mi a közös az ökotervezésben és az eszközpark élettartamának növelésében?",
            options: [
                "Mindkettő csökkenti az áramfogyasztást",
                "Mindkettő jogi kötelezettség",
                "Mindkettő a domináns tételre hat: a végeszközök gyártására"
            ],
            a: 2,
            explication: "Az egyik egy csere elhalasztásával, a másik a csere ütemének eldöntésével."
        },
        {
            q: "Egy cég e-mail-törlési kampányt indít, és háromévente cseréli az eszközparkját. Mit mondasz?",
            options: [
                "A látványos gesztus helyettesíti a döntést, amely számít",
                "A két intézkedés jól kiegészíti egymást, és együtt működik a legjobban",
                "A törlés részben ellensúlyoz"
            ],
            a: 0,
            explication: "A kérdés ekkor már nem környezeti: hanem kommunikációs."
        },
        {
            q: "Miért könnyű megvédeni egy szolgáltatás mértékletességi szempontjait?",
            options: [
                "Törvény írja elő őket",
                "Csökkentik a tárhelyköltségeket",
                "Egybeesnek az akadálymentességgel és a teljesítménnyel, amelyeknek saját érveik vannak"
            ],
            a: 2,
            explication: "Az ökológiára hivatkozás nélkül is elérhetők."
        },
        {
            q: "Mi marad, ha ennek a szintnek csak egyetlen dolgát jegyzed meg?",
            options: [
                "A lehető legjobban könnyíteni az oldalakat és a képeket",
                "Szén-dioxid-mentes, jól tanúsított tárhelyszolgáltatót választani",
                "A teljes összeget keresni a százalék helyett"
            ],
            a: 2,
            explication: "Ha nem adják meg, az általában azt jelenti, hogy nem jó irányba halad."
        },
        {
            q: "Húsz év műszaki fejlődés, és egyre nagyobb digitális lábnyom: hogyan magyarázható?",
            options: [
                "A visszapattanó hatással: a hatékonyság javul, a használat még jobban nő",
                "Téves mérésekkel",
                "A népesség növekedésével"
            ],
            a: 0,
            explication: "Ez a terület pályája, és a hatékonyság önmagában nem fordítja meg."
        }
    ]
};
