// ===================================
// KÉRDÉSBANK — TÁRGYALÁS ÉS KOMMUNIKÁCIÓ, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "la-solution-de-rechange": [
            // 1. sorozat
            {
                q: "Honnan ered az erő egy tárgyalásban?",
                options: [
                    "Az előkészített érveid minőségéből és számából",
                    "Abból, amit akkor kapsz, ha felállsz",
                    "A magabiztosságodból, amikor megszólalsz"
                ],
                a: 1,
                explication: "Ez magyarázza, miért nincs ugyanakkora ereje két egyformán ügyes embernek."
            },
            {
                q: "Mi a BATNA?",
                options: [
                    "A másik fél által előre rögzített legkisebb elfogadható összeg",
                    "A kapott ajánlatok átlaga",
                    "A legjobb alternatíva, ha nincs megállapodás"
                ],
                a: 2,
                explication: "Ez jelöli ki a kiszállási pontodat: egyetlen ennél rosszabb ajánlatot sem érdemes elfogadni."
            },
            {
                q: "Alternatíva 28 000 EUR, ajánlat 30 000 EUR, a folytatás költsége 500 EUR:",
                options: [
                    "2 000 EUR nyereség — van mozgástered a folytatásra",
                    "Azonnal el kell fogadni",
                    "Az ajánlat jóval rosszabb, mint azonnal felállni az asztaltól"
                ],
                a: 0,
                explication: "28 200 EUR-nál az ajánlat még jobb volna a felállásnál, de a folytatás többe kerülne, mint amennyit hozna."
            },
            // 2. sorozat
            {
                q: "Mikor erősíted meg a pozíciódat?",
                options: [
                    "Közben, határozottsággal",
                    "A tárgyalás előtt, az alternatívád javításával",
                    "A legvégén, egyértelműen megfenyegetve a másikat, hogy megállapodás nélkül távozol"
                ],
                a: 1,
                explication: "Egy második ajánlat beszerzése elmozdítja a kiszállási pontot."
            },
            {
                q: "Mit árul el a másik alternatívája?",
                options: [
                    "Mit gondol rólad valójában",
                    "A pontos költségvetését, fillérre",
                    "Meddig mehet el"
                ],
                a: 2,
                explication: "Egy beszállító, akinek egyetlen ügyfele vagy te, nem úgy tárgyal, mint akinek húsz van."
            },
            {
                q: "Mit ér az „akár máshová is mehetek”, ha nem igaz?",
                options: [
                    "Bevált technika",
                    "Semmilyen hatása nincs",
                    "Egyszer működik, és megfizetsz érte, ha a másik szavadon fog"
                ],
                a: 2,
                explication: "Egy valódi alternatíva, még ha szerény is, többet ér egy öt percig hihető fenyegetésnél."
            }
        ],

        // ---------------------------------------------------------------
        "la-zone-daccord": [
            // 1. sorozat
            {
                q: "Vevői maximum 32 000 EUR, eladói minimum 27 000 EUR: mi a tét?",
                options: [
                    "5 000 EUR felosztása, nem maga a megállapodás",
                    "Maga a megállapodás lehetősége kettejük között",
                    "A két bejelentett ár közötti középpont kiválasztása"
                ],
                a: 0,
                explication: "Minden, ami elhangzik, arra szolgál, hogy ezen a sávon belül mozdítsa el a mutatót."
            },
            {
                q: "Mit tegyél, ha az árban nincs megállapodási zóna?",
                options: [
                    "Erősködni, és még egyszer, nyomatékosan elismételni a már elmondott érveket",
                    "Elhúzni, hogy kifárasszuk a másikat",
                    "Új változót bevonni: határidő, mennyiség, garancia, szolgáltatások"
                ],
                a: 2,
                explication: "Az egyváltozós tárgyalás osztozkodás; amint kettő van, cserék válnak lehetségessé."
            },
            {
                q: "Ki kell mondani a maximális határodat?",
                options: [
                    "Igen, hogy időt nyerj a további beszélgetésben",
                    "Igen, ha a másik fél ezt egyértelműen kéri tőled",
                    "Nem: kimondani annyi, mint felajánlani"
                ],
                a: 2,
                explication: "A határ a döntéshez kell, nem a közléshez."
            },
            // 2. sorozat
            {
                q: "Mit jelent, ha nincs megállapodási zóna?",
                options: [
                    "Jelenleg egyetlen ár sem felel meg mindkettőjüknek",
                    "Az egyikük biztosan hazudik a saját valódi határáról",
                    "A különbséget egyszerűen két egyenlő részre kell osztani"
                ],
                a: 0,
                explication: "Értékes információ: heteket spórol meg."
            },
            {
                q: "Miről szól a tárgyalás, ha van megállapodási zóna?",
                options: [
                    "A zóna felosztásáról",
                    "Arról, hogy létezik-e egyáltalán megállapodás",
                    "A felek jóhiszeműségéről"
                ],
                a: 0,
                explication: "A megállapodás már lehetséges: az a kérdés, hol állnak meg a sávon belül."
            },
            {
                q: "Miért teszi zéró összegűvé a tárgyalást egyetlen változó?",
                options: [
                    "Mert a felek beássák magukat a pozícióikba",
                    "Mert mindig az ár a kemény pont",
                    "Amit az egyik ezen a változón nyer, azt a másik szükségszerűen elveszíti"
                ],
                a: 2,
                explication: "Ezért oldja fel az elakadt helyzeteket egy új változó."
            }
        ],

        // ---------------------------------------------------------------
        "lancrage": [
            // 1. sorozat
            {
                q: "Cél 29 000 EUR, a másiktól várt ajánlat 27 000 EUR: mi legyen az első ajánlat?",
                options: [
                    "29 000 EUR",
                    "31 000 EUR",
                    "35 000 EUR"
                ],
                a: 1,
                explication: "Vagyis 2 000 EUR-val a cél fölött, hogy a középpont oda essen."
            },
            {
                q: "Megalapozott a „soha ne mondj elsőként számot” tanács?",
                options: [
                    "Igen, mindig",
                    "Igen, kivéve szakemberek között",
                    "Nem: aki nyit, irányítja a beszélgetést, ha hihető marad"
                ],
                a: 2,
                explication: "A horgonyzásról szóló kutatások cáfolják."
            },
            {
                q: "Mikor jobb, ha a másik nyit?",
                options: [
                    "Ha nyilvánvalóan erőfölényben vagy",
                    "Ha a kapcsolatnak hosszú távon tartósnak kell lennie",
                    "Ha nem ismered a tárgyalt dolog értékét"
                ],
                a: 2,
                explication: "Információ nélkül nyitni azzal jár, hogy saját magad ellen horgonyzol."
            },
            // 2. sorozat
            {
                q: "Mit eredményez a piactól nagyon távoli első ajánlat?",
                options: [
                    "Inkább hiteltelenné tesz, mint elmozdít",
                    "Már a legelején döntő és tartós előnyt ad neked",
                    "Semmilyen mérhető hatása nincs a megállapodásra"
                ],
                a: 0,
                explication: "A másik arra következtet, hogy nem ismered a témát, vagy nem tárgyalsz jóhiszeműen."
            },
            {
                q: "Mi jellemzi a hatásos horgonyt?",
                options: [
                    "Ambiciózus, és egy mondatban védhető",
                    "A lehető legmagasabb",
                    "Nagyon közel áll a valóban megcélzott összeghez"
                ],
                a: 0,
                explication: "Az indoklás nélküli ambíció visszaüt arra, aki kimondja."
            },
            {
                q: "Eltűnik a horgonyhatás, ha mindenki tudja, hogy a számra lehet alkudni?",
                options: [
                    "Igen, szakemberek között",
                    "Nem: a döntéspszichológia egyik legtöbbször megismételt eredménye",
                    "Igen, ha a számot tájékoztató jellegűként mondják ki"
                ],
                a: 1,
                explication: "A kísérleti elrendezésről előre tájékoztatott szakértőknél is kimérték."
            }
        ],

        // ---------------------------------------------------------------
        "positions-et-interets": [
            // 1. sorozat
            {
                q: "Mi a különbség egy pozíció és egy érdek között?",
                options: [
                    "A pozíció szilárd, az érdek tárgyalható",
                    "A pozíció az, amit kérünk, az érdek az ok, amiért kérjük",
                    "A pozíció írásos, az érdek kimondatlan"
                ],
                a: 1,
                explication: "A pozíciók szemben állnak egymással; az érdekek gyakran nem."
            },
            {
                q: "Mi történik, amíg pozíciókról vitatkoztok?",
                options: [
                    "Mindenki a saját érveit védi",
                    "A megállapodás érezhetően közelebb kerül",
                    "Csak osztozkodás létezik"
                ],
                a: 2,
                explication: "Amint ismerjük az érdekeket, más megoldások is megjelennek."
            },
            {
                q: "A „15% kedvezmény kell” hallatán milyen megoldások jelenhetnek meg?",
                options: [
                    "A fizetés elosztása, részletes árajánlat vagy a terjedelem módosítása",
                    "7,5% felajánlása",
                    "Elutasítani az ajánlatot, és néhány napig várni a másik fél újabb válaszára"
                ],
                a: 0,
                explication: "E három megoldás egyike sem jelenik meg, amíg a százalékról vitatkoztok."
            },
            // 2. sorozat
            {
                q: "Mi az aszimmetrikus csere?",
                options: [
                    "Mindenki azt adja, ami neki kevésbe kerül, és azt kapja, ami neki sokat ér",
                    "Megállapodás, amelyben az egyik többet enged, mint a másik",
                    "Tárgyalás egyenlőtlen erejű felek között"
                ],
                a: 0,
                explication: "Ez hozza a legjobb megállapodásokat, és sosem szerepel a kiinduló beszélgetésben."
            },
            {
                q: "Az „amit az egyik nyer, a másik elveszíti” feltevés:",
                options: [
                    "Mindig igaz",
                    "Egyetlen változónál igaz, több változónál hamis",
                    "Mindig hamis"
                ],
                a: 1,
                explication: "Mégis szinte mindenkinek ez az alapfeltevése."
            },
            {
                q: "Mit kell minden tárgyalás előtt előkészíteni a célodon túl?",
                options: [
                    "Három tartalékérvet",
                    "Ami nekem kevésbe kerül, neki pedig sokat ér",
                    "Azt a pontos pillanatot, amikor hajlandó leszek engedni"
                ],
                a: 1,
                explication: "Egy határidő, egy referencia, egy kizárólagosság, rugalmasság az ütemezésben."
            }
        ],

        // ---------------------------------------------------------------
        "negocier-son-salaire": [
            // 1. sorozat
            {
                q: "Miért számít többször is a felvételkor elért különbség?",
                options: [
                    "Minden százalékos emelés alapja lesz",
                    "Egyszerre fizetik ki, belépési prémiummal",
                    "Az első felülvizsgálatnál úgyis behozzák"
                ],
                a: 0,
                explication: "Egy néhány százalékos emelés a kezdő fizetésre vonatkozik: a különbség vele együtt nő."
            },
            {
                q: "Évi bruttó 2 000 EUR-val többet érsz el, 2%-os éves emeléssel. Mennyit ér a különbség tíz év alatt?",
                options: [
                    "Pontosan 20 000 EUR-t, a különbség tízszeresét",
                    "Kb. 10 000 EUR-t, mert az emelések egyáltalán nem vonatkoznak rá",
                    "Közel 21 900 EUR-t, mert az emelések rá is vonatkoznak"
                ],
                a: 2,
                explication: "Minden emelés a különbségre is vonatkozik: a tizedik évben 2 390 EUR, összesen közel 21 900 EUR."
            },
            {
                q: "Ha nincs más folyamatban lévő ajánlatod, mi az alternatívád?",
                options: [
                    "Nincs ilyen, tehát nincs miről tárgyalni sem",
                    "Amit valóban tenni fogsz, ha nemet mondasz",
                    "A pozícióra adott átlagos piaci ajánlat összege"
                ],
                a: 1,
                explication: "Maradni a munkahelyeden, folytatni a keresést: ez szabja meg, mit utasíthatsz el."
            },
            // 2. sorozat
            {
                q: "Mire alapozd a számot, amelyet kimondasz?",
                options: [
                    "A kiadásaidra: lakbér, hitel, fix költségek",
                    "A jelenlegi fizetésedre, tíz százalékkal megemelve",
                    "A pozíció bérsávjára, külső források alapján"
                ],
                a: 2,
                explication: "Hasonló hirdetések, bérfelmérések, ágazati bérminimumok: egy mondatban védhető szám."
            },
            {
                q: "A jelenlegi fizetésedről kérdeznek. Melyik válasz szolgálja a tárgyalásodat?",
                options: [
                    "Azzal válaszolni, amit a megcélzott pozíció ér",
                    "Megmondani a pontos számot, hogy átláthatónak tűnj",
                    "Kereken megtagadni a válaszot a kérdésre"
                ],
                a: 0,
                explication: "A jelenlegi fizetésed a régi állásodhoz horgonyozná a beszélgetést, nem az újhoz."
            },
            {
                q: "A bérkeret be van fagyasztva. Mi marad tárgyalnivaló?",
                options: [
                    "Semmi: a fix bér volt az egyetlen igazi téma",
                    "A változó bérrész, az otthoni munka, a felülvizsgálat időpontja",
                    "Csak a belépési prémium összege"
                ],
                a: 1,
                explication: "A megállapodási zóna áthelyeződött arra, ami a munkáltatónak kevésbe kerül, neked pedig számít."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "Tudni kell kitartani a pozíciód mellett",
                "A legjobb tárgyaló mindig az, aki a legtovább türelmes tud maradni",
                "Egy tárgyalás nagyrészt kiszámítható, mielőtt elkezdődne"
            ],
            a: 2,
            explication: "Négy fogalom elég, és mindegyik számokra fordítható."
        },
        {
            q: "Mi a közös az alternatívában és a maximális határban?",
            options: [
                "Mindkettőt korán ki kell mondani",
                "Mindkettő a döntéshez kell, nem a közléshez",
                "Mindkettőt az első ajánlat meghallgatása után számolják ki"
            ],
            a: 1,
            explication: "Kimondani őket annyi, mint felajánlani."
        },
        {
            q: "Valaki hat hónapnyi egyeztetés után elfogad egy megállapodást, a befektetett időre hivatkozva. Mit mondasz?",
            options: [
                "Hat hónap indokolja a megállapodást",
                "Az eltöltött idő mindenképpen elveszett; csak az alternatívához való összehasonlítás számít",
                "Határidőt kellett volna szabni"
            ],
            a: 1,
            explication: "Ez az elsüllyedt költség torzítása, amelyet a haladó szint részletez."
        },
        {
            q: "Két fél három hete elakadt az áron. Merre tovább?",
            options: [
                "Megnézni, van-e megállapodási zóna, aztán új változót bevonni",
                "Megfelezni a különbséget",
                "Harmadik felet bevonni"
            ],
            a: 0,
            explication: "Ha nincs zóna, az erősködés soha nem hoz megállapodást pusztán az árban."
        },
        {
            q: "Mihez kell mérni egy megállapodást, hogy megítéljük?",
            options: [
                "Ahhoz, amit az elején reméltél",
                "Az alternatívádhoz",
                "Ahhoz, amit a másik elért"
            ],
            a: 1,
            explication: "Ez az egyetlen összehasonlítás, amely a valóságnak felel meg."
        },
        {
            q: "Mi marad, ha ennek a szintnek csak egyetlen dolgát alkalmazod?",
            options: [
                "Leírni kezdés előtt, mit kapsz, ha a tárgyalás kudarcot vall",
                "Mindig elsőként számot mondani",
                "Soha nem elárulni a költségvetést"
            ],
            a: 0,
            explication: "Ez a sor dönt el minden mást."
        }
    ]
};
