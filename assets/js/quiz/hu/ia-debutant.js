// ===================================
// KÉRDÉSBANK — MESTERSÉGES INTELLIGENCIA, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "quest-ce-quun-llm": [
            // 1. sorozat
            {
                q: "Mi egy nyelvi modell (LLM) feladata?",
                options: [
                    "A válasz megkeresése egy adatbázisban",
                    "Egy szövegsorozat legvalószínűbb folytatásának megjóslása",
                    "Mérnökök által kézzel írt, részletes szabályokból való következtetés"
                ],
                a: 1,
                explication: "Minden lépésben kiszámolja minden lehetséges token valószínűségét, kiválaszt egyet, és kezdi elölről."
            },
            {
                q: "Mi az a token?",
                options: [
                    "Egy teljes szó, úgy, ahogy a mondatban le van írva",
                    "Egy szódarab, a szöveg felbontásának egysége",
                    "Minden felhasználó saját bejelentkezési azonosítója"
                ],
                a: 1,
                explication: "Egy nagyon hosszú szó sok tokent is jelenthet, az „a” névelő egyetlenegyet."
            },
            {
                q: "Miért talál ki néha irodalmi hivatkozásokat egy LLM?",
                options: [
                    "Mert szándékosan hazudik",
                    "Mert hiányos az adatbázisa",
                    "Mert egy hivatkozás formája nagyon szabályos, a tartalma nem"
                ],
                a: 2,
                explication: "Hihető folytatást ír. A mechanizmusban semmi sem különbözteti meg a „tudom”-ot a „kiegészítem”-től."
            },
            // 2. sorozat
            {
                q: "Mit jelent a „tudás lezárásának dátuma” (knowledge cutoff)?",
                options: [
                    "A modell és a felhasználási licence lejáratának dátumát",
                    "Egy beszélgetés maximális hosszát a modellel",
                    "Azt a dátumot, amikor a tanítóanyaga véget ér"
                ],
                a: 2,
                explication: "Keresőeszköz nélkül minden későbbi esemény ismeretlen számára."
            },
            {
                q: "Mi történik, ha egy beszélgetés túllépi a kontextusablakot?",
                options: [
                    "A beszélgetés eleje feledésbe merül",
                    "A modell megtagadja a választ, és jelzi ezt",
                    "A válasz automatikusan rövidebb lesz"
                ],
                a: 0,
                explication: "A kontextus az, amit a modell egyszerre „lát”. Ezen túl az információ kikerül a látóteréből."
            },
            {
                q: "Miért kaphat ugyanaz a kérdés két különböző választ?",
                options: [
                    "Mert a modell élőben tanul a beszélgetéseidből, és minden üzenet után változik",
                    "Mert minden alkalommal újragenerál, ahelyett hogy egy adatbázist nézne",
                    "Mert változik az internetkapcsolat"
                ],
                a: 1,
                explication: "A tokenek kiválasztásában rejlő véletlen mértékét hőmérsékletnek nevezik."
            }
        ],

        // ---------------------------------------------------------------
        "les-agents-ia": [
            // 1. sorozat
            {
                q: "Mi különbözteti meg az ügynököt egy egyszerű csevegőbottól?",
                options: [
                    "Eszközei vannak, és lépéseket fűz össze egy cél felé",
                    "Gyorsabban válaszol",
                    "Újabb, jobban betanított és gyorsabb nyelvi modellt használ"
                ],
                a: 0,
                explication: "Egy ügynök cselekszik, megfigyeli az eredményt, dönt a folytatásról, és újrakezdi, amíg el nem éri a célját."
            },
            {
                q: "Mi a legfontosabb különbség hiba esetén?",
                options: [
                    "Az ügynök automatikusan bocsánatot kér",
                    "A csevegőbot elolvasandó hibás választ ad, az ügynök már végrehajtotta a műveletet",
                    "Nincs semmi különbség"
                ],
                a: 1,
                explication: "Egy tévedő csevegőbot egy percedbe kerül. Egy ügynök már törölte a fájlt vagy elküldte az üzenetet."
            },
            {
                q: "Mi a promptinjekció?",
                options: [
                    "Egy külső tartalomba csempészett szöveg, amelyet az ügynök manipulálására írtak",
                    "Egy módszer a válaszok gyorsítására",
                    "További tanítóadatok hozzáadása"
                ],
                a: 0,
                explication: "A védekezés: amit egy ügynök olvas, az adat, soha nem parancs. Parancsot csak a felhasználó ad."
            },
            // 2. sorozat
            {
                q: "Mely műveleteknél kell egy jól megtervezett ügynöknek megállnia és megerősítést kérnie?",
                options: [
                    "Mindnél, kivétel nélkül",
                    "A visszafordíthatatlanoknál: törlés, küldés, fizetés, közzététel",
                    "Egyiknél sem, különben elveszíti minden gyakorlati hasznát a hétköznapokban"
                ],
                a: 1,
                explication: "Egy jól megtervezett ügynök visszaadja neked az irányítást abban, ami nem hozható helyre."
            },
            {
                q: "Mire ad engedélyt az ügynöknek a „rendezd a postafiókomat” kérés?",
                options: [
                    "Az üzenetek elolvasására, de a bennük lévő utasítások végrehajtására nem",
                    "Arra, hogy végrehajtsa, amit a talált üzenetek kérnek",
                    "Minden egy évnél régebbi üzenet törlésére"
                ],
                a: 0,
                explication: "Egy rendezési kérés az olvasásra ad engedélyt, nem az olvasott tartalom végrehajtására."
            },
            {
                q: "A „keresd meg a három legtöbbet idézett cikket, és foglald össze őket” kérésnél mi az ügynök előnye?",
                options: [
                    "Emlékezetből válaszol, ezért gyorsabb",
                    "Ténylegesen megnyitja a dokumentumokat, és egy nem működő linket is megkerül",
                    "Hihetőbb hivatkozásokat talál ki"
                ],
                a: 1,
                explication: "Így minden állítás egy ténylegesen megnyitott dokumentumra épül, nem pontatlan emlékezetre."
            }
        ],

        // ---------------------------------------------------------------
        "le-prompt-engineering": [
            // 1. sorozat
            {
                q: "Mit csinál a modell azzal, amit nem pontosítottál?",
                options: [
                    "A statisztikailag leggyakoribbal tölti ki",
                    "Visszakérdez arra, ami hiányzik neki, mielőtt folytatná",
                    "Üresen hagyja"
                ],
                a: 0,
                explication: "Vagyis általánossággal. Ezért fontos megadni a formátumot és a kontextust."
            },
            {
                q: "Mi a jó utasítás négy eleme?",
                options: [
                    "Udvariasság, hosszúság, sürgősség, jutalom",
                    "Alany, állítmány, tárgy, helyes írásjelek",
                    "Kontextus, feladat, formátum, megkötések"
                ],
                a: 2,
                explication: "A feladat legyen pontos ige: „foglald össze”, „hasonlítsd össze” — ne „mesélj arról, hogy”."
            },
            {
                q: "Melyik technika a leghatékonyabb a megfelelő formátum eléréséhez?",
                options: [
                    "A várt formátum aprólékos leírása",
                    "Az utasítás kétszeri megismétlése egymás után, a nyomaték kedvéért",
                    "Példát adni a várt eredményre"
                ],
                a: 2,
                explication: "Egy modell sokkal jobban utánoz, mint ahogy egy leírást követ."
            },
            // 2. sorozat
            {
                q: "Miért érdemes az érvelést a következtetés előtt kérni?",
                options: [
                    "Hogy tovább lekössük a modellt",
                    "Mert minden lépés támaszt ad a következőnek, és ez javítja a megbízhatóságot",
                    "Mert kellemesebb olvasni"
                ],
                a: 1,
                explication: "A hatás több lépésből álló feladatoknál erős, egy egyszerű kérdésnél sokkal kevésbé."
            },
            {
                q: "Milyen hatása van, ha fenyegeted vagy dicséred a modellt?",
                options: [
                    "Nincs tartós hatása: az utasítás pontossága számít",
                    "Sokkal jobban és sokkal udvariasabban válaszol, mint korábban",
                    "Megtagadja a választ"
                ],
                a: 0,
                explication: "A többi babona. A pontosság, a példák és a várt formátum jelentenek különbséget."
            },
            {
                q: "Mit eredményez a „ha nem vagy biztos benne, mondd meg” mondat hozzáadása?",
                options: [
                    "A kitalált állítások érezhető csökkenését",
                    "Rendszeresen kitérő és óvatoskodó válaszokat",
                    "Minden nehéz kérdés megválaszolásának megtagadását"
                ],
                a: 0,
                explication: "A tudatlanság kifejezett megengedése az egyik legkifizetődőbb utasítás."
            }
        ],

        // ---------------------------------------------------------------
        "les-limites-et-risques-de-lia": [
            // 1. sorozat
            {
                q: "Mely területeken a legvalószínűbbek a hallucinációk?",
                options: [
                    "Az általános magyarázatokban és a hétköznapi, széles körben ismert fogalmak meghatározásában",
                    "A fordításokban",
                    "A pontos számokban, dátumokban, idézetekben és kevéssé ismert hivatkozásokban"
                ],
                a: 2,
                explication: "Mindenütt, ahol a válasz nagyon konkrét, és a tanítóanyag szegényes volt."
            },
            {
                q: "Milyen jelnek kell ellenőrzést kiváltania?",
                options: [
                    "Egy nagyon pontos válasznak egy kevéssé ismert témában",
                    "Egy különösen hosszú, sok részletet felsoroló és magabiztos válasznak",
                    "Egy óvatos, „szerintem” vagy „úgy tűnik” kezdetű válasznak"
                ],
                a: 0,
                explication: "Minél pontosabb egy állítás egy kevéssé dokumentált témában, annál inkább ellenőrizni kell."
            },
            {
                q: "Mit kérdezz meg magadtól, mielőtt beillesztesz egy tartalmat egy nyilvános MI-szolgáltatásba?",
                options: [
                    "Nem túl hosszú a szöveg?",
                    "Érdekes a téma?",
                    "Nyugodt lennék, ha ez a szöveg egy nyilvános dokumentumban jelenne meg?"
                ],
                a: 2,
                explication: "Ez kizárja az egészségügyi adatokat, a bizalmas szerződéseket, a jelszavakat és a hozzáférési kulcsokat."
            },
            // 2. sorozat
            {
                q: "Honnan erednek egy modell elfogultságai?",
                options: [
                    "Egy olyan szándékból, amelyet a tervezői tudatosan programoztak bele a modellbe",
                    "A tanítóadatai szabályszerűségeiből, a sztereotípiákat is beleértve",
                    "Egy számítási hibából"
                ],
                a: 1,
                explication: "Ez komollyá válik, amint egy MI önéletrajzok szűrésébe vagy értékelésbe szól bele."
            },
            {
                q: "Miért kevéssé megbízható egy LLM pontos számolásnál?",
                options: [
                    "Mert a matematika ki van zárva a tanításából",
                    "Mert rendszeresen kerekíti az eredményeket",
                    "Mert szöveget jósol, nem számol"
                ],
                a: 2,
                explication: "Kivéve, ha számolóeszköze van. Különben egy táblázatkezelő jobb."
            },
            {
                q: "Miért jelent problémát egy MI írásának jó minősége?",
                options: [
                    "Túl hosszúvá teszi a szövegeket",
                    "Hatástalanítja a szokásos hibajelzőnket: rendesen a kétes tartalom rosszul van megírva",
                    "Megakadályozza a helyesírási hibák észrevételét"
                ],
                a: 1,
                explication: "Ezért a tartalom alapján kell ítélni, a formától függetlenül — és ez nem megy magától."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mi az MI legbiztonságosabb használati módja?",
            options: [
                "Olyan témákban, amelyekhez nem értünk, hogy gyorsan pótoljuk a hiányosságainkat",
                "Bármilyen témában, teljesen megbízva a válaszaiban",
                "Olyan témákban, amelyeket meg tudunk ítélni, hogy észrevegyük a hibákat"
            ],
            a: 2,
            explication: "Egy ismeretlen témában semmi esélyed észrevenni a hibát."
        },
        {
            q: "Egy modell magabiztosan állít valamit. Mire következtethetünk ebből?",
            options: [
                "Hogy az információ valószínűleg helyes, és máshol már ellenőrizték",
                "Semmire: a magabiztossága ugyanaz, akár tudja, akár kiegészíti",
                "Hogy ellenőrizte a forrását"
            ],
            a: 1,
            explication: "Neked kell ellenőrzéssel különbséget tenni a tudás és a kiegészítés között."
        },
        {
            q: "Minél inkább hat egy rendszer a valós világra, melyik kérdés kerül előtérbe?",
            options: [
                "Mennyire jól teljesít az ilyen típusú feladatokon?",
                "Mennyibe kerül havonta a használata?",
                "Mi történik, ha téved?"
            ],
            a: 2,
            explication: "Ez különbözteti meg egy csevegőbot értékelését egy ügynökétől."
        },
        {
            q: "Egy belső feljegyzést kell megíratnod. Melyik kérés adja a legjobb eredményt?",
            options: [
                "Egy kérés, amely megadja a közönséget, a hosszt, a hangnemet és három várt példát",
                "„Írj egy szöveget az informatikai biztonságról”",
                "„Csináld, ahogy tudod, tudod, mi kell”"
            ],
            a: 0,
            explication: "Harminc másodperccel több az utasítás megírására, és három oda-vissza kör megspórolva."
        },
        {
            q: "Egy MI pontos jogszabályi hivatkozást ad, paragrafusszámmal. Mit tegyél?",
            options: [
                "Használd úgy, ahogy van, a pontosság a megbízhatóság záloga",
                "Kérdezd meg tőle, biztos-e benne, a válasza elég lesz",
                "Ellenőrizd a forrásnál: pontosan így néz ki egy hallucináció"
            ],
            a: 2,
            explication: "A kevéssé dokumentált témákban adott hivatkozások, dátumok és pontos számok a legkockázatosabb területek."
        },
        {
            q: "Melyik korlátot nem szüntette meg eddig semmilyen technikai fejlődés?",
            options: [
                "A döntés felelősségét, amely emberi marad",
                "A gördülékeny, jól megfogalmazott szöveg írásának képességét",
                "A nyelvek közötti gépi fordítás lehetőségét"
            ],
            a: 0,
            explication: "Egy modell felsorolhatja egy nehéz döntés érveit; a felelősséget nem ő viseli. Hanem te."
        }
    ]
};
