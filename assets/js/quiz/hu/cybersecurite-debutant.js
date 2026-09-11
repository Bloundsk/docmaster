// ===================================
// KÉRDÉSBANK — KIBERBIZTONSÁG, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "mots-de-passe-authentification": [
            // 1. sorozat
            {
                q: "Mi a jelszavakkal kapcsolatos legfőbb veszély?",
                options: [
                    "Elégtelen bonyolultságuk a mai eszközökkel szemben",
                    "Túlzott hosszúságuk, ami miatt végül leírjuk őket",
                    "Az újrahasznosításuk egyik oldalról a másikra"
                ],
                a: 2,
                explication: "A szivárgásokból származó listákat automatikusan újrajátsszák több száz más szolgáltatásnál."
            },
            {
                q: "Mi a credential stuffing?",
                options: [
                    "Ellopott belépési adatok automatikus kipróbálása más oldalakon",
                    "Egy jelszótitkosítási technika",
                    "Egy túl hosszú, nem tárolható jelszó"
                ],
                a: 0,
                explication: "Semmilyen kifinomult feltörés: egy egyszerű lista és egy szkript elég."
            },
            {
                q: "Melyik jelszó áll ellen a legjobban?",
                options: ["P@ssw0rd!", "teknos-tuzogep-felho-ecet", "Debrecen1987"],
                a: 1,
                explication: "A hosszúság többet számít, mint a különleges karakterek. A szokásos betűcserék minden támadói szótárban benne vannak."
            },
            // 2. sorozat
            {
                q: "Melyik fiókot védd elsőként kétlépcsős azonosítással?",
                options: [
                    "A fő e-mail-fiókot",
                    "Egy hobbifórum fiókját",
                    "Egy közösen használt streamingfiókot"
                ],
                a: 0,
                explication: "Ezen keresztül történik minden jelszó-visszaállítás: ha elesik, minden követi."
            },
            {
                q: "Melyik kétlépcsős azonosítási módszer a legsebezhetőbb?",
                options: [
                    "Egy fizikai kulcs",
                    "Az SMS",
                    "Egy hitelesítő alkalmazás"
                ],
                a: 1,
                explication: "A SIM-csere révén egy csaló a saját SIM-kártyájára viheti át a számodat."
            },
            {
                q: "Mit eredményez, ha 90 naponta kötelező jelszót cserélni?",
                options: [
                    "Jelentősen erősebb biztonságot",
                    "Jobb megjegyezhetőséget",
                    "Ugyanannak a jelszónak apró változatait, vagyis az ellenkező hatást"
                ],
                a: 2,
                explication: "A biztonsági szervezetek, köztük az amerikai NIST és a francia ANSSI, már nem ajánlják ezt a gyakorlatot."
            }
        ],

        // ---------------------------------------------------------------
        "le-phishing": [
            // 1. sorozat
            {
                q: "Melyik három állandó összetevője van egy adathalász kísérletnek?",
                options: [
                    "Egy tekintély, egy sürgetés és egy azonnali cselekvés",
                    "Egy melléklet, egy hivatkozás és egy kép",
                    "Egy helyesírási hiba, egy gyanús hivatkozás és egy lemásolt logó"
                ],
                a: 0,
                explication: "A sürgetés nem részlet: éppen az ellenőrzést hivatott megakadályozni."
            },
            {
                q: "Miért nem jó már figyelmeztető jel a helyesírási hiba?",
                options: [
                    "Az automatikus szövegíró eszközök eltüntették ezt a jelet",
                    "A csalók ma már profi korrektorokat alkalmaznak minden egyes üzenethez",
                    "Soha nem is volt jel"
                ],
                a: 0,
                explication: "Nézd inkább a domaint, a @ jobb oldalán és az első / előtt."
            },
            {
                q: "A bank.hu.fiok-ellenorzes.net címben mi a valódi domain?",
                options: ["bank.hu", "fiok-ellenorzes.net", "hu.fiok"],
                a: 1,
                explication: "Minden, ami az utolsó, a végződés előtti pont előtt áll, szabadon kitalálható."
            },
            // 2. sorozat
            {
                q: "Mit bizonyít a HTTPS-lakat egy oldalon?",
                options: [
                    "Hogy az oldal tisztességes és ellenőrzött",
                    "Hogy az oldal egy bejegyzett cégé",
                    "Csak azt, hogy a kapcsolat titkosított"
                ],
                a: 2,
                explication: "Bárki öt perc alatt ingyenes tanúsítványt szerez, egy csaló is."
            },
            {
                q: "Egy banki ügyintéző felhív, és megerősítő kódot kér. Mit tegyél?",
                options: [
                    "Megadni, ha már ismeri a bankadataidat és a nevedet is pontosan",
                    "Letenni, és visszahívni a kártyád hátoldalán lévő számot",
                    "Elkérni az azonosítóját, aztán megadni"
                ],
                a: 1,
                explication: "Egy valódi ügyintéző megérti; egy csaló megpróbál lebeszélni róla."
            },
            {
                q: "Miért mutatnak magas kattintási arányt a vállalati tesztkampányok?",
                options: [
                    "Mert a fáradtság és a munkaterhelés többet számít, mint a hozzáértés",
                    "Mert a munkavállalóknak hiányoznak a műszaki ismereteik",
                    "Mert a teszteket meghamisítják"
                ],
                a: 0,
                explication: "Ezért kell rendszeres szokás alkalmi éberség helyett."
            }
        ],

        // ---------------------------------------------------------------
        "les-pare-feux-et-antivirus": [
            // 1. sorozat
            {
                q: "Mi ellen nem véd egy vírusirtó?",
                options: [
                    "Az ismert kártevők ellen",
                    "Az adathalászat és egy ellopott jelszó ellen",
                    "A letöltött fertőzött fájlok ellen"
                ],
                a: 1,
                explication: "Semmit sem lát, amikor önként beírod a jelszavadat egy hamis oldalon."
            },
            {
                q: "Mi a leghatékonyabb védelmi intézkedés?",
                options: [
                    "Telepíteni a frissítéseket",
                    "Fizetős biztonsági csomagot vásárolni",
                    "Minden évben vírusirtót váltani"
                ],
                a: 0,
                explication: "A javítás szinte mindig a támadás előtt létezik: a telepítés késlekedése teremti a sebezhetőséget."
            },
            {
                q: "Windowson elég a Defender személyes használatra?",
                options: [
                    "Nem, mindig fizetős csomag kell",
                    "Nem, csak a régi vírusokat ismeri fel",
                    "Igen: ingyenes, és rendszeresen a független tesztek élmezőnyében szerepel"
                ],
                a: 2,
                explication: "Egy külső csomagért fizetni általában nem hoz mérhető biztonsági nyereséget."
            },
            // 2. sorozat
            {
                q: "Mi az egyetlen igazán megbízható ellenszer egy zsarolóvírus ellen?",
                options: [
                    "Egy naprakész vírusirtó",
                    "A biztonsági mentés",
                    "Egy jól beállított tűzfal"
                ],
                a: 1,
                explication: "Egyetlen vírusirtó sem garantál védelmet a fájljaid titkosítása ellen."
            },
            {
                q: "Mit jelent a 3-2-1 szabály a mentésnél?",
                options: [
                    "3 mentés naponta, 2 hetente, 1 havonta",
                    "3 merevlemez, 2 USB-kulcs, 1 online szolgáltatás",
                    "3 másolat, 2 különböző adathordozó, 1 máshol tárolt vagy leválasztott másolat"
                ],
                a: 2,
                explication: "A kritikus pont az utolsó: egy állandóan csatlakoztatott lemez a többivel együtt titkosítódik."
            },
            {
                q: "Mitől lesz egy mentés igazán érvényes?",
                options: [
                    "A méretétől",
                    "A gyakoriságától, lehetőleg naponta, automatikusan ütemezve",
                    "Attól, hogy legalább egyszer visszaállítottunk belőle"
                ],
                a: 2,
                explication: "Évente egyszer próbálj meg visszaállítani egy véletlenszerű fájlt: egy soha ki nem próbált mentés nem mentés."
            }
        ],

        // ---------------------------------------------------------------
        "le-chiffrement-des-données": [
            // 1. sorozat
            {
                q: "Mit garantál pontosan a HTTPS?",
                options: [
                    "Hogy útközben senki sem olvashatja és nem módosíthatja az adatforgalmat",
                    "Hogy az oldal legitim",
                    "Hogy az adataidat nem adják tovább"
                ],
                a: 0,
                explication: "A lakat az utat védi, nem a célt. Mindig ellenőrizd a domainnevet."
            },
            {
                q: "Mi a különbség az átvitel közbeni és a tárolt állapotú titkosítás között?",
                options: [
                    "Az első sokkal biztonságosabb, a második pedig csak választható",
                    "Ugyanazt jelentik",
                    "Az első útközben véd, a második a lemezen"
                ],
                a: 2,
                explication: "A BitLocker vagy a FileVault olvashatatlanná teszi az ellopott lemezt: laptopon elengedhetetlen."
            },
            {
                q: "Mit jelent a „végpontok közötti” titkosítás?",
                options: [
                    "Az üzenetet kétszer titkosítják",
                    "Csak a feladó és a címzett olvashatja a tartalmat, maga a szolgáltató sem",
                    "Az üzenet olvasás után törlődik"
                ],
                a: 1,
                explication: "Sok hagyományos e-mail-szolgáltatás nem alkalmazza: a tárhelyszolgáltató el tudja olvasni a leveleidet."
            },
            // 2. sorozat
            {
                q: "Mit árulnak el egy titkosított üzenetváltás metaadatai?",
                options: [
                    "Ki kivel beszélt, mikor és mennyi ideig",
                    "Semmit, minden védett",
                    "Az üzenetek részleges tartalmát a szervereken"
                ],
                a: 0,
                explication: "Ezek az információk gyakran ugyanolyan beszédesek, mint maga a tartalom."
            },
            {
                q: "Véd egy VPN az adathalászattól?",
                options: [
                    "Nem: titkosítja az utat, semmi többet",
                    "Igen, letiltja az ismert csaló oldalakat",
                    "Igen, ha fizetős"
                ],
                a: 0,
                explication: "Csak áthelyezi a bizalmat az internetszolgáltatódról a VPN szolgáltatójára, aki a teljes forgalmadat látja."
            },
            {
                q: "Milyen óvintézkedés marad hasznos egy nyilvános wifin?",
                options: [
                    "Soha nem csatlakozni hozzá",
                    "Kikapcsolni a HTTPS-t, hogy még gyorsabb legyen a kapcsolat",
                    "Ellenőrizni a hálózat pontos nevét a helyszínen"
                ],
                a: 2,
                explication: "Érzékeny műveletekhez a telefonról megosztott internetkapcsolat biztonságosabb."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Mire épül a behatolások túlnyomó többsége?",
            options: [
                "Kifinomult műszaki hibákra",
                "Egy újrahasznosított jelszóra, egy jól utánzott e-mailre, egy frissítetlen programra",
                "Államok által végrehajtott célzott támadásokra"
            ],
            a: 1,
            explication: "A jó hír: néhány egyszerű szokás a kockázat nagy részét megszünteti."
        },
        {
            q: "Melyik két intézkedésnek a legjobb az erőfeszítés–védelem aránya?",
            options: [
                "Egy fizetős vírusirtó és egy VPN",
                "Egy jelszókezelő és kétlépcsős azonosítás az e-mail-fiókon",
                "Egy hardveres tűzfal és egy második számítógép"
            ],
            a: 1,
            explication: "Egy estényi beállítás elég a személyes kockázat nagy részének megszüntetéséhez."
        },
        {
            q: "Kérheti tőled a jelszavadat egy legitim szervezet?",
            options: [
                "Nem, semmilyen csatornán, kivétel nélkül",
                "Igen, ha a bank biztonsági osztályáról van szó",
                "Igen, de kizárólag telefonon, írásban soha"
            ],
            a: 0,
            explication: "Ez alól a szabály alól nincs kivétel: sem jelszó, sem megerősítő kód."
        },
        {
            q: "SMS-t kapsz egy elakadt csomagról, hivatkozással. Mit tegyél?",
            options: [
                "Kattintani, hiszen valóban csomagot vársz éppen ezen a héten",
                "Válaszolni az SMS-re, és részleteket kérni",
                "Magad megnyitni a futárszolgálat általad ismert oldalát"
            ],
            a: 2,
            explication: "Az egyetlen reflex: soha ne használd a kapott hivatkozást. Ha az üzenet valódi volt, az információ várni fog rád."
        },
        {
            q: "Mit tegyél elsőként, ha úgy gondolod, hogy egy fiókodat feltörték?",
            options: [
                "Teljes vírusirtó-vizsgálatot futtatni",
                "Törölni az érintett fiókot",
                "Egy tiszta eszközről megváltoztatni a fő e-mail-fiók jelszavát"
            ],
            a: 2,
            explication: "Aztán bekapcsolni a kétlépcsős azonosítást, rendezni a többi fiókot, és feljelentést tenni."
        },
        {
            q: "Melyik mondat írja le a legjobban a jó biztonsági hozzáállást?",
            options: [
                "Sebezhetetlenné válni a megfelelő eszközökkel",
                "Nem lenni többé könnyű célpont",
                "Amennyire lehet, kerülni az internetet"
            ],
            a: 1,
            explication: "Sebezhetetlenség nem létezik; a legtöbb támadás a legkevésbé védett célpontokat veszi célba."
        }
    ]
};
