// ===================================
// KÉRDÉSBANK — VÁLLALKOZÁS, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "valider-avant-de-construire": [
            // 1. sorozat
            {
                q: "Mi egy projekt kudarcának leggyakoribb oka?",
                options: [
                    "Egy rosszul elkészített, túl gyorsan piacra dobott termék",
                    "Olyasmit építeni, amire senkinek sem volt szüksége",
                    "A finanszírozás hiánya"
                ],
                a: 1,
                explication: "Sem a csapat, sem a termék, sem a pénz nem áll az élen."
            },
            {
                q: "Melyik kérdés ad használható információt egy beszélgetésben?",
                options: [
                    "„Használna egy szolgáltatást, amely ezt tudja?”",
                    "„Meséljen arról, amikor legutóbb ez a problémája volt”",
                    "„Mennyit lenne hajlandó fizetni?”"
                ],
                a: 1,
                explication: "A múlt ellenőrizhető, a jövő elképzelt. Az emberek rosszul képzelik el magukat, és udvariasan válaszolnak."
            },
            {
                q: "Melyik jelzés utal valódi igényre?",
                options: [
                    "Az illető érdekesnek találja az ötletet",
                    "Az illető ismer olyanokat, akiket biztosan érdekelne a termék",
                    "Az illető már összetákolt magának egy megoldást"
                ],
                a: 2,
                explication: "A probléma annyira fáj, hogy időt szánt rá."
            },
            // 2. sorozat
            {
                q: "Mi a minimális életképes termék?",
                options: [
                    "A végleges termék összecsapott változata, túl korán az ügyfelek elé téve",
                    "Az első eladható változat",
                    "A legolcsóbb módja annak, hogy választ kapj egy kérdésre"
                ],
                a: 2,
                explication: "Gyakran nem is termék: egy bemutató oldal, egy kézzel nyújtott szolgáltatás, egy táblázat."
            },
            {
                q: "Miért ne a közeli ismerősöknél igazolj?",
                options: [
                    "Bátorítani akarnak: a visszajelzésük szeretetteljes és értéktelen",
                    "Nem ők a termék célcsoportja, ezért soha nem fogják megvenni",
                    "Nincs hozzá szakértelmük"
                ],
                a: 0,
                explication: "Az igazoláshoz idegenek kellenek, akiknek semmi okuk kedvesnek lenni."
            },
            {
                q: "Melyik jelzés ér ötven udvarias beszélgetést?",
                options: [
                    "Egy „ez tényleg szuper ötlet”",
                    "Egy „fizethetek most?”",
                    "Egy feliratkozás egy várólistára"
                ],
                a: 1,
                explication: "Egy igényt nem az igazol, amit az emberek mondanak, hanem amit tesznek."
            }
        ],

        // ---------------------------------------------------------------
        "modele-economique": [
            // 1. sorozat
            {
                q: "Melyik megközelítéssel fizettetheted meg rendesen a munkádat?",
                options: [
                    "Az árat a költségekből képezni, árrést hozzáadva",
                    "Igazodni a versenytársakhoz",
                    "Az árat az ügyfélnek nyújtott értékből képezni"
                ],
                a: 2,
                explication: "Ha a szolgáltatásod heti két órát spórol, a viszonyítási pont ennek a két órának az értéke, nem az önköltséged."
            },
            {
                q: "Ár 49 EUR, változó költség 11 EUR, fix költségek 4 000 EUR: hány ügyfél kell a fedezeti ponthoz?",
                options: [
                    "82",
                    "106",
                    "4 000 osztva 49-cel, azaz 82"
                ],
                a: 1,
                explication: "A számítás a 38 EUR-s fedezetre épül, nem a feltüntetett árra. A 82 majdnem egynegyedével tévedne."
            },
            {
                q: "Miért kockázatos az induláskor árat csökkenteni?",
                options: [
                    "Sokkal többet kell eladni, az árra legérzékenyebb ügyfeleket vonzza, és nehéz visszaemelni",
                    "Egyszerre túl sok ügyfelet vonz",
                    "Nincs semmilyen hátránya"
                ],
                a: 0,
                explication: "Egy árat szinte mindig könnyebb csökkenteni, mint emelni."
            },
            // 2. sorozat
            {
                q: "Mit kell kezdettől a fix költségek közé tenni?",
                options: [
                    "Az alapító fizetését",
                    "Egy tartalékot a váratlan kiadásokra",
                    "A jövőbeli felvételek költségét"
                ],
                a: 0,
                explication: "Enélkül a tevékenység nyereségesnek tűnik, pedig ingyenes munkára épül, amely nem tart sokáig."
            },
            {
                q: "Mikor kell az üzleti modellel foglalkozni?",
                options: [
                    "Az első ügyfelek megszerzése után",
                    "Mielőtt ügyfeleid lennének",
                    "A tőkebevonás pillanatában, nem előbb"
                ],
                a: 1,
                explication: "Sok projekt addig vár vele, amíg ügyfelei nem lesznek. A fordított sorrend működik."
            },
            {
                q: "Egy fedezet nélküli eladás:",
                options: [
                    "Veszteség, amely a volumennel együtt nő",
                    "Megnyert ügyfél, akit később jövedelmezővé teszünk",
                    "Kereskedelmi befektetés, amely megtérül"
                ],
                a: 0,
                explication: "A volumen még soha nem javított meg egy negatív fedezetet."
            }
        ],

        // ---------------------------------------------------------------
        "premiers-clients": [
            // 1. sorozat
            {
                q: "Honnan jön az első tíz ügyfél?",
                options: [
                    "Jól célzott hirdetési kampányokból",
                    "A természetes szájhagyományból",
                    "Nem skálázható tevékenységekből: egyenkénti megkeresés, személyes találkozók, kézzel nyújtott szolgáltatás"
                ],
                a: 2,
                explication: "Nem hatékony, és pontosan ezt kell csinálni: ezekből tanulod meg a szókincset és a valódi ellenvetéseket."
            },
            {
                q: "800 EUR keret, 1 600 látogató, 1,5% konverzió: mennyi az ügyfelenkénti költség?",
                options: [
                    "33 EUR",
                    "50 EUR",
                    "12 EUR"
                ],
                a: 0,
                explication: "24 ügyfél 800 EUR-ért. Ennek a számnak csak a fedezettel és az élettartammal összevetve van értelme."
            },
            {
                q: "Hány ügyfélszerzési csatornát nyiss meg induláskor?",
                options: [
                    "A lehető legtöbbet, hogy nagyobb eséllyel találj közöttük egy jót",
                    "Hármat, az összehasonlításhoz",
                    "Egyetlenegyet, amelyet addig viszel, amíg kiderül, működik-e"
                ],
                a: 2,
                explication: "Öt csatorna egyszerre biztosan azt jelenti, hogy egyiket sem uralod, és semmit sem tudsz mérni."
            },
            // 2. sorozat
            {
                q: "Melyik a jó ügyfélszerzési csatorna?",
                options: [
                    "Amelyik divatos, és amelyről most mindenki beszél",
                    "A legolcsóbb",
                    "Ahol az ügyfeleid már ott vannak és megoldást keresnek"
                ],
                a: 2,
                explication: "A divat változik; az, hogy az ügyfeleid valahol jelen vannak, tény."
            },
            {
                q: "Több ezer megtekintés és nulla eladás. Mi a következtetés?",
                options: [
                    "Várni kell, amíg az ismertség eladásokká alakul",
                    "A közönség nem ügyfélkör",
                    "A termék rosszul van bemutatva az oldalon"
                ],
                a: 1,
                explication: "Az induláskor egyetlen mutató számít: hány ember fizet."
            },
            {
                q: "Miért csináld először azt, ami nem skálázható?",
                options: [
                    "Mert olcsóbb",
                    "Mert ott tanulod meg, mit kell majd automatizálni",
                    "Mert gyorsabban beindítható"
                ],
                a: 1,
                explication: "Semmilyen hirdetési kampány nem adja meg azt az információt, amelyet tíz közvetlen beszélgetés."
            }
        ],

        // ---------------------------------------------------------------
        "piloter-tresorerie": [
            // 1. sorozat
            {
                q: "Megszűnhet-e egy nyereséges vállalkozás?",
                options: [
                    "Nem, a jövedelmezőség garantálja a túlélést",
                    "Csak csalás esetén",
                    "Igen, pénzhiány miatt: az eredmény és a bankszámla egyenlege két különböző dolgot mér"
                ],
                a: 2,
                explication: "Januárban számlázol, márciusban fizetnek, a bérek viszont közben esedékesek."
            },
            {
                q: "Mi a forgótőke-igény?",
                options: [
                    "A jegyzett tőke összege",
                    "A befolyó és a kifizetett pénz közötti csúszás",
                    "A biztonsági pénztartalék"
                ],
                a: 1,
                explication: "És a növekedéssel nő: minél többet adsz el, annál több pénzt kell megelőlegezned."
            },
            {
                q: "18 000 EUR pénz, havi 5 200 EUR kiadás és 3 100 EUR bevétel: mennyi a kifutási idő?",
                options: [
                    "3,5 hónap",
                    "8,6 hónap",
                    "5,8 hónap"
                ],
                a: 1,
                explication: "18 000 osztva a havi 2 100 EUR-s pénzfogyással. Ez a legfontosabb szám mind közül."
            },
            // 2. sorozat
            {
                q: "Melyik egyszerű reflex javít a legtöbbet a likviditáson?",
                options: [
                    "Azonnal számlázni a hónap vége helyett",
                    "Hosszabb fizetési határidőt kialkudni a szállítókkal",
                    "Árat emelni"
                ],
                a: 0,
                explication: "Minden nap késés a számlázásban egy nap késés a fizetésben."
            },
            {
                q: "Egy kifizetetlen számla esetén emlékeztetőt kell küldeni:",
                options: [
                    "Késlekedés nélkül, néhány nap után",
                    "60 napnál, amikor a késés már egyértelmű",
                    "Kizárólag ajánlott levélben, tértivevénnyel"
                ],
                a: 0,
                explication: "Ha korán emlékeztetsz, gyakran magától rendeződik. 60 napnál már nagyon nehéz behajtani."
            },
            {
                q: "Mi a baj azzal, hogy „ebben a hónapban 12 000 EUR-t csináltunk”?",
                options: [
                    "Semmi, ez a viszonyítási mutató",
                    "Semmit sem mond a rendelkezésre álló pénzről: befolyások, áfa és vállalt költségek",
                    "Túl alacsony szám"
                ],
                a: 1,
                explication: "Az egyetlen szám, amelyet hetente nézni kell, a rendelkezésre álló egyenleg, miután levontad, amivel tartozol."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        // 1. sorozat
        {
            q: "Milyen sorrendben kell kezelni ennek a szintnek a négy kérdését?",
            options: [
                "Valódi igény, fedezet, ügyfelek, likviditás",
                "Ügyfelek, fedezet, likviditás, végül valódi igény",
                "A sorrend nem számít"
            ],
            a: 0,
            explication: "És az utolsó több vállalkozást öl meg, mint a másik három együtt."
        },
        {
            q: "Mi a közös az igazoló beszélgetésben és a likviditás követésében?",
            options: [
                "Mindkettő tényekre épül, nem szándékokra",
                "Mindkettőhöz speciális szoftver és egy kis képzés kell",
                "Mindkettőt évente egyszer végzik"
            ],
            a: 0,
            explication: "Amit az emberek már megtettek, és ami valóban befolyt: két mérés, amelyen nincs mit vitatni."
        },
        {
            q: "Egy projektnek lelkes ügyfelei vannak, és minden eladáson pénzt veszít. Mit tegyél először?",
            options: [
                "Növeld a volument",
                "Javítsd az árat vagy a változó költséget",
                "Keress kiegészítő finanszírozást a hiány fedezésére"
            ],
            a: 1,
            explication: "A volumen felnagyítja a negatív fedezetet, soha nem javítja meg."
        },
        // 2. sorozat
        {
            q: "Miért hozhatja nehéz helyzetbe a növekedés a vállalkozást?",
            options: [
                "Mert növeli a forgótőke-igényt",
                "Mert vonzza a versenytársakat",
                "Mert bonyolítja a könyvelést és a bevallásokat"
            ],
            a: 0,
            explication: "Minél többet adsz el, annál több pénzt kell megelőlegezned, mielőtt fizetnek."
        },
        {
            q: "Melyik mutatót nézd hetente induláskor?",
            options: [
                "A látogatók számát",
                "A nyitás óta összesített árbevételt",
                "A rendelkezésre álló egyenleget és a kifutási időt hónapokban"
            ],
            a: 2,
            explication: "Megmutatja, mennyi idő van még a fedezeti pontig, és így azt is, mikor kell mást eldönteni."
        },
        {
            q: "Mi különbözteti meg a közönséget az ügyfélkörtől?",
            options: [
                "A csoport tényleges mérete",
                "A hűség az idő múlásával",
                "Az, hogy fizetnek"
            ],
            a: 2,
            explication: "Több száz követő és nulla eladás nagyon gyakori eset."
        }
    ]
};
