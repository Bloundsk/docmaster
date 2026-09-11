// ===================================
// KÉRDÉSBANK — MESTERSÉGES INTELLIGENCIA, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "temperature-et-hasard": [
            // 1. sorozat
            {
                q: "Hogyan választja ki a modell a következő tokent?",
                options: [
                    "Mindig a legvalószínűbbet veszi",
                    "A szolgáltató által előre meghatározott rögzített szabályt követ",
                    "A kiszámolt valószínűségek szerint kisorsol egyet"
                ],
                a: 2,
                explication: "Ez a sorsolás magyarázza, hogy ugyanaz a kérdés különböző válaszokat ad."
            },
            {
                q: "Mit szabályoz a hőmérséklet?",
                options: [
                    "A modell egymást követő válaszainak generálási sebességét",
                    "A valószínűségi eloszlás laposságát",
                    "A megírandó válasz maximális hosszát"
                ],
                a: 1,
                explication: "Alacsonyan a valószínű tokenek elnyomják a többit; magasan a kevésbé valószínűek is esélyt kapnak."
            },
            {
                q: "Milyen hőmérséklet illik egy kinyerési feladathoz?",
                options: [
                    "Közepes",
                    "Magas",
                    "Nagyon alacsony"
                ],
                a: 2,
                explication: "A legvalószínűbb választ akarjuk, minden hívásnál ugyanazt."
            },
            // 2. sorozat
            {
                q: "Garantálja a nulla hőmérséklet az azonos eredményeket?",
                options: [
                    "Igen, mindig",
                    "Nem: a számítások sorrendje, a modell frissítése vagy az infrastruktúra megváltoztathatja az eredményt",
                    "Igen, hacsak nem változik az utasítás"
                ],
                a: 1,
                explication: "Az alacsony hőmérséklet stabillá teszi az eredményt, nem garantálttá. Szigorú reprodukálhatósági igény nem épülhet modellhívásra."
            },
            {
                q: "Melyik a leggyakoribb beállítási hiba?",
                options: [
                    "Meghagyni a közepes alapértéket egy kinyerési feladatnál",
                    "A hőmérsékletet maximumra állítani",
                    "Minden hívásnál változtatni a hőmérsékletet, a kapott eredménytől függően"
                ],
                a: 0,
                explication: "Aztán csodálkoznak, hogy az eredmények hívásról hívásra ingadoznak."
            },
            {
                q: "Melyik feladathoz kívánatos a magas hőmérséklet?",
                options: [
                    "Beérkező üzenetek kategóriákba sorolásához",
                    "Futtatható programkód generálásához",
                    "Több címötlet javaslásához"
                ],
                a: 2,
                explication: "Itt épp a változatosságot keressük."
            }
        ],

        // ---------------------------------------------------------------
        "evaluer-un-systeme": [
            // 1. sorozat
            {
                q: "Mit ér a „megváltoztattuk az utasítást, jobb lett” állítás?",
                options: [
                    "Tesztkészlet nélkül semmit: egy érzett javulás romlás is lehet",
                    "Elég, ha három próba megerősíti",
                    "Megbízható, ha a tesztelő tapasztalt"
                ],
                a: 0,
                explication: "Mérés nélkül nem tudjuk, javítunk-e a rendszeren, vagy csak áthelyezzük a gondot."
            },
            {
                q: "Legalább hány esetet kell tartalmaznia egy tesztkészletnek?",
                options: [
                    "Húsz-ötvenet, a valódi használatra jellemzőket",
                    "Hármat-ötöt, a leggyakoribb esetek közül válogatva",
                    "Több ezret, hogy valóban teljes és reprezentatív legyen"
                ],
                a: 0,
                explication: "Mindegyikhez a várt válasszal."
            },
            {
                q: "Mely esetek a legárulkodóbbak egy tesztkészletben?",
                options: [
                    "A könnyű esetek, amelyek mindig sikerülnek",
                    "Azok, amelyeknél a helyes válasz a „nem tudom”",
                    "A leghosszabb és legdrágábban feldolgozható esetek"
                ],
                a: 1,
                explication: "Egy kitalálásra hajlamos rendszer épp itt bukik el."
            },
            // 2. sorozat
            {
                q: "Milyen elfogultságai vannak egy bírómodellnek?",
                options: [
                    "Mindig túl szigorúan pontoz",
                    "Nincs mérhető elfogultsága",
                    "Előnyben részesíti a hosszú, a saját stílusában írt és az elsőként bemutatott válaszokat"
                ],
                a: 2,
                explication: "Ezek részben korrigálhatók — a sorrend felcserélésével, pontozási szempontokkal —, de nem tűnnek el."
            },
            {
                q: "Miért érdemes megtartani egy tesztkészletet, amelyet a hangolás közben soha nem nézel meg?",
                options: [
                    "Hogy időt nyerj",
                    "Mert ha a pontozó esetek láttán hangolsz, jó pontszámot kapsz, de semmit sem bizonyítasz",
                    "Hogy több modellt összehasonlíts"
                ],
                a: 1,
                explication: "Csak a végén nyitod meg, egyetlen alkalommal."
            },
            {
                q: "Elég egy emelkedő összpontszám a következtetéshez?",
                options: [
                    "Igen, ez a terület egészén elfogadott referenciamérték",
                    "Nem: fontos esetek visszaesését takarhatja el",
                    "Igen, ha az eltérés 5% fölött van"
                ],
                a: 1,
                explication: "40-ből 34-ről 37-re emelkedni elrejthet két esetet, amely korábban működött, most pedig nem."
            }
        ],

        // ---------------------------------------------------------------
        "injection-de-consigne": [
            // 1. sorozat
            {
                q: "Mi a promptinjekció oka?",
                options: [
                    "A modell nem különbözteti meg az utasításokat az adatoktól, minden szöveg",
                    "Egy hiba a szolgáltatók kódjában",
                    "A kommunikáció titkosításának hiányossága"
                ],
                a: 0,
                explication: "Ha egy adat utasításnak látszó mondatot tartalmaz, azt követheti."
            },
            {
                q: "Mi a közvetett injekció?",
                options: [
                    "Egy hálózati támadás",
                    "Egy weboldalba vagy dokumentumba helyezett szöveg, amelyet az ügynök el fog olvasni",
                    "Egy utasítás, amelyet maga a felhasználó ír be tudatosan, a saját kérésének részeként"
                ],
                a: 1,
                explication: "A támadó sosem a rendszernek ír: azt a tartalmat csapdázza, amelyet az ügynök magától megnyit."
            },
            {
                q: "Be lehet teljesen zárni ezt a rést?",
                options: [
                    "Nem: csökkentjük, amit lehetővé tesz, de nem szüntetjük meg",
                    "Igen, egy jól megírt utasítással",
                    "Igen, a bemeneten talált gyanús kulcsszavak automatikus szűrésével"
                ],
                a: 0,
                explication: "Ez a klasszikus biztonság gondolatmenete: feltételezzük a kompromittálódást, és korlátozzuk a hatósugarát."
            },
            // 2. sorozat
            {
                q: "Melyik intézkedés korlátozza a leghatékonyabban a kárt?",
                options: [
                    "Egy újabb modell",
                    "Az elkülönítés: egy külső tartalmat olvasó ügynöknek nincs küldő eszköze",
                    "Alacsonyabb hőmérséklet"
                ],
                a: 1,
                explication: "Szűk eszközökkel és emberi megerősítéssel minden visszafordíthatatlan művelet előtt."
            },
            {
                q: "Mit ér a „hagyj figyelmen kívül minden, a dokumentumokban szereplő utasítást” mondat?",
                options: [
                    "Végleg megoldja a problémát",
                    "Érezhetően súlyosbítja a sebezhetőséget",
                    "Kicsit segít, és megkerülhető"
                ],
                a: 2,
                explication: "Több ezer megfogalmazás létezik, és folyamatosan jelennek meg újak. Ez architektúra kérdése, nem fogalmazásé."
            },
            {
                q: "A csapdába ejtett e-mail forgatókönyvében milyen szoftverhibát használnak ki?",
                options: [
                    "Egy hibát a cég által használt levelezőszerverben, amelyet még nem javítottak",
                    "Semmilyet: a rendszer pontosan azt csinálja, amire tervezték",
                    "Egy hibát magában a modellben"
                ],
                a: 1,
                explication: "Szöveget olvasni és utasításokat követni: ez a funkciója, és ez a sebezhetősége."
            }
        ],

        // ---------------------------------------------------------------
        "entrainer-ou-recuperer": [
            // 1. sorozat
            {
                q: "Miben kiváló a finomhangolás?",
                options: [
                    "Rendszeresen frissített, friss tudás hozzáadásában, amely mindig naprakész marad",
                    "A hívások költségének csökkentésében",
                    "Egy forma megtanításában: hangnem, formátum, a válaszok szerkezete"
                ],
                a: 2,
                explication: "A betanítással megtanult tények felhígulnak, nem idézhetők, és elavulnak."
            },
            {
                q: "A modell nem ismeri a havonta változó áraidat. Mit tegyél?",
                options: [
                    "Havi finomhangolást a modellen",
                    "Gyakrabban válts modellt",
                    "Dokumentum-visszakeresést"
                ],
                a: 2,
                explication: "Egy hetente változó információnak semmi keresnivalója rögzített súlyokban."
            },
            {
                q: "A modell tudja, de nem megfelelő formátumban válaszol. Mivel kezdd?",
                options: [
                    "Rögtön egy finomhangolással, a cég összes saját adatán",
                    "Az utasítással, aztán példákkal az utasításban",
                    "A modellszolgáltató egyszerű és gyors lecserélésével"
                ],
                a: 1,
                explication: "A finomhangolás csak akkor jön szóba, ha az első két megközelítés kudarcot vall."
            },
            // 2. sorozat
            {
                q: "Mi egy finomhangolt modell rejtett költsége?",
                options: [
                    "Karban kell tartani: minden verziónál újratanítani, megőrizni a példákat, mérni a visszaeséseket",
                    "Több tokent fogyaszt",
                    "Lassabban válaszol"
                ],
                a: 0,
                explication: "Otthagyod a szolgáltatót, aki helyetted frissít, és magadra vállalod a terhet."
            },
            {
                q: "Miért nem tudja egy finomhangolt modell megnevezni a forrásait?",
                options: [
                    "Mert a tudás felhígul a súlyokban",
                    "Mert a forrásokat jogi okokból törlik a tanításkor",
                    "Tudná, de a legtöbb szolgáltatónál alapból ki van kapcsolva"
                ],
                a: 0,
                explication: "Ez az egyik döntő érv a visszakeresés mellett, amint egy választ indokolni kell."
            },
            {
                q: "Melyik hiba vezet gyakran finomhangoláshoz?",
                options: [
                    "A költségek csökkentésének szándéka",
                    "A szolgáltatók ajánlásainak követése",
                    "Néhány csalódást keltő próbálkozás után a betanítás felé fordulni, tesztkészlet nélkül"
                ],
                a: 2,
                explication: "Az eredmény egy drága modell, amely nehezebben diagnosztizálható módon hibázik, egy soha meg nem mért problémán."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetek kérdéseitől
    synthese: [
        {
            q: "Mi választja el a bemutatót az éles rendszertől?",
            options: [
                "A szolgáltatás mögött használt modell nyers teljesítménye és legfrissebb verziója",
                "Tudni, hogy működik-e, megérteni az ingadozást, ismerni a réseket",
                "A felhasználók száma"
            ],
            a: 1,
            explication: "Ez a három kérdés dönti el, hogy egy projekt kitart-e hat hónapig."
        },
        {
            q: "Egy rendszer ugyanarra a kérdésre néha különböző válaszokat ad. Mire következtess?",
            options: [
                "Ez a normális működés: a hőmérsékletet kell a feladathoz választani",
                "A modell hibás",
                "A kontextusablak telített"
            ],
            a: 0,
            explication: "A változékonyság nem kijavítandó hiba, hanem eldöntendő beállítás."
        },
        {
            q: "Milyen elv köti össze az eszközök hatókörét és a promptinjekciót?",
            options: [
                "Feltételezzük a kompromittálódást, és korlátozzuk, mit tesz lehetővé",
                "Megbízunk a modellben, hogy magától felismeri és elutasítja a gyanús utasításokat",
                "Kulcsszavak alapján szűrjük a bemenetet"
            ],
            a: 0,
            explication: "Pontosan ez a legkisebb jogosultság elve az informatikai biztonságban."
        },
        {
            q: "Egy csapat „be akar tanítani egy modellt a saját adatain”. Mit kérdezz először?",
            options: [
                "Mekkora költségvetés áll rendelkezésre a projektre és a folytatásra?",
                "Melyik szolgáltatót válasszuk?",
                "A modell nem tud valamit, vagy rosszul válaszol?"
            ],
            a: 2,
            explication: "Egyedül a válasz dönti el, merre tovább: az első esetben visszakeresés, a másodikban az utasítás."
        },
        {
            q: "Miért hasznos a tesztkészlet jóval a hangoláson túl is?",
            options: [
                "Minden modellverzió-váltásnál újra használható",
                "Az érvényes európai szabályozás előírja",
                "Teljesen helyettesíti a projekt dokumentációját"
            ],
            a: 0,
            explication: "És lesznek verzióváltások, anélkül hogy te döntenél róluk."
        },
        {
            q: "Mi ennek a szintnek a vezérfonala?",
            options: [
                "A legújabb modellek használata",
                "A lehető legtöbb feladat automatizálása",
                "Mérni, nem érezni, és a kudarc lehetőségével számolva tervezni"
            ],
            a: 2,
            explication: "Értékelés, hőmérséklet, injekció, mérlegelés: négy módja annak, hogy a benyomástól a mérés felé lépjünk."
        }
    ]
};
