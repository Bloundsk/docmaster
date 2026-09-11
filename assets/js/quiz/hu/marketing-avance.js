// ===================================
// KÉRDÉSBANK — DIGITÁLIS MARKETING, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "attribution": [
            // 1. sorozat
            {
                q: "Melyik attribúciós modell a legtöbb eszköz alapbeállítása?",
                options: [
                    "Az út legeslegelső kattintása",
                    "A megosztott attribúció",
                    "Az utolsó kattintás"
                ],
                a: 2,
                explication: "Egyben a legfélrevezetőbb is: rendszeresen azt jutalmazza, ami az út végén lép közbe."
            },
            {
                q: "Mit jutalmaz törvényszerűen az utolsó kattintás?",
                options: [
                    "A márkanévre való keresést és az e-mailt",
                    "A felfedezés csatornáját, vagyis az út elejét",
                    "A fizetett közösségi médiát és a formátumait"
                ],
                a: 0,
                explication: "Közvetlenül a vásárlás előtt lépnek közbe, anélkül hogy feltétlenül ők győztek volna meg."
            },
            {
                q: "„Igaz” egy attribúciós modell?",
                options: [
                    "Igen, ha minden kampány elejétől helyesen van beállítva",
                    "Igen, a megosztott modell",
                    "Nem: egyik sem tudja, mi történt a vásárló fejében"
                ],
                a: 2,
                explication: "Mindegyik konvenció. A választás a költségkereteket változtatja meg, nem a valóságot."
            },
            // 2. sorozat
            {
                q: "Mi az egyetlen megbízható módszer egy csatorna hozzájárulásának megismerésére?",
                options: [
                    "Jobban elosztó, a teljes vásárlási utat figyelembe vevő attribúciós modellre váltani",
                    "Összevetni az ágazattal",
                    "Leállítani vagy csökkenteni, és a végösszegre gyakorolt hatást figyelni"
                ],
                a: 2,
                explication: "Ez az egyetlen oksági megközelítés, pontosan úgy, mint egy kontrollált teszt."
            },
            {
                q: "Mi történik, ha az utolsó kattintás alapján elvágjuk a felfedezés csatornáját?",
                options: [
                    "Semmi, nem konvertált",
                    "Néhány héttel később azok a csatornák is visszaesnek, amelyek jól teljesítőnek látszottak",
                    "Nő az összesített konverzió"
                ],
                a: 1,
                explication: "Ekkor általános visszaesést látunk látható ok nélkül, és ott keressük a hibát, ahol nincs."
            },
            {
                q: "Négy érintkezési pontos úton mit ad a megosztott attribúció?",
                options: ["25%-ot mindegyiknek", "100%-ot az utolsónak", "50%-ot az elsőnek és 50%-ot az utolsónak"],
                a: 0,
                explication: "Igazságosabb, bonyolultabb, és mindig konvenció kérdése."
            }
        ],

        // ---------------------------------------------------------------
        "retention-et-cycle-de-vie": [
            // 1. sorozat
            {
                q: "Ha havonta az ügyfelek 12%-át veszítjük el, mennyi az átlagos élettartam?",
                options: ["Nagyjából 8,3 hónap", "Nagyjából 12 hónap", "Nagyjából 4 hónap"],
                a: 0,
                explication: "Ha ezt a veszteséget 8%-ra csökkentjük, 12,5 hónapra nő, azaz 50%-kal hosszabb lesz."
            },
            {
                q: "Mennyibe kerül visszahozni egy ügyfelet ahhoz képest, hogy megszerezzünk egyet?",
                options: [
                    "Ugyanannyiba, egész évre vetítve néhány euró eltéréssel",
                    "Ágazattól függően öt-hétszer kevesebbe",
                    "Átlagosan kétszer annyiba a teljes piacon"
                ],
                a: 1,
                explication: "Ez a sor mégis ritkán szerepel egy marketingtervben."
            },
            {
                q: "Miért érdekel kevésbé a megtartás, mint a szerzés?",
                options: [
                    "Kevesebbet hoz",
                    "Nem látszik egy kampánytáblázatban",
                    "Műszakilag sokkal nehezebb pontosan követni és mérni"
                ],
                a: 1,
                explication: "Pedig az eredmény nagy részét ez hozza."
            },
            // 2. sorozat
            {
                q: "Melyik a megtartás három emelője, növekvő költség szerint?",
                options: [
                    "Kedvezmények, hűségprogram, ügyfélszolgálat",
                    "Emlékeztető hirdetés, ajánlói program, ajándékok",
                    "Betartani az ígéretet, kísérni az elejét, felvenni a kapcsolatot, mielőtt elfelejtenek"
                ],
                a: 2,
                explication: "Az első semmibe sem kerül: arról van szó, hogy az első rendelés úgy zajoljon, ahogy meghirdették."
            },
            {
                q: "Mit eredményez egy csak új ügyfeleknek szóló kedvezmény?",
                options: [
                    "Világos üzenetet a hűségeseknek: a hűségük semmit sem ér",
                    "Egészséges növekedést",
                    "Jobb szájreklámot a leghűségesebb, régóta vásárló ügyfelek körében"
                ],
                a: 0,
                explication: "A számítás kétszeresen veszteséges: többet fizetünk egy kevésbé jövedelmező ügyfélért, és elvesszük a kedvét annak, aki a legtöbbet hozta."
            },
            {
                q: "Mit ér négy megtartási ponttal több?",
                options: [
                    "Többet, mint négyszer akkora hirdetési költségkeret",
                    "Csak csekély javulást",
                    "Annyit, mint egy jól optimalizált, gondosan célzott hirdetési kampány"
                ],
                a: 0,
                explication: "Semmilyen hirdetésoptimalizálás nem ér el ekkora hatást."
            }
        ],

        // ---------------------------------------------------------------
        "persuasion-ethique": [
            // 1. sorozat
            {
                q: "Melyik szempont választja el a meggyőzést a manipulációtól?",
                options: [
                    "Az üzenet intenzitása",
                    "A használt csatorna",
                    "Az információ igazsága, és hogy az ügyfél egyetértene-e, ha felfedezné a mechanizmust"
                ],
                a: 2,
                explication: "A szöveg lehet azonos. Ami változik, az az igazság."
            },
            {
                q: "Milyen a „már csak 3 darab raktáron” valóban 3 darabos készlettel?",
                options: [
                    "Legitim: az ember szinte megköszönné, hogy figyelmeztették",
                    "A fogyasztó egyértelmű manipulációja, feltétlenül kerülendő",
                    "Tilos"
                ],
                a: 0,
                explication: "Ugyanez az üzenet 400 elérhető darabbal megtévesztés lenne."
            },
            {
                q: "Mikor válik hazugsággá a társadalmi bizonyíték?",
                options: [
                    "Amikor a szám kitalált vagy ellenőrizhetetlen",
                    "Amint valahol, bármilyen formában kiírjuk az ügyfelek számát",
                    "Amikor kiemeljük"
                ],
                a: 0,
                explication: "A „2400 ügyfél” tájékoztat, ha igaz. Egy kitalált számláló hazugság."
            },
            // 2. sorozat
            {
                q: "Miért rossz gazdasági számítás a megtévesztő technika?",
                options: [
                    "Nem működik",
                    "Drága bevezetni",
                    "A nyereség ebben a hónapban látszik, a költség két évre oszlik szét, és senki sem tulajdonítja neki"
                ],
                a: 2,
                explication: "A visszatérítések, a negatív értékelések és a hírnév soha nem jelennek meg a kampány irányítópultján."
            },
            {
                q: "Mit eredményez egy minden látogatáskor újrainduló visszaszámláló?",
                options: [
                    "Hátrány nélküli sürgetést",
                    "A közönség egy része észreveszi, nem vásárol többé, és el is mondja",
                    "A webáruház konverziós arányának tartós, hónapokon át érezhető javulását"
                ],
                a: 1,
                explication: "Egy valós határidő ugyanazt a hatást éri el, a kockázat nélkül."
            },
            {
                q: "Minden kommunikáció használ meggyőzési eszközöket?",
                options: [
                    "Nem, csak a fizetett hirdetések használnak ilyet",
                    "Csak az online értékesítésben, máshol nem",
                    "Igen: a kérdés az, hol húzódik a határ"
                ],
                a: 2,
                explication: "Ezeket a mechanizmusokat évtizedek óta dokumentálják, és valóban működnek."
            }
        ],

        // ---------------------------------------------------------------
        "cadre-juridique": [
            // 1. sorozat
            {
                q: "Mi az alapelv egy magánszemély e-mailes megkeresésénél?",
                options: [
                    "Az előzetes, önkéntes és konkrét hozzájárulás",
                    "A címzett előzetes tájékoztatása, ami elegendő",
                    "Nincs különösebb szabály"
                ],
                a: 0,
                explication: "Kivétel létezik a meglévő ügyfelekre, hasonló termékeknél, ha az adatgyűjtéskor tiltakozhattak."
            },
            {
                q: "Mit kell tartalmaznia minden megkereső üzenetnek?",
                options: [
                    "Egy kereskedelmi ajánlatot",
                    "A teljes jogi közleményt",
                    "A feladó kilétét, egy nem félrevezető tárgysort és egy kattintásos leiratkozást"
                ],
                a: 2,
                explication: "A leiratkozásnak ráadásul gyorsan érvényesülnie kell."
            },
            {
                q: "Melyik dokumentumot kérik elsőként egy ellenőrzéskor?",
                options: [
                    "Az ügyfelek teljes, naprakész listáját",
                    "A vállalkozás bejegyzett létesítő okiratát",
                    "Az adatkezelési nyilvántartást"
                ],
                a: 2,
                explication: "Leírja, mit gyűjtesz, miért és mennyi ideig."
            },
            // 2. sorozat
            {
                q: "Ki a felelős egy érvényes hozzájárulás nélkül megvásárolt listáért?",
                options: [
                    "A címlista eladója, aki az adatokat gyűjtötte",
                    "Az, aki az adatokat felhasználja",
                    "Mindkettő, szigorúan egyenlő arányban"
                ],
                a: 1,
                explication: "Panasz esetén neked kell bizonyítanod a hozzájárulást."
            },
            {
                q: "Mit jelent egy homályos, alá nem támasztott környezetvédelmi állítás?",
                options: [
                    "Egyszerű, következmény nélküli marketingérvet",
                    "Megtévesztő kereskedelmi gyakorlatot",
                    "Az ügyfél tájékoztatására vonatkozó kötelezettséget"
                ],
                a: 1,
                explication: "A zöld állításokat különösen figyelik."
            },
            {
                q: "Mit kell tenni egy márka által fizetett bejegyzéssel?",
                options: [
                    "Ilyenként megjelölni",
                    "Diszkréten kezelni, hogy ne rontsa a hitelességet",
                    "Feltüntetni a pontosan kapott összeget"
                ],
                a: 0,
                explication: "A kötelezettség a veled dolgozó tartalomgyártóra is vonatkozik."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Miről szól ez a szint?",
            options: [
                "A legújabb technikákról",
                "A vakfoltokról: amit az eszközök rosszul tulajdonítanak, és amit a jog szabályoz",
                "A költségkeretek optimalizálásáról"
            ],
            a: 1,
            explication: "Arról, amit a csapatok elhanyagolnak, mert kevésbé látszik, és a szabályokról, amelyek akkor is érvényesek, ha nem ismerjük őket."
        },
        {
            q: "Mi a közös az attribúcióban és a megtartásban?",
            options: [
                "Mindkettő a jogi osztály dolga, és senki másé a vállalkozásban",
                "Mindkettőt rosszul szolgálják ki a kampány-irányítópultok",
                "Mindkettőt naponta mérik"
            ],
            a: 1,
            explication: "Az egyiket a modell torzítja, a másik egyszerűen nem is szerepel benne."
        },
        {
            q: "Melyik kérdés foglalja össze egy kampány etikai próbáját?",
            options: [
                "Mit válaszolnék, ha egy ügyfél pontosan megtudná, hogyan működik?",
                "Nyereséges?",
                "Megfelel az ágazat szokásainak?"
            ],
            a: 0,
            explication: "Ez a próba a nem szándékos manipulációkat is kiszűri, ahol senki sem akart megtéveszteni."
        },
        {
            q: "Egy kampány utolsó kattintásban kiváló eredményeket mutat. Mit ellenőrizz, mielőtt átcsoportosítod a költségkeretet?",
            options: [
                "A kattintásonkénti költséget",
                "Mi lesz ezekkel az eredményekkel, ha csökkented a felfedezés csatornáját",
                "A szezonalitást"
            ],
            a: 1,
            explication: "Az utolsó kattintás arat, nem feltétlenül győz meg."
        },
        {
            q: "Miért szerepel a jogi rész egy marketing útmutatóban?",
            options: [
                "Mert a vezetőség által előírt kötelező megkötés",
                "Mert megnyugtatja az ügyfeleket",
                "Mert a szankciók a vállalkozást sújtják, nem a végrehajtó szolgáltatót"
            ],
            a: 2,
            explication: "A szabályok akkor is érvényesek, ha nem ismerjük őket."
        },
        {
            q: "Mi a közös egy hamis visszaszámlálóban és egy megvásárolt listában?",
            options: [
                "Mindkettő hosszú távon hatékony",
                "Mindkettő azonnali nyereséget és sokkal nagyobb, késleltetett költséget hoz",
                "Mindkettő következmény nélküli"
            ],
            a: 1,
            explication: "És mindkét esetben az irányítópultok soha nem tulajdonítják a költséget az okának."
        }
    ]
};
