// ===================================
// KÉRDÉSBANK — VÁLLALKOZÁS, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban. A jogi formák franciák, és ezt
// a kérdések is kimondják.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "le-business-plan": [
            // 1. sorozat
            {
                q: "Mi az üzleti terv legfontosabb funkciója?",
                options: [
                    "Hogy gondolkodásra késztessen, akár annak felfedezése árán is, hogy a feltevéseid nem állják meg a helyüket",
                    "Meggyőzni egy bankárt",
                    "Megfelelni egy jogi kötelezettségnek, amely minden új vállalkozásra kivétel nélkül vonatkozik már az alapítás pillanatában"
                ],
                a: 0,
                explication: "Egy terv, amely semmit sem tanított és semmiben sem ingatott meg, tetszeni akart, nem próbára tenni."
            },
            {
                q: "Mi a fedezeti pont?",
                options: [
                    "Az az árbevétel, amely felett már nem veszítesz pénzt",
                    "Az a minimális összeg, amelyet az induláshoz be kell fektetni",
                    "A nyereség, amelyet a legelső működési évre célzol"
                ],
                a: 0,
                explication: "Ez az a szám, amelyet minden olvasó elsőként keres egy üzleti tervben."
            },
            {
                q: "Havi 2 500 EUR fix költség, szolgáltatásonként 180 EUR fedezet. Mennyi a havi fedezeti pont?",
                options: ["kb. 8 szolgáltatás", "kb. 14 szolgáltatás", "kb. 25 szolgáltatás"],
                a: 1,
                explication: "2 500 / 180 ≈ 14, vagyis nagyjából másfél munkanaponként egy. A számítás egy megérzést ellenőrizhető kérdéssé alakít."
            },
            // 2. sorozat
            {
                q: "Miért öl meg a likviditás több vállalkozást, mint a jövedelmezőség?",
                options: [
                    "Mert az adókat előre levonják",
                    "Mert az ügyfelek 30 vagy 60 napra fizetnek, a költségek viszont azonnal esedékesek",
                    "Mert a bankok néhány hónap után automatikusan megszüntetik a veszteséges vállalkozói számlákat"
                ],
                a: 1,
                explication: "Egy havi bontású likviditási tábla hasznosabb, mint egy tervezett eredménykimutatás."
            },
            {
                q: "Mit neveznek „hokiütő-görbének”?",
                options: [
                    "Egyenletes, óvatos növekedést évről évre, törések nélkül",
                    "Egy visszaesést, amelyet fellendülés követ",
                    "Lapos előrejelzést, majd hirtelen, indokolatlan robbanást"
                ],
                a: 2,
                explication: "Minden finanszírozó több százszor látta már. Többet érnek a kimondott feltevésekre épülő szerény számok."
            },
            {
                q: "Melyik versenytársról feledkeznek meg a leggyakrabban egy üzleti tervben?",
                options: [
                    "Az ágazat nagyvállalatairól, amelyek már beágyazottak és jól finanszírozottak",
                    "A „semmit sem tenni” lehetőségről, vagyis az ügyfél jelenlegi helyzetéről",
                    "A külföldi versenytársakról, amelyek gyakran olcsóbbak és már jelen vannak"
                ],
                a: 1,
                explication: "Sok lehetséges ügyfél nagyon jól elboldogul a jelenlegi megoldásával, bármilyen tökéletlen is."
            }
        ],

        // ---------------------------------------------------------------
        "létude-de-marché": [
            // 1. sorozat
            {
                q: "Mi a piackutatás célja?",
                options: [
                    "Megerősíteni, hogy jó az ötlet",
                    "Megbecsülni az első év árbevételét, hónapról hónapra",
                    "Megpróbálni lerombolni az ötletet: ha ellenáll, van a kezedben valami"
                ],
                a: 2,
                explication: "Aki megerősítést keres, semmit sem tanul."
            },
            {
                q: "Melyik kérdés adja a legmegbízhatóbb információt?",
                options: [
                    "„Használna egy alkalmazást a számlái kezelésére?”",
                    "„Hogyan kezelte a számláit a múlt hónapban?”",
                    "„Érdekesnek találja ezt az ötletet?”"
                ],
                a: 1,
                explication: "A múltról kérdezz, soha a jövőről. Egy kimondott szándék semmit sem ér, egy múltbeli viselkedés sokat."
            },
            {
                q: "Miért kevéssé hasznos a közeli ismerőseid véleménye?",
                options: [
                    "Nem ismerik az ágazatot, sem azokat az ügyfeleket, akikre gondolsz",
                    "Bátorítani akarnak: a véleményük szeretetteljes, nem informatív",
                    "Nincs idejük komolyan és részletesen válaszolni az ilyen kérdésekre"
                ],
                a: 1,
                explication: "Egy megindokolt „nem” tíz „ez zseniális”-t ér."
            },
            // 2. sorozat
            {
                q: "Mit ér az az érv, hogy „a wellnesspiac 4 milliárdot ér”?",
                options: [
                    "Kiváló hitelességi érv egy befektető előtt",
                    "Elég, ha megbízható a forrás",
                    "Neked semmit: le kell menni a valóban elérhető piacig"
                ],
                a: 2,
                explication: "Egy kicsi, védhető szám több bizalmat kelt, mint egy óriási, elérhetetlen."
            },
            {
                q: "Melyik a legmeggyőzőbb igazoló próba?",
                options: [
                    "Egy online kérdőív 300 pozitív válasszal, főleg az ismerősöktől",
                    "Egy előértékesítés: valaki előveszi a bankkártyáját",
                    "Egy leendő társ szóbeli, elvi beleegyezése a közös projektbe"
                ],
                a: 1,
                explication: "Amíg senki sem fizetett, bátorításod van, nem piacod."
            },
            {
                q: "Miből áll egy szolgáltatás „kézi változata”?",
                options: [
                    "A használati útmutató megírásából fejlesztés előtt",
                    "A szolgáltatás kézzel nyújtásából az első ügyfeleknek, automatizálás nélkül",
                    "A termék saját kipróbálásából eladás előtt"
                ],
                a: 1,
                explication: "Rengeteget tanulsz, és semmi fölöslegeset nem fejlesztettél."
            }
        ],

        // ---------------------------------------------------------------
        "le-choix-du-statut-juridique": [
            // 1. sorozat
            {
                q: "Végleges-e a jogi forma megválasztása?",
                options: [
                    "Nem: megváltoztatható, jobb elindulni, mint halogatni a projektet",
                    "Igen, a vállalkozás egész életére szól, és később már nem változtatható",
                    "Igen, kivéve felszámolás vagy a vállalkozás eladása esetén"
                ],
                a: 0,
                explication: "Ne akaszd meg a projektedet ezen: a jogi forma váltása előre látható és gyakori."
            },
            {
                q: "Mi a francia micro-entreprise fő előnye egy tevékenység kipróbálásához?",
                options: [
                    "Minden költség levonható",
                    "Azonnali online létrehozás, nincs tőkeigény, nulla forgalomnál nincs költség",
                    "Az összes forma közül ez nyújtja a legjobb társadalombiztosítási védelmet"
                ],
                a: 1,
                explication: "Akkor érdemes társaságra váltani, amikor közelítesz az értékhatárokhoz, vagy amikor társ érkezik."
            },
            {
                q: "Mi a micro-entreprise fő korlátja?",
                options: [
                    "A szakmai kiadások nem vonhatók le",
                    "Tiltja a külföldi ügyfelek kiszolgálását",
                    "Minimális tőkét ír elő az alapításkor"
                ],
                a: 0,
                explication: "Az a tevékenység, amelyhez jelentős beszerzés kell, ott gyorsan hátrányba kerül."
            },
            // 2. sorozat
            {
                q: "40 000 EUR árbevétel, 22 000 EUR anyagbeszerzés. Melyik formát érdemes választani?",
                options: [
                    "A micro-entreprise-t, mert egyszerűbb",
                    "Egy társaságot: micro-entreprise-ben a terhek a befolyt 40 000 EUR után számítódnak",
                    "Mindegy, az adózott eredmény végül ugyanaz"
                ],
                a: 1,
                explication: "Minél magasabbak a valódi költségeid, annál kevésbé illik hozzád a micro-entreprise."
            },
            {
                q: "Melyik francia forma könnyíti meg leginkább a befektetők belépését a tőkébe?",
                options: ["A micro-entreprise", "Az EURL, mert rugalmasabb", "A SASU / SAS"],
                a: 2,
                explication: "A létesítő okiratban adott nagy szabadsága miatt ez a növekedésre szánt projektek szokásos választása."
            },
            {
                q: "Miért nyiss külön bankszámlát már az első befolyt eurótól?",
                options: [
                    "Jogi kötelezettség, amely kivétel nélkül minden vállalkozási formára és tevékenységre vonatkozik",
                    "Hogy jobb hitelkamatot kapj",
                    "A számlák összekeverése kínszenvedéssé teszi a könyvelést, és elmossa az eredmények képét"
                ],
                a: 2,
                explication: "Öt perc a nyitás, és utána órákat spórolsz."
            }
        ],

        // ---------------------------------------------------------------
        "le-financement": [
            // 1. sorozat
            {
                q: "Mibe kerül valójában egy tőkebevonás?",
                options: [
                    "A tőke és a döntési hatalom egy részébe",
                    "Magas kamatokba, több éven át visszafizetve",
                    "Egy fix jutalékba, amelyet az elején a befektetőnek fizetsz"
                ],
                a: 0,
                explication: "Olyan társakat szerzel, akiknek beleszólásuk lesz, akár abba is, hogy te maradsz-e a vezető."
            },
            {
                q: "Mi az alapítói kölcsön?",
                options: [
                    "Kamatmentes, biztosíték nélküli személyes kölcsön, amely saját forrásnak számít",
                    "Írásos dokumentum nélkül, csupán a bank bizalma és jó szándéka alapján nyújtott kölcsön",
                    "Csak a már nyereséges vállalkozásoknak nyújtott kölcsön"
                ],
                a: 0,
                explication: "A bankok figyelembe veszik: gyakran egy másik, nagyobb hitelt nyit meg."
            },
            {
                q: "Mekkora saját hozzájárulást vár általában egy bank?",
                options: ["5%-ot", "Az igény 20–30%-át", "Legalább 50%-ot"],
                a: 1,
                explication: "Ha te semmit sem kockáztatsz, miért kockáztatna ő?"
            },
            // 2. sorozat
            {
                q: "Önmagában siker-e a tőkebevonás?",
                options: [
                    "Igen, egy projekt megkoronázása, és annak bizonyítéka, hogy megáll a lábán",
                    "Igen, ha az összeg meghaladja az 500 000 EUR-t",
                    "Nem: kötelezettségvállalás a nagyon gyors növekedésre, a vállalkozás egy részéért cserébe"
                ],
                a: 2,
                explication: "A projektek többségénél az ügyfelek bevételéből való fejlődés több szabadságot hagy."
            },
            {
                q: "Mi a legjobb finanszírozás egy fiatal vállalkozásnak?",
                options: [
                    "Egy fix kamatozású bankhitel",
                    "Egy fizető ügyfél",
                    "Egy regionális támogatás"
                ],
                a: 1,
                explication: "Nem kell visszafizetni, semmit sem hígít, és bizonyítja, hogy a piac létezik."
            },
            {
                q: "Mit néz egy bank a számokon túl?",
                options: [
                    "A feltevések következetességét és az ágazati tapasztalatodat",
                    "Az üzleti terv dizájnját",
                    "A dosszié oldalszámát, a grafikonok számát és a bemutatás gondosságát"
                ],
                a: 0,
                explication: "A kimondott feltevések többet érnek a hízelgő számoknál. Egy állami garanciaprogram is vállalhat kezességet."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        // 1. sorozat
        {
            q: "Mi egy fiatal vállalkozás kudarcának leggyakoribb oka?",
            options: [
                "A piac hiánya: olyasmit építenek, amit senki sem kért",
                "Az alapító kevés munkája, aki nem szán rá eleget",
                "A rossz könyvelés"
            ],
            a: 0,
            explication: "Ezért ajánlott a sorrend: mindenekelőtt ellenőrizni, hogy a probléma létezik."
        },
        {
            q: "Mivel kezdj egy vállalkozási projektet?",
            options: [
                "A tervezett vállalkozás nevével, logójával, weboldalával, névjegykártyáival és jogi formájával",
                "A finanszírozás keresésével",
                "Annak ellenőrzésével, hogy valaki kész fizetni azért, hogy a probléma megszűnjön"
            ],
            a: 2,
            explication: "Minden más ezután jön, és sokkal egyszerűbb lesz, ha ez a válasz megvan."
        },
        {
            q: "Melyik dokumentum a leghasznosabb az első év irányításához?",
            options: [
                "Egy havi bontású likviditási tábla",
                "Egy hároméves tervezett eredménykimutatás",
                "Egy részletes, számszerűsített piackutatás"
            ],
            a: 0,
            explication: "Egy papíron nyereséges vállalkozás is megszűnhet, ha nincs pénze."
        },
        // 2. sorozat
        {
            q: "Nem tudod eldönteni, most hozd létre a cégedet, vagy előbb szerezz ügyfelet. Mit tegyél?",
            options: [
                "Hozd létre a céget: az komolyabb az ügyfelek felé",
                "Mindkettőt párhuzamosan",
                "Keress egy első fizető ügyfelet: ez igazolja a projektet és megnyugtatja a finanszírozókat"
            ],
            a: 2,
            explication: "Néha megóv attól, hogy létrehozz egy vállalkozást, amelyről túl későn derülne ki, hogy nincs piaca."
        },
        {
            q: "Húsz ember mondja, hogy kiváló az ötleted. Mit vonhatsz le ebből?",
            options: [
                "Semmit: egyikük sem fizetett",
                "Hogy a piac ezzel már igazoltnak tekinthető",
                "Hogy most már bevonhatsz tőkét"
            ],
            a: 0,
            explication: "A múltról kérdezz a jövő helyett, és keress olyanokat, akiknek semmi okuk kímélni téged."
        },
        {
            q: "Melyik ingyenes támogatást használják a legkevésbé az alapítók?",
            options: [
                "A szakosodott magán tanácsadó cégeket",
                "Az alapítók online fórumait és csoportjait",
                "A kereskedelmi és iparkamarákat"
            ],
            a: 2,
            explication: "A jövőbeli befizetéseid finanszírozzák, és gyakran alapítói kölcsönhálózatokkal is összeköt."
        }
    ]
};
