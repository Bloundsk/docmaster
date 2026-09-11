// ===================================
// KÉRDÉSBANK — KIBERBIZTONSÁG, KÖZÉPHALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "gestionnaire-de-mots-de-passe": [
            // 1. sorozat
            {
                q: "Mi a legfőbb kockázata egy újrahasznosított jelszónak?",
                options: [
                    "Egyetlen szivárgás megnyitja az összes fiókot, amely használja",
                    "Egy kicsit türelmes támadó próbálgatással jóval könnyebben kitalálja",
                    "Hamarabb lejár"
                ],
                a: 0,
                explication: "A szivárgásokból származó listákat automatikusan újrajátsszák több száz más szolgáltatásnál. A jelszó hosszúsága ezen nem változtat: nem kitalálják, hanem ismerik."
            },
            {
                q: "80 fiókból 60% ugyanazt a jelszót használja: hány esik el egy szivárgás után?",
                options: ["Csak 1", "48", "80"],
                a: 1,
                explication: "Szolgáltatásonként egyedi jelszóval ugyanez a szivárgás csak egyet érintene."
            },
            {
                q: "Mit kell megjegyezni egy jelszókezelő használatához?",
                options: [
                    "Egy jelszót a meglátogatott oldalak minden kategóriájához",
                    "Egyetlen jelszót, a széfét",
                    "Semmit: telepítés után minden automatikus"
                ],
                a: 1,
                explication: "Minden oldal egyedi értéket kap, amelyet te magad sem ismersz. Csak egyet jegyzel meg."
            },
            // 2. sorozat
            {
                q: "Mit válaszolj a „minden tojás egy kosárban” ellenvetésre?",
                options: [
                    "Alaptalan: a széf műszakilag feltörhetetlennek számít, bármi történjék",
                    "Jobb mindent papírra írni",
                    "A kockázat egy helyre sűrűsödik, de egy valóban védett pontra"
                ],
                a: 2,
                explication: "Jelszókezelő nélkül a kockázat nem oszlik szét: ugyanaz a kockázat, több tucat olyan szolgáltatás között, amelyeknek sem a biztonságát, sem a szivárgásait nem te irányítod."
            },
            {
                q: "Erősebbé teszi a jelszavakat a jelszókezelő?",
                options: [
                    "Igen, ez a fő szerepe",
                    "Főleg fölöslegessé teszi az újrahasznosításukat",
                    "Nem, semmit sem változtat a fiókok valódi biztonságán"
                ],
                a: 1,
                explication: "Egy hosszú jelszó is ellopott marad, ha az őt tároló szolgáltatásnál szivárgás történik. A jelszókezelő a továbbterjedést szünteti meg."
            },
            {
                q: "Milyen óvintézkedést tegyél, ha beéred a böngészőbe mentett jelszavakkal?",
                options: [
                    "Minden évben böngészőt váltani",
                    "Kétlépcsős azonosítást bekapcsolni a szinkronizálási fiókon",
                    "Kikapcsolni a szinkronizálást"
                ],
                a: 1,
                explication: "A szinkronizálás gyakran egy egyszerű jelszóval védett fiókhoz kötődik, és néha egy megnyitott munkamenet is elég ahhoz, hogy mindent olvasható formában lássunk."
            }
        ],

        // ---------------------------------------------------------------
        "double-authentification": [
            // 1. sorozat
            {
                q: "Mit ellenőriz egy második azonosítási tényező?",
                options: [
                    "Valamit, amit már fejből is tudunk",
                    "A választott jelszó valódi erősségét",
                    "Valamit, ami a birtokunkban van"
                ],
                a: 2,
                explication: "A jelszó olyasmi, amit tudunk, tehát ellopható vagy kiolvasható egy szivárgásból. A második tényező egy tárgyat ad hozzá, amely egy távoli támadónak nincs meg."
            },
            {
                q: "Melyik második tényező a legsérülékenyebb?",
                options: [
                    "A hitelesítő alkalmazás",
                    "Az SMS",
                    "A fizikai kulcs"
                ],
                a: 1,
                explication: "A SIM-kártya eltérítésével valaki más kaphatja meg a kódokat. Az SMS mégis messze jobb, mint ha nincs második tényező."
            },
            {
                q: "Melyik fiókot védd elsőként?",
                options: [
                    "A fő e-mail-fiókot",
                    "Először a közösségimédia-fiókokat",
                    "A családi streamingfiókot"
                ],
                a: 0,
                explication: "Ez kapja az összes többi visszaállító hivatkozását. Aki ezt irányítja, az egészet irányítja."
            },
            // 2. sorozat
            {
                q: "Miért áll ellen egy fizikai kulcs az adathalászatnak?",
                options: [
                    "Titkosítja a jelszót",
                    "Másodpercenként új kódot generál",
                    "Ellenőrzi az oldal címét, és nem válaszol egy utánzónak"
                ],
                a: 2,
                explication: "Ez az egyetlen második tényező, amely véd egy, az eredetit tökéletesen utánzó oldal ellen."
            },
            {
                q: "Hol tartsd a helyreállító kódjaidat?",
                options: [
                    "Azon a telefonon, amelyen a hitelesítő alkalmazás fut",
                    "Egy magadnak küldött e-mailben",
                    "Máshol: kinyomtatva, vagy a jelszókezelőben"
                ],
                a: 2,
                explication: "Ha az érintett eszközön hagyod őket, a fiók elérhetetlenné válik azon a napon, amikor a telefon elvész, ellopják vagy lecserélik."
            },
            {
                q: "Utazik a hálózaton egy alkalmazás által generált kód?",
                options: [
                    "Nem, az eszközön számolódik ki",
                    "Igen, az érintett szolgáltatás szerverén át",
                    "Igen, végpontok között titkosított SMS-ben"
                ],
                a: 0,
                explication: "Nincs tehát mit elfogni, ez magyarázza, miért jobb az SMS-nél."
            }
        ],

        // ---------------------------------------------------------------
        "sauvegarde-et-rancongiciel": [
            // 1. sorozat
            {
                q: "Mit mond a 3-2-1 szabály?",
                options: [
                    "3 másolat, 2 különböző adathordozó, 1 az otthonon kívül",
                    "3 mentés naponta, 2 hetente, 1 havonta",
                    "3 jelszó, 2 eszköz, 1 vírusirtó"
                ],
                a: 0,
                explication: "Minden szint más kockázatot fed le: meghibásodás, gyártási hiba, a helyszínt érő kár."
            },
            {
                q: "Miért nem számít mentésnek egy állandóan csatlakoztatott külső lemez?",
                options: [
                    "Túl gyorsan elhasználódik",
                    "Egy zsarolóvírus mindent titkosít, amit a munkamenet írni tud",
                    "Nincs elég kapacitása ahhoz, hogy több korábbi változatot is megőrizzen"
                ],
                a: 1,
                explication: "A csatlakoztatott lemez, a szinkronizált mappa, a hálózati meghajtó: mindegyik sorra kerül, gyakran néhány perc alatt."
            },
            {
                q: "Mi az egyetlen válasz, amely biztosan működik egy zsarolóvírus ellen?",
                options: [
                    "Egy mentés, amelyet nem tudott elérni",
                    "Egy jó vírusirtó, hetente gondosan frissítve",
                    "Kifizetni a követelt váltságdíjat, végső esetben"
                ],
                a: 0,
                explication: "A vírusirtó csak egy akadály a sok közül. A fizetés semmit sem garantál, sem a kulcsot, sem azt, hogy nem másolták le az adatokat."
            },
            // 2. sorozat
            {
                q: "Mit fed le kifejezetten az „otthonon kívüli” másolat?",
                options: [
                    "A kezelési hibákat és a törléseket",
                    "A lemezhibákat",
                    "A tüzet, a csőtörést, a betörést"
                ],
                a: 2,
                explication: "Ami egy helyen van, együtt vész el. Ez az egyetlen kockázat, amelyet a helyi másolatok szaporítása nem fed le."
            },
            {
                q: "Mit ér egy soha vissza nem állított mentés?",
                options: [
                    "Elégséges, biztos garanciát",
                    "Puszta feltételezést",
                    "A jó gazdálkodás bizonyítékát"
                ],
                a: 1,
                explication: "Egy rendszer, amely három éve „sikeres mentést” jelez, lehet üres vagy olvashatatlan. Ez csak a legrosszabb pillanatban derül ki."
            },
            {
                q: "Milyen gyakran próbálj ki egy visszaállítást?",
                options: [
                    "Nagyjából negyedévente egyszer",
                    "Soha, ha a program sikert jelez",
                    "Csak egy valódi incidens után, utólag"
                ],
                a: 0,
                explication: "Egy véletlenszerű fájl visszaállítása elég annak ellenőrzéséhez, hogy a teljes lánc működik."
            }
        ],

        // ---------------------------------------------------------------
        "reseau-et-vpn": [
            // 1. sorozat
            {
                q: "Mit csinál valójában egy VPN?",
                options: [
                    "A szerveréig titkosítja a forgalmat, és onnan lép ki",
                    "Elemzi a forgalmat, hogy kiszűrje a fenyegetéseket",
                    "Helyettesíti a HTTPS-titkosítást"
                ],
                a: 0,
                explication: "Két következmény: a helyi hálózat már nem látja a meglátogatott oldalakat, az oldalak pedig a szerver címét látják a tiéd helyett."
            },
            {
                q: "Véd egy VPN az adathalászattól?",
                options: [
                    "Igen, automatikusan letiltja az ismert csaló oldalakat",
                    "Igen, ha fizetős",
                    "Nem, továbbítja a forgalmat, de nem vizsgálja"
                ],
                a: 2,
                explication: "Egy adathalász oldal adathalász oldal marad, egy kártékony fájl kártékony marad."
            },
            {
                q: "Névtelenné tesz egy VPN egy olyan szolgáltatáson, ahol be vagy jelentkezve?",
                options: [
                    "Igen, az IP-cím el van rejtve",
                    "Igen, ha előtte törlöd a böngésző összes sütijét",
                    "Nem, a bejelentkezett fiók magától azonosít"
                ],
                a: 2,
                explication: "Bejelentkezéskor te magad azonosítottad magad. A VPN ezen nem változtat."
            },
            // 2. sorozat
            {
                q: "Mi a VPN fő hatása a bizalomra?",
                options: [
                    "Áthelyezi az internetszolgáltatóról a VPN-szolgáltatóra",
                    "Megszünteti",
                    "Mindkét oldalon megerősíti"
                ],
                a: 0,
                explication: "A kérdés az lesz: ez a szolgáltató több bizalmat érdemel-e, mint az előző?"
            },
            {
                q: "Meddig titkosít a HTTPS egy VPN-hez képest?",
                options: [
                    "Csak a VPN-szerverig",
                    "A kettő pontosan ugyanazt a szakaszt védi",
                    "A meglátogatott oldalig, míg a VPN a saját szerverénél megáll"
                ],
                a: 2,
                explication: "Két kiegészítő védelem, amelyek nem ugyanazt az útszakaszt fedik le."
            },
            {
                q: "Milyen különös kockázattal jár egy reklámból finanszírozott ingyenes VPN?",
                options: [
                    "Csak lassabb sebességgel",
                    "Semmilyennel, a titkosítás ugyanaz",
                    "Megkapja a teljes forgalmadat, és valahogy másként kell pénzt keresnie"
                ],
                a: 2,
                explication: "Mielőtt telepítesz egy biztonsági eszközt, hasznos reflex utánanézni, ki finanszírozza."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Mi különbözteti meg ezt a szintet az előzőtől?",
            options: [
                "Megoldásokról szól, nem ismétlendő mozdulatokról",
                "Informatikai szakembereknek szól",
                "Csak a titkosítással foglalkozik"
            ],
            a: 0,
            explication: "A napi éberségre épülő biztonság előbb-utóbb enged. A mechanizmusra épülő a rossz napokon is kitart."
        },
        {
            q: "Mi a közös a jelszókezelőben és a leválasztott mentésben?",
            options: [
                "Egyszer kell beállítani őket, és utána nélküled dolgoznak",
                "Drágák",
                "Műszaki ismereteket igényelnek"
            ],
            a: 0,
            explication: "Ez az a feltétel, ami miatt ezen a szinten szerepelnek: egyszeri erőfeszítés, állandó védelem."
        },
        {
            q: "Egy támadó megszerzi az e-mail-jelszavadat. Mi állítja meg?",
            options: [
                "Egy naprakész vírusirtó, egy jól beállított tűzfallal kiegészítve",
                "Kétlépcsős azonosítás alkalmazással vagy kulccsal",
                "Egy bekapcsolt VPN"
            ],
            a: 1,
            explication: "Sem a vírusirtó, sem a VPN nem lép közbe, ha valaki a helyes belépési adatokkal jelentkezik be."
        },
        {
            q: "Melyik védelem hat még akkor is, amikor a támadás már sikerült?",
            options: [
                "A rendszerbe épített tűzfal",
                "A leválasztott mentés",
                "A jelszókezelő, ha jól van beállítva"
            ],
            a: 1,
            explication: "A többi a bejutást akadályozza meg. Ez a helyreállást teszi lehetővé — ez másfajta védelem."
        },
        {
            q: "Miért az e-mail-fiókkal kezdd, és ne a bankkal?",
            options: [
                "Több személyes adatot tartalmaz",
                "Ezzel vissza lehet állítani az összes többi fiókot, a bankot is",
                "Gyakrabban támadják"
            ],
            a: 1,
            explication: "Ha a bankot véded, de az e-mail-fiók nyitva marad, az olyan, mintha bezárnád az ajtót, a kulcsot pedig a szomszéd ajtóban hagynád."
        },
        {
            q: "Mi a kockázata egy rosszul értett biztonsági eszköznek?",
            options: [
                "Lelassítja az eszközt",
                "Ott lankasztja az éberséget, ahol igazán számít",
                "Ütközik a gépen már futó vírusirtóval, és lelassítja azt"
            ],
            a: 1,
            explication: "Ha azt hisszük, a VPN védi a böngészőnket, könnyebben kattintunk hivatkozásokra, és gondolkodás nélkül nyitunk meg fájlokat."
        }
    ]
};
