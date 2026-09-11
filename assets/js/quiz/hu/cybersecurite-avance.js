// ===================================
// KÉRDÉSBANK — KIBERBIZTONSÁG, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "fuites-de-donnees": [
            // 1. sorozat
            {
                q: "Mit nevezünk a belépési adatok újrajátszásának?",
                options: [
                    "Kiszivárgott belépési adatok automatikus kipróbálását más szolgáltatásokon",
                    "Egy jelszó kitalálását nyers erővel",
                    "Egy jelszó szándékos újrahasznosítását"
                ],
                a: 0,
                explication: "A sikerességi arány alacsony, de milliónyi párosra alkalmazva bőven elég. Egyetlen emberi támadó sem vesz részt benne."
            },
            {
                q: "Miért nem véd a jelszó hosszúsága egy szivárgás ellen?",
                options: [
                    "Mert a szivárgások feltörik a titkosítást",
                    "Mert a hosszúságnak soha nincs hatása",
                    "Mert nem kitalálják, hanem ismerik"
                ],
                a: 2,
                explication: "Az erősség a teljes körű keresés ellen véd, nem az őt tároló adatbázis ellopása ellen."
            },
            {
                q: "Milyen nagyságrendben mérhető egy behatolás felfedezésének ideje?",
                options: ["Órákban vagy napokban", "Hónapokban", "Akár évtizedekben"],
                a: 1,
                explication: "Az értesítésig gyakran további hetek telnek el. Mire értesítenek, a belépési adatok már keringenek."
            },
            // 2. sorozat
            {
                q: "Mi az első lépés egy szivárgás után?",
                options: [
                    "Biztonságba helyezni a helyreállító e-mail-fiókot",
                    "Megváltoztatni az érintett szolgáltatás jelszavát, azonnal",
                    "Értesíteni az ismerőseidet és a hozzátartozóidat a veszélyről"
                ],
                a: 0,
                explication: "Amíg egy támadó irányítja a helyreállító e-mail-fiókot, mindent visszavesz, amit épp megváltoztattál."
            },
            {
                q: "Mi éli túl a jelszócserét?",
                options: [
                    "Egy, az e-mail-fiókban beállított automatikus továbbítási szabály",
                    "Az előző jelszó",
                    "Semmi, a csere mindent megszakít"
                ],
                a: 0,
                explication: "Minden beérkező üzenet másolata továbbra is a támadóhoz kerül, a jövőbeli visszaállító hivatkozásokat is beleértve."
            },
            {
                q: "Mit jelent, ha értesítést kapsz egy szivárgásról?",
                options: [
                    "Riasztást: a támadás folyamatban van",
                    "Egyszerű jogi óvintézkedést, valódi következmény nélkül",
                    "Tényállást: az adatok már egy ideje keringenek"
                ],
                a: 2,
                explication: "A behatolás, a felfedezése és az értesítés között általában több hónap telik el."
            }
        ],

        // ---------------------------------------------------------------
        "ingenierie-sociale": [
            // 1. sorozat
            {
                q: "Mi különbözteti meg a célzott támadást a tömeges adathalászattól?",
                options: [
                    "Csak a nagyvállalatokat és vezetőiket célozza",
                    "Nincs meg egyetlen megszokott durva jele sem",
                    "Mindig mellékletet használ"
                ],
                a: 1,
                explication: "Neked írták, valós információk alapján, és olyan cselekvést kér, amelynek a te helyzetedben van értelme."
            },
            {
                q: "Honnan származnak leggyakrabban a felhasznált információk?",
                options: [
                    "Egy korábbi feltörésből",
                    "Nyilvános forrásokból: profilokból, hirdetésekből, szervezeti ábrákból",
                    "Szolgáltatók és adatkereskedők által, jó pénzért eladott névsorokból és listákból"
                ],
                a: 1,
                explication: "Semmit sem törnek fel az üzenet összeállításához. Mindent egyszerűen elolvasnak."
            },
            {
                q: "Mely emelők hatnak egyszerre a klasszikus forgatókönyvben?",
                options: [
                    "A félelem, a jutalom és a kíváncsiság",
                    "A műszaki, a jogi és a pénzügyi nyomás",
                    "Tekintély, sürgetés és titoktartás"
                ],
                a: 2,
                explication: "A titoktartás arra szolgál, hogy megakadályozza azt az egyetlen dolgot, amely meghiúsítaná a támadást: hogy megkérdezz valaki mást."
            },
            // 2. sorozat
            {
                q: "Mi az egyetlen megbízható ellenszer?",
                options: [
                    "Figyelmesebben elolvasni az üzenetet",
                    "Egy másik csatornán ellenőrizni, egy már ismert számon",
                    "Az alapbeállításnál sokkal szigorúbb spamszűrőt telepíteni"
                ],
                a: 1,
                explication: "Egy jól megírt üzenet nem különböztethető meg egy valóditól. Éppen az tesz sebezhetővé, ha azt hisszük, felismerjük a csalást."
            },
            {
                q: "Mit mutatnak a vizsgálatok az ilyen támadásokra kiképzett emberekről?",
                options: [
                    "Soha többé nem dőlnek be az ilyen támadásoknak",
                    "A képzésnek nincs mérhető hatása a kattintási arányra",
                    "Ők is bedőlnek, csak ritkábban"
                ],
                a: 2,
                explication: "A fáradtság, a munkaterhelés és a helyzet elvégzi a többit. Ezért hasznos egy leírt szabály."
            },
            {
                q: "Miért véd jobban egy leírt szabály, mint az éberség?",
                options: [
                    "Gyorsabban alkalmazható, mint az esetenkénti mérlegelés",
                    "Azokon a napokon is hat, amikor lankad a figyelem",
                    "A legtöbb vállalatnál törvény írja elő, kötelező jelleggel"
                ],
                a: 1,
                explication: "A „nincs átutalás telefonos megerősítés nélkül” szabály nem függ az üzenetet kapó ember aznapi állapotától."
            }
        ],

        // ---------------------------------------------------------------
        "chiffrement-de-bout-en-bout": [
            // 1. sorozat
            {
                q: "Mit garantál a végpontok közötti titkosítás?",
                options: [
                    "Hogy senki sem tudja, kivel levelezel",
                    "Hogy csak a levelezőpartnerek olvashatják a tartalmat",
                    "Hogy az üzenetek olvasás után automatikusan és nyomtalanul törlődnek"
                ],
                a: 1,
                explication: "Sem a szolgáltatás, sem egy közvetítő, sem aki a forgalmat lehallgatja, nem olvashatja a tartalmat."
            },
            {
                q: "Mit nevezünk metaadatoknak egy üzenetküldőben?",
                options: [
                    "Ki kinek ír, mikor, milyen gyakran, honnan",
                    "Az üzenetek szövegét, miután a szolgáltatás visszafejtette",
                    "A csatolt fájlokat"
                ],
                a: 0,
                explication: "A legtöbb szolgáltatásnál titkosítatlanul áramlanak, titkosítás ide vagy oda."
            },
            {
                q: "Miért érzékenyek a metaadatok?",
                options: [
                    "A legutóbbi üzenetekből tartalmaznak részleteket",
                    "Lehetővé teszik a tartalom visszafejtését",
                    "Gyakran elegendők egy helyzet rekonstruálásához"
                ],
                a: 2,
                explication: "Ahhoz, hogy tudjuk, valaki ugyanazon a délutánon egy segélyhívó szolgálatot, egy ügyvédet és a bankját kereste meg, egyetlen üzenetet sem kell elolvasni."
            },
            // 2. sorozat
            {
                q: "Mi teheti semmissé a végpontok közötti titkosítás hatását?",
                options: [
                    "Egy túl rövid jelszó",
                    "A beszélgetések titkosítatlan felhőmentése",
                    "A nyilvános wifi használata"
                ],
                a: 1,
                explication: "A szállítás védelme érintetlen marad, és tökéletesen haszontalan: az üzenetek olvashatók annak, aki hozzáfér a tárhelyhez."
            },
            {
                q: "Védi a titkosítás a végeszközöket?",
                options: [
                    "Nem, a szállítást védi; az üzenet olvashatóan jelenik meg a képernyőn",
                    "Igen, az üzenetküldő titkosítja az eszközt",
                    "Igen, amíg az alkalmazás be van zárva"
                ],
                a: 0,
                explication: "Egy kompromittált eszköz a visszafejtés után olvassa az üzeneteket, akárcsak a jogos címzett."
            },
            {
                q: "Mit tehet a levelezőpartnered, bármilyen is a titkosítás?",
                options: [
                    "Képernyőképet készíthet, vagy továbbküldheti a tartalmat",
                    "Semmi különöset, hiszen a titkosítás ezt is megakadályozza",
                    "Visszafejtheti a veled folytatott összes többi beszélgetését"
                ],
                a: 0,
                explication: "A titkosítás az utat védi, nem a másik végpontba vetett bizalmat."
            }
        ],

        // ---------------------------------------------------------------
        "surface-attaque": [
            // 1. sorozat
            {
                q: "Mi a támadási felület?",
                options: [
                    "Az eszközeid száma",
                    "Mindazon pontok összessége, amelyeken valaki bejuthatna",
                    "A tárolt adatok mennyisége"
                ],
                a: 1,
                explication: "Döntés nélkül nő: minden létrehozott fiók, minden engedélyezett alkalmazás, minden kipróbált szolgáltatás növeli."
            },
            {
                q: "Miért különösen kockázatosak az elfelejtett fiókok?",
                options: [
                    "Pénzbe kerülnek",
                    "Régi jelszót őriznek, és nem értesülsz, ha kiszivárognak",
                    "Lelassítják a böngészőt"
                ],
                a: 1,
                explication: "Gyakran olyan időben regisztrálták őket, amikor mindenhol ugyanazt a jelszót használtuk, és kétlépcsős azonosítás nélkül."
            },
            {
                q: "Mi gyakran egy fiók leggyengébb láncszeme?",
                options: [
                    "A jelszó, ha túl rövid",
                    "A megjelenített felhasználónév",
                    "A helyreállítási út"
                ],
                a: 2,
                explication: "Biztonsági kérdések, helyreállító cím, telefonszám: ezek a párhuzamos utak gyakran kevésbé védettek a főbejáratnál."
            },
            // 2. sorozat
            {
                q: "Hogyan kezeld a biztonsági kérdéseket?",
                options: [
                    "Válaszolj őszintén, hogy ne felejtsd el",
                    "Mindig kapcsold ki őket",
                    "Második jelszóként: önkényes válasz, a jelszókezelőben tárolva"
                ],
                a: 2,
                explication: "Anyád leánykori neve vagy a születési helyed nyilvános, vagy egy közeli ismerős könnyen kitalálja."
            },
            {
                q: "Mit ér egy nem használt fiók törlése?",
                options: [
                    "Javítja az otthoni hálózat sebességét",
                    "Egy törölt fiók nem szivárog ki",
                    "Felszabadítja az e-mail-címedet más célra"
                ],
                a: 1,
                explication: "Ez az egyetlen végleges kockázatcsökkentés: az ajtó már nem létezik."
            },
            {
                q: "Mit kell ellenőrizni a külső alkalmazásokkal kapcsolatban?",
                options: [
                    "Melyek őriznek tartós hozzáférést a fő fiókjaidhoz",
                    "Az értékelésüket az alkalmazásboltban",
                    "A lemezen elfoglalt méretüket"
                ],
                a: 0,
                explication: "Sokan még jóval azután is megtartják az engedélyüket, hogy már nem használják őket."
            }
        ]
    },

    // -------------------------------------------------------------------
    synthese: [
        {
            q: "Mi a közös az adatszivárgásokban és a célzott támadásokban?",
            options: [
                "Csak vállalatokat céloznak",
                "Mindegyik egy javítatlan, régóta ismert szoftverhibát használ ki a rendszerben",
                "A felhasználó oldalán egyetlen eszköz sem akadályozza meg őket"
            ],
            a: 2,
            explication: "Az egyik egy harmadik fél biztonságán múlik, a másik egy emberi döntésen. Ez a szint éppen arról szól, amit az eszközök nem fednek le."
        },
        {
            q: "Valakinek egyedi jelszava, kétlépcsős azonosítása és VPN-je van. Mi marad kitett?",
            options: [
                "A metaadatok, a helyreállítási utak és a hihető kérések",
                "Semmi, a védelem teljes",
                "Csak a helyi fájlok"
            ],
            a: 0,
            explication: "A kockázat nem tűnik el, amikor a kézenfekvő védelmek a helyükön vannak: áthelyeződik oda, amit nem lehet kiszűrni."
        },
        {
            q: "Miért győz az eljárás az ítélőképesség felett?",
            options: [
                "Mert a fáradt napokon is működik",
                "Mert nyomás alatt gyorsabban alkalmazható",
                "Mert kötelező"
            ],
            a: 0,
            explication: "Ugyanaz a gondolatmenet, mint az előző szint megoldásainál: ami a napi éberségen múlik, előbb-utóbb enged."
        },
        {
            q: "Mi az, ami ezen a szinten egyáltalán nem rajtad múlik?",
            options: [
                "A jelszavaid megválasztása",
                "A kétlépcsős azonosítás bekapcsolása az összes fontos fiókodon, egyenként",
                "Azoknak a szolgáltatásoknak a biztonsága, amelyekre adatokat bízol"
            ],
            a: 2,
            explication: "Egy szivárgást nem tudsz megakadályozni. Csak a továbbterjedését."
        },
        {
            q: "Melyik lépés csökkenti véglegesen a támadási felületet?",
            options: [
                "A nem használt fiókok törlése",
                "Az összes jelszó egyszerre történő megváltoztatása",
                "Egy további vírusirtó telepítése"
            ],
            a: 0,
            explication: "A többi intézkedés egy létező ajtót véd. Ez eltünteti az ajtót."
        },
        {
            q: "Mit kell leszűrni a végpontok közötti titkosítás korlátaiból?",
            options: [
                "Hogy semmit sem ér",
                "Hogy egy pontos dolgot nagyon jól véd, és semmi mást",
                "Hogy inkább VPN-t kell használni"
            ],
            a: 1,
            explication: "Ha ismerjük egy védelem pontos hatókörét, nem számítunk rá ott, ahol nem hat."
        }
    ]
};
