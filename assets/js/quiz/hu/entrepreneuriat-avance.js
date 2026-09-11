// ===================================
// KÉRDÉSBANK — VÁLLALKOZÁS, HALADÓ SZINT
// ===================================
// Fejezetenként 6 kérdés: 3 látszik, a másik 3 két hét múlva veszi át a helyét.
// Az összefoglaló kérdések eltérnek a fejezetekéitől.
//
// A kulcsok a francia oldal horgonyai, és a helyes válasz ugyanazon a helyen
// áll, mint a francia és az angol bankban.

window.QUIZ = {
    sections: {

        // ---------------------------------------------------------------
        "unit-economics": [
            // 1. sorozat
            {
                q: "Mi alapján számoljuk egy ügyfél élettartam-értékét?",
                options: [
                    "Az általa termelt árbevétel alapján",
                    "Az általa hozott fedezet alapján",
                    "A havi előfizetés ára alapján, adók nélkül"
                ],
                a: 1,
                explication: "Az árbevételből számolva képzelgés, és túlzott ügyfélszerzési költéshez vezet."
            },
            {
                q: "Havi fedezet 38 EUR, élettartam 14 hónap, ügyfélszerzési költség 145 EUR: mennyi az arány?",
                options: [
                    "1,4",
                    "3,7",
                    "14"
                ],
                a: 1,
                explication: "532 EUR ügyfélérték 145 EUR ráfordításra. A 3-as arányt általában egészségesnek tartják."
            },
            {
                q: "Mit jelent, ha az ügyfélérték és az ügyfélszerzési költség aránya 1 alatt van?",
                options: [
                    "Hogy a növekedés túl lassú ahhoz, hogy megtérüljön az ügyfélszerzés",
                    "Hogy túl magas az ár",
                    "Hogy fizetünk azért, hogy minden ügyfélen pénzt veszítsünk"
                ],
                a: 2,
                explication: "Ilyenkor minden új ügyfél rontja a helyzetet."
            },
            // 2. sorozat
            {
                q: "Mit mutat a megtérülési idő?",
                options: [
                    "Mennyi idő alatt téríti meg az ügyfél a megszerzése költségét",
                    "Egy előfizetés átlagos hosszát, az összes ügyfelet együtt nézve",
                    "Mennyi idő van még hátra, amíg az egész vállalkozás nyereséges lesz"
                ],
                a: 0,
                explication: "Közvetlenül meghatározza a pénzigényt: minél hosszabb, annál több pénzt kell megelőlegezni."
            },
            {
                q: "Ha az élettartamot 14-ről 20 hónapra növeled, az ügyfélérték ennyivel nő:",
                options: [
                    "Kb. 10%-kal",
                    "Kb. 43%-kal",
                    "Kb. 100%-kal"
                ],
                a: 1,
                explication: "Egyetlen euró további ügyfélszerzési költség nélkül. Semmilyen hirdetésoptimalizálás nem hoz ilyen hatást."
            },
            {
                q: "Mit eredményez a növekedés negatív egységgazdaságtan mellett?",
                options: [
                    "Felnagyítja a veszteséget, miközben a siker látszatát kelti",
                    "Előbb-utóbb mindig megjavítja, a nagyobb méret gazdaságossága révén",
                    "Nincs hatása a jövedelmezőségre"
                ],
                a: 0,
                explication: "Az árbevétel nő, a pénz gyorsabban fogy."
            }
        ],

        // ---------------------------------------------------------------
        "lever-des-fonds": [
            // 1. sorozat
            {
                q: "Mit ad el valójában egy alapító egy tőkebevonáskor?",
                options: [
                    "Egyszerűen a vállalkozása részesedéseit",
                    "A technológiája használati jogát",
                    "A gyors növekedés ígéretét"
                ],
                a: 2,
                explication: "A befektető öt-tíz éven belüli kiszállást keres, jelentős szorzóval."
            },
            {
                q: "300 000 EUR bevonása 1 200 000 EUR befektetés előtti értékelés mellett: mekkora részt adsz át?",
                options: [
                    "25%",
                    "30%",
                    "20%"
                ],
                a: 2,
                explication: "300 000 a befektetés utáni, 1 500 000 EUR-s értékeléshez viszonyítva."
            },
            {
                q: "Egy nyereséges, évi 15%-kal növekvő vállalkozás:",
                options: [
                    "Kiváló befektetés egy alapnak, hiszen pontosan ezt a profilt keresi",
                    "Kiváló üzlet az alapítójának, és rossz befektetés egy alapnak",
                    "Klasszikus tőkebevonási eset"
                ],
                a: 1,
                explication: "A két logika nem találkozik. Ezért való a tőkebevonás a projektek kisebbségének."
            },
            // 2. sorozat
            {
                q: "Melyik alternatíva finanszíroz hígulás nélkül, és igazolja közben a keresletet?",
                options: [
                    "A klasszikus bankhitel, amelyet az alapító saját hozzájárulása biztosít",
                    "A támogatások",
                    "Az ügyfelek általi finanszírozás: előlegek, előértékesítés, éves előfizetések"
                ],
                a: 2,
                explication: "A pénz azoktól jön, akiknek valódi igényük van, ami önmagában igazolás."
            },
            {
                q: "Mi történik három, egyenként 20%-os hígulású kör után?",
                options: [
                    "Az alapítónál 40% marad",
                    "Az alapító 52% alá kerül, és elveszíti az irányítást a többségi döntések felett",
                    "A hígulás összeadódik 60%-ra, és az alapító ennek ellenére is kézben tartja a döntéseket"
                ],
                a: 1,
                explication: "A hígulás szorzódik, nem összeadódik: 0,8 a harmadikon."
            },
            {
                q: "Miért ne vonj be tőkét, mielőtt működő modelled van?",
                options: [
                    "A pénz felgyorsítja, ami létezik: tovább finanszírozza a veszteséget, ráadásul nyomással",
                    "A befektetők elutasítanák",
                    "Túl alacsony lenne az értékelés"
                ],
                a: 0,
                explication: "Sok kudarc pontosan így néz ki."
            }
        ],

        // ---------------------------------------------------------------
        "recruter-et-deleguer": [
            // 1. sorozat
            {
                q: "Egy munkavállaló nagyjából a bruttó bére hányszorosába kerül?",
                options: [
                    "1,1-szeresébe",
                    "1,45-szörösébe",
                    "2,5-szeresébe"
                ],
                a: 1,
                explication: "Az eszközök, a képzés és az első hónapok vezetési ideje nélkül. A szorzó a francia általános eset; országonként eltér."
            },
            {
                q: "Bruttó 2 600 EUR, 60%-os fedezet: mennyi éves többlet-árbevétel kell?",
                options: [
                    "Kb. 31 000 EUR",
                    "Kb. 75 000 EUR",
                    "Kb. 45 000 EUR"
                ],
                a: 1,
                explication: "45 240 EUR éves költség osztva a 60%-os fedezeti hányaddal."
            },
            {
                q: "Mi a sikeres delegálás feltétele?",
                options: [
                    "Egy meghatározott, dokumentált és mérhető feladat",
                    "Egy hozzáértő és azonnal, teljes munkaidőben elérhető ember",
                    "Egy mindkét fél által aláírt határozatlan idejű munkaszerződés"
                ],
                a: 0,
                explication: "Egy homályos probléma átadása — „foglalkozz a marketinggel” — főleg frusztrációt szül."
            },
            // 2. sorozat
            {
                q: "Melyik próba előzi meg a delegálást?",
                options: [
                    "Van rá keret?",
                    "El tudnád-e magyarázni tíz perc alatt, mit kell tenni, és hogyan néz ki egy jó eredmény?",
                    "Van az illetőnek tapasztalata?"
                ],
                a: 1,
                explication: "Ha nem, a feladat még nem áll készen a delegálásra."
            },
            {
                q: "Ok-e a túlterheltség egy felvételre?",
                options: [
                    "Igen, ez a fő jelzés",
                    "Igen, ha a túlterhelés hat hónapnál tovább tart",
                    "Nem: a megfelelő fedezet nélkül egy munkavállaló a túlterhelésből likviditási gondot csinál"
                ],
                a: 2,
                explication: "Egy felvételről egy azonosított többlet-árbevétel alapján döntünk."
            },
            {
                q: "Mely foglalkoztatási formák visszafordíthatók?",
                options: [
                    "A határozatlan idejű munkaszerződés, amely bármikor felbontható",
                    "Egyik sem: minden felvétel tartósan köti a vállalkozást",
                    "Az eseti megbízás, a gyakornok, a részmunkaidő"
                ],
                a: 2,
                explication: "Érdemes rájuk gondolni, mielőtt olyan kötelezettséget vállalsz, amelyet nem lehet visszacsinálni."
            }
        ],

        // ---------------------------------------------------------------
        "risques-juridiques": [
            // 1. sorozat
            {
                q: "Honnan erednek egy fiatal vállalkozás jogi nehézségei?",
                options: [
                    "Abból, amit nem írtak le, amikor még mindenki jól kijött egymással",
                    "Egy homályos szabályozásból, amelyet az elején senki sem ért",
                    "Hatósági ellenőrzésekből"
                ],
                a: 0,
                explication: "Ezeket a kérdéseket az elején könnyű eldönteni, később konfliktusok lesznek belőlük."
            },
            {
                q: "Automatikusan a tiéd lesz, amit egy külsős megbízott létrehoz?",
                options: [
                    "Nem: írásos jogátruházás kell",
                    "Igen, ha kifizetted",
                    "Igen, ha egyértelműen megrendelésre készült munkáról van szó"
                ],
                a: 0,
                explication: "Enélkül a logó, a kód vagy a szövegek a szerzőjüknél maradnak."
            },
            {
                q: "Mikortól érvényes a GDPR?",
                options: [
                    "250 alkalmazott felett, a nagyvállalatoknál",
                    "Csak webáruházakra és online boltokra",
                    "Az első ügyféllistától"
                ],
                a: 2,
                explication: "Adatkezelési nyilvántartás, az érintettek tájékoztatása, megőrzési idő — az egész Európai Unióban, így Magyarországon is."
            },
            // 2. sorozat
            {
                q: "Mit kell rendeznie a tagok közötti megállapodásnak?",
                options: [
                    "Ki miről dönt, mi történik, ha valaki kiválik, hogyan értékelik a részesedéseket",
                    "Csak a tőke felosztását a különböző tagok között, pontosan az alapítás pillanatában",
                    "A fizetések összegét"
                ],
                a: 0,
                explication: "Egy két évvel későbbi nézeteltérés írásos megállapodás nélkül nem rendeződik békésen — és minden döntést megakaszt."
            },
            {
                q: "Hogyan viszonyul egy tagi megállapodás költsége egy konfliktuséhoz?",
                options: [
                    "A kettő összemérhető",
                    "Néhány ezer euró szemben több tízezerrel és két év eljárással",
                    "A megállapodás drágább"
                ],
                a: 1,
                explication: "Ez azon ritka kiadások egyike, amelyek hozama többszörösben mérhető."
            },
            {
                q: "Melyik ellenőrzés ingyenes egy védjegynév kiválasztása előtt?",
                options: [
                    "A név ideiglenes letétbe helyezése egy közjegyzőnél",
                    "A védjegykutatás a nemzeti szellemitulajdon-hivatal adatbázisában",
                    "Egy ügyvéd véleménye"
                ],
                a: 1,
                explication: "Néhány percig tart, és megóv attól, hogy egy év működés után mindent át kelljen nevezni."
            }
        ]
    },

    // Összefoglaló kérdések — eltérnek a fejezetekéitől
    synthese: [
        // 1. sorozat
        {
            q: "Mi a közös ennek a szintnek a négy döntésében?",
            options: [
                "Mindegyik a vállalkozás finanszírozására és tőkéjére vonatkozik",
                "Mindegyik az első évben esedékes",
                "Mindegyik tartósan elkötelez, és nehéz visszacsinálni"
            ],
            a: 2,
            explication: "Gyorsítsunk-e, kinek a pénzével, kivel, és milyen kötöttségek mellett."
        },
        {
            q: "Melyik emelő javítja a legjobban az egységgazdaságtant több költés nélkül?",
            options: [
                "A hirdetési kampányok optimalizálása",
                "A meglévő ügyfelek megtartása",
                "Árcsökkentés, hogy többet adjunk el"
            ],
            a: 1,
            explication: "Szinte mindig jövedelmezőbb, mint az ügyfélszerzésen végzett munka, és szinte mindig kevesebb jut rá, mert kevésbé látható."
        },
        {
            q: "Egy vállalkozás ügyfélérték/ügyfélszerzési költség aránya 0,8, és tőkét akar bevonni a növekedéshez. Mit gondolsz?",
            options: [
                "A tőkebevonás tovább finanszírozná a veszteséget, ráadásul nyomással",
                "Ez a jó pillanat, a bevont tőke finanszírozza a növekedést",
                "Nagyobb összeget kell bevonni"
            ],
            a: 0,
            explication: "A külső pénz felgyorsítja, ami létezik. Nem pótolja a még nem működő modellt."
        },
        // 2. sorozat
        {
            q: "Melyik gondolatmenet érvényes a felvételre és a tőkebevonásra egyaránt?",
            options: [
                "Várni, amíg nyereséges leszel",
                "Számszerűsíteni a kötelezettséget, mielőtt vállalod, és ellenőrizni, hogy elviselhető-e, ha rosszul sül el",
                "Minden esetben szakemberhez fordulni"
            ],
            a: 1,
            explication: "Leírni a kedvezőtlen forgatókönyvet: ha elviselhető, lépni; ha nem, csökkenteni a kötelezettséget."
        },
        {
            q: "Miért ezen a szinten szerepelnek a jogi kockázatok, és nem az induláskor?",
            options: [
                "A vállalt kötelezettségekből születnek: társak, megbízottak, ügyfelek, munkavállalók",
                "Csak egy bizonyos méret felett léteznek",
                "Túl technikaiak egy kezdőnek"
            ],
            a: 0,
            explication: "Ennek a szintnek minden elkötelező döntése megfelelő írásos rendezést igényel."
        },
        {
            q: "Mi a közös a hiányzó tagi megállapodásban és a ki nem számolt egységgazdaságtanban?",
            options: [
                "Mindkettő a jogi tanácsadás körébe tartozik, amelyet pénz híján halogatnak",
                "Mindkettő éppen akkor kerül sokba, amikor a legkevésbé engedheted meg magadnak",
                "Mindkettő könnyen javítható"
            ],
            a: 1,
            explication: "Az egyik akkor robban, amikor a vállalkozás érdekessé válik, a másik akkor, amikor gyorsít."
        }
    ]
};
