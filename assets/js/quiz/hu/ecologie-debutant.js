// ===================================
// KÉRDÉSBANK — DIGITÁLIS MÉRTÉKLETESSÉG, KEZDŐ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban. Egyetlen kérdés sem épül forrás
// nélküli médiaszámra: ez a terület éveken át terjesztett téveseket.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "limpact-est-dans-la-fabrication": [
            // 1. sorozat
            {
                q: "Egy telefonnál vagy számítógépnél hol van a lábnyom nagy része?",
                options: [
                    "A használat során elfogyasztott áramban",
                    "A gyártásban",
                    "A gyárból történő szállításban"
                ],
                a: 1,
                explication: "A több évnyi használat alatt elfogyasztott áram jóval kevesebbet nyom."
            },
            {
                q: "Miért nyom ennyit a gyártás?",
                options: [
                    "Mert az eszközök nehezek",
                    "A csomagolás miatt",
                    "Kitermelés, tisztatermek, összeszerelés — hosszú és rendkívül energiaigényes lánc"
                ],
                a: 2,
                explication: "Olyan országokban, ahol az áram sokkal szén-dioxid-intenzívebb, mint a francia."
            },
            {
                q: "Egy két és fél évig megtartott telefon évi 29 kg CO₂e. És két évvel tovább megtartva?",
                options: [
                    "Évi 18,3 kg, azaz 37%-kal kevesebb",
                    "Évi 26 kg, alig kevesebb, mint korábban",
                    "Ugyanannyi összesen, csak másként elosztva"
                ],
                a: 0,
                explication: "Anélkül, hogy bármit változtatnál a használatán."
            },
            // 2. sorozat
            {
                q: "Egy működő eszközt 30%-kal kevesebbet fogyasztó modellre cserélni:",
                options: [
                    "Már az első évben megtérül",
                    "Szinte mindig veszteséges: a 30% a kisebbik részre vonatkozik",
                    "A márkától függ"
                ],
                a: 1,
                explication: "Az új eszköz gyártása pedig azonnali és teljes."
            },
            {
                q: "Milyen változó marad, ha az eszközt már megvetted?",
                options: [
                    "Az idő, ameddig szolgálni fog",
                    "A töltés módja",
                    "A rá telepített alkalmazások száma"
                ],
                a: 0,
                explication: "A lényeg már ki van fizetve, amikor bekapcsolod."
            },
            {
                q: "Mi lesz ebben a keretben a használatra vonatkozó tanácsokkal?",
                options: [
                    "A kisebbik részt célozzák",
                    "Ezek a leghatásosabbak mind közül",
                    "Egyszerűen tévesek és félrevezetők"
                ],
                a: 0,
                explication: "Nem tévesek — de lekötik a figyelmet, miközben a döntés, amely számít, máshol születik."
            }
        ],

        // ---------------------------------------------------------------
        "allonger-la-duree-de-vie": [
            // 1. sorozat
            {
                q: "Mi a telefoncsere első oka?",
                options: [
                    "Az elektronikai meghibásodás",
                    "A kevés tárhely",
                    "A törés"
                ],
                a: 2,
                explication: "És a legkevésbé végzetes: egy tok és egy képernyővédő néhány euróba kerül."
            },
            {
                q: "Mit ér egy fiókban „hátha kell még” alapon tartott eszköz?",
                options: [
                    "Kikapcsolva már nincs hatása",
                    "Félig számít",
                    "Ugyanakkora a gyártási lábnyoma, mint egy használt eszköznek"
                ],
                a: 2,
                explication: "Az már el van költve. Eladni vagy elajándékozni egy másik gyártást kerül el."
            },
            {
                q: "Mi határozza meg gyakran az élettartam végét, bármilyen meghibásodás előtt?",
                options: [
                    "A képernyő és a fizikai gombok kopása",
                    "A biztonsági frissítések vége",
                    "A néhány hónapja lejárt garancia"
                ],
                a: 1,
                explication: "Egy javítások nélküli eszközt nehéz megtartani, bármilyen is a fizikai állapota."
            },
            // 2. sorozat
            {
                q: "Az eszköz helyett az akkumulátort cserélni:",
                options: [
                    "Nem éri meg, mert egy új akkumulátor majdnem annyiba kerül, mint egy új eszköz",
                    "Az ár töredékébe kerül, és egy teljes gyártást megtakarít",
                    "Idővel észrevehetően rontja az eszköz általános teljesítményét"
                ],
                a: 1,
                explication: "Ez a legjobb arányú gesztus, és a leggyakrabban mellőzött."
            },
            {
                q: "Mennyi évente egy hat hónap után lecserélt telefon?",
                options: [
                    "125 kg CO₂e, ebből 96% egyedül a gyártás",
                    "29 kg CO₂e, mint a két és fél évenkénti csere esetén",
                    "60 kg CO₂e"
                ],
                a: 0,
                explication: "Ugyanaz az eszköz, ugyanaz a használat, hétszer akkora hatás, mint négy és fél évig megtartva."
            },
            {
                q: "Miért rövidíti le a szoftver a hardver életét?",
                options: [
                    "Koptatja az alkatrészeket",
                    "Az alkalmazások és az oldalak egyre igényesebbek, és kényelmetlenné teszik az eszközt",
                    "Több áramot fogyaszt"
                ],
                a: 1,
                explication: "Ez az ökotervezés témája a haladó szinten."
            }
        ],

        // ---------------------------------------------------------------
        "les-gestes-symboliques": [
            // 1. sorozat
            {
                q: "Mennyit ér valójában egy átlagos e-mail?",
                options: [
                    "A gramm töredékét CO₂e-ben",
                    "Kb. 10 grammot, ahogy gyakran olvasni",
                    "Kb. 50 grammot, a melléklettel együtt"
                ],
                a: 0,
                explication: "A 10 g-os szám egy régi becslésből származott, amelyet több mint tíz évig ellenőrzés nélkül ismételtek."
            },
            {
                q: "Mely gesztusoknak van jelentős hatása?",
                options: [
                    "Tovább megtartani, felújítottat venni, javíttatni",
                    "E-maileket törölni, gyorsítótárat üríteni, leiratkozni a listákról",
                    "Csökkenteni a fényerőt és bezárni a lapokat"
                ],
                a: 0,
                explication: "Mindhárom a hardverre vonatkozik. A többi egyike sem érinti."
            },
            {
                q: "Milyen hatása van a böngésző gyorsítótára ürítésének?",
                options: [
                    "Mérsékelt nyereség",
                    "Idővel jelentős nyereség",
                    "Semmilyen, sőt negatív: újra le kell tölteni, ami már megvolt"
                ],
                a: 2,
                explication: "Ez a legtisztább példája egy gesztusnak, amely azt az érzést kelti, hogy teszünk valamit."
            },
            // 2. sorozat
            {
                q: "Miért terjednek annyira a hatástalan tanácsok?",
                options: [
                    "Ingyenesek, azonnaliak, jó érzést adnak, és egyetlen vásárlást sem kérdőjeleznek meg",
                    "Komoly tanulmányokból származnak",
                    "Csak ezek alkalmazhatók"
                ],
                a: 0,
                explication: "A „tartsd meg a telefonodat két évvel tovább” kevésbé kényelmes továbbadni."
            },
            {
                q: "Mi a hatástalan gesztus valódi problémája?",
                options: [
                    "Pénzbe kerül",
                    "Felemészti a rendelkezésre álló figyelmet és jó szándékot, amelyek végesek",
                    "Nehéz fenntartani"
                ],
                a: 1,
                explication: "Havonta e-maileket törölni és kétévente telefont cserélni rossz csere."
            },
            {
                q: "Milyen kérdést tegyél fel, mielőtt átveszel egy gesztust?",
                options: [
                    "Könnyű fenntartani?",
                    "Hányan csinálják már körülöttem, a barátaim között?",
                    "A hardverre vagy a használatra vonatkozik?"
                ],
                a: 2,
                explication: "Az első számít, a második szinte semmit."
            }
        ],

        // ---------------------------------------------------------------
        "bien-acheter": [
            // 1. sorozat
            {
                q: "Mi a leghatásosabb eszköz egy magánszemély kezében?",
                options: [
                    "Alacsony fogyasztású modellt választani",
                    "Felújítottat venni",
                    "Újrahasznosítani a régi eszközt"
                ],
                a: 1,
                explication: "Szinte egy teljes gyártást megtakarít. Semmilyen használati gesztus nem közelíti meg ezt a nagyságrendet."
            },
            {
                q: "Melyik szempont határozza meg leggyakrabban egy új eszköz élettartamának végét?",
                options: [
                    "Az akkumulátor kapacitása a vásárláskor",
                    "A garantált frissítési évek száma",
                    "A képernyő mérete"
                ],
                a: 1,
                explication: "Ez vásárlási szempont, nem részletkérdés."
            },
            {
                q: "Mi a hasznos sorrend?",
                options: [
                    "Újrahasznosítani, újat venni, javíttatni",
                    "Környezetbarátot venni, aztán gondosan újrahasznosítani az élettartam végén",
                    "Megtartani, javíttatni, felújítottat venni — az új vásárlása az utolsó"
                ],
                a: 2,
                explication: "Az új vásárlása akkor jön, ha az első három kimerült."
            },
            // 2. sorozat
            {
                q: "Mire szolgál a vásárláskor feltüntetett besorolás?",
                options: [
                    "Az eszköz éves áramfogyasztásának jelzésére, kilowattórában kifejezve",
                    "A javíthatóság vagy a tartósság modellek közti összehasonlítására",
                    "Az európai származás garantálására"
                ],
                a: 1,
                explication: "Az alkatrészek elérhetőségének időtartamával együtt ez a leghasznosabb információ."
            },
            {
                q: "Egy a szükségletnél túlméretezett eszköz:",
                options: [
                    "Tovább tart",
                    "Használatonként kevesebbet fogyaszt, mert jobban méretezett",
                    "Gyártása többe kerül, anélkül hogy többet szolgálna"
                ],
                a: 2,
                explication: "A szükséges méretet és teljesítményt válaszd, ne többet."
            },
            {
                q: "Mit kell ellenőrizni minden csereként történő vásárlás előtt?",
                options: [
                    "Hogy a régi nem volt-e javítható",
                    "Az új árát a felújítottéhoz képest",
                    "Hogy kapható-e egy közeli üzletben"
                ],
                a: 0,
                explication: "Legalább kérj árajánlatot, hogy össze tudd hasonlítani."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        {
            q: "Mi ennek a szintnek a központi ténye?",
            options: [
                "Egy végeszköz hatása a gyártásában van, nem a használatában",
                "A digitális technológia főleg áramot fogyaszt",
                "Az adatközpontok a fő felelősök"
            ],
            a: 0,
            explication: "Az útmutató minden további része ebből következik."
        },
        {
            q: "Mi a közös a javíttatásban, a megtartásban és a felújított eszköz vásárlásában?",
            options: [
                "Mindhárom csökkenti az áramfogyasztást",
                "Mindhárom drágább, mint egy új eszköz vásárlása",
                "Mindhárom megspórol egy gyártást"
            ],
            a: 2,
            explication: "Ez választja el őket minden használati gesztustól."
        },
        {
            q: "Valaki havonta törli az e-mailjeit, és kétévente telefont cserél. Mit mondasz?",
            options: [
                "Rossz cserét csinált, anélkül hogy tudná",
                "A mérlege kiegyensúlyozott",
                "Az e-mailek törlése ellensúlyozza a telefoncserét"
            ],
            a: 0,
            explication: "Az erőfeszítés a kisebbik részre megy, miközben a nagyobbik máshol dől el."
        },
        {
            q: "Miért híres téves számokkal kezdődik ez az útmutató?",
            options: [
                "Hogy oldja a téma súlyát",
                "Mert többet ér egy rossz számot félretenni, mint tíz jó gesztust ismerni",
                "Mert jó számok nem léteznek"
            ],
            a: 1,
            explication: "A terület tízszeresen téves becsléseket terjesztett, amelyeket jóhiszeműen átvettek."
        },
        {
            q: "Mi marad, ha ennek a szintnek csak egyetlen dolgát alkalmazod?",
            options: [
                "Rendszeresen törölni a fájlokat és az e-maileket",
                "Energiatakarékos modelleket választani",
                "Tovább megtartani az eszközeidet"
            ],
            a: 2,
            explication: "Minden nyert év többet ér, mint az összes használati gesztus együtt."
        },
        {
            q: "Egy barátod le akarja cserélni négyéves, működő számítógépét egy takarékosabb modellre. Mit mondasz neki?",
            options: [
                "Megéri, ha a fogyasztási különbség meghaladja a 20%-ot",
                "Az ártól függ",
                "Az új gyártása azonnali és teljes lesz; a fogyasztási nyereség a kisebbik részre vonatkozik"
            ],
            a: 2,
            explication: "Egy működő eszköz cseréje szinte mindig veszteséges, és gyakran nagyon."
        }
    ]
};
