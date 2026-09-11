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
