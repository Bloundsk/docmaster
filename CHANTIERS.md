# Chantiers — Clicked

Ce qui reste à faire, et comment le relancer. Ce qui est **fait** vit dans
`CHANGELOG.md` ; la **méthode**, dans `ARCHITECTURE.md`. Ce fichier se met à jour
chaque fois qu'un chantier s'ouvre ou se ferme.

**État au 11 septembre 2026.** Un seul chantier est en cours : **la traduction
du site en hongrois**. Les quatorze parcours sont publiés (Apprendre, Cybersécurité, Data, Design, Dev web, Droit, Écologie, Entrepreneuriat, Finance, IA, Marketing, Négociation, Productivité, Santé) ; la relecture hongroise reste à faire. L'audit pédagogique (vagues 1 à 3) est livré, les polices sont hébergées sur le
site, tous les contrôles passent. **Le site n'est pas encore lancé** : ses
visiteurs sont des testeurs.

---

## En un coup d'œil

| Chantier | Qui | Quand | Pour le relancer, dire |
|---|---|---|---|
| [**Traduire le site en hongrois**](#traduire-le-site-en-hongrois) | Claude ; un lecteur hongrois pour relire | en cours depuis le 11 septembre 2026 | « continue la traduction hongroise » |
| [Lire les suggestions de la boîte à idées](#lire-les-suggestions-de-la-boîte-à-idées) | Ludo | à son rythme | — |
| [Vérifier que la boîte à idées livre les messages](#vérifier-que-la-boîte-à-idées-livre-les-messages) | Ludo, ou Claude avec son accord | avant le lancement | « envoie un message de test par la boîte à idées » |
| [Décider du lancement](#décider-du-lancement) | Ludo | — | — |
| [Juger l'effet des titres et des amorces](#juger-leffet-des-titres-et-des-amorces) | Ludo, Claude pour l'analyse | octobre 2026 au plus tôt, site lancé | « regarde l'effet des titres et des amorces » |
| [Écrire la leçon « compte piraté »](#écrire-la-leçon--compte-piraté-) | Claude | quand Ludo le décide | « écris la leçon sur le compte piraté » |
| [La septième carte, seule sur sa rangée](#la-septième-carte-seule-sur-sa-rangée) | Ludo décide | — | « ajoute une huitième situation » ou « retire la situation … » |
| [Renommer le dépôt](#renommer-le-dépôt) | Ludo décide | déconseillé | « prépare le renommage du dépôt » |

---

## En cours

### Traduire le site en hongrois

Demandé par Ludo le 11 septembre 2026 : tout le site, comme l'anglais. Mesuré ce
jour-là : **environ 160 000 mots** — 86 000 dans les guides, 10 600 dans les autres
pages, 55 700 dans les quiz, plus les simulateurs — et une vingtaine de scripts qui
supposaient la paire français-anglais.

**Fait :**

- le hongrois est **déclaré** dans `assets/js/langues.js` : drapeau, nom
  « Magyar », 64 libellés d'interface en tutoiement, format de date `hu-HU` ; son
  accroche, sa signature et son texte de partage dans `assets/js/identite.js` ;
  le format des nombres dans `assets/js/pratique.js` ;
- les scripts et contrôles lisent désormais **la liste des langues** dans
  `scripts/langues-contenu.js` au lieu de `["fr", "en"]`, et échouent s'il leur
  manque un libellé pour une langue ;
- **le parcours pilote « Apprendre à apprendre » est publié** : ses 4 pages sous
  `hu/guides/apprendre/`, ses 3 banques de quiz (90 questions), les textes de ses
  12 simulateurs ;
- **Productivité, Intelligence artificielle, puis Data & Analytics, sont
  publiés** le même jour, sur la même méthode, à la demande de Ludo.

Le drapeau hongrois est **visible** depuis la publication du pilote. Vérifié dans
le navigateur sur un parcours pas encore traduit (Finance) : choisir « Magyar »
laisse le cours en français, passe le menu en hongrois et affiche en hongrois
« cette page n'est pas encore traduite », plus l'avertissement sur les règles
françaises.

**Méthode, reprise de l'anglais :**

1. ~~**Un sujet pilote, « Apprendre à apprendre », en entier**~~ — **fait le
   11 septembre 2026** : les 4 pages sous `hu/guides/apprendre/`, ses 3 banques
   sous `assets/js/quiz/hu/`, les textes de ses simulateurs dans
   `assets/js/pratique/hu.js`, et le sujet ajouté à `CONTENU_TRADUIT.hu`.
2. **Le faire relire par un lecteur hongrois.** Personne dans le projet ne lit le
   hongrois. C'était recommandé avant les autres sujets ; **Ludo a choisi le
   11 septembre 2026 de continuer sans attendre.** La relecture reste à faire, et
   portera sur tous les sujets déjà publiés.
3. Les autres sujets, un par un, contrôles au vert à chaque fois. **Faits :
   Apprendre, Productivité, IA, Data, Design, Dev web, Cybersécurité, Marketing,
   Négociation, Écologie, Entrepreneuriat, Finance, Droit, Santé (14 sur 14).**
   Tous les parcours sont traduits ; les quatre sujets à droit français ont suivi la
   décision ci-dessous.
   **À chaque sujet, `verifier-longueur-quiz.mjs` avant tout** : une traduction
   fidèle recrée le biais de longueur à chaque fois (Apprendre 51,7 %,
   Productivité 62 à 67 % par banque, IA 43,8 % au total, Design 58 %, Dev web 40 %, Cybersécurité 57 %, Marketing 56 %, Négociation 51 %, Écologie 56 %, Entrepreneuriat 52 %, Finance 41 %, Droit 63 %, Santé 59 %). **Et comparer les
   trois positions au français, question par question**, pas seulement « la plus
   longue » : corriger celle-ci a fait monter « celle du milieu » à 43,2 % sur Data.
   Le français place la bonne réponse à 35 / 36 / 30 % (longue / milieu / courte).
4. Les pages hors cours. **Faites le 12 septembre 2026 : accueil, catalogue,
   actualités** (`PAGES_TRADUITES.hu`), avec `publier-accueil.js`,
   `poser-situations.js` et `publier-actualites.js` qui écrivent le hongrois. Restent,
   dans cet ordre conseillé :
   - **podcasts** : `publier-podcasts.js` n'écrit que deux langues ; les épisodes
     sont en français, seul le texte autour se traduit. Une fois la page là,
     l'accueil hongrois annoncera les épisodes de lui-même ;
   - **glossaire** : `poser-renvois-glossaire.js` (liste `LANGUES`) et les contrôles
     4 et 4 ter d'`audit-coherence.mjs` citent `glossaire.html` et `en/glossaire.html`
     en dur. Chaque terme hongrois doit se trouver tel quel dans les guides hongrois ;
     les renvois se poseront alors dans les 56 pages hongroises ;
   - **FAQ, à propos, mentions légales** (traduction de courtoisie, la version
     française fait foi, comme en anglais) ;
   - **boîte à idées** : ne jamais envoyer de message d'essai par le formulaire ;
   - **Mon espace** : sa table des titres de parcours, et le contrôle d'`audit-coherence`
     qui ne la vérifie que pour `en/mon-espace.html`.
   Avant chaque page, chercher « en/ » et « "en" » dans les scripts qui la touchent :
   trois défauts de ce genre ont rougi ou mené ailleurs au premier lot. Et retirer au
   passage des pages hongroises les commentaires « Ces parcours ne sont pas encore
   traduits », devenus sans objet.

**Ce que le relecteur hongrois doit regarder en priorité :**

- le registre : tutoiement partout, comme le français du site ;
- les termes choisis, repris sur les quatre pages et dans les quiz :
  *térközös ismétlés* (répétition espacée), *kikérdezni magad* et *önellenőrzés*
  (se tester), *a tudás illúziói* (illusions de maîtrise), *kevert gyakorlás*
  (entrelacement), *mély feldolgozás* (élaboration), *tudatos gyakorlás*
  (pratique délibérée), *transzfer* ;
- pour Productivité : *elmélyült munka* (travail de fond), *súrlódás* (friction),
  *lehorgonyzás* (ancrage), *időblokkolás* (blocage de temps), *visszatalálás*
  (reprise après une interruption), *értekezlet* (réunion) ;
- pour l'IA : *ügynök* (agent), *utasítás* et *promptírás* (consigne, prompt
  engineering), *promptinjekció* (injection de consigne), *kontextusablak*,
  *visszakeresés* (récupération), *finomhangolás* (fine-tuning), *bírómodell*
  (modèle-juge), *tesztkészlet* (jeu de test), et « token » gardé tel quel ;
- pour Data : *mutató* (indicateur), *irányítópult* (tableau de bord),
  *hibahatár* (marge d'erreur), *zavaró változó* (variable confondante),
  *túlélési torzítás* (biais du survivant), *visszatérés az átlaghoz* (régression
  vers la moyenne), *adatlánc* (chaîne de données) ;
- pour Design : *drótváz* (wireframe), *kidolgozottság* (fidélité), *sötét minta*
  (schéma sombre), *design-rendszer*, *design-adósság*, *érintési célpont* (cible
  tactile), *tartalomváz* (squelette de contenu), *kártyarendezés* (tri par
  cartes), *töréspont* (point de rupture) ;
- les transpositions juridiques de Design, faites sans source hongroise vérifiée :
  l'obligation d'accessibilité présentée comme européenne (directive sur
  l'accessibilité des sites publics, acte européen sur l'accessibilité depuis juin
  2025) ; EN 301 549 à la place du RGAA ; le CEPD (EDPB) et la NAIH à la place de la
  CNIL ; les autorités de protection des consommateurs et le GVH à la place de la
  DGCCRF ; « non conforme au droit français » (résiliation) devenu
  « fogyasztóvédelmi szempontból kifogásolható », et la question de quiz sur la
  résiliation reformulée autour de la protection des consommateurs ;
- pour Dev web : *gyorsítótár* (cache), *élesítés* (mise en ligne), *kódtár*
  (dépôt), *ág* et *összefésülés* (branche, fusion), *előkészített lekérdezés*
  (requête préparée), *SQL-befecskendezés*, *kódolni (escapelni)* pour
  « échapper », *végponttól végpontig tartó teszt* (test de bout en bout),
  *technikai adósság* ; et « 34× lassabb » pour « 34 fois plus lent », choisi
  parce que le suffixe hongrois (-szor/-szer/-ször) dépend du nombre affiché ;
- pour Cybersécurité : *adathalászat* (hameçonnage), *kétlépcsős azonosítás*
  (double authentification), *jelszókezelő*, *zsarolóvírus* (rançongiciel),
  *helyreállító kódok* (codes de secours), *továbbítási szabály* (règle de
  transfert), *végpontok közötti titkosítás* (bout en bout), *támadási felület*,
  *vezérigazgatói csalás* (fraude au président) ; et les transpositions, faites par
  fonction comme en anglais : cybermalveillance.gouv.fr devenu « le service officiel
  de signalement de ton pays », l'ANSSI « l'autorité nationale de cybersécurité »,
  la CNIL « l'autorité de protection des données (en Hongrie, la NAIH) », le dépôt
  de plainte « feljelentés a rendőrségen ». À vérifier en priorité : s'il faut
  nommer l'organisme hongrois de signalement plutôt que sa fonction ;
- pour Marketing : *keresőoptimalizálás* (référencement naturel), *keresési
  szándék* (intention de recherche), *vásárlási út* et *tölcsér* (parcours,
  tunnel), *hiúsági mutató*, *kézbesíthetőség* (délivrabilité), *megtartás* et
  *lemorzsolódás* (rétention, perte), *attribúció* ; exemples transposés : TBSZ à
  la place du PEA, « kgfb … Szeged » à la place de l'assurance auto à Toulouse ;
  montants gardés en euros comme les simulateurs. **Le cadre juridique est à relire
  en priorité** : présenté comme européen (GDPR, ePrivacy) et applicable en
  Hongrie ; la règle de prospection vers les professionnels est dite variable
  selon les pays, la France citée en exemple, sans rien affirmer du droit hongrois ;
  l'ARPP devient « l'Önszabályozó Reklám Testület », à confirmer ;
- pour Négociation : *a legjobb alternatíva* et le sigle anglais *BATNA* (la MESORE
  française n'a pas d'équivalent hongrois usuel), *kiszállási pont* (point de
  rupture), *megállapodási zóna*, *horgonyzás*, *pozíció / érdek*, *elsüllyedt
  költség* (coût irrécupérable), *utolsó pillanatos pluszkérés* (grignotage final),
  *a távollévő döntéshozó* (autorité absente), « felezzük meg a különbséget »
  (couper la poire en deux), « Címzett » et « másolat » pour « À » et « Cc » ; le
  titre hongrois de Kahneman (« Gyors és lassú gondolkodás ») cité sans vérifier
  l'édition. Rien de juridique : harcèlement, discrimination et médiation sont dits
  variables selon les pays, avec renvoi aux guides Santé et Droit en français ; les
  « minima de la convention collective » deviennent « l'ágazati bérminimum vagy
  kollektív szerződés, ha van ilyen ». Noms choisis pour deux parcours encore en
  français : *Munkahelyi egészség* (Santé au travail), *Digitális mértékletesség*
  (Sobriété numérique) ;
- pour Écologie : *gyártási lábnyom* (empreinte de fabrication), *végeszköz*
  (terminal), *felújított* (reconditionné), *ökotervezés* (écoconception),
  *visszapattanó hatás* (effet rebond), *eszközpark* (parc), *hatókör* (périmètre
  d'un chiffre), *e-hulladék* et *WEEE* (DEEE), *hulladékudvar* (déchetterie). Les
  calculs restent sur l'électricité française, avec l'avertissement « cinq à dix fois
  plus ailleurs en Europe, plusieurs fois plus en Hongrie aussi » — sans chiffre
  hongrois. **Le cadre réglementaire est à relire** : filière DEEE et reprise à
  l'achat dites européennes (directive DEEE) ; indice de durabilité et délit
  d'obsolescence programmée dits français ; disponibilité des pièces « selon la
  catégorie et le pays » ; ADEME, Arcep, RGESN, Longue vie aux objets et loi REEN
  remplacés par leur fonction, comme en anglais. Dans les simulateurs, « × 33 (több) »
  plutôt que « 33-szor », dont le suffixe suivrait le nombre saisi ;
- pour Entrepreneuriat : *üzleti terv*, *fedezet* et *fedezeti pont* (marge, seuil de
  rentabilité), *likviditás* (trésorerie), *kifutási idő* (autonomie), *forgótőke-igény*
  (BFR), *egységgazdaságtan* (unit economics), *ügyfélérték* et *ügyfélszerzési
  költség*, *megtérülési idő*, *hígulás*, *befektetés előtti értékelés*, *alapítói
  kölcsön* (prêt d'honneur, terme choisi faute d'équivalent établi), *tagok közötti
  megállapodás* (pacte d'associés), *jogátruházás*, *védjegykutatás* (recherche
  d'antériorité). **Les règles restent françaises et le disent** (micro-entreprise,
  EURL, SAS, cotisations patronales de 40 à 45 %) ; le RGPD est dit européen, donc
  applicable en Hongrie ; organismes nommés par leur fonction, avec « Magyarországon
  a NAIH » et « Magyarországon az SZTNH » — ce second nom est à vérifier ;
- pour Finance : *vésztartalék* (épargne de précaution), *befektetési keret*
  (enveloppe), *hagyományos értékpapírszámla* (compte-titres), *szociális
  hozzájárulás* (prélèvements sociaux), *átalányadó* (flat tax), *adómentes keret*
  (abattement), *kamatos kamat*, *újrasúlyozás* (rééquilibrage), *rendszeres
  befizetések* (versements programmés), *hazai torzítás* (biais domestique),
  *veszteségkerülés* (aversion à la perte), *felhalmozó / osztalékfizető*
  (capitalisant / distribuant), « duration » gardé tel quel. **Les enveloppes et
  taux restent français et le disent** : PEA, assurance-vie et fonds euros gardent
  leur nom, chaque niveau prévient que keretek et adókulcsok sont français ; le
  niveau avancé ajoute que la structure des enveloppes se retrouve dans la plupart
  des pays, et le biais domestique invite à « írd be a saját országodat ». Autorité
  citée : « Franciaországban az AMF, Magyarországon az MNB » ;
- pour Droit : *kellékszavatosság* (garantie légale de conformité), *elállási jog*
  (rétractation), *hivatalos felszólítás* (mise en demeure, nom français cité),
  *tértivevényes ajánlott levél*, *beköltözési / kiköltözési jegyzőkönyv* (état des
  lieux), *kaució*, *felmondási idő*, *próbaidő*, *értesítési határidő* (délai de
  prévenance), *kollektív szerződés*, *versenytilalmi kikötés*, *tisztességtelen
  feltétel* (clause abusive), *elévülés*, *nyugvás / megszakítás*, *keresetindítás*
  (assignation), *bírósági egyeztető* (conciliateur de justice), *költségmentesség*
  (aide juridictionnelle). **Le cadre juridique est à relire en priorité** : dits
  européens et applicables en Hongrie — rétractation de 14 jours à distance, garantie
  de conformité d'au moins deux ans, notion de clause abusive, médiation de la
  consommation (« Magyarországon a békéltető testületek »), RGPD (NAIH) ; tout le reste
  dit français. À vérifier : « nem írottnak tekintendő » traduit « réputée non
  écrite », alors que le droit hongrois parle plutôt de clause *semmis* ; et le nom
  des békéltető testületek. Rien n'est affirmé du droit hongrois de la prescription :
  la mise en demeure qui n'interrompt pas est dite française. Exemple ajouté aux
  pièges de recherche : un site en hongrois de Slovaquie ou de Roumanie décrit le
  droit de son pays ;
- pour Santé : **d'abord les numéros de crise**, parce que le sujet touche à la
  détresse : « Magyarországon a 116-123 » (ligne d'écoute, gratuite, jour et nuit) et
  « közvetlen veszélyben a 112 », placés avant le 3114 français — à confirmer avant
  tout le reste. Termes : *foglalkozás-egészségügyi orvos / szolgálat* (médecine du
  travail), *ülő életmód* (sédentarité), *szemfáradtság*, *munkaközi szünet*,
  *regenerálódás* (récupération), *lelki elszakadás* (détachement psychologique),
  *követelmény / mozgástér* (exigence / latitude) et les quadrants *aktív, feszült,
  nyugodt, passzív*, *lekapcsolódás joga* (droit à la déconnexion), *kiégés*,
  *kockázatértékelés*, *pszichoszociális kockázatok*, *munkaügyi felügyelet*,
  *lelki zaklatás* (harcèlement moral), *munkavégzéstől való kivonulás* (droit de
  retrait). Dits européens et applicables en Hongrie : repos de 11 h par jour et
  24 h de plus par semaine, principe d'une pause au-delà de six heures (les
  20 minutes sont dites françaises), obligation d'évaluer les risques, charge de la
  preuve aménagée pour la discrimination. Tout le reste dit français ; INRS, ANACT
  et Défenseur des droits nommés entre parenthèses après leur fonction ;
- la ressource citée pour les listes de fréquence (Magyar Nemzeti Szövegtár) ;
- les durées de lecture : calculées à 180 mots par minute pour toutes les
  langues, elles donnent 9 à 10 minutes par niveau en hongrois, contre 11 à 12
  en français. Les mots hongrois étant plus longs, le chiffre est probablement
  trop bas.

**Le sort des exemples français, tranché par défaut le 12 septembre 2026.** À la
question « transposer ou garder », Ludo a répondu « continue » sans choisir : j'ai
pris l'option recommandée, celle de la version anglaise. Les règles françaises
(micro-entreprise, taux de cotisations, PEA, droit du travail) restent, et le guide
le dit ; le bandeau `reglesFrancaises` s'affiche de lui-même en hongrois. Ce qui est
européen se dit européen ; les organismes deviennent leur fonction. Transposer vers
le droit hongrois reste possible plus tard, avec des sources hongroises vérifiées.
Appliqué aux quatre : Entrepreneuriat, Finance, Droit et Santé.

**Pour relancer :** « continue la traduction hongroise ».

---

## 1. Ce que seul Ludo peut faire

### Lire les suggestions de la boîte à idées

Les suggestions arrivent par courrier électronique, acheminées par FormSubmit,
dans la boîte de contact du site. Rien ne les recueille dans le dépôt.

**À ne pas oublier :** la FAQ et les mentions légales promettent qu'une
suggestion est conservée **24 mois au maximum**, puis supprimée. C'est un
engagement écrit : supprimer les messages de plus de deux ans.

### Vérifier que la boîte à idées livre les messages

Le formulaire de `idees.html` envoie à FormSubmit sans quitter la page. Aucun
contrôle automatique ne peut vérifier la réception : elle se passe dans une boîte
aux lettres. Un message de test arrive chez Ludo, donc Claude ne l'envoie pas sans
son accord.

**Pour relancer :** « envoie un message de test par la boîte à idées », puis
vérifier qu'il est bien arrivé.

### Décider du lancement

Rien de technique ne l'empêche. Tant que le site n'est pas lancé, **les chiffres
d'usage mesurent des testeurs, pas un lectorat** : aucun chantier ne doit être
décidé sur eux.

---

## 2. À observer

### Juger l'effet des titres et des amorces

Deux changements visent à faire ouvrir les sections repliées :

- les **amorces** — durée et première phrase sous chaque leçon repliée
  (5 septembre 2026) ;
- les **titres de page** qui disent leur contenu (6 septembre 2026).

Deux instruments permettent de les séparer : la **Search Console** (impressions et
clics par requête) pour les titres, **GoatCounter** (ouvertures de sections) pour
les amorces. Le rapport du lundi (`rapport-usage.yml`, Issue étiquetée `usage`) ne
les distingue pas : ne pas attribuer une hausse à l'un des deux sur ce seul
rapport.

**Quand :** pas avant octobre 2026 — un moteur met plusieurs semaines à repasser —
et seulement une fois le site lancé.

**Pour relancer :** « regarde l'effet des titres et des amorces ».

---

## 3. Contenu possible

### Écrire la leçon « compte piraté »

Trouvé en choisissant les entrées par situation, le 10 septembre 2026 : le parcours
Cybersécurité explique comment **se protéger** (mots de passe, double
authentification, fuites de données), jamais comment **réagir** à un piratage.
Tant que la leçon n'existe pas, la situation « On a piraté mon compte » ne peut
pas entrer sur la page Guides : une entrée qui promet ce que la page ne donne pas
est pire que pas d'entrée.

**Pour relancer :** « écris la leçon sur le compte piraté ». Même marche que
« Négocier son salaire » (11 septembre 2026) :

1. le texte, en français puis en anglais, avec la trame de chaque leçon :
   explication, exemple, erreur fréquente, phrase à retenir. Les organismes
   nationaux cités (cybermalveillance.gouv.fr…) se traduisent par leur fonction ;
2. un simulateur : `data-pratique` dans la page, sa déclaration dans
   `assets/js/pratique.js`, ses textes dans `assets/js/pratique/en.js` ;
3. six questions par langue, la bonne réponse au même rang dans les deux, dans
   `assets/js/quiz/` et `assets/js/quiz/en/` ;
4. une entrée dans `assets/js/search-data.js`, et la leçon dans la liste du
   sommaire du parcours, dans les deux langues ;
5. `node scripts/amorcer-lecons.js`, puis `chiffrer-parcours.js`,
   `publier-accueil.js` et `poser-renvois-glossaire.js` ;
6. enfin, la situation dans `scripts/poser-situations.js`.

Les contrôles disent ce qui manque : parité français/anglais, simulateurs
traduits, position et longueur des réponses, liens et ancres.

---

## 4. Petites décisions en attente

### La septième carte, seule sur sa rangée

La page Guides propose sept situations. Sur un grand écran, elles se rangent par
trois, trois, puis une seule. Deux sorties :

- **une huitième situation** — à condition qu'une section y réponde vraiment,
  vérifié dans son texte avant de la retenir ;
- **revenir à six**, en retirant l'une d'elles.

**Pour relancer :** « ajoute une huitième situation » ou « retire la situation … ».

---

## 5. Option déconseillée

### Renommer le dépôt

GitHub ne redirige pas les adresses d'un site de projet : renommer le dépôt
`docmaster` casserait toutes les pages déjà indexées. `scripts/generer-redirections.js`
produit les pages de renvoi à déposer dans un dépôt `docmaster` neuf ; sans elles,
ne pas renommer.

**Pour relancer :** « prépare le renommage du dépôt ».

---

## Écarté — ne pas relancer

| Idée | Pourquoi | Depuis |
|---|---|---|
| Découper les sections « surchargées » | Aucune ne l'est : leçon médiane de 359 mots, la plus longue 503 | 10 septembre 2026 |
| Un compteur de sections ouvertes | Existe déjà presque entièrement : mesure, « Tout déplier », Mon espace | 10 septembre 2026 |
| Remettre les cartes de parcours sur l'accueil | Décision de Ludo : elles vivent sur la page Guides | 10 septembre 2026 |
| Charger une police depuis un service extérieur | Polices hébergées ; le contrôle 13 refuse tout tiers non autorisé | 10 septembre 2026 |
| Choisir entre « comprendre » et « agir » | Tranché : le site fait les deux | 8 septembre 2026 |
