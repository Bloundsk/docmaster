/* ---------------------------------------------------------------------------
 * CLICKED — TEXTES DES SIMULATEURS, EN HONGROIS
 *
 * Chargé par les pages de « hu/ », juste avant pratique.js, qui fait passer
 * chaque texte visible par ce dictionnaire. Même principe que pratique/en.js :
 *
 * ON NE DUPLIQUE PAS LES SIMULATEURS, seulement leurs textes. Les formules
 * restent uniques dans pratique.js.
 *
 * « textes »    correspondance exacte  — titres, libellés, leçons, verdicts
 * « fragments » remplacement partiel   — les mots pris dans une valeur calculée
 *
 * Une entrée absente laisse le texte français ; verifier-traduction.mjs <sujet> hu
 * dit lesquelles manquent, sujet par sujet. Registre : tutoiement (tegeződés).
 * ------------------------------------------------------------------------- */
window.PRATIQUE_TEXTES = {
    fragments: {
        // --- apprendre ------------------------------------------------------
        "lecture impossible sans traduction": "fordítás nélkül olvashatatlan",
        "lecture fluide": "folyékony olvasás",
        "moins de temps": "kevesebb idő",
        "éléments": "elem",
        "élément": "elem",
        "exercices": "feladat",
        "exercice": "feladat",
        "mots": "szó",
        " sur ": " / ",

        // --- productivite ---------------------------------------------------
        // Le hongrois place le nombre avant le mot et ne dit pas « en » :
        // « En 2 passage(s) groupé(s) » devient « 2 csoportos körben ». Le
        // morceau long passe d'abord, puis « En » disparaît.
        " passage(s) groupé(s)": " csoportos körben",
        "En ": "",
        " de la journée": " a napból",
        " par jour": " naponta",

        // --- ia -------------------------------------------------------------
        // Le plus long d'abord : il contient « jetons ». Après un nombre, le
        // hongrois garde le singulier : « 27 500 token ».
        " k jetons — bien au-delà de toute fenêtre": " ezer token — messze túl bármely kontextusablakon",
        " jetons": " token",

        // --- data -----------------------------------------------------------
        // Le singulier suit le nombre en hongrois : « 29 nap (4,1 hét) »,
        // « 46 000 sor ». « jours » passe avant « jour », qu'il contient.
        "% et ": "% és ",
        " semaines": " hét",
        " jours": " nap",
        " jour": " nap",
        " lignes": " sor",
        " observations": " megfigyelés",

        // --- design -----------------------------------------------------------
        // Libellés construits avec un nombre : « Décider (Hick) — 4 familles ».
        // Le singulier suit le nombre : « 183 óra », « 4 csoport ».
        "Décider (Hick) — ": "Döntés (Hick) — ",
        "Chercher — ": "Keresés — ",
        " familles": " csoport",
        "liste plate": "lapos lista",
        " heures": " óra",
        " minutes": " perc",
        " Ko": " kB",

        // --- dev-web ----------------------------------------------------------
        // « 34 fois plus lent » : le suffixe hongrois (-szor/-szer/-ször) suit la
        // voyelle du nombre, qui change à la saisie. « 34× lassabb » évite l'accord.
        "Une requête par élément (": "Elemenként egy lekérdezés (",
        " requêtes)": " lekérdezés)",
        " fois plus lent": "× lassabb",
        " des tests": " a tesztekből",
        " du temps": " az időből",
    },

    textes: {
        // --- communs à tous les simulateurs ---------------------------------
        "À toi d'essayer": "Most te jössz",
        "Renseigne": "Töltsd ki ezt:",
        "pour voir le résultat.": "— és megjelenik az eredmény.",
        "%": "%",
        "s": "mp",
        "h": "óra",
        "j": "nap",
        "mois": "hónap",
        "sem.": "hét",
        "mots": "szó",
        "Verdict": "Ítélet",
        "Éléments à retenir": "Megjegyzendő elemek",
        "min": "perc",
        "pers.": "fő",
        "€/h": "EUR/óra",
        "fois": "alkalom",
        "msg": "db",

        // --- productivite / rythme-energie ------------------------------------
        "Travailles-tu au bon moment ?": "Jó időben dolgozol?",
        "Coche ce qui décrit ta journée réelle.": "Jelöld be, ami a valódi napodat írja le.",
        "Deux heures au bon moment valent quatre heures au mauvais. C'est l'optimisation qui ne coûte rien.":
            "Két óra a megfelelő időben annyit ér, mint négy a rosszban. Ez az az optimalizálás, amely semmibe sem kerül.",
        "Je connais mon meilleur créneau de concentration": "Ismerem a legjobb koncentrációs idősávomat",
        "observé, pas supposé": "megfigyelve, nem feltételezve",
        "Le travail de fond y est effectivement placé": "Az elmélyült munka ténylegesen oda kerül",
        "Les tâches mécaniques occupent le creux d'après-midi": "A gépies feladatok a kora délutáni mélypontot töltik ki",
        "Je ne consacre pas ma première heure aux messages": "Az első órámat nem az üzeneteknek szentelem",
        "Je prends des pauses qui changent de registre": "Olyan szüneteket tartok, amelyekben egészen mást csinálok",
        "consulter son téléphone n'est pas une pause pour l'attention": "a telefon nézegetése nem pihenés a figyelemnek",
        "Je n'allonge pas la journée quand le travail déborde": "Nem nyújtom meg a napot, amikor túl sok a munka",
        "le total produit sur la semaine baisse": "a heti összteljesítmény csökken",
        "Ton meilleur créneau est probablement consacré aux priorités des autres.":
            "A legjobb idősávod valószínűleg mások prioritásait szolgálja.",
        "Bonne base. Protéger la première heure est le changement le plus rentable.":
            "Jó alap. Az első óra megvédése a legkifizetődőbb változtatás.",
        "Tes heures les plus productives servent ce qui compte le plus.":
            "A legtermékenyebb óráid azt szolgálják, ami a legfontosabb.",

        // --- productivite / friction-habitude -----------------------------------
        "Ton habitude peut-elle tenir ?": "Kitart majd a szokásod?",
        "Coche ce qui est vrai de l'habitude que tu veux installer.": "Jelöld be, ami igaz arra a szokásra, amelyet ki akarsz alakítani.",
        "Ajouter vingt secondes d'effort réduit fortement la fréquence d'un geste. En retirer vingt l'augmente d'autant.":
            "Húsz másodpercnyi plusz erőfeszítés erősen csökkenti egy mozdulat gyakoriságát. Húsz másodperc elvétele ugyanennyivel növeli.",
        "Elle est rattachée à une action déjà automatique": "Egy már automatikus cselekvéshez kötöttem",
        "le déclencheur existe, rien à retenir": "a kiváltó jel már megvan, nincs mit megjegyezni",
        "Sa version minimale est ridiculement petite": "A minimális változata nevetségesen kicsi",
        "« écrire une phrase », « ouvrir le fichier »": "„írj egy mondatot”, „nyisd meg a fájlt”",
        "J'ai retiré de la friction devant elle": "Csökkentettem előtte a súrlódást",
        "préparé la veille, outil déjà ouvert": "előző este előkészítve, az eszköz már nyitva",
        "J'ai ajouté de la friction devant ce qui la concurrence": "Súrlódást tettem az elé, ami versenyez vele",
        "J'ai une règle de reprise après une rupture": "Van szabályom arra, hogyan folytatom egy kihagyás után",
        "ne jamais manquer deux fois de suite": "soha ne hagyd ki kétszer egymás után",
        "Je n'installe qu'une seule habitude à la fois": "Egyszerre csak egy szokást alakítok ki",
        "Cette habitude repose encore sur la volonté, qui fluctue par nature.":
            "Ez a szokás még az akaraterőn múlik, amely természeténél fogva ingadozik.",
        "Bonne conception. La règle de reprise est ce qui décide au deuxième mois.":
            "Jól megtervezett. A folytatási szabály dönt a második hónapban.",
        "Cette habitude ne dépend pas de ta motivation. Elle a une vraie chance.":
            "Ez a szokás nem a motivációdon múlik. Van valódi esélye.",

        // --- productivite / cout-reunion ------------------------------------------
        "Combien coûte cette réunion ?": "Mennyibe kerül ez az értekezlet?",
        "Une réunion coûte sa durée multipliée par le nombre de participants.":
            "Egy értekezlet a hosszának és a résztvevők számának szorzatába kerül.",
        "Une heure à huit personnes, c'est une journée de travail. La question « faut-il convier tout le monde ? » se pose alors autrement.":
            "Egy óra nyolc emberrel egy teljes munkanap. Így a „mindenkit meg kell hívni?” kérdés másképp hangzik.",
        "Durée": "Időtartam",
        "Participants": "Résztvevők",
        "Coût horaire chargé moyen": "Átlagos óraköltség járulékokkal",
        "Occurrences par an": "Alkalmak évente",
        "Heures de travail par séance": "Munkaórák alkalmanként",
        "Coût par séance": "Költség alkalmanként",
        "Coût annuel": "Éves költség",

        // --- productivite / revue-reguliere -------------------------------------------
        "Ton système résiste-t-il à la dérive ?": "Ellenáll a rendszered az elcsúszásnak?",
        "Coche ce qui a effectivement lieu, à intervalle régulier.": "Jelöld be, ami rendszeres időközönként ténylegesen megtörténik.",
        "Quand un système se dérègle, changer d'outil reporte le problème d'un trimestre. Ce qui manquait, c'était la revue.":
            "Ha egy rendszer szétesik, az eszközváltás csak egy negyedévvel tolja el a gondot. Ami hiányzott, az az áttekintés volt.",
        "Une revue hebdomadaire de trente minutes, à heure fixe dans l'agenda": "Heti harmincperces áttekintés, rögzített időpontban a naptárban",
        "Un point mensuel sur ce qui n'a pas avancé, et pourquoi": "Havi összegzés arról, mi nem haladt, és miért",
        "Un recul trimestriel sur ce qui compte vraiment": "Negyedéves visszatekintés arra, ami igazán számít",
        "Je pose devant chaque projet : « si cela n'existait pas, est-ce que je le commencerais ? »":
            "Minden projektnél megkérdezem: „ha még nem létezne, belekezdenék?”",
        "J'ai arrêté au moins un engagement au cours des six derniers mois": "Az elmúlt hat hónapban legalább egy vállalásomat leállítottam",
        "Rien de nouveau n'entre sans que quelque chose sorte": "Semmi új nem kerül be anélkül, hogy valami kikerülne",
        "Sans revue, ce système dérivera jusqu'à être abandonné en bloc.":
            "Áttekintés nélkül ez a rendszer addig csúszik el, amíg egyben fel nem hagysz vele.",
        "Bonne discipline. Arrêter des choses reste la partie la plus difficile.":
            "Jó fegyelem. Dolgokat abbahagyni továbbra is a legnehezebb rész.",
        "Ton système se corrige tout seul. C'est ce qui le fera durer.":
            "A rendszered magától korrigálja magát. Ettől lesz tartós.",

        // --- productivite / rythme-pomodoro -------------------------------------------
        "Que produit une journée en Pomodoro ?": "Mit hoz egy nap Pomodoróval?",
        "Le total surprend : le temps réellement concentré est bien inférieur aux heures passées.":
            "Az összeg meglep: a ténylegesen koncentrált idő jóval kevesebb, mint az eltöltött órák.",
        "Quatre heures de présence donnent environ trois heures de concentration réelle. C'est déjà beaucoup.":
            "Négy óra jelenlét nagyjából három óra valódi koncentrációt ad. Ez már sok.",
        "Durée d'une session": "Egy blokk hossza",
        "Pause entre deux sessions": "Szünet két blokk között",
        "Heures consacrées au travail de fond": "Elmélyült munkára szánt órák",
        "Sessions dans la plage": "Blokkok az idősávban",
        "Temps réellement concentré": "Ténylegesen koncentrált idő",
        "Part de la plage": "Az idősáv hányada",

        // --- productivite / sante-gtd ---------------------------------------------------
        "Ton système tient-il debout ?": "Megáll a lábán a rendszered?",
        "Coche ce qui est vrai aujourd'hui, pas ce que tu avais prévu.": "Azt jelöld be, ami ma igaz, ne azt, amit terveztél.",
        "Un système auquel on ne fait pas confiance est doublé d'une liste mentale — et c'est elle qui fatigue.":
            "Egy rendszer mellé, amelyben nem bízunk, fejben is vezetünk egy listát — és az fáraszt.",
        "Tout ce que j'ai à faire est noté quelque part, hors de ma tête": "Minden teendőm le van írva valahol, a fejemen kívül",
        "Il existe un seul endroit pour capturer, pas cinq": "Egyetlen hely van a gyűjtésre, nem öt",
        "Chaque tâche commence par un verbe d'action": "Minden feladat cselekvést jelentő igével kezdődik",
        "« appeler le comptable » et non « comptable »": "„felhívni a könyvelőt”, nem „könyvelő”",
        "Les tâches de plus d'une étape sont identifiées comme projets": "A több lépésből álló feladatokat projektként jelölöm",
        "Je vide mes boîtes de capture au moins une fois par semaine": "A gyűjtőhelyeimet legalább hetente kiürítem",
        "Je fais confiance à mon système : je n'ai pas de liste parallèle mentale": "Megbízom a rendszeremben: nincs mellette fejben vezetett listám",
        "Ta mémoire porte encore une partie du système, et elle le porte mal.":
            "A rendszer egy részét még a memóriád viszi, és rosszul viszi.",
        "Bonne base. La revue hebdomadaire est ce qui manque le plus souvent.":
            "Jó alap. A heti áttekintés az, ami a leggyakrabban hiányzik.",
        "Système fiable : ta tête n'a plus à servir de mémoire.": "Megbízható rendszer: a fejednek már nem kell tárolóként szolgálnia.",

        // --- productivite / matrice-eisenhower -------------------------------------------
        "Ta matrice sert-elle à quelque chose ?": "Használ valamit a mátrixod?",
        "Coche ce qui est vrai de ton usage réel, pas de tes intentions.": "Azt jelöld be, ami a valódi használatodra igaz, ne a szándékaidra.",
        "L'urgent se signale de lui-même. L'important reste silencieux : il faut lui réserver du temps, ou il n'arrivera jamais.":
            "A sürgős magától jelentkezik. A fontos csendben marad: időt kell foglalni neki, különben sosem kerül sorra.",
        "J'ai classé les tâches de ma semaine dans les quatre cases": "A heti feladataimat besoroltam a négy mezőbe",
        "Le quadrant 4 n'est pas vide": "A 4. negyed nem üres",
        "s'il l'est, c'est que rien n'a été renoncé": "ha üres, akkor semmiről sem mondtál le",
        "Un créneau récurrent est réservé au quadrant 2 dans mon agenda": "A naptáramban ismétlődő idősáv van lefoglalva a 2. negyednek",
        "important mais non urgent": "fontos, de nem sürgős",
        "Devant une tâche urgente, je me demande « urgent pour qui ? »": "Egy sürgős feladatnál megkérdezem magamtól: „kinek sürgős?”",
        "Les tâches du quadrant 3 sont déléguées ou expédiées, pas soignées": "A 3. negyed feladatait átadom vagy gyorsan letudom, nem csiszolgatom",
        "Je refais l'exercice au moins une fois par mois": "Legalább havonta megismétlem a gyakorlatot",
        "L'exercice a été fait, mais rien n'a changé dans l'agenda : il n'a rien arbitré.":
            "A gyakorlat megvolt, de a naptárban semmi sem változott: nem döntött el semmit.",
        "Bon usage. Le créneau réservé au quadrant 2 est ce qui manque le plus souvent.":
            "Jó használat. A 2. negyednek lefoglalt idősáv az, ami a leggyakrabban hiányzik.",
        "La matrice arbitre réellement. C'est tout ce qu'on lui demande.": "A mátrix valóban dönt. Csak ennyit várunk tőle.",

        // --- productivite / choisir-outil ---------------------------------------------------
        "Cet outil te convient-il ?": "Neked való ez az eszköz?",
        "Coche ce qui est vrai de l'outil que tu utilises ou envisages.": "Jelöld be, ami igaz arra az eszközre, amelyet használsz vagy fontolgatsz.",
        "Le meilleur outil est celui qu'on utilise encore dans six mois. Tous les autres critères passent après.":
            "A legjobb eszköz az, amelyet hat hónap múlva is használunk. Minden más szempont csak ezután jön.",
        "Capturer une tâche prend moins de cinq secondes": "Egy feladat felírása kevesebb mint öt másodperc",
        "au-delà, on ne capture plus": "e fölött már nem írjuk fel",
        "Il est accessible partout où les idées surviennent": "Mindenhol elérhető, ahol ötletek jönnek",
        "Je n'ai pas passé plus d'une heure à le configurer": "Nem töltöttem egy óránál többet a beállításával",
        "Je l'utilise encore trois mois après l'avoir adopté": "Három hónappal a bevezetése után is használom",
        "Il ne me demande pas de renseigner des champs dont je ne me sers pas": "Nem kér tőlem olyan mezőket, amelyeket nem használok",
        "Je peux en sortir mes données si je change d'avis": "Ki tudom vinni belőle az adataimat, ha meggondolom magam",
        "Cet outil consomme probablement plus d'énergie qu'il n'en fait gagner.":
            "Ez az eszköz valószínűleg több energiát emészt fel, mint amennyit megtakarít.",
        "Correct. La vraie question reste : l'utiliseras-tu dans trois mois ?":
            "Elfogadható. A valódi kérdés továbbra is: használni fogod három hónap múlva?",
        "Outil adapté : il sert le système au lieu de le remplacer.": "Megfelelő eszköz: a rendszert szolgálja, nem helyettesíti.",

        // --- productivite / cout-changement-tache ------------------------------------------------
        "Ce que coûtent tes interruptions": "Mibe kerülnek a megszakításaid",
        "Le temps perdu n'est pas la durée de l'interruption, c'est le temps de reprise.":
            "Az elvesztegetett idő nem a megszakítás hossza, hanem a visszatalálás ideje.",
        "Une coupure de deux minutes en coûte vingt. C'est pourquoi le total surprend toujours.":
            "Egy kétperces megszakítás húszba kerül. Ezért lep meg mindig az összeg.",
        "Interruptions par jour": "Megszakítások naponta",
        "Durée moyenne d'une interruption": "Egy megszakítás átlagos hossza",
        "Temps de reprise après coupure": "Visszatalálási idő megszakítás után",
        "Durée de la journée de travail": "A munkanap hossza",
        "Temps des interruptions": "A megszakítások ideje",
        "Temps de reprise": "Visszatalálási idő",
        "Total perdu": "Összes veszteség",

        // --- productivite / blocage-de-temps --------------------------------------------------------
        "Combien de temps te reste-t-il vraiment ?": "Valójában mennyi időd marad?",
        "Planifier plus que le disponible garantit d'échouer — par arithmétique, pas par manque de discipline.":
            "Ha többet tervezel, mint amennyi időd van, biztosan kudarcot vallasz — a számtan miatt, nem fegyelemhiányból.",
        "Une planification à 70 % tient. Une planification à 100 % casse à la première urgence.":
            "A 70%-os tervezés kitart. A 100%-os az első sürgős ügynél összeomlik.",
        "Durée de la journée": "A nap hossza",
        "Réunions": "Értekezletek",
        "Traitement des messages": "Üzenetek kezelése",
        "Imprévus et transitions": "Váratlan ügyek és átállások",
        "Temps disponible pour le travail de fond": "Elmélyült munkára maradó idő",
        "Part de la journée": "A nap hányada",
        "À planifier raisonnablement (70 %)": "Észszerűen tervezhető (70%)",

        // --- productivite / flux-entrant -------------------------------------------------------------
        "Au fil de l'eau, ou par lots ?": "Folyamatosan, vagy csoportosítva?",
        "Le travail est le même. Ce sont les transitions qui coûtent.": "A munka ugyanaz. Az átállások kerülnek sokba.",
        "Ce n'est pas le nombre de messages qui coûte cher, c'est le nombre de fois qu'on les regarde.":
            "Nem az üzenetek száma kerül sokba, hanem az, hányszor nézünk rájuk.",
        "Messages par jour": "Üzenetek naponta",
        "Temps de traitement par message": "Kezelési idő üzenetenként",
        "Reprise après chaque interruption": "Visszatalálás minden megszakítás után",
        "Nombre de passages par jour si traité par lots": "Napi körök száma csoportos kezelésnél",
        "Au fil de l'eau": "Folyamatosan",
        "Économie": "Megtakarítás",

        // --- productivite / cout-opportunite ----------------------------------------------------------
        "Faut-il dire oui ?": "Igent mondj?",
        "Coche ce que tu as vérifié avant d'accepter cette demande.": "Jelöld be, mit ellenőriztél, mielőtt elfogadod ezt a kérést.",
        "Personne ne vient réclamer le travail qui n'a pas été fait. C'est ce qui rend ce coût invisible.":
            "Senki sem jön számon kérni azt a munkát, amely nem készült el. Ettől láthatatlan ez a költség.",
        "Je sais précisément ce que je ne ferai pas si j'accepte": "Pontosan tudom, mit nem fogok megcsinálni, ha elfogadom",
        "Cette chose abandonnée est moins importante que la demande": "Ez az elhagyott dolog kevésbé fontos, mint a kérés",
        "J'ai estimé la durée réelle, pas la durée annoncée": "A valódi időigényt becsültem meg, nem a bejelentettet",
        "J'ai vérifié qu'elle rentre dans mon temps disponible, pas dans ma journée théorique":
            "Ellenőriztem, hogy belefér a ténylegesen szabad időmbe, nem az elméleti napomba",
        "Si je dois refuser, j'ai une formulation qui rend le coût visible": "Ha nemet kell mondanom, van olyan megfogalmazásom, amely láthatóvá teszi a költséget",
        "report daté, arbitrage explicite, version réduite": "dátummal ellátott halasztás, kimondott választás, szűkített változat",
        "La personne qui demande sait ce que cela décale": "A kérő tudja, mit tol el ez",
        "Accepter ici, c'est refuser autre chose sans l'avoir décidé.": "Ha itt igent mondasz, valami másra mondasz nemet anélkül, hogy eldöntötted volna.",
        "Il manque l'essentiel : nommer ce qui sera abandonné.": "A lényeg hiányzik: megnevezni, mi marad el.",
        "Décision instruite : c'est un vrai oui, ou un refus argumenté.": "Megalapozott döntés: valódi igen, vagy megindokolt nem.",

        // --- ia / unités et réponses communes ------------------------------------
        "oui": "igen",
        "non": "nem",
        "tours": "kör",
        "€/M jetons": "EUR/millió token",
        "doc.": "db",
        "pages": "oldal",
        "jetons": "token",
        "req.": "kérés",
        "€": "EUR",

        // --- ia / reglage-temperature ----------------------------------------------
        "Choisis ta température": "Válaszd ki a hőmérsékletet",
        "Coche les tâches qui appellent une température BASSE.": "Jelöld be azokat a feladatokat, amelyekhez ALACSONY hőmérséklet kell.",
        "Le réglage par défaut est intermédiaire. Il convient donc mal aux deux extrémités — dont l'extraction.":
            "Az alapbeállítás közepes. Ezért egyik véglethez sem illik jól — a kinyeréshez sem.",
        "Extraire des informations d'un document": "Információt kinyerni egy dokumentumból",
        "oui : on veut la même réponse à chaque fois": "igen: minden alkalommal ugyanazt a választ akarjuk",
        "Classer des messages par catégorie": "Üzeneteket kategóriákba sorolni",
        "Proposer dix idées de titres": "Tíz címötletet javasolni",
        "non : la variété est justement ce qu'on cherche": "nem: épp a változatosságot keressük",
        "Générer du code": "Kódot generálni",
        "Reformuler un texte avec plus de style": "Egy szöveget stílusosabban átfogalmazni",
        "Répondre à une question factuelle": "Ténykérdésre válaszolni",
        "Quatre de ces six tâches appellent une température basse.": "A hat feladat közül négyhez alacsony hőmérséklet kell.",
        "Quatre tâches appellent une température basse. Vérifie que ce sont bien celles-là.":
            "Négy feladathoz kell alacsony hőmérséklet. Ellenőrizd, hogy tényleg ezek azok.",
        "Plus de quatre : deux de ces tâches gagnent au contraire à la variété.":
            "Négynél több: ezek közül kettő épp a változatosságtól lesz jobb.",

        // --- ia / jeu-de-test --------------------------------------------------------
        "Évalue ta méthode d'évaluation": "Értékeld az értékelési módszeredet",
        "Coche ce qui est vrai de ta manière de mesurer.": "Jelöld be, ami igaz arra, ahogyan mérsz.",
        "Le jeu de test est ce qui transforme une opinion sur un système en information sur un système.":
            "A tesztkészlet az, ami egy rendszerről alkotott véleményt a rendszerről szóló információvá alakítja.",
        "J'ai au moins vingt cas de test écrits avec leur réponse attendue": "Legalább húsz tesztesetet írtam a várt válaszukkal együtt",
        "Le jeu contient des cas limites, pas seulement des cas faciles": "A készletben határesetek is vannak, nem csak könnyű esetek",
        "Il contient des cas où la bonne réponse est « je ne sais pas »": "Vannak benne olyan esetek, amelyeknél a helyes válasz a „nem tudom”",
        "les plus révélateurs : un système qui invente échoue là": "ezek a legárulkodóbbak: egy kitalálásra hajlamos rendszer itt bukik el",
        "Un second jeu, jamais consulté pendant les réglages, sert de contrôle final":
            "Egy második, a hangolás közben soha meg nem nézett készlet szolgál végső ellenőrzésként",
        "Je regarde le détail des cas, pas seulement le score global": "Az esetek részleteit nézem, nem csak az összpontszámot",
        "un score qui monte peut cacher des régressions": "egy emelkedő pontszám visszaeséseket rejthet",
        "Si j'utilise un modèle-juge, j'inverse l'ordre des candidats": "Ha bírómodellt használok, felcserélem a jelöltek sorrendjét",
        "un juge favorise ce qui est présenté en premier": "a bíró előnyben részesíti, amit elsőként mutatnak neki",
        "Sans mesure, une amélioration ressentie sur trois essais peut être une dégradation sur cent.":
            "Mérés nélkül egy három próbán érzett javulás száz próbán romlás lehet.",
        "Base correcte. Le jeu de contrôle mis à part et le détail des cas font la différence.":
            "Elfogadható alap. A félretett ellenőrző készlet és az esetek részletei jelentik a különbséget.",
        "Méthode solide : tes améliorations sont mesurées, pas ressenties.": "Szilárd módszer: a javításaidat méred, nem érzed.",

        // --- ia / surface-injection -----------------------------------------------------
        "Mesure ton exposition à l'injection": "Mérd fel, mennyire vagy kitéve az injekciónak",
        "Coche ce qui s'applique à ton système.": "Jelöld be, ami a rendszeredre vonatkozik.",
        "On ne referme pas l'injection de consigne. On réduit ce qu'elle permet d'obtenir.":
            "A promptinjekciót nem lehet bezárni. Azt lehet csökkenteni, amit el lehet érni vele.",
        "L'agent lit des contenus que je ne maîtrise pas": "Az ügynök olyan tartalmakat olvas, amelyek felett nincs ellenőrzésem",
        "pages web, courriels reçus, documents envoyés par des tiers": "weboldalak, beérkező e-mailek, harmadik felek által küldött dokumentumok",
        "Il dispose d'outils capables d'envoyer ou de publier": "Vannak küldésre vagy közzétételre képes eszközei",
        "Il peut supprimer ou modifier des données": "Törölhet vagy módosíthat adatokat",
        "Il accède à des informations confidentielles": "Bizalmas információkhoz fér hozzá",
        "Il agit sans validation humaine sur les actions irréversibles": "Visszafordíthatatlan műveleteknél emberi jóváhagyás nélkül cselekszik",
        "Sa seule protection contre l'injection est une phrase dans la consigne": "Az injekció elleni egyetlen védelme egy mondat az utasításban",
        "cela aide un peu, et se contourne": "ez kicsit segít, és megkerülhető",
        "Exposition faible. Reconsidère à chaque nouvel outil ajouté.": "Alacsony kitettség. Minden új eszköz hozzáadásakor gondold át újra.",
        "Exposition limitée. Le cloisonnement lecture / écriture reste la précaution clé.":
            "Korlátozott kitettség. Az olvasás és az írás elkülönítése marad a legfontosabb óvintézkedés.",
        "Un texte placé dans un contenu lu par l'agent pourrait déclencher des actions non voulues.":
            "Egy, az ügynök által olvasott tartalomba helyezett szöveg nem kívánt műveleteket indíthat el.",

        // --- ia / entrainer-ou-recuperer -------------------------------------------------
        "Faut-il entraîner, ou récupérer ?": "Betanítani vagy visszakeresni?",
        "Coche les situations qui relèvent de la RÉCUPÉRATION plutôt que de l'entraînement.":
            "Jelöld be azokat a helyzeteket, amelyek a VISSZAKERESÉSRE tartoznak, nem a betanításra.",
        "« Le modèle ne sait pas » appelle la récupération. « Le modèle répond mal » appelle d'abord la consigne.":
            "A „modell nem tudja” visszakeresést kíván. A „modell rosszul válaszol” először az utasítás javítását.",
        "Le modèle ignore nos procédures internes": "A modell nem ismeri a belső eljárásainkat",
        "récupération : mets le document sous ses yeux": "visszakeresés: tedd elé a dokumentumot",
        "Le modèle ignore nos tarifs, qui changent chaque mois": "A modell nem ismeri a havonta változó árainkat",
        "récupération : des poids figés vieilliraient aussitôt": "visszakeresés: a rögzített súlyok azonnal elavulnának",
        "Les réponses ne respectent pas notre charte de ton": "A válaszok nem tartják be a hangnemre vonatkozó irányelveinket",
        "entraînement possible — après avoir essayé la consigne et des exemples": "betanítás szóba jöhet — miután kipróbáltad az utasítást és a példákat",
        "Le modèle ne connaît pas les événements récents": "A modell nem ismeri a friss eseményeket",
        "récupération": "visszakeresés",
        "Le format de sortie doit suivre une structure très particulière": "A kimeneti formátumnak nagyon sajátos szerkezetet kell követnie",
        "entraînement possible, en dernier recours": "betanítás szóba jöhet, végső megoldásként",
        "Le modèle doit citer ses sources": "A modellnek meg kell neveznie a forrásait",
        "récupération : un modèle affiné ne peut pas citer ce qu'il a dilué": "visszakeresés: egy finomhangolt modell nem tudja idézni, amit felhígított",
        "Quatre de ces six situations relèvent de la récupération.": "A hat helyzet közül négy a visszakeresésre tartozik.",
        "Quatre situations relèvent de la récupération. Les deux autres, d'une question de forme.":
            "Négy helyzet a visszakeresésre tartozik. A másik kettő formai kérdés.",
        "Plus de quatre : deux de ces situations concernent la forme, pas la connaissance.":
            "Négynél több: ezek közül kettő a formát érinti, nem a tudást.",

        // --- ia / anatomie-llm --------------------------------------------------------------
        "Ce qu'un modèle de langage fait, et ne fait pas": "Mit csinál egy nyelvi modell, és mit nem",
        "Coche uniquement les affirmations exactes. Trois le sont.": "Csak a helyes állításokat jelöld be. Három ilyen van.",
        "Un modèle produit du texte plausible. Le vrai et le plausible coïncident souvent — pas toujours.":
            "Egy modell hihető szöveget ír. Az igaz és a hihető gyakran egybeesik — de nem mindig.",
        "Il prédit le fragment de texte suivant, encore et encore": "Megjósolja a következő szövegdarabot, újra és újra",
        "exact : c'est tout son fonctionnement": "helyes: ez a teljes működése",
        "Il consulte une base de connaissances à chaque réponse": "Minden válasznál egy tudásbázist kérdez le",
        "faux : sauf si on lui en branche une explicitement": "hamis: kivéve, ha kifejezetten hozzákapcsolnak egyet",
        "Il peut produire une affirmation fausse avec une parfaite assurance": "Tökéletes magabiztossággal írhat hamis állítást",
        "exact : rien dans son fonctionnement ne distingue vrai et plausible": "helyes: a működésében semmi sem különbözteti meg az igazat a hihetőtől",
        "Il comprend le sens comme un humain le comprend": "Úgy érti a jelentést, ahogy egy ember",
        "faux, et la question reste débattue": "hamis, és a kérdés továbbra is vitatott",
        "Il n'a aucune mémoire entre deux conversations": "Két beszélgetés között semmilyen emlékezete nincs",
        "exact : l'historique lui est renvoyé, il ne le retient pas": "helyes: az előzményt visszaküldik neki, nem ő jegyzi meg",
        "Il calcule ses réponses à partir de règles écrites par des humains": "Emberek által írt szabályokból számolja ki a válaszait",
        "faux : les règles ne sont écrites nulle part, elles sont apprises": "hamis: a szabályok sehol sincsenek leírva, tanultak",
        "Trois de ces affirmations sont exactes. Les indications te disent lesquelles.":
            "Ezek közül három állítás helyes. A magyarázatok megmondják, melyek.",
        "Trois affirmations sont exactes. Vérifie avec les indications que ce sont bien les tiennes.":
            "Három állítás helyes. A magyarázatok alapján ellenőrizd, hogy tényleg azokat jelölted-e.",
        "Plus de trois cases cochées : certaines affirmations sont fausses.": "Háromnál több bejelölve: némelyik állítás hamis.",

        // --- ia / anatomie-agent ----------------------------------------------------------------
        "Distingue un agent d'un assistant": "Különböztesd meg az ügynököt az asszisztenstől",
        "Coche ce qui caractérise un agent, par opposition à un simple assistant conversationnel.":
            "Jelöld be, ami egy ügynökre jellemző, szemben egy egyszerű csevegő asszisztenssel.",
        "Ce n'est pas l'intelligence qui fait l'agent, c'est la capacité d'agir — et donc de se tromper avec conséquence.":
            "Nem az intelligencia teszi ügynökké, hanem a cselekvés képessége — és így az, hogy következményekkel járóan tévedhet.",
        "Il peut appeler des outils extérieurs": "Külső eszközöket tud hívni",
        "Il enchaîne plusieurs étapes sans qu'on les lui dicte une par une": "Több lépést fűz össze anélkül, hogy egyenként diktálnák neki",
        "Il observe le résultat d'une action avant de décider de la suivante": "Megfigyeli egy művelet eredményét, mielőtt a következőről döntene",
        "Il poursuit un objectif plutôt que de répondre à une question": "Egy célt követ, nem egy kérdésre válaszol",
        "Il peut produire des effets réels : envoyer, écrire, supprimer": "Valódi hatásokat idézhet elő: küldhet, írhat, törölhet",
        "c'est ce qui rend le périmètre de ses outils décisif": "ettől döntő az eszközeinek hatóköre",
        "Ces cinq points sont tous caractéristiques d'un agent.": "Ez az öt pont mind az ügynökre jellemző.",
        "Bonne base. Les points restants sont également exacts.": "Jó alap. A többi pont is helyes.",
        "Les cinq caractéristiques sont exactes. Un agent, c'est bien tout cela réuni.":
            "Mind az öt jellemző helyes. Az ügynök valóban mindez együtt.",

        // --- ia / qualite-consigne ------------------------------------------------------------------
        "Passe ta consigne au crible": "Vizsgáld át az utasításodat",
        "Reprends une consigne que tu as écrite, et coche ce qui y figure vraiment.":
            "Vegyél elő egy utasítást, amelyet írtál, és jelöld be, ami tényleg benne van.",
        "Un modèle ne demande jamais de précision. Ce que la consigne ne dit pas, il le comble tout seul.":
            "Egy modell sosem kérdez vissza. Amit az utasítás nem mond ki, azt magától tölti ki.",
        "Le rôle ou le point de vue attendu est précisé": "Meg van adva a várt szerep vagy nézőpont",
        "La tâche est décrite en une phrase claire": "A feladat egyetlen világos mondatban van leírva",
        "Le format de sortie est imposé": "A kimeneti formátum elő van írva",
        "liste, tableau, longueur maximale, langue": "lista, táblázat, maximális hossz, nyelv",
        "Un ou deux exemples de ce qui est attendu sont fournis": "Egy-két példa is van arra, amit vársz",
        "l'ajout le plus efficace, presque toujours": "szinte mindig ez a leghatékonyabb kiegészítés",
        "Ce qu'il ne faut PAS faire est indiqué": "Meg van adva, mit NEM szabad csinálni",
        "La conduite à tenir en cas d'information manquante est prévue": "Meg van adva, mi a teendő, ha hiányzik egy információ",
        "sans quoi le modèle comblera le vide": "különben a modell kitölti a hézagot",
        "Plusieurs éléments manquent : le modèle devra deviner, et il devinera.":
            "Több elem hiányzik: a modellnek találgatnia kell, és találgatni is fog.",
        "Solide. Les exemples et le cas « information manquante » sont les ajouts les plus rentables.":
            "Szilárd. A példák és a „hiányzó információ” esete a legkifizetődőbb kiegészítések.",
        "Consigne complète. C'est déjà mieux que la plupart.": "Teljes utasítás. Ez már jobb a legtöbbnél.",

        // --- ia / signaux-hallucination ------------------------------------------------------------------
        "Repère une réponse à vérifier": "Ismerd fel az ellenőrizendő választ",
        "Coche ce que présente la réponse que tu as sous les yeux.": "Jelöld be, mi jellemző a válaszra, amely előtted van.",
        "Les inventions les plus dangereuses sont les plus plausibles : une référence bien formée qui n'existe pas.":
            "A legveszélyesebb kitalálások a leghihetőbbek: egy szabályos formájú hivatkozás, amely nem létezik.",
        "Elle cite une source précise — référence, article, page": "Pontos forrást idéz — hivatkozást, cikket, oldalszámot",
        "Elle donne des chiffres exacts sans indiquer d'où ils viennent": "Pontos számokat közöl anélkül, hogy megadná, honnan származnak",
        "Elle porte sur un fait récent ou daté": "Friss vagy dátumhoz kötött tényről szól",
        "Elle porte sur un sujet de niche, peu documenté": "Szűk, kevéssé dokumentált témáról szól",
        "Elle est affirmée sans la moindre nuance": "A legcsekélyebb árnyalás nélkül állítja",
        "Elle concerne une personne, un lieu ou une entreprise nommément": "Név szerint megnevezett személyre, helyre vagy cégre vonatkozik",
        "Aucun signal. La vérification reste utile pour tout ce qui t'engage.":
            "Nincs figyelmeztető jel. Az ellenőrzés továbbra is hasznos mindenhez, amiért felelősséget vállalsz.",
        "Quelques signaux. Vérifie les éléments chiffrés et les noms propres.": "Van néhány jel. Ellenőrizd a számokat és a tulajdonneveket.",
        "Réponse à vérifier avant tout usage : plusieurs facteurs de risque sont réunis.":
            "Használat előtt ellenőrizendő válasz: több kockázati tényező is összegyűlt.",

        // --- ia / cout-en-tokens ------------------------------------------------------------------------
        "Mesure le coût réel d'une conversation": "Mérd fel egy beszélgetés valódi költségét",
        "L'historique est relu à chaque tour. Ce n'est pas le dernier message qui coûte, c'est leur somme.":
            "Az előzményt minden körben újraolvassa. Nem az utolsó üzenet kerül sokba, hanem az összegük.",
        "Double le nombre de tours et le total lu quadruple à peu près : la croissance n'est pas linéaire.":
            "Kétszer annyi kör, és az elolvasott összeg nagyjából megnégyszereződik: a növekedés nem lineáris.",
        "Mots par échange (question et réponse)": "Szavak váltásonként (kérdés és válasz)",
        "Nombre d'échanges dans la conversation": "Váltások száma a beszélgetésben",
        "Prix d'entrée du modèle": "A modell bemeneti ára",
        "Jetons par échange": "Token váltásonként",
        "Total réellement lu sur la conversation": "A beszélgetés során ténylegesen elolvasott összeg",
        "Coût de la conversation": "A beszélgetés költsége",

        // --- ia / dimensionner-un-rag --------------------------------------------------------------------
        "Dimensionne une base documentaire": "Méretezz egy dokumentumbázist",
        "Avant de choisir un outil, mesure ce que tu as réellement à indexer.": "Mielőtt eszközt választasz, mérd fel, mit kell valójában indexelned.",
        "C'est précisément parce que ce volume ne tient dans aucune fenêtre que la récupération existe.":
            "Épp azért létezik a visszakeresés, mert ekkora mennyiség egyetlen ablakba sem fér bele.",
        "Nombre de documents": "Dokumentumok száma",
        "Pages par document en moyenne": "Oldalak dokumentumonként, átlagosan",
        "Taille d'un fragment": "Egy darab mérete",
        "Volume total": "Teljes mennyiség",
        "Fragments à indexer": "Indexelendő darabok",
        "Si tout était envoyé au modèle d'un coup": "Ha mindent egyszerre küldenénk el a modellnek",

        // --- ia / perimetre-outils -------------------------------------------------------------------------
        "Délimite le périmètre de ton agent": "Határold körül az ügynököd hatókörét",
        "Coche ce qui est vrai de l'agent que tu conçois.": "Jelöld be, ami igaz az általad tervezett ügynökre.",
        "Ce qu'un agent peut casser est exactement ce que ses outils permettent. Rien de plus, rien de moins.":
            "Egy ügynök pontosan azt ronthatja el, amit az eszközei lehetővé tesznek. Se többet, se kevesebbet.",
        "Chaque outil fait une chose précise et nommée": "Minden eszköz egy pontos, megnevezett dolgot csinál",
        "plutôt qu'un outil général du type « exécute cette requête »": "egy „futtasd ezt a lekérdezést” típusú általános eszköz helyett",
        "Les outils qui lisent sont séparés de ceux qui écrivent": "Az olvasó eszközök külön vannak az írásra képesektől",
        "Toute action irréversible passe par une confirmation humaine": "Minden visszafordíthatatlan művelet emberi megerősítésen megy át",
        "envoyer, supprimer, payer": "küldés, törlés, fizetés",
        "Mon code vérifie les paramètres avant d'exécuter un appel": "A kódom ellenőrzi a paramétereket, mielőtt végrehajt egy hívást",
        "le modèle propose, ton code dispose": "a modell javasol, a kódod dönt",
        "Un agent qui lit du contenu extérieur n'a pas d'outil d'envoi": "Egy külső tartalmat olvasó ügynöknek nincs küldő eszköze",
        "cloisonnement : c'est la parade à l'injection de consigne": "elkülönítés: ez a védekezés a promptinjekció ellen",
        "Les appels d'outils sont journalisés": "Az eszközhívások naplózva vannak",
        "L'agent peut aujourd'hui produire des effets que tu n'as pas prévus.": "Az ügynök jelenleg olyan hatásokat idézhet elő, amelyekre nem számítottál.",
        "Bonne architecture. La confirmation humaine et le cloisonnement sont les deux points à ne pas lâcher.":
            "Jó architektúra. Az emberi megerősítés és az elkülönítés az a két pont, amelyből nem szabad engedni.",
        "Périmètre maîtrisé : même détourné, l'agent ne peut pas faire grand-chose.":
            "Kézben tartott hatókör: az ügynök még eltérítve sem tud sok kárt tenni.",

        // --- ia / arbitrage-modele ----------------------------------------------------------------------------
        "Compare le coût mensuel de deux modèles": "Hasonlítsd össze két modell havi költségét",
        "Un écart minime par requête devient structurant à l'échelle du mois.": "Egy kérésenként apró különbség havi szinten meghatározóvá válik.",
        "La sortie coûte environ trois fois l'entrée : réduire la longueur des réponses est souvent le levier le plus rentable.":
            "A kimenet nagyjából háromszor annyiba kerül, mint a bemenet: a válaszok rövidítése gyakran a legkifizetődőbb eszköz.",
        "Requêtes par mois": "Kérések havonta",
        "Jetons d'entrée par requête": "Bemeneti token kérésenként",
        "Jetons de sortie par requête": "Kimeneti token kérésenként",
        "Modèle A — prix entrée / sortie (€/M)": "A modell — bemeneti / kimeneti ár (EUR/millió)",
        "Modèle B — prix entrée / sortie (€/M)": "B modell — bemeneti / kimeneti ár (EUR/millió)",
        "Modèle A par mois": "A modell havonta",
        "Modèle B par mois": "B modell havonta",
        "Écart annuel": "Éves különbség",

        // --- data / unités et réponses communes ------------------------------------
        "obs.": "megf.",
        "vis./j": "látog./nap",
        "exact": "helyes",
        "val.": "érték",
        "lignes": "sor",
        "critères": "szempont",
        "valeurs": "érték",

        // --- data / marge-erreur ---------------------------------------------------------
        "Calcule la marge d'erreur": "Számold ki a hibahatárt",
        "Elle dépend de la taille de l'échantillon, presque jamais de celle de la population.":
            "A minta nagyságától függ, a sokaság nagyságától szinte soha.",
        "Deux chiffres dont les intervalles se chevauchent ne peuvent pas être déclarés différents.":
            "Két szám, amelynek az intervalluma átfedi egymást, nem nyilvánítható különbözőnek.",
        "Taille de l'échantillon": "A minta nagysága",
        "Proportion mesurée": "Mért arány",
        "Marge d'erreur (95 %)": "Hibahatár (95%)",
        "La valeur réelle se situe entre": "A valódi érték tartománya",
        "Pour diviser cette marge par deux, il faudrait": "A hibahatár megfelezéséhez ennyi kellene",

        // --- data / taille-test-ab ---------------------------------------------------------
        "Dimensionne ton test A/B": "Méretezd az A/B tesztedet",
        "À décider avant de lancer. Après, il est trop tard pour savoir si le test pouvait conclure.":
            "Az indítás előtt kell eldönteni. Utána már késő megtudni, hogy a teszt adhatott-e eredményt.",
        "Détecter un effet deux fois plus petit demande quatre fois plus de trafic. C'est ce qui rend les petits gains si coûteux à prouver.":
            "Egy feleakkora hatás kimutatásához négyszer akkora forgalom kell. Ezért olyan drága a kis nyereségeket bizonyítani.",
        "Taux de conversion actuel": "Jelenlegi konverziós arány",
        "Amélioration relative visée": "Megcélzott relatív javulás",
        "Visiteurs par jour, tous groupes confondus": "Napi látogatók, az összes csoportban együtt",
        "Visiteurs nécessaires par groupe": "Szükséges látogatók csoportonként",
        "Nouveau taux visé": "Megcélzott új arány",
        "Durée du test à ce trafic": "A teszt időtartama ekkora forgalom mellett",

        // --- data / pieges-interpretation -----------------------------------------------------
        "Identifie le piège": "Ismerd fel a csapdát",
        "Coche les situations où une conclusion serait probablement fausse.": "Jelöld be azokat a helyzeteket, amelyekben egy következtetés valószínűleg hamis lenne.",
        "Aucun de ces pièges ne suppose une erreur de calcul. Les données sont justes ; c'est la lecture qui trompe.":
            "Egyik csapda sem feltételez számítási hibát. Az adatok helyesek; az olvasatuk téveszt meg.",
        "Le résultat global contredit ce qu'on observe dans chaque sous-groupe": "Az összesített eredmény ellentmond annak, amit minden alcsoportban látunk",
        "paradoxe de Simpson : vérifie la répartition": "Simpson-paradoxon: ellenőrizd a megoszlást",
        "On analyse les clients actuels pour comprendre pourquoi les gens restent": "A jelenlegi ügyfeleket elemezzük, hogy megértsük, miért maradnak az emberek",
        "biais du survivant : les partis ont la réponse": "túlélési torzítás: a távozók tudják a választ",
        "Une action a été prise après un mois exceptionnellement mauvais, et le mois suivant est meilleur":
            "Egy kivételesen rossz hónap után intézkedtünk, és a következő hónap jobb",
        "régression vers la moyenne : cela arrive sans intervention": "visszatérés az átlaghoz: beavatkozás nélkül is megtörténik",
        "Les groupes comparés ont des compositions très différentes": "Az összehasonlított csoportok összetétele nagyon eltérő",
        "L'écart observé est inférieur à la marge d'erreur": "A megfigyelt eltérés kisebb a hibahatárnál",
        "On a testé cinquante hypothèses et retenu celle qui ressortait": "Ötven hipotézist teszteltünk, és azt tartottuk meg, amelyik kiugrott",
        "sur cinquante, certaines ressortent par hasard": "ötvenből néhány véletlenül is kiugrik",
        "Ces six situations conduisent toutes à des conclusions fausses à partir de données exactes.":
            "Ez a hat helyzet mind helyes adatokból vezet hamis következtetésekre.",
        "Bonne vigilance. Les six sont en réalité des pièges classiques.": "Jó éberség. Valójában mind a hat klasszikus csapda.",
        "Les six situations sont effectivement piégeuses. Tu les reconnais toutes.": "Mind a hat helyzet valóban csapda. Mindet felismered.",

        // --- data / sante-chaine-donnees -----------------------------------------------------------
        "Audite ta chaîne de données": "Vizsgáld át az adatláncodat",
        "Coche ce qui est en place aujourd'hui.": "Jelöld be, ami ma már működik.",
        "Une donnée figée depuis trois jours est plus dangereuse qu'une donnée absente : personne ne remarque qu'elle ne bouge plus.":
            "Egy három napja befagyott adat veszélyesebb egy hiányzónál: senki sem veszi észre, hogy már nem mozdul.",
        "La date de dernière mise à jour est affichée à côté des chiffres": "Az utolsó frissítés dátuma ott van a számok mellett",
        "la protection la moins coûteuse contre la panne silencieuse": "a legolcsóbb védelem a csendes meghibásodás ellen",
        "Une alerte se déclenche si le volume reçu s'écarte de l'habitude": "Riasztás indul, ha a beérkező mennyiség eltér a szokásostól",
        "Un traitement en échec produit une alerte, pas un silence": "Egy sikertelen feldolgozás riasztást ad, nem csendet",
        "Les définitions des indicateurs sont écrites et partagées": "A mutatók definíciói le vannak írva, és mindenki ismeri őket",
        "Deux tableaux de bord différents donnent le même chiffre pour la même notion": "Két különböző irányítópult ugyanarra a fogalomra ugyanazt a számot adja",
        "Je peux remonter d'un chiffre affiché jusqu'à sa source": "Egy megjelenített számtól vissza tudok jutni a forrásáig",
        "Un incident en amont produirait aujourd'hui un tableau de bord faux et crédible.":
            "Egy korábbi lépésben történt hiba ma hamis, de hihető irányítópultot eredményezne.",
        "Correct. L'alerte sur le volume est le contrôle au meilleur rapport effort-utilité.":
            "Elfogadható. A mennyiségre beállított riasztás a legjobb ráfordítás-haszon arányú ellenőrzés.",
        "Chaîne surveillée : une anomalie sera vue avant qu'une décision soit prise dessus.":
            "Felügyelt lánc: egy rendellenességet még azelőtt észrevesznek, hogy döntés születne rá alapozva.",

        // --- data / qualite-kpi ------------------------------------------------------------------------
        "Ton indicateur est-il utile ?": "Hasznos a mutatód?",
        "Prends un indicateur que tu suis, et coche ce qui est vrai.": "Válassz egy mutatót, amelyet követsz, és jelöld be, ami igaz rá.",
        "Si personne ne change rien quand un chiffre bouge, ce chiffre n'est pas un indicateur : c'est une décoration.":
            "Ha senki sem változtat semmin, amikor egy szám elmozdul, az a szám nem mutató, hanem dísz.",
        "Je sais quoi faire différemment s'il double demain": "Tudom, mit csinálnék másképp, ha holnap megduplázódna",
        "le test décisif : sinon, il occupe de la place pour rien": "ez a döntő próba: különben csak helyet foglal",
        "Il a un point de comparaison : période précédente, objectif ou groupe témoin": "Van viszonyítási pontja: előző időszak, cél vagy kontrollcsoport",
        "Sa définition est écrite et n'a pas changé depuis six mois": "A definíciója le van írva, és hat hónapja nem változott",
        "Sa fréquence de suivi correspond à sa vitesse d'évolution": "A követés gyakorisága megfelel a változás sebességének",
        "Il est accompagné de son effectif, pas seulement d'un pourcentage": "Az elemszám is ott van mellette, nem csak egy százalék",
        "Quelqu'un est nommément responsable de le regarder": "Valaki név szerint felelős azért, hogy figyelje",
        "Cet indicateur donne surtout l'illusion du pilotage.": "Ez a mutató főleg az irányítás illúzióját kelti.",
        "Bonne base. La définition écrite est le point qui manque le plus souvent.": "Jó alap. A leírt definíció hiányzik a leggyakrabban.",
        "Indicateur solide : il peut réellement déclencher une décision.": "Szilárd mutató: valóban kiválthat egy döntést.",

        // --- data / qualite-collecte ----------------------------------------------------------------------
        "Tes données disent-elles ce que tu crois ?": "Azt mondják az adataid, amit gondolsz?",
        "Coche ce qui est vrai de la façon dont ces données ont été recueillies.": "Jelöld be, ami igaz arra, ahogyan ezeket az adatokat gyűjtötték.",
        "Aucun traitement statistique ne rattrape une collecte biaisée. Il la rend seulement plus présentable.":
            "Semmilyen statisztikai feldolgozás nem hozza helyre a torzított adatgyűjtést. Csak szalonképesebbé teszi.",
        "Je sais qui a été mesuré, et qui ne l'a pas été": "Tudom, kit mértek meg, és kit nem",
        "les absents faussent plus que les présents": "a hiányzók jobban torzítanak, mint a jelenlévők",
        "La collecte est automatique, ou le questionnaire est identique pour tous": "Az adatgyűjtés automatikus, vagy a kérdőív mindenkinek ugyanaz",
        "Les personnes mesurées ne savaient pas qu'on cherchait ce résultat": "A megmért emberek nem tudták, hogy ezt az eredményt keresik",
        "sinon leur comportement change": "különben megváltozik a viselkedésük",
        "La période couverte est représentative": "A lefedett időszak reprezentatív",
        "pas seulement les soldes, ou un mois avec deux jours fériés": "nem csak a leárazások ideje, vagy egy hónap két ünnepnappal",
        "Je connais le taux de réponse ou de couverture": "Ismerem a válaszadási vagy lefedettségi arányt",
        "Les définitions n'ont pas changé pendant la période": "A definíciók nem változtak az időszak alatt",
        "Les données décrivent peut-être une population différente de celle visée.":
            "Az adatok talán nem azt a sokaságot írják le, amelyet célba vettél.",
        "Acceptable. Note les réserves à côté du résultat plutôt que de les oublier.":
            "Elfogadható. Írd az eredmény mellé a fenntartásokat, ahelyett hogy elfelejtenéd őket.",
        "Collecte saine : les chiffres portent bien sur ce que tu crois.": "Rendben lévő adatgyűjtés: a számok valóban arra vonatkoznak, amire gondolsz.",

        // --- data / choisir-son-graphique ----------------------------------------------------------------------
        "Le bon graphique pour la bonne question": "A megfelelő diagram a megfelelő kérdéshez",
        "Coche les associations exactes. Quatre le sont.": "Jelöld be a helyes párosításokat. Négy ilyen van.",
        "Un axe vertical qui ne part pas de zéro n'est pas toujours malhonnête — mais il doit toujours être signalé.":
            "A nem nulláról induló függőleges tengely nem mindig tisztességtelen — de mindig jelezni kell.",
        "Comparer des catégories → barres": "Kategóriák összehasonlítása → oszlopok",
        "Suivre une évolution dans le temps → courbe": "Időbeli alakulás követése → vonaldiagram",
        "Montrer une répartition en parts d'un tout → camembert, si peu de parts": "Egy egész részekre bontása → kördiagram, ha kevés a rész",
        "exact, au-delà de cinq parts il devient illisible": "helyes, öt rész fölött olvashatatlanná válik",
        "Comparer des catégories → camembert": "Kategóriák összehasonlítása → kördiagram",
        "faux : l'œil compare mal des angles": "hamis: a szem rosszul hasonlítja össze a szögeket",
        "Montrer une relation entre deux variables → nuage de points": "Két változó kapcsolatának bemutatása → pontdiagram",
        "Faire paraître une hausse plus forte → tronquer l'axe vertical": "Egy emelkedés erősebbnek mutatása → a függőleges tengely levágása",
        "faux : c'est la manipulation la plus répandue": "hamis: ez a legelterjedtebb manipuláció",
        "Quatre de ces six associations sont exactes.": "A hat párosítás közül négy helyes.",
        "Quatre associations sont exactes. Vérifie avec les indications que ce sont les tiennes.":
            "Négy párosítás helyes. A magyarázatok alapján ellenőrizd, hogy azokat jelölted-e.",
        "Plus de quatre : deux de ces propositions sont fausses.": "Négynél több: ezek közül két állítás hamis.",

        // --- data / effet-valeur-extreme --------------------------------------------------------------------------
        "Vois une valeur extrême déformer la moyenne": "Nézd meg, hogyan torzítja egy szélsőérték az átlagot",
        "C'est la raison pour laquelle la médiane existe.": "Ezért létezik a medián.",
        "La médiane ne bouge pas d'un centime. C'est pourquoi on la préfère dès qu'il existe des valeurs extrêmes — salaires, paniers, temps de réponse.":
            "A medián egy centet sem mozdul. Ezért részesítik előnyben, amint szélsőértékek vannak — fizetések, kosárértékek, válaszidők.",
        "Nombre de valeurs ordinaires": "Szokásos értékek száma",
        "Valeur ordinaire": "Szokásos érték",
        "Valeur extrême ajoutée": "Hozzáadott szélsőérték",
        "Moyenne sans la valeur extrême": "Átlag a szélsőérték nélkül",
        "Moyenne avec la valeur extrême": "Átlag a szélsőértékkel",
        "Médiane (inchangée)": "Medián (változatlan)",

        // --- data / impact-du-nettoyage -----------------------------------------------------------------------------
        "Combien de lignes restera-t-il ?": "Hány sor marad?",
        "Le chiffre à retenir n'est pas la taille du fichier, c'est la taille de ce qui est exploitable.":
            "Nem a fájl mérete a megjegyzendő szám, hanem a használható rész mérete.",
        "Le problème n'est jamais d'avoir perdu des lignes. C'est de présenter un résultat en laissant croire qu'il porte sur le fichier entier.":
            "A gond sosem az, hogy sorok vesztek el. Hanem az, ha úgy mutatsz be egy eredményt, mintha az egész fájlra vonatkozna.",
        "Lignes dans le fichier": "Sorok a fájlban",
        "Part de doublons": "Ismétlődések aránya",
        "Part des lignes restantes avec une valeur manquante essentielle": "A megmaradt sorok aránya, amelyekből nélkülözhetetlen érték hiányzik",
        "Après suppression des doublons": "Az ismétlődések törlése után",
        "Lignes réellement exploitables": "Ténylegesen használható sorok",
        "Part du fichier de départ": "A kiinduló fájl hányada",

        // --- data / taille-des-segments ----------------------------------------------------------------------------------
        "Tes segments sont-ils assez fournis ?": "Elég nagyok a szegmenseid?",
        "Découper indéfiniment finit par produire du bruit qu'on prend pour du signal.": "A végtelen darabolás végül zajt termel, amelyet jelnek nézünk.",
        "Quand une observation déplace le pourcentage de plusieurs points, le segment ne mesure plus rien d'autre que lui-même.":
            "Ha egyetlen megfigyelés több százalékponttal mozdítja el az arányt, a szegmens már csak önmagát méri.",
        "Population totale": "Teljes sokaság",
        "Nombre de critères croisés": "Kombinált szempontok száma",
        "Valeurs possibles par critère": "Lehetséges értékek szempontonként",
        "Segments produits": "Létrejött szegmensek",
        "Observations par segment en moyenne": "Megfigyelések szegmensenként, átlagosan",
        "Une seule observation fait bouger le taux de": "Egyetlen megfigyelés ennyivel mozdítja el az arányt",

        // --- data / correlation-causalite ---------------------------------------------------------------------------------
        "Avant de conclure « A cause B »": "Mielőtt kimondanád: „A okozza B-t”",
        "Passe ta corrélation au crible : coche ce que tu as réellement vérifié.": "Vizsgáld át a korrelációdat: jelöld be, amit ténylegesen ellenőriztél.",
        "Le danger n'est pas la corrélation absurde, qui se repère. C'est celle à laquelle on peut donner une explication crédible.":
            "Nem az abszurd korreláció a veszélyes, azt észrevesszük. Hanem az, amelyre hihető magyarázatot lehet adni.",
        "J'ai envisagé que B cause A": "Megfontoltam, hogy B okozza A-t",
        "le sens inverse est souvent aussi plausible": "a fordított irány gyakran ugyanolyan valószínű",
        "J'ai cherché une troisième variable qui causerait les deux": "Kerestem egy harmadik változót, amely mindkettőt okozhatja",
        "le cas le plus fréquent, et de loin": "messze ez a leggyakoribb eset",
        "J'ai vérifié que A précède bien B dans le temps": "Ellenőriztem, hogy A időben valóban megelőzi B-t",
        "L'effet persiste quand je segmente la population": "A hatás megmarad, amikor szegmentálom a sokaságot",
        "Je n'ai pas comparé des dizaines d'indicateurs pour trouver celui-ci": "Nem tucatnyi mutatót hasonlítottam össze, hogy ezt megtaláljam",
        "sur cent comparaisons, certaines coïncident par hasard": "száz összehasonlításból néhány véletlenül is egybeesik",
        "Une expérimentation a été menée, ou est prévue": "Kísérletet végeztünk, vagy tervezünk",
        "la seule méthode qui établisse vraiment la causalité": "az egyetlen módszer, amely valóban igazolja az ok-okozatiságot",
        "À ce stade, tu as une corrélation et une histoire plausible. Pas une cause.": "Ezen a ponton van egy korrelációd és egy hihető történeted. Ok nincs.",
        "Il manque des vérifications. La variable confondante est celle qu'on oublie le plus.":
            "Hiányoznak ellenőrzések. A zavaró változót felejtik el a leggyakrabban.",
        "Hypothèse sérieusement instruite. Reste que seule l'expérimentation tranche.":
            "Alaposan megvizsgált hipotézis. De dönteni csak a kísérlet tud.",

        // --- data / tableau-de-bord-utile ------------------------------------------------------------------------------------
        "Passe ton tableau de bord au crible": "Vizsgáld át az irányítópultodat",
        "Coche ce qui est vrai du tableau de bord que tu as sous les yeux.": "Jelöld be, ami igaz az előtted lévő irányítópultra.",
        "Un tableau de bord se juge au nombre de décisions qu'il a déclenchées, pas au nombre de graphiques.":
            "Egy irányítópultot az általa kiváltott döntések száma alapján ítélünk meg, nem a diagramok száma alapján.",
        "Chaque indicateur passe le test « si ce nombre doublait, que ferais-je ? »":
            "Minden mutató kiállja a „ha ez a szám megduplázódna, mit tennék?” próbát",
        "Aucun chiffre n'est affiché sans point de comparaison": "Egyetlen szám sem jelenik meg viszonyítási pont nélkül",
        "La date de dernière mise à jour est visible": "Látható az utolsó frissítés dátuma",
        "Les effectifs accompagnent les pourcentages": "A százalékok mellett ott vannak az elemszámok",
        "Sur les mesures de qualité, une valeur extrême est affichée en plus de la moyenne": "A minőségi méréseknél az átlag mellett egy szélsőérték is megjelenik",
        "le neuvième décile en dit plus que la moyenne": "a kilencedik decilis többet mond az átlagnál",
        "Il tient sur un écran sans défilement": "Görgetés nélkül elfér egy képernyőn",
        "Ce tableau sera consulté deux semaines, puis oublié.": "Ezt az irányítópultot két hétig nézik majd, aztán elfelejtik.",
        "Bon niveau. La date de mise à jour est le manque le plus dangereux.": "Jó szint. A frissítés dátumának hiánya a legveszélyesebb.",
        "Tableau de bord exploitable : il sert à décider, pas à rassurer.": "Használható irányítópult: döntéshez való, nem megnyugtatáshoz.",

        // --- design -----------------------------------------------------------
        "UX ou UI ?": "UX vagy UI?",
        "Coche les décisions qui relèvent de l'UX plutôt que de l'UI. Quatre le sont.": "Jelöld be azokat a döntéseket, amelyek inkább az UX-hez tartoznak, mint az UI-hoz. Négy ilyen van.",
        "L'UI se voit, l'UX se vit. Une interface superbe sur un parcours absurde reste inutilisable.": "Az UI-t látjuk, az UX-et átéljük. Egy pompás felület egy abszurd folyamaton használhatatlan marad.",
        "Décider de l'ordre des étapes d'une inscription": "Eldönteni a regisztráció lépéseinek sorrendjét",
        "UX : c'est le parcours": "UX: ez a folyamat",
        "Choisir la couleur du bouton principal": "Kiválasztani a fő gomb színét",
        "UI : c'est l'apparence": "UI: ez a megjelenés",
        "Déterminer quelles informations demander, et lesquelles supprimer": "Meghatározni, milyen adatokat kérjünk, és melyeket hagyjunk el",
        "UX": "UX",
        "Définir l'échelle typographique": "Meghatározni a tipográfiai skálát",
        "UI": "UI",
        "Comprendre pourquoi les gens abandonnent au paiement": "Megérteni, miért adják fel az emberek a fizetésnél",
        "Décider qu'une erreur s'affiche sous le champ concerné plutôt qu'en haut": "Eldönteni, hogy a hiba az érintett mező alatt jelenjen meg, ne az oldal tetején",
        "UX : cela change la capacité à corriger": "UX: ettől függ, ki tudja-e javítani",
        "Quatre de ces six décisions relèvent de l'UX.": "E hat döntés közül négy az UX-hez tartozik.",
        "Quatre décisions relèvent de l'UX. Vérifie avec les indications que ce sont les tiennes.": "Négy döntés tartozik az UX-hez. Ellenőrizd a megjegyzések alapján, hogy ezeket jelölted-e be.",
        "Plus de quatre : deux de ces décisions portent sur l'apparence, pas sur le parcours.": "Négynél több: ezek közül kettő a megjelenésről szól, nem a folyamatról.",
        "Ton wireframe est-il utile ?": "Hasznos a drótvázad?",
        "Coche ce qui est vrai de la maquette fil de fer que tu as sous les yeux.": "Jelöld be, ami igaz az előtted lévő drótvázra.",
        "Un wireframe trop soigné ne reçoit plus de critiques de structure : il paraît déjà décidé.": "A túl gondosan kidolgozott drótváz már nem kap szerkezeti kritikát: eldöntöttnek látszik.",
        "Il est en niveaux de gris, sans couleur ni image finale": "Szürkeárnyalatos, szín és végleges képek nélkül",
        "sinon la discussion glisse vers l'esthétique": "különben a beszélgetés az esztétika felé csúszik",
        "Le contenu est réaliste, pas du faux texte": "A tartalom valószerű, nem kitöltő szöveg",
        "un titre réel fait trois lignes, le faux texte en fait une": "egy valódi cím három sor, a kitöltő szöveg egy",
        "La hiérarchie des éléments est visible sans explication": "Az elemek hierarchiája magyarázat nélkül is látszik",
        "Les états vides, en cours de chargement et en erreur sont prévus": "Az üres, a betöltés alatti és a hibaállapot is meg van tervezve",
        "Il montre un parcours, pas un écran isolé": "Egy folyamatot mutat, nem egy magányos képernyőt",
        "Il est assez grossier pour qu'on ose le critiquer": "Elég nyers ahhoz, hogy merjék kritizálni",
        "trop léché, il paraît définitif et n'est plus discuté": "ha túl kidolgozott, véglegesnek látszik, és már nem vitatják",
        "Cette maquette va produire des retours sur l'apparence, pas sur le fond.": "Ez a terv a megjelenésről fog visszajelzéseket kapni, nem a lényegről.",
        "Bonne base. Les états d'erreur et de chargement sont les grands oubliés.": "Jó alap. A hiba- és a betöltési állapotokról feledkeznek meg a leggyakrabban.",
        "Wireframe efficace : il fait parler de structure, pas de couleurs.": "Hatékony drótváz: a szerkezetről indít beszélgetést, nem a színekről.",
        "Teste ta hiérarchie visuelle": "Teszteld a vizuális hierarchiádat",
        "Plisse les yeux devant ton écran jusqu'à le voir flou, puis coche.": "Hunyorogj a képernyőd előtt, amíg homályossá nem válik, aztán jelölj.",
        "Si tout est mis en avant, plus rien ne l'est. Une hiérarchie suppose d'accepter que certaines choses passent au second plan.": "Ha minden ki van emelve, semmi sincs. A hierarchia azt jelenti, hogy elfogadod: bizonyos dolgok háttérbe szorulnak.",
        "Je distingue encore l'élément le plus important": "Még ki tudom venni a legfontosabb elemet",
        "L'action principale se repère sans lire": "A fő művelet olvasás nélkül is felismerhető",
        "Les zones se détachent les unes des autres": "A zónák elválnak egymástól",
        "Rien ne rivalise avec l'élément principal": "Semmi sem versenyez a fő elemmel",
        "deux éléments également saillants s'annulent": "két egyformán kiugró elem kioltja egymást",
        "Le regard suit un ordre naturel du haut vers le bas": "A tekintet természetes sorrendben halad fentről lefelé",
        "Les espaces séparent ce qui doit l'être et rapprochent ce qui va ensemble": "A térközök elválasztják, aminek külön kell lennie, és közelítik, ami összetartozik",
        "L'écran demande d'être lu entièrement pour être compris.": "A képernyőt végig kell olvasni ahhoz, hogy érthető legyen.",
        "Correct. Vérifie surtout qu'un seul élément domine.": "Rendben. Főleg azt ellenőrizd, hogy egyetlen elem domináljon.",
        "Hiérarchie lisible : l'écran se comprend avant d'être lu.": "Olvasható hierarchia: a képernyő már olvasás előtt érthető.",
        "Combien de testeurs faut-il ?": "Hány tesztelő kell?",
        "La réponse surprend : bien moins qu'on ne croit, et les premiers rapportent presque tout.": "A válasz meglepő: sokkal kevesebb, mint gondolnánk, és az első néhány szinte mindent feltár.",
        "Mieux vaut trois séries de cinq tests à trois moments du projet qu'une seule série de quinze à la fin.": "Jobb három ötös tesztsorozat a projekt három pontján, mint egyetlen tizenötös sorozat a végén.",
        "Nombre de participants": "Résztvevők száma",
        "Part des problèmes qu'un participant révèle en moyenne": "Egy résztvevő által átlagosan feltárt problémák aránya",
        "Problèmes détectés": "Feltárt problémák",
        "Apport du participant suivant": "A következő résztvevő hozzájárulása",
        "Problèmes encore invisibles": "Még láthatatlan problémák",
        "Audit d'accessibilité en dix minutes": "Akadálymentességi audit tíz perc alatt",
        "Ces vérifications ne demandent aucun outil spécialisé.": "Ezekhez az ellenőrzésekhez nem kell semmilyen speciális eszköz.",
        "Cinq minutes de navigation au clavier révèlent l'essentiel des problèmes, sans aucun outil.": "Öt perc billentyűzetes navigáció feltárja a problémák többségét, eszköz nélkül.",
        "Le contraste du texte atteint 4,5 pour 1 sur fond uni": "A szöveg kontrasztja egyszínű háttéren eléri a 4,5:1-et",
        "3 pour 1 suffit pour les grands titres": "nagy címeknél a 3:1 is elég",
        "Je peux parcourir tout le site au clavier seul, sans souris": "Az egész oldalt be tudom járni csak billentyűzettel, egér nélkül",
        "L'élément actif au clavier est visible en permanence": "A billentyűzettel aktív elem mindig látható",
        "ne jamais supprimer le contour de focus": "soha ne távolítsd el a fókuszkeretet",
        "Les images porteuses d'information ont une description": "Az információt hordozó képeknek van leírásuk",
        "Les images décoratives sont marquées comme telles": "A díszítő képek díszítőként vannak jelölve",
        "Les boutons tactiles font au moins 44 pixels de côté": "Az érintőgombok oldala legalább 44 képpont",
        "L'information n'est jamais portée par la couleur seule": "Az információt soha nem csak a szín hordozza",
        "un champ en erreur doit aussi porter un texte": "egy hibás mezőnek szöveget is kell mutatnia",
        "Plusieurs obstacles bloquants subsistent, y compris pour des usages ordinaires.": "Több blokkoló akadály is maradt, a hétköznapi használatban is.",
        "Bon niveau. Le parcours au clavier est le test le plus révélateur s'il manque.": "Jó szint. Ha a billentyűzetes bejárás hiányzik, az a legárulkodóbb próba.",
        "Base solide : l'essentiel des obstacles courants est levé.": "Szilárd alap: a gyakori akadályok többsége elhárult.",
        "Ta navigation tient-elle debout ?": "Megáll a lábán a navigációd?",
        "Coche ce qui est vrai du menu que tu as sous les yeux.": "Jelöld be, ami igaz az előtted lévő menüre.",
        "Un menu construit sur l'organigramme est parfaitement logique de l'intérieur, et opaque de l'extérieur.": "A szervezeti ábrára épülő menü belülről tökéletesen logikus, kívülről átláthatatlan.",
        "Les entrées correspondent à des tâches, pas à l'organigramme": "A menüpontok feladatoknak felelnek meg, nem a szervezeti ábrának",
        "Un visiteur découvrant le site devinerait ce qu'il y a derrière chaque libellé": "Egy új látogató kitalálná, mi van az egyes feliratok mögött",
        "Aucun libellé n'utilise de vocabulaire interne à la maison": "Egyik felirat sem használ belső szakzsargont",
        "Il y a moins de huit entrées de premier niveau": "Nyolcnál kevesebb első szintű menüpont van",
        "au-delà, il faut regrouper": "ezen felül csoportosítani kell",
        "Deux entrées ne peuvent pas être confondues": "Nincs két összetéveszthető menüpont",
        "« Espace client » et « Mon compte » sur le même site": "„Ügyfélfelület” és „Fiókom” ugyanazon az oldalon",
        "L'organisation a été vérifiée auprès de personnes extérieures": "A felépítést kívülállókkal is ellenőrizték",
        "Cette navigation est probablement claire pour toi seul.": "Ez a navigáció valószínűleg csak neked világos.",
        "Correct. Le test auprès d'extérieurs est celui qui révèle le plus.": "Rendben. A kívülállókkal végzett próba tárja fel a legtöbbet.",
        "Navigation construite du point de vue du visiteur. C'est rare.": "A látogató szemszögéből épített navigáció. Ritka az ilyen.",
        "Tes cibles tactiles sont-elles assez grandes ?": "Elég nagyok az érintési célpontjaid?",
        "Un doigt couvre environ 9 millimètres. Les pixels CSS, eux, ne se voient pas.": "Egy ujj nagyjából 9 millimétert fed le. A CSS-képpontokat viszont nem látni.",
        "Une cible trop petite ne produit pas une erreur du concepteur : elle produit un utilisateur qui croit s'être trompé.": "A túl kicsi célpont nem a tervező hibájaként jelenik meg, hanem egy felhasználóként, aki azt hiszi, ő tévedett.",
        "Taille de la cible": "A célpont mérete",
        "px CSS": "CSS px",
        "Espacement avec la cible voisine": "Távolság a szomszédos célponttól",
        "Taille réelle sur l'écran": "Valós méret a képernyőn",
        "Zone atteignable avec l'espacement": "Elérhető zóna a térközzel együtt",
        "Recommandation (44 px, soit 11,6 mm)": "Ajánlás (44 px, azaz 11,6 mm)",
        "conforme": "megfelelő",
        "limite": "határeset",
        "trop petite": "túl kicsi",
        "Ton système de design tient-il ?": "Tartja magát a design-rendszered?",
        "Coche ce qui est vrai aujourd'hui, pas ce qui était prévu.": "Azt jelöld be, ami ma igaz, ne azt, ami a terv volt.",
        "Un système de design est un produit à part entière. Sans quelqu'un pour l'arbitrer, il ne survit pas.": "A design-rendszer önálló termék. Ha nincs, aki döntsön róla, nem marad életben.",
        "Les espacements suivent une échelle définie, pas des valeurs libres": "A térközök rögzített skálát követnek, nem szabad értékeket",
        "Il existe une seule façon d'afficher une erreur": "Egyetlen módja van egy hiba megjelenítésének",
        "Les couleurs sont nommées par leur rôle, pas par leur teinte": "A színek a szerepükről kapják a nevüket, nem az árnyalatukról",
        "« couleur de danger » plutôt que « rouge »": "„veszélyszín” a „piros” helyett",
        "La documentation décrit le produit réel, pas une version passée": "A dokumentáció a valódi terméket írja le, nem egy korábbi változatot",
        "Quelqu'un est responsable d'arbitrer les exceptions": "Valaki felel a kivételekről való döntésért",
        "Une exception acceptée est soit intégrée, soit corrigée": "Egy elfogadott kivételt vagy beépítenek, vagy kijavítanak",
        "jamais laissée vivre à côté": "soha nem hagyják mellette élni",
        "Ce système décrit probablement déjà un produit qui n'existe plus.": "Ez a rendszer valószínűleg már egy nem létező terméket ír le.",
        "Correct. L'absence de propriétaire est ce qui tue les systèmes en quelques mois.": "Rendben. A gazda hiánya az, ami néhány hónap alatt megöli a rendszereket.",
        "Système vivant : il ferme réellement des questions.": "Élő rendszer: valóban lezár kérdéseket.",
        "Calcule ton budget de performance": "Számold ki a teljesítménykeretedet",
        "Le poids d'une page se traduit directement en secondes d'attente.": "Egy oldal súlya egyenesen másodpercnyi várakozásban mérhető.",
        "La liste des éléments à alléger est presque toujours dominée par les images non compressées.": "A könnyítendő elemek listáját szinte mindig a tömörítetlen képek uralják.",
        "Poids total de la page": "Az oldal teljes súlya",
        "Ko": "kB",
        "Débit de la connexion": "A kapcsolat sávszélessége",
        "Mb/s": "Mb/s",
        "Latence aller-retour": "Oda-vissza késleltetés",
        "ms": "ms",
        "Temps de chargement estimé": "Becsült betöltési idő",
        "Poids à retirer pour passer sous 1 s": "Elhagyandó súly az 1 mp alá kerüléshez",
        "Perception": "Észlelés",
        "sous la seconde : le fil de la pensée n'est pas rompu": "egy másodperc alatt: a gondolatmenet nem szakad meg",
        "perceptible, mais acceptable": "érzékelhető, de elfogadható",
        "un retour de progression devient nécessaire": "haladásjelzőre van szükség",
        "au-delà de la limite d'attention : la plupart abandonnent": "túl a figyelem határán: a legtöbben feladják",
        "Décider, ou chercher : deux coûts différents": "Dönteni vagy keresni: két különböző költség",
        "La loi de Hick décrit le choix entre des options <strong>déjà connues</strong>. Trouver une option inconnue relève du balayage visuel, dont le coût est tout autre.": "Hick törvénye a <strong>már ismert</strong> lehetőségek közötti választást írja le. Egy ismeretlen lehetőség megtalálása vizuális pásztázás, amelynek egészen más a költsége.",
        "Sur une option déjà connue, regrouper fait perdre un peu de temps. Sur une option qu'il faut trouver, le gain est considérable — et c'est le cas d'un visiteur qui découvre le site.": "Egy már ismert lehetőségnél a csoportosítás egy kis időveszteség. Egy megkeresendő lehetőségnél a nyereség jelentős — és ez a helyzet annál a látogatónál, aki most ismerkedik az oldallal.",
        "Nombre d'options présentées": "A felkínált lehetőségek száma",
        "options": "lehetőség",
        "Nombre de familles si tu les regroupes": "A csoportok száma, ha csoportosítod őket",
        "familles": "csoport",
        "Décider (Hick) — liste plate": "Döntés (Hick) — lapos lista",
        "Chercher — liste plate": "Keresés — lapos lista",
        "Repère les schémas sombres": "Keresd meg a sötét mintákat",
        "Coche ce que présente l'interface que tu examines.": "Jelöld be, amit a vizsgált felület mutat.",
        "Le test qui tranche : si l'utilisateur découvrait ce mécanisme, se sentirait-il floué ? L'intention ne change rien.": "A döntő próba: ha a felhasználó rájönne erre a mechanizmusra, becsapva érezné magát? A szándék semmin sem változtat.",
        "« Tout accepter » est plus visible que le refus": "Az „Összes elfogadása” feltűnőbb, mint az elutasítás",
        "non conforme : le refus doit être aussi facile": "nem felel meg az előírásoknak: az elutasításnak ugyanolyan könnyűnek kell lennie",
        "La résiliation est nettement plus longue que la souscription": "A lemondás jóval hosszabb, mint a feliratkozás",
        "non conforme au droit français": "fogyasztóvédelmi szempontból kifogásolható",
        "Des frais apparaissent seulement à la fin du tunnel": "Díjak csak a vásárlási folyamat végén jelennek meg",
        "Le libellé du refus est rédigé pour être désagréable": "Az elutasító feliratot úgy fogalmazták meg, hogy kellemetlen legyen",
        "« Non merci, je préfère payer plus cher »": "„Nem, köszönöm, inkább többet fizetek”",
        "Un compte à rebours ou une rareté sont affichés sans fondement": "Alaptalan visszaszámláló vagy készlethiány jelenik meg",
        "Une case est pré-cochée en faveur du site": "Egy négyzet előre be van jelölve az oldal javára",
        "Aucun schéma repéré. Refais le test après chaque évolution du tunnel.": "Nem találtál sötét mintát. Ismételd meg a próbát a vásárlási folyamat minden módosítása után.",
        "Des pratiques à corriger, dont certaines exposent juridiquement.": "Javítandó gyakorlatok, amelyek közül néhány jogi kockázatot is jelent.",
        "Faisceau de pratiques trompeuses : plusieurs sont sanctionnées en droit européen.": "Megtévesztő gyakorlatok halmaza: közülük többet az európai jog szankcionál.",
        "Chiffre ton amélioration en heures": "Számold ki órában a javításodat",
        "L'argument esthétique se discute. Le calcul beaucoup moins.": "Az esztétikai érvről lehet vitatkozni. A számításról sokkal kevésbé.",
        "Cinq secondes ne se défendent pas en réunion. Cent quatre-vingts heures par an, si.": "Öt másodpercet nem lehet megvédeni egy értekezleten. Évi száznyolcvan órát igen.",
        "Secondes gagnées par tâche": "Feladatonként megtakarított másodperc",
        "Fois par jour et par personne": "Hányszor naponta, fejenként",
        "Personnes concernées": "Érintett személyek",
        "Jours d'usage par an": "Használati napok évente",
        "jours": "nap",
        "Temps gagné par an": "Évente megtakarított idő",
        "Soit en journées de travail": "Munkanapban kifejezve",
        "Par personne et par an": "Fejenként, évente",

        // --- dev-web ----------------------------------------------------------
        "Ton HTML a-t-il du sens ?": "Van értelme a HTML-ednek?",
        "Coche ce qui est vrai de la page que tu as sous les yeux.": "Jelöld be, ami igaz az előtted lévő oldalra.",
        "Le bon élément HTML apporte gratuitement l'accessibilité et le comportement clavier. Une division n'apporte rien.": "A megfelelő HTML-elem ingyen hozza az akadálymentességet és a billentyűzetes működést. Egy div semmit sem hoz.",
        "Un seul titre de niveau 1 par page": "Oldalanként egyetlen elsőszintű cím",
        "Les niveaux de titre se suivent sans sauter de rang": "A címszintek szint kihagyása nélkül követik egymást",
        "pas de h4 juste après un h2": "nincs h4 közvetlenül egy h2 után",
        "La navigation est dans un élément dédié, pas dans une division quelconque": "A navigáció erre szolgáló elemben van, nem egy tetszőleges div-ben",
        "Les boutons qui déclenchent une action sont des boutons, pas des liens": "A műveletet indító gombok valóban gombok, nem hivatkozások",
        "Chaque champ de formulaire a une étiquette qui lui est liée": "Minden űrlapmezőhöz tartozik egy hozzá kapcsolt címke",
        "Les images informatives ont un texte de remplacement": "Az információt hordozó képeknek van helyettesítő szövegük",
        "Cette page se comprend visuellement, mais pas structurellement.": "Ez az oldal vizuálisan érthető, szerkezetileg nem.",
        "Bonne base. Les étiquettes de formulaire sont le manque le plus fréquent.": "Jó alap. Az űrlapcímkék hiányoznak a leggyakrabban.",
        "Structure saine : lisible par un lecteur d'écran comme par un moteur de recherche.": "Egészséges szerkezet: egy képernyőolvasó és egy keresőmotor is el tudja olvasni.",
        "CSS ou JavaScript ?": "CSS vagy JavaScript?",
        "Coche ce qui se fait aujourd'hui en CSS seul. Quatre réponses.": "Jelöld be, amit ma már csak CSS-sel meg lehet oldani. Négy válasz.",
        "Ce qui se fait en CSS fonctionne même si le JavaScript échoue à charger. C'est une robustesse gratuite.": "Ami CSS-sel készül, akkor is működik, ha a JavaScript nem töltődik be. Ez ingyen robusztusság.",
        "Afficher ou masquer un menu déroulant au survol": "Egy legördülő menü megjelenítése vagy elrejtése rámutatáskor",
        "CSS suffit": "elég a CSS",
        "Animer une transition de couleur ou de taille": "Szín- vagy méretváltozás animálása",
        "CSS, et c'est plus fluide": "CSS, és így gördülékenyebb",
        "Adapter la mise en page à la largeur de l'écran": "Az elrendezés igazítása a képernyő szélességéhez",
        "CSS": "CSS",
        "Envoyer un formulaire sans recharger la page": "Űrlap elküldése az oldal újratöltése nélkül",
        "JavaScript nécessaire": "JavaScript szükséges",
        "Coller un en-tête en haut de l'écran au défilement": "Egy fejléc rögzítése a képernyő tetején görgetéskor",
        "Calculer un total à partir de champs saisis": "Végösszeg kiszámítása kitöltött mezőkből",
        "Quatre de ces six tâches se font en CSS seul.": "E hat feladat közül négy megoldható csak CSS-sel.",
        "Quatre réponses en CSS. Vérifie avec les indications que ce sont bien celles-là.": "Négy CSS-es válasz. Ellenőrizd a megjegyzések alapján, hogy valóban ezek azok.",
        "Plus de quatre : deux de ces tâches demandent réellement du JavaScript.": "Négynél több: ezek közül kettőhöz valóban JavaScript kell.",
        "Navigateur ou serveur ?": "Böngésző vagy szerver?",
        "Coche ce qui DOIT être fait côté serveur, sans exception.": "Jelöld be, amit KÖTELEZŐ a szerveroldalon elvégezni, kivétel nélkül.",
        "Tout ce qui protège quelque chose se vérifie côté serveur. Le navigateur appartient à l'utilisateur.": "Mindent, ami valamit véd, a szerveroldalon kell ellenőrizni. A böngésző a felhasználóé.",
        "Vérifier qu'un utilisateur a le droit d'accéder à une donnée": "Ellenőrizni, hogy egy felhasználó hozzáférhet-e egy adathoz",
        "toujours côté serveur": "mindig a szerveroldalon",
        "Vérifier qu'un champ est bien rempli avant envoi": "Küldés előtt ellenőrizni, hogy egy mező ki van-e töltve",
        "côté navigateur pour le confort — mais le serveur doit revérifier": "a böngészőben a kényelem kedvéért — de a szervernek újra ellenőriznie kell",
        "Calculer le prix final d'une commande": "Kiszámítani egy rendelés végső árát",
        "serveur : sinon le prix se modifie depuis la console": "szerver: különben az ár a konzolból módosítható",
        "Afficher une infobulle au survol": "Buboréksúgó megjelenítése rámutatáskor",
        "navigateur": "böngésző",
        "Décider si un compte peut être supprimé": "Eldönteni, hogy egy fiók törölhető-e",
        "serveur": "szerver",
        "Masquer un bouton réservé aux administrateurs": "Egy rendszergazdáknak fenntartott gomb elrejtése",
        "masquer ne protège pas : l'action doit être refusée côté serveur": "az elrejtés nem véd: a műveletet a szerveroldalon kell elutasítani",
        "Quatre de ces six doivent impérativement être traités côté serveur.": "E hat közül négyet feltétlenül a szerveroldalon kell kezelni.",
        "Quatre traitements relèvent obligatoirement du serveur.": "Négy művelet kötelezően a szerverhez tartozik.",
        "Plus de quatre : deux de ces éléments relèvent du confort d'affichage.": "Négynél több: ezek közül kettő csak a megjelenítés kényelmét szolgálja.",
        "Trouve la bonne largeur de texte": "Találd meg a jó szövegszélességet",
        "Une ligne trop longue fatigue l'œil, qui perd le début de la ligne suivante.": "A túl hosszú sor fárasztja a szemet, amely elveszíti a következő sor elejét.",
        "La zone confortable se situe entre 45 et 75 caractères par ligne, quelle que soit la taille de l'écran.": "A kényelmes tartomány soronként 45 és 75 karakter között van, a képernyő méretétől függetlenül.",
        "Taille de police": "Betűméret",
        "px": "px",
        "Caractères par ligne visés": "Megcélzott karakterszám soronként",
        "car.": "kar.",
        "Largeur de bloc recommandée": "Ajánlott blokkszélesség",
        "En unités relatives": "Relatív egységben",
        "Confort de lecture": "Olvasási kényelem",
        "trop court : le regard revient trop souvent à la ligne": "túl rövid: a tekintet túl gyakran ugrik új sorba",
        "dans la zone confortable": "a kényelmes tartományban",
        "trop long : l'œil perd le début de la ligne suivante": "túl hosszú: a szem elveszíti a következő sor elejét",
        "Séquentiel ou parallèle ?": "Sorban vagy párhuzamosan?",
        "Le temps d'une page dépend surtout du nombre d'allers-retours.": "Egy oldal ideje főleg az oda-vissza utak számától függ.",
        "Le serveur n'est pas plus rapide dans le second cas. C'est l'organisation des appels qui change tout.": "A második esetben a szerver nem gyorsabb. A hívások szervezése változtat meg mindent.",
        "Nombre d'appels d'API": "API-hívások száma",
        "appels": "hívás",
        "Latence réseau par appel": "Hálózati késleltetés hívásonként",
        "Traitement serveur par appel": "Szerveroldali feldolgozás hívásonként",
        "En séquence": "Sorban",
        "En parallèle": "Párhuzamosan",
        "Temps économisé": "Megtakarított idő",
        "Mesure le coût d'une requête en boucle": "Mérd meg egy ciklusba tett lekérdezés árát",
        "Le défaut de performance le plus courant, et le plus invisible à la lecture du code.": "A leggyakoribb teljesítményhiba, és a kód olvasásakor a legláthatatlanabb.",
        "Le code paraît identique dans les deux cas. Seul le compteur de requêtes révèle la différence.": "A kód mindkét esetben ugyanolyannak tűnik. Csak a lekérdezésszámláló mutatja a különbséget.",
        "Éléments à afficher": "Megjelenítendő elemek",
        "Durée d'une requête simple": "Egy egyszerű lekérdezés időtartama",
        "Durée de la requête avec jointure": "Az összekapcsolásos lekérdezés időtartama",
        "Une seule requête avec jointure": "Egyetlen lekérdezés összekapcsolással",
        "Prêt à mettre en ligne ?": "Készen állsz az élesítésre?",
        "Coche ce qui est vérifié. Ces points expliquent la quasi-totalité des premières mises en ligne ratées.": "Jelöld be, amit ellenőriztél. Ezek a pontok magyarázzák szinte az összes elrontott első élesítést.",
        "« Ça marche chez moi » et « c'est en ligne » diffèrent par quelques points précis, tous vérifiables d'avance.": "A „nálam működik” és az „élesben van” néhány pontos ponton különbözik, és mind előre ellenőrizhető.",
        "Aucun secret ne figure dans le code envoyé": "Nincs titok a kiküldött kódban",
        "clés d'API, mots de passe, jetons": "API-kulcsok, jelszavak, tokenek",
        "La casse des noms de fichiers est exacte": "A fájlnevek kis- és nagybetűi pontosak",
        "le serveur distingue Image.png de image.png, pas Windows": "a szerver megkülönbözteti az Image.png-t az image.png-től, a Windows nem",
        "Les chemins fonctionnent depuis la racine du site": "Az elérési utak az oldal gyökeréből is működnek",
        "Le HTTPS est actif et la redirection en place": "A HTTPS aktív, és az átirányítás be van állítva",
        "Une page d'erreur personnalisée existe": "Van egyedi hibaoldal",
        "Le déploiement envoie l'ensemble des fichiers, pas une sélection": "A telepítés az összes fájlt feltölti, nem egy válogatást",
        "J'ai ouvert le site dans une fenêtre privée après déploiement": "Telepítés után privát ablakban nyitottam meg az oldalt",
        "pour contourner le cache et voir ce que voient les autres": "hogy megkerüld a gyorsítótárat, és lásd, amit mások látnak",
        "Plusieurs points bloquants risquent d'apparaître après le déploiement.": "Telepítés után valószínűleg több blokkoló probléma jelentkezik.",
        "Presque. La casse des fichiers et les secrets sont les deux à ne pas manquer.": "Majdnem. A fájlnevek kis- és nagybetűit és a titkokat nem szabad elnézni.",
        "Prêt. Ces sept points couvrent l'essentiel des incidents de première mise en ligne.": "Kész. Ez a hét pont lefedi az első élesítések hibáinak nagy részét.",
        "Ton historique est-il utilisable ?": "Használható az előzménytörténeted?",
        "Coche ce qui décrit tes habitudes réelles.": "Jelöld be, ami a valódi szokásaidat írja le.",
        "Un commit fourre-tout ne peut pas être annulé proprement : on ne peut pas en retirer une partie.": "Egy mindent egybe commit nem vonható vissza tisztán: nem lehet csak egy részét eltávolítani.",
        "Un commit correspond à une seule intention": "Egy commit egyetlen szándéknak felel meg",
        "Les messages expliquent le pourquoi, pas seulement le quoi": "Az üzenetek a miértet magyarázzák, nem csak a mit",
        "« fix » n'apprend rien à personne": "a „fix” senkinek sem mond semmit",
        "Un fichier d'exclusion existe depuis le premier jour": "Az első naptól van kizárási fájl",
        "Aucun secret n'a jamais été commité": "Soha nem került titok egy commitba",
        "un secret poussé reste dans l'historique, même supprimé ensuite": "egy feltolt titok az előzményekben marad, akkor is, ha később törlöd",
        "La branche principale reste toujours fonctionnelle": "A fő ág mindig működőképes marad",
        "Les branches vivent quelques jours, pas quelques semaines": "Az ágak néhány napig élnek, nem hetekig",
        "Je relis mon propre changement avant de le fusionner": "Összefésülés előtt átnézem a saját változtatásomat",
        "Cet historique servira difficilement le jour où il faudra défaire quelque chose.": "Ez az előzménytörténet nehezen lesz használható azon a napon, amikor vissza kell csinálni valamit.",
        "Bonnes habitudes. Les branches longues sont la cause principale des conflits.": "Jó szokások. A hosszú életű ágak a konfliktusok fő okai.",
        "Historique exploitable : tu pourras revenir en arrière proprement.": "Használható előzménytörténet: tisztán vissza tudsz majd lépni.",
        "Ce que le cache économise": "Amit a gyorsítótár megtakarít",
        "Le seul levier qui améliore la performance sans rien alléger.": "Az egyetlen emelő, amely javítja a teljesítményt anélkül, hogy bármit könnyítenénk.",
        "Un fichier fortement mis en cache ne peut plus changer en place : versionne son nom, et le problème disparaît.": "Egy erősen gyorsítótárazott fájl nem változhat többé helyben: verziózd a nevét, és a probléma eltűnik.",
        "Poids total d'une page": "Egy oldal teljes súlya",
        "Dont fichiers statiques cachables": "Ebből gyorsítótárazható statikus fájlok",
        "Part de visites avec cache déjà rempli": "A már feltöltött gyorsítótárral érkező látogatások aránya",
        "Première visite": "Első látogatás",
        "Visite avec cache": "Látogatás gyorsítótárral",
        "Volume moyen par visite": "Átlagos adatmennyiség látogatásonként",
        "Audit de sécurité applicative": "Alkalmazásbiztonsági audit",
        "Coche ce qui est en place dans ton application.": "Jelöld be, ami megvalósult az alkalmazásodban.",
        "Toute donnée venant de l'extérieur est hostile jusqu'à preuve du contraire. C'est le principe qui règle l'essentiel.": "Minden kívülről érkező adat ellenséges, amíg az ellenkezője be nem bizonyosodik. Ez az elv elintézi a lényeget.",
        "Toutes les requêtes de base de données sont préparées": "Minden adatbázis-lekérdezés előkészített",
        "aucune concaténation de valeurs saisies": "a beírt értékeket soha nem fűzzük a lekérdezésbe",
        "Le contenu utilisateur est échappé à l'affichage": "A felhasználói tartalom megjelenítéskor kódolva van",
        "Une politique de sécurité de contenu est déclarée": "Tartalombiztonsági szabályzat van beállítva",
        "Les formulaires sensibles portent un jeton anti-rejeu": "Az érzékeny űrlapok hamisítás elleni tokent tartalmaznak",
        "Toute autorisation est vérifiée côté serveur": "Minden jogosultságot a szerveroldalon ellenőrzünk",
        "masquer un bouton ne protège rien": "egy gomb elrejtése semmit sem véd",
        "Les dépendances sont mises à jour régulièrement": "A függőségeket rendszeresen frissítjük",
        "la majorité des compromissions passent par là": "a behatolások többsége ezen át történik",
        "Les messages d'erreur en production ne révèlent rien du système": "Az éles hibaüzenetek semmit sem árulnak el a rendszerről",
        "Plusieurs vulnérabilités classiques sont probablement exploitables.": "Valószínűleg több klasszikus sebezhetőség is kihasználható.",
        "Bon niveau. Les dépendances non mises à jour restent le vecteur le plus exploité.": "Jó szint. A nem frissített függőségek maradnak a leggyakrabban kihasznált támadási útvonal.",
        "Les vulnérabilités les plus répandues sont couvertes.": "A legelterjedtebb sebezhetőségek le vannak fedve.",
        "Combien de temps dure ta suite de tests ?": "Mennyi ideig tart a tesztsorod?",
        "Si elle dépasse quelques minutes, elle ne sera plus lancée à chaque modification.": "Ha néhány percnél tovább tart, már nem fogják minden módosításkor lefuttatni.",
        "C'est cette poignée de tests lents qui décide si la suite tourne à chaque modification, ou une fois par semaine.": "Ez a maroknyi lassú teszt dönti el, hogy a tesztsor minden módosításkor lefut, vagy hetente egyszer.",
        "Tests unitaires": "Egységtesztek",
        "tests": "teszt",
        "Tests d'intégration": "Integrációs tesztek",
        "Tests de bout en bout": "Végponttól végpontig tartó tesztek",
        "Durée d'un test de bout en bout": "Egy végponttól végpontig tartó teszt időtartama",
        "Durée totale de la suite": "A tesztsor teljes időtartama",
        "Part des tests de bout en bout": "A végponttól végpontig tartó tesztek aránya",
        "Mais ils occupent": "De ennyit foglalnak el",
        "Chiffre ta dette technique": "Számold ki a technikai adósságodat",
        "Le seul langage qui obtient du temps pour la corriger.": "Az egyetlen nyelv, amellyel időt kapsz a kijavítására.",
        "Formulé ainsi, l'arbitrage n'est plus une question de goût mais de délai de retour.": "Így megfogalmazva a döntés már nem ízlés, hanem megtérülési idő kérdése.",
        "Heures perdues par semaine": "Hetente elvesztett órák",
        "Semaines travaillées par an": "Évi munkahetek",
        "Heures estimées pour corriger": "A javítás becsült óraszáma",
        "Coût horaire chargé": "Teljes óraköltség járulékokkal",
        "Temps perdu par an": "Évente elvesztett idő",
        "La correction est remboursée en": "A javítás ennyi idő alatt térül meg",

        // --- apprendre / frequence-vocabulaire ------------------------------
        "Combien de mots faut-il pour lire ?": "Hány szót kell ismerni az olvasáshoz?",
        "Les mots les plus fréquents couvrent une part énorme d'un texte — et les suivants rapportent de moins en moins.":
            "A leggyakoribb szavak egy szöveg hatalmas részét lefedik — a következők pedig egyre kevesebbet hoznak.",
        "Les mille premiers mots font le gros du travail. Les mille suivants en font dix fois moins — d'où l'intérêt de les apprendre dans l'ordre de leur fréquence.":
            "Az első ezer szó végzi a munka nagyját. A következő ezer tízszer kevesebbet — ezért érdemes gyakorisági sorrendben tanulni őket.",
        "Mots connus": "Ismert szavak",
        "Mots par page": "Szavak oldalanként",
        "Couverture du texte": "A szöveg lefedettsége",
        "Mots inconnus par page": "Ismeretlen szavak oldalanként",
        "Soit un mot inconnu tous les": "Vagyis egy ismeretlen szó ennyi szavanként:",

        // --- apprendre / transfert ------------------------------------------
        "Ce que tu apprends servira-t-il ailleurs ?": "Máshol is hasznát veszed annak, amit tanulsz?",
        "Coche ce qui est vrai de ta façon d'apprendre ce sujet.": "Jelöld be, ami igaz arra, ahogyan ezt a témát tanulod.",
        "Le transfert ne va pas de soi : il se prépare. Ce qu'on apprend dans un seul décor reste attaché à ce décor.":
            "Az átvitel nem magától értetődő: fel kell rá készülni. Amit egyetlen környezetben tanulunk, az ahhoz a környezethez kötődik.",
        "Je m'entraîne sur des cas variés, pas toujours le même format": "Változatos eseteken gyakorlok, nem mindig ugyanabban a formában",
        "Je m'entraîne dans les conditions où je devrai m'en servir": "Olyan körülmények között gyakorlok, amilyenekben használnom kell majd",
        "Je sais énoncer le principe, pas seulement la recette": "Az elvet is meg tudom fogalmazni, nem csak a receptet",
        "J'ai déjà appliqué la notion à un cas qu'on ne m'avait pas montré": "Már alkalmaztam a fogalmat olyan esetre, amelyet nem mutattak meg nekem",
        "Je m'entraîne sans les indices qui seront absents le jour venu": "Olyan segítség nélkül gyakorlok, amely a nagy napon sem lesz meg",
        "Je ne compte pas sur un exercice de logique pour améliorer autre chose": "Nem várom egy logikai feladattól, hogy mást is fejlesszen",
        "les jeux d'entraînement cérébral améliorent surtout ces jeux": "az agytornajátékok főleg magukban a játékokban tesznek jobbá",
        "Apprentissage collé à son contexte : il fonctionnera sur les exercices du cours, et nulle part ailleurs.":
            "Környezetéhez tapadt tanulás: a tananyag feladatain működik, máshol sehol.",
        "Partiel. La variété des cas est le levier le plus fort, et le plus négligé.":
            "Részleges. Az esetek változatossága a legerősebb és a leginkább elhanyagolt eszköz.",
        "Ce que tu apprends a une chance de sortir de la salle de classe.":
            "Amit tanulsz, esélyes arra, hogy kijusson a tanteremből.",

        // --- apprendre / evaluer-methode ------------------------------------
        "Cette méthode vaut-elle ton temps ?": "Megéri ez a módszer az idődet?",
        "Coche ce qui est vrai de la méthode d'apprentissage qu'on te propose.": "Jelöld be, ami igaz a neked ajánlott tanulási módszerre.",
        "Une méthode qui rend l'apprentissage agréable sur le moment est souvent celle qui laisse le moins de traces. La difficulté utile n'a pas bonne presse.":
            "Az a módszer, amely a pillanatban kellemessé teszi a tanulást, gyakran a legkevesebb nyomot hagyja. A hasznos nehézségnek nincs jó sajtója.",
        "Elle a été comparée à une autre méthode, pas seulement à rien": "Egy másik módszerrel is összevetették, nem csak a semmivel",
        "Elle a été mesurée après plusieurs jours, pas juste après la séance": "Több nap után mérték, nem közvetlenül a tanulás után",
        "Elle mesure ce qu'on retient, pas ce qu'on a ressenti": "Azt méri, ami megmarad, nem azt, amit éreztünk",
        "Elle ne repose pas sur les « styles d'apprentissage »": "Nem a „tanulási stílusokra” épül",
        "visuel, auditif, kinesthésique : hypothèse non confirmée par les études": "vizuális, auditív, kinesztetikus: a kutatások által meg nem erősített feltevés",
        "Elle n'invoque pas de pourcentages du type « on retient 10 % de ce qu'on lit »": "Nem hivatkozik olyan százalékokra, mint „az olvasottak 10%-át jegyezzük meg”",
        "cette pyramide n'a aucune source": "ennek a piramisnak nincs forrása",
        "Elle ne promet pas un résultat sans effort": "Nem ígér erőfeszítés nélküli eredményt",
        "Beaucoup de promesses, peu de mesures. Le domaine en est plein.": "Sok ígéret, kevés mérés. A terület tele van ilyenekkel.",
        "À creuser. Vérifie surtout le délai du test : c'est là que la plupart des méthodes s'effondrent.":
            "Érdemes utánajárni. Főleg azt ellenőrizd, mikor tesztelték: a legtöbb módszer itt omlik össze.",
        "Méthode défendable. Elle mérite qu'on lui consacre quelques semaines.": "Védhető módszer. Megérdemel néhány hetet.",

        // --- apprendre / systeme --------------------------------------------
        "Ton système tiendra-t-il six mois ?": "Kitart a rendszered hat hónapig?",
        "Coche ce qui existe déjà, pas ce que tu comptes mettre en place.": "Azt jelöld be, ami már megvan, ne azt, amit tervezel.",
        "Ce qui dure ne dépend pas de l'envie du jour. Un créneau et une version de cinq minutes valent mieux qu'un plan ambitieux.":
            "Ami tartós, az nem a napi kedven múlik. Egy rögzített idősáv és egy ötperces változat többet ér egy nagyratörő tervnél.",
        "Un endroit unique où atterrit ce que je veux retenir": "Egyetlen hely, ahová mindaz kerül, amit meg akarok jegyezni",
        "Un moment fixe pour réviser, dans l'agenda": "Rögzített ismétlési időpont a naptárban",
        "Des questions écrites, pas seulement des notes à relire": "Leírt kérdések, nem csak újraolvasandó jegyzetek",
        "Un calendrier d'espacement, même approximatif": "Térközös ütemterv, akár csak nagyjából",
        "Une trace de ce que je rate régulièrement": "Feljegyzés arról, amit rendszeresen elrontok",
        "Une séance ramenée à cinq minutes les jours chargés": "Ötpercesre rövidített alkalom a zsúfolt napokon",
        "ce qui évite de rompre la série": "így nem szakad meg a sorozat",
        "Rien de tout cela ne demande de motivation une fois posé — c'est précisément pour cela qu'il faut le poser.":
            "Ha egyszer megvan, ezek egyike sem igényel motivációt — éppen ezért kell kialakítani őket.",
        "Presque. Le créneau fixe et la version courte sont ce qui fait tenir les autres.":
            "Majdnem. A rögzített idősáv és a rövid változat tartja életben a többit.",
        "Un système, et non une bonne intention. C'est ce qui survit aux semaines difficiles.":
            "Ez rendszer, nem jó szándék. Ez éli túl a nehéz heteket.",

        // --- apprendre / courbe-oubli ---------------------------------------
        "Que reste-t-il dans une semaine ?": "Mi marad meg egy hét múlva?",
        "Sans révision, l'oubli suit une courbe : très rapide au début, puis de plus en plus lente.":
            "Ismétlés nélkül a felejtés görbét követ: eleinte nagyon gyors, aztán egyre lassabb.",
        "L'essentiel de la perte a lieu dans les deux premiers jours. C'est là qu'une révision coûte le moins et rapporte le plus.":
            "A veszteség nagy része az első két napban történik. Ekkor kerül a legkevesebbe és hozza a legtöbbet egy ismétlés.",
        "Éléments appris": "Megtanult elemek",
        "Jours écoulés": "Eltelt napok",
        "Part encore su": "Még tudott hányad",
        "Éléments encore su": "Még tudott elemek",
        "Éléments à réapprendre": "Újratanulandó elemek",

        // --- apprendre / repetition-espacee ---------------------------------
        "Combien coûte vraiment une révision espacée ?": "Mennyibe kerül valójában a térközös ismétlés?",
        "Comparé à tout relire chaque semaine, pour la même échéance.": "Ahhoz képest, ha ugyanarra a határidőre minden héten mindent újraolvasol.",
        "L'espacement ne demande pas plus de travail : il en demande beaucoup moins, au prix d'un calendrier à tenir.":
            "A térközök nem kívánnak több munkát: sokkal kevesebbet kívánnak, egy betartandó ütemterv árán.",
        "Temps par élément et par passage": "Idő elemenként és alkalmanként",
        "Horizon": "Időtáv",
        "Passages de révision": "Ismétlési alkalmak",
        "Temps total, en espacé": "Teljes idő, térközökkel",
        "Temps total, en relisant chaque semaine": "Teljes idő, heti újraolvasással",
        "Rapport": "Arány",

        // --- apprendre / effet-test -----------------------------------------
        "Relire, ou se tester ?": "Újraolvasni, vagy kikérdezni magad?",
        "À temps de travail égal, règle la part consacrée à t'interroger plutôt qu'à relire.":
            "Azonos tanulási idő mellett állítsd be, mekkora részét fordítod önellenőrzésre újraolvasás helyett.",
        "Se tester n'est pas une façon de vérifier qu'on a appris : c'est la façon d'apprendre. Le contrôle est l'exercice.":
            "Az önellenőrzés nem annak ellenőrzése, hogy megtanultad-e: ez maga a tanulás módja. A számonkérés a gyakorlás.",
        "Part du temps passée à se tester": "Önellenőrzésre fordított időhányad",
        "Rétention à une semaine": "Megtartás egy hét után",
        "Écart avec la relecture seule": "Különbség a puszta újraolvasáshoz képest",

        // --- apprendre / illusion-maitrise ----------------------------------
        "Le sais-tu vraiment ?": "Tényleg tudod?",
        "Coche ce qui est vrai d'un sujet que tu penses maîtriser.": "Jelöld be, ami igaz egy olyan témára, amelyet szerinted jól ismersz.",
        "La familiarité se confond avec la connaissance. Un texte relu quatre fois paraît évident — et reste introuvable une semaine plus tard.":
            "Az ismerősséget könnyű tudásnak hinni. Egy négyszer újraolvasott szöveg magától értetődőnek tűnik — és egy héttel később mégsem tudod előhívni.",
        "Je peux le réexpliquer sans regarder mes notes": "El tudom magyarázni a jegyzeteim nélkül",
        "Je peux l'expliquer à quelqu'un qui n'y connaît rien": "El tudom magyarázni valakinek, aki semmit sem tud róla",
        "Je sais donner un exemple qui n'était pas dans le cours": "Tudok olyan példát mondani, amely nem volt a tananyagban",
        "Je sais dire dans quels cas cela ne s'applique pas": "Meg tudom mondani, milyen esetekben nem érvényes",
        "Je m'en suis souvenu au moins une fois après plusieurs jours": "Legalább egyszer eszembe jutott több nap elteltével",
        "Je peux le retrouver sans le reconnaître d'abord": "Elő tudom hívni anélkül, hogy előbb felismerném",
        "reconnaître un texte n'est pas savoir le produire": "felismerni egy szöveget nem ugyanaz, mint előállítani",
        "Sentiment de maîtrise sans les preuves. C'est le piège habituel de la relecture : le texte devient familier, pas connu.":
            "A tudás érzése bizonyíték nélkül. Ez az újraolvasás szokásos csapdája: a szöveg ismerőssé válik, nem tudássá.",
        "Solide, mais incomplet : les cases restantes sont précisément celles que la relecture ne coche jamais.":
            "Szilárd, de hiányos: a maradék négyzetek éppen azok, amelyeket az újraolvasás soha nem jelöl be.",
        "C'est acquis. Rien de tout cela ne s'obtient en relisant.": "Ez megvan. Ebből semmi sem érhető el újraolvasással.",

        // --- apprendre / entrelacement --------------------------------------
        "En blocs ou entrelacé ?": "Blokkokban vagy keverve?",
        "Règle la part d'exercices mélangés plutôt que groupés par type.": "Állítsd be, a feladatok mekkora része legyen keverve, típus szerinti csoportosítás helyett.",
        "Grouper par type donne l'impression d'avancer plus vite : on applique la même méthode sans avoir à la choisir. Le test, lui, ne prévient pas du type.":
            "A típus szerinti csoportosítás a gyorsabb haladás érzését kelti: ugyanazt a módszert alkalmazod, választás nélkül. A teszt viszont nem árulja el a típust.",
        "Exercices au total": "Feladatok összesen",
        "Part d'exercices entrelacés": "A kevert feladatok aránya",
        "Réussite au test différé": "Siker a későbbi teszten",
        "Exercices réussis": "Sikeres feladatok",
        "Écart avec la pratique groupée": "Különbség a csoportosított gyakorláshoz képest",

        // --- apprendre / elaboration ----------------------------------------
        "Traites-tu vraiment ce que tu lis ?": "Tényleg feldolgozod, amit olvasol?",
        "Coche ce que tu fais réellement pendant une séance de travail.": "Jelöld be, amit egy tanulási alkalom során valóban csinálsz.",
        "Une notion isolée s'oublie ; une notion rattachée à dix autres se retrouve par dix chemins.":
            "Egy elszigetelt fogalom feledésbe merül; egy tíz másikhoz kapcsolt fogalomhoz tíz úton is vissza lehet találni.",
        "Je me demande « pourquoi est-ce vrai ? » avant de passer à la suite": "Megkérdezem magamtól, „miért igaz ez?”, mielőtt továbblépnék",
        "Je relie la notion à quelque chose que je connais déjà": "A fogalmat valamihez kötöm, amit már ismerek",
        "Je reformule avec mes propres mots, pas ceux du cours": "A saját szavaimmal fogalmazom újra, nem a tananyagéival",
        "Je cherche un contre-exemple ou un cas limite": "Ellenpéldát vagy határesetet keresek",
        "Je pose par écrit une question à laquelle le cours ne répond pas": "Leírok egy kérdést, amelyre a tananyag nem ad választ",
        "Je m'arrête pour anticiper la suite avant de la lire": "Megállok, hogy megjósoljam a folytatást, mielőtt elolvasnám",
        "Lecture passive : le texte défile et rien ne s'y accroche. Une seule question posée à voix haute change déjà le résultat.":
            "Passzív olvasás: a szöveg elfut, és semmi sem ragad meg belőle. Egyetlen hangosan feltett kérdés már változtat az eredményen.",
        "Bon départ. Les questions « pourquoi » et les contre-exemples sont ce qui rapporte le plus.":
            "Jó kezdet. A „miért” kérdések és az ellenpéldák hozzák a legtöbbet.",
        "Tu traites le contenu au lieu de le parcourir. C'est ce qui laisse une trace.":
            "Feldolgozod a tartalmat ahelyett, hogy csak átfutnál rajta. Ez hagy nyomot.",

        // --- apprendre / pratique-deliberee ---------------------------------
        "Où passe ton temps de travail ?": "Mire megy el a tanulási időd?",
        "Le temps passé sur ce qu'on réussit déjà entretient ; il ne fait pas progresser.":
            "Az arra fordított idő, ami már megy, szinten tart; nem visz előre.",
        "Refaire ce qu'on réussit est agréable et mesurable. Travailler ce qu'on rate est désagréable et c'est la seule chose qui déplace le niveau.":
            "Újra megcsinálni, ami megy, kellemes és mérhető. Azon dolgozni, ami nem megy, kellemetlen — és csak ez emeli a szintet.",
        "Heures de travail par semaine": "Heti tanulási órák",
        "Part passée sur ce que tu rates": "Arra fordított hányad, ami nem megy",
        "Sur combien de semaines": "Hány héten át",
        "Heures utiles par semaine": "Hasznos órák hetente",
        "Heures de confort par semaine": "Kényelmi órák hetente",
        "Heures utiles sur la période": "Hasznos órák az időszak alatt",
        "À 60 %, la même période donnerait": "60%-kal ugyanez az időszak ennyit adna",

        // --- apprendre / sommeil --------------------------------------------
        "Ta nuit fait-elle son travail ?": "Elvégzi a dolgát az éjszakád?",
        "La mémoire se consolide pendant le sommeil, pas pendant la révision.": "Az emlékezet alvás közben rögzül, nem ismétlés közben.",
        "Réviser tard puis dormir bat réviser tard puis veiller. Ce n'est pas une question de discipline, c'est le moment où le cerveau range.":
            "Későn ismételni, aztán aludni jobb, mint későn ismételni, aztán fennmaradni. Ez nem fegyelem kérdése: ilyenkor rendez az agy.",
        "Je dors au moins sept heures la nuit qui suit un apprentissage": "A tanulást követő éjjel legalább hét órát alszom",
        "Je révise le soir plutôt que de tout repousser au matin de l'examen": "Este ismétlek, ahelyett hogy mindent a vizsga reggelére hagynék",
        "Je ne remplace pas une nuit par une nuit blanche de révision": "Nem cserélem le az alvást egy átvirrasztott, tanulással töltött éjszakára",
        "Mes horaires de coucher varient de moins d'une heure d'un jour à l'autre": "A lefekvési időm napról napra kevesebb mint egy órát változik",
        "Je fais des pauses réelles pendant l'apprentissage, sans écran": "Tanulás közben valódi, képernyő nélküli szüneteket tartok",
        "Je n'attends pas d'un rattrapage le week-end qu'il annule la semaine": "Nem várom, hogy a hétvégi bepótlás semmissé tegye a hetet",
        "Une nuit blanche avant un examen échange la consolidation contre quelques heures de relecture. Le change est mauvais.":
            "Egy átvirrasztott éjszaka a vizsga előtt a rögzülést néhány óra újraolvasásra cseréli. Rossz csere.",
        "Correct. La nuit qui suit l'apprentissage est celle qui compte le plus.": "Rendben. A tanulást követő éjszaka számít a legtöbbet.",
        "Tes nuits travaillent pour toi. C'est l'heure de révision la moins chère qui existe.":
            "Az éjszakáid neked dolgoznak. Ez a létező legolcsóbb ismétlési idő.",
    },
};
